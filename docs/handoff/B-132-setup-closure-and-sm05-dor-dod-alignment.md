# B-132 — Setup closure, guided SM05 readiness, and DoR/DoD alignment

- **Raised:** 2026-09-24 by Lane B
- **Kind:** blocked-on-decision
- **Phase:** 1
- **Blocks:** the remaining `V1-SM05` readiness decisions and Issue/branch/State-1 PR sequence; `SETUP-SPIKE-000` closure is complete under `D-258`, while `B-131` separately owns the `DOR-R5`/`DOR-R6` evidence decision
- **Status:** Answered
- **Lane A:** Acknowledged 2026-09-24, receipt only. The parent-first order (setup closure, then the behaviour-to-proof map, then the Issue template, then native branch/PR) is queued for the Judge decision table; no setup closure, template or checkbox change is made by this acknowledgement.

  **Parent 1 applied 2026-09-24 (`D-258`), Judge Q4 = Accept as drafted.** `S2`–`S4` are terminally `Deferred — closed without DoD credit`; each residual keeps its single `D-244` owner; the setup root is closed under `D-248`. Propagated to the Build Spec, the Inventory, the three setup packets and `Modular_PRD` §8.1 (changelog 1.37). Parents 2–7 remain unapplied. The Judge selected direct-export evidence for `DOR-R6`, deferred the live-lineage receipt to V2 and selected `scripts/acceptance/` for the later harness. The supplied Lane C analysis now clarifies “Jev System One” as a proposed two-checkpoint evaluator: pre-Issue readiness coverage and post-build DoD-evidence completeness. Its executable contract and authority boundary remain undecided. Lane B has directly reviewed the supplied v15 export under `B-131`; Lane A still must record these acts in canonical sources. `Status` stays `Open`.

  **Answered and applied 2026-09-24 (`D-259`), on the Judge's rulings:** Parent 2 — four truth layers named in
  `SPECS-VERIFICATION-APPARATUS.md` §18.1, deployed-instance receipt deferred to V2 (owner Lane A); Parent 3 — the
  DoR→DoD map recorded once in `V1-SM05.md`; **Child 3A — Jev System One built** at `scripts/jev/` with both modes and
  a negative self-test, made **required** for `V1-SM05` as `DOR-R7`, with Lane B running completion mode before its
  handover and Lane A's re-run plus the harness serving as the non-builder verification; Parent 4 — Issue template
  created; Parents 5–6 — the sequence and QA disposition recorded in the Build Spec; Parent 7 — harness contract at
  `scripts/acceptance/`, not built. **New finding from Jev's first run:** `AC-05a`/`AC-06a` are `[decided_target_held]`
  and describe `transition:T5`/`T6` execution `V1-SM05` does not claim, so `DOR-R7` stays open for a Judge
  disposition. `Verified` remains Lane B's to record.
- **Resolution:** Applied
- **Verified-By:** — not yet dispositioned; raised by Lane B
- **Evidence:** Judge clarification supplied 2026-09-24; `D-156`, `D-242`, `D-244`, `D-248`, `D-252`–`D-258`; `V1-BUILD-SPEC.md` §1; `V1-PHASE-CLOSURE.md` §5; `docs/v1/work-packets/SETUP-SPIKE-000/S2.md`–`S4.md`; `docs/v1/work-packets/V1/V1-SM05.md`; `docs/LANE-B-WORK-ORDER.md` §7; `.github/PULL_REQUEST_TEMPLATE/v1-mmf.md`; `.github/workflows/ci.yml`; `docs/handoff/B-131-sm05-r5-r6-independent-review.md`; Graphify query at the commit below
- **Verified-At-Commit:** d17f9ea1bf9da75d3d6e0b95bd8dbde510ea74a4

## What happened

The Judge clarified three intended outcomes:

1. close `SETUP-SPIKE-000` after moving every residual to one parent backlog owner outside the V1 delivery packets, so setup lifecycle no longer blocks `V1-SM05`; and
2. distinguish the governed specification as the source of intended behavior, the committed and deployed implementation as the source of the implemented revision, and provenance-bearing knowledge views as searchable projections; and
3. provide a guided, templated route from completed SM05 readiness into a GitHub Issue, branch and pull request, with behavior-derived xDD rules prepared before construction.

