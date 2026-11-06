# External handoff draft — F3 child and invocation need correction before release

This is an external draft based on `docs/handoff/TEMPLATE.md`. It is not a filed handoff. No B-series number is assigned. Lane A's answer field is left empty. No repository record or lifecycle state changes.

- **Raised:** 2026-10-29 by Lane B
- **Kind:** finding
- **Phase:** 1
- **Blocks:** Judge execution release for the exact F3 child and invocation
- **Status:** Open
- **Lane A:**
- **Evidence:** Lane A's sealed review packet; exact child and invocation; Lane B's sealed preparation packet; this assessment's file and hash reads
- **Verified-By:** — not yet dispositioned; raised by Lane B
- **Verified-At-Commit:** 71dfbbe7a09f194a9986c1f29d42ad507aec1af7

The commit above is the reviewed source baseline. This assessment makes no new Git-state or server claim. It changes no authority tier. Register, Build Spec, artifact inventory, governed specifications, lane state and live graph stay unchanged.

## What happened

### Decision summary

**The consolidated assessment is ready for Lane A's review. The execution packet is not ready for Judge release.**

Lane B's earlier statement, “No blocking correction is required,” is withdrawn as the current recommendation. Preserve that earlier worklog as history. The hash checks still stand. Hash agreement does not establish correct failure handling.

1. Accept F-1. The current invocation can lose required stderr and exit evidence on the reported Windows PowerShell 5.1 host.
2. Accept and strengthen F-2. The emergency record can show exit 6 and retain a positive runtime status. Repair this before release.
3. Accept F-4. Some check records can report zero pending semantics after a semantic check failed. Repair this in the same proposed child revision.
4. Keep F-3 and F-5 separate. They concern inherited limits. Do not modify the approved launcher or frozen guard to address them in this unit.
5. Keep execution, F3 acceptance, K, N, publication and push deferred.

### Scope and evidence

The user asked for a plan-only assessment and a draft response. This turn read files and computed hashes. It did not execute the child, launcher, worker, invocation, syntax checks, probes or runtime fault cases. It did not edit repository files or existing packets. This draft has not been sent to another chat.

The author used short sentences, direct instructions and one action per step, following the requested simplified technical-English style. This is not a formal ASDSTE-100 compliance certification.

| Artifact | Exact identity / current read result |
|---|---|
| Child | `C:/CoWork/outputs/lane-b-after-d475-f3-r2-2026-10-29/entry.mjs`; 52,288 bytes; SHA-256 `6f07293ae714cf702365c545a1a9f2e720c008ccb8d8b8f96909467bb7db6cd3` |
| Preparation manifest | `C:/CoWork/outputs/lane-b-after-d475-f3-r2-preparation-2026-10-29/SHA256-MANIFEST.json`; SHA-256 `f10b6db9ba25118242db3825a2efc16add503e84c285b63361674d1de80102cb`; all 44 listed entries match their lengths and hashes on this read |
| Approved launcher r4 | `C:/CoWork/outputs/lane-a-git-binding-plan-2026-10-29/launch-review.r4.mjs`; SHA-256 `1906c92a8db4b59e1eb28492fd5bf628deb641954fc2195e409fb0a7525ba462`; preserved |
| Lane A review | `C:/CoWork/outputs/lane-a-review-f3-child-2026-10-29/REVIEW.md`; 11,702 bytes; SHA-256 `272bcfe595896c06d3e0e30f080ab33367a33e4782061cc8791c1f35cac7acba` |
| Lane A manifest | `C:/CoWork/outputs/lane-a-review-f3-child-2026-10-29/SHA256-MANIFEST.txt`; SHA-256 `4e9b756f55dbfc41633f36f2203d0c76be2c3266bc118a6f8d83168869c38c3c`; all seven listed files match their lengths and hashes |
| Row-24 correction source | Lane A session `42f609c0-3f3b-49b0-abf7-f3d587359462`, line **6410**, UUID `664d1468-91a3-422c-ae7c-6d7d4987a5a4`. Line 6413 is metadata. Lane A now agrees with this correction |

These checks establish current file identity. They do not repeat F3, prove earlier uninterrupted custody or authenticate an instruction's speaker.

### Finding assessment

