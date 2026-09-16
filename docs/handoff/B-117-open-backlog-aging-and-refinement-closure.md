# B-117 — open handoff aging and backlog-refinement closure need one derived view

- **Raised:** 2026-09-16 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** truthful closure and prioritization of the Phase 1 handoff backlog; no application build, workflow, publication, lane transition or release action
- **Status:** Open
- **Lane A:** **Acknowledged 2026-09-16, receipt only.** The parent-first grouping (1. Intent/Build
  consumption, 2. B-084 Product-readiness packet, 3. return-protocol chain via B-116, 4. B-071
  umbrella, 5. B-110, 6. B-088) and the Open/Backlog-refinement-complete/Applied/Handoff-complete
  definitions are accepted without change. Per-entry header normalization (§"Lane A follow-up"
  items 2–5) is queued as the next Lane A unit, in this stated order; no other entry's header is
  edited by this acknowledgement.
- **Verified-By:** — not yet dispositioned; raised by Lane B
- **Evidence:** direct read of all `B-*`/`C-*` handoff headers and their latest Git change at `8b3e68c`; `docs/handoff/README.md` D-100–D-102 lifecycle rules; `handoff-response`/`closure-readiness`; B-094 consolidation; B-116
- **Verified-At-Commit:** 8b3e68c54c45a78f3263a4932d90126b5c353781

## What happened

The handoff directory is the backlog under D-100, but the current open count mixes several
different conditions: an unread new defect, acknowledged work awaiting a canonical correction,
an intentionally deferred optional repair, an applied item with one residual verification gap, and
an old umbrella item that remains active. Treating every `Status: Open` row as the same priority is
therefore misleading, while copying the rows into another backlog would create the drift D-100
forbids.

### Dated snapshot — 2026-09-16 at `8b3e68c`

- 116 handoff entries exist: 12 `Open`, 104 `Answered`.
- All 12 open entries are Phase 1: 10 `spec-defect`, one `finding`, one
  `blocked-on-decision`.
- Eleven are acknowledged by Lane A; B-116 is the only unread entry.
- None of the 12 carries a `Resolution`, so none is complete under D-101/D-102.
- Age from `Raised` is not inactivity: B-071 is 14 days old but changed one day ago; no open entry
  has been idle for more than two days.

| Age on 2026-09-16 | Still-open entries | Last-change interpretation |
|---:|---|---|
| 14 days | B-071 | Changed 2026-09-15; active umbrella, not abandoned |
| 2 days | B-088, B-094, B-095, B-096 | B-095 last changed two days ago; the others changed yesterday |
| 1 day | B-102, B-104, B-106, B-110 | All changed yesterday |
| 0 days | B-114, B-115, B-116 | Current-day entries; B-116 unread |

This table is a commit-pinned observation, not a second live backlog. Future state must be read from
the entry headers and checks.

## Definition of Open, refined, applied and complete

| Term | Meaning in this channel | What changes it |
|---|---|---|
| **Open** | The raised issue has no substantive Lane A disposition yet. It may be unread or acknowledged; acknowledgement proves receipt only | A substantive answer changes `Status` to `Answered`, while the same entry remains the lifecycle owner |
| **Backlog-refinement complete** | Outcome, scope, owner, dependencies, acceptance evidence, exclusions and priority-change condition are explicit enough to decide or authorize later work | Record the answer and child dispositions in the existing entry. This is a planning condition, not a new `Status` or `Resolution` |
| **Applied** | The accepted correction exists at a named commit but has not been independently confirmed | `Status: Answered`, `Resolution: Applied`, evidence and one audit anchor; it remains non-terminal |
| **Handoff complete** | The entry has a terminal disposition: independently `Verified`, explicitly `Deferred` with an owner/tier, `Withdrawn` with reason, or `Superseded` with its successor | Update the existing header and preserve the evidence. Do not close from acknowledgement, age, a parent decision or a green healthy-corpus run alone |

An intentionally postponed issue should not remain `Open` merely to show that the underlying defect
still exists. `Deferred` means exactly “real, not now” and must name the condition that returns it.
Conversely, changing `Open` to `Answered` reduces the receipt queue but does not prove completion.

## Parent-first backlog refinement

| Order | Parent outcome | Existing entries | Required refinement/closure act | Priority changes when |
|---:|---|---|---|---|
| 1 | **Intent-to-build governance is consumable** | B-102, B-114, B-115; B-103 remains the B↔C interface owner | Lane A applies the accepted Intent/Build/DevOps separation and bounded B/C evidence interface once; B/C independently read the committed packet. B-114 is dispositioned through B-115 rather than answered twice | Move behind the Product packet only if that packet proves it needs no cross-lane consumer contract |
| 2 | **B-084 Product-readiness packet is reviewable** | B-094, B-095, B-096, B-104, B-106 | Use settled M1 capacity, exact Product write set, normal/revision LinkedIn journey, target/historical T5 view, metadata/report separation and sequential retention meaning. Each child keeps its own evidence | Reduce or reschedule only on a named capacity failure or source contradiction; do not reopen settled values |
| 3 | **Return-protocol evidence is independently verifiable** | B-116 → B-113 → B-112 → B-097 → B-103 P3 | Acknowledge B-116, remove duplicate/stale audit evidence, add singleton-field refusal coverage, then verify in dependency order | Blocks only this control chain and B-103 P3; it does not replace the higher governance/Product packets |
| 4 | **Oldest S2 authority umbrella has a bounded terminal path** | B-071 | Name the one current accepted corrective-plan revision, exact remaining Judge act and final application/verification evidence; stop treating historical rounds as concurrent children | Promote when a fresh S2 authorization is being considered; age alone is not promotion evidence |
| 5 | **Applied D-231 child closes honestly** | B-110 | Add the two remaining direct graph cross-references or narrow the claimed evidence contract, then independently verify and update the header from Open | Quick closure may be taken when it does not interrupt parents 1–3; ease is not business priority |
| 6 | **Optional C-39 P1 is intentionally parked** | B-088 | Record the Judge's existing conditional defer with the exact residual-capacity and separate-authorization return condition | Reopen only after parents 1–2 complete and the whole P1 implementation plus independent review fits |