Both outcomes are achievable, but the proposed sequence needs two corrections. The repository has **no GitHub Issue template and no automated branch-creation workflow**: `.github/` currently contains the one-MMF pull-request template and `workflows/ci.yml` only. Also, Lane B cannot create executable tests while `Eligible`; `D-156` permits commits only by the `Active` lane, and `__tests__/` is Lane B's surface. State 1 may carry the accepted behavior-rule and evidence plan, while executable failing-first tests begin as Lane B's first State-2 construction unit after selection and activation.

## Current handoff accounting — facts only

| Handoff set | Current state | Completed fact | Remaining work |
|---|---|---|---|
| `B-120`, `B-125` | `Open`, Lane A acknowledged | Two-state readiness docket and post-DoR sequence are recorded | Issue, branch, State-1 PR, selection and work order do not yet exist |
| `B-121`, `B-122`, `B-126` | `Answered / Applied` | Their corrections were applied | Independent verification is not represented by `Applied` |
| `B-123`, `B-129` | `Answered / Verified` | R2–R4 feasibility and A01 setup-only classification are terminally verified | None in those entries |
| `B-124` | `Answered / Superseded` | The SM05 identity-compatibility gate was removed by `D-255` | None in that entry |
| `B-127`, `B-128` | `Answered`, no Resolution | Lane A answered and `D-256` applied their governed decisions | Record `Applied` only if Lane A names the applying commit; `Applied` remains non-terminal until independently verified |
| `B-130` | `Answered`, no Resolution | `D-257` records the loader-spike determination | Normalize its older Lane A prose saying “Entry stays Open” against the registered `Answered` header; then disposition honestly |
| `B-131` | `Open`, committed and acknowledged at `5b030b4` | Lane B accepted R5 feasibility and recorded Judge acceptance of `W1`–`W3` | Explicit `W2` rule and R6 evidence-standard disposition |
| `B-132` | `Open`, committed and acknowledged at `5b030b4`; Parent 1 applied at `d17f9ea` | `D-258` closed setup; Option-2 v15 export is now directly reviewed in `B-131` | Lane A application of Parents 2–7 and later independent verification of every `Applied` result |

## Parent 1 — setup root closure independently verified

**Complete at `d17f9ea` (`D-258`).** Lane B independently compared the Register act, Build Spec,
Artifact Inventory, `Modular_PRD.md` §8.1 and all three setup packets. The applied result matches
Parent 1:

- `S0` and `S1` remain completed setup evidence;
- `S2`–`S4` are terminally `Deferred — closed without DoD credit`;
- each transferred behavior and residual keeps exactly one `D-244` owner;
- the setup root is closed under `D-248` without opening V2, granting V1 DoD or lifting `D-171`; and
- the packet files remain as history.

No correction is required for Parent 1. Residual work returns only through its retained owner, never
by reopening `SETUP-SPIKE-000`.

## Parent 2 — define the truth and live-lineage contract

The Judge's clarification is directionally sound, but “source of truth” must name the kind of fact.
One artifact cannot authoritatively answer intended behavior, repository implementation, deployed
revision, live state and search at the same time.

| Layer | Canonical evidence | What it may prove |
|---|---|---|
| **Normative intent** | The `D-29` document hierarchy, with the Register resolving decided governance and the owning Product/Fn/SPECS tier carrying each requirement | What the system is required and authorized to do |
| **Implemented revision** | Immutable Git commit plus its source, migrations, configuration declarations and executable evidence | What one repository revision implements; source does not by itself prove deployment or live data |
| **Deployed instance** | Environment-specific deployment receipt tied to commit/build identity, plus an applied-migration receipt and runtime evidence | What artifact and schema actually reached a named environment and when |
| **Searchable projections** | Graphify with source links and `lastAnalyzedHead`; the Encyclopedia with its sync ledger and verified revision | A machine/human-readable way to find and explain source facts; never authority to override them |

The Judge has deferred the executable live-lineage receipt contract to V2. Lane A should record only
the four-layer semantics and a named V2 return condition now. When the first V2 deployment unit
opens, the returned contract must bind:

- environment and deployment/build identifier;
- immutable Git commit SHA and deployment time/result;
- each migration filename and content hash, application result and database/environment identity;
- the resulting schema/version marker and verification evidence; and
- links back to the authorizing packet/PR and forward to the refreshed Graphify/Encyclopedia views.

