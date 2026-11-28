# Fresh after-D-475 F3 child — external preparation only

Status: draft for independent exact-byte review. Runtime validation is **planned, not run**. No F3 acceptance, K, N, publication or consistency/full-health claim is made. The complete executable draft is the separately bound `entry.mjs`; the body template and assembly script are preparation provenance, not execution entry points.

## Fixed artifacts and authority

| Role | Exact binding |
|---|---|
| R | `71dfbbe7a09f194a9986c1f29d42ad507aec1af7` |
| S / tree | `22b0a8ce2fb06c16152fa9490d21aae829a45974` / `7e28fd350438bb6e4b1cb871d75ad9185d44703b` |
| Work / work ID | `C:/CoWork/outputs/lane-a-graph-sync-after-d475-2026-10-29/work` / `7bd2af2f-82a0-40fc-872c-31009278ff1c` |
| Ready STATE | `1fd1a8885ac5903e4707057cce53e28b9dd8a044131e55dc6bfa8f12341db53e` |
| Candidate graph | `df076c7c23af91db3b67b9eaea576c0976bec7bd0f2b844254b687be9a01f557` |
| Candidate manifest | `guard-treeDigest-v1`, `34a4edeb9516f11cb36d6d2dcfe1ddac99913dbe0427647f919354c4a9990b13`, 583 files |
| Approved answers | `89965adfdaaaddb8d463c2b2644f137f547c85f3cfe2610e068c07c355f97e70` |
| Guard answer copy | `02d120baf9fe1751690d5e046f7751bf66c8ddfb018b63672c6f7cb42e91ec10`; content must equal approved answers |
| Approved launcher | `C:/CoWork/outputs/lane-a-git-binding-plan-2026-10-29/launch-review.r4.mjs`; 21,015 bytes; `1906c92a8db4b59e1eb28492fd5bf628deb641954fc2195e409fb0a7525ba462` |
| Approved plan | `C:/CoWork/outputs/lane-a-git-binding-plan-2026-10-29/PLAN.r4b.md`; 14,395 bytes; `a840e9f8731f0692aa24a608a25fe7c5b39bb3736ba57f13379b2c46d64a54ed` |
| Fresh child | `C:/CoWork/outputs/lane-b-after-d475-f3-r2-2026-10-29/entry.mjs`; **52,288 bytes**; **`6f07293ae714cf702365c545a1a9f2e720c008ccb8d8b8f96909467bb7db6cd3`** |
| Execution packet | `C:/CoWork/outputs/lane-b-after-d475-f3-r2-2026-10-29/`; contains only the child at preparation completion; no root seal |
| Separate preparation packet | `C:/CoWork/outputs/lane-b-after-d475-f3-r2-preparation-2026-10-29/` |

Both new packet paths were absent before exclusive creation. Existing packets, including the failed F3 attempt, were preserved. An accidental second invocation of the preparation assembler refused immediately because the execution packet was no longer empty; it did not overwrite anything. This was a preparation-tool refusal, not a child/F3 attempt.

The operative sources are B-136's final after-D-475 request, B-050 F3-R1a/R3a/R4a and the D-425–D-429 procedure, the guard's complete projection contract, D-451 source boundaries, and the D-467 failure/freeze route as applied in the current request. Each is bound in `input-bindings.json`. B-050 requires an independent affirmative exact-byte review before a separately introduced canonical acceptance block. This child generates review evidence only and contains no B-050 append or Git mutation.

The failed attempt reported a frozen Git of `.../Git/mingw64/bin/git.exe` versus PATH-resolved `.../Git/cmd/git.exe`. Matching version strings do not satisfy that binding. The child inherits the launcher's environment verbatim, checks it, and does not rebuild PATH, change configuration, relax frozen executable requirements, or call a replacement Git wrapper.

The retained row-24 correction is `INSTRUCTION-R4B.jsonl`: Lane A session `42f609c0-3f3b-49b0-abf7-f3d587359462`, **line 6410**, UUID `664d1468-91a3-422c-ae7c-6d7d4987a5a4`. Line 6413 is metadata, not the instruction. Launcher r4 is unchanged. The child outcome stays in `result.child`, post-write failure in `finalization.postWrite`, and secondary finalization errors in `result.secondaryErrors`. Preliminary exit is fixed before finalization; disposition follows the final exit.

## Planned invocation — do not run during preparation

PowerShell, using the approved quoted call-operator form. The sole child argument pair is `--out` plus the fixed child output path:

```powershell
& 'C:\Program Files\nodejs\node.exe' 'C:\CoWork\outputs\lane-a-git-binding-plan-2026-10-29\launch-review.r4.mjs' --child 'C:\CoWork\outputs\lane-b-after-d475-f3-r2-2026-10-29\entry.mjs' --child-sha256 '6f07293ae714cf702365c545a1a9f2e720c008ccb8d8b8f96909467bb7db6cd3' --out 'C:\CoWork\outputs\lane-b-after-d475-f3-r2-2026-10-29\launcher-run-1' -- --out 'C:/CoWork/outputs/lane-b-after-d475-f3-r2-2026-10-29/f3-run-1'
```

The child compares that argument pair exactly, including the slash-form string above. Its own path is checked after normalization. Do not substitute output names or retry in an existing folder. A later changed invocation or child requires fresh exact-byte review and release; preserve this draft.

At release, capture the entire invocation's stdout and stderr into a **new** sibling `capture-run-1` inside the execution packet, using the planned `INVOCATION.ps1.txt`. Record the actual launcher exit even if it is nonzero; preserve interruption and host errors. The capture is PowerShell text output, not a claim of byte equality with native streams. Authoritative stderr JSON must remain readable in the retained stderr log. If capture, exit or record agreement is unavailable, the attempt is incomplete. All capture and runtime directories must be absent initially. The launcher itself exclusively creates `launcher-run-1`; the child exclusively creates `f3-run-1`. No `SHA256-MANIFEST*` file goes in the execution-packet root before launch.

## Subprocess and scratch contract

The launcher starts the frozen Node, `shell:false`, `cwd=C:/robertaoai/my-editorial-app`, inherited stdio, with its one controlled environment. The child freezes a copy of that inherited environment; it never assigns to `process.env` and passes the same values to its subprocesses. Direct Git reads use the absolute frozen executable and `--no-optional-locks`; configuration-digest queries retain the original arguments to preserve their frozen byte semantics. Read-only guard helpers also use their original Git/version queries and inherited environment. The approved launcher retains its existing neutral-temp-directory behavior unchanged.

Every direct child subprocess has file-backed stdout/stderr, start/end, executable, complete argv, cwd, status, signal, PID and spawn error recorded under `commands/`. Git/configuration calls have a 60-second timeout; the producer worker has 600 seconds. The 600-second setting belongs to the draft runtime program; it was not exercised in this preparation. No shell, detached process, stdin, network command, extraction rerun, Graphify command, installation or configuration writer is invoked by the child. The guard is imported by exact hash for read-only validation helpers; its mutation functions are never called.

One deliberate nonzero probe is required: each new `scratch/neutral-N` must produce Git's exit 128 and the explicit “not a git repository” diagnosis, before configuration is read there. This is a successful negative precondition, never a waiver for a failed required check. Signal, spawn failure, wrong status or wrong reason fails the binding check. Neutral directories and all probe logs are retained. This substitutes only scratch placement and recording for the guard's standard neutral-config query; the same frozen config digests remain mandatory.

The projection worker is included as full source text in `entry.mjs`, not imported from the preparation packet. It is derived from the exact pinned guard's complete validator; `assembly-transformations.json` enumerates all changes. Scene, every entity sidecar, reconciliation, citations, workspace manifest, embedded JSON bundle and shipped assets are compared using the pinned producer exports. No HTML executes. Only x/y/fx/fy scene-layout coordinates are excluded, as the operative validator specifies. Optional ontology JSON must parse; an unexpected hierarchy export for this fixed no-profile candidate refuses. Every projection class must reach its completion marker, and worker exit/status/signal must also be successful.

The worker writes only `f3-run-1/scratch/manifest-copy/` after copying the candidate studio there. It saves the copied original manifest as `scratch/manifest-original.json` before the producer overwrites **that scratch copy's** manifest. No original candidate file is rewritten. All copied and partial scratch files remain, including on timeout or parse failure. This is a projection of retained bytes, not `prepare`, `resume`, `studio export` or candidate regeneration.

## DoR → planned validation → DoD matrix

Every runtime row below is **PLANNED**. Syntax checks prove parsing only. A required check with any other status than `pass`, including absent/unavailable/not-run, prevents a positive child completion.