B-094 is the consolidation packet, not a second owner for every child. Lane A must review whether
its remaining role is a live decision blocker or a packet now superseded by the named owners, then
give it the corresponding disposition. Bulk-closing the children from B-094 is rejected.

## Lane A follow-up

1. Acknowledge B-117 and B-116. This clears unread receipt only.
2. For every currently open entry, classify one of four states from its own evidence:
   - genuinely awaiting a substantive answer — remain `Open`;
   - substantively answered but unapplied — `Answered` with the appropriate explicit disposition;
   - corrected but unverified — `Answered / Applied`;
   - terminal — `Verified`, `Deferred`, `Withdrawn` or `Superseded` with required companion fields.
3. Correct header/body contradictions in the existing entries. At minimum, review:
   - B-088, whose Judge section says P1 is deferred while its header remains Open;
   - B-110, whose Lane A application and Lane B residual review exist while its header remains Open;
   - B-114, whose ownership framing is explicitly redirected to B-115;
   - B-094, whose original decision questions were narrowed by later Judge clarifications and child owners.
4. Keep B-071 open only against one current completion boundary. Historical rounds remain evidence,
   not parallel active work.
5. Apply parents in the order above. Update each child's own header only when its evidence meets that
   child's bar; the weakest unfinished child determines an umbrella's disposition.
6. Run `bun run check` and `bun run fixtures` after any channel-control change. Ordinary header
   dispositions need no Graphify rebuild because `docs/handoff/**` is excluded from governed intent.
   Rebuild only after accepted canonical Governance/docs or control-script changes land.
7. Report the new counts from the checks rather than writing them into a permanent canonical
   backlog table.

## Guaranteed failures and success criteria

| Guaranteed failure if unchanged | Evidence of success |
|---|---|
| Acknowledged entries stay Open indefinitely, so receipt and disposition are indistinguishable | Existing headers reflect the actual lifecycle state and `handoff-response` derives the reduced open count |
| An intentional defer stays Open, so it competes with active parents every review | `Deferred` names its return condition and leaves no hidden active child |
| Age becomes the priority rule | Each parent records business outcome, blocker and priority-change condition; age is an escalation signal only |
| One consolidation act bulk-closes children | Each owning entry carries its own weakest-child disposition and audit evidence |
| A second backlog spreadsheet/table is created | The channel checks derive the live queue directly from the existing entry headers |
| Graphify is rebuilt for transaction-log cleanup | `docs-drift` remains current for governed intent; graph work follows only canonical source/control changes |

## Cross-artifact review

| Artifact | Disposition |
|---|---|
| `docs/Modular_PRD.md` | Unaffected by backlog-state normalization. Product changes, if any, remain owned by the accepted B-084/B-095/B-096/B-104/B-106 packet |
| Storyboard and story panels | Unaffected by this lifecycle review; normal/revision journey corrections remain in the B-084/B-104 parent chain |
| UML and data flow | Unaffected; no application state, database entity, event or exposure changes here |
| Requirements traceability | The chain remains intent → Product acceptance → MMF → build child → evidence. Handoff status normalization creates no Customer Request |
| Encyclopedia | Unaffected; Entry 05's D-168 staleness remains its existing separate owner |
| Cross-references | B-094 consolidates current Phase 1 decisions; B-102/B-115, the B-084 children, B-116, B-071, B-110 and B-088 retain their own lifecycle authority |
| Graphify | No rebuild for B-117 or handoff header cleanup. Governed intent is current at `0d2cc2b`; later handoff-only commits are excluded by D-231 |

## What you did instead

Derived the current queue from the existing handoff files and Git history, separated age from
inactivity, grouped the open entries by parent outcome, and defined completion without inventing a
new lifecycle state or second backlog. Did not alter existing entries, canonical governance,
Product artifacts, application code, workflows, Graphify state or deployment state.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | D-100 existing-entry backlog model and derived statistics | Phase 1 — retain; do not create a second live backlog |
| Approve-with-conditions | Current 12-entry Open queue | Phase 1 — normalize headers from actual evidence and apply parent order |
| Approve-with-conditions | B-071 continuing Open | Phase 1 — one current completion boundary; age alone does not close or promote it |
| Defer | B-088 P1 | Phase 1 — explicit residual-capacity and separate-authorization return condition |
| Reject | Acknowledgement, age or bulk consolidation as closure evidence | Each owning entry requires its own disposition and audit evidence |
| Reject | Product/implementation/Graphify work from this backlog review | Separate bounded authorization after canonical intent is accepted |

## Lane B review of Lane A acknowledgement — receipt complete, normalization not applied, 2026-09-16

Lane A's acknowledgements at `3c3ab39` and `603f208` are valid receipt evidence. They clear the
unread condition for B-116 and B-117 and accept this entry's definitions and parent order without
changing them. They do not apply the queued per-entry header normalization, repair B-116, or close
any parent or child.

At `603f208`, the complete local consistency suite passes 18/18. Its derived channel views say:

- 117 entries: 13 `Open`, 104 `Answered`, zero unread;
- all 13 open entries still carry no `Resolution`;
- closure-readiness passes because no phase claims closure, not because the 13 are complete; and
- `docs-drift` is green with governed intent at `0d2cc2b`; every later commit is excluded handoff
  work, so Graphify is not due.

### Parent decision before child edits

**Accept the lifecycle normalization unit; reject treating its acknowledgement as its execution.**
Lane A must first classify the existing evidence, then edit each owner entry once. The following
four are the immediate ambiguity set; the other open entries remain Open until their named source
or control work lands.

