# Lane B correction draft — F-1, F-2 and F-4

- Raised: 2026-10-30 by Lane B
- Kind: finding
- Phase: external correction drafting
- Blocks: Judge execution release
- Status: Open
- Lane A:
- Verified-By: — not yet dispositioned; raised by Lane B
- Verified-At-Commit: 71dfbbe7a09f194a9986c1f29d42ad507aec1af7 (reviewed baseline, no fresh HEAD claim)

## What happened

The user authorized Lane B to correct F-1/F-2/F-4. New external drafts implement that scope. This is not a filed handoff, independent approval or execution release. No authority tier changed. All runtime validation remains planned.

Child: C:/CoWork/outputs/lane-b-after-d475-f3-r2-2026-10-29/entry.r3.mjs

Length: 53630 bytes. SHA-256: 52ff2b33ab9d743a4345f45172de2028639200c6d3fc601c1a980cd51cd340c6

Approved launcher remains C:/CoWork/outputs/lane-a-git-binding-plan-2026-10-29/launch-review.r4.mjs, SHA-256 1906c92a8db4b59e1eb28492fd5bf628deb641954fc2195e409fb0a7525ba462.

F-1: capture.r3.mjs opens separate stdout/stderr files with exclusive creation and passes their descriptors directly to frozen Node's launcher process. There is no PowerShell decoding, pipeline or redirection of target streams. The capture inherits its environment unchanged; launcher r4 remains responsible for the controlled child environment. Spawn uses shell:false, windowsHide:true and the repository cwd. It sets no timeout and performs no retries, cleanup or configuration changes. Existing output paths cause refusal.

The wrapper pins the observed existing PowerShell Core 7.6.5 executable and its hash. No installation occurred. Runtime host compatibility and capture correctness are unproved. The exact wrapper is C:/CoWork/outputs/lane-b-f3-corrections-r3-2026-10-30/invoke.r3.ps1, with identical text in INVOCATION.ps1.txt. Both are bound by the manifest. This is a draft, not a release to launch it.

Planned outer invocation (not executed):

    & 'C:/Users/rober_24syk4j/.cache/codex-runtimes/codex-primary-runtime/dependencies/native/powershell/pwsh.exe' -NoProfile -NonInteractive -File 'C:/CoWork/outputs/lane-b-f3-corrections-r3-2026-10-30/invoke.r3.ps1'

F-2: FIN retains preliminary identity and original exit outside finalize(). Every terminal path uses terminal(exit), which normalizes result.exit and runtimeStatus. Write/read-back errors retain observed partial files, original findings and secondary errors. Emergency records retain preservation evidence without claiming it is proved. A failed completion supersedes any partial completion file. A failed stderr fallback attempts stdout; failure of both channels is incomplete evidence, never acceptance. process.exitCode is set before fallback output.

F-4: semanticSummary() names prerequisite checks and their evidence paths. It returns null/unknown-or-incomplete until all pass, then zero/complete-zero-unresolved. Lifecycle evidence is written before its own check completes and before projections, so it deliberately reports unknown. Final-state evidence can report zero only after those prerequisites pass. This does not count failed checks as unresolved semantic items. The full required-check ledger still gates exit 0.

The embedded input bindings, producer worker and substantive review checks remain inherited unchanged. The only changes outside finalization and semantic summaries are child identity, revision and fresh output paths. The independent full F3 coverage remains: source/work/STATE/answers/candidate bindings; complete candidate map; fragments; descriptions; community member sets and applied names; all producer projections; Git extraction and selection; lifecycle/composition/source protection; final state; linked-worktree inventory and frozen stray-work checks. Runtime availability or completeness is not asserted.

## What you need

Lane A: review the exact child, capture, invocation and manifest. Confirm F-1/F-2/F-4 corrections by source inspection. Return findings before a Judge release. Do not execute targets, projections, probes or fault cases under this handoff. Do not edit existing files. Syntax checks establish parsing only.

