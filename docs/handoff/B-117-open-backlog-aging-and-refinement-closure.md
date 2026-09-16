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
