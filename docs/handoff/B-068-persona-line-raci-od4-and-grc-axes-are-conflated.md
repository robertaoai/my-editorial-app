# B-068 — Lane A consolidated editorial ontology and phase-gate handoff

- **Raised:** 2026-08-31 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** adopting the clarified Editorial Workflow/gate model, replacing the governed T5/T6
  role order, importing the attached RACI CSVs, or claiming the persona and control vocabulary is
  normalized across Lanes A/B/C
- **Status:** Open
- **Lane A:** Acknowledged 2026-08-31 — critic pass complete (§8). `F1`/`F2`/`F5` decided (`D-170`);
  `D-171` S2 hold; `D-172` corrected two `D-171` control defects; `D-173` applied `F3`/`F4` masters;
  `D-174` corrected four `D-173` completion defects (`raci_scope`, `EXT-GRC`, role-catalog count,
  verification framing). **§16's `B068-G2` guide identified a deeper category error in `D-170`'s `F2`
  premise, confirmed directly by the Chief Editor this session:** Chief Editorial Desk and Chief
  Journalist are two distinct, independently `EG4`-eligible roles, not aliases — `T5`'s required
  reviewer(s) are route-dependent (one role on production routes, both in parallel on fallout/GRC
  routes), while `T6` remains the human Chief Editor's final decision exactly as `D-170` already
  targeted. `V1-DECISION-REGISTER.md` `D-175` records this and re-derives `D-171`/`D-172` against it:
  `raci-involvement-matrix.md` (v1.7) adds `ROLE-CHIEF-JOURNALIST` as its own role and the cardinality
  table; `FN-GATES-01-05.md` §11 and `V1-BUILD-SPEC.md`'s S2 hold note are corrected to match. Also
  confirmed directly: `ROUTE-PROD-1`'s `A` stays `ROLE-DESK-EDITOR` (`B068-R22` closed, no crosswalk
  edit needed), and "Lane D" meant `ENV-EXT` — an external execution environment, never a fourth
  development lane; `D-75`/`D-156` are unchanged (`B068-R33` closed). **Confirmed still open, not
  decided this session:** `F4`'s 8×7 route-applicability matrix (§14.4) remains an unapproved draft —
  the crosswalk's join stays exactly as `D-174` left it. `F6`'s full behavior/AC draft, `F7`'s
  propagation/Graphify-sync/independent-verification, and any fresh build authorization remain
  unstarted, real follow-on work — not attempted in this pass.
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
| `Modular_PRD.md` §2.3 personas | **IN SYNC for `F3`; current/target split preserved** | `D-173` added §2.3.1's persona/role/node split while retaining §2.3 as the current-build record |
| Governed T5/T6 role contract | **HELD, not build-authorized** | `D-171` holds both orders; `D-172` corrected the target Line-separation and blind-review drafts. Remaining FR/AC propagation still belongs to `F6`/`F7` |
| Attached Sheet 1/Sheet 2 mapping | **PARTIALLY APPLIED** | `D-173` created the route and operation masters. The route-operation join and unresolved operation dispositions remain open; see §13 for structural defects found in the applied masters |
| Graphify coverage for B-068 | **DRIFTED for currency after `D-174` graph-fragment commit** | `.graphify/branch.json` records `lastAnalyzedHead = 3e10767`, while HEAD is `86f7cc7`; its `stale: false` flag is contradicted by the hashes and is not evidence of currency. Lane A must synchronize after the next source decision and again at final `F7` |

Any `DRIFTED` or `UNKNOWN` row above blocks this handoff's verification, but does not reopen the
preserved D-165–D-169 baseline.

## 4. Deduplicated gap list

The IDs below are local to B-068 and are not new Decision Register `G` numbers. This table records
the original pre-`D-170` baseline; use §13 for the current post-`D-173` state rather than reopening
items already settled by `D-172`/`D-173`.

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

## 9. Historical Lane B completion review — superseded by `D-172`/`D-173`

The state statements in §§9–12 are preserved as the critic record that produced `D-171`–`D-173`.
They are not current status. Current status and the remaining repair are in §13.

### 9.1 Normalized request

> Verify Lane A's `D-170` application from files, preserve decided `F1`/`F2`/`F5`, and refine only
> open `F3`/`F4`/`F6`/`F7`. Separate personas from logical nodes and executors; reconcile the CSVs
> without importing guesses; derive target behavior, negative tests, and success criteria from
> deterministic failures; prevent an obsolete-order build; then define the exact propagation and
> Graphify closure sequence. Plan only.

No clarification is needed to produce this review. The desired target order is decided. The open
questions below concern the target's Line/executor/behavior contract and the CSV's missing
relationships; they must be answered by the named fix rather than guessed in this handoff.

### 9.2 Verified current state

| Item | State | File evidence |
|---|---|---|
| `F1` — eight-axis parent ontology | **Decided, preserve** | `D-170` introduces EW and prohibits derivation across axes |
| `F2` — five judgments plus Delivery Node; target T5/T6 roles | **Decided target, not build-authorized** | `D-170`; target-pending notes in Build Spec and RACI |
| `F5` — `A`/`O`/`EA` authority | **Decided, preserve** | RACI v1.3 §5.1; `RACI-03`/`RACI-04` closed |
| `F3` — persona/node/executor split | **Open** | `Modular_PRD.md` §2.3 still describes the current T5 Chief Editor/T6 Chief Journalist arrangement and places Line 3 assurance beside personas |
| `F4` — factory crosswalk | **Open** | No governed Sheet 1 route ↔ Sheet 2 operation relationship exists |
| `F6` — target behavior and AC | **Open** | `Modular_PRD`, `FN-GATES`, RACI §2.1/§3 and Build Spec still intentionally specify the current order |
| `F7` — propagation and verification | **Open** | Full local suite passes 16/17; only `docs-drift` fails because Graphify analyzed `35a2d0c`, not HEAD `0496895` |

### 9.3 Additional findings — folded into the existing four fixes

These are refinements, not duplicate fix IDs.

| Review ID | Open fix | Gap found | Guaranteed failure |
|---|---|---|---|
| `B068-R1` | `F3` | An Editorial Virtual Node Agent is a logical workcell, not a persona or executor identity | Putting it in the persona table recreates the category error `F3` is meant to remove; an agent label can impersonate a human gate |
| `B068-R2` | `F3` | Current build actors and decided-target actors are different populations until `F7` supplies fresh authorization | Replacing “current” rows with target rows now makes documentation claim behavior the authorized build contract still rejects |
| `B068-R3` | `F4` | A single `parent_lane_id` is insufficient when an operation such as final sign-off can apply to several factory routes | The same operation is duplicated under several parents or arbitrarily attached to one, and the copies drift |
| `B068-R4` | `F4` | Parent-route `A` and child-operation `A` are different scopes; a local `A` must not erase route accountability | Inheritance produces two competing `A` values or silently removes the parent authority |
| `B068-R5` | `F6` | `D-170` decides target roles but not each target transition's Project IIA Line or allowed executor type | `required_line`, `line_separation_status`, four-eyes, and override tests cannot be derived safely from job titles |
| `B068-R6` | `F6` | The role inversion moves the human-only canary, may move blind disposition, and changes what `T6→T5` returns prove | Keeping current ACs makes a valid target T5 agent fail, permits an invalid T6 agent, and reports the old authority-gradient meaning under a new actor direction |
| `B068-R7` | `F6`/`F7` | `PIPELINE_GATE_COUNT = 6` counts T1–T6 transitions, while `D-170` now governs five judgment gates plus Delivery | A test or UI can truthfully display six “gates” while the business contract truthfully says five; both pass their own source |
| `B068-R8` | `F7` | D-170 leaves current S2 work authorized even though its T5/T6 order is already superseded as the decided target | Lane B can legitimately build the obsolete order before `F6`/`F7`, creating avoidable migration, UI, and test rework |
| `B068-R9` | `F7` | Curated graph coverage was added, but graph currency and semantic ingestion are incomplete | Queries can return B-068/D-170 while omitting the commit that added their curated source; coverage passes while `docs-drift` correctly fails |

### 9.4 Revised parent-first completion plan

#### Parent 1 — complete `F3`: separate people, executors, nodes, and lifecycle state

Replace the proposed “three persona tables” with four small catalogs so the target is not presented
as current behavior:

| Catalog | Contains | Required status field |
|---|---|---|
| **System users/personas** | Chief Editor as the sole current human user; readers as audiences, not users | `current` / `audience` |
| **Executor roles** | Reporter, Investigator, Journalist, Chief Editorial Desk, Chief Editor, System; allowed `executor_type` recorded separately | `current` / `decided_target` |
| **Editorial gate nodes** | `EG1`–`EG5` and Delivery Node; inputs, outputs, and permitted executor role references | `decided_target`, never “persona” |
| **External/deferred capabilities** | GRC `EA`, Line 3 assurance, and OD4 Proposer/Critics/Judge | `external` / `not_built_v1` / `deferred` |

`F3` succeeds only when:

1. the current T5/T6 actors remain visibly current until fresh authorization;
2. the target actors are marked `decided_target`, not current or built;
3. every node references an allowed executor role and type but no hard-coded natural/service
   identity;
