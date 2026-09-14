# B-089 — Independent review of B-087 Lane A answer

- **Raised:** 2026-09-14 by Lane B
- **Kind:** finding
- **Phase:** 1
- **Blocks:** acceptance of B-087's Lane A answer as a complete correction plan; no application build
- **Status:** Open
- **Lane A:** **Acknowledged 2026-09-14** at read commit `a0229af`. Receipt only; `Status` stays
  `Open` and no `Resolution` is claimed. **Both `Reject` verdicts are accepted.** `Modular_PRD.md`
  §7.1 lines 761 and 788 were independently reconfirmed as an intra-document contradiction at the
  governed Product tier, and the omission from B-087 §9.4 is Lane A's. **Corrected 2026-09-14 by
  `B-090`, whose replacement text is applied here in full:** The historical-snapshot and post-act
  receipt texts were applied in B-087. The third draft is corrected by B-090: Product §7.1 was
  already in B-084's residual packet, so B-087 now records a cross-reference rather than adding or
  duplicating B-084 scope. **Corrected 2026-09-14 by `B-091`:** `J1` through `J4` all required a
  decision or an explicit deferral, not `J1` and `J4` alone. All four were recorded on 2026-09-14 in
  B-087 §9.11. No governed source was edited, B-084 was not edited, and no build is authorised.
- **Verified-By:** — not yet dispositioned; raised by Lane B
- **Verified-At-Commit:** 495e4f8b377622a44458fc02fdf06a4125a1a003
- **Evidence:** Lane A's uncommitted B-087/B-088 receipt edits; `bun run check`; `Modular_PRD.md` §7.1 and §8; storyboard A2 and summary; requirements maps; Encyclopedia ledger; `D-158`, `D-202` and the live lane register; Graphify metadata and pending-description marker. Review and draft corrections only.

## What happened

**Normalised request:** review Lane A's answer to B-087 and receipt of B-088; identify what is unclear or certain to fail; preserve existing owners; give Lane A a parent-first correction guide and give the Chief Editor/Judge explicit Accept/Reject choices. Reconcile Product requirements, storyboard/story panels, embedded UML/data-flow views, Encyclopedia and cross-references. Check graph drift and specify synchronization success. Do not build.

The receipts themselves are correctly applied: the live consistency run now reports `handoff-response` PASS. Both entries remain `Open`, with no `Resolution`, so receipt is not closure. B-087 remains the parent tracker for baseline/product alignment; B-084 remains the source-packet owner; B-088 remains the independent C-39 guard review. This entry records defects in Lane A's new answer and does not replace any of those owners.

### Findings that change the answer

| Finding | Evidence | Required correction |
|---|---|---|
| The `CR-14` correction set omits the Product authority | `Modular_PRD.md` §7.1 still lists `CR-14` as a Product-scope gap with “No FR”, while the same document's FR-01, traceability row and Q9 disposition say the Chief Editor supplies the manual package and future AI generation is PBL-11 | Add this §7.1 row to B-084's existing source packet. Do not freeze a count of sites; name each governed anchor |
| The current B-087 answer contradicts the later receipt act | §9.5 step 0 and §9.6 say B-088 is drafted/not applied; the current working tree has the acknowledgement applied. §9.8 also describes the earlier act as not editing B-088 | Preserve the dated history, then append a short post-act note stating that §9.6 was subsequently applied and verified by `handoff-response`; update the live step wording without calling it closure |
| §9.1 can become a second live tracker | Its tally is pinned to `495e4f8`, but the heading says “completion ledger” and the conclusion states a completed fraction | Label it explicitly as a read-revision snapshot that must not be used as current status. The checker and source entries remain the live evidence; do not propagate or periodically refresh the tally |
| Phase, lane and role are still easy to conflate | `D-202`: Phase 1/Lane A, Phase 2/Lane B, Phase 3/Lane C; tools are run provenance. `D-158`: Chief Editor and Judge are the same person acting in different roles. Sprint scope is a different axis | Add the compact role table below; do not describe Cowork or Code as a phase and do not equate a sprint with a lane |
| Graph state is mechanically red | Current run: `graph-coverage` lacks B-087 and B-088; `docs-drift` reads analyzed `395ab83` versus HEAD `495e4f8`; `.graphify_describe_pending` says descriptions/labels are absent | Keep graph repair after source edits stabilize. A structural rebuild, coverage, head alignment and semantic/curated parity need separate evidence |

### Product semantics to preserve

The frozen customer sentence remains evidence of the original wish: “AI tags topics, sources, trend signals at Reporter gate.” The decided v1 behaviour is the manual contract: the Chief Editor supplies a source reference, exactly one subject topic and a trend-signal description; the Reporter agent executes T1 and records the supplier separately. Application-generated AI tagging/scoring is PBL-11 and remains unranked. “Manual input” is therefore the v1 trigger contract; “AI-generated tags” is a later capability. No scraping or automated website detection is introduced by this correction.

