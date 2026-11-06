// R2-3 (Lane B review of 7d44bff): drafts the custody addendum. Map r1 stays unchanged. The addendum lists
// (A) map r1 itself as a transfer item, and every package file not in map r1 (r3 and later files), with full SHA-256;
// (B) the artifacts created after the initial transfer, with their disposition and trigger.
// Refuses to overwrite; refuses any link or junction in the source tree. Writes no repository file.
import { readFileSync, writeFileSync, readdirSync, lstatSync, existsSync } from "node:fs";
import { createHash } from "node:crypto";
const ROOT = "C:/CoWork/outputs/lane-a-d439-package-2026-10-16";
const DEST = "docs/handoff/artifacts/B-136/d439-package";
const MAP = `${ROOT}/r2/CUSTODY-MAP-D439-r1.md`;
const MAP_SHA = "c048275ea5f3a1d08a3d3d2787d01a6b17ef6a00b2bca6d540c5369a968aa144"; // stated in B-136 at 7d44bff
const OUTF = `${ROOT}/r3/CUSTODY-MAP-D439-ADDENDUM-r1.md`;
if (existsSync(OUTF)) throw new Error("addendum exists — refusing to overwrite");
const sha = p => createHash("sha256").update(readFileSync(p)).digest("hex");
if (sha(MAP) !== MAP_SHA) throw new Error("map r1 hash differs from the recorded value");
const walk = d => readdirSync(d).flatMap(n => {
  const p = `${d}/${n}`, st = lstatSync(p);
  if (st.isSymbolicLink()) throw new Error("link or junction in source tree: " + p);
  return st.isDirectory() ? walk(p) : [p];
});
const rel = p => p.slice(ROOT.length + 1);
const isClone = p => /^(r[23]\/)?runs\/[^/]+\/work\//.test(p);
// Clone folders are not walked (they may hold disposable junction leftovers only while a run is active).
const all = readdirSync(ROOT).flatMap(n => {
  const p = `${ROOT}/${n}`;
  if (!lstatSync(p).isDirectory()) return [p];
  const sub = (d) => readdirSync(d).flatMap(m => { const q = `${d}/${m}`, st = lstatSync(q); if (isClone(rel(q) + "/")) return []; if (st.isSymbolicLink()) throw new Error("link or junction in source tree: " + q); return st.isDirectory() ? sub(q) : [q]; });
  return sub(p);
}).map(rel);
const inMap = new Set([...readFileSync(MAP, "utf8").matchAll(/^\| \d+ \| `([^`]+)` \|/gm)].map(m => m[1]));
const extra = all.filter(p => !inMap.has(p) && !isClone(p) && p !== rel(OUTF) && p !== rel(MAP)).sort();
const status = p => /SUPERSEDED/.test(p) ? "superseded (kept as evidence)"
  : /^r3\/runs\//.test(p) ? (p.startsWith("r3/runs/20261016T101116Z-0373ac41b9bf/") ? "r3 control run evidence (56 results)" : "r3 self-test run evidence (deliberate failure)")
  : /^r3\//.test(p) ? "r3 draft; Lane B review pending" : "r2 evidence created after map r1";
const rows = [{ p: rel(MAP), h: MAP_SHA, s: "map r1 itself (R2-3)" }, ...extra.map(p => ({ p, h: sha(`${ROOT}/${p}`), s: status(p) }))];
let s = `# D-439 package custody addendum r1 (draft; R2-3)

**Binds:** map r1 \`r2/CUSTODY-MAP-D439-r1.md\` (SHA-256 \`${MAP_SHA}\`, stated in B-136 at \`7d44bff\`), unchanged.
**Source root / destination root / owner:** as in map r1 (\`${DEST}/\`; Lane A transfers, Lane B verifies committed bytes).
**This addendum's own bytes:** stated in the B-136 record that presents it; it is itself a transfer item (destination
\`${DEST}/r3/CUSTODY-MAP-D439-ADDENDUM-r1.md\`), checked against that stated hash.
**Transfer rule:** the transfer stops on any source hash change, any different existing destination, and any link or
junction in the source tree. Disposable clones (\`runs/*/work/\`) are excluded.

## A. Initial transfer — items not in map r1

| # | Source (relative) | SHA-256 | Proposed destination | Status |
|---|---|---|---|---|
`;
rows.forEach((r, i) => { s += `| A${i + 1} | \`${r.p}\` | \`${r.h}\` | \`${DEST}/${r.p}\` | ${r.s} |\n`; });
s += `
**Initial custody unit** = map r1 (218 rows) + section A (${rows.length} rows) + this addendum. **Trigger:** Lane B accepts package r3
and the Judge approves the transfer. One commit touches only \`${DEST}/\`. Lane B verifies the committed bytes.

## B. Artifacts created after the initial transfer

| Artifact | Created when | Disposition until custody | Custody trigger |
|---|---|---|---|
| Final ownership manifest (\`make-ownership-r2.mjs\` at the commit after Lane B's custody verification and the review records) | Before the act | External draft, hash stated in B-136; reviewed by Lane B | With the \`D-439\` application evidence, after the health record |
| Successor helper (r3 with only \`BASE\` and \`OWNERSHIP_SHA256\` changed) and its \`check-successor-d439.mjs\` log (diff lines, manifest binding, read-only S0) | Before the act | External draft, hashes stated in B-136; reviewed by Lane B | Same |
| Expected record for the act date (\`expected\` mode) | Before the application write | External, hash stated in the application record | Same |
| Application logs (\`apply\`, \`verify\`, \`verify-commit\`) | Application | External, hashes stated in the application record | Same |

**Reason for section B timing:** these files name \`D-439\`, and a manifest cannot list its own lines. Transferring them
before the act would change the ownership state that the final manifest binds. They are therefore an **approved
external disposition** until the application's health record, then one custody commit, then Lane B's byte verification.
`;
writeFileSync(OUTF, s, { flag: "wx" });
console.log(rows.length, "section A rows");