4. the Chief Editor target node requires a human executor; agent assistance is metadata only;
5. Delivery is a system node with no editorial authority; and
6. Line 3 and OD4 cannot appear as current users or satisfy an editorial gate.

#### Parent 2 — complete `F4`: normalize factory routes before mapping operations

`F4` now depends on `F3`'s canonical role identifiers. Use three normalized sets, not a copied wide
CSV table:

| Set | Minimum fields |
|---|---|
| Route master — Sheet 1 | `route_id`, canonical name, Tier/fallout/regulatory class, route-level `R/A/C/I`, external `EA`, provenance |
| Operation master — Sheet 2 | `operation_id`, canonical name, `atomic` / `milestone` / `control_point`, local RACI, provenance |
| Route-operation crosswalk | `route_id`, `operation_id`, applicability/status, route `A`, local operation `A`, effective operation decision path, evidence status |

Do not force one parent where the operation is reusable. A route-operation join preserves one
operation definition across several routes. Local operation `A` governs that operation; route `A`
continues to govern the route. A blank child `A` inherits the route `A` only after a route-operation
row exists. `R`, `C`, `I`, and blank external-GRC cells never inherit silently.

The following source questions remain `UNVERIFIED` until the crosswalk answers them:

| CSV issue | Rows affected | Required disposition |
|---|---|---|
| Multiple `R`, not labelled milestone | Daily Story Pitch; Deep Fact-Checking; Drafting Standard News Copy | Mark milestone and decompose, or correct to one atomic `R` |
| Multiple `R`, labelled milestone | Complex Investigative Series; Legal/Ethical/Risk Review | Decompose into atomic operations before system requirements use them |
| No local `A` | Drafting Standard News Copy | Link route and inherit route `A`, or supply a local operation `A` |
| No `R` | Final Publication Sign-Off | Name the evidence preparer/executor or authorize a documented `R = A` exception |
| Ambiguous or reusable parent | Deep Fact-Checking; Drafting; First-Line Copy Editing; Legal/Ethical Review; Final Sign-Off; Crisis Management | Link every applicable route explicitly; do not choose from the title |
| Blank GRC cells | Sheet 2 except Crisis Management | Define blank as `not_applicable`, `unknown`, or omitted; do not backfill `I` |

`F4` succeeds when every operation has at least one explicit route relationship, every atomic
operation has one `R` and one effective decision path, both authority scopes remain visible, and
all unresolved source meanings are recorded `UNVERIFIED` rather than guessed.

#### Parent 3 — complete `F6`: re-derive behavior; do not swap labels

Map the decided five judgments to stable transitions before rewriting any requirement:

| Judgment | Stable transition(s) | Target role already decided | Still must be decided in `F6` |
|---|---|---|---|
| `EG1` | T1 | Reporter | executor type, Line, entry/exit evidence |
| `EG2` | T2 + T3 | Investigator | atomic validation/investigation evidence and one gate result |
| `EG3` | T4 | Journalist | peer-review evidence and return result |
| `EG4` | T5 | Chief Editorial Desk | Project IIA Line, executor type, blind/reveal behavior, return conditions |
| `EG5` | T6 | Chief Editor | Project IIA Line, human-only rule, final decision/override semantics |
| Delivery | T7 and target-specific publication actions | System | immutable editorial input and execution-only output |

F6 must then draft one coherent replacement contract across FR-04/FR-05, AC-05–AC-08, NFR-03,
the RACI proof, gate Fn_Spec, and S2 plan:

1. **Line/executor matrix first.** Record `required_line`, allowed `executor_type`, predecessor
   identity rule, and whether each transition's `line_separation_status` is `satisfied`,
   `not_applicable`, or `override_not_four_eyes`. Never infer a Line from “Chief.”
2. **Move the human-only canary deliberately.** If T6 is the human final gate, an agent-attempted
   T6 must be refused. Retire—not silently retain—AC-06's current agent-at-T5 refusal.
3. **Define blind review as an event sequence.** Decide whether the target human records a sealed
   preliminary disposition before the T5 recommendation is revealed, then confirms or returns after
   reveal. A “blind” label without stored ordering cannot prove independence from anchoring.
4. **Re-derive return metrics.** Preserve a T6→T5 return event, but rename/redefine its metric for
   the target actor direction. It no longer proves an agent will challenge an accountable human.
5. **Re-derive overrides.** A target Chief Editor executing authorized T6 is not an override. Define
   which unauthorized role/Line substitutions create an override and which must be refused outright.
6. **Separate counts.** Replace the ambiguous planning name with
   `EDITORIAL_JUDGMENT_GATE_COUNT = 5` and `FORWARD_EDITORIAL_TRANSITION_COUNT = 6` as future contract
   candidates; preserve current code until a build is separately authorized.
7. **Finish gate evidence.** Each gate needs entry evidence, checklist/rule version, allowed
   disposition, mandatory reason and evidence anchors, exit, return target, and negative test.
   Criminality, money laundering, corruption, and defamation must distinguish allegation, evidence,
   inference, project finding, and external determination.
8. **Protect delivery.** Delivery consumes the immutable final editorial disposition and writes
   execution outcomes only. Any editorial change opens a governed return/new workflow.

F6 is complete only when deliberately reintroducing the current T5-human/T6-agent assignment,
allowing an agent at target T6, revealing the T5 recommendation before the sealed human
disposition, using one identity at adjacent review nodes, or calling delivery a sixth judgment gate
causes a named acceptance test to fail for the intended reason.

#### Parent 4 — complete `F7`: hold obsolete work, propagate, sync, verify

1. **Place a target-sensitive S2 hold first.** Until F6 lands and a fresh authorization selects the
   target contract, no T5/T6 route, RPC, UI, migration, or test should be started against either
   order. Name any genuinely order-independent S2 work explicitly; silence is not authorization.
2. **Propagate the target fact, not restated counts.** Minimum affected set:
   Decision Register; Build Spec; Artifact Inventory if F4/F6 creates an artifact; `Modular_PRD`
   §2.3, FR-04/FR-05, AC-05–AC-08, NFR-03, M2/S2 and traceability; RACI §2.1/§3/§5; `FN-GATES`;
   `CONFIG_LOG`/`DECISION_LOG`; Requirements Traceability Map; affected Addendum/Blueprint/Business
   Case current-value sections; Encyclopedia flag; and B-068 tracking. Frozen Charter stays unchanged.
3. **Record artifacts once.** If F4 becomes a new governed crosswalk file or F6 creates a new
   versioned spec, apply `D-54` to Register, Build Spec, and Artifact Inventory in the same pass.
4. **Issue a fresh build authorization or retain an explicit hold.** Do not leave the current order
   authorized beside a target specification without naming which one Lane B must implement.
5. **Synchronize Graphify after the final docs commit.** Run the hook rebuild, re-merge every curated
   fragment including `frag107`, complete pending descriptions/labels, confirm
   `lastAnalyzedHead = HEAD`, run the commit-safe portable check, and do not commit local scratch,
   branch/worktree, cache, or transcript paths.
6. **Verify from failure.** Run the full suite, semantic queries for all eight axes and both order
   states, and an independent review that attempts the F3/F4/F6 failures above. Only then give B-068
   a terminal Resolution and verification commit.

### 9.5 Failure-derived closure criteria

| Deliberate failure | Closure oracle |
|---|---|
| Target node is placed in the persona table as an autonomous actor | Semantic review rejects it; node catalog requires a separate executor reference |
| Target role is displayed as current before authorization | Lifecycle-status check rejects `current` without the fresh authorization ID |
| Reusable Sheet 2 operation is copied under multiple routes | Crosswalk uniqueness test requires one operation definition plus route-operation joins |
| Local `A` erases route `A` | Authority-path test requires both scoped authorities to remain traceable |
| Line is inferred from Chief Editor/Chief Editorial Desk title | Contract validation rejects a transition with no explicit `required_line` |
| Agent executes target T6 | Human-only target canary refuses the transition and records no state change |
| Same identity executes adjacent review nodes | Successor-identity control refuses the second transition |
| Recommendation is visible before blind disposition | Ordering proof fails because no sealed preliminary event precedes reveal |
| Current T6→T5 metric meaning is reused after role inversion | Metric-contract test rejects the old label/denominator against target actor roles |
| System delivery changes an editorial decision | Delivery authorization refuses the mutation and records execution failure only |
| `PIPELINE_GATE_COUNT = 6` is presented as six judgment gates | Terminology/config check requires separate judgment-gate and transition counts |
| Lane B begins target-sensitive S2 before F6/F7 | Work-order/lane review finds no valid fresh authorization and blocks the item |
| Graph contains B-068 but analyzed HEAD differs | `docs-drift` fails; coverage alone cannot close F7 |

## 10. Current approve / reject summary

