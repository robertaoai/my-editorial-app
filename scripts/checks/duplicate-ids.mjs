// `C-14` check 3 — §5.1 duplicate-ID scan.
//
// Caught the `G39` row that carried both *Closed* and *Open* for one ID. A
// duplicate row is how a disposition silently forks: two rows, two answers, and
// nothing to say which is current.
//
// `G63` makes this sharper than it looks. An untracked `.gitattributes` sets
// `*.md merge=union`, which resolves a markdown conflict by keeping BOTH sides —
// so a conflicting edit to §5.1 produces duplicate rows rather than a conflict
// marker. That is precisely the defect this check detects.

import { readFileSync } from "node:fs";

const REGISTER = "docs/v1/V1-DECISION-REGISTER.md";
const SECTION = /^## 5\.1 /;

export function run() {
  const findings = [];
  let text;

  try {
    text = readFileSync(REGISTER, "utf8");
  } catch {
    return { name: "duplicate-ids", findings: [`${REGISTER}: missing`], detail: "not read" };
  }

  const lines = text.split("\n");
  const start = lines.findIndex((l) => SECTION.test(l));
  if (start < 0) {
    return { name: "duplicate-ids", findings: ["§5.1 heading not found"], detail: "not scanned" };
  }

  // The section ends at the next `## ` heading — not at `## 5.2`, because the
  // register numbers sections 5.14a…5.14ae and a naive `## 5.[2-9]` terminator
  // never matches, silently sweeping the whole document.
  const ids = [];
  for (let i = start + 1; i < lines.length; i++) {
    if (lines[i].startsWith("## ")) break;
    const m = lines[i].match(/^\|\s*`([^`]+)`/);
    if (m) ids.push(m[1]);
  }

  const seen = new Map();
  for (const id of ids) seen.set(id, (seen.get(id) ?? 0) + 1);

  for (const [id, n] of seen) {
    if (n > 1) findings.push(`duplicate disposition row: \`${id}\` appears ${n} times`);
  }

  return {
    name: "duplicate-ids",
    findings,
    detail: `${ids.length} rows, ${seen.size} distinct IDs`,
  };
}
