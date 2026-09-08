# B-084 — D-197's manual-intake specification still has contradictory requirements

- **Raised:** 2026-09-08 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** independent closure of the claimed complete FB-05/G105 intake specification; not unrelated authorized work
- **Status:** Answered
- **Lane A:** **Acknowledged 2026-09-08. The findings are accepted, and three of them are defects in
  Lane A's own application of `D-197` — repaired now; the rest await bounded authority.**
  **Parent accepted, and it is the object distinction:** module ≠ build version ≠ sprint ≠ capability
  ≠ version exclusion ≠ handoff, each with its own canonical owner. **Operating the existing
  documentation backlog process is not building backlog-management software**, and **a `Verified`
  handoff is not an implemented product, a completed sprint or a changed lane state.** The four named
  handoffs are **not a serial chain**: `B-017`'s parser repair is preserved with its fixture
  follow-up routed separately, `B-071` and `B-061` keep their own remaining units and owners, and
  none of them gates this entry.
  **Repaired now, because each is Lane A's own defect and leaving it would keep false text standing:**
  **(1) `D-197`'s *"Duplicate intake — unchanged"* row is superseded.** It **reinstated wording
  `D-121` retired on 2026-08-25**, and `A1`/`B1` decided no reversal. `AC-02`'s re-keyed rule is a
  **same-submitter / same-brief (hashed key fields, `G95`) / same-day** guard **at the POC surface**,
  the same brief on a different day is permitted, and **trigger creation is never blocked**. The
  retired blanket refusal **would have blocked the exact manual flow `D-194` ratified** — the row
  contradicted the contract it appeared in. `B-061` remains the original finding.
  **(2) `US-01` is corrected.** It still read *"by URL with **topic tags** … without human handoff"* —
  pre-`D-38` cardinality **and** a no-human-handoff claim that the ratified manual supply
  contradicts. Aligning `FR-01`/`AC-01` without it left the tier internally inconsistent; that
  incoherence was created by the previous pass and is now closed.
  **(3) The forward-coverage summary is marked a dated snapshot.** Incrementing `Covered 17 → 18` by
  hand created exactly the carried tally `G55`/`G75` name. It now says so and points readers at §4's
  rows.
  **Not applied, and awaiting bounded authority** — these are new edits, not repairs of the
  authorized five: `FN-GATES` §3.1/§6 duplicate behaviour and the missing-trend-input rule; the
  Addendum `T1` row and `AT-001`/`AT-003` subject wording; Product §7.1 / map §7 / `FN-GATES` §10
  adapted to their own facts rather than copied as a shared status table; and the Product references
  presenting the historical journal as current execution tracking. **Step 2's intake-contract
  completion** — required source information, non-URL input handling, duplicate-rule reconciliation —
  is drafting work under `D-194` and is separable from the application authority above.
  **Unchanged:** `FB-05` and `G105` stay **open** — this entry is correct that the earlier
  *"specification complete"* claim was premature. `PBL-11` unranked; `D-171`/`B-071`'s hold and owner
  intact; no build, sprint, lane transition or push.
  **Correction appended 2026-09-08 — the four are no longer awaiting authority.** The Chief Editor
  authorized them the same day and **all four are applied**; the paragraph above is preserved rather
  than rewritten. `FN-GATES` §3.1 and §6 now carry `D-121`'s **scoped** guard instead of the retired
  blanket refusal, and §6 splits the two failure modes that behave differently — a **missing trend
  signal stops `T1`**, a **failed author/date extraction does not**. The Addendum's `T1` row was the
  last `G39`/`D-38` holdout and now reads **exactly one subject topic**. `AT-001` and `AT-004` assert
  the **permitted** cases as well as the refused ones, because a test that only asserts refusal
  cannot catch an over-broad guard. Product §7.1, `FN-GATES` §10 and map §7 are each adapted to their
  own facts — §7.1 still read *"Log an article by URL"*, pre-`D-121`. And Product's execution-tracking
  pointer named the **historical sprint-plan journal**; it now names `V1-BUILD-SPEC` §4,
  `LANE-B-WORK-ORDER` §2.2d and `V1-PHASE-CLOSURE` §5. Recorded as `D-197`'s second act.
  **`FB-05`'s residual is narrowed, not closed**, exactly as this entry framed it: the producer is
  specified; the **reconciliation of input scope, requiredness and dependent clauses** remains, then
  **independent verification**. `G105` follows it. **Still outstanding and named:** step 2's
  intake-contract completion — what *source information* requires, how a non-URL source reference is
  handled against `D-121`, and the duplicate-rule reconciliation `B-061` owns. That is drafting under
  `D-194` and needs no further authority; it is the next unit, not part of this write set.
