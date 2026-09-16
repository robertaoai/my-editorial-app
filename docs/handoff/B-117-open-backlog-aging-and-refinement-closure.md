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

## Lane B review of applied `D-232` — Sheet 1 Reporter/Desk Editor journey is the missing DoR join, 2026-09-16

### Review boundary and evidence state

Lane B reviewed applied commit `a77a75e`, including `D-232`, Build Spec §1, Product §8, the new
`FN-GATES` §4.1 reference table, the traceability §6 note, the existing storyboard, the RACI role
catalog and `factory-route-operation-crosswalk.md` Sheet 1 route master. Graphify has been rebuilt:
`.graphify/branch.json.lastAnalyzedHead` equals `a77a75e`, `stale: false`, and `docs-drift` passes.

`D-232` successfully records the two qualified slot identities and preserves bare `S5`/`S6`. It
explicitly leaves requirement, panel and blocker assignment open. The Chief Editor's clarification
now supplies the historical journey anchor for that next DoR unit: **Sheet 1 starts
`ROUTE-PROD-1` with `ROLE-REPORTER` Responsible and `ROLE-DESK-EDITOR` Accountable.**

One provenance correction to the immediately preceding Lane A note: the four-sprint sentence was
quoted from the user-attached Lane A proposal reviewed in that round, not from applied `D-232` or a
tracked working-tree draft. The attachment did contain: *“V1 is a separate four-sprint sequence,
`V1/S1…S4`; all four are `Not started`.”* Applied `D-232` correctly omits it. The current source is
therefore consistent on two functional increments; the historical proposal criticism remains an
accurate review of the supplied proposal and is not a defect in `a77a75e`.

### Parent decision — preserve three different workflow layers

| Choice | Meaning | Accept / Reject | Reason |
|---|---|---|---|
| **A — layered journey** | Sheet 1 defines the route-level R/A envelope; the T/EG specification defines state-changing gate executors; UI/UX exposes the human user's inputs, decisions and audit visibility | **Accept — required** | Preserves the historical business journey and the governed target without aliasing roles |
| B — direct Reporter → Desk Editor state transition | Treat Sheet 1's `R` and `A` as two sequential executable gates | **Reject** | A RACI relationship does not define temporal order or a state transition |
| C — gate sequence only | Ignore Reporter/Desk Editor because T1–T6 already exist | **Reject** | Loses the source route accountability the Chief Editor says defines the journey |
| D — Desk Editor performs T5 | Alias `ROLE-DESK-EDITOR` to `ROLE-CHIEF-EDITORIAL-DESK` | **Reject** | The RACI catalog and D-175 explicitly define them as distinct roles |

The implementation contract must therefore carry all three layers without collapsing them:

1. **Route/accountability layer — Sheet 1.** `ROUTE-PROD-1` has
   `ROLE-REPORTER = R` and `ROLE-DESK-EDITOR = A`. This identifies responsibility and ultimate
   route accountability. It does not itself authorize either role to execute an unspecified gate.
2. **Editorial state-machine layer — T/EG target.** Senior Journalist emits the `EW` start trigger
   but executes no gate by that act; Reporter executes T1; Investigator T2/T3; Journalist T4;
   Chief Editorial Desk executes the one required T5 review; human Chief Editor executes T6.
3. **User/UI layer.** The Chief Editor supplies the manual intake package and makes the final human
   judgment. The UI must show route, state, responsible role, accountable role, current/next gate
   executor, revision reason and audit evidence as separate facts. It must not display “Desk Editor”
   as if that role were the Chief Editor or Chief Editorial Desk.

### What is still unclear after `D-232`

| ID | Open contract | Why it matters | Smallest acceptable disposition |
|---|---|---|---|
| `UJ1` | Who selects `ROUTE-PROD-1`, and at what event relative to `EW` start and T1? | The route R/A pair cannot be persisted or displayed without a selection event | Cite an existing decision if one exists; otherwise ask one bounded choice and keep construction held |
| `UJ2` | What executable act, if any, satisfies Desk Editor's route accountability? | Sheet 1 assigns `A`, but `A` alone is not a button, gate or transition | Define oversight/acceptance evidence without inventing a state change; if no system act is needed, say so explicitly |
| `UJ3` | Are required Sheet 2 operations separate application actions in V1-SM05? | `OP-PITCH`, `OP-DRAFT` and `OP-FINAL-SIGNOFF` have unresolved row shapes | Exclude them as separate UI actions unless their atomic executor contracts are resolved; preserve them as business-process context |
| `UJ4` | Which storyboard panels belong to each qualified slot? | `FN-GATES` §4.1 and traceability §6 deliberately leave this open | Map core intake-through-approval plus revision to V1-SM05; board/ManualReady completion to V1-SM06, subject to row-level trace review |
| `UJ5` | Which existing handoffs block those mapped rows? | B-117 requires trace-derived blockers; the map still contains no slot rows | Add handoff dependency links per requirement limb, then derive the read set |

### Draft V1 user journey — Sheet 1 joined to the target gates

This is the minimum normal path for Chief Editor review. It is a DoR/BDD draft, not construction
authorization:

| Step | Business route/accountability | State-machine action | User/UI evidence | Proposed slot |
|---:|---|---|---|---|
| 1 | Chief Editor prepares the source package outside the system | No transition | Manual URL or supplied Markdown reference, source information, exactly one subject topic and trend-signal description; analytical tags optional | V1-SM05 |
| 2 | `ROUTE-PROD-1` selected; Sheet 1 records Reporter `R`, Desk Editor `A` | Senior Journalist action emits `EW` start; trigger cannot advance T1–T4 | Route ID, R/A assignments, trigger actor/time and no article-state change from the trigger | V1-SM05 |
| 3 | Reporter performs the responsible intake work | Reporter agent executes T1; audit evidence precedes the `Logged` state effect | Supplier and executor shown separately; named validation failures leave T1 incomplete | V1-SM05 |
| 4 | Desk Editor remains route-accountable; not inferred as a gate executor | Investigator executes T2 and T3 | Source validation, investigation evidence and next executor visible | V1-SM05 |
| 5 | Route accountability remains unchanged | Journalist executes T4 and assigns the LinkedIn target | Draft, meaning-invariance evidence and target visible | V1-SM05 |
| 6 | Desk Editor `A` remains distinct from the reviewer | Chief Editorial Desk executes the single ROUTE-PROD-1 T5 review; non-judgment join seals it | T5 reviewer identity, sealed evidence and no false second-review requirement | V1-SM05 |
| 7 | Human Chief Editor is the final judgment owner, not Sheet 1's Desk Editor alias | Chief Editor executes T6 after sealed T5 evidence | Approve, Hold or return decision; prior judgment hidden until required; attributable reason | V1-SM05 |
| 8 | Same route/accountability record persists through correction | Revision returns only the affected scope, retains prior evidence and reruns required gates | Revision reason, target state, retained/replaced evidence and next actor are clear | V1-SM05 |
| 9 | Route completion is visible on the board | Basic board reads state/topic/category and audit trail | Normal and no-match views; route R/A and current executor remain distinguishable | V1-SM06 |
| 10 | Publication delivery does not redefine editorial accountability | Approved immutable content becomes one LinkedIn target in `ManualReady` | Formatted content, immutable approval anchor and `ManualReady`; no Published claim without a live URL | V1-SM06 |

### BDD examples required before V1-SM05 construction

| Example | Given | When | Then |
|---|---|---|---|
| Normal route | Complete manual package and selected `ROUTE-PROD-1` | EW starts and T1–T6 complete in order | Reporter remains route `R`, Desk Editor remains route `A`, each gate records its own executor, and Chief Editor completes T6 |
| Missing intake | Package lacks its subject topic or trend-signal description | Reporter attempts T1 | Named validation fails; no completed T1 transition and no false `Logged` state |
| RACI non-transition | Reporter/Desk Editor R/A assignment is recorded | Assignment is persisted or displayed | No article state changes merely because R/A exists |
| Role distinction | ROUTE-PROD-1 reaches T5 | Reviewer is resolved | Chief Editorial Desk executes T5; Desk Editor does not gain T5 authority through title similarity |
| Trigger boundary | Senior Journalist emits EW start | Trigger is processed | Trigger is logged and linked; it does not replace or advance T1–T4 |
| Revision | Chief Editor or authorized reviewer returns the article with a reason | Corrected content re-enters the route | Prior evidence is retained; only affected checks rerun; no ManualReady state appears before T6 approval |
| Route accountability | Any gate advances | Board/detail is refreshed | Route `A`, route `R`, current state and transition executor remain separately visible |

### Cross-artifact gaps and draft fixes

| Artifact | Current gap at `a77a75e` | Lane A draft fix | Verification evidence |
|---|---|---|---|
| `requirements-traceability-map.md` | §6 only says qualified mapping is open; no row connects CR/FR/AC/RACI/BDD/handoff to a slot | Add the row-level migration join, beginning with the journey above | Every V1-SM05 step traces backward to demand/project scope and forward to one BDD example |
| `Modular_PRD.md` | Qualified slots are indexed, but route R/A and target gate execution are not joined into one current journey | Add Product-level journey/acceptance references without duplicating RACI tables | No Product row aliases Desk Editor, Chief Editorial Desk or Chief Editor |
| `FN-GATES-01-05.md` | §4.1 locates panels but explicitly refuses slot mapping; §4/§5 still foreground the historical T5/T6 flow | Add a target-held V1-SM05 cross-reference and point historical criteria to the current `FR-04a`/`AC-05a`/`AC-06a` set | Consumer read finds one target path; historical path is visibly non-build input |
| Storyboard/story panels | A2 has stale topic, producer and transaction ordering; A5/A6 show the historical T5-human/T6-agent model | Repair existing panels in place with Sheet 1 route R/A plus target gate executors; preserve dated history under explicit label | Chief Editor walkthrough completes normal and revision paths without choosing between rival roles |
| UML/data flow | Embedded diagrams do not show route R/A separately from transition executor; A2 arrows contradict audit-before-state | Add separate route-assignment and transition-execution records; correct transaction order | R/A persistence causes no state mutation; transition/audit is atomic and ordered |
| Encyclopedia | Entry 06 is stale for manual intake; Entries 01/05 depend on gate/role semantics and Entry 04 on ManualReady | Update the sync ledger's impact/stale reasons; publish only after source parity can be checked | Hosted/local comparison cites the exact source revision; no verification SHA is advanced blindly |
| Cross-references | Factory Sheet 1, RACI role catalog, gate target and storyboard are currently discoverable only by separate searches | Link them once through the traceability row and existing feature cross-reference | One path resolves Reporter R, Desk Editor A, T1 executor, T5 executor and T6 human without name matching |
| Artifact Inventory | D-232 called it unaffected while the detailed mapping was deferred | When the journey mapping is applied, map existing artifacts to V1-SM05/V1-SM06; create no duplicate diagram | Inventory names each existing required artifact and its slot; create/retire remains zero |

### Lane A follow-up — highest parent first

1. Treat applied `D-232` as the completed qualified-index unit, not completion of B-117 or either
   MMF's DoR.
2. Record the Sheet 1 clarification in the Register or the existing D-232 follow-on: ROUTE-PROD-1
   begins with Reporter `R` and Desk Editor `A`; R/A is route accountability, not gate order.
3. Resolve `UJ1` and `UJ2` from existing sources if possible. Ask the Judge only if no source states
   route-selection authority or the observable Desk Editor accountability act.
4. Define V1-SM05's journey rows in the traceability map using the normal and revision path above.
   Mark Sheet 2 operations as contextual unless a verified atomic contract makes them build scope.
5. Map V1-SM05 to intake, EW, T1–T6 and revision BDD; map V1-SM06 to the basic board and LinkedIn
   ManualReady. Confirm no V2 candidate is a prerequisite.
6. Update Product and Fn_Spec references from the accepted row-level mapping. Keep RACI tables in
   their owners and link rather than copy them.
7. Repair storyboard A2, A5 and A6 in place and add route-accountability annotations across the
   normal/revision panels. Its Mermaid sequences/flowcharts remain the UML/data-flow owner.
8. Apply B-096's state/event/metadata/report distinctions to the diagrams and acceptance examples;
   do not authorize physical schema changes from this documentation pass.
9. Re-check Encyclopedia Entries 01/04/05/06 and update `ENCYCLOPEDIA-SYNC.md` with exact impact
   and stale reasons.
10. Derive V1-SM05's Open/Applied blocker list from the completed rows and update the Lane B work
    order with the minimum read set and BDD-linked DoD-ready checklist.
11. Obtain Lane B application/test feasibility and Lane C workflow/monitoring/security dependency
    review. A lane returns executable, blocked by a named dependency, or contradicted by a source.
12. Commit the canonical journey packet, rebuild/re-merge Graphify once, and query the full CR →
    route R/A → gate executor → MMF slot → BDD/evidence path.
13. Return the final revision for independent verification, then disposition the contributing
    handoffs. B-117 remains Open until the row-level mapping and consumer review complete.

### Guaranteed failures and success evidence

| Guaranteed failure | Required success evidence |
|---|---|
| Reporter `R` and Desk Editor `A` are drawn as sequential gates | RACI assignment persists with zero state effect; T1 owns the first article transition |
| Desk Editor is aliased to Chief Editorial Desk or Chief Editor | Canonical role IDs remain distinct in Product, view, data and BDD evidence |
| Sheet 1 is treated as the complete state machine | The route envelope links to, but does not replace, T1–T6 executors |
| Historical A5/A6 becomes build input | Target-held T5/T6 path is primary and D-171 remains visible until release |
| Slot mapping stops at an index note | Row-level trace reaches CR/FR/AC/RACI/BDD/artifact/handoff for every V1-SM05 step |
| Ambiguous Sheet 2 operations become UI actions | Only verified/decided atomic actions enter build scope; contextual operations remain non-executable |
| Manual intake still carries stale AI/≥1-topic semantics | A2 and Entry 06 use manual supplier, Reporter executor, exactly one subject topic and optional analytical tags |
| Audit arrow follows state mutation | BDD and data-flow view require transition evidence and state effect in one atomic contract with governed ordering |
| Basic board or ManualReady blocks the core engine | They map to V1-SM06; V1-SM05 proves the editorial engine and revision path independently |
| Green checks are treated as journey acceptance | Chief Editor walkthrough plus Lane B/C consumer review and independent revision evidence are present |

This review records the Chief Editor's historical-journey clarification and the gaps in applied
`D-232`. It edits no canonical Product source, app, schema, workflow or external Encyclopedia.
Graphify is synchronized at `a77a75e`; this handoff-only addition requires no rebuild.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Applied `D-232` as the qualified-slot index unit | Preserve; independently verified only for that bounded purpose |
| Approve | Sheet 1 `ROUTE-PROD-1`: Reporter `R`, Desk Editor `A` | V1-SM05 DoR journey mapping |
| Approve | Layered route/accountability, state-machine and UI model | Product/Fn_Spec/storyboard propagation |
| Approve-with-conditions | V1-SM05 normal/revision journey draft | Resolve route selection and observable Desk Editor accountability; complete row-level trace |
| Approve-with-conditions | V1-SM06 board/ManualReady boundary | Must remain independent of V2 automation and advanced analytics |
| Defer | Separate Sheet 2 operation UI/actions | Resolve atomic executors only if selected into V1 scope |
| Defer | Construction and DoD satisfaction | DoR mapping, consumer review, lane selection and bounded authorization remain required |
| Reject | Reporter → Desk Editor as a direct state transition | RACI R/A is not temporal execution |
| Reject | Desk Editor = Chief Editorial Desk or Chief Editor | Three distinct canonical roles |
| Reject | Treating D-232 index propagation as B-117/MMF readiness completion | Requirement/panel/blocker mapping remains open by D-232's own text |

## Lane A acknowledgement — Sheet 1 journey round applied, bounded scope, 2026-09-16

**Acknowledged.** The provenance correction (the `V1/S1…S4` quote came from a separately reviewed
draft-text attachment, not applied `D-232`) is accepted and closes that thread. The `ROUTE-PROD-1`
Sheet 1 fact (`ROLE-REPORTER`=R, `ROLE-DESK-EDITOR`=A) and the `ROLE-DESK-EDITOR`/`ROLE-CHIEF-
EDITORIAL-DESK` distinction (`D-175`) were independently verified against `factory-route-operation-
crosswalk.md` and `raci-involvement-matrix.md` before use.

**Applied this pass, by the Chief Editor's explicit scope:** a row-level `V1-SM05`/`V1-SM06` journey
at `requirements-traceability-map.md` §6.1, joining Sheet 1 route/accountability to the existing
target gate executors and `CR`/`FR`/`AC` anchors, plus a non-duplicating pointer from `Modular_PRD.md`
§8.1 and a Register addendum on `D-232`. **`UJ1` and `UJ2` are recorded explicitly open in §6.1, by
direct Chief Editor instruction not to guess them** — neither is answered here.

**Not applied this pass, deferred to a follow-up round, by the same explicit scoping:** the
`FN-GATES-01-05.md` target-path edit, storyboard panel repair, UML/data-flow diagram changes, the
Encyclopedia update, and the Artifact Inventory mapping. `B-117` remains `Open` — this acknowledgement
closes none of it.

## Lane B review — Chief Editor resolves `UJ1`/`UJ2` at the journey boundary, 2026-09-16

### Normalized clarification

The Chief Editor has restated the historical V1 initiation chain: the human Chief Editor supplies
the manual record through the UI; the Senior Journalist agent reacts to that accepted record and
emits the `EW`-start event; the selected route then proceeds through the phase gates and editorial
workflow; the UI projects the editorial state and evidence back to the Chief Editor. This is a
clarification of the existing journey, not a new route, gate, role or build authorization.

That clarification resolves the two questions only when their scopes remain separate:

| Order | Question | Resolved V1 meaning | What it does not mean |
|---:|---|---|---|
| 1 | `UJ1` — who selects `ROUTE-PROD-1`, and when? | `V1-SM05` is already the Judge-selected `ROUTE-PROD-1` slice. The Chief Editor submits the manual source package in the UI; the Senior Journalist agent then emits `EW` start; `OP-PITCH` records/completes the Route-1 classification before T1 begins. V1 therefore needs no free-form route chooser. | The Chief Editor does not execute `EW` or T1. The Senior Journalist trigger does not choose editorial judgment, complete T1 or advance article state. This does not decide classification UX for later routes. |
| 2 | `UJ2` — what observable act satisfies Desk Editor route accountability? | Sheet 1 creates **no additional Desk Editor act**. The observable V1 evidence is the work-order/route record naming `ROLE-DESK-EDITOR` as `raci_scope=factory_route`, `A`, plus its append-only audit projection in the editorial UI. | Route `A` is not a button, gate, transition or proof that a sign-off occurred. It does not make Desk Editor the T5 Chief Editorial Desk. `OP-FINAL-SIGNOFF` is a separate Sheet 2 control whose executor/approval contract remains unresolved and cannot be used to backfill route accountability. |

This also reconciles two existing records that otherwise appear contradictory. `B-071` Round 56
correctly places `EW` before route classification, while `factory-route-operation-crosswalk.md` §3.2
defines the `EW` event as `OP-PITCH`'s entry trigger and the logged route classification as its
completion evidence. The applied `requirements-traceability-map.md` §6.1 compresses both into one row;
Lane A should expand the order when replacing its `UJ1 open` text rather than reverse the trigger.

### Parent decision before child artifact edits