| Order | Entry | What the body already says | Safe next disposition to evaluate | What prevents automatic closure |
|---:|---|---|---|---|
| 1 | B-088 | The Judge intentionally deferred P1 until higher parents complete, full residual capacity exists and a separate authorization is recorded | `Answered / Deferred` with that return condition as `Follow-up-Tier` | Do not call it Verified; no P1 correction exists |
| 2 | B-110 | Lane A applied D-231 propagation and Lane B confirmed behavior, but found two missing direct graph cross-references | `Answered / Applied` while the residual is corrected, then independent `Verified` | Applied behavior does not satisfy the final evidence claim |
| 3 | B-114 | Its test/atomic-commit content remains useful, while B-115 supersedes its MMF/build-ownership framing | Either `Answered / Deferred` to B-115 or keep Open with one explicitly surviving child; Lane A must choose and state which content remains live | `Superseded` would wrongly discard useful testing content; Open with no surviving-child statement perpetuates ambiguity |
| 4 | B-094 | Later Judge clarifications supplied capacity and retention meanings and delegated work to existing child owners | Classify its weakest remaining role explicitly: coordination-only `Deferred` to the named parent chain, or Open with one still-missing Judge decision | A consolidation packet cannot bulk-close B-095/B-096/B-102/B-104/B-106/B-116 |

### Exact Lane A application sequence

1. Update B-088 from Open only if the header records the existing explicit defer and exact return
   condition. No new decision is required.
2. Update B-110 to the state its body proves, preserving its one residual cross-reference child.
3. Decide B-114's one surviving scope after B-115's correction. Do not use both “superseded” and
   “still required” without child-level separation.
4. Re-read B-094 only for unresolved Judge choices. If none remains, stop calling it
   `blocked-on-decision` and route its remaining work to the existing owners.
5. Leave B-071, B-095, B-096, B-102, B-104, B-106, B-115, B-116 and B-117 Open until their own
   named application or review condition is met. A lower open count is not the objective; truthful
   lifecycle state is.
6. Run `bun run check`. Run `bun run fixtures` only if a channel parser/check changes; header-only
   lifecycle edits do not justify repeating mutation fixtures.
7. Do not rebuild Graphify for these handoff-only status edits. Rebuild after a governed source or
   control-script application, as already recorded.

### Success evidence from the present failure

| Present failure shape | Success evidence |
|---|---|
| Receipt is green while every entry remains Open | The four ambiguity entries carry evidence-matched statuses and companion fields |
| Closure-readiness is read as completion while no phase is closing | Report states explicitly that it is reporting-only; each terminal claim is independently supported |
| B-088 competes as active work despite a Judge defer | Deferred header names the return condition and later Return record rules govern re-entry |
| B-110 hides an applied correction inside an Open header | Applied header exposes the remaining independent-verification work |
| B-114 is simultaneously useful and superseded | Child-level scope says exactly what B-115 replaces and what B-114 retains |
| B-094 continues to ask decisions already supplied | Its Kind/status reflect only a genuinely missing decision, or it defers coordination to its named owners |

No Product or implementation artifact changes from this review. `Modular_PRD`, storyboard/story
panels, UML/data flow, requirements traceability and Encyclopedia remain under the same owners
listed above. The application-ready meaning still depends on B-102/B-115 and the B-084 child
packet; this status pass does not authorize construction.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Lane A receipt of B-116/B-117 and 18/18 consistency result | Phase 1 — receipt complete |
| Approve-with-conditions | Per-entry backlog normalization | Phase 1 — apply the four-entry ambiguity review, then derive counts again |
| Reject | Calling B-117 complete from acknowledgement or green checks | No lifecycle header was normalized and no child correction landed |
| Defer | B-088 P1 | Existing capacity and separate-authorization return condition |
| Defer | Product, build, workflow and Graphify actions | Existing owning packets and later bounded authorization |

## Judge clarification — DoR, DoD, sprint selection and setup-spike closure, 2026-09-16

The Judge confirms that the present activity is a project-setup spike preparing the first next
application sprint. The clarification is accepted with one necessary vocabulary separation:

- the **DoR checklist is satisfied** before an item is eligible for sprint selection;
- eligibility does not put the item into a sprint;
- the Judge selects among ready items by MMF dependency order and available capacity;
- the **DoD definition is ready** before selection, but the implementation item satisfies that DoD
  only after it is selected and built; and
- a setup-spike handoff may close when it has produced, promoted and independently verified that
  construction-ready packet. Closing the handoff does not mark the future implementation Done.

Without the distinction between **“DoD defined”** and **“DoD satisfied,”** the record would claim
the application was built merely because its exit checklist was written.

### Highest-parent Judge decision

| Choice | Accept means | Guaranteed failure | Recommendation |
|---|---|---|---|
| **A — two linked objects** | The setup handoff closes on a verified readiness packet; the future sprint item closes only after implementation satisfies its DoD | None if the two identities and evidence chains remain distinct | **Accept** |
| B — one object, close handoff only after the app is built | Every setup handoff remains open throughout implementation, so `docs/handoff/` becomes the delivery backlog the Judge has rejected | Channel keeps growing and mixes refinement with construction | Reject |
| C — close when a checklist draft exists | Draft prose becomes completion without canonical promotion or independent review | Scope can disappear between handoff and sprint selection | Reject |

### Universal Definition of Ready — eligibility, not selection

Each implementation backlog item is ready only when all applicable rows are answered in its
canonical owner. `N/A` requires a reason; silence is not `N/A`.

| DoR check | Evidence required before the item may be offered for a sprint |
|---|---|
| Intent and MMF anchor | Named module/MMF, business outcome and canonical requirement/decision anchors |
| User journey | Normal path, revision/failure path and intended delivery channel, with acceptance examples |
| Scope boundary | Included behavior, excluded behavior and the smallest independently valuable child unit |
| Dependency order | Parent and child dependencies, access, credentials, external systems and blocking decisions |
| Ownership | Meaning owner, file/applicator lane, independent reviewer and return owner |
| Data and state | Inputs, outputs, state transitions, metadata/report boundary, retention and exposure limits |
| Verification design | Selected TDD/BDD/ATDD/contract/security/database method, failing example and regression boundary, per B-115 |
| DoD definition | Concrete functional, artifact and evidence exit checks written before selection |
| Estimate and capacity | Effort range, operator/reviewer capacity and stop condition; no unconfirmed date becomes a commitment |
| Priority-change condition | The evidence that would move, split, defer or remove the item |

Satisfying this checklist produces a **Ready candidate**. It does not change lane state, create a
run identifier, authorize implementation, or put the candidate into a sprint.

### Universal Definition of Done — satisfied after selection and construction

The item leaves its sprint only when every applicable check below is evidenced at the reviewed
commit:

| DoD check | Completion evidence |
|---|---|
| Authorized scope built | Only the selected child is implemented; exclusions and frozen sources remain intact |
| Required behavior works | Normal, revision/failure and recovery paths meet the accepted examples end to end |
| Persistence and audit | Real database/state changes persist; audit identity, transition and evidence records are complete |
| User interface | Required forms, controls, lists and feedback work without dead actions or hidden manual steps |
| Verification passes | The selected xDD proof fails before the behavior, passes afterward, and relevant regressions remain green |
| Security and data boundary | Roles, secrets, exposure allowlist, retention and external-system boundaries match the packet |
| Cross-lane evidence | Lane B produces the bounded artifact; Lane C verifies delivery/security/monitoring only where the selected unit requires it |
| Traceability | Requirement → MMF → build child → test/evidence links are current; only affected governed tiers change |
| Independent review | A named actor outside the applying side confirms the result at an existing commit |
| Judge acceptance | The completed unit is accepted against its DoD; deployment/release remains separately evidenced when applicable |

### Current corpus reconciliation — do not erase completed evidence

The phrase “building of the app has not started” conflicts literally with the current authoritative
record: `Modular_PRD` §8 and the Register record S0/S1 as Done, and the repository contains their
configuration, migration and database-test artifacts. The safe normalized reading is:

> **No new MMF application-feature construction has started from this setup-spike packet. S0/S1's
> historical substrate evidence remains Done. The next application sprint is not selected or
> authorized merely because its DoR and DoD definitions are prepared.**

If the Judge instead intends to revoke S0/S1's recorded Done state, Lane A must present that as a
separate explicit decision with artifact-by-artifact disposition; it cannot be inferred from the
word “spike.”

There is a second mapping conflict: the current `V1-BUILD-SPEC` names S3 as Board/filters/audit and
S4 as Publication/fallback, while the earlier baseline discussion places later monetization and
multi-account/access work in S3/S4. No DoR packet may silently choose between those sequences. The
Register must preserve or amend the sprint map before assigning a candidate to either sprint.

### Current items — readiness and handoff closure disposition

| Parent/item | DoR state | DoD-definition state | Handoff disposition needed |
|---|---|---|---|
| S0/S1 historical substrate | Already completed under the current governed record | Satisfied by existing recorded artifacts and tests, subject to their stated caveats | Do not reopen through this spike |
| B-102/B-115 Intent→Build→DevOps contract | Not ready: accepted semantics are not yet promoted to canonical owners | Drafted in B-115, not yet a governed construction contract | Apply and independently verify; then close these setup handoffs without starting code |
| B-084 Product packet with B-095/B-096/B-104/B-106 | Not ready: exact source write set and unified normal/revision journey remain unapplied | Partial; acceptance and evidence rows exist across children but are not one accepted packet | Promote one packet; each child closes on its own verified correction |
| B-116 control repair | Ready for Lane A application: bounded files, failure and evidence are named | Complete for the control correction | Apply, test and verify B-113→B-112→B-097; then close B-116/B-117 control children |
| B-071 / proposed next S2-sensitive work | Not ready: D-171 hold and one-current-revision boundary remain | Target DoD exists, but it is not an authorization | Keep out of a sprint until a fresh Judge selection names the exact MMF child |
| B-110 D-231 residual | Correction applied; final evidence edge remains | Complete for the residual graph correction | Finish the two edges or narrow the evidence claim, verify, close |
| B-088 C-39 P1 | Not selected for the first next sprint; deliberately conditional | Defined, but capacity and separate authorization remain absent | Promote its future candidate to the canonical governance backlog and close the handoff `Deferred` with a return condition |
| Later S3/S4 candidates | Not ready: sprint identity itself conflicts | DoD cannot be final until the version/sprint map is decided | Keep in canonical Governance/docs backlog, not as open handoff work |

### Closing setup handoffs without losing later backlog items

For an item not selected for the first next sprint, Lane A must:

1. promote its accepted intent once to the existing canonical owner — Register gap/backlog row,
   module/product tracker, Build Spec or feature/spec tier as appropriate;
2. record target MMF/version/sprint only where decided; otherwise record an unassigned future
   candidate rather than inventing a sprint;
3. carry the DoR gaps, defined DoD, owner and priority-change/return condition in that owner;
4. update the originating handoff to `Answered / Deferred` or `Superseded`, citing the canonical
   owner and required companion field; and
5. later return it through B-097's Return record only when the named condition is satisfied.

This makes `docs/handoff/` a refinement transaction channel rather than the permanent product
backlog. It also prevents “close all handoffs” from becoming “drop all unselected work.”

### Lane A step-by-step follow-up

1. Record Choice A's two-object model in the Decision Register and name the exact canonical owner
   of the reusable DoR/DoD definitions. Do not create a duplicate checklist file if the Build Spec
   and request-to-execution map can own them.
2. Reconcile “no app build started” with S0/S1's existing Done evidence using the normalized wording
   above, or return a separate explicit revocation choice to the Judge.
3. Resolve the S3/S4 mapping conflict before assigning any later candidate to those sprint numbers.
4. Add item-specific DoR and DoD-definition evidence to the B-102/B-115 and B-084 packets. Use
   B-115's method-selection table rather than copying xDD rules here.
5. Select the first next-sprint candidate only after its DoR passes and the MMF dependency order and
   capacity are recorded. Selection is a separate Judge act and lane transition.
6. Promote non-selected accepted items to their existing Governance/docs owners, then terminally
   disposition their handoffs with explicit return conditions.
7. Propagate any new artifact or sequence fact through the Register, Build Spec and Artifact
   Inventory in one pass under D-54. Update `Modular_PRD` §8 only if a sprint closes or a tier opens.
8. Run the consistency suite and independent Lane B/C consumer reads. Rebuild Graphify only after
   the governed source commit, not for this handoff clarification.

### Failure-derived success evidence