- **Resolution:** Applied
- **Evidence:** Independent source review at 257677f5191d1eb781c1365427c0fe246d5436e9; D-194/D-197; FN-GATES-01-05 §2.3/§3.1/§3.2/§5/§6/§10; Modular_PRD FR-01/AC-01/AC-02/§7.1/Q9; Addendum §2.4/§3.1/AT-001/AT-003; traceability map CR-14/FB-05; B-061; full local consistency suite and frag128 verify-only result

## What happened

**Clarified task:** independently review D-197's applied manual-intake contract, preserve the
decisions already made, and give Lane A one parent-first correction guide with falsifiable
acceptance criteria. Review the relevant storyboard, sequence/data-flow and Encyclopedia
dependencies without building or treating a review verdict as permission to apply changes.

**Finding:** the new §3.1 producer paragraph is useful and substantially correct, but its arrival
does not make the surrounding specification coherent. Requiredness, source-reference scope,
duplicate behavior and current gap summaries still disagree. The statement that one clean
review can now close FB-05/G105 is conditional on resolving those disagreements; this review
does not find that condition satisfied.

This is one bounded review of the **complete-intake-specification claim**, not a new feature or
replacement backlog. FB-05 remains the map's specification gap; G105 follows its evidence.
[B-061](B-061-lane-b-code-build-readiness-inputs-have-drifted.md) already owns the residual
D-121 duplicate-rule drift. That ownership is linked, not recreated. B-080/B-081/B-082 are not
reopened. [B-083](B-083-decision-tree-and-judge-authorization-routing.md) is independently
verified for its separate action/authority correction, whose closure expressly excludes
completion of FB-05. B-071/D-171 still owns the held operating-model/build chain.

### Preserve these accepted facts

- D-194 ratifies the manually assembled package. D-197 records A1/B1 and authorization for
  its named dependent documentation edits. No new selection of A1/B1 is needed.
- The Chief Editor **supplies** the input; the actual Reporter agent **executes T1 at Line 1**.
  Supplier, executor and upstream author are different facts. Unknown authorship stays unknown.
- B1 retains nullable author/date extraction, the Investigator flag on failure and T2 confirmation.
  Extraction is not generation of the required topic/source/trend input.
- Exactly one **subject topic** is distinct from optional, multiple **analytical tags** (G39/D-38).
- Missing required input prevents T1 completion. The precise adopted wording is **no transition
  row claiming T1 completed**, not a prohibition on every possible failure/audit record.
- Q9's choices can be decided while FB-05 remains incomplete. Specification coverage, independent
  verification, implemented behavior and build authorization are separate claims.

### Evidence and remaining gaps

Line numbers below describe the reviewed revision, not a promise that future edits retain them.

