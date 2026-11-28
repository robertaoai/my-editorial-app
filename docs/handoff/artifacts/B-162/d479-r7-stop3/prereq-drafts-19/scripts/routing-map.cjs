// Read-only: build ROUTING-MAP.md for the 19 dated tier claims (Register at D-486, destination in the corrected 2a candidate).
// Usage: node routing-map.cjs <repo> <stoppedW> <candidateSha> <out.md>
"use strict";
const fs = require("fs"), cp = require("child_process");
const [REPO, SW, CAND, OUTMD] = process.argv.slice(2);
const show = (repo, spec) => cp.execFileSync("git", ["-C", repo, "show", spec], { encoding: "utf8", maxBuffer: 1 << 28 });
const reg = show(REPO, "30db8d51140c0e46700f96bb9f018e6e40b93cbc:docs/v1/V1-DECISION-REGISTER.md").split("\n");
const sm07 = show(SW, `${CAND}:docs/v1/work-packets/V1/V1-SM07.md`).split("\n");
const sm05 = show(SW, `${CAND}:docs/v1/work-packets/V1/V1-SM05.md`).split("\n");
const IDS = ["D-251","D-253","D-254","D-256","D-259","D-260","D-261","D-262","D-263","D-264","D-269","D-287","D-288","D-289","D-306","D-373","D-379","D-380","D-381"];
const ROW = { "D-251": 18701, "D-253": 18857, "D-254": 18903, "D-256": 19017, "D-259": 19174, "D-260": 19236, "D-261": 19290, "D-262": 19342, "D-263": 19377, "D-264": 19447, "D-269": 19836, "D-287": 20756, "D-288": 20807, "D-289": 20857, "D-306": 21678, "D-373": 24812, "D-379": 25095, "D-380": 25137, "D-381": 25219 };
const esc = (s) => s.replace(/\|/g, "\\|").replace(/\s+/g, " ").trim();
const clip = (s, n) => (s.length > n ? s.slice(0, n) + "…" : s);
const hit = (lines, id) => { const re = new RegExp(`\\b${id}\\b`); const i = lines.findIndex((l) => re.test(l)); return i < 0 ? null : { line: i + 1, text: lines[i] }; };
let section = null;
const sectionOf = (n) => { for (let i = n - 1; i >= 0; i--) { const m = /^#{2,3}\s+(5\.\S*)\s+`(D-\d+)`/.exec(reg[i]); if (m) return `${m[1]} \`${m[2]}\``; } return "?"; };
let md = "# Routing map — the 19 dated tier claims on `docs/v1/work-packets/V1/V1-SM05.md` (D-479 item 6)\n\n";
md += "Source: Register at D-486 `30db8d51140c0e46700f96bb9f018e6e40b93cbc` (rows unchanged). Destination: `docs/v1/work-packets/V1/V1-SM07.md` in the corrected `2a` scratch candidate `" + CAND + "` (rev2 `2a` plus the two verified corrections). Scratch candidate, not a final pin. Generated read-only.\n\n";
md += "| # | Claim | Register line (section) | Original tier row (verbatim, clipped) | Destination | Supporting passage in `V1-SM07.md` |\n|---:|---|---|---|---|---|\n";
IDS.forEach((id, k) => {
  const n = ROW[id]; const row = reg[n - 1];
  if (!row || !row.includes("V1-SM05.md") || !row.includes("✅")) throw new Error(`row ${n} for ${id} is not the expected ✅ V1-SM05.md tier row`);
  const h = hit(sm07, id); if (!h) throw new Error(`${id} absent from V1-SM07.md`);
  md += `| ${k + 1} | \`${id}\` | ${n} (${sectionOf(n)}) | ${esc(clip(row, 260))} | \`V1-SM07.md\` | line ${h.line}: ${esc(clip(h.text, 220))} |\n`;
});
const d251 = sm05.findIndex((l) => l.startsWith("## Access entitlement and evidence boundary (`D-251`)"));
md += `\n**D-251 current scope.** The new \`V1-SM05.md\` (candidate line ${d251 + 1}) keeps the section "Access entitlement and evidence boundary (\`D-251\`)" for the current \`EG5\` entitlement on \`ROUTE-PROD-1\`. It claims no historical evidence credit. The dated D-251 tier claim (row 18701, a two-target row also naming \`V1-SM06.md\`) follows the moved packet, and its \`V1-SM06.md\` target is still checked.\n`;
fs.writeFileSync(OUTMD, md);
console.log(`wrote ${IDS.length} rows`);
