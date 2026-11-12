// F4 (Lane B review of eb0aa44): drafts the D-439 package custody map. Lists every package file under
// C:/CoWork/outputs/lane-a-d439-package-2026-10-16/ except disposable clones (runs/*/work/) and their outputs, with full
// SHA-256, proposed repository destination, owner, status and transfer trigger. Refuses to overwrite. Writes no repository file.
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { createHash } from "node:crypto";
const ROOT = "C:/CoWork/outputs/lane-a-d439-package-2026-10-16";
const DEST = "docs/handoff/artifacts/B-136/d439-package";
const OUTF = `${ROOT}/r2/CUSTODY-MAP-D439-r1.md`;
if (existsSync(OUTF)) throw new Error("custody map exists — refusing to overwrite");
const FINAL = process.argv[2]; // the r2 control run folder name
if (!FINAL || !existsSync(`${ROOT}/r2/runs/${FINAL}/results.txt`)) throw new Error("name the r2 control run folder");
const walk = d => readdirSync(d).flatMap(n => { const p = `${d}/${n}`; return statSync(p).isDirectory() ? walk(p) : [p]; });
const rel = p => p.slice(ROOT.length + 1);
const files = walk(ROOT).map(rel).filter(p => !/^(r2\/)?runs\/[^/]+\/work\//.test(p) && p !== rel(OUTF)).sort();
const status = p => {
  if (/SUPERSEDED/.test(p)) return "superseded (kept as evidence)";
  if (p === "D439-EXECUTION-PACKAGE-r1.md") return "r1 index; r1 not ready for application (Lane B)";
  if (p === "ev-apply-d439-r1.mjs" || p === "run-controls-d439-r1.sh") return "r1; rejected for application (F1-F3); kept";
  if (/^runs\//.test(p)) return "r1 run evidence; K2/K3 accepted by Lane B";
  if (/^r2\/runs\//.test(p)) return p.startsWith(`r2/runs/${FINAL}/`) ? "r2 control run evidence (42 results)" : "r2 self-test run evidence (deliberate failure)";
  if (/^r2\//.test(p)) return "r2 draft; Lane B review pending";
  return "r1 supporting file";
};
const rows = files.map(p => ({ p, h: createHash("sha256").update(readFileSync(`${ROOT}/${p}`)).digest("hex"), d: `${DEST}/${p}` }));
const dests = new Set(rows.map(r => r.d));
if (dests.size !== rows.length) throw new Error("duplicate destination");
let s = `# D-439 package custody map r1 (draft; F4)

**Source root:** \`${ROOT}/\` (drafts). **Destination root:** \`${DEST}/\` (proposed; same relative paths).
**Owner:** Lane A (transfer and commit); Lane B (independent verification of committed bytes).
**Excluded:** disposable clones under \`runs/*/work/\` and their \`.out\` folders (not evidence; re-creatable by the harness);
this map's own bytes are stated in the recording handoff entry.
**Transfer trigger:** Lane B accepts package r2 and the Judge approves the transfer. **Order:** (1) transfer in one commit
touching only \`${DEST}/\`; (2) Lane B verifies committed bytes against this map; (3) Lane A builds the final ownership
manifest at the commit after that verification and any review records, and a pin-only helper successor; (4) Lane B
reviews that manifest and diff; (5) the Judge decides the \`D-439\` acts. The transfer adds lines naming \`D-439\` and code
files under \`docs/handoff/\`; step (3) covers the first, and the next guarded cycle assesses graph coverage of the second.
**Status kept:** transfer establishes custody only; it does not apply \`D-439\` or change any file's review status.

| # | Source (relative) | SHA-256 | Proposed destination | Status |
|---|---|---|---|---|
`;
rows.forEach((r, i) => { s += `| ${i + 1} | \`${r.p}\` | \`${r.h}\` | \`${r.d}\` | ${status(r.p)} |\n`; });
s += `\n**Rows:** ${rows.length}. Before transfer, every source hash is checked again; a different existing destination stops the transfer.\n`;
writeFileSync(OUTF, s, { flag: "wx" });
console.log(rows.length, "rows");