| Order | Decision | Accept effect | Reject/change condition |
|---:|---|---|---|
| 1 | Preserve the fixed first slice: `V1-SM05` uses `ROUTE-PROD-1` | Removes a route-selection UI decision from the first MMF and keeps the shortest complete journey bounded | A later Judge act replaces the first route slice |
| 2 | Preserve the initiation chain: Chief Editor UI record → Senior Journalist `EW` → `OP-PITCH` route classification → T1 | Gives construction and BDD one testable order without making the human an agent | A replacement trigger contract names equivalent audit and refusal evidence |
| 3 | Treat Sheet 1 Desk Editor `A` as an observable assignment, not an execution node | Closes `UJ2` without inventing a gate or approval | A separate Judge act adds a Desk Editor operation and its atomic contract |
| 4 | Keep Sheet 2 `OP-FINAL-SIGNOFF` open | Prevents an unverified A-only row from becoming an implied V1 button or approval | Its `R`, acting-principal rule and completion evidence are explicitly accepted |
| 5 | Apply the resolution to existing artifact owners | Removes `UJ1`/`UJ2` placeholders and makes the journey testable | Any proposed edit creates a duplicate journey, UML, state machine or RACI source |

### What remains unclear after the clarification

The business journey is now clear. Four implementation-readiness details still need specification,
not another business-direction question:

1. the canonical work-order/route-record field that stores `route_id`, `raci_scope`, route `R` and
   route `A` without copying them into every transition;
2. the exact validation event that accepts the Chief Editor's manual package and permits the Senior
   Journalist agent to emit `EW`;
3. the UI projection that shows route accountability separately from current gate executor and
   article state; and
4. the refusal/retry rule when `EW` is requested without a valid intake record, or is replayed for
   the same workflow instance.

These are Lane A specification tasks and later Lane B verification inputs. They do not reopen who
initiates the journey, the first V1 route, the Senior Journalist trigger, or the Desk Editor role.

### Cross-artifact gap and draft fix

| Artifact owner | Current gap | Lane A draft fix | Completion evidence |
|---|---|---|---|
| `V1-DECISION-REGISTER.md` | `D-232` follow-on still calls `UJ1`/`UJ2` open | Record the Judge clarification and the bounded resolutions above; keep `OP-FINAL-SIGNOFF` open | One decision act distinguishes UI supplier, trigger agent, route assignment and Sheet 2 sign-off |
| `requirements-traceability-map.md` §6.1 | Step 2 compresses selection and `EW`; both questions remain marked open | Split the ordering into manual-record accepted → `EW` start → `OP-PITCH` route classification → T1; replace the two open cells with the resolved evidence contracts | Forward trace reaches BDD cases and backward trace returns to Sheet 1, §3.2 and the Judge act |
| `Modular_PRD.md` | §8.1 points to the open placeholders | Keep the non-duplicating pointer, but remove the stale statement that `UJ1`/`UJ2` remain open after the trace map changes | No second journey table; changelog identifies the resolution |
| `FN-GATES-01-05.md` | Target path does not yet expose the pre-T1 UI/trigger/route boundary | Add a precondition/interface note: accepted manual record, `EW` event, Route-1 classification, then T1; route `A` is context, not executor | Missing record blocks `EW`; `EW` cannot complete T1; route `A` never authorizes a gate transition |
| Storyboard/story panels | Historical A2 starts at T1 and uses stale intake semantics; target route panel is absent | Repair A2 and add one target Route-1 normal/revision walk inside the existing storyboard | Chief Editor UI, Senior Journalist agent, route record, T1–T6, revision and LinkedIn `ManualReady` are visible in order |
| UML/data-flow views | Existing embedded views do not show the pre-T1 boundary | Update the storyboard's existing Mermaid views; do not create standalone UML/data-flow artifacts | Sequence and data flow agree on actor, event, stored record, state effect and refusal path |
| Encyclopedia | Entries 01/06 do not yet teach the resolved trigger/accountability separation | Update role/gate and manual-intake entries after the governed source commit | Desk Editor, Chief Editorial Desk and Chief Editor remain distinct; no scraping or AI intake trigger is introduced |
| `V1-BUILD-SPEC.md` | Build readiness lacks the resolved pre-T1 acceptance boundary | Add the DoR/BDD dependency only; do not authorize construction | The first MMF packet names the four remaining specification details above |
| `V1-ARTIFACT-INVENTORY.md` | No artifact is created or retired | Mark unaffected unless Lane A creates a new file, which this review rejects | Existing owners receive the edits; no duplicate artifact appears |

### Lane A follow-up — highest parent first

1. Record the Chief Editor's bounded `UJ1`/`UJ2` resolution in the Register.
2. Correct §6.1's order and remove its two stale open markers.
3. Specify the four remaining implementation details as acceptance/refusal contracts.
4. Propagate the non-duplicating pointer and DoR effect to `Modular_PRD` and `V1-BUILD-SPEC`;
   state explicitly that the Artifact Inventory is unaffected.
5. Update `FN-GATES`, then repair the existing storyboard panels and their embedded UML/data-flow
   views from that contract.
6. Update the affected Encyclopedia entries and cross-references only after the canonical owners
   agree.
7. Have Lane B/C review the resulting construction and operational observability interfaces.
8. Run the full consistency suite, commit the governed source packet, then rebuild Graphify and prove
   `lastAnalyzedHead` equals that source commit.
9. Return to B-117 with the decision ID, exact write set, verification evidence and residual open
   items. Close this child only when no artifact still says `UJ1` or `UJ2` is open.

### Guaranteed failures and failure-derived success criteria

| Guaranteed failure | Required success evidence |
|---|---|
| The UI submission itself is logged as a Senior Journalist or Reporter agent act | Supplier identity is human Chief Editor; `EW` and T1 record their actual agent principals separately |
| `EW` fires without an accepted manual record | Refusal test produces no workflow instance, gate completion or state transition |
| `EW` or route assignment completes T1 | Test proves both are pre-T1 context/events and T1 requires its own Reporter evidence |
| A free-form route picker silently changes the first V1 slice | V1-SM05 records fixed `ROUTE-PROD-1`; later-route classification remains separately governed |
| Desk Editor route `A` is rendered as T5 executor or direct state transition | UI and stored evidence use separate route-accountability and gate-executor fields |
| Assigned route `A` is treated as evidence of approval | Test distinguishes accountable assignment from an actual operation/sign-off record |
| `OP-FINAL-SIGNOFF` is invented to close `UJ2` | DoR remains blocked on its existing executor/atomic-completion choice until separately decided |
| The storyboard and trace table show different initiation order | Both show Chief Editor record → Senior Journalist `EW` → route classification → T1 |

Graphify is synchronized at `9baaf41` (`lastAnalyzedHead` equals `HEAD`, `stale=false`). This
handoff-only review is excluded from the governed-doc graph under `D-231`; no rebuild is due until
Lane A applies the canonical source packet.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | `UJ1` resolved for the bounded V1 Route-1 journey | Lane A Register and traceability propagation |
| Approve | `UJ2` resolved as observable route assignment/audit evidence, with no new Desk Editor act | Lane A Product/Fn_Spec/storyboard propagation |
| Approve-with-conditions | V1-SM05 pre-T1 journey readiness | Specify persisted record, acceptance event, UI projection and replay/refusal rules |
| Approve-with-conditions | B-117 child closure | All canonical owners remove the stale `UJ1`/`UJ2` open markers and independent review passes |
| Defer | `OP-FINAL-SIGNOFF` executor and approval contract | Separate Sheet 2 operation decision before any implementation |
| Defer | Application construction | Fresh bounded work order after DoR and lane authorization |
| Reject | Chief Editor directly executing `EW` or T1 | Human supply, Senior Journalist trigger and Reporter gate execution remain separate facts |
| Reject | Treating Desk Editor route `A` as T5, a button, a transition or proof of approval | Preserve RACI scope and evidence distinctions |

## Lane A acknowledgement — full follow-up applied, `UJ1`/`UJ2` resolution propagated, 2026-09-16

**Acknowledged and applied**, by the Chief Editor's explicit direction to clear the full backlog
this round rather than defer again. Both citations (`B-071` Round 56, `factory-route-operation-
crosswalk.md` line 156) were independently verified against source before use.

**Applied:** `V1-DECISION-REGISTER.md`'s `D-232` addendum records the `UJ1`/`UJ2` resolution;
`requirements-traceability-map.md` §6.1 splits the pre-T1 ordering into steps 2a/2b with resolved
evidence contracts, replacing the two open markers; `Modular_PRD.md` §8.1's note and a changelog row
are corrected; `FN-GATES-01-05.md` gets new §3.0 stating the precondition ahead of T1;
`docs/journal/2026-08-18-storyboard-business-and-digital-twin.md` Panel A2 is annotated in place
(not redrawn — its Mermaid views remain the UML/data-flow owner per `B-087`/`B-096`);
`docs/ENCYCLOPEDIA-SYNC.md` flags Entries 01 and 06 as affected-not-yet-reviewed, without touching
the hosted Artifact itself; `V1-BUILD-SPEC.md` gets a DoR-dependency note naming the four remaining
specification details.

**Not applied — explicitly out of scope:** `V1-ARTIFACT-INVENTORY.md` is left unedited (no artifact
created, retired, or resequenced — stated in the Register addendum's tier table, which satisfies
`D-54` without a no-op file edit). The four DoR-blocking specification details themselves remain
unresolved, by design — this round resolves the business journey, not the implementation contract.
No application code, schema, workflow, or hosted Encyclopedia content changed. `B-117` remains `Open`
— this closes the `UJ1`/`UJ2` child, not the entry.

## Lane B independent review of `edbfe72` — UJ closure accepted; artifact and Route-1 DoR closure overstated, 2026-09-16

### Review boundary and result

Lane B reviewed the applied `D-232` follow-on at `edbfe72` against `B-071` Round 56,
`factory-route-operation-crosswalk.md` §§2–4, the Product requirements, `FN-GATES`, the storyboard
and its embedded Mermaid views, `ENCYCLOPEDIA-SYNC.md`, the V1 tracking set and the live Graphify
state. The business result is sound: `UJ1` and `UJ2` are resolved and no new Chief Editor choice is
required for them. The applied packet is not yet the complete construction/verification artifact
set, and the four-item DoR list is incomplete.

### Parent-first decision table

| Order | Decision | Accept/Reject | Reason and dependent effect |
|---:|---|---|---|
| 1 | Accept the bounded `UJ1`/`UJ2` resolution | **Accept** | The Chief Editor supplies the record; Senior Journalist emits `EW`; Route 1 is fixed for the V1 slice; Desk Editor `A` is an observable route assignment, not a gate |
| 2 | Treat `edbfe72` as complete propagation of that bounded business decision | **Accept with corrections** | Register, trace map, Product pointer, Fn Spec precondition and Build-Spec hold are present; two semantic defects below must be corrected |
| 3 | Treat the storyboard/UML/data-flow requirement as completed by an annotation | **Reject** | The diagram remains deliberately stale and its new annotation contradicts the diagram boundary; implementation and verification still lack one coherent target view |
| 4 | Treat the four named implementation details as the complete Route-1 DoR remainder | **Reject** | `B-071` Round 56's required `OP-PITCH`, `OP-DRAFT` and `OP-FINAL-SIGNOFF` execution contracts still block the route; `OP-PITCH` is now used by the target path while its source row remains `UNVERIFIED` |
| 5 | Treat Encyclopedia propagation as complete | **Reject** | `ENCYCLOPEDIA-SYNC.md` explicitly says Entries 01 and 06 are not yet reviewed; no hosted entry was changed |
| 6 | Close B-117 | **Defer** | The UJ child can close; the Route-1 DoR, target visual and Encyclopedia children remain open |

### Specific defects in the applied packet

| ID | Applied text/problem | Why it fails | Draft correction |
|---|---|---|---|
| `B117-R1` | Trace §6.1 step 2b calls the Route-1 classification **“`EW`'s completion evidence.”** | Crosswalk §3.2 says `EW` is `OP-PITCH`'s **entry trigger** and the logged pitch/route classification is **`OP-PITCH` completion evidence**. Reversing that relationship makes `EW` look like a multi-step operation rather than an event | Replace with: “`OP-PITCH` completion evidence; Senior Journalist `EW` is its entry trigger.” Use the stable §3.2 anchor, not mutable line 156 |
| `B117-R2` | Storyboard says three events precede the diagram's “Chief Editor paste source URL,” but event 1 is the same Chief Editor supply act already shown by that first arrow | One event cannot precede itself. A reader cannot determine whether UI acceptance happens before or inside the shown sequence | Say the existing first arrow represents the supply act, then show the two additional pre-T1 events after UI acceptance: Senior Journalist `EW`, then `OP-PITCH` completion |
| `B117-R3` | Register tier table marks UML/data flow complete through a prose annotation while the Mermaid diagram remains historical, stale and explicitly “not build input” | A prose note cannot verify message order, stored records, refusal paths or actor identity in the implementation-facing sequence. The packet claims completion while preserving the artifact defect | Mark UML/data flow **Open**. Add one clearly labelled target Route-1 sequence/data-flow view in the existing storyboard after the contracts below are specified; retain the historical panel unchanged |
| `B117-R4` | `OP-PITCH` is made a required pre-T1 action without resolving its `UNVERIFIED` two-`R` source shape | No single executable actor or atomic boundary exists. A test cannot know who completes route classification, and an implementation will choose by accident | Restore `B071-R204`: decide atomic Reporter pitch/log or a named milestone with separate Reporter/Journalist child acts; name its input, executor, output, failure and idempotency rule |
| `B117-R5` | Build Spec lists four details but omits required `OP-DRAFT` and `OP-FINAL-SIGNOFF` contracts | Route 1 cannot reach T5 with required operations whose executor/accountability/completion rules are unresolved. Calling them “business-process context” does not remove their `required` applicability | Add a second DoR group citing B-071 Round 56: decide `OP-DRAFT` executor/accountability and `OP-FINAL-SIGNOFF` acting principal/completion evidence; preserve verified `OP-COPY-EDIT` unchanged |
| `B117-R6` | Register tier table marks Encyclopedia complete because the sync ledger was edited | The ledger says both entries are **not yet reviewed** and the hosted artifact was not changed. A flag is intake evidence, not propagation evidence | Record Encyclopedia as **Open / affected**, review Entries 01 and 06, then republish or explicitly defer under the Encyclopedia's own opt-in process |

### Consolidated remaining DoR — no duplicate backlog

The earlier four details and `B071-R204` should be one parent checklist, not parallel lists:

| Parent | Child contract | Completion evidence |
|---|---|---|
| `DOR-R1` — pre-T1 record and event contract | Canonical intake/work-order/route record; Chief Editor supplier identity; acceptance event permitting `EW`; stored route R/A; no copying into each transition | One schema-neutral contract names fields/events, authority and audit projection; later Lane B maps it to persistence |
| `DOR-R2` — `OP-PITCH` atomic contract | Decide Reporter-only atomic act or decomposed milestone; define inputs, output route classification, executor(s), failure and replay/idempotency | Positive case creates one completed pitch/classification; duplicate event creates no second completion; ambiguous executor is refused |
| `DOR-R3` — `EW` refusal/retry contract | Missing/unaccepted intake, duplicate `EW`, failed pitch, later legitimate new workflow | BDD cases show no gate/state advance, stable workflow identity and append-only failure/retry evidence |
| `DOR-R4` — required Route-1 operation contracts | `OP-DRAFT` executor/accountability and `OP-FINAL-SIGNOFF` acting principal/completion evidence; `OP-COPY-EDIT` unchanged | Every required operation has one executable atomic/milestone shape before T5 readiness; no blank `R` or silently inherited `A` |
| `DOR-R5` — UI and target visual contract | UI separates supplier, route R/A, current gate executor and article state; storyboard contains one target normal/revision sequence and matching data flow | Chief Editor walkthrough and Lane B/C review can trace each visible fact to one authoritative record/event and one failure path |
| `DOR-R6` — Encyclopedia review | Entries 01/06 reviewed against the final contracts and their sync dispositions recorded | Hosted and local status agree, or an explicit opt-in deferral remains visible without a completion claim |

### Lane A follow-up — highest parent first

1. Correct `B117-R1` and the self-precedence wording in `B117-R2`; record the correction under the
   existing `D-232` follow-on rather than opening another business decision.
2. Replace the Build Spec's four-item remainder with, or point it to, the consolidated `DOR-R1`–
   `DOR-R6` checklist. Preserve `UJ1`/`UJ2` as resolved.
3. Present the bounded `B071-R204` operation choices for `OP-PITCH`, `OP-DRAFT` and
   `OP-FINAL-SIGNOFF`. These are the only remaining Judge choices in this child chain.
4. After those choices, specify the record/event and refusal/replay contracts in the owning Fn Spec
   and acceptance criteria; do not select schema fields in the storyboard.
5. Add one target Route-1 normal/revision Mermaid sequence and matching data-flow view inside the
   existing storyboard. Keep the historical A2/A5/A6 panels labelled as history.
6. Change the Register's UML/data-flow and Encyclopedia tier dispositions from complete to their
   truthful interim states, then complete or explicitly defer the Encyclopedia review.
7. Obtain Lane B construction-interface review and Lane C observability/recovery review against the
   same target view.
8. Run the full consistency suite, commit the canonical correction, rebuild Graphify, then return
   the commit and independent evidence to this entry. Close B-117 only after every `DOR-R*` row has a
   terminal disposition.

### Guaranteed failures and failure-derived success criteria

| Guaranteed failure | Success criterion derived from it |
|---|---|
| `EW` is implemented as an operation with “completion evidence” | `EW` is one attributable entry-trigger event; `OP-PITCH` alone owns classification completion |
| Chief Editor supply is shown both before and inside the same sequence | One target sequence shows the supply once, followed by acceptance, `EW`, pitch completion and T1 |
| Two source `R` values silently become one executor | Accepted `OP-PITCH` contract names atomic/decomposed shape; tests refuse any unapproved executor combination |
| Route reaches T5 while Draft or Final Sign-Off lacks an executable contract | Readiness test requires every applicable required operation complete with attributable evidence |
| Desk Editor route `A` silently fills a blank operation `A`/`R` | Route and operation RACI scopes remain separate; inheritance requires an explicit decision |
| A prose annotation is treated as executable UML/data flow | Target diagram and BDD agree on actors, event order, writes, refusal paths and revision behavior |
| Encyclopedia ledger flag is counted as reviewed publication | Sync row remains open until the entry text is reviewed and hosted/local disposition is recorded |
| B-117 closes because UJ1/UJ2 closed | Closure check requires terminal evidence for all six consolidated DoR parents, not one child decision |

Graphify is synchronized at `edbfe72` (`lastAnalyzedHead` equals governed-source `HEAD`,
`stale=false`). This independent-review addition is handoff-only and excluded by `D-231`; no rebuild
is due for this commit. A rebuild becomes due after Lane A changes the canonical owners above.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | `UJ1`/`UJ2` business resolution and its bounded Register/Product/Fn-Spec propagation | Preserve under `D-232` follow-on |
| Approve-with-conditions | Traceability map §6.1 | Correct `EW` entry-trigger versus `OP-PITCH` completion semantics |
| Approve-with-conditions | V1-SM05 DoR | Complete `DOR-R1`–`DOR-R6`, including the three required operation contracts |
| Defer | Storyboard/UML/data-flow completion | Add a coherent target view after operation and event contracts are decided |
| Defer | Encyclopedia Entries 01/06 | Review and republish, or record an explicit opt-in deferral |
| Defer | B-117 closure and construction | Terminal DoR evidence, independent review and fresh bounded build authorization |
| Reject | “Full follow-up applied” as meaning artifact completion | Only the bounded UJ propagation is complete |
| Reject | Treating a ledger flag, prose annotation or route `A` assignment as execution/verification evidence | Each needs its own governed completion evidence |

