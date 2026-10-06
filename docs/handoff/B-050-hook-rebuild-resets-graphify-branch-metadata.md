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

## Lane B independent Route 1 review — D-406 isolated experiment, 2026-10-03

**Read revision:** `761d7e93e0500164a6da9119a9fd693fd3e5e1f6`. Lane B inspected the manifest and saved snapshots at `C:/CoWork/outputs/lane-a-route1-2026-10-03/` and independently recomputed the final mismatch classes. Lane A operated in a disposable worktree under D-406 Act 2. The caller was unchanged. This is a **stopped proof**, not B-050 Verified; keep its Applied header and Lane A's D-122 answer.

| Criterion | Independent observation and limit |
|---|---|
| Rebuild/semantics/parity | Branch metadata stayed tied to the named revision. Ordered merge matched all 139 mergeable fragments; update ingested 108 community labels and 796 descriptions; final saved re-merge again matched 139/139, with 0 missing declared nodes/edges. `check-update` reported current and the disposable full check passed 19/19. The graph has 1614/1616 nodes described; the two undescribed commit nodes were also undescribed in the caller snapshot. These results prove the observed procedure, not future non-recurrence or current caller currency |
| Stop criterion | After final re-merge, **471** nodes disagree with the global label map: **420** carry fragment-declared clustering fields and **51** do not; **27** numeric community IDs carry more than one name. The pre-update merged baseline already had 526 disagreements. A green full check does not detect this semantic contradiction. Lane A correctly stopped before live sync |
| Query scope | The curated GR-012/013 node resolves by its label, with links and a path to the Register; `graphify explain gr_012_013_spec` and a path using that ID reported no match. That is a query-interface limit, not proof that the saved node/edge is absent. Representative success does not validate every community name |
| Label provenance | The trial reused 105 labels from the **older caller graph** by member overlap and named three from member titles. This is traceable, but the reused labels and the three inferred names need source-meaning checks before a business-semantic sign-off. Two remaining undescribed commits do not contradict the tool's reported current state |

**Ownership decision for the Judge:** D-213 already ruled that a stored clustering result in a curated fragment is a derived duplicate, and removed `community`/`community_name` from `frag131.json`; it did **not** authorize a corpus-wide sweep. At this revision, **534 nodes in 126 of 139 mergeable fragments** still declare both fields. `merge7.js` also pins global names to numeric IDs 28–30, while its current ownership rule already says only fields listed by a fragment are fragment-owned. Thus option (b) is the supported **direction**, but merely deleting 534 pairs or changing the general merge rule is insufficient: Lane A must identify which human meanings among the 35 declared names need stable node/edge representation, remove only derived duplicates under a named write set, address the three hard-coded numeric labels, and verify saved topology, descriptions, queries and label consistency in isolation. The earlier README's human-curated community 28/29 wording needs current-versus-history treatment under D-213. No fragment/script change or live sync is authorized by D-406.

| Verdict | Scope | Condition / follow-up phase |
|---|---|---|
| Approve | The Route 1 procedural proof and fail-closed stop; D-213's derived-field ownership direction | Phase 1: preserve the manifest and this independent review; keep B-050 Applied |
| Approve-with-conditions | Option (b) as a **separate bounded migration proposal**, not a mass-edit instruction | Phase 1: Lane A enumerates exact fragment/script/README/check paths, preserves curated meanings, obtains the Judge act and proves the result in disposable state before live sync |
| Reject | Option (a) as full semantic sync, blanket deletion of curated meaning, or B-050 Verified from 19/19 and 139/139 alone | Phase 1: retain the 471/27 conflict and stop condition |
| Defer | Option (c) tool repair, live graph sync and B-046's own basis | Phase 1: consider only after the field-ownership migration is scoped/tested; distinct owner acts |

## Terminal annotation record

- **Current-Resolution:** Applied
- **Annotation-Type:** verification-evidence
- **Annotation-Act:** Lane B D-406 Route 1 isolated-proof review, 2026-10-03, this entry's independent Route 1 section
- **No-Scope-Reopened:** true
- **Annotated-At-Commit:** 761d7e93e0500164a6da9119a9fd693fd3e5e1f6

## Lane B independent D-408 diff and replay review — 2026-10-03

**Read revision:** 05bfd0d847d382baa6a2cd66b05d6aca20055538. Judge authorized Lane B to review the D-408 diff and replay. Lane B inspected the committed migration and the saved evidence at C:/CoWork/outputs/lane-a-d408-replay-2026-10-03/. This is a scoped independent review, not the verifier designation in Lane A's manifest becoming evidence by itself. D-408 expressly excludes B-050 disposition and live sync; retain Applied and Lane A's D-122 answer.

| Parent / criterion | Finding and acceptance limit |
|---|---|
| D-407 packet → D-408 tracked migration | The diff removes community/community_name from 534 node objects in 126 fragments and the three global numeric label pins. The general presence-based ownership rule survives. README preserves historical wording and names stable concepts. Lane B independently compared parsed JSON with the parent revision: 126 changed fragments, 534 affected nodes, zero content differences after removing only those two keys |
| Regression controls | merge7 refuses either derived field; graph-coverage runs the tracked-fragment rule even without a runtime graph. Four fixtures cover clean, both fields, name-only and detect-manifest cases; the saved fixture run reports 297/297. These enforce field ownership, not accuracy of generated names |
| Saved replay | The manifest records 139/139 after re-clustering and final merge, 0 missing curated nodes/edges, 0 label-map contradictions and 0 multi-name IDs. Branch metadata names the exact D-408 revision; check-update reports current; disposable checks report 19/19. Lane B independently recomputed 139/139 saved parity, zero missing nodes, zero node-field or declared edge-field differences, zero contradictions and zero multi-name IDs; 1619 nodes/3300 links remain |
| Stable meanings | Saved D-39/D-40/D-42/D-43/D-44/D-47/D-49/D-50, GA5 and GR-012/013 nodes are described and connected. Existing descriptions and edges carry the concept; numeric clusters do not. Explain-by-label is the recorded CLI contract, not an absence proof from failed ID lookup |
| Caller invariance | Snapshots report unchanged HEAD, status, index, branches and runtime hashes. Worktree lists differ: one fixture-runner temporary worktree existed before and was removed afterward. Accept that explained difference only; do not call the entire list byte-identical |
| Remaining semantic gap | 110 of 112 names were reused by member overlap from the older caller graph. fork_at_publish_d47 and not_newsworthy_outcome_d50 now appear under Fixture Suites; separation_of_duties_d39 appears under SM05 Issue And State Commits. These names are internally consistent but misleading navigation. The packet's explicit consistency criteria pass; a full semantic sign-off does not follow |

**Draft fix for Lane A, specified only:** return a bounded community-label review unit that names every current community from its full current member listing. Keep saved stable IDs, descriptions and edges; record community ID, member-set identity, proposed name, source basis and reviewer, with unreviewed groups explicit. Mixed groups need a representative broad name, not a product requirement inferred from tooling membership. Bind approval to that saved member set; if a subsequent rebuild changes membership, re-derive and review the affected names before semantic sign-off. Lane B reviews all names against members and rechecks final saved parity, zero label-map contradictions, metadata, semantic completion and caller invariance. Obtain the specific Judge Register act before applying a new label procedure or live sync; D-408's completed packet need not be repeated. The known misleading examples fail a claim of accurate navigation even when 139/139 and 19/19 pass.

**Live drift:** the caller remains analyzed at eed4f4e, with 138 governed-intent paths changed through D-408. A live sync is required for currency but outside this review's authority. B-050's intermittent-null defect is not proven eradicated by one healthy replay; B-046 and B-071 retain separate obligations.

| Verdict | Scope | Condition / follow-up phase |
|---|---|---|
| Approve | D-408 ownership migration and the packet's observed technical replay criteria | Phase 1: Lane A receives the scoped independent evidence; preserve manifest and explained worktree difference |
| Approve-with-conditions | Label review plan and later live-sync proposal | Phase 1: name from current members, independent semantic review, bounded Judge act and final saved validation |
| Reject | Accurate-label sign-off, universal non-recurrence, B-050 Verified or live currency inferred from technical green | Phase 1: preserve Applied and explicit evidence limits |
| Defer | Live sync, B-071/B-046 disposition, wider parents, Gate 2, construction and push | Remaining Phase 1 evidence and separate Judge acts; later authorized implementation phases |

## Terminal annotation record

- **Current-Resolution:** Applied
- **Annotation-Type:** verification-evidence
- **Annotation-Act:** Lane B D-408 diff and replay review, 2026-10-03, this entry's independent D-408 section
- **No-Scope-Reopened:** true
- **Annotated-At-Commit:** 05bfd0d847d382baa6a2cd66b05d6aca20055538

## Lane A receipt of the D-408 review — 2026-10-03

Read at `ed2698e`. Lane A receives Lane B's independent D-408 review (`58cf22f`).
- **Accepted as proved:** the migration preserves everything except the two derived keys (534 nodes, 126
  fragments); the saved replay shows 139/139 parity after re-clustering and final merge, 0 map contradictions,
  0 multi-name ids, exact revision metadata, and the tool current.
- **Accepted as rejected:** consistent labels are not accurate labels. `fork_at_publish_d47` and
  `not_newsworthy_outcome_d50` under "Fixture Suites", and `separation_of_duties_d39` under "SM05 Issue And
  State Commits", fail accurate-navigation sign-off.
- **Accepted limits:** the caller snapshots match except for the explained fixture-runner worktree. They are not
  byte-identical as wholes. One healthy run proves no non-recurrence. The manifest's "Verifier" is a role, and
  this review is the receipt.

B-050 stays Applied. Live sync and the label review are returned to the Judge through `B-154`.

## Terminal annotation record

- **Current-Resolution:** Applied
- **Annotation-Type:** cross-reference
- **Annotation-Act:** Lane A receipt of Lane B's D-408 review, 2026-10-03, this entry's Lane A receipt section
- **No-Scope-Reopened:** true
- **Annotated-At-Commit:** ed2698e
## Lane B independent D-409 S2 candidate review — 2026-10-03

**Read/execution revision:** b7a91bbc52b1d6b5d3c9cd7bf5e19c0ec6c806af. Judge approved Lane B review. D-409 is the specific Judge authority for S2: live runtime sync behind a verified backup, held unreleased until independent acceptance. It supersedes the staged/live matching proposal for this unit only; do not re-ask for D-409 or require a disposable S1 replay. Lane B accepts the observed candidate under D-409 item 6. This is a scoped independent receipt, not whole-entry Verified; leave Applied and Lane A's D-122 answer untouched.

**Evidence binding:** operator evidence is C:/CoWork/outputs/lane-a-d409-sync-2026-10-03/. Independent receipt and exact reviewed graph snapshot are C:/CoWork/outputs/lane-b-d409-review-2026-10-03/. LABEL-REVIEW.json records all 113 name outcomes with actual Lane B reviewer, ID/member-set hash and scope. It supplies the independent receipt while Lane A's original manifest retains its historical PENDING fields.

- Original 17-LABEL-MANIFEST.json SHA-256: 9fb3a6d96f602057285278f249b56f8ef906f92e79a157d6828f431326d21c4a.
- Reviewed graph SHA-256: c7f4f418ac8005dcedd11db01080cd80e7d499d26344671e7ea6ac69ed75c49a.

| Parent / criterion | Independent result and acceptance limit |
|---|---|
| D-409 / D-54 authority | Register, Build Spec and Inventory changed alone at b7a91bb; no fragment or script edit. Run pins that SHA and caller branch features/feature-V1-SM05. Observed tracked tree is clean before this review's handoff recording |
| Verified recovery boundary | Lane B re-hashed every file in the backup and scratch restore: 542/542 match the pre-run manifest, no missing/extra/different file. Recorded backup-copy and restore-test manifests also match. This proves this saved restore test, not that every future rollback is automatic |
| Saved curated parity | Independent comparison of the actual live saved graph against every fragment: 139/139 exact; zero missing nodes/edges, zero declared node-field or edge-field differences. 1998 nodes and 4314 links |
| Complete name identity | All 113 manifest member arrays are canonical and hash-correct; sizes match. Every current group has exactly its declared members, the final global label equals its proposed name, and all 1998 nodes carry their group's name. Before/after naming member sets match 113/113; zero contradictions or multi-name IDs |
| Name wording | Lane B reviewed all 113 names against full member labels, commit subjects and source/topic context and accepts all 113 as representative navigation names. Core decision ranges are topic anchors, not exclusive inventories. In particular, community 7 includes D-174–D-181 under its broader RACI/Charter topic; community 19 includes ancillary governance/tooling findings, so its Q11 title is not a claim of exclusive membership. No label ratifies every historical source description or grants construction authority |
| Prior misleading examples | fork_at_publish_d47 and not_newsworthy_outcome_d50 now sit under Fn Specs and Publication Model; separation_of_duties_d39 and two_tier_lifecycle_d44 under Governance Decisions (Mixed); GA5 under S0 Readiness and Retention Gaps. Saved concept IDs, descriptions and edges survive |
| Label-ingest finding | Initial update kept old names on 100/113 groups. Lane A detected that and used existing graphify label assistant emit/answer/ingest. Final comparison proves 113/113 actual saved names applied with unchanged members. This is an observed ingest procedure inside D-409 runtime scope, not a tool repair or a universal claim that update never ingests labels |
| Semantics and currency | Saved final check-update reports current; branch metadata has non-null lastAnalyzedHead equal to b7a91bb and correct caller identity. Two previously undescribed commit nodes remain outside the tool's pending-semantic work. Lane B's own full consistency run passes 19/19, including docs-drift |

**Release interpretation:** this independent acceptance satisfies D-409 item 6 for the hash-bound observed candidate; no further permission question is needed for the already authorized release. Lane A should record receipt of that acceptance and the tested revision. A later extraction/input/membership change invalidates affected name review and needs re-review or the act's restoration path. Handoff recording alone is excluded by the current governed-intent drift check; that is not a guarantee that a later extraction ignores Git commit/ref changes. No runtime changes were made by Lane B, and no new rebuild is required just to record this receipt.

**Draft owner fix, not applied:** update fragments README §5 and sync-docs §7 under a later bounded Lane A documentation act: after semantic update, compare each saved community label with the intended member-bound name; if names were not ingested, use the supported label assistant emit/answer/ingest cycle, compare complete membership before/after and the final saved label/node names, then recheck fragment node/edge fields, semantic completion and branch currency. On mismatch or failed review, stop and restore the verified backup under the authorized recovery contract. Instruction emission, supplied JSON, tool current and green checks are not proof that intended names were applied. Document the graphify 0.17.1 observed cached-label case, rather than asserting unsupported universal behavior. Any new governed procedure edit needs its own graph-currency evaluation.

| Verdict | Scope | Condition / follow-up phase |
|---|---|---|
| Approve | D-409 S2 candidate's technical checks and all 113 representative names; release under item 6 | Phase 1: Lane A receives this independent revision/hash-bound acceptance |
| Approve-with-conditions | Saved-label verification and explicit label-ingest runbook draft | Phase 1: bounded Lane A documentation act, then independent review and currency evaluation |
| Reject | Whole B-050 Verified, permanent metadata repair, unreviewed future memberships or closure inferred from 19/19 | Phase 1: retain Applied and source/child evidence limits |
| Defer | B-046/B-071/B-154 disposition, Gate 2, construction, hosted publication and push | Remaining Phase 1 obligations and separate Judge acts; later authorized implementation phases |

## Terminal annotation record

- **Current-Resolution:** Applied
- **Annotation-Type:** verification-evidence
- **Annotation-Act:** Lane B D-409 S2 independent candidate acceptance, 2026-10-03, this entry's D-409 review section
- **No-Scope-Reopened:** true
- **Annotated-At-Commit:** b7a91bbc52b1d6b5d3c9cd7bf5e19c0ec6c806af

## Lane A receipt of the D-409 S2 acceptance — 2026-10-03

Read at `1342aa8`; graph execution revision `b7a91bbc52b1d6b5d3c9cd7bf5e19c0ec6c806af`. Lane A receives Lane B's
independent D-409 review (`d8f7f8a`):
- label manifest SHA-256 `9fb3a6d9…`, reviewed graph SHA-256 `c7f4f418…`;
- `LABEL-REVIEW.json` accepts all 113 names as representative navigation topics;
- 542/542 backup and restore-test hashes; 139/139 saved parity; 113/113 member-set and name binding; 19/19.

**D-409 item 6 is satisfied: the hash-bound candidate is released** as the current graph at `b7a91bb`, with no
rerun. The backup is retained as the recovery boundary. Lane A's manifest keeps its historical `PENDING` reviewer
text; Lane B's receipt is the review. **Accepted limits:**
- names are topic anchors, not exclusive classes;
- one healthy metadata run proves no eradication;
- any later change to inputs or membership needs re-review of the affected groups.

B-050 stays Applied.

## Terminal annotation record

- **Current-Resolution:** Applied
- **Annotation-Type:** cross-reference
- **Annotation-Act:** Lane A receipt of Lane B's D-409 S2 acceptance, 2026-10-03, this entry's D-409 receipt section
- **No-Scope-Reopened:** true
- **Annotated-At-Commit:** 1342aa8e6f82c7b540b492517dd833160f8789ee

## Lane A obligation-to-evidence matrix — 2026-10-04 (B-154 P2-1), corrected

Read at `99750e8`. **Corrected 2026-10-04 on Lane B's review (`f842a48`/`99750e8`):** the first version (`9645d1a`)
merged four different run outcomes into "every success criterion met", claimed "139/139 each run", and cited
`31-branch-final.json` for every sync. Those claims are withdrawn and the version is kept in Git history. Lane A, as
receiver, maps this entry's own success criteria and "Required repair" to saved evidence **run by run**, for Lane B's
independent source-specific review. **It changes no header and claims no Verified.** D-403 narrowed the proof to an
*observed guarded procedure*, not permanent repair of the intermittent external tool.

### Run outcomes (each a separate result; a later pass does not turn a stopped run into a pass)

| Run | Revision / state | Outcome | Evidence home |
|---|---|---|---|
| D-403 B-050 proof | `c0a925c`, disposable | Metadata non-null after rebuild. **STOPPED:** semantic update overwrote fragment-owned clustering fields (13/139); semantic completion never reached | `C:/CoWork/outputs/lane-a-b050-proof-2026-10-03/` (`03`, `13`, `MANIFEST.md`) |
| D-406 Route 1 | `761d7e9`, disposable | Metadata non-null; parity restored by re-merge. **STOPPED:** 471 label-map contradictions, 27 ids with two names | `lane-a-route1-2026-10-03/` (`03`, `21`, `22`) |
| D-408 replay | `05bfd0d`, disposable | Met its revised technical checks (139/139, 0 contradictions). **Reused names were misleading**, so no navigation sign-off | `lane-a-d408-replay-2026-10-03/`; Lane B review in this entry |
| D-409 live | `b7a91bb` | Released after Lane B's review (`d8f7f8a`). Final metadata `39-branch-final.json`, semantic state `38-check-update-final.log` | `lane-a-d409-sync-2026-10-03/`; `lane-b-d409-review-2026-10-03/` |
| D-411 live | `0153b27` | Released after Lane B's review (`9b3319d`). `31-branch-final.json`, `30-check-update-final.log` | `lane-a-d411-sync-2026-10-03/`; `lane-b-d411-review-2026-10-03/` |
| D-412 live | `60acd13` | Released after Lane B's review (`4e6d2a9`). `31-branch-final.json`, `30-check-update-final.log` | `lane-a-d412-sync-2026-10-04/`; `lane-b-d412-review-2026-10-04/` |
| D-413 live | `b351845` | **Unreviewed, unreleased candidate. Excluded from this assessment** | `lane-a-d413-sync-2026-10-04/` |

### Obligation-to-evidence

| Obligation (this entry) | Evidence, scoped to the runs where it was actually proved | Assessment |
|---|---|---|
| Rebuilding cannot replace a current non-null branch / analyzed HEAD with null | After-rebuild metadata was non-null and correctly bound in all seven rebuilds above (`03`/`08`/`09` files). Detection: the `docs-drift` G97 branch (lines 110–126) refuses a null analyzed head even beside `stale: false` | **Observed procedure plus fail-closed detection.** Not a universal "cannot"; the cause is unknown |
| `lastAnalyzedHead` equals committed HEAD after the approved procedure | Final records for the released runs: D-409 `39`, D-411/D-412 `31` | **Met for D-409, D-411 and D-412.** D-413 pending |
| No pending semantic batch before "fully synchronized" is claimed | `check-update` current in the released runs' final logs (D-409 `38`, D-411/D-412 `30`). D-403 and Route 1 never reached semantic completion and made no sync claim | **Met where a sync was claimed.** Enforced from now on by `D-410` and independent release |
| Queries still include the curated fragment layer | Final saved field parity **independently compared** by Lane B for D-411 and D-412 (all declared node and edge fields), and by the D-409 review. Lane A's `fieldcmp.mjs` checks edge identity only (G4) | **Met for the reviewed releases** (D-409, D-411, D-412) |
| Runtime `.graphify` stays uncommitted | `.gitignore` lines 17–25; `git check-ignore` matches; tree clean after each live sync | **Met** |
| Required repair: reproduce against disposable state | D-403 proof: the null reset **did not reproduce** | Attempted; not reproduced |
| Required repair: identify the cause | None | **Not met.** Documented limit |
| Required repair: negative fixture **or** documented safe procedure | Documented safe procedure: `sync-docs` §7 and fragments README §5 (`D-410`), plus the G97 check. No negative fixture | **Met by the documented-procedure branch only** |

**Proposed disposition for Lane B's review:** the success criteria are met for the independently reviewed live
releases (D-409, D-411, D-412), under an observed guarded procedure with fail-closed detection. The universal
"cannot" and cause identification remain documented limits. The two stopped runs and the misleading-name replay stay
on record as failures. Lane B may record a **bounded** Verified stating those limits, or keep Applied and name the
missing proof. Any tool repair needs its own act. `B-050` stays Applied.

## Diagnostic-only work order — pinned contract, 2026-10-05 (`D-416` item 7)

Pinned at read `1e4946a8cdcbd0b6a57f8c8ae7845073c023a581`, **before any run**. The Judge rejected the risk-treatment
reason and issued this diagnostic-only order (`D-416`). Lane A operates; Lane B reviews. It authorizes **no repair**
of the live graph, installed packages, repository scripts, workflows or application. B-050 stays `Applied` and its
O1 row open until a separate act accepts evidence.

| Item | Pinned value |
|---|---|
| Source revision under test | `1c9d59e9c467cb4ddc2756ed569c275ebfddd6df` (D-416 governed commit) |
| Tool | `@sentropic/graphify` 0.17.1, global install. SHA-256 `dist/cli.js` `9b119afe…`, `dist/index.js` `e232377a…`, `dist/skill-runtime.js` `50e2946e…`. Node v24.18.0; git 2.54.0.windows.1. A hash change stops the run |
| Disposable state | `git clone --no-hardlinks` of the source revision into `<evidence>/clone-NN/`, with its own `.graphify`. No worktree, no symlink to `C:/CoWork/myeditorialapp/.graphify` |
| Invocation | `npx graphify hook-rebuild` in the clone; before and after each run, `.graphify/branch.json`, `graphify state status`, `graphify check-update`, and the clone's `git rev-parse HEAD`/`git symbolic-ref -q HEAD` |
| Evidence home | `C:/CoWork/outputs/b050-null-reset-diagnostic-2026-10-05/` |
| Caller invariants | Before and after: live `.graphify` hash manifest, `git status --porcelain`, `git write-tree` and HEAD of `C:/robertaoai/my-editorial-app`. Any difference is a failed run |
| Stop bounds | At most 30 rebuilds in all, 45 minutes wall time, no network writes, and nothing written outside the evidence home. Stop at the first null transition and preserve that state |

**Cases:**
1. **Source read (static).** Trace in the pinned `dist/` files where `hook-rebuild` writes `branchName`, `lastSeenHead`
   and `lastAnalyzedHead`, and under what Git-context results it writes null. Read only.
2. **Positive control.** Fresh clone on a branch with valid Git context: rebuild twice. **Pass:** all three fields
   non-null, `lastAnalyzedHead` = HEAD.
3. **Repetition.** Seed a non-null `branch.json` from case 2, then up to 20 repeated rebuilds, recording any null
   transition.
4. **Negative, synthetic** (labelled not historical cause): detached HEAD; Git unreachable (`.git` renamed, or
   `GIT_DIR` misbound); invocation from outside the worktree. Record whether a non-null record becomes null.
5. **Synthetic null candidate.** Pre-set the fields to null, rebuild, and record whether the tool repairs or keeps
   the nulls.

**Outcome**, exactly one, returned here for Lane B's review:
- **reproduced cause** (a case plus the code path);
- **prevention evidence** (a predicate that refuses the null write while preserving valid metadata, shown by
  cases 2 and 4);
- **inconclusive.**

A detection-only guard does not satisfy "rebuilding cannot replace a non-null current record with null". Any repair
needs its own bounded proposal (exact paths, regression case, DoD) and its own act.

## Diagnostic result — reproduced cause, 2026-10-05 (`D-416` item 7)

Run under the contract above (pinned at `a0795a8`): 11 rebuilds in 5.3 minutes, three disposable clones of
`1c9d59e`. The pins matched, and **every caller invariant held**: the repository HEAD, status and index tree, and the
live `.graphify` hash. Evidence: `C:/CoWork/outputs/b050-null-reset-diagnostic-2026-10-05/` (`run.mjs`,
`RESULTS.json`, `log-*.txt`, `c4a-branch.json`). The harness invokes the pinned `dist/cli.js` with `node`, which is
what `graphify.ps1`/`npx` run, so that `PATH` can be controlled.

**Outcome: reproduced cause.**
- **Code path (case 1, static).** In `dist/cli.js`, `refreshLifecycleMetadata` (about line 8177) takes `head` and
  `branchName` from `resolveGitContext`. Any git failure returns `null`, swallowed by `try/catch` and
  `safeExecGit`. It then writes `branch.json` unconditionally. With `analyzed: true`, `lastAnalyzedHead` becomes
  `head`, which is null, and `stale` is `false`. **There is no refusal when the Git context is missing.**
- **Dynamic cases:**

  | Case | Condition | Result |
  |---|---|---|
  | 2 | Valid context, two rebuilds | **Pass:** `diag`, `lastSeenHead` = `lastAnalyzedHead` = HEAD |
  | 3 | Three repeats, valid context (3 of the 20 allowed) | 0 null transitions |
  | 4a | Git not on `PATH` (synthetic) | **Exit 0; all three fields null, `stale: false`**, which is this entry's exact signature |
  | 4b | `GIT_DIR` misbound (synthetic) | **Exit 0; all three fields null, `stale: false`** |
  | 4c | Detached HEAD | `branchName` null by design; heads kept. Not the defect |
  | 5 | Valid rebuild after 4a's nulls | Repaired to HEAD |

- **Meaning.** The intermittent reset is any `hook-rebuild` run where git cannot be resolved from the tool's process.
  Examples are git not on `PATH`, a spawn failure in a sandboxed shell (Lane B saw a sandboxed Git spawn fail at
  `ccfe7d8`), or a misbound `GIT_DIR`. The next run with valid context silently repairs it, which is why it looked
  intermittent. **Limit:** this proves the mechanism and its triggers; which trigger hit the 2026-08-25 run is not
  recoverable.

**Not met by this unit (no repair was authorized):**
- "rebuilding cannot replace a non-null current record with null" still fails in the tool;
- no prevention predicate is installed.

**Draft repair proposal for a separate act:** a repository wrapper in Lane A tooling that **refuses before writing**.
It runs the same four `git rev-parse` queries in the same `cwd`/environment and does not invoke `hook-rebuild` if any
fails. As a second guard, it snapshots `branch.json` and restores it, failing the run, if a non-null record comes
back null.
- **Regression cases:** 4a and 4b must refuse and leave the record unchanged; case 2 must pass.
- **Paths, if selected:** a `scripts/` wrapper plus a fixture and a `sync-docs` §7 line. A fix upstream in the
  Graphify package is outside this repository.

B-050 stays `Applied`; its O1 row stays open pending Lane B's review of this result and any later act.


## Lane B independent diagnostic review — D-416 result, 2026-10-05

**Read:** `9839d9c1ed1d95e21d1625e0941076fb63f9be36`. Reviewed the pinned contract, `run.mjs`,
`RESULTS.json`, the raw case logs and saved `c4a-branch.json` in
`C:/CoWork/outputs/b050-null-reset-diagnostic-2026-10-05/`, and the installed CLI source.
The three installed-file hashes still match the harness pins. This is an independent source/evidence
review, not a new execution of the diagnostic or an independent reconstruction of the caller's past state.

**Accepted mechanism evidence.** In the pinned CLI, `resolveGitContext` catches failure of its required
Git-context queries and returns null. `refreshLifecycleMetadata` then writes both `worktree.json` and
`branch.json`; when `analyzed` is true, a null head is written beside `stale: false`. The saved case 4a
branch record and case 4a/4b raw rebuild logs agree with the result table: controlled missing Git and
misbound GIT_DIR yield exit 0 and null head fields. Valid-context controls and the recovery case support
this mechanism. Detached HEAD is a different case: the branch name is null by design while heads remain
valid. An absent upstream is likewise not, by itself, the null-head defect.

**Draft wording correction:** “The diagnostic reproduces a null-metadata write mechanism under two
controlled Git-context failures. It does not identify which failure affected the original August run,
nor establish that every Git-command failure has the same effect.” In particular, the four context
queries are followed by separate HEAD/branch lookups; a preflight cannot guarantee their later success.

**Contract deviations / evidence limits.**

| Pinned requirement | What the harness actually proves | Required follow-up |
|---|---|---|
| Stop at the first null transition and preserve that state | Case 4a records the first null transition and saves its branch record, but does not set the stop flag. The harness continues through fresh-clone cases 4b/4c and then rewrites clone-01 in case 5 | Lane A acknowledges this deviation. The Judge may accept the bounded mechanism evidence with this limit, or request a short conforming evidence run; do not call the entire contract followed |
| Before/after each run: full branch/state status/check-update and Git context records | RESULTS stores four selected branch fields and logs rebuild stdout/stderr; only case 4a's full branch record is saved. The prescribed per-run state-status/check-update/context bundle is absent | Name the missing records; do not backfill observations as if contemporaneous. A replacement run, if selected, writes the full bundle and stops |
| Caller unchanged | The operator's start/end aggregate hashes, HEAD/status/index-tree comparisons report unchanged; the preserved caller HEAD is a0795a8, before the result commit | Accept as recorded operator evidence. A verifier cannot freshly re-observe the old pre-run caller; the current graph hash independently still matches the D-416 candidate |
| Prevention / complete B-050 success | The negative cases still corrupt metadata. No prevention code or negative fixture was installed | B-050 remains Applied; the O1 row remains open |

These deviations do not erase the static path or synthetic counterexamples; they do preclude claiming
a fully compliant diagnostic transaction. No rerun or cleanup is performed by this review.

**Repair-plan challenge.** The proposed preflight plus branch-only restoration is insufficient for the
original “cannot replace” criterion: Git can fail between preflight and the tool's own lookups; restoration
occurs after a bad write; the tool also writes worktree metadata and graph/report files. Restoring only
branch.json can present an old analyzed head beside a different saved graph. A detached branch should
not be confused with a missing head, and optional upstream lookup failure should not be silently
promoted into a mandatory-context failure.

Lane A must specify either a guarded repository procedure with isolated candidate generation and
verified publication/recovery, explicitly scoped by the Judge, or a separate fix to the external writer.
A repository wrapper cannot claim that unwrapped Graphify calls are repaired. The exact draft unit,
write set, positive/negative acceptance cases and Judge scope choices are consolidated in B-154's
“D-416 completion review and prevention docket” continuation. No global-package edit is authorized.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | Static null-write mechanism and the two controlled counterexamples | Phase 1: preserve source/tool pins and distinguish mechanism from original incident attribution |
| Approve-with-conditions | Diagnostic result as a bounded completed evidence unit | Phase 1: disclose stop/log deviations; Judge accepts that qualification or selects replacement evidence |
| Defer | B-050 clearance/Verified, prevention implementation and B-077 final acceptance | Phase 1: separately selected repair scope and intended negative/positive proof |
| Reject | Full contract-compliance claim, all-Git-failures claim, branch-only restoration as pre-write prevention, or inferred original sandbox cause | Phase 1: apply the exact wording and evidence limits above |

## Lane A receipt of Lane B's diagnostic review — deviations recorded, 2026-10-05

Read at `6a1693d`. Lane A receives Lane B's review (`69860ea`) and accepts it in full.

**Corrected wording (replaces the "Meaning" claims above, which stay as dated history):** "The diagnostic reproduces a
null-metadata write mechanism under two controlled Git-context failures (git not on `PATH`; misbound `GIT_DIR`). It
does not identify which failure affected the original August run, nor establish that every Git-command failure has
the same effect." The sandbox spawn failure is a candidate trigger, not an attributed cause. A failed optional
upstream lookup, or a detached HEAD, is not the null-head defect.

**Deviations from the pinned contract**, recorded as observed. Nothing is backfilled:

| Pinned requirement | What the run did |
|---|---|
| Stop at the first null transition and preserve that state | **Not followed.** `run.mjs` set the stop flag only in case 3. After case 4a's null transition it saved `c4a-branch.json`, then went on to cases 4b and 4c, and case 5 rewrote `clone-01` |
| Before and after each run: full `branch.json`, `state status`, `check-update` and Git context | **Not followed.** `RESULTS.json` keeps four selected branch fields per run, plus raw rebuild stdout/stderr; only case 4a's full record is saved. No per-run `state status`, `check-update` or context bundle exists |
| Caller unchanged | Followed, as operator evidence (start and end at `a0795a8`) |

**So:** the mechanism evidence stands, with these limits. Full contract compliance is **not** claimed.

**The draft repair is withdrawn as written.** Lane B showed that a preflight followed by a `branch.json`-only
restore is not prevention:
- git can fail after the preflight passes;
- the restore happens after the bad write;
- the tool also writes the worktree metadata and the graph.

Any prevention proposal now follows Lane B's bounded contract in B-154 (`6a1693d`). It waits for the Judge's
evidence and scope choices. B-050 stays `Applied` and its O1 row stays open.

## Judge's choices on the diagnostic evidence and prevention scope, 2026-10-05

In chat to Lane A, on Lane B's docket (B-154 `6a1693d`), to be registered in the next governed act:
- **A: a conforming re-run is required.** It runs under `D-416` item 7 and the contract pinned above, unchanged. It
  stops at the first null transition and preserves that clone and state. Every rebuild gets the full before/after
  bundle: `branch.json` and `worktree.json` copies, `state status`, `check-update`, and the Git context in the
  run's own environment. Evidence: `C:/CoWork/outputs/b050-null-reset-diagnostic-2026-10-05/rerun-2/`. The first run
  stays as history, with its recorded deviations.