| Guaranteed failure | Success evidence |
|---|---|
| “DoD ready” is read as “implementation Done” | Separate readiness-packet and implementation-item identities with distinct evidence |
| Every DoR-complete candidate enters the sprint | Sprint selection record names MMF order, capacity and the one chosen child |
| Unselected work stays forever in `docs/handoff/` | Canonical backlog owner plus terminal handoff disposition and return condition |
| Closing handoffs drops future work | Each closed handoff cites the canonical promoted record |
| The spike resets S0/S1 despite existing artifacts | Historical Done evidence remains, or a separate explicit revocation disposition exists |
| S3/S4 labels are chosen from conversation memory | Register decides the one sprint map before candidate assignment |
| Checklists are copied into many files | One canonical reusable definition; item packets cite and specialize it |

### Cross-artifact review

| Artifact | Impact |
|---|---|
| `docs/Modular_PRD.md` | No immediate Product edit. Its MMF/acceptance anchors feed DoR; §8 changes only on sprint/tier lifecycle events |
| Storyboard and story panels | Supply normal/revision/failure acceptance examples to DoR and DoD; no status edit from this clarification alone |
| UML and data flow | Supply state, event, role and exposure boundaries; no implementation model changes until a selected item identifies a gap |
| Requirements traceability | Must extend through MMF → ready candidate → selected child → test/evidence; no new Customer Request is created |
| Encyclopedia | Unaffected by checklist semantics; Entry 05's D-168 staleness remains separately owned |
| Cross-references | B-115 owns governance/xDD separation; B-117 owns handoff closure; B-084 children own Product readiness; Build Spec owns sprint sequence/DoD |
| Graphify | Current for governed intent at `0d2cc2b`; no rebuild for this handoff-only clarification. Rebuild after Lane A's accepted canonical pass |

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Choice A: setup handoff closes on a verified ready packet; implementation closes on satisfied DoD | Phase 1 — Register and canonical workflow propagation |
| Approve-with-conditions | Universal DoR and DoD definitions | Phase 1 — one canonical owner, item-specific evidence and independent consumer review |
| Approve-with-conditions | “App building has not started” | Use normalized next-MMF meaning unless the Judge explicitly revokes S0/S1 history |
| Reject | DoR completion as automatic sprint selection | Selection follows MMF order, capacity and a separate Judge act |
| Reject | Closing handoffs without canonical promotion | Every future item needs an owner and return condition |
| Defer | S3/S4 candidate assignment | Register must resolve the current sprint-map conflict first |
| Defer | Application construction, workflow and deployment | First selected candidate must pass DoR and receive bounded authorization |

## Judge correction — separate `SETUP-SPIKE-000` from the original four-sprint V1, 2026-09-16

This clarification corrects the preceding section's provisional preservation of `S0`/`S1` as V1
sprints. The issue is not whether their artifacts exist; they do. The issue is **which planning
namespace those artifacts completed**.

The corpus currently says both of the following:

1. `D-185` names `SETUP-SPIKE-000` as the zero-to-one setup parent and says it is deliberately not
   named `S0`, because `S0` already has a governed sprint meaning; and
2. the current Build Spec says `V1 = S0 through S4`, with `S0` and `S1` completed and frozen.

The Judge now supplies the missing baseline: the original V1 has **four sprints numbered 1–4**;
Sprints 1 and 2 produce the working application, and Sprints 3 and 4 concern account security and
monetization. The later `S0`–`S4` sequence was scaffold-era planning and must not silently replace
that baseline. Existing commits and test evidence remain true, but their completion labels cannot
be allowed to prove that an original V1 sprint completed.

### Parent decision tree — decide before any child backlog classification

| Order | Choice | Accept means | Consequence | Lane B recommendation |
|---:|---|---|---|---|
| 1 | **A — separate the namespaces** | Preserve `SETUP-SPIKE-000` and its completed scaffold evidence; reinstate a distinct original `V1/Sprint 1…4` tracking sequence | Requires a one-time alignment matrix and canonical propagation; no build status transfers automatically | **Accept** |
| 1 | B — keep `V1 = S0…S4` | Treat the later derived plan as the V1 baseline | Rejects the Judge's stated historical baseline and leaves the version/sprint conflation in place | Reject |
| 1 | C — rename all old `S0…S4` references in place | Rewrite history to look as though the collision never occurred | Breaks commit, decision, fixture and evidence citations; completed evidence becomes hard to audit | Reject |
| 2 | **A1 — preserve evidence without inheriting completion** | `build-config`, flags, `0002` and their tests become reusable setup inputs to V1 | V1 Sprint 1/2 still need their own DoR, selection and DoD evidence | **Accept** |
| 2 | A2 — count scaffold completion as V1 completion | The same artifact closes both the spike and a V1 sprint | A sprint can become Done without having been selected under the restored V1 plan | Reject |
| 3 | **Scope path 3A** | “Account security” means bounded single-account protection; monetization remains outside V1 unless the frozen customer scope is formally amended | Consistent with the frozen PRD's single-account and no-monetization statements | **Accept pending Judge confirmation** |
| 3 | Scope path 3B | V1 Sprint 3/4 include multi-account access and monetization | Directly conflicts with the frozen `docs/PRD.md` non-goals and Charter; needs a customer/sponsor amendment, not a lower-tier edit | Defer until the higher-authority amendment exists |

The Judge can therefore accept the four-sprint identity now without pretending its Sprint 3/4
scope conflict is already resolved. Lane A must present the exact account-security and monetization
boundary as the next named choice.

### Required sprint-index alignment matrix

Lane A must add **one canonical matrix** to the existing V1 tracking set rather than create another
free-standing tracker. The Build Spec owns the sequence; the Register owns the decision and the
Artifact Inventory records any created or retired file. The matrix needs these columns:

| Required column | Purpose |
|---|---|
| Planning namespace | Distinguishes `SETUP-SPIKE-000`, the later scaffold `S0…S4` plan and original V1 |
| Historical label | Preserves citations such as `S0`, `S1`, `D-171` and their commit evidence |
| Historical outcome/artifact | Records what actually exists without transferring sprint completion |
| Current disposition | `Completed evidence`, `Unbuilt derived plan`, `Retired label` or `V1 candidate` |
| Reuse target | Names the V1 backlog item that may consume the artifact, or `None` |
| Revalidation required | States what must be checked against the restored V1 scope |
| DoR state | Shows eligibility only |
| Selection state | Shows whether the Judge placed the item into a V1 sprint |
| DoD definition / satisfaction | Keeps “defined” separate from “satisfied” |