| Existing owner / parent | Evidence at 257677f | What is still missing |
|---|---|---|
| FB-05 — required package and input boundary | FN-GATES:75 requires URL, subject and trend; :86 additionally names source information. D-194's adopted package at Register:13437 includes source information. Product FR-01:554 and D-197:13716 allow another source reference, while FN-GATES §2.3/§3.1 and T2:111 assume a URL | State what source information means and whether it is separately required. Map the ratified manual-URL path to D-121's wider source-reference allowance; do not silently revoke the latter or claim the URL-only T2 checks cover it |
| B-061 / D-121 — existing duplicate-rule concern | FN-GATES:80 and :189 refuse an existing URL; its own AC-02:171 accepts distinct commissions. Product AC-02:962 limits refusal to the POC surface's same submitter/brief/day and permits manual triggers. D-197:13722 repeats blanket reference refusal as "unchanged" | Correct the behavior and Register restatement against the existing rule. Reuse of an article through an engagement association is not global uniqueness of its source |
| FB-05 — failure behavior and lifecycle truth | New FN-GATES:97–100 specifies refusal on missing input, but §6:188 still says "Undefined — FB-05" and §10:246 says provenance is unresolved. Product §7.1:788 still labels CR-14 a missing FR; map §7:223 instead claims specification complete | Reconcile the live failure/status statements. The producer is specified, but this independent review found remaining inconsistencies; neither "no FR" nor "only verification outstanding" accurately describes the whole residual |
| G39/D-38 — literal propagation | Product FR-01/AC-01 and FN-GATES now distinguish the subject. Addendum T1:161 and AT-001/AT-003:518/520 retain the old topic-tag wording. D-197:13727–36 itself identifies the Addendum discrepancy, but the applied edit list omits it | Add the missing source clarification to the bounded correction proposal. This is not another business-cardinality decision or another A1/B1 ratification |
| D-194 dependent views / existing Encyclopedia follow-up | Storyboard A2's later notice still expressly preserves the "no producer" annotation; A1/A2 and B1/B2 do not show the newly supplied package. D-194:13478–81 still owes module and view reconciliation. D-197 explicitly leaves these as proposed follow-up | Mark historical descriptions as historical and point current readers to the completed contract. Preserve module context and shared-engine association; assess Entry 06 through the existing ledger, not a second parity tracker |

The source-information question is narrower than designing storage or adding an account. If an
existing source requirement already defines it, cite that definition. If none does, Lane A must
present the missing business choice: **does the source reference alone satisfy source information,
or which additional supplied information is required?** Do not make nullable author/date newly
mandatory at T1 to fill this gap.

## What you need

### Start here — module/version/sprint and backlog orchestration

**Judge decision-tree clarification received, 2026-09-08.** Simplify the relationship between
B-017, B-071, B-061 and this entry into actionable routing. This section records that clarification
and the review guide it requested, not a new application/build authorization. It uses the already
decided D-186/D-188/D-195/D-196 model; no new handoff, backlog ledger or SOP is created.

**Read "backlog workflow implementation" here as Lane A operating the existing documentation
process.** Building additional scripts or an in-app backlog-management feature would be a
different action. A documented process and its installed checks are not proof that every step
is automated or that the product feature has been implemented.

#### Parent — identify the object before assigning work

| Object | Meaning and canonical owner | Do not infer |
|---|---|---|
| Module — `M-MVP`, `M-POC` | Enduring product/business scope; `Modular_PRD` §0.6 indexes each module and its owning requirements | A module is not V1, a sprint or a second editorial engine |
| Build version — `V1` | Version scope and its sprint references; Product §8 points to the operative `docs/v1/` set | V1 Active does not authorize any code unit |
| Sprint — `S*` | Bounded delivery scope/sequence/DoD in the Build Spec; executable paths in the selected lane's work order | A feature name or `[V1]` introduction marker does not allocate a sprint |
| Capability — `PBL-*` | Enduring identity, recorded rank and refinement readiness in Product §2.5.2 | Identity, readiness, version inclusion and build permission are separate facts |
| Exclusion — `V*/NG-*` | That version excludes the named object; Product §2.5/§2.5.1 owns the relationship and reconsideration | Closing V1 or omitting an NG in V2 does not promote the capability |
| Handoff — `B-*` / `C-*` | Work request, response, correction and lifecycle in its originating entry | A Verified handoff is not an implemented product, a completed sprint or a changed lane state |

The governing parent is **the existing request-to-execution map** in `docs/README.md` (D-186),
with D-188's separate readiness meanings and D-195's module/version distinction. B-017 is a
supporting control, **not the parent product feature**. `SETUP-SPIKE-000` remains historical
lineage, not a source of current execution permission.

#### Route the named handoffs — not a four-item serial chain

**Observation at `e53865d`, not another live status register.** Each linked entry owns its status.

