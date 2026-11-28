// B-157 AC2 — reconciles the Option C partition against Option A's frozen manifest and bindings.
// Reads files only; no Git, no shell. Any failed condition stops with exit 2 before a file is written.
//
//   node C-reconcile.mjs <A targets> <A bindings> <C1 targets> <C1 bindings> <C2 targets> <C2 bindings> <out file>
//
// Pass conditions: C1 and C2 target ids are disjoint; their union equals A's ids; each manifest entry equals A's
// entry for the same id (path, kind, range or node/field); each C1/C2 bound SHA-256 equals A's bound SHA-256 for that
// id; all bindings are at the same revision.
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const args = process.argv.slice(2);
if (args.length !== 7) { console.error("usage: node C-reconcile.mjs <A targets> <A bindings> <C1 targets> <C1 bindings> <C2 targets> <C2 bindings> <out file>"); process.exit(2); }
const sha = (b) => createHash("sha256").update(b).digest("hex");
const raw = args.slice(0, 6).map((p) => readFileSync(p));
const [aT, aB, c1T, c1B, c2T, c2B] = raw.map((b) => JSON.parse(b.toString("utf8")));
const fail = [];
const key = (t) => JSON.stringify({ path: t.path, kind: t.kind, from: t.from, to: t.to, node: t.node, field: t.field });
const aById = new Map(aT.targets.map((t) => [t.id, t]));
const aHash = new Map(aB.values.map((v) => [v.id, v.sha256]));
const ids1 = c1T.targets.map((t) => t.id), ids2 = c2T.targets.map((t) => t.id);
const overlap = ids1.filter((i) => ids2.includes(i));
if (overlap.length) fail.push(`overlap: ${overlap.join(", ")}`);
const union = new Set([...ids1, ...ids2]);
const missing = [...aById.keys()].filter((i) => !union.has(i));
const extra = [...union].filter((i) => !aById.has(i));
if (missing.length) fail.push(`missing from C1 ∪ C2: ${missing.join(", ")}`);
if (extra.length) fail.push(`not in A: ${extra.join(", ")}`);
for (const [name, T, B] of [["C1", c1T, c1B], ["C2", c2T, c2B]]) {
  for (const t of T.targets) if (aById.has(t.id) && key(t) !== key(aById.get(t.id))) fail.push(`${name} ${t.id}: target differs from A`);
  for (const v of B.values) if (aHash.get(v.id) !== v.sha256) fail.push(`${name} ${v.id}: bound SHA-256 differs from A`);
  if (B.values.length !== T.targets.length) fail.push(`${name}: ${B.values.length} bindings for ${T.targets.length} targets`);
  if (B.revision !== aB.revision) fail.push(`${name}: bound at ${B.revision}, A at ${aB.revision}`);
}
if (fail.length) { console.error(`C reconciliation STOPPED: ${fail.length} failure(s); nothing written.`); fail.forEach((f) => console.error(`  - ${f}`)); process.exit(2); }
const out = {
  schema: "B-157 C reconciliation v1", revision: aB.revision,
  inputs: Object.fromEntries(args.slice(0, 6).map((p, i) => [p.replace(/\\/g, "/"), sha(raw[i])])),
  scriptSha256: sha(readFileSync(fileURLToPath(import.meta.url))),
  A: aById.size, C1: ids1.length, C2: ids2.length, overlap: 0, unionEqualsA: true, hashesEqualA: true,
  C1ids: ids1, C2ids: ids2,
};
writeFileSync(args[6], JSON.stringify(out, null, 2) + "\n", { flag: "wx" });
console.log(`C reconciliation ok: C1 ${ids1.length} + C2 ${ids2.length} = A ${aById.size}; no overlap; every hash equals A at ${aB.revision.slice(0, 7)}`);
