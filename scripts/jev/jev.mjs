// Jev System One CLI (`D-259`). See `lib.mjs` for what a receipt does and does not mean.
//
//   bun run jev readiness  --manifest scripts/jev/manifests/V1-SM05.json [--out <receipt.json>]
//   bun run jev completion --manifest scripts/jev/manifests/V1-SM05.json --evidence <evidence.json> [--out <receipt.json>]
//   bun run jev pins       --manifest scripts/jev/manifests/V1-SM05.json
//
// Exit 0 only when every deterministic rule holds. Only failures are printed in
// full; the receipt carries every result.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { completion, pins, readiness } from "./lib.mjs";

const root = process.cwd();
const [mode, ...rest] = process.argv.slice(2);
const arg = (name) => {
  const i = rest.indexOf(`--${name}`);
  return i >= 0 ? rest[i + 1] : undefined;
};

const manifest = arg("manifest");
if (!manifest || !["readiness", "completion", "pins"].includes(mode)) {
  console.error("usage: jev <readiness|completion|pins> --manifest <path> [--evidence <path>] [--out <path>]");
  process.exit(2);
}

if (mode === "pins") {
  console.log(JSON.stringify(pins(root, manifest), null, 2));
  process.exit(0);
}

const receipt = mode === "readiness" ? readiness(root, manifest) : completion(root, manifest, arg("evidence") ?? "");
const failed = receipt.results.filter((r) => !r.ok);

for (const f of failed) console.log(`  FAIL  ${f.rule.padEnd(24)} ${f.subject}${f.detail ? ` — ${f.detail}` : ""}`);
console.log(`\n${receipt.tool} ${receipt.mode} · ${receipt.packet} · ${receipt.outcome} · ${receipt.results.length - failed.length}/${receipt.results.length} rules hold`);
if (!receipt.treeClean) console.log("  note  working tree is not clean — the receipt pins HEAD, not the uncommitted edits");
console.log(`  ${receipt.meaning}`);

const out = arg("out");
if (out) {
  mkdirSync(dirname(join(root, out)), { recursive: true });
  writeFileSync(join(root, out), JSON.stringify(receipt, null, 2) + "\n");
  console.log(`  receipt → ${out}`);
}
process.exit(failed.length === 0 ? 0 : 1);