## Lane A acknowledgement — six defects corrected, `B071-R204` left open, 2026-09-16

**Acknowledged and applied**, all six independently checked against source before correcting —
`B117-R1` and `B071-R204`'s existence both verified directly, not taken on the review's word.

**Corrected:** `requirements-traceability-map.md` §6.1 (`B117-R1` — `EW`/`OP-PITCH` completion-
evidence direction; `B117-R4`'s `OP-PITCH` executor caveat added); the storyboard's Panel A2
annotation (`B117-R2` — self-precedence wording); `FN-GATES-01-05.md` §3.0 (`OP-PITCH` executor
caveat added); the Register's tier table (`B117-R3`/`B117-R6` — UML/data-flow and Encyclopedia
corrected from ✅ to **Open**, with a dated correction note); `V1-BUILD-SPEC.md` (`B117-R4`/`B117-R5`
— four-item list replaced by the consolidated `DOR-R1`–`DOR-R6` checklist, citing `B071-R204`).

**Not applied, by explicit Chief Editor direction:** `B071-R204`'s three operation-contract
questions (`OP-PITCH`, `OP-DRAFT`, `OP-FINAL-SIGNOFF`) stay open — recommended defaults exist in
`B-071` but are not selected here. `DOR-R2`/`DOR-R4` cannot close until they are. No target Mermaid
sequence/data-flow view was drawn (`DOR-R5` — depends on the same open decisions). Encyclopedia
Entries 01/06 remain flagged, not reviewed (`DOR-R6`). `B-117` remains `Open`.

## Lane B review — judgment-gate assignment to Sheet 2 task workflows, 2026-09-16

### Normalized clarification

The Chief Editor has clarified the relationship between the two workflow layers:

- Sheet 2 describes the newsroom's natural operational tasks; `my-editorial-app` represents them as
  attributable task workflows.
- Editorial phase/judgment gates and operational task workflows are separate. A completed gate may
  assign the virtual-node role(s) for the **next** task workflow. The resulting assignment triggers
  that task workflow; its completion evidence is then available to the next consuming gate.
- The Chief Editor's UI remains the human initiation and control surface. The user does not impersonate
  the assigned virtual-node role, and a displayed role name is not an executor identity.

“The judgment gate is done first” must therefore mean **the preceding gate completes before it
dispatches downstream work**. It cannot mean the consuming gate completes before the task evidence
that gate is required to judge. That literal same-gate reading is circular and cannot be implemented
or verified.

`OP-PITCH` is the bounded bootstrap exception: no judgment gate precedes the first task. The accepted
manual record permits the Senior Journalist `EW` event, and `EW` creates the first task assignment(s).
After that bootstrap, the normal gate-completion → role-assignment → task-workflow pattern applies.

### Parent-first decision table

| Order | Parent decision | Accept effect | Reject/change condition | Recommendation |
|---:|---|---|---|---|
| 1 | Keep judgment gates and Sheet 2 task workflows as separate state machines joined by events | Prevents task progress from becoming article state and preserves audit truth | Reject only with a replacement model that separately proves editorial judgment and operational work | **Accept** |
| 2 | A completed gate dispatches the **next** task, never the task whose evidence it just consumed | Removes the gate/task circular dependency | Reject only by supplying a complete non-circular event map | **Accept** |
| 3 | `EW` dispatches the initial `OP-PITCH` task assignment(s) | Gives the first task a valid bootstrap without pretending `EW` is a judgment gate | Reject only with another named pre-T1 dispatcher | **Accept** |
| 4 | A task starts from a persisted assignment naming operation, virtual role and actual executor principal | Makes role selection visible and testable without equating role with identity | Reject if assignments are intentionally ephemeral and equivalent audit evidence is supplied | **Accept** |
| 5 | Multiple Sheet 2 `R` values mean one child assignment per `R`, joined into one operation completion | Preserves every source responsibility and avoids silently selecting a favourite role | Reject if the Chief Editor chooses a deterministic single-role rule for that operation | **Approve-with-conditions; recommended for source fidelity** |
| 6 | Blank or `A`-only Sheet 2 cells are not filled by inference | Keeps the CSV evidence honest | Change only through the explicit choices below | **Accept** |

### `B071-R204` — what this clarification answers and what still needs a choice

| Operation | Trigger/assignment now clarified | Recommended executable shape | Remaining Chief Editor accept/reject choice |
|---|---|---|---|
| `OP-PITCH` | Bootstrap: accepted UI record → Senior Journalist `EW` → task assignments | Treat as a milestone with Reporter and Journalist child assignments, because Sheet 2 marks both `R`; Desk Editor remains operation `A`; one deterministic join records the logged pitch and Route-1 classification | **Accept milestone**, or explicitly select the earlier atomic Reporter-only alternative and explain why the Journalist `R` does not execute in Route 1 |
| `OP-DRAFT` | The preceding investigation/judgment completion dispatches the draft assignment(s) | Treat as a milestone with Reporter and Journalist child assignments, joined into one immutable draft-package completion; do not inherit route `A` silently | Decide operation accountability: **explicit `A = ROLE-DESK-EDITOR`**, or **`A = none_by_design`** with the route-level Desk Editor `A` kept separate. A blank field is not a decision |
| `OP-FINAL-SIGNOFF` | Completion of the preceding operational/gate prerequisites dispatches the sign-off control | Treat as an explicit A-only control performed by the assigned Desk Editor; record the acting principal, decision, reason, evidence versions and time; no invented `R` | **Accept the A-only control exception**, or name one real `R`. Without one choice, the task cannot complete |

The milestone recommendations preserve Sheet 2 instead of collapsing two source `R` values into one
unrecorded preference. They do not mean two article-state transitions: child task completions write
task evidence; a deterministic join writes one operation completion; only the governed editorial gate
may change article state.

### Required assignment and event contract

Lane A should specify the following schema-neutral contract before Lane B chooses persistence fields:

| Record/event | Required meaning | Must not be used as |
|---|---|---|
| `task_assignment_created` | workflow instance, route, `operation_id`, assigned virtual-node `role_id`, actual/expected executor principal, assignment basis, source gate/event, timestamp | Article-state transition or proof the task completed |
| `task_child_completed` | assignment ID, executor principal, evidence reference/version, result, timestamp | Operation completion when sibling assignments remain |
| `task_operation_completed` | deterministic join over the required child set; one idempotency key and one immutable completion record | Editorial judgment, route R/A rewrite or human approval |
| `task_assignment_refused` | unknown role, unapproved role substitution, missing prerequisite, duplicate/replayed assignment or invalid executor | Silent retry or mutation of the prior assignment |
| `gate_completed` | editorial judgment/state event that may emit the next task assignment set | Evidence that downstream operational work already occurred |

The assignment basis must say whether the role came from Sheet 2 `R`, an accepted A-only control,
or a separately governed route/gate rule. The audit stores the actual executor principal separately
from `role_id`; one role may have successive attempts, and an attempt never changes the role catalog.

### Cross-artifact gap and draft fix

| Artifact | Current gap after `9f6b712` | Lane A draft fix | Completion evidence |
|---|---|---|---|
| `V1-DECISION-REGISTER.md` | `B071-R204` remains open with no gate-to-task interpretation | Record the accepted parent model and the three operation choices; state what remains rejected/deferred | One Judge act distinguishes bootstrap, next-task dispatch, multi-role join and A-only control |
| `factory-route-operation-crosswalk.md` | §3.2 is a linear operation sequence and does not name the assigning gate/event for each task | Add `assignment_source`, `assigned_role_set`, `completion_join` and `consuming_gate`; preserve the source R/A rows separately | Every required Route-1 task has a non-circular producer and consumer |
| `raci-involvement-matrix.md` | Role eligibility exists, but task-assignment events are not defined | Add a reference to the operation-assignment contract without turning gate eligibility into operation responsibility | A role can be assigned only where Sheet 2 or an explicit exception permits it |
| `Modular_PRD.md` | User stories cover gates and UI but not the task-assignment boundary | Add/refine requirements and ACs for assignment, multi-role completion, refusal, idempotency and visible task progress | BDD traces each task from gate/event through assignment and completion to the next gate |
| `FN-GATES-01-05.md` | Pre-T1 `OP-PITCH` is named, but later gate-to-task dispatch and consuming-gate evidence are absent | Add an interface section, not task implementation details, defining what each gate consumes and what downstream assignments it may emit | A gate cannot consume future evidence or dispatch an unauthorized role |
| Storyboard/story panels | Target Mermaid remains open and no task workflow appears between judgment nodes | Add one target Route-1 normal/revision sequence after the operation choices; show task child/join lifelines separately from article state | Chief Editor, dispatcher, virtual roles, task records, gates and UI projections appear once and in order |
| UML/data flow | No authoritative gate → assignment → task → evidence → next-gate loop | Update the storyboard-owned Mermaid sequence/data-flow view; do not create a duplicate file | Every arrow names the event/record and its failure/replay path |
| Encyclopedia | Entries 01/06 remain pending; operational task versus editorial gate is not taught | Review Entry 01 for role/identity separation and Entry 06 for pre-T1 bootstrap after the final contract | Hosted/local status agrees or an explicit deferral remains open |
| Traceability and `V1-BUILD-SPEC.md` | `DOR-R2`/`DOR-R4` name the choices but do not yet express gate/task dispatch | Extend the existing rows; do not create another checklist | Each accepted operation choice maps to Product AC, Fn Spec interface, target panel and verification case |
| `V1-ARTIFACT-INVENTORY.md` | No new artifact is required | Keep unaffected; all changes land in existing owners | Register tier table says unaffected and no duplicate workflow artifact appears |

### Lane A follow-up — highest parent first

1. Present the four parent choices together: next-task dispatch, `EW` bootstrap, multiple-`R`
   milestone handling, and A-only control handling.
2. Obtain the Chief Editor's explicit selections for the three `B071-R204` rows. The clarification
   supplies orchestration but does not by itself select the multi-role/accountability exceptions.
3. Record one Register act and update the existing Build-Spec `DOR-R2`/`DOR-R4` rows; do not open a
   duplicate decision or readiness list.
4. Update the crosswalk first. It owns the route-operation join and must name assignment source,
   role set, completion join and consuming gate before Product/Fn Spec diagrams can be correct.
5. Propagate behavior and acceptance cases to `Modular_PRD` and the owning Fn Specs, keeping UI
   progress, task status and article state distinct.
6. Draw the target Route-1 normal/revision storyboard and embedded UML/data-flow views from that
   accepted contract. Preserve the dated historical panels.
7. Complete or explicitly defer the Encyclopedia review, then obtain Lane B construction-interface
   and Lane C observability/recovery reviews.
8. Run the full suite, commit the canonical packet, rebuild Graphify, and return its decision ID,
   exact write set and residual DoR state to B-117. Close the child only when all three operation
   contracts and the target visual have terminal evidence.

### Guaranteed failures and failure-derived success criteria

| Guaranteed failure | Required success evidence |
|---|---|
| A consuming judgment gate must complete before the task evidence it judges exists | Event map proves the **preceding** gate dispatches work and the **next** gate consumes it |
| `OP-PITCH` waits for a preceding judgment gate | `EW` bootstrap creates the initial assignment set without advancing T1 |
| Multiple Sheet 2 `R`s collapse into whichever agent happens to run first | Required child-role set is persisted; deterministic join refuses completion while a required child is absent |
| One child task changes article state | Task records remain operational evidence; only the authorized editorial gate writes the state transition |
| Role label is logged as executor identity | Assignment records both `role_id` and actual executor principal; mismatched or unauthorized principals are refused |
| Blank `OP-DRAFT` accountability silently inherits route `A` | Accepted contract records explicit Desk Editor `A` or explicit `none_by_design`; route RACI remains separate |
| A-only Final Sign-Off is treated as implicitly executable | A specific accepted exception records Desk Editor acting principal and completion evidence, or the operation stays blocked |
| Retry produces duplicate assignment, operation completion or downstream gate effect | Stable idempotency keys yield one effective child/join/gate effect with append-only attempt evidence |
| UI shows Reporter → Desk Editor as a direct transition | UI separately shows current gate, operational task, assigned role/principal and route accountability |
| Natural newsroom labels are copied into code without an event contract | Every Sheet 2 row used by V1 maps to trigger, assignment cardinality, completion evidence, consumer and refusal tests |

Graphify is synchronized at `9f6b712` (`lastAnalyzedHead` equals `HEAD`, `stale=false`). This review
changes only the Graphify-excluded handoff layer; no rebuild is due until Lane A changes the canonical
owners above.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Separate editorial-gate and operational-task workflows joined by persisted events | Lane A Register/crosswalk propagation |
| Approve | Preceding-gate → next-task dispatch and `EW` bootstrap for `OP-PITCH` | `B071-R204` parent decision packet |
| Approve-with-conditions | Multiple-`R` milestone/join treatment for `OP-PITCH` and `OP-DRAFT` | Chief Editor accepts or replaces the recommended cardinality rule |
| Approve-with-conditions | Desk Editor A-only `OP-FINAL-SIGNOFF` control | Chief Editor explicitly accepts the exception and evidence contract |
| Defer | Target storyboard/UML/data flow and Encyclopedia review | Apply after the operation decisions and Fn Spec contract |
| Defer | B-117 closure and construction | Terminal `DOR-R1`–`DOR-R6`, independent review and fresh build authorization |
| Reject | Same-gate “complete judgment, then produce the evidence it judged” ordering | Circular and unverifiable |
| Reject | Inferring one executor from multiple `R`s, an `A` from route scope, or `R=A` from a blank cell | Requires an explicit accepted operation contract |

## Lane B follow-up — business judgment stages and role-selected operations (2026-09-17)

### What happened

Source: Chief Editor attachment `73798c21-9652-432d-a05e-c3d6674eabb6/pasted-text.txt`.
Reviewed at `aead9d8`; this is a continuation of this Open entry, not a new handoff or
Lane A answer. Planning only. No application, canonical governance or graph changes applied.

**Rewritten request:** reconcile the Chief Editor's business judgment stages and role-selected
Sheet 2 operations with the existing route matrix and technical transition identifiers;
record the remaining decisions, draft acceptance examples, and specify Lane A's canonical
corrections before construction.

**Correction to the preceding Lane B proposal:** mandatory Reporter-plus-Journalist joins and
an EW bootstrap assignment for OP-PITCH were recommendations, not established requirements.
Withdraw them as prerequisites. The new explanation selects Reporter at business T1 and
Journalist at business T3, each running the applicable operations. Likewise, withdraw the
claim that the user's gate-before-task sequence is necessarily circular: a gate can select a
role using existing input, then dispatch that role's work. Only a gate requiring its own
not-yet-created output would be circular. Do not conflate selection with assessment of the
result. This correction does not settle the source-marked Complex Series/Legal Risk milestone
decomposition or silently amend D-176.

### What is established, and what still needs an answer

Temporary qualified labels below distinguish concepts; they are not new persisted IDs.

| Parent-first item | Evidence / gap | Lane A action and acceptance condition |
|---|---|---|
| 1. Intent and namespace | User's business:T1–T5 are not proven identical to transition:T1–T11 or EG1–EG5. Verification apparatus also uses historical planning:T1 | Record business stage purpose, input, role-selection result, dispatched tasks and result consumer; map each to existing identifiers, allowing one-to-many mappings. Accept only when no mapping is justified by matching numbers alone |
| 2. Entry and Reporter | User specifies manual UI input → Senior Journalist processing → business:T1 selects Reporter → OP-PITCH → OP-DRAFT. Reporter does not execute OP-SIGNOFF | Reconcile traceability §6.1 rows 2a/2b and crosswalk §3.2, which currently place OP-PITCH before technical T1. State whether these are different events or a changed ordering; do not require the user to invent technical IDs |
| 3. Investigator / Journalist / Senior Journalist | User describes role-selected operations and candidate-route comparisons. Business:T3 names PROD-3 but compares PROD-2 with PROD-1. D-176 makes Complex Series conditional on PROD-3 and not applicable on PROD-1/FALLOUT-1 | Distinguish candidate evaluation from effective route change. Resolve the T3 route reference and whether D-176 applicability is amended. Define comparison inputs, outcome, tie/insufficient-evidence behavior and who may change the effective route; no automatic rerouting inferred |
| 4. T5 accountability | Chief Editor answered on 2026-09-17: "Preserve Sheet 2; correct the description" | Keep OP-COPY-EDIT R = ROLE-CHIEF-EDITORIAL-DESK and A = ROLE-DESK-EDITOR. Remove the proposed Chief Journalist copy-edit subtask and the assertion that copy-edit lacks R. OP-PITCH and OP-RESEARCH A remain ROLE-DESK-EDITOR. This is description correction, not replacement RACI |
| 5. Draft/signoff contract | User explicitly supplies Chief Editorial Desk A for Draft, and describes signoff as completing accountability before human publication review | Record this intent, map OP-DRAFTING to OP-DRAFT and confirm OP-SIGNOFF's relationship to OP-FINAL-SIGNOFF. Specify the signoff actor and evidence. Having an A assigned is distinct from that actor completing a review; neither alone is human publication approval |
| 6. Propagation and closure | Earlier textual fixes exist, but this new mapping is not yet canonical | Apply the accepted parent decisions in the owning tiers, independently review the resulting journey, and then disposition the affected B-117 child. DoD checklist written does not mean software DoD satisfied |

Normalize `ROUTE-PROD-001/002/003` to the existing `ROUTE-PROD-1/2/3` references and
`ROUTE-FALOUT-001` to `ROUTE-FALLOUT-1` in the proposed mapping. This spelling normalization
does not change applicability or authority. Never alias Desk Editor, Chief Editorial Desk and
Chief Journalist to each other.

**Corrected T5 description (Chief Editor clarification, 2026-09-17):** Chief Editorial Desk
performs the Responsible copy-edit operation; Desk Editor retains its Sheet 2 Accountable role
for copy-edit, pitch and research. Chief Journalist is not introduced as a substitute copy-edit
Responsible actor. OP-FINAL-SIGNOFF retains Desk Editor A and its source blank R; the execution
and completion-evidence contract still needs specification. Gate role selection does not overwrite
these operation assignments. OP-DRAFT's source A remains blank: the earlier proposed application
default must be recorded separately if adopted, not portrayed as a Sheet 2 fact or silently assigned
to Desk Editor by this correction.

### Cross-artifact impact and bounded write-set proposal