| ID / DoR | Planned validation | DoD evidence | Follow-up phase |
|---|---|---|---|
| P1 — approved launcher and r4b | Rehash preserved artifacts; verify row-24 locator and instruction bytes | Preparation input/provenance bindings | Independent preparation review |
| P2 — fixed executable child | Full source review, exact bytes/hash, parsing only | `entry.mjs`, `child-binding.json`, `syntax-checks.json` | Independent exact-byte review |
| P3 — execution authority | Judge release must bind launcher hash, child hash, launcher output, child output, capture path and exact arguments | Separate direct Judge release; not created by this packet | Judge execution release |
| R1 — fresh, unsealed packet/output | Launcher validates new output, no links/protected destination; child validates its exact arguments and absent output | Launcher records, child `run-start.json` | Released F3 execution |
| R2 — source/work/STATE/answers | All full identities, ready attempt 2, guard answer-copy equality, baseline locus and 583-file identity | `bindings.json`, immutable copies, input hashes | Released F3 execution |
| R3 — executable/config bindings | Frozen Node/Git paths, bytes, versions; inherited sanitized environment; no Git shadows; both checkout bindings and shipped assets; repeat before producer and at final state | `bindings.json`, subprocess logs, final state | Released F3 execution |
| R4 — predecessor evidence | Rehash all explicit inputs and all entries in E1/R1/E2/R2 and the failed-attempt seal; reject missing/malformed/escaped entries | `inherited-evidence.json` | Released F3 execution |
| R5 — source and freeze | R sole parent S, B-136-only, source tree, publication source rule, config/refs, required identity, Lane A Active, baseline chain, no lock/journal/work claim | `source-freeze.json`, before/after/post-preliminary snapshots | Released F3 execution |
| R6 — linked worktrees | Fresh full worktree list; exact two linked HEADs, no extra roots, tracked/staged cleanliness, untracked files, item paths/types/sizes/hashes, no link substitution | Snapshot `linked` records; accepted inventory hash `3e32d008…` | Released F3 execution |
| R7 — frozen stray work | All 4,306 files and mtime identities, no extra/missing files/links, pending STATE and no claim | Snapshot `stray` maps | Released F3 execution |
| R8 — complete candidate and baseline | Independently walk/hash every file, compare full map, 583 files, graph and guard-treeDigest-v1; baseline seed equality | `complete-bytes.json`, candidate/baseline maps | Released F3 execution |
| R9 — fragment parity | Every declared node and edge field including multiplicities; all 140 mergeable fragments covered; no duplicate nodes or dangling edges | `fragments.json` | Released F3 execution |
| R10 — descriptions | Curated values; unchanged-source baseline replay; new commit descriptions against Git subjects; no invented/reused changed-source description; exact inherited undescribed set; empty missing-desc | `descriptions.json`, full `description-audit.json` | Released F3 execution |
| R11 — community identity/names | Complete baseline, pending-attempt, raw-final and composed-final member arrays/hashes; approved pending answer set; identical-set reuse; every global and node name; no duplicate/extra labels | `communities.json`, `complete-member-sets.json` | Released F3 execution |
| R12 — Git extraction and selection | Retained fresh extraction against strict local Git inputs and historical extraction brackets; all seven exact call argv/chronology, both ends of every call against oracle; exact generated refs; final Git merge at raw and composed state | `git-selection.json`, `git-selection-detail.json`, Git logs | Released F3 execution |
| R13 — D-427/D-429 final state | Ready resume output agrees with STATE; final writer/observation bracket; hash/length-bound ignored proxy lists; final count copies; root/studio/manifest bindings, raw and composed Git merge | Same selection records and final-state evidence | Released F3 execution |
| R14 — lifecycle/composition | Raw and fresh lifecycle; composed caller root/Git directories; source protection; classify all files; exact retain/promote/rebind bytes; foreign-path check; no pending instruction files | `lifecycle-composition.json` | Released F3 execution |
| R15 — full producer projections | All eight classes completed using pinned exports; complete inventory and asset bytes; malformed/unavailable/partial result refuses | `projection-arguments.json`, worker source, native logs, `projection-result.json`, preserved scratch | Released F3 execution |
| R16 — final zero-unresolved state | Every required semantic check passed, fresh staging checks; exact STATE and preservation snapshot after validations | `final-state.json`, `preservation.json`, complete required-check ledger | Released F3 execution |
| R17 — post-preliminary preservation | Repeat full snapshot after preliminary record; compare all protected maps and environment; inventory checkpoint-ref changes separately | `post-preliminary-snapshot.json`, authoritative completion `finalPreservation` | Released F3 execution |
| R18 — result finalization | Preliminary/authoritative records, write/read-back checks, stderr fallback, exact agreement with process exit | Child and launcher completion records plus capture exit | Released F3 execution and independent result review |
| L1 — launcher failure cases | Preserve the approved r4b matrix, including row 24; no fault case exercised here | Future released fault-case evidence if required by independent review | Independent review / separately released validation |
| K / N | No append, stage or commit in this child. Full positive F3 evidence must first receive independent review | None in this packet | Existing separate K, then separate N gates |
| Publication / push | None | None | Existing gates; no new push authority |

