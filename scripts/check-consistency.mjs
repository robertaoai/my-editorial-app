// `C-14` — the four detection checks, as one runnable forcing function.
//
// `D-58` established that the register wins when edits conflict. `C-14`
// recorded the other half: a precedence rule with no detection is inert,
// because in this repository nothing announces that a conflict occurred.
//
// `G32`, `G53` and `G58` were each found by a human noticing — twice by the
// Chief Editor challenging a completion claim. The register's own words:
// "that is not a control; it is luck with a good record."
//
// Exit 1 on any finding, so CI fails rather than reporting into a log nobody
// reads.

import { run as sharedCoreHash } from "./checks/shared-core-hash.mjs";
import { run as tierSweep } from "./checks/tier-sweep.mjs";
import { run as duplicateIds } from "./checks/duplicate-ids.mjs";
import { run as graphCoverage } from "./checks/graph-coverage.mjs";

const CHECKS = [sharedCoreHash, tierSweep, duplicateIds, graphCoverage];

let failed = 0;

for (const check of CHECKS) {
  const { name, findings, detail } = check();
  if (findings.length === 0) {
    console.log(`  PASS  ${name.padEnd(18)} ${detail}`);
  } else {
    failed++;
    console.log(`  FAIL  ${name.padEnd(18)} ${detail}`);
    for (const f of findings) console.log(`        ${f}`);
  }
}

console.log(
  failed === 0
    ? `\n${CHECKS.length}/${CHECKS.length} consistency checks passed.`
    : `\n${failed} of ${CHECKS.length} consistency checks FAILED.`,
);

process.exit(failed === 0 ? 0 : 1);