| Owner / artifact | Finding and proposed correction |
|---|---|
| Register, V1 Build Spec, V1 Artifact Inventory | Lane A records accepted decisions and the exact affected sections under D-54. Retain SETUP-SPIKE-000 and V1-SM05/06 planning context; no new sprint or build authorization |
| `governance/requirements-traceability-map.md` §6.1 | Canonical parent mapping. Replace ambiguous bare stage references with qualified meanings; link business stage → role → OP → requirement → acceptance example → target sprint |
| `governance/factory-route-operation-crosswalk.md` §§1–4 | Preserve CSV evidence; add decided role-selection semantics and resolve applicability/operation authority differences before changing the join |
| `Modular_PRD.md` §8.1 / relevant feature groups | Existing pre-T1 ordering note requires reconciliation. Behavior changes land in their owning feature groups; tracking changes alone cannot silently change FR/AC meaning |
| Relevant `fn-specs/` | Specify input, role assignment, task dispatch, completion and human review behavior after the parent decisions. Keep database/UI implementation details downstream |
| Storyboard journal, panels A2–A7/B3–B6, embedded sequence/UML and data-flow diagrams | Current annotations and diagrams use historical transition labels. Show separate selection, task execution and human actions with mapped identifiers. Update actual diagram edges as well as prose; preserve historical views as such |
| `ENCYCLOPEDIA-SYNC.md` and linked entries | Verify role/gate descriptions against the accepted mapping. No claim of full Encyclopedia consistency follows from checking the sync ledger alone; record entry-specific evidence or explicit deferral |
| `specs/SPECS-TRANSITION-ENFORCEMENT.md` §§3–4, §8 | Confirmed collision: table says Gate but includes state transitions and non-transition publication events. Draft display qualification `transition:T1`, etc.; retain existing stored/API identifiers until impact is mapped. Reconcile historical human-only T5 with the accepted business mapping before changing enforcement/tests |
| `specs/SPECS-VERIFICATION-APPARATUS.md` | T1 refers to a historical setup/runbook stage, not editorial judgment. Qualify that reference as historical planning stage; do not relabel it as an editorial transition |
| `specs/SPECS-PUBLICATION.md` | No T-series collision found in the identifier scan. Preserve manual-ready versus automated publication separation; trace its historical S4/[V1] scope through the canonical migration matrix rather than assuming it belongs to the new first MMF |
| `specs/README.md` | Retain D-29 tier-4 ownership and D-30 redundancy rule. Technical specs remain downstream implementation decisions; link them to intent instead of copying them into intent documents |

The specs inventory inspected contains these three technical documents and README. This is an
impact review and draft write set, not verification that every proposed correction is already
applied. Frozen PRD/Charter/schema remain unaffected by this handoff.

### Lane A follow-up, in dependency order

1. Record the new intent and the withdrawal of Lane B's earlier inferred join/bootstrap requirements.
2. Build the namespace/semantic mapping under the traceability parent; supply technical IDs itself.
3. Apply the settled Sheet 2 description correction. Resolve the remaining business choices: T3 route reference,
   candidate comparison versus rerouting, and signoff completion meaning. Do not reopen manual intake.
4. Apply accepted mappings to the crosswalk and behavior tier; then update tracking and all affected
   visual/spec references using the bounded write set. Record unaffected sections explicitly.
5. Review one normal and one revision journey. Lane B checks the application evidence contract;
   Lane C checks workflow consumption and operational evidence needs without adding app behavior.
6. Record source commit, QA evidence and independent review in the existing lifecycle fields.
   Close only the resolved children; retain named unresolved children or transfer later scope to
   the canonical backlog. Acknowledged/Applied is not independent Verified.
7. Run governed-doc Graphify synchronization after completed, verified canonical intent changes.

### Failure-derived acceptance examples (draft BDD, not executed tests)

- Given business:T1 selects Reporter, when tasks dispatch, then Reporter receives Pitch and Draft
  under that stage's assignment; no mandatory Journalist join is inferred from the multi-R source row.
- Given business:T3 later selects Journalist, when Pitch/Draft run, then their evidence is distinct
  from Reporter's earlier work; replay of the same dispatch produces no duplicate effective task.
- Given Reporter has no signoff task, when its task pass ends, then no signoff approval is fabricated.
- Given a candidate route is evaluated, when no authorized reclassification occurs, then effective
  route and its applicability rules remain unchanged. A conflicting task is held with a reason.
- Given all applicable operations have named A roles but required review evidence is missing,
  then the UI does not claim those reviews completed or the article approved for publication.
- Given the agent workflow completes, then the user can review in the publication UI; agent-stage
  completion alone does not publish or claim that manual LinkedIn publication occurred.
- Given an article returns for revision, then new task/decision evidence refers to that revision
  and earlier evidence remains identifiable; which prior approvals must be renewed is specified.
- Given a label business:T5 appears, then its mapping never silently invokes historical
  transition:T5's human-only behavior merely because both share a number.

These are deterministic failure conditions if the stated mistakes are implemented, not a prediction
that the project will fail. Missing comparison rules or mappings are readiness gaps, not test results.

### What Lane B did instead / graph currency

Drafted this correction in the existing B-117 only. No Lane A answer, closed status, Register ID,
role replacement or application code was fabricated. The T5 role clarification is answered above;
canonical propagation and the separate signoff contract remain outstanding.
Graph metadata names `9f6b712` as last analyzed with `stale=false`; the difference through
`aead9d8` is B-117 alone. Under the handoff exclusion this is not governed-source graph drift.
No rebuild is due for this appendix. Reassess after Lane A's canonical source changes, not simply
because another handoff was written. The cached upstream is behind by one local commit; this
review does not assert that the latest handoff is pushed.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Intent clarification: judgment selects role before its task workflow; withdraw inferred mandatory Pitch/Draft joins | Phase 1 Lane A mapping |
| Approve-with-conditions | Traceability/crosswalk and Product/Fn Spec correction packet | Phase 1 resolve named role/route/signoff differences, then propagate |
| Approve | Preserve Sheet 2 RACI; correct the T5 description | Phase 1 Lane A propagation; no replacement RACI authorized |
| Defer | B-117 affected-child closure and independent verification | Canonical corrections and normal/revision evidence |
| Reject | Bare T-number equivalence, automatic publication, or claiming this draft is applied governance | Product/SPECS review before build readiness |

### Troubleshooting follow-up — commit versus closure (2026-09-17)

The uncommitted handoff was Lane B's workflow omission, not missing Chief Editor approval.
README's D-184 permits Eligible Lane B to commit its single declared handoff path; its
one-outgoing-commit proof constrains pushing, not committing an entry containing open questions.
Declared commit path: `docs/handoff/B-117-open-backlog-aging-and-refinement-closure.md` only.

The earlier phrase "route/signoff questions remain open" mixed three different states:

- **Answered intent:** roles are selected before their task workflows; preserve Sheet 2;
  signoff ensures accountability coverage before the user's publication review. Do not ask the
  Chief Editor to restate these purposes.
- **Lane A specification work:** translate that intent into operation completion evidence and
  UI behavior. Crosswalk §3.2 already defines Final Sign-Off's input (completed required/triggered
  operations), output (signed-off package), and return target (earliest incomplete required
  operation). Reuse those facts. Its §4 still prohibits inferring an R=A execution exception;
  the remaining execution mechanism must be proposed explicitly, not confused with missing purpose.
  Preserve OP-DRAFT's blank source A while separately recording the earlier explicit application
  default proposed by the Chief Editor. No new default is inferred from the copy-edit correction.
- **Narrow reconciliation defects:** T3's PROD-3 reference differs from its PROD-2/PROD-1 comparison;
  Complex Series applicability differs from D-176. Lane A should first map candidate-route
  evaluation separately from executing an operation under the effective route. That may remove
  the apparent conflict. Escalate only a residual choice that actually changes route applicability;
  do not treat every comparison as a requested route change or require all comparison detail as
  a prerequisite to this documentation commit.

Thus the clarification is answered; canonical propagation and bounded contract reconciliation
remain open work. This does not prevent committing the handoff, and committing it does not mean
the application contract is complete or independently Verified.

## Lane A acknowledgement — settled vs. still-open, no propagation this pass, 2026-09-17

**Acknowledged, `aead9d8` and `73e4e8b` both received.** No canonical doc was touched by either —
correctly, since `73e4e8b` itself withdraws part of `aead9d8`'s recommendation (the mandatory
Reporter+Journalist join and the "`EW` bootstrap is required" framing for `OP-PITCH`) within the same
day. Nothing from either round has been applied to `requirements-traceability-map.md`,
`FN-GATES-01-05.md`, `V1-BUILD-SPEC.md`, the storyboard, or the Register — by explicit Chief Editor
direction, given the foundation is still moving.

**Genuinely settled, and requiring no correction on my side** (I never applied the superseded reading
anywhere): Sheet 2's `OP-COPY-EDIT` RACI is unchanged — `R = ROLE-CHIEF-EDITORIAL-DESK`,
`A = ROLE-DESK-EDITOR` — only a prior *description* of it was wrong, and that wrong description was
never propagated to any file I've committed. `OP-DRAFT`'s source `A` remains blank, not silently
assigned. The general principle that a gate may select a role from already-available input and then
dispatch that role's task — as opposed to a gate needing its own not-yet-created output — is noted,
but doesn't by itself resolve any of `B071-R204`'s three named questions.

**Still open, unchanged by this pass:**
- `OP-PITCH`'s exact execution contract — business:T1 selects Reporter, business:T3 candidate-selects
  Journalist; whether/how these compose is not yet a settled shape.
- `OP-FINAL-SIGNOFF`'s execution/completion-evidence contract — explicitly restated as unspecified,
  not resolved by either round.
- The `business:T3` route-reference (`PROD-3`) vs. comparison (`PROD-1`/`PROD-2`) discrepancy.
- A business:`T1`–`T5` ↔ technical `transition:T1`–`T11`/`EG1`–`EG5`/historical `planning:T1`
  namespace mapping — named as needed, not built.
- The claimed `docs/specs/SPECS-TRANSITION-ENFORCEMENT.md` and `SPECS-VERIFICATION-APPARATUS.md`
  identifier collisions — not yet independently checked against source.
- Target storyboard/UML Mermaid diagrams, Encyclopedia Entries 01/06 — unchanged from the last round.

`B-117` remains `Open`. This acknowledgement records receipt and the settled/open split; it applies
nothing to any canonical tier.

## Lane B independent review — Lane A acknowledgement overstates instability (2026-09-17)

### Review result

Lane A's repository report is correct: `0cf52ea` is pushed, the tree is clean, the affected range is
handoff-only, and no Graphify rebuild is due. Keeping B-117 Open is also correct because canonical
propagation and independent verification have not occurred.

The reason given for withholding the next Lane A correction is not supported. `73e4e8b` does not
leave two competing recommendations beside `aead9d8`; it expressly withdraws the earlier inferred
mandatory multi-role join and EW-bootstrap requirement. The later clarification is the controlling
handoff input. A correction within the discussion is provenance, not an unresolved contradiction.

### Settled facts Lane A can propagate without another Chief Editor round

| Parent item | Settled fact | Required Lane A treatment |
|---|---|---|
| 1. Role-selected execution | A judgment stage selects the role before dispatching that role's applicable operations. Reporter performs Pitch/Draft at business:T1; Journalist performs Pitch/Draft at business:T3. This is not a mandatory Reporter-plus-Journalist join | Preserve Sheet 2's source multiple-R row, and add the decided application-selection rule separately. Do not overwrite source provenance |
| 2. Copy-edit | Chief Editor answered: preserve Sheet 2. OP-COPY-EDIT R is Chief Editorial Desk and A is Desk Editor | Correct only the erroneous description; introduce no Chief Journalist substitute |
| 3. Draft accountability | Sheet 2's source A remains blank. The Chief Editor separately supplied Chief Editorial Desk as the application default A at business:T5 | Record source fact and application decision as separate fields. Do not call the application default a CSV fact or silently inherit route A |
| 4. Final Sign-Off purpose | It checks that applicable task accountability is complete before the user receives the publication-review flow. Sheet 2 retains Desk Editor A and blank R | The purpose is answered. Draft the bounded A-only control contract from existing §3.2 inputs/output: Desk Editor acting-principal attestation, list of applicable operations, missing-A refusal/return to earliest incomplete operation, signed-off-package event. Escalate only if this proposed execution conflicts with the intended A-only control; do not ask the Chief Editor to restate the purpose |
| 5. Namespace collision | The source itself confirms three meanings: business judgment T1–T5, application transition T1–T11/EG1–EG5, and historical planning T1 | Qualify display/document labels and build a semantic mapping. Preserve stored/API IDs until migration impact is known; matching numbers never prove equivalence |
| 6. Technical-spec wording | `SPECS-TRANSITION-ENFORCEMENT.md` calls every T row a Gate while its own text declares T10 a non-transition publication event. `SPECS-VERIFICATION-APPARATUS.md` uses T1 for a historical setup stage | Treat both as independently confirmed vocabulary defects, not unverified claims. Correct through the owning technical-spec tier with Register traceability; no new business choice is needed merely to qualify the terms |

### Narrow item requiring reconciliation, not wholesale deferral

The T3 sentence names `ROUTE-PROD-3` while its selected Journalist role and comparison identify
`ROUTE-PROD-2` versus baseline `ROUTE-PROD-1`. Sheet 1 independently maps Journalist R to
`ROUTE-PROD-2` and Investigator R to `ROUTE-PROD-3`. The parent-first proposed correction is:

1. business:T2 evaluates candidate `ROUTE-PROD-3` against baseline `ROUTE-PROD-1` through the
   Investigator;
2. business:T3 evaluates candidate `ROUTE-PROD-2` against baseline `ROUTE-PROD-1` through the
   Journalist;
3. business:T4 evaluates candidate `ROUTE-FALLOUT-1` against baseline `ROUTE-PROD-1` through the
   Senior Journalist;
4. candidate evaluation does not change the effective route until the judgment result records an
   authorized route-selection/reclassification event; only then do D-176 applicability rules change.

Lane A should put this evidence-backed correction into the decision table as Accept/Reject. It
should return to the Chief Editor only if the intended T3 candidate really is PROD-3 despite the
Journalist/PROD-2 Sheet 1 mapping. The ambiguity does not block namespace qualification, Copy-edit
correction, or drafting the other operation contracts.

### Correct next Lane A unit

1. Register the later clarification as superseding only the withdrawn Lane B recommendations; do
   not describe the business foundation itself as shifting.
2. Build the requirement-level business-stage/role/operation map in
   `requirements-traceability-map.md`, using qualified display labels and the T3 correction above.
3. Amend the crosswalk without erasing source truth: source R/A shape, selected application actor,
   acting principal, completion evidence and return behavior remain distinct.
4. Propagate behavior into the relevant Product/Fn Spec, then correct the storyboard sequence/UML,
   data flow and Encyclopedia entries. Correct technical-spec vocabulary downstream; do not fold
   technical implementation prose into Product intent.
5. Apply D-54 to the Register, Build Spec and Artifact Inventory in the same pass; state every
   unaffected tier. Run the full checks, rebuild Graphify after the canonical source commit, and
   return commit/evidence for independent Lane B/C review.

### Completion evidence

- Normal path proves each business judgment stage selects one contextual executor, creates the
  applicable task evidence and preserves the effective route until an authorized selection event.
- Revision path proves prior evidence remains append-only and only affected tasks/attestations are
  renewed.
- Final Sign-Off refuses when any applicable operation lacks required accountability evidence and
  cannot itself imply publication; successful completion only opens the human publication review.
- UI and diagrams expose business-stage labels separately from persisted transition identifiers.
- Tests distinguish source Sheet 2 assignments from decided application selection/default rules.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Lane A push, clean-tree report and no-Graphify-rebuild conclusion | Complete for handoff-only range |
| Approve-with-conditions | T3 correction to PROD-2 candidate | Lane A decision table; return only if Chief Editor rejects the Sheet 1-derived correction |
| Approve | Role-selected Pitch/Draft, preserved Copy-edit RACI and answered Sign-Off purpose | Phase 1 canonical propagation and contract drafting |
| Approve | Business/transition/planning namespace collision and technical-spec vocabulary findings | Phase 1 terminology correction; persisted-ID impact review before any rename |
| Defer | B-117 terminal closure | Canonical propagation, normal/revision evidence and independent verification |
| Reject | Treating the superseding clarification as continuing contradiction or returning every contract detail to the Chief Editor | Lane A must translate settled intent into a reviewable specification first |

## Lane A acknowledgement — full packet applied, `OP-FINAL-SIGNOFF` proposed not decided, 2026-09-17

**Acknowledged and applied**, by explicit Chief Editor direction to propagate the full packet. Every
factual claim was independently verified against source before applying — Sheet 1's Journalist→
`ROUTE-PROD-2`/Investigator→`ROUTE-PROD-3` mapping, `factory-route-operation-crosswalk.md` §3.2's
`OP-FINAL-SIGNOFF` input/output, and both `docs/specs/` vocabulary claims all checked out.

**Applied:** `factory-route-operation-crosswalk.md` §4.1 (application-selection rule for `OP-PITCH`/
`OP-DRAFT`, `OP-DRAFT` accountability split, `OP-FINAL-SIGNOFF` proposed A-only contract);
`requirements-traceability-map.md` §6.1/§6.2 (`B071-R204` status update, business/technical/planning
namespace map, `business:T3`→`ROUTE-PROD-2` correction); `V1-DECISION-REGISTER.md` second follow-on
addendum; `Modular_PRD.md` changelog row 1.35; `FN-GATES-01-05.md` §3.0 cross-reference; storyboard
Panel A2 annotation extended; `V1-BUILD-SPEC.md` `DOR-R2`/`DOR-R4` updated;
`SPECS-TRANSITION-ENFORCEMENT.md` and `SPECS-VERIFICATION-APPARATUS.md` qualifying notes (no stored
identifier renamed, no enforcement logic changed).

**Not decided — stays open:** `OP-FINAL-SIGNOFF`'s A-only execution contract is a **proposal**, not
an acceptance. `factory-route-operation-crosswalk.md` §4 item 4's standing "no `R`, no `R=A`
exception" note is unchanged until the Chief Editor explicitly accepts or rejects it. Target Route-1
Mermaid sequence/data-flow view and Encyclopedia Entries 01/06 review remain undone. `B-117` remains
`Open`.

## Lane B independent review of `136c875` — propagation accepted; readiness and traceability defects remain (2026-09-17)

### Evidence reviewed

Lane B read the complete ten-file diff at `136c875`, the current B-071 `B071-R204` section, the
crosswalk §§2–5, the requirements map §§6.1–6.2, both changed technical specs, and current Graphify
metadata/summary. The commit exists locally and remotely, the worktree is clean, and Graphify names
`136c875` as `lastAnalyzedHead` with `stale=false` (1816 nodes, 3641 edges). These repository and
Graphify claims are accepted.

The core propagation is also accepted: contextual Pitch/Draft executor selection, preserved Sheet 2
provenance, Copy-edit RACI, the T3 candidate correction, planning-T1 qualification and the proposed
A-only Final Sign-Off shape all match the reviewed evidence. The following defects prevent calling
the affected DoR/cross-reference packet complete.

### Findings, parent first