No receipt artifact is created in V1, and the V1 Artifact Inventory should not claim that a planned
file already exists. Record the deferral, Lane A owner and return trigger in the governing backlog;
create and propagate the artifact only when a later Judge act opens that unit. This does not authorize
deployment, hosted migration or production access. The searchable views remain derived evidence
sources under `D-186`; their freshness markers make staleness visible but do not promote them into
canonical records.

## Parent 3 — complete the SM05 behavior-to-proof contract

At DoR completion, each accepted behavior must have a named DoD proof obligation and intended evidence class. The exact child-level xDD method remains Lane B's later build-governance choice under `D-242`.

| DoR input | Existing DoD proof obligation | Evidence class fixed before the Issue |
|---|---|---|
| `DOR-R1` pre-`T1` record/event contract | Behaviour by namespace; acceptance cases; persistence | Database integration and contract evidence |
| `DOR-R2` `OP-PITCH` atomic contract | Behaviour by namespace; refusal and replay | Atomicity, replay and idempotency evidence |
| `DOR-R3` `EW` refusal/retry contract | Refusal and replay; exclusions | Negative/refusal and legitimate-retry evidence |
| `DOR-R4` bounded Route-1 operations | Behaviour; refusal and replay; exclusions | Contract/integration evidence for admitted operations; absence evidence for deferred execution |
| `DOR-R5` accepted UI/visual contract | Display; accepted-contract traceability; persistence | UI walkthrough and record-to-visible-fact traceability |
| `DOR-R6` accepted Encyclopedia disposition | Accepted-contract traceability | Final vocabulary and artifact-currency review |

This table should be recorded once in the SM05 packet or its single canonical readiness owner. It should not generate duplicate DoD rows. A checked DoR proves that the input contract and verification route are ready; it does not claim that code or tests already exist.

`B-131` remains the owner of the final R5/R6 act: record `W1`–`W3`, make the `W2` downstream-evidence rule explicit, and choose its R6 Option 1 or Option 2. This entry does not duplicate that decision.

### Child 3A — Jev System One two-checkpoint evidence evaluator (planning only)

The supplied Lane C analysis gives “Jev System One” a usable functional meaning: a Lane A owned
evidence evaluator that reads canonical behavior IDs at two checkpoints. Before Issue creation it
checks whether the authorized SM05 scope has a complete DoR→DoD verification plan. After construction
it checks whether each defined DoD obligation has the required, current delivery evidence. Both modes
are distinct from Lane B's executable xDD, independent verification, Judge acceptance and Lane A's
post-construction customer-acceptance harness.

The proposal is viable only with these boundaries:

1. **It is pre-Issue, not “State 1.”** Under `D-253` and `D-254`, State 1 starts only after the
   completed DoR, Issue and native branch produce the documentation-only PR. The evaluator may run
   before Issue creation, so calling it State 1 would reverse the governed sequence.
2. **It supplies evidence; it does not certify or authorize readiness.** Its receipt may show that
   structural checks passed. The canonical packet rows, Lane A's governed record and the Judge's act
   establish DoR completion and authorize the next external step.
3. **Its scope is the authorized SM05 manifest.** “100% coverage” means every canonical behavior ID
   explicitly in scope for `V1-SM05`; it does not mean every historical, held, V2 or unrelated ID in
   `Modular_PRD.md` or `docs/fn-specs/`. The product acceptance catalogue is in
   `Modular_PRD.md` §9, not §8.
4. **It cites rather than copies.** Inputs are source path, stable anchor/ID and content hash from
   the SM05 packet. It must not create a second scenario corpus or embed copied Given/When/Then text
   in an Issue template.
5. **Deterministic checks form the gateable result.** They verify that each in-scope ID exists, has
   non-empty Given/When/Then fields, maps exactly once to an existing DoD obligation and evidence
   class, and matches the recorded source revision/hash. Any model-assisted ambiguity or
   declarative-language review is an advisory warning because semantic model output is not a stable
   pass/fail control.
6. **The receipt is provenance-bearing evidence.** At minimum it records packet ID, repository SHA,
   source paths/anchors/hashes, in-scope IDs, mapping results, deterministic failures, advisory
   warnings, tool/version and generation time. Lane A must choose and inventory its governed evidence
   location; embedding a mutable receipt in the reusable Issue template would mix one run with the
   template definition.
