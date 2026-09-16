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

## Judge correction — two functional V1 increments inside the next five-slot index, 2026-09-16

This decision supersedes the preceding section's statement that V1 has four delivery sprints. The
Chief Editor confirms the product boundary:

> **V1's functional milestone is reached at the end of its second functional sprint, when the full
> success scenario is usable. V1 has no functional Sprint 3 or Sprint 4.**

The separate indexing requirement remains: the setup programme already occupies global sprint
slots `S0…S4`, so the next five-slot programme window is labelled `S5…S9`. The two approved V1
functional increments map into its first two slots. The remaining three slots are **unallocated
cadence capacity**, not implied V1 feature sprints.

### Parent decision table

| Order | Choice | Accept means | Risk/failure | Recommendation |
|---:|---|---|---|---|
| 1 | **A — continuous programme index** | Setup uses `S0…S4`; the next window uses `S5…S9`; V1 functional Sprint 1 maps to `V1/S5`, Sprint 2 to `V1/S6` | Requires an explicit `No scope allocated` state for `S7…S9` | **Accept — Judge selected** |
| 1 | B — restart numbering inside V1 | Use `V1/S1` and `V1/S2` only | Qualified labels avoid collision, but this rejects the requested continuous five-slot programme format | Reject for this project |
| 1 | C — treat `V1/S5…S9` as five functional sprints | Every cadence slot receives product scope | Reintroduces three sprints the Chief Editor explicitly excluded and delays the V1 milestone | Reject |
| 2 | **A1 — milestone at `V1/S6`** | The complete success scenario is usable and evidenced at the end of the second functional increment | None if the DoD is end-to-end and not merely component-complete | **Accept** |
| 2 | A2 — milestone at `V1/S9` | Empty cadence slots postpone V1 completion | Confuses programme cadence with product scope | Reject |
| 3 | **A3 — reserve `S7…S9` without scope** | They are visible for cadence planning but carry no backlog, DoR, DoD or V1 completion dependency | Later work needs a new decision before allocation | **Accept** |
| 3 | A4 — preload security/monetization into `S7…S9` | Old proposed S3/S4 work returns under new numbers | Violates the stated two-sprint V1 boundary and bypasses frozen-scope decisions | Reject |

### Canonical label and state matrix

| Programme slot | Functional identity | Initial state | Scope/exit meaning |
|---|---|---|---|
| `SETUP-SPIKE-000/S0…S4` | Setup/scaffold iterations | Preserve evidence-matched setup states | Prepare governance, controls, specifications and reusable scaffold; never counts as V1 completion |
| `V1/S5` | Original V1 functional Sprint 1 | **Not Ready; not selected; not started** | First MMF-ordered working-software increment; exact vertical slice must be reconstructed |
| `V1/S6` | Original V1 functional Sprint 2 | **Blocked on `V1/S5`; not selected; not started** | Completes the entire V1 success scenario and produces a fully usable application |
| `V1/S7` | None | **Reserved — no scope allocated** | Cadence capacity only; no V1 backlog item, DoR, DoD or completion dependency |
| `V1/S8` | None | **Reserved — no scope allocated** | Cadence capacity only; no V1 backlog item, DoR, DoD or completion dependency |
| `V1/S9` | None | **Reserved — no scope allocated** | Cadence capacity only; no V1 backlog item, DoR, DoD or completion dependency |

`V1/S7…S9` are labels in the requested five-slot tracking window, but they are not functional V1
sprints. A later version, hardening unit or operational activity may use a reserved slot only after
its own Judge decision assigns scope, owner, DoR and DoD. That later allocation cannot retroactively
change V1's end-of-`S6` functional milestone.

### Item-specific readiness and completion definition

| Item | Definition of Ready | Defined Definition of Done | Selection/completion evidence |
|---|---|---|---|
| `V1/S5` | Smallest first MMF named; normal and revision slice identified; dependencies and reusable setup artifacts fit-checked; data/state boundary, failing test, owner, effort and capacity recorded | The selected vertical slice works through UI, persistence and audit; its failure/revision path is tested; no dead action; traceability reaches the reviewed commit | Judge selects one Ready child; Lane B provides test/build evidence; independent review confirms only the selected slice |
| `V1/S6` | `V1/S5` accepted; every remaining success-scenario step, publication/manual-ready boundary, recovery path, credential dependency and Lane C need identified | Chief Editor can enter the manual URL/Markdown source, pass the article through every required judgment gate, return it for revision, approve it, and obtain WordPress publication or LinkedIn `ManualReady`; board/audit evidence is visible; zero bypasses; tests and independent review pass | End-to-end acceptance examples, persistence/audit records, negative transition/revision tests, publication recovery evidence and Judge acceptance at one reviewed commit |
| `V1/S7…S9` | **N/A while reserved.** A scope-assignment decision is the prerequisite to creating a backlog item | **N/A while reserved.** Do not invent exit criteria for empty capacity | Matrix states `Reserved — no scope allocated`; checks reject accidental backlog or completion dependencies |

The DoD above is defined for planning. It is not satisfied until Lane B builds the selected unit and
the required independent evidence exists. Likewise, `V1/S5` becoming Ready does not select or start
it.

### Lane A step-by-step follow-up

1. Record the superseding decision: V1 has two functional increments; its success milestone is the
   end of `V1/S6`; the earlier four-functional-sprint proposal is withdrawn.
2. Replace the previous proposed `V1/S1…S4` live index with the matrix above. Preserve that proposal
   as handoff history; do not leave it as a second operative sequence.
3. Correct the Build Spec's sequence owner to show setup `S0…S4`, V1 build `S5→S6`, and reserved
   `S7…S9` with no scope. Remove every live dependency that makes V1 completion wait for `S7…S9`.
4. Propagate the sequence fact through the Register, Build Spec and Artifact Inventory in one pass.
   Update Phase Closure only when a real lifecycle state changes.
5. Correct `Modular_PRD` §8 so M-MVP/V1 progress starts at `V1/S5`, the functional milestone is
   `V1/S6`, and old scaffold completion does not appear as V1 progress.
6. Reconstruct the exact `V1/S5` vertical slice from the original MMF dependency order. Apply its
   DoR checklist; do not select it until scope, capacity and stop condition are evidenced.
7. Construct `V1/S6` as the remaining end-to-end success-scenario packet, including normal,
   revision, publication/manual-ready and recovery acceptance examples.
8. Move account-security expansion, multi-account access and monetization out of V1 tracking. Keep
   them in the governed future backlog with their higher-authority return conditions.
9. Update storyboard, story panels, UML/data flow, traceability and Encyclopedia cross-references to
   the functional identity-to-programme-slot mapping. Avoid copying the sequence into artifacts that
   only need a link.
10. Have Lane B test that `V1/S5` exposes one implementable child and that `V1/S6` owns every
    remaining success-scenario obligation. Have Lane C verify only the deployment, security,
    monitoring and recovery dependencies required by those two units.
11. Run the consistency suite and a search for obsolete live `V1/S1…S4`/`V1/S7…S9` scope claims;
    rebuild Graphify after the canonical commit and perform an independent consumer review.
12. Close the related setup handoffs once their DoR/defined-DoD packets and canonical backlog
    destinations are usable; no application build is needed to close those setup transactions.

### Critical artifact map

| Artifact | Construction input | Verification obligation |
|---|---|---|
| `docs/Modular_PRD.md` | MMF, functional requirements and CR-19 success outcome for `V1/S5` and `V1/S6` | §8 shows no V1 progress inherited from setup and no functional S3/S4 |
| Storyboard | Assigns the normal and revision journey across the two functional increments | End-of-`S6` walkthrough covers the complete Chief Editor journey |
| Story panels | Supply concrete UI/action acceptance examples | Each panel maps to `V1/S5`, `V1/S6`, or future backlog — never a reserved slot |
| UML | Defines state, role, judgment-gate and return transitions | Positive and negative transition paths cover the two-sprint boundary |
| Data flow | Defines manual intake, metadata, state, report, publication and recovery data | Persistence, audit integrity, credential and exposure boundaries are evidenced by end `S6` |
| Requirements traceability | Maps setup evidence to reuse checks, then requirements to `V1/S5`/`V1/S6` tests | No requirement maps to reserved `S7…S9`; every success-scenario step reaches evidence |
| Encyclopedia | Defines functional sprint, programme slot, reserved capacity and functional milestone | Readers cannot interpret the five-slot window as five V1 feature sprints |
| Cross-references | Link `D-185`, B-117, the new Register act and canonical sequence | One operative sequence; superseded proposals remain historical only |

### Failure-derived success evidence

| Guaranteed failure | Required success evidence |
|---|---|
| Five tracking slots become five feature sprints | `S7…S9` explicitly carry `Reserved — no scope allocated` and no backlog links |
| Old Sprint 3/4 scope returns under new numbers | Search finds no account-security expansion or monetization assigned to `V1/S7…S9` |
| V1 completion waits until S9 | Register, Build Spec and Product tracker all place the functional milestone at end `V1/S6` |
| Setup code makes V1/S5 appear complete | Reuse rows require fit checks; `V1/S5` remains not started until selected |
| Sprint 2 is component-complete but the app is unusable | `V1/S6` DoD executes CR-19 normal, revision, audit, publication/manual-ready and recovery paths |
| Two sprint identities drift from global numbering | Canonical matrix records original functional identity and programme slot in the same row |

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Continuous programme index: setup `S0…S4`, next window `S5…S9` | Phase 1 — canonical sequence correction |
| Approve | V1 functional Sprint 1 = `V1/S5`; Sprint 2 = `V1/S6` | Phase 1 — MMF packet reconstruction |
| Approve | V1 fully usable milestone at end `V1/S6` | Implementation — end-to-end DoD and acceptance evidence |
| Approve-with-conditions | `V1/S7…S9` retained as reserved cadence slots | Tracking only — no scope, backlog, DoR, DoD or V1 dependency |
| Defer | Account-security expansion, multi-account access and monetization | Governed future backlog outside V1 |
| Reject | Previous proposed four-functional-sprint V1 | Superseded by this Judge clarification |
| Reject | Treating five cadence slots as five V1 feature sprints | Scope control |
| Reject | Starting `V1/S5` from this planning decision | Requires Ready, selected, authorized child and confirmed capacity |

## Lane A response — sprint-namespace conflict escalated under `D-58`, 2026-09-16

**Receipt only for the three preceding sections; propagation withheld.** Before applying the
"Lane A step-by-step follow-up" lists above to the Register, `V1-BUILD-SPEC.md`,
`V1-ARTIFACT-INVENTORY.md` and `Modular_PRD.md` §8, Lane A read those four canonical owners, as
`D-54` propagation requires before writing to any of them. They do not agree with the premise these
three sections are built on.

### The conflict, with exact citations

