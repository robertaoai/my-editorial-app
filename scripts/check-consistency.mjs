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
import { run as settingsParse } from "./checks/settings-parse.mjs";
import { run as decisionStatus } from "./checks/decision-status.mjs";
import { run as laneBoundary } from "./checks/lane-boundary.mjs";
import { run as sourceSweep } from "./checks/source-sweep.mjs";
import { run as handoffResponse } from "./checks/handoff-response.mjs";
import { run as phaseManifest } from "./checks/phase-manifest.mjs";
import { run as configCoupling } from "./checks/config-coupling.mjs";
import { run as closureReadiness } from "./checks/closure-readiness.mjs";
import { run as docsDrift } from "./checks/docs-drift.mjs";
import { run as syncDocsUnique } from "./checks/sync-docs-uniqueness.mjs";
import { run as laneState } from "./checks/lane-state.mjs";
import { run as channelDocs } from "./checks/channel-docs.mjs";
import { run as retentionPolicyCoupling } from "./checks/retention-policy-coupling.mjs";

const CHECKS = [
  sharedCoreHash,
  tierSweep,
  duplicateIds,
  graphCoverage,
  settingsParse, // `G66`
  decisionStatus, // `G65`
  laneBoundary, // `G69` — see `D-83`; detects the shape of a crossing, not the permission
  sourceSweep, // `G70` — the inverse of the tier sweep; see `D-87`
  handoffResponse, // `D-90` — does Lane B's feedback get read
  phaseManifest, // `D-94` — is the phase artifact manifest real
  configCoupling, // `C-17`/`D-95` — do the config rows and the code match, both ways
  closureReadiness, // `D-101` — response is not closure; silent until closure is claimed
  docsDrift, // Docs drift check
  syncDocsUnique, // `D-102` — exactly one sync-docs runbook, tracked or untracked
  laneState, // `D-103` — exactly one lane is `Active`; a half-applied handover fails
  channelDocs, // `D-104` — the channel README/template coupled to the checks that enforce them
  retentionPolicyCoupling, // `D-134` — RET-EDITORIAL coupled across the four tiers that cite it
];

let failed = 0;
let skipped = 0;

for (const check of CHECKS) {
  const { name, findings, detail, skipped: wasSkipped } = check();
  if (wasSkipped) {
    skipped++;
    console.log(`  SKIP  ${name.padEnd(18)} ${detail}`);
  } else if (findings.length === 0) {
    console.log(`  PASS  ${name.padEnd(18)} ${detail}`);
  } else {
    failed++;
    console.log(`  FAIL  ${name.padEnd(18)} ${detail}`);
    for (const f of findings) console.log(`        ${f}`);
  }
}

// A skip is reported, never silently folded into the pass count. "4/4 passed"
// when one check never ran is the same overclaim this apparatus exists to catch.
const ran = CHECKS.length - skipped;
const tail = skipped > 0 ? ` (${skipped} skipped — see above)` : "";

console.log(
  failed === 0
    ? `\n${ran}/${ran} consistency checks passed${tail}.`
    : `\n${failed} of ${ran} consistency checks FAILED${tail}.`,
);

process.exit(failed === 0 ? 0 : 1);