The minimum rows are:

| Namespace/item | Present evidence | Correct treatment before V1 starts |
|---|---|---|
| `SETUP-SPIKE-000` governance/setup | Governing sources, controls, handoff/refinement work | Complete its own closure criteria; it does not count as a V1 sprint |
| Derived `S0` | Config spine, flags and Stripe removal | Preserve as completed setup evidence; revalidate only where a selected V1 child consumes it |
| Derived `S1` | `0002` schema and PostgreSQL transition tests | Preserve as completed setup evidence; do not call original V1 Sprint 1 Done |
| Derived `S2` | Unbuilt/held Line-assignment and four-eyes plan | Return its accepted requirements to the V1 backlog; retire the derived sprint assignment only after traceability exists |
| Derived `S3` | Unbuilt Board/filter/audit plan | Return its accepted requirements to the V1 backlog without assigning a restored sprint by guess |
| Derived `S4` | Unbuilt publication/fallback plan | Return its accepted requirements to the V1 backlog without assigning a restored sprint by guess |
| Original V1 Sprint 1 | Working-software increment, exact MMF child still to be reconstructed | Not Ready and not selected until its scope, dependencies, acceptance path and DoD are explicit |
| Original V1 Sprint 2 | Working-software completion/reuse increment, exact boundary still to be reconstructed | Depends on Sprint 1; cannot inherit derived `S2` merely because the numbers resemble one another |
| Original V1 Sprint 3 | Account-security increment | Not Ready until “single-account protection” versus “multi-account access” is decided against frozen scope |
| Original V1 Sprint 4 | Monetization increment in the stated historical vision | Not Ready while `docs/PRD.md` and the Charter exclude monetization; requires higher-authority amendment or post-V1 placement |

### DoR and DoD by current open handoff item

These are **setup-handoff** exit criteria. They define what Lane A must promote before closing each
transaction; they do not state that the application behavior has been built.

| Parent order | Item | DoR checklist for the future build candidate | DoD definition Lane A must make ready | Setup-handoff closure evidence |
|---:|---|---|---|---|
| 1 | `B-117` | Sprint namespace, canonical backlog owner, MMF order and selection rule are explicit | Separate spike closure, V1 selection and build completion states | Alignment decision and matrix are canonical; every open child has a destination and closure state |
| 2 | `B-102` | Intent source, build consumer, bounded evidence interface and lane owner agree | Consumer can determine Ready/Not Ready without reading conversational history | Contract promoted and independently consumed by Lane B/C |
| 2.1 | `B-115` | Intent, Build and DevOps responsibilities are separated for the candidate | Selected xDD method, failing proof, integration evidence and DevOps feedback boundary are stated | Canonical governance/build boundary cites one owner per fact |
| 3 | `B-095` | Exact B-084/A4 Product write set and precedence owner are named | Every identified contradiction has one target correction and verification | Product source packet contains the corrections; no duplicate write set remains in handoff |
| 3.1 | `B-096` | State fields, metadata JSON and explainability/report storage have separate contracts | State transition changes cannot mutate unrelated metadata; report snapshots remain auditable | Product/data-flow/schema specifications agree on the three authorities |
| 3.2 | `B-104` | Historical and target T5 executor/role models are labelled and mapped | Normal and revision journeys identify virtual-agent nodes, user actions and judgment gates | Storyboard, story panel, UML, RACI and acceptance examples share one target model |
| 3.3 | `B-106` | A4/A6 values have distinct meanings, policy owners and UI exposure | Threshold and retention behavior have boundary, source and verification examples | Config, Product requirement and retention policy no longer collide |
| 4 | `B-116` | Terminal annotation, repeated lifecycle cycle and audit identity are specified | Negative test proves an invalid return cannot pass through a stale terminal record | B-113→B-112→B-097 control chain is corrected and verified |
| 5 | `B-071` | The restored V1 candidate containing T5/T6 has an MMF parent, stable role model and cleared hold | Route, judgment packet, revision cycle and publication decision have acceptance evidence | Accepted requirements move to the canonical V1 backlog; the derived `S2` label is not reused |
| 6 | `B-088` | P1 has residual capacity, explicit authorization and a target owner | Token-boundary correction has a bounded test and independent reviewer | Otherwise promote as deferred canonical backlog work and close with its return condition |

`B-117` is the parent because no child can be classified as “first V1 sprint,” “later V1 sprint” or
“future backlog” until the sprint namespace is corrected. Within the Product packet, `B-095` is the
write-set parent and `B-096`, `B-104` and `B-106` are dependent semantic children.

### Setup-handoff closure rule — corrected to the Judge's requested boundary

A `docs/handoff/` item closes during this spike when all of these are true:

1. its accepted intent is written into the existing canonical Governance/docs owner;
2. its future build candidate has an item-specific DoR and a **defined** DoD;
3. it is marked either `Ready candidate` or `Not Ready`, and this state is not confused with sprint
   selection;
4. a non-first-sprint item has a canonical backlog owner and explicit return/priority-change
   condition outside `docs/handoff/`;
5. the handoff header carries the evidence-matched terminal disposition and canonical citation; and
6. an independent consumer confirms the packet is usable.

No application implementation is required to close these setup transactions. Conversely, merely
drafting a DoD in the handoff does not close one: the definition must be promoted, traceable and
consumable. When V1 starts, the selected sprint item remains open in the Build backlog until its
DoD is **satisfied**.

### Lane A step-by-step follow-up

1. Register the namespace correction as the parent decision. State that completed scaffold evidence
   is preserved while its V1 sprint interpretation is withdrawn.
2. Add the sprint-index alignment matrix to the canonical Build Spec and propagate the artifact and
   sequence facts through all three V1 tracking files in the same pass under `D-54`.
3. Correct `Modular_PRD` §8's tracker rows so `SETUP-SPIKE-000`, derived scaffold evidence and the
   original V1 four-sprint sequence cannot be read as one lifecycle. Do not edit frozen
   `docs/PRD.md` or the Charter.