1. **`V1-BUILD-SPEC.md:16`** already reads: *"v1 = sprints S0 through S4."* This is the live,
   actively-cited sequence — `D-231`, `B-110` and others in this same handoff channel cite
   `V1-BUILD-SPEC.md` §7's standing invariants against it.
2. **`V1-BUILD-SPEC.md:61`**: *"`S0` and `S1` are FROZEN — both completed with artifacts
   (`build-config.ts`/`flags.ts`; `0002_s1_editorial_schema.sql`) and both were succeeded."* `S1` is
   the real data-model migration — schema, triggers, `REVOKE UPDATE/DELETE` — not scaffold. `S2` is
   *"the current scope,"* held under `D-171`, not unstarted. `S3` is Board/filters/audit log
   (`V1-BUILD-SPEC.md:278`); `S4` is Publication and fallback (`:282`) — neither is account
   security or monetization.
3. **Register `D-185`** (§5.14e10, Chief Editor/Judge ruling, 2026-09-03) already named the
   historical zero-to-one lineage root `SETUP-SPIKE-000` and gives its own reason for that exact
   name: *"Not `R0`/`S0` — both already have governed meanings in the sprint plan; a reused label
   would collide."* `D-185` explicitly refused the `S0` alias for this reason.

The three preceding sections assert the opposite of all three: that `V1-BUILD-SPEC.md`'s `S0…S4` is
"scaffold-era planning" outside V1, that `SETUP-SPIKE-000` has its own internal `S0…S4`
sub-iterations, and that no V1 sprint has started. That reintroduces the exact `S0`/label collision
`D-185` was written to avoid, and it recharacterizes `S1`'s already-applied, already-frozen database
migration as non-V1 setup evidence.

### What this is, and is not

This is not a claim that the three sections are fabricated, or that the Chief Editor cannot revise
V1's sprint plan. It is the narrower, falsifiable observation that **their premise does not match
the current canonical Build Spec and Register**, and `D-54` requires reading those owners before
writing to them — not after. Per this channel's own `D-58` rule: *"For a genuine derived-tier
conflict... the Register decides, and if the Register is silent, escalate — that silence is itself
the finding."* The Register is not silent here; `D-185` already speaks to the exact collision, in
the opposite direction from these three sections.

### What Lane A did and did not do

Did not touch `docs/v1/V1-DECISION-REGISTER.md`, `docs/v1/V1-BUILD-SPEC.md`,
`docs/v1/V1-ARTIFACT-INVENTORY.md`, or `docs/Modular_PRD.md`. No Register ID was assigned. No
sprint-index alignment matrix was written. This entry's own header `Status`/`Resolution` are left
unchanged, since resolving this is the Judge's act, not Lane A's.

### What would resolve this

One explicit Judge statement, at the next round in this same entry, doing one of:

- **Confirm the existing Build Spec/Register are correct** and withdraw the sprint-renumbering
  premise in the three preceding sections; the DoR/DoD vocabulary distinction they introduce can
  still be adopted on its own, applied to the *existing* `S0…S4` sequence rather than a new one; or
- **Confirm the three sections are the intended correction**, explicitly naming that `D-185` is
  being amended (not merely reused) and that `S0`/`S1`'s existing Build Spec status is being
  reclassified from V1-frozen to pre-V1 setup evidence — stating this as a deliberate revision, not
  an inference from the word "spike."

Either is a normal, resolvable Register act. Lane A does not pick between them.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | DoR-eligibility / DoD-defined / DoD-satisfied / sprint-selection vocabulary distinction, as a reusable framework | Phase 1 — adoptable independent of the sprint-renumbering question |
| Reject | Applying the "Lane A step-by-step follow-up" lists above to Register/Build Spec/Inventory/Modular_PRD as written | Contradicts `D-185` and `V1-BUILD-SPEC.md:16/61/278/282` |
| Defer | Whether `SETUP-SPIKE-000` subsumes the existing `S0…S4`, or the existing `S0…S4` remains V1's real sequence | Judge arbitration under `D-58`; Register is not silent and must be reconciled explicitly, not overwritten |
| Reject | Treating this escalation as a rejection of the Chief Editor's authority to revise the sprint plan | Only the specific undocumented premise is flagged; the decision remains the Judge's |

## Lane B review — V1 parent, setup-spike child and one global `S0…S6` index, 2026-09-16

The Judge's latest clarification resolves Lane A's `D-58` escalation without discarding either the
current V1 evidence or `D-185`'s no-alias rule:

```text
V1 — programme/version parent; first usable application is its functional outcome
├─ SETUP-SPIKE-000 — setup/readiness child container
│  └─ global sprint slots S0 → S1 → S2 → S3 → S4
└─ M-MVP application build
   └─ global sprint slots S5 → S6
      └─ end S6: V1 success scenario fully usable
```

`SETUP-SPIKE-000` remains a named container and is **not renamed to `S0`**. Its child iterations use
the existing global `S0…S4` labels. This preserves `D-185`'s collision safeguard while changing the
relationship that was unclear: the spike is inside V1 because it prepares V1's first application
build. Its objective is to make that build possible; its completion is not evidence that the
application itself is built.

The earlier proposed `V1/S7…S9` reserved slots are withdrawn. The accepted global index for this
scope ends at `S6`: setup `S0…S4`, application `S5…S6`.

### Parent-first decision table

| Order | Choice | Accept means | Guaranteed failure | Recommendation |
|---:|---|---|---|---|
| 1 | **A — V1 parent with two child stages** | `SETUP-SPIKE-000/S0…S4` prepares `V1/S5…S6`; one global index, one V1 outcome | None if setup completion and application completion remain distinct | **Accept — matches Judge clarification** |
| 1 | B — spike outside/parallel to V1 | Setup evidence has no owned relationship to the version it prepares | Reopens the lineage ambiguity and duplicates version tracking | Reject |
| 1 | C — spike includes S5/S6 construction | The setup transaction stays open until the app is built | Re-conflates handoff readiness DoD with application DoD and prevents setup backlog closure | Reject |
| 2 | **A1 — preserve S0/S1 facts** | Existing config/schema/test evidence stays Done/Frozen inside the V1 setup child, with its documented limitations | None; evidence is preserved without calling the application usable | **Accept** |
| 2 | A2 — reset S0/S1 to Not started | Completed commits and tests are discarded as if they never occurred | Audit history and dependency reuse become false | Reject |
| 3 | **A3 — atomic S2/S3/S4 scope migration** | Every current Product requirement, hold and acceptance obligation moves to S5 or S6 before the old allocation retires | None if the migration matrix is complete and independently checked | **Accept** |
| 3 | A4 — simply relabel S2/S3/S4 as setup | Their current Line-assignment, Board and Publication work silently disappears or is duplicated | Missing requirements, double ownership and false closure | Reject |
| 4 | **A5 — V1 functional completion at S6** | S5 is the first selected vertical increment; S6 completes the full success scenario | None if S6 has end-to-end acceptance evidence | **Accept** |
| 4 | A6 — retain S7/S9 tracking | Empty slots remain after the accepted V1 outcome | A second sequence survives with no business purpose | Reject |

### What remains unclear and must be answered in the alignment unit

| Gap | Why it matters | Required Lane A answer |
|---|---|---|
| `S2…S4` setup content | Their current canonical contents are Product construction, not setup tasks | Name the actual remaining setup/refinement outcomes for each slot, or mark a slot unused; never invent work to fill a number |
| Product-scope migration | Current S2 = Line/four-eyes, S3 = Board/audit, S4 = Publication/fallback | Map every FR/AC/NFR, hold and dependency to S5 or S6 with no duplicates or omissions |
| `D-171` hold target | The hold is attached to old S2-sensitive T5/T6 work | State which S5/S6 child inherits the hold and its return condition; a renumbering cannot release it |
| First-build boundary | “First build app” could mean first vertical slice or the complete usable app | Record S5 as first working increment and S6 as the complete CR-19 outcome, unless the Judge supplies a different split |
| Spike closure | The spike goal supports the app, but its own worklog must close before construction | Define spike DoD as canonical readiness and handoff closure, not S5/S6 implementation |
| Programme/ART terminology | External framework labels can imply roles and ceremonies not specified here | Treat it as this project's V1 programme container and global sprint index; import no additional framework behavior by name |

### Required scope-migration matrix

Lane A must write one canonical matrix in the Build Spec. Each source row needs an exact target or
an explicit setup-only disposition:

| Current source | Facts that must survive | Target decision required |
|---|---|---|
| `S0` Foundation/config | Config values, flags, toolchain and their evidence | `SETUP-SPIKE-000/S0`, completed/frozen; list reusable S5/S6 inputs |
| `S1` Data model/sequence guard | `0002`, trigger tests, append-only/audit limits and `DEP-05` qualification | `SETUP-SPIKE-000/S1`, completed/frozen substrate; list revalidation needed by S5/S6 |
| `S2` Line assignment/four-eyes | FR-04/FR-05, AC-05…AC-08, target order, `D-171` hold and return condition | One or more bounded S5/S6 children; keep held until fresh authorization |
| `S3` Board/filter/audit | FR-08, NFR-06, AC-13 and visibility obligations | S5 or S6 by MMF dependency; no mapping by number |
| `S4` Publication/fallback | FR-09/FR-10, NFR-05/NFR-07/SEC-02, AC-14…AC-16, credential and recovery dependencies | S6 unless a separately justified S5 vertical slice needs a bounded manual-ready outcome |
| B-084 Product-readiness chain | Manual intake, normal/revision journey, state/metadata/report, roles and config semantics | DoR/defined-DoD inputs to S5/S6; handoffs close after canonical promotion and consumer confirmation |
| B-102/B-115 | Intent→Build→DevOps ownership and evidence contract | Shared S5/S6 execution contract; no Product scope created |
| B-116/B-117 | Return/audit integrity and backlog lifecycle controls | Setup-spike closure controls; not application functionality |

This matrix is the critical anti-loss artifact. A heading change without it is guaranteed to pass
prose review while dropping or duplicating construction obligations.

### Definitions of Ready and Done at each boundary

| Unit | Definition of Ready | Definition of Done |
|---|---|---|
| `SETUP-SPIKE-000` | Parent V1 and global index decided; canonical owners identified; open handoffs grouped parent-first | Governance sources aligned; S2–S4 migration matrix complete; S5/S6 DoR and DoD defined; future items promoted; setup handoffs terminally dispositioned; consistency and independent consumer review pass |
| `V1/S5` | Exact first MMF vertical slice, acceptance examples, data/state contract, inherited hold status, capacity, owner and failing proof recorded | Selected slice works through UI, persistence and audit with its revision/failure proof; only authorized scope built; reviewed commit accepted |
| `V1/S6` | S5 accepted; every remaining CR-19 journey step, Board/audit, publication/manual-ready, recovery, credential and Lane C dependency identified | Chief Editor performs the complete normal and revision journey; required gates and audit hold; WordPress or LinkedIn `ManualReady` outcome works; recovery and negative paths pass; Judge accepts V1 functional outcome |

