// `C-14` check 10 — `D-90`: does a build lane's feedback get read?
//
// EXTENDED BY `D-92` to Lane C. As written for `D-90` the filename filter was
// `/^B-d+/`, so a `C-NNN` entry was not merely unchecked — it was INVISIBLE.
// The check would have reported "no entries" while Lane C's blocker sat in the
// directory, which is the exact failure this check exists to prevent, aimed at
// the one lane it did not cover. A control scoped to one lane is a control that
// cannot fail for the others.
//
// `D-75` required a handoff at every lane boundary and named no location for
// it. `docs/handoff/` is that location. This check closes the loop: without
// one, an entry can sit unread exactly as `G54` sat stale in §5.1 for two days
// while every check passed.
//
// WHAT IT FAILS ON:
//   * a malformed entry — missing `Kind`, `Status`, or `Lane A`
//   * `Status: Answered` with an empty `Lane A` line — a claim with nothing
//     behind it
//   * `Status: Open` with NO acknowledgement — the "feedback sits unread" case
//
// WHAT IT DELIBERATELY DOES NOT FAIL ON:
//   * an open entry that HAS been acknowledged. A queue is healthy. Failing on
//     one would make `bun run check` red whenever a lane has a pending request,
//     and a check that is red in the normal case is a check people stop
//     reading — the reasoning `D-83` used to make `lane-boundary` report a
//     crossing rather than forbid one.
//
// WHAT IT CANNOT DO — stated, not buried:
//   * It checks FORM, not substance. It cannot tell whether an answer is
//     correct, or whether a `Withdrawn` was justified — the same
//     arrival-not-correctness limit `G65` records for the tier sweep.
//   * Reading the entries is still a person's job.
//   * It cannot make a lane write an entry. A blocker never recorded is
//     invisible to it.
//
// Tracked files only, so it runs in CI.

import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const DIR = "docs/handoff";
const CLOSURE = "docs/v1/V1-PHASE-CLOSURE.md";

// `C-19` (`D-95`, raised as `B-010`) — `Reopens-Phase:` enforcement.
//
// `D-93` added the field and deferred the check because no phase had closed,
// which would have made it vacuous. `B-010` showed that reasoning was already
// stale: the field can be WRONGLY used before any phase closes, and it was —
// `B-004` and `B-005` carried `Reopens-Phase: 1` against a phase that never
// closed. **Reopening presupposes a closure.** The check is non-vacuous
// because the error it catches does not require a closed phase to exist.
//
// Reads §5's phase register: a row is closed when its `Closed` cell holds
// anything other than a dash.
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

function closedPhases() {
  if (!existsSync(CLOSURE)) return null;
  const rows = phaseRows(readFileSync(CLOSURE, "utf8"));
  if (rows.length === 0) return null;
  return {
    seen: new Set(rows.map((r) => r.phase)),
    closed: new Set(rows.filter((r) => r.closed).map((r) => r.phase)),
  };
}

// `Acknowledged`, `Answered`, `Withdrawn` — anything else is not a disposition.
const DISPOSITIONS = /^(Acknowledged|Answered|Withdrawn)\b/i;

function field(text, name) {
  const m = new RegExp(`^-\\s*\\*\\*${name}:\\*\\*\\s*(.*)$`, "mi").exec(text);
  return m ? m[1].trim() : null;
}

export function run() {
  if (!existsSync(DIR)) {
    return {
      name: "handoff-response",
      findings: [],
      detail: `${DIR} absent — no channel, no entries`,
    };
  }

  // `B-` is Lane B (`D-90`), `C-` is Lane C (`D-92`). Lane A does not raise
  // entries here — it answers them; a Lane A concern goes in the register.
  const entries = readdirSync(DIR).filter((f) => /^[BC]-\d+.*\.md$/.test(f));
  const findings = [];
  const phases = closedPhases();
  let reopening = 0;
  let open = 0;
  let answered = 0;
  let withdrawn = 0;

  for (const file of entries) {
    const path = join(DIR, file);
    let text;
    try {
      text = readFileSync(path, "utf8");
    } catch {
      findings.push(`${path}: unreadable`);
      continue;
    }

    const kind = field(text, "Kind");
    const status = field(text, "Status");
    const response = field(text, "Lane A");
    const reopens = field(text, "Reopens-Phase");

    // `C-19`. A missing field is the normal case and never a finding.
    if (reopens !== null && reopens !== "") {
      const phase = reopens.trim().replace(/[^0-9]/g, "");
      if (!phase) {
        findings.push(`${path}: **Reopens-Phase:** "${reopens}" names no phase number`);
      } else if (phases === null) {
        findings.push(`${path}: **Reopens-Phase:** ${phase} — no phase register found in ${CLOSURE}`);
      } else if (!phases.seen.has(phase)) {
        findings.push(`${path}: **Reopens-Phase:** ${phase} — no such phase in the register`);
      } else if (!phases.closed.has(phase)) {
        findings.push(
          `${path}: **Reopens-Phase:** ${phase} — but phase ${phase} has never closed. Reopening presupposes a closure; a finding against an open phase is an ordinary entry and needs no field.`,
        );
      } else {
        reopening++;
      }
    }

    if (!kind) findings.push(`${path}: no **Kind:** field — cannot route it`);
    if (!status) {
      findings.push(`${path}: no **Status:** field — cannot tell if it is live`);
      continue;
    }
    if (response === null) {
      findings.push(`${path}: no **Lane A:** field — nowhere to record a disposition`);
      continue;
    }

    const acknowledged = DISPOSITIONS.test(response);

    if (/^Open\b/i.test(status)) {
      open++;
      if (!acknowledged) {
        findings.push(
          `${path}: Open with no Lane A disposition — feedback is sitting unread. Add \`Acknowledged\` at minimum; answering can wait, seeing it cannot.`,
        );
      }
    } else if (/^Answered\b/i.test(status)) {
      answered++;
      if (!response) {
        findings.push(`${path}: Status is Answered but the **Lane A:** line is empty`);
      }
    } else if (/^Withdrawn\b/i.test(status)) {
      withdrawn++;
      if (!response) {
        findings.push(
          `${path}: Withdrawn with no reason — a withdrawal with nothing behind it is not a disposition`,
        );
      }
    } else {
      findings.push(`${path}: Status "${status}" is not Open, Answered, or Withdrawn`);
    }
  }

  const detail =
    entries.length === 0
      ? "channel installed, no entries yet"
      : `${entries.length} entr${entries.length === 1 ? "y" : "ies"}: ${open} open, ${answered} answered, ${withdrawn} withdrawn${reopening ? `, ${reopening} reopening a closed phase` : ""}`;

  return { name: "handoff-response", findings, detail };
}