7. **It must prove that it can fail.** Planning must include fixtures for a missing ID, stale
   anchor/hash, empty Given/When/Then field, missing or duplicate DoD/evidence mapping, and an
   out-of-scope ID.
8. **Its completion mode validates the evidence set, not the business outcome.** After Lane B returns
   its construction evidence and the existing Lane C workflow reports its result, the evaluator may
   check that every SM05 DoD row has the named artifact, canonical-ID link, result, source revision and
   required negative/refusal proof. It may also reject stale evidence, a green-only test history,
   missing database receipts, dead-control omissions or an unrecorded exclusion.
9. **A completion receipt cannot close a lane or merge a PR.** A passing report means the evidence
   package is ready for independent review. A non-builder still verifies it; Lane A runs the separate
   customer-acceptance harness in its later `Active` turn; the Judge accepts the business outcome; only
   then may the PR follow its governed merge act. `D-245` remains controlling: merge is not DoD.
10. **The two modes share identity without sharing conclusions.** The pre-Issue receipt records the
    planned proof obligations. The completion receipt references that receipt and records the delivered
    evidence for the same IDs. Neither receipt may silently add scope, and a readiness pass cannot be
    reused as a completion pass.

If approved with both modes, the clearest Lane A path is one apparatus under `scripts/jev/`, with
separate `readiness` and `completion` commands. This avoids placing a post-build validator under a
readiness-only name and keeps it separate from consistency checks in `scripts/checks/` and the later
customer harness in `scripts/acceptance/`. Merely placing a file in `scripts/checks/` would not execute
it because `scripts/check-consistency.mjs` uses an explicit check list. The exact command, receipt
location and package entry remain matters for a Register act and `D-54` propagation. The first SM05
may still use recorded manual assessments unless the Judge explicitly makes this new reusable
evaluator part of its DoR or DoD; an optional cross-MMF apparatus should not retroactively block an
otherwise complete packet.

## Parent 4 — add the missing guided Issue template

The requested guided workflow should first be implemented as a **Lane A owned Issue template or Issue form under `.github/ISSUE_TEMPLATE/`**, not as a Lane C workflow. It should require:

- the selected packet ID and bounded business outcome;
- links to all checked or Judge-deferred DoR rows;
- the DoR→DoD table above and the planned evidence class for every behavior;
- explicit inclusions, exclusions, dependency status and local-only data boundary;
- approved branch name and base from `D-253`;
- the documentation-only State-1 PR boundary;
- planned Lane B construction children, with exact xDD method left for the later work order;
- the independent-verification and Judge-acceptance requirements; and
- a stop condition stating that the Issue creates no selection, work order, lane transfer or construction authority.

The completed template is readiness infrastructure. **Creating the actual Issue remains after every DoR row is complete**, as `D-254` requires. The Issue then records the completed evidence; it cannot be the evidence that made an incomplete DoR complete.

No automated branch-creation workflow currently exists. `D-253` selects native Git branching from the verified remote tip. If the Judge wants automation rather than that governed manual act, Lane A must first specify its inputs, permissions, refusal behavior and audit evidence; Lane C may then implement one separately authorized `.github/workflows/` unit. Do not infer that unit from `ci.yml`.

## Parent 5 — corrected Issue, branch, PR and xDD sequence

1. Resolve `B-131`; record the Judge's `W1`–`W3` answers and the selected R6 evidence standard.
2. Record Parent 2's four-layer semantics and V2 deferral; record Parent 3's compact behavior-to-proof table and create Parent 4's guided Issue template.
3. Check or Judge-defer every `DOR-R1`–`DOR-R6` row. At this point DoR is complete; no executable SM05 test or implementation file exists.
4. Create the single SM05 GitHub Issue from the guided template.
5. Create `features/feature-V1-SM05` by native Git branching from the verified pushed remote tip and open the documentation-only State-1 PR attached to the Issue.
6. The Judge selects `V1-SM05`, approves the bounded work order and Lane A records Lane B `Active`; Lane A and Lane C become `Blocked`.
7. Move the PR to State 2. Lane B's first construction child creates the behavior-derived executable tests or other justified failing-first xDD evidence, then implements the behavior and completes the DoD evidence.
8. An independent non-builder verifies the result; the Judge accepts the business outcome. PR merge alone is not DoD.

