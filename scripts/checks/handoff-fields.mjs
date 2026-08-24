// Shared metadata parsing for the `docs/handoff/` channel — `D-102`, raised as
// `B-017`.
//
// WHY THIS FILE EXISTS AT ALL.
//
// `handoff-response` (check 10) and `closure-readiness` (check 13) each carried
// their own copy of `field()` and `phaseRows()`. Both copies wrote the field
// pattern as:
//
//     ^-\s*\*\*Kind:\*\*\s*(.*)$
//
// `\s` matches a NEWLINE. So when a field is left blank and another field
// follows it, the trailing `\s*` steps over the line break and `(.*)` captures
// the NEXT metadata line. Demonstrated on the live entries:
//
//     "- **Kind:** \n- **Phase:** 1"   →   Kind = "- **Phase:** 1"
//
// `B-013`, `B-014` and `B-015` shipped with blank `Kind` values and check 10
// reported PASS on all three. **The green did not describe the files being
// judged** — a control-integrity defect, not a cosmetic one, because every
// other claim in this apparatus is read through these two functions.
//
// The fix is `[ \t]*` — horizontal whitespace may follow the marker, a newline
// may not. It lives here rather than in each check so a third caller cannot
// reintroduce the third copy of the bug. `phase-manifest` keeps its own parser
// deliberately: it reads manifest tables, not entry metadata.

import { existsSync, readFileSync } from "node:fs";

// Values that LOOK filled but are not. `?` and `—` were both live in the tree
// when this was written; `<...>` is an uncopied template placeholder.
const PLACEHOLDER = /^(<.*>|[—–-]+|\?+|n\/a|tbd|pending.*)$/i;

/**
 * Read one `- **Name:** value` metadata field.
 *
 * LINE-BOUNDED BY CONSTRUCTION. Returns `null` for absent, blank, and
 * placeholder values alike — a caller asking "is this filled in" gets one
 * answer, not three.
 */
export function field(text, name) {
  const m = new RegExp(`^-[ \\t]*\\*\\*${name}:\\*\\*[ \\t]*(.*)$`, "mi").exec(text);
  if (!m) return null;
  const v = m[1].trim();
  if (v === "" || PLACEHOLDER.test(v)) return null;
  return v;
}

/**
 * `true` when the field marker is present, whatever its value.
 *
 * `field()` cannot distinguish "the line is missing" from "the line is blank",
 * and those need different messages: one is a malformed file, the other is an
 * unfinished entry.
 */
export function fieldPresent(text, name) {
  return new RegExp(`^-[ \\t]*\\*\\*${name}:\\*\\*`, "mi").test(text);
}

const CLOSURE = "docs/v1/V1-PHASE-CLOSURE.md";

/**
 * Read `§5`'s phase register BY COLUMN NAME, never by position.
 *
 * Three positional-parsing defects preceded this approach: `phase-manifest`
 * dropped compound-path rows; the closure detector scanned the whole file and
 * matched `§1.1a`'s three-column table, reading its *Exit* column as `Closed`;
 * scoping to `§5` fixed that and then `§5` gained a Lane column, shifting every
 * index. **A header-driven parser cannot be broken by adding a column**, which
 * is why the approach changed rather than the pattern.
 */
export function phaseRows(text) {
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

/**
 * `{ seen, closed }` phase-number sets, or `null` when no register is legible.
 *
 * `seen` is what makes an UNKNOWN phase detectable. `B-017` item 4: an entry
 * whose `Phase` names nothing in the register silently drops out of every
 * closure gate, so a real blocker can disappear from the phase it blocks.
 */
export function phaseSets() {
  if (!existsSync(CLOSURE)) return null;
  const rows = phaseRows(readFileSync(CLOSURE, "utf8"));
  if (rows.length === 0) return null;
  return {
    seen: new Set(rows.map((r) => r.phase)),
    closed: new Set(rows.filter((r) => r.closed).map((r) => r.phase)),
  };
}

/** `B-` is Lane B (`D-90`), `C-` is Lane C (`D-92`). Lane A answers, never raises. */
export const ENTRY_FILE = /^[BC]-\d+.*\.md$/;

export const CLOSURE_PATH = CLOSURE;