| Decision | Tier | Follow-up phase |
|---|---|---|
| **Approve** — preserve `D-170` decisions for F1/F2/F5 | Decision Register / RACI | Phase 1 preservation; no reopening |
| **Approve-with-conditions** — `F3` persona/executor/node repair | Product Requirements | Phase 1; use separate catalogs and lifecycle states |
| **Approve-with-conditions** — `F4` factory crosswalk | RACI/governance source | Phase 1; route-operation joins, scoped authority, no guessed blanks |
| **Approve-with-conditions** — `F6` target behavior and AC | Product Requirements / Fn_Specs / Build Spec | Phase 1; decide Line/executor matrix and re-derive canary, blind review, returns, overrides, and counts |
| **Reject** — starting target-sensitive S2 against the current or target order before F6/F7 | Build authorization | Immediate hold until a fresh authorization selects one contract |
| **Reject verification** — F7 is incomplete | Handoff / Graphify / checks | `docs-drift` remains red; full propagation and independent review outstanding |
| **Defer** — implementation | Lane B code/schema/UI/tests | No build in this pass |

## 11. Historical Lane B review of `D-171` — corrected/applied in part by `D-172`/`D-173`

### 11.1 Normalized request and current boundary

> Verify D-171 from files; preserve its explicit S2 hold and sound target decisions; correct any
> semantic defect before it propagates; then draft F3's persona/executor/node catalogs so F4 can
> reconcile the two CSVs without aliases, authority-scope collisions, guessed parentage, or copied
> operations. Use those outputs to finish F6's evidence/delivery rules. Start F7 only after F3/F4/F6
> are complete. Plan only; no build.

`D-171` correctly closes `B068-R8`: neither current nor target T5/T6 order is build-authorized.
It also drafts the target roles, Lines, executor types, canary location, return direction, override
concept, and two count names. F3 and F4 remain entirely open. F7 cannot start.

### 11.2 New findings — no duplicate fix IDs

| Review ID | Existing owner | Finding | Why it is guaranteed to fail |
|---|---|---|---|
| `B068-R10` | remaining `F6` | D-171 marks T1 through T5 `line_separation_status = satisfied`, including first-node and same-Line transitions | Q11/FR-05 defines `satisfied` only for a Line boundary. T1 and target T2–T5 are Line 1 and must be `not_applicable`; distinct role is not Line separation, and Phase 0 may reuse one agent instance across roles |
| `B068-R11` | remaining `F6` | D-171's blind pair seals the **EG4 desk recommendation**, then reveals it to EG5 before the human decides | This proves only that the recommendation was stored first. It does not prove the human formed a preliminary judgment before seeing it, so anchoring remains indistinguishable from agreement |
| `B068-R12` | `F3` | The proposed executor catalog omits `Senior Journalist` and `Desk Editor`, both present in the CSV source and explicitly distinct from Chief Editorial Desk | F4 cannot map all source columns and will either drop roles or recreate the forbidden Chief Journalist/Senior/Desk equivalence |
| `B068-R13` | `F3`/`F4` | D-170's “A is Acting Chief Editor” applies to the system transition RACI, while Sheet 1/2 assign different factory route/operation `A` roles | A single undifferentiated `A` field makes D-170 and the CSVs contradict. One scope will silently overwrite the other |
| `B068-R14` | `F4` | F4's earlier single `parent_lane_id` rule still cannot represent reusable operations such as final sign-off across several routes | Duplicated operation definitions drift, or one arbitrary route becomes the false universal parent |
| `B068-R15` | remaining `F6` | D-171 says all remaining gate evidence needs F4, but core gate evidence and route-specific overlays are different layers | Waiting on factory routing to define universal gate entry/exit rules hides which evidence is invariant and encourages route names to become behavior |
| `B068-R16` | `F7` | Curated D-171 coverage exists, but Graphify analyzed `3474019` while HEAD is `f922290`; semantic ingestion is pending | Graph queries can contain the D-171 node yet still fail currency. Coverage is not synchronization |

### 11.3 Correct D-171's two control defects before propagation

The D-171 target matrix should be corrected in the next Lane A decision/application pass, not copied
into F3 or F6:

| Transition | Target Line movement | Correct `line_separation_status` |
|---|---|---|
| T1 / EG1 | Entry; no predecessor | `not_applicable` |
| T2 / EG2 validation | Line 1 → Line 1 | `not_applicable` |
| T3 / EG2 investigation | Line 1 → Line 1 | `not_applicable` |
| T4 / EG3 | Line 1 → Line 1 | `not_applicable` |
| T5 / EG4 | Line 1 → Line 1 | `not_applicable` |
| T6 / EG5 | Line 1 → Line 2 | `satisfied`, only if predecessor/executor controls also pass |
| Delivery | System action, no editorial Line | `not_applicable` |

Role separation and executor-identity separation remain separately testable controls; neither may be
stored as a false Line crossing.

The blind-review proof needs three ordered events, not D-171's current pair:

1. `EG5_preliminary_disposition_sealed` — the human Chief Editor sees the evidence package but not
   EG4's recommendation and records a preliminary disposition and reason;
2. `EG4_recommendation_revealed_to_EG5` — reveal occurs only after the sealed event; and
3. `EG5_final_decision_recorded` — the human confirms, changes with a reason, or returns to EG4.

Any missing or reversed event fails the anchoring-control proof. EG4's recommendation must already
exist to complete T5, but visibility—not existence—is what remains withheld until step 2.

An internal override `O` must not become a gate-bypass alias. Chief Editor intervention before the
required EG4 record exists is refused. A permitted override acts on an existing internal decision,
records authority and reason append-only, and cannot override external `EA`.

### 11.4 `F3` draft — canonical catalogs that unblock F4

F3 is documentary normalization, not database design. Put each fact in its owning catalog and refer
to stable IDs elsewhere.

#### A. Product personas and stakeholders — `Modular_PRD.md` §2.3

| ID | Canonical name | Kind | System status |
|---|---|---|---|
| `USR-CHIEF-EDITOR` | Chief Editor | Human system user | Present; current and target T5/T6 contracts both held |
| `AUD-PROFESSIONAL` | Agile/DevOps/ITIL professional reader | Audience | Not a system user |
| `AUD-AI-PRACTITIONER` | AI practitioner reader | Audience | Not a system user |
| `EXT-GRC` | Government Institution / regulator | External authority/stakeholder | No internal persona or access right by default |
| `CAP-LINE3` | Independent Line 3 assurance | Deferred capability | Not built in v1; no executor |
| `ARCH-OD4` | Proposer / Critics / Judge | Deferred architecture | Not a persona, gate, EW, or Line mapping |

#### B. Business/executor role catalog — RACI-owned

| ID | Canonical role | Required distinction / aliases | Gate eligibility |
|---|---|---|---|
| `ROLE-REPORTER` | Reporter | — | T1 / EG1 |
| `ROLE-INVESTIGATOR` | Investigator | — | T2+T3 / EG2 |
| `ROLE-JOURNALIST` | Journalist | — | T4 / EG3 |
| `ROLE-SENIOR-JOURNALIST` | Senior Journalist | Distinct from Chief Editorial Desk and Desk Editor | Factory operation only unless separately governed |
| `ROLE-CHIEF-EDITORIAL-DESK` | Chief Editorial Desk | Business aliases: Chief Journalist, Desk Chief; **not** Desk Editor | Current T6 role / target T5 / EG4 |
| `ROLE-DESK-EDITOR` | Desk Editor | Distinct factory role; not an alias of Desk Chief | Factory route/operation role only unless separately governed |
| `ROLE-CHIEF-EDITOR` | Chief Editor | CSV alias: Editor-in-Chief; human user | Current T5 / target T6 / EG5 |
| `ROLE-SYSTEM-DELIVERY` | System delivery executor | Not a persona or editorial judge | Delivery only |

Each role row needs `actor_class`, allowed `executor_type`, current transition, target transition,
current lifecycle, target lifecycle, aliases, and authority-reference fields. Do not assign a RACI
letter globally; RACI is scoped by relationship/task.

#### C. Editorial node catalog — `FN-GATES`-owned skeleton

| Node | Transition mapping | Target executor role | Lifecycle |
|---|---|---|---|
| EG1 | T1 | `ROLE-REPORTER` | `decided_target_held` |
| EG2 | T2+T3 | `ROLE-INVESTIGATOR` | `decided_target_held` |
| EG3 | T4 | `ROLE-JOURNALIST` | `decided_target_held` |
| EG4 | T5 | `ROLE-CHIEF-EDITORIAL-DESK` | `decided_target_held` |
| EG5 | T6 | `ROLE-CHIEF-EDITOR` | `decided_target_held`; human executor required |
| Delivery | T7/publication actions | `ROLE-SYSTEM-DELIVERY` | no editorial authority |

Use explicit lifecycle values: `current_documented_held`, `decided_target_held`, `external`,
`not_built_v1`, and `deferred`. Bare `current` or `active` is forbidden while D-171's hold stands.

F3 succeeds when every named source role maps to one canonical role or an explicit `UNMAPPED`, no
logical node is called a persona, current and target assignments cannot be confused, and F4 can
reference role IDs without title matching.

### 11.5 `F4` draft — scoped RACI and route-operation crosswalk

#### Separate RACI scopes first

| Scope | Question | Authority rule |
|---|---|---|
| `system_transition` | Who executes/accounts for T1–T11? | Existing governed transition RACI; D-170's Acting Chief Editor `A` applies here |
| `factory_route` | Who owns the outcome of one Sheet 1 Tier/fallout/regulatory route? | Sheet 1 candidate RACI; varies by route |
| `factory_operation` | Who owns/executes one Sheet 2 operation inside an applicable route? | Local operation RACI; blank local `A` may inherit route `A` only through an explicit relationship |
| `external_authority` | Who can impose/accept an external mandate? | `EA`; never replaced by internal `A` or `O` |