The storyboard's story panels, UML-style sequences and data flow are embedded views in the one storyboard file. The correction must reach A2's panel annotation, its explanatory supersession text and the later summary row. Editing only the replacement paragraph leaves stale statements on both sides of it. The LinkedIn first path remains ManualReady delivery followed by Chief Editor confirmation using the live published URL.

## What you need

### Chief Editor / Judge decision tree

The same person acts under two labels. Use **Chief Editor** for product inputs and Active-lane selection; use **Judge** for phase acceptance, deferral and residual-risk acceptance.

| Parent decision | Chief Editor/Judge sees | Accept means | Reject means / Lane A follow-up |
|---|---|---|---|
| **J1 — baseline classification** | Current `docs/v1` material records setup/scaffold work and does not visibly map the original four-sprint product vision | Accept a descriptive setup/scaffold classification now, preserving paths and history; Lane A drafts the missing original-V1-to-current-sprint mapping | Request a formal V0 mapping proposal. No bulk rename or frozen-history rewrite occurs until that proposal is reviewed |
| **J4 — correction packet** | B-084 plus this review name the inconsistent current-source anchors | Authorise Lane A to prepare the exact governed-document patch for review: Product §7.1, scope graph, all stale storyboard anchors, provenance sentence and Encyclopedia stale marker | Return the packet naming the disputed anchor. Existing decided manual behaviour remains unchanged |
| **J2 — user-journey acceptance** | Lane A supplies one concrete LinkedIn ManualReady article example and one returned-for-revision example | Accept the normal and revision behaviours as implementation acceptance examples | State which input, decision, audit fact or operator step is missing; Lane A revises the examples before implementation |
| **J3 — next iteration** | After J1/J2, Lane A proposes capacity, owners and evidence for one bounded iteration | Accept setup learning, implementation readiness and release readiness as separately stated outcomes | Return the proposal if hours, owner, dependency or completion evidence is absent. No quarterly goal or delivery date is inferred |

No new decision is required for manual inputs, the Reporter-as-T1-executor choice, LinkedIn ManualReady first, or M-MVP/S2 being both usable and reusable; those are already settled inputs. The Chief Editor still needs to supply the representative article, the reason it would be returned for revision and available hours before J2/J3 can be accepted.

### Phase, lane and sprint guide

| Axis | Current meaning | Chief Editor/Judge action | Evidence before acceptance |
|---|---|---|---|
| **Phase 1 / Lane A** | Governance, product/spec alignment and its checking tools. Cowork owns strategy/current docs; Code owns scripts and operates Graphify, serially inside one lane | Chief Editor selects the Active lane; Judge later accepts or defers Phase 1 | Source contradictions resolved, handoff corrections dispositioned, independent review recorded; graph claims separated and evidenced |
| **Phase 2 / Lane B** | Application code and database-facing user workflow | Chief Editor provides and accepts concrete normal/revision examples; Judge accepts implementation evidence at its boundary | A real user completes the specified journey with persisted audit evidence; this planning packet does not authorise it |
| **Phase 3 / Lane C** | GitHub workflow/merge and deployment control surface | Judge accepts release/deployment residuals; Chief Editor confirms intended publication readiness | Required workflow/status/deployment evidence. Manual-ready and automated publication criteria remain separate |
| **Sprint/version/module** | Product delivery scope and freeze rules, separate from the lane lock | Chief Editor accepts the mapping and selects the next sprint outcome | Existing sprint/version baseline reconciled without rewriting frozen history; a module freezes on completion, a sprint/version on succession |

The live state remains Lane A `Active`, Lane B `Eligible`, Lane C `Blocked`. “Eligible” is nomination, not execution. Phase ownership does not itself authorise a bounded change; the Register act, work unit and Active lane still apply.

### Lane A parent-first follow-up

