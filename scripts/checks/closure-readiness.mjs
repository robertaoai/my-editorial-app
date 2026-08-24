// `C-14` check 13 — `D-101`, raised as `B-011`: response is not closure.
//
// Check 10 tests RECEIPT — did Lane A look at the entry. `B-011` showed that
// `D-100` then used "all answered" as evidence that a phase's condition 2 was
// met. **A reply is not a fix.** Nothing distinguished an answer from an
// applied correction, a verified correction, a superseding decision, or a
// deferral with an owner.
//
// This check adds the missing half WITHOUT making the healthy case red:
//
//   * It is SILENT while no phase claims closure. During a sprint a full
//     backlog of `Open` and `Answered` entries is normal, and a check that
//     fired on that would be ignored inside a week (`D-83`, `D-90`).
//   * It FIRES when the phase register marks a phase closed, and then every
//     entry must carry a terminal `Resolution` — `Verified`, `Deferred` with a
//     `Follow-up-Tier`, `Withdrawn`, or `Superseded` with a `Superseded-By`.
//
// It also reports the derived closure matrix on every run, so the view exists
// without a second hand-maintained backlog file (`B-011` repair item 6).
//
// WHAT IT CANNOT DO — stated, not buried:
//   * It cannot tell whether `Evidence` is true. `Verified-At-Commit` is a
//     string; nothing re-runs the proof. This is the apparatus-wide
//     arrival-not-correctness limit (`F5`, `C-22`) in its newest instance.
//   * A `Resolution` is written by the same lane that answered the entry, so
//     the separation is procedural, not structural.
//
// Tracked files only, so it runs in CI.

import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const DIR = "docs/handoff";
const CLOSURE = "docs/v1/V1-PHASE-CLOSURE.md";

const TERMINAL = new Set(["verified", "deferred", "withdrawn", "superseded"]);

function field(text, name) {
  const m = new RegExp(`^-\\s*\\*\\*${name}:\\*\\*\\s*(.*)$`, "mi").exec(text);
  if (!m) return null;
  const v = m[1].trim();
  // An unfilled template placeholder is not a value.
  if (v === "" || /^<.*>$/.test(v) || v === "—") return null;
  return v;
}

// A phase claims closure when its `Closed` cell holds anything but a dash.

// Reads `§5`'s phase register by COLUMN NAME, not position.
//
// Three positional-parsing defects preceded this: `phase-manifest` dropped
// compound rows, this detector matched `§1.1a`'s three-column table, and then
// `§5` gained a Lane column and shifted every index. **A header-driven parser
// cannot be broken by adding a column**, which is why the approach changed
// rather than the pattern.
function phaseRows(text) {
  const lines = text.split("\n");
  const start = lines.findIndex((l) => /^#{2,3}\s+5\.\s+Phase register/.test(l));
  if (start < 0) return [];
  const rest = lines.slice(start + 1);
  const end = rest.findIndex((l) => /^#{2,3}\s/.test(l));
  const block = end < 0 ? rest : rest.slice(0, end);

  const cells = (l) => l.split("|").slice(1, -1).map((c) => c.trim());
  const header = block.find((l) => /^\|/.test(l) && /Closed/i.test(l) && /Phase/i.test(l));
  if (!header) return [];
  const cols = cells(header).map((c) => c.replace(/\*/g, "").toLowerCase());
  const iPhase = cols.findIndex((c) => c.startsWith("phase"));
  const iClosed = cols.findIndex((c) => c.startsWith("closed"));
  if (iPhase < 0 || iClosed < 0) return [];

  const out = [];
  for (const l of block) {
    if (!/^\|/.test(l) || l === header) continue;
    if (/^\|[\s:|-]+\|?$/.test(l)) continue; // separator
    const c = cells(l);
    if (c.length <= Math.max(iPhase, iClosed)) continue;
    const n = (c[iPhase].match(/\d/) || [])[0];
    if (!n) continue;
    out.push({ phase: n, closed: !/^[\s—–-]*$/.test(c[iClosed]) });
  }
  return out;
}

function anyPhaseClosed() {
  if (!existsSync(CLOSURE)) return false;
  return phaseRows(readFileSync(CLOSURE, "utf8")).some((r) => r.closed);
}

export function run() {
  if (!existsSync(DIR)) {
    return { name: "closure-readiness", findings: [], detail: `${DIR} absent` };
  }

  const entries = readdirSync(DIR).filter((f) => /^[BC]-\d+.*\.md$/.test(f));
  const gating = anyPhaseClosed();
  const findings = [];
  const tally = new Map();

  for (const file of entries) {
    const path = join(DIR, file);
    const text = readFileSync(path, "utf8");
    const status = (field(text, "Status") ?? "").toLowerCase();
    const resolution = field(text, "Resolution");
    const key = resolution ? resolution.split(/[\s—-]/)[0].toLowerCase() : status || "unknown";
    tally.set(key, (tally.get(key) ?? 0) + 1);

    if (!resolution) {
      if (gating) {
        findings.push(
          `${path}: no **Resolution:** — a phase claims closure and this entry is only "${status || "unset"}". A reply is not a fix.`,
        );
      }
      continue;
    }

    const kind = resolution.split(/[\s—-]/)[0].toLowerCase();
    if (!TERMINAL.has(kind)) {
      findings.push(
        `${path}: **Resolution:** "${resolution}" is not one of Verified, Deferred, Withdrawn, Superseded`,
      );
      continue;
    }
    // These two are only meaningful with their companion field, so a missing
    // one is checked always — it is a malformed entry, not a closure question.
    if (kind === "deferred" && !field(text, "Follow-up-Tier")) {
      findings.push(`${path}: Deferred with no **Follow-up-Tier:** — a deferral with no owner is a drop`);
    }
    if (kind === "superseded" && !field(text, "Superseded-By")) {
      findings.push(`${path}: Superseded with no **Superseded-By:** — nothing records what overtook it`);
    }
    if (kind === "verified" && !field(text, "Evidence")) {
      findings.push(`${path}: Verified with no **Evidence:** — a claim with nothing behind it`);
    }
  }

  const matrix = [...tally.entries()].sort().map(([k, n]) => `${k} ${n}`).join(", ");
  return {
    name: "closure-readiness",
    findings,
    detail: gating
      ? `closure claimed — gating active; ${matrix}`
      : `no phase claims closure — reporting only; ${matrix}`,
  };
}