| Record | What has already happened | Lane A's next action / dependency |
|---|---|---|
| [B-017](B-017-handoff-closure-parser-false-green.md) | Parser/closure-control repair is independently **Verified** | Preserve that repair. Its separate post-verification `phaseScope` fixture follow-up remains recorded; the first assertions still borrow B-017's live terminal state (`scripts/fixtures/suites.mjs:309–339`, source-inspected, not rerun). Route tooling separately; do not reopen the parser or make its repair a new product feature |
| [B-084](B-084-d197-manual-intake-specification-reconciliation.md) | Q9 A1/B1 decided; intake specification applied but internally inconsistent | Current manual-intake branch: acknowledge, finish the required-input/domain definition, correct the existing clauses, then independently verify FB-05; G105 follows that evidence. The detailed steps below are the one correction guide |
| [B-071](B-071-b070-options-and-desk-editor-ontology-require-correction.md) | Some bounded work is applied: Unit 7 annotations and D-191's behavior blocks. The parent remains **Open** | Separate operating-model branch: obtain Unit 7's formal independent evidence, correct plan §16.7's stale readiness wording and prepare the exact next-unit proposal. D-190 already dispositioned the sequencing deviation; Units 1/2, R152 and broader closure retain their actual gates |
| [B-061](B-061-lane-b-code-build-readiness-inputs-have-drifted.md) | Earlier source corrections are answered; no terminal resolution is recorded | Reuse its duplicate-rule correction inside B-084. For a future code unit, reconcile its applicable requirements, controls and work-order inputs. Do not re-ask Q12/Q1's decided Phase-0 questions or infer readiness from FB-05 closure alone |

B-084 and authorized B-071 preparation can proceed independently. Their **applicable outputs**
inform B-061's future unit-readiness assessment; this is not a requirement to close every handoff
before any useful work. D-171 still holds S2. The caller selects a bounded unit and checks its real
dependencies; it does not manufacture `B-017 → B-071 → B-061 → B-084` as a mandatory sequence.

**Tooling remains separate.** B-017's fixture follow-up is not D-192's later Applied-anchor
hardening. The latter already belongs to [B-079](B-079-feedback-checklist-semantic-review.md)
R2-2/R2-3 and Register D-192: current code checks Applied-anchor presence, while Verified also
receives format/existence checks. B-079's documentation correction remains Verified. Neither
tooling implementation is authorized by this decision-tree clarification, and neither must be
rebuilt merely to prepare B-084's documentation proposal.

#### Lane A's operating steps and the Judge's decision boundary

| Step / parent | Lane A action | Accept when / reject when |
|---|---|---|
| 1 / existing governance | Classify the request: current-spec defect, enduring capability, version-scope change or tooling defect. Reuse its existing owner | Accept the cited owner and scope; reject a new PBL or ledger for an already-owned correction |
| 2 / 1 | For B-084, use D-194's existing preparation authority and D-197's A1/B1. For B-071, use its own bounded preparation/evidence authority | Accept useful authorized preparation now; reject both repeated drafting-permission requests and assumed permission for new application scope |
| 3 / 2 | Finish one reviewable packet: required behavior, counterexamples, exact proposed text, affected source/view paths, dependencies and exclusions | Accept when the behavior and each predicate agree. Ask only a genuinely absent business choice. Reject "complete" while source information, reference scope or contradictory consumers remain unresolved |
| 4 / complete packet | Identify the actual Judge act covering each proposed application; request a bounded extension only where needed | Accept the exact documentation/tooling/code scope named by that act; reject treating this routing approval as all three |
| 5 / authorized application | Apply in the owning tier, update the applicable Register/Build Spec/Inventory/Product §8 facts under D-54, and reconcile dependent views | Accept source correction supported by its diff; reject status-only closure or a copied policy in every document |
| 6 / applied source | Run proportionate checks, synchronize the graph at the settled revision and obtain independent review. Record each result in its existing owner | Accept the proved correction; reject using a green parser, commit or push as proof of semantic correctness or runtime behavior |
| 7 / actual sprint or version boundary | Close only the accepted scope; retain future PBL identity/rank/readiness and link any remaining handoff work to its owner | Accept historical sprint/version evidence plus an enduring backlog. Reject deleting, auto-promoting or reranking future features merely because a sprint/version ended |

