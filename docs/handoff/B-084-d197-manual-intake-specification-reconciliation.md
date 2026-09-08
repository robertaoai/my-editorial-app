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

- **Verified-At-Commit:** 78cd2b3d191c90238f5b3df84aa20e0f9f50b9b6

## Independent review of D-199 at the pushed revision — 2026-09-08

**Reviewed source:** `73226b7759920348a5ba04915ba6ad506bcf700c`; D-199 application commit
`78cd2b3d191c90238f5b3df84aa20e0f9f50b9b6`. A fresh fetch confirms local and upstream both at
`73226b7`, with no outgoing commits. The earlier credential-blocked/four-outgoing account is
historical. B-085's existing bounded verification is now committed and pushed; its review anchor
remains `03495db`. It is not reopened by this review.

**B-084 remains Applied.** The current evidence anchor above advances to the actual D-199
application now that its commit exists. The previous `b40dfc3` anchor records the earlier partial
application, not this later repair; it remains cited in the historical reviews below. This is an
application/evidence anchor update, not terminal verification or a new `Verified-By` claim.

**Narrow repair accepted:** AT-001 removes the completeness assertion, supplies source information,
preserves the actual agent/Line/identifier/timestamp audit fields, records the human supplier
separately, and now exercises multiple analytical tags. Its scope note retains optional tags and
the open source-information/non-URL questions. AT-002 through AT-006, including AT-003, were not
changed by `78cd2b3`.

| Remaining gap | Draft correction / Phase 1 success criterion |
|---|---|
| D-199 calls zero-tag and multiple-tag acceptance "opposite" behaviour | Append a correction: both cases conform to optional analytical tags; the defect is differing test coverage and mapping, not contradictory allowed behaviour |
| Zero-tag acceptance is no longer exercised by a positive fixture | In the existing acceptance packet, give AT-001 two otherwise-valid cases: zero and multiple analytical tags. Both succeed with exactly one subject. AT-003's missing-subject refusal cannot itself prove zero-tag acceptance; no new test identifier or product requirement is needed |
| FN-GATES §8 still assigns missing-subject refusal to AT-001 | Draft mapping: `AT-001 → valid-input acceptance, one subject with zero or multiple analytical tags`; `AT-003 → refusal when the subject is absent, analytical tags never substituting`. Inspect AT-002/AT-005's domain/extraction traces within the same existing contract crosswalk |
| D-199 says FN-GATES is "Reconciled-unchanged" while acknowledging that mismatch | Use "Not edited in this write set; acceptance mapping remains unresolved." Do not describe partial reconciliation as a settled tier |
| The applied note below calls three files the entire write set | Append: `78cd2b3` also transports the existing B-085 verification annotations. The actual commit has four files; this transport neither reopens nor extends B-085 |
| D-199 invokes existing repair authority; the B-084 answer also records subsequent Judge authorization | Identify whether that record cites the same act, a later confirmation or an additional act. These accounts need not conflict. Do not re-ask the source-tier question or treat our source review as independent witnessing of the original instruction |
| D-199 suggests `Answered` plus a Resolution is a lifecycle contradiction | It is valid: `Answered` records response, while `Applied`/`Verified` records resolution. TEMPLATE says **merely** Answered. Optional clarification: "omit Resolution until a resolution is recorded; retain the response status." No new status or checker workaround is needed |

**Proposed acceptance wording for the existing packet:**

> Given an otherwise valid approved URL-based manual package containing source information,
> exactly one subject and a trend-signal description, exercise AT-001 once with zero analytical
> tags and once with multiple analytical tags. The Reporter executes T1 in both cases; both enter
> Logged with `executor_type = agent`, `line_assignment = Line1`, actual `agent_id` and timestamp,
> and separately identified human supplier. This coverage does not decide source-information
> omission or non-URL handling. Keep AT-003 as the missing-subject refusal case.

**The existing view follow-ups remain with this entry/D-199, not the new D-200 handoff:**

- **F1 / Encyclopedia Entry 06:** preserve `Last verified at f7b3aea`; add the dated re-check reason
  "D-197 affects the declared inputs; hosted content not yet rechecked." Staleness is a queue,
  not proof the hosted article is wrong. Do not advance its verification anchor without reading it.
- **F2 / requirements-scope knowledge graph:** the Markdown/Mermaid view still shows CR-14 with
  no FR despite its declared input map now tracing FR-01. Draft its node/edge and prose to read
  "CR-14: manual contract covered by FR-01; FB-05 reconciliation/verification remains; future AI
  generation is PBL-11." Updating runtime Graphify does not repair this source diagram.
- **F3 / dated FR-14 proposals:** add an explicit historical-proposal notice to the two named
  Board analyses: current CR-14 traces to FR-01; operative FR-14 is the business-continuity
  surface allocated by D-62. Preserve the original proposals; do not globally renumber them.
- **Product/storyboard/data flow:** the existing CR-14 status correction and Panel A2's obsolete
  producer note remain in the final contract/view packet. Preserve the M-MVP/M-POC manual partition,
  audit-before-state and separate supplier/executor. D-200 changes development tooling, not these
  product roles, modules, states or diagrams.

**Parent-first follow-up:** Cowork prepares the one acceptance/domain/status/view packet from
these existing criteria; map it to the applicable act before application; then independently
verify its final committed content and graph evidence before closing B-084/FB-05/G105. The
separate D-200 bootstrap review is [B-086](B-086-d200-tool-split-and-handoff-bootstrap-review.md).
Neither chain is made a prerequisite for unrelated authorized work.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | D-199's bounded AT-001 improvements and actual application anchor | Phase 1: preserve the evidence at 78cd2b3 |
| Approve-with-conditions | D-199 coverage/mapping and application account | Phase 1 Cowork: use the corrections above in the existing packet |
| Defer | Whole B-084/FB-05/G105 closure | Phase 1: complete contract and dependent-view reconciliation, then independent verification |
| Reject | Different valid examples as contradictory requirements; Applied anchor as terminal verification | Preserve the distinct meanings and B-085's bounded closure |

## Follow-up review — authority provenance and executable verification order — 2026-09-08

**Clarified request:** review Lane A's acceptance of the prior corrections, resolve the remaining
AT-001 authority disagreement from evidence, and finish the smallest draft follow-up. The quoted
Lane A plan is input to review, not an application instruction. The source baseline remains
`03495db7bd7d9df958711735002629895d84c9bb`; only B-084/B-085 carry working-tree annotations.

### Parent — distinguish recorded authority from independently verified authority

**Lane A is correct that this review grants no application authority.** Its further claim that
another Judge act is required merely because AT-001 is in the governing set is not established.
D-197's **Second act** expressly records Chief Editor authorization for Addendum T1 and
AT-001/AT-004 corrections. D-198 routes the later residual repairs back to D-197. B-073's
baseline-change stop applies to a change adding to or contradicting the frozen baseline; no such
new policy choice is identified in the proposed analytical-tag clarification.

**Correction to my preceding review:** saying the second act definitively covers the exact final
replacement and scope note was too strong. The earlier review in this entry explicitly states
that the original direct Judge instruction was not visible; I verified the recorded act and edits,
not the original instruction. Read the preceding review's categorical authority claims and its
draft Register wording subject to this qualification; they are not independent proof of that act.

Use this replacement authority statement:

> D-197 records Judge authorization for Addendum acceptance corrections. The proposed AT-001
> replacement repairs that test while preserving the ratified package and leaving requiredness
> and non-URL handling open. Lane A should retrieve and cite the original Judge instruction and
> map its scope to the exact row and scope note. Reuse the existing authority if it covers that
> repair. If the scope exceeds the act, or the necessary authority remains unconfirmed after
> checking its provenance, seek one bounded application decision on the completed text.
> Review and drafting continue under existing authority; a source-tier location is not itself
> a new approval gate.

This is **recorded authority with exact application provenance not independently confirmed**,
not a newly undecided business requirement. D-183 owns the evidence test; B-083 owns the
instruction to reuse a covering act and avoid repeated per-file permission. No clarification is
needed to finish the review and draft requested here.

### Remaining corrections to Lane A's latest plan

| Item | What remains wrong or unclear | Smallest draft fix / success criterion |
|---|---|---|
| P1 before P5 | P1 requires the final full-suite pass immediately after a new commit, while P5 has not yet updated the graph. `docs-drift` then compares the old analyzed HEAD with the new HEAD | Preliminary checks → authorized commit → graph extraction/curated/semantic work → final full suite. Graph currency must be established before demanding the final all-pass result |
| P5: "clear" the semantic marker | Deleting `.graphify_describe_pending` would remove an alarm without generating or ingesting descriptions. Marker absence alone is not semantic proof | Complete the live description/community batches and ingest them through the installed workflow; let the tool clear its own marker. Then verify pending work, curated parity and final HEAD. Do not perform another rebuild that discards the ingested descriptions |
| P5: "No portability gate" | Existing ignored-runtime findings do not block this packet, but the outgoing range includes tracked `docs/graph-fragments/frag130.json` | Preserve B-085's existing scoped proof: proposed tracked graph paths must be relative and resolve; runtime stays untracked. Do not require a clean scan of all ignored runtime files or create new portability work |
| Surviving source-sweep guarantee | The comparison is `t > regTime`, not a requirement that two paths occur in one commit. A later Register commit or timestamp tie changes the result | Recommend one source/propagation packet, while stating the actual conditional failure. Inspect propagation content and run the effective full runner; neither equal timestamps nor a fixed check total proves correct content |
| P2/P3: partial replacement and a new finding | "Delete only" can leave the actual table partly corrected. Reference, supplied source information and extracted metadata are distinct concepts; their coexistence is not itself a contradiction | Use the **entire AT-001 row and full scope note already drafted below**. Add AT-002 to the existing domain crosswalk. Retain AT-005/B1; create no duplicate finding, test ID or requirement |
| Census evidence and P6 | A working-tree count cannot be described solely as `N at SHA`. The committed Applied set includes B-085, whose verification is in this very packet, and B-084, whose narrow source correction is also in it | Identify committed SHA versus base SHA plus named working-tree changes. Say "other Applied entries retain their individual owners"; B-077 is the existing routing reference, not the owner of their evidence or a new live ledger |
| P4 and Product status | B-061's stale narrative needs a dated correction. The existing CR-14 gap-row draft says reconciliation remains, so correcting that status does not depend on first completing the contract | Draft the B-061 correction below for its owner; apply each status correction within its bounded scope. Do not silently add B-061 to the current four-path transport proposal |

**B-061 dated correction — proposed for Lane A, not applied here:**

> Correction, 2026-09-08: the earlier response's Q12/Q1 Phase-0 blockers are historical. D-163
> decided them; D-164/D-165 defined the earlier unit, and D-171 later held both historical and
> target S2 orders. This entry remains Answered pending its current dependency/successor
> disposition, including the blind-review/reveal UX question, against the current work order
> and B-071. Q1's production half remains with OD3. A dated correction does not itself satisfy
> the remaining criteria or confer fresh S2 authority.

### Lane A guide — the actual dependency order

| Order | Follow-up | Accept when / owning phase |
|---|---|---|
| 1 — authority evidence | Match the final AT-001 row/note to the original act recorded by D-197. Keep D-199 as a draft identifier until Lane A records the next actual decision | Phase 1: existing scope is evidenced, or the one genuinely missing bounded act is obtained; no repeated baseline ratification |
| 2 — concrete source packet | Use the full existing AT-001 draft plus Register rationale/applicability and the two reviewed handoff records. Inspect exact content and paths; perform preliminary checks | Phase 1: package components, supplier/executor, audit fields and unresolved domain/requiredness are preserved; the existing Product/view packet stays separately identified |
| 3 — authorized commit, then graph | Commit the bounded packet, refresh extraction, restore curated fragments, complete/ingest relevant semantic work, and verify final graph state | Phase 1: no manual marker deletion as completion evidence. A broad semantic-completion claim requires no pending work; any unrelated enrichment deferral is explicitly bounded |
| 4 — final evidence, then transport | Run the full local consistency runner after the last graph operation; record its observed results and final SHA. Refresh and review the complete outgoing range before any authorized push; verify the remote afterward | Phase 1 transport: no fixed tally as a reusable gate, no earlier SHA reused after a further commit, no push authority inferred from this review |
| Independent contract work | Continue D-194's existing requiredness/domain draft, including AT-002, the CR-14 status row and dependent views; route B-061's correction through its existing owner | Phase 1: precise allowed/refused cases and current-source crosswalk, then independent B-084/FB-05/G105 verification. B-071/D-171 and Phase 3 retain their gates |

The Product PRD, historical storyboard panels and sequence/data-flow views, traceability map and
Encyclopedia ledger have no new source changes since the preceding pinned review. Its concrete
crosswalk and Entry 06 hosted-parity limitation stand. No new diagram or duplicate closure
tracker is needed. B-084 remains Applied; B-085's bounded Verified annotation remains uncommitted.

**Evidence:** the current full local runner passes 17/17 and the two censuses remain as recorded
below. A fresh fetch again finds upstream `8f441c7`, with `15cce88`/`03495db` the outgoing range.
Graph metadata still matches committed HEAD; `check-update` still reports semantic work pending.
No source policy, graph state, checker, product code, lifecycle header, commit or push is changed
by this follow-up. This review updates only this entry and B-085's review pointer.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Accepted prior corrections and existing bounded handoff dispositions | Phase 1: preserve their evidence; no repeated review or bulk closure |
| Approve-with-conditions | AT-001/Addendum/Register application plan | Phase 1: original-act scope match, full drafted text and corrected commit/graph/check order |
| Defer | Independent clearance of the exact source application; full B-084 contract closure | Lane A checks existing-act evidence next; separate Phase 1 contract and independent-verification gates remain |
| Reject | Governing location alone as a new approval requirement; our review as authorization; manual marker clearing as semantic completion | Phase 1: use the corrected distinctions above; no build |

## Review of Lane A's consolidated completion and transport proposal — 2026-09-08

**Clarified request:** independently review the proposed completion ledger and pre-push plan;
preserve existing terminal decisions, correct unsupported claims, and give Lane A a parent-first
documentation packet with explicit acceptance evidence. This section is the review of the supplied
proposal, not its execution. No new backlog, governed-source edit, application build or push is
authorized by this review. The individual handoff headers remain canonical.

**Baseline:** `03495db7bd7d9df958711735002629895d84c9bb`, plus the uncommitted Lane B annotations
in this file and [B-085](B-085-external-docs-audit-disposition.md). The prior five-group review
stands; this entry remains **Applied**. B-085 remains **Verified for audit disposition and the
seven scaffold notices only**, as recorded in its working-tree header. Neither scope is reopened.

### What is accepted, and what the proposal gets wrong