| Finding | Lane B assessment | Required response | Owner / follow-up phase |
|---|---|---|---|
| **F-1 — native stderr capture** | **Accept; blocks release.** `INVOCATION.ps1.txt:3` sets `ErrorActionPreference=Stop`. Lines 15–19 use PowerShell redirection and assign `LASTEXITCODE` only after the native call. Lane A reports a terminating native-stderr error, missing exit and an empty stderr log on PowerShell 5.1. The wrapper refuses acceptance, but required failure evidence can be lost or truncated. | Specify a new capture revision. Pin the shell executable and edition. Preserve complete stdout, stderr, actual process exit, launch errors and partial files. Keep the exact child arguments and controlled environment. Do not treat the proposed replacement as tested. | Lane B external correction draft; Lane A exact-byte review; any later capture test needs execution scope |
| **F-2 — emergency finalization record** | **Accept; repair before release.** `entry.mjs:499` keeps preliminary metadata local to `finalize`. A throw at line 505 reaches line 520. The fallback omits preliminary path, hash, exit and superseded disposition. **Additional defect:** line 498 can leave `R.runtimeStatus` as `complete-positive-review`; line 520 embeds that stale R under authoritative exit 6. The process fails closed, but the record contradicts itself. | Keep finalization state accessible to every completion path. Build normal and emergency records from the same final exit. Preserve the preliminary identity and original exit. Mark it superseded when required. Distinguish an absent preliminary file from a partial file whose write/read-back failed. Preserve original and secondary errors. | Lane B new child draft; Lane A renewed exact-byte review before release |
| **F-3 — excluded scene coordinates** | **Accept as an inherited coverage limit.** The child follows the operative guard's explicit exclusion of x/y/fx/fy. A seeded layout warrants a separate check of the rationale; a seed alone does not prove complete determinism under all inputs and modes. Do not treat the proposed coordinate projection as already verified. | Preserve the current exclusion and state it. Route the rationale and any changed projection requirement separately through B-050. Do not expand this child or alter the frozen producer environment for it. | Lane A separate B-050 procedure assessment; no repository edit here |
| **F-4 — literal zero pending semantics** | **Accept; correct in the proposed child revision.** `check()` catches failures and permits later independent checks at lines 241–247. Thus lines 471 and 490 can write `pendingSemantics:0` even after descriptions or communities failed. The final required-check ledger prevents overall success, but the individual evidence is misleading. | Report semantic status as unknown/incomplete until all semantic prerequisites pass. Derive a zero summary only from successful prerequisite evidence and cite it. Do not equate a count of failed checks with a count of unresolved semantic items. | Lane B new child draft; Lane A renewed evidence-schema review |
| **F-5 — guard-internal Git calls** | **Accept as an inherited operating limit.** Guard-internal calls bypass the child's logged and timed `run()` helper. Some have no timeout. Therefore a hang need not produce a completion record or a nonzero exit by itself. | State that the timeouts/logs apply to direct `run()` calls only. A hung, interrupted or incomplete attempt is not accepted. Preserve partial evidence. Do not promise guaranteed finalization under external termination. No guard changes or new watchdog are authorized by this assessment. | Lane B documentation correction; Lane A review of the disclosed limit |

The corrected release recommendation requires F-1, F-2 and F-4 corrections. F-3 and F-5 do not authorize an expansion of scope. Lane A must review their stated limits explicitly.

### Challenges to Lane A's proposed fix and proof

**Capture mechanism.** `Start-Process` is a candidate design, not a proved replacement. Microsoft documents redirection and argument handling, but those documented options do not by themselves prove byte-for-byte capture for this host. Do not claim “byte-faithful” without evidence. The actual requirement is complete recoverable records and actual exit status. State the encoding contract. If exact stream bytes are required, select a byte-preserving implementation and verify it separately.

Microsoft documents that `ArgumentList` arrays are joined into a string. Verify the exact effective arguments, including `-- --out`, in the replacement. Do not transfer the old call-operator forwarding result to a new process API. Preserve the inherited environment; do not select a fresh environment. For a hidden process launch in this workspace, use `WindowStyle Hidden` if selecting `Start-Process`; omit `NoNewWindow`, which cannot be combined with `WindowStyle`. These are draft requirements, not an instruction to launch anything. [Microsoft Start-Process reference](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/start-process?view=powershell-5.1).

**Shell version.** The rejected invocation does not pin an edition. Lane A names Windows PowerShell 5.1 in its test record. Limit the observed defect to that reported environment. Do not assert the same outcome for every PowerShell host. Microsoft documents changed native stdout redirection in PowerShell 7.4. This does not justify installing or switching shells under the current scope. [Microsoft redirection reference](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_redirection?view=powershell-7.5).

**Probe evidence.** `probes/powershell-capture-test.txt` is a 432-byte narrative test record. It does not retain the complete failing stand-in command, separate raw streams and process result. Accept it as Lane A's reported observation. Do not promote it to a fully reproducible capture-proof packet. The replacement remains untested. Any later authorized test must retain its exact script, invocation, host identity, expected records, full outputs, exit and hashes.

**Review activity.** Lane A did not execute the target child, launcher or projection worker. It did execute auxiliary probes and one plain `git status` in a generated checkout. Describe that accurately as static inspection plus auxiliary measurements. Do not describe it as “no code ran.” This assessment reran none of those probes.

**Preservation deviation.** Lane A reports a changed `.git` directory timestamp, with unchanged files/index and no remaining lock. That directory timestamp is outside the child's file-based comparison. Preserve the deviation. “Outside the measured preservation scope” is the correct qualification; it is not proof that nothing changed. No corruption or candidate invalidation is established by the report. The claimed absence of content changes remains attributed to Lane A's observations, not a new full preservation test by this turn.

