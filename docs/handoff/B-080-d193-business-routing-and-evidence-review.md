# B-080 — D-193: establish the current decision-maker before adding feedback controls

- **Raised:** 2026-09-07 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** acceptance of D-193's proposed routing, failure claims and execution sequence; no application build
- **Status:** Answered
- **Lane A:** **Acknowledged and applied 2026-09-07. All six findings accepted; none declined.**
  Each was independently checked against the sources before acceptance, not taken on assertion.
  **`R2` is confirmed and the error was Lane A's:** Panel A2 is headed *(Reporter, Line 1, Agent)*
  with participant `Reporter (agent, L1)`, so `D-193`'s claim of a human Reporter — and the "two
  rival resolutions" built on it — is **false and withdrawn**. **`R1`** is applied: `M-MVP`'s current
  recipient is the Chief Editor, there is no present external customer for this packet, and client
  validation is queued to **`M-POC` or a later authorized build, per the Judge's ruling of
  2026-09-07**. **`R3`** is applied: `GF-1` blocks *readiness* rather than guaranteeing a runtime
  failure, and `GF-2` is a tracking gap — §8's answer-and-date remains followable in prose, so
  closure is unstructured, not unrecordable. **`R4`** is applied: `FB-01`…`FB-08` stay traceability
  identities referencing a canonical answer, rather than absorbing a copied lifecycle; unknown
  transmission is an evidence condition, not a state. **`R5`** is applied and was Lane A's own
  inconsistency — this session had already established that `tier-sweep` reads only `Item`-headed
  tables, then proposed a `TIERS` entry as though it would validate a `Tier`/`Applicability` table;
  checker coverage confers no document authority. **`R6`** is applied: no rule requires per-lane
  verification, so Lane C's count is not a defect and no lane-state sentence is written.
  Two further corrections are taken from this entry's prose: the comparison table **overstated the
  existing controls** (`Applied` anchors carry presence validation only), and *"rows 1–3 cannot
  touch the Encyclopedia"* was **too categorical**, since Entry 06 declares a dependency on map
  §4/§7. The constraint that removing the `T1` requirement is **not automatically a permissible
  resolution of frozen `CR-14`** is recorded; no agent edits frozen sources.
  **Two drift findings were verified before acting, and both hold.** `Modular_PRD` §0.6.1's `M-POC`
  row read *"Indexed, unspecified / not yet written / none"* while both named files exist, were
  created 2026-08-22 under `D-99` and are inventoried — corrected as navigation only, with the
  no-`SPECS`/no-UX ruling and the §0.6.2 readiness conditions preserved and no build authority
  conferred. Storyboard Panel A2 is **superseded for current use, not rewritten**: its *"≥1
  `topic_tag`"* contradicts `FN-GATES` §3.1/`AC-01`'s **exactly one subject topic** (`G39`), and its
  Mermaid arrows write `state=Logged` before `INSERT workflow_transitions` while **its own note**
  states the transition row precedes the state change — the note is right and the arrows are wrong.
  The `FB-05` annotation is explicitly **not** superseded.
  **Separately, `B-077` received a bounded `Deferred` disposition** on the Judge's clarification
  that it remained unresolved; its body is untouched and no child is promoted.
  **Not done here, deliberately:** the `CR-14`/`Q9` decision packet (Judge's, per this entry's
  step 2), the propagation patch (step 4), and the checker extension (step 5, already deferred).
- **Resolution:** Applied
- **Evidence:** source review at f054967a953216083190f3508d68c3a1976d113d; D-193 and D-192 in V1-DECISION-REGISTER; requirements-traceability-map §7–§8; Modular_PRD §0.6, CR-14/Q9; FN-GATES §3.1/§6/§7; storyboard Panel A2; M-POC-REQUIREMENTS and FN-POC-ENGAGEMENT headers; tier-sweep source; ENCYCLOPEDIA-SYNC entry dependencies; the user's current M-MVP/M-POC clarification
- **Verified-At-Commit:** 0a23eb2f014f44735b4143fd6b70970921341cce

## What happened

**Clarified brief:** independently review D-193 as a proposal, correct unsupported claims, and
draft a parent-first Lane A plan for translating the Chief Editor's intent into requirements.
Queue future client validation for M-POC or a later authorized build. Keep B-077 separate and
complete B-079's independent review on its own evidence. No implementation or external sending.

The documentation provides an intent chain (frozen Project Requirements and Charter, governed
Product Requirements, functional behaviour, technical specifications), a traceability map,
storyboard and diagrams, an Encyclopedia sync ledger, and a separate development handoff channel.
The problem is keeping authority, lifecycle and evidence consistent across those views.

### Findings, highest parent first