The setup DoD is **satisfied before application construction begins**. S5/S6 DoDs are merely
defined at that point and are satisfied only by later Lane B construction and independent evidence.

### Lane A follow-up — highest parent first

1. Record one superseding Register act: V1 is the parent; `SETUP-SPIKE-000` is its setup/readiness
   child over global S0–S4; application construction is S5–S6; functional V1 completes at S6.
2. Amend `D-185` narrowly: preserve its name, Git lineage, evidence and no-`S0` alias; change the
   relationship from an unplaced historical root to the named V1 setup child. State exactly which
   earlier scope-limit sentence is superseded.
3. Withdraw the earlier B-117 proposals that placed the spike outside V1, gave V1 four functional
   sprints, or retained S7–S9. Preserve them as historical analysis, not operative alternatives.
4. Create the scope-migration matrix above before changing live sprint headings. Move facts, holds
   and dependencies; never copy them into both old and new live rows.
5. Define the remaining setup outcomes for S2–S4 from accepted governance work. If no distinct
   outcome exists for a slot, mark it unused rather than manufacture scope.
6. Rewrite the Build Spec's live sequence and per-sprint sections around the global S0→S6 index.
   Preserve S0/S1 evidence and move current S2–S4 Product packets into S5/S6.
7. Propagate in the same pass to the Register, Build Spec and Artifact Inventory. Correct
   `Modular_PRD` §7.4/§8 milestones and status rows; update Phase Closure only for real lifecycle
   changes.
8. Update storyboard/story panels, UML/data flow and traceability by requirement/MMF identity, not
   by old sprint number. Add links rather than duplicate the sequence where a link is sufficient.
9. Define Encyclopedia vocabulary for V1 parent, setup child, global sprint slot, readiness DoD and
   application DoD. Retire the separate-namespace interpretation explicitly.
10. Promote non-build and post-V1 items into their canonical Governance/docs backlog owner, then
    close their handoffs with return conditions. Do not carry them into S5/S6 to empty the queue.
11. Lane B independently confirms every old S2–S4 Product obligation has one S5/S6 target and that
    S5 exposes one implementable child. Lane C confirms only the workflow/security/deployment/
    monitoring dependencies those targets expose.
12. Run the consistency suite, rebuild Graphify after the governed-doc commit, query the new parent
    and migration paths, and independently confirm no live competing sprint sequence remains.

### Cross-artifact construction and verification impact

| Artifact | Required correction | Completion evidence |
|---|---|---|
| `Modular_PRD.md` | V1 parent; setup milestones S0/S1 evidence retained; Product milestones remapped to S5/S6 | §7.4 and §8 agree; no Product requirement disappears or maps twice |
| Storyboard/story panels | Map normal/revision UI actions to S5/S6 MMFs | End-to-end S6 walkthrough covers every accepted panel and friction point |
| UML/data flow | Preserve state, judgment, metadata/report and publication boundaries while changing scheduling | Model elements trace to requirements and tests, not retired sprint labels |
| Requirements traceability | Old S2–S4 source → S5/S6 target → test/evidence, plus setup evidence → reuse check | Every source obligation has exactly one live target or explicit non-build disposition |
| Encyclopedia | Normalize V1/programme, setup child, global slot and DoR/DoD meanings | No entry describes the spike as parallel to V1 or S0 as its alias |
| Cross-references | Link `D-185`, the superseding Register act, B-117 and the canonical migration matrix | One operative sequence is reachable from every live owner |
| Graphify | Rebuild after Lane A's governed-doc commit | Query/path shows `V1 → SETUP-SPIKE-000 → S0…S4` and `V1 → S5 → S6`; no competing live path |

### Failure-derived success criteria

| Guaranteed failure | Required success evidence |
|---|---|
| Spike placed under V1 only in prose | Register, Build Spec, Product tracker and graph expose the same parent edge |
| S2–S4 headings become setup while their Product scope vanishes | Migration matrix gives every FR/AC/NFR/hold exactly one S5/S6 target |
| Old and new sprint rows both remain operative | Old rows are historical/superseded; one live sequence drives work orders |
| `D-171` disappears during renumbering | Its target and return condition survive on the receiving S5/S6 child |
| Spike stays open until the app is built | Setup DoD closes on readiness artifacts and handoff disposition before S5 starts |
| S5 starts because the hierarchy is approved | Separate DoR, capacity, Judge selection, lane state and bounded authorization exist |
| Graphify is rebuilt from handoff text only | Rebuild occurs after canonical propagation and exposes the governed hierarchy |

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | V1 as parent of `SETUP-SPIKE-000/S0…S4` and application `S5…S6` | Phase 1 — superseding Register act and canonical alignment |
| Approve | Preserve S0/S1 completion as V1 setup evidence | Phase 1 — evidence/reuse mapping |
| Approve-with-conditions | Reclassify S2–S4 as setup slots | Phase 1 — migrate every current Product obligation and hold to S5/S6 first |
| Approve-with-conditions | Close the setup spike before construction | Phase 1 — canonical S5/S6 readiness packets and terminal handoff dispositions |
| Defer | Exact S5/S6 split of old S2–S4 Product scope | Backlog refinement — MMF dependency and acceptance-path mapping |
| Reject | Spike parallel to or outside V1 | Superseded hierarchy |
| Reject | Spike containing S5/S6 implementation | Preserve setup DoD versus application DoD |
| Reject | Retaining proposed S7–S9 slots | One global index for this scope ends at S6 |
| Reject | Starting application construction from this clarification | S5 still needs DoR, capacity, selection and bounded authorization |

## Judge clarification — retain the V1 minimum and transfer advanced scope to V2 tracking, 2026-09-16

The three named families cannot move to V2 wholesale. The frozen V1 Project PRD requires a full
review sequence, a visible/filterable board with transition evidence, and **WordPress publication
or LinkedIn-ready delivery**. Removing Line/four-eyes, Board/audit and Publication/fallback in full
would leave no testable V1 success scenario.

The safe alignment is a **minimum/expansion split**:

- V1/S5–S6 retains the smallest behavior that satisfies the frozen customer outcome;
- advanced route, visibility and publishing capabilities become V2 candidates; and
- V2 tracking is recorded in the living Product backlog until V2 is formally opened. No
  `docs/v2/` operative set is created by this refinement act.

### Parent-first decision tree

| Order | Choice | Accept means | Guaranteed failure | Recommendation |
|---:|---|---|---|---|
| 1 | **A — split each requirement family** | Keep the customer-anchored V1 minimum; transfer advanced derived behavior to V2 candidates | None if every requirement and acceptance case has exactly one live target | **Accept** |
| 1 | B — transfer all three families to V2 | V1 has intake/drafting but no governed approval, usable board/audit or delivery outcome | CR-19 and the frozen MVP checkboxes cannot pass | Reject |
| 1 | C — keep every current S2–S4 detail in V1 | V1/S5–S6 absorbs production, fallout/GRC, advanced observability and automated multi-channel publishing | Two-sprint V1 becomes unbounded and remains blocked on optional/external dependencies | Reject |
| 2 | **A1 — LinkedIn `ManualReady` is the V1 delivery channel** | Approved content is formatted and recorded as ready for manual LinkedIn delivery | Satisfies the frozen “WordPress **or** LinkedIn-ready” outcome and the Judge's selected first channel | **Accept** |
| 2 | A2 — WordPress automation is mandatory in V1 | V1 waits for credentials, privileged deployment, retry scheduling and recovery mechanics | External access blocks the manual-ready M-MVP learning path | Reject |
| 3 | **A3 — V2 candidate tracking, not V2 opening** | Transferred items live in the Product backlog with target `V2 candidate`, owner and Ready-when condition | None; V1 remains active and V2 remains unopened | **Accept** |
| 3 | A4 — create `docs/v2/` now | The transfer itself opens V2 and freezes V1 tracking before V1 is built | Violates the version succession/freeze rule | Reject |

### Cross-reference disposition matrix

#### Line/four-eyes

| Requirement/evidence | V1/S5–S6 minimum | V2 candidate transfer | Reason |
|---|---|---|---|
| Five sequential editorial gates; `FR-01…FR-03`, `FR-06`, `FR-07`; `AC-01…AC-04`, `AC-09…AC-12` | **Keep** | — | Frozen V1 requires every gate and transition to be completed and logged; revision is a required user journey |
| `ROUTE-PROD-1` one required T5 reviewer, sealed review, human Chief Editor at T6; structural no-bypass/refusal proof | **Keep as the one V1 route** | — | Smallest route that passes every judgment node and produces an approvable record |
| `AC-05a` production-route single-reviewer case and `AC-06a` refusal of an agent at T6 | **Keep, subject to `D-171` resolution and fresh authorization** | — | Minimum enforceable four-eyes boundary for the selected route |
| Fallout/GRC parallel T5 reviewers and bundle join (`AC-05b`) | — | **Transfer** | Additional route/cardinality, not needed for the first normal production journey |
| Blind preliminary disposition, disagreement preservation (`AC-07a`, `AC-07b`) | — | **Transfer** | Higher assurance mechanism beyond the minimum sequential route |
| Route-scoped partial/full T5 rerun (`AC-08a`) | Keep basic revision through `FR-06`/`AC-09`/`AC-10` | **Transfer advanced scoped rerun** | V1 must revise; it need not optimize parallel-review reruns |
| `D-171` hold | **Follows the retained V1 route until its exact minimum contract is accepted** | Advanced limbs retain their own V2 return conditions | Renumbering or scope split cannot silently release a safety hold |

#### Board/audit

| Requirement/evidence | V1/S5–S6 minimum | V2 candidate transfer | Reason |
|---|---|---|---|
| Board lists all articles and current state | **Keep** | — | Frozen V1 success scenario requires the team to see the board |
| Filters for state, topic and category | **Keep** | — | These three dimensions are named by the frozen Project PRD |
| Basic transition view showing who, when, why; append-only evidence (`FR-07`, `AC-11`, `AC-12`) | **Keep** | — | Frozen V1 says every transition is visible and zero bypass must be evidenced |
| Current `FR-08`/`AC-13` Line filter, where it exceeds the three customer-named dimensions | — | **Transfer the Line-filter expansion** | Line filtering is derived scope; it cannot hold the base board hostage |
| T6→T5 return-rate view, intent-code analytics and advanced reviewer-performance views | — | **Transfer** | Operational learning/analytics beyond the first usable board |
| Business-continuity observability surface and advanced absence/archival presentation | Retain only any disclosure needed to avoid false current evidence | **Transfer the richer dashboard/monitoring surface** | Monitoring expansion is distinct from the basic article audit trail |

