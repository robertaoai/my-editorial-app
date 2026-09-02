# B-068 — Lane A consolidated editorial ontology and phase-gate handoff

- **Raised:** 2026-08-31 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** adopting the clarified Editorial Workflow/gate model, replacing the governed T5/T6
  role order, importing the attached RACI CSVs, or claiming the persona and control vocabulary is
  normalized across Lanes A/B/C
- **Status:** Answered
- **Lane A:** Acknowledged 2026-08-31 — critic pass complete (§8). **Full decision chain:** `D-170`
  (`F1`/`F2`/`F5`, now carries a `D-180` current-anchor notice) → `D-171` (S2 hold) → `D-172`
  (Line-separation/blind-review fix) → `D-173` (`F3` applied, `F4` masters) → `D-174` (`F4`-artifact
  fixes) → `D-175` (Chief Editorial Desk/Chief Journalist are two distinct roles) → `D-176` (`F4`'s
  8×7 route-applicability matrix decided) → `D-177` (`F6` contract adopted) → `D-178` (event-count
  fix, first propagation — later found pointer-only) → `D-179` (real target content added to
  `Modular_PRD.md`, `FN-GATES-01-05.md`, `FN-EXCEPTIONS-06-11-12.md`, `FN-PUBLICATION-09-10-13.md`,
  `raci-involvement-matrix.md` §3.1) → `D-180` (independent re-review found three residual defects,
  all corrected: `AC-08a` re-owned `FR-05a`→`FR-06`; four missing target ACs added (`AC-01a`,
  `AC-14a`, `AC-16a`, plus `US-04a`/`US-05a`'s dependency chain fixed); `G-05a`/`SEC-01a`/`SEC-03a`
  target rows added; the RACI matrix's two-`R`-on-one-task defect split into sibling acts `T5a`/`T5b`;
  and `B-069`'s current-anchor notice added to `D-170`). Full reasoning for each decision lives in
  `V1-DECISION-REGISTER.md` §5.14dw–§5.14e6, not restated here. **Current state:** `F1`–`F6` decided
  and propagated; three rounds of independent review each found real gaps, each corrected. `D-171`'s
  S2 hold stands, unaffected throughout. Still open: independent re-review of `D-180` itself, Graphify
  final sync at final commit, remote push, and any fresh build authorization.
- **Resolution:** Applied
- **Examined-By:** Lane B independent reviews, 2026-09-02 — `D-178` rejected as pointer-only (§20);
  `D-179` materially improved propagation but had three residual defects (§21); independent re-review
  of `D-180` rejects verification and records the remaining defects in §22
- **Verified-At-Commit:** 7e37919
- **Evidence:** `D-57`, `D-95`, `D-97`, `D-111`, `D-158`, `D-163`–`D-169`;
  `docs/handoff/B-062-*.md` through `B-067-*.md`; `D-170`–`D-180` in `V1-DECISION-REGISTER.md`;
  `docs/handoff/B-069-*.md`; `docs/Modular_PRD.md` §2.3/§2.3.1/§0.4/§8 and
  `FR-04`/`FR-04a`/`FR-05`/`FR-05a`/`FR-06`/`AC-01a`/`AC-05`–`AC-08a`/`AC-14a`/`AC-16a`/`G-05a`/
  `SEC-01a`/`SEC-03a`; `docs/governance/raci-involvement-matrix.md` (v1.9, §3.1);
  `docs/governance/factory-route-operation-
  crosswalk.md` (v0.3); `docs/fn-specs/FN-GATES-01-05.md` §11/§11.1; `docs/fn-specs/
  FN-EXCEPTIONS-06-11-12.md` §11; `docs/fn-specs/FN-PUBLICATION-09-10-13.md` §11;
  `docs/v1/V1-BUILD-SPEC.md` S2; `docs/v1/V1-ARTIFACT-INVENTORY.md`; frozen Charter `OD4`;
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

> **Reading order after `D-177`/`D-178` (`B068-R37`, added 2026-09-02).** §§9–14 and §17 are retained
> as historical critic/drafting evidence. Where any of them conflicts with `D-175`, `D-176`, `D-177`,
> or `D-178`, the later Decision Register entry governs. §18 records the adopted `F6` source draft;
> §19 is the `R37`/`F7` completion plan; the current Lane A field above records the live state.
> Historical rows are not implementation instructions and do not reopen closed findings.

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

## 14. Historical route-operation decision draft — decided by `D-176` and extended by `D-177`/`D-178`

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

## 17. Historical completion guide after `D-175` — `F4`/`F6` superseded by `D-176`/`D-177`

### 17.1 Normalized request

> Treat the Chief Editor's direct §16 clarification as the authority Lane A said it could not
> independently verify. Preserve the decision history rather than rewriting it retroactively. Confirm
> what `D-175` has already corrected, then close only the remaining `F4`, `F6` and `F7` work in that
> dependency order. Draft governance and acceptance contracts only; authorize no implementation.

### 17.2 Parent conflict — closed by `D-175`, do not re-litigate

The concern quoted by Lane A was valid **before** direct confirmation: §16 and `D-170` described
mutually exclusive T5 models. It is no longer an open authority question. The Chief Editor supplied
the clarification directly, and Lane A recorded it in `D-175` with source-tier corrections.

| Earlier statement | Current disposition | Required handling |
|---|---|---|
| `D-170`: target ends with human Chief Editor at T6 | **Preserved** | T6 remains the final human in-system judgment |
| `D-170`: Chief Editorial Desk and Chief Journalist are one aliased T5 role | **Corrected by `D-175`** | Two distinct T5-eligible nodes/roles with route-dependent cardinality |
| `D-171`: neither current nor target order may be built | **Preserved** | S2 hold remains until F6/F7 and fresh authorization |
| `D-172`: Line-crossing and three-event blind-review controls | **Preserved and widened** | Apply them to the complete required T5 review set |

“Correct `D-170`” means **record and propagate a superseding correction**, not delete or silently
rewrite the historical decision. `D-175` already performs that correction. A new decision should not
repeat it unless it fixes a separate defect below.

**Guaranteed failure:** treating both versions as simultaneously current makes route selection
nondeterministic; deleting `D-170` destroys decision provenance; and reverting `D-175` recreates the
Chief Editorial Desk/Chief Journalist alias defect.

### 17.3 Remaining gaps — no duplicate parents

| Gap | Current evidence | Draft disposition |
|---|---|---|
| `B068-R23` — one word, different route judgments | `D-175` still marks it open, while §16 now supplies the Chief Editor's direct clarification | Close in the next Lane A decision: `newsworthiness_disposition` is the common outcome; its evidence basis is daily relevance (`PROD-1`), trend/fade (`PROD-2/3`), Chief-Editor legal/remedial judgment (`FALLOUT-1/2`), or external institutional finding/mandate (`FALLOUT-3/GRC`) |
| `B068-R24` — applicable operations have no governed order/completion contract | Crosswalk §3 is empty and §5 is unanswered | Complete under F4 with explicit applicability, trigger, order, repeatability, completion evidence and reroute behavior |
| `B068-R26` — override timing and external acceptance remain underspecified | `O` cannot override `EA`, but the exact allowed sequence is absent | Complete under F6: internal decisions/overrides stay append-only; required external evidence is linked before final disposition; no internal action replaces external authority |
| `B068-R27` — operation evidence is not mapped to gate entry/exit | F4 and EG1–EG5 exist as separate catalogs only | Complete under F6 after F4: map evidence requirements, not operation titles, to each gate boundary |
| `B068-R35` — `D-175` names the reveal event `EG5_recommendation_revealed_to_EG5` | `D-172` correctly names `EG4_recommendation_revealed_to_EG5`; EG5 is the receiver, not the recommendation source | Correct the event to a bundle-aware name such as `T5_review_bundle_revealed_to_EG5`; retain aliases only as historical provenance, never two live event types |
| `B068-R36` — a dual-review return is undefined | T6 may return to EG4, but no rule says whether one or both T5 reports must rerun | F6 must name the return target set, invalidated evidence, rerun join condition and retained prior bundle |
| `B068-R37` — historical §14 claims remain readable as current | §14 still says the two T5 roles are aliases and PROD-1 authority is unclear; `D-175` supersedes both | F7 marks those rows historical/superseded or adds an unmissable `D-175` correction pointer; do not leave contradictory unqualified guidance |
| `B068-R38` — Graphify is behind the source tree | `.graphify/branch.json` analyzed `989c45f`; current HEAD is `da2d477` | F7 rebuilds after the final source edit, re-merges curated fragments if required, and proves analyzed HEAD equals final HEAD |

### 17.4 Parent 1 — finish `F4`

Lane A first presents one small Chief Editor decision packet based on
`factory-route-operation-crosswalk.md` §5:

1. approve or amend every operation-to-route disposition in §14.4;
2. for each `conditional` relationship, preserve a named, testable trigger;
3. confirm the conservative authority defaults: no silent `A` inheritance, no inherited `EA`, no
   inferred `R = A`, blank GRC cells remain `unknown` until decided, and undecomposed milestones stay
   held;
4. resolve the operation shapes already listed in crosswalk §4—do not create a second list; and
5. for each applicable join, add `stage_order`, `repeatable`, `entry_trigger`,
   `completion_evidence`, and `reroute_target`.

**F4 succeeds when:** every route-operation relationship has one explicit disposition and provenance;
every applicable atomic task has an effective internal `A` and executable `R`; milestone children are
named or remain visibly held; external `EA` is never inherited as internal accountability; and a
route change appends a new selection event rather than mutating history.

### 17.5 Parent 2 — finish `F6` after `F4`

Draft one behavior/acceptance contract, without choosing storage or UI:

1. Senior Journalist starts EW; the trigger cannot skip or substitute for T1–T4.
2. Production routes require their assigned single T5 report; fallout/GRC routes require both T5
   reports. T6 is blocked until the complete required review set is sealed.
3. The human Chief Editor seals a preliminary disposition before the T5 review set is revealed, then
   records the final T6 decision. Correct `B068-R35`'s event name in the same pass.
4. Conflicting T5 briefs remain separately visible; there is no automatic winner, overwrite or
   first-result-wins behavior.
5. Define `B068-R36`'s return/rerun behavior. Earlier reports and bundles remain append-only.
6. Attach the F4 operation evidence required at each gate entry/exit and state the refusal when
   required or triggered evidence is absent.
7. Preserve route-specific newsworthiness evidence and keep `EXT-GRC`'s institutional record/`EA`
   separate from the Chief Editor's internal T6 disposition and Project IIA Line.
8. Delivery consumes the approved immutable disposition and must refuse any editorial mutation.

`T5_parallel_review_bundle` is a **logical evidence-set label until implementation is authorized**,
not an approved table, column or schema object.

**F6 succeeds when:** every gate has entry evidence, permitted executor, decision/reason, exit,
return/rerun rule and negative test; the human-only T6 canary remains; all-required T5 joins are
enforced; blind-review ordering is provable; missing external authority blocks only routes that
require it; and Delivery cannot change judgment.

### 17.6 Parent 3 — finish `F7`

After F4 and F6 are decided:

1. propagate the facts atomically under `D-54`: Decision Register, Build Spec and Artifact Inventory
   in the same pass when artifact/sequence/DoD facts change; then the owning Product Requirements,
   RACI, Fn_Specs, configuration/log and handoff sections;
2. preserve historical decisions and mark superseded guidance explicitly—never maintain two
   unqualified target contracts;
3. verify every source-to-derived relationship, including the Senior Journalist trigger, T5
   cardinality, route evidence basis, T6 human boundary, `O`/`EA`, return behavior and Delivery;
4. rebuild Graphify only after the final source edit, preserve the curated layer, run
   `portable-check`, and prove analyzed HEAD equals final Git HEAD;
5. run the complete local consistency suite and an independent failure-oracle review; and
6. only after those pass, give B-068 a terminal handoff disposition and request a separate fresh
   build authorization.

### 17.7 Failure-derived closure tests

| Deliberate failure | Required rejection/proof |
|---|---|
| Both `D-170`'s alias model and `D-175`'s split model appear current | Precedence review selects `D-175`; F7 rejects the unqualified older claim |
| One operation-route pair is blank or a conditional lacks a trigger | F4 join validation fails |
| An applicable operation lacks order or completion evidence | F4 remains open and its F6 overlay cannot pass |
| Fallout/GRC reaches T6 with only one required T5 report | All-required join refuses T6 |
| The first parallel report overwrites or wins over the second | Append-only/bundle test fails |
| T6 returns work but the required rerun set is undefined | F6 acceptance review rejects the contract |
| `EG5_recommendation_revealed_to_EG5` becomes a live event | Event-catalog check rejects the wrong source; one canonical bundle-reveal event remains |
| External GRC becomes an application executor, internal `A`, or Project IIA Line 3 | Authority/ontology validation rejects it |
| Delivery changes a newsworthiness disposition | Delivery mutation test refuses the action |
| Graphify analyzed HEAD differs from final Git HEAD | `docs-drift` fails; F7 and handoff verification remain open |

### 17.8 Approve / reject summary

| Decision | Tier | Follow-up phase |
|---|---|---|
| **Approve** — `D-175` resolves the `D-170` authority conflict | Decision Register / RACI / FN-GATES / Build Spec hold | Preserve; do not unwind or duplicate |
| **Approve-with-conditions** — close `B068-R23` from the direct route-basis clarification | Decision Register / Product Requirements / Fn_Specs | Next Lane A decision; propagate during F6/F7 |
| **Approve-with-conditions** — F4 route-operation and work-design packet | RACI/governance crosswalk | Chief Editor approves/amends §14.4 and crosswalk §4/§5 |
| **Approve-with-conditions** — F6 behavior/acceptance contract | Product Requirements / Fn_Specs / Build Spec | After F4; close `R26`, `R27`, `R35`, `R36` |
| **Reject verification** — F7 or B-068 closure now | Tracking / handoff / Graphify | `R37`/`R38`, propagation and independent review remain open |
| **Defer** — implementation and fresh build authorization | Lane B code/schema/UI/tests | Only after F7 earns closure |

## 18. Completion guide after `D-176` — `F6` first, then `R37`/`F7`

### 18.1 Normalized request and settled parent

> Accept `D-176` as F4 completion for Lane A propagation. Do not reopen the approved route-operation
> applicability, triggers, sequencing or confirmed placeholders. Draft the smallest complete F6
> behavior/acceptance contract for `B068-R23`/`R26`/`R27`/`R35`/`R36`; then specify the R37/F7
> housekeeping, propagation, Graphify and independent-verification sequence. Build nothing.

**Settled:** F4's route master, operation master, applicability policy, conditional triggers,
sequencing and conservative placeholders. **Not implied:** that an operation with an unknown `R`/`A`
or undecomposed milestone is executable. F4 is complete as a planning/propagation artifact; those
visible placeholders remain build-readiness holds until a later decision resolves or excludes them.

### 18.2 What remains unclear

| Gap | Exact uncertainty | Draft repair |
|---|---|---|
| `B068-R23` | “Newsworthiness” is one outcome label but has four different evidentiary meanings | Govern one `newsworthiness_disposition` outcome and a separate `evidence_basis`: daily relevance; trend/fade; internal legal/remedial judgment; or external institutional finding/mandate |
| `B068-R26` | External trigger, external acceptance/mandate, internal T6 disposition and internal override are not temporally separated | Define four append-only record types/acts and their order; `O` may change an internal disposition only and never replaces or overrides `EA` |
| `B068-R27` | Decided factory-operation evidence has no gate entry/exit consumer | Adopt the operation-to-gate overlay in §18.4; gate behavior depends on evidence status, not operation titles |
| `B068-R35` | `D-175` says `EG5_recommendation_revealed_to_EG5`, making EG5 both source and receiver | Use one canonical bundle-aware event, `T5_review_bundle_revealed_to_EG5`; retain the wrong label only in historical correction prose |
| `B068-R36` | A T6 return does not say which T5 reviews or upstream evidence become stale | Adopt the scoped invalidation/rerun rules in §18.5 and retain every earlier version |

### 18.3 New completion findings — fold into F6/F7, no new parent

| Review ID | Finding | Guaranteed failure | Draft repair |
|---|---|---|---|
| `B068-R39` | `D-176`'s heading says it closes `B068-R23`, while its Gaps and Scope limits correctly keep R23 open for F6 | One reader closes R23 and another drafts it, so F7 can propagate two statuses | Correct the heading/status reference in the next Lane A decision; close R23 only when §18.4's route-basis behavior lands |
| `B068-R40` | Crosswalk §5 calls F4 success met while explicitly deferring executable `R`/`A` and milestone children | “Propagation-complete” can be mistaken for “build-ready,” authorizing operations nobody can execute or complete | Preserve F4 completion but add a build-readiness rule: every enabled route must resolve every required/triggered operation's executor, accountability and atomic completion contract before fresh authorization |
| `B068-R41` | A parallel T5 has two accountable review records but the current transition model records one executor for one T5 state change | The second review disappears, the last finisher is falsely treated as sole executor, or two T5 transitions create an extra gate | Model sibling T5 review acts separately, followed by one non-judgment aggregation/join that completes the single T5 stage |
| `B068-R42` | External GRC is described both as an initiating trigger and as later acceptance/mandate evidence | The app can demand acceptance before internal work exists, or publish before a binding external condition is satisfied | Separate `external_trigger_record` from `external_acceptance_or_mandate_record`; each route states which is required and when |

### 18.4 F6 parent contract — evidence flow and gate behavior

The terms below are **behavioral concepts**, not approved table, column, API or UI names.

| Stage | Entry evidence | Permitted judgment/executor | Completion evidence | Refusal condition |
|---|---|---|---|---|
| Route entry/reclassification | Work order plus initial-route or risk/external-trigger evidence | Governed route selector records the route; no editorial gate is executed | Append-only route-selection event; applicable `OP-CRISIS` disposition when required/triggered by F4 | Prior route is overwritten; required crisis/external-trigger evidence is absent |
| EW start | Work order and completed route entry | Senior Journalist emits the start trigger; no editorial judgment | Append-only start event linked to route and work order | Trigger attempts to advance or bypass T1–T4 |
| `EG1` / T1 | EW-start event; `OP-PITCH` complete when route-required | Reporter agent assesses daily/source relevance and records the route-specific basis | Logged source/brief, subject, trend signal and route basis | Required pitch evidence missing or route not selected |
| `EG2` / T2+T3 | Applicable `OP-RESEARCH` complete, or explicit not-applicable/untriggered disposition | Investigator agent validates source, then evidence as two distinct judgments | Reliability, fact/source anchors, gaps and investigation disposition | Required/triggered research incomplete; milestone placeholder presented as complete |
| `EG3` / T4 | Applicable `OP-DRAFT` or `OP-COMPLEX-SERIES` completion | Journalist agent produces the draft and meaning-invariance evidence | Versioned draft, sources, checklist and unresolved issues | `A`/`R` unknown for an enabled operation, or complex-series children undecomposed |
| `EG4` / T5 | All applicable pre-T5 operations complete, including copy edit, legal-risk and final-signoff conditions from F4 | Production route: assigned single reviewer. Fallout/GRC route: Chief Editorial Desk and Chief Journalist as separate parallel reviewers | One sealed review per required reviewer, plus a deterministic all-required join completing the single T5 stage | Missing required review; one review overwrites another; first result wins; same identity fills prohibited adjacent roles |
| `EG5` / T6 | Complete sealed T5 review set; Chief Editor preliminary disposition sealed before reveal; required external trigger/mandate evidence linked | Human Chief Editor only; records the final internal disposition within external constraints | Preliminary disposition, bundle reveal, final decision/reason, Line-separation proof and any return scope | Agent attempts T6; reveal occurs early; required T5/external evidence absent; Chief Editor identity matches a prohibited T5 executor |
| Delivery | Approved T6 disposition and any route-required external acceptance | System executor only; no editorial authority | Target outcome/failure linked to the immutable approved disposition | Delivery attempts to alter judgment, reason, route evidence or external authority record |

#### Route-basis semantics closing `B068-R23`

| Route family | `newsworthiness_disposition` evidence basis | Accountable source |
|---|---|---|
| `ROUTE-PROD-1` | Daily relevance and “news versus fade” evidence | Chief Editorial Desk T5 report; Chief Editor T6 disposition |
| `ROUTE-PROD-2` / `ROUTE-PROD-3` | Trend-over-fade, enterprise or investigative significance | Chief Journalist T5 report; Chief Editor T6 disposition |
| `ROUTE-FALLOUT-1` / `ROUTE-FALLOUT-2` | Legal/defamation, correction/retraction, remediation and reputational evidence | Both T5 reports; Chief Editor is internally accountable at T6 |
| `ROUTE-FALLOUT-3` / `ROUTE-GRC` | Judicial/GRC institutional finding, acceptance or mandate, plus both internal T5 briefs | `EXT-GRC` supplies external `EA` evidence; Chief Editor records the constrained internal T6 disposition |

“Newsworthiness” is therefore the **decision outcome family**, not a claim that legal remediation or
regulatory authority is a popularity score. The route and evidence basis remain mandatory fields in
the decision record.

#### Parallel T5 aggregation closing `B068-R41`

For each required T5 reviewer, record one separately attributable, immutable judgment act with its
role, executor identity, evidence anchors, recommendation, reason and sealed time. When every required
act for the route exists, a deterministic **non-judgment join** marks T5 complete. The join neither
chooses a winner nor impersonates a reviewer. T6's Line-separation proof is satisfied only when the
human Chief Editor identity is distinct from every required T5 reviewer and the full review set exists.

This preserves one logical T5 gate while retaining both reviewers. F6 must not solve the problem by
adding a sixth editorial gate or by storing only the last finisher on the T5 transition.

### 18.5 F6 child contract — blind review, returns and authority

#### Canonical blind-review order

1. every required T5 review is sealed;
2. the human Chief Editor reviews the underlying evidence **without** seeing the T5 recommendations
   and seals `EG5_preliminary_disposition_sealed` with a reason;
3. `T5_review_bundle_revealed_to_EG5` reveals the complete required review set;
4. the human records `EG5_final_decision_recorded`, confirming, changing with reason, holding,
   rejecting, or returning the work.

No other live reveal-event name is permitted. A label saying “blind” without this stored ordering is
not evidence of blind review.

#### Recommended return/rerun rule for `B068-R36`

| Return cause | Required invalidation and rerun |
|---|---|
| Defect belongs only to one T5 review and shared evidence/route are unchanged | Rerun that reviewer; create a new bundle version referencing the unchanged sealed sibling report |
| Defect changes shared evidence, draft, applicable operation, route, or external record | Invalidate the current bundle for forward use; rerun affected upstream work and every T5 review required by the resulting route |
| Route changes | Recompute F4 applicability/cardinality; never carry a prior route's T5 sufficiency forward silently |
| Chief Editor changes only the final disposition after reveal | Append a new reasoned T6 disposition if authority permits; do not rewrite T5 reports or the earlier preliminary/final records |

Every return records scope, reason, evidence version, invalidated forward artifacts and required rerun
set. Old reports and bundles remain retrievable and are never presented as the currently valid set.

#### External-authority order for `B068-R26`/`R42`

1. An initiating judicial/GRC record is stored as `external_trigger_record` and may select or
   reclassify the route; it is not an application judgment.
2. Internal operations and T1–T5 produce their own evidence without impersonating the institution.
3. The Chief Editor records the human T6 internal disposition. A binding external mandate constrains
   the available disposition but does not become the human executor.
4. Where the route requires later external acceptance, Delivery remains blocked until the separate
   `external_acceptance_or_mandate_record` exists.
5. Internal `O` may append a reasoned change to an existing internal decision only. It cannot erase
   work, supply missing evidence, replace `EA`, or override an external mandate.

### 18.6 Candidate F6 acceptance behavior

Lane A should assign final governed AC identifiers during propagation; these local labels avoid
colliding with existing `AC-*` rows.

| Draft check | Required outcome |
|---|---|
| `F6-AC-A` — EW start | Senior Journalist trigger is logged but cannot itself advance a gate |
| `F6-AC-B` — operation evidence | A required/triggered operation without completion evidence blocks its consuming gate |
| `F6-AC-C` — held work design | Unknown executor/accountability or undecomposed required milestone refuses executable/build-ready status |
| `F6-AC-D` — production T5 | Exactly the route-assigned reviewer report is required |
| `F6-AC-E` — fallout/GRC T5 | Both distinct reviewer reports are required; one alone cannot complete T5 |
| `F6-AC-F` — aggregation | One non-judgment join completes T5 without erasing either reviewer or adding a gate |
| `F6-AC-G` — blind sequence | Preliminary T6 disposition precedes bundle reveal, which precedes final decision |
| `F6-AC-H` — T6 executor | Agent attempt at T6 is refused; human identity must differ from every required T5 executor |
| `F6-AC-I` — disagreement | Conflicting T5 reports remain visible and are resolved only by the reasoned human T6 disposition |
| `F6-AC-J` — return | Return scope deterministically identifies preserved versus invalidated evidence and the rerun set |
| `F6-AC-K` — external authority | Internal override cannot satisfy, replace or contradict required `EA`; trigger and acceptance records remain distinct |
| `F6-AC-L` — Delivery | System action refuses any mutation of editorial judgment or authority evidence |

F6 is complete when these behaviors are owned by Product Requirements/Fn_Specs, current-versus-target
language is explicit, and each deliberate failure has one deterministic refusal or audit proof.

### 18.7 `R37` housekeeping and `F7` closure

After F6 is decided, Lane A performs one propagation pass:

1. correct `D-176`'s heading/status contradiction for R23 (`B068-R39`) and `D-175`'s reveal-event typo
   (`B068-R35`) through a new correcting decision; do not edit historical reasoning into appearing
   as though it was never wrong;
2. mark B-068 §§9–14 and §17's pre-`D-176` F4 rows as historical/superseded where later decisions
   changed their status (`B068-R37`);
3. update the three V1 tracking artifacts together where `D-54` applies, then update the owning
   Product Requirements user stories, FR-04/FR-05, AC-05–AC-08, G-02/G-05, SEC-01, RACI §2.1/§3,
   FN-GATES and the S2 Build Spec contract; preserve `[V1]` history through an explicit amendment/
   supersession marker rather than an unmarked rewrite;
4. state plainly that F4 is propagation-complete but its confirmed placeholders remain build holds
   (`B068-R40`); no fresh authorization may enable an affected route until its required operation
   work design is executable;
5. update configuration/log terminology only where the decided behavior requires it; preserve five
   judgment stages, six forward transitions and route-dependent T5 execution cardinality as separate
   measures;
6. rebuild Graphify after the final source edit and curated-fragment merge, run `portable-check`, and
   prove `.graphify/branch.json.lastAnalyzedHead` equals the final Git HEAD;
7. run the full local consistency suite and an independent review that deliberately attempts every
   §18.6 failure; and
8. only then mark B-068 terminal and request a separate fresh build authorization.

**Current graph check:** the graph was synchronized at source commit `61113bc`, but the subsequent
curated-fragment commit is current HEAD `ada998d`; `.graphify/branch.json.lastAnalyzedHead` still reads
`61113bc`. The earlier 17/17 result is valid evidence for its tested commit, not for the current HEAD.
F7 must synchronize again after its own final source/fragment commit.

### 18.8 Failure-derived success criteria

| Deliberate failure | Required rejection/proof |
|---|---|
| “Newsworthiness” lacks route/evidence basis | Decision validation refuses the record |
| A held F4 placeholder is treated as executable | Build-readiness check refuses authorization without resolved `R`, `A` and atomic completion |
| Two parallel reviewers are collapsed into one executor | T5 evidence/cardinality check fails |
| Two T5 reviews create two sequential gates | Gate-count/transition check fails |
| T6 begins before every required T5 review is sealed | All-required join refuses T6 |
| T5 recommendation is revealed before human preliminary disposition | Blind-order proof fails |
| Return leaves stale evidence marked current | Bundle-version/rerun check fails |
| External trigger and external acceptance are one mutable record | Authority-provenance check fails |
| `O` replaces or overrides `EA` | Authorization refuses the action and preserves both histories |
| An operation is complete but no gate consumes its evidence | Traceability review rejects F6/F7 closure |
| Historical §14/§17 guidance remains unqualified | R37 housekeeping review rejects F7 |
| Graph analyzed HEAD differs from final Git HEAD | `docs-drift` fails; B-068 remains open |

### 18.9 Approve / reject summary

| Decision | Tier | Follow-up phase |
|---|---|---|
| **Approve** — F4 complete for Lane A propagation | Decision Register / governance crosswalk | Preserve `D-176`; do not reopen applicability or placeholders |
| **Approve-with-conditions** — F6 behavior/acceptance draft | Product Requirements / Fn_Specs / RACI / Build Spec | Lane A decides §18.4–§18.6 and closes R23/R26/R27/R35/R36/R39/R41/R42 |
| **Approve-with-conditions** — F4 placeholder boundary | Build-readiness / fresh authorization | Resolve or exclude every required operation with unknown executor/accountability or milestone children |
| **Reject verification** — R37/F7/B-068 closure now | Tracking / handoff / Graphify | Historical marking, propagation, final graph sync and independent review remain open |
| **Defer** — implementation and fresh build authorization | Lane B code/schema/UI/tests | Only after F7 and separate authorization |

## 19. `R37` and `F7` propagation plan after `D-177`

### 19.1 Normalized request and evidence boundary

> Preserve `D-177`'s adopted F6 business behavior, correct only the completion defects that would
> make its propagation internally inconsistent, mark superseded B-068 guidance as historical, and
> propagate the resulting target contract once through its owning tracking, Product Requirements,
> Fn_Specs, RACI and build-planning documents. Then synchronize Graphify at the final commit and obtain
> independent verification. Build nothing and issue no fresh build authorization.

The pasted Lane A report is historical evidence, not the live state. Its push warning is now stale:
local `HEAD` and `origin/docs/journal-2026-08-16` both resolve to `18a7690`. Its 17/17 statement applies
to the analyzed source commit, not the final fragment commit: `.graphify/branch.json` records
`lastAnalyzedHead = 77cacd3`, while Git `HEAD = 18a7690`; the full local suite therefore reports
**16 passes and one failure, `docs-drift`**.

| Layer | Current evidence | Disposition |
|---|---|---|
| F6 parent decision | `D-177` is committed and its curated `frag113` exists | Preserve; do not re-litigate F4 or F6 business choices |
| `R37` | §§9–13 carry historical labels, but §14 still says “Current” and §17 remains an unqualified completion guide | Open housekeeping |
| F7 source propagation | `Modular_PRD`, `FN-GATES`, RACI §2.1/§3 and S2 still state the held old order | Not started |
| V1 artifact inventory | The crosswalk row still says the route-operation join is empty and awaits six decisions | Stale after `D-176` |
| Graph semantic content | `D-177`'s curated node is present | Useful but not currency proof |
| Graph commit currency | Analyzed `77cacd3`; final Git commit `18a7690` | Fails `docs-drift`; `B068-R38` remains open |
| Graph portability | Full runtime `portable-check` still reports ignored machine-local paths, the standing `B-041` limit | Not a new F7 blocker unless `.graphify/` runtime files are proposed for commit; fragments must remain portable |
| Build authorization | `D-171` hold remains | Defer; outside F7 |

No further Chief Editor business clarification is needed for this plan. The remaining corrections are
specification ownership, event cardinality, historical marking, propagation and proof.

### 19.2 Correct the parent before propagating it

These findings belong inside F7; they do not create another parent workstream.

| Review ID | Gap | Guaranteed failure | Draft correction |
|---|---|---|---|
| `B068-R43` | `D-177` calls the blind-review protocol “four events,” but a production route emits one T5-review event and a fallout/GRC route emits two; the deterministic bundle join is also an event that must be provable | A fixed four-event assertion either drops one parallel reviewer, hides the join, or passes without proving which sealed review set was revealed | Correct the register first: govern a **route-dependent event sequence**, not a fixed event count — one event per required sealed T5 review, one `T5_review_bundle_sealed` non-judgment join event, `EG5_preliminary_disposition_sealed`, `T5_review_bundle_revealed_to_EG5`, then `EG5_final_decision_recorded`. Preserve the order and behavior already approved by `D-177` |
| `B068-R44` | The twelve `F6-AC-*` behaviors do not all belong to FR-04/FR-05 or AC-05–AC-08: EW start, cross-gate operation evidence, returns, external authority and Delivery have different feature owners | F7 either omits accepted behavior or hides unrelated requirements inside S2, corrupting dependencies and tests | Add an acceptance-ownership crosswalk in the correcting decision, then propagate each behavior to its owning FR/Fn_Spec; preserve existing AC numbers with suffix IDs where needed rather than renumbering AC-09 onward |
| `B068-R45` | `V1-ARTIFACT-INVENTORY.md` still says the F4 join is empty and the six decisions are outstanding | The three V1 tracking artifacts report mutually exclusive F4 states, so D-54 propagation and closure evidence fail | Update the existing inventory row in the F7 pass: the crosswalk exists, its applicability join is decided by `D-176`, and its conservative executable-design placeholders remain build holds. Propagate the fact, not a duplicated row count |
| `B068-R46` | §18.7 suggests an explicit `[V1→V2]` marker, but no V2 build exists; `D-36` defines that marker as a material V2 revision | A planning correction is mislabeled as delivered V2 behavior, while the held current/target distinction disappears | Keep the existing `[V1]` sections as historical current-build evidence and add an explicitly sourced **V1 target-contract amendment, build-held** section/pointer. Use `[V1→V2]` only when a V2 build actually performs that revision |

#### Acceptance ownership for `B068-R44`

| Adopted draft behavior | Owning destination during F7 | Identifier rule |
|---|---|---|
| `F6-AC-A` — EW start trigger | `FR-01` / `FN-GATES` intake boundary | Add a suffixed FR-01 acceptance criterion; do not call the trigger a gate |
| `F6-AC-B` — operation evidence consumed by a gate | The FR for each consuming gate, with the shared overlay in `FN-GATES` | One shared rule plus owner-specific references; do not duplicate the whole matrix |
| `F6-AC-C` — unresolved operation design blocks readiness | `V1-BUILD-SPEC` readiness/authorization DoD | Planning refusal, not a false runtime product AC |
| `F6-AC-D`–`F` — T5 role, cardinality and join | `FR-04`; AC-05/AC-06 family; `FN-GATES` | Preserve AC-05/AC-06 and use suffixes for additional cases |
| `F6-AC-G`–`I` — blind order, human T6 and disagreement | `FR-05`; AC-07/AC-08 family; `FN-GATES` | Preserve AC-07/AC-08 and use suffixes; include the R43 bundle-seal event |
| `F6-AC-J` — scoped return/rerun | `FR-06`; `FN-EXCEPTIONS-06-11-12.md` | Reference the T5 bundle contract; do not duplicate it |
| `F6-AC-K` — external trigger/acceptance and `EA` boundary | `FR-13` where retraction applies; otherwise the Product Requirements owner for GRC-route acceptance; exceptions/publication Fn_Spec as applicable | Do not bury external institutional authority inside FR-05 independence |
| `F6-AC-L` — Delivery cannot mutate judgment | `FR-09`/`FR-10`; `FN-PUBLICATION-09-10-13.md` | Delivery refusal belongs to publication behavior, not an editorial gate |

### 19.3 `R37` — smallest safe historical marking

Do not rewrite old analysis to make it appear it was always correct. Add one reading-order notice
before §9 and local banners only where the headings still imply currency:

> **Reading order after `D-177`.** §§9–14 and §17 are retained as historical critic/drafting evidence.
> Where they conflict with `D-175`, `D-176` or `D-177`, the later Decision Register entry governs.
> Section 18 records the adopted F6 source draft; §19 is the current R37/F7 completion plan. Historical
> rows are not implementation instructions and do not reopen closed findings.

Then:

1. rename §14 to **Historical route-operation decision draft — decided by `D-176` and extended by
   `D-177`**;
2. rename §17 to **Historical completion guide after `D-175` — F4/F6 superseded by `D-176`/`D-177`**;
3. keep §§9–13's existing historical headings and add no repeated status prose; and
4. preserve §15/§16's ontology and business-governance distinctions where they remain consistent with
   `D-175`–`D-177`.

`R37` succeeds when a reader cannot mistake an old alias, empty crosswalk, open F6 item or old graph
hash for current guidance, while the original critic evidence remains auditable.

### 19.4 F7 parent-first propagation order

#### Parent 1 — correcting/propagation decision and the V1 tracking set

1. Add one Decision Register entry correcting `B068-R43`, assigning `B068-R44`'s owners, recording
   `B068-R45`/`R46`, and declaring the exact F7 propagation set. It extends `D-177`; it does not replace
   the accepted business behavior.
2. Rewrite the S2 target DoD in `V1-BUILD-SPEC.md`: route-dependent T5 reviewer cardinality, separately
   attributable reviews, non-judgment bundle join, human-only T6, blind sequence, scoped returns,
   external-authority order, operation-evidence consumption and the unresolved-operation build hold.
   Keep `D-171`'s no-build hold and state that this target DoD is not authorization.
3. Correct `V1-ARTIFACT-INVENTORY.md`'s stale crosswalk row per `B068-R45`. No new artifact is created;
   all existing artifacts remain listed.
4. State that `V1-PHASE-CLOSURE.md` is unaffected: F7 does not close the phase or authorize a sprint.

#### Parent 2 — Product Requirements and living behavior specs

1. In `Modular_PRD.md`, correct §2.3/§2.3.1's alias and executor text, US-04/US-05, FR-04/FR-05,
   SEC-01, G-02/G-05, AC-05–AC-08 and §8's S2/M2 status. Remove every statement that says T5 belongs
   to the human Chief Editor, T6 belongs to a Chief Journalist agent, or S2 is currently buildable.
2. Add references from the other owning Product Requirements identified in §19.2; do not force all
   twelve behaviors into FR-04/FR-05.
3. In `FN-GATES-01-05.md`, retain §§1–10 as `[V1]` historical current-build evidence and add the
   explicit V1 target-contract/build-held amendment required by `B068-R46`. Replace §11's now-stale
   “F6 blocked on F4” note. Route return, external-authority and Delivery behavior to their existing
   feature-group Fn_Specs rather than copying the entire contract.
4. In `raci-involvement-matrix.md` §2.1/§3, replace the held old successor proof with the target proof:
   T4 executor differs from every required T5 reviewer; each T5 review is attributable; the join has
   no editorial `A`; the human T6 executor differs from every required T5 executor; disagreement is
   preserved for T6 rather than resolved by the join. Keep factory-route `A`, factory-operation RACI,
   `O` and external `EA` in their separate scopes.

#### Parent 3 — terminology coupling without an unauthorized code change

Record three different measures wherever needed: **five editorial judgment stages** (`EG1`–`EG5`),
**six forward editorial transitions** (`T1`–`T6`), and **route-dependent T5 review-act cardinality**
(one or two). Do not use “gate count,” “transition count” and “reviewer count” interchangeably.

`CONFIG_LOG.md` and `lib/config/build-config.ts` are currently coupled around the historical
`PIPELINE_GATE_COUNT` name. F7 may record the target naming defect and later migration requirement,
but must not rename only the document or only the code. The coupled rename/addition belongs to a
separately authorized Lane A→Lane B change after the S2 hold is lifted.

#### Parent 4 — Graphify and closure evidence

1. Make the source and curated-fragment changes, then commit them.
2. At that final commit run Graphify's update/rebuild, re-merge all curated fragments, and confirm the
   `D-177`/correcting-decision nodes and links remain present.
3. Prove `lastAnalyzedHead` equals final Git `HEAD`; `stale: false` alone is not evidence.
4. Run the portability check and apply `B-041`'s standing distinction: stage no `.graphify/` runtime
   artifacts, and confirm every proposed `docs/graph-fragments/*` artifact contains no absolute path.
5. Run the full local consistency suite. F7 requires every check to pass; the present result is one
   failure (`docs-drift`), not 17/17 at final HEAD.
6. Lane A may then mark B-068 `Applied` with the commit and evidence. A different actor performs a
   separate-turn review against that same commit, deliberately exercises the failure cases below,
   and only that actor may set `Verified-By`, `Verified-At-Commit`, `Resolution: Verified`, and the
   terminal Status. Fresh build authorization remains a later decision.

### 19.5 Failure-derived F7 success criteria

| Deliberate failure | Required result |
|---|---|
| A fallout route is forced into a fixed four-event model | Rejected: both review acts and the bundle-seal join must be individually provable before preliminary T6 disposition |
| A candidate acceptance behavior is assigned to the wrong FR merely to fit AC-05–AC-08 | Traceability review fails and names the correct owning feature group |
| `V1-ARTIFACT-INVENTORY` still says the F4 join is empty | D-54/V1 tracking review fails |
| `Modular_PRD` still calls Chief Journalist an alias of Chief Editorial Desk | Ontology review fails |
| Any current Product Requirements row still says human T5, agent T6 or S2 “buildable now” | Current/target and authorization review fails |
| A `[V1→V2]` marker is used although no V2 build performed the change | D-36 provenance review fails |
| Two T5 reviews overwrite one executor field or create two gates | Cardinality/gate-count proof fails |
| The bundle is revealed without a named sealed-bundle event tied to its review set | Blind-order proof fails |
| A return leaves an invalidated bundle current | Rerun/version proof fails |
| An internal override replaces required `EA` | Authority check refuses it and retains both histories |
| A held operation placeholder is treated as executable | Build-readiness authorization fails |
| A historical B-068 row is readable as current guidance without a later-decision pointer | R37 review fails |
| `lastAnalyzedHead` differs from final Git `HEAD` | `docs-drift` fails; B-068 remains Open/Applied, never Verified |
| Lane A verifies its own propagation | Handoff closure review fails; `Applied` is the maximum earned state |

### 19.6 Approve / reject summary

| Decision | Tier | Follow-up phase |
|---|---|---|
| **Approve** — preserve `D-177`'s F6 business behavior and `D-176`'s F4 decisions | Decision Register / governance | F7 extends; it does not reopen them |
| **Approve-with-conditions** — correct `R43`–`R46` before derived propagation | Decision Register / tracking | First action in F7 |
| **Approve-with-conditions** — perform R37 historical marking and F7 propagation | Handoff / V1 tracking / Product Requirements / Fn_Specs / RACI | Apply the §19.3–§19.4 sequence, then record `Applied` |
| **Reject verification** — current B-068 closure or “17/17 at final HEAD” | Handoff / Graphify | Source owners remain stale and `docs-drift` currently fails |
| **Defer** — config/code migration, implementation and fresh build authorization | Lane A→Lane B / S2 | Only after F7 is independently `Verified` and a separate authorization is issued |

## 20. Independent review of `D-178` — F7 is partially applied, not verified

### 20.1 Verdict and normalized scope

> Independently test whether `D-178` applied §19's F7 contract to every owning specification, preserved
> the no-build boundary, synchronized Graphify at the final commit, and earned B-068 `Verified`. Accept
> correct work, identify only residual gaps, and draft the smallest parent-first repair. Do not build.

**Verdict: keep `Status: Answered` and `Resolution: Applied`; reject `Verified`.** `D-178` correctly
repairs the fixed-event-count defect, the inventory row, the stale alias, the build hold, and R37's
historical headings. It does not complete the F7 propagation it claims: the acceptance-ownership map
was recorded in the Decision Register but not carried into several owning Product Requirements/
Fn_Specs; RACI's target proof was deferred despite being an explicit F7 dependency; operative rows
still state the old T5/T6 contract; and Graphify is behind the final fragment commit.

This review separates four different states that must not be conflated:

| State | Meaning | Current result |
|---|---|---|
| **Decided** | The register selects the target behavior | Pass for `D-178`'s event sequence and ownership map |
| **Propagated** | Each owning specification carries its part of that behavior | Fail — pointer-only or absent in several owners |
| **Build-ready/authorized** | Executable work design is complete and a fresh authorization exists | Correctly deferred; no build authorization |
| **Verified** | A separate actor proves propagation and graph currency at one final commit | Fail in this review |

### 20.2 Evidence — what passes and what fails

| Review surface | Independent result | Evidence |
|---|---|---|
| `B068-R43` event cardinality | **Pass as a decision/target DoD** | `D-178` and S2 name one review event per required reviewer, one bundle-seal join, preliminary disposition, reveal, then final decision |
| `B068-R45` artifact inventory | **Pass** | The crosswalk row now says the join was decided by `D-176` and retains unresolved operation-shape build holds |
| `B068-R46` version marking | **Pass** | No unauthorized `[V1→V2]` marker was introduced |
| `B068-R37` history marking | **Pass** | Reading-order notice exists; §14/§17 are labelled historical |
| S2 authorization boundary | **Pass** | Build Spec and Modular PRD state neither order is currently authorized |
| `B068-R44` acceptance ownership | **Fail propagation** | `D-178` names the owners, but no governed suffixed ACs exist; `FN-EXCEPTIONS-06-11-12.md` and `FN-PUBLICATION-09-10-13.md` were not edited in the F7 commit |
| Product/Fn target semantics | **Fail normalization** | Live FR/AC/flow rows still say human Chief Editor at T5, Chief Journalist agent at T6 and agent refusal at T5; a later pointer says they are historical but the rows themselves remain the operative requirements |
| RACI successor proof | **Fail propagation** | §2.1/§3 still prove the old human-T5/agent-T6 order and explicitly defer the target proof, contrary to §19.4 Parent 2 item 4 |
| Graphify final currency | **Fail** | `.graphify/branch.json.lastAnalyzedHead = 3b735ba`; final Git `HEAD = d642c06`; full local suite reports only `docs-drift` failed |
| Remote handoff evidence | **Not complete** | The working branch is three commits ahead of `origin/docs/journal-2026-08-16`; the pasted “push succeeded” premise is not the live repository state |
| Applied evidence anchor | **Not final verification evidence** | `Verified-At-Commit: e6b29c4` names the source edit, not the later metadata/fragment commit, and cannot prove final graph currency |

### 20.3 Residual gaps — no reopening of passed work

| Review ID | Residual gap | Guaranteed failure | Draft repair |
|---|---|---|---|
| `B068-R47` | `D-178` treats an acceptance-ownership crosswalk and pointers as completed propagation | Tests are never given governed AC identifiers or owning requirement text; one implementer follows FR-05, another follows the register, and both can claim compliance | Add the actual target requirements/ACs to their owners: intake/gates, FR-04/FR-05, FR-06 exceptions, external authority, and FR-09/FR-10 Delivery. Use suffix IDs and references; do not duplicate the whole matrix |
| `B068-R48` | RACI §2.1/§3 target proof is deferred until the fresh-build-authorization pass | Authorization depends on a correct proof, while the proof waits for authorization — a circular gate that can only be broken by bypassing one side | Add a **target, build-held** RACI proof now. Preserve the old matrix as historical current-build evidence; the proof is planning/governance and authorizes no code |
| `B068-R49` | Annotation-only handling leaves current Product Requirements and Fn_Spec rows asserting the superseded T5/T6 order | Search, traceability tooling, and a build agent still retrieve direct old requirements; a note elsewhere cannot make two opposite normative rows simultaneously executable | Mark old rows explicitly `historical_current_documented_held` and add complete `decided_target_held` rows/ACs in the owning documents. Current requirement queries must return the target contract first and the old contract only as provenance |

`B068-R38` remains the existing Graphify-currency gap; do not mint a duplicate ID for it. The branch-
ahead state is closure evidence to resolve, not a new business or specification decision.

### 20.4 Parent-first repair packet

#### Parent 1 — one correcting propagation decision

Add a new register entry that:

1. accepts the independent review's passes without rewriting them;
2. corrects `D-178`'s “F7 propagated” claim to **F7 partially applied**;
3. closes `B068-R47`–`R49` only after their owning files are changed in the same pass; and
4. preserves `D-171`'s hold and the unresolved F4 operation-shape readiness holds.

#### Parent 2 — propagate behavior to the actual owners

1. **`Modular_PRD.md`:** retain the old contract as explicitly historical, then add the target
   `decided_target_held` US/FR/AC set. Assign suffixed AC IDs without renumbering AC-09 onward. The
   target rows must cover single/parallel T5 review, bundle seal, blind T6 order, wrong-executor
   refusal, disagreement, return, external authority and Delivery immutability through references to
   their owning FRs.
2. **`FN-GATES-01-05.md`:** add a V1 target-contract/build-held behavior and acceptance section rather
   than only a pointer. It owns EW start, consuming-gate evidence, T5 cardinality/join and blind T6.
3. **`FN-EXCEPTIONS-06-11-12.md`:** add FR-06's bundle-aware invalidation/rerun behavior and link the
   external-authority exception behavior it owns.
4. **`FN-PUBLICATION-09-10-13.md`:** add the Delivery mutation refusal and the external-acceptance
   prerequisite where publication/retraction consumes it.
5. **`raci-involvement-matrix.md`:** add a separate target/build-held §2.1 proof and target task matrix:
   T4 executor differs from every required T5 reviewer; each review remains attributable; the join has
   no editorial judgment or `A`; human T6 differs from every required T5 executor; disagreement remains
   visible for T6. Keep system-transition, factory-route, factory-operation, `O`, and `EA` scopes apart.

This is documentation propagation, not implementation. A fresh build authorization remains later and
must consume this proof; it must not create it.

#### Parent 3 — final synchronization and independent re-review

1. Commit the correcting source and fragment set, then run Graphify against that final commit and
   re-merge every curated fragment. Do not make another tracked commit afterwards unless Graphify is
   run again at the new HEAD.
2. Prove `lastAnalyzedHead = HEAD`, preserve the D-175–D-178 nodes/links, stage no `.graphify/` runtime
   files, and run the full local suite with every check passing.
3. Push the applied commit set so the remote handoff points at the evidence under review.
4. Keep B-068 `Applied`. A later separate Lane B review tests the final pushed commit; only a passing
   review may add `Verified-By`, replace `Verified-At-Commit` with that final commit, set
   `Resolution: Verified`, and move Status to a terminal verified state.

### 20.5 Failure-derived re-verification criteria

| Deliberate failure | Required rejection/proof |
|---|---|
| Delete the register's ownership crosswalk while leaving only pointers in owner specs | Traceability from each target AC to an owning FR/Fn_Spec fails |
| Search an owning Fn_Spec for return, external-authority or Delivery behavior | Each behavior is found in its owner; absence rejects F7 |
| Read only the direct FR/AC rows, ignoring correction prose | The target contract is still unambiguous; old rows are explicitly historical/held |
| Read RACI §2.1/§3 without the title-block note | A target/build-held proof still exists and does not assert human T5/agent T6 |
| Treat the non-judgment bundle join as a reviewer or accountable role | RACI/behavior proof rejects it |
| Reveal a bundle not tied to every route-required sealed review | Blind-order acceptance fails |
| Authorize S2 because the target specification now exists | Build-readiness check refuses; specification is not authorization |
| Verify commit `e6b29c4` while the reviewed final tree is later | Verification-anchor review fails |
| Leave the branch ahead of origin and call remote handoff complete | Handoff evidence review fails |
| Analyze any commit other than final Git HEAD | `docs-drift` fails and B-068 remains `Applied` |

### 20.6 Independent approve / reject summary

| Decision | Tier | Follow-up phase |
|---|---|---|
| **Approve** — `D-178` event-sequence correction, inventory correction, version boundary and R37 marking | Decision Register / Build Spec / Inventory / handoff | Preserve; no repeat work |
| **Approve-with-conditions** — F7's remaining propagation | Product Requirements / Fn_Specs / RACI | Apply `B068-R47`–`R49` in one Lane A pass |
| **Reject verification** — B-068 terminal closure | Handoff / Graphify | Owner specs and RACI remain incomplete; Graphify is stale at final HEAD |
| **Defer** — implementation, config/code rename and fresh S2 authorization | Lane A→Lane B / S2 | Only after corrected F7 is pushed and independently verified |


## 21. Independent re-review of `D-179` — substantive propagation, residual defects

### 21.1 Verdict

> Re-perform §20's failure tests against the final pushed `D-179` tree. Verify actual target content,
> authority separation, requirement ownership, build-held status, Graphify currency and the final
> evidence anchor. Mark B-068 `Verified` only if every test passes. Build nothing.

**Verdict: keep `Status: Answered` and `Resolution: Applied`; reject `Verified`.** The branch is now
pushed and `D-179` supplies real target text in the five owner files. It correctly resolves the
pointer-only defect and the proof-versus-authorization circularity. Three residual specification
defects and the existing Graphify-currency gap remain; none requires a new Chief Editor business
choice.

| Review layer | Result | Evidence |
|---|---|---|
| Remote handoff | **Pass** | Local and `origin/docs/journal-2026-08-16` both resolve to `a506db7` |
| Historical/target split | **Pass in US/FR/AC rows** | Old rows are explicitly historical/held; target rows are `decided_target_held` |
| Owner-file content | **Pass for presence** | Gate, exception, publication and RACI target sections now contain behavior, not only pointers |
| No-build boundary | **Pass** | Every new target section preserves `D-171`'s hold |
| Acceptance ownership/completeness | **Fail** | Several adopted `F6-AC-*` behaviors have no governed Product AC; scoped return is still linked to `FR-05a`, not its decided `FR-06` owner |
| Target metrics/security | **Fail** | `G-05`, `SEC-01` and `SEC-03` still state the old human-T5/agent-T6 model without target rows |
| Target RACI shape | **Fail** | One fallout/GRC T5 task carries two Responsible roles although the same matrix requires exactly one R per task; §4 still says T5 is Line 2 |
| Graphify final currency | **Fail** | Analyzed `73a205d`; final Git HEAD `a506db7`; full suite fails only `docs-drift` |
| Verification anchor | **Not yet eligible** | `Verified-At-Commit: 84dfb21` is the source commit, not a final independently passing commit |

### 21.2 Residual findings — smallest non-duplicative set

| Review ID | Gap | Guaranteed failure | Draft repair |
|---|---|---|---|
| `B068-R50` | D-179 added six target Product ACs, but the adopted EW-start, cross-gate evidence, external-authority and Delivery acceptance behaviors remain only in Fn_Spec prose; `AC-08a`'s return behavior is linked to `FR-05a` instead of its decided `FR-06` owner. Target US dependencies also point to historical US rows | Requirement queries cannot trace every adopted acceptance behavior to a Product FR/AC; a return implementation follows independence instead of exceptions; the target story chain traverses superseded requirements | Add suffixed Product ACs under the decided owners without renumbering existing IDs; move/supersede the return AC under FR-06; make `US-04a` depend on `US-03` and `US-05a` on `US-04a` |
| `B068-R51` | The Product target rows changed the gate order, but `G-05`, its instrumentation trigger, `SEC-01` and `SEC-03` still encode the old order | Metrics measure the wrong event; SEC-01 says R=A at T5 while the target makes R=A at T6; access-control planning grants Line 2 T5 and omits human T6 | Preserve old rows as historical/held and add target semantics: agreement is measured after the blind T6 sequence against the sealed T5 review set; target separation covers T4→each T5 reviewer and each T5 reviewer→T6; Line 2 executes T6/T11, not target T5 |
| `B068-R52` | The target RACI row models “both reviewers” as two R holders on one T5 task, contradicting its own “exactly one R per task” rule; the proof also labels `R(T4) ≠ R(T5)` as a T5→T6 boundary, and §4 retains the old Line placement unqualified | RACI loses its one-R invariant, attribution scope becomes ambiguous, and the proof can pass while comparing the wrong boundary | Model each required T5 review as its own sibling judgment task/act with exactly one R and one scoped A; let the non-judgment join alone complete the T5 stage with no R/A. Prove T4→each T5 act and each T5 act→T6 separately; add an explicit target §4 Line/RACI placement alongside the historical one |

`B068-R38` remains the sole Graphify gap; it is reused rather than duplicated. `B068-R47`–`R49`
remain materially answered by D-179 and are not reopened — R50–R52 are defects in the new target
content itself.

### 21.3 Parent-first correction plan

#### Parent 1 — one correcting decision

Record a new Lane A decision that accepts D-179's valid propagation, corrects only R50–R52, and
preserves D-171's hold. Do not call F7 complete until the source changes below land in the same pass.

#### Parent 2 — finish Product ownership and target semantics

1. Add governed target ACs for the accepted behaviors still represented only in Fn_Spec prose:
   EW start under FR-01; consuming-gate evidence under the applicable gate FRs; scoped return under
   FR-06; external authority under its GRC/retraction owner; Delivery mutation refusal under
   FR-09/FR-10. Suffix IDs are preferred; AC-09 onward is not renumbered.
2. Mark `AC-08a` superseded by the FR-06-owned return criterion, or correct its owner with explicit
   provenance. Do not leave the same return behavior live under two FRs.
3. Correct target story dependencies: `US-04a → US-03`; `US-05a → US-04a`.
4. Add target/held metric and security rows or explicit target clauses:
   - `G-02`: only the target T6 Line crossing can be `satisfied`;
   - `G-05`: compare the sealed human preliminary disposition with the sealed T5 recommendation set
     after reveal, retaining per-reviewer disagreement; evaluate at T6, not T5;
   - `SEC-01`: require identity separation across T4→each T5 act and each T5 act→T6; target R=A is at
     T6, not T5;
   - `SEC-03`: target Line 2 execution is T6/T11; target T5 reviewers remain Line 1.

#### Parent 3 — repair the RACI task boundary

Replace the one fallout/GRC row with route-conditioned sibling review acts. Each act has one R, one
scoped A, its own evidence and seal event. The T5 bundle join has no R, no A and no judgment; it merely
confirms the route-required act set and completes the single logical stage. Update the proof and §4's
target Line/RACI statements without erasing the historical matrix.

#### Parent 4 — synchronize and re-verify once

Commit the corrected source and fragment set, push it, then run Graphify at that final commit and
re-merge curated fragments. If another tracked commit follows, synchronize again. Verification
requires `lastAnalyzedHead = HEAD`, all local checks passing, and an independent Lane B review of the
same final pushed commit. Only then replace the metadata with `Verified-By: Lane B`, the final commit,
`Resolution: Verified`, and a terminal verified Status.

### 21.4 Failure-derived re-review tests

| Deliberate failure | Required result |
|---|---|
| Remove the register and query only Product ACs for EW start, return, external authority or Delivery refusal | Every adopted behavior still resolves to an owning FR/AC; absence rejects F7 |
| Follow target user-story dependencies | The chain reaches current target/prerequisite stories, never a historical held story |
| Classify scoped T6 return as FR-05 independence | Traceability rejects it; return/rerun is owned by FR-06 |
| Evaluate G-05 at T5 | Metric definition rejects the event; the blind target comparison is available only through T6 |
| Reuse SEC-01's “R=A at T5” sentence for the target | Target security rule rejects it; R=A moves to human T6 |
| Assign Line 2 to target T5 through SEC-03 or RACI §4 | Target Line rule rejects it |
| Put both T5 reviewers in one RACI task row | Exactly-one-R validation fails; sibling acts are required |
| Treat the bundle join as R, A, reviewer or an additional gate | RACI/gate proof rejects it |
| Compare T4→T5 while claiming to prove T5→T6 | Boundary proof fails and names both required comparisons |
| Verify `84dfb21` or `73a205d` while final HEAD is later | Evidence-anchor/Graphify review fails |

### 21.5 Independent approve / reject summary

| Decision | Tier | Follow-up phase |
|---|---|---|
| **Approve** — preserve D-179's real owner-file content, historical/target split, pushed state and no-build hold | Product Requirements / Fn_Specs / RACI / handoff | No repeat work |
| **Approve-with-conditions** — finish R50–R52 | Product Requirements / metrics-security / RACI | One Lane A correction pass, then final graph sync |
| **Reject verification** — B-068 terminal closure | Handoff / Graphify | Target traceability, metric/security semantics, RACI cardinality and final graph currency still fail |
| **Defer** — implementation, config/code rename and fresh S2 authorization | Lane A→Lane B / S2 | Only after corrected F7 is pushed and independently verified |

## 22. Independent re-review of `D-180` — correction is substantive, verification still rejected

### 22.1 Verdict

**Keep `Status: Answered` and `Resolution: Applied`; reject `Verified`.** `D-180` correctly re-owns
`AC-08a`, repairs the target story dependencies, adds the target `G-05`/security clauses, separates the
two T5 reviewer identities into sibling acts, and gives `D-170` a useful lifecycle notice. Those facts
stand and must not be repeated.

Independent review of the actual final tree found four smaller defects in the new correction plus the
existing Graphify-currency failure. They require no new Chief Editor business choice; they are source,
identity, state-transition and propagation corrections.

| Review layer | Result | Evidence |
|---|---|---|
| `D-170` lifecycle notice | **Pass** | Retained/superseded clauses are distinguished without rewriting the historical body |
| `AC-08a` ownership and target story dependencies | **Pass** | `AC-08a → FR-06`; `US-04a → US-03`; `US-05a → US-04a` |
| Target `G-05`/security semantics | **Pass in the rows added** | `G-05a`, `SEC-01a`, and `SEC-03a` state the target T5/T6 model |
| R50 completion | **Fail** | Consuming-gate evidence still has no Product AC; `AC-01a` was reused for an unrelated behavior |
| R51 completion | **Fail** | The planned target `G-02` clause is absent; D-180 says four new rows but names three |
| R52 state-transition shape | **Fail** | Both parallel T5 acts claim `Drafted → Reviewed`; the join performs no state change |
| Graphify final currency | **Fail** | `lastAnalyzedHead = ac623da`; final HEAD = `3575307`; `docs-drift` fails |
| Final evidence anchor | **Not eligible** | `7e37919` is D-180's source commit, not a final independently passing tree |

### 22.2 Residual findings — smallest non-duplicative set

| Review ID | Gap | Guaranteed failure | Draft repair |
|---|---|---|---|
| `B068-R53` | R50 required a governed Product AC for consuming-gate evidence. D-180 leaves it only in `FN-GATES-01-05.md` §11.1 while claiming “four target ACs added” and naming three | A Product-only trace cannot prove that missing or placeholder operation evidence blocks a gate; F7 can appear complete only when the register/Fn_Spec is also read | Add one Product AC under an explicit applicable gate owner using a corpus-unique ID; reference §11.1 for elaboration rather than copying its table. Correct the false count language in D-180's successor notice, B-068's current-state correction, and the new graph fragment |
| `B068-R54` | D-180 uses `AC-01a` for the EW-start trigger, but `FN-GATES-01-05.md` already governs `AC-01a` as the analytical-tag criterion created by `G39` | One ID resolves to two unrelated behaviors; tests, traceability and graph queries cannot identify which acceptance condition `AC-01a` means | Preserve the existing analytical-tag `AC-01a`; rename the EW-start Product criterion to the next verified-unused suffix (candidate `AC-01b`, subject to a full-corpus uniqueness check), then repair FR-01, D-180's successor notice and every reference |
| `B068-R55` | B-068 §21.3 required target `G-02` semantics, but D-180 adds only `G-05a`, `SEC-01a`, and `SEC-03a` while saying “all four new rows” | The target can still be measured through the unqualified historical `G-02` wording, allowing T5 to be treated as a target Line crossing or leaving the only real target crossing implicit | Mark the historical `G-02` lifecycle explicitly and add one target-held clause: only T6 may be `satisfied`; T1–T5 and Delivery are `not_applicable`; a logged override remains `override_not_four_eyes` |
| `B068-R56` | R52 splits the reviewers but assigns both `T5a` and `T5b` the article transition `Drafted → Reviewed`, while the bundle join has “no state change” | Parallel acts race to perform one state transition; one succeeds and the other sees the wrong predecessor, or duplicate transitions are recorded. The join can seal a bundle without owning the stage completion it is meant to control | Make every T5 review act append its sealed judgment while article state remains `Drafted`; make the deterministic bundle completion perform the single `Drafted → Reviewed` transition only after the route-required act set is complete. The completion is a system transition with no editorial `R`/`A` or judgment |

`B068-R38` remains the existing Graphify-currency gap and is reused, not duplicated. `B068-R50`–`R52`
remain partially answered by D-180; `R53`–`R56` identify only defects introduced or left by that
correction.

### 22.3 Parent-first correction packet

#### Parent 1 — one correcting decision and current anchor

Record one Lane A decision that accepts D-180's valid portions, corrects `R53`–`R56`, preserves
`D-171`'s S2 hold, and supersedes D-180 as the sole current T5/T6 citation. Add a forward lifecycle
notice at D-180 rather than rewriting its historical body, and update D-170's notice to point to the
new current anchor.

#### Parent 2 — repair Product identity and acceptance ownership

1. Preserve the existing Fn_Spec `AC-01a` analytical-tag meaning.
2. Give EW start a verified-unused Product AC identifier and repair FR-01 plus all references.
3. Add one governed Product AC for the consuming-gate evidence/refusal rule, with an explicit FR owner
   and a reference to `FN-GATES-01-05.md` §11.1 for detail.
4. Correct every “four added”/“four new rows” sentence to name exactly what exists; never substitute a
   story-dependency correction for a missing AC.

#### Parent 3 — finish target measurement and T5 stage completion

1. Add the target-held `G-02` clause described in `R55`; preserve the old row as historical/held.
2. Keep `G-05a`, `SEC-01a`, and `SEC-03a` unchanged unless the new ID references require mechanical
   repair.
3. Model production and fallout/GRC review reports as T5 acts that do not change article state.
4. Let one deterministic system completion move `Drafted → Reviewed` after the required sealed set is
   complete; it remains non-judgmental and has no editorial `R`/`A`.

#### Parent 4 — synchronize once, then independently verify the same final tree

Commit and push the corrected source and curated fragment first. Run Graphify after that final tracked
commit; do not create another tracked graph-fragment commit afterward. Independent verification must
test the same pushed HEAD and requires `lastAnalyzedHead = HEAD`, the full local suite passing, and no
new semantic finding. Only then may Lane B change B-068/B-069 from `Applied` to `Verified` with the
final commit and independent verifier named.

### 22.4 Failure-derived success tests

| Deliberate failure | Required result |
|---|---|
| Query `AC-01a` without file context | It resolves only to the analytical-tag behavior; EW start has a distinct unique ID |
| Remove the register and Fn_Spec, then trace consuming-gate evidence from Product requirements | A governed Product AC still states that missing/placeholder required evidence refuses completion |
| Evaluate target `G-02` at T5 | The target clause rejects `satisfied`; T5 is `not_applicable` and only T6 is the Line crossing |
| Execute T5a and T5b concurrently | Both sealed acts persist without changing article state; exactly one later bundle completion moves `Drafted → Reviewed` |
| Complete the bundle with one required act missing | The state remains `Drafted`; completion is refused |
| Treat the bundle completion as a reviewer, judgment, `R`, or `A` | RACI and acceptance rules reject it |
| Cite D-170 or D-180 as the current implementation anchor | The lifecycle notice redirects to the new correcting decision |
| Verify commit `7e37919`, `ac623da`, or `3575307` after a later correction | Verification fails unless the cited commit is the final pushed HEAD and Graphify analyzed that same HEAD |

### 22.5 Independent approve / reject summary

| Decision | Tier | Follow-up phase |
|---|---|---|
| **Approve** — preserve D-180's valid re-ownership, dependency, target metric/security rows and D-170 notice | Product Requirements / metrics-security / Decision Register | No repeat work |
| **Approve-with-conditions** — correct `R53`–`R56` | Product Requirements / RACI / target measurement / Decision Register | One Lane A correction pass |
| **Reject verification** — B-068/B-069 terminal closure | Handoff / Graphify | Correct source, sync final HEAD, independent Lane B re-review |
| **Defer** — implementation and fresh S2 authorization | Lane A→Lane B / S2 | Only after F7 is independently verified |

### 22.6 Lane B feedback on Lane A's pre-application analysis

**Verdict: approve the P1→P4 dependency order as a plan; correct the write set before applying it.**
Lane A's repo/Graphify status, preservation of D-180's valid clauses, `D-181` as the next free decision
ID, and `AC-01b` as an unused candidate are accurate. The following changes are required:

1. **Do not create `B-070`.** `B-068` §22 is already the one handoff item and corrective packet.
   Lane A answers it; Lane A does not raise a new `B-NNN` entry on Lane B's behalf. A second file would
   duplicate the backlog item and violate the channel's one-file-per-item purpose.
2. **`Modular_PRD.md` owns the Product AC identifiers.** Rename the EW-start Product criterion there,
   add the consuming-gate Product AC there, repair FR references there, and add target `G-02` there.
   Do not create or reassign those Product IDs in `FN-GATES-01-05.md`.
3. **`FN-GATES-01-05.md` remains the behavioral elaboration.** Preserve its existing `[V1]`
   `AC-01a` analytical-tag row. Update only §11.1's target references and clarify that T5 review acts
   seal evidence without changing article state; one deterministic completion performs the state
   transition.
4. **`V1-ARTIFACT-INVENTORY.md` is unaffected.** Its own §1 rule says it changes only when a file is
   created or retired. An AC identifier is not a file artifact, and this correction needs no new file.
5. **`V1-BUILD-SPEC.md` is substantively affected, not merely re-cited.** Its target S2 DoD must say
   that the individual review acts do not change article state and that exactly one deterministic
   completion performs `Drafted → Reviewed` after the required sealed set exists. Preserve the hold.
6. **Name the consuming-evidence owner before application.** Use one Product AC scoped to the gate
   feature group (`FR-01`–`FR-05a`) and cite `FN-GATES-01-05.md` §11.1 for elaboration; do not duplicate
   one AC per gate or leave “own FR” as an unresolved placeholder.
7. **Final Graphify order must not recreate the current one-commit lag.** Commit and push the corrected
   source plus curated fragment first. Then rebuild the extracted graph at that HEAD, re-merge curated
   fragments into the local graph, run the full suite, and create no later tracked commit before the
   independent review. If a tracked commit follows, synchronize again.

This feedback approves planning only. It does not authorize source edits, implementation, a fresh S2
build, or terminal verification.

### 22.7 Lane B feedback on Lane A's revised plan

**Verdict: approve-with-conditions; the revised P1→P4 plan has corrected §22.6's major tier errors.**
The live repository confirms HEAD `b090ccd`, no `D-181` or `B-070`, `AC-01b` unused outside this
planning discussion, and Graphify stale at `ac623da`. The full suite passes except `docs-drift`.

Three final corrections are required before the plan can be considered execution-ready:

1. **Add `docs/governance/raci-involvement-matrix.md` to P3's write set.** R56's live contradiction
   is in §3.1: both `T5a` and `T5b` claim `Drafted → Reviewed` while the join claims no state change.
   The Fn_Spec and Build Spec cannot repair the governing RACI table by themselves.
2. **Replace the range-like owner `FR-01`–`FR-05a` with the explicit target gate-feature list:**
   `FR-01`, `FR-02`, `FR-03`, `FR-04a`, `FR-05a`. This excludes historical `FR-04`/`FR-05` and makes
   the consuming-evidence AC's scope queryable without interpreting an ambiguous range.
3. **Include current handoff tracking in P1/P4.** D-181 must answer B-068 §22 and append the current-
   anchor correction to B-069 without erasing D-180's historical answer. Keep both `Applied` until an
   independent Lane B review of the final pushed, Graphify-current HEAD earns `Verified`.

With those corrections, the non-duplicative write set is: Decision Register; `Modular_PRD.md`;
`V1-BUILD-SPEC.md`; `FN-GATES-01-05.md` §11.1 only; `raci-involvement-matrix.md` §3.1; B-068/B-069
tracking; and one new curated correction fragment. `V1-ARTIFACT-INVENTORY.md` remains explicitly
unaffected, and no B-070 is created.

This is final feedback on the draft plan, not authorization to apply D-181 or build S2.
