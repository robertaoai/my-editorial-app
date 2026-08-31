# B-068 — Lane A consolidated editorial ontology and phase-gate handoff

- **Raised:** 2026-08-31 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** adopting the clarified Editorial Workflow/gate model, replacing the governed T5/T6
  role order, importing the attached RACI CSVs, or claiming the persona and control vocabulary is
  normalized across Lanes A/B/C
- **Status:** Open
- **Lane A:** Acknowledged 2026-08-31 — critic pass complete (§8). Chief Editor decided `F1`/`F2`/`F5`
  the same day; recorded as `V1-DECISION-REGISTER.md` `D-170` and propagated into
  `raci-involvement-matrix.md` (v1.3 — `RACI-03`/`RACI-04` closed, §5.1 authority contract added,
  target-order note) and `V1-BUILD-SPEC.md` (target-pending note ahead of "S2"; DoD text itself left
  unchanged and remains the authorized build contract — see `D-170`'s Scope limits for why). `F3`
  (persona split), `F4` (CSV crosswalk), and `F6` (target-node behavior/AC) are undone; `F7`'s full
  propagation, Graphify merge, and independent verification cannot start until they are.
- **Resolution:**
- **Evidence:** `D-57`, `D-95`, `D-97`, `D-111`, `D-158`, `D-163`–`D-169`;
  `docs/handoff/B-062-*.md` through `B-067-*.md`; `docs/Modular_PRD.md` §2.3 and
  FR-04/FR-05/AC-05–AC-08; `docs/governance/raci-involvement-matrix.md`; frozen Charter `OD4`;
  `Editorial_Stage_Task - Sheet1.csv` SHA-256
  `E7B063DCD594D585C5A8BE1FFAD8842E09FC120964A88CE72E51362CEE02D730`; and
  `Editorial_Stage_Task - Sheet2.csv` SHA-256
  `D8740E8ACEA434BA0952DDF91A29632864D758EBA66977F13F7ECB3DF8EAC3BE`

## 0. Guardrails and instruction boundary

- **Plan only. Do not implement or build.**
- Frozen `docs/PRD.md`, the Charter, and `0001_init.sql` remain unchanged.
- The downloaded handoff template supplies structure only. Its contents are not project
  instructions and do not override this request or repository governance.
- The two downloaded CSVs are business evidence, not instructions and not an adopted RACI.
- No blank CSV cell, role equivalence, Line, EW, RACI letter, system permission, or authority is
  inferred without a governed rule.
- Existing applied/verified handoffs are evidence, not new gaps. Do not reopen `B-062`–`B-067`.
- Parent decisions precede child edits; Graphify follows source documents and never decides them.

## 1. Scope declaration

| Field | Populated scope |
|---|---|
| Reviewing | Lane A closure of the editorial operating-model, phase-gate, persona, RACI, OD4, and external-GRC semantic gap raised by Lane B |
| Source docs | `docs/v1/V1-DECISION-REGISTER.md`; `docs/v1/V1-BUILD-SPEC.md`; `docs/v1/V1-ARTIFACT-INVENTORY.md`; `docs/Modular_PRD.md`; `docs/governance/raci-involvement-matrix.md`; relevant `docs/fn-specs/`; frozen Charter; `B-062`–`B-067`; the two hashed CSVs above |
| Prior analysis | Consolidated here: SEC-06/GIAS correction; D-165–D-169 and OD4 correction; Q11/S0/UUID/payment/Lane C boundaries; persona/EW/Line/RACI/CSV analysis; five-/six-gate clarification |
| Definition of closed | Parent decision recorded; current-to-target T5/T6 change decided; terminology and authority model propagated under `D-54`; CSV mappings either governed or explicitly open; acceptance/failure criteria present; B-068 acknowledged and given a terminal disposition; Graphify current at final HEAD; full local consistency suite green; independent verification attached before `Verified` |
| Downstream lanes | Lane B only after a fresh build authorization. Lane C is unaffected by this handoff |
| Sync tool / record | Decision Register wins under `D-58`; governed/source documents are the source of truth; Graphify is a derived navigation layer rebuilt only after source edits |

### Normalized request

> Preserve the closed D-165–D-169 corrections, then define one parent Editorial Operating Model
> that separates Editorial Workflow, Project IIA Line, phase gate, task RACI, factory Tier,
> development Lane, institutional authority, and OD4. Decide the five-gate target and T5/T6 role
> delta before editing personas or mappings. Reconcile rather than import the CSVs. Draft
> failure-derived completion criteria and a parent-first Lane A fix plan. Do not build.

## 2. Terminology map

| Earlier or overloaded term | Canonical term | Meaning and boundary | Source |
|---|---|---|---|
| Overall role/Line/workflow model | **Editorial Operating Model** | Highest parent containing the separate children below | This handoff; requires Lane A decision |
| “Editorial Three Lines/Lanes” | **Editorial Three Workflow**, `EW1/EW2/EW3` | Project operating workflow that mirrors manual work; never an IIA Line or workflow state | Chief Editor clarification |
| “IIA Three Lanes” | **Project IIA Three Lanes Model**, `Line 1/Line 2/Line 3` | Project control classification corresponding to the official IIA Three Lines Model's first-/second-/third-line functions | `D-166`; 2024 GIAS context |
| “2026 IIA Standards” | **2024 Global Internal Audit Standards**, effective 2025-01-09 | Current core `SEC-06` anchor; no standalone 2026 Standards edition. Later supplementary materials are outside this phase | `B-065`/`D-166` |
| “OD4 Line agents” | **OD4 Proposer / Critics / Judge** | Deferred remedy architecture; no automatic EW, Line, RACI, or gate mapping | Frozen Charter; `D-168`/`D-169` |
| Lane 1/2/3 | **Lane A/B/C** only for development | Development ownership, never a product actor or IIA control position | `D-75` |
| Factory lane | **Tier 1/2/3** plus named fallout/regulatory route | Impact routing and parent work order | Sheet 1 candidate |
| Line column in persona/RACI tables | Separate **EW**, **Line**, **gate**, and **RACI** fields | One column cannot carry operating workflow, control position, sequence, and authority | `Modular_PRD` §2.3 finding |
| Five or six gates | **Five Editorial Judgment Gates plus optional Delivery Node** | Five judgments; six processing nodes only when delivery is counted. Delivery is never Gate 6 | Current pipeline plus Chief Editor clarification |
| Virtual agent | **Editorial Virtual Node Agent** | Logical gate workcell; executor identity and `executor_type` are recorded separately | This handoff target |
| OD4 virtual agent | **OD4 Virtual Agent** | Proposer/Critic/Judge reasoning actor, separate from an Editorial Virtual Node Agent | `D-168` |
| Chief Journalist / Desk Chief | **Chief Editorial Desk** | Tier 2/3 accountable workcell; not a seniority grade and not Desk Editor or Senior Journalist | Chief Editor clarification |
| Editor-in-Chief | **Chief Editor** | Same natural person/role alias in the CSVs | Chief Editor clarification |
| Chief Editor informed but can overrule | **Task `I` plus separate internal override `O`** | `I` alone carries no authority; `O` is exceptional, reasoned, append-only, and internal only | Proposed authority model; decision required |
| Government Institution `A` | **External Authority `EA`** | External GRC acceptance/mandate; an internal Chief Editor cannot override it | CSV clarification |

## 3. Drift table

| Document or contract | Status | Evidence / reason |
|---|---|---|
| `D-165`–`D-169`, `B-062`–`B-067` | **IN SYNC — preserve** | SEC-01 successor-node rule, GIAS-2024 anchor, direct `D-57` governance of FR-11's v1 absence, OD4 separation, and residual propagation are applied; do not reopen |
| Q11 / S0 boundary | **IN SYNC — unaffected** | Q11 shape/name are closed (`D-97`, `D-111`); S0 is complete under `D-95` |
| Existing table identities | **IN SYNC — unaffected** | Every current table already has a generated UUID primary key. A future-table rule may be recorded later; no no-op migration is justified |
| POC payment | **IN SYNC — unaffected** | Payment remains manual/outside the application. There is no payment feature to disable or field to add in this phase |
| Lane C items | **IN SYNC — unaffected** | `fetch-depth: 0` and the exact middle-dot status context remain separate Phase 3/Lane C work |
| `Modular_PRD.md` §2.3 personas | **DRIFTED** | Current actors, future Line 3, audiences, phase gates, and institutional actors are mixed; EW, Line, RACI, gate, and OD4 boundaries are not explicit |
| Governed T5/T6 role contract | **DRIFTED against clarified target; still current until superseded** | Current: T5 human Chief Editor, T6 Chief Journalist agent/final approval. Target: Chief Editorial Desk before a human Chief Editor final gate |
| Attached Sheet 1/Sheet 2 mapping | **UNKNOWN / not adopted** | Sheet 2 lacks stable parent keys; multi-`R`, missing-`R`, blank-cell, and local-versus-parent `A` rules require normalization |
| Graphify coverage for B-068 | **DRIFTED by design while open/untracked** | Graphify is current to committed HEAD, but this untracked handoff is absent. Source application and graph rebuild belong at final Lane A propagation |

Any `DRIFTED` or `UNKNOWN` row above blocks this handoff's verification, but does not reopen the
preserved D-165–D-169 baseline.

## 4. Deduplicated gap list

The IDs below are local to B-068 and are not new Decision Register `G` numbers.

| Gap ID | Description | Lane origin | Evidence | Parent dependency | Severity |
|---|---|---|---|---|---|
| `B068-G1` | No governed parent ontology separates EW, IIA Line, gate, RACI, Tier, development Lane, authority, and OD4 | B, consolidating A/B/C business concerns | **VERIFIED** — §2.3 and RACI reuse overloaded labels | — | Blocks handoff |
| `B068-G2` | Gate count and target order are not governed: five judgments/six nodes and Chief Editorial Desk → Chief Editor conflict with current T5/T6 roles | Business clarification through B | **VERIFIED** — current FR/AC/RACI versus clarified target | `B068-G1` | Blocks handoff |
| `B068-G3` | Persona, logical gate workcell, executor identity/type, audience, future Line 3, and OD4 actor remain conflated | B | **VERIFIED** — §2.3 and current actor wording | `B068-G1`, `B068-G2` | Blocks handoff |
| `B068-G4` | Sheet 1 parent routes and Sheet 2 child stations cannot be imported deterministically | Business/CSV through B | **VERIFIED** — missing parent key, multi-`R`, missing `R`, blank semantics | `B068-G1` | Blocks CSV/RACI adoption |
| `B068-G5` | Internal task `A`, Chief Editor `O`, and external GRC `EA` authority are not one decided permission model | Business clarification through B | **VERIFIED** — current “Chief Editor always A” differs from clarified `I + O` model | `B068-G1`, `B068-G4` | Blocks authority sign-off |
| `B068-G6` | Gate evidence, negative tests, return paths, and legal/allegation qualifiers are not specified for the target sequence | B | **VERIFIED** — target roles are named but no complete behavior contract exists | `B068-G2`–`B068-G5` | Blocks future build authorization |
| `B068-G7` | Propagation, Graphify coverage, acknowledgement, and independent verification remain outstanding | B reviewing A | **VERIFIED** — B-068 is open and absent from graph coverage | `B068-G1`–`B068-G6` | Blocks closure |

### Failure oracles — what is guaranteed to fail

| Gap | Deterministic failure if left open |
|---|---|
| `B068-G1` | One label silently changes meaning between business workflow, assurance, product behavior, and development ownership |
| `B068-G2` | A persona-only T5/T6 swap leaves the success scenario, FRs, ACs, transition guards, configuration, and tests contradictory |
| `B068-G3` | An autonomous agent can appear to satisfy the human Chief Editor gate, or OD4 is silently authorized by an alias |
| `B068-G4` | CSV import creates duplicate/missing accountability, invented blank meanings, and child work with no executable owner |
| `B068-G5` | `I` secretly carries authority, Chief Editor overwrites external GRC, or an override erases rather than appends history |
| `B068-G6` | Criminal, money-laundering, corruption, or defamation conclusions can be emitted without distinguishing allegation, evidence, inference, and external finding; delivery can alter editorial judgment |
| `B068-G7` | Documents can read consistently locally while the graph and handoff status still advertise an older or incomplete model |

## 5. Ordered fix list — parent before children

| Fix ID | Action — plan only | Owner | Depends on | Verification method |
|---|---|---|---|---|
| `B068-F1` | Add one correcting Decision Register entry adopting the Editorial Operating Model and the separate axes in §2. Preserve `D-57`, `D-95`, `D-97`, `D-111`, and `D-165`–`D-169`; explicitly mark Q11, S0, current UUIDs, payment, and Lane C unaffected | Lane A records; Chief Editor decides | — | Register contains each axis, forbidden inference, preserved baseline, and affected/unaffected tiers under `D-54` |
| `B068-F2` | Decide the target gate contract: five judgment gates, optional Delivery Node, and whether stable T identifiers remain while T5 becomes Chief Editorial Desk review and T6 becomes the human Chief Editor final decision. Because this inverts the T5→T6 order `raci-involvement-matrix.md` §2.1's successor-node-review proof depends on, update that section's proof in the same pass (`B068-C3`) | Lane A records; Chief Editor decides | `B068-F1` | One authoritative current-to-target table names gate count, node count, role, executor type, Line, state transition, and success-scenario impact; `raci-involvement-matrix.md` §2.1/§3 no longer assert the superseded T5→T6 order |
| `B068-F3` | Replace §2.3's mixed persona table with three small sets: current system/gate actors; external stakeholders/audiences; deferred capabilities/OD4. Define Editorial Virtual Node Agent separately from executor identity and OD4 Virtual Agent | Lane A | `B068-F2` | No current persona row silently creates Line 3 or OD4; an agent-attempted Chief Editor gate is explicitly refused |
| `B068-F4` | Reconcile the CSVs into a factory crosswalk: Sheet 1 route `lane_id`; Sheet 2 `parent_lane_id` and atomic `operation_id`; one `R` and one effective `A` per atomic task or an explicit exception; local `A` else parent `A`; no silent inheritance for `R/C/I`; separate EW and Line assignments | Lane A | `B068-F1` | Every child resolves to one parent and effective authority without row-name guessing; unresolved blanks/aliases remain marked `UNVERIFIED` |
| `B068-F5` | Decide the authority contract: task `A`; exceptional internal Chief Editor `O`; external GRC `EA`; Chief Journalist `R` for legal/defamation response and Chief Editor `R` for regulatory/licensing response; no internal override of external authority. Resolve `raci-involvement-matrix.md` §5's `RACI-03` (authority gradient/return rate) and `RACI-04` ("one role per task" vs Charter's "distinct agent") in the same pass rather than as a separate decision (`B068-C2`) | Lane A records; Chief Editor decides | `B068-F4` | Permission matrix rejects `I`-only decisions and `O` against `EA`; original `R`, `A`, and `O` records remain linked and append-only; `RACI-03`/`RACI-04` carry a closing disposition, not a second open item |
| `B068-F6` | Draft behavior and acceptance criteria for the target nodes below. Keep implementation deferred | Lane A | `B068-F2`–`B068-F5` | Each node has entry evidence, checklist/version, allowed decision, mandatory reason/evidence anchors, exit, return target, executor rule, and negative test |
| `B068-F7` | Propagate the decided facts in one pass through Decision Register, Build Spec, Artifact Inventory, Product Requirements, RACI, affected Fn_Specs/SPECS/config/logs, and handoff status; then rebuild/merge Graphify and run the full suite. Request independent review before `Verified` | Lane A; independent reviewer verifies | `B068-F1`–`B068-F6` | Final HEAD equals Graphify `lastAnalyzedHead`; graph coverage includes B-068; full local suite green; response records commit evidence; independent reviewer confirms failure oracles |