**For a genuine future capability**, first retain or locate its PBL identity, then bring its
problem/outcome, module context, dependencies and acceptance evidence through the existing
refinement process. Record a real rank/readiness decision, not a guessed place in a "top five."
An identity-only item with insufficient information remains so. Only a separately selected and
authorized delivery unit enters the Build Spec/work order. PBL-01 stays at its recorded bottom
rank; PBL-02 and PBL-11 stay unranked; PBL-10 remains proposed/reserved. Closing the current
manual-intake correction does not change any of them. No version-specific exclusion is rewritten
to carry a future feature's live status.

#### Dependent-view and execution-pointer checks

These occurrences are included in the source/view assessment below; they are not new finding
owners or a second correction packet:

- **Product §4 `US-01` (`Modular_PRD.md:529`):** its exception still says duplicate URL blocked
  and no unique index is a defect, contrary to AC-02/D-121. Include this story in the existing
  B-061/B-084 duplicate sweep. Proposed story intent: *As a Reporter agent, I want to log the
  Chief Editor-supplied package through T1 so that intake is attributable and its required
  evidence is checked.* The exception must cite the scoped duplicate rule and retain nullable
  extraction failure handling; it must not reintroduce a URL uniqueness control.
- **`docs/README.md:30`:** the overview says the traceability map "currently shows one uncovered"
  requirement, while D-197 changed the map's coverage. Replace the copied count, not with a new
  count, but with: *The bidirectional customer-to-requirement mapping and its coverage evidence
  live in `governance/requirements-traceability-map.md`.* Coverage still does not prove FB-05
  complete. This is an additional named source path for the proposed application packet.
- **Product prologue/§2.6/§8 (`Modular_PRD.md:36`, `:437`, `:446`, `:892`):** the prologue's
  execution-tracking row, "execution rung is the sprint plan" and "the real tracker" still direct
  readers toward the historical sprint plan, identified in §12 as
  `docs/journal/2026-08-16-sprint-plan.md`. Clarify current navigation under D-186,
  within B-061's existing execution-input concern: *Historical sprint identifiers retain their
  source citation. Current approved scope, sequence and DoD are in the Build Spec; the selected
  lane's work order names its executable unit and paths. Product §8 indexes version/sprint
  tracking; the journal preserves derivation, not current execution authority.* Keep legitimate
  historical TC/Q/sprint citations. This is a link-only orchestration clarification, not a changed
  sprint or an additional prerequisite for FB-05's behavior to be specified.

Storyboard A1/A2/B1/B2, their existing sequence/UML/data-flow views and Entry 06 keep the impact
mapping already recorded below. A historical panel is evidence to interpret, not a replacement
requirements source; its business "Lane A/B" labels are not development ownership. Route T5 and
reporting-view changes to B-071/R159/R160, not this intake correction. The Encyclopedia ledger
already records affected-entry review; no hosted parity, new diagram artifact or new UX build
is inferred from this orchestration guide.

### Parent-first decision table

“Accept” below means a review recommendation unless the Judge explicitly adopts the named action.
D-194 already authorizes preparation. A wider application write set must be identified and covered
by an actual act; asking again to draft or reselecting A1/B1 is not the remedy.

| Order / dependency | Lane A next action | Judge Accept / Reject boundary |
|---|---|---|
| 1 / none | Preserve A1/B1, the ratified manual package and the separate B-071 hold | Accept these as already recorded; reject reopening them merely because propagation is incomplete |
| 2 / 1 | Define the required-package predicate and explicitly scope URL versus other-reference intake, including T2 validation | Accept an existing-rule mapping supported by D-121/D-194; if a material choice is genuinely absent, ask only that choice. Reject silent domain narrowing or invented source fields |
| 3 / 2 | Complete literal requirement, behavior, edge-case and acceptance text together; incorporate the existing B-061 duplicate correction | Accept a consistent packet with counterexamples; reject the blanket-source refusal and undefined missing-trend path |
| 4 / 3 | Complete the exact propagation/write set, including Addendum and current-view notices; correct premature completeness claims | Accept the bounded documentation application when explicitly authorized; reject an incomplete write set or assumed authority for extra files |
| 5 / authorized application | Apply source corrections, record actual application evidence, refresh the graph after the settled source revision, then obtain independent review | Accept verified specification evidence only when its criteria pass. FB-05 disposition comes first; G105 follows that evidence. No automatic S2 release, AI sprint or phase closure |

