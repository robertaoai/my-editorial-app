# Lane A independent review — Lane B's fresh F3 child and invocation (after D-475), at R `71dfbbe`

Read-only review, 2026-10-29. Nothing reviewed was executed: no child, launcher, projection worker or invocation transcript;
no projections, fault cases, prepare, resume or publication. This is not F3 acceptance and not execution permission.

## 1. Artifacts, recomputed

| Artifact | Bytes | SHA-256 | Result |
|---|---|---|---|
| `lane-b-after-d475-f3-r2-preparation-2026-10-29/SHA256-MANIFEST.json` | 11,288 | `f10b6db9ba25118242db3825a2efc16add503e84c285b63361674d1de80102cb` | equal to the stated value; **44/44 entries verify** (bytes and SHA-256) |
| `lane-b-after-d475-f3-r2-2026-10-29/entry.mjs` | 52,288 | `6f07293ae714cf702365c545a1a9f2e720c008ccb8d8b8f96909467bb7db6cd3` | equal; equals `child-binding.json` |
| `lane-a-git-binding-plan-2026-10-29/launch-review.r4.mjs` | 21,015 | `1906c92a8db4b59e1eb28492fd5bf628deb641954fc2195e409fb0a7525ba462` | equal (approved, unchanged) |
| `lane-a-git-binding-plan-2026-10-29/PLAN.r4b.md` | 14,395 | `a840e9f8731f0692aa24a608a25fe7c5b39bb3736ba57f13379b2c46d64a54ed` | equal |
| Row-24 source | — | — | Lane A line **6410**, uuid `664d1468-91a3-422c-ae7c-6d7d4987a5a4`; line 6413 is metadata. Lane B is correct; **my earlier handoff named line 6413 in error** (my own script had printed 6410) |

Execution packet state: contains only `entry.mjs`; unsealed; `launcher-run-1`, `f3-run-1` and `capture-run-1` absent.
Repository: HEAD R, clean.

## 2. Requirement → implementation → evidence → verdict

`entry.mjs` line numbers.

| Requirement | Implementation | Planned evidence | Verdict |
|---|---|---|---|
| Exact child args, path, unsealed packet, launcher output prerequisite | `main` 347–353 | `run-start.json` | Pass (static) |
| STATE, work, answers (file and guard copy), ready identity, baseline binding | `bindings` 356–363 | `bindings.json` | Pass |
| Frozen Node/Git, inherited one-PATH env, already sanitized, no shadow `git`, guard `bindingFindings` zero for both checkouts, guard/launcher/shipped-studio bytes | `validateBindings` 265–276, also re-run before projections (474) and in final-state (487) | `bindings.json` | Pass; the child does **not** rebuild PATH or weaken bindings |
| Relocated neutral config probe | `CONFIG_QUERIES.outside` 256–263: fresh `f3-run-1/scratch/neutral-N`, requires exit **128** and "not a git repository", then `config --list --show-origin` | `commands/*` | Pass: semantics equal to the guard's temp-folder probe. I confirmed read-only that `C:/CoWork/outputs` is not inside a Git work tree (exit 128) |
| Inherited evidence and seals | `inherited-evidence` 364–369 | `inherited-evidence.json` | Pass; continuity explicitly "not established" |
| Source/freeze: R parent and path, S tree, identity, Lane A Active, HEAD/clean, source predicates, config = frozen, refs, live release chain and bytes, receipts 16, lock/journal/claim, candidate, whole work tree with mtimes, linked inventory, stray | `source-freeze` 370–377, `snapshot` 310–327 | `before-snapshot.json` | Pass. Linked inventory matches the accepted file's format (directory items included; per-file `git status -uall` shows exactly the one untracked `SKILL.md` per worktree) |
| Complete candidate and baseline bytes (583; tree digest = guard `treeDigest`) | `complete-bytes` 379–384; `digest` 183 | file maps | Pass: `digest` is the guard's algorithm |
| Fragment node/edge fields and multiplicity; all mergeable fragments accounted | `fragments` 385–391 (`G.fragmentParity`, `fragmentOrder`) | `fragments.json` | Pass (140) |
| Description provenance and changed-source replay | `descriptions` 392–412 | `description-audit.json` | Pass, not vacuous. My read-only replay of the same rules: 3,614 nodes classified (582 curated, 3,025 unchanged-source baseline, 5 commit subject, 2 inherited undescribed), 0 unresolved, 0 mismatches; changed sources are exactly B-050, B-136 and the Register |
| Complete member sets, applied names, pending/answer exact set and consumption | `communities` 413–427 | `complete-member-sets.json` | Pass |
| Git extraction, selection windows, call inventory (7), proxies, final observation, ignored packet, fresh oracle, final merge, final state | `git-selection` 428–456 | `git-selection-detail.json` | Pass, with the inherited limit in §5 |
| Lifecycle, source protection, classification, composition file-by-file, foreign paths, runtime marker | `lifecycle-composition` 457–472 | `lifecycle-composition.json` | Pass |
| Producer projections and shipped assets (graph, scene, entities, reconciliation, citations, manifest, embedded bundle, shipped files) | `producer-projections` 473–485; worker (line 134) | `projection-result.json`, `commands/*` | Pass, with inherited finding F-3 |
| Zero unresolved semantics | descriptions `unresolved`, communities names, `missing-desc` empty, no `promote-empty` | check files | Pass in substance; see F-4 |
| Final state and preservation | `final-state` 486–491; `finalize` 502–504 | `after-snapshot.json`, `preservation.json`, `post-preliminary-snapshot.json` | Pass |
| All 24 guard functions called exist as exports; every STATE/graph field read exists | read-only probe | `probes/probe-deps.mjs` output | Pass |

