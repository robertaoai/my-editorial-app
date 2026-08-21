// `C-14` check 6 — `G65`: decision status, cross-referenced in both directions.
//
// `G65` as opened asked the check to verify that a tier is CORRECT, not merely
// that a decision ARRIVED there. A script cannot semantically validate prose, so
// that framing is not buildable. What IS mechanical is a bidirectional
// cross-reference of decision status between the two places that record it:
//
//   the register  — `docs/v1/V1-DECISION-REGISTER.md`
//                   §5.14x decision headings announce a resolution;
//                   §5.1's opening line lists what the Chief Editor still owes.
//   the spec      — `docs/Modular_PRD.md` §10 carries one row per `Q`, whose
//                   last table cell is its status.
//
// Three ways those can disagree, all observed in this repository:
//
//   A. register says resolved, §10 still says Open   — `Q2` was like this for a
//      day after `D-57` answered it, while the tier sweep passed because `D-57`
//      appeared elsewhere in the same document.
//   B. §10 says Open and the Chief Editor owns it, but §5.1 omits it — `Q1`,
//      `Q7` and `Q10` were all missing, and `Q10` is the named blocker for
//      Stage D.
//   C. §5.1 lists an ID the register itself records as resolved — `Q2`, `QC`,
//      `G23` and `G24` were all listed as still owed after being decided.
//
// Owner matters for direction B: a `Q` owned by the customer or the sponsor is
// correctly absent from a list of CHIEF EDITOR decisions. Only Chief-Editor-owned
// rows are required to appear.

import { readFileSync } from "node:fs";

const REGISTER = "docs/v1/V1-DECISION-REGISTER.md";
const PRD = "docs/Modular_PRD.md";

function read(path) {
  try {
    return readFileSync(path, "utf8");
  } catch {
    return null;
  }
}

// IDs the register announces as decided, from decision headings and from the
// "`Q2` answered by `D-57`" phrasing used in §5.1 rows.
function resolvedIds(register) {
  const out = new Set();
  for (const m of register.matchAll(
    /^## 5\.14[a-z]+ `D-\d+` — `(Q\d+|Q[A-E]|G\d+)` (?:resolved|answered|closed)/gm,
  )) {
    out.add(m[1]);
  }
  for (const m of register.matchAll(
    /`(Q\d+|Q[A-E]|G\d+)` (?:resolved|answered) by `D-\d+`/g,
  )) {
    out.add(m[1]);
  }
  return out;
}

// §5.1's opening line: the IDs between "still to make.**" and the next bold run.
// Parsed narrowly on purpose — the line also carries a corrective note naming
// IDs that are NOT part of the list.
function outstandingList(register) {
  const line = register
    .split("\n")
    .find((l) => l.includes("Chief Editor decisions still to make"));
  if (!line) return null;
  const seg = line.split("still to make.**")[1]?.split("**")[0] ?? "";
  return new Set([...seg.matchAll(/`([A-Z]*Q?\d*[A-E]?\d*)`/g)].map((m) => m[1]).filter(Boolean));
}

// §10 rows: id → { status, owner }. Status is the last table cell.
function prdRows(prd) {
  const rows = new Map();
  for (const line of prd.split("\n")) {
    const m = line.match(/^\| `(Q\d+)` \|/);
    if (!m) continue;
    const cells = line.split("|").map((s) => s.trim());
    const status = (cells[cells.length - 2] ?? "").replace(/\*/g, "");
    const owner = cells.find((cl) => /^(Chief Editor|Customer|Sponsor|Team|Counsel)/i.test(cl)) ?? "";
    rows.set(m[1], { status, owner });
  }
  return rows;
}

// `G71` — every `G`-series row in §5.1, mapped to its status cell.
function gapRows(text) {
  const out = new Map();
  const re = /^\|\s*`(G\d+[a-z]?)`\s*\|\s*([^|]+)\|/gm;
  let m;
  while ((m = re.exec(text)) !== null) {
    if (!out.has(m[1])) out.set(m[1], m[2].replace(/\*/g, "").trim());
  }
  return out;
}

// `G71` — sections that assert a gap is closed. Two shapes are used in this
// register: a `## 5.14x` heading naming the gap and the word "closed", and a
// scope-limits sentence opening "Closes `GNN`". Deliberately narrow: prose
// that merely mentions a gap must not read as a closure claim.
function closureClaims(text) {
  const out = new Map();
  const heading = /^##\s+(5\.14\w*)\s+`(D-\d+)`[^\n]*`(G\d+[a-z]?)`[^\n]*\bclosed\b/gim;
  let m;
  while ((m = heading.exec(text)) !== null) out.set(m[3], `${m[2]} §${m[1]}`);

  const scope = /\bCloses\s+`(G\d+[a-z]?)`/g;
  while ((m = scope.exec(text)) !== null) {
    if (!out.has(m[1])) out.set(m[1], "a scope-limits claim");
  }
  return out;
}

export function run() {
  const findings = [];
  const register = read(REGISTER);
  const prd = read(PRD);

  if (!register) return { name: "decision-status", findings: [`${REGISTER}: missing`], detail: "not read" };
  if (!prd) return { name: "decision-status", findings: [`${PRD}: missing`], detail: "not read" };

  const resolved = resolvedIds(register);
  const listed = outstandingList(register);
  const rows = prdRows(prd);

  if (listed === null) {
    findings.push("§5.1's outstanding-decisions line not found — cannot cross-reference");
    return { name: "decision-status", findings, detail: "line missing" };
  }

  let compared = 0;

  for (const [id, { status, owner }] of rows) {
    const isOpen = /^Open\b/.test(status);
    compared++;

    // A — register says decided, the spec still says Open.
    if (resolved.has(id) && isOpen) {
      findings.push(`${id}: the register records it decided, but ${PRD} §10 still reads "Open"`);
    }

    // B — open, Chief-Editor-owned, but absent from what they are told they owe.
    if (isOpen && /^Chief Editor/i.test(owner) && !listed.has(id)) {
      findings.push(`${id}: Open and Chief-Editor-owned in §10, but absent from §5.1's outstanding list`);
    }
  }

  // C — the list names something already decided.
  for (const id of listed) {
    if (resolved.has(id)) {
      findings.push(`${id}: listed in §5.1 as still to make, but the register records it decided`);
    }
  }

  // D — `G71`: a gap whose §5.1 status still reads Open while a decision
  // section in the SAME FILE claims to close it.
  //
  // This hid `G54` for two days. `D-60` §5.14u closes it explicitly and even
  // marks its tier table "Register ✅" — but the tier sweep treats `register`
  // as true by construction (`files: []`), so a ✅ there proves nothing about
  // §5.1. The index and the section that contradicts it live in one file, and
  // nothing compared them.
  const gaps = gapRows(register);
  const claimed = closureClaims(register);
  let gapsCompared = 0;

  for (const [id, status] of gaps) {
    gapsCompared++;
    if (/^Open\b/.test(status) && claimed.has(id)) {
      findings.push(
        `${id}: §5.1 still reads "Open" but ${claimed.get(id)} claims to close it — same file, two answers`,
      );
    }
  }

  return {
    name: "decision-status",
    findings,
    detail: `${compared} §10 rows vs ${listed.size} listed, ${resolved.size} decided; ${gapsCompared} gap rows vs ${claimed.size} closure claims`,
  };
}
