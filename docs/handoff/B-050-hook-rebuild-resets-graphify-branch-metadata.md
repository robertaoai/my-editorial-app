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

## Lane A — DRAFT: whole-v4 prevention proposal (plan only, for Lane B review), 2026-10-06

Read at `8149eed`. **The Judge, 2026-10-06:** "Draft proposal now". **This is a plan. It authorizes and applies nothing.**
Any execution needs a bounded Register act after Lane B's review. The basis is contract v4 (`d733513`), with the two
conditions adopted at `b97f93f`, and the F1–F3 receipts.

### 1. What "prevention" can honestly mean here

B-050's defect is the raw Graphify CLI. When its Git context fails, it writes null `branchName` and analyzed heads
beside `stale: false`, and exits 0. The raw tool stays defective, and the guard cannot stop a raw writer (G-F3-4). The
risk-acceptance closure was rejected. A provable prevention claim is therefore **bounded to two surfaces**:
- **(a) The route:** every governed publication goes through the guard, which refuses the defect before release.
  F1–F3 prove this for fixtures and for one real release.
- **(b) The instruction surface:** no governed instruction, hook or workflow directs any agent to the raw route on the
  live state.

Raw writers outside those instructions remain a stated limit, never "prevented".

### 2. v4 obligations against existing evidence

| v4 obligation | Evidence now | Status |
|---|---|---|
| 1. Inspect without mutation: paths, aliases, pins, snapshot, detached refused | F1 validators, F2 snapshot and checkout, F3 work-root preflight (C1) and live entry checks; receipt 1 | Proved (fixtures plus a real run) |
| 2. Stable baseline **under the exclusive publication lock**, copy verified, then the lock released | `prepare` copies the live state and verifies the digest against the selected baseline, but **without the publication lock** | **Partly. Gap P2** |
| 3. Isolated generation; metadata revalidated after every stage; raw-null and no-op refused | F2 (`generateCandidate` stage checks, raw-null and no-op tests); receipt 2's real run | Proved |
| R4 effective extraction inputs: exact child command with `--scope`; PATH holding the pinned node **and git**; the checkout's effective config and Graphify options captured | Sanitized environment (GRAPHIFY_CHANGED and Git redirects unset); pinned CLI hashes; the source config is in the snapshot | **Partly. Gap P3**: no `--scope`, no pinned git on PATH, no capture of the checkout's effective config or options |
| 4. Validate and compose: fragment fields, names, inventory, lifecycle, foreign paths | F2/D-424 compose; receipt 2 (139/139, names, 583 files classified) | Proved |
| 4. **Derived studio and ontology artifacts validated against the final graph** | Promoted by STATE_RULES, never validated | **Open. Gap P4** |
| 5. Exact-byte review; **idempotence** (a repeat run gives stable graph identity and retained semantics) | Receipt 2 (`932b453`); one run only | **Idempotence open. Gap P5** |
| 6–7. Publication, journal, receipt, restart at `verified`, cleanup | F2/F3 fixture matrix (seven crash boundaries, owner, peer, recoverers); receipt 3 real release; receipt 4 cleanup | Proved (the real target exercised only on the success path; recovery proved in live-layout fixtures. Bounded, see P7) |
| Exclusive recovery and both conditions | F2 child-process cases (`b97f93f` cases) | Proved (fixtures) |
| R1/R2 inventory and field policy; R5 checker order | F1 docs-drift journal-before-skip; F2 classification and rebinding | Proved |
| Exact-root validator (bounded D-421 policy) | F1 (accepted, `591d2cd`) | Proved within its bound |
| Matrix: changed extraction environment or config, including docs-only GRAPHIFY_CHANGED; branch-cutoff crossing | GRAPHIFY_CHANGED is unset (no-op refusal tested); lifecycle mismatch refusal | Proved for the environment; **the cutoff crossing has no dedicated case. Part of P3** |
| **Instruction surface (b)** | Runbooks and docs-drift routed by D-425 | **Open. Gap P1**: rule files still direct the raw route |

### 3. Gaps and draft fixes

| Gap | Evidence | Draft fix |
|---|---|---|
| **P1: rule files direct the raw route** (the most important) | `CLAUDE.md` L37 ("run `npx graphify hook-rebuild` before relying on query"); `GEMINI.md` L52 (`/graphify . --update`); `docs/governance/agent-rules-reference.md` L179 (after modifying code, run `npx graphify hook-rebuild`) and L465. Each session starts from these. They contradict D-425's no-fallback | Replace each with: "if `docs-drift` reports governed drift, the graph is synced only through the guarded procedure (SKILL §7); never run a raw rebuild or update against the live state". Keep the currency check itself. **These are rule-file paths beyond D-425's five, so the act must name them.** The rule-budget check applies (`D-324`) |
| **P2: baseline capture outside the publication lock** | `attempt` copies the live state while unlocked; the digest check catches a mid-copy change, but v4 asks for the lock | Take the publication lock (exclusive create, then `releaseOwned`) around the baseline copy and verification in `prepare`/`resume`. If held, refuse with exit 2. Test: a held lock refuses the copy; no copy is left half-done |
| **P3: effective extraction inputs** | No `--scope`; git is not pinned on PATH; the checkout's `git config --show-origin --list` and the Graphify options are not captured; no cutoff-crossing case | Pass a declared `--scope`; put the pinned node and git directories first on the child PATH; record the checkout's effective config and options in the attempt evidence and freeze them; add a case where a changed selected branch or commit (cutoff crossing) refuses |
| **P4: derived artifacts** | `studio/`, `ontology/` promoted, unvalidated | Before composition is accepted, check that derived artifacts are consistent with the final graph (node and edge counts, labels, generation stamp) or are regenerated from it; refuse a mismatch |
| **P5: idempotence** | One run | After the next guarded release, run `prepare` again at the **same** source in a new work folder. Expect the same graph SHA and member sets, retained bytes semantically unchanged, and timestamps and receipts allowed to differ. Evidence only; no second publication needed if identical |
| **P6: raw-writer inventory** | `.codex/hooks.json` runs `graphify hook-check` (behavior not yet established); `.agents/workflows/graphify.md`; the graphify skill; `.claude/settings.json` hint hooks create empty `.graphify/.hint-<date>/` directories (checked: empty directories leave the file-based manifest and the chain unaffected) | A read-only inventory of every hook, skill and workflow that can write to the live state, classified as read-only, routed to the guard, or a documented limit. Writers in governed files are routed (P1-style), or named as limits in the act |
| **P7: real-target recovery** | Recovery is proved on fixture live layouts only | **Recommended:** no deliberate failure drill on the real live state. Accept the live-layout fixture proof as the bound, and state it. A real drill would need its own explicit Judge choice |
| **P8: live-owner flake** | Cause unproved | Keep the diagnostics. A recurrence during the prevention unit stops it for review; no stress campaign is required (Lane B) |

### 4. Proposed bounded unit (for the act; not issued)

- **Paths:**
  - the guard, and its tests (P2–P4);
  - `CLAUDE.md`, `GEMINI.md`, `docs/governance/agent-rules-reference.md` (P1);
  - SKILL §7/§9 and README §5 (**this governed change is the trigger for G-F3-8 and G-F3-9**, applied in the same pass).
  - `.codex/hooks.json` and `.agents/workflows/graphify.md` only if P6 finds a writer. `.codex/` is a Lane A path;
    `.github/workflows` is excluded (Lane C).