The useful addition is an explicit Register/tier-applicability step for the Addendum correction.
My earlier short follow-up omitted that execution detail. Its final graph step also needs an
explicit semantic-queue check. Those are real omissions; they do not establish the other
"guaranteed failure" claims in the supplied proposal.

| Proposal claim | Source-grounded review | Draft correction / owner |
|---|---|---|
| P1: `node scripts/checks/source-sweep.mjs` returning zero establishes zero findings | **False.** The file only exports `run()`; direct invocation does not call it. It prints nothing and exits successfully. See [source-sweep](../../scripts/checks/source-sweep.mjs), function `run`, and [the actual runner](../../scripts/check-consistency.mjs) | Use `bun run check`; require an actual `source-sweep` result, not a silent exit. Lane A, Phase 1 transport |
| Editing AT-001 alone immediately guarantees 16/17; only one commit can prevent it | **Overstated.** The check compares last-committed `%ct` values with `t > regTime`; it reads neither the unstaged nor staged edit. A source commit newer than the Register triggers the finding. A later Register commit also satisfies the heuristic; equal timestamps do not prove real propagation | Prefer one coherent source/propagation packet, but verify content and final committed history. Do not change the checker or treat timestamp equality as semantic proof |
| P2 fixes Lane B's retained completeness assertion | Lane B's proposed replacement already deletes "complete manual package". The defect is in the current Addendum row, not in the proposed replacement | Apply the scoped replacement below within the existing correction boundary; do not invent a second failed wording round |
| Supplying source information in AT-001 makes it universally required and conflicts with AT-005 | **False inference.** A positive test fixture is not a requiredness rule. D-194 names source information in the package; D-197 B1 keeps extracted author/date nullable. Those concepts are not synonyms | Retain source information in the example and state precisely what omission questions remain open. Preserve AT-005's extraction-failure behaviour |
| The human supplier must be stored on the transition row | FN-GATES requires supplier and executor to be distinct recorded facts; it does not decide the supplier's physical storage location | Keep the existing transition audit keys and record supplier provenance separately, without specifying a new column |
| P3 discovers a new contradictory acceptance outcome | AT-001's broad "source reference" and AT-002's URL refusal expose unqualified domain wording; a URL is itself a source reference. The stronger existing contradiction is Product FR-01's explicit non-URL allowance versus FN-GATES' URL-only entry/T2 clauses | Add AT-002 to **this entry's existing domain crosswalk**, not a new finding or handoff |
| P4: the proposed CR-14 status correction must wait because it claims reconciliation is complete | **False.** The proposed row expressly says input-scope, requiredness and dependent-clause reconciliation remain. Product §7.1 currently records FR-01 coverage and still labels CR-14 "Missing functional requirement" | Retain the existing replacement row below. Its application needs the applicable bounded scope; completing the contract is not a semantic prerequisite for correcting a stale status description |
| P6: B-061 items 1/4 remain blocked on undecided Q12/Q1 | **Stale.** D-163 decided Q12 and Q1's Phase-0 scope; D-164 supplied the then-next unit. D-196 explicitly forbids re-asking those accepted decisions. D-171 subsequently holds both historical and target S2 orders | Reconcile B-061's surviving criteria and B-070/B-071 successor disposition. Keep Q1's later production scope distinct; do not present it as an unanswered Phase-0 decision |
| B-077 now owns all Applied entries, and any Applied entry bars every phase closure | B-077's Deferred disposition closes that parent only and routes its children to their existing owners. Handoff README and `closure-readiness` gate entries filed against the **phase claiming closure** | Review each originating entry; Phase 1's Applied population blocks Phase 1 closure. Do not impose a new global freeze on unrelated phases or reopen B-077 |
| P5: Graphify is absent here; all graph work is forbidden before commit; the whole runtime must be portable | Graphify is installed on this host. Final evidence must match final HEAD, but earlier navigation/provisional checks are valid. B-041/B-050 already scope portability to proposed committed artifacts, not ignored runtime state | Use the installed downstream workflow; separate extraction, curated parity, semantic ingestion and commit portability as below |
| A governing-source wording repair requires another Judge classification before any progress | [B-073](B-073-r66-frozen-source-intake-correction-guide.md) distinguishes refinement from a baseline change; it does not require a new classification act for every source edit. D-197's second act already covers the Addendum acceptance correction; [B-083](B-083-decision-tree-and-judge-authorization-routing.md) requires reuse of applicable authority | Lane A records the exact existing act and owning tier. Ask only if the proposed action adds scope or settles a still-open business choice; review/drafting can proceed now |

### AT-001 — final proposed wording, not applied

This replaces the earlier proposed row only to make its scope and supplier-recording boundary
more explicit. It retains the approved package components and all existing audit fields.

| Test ID | Given | When | Then |
|---|---|---|---|
| AT-001 | Reporter agent (Line 1) is active; the input satisfies every other applicable requirement of the approved URL-based manual-intake contract | The Chief Editor supplies a reviewable source URL, source information, exactly one subject topic and a trend-signal description, with no analytical tags; the Reporter agent executes `T1` | Article enters `Logged`; the transition audit records `executor_type = agent`, `line_assignment = Line1`, the actual `agent_id` and timestamp. The Chief Editor is identified separately as the human supplier. Zero analytical tags do not cause refusal |

**Scope note to carry with the row:** this positive example tests analytical-tag optionality only.
Including source information preserves D-194's named package components; it does not decide
whether the reference alone satisfies that component or what omission would require.
Source-information requiredness and non-URL handling remain in B-084/FB-05's existing
reconciliation packet. Nullable author/date extraction and Investigator review remain governed
by D-197 B1/AT-005. AT-004's permitted cases likewise assume otherwise valid input.

### Register record and tier applicability — proposed text for Lane A

Use the next available decision identifier; `D-199` is a proposal label, not a reserved or adopted
decision. Record the existing D-197 second act as the authority for repairing this acceptance
wording, rather than claiming that the review grants a new source-policy act.

> AT-001's phrase "complete manual package" overstates what its analytical-tag test proves.
> Within D-197's authorized Addendum correction, replace that row and carry its scope note in
> full. Preserve D-194's package components, D-197 A1/B1, supplier/executor separation, existing
> audit fields and the open source-information/non-URL reconciliation. B-084 remains Applied;
> this correction does not close FB-05/G105, alter D-121's duplicate guard, or release D-171.

| Owning or dependent tier | Applicability for this narrow packet |
|---|---|
| Register | Affected: correction rationale, existing authority, explicit applicability and unresolved domain/requiredness pointer |
| Addendum §AT-001 | Affected: exact row and scope note above |
| Product PRD / FN-GATES / traceability map | No new behaviour in this narrow row correction. Inspect acceptance references for consistency; their existing B-084 domain and status corrections retain their own scope |
| Build Spec / Artifact Inventory / Phase Closure | Unaffected by this wording repair: no new scope, sequence, DoD, created/retired file, sprint closure or lane transition. Do not manufacture edits solely to equalize timestamps |
| Storyboard / sequence and data-flow views | Existing B-084 reconciliation remains owed; this limited acceptance edit does not make the historical panels current |
| Encyclopedia | Entry 06 remains in the existing re-check queue; local ledger review is not hosted-content verification |
| Handoff evidence | Include the reviewed B-084/B-085 annotations; preserve their separate lifecycle scopes |

If Lane A includes the CR-14 status row in the same packet, name that Product-tier edit explicitly
and bind its application to the applicable authority. Do not hide it under an "unaffected" row.

### Dependent views and business semantics