1. **Correct the answer before asking for product choices.** Add a post-act receipt note, mark §9.1 as a historical snapshot and add `Modular_PRD.md` §7.1 to the existing B-084 correction scope. Do not create a new product tracker.
2. **Prepare J1 and J4 as reviewable choices.** For J4, show exact proposed text for every current-source anchor. Keep `docs/PRD.md` and the Charter unchanged. Record which tracking/spec tier is unaffected.
3. **Apply only after the corresponding Judge act.** Under J4, correct the Product row, scope graph and every storyboard occurrence together; mark Encyclopedia Entry 06 stale without advancing its verification SHA while hosted content is unreadable. Apply D-54 only where the decision creates, sequences or retires artifacts.
4. **Verify the source packet before graph work.** Confirm every current governed statement expresses one contract: manual inputs now; future AI generation separate. Confirm the storyboard's normal and revision flows agree with the Product acceptance examples.
5. **Commit source changes on Lane A's surface, then synchronize Graphify.** Rebuild at the final committed HEAD; re-merge all curated fragments by the established dependency-aware procedure; fill descriptions/labels; confirm no curated meaning or edges were lost.
6. **Prove four graph properties separately.** `lastAnalyzedHead == HEAD`; graph coverage includes every selected document and new handoff; `.graphify_describe_pending` is absent after successful semantic fill; named curated nodes/edges and queries retain intended meaning. Tool crashes remain a separate unresolved result, never hidden by a passing coverage count.
7. **Run the full consistency suite once the tree is stable.** Success requires `handoff-response`, `docs-drift` and `graph-coverage` to pass together. Record the commit and exact remaining failures; do not convert unrelated failures into this packet's closure.
8. **Return for Lane B independent review.** Lane B verifies the bounded corrections against their acceptance examples. Only the Judge changes B-087's phase disposition; acknowledgement and answer text are insufficient.

### Guaranteed failures and success criteria

| If this happens | Guaranteed or directly reproducible result | Success criterion derived from the failure |
|---|---|---|
| Only the previously drafted A2 paragraph is replaced | Stale `CR-14` claims survive in the A2 annotation and storyboard summary | Search all named storyboard anchors; each must state manual supply as current and AI generation as future |
| Product §7.1 is omitted | `Modular_PRD.md` contradicts its own FR-01, traceability matrix and decided Q9 | The Product-scope gap table no longer calls CR-14 an absent FR; history remains traceable without reading as current |
| Receipts are called resolutions | Both entries remain Open and no `Resolution` exists | Report receipt, answer, correction, independent verification and Judge acceptance as separate events |
| Graphify is run before final source commits | The next commit makes `docs-drift` stale again | Synchronize against the final committed source revision and record equality to that HEAD |
| Only a fast rebuild or `--fill-missing` is reported | Coverage or labels may improve while curated relationships remain absent or stale | Require head, coverage, semantic descriptions and curated parity as four distinct checks |
| Encyclopedia SHA is advanced without readable hosted content | The ledger would claim verification that could not be performed | Add a stale marker; advance the SHA only after hosted content is independently readable and compared |
| B-087 and B-088 are committed together under D-184 | The commit exceeds the one-entry carve-out | One exact handoff path per permitted commit; source corrections use Lane A's normal active-lane authority |

Current check evidence at the uncommitted receipt tree: 15 checks pass; `graph-coverage` and `docs-drift` fail. `handoff-response` passes. This is a revision-bound snapshot, not a maintained total.

### Draft text for Lane A

Append after B-087 §9.8:

> **Post-act receipt note, 2026-09-14.** After the answer above was written, §9.6's exact B-088 acknowledgement was applied. The current `handoff-response` check passes for both B-087 and B-088. They remain Open, with no Resolution. References above to B-088 as “drafted and not applied” describe the earlier read and are superseded by this note; they are not current status.

Prefix B-087 §9.1 with:

> **Historical snapshot only.** The values below were observed at `495e4f8`; they are not a second status authority and must not be refreshed or cited as current without a new check at a named revision.

Add to B-084's exact correction packet:

> `Modular_PRD.md` §7.1 currently lists CR-14 as a missing functional requirement. Reconcile that row with the already-decided FR-01 manual-input contract (`D-194`/`D-197`) and PBL-11's separate future AI capability. Preserve the historical customer sentence; do not reinterpret it as automated scraping or as build authorization.

## What you did instead

Ran read-only consistency and Graphify status/query checks, inspected the affected current sources and drafted the correction/decision plan here. Preserved Lane A's uncommitted B-087/B-088 edits. Did not modify governed sources, run Graphify update/rebuild, build application code, publish, change lane state, resolve either handoff or accept a phase.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | B-087 and B-088 receipts as receipt evidence; `handoff-response` passes | Phase 1 — retain Open status until disposition and verification |
| Reject | B-087 Lane A answer as a complete current-source correction set | Phase 1 — add Product §7.1 and correct post-act receipt wording |
| Approve-with-conditions | B-087 parent-first plan and Chief Editor decision tree | Phase 1 — apply the ordered corrections in this entry; J1/J4 remain explicit Judge choices |
| Reject | Graph currency or semantic-completion claim | Phase 1 — current `docs-drift` and `graph-coverage` failures plus pending descriptions |
| Defer | Governed-source edits and Graphify synchronization | Phase 1 — Lane A authorization and source stabilization; no build |
| Defer | Application and release readiness | Phases 2 and 3 — after accepted examples, capacity and bounded work authorization |
