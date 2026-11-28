// B-157 AC2-R1 — positive and negative controls for C-reconcile-r2.mjs.
//
//   node C-reconcile-r2-controls.mjs <A targets> <A bindings> <C1 targets> <C1 bindings> <C2 targets> <C2 bindings> <scratch dir> <summary out file>
//
// Each arm writes into its own new subdirectory of <scratch dir>. Expected: the valid arm exits 0 and writes one
// file; every negative arm exits 2 and writes NO file. Arms 3 and 4 are Lane B's AC2-R1 counterexamples, which
// revision 1 accepted. Exits 0 only when every arm meets its expectation.
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { createHash } from "node:crypto";
import { main } from "./C-reconcile-r2.mjs";

const sha256Hex = (s) => createHash("sha256").update(s).digest("hex");

const args = process.argv.slice(2);
if (args.length !== 8) { console.error("usage: node C-reconcile-r2-controls.mjs <6 inputs> <scratch dir> <summary out file>"); process.exit(2); }
const [inputs, scratch, summaryOut] = [args.slice(0, 6), args[6], args[7]];
if (existsSync(scratch) && readdirSync(scratch).length) { console.error(`scratch dir not empty: ${scratch}`); process.exit(2); }
const load = (i) => JSON.parse(readFileSync(inputs[i], "utf8"));

// Each arm returns the six objects (indices: 0 aT, 1 aB, 2 c1T, 3 c1B, 4 c2T, 5 c2B), mutated in memory.
const arms = [
  { name: "valid", expect: 0, make: () => [0, 1, 2, 3, 4, 5].map(load) },
  { name: "overlap (one C2 target also in C1)", expect: 2, make: () => { const o = [0, 1, 2, 3, 4, 5].map(load); o[2].targets.push(o[4].targets[0]); o[3].values.push(o[5].values[0]); return o; } },
  { name: "full value altered, stored hash unchanged (Lane B AC2-R1 case 1)", expect: 2, make: () => { const o = [0, 1, 2, 3, 4, 5].map(load); o[3].values[0].value += " ALTERED"; return o; } },
  { name: "one binding duplicated, another omitted, same count (Lane B AC2-R1 case 2)", expect: 2, make: () => { const o = [0, 1, 2, 3, 4, 5].map(load); o[3].values[1] = JSON.parse(JSON.stringify(o[3].values[0])); return o; } },
  { name: "binding locator differs from its target", expect: 2, make: () => { const o = [0, 1, 2, 3, 4, 5].map(load); const v = o[3].values.find((x) => x.kind === "lines"); v.to += 1; return o; } },
  { name: "value and stored hash both altered consistently (differs from A)", expect: 2, make: () => { const o = [0, 1, 2, 3, 4, 5].map(load); const v = o[5].values[0]; v.value += " X"; v.sha256 = sha256Hex(v.value); return o; } },
];

const results = arms.map((arm, i) => {
  const dir = join(scratch, `arm-${i}`);
  mkdirSync(dir, { recursive: true });
  const objs = arm.make();
  const paths = objs.map((o, k) => { const p = join(dir, `in-${k}.json`); writeFileSync(p, JSON.stringify(o)); return p; });
  const outFile = join(dir, "out", "result.json");
  mkdirSync(join(dir, "out"));
  const msgs = [];
  const code = main([...paths, outFile], { log: (m) => msgs.push(m), error: (m) => msgs.push(m) });
  const written = existsSync(outFile) ? 1 : 0;
  const ok = arm.expect === 0 ? code === 0 && written === 1 : code === 2 && written === 0;
  return { arm: arm.name, expectedExit: arm.expect, exit: code, outputWritten: written === 1, ok, messages: msgs };
});
const summary = { schema: "B-157 C reconciliation r2 controls v1", arms: results.length, passed: results.filter((r) => r.ok).length, results };
writeFileSync(summaryOut, JSON.stringify(summary, null, 2) + "\n", { flag: "wx" });
for (const r of results) console.log(`${r.ok ? "ok  " : "FAIL"} ${r.arm}: exit ${r.exit}, output ${r.outputWritten ? "written" : "none"}`);
process.exit(summary.passed === summary.arms ? 0 : 1);