| ID | Finding and source | Consequence |
|---|---|---|
| R1 | D-193 C-2 and rows 3–4 assume a current customer/sponsor exchange. The user specifies Chief Editor at M-MVP, with future client validation at M-POC or later | A nonexistent present customer must not become the prerequisite for a current requirements decision |
| R2 | D-193 U-2 calls the storyboard Reporter human. Panel A2 is headed Reporter, Line 1, Agent, and its Mermaid participant is Reporter (agent, L1) | The asserted two rival producer resolutions are not supported. An INSERT arrow also does not define generation/provenance behaviour |
| R3 | GF-1 correctly identifies FB-05's undefined producer but overstates runtime inevitability. GF-2 equates absent columns with inability to record an answer, despite §8 allowing an answer and date | These support a readiness gap and weak tracking structure, not proof that every implementation fails or that answers are impossible |
| R4 | D-193 proposes copying a handoff lifecycle into map §7, then adds only Status/Answer/Answered-On and initializes status unknown | This neither implements Status versus Resolution nor preserves the promised vocabulary. Unknown transmission is an evidence condition, not a new handoff state |
| R5 | D-193 C-1 treats a TIERS entry as what makes a document a declarable governance tier. The checker reads Item-column tables, not D-193's Tier/Applicability table | Adding the mapping alone cannot validate that table, and checker coverage does not confer document authority |
| R6 | D-193's zero Lane C verifications is treated as a governance question without a rule requiring each lane to verify | Reviewer independence is the criterion; lane participation counts are not a defect or a reason to edit live lane state |

The D-193 comparison also overstates the existing controls: Applied anchors currently have only
presence validation; Verified anchors get the full-history existence proof. Reviewer fields do
not mechanically prove that independent reading occurred. D-192 already records these limits.
An unchanged document date alone is not semantic drift.

## What you need

### Parent correction — exact proposed replacement for D-193's routing premise

> M-MVP is currently for the Chief Editor. For this packet there is no established external
> customer base to contact. Historical customer/sponsor wording describes the provenance of
> requirements; it does not establish a present recipient or a transmission. Current scope and
> readiness questions go to the Chief Editor/Judge through the existing decision process.
> Client and marketing validation is queued for M-POC or a later explicitly authorized build,
> with an owner, entry conditions and a review trigger. A prepared packet is not sent feedback,
> and neither is evidence of customer validation. Preserve frozen source text.

### Correct the failure and producer claims — exact proposed text

> CR-14/FB-05 is an unresolved specification dependency: T1 requires a trend-signal description
> but its producer and failure behaviour are not defined. Do not declare the affected intake
> unit ready or complete until the governed specification resolves this dependency. This is
> not a demonstrated runtime failure. Panel A2 depicts an agent Reporter, consistent with the
> actor label in FN-GATES; it does not supply the missing provenance contract. Present possible
> producer/fallback designs as proposals, not as rival decisions already in the corpus.
>
> Map §7 lacks a consistent location for response evidence and its routing state. Section 8's
> answer-and-date instruction remains possible to follow in prose, but completeness cannot be
> assessed reliably without a canonical response reference. This is a tracking gap, not proof
> that closure is unrecordable. Unknown external transmission must remain explicitly unknown.

Removing the T1 requirement or replacing AI tagging is not automatically a permissible resolution
of frozen CR-14. The decision packet must distinguish a conforming elaboration from a scope change
requiring the existing governing amendment/ratification process. No agent edits frozen sources.

### Keep one record per fact — proposed tracking correction

> Keep FB-01…FB-08 as traceability identities. Add a reference to the canonical answer/decision
> and evidence, rather than copying the handoff lifecycle into the map. Use existing Q9/FB-05
> links for the producer question; do not raise it again as a new requirement. Lane transactions
> retain Status, Resolution and verification fields in their own handoff entries. Judge decisions
> remain in the Register. For future client validation, use the existing backlog/refinement route
> with the source FB links, proposed owner, readiness trigger, evidence sought and next review.
> Do not claim sent, answered or validated without the corresponding evidence.

This is a proposal for Lane A to reconcile with the canonical six-stage map, not a new FB ledger.
The Chief Editor can decide the current CR-14 scope without waiting for a new tracking schema,
a checker extension, or future client outreach.

### Step-by-step decision guide for Lane A and the Judge

| Order / dependency | Bounded action | Success criterion and failure example | Decision / owner |
|---|---|---|---|
| 1 / none | Correct D-193 R1–R3: audience, actor and failure claims | Chief Editor is the current recipient; agent Reporter is correctly cited; no unsupported guaranteed-runtime claim | Approve correction planning; Lane A drafts |
| 2 / 1 | Prepare current CR-14/Q9 decision with source constraints, proposed producer/provenance, unavailable-input behaviour and acceptance examples | A required input has an identified source and an explicit failure path. A design that merely renames Missing fails review | Judge decides; Lane A prepares; Lane B reviews behavioural feasibility |
| 3 / 1 | Correct tracking R4 and queue future client validation through existing refinement | One answer has one canonical record; a draft without delivery evidence cannot count as sent or validated; trigger names authorized M-POC/later readiness | Approve-with-conditions; Lane A proposes record placement and owner for Judge acceptance |
| 4 / 2 decision | Prepare the propagation patch for the affected feature group and views | Trace CR-14 → FR-01 behaviour → acceptance examples → panel/data flow → Encyclopedia impact; absent signal cannot silently pass as complete | Lane A prepares under D-29/D-54; execute only with bounded authorization |
| 5 / 3 | Scope the optional checker follow-up alongside B-079's existing parser hardening | Both supported table shapes are exercised; false propagation fails; mere mention never proves semantic correctness | Defer to the existing Phase 1 tooling refinement; no duplicate implementation task |
| 6 / corrected committed packet | Independently review evidence and refresh graph from the settled revision | Named corrections verified at a real revision; named affected fragments match; no phase or unrelated item promoted | Eligible independent reviewer; Lane A owns graph refresh |