### Small steps for Lane A

1. **Acknowledge this entry.** Keep FB-05/G105 open; do not undo Q9's decision or B-083's
   process verification. Cite B-061 for the existing duplicate-policy residue.
2. **Write one required-input list.** Separate source reference, subject, source information,
   trend description and optional analytical tags. Define absent/empty behavior using that same
   list. Resolve source-information equivalence from existing requirements or present the bounded
   question above. Do not invent database columns as a substitute for the business definition.
3. **Write one input-domain crosswalk.** D-194's manual URL package is a concrete path; D-121's
   generic FR-01 permits another reference. State each scope and its validating behavior. If this
   packet only completes the URL path, say so and retain an explicit owner for any uncovered
   wider path; do not declare all FR-01 behavior complete by implication. No new bare-topic intake
   or M-POC activation is authorized.
4. **Reconcile duplicate handling with D-121, not with the old URL row.** Distinct editorial
   commissions can share a source. A POC-surface same-submitter/same-brief/same-day refusal is
   not an article-source uniqueness rule; manual MVP trigger creation is not blocked by it.
   An engagement may associate to an existing article under its own reuse rule. These cases
   must be separately visible in behavior and acceptance examples.
5. **Complete the current failure and status text.** Use the draft fragments below. Sweep the
   owning FN sections, Product §7.1, map and Register for contradictory current clauses. Preserve
   dated historical text with a clear correction rather than rewriting decisions as though the
   earlier wording never existed.
6. **Reconcile dependent views.** Annotate the historical storyboard/sequence views; update or
   cross-reference the current module input mapping. No new standalone UML, technical or UX
   artifact is justified just to restate behavior (D-30/D-52). Retain existing B-071/R159/R160
   ownership of the separate T5/reporting work. Use the Encyclopedia ledger for Entry 06 impact;
   local graph checks do not inspect the hosted artifact.
7. **Present the finished, bounded application packet.** Name the actual files/sections and
   proposed text, not merely "propagate." Existing A1/B1 authority is preserved; any additional
   application scope is requested once, after the packet is reviewable. Build/Inventory/§8/phase
   applicability must describe actual changes, not infer a new sprint from a documentation fix.
8. **After application, verify the committed result.** Use the existing commit/push SOP rather
   than copying it here. Do not publish the accumulated ancestor range under a one-entry
   permission. Lane A performs the final extraction/curated reconciliation before a consuming
   approval. Independent review records what passed and which residual, if any, still prevents
   FB-05/G105 closure.

### Draft correction fragments — proposed, not applied

These repair known contradictions. They are **not a complete application-ready contract** until
step 2's source-information definition and step 3's input-domain mapping are supplied.

**FN-GATES §6, missing trend input:**

> If a required trend-signal description is absent or empty, identify the missing component in a
> validation failure. Do not complete T1, enter Logged on that incomplete package, or write a
> transition asserting T1 completion. The Chief Editor supplies the value manually (D-194/D-197).
> This rule introduces no incomplete article state. Author/date extraction failure remains the
> separate B1 case: flag it for Investigator review without blocking T1 on that failure alone.

**FN-GATES §3.1/§6 duplicate behavior, with §8/§9 references aligned:**

> Do not reject an editorial commission merely because another commission cites the same source
> (D-121; AC-02). Apply the same-submitter/same-brief/same-day guard only at its governed POC
> surface; manual MVP trigger creation remains available. Associating an engagement with an
> existing article is distinct from submitting another editorial commission. It creates neither
> a global source-uniqueness requirement nor a second copy of the editorial engine.

**D-197 append-only correction:**

> The candidate's "Duplicate intake — unchanged" row repeated a retired blanket source-reference
> refusal. A1/B1 did not decide a reversal of D-121. That row is superseded by D-121's scoped
> duplicate handling and the corrected AC-02; B-061 remains the original finding. The manual
> producer is specified, but completeness requires the remaining input-scope and literal
> propagation corrections identified in B-084. FB-05/G105 remain open until their criteria pass.

**Product §7.1 / map §7 / FN-GATES §10, adapted to their respective facts rather than copied as
another shared status table:**