Executable test scripts cannot be evidence used to make Lane B Active: only Lane B owns `__tests__/`, and Lane B cannot commit while merely `Eligible`. The **pre-activation evidence** is the accepted behavior-rule specification, DoR→DoD coverage and planned evidence class. The **post-activation evidence** is the executable xDD artifact and its result.

## Parent 6 — generic QA checklist disposition

| Supplied item | Repository disposition |
|---|---|
| Clear value, bounded scope, testability and feasibility | **Accept**; represented by SM05 anchors, exclusions, DoR and the behavior-to-proof map |
| Sized to one sprint/PR | **Accept with repository wording**; one MMF per PR, split and re-authorize if necessary |
| Clean code, input/secret safety, error paths and regressions | **Accept as QA envelope**; record in work order and PR evidence |
| Unit tests for every item | **Reject as universal**; Lane B chooses the fitting xDD method per child |
| “At least one or two” reviewers | **Reject as ambiguous**; retain one independent non-builder verifier plus Judge outcome acceptance |
| Shared staging requirement | **Reject for SM05 construction**; `D-252` makes construction local-only |
| PR context and resolved material feedback | **Approve**; the existing PR template already requires scope, test instructions and evidence |

## Parent 7 — separate Lane A customer-acceptance harness

The Judge's 2026-09-24 clarification requires a separate Lane A script that validates the behavioural
sections across MMFs after Lane B and Lane C complete their respective work. Accept that intent with
the following boundary so it does not become a second build-test authority:

1. **Reuse the existing notation.** `Modular_PRD.md` and all four current functional specifications
   already carry Given/When/Then acceptance tables. Lane A should cite those canonical rows and add a
   missing scenario only in the tier that owns it; it should not copy every scenario into a new
   "Gherkin specification" or rewrite frozen `[V1]` text merely to adopt a label.
2. **Keep the three proofs distinct.** Lane A owns the accepted customer outcome and the later
   cross-MMF acceptance harness under `scripts/`; Lane B owns the child-level executable xDD evidence
   in `__tests__/`; Lane C owns workflow evidence in `.github/workflows/`. A passing Lane A harness
   does not replace Lane B's failing-then-passing proof, Lane C's negative workflow probe, independent
   verification or Judge acceptance.
3. **Sequence it after construction.** Lane A specifies the harness contract during readiness, but
   implements and runs the executable harness only in a later Lane A `Active` turn after Lane B and
   Lane C return their accepted evidence. Lane A must not write it while Lane B is `Active`. A product
   defect found by the harness returns through a handoff and a newly authorized Lane B unit; Lane A
   does not repair application code.
4. **Make one reusable apparatus.** The governed contract should use `scripts/acceptance/` and define one command, one result
   schema, per-MMF scenario adapters keyed to canonical acceptance IDs, deterministic fixtures, and a
   deliberate negative control proving the harness can fail. It should validate completed customer
   journeys rather than aggregate green checkmarks.
5. **Use the provisioned runner first.** `bun:test` is already installed. Cucumber is neither present
   nor required to execute the existing Given/When/Then contracts. A future Cucumber request is a
   dependency and architecture decision, not an implication of using Gherkin-style notation.
6. **Keep evidence validation and customer acceptance separate.** Child 3A defines Jev's proposed
   readiness and completion modes. Its deterministic completion result may establish that the DoD
   evidence package is ready for review; it does not prove that the customer journey is acceptable.
   The post-construction harness stays runner- and model-agnostic and independently exercises that
   journey. Any semantic model output remains advisory in both places.
7. **Govern the new artifact.** Because this creates and sequences a reusable artifact, Lane A must
   assign its Register decision, path, inputs, DoD and lifecycle and propagate the fact through all
   `D-54` tiers in the same pass. Until that act exists, `C-004` is analysis rather than executable
   authority.

This gives the customer an automated end-to-end acceptance view while preserving `D-242`: intent,
build proof and workflow proof remain independently attributable.

## Judge decision table — parent first

The Judge has selected **direct-export evidence for `DOR-R6` (Option 2)**, the existing **State 1
documentation / State 2 executable-xDD boundary**, **native Git branching**, **V2 deferral of the
live-lineage receipt**, and **`scripts/acceptance/` for the later Lane A harness**. Lane B has directly
reviewed the supplied v15 export under `B-131`. “Jev System One” now has a proposed functional scope,
but no approved executable contract or authority boundary. These clarifications still need one or
more Register acts before Lane A applies Parents 2–7; **`D-259` does
not yet exist** and must not be cited as applied authority.

