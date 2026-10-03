# B-050 — Hook rebuild again resets Graphify branch metadata

- **Raised:** 2026-08-25 by Lane B
- **Kind:** finding
- **Phase:** 1
- **Blocks:** claiming that the knowledge graph is current with the checked-out branch
- **Status:** Answered
- **Verified-At-Commit:** 5f86ef1
- **Verified-By:** — not independently verified; dispositioned by Lane A
- **Resolution:** Applied
- **Lane A:** Answered `D-122` — **upheld, and it corrects a withdrawal Lane A made too early.** `D-118` withdrew `B-046` because the state had recovered; **that is `arrival_not_correctness` applied to Lane A's own verification** — one later observation cannot distinguish *repaired* from *intermittent*. **Your reproduction settles it**: the record was null at the start of this pass and `hook-rebuild` repopulated it correctly, so the failure is intermittent. `graphify state status` shows `gitDir` and `commonGitDir` null beside it — **the tool loses its git context and overwrites a good record while leaving `stale: false` untouched.** **One narrowing, and it is the useful part:** `docs-drift` compares `lastAnalyzedHead` against HEAD and honours `stale` only when explicitly `true`, **so the check is not fooled and failed correctly this pass.** The exposure is to a **reader**, which is `G90`'s shape. Closed as `G97` by making the check's own output name the self-contradiction — *"run `hook-rebuild`"* is the remedy for ordinary staleness and merely the **cause** of this one. **No fixture**: reproducing a non-deterministic external tool would be a probe that passes by luck. **Your procedure is adopted verbatim as the standing order.**
- **Evidence:** `scripts/checks/docs-drift.mjs` null-record branch (`G97`); `graphify state status`; `.graphify/branch.json` before and after rebuild

## What happened

B-046 recorded a null Graphify branch state and was later withdrawn after the state recovered.
At committed HEAD `e2f584ca9c5e0b48bb2fa15ccbb9a83794afa645`, the branch record was current before this
review. Running `npx graphify hook-rebuild` rebuilt the extracted topology, then replaced the
branch record with null `branchName`, null `lastSeenHead`, and null `lastAnalyzedHead`.
`graphify check-update` also reports pending descriptions and community labels.

The earlier recovery therefore does not establish that a later hook rebuild preserves lifecycle
metadata. Extraction success, semantic completion, and branch currency are three separate facts.

## Required repair

Lane A should reproduce the lifecycle transition against a disposable Graphify state directory,
identify whether the installed downstream distribution or the repository invocation resets the
record, and add a negative fixture or documented safe procedure that prevents a non-null current
HEAD from becoming null. Until then, do not use `hook-rebuild` alone as evidence of graph currency.
The repair should verify topology extraction, semantic completion, and branch metadata separately.

## Guaranteed failure

A reviewer sees `stale: false` beside a null analyzed HEAD, interprets it as synchronized, and uses
semantic results that cannot be tied to the checked-out commit. A later docs-drift check either
fails or gives a misleading outcome because the lifecycle comparison has no analyzed HEAD.

## Success criteria

- rebuilding cannot replace a current non-null branch and analyzed HEAD with null values;
- `lastAnalyzedHead` equals the committed HEAD after the approved update procedure;
- `graphify check-update` has no pending semantic batch before “fully synchronized” is claimed;
- Graphify queries still include the curated fragment layer; and
- the runtime-only `.graphify` files remain uncommitted.

## What Lane B did instead

Recorded the observed recurrence, did not edit the gitignored Graphify runtime state, and withheld
the synchronization claim.

## Verification review — 2026-08-29

**Keep `Applied`.** `docs-drift` currently passes and the null-record diagnostic exists, but
one healthy observation cannot close an intermittent state-reset defect.

**Draft owner fix — Graphify/runtime follow-up:** reproduce the lifecycle transition in a
disposable state directory, prevent a non-null analyzed HEAD becoming null, and verify topology,
semantic ingestion, curated-fragment preservation, and branch metadata as separate properties.

