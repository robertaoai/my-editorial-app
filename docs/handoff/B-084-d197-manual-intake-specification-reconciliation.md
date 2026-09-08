# B-084 — D-197's manual-intake specification still has contradictory requirements

- **Raised:** 2026-09-08 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** independent closure of the claimed complete FB-05/G105 intake specification; not unrelated authorized work
- **Status:** Open
- **Lane A:**
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
| `docs/Modular_PRD.md` | Align FR-01/AC-01 and §7.1's residual with the resolved input scope; retain AC-02's D-121 rule and Q9's decided status |
| `docs/source/v1-build-readiness-addendum.md` | Proposed live T1/AT-001/AT-003 wording clarification; no repeated A1/B1 ratification. Include this extra application surface explicitly |
| `docs/governance/requirements-traceability-map.md` | CR-14/FB-05 reflect corrected specification and actual independent evidence; do not fabricate implementation or customer re-approval |
| `docs/journal/2026-08-18-storyboard-business-and-digital-twin.md` | Dated, link-led correction to A1/A2/B1/B2 current-use notices; historical panels remain provenance, not the source of product authority |
| `docs/modules/M-POC-REQUIREMENTS.md` | Propose a link-led manual-package/context clarification at PR-01/PR-04 if needed; preserve PR-02's shared-core boundary and existing engagement association; no activation or payment feature |
| `docs/ENCYCLOPEDIA-SYNC.md` | Existing Entry 06 impact queue only; update verification metadata only after actual hosted inspection/update. D-194/D-197 already disclose impact. Do not claim parity or make republishing an invented V1 build gate |
| This handoff and a specifically named curated fragment | Lane A response/application evidence and local graph representation. Bind the fragment path in the final packet; no generic permission to rewrite Graphify tooling |
| Build Spec, Artifact Inventory, work order, Product §8, Phase Closure | No sprint scope/DoD, governed artifact creation/retirement, active code unit or lane change is proposed. If the finished packet changes one of those facts, state and authorize that exact consequence under D-54 |
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

## Approve / reject

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | B-083 process correction and D-197 A1/B1 decisions | Phase 1: preserve; no repeat drafting/choice request |
| Approve-with-conditions | FR-01 manual-input specification direction | Phase 1: complete the input predicate, existing-rule mapping and literal correction packet |
| Reject | Complete-specification/no-residual-deficiency claim | Phase 1: reconcile the evidenced contradictions before requesting independent closure |
| Defer | FB-05/G105 closure and affected view parity | Phase 1: authorized application, exact-revision source review and appropriate graph/hosted evidence |
| Defer | Accumulated-range push, B-071/D-171, PBL-11 and implementation | Existing separate owners and bounded authorizations; no change from this review |