Lane A must split `FR-08`/`AC-13`; it cannot mark the whole pair V2 because the frozen board and
three filters remain V1. The V1 acceptance example needs a new governed row covering precisely
state/topic/category and an explicit no-match state.

#### Publication/fallback

| Requirement/evidence | V1/S5–S6 minimum | V2 candidate transfer | Reason |
|---|---|---|---|
| `FR-09` LinkedIn branch: generate formatted content and set one LinkedIn target `ManualReady` on approval | **Keep** | — | Meets the frozen OR-condition and the Judge's selected manual-ready channel |
| Per-target evidence for the selected LinkedIn target; delivery cannot mutate editorial judgment (`AC-14a`) | **Keep** | — | Manual-ready output must be attributable and must consume the approved record unchanged |
| WordPress automated publication (`AC-14`) | — | **Transfer** | Requires credentials and privileged integration that the manual-ready V1 path avoids |
| Simultaneous multi-target partial outcome (`AC-15`) | — | **Transfer** | Depends on WordPress plus LinkedIn and is unnecessary for a single selected V1 channel |
| Bounded retry/auto-fallback scheduler (`NFR-05`) | — | **Transfer with automated WordPress** | No automation attempt exists in the V1 manual-ready route |
| Manual-publish live-URL confirmation (`FR-10`, `AC-16`) | — | **Transfer** | V1 ends at `ManualReady`; confirming external publication is a later operational capability |
| Publication credentials and isolation (`NFR-07`, `SEC-02`) | Keep the universal rule that no secret enters client code | **Transfer the WordPress credential mechanism and its tests** | The V1 LinkedIn manual-ready path holds no external publishing credential |
| Fallout/GRC external-acceptance delivery block (`AC-16a`) | — | **Transfer with the advanced route family** | Not part of `ROUTE-PROD-1` |

Current `FR-09` has two branches in one row. Lane A must retain and test the `ManualReady` branch in
V1 and mark the WordPress branch `[V1→V2]` or split it into a V2 candidate requirement according to
the existing version-marker rule. V1 also needs an explicit acceptance example for “approval sets
the LinkedIn target to `ManualReady` with formatted content”; `AC-14` currently tests WordPress and
does not cover that outcome.

### V2 transfer-record contract

Do not create a V2 sprint number or `docs/v2/` file yet. For every transferred unit, the living
Product backlog must record:

| Field | Required value |
|---|---|
| Stable identity | Existing requirement/AC identity or a new non-colliding candidate ID assigned by Lane A |
| Source version | V1 refinement |
| Target | `V2 candidate` — not `V2 selected`, `V2 Ready` or an invented sprint |
| Business outcome | What additional value the capability provides beyond V1's minimum route |
| Dependency | V1 evidence or external access required before refinement |
| Ready-when | Observable condition that permits V2 refinement |
| Return owner | Actor who re-enters it through the governed promotion path |
| V1 non-dependency | Explicit proof V1/S6 can satisfy CR-19 without it |
| Traceability | Source FR/AC/story/model element and the V1 replacement or retained minimum |

When V2 formally opens, Lane A must first settle `Modular_PRD` §8's existing freeze/supersession
question. Only then are V2 tracking files created and the candidate rows promoted.

### Definitions of Ready and Done after the split

| Unit | Definition of Ready | Definition of Done |
|---|---|---|
| V1 retained minimum | Each retained requirement has a customer anchor, S5/S6 owner, normal/revision acceptance example, data/state contract, capacity and test method; every transferred limb has a V2 candidate record | `ROUTE-PROD-1` completes every required gate; basic board and state/topic/category filters work; who/when/why audit is visible; approved content becomes LinkedIn `ManualReady`; revision and negative/bypass proofs pass |
| V2 candidate packet | Stable identity, additional outcome, dependency, Ready-when, return owner and V1 non-dependency recorded | **Planning DoD only:** candidate is traceable and cannot be mistaken for authorized V2 work; implementation DoD is defined when V2 opens |
| Alignment/handoff unit | All mixed requirements are split without loss; canonical owners and version markers agree | Lane B consumer read finds every old S2–S4 obligation exactly once in V1 retained scope, V2 candidate scope or explicit retirement; Lane C dependencies are separated by version |

### Lane A step-by-step follow-up

1. Record the parent decision: V1 retains the minimum normal route, basic board/audit and LinkedIn
   `ManualReady`; advanced capabilities transfer to `V2 candidate` tracking.
2. Freeze the customer anchor before moving details: CR-19 and the frozen MVP checkboxes do not
   change. Document that LinkedIn-ready satisfies the publication OR-condition for V1.
3. Build a requirement-by-requirement migration sheet using the three matrices above. Include FR,
   AC, NFR, SEC, story, UI panel, UML/data-flow element, dependency and test IDs.
4. Narrow the V1 Line contract to `ROUTE-PROD-1`. Keep `D-171` on the retained minimum until the
   exact role/executor contract receives fresh authorization. Transfer advanced route mechanics
   with separate return conditions.
5. Split `FR-08`/`AC-13` into the V1 board with state/topic/category filters and the V2 Line/
   analytics expansion. Add a precise V1 no-match acceptance example.
6. Split `FR-09`: retain LinkedIn `ManualReady` with formatted content and immutable approved input;
   transfer WordPress, multi-target, retry/fallback and external confirmation. Add the missing V1
   ManualReady acceptance example.
7. Keep the basic `FR-07` transition audit in V1. Separate richer operational dashboards from the
   audit record itself so deferring a dashboard cannot defer evidence integrity.
8. Mark changed living-spec sections with the required version transition marker. Do not modify the
   frozen Project PRD or Charter and do not create `docs/v2/` yet.
9. Propagate the scope/sequence facts through the Register, Build Spec and Artifact Inventory in one
   pass. Update `Modular_PRD` requirements, §7.4 and §8; update Phase Closure only for a real state
   transition.
10. Update storyboard and story panels: one V1 normal path, one V1 revision path, LinkedIn
    ManualReady finish; move fallout/GRC and automated/multi-target publication panels to V2
    candidate references.
11. Update UML/data flow and traceability so the V1 diagram contains only required actors, states
    and integrations while V2 candidate edges remain visibly future. Preserve database fields that
    already exist; scope transfer does not authorize destructive schema rollback.
12. Update Encyclopedia and cross-references with “V1 minimum,” “V2 candidate,” “version opening,”
    and “manual-ready delivery.” Link to the canonical migration sheet rather than restating lists.
13. Have Lane B verify one buildable S5/S6 packet, the new minimum acceptance examples and the
    one-target data path. Have Lane C verify that V1 has no WordPress credential/deployment
    dependency and that V2 automation dependencies remain isolated.
14. Run consistency checks, rebuild Graphify after the canonical commit, and query every moved
    requirement for exactly one live version destination.
15. Terminally disposition the related setup handoffs once canonical promotion and independent
    consumer review are complete; future V2 work remains in the Product backlog, not `docs/handoff/`.

### Critical artifact impact

| Artifact | V1 correction | V2 candidate tracking | Verification |
|---|---|---|---|
| `Modular_PRD.md` | Narrow mixed FR/AC rows while preserving CR anchors; S5/S6 milestones own the retained minimum | Living backlog rows with Ready-when; V2 remains unopened | No CR-19 limb is lost; each transferred limb has V1 non-dependency evidence |
| Storyboard | Normal and revision `ROUTE-PROD-1` ending at LinkedIn `ManualReady` | Fallout/GRC and automated/multi-target journeys linked as future | Chief Editor walkthrough completes V1 without a V2 dependency |
| Story panels | V1 panels for one T5 review, T6 decision, basic board/audit and manual-ready output | Advanced review, dashboard and publication panels carry V2-candidate links | Every action panel maps to one version destination |
| UML | V1 nodes/edges for the minimum route and manual-ready delivery | Future route/integration edges visually separated | No future node is required for a V1 transition to complete |
| Data flow | V1 one-target manual-ready record, transition audit and basic board query | WordPress credentials/jobs, retries, multi-target and advanced analytics | Data contract and negative tests prove no hidden external dependency in V1 |
| Requirements traceability | CR → retained V1 requirement → S5/S6 → test | Advanced derived requirement → V2 candidate → Ready-when | Exactly-one destination; no orphan and no duplicate live obligation |
| Encyclopedia | Define V1 minimum, V2 candidate and ManualReady | Define that candidate tracking does not open V2 | Vocabulary review finds no “deferred = authorized” reading |
| Cross-references | New Register act, B-117 and canonical migration sheet | Backlog candidate IDs and future promotion path | One canonical list; other artifacts link rather than recount |
| Graphify | Rebuild after canonical edits | V2 candidates represented as future/backlog nodes, not operative sprint nodes | Queries show V1 path reaches CR-19 without traversing V2 |

### Failure-derived success criteria

| Guaranteed failure | Required success evidence |
|---|---|
| Whole families move to V2 | V1 still has one enforceable review route, basic board/audit and LinkedIn ManualReady acceptance tests |
| Optional advanced behavior blocks V1 | S5/S6 dependency list contains no fallout/GRC, WordPress credential, retry scheduler or multi-target requirement |
| Scope is duplicated across versions | Migration sheet gives every limb exactly one live destination and one version marker |
| V2 is opened by backlog transfer | No `docs/v2/`; `Modular_PRD` still says V2 not opened; candidates have no sprint or authorization |
| ManualReady is claimed but untested | A dedicated V1 AC asserts formatted LinkedIn content and target status `ManualReady` after approval |
| Audit is mistaken for an advanced dashboard | FR-07/AC-11/AC-12 remain V1 even when analytics and monitoring move |
| `D-171` is bypassed by narrowing scope | Retained production-route contract cites the hold and requires fresh authorization |
| Graph looks clean while requirements vanished | Graph query plus traceability audit finds every source requirement in V1, V2 candidate or explicit retirement |

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Minimum/expansion split rather than wholesale V2 transfer | Phase 1 — canonical migration matrix |
| Approve | V1 retains `ROUTE-PROD-1`, basic board/audit and LinkedIn `ManualReady` | V1/S5–S6 readiness packet |
| Approve | Advanced route, analytics and automated publishing become V2 candidates | Living Product backlog — V2 unopened |
| Approve-with-conditions | Narrow `FR-08`/`AC-13` and `FR-09` | Add explicit V1 three-filter and LinkedIn ManualReady acceptance examples |
| Approve-with-conditions | Retained Line/four-eyes minimum | `D-171` continues until the narrowed contract receives fresh authorization |
| Defer | V2 sprint assignment and implementation DoDs | V2 opening and freeze/supersession decision |
| Reject | Moving all Line/four-eyes, Board/audit and Publication/fallback to V2 | Would make V1's frozen success scenario impossible |
| Reject | Creating `docs/v2/` from this refinement decision | Candidate tracking is not version opening |
| Reject | Starting V1 construction from this split | S5 still needs complete DoR, capacity, Judge selection and bounded authorization |