## Lane B independent proof review — D-403 isolated run, 2026-10-03

**Read revision:** `c0a925c8651928a0ede1ae01a23f128780600a04`. Lane B independently read the manifest, the before/after branch records and saved graph snapshots at `C:/CoWork/outputs/lane-a-b050-proof-2026-10-03/`, including the persisted-field comparisons. Lane A operated the disposable worktree and stopped at D-403's parity-loss condition. This review adds evidence to the existing **Applied** disposition; it does **not** assert whole-entry Verified or change Lane A's answer.

| Criterion | Observed result and limit |
|---|---|
| Isolation and branch metadata | The worktree was at the named revision with its own Graphify state. The post-rebuild and final branch records have non-null branch identity and `lastAnalyzedHead` equal to that revision. The original intermittent null-record defect did not recur in this one run; non-recurrence is not proven. The caller before/after snapshots show no changed HEAD, status, index, branches, worktrees or `.graphify` file hashes. |
| Curated layer after rebuild/restore/merge | Fresh rebuild contained 798 nodes. Docs-layer restore and ordered merge produced a saved graph in which **139/139 mergeable fragments** matched their declared fields and edges. The three detect manifests are not mergeable. |
| After `graphify update --fill-missing` | **Stop condition met.** The saved graph matched only 13/139 fragments; 126 differed in 534 declared `community` and 534 `community_name` values, with no reported missing node/edge or other declared-field difference. The update re-extracted and re-clustered the graph. Its log says **20 description batches and community-label instructions still await answers**; it did not ingest descriptions or complete semantics. A green 19/19 worktree check did not detect the field loss. |
| Proposed re-merge after update | **Unproven as a completion route.** In-memory overlay of the fragment-declared node fields onto the saved post-update snapshot would restore those fields, but would leave 533 nodes whose restored `community_name` differs from `graph.community_labels[community]` in that snapshot. The pre-update merged snapshot already has 728 such mismatches, so this is a pre-existing as well as a route-specific semantic concern; do not call the metadata map correct merely because fragment parity passes. Test the actual saved result, label ownership and query meaning in an isolated unit before live sync. |

**Finding:** D-403's procedure was followed and its failure was correctly stopped. The observed healthy metadata is narrower than B-050's success criteria; its semantic-completion and curated-preservation criteria fail or remain untested. Keep `Status: Answered`, `Resolution: Applied`, and the current audit fields. D-405's caller graph is still stale against its governed sources; `graphify check-update` reporting current does not override `docs-drift`'s analyzed-HEAD comparison. Lane A should return a bounded follow-up act for any procedure/tool/ownership change. B-071 holds the existing graph-field finding; do not duplicate its issue as a new product feature.

| Verdict | Scope | Condition / follow-up phase |
|---|---|---|
| Approve | The isolated run's valid metadata, 139/139 intermediate parity and fail-closed stop | Phase 1: keep the manifest and this scoped review as B-050 evidence |
| Approve-with-conditions | An isolated re-merge/semantic-recovery experiment | Phase 1: new bounded Judge act; prove final saved parity, label meaning, completed semantic batches, valid metadata and unchanged caller before any live sync |
| Reject | B-050 Verified, universal non-recurrence, or a full sync inferred from the green worktree check or intermediate merge | Phase 1: retain the Applied lifecycle and failed criterion |
| Defer | Live D-405 graph sync, tooling repair and B-046's separate disposition | Phase 1: independent recovery proof and specific owner acts |

## Terminal annotation record

- **Current-Resolution:** Applied
- **Annotation-Type:** verification-evidence
- **Annotation-Act:** Lane B D-403 isolated-proof review, 2026-10-03, this entry's independent proof section
- **No-Scope-Reopened:** true
- **Annotated-At-Commit:** c0a925c8651928a0ede1ae01a23f128780600a04