> CR-14 has a ratified manual-supply requirement in FR-01, with A1/B1 selected in D-197. Future AI
> tagging/scoring remains PBL-11. FB-05 is not missing a producer anymore: its residual is the
> incomplete reconciliation of input scope, requiredness and dependent clauses, followed by
> independent verification. Coverage does not establish that verification or implemented behavior.

**Addendum T1 and AT-001/AT-003 subject wording:**

> Require exactly one subject topic. Additional analytical tags are optional and may be multiple;
> they neither replace the subject nor create additional subjects (G39/D-38; D-194).

Retain the rest of each test's setup and outcome. Include both no-subject refusal and
one-subject-with-multiple-analytical-tags acceptance; do not change the schema or AI scope.

### Source/view write-set assessment

This lists the proposed documentation surfaces. It is not authority to edit them now.

| Surface | Proposed change or explicit exclusion |
|---|---|
| `docs/v1/V1-DECISION-REGISTER.md` | Append the D-197 correction and evidence-based G105 disposition; preserve adopted A1/B1 and historical body |
| `docs/fn-specs/FN-GATES-01-05.md` | Reconcile §2.1/§2.3/§3.1 and applicable T2 source validation, related §5/§6/§8/§9 references and §10; do not sweep unrelated held T5/T6 clauses into this packet |
| `docs/Modular_PRD.md` | Align §4 US-01, FR-01/AC-01 and §7.1's residual with the resolved input scope; retain AC-02's D-121 rule and Q9's decided status. Clarify the prologue/§2.6/§8 current execution pointers under D-186 without changing scope, sequence, DoD or historical source citations |
| `docs/README.md` | Replace the copied coverage tally with the link-only traceability-map pointer drafted above; do not create a new coverage or lifecycle register |
| `docs/source/v1-build-readiness-addendum.md` | Proposed live T1/AT-001/AT-003 wording clarification; no repeated A1/B1 ratification. Include this extra application surface explicitly |
| `docs/governance/requirements-traceability-map.md` | CR-14/FB-05 reflect corrected specification and actual independent evidence; do not fabricate implementation or customer re-approval |
| `docs/journal/2026-08-18-storyboard-business-and-digital-twin.md` | Dated, link-led correction to A1/A2/B1/B2 current-use notices; historical panels remain provenance, not the source of product authority |
| `docs/modules/M-POC-REQUIREMENTS.md` | Propose a link-led manual-package/context clarification at PR-01/PR-04 if needed; preserve PR-02's shared-core boundary and existing engagement association; no activation or payment feature |
| `docs/ENCYCLOPEDIA-SYNC.md` | Existing Entry 06 impact queue only; update verification metadata only after actual hosted inspection/update. D-194/D-197 already disclose impact. Do not claim parity or make republishing an invented V1 build gate |
| This handoff and a specifically named curated fragment | Lane A response/application evidence and local graph representation. Bind the fragment path in the final packet; no generic permission to rewrite Graphify tooling |
| Build Spec, Artifact Inventory, work order, Phase Closure; Product §8 tracking facts | No sprint scope/DoD, governed artifact creation/retirement, active code unit or lane change is proposed. Product §8's navigation-only clarification is named above. If the finished packet changes a tracking fact, state and authorize that exact consequence under D-54 |
| Frozen PRD/Charter/0001, application, migrations, CI, UX implementation | Unaffected; not authorized |

### Failure-derived success criteria

These are planned documentation walkthroughs. No runtime test or database behavior is claimed.