### B068-F6 target gate contract

| Order | Logical node | Judgment scope | Required completion shape |
|---:|---|---|---|
| `EG1` | Reporter Newsworthiness | Daily/trending relevance versus fade | As-at trend evidence, audience relevance, decay horizon, decision and reason |
| `EG2` | Investigator Newsworthiness | Investigative value, including possible criminal conduct | Reliability, corroboration gaps, harm/escalation flags; allegation never recorded as guilt |
| `EG3` | Journalist Newsworthiness | Journalistic value and peer challenge | Draft, sources, adaptation/checklist, peer disposition and unresolved challenge |
| `EG4` | Chief Editorial Desk — Chief Journalist / Desk Chief | Public-interest and integrity/control significance: manipulation, money laundering, corruption | Evidence chain, counter-view, discrete risk/control indicators and recommendation. IIA is a control lens, not a news category |
| `EG5` | Chief Editor Newsworthiness | Final legal, reputational and remedial judgment: defamation, legal exposure, retraction/amendment | Human decision, prior-gate evidence, authority, reason, and final approve/return/hold/reject |
| Delivery Node | System executor | Execute approved WordPress/manual-ready outcome | Cannot add or change newsworthiness; records target outcome/failure only |

One article follows the required five-gate sequence inside its selected route. “All Editorial
Workflow reviews the gates” does **not** create three EW passes at every gate. Each action records
its applicable EW and Project IIA Line separately; neither value is inferred from the other. An
amendment or retraction notice remains editorial content and retains the same gate/audit path unless
a governed external-order exception bypasses deliberation only.