This scope key is mandatory on every RACI assignment. It reconciles rather than averages D-170 and
the CSVs.

#### Canonical crosswalk shape

| Set | Fields |
|---|---|
| Route master | `route_id`, source label, route class, route RACI by canonical role ID, `EA`, evidence status |
| Operation master | `operation_id`, source label, `atomic` / `milestone` / `control_point`, local RACI by canonical role ID, evidence status |
| Route-operation join | `route_id`, `operation_id`, applicability, route `A`, local operation `A`, effective decision path, provenance, verification status |

Use proposed stable route IDs for drafting only: `ROUTE-PROD-1/2/3`, `ROUTE-FALLOUT-1/2/3`, and
`ROUTE-GRC`. Use one operation definition for each Sheet 2 row (`OP-PITCH`, `OP-RESEARCH`,
`OP-DRAFT`, `OP-COMPLEX-SERIES`, `OP-COPY-EDIT`, `OP-LEGAL-RISK`, `OP-FINAL-SIGNOFF`, `OP-CRISIS`).
The route-operation join—not duplicate operation rows—expresses reuse.

#### Source dispositions required before F4 closes

| Source issue | Status now | Required fix |
|---|---|---|
| Daily Pitch, Deep Fact-Checking, and Drafting each contain multiple `R` without a milestone marker | `UNVERIFIED` | Correct to one atomic `R` or mark/decompose the milestone |
| Complex Series and Legal/Risk are marked multi-task milestones | Known milestone | Decompose into atomic operation children with one `R` each |
| Drafting has no local `A` | Known absence | Link applicable route(s), then inherit route `A`, or supply an explicit local `A` |
| Final Sign-Off has no `R` and may apply to many routes | `UNVERIFIED` control-point shape | Name its preparer/executor or authorize a scoped `R = A` exception; use route joins |
| Legal/Risk and Crisis can map to fallout, regulatory, or both | `UNVERIFIED` | Chief Editor decides applicable route joins; title matching is prohibited |
| Blank GRC cells | Undefined source convention | Choose `not_applicable`, `unknown`, or omitted; never infer `I` |
| Parent and local `A` differ | Expected scoped authority | Retain both and record the decision path; never overwrite either |

F4 succeeds when every operation has one canonical definition, one or more explicit applicable
routes, atomic children with one `R`, a scoped effective decision path, and no unresolved cell
presented as fact.

### 11.6 Remaining F6 and F7 after F3/F4

F6 core gate rules do not depend on a factory route: mandatory reason/evidence anchors, no bypass,
append-only events, human-only EG5, corrected Line separation, the three-event blind sequence, and
delivery's no-editorial-mutation rule are universal. F4 supplies only route-specific evidence
overlays and executor-role references. Keep those layers separate.

After F3/F4 land, finish F6 by:

1. correcting D-171's Line-separation and blind-event defects above;
2. defining universal gate entry/exit/return/negative criteria once;
3. attaching route-specific evidence overlays through F4 joins, without duplicating gates; and
4. specifying Delivery refusal: it consumes the immutable EG5 result, and any editorial mutation is
   rejected or routed into a new governed workflow.

Only then may F7 start. Its first pass applies the facts across the Decision Register, Build Spec,
Artifact Inventory where an artifact is created, Modular PRD, RACI, FN-GATES, config/decision logs,
traceability, current-value source documents, Encyclopedia flag, and B-068. The fresh build
authorization must select exactly one T5/T6 contract; until then D-171's hold remains.

Graphify closes last: rebuild after the final docs commit, re-merge `frag107` and `frag108` plus all
other curated fragments, complete pending semantic descriptions/labels, prove
`lastAnalyzedHead = HEAD`, pass the commit-safe portable check, and run the full consistency suite.
Coverage alone is insufficient.

### 11.7 Failure-derived success criteria

| Deliberate failure | Required rejection/proof |
|---|---|
| Same-Line target T2–T5 is written `satisfied` | Contract test rejects it; only T6 may be `satisfied` in the target flow |
| Human sees EG4 recommendation before sealing a preliminary view | Blind-order test fails because the preliminary event does not precede reveal |
| Desk Editor is aliased to Desk Chief/Chief Editorial Desk | Role-catalog uniqueness/alias review rejects the mapping |
| Senior Journalist disappears from F3 | CSV-column coverage fails; every source role must map or read `UNMAPPED` |
| Transition `A` and factory route `A` share one unscoped field | RACI validation rejects the assignment without `raci_scope` |
| One reusable operation is copied into several routes | Crosswalk uniqueness rejects duplicate operation definitions |
| Blank GRC cell becomes `I` | Source-evidence validation rejects any inferred value |
| Final Sign-Off remains without `R` | Atomic-operation validation refuses completion or requires an approved exception |
| Route-specific evidence rewrites a universal gate | Layering check rejects route fields in the core node definition |
| Delivery changes EG5's editorial disposition | Authorization refuses the write and preserves the approved record |
| F7 begins while F3/F4 or corrected F6 is open | Handoff dependency check rejects closure |
| Graph node exists but analyzed HEAD differs | `docs-drift` remains red; F7 cannot verify |

## 12. Historical D-171 review approve / reject summary

| Decision | Tier | Follow-up phase |
|---|---|---|
| **Approve** — D-171's explicit hold and target role/Line/executor direction | Decision Register / Build Spec | Preserve; no build |
| **Approve-with-conditions** — F3 catalog draft | Product Requirements / RACI / FN-GATES | Apply first; include every CSV role and lifecycle state |
| **Approve-with-conditions** — F4 scoped crosswalk draft | RACI/governance | Apply after F3; use route-operation joins and scoped RACI |
| **Reject as drafted** — D-171 same-Line transitions marked `satisfied` | FR-05 / Q11 semantics | Correct in remaining F6 before propagation |
| **Reject as drafted** — D-171 blind-review event pair | NFR-03 / acceptance behavior | Replace with human preliminary → reveal → final decision sequence |
| **Reject verification** — F7 cannot start | Handoff / Graphify | F3, F4 and corrected/complete F6 remain open; graph currency/semantics pending |
| **Defer** — all implementation | Lane B code/schema/UI/tests | Fresh authorization only after F7 |

## 13. Historical completion review after `D-172`/`D-173` — corrected by `D-174`

`D-174` applied `B068-R17`–`R20`. Preserve this section as the critic record; use §14 for current
status and the new Chief Editor workflow clarification.

### 13.1 Normalized request and settled boundary

> Preserve `D-172` and completed `F3`; do not repeat §§9–12. Review `D-173` and the applied `F4`
> artifact for structural completeness, reduce the remaining Chief Editor input to the smallest
> parent-first decision set, derive negative success criteria, and keep `F6`/`F7` and implementation
> held until those decisions land.

Settled: `D-172`'s Line-separation and three-event blind-review corrections; `D-173`'s persona,
executor-title, and node separation; the source transcription of Sheet 1 and Sheet 2; and Graphify
currency at committed HEAD `7e0d544`. Open: normalized `F4`, `F6` items 7–8, and `F7`.

Graphify's extraction is current and the local consistency suite is green, but `check-update` reports
pending semantic ingestion after the last rebuild. Per `B-041`/`D-137`, semantic ingestion is the last
action of `F7`, after the final source commit. `portable-check` findings in ignored runtime state remain
the existing `B-041` standing limit; portability is assessed against any exact artifact set proposed
for commit, not used to create a duplicate B-068 gap.

### 13.2 New gaps — fold into existing `F4`, do not create duplicate fix IDs

| Review ID | Finding | Guaranteed failure | Draft repair |
|---|---|---|---|
| `B068-R17` | `D-173` says the crosswalk names `raci_scope`, but `factory-route-operation-crosswalk.md` contains no such field. Its `C`/`I` assignments also remain display-name prose rather than canonical party IDs | Transition `A`, route `A`, operation `A`, and external authority cannot be distinguished or validated; aliases re-enter through prose | Replace wide/prose RACI cells with assignment rows carrying `raci_scope`, subject ID, involvement code, canonical party ID, source code, provenance, and verification status |
| `B068-R18` | External GRC appears as `ROLE-EXTERNAL-GRC` in route/operation `A` columns, while the product catalog uses `EXT-GRC` and `D-170` defines external authority as `EA`, not internal `A` | An external institution is modeled as an internal executor role; internal override/permission logic can accidentally treat `EA` as ordinary `A` | Use external party `EXT-GRC` with normalized involvement `EA`; preserve the CSV's source `A` in `source_code`, never as the effective internal code |
| `B068-R19` | The F3 role catalog says every row carries actor/executor/lifecycle/authority fields, but its table does not expose those fields; `D-173` also says “ten” rows while the catalog displays nine | A title catalog is mistaken for an executable eligibility contract, and a restated count drifts without identifying a missing role | Remove the count claim; either add the promised explicit fields in the owning catalog or state that F3 normalized identity only and leave eligibility/lifecycle to the node and assignment catalogs |
| `B068-R20` | `D-173`'s heading says route/operation masters are verified, although six operation rows are `UNVERIFIED`; the crosswalk says six operations need decisions even though all eight still need route applicability | Readers can close F4 after fixing six row shapes while the entire join remains empty | Rename the state: route master source-verified; operation master captured with two verified and unresolved rows; all operations require explicit route dispositions |