Exact launcher argv, constructed by capture.r3.mjs:

    C:/Program Files/nodejs/node.exe
    C:/CoWork/outputs/lane-a-git-binding-plan-2026-10-29/launch-review.r4.mjs
    --child C:/CoWork/outputs/lane-b-after-d475-f3-r2-2026-10-29/entry.r3.mjs
    --child-sha256 52ff2b33ab9d743a4345f45172de2028639200c6d3fc601c1a980cd51cd340c6
    --out C:/CoWork/outputs/lane-b-after-d475-f3-r2-2026-10-29/launcher-run-2
    -- --out C:/CoWork/outputs/lane-b-after-d475-f3-r2-2026-10-29/f3-run-2

Capture accepts no arguments. Its output is C:/CoWork/outputs/lane-b-after-d475-f3-r2-2026-10-29/capture-run-2. All three output folders must be absent at launch. Child scratch is f3-run-2/scratch; command streams are f3-run-2/commands. No root execution-packet seal is added.

| DoR | Planned validation | DoD evidence / phase |
|---|---|---|
| Exact capture and pinned host | Independent static trace, then separately authorized stand-ins for multiline stdout/stderr, nonzero exit, launch failure and partial writes | Raw files, actual exit, host identity, argv, errors, hashes; capture validation remains pending |
| Shared finalization state | Trace preliminary failure/read-back failure, preservation exception, completion failure and fallback failure | Consistent final exit/status, preliminary identity/disposition and retained partial files; runtime fault tests pending |
| Conditional semantic summary | Trace earlier failed/not-run semantics and complete success | Unknown until every named prerequisite passes; evidence-backed zero; runtime tests pending |
| Full inherited F3 coverage | Compare unchanged worker, bindings and required ledger; later complete released review | Every required check passes and preservation proved; F3 acceptance pending |
| Exact approved bytes and fresh paths | Lane A review followed by explicit Judge act | Launcher/child/capture/wrapper hashes, exact wrapper path, argv and all three output paths bound |

Expected evidence: capture-start.json; raw stdout.log/stderr.log; host-result.json or stdout fallback; launcher preliminary/completion records or structured stderr fallback; child run-start, per-check records, candidate and baseline maps, STATE/answers copies, snapshots, commands, projection arguments/result, preserved scratch, child-result.json, evidence-manifest.json and child-completion.json or structured fallback. The inherited preparation plan defines the unchanged detailed F3 evidence inventory. Capture hashes raw logs after the launcher exits. No partial file is deleted or overwritten.

Exit rules: child required failures/not-run checks are nonzero; preservation failure is at least 4; write/finalization failure is 6. Capture returns actual launcher exit only when capture is complete, otherwise 6. A hung or externally terminated process may leave no terminal record; treat that attempt as incomplete. No exit alone grants F3 acceptance, K or N.

## What you did instead

Only external draft creation, file reads/hashes and parsing checks occurred. No target child, capture, launcher, projection, probe or fault case ran. No repository, candidate, STATE, answers, source checkout or live graph bytes were edited. No K/N, staging, commit, install, transfer, prepare, resume, publication, fetch or push.

The new manifest binds full paths, lengths and hashes. Verification records distinguish current hash agreement from historical custody; they do not close provenance gaps. Original entry.mjs and old packets remain retained. The earlier directory timestamp observation remains attributed to Lane A and is outside file-based preservation proof.

F-3 remains a separate B-050 procedure question. Coordinate exclusions remain unchanged. F-5 remains an inherited limit: only direct child run() calls are timed/logged; guard-internal calls and capture have no new watchdog. No guaranteed finalization under termination is claimed.

Coverage remains 61 historically delivered; D-475 and R locally pending. No fresh server claim. Preserve accepted deliveries and provenance gaps. U-C held. J1/D-440 and J2/D-441 separate; both transfers held. B-136/B-158/D-439 Open. work-r3 held. cac590ad frozen and excluded. All other holds unchanged. Row-24 instruction provenance remains Lane A session 42f609c0-3f3b-49b0-abf7-f3d587359462 line 6410, UUID 664d1468-91a3-422c-ae7c-6d7d4987a5a4; line 6413 is metadata.

| Item | Verdict / follow-up phase |
|---|---|
| External correction drafts | Approve-with-conditions — Lane A exact-byte review pending |
| Capture and failure-path behavior | Defer — separately authorized validation pending |
| Launcher r4 and old evidence | Approve — preserve bytes |
| Judge release and full F3 | Defer — review and validation prerequisites outstanding |
| K, separate N, publication and push | Defer — existing gates |