## 6. Cross-lane consolidation notes

| Perspective | Consolidated disposition |
|---|---|
| Lane A | Owns the parent decision, governed/source/product/functional propagation, RACI crosswalk, Graphify merge, and B-068 response |
| Lane B | Has specified the defect and plan only. No code, schema, migration, configuration, UI, test, CSV, or graph edit is authorized by this handoff |
| Lane C | Unaffected. Its `fetch-depth: 0` and middle-dot status-context items remain separate Phase 3 work |
| Agreement | Preserve D-165–D-169; use 2024 GIAS for SEC-06; OD4 is not Line 3; Q11 and S0 remain closed; payment remains outside; current rows already have UUID identity |
| Material disagreement | The governed system currently uses T5 Chief Editor → T6 Chief Journalist approval; the clarified business target uses Chief Editorial Desk → Chief Editor final decision. Do not average or silently merge them—record a superseding decision |
| CSV boundary | Sheet 1/2 are useful factory evidence, but not authoritative until parent keys, granularity, authority inheritance, and blanks are governed |

## 7. Approve / reject summary

| Decision | Tier | Follow-up phase |
|---|---|---|
| **Approve** — preserve D-165–D-169 and the closed SEC-06/OD4/Q11 boundaries | Decision Register / tracking | Phase 1 preservation; do not reopen |
| **Approve** — parent Editorial Operating Model and separate semantic axes | Decision Register / Product Requirements / glossary | Phase 1 through `B068-F1` |
| **Approve-with-conditions** — five judgment gates plus optional Delivery Node | Product Requirements / RACI / Fn_Specs | Phase 1 through `B068-F2`/`F6`; delivery has no editorial authority |
| **Approve-with-conditions** — Chief Editorial Desk precedes a human Chief Editor final gate | Decision Register / FR/AC/RACI/transition contract | Phase 1 superseding decision and complete propagation |
| **Approve-with-conditions** — reconcile Sheet 1 parent routes and Sheet 2 child stations | RACI source model | Phase 1 through `B068-F4`; no direct import |
| **Approve-with-conditions** — task `A`, internal `O`, and external `EA` | Authority/permission model | Phase 1 through `B068-F5`; external GRC cannot be overridden |
| **Reject** — deriving EW, Line, gate, RACI, Tier, OD4 role, or executor identity from another axis | All tiers | Phase 1 negative semantic rule |
| **Reject verification** — B-068 is not closed while unacknowledged, unpropagated, or absent from Graphify | Handoff / Graphify / checks | Phase 1 through `B068-F7` |
| **Defer** — any schema, code, migration, UI, configuration, or test build | Lane B implementation tiers | Fresh build authorization after documentary closure |