These are propagation/completion defects in `F4`; they do not reopen the business rulings in
`D-170`–`D-172` or the identity separation already achieved by `F3`.

### 13.3 Parent-first decision architecture

#### Parent A — normalize authority before deciding routes

Adopt one assignment shape for all factory RACI facts:

| Field | Rule |
|---|---|
| `raci_scope` | `factory_route` or `factory_operation`; `system_transition` remains in its existing governing source |
| `subject_id` | Canonical `ROUTE-*` or `OP-*` ID |
| `involvement_code` | `R`, `A`, `C`, `I`, `O`, or `EA`; `EA` is never stored as `A` |
| `party_id` | Canonical `ROLE-*` for internal actors or `EXT-GRC` for the external institution |
| `source_code` | Original CSV mark, including source `A` for GRC, retained without changing the normalized meaning |
| `provenance` / `verification_status` | Source file/cell or Chief Editor decision, plus `VERIFIED`, `DECIDED`, or `UNVERIFIED` |

This parent is documentary normalization, not a new business decision. It must land before route
joins so every later choice has one stable meaning.

#### Parent B — route applicability packet

For each of the eight `OP-*` rows, the Chief Editor supplies one disposition for each of the seven
`ROUTE-*` rows: `required`, `optional`, `conditional`, or `not_applicable`. A `conditional` entry must
name its trigger. This single matrix answers the old question 1 without title matching and permits
an operation to be reused without copying its definition.

#### Child B1 — operation work-design packet

After Parent B, decide only the unresolved operation shapes:

1. `OP-PITCH` and `OP-RESEARCH`: name one atomic `R`, or classify as milestones and enumerate children;
2. `OP-DRAFT`: name a local `A`, or explicitly inherit the applicable route's `A` per join row;
3. `OP-COMPLEX-SERIES` and `OP-LEGAL-RISK`: enumerate atomic children and one `R` per child; and
4. `OP-FINAL-SIGNOFF`: name its `R`, or approve a scoped `R = A` exception with its compensating
   successor/independent-review control.

Until decided, use conservative planning values: `milestone_pending_decomposition`, `A = unknown`,
and `R = unknown`. Do not silently choose one of several source roles, inherit authority, or grant an
`R = A` exception.

#### Child B2 — external-authority packet

For blank Sheet 2 GRC cells, the recommended evidence-preserving value is `unknown`, not
`not_applicable` and not `I`: the source provides no blank-cell convention. The Chief Editor may later
decide `not_applicable` per operation, but omission cannot prove it. `OP-CRISIS` retains source `A` as
provenance and normalizes its effective relationship to `EXT-GRC` as `EA`.

### 13.4 Failure-derived success criteria

| Deliberate failure | Required rejection/proof |
|---|---|
| Assignment omits `raci_scope` | Crosswalk validation rejects it |
| `EXT-GRC` is stored as internal `A` or a `ROLE-*` executor | Authority validation rejects it; only `EA` may reference the external party |
| `C`/`I` contains an unresolved display title | Canonical-party referential check fails |
| An operation has no disposition for a route | Join completeness fails; F4 remains open |
| `conditional` has no trigger | Join validation rejects the row |
| Multi-`R` source row is presented as atomic | Atomicity check rejects it until one `R` or decomposed children exist |
| Missing local `A` silently inherits | Effective-authority check rejects inheritance without an explicit join decision |
| `R = A` is inferred for final sign-off | Separation check rejects it without the approved exception and compensating control |
| Blank GRC cell becomes `I` or `not_applicable` without a decision | Provenance check rejects the value |
| F6 route evidence is drafted from an `UNVERIFIED` join | Dependency check keeps F6 items 7–8 held |
| A source edit lands but Graphify's analyzed HEAD differs | `docs-drift` fails and F7 cannot verify |

### 13.5 Current approve / reject summary

| Decision | Tier | Follow-up phase |
|---|---|---|
| **Approve** — `D-172` corrections and completed F3 identity/node separation | Decision Register / Product Requirements / RACI / FN-GATES | Preserve; do not repeat |
| **Approve-with-conditions** — `D-173`'s source masters | RACI/governance | Remaining F4; repair `R17`–`R20` before relying on the masters as normalized contracts |
| **Approve-with-conditions** — three-packet decision architecture | RACI/governance | Parent A, then Parent B, then children B1/B2 |
| **Reject verification** — F4 closure | Handoff / RACI | Route join empty; operation and authority semantics unresolved |
| **Reject verification** — F6 items 7–8 and F7 closure | Product Requirements / Fn_Specs / tracking / Graphify | Complete normalized F4 first, then propagate and independently verify |
| **Defer** — implementation and fresh build authorization | Lane B code/schema/UI/tests | D-171 hold remains until F7 closes |

## 14. Current review of the work-order → route → operation clarification

### 14.1 Normalized request

> Treat the Chief Editor's new text as a proposed business-workflow clarification, not as a completed
> 8×7 route join. Preserve `D-174`. Separate route classification, factory operations, phase-gate
> judgment, internal accountability, external authority, OD4, and evidence recording. Draft a
> conservative route-operation matrix for approval, identify the one remaining authority ambiguity,
> and keep `F4`/`F6`/`F7` and implementation open until the Chief Editor confirms it.

### 14.2 Correct parent workflow

```text
Work order created
  → factory route selected (`ROUTE-*`, never a development Lane)
  → required/conditional Sheet 2 operations scheduled and executed
  → each operation records its local internal A, or an explicitly approved internal route-A inheritance
  → operation evidence is reviewed at the applicable EG1–EG5 handoff defined later by F6
  → external routes obtain `EXT-GRC`/`EA` acceptance after the internal judgment chain
  → Delivery consumes the immutable approved/accepted result
  → every selection, reclassification, operation, judgment, override, acceptance, and delivery event is append-only
```

If risk changes the route, the original route is not overwritten. Record a new route-selection event,
its trigger, prior route, new route, decision-maker, and evidence.

### 14.3 Semantic corrections and new gaps — fold into existing `F4`/`F6`

| Review ID | What is unclear or unsafe | Guaranteed failure | Draft repair |
|---|---|---|---|
| `B068-R21` | “OD4 requires the judgment-rules template” can read as OD4 causing or governing the six-node pipeline | Reintroduces the category error corrected by `D-168`: a deferred intra-node remedy becomes a dependency of the inter-node gates | Five judgment gates plus Delivery stand independently. Codified judgment rules may later make OD4 executable inside a node, but OD4 remains separately authorized and does not create Gate 6 |
| `B068-R22` | “Chief Editorial Desk — ROUTE-PROD-1” conflicts with Sheet 1's verified route `A = ROLE-DESK-EDITOR`; “Chief Journalist” is already an alias of Chief Editorial Desk, not another tier role | Either the verified Sheet 1 authority is silently overwritten, or one canonical role is duplicated into two identities | Keep route A, gate executor, and newsworthiness reviewer as separate fields. Chief Editor must say whether the PROD-1 statement replaces route A or merely names a reviewer. Preserve Chief Journalist as the alias of `ROLE-CHIEF-EDITORIAL-DESK` unless explicitly superseded |
| `B068-R23` | “Newsworthy ranking” is applied to production, fallout, and GRC routes as though they make the same decision | Legal remediation and external regulatory acceptance are misreported as editorial popularity judgments; evidence and authority become indefensible | Production routes record newsworthiness/trend-decay judgment; fallout routes record remediation/risk disposition; `ROUTE-FALLOUT-3`/`ROUTE-GRC` record external acceptance/mandate plus judicial or GRC institutional-record references |
| `B068-R24` | The 8×7 applicability matrix does not record station order, repetition, or rerouting | A factory knows which stations exist but not what runs first, what may repeat, or whether crisis work runs under the old route | After applicability is approved, add `stage_order`, `repeatable`, `entry_trigger`, `completion_evidence`, and `reroute_target` to each applicable join; do not use Sheet 2 row order as an unstated sequence |
| `B068-R25` | “Local A, or inherited parent A” is unsafe when the route parent carries external `EA` | An internal drafting/review operation inherits accountability from an external institution, making the regulator appear to execute or manage internal work | Only an internal route `A` may be inherited, and only through an explicit join decision. `EA` is never inheritable; operations on an external-authority route require a named internal `A` before external acceptance |
| `B068-R26` | “Internal override or external acceptance” sounds mutually exclusive and records evidence only at the end | An override bypasses a required operation or external acceptance, or earlier decisions disappear behind the final record | Internal `O` may amend an existing internal disposition with reason; it never substitutes for missing work and never overrides `EA`. Record append-only evidence at every step, not only final acceptance |
| `B068-R27` | The summary places Sheet 2 stations and the six nodes in one flow but does not map operation evidence to a gate handoff | Implementers either run all gates after all work, duplicate a gate per route, or let a gate pass without the station evidence it is meant to review | F4 owns route applicability/order; F6 owns a separate operation-evidence → gate entry/exit overlay. Universal EG1–EG5 behavior remains defined once |

