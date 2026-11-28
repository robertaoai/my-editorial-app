// Finalize the Layer 4 table: resolve every "manual" hit from classify.json to a category with a cited reason.
// Categories: L = live, re-pointed or rewritten by 2a/2b; D = dated (item 6 record class, dated text, or an added reading rule);
// R = kept by an explicit ruling (D-479 tier row, rev2 §2, or the Judge's Phase Closure ruling), accepted as "keep" by the
// Judge's gate answer at transcript line 783; N = not a slot label (branch name, code comment example); H = graph fragment, held.
"use strict";
const fs = require("fs");
const [IN, OUTJSON, OUTMD] = process.argv.slice(2);
const rows = JSON.parse(fs.readFileSync(IN, "utf8"));
const rule = (r) => {
  const f = r.file, n = r.line, t = r.text;
  if (f === "docs/ENCYCLOPEDIA-SYNC.md") return ["R", "rev2 §2 classified-not-edited: lines 34–63 are dated flag history"];
  if (f === "docs/Modular_PRD.md") {
    if (n >= 70 && n <= 95) return ["D", "dated changelog row"];
    if (/Corrected 20\d\d-\d\d-\d\d|Closed 20\d\d-\d\d-\d\d|Current, 20\d\d-\d\d-\d\d/.test(t)) return ["D", "dated text in line"];
    return ["R", "D-479 tier row (Modular_PRD): no requirement or acceptance text changes; 2b adds the §8.1 dated note"];
  }
  if (f === "docs/fn-specs/FN-GATES-01-05.md") return ["R", "D-479 tier row (FN-GATES-01-05.md): §1–10 unchanged; 2b adds the §11 lifecycle note"];
  if (f === "docs/fn-specs/FN-MULTI-LANE-AI-GOVERNANCE.md") return ["R", "rev2 §2 classified-not-edited: §10 [V1] negative limit"];
  if (f === "docs/fn-specs/FN-PUBLICATION-09-10-13.md") return ["D", "dated text in line (Corrected 2026-09-25, D-265)"];
  if (f === "docs/governance/factory-route-operation-crosswalk.md") return ["D", "inside the D-233 section corrected 2026-09-17 (dated). CORRECTION: rev2 §2 says this file has no qualified reference; it has two (lines 241, 245) — Judge gate answer line 783: record and disclose"];
  if (f === "docs/governance/requirements-traceability-map.md") {
    if ([136, 146, 213].includes(n)) return ["R", "rev2 §2 Retained: Traceability lines 136, 146 and 213"];
    if (n >= 238) return ["D", "below the 2a §6.1 re-slot note, whose reading rule covers \"the dated paragraphs and tables below\""];
  }
  if (f === "docs/specs/SPECS-TRANSITION-ENFORCEMENT.md") return ["R", "rev2 §2 classified-not-edited: inside the dated 2026-10-15 D-438 correction note"];
  if (f === "docs/specs/SPECS-VERIFICATION-APPARATUS.md") return ["R", "rev2 §2 classified-not-edited: dated (\"Met 2026-09-24\")"];
  if (f === "docs/v1/V1-ARTIFACT-INVENTORY.md") return ["D", "dated Inventory row or dated decision paragraph (creation date or `D-NNN` (date) heading)"];
  if (f === "docs/v1/V1-PHASE-CLOSURE.md") return ["R", "Judge ruling (rev2 §1–§2): cell preserved; 2b adds the D-479 slot note below the §5 table"];
  if (f === "scripts/checks/tier-sweep.mjs") return ["N", "rev2 §2 classified-not-edited: path-resolution comment example"];
  if (f === "scripts/fixtures/graphify-guard.test.mjs") return ["N", "rev2 §2 classified-not-edited: branch name features/feature-V1-SM05, kept by name"];
  return null;
};
let unresolved = [];
for (const r of rows) {
  if (r.cls !== "?") continue;
  const x = rule(r);
  if (!x) { unresolved.push(r); continue; }
  [r.cls, r.why] = x;
}
fs.writeFileSync(OUTJSON, JSON.stringify(rows, null, 1) + "\n");
const tally = {}; for (const r of rows) tally[r.cls] = (tally[r.cls] || 0) + 1;
const esc = (s) => s.replace(/\|/g, "\\|").slice(0, 160);
let md = `# Layer 4 classification — \`git grep -n -E "V1-SM0[56]" -- docs scripts .github ':!docs/handoff' ':!docs/journal'\` at 30db8d5 (tree 0b558d2)\n\n`;
md += `Totals: ${rows.length} hits; ${Object.entries(tally).map(([k, v]) => `${k} ${v}`).join("; ")}. Unresolved: ${unresolved.length}.\n\n`;
md += "L = rewritten by 2a/2b; D = dated (item 6 record class, dated text or added reading rule); R = kept by an explicit ruling (Judge gate answer, transcript line 783); N = not a slot label; H = graph fragment, held (Layer 2).\n\n";
md += "| File | Line | Class | Reason | Text |\n|---|---:|---|---|---|\n";
for (const r of rows) md += `| ${r.file} | ${r.line} | ${r.cls} | ${esc(r.why)} | ${esc(r.text)} |\n`;
fs.writeFileSync(OUTMD, md);
console.log(JSON.stringify({ total: rows.length, tally, unresolved: unresolved.map((r) => `${r.file}:${r.line}`) }));