The extraction checks recompute selection over the **retained** generated checkouts and the recorded historical call windows, not today's selection time. They do not regenerate a fresh extraction. The pinned successful resume and implementation provide historical per-call scope-write enforcement; the retained packet carries the proxy lists and final count copies, not a reconstruction of every intermediate scope-file byte. Historical continuity and earlier evidence gaps remain qualified. No current-byte match authenticates a speaker or proves uninterrupted prior retention.

## Evidence, exits and preservation

Expected runtime layout:

```text
lane-b-after-d475-f3-r2-2026-10-29/
  entry.mjs                          # only file created in this packet now
  capture-run-1/                     # planned host stdout/stderr/exit capture
  launcher-run-1/                    # planned; exclusively created by launcher
    launcher-result.json            # preliminary, never authoritative
    launcher-completion.json        # authoritative on successful write/read-back
  f3-run-1/                          # planned; exclusively created by child
    run-start.json
    <required-check>.json
    commands/<ordinal>-<label>.stdout / .stderr / .json
    before-snapshot.json / after-snapshot.json / post-preliminary-snapshot.json
    candidate-file-map.json / baseline-file-map.json
    STATE-ready-copy.json / approved-answers-copy.json
    description-audit.json / complete-member-sets.json / git-selection-detail.json
    projection-arguments.json / projection-result.json / preservation.json
    scratch/producer-validation.mjs / neutral-N/
    scratch/manifest-copy/ / manifest-original.json
    child-result.json               # preliminary
    evidence-manifest.json          # runtime-file inventory, excludes itself and completion
    child-completion.json           # authoritative on successful write/read-back
```

Early failure intentionally leaves later files absent; their ledger entries become `not-run`, and exit is nonzero. Per-check failures retain detailed findings and independent checks continue where prerequisites are established. Entry binding/source failures stop dependent review. The child has no cleanup path. All writes use exclusive creation except the pinned producer's explicitly designated scratch manifest emission.

Child exit 0 requires every required check passed and preservation proved. Exit 2 means required validation failed/incomplete; exit 4 means preservation unavailable or failed; exit 6 means finalization/write failure. Highest applicable code wins. Any interrupted/null/signal/spawn-error subprocess fails its check. Uncaught finalization error produces an authoritative stderr record with exit 6. Failure to write/read back the completion raises exit 6 and emits fresh authoritative stderr JSON, superseding any partial completion file. Preliminary exit never changes; the final record computes its disposition from the final exit. Original findings and all secondary failures remain available.

Launcher r4's independent exits remain 0 / 2 / 3 / 4 / 5 / 6 as approved. Its record is authoritative for the launcher process; the child's record is authoritative for the child. Both must agree with their own process outcomes. The launcher must succeed and the child must have complete positive evidence before a reviewer can accept F3. A zero binding gate or positive preliminary record alone cannot establish acceptance. A missing capture or missing authoritative record is incomplete, even if a shell reports zero.

On failure or interruption: keep every log, partial file, scratch copy, preliminary record, authoritative file/fallback and exit capture; change nothing and return to Lane A under the existing failure route. Do not repair STATE, candidate, source, answers, bindings or guard; do not retry this output path. No K/N follows from the child automatically.

Preparation preservation is documented separately in `preparation-before.json`, `preparation-after.json` and `preparation-preservation.json`: tracked repository bytes/status/staging/config, inherited packets, work/candidate/generated checkouts, live graph/receipts and frozen stray content are compared before/after drafting. Runtime preservation remains planned and includes fresh linked inventory and frozen stray mtimes. Only `refs/codex/turn-diffs/` may differ, inventoried separately; no other ref exception is introduced.

Coverage is **61 historically delivered; D-475 and R locally pending**. No fresh server claim. Accepted deliveries, evidence and provenance gaps remain. U-C stays held. J1/D-440 and J2/D-441 remain separate; both transfers stay held. B-136, B-158 and D-439 stay Open. work-r3 stays held. `cac590ad` stays frozen and excluded. Every other hold is unchanged.

| Item | Verdict | Follow-up phase |
|---|---|---|
| Approved launcher r4 and plan r4b | Approve — preserve | Existing approval and preservation |
| Fresh child and preparation packet | Approve-with-conditions — drafting only | Independent exact-byte review |
| Exact child and invocation | Defer | Independent reviewer, then Judge release binding hashes and paths |
| Runtime/F3 acceptance | Defer | Released execution and independent evidence review |
| K, separate N, publication and push | Defer | Existing gates |
| All holds and provenance limits | Defer — unchanged | Existing checkpoints |