## Lane A response — second numbering collision found; propagation withheld again, 2026-09-16

**Receipt only; still no Register/Build Spec/Inventory/Modular_PRD edit.** The two preceding
sections resolve the first `D-58` escalation well — `SETUP-SPIKE-000` keeps its name and reuses the
existing `S0…S4` labels rather than aliasing them, and the minimum/expansion split avoids silently
discarding S2–S4's real requirements. Before applying either section's "Lane A follow-up," Lane A
read `V1-BUILD-SPEC.md` for the `S5`/`S6` labels both sections now propose to reuse for "V1's
application build" and "V1's functional completion."

### The second collision, with exact citations

**`V1-BUILD-SPEC.md:16`**: *"v1 = sprints S0 through S4. `S5` (Line 3, degraded mode) and `S6`
(auth lockdown) are beyond v1."* This is not a placeholder — both have real, cited requirements:

- **`S5`** (`V1-BUILD-SPEC.md:357`): Line 3 degraded-mode roster, `FR-11`, `D-57`/`D-167`/`D-168`,
  condition `C-13`'s BCP observability surface. Explicitly: *"`FR-11` is not built in v1."*
- **`S6`** (`:358`): auth and scoped RLS, `SEC-03`, gated on `OD1`–`OD3`, *"cannot be called done
  while they are open."*

Both preceding sections propose `V1/S5` = first application increment and `V1/S6` = V1's complete
success-scenario milestone — the opposite of "beyond v1," reusing labels that already name different,
real, currently-undone work. This is the same collision class as the first escalation, one index
step later: a numbering proposal made without reading `V1-BUILD-SPEC.md`'s current content.

### An alternative worth naming before any relabeling: no new numbers may be needed

The "V1 minimum" content the second section derives independently — `ROUTE-PROD-1` (one required
T5 reviewer, sealed review, human T6), a basic board with state/topic/category filters, and LinkedIn
`ManualReady` — maps closely onto the **existing** `S2` (Line assignment/four-eyes), `S3`
(Board/filters/audit) and `S4` (Publication/fallback) sprint definitions already in
`V1-BUILD-SPEC.md`. If that mapping holds, the actual correction may be narrower than introducing
`S5`/`S6` at all: **narrow S2/S3/S4's existing acceptance scope to the stated V1 minimum, move the
named advanced ACs (fallout/GRC, multi-target publishing, retry scheduler, etc.) to `V2 candidate`
tracking, and keep the existing sprint identities.** This would avoid inventing any label that must
be checked against six-and-counting already-occupied slots. Lane A does not decide this; it is
offered as a materially smaller-risk option for the Judge to weigh against the `S5`/`S6` proposal.

### What Lane A did and did not do

Did not touch `docs/v1/V1-DECISION-REGISTER.md`, `docs/v1/V1-BUILD-SPEC.md`,
`docs/v1/V1-ARTIFACT-INVENTORY.md`, or `docs/Modular_PRD.md`. No Register ID assigned. This entry's
header is unchanged.

### What would resolve this

At the next round in this entry, one explicit choice:

- **Reuse `S2`/`S3`/`S4`** for the V1-minimum/V2-candidate split (no new sprint numbers), or
- **Confirm `S5`/`S6` are being deliberately repurposed**, explicitly stating that their current
  Line-3/auth-RLS content is retargeted to different slots (name which ones) or demoted to
  candidate/backlog status itself — not inferred from silence.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Minimum/expansion split principle (V1 keeps the frozen-scenario minimum; advanced limbs become V2 candidates) | Phase 1 — sound regardless of which labels carry it |
| Reject | Applying `V1/S5`/`V1/S6` as written | Collides with `V1-BUILD-SPEC.md:16/357/358`'s existing Line-3/auth-RLS content |
| Defer | Which sprint identities carry the V1 minimum | Judge choice: reuse existing `S2`–`S4`, or deliberately repurpose `S5`/`S6` with their current content explicitly relocated |
| Reject | Treating this as rejecting the minimum/expansion split itself | Only the label choice is unresolved; the split logic is accepted |

## Lane B synthesis — what 117 handoffs reveal about the missing MMF control, 2026-09-16

### Clarified task

Review the complete handoff history as evidence of recurring failure, not as 117 separate Product
requirements. Identify the smallest missing control that lets Lane A place the V1 and V2 MMFs once,
propagate them to the construction and verification artifacts, and terminally disposition the
handoffs that supplied the evidence. Do not build, open V2 or create another backlog.

### What the ledger proves

At this review point the channel contains **117 entries: 116 B-series and one C-series**. The live
closure check classifies them as 63 `Verified`, seven `Superseded`, six `Deferred`, 27 `Applied`,
ten `Open` and four `turn-report`. These are lifecycle classes, not Product priorities. In
particular, `Applied` is deliberately non-terminal and a turn report is evidence rather than a
defect.

The history falls into five useful evidence waves:

| Wave | Representative entries | What the project learned | Residual used by the MMF correction |
|---|---|---|---|
| Foundation and source authority | B-001–B-010 | A decision, source correction, check and phase claim are different facts | Every MMF fact needs one canonical owner and one propagation rule |
| Lane, lifecycle and checker controls | B-011–B-060 | `Answered`, `Applied`, `Verified`, lane state, Graph currency and green checks are not interchangeable | Readiness and completion evidence must be typed and independently reviewed |
| Editorial route and ontology | B-061–B-077 | Historical T5/T6, decided target roles, state, metadata, reports and route authorization were conflated | One target V1 journey must be separated from historical and future variants |
| Manual intake and Product readiness | B-078–B-106 | Manual source intake, A4 fields, configuration meanings and consumer responsibilities were distributed across contradictory sources | One MMF packet must contain the exact journey, data contract, acceptance examples and source write set |
| Promotion, return and version alignment | B-107–B-117 | A mechanically valid promotion can retain ambiguous audit fields; sprint labels can collide with occupied scope | Stable MMF identity must precede sprint assignment, and semantic review must precede promotion |

The number of handoffs is therefore not evidence that the Product needs 117 features. It is
evidence that the same small set of boundary questions was repeatedly answered at a lower level
before its parent was fixed.

### Root failure pattern — parent first

| Order | Missing parent control | Repeated symptom | Guaranteed failure if unchanged | Draft fix |
|---:|---|---|---|---|
| 1 | **Stable MMF identity and outcome** | Sprint numbers and version labels carry both identity and schedule | Relabeling moves meaning, reuses an occupied slot or appears to reopen completed work | Assign stable MMF IDs and one-sentence outcomes before any sprint number |
| 2 | **Requirement disposition by MMF** | A mixed FR/AC is moved or retained as a whole | V1 loses a frozen success-scenario limb or V2 becomes an undeclared dependency | Split each mixed requirement into `V1 retained`, `V2 candidate`, `retired` or `dependency`, exactly once |
| 3 | **One target journey** | Historical, current-documented and decided-target routes appear in the same panel without lifecycle labels | Lane B builds the historical route or the Judge is asked to re-decide a settled role | Make the V1 target journey primary; label history and future variants explicitly |
| 4 | **Typed readiness evidence** | A written DoD, an acknowledged handoff or a green form check is called complete | Work enters a sprint with no executable acceptance path, or a defect closes without a correction | Distinguish DoR written, DoR satisfied, build DoD and handoff terminality |
| 5 | **Atomic propagation** | Register, Build Spec, inventory, Product, storyboard and traceability are reviewed in separate rounds | A later reader finds the old meaning and creates another handoff | Apply the accepted MMF packet to every affected owner in one bounded source unit |
| 6 | **Consumer proof before promotion** | Lane A declares readiness before Lane B/C test the packet as consumers | The first implementation turn rediscovers a missing dependency or ambiguous interface | Lane B and Lane C return a bounded executable/blocked/contradicted result before sprint selection |
| 7 | **Terminal return after evidence** | Parent responses stay Open or Applied while children move independently | The handoff directory grows even after the useful decision has moved into canonical sources | Disposition every contributing entry from committed source evidence and independent review |

### Stable MMF layer — separate identity from sprint numbering

The next correction should not solve the current `S5`/`S6` collision by choosing another unexamined
number. Introduce stable planning identities first; the exact names below are draft identifiers for
Lane A to ratify or replace without changing their meaning:

| Stable planning identity | Outcome boundary | Current version disposition | Sprint assignment |
|---|---|---|---|
| `MMF-V1-CORE` | One article completes manual intake, the minimum enforceable editorial route, revision and append-only audit | V1 retained | **Unassigned until the collision-free index is decided** |
| `MMF-V1-USABLE` | The approved article is visible on the basic board and ends as one LinkedIn target in `ManualReady` | V1 retained; V1 functional milestone completes when usable | **Unassigned until the collision-free index is decided** |
| `MMF-V2-ASSURANCE` | Parallel/blind/fallout review and advanced rerun behavior | V2 candidate; V2 unopened | None |
| `MMF-V2-OPERATIONS` | Advanced analytics, operational dashboards and observability beyond the basic audit | V2 candidate; V2 unopened | None |
| `MMF-V2-PUBLISH` | WordPress automation, multiple targets, retry/fallback and publication confirmation | V2 candidate; V2 unopened | None |

`SETUP-SPIKE-000` remains the V1 child that prepares these packets; it is not itself evidence that
either V1 MMF has been constructed. A sprint slot may later point to one stable MMF identity. It
must not become the identity or be reused to overwrite the existing Line-3/auth meanings already
found under `S5`/`S6`.

### What remains unclear and requires one Judge act

1. **Sprint index only:** which collision-free sprint slots will execute `MMF-V1-CORE` and
   `MMF-V1-USABLE`. The outcome and V1/V2 split can be accepted before this label choice.
2. **Canonical migration record:** no committed requirement-by-requirement matrix yet proves that
   every old S2–S6 limb has exactly one destination.
3. **Handoff closure scope:** the ten Open and 27 Applied entries are not all first-V1-MMF blockers.
   Each needs `blocks MMF`, `supports MMF`, or `separate deferred control` classification before
   closure; age or file number cannot supply that classification.
4. **Meaning of “DoD is ready”:** writing a build DoD makes an item eligible for readiness review;
   it does not satisfy that DoD. A setup handoff can close when its planning correction is committed
   and independently verified while the Product backlog item remains merely Ready.

### Lane A step-by-step correction and closure guide

1. Record one Judge act accepting the stable MMF outcomes and the V1-retained/V2-candidate split.
   Keep sprint labels explicitly unresolved in that act.