The existing source crosswalk remains the required contract work:

- **Product / behaviour / acceptance:** Product FR-01 permits wider source references; FN-GATES
  §3.1 and T2 require URLs; Addendum AT-002 rejects missing URLs. Define the approved domain and
  requiredness once, then align these clauses. Keep source information distinct from nullable
  extracted author/date, and exactly one subject distinct from optional analytical tags.
- **Storyboard and UML/data flow:** [Panel A2](../journal/2026-08-18-storyboard-business-and-digital-twin.md)
  preserves the old URL-only arrows and has an explicit historical warning for cardinality and
  ordering, yet its later note still calls FB-05 an unresolved producer dependency. The producer
  is now specified. Replace that current-status note with the remaining reconciliation; derive
  any updated sequence from the final contract, retaining audit-before-state and separate supplier
  and executor. The dated diagram does not become build input through this review.
- **Module partition:** M-MVP is the Chief Editor's manually entered editorial trigger package;
  the M-POC Instacart example is an external capture followed by manual extraction/entry into the
  application. No automated feed or integration is implied. Modular_PRD traces both modules while
  M-POC requirements remain in their separate source. V1, sprint, Q9, FB-05, G105 and PBL-11 are
  different kinds of fact: Q9's A1/B1 are decided; FB-05 needs contract verification; G105 follows
  that evidence; PBL-11 is a separate future capability.