| Counterexample / failure | Evidence required to accept the corrected specification |
|---|---|
| Package has no trend description | Every current requirement/example yields the named validation failure, no Logged completion and no transition asserting completion; no current "undefined" fallback remains |
| Package lacks source information, or has only the URL | The required-input definition gives an unambiguous answer without inventing an author or making nullable author/date mandatory |
| Valid non-URL reference is presented | The domain crosswalk identifies the applicable D-121/D-194 path and validation rule, or explicitly identifies the uncompleted wider scope; URL-only checks are not claimed to validate another reference |
| Two different commissions cite one URL | No blanket duplicate refusal; the corrected behavior agrees with AC-02 |
| Same submitter submits the same POC brief today versus another day; Chief Editor manually triggers MVP | POC same-day refusal, different-day permission and manual-trigger availability remain distinguished. Existing-article engagement association is tested as a separate case |
| Zero subjects versus one subject plus two analytical tags | No-subject input fails; one subject is not turned into several subjects by analytical tags. Product, FN and live Addendum text agree |
| Source author/date cannot be extracted | B1's flag/T2 handling remains, distinct from missing mandatory package input |
| Human supplies values while an agent executes | Supplier and actual executor/Line are separately attributable; neither source authorship nor AI generation is invented |
| A historical panel or current summary still says the producer is absent | A dated current-use correction points to the contract and actual residual; it does not erase history or claim hosted parity |
| The journal is treated as the current execution queue, or a module/PBL identity is treated as a sprint authorization | Current pointers lead to the owning Build Spec/work order and Register act; historical citations remain evidence, and no backlog rank, build permission or lane state is inferred |
| A green suite is used as proof of completion | Source review resolves the contradictions; graph extraction, coverage and named-fragment parity are reported separately; FB-05 evidence precedes G105 closure |

## What you did instead

Read the attached request, repository handoff template and supplied gap-analysis template; used
them as structure, not new authority. Reviewed the applied diff and the owning/derived sources,
with independent parallel checks of authority and behavior. Graph query was used for orientation.
The initial sandboxed check could not spawn some child processes; the complete permitted rerun
passed at `257677f`. The graph metadata matched that revision with `stale: false`, and
`frag128.json --verify-only` confirmed its exact semantic parity. This is not a corpus-wide
semantic audit or proof about hosted Encyclopedia contents. A read-only attempt to open the
ledger's hosted artifact returned no content; its current parity remains unverified.

Recorded B-083's independent process verification and this distinct specification review only.
No governed requirement, schema, application, workflow, graph, frozen source or lane state was
edited. No build, migration, runtime test or push was performed. Only the two Lane B handoff
records are being preserved as local, one-entry commits under D-184; their transport does not
apply the proposed specification. The source review is of local `257677f`; the supplied report
says its ancestor range is held. Cached upstream evidence
is not represented here as a freshly checked remote tip. New handoff text is not covered merely
because Graphify's analyzed commit matches HEAD.

**Draft validation, before the handoff commits:** 15/17 local consistency checks passed. The
new entry needs Lane A's acknowledgement and curated graph coverage; those are the two reported
failures. B-083's independent-verification metadata passes. A subsequent handoff commit also
advances HEAD beyond the analyzed source revision, requiring Lane A's final graph refresh.
None of those transport facts erases the semantic defects found in the source review.

**2026-09-08 orchestration-guide review at `e53865d`:** added the parent-first routing requested
by the Judge, preserving each handoff's own lifecycle and existing preparation authority.
Independently cross-checked the B-017/B-079 tooling distinction and B-071/B-061 dependency
wording. The additional US-01, overview and execution-pointer occurrences are in the proposed
write set, not applied to those documents. The full local suite reported 14/17 passing, with
B-084 acknowledgement, B-084 curated coverage and `docs-drift` outstanding. The graph was
analyzed at `257677f`, not the reviewed HEAD; its `stale: false` flag does not override that
mismatch. Fixture/runtime tests were not run. This follow-up changes only this handoff; no
new SOP, application, graph write or push is included.

## Approve / reject

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve-with-conditions | D-186/D-188/D-195 orchestration routing and proposed current-pointer clarification | Phase 1: preserve existing owners; prepare the bounded literal corrections, without inferring application authority |
| Approve | B-083 process correction and D-197 A1/B1 decisions | Phase 1: preserve; no repeat drafting/choice request |
| Approve-with-conditions | FR-01 manual-input specification direction | Phase 1: complete the input predicate, existing-rule mapping and literal correction packet |
| Reject | Complete-specification/no-residual-deficiency claim | Phase 1: reconcile the evidenced contradictions before requesting independent closure |
| Defer | FB-05/G105 closure and affected view parity | Phase 1: authorized application, exact-revision source review and appropriate graph/hosted evidence |
| Defer | Accumulated-range push, B-071/D-171, PBL-11 and implementation | Existing separate owners and bounded authorizations; no change from this review |