### 14.4 Proposed 8×7 applicability matrix — decision draft, not source fact

This matrix is a conservative operating-policy proposal derived from the clarified factory flow. It
does not claim the CSVs contain these relationships. Lane A may write it into the crosswalk only after
the Chief Editor approves or amends it.

| Operation | `PROD-1` | `PROD-2` | `PROD-3` | `FALLOUT-1` | `FALLOUT-2` | `FALLOUT-3` | `GRC` |
|---|---|---|---|---|---|---|---|
| `OP-PITCH` | `required` | `required` | `required` | `not_applicable` | `not_applicable` | `not_applicable` | `not_applicable` |
| `OP-RESEARCH` | `conditional:C1` | `required` | `required` | `conditional:C1` | `required` | `required` | `required` |
| `OP-DRAFT` | `required` | `required` | `required` | `conditional:C2` | `required` | `conditional:C2` | `conditional:C3` |
| `OP-COMPLEX-SERIES` | `not_applicable` | `conditional:C4` | `conditional:C4` | `not_applicable` | `not_applicable` | `not_applicable` | `not_applicable` |
| `OP-COPY-EDIT` | `required` | `required` | `required` | `required` | `required` | `conditional:C2` | `conditional:C3` |
| `OP-LEGAL-RISK` | `conditional:C5` | `conditional:C5` | `required` | `conditional:C5` | `required` | `required` | `required` |
| `OP-FINAL-SIGNOFF` | `required` | `required` | `required` | `required` | `required` | `required` | `required` |
| `OP-CRISIS` | `not_applicable` | `not_applicable` | `not_applicable` | `not_applicable` | `required` | `required` | `conditional:C6` |

Trigger definitions:

| Trigger | Exact condition |
|---|---|
| `C1` | Material facts are disputed, source confidence is below the route threshold, or a downstream finding requires deep re-verification |
| `C2` | The route must issue or amend a public correction, retraction, legal response, or other external editorial artifact |
| `C3` | The GRC route requires a formal submission, licensing response, or public-facing compliance artifact |
| `C4` | The work order is explicitly classified as a multi-part enterprise/investigative series |
| `C5` | A documented legal, ethical, manipulation, money-laundering, corruption, defamation, or regulatory-risk signal is present |
| `C6` | A regulatory breach, enforcement action, licensing incident, or regulator-directed retraction requires crisis handling |

`optional` is deliberately unused: an untriggered optional station has no deterministic completion
rule. If the Chief Editor wants discretion, it should be expressed as `conditional` with a named
trigger or approving role.

Production-route crisis signals do not execute `OP-CRISIS` under the production route. They create an
append-only reclassification into the appropriate fallout/regulatory route, after which that route's
matrix applies.

### 14.5 Route disposition authority — what the clarification does decide

| Route family | Decision being made | Authority interpretation |
|---|---|---|
| `ROUTE-PROD-1` | Low-impact daily-news newsworthiness, including trend-over-fade | **Unclear:** Sheet 1 says route `A = ROLE-DESK-EDITOR`; the new text names Chief Editorial Desk. Do not overwrite either until the Chief Editor distinguishes route A from reviewer |
| `ROUTE-PROD-2` / `ROUTE-PROD-3` | Enterprise/investigative newsworthiness and trend-over-fade | `ROLE-CHIEF-EDITORIAL-DESK` is the route A; “Chief Journalist” remains its alias |
| `ROUTE-FALLOUT-1` / `ROUTE-FALLOUT-2` | Internal remediation, correction/retraction, and risk disposition | `ROLE-CHIEF-EDITOR` is internal route A; this is not a newsworthiness score |
| `ROUTE-FALLOUT-3` / `ROUTE-GRC` | External legal/regulatory acceptance or mandate | `EXT-GRC` carries `EA`, using referenced judicial/GRC institutional records; internal work still needs internal executors and A |

### 14.6 Failure-derived success criteria

| Deliberate failure | Required rejection/proof |
|---|---|
| OD4 is cited as the source or governor of a gate/node | Ontology check rejects the dependency; OD4 may appear only as separately authorized intra-node architecture |
| “production lane” is stored as Lane 1/2/3 or Lane A/B/C | Vocabulary check rejects it; only `ROUTE-*` is accepted |
| Chief Journalist and Chief Editorial Desk receive separate canonical IDs | Alias uniqueness rejects the duplicate unless a new Chief Editor ruling supersedes F3 |
| PROD-1's route A changes without resolving Desk Editor versus Chief Editorial Desk | Authority-diff review rejects propagation |
| Fallout/GRC result is stored only as a newsworthiness ranking | Evidence-schema review rejects it; remediation or external-acceptance fields are required |
| An operation inherits `EXT-GRC`/`EA` as local A | Authority validation rejects the assignment |
| A conditional join lacks its named trigger | Join validation rejects it |
| A crisis signal mutates a production route in place | Audit test requires a new route-selection event preserving the former route |
| A route lists applicable operations but no order/completion evidence | F4 remains planning-incomplete and F6 evidence overlays stay held |
| An operation is treated as a gate, or all operations are assumed to precede every gate | Layering check rejects it until F6 names the operation-evidence → gate handoff |
| Internal override removes history or bypasses `EA` | Authorization refuses the action and append-only history remains unchanged |
| Graphify analyzed HEAD differs from Git HEAD | `docs-drift` fails; F7 cannot verify |

### 14.7 Current approve / reject summary

| Decision | Tier | Follow-up phase |
|---|---|---|
| **Approve** — `D-174` corrections | Decision Register / RACI / governance crosswalk | Preserve; do not repeat `R17`–`R20` |
| **Approve-with-conditions** — corrected factory workflow and proposed applicability matrix | RACI/governance | Chief Editor confirms §14.4 and resolves PROD-1 authority in §14.5 |
| **Approve-with-conditions** — conservative defaults from crosswalk §4 | RACI/governance | Confirm no silent A inheritance, no inferred `R = A`, unknown blank GRC, and held milestone decomposition |
| **Reject** — OD4 as the cause/governor of the six nodes | Product architecture | Preserve five inter-node judgments plus Delivery; OD4 remains separate/intra-node and deferred |
| **Reject verification** — F4/F6/F7 closure | Handoff / Product Requirements / Fn_Specs / Graphify | Await route-matrix approval, operation sequencing/design, PROD-1 authority answer, propagation, sync, and independent review |
| **Defer** — implementation | Lane B code/schema/UI/tests | `D-171` hold remains; no build authorization |

## 15. `B068-G1` only — business-governance parent contract

### 15.1 Normalized request and scope boundary

> Close one conceptual block at a time, beginning with `B068-G1`. Define how the manual Editorial
> Workflow is mirrored into the product; how Project IIA Lines, RACI, external GRC, editorial nodes,
> OD4, the appointed Chief Editor, development lanes, and external servers relate without becoming
> the same thing; and define the minimum decision report needed by the one accountable natural
> person. Draft only. Do not decide the open F4 matrix, F6 behavior, or any build work in this pass.

`D-170` adopted eight separate axes and therefore **addressed** `B068-G1`; it did not define all of
their relationships. This section supplies the missing parent relationship contract. It does not
reopen `D-170`–`D-174` and does not close child gaps `G2`–`G7`.

### 15.2 Parent governance model — one layer, one job

| Layer | Canonical meaning | What it may reference | What it never becomes |
|---|---|---|---|
| Manual business workflow | The human newsroom practice being mirrored | Source CSVs, policies, institutional evidence | A system permission or development lane |
| Editorial Workflow (`EW`) | The product's stable mirror of that manual flow | `EW1`–`EW3`, gate evidence, factory work | An IIA Line, RACI letter, route, or database state |
| Factory route/operation | Which work order applies and which stations perform it | `ROUTE-*`, `OP-*`, scoped RACI | A phase gate or development lane |
| Task RACI | Who performs, answers for, is consulted on, or is informed about one atomic task | Canonical role/party IDs and task scope | A global title hierarchy or IIA assurance model |
| Project IIA Lines | Internal operations/oversight/independent-assurance classification | Line assignment and separation evidence | Editorial sequence, RACI, external regulator, or OD4 |
| External GRC | External acceptance, mandate, or institutional assurance evidence | `EXT-GRC`, `EA`, judicial/GRC record references | Internal `A`, Line 3 by default, persona, or node agent |
| Editorial gate node | Logical workcell that applies one governed judgment | EG node, EW stage, Line, executor role, evidence | Persona, natural person, or OD4 agent |
| Editorial virtual-node agent | Agent instance executing an eligible node role | Node assignment and RACI `R` | Internal `A`, Chief Editor account, or external authority |
| OD4 virtual agents | Future Proposer/Critics/Judge reasoning inside one node | Codified judgment template and separate authorization | Phase gates, Project Judge, Line 3, GRC, or a v1 feature |
| Human appointment | Time-bounded assignment of a natural person to a stable role | Chief Editor/Judge/user role and authority record | A hard-coded name used as permission logic |
| Development Lane | Ownership of project work and the commit lock | Lane A/B/C under `D-75`/`D-156` | Product workflow, server, user, or business role |
| External Execution Environment (`ENV-EXT`) | External server/service where authorized work runs | Host/service identity, data boundary, connection evidence | Development Lane; the governed development set remains Lane A/B/C |