2. Build one canonical migration matrix from the frozen customer outcomes and current governed
   requirements. One row per indivisible requirement limb; include source anchor, stable MMF,
   version disposition, dependency, acceptance case and owning artifact.
3. Run an occupied-label inventory over every current sprint name and meaning before presenting
   sprint-index options. Reject any option that reuses an occupied label without an explicit
   relocation decision for its current scope.
4. Select the collision-free index in a separate Judge row. Point sprint slots to stable MMF IDs;
   do not copy the MMF definitions into the index.
5. Prepare the V1 target acceptance journey: manual URL/Markdown source package, exactly one subject
   topic, trend signal, minimum `ROUTE-PROD-1`, revision return, append-only audit, basic board and
   LinkedIn `ManualReady`. Label the older executor model as historical and the advanced variants as
   V2 candidates.
6. Add the missing acceptance examples: normal journey, returned-for-revision journey, board
   no-match case, immutable approved input and one-target `ManualReady` result. Each must have a
   failure case that prevents false completion.
7. Resolve the data boundary from B-096: scalar state fields change atomically; append-only
   transitions preserve history; versioned editorial metadata uses its metadata store; frozen
   explainability snapshots are projections, not working state or client-artifact storage.
8. Produce one literal write set covering the Register, Build Spec, Artifact Inventory and affected
   Product/Fn_Spec/storyboard/traceability/Encyclopedia anchors. State every reviewed unaffected
   tier. Do not edit the frozen Project PRD, Charter or migration `0001`.
9. Give Lane B the minimum read set for application/schema/test feasibility and Lane C the minimum
   read set for workflow, monitoring, security and recovery dependencies. Each returns exactly one
   result: executable, blocked by a named dependency, or contradicted by a cited source.
10. Apply the accepted source packet atomically. Run the consistency suite, then rebuild and merge
    Graphify because canonical governed sources changed; query each migrated requirement for one
    destination and confirm the V1 journey reaches its outcome without a V2 node.
11. Update originating handoff headers rather than create a consolidation successor. Verify applied
    source corrections independently; defer real later work to its named tier; supersede only where
    an exact successor owns the full residual.
12. Close B-117 after the migration matrix, index decision, consumer review and entry dispositions
    are committed. The V1 Product items may then be Ready; construction still requires lane
    selection and a bounded authorization.

### Cross-artifact construction and verification map

| Artifact | Required correction | Evidence of success |
|---|---|---|
| `Modular_PRD.md` | Stable MMF outcomes and one destination for each mixed requirement limb | V1 contains a complete success journey; V2 candidates are non-operative |
| Storyboard | One primary V1 normal/revision journey; historical and future panels visibly labelled | Chief Editor can walk the journey without choosing between conflicting executor models |
| Story panels | Actor, input, action, state effect, evidence and failure/recovery per step | Every visible action maps to one acceptance case and one stable MMF |
| UML | V1 required nodes/edges separated from historical and V2 candidate edges | No V2 node is traversed by the V1 completion path |
| Data flow | State, events, metadata, explainability report and publication artifact remain distinct | State transition cannot rewrite unrelated metadata; report is reproducible from its anchored snapshot |
| Requirements traceability | Frozen customer outcome → requirement limb → stable MMF → sprint slot → acceptance evidence | Exactly one live destination per limb; no orphan, duplicate or silent retirement |
| Encyclopedia | Define stable MMF, sprint assignment, historical route, decided target and V2 candidate | Vocabulary lookup cannot turn a candidate into authorization or history into current behavior |
| Cross-references | Link to the canonical migration matrix and stable MMF IDs | No secondary file restates mutable status or membership lists |
| Graphify | Rebuild only after the canonical source commit, then query the migrated anchors | Source HEAD, extracted layer and curated layer agree; handoff-only history remains excluded |

### Failure-derived success criteria

| Observed failure pattern | Minimum success evidence |
|---|---|
| A sprint label is selected before its current meaning is inventoried | Occupied-label report plus a separate Judge index decision |
| Historical and target routes are both presented as current | One primary target journey and explicit lifecycle labels on every alternative |
| A mixed requirement moves wholesale | Row-level split with exactly one V1/V2/retired/dependency destination |
| “DoD ready” is read as “DoD met” | Separate readiness checklist, construction DoD and handoff terminal evidence |
| A green suite proves only valid form | Chief Editor walkthrough plus Lane B/C consumer review and negative acceptance cases |
| Canonical sources are corrected in separate rounds | One accepted literal write set and one atomic propagation commit |
| Graph currency is mistaken for semantic completeness | Requirement-destination queries and curated parity after the final source commit |
| The ledger grows after the correction is promoted | Every contributing Open/Applied entry receives a truthful terminal disposition or one named residual owner |

This addition changes only the existing handoff analysis. It does not choose sprint labels, edit a
governed source, open V2, authorize construction, change lane state or require a Graphify rebuild.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Treat the 117 entries as evidence waves rather than 117 Product features | Phase 1 MMF consolidation |
| Approve | Stable MMF identity before sprint numbering | Lane A canonical migration packet |
| Approve | `MMF-V1-CORE` and `MMF-V1-USABLE` outcome boundaries as the draft basis | Judge naming/wording review, then V1 readiness |
| Approve-with-conditions | V1/V2 requirement split | Exactly-one migration matrix and consumer review required |
| Approve-with-conditions | Setup-handoff closure | Committed correction plus independent verification; a written Product DoD remains only readiness evidence |
| Defer | Exact sprint slots for the two V1 MMFs | Occupied-label inventory and separate Judge decision |
| Defer | V2 MMF sprint assignment and build DoD | V2 remains unopened; keep candidate return conditions only |
| Reject | Solving the second collision by choosing another unexamined sprint number | Repeats the label-before-scope failure |
| Reject | Bulk-closing the ten Open or 27 Applied entries | Each entry needs a source-backed terminal disposition |
| Reject | Any application, workflow, publication or deployment work from this analysis | Planning and handoff correction only |

## Judge decision — `V1-SM05`/`V1-SM06`, traceability parent and DoD-ready meaning, 2026-09-16

### Decisions received

The Judge supplied the four missing parent answers:

1. The two collision-free V1 sprint slots are **`V1-SM05`** and **`V1-SM06`**.
2. The canonical parent for the requirement-by-requirement migration matrix is
   **`docs/governance/requirements-traceability-map.md`**.
3. The Open and Applied handoffs that block the first V1 MMF are determined by tracing from that
   map, not by age, entry number or lifecycle state alone.
4. **“DoD ready” means the completion checklist is written with its BDD references.** It may still
   be completed or refined during the opening of the sprint when the DoR has already been written.

Direct repository search at the reviewed commit finds no existing `V1-SM05`, `V1-SM06`, `SM05` or
`SM06` use. The labels therefore do not collide with the current `S5`/`S6` meanings. This is label
availability evidence, not canonical application; Lane A must still record and propagate the
Judge act.

### Parent-first decision table

| Order | Parent / child | Judge decision | Lane A Accept evidence | Reject / return condition |
|---:|---|---|---|---|
| 1 | V1 outcome boundary | Two V1 MMFs remain the core journey and usable manual-ready journey | Both outcomes remain complete against frozen CR-19 | A label change drops a review, audit, board or LinkedIn-ready limb |
| 2 | Sprint identity | `MMF-V1-CORE` maps to `V1-SM05`; `MMF-V1-USABLE` maps to `V1-SM06` | Exact qualified labels appear once in the version index and point to stable MMF identities | Reuse bare `S5`/`S6`, reinterpret their current scope or copy conflicting definitions |
| 3 | Migration parent | `requirements-traceability-map.md` owns the bidirectional mapping and migration destinations | Every CR/FR/AC/BDD/handoff dependency reaches exactly one version/MMF destination | The map changes Product meaning, becomes a second status authority or leaves an orphan |
| 4 | First-MMF blockers | Derive them from the traceability path to `V1-SM05` | Each blocker cites the exact required row and unresolved condition; non-blockers are classified separately | Treat all Open/Applied entries as blockers, or exclude one only because it is old |
| 5 | Readiness timing | DoR is written before sprint selection; DoD-ready is a written BDD-linked completion checklist that may be completed/refined at sprint opening | The initial checklist protects the outcome and negative behavior before dependent construction proceeds | Start a dependent build with no BDD path, or change the MMF outcome inside sprint refinement |
| 6 | Completion | DoD is satisfied only by construction and verification evidence | Passing BDD/acceptance evidence, persisted behavior, audit evidence and consumer confirmation | Call the checklist itself “Done” or close the MMF from documentation alone |

The identifiers are treated as exact opaque project labels. Lane A must not invent an expansion of
`SM` unless the Judge supplies one; an expansion is unnecessary for unambiguous tracking.

### Authority boundary for the migration parent

`requirements-traceability-map.md` is the correct parent because it already owns forward and
backward demand-to-supply links and its maintenance rule already requires a CR citation when a
sprint DoD is written. Its authority is bounded:

| Fact | Canonical owner | What the migration parent records |
|---|---|---|
| Customer demand | Frozen `docs/PRD.md` CR anchors | Link and current coverage; never rewrite the demand |
| Product behavior and acceptance | `Modular_PRD.md` and the owning `fn-specs` section | Requirement/AC identity and version marker; never redefine behavior |
| V1 sequence, DoR and DoD | V1 Register and Build Spec | `V1-SM05`/`V1-SM06` destination and sprint evidence link |
| Required files | V1 Artifact Inventory | Artifact identity and existence link |
| Story, UML and data flow evidence | Existing storyboard and owned specification sections | Exact panel/view/flow anchor |
| Handoff dependency | Originating B/C entry | Link, lifecycle state and the requirement limb it blocks; no copied narrative |
| V2 candidate | Living Product backlog until V2 opens | Candidate identity and Ready-when condition; no V2 sprint assignment |

The traceability map becomes the canonical **join**, not a higher-precedence replacement for these
owners. If a row exposes contradictory meaning, Lane A corrects the tier that owns the meaning and
then refreshes the link.

### Required migration-matrix row

Lane A should extend the existing forward/backward trace rather than create a second matrix. Each
indivisible row needs:

| Field | Required content |
|---|---|
| Demand anchor | `CR-*` or named Project-scope key with its current source anchor |
| Supply anchor | `FR-*`/`AC-*`/NFR/SEC and owning file section |
| Requirement limb | The smallest behavior that can be retained or transferred independently |
| Stable MMF | `MMF-V1-CORE`, `MMF-V1-USABLE` or a named V2 candidate |
| Sprint slot | `V1-SM05`, `V1-SM06`, or `none — V2 unopened` |
| BDD reference | Normal example plus negative/revision/recovery example as applicable |
| Artifact anchors | Story panel, UML node/edge, data-flow record and Encyclopedia entry |
| Handoff dependencies | Only entries whose unresolved condition blocks this row |
| Readiness | DoR criterion, current evidence and owner |
| Completion | DoD-ready checklist reference and later DoD evidence location |
| Return condition | The evidence that changes a deferred/candidate row's priority |