- **B: prevention scope is a repository procedure.** Lane A drafts the exact bounded contract from Lane B's
  specification (`6a1693d`): isolated candidate, validated promotion and full-state recovery, and the named failure
  cases. B-050's universal criterion is narrowed to that procedure only by a named act. The raw external-tool defect
  stays visible. Executing the repair needs its own work order.

B-050 stays `Applied`.

## Conforming re-run — result, 2026-10-05 (Judge choice A)

Run under the pinned contract, unchanged; read at `c596d0e`. Evidence:
`C:/CoWork/outputs/b050-null-reset-diagnostic-2026-10-05/rerun-2/` (`run2.mjs`, `RESULTS.json`, and per-rebuild folders
`01`–`06`, each with `before/` and `after/` bundles: `branch.json`, `worktree.json`, `state-status.txt`,
`check-update.txt`, and `git-context-run-env.json` in the rebuild's own environment). The pins matched. There were 6
rebuilds in 3.7 minutes, and **every caller invariant held**: HEAD, status and index tree, and the live `.graphify`
hash.

| # | Case | Result |
|---|---|---|
| 1–2 | Positive control, valid context | **Pass:** `diag`; `lastSeenHead` = `lastAnalyzedHead` = `1c9d59e` |
| 3–5 | Repeats, valid context | 0 null transitions |
| 6 | Git not on `PATH` (synthetic) | Git context `ENOENT` for every query. Rebuild **exit 0**; `branch.json` all three fields null with `stale: false`, and `worktree.json` `gitDir`/`lastSeenHead`/`lastAnalyzedHead` null. **First null transition: stopped here** |

**Conformance.**
- The run stopped at the first null transition. `clone-01` and its `.graphify` are preserved: the saved after-copy and
  the live clone file are identical, down to `updatedAt`.
- Case `4b` (misbound `GIT_DIR`) was not run, because the stop rule ended the run. Its result stands only from run 1,
  with that run's recorded deviations.

**Disclosed limits.**
- On a fresh clone, the first bundle's `state status`/`check-update` created an initial never-analyzed record before
  rebuild 1. Rebuild 1's "before" reflects that, not a prior analysis.
- `check-update` and `state status`, run in the normal environment, are read-side calls. After rebuild 6 they did not
  alter the null record. **`check-update` does not report the null heads; it reports only pending semantics.** It cannot
  serve as the detector; the `docs-drift` G97 branch remains the detector.

**Outcome: reproduced mechanism, conforming.** The scope is unchanged: two controlled context failures. The original
August trigger is not attributed. B-050 stays `Applied`; prevention follows Judge choice B.

## Draft prevention contract — repository procedure (Judge choice B; `D-417` item 4), 2026-10-05

**A draft for Lane B's review and a later work order. Nothing here is built.** It follows Lane B's specification in
B-154 (`6a1693d`). Its protection boundary: it protects **only** the guarded procedure below. A raw
`graphify hook-rebuild` still reproduces the null write, and that external defect stays recorded.

**Proposed write set:**
- `scripts/graphify/guarded-rebuild.mjs` — the procedure;
- `scripts/fixtures/graphify-guard.test.mjs` — the cases;
- `.claude/skills/sync-docs/SKILL.md` §7 and `docs/graph-fragments/README.md` §5 — invoke the guarded procedure in
  place of the raw rebuild.

No dependency or build-config change. More paths mean a revised proposal before execution.

**Procedure:**
1. **Pin and check context.** Pin the tool (`@sentropic/graphify` 0.17.1 and its three `dist/` hashes), the source
   commit and the expected repository root.
   - **Mandatory:** `HEAD`, `--show-toplevel`, `--absolute-git-dir` and `--git-common-dir` resolve, and the root
     matches.
   - **Branch mode:** a named branch is required; a detached HEAD is refused, as a declared mode and not as the
     reset.
   - **Optional:** a missing upstream is recorded and is not a failure.
   - The released state root is resolved through the `.graphify` link. A candidate root that resolves to it, or
     inside it, is refused.
   - This preflight is an early refusal only, not the protection.
2. **Build the candidate in isolation.** Copy the released state to a disposable candidate root. Run the rebuild
   there against a disposable clone at the pinned commit. Then restore the docs layer, the ordered curated merge,
   `fill-missing`, the description replay and the label procedure (D-409/D-410), all in the candidate. Failure
   evidence is preserved, and the released state is never touched in this step.
3. **Validate the candidate, which is the protection.** The candidate must show all of these, or it is rejected:
   - `branch.json` and `worktree.json` heads non-null, equal to the pinned commit, and `stale: false`;
   - `branchName` equal to the expected branch;
   - 139/139 fragment parity;
   - `check-update` current, or its semantic bound stated;
   - member and label binding.

   A Git failure **inside** the tool after the preflight passed yields nulls in the candidate, which this rule
   rejects.
4. **Rebind and promote, or keep the old state.** The clone's identity is not carried over: `worktreePath`, `gitDir`
   and `commonGitDir` are rewritten to the caller's resolved values and re-validated.
   - Recheck the caller's HEAD and root, then take a lock file in the state parent; a held lock refuses a concurrent
     run.
   - Back up the released state with a hash manifest, then swap the full state (graph, report, `branch.json`,
     `worktree.json`) by directory rename, with no partial copy.
   - Re-hash after promotion. Any failure restores the full backup and fails the run, and is never reported as
     healthy.
   - Release still needs Lane B's independent review (D-409/D-410).
5. **DoD.** Lane B's independent proof that the selected procedure protects, through the cases below. Then a
   source-specific B-050 disposition under this scope, by a named act. No passing case closes the universal
   criterion.

**Cases** (each injection labelled synthetic; before/after state hashes and the full context bundle for every case):

| Case | Required result |
|---|---|
| Valid context at the pinned commit | Candidate valid, promoted, heads bound, parity 139/139 |
| Git absent, or `GIT_DIR` misbound, at preflight | Refused before the candidate; released hashes unchanged |
| Git fails only inside the tool, after the preflight passed (synthetic shim on the child's `PATH`) | Candidate rejected at step 3; released hashes unchanged; no healthy report |
| Wrong HEAD or root, or a candidate root aliasing released state | Refused before any mutation |
| Detached HEAD; no upstream | Detached: refused as a declared mode. No upstream: proceeds, recorded |
| Promotion fails mid-swap (synthetic); lock held | Full backup restored and the run fails; a held lock refuses |
| Valid run after a refused run | Reaches the success route without relying on earlier cleanup |

B-050 stays `Applied` and its O1 row stays open.

## Lane B independent D-417 review — rerun evidence and prevention-contract fixes, 2026-10-05

**Read:** `cce7837e2c226565ee99f74114fed06c4546dd4c`; rerun result `d91e748`, draft contract
`6e73937`. Lane B is the raiser/reviewer; Lane A answers this continuation. No diagnostic or repair
was executed by this review, and the receiver's answer/header is unchanged.

**Rerun accepted within its diagnostic scope.** Reviewed `rerun-2/run2.mjs`, RESULTS and the six
before/after evidence bundles under `C:/CoWork/outputs/b050-null-reset-diagnostic-2026-10-05/`.
The three installed CLI-file hashes match the pins. Five valid-context rebuilds precede the sixth,
synthetic missing-Git run. That run records ENOENT context queries, exit 0 and null heads in both
metadata files with branch `stale: false`; the loop breaks and runs no subsequent rebuild.
The saved final branch/worktree files are byte-identical to the preserved clone files:
SHA-256 `8ebf6bc7a516f8cb2405424f7f133dd293594fb9dea657ba3f453d1bcb298af9`
and `9253b9634634a780e3c0161dfe245611353628fbcbbea1f219b247786e91e67c`, respectively.
Caller invariants remain operator start/end evidence, not a new observation of past caller state.

**Evidence wording to normalize:** the first saved before-file contains `MISSING: ENOENT`; the
observer calls then initialize the never-analyzed metadata reflected in RESULTS.before. These are
two successive observations, not one identical snapshot. State-status/check-update use the normal
observer environment; the separate Git-context bundle uses the injected rebuild environment.
The preserved sixth after-record proves that those observer calls did not repair that null state.
Accept this disclosed observation order; do not claim all bundle calls used the injected environment.
The rerun proves one controlled trigger; misbound GIT_DIR remains run-1 evidence with its recorded
limits. Original August incident attribution and prevention remain unproved. No further rerun is
required merely to repeat the evidence accepted here.

**Contract verdict: Approve-with-conditions for drafting; not ready for a repair work order.**
The four proposed paths remain the exact boundary. Retain isolation, full-state recovery, synthetic
injections and procedure-only protection. Lane A should replace the ambiguous parts as follows.

| ID | Gap / failure exposed | Draft replacement requirement and proof |
|---|---|---|
| PC1 | A caller recheck before acquiring the lock cannot bind publication after waiting; two guarded runs can build from different baselines | Acquire an exclusive, ownership-bound lock before final rechecks. Under it, re-resolve caller root, Git/common-Git directories, branch and source commit; compare the released-state manifest with the baseline used for candidate generation. A mismatch refuses publication and preserves both states. Recheck immediately before publication; define how source changes during that boundary are detected and refused. Test a second writer and a source change between candidate generation and publication |
| PC2 | Directory rename is atomic per operation, not an atomic two-rename transaction. Termination after moving old state can leave the live path absent; a catch block cannot run after process termination | Specify a same-volume swap sequence, recoverable transaction marker and hash-bound backup outside the rename target. Include the entire existing state directory and exact file inventory, not only four named files. On restart, detect incomplete swaps before reporting health; recover only from a verified full backup. A failed restore retains backup/candidate/evidence and refuses health. Define owned/stale-lock handling; do not steal an unexplained lock. Test failure and termination at each swap boundary and a failed restore |
| PC3 | Rebinding only paths can leave clone branch/upstream/merge-base or other runtime identities beside caller metadata | Declare a field-by-field policy for branch.json and worktree.json: caller paths/Git directories/branch and caller-derived upstream/merge-base; analyzed/seen heads remain the actual analyzed source revision, never fabricated current HEAD. Preserve or explicitly reset historical firstSeen/created fields with provenance. Enumerate other clone-bound files in the copied state and the retain/rebind/exclude rule. Optional upstream absence is valid. In schema 1, stale is a branch field; worktree.json has no stale field. Prove no disposable identity is presented as caller identity |
| PC4 | `check-update current, or its semantic bound stated` is too broad to decide release; 139 is today's baseline, not a durable validator | Require the pinned source's complete fragment inventory, with every declared node and edge field equal, plus saved graph/member/name bindings. Record pending semantic work explicitly and require the D-409/D-410 review's named accepted limits before healthy release. The current baseline is 139 fragments and two inherited undescribed commits; a later source inventory must be derived afresh. Wrong-member/same-count and wrong-edge-field cases must fail |
| PC5 | Promotion and independent release review are ordered ambiguously; a reviewed pre-rebind hash is not the final artifact's hash | Separate prepared candidate, independent acceptance and released state. Complete rebinding first; obtain independent review of that exact final graph, metadata and full-state manifest; publish only those reviewed bytes after PC1 rechecks. If context forces regeneration or rebinding, invalidate that review and resubmit. Preserve the graph SHA and full-state manifest separately. A valid run must demonstrate the review-bound success route; a pending/rejected candidate must not be reported released |

**Containment clarification for steps 1–2:** resolve real paths and reject candidate/backup/evidence
locations that alias, contain, or sit inside the live target; validate the disposable checkout and
its state binding before any child write. Copying existing state must not leave the clone bound to
the live root. Keep the repository's `.graphify` link intact and define promotion at its resolved
target. If actual Windows rename/recovery constraints require more paths, revise the bounded
proposal before execution. The lock protects cooperating guarded invocations; it does not repair
or silently serialize raw external writes. Document that boundary and reject unexpected baseline
changes. The external tool remains defective.

**Acceptance matrix completion:** expand the seven existing case families rather than create a new
test ledger. Each negative case must reach its intended failure boundary, preserve the relevant
full-state manifest/evidence and produce a failing/non-release result. Include post-preflight Git
failure, both alias directions, changed source/baseline, concurrent and stale lock, interrupted swap,
failed restore, and same-count wrong membership/edge metadata. A valid run after each recoverable
failure must succeed through the reviewed publication route. Crash/recovery is a separate assertion
from ordinary exception rollback. Nothing here is a software test already passed.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | Rerun's bounded mechanism evidence and stop/preservation correction | Phase 1: retain observer-order and historical-cause limits above |
| Approve-with-conditions | Repository-procedure prevention contract | Phase 1: Lane A answers PC1–PC5 and containment, then presents the exact revised unit for a Judge work order |
| Defer | Repair execution, independent prevention proof, B-050 source disposition/clearance and B-077 final review | Phase 1: separate bounded act and source-specific review; no code now |
| Reject | Raw-tool repair, universal prevention, first-bundle copies as the initialized record, two renames as a crash-atomic transaction, or publication based on an obsolete review hash | Phase 1: apply the explicit draft replacements above |

## Lane A answer to PC1–PC5, plus PC6 — revised prevention contract, 2026-10-05

Read at `7deb459`. Lane A receives Lane B's review (`0fc8a94`) and accepts it in full. The re-run evidence stands with
the observer-order limits Lane B stated: the first before-file was `MISSING: ENOENT`, then the observer calls
initialized it; observer calls used the normal environment and Git-context capture used the injected one. **This
revision replaces the `6e73937` draft's procedure. It is a contract, not a build.** It protects only cooperating
guarded invocations: the lock does not serialize raw Graphify writes, and the raw tool stays defective.

**Live layout read for this revision.** The repository's `.graphify` is a link to `C:/CoWork/myeditorialapp/.graphify`.
Promotion acts on that resolved target, and the link is never changed. The state directory has 557 files: graph and
report; `.graphify_analysis`/`_detect`/`_labels`/`_runtime` JSON; `branch.json`, `worktree.json`; `cache/ast`,
`cache/semantic`, `cache/stat-index.json`; dated `20*/`, `.hint-*/` and `backup-*/` history; and the instruction
folders. The graph and `.graphify_analysis.json` embed repository identity, and 49 cache files embed absolute paths.

**PC6 (new, found by Lane A): repository identity.** A plain clone's `origin` is a local path, so commit node ids become
`commit:repo:C/robertaoai/…` instead of `commit:repo:github.com/robertaoai/…`. It also carries fewer refs: the
diagnostic clone had 210 commit nodes against the live graph's 860. A candidate built that way cannot keep the released
identities, descriptions or member sets.
- **Requirement:** set the disposable checkout's `origin` URL to the caller's `origin` URL. Fetch the caller's full
  ref set into it (`refs/heads`, `refs/remotes`, `refs/tags` and any other analyzed namespace). Check out the caller's
  branch name at the pinned commit.
- **Validation:** the candidate's repository-identity prefix and its commit/branch node-id set must equal the
  identities expected from the caller's refs at the pinned commit.
- **Failing case:** a local-path origin, or a missing ref namespace, must fail.

**Containment (steps 1–2).**
- Resolve real paths. Refuse any candidate, backup, transaction or evidence path that aliases the live target,
  contains it, or sits inside it.
- The disposable checkout and its own state root are validated before any child write. The candidate's `.graphify`
  is a real directory inside the disposable root, never a link to the live state.
- Copying the released state into the candidate copies bytes only; the PC3 policy rebinds identities later.

**PC1 — lock, then recheck, then publish.**
- Lock: an exclusive `C:/CoWork/myeditorialapp/.graphify.lock`, created with exclusive create. It holds the run id,
  process id, host, start time and baseline manifest hash.
- Under the lock, re-resolve the caller root, `gitDir`, `commonGitDir`, branch and HEAD, and require HEAD equal to
  the pinned source commit. Recompute the released-state manifest and require it equal to the baseline the candidate
  was built from.
- Repeat both checks immediately before the publication rename. Any mismatch refuses publication and keeps both
  states.
- A changed source or baseline invalidates the candidate. Regeneration needs a new review (PC5).
- **Stale lock:** treated as stale only when its process is not alive on this host **and** no transaction journal
  exists. Otherwise refuse; never steal it.
- **Cases:** a second guarded writer; a source commit change, and a released-state change, between generation and
  publication.

**PC2 — recoverable swap, not a claimed atomic transaction.** Everything happens on the same volume, inside
`C:/CoWork/myeditorialapp/` and outside the target:
1. a full backup `.graphify-bak-<run>`, with its hash manifest verified against live;
2. staging `.graphify-new-<run>`, a copy of the **reviewed** bytes, verified against the reviewed full-state manifest;
3. journal `.graphify-txn.json` = `prepared`;
4. rename live to `.graphify-old-<run>`; journal = `old-moved`;
5. rename new to live; journal = `new-in-place`;
6. re-hash live against the reviewed manifest; journal = `verified`; the journal is removed only after the release
   receipt.

**Recovery** runs first on every guarded invocation:
- a journal before `verified`, or a missing live path, means an incomplete swap;
- restore only from the verified full backup, or from the `old` directory once its manifest equals the backup's;
- a failed restore keeps the backup, candidate, old state and evidence, and refuses health.

Windows sharing violations (an open file blocking a rename) refuse at step 4 or 5 and recover.

**Boundary revision required:** the health check must refuse while a journal exists. That needs a fifth path,
`scripts/checks/docs-drift.mjs` (journal presence fails). Lane A asks for it explicitly instead of assuming it.

**Cases:**
- termination after each of steps 3, 4 and 5 (synthetic kill);
- a rename refused;
- a failed restore;
- a stale lock and a live lock.

Crash recovery is asserted separately from exception rollback.

**PC3 — field policy.** There is no stale field in `worktree.json` (schema 1).

| File / field | Rule |
|---|---|
| `branch.json` `branchName`, `worktreePath` | The caller's values; the branch must equal the candidate's branch |
| `branch.json` `upstream`, `mergeBase` | Resolved in the caller. A missing upstream is valid and recorded as null |
| `branch.json` `lastSeenHead`, `lastAnalyzedHead` | The analyzed source commit (= the pinned commit = the caller's HEAD under PC1). Never a fabricated current HEAD |
| `branch.json` `firstSeenHead`, `createdAt` | Retained from the caller's released record (provenance) |
| `branch.json` `stale`/`staleReason`/`staleSince`/`lifecycleEvent` | `false`/null/null/null; `updatedAt` = publication time |
| `worktree.json` `worktreePath`, `gitDir`, `commonGitDir` | The caller's values; `firstSeenHead`/`createdAt` retained; heads as in `branch.json` |
| `graph.json`, `GRAPH_REPORT.md`, `.graphify_analysis.json`, `.graphify_labels.json`, `.graphify_detect.json` | Promoted from the candidate after PC6 identity validation; **not rewritten** |
| `cache/`, `.graphify_runtime.json`, dated `20*/`, `.hint-*/`, `backup-*/` | Retained from the caller; the candidate's copies are excluded (the cache embeds disposable absolute paths) |
| Instruction folders (`description-instructions/`, `label-instructions/`) | Promoted from the candidate (they record its procedure) |
| Any top-level entry not in this table | **Refuse:** the inventory is re-derived at the pinned revision before each run |

**Proof:** the published state contains no disposable path, origin or identity. A test asserts no occurrence of the
disposable root's path in any promoted file.

**PC4 — validation.** The fragment inventory is derived afresh from `docs/graph-fragments/` at the pinned source, not
fixed at 139. The candidate must meet all of these:
- every declared node and edge field equal for every fragment;
- PC6 identity equality;
- saved member, name and label binding;
- non-null heads per PC3.

Pending semantic work is recorded explicitly, and healthy release requires the D-409/D-410 reviewer's named accepted
limits (today: two inherited undescribed commits). **Failing cases:** a same-count wrong member; a wrong edge field; a
missing fragment node.

**PC5 — order.**
1. A prepared candidate.
2. Rebinding (PC3).
3. Final graph SHA plus full-state manifest.
4. Independent review of **those exact bytes**.
5. Publication of those bytes only, after the PC1 rechecks.
6. A post-publication manifest equal to the reviewed one.
7. A release receipt.

Any regeneration or rebinding after review invalidates the review and is resubmitted. A pending or rejected candidate
is never reported as released. A valid run must show this review-bound route end to end.

**Expanded case families** (each injection labelled synthetic, with before/after full-state manifests and the context
bundle; a negative case must reach its intended boundary and produce a non-release result):
- valid run;
- preflight Git failure (absent, misbound);
- post-preflight in-tool Git failure;
- both alias directions;
- wrong HEAD or root;
- source change and baseline change (PC1);
- concurrent lock and stale lock;
- termination at each swap step, and a failed restore (PC2);
- foreign identity in a promoted file (PC3);
- local-path origin or missing refs (PC6);
- same-count wrong member and wrong edge field (PC4);
- detached HEAD (refused by mode) and no upstream (proceeds);
- a valid run after each recoverable failure.

**Write boundary for the work order:** the four proposed paths plus `scripts/checks/docs-drift.mjs` (PC2). Executing
any of it needs a separate Judge work order after Lane B reviews this revision. B-050 stays `Applied`; its O1 row stays
open.

## Lane B review of revised PC1–PC6 — bounded corrections before the work order, 2026-10-05

**Read:** `6d6c53448fb7785744529a80a8d7b061037c811f`, contract `42f1881`. Lane B raises;
Lane A answers. The revised isolation, field policy, complete-field parity, review-before-publication
and explicit procedure-only boundary are accepted as design directions. This is a document/source
review, not execution or verification of an implemented guard.

**PC6 finding accepted, proposed remedy conditional.** The saved diagnostic graph has 210 commit
nodes with the local-origin repository identity; the live D-417 graph has 860 with the GitHub
identity. Installed CLI `repoKey` derives identity from origin; `discoverBranches` selects current,
default and recently active local branches, and `revList` applies a per-branch count/time policy.
Thus origin correction is necessary, but copying refs alone is not a proof of equal extraction.
These graphs also represent different revisions; the count difference is an observation, not a
controlled proof that missing refs explain every omitted commit. No new extraction is run here.

The following five corrections finish the draft requirements; they refine existing PC1–PC6 and
their cases, without adding a seventh obligation or a second test ledger.

| Fix / existing PC | Concrete failure or uncertainty | Replacement contract and success criterion |
|---|---|---|
| R1 / PC3 inventory | The allowlist omits existing `agents/`, `ontology/`, `studio/`, `cost.json`, `d22-d28-fragment.json`, `manifest.json`, `missing-desc.json` and `scope.json`. Its unknown-entry refusal therefore rejects today's otherwise valid state | Attach a recursively derived path inventory to the candidate manifest and give every observed file a promote/retain/rebind/refuse policy. Classify the omitted artifacts from their actual consumers before choosing that policy: `scope.json` records analyzed source; `manifest.json` contains absolute cache paths; studio/agent/ontology artifacts cannot be guessed equivalent. Preserve historical artifacts with provenance where appropriate. Unknown *new* entries refuse without deletion. Prove every file is classified and final state has no disposable identity; do not hard-code 557 or equate a top-level category list with a complete inventory |
| R2 / PC3 and PC5 immutable bytes | `updatedAt = publication time` conflicts with reviewing exact final bytes beforehand. Changing it at publication guarantees a full-state hash mismatch | Set preparation/rebinding timestamps before computing the reviewed manifest; freeze every promoted byte thereafter. Record actual publication time, run identity, reviewer acceptance and receipt separately outside the target. Any timestamp/metadata change requires a new manifest and review. The final composed state, including caller-retained files and instructions, must equal the reviewed manifest; a valid case must pass this comparison |
| R3 / PC1–PC2 recovery ownership | Recovery runs first, but no exclusive recovery ownership is specified. A dead owner's lock plus a journal fails the stated stale-lock rule; recovering without exclusion can race a still-live publisher. Journal write durability and corrupt/missing-journal handling are unspecified | Distinguish active publication, proven-dead recovery and unresolved ownership. A live owner is refused without recovery. For a proven-dead owner, specify an exclusive recovery transition tied to the original run token and verified backup, without stealing a live/unknown lock; otherwise return an explicit recovery-required result. Bind journal to canonical target, run, source, manifests and backup/staging/old paths. Make journal updates durable and replace them safely; infer only verified recoverable states after a crash between rename and journal update. Corrupt/unreadable journal or unexplained missing target fails closed and preserves evidence. Test a live-owner restart, dead-owner-with-journal, malformed journal, termination around each rename/journal update and failed restoration |
| R4 / PC6 and PC1 reproducible identity | HEAD alone does not freeze origin, other branch tips, default symbolic ref, branch-selection clock, extraction options or uncommitted source. Ref changes at unchanged HEAD can alter the graph | Capture origin identity, analyzed namespaces, ref names/types/object IDs and symbolic targets, source cleanliness/content binding, tool pins and branch/count/time options. Copy from the local captured source into the disposable checkout with explicit namespace mapping; do not fetch changing GitHub refs to stand in for the caller snapshot. Remove clone-created extra refs from analyzed namespaces and verify the resulting map. Derive expected commit/branch IDs using the pinned tool's actual selection rules, not every copied ref or the old released node count. Compare the snapshot again under PC1 before and after publication; mismatch refuses/recovers without a healthy release. Pin branch selection or explicitly account for the time cutoff; tests cover a changed non-HEAD ref, wrong origin, missing/extra analyzed ref and dirty governed source |
| R5 / fifth checker path | Existing docs-drift returns SKIPPED immediately when branch.json is absent; that is exactly possible between the two renames. A journal check inserted after that branch would miss the interrupted swap | Test the transaction marker before the absent-branch and Git-unavailable skip paths, using the resolved target's parent even when its final component is absent. Journal present, unreadable or malformed means a finding/non-health result. Preserve fresh-checkout/CI skip only for the explicitly documented no-local-state/no-transaction case. Define journal removal after a durable release receipt; until removal this checker stays non-green, even at journal stage verified. Test the missing-live-path/journal case against the actual checker, plus ordinary local success and CI skip |

**Review and recovery boundaries:** a retained caller file is part of the final reviewed composition;
do not silently copy a changed caller cache after review. A lock coordinates guarded state writers,
not Git users or raw Graphify. Snapshot comparisons detect those changes; they do not promise global
serialization. This guard's recovery promise must state which interrupted states it automatically
recovers and which require an evidenced manual recovery step. Neither an unreadable journal nor a
dead lock may be silently called healthy or silently deleted. Abrupt process termination and
power-loss durability are different claims; prove only the explicitly selected boundary.

**Five-path boundary reviewed as necessary for the proposal:**
`scripts/graphify/guarded-rebuild.mjs`, `scripts/fixtures/graphify-guard.test.mjs`,
`.claude/skills/sync-docs/SKILL.md` §7, `docs/graph-fragments/README.md` §5, and
`scripts/checks/docs-drift.mjs`. These are all Lane A surfaces. The fifth path is justified by R5;
it is proposed, not authorized by this review. Keep journal/evidence/receipt state outside the live
target as runtime artifacts. A further repository path needs an explicitly revised bounded proposal.

**Judge-ready work-order condition:** Lane A supplies one consolidated contract incorporating
R1–R5, the complete classification manifest, the exact recovery state transitions, selected crash
boundary and expanded existing acceptance matrix. Independent review then determines readiness;
the Judge's Register act names the five paths, exclusions, tests and DoD before any build. No need
to reselect the already recorded repository-procedure scope or rerun accepted diagnostic evidence.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | PC6 identity finding; corrected PC1–PC5 design directions; fifth-path necessity | Phase 1: preserve observation limits and the explicit five-path proposal |
| Approve-with-conditions | Revised prevention contract | Phase 1: Lane A incorporates R1–R5 into one complete contract; independent review precedes work-order readiness |
| Defer | Repair execution, independent proof and B-050 source disposition/clearance | Phase 1: separate bounded Judge act and intended positive/negative evidence |
| Reject | Complete-inventory claim, publication-time mutation of reviewed bytes, refs-only equality proof, unowned recovery or SKIPPED health during a transaction | Phase 1: apply the replacement criteria above |

## Consolidated prevention contract v3 — current, 2026-10-05 (answers R1–R5)

Read at `aebad9e`. Lane A receives Lane B's review (`0da9001`) and consolidation (`aebad9e`), and accepts R1–R5.
**This section is the one current contract.** The `6e73937` and `42f1881` procedures are history. It is not
built. It protects only cooperating guarded invocations: raw Graphify stays defective, and the lock does not
serialize Git users or raw tool runs.

**Judge act, 2026-10-05, in chat to Lane A:** *"Judge Approved: add docs-drift.mjs as fifth path"*. The proposed
write boundary is:
1. `scripts/graphify/guarded-rebuild.mjs`
2. `scripts/fixtures/graphify-guard.test.mjs`
3. `.claude/skills/sync-docs/SKILL.md` §7
4. `docs/graph-fragments/README.md` §5
5. `scripts/checks/docs-drift.mjs`

This approves the boundary only. Execution still needs the Register work order naming paths, exclusions, tests and
DoD, after Lane B's readiness review. Journal, lock, backup, staging and evidence files are runtime artifacts outside
the live target.

### R1 — complete state classification (supersedes the PC3 file table)

Evidence: `C:/CoWork/outputs/b050-prevention-contract-2026-10-05/` (`classify.mjs`, `state-classification.json`
SHA-256 `551c8d70…`). It is read-only over the live state.
- **Result:** 557/557 files classified, 0 unclassified, 0 matching more than one rule: 18 promote, 2 rebind, 537
  retain.
- **Foreign absolute paths:** none in any promoted file. The detector self-tests JSON-escaped and plain Windows paths
  and URLs.

| Policy | Paths | Basis (observed consumer or role) |
|---|---|---|
| rebind | `branch.json`, `worktree.json` | Lifecycle records; the R2 field policy below |
| promote | `graph.json`, `GRAPH_REPORT.md`, `.graphify_analysis.json`, `.graphify_detect.json`, `.graphify_labels.json`, `scope.json` | Rewritten by every rebuild; `scope.json` binds the analyzed `head` and file counts |
| promote | `studio/**`, `ontology/**` | Derived from the graph at each sync; must contain no disposable path |
| promote, must be empty | `description-instructions/**`, `label-instructions/**` | Empty after ingest. Any file means pending semantics: refuse |
| retain (caller copy) | `manifest.json` | Incremental source index with absolute paths (historical `C:/git/…` keys). Equivalence is not assumed: the valid-run case must show a following guarded run is idempotent with it retained |
| retain (caller copy) | `cache/**` | Acceleration cache; embeds absolute paths |
| retain, with provenance | `agents/**`, `cost.json`, `d22-d28-fragment.json`, `missing-desc.json`, `.graphify_runtime.json` | Operator or historical artifacts not written by a rebuild |
| retain | `20*/`, `.hint-*/`, `backup-*/` | Dated history |

**Each run** re-derives the inventory recursively and attaches it to the candidate manifest. A **new** unclassified
path refuses publication without deleting anything. No count is hard-coded.

### R2 — reviewed bytes are immutable

- Rebinding sets `updatedAt` (both files) to the **preparation time**, before the reviewed manifest is computed.
- The composed final state (promoted, rebound and caller-retained files together) is hashed as one full-state
  manifest, plus the graph SHA-256. The reviewer accepts that manifest.
- Publication changes no byte. Publication time, run id, reviewer acceptance and receipt are recorded outside the
  target.
- A caller-retained file that changes after review (for example the cache) invalidates the review.
- After publication, the live manifest must equal the reviewed one; a valid case proves this.

**Field policy:**

| File / field | Rule |
|---|---|
| `branch.json` `branchName`, `worktreePath` | The caller's branch name and root |
| `branch.json` `upstream`, `mergeBase` | Resolved in the caller; null upstream is valid |
| `branch.json` `lastSeenHead`, `lastAnalyzedHead` | The analyzed source commit |
| `branch.json` `firstSeenHead`, `createdAt` | Kept from the caller's record |
| `branch.json` `stale` | `false`, with the reason fields null (`stale` is a branch field only) |
| `worktree.json` | Caller paths and Git directories; heads as above; `firstSeenHead`/`createdAt` kept |

### R3 — owned, durable recovery

- **Selected boundary:** abrupt process termination. **Power-loss durability is not claimed.**
- **Journal:** `C:/CoWork/myeditorialapp/.graphify-txn.json`. It is bound to the canonical target, run token,
  source commit, reviewed and backup manifests, and the backup, staging and old paths. Each update is written to a
  temporary file, flushed, then renamed into place.
- **Lock:** `.graphify.lock`, exclusive create, holding the run token, process id, host and start time.

| Observed state on start | Transition |
|---|---|
| No lock, no journal | Proceed |
| Lock held by a live process | Refuse; no recovery |
| Lock owner proven dead on this host, journal present and valid | Take the exclusive recovery token (atomic replace of the lock, bound to the journal's run token), then recover by journal stage |
| Lock owner dead or unknown, no journal | Recovery-required result; never stolen silently |
| Journal `prepared` | Live untouched: remove staging, keep the backup |
| Journal `old-moved`, live path absent | Rename `old` back after its manifest equals the backup's |
| Journal `new-in-place` | Live manifest equals reviewed: mark `verified`. Otherwise restore the verified backup |
| Crash between a rename and its journal update | Infer the stage only from verified manifests of the live, old and staging paths. Otherwise recovery-required |
| Journal corrupt or unreadable, or the target missing without a journal | Fail closed. Preserve everything; manual recovery with evidence |
| Restore failure | Keep the backup, old, staging and evidence; non-health |

### R4 — reproducible source and identity snapshot (with PC6)

The pinned CLI derives identity from `git remote get-url origin` (`repoKey`). It selects branches from local
`refs/heads` only: the default branch, plus the current branch, plus heads whose commit date is within the
`activeWithinDays` cutoff measured from `Date.now()` (`discoverBranches`). Each branch is capped at `maxCommits` and
any `sinceDays` (`revList`).
- **Capture under the lock:** origin URL; every `refs/heads`, `refs/remotes` and `refs/tags` name, type, object id
  and symbolic target (including `origin/HEAD`); the default-branch resolution; working-tree cleanliness of
  governed sources; tool pins; option values; and the run clock.
- **Build the checkout** from the **local** captured snapshot: set `origin` to the captured URL, then write exactly
  the captured ref map (`update-ref`/`symbolic-ref`). No GitHub fetch. Clone-created extra refs in analyzed
  namespaces are removed, and the ref map is verified equal.
- **Expected selection:** derived by applying those rules to the snapshot at the recorded clock. The candidate's
  branch and commit node-id sets must equal it. The old released count is not the criterion.
- **Re-verify under the lock** after review, before publication and after it. Any mismatch refuses or recovers;
  nothing is reported healthy.
- **A dirty governed source** refuses.

### R5 — checker order (`docs-drift.mjs`)

- The transaction check runs **first**, before the "`branch.json` absent" and "git unavailable" skips. It resolves the
  `.graphify` link's target parent even when the final component is missing.
- A journal present, unreadable or malformed is a **finding**, at every stage including `verified`. The journal is
  removed only after the durable release receipt.
- The existing CI/fresh-checkout skip stays only for the documented no-local-state, no-journal case.

### Acceptance matrix

This expands the existing families; it is not a new ledger. Each case lists its injected boundary (labelled
synthetic), before/after full-state manifests and context bundle, and the expected non-release or success result.
**Success:**
- a valid review-bound run, with an idempotent follow-up run while `manifest.json` is retained;
- a valid run after each recoverable failure.

**Refusals and recovery:**
- preflight Git absent or misbound;
- in-tool Git failure after preflight;
- both alias directions;
- wrong HEAD or root;
- a changed non-HEAD ref, wrong origin, a missing or extra analyzed ref, and a dirty source (R4);
- a changed baseline;
- a live lock, a dead owner with a journal, and a dead or unknown owner without a journal;
- termination around each rename and journal update;
- a malformed journal, and a failed restore (R3);
- a new unclassified path, and a foreign path in a promoted file (R1);
- a review invalidated by a changed retained file (R2);
- a same-count wrong member, and a wrong edge field;
- detached HEAD (refused by mode), and no upstream (proceeds);
- the checker: journal with a missing live path, ordinary local success, and CI skip (R5).

**DoD:** Lane B independently proves each case, then a source-specific B-050 disposition is made under the selected
scope by a named act. No universal criterion closes by implication. B-050 stays `Applied`; its O1 row stays open.

## Lane B v3 readiness review — accepted evidence and exact completion text, 2026-10-05

**Read:** `789610bd1f6b1c5a1329a388218c749d63bc0df3`; current contract `d8330f5`.
Lane B raises this review; Lane A owns the answer. The recorded Judge approval of the fifth path
is received as boundary approval; do not request it again. A repair work order is still separate.

**Accepted evidence.** Independently enumerated and hashed the live files against
`state-classification.json`: 557 paths, no duplicates, omissions, extra paths or hash mismatches;
18 promote, 2 rebind and 537 retain. Manifest SHA-256:
`551c8d70e1cfb4679d3688dcbaee2994da3be69cbde27760441bfbac738f3a08`.
This proves the observed inventory/classification record, not the safety of a future generated
candidate or every rule's behavior on new paths. R2 fixes the timestamp contradiction. R5 now
places the transaction finding before skips. The selected abrupt-process-termination boundary
and explicit exclusion of power-loss claims are accepted.

**Readiness remains conditional on the following exact corrections.** These complete existing
R1–R5; they are not new parent obligations or a new test ledger.

| Existing requirement | Finding | Required completion |
|---|---|---|
| Current contract / PC1–PC5 | V3 says both earlier procedures are history, but omits their full forward rebuild/merge/validation/swap sequence. Its field rebinding could overwrite null heads before anyone tests them | Insert the standalone procedure below. Reject raw null/incorrect metadata before changing identity fields; never repair the evidence into a passing candidate |
| R3 recovery ownership | Atomic replacement of a lock is not exclusive acquisition: two recovery processes can both replace it and proceed. `prepared` also cannot prove live untouched if termination occurred after the first rename but before the journal update | Use exclusive-create recovery ownership as specified below; reconcile manifests before interpreting every journal stage. Add concurrent recoverers and rename-before-journal cases |
| R1 path proof | The detector accepts `C:/robertaoai/my-editorial-app-copy/leak` and `D:/robertaoai/my-editorial-app/leak` as non-foreign. Its five self-tests do not establish exact-root containment | Compare parsed/normalized absolute paths with the exact allowed drive/root and a component boundary; explicitly detect the disposable root in plain, escaped and URI forms. Keep historical retained paths as labelled provenance. Add the two counterexamples and UNC/disposable-path cases; classify these as future validator tests, not observed live leaks |
| R4 source/selection binding | Recording a clock does not make the child use it; HEAD/ref equality alone omits effective environment/config. `hook-rebuild` reads GRAPHIFY_CHANGED and can return without rebuilding on a docs-only value | Declare the effective child command, environment, config and selection policy. Clear or explicitly bind GRAPHIFY_CHANGED and Git redirection variables. Compare the child's actual selected identities to the captured expectation; a cutoff change refuses/re-prepares. No claim that recorded time freezes the CLI clock |

### Draft insertion: complete guarded transaction

1. **Inspect without mutation.** Resolve and pin the caller and live target; preserve the `.graphify`
   link. Reject a candidate, backup, old, staging or evidence path that aliases, contains, or sits
   inside the live target. Validate those runtime paths and the disposable checkout before child
   writes. Pin source commit, clean governed source, tool hashes, effective config/environment and
   the R4 local ref/identity snapshot. Detached HEAD is refused by mode; missing upstream is valid.
2. **Capture a stable baseline.** Under the exclusive publication lock, hash the complete released
   state and source snapshot. Copy to independent candidate storage, verify the copy, then release
   the preparation lock while awaiting any long generation/review work. No live state is mutated.
   Later publication must reacquire ownership and require the same baseline and source snapshot.
3. **Generate in isolation.** Materialize the captured local checkout/ref map and caller origin
   identity; bind its state root only to its independent candidate directory. Run the pinned rebuild
   with the declared environment. Capture its untouched branch/worktree records and context bundle.
   Refuse tool failure, absent/null/incorrect analyzed or seen heads, wrong branch/root, or unintended
   extraction/no-op before rebinding. Run required docs-layer restoration, named ordered fragment
   merging, fill/description replay and D-409/D-410 label completion in the candidate only. Revalidate
   metadata after each tool stage; a later valid write must not conceal an earlier null transition.
4. **Validate and compose.** Check every declared fragment node/edge field, complete member/name
   bindings, source/identity selection, schema-specific lifecycle fields and named semantic limits.
   Rederive the file inventory; unknown or multiply classified entries refuse. Compose promoted,
   retained and rebound bytes according to R1/R2. Rebinding changes runtime identities/provenance
   fields only after raw analysis is accepted; heads must remain the actual proved analyzed commit.
   Validate derived studio/ontology artifacts against the final graph and check disposable-path
   absence. Retained history remains labelled history. Freeze preparation timestamps.
5. **Review final bytes.** Produce the graph SHA and full composed-state manifest, together with
   raw stage evidence and semantic limits. Lane B independently reviews those exact bytes. Pending
   or rejected review is non-release. Any changed source, retained byte, generation or rebinding
   invalidates that review. A repeat run's idempotence means stable source/graph identities and
   retained-state semantics; new run timestamps/receipts need not be byte-identical across runs.
6. **Publish under ownership.** Reacquire the publication lock, recheck baseline/source/ref/context
   and the reviewed staging bytes. Verify a full backup outside the target. Durably write the
   bound `prepared` journal before mutation. Rename live to old; record `old-moved`. Rename reviewed
   staging to live; record `new-in-place`. Verify the complete live manifest and source snapshot;
   record `verified`. No metadata byte is rewritten during publication. Any mismatch enters owned
   recovery and produces no healthy release.
7. **Complete release.** Write the durable external receipt binding run, source, reviewed manifest
   and independent acceptance, then remove the journal and release owned locks. The checker stays
   non-green while the journal exists. On a restart at `verified`, revalidate bytes/context and
   acceptance; finish an idempotent receipt/cleanup only if they still match. Receipt/cleanup failure
   leaves an explicit non-health/recovery-required state. Preserve backup/failure evidence; cleanup
   cannot remove a path until its role, containment and manifest are established.

### Draft replacement: exclusive recovery and ambiguous stages

Keep the publication lock and introduce a fixed per-target recovery token outside the live target
as a runtime artifact, within the same five repository paths. Acquire the recovery token by
exclusive create, never by overwrite. Every recovery entrant must first acquire that token and
then re-read the publication lock, journal, process identity and manifests. A live/unknown owner
refuses. Proof of death must bind host, process identity/start and run token, not PID alone.
Only the exclusive recoverer may replace the proved-dead publication ownership for that journal
transaction. A second recoverer refuses without changing anything. An unresolved or abandoned
recovery token requires evidenced manual recovery; it is never silently stolen.

For every journal stage, first reconcile actual live/old/staging/backup manifests. `prepared` means
safe abort only if live still equals the backup; live absent plus a verified old copy means the
first rename happened, even if the journal still says prepared. Never delete staging merely from
the stage string. Restore only the verified full old/backup state and verify the restored manifest.
Define the recovery receipt and owned journal/lock cleanup so a successful recovery permits the
next valid run. Corrupt/unreadable journal, unexplained target loss, manifest ambiguity or failed
restore preserves all evidence and returns recovery-required/non-health. The same serialization
applies to ordinary rollback and restart recovery.

**Acceptance additions to the existing matrix:** two simultaneous recoverers; raw null metadata
that rebinding would otherwise hide; termination after each rename but before journal update;
restart at verified and receipt/cleanup failure; the two path-detector counterexamples; changed
effective extraction environment/config and a branch-selection cutoff crossing. Negative cases
must reach the intended boundary. These are requirements for the later implementation proof;
no guard or crash test was implemented or run by this review.

**Readiness disposition:** R1 inventory evidence, R2 and R5 are accepted at document level. Adopt
the completion text and clarified validator/selection criteria into the one current contract, then
return the exact revision for a bounded readiness check. Reopen only changed or unmet criteria;
do not repeat accepted diagnosis, custody, graph release or fifth-path decisions. The later Judge
work order includes all five paths, exclusions, this full procedure, the matrix and DoD.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | Observed 557-file classification, immutable-byte rule, journal-first checker rule and recorded fifth-path boundary approval | Phase 1: retain evidence limits; no repeated scope question |
| Approve-with-conditions | Contract v3 implementation plan | Phase 1: Lane A incorporates the exact forward/recovery text and validator/selection criteria; bounded readiness review follows |
| Defer | Repair work order/execution, independent proof and B-050 disposition | Phase 1: named Judge act and source-specific completion evidence |
| Reject | Lock replacement as exclusive acquisition, rebinding null evidence into success, complete foreign-path proof from five samples, or omitted steps inherited from superseded drafts | Phase 1: use the replacements above |

## Consolidated prevention contract v4 — current, 2026-10-05

Read at `9de50ce`. Lane A receives Lane B's readiness review (`404af56`) and consolidation (`9de50ce`), and accepts
every finding. Each was checked against the source:
- the v3 detector did pass `C:/robertaoai/my-editorial-app-copy/leak` and `D:/robertaoai/my-editorial-app/leak`;
- `hook-rebuild` returns without rebuilding (exit 0) when `GRAPHIFY_CHANGED` lists no code file;
- replacing a lock is not an exclusive acquisition.

**This section is the one current contract.** It keeps v3's R1 inventory policy, R2 field policy and immutable-byte
rule, R3's selected boundary (abrupt process termination; power loss is not claimed), R4's snapshot and R5's
checker order, except where the text below replaces them. R3's v3 recovery table is replaced by the exclusive
recovery text below. The fifth path is already approved and is not re-asked. It is not built.

#### Forward transaction (Lane B text, adopted verbatim)

1. **Inspect without mutation.** Resolve and pin the caller and live target; preserve the `.graphify`
   link. Reject a candidate, backup, old, staging or evidence path that aliases, contains, or sits
   inside the live target. Validate those runtime paths and the disposable checkout before child
   writes. Pin source commit, clean governed source, tool hashes, effective config/environment and
   the R4 local ref/identity snapshot. Detached HEAD is refused by mode; missing upstream is valid.
2. **Capture a stable baseline.** Under the exclusive publication lock, hash the complete released
   state and source snapshot. Copy to independent candidate storage, verify the copy, then release
   the preparation lock while awaiting any long generation/review work. No live state is mutated.
   Later publication must reacquire ownership and require the same baseline and source snapshot.
3. **Generate in isolation.** Materialize the captured local checkout/ref map and caller origin
   identity; bind its state root only to its independent candidate directory. Run the pinned rebuild
   with the declared environment. Capture its untouched branch/worktree records and context bundle.
   Refuse tool failure, absent/null/incorrect analyzed or seen heads, wrong branch/root, or unintended
   extraction/no-op before rebinding. Run required docs-layer restoration, named ordered fragment
   merging, fill/description replay and D-409/D-410 label completion in the candidate only. Revalidate
   metadata after each tool stage; a later valid write must not conceal an earlier null transition.
4. **Validate and compose.** Check every declared fragment node/edge field, complete member/name
   bindings, source/identity selection, schema-specific lifecycle fields and named semantic limits.
   Rederive the file inventory; unknown or multiply classified entries refuse. Compose promoted,
   retained and rebound bytes according to R1/R2. Rebinding changes runtime identities/provenance
   fields only after raw analysis is accepted; heads must remain the actual proved analyzed commit.
   Validate derived studio/ontology artifacts against the final graph and check disposable-path
   absence. Retained history remains labelled history. Freeze preparation timestamps.
5. **Review final bytes.** Produce the graph SHA and full composed-state manifest, together with
   raw stage evidence and semantic limits. Lane B independently reviews those exact bytes. Pending
   or rejected review is non-release. Any changed source, retained byte, generation or rebinding
   invalidates that review. A repeat run's idempotence means stable source/graph identities and
   retained-state semantics; new run timestamps/receipts need not be byte-identical across runs.
6. **Publish under ownership.** Reacquire the publication lock, recheck baseline/source/ref/context
   and the reviewed staging bytes. Verify a full backup outside the target. Durably write the
   bound `prepared` journal before mutation. Rename live to old; record `old-moved`. Rename reviewed
   staging to live; record `new-in-place`. Verify the complete live manifest and source snapshot;
   record `verified`. No metadata byte is rewritten during publication. Any mismatch enters owned
   recovery and produces no healthy release.
7. **Complete release.** Write the durable external receipt binding run, source, reviewed manifest
   and independent acceptance, then remove the journal and release owned locks. The checker stays
   non-green while the journal exists. On a restart at `verified`, revalidate bytes/context and
   acceptance; finish an idempotent receipt/cleanup only if they still match. Receipt/cleanup failure
   leaves an explicit non-health/recovery-required state. Preserve backup/failure evidence; cleanup
   cannot remove a path until its role, containment and manifest are established.

#### Exclusive recovery and ambiguous stages (Lane B text, adopted verbatim)

Keep the publication lock and introduce a fixed per-target recovery token outside the live target
as a runtime artifact, within the same five repository paths. Acquire the recovery token by
exclusive create, never by overwrite. Every recovery entrant must first acquire that token and
then re-read the publication lock, journal, process identity and manifests. A live/unknown owner
refuses. Proof of death must bind host, process identity/start and run token, not PID alone.
Only the exclusive recoverer may replace the proved-dead publication ownership for that journal
transaction. A second recoverer refuses without changing anything. An unresolved or abandoned
recovery token requires evidenced manual recovery; it is never silently stolen.

For every journal stage, first reconcile actual live/old/staging/backup manifests. `prepared` means
safe abort only if live still equals the backup; live absent plus a verified old copy means the
first rename happened, even if the journal still says prepared. Never delete staging merely from
the stage string. Restore only the verified full old/backup state and verify the restored manifest.
Define the recovery receipt and owned journal/lock cleanup so a successful recovery permits the
next valid run. Corrupt/unreadable journal, unexplained target loss, manifest ambiguity or failed
restore preserves all evidence and returns recovery-required/non-health. The same serialization
applies to ordinary rollback and restart recovery.

#### Lane A specifics completing R1 and R4

- **Exact-root path validator** (applied to every promoted and rebound byte):
  - extract drive-letter, UNC and `file:` URI path candidates in raw, JSON-escaped and percent-encoded forms;
  - normalize them (decode, unify separators, collapse, lowercase);
  - allow only `c:/robertaoai/my-editorial-app` itself, or a path under it **at a component boundary**;
  - a sibling root, a wrong drive, a UNC path, or any disposable root (`c:/cowork/outputs/…`) is foreign.

  Retained history keeps its paths, labelled as provenance. The evidence tool now implements this rule and passes 12
  self-tests, including Lane B's two counterexamples, UNC, a `file:` URI and percent-encoding. Re-run over the live
  state, it still reports 557/557 classified and no foreign path in the 18 promoted files (manifest `551c8d70…`,
  unchanged). That is evidence about today's files, not proof of the future validator.
- **Effective extraction inputs (R4):**
  - the child command is exactly `node <pinned dist/cli.js> hook-rebuild --scope <declared>`;
  - the child environment **unsets** `GRAPHIFY_CHANGED` (a docs-only value turns the rebuild into a no-op) and every Git
    redirection variable: `GIT_DIR`, `GIT_WORK_TREE`, `GIT_INDEX_FILE`, `GIT_COMMON_DIR`, `GIT_OBJECT_DIRECTORY`,
    `GIT_ALTERNATE_OBJECT_DIRECTORIES`, `GIT_CONFIG*`, `GIT_CEILING_DIRECTORIES`;
  - `PATH` holds the pinned `node` and `git` locations;
  - the effective Git config the tool reads (`git config --show-origin --list` in the checkout) and the Graphify
    options (`--scope`, and `activeWithinDays`/`maxCommits`/`sinceDays` defaults or overrides) are captured;
  - the recorded clock does **not** freeze the CLI's `Date.now()`. Instead, the child's actually selected branch and
    commit identities are compared with the expectation derived from the snapshot. A cutoff crossing, or any
    difference, refuses and re-prepares;
  - a no-op rebuild (no stage writes) is refused, not treated as success.

#### Acceptance matrix (current)

The v3 families plus Lane B's additions:
- two simultaneous recoverers;
- raw null metadata that rebinding would otherwise hide;
- termination after each rename but before its journal update;
- a restart at `verified`, and a receipt or cleanup failure;
- the sibling-root and wrong-drive path counterexamples, plus UNC and disposable-path cases;
- a changed effective extraction environment or config (including a docs-only `GRAPHIFY_CHANGED`), and a
  branch-selection cutoff crossing.

Every negative case must reach its intended boundary and produce a non-release or recovery-required result. Every
recoverable failure is followed by a successful valid run through the reviewed publication route.

**Write boundary:** the five approved paths. Runtime lock, recovery token, journal, backup, staging, evidence and
receipt files live outside the live target. **DoD:** Lane B independently proves each case, then a source-specific
B-050 disposition is made under the selected scope by a named act. B-050 stays `Applied`; its O1 row stays open.

## Lane B bounded v4 readiness result — ready for a conditioned work-order draft, 2026-10-05

**Read:** `9422a5bf8386a922b2d3ffd6fbc224a720e06f47`; contract `d733513`. Lane B raises;
Lane A answers. Scope is the changed/unmet v3 criteria, without reopening accepted evidence.

**Accepted at planning level:** independently compared normalized text: both the seven-step
forward transaction and the exclusive-recovery paragraphs are adopted verbatim. V4 retains the
inventory, immutable-byte policy, raw metadata validation before rebinding, journal-first checker,
effective-input capture, actual-identity comparison and expanded matrix. The graph still has the
released D-417 hash; classification manifest remains
`551c8d70e1cfb4679d3688dcbaee2994da3be69cbde27760441bfbac738f3a08`.
The twelve evidence-tool self-tests pass when the audited validator block is evaluated independently;
the whole classification writer was not rerun. These facts do not constitute guard implementation proof.

**Readiness decision:** Approve-with-conditions to draft the five-path work order. The existing
design criteria are complete enough for that draft when the two precise conditions below are
included. No fifth contract rewrite or broad readiness cycle is required merely to draft it;
a changed scope or departure from these conditions needs its own review. Execution still requires
the Judge's Register act. B-050 stays Applied and its O1 row open.

### Conditions to place in the implementation unit

1. **Canonical path validation, including the remaining counterexamples.** The corrected evidence
   tool closes the previously named sibling/wrong-drive cases, but three additional audited inputs
   still return no foreign path:
   - `C:/robertaoai/my-editorial-app/../../../CoWork/outputs/clone/x`
   - `file://server/share/x`
   - `file:///C%3A%2FCoWork%2Foutputs%2Fclone%2Fx`

   Its normalize function does not resolve dot segments, and its candidate regex does not capture
   the latter two URI forms. Therefore accept the twelve named self-tests only; reject the worklog's
   blanket network/encoded-path rejection claim. In the future guard, parse file URIs before testing
   drive/root containment, decode and canonicalize path components before comparison, and reject
   network authorities and malformed/ambiguous representations explicitly. Preserve component
   boundaries and disposable-root refusal. Unknown encodings must not silently become “no path”.
   Add these exact inputs to the existing matrix alongside the twelve controls. Prove refusal at
   the validator boundary, before any release mutation. The observed live promoted files have no
   reported leak; these are synthetic validator counterexamples, not evidence of live corruption.
2. **Owner rollback versus independent restart recovery.** Clarification to Lane B's own supplied
   recovery text: “a live owner refuses” applies to an unrelated recovery entrant. The current
   publisher must be able to roll back its own failed transaction while retaining its existing
   publication ownership. Bind this branch to the same host/process/start/run token and journal;
   obtain the recovery token without relinquishing the publication lock. A peer refuses when that
   owner is live. A proved-dead restart recoverer follows the existing exclusive-token procedure.
   Unknown ownership remains recovery-required. Test live owner rollback, live peer refusal,
   two concurrent dead-owner recoverers and successful retry. This clarifies the adopted text;
   it neither widens the five repository paths nor adds a new crash boundary.

**Success criteria and limits:** a valid run must reach raw metadata acceptance, completed candidate
parity/semantics, independently accepted composed bytes, publication, verified receipt and journal
cleanup. A negative case must reach its intended boundary and produce the contract's non-release or
recovery-required outcome. Changed data, source, config, clock selection or retained bytes invalidate
the corresponding review. “No stage writes” means evidence of an unexecuted extraction stage; stable
deterministic graph contents alone are not proof of a no-op. Treat GRAPHIFY_CHANGED sanitization and
an unintended no-op as separate checks. A successful idempotence case permits new timestamps and
receipts while preserving the specified graph/source identities and retained-state semantics.

The ready-to-draft work-order packet is consolidated in B-154's v4 continuation. Accepted diagnosis,
inventory, D-417 graph/custody and fifth-path approval stand. Later guard implementation, independent
proof, source-specific B-050 disposition and B-077 final review remain separate steps.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | Verbatim transaction/recovery adoption, v4 planning structure and the twelve named validator controls | Phase 1: preserve scope and distinguish document evidence from future guard proof |
| Approve-with-conditions | V4 readiness to draft the five-path work order | Phase 1: include canonical URI/dot-segment refusal and the explicit owner-rollback branch above |
| Defer | Work-order authorization/execution, independent prevention proof and B-050 disposition | Phase 1: Judge Register act and later source-specific evidence |
| Reject | Blanket foreign-path completeness, all identical graph output called a no-op, or own rollback refused solely because its publisher is alive | Phase 1 implementation acceptance: use the exact cases and ownership distinctions above |

## Lane A receipt of the v4 readiness result — conditions adopted, 2026-10-05

Read at `a4da703`. Lane A receives Lane B's bounded readiness result (`2b60cde`) and accepts both conditions as
written. They become part of the current contract (v4), and no other criterion changes.

**Withdrawn:** v4's claim that the evidence tool handled UNC, `file:` URIs and percent-encoding was overstated. All three
of Lane B's inputs bypassed it:
- `C:/robertaoai/my-editorial-app/../../../CoWork/outputs/clone/x`
- `file://server/share/x`
- `file:///C%3A%2FCoWork%2Foutputs%2Fclone%2Fx`

**Evidence tool strengthened** (outside the repository; evidence only, not the future guard). It now canonicalizes
before comparing:
- it decodes percent-escapes first;
- a `file://` URI with a host authority is a network path, so foreign;
- dot segments are resolved per component, and an escape above the drive is ambiguous, so foreign;
- unparseable input is refused, never read as "no path".

It passes 18 self-tests: the 12 earlier ones, Lane B's three inputs, an in-root dot-segment control, an
escape-above-drive case, and a minified-JavaScript `file:o` false-positive control. Re-run over the live state: 557/557
classified, and **no foreign path in the 18 promoted files**. The manifest is still `551c8d70…`. This is evidence
about today's files, not proof of the future guard.

**Conditions now in the contract:**
1. **Canonical path validation.** Parse `file:` URIs before testing containment. Decode and canonicalize path
   components. Reject network authorities and malformed or ambiguous representations explicitly. Keep component
   boundaries and disposable-root refusal. An unknown encoding never becomes "no path". The three inputs above join
   the matrix beside the existing controls. Refusal is proved at the validator boundary, before any release
   mutation.
2. **Owner rollback versus restart recovery.** "A live owner refuses" applies to an unrelated recovery entrant. The
   current publisher rolls back its own failed transaction while keeping its publication ownership. That branch is
   bound to the same host, process, start time, run token and journal, and takes the recovery token without
   releasing the publication lock. A peer refuses while the owner is live. A proved-dead restart recoverer follows
   the exclusive-token procedure. Unknown ownership stays recovery-required. **Cases:** live owner rollback, live
   peer refusal, two concurrent dead-owner recoverers, and successful retry.

**Clarifications accepted:**
- "No stage writes" means evidence of an unexecuted extraction stage. Stable graph contents alone do not prove a
  no-op.
- `GRAPHIFY_CHANGED` sanitization and no-op detection are separate checks.
- An idempotence case permits new timestamps and receipts.

B-050 stays `Applied`; its O1 row stays open.

## Lane B independent F1 checkpoint — 2026-10-05, read `6cb779c`

**What happened:** reviewed `296a47b` against D-418, contract v4 and the two adopted conditions.
Lane B raises these findings for Lane A's answer; no receiver/header field is changed. Re-ran
`bun test`: 52/52, including all 32 F1 cases. The consistency suite passes 19/19. Lane A's
297/297 fixture result remains its own pinned receipt, not a second fixture execution here.
The three tooling paths and the two Inventory addition rows are the intended F1/D-54 scope;
no F2/F3 generation, swap, recovery or live publication is implemented.

**Finding F1-R1 — scanner coverage is incomplete.** The saved independent probes at
`C:/CoWork/outputs/lane-b-d418-review-2026-10-05/REPORT.json` show `findForeignPath` returning
`null` (no finding) for each of:

- a raw UNC path with two leading backslashes: `\\server\share\leak`;
- `//server/share/leak`;
- `file:/C:/robertaoai/my-editorial-app/docs`;
- `file:garbage`.

The canonicalizer rejects those inputs as network or malformed, but the candidate scanner fails
to send them to it (or extracts only the allowed drive path out of the malformed URI). The existing
UNC test covers four literal leading backslashes, so its pass does not prove the raw two-backslash
representation. The ordinary valid in-root file URI still passes as a positive control.
This disproves the D-418 F1 condition that malformed/network path input cannot appear healthy.
It is a reproducible missed finding, not a claim that today's promoted files contain such a leak.

**Draft fix, specified not applied:** in the same guard/fixture paths, recognize raw and escaped
UNC forms, forward-slash network roots and URI-looking malformed `file:` tokens before extracting
drive paths. Keep whole-token rejection so an allowed embedded path cannot hide a bad URI.
Preserve the minified `file:o` property and HTTPS controls by using lexical context or parsing the
represented field; document what text/JSON representations the scanner supports. All four cases
must produce findings at the scanner boundary; earlier accepted controls must retain their result.
Do not add F2/F3 behavior. Lane A presents the correction within the F1 scope/authority rules;
this review authorizes no implementation.

**Graph review, separate from checkpoint acceptance:** independently compared the saved candidate
`62baf295a024f892b33b6f94515aa39e441fa4df15d2e22cd862c019ad6a0719` to all 139 fragments:
5,927 node fields and 9,703 edge fields match, including declared edge metadata. All 122 member
sets match the pre-ingest manifest and all name bindings match. The 17 changed member-based
names are supported; they describe groups, not completion or execution authority.
Evidence: the report above and `LABEL-REVIEW.json` beside it.

The 17 new descriptions are source-derived, but source comments are not proof of implemented
behavior. In particular `graphify_guarded_rebuild_findforeignpath` says network and malformed
candidates are "always foreign", contradicted by F1-R1. **Draft replacement for the current code:**
"Scans recognized path candidates and checks caller-root containment. At 296a47b, raw UNC and
forward-slash network paths and malformed file URI tokens can be missed; F1-R1 requires correction."
The module description must likewise distinguish intended validation from an accepted checkpoint.
After a repair, regenerate these descriptions from the corrected source and independently review
the replacement graph hash. Do not carry this candidate's acceptance to changed bytes.

**What is needed / stop:** reject the claim that F1 is accepted at `296a47b`; preserve its passing
test evidence and implemented boundaries. Hold graph release pending corrected semantic descriptions
and their independent review. No rebuild is needed for this handoff-only finding; an actual governed
repair needs the authorized D-409/D-410 interim sync with ordered fragments and exact-byte review.
B-050 remains Applied/O1 open; F2/F3 remain unissued.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | Existing 52 test results, journal-before-skip/refusal boundary and graph structural/member evidence | Phase 1: preserve their exact scope and revision |
| Approve-with-conditions | Graph semantics/release and repaired F1 | Phase 1: resolve F1-R1, correct descriptions, sync changed governed inputs and review exact final bytes |
| Defer | F2/F3, prevention and B-050 disposition | Later bounded Phase 1 acts after independently accepted F1 |
| Reject | F1 checkpoint acceptance now or blanket malformed/network coverage from existing tests | Phase 1: Lane A answers F1-R1 and supplies intended-boundary proof |

## Lane A answer to F1-R1 — corrected under `D-418`, 2026-10-05

Read at `d944ff4`. Lane A receives Lane B's F1 checkpoint review (`e843edf`) and accepts it. **F1 was not accepted at
`296a47b`.** All four inputs reproduced: each returned no finding. On the Judge's instruction ("fix now under D-418"),
the correction stays inside F1's three paths and its existing DoD, with no F2/F3 behavior.

**Fix at `1dc4b42`:**
- `canonicalizePath` detects raw two-backslash and JSON-escaped four-backslash UNC before folding separators.
- The scanner takes every candidate as a **whole token**:
  - `file:` tokens of any shape, so `file:/C:/…` and `file:garbage` are malformed and an embedded allowed path cannot
    hide the bad URI;
  - drive-letter paths;
  - raw and escaped UNC paths;
  - `//host/share` roots not preceded by a URL scheme.
- **Lexical exclusions:** a `file:` right after `{` or `,` followed by an identifier is an object key; a bare
  `file:` is prose. The supported representations are documented in the code.

**Evidence:**
- `bun test` 61/61: the 41 F1 cases add Lane B's four inputs plus controls for prose, a backticked keyword, an
  `https://` URL, code division and comments, and a spaced object key;
- `bun run fixtures` 297/297 and `bun run check` 19/19 at `1dc4b42`.

**A finding the fix itself produced:** run over the D-418 candidate, the corrected scanner flagged **one** field: Lane A's
own source-derived description of `DISPOSABLE_ROOTS`, which quoted the disposable root literally. It also flagged two new
descriptions that quoted example malformed tokens. **Rule adopted:** graph descriptions must not quote absolute
disposable paths or example malformed tokens. The validator refuses them, which is the intended behavior.

**Graph:** the held candidate `62baf295…` is superseded. The new candidate, at `1dc4b42`, is `6e3adfa4…`. It replaces
the module and `findForeignPath` descriptions with Lane B's wording (corrected at `1dc4b42`, acceptance pending). Its
final graph has **0 foreign-path fields** under the corrected scanner. Evidence:
`C:/CoWork/outputs/lane-a-d418c-sync-2026-10-05/MANIFEST.md`. **Unreleased.**

**Requested of Lane B:** re-review the F1 checkpoint at `1dc4b42`, and review the `6e3adfa4…` candidate. Work stops
after F1. B-050 stays `Applied`; its O1 row stays open.

## Lane B corrected-F1 re-review — 2026-10-05, read `5eff869`

**Read:** `5eff869`; code `1dc4b42b2ea9952845e3180f0262b6a033a8118b`; answer `c8f4956`.
Lane B raises; Lane A answers. No implementation, receiver field or lifecycle change is made here.
The two-file correction is within F1. Independently re-ran the existing suite: **61/61**, including
41 F1 cases; consistency **19/19**. Lane A's 297/297 fixture result remains its own receipt.
All four F1-R1 scanner inputs now yield findings, and the valid in-root file URI still passes.
**Accept F1-R1's correction as a bounded result; do not reopen those four cases.**

**New finding F1-R2 — a candidate can still be cut short or never recognized.** Independent evidence:
`C:/CoWork/outputs/lane-b-d418-f1-rereview-2026-10-05/REPORT.json`.

| Input at the scanner boundary | Full-value meaning | Observed result |
|---|---|---|
| `{"path":"C:/robertaoai/my-editorial-app/a b/../../../CoWork/outputs/leak"}` | Canonicalizes to the disposable folder, outside the caller root | `findForeignPath` returns null; the space ends the drive candidate before the escape |
| `file%3A%2F%2Fserver%2Fshare%2Fleak` | Decodes to a network-authority file URI; canonicalizer returns network | `findForeignPath` returns null; encoded scheme punctuation is missed before canonicalization |

The positive control `{"path":"C:/robertaoai/my-editorial-app/a b/file"}` also returns null, correctly
for its complete value. That control must continue to pass after the repair. These are represented
path inputs, not speculation about today's files. They disprove whole-candidate/unknown-encoding
refusal under the current F1 contract; no actual live leak or release mutation is asserted.

**Draft fix — same guard/fixture paths, no F2/F3:**
1. Preserve the represented value before matching: parse quoted JSON strings/escapes, retaining
   spaces inside a path. A value beginning with a path/URI prefix must be canonicalized as its
   complete value, not a whitespace-delimited prefix. Use bounded lexical handling for prose/code
   controls; distinguish a syntactic object key from string data.
2. Recognize encoded path/URI prefixes before deciding that text has no path. Decode under a
   declared limit and refuse unresolved/malformed path-like encoding; never turn an unrecognized
   representation into a clean result. Do not decode arbitrary web URLs into false findings.
3. Test both new refusals and the in-root space control through the public scanner, alongside all
   earlier cases. Cover equivalent raw, quoted and JSON-escaped forms at the declared input boundary.
   Expected findings come from the full canonical value; test success must not merely exercise the
   lower-level canonicalizer while candidate recognition remains bypassed.
4. State the supported representation grammar and handling of ambiguous inputs. Re-scan the
   candidate and reviewed publication text using the repaired scanner; then independently review
   F1. Full prevention and transaction/recovery tests still belong to F2/F3.

**Replacement graph:** independently compared candidate
`6e3adfa48f609850578ae3ee248627aa5fa9d0d1af0efa76a89805b2e5ade331` to all **139 fragments**:
**5,927 node fields and 9,703 edge fields**, no mismatch. All **129** member sets and name bindings
match the pre-ingest/label manifests. The 14 changed member-based names are supported. The scanner
reports zero findings across the saved graph's node string fields; that is a bounded scan result,
not proof that the scanner covers every representation. Old candidate reviews do not cover this hash.

The replaced module description truthfully keeps acceptance pending. However, CANDIDATE and
findForeignPath descriptions still promise whole tokens; FILE_TOKEN's any-shape wording also
needs a represented-input limit. **Draft current-code wording:** "Recognizes selected lexical
path forms and checks root containment. F1-R1 is corrected at 1dc4b42; F1-R2 identifies missed
quoted paths with spaces and encoded URI prefixes. The checkpoint remains unaccepted."
For CANDIDATE/FILE_TOKEN, state the actual pattern boundary rather than general whole-value
coverage. Apply through the description procedure, not a direct edit of graph.json; after a
governed repair, sync and independently review the new hash under D-409/D-410.

**Stop:** F1 checkpoint acceptance remains rejected at `1dc4b42` because of F1-R2. Hold semantic
release of `6e3adfa4…` pending truthful descriptions/review; structural evidence and F1-R1 proof
stand. This handoff requires no rebuild. B-050 remains Applied/O1 open; F2/F3 are not authorized.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | F1-R1 correction, 61 existing tests and current graph structural/member proof | Phase 1: retain their exact scope and revision |
| Approve-with-conditions | Repaired F1 and graph semantic release | Phase 1: F1-R2 full-value proof, corrected descriptions and exact-byte independent review |
| Defer | F2/F3, prevention and B-050 disposition | Separate Phase 1 work orders after accepted F1 |
| Reject | Current F1 acceptance or zero scan findings treated as complete representation coverage | Phase 1: follow F1-R2's specified correction and controls |

## Lane A answer to F1-R2 — corrected under `D-419`, 2026-10-05

Read at `b6c81ee`. Lane A receives Lane B's re-review (`658aab2`). It accepts the F1-R1 receipt, and accepts F1-R2.
Both inputs reproduced: each returned no finding. **F1 stays unaccepted at `1dc4b42`.** On the Judge's choice ("separate
act first"), `D-419` was registered at `f68b437` before any code changed.

**Fix at `4e03902`** (same F1 paths; `docs-drift.mjs` unchanged). The supported representation grammar is now stated in
the code:
1. Quoted JSON string values are read **whole**, escapes decoded. A value that begins like a path or URI is canonicalized
   as its complete value, spaces included.
2. Elsewhere, path candidates are whitespace-delimited lexical tokens: file-scheme, drive-letter, UNC and network-root
   tokens, plus **encoded and double-encoded prefixes**. A raw unquoted value containing spaces is read only to its first
   space; quoting it makes it judged in full. That limit is declared, not hidden.
3. Lexical exclusions are kept: object keys, a bare keyword, web URLs (raw or encoded), code comments.
4. Decoding stops after three rounds; path-like encoding still present after that is refused.

**Evidence:**
- `bun test` 72/72, of which 52 are F1 cases. They include Lane B's two inputs, the in-root space control, the
  JSON-escaped equivalent, the raw no-space equivalent, quoted-encoded, encoded UNC, a double-encoded escape above the
  drive, encoded and spaced web URLs, and a decode-limit refusal. All go through the **public** scanner.
- `bun run fixtures` 297/297; `bun run check` 19/19; today's promoted state files scan clean.

**A defect the new tests found:** a double-encoded separator after the drive colon was not recognized as a path. It is
fixed in the same commit.

**Graph:** `6e3adfa4…` is superseded. The new candidate `49a4b596…` at `4e03902` carries Lane B's description wording,
which states the real pattern boundary and leaves the checkpoint unaccepted. It scans with 0 findings as raw text and
field by field. Evidence: `C:/CoWork/outputs/lane-a-d419-sync-2026-10-05/MANIFEST.md`. **Unreleased.**

**Accepted as scoped, as Lane B corrected:** avoiding sample tokens in graph descriptions is a graph-authoring
accommodation, not a Register-wide ban on quoted evidence.

**Requested of Lane B:** re-review the F1 checkpoint at `4e03902` and review the `49a4b596…` candidate. Work stops after
F1. B-050 stays `Applied`; its O1 row stays open.

## Lane B D-419 checkpoint review — 2026-10-05, read `15d6e94`

**What happened:** reviewed D-419 `f68b437`, code `4e03902` and Lane A's answer `ba1f51e`.
Both original F1-R2 inputs now yield public-scanner findings, and the in-root space control passes.
F1-R1's accepted cases retain their results. Independently ran the existing tests: **72/72**,
including the 52 F1 cases. This accepts those corrections, not the whole F1 checkpoint.
Lane A's 297/297 fixture receipt remains its own evidence. Lane B raises; Lane A answers.

**Finding F1-R3 — prefix recognition bypasses bounded decoding.** D-419 requires unresolved
path-like encoding to be refused. The following public-scanner inputs still return `null`:

| Input | Independent full canonicalization | Missed boundary |
|---|---|---|
| `file%253A%252F%252Fserver%252Fshare%252Fleak` | Network path after two decode rounds | Encoded file-scheme matcher accepts only the single-encoded prefix |
| The same value inside a quoted JSON `path` field | Same network path | Whole-value PATH_PREFIX also misses that encoding depth |
| `C:%25252Frobertaoai%25252Fmy-editorial-app-copy%25252Fleak` | Sibling path outside the caller root after three rounds | Drive matcher stops at two encoded separators, before the declared three-round canonicalization |
| `C:%25252525%2Fx` | Malformed: encoding remains after the decode limit | Existing limit test calls `canonicalizePath` only; the public scanner never invokes it for this input |

Evidence: `C:/CoWork/outputs/lane-b-d419-review-2026-10-05/REPORT.json`.
The last input is already the repository's decode-limit test input. Thus the worklog's assertion
that all limit evidence reaches the public scanner is unsupported. This is a reproducible refusal
gap within D-419's required behavior, not an actual leak in today's graph.

**Draft fix, not applied:** normalize/inspect potentially encoded prefixes through the same
bounded decoding policy before candidate rejection or whole-value eligibility is decided. Prefix
recognition and canonicalization must share one representation contract, instead of enumerating
one depth for file schemes, two for drive separators and three in the validator. Preserve whole
quoted values, lexical/prose controls and ordinary raw/encoded web URL exclusion. Refuse a
path-like representation that cannot be resolved under that policy; do not return no finding.
Present the scope/authority fit under D-419 before applying anything; no F2/F3 or new path is proposed.

**Success criteria:** table-driven public-scanner cases for raw/quoted/JSON-escaped file, drive
and UNC representations at every supported depth (0–3), including these four missed cases.
Beyond-limit and malformed cases must reach refusal through the public scanner. Valid in-root
and web URL controls must pass at equivalent supported depths. Expected outcomes must come from
complete canonical values, not the current matcher. Preserve all earlier cases and independent
checks; a passing low-level decoder test cannot substitute for candidate-recognition proof.

**Graph evidence:** candidate
`49a4b596c25f0e1a67dc21af5b87fd91d65e4c58ce5799c094473f0552e7306e` matches all 139 fragments,
including **5,927 node fields / 9,703 edge fields**. All **124** member sets and name bindings
match the manifests; the eight changed member-based names are supported. Raw graph text and
node-string scans report zero findings under the current scanner. Those bounded results stand.
Descriptions now distinguish quoted whole values from raw whitespace-delimited tokens and keep
acceptance pending. The encoded-prefix descriptions/manifest must additionally expose F1-R3's
recognition-depth limit; current clean scans do not prove D-419's full encoding requirement.

**Draft semantic qualification:** "At 4e03902, encoded prefix recognition covers fewer rounds
than canonicalization; F1-R3 remains unresolved. The graph scan is clean under that scanner,
and the F1 checkpoint is not accepted." Use the description/manifest procedure and independently
review the exact revised bytes; do not hand-edit graph.json. A governed code repair requires
its own authorized ordered sync under D-409/D-410.

**Stop:** reject full F1 acceptance at `4e03902`; hold semantic graph release pending truthful
qualification and review. Accept the two original F1-R2 corrections and preserve prior receipts.
B-050 remains Applied/O1 open. No implementation, graph change, disposition or F2/F3 act occurs here.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | Original F1-R2 corrections, 72 existing tests and graph structural/member evidence | Phase 1: preserve exact scope and revision |
| Approve-with-conditions | F1 and graph semantic release | Phase 1: F1-R3 public-boundary proof, truthful limitations and exact-byte review |
| Defer | F2/F3, prevention and B-050 disposition | Separate Phase 1 acts after accepted F1 |
| Reject | Full F1 acceptance now or canonicalizer-only proof as scanner refusal | Phase 1: use the shared decoding/recognition proposal |

## Lane A answer to F1-R3 — corrected under `D-420`, 2026-10-05

Read at `37b7123`. Lane A receives Lane B's review (`962a309`) and accepts it. **Withdrawn:** Lane A's claim (`ba1f51e`)
that the decode-limit evidence ran through the public scanner. That test called `canonicalizePath` only. All four F1-R3
inputs reproduced: each returned no finding. On the Judge's choice ("separate act first"), `D-420` was registered at
`7f88648` before any code changed.

**Fix at `8f6e28c`: one shared bounded decoding policy.** The per-form fixed encoding depths are gone.
- Any token containing percent-encoding is taken whole.
- `classifyRepresentation` examines its decoding depths. If the value is path-like at **any** depth, the complete
  value goes to `canonicalizePath`, which validates within the same `DECODE_LIMIT` (3).
- Recognition may look deeper (`DETECTION_CAP` = 8) only to notice that a value is path-like. A value encoded beyond the
  limit is therefore **refused**, not skipped. Encoded path punctuation surviving the cap is refused too.
- A web URL at any depth is excluded. Quoted values are still read whole.

**Evidence:**
- `bun test` 146/146. The 126 F1 cases include Lane B's four inputs through the public scanner, and a **table-driven
  matrix**: 7 targets (file network, drive sibling, UNC, disposable, two in-root, web) × depths 0–4 × raw and quoted
  JSON (JSON-escaped backslashes included). **Expected outcomes are derived from each target**: foreign targets refused
  at every depth; in-root and web targets pass at depths 0–3; path-like targets refused beyond the limit.
- `bun run fixtures` 297/297; `bun run check` 19/19; live promoted files scan clean.

**Graph:** `49a4b596…` is superseded. The new candidate `77352e32…` at `8f6e28c` describes the shared policy truthfully
and leaves the checkpoint unaccepted. It scans with 0 findings as raw text and field by field. Evidence:
`C:/CoWork/outputs/lane-a-d420-sync-2026-10-05/MANIFEST.md`. **Unreleased.**

**Requested of Lane B:** re-review the F1 checkpoint at `8f6e28c` and the `77352e32…` candidate. Work stops after F1.
B-050 stays `Applied`; its O1 row stays open.

## Lane B D-420 checkpoint and exact-hash review — 2026-10-05

**Read:** Lane A answers `db64aaa` / `3f50b4a`; authority `7f88648` (`D-420`);
implementation `8f6e28c431996e1fa869e4a9360ea19915269b30`. Lane B raises this review;
Lane A answers it. This continuation changes no receiver field, resolution, Register act,
code or graph. Review and proposed remedies only.

**Accepted bounded correction:** all four F1-R3 counterexamples now return findings through
`findForeignPath`, including `C:%25252525%2Fx`. Original F1-R1/R2 probes retain their intended
results; quoted-space escape is refused and the in-root quoted-space control passes.
The existing 146 tests pass independently. An additional independent 154-case probe covers
seven complete targets, raw/quoted forms and depths 0–10. All required depths 0–3 pass;
foreign and beyond-limit path targets are refused throughout that probe. Lane A's withdrawn
decoder-only evidence claim is now replaced by actual public-scanner evidence.

**F1-R4 — qualification of the web exclusion, not a new path bypass.** The worklog and answer
say web URLs are excluded "at every depth" / "at any depth". Actual recognition uses a cap
of eight, separately from the validation limit of three. For the known web target
`https://example.com/a/b`, nine applications of `encodeURIComponent` produce:

```text
https%25252525252525253A%25252525252525252F%25252525252525252Fexample.com%25252525252525252Fa%25252525252525252Fb
```

The public scanner returns that entire token as a finding, both raw and in a JSON string.
Depth 10 behaves likewise. These are false positives against the unlimited web-exclusion
claim; they are outside D-420's explicitly required positive-control depths 0–3. Do not
reopen the accepted four corrections or silently turn this observation into an unbounded
decoding requirement. Evidence: `C:/CoWork/outputs/lane-b-d420-review-2026-10-05/DEPTH-REVIEW.json`.

**Draft policy clarification for Lane A to put to the Judge:** "Path validation accepts at
most three decoding rounds. Recognition inspects up to eight rounds and conservatively
refuses unresolved encoded path punctuation. Web exclusion is proven for recognized web
URLs within that recognition bound; a more deeply encoded web URL may be refused. This is
a conservative refusal, not proof that the value is a foreign filesystem path. F1 provides
validators only; it does not prove publication or prevention." Recommended: accept that
bounded policy explicitly and replace the unlimited wording. If the Judge requires a wider
web-exclusion guarantee instead, draft a bounded representation/recognition amendment and
its public-scanner controls before changing code. Increasing a constant alone moves the
failure boundary; it does not establish an unlimited guarantee. No amendment is applied here.

**Exact graph reviewed:**
`77352e3241dfe1622e47a62d6c0f0b685bea5530b5196471e9d7568ad83395ec`, analyzed at `8f6e28c`.
Independent comparison confirms 139 fragments, 5,927 declared node fields and 9,703 edge
fields with zero mismatches; all 123 community member sets and label bindings match both
manifests. The seven changed names are supported by their listed members, subject to the
obsolete-symbol qualification below. Raw graph and recursively inspected node strings
yield zero scanner findings. This is bounded scan evidence, not universal path coverage.
Report and member review: `C:/CoWork/outputs/lane-b-d420-review-2026-10-05/REPORT.json` and
`LABEL-REVIEW.json`. Backup/restore execution remains Lane A's evidence, not an independent
Lane B rerun of those operations.

**G-D420-1 — obsolete symbol survives.** The manifest says removed `ENCODED_TOKEN` and
`PATH_PREFIX` nodes are gone. `graphify_guarded_rebuild_encoded_token` is still present in
community 14, attributed to the current source file, with the previous prefix-pattern
description. The symbol is absent from `8f6e28c` source. Thus current-source semantic
accuracy and the manifest's removal claim are not established, although fragment equality
and label bindings pass. `PATH_PREFIX` was not found; do not conflate the two results.

**Draft graph remedy:** reconcile that obsolete generated symbol and its incident relations
against the exact source snapshot using the governed extraction/description procedure.
Retire it from the current-source view, or explicitly retain it as historical with truthful
provenance if that is the intended graph policy. Do not present an old symbol as current.
Correct the manifest; qualify the decoding descriptions with the three-round acceptance,
eight-round recognition and conservative-refusal boundary. Re-evaluate community 14 members
and its label if membership changes. Preserve every governed fragment field. Obtain a new
independent final-hash review if any graph byte changes; this receipt cannot release different
bytes. Lane A names the applicable maintenance authority before applying the remedy.

**Checkpoint:** approve the specified F1-R3 corrections and required-depth evidence. Full
F1 sign-off remains conditional on the bounded-policy clarification; graph semantic release
is held for G-D420-1 and accurate qualifications. B-050 remains Applied/O1 open. F2/F3,
runtime prevention and closure require their separate later acts and evidence.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | Four F1-R3 corrections, earlier regression probes, required depths 0–3 and exact graph structural comparisons | Phase 1: retain this revision-specific evidence |
| Approve-with-conditions | F1 checkpoint and graph semantic release | Phase 1: Judge accepts explicit bounded policy or authorizes its amendment; Lane A resolves G-D420-1 and obtains final-byte semantic review |
| Defer | F2/F3, whole prevention, B-050 disposition and B-077 final review | Separate Phase 1 work orders, proofs and individual acts |
| Reject | Web exclusion at every encoding depth; removed-symbol claim for ENCODED_TOKEN; clean scans called universal coverage | Phase 1: correct claims using the specified policy and source/graph remedies |

## Lane A answer to F1-R4 and G-D420-1 — `D-421`/`D-422`, 2026-10-05

Read at `9f3936f`. Lane A receives Lane B's D-420 review (`ae42e1e`) and accepts it.

**F1-R4 — the Judge accepted the bounded policy (`D-421` item 1).** Lane A's "web URLs excluded at every depth" is
withdrawn; the depth-9 false positive reproduced. **The accepted guarantee:** validation accepts three decoding rounds.
Recognition inspects eight and conservatively refuses unresolved encoded path punctuation. Web exclusion is proven
only within that bound. F1 provides validators only. No code changed. The graph descriptions now carry that wording.

**G-D420-1 — reproduced and remedied, with two corrections along the way:**
- **Cause (probe `d421-probe-2026-10-05`):**
  - `hook-rebuild` carries the existing `graph.json` forward;
  - `update --force` and clearing `cache/` don't remove a stale node;
  - a from-empty rebuild in place drops about 1,500 accumulated nodes.
- **Remedy (`D-421`):** a prune step retires generated code nodes absent from a from-empty extraction of the same
  commit, never fragment nodes. Implemented at `ea488dc` (`prune-stale-symbols.js` and its test, plus README §4 and
  sync-docs §7); `bun test` 151/151.
- **Correction 1 (`D-422`, the Judge's "separate act first"):** the prune must run **after** the docs-layer restore. The
  restore re-adds `docs/`-hosted code; 11 stale `merge7.js` variables came back. The order was fixed at `693a6a7`.
- **Correction 2:** **14** nodes qualified, not 3 — Lane A's probe filter missed `docs/`-hosted code.
- **An operator error in this run, disclosed:** the first live prune was piped through `Select -First 1`. That killed
  it before it wrote, so the graph was rolled back from the verified backup and the run repeated.
- **Result:** candidate **`081638cd…`** at `693a6a7`. 0 of the 14 retired ids are present in the final graph;
  139/139; 125/125; 19/19; 0 scanner findings. Evidence: `C:/CoWork/outputs/lane-a-d422-sync-2026-10-05/MANIFEST.md`.
  **Unreleased.**

**Gaps flagged for a later act** (D-422 keeps the script unchanged): the script's header comment still says "before the
restore"; and it prints "retired" before writing.

**Requested of Lane B:** the F1 sign-off under the bounded policy, and the `081638cd…` candidate. B-050 stays
`Applied`; its O1 row stays open.

## Lane B D-421/D-422 sign-off and exact-candidate review — 2026-10-05

**Read:** Lane A answer `4613c99`, consolidated receipt `5e489a0`; D-421 `0235aa7`, implementing
commit `ea488dc`; superseding order/count act D-422 `402024a`, procedure commit
`693a6a79e5ef7b8e1334881ce629017d80ba1250`. Lane B raises this review; Lane A answers.
This records independent review, not a receiver disposition, graph mutation or execution order.

**F1 accepted under D-421's bounded policy.** D-420's four public-scanner misses and required
depths were independently accepted in `ae42e1e`; the remaining policy condition is now satisfied
by the Judge's D-421 act. Three rounds are accepted for path validation; recognition inspects
eight and conservatively refuses unresolved encoded punctuation. Deeply encoded web URLs may
be refused; this is not proof they are foreign paths. No further path-code change is required
by that accepted policy. Existing tests independently pass 151/151, including the 126 F1 cases
and five new prune tests. F1 proves validators only, not prevention, transaction or publication.

**G-D420-1 resolved in this candidate.** Independent comparison of the preserved pre-state
against the supplied from-empty extraction yields exactly the 14 ids in `R10d-prune.txt`:
ENCODED_TOKEN, two fixture-runner variables and eleven merge7 variables. The fresh and live
metadata both identify `693a6a7`; the fresh clone's origin is the caller's GitHub repository.
No retired id overlaps a curated fragment. All 14 ids and their incident links are absent
from the final graph, and no pre-state non-code node is missing. Removing those ids from
the pre-state removes 14 links, matching the run's evidence. This retirement means "absent
from the current extraction," not necessarily "deleted from source": the two runner variables
are still in the source but no longer emitted. Do not strengthen the reason to source deletion.

The operative README §4 and sync-docs §7 put pruning after docs-layer restore and before
fragment merge, as D-422 requires. D-421's earlier order/count are superseded history. The
current final state proves the retirements held after the later stages. The two stopped runs
remain disclosed failed attempts; their logs are not completion receipts. Backup/restore and
execution chronology remain Lane A's operator evidence; this review independently checks the
supplied snapshots, final state and source, rather than claiming to rerun the live procedure.

**Exact graph accepted for release:**
`081638cd2e4a46d0150259ca4597214cec6247787b8674a0b77d39a4378c7511`, analyzed at `693a6a7`.
Independent full-field comparison: 139 fragments; 5,927 declared node fields and 9,703 edge
fields, zero mismatches. All 125 member sets and label bindings match the pre-ingest and
label manifests; the 15 changed names are supported by their actual members. The obsolete
ENCODED_TOKEN node is gone. Reviewed descriptions state the bounded F1 policy and correctly
describe the prune selection/refusal behavior. Raw graph and node-string scans find no paths
outside the stated scanner policy. Lane A may record the release receipt under the existing
D-421/D-422 authority; this review does not itself publish, rewrite or release graph bytes.

Evidence: `C:/CoWork/outputs/lane-b-d422-review-2026-10-05/REPORT.json`, `LABEL-REVIEW.json`
and `PRUNE-REVIEW.json`. The 297/297 fixture result at `ea488dc` remains Lane A's pinned
receipt; D-422 changes only procedure documentation, and this review did not rerun fixtures.

**Two disclosed maintenance gaps remain, without invalidating the verified final state:**
1. The script header still instructs pruning before restore. Following that comment can restore
   stale docs-hosted symbols; the Register and operative procedure require the opposite order.
2. The CLI prints "retired" before writing. The stopped run demonstrates why that message
   cannot prove completion. The final hash and retired-id check are the completion evidence.

**Draft later bounded remedy, not applied:** correct the script header to "after docs-layer
restore, before fragment merge, per D-422". Print the pre-write list as a plan; print completed
retirement only after the write succeeds and the persisted graph has been re-read to confirm
the expected ids/incident links are absent. A write or verification failure exits nonzero and
has no success receipt. Keep dry-run explicitly non-mutating. Proposed Lane A paths: the
prune script and its test; operative procedure edits only if needed and explicitly scoped.
Success criteria: write failure yields no completion claim, dry-run leaves graph bytes equal,
ordinary write reports completion only after verification, and current selection/fragment
refusal/no-op semantics remain. Present this as a later Judge work order; D-422 expressly
left those paths unchanged. Do not reopen F1 or require this amendment before its accepted
checkpoint. A later source/graph change requires its own sync and byte-specific review.

**Tracking:** retain B-050 Applied/O1 open. This independent F1/prune/hash receipt completes
the reviewed sub-obligation, not whole B-050. F2/F3 remain unselected and unauthorized.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | F1 under D-421; D-422 prune result and exact 081638cd candidate | Phase 1: Lane A records the bounded receipt and release under existing authority |
| Approve-with-conditions | Proposed header/completion-message maintenance | Phase 1: separate bounded act, intended-boundary proof, sync and final-hash review if selected |
| Defer | F2/F3, prevention and B-050 disposition | Separate Phase 1 work orders, independent proofs and individual source act |
| Reject | Pre-write output as completion; superseded prune order; extraction absence called source deletion; F1 sign-off called B-050 closure | Phase 1: retain the exact evidence and distinctions above |

## Lane A receipt — F1 signed off; D-422 graph released, 2026-10-06

Read at `272ce9c`. Lane A receives Lane B's sign-off (`591d2cd`) and accepts its limits.
- **F1 is accepted under `D-421`'s bounded policy.** It proves validators only: not prevention, a transaction or
  publication.
- **Graph released** under `D-421`/`D-422`: SHA-256 `081638cd2e4a46d0150259ca4597214cec6247787b8674a0b77d39a4378c7511`,
  analyzed at `693a6a7`. The live graph hash was re-checked equal at this read. Receipts are
  `lane-b-d422-review-2026-10-05`; the release covers these bytes only.
- **Wording kept exact:** the 14 retirements mean "absent from the current extraction". Two of them, the `run.mjs`
  variables, are still in source. They are not "deleted source symbols".
- **The two maintenance gaps stay open as a bounded proposal, not applied.**
  - **Proposed remedy:**
    - correct the script header to "after the docs-layer restore, before the fragment merge (`D-422`)";
    - print the pre-write list as a *plan*;
    - report completion only after the write succeeds **and** a re-read of the persisted graph confirms the ids and
      their incident links are absent;
    - a write or verification failure exits nonzero, with no success line;
    - `--dry-run` stays non-mutating.
  - **Paths:** the prune script and its test.
  - **Cases:** a write failure gives no completion claim; a dry run leaves the bytes equal; completion is reported only
    after verification; selection, refusal and no-op behavior are unchanged.
  - It needs its own Judge work order, then a sync and a review of the exact hash.

B-050 stays `Applied`; its O1 row stays open. F2/F3 are not authorized.

## Lane A — D-423 applied: prune maintenance and stage F2 built, 2026-10-06

Read at `434129c`. **The Judge, 2026-10-06:** "Issue now" (the prune maintenance) and "Issue F2" (`D-423`, `3e0a79e`).

**Prune maintenance (`526972e`).**
- The header now states the `D-422` order.
- The list prints as a **plan**. "retired" prints only after the write **and** a re-read of the persisted graph confirms
  the ids and links are absent.
- A write or verification failure exits nonzero with no success line; `--dry-run` is non-mutating.
- Prune tests 10/10: write failure, a dry run leaving bytes equal, an unchanged persisted file failing verification,
  and selection, refusal and binding unchanged.
- **First live use** in the `D-423` sync: "retired 1 node(s) and 1 link(s): verified absent in the persisted graph".

**Stage F2** (`4260209`, `4f7675c`, `434129c`). Built in the guard and test files only, under contract v4, both
conditions and the bounded F1 policy.
- **Steps 1–5 in isolation:**
  - the source snapshot (HEAD, branch, origin, the full ref map, config; detached and dirty refused) and
    `snapshotMatches`;
  - a disposable checkout carrying exactly the snapshot's origin and refs;
  - a sanitized environment;
  - raw-null and no-op refusal before rebinding;
  - restore, then prune, then ordered merge, then fill;
  - description and name replay, where **anything unknown is returned as pending, never invented**;
  - R1/R2 composition with frozen timestamps, a foreign-path scan, the manifest and the graph SHA.
- **Steps 6–7 on fixture targets only:** a durable journal, an exclusive lock, an exclusive recovery token, owner
  rollback, dead-owner recovery with manifest reconciliation, and receipts. `publish()` refuses the real live target
  (F3) and anything not declared a fixture.
- **Evidence:** `bun test` 186/186, including 33 F2 cases. **Termination is real** (child processes killed at each of
  seven boundaries), and so is **owner liveness**: a paused live owner refuses a peer, and a paused recoverer holding
  the token refuses a second recoverer. Also covered:
  - failed restore, then retry;
  - receipt failure, then completed recovery;
  - malformed journal; a lock without a journal; an unknown owner;
  - snapshot ref and config invalidation;
  - the exact ref map;
  - raw null, tool failure and no-op refusal;
  - composition refusals and reproducible frozen manifests;
  - name reuse only for identical member sets, uniqueness, and hash-keyed answers.

  `bun run fixtures` 297/297; `bun run check` 19/19.
- **Real-repository run** (`C:/CoWork/outputs/f2-evidence-2026-10-06/`):
  - pass A returned **pending** (46 descriptions, 12 names);
  - after source-derived answers, pass B at `434129c` was `generated` (10 minutes);
  - composition gave 568 files, manifest `8fa47e2d…`;
  - it was **published to a fixture copy**, whose state equals the reviewed manifest;
  - **the real live state was never written** (read-only digest `6f7de514…`).

**Two platform findings, recorded:**
- **Bun 1.1.30 on Windows does not honor `openSync(path, "wx")` or `O_CREAT|O_EXCL`:** it opens and overwrites an
  existing file, while Node refuses. `createExclusive` therefore uses `writeFileSync(..., { flag: "wx" })`, which
  refuses on both. A regression test pins this. **Any repository script relying on `openSync("wx")` under Bun has the
  same exposure.**
- **Under Bun, `process.kill(pid, 0)` reports a missing process only as `errno -4040`, with no `code`.** Owner
  liveness handles both runtimes.

**Not done:** F3 (live publication, runbooks), B-050's disposition. B-050 stays `Applied`; its O1 row stays open.

**Requested of Lane B:** the F2 checkpoint review, and the `D-423` sync candidate `9993bded…`. Note that the F2
evidence graph `584ec8f8…` differs bytewise from it at the same commit; characterize that before any F3 act.

## Lane B D-423 review: F2 boundary, identity and parity gaps — 2026-10-06

Read Lane A answer `304405e` / parent receipt `5194d5f`; implementation `434129c756a94fe826b1e9b25f9151f199b215bc`.
Lane B raises; Lane A answers. D-423 authorizes the inspected work; this review applies no fixes, status or release.
Existing tests independently pass 186/186. Their green result does not cover the counterexamples below.

**Accepted corrections:** prune header now follows D-422; runPrune plans before writing, re-reads persisted state,
and reports completed retirement only after absent-id/link verification. Its failure/dry-run cases are covered.
The §5/U03 source changes keep comparison labels separate from criterion satisfaction and leave DoD boxes unchanged.
F1's bounded-policy receipt stands. D-422 release is recorded at `1a0bf23`; no repeat policy ruling is requested.

**F2-R1 — fixture-only mutation is not consistently enforced.** publish checks its target for exact equality
with the real live target, but not a target containing that directory, nor live state used as staging. A pure
probe returns false for isRealLiveTarget(the live parent) and no containment finding for an ordinary fixture
target with REAL_LIVE_TARGET as staging. That latter path can be renamed by publish. recover has no fixture
or real-live-target guard at all. composeCandidate deletes its staging path before reconstruction without a
protected-live/source/baseline containment check. These exported entry points do not establish D-423's
fixture-only boundary. No live mutation was attempted; source inspection and non-mutating probes establish
the missing preconditions, not damage to the supplied evidence run.

**Draft remedy:** one shared preflight for every mutating F2 entry point, before file creation, deletion,
rename or recovery. Bind an explicit disposable fixture/work root; canonicalize aliases through links;
protect the real live target and its ancestors/descendants from both target and runtime-artifact roles.
Keep staging/work disjoint from source, baseline and target where the role requires it. recover must receive
and verify the same boundary as publish, including journal paths; a boolean fixture declaration alone cannot
establish safe paths. Success: protected target, protected staging, live ancestor, alias and non-fixture
recovery all refuse before any write; isolated intended fixtures still work. Present the correction's fit
under D-423 or a separate amendment before application. No F3 authority is proposed.

**F2-R2 — integer-keyed answers still silently bind unrelated members.** proposeNames prefers member-set hashes
but falls back to answers[k]. Disposable probe: baseline community 7 contains old_member and "Old label";
current community 7 contains unrelated_member; answer {"7":"Old label"} returns that name with no pending
entry. Thus the integer is still accepted as cross-revision identity without any revision/member proof.

**Draft remedy:** accept supplied names by member-set hash. If legacy integer answers are retained, require
the exact current graph revision plus expected member hash; stale/missing provenance stays pending. Reuse
baseline labels only for identical member sets. Success: a recycled integer with different members cannot
bind; renumbered identical members still resolve; duplicate-name refusal remains. A member-set hash proves
exact cohort equality, not durable identity after membership changes or node-id renames.

**F2-R3 — edge-field parity is incomplete.** fragmentParity compares node fields but reduces fragment edges
to source/target/relation keys. A disposable fragment declares confidence 1 and evidence "approved"; the
candidate has the same endpoints/relation but confidence 0 and evidence "wrong". It returns exact 1/1,
diffs empty. This does not meet D-423/v4's all-declared-field requirement.

**Draft remedy:** compare every declared edge field against a matching edge, including nested metadata and
fragment links/edges as applicable. Success: altered or omitted declared metadata refuses; valid fields pass;
parallel relations are matched by their declared content rather than one shared endpoint key. Existing
independent full-field graph review remains valid; the reusable F2 validator is what failed this probe.

**F2-R4 — source invalidation is not checked at publication.** snapshotMatches exists and has unit cases,
but publish receives only a nonempty sourceCommit; after acquiring the lock it checks staging/baseline bytes,
not HEAD, branch, origin, refs or config. The supplied run-f2.mjs also calls publish without a post-generation
snapshotMatches check. A source/ref/config change during generation can therefore leave the tested helper
unused at the boundary where v4/PC1 requires it. The inspected evidence snapshot itself is not alleged to
have changed; the missing integration is the gap. Draft remedy: bind the original source snapshot and
repository to publication, re-check them under the acquired lock immediately before mutation, and refuse
changed/unavailable source without a journal or rename. Success cases must exercise the actual publication
route after HEAD/ref/config invalidation, not only snapshotMatches in isolation.

**G-D423-1 — unchanged node identity does not mean unchanged description.** The current graph module still
says "stage F1" and "F2/F3 are not authorized"; the guard-test description still describes F1 only. At this
revision STAGE is F2 and D-423 authorizes fixture-only F2. replayDescriptions copies old descriptions by id
without checking whether their source/meaning changed. Describing 46 new symbols does not cover changed
existing symbols. This is semantic drift despite clean governed-intent and field checks.

**Draft remedy:** re-review descriptions for changed source symbols, including these two module descriptions.
Replay automatically only with an unchanged source fingerprint, or expose changed descriptions as pending
for independent semantic review. State F2's authorized scope and actual unresolved review gaps accurately;
do not call its present fixture boundary proven. Final graph-byte changes require a new exact-hash receipt.

**Candidate structural evidence accepted, semantic release held:** manual graph
`9993bded0e4c8aa2673eb648cb2a907ed02db699186fa62ae0ce539cdbe0db22` matches all 139 fragments,
5,927 declared node fields and 9,703 edge fields. All 125 member sets/name bindings match the manifests;
13 changed names are supported by members. Raw graph and node-string scans have zero findings under the
accepted scanner policy. The one listed stale test-import node is absent. These are bounded observations.

**F2/manual difference resolved:** fixture hash `584ec8f867d529361abedfe8c16f66e24fd2441688d51272a646b13381122c38`
and manual hash differ only in graph.provenance.observed_at. All 2,211 node records, 4,774 full edge records,
125 memberships and labels match. Substituting that timestamp makes the raw bytes equal. This supports
structural equivalence of those two snapshots, not interchangeability of reviewed hashes or final manifests.

Evidence: `C:/CoWork/outputs/lane-b-d423-review-2026-10-06/REPORT.json`, `PROBES.json`,
`GRAPH-METADATA-DIFF.json`, `LABEL-REVIEW.json`. The real-repository generation, isolated publication and
297/297 fixtures remain Lane A's pinned execution evidence; Lane B did not rerun generation/publication.
The matching fixture snapshot is not an independent acceptance of its publication state machine.

**Stop:** F2 checkpoint not accepted pending R1–R4; semantic graph release held for G-D423-1.
Keep B-050 Applied/O1 open; no F3, live recovery/publication, disposition or push follows this review.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | D-423 scope, prune/§5/U03 corrections, existing tests, graph structural/name evidence and timestamp-only difference characterization | Phase 1: retain revision-specific receipts |
| Approve-with-conditions | F2 and candidate semantic release | Phase 1: fixture boundary, revision-bound name answers, full edge parity, locked source re-check, changed-description review and independent final-hash review |
| Defer | F3, whole prevention, B-050 disposition and B-077 final review | Separate Phase 1 authority, independent proof and individual source acts |
| Reject | Current full F2 sign-off; unbound integer answer; edge-key equality called field parity; stale F1 descriptions called current | Phase 1: apply only the bounded proposed corrections under named authority |

## Lane A — D-424: F2 corrections R1–R4 and G-D423-1, 2026-10-06

Read at `bf6b5fe` (Lane B's review `ecdda94`). **The Judge, 2026-10-06:** "Separate act first" — `D-424`
(`319730e`). Lane A reproduced all four findings before fixing them. Corrected at `593b841`, in the guard and its
tests only.

| Finding | Answer at `593b841` | Proof (`bun test`) |
|---|---|---|
| **R1** fixture boundary | One preflight, `fixtureBoundary(root, roles)`, runs before any create, delete or rename in `publish`, `recover` and `composeCandidate`. It requires a declared fixture or work root that is unrelated to the live target. Every runtime path, in every role (target, staging, backup, old, journal, lock, recovery token, receipts), must sit strictly inside that root and must not alias, contain or sit inside the live target; paths are compared link-resolved. `isRealLiveTarget` now covers the live target's ancestors and descendants. `recover` also checks the journal's own target, old, backup and staging paths before acting. `composeCandidate` also requires staging to be disjoint from the candidate and baseline. The boolean `fixture: true` is gone: `fixture` is the root path | The live parent as target; the live target as staging; a junction alias of the live target as staging and as a target parent; a missing root; staging outside the root; `recover` without a root, on the live target, and with a journal whose old path is outside the root (recovery-required, journal kept); `compose` refusing before reading or deleting (a sentinel outside the root survives, as does the candidate as staging); a live-target probe refused **before** any candidate check. No journal, lock, token or receipt appears beside the live state |
| **R2** integer answers | `proposeNames` binds supplied names by member-set hash only; a renumbered community id never binds | `{6: …, 7: …}` leaves community 6 pending |
| **R3** edge parity | `fragmentParity` compares every declared edge field, with nested metadata compared by content regardless of key order. Parallel relations are matched by declared content, and each saved edge is used once per fragment | Altered `confidence` and omitted declared `evidence` are refused; extra saved fields and key order are not; two parallel relations match, a missing one and a duplicate declaration are each reported |
| **R4** source at publication | `publish` takes `source: { repo, snapshot }` (no separate `sourceCommit`) and refuses a target or staging that overlaps the repository. It re-runs `snapshotMatches` **under the acquired lock, before the journal**. An unavailable source is a mismatch, not an exception. The journal and receipt bind `snapshot.head` | Through the real `publish` route: a HEAD, ref or config change after the snapshot, and a missing repository, are each refused with the live state unchanged and no journal or lock; the release receipt carries the snapshot HEAD |
| **G-D423-1** changed symbols | `replayDescriptions` replays a baseline description only when the symbol's source file is unchanged since the baseline's `lastAnalyzedHead`; a changed or unprovable symbol is pending. The batch-line pattern no longer reads across line ends. The module comment, `refusal()` and the test header now describe F2 and D-424 | A changed file's symbol is pending until answered; an unprovable baseline leaves every file-backed symbol pending |

**Gates:**
- `bun test`: 200/200 (guard 136);
- `bun run fixtures`: 297/297;
- `bun run check`: 19/19 after the sync.

**Sync at `593b841`** (`C:/CoWork/outputs/lane-a-d424-sync-2026-10-06/MANIFEST.md`):
- candidate **`504e6f7a2f0f1c010a507da47954c69afe281f3328eda775a4508917bcc8a64f`**, **UNRELEASED**;
- it supersedes `9993bded…`, which was never released.
- **Descriptions under the D-424 rule:** 80 symbols in the two changed files were held. Lane A reviewed each against
  current source: 14 rewritten (both module descriptions among them), 8 new, and 58 kept because their code is
  unchanged. The basis for each is in `15b-description-basis.json`.
- 0 retired; 139/139 field parity (both the sync check and the guard's full-edge `fragmentParity`); 126 groups;
  0 label mismatches; scanner 0; 580 state files, 0 unknown.
- **Names:**
  - 109 reused from D-422, which Lane B accepted;
  - 9 reused from D-423, Lane A names never reviewed;
  - 8 new, named from their members.

**Not done:** F3, B-050's disposition, any push. The F2 evidence runner in `f2-evidence-2026-10-06` predates the
new `publish` signature (`fixture` root, `source`); a re-run would use it as amended. B-050 stays `Applied`; its O1
row stays open.

**Requested of Lane B:**
- the F2 checkpoint against `D-424` item 2 and its DoD;
- the 22 new or rewritten descriptions and the 58 "kept" judgments;
- the 17 names Lane B has not accepted;
- the exact hash `504e6f7a…`.

## Lane B — D-424 independent review and residual R1/R3 handback, 2026-10-06

### What happened

Read Lane A answer `7d2d576`, D-424 `319730e`, implementing source
`593b841bdeb1cd6fe05374f703d4f37b43a01a87` and the D-424 sync manifest. Lane B raises;
Lane A answers. Review only: no guard repair, graph rebuild/release, header change or whole-row closure.
Existing tests independently pass **200/200**. The sandbox could not initialize Bun's Windows filesystem
environment; the same suite passed with normal filesystem access. This was an execution-environment failure,
not a source finding. Fixture/consistency receipts are recorded separately in the parent continuation.

**Accepted sub-receipts:**
- R1's live target/ancestor/descendant/link protection, declared-root enforcement and candidate/baseline
  disjointness are now present. The source-protection obligation below remains incomplete.
- R2 removes the integer-key fallback; supplied names bind by exact member-set hash. Baseline reuse remains
  exact-set only, duplicate labels pending. This accepts the fix, not a permanent cohort identity claim.
- R3 compares declared nested edge metadata and consumes distinct saved edges; the matching-order case below
  remains. The supplied live graph independently matches every declared field.
- R4 re-checks the bound source snapshot under the publication lock before its journal. Actual-route tests
  cover changed HEAD, refs, config and unavailable repositories; no universal race/prevention claim follows.
- G-D423-1 holds changed-file descriptions pending and fixes the cross-line batch pattern. Reviewed all
  80 supplied descriptions: 14 rewritten, 8 new and 58 retained judgments are supported by current source.
  Prior F1/prune/§5/U03 and D-422 receipts stand; no repeated policy ruling is needed.

### What you need

**D424-R1a — composition can delete caller-source bytes before refusing.** composeCandidate checks staging
against the candidate and baseline, but never against `caller.rootNative` or its Git directory. D-424 item 2
requires work/staging disjoint from source and baseline. Disposable reproduction: a clean Git repository
inside a declared work root has a tracked `source-folder/keep.txt`; use that folder as staging and bind the
repository as caller. Initial fixtureBoundary returns no findings. With valid raw metadata/parity,
composition deletes the sentinel and writes candidate files, then returns `ok:false` at the foreign-path
scan. Git reports the tracked file deleted. No actual project source or live state was mutated.

**Draft fix:** bind the source repository explicitly at composition and check canonical work/staging
disjointness from that repository/Git storage, candidate and baseline before any deletion or write. Refuse
unavailable or unprovable source identity. Keep caller metadata and that bound source consistent; the later
scanner cannot substitute for destructive-path preflight. Success: staging equal to/inside/above source,
or aliasing it, refuses before mutation; source and staging sentinels and source status remain unchanged;
an isolated valid composition still succeeds. Lane A must identify the correction's bounded authority before
applying it; this review supplies a draft only.

**D424-R3a — greedy matching can reject valid parallel edges.** Fragment declarations, in order:
`{source:a,target:b,relation:r}` and the same edge with `confidence:1`. Saved edges: that key with
confidence 1, then confidence 0. A full distinct assignment exists (generic declaration → confidence 0;
specific declaration → confidence 1). The validator consumes confidence 1 for the first generic edge and
reports the specific edge different: exact 0/1. Reordering valid saved edges changes acceptance. This is a
false refusal, not silent metadata corruption, and does not invalidate today's full-field comparison.

**Draft fix:** build compatible-edge sets and require a complete distinct assignment per fragment/key,
instead of first-match consumption. Success: both saved/declaration orderings of the valid overlapping
parallel case pass; changed fields, missing edges and duplicate demands without enough saved edges still
refuse. Preserve the rule allowing additional saved fields. No new implementation is applied here.

**Exact graph semantic receipt accepted:**
`504e6f7a2f0f1c010a507da47954c69afe281f3328eda775a4508917bcc8a64f`, analyzed at `593b841`.
Independent comparison: 139 fragments, 5,927 declared node fields and 9,703 edge fields, zero mismatches;
126 exact memberships/label bindings, zero mismatches; raw graph/node-string scans zero findings under the
accepted bounded policy. The 17 requested labels (communities 0, 1, 6, 7, 11, 17, 19, 46, 55, 61, 66, 70,
71, 80, 84, 99, 112) are supported by their members. All 80 changed-file description judgments are reviewed,
not merely the 22 rewritten/new texts. Descriptions accurately state the implemented stage; this receipt
does not claim the residual source boundary or all future parallel-edge cases are proven.

The graph receipt is separable from F2 checkpoint acceptance. Lane A records any release under its named
authority; Lane B has not changed release state. A later source fix needs its own authorized sync and new
exact-hash review. Candidate `9993bded…` stays unreleased/superseded.

Evidence: `C:/CoWork/outputs/lane-b-d424-review-2026-10-06/REPORT.json`, `LABEL-REVIEW.json`,
`PROBES.json` and `PARALLEL-EDGE-PROBE.json`. The historical real-generation runner predates the changed
API: it is a pinned receipt, not a runnable recipe for the corrected source. Any selected rerun must bind the
fixture root and `{repo,snapshot}` and pin its amended runner/manifest; no generation rerun was performed here.

### What you did instead

Used graph query for discovery, direct source/authority reads, existing tests and disposable counterexamples.
Kept accepted sub-receipts separate from checkpoint, graph release, whole prevention and B-050 disposition.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | R2/R4, changed-description review, bounded R1/R3 improvements and the exact graph semantic receipt | Phase 1: preserve source/hash and evidence limitations; Lane A owns release recording |
| Approve-with-conditions | Complete F2 checkpoint and any subsequent source/graph revision | Phase 1: D424-R1a source protection, D424-R3a complete matching, intended-case proof and final-byte review |
| Defer | F3, whole prevention, B-050 disposition, B-077; retrieval/article work | Their own Phase 1 acts; D-424 explicitly defers retrieval/article |
| Reject | Full F2 sign-off now; refusal after source deletion counted as protection; order-dependent matching counted as complete parity | Phase 1: apply only corrections under named bounded authority |

## Lane A — graph 504e6f7a… released; D424-R1a/R3a received, 2026-10-06

Read at `14cdd46` (Lane B: `b824255`, `bcd0904`, `14cdd46`). Lane A reproduced both residual findings. With the
generic and the specific parallel declaration, the result is `exact 0/1` in one saved order and `1/1` in the
other. `composeCandidate` checks staging against the candidate and baseline only, not the caller's source. Lane
A's earlier wording "all four fixed" overstated R1 and R3; Lane B's correction is accepted.

**The Judge, 2026-10-06:**
- **"Release now."** Graph
  **`504e6f7a2f0f1c010a507da47954c69afe281f3328eda775a4508917bcc8a64f` is RELEASED**, on Lane B's exact-hash
  semantic receipt (`b824255`). It was analyzed at `593b841` and is the live state at this record (580 files,
  manifest `00707b31…`). This is a graph-byte release only: it is not F2 sign-off, not prevention, and not B-050
  disposition. `9993bded…` stays superseded and unreleased.
- **"Fix under D-424"** for D424-R1a and D424-R3a. Both are unmet D-424 item 2 requirements:
  - R1: staging disjoint from the source;
  - R3: parallel relations matched by declared content.

  The paths are the same two (the guard and its tests); there is no F3. The result will be one sync, a new exact
  hash, and Lane B review. Answers follow in a later block.

## Lane A — D424-R1a and D424-R3a answered under D-424, 2026-10-06

Read at `491325c`. **The Judge:** "Fix under D-424". The paths are `scripts/graphify/guarded-rebuild.mjs` and
`scripts/fixtures/graphify-guard.test.mjs` only. Excluded: F3, live publication or recovery, and the evidence-runner
re-run (none was selected). Corrected at `7b51c87`.

| Finding | Answer at `7b51c87` | Proof (`bun test`, actual entry points) |
|---|---|---|
| **D424-R1a** composition source | `composeCandidate` takes `source: { repo, snapshot? }`. A new preflight, `sourceProtection`, runs with the work-root boundary **before any deletion or write**. It resolves the source's top level, Git directory and common Git directory through Git, and refuses staging that equals, contains, sits inside or links to any of them. It also refuses a missing or unreadable source (identity unprovable), a caller root that is not that source, and a caller head that differs from the bound snapshot | A clean repository inside the work root, with a tracked `source-folder/keep.txt`, used as staging in five ways: that folder, the repository itself, its parent, a path inside `.git`, and the folder through a junction alias. Each refuses. `keep.txt` is unchanged, `git status` stays clean, and staging is never created. Also refused: no source, a non-repository source, and a caller root that is not the source. A valid isolated composition (bound to this repository) still succeeds |
| **D424-R3a** parallel edges | `fragmentParity` groups declared edges per fragment and key and finds a **maximum distinct assignment** to compatible saved edges, using augmenting paths (`unassigned`). Each unassigned declaration is one difference. Extra saved fields are still allowed | Lane B's case (a generic declaration plus the same edge with `confidence:1`, against saved edges with confidence 1 and 0) passes for **both saved orders and both declaration orders**. Two saved edges with confidence 0 against a specific demand refuse. Too few saved edges refuse. Earlier changed, missing and duplicate cases still refuse. The live graph's parity is 139/139 under the new matcher |

**Gates:**
- `bun test`: 202/202;
- `bun run fixtures`: 297/297;
- `bun run check`: 19/19.

**Flake noted:** during the work, the existing live-owner test ("a peer is refused while the publishing owner is
alive") timed out twice under load. It then passed 5 of 5 full-file runs and 3 of 3 isolated runs. Its code path is
not touched by these fixes. The cause is unproven. The test now records the child owner's exit, stage, output
and error, so another occurrence shows its cause instead of a 60-second timeout.

**Sync at `7b51c87`** (`C:/CoWork/outputs/lane-a-d424b-sync-2026-10-06/MANIFEST.md`):
- candidate **`1be0d83cdba434e11fb60d94e069ff71b3aac180db95a896d2ab0e1d1cb12d79`**, **UNRELEASED**;
- **baseline:** the released `504e6f7a…`;
- **descriptions:** 82 held, of which 4 rewritten, 2 new and 76 kept;
- **re-clustered to 118 groups:** 107 reuse their reviewed names by identical member set, and 11 are new, named from
  their members;
- every check clean (139/139 by both comparisons, 0 label mismatches, scanner 0, 582 files, 0 unknown).

**Not done:** F3, B-050's disposition, B-077, any push. B-050 stays `Applied`; its O1 row stays open.

**Requested of Lane B:**
- D424-R1a and D424-R3a against their acceptance criteria, which completes the F2 checkpoint review;
- the 6 new or rewritten descriptions and the 76 "kept" judgments;
- the 11 new names;
- the exact hash `1be0d83c…`.

## Lane B — D424-R1a/R3a completed; semantic description handback, 2026-10-06

### What happened

Read `d709e00`, corrections `7b51c87c32c9c797866e3be1ebf3e4835a05714d`, the Judge's release/fix receipt
`491325c` and D-424. Lane B raises; Lane A answers. The two residual code findings are independently
accepted: source/Git-storage protection runs before composition writes, and augmenting paths find a complete
distinct edge assignment. Existing tests independently pass **202/202**, including both intended-case fixes
and the live-owner case in this run. No code repair, live publication, release or row disposition follows.
The 297/297 fixtures are Lane A's pinned receipt at this source; Lane B did not repeat that suite this turn.

**Graph comparison:** candidate
`1be0d83cdba434e11fb60d94e069ff71b3aac180db95a896d2ab0e1d1cb12d79`, analyzed at `7b51c87`.
All 582 state-file hashes match the saved manifest. Independent comparison matches 139 fragments,
5,927 declared node fields and 9,703 edge fields, with zero differences. All 118 member/label bindings match,
and the 11 new labels (#0, 1, 2, 3, 12, 15, 17, 20, 29, 30, 94) are supported by their members.
Bounded raw/node-string scans find no foreign path. Reviewed all 82 held description judgments; the 76
retained and four rewritten texts are supported. Two new texts need the qualifications below.

### What you need

**G-D424b-1 — sourceProtection description promises more HEAD checking than implemented.** Its text says
it refuses a caller root or head "that is not that source". The helper checks HEAD equality only when both
`source.snapshot.head` and `caller.head` exist; it does not read/compare the repository's actual HEAD here.
A pure call binding this repository, its correct caller root and a different full HEAD, without a snapshot,
returns no findings. Source-path protection still works; this is an inaccurate semantic contract, not a
reproduction of the repaired source-deletion case. Publication's separate locked snapshot check stands.

**Draft replacement:** "Composition preflight (D424-R1a): requires a readable bound source repository;
refuses staging that aliases, contains or lies inside its working tree, Git directory or common Git directory;
checks a supplied caller root against that source and, when both heads are supplied, caller HEAD against
source.snapshot.head. Returns findings. It does not independently compare actual repository HEAD here."

**G-D424b-2 — unassigned description conflates completion with the identity of unmatched demands.** It
returns demand **indices**, not demands. Maximum matching size and complete-assignment acceptance are
order-independent; which demand remains unmatched need not be. Example: demands [1,2], one supply [2],
compatibility demand<=supply, returns index [1], leaving demand 2; reverse demands to [2,1], index [1] instead
leaves demand 1. The edge validator's intended acceptance is correct; the diagnostic description overstates it.

**Draft replacement:** "Returns indices of demands left unmatched by a maximum one-to-one assignment to
compatible supplies, using augmenting paths. Maximum matched count and whether a complete assignment exists
do not depend on list ordering; a partial matching's chosen unmatched demands may differ."

**Success for the semantic handback:** Lane A answers these two texts without widening code behavior;
the approved description/merge route preserves fragment fields and reviewed member/name bindings; the new
final bytes/manifest receive independent exact-hash review before release. Do not reuse the prior hash's
acceptance for different bytes. Full semantic release of `1be0d83c…` is held; its structural/name receipts stand.
Released baseline `504e6f7a…` remains a completed historical release, not currency for the newer source.

**Flake limits:** Lane A recorded two prior live-owner timeouts, then five full-file and three isolated passes,
and added child exit/stage/output/error diagnostics. This independent 202-test run passes; the cause remains
unproven. Keep the recurrence trigger: retain those diagnostics plus source/runtime/load and owning-process
records if it fails again; review them before changing behavior or claiming a cause. No mandatory repeated
stress campaign or new closure gate is inferred from this scoped review.

Evidence: `C:/CoWork/outputs/lane-b-d424b-review-2026-10-06/REPORT.json`, `LABEL-REVIEW.json`,
`STATE-REVIEW.json`, `SEMANTIC-PROBES.json`. The historical generation runner still predates source-bound
composition and publication APIs. Update/pin it only under a selected rerun/work order; historical success
is not an executable recipe for current F2.

### What you did instead

Used graph query, direct source/authority reads, existing tests and pure semantic probes. No rebuild,
annotation changes, implementation or header edit. B-050 stays Applied/O1 open. These code sub-findings
are completed; full F2 batch acceptance still needs accurate graph semantics/final-byte review. F3 and
whole-prevention proof remain separate, and graph release cannot dispose B-050 or complete B-077.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | D424-R1a/R3a code receipts, 202 tests, graph structural/name evidence, 80 supported description judgments | Phase 1: retain source/hash and bounded evidence |
| Approve-with-conditions | Complete F2 batch and refreshed graph semantic release | Phase 1: G-D424b-1/2 wording, approved merge route and independent new-final-hash review |
| Defer | F3, whole prevention, B-050 disposition, B-077 and historical-runner rerun | Separate Phase 1 authority and individual proofs |
| Reject | Actual-source HEAD checking or order-invariant unmatched identity inferred from these descriptions; tests/graph release called row closure | Phase 1: use the precise replacements above |

## Lane A — G-D424b-1/2 received; correction plan (not yet applied), 2026-10-06

Read at `7d6c14e` (Lane B: `e8d9839`, `7d6c14e`). **Received:**
- the D424-R1a/R3a code receipts at `7b51c87`;
- the structural and name receipts for `1be0d83c…` (139 fragments, 118 bindings, 582 files);
- 80 of 82 description judgments.

`1be0d83c…` stays **unreleased**.

**Both findings reproduced by Lane A:**
- `sourceProtection` returns no findings for a different caller HEAD when no snapshot is supplied (G-D424b-1).
- `unassigned([1,2],[2])` and `unassigned([2,1],[2])` both return `[1]`, which names a different demand in each
  order (G-D424b-2).

The overstated wording was Lane A's. **Gap Lane B did not name:** the same overstatement sits in the two JSDoc
comments in `guarded-rebuild.mjs`, and graph descriptions are drafted from that source.

**The Judge, 2026-10-06:**
- **"JSDoc + graph, under D-424."**
- **F3 plan: "Not yet."**

**Plan.** Not yet applied; the Judge's guardrail is plan first.
1. Correct both JSDoc comments only, with no behavior change, in `scripts/graphify/guarded-rebuild.mjs`. Then
   `bun test` and `bun run check`, then commit.
2. Sync on the D-409/D-410 route with the D-422 prune order, at that commit. The baseline is the live
   `1be0d83c…` bytes as backed up, with the replay rule unchanged. The two descriptions take Lane B's draft
   replacements, wording normalized:
   - `sourceProtection`: "Composition preflight (D424-R1a): requires a readable bound source repository and refuses
     staging that equals, contains, sits inside or links to its working tree, Git directory or common Git
     directory. It checks a supplied caller root against that source and, only when both are supplied, the caller
     head against the source snapshot's HEAD. It does not read the repository's actual HEAD. Returns findings."
   - `unassigned`: "Returns the indices of demands left unmatched by a maximum one-to-one assignment to compatible
     supplies, found by augmenting paths. The matched count, and whether a complete assignment exists, do not
     depend on list order; which demands stay unmatched in a partial assignment can."

   Every other held symbol is reviewed and kept. Fragment fields and member/name bindings are preserved, and the
   result is a new MANIFEST with an unreleased hash.
3. Hand back here and in B-154 for Lane B's exact-hash review. After acceptance, record the release, then append
   the current DOD-01 graph pointer to B-136. The `9993bded` history stays; no DoD box is checked.

**Kept:**
- the live-owner flake trigger (diagnostics retained; review before any change);
- the historical runner's limit (amend and pin only under a selected rerun).

**Not in scope:** F3, prevention, B-050 disposition, B-077. B-050 stays `Applied`; its O1 row stays open.

## Lane A — G-D424b-1/2 applied; candidate 35541b33…, 2026-10-06

**The Judge, 2026-10-06:** "Judge Approved: Full F2 batch, release of the graph, the B-136 pointer (Per above
plan)". The plan is Lane A's `855f618` block above.
- **Applied now:** steps 1–3.
- **Waiting for Lane B's exact-hash acceptance of the new bytes:** the release, F2 batch completion and the B-136
  pointer (step 4). The approval is not read as a waiver of that review.

**Step 1 — `40429f8`, comment only.** The two JSDoc comments in `scripts/graphify/guarded-rebuild.mjs` now state:
- `sourceProtection`: the caller root must be the source; the head is compared with the snapshot HEAD only when
  both are supplied; the actual HEAD is not read.
- `unassigned`: the matched count and completeness are order-independent; which demands stay unmatched can depend
  on order.

No logic changed. `bun test` 202/202; `bun run fixtures` 297/297.

**Step 2 — sync at `40429f8`** (`C:/CoWork/outputs/lane-a-d424c-sync-2026-10-06/MANIFEST.md`):
- candidate **`35541b337b25d2a16ee237219ee4f3417e668e352c3d8da044a21208cc5b1edb`**, **UNRELEASED**;
- **baseline:** live `1be0d83c…`, verified by backup;
- **descriptions:** 70 held; 2 rewritten with Lane B's replacement texts in normalized wording; 68 kept as the
  Lane B-reviewed `1be0d83c…` text;
- **names:** 116 of 118 groups identical to `1be0d83c…` (names reused); 2 new names (#1 and #17, from members);
- **checks:** 139/139 by both comparisons, 0 label mismatches, scanner 0, 583 files, 0 unknown, `bun run check`
  19/19.

**Step 3 — requested of Lane B:**
- the 2 rewritten descriptions and the 68 "kept" judgments;
- the 2 new names;
- the exact hash `35541b33…`.

**On acceptance, Lane A will:**
- record `35541b33…` as released;
- record the F2 batch (fixture-only F2 under D-423/D-424) as complete;
- append the current DOD-01 graph pointer to B-136, checking no DoD box.

**Not in scope:** F3 ("Not yet"), prevention, B-050 disposition, B-077. B-050 stays `Applied`; its O1 row stays
open.

## Lane B — exact-hash acceptance and F2 checkpoint handback, 2026-10-06

### What happened

Read `1c3f3af`, plan `855f618`, comment-only source `40429f8a60aaa9554fda6ba126d24de670fda1ea`,
and the D-424c manifest. Lane B raises; Lane A answers. The Judge approved release, F2 batch completion and
B-136's pointer after this independent review. That condition is now satisfied; no repeated approval is requested.

**ACCEPTED exact graph SHA-256:**
`35541b337b25d2a16ee237219ee4f3417e668e352c3d8da044a21208cc5b1edb`.
- Independent comparison: 139 fragments; 5,927 declared node fields and 9,703 edge fields; zero differences.
- All 118 community member/name bindings match. The 116 reused cohorts keep their reviewed names. Community
  1's "SM05 Branch and D-410–D-424 Correction Commits" and community 17's "D-412–D-415 P2, Custody, Docket and
  Consumer-Set Commits" are supported by their members.
- Both rewritten descriptions accurately qualify snapshot-HEAD comparison and unmatched-demand selection.
  All 68 retained description strings equal the reviewed backup. G-D424b-1/2 are resolved.
- All 583 state-file hashes equal the submitted final manifest. Analyzed source is `40429f8`; bounded raw
  graph/node-string path scans have zero findings. This is exact-byte acceptance, not universal prevention.

**F2 checkpoint ACCEPTED**, within D-423/D-424's fixture-only scope, combining this semantic receipt with the
already accepted code/intended-case receipts at `e8d9839`. The source diff changes JSDoc only; no logic or
tests changed. Lane A's 202/202 tests and 297/297 fixtures at `40429f8` remain its pinned execution receipts;
Lane B's independent 202-test execution at `7b51c87` remains the behavior receipt. No unnecessary broad
rerun is claimed. Current consistency verification is recorded with the parent handback.

### What you need

Lane A now records the already approved step 4: release these exact bytes, record fixture-only F2 batch
completion, then append B-136's DOD-01 graph pointer with this review/source/hash. Preserve the historical
9993bded entry; check no DoD box. Lane B has not written those receiver records or changed any header.
If submitted bytes change, this acceptance no longer applies to the changed artifact.

Remaining follow-ups are unchanged: F3 is "Not yet"; whole prevention, B-050 Applied/O1 disposition and
B-077 final review remain outstanding. Historical-runner API amendments require a selected rerun; earlier
live-owner flake diagnostics retain their recurrence trigger and unproven cause. Neither is silently declared
resolved by this graph review, nor made into a new gate for the accepted bounded checkpoint.

Evidence: `C:/CoWork/outputs/lane-b-d424c-review-2026-10-06/REPORT.json`, `FINAL-REVIEW.json`,
`LABEL-REVIEW.json`. No implementation, rebuild, graph release, receiver-field edit or push performed.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | Exact 35541b33… graph, G-D424b-1/2 resolution and fixture-only F2 checkpoint | Phase 1: Lane A records already approved release/completion/pointer; no further approval needed |
| Approve-with-conditions | Any later changed graph bytes or selected F3 packet | Separate Phase 1 exact-byte review or bounded work order; not permission now |
| Defer | F3, whole prevention, B-050/B-077 disposition and other child/parent/gate obligations | Their own Phase 1 evidence and acts |
| Reject | Hash acceptance transferred to different bytes, graph/F2 acceptance called prevention, or a pointer called DoD checkoff | Phase 1: preserve the distinct scope and records |

## Lane A — step 4 recorded: graph released, F2 batch complete, B-136 pointer, 2026-10-06

Read at `50ade9a` (Lane B: `1a374a6` exact-hash and F2 checkpoint acceptance; `50ade9a`). **Authority:** the
Judge's "Judge Approved: Full F2 batch, release of the graph, the B-136 pointer (per above plan)" (plan
`855f618`, step 4). Its condition, Lane B's exact-hash acceptance, is met. No further approval was sought.

1. **Graph RELEASED:** **`35541b337b25d2a16ee237219ee4f3417e668e352c3d8da044a21208cc5b1edb`**.
   - Analyzed at `40429f8`; 583 files, manifest `199d466f…`.
   - Accepted by Lane B at `1a374a6`; byte-equal to the live state when recorded.
   - It succeeds the release of `504e6f7a…` (`491325c`). The never-released candidates `1be0d83c…` and
     `9993bded…` stay superseded.
   - This is a graph-byte release only.
2. **F2 batch COMPLETE, fixture-only scope** (`D-423`, corrected by `D-424`):
   - code `4260209`, `4f7675c`, `434129c`, `593b841`, `7b51c87`, `40429f8`;
   - Lane B's code receipts at `e8d9839` and its semantic and checkpoint acceptance at `1a374a6`.

   It does **not** cover:
   - F3 (live publication, recovery or runbook; "Not yet");
   - whole prevention;
   - an amended runner for the historical evidence (only under a selected rerun);
   - a cause for the live-owner test flake (its diagnostics stay as the recurrence trigger).
3. **B-136 DOD-01 pointer appended** in B-136 (this commit). No DoD box is checked.

**Remaining, in dependency order:**
1. A separately authorized F3;
2. then independent whole-prevention proof;
3. then B-050's disposition;
4. then B-077's final review.

B-050 stays `Applied`; its O1 row stays open.

## Lane A — DRAFT: bounded F3 plan (live publication and runbook adoption), 2026-10-06

Read at `6a74c8e`. **The Judge, 2026-10-06:** "Judge Approved: draft the bounded F3 plan." **This is a draft for
Lane B review.** It authorizes nothing and applies nothing. F3 starts only after a Register act (proposed: `D-425`)
names it, with Lane A `Active`.

**Basis:**
- the accepted D3 stage definition (B-154, "F3 — real review-bound publication and runbook adoption");
- contract v4, with both conditions as adopted at `b97f93f`;
- the accepted F1 bounded policy (`D-421`);
- the accepted fixture-only F2 batch (`1a374a6`; recorded at `6a74c8e`);
- the released baseline `35541b33…` (583 files, manifest `199d466f…`).

### 1. Goal

Replace the interim manual sync route (D-409/D-410 with the D-422 prune order) with **one guarded procedure**. The
guard publishes only bytes that Lane B reviewed at their exact hash into the real live target
(`C:/CoWork/myeditorialapp/.graphify`). The publication journal, owned recovery and receipts already proved on
fixtures carry over. The runbooks are amended to name that procedure.

### 2. Paths

The five D3 paths, no sixth:

| Path | F3 work |
|---|---|
| `scripts/graphify/guarded-rebuild.mjs` | Live mode, CLI entry and review-receipt binding (§3) |
| `scripts/fixtures/graphify-guard.test.mjs` | The F3 intended-case matrix (§4) |
| `.claude/skills/sync-docs/SKILL.md` | Runbook adoption (§5) |
| `docs/graph-fragments/README.md` | Runbook adoption (§5) |
| `scripts/checks/docs-drift.mjs` | **Expected unchanged.** The F1 journal check already makes health non-reportable mid-transaction. Touched only if an F3 case proves a defect |

**Gap G-F3-1 (path set versus where the procedure lives):** D3 names SKILL §7 and README §5. The procedure actually
spans SKILL §7 ("merge, never build") and §9 ("Sync the graph"), and README §4 (rebuild, restore, prune, merge) and
§5 (verification). **Draft fix:** the F3 act names those four sections of the same two files. That widens sections,
not paths.

### 3. Design (shared core, live entry checks only)

- **a. One transaction core.** `publish` and `recover` keep a single journal, lock and recovery state machine. Fixture
  mode is unchanged. Live mode adds entry checks only, so every transition stays proved by the existing fixture
  matrix rather than by a copied implementation.
- **b. Live entry checks** (a new `liveEntryFindings`), run before any write:
  - **Target:** the target resolves through the `.graphify` link to exactly the real live target.
  - **Runtime artifacts:** the journal, lock, recovery token, receipts, backup and old copy are the named siblings
    in the target's parent, never inside the target. This is the same layout F1's `transactionJournalPath` and
    docs-drift already read.
  - **Staging:** sits inside a declared work root under the disposable evidence root. It is disjoint from the live
    target, the source repository and its Git directories (the `sourceProtection` rules).
  - **Source:** a bound `{repo, snapshot}`, re-checked under the lock (R4).
  - **Baseline:** the live state's manifest equals the last released manifest. That comes from the newest guarded
    release receipt; for the first run, the explicit accepted value `199d466f…`.
  - **Review receipt:** `{ reviewer: "Lane B", handoffCommit, graphSha256, manifest, sourceHead }`. The guard checks
    that `handoffCommit` exists, that its diff under `docs/handoff/` contains `graphSha256`, and that the staging
    `graph.json` hash and full-state manifest equal the receipt. Any byte change after review refuses, so there is
    no rebind after review.
- **c. CLI entry.** It replaces the refusal for these three verbs only; anything else still refuses.
  - `prepare --work <dir> [--answers <file>]`: pinned-tool check, then source snapshot, `generateCandidate` and
    `composeCandidate`. It writes `MANIFEST.json` with the source, the manifest, the graph SHA and **pending
    semantics**, and stops at pending until reviewed answers are supplied.
  - `publish --work <dir> --review <receipt.json>`: live mode.
  - `recover`: live mode, owned recovery.

  This CLI **supersedes the historical evidence runner**, which stays history and is never rerun.
- **d. Retention.** Backup and old copies are never deleted by the guard. The release receipt lists them, and
  removing them is a person's act.

### 4. Intended-case matrix

All cases run on fixture targets laid out like the live one, with a parent folder and a junction link. Tests never
touch the released root.

| Case | Required outcome |
|---|---|
| Valid reviewed publication through the link layout | Live bytes equal the reviewed manifest; receipt written; journal and lock cleared; docs-drift healthy afterwards |
| Review receipt hash ≠ staging hash; manifest ≠ staging digest; handoff commit missing, or not containing the hash | Refused before any write |
| Baseline ≠ last released manifest (live changed since release) | Refused before any write |
| Staging inside or aliasing the live target, the source or its Git directories; runtime artifact inside the target | Refused before any write |
| Source HEAD, ref or config changed after prepare | Refused under the lock, before the journal |
| Pending semantics at prepare | `prepare` stops; `publish` refuses a work folder whose manifest has pending items |
| Crash at each of the seven boundaries in live layout, then recovery | The same outcomes as F2. docs-drift reports non-health while a journal exists |
| Rename refused by the OS (sharing violation) at either rename | Owner rollback to the backup bytes; evidence kept; **no retry loop** (gap G-F3-2) |
| Peer, second recoverer, unknown owner | The same refusals as F2 |
| Any verb other than prepare, publish or recover | The entry point still refuses |
| All F1 and F2 cases | Still pass, unchanged |

### 5. Runbook adoption

SKILL §7/§9 and README §4/§5 name one procedure:
1. `prepare`;
2. reviewed answers, if pending;
3. Lane B exact-hash review in the handoff;
4. `publish` with that receipt;
5. verify (fieldcmp, labels, `check-update`, `bun run check`).

**Recovery:** on any refusal or failure, `recover`, keep the evidence, and report non-health. **No manual raw
publish.** If the guard cannot publish, the prior graph stays and drift is reported, per D3.

The manual D-409/D-410 route is retired as the normal path once F3 is accepted. **Judge decision G-F3-3:** whether it
is kept as a named emergency fallback (recommended: no fallback; preserve and report instead).

### 6. Bootstrap and DoD

- **The first real publication is the F3 change's own sync.** The F3 commit (code, tests and runbooks) changes
  governed docs, so its graph is prepared at that commit, Lane B reviews the exact hash, and `publish` releases it to
  the real live target. That run is D3's "first successful independently reviewed actual publication". Its receipt,
  post-state manifest and journal cleanup are the proof.
- **DoD:**
  - the §4 matrix passes;
  - `bun test` and `bun run fixtures` pass, and `bun run check` passes 19/19;
  - the first real publication succeeds and is verified;
  - Lane B independently accepts the F3 checkpoint and that release.
- **Stop:** on a failed candidate, review or transaction, keep the evidence and use owned recovery. Do not retry by
  hand.

### 7. Exclusions

- no push, no new dependency, no global Graphify edit, no Git hook, no CI change;
- the raw tool stays defective;
- the lock protects cooperating guarded runs only. A concurrent raw `graphify update` is **not** prevented; the
  runbooks say so (gap G-F3-4);
- no B-050 disposition, no B-077 review, no DoD checkoff.

Whole prevention (D3's whole-unit DoD: the complete v4 matrix proved independently) is reviewed after F3, before
any disposition.

### 8. Gaps, draft fixes, and what each lane must watch

| Gap | Draft fix |
|---|---|
| G-F3-1 Sections | Name SKILL §7/§9 and README §4/§5 in the act |
| G-F3-2 Windows rename of a junction target (handles held by editors or antivirus) | No retry; owner rollback; injected-failure test plus a real junction-layout fixture |
| G-F3-3 Manual route after F3 | Judge choice; recommended: retire it, no fallback |
| G-F3-4 Concurrent raw tool writes | Documented limit, not prevention; the prevention proof must address or bound it |
| G-F3-5 Baseline source for the first run | Explicit `199d466f…` from the accepted release; later runs read the newest guarded receipt |
| G-F3-6 Live-owner test flake | Keep the diagnostics; a recurrence during F3 stops the stage until reviewed |
| G-F3-7 Historical runner | Superseded by the CLI; kept as history only |

**Requested of Lane B:** review this draft (scope, design, matrix, DoD, gaps) before any F3 act is proposed to the
Judge. B-050 stays `Applied`; its O1 row stays open.

## Lane B — F3 draft review: repair the review/publication boundary before selection, 2026-10-06

### What happened

Read Lane A's draft at `199528c` against D-424, the accepted D3/v4 conditions, the current guard and both runbooks.
Effective request: consolidate completion receipts, challenge the bounded F3 plan, draft remedies and decision
criteria, then hand back to Lane A without implementation. Lane B raises these findings; Lane A answers them.
The graph release, fixture-only F2 completion and B-136 DOD-01 pointer were actually recorded at `6a74c8e`.
That supersedes the earlier statement that those three records were pending; no DoD box was checked.

The F3 draft is useful but **not ready for a construction work order**. `D-425` is a proposal, not an issued act.
The following are design findings, not claims that an unimplemented F3 has already failed a runtime test.

### What you need

| Finding / failure mechanism | Draft fix for Lane A's next revision | Required evidence / refusal criterion |
|---|---|---|
| F3-R1 — review is a hash substring, not acceptance. A rejected, quoted or historical hash in any handoff diff passes the proposed predicate. Recovery can also lose approval: the current prepared journal omits `acceptance`, and recovery writes `opts.acceptance ?? null`. | Specify one structured independent acceptance record, its exact handoff path/locus and commit, affirmative disposition and F3 scope. Bind graph hash, complete state-manifest identity, analyzed source, baseline/release identity and pending-semantics completion. Persist that immutable tuple in the prepared journal and propagate it to normal and recovered release receipts. Validate the original tuple; never rebind it after review. | Positive acceptance; rejection/defer/quotation/history-only records refuse; wrong source/scope/baseline/manifest refuse. Crash after verified state but before receipt must recover with the original acceptance, never a caller-supplied replacement or null approval. Provenance follows the independent review channel; a shared Git identity or `reviewer` string alone does not establish independence. |
| F3-R2 — committing the required review advances the source. `snapshotMatches` compares exact HEAD and the ref map; a review committed on the source branch after `prepare` changes both. The proposed normal sequence therefore refuses its legitimate publication. | Resolve this contract decision explicitly before selection. Recommended draft: distinguish immutable analyzed source from publication HEAD; permit only a proven fast-forward containing exclusively the named handoff review/receipt paths. Pin the source tree, branch/origin/upstream/config and all other refs; reject every other change. This is a narrowly proposed amendment to source validation, not permission to weaken existing R4/v4. Alternatively specify a review workflow that demonstrably preserves every existing snapshot input. | End-to-end `prepare` -> independent committed review -> `publish` succeeds under the chosen rule. Code/governed-doc changes, dirty tree, unrelated handoff changes, branch/origin/config or other-ref changes still refuse before the journal. Preserve the original analyzed source and record publication HEAD separately; never silently re-snapshot or regenerate the reviewed graph. Judge chooses the rule; Lane B re-reviews it. |
| F3-R3 — pending-answer resumption and bootstrap gates are underspecified. `generateCandidate` expects a fresh empty work directory; rerunning the proposed `prepare --work` sequence there is not a defined resume. The source/runbook commit itself makes docs drift stale until its first publication. | Define fresh, pending, ready, reviewed, published and failed work states, manifest/answers schema, command exit results and an explicit resume procedure. Resume against the frozen inputs, or refuse changed inputs and require a new candidate/review. Separate pre-publication fixture/source readiness from post-publication full health. | Exercise the public command sequence, not only calls to the transaction core, with pending names/descriptions, resume, interrupted prepare and changed answers/source. No pending work can publish. Before first sync report the expected docs-drift failure honestly; require 19/19 after successful publication. No check bypass or premature all-green claim. |
| F3-R4 — automatic recovery on every refusal and guaranteed rollback overstate the state machine. A peer's lock refusal is not recovery ownership; an OS sharing violation can also block restoration. Staging on an evidence root is not itself proof of the same physical volume after link resolution. | State the outcome table: refusal before transaction leaves the target unchanged; owned failure attempts the existing recovery; verified completion may retain reviewed bytes; blocked/ambiguous restoration retains journal, locks and evidence as recovery-required/non-health. Never recover another owner's run automatically. Verify same resolved volume and all role boundaries before publication. | Both rename failures plus a blocked restoration; peer/unknown owner refuses without takeover; cross-volume/aliased staging refuses before target mutation. Junction-layout/injected-error fixtures prove those cases only. If claiming real Windows held-handle behavior, supply an actual held-handle case; otherwise retain that limitation. No unconditional promise that the previous graph is already restored. |
| F3-R5 — the fifth path is not actually unchanged if the manual route is retired. `docs-drift.mjs` still tells users to rerun raw `hook-rebuild` for missing/unreachable/stale analyzed heads. | Include those messages explicitly in the existing fifth path's F3 scope. SKILL sections 7/9, README sections 4/5 and health-check guidance must all route to guarded preparation, review, publication or owned recovery. Retire the historical evidence runner as an executable instruction; preserve its history. | Check every actionable sync/recovery message against the selected runbook. A failing health check must not recommend bypassing the guard. Judge's manual-route choice is reflected consistently; no sixth implementation path, dependency, hook or CI change is implied. |
| F3-R6 — abbreviated bootstrap hash and "newest receipt" do not define baseline selection. | Pin the complete accepted 583-file path/hash map (`33-final-state-manifest.json` in the D-424c evidence), its digest algorithm/serialization and full digest, graph hash, source and `6a74c8e` release locus. Later select a valid target-bound successful release in the predecessor chain, not arbitrary newest file/time. | Independently compare the complete live inventory before first publication. Refuse missing/ambiguous/truncated baselines, changed inventory, wrong target, rejected/failed receipts and broken predecessor links. Different serializers of the same map are not interchangeable digests; pin or explicitly convert once before review. |

**Normalize the roles:** runtime journal/lock/recovery/receipt/backup/old artifacts are named siblings of the
live folder. Staging belongs to the declared disposable work root, outside the live and source trees, on the
validated volume. Do not shorten this to "all working files are siblings" or move staging into the live folder.

**Disposition of Lane A's G-F3-1..7:** G-F3-1 is confirmed; name all four sections of the same two paths.
G-F3-2 needs F3-R4's qualified outcomes. G-F3-3 is a Judge policy choice, with no fallback recommended.
G-F3-4 remains an explicit concurrency limit: guard locks do not exclude raw writers, and documenting that
limit cannot establish whole prevention or revive the rejected B-050 risk-acceptance closure reason.
G-F3-5 needs F3-R6's full baseline binding. G-F3-6 retains the existing recurrence stop and diagnostic trigger;
its cause is still unproved. G-F3-7 is supported, subject to F3-R3/R5's replacement procedure being complete.

**Chief Editor decisions to put into the revised act, after Lane B's readiness review:**
1. Name SKILL sections 7/9 and README sections 4/5, and explicitly include fifth-path guidance changes.
2. Choose no manual fallback (recommended), or defer that fallback to a separately bounded later work order.
3. Choose and bound the review/source compatibility rule in F3-R2. An unchanged exact-HEAD rule combined with
   a new review commit on that same branch cannot satisfy the current planned sequence.
4. Name fixture readiness, first actual review-bound publication, post-publication health and independent
   checkpoint acceptance as separate artifacts. They do not authorize whole-prevention or B-050 closure.

No new Lane C finding or acceptance is supplied by these sources. Lane C's CI surface remains excluded.
Lane A's unsupported guarantees identified here must be corrected; Lane B's draft recommendations remain
proposals until answered and, where needed, selected by the Judge. Do not manufacture a three-lane consensus.

**Lane A follow-up / construction and verification artifacts:**
1. Answer F3-R1..6 in this continuation and revise the one current F3 draft; do not create duplicate trackers.
2. Supply the structured review/journal/receipt schemas, source compatibility rule, full bootstrap identity,
   command state/exit contract, recovery outcome table and expanded test matrix. These are construction inputs.
3. Hand back the revised exact revision for Lane B's bounded readiness review, then present the concrete Judge
   choices and proposed bounded act. Drafting acceptance is not implementation authority.
4. Only after the Judge's Register act, propagated scope and Lane A Active: implement the named five-path unit,
   obtain fixture/source review and preserve the expected pre-sync docs-drift status without claiming 19/19.
5. Prepare the candidate at the final authorized source; independently review its exact bytes and acceptance
   tuple; publish through the selected guard; verify manifest, fragment fields, descriptions, group bindings,
   branch/worktree metadata, journal cleanup and full health. Keep those receipts for independent F3 acceptance.
6. Stop at that checkpoint. Independent whole-v4 prevention proof precedes B-050's source-specific disposition,
   then B-077's final review. Separate children and parent/gate closure retain their own acts and evidence.

### What you did instead

Reviewed local source and committed handoffs; no implementation, live mutation, recovery, graph rebuild,
Register act, receiver answer-field edit, tracker closure or push. Current graph release is 35541b33…,
analyzed at `40429f8`; the diff from that source to `199528c` contains only handoff paths, so this review adds
no governed-intent drift and calls for no graph rebuild. Consistency verification is recorded in B-154.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | Recorded exact graph release, fixture-only F2 completion and B-136 pointer; F3 goal and bounded five-path direction | Phase 1: preserve receipts and their exclusions |
| Approve-with-conditions | Revised F3 implementation plan | Phase 1: Lane A answers F3-R1..6, Lane B reviews readiness, Judge settles scope/policy/source rule and issues the bounded act before construction |
| Defer | F3 construction/publication, whole prevention, B-050/B-077, independent children, parent closure and Gate 2 | Phase 1: respective authority, proof and closure acts; draft is not selection |
| Reject | Current F3 draft as construction-ready; hash mention as acceptance; guaranteed rollback; bypass guidance; F3 or a documented raw-writer limit as whole prevention | Phase 1: repair the plan and prove its bounded outcomes |

## Lane A — F3 plan, revision 2: answers to F3-R1..R6 (DRAFT for Lane B readiness review), 2026-10-06

Read at `678404b` (Lane B: `632b2cc`, `678404b`). **This revision replaces the `199528c` draft as the one current F3
plan**, which stays as history. It authorizes nothing and applies nothing. Lane A reproduced the three
source-checkable findings:
- the prepared journal carries no acceptance, and `recover` writes `opts.acceptance ?? null` (F3-R1);
- `docs-drift.mjs` tells users to run `npx graphify hook-rebuild` (F3-R5);
- a review committed after `prepare` fails `snapshotMatches` (F3-R2).

Lane A's earlier guarantees ("rollback", "docs-drift unchanged", "hash in a handoff") are withdrawn.

**The Judge, 2026-10-06:**
- F3-R2 source rule: **"Handoff-only fast-forward."**
- G-F3-3: **"No fallback."**

### 1. Paths and sections

The five D3 paths, no sixth:
- `scripts/graphify/guarded-rebuild.mjs`
- `scripts/fixtures/graphify-guard.test.mjs`
- `.claude/skills/sync-docs/SKILL.md` **§7 and §9**
- `docs/graph-fragments/README.md` **§4 and §5**
- `scripts/checks/docs-drift.mjs` (**its fix-it messages**, F3-R5)

### 2. Roles

- **Runtime artifacts:** the journal, lock, recovery token, receipts, backup and old copy are named siblings of the
  live folder, in its parent.
- **Staging:** sits in the declared disposable work root, outside the live and source trees, on the **same resolved
  volume** as the live folder.

### 3. Answers

**F3-R1 — the acceptance record.**
- **Lane B writes one block** in `docs/handoff/B-050-…`, headed `### F3 acceptance record`, holding one fenced JSON
  object:

  `{ "kind": "graphify-f3-acceptance", "disposition": "Accept", "scope": "F3 publication", "reviewer": "Lane B",
  "graphSha256", "manifest": { "algorithm": "guard-treeDigest-v1", "digest", "files" }, "analyzedSource",
  "baseline": { "releaseLocus", "manifestDigest" }, "pendingSemantics": 0 }`

- **The guard reads** that block at the named commit, `git show <commit>:docs/handoff/B-050-….md`, and takes the
  **last** such block. It refuses when:
  - the disposition is anything other than `Accept`, or the scope is other than `F3 publication`;
  - any field is missing;
  - the hash, manifest, source or baseline differs from the work folder;
  - `pendingSemantics` is not 0;
  - the hash appears only in prose or quotation.
- **The tuple, plus the record's commit and blob hash, is frozen** into the prepared journal. The normal and the
  recovered release receipt both copy it **from the journal**; `recover` takes no acceptance argument.
- **Independence** is evidenced by the review channel (a Lane B-authored handoff block in a Lane B commit, per the
  SOP), not by a `reviewer` string or the Git identity alone. This is stated as a limit.

**F3-R2 — the source rule ("Handoff-only fast-forward").**
- `prepare` freezes the **analyzed source**: HEAD, tree, branch, origin, upstream, config and the full ref map.
- `publish` accepts the publication HEAD only when **all** of these hold:
  1. it is a fast-forward descendant of the analyzed HEAD (`merge-base --is-ancestor`);
  2. every commit in `analyzed..publication` touches only `docs/handoff/**`;
  3. the tracked tree outside `docs/handoff/` equals the analyzed tree;
  4. the branch, origin, upstream and config are unchanged;
  5. every ref other than the current branch is unchanged;
  6. the working tree is clean.
- The analyzed source and the publication HEAD are both recorded. The graph is never re-snapshotted or regenerated.
- This amends `snapshotMatches`'s use at publication only. R4 still refuses every other change, under the lock and
  before the journal.

**F3-R3 — work states and the bootstrap gate.**
- `work/STATE.json` holds `fresh | pending | ready | reviewed | published | failed` and the frozen inputs: the
  source snapshot, tool pins, baseline identity, and the hash of the answers file.
- **`prepare --work <new-dir>`** refuses a non-empty folder. It exits `0` with `ready` (no pending items), or `3` with
  `pending` and writes `PENDING.json` (ids and member-set hashes).
- **`prepare --resume <dir> --answers <file>`:**
  - It re-checks the frozen inputs. A changed source, pins or baseline gives `failed` (exit `4`): a new folder and a
    new review are needed.
  - Otherwise it applies the answers. Descriptions bind by id and names by member-set hash, the existing D-424
    rules.
  - If nothing is left pending, it composes and moves to `ready`.
- **Answers that change after `ready`** invalidate the folder.
- **An interrupted `prepare`** leaves `failed`, and is never resumed.
- **`publish`** requires `reviewed`, which is set by `publish` itself once it has validated the acceptance record.
  Every other state refuses with exit `2`.
- **Bootstrap gate:** after the F3 commit and before its first publication, docs-drift reports the expected stale
  state, and the handoff reports exactly that. **"19/19" is claimed only after a successful publication.**

**F3-R4 — outcomes, not guarantees.**

| When | Outcome |
|---|---|
| Refused before the transaction (entry checks, lock held, state, source) | Target unchanged; no journal; exit `2` |
| Owned failure after the journal | The owner attempts the existing recovery |
| Restore succeeded | `rolled-back` or `restored` |
| Restore blocked or state ambiguous | `recovery-required`: the journal, lock and evidence are kept, health stays non-reportable, exit `5` |
| Verified, but the receipt or cleanup failed | `recovery-required`; a later owned recovery completes it with the **journal's** acceptance |
| Peer or unknown owner | Refused, never taken over |

- Before any write, the guard checks the resolved volume of staging and the live folder, and every role boundary.
- Real held-file-handle behavior on Windows is **not claimed** unless a real held-handle case is added; injected
  failures and the junction layout prove only what they simulate.

**F3-R5 — no route around the guard.**
- The docs-drift messages for a missing, unreachable or stale analyzed head point to:
  - `guarded-rebuild prepare → Lane B review → publish`;
  - or `recover` when a journal exists.
- SKILL §7/§9 and README §4/§5 name the same procedure. The manual D-409/D-410 route is retired with **no fallback**:
  if the guard cannot publish, the prior graph stays and drift is reported.
- The historical evidence runner is retired as an instruction and kept as history.
- G-F3-4 stays an explicit limit: the lock does not exclude raw writers. That is not prevention.

**F3-R6 — the bootstrap identity, fully pinned.**
- **Baseline:** released graph
  `35541b337b25d2a16ee237219ee4f3417e668e352c3d8da044a21208cc5b1edb`, analyzed at `40429f8`, released at
  `6a74c8e` (B-050).
- **Full map:** 583 paths, `C:/CoWork/outputs/lane-a-d424c-sync-2026-10-06/33-final-state-manifest.json`. That file's
  SHA-256 is `c31145252ae5e3eb5df49bd5783ef826d77b935f20b2d28e53de95452820ecad`. Lane A re-hashed the live state today
  and found it equal to that map.
- **Two serializations of the same map**, each pinned:
  - `hashdir`: SHA-256 of `JSON.stringify(map)` = `199d466f…8032891`;
  - guard `treeDigest` (`guard-treeDigest-v1`, SHA-256 of `JSON.stringify(Object.entries(map).sort())`) =
    `1add761f98aa5aa9917f56280d7bf91939913631540fc65d922693b0ddaf2f9a`.

  **F3 uses `guard-treeDigest-v1` only.** This conversion is pinned once, here, before review.
- **Later baselines** follow the predecessor chain. Each guarded release receipt names its target, its acceptance
  locus and its predecessor manifest. A run uses the receipt whose manifest equals the live state and whose chain
  reaches this bootstrap. It refuses a missing, ambiguous, truncated, rejected, failed or broken-chain receipt, and
  never picks the "newest file".

### 4. Test matrix (additions to every F1 and F2 case)

All cases use fixture targets in the live layout (parent folder plus junction link), never the released root.
- **Acceptance record:**
  - a valid record publishes;
  - a rejected, deferred, quoted-only or historical record refuses, as does a wrong scope, source, baseline, manifest
    algorithm or digest, or pending items;
  - a crash after `verified` recovers with the journal's acceptance.
- **Source rule:**
  - publishing after a committed handoff-only review succeeds;
  - each of these refuses before the journal: a code or governed-doc commit; a handoff commit that also touches
    another path; a dirty tree; a branch, origin, upstream or config change; another ref moved; a non-fast-forward.
- **Work states:** pending, then resume, then ready; changed answers, source or pins; an interrupted `prepare`;
  `publish` from every non-`reviewed` state.
- **Outcomes:** both renames failing; a blocked restore; a peer or unknown owner; staging on another volume or
  aliased.
- **Baseline:** a missing, truncated or changed map; the wrong target; a broken predecessor chain; a mismatched
  serializer.
- **Messages:** every fix-it message in the three files matches the runbook.

### 5. Construction and verification artifacts

| Artifact | Built in | Verified by |
|---|---|---|
| Acceptance-record schema and reader | Guard | Matrix rows 1–3 and Lane B's own record |
| Journal and receipt tuple | Guard | Crash, recovery and receipt cases |
| Source rule | Guard | End-to-end prepare, committed review, publish |
| `STATE.json` and exit-code contract | Guard CLI | Public-command cases |
| Outcome table | Guard plus runbooks | Rename, restore and owner cases |
| Bootstrap identity and predecessor chain | Guard plus the first receipt | Baseline cases and the first publication |
| Runbook and message alignment | SKILL, README, docs-drift | The message check |

### 6. Sequence and stops

1. Lane B readiness review of this revision.
2. Lane A presents the Judge's bounded act: proposed `D-425`, with these paths and sections, "no fallback", the
   source rule, and four separate receipts (fixture readiness, first real publication, post-publication health,
   independent F3 acceptance).
3. Only then: build, with Lane A `Active`.
4. `prepare` at the final authorized source, Lane B's acceptance record, `publish`, then full verification.
5. Lane B accepts the F3 checkpoint. **Stop.**

The whole-v4 prevention proof, then B-050's disposition, then B-077's final review each follow as their own acts.
No push, dependency, hook or CI change. B-050 stays `Applied`; its O1 row stays open.

**Requested of Lane B:** a readiness review of this revision.

## Lane B — F3 revision 2 readiness: accepted clarifications and three residual fixes, 2026-10-06

### What happened

Read revision 2 at `1708752`, replacing the `199528c` draft for this review. Lane B raises; Lane A answers.
The handoff records the Judge's choices as "Handoff-only fast-forward" and "No fallback"; carry these into the
proposed bounded act rather than asking for them again. They do not issue D-425 or authorize construction.
No new Lane C evidence is present. This review accepts planning clarifications, not unimplemented behavior.

| Original finding | Lane A answer / independently checked fact | Current review disposition |
|---|---|---|
| F3-R1 Acceptance binding | Structured acceptance and immutable journal -> normal/recovered receipts replace substring matching | Direction accepted; F3-R1a below remains before readiness |
| F3-R2 Source/review cycle | Per-commit handoff-only fast-forward, equal outside-handoff tree, stable other refs/config and clean tree; separate analyzed/publication HEAD | Planning answer accepted under the recorded Judge choice; include this explicit amendment to D-424 R4 in the bounded act and prove it later |
| F3-R3 Work/bootstrapping | Fresh/pending/ready/reviewed/published/failed, resume, frozen inputs and honest pre-sync drift | Bootstrap ordering accepted; F3-R3a below remains before readiness |
| F3-R4 Recovery/volume | Qualified recovery-required outcomes, no takeover, same resolved volume, no real held-handle claim from simulation | Main correction accepted; align remaining wording through F3-R4a |
| F3-R5 Guidance/scope | All five paths now explicit, SKILL sections 7/9, README sections 4/5, health prompts included; no fallback | Planning answer accepted, subject to F3-R4a wording and later message verification |
| F3-R6 Baseline/chain | Full map-file hash and guard serializer/digest pinned; predecessor chain replaces newest-file selection | Baseline independently accepted; retain the existing per-run receipt identity and test recovered-chain selection |

**Read-only baseline verification:** the map-file SHA-256 equals
`c31145252ae5e3eb5df49bd5783ef826d77b935f20b2d28e53de95452820ecad`. Its 583 entries equal the current live map.
Both yield guard digest `1add761f98aa5aa9917f56280d7bf91939913631540fc65d922693b0ddaf2f9a` using
`SHA256(JSON.stringify(Object.entries(map).sort()))`. The other serialization yields full digest
`199d466fa4290f68ca9241d202451c449317b946e31f98126f48695dd8032891`. Use only the selected guard algorithm for F3.
This checks existing bytes; it does not publish, generate or mutate a graph.

### What you need

These are continuations of the existing findings, not new tracker entries or an expanded implementation scope.

| Residual / failure criterion | Draft fix for the current plan | Construction artifact and independent success test |
|---|---|---|
| F3-R1a — selecting the last acceptance block from the complete file at a commit can select a historical block unchanged by that commit. The declared historical-record refusal is not established. The example is a shape sketch, not valid JSON/schema with field types. | Bind one exact unquoted block/locus and blob to a review commit in the allowed analyzed-source -> publication history. Require that commit's own B-050 change to introduce that affirmative acceptance record; do not select an inherited last block. Supply valid JSON plus required types/enums, full hashes, counts and algorithm; refuse malformed/duplicate/ambiguous records. Keep independent actor provenance a channel requirement, not an authentication claim from Git identity. | Typed record schema and parser contract. A new correct Lane B record accepts; a later commit that only inherits an old block, prose/quotation, duplicate records/keys, malformed field types and a receipt outside the allowed history refuse. The journal and recovery still copy the same approved tuple. |
| F3-R3a — ready cannot become reviewed through the stated commands. `prepare` exits ready; `publish` requires reviewed, refuses every other state, and is itself the only stated setter of reviewed. Also a killed process cannot guarantee it writes failed. | Define `publish` as accepting ready plus a valid acceptance record, validating source/bytes/baseline again under its own lock, then transitioning ready -> reviewed -> publication. Reviewed re-entry must revalidate and follow the existing transaction/recovery rules, never republish blindly. Specify how interrupted prepare is recognized on the next entry and refused/classified failed; do not require the killed process to record its own death. | Correct public-command transition/exit table and durable work manifest. Fresh -> pending -> resume -> ready -> valid committed review -> publish succeeds. Ready with missing/invalid review refuses; pending/fresh/failed/published refuse; termination during prepare cannot appear ready or be resumed as complete. Capture the selected source/pin/baseline/answer identity in every state. |
| F3-R4a — revision 2's no-fallback paragraph still says the prior graph stays whenever the guard cannot publish. Its refusal table says no journal even for a peer's already journaled transaction. Those statements contradict the qualified recovery outcomes. | Say: refusal before this run's transaction leaves the target unchanged and creates no journal for this run; an existing peer journal remains untouched. After owned mutation, report restored, completed-reviewed or recovery-required according to the actual state. No fallback means no bypass, not guaranteed restoration. Use that wording everywhere, including health guidance. | One outcome/exit/message table. Entry refusal preserves target and any peer evidence; blocked restore retains the owner's evidence and non-health; verified recovery retains accepted bytes and original approval. No message asserts rollback before its manifest is verified. |

**Judge-ready decision breakdown:**
The existing writer uses `release-<runToken>.json` for both normal and recovered release: it already reuses
the same path, rather than creating competing release files. Preserve that behavior and bind the new tuple
identically on rewrite. Cleanup failure -> recovery -> next baseline selection remains a required verification
case, not an additional demonstrated readiness defect or permission to widen scope.

- Carry the already recorded source rule and no-fallback choice forward; do not reopen them by implication.
- Scope remains the five existing implementation paths and the four named runbook sections. Register/tier
  propagation is a separately recorded governance obligation, not an unnoticed sixth implementation path.
- After Lane A answers these three continuations and Lane B accepts the exact revised plan, present the bounded
  act with pre-publication fixture/source readiness, exact-byte acceptance, actual publication, post-state health
  and independent checkpoint acceptance. Do not select a circular command contract or claim 19/19 before sync.
- Construction inputs are the typed acceptance/journal/receipt schema, command transition table, source rule,
  full baseline/chain contract, outcome table and test matrix. The corresponding negative/crash evidence and
  exact-hash receipts are verification artifacts. A plan containing these artifacts is not proof they work.

### What you did instead

Used Graphify query, direct governed-document/code comparison and read-only live/manifest hashing. No build,
code/runbook change, graph sync/publication/recovery, Register act, receiver answer-field edit, closure or push.
Governed graph source remains `40429f8`; changed paths through `1708752` are handoff-only. No rebuild is due.
The parent ledger and current consistency result are recorded once in B-154.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | Recorded Judge policy choices, F3-R2 planning answer, expanded five-path/runbook scope, qualified recovery direction and independently matching bootstrap | Phase 1: incorporate in the revised bounded plan/act; preserve proof limits |
| Approve-with-conditions | F3 revision 2 as a basis for the final plan | Phase 1: Lane A answers F3-R1a/R3a/R4a; Lane B independently reviews the exact revision |
| Defer | Proposed D-425 selection, F3 construction/publication, whole prevention and subsequent closures | Phase 1: readiness, bounded Register authority and each unit's own proof/act |
| Reject | Revision 2 as construction-ready; ready/reviewed circularity; inherited block as a new review; unconditional prior-state guarantee; a draft answer as implementation evidence | Phase 1: apply the three draft plan fixes before selection |

## Lane A — F3 plan, revision 3: answers to F3-R1a, F3-R3a and F3-R4a (DRAFT for Lane B readiness review), 2026-10-06

Read at `8c745af` (Lane B: `da7fee0`, `8c745af`). **Revision 2 (`1708752`) stands as the current plan, except that its
F3-R1 acceptance selection, its F3-R3 command contract, and its F3-R4/R5 outcome wording are replaced by the three
sections below.** Lane B's accepted parts carry forward unchanged:
- the five paths and four sections;
- "Handoff-only fast-forward" (an explicit amendment of D-424 R4 at publication, to be stated in the act);
- "No fallback";
- same-volume staging;
- the bootstrap: map `c3114525…`, guard digest `1add761f…`, `guard-treeDigest-v1`;
- the predecessor chain, with the existing `release-<runToken>.json` path reused for normal and recovered releases.

Nothing is applied. All three findings are confirmed against revision 2's own text.

### F3-R1a — the acceptance record is the one the review commit introduces

- **Input:** `publish --work <dir> --review <commit>`.
- **Commit position:** `<commit>` must lie in the allowed history `analyzedHEAD..publicationHEAD`. That range is
  handoff-only and fast-forward under the source rule.
- **Selection:** `git diff <commit>^ <commit> -- docs/handoff/B-050-*.md` must **add exactly one complete block**,
  every line of it new in that commit:
  - a heading line `### F3 acceptance record`;
  - then one fenced `json` block.

  The guard refuses:
  - a block inherited unchanged from an earlier commit;
  - two or more added blocks;
  - a block added inside a quotation (`>`);
  - prose that mentions a hash.
- **Recorded:** the commit, the file path, the blob hash at that commit, and the block's line span.
- **Strict parsing:** the block text must equal `JSON.stringify(record, null, 2)` of its own parse. This canonical
  form refuses duplicate keys, reordered or extra keys, comments and trailing commas. The required record, with
  exactly these keys in this order:

```json
{
  "kind": "graphify-f3-acceptance",
  "version": 1,
  "disposition": "Accept",
  "scope": "F3 publication",
  "reviewer": "Lane B",
  "workId": "00000000-0000-4000-8000-000000000000",
  "graphSha256": "<64 lowercase hex>",
  "manifest": {
    "algorithm": "guard-treeDigest-v1",
    "digest": "<64 lowercase hex>",
    "files": 583
  },
  "analyzedSource": "<40 lowercase hex>",
  "baseline": {
    "releaseLocus": "<40 lowercase hex>",
    "algorithm": "guard-treeDigest-v1",
    "digest": "<64 lowercase hex>"
  },
  "pendingSemantics": 0
}
```

- **Field rules:**
  - `kind`, `version` (1), `disposition` ("Accept"), `scope` ("F3 publication") and both `algorithm` values are
    fixed literals.
  - `reviewer` is the string "Lane B". Independence is a channel requirement (a Lane B-authored handoff block),
    **not** proved by this string or by the Git identity.
  - `workId` is a UUID equal to the work folder's.
  - Hashes are full-length lowercase hex.
  - `files` is a positive integer equal to the staging count.
  - `pendingSemantics` is exactly 0.
  - Every value must equal the work folder's frozen identity.
- **Carried through unchanged:** the validated tuple (record plus locus) is frozen into `STATE.json` and the prepared
  journal. The normal and the recovered release receipt copy it from the journal. `recover` takes no acceptance
  input.

### F3-R3a — the command transitions (no circularity)

`work/STATE.json` is durable (written via `writeDurable`). Every state carries `workId` and the frozen identity:
source snapshot, tool pins, baseline (locus and guard digest) and the answers-file hash.

| From | Command | Success → | Refusal or failure → |
|---|---|---|---|
| (new, empty dir) | `prepare --work <dir>` | It writes `preparing` with its owner record, generates, then sets `pending` (exit 3, `PENDING.json`) or `ready` (exit 0) | A non-empty dir refuses (exit 2) |
| `preparing` | any command | — | Owner alive: refuses (2). Owner dead or unknown: **classified `failed` by this entry** (exit 4). It is never resumed and never shown as ready |
| `pending` | `prepare --resume <dir> --answers <file>` | `preparing`, then `pending` (3) or `ready` (0) | Changed source, pins or baseline: `failed` (4) |
| `ready` | `publish --work <dir> --review <commit>` | **Under the publication lock:** source rule, acceptance record (F3-R1a), staging bytes and live baseline are validated again. Then `reviewed` is written with the frozen tuple, then the transaction runs; the outcome follows the table below | Any validation failure: refused, **state stays `ready`** (2) |
| `reviewed` (re-entry) | `publish --work <dir> --review <same commit>` | Only if no journal exists and the live state still equals the baseline. Everything is validated again, then the transaction runs | A journal exists: refused, use `recover` (2). A different review commit: refused (2) |
| `ready` with a changed answers file | any command | — | `failed` (4) |
| `pending`, `fresh`, `failed` or `published` | `publish` | — | Refused (2) |
| any | `recover` | Per the outcome table | Per the outcome table |

`published` is terminal.

### F3-R4a — one outcome, exit and message table (replaces revision 2's no-fallback paragraph and refusal row)

| Situation | Outcome | Exit | Message rule |
|---|---|---|---|
| Refused before **this run's** transaction (entry checks, state, source, record, baseline, lock held by a peer) | This run wrote no journal, and the target is unchanged by this run. **Any existing peer journal, lock and evidence are left untouched** | 2 | "refused before publication; nothing written by this run" |
| Owned failure after this run's journal | The owner attempts the existing recovery and reports the **verified** result below | per result | No rollback claim before its manifest is verified |
| Restore verified (the target's manifest equals the backup) | `restored` or `rolled-back` | 6 | "restored: live equals the prior release" |
| Verified publication; receipt or cleanup failed, then recovered | `completed-release`: the reviewed bytes stay, with the **original** approval | 0 after recovery | — |
| Restore blocked or state ambiguous | `recovery-required`: journal, lock and evidence kept; health non-reportable | 5 | "recovery required; the live state is not verified" |
| Peer or unknown owner at `recover` | Refused; never taken over | 2 | — |

**"No fallback" means no bypass of the guard. It does not mean guaranteed restoration.** The no-fallback paragraph
in SKILL §7/§9 and README §4/§5, and every docs-drift fix-it message, use only these outcome statements.

### Linked verification cases (added to revision 2's matrix)

- **Acceptance:**
  - a new record in a valid handoff-only commit accepts;
  - each of these refuses: an inherited block in a later commit, two added blocks, a quoted block, prose only,
    non-canonical JSON (duplicate key, extra or reordered key, wrong type), a wrong literal or `workId`, and a commit
    outside `analyzed..publication`;
  - the journal and both release receipts hold the identical tuple.
- **Commands:**
  - the full path `fresh → pending → resume → ready → committed review → publish → published` succeeds;
  - `ready` with a missing or invalid review refuses and stays `ready`;
  - `publish` from pending, fresh, failed or published refuses;
  - a `prepare` killed mid-run (child process) is classified `failed` on the next entry and never resumed;
  - `reviewed` re-entry with a journal refuses.
- **Outcomes:**
  - an entry refusal while a peer journal exists leaves the peer's files byte-equal;
  - a blocked restore exits 5 with the evidence kept;
  - a restore claims "restored" only after the manifest is verified;
  - cleanup failure, then recovery, then the next run selects that release as its baseline through the chain.

**Requested of Lane B:** a readiness review of this exact revision (revision 2 plus these three replacements).
After that, Lane A presents the bounded Register act. B-050 stays `Applied`; its O1 row stays open.

## Lane B — revision 3 readiness: prior findings answered; ownership condition before the act, 2026-10-06

### What happened

Read `10c32ce`: the current plan is revision 2 with revision 3's three explicit replacements. Lane B raises;
Lane A answers. This is independent planning review, not a graph-publication acceptance record or code proof.
No F3 implementation or issued D-425 exists in the reviewed source.

| Finding | Revision 3 answer | Independent planning verdict |
|---|---|---|
| F3-R1a Historical acceptance | Exact review commit in allowed history must introduce one complete unquoted record; typed fields, work ID and locus carried through the journal | Answer accepted as a planning remedy, with schema enforcement clarification below |
| F3-R3a Circular command flow / interrupted prepare | Ready plus review enters publish, revalidates under lock, then writes reviewed; preparing marker makes interruption visible | Circularity resolved; accept that remedy. Dead-or-unknown handling needs F3-R3b below |
| F3-R4a Restoration / peer journal promises | Qualified outcome/exit/message table, peer evidence retained, restoration only after verified manifest, no fallback is no bypass | Planning remedy accepted; carry the complete outcome table into the bounded act/tests |

Thus the three earlier answers are received and reviewed; they are not implementation completions or a whole
B-050 disposition. Revision 3 is **accepted with the following conditions before construction authority**.

### What you need

**F3-R3b — unknown preparation owner is not proved dead.** Revision 3's `preparing` row permits another entry
to classify the work `failed` for both dead and unknown owners. The existing `ownerState` deliberately returns
unknown for missing process-start evidence, a different host or unavailable liveness evidence. A read-only
probe of the current live Node process with a missing start field returned `unknown`; unknown can be alive.
Rewriting that owner's work state can race its ongoing prepare. This is a source-backed ownership gap, not
a reproduced F3 implementation failure.

**Draft replacement for the preparing row:**
- Owner alive: refuse with exit 2 and leave work bytes unchanged.
- Owner unknown: refuse with exit 2, retain work/owner evidence unchanged, and report "preparation ownership
  cannot be established". Do not resume, mark failed, replace the owner or take over.
- Owner proved dead: only after an exclusive work-state claim and a re-check of the same preparing run token
  and dead-owner evidence may the entrant classify that preparation failed (exit 4). Never resume its partial
  candidate. Competing entrants do not both write its state.
- Unreadable/torn ownership evidence is unknown, not evidence of death. Every prepare/resume state mutation
  must respect the same exclusive work ownership. Use the existing ownership/exclusive-create primitives;
  no additional repository implementation path is proposed.

**Required cases:** alive and unknown owners keep work bytes identical; missing-start evidence for a live
process does not permit mutation; dead owner becomes failed under one claim; two entrants cannot both claim;
interrupted or malformed ownership evidence never becomes ready. These supplement the existing public-command
and no-takeover tests, rather than replacing them.

**Schema enforcement clarification (F3-R1a):** `text === JSON.stringify(JSON.parse(text), null, 2)` rejects
duplicate keys/non-canonical formatting but does not itself reject extra keys or a different key order.
Read-only examples with an extra key and reordered keys both satisfied that equality. Enforce the plan's
exact ordered keys and types separately at the top level and in `manifest`/`baseline`, then compare canonical
text. The placeholders in the example illustrate shape; actual acceptance must contain real full hashes and
the frozen work identity. Required tests exercise canonically formatted extra/reordered keys as well as
duplicate keys, malformed types and wrong literals. This clarifies the already stated exact-schema rule;
it does not change the chosen receipt schema or expand scope.

**Complete the exit table during act drafting:** ordinary successful publication is exit 0 with published
state, accepted receipt, verified target and cleared journal/lock; an owned aborted-live-unchanged recovery
retains the prior verified manifest and reports its actual outcome. Do not omit existing F2 outcomes or route
them through a generic restored message. Never print "nothing written" for preparatory/work/lock writes;
say "this run did not publish or create a transaction journal" when that is what was verified.

**Lane A follow-up:** acknowledge F3-R3b and incorporate the replacement, explicit schema checks and complete
outcome rows into the same bounded plan/act draft. Hand back the exact locus for Lane B's condition check.
No broad new planning cycle or new Judge policy question is needed. Carry the recorded handoff-only
fast-forward/no-fallback choices and accepted five-path scope forward. After conditions are accepted, present
the concrete D-425 proposal; do not implement until the Judge's Register act and tier propagation.

### What you did instead

Used Graphify query, direct source/plan comparison and two read-only counterexamples. No runtime source or
runbook edits, actual publish/recover call, graph generation/rebuild, Register act, receiver answer edit,
tracker closure or push. Governed source remains `40429f8`; changes through `10c32ce` are handoff-only, so
no graph sync is due. Consistency and parent completion tracking are recorded once in B-154.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | Planning remedies for F3-R1a/R3a/R4a and carried-forward scope, source policy, no fallback and baseline | Phase 1: preserve construction-versus-proof distinction |
| Approve-with-conditions | Revision 3 readiness for the bounded act | Phase 1: Lane A corrects F3-R3b and states explicit schema/outcome checks; Lane B checks the exact incorporated text before act selection |
| Defer | F3 construction/actual publication, whole prevention and B-050/B-077/child/parent/gate decisions | Phase 1: their own authority, verified artifacts and acts |
| Reject | Unknown as dead; formatting equality as complete schema validation; planned cases as executed proof; approval as construction authority | Phase 1: apply the stated contract checks |

## Lane A — F3 plan, revision 3b: conditions answered (F3-R3b, schema checks, full outcome table), 2026-10-06

Read at `e4f1b7a` (Lane B: `8cb6081`, `e4f1b7a`). Lane A receives Lane B's acceptance of the three revision-3
remedies. They are accepted as planning remedies, not as implementation. **The current plan is revision 2, with
revision 3's replacements, as amended by the three items below.** Everything else carries forward unchanged: the
Judge's choices, the five paths and four sections, the baseline and the chain. Nothing is applied.

### 1. F3-R3b — the `preparing` row (replaces revision 3's row)

Lane A confirms the finding: `ownerState` returns `unknown` when start-time evidence is missing, the host differs,
or liveness cannot be read. A live process can be `unknown`.

| `preparing` owner | Outcome |
|---|---|
| Alive | Refused, exit 2. Work bytes unchanged |
| **Unknown**, including unreadable or torn ownership evidence | Refused, exit 2. Work and owner evidence unchanged. Message: "preparation ownership cannot be established". **Never** resumed, marked failed, replaced or taken over |
| **Proved dead** | The entrant takes an exclusive work claim (`work/.claim`, through `createExclusive`). It then re-checks the **same** `preparing` run token and the dead-owner evidence, and only then sets `failed` (exit 4) and releases its claim. The partial candidate is never resumed. A second entrant that cannot take the claim is refused (exit 2) |

**Every prepare and resume state write** happens under that same exclusive work claim (`createExclusive` plus
`releaseOwned`, the existing primitives). No new path.

**Cases:**
- an alive owner, and an unknown owner (including a live process with a missing start field), each leave the work
  bytes identical;
- a dead owner becomes `failed` under exactly one claim;
- two concurrent entrants cannot both claim;
- interrupted or malformed ownership evidence never becomes `ready`.

### 2. Acceptance schema enforcement (clarifies F3-R1a)

Lane A confirms the finding: the canonical-text equality alone accepts an extra key or a reordered key that is
correctly formatted. Validation therefore runs in this order, and any failure refuses:
1. `JSON.parse` succeeds.
2. **Exact key lists, in order:**
   - **top level:** `kind, version, disposition, scope, reviewer, workId, graphSha256, manifest, analyzedSource,
     baseline, pendingSemantics`;
   - **`manifest`:** `algorithm, digest, files`;
   - **`baseline`:** `releaseLocus, algorithm, digest`.

   `Object.keys` must equal each list exactly.
3. **Types and literals:**
   - **strings:** `kind` = "graphify-f3-acceptance"; `disposition` = "Accept"; `scope` = "F3 publication";
     `reviewer` = "Lane B"; both `algorithm` values = "guard-treeDigest-v1";
   - **integers:** `version` = 1; `files` a positive integer; `pendingSemantics` = 0;
   - **formats:** `workId` a UUID; `graphSha256` and the digests are 64 lowercase hex characters; `analyzedSource`
     and `releaseLocus` are 40 lowercase hex characters.
4. **Canonical text:** the block text equals `JSON.stringify(parsed, null, 2)`. This catches duplicate keys and
   formatting.
5. **Values:** every value equals the work folder's frozen identity. Placeholders never pass.

**Cases:** correctly formatted extra and reordered keys (top level and nested), a duplicate key, a wrong type, a
wrong literal, and a placeholder value each refuse.

### 3. Full outcome, exit and message table (replaces revision 3's table)

| Command and situation | Outcome | Exit | Message (verified fact only) |
|---|---|---|---|
| `prepare` complete | `ready` | 0 | — |
| `prepare` or resume with items left | `pending` (`PENDING.json`) | 3 | — |
| `prepare` with changed frozen inputs, or a proved-dead preparer | `failed` | 4 | — |
| Any entry refused (state, owner, source, record, baseline, lock held by a peer) | Refused. The target is unchanged by this run; any peer journal, lock and evidence are untouched | 2 | "this run did not publish or create a transaction journal". **Never** "nothing written", because work, claim or lock files may have been written |
| `publish` succeeds | `released`: state `published`, receipt with the accepted tuple, target verified equal to the reviewed manifest, journal and lock cleared | 0 | "published: live equals the reviewed manifest" |
| Owned failure, recovery finds the live state never changed | `aborted-live-unchanged`: the prior verified manifest is retained | 7 | "not published: live still equals the prior release" |
| Owned failure, old copy restored and verified | `restored` | 6 | "restored: live equals the prior release" (only after the manifest check) |
| Owned failure, reviewed bytes set aside and old copy restored, verified | `rolled-back` | 6 | as above |
| Verified publication; receipt or cleanup failed, then recovered | `completed-release`: the reviewed bytes stay, with the journal's original approval | 0 | "published (completed by recovery)" |
| Restore blocked, or state ambiguous | `recovery-required`: journal, lock and evidence kept; health non-reportable | 5 | "recovery required; the live state is not verified" |
| `recover` with no journal and no lock | `nothing-to-recover` | 0 | — |
| `recover` against a peer or unknown owner | Refused; never taken over | 2 | as the refusal row |

Every F2 outcome keeps its own row; none is folded into a generic "restored". The runbooks' no-fallback paragraph
and the docs-drift messages quote only these messages.

**Requested of Lane B:** a condition check of this exact block. On acceptance, Lane A presents the concrete D-425
proposal to the Judge, with paths, sections, the source-rule amendment, no fallback, tests, exclusions, tier
applicability and the five separate receipts. Nothing is implemented before the Register act. B-050 stays
`Applied`; its O1 row stays open.

## Lane B — revision 3b condition check accepted; present the bounded act, 2026-10-06

### What happened

Read `7f27384` against Lane B's `8cb6081`/`e4f1b7a` conditions. Current plan means revision 2 plus revision 3's
named replacements plus revision 3b's three amendments. Lane B raises/reviews; Lane A answers. **The requested
condition check passes as planning review.** No remaining blocker was identified within these conditions.
This is not a `graphify-f3-acceptance` record for publication, an implementation checkpoint or a Register act.

### What you need

| Condition / clarification | Revision 3b answer checked | Tracking disposition |
|---|---|---|
| F3-R3b Unknown versus dead preparer | Alive/unknown work stays unchanged; only proved-dead owner can be classified failed after exclusive claim and same-token/liveness re-check; prepare/resume writes use exclusive ownership | Answer independently accepted for the plan; original interrupted/unknown/concurrent cases remain implementation obligations |
| F3-R1a Schema enforcement clarification | Exact ordered top-level/nested keys, types/literals/formats, canonical text and frozen-value equality are separate mandatory checks; placeholders refuse | Planning clarification satisfied; parser/refusal tests remain owed |
| F3-R4a Full outcome/message clarification | Successful release, aborted-live-unchanged, restored, rolled-back, completed-release, recovery-required and nothing-to-recover are distinct; messages claim only verified facts and preserve peer evidence | Planning clarification satisfied; CLI mapping and transaction/recovery evidence remain owed |

All prior accepted planning remedies and the recorded Judge choices carry forward. F3-R1..R6 and their reviewed
continuations now have accepted planning answers at the cited revisions. That closes this **plan-review batch**
only; it does not close B-050, its O1 obligation, any parent row or a DoD criterion. Do not change the header to
Verified on the strength of this review.

**Practical construction/verification boundaries to retain in D-425:**
- `work/.claim` is a work-root runtime artifact, not a sixth repository implementation path. It must be
  disjoint from source/live state. If a claim remains held or abandoned, failure to acquire it means refuse
  and retain evidence; proof that a preparer died does not authorize replacing that claim. Test this alongside
  the successful proved-dead/available-claim case. A new candidate in a new work root is not resuming partial work.
- Schema comparisons must guard malformed/non-object nested values as well as extra/reordered/duplicate keys.
  The record's exact locus/commit introduction and tuple identity remain required, not just valid JSON.
- Keep F2's shared transaction outcomes and ownership protections intact. The CLI's numeric exits must be
  tested against those outcomes; an unknown recovery owner or existing journal must never produce a health claim
  or token takeover. A restore is reported only after the manifest check.
- Semantic/group-name inputs retain member-set identity rather than bare community integers. Approved source
  changes still require ordered fragment re-merge and exact-byte review; no policy choice permits stale labels.

These clarify the carried-forward boundaries/tests, not new readiness blockers or changes to the selected policy.
The old historical tracker debt and the raw-writer/flake limits are not additional work in this plan batch.

**Lane A next step:** receive this acceptance and present one concrete proposed D-425 act naming the accepted
plan revisions, five paths, four sections, explicit publication-only D-424 R4 amendment, no fallback, cases,
exclusions, D-54 tier applicability and the five separate receipts. No repeat of the two settled policy questions
or another broad plan-revision round is required. The Judge may accept/reject that act; implementation still
waits for its Register record, propagated bounded scope and Lane A Active.

### What you did instead

Used Graphify query, source/plan comparison and read-only released-state verification. No code/runbook edit,
actual prepare/publish/recover, graph rebuild, Register act, receiver answer-field edit, tracker closure or push.
The live 583-file map equals the pinned guard digest `1add761f98aa5aa9917f56280d7bf91939913631540fc65d922693b0ddaf2f9a`;
graph hash remains `35541b337b25d2a16ee237219ee4f3417e668e352c3d8da044a21208cc5b1edb`.
Governed source is `40429f8`; subsequent changed paths through `7f27384` are handoff-only. No sync is due.
Current consistency and parent-first decision guide are recorded once in B-154.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | Revision 3b condition answers and composite F3 plan readiness; Lane A may present D-425 | Phase 1: drafting/presentation only; preserve construction and proof obligations |
| Approve-with-conditions | Selecting/executing the concrete bounded F3 unit | Phase 1: Judge's Register act, propagated scope, Lane A Active; then each independent readiness/release/checkpoint receipt |
| Defer | Actual F3 work, whole prevention, B-050/B-077, other children/parents, historical tracker debt and Gate 2 | Phase 1: their own authority and evidence/acts |
| Reject | Plan acceptance as build permission, planned cases as passing evidence, dead owner as claim-replacement permission or F3 as whole prevention | Phase 1: preserve the reviewed boundaries |

## Lane A — F3 plan review complete; D-425 issued, 2026-10-06

Read at `7420c27`. Lane A receives Lane B's condition check (`3578fe9`, `7420c27`). **The F3 plan-review batch is
complete**: revision 2, with the revision 3 replacements and the revision 3b amendments. Planned tests remain
implementation obligations. B-050 stays `Applied`; its O1 row stays open.

**The Judge, 2026-10-06:** "Issue D-425 now". Registered as `D-425` (§5.14e250), with paths, sections, the
publication-only amendment of `D-424` R4, no fallback, exclusions, tiers and the five ordered receipts.

Lane B's carried-forward boundaries (`3578fe9`) are construction inputs:
- `work/.claim` is a work-root runtime artifact; a held or abandoned claim means refuse and keep the evidence;
- nested schema values are guarded against malformed and non-object input;
- the F2 outcomes and ownership protections are kept;
- names bind by member-set identity.

**Next:** Lane A builds within the five paths, then hands back **receipt 1** (fixture and source readiness) for Lane B
review. No candidate is prepared or published before that review.

## Lane A — D-425 receipt 1: F3 built; fixture and source readiness for Lane B review, 2026-10-06

**Authority:** `D-425` (`43ccebe`, §5.14e250). Lane A is `Active`. **Implementing commit:** `8b3d0da`, five paths only:
- `scripts/graphify/guarded-rebuild.mjs`
- `scripts/fixtures/graphify-guard.test.mjs`
- `scripts/checks/docs-drift.mjs` (fix-it messages)
- `.claude/skills/sync-docs/SKILL.md` §7/§9
- `docs/graph-fragments/README.md` §4/§5

Nothing has been prepared or published, and the real live state has not been written.

### What was built, against the accepted plan (revision 2, plus 3, plus 3b)

| Contract | Construction in `guarded-rebuild.mjs` |
|---|---|
| Live entry over the shared core | `publish`/`recover` take `live: { liveTarget, workRoot, validate }`. `liveEntryFindings`: the target resolves to the configured live target; staging is inside the work root, disjoint from the live target, the source and its Git directories, and on the same volume. Fixture mode is unchanged, and still refuses the real live target, its ancestors and descendants |
| Acceptance record (F3-R1/R1a) | `parseAcceptance`: exact ordered keys (top level, `manifest`, `baseline`), then types and literals, then canonical text. `acceptanceAt`: a single-parent commit inside `analyzed..publication` must itself add exactly one complete `### F3 acceptance record` json block to B-050. The locus records the commit, path, blob and lines |
| Journal and receipts | The prepared journal carries `acceptance`, `publicationHead`, `predecessor` and `manifestAlgorithm`. The normal **and** the recovered release receipt are both built only from the journal (`releaseReceipt`). `recover` takes no acceptance |
| Source rule (F3-R2; amends D-424 R4 at publication) | `publicationSourceFindings`: fast-forward; single-parent commits touching only `docs/handoff/`; the outside tree, branch, origin, upstream, config and other refs unchanged; clean tree |
| Work states (F3-R3/R3a/R3b) | `prepareWork` / `resumeWork` / `publishWork` / `recoverLive` over a durable `STATE.json` under an exclusive `work/.claim`. `preparing` with an alive or unknown owner refuses with the work unchanged; only a proved-dead owner, re-checked by run token, becomes `failed`. `publish` goes from `ready`, validates under the publication lock, writes `reviewed`, then runs the transaction |
| Baseline (F3-R6) | `BOOTSTRAP` = graph `35541b33…`, 583 files, `guard-treeDigest-v1` `1add761f…`, locus `6a74c8e…`. Later runs use `selectBaseline` over the receipts' predecessor chain; a missing, ambiguous or broken chain refuses |
| Outcomes (F3-R4/R4a) | `EXIT`/`exitFor`/`OUTCOME_MESSAGE`: 0, 2, 3, 4, 5, 6, 7 as in revision 3b. Refusals say "this run did not publish or create a transaction journal" |
| CLI | `node scripts/graphify/guarded-rebuild.mjs prepare|publish|recover`, against the real live target only (the repository's `.graphify` must resolve to it). Any other verb refuses (exit 2) |
| Runbooks and guidance (F3-R5) | SKILL §7/§9, README §4/§5 and the three docs-drift fix-it messages route only to the guarded procedure, with no fallback. No raw `npx graphify hook-rebuild` instruction remains in the three files. The member-set comparison stays part of Lane B's exact-hash review, and the runbooks say so |

### Evidence (fixture and source only)

- `bun test`: **219/219**, guard file 189. The new D-425 groups:
  - **acceptance:** valid, then nine malformed forms; inherited, duplicated, quoted, prose-only and out-of-range
    records;
  - **source rule:** handoff-only passes; code, mixed, dirty, config, other-ref and non-fast-forward changes refuse;
  - **baseline:** bootstrap, changed map, ambiguous, broken chain;
  - **work states, end to end:** fresh → pending → resume → ready → committed review → publish → published, then the
    chain selects that release; a wrong record keeps `ready`; publish from fresh, pending or failed; changed answers
    or source; alive, unknown and torn ownership; a held claim; a dead owner fails once; a real child-process kill
    during `prepare`;
  - **outcomes:** a peer journal kept byte-equal; restored (exit 6); blocked restore (exit 5); receipt failure then
    `completed-release` with the journal's original acceptance; the exit-code table;
  - **messages:** checked against the runbooks.

  Every case runs on fixture live layouts (a parent folder plus a junction). **Generation and composition are
  injected fakes in the command cases.** The real generation and composition paths are covered by the F2 cases and
  will be exercised for real at receipt 2.
- `bun run fixtures`: **297/297**.
- `bun run check`: **18/19**. `docs-drift` reports the **expected** stale graph (analyzed `40429f8`, HEAD `8b3d0da`;
  D-425 and its paths are governed changes). Under D-425 item 5, 19/19 is claimed only after the first guarded
  publication (receipt 4).

**Not claimed:**
- real Windows held-handle behavior;
- exclusion of raw `graphify` writers;
- a cause for the live-owner flake (it did not recur in these runs);
- the prevention proof.

B-050 stays `Applied`; its O1 row stays open.

**Requested of Lane B (receipt 1):** review `8b3d0da` against the accepted plan and D-425. **On acceptance,** Lane A
runs `prepare` at the final authorized source (this commit, or a later handoff-only head) and hands Lane B the work
folder's identity for the exact-byte acceptance record (receipt 2). Lane B commits that record in B-050 under the
`### F3 acceptance record` heading, and its review commit is passed to `publish --review` (receipt 3).
## Lane B — D-425 receipt 1 review: four implementation gaps, 2026-10-06

### What happened

Read `5d5c957`, implementing `8b3d0da`, authority `43ccebe`/D-425 and the accepted composite plan. The previous
statement that D-425 was only proposed is historical: it is now issued with Lane A Active. Lane B raises;
Lane A answers and applies fixes within its existing bounded unit. This review makes no source changes.
**Receipt 1 is not accepted yet.** Do not prepare the real candidate or proceed to receipt 2 on this review.

Independent `bun test`: **219 passed, zero failed**, 642 assertions. Lane A's 297/297 fixture result remains
its separately identified receipt. F3 command cases inject generation/composition, as Lane A disclosed;
passing them does not prove the real command bridge or omitted boundary cases. Disposable probes below
used only `C:/CoWork/outputs/lane-b-d425-boundary-XWML90`; no real live graph was written.

### What you need

| Finding / evidence | Draft fix within D-425's existing paths | Success/refusal evidence required before receipt 1 acceptance |
|---|---|---|
| F3-C1 Work-root preflight comes after writes. `prepareWork` creates the directory and `attempt` copies the baseline before a work/source/Git boundary check. `resumeWork`/`publishWork` create `.claim` before validating that boundary. A fixture work root inside `source/.git` created STATE and a baseline copy and called generation; it ended failed, not refused before writes. | Share a work-root preflight across prepare/resume/publish, before mkdir, claim or generation. Resolve aliases, require the authorized disposable root, and keep all work roles disjoint from trusted source/Git and live state. Do not treat eventual composition/publication refusal as protection of earlier writes. | Source root, source Git directory, live root/ancestors/descendants, outside-disposable and link aliases refuse before any write/generation. Valid disposable work still runs. Compare sentinel trees and assert the generator was never called for rejected roots. |
| F3-C2 Public caller/target is not bound to work state. `cli` checks its own repo's live link, then calls `publishWork` without passing that trusted repo/target. The publisher uses `s.repo`/`s.liveTarget` from STATE as both actual and configured target; equality is therefore with a stored value rather than the production live target. This is a code-path finding, not a live exploit probe. | Pass trusted caller and target context from CLI; reject a STATE source or resolved target that differs before any claim/transaction write. Fixture APIs may bind an explicit isolated test context, but the production CLI must not obtain its authority from mutable work JSON. Recheck under the publication lock. | Public command rejects copied/altered STATE with another source or target, even when the target is an identical baseline copy and hashes match. Fixture-context tests remain isolated; no production target override is exposed. |
| F3-C3 Real resume loses the pinned CLI path. `prepareWork` passes `pins.cli` to the attempt, but default `resumeWork` passes `d` with undefined CLI and does not repeat the actual pin check. `runGraphify` receives `[undefined, ...args]`; a read-only bridge probe exited 1 with MODULE_NOT_FOUND for `undefined`. The fake tool in command tests hides this. | Resolve and verify the installed pinned CLI again at resume; compare actual tool inputs with the frozen contract and supply the verified CLI to the real generation bridge. Refuse changed/unavailable pins before generation, never trust a replacement path in STATE or silently rebind. | Default prepare -> pending -> resume bridge gets a real verified CLI string; modified/unavailable pins refuse. Exercise the bridge through the public command path without a fake that ignores CLI arguments, on disposable source/state only. |
| F3-C4 Reviewed state is written before actual staging-byte validation. The live `validate` closure compares acceptance to stored ready metadata and writes reviewed; the shared core hashes staging afterwards. A fixture with staging altered after the review returned refused/exit 2, target unchanged, but STATE became reviewed, contradicting ready-on-validation-refusal. | Complete actual staging hash/count/graph and baseline validation under the lock before writing reviewed, or defer that transition until the core's pre-journal validation succeeds. Preserve the ready state on validation refusal; never restore it over an active transaction. | Post-review byte/count changes refuse before journal and keep ready; invalid acceptance/source/baseline does likewise. Valid review reaches reviewed then publication. Termination around the transition preserves the original review/ownership and recovery contracts. |

**Probe artifacts:** `C:/CoWork/outputs/lane-b-d425-boundary-XWML90/EVIDENCE.json` records C1: generationCalls 1,
workCreated/stateCreated/baselineCopiedInsideSourceGit true, tracked source still clean. `ADDITIONAL-EVIDENCE.json`
records C4: refused, ready -> reviewed, fixture live unchanged; and C3's missing-CLI bridge result. Both declare
realLiveTargetUsed false. C2 remains explicitly static evidence. No failed probe is presented as passing proof.

**What is guaranteed to fail as written:** the default real resume reaches the bridge without its CLI path.
The observed C1/C4 outcomes violate their pre-write/state-transition contracts. C2 is an unchecked authority
binding requiring a negative test; do not overstate it as a reproduced production mutation.

**Lane A follow-up:** answer C1..C4 once in this continuation, apply guard/fixture corrections under D-425 without
adding paths/dependencies, and hand back the exact new implementing commit plus targeted negative/default-bridge
evidence. Preserve retained F1/F2 cases and rerun affected checks. A scope change is stated separately; no repeat
Judge authorization is requested for an in-scope repair. Receipt 1 must be independently accepted before real
prepare; candidate acceptance/publication/health/checkpoint remain separate later receipts.

### What you did instead

Read governed source and the issued act, reviewed code and independently ran existing tests plus isolated probes.
No app build, source/runbook fix, real prepare/publish/recover, graph rebuild, Register act, receiver answer-field
edit, tracker closure or push. D-425/source/runbook changes make docs-drift stale at analyzed `40429f8`; this is the
expected pre-publication state, not a reason to bypass receipt 1 or manually rebuild. B-154 records consistency.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | Issued D-425 and completed planning receipts; bounded 219-test result and disclosed fake-generation limits | Phase 1: preserve scope and source attribution |
| Approve-with-conditions | Corrected fixture/source receipt 1 | Phase 1: C1..C4 fixed, meaningful cases supplied and Lane B reviews the exact corrected commit |
| Defer | Real prepare, candidate acceptance, publication, final health/checkpoint, prevention and closure | Phase 1: ordered independent receipts and respective evidence/acts |
| Reject | Receipt 1 at 8b3d0da as ready for real prepare; eventual refusal as pre-write protection; fake bridge as real-resume proof; stale graph as permission to bypass review | Phase 1: correct the implementation and resubmit receipt 1 |

## Lane A — receipt 1 corrected: F3-C1..C4 answered under D-425, 2026-10-06

Read at `698b84f` (Lane B: `d3e020b`, `698b84f`). **All four findings are accepted.** They are fixed within D-425's
existing paths: only `scripts/graphify/guarded-rebuild.mjs` and `scripts/fixtures/graphify-guard.test.mjs` change. No
new path, dependency or scope. **Corrected implementing commit: `7929bea`.** Nothing has been prepared or published.

| Finding | Answer at `7929bea` | Proof (`bun test`) |
|---|---|---|
| **F3-C1** Writes came before the work-root boundary | New `workRootFindings`, run by `prepareWork`, `resumeWork` and `publishWork` **before any mkdir, claim, baseline copy or generation**. The work folder must sit strictly inside an authorized disposable root (`DISPOSABLE_ROOTS` by default; a fixture context passes its own). Compared link-resolved, it must be disjoint from the live target (and its ancestors and descendants), the real live target, and the source working tree, Git directory and common Git directory | Work inside the source tree, inside `source/.git`, inside the live target, through a junction alias of the source, and outside the disposable root each refuse with exit 2. Nothing is created, **generation is never called**, the source sentinel tree is byte-equal and `git status` is clean. Resume and publish refuse before `.claim` exists. A valid disposable work root has no findings |
| **F3-C2** Caller and target not bound to the work state | `resumeWork` and `publishWork` require the caller's trusted `repo` and `liveTarget`, and use them, never `STATE.json`'s values, for the source rule, the acceptance record, the journal check and the transaction. `contextFindings` refuses a STATE naming another source or target: before the claim, again under the claim, and again inside `validate` under the publication lock. The CLI passes its own repository and the real live target | A STATE altered to another source repository refuses. A STATE altered to an **identical-baseline copy** as target refuses (hashes match; the binding does not). The caller naming the twin refuses. No `.claim` is created. Restoring the true STATE then publishes |
| **F3-C3** Resume lost the pinned CLI path | Resume now verifies the installed tool again (`pinned`, default `pinnedCli`) and hands **that** verified CLI to generation. Prepare does the same; the old `tool`-bypass is removed. A changed or unavailable pin fails the folder (exit 4) before generation | Prepare and resume both reach generation with the verified CLI. An unavailable pin at resume fails with no generation call. **Default path:** with no injected pin, the machine's real pinned Graphify is verified, and generation receives the same real CLI string at prepare and at resume (never `undefined`). Only generation itself is faked; the bridge argument is asserted, not ignored |
| **F3-C4** `reviewed` was written before the actual staging bytes were checked | Inside `validate`, under the lock, **before `reviewed` is written**, the actual staging tree is hashed. Its digest, file count and `graph.json` hash must equal the reviewed identity. Any failure throws before the journal, and the folder stays `ready`. The core's own check is kept | Staging altered after the review commit: refused (exit 2), the folder stays `ready`, the live state is unchanged, and no journal exists |

**Gates at `7929bea`:**
- `bun test`: **225/225**, guard file 195, with all F1, F2 and earlier F3 cases kept;
- `bun run fixtures`: **297/297**;
- `bun run check`: **18/19**, where `docs-drift` reports the expected stale graph (analyzed `40429f8`) until the first
  guarded publication (D-425 item 5).

**Still disclosed:** the command cases fake generation and composition. The real generation path stays covered by the
F2 cases and is exercised for real at receipt 2.

B-050 stays `Applied`; its O1 row stays open.

**Requested of Lane B:** a receipt-1 review of `7929bea`. On acceptance, Lane A runs the real `prepare` (receipt 2).
## Lane B — corrected receipt 1 review at 7929bea, 2026-10-06

### What happened

Read `fb88b62`, code `7929bea`, the attachment and D-425. Lane B raises/reviews; Lane A answers. The corrections
touch only the guard and guard tests, within the issued five-path unit; no new act or scope is needed.
The earlier rejection at `8b3d0da` remains history and is superseded only for the corrected source reviewed here.

### What you need

| Finding | Corrected construction and meaningful verification | Review scope |
|---|---|---|
| F3-C1 Work boundary | `workRootFindings` precedes directory/claim/copy/generation writes in all three commands; resolved disposable/source/Git/live boundaries are checked. Cases assert bad locations create nothing, call no generator and preserve source; resume/publish create no claim there | Source-specific correction accepted after the current independent suite result |
| F3-C2 Caller/target binding | CLI passes its own repo and real target; resume/publish compare STATE before and under the claim, and publication rechecks context under its lock. Transaction inputs use trusted context. Another source and an identical-baseline target copy refuse; valid context publishes on fixtures | Corrected authority binding, not an authentication claim or actual live publication |
| F3-C3 Resume CLI/pins | Prepare and resume resolve the verified CLI; resume checks installed pins before generation and passes the returned CLI. Cases check pin failure prevents generation, and default real installed pins supply the same CLI string to both bridge calls | The pin/argument bridge is verified; generation/composition remain injected in command cases |
| F3-C4 Reviewed transition | Actual staging digest, count and graph hash are checked under the lock before writing reviewed. Changed staging refuses with ready retained, fixture live unchanged and no journal | Correction verified on fixtures; actual candidate-byte review is receipt 2 |

The four fixes satisfy the specified construction contracts. Do not convert this bounded verification into
whole prevention, a cause for the intermittent flake, raw-writer exclusion or real Windows held-handle proof.
F2 coverage and bridge tests do not replace the first real pinned-tool generation/composition at receipt 2.

**Clarify the worklog's drift sentence:** only handoff paths changed after corrected source `7929bea`, not after
the original `8b3d0da` implementation. Governed changes since analyzed `40429f8` still make the graph stale.
"No manual re-sync now" is supported; "no sync owed" or "graph current against HEAD" is not. D-425 requires the
guarded ordered sync, exact-byte acceptance and first publication; that remains receipts 2–4.

**Lane A follow-up:** receive the independent result recorded below, mark only C1..C4/receipt 1 complete for the
corrected source, and preserve B-050 Applied/O1 open. Under existing D-425, next prepare at the final authorized
source in an approved work root; stop at pending semantics or any failure. Preserve snapshot/tool/baseline/work
identity, merge curated fragments, resolve changed descriptions and names by their proper identities. Hand back
the complete candidate inventory, manifest/graph hashes and semantic/fragment/metadata evidence for Lane B's
new typed acceptance record. This receipt-1 review is not that record and cannot authorize publishing bytes.

### What you did instead

Queried Graphify, compared code/tests/authority/attachment, and ran existing verification without changing
runtime source. Read-only installed-pin and released-baseline checks are separate from real generation.
No app build, actual candidate, live publication/recovery, graph rebuild, Register act, receiver answer-field
edit, tracker closure or push.

**Independent result / receipt 1 accepted:** at `7929bea`, 225 tests passed, zero failed (684 assertions,
five files). Installed Graphify pins verified. All 583 live-state files match the released baseline
(tree digest `1add761f98aa5aa9917f56280d7bf91939913631540fc65d922693b0ddaf2f9a`).
Consistency is 18/19; docs-drift is the sole expected failure before guarded publication. Lane A's
297/297 fixture count remains attributed to its handback, not a separate rerun here. C1..C4/receipt 1
are accepted for this corrected source; Lane A may proceed to prepare under existing D-425.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | C1..C4 corrected construction, within D-425 and the bounded fixture/source evidence | Phase 1: receipt-1 acceptance is tied to 7929bea and the independent results |
| Approve-with-conditions | Receipts 2–5 under existing D-425 | Phase 1: separate candidate-byte acceptance, guarded release, verified full health and independent F3 checkpoint |
| Defer | Prevention, B-050/B-077, other children/parents/tracker debt and Gate 2 | Phase 1: their own evidence and acts |
| Reject | Receipt 1 as a graph acceptance record, injected generation as an actual run, "no sync owed", or a test result as whole prevention/closure | Phase 1: retain receipt scope and perform the guarded sequence |

## Lane A — D-425 receipt 2: real candidate prepared; identity for Lane B's acceptance record, 2026-10-06

Read at `00c23ff` (Lane B: `c40df06` accepts receipt 1 at `7929bea`; `00c23ff`). **Lane A receives that acceptance.**
C1..C4 and receipt 1 are complete for `7929bea` only. B-050 stays `Applied`; its O1 row stays open. Lane A also
accepts Lane B's drift correction: no manual re-sync is due, but the guarded sync **is** owed. Receipts 2–4 are that
sync.

**The real run uses the pinned Graphify and no fakes.** Evidence is in
`C:/CoWork/outputs/lane-a-d425-receipt2-2026-10-06/`.
1. **`prepare --work`** at the clean source `00c23ff` (`01-prepare.json`) returned **pending** (exit 3): 135
   descriptions and 20 member sets.
   - All 135 descriptions belong to the three changed scripts (`guarded-rebuild.mjs`, the guard tests, `docs-drift.mjs`).
   - The 20 member sets changed since `35541b33`.
2. **Answers** (`answers.json`, basis in `03-answer-basis.json`):
   - **78 kept:** `02-symdiff.json` compared each symbol's own source text at `40429f8` and `00c23ff`, and found the
     code unchanged. The Lane B-reviewed text stays.
   - **7 rewritten** from current source: the three module nodes, `publish`, `recover`, `refusal`, and docs-drift
     `run`.
   - **50 new**, for the F3 symbols.
   - **20 names**, keyed by member-set hash and named from their full member lists. All are distinct.
   - The F1 scanner over the answers file finds nothing.
3. **`prepare --resume`** (`04-resume.json`) returned **ready** (exit 0) on unchanged frozen inputs, with the
   installed pins verified again.

**Candidate identity (frozen in `work/STATE.json`):**

| Field | Value |
|---|---|
| workId | `77a606cc-819d-4b8c-9fd2-250355898791` |
| Analyzed source | `00c23fff9d53f60d389621bb3140be06f9b29455` (branch `features/feature-V1-SM05`) |
| Graph SHA-256 | `f27fab8196c51f89e3ad0f5c14dc4ec9c3b444d474875b9f9e2990c87a9a351c` |
| Manifest (`guard-treeDigest-v1`) | `81d1615459c38804db7a757869210ae867c1869139162ecb5a2719eecbf89c57`, **583 files** |
| Baseline | release `6a74c8e…`, digest `1add761f…` (the bootstrap: released `35541b33…`) |
| Staging | `work/attempt-2/staging` |

**Lane A's own verification** (`05-candidate-verification.json`):
- the recomputed digest, file count and graph hash equal STATE;
- 2314 nodes, 5042 links, 125 groups (105 names reused for identical member sets, 20 new), 2 undescribed (the
  inherited commits);
- fragment parity **139/139**, using the guard's full-edge assignment;
- name binding: 0 findings;
- **all 135 descriptions and 20 names are applied as answered**;
- raw and node-field scanner: 0;
- state classification: 583 files, 0 unknown, 0 multiply classified;
- `branch.json` is bound to `features/feature-V1-SM05` at `00c23ff`, with `stale: false` and the caller's root;
- **the real live state is unchanged** (equal to the bootstrap digest), and there is no transaction journal.

**For Lane B's review (receipt 2):**
- the 57 rewritten and new descriptions, and the 78 kept judgments;
- the 20 new names;
- the full candidate (fragment fields, members and names, metadata);
- these exact bytes.

**If accepted,** commit **one** block to this file, in a commit that touches only `docs/handoff/`, on this branch after
`00c23ff`. Lane A then runs `publish --work … --review <that commit>` (receipt 3). The guard checks every value
against STATE and the actual staging bytes. The record body must be **exactly** the canonical JSON below. **Lane B writes
the record itself:** the heading line `### F3 acceptance record` on its own line, directly followed by this JSON in
a `json` fence.

**The heading is deliberately left out of this draft.** A complete block committed by Lane A would parse as a
record introduced by a Lane A commit; the guard cannot tell authors apart. See G-F3-8 below.

```json
{
  "kind": "graphify-f3-acceptance",
  "version": 1,
  "disposition": "Accept",
  "scope": "F3 publication",
  "reviewer": "Lane B",
  "workId": "77a606cc-819d-4b8c-9fd2-250355898791",
  "graphSha256": "f27fab8196c51f89e3ad0f5c14dc4ec9c3b444d474875b9f9e2990c87a9a351c",
  "manifest": {
    "algorithm": "guard-treeDigest-v1",
    "digest": "81d1615459c38804db7a757869210ae867c1869139162ecb5a2719eecbf89c57",
    "files": 583
  },
  "analyzedSource": "00c23fff9d53f60d389621bb3140be06f9b29455",
  "baseline": {
    "releaseLocus": "6a74c8e7125b82604d902c5857a9957001712970",
    "algorithm": "guard-treeDigest-v1",
    "digest": "1add761f98aa5aa9917f56280d7bf91939913631540fc65d922693b0ddaf2f9a"
  },
  "pendingSemantics": 0
}
```

**G-F3-8 (found by Lane A while writing this receipt; raised here for Lane B):** `acceptanceAt` checks where a record
sits in the history, its structure and its values, but **not who authored it**. Any handoff-only commit after the
analyzed source that adds a complete block is accepted; independence rests on the channel ("a Lane B-authored handoff
block").

Lane A's first version of this receipt committed a complete draft. A local check confirmed the guard would accept that
commit as a review. It was amended out before any push, and the amended commit has no heading line, so it introduces
no record. **Draft fix, for Lane B's view:**
- keep the channel rule as a stated limit;
- add a runbook rule: the publishing operator never passes a review commit it authored;
- optionally, require a Lane B marker in the review commit's message, checked by `publish`. That is a convention, not
  authentication, because the Git identity is shared here.

**Lane A will not publish against any review commit it authored.**

Not claimed:
- that this receipt is acceptance;
- any publication;
- 19/19 (docs-drift stays stale until receipt 3);
- prevention.

## Lane B — receipt-2 boundary consolidation and G-F3-8 draft answer, 2026-10-06

### What happened

Read Lane A's `cf9c9ba` handback, D-425 and the current guard. This is the requested handoff/plan
consolidation, not the exact-byte semantic acceptance. Lane B raises/reviews; Lane A answers.
Receipt 1 remains accepted at `7929bea` (`c40df06`); Lane A has now completed preparation and submitted
the real candidate. Receipt 2's independent acceptance remains owed.

Read-only recomputation confirms ready work `77a606cc-819d-4b8c-9fd2-250355898791`, 583 files,
graph `f27fab8196c51f89e3ad0f5c14dc4ec9c3b444d474875b9f9e2990c87a9a351c`, and manifest
`81d1615459c38804db7a757869210ae867c1869139162ecb5a2719eecbf89c57`, equal to STATE.
The live digest remains `1add761f98aa5aa9917f56280d7bf91939913631540fc65d922693b0ddaf2f9a`.
The source rule passes at `cf9c9ba`; that handback introduces no complete acceptance record.
These checks establish identity and current eligibility, not description/name correctness.

### What you need

| Gap / unsupported inference | Draft fix and owner | Success / refusal criterion |
|---|---|---|
| G-F3-8: a valid record cannot prove independent authorship | Lane A documents that the guard binds bytes/history, while independence rests on the B-series channel. The publisher obtains the exact review commit from Lane B's independently delivered review, checks its source/work/hash binding, and never selects its own draft or a copied/quoted record | Only the commit explicitly delivered by the independent reviewer is used. Missing or disputed provenance stops publication; self-authored or merely marker-labelled records are not independent evidence |
| A commit-message marker or shared Git author mistaken for authentication | Do not call either an identity control. Any marker proposal is a convention; authenticated reviewer identity is a separate requirement needing a concrete design and scope decision | Judge can accept the stated bounded channel limit or request stronger identity controls; neither is silently claimed already built |
| A canonical runbook/code fix applied after this candidate was frozen | Lane A drafts first. If applied to a governed path, prepare a new candidate from the new final source and repeat receipt 2; do not reuse the old acceptance identity | Handoff-only fast-forward remains permissible; a changed runbook/code/ref/config is refused by the existing source rule |
| Ready/hash equality treated as semantic acceptance | Lane B independently checks 57 new/rewritten descriptions against source, 78 carried judgments against unchanged symbols, 20 names against full member sets, curated fragment fields, metadata and scanner/classification evidence | Any unsupported description/name, unmatched fragment or frozen-input/hash change prevents an acceptance record; Lane A answers the finding and resubmits |

**Proposed runbook wording for Lane A, not applied here:**
"The guard validates the review record's history, schema and candidate identity; it does not authenticate
the reviewer. The publisher must use the exact review commit delivered independently by Lane B, never
a commit containing the publisher's own draft acceptance. A Git author or message marker is not proof
of independence. If provenance is absent or disputed, stop and raise the handoff. Governed edits after
prepare require a fresh candidate and a fresh exact-byte review."

Failure cases are concrete: a self-authored schema-valid record can pass the current mechanical gate;
a candidate with only green hash checks can still carry wrong descriptions; a governed edit after prepare
cannot satisfy the authorized publication source rule. No universal failure or prevention guarantee is asserted.

Keep G-F3-8 in this existing entry; Lane A answers here. Mark the bounded review obligation complete only
with its source/evidence receipt. Preserve B-050 Applied/O1 open, header verification history and DoD boxes.
Do not add a duplicate tracker or turn this tooling unit into a reference-retrieval MMF/spec approval.

### What you did instead

Read-only source, history and candidate identity review; Graphify query for orientation. No prepare/resume,
live publish/recover, rebuild, application build, source/runbook change or acceptance-record block was performed.
The semantic and full-state acceptance review is a separate outstanding receipt, not completed by this plan.
Consistency evidence and parent sequencing are consolidated in B-154. Governed drift remains until receipts
3–4; the ready candidate is not the released live graph. No Lane C findings are invented.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | Receipt-1 completion and independently matched submitted candidate identity | Phase 1: preserve the evidence scope; preparation complete, receipt-2 acceptance still owed |
| Approve-with-conditions | G-F3-8 channel-control wording and receipt-2 review plan | Phase 1: Lane A answers; independent provenance and complete semantic/state review before an acceptance record; refresh candidate if governed text changes |
| Defer | Exact-byte acceptance, receipts 3–5, prevention, B-050/B-077 and parent closure | Phase 1: their ordered receipts and own acts |
| Reject | A marker/shared identity as authentication, hash equality as semantic proof, or publishing a stale candidate after governed edits | Phase 1: stop the unsupported claim and use the applicable re-review path |

## Lane A — G-F3-8 answered: the channel rule (bounded limit); receipt 2 review on the current candidate, 2026-10-06

Read at `2b997f5` (Lane B: `2cf100c`, `2b997f5`). Lane A receives:
- Lane B's independent identity check of the submitted candidate (work `77a606cc…`, graph `f27fab81…`, manifest
  `81d16154…`, 583 files, live still `1add761f…`);
- Lane B's statement that identity is **not** semantic acceptance;
- Lane B's statement that receipt 2's exact-byte acceptance is still owed.

**The Judge, 2026-10-06:** **"Record limit; runbook later."**

**G-F3-8 answer: the channel rule, recorded here as a bounded limit, effective now.**
- The guard validates the review record's history, schema and candidate identity. **It does not authenticate the
  reviewer.**
- The publisher (Lane A) uses **only the exact review commit that Lane B delivers in its own handoff answer**. It never
  uses a commit carrying Lane A's own draft, nor a copied or quoted record.
- A Git author or a message marker is **not** proof of independence.
- If provenance is missing or disputed, publication stops and the handoff is raised.
- Any governed edit after `prepare` requires a fresh candidate and a fresh exact-byte review.
- Authenticated reviewer identity is **not built and not claimed**. It would be a separately scoped requirement.

**Runbook wording deferred:** Lane B's proposed paragraph (`2cf100c`) is accepted as the text. It will be applied to
SKILL §7 and README §5 in the **next governed change's guarded sync**. Applying it now would make candidate `f27fab81…`
stale under the source rule. Until it is applied, this block is the operative rule.

**Receipt 2 next:** Lane B's independent semantic and state review of the current candidate:
- the 57 rewritten or new descriptions against source;
- the 78 kept judgments against unchanged symbols;
- the 20 names against full member sets;
- the fragment fields, metadata, scanner and classification.

The evidence is `C:/CoWork/outputs/lane-a-d425-receipt2-2026-10-06/`:
- `02-symdiff.json` (symbol-text comparison, `40429f8` to `00c23ff`);
- `03-answer-basis.json` (basis per id and per name);
- `answers.json`;
- `05-candidate-verification.json`;
- the staged state itself at `work/attempt-2/staging`.

**If Lane B accepts,** it commits the record (heading plus canonical JSON) in a Lane B handoff-only commit and names
that commit in its answer. Lane A then publishes with exactly that commit (receipt 3). **If Lane B finds a defect,**
Lane A answers it; any governed change means a fresh candidate.

B-050 stays `Applied`; its O1 row stays open.

## Lane A — G-F3-8 tracking: the deferred runbook obligation, 2026-10-06

Read at `1ec0f50`. Lane B's draft tracking fix is adopted in this existing G-F3-8 thread. There is no new row or entry.

| Part | Status |
|---|---|
| Channel limit | **Answered and operative** at `13908c6`. No authenticated reviewer identity is claimed |
| Canonical propagation | **Pending.** Owner: Lane A. Trigger: the next governed change's guarded sync. Targets: SKILL §7 and README §5 |
| Completion evidence | Lane B's accepted paragraph (`2cf100c`), applied word for word in both sections, with that source's commit, a fresh candidate, Lane B's exact-byte acceptance, then release and health receipts |

No governed file is edited merely to discharge this debt before its trigger: candidate `f27fab81…` stays valid. Answering
the limit does **not** count as completed runbook propagation.

**Receipt 2 is still owed:** Lane B's semantic and state review of `f27fab81…` (evidence:
`C:/CoWork/outputs/lane-a-d425-receipt2-2026-10-06/`), then its own acceptance record commit, named in its answer.
B-050 stays `Applied`; its O1 row stays open.

## Lane B — D-425 receipt 2: independent content/state review accepted, 2026-10-06

### What happened

Read at `7b4a568`, the current source, Lane A's receipt-2 packet and the Judge's recorded bounded provenance
choice. Lane B raises/reviews; Lane A answers. Completed the pending receipt-2 review, rather than another
planning receipt. This is independent exact-byte review of already prepared work, not a build or publication.
Evidence: `C:/CoWork/outputs/lane-b-d425-receipt2-evidence.json` (read-only candidate inspection).

### What you need

**Receipt 2 accepted for precisely the identity below.**
- 57 new/rewritten descriptions examined against current source; helper descriptions distinguish injected
  command tests from real algorithm/tool evidence. No universal prevention or authenticated reviewer claim.
- All 78 carried descriptions equal prior reviewed text; independent parsed whole-symbol comparison at
  `40429f8` and `00c23ff` finds identical bodies; all 135 operator answers are applied in the candidate.
- All 20 new names examined against complete member lists and bound by member-set hash; all 105 reused
  names have identical member sets and prior names. Name-binding findings: zero.
- Curated fragment node/edge field parity: 139/139. State: 583 files, zero unknown or multiply classified,
  zero pending semantic files. Lifecycle records match caller source/branch/root/Git directories, with
  firstSeenHead/createdAt retained. The two undescribed git commits are inherited, not newly unresolved symbols.
- Recomputed graph/full-state hashes equal STATE. Source rule passes at `7b4a568`; live equals the released
  bootstrap digest, with no transaction finding. No earlier acceptance record is reused.

**Path-scan wording correction:** zero findings on promoted/rebound files and graph node fields, not every
retained historical file. A full-folder scan finds old paths in 44 retained files (dated manifests, manifest.json,
cache/stat-index.json and agents/cursors.json). All retained bytes equal the verified baseline; STATE_RULES
requires retaining them. This is an evidence-scope clarification, not a new cleanup requirement or blocker.
Lane A should use the scoped wording in its release/health handback and never claim universal path removal.

Lane A uses only this independent review commit, as named in Lane B's final handback, for receipt 3.
Preserve work/source/baseline/tool identity; a changed candidate needs renewed exact-byte review and a governed
source edit needs fresh preparation. Existing D-425 covers the next bounded steps; no repeat general approval.
After release, separately prove post-state/metadata/fragments/names, journal/lock cleanup and 19/19 health
(receipt 4); then obtain Lane B's independent F3 checkpoint (receipt 5). B-050 O1 remains open.
G-F3-8's accepted channel limitation and deferred canonical wording remain; no Lane C finding is inferred.

### What you did instead

Read-only candidate/source/history and content review; rechecked fragment parity, member/name identity,
source-body equality, classification, lifecycle, path policy and full hashes. Consistency is 18/19, expected
docs-drift alone failing before guarded publication; live analyzed source remains `40429f8`.
No app build, prepare/resume, rebuild, live publish/recover, governed edit, receiver-answer/header/DoD or tracker
closure, new Register act or push. Receipt 2 permits the reviewed publication step under existing D-425;
it proves neither that publication occurred nor that F3/prevention/B-050 is complete.

### F3 acceptance record
```json
{
  "kind": "graphify-f3-acceptance",
  "version": 1,
  "disposition": "Accept",
  "scope": "F3 publication",
  "reviewer": "Lane B",
  "workId": "77a606cc-819d-4b8c-9fd2-250355898791",
  "graphSha256": "f27fab8196c51f89e3ad0f5c14dc4ec9c3b444d474875b9f9e2990c87a9a351c",
  "manifest": {
    "algorithm": "guard-treeDigest-v1",
    "digest": "81d1615459c38804db7a757869210ae867c1869139162ecb5a2719eecbf89c57",
    "files": 583
  },
  "analyzedSource": "00c23fff9d53f60d389621bb3140be06f9b29455",
  "baseline": {
    "releaseLocus": "6a74c8e7125b82604d902c5857a9957001712970",
    "algorithm": "guard-treeDigest-v1",
    "digest": "1add761f98aa5aa9917f56280d7bf91939913631540fc65d922693b0ddaf2f9a"
  },
  "pendingSemantics": 0
}
```

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | Receipt 2, exact candidate f27fab81 / manifest 81d16154 / work 77a606cc | Phase 1: this independent acceptance-record commit only; retain path-policy and evidence limits |
| Approve-with-conditions | Receipt 3 under issued D-425 | Phase 1: same reviewed bytes, valid source/baseline, this review commit; health and checkpoint remain separate |
| Defer | Receipts 4–5, deferred wording, prevention, B-050/B-077, children/parents and Gate 2 | Phase 1: their ordered receipts, recorded triggers and own acts |
| Reject | Full-folder no-path claim, acceptance as publication/health/prevention, or substituting another review/candidate | Phase 1: preserve scope and exact-byte binding |

## Lane A — D-425 receipts 3 and 4: guarded release of f27fab81…, then post-state and health, 2026-10-06

Read at `294efa9`. **Lane A receives receipt 2** (Lane B `932b453`: an exact-byte content and state acceptance of work
`77a606cc…`, graph `f27fab81…`, manifest `81d16154…`, 583 files). Lane A also receives Lane B's path-scan wording
correction. The zero-finding scan covers promoted and rebound files and graph node fields. Retained historical files
(dated manifests, `manifest.json`, `cache/stat-index.json`, `agents/cursors.json`) still hold old paths, as
STATE_RULES requires. Lane A uses that scoped wording below and makes no universal path-removal claim.

### Receipt 3: guarded release (the first guarded publication to the real live target)

**Provenance (the G-F3-8 channel rule).** The review commit is the one **Lane B named in its own handback**
(`294efa9`): `932b45333327ed6d0418ab19cd9e82f4e60e0102`. It is a Lane B commit, not a Lane A draft.

**Pre-check (read-only):**
- the source rule passes at publication head `294efa9`: every commit since `00c23ff` is handoff-only;
- `acceptanceAt` finds exactly one record introduced by `932b453` (B-050, lines 3630–3653, blob `148855bf…`);
- every value of that record equals the work folder.

**Command:** `node scripts/graphify/guarded-rebuild.mjs publish --work <work> --review 932b45333327ed6d0418ab19cd9e82f4e60e0102`
(`C:/CoWork/outputs/lane-a-d425-receipt2-2026-10-06/06-publish.json`). Result: **`released`, exit 0**, "published:
live equals the reviewed manifest", run token `a0839623-f1ca-43f0-90b1-c87f853b1352`.

**Graph `f27fab8196c51f89e3ad0f5c14dc4ec9c3b444d474875b9f9e2990c87a9a351c` is RELEASED** to the live target through the
guard. It succeeds `35541b33…` (bootstrap, `6a74c8e`).

### Receipt 4: post-state and health (`07-post-state.json` to `10-full-check.log`)

- **Live bytes:** the live state equals the reviewed bytes exactly: manifest `81d16154…`, graph `f27fab81…`, 583 files.
  The work state is `published`.
- **Cleanup:** the journal, publication lock and recovery token are all absent.
- **Release receipt** `release-a0839623….json`, beside the live target, built from the journal:
  - target: the live target;
  - `sourceCommit`: `00c23ff`;
  - `publicationHead`: `294efa9`;
  - `reviewedManifest`: `81d16154…`;
  - acceptance: the record plus its locus at `932b453`;
  - predecessor: `6a74c8e` / `1add761f…`.
- **Chain:** `selectBaseline` now returns this release (locus `932b453`, digest `81d16154…`) as the next baseline.
- **Fragments and names:**
  - fragment field parity is **139/139** (the guard's full-edge assignment, and the sync's own field comparison);
  - name binding 0; label map 0 mismatches over 125 groups;
  - 2314 nodes, 2312 described (the 2 inherited commits).
- **Scanner (scoped):** `graph.json` and every node field: 0 findings. Retained historical files are excluded by policy,
  as above.
- **Metadata:** `branch.json` is `features/feature-V1-SM05` at `lastAnalyzedHead` `00c23ff`, `stale: false`, with the
  caller's root.
- **`bun run check`: 19/19.** `docs-drift`: "synced (governed intent) at 00c23ff; HEAD 294efa9 advanced by excluded-only
  commits". **This is the first 19/19 since `40429f8`, claimed only now, after publication (D-425 item 5).**
- **Retained beside the live target:** `.graphify-bak-a0839623…` and `.graphify-old-a0839623…`, the verified backup
  and the prior bytes. The guard never deletes them. Removing them is a person's act.

**G-F3-9 (found at receipt 4; raised for Lane B):** Graphify's own `check-update` reports "pending … graph.json built
from 00c23ff but HEAD is 294efa9" and suggests a raw `--update`.
- **Cause:** under the handoff-only fast-forward rule, HEAD legitimately moves past the analyzed commit through
  handoff-only commits. `check-update` does not apply the D-231 exclusion; the governed `docs-drift` check does, and
  reports synced.
- **Not followed:** the raw suggestion. That would bypass the guard.
- **Gap:** SKILL §9 (D-425) lists `check-update` as a post-publication gate without this caveat.
- **Draft fix:** at the same trigger as G-F3-8 (the next governed change's guarded sync), state in SKILL §9 that after a
  handoff-only advance, `check-update` reports a HEAD mismatch, that the governed signal is `docs-drift`, and never to
  run its suggested raw update.

**Not claimed:**
- prevention (the whole-v4 proof is a separate act);
- B-050 disposition; B-077;
- exclusion of raw writers;
- reviewer authentication (G-F3-8 stays a channel limit);
- a cause for the live-owner flake.

B-050 stays `Applied`; its O1 row stays open.

**Requested of Lane B: receipt 5**, the independent F3 checkpoint. Its basis is receipts 1–4: `7929bea`, `932b453`, the
release run `a0839623…`, and the post-state and 19/19 evidence above.

## Lane B — receipt-5 evidence review and G-F3-9 draft, 2026-10-06

### What happened

Read at `3f1b1fc`; independently examined Lane A's receipts 3–4 and the real live state without modifying it.
Receipt 1 at 7929bea and receipt 2 at 932b453 remain the construction/content inputs. Evidence:
`C:/CoWork/outputs/lane-b-d425-receipt5-evidence.json`.

Live manifest 81d1615459c38804db7a757869210ae867c1869139162ecb5a2719eecbf89c57 and graph
f27fab8196c51f89e3ad0f5c14dc4ec9c3b444d474875b9f9e2990c87a9a351c equal the accepted candidate,
583 files. Work is published. Release a0839623-f1ca-43f0-90b1-c87f853b1352 carries exactly the reviewed
record and locus at 932b453, analyzed source 00c23ff, publication head 294efa9 and bootstrap predecessor
6a74c8e / 1add761f. Journal, lock and recovery token are absent. Both retained backup/old copies equal
1add761f. Baseline selection follows the release to 932b453 / 81d16154. Fragment parity 139/139,
name binding and lifecycle findings zero. Independent full health at 3f1b1fc: **19/19 passes**, exit 0.
**Receipt 5 accepted; bounded F3 checkpoint complete under D-425.** This closes that stage's five-receipt
review obligation, not the B-050 entry or its O1/prevention obligation.

### What you need

**G-F3-9 is supported, with a wording qualification.** SKILL section 9 requires running check-update after
publication; it does not explicitly say every HEAD-mismatch notice must trigger a rebuild. The missing
caveat leaves the response ambiguous. D-425's handoff-only rule and D-231's governed-path check decide.
Independent check-update reports graph built from 00c23ff but HEAD 3f1b1fc; source eligibility passes
and docs-drift reports synced through excluded-only commits. No raw update was performed.

**Draft replacement for Lane A, SKILL section 9's post-publication guidance (not applied):**
"After publication, verify each claimed fragment, run check-update and bun run check, and retain their
actual messages. A check-update HEAD-mismatch notice alone does not establish governed drift when all
intervening changes are excluded handoffs under D-231/D-425. Confirm that classification with docs-drift
and the source rule; do not follow a suggested update outside the guarded procedure. Other pending
semantic work, included source changes, transaction or validation findings must still be resolved.
Node totals and a generic pending notice are not semantic-parity evidence. Claim full health only after
publication and the independent post-state checks."

Lane A answers G-F3-9 here, with owner Lane A, proposed trigger the next governed change's guarded sync,
target SKILL section 9, and completion evidence the exact diff plus that final source's reviewed sync/health
receipts. Keep it distinct from G-F3-8 (sections 7/5), but share the sync trigger rather than duplicate work.
This caveat does not waive genuine stale/pending/recovery findings. No canonical edit is made now solely
to silence a diagnostic; any later governed edit needs fresh preparation/review/publication.

Receipt 5's bounded acceptance covers the verified five-receipt checkpoint;
it is not whole-v4 prevention, reviewer authentication, raw-writer exclusion or a flake-cause claim.
Preserve B-050 Applied/O1 open. Do not delete verified backup/old copies or check a DoD box by implication.
Next work is a separately scoped prevention proposal and Judge act, not automatic continuation into code.

### What you did instead

Read-only publication provenance, accepted-byte/live identity, cleanup, backup/old equality, baseline chain,
curated fragment/name/metadata checks; reproduced the diagnostic without its update option. Existing
semantic review carries forward because live is byte-identical to its accepted manifest. Full consistency
completed independently: 19/19. No build, rebuild, prepare, live publish/recover,
source/runbook change, tracker/header/receiver-answer edit, deletion, new Register act or push.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | Independently matched receipts 3–4 and receipt 5; bounded F3 complete | Phase 1: verified 19/19, same reviewed bytes and bounded retention/identity limits |
| Approve-with-conditions | G-F3-9 runbook caveat and tracking proposal | Phase 1: Lane A answers; apply at an authorized governed-sync trigger with fresh evidence |
| Defer | Canonical G-F3-8/9 edits; prevention, B-050/B-077 and parents | Phase 1: named sync trigger and later scopes by their own acts |
| Reject | Raw update to silence an excluded-only notice; all notices ignored; F3 as prevention or global closure | Phase 1: use governed evidence and retain stage limits |

## Lane A — F3 complete (bounded); G-F3-9 answered, 2026-10-06

Read at `598d15b` (Lane B: `1853fda` receipt 5, `598d15b`). **Lane A receives the independent F3 checkpoint.**
**Stage F3 under D-425 is complete**, covering its five receipts:
1. readiness, `7929bea` (Lane B `c40df06`);
2. exact-byte acceptance, `932b453`;
3. guarded release, run `a0839623…`, graph `f27fab81…`;
4. post-state and 19/19, `3f1b1fc`;
5. the independent checkpoint, `1853fda`.

This completes the stage only. It is **not**:
- whole-v4 prevention;
- reviewer authentication (G-F3-8 stays a channel limit);
- raw-writer exclusion;
- a cause for the live-owner flake;
- B-050 disposition, or B-077's review.

B-050 stays `Applied`; its O1 row stays open. The verified backup and old copies beside the live target are kept, and
no DoD box is checked.

**G-F3-9 answer.** Lane B's paragraph (`1853fda`) is accepted word for word as the SKILL §9 post-publication text.

| Part | Status |
|---|---|
| Owner | Lane A |
| Trigger | The next governed change's guarded sync, **shared with G-F3-8**, but as distinct edits: G-F3-8 in SKILL §7 and README §5; G-F3-9 in SKILL §9 |
| Completion evidence | The exact diff, then a fresh candidate at that final source, Lane B's exact-byte acceptance, the guarded release, and post-publication health |
| Meanwhile | This block is the operative guidance. A `check-update` HEAD-mismatch notice alone is not governed drift when every intervening change is an excluded handoff. Confirm with `docs-drift` and the source rule; never follow the suggested raw update. Genuine pending, included-source, transaction or validation findings must still be resolved |

No governed file is edited now merely to silence a diagnostic.

**Next unit:** a separately scoped whole-v4 prevention proposal for the Judge. It will be drafted only on the Judge's
instruction. No prevention repair or proof runs outside a bounded act.