Relationships are explicit, but identities are not inferred: an EG node may reference an EW stage,
IIA Line and RACI role without those fields becoming synonyms.

### 15.3 Editorial Workflow mirror

The minimum EW semantics consistent with the clarified five-gate target are:

| EW stage | Manual purpose mirrored | Target node coverage | Project IIA relationship |
|---|---|---|---|
| `EW1` — evidence production | Originate, validate and develop the editorial evidence | `EG1` Reporter, `EG2` Investigator, `EG3` Journalist | Line 1 operations |
| `EW2` — editorial-desk review | Review the work product, rank production newsworthiness where applicable, and recommend/return | `EG4` Chief Editorial Desk | Line 1 operations with a distinct node/executor control |
| `EW3` — accountable human disposition | Human final decision, internal override when permitted, escalation, and release/hold | `EG5` Chief Editor | Line 2 management/oversight |
| Delivery | Execute the immutable approved disposition | Delivery Node | No editorial Line or authority |

Line 3 remains a deferred independent-assurance capability (`D-57`/`D-166`). External GRC remains
outside the Project IIA Lines. Neither is an EW stage.

### 15.4 Source RACI versus effective v1 RACI — the multiple-`A` repair

The two CSVs and the system must not share one undifferentiated `A` column:

| View | Meaning of `A` | Required handling |
|---|---|---|
| CSV/source organization | The human role the manual or target newsroom associates with a route/task | Preserve as `source_accountability_role`; evidence/consultation only, not a v1 permission grant |
| Target multi-person organization | The accountable role after the business appoints distinct natural people | Deferred target mapping; still exactly one effective internal `A` per atomic task |
| Current v1 collapsed organization | One natural person occupies the internal accountable roles | `ROLE-CHIEF-EDITOR` is the effective internal accountable role; its current appointment holder is Robert Tan under `D-158` |
| Virtual-agent execution | The eligible agent performs the work | Agent carries scoped `R`, never internal `A` merely because it executes a node |
| External authority | Government institution/regulator accepts or mandates | `EXT-GRC` carries `EA`, never internal `A`; Chief Editor remains accountable for the organization's internal response |

Therefore the route crosswalk needs both `source_accountability_role` and
`effective_v1_accountable_role`. Multiple source `A` roles are not multiple simultaneous v1
accountable people. Within the current system, every atomic internal task resolves to exactly one
effective internal `A`; an external route may additionally require one `EA`.

### 15.5 Separate the problem box from the decision box

Use one **Chief Editor Decision Brief** with two linked, independently retained records:

| Record | Contains | Must not contain/do |
|---|---|---|
| Problem / Evidence Record | Work order, route and EW stage; issue/question; facts and sources; trend/risk indicators; missing or disputed evidence; agent recommendations; gate/Line/RACI provenance | Must not present a recommendation as the human or external decision; must not be overwritten when a decision changes |
| Decision / Disposition Record | Decision-maker role and appointment; `approve`/`return`/`hold`/`escalate`; reason; relied-on evidence anchors; conditions; internal `O` if used; external `EA` status if required; next action; timestamp | Must not rewrite the problem/evidence record, erase earlier dispositions, let `I` act, or let internal `O` replace `EA` |

The brief simplifies what Robert Tan must read without hiding disagreement: show the requested
decision first, then exception/risk summary, evidence anchors, agent recommendation, assurance and
authority status, and the append-only history. The report is a projection over source records, not a
second mutable truth store.

### 15.6 Appointment and identity semantics

`D-158` already decides that Robert Tan is the v1 natural person acting contextually as **the user**,
**Chief Editor**, and **Project Judge**. Preserve the role names because their acts differ:

- Chief Editor selects development-lane boundaries and makes editorial dispositions;
- Project Judge accepts/defers phase completion and residual risk; and
- the user is the authenticated human principal when the product later enforces identity.

The implementation must eventually authorize a stable role/appointment identifier, not compare the
display name `Robert Tan`. A replacement appointment must change the holder without rewriting RACI,
EW, gate, or report semantics. An OD4 `Judge` is a future reasoning component and never inherits the
Project Judge/Chief Editor identity from the shared word “Judge.”

### 15.7 New completion findings — fold into `B068-G1`, no duplicate parent gaps

| Review ID | Gap | Guaranteed failure | Draft repair |
|---|---|---|---|
| `B068-R28` | `D-170` introduced `EW1`–`EW3` without governing their stage meanings or node mapping | EW becomes another decorative column whose values differ by document | Adopt §15.3's stable EW definitions; changes require a decision, not title matching |
| `B068-R29` | D-174's CSV crosswalk can still be read as effective v1 authorization because source `A` and current accountable appointment are not separate fields | Desk Editor/Chief Editorial Desk/Chief Editor appear as competing current users or permission holders | Add `source_accountability_role` and `effective_v1_accountable_role`; collapse current internal A to Chief Editor while retaining the source organization |
| `B068-R30` | “IIA is ops governance and external GRC assurance” can make external GRC a Project IIA Line or default Line 3 | Internal independence and external legal authority become falsely interchangeable | Project IIA Lines govern internal control classification; external GRC stays `EXT-GRC`/`EA` outside the Lines |
| `B068-R31` | “The app will have OD4 virtual agents” states a deferred architecture as present scope | A v1 implementation or permission path is created without the Charter trigger and fresh authorization | Permit only an architecture reference/judgment-template compatibility note; OD4 agents remain `deferred`, not built |
| `B068-R32` | Natural person, user account, Chief Editor role, and Project Judge role may be collapsed into the literal name Robert Tan | Changing the person breaks permissions/history, or an audit cannot identify which authority context was exercised | Store/report role, appointment, person identity and display name separately; D-158 supplies the current linkage |
| `B068-R33` | **Resolved by Judge clarification:** “Lane D” meant an external server/execution environment, and “Lane A/Lane B/Lane B” meant Lane A/B/C | If the retired wording returns, the three-lane commit lock gains an ungoverned participant with no surface, rule file, state, or handoff | Canonical term is `External Execution Environment` (`ENV-EXT`). Development ownership remains exactly Lane A/B/C; no D-75/D-156 amendment is created or required |
| `B068-R34` | A simplified report can merge the reported problem, agent recommendation and accountable decision into one mutable narrative | The system cannot prove what was known before the decision or whether the human independently decided | Use §15.5's linked Problem/Evidence and Decision/Disposition records with append-only history |

### 15.8 Failure-derived success criteria for `B068-G1`

| Deliberate failure | Required rejection/proof |
|---|---|
| One field accepts `EW1`, `Line 1`, `A`, `EG1`, `Tier 1`, or `Lane A` interchangeably | Vocabulary/schema contract rejects the value outside its owning axis |
| An EW stage has no stable purpose or node mapping | Traceability review rejects the stage |
| Two effective internal `A` assignments exist for one atomic task | RACI validation rejects the task; source/target role references do not count as effective assignments |
| A CSV source `A` automatically grants a v1 permission | Authorization review rejects the mapping without the effective-accountability decision |
| External GRC is stored as Line 3 or internal `A` | Assurance/authority validation rejects it; only `EXT-GRC`/`EA` is valid |
| A virtual-node agent or OD4 agent becomes the Chief Editor/user by role-name inference | Identity and executor-type checks refuse the assignment |
| OD4 is marked present/built under this clarification | Scope check rejects it until a separate fresh authorization exists |
| The name Robert Tan appears as a permission rule | Identity review rejects name-based authorization; a stable appointment/principal reference is required |
| Problem evidence changes when a later decision changes | Append-only test rejects the mutation and preserves both records |
| A decision brief hides a dissenting agent result, missing evidence, override, or required EA | Report-completeness check rejects the brief |
| An external server is recorded as Lane D | Vocabulary/lane-state review rejects the lane claim; only `ENV-EXT` is valid and development remains Lane A/B/C |
| Graphify analyzed HEAD differs from Git HEAD | `docs-drift` remains red; `F7` cannot verify |

### 15.9 Current approve / reject summary — `B068-G1` only

| Decision | Tier | Follow-up phase |
|---|---|---|
| **Approve-with-conditions** — `B068-G1` parent governance contract | Decision Register / Product Requirements / RACI / Fn_Specs | Lane A records §15.2–§15.6 before claiming G1 closed |
| **Approve-with-conditions** — current v1 single-effective-A model | RACI/governance | Preserve CSV A as source/target evidence; effective internal A is Chief Editor; external GRC is EA |
| **Approve-with-conditions** — Chief Editor Decision Brief | Product Requirements / Fn_Specs | F6 defines fields and negative acceptance tests; no UI/build in this pass |
| **Approve** — `ENV-EXT` terminology and Lane A/B/C correction | Development governance / environment vocabulary | Lane A records the fact; D-75/D-156 remain unchanged |
| **Reject** — external GRC as Project IIA Line/Line 3 | Governance / assurance | Preserve `EXT-GRC`/`EA` outside Project IIA Lines |
| **Reject** — OD4 agents as current v1 scope | Product architecture | Keep deferred until its own trigger and authorization |
| **Reject** — server/environment called Lane D | Development governance | Retire the label; use `ENV-EXT` |
| **Reject verification** — B-068 closure | Handoff / Graphify | Child gaps G2–G7, source propagation, graph sync and independent review remain open |
| **Defer** — implementation | Lane B code/schema/UI/tests | Planning only; `D-171` hold remains |