| Order | Judge decision | Accept means | Reject means / consequence |
|---:|---|---|---|
| 1 | **Terminal-transfer closure of `SETUP-SPIKE-000`** | **Accepted and complete at `d17f9ea` (`D-258`)** | Closed decision; reopening requires a new Judge act |
| 2 | **Truth semantics and live-lineage deferral** | Record the four layers now; defer the receipt contract to a Lane A owned V2 return condition | The repository keeps using “truth” ambiguously and the deferred receipt has no route back |
| 3 | **`B-131` R5/R6 evidence** | Record `W1`–`W3` and the explicit `W2` rule; record Lane B's direct v15 export confirmation; check `DOR-R5`/`DOR-R6` | R5/R6 stay unchecked; Issue creation remains blocked |
| 4 | **Behavior-to-proof coverage map** | Lane A records the compact R1–R6 map without duplicate DoD rows; Lane B retains exact xDD selection | The Judge must state the missing alignment rule before DoR can be called complete |
| 4A | **Jev System One two-checkpoint evaluator** | Specify one optional Lane A apparatus under `scripts/jev/`: pre-Issue readiness coverage and post-build DoD-evidence completeness, with separate commands/receipts, deterministic rules, advisory semantic warnings and negative fixtures | Keep the governed manual assessments; no Jev receipt or automated validation claim may be made |
| 5 | **Guided Issue template** | Lane A creates a repository Issue template/form and propagates the new artifact under `D-54` | The Issue is created manually from the packet; no automation may be claimed |
| 6 | **Native branch creation** | Preserve `D-253`; branch manually by native Git after the completed Issue | Automated creation requires a separate Lane A specification and Lane C workflow authorization |
| 7 | **Tests after activation** | Planned behavior rules are State-1 readiness evidence; executable xDD begins as Lane B's first State-2 child | Creating tests before activation requires an explicit amendment to `D-156`, `D-252` and the lane surfaces; the current proposal has no legal executing lane |
| 8 | **Lane A customer-acceptance harness** | Record the Judge's required outcome as a new governed artifact; specify it in readiness and execute it in a later Lane A `Active` turn after Lane B/C evidence exists | No cross-MMF customer automation exists; existing per-child and workflow proofs remain valid but do not satisfy the new request |

## Step-by-step guide for Lane A

1. Record the supplied Judge choices; do not treat the external proposal or proposed `D-259` label as authority by itself. Keep SM05 readiness, the global truth model and the cross-MMF harness as separately dispositioned objects so an optional apparatus cannot block SM05.
2. Resolve `B-131`: record `W1`–`W3`, replace Panel A11.2's false “sibling or prior node” rationale with the explicit `W2` downstream-evidence rule, record Lane B's direct v15 export review/hash, and check `DOR-R5`/`DOR-R6`.
3. Reconcile the Encyclopedia ledger without erasing the distinction between **hosted update complete** and **independent `DOR-R6` confirmation complete**. Entry 04 stays deferred to `V1-SM06`.
4. Record the four-layer truth semantics and the V2 deferral with a Lane A owner and return condition. Do not create a V1 receipt artifact or claim one in the V1 inventory.
5. Add the behavior-to-proof table once and create the guided Issue template/form. Disposition Jev separately: if approved, specify one `scripts/jev/` apparatus with `readiness` and `completion` modes, an in-scope manifest, deterministic rules, advisory model output, linked receipt schemas and negative fixtures. Do not call its readiness mode State 1, let either mode authorize an Issue or merge, or make it a new SM05 blocker unless the Judge expressly adds it to the packet DoR/DoD.
6. Define the one reusable Lane A customer-acceptance harness contract at `scripts/acceptance/`, with inputs, output schema, negative control, DoD and post-construction execution point. Placement alone does not execute it; a later command/work order must do so.
7. Answer the remaining parents of `B-131`/`B-132` and record honest `Applied` resolutions. Add applying commit evidence to `B-127`/`B-128`, normalize `B-130`, but do not call any `Applied` entry closed: only an independent actor may record `Verified`.
8. Run the governed checks, commit, rebuild Graphify against the new commit, confirm `lastAnalyzedHead` equals `HEAD`, and report portability findings separately. Do not restate a fixed check total in canonical prose.
9. Stop for separately authorized external acts in `D-253` order: push, create the Issue, create the native branch from the pushed tip, and open the documentation-only State-1 PR.
10. Stop again for Judge selection and work-order approval. Record Lane B `Active` before any executable test or application edit. Lane B returns its build and xDD evidence; the existing Lane C workflow supplies its CI result without granting DoD.
11. Transfer the lane lock back to Lane A before running Lane A scripts. Run Jev's completion mode, resolve any missing/stale-evidence finding through the owning lane, then run the separate customer-acceptance harness. A passing Jev receipt only makes the package reviewable.
12. Obtain independent non-builder verification and Judge acceptance of the business outcome. Record accepted DoD before the separately governed merge act; never describe merge itself as completion evidence.