## 8. Lane A critic pass (`D-93` — separate turn from B-068's authorship)

Read in full: `docs/v1/V1-DECISION-REGISTER.md` `D-163`–`D-169` entries, `docs/Modular_PRD.md` §2.3,
`docs/governance/raci-involvement-matrix.md` (full), and both attached CSVs' SHA-256 digests.
Findings, recorded per `D-93` whether or not they change the outcome:

| # | Finding | Disposition |
|---|---|---|
| `B068-C1` | Evidence citations verified: `D-163`–`D-169` exist as described in the register; both CSV SHA-256 hashes match the attached files exactly | No defect — confirms §0 evidence, not restated as new work |
| `B068-C2` | `B068-G5`/`F5` (task `A`, internal `O`, external `EA`) is not reconciled against `raci-involvement-matrix.md` §5's `RACI-03`/`RACI-04`, which already flag the same R/A boundary at T5 as an open, Chief-Editor-owned question. Left unreconciled, F5 would create a second, competing authority decision for the same boundary | **Added dependency**: `F5` must resolve `RACI-03`/`RACI-04` in the same pass, not separately |
| `B068-C3` | `F2`'s target gate order (Chief Editorial Desk reviews before the human Chief Editor's final gate) inverts the T5→T6 order that `raci-involvement-matrix.md` §2.1's successor-node-review proof depends on (T6 reviews T5). `F2`'s fix list does not list updating that proof as a dependency | **Added dependency**: `F2`/`F7` must update `raci-involvement-matrix.md` §2.1/§3 in the same propagation pass, or the four-eyes proof it documents becomes false |
| `B068-C4` | "EW" (Editorial Three Workflow) does not appear anywhere in `Modular_PRD.md` or the RACI matrix today — both use only a `Line` column. §2's Drift table risks reading as "EW already exists and is conflated with Line"; it is more accurate to say EW is a **new axis being introduced**, not an existing one being un-conflated | Wording only — `F1`/`F3` should state EW is newly introduced, not corrected |
| `B068-C5` | `bun run check` independently reproduces Lane B's claimed 15/17 result exactly: `graph-coverage` and `handoff-response` fail solely because B-068 was unacknowledged and ungraphed. No other check regressed | Confirms §0/§1 closure definition; no new gap |

Zero critic findings would itself be reported as a finding (`D-93`); four were found and are folded
into `F2` and `F5` above as added dependencies, not new fix IDs — `F2`/`F5` already own that
propagation surface.