| ID | Finding | Why it fails | Required correction / success evidence |
|---|---|---|---|
| `B117-R7` | `V1-BUILD-SPEC.md`'s DoR introduction still says Pitch, Draft and Final Sign-Off **each** have an unresolved contract | The same section now declares Pitch and Draft resolved | Update the parent sentence to identify only the remaining implementation-detail work and proposed Final Sign-Off decision; no stale three-open summary remains |
| `B117-R8` | `DOR-R4`, titled “required Route-1 operation contracts,” says Draft is resolved as **Journalist at business:T3** | The clarified normal Route-1 execution is Reporter Pitch/Draft at business:T1. Journalist at business:T3 is the contextual PROD-2 candidate stage, not the sole Route-1 Draft executor | For the Route-1 DoR, name Reporter at business:T1. If DOR-R4 intends the reusable cross-route rule, state both contextual mappings and stop calling that clause Route-1-only. Normal-path BDD must dispatch Route-1 Draft to Reporter |
| `B117-R9` | Requirements map §6.1 row 2b still says OP-PITCH's executor is unresolved and cites B071-R204 open | A later paragraph says Pitch/Draft are resolved. The same current section carries both values | Correct row 2b itself to the contextual Reporter decision and link §6.2; a later override paragraph is not a substitute for correcting the queried row |
| `B117-R10` | `FN-GATES-01-05.md` says Pitch/Draft are “resolved there,” referring to B-071, but B-071's current R204 text still presents all three as unanswered | The cited record does not contain the asserted resolution | Append a bounded outcome/cross-reference to B-071 or change the wording to cite the actual Register/crosswalk record. Preserve R204's historical proposal; do not rewrite it in place |
| `B117-R11` | Storyboard prose says “Reporter selects at business judgment stage 1” | The judgment stage selects Reporter; Reporter then executes Pitch/Draft. The sentence reverses selector and executor | Replace with “Reporter is selected at business:T1 and executes OP-PITCH” (and Draft where the panel covers it). Diagram and prose must show the same direction |
| `B117-R12` | Substantive operation-selection, accountability and terminology decisions were appended inside `D-232`, whose identity is the V1-SM05/06 sprint-slot assignment | One canonical record per fact is lost: an operation contract cannot be retrieved by its own Register act and D-232's title no longer describes its full content | Lane A assigns a fresh Register ID for the 2026-09-17 operation/terminology decision and leaves D-232 with a cross-reference. Propagate that ID to the changed owners; do not change the Judge's accepted content |
| `B117-R13` | Transition Enforcement keeps the misleading `Gate` display header and explains the collision in a note | A qualification makes the defect understandable but leaves the normalized UI/document vocabulary unchanged | Rename the documentary column to `Transition rule`/`Rule ID`; keep stored `gate_id` unchanged until implementation impact review. Success is no display label calling T10 a gate |
| `B117-R14` | Requirements map §6.2 groups `transition:T1–T11` and `EG1–EG5` in one namespace row | The map was required to prevent equivalence-by-number; grouping state/publication rules with judgment gates preserves ambiguity and provides no semantic relation | Use separate rows for transition rules and judgment gates, then state their actual one-to-one/one-to-many relation where decided. Do not infer mapping from equal digits |

`V1-ARTIFACT-INVENTORY.md` is correctly unaffected: this pass creates, retires or resequences no
artifact. `Modular_PRD.md`'s pointer-only treatment is acceptable once the canonical references above
are corrected. The actual Mermaid/data-flow and Encyclopedia work remains openly deferred and is not
misreported as complete by `136c875`.

### `OP-FINAL-SIGNOFF` decision readiness

The A-only proposal is coherent and is ready for a bounded Judge verdict, with two completion clauses
that should be included in the accepted contract rather than left for implementation inference:

1. **Replay/revision:** one idempotent attestation per workflow revision/scope; a revision affecting
   an operation requires a fresh applicable attestation while preserving the prior signed-off package
   as append-only audit evidence.
2. **Boundary:** successful Final Sign-Off produces the signed-off-package event and opens the human
   publication-review flow. It does not itself approve, publish, mark LinkedIn-ready or change article
   state unless a separately authorized transition consumes that event.

Recommended decision: **Accept with those two conditions** — Desk Editor is the acting principal for
the A-only control; no synthetic `R` and no `R=A` record are created. Refuse and return to the earliest
incomplete applicable operation if accountability/completion evidence is missing. The priority changes
only if the Chief Editor requires separation between the operation's accountable party and its acting
principal; in that case reject A-only and name an R explicitly.

### Lane A follow-up

1. Correct R7–R11 current-value contradictions first; they determine what the Route-1 tests would
   assert.
2. Give the accepted operation/terminology decision its own Register identity (R12), then update
   references without duplicating its content.
3. Finish vocabulary separation R13–R14; preserve persisted identifiers and enforcement behavior.
4. Present the Final Sign-Off proposal with the replay/revision and no-transition/no-publication
   clauses for Judge Accept/Reject.
5. After that verdict, update DOR-R4 and the target normal/revision Mermaid/data flow, review
   Encyclopedia Entries 01/06, run checks, rebuild/re-merge Graphify, and return the exact commit for
   independent verification.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | `136c875` push, Graphify synchronization, T3→PROD-2 correction, contextual selection and source-RACI separation | Applied; independent review complete for these facts |
| Approve-with-conditions | `OP-FINAL-SIGNOFF` A-only Desk Editor proposal | Judge decision: add replay/revision and no-transition/no-publication clauses |
| Approve-with-conditions | Ten-file propagation packet | Lane A corrects `B117-R7`–`B117-R14` before claiming DoR/cross-reference completion |
| Defer | Target Mermaid/data flow, Encyclopedia Entries 01/06 and B-117 terminal closure | After Final Sign-Off verdict and corrected canonical packet |
| Reject | Current DOR-R4 Journalist-only Route-1 Draft statement, stale “all three open” references, and D-232 as the permanent owner of unrelated operation decisions | Lane A canonical repair |

## Lane A acknowledgement — all eight defects corrected, `OP-FINAL-SIGNOFF` accepted, `D-233` opened, 2026-09-17

**Acknowledged and applied**, all eight findings independently verified against the actual committed
text before correcting — none taken on the review's word alone.

