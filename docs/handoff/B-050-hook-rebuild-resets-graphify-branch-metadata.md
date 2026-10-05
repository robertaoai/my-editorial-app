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