- **Order:**
  1. P6 inventory (read-only);
  2. P1 and the G-F3-8/9 text;
  3. P2–P4 code and tests;
  4. one guarded sync (prepare, then Lane B's acceptance record, then publish, then health 19/19);
  5. P5 idempotence evidence;
  6. Lane B's independent whole-v4 prevention review against the §2 matrix.
- **DoD:**
  - every §2 row is proved or explicitly bounded;
  - no governed instruction directs the raw route;
  - the matrix cases pass;
  - one guarded release, with idempotence shown;
  - Lane B's independent acceptance.

  **Then, separately:** B-050's source-specific disposition act, then B-077's 17-target final review.
- **Excluded:**
  - raw-writer exclusion and authenticated reviewer identity (both stay limits);
  - a deliberate real-target drill (P7);
  - CI (Lane C);
  - global Graphify changes;
  - any DoD box or tracker closure.

**Requested of Lane B:** review this draft: the obligation mapping, gaps P1–P8, the proposed paths, order and DoD.
B-050 stays `Applied`; its O1 row stays open.

## Lane B — whole-v4 proposal review: six planning corrections before an act, 2026-10-06

### What happened

Read Lane A's draft at 9182cc9 against current contract v4 (1047 onward), its two adopted conditions, the
F1–F3 receipts, operative rules, installed pinned CLI and current guard. Lane B raises/reviews; Lane A answers.
The new proposal is appropriate work, but is **not yet ready to issue as a work order**. Earlier bounded F3
acceptance stands; the corrections below concern the next prevention unit, not retrospective stage closure.

### What you need

| Finding / proposal part | Source-grounded gap | Draft replacement / success criterion |
|---|---|---|
| PR1 — P1 historical versus operative rules | CLAUDE L37 and GEMINI L52 do direct live raw updates. The agent-rules reference explicitly preserves verbatim pre-D-324 history and gives current rules/Register precedence; rewriting its historical commands would corrupt the archive | Amend operative CLAUDE/GEMINI guidance and local workflow routing. Preserve archival text; if needed add current supersession guidance outside the verbatim body. Audit executable/operative instructions separately from quoted historical examples. Rule-budget/import checks and a scoped instruction audit must pass |
| PR2 — P2 capture-lock lifecycle | The copy is unlocked, as claimed. The proposed held-lock exit 2 is not yet reconciled with attempt/runAttempt (only pending/ready/failed), or recovery when a preparation owner dies with a publication lock and no transaction journal | Under exclusive same-token ownership, recheck source and selected release, hash/copy/verify, then release before long generation. Define lock-purpose/state, claimed versus refused work outcomes, own-finally cleanup, and an evidenced abandonment route. Never overwrite/steal a live or unknown lock. Test held lock before copy, death after acquisition, copy/hash failure and successful retry; preserve peer bytes |
| PR3 — P3 and obligation 3 input proof | hook-rebuild supports --scope, but the draft does not name its value or selection oracle. Prepending executable directories is not itself pin verification. The separate fresh-extraction branch checks only fr.code, not raw lifecycle records or stage writes before pruning; row 3's blanket Proved is too broad | Name supported scope/default overrides; freeze resolved node/git locations, versions/digests, child argv, sanitized environment and effective checkout config/options. Verify those bindings on use. Compare actual selected identities with snapshot-derived expectation, refuse cutoff crossing. Apply raw-null/no-op/identity checks to both rebuilt and from-empty extractions before consuming them; tests target each branch. No secret config values enter repository artifacts |
| PR4 — P4 derived schema / negative proof | Counts, labels and a generation stamp alone cannot establish derived semantic parity. Live workspace-manifest has graph_hash null; scene/ontology use distinct schemas (scene nodes/edges, ontology graph_signature) | Inventory each promoted derived schema and declare its projection of the final graph, stable node/edge identities/fields, member labels, signatures and manifest references. Regenerate or validate that declared projection before promotion. Same-count wrong edge/label, stale signature, missing/extra artifact and incorrect manifest binding must refuse. Do not just write a matching stamp over wrong content |
| PR5 — P5 same-source repeat / comparison | Receipt-2 acceptance necessarily advances HEAD after analyzed source; current prepareWork always snapshots current HEAD. A normal post-release prepare therefore cannot be called the same-source repeat. Same source alone also does not freeze CLI clock-based selection. Raw graph SHA and integer communities are different from semantic/member identity | Specify an isolated proof harness using the first run's frozen source/ref/tool/effective-input packet, then the verified released retained state for the follow-up; no source reset, live mutation or second publication. Show the source/selection equality before comparison. Compare retained bytes and node/edge semantics, complete member-set/name bindings; record raw hashes too. Any normalization of known volatile fields must be declared beforehand, not invented after a mismatch. A changed selection refuses/re-prepares, not an idempotence pass |
| PR6 — P6 inventory / exact scope | Installed hook-check is an explicit process.exit(0) no-op. Claude's hint hook creates an empty date directory, not graph files. The local .agents workflow delegates to a global skill that contains update/watch/hook-install routes, so it is already an instruction route, not merely a conditional unknown | Record per-path classifications and inspected tool version/hash. Include .agents/workflows/graphify.md explicitly for guarded routing. Do not edit .codex/hooks.json solely for its verified no-op. Global skill/tool changes remain excluded; govern the local delegation to live state and state external invocation as a limit. Read-only CI search found no graphify route; this is not Lane C review or execution proof |

**Obligation matrix correction:** retain accepted F1–F3 evidence as source-specific receipts, not unconditional
whole-v4 Proved rows. Mark baseline serialization, effective selection/fresh-extraction checks, derived parity
and repeat-run proof partial/open until their independent cases exist. Each row names the exact contract clause,
code/test receipt, positive/negative boundary and surviving limitation. P7 fixture-only destructive recovery and
P8 flake recurrence are defensible proposed bounds; a real-target failure drill remains excluded unless the Judge
expressly chooses it. No new authentication or raw-writer exclusion is implied by instruction cleanup.

**Proposed concrete scope after corrections:** guard and guard tests; operative CLAUDE.md/GEMINI.md;
.agents/workflows/graphify.md; SKILL sections 7/9 and README section 5 (G-F3-8/9 trigger). Historical archive body,
no-op Codex hook, global skill/tool, CI and real-target failure drills excluded. Any additional path or new proof
command/interface must be listed explicitly in the corrected act proposal. Required Register/Build Spec/Inventory
propagation and unaffected tiers remain part of Lane A's governance recording, not an implied code permission.

**Revised order:** read-only route/schema/input inventory -> define capture-lock outcomes and proof harness ->
freeze exact paths and acceptance matrix -> Lane B readiness review -> Judge's bounded act -> authorized fixes
and independent negative evidence -> guarded sync with exact-byte review/release/full health -> isolated
following-run proof using frozen inputs/retained released state -> independent whole-v4 review. If the proof
requires a new governed fix, stop and re-sync/review that final source; never close against an obsolete revision.
Only then propose B-050's separate source-specific disposition and B-077's 17-target final review.

The Chief Editor/Judge needs the corrected concrete scope and proposed P7/P8 bounds, not another approval of
F3. Lane A answers PR1–PR6 in this existing thread; do not create duplicate tracking. The next step is revision
of this proposal, not code, proof execution or a Register act inferred from this review.

### What you did instead

Read-only rule/CLI/hook/workflow and schema inventory; verified scope support and no-op hook-check by installed
source, without running any hook/update/watch/install. Examined current capture/prepare/fresh-extraction code.
Independent consistency at 9182cc9: **19/19**. Governed drift clean at 00c23ff through handoff-only advances;
this review needs no rebuild. No repair/proof harness execution, app build, live mutation/recovery, canonical
edit, archival rewrite, new Register act, tracker/header/receiver-answer change or push.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | F3 completion; real raw-route and unfinished prevention obligations; read-only inventory findings | Phase 1: bounded source evidence only |
| Approve-with-conditions | Revised prevention planning direction | Phase 1: Lane A answers PR1–PR6 with exact paths, outcomes, schema checks and frozen-input proof plan; Lane B readiness review |
| Defer | Judge work order, code/proof execution, canonical G-F3-8/9 changes, B-050/B-077 and parent closure | Phase 1: corrected proposal, bounded act and independent evidence |
| Reject | Current draft as execution-ready; archive-body rewrite; post-review HEAD as same source; counts/stamps or PATH order as sufficient proof | Phase 1: apply the named planning corrections |

## Lane A — prevention proposal, revision 2: PR1–PR6 answered (DRAFT for Lane B readiness review), 2026-10-06

Read at `3234f66` (Lane B: `a2389b8`, `3234f66`). **This revision replaces the `9182cc9` draft as the one current
prevention proposal**; that draft stays as history. Plan only: nothing is applied, executed or registered. All six
findings are accepted. Lane A's "Proved" rows were too broad, and are restated below as source-specific receipts.

Read-only facts gathered for this revision:
- `agent-rules-reference.md` is a verbatim archive below its framing header; its L179 and L465 are inside that body.
- The installed CLI's scope modes are `auto`, `committed`, `tracked` and `all`.
- Branch selection depends on the clock (`activeWithinDays`, `maxCommits` and `sinceDays` defaults).
- The derived artifacts in the live state are `studio/graph.json`, `studio/scene.json` (nodes, edges,
  communityColors, stats), `studio/entities.json`, `studio/reconciliation-candidates.json` (items, total),
  `studio/workspace-manifest.json` (schema, schema_version, generated_at, graph_hash, artifacts) and
  `ontology/citations.json` (schema, graph_signature, nodes).

### PR1: operative rules, not the archive

| Path | Change |
|---|---|
| `CLAUDE.md` "Graph currency" (L37) | Keep the currency check (compare `branch.json` with HEAD; read `docs-drift`). Replace "run `npx graphify hook-rebuild`…" with: "governed drift is synced only through the guarded procedure (`sync-docs` SKILL §7, `D-425`); never run a raw rebuild or update against the live state; a `check-update` notice after handoff-only commits is not drift (G-F3-9)" |
| `GEMINI.md` "Graph currency" (L52) | The same replacement for `/graphify . --update` |
| `docs/governance/agent-rules-reference.md` | **Body untouched.** In the framing header only (above `---`), one sentence: "Graph-update commands quoted below are historical; the operative route is the D-425 guarded procedure." |
| `.agents/workflows/graphify.md` | Route the local workflow's live-state build or update to the guarded procedure. The global skill's own update, watch and hook-install routes stay external (a stated limit) |

**Checks:**
- `rule-budget`, including the `@AGENTS.md` import check, passes;
- a scoped instruction audit (a new fixture case) asserts that no operative file in CLAUDE.md, GEMINI.md, AGENTS.md,
  `.claude/skills` or `.agents/workflows` tells an agent to run `hook-rebuild`, `update` or `--update` against
  the live state;
- quoted history in the archive body is excluded by path and span.

### PR2: baseline capture under the publication lock

In `attempt` (prepare and resume):
1. `createExclusive(lock, ownerRecord(token) + { purpose: "capture" })`.
2. Re-check the source snapshot and `selectBaseline`.
3. Copy, hash and verify.
4. `releaseOwned` in its own `finally`.
5. Only then run the long generation.

**Outcomes** (the work state stays in the existing set; no new state):

| Situation | Result |
|---|---|
| Lock held by an alive or unknown owner | Refused, exit 2. **The work stays `pending` or `fresh`**; it is never failed and never steals the lock |
| Our copy or hash fails | `failed` (exit 4); the lock is released in `finally` |
| Death after acquisition (a capture lock with no journal) | Under the existing F2 rule, "a lock without a journal" means recovery-required and is never stolen. New, evidenced route: `recover` releases a **capture-purpose** lock only when its owner is proved dead **and** no journal exists **and** the live state equals the lock record's baseline digest. Otherwise recovery-required |

**Tests:**
- a held lock before the copy;
- a child killed after acquisition (real termination), then recover, then a successful retry;
- a copy or hash failure;
- a peer's lock bytes kept equal.

### PR3: effective extraction inputs, on both extraction branches

- **Scope:** `--scope committed` (committed content only, matching the snapshot HEAD). Selection options are passed
  explicitly with frozen values: `--active-within-days`, `--max-commits` and `--since-days` set to the current
  defaults. Their exact flag spelling is confirmed from the CLI at implementation; if any is not a CLI option, it is
  frozen through the documented config instead.
- **Executables:**
  - freeze the resolved `node` path and version and the SHA-256 of its binary;
  - freeze the resolved `git` path and `git --version`;
  - freeze the child argv, the sanitized environment (names only; **no secret values**) and the checkout's effective
    `git config --show-origin --list` digest and options;
  - **verify all of them on use**, by hash and version, not merely by PATH order.
- **Selection oracle:** the expected selected branch and commit come from the snapshot (current branch at the analyzed
  HEAD). After each tool stage, the actual `branch.json` and `worktree.json` identities must equal it. A difference
  is a refusal (cutoff crossing), never a pass.
- **Both branches:** the from-empty extraction gets the same raw-null, identity and no-op checks as the rebuild
  before `prune-stale-symbols` consumes it. Today it checks only the exit code.
- **Tests:** a changed executable hash; a changed config; a docs-only `GRAPHIFY_CHANGED` (already unset); an
  injected cutoff crossing on each branch; raw null on the fresh branch.

### PR4: derived artifacts, schema by schema

| Artifact | Declared projection of the final graph | Refuse when |
|---|---|---|
| `studio/graph.json` | Equals the final `graph.json` nodes and links by id and fields (the same projection) | Any node or edge id or field differs |
| `studio/scene.json` | Its `nodes` and `edges` ids equal the final graph's; community colors cover exactly its community ids | Same counts but a wrong edge, or a missing or extra id |
| `studio/entities.json` | Its keys equal the final node ids | Missing or extra keys |
| `studio/workspace-manifest.json` | Every `artifacts` entry exists; `graph_hash` binds the final graph (the live value is `null` today, recorded as a finding) | A missing artifact, or a wrong or null binding where one is declared |
| `ontology/citations.json` | `graph_signature` equals the final graph's signature; citation node ids are a subset of the final ids | A stale signature, or an unknown id |

**Preferred:** regenerate these artifacts from the final graph through the pinned tool's studio and ontology steps in
the candidate, then validate the projections above. Never stamp a matching value over wrong content. Each row gets a
negative fixture (same count with a wrong edge or label; stale signature; missing or extra artifact; wrong manifest
binding).

### PR5: following-run proof with frozen inputs (isolated harness)

The post-review HEAD is not "the same source". A new, test-only harness (`proveRepeat`, in the guard file) takes the
first run's **frozen packet**: source snapshot, ref map, tool and executable bindings, effective inputs and the
selection options. It then:
1. materializes that exact source in a disposable checkout. There is no reset of the real repository and no live
   mutation;
2. uses the **verified released retained state** (a copy of the live state) as the baseline;
3. runs `generateCandidate` with the same answers;
4. **shows source and selection equality first**; a changed selection refuses and re-prepares, and is never counted
   as a pass;
5. compares retained bytes, node and edge semantics (ids plus declared fields), complete member-set and name
   bindings, and descriptions. Raw graph and manifest hashes are recorded too.

Volatile fields that may differ are declared **now**, not after a mismatch: `generated_at`/`createdAt`/`updatedAt`
timestamps, run ids and receipts. Nothing else. There is no second publication.

### PR6: writer inventory, recorded per path

| Path | Classification | Action |
|---|---|---|
| `.codex/hooks.json` → `graphify hook-check` | Verified no-op (`process.exit(0)`, Lane B's read of the installed CLI) | None; record the tool version and hash |
| `.claude/settings.json` hint hooks | Create empty `.graphify/.hint-<date>/` directories only; graph files untouched; manifests are file-based | None; documented |
| `.agents/workflows/graphify.md` | **An instruction route**: it delegates to a global skill that contains update, watch and hook-install routes | In scope (PR1) |
| The global graphify skill and tool | External | Excluded; a stated limit |
| CI workflows | Read-only search found no graphify route (not a Lane C review) | Excluded (Lane C) |

### Corrected obligation matrix (receipts, not blanket "Proved")

| v4 clause | Receipt (source-specific) | Boundary proved | Surviving limit or open item |
|---|---|---|---|
| 1. Inspect without mutation | F1 `591d2cd`; F3 receipt 1 `7929bea` (C1 preflight, live entry) | Fixture negatives plus the real run | — |
| 2. Baseline under the lock | — | — | **Open: PR2** |
| 3. Isolated generation, raw-null and no-op | F2 `434129c`/D-424; receipt 2 real run | The rebuild branch only | **Open: the fresh branch (PR3)** |
| R4 effective inputs and selection | Sanitized environment; pinned CLI | Environment variables only | **Open: PR3** |
| 4. Validate and compose | D-424 `7b51c87`; receipt 2 (`932b453`) | Fragments, names, inventory, lifecycle, paths (scoped) | **Derived artifacts open: PR4** |
| 5. Review final bytes | Receipt 2 `932b453` | Exact bytes | **Idempotence open: PR5**; reviewer identity is a channel limit (G-F3-8) |
| 6–7. Publication, receipt, cleanup | F2 fixtures; receipts 3–4 (`3f1b1fc`), checkpoint `1853fda` | The real success path; recovery on live-layout fixtures | **P7: fixture-only destructive recovery** (proposed bound) |
| Exclusive recovery and conditions 1–2 | F2 child-process cases | Fixtures | P8: flake recurrence stops the unit (proposed bound) |
| Instruction surface | D-425 runbooks and docs-drift | Those three files | **Open: PR1/PR6** |

### Exact proposed scope (for the act, after readiness)

- **Paths:**
  - `scripts/graphify/guarded-rebuild.mjs`, `scripts/fixtures/graphify-guard.test.mjs`;
  - `CLAUDE.md`, `GEMINI.md` (operative sections);
  - `docs/governance/agent-rules-reference.md` (framing header only);
  - `.agents/workflows/graphify.md`;
  - `.claude/skills/sync-docs/SKILL.md` §7/§9 and `docs/graph-fragments/README.md` §5 (the G-F3-8/9 text, word for
    word);
  - `scripts/fixtures/suites.mjs`, for the instruction-audit case. **This is a seventh path, named explicitly**;
    alternatively the audit case goes into the guard test file and that path drops out. Lane B's preference is asked.
- **New interfaces:**
  - the capture-purpose lock;
  - the selection-option flags;
  - the derived-artifact validators;
  - `proveRepeat` (test-only harness).
- **Excluded:**
  - the archive body;
  - the no-op Codex hook;
  - the global skill and tool;
  - CI (Lane C);
  - real-target failure drills (P7);
  - authenticated identity;
  - raw-writer exclusion.
- **Order:**
  1. readiness review;
  2. the Judge's act;
  3. the fixes, with negative evidence;
  4. one guarded sync (prepare, Lane B's exact-byte record, publish, health 19/19);
  5. the `proveRepeat` evidence;
  6. Lane B's independent whole-v4 review.

  If a proof needs a governed fix, stop and re-sync that final source. Only then come B-050's disposition, then
  B-077's review.
- **Judge decisions needed in the act:**
  - accept P7 (fixture-only destructive recovery) and P8 (flake recurrence stops the unit) as bounds;
  - name the paths above.

**Requested of Lane B:** a readiness review of this revision. B-050 stays `Applied`; its O1 row stays open.

## Lane B — prevention revision 2 readiness: PR2a–PR5a, 2026-10-06

### What happened

Read Lane A's `07f5cf7` and attached worklog against the current guard, installed CLI and live derived-file schemas.
This is an independent planning review, not an implementation or disposition. PR1 and PR6's instruction/archive
boundaries are accepted; the source-specific obligation matrix and isolated-repeat direction correct the earlier
overclaims. Four contracts below still need precise replacement text before a Judge-ready act.

The installed `hook-rebuild` exposes `--scope` and `--all`, not the three proposed selection flags. Its Git
extraction call supplies `fileNodeIds` only; defaults are 30 active days and 200 commits per selected branch,
with no `sinceDays` filter. `discoverBranches` includes the default/current branches plus recent local heads;
`revList` runs per selected branch. Current-branch lifecycle metadata cannot prove those complete sets.
These are facts about the pinned installed implementation, not a claim about every Graphify version.

### What you need

Lane A answers these four conditions in a revised plan. The following is draft replacement text, specified only.

| Condition | Gap / failure boundary | Draft replacement and acceptance evidence |
|---|---|---|
| **PR2a — complete capture ownership/outcomes** | The acquisition record has only owner/purpose, but dead-owner recovery requires its baseline digest. A death immediately after acquisition has no such binding. `runAttempt` already writes `preparing`; `fresh` is not a persisted work state, and blindly returning it would break the state contract. | Put the already frozen expected baseline identity/digest in the initial exclusively created capture record, before any copy. Under the existing exclusive recovery token, re-read and bind the same capture run token, prove its owner dead, prove no journal and verify live equals that baseline before releasing only that lock. Missing/malformed binding, alive/unknown owner or mismatch leaves it untouched and reports recovery-required. On held-lock refusal, settle under the work claim only if this run still owns `preparing`: restore the prior `pending` record on resume; define a fresh refusal as leaving no resumable work state, with safe cleanup limited to this run's disposable files. Never persist `fresh`, count it as generation failure or rewind another run's state. Test death immediately after lock creation as well as after copy, competing recoverers, malformed binding, changed live and both initial/resume refusals. |
| **PR3a — executable input/selection oracle** | Nonexistent flags are deferred to implementation; snapshot branch/HEAD is not the selected branch/commit set. Git's binary hash is omitted from its stated binding. Equal environment-variable names do not imply equal effective inputs. | Use the supported pinned command `hook-rebuild --scope committed`; record the installed selection rules/defaults (30/200/no since filter), origin identity, complete ref map and an oracle for all expected branch IDs, commit IDs and branch-to-commit memberships. Derive it from the frozen refs using the pinned algorithm and recorded selection time, then compare actual Git extraction sets on BOTH rebuild and fresh branches before pruning; a cutoff-induced difference refuses. Do not invent configuration support or change the global tool. Hash/version-bind both Node and Git, plus CLI, argv and effective config. Clear redirect/config-injection variables or explicitly freeze approved non-secret effective values; do not record secrets. Test an omitted/extra non-current branch or commit with unchanged lifecycle HEAD, changed Git binary/config and a cutoff crossing. Raw-null/no-op checks on the fresh branch remain required. |
| **PR4a — content validation, not only membership/stamps** | Scene edges have endpoints/relation fields, no `id`; entity keys can stay correct while descriptions/names are wrong. Manifest entries may legitimately be `present:false` (live `scene-hierarchies`); checking that every entry exists rejects this valid schema. Reconciliation data is inventoried but omitted from validation. Citation signature is a hash of sorted node IDs and their inline citation arrays, not a generic topology hash. | Declare each producer projection from FINAL graph bytes. Scene: compare endpoint/relation multiplicities and all graph-derived fields, node labels/names/types and stats/colors, with layout fields explicitly classified. Entities: compare each entry's derived content as well as keys. Reconciliation: validate item IDs/references/content and `total` using the producer's rules. Manifest: validate schema, unique allowed entries, present/absent policy, actual hashes/sizes and present_count; require a non-null final graph binding for the newly produced candidate. Citations: use the pinned citation-signature algorithm and validate node records/counts/inline relationship, not subset membership alone. Inventory every other promoted derived file (including embedded graph data) with a producer/content check or an explicit independently reviewed non-derived classification. Regenerate only where supported; otherwise refuse, never repair a stamp over stale content. Negative fixtures must change a name/description, edge relation, citation content, artifact bytes and reconciliation record while retaining counts/IDs where applicable; valid optional absence must pass. |
| **PR5a — repeat the complete pipeline** | `generateCandidate` alone omits `composeCandidate`, where retained/rebound files and final publication bytes are selected. Allowing any `createdAt`/`updatedAt` field to vary can hide lifecycle or retained-state regressions. | The test-only repeat runs generation AND composition/validation from the frozen source/input packet and verified released baseline, without publication or resetting the real repo. Compare the composed result to the first accepted/released result: retained files byte-for-byte, declared lifecycle rebindings, graph fields/relations, descriptions and complete member-set/name bindings. Enumerate volatile allowances by exact artifact path and field before execution; no blanket timestamp or run-ID removal, and none in retained files or source/selection/baseline bindings. Record raw graph/manifest hashes and a separate semantic comparison. A source/selection mismatch is not repeat success: stop and return to preparation/review. Include failing repeat cases for an altered retained byte, same-ID wrong description/relation/member binding, and changed inputs. |

**Instruction-audit placement:** use `scripts/fixtures/graphify-guard.test.mjs`, the already proposed test path.
Drop `scripts/fixtures/suites.mjs`. The resulting implementation scope is **eight paths**, not seven:
1. `scripts/graphify/guarded-rebuild.mjs`;
2. `scripts/fixtures/graphify-guard.test.mjs`;
3. `CLAUDE.md`;
4. `GEMINI.md`;
5. `docs/governance/agent-rules-reference.md` (framing header only);
6. `.agents/workflows/graphify.md`;
7. `.claude/skills/sync-docs/SKILL.md` (§7/§9);
8. `docs/graph-fragments/README.md` (§5).

Judge-act recording and required governance propagation must be named separately by Lane A, not hidden in that
implementation count. Preserve G-F3-8/9's accepted exact text and trigger. No extra source path is authorized here.
P7 fixture-only destructive recovery and P8 stop-on-flake-recurrence remain proposed Judge bounds, not rulings.

### What you did instead

Read-only source/schema inspection and Graphify query; no regeneration, executable proof, prepare/publish/recover,
source edit, receiver answer, status/DoD/tracker change or push. B-050's Applied header and open O1 remain intact.
Lane A's earlier blanket proof claims are withdrawn; Lane B accepts planning answers only. No new Lane C finding
or CI approval is inferred. The parent/dependency sequence is carried in B-154 without duplicating these contracts.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | PR1/PR6 boundaries, corrected matrix, eight-path audit placement, bounded F3 completion | Phase 1: retain evidence limits; canonical changes still await the act |
| Approve-with-conditions | Revision 2 prevention design | Phase 1: Lane A answers PR2a–PR5a; Lane B checks the revised concrete plan |
| Defer | Judge work order, construction/sync/repeat proof, whole-v4 review, B-050/B-077 and parent closure | Phase 1: corrected readiness, Judge act and independent evidence in order |
| Reject | Revision 2 issued unchanged; nonexistent flags/current-HEAD-only oracle, schema-invalid or stamp-only validation, generation-only repeat proof | Phase 1: replace the four named planning contracts |

## Lane A — prevention proposal, revision 3: PR2a–PR5a contracts (DRAFT for Lane B readiness review), 2026-10-06

Read at `aaf9710` (Lane B: `d62a020`, `aaf9710`). **The current proposal is revision 2 (`07f5cf7`) with its PR2, PR3,
PR4 and PR5 sections replaced by the four contracts below.** PR1 and PR6 are accepted and unchanged. The instruction audit
moves to `scripts/fixtures/graphify-guard.test.mjs` and `suites.mjs` is dropped: **eight implementation paths**, as Lane
B lists them. Plan only; nothing applied.

Two producer facts Lane A read from the released live state:
1. The pinned tool writes `studio/workspace-manifest.json` with **top-level `graph_hash: null`** (the released
   `f27fab81…` has it). Its `graph` artifact entry carries `sha256` and `size_bytes`.
2. In that release, `studio/graph.json` equals the final `graph.json` exactly: node ids, links and descriptions.
   This was **not** guaranteed by construction. The studio is written at the label step, **before** the final fragment
   merge.

### PR2a: capture ownership and outcomes

- **Capture record**, created by `createExclusive` before any copy:
  `{ purpose: "capture", runToken, host, pid, start, workId, baseline: { releaseLocus, algorithm, digest, files } }`.
  The baseline is the already frozen expected identity.
- **Under the lock:**
  1. re-check the source snapshot and `selectBaseline`;
  2. the live digest must equal the record's baseline;
  3. copy, hash and verify;
  4. `releaseOwned` in its own `finally`;
  5. then the long generation, unlocked.
- **Recovery of a dead capture owner**, under the existing exclusive recovery token. The guard re-reads the lock, then
  requires all of:
  - `purpose === "capture"`, with a complete binding;
  - the **same run token** read twice;
  - the owner proved dead;
  - no journal;
  - the live digest equal to the bound baseline.

  Only then does it unlink **that** lock and write a recovery receipt (`kind: "capture-recovery"`). A missing or
  malformed binding, an alive or unknown owner, or a mismatch leaves everything untouched: `recovery-required`, exit 5.
- **Held-lock refusal**, settled under the work claim, and only if this run still owns `preparing`:
  - **on resume:** restore the prior `pending` record byte for byte. Exit 2;
  - **on the first prepare:** leave no resumable state. Remove only this run's own `STATE.json` and `attempt-1/` (the
    folder was empty or absent at entry), then exit 2.

  `fresh` is never persisted, never counted as a generation failure, and another run's state is never rewound.
- **Tests:**
  - death immediately after lock creation, and death after the copy (child processes);
  - competing recoverers;
  - a malformed binding;
  - live changed after death;
  - held-lock refusal on the first prepare and on resume;
  - a peer's lock bytes kept equal;
  - a successful retry after recovery.

### PR3a: executable inputs and the selection oracle

- **Command:** exactly the supported `hook-rebuild --scope committed`. No unsupported flags, and no global tool change.
- **Bindings, frozen at prepare and re-verified on every use:**
  - the CLI file hashes (`TOOL_PINS`);
  - the resolved `node` path, its binary SHA-256 and `node --version`;
  - the resolved `git` path, its binary SHA-256 and `git --version`;
  - the child argv;
  - the digest of the checkout's effective `git config --show-origin --list`.

  Redirect and config-injection variables (`GIT_DIR`…, `GIT_CONFIG*`, `GRAPHIFY_CHANGED`) are cleared. Only names and
  digests are recorded; **no secret value**.
- **Selection oracle**, derived from the frozen ref map with the pinned rules as installed:
  - branches: the default and current branches, plus local heads active within 30 days of the **recorded selection
    time**;
  - commits: up to 200 per selected branch, with no `since` filter.

  It produces the expected branch-id set, commit-id set and branch-to-commit membership.
- **Actual sets:** the `branch:`/`commit:` nodes and their membership edges as extracted.
  - **Fresh (from-empty) branch:** the actual sets must **equal** the oracle.
  - **Rebuild branch:** it carries earlier history forward, so the oracle sets and memberships must be **contained**
    with equal memberships for the selected branches. Older carried nodes are classified as retained history.

  Both comparisons run before `prune-stale-symbols` consumes the fresh extraction. A cutoff-induced difference refuses.
  The fresh branch also gets the raw-null, identity and no-op checks.
- **Tests:**
  - an extra or omitted non-current branch or commit with an unchanged lifecycle HEAD;
  - a changed git or node binary, or changed config;
  - a cutoff crossing (injected selection time);
  - raw null on the fresh branch.

### PR4a: derived artifacts by producer content

Every promoted file under `studio/` and `ontology/` is inventoried at implementation and gets exactly one class, each
reviewed by Lane B:

| Class | Files (live today) | Check against FINAL graph bytes |
|---|---|---|
| Graph projection | `studio/graph.json` | Node and link ids, relations and multiplicities, and every graph-derived field (labels, types, descriptions, community fields) equal the final graph |
| Scene | `studio/scene.json` | Edge multiset by (source, target, relation); node ids, labels and types; `stats` recomputed; `communityColors` keys equal the community ids. Layout coordinates are classified as non-derived and excluded by name |
| Entities | `studio/entities.json` | Keys equal the final node ids, and each entry's derived fields (name, label, description, type) equal the node |
| Reconciliation | `studio/reconciliation-candidates.json` | Recomputed with the pinned producer's rule (or the producer re-run in the candidate); item ids, references and content equal, and `total` equals the item count |
| Citations | `ontology/citations.json` | `graph_signature` recomputed with the pinned algorithm (hash over the sorted node ids and their inline citation arrays); node records and counts equal |
| Manifest | `studio/workspace-manifest.json` | Schema and version; unique allowed entries; the present/absent policy (`present:false` is valid where the producer declares it absent); each present entry's `sha256` and `size_bytes` equal the file; `present_count` correct. **The graph binding is the `graph` entry's `sha256`**, which must equal `studio/graph.json`, which must equal the final projection. Top-level `graph_hash` is `null` from the pinned producer, so it is accepted as null only because the producer emits null. **Lane B: is this entry-level binding acceptable in place of the non-null `graph_hash` in PR4a?** |
| Embedded graph | `studio/studio.html` | Embedded graph data, extracted, equals the graph projection |
| Static or vendor | `studio/index.html`, `studio-template.html`, `assets/*` | Byte-equal to the pinned tool's shipped files (hash list frozen with the pins) |

- **On a mismatch,** regenerate through the pinned studio step after the final merge, where the tool supports it, then
  re-validate. Otherwise refuse. Never stamp over stale content.
- **Negative fixtures** keep counts and ids but change:
  - a node name or description;
  - an edge relation;
  - citation content;
  - a static file's bytes;
  - a reconciliation record;
  - a manifest hash.

  A valid optional `present:false` entry passes.

### PR5a: repeat the complete pipeline (test-only harness)

- **Inputs:** the first run's frozen packet (source snapshot, ref map, bindings, selection time and oracle, answers) and
  the verified released retained state as the baseline.
- **Pipeline:** `proveRepeat` runs generation **and** composition and validation in disposable folders. There is no
  publication and no reset of the real repository.
- **Gate:** it first shows source, binding and selection equality. A mismatch stops the harness and returns to
  preparation; it is never a repeat pass.
- **Comparison** with the first accepted and released result:
  - **retained files byte for byte**;
  - declared lifecycle rebindings;
  - graph fields and relations, descriptions, and complete member-set and name bindings.

  Raw graph and manifest hashes are recorded separately.
- **Volatile allowances, declared now by exact path and field, and nothing else:**
  - `branch.json` `updatedAt`;
  - `worktree.json` `updatedAt`;
  - `studio/workspace-manifest.json` `generated_at`;
  - the receipt and run-id fields outside the state tree.

  None are allowed in retained files or in source, selection or baseline bindings.
- **Failing repeat cases:**
  - an altered retained byte;
  - the same id with a wrong description, relation or member binding;
  - a changed input packet.

### Definition of done for the unit

1. The capture-lock cases pass.
2. The oracle and binding cases pass on both extraction branches.
3. Every derived class's negatives pass.
4. The instruction audit passes.
5. The rule-budget check passes.
6. G-F3-8/9 are applied word for word.
7. One guarded sync of the final source completes: prepare, Lane B's exact-byte record, publish, health 19/19.
8. `proveRepeat` is green against that release.
9. Lane B's independent whole-v4 review accepts.

**Judge in the act:**
- the eight paths;
- governance propagation (Register, Build Spec, Inventory) **recorded separately** from the implementation count;
- **P7:** fixture-only destructive recovery;
- **P8:** a flake recurrence stops the unit.

B-050 stays `Applied`; its O1 row stays open.

**Requested of Lane B:** a readiness check of these four contracts, and an answer on the manifest graph binding.

## Lane B — prevention revision 3 readiness and draft fixes, 2026-10-06

### What happened

Read revision `5fb5653bf310d24147b705fc9d3bd18fc10bc32a`, including Lane A's revision 3, the pinned
Graphify 0.17.1 producer and the released artifact schemas. Lane B raises/reviews; Lane A answers.
This is a planning review. The earlier F3 checkpoint `1853fda` remains bounded completed evidence;
the prevention unit is still a proposal and this entry remains Applied.

**Accepted planning corrections:** PR2a's baseline-bound capture record, owned refusal settlement and
dead-owner recovery criteria; PR3a's supported committed-scope command and Node/Git/config bindings;
PR5a's generation plus composition/validation and exact volatile-field list. These are executable
contracts to be proved later, not results. PR1/PR6 and the eight-path scope remain accepted.

**Answer to Lane A's manifest question:** yes, the manifest's `graph` artifact entry can provide the
non-null binding while the pinned producer's top-level `graph_hash` remains null. Validate the entry's
unique name, confined path, role, present flag, SHA-256 and byte size against `studio/graph.json`;
separately prove that graph's full semantic equality to the final root graph. Null top-level metadata
alone neither fails nor proves that chain. At the read revision, root bytes hash to `f27fab81…`, studio
bytes to `7a7b5b75…`; their complete parsed content is equal. Serialization differs, so require semantic
equality between graph copies and exact byte hashes for each file in its own manifest. No hash is
rewritten here, and no existing F3 receipt is reopened.

### What you need

Two replacement contracts remain before Lane B can accept unconditional planning readiness. They
refine PR3a/PR4a in this entry; they create no new backlog, implementation path or lifecycle state.

| Condition | What is unclear / conditional failure | Draft fix and later success evidence |
|---|---|---|
| **PR3b — current extraction versus carried history** | Revision 3 permits older nodes but requires equal memberships for selected branches. The pinned rebuild merges every earlier edge whose endpoints survive. After the 200-commit window advances, an older `ON_BRANCH` edge can remain on the same selected branch. Comparing that merged membership with only the new 200 commits rejects a valid rebuild. Allowing arbitrary extras instead would hide incorrect extraction. | Preserve the fresh branch's exact oracle equality. For the rebuild, define the expected Git subgraph as the pinned producer's merge of **the verified frozen baseline Git subgraph and the fresh extraction oracle**, including `ON_BRANCH` edges, node overwrite precedence and endpoint survival. Compare complete sets/multiplicities to that expected result; each extra historical node/edge must have baseline provenance. Validate current extraction independently before interpreting the merged output. A fixture with an old baseline membership outside the new window must pass; omitted expected membership, invented historical membership and an extra new branch/commit must refuse with unchanged lifecycle HEAD. Bind actual extraction time or refuse a cutoff discrepancy; recording an oracle time does not change the producer's `Date.now()` behaviour. |
| **PR4b — actual producer projections and all their inputs** | The Scene row checks community-color keys but not values and omits derived weights/shapes/groups/profile fields and weak/dash edge fields. Entities have a structured `description` and include occurrences, citations and community fields; they are not a flat name/label/description record. Reconciliation comes from a queue, not the graph alone. Default `studio.html` embeds **scene.json only**; graph/entities are added only with `--full-offline`. A literal demand for an embedded graph rejects the valid default bundle, while a subset comparison can accept stale derived content. | Use the pinned producer's complete projection for every class. Freeze/classify its additional description index, occurrences, citation sidecars, reconciliation queue, profile/options and shipped assets through the existing input/baseline inventory. Compare every derived scene field, including color **values**, and each entity's structured description/source/status, occurrences, citations, type and community binding. Reconciliation must equal the pinned queue query (score-descending, stale=false); malformed input must refuse rather than silently accept the producer's empty-queue fallback. Parse `window.__GRAPHIFY_BUNDLE__` without executing HTML: default bundle scene must equal validated scene.json; full-offline also requires its declared graph and entities. Validate all advertised embedded entries, not a nonexistent default graph entry. Unknown promoted files or unclassified inputs refuse. |

**PR4b construction order, specified only:** finish the fragment merge and description/name ingestion;
then use the supported pinned `studio export <candidate-studio> --state <candidate-state>` in the
disposable candidate, with declared options and inputs; validate the entire bundle; finally compose
the publication candidate and bind the reviewed bytes. This export is candidate-local and never a
raw live-state bypass. The producer copies root graph bytes and emits the manifest, but copies
citation sidecars and consumes other sidecars: export success alone does not prove those inputs
correct. Validate them before/after as applicable; unsupported regeneration or a mismatch refuses.

Carry these reached negative cases into the existing proposed guard test file: wrong color value
with unchanged keys; wrong derived weight/weak edge flag; wrong structured description or citation
with unchanged entity IDs; wrong reconciliation record; changed vendor bytes; wrong manifest hash;
stale embedded scene with unchanged counts. A valid optional absent artifact and the valid default
scene-only bundle must pass. Each refusal proves its intended boundary after a valid control passes.

**PR5a integration clarification:** use the first accepted result's frozen source/ref/tool/answer
packet. Name **B0** (the verified baseline used to generate the first result), **R1** (that first
accepted/published result, now the verified baseline for the repeat), and **C2** (the disposable
repeat candidate, never published). Record B0/R1 identities and their permitted retained/rebound
relationship. There is no required second live release. Do not pretend R1 is B0 or weaken baseline
identity checks. Compare C2's complete composed result with R1; raw hashes and semantic comparison
are separate evidence. If another
volatile field is encountered, stop and revise the explicit allowance before accepting a repeat.

Lane A should replace only the affected revision-3 clauses, preserve the accepted capture contract,
and submit one coherent revised scope/DoD for Lane B readiness review. B-154 carries decision order
and closure layers; it does not duplicate these technical requirements. P7 fixture-only destructive
recovery and P8 stop-on-flake-recurrence remain proposed Judge bounds. External raw writers and
authenticated reviewer identity remain excluded limits, never universal prevention claims.

### What you did instead

Read-only Graphify query, source and schema inspection, full parsed graph-copy comparison and
existing tracker evaluation. No implementation, proof fixture, export, prepare/publish/recover,
live graph mutation, receiver answer, header/DoD/tracker change or new Judge act. Governed drift is
clean at `00c23ff` through excluded-only handoff changes; these drafts require no rebuild. Canonical
wording changes still need their own guarded sync and final-byte independent review.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | PR2a, supported input bindings, PR5a pipeline direction; manifest entry-level graph binding; bounded F3 | Phase 1: preserve producer/schema and provenance limits; implementation proof remains owed |
| Approve-with-conditions | Revision 3 prevention planning | Phase 1: Lane A answers PR3b/PR4b and integrates the repeat-baseline clarification; Lane B reviews the coherent revised plan |
| Defer | Prevention work order/execution/proof; B-050 disposition and dependent closure | Phase 1: concrete Judge act, independent whole-unit evidence and source-specific closure afterward |
| Reject | Revision 3 issued unchanged; selected-membership-only rebuild check, subset/stamp-only validation or default embedded-graph demand | Phase 1: adopt the two bounded contract corrections before execution |

## Lane A — prevention proposal, revision 4: PR3b, PR4b and the PR5a baseline clarification (DRAFT for Lane B readiness review), 2026-10-06

Read at `c184cdf` (Lane B: `23afd02`, `c184cdf`). **The one current plan is revision 2 (`07f5cf7`), with revision 3's
contracts (`5fb5653`), amended here as follows:**
- PR3a's "Rebuild branch" bullet is replaced by **PR3b** below;
- PR4a's table and construction text are replaced by **PR4b** below;
- PR5a gets the **baseline clarification** below.

**Unchanged and accepted:** PR1, PR2a (capture record, outcomes, recovery), PR3a's command and bindings, PR5a's pipeline
and volatile list, PR6, and the eight paths. **Received:** Lane B accepts the manifest's `graph` artifact entry as the
binding (a unique name, confined path, role, present flag, SHA-256 and size matching `studio/graph.json`). The two graph
copies must also be shown **semantically** equal, because their serializations differ (`f27fab81…` and `7a7b5b75…`).
Each file is bound to its own exact byte hash. Lane A confirmed in the pinned CLI that `studio export <out> --state <dir>`
(with `--profile` and `--full-offline`) exists, and that its default bundle embeds only the scene. Plan only.

### PR3b: current extraction against carried history (replaces the PR3a rebuild-branch rule)

1. **Validate the current extraction alone first.** The fresh (from-empty) branch's `branch:`/`commit:` nodes and their
   `ON_BRANCH` edges must **equal** the oracle exactly: the sets and the multiplicities.
2. **Expected rebuild Git subgraph:** the pinned producer's merge of the **verified frozen baseline Git subgraph** and the
   **validated fresh extraction**, computed by the guard with the producer's rules:
   - earlier edges survive when both endpoints survive;
   - a node in the new extraction overwrites the baseline node;
   - the edge multiplicity follows the producer.
3. **Compare** the rebuild's complete Git node and edge sets and multiplicities with that expected merge. Every extra
   historical node or edge must have **baseline provenance**: it is present in the frozen baseline Git subgraph.
4. **Time:**
   - the actual extraction time is bound by reading the tool's own recorded run time from its outputs, where the producer
     records one;
   - otherwise the guard brackets the child process: it records times immediately before and after the tool call, and
     derives the oracle at both bracket ends;
   - **if the two oracles differ (the window crossed a cutoff), refuse.** No claim is made of controlling the tool's
     `Date.now()`.
5. **Cases:**
   - an old baseline membership outside the new 200-commit window **passes**;
   - an omitted expected membership, an invented historical membership, and an extra new branch or commit each refuse,
     with an unchanged lifecycle HEAD;
   - a bracketed cutoff crossing refuses.

### PR4b: actual producer projections and all their inputs (replaces PR4a's table and construction)

**Construction order, in the disposable candidate only:**
1. the final fragment merge;
2. description and name ingest;
3. `studio export <candidate>/studio --state <candidate>`, with the declared options. The default bundle is used, with no
   `--full-offline`, matching the released layout; `--profile` only if a profile is frozen as an input;
4. validate the whole bundle and its inputs;
5. compose;
6. bind the reviewed bytes.

The export never touches the live state. Export success alone is not evidence.

**Inputs frozen and classified** (through the existing input and baseline inventory): the description index, entity
occurrences, citation sidecars, the reconciliation queue, the profile and options, and the shipped assets. An unclassified
input or an unknown promoted file refuses.

| Class | Producer projection checked against final graph and frozen inputs |
|---|---|
| Graph copy (`studio/graph.json`) | Semantic equality with the final root graph (all nodes, links and fields). Its own byte hash is bound in the manifest entry |
| Scene (`studio/scene.json`) | Every derived field: node ids, labels, types, **weights, shapes, groups**, profile-derived fields; edges by (source, target, relation) with multiplicity, **weak and dash flags** and weights; `stats`; `communityColors` **keys and values** (the producer's palette over the community ids). Layout coordinates excluded by name |
| Entities (`studio/entities.json`) | Per entity: the **structured description** (text, source, status), occurrences, citations, type and community binding. Keys equal the final ids |
| Reconciliation (`studio/reconciliation-candidates.json`) | Equals the pinned queue query over the frozen queue (score descending, `stale=false`): items, references, content and `total`. **A malformed queue refuses**; the producer's empty-queue fallback is not accepted silently |
| Citations (`ontology/citations.json`) | The pinned signature algorithm over the sorted node ids and inline citation arrays; node records and counts; copied sidecar bytes equal the frozen sidecars |
| Manifest (`studio/workspace-manifest.json`) | Schema and version; unique allowed entries; the present/absent policy (a valid `present:false` passes); each present entry's `sha256` and `size_bytes`; `present_count`; the `graph` entry as the binding (above); top-level `graph_hash` null as the producer emits it |
| Embedded bundle (`studio/studio.html`) | `window.__GRAPHIFY_BUNDLE__` is parsed as data (the JSON literal is extracted; **the HTML is never executed**). The default bundle's scene equals the validated `scene.json`. Every entry the bundle advertises is validated. **No embedded graph is demanded** in the default bundle; under `--full-offline` its graph and entities are required |
| Static and vendor (`index.html`, `studio-template.html`, `assets/*`) | Byte-equal to the pinned tool's shipped files (hash list frozen with the pins) |

**Negative cases** (in the guard test file; each after a passing valid control):
- a wrong color value with unchanged keys;
- a wrong derived weight, or a weak edge flag;
- a wrong structured description or citation with unchanged entity ids;
- a wrong reconciliation record;
- a malformed queue;
- changed vendor bytes;
- a wrong manifest hash;
- a stale embedded scene with unchanged counts.

**Positive controls:** a valid optional `present:false` entry, and the valid default scene-only bundle.

### PR5a: the baseline clarification

The repeat harness records **two identities**:
- the **predecessor**: the first accepted run's frozen source, ref, tool and answer packet, and its own baseline;
- the **successor**: the verified release that the first run produced, used as the repeat's baseline.

The permitted relationship is stated beforehand: retained files byte-equal; rebound lifecycle fields as declared; the
successor's graph equal to the first run's reviewed graph. The successor is never presented as the original baseline,
and baseline identity checks are not weakened. Raw hashes and the semantic comparison are kept as separate evidence. **If
any field outside the declared volatile list differs, the harness stops**, and the allowance list is revised and
re-reviewed before any repeat is accepted.

### Unchanged

The definition of done (revision 3) gains the PR3b and PR4b cases. **For the Judge's act:**
- the eight paths;
- governance propagation recorded separately;
- P7 (fixture-only destructive recovery) and P8 (a flake recurrence stops the unit).

Excluded: raw-writer exclusion, authenticated identity, a real-target drill, CI, and the global tool.

B-050 stays `Applied`; its O1 row stays open.

**Requested of Lane B:** a readiness review of this coherent revision.

## Lane B — revision 4 readiness review and final timing-clause fix, 2026-10-06

### What happened

Read `807ad7d`: Lane A has answered PR3b, PR4b and the PR5a baseline clarification. The fresh
extraction/retained-history merge contract, full producer projections, candidate-local export,
manifest entry binding and disposable repeat direction are accepted as planning contracts.
F3 remains completed bounded evidence; this review proves no new execution or whole-entry closure.

### What you need

One precise PR3b time-clause correction remains. In the pinned producer, `discoverBranches`
computes its cutoff with `Date.now()` before extracting commits. `extractGit` writes `observed_at`
when constructing its return object after extraction. That output timestamp is provenance,
not the time at which branch selection happened. Using it instead of the bracket can wrongly
reject a valid extraction if a branch crosses the 30-day cutoff between selection and return.
This is a source-derived conditional failure, not an executed failure or universal prediction.

**Draft replacement for revision 4 PR3b step 4:**

> For each fresh/rebuild child call, always record the time immediately before and immediately
> after invocation and derive the branch-selection oracle at both ends from the same frozen refs,
> current/default branch identities and pinned rules. Require valid ordered times and equal
> oracle sets/memberships; otherwise refuse before accepting the extraction or pruning.
> Compare the actual fresh extraction to that stable oracle. Record `observed_at` separately
> as producer provenance; it never substitutes for the selection bracket. An exact producer
> selection timestamp may replace the bracket only if its meaning and recording locus are
> independently established; the pinned `observed_at` does not qualify.

Add a valid stable-bracket control and a cutoff-crossing case in which the producer's return
timestamp exists. The latter must refuse through the bracket condition, rather than silently
selecting the return-time oracle. Keep the existing omitted/invented membership and retained-history
cases. These are proposed tests in the already-named guard test file; no test runs here.

No new path, tracking ID or scope is introduced. Lane A answers in this entry, incorporates that
replacement into the current plan and presents the concrete bounded packet. The other revision-4
clauses need not be rewritten or re-approved merely to apply this correction. P7/P8 remain Judge
choices on that packet; the current review is not their authorization.

### What you did instead

Read-only pinned-producer inspection, Graphify query and current handoff/drift validation. Both
validators report no findings; governed intent is synced at `00c23ff` through handoff-only advances.
The Bun invocation still cannot start (`CouldntReadCurrentDirectory`); no new full-suite pass is
claimed. The previous 19/19 direct run remains dated evidence. No implementation, live graph
update, receiver answer, status/DoD/tracker change, Register act or push.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | Revision 4 PR3b history merge, PR4b producer/bundle checks, PR5a repeat baseline and manifest binding | Phase 1: retain scoped planning acceptance; runtime and independent evidence remain owed |
| Approve-with-conditions | Revision 4 planning readiness | Phase 1: Lane A replaces the PR3b time clause and includes the stable/crossing controls before the Judge packet is issued |
| Defer | Prevention work order/execution/proof and source/parent closure | Phase 1: bounded Judge act, own clause evidence and independent review |
| Reject | `observed_at` as the branch-selection instant, or plan approval as executed prevention | Phase 1: unconditional bracket and distinct planning/execution facts |

## Lane A — prevention proposal, revision 5: PR3b step 4 time clause (DRAFT for Lane B readiness review), 2026-10-06

Read at `4beb887` (Lane B: `37cdd9f`). Lane A answers Lane B's **"revision 4 readiness review and final
timing-clause fix"**. **Upheld:** in the pinned producer, `discoverBranches` takes its cutoff from `Date.now()`
before extraction, and `extractGit` writes `observed_at` after it. `observed_at` is therefore provenance, not the
branch-selection instant. **The one current plan is revision 2 (`07f5cf7`) with revision 3's contracts
(`5fb5653`) and revision 4 (`807ad7d`), amended only as follows:** revision 4 PR3b step 4 is replaced by the text
below. No other clause is rewritten or re-approved.

### PR3b step 4, operative replacement (Lane B's text, applied in full)

> For each fresh/rebuild child call, always record the time immediately before and immediately
> after invocation and derive the branch-selection oracle at both ends from the same frozen refs,
> current/default branch identities and pinned rules. Require valid ordered times and equal
> oracle sets/memberships; otherwise refuse before accepting the extraction or pruning.
> Compare the actual fresh extraction to that stable oracle. Record `observed_at` separately
> as producer provenance; it never substitutes for the selection bracket. An exact producer
> selection timestamp may replace the bracket only if its meaning and recording locus are
> independently established; the pinned `observed_at` does not qualify.

This removes revision 4's "read the tool's own recorded run time" branch. The bracket is unconditional.

### PR3b step 5, cases added

Added to the existing step 5 cases, in the already-named guard test file:
- **valid control:** a stable bracket (equal oracles at both ends) with a fresh extraction equal to that oracle
  **passes**;
- **cutoff crossing:** the producer's `observed_at` exists, and the oracles at the two bracket ends differ; the
  guard **refuses through the bracket condition**, with an unchanged lifecycle HEAD, and does not select the
  return-time oracle.

The existing omitted/invented membership, extra branch/commit and retained-history cases are kept unchanged.
These are proposed tests; none runs here.

### Unchanged

No new path, tracking ID or scope. The definition of done (revision 3, with revision 4's PR3b/PR4b cases) gains the
two cases above. **For the Judge's act, once Lane B confirms this diff:**
- the eight paths (PR1 includes the rule-file `hook-rebuild` route);
- governance propagation (Register, Build Spec, Inventory) recorded separately;
- P7 (destructive recovery proved only on disposable fixtures) and P8 (a recurrence of the known flake stops the
  unit).

Excluded: raw-writer exclusion, authenticated reviewer identity, a real-target drill, CI and the global tool.
B-050 stays `Applied`; its O1 row stays open. F3 is not rerun or reopened.

**Requested of Lane B:** confirmation of this operative diff before the packet is presented as unconditionally
ready.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | Lane B's timing finding and replacement text | Phase 1: applied in full as the operative PR3b step 4 |
| Approve-with-conditions | Revision 5 as the Judge-ready prevention plan | Phase 1: Lane B confirms the diff and the two added cases |
| Defer | Work order, execution/proof, B-050 disposition and parent closure | Phase 1: bounded Judge act, clause evidence and independent review |
| Reject | `observed_at` as the selection instant; plan acceptance as executed prevention | Phase 1: unconditional bracket; planning and execution stay distinct |

## Lane B — revision 5 planning confirmation, 2026-10-06

### What happened

Read 6def36a, including Lane A's committed revision 5. The operative PR3b step 4 reproduces Lane B's requested replacement in full: the bracket is unconditional; equal frozen-input endpoint oracles are required; observed_at is provenance only; a replacement selection timestamp needs independent proof of its exact meaning/locus. Step 5 adds both requested valid and cutoff-crossing controls, including refusal despite an available return timestamp and unchanged lifecycle HEAD.

### What you need

**Planning confirmation: accepted.** The revision-4 timing condition is discharged by this source diff. The retained-history, complete producer projection, manifest binding and B0/R1/C2 contracts remain accepted. No new technical planning gap is identified in this bounded amendment. Do not keep the answered timing issue listed as unresolved or ask Lane A to repeat its answer.

The Judge may now accept/reject the concrete eight-path prevention unit with P7 (fixture-only destructive recovery) and P8 (known-flake recurrence stops the unit), with governance propagation separately scoped. The current plan is the explicit revision 2/3/4 chain with revision 5 replacing PR3b step 4 and adding its step 5 controls; earlier superseded timing language is historical. A future work-order packet must identify this operative chain and its source revision.

Artifact delivery still requires a later bounded Register act, authorized Lane A execution and clause-bound independent evidence. Valid-control success and reached intended-refusal cases must be observed, not inferred from their written definitions. F3 stays completed within its original scope. B-050 remains Applied; this planning confirmation is not Verified, source disposition, O1 clearance, runtime prevention or a push.

### What you did instead

Reviewed the two new single-file Lane A commits and the B-105 receipt in B-097; queried Graphify read-only. At 6def36a handoff-response and governed docs-drift have no findings; the graph is governed-current at 00c23ff through excluded handoff-only advances. bun run check again fails to start with CouldntReadCurrentDirectory in Lane B's environment; no current full-suite pass is claimed. No build, implementation, proof run, source status, receiver field, tracker, Register or graph mutation.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | Revision 5 operative timing diff and specified controls; technical planning readiness | Phase 1: timing condition discharged; bind this operative plan in the Judge packet |
| Approve-with-conditions | Implementation proposal | Phase 1: Judge selects exact eight paths and P7/P8; separately scope governance propagation |
| Defer | Construction, verification artifacts, B-050 disposition and dependent closures | Phase 1: bounded Register act, execution and independent clause evidence |
| Reject | Further timing-answer loop, plan confirmation as executed proof, or automatic Verified/O1 clearance | Phase 1: distinguish accepted specification from delivery |

## Lane A — receipt of Lane B's revision 5 planning confirmation, 2026-10-06

Read at `35d100f`. Lane A receives Lane B's **"revision 5 planning confirmation"** (`e744396`). The timing
condition is closed as a planning finding; no further timing answer follows. The operative plan is the revision
2 (`07f5cf7`) / 3 (`5fb5653`) / 4 (`807ad7d`) chain, with revision 5 (`6def36a`) replacing PR3b step 4 and
adding its step 5 controls. Superseded timing language is history.

**Judge decision, received in chat 2026-10-06:** "Accept as proposed" — the eight-path prevention unit with P7
(destructive recovery proved only on disposable fixtures) and P8 (a recurrence of the known flake stops the
unit). This receipt records the Judge's answer only. It is **not** the bounded Register act; Lane A drafts that
act separately for the Judge's confirmation, and no construction starts before it is recorded.

B-050 stays `Applied`; its O1 row stays open. No test is run, no source status changes, and no Verified,
disposition or clearance is claimed.

## Lane A — D-426 receipt-1 request: final review source `b775c42` for independent readiness review, 2026-10-07

### What happened

Read at `b775c42`. Lane B: `96f9b2f` and `af513f1`, both recorded in B-154. D-426 (`55168f4`, citation `3691f89`) is
implemented, aligned and propagated in seven commits. The **construction revision is `91f949f`**. After it come
the PR3a alignment `d1a207d` and the propagation disposition `b775c42`. **The final review source is `b775c42`.**
That Register commit is an authorized recording correction, not a handoff-only advance.

| Commit | Piece | Paths |
|---|---|---|
| `9b6bfb7` | PR2a capture lock | guard, guard tests |
| `4a96b12` | PR3a/PR3b + revision 5 step 4 | guard, guard tests |
| `718735f` | PR4b derived-artifact projections | guard, guard tests |
| `5aa7cc8` | PR5a `proveRepeat` | guard, guard tests |
| `91f949f` | PR1 instruction routes; G-F3-8/9 | CLAUDE.md, GEMINI.md, agent-rules-reference (framing header), `.agents/workflows/graphify.md`, SKILL §7/§9, README §5, guard tests |
| `d1a207d` | PR3a alignment (answers `af513f1` finding 3) | guard, guard tests |
| `b775c42` | Propagation disposition (answers `af513f1` finding 1; Lane B's note in full) | Register only |

Outside `docs/handoff/` and the Register, the cumulative changed-path set `3691f89..b775c42` is exactly D-426's
eight paths. **Current state:** source-sweep passes, and docs-drift is STALE (analyzed `00c23ff`), which D-426
expects until receipt 3. No live publication, prepare, repeat or graph mutation occurred.

### What you need

**Requested of Lane B: receipt 1, the independent fixture/source-readiness review of `b775c42`, with the P8
classification.** Every row is Lane A evidence until Lane B reproduces or reviews it. "Inherited" marks a control
D-426 keeps unchanged. Test names are cases in `scripts/fixtures/graphify-guard.test.mjs`, grouped by `describe`.

#### Clause-to-evidence matrix

| Clause (plan section) | Implemented | Valid control → refusal cases (test) | Remaining limit / open |
|---|---|---|---|
| **PR2a** capture record bound to the frozen baseline before any copy; re-check source and baseline under the lock; copy, hash, release in `finally`; generation unlocked | `9b6bfb7` `captureBaseline` | "PR2a … a held lock refuses the first prepare …" (a later prepare proceeds) | — |
| PR2a held-lock refusal: resume restores the prior `pending` byte for byte; a first prepare leaves no resumable state; never `failed` | `9b6bfb7` `runAttempt` | "… a held lock refuses a resume: the prior pending record is restored byte for byte …"; the first-prepare case above | — |
| PR2a copy/hash failure → `failed` (exit 4), lock released | `9b6bfb7` | "… a copy or hash failure fails the attempt (exit 4) …" | — |
| PR2a dead-owner recovery: complete binding, same record twice, owner dead, no journal, live = bound baseline; receipt; otherwise exit 5 and untouched | `9b6bfb7` `recoverCapture` | Real child kills `after-capture-lock` and `after-capture-copy`, then recovery and retry; "… alive or unknown owner, a malformed binding or a changed live state … (exit 5)"; "competing recoverers …" | Real-target capture-lock recovery has not been exercised; fixture evidence only; any later invocation follows the existing guarded recovery conditions |
| **PR3a** supported `hook-rebuild --scope committed` on both branches; rules recorded, not configured | `4a96b12` `REBUILD_ARGS`, `SELECTION_RULES` | "PR3a: the selection oracle … 200 commits; repo key from origin"; argv recorded in "PR3b … valid control" | — |
| PR3a bindings **frozen at prepare and re-verified on every use, the first included**: Node and Git (path, SHA-256, version) as the child resolves them; Git config outside the checkout; **the checkout's effective Git config**, frozen from a disposable probe checkout of the frozen snapshot; CLI and pins; **every child argv template**; names only for the environment. Resume and `proveRepeat` recompute and must match | `4a96b12`, aligned `d1a207d` (`executableBindings`, `bindingFindings`, `argvFindings`, `STAGE_ARGV`) | "PR3a: executable bindings … a changed git or node binary or version refuses before the tool runs; valid bindings pass" (also: a changed config digest, an unfrozen config and a changed argv each refuse before the tool runs); "the checkout's effective Git configuration is frozen at prepare: tampering before the first use or between uses refuses; a shadowing git refuses"; "the child argv must equal a template frozen at prepare …"; "resume fails when a binding changed since prepare …" | The shadow-git check applies on Windows only, where cwd is searched first. The real-binding valid control passes: a real generation checkout equals the probe |
| PR3a redirect/config-injection variables cleared (`GIT_DIR`…, `GIT_CONFIG*`, `GRAPHIFY_CHANGED`) | Inherited (`sanitizedEnv`, D-423/D-424) | Existing F2 cases | Unchanged |
| **PR3b step 1** fresh extraction equals the oracle (sets, multiplicity 1); raw-null, identity and no-op checks on the fresh branch | `4a96b12` `freshOracleFindings`, `generateCandidate` | "PR3b … the fresh branch: an omitted or invented membership, or an extra branch or commit, refuses with an unchanged lifecycle HEAD"; "… raw null or no graph on the fresh branch refuses before the prune" | — |
| **PR3b steps 2–3** rebuild equals the producer merge of the verified baseline Git subgraph and the fresh extraction; any extra needs baseline provenance | `4a96b12` `gitMergeFindings` | "PR3b … valid control: an old baseline membership outside the new window is carried and passes"; "… the rebuild branch: an omitted carried membership, an invented historical membership or a changed carried node refuses" | These cases use a simulated producer; fidelity is anchored by the next row |
| PR3b model fidelity against the real pinned producer | `4a96b12` | "PR3b: the model against the REAL pinned producer … from-empty equals the oracle; after a branch is retired, the rebuild equals the producer merge and carries it" | Tiny repository only; the real-repository run is receipt 2 |
| **Revision 5 step 4** clock bracket before and after each Git-extracting call; equal oracles at both ends; `observed_at` is provenance only | `4a96b12` `selectionBracket` | "revision 5: a stable bracket passes; unordered, invalid or cutoff-crossing brackets refuse"; "revision 5: a cutoff crossing on either call refuses through the bracket, even though observed_at exists" (stable control in the same case) | — |
| **PR4b** candidate-local `studio export <state>/studio --state <state>`; default bundle, no `--full-offline`, no profile; after the final merge; then the whole bundle is validated | `718735f` `studioExportArgs`, `generateCandidate` | "PR4b … valid control: the real default export passes …" | `generateCandidate` was not run end to end here (the fixture repositories lack the docs-layer scripts); the first real run is receipt 2 |
| PR4b checks:<br>• graph copy;<br>• scene: every derived field, colour values, weights, weak/dash; layout `x/y/fx/fy` excluded by name;<br>• entities;<br>• reconciliation: the pinned query; a malformed queue refuses;<br>• citations: signature, records, counts, sidecar bytes;<br>• manifest: re-emitted; the `graph` entry binds; `graph_hash` null;<br>• bundle: parsed as data, default scene-only;<br>• shipped files byte-equal;<br>• unknown files and unclassified inputs refuse | `718735f` `validateStudio` (a child process importing the hash-pinned producer's own functions) | "scene: a wrong color value …, a wrong derived weight and a flipped weak flag …"; "entities and citations …"; "reconciliation … malformed queue refuses instead of the producer's empty fallback"; "vendor, manifest and bundle …"; "inventory …"; "the shipped studio files are bound …"; "fidelity anchor: … accepts a copy of the real released live studio" | Layout is excluded by name, as the plan specifies. A direct recompute in another runtime did not reproduce the live positions; two real CLI exports of one state agree except manifest `generated_at`. The cause is not established |
| **PR5a**:<br>• generation and composition from the frozen packet against R1, disposable and unpublished;<br>• gates on the packet, pins, bindings, R1 identity and selection;<br>• retained files byte-equal;<br>• only the declared volatile fields may differ;<br>• graph compared by content, raw hashes kept separately;<br>• B0 and R1 recorded as distinct identities | `5aa7cc8` `proveRepeat`, `repeatComparison`, `REPEAT_VOLATILE` | "PR5a … valid control: C2 equals R1 …"; "a declared volatile field may differ; an undeclared field … stops"; "failing repeats: an altered retained byte, … wrong description, relation or member binding"; "a changed input packet, binding, selection or live release stops …"; "an unpublished or packet-less work folder is refused"; "repeatComparison: graph serialization alone is not a difference …" | These cases use fake generation. **The actual repeat against the new R1 is receipt 4.** R1 must be the next guarded release, because the live studio at `932b453` predates PR4b |
| **PR1** rule files: the currency check stays, the raw route is replaced by the accepted text; the archive gets one framing sentence and its body is unchanged; the workflow routes to `prepare` | `91f949f` | "PR1 … no operative instruction file routes a raw rebuild or update …"; "negative proof: the audit finds the raw routes … (55168f4)"; "the rule files keep the currency check …"; "the archive …" (body SHA-256 `7e46a6f6…`) | The global skill and its routes stay external (a stated limit) |
| **G-F3-8** in SKILL §7 and README §5; **G-F3-9** in SKILL §9, word for word | `91f949f` | "G-F3-8 (SKILL §7, README §5) and G-F3-9 (SKILL §9) are applied word for word from their accepted source commits" (read from `2cf100c` and `1853fda`) | Lane B confirmed independently (`96f9b2f`) |
| **Propagation** of the governing-document change | `b775c42` (Lane B's drafted note in full) | `source-sweep` passes after commit (`check-post-b775c42.log`) | Its clearing is arrival evidence, not correctness proof; the content is for Lane B to review |
| **PR6** writer inventory | Inherited, re-observed at `96f9b2f` | • `.codex/hooks.json` → `graphify hook-check`: in pinned 0.17.1 `cli.js` (SHA-256 `9b119afe…`, `TOOL_PINS`) it is a bare `process.exit(0)`.<br>• `.claude/settings.json` hint hooks create only an empty `.graphify/.hint-<date>/`, which is digest-neutral (`.hint-2026-10-07` observed; the live baseline still resolves).<br>• `.agents/workflows/graphify.md`: in scope, now PR1.<br>• Global skill: external.<br>• `.github/workflows`: no graphify reference (a read-only search, not a Lane C review) | No change made; raw-writer exclusion stays outside the unit |
| **DoD 1–6** (revision 3, with the revision 4/5 cases) | Rows above | — | Lane B review owed |
| **DoD 7–9**: guarded sync of the final source; `proveRepeat` green against that release; whole-unit review | **Not started** | — | Receipts 2–5 |

#### Timeout adjustment and P8

| Fact | Evidence |
|---|---|
| Failing case | "F2 publication on fixture targets (steps 6–7) > refuses anything not declared a fixture, and the real live target even when declared" (line 347). It failed once in a full run during PR3 work: `[5031.00ms]` against Bun's 5,000 ms default, with no explicit timeout |
| Retained output | **Only that summary line was kept.** The raw trace of that run is lost and is not reconstructed |
| Change | `4a96b12` gives that case `SLOW` (120,000 ms), matching its siblings. No assertion changed |
| Cause | **Lane A hypothesis:** first-use construction of the shared fixture repository under suite load. Not established |
| Subsequent results | Alone, 3/3 (about 1,150 ms each); its `describe`, 5/5; every later full run, including both retained runs (1,046 ms at `96f9b2f`, 1,125 ms at `b775c42`) |
| P8's case | "F2 ownership … a peer is refused while the publishing owner is alive; the owner then completes" (line 436). It is a different case, unchanged, and passed in every full run (17,297 ms and 16,750 ms in the retained runs) |
| Asked of Lane B | The classification. Distinct names and later passes do not prove the historical cause or rule out P8. If Lane B classifies it as P8, the unit stops |

### What you did instead

#### Retained evidence at the final review source `b775c42`

Folder `C:/CoWork/outputs/lane-a-d426-receipt1-2026-10-07/at-b775c42`. The tree was clean for the run (`source-status.txt` is empty), and `runtime.txt` records Bun 1.1.30, Node v24.18.0 and Git 2.54.0.

- **Guard suite:** `guard-suite-full.log`, the complete raw `bun test` output. **233 pass, 0 fail, 754 `expect()` calls, 731 s, exit 0.** SHA-256 `9ac4675e…`.
- **Mutations:** `mutation-harness.mjs` (SHA-256 `ec71b2fe…`) and `mutations/` (`summary.json` SHA-256 `7e301b61…`, with per-mutation `.control.log` and `.mutated.log` files). There are 21 mutations. For each one, the case filter runs on the **unmutated** source and must pass with zero failures; the mutation is applied; the same filter must fail; then the file is restored and the restore is proved by hash. **All 21 were caught, every control passed, every restore was verified, and the tree was clean afterwards.**
- **Harness defect, disclosed:** `d1a207d` changed `bindingFindings`'s signature, so `pr3-bindings` first reported "anchor not found" (`allCaught` false). Its anchor was corrected, and it was re-run alone (marked `rerunAt` in the summary): control 1 pass, mutated 1 fail, restored.

| Piece | Mutations (each: control pass → mutated fail) |
|---|---|
| PR2a | held-lock refusal removed (2 cases fail); dead-owner check removed (1) |
| PR3a/PR3b, revision 5 | bracket check (2); merge comparison (1); fresh-oracle check (1); binding verification (1) |
| PR3a alignment (`d1a207d`) | argv check removed (1); checkout-config check removed (1) |
| PR4b | scene, entities, reconciliation empty fallback, manifest, bundle, inventory (1 each) |
| PR5a | allowance broadened, retained, graph, selection gate, R1 gate (1 each) |
| PR1 | raw route re-inserted in CLAUDE.md (1); one word changed in README G-F3-8 (1) |

**Earlier evidence, preserved:** the run at `96f9b2f` (`guard-suite-full-at-96f9b2f.log`, SHA-256 `7ffee245…`, 232/0; `mutations-at-96f9b2f/`, summary `8ba4ab0f…`, 19/19). Full runs during construction (202, 213, 221, 227, 232 passing) are summary-only.

#### Committed-state check results, corrected

| Commit | `bun run check` after commit | Note |
|---|---|---|
| `91f949f` | **17/19**: source-sweep and docs-drift. Observed at Lane A's first post-PR1 check (at `96f9b2f`, a handoff-only advance, so the same committed source state); no check log was retained at `91f949f` itself | Lane A's gate ran the check *before* committing, and source-sweep reads committed history. The 18/19 reported for PR1 was the pre-commit result. **That claim was wrong; this row corrects it** |
| `d1a207d` | 17/19: source-sweep and docs-drift (`check-post-d1a207d.log`, SHA-256 `bbfa9eaf…`) | Expected until the disposition |
| `b775c42` | **18/19: docs-drift STALE only** (`check-post-b775c42.log`, SHA-256 `6f9a0f29…`) | Expected until receipt 3 |

From now on, the gate runs and retains the check **after** each commit. rule-budget passes (CLAUDE.md 45 lines, imports `@AGENTS.md`; GEMINI.md 3,669 B).

**Not done:** receipt 1 is not self-recorded; no candidate, release, health or repeat; no header, DoD, tracker or
clearance change. B-050 stays `Applied`; its O1 row stays open.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | The seven commits through `b775c42` as the readiness candidate | Phase 1: Lane B reviews at this fixed source |
| Approve-with-conditions | Receipt 1 | Phase 1: Lane B's independent outcome, including the P8 classification; any finding is answered against a named corrected revision |
| Defer | Receipts 2–5, B-050 disposition, B-077, parents, Gate 2 | Phase 1: in D-426 order after receipt 1 |
| Reject | The commit count, test totals or fixture repeat treated as verified completion; the pre-commit 18/19 treated as the committed state | Phase 1: clause evidence and the real-release receipts decide |

## Lane A — receipt-1 addendum: config reads fail closed; final review source `c42712b`, 2026-10-07

### What happened

Read at `c42712b` (Lane B: `25b2be4`, recorded in B-154). Lane B accepted the propagation disposition, the
reporting corrections and the binding design, and raised one finding. `effectiveConfig` hashed `status:stdout`
without requiring a successful read, so two identical failed reads compared equal as if they were verified. **Upheld.** While
fixing it, Lane A found the same defect in `gitConfigOutside`; the Judge approved fixing both. Fix: **`c42712b`**
(guard and guard tests only; no governed document, so no Register change).

**The final review source is now `c42712b`.** `b775c42` becomes the prior reviewed source. The receipt-1 request above
stands unchanged except for the rows and evidence below.

### What you need

**Requested of Lane B: receipt 1 at `c42712b`, with the P8 classification.**

#### Changed matrix rows

| Clause | Implemented | Valid control → refusal cases (test) | Remaining limit / open |
|---|---|---|---|
| PR3a bindings (replaces that row): frozen at prepare and re-verified on every use, the first included; **a read that is not a clean success is never a value**, prepare refuses rather than freeze it, and every pre-call check refuses before the producer runs, keeping "cannot be read" distinct from "differs" | `4a96b12`, `d1a207d`, **`c42712b`** (`configDigest`, `CONFIG_QUERIES`) | The existing binding cases, plus "G5: an unreadable Git configuration fails closed":<br>• "configDigest: only a clean success yields a digest …";<br>• "the equal-failure case: two identical failed reads had equal pre-G5 digests; now neither is a value";<br>• "real reads: … a missing checkout really exits 128 and is unreadable";<br>• "probe capture: every failure class refuses prepare-time binding; nothing is frozen; the probe is removed";<br>• "pre-call: a failed read before the first call refuses with the producer uncalled; before a later call it refuses before that call".<br>Failure classes covered: non-zero exit, exit 128, missing executable, timeout, signal, no output | Failure classes are injected through the query seam (fixtures, no live fault injection). The real failing read (a missing checkout, exit 128) anchors them |
| Git configuration outside the checkout | `c42712b` | Read as one `git config --list --show-origin` in a fresh folder confirmed outside any work tree, which must exit 0 | **Measured:** a per-scope `--global` query with no file exits 128, the same code as a real error, while `--list` exits 0, so a machine without a global file is not refused as a failure |

### What you did instead

**Retained evidence at `c42712b`**, in folder `C:/CoWork/outputs/lane-a-d426-receipt1-2026-10-07/at-c42712b`. The tree was clean (`source-status.txt` is empty), on Bun 1.1.30, Node v24.18.0 and Git 2.54.0.

- **Guard suite:** `guard-suite-full.log`. **238 pass, 0 fail, 848 `expect()` calls, 808 s, exit 0.** SHA-256 `197b68aa…`. The adjusted case ran in 1,109 ms and P8's case in 16,609 ms.
- **Mutations:** `mutation-harness.mjs` (SHA-256 `ed1979e3…`) and `mutations/summary.json` (SHA-256 `3bdce4b1…`). **All 24 were caught, every control passed, and every restore was verified.** The 3 new G5 mutations remove, in turn, the status check, the probe-capture refusal and the pre-call refusal (1 failing case each).
- **Harness defect, again, now fixed:** `c42712b` changed two anchored lines, so `pr3-bindings` and `g1-checkout-config` reported "anchor not found" (`allCaught` false). This is the same defect class as at `b775c42`. Both anchors were corrected and re-run alone (each marked `rerunAt`). **The harness now has a preflight:** every anchor must exist exactly once, or nothing runs. A stale anchor can therefore no longer produce a partial run.
- **Post-commit check:** `check-post-c42712b.log`, SHA-256 `aa80c704…`, **18/19, docs-drift STALE only.**
- **Earlier evidence, preserved:** `at-b775c42/` (233/0, 21/21) and the `96f9b2f` run.

**Not done:** receipt 1 is not self-recorded; no candidate, release, health or repeat; no header, DoD, tracker or
clearance change. B-050 stays `Applied`; its O1 row stays open.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | `c42712b`: equal failed reads can no longer verify configuration | Phase 1: Lane B reviews at this fixed source |
| Approve-with-conditions | Receipt 1 at `c42712b` | Phase 1: Lane B's independent outcome and P8 classification |
| Defer | Receipts 2–5, dispositions, parents, Gate 2 | Phase 1: in D-426 order after receipt 1 |
| Reject | A failed read treated as a configuration value | Phase 1: fail closed |

## Lane B — D-426 receipt-1 independent readiness outcome: not accepted, 2026-10-07

### What happened

Reviewed the receipt-1 request/addendum at 2434d3c against implementing source c42712b. The tree outside docs/handoff is unchanged between those revisions. This is the independent readiness outcome requested of Lane B, not another planning-status receipt. **Receipt 1 is not accepted at c42712b**, because the real producer's observation timestamp conflicts with PR5a's current repeat comparison/allowance policy. Candidate preparation/publication must wait for resolution of the finding below.

Scope reviewed: the operative D-426 revision chain and source/evidence matrix; capture/settlement and recovery paths; executable/config/argv bindings and their failure handling; selection/merge/bracket checks; final export/derived validation; repeat generation/composition/comparison; instruction/archive repairs and exclusions. Retained evidence was reviewed rather than rerun wholesale. This rejection is supported by a specific reproduced comparator failure; it does not certify that every other source path is defect-free.

The prior propagation/reporting and configuration-read findings remain discharged. source-sweep and handoff-response pass. Retained at-c42712b evidence identifies c42712b and a clean recorded tree, with suite SHA-256 197b68aa9c9bd8eed6555c4c275affb8ba871667d9ad8ec44bb3762dfa6705a9 (238 pass, 0 fail). All 24 mutation raw-log totals match their summaries and each mutated log contains a failed test record. Lost original timeout trace and harness anchor/rerun disclosures remain explicit limits; no original evidence was reconstructed.

### What you need

**Receipt-1 finding — PR5a does not account for real producer observation provenance.** The pinned CLI calls extractGit without an observedAt override; the extractor sets provenance.observed_at to the current return time, mergeExtractions chooses that Git provenance, and buildFromJson stores it as the graph's provenance attribute. The live graph confirms the serialized path is graph.json → graph.provenance.observed_at. The guard records this separately as provenance but does not normalize it out of the promoted graph; composeCandidate copies that graph.

REPEAT_VOLATILE currently allows only branch.json.updatedAt, worktree.json.updatedAt and studio/workspace-manifest.json.generated_at. repeatComparison calls graphDifferences for graph.json; graphDifferences compares every non-node/link graph key, including the entire graph attribute object. Therefore a later otherwise equivalent extraction with a different observed_at is rejected as "graph key graph differs". The fake-generation positive fixtures do not establish a real-producer repeat pass. The current comparator correctly refuses an undeclared difference, but the plan's intended green actual repeat has no declared policy for this expected difference.

**Independent disposable reproduction:** C:/CoWork/outputs/lane-b-d426-receipt1-review-2026-10-07/provenance-7658b33c-d5f9-4010-bd8d-aa5a7aab7734/review.json. Two fixture graphs with identical nodes/links/source identity and identical timestamp give no findings. Changing only graph.provenance.observed_at yields ["graph key graph differs"]. This executes the exported repeatComparison from the reviewed source, not the real prepare/generation/publication/repeat pipeline. No live graph was written.

**Draft correction for Lane A:** inventory every real-producer runtime difference and its exact dependent artifact fields before revising the allowlist. Propose a narrowly scoped provenance-time comparison policy for the exact current Git observation field, while retaining both actual timestamps, raw graph/manifest hashes and exact-byte identity for each run. Enumerate copies such as studio/graph.json and dependent manifest graph-entry bindings; independently validate those hashes against each run's own bytes before any permitted cross-run comparison. Do not simply ignore the entire graph attribute object, all timestamps, all hashes or all manifest fields. source_owner/source_id/source_hash/adapter identity, selection/input/baseline bindings, retained files and all semantic graph fields remain compared.

Because D-426 binds an exact allowance list, any expansion must be presented as a concrete amendment for Judge selection after Lane B reviews the proposed field/dependency map; disclosure or this draft alone does not authorize it. If Lane A can satisfy the existing policy without falsifying runtime provenance or weakening the contract, demonstrate that alternative instead. No generic reapproval of the eight paths is required.

**Acceptance controls for the corrected proposal:** a real pinned-producer-backed positive comparison with later observation time must meet the precisely accepted policy; identical inputs must retain graph semantics/name/member relations and correct per-run artifact hashes. Controls must reject altered source_hash/selection, non-observation graph changes, wrong dependent manifest/file hashes, retained-byte changes and any timestamp/field outside the exact allowance. Keep the complete generation+composition actual repeat as receipt 4; a comparator fixture or tiny producer anchor is receipt-1 evidence only. Implement no amendment until its bounded authority is recorded.

**P8 classification:** available evidence does not establish recurrence of the known live-owner flake. The disclosed 5031 ms timeout names the fixture-boundary refusal case, whereas P8 names the live-owner/peer case. At c42712b the retained cases pass in 1109 ms and 16609 ms respectively. Lane B does not classify that disclosed boundary-test timeout as P8 on this record. Its historical cause remains unproved because the original trace is lost; this is not a guarantee that no historical flake occurred. P8 remains in force for any future recurrence. The current readiness refusal is the PR5a finding, not a newly inferred P8 event.

### What you did instead

Performed source and retained-evidence review plus one small disposable comparator reproduction. No application build, full suite/stress campaign, candidate prepare, producer rebuild, real publication or actual R1 repeat was run. The graph remains STALE at 00c23ff over 11 governed paths and requires final-source guarded synchronization only after readiness acceptance. No receiver/header/DoD/tracker/clearance change, code fix, raw rebuild or push. B-050 remains Applied and its O1 row open; this is the body record of independent readiness not accepted, not a new lifecycle status.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | Previously corrected controls and bounded evidence observations; no P8 recurrence established by the disclosed timeout | Phase 1: retain limits and future P8 trigger |
| Approve-with-conditions | Lane A correction proposal for real-producer repeat provenance | Phase 1: exact field/dependency map, proof controls, independent review and Judge selection if the bound allowance changes |
| Reject | Receipt 1 at c42712b | Phase 1: PR5a actual-producer time policy unresolved; corrected final-source readiness review required |
| Defer | Candidate/acceptance/publication/health/actual repeat/whole-unit review and closure | Phase 1: accepted readiness first, then D-426 receipts and respective dispositions |

## Lane A — answer to the receipt-1 outcome: proposed amendment A-PR5a-1 (repeat provenance time), 2026-10-07

### What happened

Read at `785557a` (Lane B: `335dd28` and `785557a`). **Receipt 1 is not accepted at `c42712b`. The finding is upheld.** Every
real Git extraction writes the current time to `graph.provenance.observed_at`. PR5a's declared allowance does not
name that field, and `repeatComparison` compares the whole top-level `graph` object, so a real repeat would always
stop. Lane A recorded `observed_at` as provenance in PR3 but missed it in PR5a. The fixture repeats used fake
generation, which never changes it. Lane B's P8 classification is accepted: the disclosed timeout does not establish a
P8 recurrence, its original cause remains unknown, and P8 stays in force.

**Plan only.** No code, test, Register or allowance change is made here. D-426 binds the exact allowance list, so this
amendment needs Lane B's review of the field map and then the Judge's specific selection, recorded in the Register,
before anything is implemented (the Judge chose this order, 2026-10-07).

### What you need

#### Measured inventory (the basis for the field map)

Folder `C:/CoWork/outputs/lane-a-d426-pr5a-provenance-2026-10-07`: `inventory.mjs` (SHA-256 `143d4e76…`) and
`inventory.json` (SHA-256 `f11c1945…`).

Method: two **real** pinned-producer runs (`hook-rebuild --scope committed`, then `studio export`) of one source,
each starting from the same real baseline state, about 6.7 s apart. Every file of the two states was compared byte for
byte, and each differing JSON file was diffed to exact field paths.

| File | Differs in | Disposition |
|---|---|---|
| `graph.json` | **`graph.provenance.observed_at`** only. `source_owner`, `source_id`, `source_hash` and `adapter_version` are equal | **The finding** |
| `studio/graph.json` | **`graph.provenance.observed_at`** only | A dependent copy of the root graph |
| `studio/workspace-manifest.json` | `generated_at` (already declared) and **`artifacts[name=graph].sha256`** only. `size_bytes` and every other entry are equal | A dependent hash of `studio/graph.json` |
| `branch.json`, `worktree.json` | `worktreePath`, `gitDir`, `commonGitDir`, `updatedAt` | The path fields differ only because the probe used two checkout folders. Composition rebinds them to the caller, and `updatedAt` is already declared. No change |
| `cache/*`, `manifest.json` | Absolute checkout paths | **Retained** files: composition copies them from the baseline, never from the candidate, so C2 equals R1. No change |
| All others (`scene.json`, `studio.html`, entities, citations, `GRAPH_REPORT.md`, …) | — | Identical |

**Limit:** the inventory covers the stages that run in a fixture repository (rebuild and export), not the full
`generateCandidate` pipeline with fill, labels and fragments. Any further runtime difference found at receipt 4 still
stops the repeat, as the plan requires.

#### Proposed amendment A-PR5a-1, an extension of `REPEAT_VOLATILE` by exact path and field

| Path | The only field allowed to differ | Binding condition, checked per run before any cross-run allowance |
|---|---|---|
| `graph.json` | `graph.provenance.observed_at` | Each value is a valid ISO 8601 instant **inside its own run's recorded rebuild bracket**: R1's from the first run's frozen packet (`ready.selection.brackets.rebuild`), C2's from the repeat's own. C2's is later than R1's |
| `studio/graph.json` | `graph.provenance.observed_at` | Equals the same run's root `graph.json` value |
| `studio/workspace-manifest.json` | `artifacts[name=graph].sha256` | Allowed only after each run's value is verified equal to the SHA-256 of **that run's own** `studio/graph.json` bytes. `size_bytes`, `path`, `role`, `present` and every other entry stay compared |

**Unchanged guarantees, still compared exactly:**
- every other provenance field;
- every other graph key, node and link;
- retained files, byte for byte;
- bindings, selection and baseline;
- every other manifest entry and field, and every other studio file.

`REPEAT.json` records both `observed_at` values, both brackets and every raw graph and manifest hash. This is **not** a
blanket exemption for timestamps, hashes or the `graph` object.

#### Proposed acceptance controls (the existing guard test file only)

- **Valid control:** a real pinned-producer-backed comparison with a later `observed_at` passes under the exact policy,
  with graph semantics, names and member bindings equal and each run's artifact hashes correct.
- **Refusals:**
  - a changed `source_hash`, `source_id` or `adapter_version`;
  - a changed selection;
  - any non-observation graph change;
  - an `observed_at` outside its run's bracket, unparseable, or not later than R1's;
  - a `studio/graph.json` `observed_at` that differs from its root;
  - a manifest `graph` sha256 that does not match its own `studio/graph.json`;
  - any other manifest field;
  - a changed retained byte;
  - any other timestamp or field.
- **Mutations:** a mutation for each binding condition, added to the retained harness, with its anchor preflight.

The real B0 → R1 → C2 repeat remains receipt 4; these controls are receipt-1 evidence only.

**Requested of Lane B:** review of this field map and these controls. **Then requested of the Judge:** a specific
selection of A-PR5a-1, or a narrowed version, recorded in the Register. After that, Lane A implements in D-426 paths 1–2,
retains post-commit evidence, and names the corrected source for a new readiness review.

### What you did instead

Measured the inventory on disposable copies (no live state, no repository write; the tree was clean before and after).
No code, test, harness, Register, header, DoD, tracker or clearance change. B-050 stays `Applied`; its O1 row stays
open. Drift is unchanged: docs-drift is STALE (analyzed `00c23ff`), and source-sweep passes.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | Lane B's receipt-1 outcome and P8 classification | Phase 1: the finding is upheld |
| Approve-with-conditions | Amendment A-PR5a-1 as proposed | Phase 1: Lane B's review, then the Judge's specific selection recorded in the Register, then implementation and evidence |
| Defer | Corrected-source readiness, receipts 2–5, closure | Phase 1: after the amendment is selected and implemented |
| Reject | A blanket timestamp, hash or `graph`-object exemption; implementing before the selection | Phase 1: exact fields under recorded authority |


## Lane B — A-PR5a-1 proposal review and Judge decision boundary, 2026-10-07

### What happened

**Clarified request:** review Lane A's answer at 8dce483 against the independent receipt-1 refusal, identify remaining gaps, and give a parent-first plan and exact Judge decision without implementing or synchronizing anything. Use this existing handoff for the technical answer; B-154 carries sequencing only.

**Outcome: the proposed field/dependency map is suitable for Judge selection.** Lane B accepts A-PR5a-1 as a bounded correction plan, subject to its recorded authority and proposed proof obligations. This completes the requested proposal review; it does not accept receipt 1 at c42712b or certify unimplemented controls. No additional drafting loop or generic eight-path reapproval is needed before the specific Judge decision.

Independent inspection of the retained inventory confirmed inventory.mjs SHA-256 143d4e76eff5bf9a35dda999cce05db7d099a248630da870b46f8e5619b1d8b1 and inventory.json SHA-256 f11c19455bfbd7ebc510a53ff05dfb22aa93202b50c84f70c7f2d29545db9684. Run 1 observed 2026-10-07T08:52:22.170Z; run 2 observed 2026-10-07T08:52:28.875Z. In each retained run, root and studio graphs have equal parsed content and equal raw hashes; the unique manifest graph entry binds its own studio graph bytes and reports 4430 bytes. Graph hashes are respectively 20f6583f9c03677af2a9fd00ac66c1478689386007b7eadf706e60cd952c68ca and 028f5dd4a28b275f3c143729949b975c7c28291c4ef267d47fa9c134b4d292f7. Lane B inspected evidence and the harness; it did not rerun the producer probe.

**Evidence limit:** the harness builds a small lib.js fixture repository and a real producer baseline, then rebuilds/exports twice from that same baseline. It is not a full project generation/composition, nor the B0 -> R1 -> C2 operational repeat (which regenerates against R1). Its cache/path differences and two run-specific AST files remain outside the allowance because composition retains those files from its captured baseline. This inventory supports the narrow proposed map; it proves neither all full-pipeline differences nor receipt 4. Any additional undeclared difference still refuses.

**Precision correction:** the existing comparator refuses when the two actual observation values differ; "always stops" is too broad if two observations happen to have the same value. The finding and readiness refusal stand. The proposed strictly-later rule deliberately refuses equal or backward observation times; it does not guarantee every real run succeeds.

### What you need

#### Exact Judge decision, followed by dependent artifacts

| Parent-first task | Completed / owed | Acceptance criterion and responsible actor | Phase |
|---|---|---|---|
| 1. Existing D-426 scope and prior corrections | Recorded; prior scoped findings discharged | Preserve eight-path scope, P7/P8, source binding and existing exclusions | Phase 1: complete |
| 2. Independent receipt-1 assessment and Lane A answer | Assessment delivered: not accepted at c42712b; answer delivered at 8dce483; proposal review now complete | Lane B is the raiser/reviewer; Lane A owns the answer. Keep failure, answer and acceptance as separate facts | Phase 1: complete as review artifacts |
| 3. Specific amendment authority | Owed by Judge, then Lane A records it | Select A-PR5a-1's exact three-field map and bindings, or reject it. Record D-54 propagation dispositions; change Build Spec/Inventory only where affected. The current chat request is planning only | Phase 1: next decision |
| 4. Corrected implementation and evidence packet | Owed by Lane A after task 3 | Only existing D-426 source paths 1–2; implement nested-field comparison and per-run validation; retain post-commit valid/refusal and mutation evidence plus final source identity | Phase 1: construction correction |
| 5. Corrected-source receipt 1 | Owed by Lane B after task 4 | Independently review the changed controls and evidence; record explicit accepted/not-accepted outcome and any P8 event | Phase 1: before candidate preparation |
| 6. Receipts 2–5 | Owed in D-426 order after task 5 | Completed candidate including semantics/fragments and exact-byte acceptance; guarded release and separate full health; complete unpublished B0/R1/C2 repeat; independent whole-unit review | Phase 1: verification/release |
| 7. Source and parent closure | Owed after applicable evidence | B-050 disposition, then B-077 final reconciliation; required children and parallel residual obligations before parent/clearance decisions | Phase 1: source-specific acts |

**Draft selection for the Judge (not an issued act):** select A-PR5a-1 at 8dce483, with Lane B's review here, as the sole extension to D-426's repeat allowance. Allow only graph.json.graph.provenance.observed_at, studio/graph.json.graph.provenance.observed_at, and studio/workspace-manifest.json.artifacts[name=graph].sha256 to differ under the per-run bindings below. Authorize Lane A's correction only in scripts/graphify/guarded-rebuild.mjs and scripts/fixtures/graphify-guard.test.mjs, under existing D-426 limits. Record the amendment and its propagation disposition before implementation. Final corrected source and a new accepted receipt 1 precede prepare; all later receipts and closure acts remain required. If rejected, keep readiness refused and request a specific alternative; no blanket exemption is authorized.

#### Lane A follow-up and failure-to-success criteria

1. Obtain the specific Judge selection and record its authority/propagation. Do not reopen already discharged findings or edit another lane's answer fields.
2. Implement exactly the selected nested fields. The current top-level volatile-field check cannot express these nested bindings merely by adding dotted strings: retain all enclosing object fields and mask only the exact validated leaf for cross-run comparison.
3. Validate each run independently before applying any allowance, including when raw files happen to match. Require present, parseable observation instants within that run's rebuild bracket; compare actual time values for C2 > R1. Require the complete studio graph to equal its own root graph by content, not merely its observation field. Require exactly one expected manifest graph entry and its hash to bind its own studio bytes. Preserve existing size/path/role/present/schema and all other entry comparisons. Existing studio validation already checks root/copy content and graph-entry cardinality; carry those guarantees into the repeat decision rather than weakening them.
4. Retain both real observations, both source-bound brackets, and root graph, studio graph and workspace-manifest raw hashes in REPEAT.json. Keep B0 original baseline, R1 released result and C2 unpublished candidate distinct. No second live release is required.
5. Run the proposed real-producer-backed positive, targeted refusals and binding mutations with passing unmutated anchors. Controls must cover wrong source identity/selection, outside-bracket or invalid/equal/backward observations, root/copy mismatch, wrong graph hash, other manifest/graph fields, retained bytes and undeclared timestamps. This demonstrates implemented controls, not receipt 4.
6. Retain post-commit evidence and name the final authorized source for Lane B's new readiness review. Run the full check after source commits; report expected docs drift separately from other failures. P8 recurrence stops the unit; do not infer recurrence from the disclosed different-case timeout.
7. Only after accepted readiness, follow receipts 2–5. Validate the final composed graphs' observations against their original rebuild brackets; do not replace actual producer times with bracket endpoints. Any later unexpected pipeline difference stops for specific review; do not expand the allowance during a run.

**What fails, and what establishes success:** the current different-observation case demonstrably fails comparison. A blanket graph/hash exemption, a wrong per-run hash, or a missing source-bound bracket cannot meet the selected contract. Success is a valid later real observation with unchanged graph semantics and source/selection/baseline bindings, correct per-run bytes/hashes, retained-byte equality, and explicit rejection of every undeclared difference. A fixture positive cannot establish operational success or closure. No business-loss prediction is supported by this evidence.

**Chief Editor / lane perspectives:** Lane A identified and now owns the runtime-provenance correction; Lane B raised the independent real-producer gap and has reviewed the exact answer. No new Lane C finding, CI review or CI acceptance is supplied. The Judge selects only the concrete contract amendment now. Raw-writer exclusion, authenticated reviewer identity, real-target destructive recovery, dependencies/hooks/global tool/CI changes, product delivery and push remain excluded. P7 applies to destructive recovery; P8 remains the separate live-owner recurrence stop.

**Tracking:** construction artifacts and verification artifacts drive different decisions. B-050 owns this finding, Lane A answer, review and eventual source disposition; B-154 owns dependent sequencing; B-077 owns final reconciliation. SV-002's review ledger/clearance tracker and residual receiving packets keep their existing roles. Applied is not Verified; receipt delivered is not receipt accepted. No new tracking layer is needed. B-050 remains Applied/O1 open; B-154 remains Open. U03 selection, outstanding DoD and B-136 P15 remain independent obligations, not automatic consequences of this amendment.

### What you did instead

Read source, handoff/template, retained probe files and a read-only Graphify query. At 8dce483, targeted handoff-response and source-sweep pass; docs-drift remains STALE from 00c23ff across 11 governed paths. The historical graph cannot establish current handoff completion. Guarded synchronization is required after final-source readiness, through candidate acceptance/publication; no raw rebuild now. bun run check failed to start in this environment with CouldntReadCurrentDirectory, so no new full-suite pass is claimed. Only reviewer body text is appended; no implementation, producer rerun, application build, Register act, receiver/header/tracker/DoD/clearance change, live synchronization or push.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | A-PR5a-1 exact map and bounded correction plan are ready for Judge selection; proposal review complete | Phase 1: retain measured fixture and full-pipeline evidence limits |
| Approve-with-conditions | Execution of the proposed correction | Phase 1: specific Judge selection recorded with propagation; then paths 1–2 and retained controls/evidence |
| Reject | Receipt 1 at c42712b; claiming the proposed policy is already implemented or independently accepted | Phase 1: corrected-source readiness must be accepted separately |
| Defer | Guarded candidate/publication/health, actual repeat, whole-unit review and closure | Phase 1: ordered D-426 receipts and source-specific dispositions |

## Lane A — D-427 implemented: corrected final review source `d1186bf` for a new receipt 1, 2026-10-07

### What happened

Read at `d1186bf`. Lane B: `353febb`, the review of A-PR5a-1. The Judge selected A-PR5a-1 ("Select A-PR5a-1",
2026-10-07). It is recorded as **D-427 at `c121ef3`** (Register, Build Spec and Inventory, before implementation) and implemented
at **`d1186bf`** (guard and guard tests only; D-427 item 2). Lane B's precision correction is accepted: the old
comparator refused only when the two observation values differed, not always.

**The final review source is now `d1186bf`.** `c42712b` and `b775c42` are prior reviewed sources. The receipt-1
request and its addendum stand, except for the rows and evidence below.

### What you need

**Requested of Lane B: a new receipt 1, the independent readiness review of `d1186bf`.**

#### Changed matrix rows

| Clause | Implemented | Valid control → refusal cases (test) | Remaining limit / open |
|---|---|---|---|
| PR5a repeat comparison, amended by **D-427**:<br>• **Per-run validation first**, even when raw files match: a present ISO 8601 observation inside the run's own recorded rebuild bracket (R1 from the first run's frozen packet, C2 from the repeat); the studio graph equal to its own root graph by content; exactly one manifest `graph` entry binding its own `studio/graph.json` bytes.<br>• C2's observation strictly later than R1's.<br>• **Only then** each exact leaf is masked. Every enclosing field, other provenance field, node, link and manifest entry stays compared; `REPEAT_VOLATILE` is unchanged | `d1186bf` (`REPEAT_PROVENANCE`, `provenanceFindings`, `repeatComparison`, `proveRepeat`) | "D-427: repeat-provenance amendment A-PR5a-1":<br>• "valid control: two real runs differ only in the three leaves, and the exact policy accepts them; raw evidence is retained" (**real pinned producer**: rebuild and export twice from one baseline);<br>• "source identity and graph content: a changed source_hash, source_id, adapter or any graph field refuses" (including an undeclared timestamp);<br>• "observation bindings: outside its bracket, invalid, equal, backward or missing a bracket refuses";<br>• "dependent artifacts: a studio graph unlike its root, a wrong manifest graph hash or another manifest field refuses" (including a duplicate graph entry).<br>The PR5a cases now carry provenance like the real producer and still pass | The valid control compares the promoted outputs of two real runs, not a full generation and composition. **The actual B0 → R1 → C2 repeat remains receipt 4.** Any further undeclared difference still stops the repeat and needs its own decision |
| `REPEAT.json` | `d1186bf` | Records both observations, both brackets, and the raw hashes of the root graph, the studio graph and the workspace manifest, plus `REPEAT_PROVENANCE` (PR5a valid control) | — |

### What you did instead

**Retained evidence at `d1186bf`**, in folder `C:/CoWork/outputs/lane-a-d426-receipt1-2026-10-07/at-d1186bf`. The tree was clean (`source-status.txt` is empty), on Bun 1.1.30, Node v24.18.0 and Git 2.54.0.

- **Guard suite:** `guard-suite-full.log`. **242 pass, 0 fail, 875 `expect()` calls, 883 s, exit 0.** SHA-256 `9d225986…`. The adjusted case ran in 1,469 ms and P8's case in 16,594 ms; no P8 recurrence.
- **Mutations:** `mutation-harness.mjs` (SHA-256 `6e7059b3…`) and `mutations/summary.json` (SHA-256 `1e0ce2a6…`). **All 29 were caught in one uninterrupted run, with no re-runs.** The anchor preflight passed, every control passed, every restore was verified, and the harness exited 0.
  - The 5 new D-427 mutations remove, in turn, the bracket check, the strictly-later check, the root-equality check and the manifest binding, and widen the mask to the whole `graph` object. Each produces 1 failing case.
  - `pr5a-graph` was re-anchored, because the graph comparison now runs through the masked copies.
- **Post-commit checks:**
  - `check-post-c121ef3.log` (the D-427 recording): 18/19, docs-drift only; source-sweep passes.
  - `check-post-d1186bf.log` (SHA-256 `8a97b44d…`): **18/19, docs-drift STALE only.**
- **Earlier evidence, preserved:** `at-c42712b/`, `at-b775c42/` and the `96f9b2f` run.

**Not done:** receipt 1 is not self-recorded; no candidate, release, health or repeat; no header, DoD, tracker or
clearance change. B-050 stays `Applied`; its O1 row stays open. Drift: docs-drift is STALE (analyzed `00c23ff`); the
guarded sync follows readiness.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | D-427 recorded (`c121ef3`) and implemented (`d1186bf`) exactly as selected | Phase 1: Lane B reviews at this fixed source |
| Approve-with-conditions | Receipt 1 at `d1186bf` | Phase 1: Lane B's independent outcome; any finding is answered against a newly named revision |
| Defer | Receipts 2–5, dispositions, parents, Gate 2 | Phase 1: in D-426 order after receipt 1 |
| Reject | The fixture positive treated as the actual repeat; any allowance beyond D-427's three leaves | Phase 1: receipt 4 and specific decisions |


## Lane B — D-427 corrected-source receipt 1: not accepted at d1186bf, 2026-10-07

### What happened

**Clarified request:** complete the new independent source/evidence readiness review, distinguish completed artifacts from accepted outcomes, and give Lane A specific corrections without implementing or synchronizing. Read HEAD c8c091d; final implementing source d1186bf318e8f84d0382b04d2fa1d770a2f45e59.

**Receipt 1 is not accepted at d1186bf.** The amendment is recorded and implemented in its bounded paths, and the former undeclared-observation difference is addressed. However, two reproduced false passes violate D-427's per-run conditions. The independent assessment is now delivered; readiness acceptance is not.

Authority/order review: c121ef3 records D-427 in Register, Build Spec and Inventory before d1186bf changes only the guard and its test file. The exact-leaf masks, strictly-later comparison, bracket plumbing and expanded raw evidence are present; the original REPEAT_VOLATILE list stays unchanged. No new Judge selection of the same three fields is needed for corrections that enforce the already selected contract.

Retained Lane A evidence at C:/CoWork/outputs/lane-a-d426-receipt1-2026-10-07/at-d1186bf was inspected, not rerun. Source pin matches d1186bf; retained source-status is empty. Full suite log reports 242 pass, 0 fail, 875 expect calls, 883.46 s and exit 0; SHA-256 9d22598606773c6c164fe0a4a0109ed509e6a4e3fcef2426534d9c06787e3d4e. Mutation harness SHA-256 6e7059b39aec50378e48e3f9aede16886fa0eda06dc3f155888c84ebe0e02a5f; summary SHA-256 1e0ce2a660dc7db9e3758e925cc5fca2347c1715863be06c95181e4c9433b61e. All 29 summary rows report passing controls, failing mutations and restoration. All 58 raw control/mutated logs were checked for corresponding positive pass/zero-fail controls and actual failing mutated cases. This supports the retained outcomes, not exhaustive coverage, independent restoration proof or an independent suite rerun. No new P8 recurrence is established; the prior classification and future stop remain.

### What you need

| Finding | Reproduced failure / exact source | Draft fix for Lane A | Success criterion / phase |
|---|---|---|---|
| D427-R1: missing dependent artifacts bypass per-run validation | provenanceFindings wraps studio equality and manifest binding inside existsSync(studio/graph.json). With both sides containing only valid root graphs and valid later observations/brackets, repeatComparison returns no findings; missing required files on both sides also escape the cross-run file-set difference check | Require root graph, studio graph and workspace manifest to exist, parse and have the expected shapes before granting any allowance. Missing or malformed input returns explicit findings; never skip validation. Preserve unique graph-entry and own-byte hash checks | Phase 1: valid complete pair passes; studio graph absent on R1, C2 or both refuses, including both dependent files absent. Missing/malformed manifest and non-array artifacts refuse without an uncaught exception. Cover invalid identical inputs too |
| D427-R2: impossible calendar date accepted as a valid instant | ISO_INSTANT plus finite Date.parse accepts 2026-02-30T12:00:01.000Z; Date.parse normalizes it to March 2. With a bracket around that normalized value and R1 at 2026-03-02T12:00:00.000Z, complete bound artifacts pass | Validate actual ISO calendar/time components before bracket/later checks, without silent rollover. Preserve the selected valid-ISO contract; do not silently replace it with a UTC-only syntax restriction unless separately selected | Phase 1: impossible day/month/time values refuse even inside the normalized parser bracket; valid producer timestamps and valid supported offset instants pass; compare actual instants numerically |

**Independent disposable diagnostic:** C:/CoWork/outputs/lane-b-d427-readiness-2026-10-07/review.json, with each pair's retained JSON files under control/, missing-studio/ and invalid-calendar/. Calls execute exported repeatComparison from the reviewed source. Complete valid control returns []; missing-studio on both sides returns []; impossible-date complete pair returns []. Each pair supplies its own recorded bracket values to the comparator. These are deliberately constructed comparator inputs, not real producer observations or a prepare/publication/repeat execution. The diagnostic proves these local per-run validators can falsely accept; it does not prove the surrounding guarded pipeline can publish an incomplete or impossible-date state, bypass earlier validation or cause business loss.

**Coverage gap:** the existing tests alter one C2 copy while keeping a complete valid R1; they do not establish required artifact presence when both sides lack the same files. The invalid-time control uses the word yesterday, which does not test an ISO-shaped impossible date. Extend positive/refusal controls and targeted mutations for these exact conditions. Test totals and 29 caught mutations do not discharge untested conditions.

#### Parent-first follow-up

1. Preserve recorded D-426/D-427 authority, earlier discharged findings and evidence. Judge selection, propagation and implementation delivery are complete records; the new independent outcome is not accepted.
2. Lane A answers D427-R1/R2 here and implements only the guard/test corrections under the selected contract and applicable bounded work order. No blanket timestamp/hash exemption, new source path or allowance is requested. If the proposed correction changes the selected contract, surface that exact change before applying it.
3. Retain corrected-source valid/refusal evidence and relevant mutation controls with passing anchors, clean-state/source pins and post-commit checks. Keep historical evidence; identify the newly named final source rather than treating d1186bf as accepted.
4. Lane B reviews the new source and records a separate receipt-1 accepted/not-accepted outcome. P8 recurrence still stops the unit.
5. Only after accepted readiness: final-source candidate prepare and semantic/fragment completion, exact-byte acceptance (receipt 2), guarded release then separate full health (receipt 3), actual unpublished B0/R1/C2 repeat (receipt 4), independent whole-unit review (receipt 5).
6. Source-specific B-050 disposition then B-077 final reconciliation; required child and parallel obligations precede parent/clearance acts. Scope is parent-first; closure evidence is dependency-first. No earlier receipt automatically closes anything.

**Chief Editor and lanes:** Lane B raises these two implementation-contract findings and owns independent review; Lane A owns the answer and corrections. No new Lane C finding, CI evidence or acceptance is assumed. The Judge need not reselect the same amendment; the next necessary work is enforcement of its existing conditions. Product construction/verification must consume accepted artifacts with source/byte identities, not raw counts or a proposal verdict. P7/P8 and all D-426 exclusions remain in force.

**Tracking and language:** B-050 owns technical findings/answers/evidence and remains Applied with O1 open; B-154 owns sequencing and remains Open; B-077 owns final reconciliation. SV-002's review ledger/clearance tracker and residual receiving packets remain the tracking layer. Applied is not Verified, implemented is not independently accepted, and a delivered refusal is a completed assessment but not readiness. U03, outstanding DoD and B-136 P15 retain their own triggers. No new handoff, lifecycle label, tracker, receiver/header, DoD or clearance change is needed now.

### What you did instead

Source/retained-evidence inspection plus small disposable comparator diagnostics only. Source-sweep and handoff-response pass at c8c091d. docs-drift remains STALE from 00c23ff over 11 unique governed paths: D-427's three recording files were already in that set, so adding three to the tally is incorrect. The read-only Graphify query is historical context and cannot establish current acceptance. Guarded sync remains required after final corrected-source readiness; no raw rebuild now. bun run check cannot start here (CouldntReadCurrentDirectory); no full-suite pass is claimed by Lane B. No application build, producer rerun, implementation edit, live graph change, Register act or push.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | D-427 recording/order, bounded delivery, exact mask approach and observed retained evidence | Phase 1: preserve evidence limits; not whole-source acceptance |
| Approve-with-conditions | Lane A correction of D427-R1/R2 | Phase 1: enforce existing selected contract in paths 1–2, retain controls and name corrected source |
| Reject | Receipt 1 at d1186bf | Phase 1: missing required artifacts and impossible calendar instant can falsely pass per-run checks |
| Defer | Prepare/sync, acceptance/publication/health, actual repeat, whole-unit review and closure | Phase 1: accepted new readiness and remaining D-426 receipts/source-specific acts |

## Lane B — review of bb0b4bc and Lane A's withheld addendum, 2026-10-07

### What happened

**Clarified request:** review the attached Lane A response and corrected source, discharge supported findings, identify remaining gaps and give the parent-first handback without implementing. Read source bb0b4bca7227b5b0dbc64aab2134381b65d3c39f. Lane A says the Judge selected code/evidence only and withheld its receiver addendum pending permission. This reviewer section does not supply or authorize that receiver answer.

**Independent receipt-1 outcome: not accepted at bb0b4bc.** D427-R1 is discharged on the inspected source and diagnostic: required root/studio/manifest objects and the artifacts array are now checked unconditionally, with explicit findings. The prior both-bundles-missing reproduction now refuses. The prior impossible February 30 reproduction also refuses; however, D427-R2's actual-instant conversion still has the specific defect below. Prior historical refusal at d1186bf remains intact; a later revision does not retroactively accept it.

Retained evidence at C:/CoWork/outputs/lane-a-d426-receipt1-2026-10-07/at-bb0b4bc names the correct full source and an empty source-status file. Suite log reports 246 pass, 0 fail, 908 expect calls, 1307.68 s and exit 0; SHA-256 e093fd64998977f90b5499549f49c957f1eb92071e11a45d5da55f0ecd6e624f. Harness SHA-256 cbf85bce356146521ebc6f841303ea03420b761200741be83fb4cfb3904ce9ff; mutation summary SHA-256 203c7ba7341a803e2559868780f3386d8d6722c4f7915c1b44519257e736c595. All 32 summary rows report passing controls, caught mutations and restoration; all 64 raw control/mutated logs were checked for corresponding pass/zero-fail controls and actual mutated failures. This is independent retained-evidence inspection, not a suite/mutation rerun or independent restoration proof. The attachment's uninterrupted-run statement is Lane A's account. No P8 recurrence is established by the available results; the existing future stop remains.

### What you need

| Item | Evidence / gap | Draft fix and acceptance criterion | Phase |
|---|---|---|---|
| D427-R1 completeness | Resolved: both missing studio bundles now produce explicit per-run findings; valid control remains green | Preserve required-file/object/array checks and existing hash/cardinality controls | Phase 1: discharged |
| D427-R2 calendar rollover | February 30 now refuses; original normalization defect corrected | Preserve impossible-day/leap-year/time/offset controls | Phase 1: original case discharged |
| D427-R2 actual-instant conversion, remaining | isoInstant ends with Date.UTC(y,...). For valid 0099-10-07T12:00:00.000Z it returns 939297600000 (1999-10-07), instead of -59018846400000 (year 0099). JavaScript remaps numeric years 0–99 to 1900–1999 | Construct the validated calendar instant without Date.UTC's 0–99 year remapping, then apply the validated offset. Add controls for years 0000, 0001, 0099 and 0100, including a leap day and offset/year boundary. Valid early-year instants must match their actual brackets and ordering; brackets around the incorrectly mapped century must refuse. Keep modern producer controls green | Phase 1: Lane A correction in existing guard/test paths |

Diagnostic retained at C:/CoWork/outputs/lane-b-d427-bb0b4bc-review-2026-10-07/review.json: exported repeatComparison replays the prior complete valid, missing-bundle and February 30 pairs; exported isoInstant demonstrates the exact year-0099 mismatch. No producer run, prepare, publication or real repeat was performed. The remaining defect concerns accepted four-digit ISO years and the promised numeric instant; it does not demonstrate failure of today's fixed-format producer output or a live publication bypass. No business-loss prediction is supported.

**Size/offset clarification accepted:** valid offset syntax can pass instant validation while a complete cross-run comparison still refuses a changed manifest size_bytes. D-427 permits only the graph entry's sha256 difference, so this refusal is intended. Do not mask size or rewrite retained bytes to make offsets pass. Same-size controls demonstrate offset ordering without relaxing the artifact contract.

#### Parent-first Lane A follow-up and Judge boundary

1. Preserve D-426/D-427 authority, discharged findings and historical evidence. No generic reselection of the same three fields is needed to correct the remaining year conversion under existing paths 1–2.
2. Answer the remaining D427-R2 conversion finding; correct and retain targeted valid/refusal/mutation evidence, post-commit checks and the newly named final source. Do not claim all D427-R2 cases resolved from the February control alone.
3. Lane A's receiver addendum remains withheld under the reported code/evidence-only instruction; its requested go-ahead belongs to the Judge. When authorized, record the receiver's answer/source/evidence in this existing B-050 entry, not a new handoff or status. Lane B has independently reviewed the supplied source now and has not edited that answer field.
4. Lane B reviews the corrected final source and records a new receipt-1 outcome. Only accepted readiness permits progression to the existing guarded preparation sequence.
5. Complete D-426 receipts 2–5 in order: completed semantic/fragment-preserving candidate and exact-byte acceptance; guarded release then separate full health; actual unpublished B0/R1/C2 repeat; independent whole-unit review. A producer-backed fixture or comparator control is not the actual repeat.
6. B-050 source disposition then B-077 final reconciliation, required residual child/parallel obligations and parent/clearance acts. Scope is parent-first; parent closure waits on required child evidence.

**Perspectives, artifacts and tracking:** Lane B raises/reviews the remaining contract defect; Lane A answers/corrects. No new Lane C finding, CI review or acceptance is supplied. Construction source and verification evidence are delivered artifacts; their independent acceptance is separate. B-050 technical outcomes, B-154 sequence, B-077 reconciliation, SV-002 review/clearance and residual receiving packets remain the tracking layer. B-050 stays Applied/O1 open; B-154 stays Open. U03, open DoD and B-136 P15 retain independent triggers. No new tracker, receiver/header, DoD or clearance change.

### What you did instead

Review and disposable diagnostics only. Drift remains subject to the governed docs-drift check; the historical graph was analyzed at 00c23ff and the known changed set is 11 unique governed paths. Read-only Graphify query supplies historical context, not current acceptance. Guarded sync is required only after final-source readiness acceptance. No implementation, build, live graph action, Register change or push. Full-suite results above are retained Lane A evidence, not Lane B execution.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | D427-R1 fix, original February rollover refusal, size_bytes interpretation and bounded evidence observations | Phase 1: preserve existing contract and evidence limits |
| Approve-with-conditions | Remaining Lane A correction and receiver addendum | Phase 1: exact year conversion and new-source evidence; receiver addendum follows the Judge's reported writing restriction |
| Reject | Receipt 1 at bb0b4bc; all valid ISO instants claimed correctly converted | Phase 1: years 0–99 still map to the wrong century |
| Defer | Prepare/sync, release/health, actual repeat, final review and closure | Phase 1: accepted corrected-source readiness and ordered receipts/source-specific acts |

## Lane A — answer to the D-427 readiness refusals: final review source `4db286c`, 2026-10-07

### What happened

Read at `4db286c`. Lane B: `3a173a2` (refusal at `d1186bf`) and `ff443fe` (refusal at `bb0b4bc`), with sequencing in B-154. This
single addendum answers both refusals. Lane A withheld its answer after `bb0b4bc` on the Judge's code-and-evidence-only
instruction, and records it now with the Judge's go-ahead ("One combined addendum after the fix", 2026-10-07). All
three corrections enforce D-427 as selected; there is no new field, allowance or path, and no reselection.

| Finding (raiser: Lane B) | Lane A answer | Corrected at |
|---|---|---|
| **D427-R1** a missing studio bundle on both sides passed | **Upheld.** The root graph, the studio graph and the workspace manifest (with an `artifacts` array) are now required, parsed and shape-checked on both runs before any allowance. A missing or malformed file is an explicit finding, never an exception. Lane B discharged this at `ff443fe` | `bb0b4bc` |
| **D427-R2** `2026-02-30` passed, because `Date.parse` rolls it into 2 March | **Upheld.** `isoInstant` validates every component with no rollover before the bracket and ordering checks. Lane B discharged the February case at `ff443fe` | `bb0b4bc` |
| **D427-R2 remainder** `Date.UTC` remaps years 0–99 to 1900–1999 (`0099` → 1999) | **Upheld, and wider than stated:** `0000-02-29` became **1900-03-01**, because 1900 is not a leap year, so the remap reintroduced a rollover. The validated components are now applied with `setUTCFullYear` and `setUTCHours`, which take the year as given | **`4db286c`** |

**The final review source is `4db286c`.** `bb0b4bc`, `d1186bf`, `c42712b` and `b775c42` are prior reviewed sources;
their refusals stand as history. **Lane B's clarification is accepted:** D-427 keeps the manifest `size_bytes` compared, so a pair
whose observations use different-length forms (for example `Z` against `+08:00`) refuses on size. This is intended. The
real producer always emits the fixed `toISOString` form, and the offset controls use same-length forms.

### What you need

**Requested of Lane B: a new receipt 1, the independent readiness review of `4db286c`.**

#### Changed matrix rows

| Clause | Implemented | Valid control → refusal cases (test) | Remaining limit / open |
|---|---|---|---|
| D-427 per-run completeness (R1) | `bb0b4bc` `provenanceFindings` | "D-427 R1/R2: complete bundles … > D427-R1: a missing studio bundle on R1, on C2 or on both refuses; so do a missing, malformed or array-less manifest, never throwing" (includes the reproduced both-sides case) and a complete valid pair (control) | — |
| D-427 valid instant (R2): calendar components, no rollover | `bb0b4bc` `isoInstant` | "… impossible calendar instants refuse even inside the parser's normalized bracket" (30 Feb, 29 Feb 2026, month 13, `24:00`, `:60` seconds and minutes, `+24:00`, a space separator); "… valid instants pass, leap days and offsets included, and ordering compares actual instants" | A mixed-length observation pair stays refused, on `size_bytes` (intended) |
| D-427 valid instant (R2): the actual instant for every four-digit year | **`4db286c`** `isoInstant` | "D-427 R2: early ISO years convert to their actual instant, with no century remap":<br>• `0000`, `0001`, `0099` and `0100`, plus the leap days `0000-02-29` and `0004-02-29`, against instants computed **independently from day counts**, and Lane B's reference value `-59018846400000`;<br>• `0100-02-29` and `0001-02-29` refuse;<br>• an offset across the 0099/0100 year boundary;<br>• modern instants unchanged;<br>• a bracket around the true early instant passes, while one around the remapped 1900s instant refuses | — |

### What you did instead

**Retained evidence.** Folders under `C:/CoWork/outputs/lane-a-d426-receipt1-2026-10-07`; each tree was clean (empty `source-status.txt`), on Bun 1.1.30, Node v24.18.0 and Git 2.54.0.

| Source | Suite (`guard-suite-full.log`) | Mutations (`mutations/summary.json`, harness) | Post-commit check |
|---|---|---|---|
| `bb0b4bc` (`at-bb0b4bc/`) | 246 pass, 0 fail, 908 `expect()`, exit 0. SHA-256 `e093fd64…` | 32/32 caught, one run. Summary `203c7ba7…`, harness `cbf85bce…` | 18/19, docs-drift only (`check-post-bb0b4bc.log`, `4f3ad594…`) |
| **`4db286c`** (`at-4db286c/`) | **249 pass, 0 fail, 925 `expect()`, 1,740 s, exit 0.** SHA-256 `2f14ecee…` | **33/33 caught, one run; the anchor preflight passed.** Summary `904519ed…`, harness `2fa1961a…`. The new `d427-r2-year` mutation (back to `Date.UTC`) fails 3 cases | **18/19, docs-drift STALE only** (`check-post-4db286c.log`, `494cc92b…`) |

At `4db286c`, the adjusted boundary case ran in 4,188 ms (under its `SLOW` limit, in a slower run overall) and P8's
case in 17,985 ms. No P8 recurrence. Lane B's statement stands that Lane B inspected, rather than reran, the "one run"
results; they remain Lane A's account.

**Not done:** receipt 1 is not self-recorded; no candidate, release, health or repeat; no header, DoD, tracker or
clearance change. B-050 stays `Applied`; its O1 row stays open. Drift: docs-drift is STALE (analyzed `00c23ff`, 11
unique governed paths); the guarded sync follows readiness.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | D427-R1 and both D427-R2 corrections, enforcing D-427 as selected | Phase 1: Lane B reviews at `4db286c` |
| Approve-with-conditions | Receipt 1 at `4db286c` | Phase 1: Lane B's independent outcome; any finding is answered against a newly named revision |
| Defer | Receipts 2–5, dispositions, parents, Gate 2 | Phase 1: in D-426 order after receipt 1 |
| Reject | Treating earlier refusals as retroactively accepted; test totals as coverage of an untested condition | Phase 1: per-condition evidence decides |

## Lane B — receipt 1 accepted for corrected implementation 4db286c; current-source boundary f060e8c, 2026-10-08

### What happened

**Clarified request:** independently review Lane A's corrected implementing source and retained evidence, resolve the previous refusals, and state the current-source boundary after the G1–G3 documentation advance. Read HEAD f060e8cdd55668db17205203c4c917435422fbce; implementing source 4db286cbce91d9318e75cde0869e8a7ddc5230bf. This is fixture/source readiness only, not candidate acceptance, publication or closure.

**Receipt 1 is accepted for the corrected guard implementation at 4db286c.** D427-R1 completeness and D427-R2 calendar/early-year conversion findings are discharged. Earlier refusals remain historical outcomes at their named revisions. The current source delta through f060e8c is also reviewed: outside docs/handoff it changes only V1-ARTIFACT-INVENTORY.md and SV-002.md, not the guard, tests, instructions, fragments, producer pins or executable bindings. The documentation content is supported; B-154 records its process deviation and remaining rule clarification separately. Do not interpret this outcome as a fresh full-suite execution at f060e8c.

The 4db286c change replaces Date.UTC with setUTCFullYear/setUTCHours after component validation. Independent calls now match actual instants for 0000's leap day, years 0001/0099/0100 and an offset crossing the 0099/0100 boundary. Replayed complete valid control passes; missing bundles on both sides and February 30 refuse. Diagnostic: C:/CoWork/outputs/lane-b-d427-4db286c-review-2026-10-08/review.json. The existing test additions use independently calculated day counts, true-versus-remapped brackets and a mutation restoring the defective Date.UTC call.

Retained evidence at C:/CoWork/outputs/lane-a-d426-receipt1-2026-10-07/at-4db286c names the correct full source and an empty source-status file. Suite: 249 pass, 0 fail, 925 expect calls, 1739.88 s, exit 0; log SHA-256 2f14ecee9903b12b9a02e479587a9e7079265716393efecbe7f43edda9a8284d. Harness SHA-256 2fa1961a30cf146ac92255b34e35edec7790cc7220dddcd3cba91064e8aa30c8; mutation summary SHA-256 904519eda7ae68497b28acc6e91b09c2ffe37ab637fe69f158d3f749f541e259. All 33 summary rows and all 66 raw control/mutated logs agree on passing controls and actual caught mutations; restoration is the retained harness's report, not a new independent restore run. Lane A's uninterrupted-run account is preserved as such. This review inspects retained execution evidence and independently exercises the corrected functions; it does not rerun the full suite/mutations/producer. No P8 recurrence is established; P8's future stop and prior classification remain.

### What you need

1. Receive the accepted receipt-1 outcome once at this implementing source. Do not rewrite earlier refusals or reopen discharged findings. No further code correction is requested by this review.
2. Correct the preparation-source plan: f060e8c is a non-handoff advance from 4db286c, so a candidate analyzed only at 4db286c cannot pass the handoff-only publication-advance rule through f060e8c. Prepare from the final authorized source including f060e8c and any subsequently authorized canonical edits. Record the exact HEAD actually captured by prepare; a later handoff-only successor may be that captured HEAD. Never label a candidate analyzed at the older revision as covering the new docs. Any later non-handoff edit requires fresh preparation/review under D-426 item 3.
3. Before executing the next bounded unit, retain the final-source full check and its exact result. Known docs-drift is expected before the guarded sync; it is not a 19/19 pass or a generic clean-check exception. Resolve/report any additional check failure. B-154 owns the narrow clean-check instruction conflict and D-385 commit-form finding; no hook bypass, history rewrite or policy expansion is authorized here.
4. Under the existing work order and when the current planning-only request permits later execution, complete the candidate's required semantic work and fragment preservation. Lane B then issues receipt 2 for exact candidate bytes/source/baseline, not this readiness text. No publication until that acceptance record exists.
5. Receipt 3 comprises guarded release plus a separate full-health receipt; receipt 4 is the actual complete disposable unpublished B0/R1/C2 repeat; receipt 5 is independent whole-unit review. Keep each artifact and acceptance distinct. No second live release, real-target destructive drill or new allowance is authorized.
6. Only after the unit, obtain B-050's source-specific disposition and B-077's final review, then the remaining child/parent/clearance acts. B-050 stays Applied/O1 open; no header, DoD, tracker or clearance change follows from receipt 1.

**Artifact success criteria:** readiness establishes reviewed controls/evidence; candidate acceptance binds exact final bytes and source; release binds the published result; full health evaluates that result; actual repeat compares the first released R1 with unpublished C2 under the selected allowances and baseline identities; final review checks the whole unit. A correct parser or fixture repeat cannot substitute for these critical construction/verification artifacts. Invalid source advancement will refuse publication under the inspected code; no actual release failure or business loss is claimed.

### What you did instead

Source/retained-evidence review and disposable pure-function diagnostics only. At f060e8c source-sweep, handoff-response and closure-readiness pass. The tracker at aa44dac is current, with six non-SM05 rows unclosed. docs-drift remains STALE from 00c23ff, now across 12 unique paths: SV-002 is newly changed since that analysis. The historical Graphify query is context, not current evidence. Full bun run check cannot start here (CouldntReadCurrentDirectory); retained Lane A suite results remain separate. No build, prepare, candidate acceptance record, live mutation, receiver/header/DoD/tracker/Register change or push.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | Receipt 1 for corrected implementation 4db286c; current documentation delta through f060e8c reviewed | Phase 1: preserve evidence/source limits; all previous technical findings discharged |
| Approve-with-conditions | Next candidate-preparation plan | Phase 1: include final authorized source at or after f060e8c, final-source checks and applicable execution authority; then receipt 2 |
| Reject | Preparing only 4db286c and treating f060e8c as handoff-only; receipt 1 treated as exact-byte acceptance or closure | Phase 1: final-source and distinct-artifact contracts apply |
| Defer | Candidate acceptance, release/full health, actual repeat, whole-unit review and source/parent closure | Phase 1: remaining ordered D-426 receipts and respective acts |

## Lane A — receipt of receipt 1 at `4db286c` and the final-source binding, 2026-10-08

Read at `042dfda`. Lane B: `b4cbf53`.

- **Receipt 1 received:** accepted for the corrected guard implementation at `4db286c`; D427-R1 and D427-R2 are
  discharged. The refusals at `b775c42`, `c42712b`, `d1186bf` and `bb0b4bc` stand as history. No code correction is
  open.
- **Final-source binding (item 2; `B-154` F1) accepted.** `f060e8c` and `042dfda` (`D-428`) are canonical advances
  after `4db286c`, so a candidate analyzed at `4db286c` covers neither. Preparation captures the final authorized source
  at or after `042dfda` and records the exact HEAD it captured; a later handoff-only successor may be that HEAD. Any
  further non-handoff edit needs fresh preparation and review (`D-426` item 3).
- **Final-source check (item 3), at `042dfda` before this commit:** 18 of 19 pass; `docs-drift` alone fails (analyzed
  `00c23ff`, 12 governed paths per the check). That is the single failure `D-428` allows inside this sequence; it is not
  a 19/19 pass.
- **Next (items 4–6), when execution is permitted:** prepare and complete semantic work with fragment preservation; then
  Lane B's receipt 2 on exact candidate bytes, source and baseline; then receipts 3–5. Nothing is prepared, released or
  pushed here.

B-050 stays `Applied`; its O1 row stays open. No header, DoD, tracker or clearance change.

## Terminal annotation record

- **Current-Resolution:** Applied
- **Annotation-Type:** cross-reference
- **Annotation-Act:** Lane A receipt of Lane B's receipt-1 acceptance at `4db286c` (`b4cbf53`), 2026-10-08, this entry's 2026-10-08 receipt section
- **No-Scope-Reopened:** true
- **Annotated-At-Commit:** 042dfdaf6d5eec42134c6cc025dd352a44a01f60

## Lane A — lifecycle correction to the 2026-10-08 receipt, 2026-10-08

Read at `659996b` (Lane B's review in B-154). **Upheld:** `Applied` is deliberately not terminal (`docs/handoff/README.md`
resolution table). B-050 was and remains Applied, a provisional nonterminal disposition. Receipt 1 is accepted for the
corrected implementation, not whole-entry closure. The terminal annotation added at `32f4c57` was unnecessary for this
Applied-state receipt and confers no terminal state or reopening/closure act. It stays in place as history; no further
annotation record is added. The full check result at `659996b` is retained, not only its summary:
`C:/CoWork/outputs/lane-a-check-2026-10-08/check-at-659996b.log`, SHA-256
`755e14ab076982b298709f5b944c4cc61e787454da0748af7b27930b26bdd4d3`: 18 of 19 pass, `docs-drift` alone fails
(`00c23ff`, 12 paths), as `D-428` allows. B-050 stays Applied; its O1 row stays open.

## Lane A — receipt-2 preparation go-ahead recorded, 2026-10-08

**Authority: the Judge, directly to Lane A, 2026-10-08**, in chat: "issue Lane B's draft go-ahead", issuing Lane B's
text from B-154 `659996b` in full:

> "Authorize Lane A to prepare one guarded candidate under D-425/D-426/D-427/D-428, from the reviewed canonical source
> including 042dfda and its handoff-only successors. Use a fresh guard-approved disposable work folder and record the
> exact source HEAD, frozen inputs, baseline and retained full-check result. Complete required candidate semantics and
> preserve/re-merge the graph fragments. Stop for Lane B's receipt-2 exact-byte acceptance. This go-ahead authorizes
> neither publication nor recovery/repeat drills, push, product construction, new source paths or whole-parent closure.
> Any further canonical source edit requires its own applicable authority and fresh preparation/review."

**No new Register act:** this proceeds inside `D-426` item 5.2, the already-issued work order, as `D-425`'s receipt 2
did. Recording it here keeps the prepared source a handoff-only successor of the reviewed `042dfda` lineage. Pushed
range for the record: `4e50c41..d94fb08` (Judge-named, 2026-10-08). Preparation runs at this commit; its candidate
identity follows in a later Lane A section for Lane B's receipt 2. B-050 stays Applied; its O1 row stays open.

## Lane A — D-426 receipt-2 request: candidate ready at `b0cb0c7` for Lane B's exact-byte review, 2026-10-08

Read at `b0cb0c7`. Under the go-ahead above; nothing is published, recovered, repeated or pushed.

### What happened

`prepare --work` at `b0cb0c7` returned pending (exit 3): 185 descriptions and 15 community names. `prepare --resume`
with the answers returned **ready (exit 0)**. Evidence folder: `C:/CoWork/outputs/lane-a-d426-receipt2-2026-10-08`.

| Identity | Value |
|---|---|
| Work id | `f7705594-a80a-4dae-b6e9-baa59bc086a9` (attempt 2) |
| Analyzed source (frozen HEAD) | `b0cb0c78a79b72e14c69b7d61968cc82a911fc7f`, branch `features/feature-V1-SM05`; merge base with upstream `d94fb08` |
| Baseline | release locus `932b45333327ed6d0418ab19cd9e82f4e60e0102`, `guard-treeDigest-v1` `81d1615459c38804db7a757869210ae867c1869139162ecb5a2719eecbf89c57`, 583 files |
| Candidate manifest | `guard-treeDigest-v1` `009f4265bf8d84c95c8020d4a962ea236345fb13f7f4210e990c217bd1cbc803`, 583 files |
| Candidate `graph.json` SHA-256 | `0907edb2115c0182419b79bab5a30d24fb8a5ad40243cc99224b85221b8073f2` |
| Frozen at | `2026-10-08T06:24:35.674Z` |
| Answers (frozen packet) | SHA-256 `b1ff038640cbe2e900e73479c9bb688e612330e66f26a009ede8cdcb6fb574ec` |
| Selection | rules 30 days / 200 commits / no since; oracle `b9aabb81…`; three branches; rebuild and fresh brackets recorded in STATE.json |

**Semantic answers.** 120 held descriptions keep their Lane B-reviewed text: their code is unchanged between `00c23ff`
and `b0cb0c7` (`02-symdiff.json`, `symdiff.mjs`). 65 are written from current source: 10 changed, 2 module-level and 53
new `D-426`/`D-427` symbols. 15 community names are bound by member-set hash, each unique (`03-answer-basis.json`,
`build-answers.mjs`).

**Lane A's own verification (`05-candidate-verification.json`, `verify.mjs`).** Recomputed from the staging bytes:
manifest, file count, graph hash and answers hash equal the ready record. 2,445 nodes, 5,343 links, 129 communities, 0
undescribed. Fragment parity 139/139 exact. Name binding 0 findings. Answers not applied: 0 descriptions, 0 names (each
name checked against its exact member set, the global label and every member's node). Foreign-path hits in node fields:
0. Classification: 583 files (promote 18, retain 563, rebind 2), 0 unknown, 0 multi. `branch.json` analyzed head
`b0cb0c7`, not stale. Live state equals the frozen baseline; no journal or lock.

**Full check at `b0cb0c7` before prepare:** `check-at-b0cb0c7.log`, SHA-256
`29d7bf47d8ddb962f16ad08a42a9e0ef1f09a46682b4a6ee4b3981d9f6b392f9`; 18 of 19, `docs-drift` alone (as `D-428`
allows).

| Evidence file | SHA-256 |
|---|---|
| `prepare-1.log` | `2bc6aa49aee65044a836b911bf6f83a757a0a720d52124423f7e70df01c90cea` |
| `resume-1.log` | `1eace1be0f2fa8e16a273ced82399939d9d5f7a07ffa3ccff07be10ba960ed1b` |
| `02-symdiff.json` | `0d5565111cf56d7772dc8cab93e9f680b7795b50fd2366542411c65082971c32` |
| `03-answer-basis.json` | `9d72f7c614b361d2c51a322f414098d19995d633b6315866171027a623215835` |
| `05-candidate-verification.json` | `a52841cf719d07c8024859603e20d202303f96366b5ef1c87c30d2da1f0def20` |

### What you need

**Requested of Lane B: receipt 2, the independent exact-byte acceptance of this candidate** (`D-426` item 5.2): the
staging bytes, source, baseline and selection above, the 65 written descriptions and 15 names, and fragment
preservation. If accepted, Lane B's own review commit introduces the acceptance record; Lane A drafts none (G-F3-8).
This commit is handoff-only, so the analyzed source `b0cb0c7` stays valid for publication under the source rule.

### What you did instead

Not done: no publish, recovery, repeat, push or header, DoD, tracker or clearance change. Publishing (receipt 3) needs
Lane B's acceptance and the Judge's separate go-ahead. B-050 stays Applied; its O1 row stays open.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | Candidate prepared and verified by Lane A at `b0cb0c7` | Phase 1: Lane A's evidence only |
| Approve-with-conditions | Receipt 2 | Phase 1: Lane B's independent exact-byte review |
| Defer | Receipts 3–5, graph sync, dispositions | Phase 1: Lane B acceptance, then the Judge's go-ahead |
| Reject | Treating this request or Lane A's verification as receipt 2 | Phase 1: `D-426` item 5 |

## Lane A — Judge's confirmed order for candidate `0907edb2…`, 2026-10-08

Read at `9ad68a4`. **Authority: the Judge, directly to Lane A, 2026-10-08**, in chat: "Publish: after Lane B accepts"
and "Push after end of 9ad68a4", then "confirm order: receipt 2 → publish → health → push".

1. **Receipt 2:** Lane B's independent exact-byte review of the candidate above. If accepted, Lane B's own handoff-only
   review commit introduces the acceptance record (G-F3-8).
2. **Publish (receipt 3):** `publish --work <work folder> --review <Lane B's review commit>`, only after step 1.
3. **Health:** the post-publication full check and post-state, recorded here.
4. **Push:** only after step 3. Its exact range ends at the health-record commit and is confirmed by the Judge (`D-385`).

**Why the push waits.** The candidate froze every ref at prepare, including `refs/remotes/origin/features/feature-V1-SM05`
at `d94fb08`. `publicationSourceFindings` refuses when "a ref other than the source branch changed since prepare", so
a push or a fetch that moves any remote ref before publish would refuse this candidate and force a fresh preparation.
**Until publish, neither lane pushes or fetches.** Only handoff-only commits on the source branch are allowed.

B-050 stays Applied; its O1 row stays open.

## Lane A — receipt-2 semantic finding received; replacement candidate authorized, 2026-10-08

Read at `742b5c2`. Lane B's finding was delivered in chat (worklog, 2026-10-08); this records it here.

### What happened

**Correction to Lane A's last status:** receipt 2 was not merely waiting for review. **A review finding is outstanding**
against candidate `0907edb2…`. **Upheld:** its module description groups the branch-selection oracle with bindings
"frozen at prepare and re-verified before every tool call". `generateCandidate` instead computes and checks the oracle
around each extracting call and records the selection. Lane A's own audit of the 65 written texts found four more
overclaims of the same kind. Candidate `0907edb2…` (work `f7705594…`) is ready and source-eligible, but **not
accepted**. It stays as history: no acceptance record, no edit to its staging bytes.

| Node | Overclaim | Source fact |
|---|---|---|
| `graphify_guarded_rebuild` | oracle "frozen at prepare… re-verified before every tool call" (Lane B) | bindings are checked before each Graphify child call; the oracle is computed per extracting call |
| `graphify_guarded_rebuild_generatecandidate` | binding checks "before each tool call" | before each Graphify child call only |
| `graphify_guarded_rebuild_proverepeat` | selection checked "first" | the selection is compared after regeneration; the live state must also be R1 |
| `graphify_guarded_rebuild_repeatcomparison` | "other JSON by parsed content" | other JSON is compared field by field, where only declared volatile fields may differ; one-sided files are findings |
| `graphify_guarded_rebuild_studio_validator` | listed "manifest entries" loosely | classification, derived files, recomputed projections, the producer manifest and the embedded scene |

**Corrected texts** (the module clause is Lane B's text in full; the other 180 answers are unchanged):

- `graphify_guarded_rebuild`: "B-050 guarded Graphify procedure. F1 (D-418 to D-421): validators for paths, live-target
  containment, raw-null lifecycle records and the transaction journal under one bounded decoding policy. F2 (D-423,
  corrected by D-424): source snapshot, isolated generation, composition, and publication with owned recovery on
  declared fixture roots. F3 (D-425): guarded live publication: prepare, then Lane B's typed acceptance record
  introduced by its own handoff-only review commit, then publish --review, with owned recover. D-426 prevention: the
  baseline is captured under the publication lock (PR2a). Executable bindings are frozen at prepare and re-verified,
  with arguments checked, before each Graphify child call. The branch-selection oracle is computed from
  frozen-checkout inputs at both ends of each extracting call, checked against the fresh extraction and baseline
  merge, then recorded for repeat verification. The studio bundle is validated against the pinned producer's
  projections (PR4b), and proveRepeat is the disposable unpublished repeat (PR5a), with D-427's per-run provenance
  checks. No fallback: no bypass, not guaranteed restoration; the lock excludes cooperating guarded runs only, never a
  raw graphify writer."
- `…_generatecandidate`: as before, with "verifies every child argv and executable binding before each tool call"
  replaced by "verifies the argv and executable bindings before each Graphify child call".
- `…_proverepeat`: "PR5a: from a published first-run work folder, repeats generation and composition from its frozen
  packet in a disposable folder and compares the result C2 with the release R1. Before regenerating, the pins,
  executable bindings and answer packet must match the first run's and the live state must be R1, captured under the
  lock; after regenerating, the branch selection must equal the first run's. Any mismatch stops and returns to
  preparation, never a repeat pass. Writes a repeat receipt, and writes only inside its own folder, plus the
  transient capture lock."
- `…_repeatcomparison`: "The C2-versus-R1 comparison. D-427's per-run provenance checks and C2's strictly later
  observation come first. A file present on only one side is a finding; retained files must be byte-equal. Of the
  other differing files, the root and studio graphs compare by content with only the validated observation masked;
  other JSON files compare field by field, where only the declared volatile fields may differ (the manifest's
  graph-entry hash is also masked once validated); any other file compares by bytes. Any finding stops the repeat;
  raw hashes are recorded for both runs."
- `…_studio_validator`: "The studio validator program, run in its own process against the pinned producer: classifies
  every export input and studio file (generated, or shipped and byte-equal to the pinned tool; anything else
  refuses) and requires every derived file; then compares, against projections recomputed from the final graph, the
  graph copy, the scene (layout coordinates excluded), entity sidecars, the reconciliation queue, citations, the
  producer-emitted workspace manifest with its single graph entry, and the scene embedded in the studio page, parsed
  as data and never executed. Reports findings and a summary."

### What you need

**Authority: the Judge, directly to Lane A, 2026-10-08**, in chat: "yes, authorize replacement preparation and carry
the order over". A new `prepare` runs in a **new** work folder at this commit (a handoff-only successor of `042dfda`),
with the corrected answers; the `0907edb2…` folder is `ready`, and resuming it with changed answers would mark it
failed. The confirmed order carries over to the replacement's identity: **receipt 2 → publish → health → push**, with no
push or fetch until publish. Lane A presents the new source, work id, graph/studio/manifest hashes, fragment parity
and semantic evidence; Lane B independently accepts or refuses.

### What you did instead

Nothing published, pushed or fetched; no acceptance record drafted (G-F3-8). Drift is unchanged (12 governed paths,
analyzed `00c23ff`). B-050 stays Applied; its O1 row stays open.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | Lane B's finding and the four further corrections | Phase 1: applied in the replacement's answers |
| Approve-with-conditions | Replacement candidate | Phase 1: Lane B's exact-byte review of the new identity |
| Defer | Publish, health, push, receipts 4–5, closure | Phase 1: the carried-over order |
| Reject | Accepting or publishing `0907edb2…`; source-eligible treated as accepted; editing staging bytes in place | Phase 1: `D-426` item 5; G-F3-8 |

## Lane A — D-426 receipt-2 request: replacement candidate `5dd55b5a…` ready at `11f2e40`, 2026-10-08

Read at `11f2e40`. Under the replacement authority above; it supersedes the `0907edb2…` request for review purposes
only. That candidate stays as history: ready, not accepted, its bytes untouched.

### What happened

`prepare --work` in a new folder at `11f2e40` returned pending (exit 3): 185 descriptions and 19 community names.
`prepare --resume` with answers v2 returned **ready (exit 0)**. Evidence folder:
`C:/CoWork/outputs/lane-a-d426-receipt2b-2026-10-08`.

| Identity | Value |
|---|---|
| Work id | `2539571f-8d6a-405f-90d3-a9065d975c85` (attempt 2) |
| Analyzed source (frozen HEAD) | `11f2e40c5411bf80a15ebbbd2f835d102599cf14`, branch `features/feature-V1-SM05`; merge base with upstream `d94fb08` |
| Baseline | release locus `932b45333327ed6d0418ab19cd9e82f4e60e0102`, `guard-treeDigest-v1` `81d1615459c38804db7a757869210ae867c1869139162ecb5a2719eecbf89c57`, 583 files |
| Candidate manifest | `guard-treeDigest-v1` `c104ec0f9b34f7d2e899f62d8a6ecf58b5d12d14378026970eb33fb1a80b3841`, 583 files |
| Candidate `graph.json` SHA-256 | `5dd55b5a7563cbf866d2e585972d804e0a416ae57bec2d8be54e6632be740e76` |
| Frozen at | `2026-10-08T08:17:07.284Z` |
| Answers (frozen packet) | SHA-256 `c422061759c23ad451860a5c24242808b6d558c0f524850b51bc217f68479ddf` |
| Selection | rules 30 days / 200 commits / no since; oracle `2d6511da…`; brackets recorded in STATE.json |

**Semantic answers (`03-answer-basis.json`, `build-answers.mjs`).** 180 descriptions are the first answers unchanged;
**5 are the corrected texts recorded above**, the module clause in Lane B's wording. 14 community names carry over by
identical member set; 5 changed member sets are named from their members (`names-override.json`). All 19 are
unique across the candidate.

**Lane A's own verification (`05-candidate-verification.json`).** Recomputed from the staging bytes: manifest, file
count, graph hash and answers hash equal the ready record. 2,448 nodes, 5,349 links, 129 communities, 0 undescribed.
Fragment parity 139/139 exact. Name binding 0 findings. Answers not applied: 0 descriptions, 0 names. The staged
module description contains Lane B's oracle clause verbatim and not the old overclaim. Foreign-path hits in node
fields: 0. Classification: 583 files (promote 18, retain 563, rebind 2), 0 unknown. `branch.json` analyzed head
`11f2e40`, not stale. Live state equals the frozen baseline; no journal or lock.

**Full check at `11f2e40` before prepare:** `check-at-11f2e40.log`, SHA-256
`7b3be517db751c7cfb2c5681ec93fb122bf93fd55934f570c35c6c1650c05dd5`; 18 of 19, `docs-drift` alone (`D-428`).

| Evidence file | SHA-256 |
|---|---|
| `prepare-1.log` | `792a3371951bc7cbc8a8d40e590240a81569aa1a522fa18a2a177a3da3c28df6` |
| `resume-1.log` | `4a236539d8b9edee41a8b40ac8fcd724706b51adab13216cc5f861698da46e43` |
| `03-answer-basis.json` | `11b2a82f24412ffabcbc25a74db94b29219f4b4a427e3741622dd60b331fbef8` |
| `names-override.json` | `4830a7da00e69c2606707faa37b35baed0133e424b96e389f77f214416bb7f3d` |
| `05-candidate-verification.json` | `9505ddedbb1bf3d84e8d4fff78574d01bbccda31e32b175b9431a02dcb30c72a` |

### What you need

**Requested of Lane B: receipt 2 for this replacement:** the independent exact-byte review of the staging bytes,
source, baseline and selection above, the five corrected texts, the 19 names and fragment preservation. If accepted,
Lane B's own handoff-only review commit introduces the acceptance record; Lane A drafts none (G-F3-8). The carried-over
order applies: receipt 2 → publish → health → push, with no push or fetch before publish.

### What you did instead

Not done: no publish, recovery, repeat, push, fetch, or header, DoD, tracker or clearance change. B-050 stays Applied;
its O1 row stays open.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | Replacement prepared and verified by Lane A at `11f2e40`; Lane B's finding applied | Phase 1: Lane A's evidence only |
| Approve-with-conditions | Receipt 2 for `5dd55b5a…` | Phase 1: Lane B's independent exact-byte review |
| Defer | Publish, health, push, receipts 4–5, dispositions | Phase 1: the carried-over order |
| Reject | Treating this request or Lane A's verification as receipt 2; any use of `0907edb2…` | Phase 1: `D-426` item 5 |


## Lane B — D-426 receipt 2: replacement candidate accepted, 2026-10-08

Read at 99cc6f7. This independent review accepts only replacement work 2539571f-8d6a-405f-90d3-a9065d975c85, analyzed source 11f2e40c5411bf80a15ebbbd2f835d102599cf14, graph 5dd55b5a7563cbf866d2e585972d804e0a416ae57bec2d8be54e6632be740e76, manifest c104ec0f9b34f7d2e899f62d8a6ecf58b5d12d14378026970eb33fb1a80b3841 (583 files), and the baseline bound below. The old 0907edb2 candidate remains unaccepted history. No receiver field, header, Resolution, DoD, tracker or clearance is changed.

### What happened

Lane A's receipt 11f2e40 correctly receives the earlier semantic finding, replaces the inaccurate waiting status, records four further corrections, and records the Judge's replacement authority and carried-over conditional order. I reviewed the five corrected descriptions against full source bodies: generation, repeat orchestration, comparison and studio validation. They now distinguish prepare-time bindings from extraction-time oracle checks, Graphify child calls from helper scripts, pre-regeneration checks from the later selection comparison, and declared comparison allowances from arbitrary JSON differences. All five corrections are present; exactly five description answers differ from the first packet, and 180 are unchanged. No additional implementation defect is established by this review.

Independent byte review recomputed the graph, manifest, 583-file inventory and answer hash; all match STATE.json and the request. All 563 retained files equal the captured baseline byte for byte. No unknown or multiply classified files, unapplied descriptions/names, name-binding findings or foreign-path findings in promoted/rebound files. All 139 fragments compare exactly. All 19 supplied names bind their actual member sets, labels and member nodes; the new commit-community names were read against member commit titles. Studio validation using the pinned producer and its bound shipped files returns zero findings (2,448 scene nodes, 5,349 edges).

Independent extraction review confirms valid rebuild/fresh brackets, equal oracles, the recorded oracle digest, exact fresh-extraction membership and the required baseline-plus-fresh Git merge. Rebound lifecycle fields pass. The live release chain still selects 932b453 / 81d16154; source eligibility passes at 99cc6f7.

Environment limit: the review session initially resolved a different Git path. That is retained as a reviewer-environment observation in selection-bindings.json, not silently treated as a candidate defect or a pass. A separate read-only subprocess resolving the exact frozen Git directory first verifies its path, binary hash, version, outside/checkout configuration, Node, tool pins and shipped files with zero findings (frozen-binding-validation.json). This does not certify any future publisher environment; the guard must perform its own applicable entry checks. No shared environment or Git configuration was changed.

Evidence directory: C:/CoWork/outputs/lane-b-receipt2b-review-2026-10-08/.

| Evidence file | SHA-256 |
|---|---|
| `independent-bytes.json` | `8307f243181e8d28164fd6d008b35f13fce739e6bfcc381a52e8f136c93a7538` |
| `independent-validation.json` | `d0e6226bcfc0bc82015730e1ab657d3dc3cbde73a01ff4b1a57d4825d930bca7` |
| `selection-bindings.json` | `6208749177dbbcd7a24be3083e4612ff3be6fa3defd167514aaf0da9368ef29c` |
| `frozen-binding-validation.json` | `7af2f875ede76d08d81c7015d1f3f7f6423eb3198791d78203b5e03d9f04dd7d` |
| `check-at-99cc6f7.log` | `0454d0e2b4c6834a37dd3e35c7341e0cd0cfa0a1cecbec5d63462945c35013f4` |

The required bun run check invocation could not start in this review environment (CouldntReadCurrentDirectory). Running its exact underlying script with Node completed: 18/19 pass, docs-drift alone fails, with the full result retained above under D-428. This is not a 19/19 claim. Live drift remains 12 governed paths since 00c23ff; preparation and this acceptance do not clear it.

### What you need

Parent first: SV-002/Gate 2 remains incomplete; tracker aa44dac is current with six non-SM05 rows unclosed. B-154 remains the sequence record. B-050 stays Applied/O1 open. Receipt 1 remains accepted; this record completes receipt 2 for the exact replacement identity only. Receipts 3-5, B-050 disposition and B-077 reconciliation remain their own obligations, then the remaining parent acts. The five Judge-confirmed GR-012/B-014/GR-013/B-021/B-155 items remain settled within their recorded limits. No new Lane C review or product-construction authority is inferred.

Lane A follow-up:
1. Receive this acceptance once in B-050; preserve old findings and the old candidate as history. Use this Lane B review commit as the review argument, not the candidate-request commit.
2. The Judge's replacement authorization in 11f2e40 already carries the conditional order over. Check the actual acceptance identity and current source/baseline/entry conditions; do not ask for the same approval again solely because receipt 2 is now recorded. This review executes nothing.
3. Under that authority, guarded publication is receipt 3. Retain the transaction/release evidence and a separate full-health result and post-state. A required health failure prevents completion; D-428 is not a post-publication waiver.
4. Push remains separately bound to the Judge-confirmed exact range ending at the health record under D-385. A fetch/push that moves frozen refs before publication invalidates source eligibility; no promise follows merely from avoiding those two operations. Do not change staging bytes or other frozen inputs.
5. Keep receipts 4-5 visible: actual disposable unpublished B0/R1/C2 repeat with the frozen packet and raw evidence, then independent whole-unit review. Health or push is not either receipt. Reconcile B-050/B-077 and remaining O0/P15/DoD/residual obligations before parent clearance.

Chief Editor consolidation: record finding -> receiver correction -> source/candidate evidence -> independent acceptance, once, in the existing channel. Chief Editor wording supplies no extra execution or verifier role. Lane B raises/reviews; Lane A answers/operates within authority; no Lane C result is assumed. Source-eligible, ready, accepted, published, healthy, Applied and closed remain distinct facts. No new tracker or canonical decision is required by this review.

### What you did instead

Reviewed source and candidate data and retained independent evidence. No build, implementation, preparation, publication, recovery, repeat, fetch or push; no graph mutation. This is Lane B's review record only.

### F3 acceptance record
```json
{
  "kind": "graphify-f3-acceptance",
  "version": 1,
  "disposition": "Accept",
  "scope": "F3 publication",
  "reviewer": "Lane B",
  "workId": "2539571f-8d6a-405f-90d3-a9065d975c85",
  "graphSha256": "5dd55b5a7563cbf866d2e585972d804e0a416ae57bec2d8be54e6632be740e76",
  "manifest": {
    "algorithm": "guard-treeDigest-v1",
    "digest": "c104ec0f9b34f7d2e899f62d8a6ecf58b5d12d14378026970eb33fb1a80b3841",
    "files": 583
  },
  "analyzedSource": "11f2e40c5411bf80a15ebbbd2f835d102599cf14",
  "baseline": {
    "releaseLocus": "932b45333327ed6d0418ab19cd9e82f4e60e0102",
    "algorithm": "guard-treeDigest-v1",
    "digest": "81d1615459c38804db7a757869210ae867c1869139162ecb5a2719eecbf89c57"
  },
  "pendingSemantics": 0
}
```

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | Five semantic corrections and receipt 2 for the bound replacement identity | Phase 1: independent exact-byte acceptance recorded here |
| Approve-with-conditions | Lane A's carried-over publication/health plan | Phase 1: recorded Judge authority and guard entry checks; separate full-health evidence |
| Defer | Actual publication/health/push, receipts 4-5, B-050/B-077 dispositions and parent clearance | Phase 1: respective ordered evidence and applicable acts |
| Reject | Old-candidate reuse, changed-byte reuse of this acceptance, source-eligible/healthy/pushed treated as whole-unit closure | Phase 1: exact identity and distinct receipt/closure contracts |

## Lane A — receipt 2 received; publication proceeds, 2026-10-08

Read at `dc656d2`. **Received:** Lane B accepts receipt 2 for replacement candidate `5dd55b5a…` (work
`2539571f-8d6a-405f-90d3-a9065d975c85`, source `11f2e40`). Lane B's own commit `dc656d2` is the review commit for
publication; Lane A's request `99cc6f7` is not. Lane B's limit stands: the reviewer's environment does not certify the
publisher's. `0907edb2…` stays unaccepted history.

**Lane A dry-check at `dc656d2` (read-only):** `acceptanceAt` reads the record (lines 5574–5597, `Accept`, reviewer Lane
B, 0 semantics pending); its work id, graph, manifest, source and baseline equal the frozen candidate; the publication
source rule passes; the live state equals the baseline, with no journal, lock or recovery token.

**Authority: the Judge, 2026-10-08**, in chat: "yes, publish now: receive dc656d2, publish, then health". Receipt 3
(`publish --review dc656d2`) and the separate health record follow in a later section. The push waits for health and
the Judge's confirmation of its exact range (`D-385`). B-050 stays Applied; its O1 row stays open.

## Lane A — D-426 receipt 3: guarded release of `5dd55b5a…`, then post-state and full health, 2026-10-08

Read at `8d8b444`. Evidence folder: `C:/CoWork/outputs/lane-a-d426-receipt2b-2026-10-08`.

### Receipt 3: guarded release

`publish --work <receipt2b work> --review dc656d2aa2e15d15feae5e5fbbb9bc354bee7157` at publication head `8d8b444`
(a handoff-only fast-forward of analyzed `11f2e40`): **outcome `released`, exit 0**, "published: live equals the
reviewed manifest", run token `fb9558e1-f06b-4cb2-a94b-b75a0e7b1722`, release receipt
`release-fb9558e1-f06b-4cb2-a94b-b75a0e7b1722.json`. The work folder reads `published`.

| | Before (`06-pre-state.json`) | After (`08-post-state.json`) |
|---|---|---|
| Live manifest | `81d16154…` | `c104ec0f9b34f7d2e899f62d8a6ecf58b5d12d14378026970eb33fb1a80b3841` (583 files) |
| Live `graph.json` | `f27fab81…` | `5dd55b5a7563cbf866d2e585972d804e0a416ae57bec2d8be54e6632be740e76` |
| `branch.json` analyzed head | `00c23ff` | `11f2e40`, `stale: false` |
| Journal / lock / recovery token | none | none |
| Selected baseline | locus `932b453` | locus `dc656d2`, digest `c104ec0f…` (this release) |

### Health: separate post-publication full check

`bun run check` at `8d8b444`, retained in full (`09-full-check.log`): **19/19 passed, exit 0.** `docs-drift`: "synced
(governed intent) at 11f2e40; HEAD 8d8b444 advanced by excluded-only commits". The 12-path drift since `00c23ff` is
cleared, and `D-428`'s pre-sync exception no longer applies.

| Evidence file | SHA-256 |
|---|---|
| `06-pre-state.json` | `852ad41464c713c62ee9297704336efecb9ff70166d0c128a5d31a61990152cc` |
| `07-publish.log` | `9256a82aa9df95174f0870e1c642bf9492a61c00160766301fb2f08dca5125c4` |
| `08-post-state.json` | `ac32c7bc62791a21f4e38bf7adee42a37a1c166a175426a537fd3aeac96659a0` |
| `09-full-check.log` | `f6bf29b9812e64b9d53e799a752849c4c898976b8b53be98169f668a353a4471` |

### What you need

Lane B's independent review of receipt 3 and health. Then, separately: the push of the exact range the Judge confirms
(`D-385`); receipt 4 (the actual unpublished B0 → R1 → C2 repeat, with this release as R1), which needs its own Judge
go-ahead; receipt 5; then B-050's disposition and B-077's reconciliation.

### What you did instead

Not done: push, fetch, repeat, recovery, or header, DoD, tracker or clearance change. This release is the first R1 a
repeat can use. B-050 stays Applied; its O1 row stays open.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | Receipt 3 (released, exit 0) and health (19/19; drift cleared) | Phase 1: Lane B's independent review |
| Approve-with-conditions | Push | Phase 1: the Judge confirms the exact range |
| Defer | Receipts 4–5, B-050 disposition, B-077, parents, Gate 2 | Phase 1: their own go-ahead and evidence |
| Reject | Healthy or released treated as the unit's proof or closure | Phase 1: `D-426` item 5 |


## Lane B — D-426 receipt 3 and separate health independently accepted, 2026-10-08

Read at d502848. Review only: no build, publication, repeat, recovery, canonical edit, fetch or push. B-050 stays Applied/O1 open; no receiver field, header, Resolution, DoD, tracker or clearance changes.

### What happened

I independently recomputed the live tree: manifest c104ec0f9b34f7d2e899f62d8a6ecf58b5d12d14378026970eb33fb1a80b3841, graph 5dd55b5a7563cbf866d2e585972d804e0a416ae57bec2d8be54e6632be740e76, 583 files. The published work state, analyzed source 11f2e40, lifecycle fields and release receipt release-fb9558e1-f06b-4cb2-a94b-b75a0e7b1722.json agree. The release records publication HEAD 8d8b444, embeds the correct acceptance introduced at dc656d2, and binds predecessor 932b453 / 81d16154. The guard's baseline-chain validation now selects dc656d2 / c104ec0f. No journal, lock or recovery token remains. Receipt 2 remains independently readable and source eligibility passes at d502848.

All four Lane A evidence hashes (06-pre-state.json, 07-publish.log, 08-post-state.json, 09-full-check.log) recompute to the values in the request. The retained publish outcome is released/exit 0, and the separate full-health log reports 19/19 with exit 0. In this review environment bun run check again failed to start (CouldntReadCurrentDirectory); running its exact underlying Node script independently at d502848 completed 19/19, exit 0. No pre-sync exception was used for health.

Evidence: C:/CoWork/outputs/lane-b-receipt3-review-2026-10-08/.

| Evidence file | SHA-256 |
|---|---|
| `independent-release.json` | `26c24c7cdd64bafb9c2277942a9db5690004dea39c4a30796cabec811e2cd01a` |
| `check-at-d502848.log` | `4d0d9aa07b670bd900530c7b41f0f3cec1fd82b99276dc37f65cdad284626388` |
| `draft-follow-up.txt` | `ac9dc882daa342dc2dd71a45af8afa04eaa2b50228432fe63d448f12e92fa34e` |

### What you need

Parent-first completion: SV-002/Gate 2 remains incomplete, with six non-SM05 rows unclosed and tracker aa44dac current. B-154 is the sequence record. B-050 receipts 1-3 are now accepted within their separate scopes. Receipt 4 needs its specific Judge go-ahead and the actual unpublished proof; receipt 5 needs independent whole-unit review; then B-050 disposition, B-077 reconciliation and remaining O0/P15/DoD/residual/parent acts. The five GR-012/B-014/GR-013/B-021/B-155 items remain settled within their previously verified limits. No new Lane C finding or product-construction clearance is inferred.

Two nonblocking precision fixes for Lane A/Chief Editor consolidation:
- Replace the worklog's claim that every governed doc change is reflected by graphify query with: "The governed-source drift check passes at analyzed source 11f2e40, with only excluded handoff advances. This establishes source currency, not exhaustive semantic coverage or correctness of every query." No additional sync is required now. A later authorized canonical edit creates new drift requiring its own applicable guarded sequence; this does not retroactively invalidate the completed release.
- D-428's exception is not needed for this healthy state and never excuses post-publication health failure. The recorded rule still exists for a future specifically authorized pre-sync sequence; publication did not repeal it. No indefinite push/fetch freeze follows from the completed candidate's pre-publication rule. Any repeat must still satisfy its own frozen-packet/live-R1 preconditions.

Lane A follow-up:
1. Receive this review in the existing B-050 answer once; keep technical receipt acceptance separate from whole-entry closure. B-154 may reference it without copying the full technical evidence. No new tracker is needed.
2. Present the bounded receipt-4 draft below for the Judge's specific go-ahead; receipt 3 review is now complete, so it is no longer a reason to wait. Do not execute a repeat from this planning-only review.
3. On that go-ahead, retain B0's original identity, R1's first-release identity and C2's unpublished composed result; preserve the frozen source, bindings, answers and selection. Keep the raw comparison evidence, both observed times and brackets, and required valid/refusal controls. Stop on mismatch or P8; no new allowance or real-target destructive drill.
4. Then obtain receipt 5, B-050 disposition, B-077 reconciliation and remaining parent clearance. Health and push cannot substitute for those artifacts.
5. The requested push range d94fb08..d502848 is locally verified as exactly eight commits, each changing only B-050; local origin tracking is d94fb08. This is range/content review, not live remote freshness or push permission. No fetch was done. The Judge must confirm the exact range and D-385's applicable push proofs still apply. This Lane B review commit and any subsequent receiver commit lie outside that fixed endpoint; do not silently widen the range to HEAD. A current-tip push needs an explicitly updated endpoint.
6. The reported runbook edit is separate proposed canonical work. No concrete target path/edit unit is supplied for approval here. Use the draft below to specify it, then obtain its own bounded authority and propagation disposition; this is not a blocker to the accepted receipt 3 and does not justify a raw rebuild or product work.

Draft Judge receipt-4 go-ahead — not issued by this review:
> Authorize Lane A to execute one D-426 receipt-4 disposable unpublished repeat from the published work folder C:/CoWork/outputs/lane-a-d426-receipt2b-2026-10-08/work, using a fresh guard-approved output folder. Preserve B0 as the original baseline (932b453 / 81d16154), R1 as the first accepted/released replacement (dc656d2 / c104ec0f, graph 5dd55b5a), and C2 as the unpublished composed repeat candidate. Use the first run's frozen source 11f2e40, bindings, answers and selection. Retain REPEAT.json, raw hashes, both observations/time brackets, explicit comparison/allowance evidence and required valid/refusal-control evidence. Apply only D-426/D-427's recorded allowances, with P7/P8 unchanged. Stop and report any refusal, difference, new semantic demand or P8 recurrence; do not expand allowances or hide a failed attempt with reruns. No second live publication, destructive real-target recovery drill, implementation, canonical edit, dependency change, fetch or push is authorized by this go-ahead. Stop for Lane B's independent receipt-5 whole-unit review.

Draft runbook clarification — path/unit/authority remain to be specified, not applied:
> Between candidate preparation and publication, preserve frozen source inputs, including refs other than the allowed handoff-only source-branch advance. A fetch/push that changes a frozen ref can invalidate source eligibility and require fresh preparation and independent acceptance. Passing the source check is not candidate acceptance. After publication, receipt 4 uses its own frozen-packet and live-R1 preconditions; the old pre-publication freeze is not an indefinite prohibition on all future fetches/pushes. Exact-range push authority remains separate.

Chief Editor consolidation should retain finding, receiver answer, exact artifact, evidence and independent outcome once. Lane B raises/reviews; Lane A answers and executes only the selected bounded unit. Synchronized tooling is useful construction/verification evidence, not proof of the product's editorial acceptance criteria. There is no evidence supporting a prediction of inevitable operational failure or business loss; the concrete refusal boundaries are changed identities/inputs, invalid comparisons and missing authority or closure evidence.

### What you did instead

Accepted receipt 3 and separate health on independent evidence; drafted the next bounded act and wording fixes. No execution or canonical change. No second F3 acceptance record: dc656d2 remains the exact-byte publication acceptance, not this health review.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | Receipt 3, separate full health and current governed-source currency | Phase 1: independently confirmed at d502848 |
| Approve-with-conditions | Receipt-4 plan and reviewed eight-commit push range | Phase 1: specific repeat go-ahead; separate exact-range push confirmation and D-385 proofs |
| Defer | Actual repeat/push, receipt 5, canonical runbook edit, B-050/B-077 dispositions and parent clearance | Phase 1: respective bounded authority and ordered evidence |
| Reject | Health/sync/push treated as whole-unit closure, exhaustive query guarantee, arbitrary range widening or expanded repeat allowances | Phase 1: identity, scope and closure contracts apply |

## Lane A — receipt 3 review received; receipt-4 go-ahead recorded, 2026-10-08

Read at `c72895f`.

**Received:** Lane B independently accepts receipt 3 and the separate health check (live `5dd55b5a…`, manifest
`c104ec0f…`, 583 files, 19/19). `dc656d2` remains the only exact-byte acceptance. Graph synchronization means the
governed sources are current; it is not a guarantee of exhaustive or correct query coverage. Drift is clear at
`c72895f` (19/19; synced at `11f2e40`, handoff-only advance).

**Receipt-4 go-ahead. Authority: the Judge, directly to Lane A, 2026-10-08**, in chat: "yes issue Lane B's go-ahead",
issuing Lane B's draft from `c72895f` in full, with Lane A's deadline sentence (G2) added:

> "Authorize Lane A to execute one D-426 receipt-4 disposable unpublished repeat from the published work folder
> C:/CoWork/outputs/lane-a-d426-receipt2b-2026-10-08/work, using a fresh guard-approved output folder. Preserve B0 as
> the original baseline (932b453 / 81d16154), R1 as the first accepted/released replacement (dc656d2 / c104ec0f, graph
> 5dd55b5a), and C2 as the unpublished composed repeat candidate. Use the first run's frozen source 11f2e40, bindings,
> answers and selection. Retain REPEAT.json, raw hashes, both observations/time brackets, explicit comparison/allowance
> evidence and required valid/refusal-control evidence. Apply only D-426/D-427's recorded allowances, with P7/P8
> unchanged. Stop and report any refusal, difference, new semantic demand or P8 recurrence; do not expand allowances or
> hide a failed attempt with reruns. No second live publication, destructive real-target recovery drill,
> implementation, canonical edit, dependency change, fetch or push is authorized by this go-ahead. Stop for Lane B's
> independent receipt-5 whole-unit review." Run before 2026-10-28 18:21 UTC, when `preflight/sv2-u02` leaves the
> pinned 30-day selection window; after that the repeat refuses and needs fresh preparation.

**Order rule (G3):** no guarded sync or publication until receipt 4 is complete, because the repeat requires the live
state to still be R1. The proposed runbook edit (SKILL §7) may be committed under its own authority, but its sync waits.

**Push:** the Judge's "push after validation" is read as the Lane B-validated range `d94fb08..d502848` only (eight
B-050-only commits). `c72895f`, this commit and the receipt-4 record stay local until the Judge names a new endpoint.
The disposable repeat rebuilds the frozen ref map, so the push does not affect it. B-050 stays Applied; its O1 row stays
open.

## Lane A — D-426 receipt 4: the repeat stopped (C2 ≠ R1); no rerun, 2026-10-08

Read at `9984a90`. Evidence folder: `C:/CoWork/outputs/lane-a-d426-receipt4-2026-10-08`. **Pushed** under the Judge's
"push after validation": exactly `d94fb08..d502848` (eight B-050-only commits, fast-forward, upstream re-fetched and
unchanged); `c72895f` and later stay local.

### What happened

One `proveRepeat` from the published work folder (`2539571f…`) into a fresh folder, 10:25:49–10:38:46 UTC: **outcome
`repeat-stopped`, exit 4**, "stopped: revise and re-review the allowance list before any repeat is accepted". Per the
go-ahead: no rerun, no allowance change. Guard and tests are unchanged since `4db286c` (receipt 1's controls cover this
code). The live state is still R1 (`c104ec0f…`, graph `5dd55b5a…`); no journal, lock or recovery token remains; check
19/19.

| Guard finding | Lane A diagnosis (read-only, from retained bytes) |
|---|---|
| R1: `observed_at` 08:09:31.368Z lies outside its own rebuild bracket (08:03:51–08:05:07) | **D-427's binding is wrong, not the run.** The pinned producer's Git adapter sets `observed_at` to the current time each time it runs. In **both** runs the stamp falls about 4 minutes after the bracketed rebuild, so a later stage (`update` or `label`) re-runs the Git extraction. The rebuild bracket was never the observation's own window |
| C2: `observed_at` 10:31:01.358Z outside its bracket (10:26:14–10:27:18) | Same cause |
| `graph.json`: graph key `graph` differs | Only consequence: validation failed, so the observation was not masked. The only differing field is `graph.provenance.observed_at`; nodes and links match |
| `.graphify_detect.json` `scope` and `scope.json`: `excluded_ignored_count` 696 (R1) vs 695 (C2) | **Cause not determined.** Same source and head, 486 candidates and 329 included in both; the baselines copied into the checkouts have identical 583-file sets. The detect record holds counts only, so the extra ignored file cannot be named without a new run |

| Evidence file | SHA-256 |
|---|---|
| `repeat/REPEAT.json` | `a5185a3525c968e09e395e4c524e09b79c5a9753c8eca6b4ea4267881974b8e1` |
| `01-repeat-result.json` | `eefe87269d28691c9cef17e59ac28883bdc90b39a1bb058b73acc8bacfb0357c` |
| `repeat.log` | `55b204a11197c8058ab47d55d5882865a79cf088df36414d05f0c22274cd77ad` |
| `00-check-at-9984a90.log` | `d5f16a4cad1e79c3728bbcd340af628a9ac5f68f9776fac6d106390d6e1660f2` |

### What you need

1. **Lane B:** an independent review of this stopped receipt 4 and the diagnosis above.
2. **Open question for Lane B:** if a stage after the PR3b checks re-runs the Git extraction, does the final Git
   subgraph still equal the one PR3b validated? Across the two runs, nodes and links match, but that is not proof
   within one run.
3. **Judge (drafted, not issued):** first, a bounded diagnostic-only run in a disposable folder that records each
   stage's `observed_at` and the detect-time ignored-file list, with no live write. Then a specific act amending D-427's
   binding to the observation's real window, and a decision on `excluded_ignored_count`, with Lane B review. Then one
   new repeat against the still-live R1. **Deadline:** before 2026-10-28 18:21 UTC (the selection window). No sync or
   publication may happen first: the repeat needs R1 live.

### What you did instead

Stopped as instructed. No rerun, allowance change, code change, sync, publication or push beyond the validated range.
B-050 stays Applied; its O1 row stays open.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | The guard stopped correctly; the failed attempt is retained, not hidden | Phase 1: receipt-4 evidence |
| Approve-with-conditions | Diagnosis | Phase 1: Lane B's independent review |
| Defer | Diagnostic run, D-427 amendment, new repeat, receipt 5, dispositions | Phase 1: the Judge's specific acts, before 2026-10-28 18:21 UTC |
| Reject | A rerun without a change; widening allowances without an act; calling the unit proved | Phase 1: the receipt-4 go-ahead; `D-426` item 5 |


## Lane B — independent review of stopped receipt-4 attempt; success not accepted, 2026-10-08

Read at c37db75. This reviews the retained failed attempt and drafts correction work only. It is not receipt-4 equality, receipt-5 whole-unit acceptance, a new repeat/diagnostic authorization, or a source disposition. B-050 stays Applied/O1 open; no receiver field, header, Resolution, DoD, tracker or clearance change.

### What happened

I reproduced the comparator findings read-only from the captured R1 baseline and the retained C2 staging. No producer rerun, diagnostic generation or input mutation was performed. REPEAT.json, result, repeat log and pre-run check hashes match all four submitted hashes. Outcome repeat-stopped/exit 4 is independently confirmed. There are SEVEN raw findings: two invalid rebuild-window observations; detect scope count; root graph metadata; scope count; studio graph metadata; workspace manifest artifacts. The three categories in Lane A's summary group consequences; they are not the literal finding count.

Full node arrays and full link arrays are equal. The only graph-metadata difference is graph.provenance.observed_at. Scope differences are exactly excluded_ignored_count (696 versus 695) in scope.json and scope.excluded_ignored_count in .graphify_detect.json. The manifest differs in its already-declared generated_at and its graph-entry hash; the other artifact entries and size_bytes agree. This graph/hash difference is left unmasked because per-run validation fails; it is not permission to ignore arbitrary graph or artifact changes. The independent comparison evidence preserves all seven findings and both raw identities.

The pinned producer source establishes a concrete correction to the earlier guard assumption: Graphify update invokes rebuildCode (including the fill-missing path), and successful rebuildCode includes Git extraction; the adapter defaults observed_at to the current time unless explicitly supplied. The guard checks fresh selection/merge after the initial extraction, then runs later update calls without a new extraction bracket or final Git-subgraph validation. The guard's statement that only hook-rebuild runs Git extraction is therefore incomplete. Source evidence supports a later Git-writing path; the retained packet does not identify the exact last runtime writer/stage window. Label is not established here as a Git extractor. "Always about four minutes", "every read re-stamps", and "the timestamp can never be in a rebuild window" are broader than the evidence and should not become requirements.

Answer to Lane A's open question: for THESE retained runs, I independently compared each FINAL Git subgraph with its own required baseline-plus-fresh producer merge. R1 and C2 both pass with zero findings. The frozen oracle also agrees at the two reported observation instants. There is no observed final Git corruption in these samples. That is a retrospective result, not a general guarantee for future runs or a substitute for recording/validating every later extracting stage.

Live R1 remains exactly c104ec0f... / 5dd55b5a..., 583 files; baseline-chain selection is dc656d2. No journal, lock or recovery token remains. Current docs-drift passes at analyzed 11f2e40 with handoff-only advances. Tracker aa44dac is current; six non-SM05 rows remain unclosed. Full underlying Node consistency script at c37db75 completes 19/19. The bun wrapper again cannot start (CouldntReadCurrentDirectory); that failed invocation is not counted as a pass. Guard/tests have no changes since 4db286c. Existing control results remain evidence of that code's tested cases, not proof of a producer assumption now contradicted by the complete pipeline. The real-producer control at graphify-guard.test.mjs:2284 runs rebuild then export, not all intervening update/label/composition stages.

Evidence directory: C:/CoWork/outputs/lane-b-receipt4-review-2026-10-08/.

| Evidence file | SHA-256 |
|---|---|
| `independent-comparison.json` | `ed773cdb4119acfdf58da9168f31dcb166f583467f85e79ede8981c2dbf16476` |
| `independent-post-state.json` | `cf5107970a5899626a41c9544ea1831cdff54473cba4b2201b6e515ae5b71c25` |
| `producer-source.json` | `5b9766e305208757a4d8cfe71f77a6880208b4a7f2ff39015c241f90b954cb63` |
| `check-at-c37db75.log` | `e5dfe23b2b91bce26744af312d65e4124f3a9b502c5a34dcfec18b2c2e886e2c` |

### What you need

Parent first: SV-002/Gate 2, then B-154 consolidation, depend on B-050's still-incomplete prevention unit. Receipts 1-3 and their historical scopes remain recorded; this failed real repeat establishes a new contract/integration gap to reconcile before any whole-unit acceptance. Receipt 4 success is NOT delivered; receipt 5 and B-050/B-077/remaining O0/P15/DoD/residual/parent acts stay pending. The five previously verified GR-012/B-014/GR-013/B-021/B-155 items are unaffected. Existing B-050 (technical evidence), B-154 (sequence), B-077 (reconciliation) and SV-002 (clearance ledger) remain sufficient tracking; do not create a duplicate tracker.

Required correction plan, in dependency order:
1. Receive this failure review and preserve the first failed attempt unchanged. Normalize the worklog to seven findings in three explanatory groups; the ignored-count cause remains unknown. Successful stopping is a safety result, not receipt-4 success. With the unchanged R1 packet and contract, another repeat is certain to fail R1's already-invalid timestamp/window check, regardless of a new C2 result. No unchanged rerun is justified.
2. Present one bounded diagnostic proposal for the Judge. Use one bounded diagnostic experiment with at most two isolated generation arms, one seeded from preserved B0 and one from captured R1, each run once using the same frozen source in a fresh disposable folder. Record each actual producer call, begin/end times, before/after observation and Git-subgraph hashes, selection inputs/oracles, and the ignored-file identities at the detector's enumeration point. Report a non-reproduced count difference honestly; a current list does not recover the missing historical list. Pre/post ignored lists alone are not the detect-time list. Any diagnostic instrumentation/copy and changed argv/tool hashes must be named as diagnostic-only, never passed off as the unchanged pinned production run. No installed producer, canonical source, live state, original R1 packet or failed attempt is edited. No proveRepeat rerun, allowance change or acceptance follows from that diagnostic. Stop after one diagnostic report for independent review.
3. Before promising reuse of R1, resolve its missing historical observation window. Only the early rebuild bracket is present in its frozen packet, and it excludes the final observation. A new diagnostic cannot retrospectively prove the old final-stage bracket. Inventory existing retained evidence first. If that evidence cannot support the proposed amended binding, the Judge must explicitly select either a justified, bounded legacy-R1 verification rule or a fresh preparation/acceptance/release cycle. Never fabricate brackets, rewrite STATE.json/REPEAT.json, or silently waive per-run validation. A fresh-cycle selection must explicitly supersede the existing no-sync/no-publication order; it cannot run under the diagnostic go-ahead.
4. Draft the canonical amendment only after the diagnosis and R1 treatment are reviewable. It must cover the timestamp's actual writer/window, re-validation of selection/final Git subgraph after all extracting calls, and ignored-count semantics. Do not amend D-427's timestamp alone while leaving PR3b's final-state assurance gap. Prefer normalized identical inputs; allow an exact ignored-count leaf only if its meaning and validating ignored-set evidence justify it. Never ignore all scope or all manifest artifacts. Name the permitted verifier revision, how it interprets the old frozen source/packet, which receipts require renewed review, authorized implementation paths and propagation across Register/Build Spec/Inventory. No code or canonical amendment is applied by this review.
5. The future minimum valid control must exercise the FULL producer generation/composition sequence, including later updates, then comparison. Refusals must cover a late Git-membership change, a false last-writer/window binding, invalid/missing historical R1 evidence, an unexplained ignored-count change, wrong graph-entry binding and undeclared fields. The current rebuild-plus-export control is insufficient for this integration failure. Obtain source-bound independent readiness after an authorized fix; only then seek one newly authorized real repeat under the selected reference rule.
6. Complete a passing receipt 4 and independent receipt 5 before B-050 disposition, B-077 reconciliation and parent clearance. No passing general check or earlier fixture result replaces the missing repeat.

Timing precision: preflight/sv2-u02's frozen head is 2026-09-28T18:21:29Z. Its 30-day cutoff is 2026-10-28T18:21:29Z; the recorded 18:21 UTC deadline is a conservative minute. Finish all relevant extracting stages with margin before that boundary, not merely start a run before it (29 October around 02:21 Singapore time). At/after the relevant selection change the old oracle cannot simply be reused. This date does not authorize a rushed diagnostic, amendment or repeat.

Push precision: local origin tracking now points to d502848, consistent with the reported eight-commit push; I did not fetch or perform a fresh remote audit. The proposed c72895f..c37db75 range contains TWO commits because the left endpoint is excluded. To include the three named commits c72895f, 9984a90 and c37db75, the exact range is d502848..c37db75. This review commit and later receipts are outside that fixed endpoint. Any new push needs the Judge's exact-range act and D-385 proofs; no push authority is issued here.

Draft diagnostic go-ahead — not issued:
> Authorize Lane A to perform one diagnostic-only experiment with at most two isolated disposable generation arms, one seeded from preserved B0 and one from captured R1, each run once with the same reviewed frozen source and inputs, using a fresh named output folder and a declared diagnostic harness/instrumentation plan. Retain per-stage timing/provenance/Git-selection evidence and the actual detect-time ignored-file identities, alongside hashes and instrumentation differences. Do not run proveRepeat, publish, sync, recover destructively on the real target, change allowances or canonical code, edit historical packets, fetch or push. Preserve live R1 and the failed attempt unchanged. Stop for Lane B review of the diagnosis and the proposed treatment of historical R1 evidence. Any amendment, implementation or new repeat requires a later bounded Judge act.

Chief Editor consolidation: distinguish observed difference, supported producer behavior, unresolved cause, proposed policy and independent acceptance. Lane B raises/reviews; Lane A answers and proposes the fix; the Judge selects bounded execution and contract changes. No new Lane C finding/acceptance is supplied. This is tooling construction/verification assurance, not product acceptance. "D-427 is wrong" should read "the recorded initial-rebuild binding does not validate the final observation in the retained full pipeline; the replacement binding and legacy-R1 treatment are not yet decided."

### What you did instead

Read retained artifacts and pinned source, reproduced the comparison without generation, checked final Git merges and current live state, and drafted bounded fixes. No diagnostic generation, repeat rerun, implementation, canonical edit, graph sync/publication/recovery, fetch or push. No new acceptance record and no receipt-5 success.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | Preserved stopped outcome, unchanged live R1, healthy/current governed source and retained-sample final Git merge checks | Phase 1: independent failure review only |
| Approve-with-conditions | Diagnostic plan and amendment direction | Phase 1: Judge's bounded diagnostic act, exact writer/count evidence and explicit historical-R1 treatment |
| Defer | Diagnostic execution, canonical amendment/fix, new repeat, receipt 5, push and closure | Phase 1: respective selected authority and dependency evidence |
| Reject | Receipt-4 equality/whole-unit success, unchanged rerun, fabricated historical brackets, blanket allowances and the three-commit claim for c72895f..c37db75 | Phase 1: failed contract and exact-range semantics apply |

## Lane A — receipt-4 review received; diagnostic go-ahead and instrumentation plan, 2026-10-08

Read at `4d87b65`. Lane B's planning follow-up (worklog, 2026-10-08) is received with it.

### What happened

**Received:** Lane B independently reproduces all seven findings; receipt 4 stays **failed**, and the attempt is preserved
unchanged. Live R1 is unchanged; drift is clear (19/19). Receipts 1–3 stand within their recorded scopes. "Applied"
means implemented, not independently verified or closed.

**Corrections upheld:**

1. **Push range.** `c72895f..c37db75` contains two commits, because the left endpoint is excluded. The three named
   commits are `d502848..c37db75`. Pushing stays held (Judge, 2026-10-08).
2. **Overclaim.** Lane A's "D-427 is wrong" and "re-stamps every time it reads Git" are withdrawn. The supported
   wording: "the recorded initial-rebuild binding does not validate the final observation in the retained full
   pipeline; the replacement binding and legacy-R1 treatment are not yet decided."
3. **G4, R1's interval.** The final observation 08:09:31.368Z lies inside 08:03:51.110Z (initial rebuild-call start)
   to 08:17:07.284Z (`frozenAt`, a clock sample at composition entry, not proof of composition completion). That interval
   is accepted as **retained evidence only**. It does not identify or bracket the final timestamp-writing call, and it
   does not satisfy D-427's rebuild-bracket binding. It may support a narrowly defined legacy-R1 proposal, subject to
   independent review and an explicit amendment.
4. **Selection.** A new preparation does not reset frozen commits' ages; selection is recalculated from the actual
   frozen references and extraction times. The recorded boundary is 2026-10-28T18:21:29Z; relevant extracting stages
   must finish before it, with margin.

An unchanged repeat against the existing R1 packet under the current rule will fail R1's window check, whatever C2 does.
No such certainty exists for the unexplained ignored count.

### What you need

**Authority: the Judge, directly to Lane A, 2026-10-08**, in chat: "yes commit the receipt and issue the diagnostic
go-ahead", issuing Lane B's draft from `4d87b65` in full:

> "Authorize Lane A to perform one diagnostic-only experiment with at most two isolated disposable generation arms, one
> seeded from preserved B0 and one from captured R1, each run once with the same reviewed frozen source and inputs,
> using a fresh named output folder and a declared diagnostic harness/instrumentation plan. Retain per-stage
> timing/provenance/Git-selection evidence and the actual detect-time ignored-file identities, alongside hashes and
> instrumentation differences. Do not run proveRepeat, publish, sync, recover destructively on the real target, change
> allowances or canonical code, edit historical packets, fetch or push. Preserve live R1 and the failed attempt
> unchanged. Stop for Lane B review of the diagnosis and the proposed treatment of historical R1 evidence. Any amendment,
> implementation or new repeat requires a later bounded Judge act."

**Declared harness and instrumentation plan** (folder `C:/CoWork/outputs/lane-a-d426-diagnostic-2026-10-08`; harness
`diagnose.mjs` there, retained with its hash):

1. **Seeds, copied, never edited in place.** Arm `b0`: a copy of R1's run baseline
   (`lane-a-d426-receipt2b-2026-10-08/work/attempt-2/baseline`), whose manifest must equal B0 `81d16154…`. Arm `r1`: a
   copy of the failed repeat's captured baseline (`lane-a-d426-receipt4-2026-10-08/repeat/attempt/baseline`), which
   must equal R1 `c104ec0f…`. A mismatch stops that arm before generation.
2. **Inputs.** Each arm runs the guard's unmodified `generateCandidate` once, with R1's frozen packet: snapshot
   `11f2e40`, frozen executable bindings, the pinned CLI, and R1's answers file (`attempt-2/ANSWERS.json`, hash
   `c4220617…`). Nothing outside the arm folder is written. No `proveRepeat`, compose, publish, sync or recovery; the
   live target is only read.
3. **The one instrumentation difference.** The `tool` argument is a wrapper around the guard's own `runGraphify` that
   changes no arguments. Around each Graphify child call it records the stage arguments, the start and end clock, and
   the following before and after the call: the working graph's `graph.provenance.observed_at`; a digest of its Git
   subgraph (`gitSubgraph`); the producer's `scope.json` counts; and the individual ignored files Git reports in that
   checkout (`ls-files --others --ignored --exclude-standard`). Git's ignored list is the closest available proxy for
   detect-time identities and is labelled as such.
4. **Final analysis, read-only.** Each arm's final Git subgraph is checked against the merge of its seed and its fresh
   extraction (the proposed final-state check); its final observation is located against every recorded stage window.
   The two arms are compared stage by stage.
5. **Limits.** A newly captured ignored list cannot reconstruct R1's missing historical list. Clock samples bracket
   calls; they do not prove which internal step wrote a value.

### What you did instead

The failed attempt, live R1 and all earlier packets stay unchanged. No push. Lane A runs the two arms once each, then
stops for Lane B's review of the diagnosis and of the historical-R1 treatment. B-050 stays Applied; its O1 row stays
open.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | Lane B's review and its four corrections | Phase 1: received |
| Approve-with-conditions | Diagnostic under the declared plan | Phase 1: two arms, each once; then Lane B's review |
| Defer | Amendment, implementation, new repeat, receipt 5, closure, push | Phase 1: later bounded Judge acts |
| Reject | The R1 interval as current D-427 compliance; an unchanged rerun; fabricated windows; blanket allowances | Phase 1 |

## Lane A — receipt-4 diagnostic result: two arms, each once, 2026-10-08

Read at `1ab92e1`. Under the go-ahead and declared plan above. Folder `C:/CoWork/outputs/lane-a-d426-diagnostic-2026-10-08`;
harness `diagnose.mjs` (SHA-256 `f6a83a87…`), run 11:20:58–11:47:26 UTC. Live R1 and the failed attempt are unchanged;
no journal, lock or recovery token; no repeat, compose, publish, sync, fetch or push.

### What happened

Both seed copies matched (arm `b0`: `81d16154…`; arm `r1`: `c104ec0f…`). Each arm ran the guard's unmodified
`generateCandidate` once with R1's frozen packet and reached **generated**, with 7 Graphify child calls each.

**Finding D1: which calls write the observation.** Recorded before and after every call:

| Call | `observed_at` | Git subgraph |
|---|---|---|
| 1 `hook-rebuild` (checkout) | rewritten | changed in `b0`; unchanged in `r1` (its seed already held it) |
| 2 `hook-rebuild` (fresh clone) | written | written |
| 3 `update --fill-missing` | **rewritten** | unchanged |
| 4 `update` | **rewritten: the final value**, inside this call's own clock window in both arms (`b0` 11:25:17–11:26:33, value 11:26:30.601Z; `r1` 11:39:06–11:40:06, value 11:40:03.250Z) | unchanged |
| 5–6 `label`, 7 `studio export` | not changed | not changed |

So the final observation is written by the `update` call, not by the bracketed rebuild. This matches R1 and C2 (each
about 4 minutes after its rebuild). Limit: clock samples bracket calls; they do not show which internal step wrote it.

**Finding D2: final Git assurance.** Only the two `hook-rebuild` calls changed the Git subgraph. Each arm's final Git
subgraph passes the merge check against its seed and its fresh extraction (0 findings). This answers Lane B's question
for these two runs only; it does not replace a guard check.

**Finding D3: the ignored count 696 vs 695 is explained.** The producer's `excluded_ignored_count` after each call equals
the number of ignored files Git lists in the checkout just before that call (583, 645, then 696 or 695), so the proxy
matched exactly here. The one-file difference is `.graphify/label-instructions/communities.md`. In arm `b0`,
`update --fill-missing` (call 3) writes it, because B0's community names do not bind the current member sets. The final
`update` counts it (696) and then removes it. In arm `r1`, whose seed already carries the bound names, it is never
written (695). This reproduces both receipt-4 values: R1 was seeded from B0 (696) and C2 from R1 (695). The count is a
seed-dependent producer transient, not a source difference.

**Not established.** The final graphs of the two arms differ (`38694489…` vs `e603c4dc…`), as expected from different
seeds; this diagnostic did not compare them field by field. R1's own historical ignored list and final-call window were
never recorded; this run cannot reconstruct them.

| Evidence file | SHA-256 |
|---|---|
| `diagnose.mjs` | `f6a83a87d827cfaaadac4d200221db31e1d8db099a6420f6da2f94ee68cbbdca` |
| `01-diagnostic-summary.json` | `0eae5cc9d927dc2d2477cb8e3de9d8ead2241ae4469c08f8f0b698adccf1cf6e` |
| `diagnose.log` | `0f5c4541e3b5ed8937f83d955f986422a5047d05408bc0653d0442cf36ec94a1` |
| `b0/evidence.json` | `e01d19cfa1eb9dd89beece3f5d90be877c73032366c02673c92fe85caad6416b` |
| `r1/evidence.json` | `af0d4fa8b9080817dd085af7e73fa28ad56ae54e04922046b6b85646233d475a` |
| `b0/ignored-lists/04-checkout-before.txt` | `fc8103221c4dab7185887b790ce1104a9c5d8fd20a8509b0f304788f280401d9` |
| `r1/ignored-lists/04-checkout-before.txt` | `beb6484ff04d256ea5532ddde91b9083de26b1141dba5d0697ff1adf593c5d86` |

### What you need

**Lane B:** an independent review of D1–D3 and their limits.

**Amendment direction (drafted for review, not decided):**

1. **Observation:** bracket the final `update` call and require the final `observed_at` inside that call's own
   window. Keep the rebuild bracket for selection only.
2. **Final Git check:** after the last extracting call (and at final output), check the final Git subgraph against the
   seed-plus-fresh merge; refuse late changes.
3. **Ignored count:** treat `excluded_ignored_count` (and its copy in `.graphify_detect.json`) as dependent on the seed's
   label state. Either normalize it by its known transient or allow it only when the transient explains the
   difference. No blanket allowance.
4. **Historical R1:** R1 has no recorded final-`update` window. The choice is an explicit legacy rule (for example the
   retained interval, as Lane B bounded it) or a fresh release cycle with the amended guard. Judge's decision.
5. **Controls:** a full-pipeline valid control and targeted refusals for points 1–3.

### What you did instead

Stopped after the two arms, as the go-ahead requires. No amendment, code change or new repeat. B-050 stays Applied;
its O1 row stays open.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | D1–D3 as recorded, with their limits | Phase 1: Lane B's independent review |
| Approve-with-conditions | Amendment direction 1–5 | Phase 1: Lane B review, then the Judge's bounded act |
| Defer | Historical-R1 choice, implementation, new repeat, receipt 5, closure, push | Phase 1: later acts |
| Reject | Treating a diagnostic arm as a repeat; an allowance without the transient's explanation | Phase 1: `D-426` item 5 |

## Lane A — diagnostic reviews received; Option B selected; draft `D-429` for Lane B, 2026-10-08

Read at `c0bf6fb`. Two Lane B reviews were delivered in chat (worklogs, 2026-10-08): the diagnostic review and the
contract review. This section records both.

### What happened

**Received:** all seven evidence hashes match; the two-arm observations are accepted within their limits. Corrected
wording (each upheld; Lane A re-checked D3 against the retained lists):

- **D1:** the final `observed_at` was written during call 4 (`update`), inside its recorded window, **observed in these
  two arms**. This does not reconstruct R1's missing final-call window.
- **D2:** the Git-subgraph fingerprint changed in arm `b0` during calls 1 and 2 and in arm `r1` during call 2 only. Later
  `update` calls left it unchanged. That shows they did not change the Git result. It does not show whether they ran an
  extraction.
- **D3 (Lane B's wording):** "In both diagnostic arms, calls 1–4 produced ignored counts matching their pre-call
  Git-list proxies. Before the final update, both arms had equal AST-cache cardinality; the sole non-cache path
  difference was `communities.md`, accounting for the net count difference of one. This supports the transient-file
  explanation for these arms. It does not recover the historical detector lists or establish a general allowance."
  Lane A's earlier "the one-file difference" and "equals … after each call" are withdrawn: the lists differ by 56 and
  55 paths (mostly differently named AST-cache files), and calls 5–7 keep the earlier count.
- **Final graph hashes** (`38694489…`, `e603c4dc…`): not compared field by field; no claim about the cause.

**Judge's selection, 2026-10-08**, in chat: "yes commit both, option B, draft D-429 for Lane B". **Option B, a fresh
release cycle.** Rationale in Lane B's wording: it "avoids reliance on the missing historical records, provided the
amended controls capture and validate the required evidence". Option A (a narrow legacy exception covering both R1's
missing final-writer window and its missing ignored-file identities) is not selected. An unchanged repeat under the
current R1 packet and D-427 still must fail R1's window check.

### What you need

**Lane B: review this draft `D-429`.** `D-429` is confirmed unused in the Register at `c0bf6fb`. It is **unissued**: no
Register, Build Spec, Inventory or code change follows until the Judge issues it.

> **Draft `D-429` — B-050 amendment to D-426/D-427: final-writer observation, per-call selection, final Git state,
> exact ignored-count transient; fresh release cycle (Option B).**
>
> 1. **Observation (A1).** The guard brackets every Graphify child call and records each call's arguments, start and end,
>    and its before/after `graph.provenance.observed_at` in the frozen packet. The final value must lie inside the
>    bracket of the **final `update` call**, and no later call may change it. Retained unchanged: the valid
>    calendar-instant check (D427-R2), complete per-run bundles (D427-R1), C2 strictly later than R1, studio graph equal
>    to the root graph by content, and exactly one manifest `graph` entry binding that run's own studio-graph bytes.
>    The repeat masks only the validated observation leaf.
> 2. **Selection (A2).** Conservative: the branch-selection oracle is computed at both ends of **every** Graphify child
>    call, not only the calls believed to extract, and every result must equal the rebuild's oracle. A crossed cutoff in
>    any call refuses. The implementation also inventories, from the pinned producer, which commands run a Git
>    extraction, for Lane B's review; the conservative rule does not depend on that list being complete.
> 3. **Final Git state (A3).** After the last Graphify child call, and again on the final output before composition,
>    the Git subgraph must equal the producer merge of the seed and the fresh extraction (`gitMergeFindings`, zero
>    findings). Any late change refuses.
> 4. **Ignored count (A4), exact and narrow.** Only the two leaves `scope.json` `excluded_ignored_count` and
>    `.graphify_detect.json` `scope.excluded_ignored_count` may differ, and only by an amount fully accounted for by
>    the single path `.graphify/label-instructions/communities.md`. That path must be present in exactly one run's
>    recorded pre-final-`update` ignored list, written by that run's `update --fill-missing` (recorded after that call),
>    and absent from the other's. The guard records each call's pre-call ignored list; for calls that rewrite the scope
>    count it requires the producer's count to equal that list's length. **AST-cache entries** (`.graphify/cache/ast/`)
>    must have equal cardinality in both runs; their content-addressed names may differ. Any other non-cache path
>    difference, a cardinality difference, or an unaccounted count difference refuses. No wildcard class.
> 5. **Paths and recording (A5).** Implementation: only `scripts/graphify/guarded-rebuild.mjs` and
>    `scripts/fixtures/graphify-guard.test.mjs`. Canonical recording, separate: Register, `V1-BUILD-SPEC.md` and
>    `V1-ARTIFACT-INVENTORY.md` (`D-54`). D-426's limits stand (P7 fixture-only recovery, P8 flake stop, no new live
>    target, no fallback).
> 6. **Controls.** A real full-pipeline **generation and composition** valid control, plus targeted refusals: an
>    observation outside the final-`update` bracket or changed afterwards; a crossed cutoff in a later call; a late Git
>    change; an unaccounted ignored-count difference; a non-cache path difference; an AST-cache cardinality
>    difference; an invalid manifest binding; an undeclared difference.
> 7. **Fresh release cycle (Option B).** In order: implementation → renewed receipt 1 (source-bound readiness of the
>    amended guard) → new candidate preparation → receipt 2 → guarded release of a new R1 and health (receipt 3) →
>    repeat against the new R1 (receipt 4) → receipt 5 → B-050 disposition → B-077. Receipts 1–3 already accepted keep
>    their recorded scopes; the earlier R1 is retained as history.
> 8. **Selection timing.** The branch selection must be stable and validated across the new R1's extraction windows and
>    the repeat's, recalculated from the actual frozen references and extraction times. A new preparation does not
>    reset frozen commits' ages; the recorded `preflight/sv2-u02` boundary (2026-10-28T18:21:29Z) is one known
>    selection change to plan around.
> 9. **Not decided here:** B-050's disposition, B-077's review, any DoD box, tracker or clearance change; any push.

### What you did instead

Nothing implemented, issued or pushed. The diagnostic folders, the failed attempt and live R1 are unchanged. B-050
stays Applied; its O1 row stays open.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | Corrected D1–D3 wording; Option B selected | Phase 1: recorded |
| Approve-with-conditions | Draft `D-429` | Phase 1: Lane B's review, then the Judge issues it |
| Defer | Issuing `D-429`, implementation, renewed receipts, new cycle, receipt 5, closure, push | Phase 1: in order |
| Reject | A wildcard ignored-count class; inferred evidence presented as historical records; an unchanged rerun | Phase 1 |

## Lane A — draft `D-429` revised (A3, A4, controls); Lane B confirms; consolidated text, 2026-10-08

Read at `da5cbc8`. Two Lane B reviews were delivered in chat (worklogs, 2026-10-08): the contract review, which raised
three gaps (A3 stopped before composition; A4 did not allow equal counts; A4's proxy and accounting were implicit), and
the **confirmation**: "the revised A3, A4 and controls resolve the three requested planning corrections. The proposal
is ready for Judge selection", with two details to make explicit (a before/after origin for the transient; both
count copies agreeing with the validated per-run count). Both details are in the text below. The earlier draft
(`d399c8f`) is kept as history; this section supersedes it for issuance.

**Judge, 2026-10-08**, in chat: "yes commit the revision and issue D-429 after Lane B confirms". Lane B has confirmed;
issuance is recorded in the Register in its own canonical commit, with this text applied in full.

### Consolidated `D-429` text

> **`D-429` — B-050 amendment to D-426/D-427: final-writer observation, per-call selection, final-state checks, exact
> ignored-count transient; fresh release cycle (Option B).**
>
> 1. **Observation (A1).** The guard brackets every Graphify child call and records each call's arguments, start and
>    end, and its before/after `graph.provenance.observed_at` in the frozen packet. The final value must lie inside the
>    bracket of the **final `update` call**, and no later call may change it. Retained unchanged: the valid
>    calendar-instant check (D427-R2), complete per-run bundles (D427-R1), C2 strictly later than R1, the studio graph
>    equal to the root graph by content, and exactly one manifest `graph` entry binding that run's own studio-graph
>    bytes. The repeat masks only the validated observation leaf.
> 2. **Selection (A2).** Conservative: the branch-selection oracle is computed at both ends of **every** Graphify child
>    call, and every result must equal the rebuild's oracle. A crossed cutoff in any call refuses. The implementation
>    also inventories, from the pinned producer, which commands run a Git extraction, for Lane B's review; the rule does
>    not depend on that list being complete.
> 3. **Final state (A3).** The Git subgraph must equal the producer merge of the seed and the fresh extraction
>    (`gitMergeFindings`, zero findings), checked **twice**: after the last Graphify child call, and **on the composed
>    staging candidate before its manifest is frozen**. At the second point the guard also re-checks the final
>    observation (A1) and the root-graph, studio-graph and manifest bindings. A valid generation alone does not
>    establish that the final candidate is correct. Any difference refuses.
> 4. **Ignored count (A4).** For each Graphify child call the guard records a **pre-call Git proxy** list of ignored
>    files (`ls-files --others --ignored --exclude-standard`), bound to its run and call, with its hash retained. For
>    each call that rewrites the scope count, the producer's reported count must equal that list's length. Each run's
>    **validated count** is its pre-final-`update` list length; both copies (`scope.json` `excluded_ignored_count` and
>    `.graphify_detect.json` `scope.excluded_ignored_count`) must equal it.
>    - **Equal counts across runs:** no transient allowance is applied and `communities.md` is not required. Equal
>      counts do not waive missing evidence or any other check.
>    - **Unequal counts:** each run's transient indicator is 1 when `.graphify/label-instructions/communities.md` is
>      present in its pre-final-`update` list **and** that run's `update --fill-missing` wrote it, shown by its absence
>      from that call's pre-call list and presence in its post-call list. Presence alone is insufficient. Otherwise the
>      indicator is 0. The count difference must equal the difference between the indicators; the remaining non-cache
>      paths must agree; AST-cache (`.graphify/cache/ast/`) cardinalities must agree. Missing list evidence or any
>      unexplained remainder refuses.
>    - Equal cache cardinality explains the arithmetic only. It does not prove identical cache contents or recover
>      historical detector identities; differing cache filenames stay subject to the existing source and input bindings.
> 5. **Paths and recording (A5).** Implementation: only `scripts/graphify/guarded-rebuild.mjs` and
>    `scripts/fixtures/graphify-guard.test.mjs`. Canonical recording, separate: the Register, `V1-BUILD-SPEC.md` and
>    `V1-ARTIFACT-INVENTORY.md` (`D-54`). D-426's limits stand (P7 fixture-only recovery, P8 flake stop, no new live
>    target, no fallback).
> 6. **Controls.** A real full-pipeline **generation and composition** valid control. Retained refusals: timestamp,
>    selection, Git, manifest and undeclared-difference. Added cases: an observation outside the final-`update` bracket
>    or changed afterwards (refuse); a crossed cutoff in a later call (refuse); a late Git change (refuse); equal counts
>    with no transient (valid); the one-file difference in each direction, written by `fill-missing` (valid); the
>    transient present without before/after origin (refuse); missing proxy-list evidence (refuse); a count copy that
>    disagrees with the validated count (refuse); an unexplained count change (refuse); a non-cache path difference
>    (refuse); an AST-cache cardinality difference (refuse); corruption introduced during composition (refuse at the A3
>    staging check).
> 7. **Fresh release cycle (Option B, Judge-selected).** In order: implementation → renewed receipt 1 (source-bound
>    readiness of the amended guard) → new candidate preparation → receipt 2 → guarded release of a new R1 and separate
>    health (receipt 3) → repeat against the new R1 (receipt 4) → receipt 5 → B-050 disposition → B-077. Receipts 1–3
>    already accepted keep their recorded scopes; the earlier R1 and the failed receipt 4 are retained as history.
> 8. **Selection timing.** The branch selection must be stable and validated across the new R1's extraction windows and
>    the repeat's, recalculated from the actual frozen references and extraction times. A new preparation does not reset
>    frozen commits' ages; the recorded `preflight/sv2-u02` boundary (2026-10-28T18:21:29Z) is one known selection
>    change to plan around.
> 9. **Not decided here:** B-050's disposition, B-077's review, any DoD box, tracker or clearance change; any push.

B-050 stays Applied; its O1 row stays open. Recording and implementation follow in their own commits; implementation
waits for the Judge's go-ahead after recording.

## Lane A — D-429 implemented; renewed receipt-1 request at `0540fb6`, 2026-10-08

Read at `0540fb6`. **Authority:** `D-429` issued at `b64c82e`; the Judge, 2026-10-08, in chat: "yes, go ahead and
implement D-429". Evidence folder: `C:/CoWork/outputs/lane-a-d429-receipt1-2026-10-08/at-0540fb6` (clean tree at
`0540fb6`; Bun 1.1.30, Node v24.18.0, Git 2.54.0).

### What happened

**Implementation, `0540fb6`, on the two authorized paths only** (`scripts/graphify/guarded-rebuild.mjs`,
`scripts/fixtures/graphify-guard.test.mjs`):

| Clause | Implemented |
|---|---|
| A1 | `generateCandidate` brackets and records every Graphify child call (arguments, start, end, before/after observation). After the last call, `observationCallFindings` requires the final observation to be the final `update` call's value, inside its bracket, unchanged by every later call. The packet keeps `brackets.finalUpdate`, `finalObservedAt` and the call records. `provenanceFindings` now checks against the final-update bracket |
| A2 | Every later checkout call reads the selection inputs before and after it; `callSelectionFindings` requires the oracle at both ends to equal the rebuild's |
| A3 | After the last call, the final Git subgraph must be the seed-plus-fresh merge. `verifyStaging` repeats the check on the composed staging candidate, with the final observation and the root/studio/manifest bindings, in `attempt` and in `proveRepeat`; `attempt` then re-derives the manifest from the staging bytes and fails on any change |
| A4 | Each call records pre/post Git proxies of the ignored files (`work/ignored/`, hashed); `scopeCountFinding` requires a rewritten scope to report its own pre-call proxy. `ignoredPacket` derives the validated count, AST-cache cardinality, non-cache paths and the transient indicator (written by `update --fill-missing`: absent before, present after). `ignoredCountFindings` requires both count copies to equal the validated count. `ignoredAllowance` and `repeatComparison` mask the two count leaves only under the exact rule |
| Option B | `proveRepeat` refuses a first run whose packet lacks the D-429 evidence before any generation |

**Source-bound evidence at `0540fb6`:**

| Evidence | Result |
|---|---|
| Full guard suite (`guard-suite-full.log`) | **260 pass, 0 fail, 1,010 `expect()`, exit 0**, 874 s. SHA-256 `59f03cf7529f135f2ac21719e0a0b986e90b72c5e3b88e268a9484cf70556af5` |
| Real full-pipeline valid control (`control.mjs`, `control/pass-2/control-result.json`) | **valid.** The real pinned producer at `0540fb6`, seeded from a copy of R1 (`c104ec0f…`; no live access): all 7 calls; final observation 13:47:24.241Z inside the final `update` bracket 13:46:22.008–13:47:27.596Z; validated ignored count 697, transient 0; then `composeCandidate` and `verifyStaging` with **0 findings**; manifest `7e840867…` stable after the check, 583 files. Pass 1 stopped at pending semantics; pass 2 used `control/control-answers.json` (SHA-256 `5dc85322…`: 176 descriptions kept from R1 because their code is unchanged since `11f2e40`, 17 written from full current bodies, 19 names from their members, none clashing) |
| Mutations (`mutation-harness.mjs`, `mutations/summary.json`) | **49/49 caught**, one run, every file restored, tree clean afterwards: the 33 earlier rows plus 16 D-429 rows (A1 ×2, A2 ×2, A3 ×3, A4 ×8, Option B). Summary SHA-256 `6f118cef…`; harness `c87fb5e5…` |

**Run 1 of the harness crashed, and is kept** (`mutations-run1-crashed/`). At row 35 (`d429-a1-after`), Windows refused the
restore write (`EUNKNOWN`, errno -134) and left the guard file mutated in the working tree. Lane A restored it with
`git checkout --`, checked that its hash equals the committed blob, and confirmed a clean tree; nothing mutated was
committed. The harness now retries the restore with a back-off, stops loudly if it still fails, and writes a partial
summary after every row. Run 2 above is the complete run.

| Evidence file | SHA-256 |
|---|---|
| `control.mjs` | `08b53b881bb2ae60681a03fa3633d92d10f9f66d8595ddd02b0e2b3b1d02b916` |
| `control/pass-2/control-result.json` | `f9e413ea570ae6cfa8a138c9304c4a477c319104d0906ed2678b477ef7883b67` |
| `control/control-answers.json` | `5dc85322166a3b7d2dc88db1a4045042626b17243593c2ec1442c267416b8183` |
| `mutation-run.txt` | `1233f76067aa11d33b181b4a713aecebd734765fdd66255ab5b8b04e70f58459` |

### What you need

**Lane B: the renewed receipt 1**, an independent source-bound readiness review of `0540fb6` against `D-429`. Points for
the review:

1. **Known limit:** the A1 and A2 *wiring* inside `generateCandidate` is not reachable by any fixture test, because the
   fake generations stop before the later calls. The helpers are unit-tested and mutation-checked; the wiring is
   exercised only by the real control's valid path. A refusal through the real wiring is not demonstrated.
2. **A2 producer inventory:** in the diagnostic and in this control, `observed_at` was rewritten by both `hook-rebuild`
   calls, `update --fill-missing` and `update`, and not by `label` or `studio export`. The rule checks every call, so
   it does not depend on this list.
3. **R1 here** shows count 697 with transient 0 (seed R1; its names bind), unlike the diagnostic's 695: the repository
   gained ignored files since. No cross-run claim follows from one run.

### What you did instead

No candidate prepared, nothing published or pushed. The control's answers are reusable for the new candidate only if
the source is unchanged. Next, after Lane B's receipt 1: new candidate preparation (receipt 2), under the cycle order in
`D-429` item 7. B-050 stays Applied; its O1 row stays open.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | Implementation on two paths; suite 260/0; real control valid; mutations 49/49 | Phase 1: Lane A's evidence |
| Approve-with-conditions | Renewed receipt 1 | Phase 1: Lane B's independent review, including the wiring limit |
| Defer | New candidate (receipt 2), new R1 and health, repeat, receipt 5, closure, push | Phase 1: `D-429` item 7 order |
| Reject | The control or the suite treated as receipt 1; the crashed run hidden | Phase 1 |

## Lane A — renewed receipt 1 not accepted at `0540fb6`; G1–G3 received, 2026-10-08

Read at `0f07ffd`. Lane B's readiness review was delivered in chat (worklog, 2026-10-08): **renewed receipt 1 is not
accepted at `0540fb6`.** Lane B accepts the evidence integrity (seven hashes match), the bounded positive control, and
the openly kept crash history; the mutation result reads "49/49 in the completed second run".

| Finding (Lane B) | Lane A |
|---|---|
| **G1:** `scopeCountFinding` checks the per-call proxy list only after detecting a scope rewrite, so a missing list with an unchanged scope returns no finding | **Upheld, reproduced:** the helper returns `null` for a missing list and an unchanged scope. Fix: the proxy lists are required for every Graphify child call, independently of the scope |
| **G2:** the A1/A2 refusal wiring inside generation is not demonstrated | **Upheld** (Lane A's own stated limit). Fix: fixture generation reaches the final checks, with generation-level refusal cases and wiring mutations |
| **G3:** the producer inventory relies on observed runs, not the pinned source | **Upheld.** Fix: source references in the pinned `cli.js`, keeping "runs a Git extraction" separate from "output changed in the observed runs" |

**Judge, 2026-10-08**, in chat: "yes record both, go ahead with G1–G3 fixes", within D-429's existing scope (the two
guard paths). The corrected source will supersede `0540fb6` as the readiness candidate, with a fresh suite, real
control and mutation run. Drift stays expected (five governed paths since `11f2e40`); no sync to bypass readiness.
B-050 stays Applied; its O1 row stays open.

## Lane A — G1–G3 corrected; renewed receipt-1 request at `d4d1181` (supersedes `0540fb6`), 2026-10-09

Read at `d4d1181`. Under the Judge's "go ahead with G1–G3 fixes" (recorded at `c605502`). **`d4d1181` supersedes
`0540fb6` as the readiness candidate.** Evidence folder: `C:/CoWork/outputs/lane-a-d429-receipt1-2026-10-08/at-d4d1181`
(clean tree at `d4d1181`; Bun 1.1.30, Node v24.18.0, Git 2.54.0).

### What happened

| Finding | Correction at `d4d1181` (the two D-429 paths only) |
|---|---|
| **G1** | `proxyFinding` requires both the pre-call and post-call Git proxy lists for **every** Graphify child call, whether or not the scope was rewritten; it is checked for every checkout call and for the fresh extraction, before the selection and count checks |
| **G2** | `generateCandidate` takes an injectable `validate` (default `validateStudio`), exactly as `tool` is injectable, so fixture generation reaches the final checks. New test block "D-429 G1/G2: refusals through generateCandidate's wiring": a fixture repository with stub `restore-docs-layer.js` and `prune-stale-symbols.js` and `.graphify/` ignored; a fake producer that stamps the observation during `hook-rebuild` and `update` and has `update` write both count copies from its own pre-call list. Through the real wiring: a **valid control** reaches all seven calls and returns the D-429 packet; **refusals** for an observation outside the final update's bracket and one changed by a later `label` call (A1), a later call's selection crossing the cutoff (`fill-missing`, A2), a later call without its post-call proxy (`label-emit`, G1), a late Git change (A3) and a disagreeing count copy (A4) |
| **G3** | **Pinned producer source inventory** (`cli.js`, SHA-256 `9b119afe688f5fcc61962760d1f5702536bca4bc8017215cd653852a7de84f07`, equal to `TOOL_PINS`; line numbers in that file): `detectGitWindow` (L11821) builds the Git provenance with `observed_at` set to the current time; `detect` (L78880) calls `detectGitWindow`; `rebuildCode` (L98418) calls `detect`. **Commands:** `hook-rebuild` (L107690) calls `detect(` directly and `rebuildCode` (imported as `rebuildCode2`, L107691) → **runs a Git extraction**; `update`, with or without `--fill-missing` (L106461), calls `rebuildCode` (as `rebuildCode2`, L106466) → **runs a Git extraction**; `label` (L106614) awaits `generateCommunityLabels2` and `emitDefaultStaticStudio`, with no `detect`/`rebuildCode` call found at that level; `studio` (L107116) awaits nothing. **Observed separately** (diagnostic and both controls): the observation changed during the two `hook-rebuild` calls, `update --fill-missing` and `update`, never during `label` or `studio export`. **Limit:** the `label`/`studio` paths were traced one level deep, not transitively; A2 checks every call, so it does not depend on this list |

### Source-bound evidence at `d4d1181`

| Evidence | Result |
|---|---|
| Full guard suite | **266 pass, 0 fail, 1,035 `expect()`, exit 0**, 1,038 s. `guard-suite-full.log` SHA-256 `c10b1232d1ccaabd50c9372e81648a3e0de3f024a859967dc167eb88c91d4ead` |
| Mutations | **55/55 caught in one complete run**, every file restored, tree clean afterwards: the 49 earlier rows plus 6 G1/G2 rows (the G1 helper, and the G1, A1, A2, A3 and A4 wiring inside `generateCandidate`, each caught by the generation-level tests). `mutations/summary.json` SHA-256 `c7d5683c286f86f044cabbe0fb2c703c8ad9ea08d137ad6fed2dd0d4c5a1921a`; harness `84a7cd52…` (the hardened restore) |
| Real full-pipeline valid control | **valid**: the real pinned producer at `d4d1181`, seeded from a copy of R1 (`c104ec0f…`; no live access), all 7 calls; final observation 16:38:01.610Z inside the final `update` bracket 16:36:05.054–16:38:08.073Z; validated ignored count 698, **transient 1 with a real before/after origin** (the R1 names no longer bound the re-clustered groups, so `fill-missing` wrote `communities.md`); `composeCandidate` and `verifyStaging` with **0 findings**; manifest `f4b7f32b…` stable after the check, 583 files. Answers `control/control-answers.json` SHA-256 `8f083673…` (176 kept from R1, code unchanged since `11f2e40`; 18 written from full bodies; 20 names, none clashing). Result SHA-256 `aea5159045302c056e56d965c4267c2b7df26eba0867c1fdb0d8aac761523ab4` |

### What you need

**Lane B: the renewed receipt 1 at `d4d1181`.** Remaining stated limits: the producer inventory traces `label` and
`studio` one level deep; the generation-level tests use a fake producer and an injected studio validator (the real
producer and validator run only in the control's valid path). One real run shows a transient of 1 and the earlier one
showed 0; no cross-run claim follows.

### What you did instead

No candidate prepared, nothing published, synced or pushed. The control answers are reusable for the new candidate
only after validation against its actual source and member sets. B-050 stays Applied; its O1 row stays open.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | G1–G3 corrected at `d4d1181`; suite 266/0; 55/55 mutations; real control valid | Phase 1: Lane A's evidence |
| Approve-with-conditions | Renewed receipt 1 at `d4d1181` | Phase 1: Lane B's independent review |
| Defer | New candidate → receipts 2–5 → closure; push | Phase 1: `D-429` item 7 |
| Reject | `0540fb6` as the readiness candidate; the fakes treated as a real-producer refusal proof | Phase 1 |

## Lane A — renewed receipt 1 accepted at `d4d1181`; candidate go-ahead received, 2026-10-09

Read at `7bba9e2`. Lane B's readiness review was delivered in chat (worklog, 2026-10-09): **Lane B accepts the G1–G3
corrections and renewed receipt-1 readiness at `d4d1181`, within the reviewed scope.** The refusal at `0540fb6` stays
history.

| Finding | Correction Lane B verified |
|---|---|
| **G1** | Both pre-call and post-call proxy lists are mandatory independently of scope changes; the read-only helper checks refuse either missing list |
| **G2** | Tests reach generation's checks; retained evidence shows failures for timestamp, selection, proxy, Git and count-copy defects, and mutations removing that wiring are caught |
| **G3** | Pinned source references keep Git extraction separate from observed output changes; the one-level `label`/`studio` tracing is disclosed, and the selection checks cover every call |

Lane B matched the inspected hashes to the retained 266-pass suite, the 55-caught mutation summary, the control result
and the semantic answers. Its independent read-only check of the retained composed candidate found 0 staging findings
and a matching manifest digest, all 14 proxy files present, validated ignored count 698, and the transient absent
before `fill-missing`, present afterwards and before the final `update`.

**Limit (Lane B's own):** its local fixture rerun could not start (Bun filesystem errors). The acceptance rests on
source review, inspected retained test evidence and independent read-only artifact checks; it is not a newly
reproduced suite pass.

**Judge, 2026-10-09**, in chat: "yes record receipt 1, defer the freeze note. Authorize Lane A to record Lane B's
renewed receipt-1 acceptance at d4d1181 in B-050, then update B-154 in a separate one-path commit. Keep the optional
SKILL §7 freeze-note edit deferred for this cycle. Then prepare one guarded candidate from the actual authorized HEAD
containing d4d1181, validate its semantic answers and preserve fragments. Retain its source, baseline, manifest and
check evidence, and stop for Lane B's receipt-2 review. Publication, repeat, push and closure require their applicable
authority."

This go-ahead sits inside `D-429` item 7 (new candidate preparation); no new Register act, so the source stays
handoff-only. Next: one guarded `prepare` from the HEAD that contains this receipt, with the control answers reused
only where validated against the actual source and member sets; then Lane B's receipt 2. The `preflight/sv2-u02`
selection boundary (2026-10-28T18:21:29Z) still applies to receipts 2–4. No publish, repeat or push follows from this
receipt. B-050 stays Applied; its O1 row stays open.

## Lane A — D-429 receipt-2 request: candidate `3a634096` ready at `90de7fb`, 2026-10-09

Under the Judge's 2026-10-09 go-ahead (recorded at `8b30b1e`). Evidence folder:
`C:/CoWork/outputs/lane-a-d429-receipt2-2026-10-09` (work folder `work`, workId `1bf5cd0c-2d88-4762-9eda-49e00a1341c2`).

### What happened

| Item | Value |
|---|---|
| Source HEAD (captured) | `90de7fbe432dbd1c13f257379b7b876c3c9d3336`; delta since `d4d1181` is the two handoff files only (`8b30b1e`, `90de7fb`) |
| Full check at that HEAD | 18/19, `docs-drift` the sole failure (D-428), `01-check-at-head.log` SHA-256 `a615146f…` |
| Baseline | live R1, release locus `dc656d2`, guard-treeDigest-v1 `c104ec0f…`, 583 files; captured under the lock |
| Run | `prepare` → pending (exit 3; 194 descriptions, 15 communities) → `prepare --resume --answers` → **ready** (exit 0, attempt 2) |
| Candidate | graph SHA-256 `3a63409668b8f975a18245a78763dbf252f7be23904667d9df8a86f964a34031`; manifest `9906eec3a278aa6bfe9f18a18009adf4c9437ea038c455cce6cc082f3e1fae15`; 583 files; frozenAt 2026-10-09T03:55:52.366Z |
| Selection | oracle `a6bf4fe8…`; branches `features/feature-V1-SM05`, `main`, `preflight/sv2-u02` (30 days / 200 commits / no since) |
| D-429 packet | final observation 2026-10-09T03:47:35.545Z inside the final `update` bracket; validated ignored count 698, AST cache 322, transient 1; ignored list `ba8aebda…` |
| Answers | `answers.json` SHA-256 `6dc2f4c84cb6d3ccfe08e498c4fea6d5abf41e08fa2e400c974929e428fa9068` |

**Semantic answers, validated against this source and these member sets** (`build-answers.mjs`, basis
`03-answer-basis.json`): the build refuses unless the delta since `d4d1181` is handoff-only. All **194 pending
descriptions** are the control's texts reviewed with receipt 1, reused only for the exact same id; none newly written.
**15 names:** 7 reused only for an identical member-set hash; **8 new, member-derived** (the two new handoff commits
re-clustered these groups; listing `02-unresolved.json`):

| Member-set hash | Members | New name |
|---|---|---|
| `eeec96ea…` | 51 | Guard Test Harness and D-425–D-426 Build Commits |
| `e1da466a…` | 86 | SM05 Branch, D-338–D-427 Review and Receipt Commits |
| `85d5b22b…` | 17 | D-428 Recording and D-426 Receipt-2 Commits |
| `8f7b529b…` | 20 | D-429 Cycle, Receipt 3–4 and Renewed Receipt-1 Commits |
| `1419ca2f…` | 29 | D-421–D-424 F2 Build, Review and Release Commits |
| `1e375d3b…` | 28 | D-405–D-409 Retention, Route 1 and Migration Commits |
| `52069add…` | 23 | D-395–D-398 Containment, Lane C and Convergence Commits |
| `23987ff9…` | 19 | D-393–D-396 P4a Fixture Isolation and Verification Commits |

**Lane A's read-only verification** (`05-candidate-verification.json`, SHA-256 `180f1435…`): manifest, graph hash, file
count and answers hash recomputed from the staging bytes and equal; 2,480 nodes, 5,429 links, 130 communities, 0
undescribed; **fragment parity 139/139 exact**; name binding 0 findings; every description and name applied; 0
foreign-path hits; staged `branch.json` analyzed `90de7fb`, `stale: false`; **live state unchanged** (equals the
baseline digest), no journal, no lock.

### What you need

**Lane B: receipt 2**, the exact-byte review of graph `3a634096…` / manifest `9906eec3…` from source `90de7fb` and
baseline `c104ec0f…`, including the 8 new names. Per the channel rule (G-F3-8), publication uses only the review
commit Lane B names in its answer.

### What you did instead

Nothing published, synced, repeated or pushed; no fetch since prepare. The SKILL §7 freeze note stays deferred. Drift
stays expected (five governed paths since `11f2e40`) until the guarded release. B-050 stays Applied; its O1 row stays
open.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | Candidate `3a634096…` prepared from `90de7fb` with validated answers and preserved fragments | Phase 1: Lane A's evidence |
| Approve-with-conditions | Receipt 2 | Phase 1: Lane B's exact-byte review commit |
| Defer | Publish + health (receipt 3), repeat (receipt 4), receipt 5, disposition, push | Phase 1: each its own authority; before 2026-10-28T18:21:29Z |
| Reject | Prepare treated as receipt 2; publishing with a Lane A-authored review commit | Phase 1 |