## 3. Findings

| ID | Severity | Location | Triggering path → consequence | Bounded correction |
|---|---|---|---|---|
| **F-1** | **High — blocks release** | `INVOCATION.ps1.txt` lines 3 and 15–17 | The installed host is **Windows PowerShell 5.1.26100.9711**, and the transcript does not pin another edition. With `$ErrorActionPreference = 'Stop'`, `2> "$capturePath/stderr.log"` on a native command turns the **first stderr byte into a terminating error**. Measured with a harmless Node one-liner in my scratch folder: `$LASTEXITCODE` was never captured (empty), `stderr.log` stayed **empty**, the stderr text appeared only in the caught message, and stdout was re-encoded (UTF-8 BOM). Every launcher or child stderr fallback, which is the **authoritative record** whenever a completion write fails or no output folder exists, would be lost or truncated, and `launcherExit` would be null. The launcher's own Git reads (`launch-review.r4.mjs` line 201, `execFileSync` without `stdio`) also pass Git diagnostics to stderr. The F3 result cannot be lost silently (the host throws "incomplete capture"), but the failure evidence the plan requires to be retained can be | Capture without PowerShell stream handling, for example `$p = Start-Process -FilePath 'C:\Program Files\nodejs\node.exe' -ArgumentList @(...) -NoNewWindow -Wait -PassThru -RedirectStandardOutput "$capturePath\stdout.log" -RedirectStandardError "$capturePath\stderr.log"; $launcherExit = $p.ExitCode`. That gives byte-faithful files and the real exit code. The arguments contain no spaces, so `-ArgumentList` joining is safe; state that, and keep `-- --out …` unchanged. Name the PowerShell edition. Prove the capture once with a harmless stand-in that writes to stdout and stderr and exits nonzero, before the release. Argument forwarding itself is correct: I measured `--` and the child `--out` arriving intact |
| F-2 | Medium | `entry.mjs` 505 and 520 | If `finalize()` throws after the preliminary `child-result.json` was written with exit 0 (for example the environment check at 505), the fallback at 520 reports exit 6 but omits the preliminary record's path, hash and `superseded` disposition. The preliminary file is marked non-authoritative and the process exits nonzero, so **no path reports a successful F3 acceptance**, but the row-24 traceability is weaker than the launcher's | Include `preliminary: { path, sha256, exit, disposition: "superseded: preliminary exit P, final exit 6" }` in the 520 fallback. This changes the child hash, so it needs renewed binding and review; it may instead be accepted as a stated limitation |
| F-3 | Low — inherited, not a new gap | worker (line 134, `strip`); guard `guarded-rebuild.mjs` 1565–1566, 1618 | Scene coordinates `x, y, fx, fy` are excluded from comparison, so the coordinates of all 3,614 nodes are unverified. The operative guard (D-426 PR4b) excludes them because "they are not deterministic". In the pinned producer they come from `attachLayoutPositions` → `computeLayout`, seeded by `stableSeed(node ids)`. That is exported, and it varies only with `GRAPHIFY_FAST_LAYOUT`, which was absent at prepare. The guard's stated reason appears inaccurate for 0.17.1 | Not required for this child, which follows the operative rule. Route separately (B-050): either verify coordinates through `P.attachLayoutPositions(P.buildStudioScene(graph, {}))` with `GRAPHIFY_FAST_LAYOUT` unset, or correct the guard's rationale |
| F-4 | Low | `entry.mjs` 471, 490 | `pendingSemantics: 0` is a literal in the evidence, not a computed value; the real zero-unresolved proof is spread over other checks | Derive it from those checks, or label it as a summary. Evidence wording only |
| F-5 | Info | guard internals called by the child | Guard functions that run `git` themselves (for example `publicationSourceFindings`, `sourceProtection`) use the guard's bare `execFileSync("git")`. They resolve through the inherited PATH (frozen Git first) but are not logged under `commands/` and have no timeout | Residual; state it in the evidence limits |