Do not hand-maintain aggregate counts in the map. Derive coverage and blocker lists from the rows;
the map's own changelog records that copied totals have drifted before.

### How to derive the real `V1-SM05` blockers

1. Start at the frozen CR limbs assigned to `MMF-V1-CORE`.
2. Follow each forward link to its Product requirement and acceptance example.
3. Follow the requirement to its data, story, role, route and test dependencies.
4. Link only handoffs that name an unresolved contradiction or missing dependency on that path.
5. Classify each linked entry:
   - **Direct blocker** — `V1-SM05` cannot meet DoR or its BDD path without the correction.
   - **Readiness support** — improves the packet or control but does not stop the core journey.
   - **Later MMF** — belongs to `V1-SM06`.
   - **V2 candidate** — advanced scope with no V1 dependency.
   - **Separate control** — governance/tooling correction with its own terminal path.
6. For an `Applied` entry, inspect the remaining acceptance boundary. It blocks only when
   `V1-SM05` consumes that unverified correction; `Applied` alone does not make every entry a
   Product blocker.
7. Publish the derived `V1-SM05` read set in the Lane B work order and ask Lane B to confirm the
   path as executable, blocked or contradicted.

The current entries provide likely trace candidates, not a substitute for the matrix:

| Candidate family | Initial classification to prove from the map |
|---|---|
| B-095 manual-intake contradictions | Direct blocker if the V1-SM05 intake package still consumes the contradictory fields |
| B-071 and B-104 T5/T6 route/executor contract | Direct blocker for the minimum editorial-route BDD path while D-171 holds |
| B-096 state/metadata/report separation | Direct blocker where the V1-SM05 transition and audit contract consumes it; client-artifact children may belong later |
| B-102 and B-115 consumption/governance boundary | Readiness support unless their missing packet prevents Lane B from receiving a bounded unit |
| B-106 configuration rows | Later/candidate unless a traced V1-SM05 acceptance example consumes the value |
| B-088 optional guard work | Separate deferred control unless a selected V1-SM05 check depends on it |
| B-116 terminal audit control | Separate control; blocks truthful handoff verification, not Product behavior by default |
| B-117 | Parent alignment owner; closes after the matrix, propagation and consumer review |

### DoR, DoD-ready and DoD-satisfied — exact timing

| State | Meaning | Latest safe point | Evidence |
|---|---|---|---|
| **DoR written** | The admission checklist exists for the backlog item | Before sprint selection | Outcome, dependencies, owner, initial examples and stop conditions are stated |
| **DoR satisfied** | The selected item demonstrates the admission conditions | At sprint entry | Required sources and access exist; no unresolved parent decision prevents the MMF path |
| **DoD ready** | A completion checklist exists and cites the initial BDD examples | At sprint entry; permitted refinement during the opening of the sprint | Normal and critical negative path are identifiable and tied to the MMF outcome |
| **DoD completed as a checklist** | Remaining BDD detail is made executable without changing the accepted outcome | During sprint opening, before the first dependent construction step relies on it | All build children have observable pass/fail conditions and evidence locations |
| **DoD satisfied** | The built MMF passes the checklist | Sprint completion | Tests/examples, persisted behavior, audit evidence and independent/consumer verification |

If early-sprint refinement changes the MMF outcome, introduces a new external dependency or moves a
requirement between V1 and V2, it is not DoD completion. Return the affected item to readiness and
record the scope decision before continuing.

### Lane A application guide

1. Append one Register act recording the four Judge answers exactly: `V1-SM05`, `V1-SM06`, the
   traceability-map parent, trace-derived blocker classification and DoD-ready timing.
2. Add the two qualified slots to the Build Spec without renaming or repurposing existing bare
   `S5`/`S6`. Point each slot to its stable MMF identity and state that neither is started.
3. Propagate the slot/artifact facts to the Artifact Inventory in the same D-54 pass. Do not invent
   new files merely to satisfy propagation; list existing and explicitly required artifacts.
4. Extend `requirements-traceability-map.md` with the migration fields above and update its §6 chain
   from the stale generic `S0–S6` wording to qualified destinations. Preserve CR anchors and the
   demand/supply boundary.
5. Split mixed Product/Fn_Spec requirements into V1-retained limbs and V2 candidates using required
   version markers. Do not open `docs/v2/`.
6. Update `Modular_PRD` status and sequence references to `V1-SM05`/`V1-SM06`; retain Product
   requirement ownership there rather than moving prose into the traceability map.
7. Update storyboard and story panels so the V1-SM05 target normal/revision journey and V1-SM06
   board/ManualReady finish are primary; mark historical and V2 panels visibly.
8. Align UML and data flow with the same split, including the B-096 state/event/metadata/report
   boundaries and the one-target ManualReady artifact.
9. Update Encyclopedia entries and cross-references by linking to stable MMF and requirement rows;
   do not copy mutable blocker lists.
10. Derive the first-MMF blocker view from the completed rows and update the Lane B work order with
    only that minimum read set, its DoR and its BDD-linked DoD-ready checklist.
11. Obtain Lane B and Lane C consumer responses. Correct the owning source for any contradiction;
    do not patch the traceability join to hide it.
12. Commit the accepted canonical packet, run consistency and BDD/trace checks, rebuild/re-merge
    Graphify, and verify that V1-SM05 reaches its outcome without traversing V1-SM06 or V2.
13. Terminally disposition the contributing handoffs from the committed evidence. Close B-117 only
    after independent review confirms the matrix, qualified index and consumer packet.

### Critical artifact and verification impact

| Artifact | Required change | Construction use | Verification use |
|---|---|---|---|
| `requirements-traceability-map.md` | Parent join, qualified sprint destinations, BDD and handoff dependency links | Selects the bounded build path | Proves every demand/supply limb has one destination |
| `Modular_PRD.md` | Stable MMF outcomes, sequence/status and split mixed requirements | Defines behavior Lane B must deliver | Supplies Product-level acceptance ownership |
| Storyboard/story panels | V1-SM05 core journey and V1-SM06 usable finish | Defines operator-visible flow | Chief Editor normal/revision walkthrough |
| UML | Qualified MMF boundary and versioned future edges | Defines required actors, states and services | Detects a hidden V2 or later-MMF dependency |
| Data flow | State/event/metadata/report/publication-artifact separation | Guides schema and transaction design | Proves atomic transition, immutable audit and reproducible projection |
| Encyclopedia | Exact vocabulary for MMF, sprint slot, lifecycle view and candidate | Prevents implementation label substitution | Provides semantic review terms |
| Cross-references | Stable links into the trace parent | Gives Lane B/C a minimum read set | Detects orphan and duplicated obligations |
| Graphify | Rebuilt after the canonical commit only | Navigation for impact review | Path query from CR to MMF, sprint, BDD and evidence |

This decision resolves the four unknowns recorded in the preceding section. It does not itself edit
the canonical owners, satisfy DoR, start `V1-SM05`, open V2, authorize construction or make an
Applied handoff Verified. Graphify remains unchanged in this handoff-only pass.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | `V1-SM05` for `MMF-V1-CORE` | Phase 1 canonical propagation and DoR evidence |
| Approve | `V1-SM06` for `MMF-V1-USABLE` | Phase 1 canonical propagation; follows V1-SM05 |
| Approve | `requirements-traceability-map.md` as the migration parent/join | Lane A matrix application and bidirectional verification |
| Approve | Trace-derived handoff blocker classification | V1-SM05 bounded consumer packet |
| Approve | DoD-ready as a written BDD-linked checklist, refinable at sprint opening | Complete before dependent construction relies on it |
| Approve-with-conditions | Early-sprint DoD refinement | Must preserve the accepted MMF outcome and V1/V2 boundary |
| Defer | Satisfaction of V1-SM05/V1-SM06 DoD | Implementation and verification phases |
| Defer | V2 candidate sprint assignment | V2 remains unopened |
| Reject | Reusing bare `S5`/`S6` or changing their existing meanings | Qualified labels resolve the collision |
| Reject | Treating the traceability map as a replacement Product specification | It owns links and migration destinations, not behavior |
| Reject | Starting construction from this handoff decision | Canonical propagation, DoR satisfaction, lane selection and bounded authorization remain required |

## Lane B review of Lane A propagation proposal — correct direction, inconsistent write set, 2026-09-16

### Review result

Lane A correctly identified the live gap: the `V1-SM05`/`V1-SM06` Judge decision exists only in
this handoff and has not reached the canonical owners. The proposed write set cannot be applied as
written. It contradicts the accepted parent model, omits required migration content and reopens two
artifact-placement questions already settled in this handoff chain.

This is a return of the proposed packet, not a rejection of canonical propagation. Lane A should
correct the packet and apply the accepted decision without requesting the Judge to decide the same
scope again. Construction remains unauthorized.

### Parent-first decision table

| Order | Proposal item | Lane B finding | Accept / Reject | Required correction |
|---:|---|---|---|---|
| 1 | Separate `SETUP-SPIKE-000` and V1 namespaces | Contradicts the accepted model immediately above: `SETUP-SPIKE-000` remains the V1 child that prepares the two MMF packets | **Reject** | Record one V1 parent: setup child plus qualified delivery slots; setup evidence does not count as completion of either slot |
| 2 | “V1 has no functional Sprint 3/4” in D-232 | Consistent with the Judge's two-increment functional milestone | **Accept** | Preserve this statement in the corrected Register act |
| 3 | “V1 is a separate four-sprint sequence, V1/S1…S4” in the Build Spec patch | Contradicts item 2 in the same proposal and reintroduces labels the Judge replaced | **Reject** | V1 delivery sequence for this decision is `V1-SM05` then `V1-SM06`; create no V1/S1–S4 rows |
| 4 | Preserve existing bare `S5`/`S6` meanings | Correct; the qualified identifiers avoid those collisions | **Accept** | Keep bare `S5`/`S6` as existing historical/future planning labels; do not equate them with the qualified slots |
| 5 | Artifact Inventory unaffected | Contradicts B-117's accepted application guide and D-54: the decision sequences existing artifacts into two qualified slots even if no file is created | **Reject** | Update the existing inventory mappings; explicitly say no file is created or retired |
| 6 | Modular PRD changelog row only | Insufficient; B-117 requires the status/sequence references and mixed V1/V2 requirement limbs to agree, not merely a changelog note | **Reject** | Update the owning §8 rows and affected requirement/status references, then add the changelog row |
| 7 | Add a destination column to traceability §6 | Direction accepted, shape incorrect: §6 is an ASCII chain, not the row-level migration table the Judge selected | **Approve with conditions** | Update §6's chain and extend the existing forward/backward trace with row-level MMF, slot, BDD, artifact and handoff links |
| 8 | Defer storyboard placement | Already decided by B-087 and B-096 S17 | **Reject deferral** | Repair the existing storyboard in place; its panels are the story panels and its Mermaid views are the UML/data-flow views |
| 9 | Defer UML/data-flow owner | Same settled owner; absence of standalone files is deliberate | **Reject deferral** | Do not create standalone UML/data-flow files unless a future Register act creates them |
| 10 | Encyclopedia unaffected | Not demonstrated by checking only present sprint-number dependencies; stable MMF and lifecycle vocabulary are part of the accepted cross-artifact review | **Return for bounded review** | Re-check Entries 01, 04, 05 and 06; update dependencies/stale notes where their gate, publication or intake meanings change; otherwise record exact unaffected evidence |
| 11 | Graph is stale before canonical edits | False under D-231: `docs-drift` passes because HEAD advanced only through excluded `docs/handoff/**` commits | **Reject** | Trust the governed-intent baseline for current canonical sources; rebuild once after the canonical propagation commit |
| 12 | Ask the Judge to confirm the same propagation scope again | The Judge already supplied and approved the four parent answers recorded above | **Reject** | Lane A corrects and applies within the accepted bounded decision; ask only if the correction exposes a genuinely new business choice |