### 15.10 Judge clarification — `ENV-EXT`, no fourth development lane

**Judge approved:** “Lane D” means an **External Execution Environment (`ENV-EXT`)**, not a fourth
development-ownership lane. The repeated “Lane B” in “Lane A/Lane B/Lane B” was a wording error; the
intended and governed development set is **Lane A/Lane B/Lane C**.

Consequences:

1. `ENV-EXT` identifies infrastructure/service context only. It never becomes `Active`, `Eligible`,
   `Blocked`, or `Done`, never holds the commit lock, and owns no repository surface.
2. Lane A/B/C and their existing D-75/D-156 state machine remain unchanged; no rule-file, handoff,
   ownership, or CI amendment is authorized by this clarification.
3. Any future external host/service requirement records environment identity, connection boundary,
   data classification, credential owner, evidence, and failure behavior under its owning feature or
   technical specification—not as a new lane.
4. Reintroducing “Lane D” for an environment is a vocabulary defect and fails §15.8's negative test.

This closes `B068-R33`'s clarification dependency. It does not close `B068-G1` until Lane A propagates
the full §15 parent contract, and it does not advance F4, F6, F7, or implementation.

## 16. `B068-G2` executive guide — assuming `B068-G1` is complete

### Executive summary

The earlier `G2` guide inherited a category error from `D-170`: it treated **Chief Editorial Desk**
as a replacement name for **Chief Journalist**, then described the target as a T5/T6 inversion. The
Chief Editor's clarification corrects that premise. For `B068-G2`, this section supersedes the
earlier alias/inversion statements in this handoff; Lane A must propagate the correction into their
owning tiers rather than treating both versions as valid:

- the intended order was already **T5 Chief Journalist agent → T6 Chief Editor human**;
- the natural person at T6 must remain the last in-system editorial judgment;
- the CSV/RACI work introduced **Chief Editorial Desk as an additional, separate T5 reviewer**,
  not an alias for or replacement of Chief Journalist;
- production routes select the reviewer assigned to their route; fallout/GRC routes run **both T5
  reviewers concurrently** because neither one alone owns the route's accountable weighting; and
- the parallel reviews are sibling executions inside one T5 stage. They are never two consecutive
  gates and neither review overwrites the other.

The stable shape is therefore:

> Senior Journalist starts the EW → T1–T4 standard validation → required T5 review set → Chief Editor at T6 → Delivery

Delivery remains a processing node with no editorial authority. The block is no longer “which role
comes last?”—that is settled as the human Chief Editor. The block is to correct the singular-T5
contract, its parallel join rule and its evidence bundle before F6/F7 or a fresh build authorization.

“News” and “newsworthy” are not interchangeable workflow actions: **newsworthiness judgment** is the
recorded decision; **News** is the resulting content classification when that judgment permits it.
Every route produces a newsworthiness disposition, but the evidence basis differs by route.

### Route and authority boundary

| Route family | Required T5 review set | Accountable newsworthiness basis | T6 and external-authority boundary |
|---|---|---|---|
| `ROUTE-PROD-1` | **Chief Editorial Desk** only | Low-impact daily-news newsworthiness | Human Chief Editor records the final T6 disposition |
| `ROUTE-PROD-2` / `ROUTE-PROD-3` | **Chief Journalist** only | Enterprise/investigative trend-over-fade ranking | Human Chief Editor records the final T6 disposition |
| `ROUTE-FALLOUT-1` / `ROUTE-FALLOUT-2` | **Chief Editorial Desk + Chief Journalist in parallel** | Chief Editor weighs both briefs for legal/defamation, remediation and reputational newsworthiness | Human Chief Editor is the route-accountable and final T6 decision-maker |
| `ROUTE-FALLOUT-3` / `ROUTE-GRC` | **Chief Editorial Desk + Chief Journalist in parallel** | External judicial/GRC institutional record supplies the accountable external finding or mandate | `EXT-GRC` holds external `EA`/source `A`; human Chief Editor records and enforces the final in-system T6 disposition without impersonating or overriding the institution |

“Accountable judgment node” means an **EW decision-source node**, not one universal actor type. An
internal node maps separately to an eligible human or agent executor. The External GRC node is an
immutable, record-backed external-authority input with no application executor; it is never an
autonomous virtual agent.

The Senior Journalist's EW-start action is a **trigger**, not another gate and not automatic task
accountability. It starts the same T1–T4 validation sequence for every route. The two CSVs remain
source RACI evidence, but they do not themselves contain a universal start-trigger field; this Chief
Editor clarification is therefore the governing source for that rule and must be cited as such.

For a two-review T5, both reports must be separately sealed and linked into one immutable
`T5_parallel_review_bundle`. T6 cannot start until both required reports exist. There is no winner,
fallback order or silent merge: the human Chief Editor sees both briefs, their evidence anchors and
any disagreement before recording the final disposition.

### IIA boundary

The **2024 GIAS** is the core standards source. The project's simplified **Project IIA Lines** are an
internal control-classification lens used to help the Chief Editor apply and evidence those standards.
They are not an external organization, an external rule record, or external `A`/`EA`. Judicial and
GRC institutions remain outside the Project IIA Lines; their records may trigger or constrain T6 but
do not become Line 3, a virtual-node agent, or the Chief Editor.

### Lane A closure sequence

1. Correct `D-170`'s `F2` premise: this is not a T5/T6 inversion; it is a route-dependent T5 review
   set followed by the existing human-last T6 invariant.
2. Give Chief Editorial Desk and Chief Journalist distinct logical node IDs, then map each node to
   its eligible executor role separately; retire every alias statement that merges either layer.
3. Record the seven-route T5 cardinality above: one required reviewer on each production route and
   both reviewers in parallel on each fallout/GRC route. Record executor type, Project IIA Line,
   evidence, completion join, return target and lifecycle.
4. Define the Senior Journalist EW-start event and prove it triggers—not replaces—the common T1–T4
   validation sequence.
5. Re-derive `D-171`/`D-172` against the required T5 review set. Preserve the T6 human-only canary and
   three-event blind-review mechanism, but reveal the complete sealed T5 bundle only after the human
   preliminary disposition. Do not claim a Line crossing for an external trigger without an internal
   predecessor/Line proof.
6. Complete F6 behavior/acceptance criteria and F7 atomic propagation, synchronize Graphify, then
   seek a fresh build authorization. The `D-171` build hold remains until that sequence completes.

**Guaranteed failure:** retaining one `Chief Editorial Desk / Chief Journalist` identity destroys
the two-brief control; treating parallel T5 reviews as two sequential gates changes the governed gate
count; allowing T6 after only one required brief makes timing choose the evidence; replacing T6 with
external GRC makes the application falsely exercise institutional authority; and calling external
rules “IIA Line 3” collapses internal control classification into external legal authority.

**Success criterion:** production routes require the one assigned T5 report; fallout/GRC routes
require both parallel reports before T6; Chief Editorial Desk and Chief Journalist remain distinct
nodes with explicit executor-role mappings;
the Senior Journalist trigger produces the common T1–T4 evidence chain; every route ends its
in-system judgment at human T6; external `EA` remains outside the workflow while its institutional
record and trigger are linked; Project IIA Line and external-rule provenance are stored separately;
Delivery cannot change a disposition; and no implementation starts before F6/F7 and fresh
authorization.

| Decision | Tier | Follow-up phase |
|---|---|---|
| **Approve** — human Chief Editor remains the final T6 judgment for every workflow | Decision Register / Product Requirements / Fn_Specs | Correct `D-170`/`D-171` premise and preserve the human-only canary |
| **Approve** — T5 production selection and fallout/GRC parallel cardinality | Route crosswalk / gate contract | One production reviewer; both fallout/GRC reviewers; one logical T5 stage |
| **Approve-with-conditions** — Senior Journalist starts every EW | Product Requirements / Fn_Specs / RACI | Record it as a Chief Editor rule because the CSV has no universal trigger field; define event/evidence and preserve T1–T4 |
| **Approve** — Project IIA Lines and external GRC authority remain separate | Governance / assurance / authority | Preserve internal Line evidence and external `EA` provenance as separate fields |
| **Reject** — Chief Editorial Desk as an alias or replacement for Chief Journalist | All governed tiers | Assign distinct node IDs and separate executor-role mappings |
| **Reject** — concurrent T5 briefs represented as sequential gates, overwrite, or first-result-wins | Product behavior / audit | Require an immutable two-report bundle and an all-required join |
| **Reject** — external institution represented as T6 executor, Project IIA Line 3, or internal `A` | Authority / audit | Chief Editor executes internally; `EXT-GRC` remains external `EA`/source `A` |
| **Defer** — implementation and fresh build authorization | Lane B code/schema/UI/tests | `D-171` hold remains through F6/F7 and Graphify synchronization |