Steps 2 and 3 share the audience decision, but neither depends on completion of the other's tooling
or record layout. Lane C remains responsible for workflows when an actual workflow dependency
arises. No participation quota or new lane-state sentence is required (R6).

### Cross-reference and drift findings within this review

* **Real stale pointer:** Modular_PRD §0.6.1 says M-POC requirements are not yet written and no
  functional spec exists. Both `docs/modules/M-POC-REQUIREMENTS.md` and
  `docs/fn-specs/FN-POC-ENGAGEMENT-01-13.md` exist, are dated 2026-08-22 under D-99, and are inventoried.
  Draft fix: link those files and say requirements/behaviour written; no SPECS/UX or build authority.
  Preserve the existing M-POC readiness/exclusion conditions. This is navigation drift, not permission
  to build or to claim a customer base exists.
* **Story-panel semantics:** Panel A2 still says at least one topic_tag, whereas FN-GATES §3.1
  distinguishes exactly one subject topic from many analytical tags. Draft fix: update the panel's
  requirement and diagram labels to that existing distinction; retain the unresolved FB-05 annotation.
* **Sequence/data flow:** the Panel A2 diagram inserts Logged before the transition record while its
  note and FN-GATES require transition evidence first. Draft fix: make the diagram distinguish
  record creation from the Logged transition and show the existing audit-before-state rule; leave
  technical transaction design to its owning specification. Do not use this old diagram as build input.
* **Encyclopedia:** Entry 06 declares dependencies on both map §4/§7 and FN-GATES. A map §7 change
  therefore requires an impact review even when CR-14's scope is unchanged; update only affected
  content. D-193's assertion that rows 1–3 cannot touch it is too categorical. Hosted parity is not
  assessed here; the ledger separately flags Entry 05 as stale, which remains its existing follow-up.

The storyboard is a dated journal view: correct or clearly supersede misleading current-use
passages without erasing its historical findings. These named issues are not a full link audit or
an assertion that every UML view has been inspected. Missing SPECS/UX is not an overdue deliverable
where the existing ruling deliberately stops at requirements and behaviour.

### Tier scope for Lane A's proposed corrections

D-193 is the parent correction. The map and Modular_PRD index are derived documentation targets;
the storyboard is a derived view. FN-GATES behaviour changes only after the CR-14 decision.
Encyclopedia impact follows its declared dependencies. If the eventual decision creates, sequences
or retires an artifact, apply D-54 to Register, Build Spec and Inventory together; assess Modular_PRD
§8 at its stated sprint/tier trigger. This draft itself makes no such decision. Application code,
schema, workflows, lane state and frozen records are unaffected. B-077 remains separate.

## What you did instead

Read and compared the named sources; queried the installed Graphify CLI for scoped navigation
(the graphify SKILL.md was not found in the searched local skill locations). At clean intake HEAD
`f054967`, graph metadata matched HEAD with stale false, the local suite passed 17/17, and frag124
passed exact parity. These results do not detect the semantic drift above. No fresh remote read
was performed; the pasted push report is attributed evidence, not my remote verification.

Drafted only this handoff and recorded B-079's separate independent verification of the correction
at `521b9b4`. No governed source, checker, graph fragment, code or workflow was changed. This new
Open entry requires Lane A acknowledgement and graph coverage after its eventual commit; no
self-acknowledgement or graph-synced claim for these working-tree edits is made. No commit or push.

**Final draft validation:** 15/17 checks pass. The two failures are this new entry's missing
Lane A acknowledgement and graph coverage. Closure-readiness passes with B-079's independent
verification fields. The docs-drift PASS still refers to committed `f054967`, not these edits.
Lane A owns the outstanding acknowledgement and graph follow-up; they are not waived.

## Approve / reject

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve-with-conditions | D-193 planning packet | Phase 1: correct audience, source interpretation, tracking and dependencies before execution |
| Reject | Present-customer routing, human Reporter claim, impossible-recording claim | Phase 1: replace with the proposed evidence-bounded wording |
| Approve-with-conditions | CR-14 decision preparation and derived view corrections | Phase 1: preserve frozen intent; Judge decides scope; Lane A prepares patches |
| Defer | Client/marketing validation | Authorized M-POC or later build, with named owner and readiness trigger through existing backlog |
| Defer | Checker extension | Existing Phase 1 tooling refinement; no implementation this turn |
| Approve | B-079 bounded correction independently verified | Record retained in B-079; no B-077 or phase promotion |