## 4. Verdicts

| Area | Verdict |
|---|---|
| Full F3 coverage (exact child) | **Approve with conditions**: every obligation class has an executable, fail-closed check. F-3 is an inherited operative limitation; F-4 is evidence wording |
| Invocation | **Reject**: F-1 |
| Failure handling | **Approve with conditions**: every failure, skip, unrun check, nonzero/null status, signal, spawn error, timeout, malformed worker output and finalization fault gives a nonzero exit and keeps files; F-2 weakens traceability in one fallback |
| Preservation | **Approve with conditions**: file contents and mtimes of the whole work tree, candidate, live state, receipts, linked inventory, stray work, refs and configuration are compared. Directory metadata and guard-internal Git calls (F-5) are not covered |

## 5. Residual limits (not provable without execution)

- Every runtime result: projections, the producer's import side effects, timings, and the exact configuration digest under the
  controlled environment (a `HOME`-type difference would stop the run with a binding finding).
- Historical intermediate evidence: call timestamps, ignored-proxy files and the attempt-1 pending graph come from the
  prepare/resume record. The child re-verifies their hashes and recomputes the selection brackets, oracle, fresh extraction and
  final merge. The producer runs themselves cannot be re-observed; that is an existing provenance limit, not a new gap.
- **My own process deviation:** during this review I ran one plain `git status` (without `--no-optional-locks`) in
  `work/attempt-2/gen/checkout`. No file changed, no lock remains, and `index` keeps its mtime of 2026-10-29 11:33:19Z.
  Only the `.git` directory's own timestamp changed (13:58:52Z), from Git's transient lock file. The child compares file
  contents and file mtimes only, so its run is unaffected; the deviation is recorded here.

## 6. Recommendation

**Return to Lane B for a fresh external revision of the invocation (F-1)** before a Judge execution release. If only the
invocation changes, `entry.mjs` and its hash stay as reviewed. Folding F-2 (and optionally F-4) into the child changes its
hash and needs renewed binding and review. F-3 is routed separately. K and a separate N remain conditional on a complete,
positive F3 review after an approved execution.
