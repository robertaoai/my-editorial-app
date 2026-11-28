// B-157 AC2-R1 — reconciliation revision 2. Revision 1 (C-reconcile.mjs) stays unchanged as history.
// Reads files only; no Git, no shell. Any failed condition stops with exit 2 before a file is written.
//
//   node C-reconcile-r2.mjs <A targets> <A bindings> <C1 targets> <C1 bindings> <C2 targets> <C2 bindings> <out file>
//
// Changes from revision 1 (Lane B's AC2-R1 counterexamples):
//   * Bindings are checked one-to-one: every manifest target id has EXACTLY ONE binding, no binding id is
//     duplicated, and no binding id is outside the manifest (counts alone are not enough).
//   * Each binding's locator (path, kind, from/to or node/field) must equal its manifest target's locator.
//   * The SHA-256 of every binding's full `value` is RECOMPUTED and must equal both the binding's stored
//     `sha256` and A's recomputed hash for that id (a stored hash label alone is not trusted).
//   * A's own bindings get the same one-to-one, locator and recomputed-hash checks.
// Unchanged from revision 1: C1/C2 ids disjoint; union equals A; manifest entries equal A's; one revision.
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";

const sha = (b) => createHash("sha256").update(b).digest("hex");
const loc = (t) => JSON.stringify({ path: t.path, kind: t.kind, from: t.from, to: t.to, node: t.node, field: t.field });

// Returns { failures, summary }. Pure: takes parsed objects.
export function reconcile({ aT, aB, c1T, c1B, c2T, c2B }) {
  const fail = [];
  const checkUnit = (name, T, B) => {
    const tIds = T.targets.map((t) => t.id);
    const dupT = tIds.filter((id, i) => tIds.indexOf(id) !== i);
    if (dupT.length) fail.push(`${name}: duplicate target ids: ${[...new Set(dupT)].join(", ")}`);
    const byId = new Map();
    for (const v of B.values) {
      if (byId.has(v.id)) { fail.push(`${name}: duplicate binding for ${v.id}`); continue; }
      byId.set(v.id, v);
    }
    for (const id of tIds) if (!byId.has(id)) fail.push(`${name}: no binding for target ${id}`);
    for (const id of byId.keys()) if (!tIds.includes(id)) fail.push(`${name}: binding ${id} has no manifest target`);
    const hashes = new Map();
    for (const t of T.targets) {
      const v = byId.get(t.id);
      if (!v) continue;
      if (loc(v) !== loc(t)) fail.push(`${name} ${t.id}: binding locator differs from its manifest target`);
      if (typeof v.value !== "string") { fail.push(`${name} ${t.id}: binding has no full value`); continue; }
      const h = sha(v.value);
      if (h !== v.sha256) fail.push(`${name} ${t.id}: recomputed SHA-256 of the value differs from the stored hash`);
      hashes.set(t.id, h);
    }
    return { tIds, hashes };
  };
  const A = checkUnit("A", aT, aB);
  const C1 = checkUnit("C1", c1T, c1B);
  const C2 = checkUnit("C2", c2T, c2B);
  const aById = new Map(aT.targets.map((t) => [t.id, t]));
  const overlap = C1.tIds.filter((i) => C2.tIds.includes(i));
  if (overlap.length) fail.push(`overlap: ${overlap.join(", ")}`);
  const union = new Set([...C1.tIds, ...C2.tIds]);
  const missing = A.tIds.filter((i) => !union.has(i));
  const extra = [...union].filter((i) => !aById.has(i));
  if (missing.length) fail.push(`missing from C1 ∪ C2: ${missing.join(", ")}`);
  if (extra.length) fail.push(`not in A: ${extra.join(", ")}`);
  for (const [name, T, U] of [["C1", c1T, C1], ["C2", c2T, C2]]) {
    for (const t of T.targets) if (aById.has(t.id) && loc(t) !== loc(aById.get(t.id))) fail.push(`${name} ${t.id}: target differs from A`);
    for (const [id, h] of U.hashes) if (A.hashes.has(id) && A.hashes.get(id) !== h) fail.push(`${name} ${id}: recomputed value hash differs from A's`);
  }
  for (const [name, B] of [["C1", c1B], ["C2", c2B]]) if (B.revision !== aB.revision) fail.push(`${name}: bound at ${B.revision}, A at ${aB.revision}`);
  return { failures: fail, summary: { revision: aB.revision, A: A.tIds.length, C1: C1.tIds.length, C2: C2.tIds.length, C1ids: C1.tIds, C2ids: C2.tIds } };
}

export function main(args, log = console) {
  if (args.length !== 7) { log.error("usage: node C-reconcile-r2.mjs <A targets> <A bindings> <C1 targets> <C1 bindings> <C2 targets> <C2 bindings> <out file>"); return 2; }
  const raw = args.slice(0, 6).map((p) => readFileSync(p));
  const [aT, aB, c1T, c1B, c2T, c2B] = raw.map((b) => JSON.parse(b.toString("utf8")));
  const { failures, summary } = reconcile({ aT, aB, c1T, c1B, c2T, c2B });
  if (failures.length) { log.error(`C reconciliation r2 STOPPED: ${failures.length} failure(s); nothing written.`); failures.forEach((f) => log.error(`  - ${f}`)); return 2; }
  const out = { schema: "B-157 C reconciliation v2", ...summary, overlap: 0, unionEqualsA: true, oneBindingPerTarget: true, locatorsMatch: true, valueHashesRecomputedAndEqualA: true,
    inputs: Object.fromEntries(args.slice(0, 6).map((p, i) => [p.replace(/\\/g, "/"), sha(raw[i])])), scriptSha256: sha(readFileSync(fileURLToPath(import.meta.url))) };
  writeFileSync(args[6], JSON.stringify(out, null, 2) + "\n", { flag: "wx" });
  log.log(`C reconciliation r2 ok: C1 ${summary.C1} + C2 ${summary.C2} = A ${summary.A}; one binding per target; locators match; every value re-hashed and equal to A at ${summary.revision.slice(0, 7)}`);
  return 0;
}

if (process.argv[1] && resolve(fileURLToPath(import.meta.url)).toLowerCase() === resolve(process.argv[1]).toLowerCase()) process.exit(main(process.argv.slice(2)));