**Coverage versus completion.** The child contains substantive checks for all listed F3 obligation classes. That supports continued design review. It does not prove runtime completion. Lane A's description probe reused the child's rules. It is useful compatibility evidence, but it is not a substitute for an independent semantic judgment or the complete F3 run. Keep the historical intermediate-evidence limits explicit. Missing required evidence must stop acceptance; naming a limit cannot waive a required check.

## What you need

### Immediate transaction — Lane A reviews this assessment only

Lane A should return agree/disagree for each finding disposition and each qualification above. Cite the exact source when disagreeing. Confirm whether F-1, F-2 and F-4 form the bounded correction set. Confirm the separate handling of F-3 and the disclosed F-5 limit. Do not implement the corrections or run a stand-in under this handoff.

### Proposed later sequence — not released by this draft

1. Lane B prepares new external child, invocation and preparation documents for the agreed correction set.
2. Preserve `entry.mjs`, the existing invocation and every old seal. Use a new child filename inside the launcher's permitted packet, such as `entry.r3.mjs`, only if the current contract permits it. Bind that new path explicitly. Do not overwrite the reviewed child.
3. Keep launcher r4 and its hash unchanged. A new child path must remain within its fixed `FRESH` boundary. Do not move to a new root and assume the existing launcher accepts it.
4. Put the revised plan, receipt and manifest in a new external preparation packet. Keep the execution-packet root unsealed. Check all intended new paths before creation.
5. Bind the new child and capture artifact by full path, byte length and SHA-256. List all arguments and all output paths. No replacement hash is assigned in this assessment.
6. Lane A reviews the exact revised bytes. Parsing alone cannot close capture or runtime findings.
7. If capture validation is required, obtain scope for the stand-in tests. Keep them separate from F3 execution. Retain complete outputs and actual exits. This turn permits no such test.
8. Only after the conditions are met may the Judge consider an execution release. That act must bind launcher hash, final child hash, capture artifact, exact arguments and the three output paths.
9. After released execution, review full F3 evidence. K and separate N remain later acts. Neither follows automatically from this review or from exit 0.

### Acceptance criteria for the proposed corrections

| Condition | Planned validation | Required evidence | Phase |
|---|---|---|---|
| F-1 capture preserves success and failure evidence | Static review first. Later authorized stand-ins cover stdout/stderr, multiple JSON lines, nonzero exit, launch failure and partial-output failure | Exact host/argv; retained streams; actual exit; error and partial-file records; no loss or unexplained re-encoding | Revised invocation review, then bounded capture validation |
| F-2 terminal records agree | Trace normal completion and every throw/write/read-back path; later fault tests only if released | Final exit and runtime status agree; preliminary identity/disposition retained; partial files identified; original errors preserved | Revised child review; released validation |
| F-4 semantic summary is conditional | Trace earlier semantic failure, not-run and complete-success cases | Unknown/incomplete until prerequisites pass; zero supported by named evidence | Revised child review; released validation |
| Existing boundaries remain | Compare exact scripts, imports, write paths and executable bindings | No new PATH/config changes, candidate writes, mutation functions, K/N or publication calls | Renewed exact-byte review |

## What you did instead

Lane B consolidated the two worklogs, challenged the findings, verified current artifact identities and drafted this response. Lane B changed no reviewed bytes. No implementation, runtime validation, repository edit or K/N occurred.

The draft follows the handoff template's transaction sections. It leaves Lane A's answer field empty and does not assign a handoff number, record a disposition, create a Register act or claim independent verification of a fix.

Coverage remains **61 historically delivered; D-475 and R locally pending**. No fresh server claim. Preserve accepted deliveries, evidence and provenance gaps. U-C stays held. J1/D-440 and J2/D-441 stay separate; both transfers stay held. B-136, B-158 and D-439 stay Open. work-r3 stays held. `cac590ad` stays frozen and excluded. All other holds remain unchanged.

| Item | Verdict | Follow-up phase |
|---|---|---|
| Consolidated assessment and bounded correction proposal | Approve-with-conditions | Lane A reviews the dispositions; no implementation yet |
| Earlier “no blocking correction” recommendation | Reject as current release advice | Preserve original worklog; use this qualified assessment |
| Current invocation | Reject | Lane B external revision, then Lane A exact-byte review |
| Current child as a release candidate | Defer | Correct F-2 and F-4, then renew review |
| Launcher r4, existing artifacts and provenance | Approve — preserve | Existing approved scope |
| F-3 coordinate rationale | Defer | Separate B-050 procedure review |
| F-5 limit | Approve-with-conditions | Correct claims about logging, timeouts and interruption |
| Judge execution release and full F3 | Defer | Complete correction/review prerequisites first |
| K, separate N, publication and push | Defer | Existing later gates |