- **Encyclopedia / references:** [Entry 06's ledger](../ENCYCLOPEDIA-SYNC.md) still names
  `f7b3aea`; hosted parity is unverified. Use the existing entry and cross-reference owners rather
  than inventing a new diagram, encyclopedia or closure tracker. A path resolving proves location,
  not the accuracy of the assertion at that location.

### Evidence observed in this review

The full local suite passed **17/17** at the baseline plus the existing two working-tree handoff
annotations. Its census is **52 Verified, 7 Superseded, 3 Deferred, 18 Applied, 1 Open, 1 Answered
without Resolution and 4 turn reports**. This is a dated working-tree observation, not a maintained
roll-up or a fresh substantive re-verification of every historical closure. The checker confirms
verification-anchor existence and field rules; it cannot prove the truth of every correction or
the actual actor's independence. B-085's Verified annotation is not yet in committed HEAD;
that committed census instead has 51 Verified and 19 Applied, with the other categories unchanged.

Fresh `git fetch origin` succeeded. Upstream remains `8f441c7031659d5aacc4e1df5504953d21bdafd5`;
the reviewed range remains the two commits `15cce88` and `03495db`, with no divergence. That
observation does not cover the later commit(s) needed to transport these annotations or AT-001.

Graph metadata matches committed HEAD and `stale` is false. Named frag129/frag130 verify-only
checks each pass their exact node and four edges. **`graphify check-update` reports pending
semantic updates**, including the fast-hook descriptions/labels marker. Thus the graph is
commit-current with those two curated fragments verified, not semantically complete across the
corpus and not proven to contain the working-tree annotations. A source comparison remains the
authority for this review.

The installed Graphify command is available on this host. The runtime portability scan reports
existing findings in ignored local artifacts; `git ls-files .graphify` is empty. Preserve the
B-041/B-050 boundary: run and classify the scan, require repository-relative portable paths for
any proposed tracked graph artifacts, and keep runtime metadata untracked. `merge7.js --all`
audits fragment conflicts; it does not merge all fragments. Use actual fragment merge operations
and verify their parity. One successful metadata check cannot close B-050's intermittent defect.

### Lane A follow-up — parents before dependent work

| Order / dependency | Action | Success criterion and follow-up phase |
|---|---|---|
| 1 / existing correction authority | Bind the exact AT-001 repair to D-197's second act; prepare the Register rationale/applicability and the final literal path set. Preserve the reviewed lifecycle distinctions | Phase 1: no renewed baseline question or implicit new application/build/push act |
| 2 / 1 | Apply the AT-001 row and scope note in full within that bounded correction. Transport the Register record and two handoff annotations in the reviewed packet; one source/propagation commit is the preferred arrangement | Phase 1: optional analytical tags proven without resolving omission/non-URL policy or adding supplier storage schema; inspect staged content, not just filenames |
| 3 / 2 | Run the full local suite before commit, recognizing that the source timestamp check still sees old history. Commit only the authorized exact set; inspect the actual committed content | Phase 1 transport: preflight result distinguished from post-commit evidence; no silent no-op check accepted |
| 4 / final source commit | Lane A refreshes the extracted graph through the installed workflow, preserves/re-merges curated fragments, checks pending semantic ingestion and fragment parity, then verifies final HEAD metadata and runs the full suite again | Phase 1 evidence: no graph/doc drift for the claimed revision; resolve relevant pending semantics or explicitly bound/defer general enrichment. Portability applies to the exact proposed tracked artifacts |
| 5 / 4 | Refresh upstream and inspect the complete final outgoing range immediately before any authorized push. If pushed, verify the remote tip afterward; give the immutable evidence to the independent reviewer | Lane A transport: old two-commit evidence is not reused for an expanded range; this review is not a push instruction |
| Independent after 1 / existing D-194 drafting authority | Prepare one requiredness/domain packet including AT-002, the existing CR-14 status replacement and the dependent views; this need not wait for transport. Ask for a decision only on the actual unresolved alternatives/application scope | Phase 1 contract: exact clauses, allowed/refused cases, module partition and owners. Then independently review B-084's full criteria before FB-05/G105 closure |
| Separate existing chain | Follow B-077's existing per-entry questions; verify B-076 before B-073/B-074/B-075 and then B-072. B-061/B-070 successor reconciliation, B-071/D-171 and Phase 3 deferrals retain their own gates | Their named follow-up phases: no bulk promotion, no duplicate live ledger, no reopening accepted Q12/Q1 Phase-0 decisions |

B-061's surviving blind-review/reveal UX question needs a concrete satisfied/excluded/transferred
disposition against the existing work-order and B-071 scope. Historical Unit 1 excludes that work;
the Build Spec routes it to Unit 2, with both orders held. It is not automatically R159, which
owns the progress-axis mapping. Independently verify the successor transfer before closing the
originating entry; do not bring that work into this audit transport packet.

If tracked fragment corrections require another commit, the final graph/check/range proof must
follow that new HEAD. Do not carry evidence forward from the earlier source commit.

**Lane B action:** recorded this review and a link from B-085 only. No governed document, graph
fragment/runtime, source checker, application code or lifecycle header was changed in this pass;
no commit or push. The post-edit consistency suite passed 17/17; all 16 local Markdown file-link
targets across these two handoffs resolve, and the diff has no whitespace errors. This validates
the review records, not application of their proposed source edits or graph semantic completion.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Existing five-group B-084 review; bounded B-085 verification; measured working-tree census | Phase 1: preserve the original evidence and individual lifecycle records |
| Approve-with-conditions | Addendum/Register/handoff transport plan | Phase 1: use the corrected row, effective runner, scoped graph evidence and final outgoing-range proof |
| Defer | B-084/FB-05/G105 complete-contract closure; B-061/B-070/B-071 and legacy Applied reconciliation | Existing Phase 1 owners and dependency gates; Phase 3 remains with B-016/C-001 |
| Reject | Dropping a package component, re-asking settled Phase-0 decisions, silent check success, global phase freeze, whole-runtime portability blocker, or analysis approval as execution authority | Correct the proposal before Lane A follows it; no product build |

## Independent review of the five residual corrections — 2026-09-08

**Reviewed at `03495db7bd7d9df958711735002629895d84c9bb`; applying commit
`15cce884788648a1869c4c819fc7986e62458266`.** The five correction groups identified in the
previous review now pass their narrow source checks. This is not whole-entry verification;
`Resolution: Applied` remains correct. The earlier metadata anchor `b40dfc3` records the prior
application, while `15cce88` contains these additional corrections.

| Previous correction group | Evidence now present |
|---|---|
| Subject versus analytical tags | Addendum AT-001 permits zero analytical tags; AT-003 refuses a missing subject |
| Scoped duplicate handling | Addendum AT-004 and Product US-01's edge cell distinguish the POC same-submitter/brief/day guard from permitted different-day/manual-trigger cases |
| FN-GATES §10 contradiction | The obsolete producer/provenance clause is explicitly superseded and “before S1” is historical |
| Execution ownership | Product §2.6's diagram and §8 identify current scope/work-order/lane sources and classify the journal as historical |
| Copied coverage tally | docs README points to the map's rows instead of repeating the tally |

Read the execution paragraphs as a whole. Their remaining generic “sprint plan” leads are
qualified by the immediate diagram/parenthesis. Simplifying those leads would help readability,
but they do not reopen the corrected current-owner mapping.

### One narrow wording correction before push

Addendum AT-001:518 now calls **source reference + subject + trend description** a “complete
manual package”. The same entry/decision still leaves source-information requiredness and
non-URL handling open. This test was meant to prove that analytical tags are optional, not to
declare that the omitted source information is unnecessary or that every non-URL path is ready.

**Proposed replacement AT-001 row — specified, not applied:**

| Test ID | Given | When | Then |
|---|---|---|---|
| AT-001 | Reporter agent (Line 1) is active; the input meets all other requirements of the approved URL-based manual-intake contract | The Chief Editor supplies a reviewable source URL, source information, exactly one subject topic and a trend-signal description, with no analytical tags; the Reporter agent executes T1 | Article enters Logged; the audit records `executor_type = agent`, `line_assignment = Line1`, the actual `agent_id` and timestamp, with the human supplier kept distinct. Zero analytical tags do not cause refusal |

This example preserves D-194's named package components and D-197's supplier/executor
distinction. It does not invent author/date requiredness, a database field for source information,
an incomplete-draft state or the final non-URL disposition. Include the corresponding provenance
wording in the existing acceptance cross-reference if changed; do not add another test identifier.
AT-004's permitted cases likewise assume otherwise valid input, rather than overriding unrelated
required-input checks. Those qualifications keep single-concern acceptance tests honest.

### Remaining B-084 work — one existing contract packet

1. **Input scope and requiredness:** reconcile FN-GATES' URL-only entry/T2 clauses with Product
   FR-01's wider source-reference allowance; define how supplied source information satisfies
   the approved package without making nullable author/date fields mandatory. This is already
   the D-194 proposal's next unit, not a new decision about whether intake is manual.
2. **One current status row still missed:** Product §7.1:788 says CR-14 has “No FR” and is a
   “Missing functional requirement — FB-05”, although §7.1's FR-01 coverage row records the
   manual contract. Proposed replacement for that gap row:

   | Customer request | Missing or incomplete Product Scope | Classification |
   |---|---|---|
   | CR-14 | The manual-input requirement is specified in FR-01; input-scope, requiredness and dependent-clause reconciliation remain, followed by independent verification. Future AI generation remains separate under PBL-11 | Incomplete specification reconciliation — FB-05 |

3. **Dependent views and evidence:** reconcile storyboard A2's retained “no producer” annotation
   and the relevant sequence/data-flow views against the final contract. Carry the actual
   Encyclopedia Entry 06 follow-up; no hosted parity was inspected here. These existing
   requirements do not imply a new diagram file, integration or M-POC activation.

### Parent-first follow-up and review decision

| Order / dependency | Lane A next action | Acceptance / follow-up phase |
|---|---|---|
| 1 / completed narrow review | Preserve the five corrected groups and record their actual revision | Phase 1: no repeated repair or whole-entry closure claim |
| 2 / before recommending this packet for push | Qualify AT-001 using the proposed row, retaining the existing contract caveats | Phase 1 documentation: no three-item completeness or non-URL-readiness inference |
| 3 / existing D-194 authority | Prepare the one requiredness/domain packet and include the remaining Product gap row and view reconciliation | Phase 1: explicit alternatives, exact proposed clauses, owner and failure cases; ask only at a genuinely unresolved choice/application boundary |
| 4 / final bounded source packet | Include review evidence, synchronize the final graph and rerun checks; refresh the upstream range before transport | Lane A transport: exact current outgoing commits; no automatic publication authorization from this review |
| 5 / accepted complete contract | Independently review B-084's full criteria, then reconcile FB-05/G105 | Phase 1: no automatic S2, sprint or phase closure |

The remote review in B-085 names the two commits examined and their exact baseline. New source
or handoff commits require a fresh range check. The existing B-061/B-071 holds and owners remain
independent. No code, governed source or graph was edited by Lane B in this review; no push.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Five bounded source correction groups at 15cce88 | Phase 1: preserve their narrow independent review |
| Approve-with-conditions | Documentation packet before push | Phase 1: qualify AT-001 and refresh final evidence/range |
| Defer | B-084 / FB-05 / G105 terminal closure | Phase 1: complete the existing contract/status/view work and independently verify |
| Reject | Narrow correction success as product/build completion | Preserve existing scope and authorization boundaries |

## Independent review of the second application — 2026-09-08

**Reviewed at `8f441c7031659d5aacc4e1df5504953d21bdafd5`; applying commit `b40dfc3`.
Keep `Resolution: Applied`.** Several clauses improved, but the statement that all four edit
groups are complete exceeds the source evidence. This review is not terminal verification.
It preserves the adopted A1/B1 choices and B-083's separate Verified disposition.

| Existing criterion | What landed | What remains at the reviewed revision |
|---|---|---|
| Scoped duplicate handling | FN-GATES §3.1/§6 now scope the POC guard and permit manual triggers/different-day requests | Product `US-01`'s edge-case cell still says duplicate URL blocked and AC-02 cannot pass without a unique index (`Modular_PRD:529`). Addendum `AT-004:521` still globally refuses a reused URL |
| Missing required input versus failed extraction | FN-GATES §6 distinguishes these outcomes | FN-GATES §10:256 says the producer is specified, then ends the same paragraph by calling trend-signal provenance unresolved and due before S1. The duplicate extraction-failure rows in §6 can be consolidated without changing behaviour |
| Subject versus analytical tags | Addendum T1:161 now says exactly one subject; FN-GATES' acceptance references include permitted cases | Addendum's actual `AT-001:518` and `AT-003:520` still require topic tags. Updating the FN references does not update the source acceptance rows. “Last holdout” in this answer/Register is overstated |
| Current execution tracking | Product prologue:36 now cites the operative sources | Product §2.6:437/446 and §8:892 still make the historical sprint-plan journal the current execution rung/real tracker |
| Coverage and residual truth | Product §7.1 and map §7 describe the current manual contract and reconciliation still owed | `docs/README.md:30` still copies the old uncovered/partial/unanchored tallies; FN-GATES §10's final sentence remains contradictory |
| Complete input contract and dependent views | Supplier/executor separation and nullable extraction are preserved | Source information requiredness, non-URL handling, dependent storyboard/data-flow interpretation and the existing Encyclopedia follow-up remain expressly outstanding. This review closes none of FB-05/G105 |

**Draft fixes for the already named correction scope, parent first:**

1. In FN-GATES §10, remove or explicitly supersede the stale final sentence beginning
   “FB-05's missing trend-signal provenance”. Retain the new producer-specified residual:
   input scope, requiredness and dependent clauses remain to reconcile, followed by independent
   verification. Do not ask whether the package is manual or restart S1.
2. In the Addendum's actual AT rows, distinguish exactly one required subject from optional
   analytical tags. `AT-001` must permit a complete manual package with no analytical tags;
   `AT-003` must refuse a missing subject. `AT-004` must apply the governed POC scoped guard and
   include permitted manual-trigger/different-day cases. This does not settle the separately
   pending non-URL contract. Align Product US-01's edge-case cell to that same D-121 boundary,
   without a global source-URL uniqueness condition.
3. Replace the current execution assertions in Product §2.6 and §8 with references to the
   Build Spec/work order/Phase Closure in their existing roles. Keep the journal as historical
   rationale, not a second tracker. Replace README's copied coverage sentence with:
   “Current requirement coverage and feedback dispositions are recorded in the
   requirements-traceability map §4 and §7; consult those rows.”
4. Complete this entry's existing input-contract proposal, then reconcile the dependent views
   against its adopted result. Reuse the current owners and acceptance tests; these residues do
   not need another handoff or a new feature identity. Independent review follows the completed
   source packet; graph currency alone is not sufficient.

**Evidence limit:** the Register and this entry record D-197's second authorization act. The
original direct Judge instruction for that act was not visible in this review's new input, so
this review confirms the records and edits exist, not that it independently witnessed the act.
No new authority or repeated approval requirement is inferred. The source failures above are
sufficient to withhold Verified regardless.

The committed baseline passed all local consistency checks and graph metadata matched HEAD.
That does not disprove these clause-level contradictions, and it does not cover this new
working-tree annotation. The separate external-audit review is [B-085](B-085-external-docs-audit-disposition.md).

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | B-084's demonstrated source improvements | Phase 1: preserve |
| Approve-with-conditions | Remaining B-084 correction | Phase 1: complete the existing source/view scope and independently review |
| Defer | FB-05/G105 closure | Phase 1: complete contract and verification criteria |
| Reject | B-084 Verified or all four edit groups complete | Remaining original criteria above still fail |

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

---

## Lane A consolidated answer — the `AT-001` match, and the cross-tier review — 2026-09-08

**Consolidated so Lane B reviews one record rather than a thread.** Source baseline
`03495db7bd7d9df958711735002629895d84c9bb`. **The review below was written as
*specified-not-applied*; the Chief Editor then authorized the packet, and the `AT-001` repair and
its scope note ARE applied — recorded as `D-199`.** The review text is preserved as written rather
than rewritten, with the applied note at the end of this section. **Everything the review marks
*specified, not applied* — the `FN-GATES` §8 `AT-003` mapping row, and findings `F1`–`F3` — remains
unapplied.** No push, no lane-state change.

### Lane B's three corrections — accepted, with the evidence that settles each

| Correction | Lane A's position | Evidence |
|---|---|---|
| **Location does not create an approval requirement** | **Accepted; my blanket requirement is withdrawn.** `D-197` is recorded as *"prepared under `D-194`'s existing drafting authority — no new drafting approval was sought or is needed."* Authority attaches to the **act**, not the directory. What Lane A owed was the **match**, and it is performed below | Register §5.14e22 opening paragraph |
| **Graph before checks** | **Accepted; my order was wrong.** `docs-drift` compares `.graphify/branch.json`'s `lastAnalyzedHead` against `HEAD`; `graph-coverage` reads `.graphify/graph.json`. Both are inside the local suite, so a suite run before the rebuild validates the **previous** commit's graph | `.graphify/branch.json` currently reads `lastAnalyzedHead: 03495db`, `stale: false` — current for the baseline and stale the moment a packet commits |
| **Marker deletion is not completion** | **Accepted; "clear the marker" is withdrawn.** The marker's own text is the instruction: *"Graph rebuilt by the fast git hook without descriptions/labels. Run `graphify update --fill-missing` to fill them."* Deleting it removes the alarm and leaves the graph unlabelled. The act is the fill; the marker clears as a **consequence** | `.graphify/.graphify_describe_pending`, present at the baseline |

### Step 1 performed — the match fails, and it fails at `15cce88`, not at the act

**What `D-197`'s second act authorized** (register §5.14e22, *Second act — 2026-09-08*, item 2):

> *"`AT-001` now asserts **refusal with no subject topic** and **acceptance of one subject plus
> multiple analytical tags**."*

**What `FN-GATES-01-05.md` §8 records** — applied under that act:

> `AT-001` | `AC-01` intake — **including refusal when no subject topic is supplied, and acceptance
> of one subject topic alongside multiple analytical tags** (`G39`)

**What `v1-build-readiness-addendum.md` §8.1 records today** — acceptance of *"A complete manual
package … **with no analytical tags**"*, with refusal relocated to `AT-003`.

**Provenance, from `git log -S` on the literal strings:**

| String | Landed at |
|---|---|
| `A complete manual package is supplied` | `15cce88` — the `D-198` commit closing `B-084`'s five residuals |
| `with no analytical tags` | `15cce88` — same commit |
| `acceptance of one subject topic alongside multiple analytical tags` (`FN-GATES` §8) | `b40dfc3` — the `D-197` second-act commit |

**`b40dfc3` changed exactly one line of the Addendum** — §3.1's `T1` required-set row. **It did not
touch `AT-001`, `AT-003` or `AT-004` at all.**

**Answer to step 1, in two parts:**

1. **The existing act covers editing `AT-001`.** No second approval is needed, and my earlier demand
   for one is withdrawn.
2. **It does not cover the row as it currently stands.** The act's item 2 is recorded as *applied*
   at an act whose commit did not contain it; the content arrived one commit later under a different
   decision, asserting something the act did not authorize. **This is a `D-198` application defect,
   not a `D-197` scope question.**

**`B-085`'s own Lane A block already says so** — *"the Addendum's own `AT-001`/`AT-003`/`AT-004` rows
were **never touched**"*. The register and this handoff channel have therefore disagreed with each
other since `15cce88`, and neither check nor review noticed, because `tier-sweep` verifies claim
**arrival**, not correctness (`G65`).

### Two corrections to Lane A's own prior draft — both mine, neither Lane B's

**1 — the section anchor is wrong in both drafts.** Lane B's replacement and mine each cite
*"`FN-GATES` §11"* for the `AT-001` test-mapping row. **`FN-GATES-01-05.md` §11 is the Editorial
node catalog.** The mapping row is in **§8, Verification** (`FN-GATES-01-05.md:215`). A `D-199` tier
table built on the earlier drafts would have named the wrong section as reconciled.

**2 — the wording dispute hid its own root cause.** `AT-002`, `AT-003` and `AT-005` appear **nowhere**
in `FN-GATES-01-05.md` or `Modular_PRD.md`. `FN-GATES` §8 maps `AT-001`, `AT-004`, `AT-010`/`011`,
`AT-012`, `AT-016`, `AT-017`/`018`/`043` — and `Modular_PRD` §9.1 sources `AC-01` from `AT-001` and
`AC-02` from `AT-004`. **`AT-003` has no handle in either mapping table.** That is *why* the act's
sentence bundled refusal and acceptance into one test id: the refusal assertion had nowhere else to
be recorded. Repairing `AT-001`'s wording alone leaves that cause in place.

**Consequence for the approved plan.** `P1` as drafted repairs the analytical-tags clause and leaves
`FN-GATES` §8 still describing `AT-001` as asserting *"refusal when no subject topic is supplied"* —
which, after the repair, it still would not. **`P2` remains right that no new test identifier is
minted** (`AT-003` already exists and already carries the refusal). What is missing is a **mapping
row**, not a test. Adding one is a **new edit** and needs its own act; it is specified here and not
smuggled into the repair.

### `AT-001` — proposed replacement row, specified, not applied

| Test ID | Given | When | Then |
|---|---|---|---|
| `AT-001` | Reporter agent (Line 1) is active; the input satisfies every other requirement of the approved manual-intake contract (`D-194`/`D-197`) | The Chief Editor supplies a source reference, source information, **exactly one subject topic** and a trend-signal description, **alongside multiple analytical tags**, and the Reporter agent executes `T1` (`G39`/`D-38`) | Article created in "Logged" state; the transition records `executor_type = agent`, `line_assignment = Line1`, `agent_id`, timestamp, **and the human supplier as a separate fact** |

**Deltas from the row now in the tree:** *"A complete manual package is supplied"* deleted — it
overstates what an analytical-tag fixture proves; *"with no analytical tags"* → **"alongside
multiple analytical tags"**, restoring the act's own assertion; source information retained per
Lane B; supplier recorded as a separate fact per `D-197` `A1`.

**Scope note, riding with it** — it restates the act's own recorded status, so it is not a new
decision:

> **OPEN** — `FB-05` closes on independent verification of this specification, not on this act.

**Specified and NOT applied, pending its own act:** a `FN-GATES` §8 row mapping **`AT-003` → the
refusal assertion**, after which §8's `AT-001` row drops *"including refusal when no subject topic
is supplied"*. Zero-tag optionality stays with `AT-003`'s existing Then clause. **No new test id.**

### Cross-tier review — what was inspected and what it changes

Lane B's earlier crosswalk in this entry is not restated. Only what is **new or corrected**:

| Tier / view | Inspected | Finding | Disposition |
|---|---|---|---|
| **`Modular_PRD.md` §9 (`AC-01`)** | `:955` preamble, `:961` row | The preamble makes the Addendum's `AT`-ids **the source tier** — *"AT-ids are the source; AC-ids are this PRD's handle on them."* `AC-01` names one subject topic and a trend signal, is silent on analytical tags, and carries no refusal clause | **Unaffected by the repair — and the reason the repair matters.** A wrong `AT-001` is a wrong source for `AC-01`, and `AC-01` is what the map uses to call `CR-14` covered. Do not edit `AC-01` |
| **`Modular_PRD.md` §4 (`US-01`, `:529`)** | Full row | Already reads *"Analytical tags remain separate and many, `G39`"* | **Consistent with the act.** The Addendum row is the sole outlier. No edit |
| **`FN-GATES-01-05.md` §8** | `:209`–`:222` | The mapping row matches the act; `AT-002`/`AT-003`/`AT-005` are unmapped | **Reconciled-unchanged by the repair**; the `AT-003` mapping row is separately specified above |
| **Storyboard — Panel A2 + its Mermaid sequence** (`journal/2026-08-18-…`, `:51`–`:94`) | Panel text, diagram arrows, both annotations | `≥1 topic_tag` survives in body and diagram, but is **explicitly annotated** *SUPERSEDED FOR CURRENT USE — 2026-09-07 (`B-080`)*, naming `FN-GATES` §3.1 and `AC-01` | **No new defect. Do not re-edit.** Lane B's separate point — that its *"`FB-05` … remains open"* note now needs replacing with the remaining reconciliation — stands and is unchanged by this repair |
| **Story panels / dataflow — `journal/2026-08-18-raci-human-vs-digital-twin.md` §8** | `:203`–`:242`, incl. the sequence at `:217` and the panel/RACI crosswalk at `:229` | Carries **role attachment** (`T1 Logged — A: CE [target: Desk Editor]`), not topic cardinality or tag semantics | **Unaffected.** Its Desk Editor target remains under `B-071`/`D-171`. **Do not widen the packet into it** |
| **`governance/requirements-traceability-map.md` §4 / §7** | `:141`, `:157`–`:159`, `:228` | `CR-14` traces to `FR-01`, `AC-01`, `FN-GATES` §3.1. Neither `AT-001` nor Addendum §8 is cited | **Reconciled-unchanged.** No map edit; the chain it records passes **through** the defective row, which is what the repair fixes |
| **Encyclopedia — `ENCYCLOPEDIA-SYNC.md`** | All six dependency rows | **No entry declares a dependency on Addendum §8 or `FN-GATES` §8.** Entry 06 declares `FN-GATES` §3.1/§6/§7 and map §4/§7; Entry 02 declares Addendum §11/§2.4 | **The repair is Encyclopedia-`unaffected`** — record that explicitly in `D-199`'s tier table rather than leaving it silent |

### Three findings outside the repair — raised, not folded in

**F1 — `D-197` declared Entry 06 affected; the ledger was never annotated.** The decision's own tier
table reads *"Entry 06 affected once the choices are adopted"*, and the choices **were** adopted in
the same decision. `ENCYCLOPEDIA-SYNC.md`'s Entry 06 row still reads `Last verified at f7b3aea` with
**no stale marker**, while Entry 05 carries exactly that marker for `D-168`. **The ledger's own
convention was applied to one declared-affected entry and not the other.** Lane B already noted the
`f7b3aea` anchor; this adds *why* it is a defect rather than a queue. **Owner: Lane A. Not part of
the `AT-001` repair** — it predates it, and closing it here would widen a bounded packet.

**F2 — `governance/requirements-scope-knowledge-graph.md` contradicts the map it declares as its
input.** Its flowchart (`:23`) and inventory (`:98`) still record **`CR-14: AI tagging gap` /
`Uncovered`**. The map has recorded `CR-14` **Covered** since 2026-09-08 (`:141`, `:157`). The file's
own header names `Modular_PRD.md` and `requirements-traceability-map.md` as its **inputs** — both
changed under `D-197`. **It carries no supersession notice**, unlike the storyboard, which got one.

**F3 — `FR-14` names two different requirements in two families of document.**
`poc-feedback-approval-crosswalk.md` §`FB-05` (`:123`–`:130`) and `MFB-03` (`:262`), and
`media-industry-sop-fallback-implementation-plan.md` §6.2 (`:95`–`:104`), propose **`FR-14` as the
closure artifact for `CR-14`** — an AI/manual tagging requirement. `Modular_PRD.md` `:569` allocates
**`FR-14` to the business-continuity observability surface** (`US-14`, `AC-21`, S3, `D-62` closing
`G60`). Doubly stale: `CR-14` closes via **`FR-01` as the ratified manual contract** (`D-194`/
`D-197`), and the identifier those files propose is **already taken by a different requirement**.
Both are dated Board-review analyses declaring *"Build authorization: None"*, so **this is stale
analysis, not a governed contradiction** — but neither carries the supersession notice the storyboard
received for the same class of staleness.

**`F2` and `F3` are reported, not repaired.** Each is a separate bounded unit with its own act.
Per `CLAUDE.md`'s standing caution, both were checked for vocabulary before being recorded as
incompatibilities: `F3` is a genuine identifier collision, not a label mapping.

### Tier applicability the future `D-199` must carry (`D-54`)

| Tier | Applicability |
|---|---|
| `docs/v1/V1-DECISION-REGISTER.md` | **Affected** — records the `D-198` application defect, the repair, and that `D-197` second act item 2 was recorded applied at a commit that did not contain it |
| `docs/source/v1-build-readiness-addendum.md` §8.1 | **Affected** — the `AT-001` row and scope note above |
| `docs/fn-specs/FN-GATES-01-05.md` §8 | **Reconciled-unchanged** — it already matches the act. The `AT-003` mapping row is a **separate** act, specified not applied |
| `docs/Modular_PRD.md` | **Unaffected** — `AC-01` and `US-01` already match the act; §8 unaffected, no sprint closes and no tier opens |
| `docs/governance/requirements-traceability-map.md` | **Unaffected** — cites `FR-01`/`AC-01`/`FN-GATES` §3.1, not `AT-001` |
| `docs/v1/V1-BUILD-SPEC.md`, `V1-ARTIFACT-INVENTORY.md` | **Unaffected** — no artifact is created, sequenced or retired |
| **Encyclopedia** | **Unaffected** — no entry declares Addendum §8 or `FN-GATES` §8. `F1` (Entry 06's un-annotated ledger row) is a **separate** finding with its own owner |
| Storyboard, RACI dataflow, knowledge graph, crosswalks | **Unaffected by the repair**; `F2`/`F3` recorded above as separate units |

### The corrected sequence — Lane B's order, adopted

1. Register entry (`D-199`) + the tier table above + this handoff record + the Addendum edit — **one packet, one commit**.
2. `npx graphify hook-rebuild`.
3. **Re-merge `docs/graph-fragments/` via `merge7.js`** (`G51`) — `edges` → `links`, or the curated layer returns as degree-zero orphans.
4. `graphify update --fill-missing`. **The marker clears as a consequence; it is never deleted by hand.**
5. Confirm `lastAnalyzedHead == HEAD` and `stale: false` (`G97`/`B-050`).
6. `node scripts/check-consistency.mjs` — **once**, on the final tree, recorded as *N at `<sha>`*.
7. Re-verify the outgoing range immediately before any authorized push. **No push authority is inferred from this record.**

### Handoff-template review — `B-084` and `B-085` against `TEMPLATE.md`

| Field | `B-084` | `B-085` |
|---|---|---|
| `Raised` / `Kind` / `Phase` / `Blocks` | Present; `spec-defect` and `finding` both correct for their content; `Phase: 1` correctly names the phase owning the **correction** | Present, correct |
| `Run` | Correctly **omitted** — neither is a `turn-report` | Correctly omitted |
| `Status` / `Lane A` | `Answered`, acknowledged — satisfies the `bun run check` unread-entry condition | `Answered`, acknowledged |
| `Resolution` | `Applied` — correctly **non-terminal**; does not satisfy a phase-closure condition (`D-102`) | `Verified` — terminal |
| `Verified-By` | Absent, and correctly so for `Applied` | Present, and **not the answering lane** — satisfies `D-102`/`B-013` item 4 |
| `Verified-At-Commit` | `b40dfc3` — **exists, but now understates the entry.** `B-085`'s own answer records that this entry's five residuals were closed at `15cce88`, one commit later. The evidence anchor **predates the applied set it describes** | `03495db` — exists, and is the commit the independent review was performed at |
| `Follow-up-Tier` / `Superseded-By` | Not required (`Applied`) | Not required (`Verified`) |

**One template observation, not a defect claim.** The template says to omit `Resolution` *"while
Open or merely Answered"*, yet both entries carry `Status: Answered` **and** a `Resolution`. The
lifecycle vocabulary does not define whether `Answered` survives a resolution being recorded.
**Raised for the template's owner; nothing here depends on the answer.**

**One template-adjacent finding.** `B-084`'s `Verified-At-Commit` should advance to the commit that
actually carries its applied set once the repair lands — otherwise the field records the commit at
which the entry was **half** applied, which is the same arrival-not-correctness shape `G65` names.

### Approve / reject

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | Lane B's three corrections — location ≠ approval, graph before checks, marker ≠ completion. All three verified against the register, `branch.json` and the marker's own text | Phase 1: preserved as review evidence |
| **Approve** | Step 1's answer: the existing `D-194`/`D-197` authority covers editing `AT-001`; **no second approval is needed** | Phase 1: exercise it on a recorded match, not a fresh ratification |
| **Approve-with-conditions** | The `AT-001` repair packet under existing authority | Lane A: repair to the act's assertion, `D-199` naming the `D-198` application defect and `FN-GATES` §8 as reconciled-unchanged, then the corrected sequence |
| **Reject** | Treating the row now in the tree as covered by its act | The match fails; `15cce88` diverged from what `D-197` authorized, and the register records it applied at `b40dfc3`, which did not contain it |
| **Reject** | My prior blanket approval requirement on location grounds, my checks-before-graph order, and "clear the marker" | All three withdrawn |
| **Reject** | Anchoring the mapping row to `FN-GATES` §11 | It is §8. Both prior drafts, mine and Lane B's, carried the wrong anchor |
| **Defer** | `FN-GATES` §8 `AT-003` mapping row — the root cause the wording dispute hid | Phase 1: its own bounded act. **New edit, not a repair** |
| **Defer** | `F1` Entry 06 ledger annotation · `F2` knowledge-graph `CR-14` staleness · `F3` `FR-14` identifier collision | Phase 1: separate bounded units, existing owners |
| **Defer** | `B-084` / `FB-05` / `G105` terminal closure — `FB-05` closes on **independent** verification, which Lane A cannot perform on its own specification | Phase 1: contract reconciliation, then independent verification |

### Applied — the `D-199` packet, 2026-09-08

**The Chief Editor authorized the packet after the review above was written.** Applied in one
commit, and nothing beyond it:

1. **`docs/source/v1-build-readiness-addendum.md` §8.1** — the `AT-001` row replaced with the
   proposed wording, and the `OPEN` scope note added beneath the §8.1 table. `AT-002`–`AT-006`
   untouched.
2. **`docs/v1/V1-DECISION-REGISTER.md` §5.14e24 — `D-199`** — records both defects separately (an
   application claimed at an act whose commit did not contain it; content that contradicts what was
   authorized), the repair, the `AT-003` root cause, the `D-54` tier table, and six named
   follow-ups with owners.
3. **This entry** — the consolidated answer and this note.

**Held, unapplied, exactly as the review specifies:** the `FN-GATES` §8 `AT-003` mapping row — a
**new edit** needing its own act, after which §8's `AT-001` row drops the refusal clause it still
carries — and findings `F1` (Entry 06's un-annotated ledger row), `F2` (the knowledge graph's stale
`CR-14 Uncovered`) and `F3` (the `FR-14` identifier collision). Each is registered in `D-199`'s
follow-up table with an owner.

**`B-084`'s own `Verified-At-Commit` is deliberately NOT advanced in this packet.** The commit that
would justify advancing it does not exist while the packet is being written, and **`pending` is not
a commit** (`TEMPLATE.md`). It is registered as a `D-199` follow-up instead.

**State at the end of this record:** the three files above are the entire write set. **Nothing is
pushed.** `FB-05` and `G105` stay **open**; `B-084` stays **`Applied`, not `Verified`** — its
independent verification is still owed, and Lane A cannot perform it on its own specification. Lane
state is unchanged — **Lane A `Active`, Lane B `Eligible`, Lane C `Blocked`** — and nothing here
nominates, approves or performs a lane transition.