## Completion semantics and guaranteed failure points

| State or action | What it proves | Guaranteed failure if misread |
|---|---|---|
| `Status: Answered` | Lane A answered the raiser | Does not prove the fix landed or was independently checked |
| `Resolution: Applied` | The applying commit exists | Is non-terminal under `D-102`; calling it closed bypasses independent verification |
| `Resolution: Verified` | An independent actor checked the applied result | Only this (or a valid Deferred/Withdrawn/Superseded disposition) is terminal for closure |
| Issue/branch/PR exists | The external GitHub act happened | Under `D-254`, it grants no readiness or construction authority if DoR was incomplete |
| Tests exist before Lane B is `Active` | A lane boundary was crossed | They cannot be valid selection evidence under `D-156`/`D-252` |
| Encyclopedia says “updated” | Hosted content was edited | Does not prove independent comparison unless the export/read and review are recorded |
| Graphify is current | Search projection matches its analyzed commit | Does not make graph nodes canonical requirements or prove live deployment |
| Jev evaluates every acceptance ID in the corpus | The scope boundary was discarded | Historical, held, V2 and unrelated IDs create guaranteed false failures or accidental scope expansion |
| Jev receipt “certifies” readiness | A tool has been given governance authority | The receipt cannot check DoR, authorize an Issue or replace the Judge/Lane A record |
| Semantic model output is the sole gate | Pass/fail is nondeterministic | The same packet can receive incompatible outcomes without a source change |
| Pre-Issue Jev work is called State 1 | The governed sequence is contradicted | State 1 cannot begin before the Issue and branch that create its PR |
| Jev readiness checks are called executable xDD | Readiness evidence and construction proof were conflated | Lane A would appear to perform Lane B's post-activation test work |
| Jev completion mode closes Lane B/C or authorizes merge | Evidence validation was promoted into lifecycle authority | Independent verification, Judge acceptance and the governed merge act are bypassed |
| A readiness receipt is reused after construction | Planned evidence is mistaken for delivered evidence | Missing, stale or failing implementation proof can appear complete |
| Jev and the customer harness are treated as one gate | Evidence completeness and customer outcome are conflated | A complete evidence package can pass without the customer journey being exercised |

### Success criteria derived from those failures

| Failure to prevent | Observable success criterion |
|---|---|
| W2 justified by the false “sibling or prior” claim | Panel A11 states that T4 is downstream and stays current only because the Judge decided its evaluated inputs remain valid unless explicitly invalidated; T5 combines the new current T3 with that T4 evidence |
| Encyclopedia update claimed without independent evidence | `B-131` records the supplied v15 export hash and confirms all three dated notes; the ledger distinguishes hosted-update completion from Lane B confirmation; Entry 04 remains deferred |
| Applied work reported as closed | Each affected handoff names its applying commit, then a different actor records `Verified`; phase closure counts only terminal dispositions |
| GitHub objects mistaken for readiness | Every `DOR-R1`–`DOR-R6` row is checked or Judge-deferred before Issue creation; Issue, branch and PR URLs are evidence after the gate, never the gate |
| DoR copied into a second checklist | One R1–R6 behavior-to-proof map points to existing DoD rows and canonical acceptance IDs; exact xDD methods remain Lane B decisions |
| Search or repository state mistaken for production state | Every statement names its layer: intended, implemented, deployed or searchable; the future V2 receipt binds environment, commit, migration hashes and observed result |
| Acceptance automation that can only pass | The later `scripts/acceptance/` harness has a deliberate negative control that fails for the expected reason before its positive customer journey passes |
| Optional global controls block SM05 | SM05 readiness, truth semantics/V2 deferral and the cross-MMF harness receive separate dispositions and dependencies; only R5/R6 and the packet's own DoR gate the SM05 Issue |
| Jev expands scope or becomes a self-authorizing gate | Its manifest contains only authorized SM05 IDs; deterministic results and advisory warnings are separate; the receipt states that it is evidence and names the later governing decision |
| Readiness automation cannot detect bad inputs | Negative fixtures fail for missing IDs, stale hashes, empty scenario fields, missing/duplicate proof mappings and out-of-scope IDs |
| Readiness checks replace construction proof | Jev stops at structural readiness; Lane B later creates and runs executable xDD after activation; Lane A's customer harness runs after construction |
| Post-build evidence is incomplete or stale | Jev completion mode maps every SM05 DoD row to a current artifact, canonical ID, result and repository revision and rejects missing negative/refusal, database, exclusion or dead-control proof |
| A tool closes the build | Jev reports `ready for independent review`; a non-builder verifies, Lane A exercises customer acceptance, and the Judge records accepted DoD before merge |
| Pre-build plans are mistaken for post-build results | Readiness and completion receipts have distinct schemas/results and the latter links to, but never reuses, the former |