**Corrected:** `DOR-R4`'s Route-1 executor (Reporter, not Journalist — Journalist belongs to
`ROUTE-PROD-2`); `V1-BUILD-SPEC.md`'s stale "three... unresolved" intro; `requirements-traceability-
map.md` §6.1 row 2b's stale "unresolved" `OP-PITCH` reference; `FN-GATES-01-05.md`'s "resolved there"
wording (`B-071` itself is confirmed unedited); the storyboard's inverted "Reporter selects" phrasing;
`SPECS-TRANSITION-ENFORCEMENT.md`'s `Gate` column header, renamed to `ID` (display-only, no stored
identifier changed); §6.2's namespace table, split into gate/non-gate rows.

**Split:** the `OP-PITCH`/`OP-DRAFT`/`OP-FINAL-SIGNOFF`/namespace/specs-vocabulary decisions now have
their own Register entry, **`D-233`** — `D-232` reverts to its original identity, the `V1-SM05`/
`V1-SM06` slot assignment.

**Accepted, by Chief Editor decision:** `OP-FINAL-SIGNOFF`'s A-only contract, exactly the five
conditions proposed — Desk Editor attestation, no synthetic `R`, idempotent replay per revision,
fresh attestation on relevant revision, opens human review only.

`B-117` remains `Open` — target Mermaid/data-flow view and Encyclopedia Entries 01/06 review are
still undone.

## Lane B independent review of `f4b0d28` — eight repairs accepted; Final Sign-Off acceptance lacks a Judge act (2026-09-17)

### Review result

Lane B verified `f4b0d28` exists at local and remote HEAD, the ten-file path set matches the worklog,
the worktree is clean, and Graphify is synchronized at that commit (1818 nodes, 3645 edges,
`stale=false`). The eight repairs raised against `136c875` were applied substantially as requested:
Route-1 now uses Reporter, stale Pitch/Draft references were corrected, D-233 separates the decision
identity, the selector/executor wording is repaired, the technical-spec display header is `ID`, and
the namespace table separates gate from non-gate mechanics.

One authorization defect is material. The worklog first states correctly that Final Sign-Off
acceptance is the Judge's call, then applies and attributes that acceptance to the Chief Editor without
an intervening Judge message. Lane B's prior verdict was **Approve-with-conditions** and explicitly
named **Judge decision** as the follow-up phase. Under D-183, that recommendation is a review result,
not authority to promote the proposal to a decided Register fact.

### Findings

| ID | Finding | Required correction / success evidence |
|---|---|---|
| `B117-R15` | `D-233`, the crosswalk, Build Spec, Modular PRD, Fn Spec, storyboard, B-117 acknowledgement and commit message claim Chief Editor acceptance that is absent from the conversation record | Until an explicit Judge answer exists, restore `OP-FINAL-SIGNOFF` to **Proposed / pending Judge Accept-Reject** in every current-value owner. Keep the five-condition proposal intact; remove only the unsupported accepted/decided status and attribution. If the Judge now accepts it, record that new act prospectively rather than claiming it preceded `f4b0d28` |
| `B117-R16` | Requirements traceability §6.1 step 6 still says Final Sign-Off is separately unresolved while the closing paragraph says accepted | Before a Judge answer, normalize both to **proposal pending**. After an acceptance, normalize both to the accepted D-233 contract. One current section cannot carry both values |

The historical D-232 addenda and Modular PRD row 1.35 may retain their dated “proposed” statements as
history; a later row may record a later verdict. Do not rewrite provenance to make a future decision
appear earlier. D-233 may remain the correct new Register identity for the application-selection and
terminology facts already authorized; its Final Sign-Off sub-item alone remains pending.

### Exact Judge choice now ready

**Accept** means: Desk Editor performs the A-only Final Sign-Off attestation; no synthetic `R` or
general `R=A` precedent is created; evidence lists the acting principal and completed applicable
operations; replay is idempotent per revision/scope; a relevant revision requires a fresh attestation
while retaining prior evidence; missing evidence returns to the earliest incomplete operation; and
success only opens human publication review — it does not approve, publish, mark `ManualReady` or
change article state.

**Reject** means: keep Sheet 2's Desk Editor `A`, leave the operation non-executable, and require Lane A
to return with a specifically named `R` plus completion, revision and replay evidence. Rejection does
not reopen the already-settled Pitch/Draft, T3 or namespace decisions.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | `f4b0d28` repository/Graphify evidence and the eight requested repairs apart from Final Sign-Off status | Applied; independently reviewed |
| Approve | D-233 as the separate owner for settled application-selection and terminology facts | Retain, with Final Sign-Off sub-item pending |
| Defer | `OP-FINAL-SIGNOFF` acceptance | Explicit Judge Accept/Reject required |
| Reject | Claim that Lane B's Approve-with-conditions recommendation was a Chief Editor decision | Lane A removes unsupported status/attribution or records a later genuine Judge act |
| Defer | B-117 closure, target diagrams and Encyclopedia review | After valid Final Sign-Off verdict and remaining evidence |

## Judge evidence received — `B117-R15` withdrawn; Final Sign-Off acceptance confirmed (2026-09-17)

### Correction to the immediately preceding review

The Chief Editor supplied screenshot evidence
(`codex-clipboard-28ef415b-909d-4bc5-b1fb-dfa66b2e7e21.png`) of Lane A's actual two-part decision
prompt and the selected answers:

1. fix all eight defects and split the RACI/terminology decisions away from D-232 — **“Yes to both
   (Recommended)”**; and
2. Final Sign-Off's A-only proposal — **“Accept as proposed (Recommended)”**.

The prompt itself includes the material terms: Desk Editor attestation, no synthetic R, idempotent
replay, fresh attestation per revision, opens human review only, and no publish/approve/state change.
This is explicit Judge acceptance of the same five-condition contract recorded by D-233.

`B117-R15` is therefore **withdrawn as an evidence-late finding**. Lane A did not promote Lane B's
recommendation without authorization; the approval existed in the decision UI and was missing only
from the text record Lane B inspected. `f4b0d28`'s D-233 acceptance, crosswalk contract, Build Spec,
Fn Spec, Modular PRD row 1.36 and storyboard annotation stand. The following historical records also
stand without rewriting: Modular PRD row 1.35 and D-232's dated addenda describe the proposal before
acceptance.

### Consolidated cross-artifact review after the Judge decision

| Artifact | Status | Remaining action / completion evidence |
|---|---|---|
| `Modular_PRD.md` | **Aligned** | Row 1.36 correctly records D-233 and acceptance; no FR/AC/NFR change was required |
| Crosswalk §4.1 | **Aligned** | Accepted A-only control carries all selected conditions and preserves Sheet 2 source rows |
| `V1-BUILD-SPEC.md` | **Aligned for the decision** | DOR-R4 reflects Reporter on Route-1 and accepted Sign-Off. DoR still needs its named UI/visual and Encyclopedia evidence; no construction authorization follows |
| `FN-GATES-01-05.md` | **Aligned** | Points to D-233/current owners and preserves B-071 as historical rather than pretending it was edited |
| Requirements traceability §6.1/§6.2 | **One current-value defect remains (`B117-R16`)** | Step 6 still says `OP-FINAL-SIGNOFF` is “separately unresolved,” while the same section's closing paragraph records D-233 acceptance. Replace the stale clause with the accepted A-only contract and preserve the statement that it does not backfill route-accountability evidence |
| Storyboard / story panel | **Prose aligned; target visual incomplete** | Panel A2 annotation records acceptance, but its Mermaid sequence is explicitly not redrawn. Add the target normal/revision sequence rather than another prose note |
| UML / data flow | **Open in the existing storyboard owner** | Per `FN-GATES` §4.1, these are Mermaid views in the storyboard, not separate artifacts. Show selection → task evidence → A-only sign-off → human review, plus revision invalidation/fresh attestation and no direct publication/state change |
| Encyclopedia | **Open** | Review Entries 01/06 against D-233 and record local/hosted sync evidence or an explicit allowed deferral |
| Technical specs | **Aligned for vocabulary** | Transition table uses display header `ID`; planning T1 is qualified. Stored/API identifiers and enforcement behavior remain unchanged |
| B-071 | **Historical, acceptable** | R204 may retain the original open questions; current readers must be routed to D-233. No historical rewrite required |
| Graphify | **Governed intent synchronized at `f4b0d28`** | HEAD's later `1654082` is handoff-only and excluded. Rebuild after Lane A fixes R16 and the target governed visuals/Encyclopedia, not for this correction alone |

### Lane A follow-up, parent first

1. Acknowledge the screenshot as the missing Judge evidence and mark `B117-R15` withdrawn; do not
   revert any accepted D-233 contract text.
2. Fix `B117-R16` in requirements traceability step 6 so the current row and its closing paragraph
   agree.
3. Complete the existing storyboard's target normal/revision Mermaid and matching data-flow view,
   including the accepted Sign-Off boundary and revision behavior.
4. Review Encyclopedia Entries 01/06, then update DOR-R5/R6 only from actual evidence.
5. Run checks, rebuild/re-merge Graphify after the governed edits, and return the commit for
   independent review. B-117 closes only after those remaining children have terminal evidence.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Judge acceptance of D-233 Final Sign-Off A-only contract | Decided; retain `f4b0d28` canonical text |
| Withdraw | `B117-R15` unsupported-acceptance finding | Closed by screenshot evidence supplied 2026-09-17 |
| Approve-with-conditions | Requirements traceability cross-reference | Lane A fixes `B117-R16` current-value contradiction |
| Defer | Target storyboard/story panel/UML/data flow and Encyclopedia Entries 01/06 | Lane A completion evidence, then Lane B/C review |
| Defer | B-117 terminal closure | R16, DOR-R5 and DOR-R6 complete and independently verified |

## Lane B return — Sheet 2 involvement semantics and the human `T6` boundary (2026-09-17)

### Judge act and scope

The Judge has supplied two bounded decisions. They correct the interpretation of existing evidence;
they do not authorize construction and do not reopen the `D-171` hold.

1. **Sheet 2 is an involvement matrix.** Its `R` marks involvement in responsibility; it is not a
   work-breakdown/task-engine cardinality rule. A row may have multiple `R` values or no `A`. Those
   shapes are source facts and must not be called unverified merely because they do not match a
   platform's preferred one-`R`/one-`A` model. Missing assignments must not be backfilled.
2. **Chief Editor is the natural person at the UI boundary.** In the decided target order, the human
   Chief Editor performs the `T6` judgment through the UI. Chief Editor is not a virtual agent, an
   editorial node, or a transition node. Virtual review work uses **Chief Editorial Desk** (and, where
   the route requires it, Chief Journalist). A transition record may retain `ROLE-CHIEF-EDITOR` as
   actor provenance with a human principal; that does not turn the role into a virtual node.

The second decision confirms the existing target direction in `D-170`/`D-175`; it does not choose a
new gate order. The first decision **supersedes the narrow `D-170` `F5` statement that RACI itself
requires one role per task**, for Sheet 2 operation involvement. Sheet 1's currently single-`R`/
single-`A` route rows remain copied as source facts, but that shape is no longer a verification test.

### Parent-first decision table for Lane A

| Order | Parent / child | Accepted meaning | Accept evidence | Reject condition |
|---:|---|---|---|---|
| 1 | **P1 — source fidelity versus application design** | Source fidelity answers only whether the Sheet 2 cells were transcribed faithfully | The crosswalk separates source fidelity, involvement shape and application-contract status | A row remains `UNVERIFIED` only because it has several `R`, no `R`, or no `A` |
| 2 | P1.1 — source row | Preserve every Sheet 2 mark and blank exactly; no inferred `R`, `A`, inheritance or decomposition | A source comparison reproduces the CSV row exactly | Lane A normalizes the source to one `R`/one `A` |
| 3 | P1.2 — application contract | Selection, acting principal, completion evidence and child decomposition are application decisions downstream of the source row | Each field cites its Judge/Register owner or remains explicitly pending | `source_fidelity` is used as a proxy for execution readiness |
| 4 | **P2 — human/virtual identity boundary** | Chief Editor is the one natural-person V1 user; Chief Editorial Desk is a distinct virtual organizational/desk role | Actor, principal type, node type, UI action and transition ID are separately named | Any diagram or requirement depicts a virtual `Chief Editor` node |
| 5 | P2.1 — target `T5` | Route-required Chief Editorial Desk/Chief Journalist virtual reviews produce sealed evidence | Target normal and revision examples show the required route-specific review set | T5 is assigned to the human Chief Editor in current target text |
| 6 | P2.2 — target `T6` | Human Chief Editor submits the final judgment through UI; the system validates and records `T6` | Positive and negative acceptance examples prove human-only execution | An agent, virtual node, or transition node is named as Chief Editor or allowed to execute T6 |
| 7 | **P3 — lifecycle boundary** | These are target-planning corrections under the existing `D-171` hold | Register and derived tiers say `decided_target_held`; no build packet changes state | The correction is presented as implementation authority or as lifting the hold |

No further Chief Editor choice is required for P1–P3. Lane A must translate this Judge act into the
canonical owners and present the resulting text for independent review; it must not return the same
semantic question to the Judge.

### What is unclear, and what will fail if left unchanged

| ID | Current gap | Guaranteed failure | Required fix |
|---|---|---|---|
| `B117-R17` | `factory-route-operation-crosswalk.md` defines `UNVERIFIED` partly by R/A cardinality and marks six Sheet 2 rows that way | A faithful multi-`R` or blank-`A` source row can never pass its own verification rule; backlog refinement will keep trying to invent assignments | Replace the overloaded status with at least `source_fidelity`, `involvement_pattern`, and `application_contract_status`. Mark directly checked Sheet 2 rows source-verified; keep multi-`R`/blank values intact; reserve any pending state for the actual application contract |
| `B117-R18` | `D-170`/later Register text and the crosswalk repeat the two-of-eight/six-unverified conclusion | The Register will outrank and reintroduce the rejected one-`R` ideology even if the crosswalk alone is fixed | Assign a new Register act that explicitly supersedes only the Sheet 2 cardinality premise and the derived tally; cross-reference rather than rewrite historical decisions |
| `B117-R19` | Requirements traceability §6.2 says judgment gates have “virtual-node executors,” covering `T6`; §6.1 step 6 also retains the stale unresolved Final Sign-Off clause already raised as `B117-R16` | A generator or tester can infer a virtual Chief Editor at T6, while the same current section still contradicts accepted `D-233` | Split the namespace description: T1–T5 may resolve to virtual editorial nodes under the target; T6 is a human UI judgment with a human actor record. Apply `B117-R16` in the same bounded correction |
| `B117-R20` | `FN-GATES-01-05.md` exposes old T5-human/T6-agent material before its target-held catalog | Readers and acceptance tests will select the first operative-looking contract and build the inverse of the decided target | Keep dated history, but label it unambiguously as historical-held and make one target section the current planning reference: virtual route-required T5 reviews, human-only UI T6 |
| `B117-R21` | Storyboard Panels A5/A6 and their sequence diagram still draw human Chief Editor at T5 and Chief Journalist agent at T6 | The normal journey, story panels, UML and data flow will verify the superseded order | Redraw the target panels: T5 virtual review evidence → sealed bundle → Chief Editor UI → T6 validation/audit. Preserve the old drawing only as clearly dated history |
| `B117-R22` | `SPECS-TRANSITION-ENFORCEMENT.md` still declares `human_only` for T5 and tests agent-at-T5 refusal | A later build would encode the historical canary and reject the required virtual target reviewer while permitting the wrong T6 principal | Label the existing table historical-held and add a target-held enforcement table/test candidate where T6 is human-only. Do not alter code or persisted identifiers before fresh build authorization |
| `B117-R23` | Encyclopedia sync still carries earlier T5/T6/four-eyes language and Entries 01/06 remain impact candidates | Public explanation will disagree with the governed target and obscure who is human | Review Entries 01 and 06, plus Entry 05 only where its assurance wording depends on the actor boundary; record local/hosted sync or an explicit allowed deferral |

### Single-source normalization

The crosswalk owns the Sheet 2 source transcription and the separation below. Other documents link to
it and state only the behavior they own; they must not repeat row counts or platform-specific RACI
theory.

| Field | Meaning |
|---|---|
| `source_fidelity` | `VERIFIED` when the recorded marks/blanks match Sheet 2; `UNVERIFIED` only for an unreadable, missing or conflicting source value, never for cardinality |
| `involvement_pattern` | Descriptive only: e.g. `multiple_R`, `no_A`, `no_R`, `single_R_single_A`, `external_A_source_mark` |
| `application_contract_status` | Whether my-editorial-app has enough decided behavior to dispatch and complete the operation: `decided`, `partially_decided`, or `pending` |
| `selected_executor` / `acting_principal` | Application values, with a Register citation; never written back into the Sheet 2 source cells |
| `completion_evidence` / `revision_rule` | Workflow contract used for construction and verification, separate from RACI involvement |

This vocabulary is deliberately local to the application boundary. Reconciling competing RACI
products, standards or task-management platforms is outside `my-editorial-app` scope.

### Cross-artifact propagation and completion evidence

| Artifact | Required Lane A action | Completion evidence |
|---|---|---|
| `V1-DECISION-REGISTER.md` | Record the new Judge act; supersede `D-170`'s Sheet 2 one-role premise and derived `UNVERIFIED` conclusion; reaffirm `D-171` hold and `D-175` target roles | One retrievable decision ID; no repeated count; exact affected/unaffected tier table |
| `factory-route-operation-crosswalk.md` | Apply the three-field separation; preserve source rows; update §4/§4.1 references without reopening D-233 contracts | Every source row can be verified independently of application readiness |
| `requirements-traceability-map.md` | Correct §6.1 step 6 and §6.2 actor/node wording; trace T5 evidence to human T6 UI act | Forward/backward trace distinguishes role, principal, node, UI action and transition |
| `Modular_PRD.md` | Keep the existing target-held FR/AC set; add only the minimum pointer/terminology correction needed to prevent Chief Editor being read as a virtual executor | `FR-04a`/`FR-05a`, `US-04a`/`US-05a`, `AC-05a`–`AC-08a` stay behaviorally consistent; historical rows remain labeled |
| `FN-GATES-01-05.md` | Normalize historical versus target sections and actor types | One target planning contract: route-required virtual T5 evidence, human-only T6 through UI |
| Storyboard / story panels / UML / data flow | Redraw A5/A6 target normal and revision journeys | No virtual Chief Editor lifeline; T5 bundle precedes CE UI act; T6 audit records human principal; revision preserves prior evidence and requires fresh affected evidence |
| `SPECS-TRANSITION-ENFORCEMENT.md` | Separate historical-held enforcement from target-held candidates | Positive human-T6 case and negative agent-T6 case exist as candidates; no code/build authority implied |
| `V1-BUILD-SPEC.md` | Keep DoR/DoD planning language aligned; do not change lane/build authorization | DoR cites written BDD; DoD remains satisfiable during the sprint; `D-171` hold explicit |
| `V1-ARTIFACT-INVENTORY.md` | No file creation/retirement is presently required | Explicitly recorded unaffected unless Lane A chooses to create a new artifact, which would trigger D-54 propagation |
| `ENCYCLOPEDIA-SYNC.md` | Review Entries 01/06 and bounded Entry 05 impact | Sync/deferral evidence recorded without duplicating the governed contract |

Acceptance examples Lane A must make testable in the specification:

- **Normal:** all route-required T5 virtual review acts are sealed; the Chief Editor submits a
  decision through the UI; the system validates the bundle and appends T6 with
  `principal_type=human` and the Chief Editor actor role.
- **Refusal:** an agent or virtual node attempts T6; the system refuses it and makes no effective
  state change.
- **Revision:** a scoped revision preserves the prior T5/T6 evidence, renews only affected required
  review acts, then requires a fresh human T6 act against the new sealed bundle.
- **Source fidelity:** a Sheet 2 row containing two `R` values and no `A` passes source comparison
  when those are the actual cells; its application contract may still remain pending.

### Graphify and closure

At `d1961aa`, local and remote are equal and the later commits are handoff-only. Graphify remains
synchronized to the last governed-source commit under the handoff exclusion; this does **not** mean
the semantic defects above are resolved. Lane A must update canonical sources, run the full checks,
rebuild Graphify, re-merge curated fragments, and return the source commit plus graph evidence. B-117
stays `Open` until that packet is independently verified. No application build, schema change,
deployment or lane transition is authorized by this review.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Judge definition of Sheet 2 as an involvement matrix; multiple `R` and blank `A` preserved | Lane A Register and crosswalk propagation |
| Approve | Human Chief Editor at target T6 through UI; Chief Editorial Desk/Chief Journalist as virtual target T5 reviewers | Lane A Product/Fn Spec and visual propagation |
| Approve-with-conditions | Existing D-233 operation contracts and D-170/D-175 target direction | Retain; correct only source-verification semantics, actor/node ontology and `B117-R16` |
| Defer | B-117 closure and Graphify rebuild | After canonical source commit, target normal/revision visuals and independent verification |
| Reject | One-`R`/one-`A` cardinality as Sheet 2 verification, any backfill of source blanks, or a virtual Chief Editor node | Lane A must remove the conflation before readiness can pass |
| Reject | Treating this planning decision as build authorization or lifting `D-171` | Fresh bounded build authorization remains required |

## Judge correction — user/principal separation and `T6` moved beyond V1 (2026-09-17)

### Correction to the preceding Lane B return

The immediately preceding section correctly separates Sheet 2 source fidelity from application
readiness, but its P2 wording still assigns the natural person to a transition and incorrectly places
`T6` inside V1. The Judge has corrected both points:

1. **Chief Editor / “the user” is the sole access and request principal, not the default workflow
   actor.** Because one person can access the whole application, using that identity as the executor
   of each transition, node or interaction destroys causal traceability. Application behavior must
   name the agent, component or service that actually performs or triggers the work. Security may
   separately record the requesting principal.
2. **`T6` is beyond V1.** V1 behavior, visuals, DoR/DoD and verification must end before T6. A later
   version may refine T6; this decision does not open that version, authorize T6, or freeze V1.

The previous section's P2.2 row, `B117-R19`/`R21`/`R22` remedies insofar as they place a human T6 in
V1, and its normal/refusal/revision T6 examples are **withdrawn and replaced below**. The Sheet 2
decision and `B117-R17`/`R18` stand unchanged.

### Parent-first decision tree

| Order | Parent / child | Accept when | Reject when |
|---:|---|---|---|
| 1 | **P1 — V1 boundary** | `V1-SM05`/`V1-SM06` contain no T6 behavior, UI, node, transition test or completion claim | V1 is still described as implementing the full frozen success scenario through approval/publication |
| 2 | P1.1 — V1 outcome | V1 ends on a named T5-complete/manual-ready delivery artifact and an explicit handoff boundary; no T6 state change is implied | “ManualReady” or “approved” is asserted without distinguishing the delivery artifact from the later persisted publication status/transition |
| 3 | P1.2 — later scope | T6 requirements are transferred to a V2-target backlog/migration matrix without opening V2 or selecting a sprint | T6 is silently deleted, remains a V1 acceptance criterion, or V2 is declared active by implication |
| 4 | **P2 — identity and causality** | Access principal, effective actor, trigger source, component and transition/event are separate fields/concepts | “Chief Editor” is assigned as a virtual node, transition node, blanket executor or cause of every authenticated action |
| 5 | P2.1 — V1 UI boundary | Where V1 requires input, the UI records a request/supply act; downstream behavior identifies the responsible agent/component | The sole user account is repeated as the operational actor for agent/component work |
| 6 | P2.2 — audit | Security attribution records who requested an action; behavioral audit records what agent/component executed it and what event resulted | One `actor=Chief Editor` field is used to answer access, causation, role assignment and execution simultaneously |
| 7 | **P3 — source requirements** | Frozen `PRD.md`/Charter wording stays unchanged and traceability shows V1 partial coverage plus later-version ownership | Lane A edits frozen source or continues claiming V1 fully satisfies `CR-19` |

No further Judge choice is required for this boundary. Lane A must correct the canonical scope and
show the remaining V1 outcome as a concrete acceptance packet. If the exact persisted name for the
T5-complete delivery artifact is not already decided, it remains a named DoR gap; Lane A must not
borrow `ManualReady` from the later publication state to close it by wording.

### Findings and required fixes

| ID | Finding | Failure if unchanged | Required Lane A correction |
|---|---|---|---|
| `B117-R24` | The preceding B-117 return says “human Chief Editor at target T6 through UI” and specifies T6 V1 tests | It repeats the user/transition conflation and creates unauthorized V1 scope | Record this correction as the controlling return; withdraw those T6 examples from the V1 packet |
| `B117-R25` | `V1-BUILD-SPEC.md` says `V1-SM06` makes the full PRD success scenario usable, while its operative sequence and DoD include T6, board return metrics, publication and fallback | V1 cannot both exclude T6 and claim end-to-end approval/publication completion | Re-scope `V1-SM05`/`V1-SM06` around the pre-T6 MMFs; keep the frozen success scenario as upstream traceability and transfer uncovered T6-dependent requirements to the V2 target |
| `B117-R26` | Requirements traceability §6.1 assigns Chief Editor to step 7/T6 inside `V1-SM05`; §6.2 binds technical gates to virtual-node executors | The matrix makes the sole access identity both universal principal and workflow node, and puts later scope in the first V1 increment | End the V1 row-level journey before T6; separate `requesting_principal`, `effective_actor`, `trigger_source`, `component_id` and resulting event/transition; add a later-version trace for T6 |
| `B117-R27` | `Modular_PRD.md` still places target T6 rows, T6 metrics and T6 user stories in the active V1 scope map | Derived Product scope will reintroduce T6 even if Build Spec is fixed | Retain historical provenance, but mark the target T6 requirement family as V2-target/not-open and remove it from V1 MMF completion evidence; do not edit frozen customer text |
| `B117-R28` | `FN-GATES-01-05.md`, storyboard Panels A5/A6, UML/data flow and Transition Enforcement all describe T6 execution inside the shared V1 flow | Construction and verification will build or test a gate outside the version | Make the V1 view stop at the T5-complete handoff artifact. Move T6 behavior, principal rules and tests to a clearly later-version candidate section; do not draw the user as a transition node |
| `B117-R29` | V1's post-T5 deliverable/status is not cleanly separated from later `ManualReady`, Approved/Published and T6/T10/T11 semantics | A “manual-ready” phrase can silently smuggle publication states and later transitions back into V1 | Define one V1 delivery artifact and its evidence without asserting a later state transition. Trace LinkedIn manual-ready delivery to that artifact; keep publication status mechanics outside V1 |
| `B117-R30` | Encyclopedia/Graph fragments still explain the prior T5/T6 actor order and sometimes collapse all human accountability to Chief Editor | Public explanation and semantic search will return the model just rejected | Review Encyclopedia Entries 01/05/06 and all curated fragments affected by the V1/T6 or universal-Chief-Editor claims; supersede or annotate them during the governed Graphify pass |

### Step-by-step Lane A follow-up

1. **Register the correction first.** Assign one new decision ID that (a) separates the sole access
   principal from effective behavioral actors/components, (b) places T6 beyond V1, and (c) supersedes
   the affected V1/full-success and T6-in-V1 claims. Preserve `D-233`'s operation contracts and the
   Sheet 2 source-fidelity correction.
2. **Build the requirement migration matrix.** Use `requirements-traceability-map.md` as parent.
   For every T6-dependent FR/AC/US/metric/test, state: current owner, V1 disposition, V2-target
   disposition, dependency and acceptance evidence. A transfer is not deletion and does not open V2.
3. **Rewrite the two V1 MMFs.** `V1-SM05` establishes the bounded core through its pre-T6 editorial
   evidence; `V1-SM06` makes that bounded journey usable, including the agreed LinkedIn manual-ready
   delivery artifact. Neither claims T6, approval, automated publication or full `CR-19` completion.
4. **Normalize behavioral identity.** In Product/Fn Spec and traceability, use separate concepts for
   request principal, effective actor, agent/component trigger and resulting event. Mention Chief
   Editor only where a V1 human input/decision is explicitly required; never as a blanket executor.
5. **Correct storyboard, story panels, UML and data flow.** The V1 normal and revision views stop at
   the T5-complete delivery/handoff boundary. Show UI request → application component → selected
   agent(s) → evidence/event. Put the T6 continuation in a later-version, non-operative view or omit
   it from the V1 artifact.
6. **Correct verification ownership.** V1 BDD proves causal attribution and the absence of a T6 path;
   later-version candidates may describe T6 but are not part of V1 DoR/DoD or tests.
7. **Propagate under D-54.** Update Register, Build Spec and Artifact Inventory in one pass; update
   `Modular_PRD.md` §8 for the version/MMF scope change. State frozen PRD/Charter, schema and application
   code unaffected.
8. **Review Encyclopedia and Graphify last.** Update local/hosted sync disposition, rebuild the
   extracted graph, re-merge curated fragments, run the complete checks, and return the exact source
   commit for Lane B/C verification.

### Construction and verification evidence produced by this correction

- **V1 normal path:** a UI-supplied request is accepted; the named application component and selected
  agents execute the bounded workflow; required T5 evidence is sealed; one version-scoped delivery
  artifact is available without T6, Approved, Published or later publication-state claims.
- **V1 revision path:** the responsible component routes only affected work back, preserves prior
  evidence append-only, and regenerates the delivery artifact after required T5 evidence is complete.
- **Causality test:** every audit record can distinguish the requesting principal from the effective
  agent/component and the resulting event. Authentication alone never supplies the effective actor.
- **Scope test:** no V1 UI control, API/RPC, acceptance case, sprint DoD or diagram invokes T6. A
  T6-dependent requirement traces to the later-version target instead of appearing uncovered or done.
- **Source-fidelity test:** Sheet 2 multiple-`R` and blank-`A` rows still verify exactly as decided in
  the preceding return; this scope correction does not reopen that decision.

### Cross-artifact disposition

| Artifact | Disposition |
|---|---|
| Frozen `PRD.md` / Charter | Unaffected text; traceability now records that V1 does not complete the full success scenario |
| `V1-DECISION-REGISTER.md` | Affected — new decision and explicit supersession/cross-references |
| `V1-BUILD-SPEC.md` | Affected — V1 MMF meanings, DoR/DoD and T6-dependent sequence/metrics |
| `V1-ARTIFACT-INVENTORY.md` | Affected only if a V2 tracking artifact is created; otherwise record no artifact creation/retirement and point to the migration matrix |
| `Modular_PRD.md` | Affected — V1/V2 requirement disposition and §8 MMF tracking; historical rows retained |
| `FN-GATES-01-05.md` / technical specs | Affected — V1 boundary and causal-actor model; later-version T6 candidates clearly separated |
| Storyboard / story panels / UML / data flow | Affected — V1 ends at the delivery handoff; user is not a transition node |
| Encyclopedia / curated graph | Affected after canonical source correction; review Entries 01/05/06 and impacted fragments |
| Application/schema/deployment | Unaffected — planning correction only |

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Sheet 2 source-fidelity decision from the preceding return | Retain and propagate with this correction |
| Approve | Chief Editor/user as access/request principal, separate from effective agent/component behavior | Lane A identity and audit normalization |
| Approve | T6 beyond V1 | Requirement migration and V1 MMF re-scope |
| Approve-with-conditions | LinkedIn manual-ready V1 outcome | Lane A defines the pre-T6 delivery artifact without borrowing later publication state semantics |
| Defer | T6 behavior, actor rules and tests | V2-target backlog; no V2 opening or sprint selection implied |
| Defer | B-117 closure and Graphify rebuild | Canonical propagation, visual correction and independent verification |
| Reject | Prior B-117 P2.2 and V1 human-T6 acceptance examples | Withdrawn by this Judge correction |
| Reject | Any claim that V1 completes the full PRD success scenario while T6 is excluded | Lane A must state partial coverage and later-version ownership |

## Judge correction — `PIPELINE_GATE_COUNT` counts `EG` nodes, not `T` transitions (2026-09-17)

### Confirmed source of the conflation

The current configuration names one object and counts another:

| Symbol | Current value/source | Actual object counted | Judge disposition |
|---|---|---|---|
| `PIPELINE_GATE_COUNT` | `6`, Addendum `T1`–`T6` executor transitions | Transition IDs | **Wrong semantic source.** It must refer to the `Node` column in `FN-GATES-01-05.md`'s editorial node catalog: `EG1`–`EG5` |
| `PIPELINE_TRANSITION_COUNT_TO_PUBLISHED` | `7`, `T1`–`T7` | Full-path transitions through system publication | A transition count, not a gate/node count; because T6 and the following publication path are beyond V1, it must not be used as V1 scope or DoD evidence |

The catalog itself proves why the values cannot be aliases: `EG2` maps to `T2` **and** `T3`. Five
editorial nodes therefore map to six forward editorial transitions. Equal numbering is not identity.
The prior A4 resolution (“six gates at a different granularity”) preserved the collision instead of
resolving it.

### Parent-first decision tree

| Order | Parent / child | Accepted definition | Accept evidence | Reject condition |
|---:|---|---|---|---|
| 1 | **P1 — ontology** | Editorial node, transition, effective actor/component, access principal and version scope are separate axes | Each has its own field/column and definition | A `T` transition, login identity or role is called a virtual node |
| 2 | P1.1 — editorial node | `EG1`–`EG5` are the canonical editorial-node series and the object counted by `PIPELINE_GATE_COUNT` | Count is derived from the catalog's `Node` column | Count is derived from `T1`–`T6` |
| 3 | P1.2 — transition mapping | A node maps to one or more transitions; mapping does not change node cardinality | `EG2 → T2+T3` is represented without creating an extra gate | Equal digits or row position are used to infer identity |
| 4 | P1.3 — actor/component | The operational agent/component is assigned separately from node identity and transition outcome | Behavior and audit name the effective executor/trigger | `ROLE-CHIEF-EDITOR` or the sole login is treated as a virtual node |
| 5 | **P2 — configuration** | `PIPELINE_GATE_COUNT` means the five catalog nodes `EG1`–`EG5` | `CONFIG_LOG` cites `FN-GATES-01-05.md` §11 `Node`; dependent code/test follows the governed row | Value/source remains six/`T1–T6` |
| 6 | P2.1 — transition count | A transition-count symbol, if retained, is explicitly a full-path/cross-version transition measure | Its name, citation and limitation say it is not V1 gate count or readiness | `PIPELINE_TRANSITION_COUNT_TO_PUBLISHED=7` is used to prove V1 completion |
| 7 | **P3 — version coverage** | The global catalog may describe `EG1`–`EG5`; V1 implements only the bounded pre-T6 subset. `EG5↔T6` belongs to later-version refinement | Catalog carries separate lifecycle/version disposition per node/mapping | Catalog header or DoD implies every global node is V1 scope |

The Judge has decided P1–P3. Lane A does not need another value choice for
`PIPELINE_GATE_COUNT`: its governed meaning is the five `EG` rows. A separate V1-implemented-node
count must not be invented unless a real consumer requires it; V1 scope is proven by its MMF
requirement set, not by overloading the global catalog count.

### Catalog correction required

`FN-GATES-01-05.md` §11 is the canonical source for the gate/node count, but its present row shape is
not current enough to serve that role safely:

| Current catalog defect | Required normalized shape |
|---|---|
| Section header marks the whole catalog `[V1]` | Catalog identity is cross-version; each node and mapping carries its own introduced/target version and lifecycle |
| `Node` and `Transition mapping` are present, but prose still calls both “gates” | `Node` owns `EG*`; `Transition mapping` owns `T*`; one-to-many mappings are explicit |
| `Target executor role` is embedded beside node identity | Rename/separate as `effective actor/agent eligibility`; it is behavior metadata, not node identity |
| `EG5 → T6 → ROLE-CHIEF-EDITOR` | `EG5` remains a catalog node; its T6 mapping is beyond V1, and its later effective actor/component contract is not the Chief Editor login or a virtualized human. Mark later-version refinement rather than inventing an executor |
| Every row is `decided_target_held` without a version-coverage field | Add distinct ontology lifecycle and version-scope/implementation disposition so “defined globally” cannot mean “built in V1” |

The Chief Editor may still appear in Project/security scope as the sole user/request principal. That
identity is not a Node value, not an executor-role default, and not evidence that a transition was
caused by the human.

### Findings and downstream failure modes

| ID | Finding | Guaranteed failure | Required correction |
|---|---|---|---|
| `B117-R31` | `CONFIG_LOG.md` and `lib/config/build-config.ts` define `PIPELINE_GATE_COUNT=6` from transitions | Any feature/test using “gate count” will expect six nodes while the governed catalog has five; UI progress and readiness can be off by one | Lane A changes the authoritative row to five and cites the `Node` column; Lane B changes code only after the governed flag/work order arrives |
| `B117-R32` | `PIPELINE_TRANSITION_COUNT_TO_PUBLISHED=7` is unqualified success-scenario config while T6/T7 are beyond V1 | A V1 test can require later-version approval/publication and contradict the version boundary | Qualify/rename or transfer this row as full-path/later-version scope; remove it from V1 completion evidence. Do not silently change code in Lane A |
| `B117-R33` | The §11 catalog maps `EG5` to Chief Editor and labels all nodes V1 | It virtualizes the sole user and returns T6 to V1 through the ontology source | Apply the normalized catalog shape above and mark the EG5/T6 mapping later-version; effective actor/component remains separately owned |
| `B117-R34` | Requirements traceability §6.2 still groups `transition:T1–T6` with `EG1–EG5` as judgment gates and “virtual-node executors” | Traceability cannot express EG2's two-transition mapping or the V1/V2 split, and again turns the user into a node | Create separate Node, Transition Mapping, Effective Actor/Component and Version Coverage columns/rows; trace V1 only through its pre-T6 subset |
| `B117-R35` | Modular PRD, storyboard/story panels, UML/data flow and Encyclopedia reuse T-number order as the pipeline/gate model | Visual and acceptance artifacts will regenerate six “gates,” human T6 and incorrect progress denominators | Make EG nodes the visual/editorial stages; show T mappings as event/state-change annotations; stop the V1 view before T6 and review Encyclopedia Entries 01/05/06 |
| `B117-R36` | Existing tests/config coupling verify declaration parity but not semantic object identity | A wrong value can stay green as long as docs and code repeat it | Add a governed verification that derives gate count from catalog Node rows and separately verifies transition mapping; no literal duplicate count in business logic |

### Step-by-step Lane A follow-up

1. **Record one Register act** joining this correction to the preceding V1/T6 and user/principal
   correction. State that the old A4 “six gates/different granularity” resolution is superseded, not
   that the Addendum's transitions disappeared.
2. **Repair the editorial-node catalog first.** Normalize §11's columns and lifecycle/version fields;
   retain `EG1`–`EG5`; preserve `EG2 → T2+T3`; place `EG5↔T6` beyond V1; remove Chief Editor as a
   virtual/effective node assignment.
3. **Update `CONFIG_LOG.md`.** `PIPELINE_GATE_COUNT` derives from the five `Node` rows. Give the
   transition-to-published value a full-path/later-version limitation or a better name. State whether
   the symbol is retained for future work, without using it in V1 DoR/DoD.
4. **Propagate scope and traceability.** Update the requirements migration matrix, `Modular_PRD.md`,
   V1 Build Spec and Artifact Inventory in the same D-54 pass. Frozen PRD/Charter text stays
   unchanged. The V1 MMFs remain pre-T6.
5. **Correct behavior and visuals.** Fn Spec, storyboard panels, UML and data flow use EG nodes for
   editorial stages and T IDs for transition/event mapping. They identify actual agents/components,
   not the sole login, and the V1 diagram stops before T6.
6. **Prepare the Lane B control change.** Lane A updates the governed config row and work order;
   Lane B later changes `lib/config/build-config.ts` and the required tests as one bounded MMF/TDD
   unit. No application-code edit belongs in this planning pass.
7. **Review Encyclopedia and graph fragments.** Correct or supersede the six-transition-as-gates,
   human-EG5 and V1-T6 explanations. Then rebuild Graphify, merge curated fragments and run the full
   consistency suite.
8. **Return evidence.** Provide the Register ID, exact changed paths, catalog-to-config derivation,
   V1/V2 trace rows, test plan and committed Graphify state for Lane B/C independent review.

### Implementation-phase acceptance evidence

- `PIPELINE_GATE_COUNT` equals the number of canonical `Node` rows (`EG1`–`EG5`) and is not computed
  from transition IDs.
- The transition mapping contains six forward editorial transitions because `EG2` maps to two; this
  does not create a sixth editorial node.
- V1 progress, DoR and DoD do not require EG5/T6 or the seven-transition publication path.
- Audit examples distinguish request principal, effective agent/component, node and transition.
- No UI, diagram, test or report labels the Chief Editor login as `EG5`, a virtual node or the
  executor of every authenticated action.
- A later-version trace owns EG5/T6 refinement without declaring V2 open or implemented.

### Artifact disposition

| Artifact | Disposition |
|---|---|
| `V1-DECISION-REGISTER.md` | Affected — supersede the old gate-count interpretation and record node/transition/version semantics |
| `V1-BUILD-SPEC.md` | Affected — V1 scope must not consume T6/T7 or full-path transition count |
| `V1-ARTIFACT-INVENTORY.md` | D-54 pass required; likely no new artifact unless Lane A creates separate V2 tracking |
| `CONFIG_LOG.md` | Affected and authoritative for the later Lane B code change |
| `lib/config/build-config.ts` | **Specified, not applied** — Lane B implementation after governed work order |
| `FN-GATES-01-05.md` | Affected — canonical catalog correction and count source |
| `Modular_PRD.md`, requirements traceability | Affected — node/transition separation and V1/V2 requirement disposition |
| Storyboard, story panels, UML, data flow | Affected — EG stage visualization, T mapping annotations, pre-T6 V1 boundary |
| Encyclopedia / Graphify | Affected after canonical edits; Entries 01/05/06 and impacted curated fragments reviewed last |
| Frozen PRD/Charter, schema, deployed application | Unaffected |

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | `PIPELINE_GATE_COUNT` as the five `EG1`–`EG5` Node rows | Lane A catalog/config propagation, then Lane B bounded code unit |
| Approve | Node, transition mapping, effective actor/component and access principal as separate axes | Cross-artifact semantic normalization |
| Approve | T6/EG5 implementation beyond V1 | Requirement migration; later-version refinement remains unopened |
| Approve-with-conditions | `PIPELINE_TRANSITION_COUNT_TO_PUBLISHED` | Retain only as explicitly full-path/later-version transition metadata; exclude from V1 readiness |
| Defer | Lane B config/test implementation | After Lane A governed config row, work order and lane authorization |
| Defer | B-117 closure and Graphify rebuild | Canonical propagation and independent verification |
| Reject | Six `T` transitions as the meaning of `PIPELINE_GATE_COUNT` | Superseded semantic model |
| Reject | `EG5` mapped to the Chief Editor login or treated as implemented in V1 | Catalog and version-scope correction required |

## Judge correction — `T` phase-gate nodes, `EG` V1 editorial workflow, assurance absent (2026-09-17)

### Correction to the preceding gate-count return

The immediately preceding return correctly rejects human/login identity as a node and correctly
separates counts, but it still calls `EG1`–`EG5` the canonical phase gates and treats `T1`–`T6` as
transition IDs. The Judge has now supplied the controlling ontology:

1. **`T*` is the original phase-gate-node series.** A `T` identifier names a phase-gate node; it is
   not, merely by its prefix, a transition event.
2. **`EG*` is the newer editorial-workflow series for V1.** It models editorial work and must not be
   collapsed into the phase-gate-node series by matching digits.
3. **The assurance workflow is a third workflow family and is absent from V1.** Line separation,
   identity provenance, a dashboard, a Chief Editor disposition, or a field named `identity_assurance`
   does not create that missing workflow.

Accordingly, the prior return's P1.1/P1.2 language, `B117-R31`–`R36`, and the proposed `EG→T`
cardinality test are corrected below. Its approved five-value decision for the editorial-workflow
count still stands in substance: the five values are **V1 editorial-workflow nodes**, not phase-gate
nodes. The symbol name `PIPELINE_GATE_COUNT` remains semantically dangerous because “gate” now belongs
to the `T` family.

### Parent-first decision tree

| Order | Parent / child | Accepted definition | Accept evidence | Reject condition |
|---:|---|---|---|---|
| 1 | **P1 — workflow-family ontology** | Phase-gate, editorial and assurance workflows are three distinct families | One canonical table defines each family, scope and ID namespace | `T`, `EG` and assurance concepts share one “gate/node” series |
| 2 | P1.1 — phase-gate family | `T*` identifies original phase-gate nodes | Documents say node; state-transition events are represented separately | `T*` is defined as a transition merely because transition records cite it |
| 3 | P1.2 — editorial family | `EG1`–`EG5` identifies the V1 editorial workflow | V1 normal/revision journey and MMF trace through EG nodes | EG numbers are treated as aliases for same-numbered T nodes |
| 4 | P1.3 — assurance family | Assurance is a separate, missing workflow and is explicitly out of V1 | Scope/traceability records absence and later ownership without fabricated nodes | Line separation, management review, observability or identity metadata is labelled assurance |
| 5 | **P2 — relations** | Any `T↔EG` relationship is a typed, evidence-backed mapping between families | Mapping names relation, provenance, version and cardinality | Positional or equal-number mapping is assumed |
| 6 | **P3 — counts/config** | The previously approved value five refers to V1 editorial-workflow nodes; its symbol/citation must say so | Authoritative config cites the EG catalog and cannot be read as T-node count | `PIPELINE_GATE_COUNT` silently means both T phase gates and EG workflow nodes |
| 7 | P3.1 — published-path count | A count derived from `T1–T7` cannot be called a transition count until actual transition events are separately defined | Retained symbol is renamed/re-sourced or deferred with explicit limitation | Node identifiers are counted as database/workflow transitions |
| 8 | **P4 — V1 boundary** | V1 contains the EG editorial workflow; T6 is beyond V1; assurance workflow is absent | V1 DoR/DoD, diagrams and tests state all three boundaries | T6 or an assurance workflow re-enters V1 through a count, mapping, role or dashboard |

The Judge has decided P1–P4. Lane A must not return another abstract terminology question. It must
first produce the concrete three-family table and evidence-backed mapping matrix. Only a genuinely
missing relationship in that reviewable matrix requires a later Judge choice.

### Canonical three-family model Lane A must record

| Family | Canonical IDs | Meaning | V1 disposition | What it is not |
|---|---|---|---|---|
| Phase-gate nodes | `T*` | Original structural phase-gate nodes | Only the explicitly migrated subset may be referenced; T6 is beyond V1 | Not a database transition-event count; not an EG alias |
| Editorial workflow | `EG1`–`EG5` | New editorial workflow used by V1 | In V1; owns the five editorial-workflow-node count | Not the original T phase-gate series; not assurance |
| Assurance workflow | Identifier series **not yet assigned here** | Independent assurance process, mandate, evidence and reporting path | Missing and out of V1 (`D-57`/`FR-11`/`SEC-06` remain relevant boundaries) | Not Chief Editor management review, four-eyes, Line separation, BCP observability or `identity_assurance` metadata |

No assurance identifier prefix, node count, executor or implementation sequence is invented by this
handoff. Those belong to later-version refinement if the capability is opened.

### Findings and guaranteed failures

| ID | Finding | Guaranteed failure | Required Lane A correction |
|---|---|---|---|
| `B117-R37` | `D-170`/`D-171` define phase gate as `T1–T11/EG1–EG5` and build a single T/EG executor matrix | Register precedence will restore the conflation after derived docs are corrected | New Register act supersedes only the collapsed namespace/mapping claims; preserve historical provenance and unaffected editorial decisions |
| `B117-R38` | `FN-GATES-01-05.md` §11 calls EG a separate logical-node catalog but makes `Transition mapping` (`EG1→T1`, `EG2→T2+T3`, etc.) part of each canonical row | The current table asserts the very equivalence the Judge rejected and makes EG5/T6/user identity travel together | Recast §11 as the V1 editorial-workflow catalog. Move any T relationship to a separate typed mapping matrix, verified from historical evidence rather than row position |
| `B117-R39` | `requirements-traceability-map.md` §6.2 groups `transition:T1–T6` and `EG1–EG5` as one judgment-gate namespace | Requirement migration cannot distinguish original structure from V1 editorial behavior | Use separate family rows and typed cross-reference edges; stop calling T nodes transitions until event semantics are separately named |
| `B117-R40` | `PIPELINE_GATE_COUNT=6` counts T items, while the prior correction would make the same “gate” symbol count five EG items | Either value leaves one symbol with two valid readers and guarantees another drift cycle | Replace the overloaded business name with an editorial-workflow-node name in the governed config plan, or explicitly deprecate it with a single compatibility mapping. A distinct T phase-gate count is added only if a consumer exists |
| `B117-R41` | `PIPELINE_TRANSITION_COUNT_TO_PUBLISHED=7` treats `T1–T7` node IDs as transitions | Tests can pass a node count while never validating a transition event, replay, return or revision | Derive any transition metric from defined events/edges, not T identifiers. Exclude the existing symbol from V1 readiness until normalized |
| `B117-R42` | Storyboard, story panels, UML/data flow and Modular PRD use T numbers as the editorial journey and have no separate assurance-workflow boundary | Visual construction input cannot show which layer performs work, which layer gates it, or that assurance is absent | Draw three lanes/families: V1 EG workflow; related T phase-gate nodes via typed edges; assurance boundary explicitly absent/deferred. V1 ends before T6 |
| `B117-R43` | Encyclopedia Entry 05 discusses an assurance cluster, while other entries/fragments equate four-eyes, successor review or Chief Editor evidence with assurance-adjacent language | Public explanation may imply V1 contains assurance when it only contains editorial controls and metadata | Update Entries 01/05/06 and affected curated fragments: editorial control is not independent assurance; the assurance workflow is missing from V1 |

### Step-by-step Lane A follow-up

1. **Register the ontology correction.** Assign one decision ID that supersedes the combined
   `T/EG` namespace and executor matrix, reaffirms T as phase-gate nodes, EG as V1 editorial workflow,
   and assurance as a separate absent workflow. Do not alter frozen PRD/Charter text.
2. **Create the canonical family table in the existing owner.** Prefer the requirements traceability
   map or the Fn Spec section already owning the catalogs; do not create a duplicate artifact unless
   the Inventory/Build Spec/Register are updated together under D-54.
3. **Rebuild the editorial catalog.** `FN-GATES` §11 lists `EG1`–`EG5` as V1 editorial-workflow
   nodes with editorial behavior/evidence. It does not define a Chief Editor system user as a node.
4. **Extract the T relationship.** Build a separate T-phase-gate ↔ EG-editorial-workflow mapping
   table with relation type, provenance, cardinality, version and confidence/status. Do not infer an
   edge from equal suffixes. Mark unsupported edges unresolved rather than manufacturing them.
5. **Represent assurance absence.** Add a boundary row/panel showing the assurance workflow is not
   present in V1. Link to `D-57`, `FR-11`, `SEC-06` and Encyclopedia Entry 05 as appropriate; do not
   assign IDs or an executor for an unopened capability.
6. **Normalize configuration.** The value five belongs to an editorial-workflow-node symbol sourced
   from EG1–EG5. Retire/deprecate or narrowly alias `PIPELINE_GATE_COUNT`; do not introduce a T-node
   count without a consumer. Hold the published-path transition count until event semantics exist.
7. **Propagate construction artifacts.** Update Modular PRD scope/traceability, V1 Build Spec DoR/DoD,
   storyboard/story panels, UML, data flow and technical-spec candidates. V1 follows EG and stops
   before T6; no assurance workflow is built.
8. **Prepare verification.** BDD covers EG normal and revision paths; mapping tests validate only
   explicit T↔EG edges; negative tests prove no V1 assurance-workflow claim and no T6 invocation;
   config tests derive the EG count from the catalog.
9. **Route implementation correctly.** Lane A changes governed docs/config and work order. Lane B
   changes code/tests later under a bounded, authorized MMF. Lane C reviews workflow/monitoring gaps;
   monitoring remains evidence infrastructure, not assurance.
10. **Sync last.** Review Encyclopedia Entries 01/05/06, update affected curated fragments, rebuild
    Graphify, merge fragments, run the complete suite, and return the exact source commit for Lane
    B/C independent verification.

### Critical artifacts and completion evidence

| Artifact | Construction use | Verification evidence |
|---|---|---|
| Three-family ontology table | Prevents one class/model from representing gates, editorial work and assurance | Every ID belongs to exactly one family; terms have no overlapping definitions |
| Typed T↔EG mapping matrix | Defines how V1 editorial work relates to structural phase gates without aliasing | Every edge has provenance/cardinality/version; unsupported mappings remain explicit gaps |
| V1 EG normal/revision storyboard + UML/data flow | Drives UI, orchestration and audit implementation | Normal and revision examples traverse EG nodes, stop before T6 and identify effective agents/components |
| Assurance-absence boundary | Prevents Line separation/dashboard/metadata from being implemented or marketed as assurance | No V1 node, executor, report or acceptance test claims independent assurance |
| Normalized config contract | Gives Lane B unambiguous symbols and sources | Editorial workflow count derives from EG catalog; no T-node-as-transition arithmetic |
| Requirement migration matrix | Preserves frozen wants while assigning V1 and later ownership | T6 and assurance-dependent requirements are not marked V1 done and are not lost |

### Artifact disposition

| Artifact | Disposition |
|---|---|
| `V1-DECISION-REGISTER.md` | Affected — supersede combined T/EG ontology and mappings |
| `V1-BUILD-SPEC.md` / `V1-ARTIFACT-INVENTORY.md` | Affected under D-54 — V1 EG scope, mapping/assurance evidence and any artifact creation |
| `FN-GATES-01-05.md` | Affected — EG editorial-workflow catalog; T mapping extracted |
| `CONFIG_LOG.md` | Affected — remove ambiguous gate/transition arithmetic before Lane B code change |
| `Modular_PRD.md` / requirements traceability | Affected — three families, V1/later scope and user/actor separation |
| Storyboard, story panels, UML, data flow | Affected — EG workflow, typed T relations, assurance absent |
| Encyclopedia / Graphify | Affected after canonical source changes; Entries 01/05/06 and relevant fragments |
| Application/config code/tests | Specified only; Lane B later, after governed work order and authorization |
| Frozen PRD/Charter, schema, deployment | Unaffected |

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | `T*` as original phase-gate-node family | Lane A ontology/Register correction |
| Approve | `EG1`–`EG5` as the V1 editorial-workflow family | Fn Spec, MMF, visual and config propagation |
| Approve | Assurance as a separate workflow absent from V1 | Scope disclosure and later-version trace only |
| Approve-with-conditions | Value five previously assigned to `PIPELINE_GATE_COUNT` | Preserve as EG workflow-node count under an unambiguous governed symbol/citation |
| Defer | Exact T↔EG mapping edges not proven by historical evidence | Lane A concrete mapping matrix, then Judge decision only for genuine gaps |
| Defer | Assurance workflow IDs, nodes, executor and implementation | Later-version capability opening |
| Defer | Lane B code/tests and B-117 closure | Governed packet, authorization and independent verification |
| Reject | Treating T identifiers as transition events or EG identifiers as T aliases | Superseded ontology |
| Reject | Treating four-eyes, Chief Editor review, observability or identity metadata as the missing assurance workflow | Preserve explicit V1 assurance absence |

## Lane B return — role-selected task workflow and technical `T`-series relabel (2026-09-17)

### Completion ledger from the existing handoff chain

| Item | Current status | What is actually complete | What remains open |
|---|---|---|---|
| `D-176` route-operation applicability | **Decided** | Which operations may be required/conditional per route | It does not decide the new per-phase role-selected execution order |
| `D-233` `OP-PITCH`/`OP-DRAFT` Route-1 selection | **Decided, retained** | Reporter is the Route-1 application executor for Pitch/Draft; Sheet 2 source rows remain unchanged | Generalization across T2–T5 and repeated operation instances is not propagated |
| `D-233` `OP-DRAFT` accountability | **Decided, retained** | Source `A` remains blank; application-level default `A` is Chief Editorial Desk | Must be represented as an application overlay, never written into Sheet 2 provenance |
| `D-233` Final Sign-Off | **Accepted, extended by this Judge clarification** | Desk Editor A-only attestation, no synthetic `R`, revision/idempotency rules, opens human review only | It must now verify all applicable operations have explicit `A` coverage; it does not assign missing `A` values |
| Sheet 2 source fidelity | **Decided in B-117, not yet propagated** | Multiple `R` and blank `A` values are valid source facts | Crosswalk still labels them `UNVERIFIED` under the rejected cardinality test |
| T/EG/assurance ontology | **Decided in B-117, not yet propagated** | `T*` phase-gate nodes; `EG*` V1 editorial workflow; assurance workflow absent from V1 | Canonical Register/Fn Spec/traceability/visual changes remain unapplied |
| `B071-R204` | **Still Open** | The three original questions now have partial/accepted contracts | The newly supplied T1–T5 role/task sequence changes the execution model and must be propagated before closure |

### Normalized Judge intent — parent flow first

The phrase “judgment gate is done first” must be implemented as **the judgment/selection step inside
the phase-gate lifecycle**, not as closing the whole phase gate before its tasks run. The normalized
cycle is:

1. Enter the T phase-gate node.
2. Perform the route/rank judgment for that node.
3. Record the selected role and route comparison as an append-only selection event.
4. Dispatch the applicable EG/task-workflow bundle for that selected role.
5. Collect task completion and `R`/`A` evidence.
6. Mark the phase gate ready/complete only when its required bundle is satisfied.
7. Move to the next T node, or return only the affected scope on revision.

Closing the entire phase gate at step 3 is guaranteed to fail: the system would advance before the
tasks whose evidence justifies advancement exist. This six-step split preserves the Judge's
“judgment first, then known-role task workflow” direction without creating a gate-before-evidence
cycle.

### T1–T5 role-selection and task-workflow matrix

Canonical IDs use existing unpadded names: `ROUTE-PROD-1`, `ROUTE-PROD-2`, `ROUTE-PROD-3`, and
`ROUTE-FALLOUT-1`. `OP-DRAFTING` normalizes to `OP-DRAFT`; `OP-SIGNOFF` normalizes to
`OP-FINAL-SIGNOFF`. Display aliases may be shown to users, but stored/governed identifiers do not
fork.

| Phase-gate node | Judgment/route comparison | Selected role | Task-workflow bundle after selection | Completion boundary |
|---|---|---|---|---|
| Pre-T1 | UI request supplied; Senior Journalist processes and emits the entry output | `ROLE-SENIOR-JOURNALIST` is the pre-gate processor, not T1's selected role | Intake/entry evidence only | T1 may open; no phase gate has completed |
| `T1` | Establish `ROUTE-PROD-1` baseline/default | `ROLE-REPORTER` | `OP-PITCH`, then `OP-DRAFT` for the selected Reporter application context | Reporter task evidence complete; Final Sign-Off is not a Reporter task |
| `T2` | Compare `ROUTE-PROD-3` against baseline `ROUTE-PROD-1` using the defined trigger | `ROLE-INVESTIGATOR` | `OP-RESEARCH`; `OP-COMPLEX-SERIES` when its condition/children are satisfied | Both applicable task instances complete; route comparison recorded |
| `T3` | Compare `ROUTE-PROD-2` against baseline `ROUTE-PROD-1` | `ROLE-JOURNALIST` | `OP-PITCH`, `OP-DRAFT` in the Journalist context | New scoped task instances complete; prior T1 evidence remains history |
| `T4` | Compare `ROUTE-FALLOUT-1` against baseline `ROUTE-PROD-1` | `ROLE-SENIOR-JOURNALIST` | `OP-RESEARCH`, `OP-COMPLEX-SERIES`, `OP-LEGAL-RISK` as applicable | Required/triggered task instances and evidence complete |
| `T5` | Final editorial accountability/readiness judgment | `ROLE-CHIEF-EDITORIAL-DESK` at the phase/accountability layer | Review Pitch/Research evidence; perform source `OP-COPY-EDIT` responsibility; confirm `OP-DRAFT`'s decided application `A`; then `OP-FINAL-SIGNOFF` checks complete A-coverage | Signed-off pre-publication package opens the UI publication-review flow; no T6 |

This matrix is the application workflow overlay. It does **not** rewrite Sheet 1 or Sheet 2 cells.
The same operation type may now have multiple scoped executions across phase gates; therefore every
execution requires its own instance identity, selected-role context, route comparison, revision and
evidence links.

### T5 RACI normalization

The Judge's T5 outcome is preserved without overwriting the source rows:

| Concern | Source fact | Application interpretation |
|---|---|---|
| Phase-level accountability | Not a Sheet 2 field | T5 selects Chief Editorial Desk for the phase/accountability context |
| `OP-PITCH` | `R`: Reporter + Journalist; `A`: Desk Editor | T5 reviews/validates its evidence; Chief Editorial Desk does not replace the source `A` |
| `OP-RESEARCH` | `R`: Investigator + Senior Journalist; `A`: Desk Editor | T5 reviews/validates its evidence; Chief Editorial Desk does not replace the source `A` |
| `OP-DRAFT` | `R`: Reporter + Journalist; source `A`: blank | D-233 application overlay supplies Chief Editorial Desk as default `A`; source remains blank |
| `OP-COPY-EDIT` | `R`: Chief Editorial Desk; `A`: Desk Editor | No missing source `R` exists. If Chief Journalist must perform a precursor subtask, Lane A creates a distinct child-task contract and evidence link; it must not rewrite `OP-COPY-EDIT`'s source `R` |
| `OP-FINAL-SIGNOFF` | source `R`: blank; `A`: Desk Editor | Accepted A-only control. It verifies every applicable task instance has an explicit accountable party and completion evidence; missing coverage refuses/returns. It does not backfill A and does not create a synthetic R |

This resolves the apparent contradiction between “T5 selected Chief Editorial Desk with A” and the
Sheet 2 rows: T5 phase accountability, operation-level source RACI, and application-level overrides
are three separate facts.

### Parent-first decision table for Lane A

| Order | Parent / child | Accept evidence | Reject condition |
|---:|---|---|---|
| 1 | **P1 — two-part phase-gate lifecycle** | Selection event precedes task dispatch; gate completion follows task evidence | Whole T node closes before required tasks run |
| 2 | P1.1 — selection | Each T node records route comparison, selected role, trigger/reason and revision | Role is inferred later from the logged-in user or current state |
| 3 | P1.2 — task execution | Each task execution records operation type, instance, T context, EG context, route, selected role, R/A evidence and completion | One global operation row is reused across T1–T5, overwriting history |
| 4 | **P2 — RACI layers** | Sheet source, phase accountability and application overlay remain separate | Route A or phase A silently replaces operation A/R |
| 5 | P2.1 — copy-edit child | Chief Journalist precursor, if retained, has a separate child-task ID/contract; source Copy Edit R remains Chief Editorial Desk | Chief Journalist is written into Sheet 2 as Copy Edit R |
| 6 | P2.2 — final sign-off | A-only Desk Editor control verifies A coverage and opens UI review; no T6/state publication effect | Sign-Off invents missing A/R or directly publishes/approves |
| 7 | **P3 — ontology/tech boundary** | Product intent uses T phase nodes and EG editorial workflow; technical transitions/events use separate normalized identifiers | `docs/specs` continues using T IDs as technical transition-rule IDs |
| 8 | **P4 — V1/assurance boundary** | T5 output ends V1 editorial work and opens manual UI publication review; assurance remains absent | T6, automated publication, or an assurance workflow is implied by T5 completion |

### Gaps and guaranteed failures

| ID | Gap | Guaranteed failure | Draft fix |
|---|---|---|---|
| `B117-R44` | Crosswalk §3.2 says sequencing is a single property of each operation, with Pitch→Research→Draft→Copy Edit globally | The Judge now uses Pitch/Draft at T1 and T3, Research at T2 and T4, and evidence review at T5; a single non-repeatable operation record cannot represent that | Replace global occurrence assumptions with operation type + scoped execution instance; preserve a default ordering only inside each selected task bundle |
| `B117-R45` | T phase selection and gate completion are not distinct events | Implementers will either dispatch tasks without a role or advance before task evidence | Specify `phase_entered`, `judgment_recorded`, `role_selected`, task dispatch/completion and `phase_completed` lifecycle events; names remain candidates until Lane A chooses canonical vocabulary |
| `B117-R46` | T5 wording mixes phase A, route A, Sheet 2 A and application A | One role will overwrite several independently governed accountabilities | Apply the T5 normalization table above and expose each scope in audit/UI separately |
| `B117-R47` | Proposed Chief Journalist Copy Edit precursor has no child operation, evidence or replay rule | It will either impersonate the Sheet 2 R or become an invisible untestable step | Draft a bounded child-task contract: trigger, executor, input/output, failure/return, revision/replay and parent `OP-COPY-EDIT` evidence link |
| `B117-R48` | Final Sign-Off contract checks completion but does not yet state the new all-applicable-task A-coverage invariant | A package can be signed with a completed task whose accountability is still blank | Extend D-233 prospectively: enumerate applicable task instances and their accountable party; refuse missing A; retain source/application distinction and prior evidence |
| `B117-R49` | `SPECS-TRANSITION-ENFORCEMENT.md` uses `T1`–`T11` as technical rule IDs, calls T1–T6 transition judgment gates and stores them in `gate_id` | Phase-gate ontology, technical state-change rules and publication events remain one namespace; construction will encode the semantic collision | Lane A drafts a migration/relabel matrix for documentary and stored/API identifiers. Do not rename persisted fields or code until Lane B receives an authorized compatibility plan |
| `B117-R50` | Storyboard A2–A6 treats T numbers as the state-transition/editorial sequence and does not show role-selection events or scoped task instances | UI, UML and tests will implement the old linear pipeline and cannot represent repeated Pitch/Draft/Research | Redraw normal and revision paths with UI→Senior Journalist→T node judgment→role selection→EG task bundle→evidence→T completion; V1 ends after T5 handoff |
| `B117-R51` | The assurance boundary is still expressed mainly as a missing Line 3 role rather than a missing workflow family | Monitoring or final review may be reported as assurance | Add an explicit absent assurance-workflow lane/boundary in traceability, storyboard and Encyclopedia Entry 05; no V1 nodes/tasks are created |

### Review of all current `docs/specs/`

| Technical specification | Impact | Required action |
|---|---|---|
| `SPECS-TRANSITION-ENFORCEMENT.md` | **High** | Relabel its T-based technical rule namespace; separate state-change rules, phase-gate nodes and publication events; preserve database enforcement behavior until an authorized compatibility migration exists |
| `SPECS-VERIFICATION-APPARATUS.md` | **Low but real** | Its `planning:T1` qualifier already avoids editorial equivalence, but replace the overloaded label with a named planning phase when the canonical terminology pass occurs |
| `SPECS-PUBLICATION.md` | **No direct T-series collision found** | Update only downstream links/scope language: V1 manual publication-review handoff, no T6/automated publication implication |
| `docs/specs/README.md` | **Unaffected unless its index/terminology summary changes** | Keep as index; do not duplicate the mapping matrix here |

### Step-by-step Lane A follow-up

1. Record the Judge act in a new Register entry, preserving D-176/D-233 facts that remain valid and
   naming the superseded global-operation-order and T-as-technical-transition assumptions.
2. Put the normalized T1–T5 matrix in the requirements traceability parent, with canonical unpadded
   route/operation IDs and explicit source-versus-application columns.
3. Refactor the crosswalk model from one operation sequence to scoped operation executions. Extend
   Final Sign-Off with the A-coverage invariant. Draft the Chief Journalist child-task contract.
4. Update `FN-GATES` and Modular PRD so T phase-gate judgment/selection, EG editorial tasks and
   phase completion are separate behaviors. Keep the assurance workflow absent and T6 outside V1.
5. Redraw the storyboard/story panels, UML and data flow for both normal and revision journeys. UI
   appears only at source supply and publication review boundaries; agents/components own intervening
   behavior.
6. Draft the technical namespace/relabel compatibility matrix across `docs/specs`, database fields,
   config symbols, APIs and tests. Mark documentary-only changes separately from persisted changes.
7. Propagate Register, Build Spec and Artifact Inventory together under D-54; update Modular PRD §8
   for V1 MMF readiness. No code, schema or deployment change in this pass.
8. Review Encyclopedia Entries 01/05/06, rebuild Graphify after canonical commits, re-merge curated
   fragments, run the complete suite and return exact evidence for Lane B/C review.

### Construction and verification artifacts

| Artifact | Construction purpose | Completion evidence |
|---|---|---|
| T1–T5 role/task matrix | Drives orchestration and work-order generation | Every node has route comparison, selected role, task bundle and completion rule |
| Phase lifecycle contract | Prevents gate-before-task and task-before-role races | Selection event precedes dispatch; completion follows evidence; retry is idempotent |
| Scoped task-execution model | Supports repeated operation types without overwriting history | T1/T3 Pitch/Draft and T2/T4 Research create distinct immutable executions |
| RACI-scope contract | Prevents source/route/phase/application overwrites | UI/audit can display each scope independently and reproduce Sheet 2 exactly |
| Final Sign-Off A-coverage rule | Controls pre-publication handoff | Missing A or completion evidence refuses and returns; success opens UI review only |
| Technical namespace migration matrix | Prevents phase nodes becoming implementation transition IDs | Every documentary/stored/API/test occurrence has keep/relabel/migrate disposition |
| Normal/revision storyboard + UML/data flow | Drives UI and end-to-end verification | One article completes normal flow; a revision reruns only affected task instances and preserves history |
| Assurance-absence boundary | Prevents false assurance claims | No V1 test, UI or report claims independent assurance |

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | UI→Senior Journalist→T1 boundary and T1–T5 role-selection sequence | Lane A canonical matrix and Fn Spec propagation |
| Approve | Role-selected, scoped task-workflow model | Crosswalk/task-execution contract |
| Approve | `OP-DRAFT` application A and Final Sign-Off A-coverage purpose | Extend D-233 without changing Sheet 2 source |
| Approve-with-conditions | Chief Journalist precursor to Copy Edit | Separate child-task contract; do not replace source `OP-COPY-EDIT` R |
| Approve-with-conditions | T5 Chief Editorial Desk accountability | Keep phase accountability separate from operation/route RACI |
| Defer | Persisted/API relabel and Lane B code/tests | Compatibility matrix, governed work order and authorization |
| Defer | Assurance workflow and T6 | Outside V1 |
| Defer | B-117 closure and Graphify rebuild | Canonical propagation, visuals and independent verification |
| Reject | Closing a T phase gate before its required task workflow completes | Use two-part judgment/selection then completion lifecycle |
| Reject | Treating technical-spec T rules as the normalized product T phase-node namespace | Relabel technical implementation identifiers |

## Lane A acknowledgement — `B117-R16` fixed, intent recorded as `D-234`, propagation deferred, 2026-09-17

**`B117-R15`**: withdrawn by the later screenshot-evidence round, acknowledged — the Final Sign-Off
acceptance in `D-233` was a genuine Judge decision, correctly recorded. No text reverted.

**`B117-R16`**: fixed (commits `3e474fd`/`3f0c30b`) — `requirements-traceability-map.md` §6.1 row 6's
stale "separately unresolved" `OP-FINAL-SIGNOFF` reference corrected.

**`B117-R44`–`B117-R51`**: by explicit Chief Editor direction, this round records the phase-gate/task-
execution model, `T5` RACI normalization, and ontology boundary as **decided intent only**, in a new
Register entry, **`D-234`**. No propagation to `requirements-traceability-map.md`,
`factory-route-operation-crosswalk.md`, `FN-GATES-01-05.md`, the storyboard, `V1-BUILD-SPEC.md`, or
any `docs/specs/` file happens this pass — all eight gaps stay named and open, for a dedicated
follow-on round. `B-117` remains `Open`.