4. Return one bounded Chief Editor choice for Sprint 3/4: single-account security with monetization
   deferred, or a formally sponsored scope amendment for multi-account/monetization.
5. Reconstruct V1 Sprint 1 and Sprint 2 from the original MMF outcome and dependency order. Reuse
   scaffold artifacts only after an explicit fit check; do not map by matching numbers.
6. Apply the per-item DoR/DoD rows above to the current open handoffs, parent first. Promote later
   items to canonical backlog owners and terminally disposition their handoffs.
7. Have Lane B confirm that the resulting packet gives one buildable child, test boundary and data
   contract. Have Lane C confirm only the workflow, deployment, security and monitoring dependencies
   exposed by that child.
8. Run the governed consistency checks, then rebuild Graphify from the canonical docs commit. This
   handoff-only correction itself remains excluded from Graphify.

### Failure-derived success criteria

| Guaranteed failure | Required success evidence |
|---|---|
| Current `S0`/`S1` completion silently closes original V1 Sprint 1/2 | Matrix preserves the artifacts but shows no inherited V1 selection or completion |
| Derived `S2` is mistaken for original Sprint 2 | Separate namespace and MMF mapping; no numeric-only mapping |
| Four-sprint V1 is asserted while frozen scope still excludes Sprint 3/4 capabilities | Explicit scope-boundary choice and, where required, higher-authority amendment |
| Handoffs close and future work disappears | Every terminal handoff cites a canonical backlog owner and return condition |
| Handoffs remain open until the application is built | Setup closure evidence is promotion plus usable DoR/defined-DoD, not implementation |
| DoR-complete means automatically selected | Separate Judge selection field naming MMF order and capacity |
| Completed scaffold is discarded during relabelling | Historical IDs, commits, artifacts and tests remain in the alignment matrix |

### Cross-artifact impact

| Artifact | Required treatment |
|---|---|
| `docs/Modular_PRD.md` | **Affected after the decision:** correct §8 lifecycle tracking; preserve Product requirements unless the higher-authority scope changes |
| Storyboard and story panels | **Affected during Sprint 1/2 reconstruction:** assign each normal/revision/failure panel to the restored MMF child; do not change behavior merely to fit a sprint number |
| UML and data flow | **Affected during reconstruction:** map existing state, metadata, report and exposure contracts to selected MMFs; derived sprint labels carry no authority |
| Requirements traceability | **Affected:** add `SETUP-SPIKE-000 evidence → reusable input → original V1 MMF/sprint candidate → acceptance evidence` links |
| Encyclopedia | **Affected only for vocabulary:** define the three planning namespaces and retire the conflated reading; Entry 05's unrelated `D-168` staleness remains separately owned |
| V1 tracking set | **Affected under D-54:** Register decision, Build Spec sequence/alignment/DoR/DoD, Inventory file effects; Phase Closure only when a lifecycle state actually changes |
| Graphify | Rebuild only after Lane A commits the canonical alignment; no rebuild for this `docs/handoff/` addition |

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Separate `SETUP-SPIKE-000`/derived `S0…S4` evidence from original four-sprint V1 | Phase 1 — Register and alignment-matrix propagation |
| Approve | Preserve completed scaffold artifacts as reusable evidence without inherited V1 completion | Phase 1 — per-artifact fit mapping |
| Approve-with-conditions | Close setup handoffs when canonical DoR and defined DoD packets are usable | Phase 1 — promote, independently consume, terminally disposition |
| Approve-with-conditions | Original V1 Sprint 1/2 reconstruction | Backlog refinement — exact MMF scope, order, capacity and acceptance path required |
| Defer | Original V1 Sprint 3/4 scope | Chief Editor scope-boundary choice; higher-authority amendment if multi-account/monetization remains in V1 |
| Reject | Treating derived `S0`/`S1` as proof original V1 Sprint 1/2 is Done | Namespace correction |
| Reject | Renaming historical sprint citations in place | Preserve audit evidence through the alignment matrix |
| Reject | Starting application work from this clarification | Build begins only after one restored V1 child is Ready, selected and authorized |

## Judge selection — qualified sprint indices and zero-start V1 baseline, 2026-09-16

The Judge accepts the namespace-separation branch and supplies the exact lifecycle interpretation:

- `SETUP-SPIKE-000` is the programme/setup container. Its five internal scaffold iterations are
  `SETUP-SPIKE-000/S0` through `SETUP-SPIKE-000/S4`.
- delivery version `V1` is a separate four-sprint sequence: `V1/S1` through `V1/S4`.
- **no `V1` sprint has started.** In particular, `V1/S1` and `V1/S2` are not started.
- completed setup artifacts remain completed inside the setup namespace and may become inputs to a
  V1 sprint only after the receiving MMF passes its own fit and readiness checks.

The five-iteration spike shape is recorded here as this project's approved planning model from the
historical dialogue. Lane A does not need to establish a general claim about Scaled Agile to apply
it. The governing fact is the Judge's project-specific namespace decision.

### Decision table — parent first

| Order | Decision | Accept | Reject | Result |
|---:|---|---|---|---|
| 1 | Two namespaces | `SETUP-SPIKE-000/S0…S4` and `V1/S1…S4` have separate identities and lifecycles | Any bare `S1`/`S2` used as a current status without its namespace | **Accept** |
| 2 | V1 start state | All four V1 sprints begin `Not started`; readiness and selection are recorded separately | Carrying `Done`, `Frozen`, `Current` or `Held` from the setup sequence into V1 | **Accept** |
| 3 | Evidence reuse | Setup artifacts can satisfy named V1 dependencies after a fit check | Treating prior existence as automatic V1 DoD satisfaction | **Accept** |
| 4 | Historical citations | Preserve old bare sprint labels as historical text and resolve them through the alignment matrix | Rewriting old decisions, commits or test names in place | **Accept** |
| 5 | Current prose | Every live instruction uses a qualified sprint ID | Adding another explanatory paragraph while leaving live bare-ID instructions operative | **Accept** |
| 6 | V1 scope | Reconstruct the four V1 sprint packets from the original MMF order and higher-authority scope | Copy the setup `S0…S4` contents into like-numbered V1 sprints | **Accept with conditions** |

### Canonical index and initial state