## What Lane B did instead

Lane B independently verified `D-258`, the current handoff headers, Register sequence, lane lock and
`.github/` contents; reconciled the new proposal; updated this existing entry instead of opening a
duplicate; and stopped at the lane boundary. No canonical Lane A document, application file, test,
Issue, branch, PR, workflow or lane state was changed.

## Verdict

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | Setup-root closure | Completed and independently reviewed at `d17f9ea` (`D-258`) |
| **Approve** | Four-layer truth semantics | Phase 1 / distinguish intent, implementation, deployed fact and searchable projection |
| **Defer** | Executable live-lineage receipt contract | V2 / Lane A owner; returns when the first V2 deployment unit opens |
| **Approve** | R1–R6 behavior-to-proof map | Phase 1 / record once without duplicate DoD criteria |
| **Approve-with-conditions** | Jev System One as an optional two-checkpoint evaluator under `scripts/jev/` | Phase 1 planning / separate readiness and completion commands/receipts; restrict to authorized SM05 IDs; deterministic checks are reportable, semantic review is advisory, receipts are evidence only, negative fixtures are required, and a separate Judge act precedes implementation |
| **Approve** | Guided GitHub Issue template/form | Phase 1 / Lane A creates it before the actual post-DoR Issue |
| **Approve** | Native branch and two-state PR sequence | Phase 1→2 / preserve `D-253` and `D-252`; branch from the latest verified pushed readiness tip |
| **Approve** | Existing Given/When/Then notation as the customer-readable behavior contract | Phase 1 / cite canonical acceptance IDs and add missing cases only in their owning tier; do not duplicate the corpus |
| **Approve-with-conditions** | Behavior-rule tests as first construction work | Phase 2 / only after Judge selection, work order and Lane B activation |
| **Approve-with-conditions** | Separate Lane A cross-MMF customer-acceptance harness at `scripts/acceptance/` | Phase 1 contract, then post-construction Lane A turn / canonical-ID adapters, deterministic fixtures and a negative control; it supplements Lane B/C proof |
| **Defer** | Automated branch-creation workflow | Native Git is sufficient; separate Lane A specification and Lane C authorization are required if revisited |
| **Defer** | Cucumber runner and dependencies | Phase 2+ / reconsider only if native `bun:test` cannot express an accepted scenario and Lane A provisions the approved dependency |
| **Reject** | Jev “certifies” DoR, closes Lane B/C, accepts DoD or authorizes Issue/merge; all-corpus coverage; duplicated scenario text; a semantic model as the sole gate; readiness labelled State 1; one receipt reused at both checkpoints; Jev substituted for Lane B xDD or Lane A customer acceptance | These invert governance authority, expand scope, create drift, make the gate nondeterministic, erase distinct evidence states or cross lane/phase boundaries |
| **Reject** | Treating code alone as proof of the live deployment; treating Graphify or the Encyclopedia as canonical authority; treating proposed `D-259` as existing authority; actual Issue as proof that DoR became complete; executable tests before Lane B is Active; claim that CI creates branches; duplicating canonical Given/When/Then rows in a second specification | They contradict the evidence/record distinction, current Register, `D-254`, `D-156`/`D-252`, repository workflow set, or one-record-per-fact rule |
