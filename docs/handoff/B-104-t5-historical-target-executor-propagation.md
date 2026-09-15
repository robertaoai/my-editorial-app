# B-104 — T5 historical and target executor models are conflated in the A4 journey

- **Raised:** 2026-09-15 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** acceptance of B-084 A4's same-article journey and any implementation or verification packet derived from it; no build, publication, lane transition or release action
- **Status:** Open
- **Lane A:** **Acknowledged 2026-09-15 at read commit `f170fb297fe39ead5fee903945bed1885e20a579`**
  (per Lane B's report; not independently git-verified from this session). Accepted in full: this
  supersedes and corrects Lane A's own A4 step 5 draft, which asked the Chief Editor to choose among
  three T5-executor readings without having read `V1-DECISION-REGISTER.md`'s D-175/D-181 (a 1.26MB
  file this session has never read in full — see this project's standing "Method and limits"
  caveat). D-181 already decides the target model; the open item was propagation, not a new business
  choice. The two-view wording (target `ROUTE-PROD-1` plus labelled historical view) will be folded
  into A4 step 5 when that packet is next prepared. No governed source, storyboard, or A4 write set
  is edited by this acknowledgement.
- **Verified-By:** — not yet dispositioned; raised by Lane B
- **Evidence:** `V1-DECISION-REGISTER.md` D-175/D-181; `Modular_PRD.md` historical and `decided_target_held` acceptance rows; `FN-GATES-01-05.md`; `raci-involvement-matrix.md`; storyboard Panel A5 and role table; ignored `A4-step5-same-article-journey-DRAFT.md`; Graphify branch metadata checked at the named commit
- **Verified-At-Commit:** f170fb297fe39ead5fee903945bed1885e20a579

## What happened

Lane A's A4 journey draft presents three possible T5-executor readings and asks the Judge to choose
between Senior Journalist, Chief Editor and a route-dependent executor. That is no longer an open
three-way business choice. The Register arbitrates the apparent conflict:

1. **Historical/current documented but held:** the human Chief Editor executes T5 and the Chief
   Journalist agent executes T6. `Modular_PRD` `AC-05` and the older `FN-GATES` flow preserve this
   model as history; it is explicitly not build-authorized.
2. **Decided target but held:** D-175, with D-181 as the current citation, assigns T5 by route. For
   `ROUTE-PROD-1`, `ROLE-CHIEF-EDITORIAL-DESK` performs the single T5 review; for
   `ROUTE-PROD-2/3`, `ROLE-CHIEF-JOURNALIST` performs it; fallout/GRC routes require both in parallel.
   The human `ROLE-CHIEF-EDITOR` performs T6 after the required T5 bundle is sealed. D-171's S2 hold
   remains active.

The storyboard's unqualified **Senior Journalist — T5 only** and Panel A5 **Senior Journalist role**
labels are neither the canonical historical executor nor the decided target role ID. The same file
also names the Chief Editor as T5 executor, so a reader cannot tell which lifecycle model is being
shown. The A4 draft reproduces that ambiguity instead of applying the Register's arbitration.

## Parent-first decision and exact draft fix

| Order | Decision or correction | Accept when | Reject when |
|---:|---|---|---|
| 1 | **Use D-181 as the current T5/T6 target anchor; no new executor choice is requested** | The target journey cites D-175 through D-181 and preserves D-171's hold | The packet asks the Judge to re-decide Senior Journalist vs Chief Editor vs route-dependent roles |
| 2 | **Make `ROUTE-PROD-1` the primary target A4 journey** | The bounded M-MVP path shows Chief Editorial Desk at T5 and Chief Editor at T6 | The target journey uses the historical Chief Editor-at-T5 order or an ungoverned Senior Journalist label |
| 3 | **Preserve the historical journey only as labelled provenance/regression context** | Every historical panel says `historical_current_documented_held` and not build-authorized | A historical panel is presented as the implementation contract |
| 4 | **Keep fallout/GRC as a separate target variant** | It shows two parallel T5 acts, one non-judgment bundle join and Chief Editor at T6 | It is merged into the shortest production path or rendered as two sequential gates |

Apply this wording to the A4 journey before presenting it for acceptance:

> **Primary A4 acceptance journey — decided target, held:** On `ROUTE-PROD-1`, the Chief Editor
> manually supplies the intake package; the Senior Journalist action emits the `EW` start trigger;
> `ROLE-CHIEF-EDITORIAL-DESK` seals the one route-required T5 review; the non-executor join records
> `T5_review_bundle_sealed`; and the human `ROLE-CHIEF-EDITOR` performs T6. This is a planning and
> verification contract under D-175/D-181. D-171 still prevents implementation.
>
> **Historical regression view — not build-authorized:** The preserved older contract has the
> human Chief Editor at T5 and the Chief Journalist agent at T6. It remains visible only to explain
> existing historical clauses and test fixtures until their authorized propagation occurs.

Do not use **Senior Journalist** as a T5 executor label unless a governed mapping names its canonical
`ROLE-*` identity. The Senior Journalist's settled target responsibility here is the upstream `EW`
start trigger, which is not a gate and is not T5 execution.

## Affected artifact treatment

| Artifact | Required treatment | Completion evidence |
|---|---|---|
| `V1-DECISION-REGISTER.md` | **No new business decision.** Cite D-181; record only a later propagation/application act if authorized | No competing executor decision is added |
| `Modular_PRD.md` | Preserve the separate historical and `decided_target_held` rows | `AC-05` remains historical; `AC-05a/b` and `AC-07a/b` remain the target |
| `FN-GATES-01-05.md` and RACI | Keep both time-scoped models explicit; target behavior follows D-175/D-181 | No unqualified T5 executor statement can be mistaken for target authority |
| Storyboard, story panels, embedded UML and data flow | Label the historical view; add or correct the target `ROUTE-PROD-1` view | Actors, route, state transition and evidence bundle agree in every representation |
| Encyclopedia, scope graph and traceability | Point the concept to both labelled lifecycle models and D-181 | Search for T5 executor returns the time scope and route, not three alternatives |
| A4 step 5 draft | Replace its unresolved three-reading section with the two-view wording above | Normal and revision paths use the same target roles and preserve the S2 hold |

## Failure-derived success criteria

| Guaranteed failure | Evidence of success |
|---|---|
| An implementer selects the alphabetically or visually nearest T5 role | Every executable target example names route plus canonical role ID and cites D-181 |
| Historical acceptance text silently becomes the target | Historical rows and panels retain their lifecycle label and build hold |
| Chief Editor supply is called independent review by the same person at T5 | The primary target path separates supplier, T5 reviewer and T6 Judge; the historical path states its limitation plainly |
| Two fallout reviews create two gates or competing state transitions | Each review seals one act; only the bundle join performs the single state transition |
| A green syntax or graph check is treated as semantic verification | Lane B reviews the committed normal and revision journeys against the accepted roles and route |

## Lane A follow-up

1. Acknowledge B-104 and treat it as a propagation defect, not a new blocked-on-decision choice.
2. Fold the exact two-view correction into B-084 A4 step 5 and its existing write-set proposal.
3. Add no new artifact family and do not apply governed sources until the exact packet receives its
   separate Judge act.
4. After application, have Lane B review the exact commit across Product, Fn_Spec, storyboard/UML,
   data flow, Encyclopedia and traceability.
5. Synchronize Graphify only after the final tracked correction. At this review,
   `.graphify/branch.json.lastAnalyzedHead` is `f63d6eb`, while Git HEAD is `f170fb2`; its
   `stale: false` boolean is therefore not currency evidence.

## What you did instead

Resolved the apparent executor choice through the governing Register, separated historical and
target-held semantics, and supplied the bounded propagation and acceptance plan. Did not edit
governed sources, ignored drafts, application code, schema, workflows, lane state or Graphify; did
not build or publish.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | D-181 as the current T5/T6 target anchor | Phase 1 — B-084 A4 propagation packet |
| Approve | `ROUTE-PROD-1`: Chief Editorial Desk at T5, Chief Editor at T6 | Phase 1 — primary target-held normal/revision journey |
| Approve-with-conditions | Historical Chief Editor-at-T5 view retained | Phase 1 — labelled provenance only, never implementation authority |
| Reject | A new three-way Judge choice for T5 executor | Register D-175/D-181 already decides the target |
| Reject | Unqualified Senior Journalist as target T5 executor | No canonical target mapping supports it |
| Defer | Governed-source application, implementation and Graphify sync | Exact packet authorization, application, independent review, then final sync |
