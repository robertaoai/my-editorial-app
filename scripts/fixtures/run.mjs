// `bun run fixtures` — the negative fixtures for the `C-14` apparatus.
//
// `bun run check` proves the checks pass on a healthy repository. **These prove
// they FAIL on an unhealthy one**, which is the half that was never in the
// repository: fourteen claims of *"negative-tested N ways"* across the register
// and the inventory, and not one runnable fixture behind any of them (`D-106`).
//
// Every suite mutates the real working tree. That is deliberate — a fixture
// against a synthetic copy proves the check works on the copy — and it is why
// this refuses to start unless the tree is clean.

import { treeIsClean } from "./harness.mjs";
import { SUITES } from "./suites.mjs";

if (!treeIsClean()) {
  console.error("");
  console.error("  fixtures: the working tree is not clean.");
  console.error("");
  console.error("  These fixtures edit tracked files and restore them. Running on a dirty");
  console.error("  tree means a crash mid-fixture leaves damage that is indistinguishable");
  console.error("  from your own uncommitted work.");
  console.error("");
  console.error("  Commit or stash first.");
  console.error("");
  process.exit(2);
}

const results = [];
let failedSuite = false;

for (const [name, suite] of SUITES) {
  const before = results.length;
  try {
    await suite(results);
  } catch (e) {
    results.push({ name: `${name} — SUITE`, ok: false, detail: `threw: ${e.message}` });
    failedSuite = true;
  }
  const mine = results.slice(before);
  const bad = mine.filter((r) => !r.ok).length;
  console.log(`\n${bad ? "FAIL" : "ok  "}  ${name} — ${mine.length - bad}/${mine.length}`);
  for (const r of mine) console.log(`      ${r.ok ? "ok  " : "MISS"}  ${r.name} — ${r.detail}`);
}

// A suite that leaves the tree dirty has cost more than it proved, so this is
// reported as a failure of the fixtures themselves, not as a finding.
const clean = treeIsClean();
const bad = results.filter((r) => !r.ok).length;

console.log("");
console.log(`  ${results.length - bad}/${results.length} fixtures behaved as intended`);
console.log(`  working tree restored: ${clean ? "yes" : "NO — inspect `git status` before continuing"}`);
console.log("");

process.exit(bad || failedSuite || !clean ? 1 : 0);
