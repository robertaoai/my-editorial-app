# B-136 — Setup continuation and the blocked `V1-SM05` State-2 boundary

- **Raised:** 2026-09-25 by Lane B
- **Kind:** blocked-on-decision
- **Phase:** 1
- **Blocks:** `V1-SM05` selection, its State-2 work order and Lane B activation until the approved setup-validation blockers are recorded, completed and accepted
- **Status:** Open
- **Lane A:** Acknowledged 2026-09-25, receipt only. Accepted as the Lane A review docket. Pass 1 needs an explicit Judge act and Pass 2 needs actual selection (`D-183`); neither is given by this acknowledgement.

  **Parent 2 (Pass 1) applied 2026-09-25 (`D-263`).** The State-1 record is repaired (see `B-135`). Hard stop: Parent 3 (selection, work order, lane change) awaits the Judge's selection act. `Status` stays `Open`.

  **Channel correction, 2026-09-25, Lane A.** The Lane A field above was overwritten in the working tree by the raiser's revision. The SOP makes answers append-only, so the original text is restored above and the overwriting text is preserved verbatim, attributed to Lane B, in the quote below. It is not a Lane A disposition.

  > *(Lane B text, formerly placed in this field)* Acknowledged 2026-09-25. Parent 2 Pass 1 was applied under `D-263`. **Judge rulings and clarifications received 2026-09-25:** Path A approved — the project remains in `SETUP-SPIKE-000`; Lane A must record the exact `D-257`/`D-258` changes and every blocker, owner, acceptance proof and return condition; `V1-SM05` becomes `BLOCKED`. The Judge formally tags the completed pre-selection Lane A handoff-validation attempt as historical attempt `SV-001` so later attempts can measure success drift against it; it stays complete and is not a `V1-SM05` feature DoR/DoD run. The setup gaps require new attempt `SV-002`, including item and success drift from `SV-001`. The first feature DoR/DoD run occurs only after SM05 selection and creation of its first behavioral test code. Canonical application is pending.

  **Lane A review, 2026-09-25.** The docket is received and reviewed against the repository. `D-264` is not yet applied: its authority boundary and four gaps are being confirmed with the Judge first (template scope and path, the omitted `D-258` item-4 and derived "root closed" statements, the `SV2-U02` execution route, and `SV2-U03`'s standing as the `ripwire` feasibility exercise). `Status` stays `Open`.

  **Parent 2 applied 2026-09-25 (`D-264`), after Judge Q1–Q4.** Corrections to the docket, applied: (a) `D-258` item 4's "does not reopen" clause and the derived "root closed" statements (Build Spec, `Modular_PRD` §8.1 and changelog 1.37, `S2`–`S4`) are also superseded, by dated notes; (b) the template lives at `docs/templates/dor-dod-validation/v1.md`, not under `docs/v1/` (`D-36`); (c) `SV2-U02` has separate Lane B (parent) and Lane C (child) run trackers (Q3); (d) `SV2-U03` was evaluated now, read-only (Q4). `SV2-U01` bootstrap is done and awaits independent review; `SV2-U02`–`U04` remain. `Status` stays `Open`.
- **Verified-By:** — not yet dispositioned; raised by Lane B
- **Evidence:** Judge ruling in the current conversation, 2026-09-25; `D-29`; `D-54`; `D-58`; `D-75`; `D-86`; `D-90`; `D-97`; `D-118`; `D-156`; `D-183`; `D-184`; `D-186`; `D-203`; `D-227`; `D-240`; `D-242`; `D-253`–`D-263`; `docs/README.md` §"How a request becomes execution"; `docs/handoff/README.md`; `docs/handoff/TEMPLATE.md`; `docs/v1/V1-PHASE-CLOSURE.md` §5/§5.0a; `docs/LANE-B-WORK-ORDER.md`; `docs/v1/work-packets/V1/V1-SM05.md`; `docs/handoff/B-071`; `B-095`; `B-104`; `B-130`; `B-135`; GitHub Issue #1; current tree at the commit below
- **Verified-At-Commit:** 3973e73a0e32d42f2ebaa2b5843d5d768497c84e

## What happened

During validation before selecting `V1-SM05`, the Judge found unresolved project setup gaps and
confirmed that the project remains in `SETUP-SPIKE-000`. Closing the S2–S4 scorecards did not end the
setup container for this purpose. The Judge directed Lane A to:

1. record exactly which `D-257` and `D-258` clauses change;
2. identify every blocker, owner, acceptance proof and return condition; and
3. raise the `V1-SM05` packet status to **`BLOCKED`** in Phase 1;
4. preserve the completed pre-selection Lane A handoff-validation checklist as historical attempt
   `SV-001`, without calling it a `V1-SM05` feature DoR/DoD run;
5. create setup-validation attempt `SV-002` for the new findings and record its drift from `SV-001`;
   and
6. reserve the first `V1-SM05` feature DoR/DoD run for after selection, when Lane B creates the first
   behavioral test code; and
7. separate the reusable, versioned DoR/DoD template from each immutable attempt run, with the
   template covering Project, Product, execution scope, backlog refinement and relevant historical
   dialogue/tooling before an attempt can close.

This is authorization to prepare and apply the bounded governance package. It is not authorization to
construct SM05, install an unreviewed tool or treat Lane C's suggested remedies as already proven.

### Current verified baseline

| Item | Current fact |
|---|---|
| Live lanes | Lane A `Active`; Lane B `Eligible`; Lane C `Blocked` |
| Historical validation | `DOR-R1`–`DOR-R7` remain checked as completed pre-selection Lane A handoff-validation attempt `SV-001`; they are not a feature DoR/DoD execution |
| State-1 objects | Issue #1 open; its branch and State-1 PR items read `done`; draft PR #2 exists |
| Construction | Not started; no selected packet, work order or Lane B commit lock |
| State-1 repair | Applied by `D-263`; independently reviewed in `B-135` at `3973e73` |
| Graph currency | `lastAnalyzedHead` equals `3973e73`; docs drift is current |
| New Judge state | Setup validation continues; SM05 must be recorded `BLOCKED` before selection |
| Checklist lineage | `SV-001` = completed historical handoff-validation attempt; `SV-002` = new setup-gap attempt; `V1-SM05-FV-001` = first feature run, created only after selection |
| Template lineage | `SV-001` retains its legacy embedded checklist provenance; `SV-002` is the first run of new `dor-dod-validation/v1`; later material template changes create v2 rather than rewriting prior runs |

### Tracking chain carried by the template — existing authorities preserved

Judge clarification 5 requires every validation template to trace from global tracking through the
bounded attempt. This is a **coverage chain**, not a replacement authority hierarchy. Each section
reads its existing canonical owner and the Register still arbitrates conflicts:

| Required template scope | Canonical sources | What every attempt records |
|---|---|---|
| **Project** | Frozen Project PRD and Charter; Register, Build Spec and Inventory under `D-54`/`D-58` | Project constraint IDs, applicability, current decision, evidence and unresolved transfers |
| **Product** | `Modular_PRD`, relevant Fn_Specs and SPECS under `D-29` | Product/module/version requirement IDs, behavior affected, scope exclusions, and every MMF in the gate's declared scope with selection status and dependency disposition |
| **Execution scope** | The setup packet or selected MMF packet and bounded work order | Exact target scope ID, gate, packet, child unit, acceptance behavior and authorization state |
| **Backlog refinement** | `docs/handoff/` under `D-90` and each entry's weakest-child state | Every relevant Open, Deferred or returned item, its relevance decision, owner, proof and return condition |
| **Historical dialogue and tooling** | Decisions, prior attempts, receipts and relevant agent/tool findings | Source reference, what was asserted, what was proven, what changed and the current disposition |
| **Attempt lineage** | Immutable attempt records and their drift ledgers | Template version, prior attempt, result, evidence index and destination receipts |

“All historical dialogue” means every record selected by an explicit inclusion rule: include any
decision, handoff child, receipt or tooling finding whose `Blocks`, `Follow-up-Tier`, return trigger,
affected artifact or acceptance behavior intersects the gate being run. The attempt lists included
items and excluded candidates with a reason. It does not copy conversation prose or turn a current
handoff tally into governed truth.

The chain therefore improves completeness while preserving these boundaries: handoffs remain lateral;
dialogue remains provenance; Graphify and the Encyclopedia remain searchable projections; and tools or
models gain no authority from appearing in the historical section.

The closure correction is one narrow invariant:

> A setup attempt may close only when its bounded children have terminal dispositions **and** every
> unresolved item has an accepted disposition or a named destination, owner, acceptance proof and
> return condition. The destination must record receipt before the source attempt claims transfer.

This invariant repairs the `D-258` failure without creating a duplicate master ledger.

## Exact decision changes for Lane A

### `D-257` — narrow item 3; retain items 1, 2 and 4's determination history

| Existing clause | New effect |
|---|---|
| Item 1: the loader-characterization spike is warranted | **Retained.** |
| Item 2: measurement-only scope — loaded files, actual limit and source, visible text; no redesign in the spike | **Retained as the first setup-validation unit.** |
| Item 3: not commissioned; does not block SM05; select later at a Sprint boundary | **Superseded.** The Judge commissions it now inside continued `SETUP-SPIKE-000`; its accepted report is a prerequisite to lifting SM05's `BLOCKED` status. |
| Item 4: `B-130` answered | **Historical fact retained, lifecycle advanced.** `B-130`'s Deferred return trigger — Judge commission of the spike — is now satisfied, so Lane A returns it to `Open` using the `B-097` return record protocol. |

The measurement report may recommend root `GEMINI.md`, skill modularization or another design. It
must not assume those remedies before measuring the actual loader behavior.

### `D-258` — supersede root closure; preserve child dispositions and owners

| Existing clause | New effect |
|---|---|
| Item 1: S2–S4 terminally Deferred without DoD credit; residual destination table | **Retained.** No child receives retroactive DoD credit and no existing residual owner changes through this act. |
| Item 2: the setup root is closed because each child is terminal | **Superseded.** Terminal child dispositions were insufficient closure proof because unresolved items were not transferred into the validation-gate attempt. `SETUP-SPIKE-000` continues as the Phase-1 container for `SV-002`. This does not reopen S2, S3 or S4. Future setup closure requires both terminal child dispositions and an accepted transfer/drift record for every unresolved item. |
| Tier applicability and no-authority clauses | **Amended only where setup-root and SM05 status change.** No application construction, hosted migration or deployment is authorized. |

### `V1-SM05` status meaning

Set the packet and tracking status to:

> **`BLOCKED — SETUP-SPIKE-000 validation attempt SV-002 open; not selected; feature DoR/DoD not yet run; construction not authorized.`**

`BLOCKED` here is a **packet status**, not a lane state. It does not alter the completed `SV-001`
history, invalidate Issue #1, close draft PR #2 or make Lane B `Active`.

## Setup-validation blocker register

| ID | Blocker / bounded unit | Owner | Acceptance proof | Return condition |
|---|---|---|---|---|
| **SV2-U01** | **Governance and tracking application.** Record this Judge act, continue the setup root, return `B-130`, mark SM05 `BLOCKED`, and record the `SV-001`→`SV-002` drift consistently. | Lane A | One governed commit applying `D-54`; Register, Build Spec, Inventory, both attempt identities, `V1-SM05`, `Modular_PRD.md` §8 and `B-130` agree; Phase Closure explicitly records no lane-state change; consistency suite passes. | Independent review confirms the committed propagation and no feature DoR/DoD, lane, construction or deployment authority was accidentally changed. |
| **SV2-U02** | **Antigravity loader characterization.** Determine the discovered rule/skill files, authoritative source of each limit and the exact visible instruction text for each tested backend. | Lane A owns protocol, integration and acceptance docket; Lane C executes only during a separately selected measurement turn, or the Judge supplies authenticated Antigravity evidence | A report with tool/version/backend, loaded-file inventory, beginning/middle/end sentinels, byte/character observations, errors/truncation evidence and reproducible steps. It distinguishes discovery failure, per-file truncation, total-context truncation and complete loading. | Judge accepts the report and either records “no remediation required” or separately accepts a bounded remediation; if Lane C was activated, the lane lock has returned to Lane A. Any accepted remediation is applied and independently verified. |
| **SV2-U03** | **Lane B code-navigation requirement.** Decide whether SM05 needs a new deterministic call-graph tool beyond the existing Graphify/`rg`/test workflow; evaluate `ripwire` as a candidate rather than a predetermined dependency. | Lane A owns dependency/spec evaluation; Lane B supplies consumer feasibility evidence | Written comparison against the first SM05 child: need, supported languages/files, Windows operation, output limits, security/provenance, overlap with Graphify, install/config ownership, reproducible command and negative control. | Judge records one outcome: provision the selected tool and verify it; use an existing supported path with evidence; or waive the proposed dependency as unnecessary. |
| **SV2-U04** | **SM05 contract-dependency audit.** Test whether the unresolved children of `B-071`, `B-095` and `B-104` are consumed by the bounded `business:T1`–`T5` SM05 slice. | Lane A maps canonical intent; Lane B performs feasibility review of the resulting bounded contract | Row-level matrix from each alleged conflict to `FR-15`, `AC-23`–`AC-26`, `SM05-N1`–`SM05-X1`, data writes and the proposed first work-order child. Every row states blocking / non-blocking and cites the controlling Register clause. | Every mapped blocking clause is decided, propagated, applied and independently verified; every non-blocking clause retains its existing owner and return condition without bulk closure. |

The block is lifted only when **SV2-U01 through SV2-U04** meet their return conditions and the Judge
accepts the combined setup evidence. Passing checks alone does not lift it.

## Versioned template and immutable attempt model

### Reusable template — specification, not a run

Lane A creates and inventories this reusable template:

> `docs/v1/work-packets/templates/DOR-DOD-VALIDATION-v1.md`

Its identity is `dor-dod-validation/v1`. It contains the required Project, Product, execution-scope,
backlog-refinement, historical-dialogue/tooling and attempt-lineage sections above; the closure
transfer invariant; the standard DoR and DoD evidence fields; and a DoR→DoD mapping table. It contains
no attempt result, checked gate, packet status or evidence claim.

Every attempt pins `Template-ID`, `Template-Version` and the template file's SHA-256 digest. A digest
is used instead of the containing commit because a new template and its first attempt may land in the
same governed pass; making that attempt cite the commit being created would be a self-reference. Once
an attempt uses version 1, Lane A does not edit that template version; a material template change
creates version 2. New template versions do not rewrite prior attempt results.

### Attempt lineage — discrete runs of a pinned template

`DOR-R1`–`DOR-R7` remain checked and keep their evidence, but their correct meaning is **completed
pre-selection Lane A handoff validation**. They tested the alignment of governed requirements,
behavioral scenarios and the Jev readiness script before selection. They did not run feature behavior
against application code and were not acceptance tests.

Lane A records this attempt lineage without clearing, copying or re-running the historical rows:

| Attempt | Template | State | Meaning |
|---|---|---|---|
| `SV-001` | `legacy/embedded` — no retroactive v1 claim | Complete, historical | Retrospective wrapper for the completed `DOR-R1`–`DOR-R7` pre-selection handoff-validation record and its Jev readiness evidence; references the original rows without duplicating them |
| `SV-002` | `dor-dod-validation/v1`, pinned at creation | DoR open | First run of the new reusable template; created because the selection gate exposed untransferred setup gaps |
| `V1-SM05-FV-001` | Current accepted `dor-dod-validation/*`, pinned at creation | Not created | Unrun shell created by Lane A after selection/work-order authorization and before lane transfer; first run starts after active Lane B creates behavioral test code |

Lane A creates two attempt artifacts:

> `docs/v1/work-packets/SETUP-SPIKE-000/SV-001.md` — retrospective wrapper only
>
> `docs/v1/work-packets/SETUP-SPIKE-000/SV-002.md`

`SV.md` is rejected because an unversioned path cannot distinguish attempts. `SV-001.md` must say
`Retrospective-Record: true`, point to the original checked rows and evidence, and make no claim that
the later v1 template governed the historical run. `SV-002.md` carries these identity fields:

| Field | Required value |
|---|---|
| `Template-ID` | `dor-dod-validation` |
| `Template-Version` | `v1` |
| `Template-SHA-256` | SHA-256 of the immutable v1 template bytes used by this run |
| `Attempt` | `SV-002` |
| `Previous-Attempt` | `SV-001` — historical rows and evidence remain where recorded |
| `Success-Baseline` | `SV-001` — compare outcomes without changing its completed-at-the-time status |
| `Trigger` | Judge pre-selection validation finding, 2026-09-25 |
| `Parent` | `SETUP-SPIKE-000` |
| `Blocks` | `V1-SM05` selection, State-2 work order and Lane B activation |
| `Status` | `DoR open` initially; then `Executing`; then `DoD pending acceptance`; terminal only after Judge acceptance |
| `Historical-input rule` | Cite completed `SV-001`; do not call it feature DoR/DoD and do not copy, reopen or re-check its rows |
| `Drift rule` | Every new, changed, carried or retired item must link `SV-001` evidence to its `SV-002` disposition, owner, proof and return condition |
| `Success-drift rule` | Compare scope coverage, transfer completeness, evidence strength, blocker disposition, gate result and discovery timing; classify each dimension with evidence |
| `Scope-completeness rule` | Project, Product, execution scope, backlog refinement and relevant historical dialogue/tooling each have an evidence index and explicit exclusions |
| `MMF-manifest rule` | Every MMF in the declared Product/version scope has a selection state, dependency result and evidence link or explicit non-applicability reason |

### Required `SV-001` → `SV-002` drift ledger

`SV-002.md` includes one row per item, including items found after `D-258`:

| Required field | Meaning |
|---|---|
| `Prior attempt evidence` | Exact `SV-001` row, receipt or setup child that previously carried the fact; `Absent` when it was omitted |
| `Drift class` | `Carried`, `Changed`, `New`, `Retired` or `Previously omitted` |
| `Why the gate missed it` | The concrete closure or transfer failure; no generic “drift” label |
| `Current unit and owner` | One of `SV2-U01`–`SV2-U04` and its accountable lane |
| `Acceptance proof` | The observable evidence required for this attempt |
| `Return condition` | The condition that permits the item to leave `BLOCKED` |

The first ledger entries must record that `D-258` closed the setup root from terminal child status
without proving that open residuals had been transferred into the pre-selection validation attempt.
The omitted or newly exposed items are `SV2-U01`–`SV2-U04`; Lane A must classify each from repository
evidence rather than label every row “new.”

Draft the initial ledger with these evidence-based classifications, then correct a row only if Lane A
finds stronger repository evidence:

| Current unit | Prior attempt evidence | Initial drift class | Why it was not closed or transferred | Destination |
|---|---|---|---|---|
| `SV2-U01` | `D-258` item 2 closed the root from terminal child status | `Changed` | The closure rule did not require an item-level transfer receipt | `SV-002`, Lane A |
| `SV2-U02` | `D-257` items 1–3 found the loader spike warranted but uncommissioned; `B-130` was Deferred | `Changed / previously untransferred` | The warranted spike had a return trigger but was excluded from the setup closure and pre-selection gate | `SV-002`, Lane A with bounded Lane C evidence |
| `SV2-U03` | No accepted requirement for `ripwire` or another new call-graph dependency | `New question` | Lane C proposed a remedy before the consumer need and existing-tool gap were proven | `SV-002` evaluation; dependency only if separately accepted |
| `SV2-U04` | `B-071`, `B-095` and `B-104` remained Open | `Previously omitted from dependency proof` | Selection readiness did not prove whether their unresolved children were consumed by the bounded SM05 slice | `SV-002` mapping; retain existing owners for non-blocking rows |

`B-120` and `B-125` continue to track State-1 progress in their existing entries. Other Open handoffs
are neither closed nor promoted into SM05 blockers by a tally; each is transferred only when the
row-level dependency audit proves that this bounded selection consumes it.

### Required success-drift comparison

The historical tag does not convert `SV-001` from Complete to Failed. It records two truths together:
the attempt completed the checklist and evidence expected at that time, and later validation exposed a
coverage/transfer defect in that checklist. `SV-002` measures whether the new template and transfer
rule correct that defect.

`SV-001.md` records `Outcome-At-Time: Complete`, its exact gate claim, the evidence that supported it,
and `Later-Observed-Limitations`. `SV-002.md` then compares these dimensions:

| Success-drift dimension | `SV-001` baseline | `SV-002` success criterion | Required classification |
|---|---|---|---|
| Scope coverage | Existing `DOR-R1`–`DOR-R7` and Jev readiness sources | Project, Product/MMF, execution, backlog and relevant historical-dialogue indexes are complete, with explicit exclusions | `Improved`, `Unchanged`, `Regressed`, `Newly visible` or `Not comparable` |
| Transfer completeness | Terminal setup children without an item-level destination receipt | Every unresolved relevant item has disposition or destination, owner, proof, return condition and receipt | Same classification plus evidence link |
| Evidence strength | Evidence accepted for the earlier gate | Each `SV2-U*` result is reproducible, independently reviewed where required and pinned to a revision | Same classification plus evidence link |
| Blocker disposition | Later setup blockers were not all visible in the attempt | `SV2-U01`–`SV2-U04` each meets its return condition or retains an explicit blocking state | Same classification plus evidence link |
| Gate result | Pre-selection validation appeared complete and State-1 objects were created | The attempt refuses setup closure and SM05 selection while any required scope or transfer remains unresolved | Same classification plus observed gate result |
| Discovery timing | Missing items surfaced at the SM05 selection check | Equivalent gaps are surfaced inside `SV-002` before any lift/select act | Same classification plus discovery point |

The comparison has no averaged score: one unresolved required dimension keeps the attempt open under
the weakest-child and closure-transfer rules. Future attempts compare with their immediate predecessor
and retain `SV-001` as the historical baseline for long-range drift.

### `SV-002` DoR checklist

| ID | Ready condition | Evidence required before execution |
|---|---|---|
| `SV2-DOR-01` | Authority and scope fixed | Judge ruling, exact `D-257`/`D-258` supersession table and exclusions recorded |
| `SV2-DOR-02` | Template scope, item drift and success baseline accounted for | Project, Product, execution scope, backlog refinement and relevant historical dialogue/tooling have evidence indexes and exclusions; every `SV-001`→`SV-002` carried, changed, new, retired or previously omitted item has the required drift fields; the success-drift dimensions and baseline evidence are fixed before execution |
| `SV2-DOR-03` | Units bounded | `SV2-U01`–`SV2-U04` each name owner, inputs, output path, acceptance proof, stop condition and return condition |
| `SV2-DOR-04` | Execution access available | Required repository state and an authorized Antigravity measurement slot are available; no secret or hosted mutation is required |
| `SV2-DOR-05` | Evaluation methods fixed | Loader sentinel protocol, code-navigation comparison criteria and contract-mapping columns are written before results are gathered |
| `SV2-DOR-06` | Governance boundary fixed | No feature tests or application construction, hosted migration, deployment, root `GEMINI.md`, skill rewrite, dependency install or bulk handoff closure is authorized by readiness alone |

### `SV-002` DoD checklist

| ID | Done condition | Completion evidence |
|---|---|---|
| `SV2-DOD-01` | Governance applied | `SV2-U01` propagation is committed, checks pass, graph is current and an independent reviewer confirms the intended status changes only |
| `SV2-DOD-02` | Template scope, item drift and success drift closed | Every required scope is dispositioned; every drift-ledger row has accepted proof or an explicit retained owner, destination receipt and return condition; every success-drift dimension is classified with evidence; no relevant item is silently dropped at closure |
| `SV2-DOD-03` | Loader question resolved | `SV2-U02` report is complete and Judge-accepted; any required remediation has its own decision, application evidence and independent verification |
| `SV2-DOD-04` | Code navigation resolved | `SV2-U03` records and proves one accepted outcome: provisioned tool, evidenced existing path or waiver |
| `SV2-DOD-05` | Contract dependency resolved | `SV2-U04` maps every alleged conflict; direct blockers are decided/applied/verified and non-blockers retain their existing lifecycle |
| `SV2-DOD-06` | Combined attempt accepted | Evidence index links DOD-01–05 to exact revisions; Judge records `SV-002` accepted and separately decides whether to lift the SM05 block |

### DoR-to-DoD alignment for this attempt

| DoR row | DoD proof |
|---|---|
| `SV2-DOR-01` | `SV2-DOD-01`, `SV2-DOD-06` |
| `SV2-DOR-02` | `SV2-DOD-02`, `SV2-DOD-06` |
| `SV2-DOR-03` | `SV2-DOD-01`, `SV2-DOD-03`–`SV2-DOD-05` by unit |
| `SV2-DOR-04` | `SV2-DOD-03`, `SV2-DOD-04` |
| `SV2-DOR-05` | `SV2-DOD-03`–`SV2-DOD-05` |
| `SV2-DOR-06` | `SV2-DOD-01`, `SV2-DOD-06` |

If validation later finds a materially new setup gap after `SV-002` is closed, create `SV-003.md`
with the then-current template version and a drift ledger from `SV-002`. Never clear or reuse a prior
attempt's checkboxes.

### Separate post-selection `V1-SM05` feature run

After selection and before transferring the commit lock, Lane A creates an **unrun shell** for
`V1-SM05-FV-001` from the current accepted `dor-dod-validation/*` template and pins its version and
SHA-256 digest. Its status is `Awaiting behavioral-test evidence`; no DoR or DoD result is recorded.
Lane B then becomes `Active` and creates the first behavioral test code under the bounded work order.
That code and Lane B's handoff start the first actual feature DoR/DoD run:

1. **Feature DoR passes** when the behavioral test code exists and its identifiers, inputs, expected
   outputs and exclusions align with the selected contract.
2. **Feature DoD fails on the first run** because those behavioral tests must be Red before the
   application behavior is constructed. That expected failure is recorded as test-first evidence,
   not as setup drift.
3. Lane B records the test identifiers, command and Red evidence in its owned code/test surface and
   handoff; it does not edit Lane A's attempt file. Lane B constructs the authorized behavior and
   records later Green evidence against the same attempt identity. When the lock returns, Lane A
   updates the attempt record from that handoff and performs its independent verification.

The Jev handoff-alignment script, the feature behavioral tests and the later customer acceptance run
may share canonical behavior IDs, but they are separate evidence classes. Alignment of documents and
test definitions cannot substitute for executing acceptance behavior against built code.

## Final readiness challenge

| Boundary | Ready? | Evidence or remaining condition |
|---|---|---|
| Lane A review of this docket | **Yes** | Judge acts, exact supersessions, affected tiers, artifacts, blockers, owners, proofs and return conditions are consolidated here |
| Parent 1 handoff commit | **Yes** | Only `B-135` and `B-136` are modified; Lane A is `Active`; handoff-only changes need no Graphify rebuild |
| Parent 2 canonical governance application | **Yes, bounded** | The Judge authorized setup continuation and the blocked status; Lane A must allocate the Register ID live, apply only the named write set and verify observed results |
| `SV2-U01` execution | **Yes, through Parent 2 only** | Its bootstrap commit is performed once and later reviewed as `SV2-DOD-01` evidence |
| `SV2-U02` execution | **Not yet** | Requires a Lane C measurement turn or authenticated Judge-supplied Antigravity evidence; current Lane C state is `Blocked` |
| Remaining `SV-002` execution | **Not yet** | Requires populated `SV2-DOR-*` evidence and Judge acceptance of the DoR gate |
| SM05 selection and State-2 boundary | **No** | Requires accepted `SV-002`, a separate lift/select act, bounded work order, pre-created feature-attempt shell and final lane transfer |
| Lane B construction | **No** | Requires Lane B `Active` and the committed, verified Parent-4 boundary |

Therefore this handoff is ready for **Lane A review, handoff commit and Parent-2 canonical work**. It
is not authority to skip into Parent 3, select SM05 or start construction.

## What you need

Follow the parent gates in order.

### Parent 1 — Commit the Lane B review

Lane A reviews and commits `B-135` (independent verification) and this `B-136` docket. A handoff-only
commit does not require a Graphify rebuild because `docs/handoff/` is excluded from governed intent.

### Parent 2 — Record the approved setup-continuation decision

1. Allocate the next free Register identity against live HEAD. It is expected to be `D-264` at
   `3973e73`, but Lane A must recheck immediately before writing.
2. Apply the exact `D-257`/`D-258` changes above.
3. Create `docs/v1/work-packets/templates/DOR-DOD-VALIDATION-v1.md` as the reusable, result-free
   template. Create `docs/v1/work-packets/SETUP-SPIKE-000/SV-001.md` as a retrospective wrapper over
   the completed pre-selection handoff-validation checklist, without changing its checkboxes, copying
   its evidence or claiming the new template governed it. Record its completed-at-the-time outcome,
   gate claim, supporting evidence and later-observed limitations so it is the approved success-drift
   baseline. Create
   `docs/v1/work-packets/SETUP-SPIKE-000/SV-002.md` as the first v1 template run. It contains the
   scope indexes, exclusions, item-drift ledger, success-drift comparison, new DoR/DoD checklists,
   `SV2-U01`–`SV2-U04` and evidence links. Record the template and both attempt identities in the
   Artifact Inventory in the same pass.
4. Apply `D-54`:
   - **Register:** the new Judge act and supersession table;
   - **Build Spec:** template-versus-attempt rule, required tracking scopes, setup validation active,
     attempt lineage, blocker sequence and SM05 `BLOCKED`;
   - **Artifact Inventory:** immutable v1 template, retrospective `SV-001.md`, new `SV-002.md`, pinned
     template/version fields and disposition of any later accepted tool or rule artifact;
   - **`V1-SM05.md`:** packet status plus pointers to `SV-001` history and `SV-002`; relabel the checked
     pre-selection rows as Lane A handoff-validation history, not executed feature DoR; state that the
     `V1-SM05-FV-001` shell is created after selection but before lane transfer and first run only after
     behavioral test creation;
   - **`Modular_PRD.md` §8:** setup-root and SM05 tracking status, with no FR/AC behavior change;
   - **Phase Closure §5/§5.0a:** no lane-state change; Lane A stays `Active`, Lane B `Eligible`, Lane C
     `Blocked`;
   - **`B-130`:** return from Deferred to Open using its exact Judge-commission trigger;
   - **Fn_Specs, SPECS, storyboard, Encyclopedia, frozen sources, application code and migrations:**
     unaffected unless `SV2-U04` later proves a specific contract change is required.
5. Commit, rebuild Graphify after the governed-source commit, confirm analyzed HEAD and run the
   consistency suite. Report observed results without persisting the runner's count.

Append the Parent-2 application evidence to this entry, but keep its header `Open`: `SV2-U02`–
`SV2-U04` remain weaker children, so the whole entry is not yet `Applied` or `Verified`.

This Parent completes the `SV2-U01` bootstrap work once. It supplies `SV2-DOD-01` evidence for later
review; Parent 3 does not execute `SV2-U01` again or treat the bootstrap commit as Judge acceptance of
the whole attempt.

### Parent 3 — Ready and execute `SV-002`

First review the Parent-2 `SV2-U01` evidence and obtain Judge acceptance that every `SV2-DOR-*` row is
checked. Then run `SV2-U02` and `SV2-U03` in either order, followed by `SV2-U04` and combined Judge
review. `SV2-U02` needs either a separately selected Lane C measurement turn followed by return of the
lock to Lane A, or authenticated Judge-supplied Antigravity evidence that satisfies the same protocol;
the current Lane C `Blocked` state grants no execution turn. `SV2-U03` is a read-only Lane B consumer
review filed through its handoff route; any installation remains a later Lane A provision decision.
Check each `SV2-DOD-*` row only from its named evidence. Each accepted remediation receives its own
bounded authorization and evidence; the Judge's setup-continuation ruling does not pre-approve root
`GEMINI.md`, a fixed skill size, `ripwire` installation or bulk disposition of older handoffs.
Only after the combined attempt is accepted may Lane A answer this entry and record `Applied`; an
independent Lane B review is still required before `Verified`.

### Parent 4 — Lift the SM05 block

After all return conditions are met, the Judge separately:

1. accepts the setup evidence and lifts SM05's packet block;
2. selects `V1-SM05`;
3. authorizes the bounded `D-242` work order and `D-54` boundary package;
4. while Lane A is still `Active`, creates the unrun `V1-SM05-FV-001` shell, pins the accepted
   template version/digest and names Lane B's handoff evidence route; and
5. moves Lane B to `Active` and every other lane to `Blocked` in Phase Closure as the final boundary act.

### Parent 5 — First feature DoR/DoD run, then Lane B construction

Lane B begins only after Parent 4 is committed and verified. It writes the bounded behavioral test
code and reports evidence against the already-created `V1-SM05-FV-001` shell. The initial run records
feature DoR `PASS` and feature DoD `FAIL` (Red). Lane B then implements only the selected child and
records later Green evidence against the same attempt identity. Lane A updates the canonical attempt
record only after the lock returns.

## What you did instead

Lane B converted the Judge's confirmed Path A ruling into an exact supersession map, attempt lineage,
drift contract and bounded blocker register. It separated pre-selection handoff validation from the
future feature DoR/DoD run and from later acceptance testing. It accepted continuation and the SM05
`BLOCKED` status while rejecting unproven remedies as automatic dependencies. No canonical governance
source, application file, workflow, lane state, remote object or Graphify artifact was changed.

## Verdict

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | Judge ruling that `SETUP-SPIKE-000` continues | Phase 1 / Lane A records and propagates the act |
| **Approve** | `V1-SM05` packet status `BLOCKED` | Phase 1 / historical handoff-validation attempt stays complete; feature DoR/DoD has not run |
| **Approve** | `D-257` item 3 supersession and commissioned measurement scope | Phase 1 / `SV2-U02`; return `B-130` to Open |
| **Approve** | `D-258` item 2 supersession | Phase 1 / setup root continues; S2–S4 dispositions and owners remain unchanged |
| **Approve** | `SV-001` historical identity and new `SV-002.md` | Phase 1 / preserve the completed handoff-validation attempt and track the new gap-closure attempt independently |
| **Approve** | `SV-001` as completed-at-the-time success baseline | Phase 1 / record original evidence and later-observed limitations without rewriting its result |
| **Approve** | Reusable `DOR-DOD-VALIDATION-v1.md` template, separate from attempt results | Phase 1 / inventory it, pin version and SHA-256 digest in every new attempt, create v2 for later material changes |
| **Approve** | Project → Product/MMF → execution scope → backlog refinement → historical dialogue/tooling → attempt lineage coverage chain | At every validation gate, each run reads existing canonical owners and records evidence, exclusions and transfers without changing precedence |
| **Approve** | `SV-001`→`SV-002` drift ledger | Phase 1 / prove transfer or disposition of every carried, changed, new, retired or previously omitted item |
| **Approve** | Evidence-based success-drift comparison | Phase 1 / classify scope, transfer, evidence, blocker, gate and discovery-timing changes; no averaged score |
| **Approve** | Closure transfer invariant | Phase 1 / require destination, owner, acceptance proof, return condition and destination receipt before setup closure |
| **Approve** | `SV2-U01`–`SV2-U04` blocker register and `SV2-DOR-*`→`SV2-DOD-*` map | Phase 1 / complete and obtain Judge acceptance before lifting the block |
| **Approve** | Separate `V1-SM05-FV-001` post-selection feature run | Phase 2 / behavioral tests first; initial feature DoR passes and DoD records expected Red failure before construction |
| **Approve-with-conditions** | Any loader or instruction-architecture remediation | After `SV2-U02` identifies the actual failure and the Judge accepts a bounded fix |
| **Approve-with-conditions** | Any new code-navigation dependency | After `SV2-U03` proves need and the Judge selects a supported option |
| **Approve-with-conditions** | Contract changes from `B-071`/`B-095`/`B-104` | Only rows `SV2-U04` maps directly to SM05; apply and independently verify them |
| **Defer** | A separate `feature-behaviour-dor-dod` template family | Use the accepted reusable template for `V1-SM05-FV-001` unless a governed review proves it cannot express the feature gate and authorizes a new version/family |
| **Defer** | SM05 selection, work order and Lane B activation | Phase 1 boundary / after `SV2-U01`–`SV2-U04` and a separate Judge lift/select act |
| **Defer** | Lane B construction | Phase 2 / after the committed and verified boundary |
| **Reject** | Treating root `GEMINI.md`, a 12,000-character target or `ripwire` as already approved remedies | The Judge approved validation and blocking status; the evidence must select the remedy |
| **Reject** | Reopening S2–S4 or granting them DoD credit | The Judge continued the setup container; existing child dispositions remain terminal |
| **Reject** | Calling historical `DOR-R1`–`DOR-R7` an executed SM05 feature DoR, resetting those checkboxes or using unversioned `SV.md` | `SV-001` is immutable handoff-validation history; new findings require `SV-002` and later attempts increment the identity |
| **Reject** | Treating Jev alignment, Red behavioral tests and customer acceptance as one test | They are separate evidence classes at pre-selection, feature construction and final acceptance gates |
| **Reject** | Treating the coverage chain as a new authority hierarchy | The template must traverse all required scopes while preserving `D-29`, `D-54`, `D-58`, `D-90` and each canonical owner |
| **Reject** | Assigning the new v1 template retroactively to `SV-001` or storing results in the template | `SV-001` is a retrospective legacy wrapper; results belong only to immutable attempt records |
| **Reject** | Tool/model descriptions as tracking authority or pre-approved dependencies | Agent dialogue is provenance; `ripwire`, root `GEMINI.md` and prompt-size remedies require evidence and separate decisions |
| **Reject** | Duplicate `C-011`, master ledger, preassigned decision identity, fixed Open-handoff list or persisted check tally | Reuse this docket, allocate live and let canonical files and the runner own current state |