| Qualified ID | Lifecycle | Initial status after alignment | Meaning |
|---|---|---|---|
| `SETUP-SPIKE-000/S0` | Setup | Preserve evidence-matched historical status | First scaffold iteration; never aliases `V1/S1` |
| `SETUP-SPIKE-000/S1` | Setup | Preserve evidence-matched historical status | Second scaffold iteration; never aliases `V1/S1` or `V1/S2` |
| `SETUP-SPIKE-000/S2` | Setup | Derive from evidence; do not copy its old V1 interpretation | Setup refinement/control iteration |
| `SETUP-SPIKE-000/S3` | Setup | Derive from evidence; do not copy its old V1 interpretation | Setup refinement/control iteration |
| `SETUP-SPIKE-000/S4` | Setup | Derive from evidence; do not copy its old V1 interpretation | Setup completion/readiness iteration |
| `V1/S1` | Delivery | **Not started; not selected** | First working-software increment; exact MMF packet still requires reconstruction and DoR |
| `V1/S2` | Delivery | **Not started; not selected** | Second working-software/reuse increment; depends on accepted `V1/S1` output |
| `V1/S3` | Delivery | **Not started; not selected** | Account-security increment; scope boundary remains a separate decision |
| `V1/S4` | Delivery | **Not started; not selected** | Monetization increment in the historical vision; frozen-scope conflict remains a separate decision |

`Not started` is not the same as `Not Ready`: the first is execution state; the second is a
readiness verdict. Lane A must record both independently. A V1 item may become `Ready candidate`
while its sprint remains `Not started`, and it still does not enter that sprint until selected.

### Lane A application order

1. **Register the parent decision.** Assign the next Register ID to the two namespaces, exact
   qualified IDs and the rule that all `V1/S1…S4` are `Not started`.
2. **Build the alignment matrix.** Resolve every current live `S0…S4` reference to a qualified setup
   ID, a qualified V1 ID, or historical-only context. Do not decide by number alone.
3. **Correct the sequence owner.** Replace the Build Spec's live `V1 = S0 through S4` declaration
   with separate setup and V1 sequences. Preserve its old statement in history rather than silently
   treating it as though it was always correct.
4. **Correct Product tracking.** Update `Modular_PRD` §8 so its live status table shows the setup
   container separately and all four V1 delivery sprints as not started. Product behavior remains
   unchanged by indexing alone.
5. **Propagate under `D-54`.** Update Register, Build Spec and Artifact Inventory in the same pass;
   update Phase Closure only for an actual lifecycle transition. Record explicitly whether any file
   is created or retired.
6. **Reconstruct `V1/S1` and `V1/S2`.** Map original MMF outcomes, normal/revision journey,
   dependencies, data/state contracts, item-specific DoR, defined DoD, owner, effort range and
   completion evidence. Reuse setup artifacts only through an explicit fit row.
7. **Keep `V1/S3` and `V1/S4` unselected.** Resolve their higher-authority account-security and
   monetization scope conflict before declaring either Ready.
8. **Close setup handoffs.** Once each handoff's accepted intent and defined DoD are promoted to its
   canonical owner, terminally disposition it and carry later work outside `docs/handoff/` with a
   return condition.
9. **Verify consumption.** Lane B checks that `V1/S1` exposes one bounded build child and test/data
   contract. Lane C checks only the workflow, security, deployment and monitoring dependencies that
   child actually needs.
10. **Synchronize last.** Run the consistency suite, rebuild Graphify from the governed-doc commit,
    then independently review that no live bare sprint ID remains ambiguous.

### Critical artifact and verification effects

| Artifact | Construction effect | Verification effect |
|---|---|---|
| `Modular_PRD.md` | Supplies MMF and acceptance anchors to the new V1 sprint packets | Must no longer report setup completion as V1 progress |
| Storyboard/story panels | Normal and revision panels map to `V1/S1` or `V1/S2` by behavior | Each selected panel becomes an acceptance example; no mapping by old sprint number |
| UML/data flow | Existing state, metadata, report and exposure models become candidate inputs | Fit check identifies which setup assumptions remain valid for the selected V1 child |
| Requirements traceability | Adds qualified setup-evidence → V1-candidate links | Proves reuse without implying inherited completion |
| Encyclopedia | Defines qualified sprint vocabulary and the distinction between reuse and completion | Review finds no current ambiguous bare-ID definition |
| Cross-references | `D-185`, B-117 and the new Register act anchor the correction | Every changed live sprint claim resolves to one namespace |

### Acceptance evidence for the alignment unit

The alignment unit is complete only when:

- a search of live instructions finds no ambiguous bare `S0…S4` lifecycle statement;
- the canonical matrix contains five setup rows and four V1 rows, without using restated counts as
  a standing control;
- `V1/S1…S4` all show `Not started`, with readiness and selection in separate fields;
- every completed setup artifact retains its original commit/test evidence and names either a V1
  reuse target or `None`;
- `V1/S1` and `V1/S2` each have a distinct MMF boundary and dependency order before either can be
  selected;
- the frozen-source conflict for `V1/S3`/`V1/S4` remains explicit until its own decision; and
- consistency checks, Graphify rebuild and independent Lane B/C consumer reads pass.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | `SETUP-SPIKE-000/S0…S4` as the qualified setup sequence | Phase 1 — canonical alignment |
| Approve | `V1/S1…S4` as the distinct delivery sequence, all Not started | Phase 1 — tracking correction |
| Approve | Preserve setup evidence without inherited V1 completion | Phase 1 — per-artifact fit matrix |
| Approve-with-conditions | `V1/S1` and `V1/S2` readiness packets | Backlog refinement — reconstruct exact MMFs, DoR and defined DoD |
| Defer | `V1/S3` account-security scope | Chief Editor scope-boundary decision |
| Defer | `V1/S4` monetization scope | Higher-authority scope decision |
| Reject | Any new live use of bare `S1`/`S2` as a lifecycle status | Use qualified IDs |
| Reject | Treating any V1 sprint as started or complete | No V1 sprint has been selected or executed |
| Reject | Application construction from this indexing decision | First build requires a Ready, selected and authorized `V1/S1` child |