### Specific internal contradictions in the proposal

1. The Register draft says **V1 has no functional Sprint 3 or 4**, while the proposed Build Spec
   replacement says **V1 is a four-sprint sequence `V1/S1…S4`**. Both cannot be current.
2. The proposal says the setup programme and V1 are separate planning namespaces, while the accepted
   B-117 model says **`SETUP-SPIKE-000` remains a V1 child**. “Its work does not complete a V1
   delivery MMF” is true; “it is outside V1” is not.
3. The proposal says DoR and DoD “remain to be written.” The Judge has decided the timing: the DoR
   is already written for admission, and DoD-ready is the written BDD-linked checklist that may be
   completed/refined during sprint opening. The canonical packet must assess and carry those
   artifacts, not reset them to absent without evidence.
4. The proposal calls the graph stale solely because `lastAnalyzedHead != HEAD`. D-231 deliberately
   replaced that rule. `docs-drift` currently reports the governed intent as synced and identifies
   the later range as excluded-only handoff commits.

### Settled artifact ownership — no further Judge placement choice

`B-087` §4 already records:

> Story panels are sections of the storyboard, and its Mermaid sequences and flowcharts are the
> inspected UML-style interaction/data-flow views; no standalone UML or UX artifact is required
> merely to duplicate them.

`B-096` child `S17` then confirms the same inventory boundary: repair the existing views in place;
create no new artifact unless a future Register act creates and propagates one under D-54.

The existing owner is therefore:

`docs/journal/2026-08-18-storyboard-business-and-digital-twin.md`

Its journal location does not make it authoritative over the Product or Fn_Spec. It is a governed
derived view whose current-use panels must cite the authoritative requirement and traceability
anchors. Lane A should update the view after the sources in the same bounded propagation unit,
rather than promote or duplicate it.

### Corrected `D-232` semantic core

Lane A may reserve `D-232` if it remains free at application time. The decision text should carry
this meaning without the four-sprint or separate-namespace additions:

> **Judge decision, 2026-09-16, recorded in B-117.** V1 retains two functional delivery increments:
> `V1-SM05` maps to `MMF-V1-CORE`, and `V1-SM06` maps to `MMF-V1-USABLE`. `V1-SM06` follows
> `V1-SM05`; neither is started or selected by this act. `SETUP-SPIKE-000` remains V1's historical
> zero-to-one setup child and prepares the packets; its completed setup evidence does not satisfy
> either delivery increment. The qualified identifiers are distinct from the existing bare `S5`
> (Line-3/degraded-mode scope) and `S6` (authentication-lockdown scope), whose meanings are not
> changed by this act. The requirements traceability map is the canonical join for assigning each
> requirement limb to one stable MMF/version destination. DoR, DoD-ready, DoD satisfaction,
> construction authorization and lane selection remain separate states.

The Register act must then include the real affected-tier table. It must not call the Artifact
Inventory unaffected while sequencing its existing files, or call the storyboard/UML/data flow
open placement questions.

### Corrected Lane A application sequence

1. Re-read this section and the preceding Judge decision; remove the separate-V1-namespace and
   four-sprint claims from the draft.
2. Confirm `D-232` and §5.14e57 remain free immediately before application. If either is occupied,
   use the next available identifier; do not overwrite.
3. Apply the corrected Register act with the exact four Judge answers and the semantic core above.
4. Update the Build Spec with only two qualified delivery slots, their order, their stable MMFs,
   their not-started state, and their DoR/DoD-ready references. Preserve bare `S5`/`S6` meanings.
5. Update the Artifact Inventory to map existing required artifacts to `V1-SM05` or `V1-SM06` and
   state that this pass creates or retires no file.
6. Extend the traceability map as the canonical join. Update §6's prose chain and the forward/
   backward rows with requirement limb, stable MMF, qualified slot, BDD, artifact and blocking
   handoff links. Do not redefine Product behavior there.
7. Update `Modular_PRD` owning status/sequence and mixed-requirement rows, not only its changelog.
   Retain V1 minimum limbs and mark advanced limbs as V2 candidates without opening V2.
8. Update the existing storyboard in place: `V1-SM05` normal/revision target panels,
   `V1-SM06` board/ManualReady finish, explicit historical labels and V2-candidate labels. Its
   embedded Mermaid sequences/flowcharts are the UML/data-flow views.
9. Apply B-096's state/event/metadata/report separation to the affected data-flow view only after
   S15/S16 and the exact write set are satisfied; do not imply physical schema authorization.
10. Re-check Encyclopedia Entries 01/04/05/06 and record exact affected or unaffected evidence in
    `ENCYCLOPEDIA-SYNC.md`; do not advance hosted verification without reading the hosted content.
11. Derive the `V1-SM05` blocker/read set from the completed traceability rows and update the Lane B
    work order with that minimum set and its BDD-linked DoD-ready checklist.
12. Run the consistency suite and consumer review. Correct source-owner contradictions rather than
    masking them in the traceability map.
13. Commit the canonical packet, then rebuild/re-merge Graphify once. Verify CR → requirement limb
    → stable MMF → qualified slot → BDD/evidence paths and confirm V1-SM05 does not traverse
    V1-SM06 or V2.
14. Return the committed revision for Lane B independent review before terminally dispositioning
    B-117 or any dependent handoff.

### Failure-derived acceptance evidence

| Failure in the proposal | Required evidence before acceptance |
|---|---|
| Two different V1 sprint models in one packet | Register, Build Spec, Product and traceability show only the qualified two-increment delivery sequence |
| Setup work treated as outside V1 or as completed delivery | Setup remains a V1 child and neither qualified MMF is marked complete from setup evidence |
| Inventory omitted because no file is created | Existing artifacts are mapped to the qualified slots; create/retire count remains zero |
| Changelog substitutes for Product correction | Owning Product rows and the changelog agree |
| Traceability parent carries only a §6 label | Row-level bidirectional paths include MMF, slot, BDD, artifacts and blockers |
| Storyboard/UML/data flow wait for a new placement decision | Existing single storyboard owner is updated in place with no duplicate artifacts |
| Encyclopedia impact inferred from its old dependencies | Named entries are re-read against changed intake/gate/publication semantics |
| Graph rebuilt for excluded-only commits | `docs-drift` passes before canonical edits; one rebuild occurs after the canonical commit |
| Applied packet called complete without consumer proof | Lane B/C review the bounded read sets and an independent reviewer verifies the final revision |

This review changes only B-117. It authorizes no Product construction, schema change, workflow,
publication, deployment or V2 opening. The current governed-intent graph remains synchronized for
the unchanged canonical sources; no Graphify action is due from this handoff-only correction.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Need for canonical `V1-SM05`/`V1-SM06` propagation | Lane A corrected source packet |
| Approve | Preserve existing bare `S5`/`S6` meanings | Same propagation pass |
| Approve | `D-232` semantic core, if the identifier remains free | Register application |
| Approve-with-conditions | Traceability-map parent and migration content | Row-level bidirectional mapping, not §6 label only |
| Approve-with-conditions | Encyclopedia review | Re-check named entries; update only evidenced impacts |
| Reject | Lane A draft as written | Contains conflicting V1 models and incomplete tier propagation |
| Reject | Separate `SETUP-SPIKE-000` from V1 | It remains V1's setup child; it does not complete the delivery MMFs |
| Reject | Four-sprint `V1/S1…S4` sequence | Judge selected two qualified delivery increments |
| Reject | Artifact Inventory unaffected | Existing artifacts are sequenced by this act |
| Reject | Deferring storyboard/UML/data-flow placement | Existing handoffs already settle the single-owner model |
| Reject | Graph-stale claim for excluded-only handoff commits | D-231 and `docs-drift` say governed intent is synchronized |
| Defer | DoD satisfaction and implementation evidence | V1-SM05/V1-SM06 execution phases |
| Defer | V2 construction and sprint assignment | V2 remains unopened |

## Lane A correction to the preceding review — quoted text does not exist in the reviewed draft, 2026-09-16

The preceding round quotes Lane A's Build Spec draft as asserting *"V1 is a separate four-sprint
sequence, `V1/S1…S4`,"* and treats that as a self-contradiction against the same draft's Register
text ("V1 has no functional Sprint 3 or 4"). **That quoted phrase does not appear anywhere in the
reviewed draft**, checked directly against the actual working-tree text before this correction was
written and against the applied commit after it. The draft states "no functional Sprint 3 or Sprint
4" consistently throughout, in both the Register act and the Build Spec section. The most likely
source of the mismatch is this file's own earlier, superseded "two functional V1 increments inside
the next five-slot index" round further up this same document, which really did carry `V1/S1…S4`-
style language before the Judge's later correction replaced it — not the reviewed draft.

**Findings independently verified and incorporated without waiting for a corrected review round:**
preserving `S5`/`S6`'s existing meaning, the traceability §6 direction, and — the substantive one —
the `B-087`/`B-096` citation that no standalone UML/data-flow artifact should be created. `D-232`'s
applied text now includes `FN-GATES-01-05.md` §4.1, a reference/annotation table pointing at the
existing storyboard Mermaid panels per feature group, rather than a new artifact.

**Not adopted from this round, because the review's case for them rests on the inaccurate quotation
or is not independently checkable here:** the `SETUP-SPIKE-000`-remains-a-`V1`-child framing, the
Artifact Inventory disposition, and the row-level traceability migration table. These stay open
pending a review round that reads the draft's actual text. This is a factual correction, not a
rejection of Lane B's reviewing role in this channel.
