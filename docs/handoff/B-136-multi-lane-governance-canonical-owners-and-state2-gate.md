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

  **Parent 3 receiving receipt, 2026-09-26 (`D-269`, commit `4e513fd`; Judge Option A, canonical absorption).** This entry receives, as transition owner, two obligations absorbed from source entries that are now `Superseded` with no return trigger. *Label mapping:* the Judge and Lane A's `D-263` note call these acts Parent 3; this entry's current body numbers them **Parent 4** (lift the block, select, work order) and **Parent 5** (`V1-SM05-FV-001`, then construction). The durable owner is `docs/v1/work-packets/V1/V1-SM05.md`.

  | Received from | Obligation | Owner | Destination | Future acceptance proof | Gate condition |
  |---|---|---|---|---|---|
  | `B-120` Parent 5 | Selection, `D-242` work order, Lane B activation, construction | Judge (selection, work order); Lane B (construction) | This entry's Parents 4–5, then `V1-SM05` / `V1-SM05-FV-001` | Recorded selection and work order; `V1-SM05-FV-001` feature DoD and Judge acceptance | Only after `SV-002` is accepted and the `V1-SM05` block is lifted |
  | `B-125` Parent 6 | As above | As above | As above | As above | As above |

  Receipt only: none of these acts is complete, and `Status` stays `Open`.
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

> **Lane A dated current-state note, 2026-09-26 (`D-269`), added at Lane B's request in `B-139` (`28be9e5`); the
> sentence above is Lane B's original text, kept as history.** `B-120` and `B-125` no longer track State-1 progress:
> both are `Superseded`, terminal, with no return trigger (`D-268` as corrected by `D-269`). Their remaining
> obligation — selection, work order, Lane B activation, construction — is received by this entry's Parent 3 receipt
> (Lane A field, `ee2e232`) and owned durably by `V1-SM05.md`. The rest of the paragraph stands.

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

## Lane A draft — `SV2-DOD-01`/`-02` evidence index for P15, 2026-10-05 (`D-418` item 3)

Read at `296a47b`. The Judge directed Lane A to assemble this index now (`D-418` item 3); `SV2-U03` stays unselected.
**This is a draft for Lane B's review, not a checked box.** P15 clears only by the Judge's act at `SV2-DOD-06`
(`D-382` item 6). The prospective reason (B-154 `9f8a872` D1) is held for that act. Assembling the index exposed
two gaps, marked **GAP**.

### `SV2-DOD-01` — governance applied (`SV2-U01`)

| Criterion (`SV-002` §7, §3 U01) | Evidence, pinned | State |
|---|---|---|
| `SV2-U01` committed | `10ec465` (`D-264`), with its `D-54` propagation | Met |
| Checks pass | `bun run check` 19/19 at `296a47b`; fixtures 297/297 at `296a47b` | Met at the current revision |
| Graph current | Governed intent synced at `296a47b` (D-418 candidate `62baf295…`, **unreleased** pending Lane B's review) | Met once that candidate is released |
| Independent reviewer confirms only the intended status changes (`D-264`: no DoR/DoD, lane, construction or deployment authority moved) | **GAP: none exists.** `D-266` item 5 recorded "`SV2-DOD-01` waits for an independent review of `SV2-U01` (`10ec465`)". No later handoff performs it: `B-137`, `B-139` and `B-150` cite `10ec465` for other purposes | **Not met** |

**Draft fix:** Lane B independently reviews the `10ec465` diff against `SV-002` §3 `SV2-U01`'s acceptance, and records
the result in this entry or its own one-path commit.

### `SV2-DOD-02` — coverage, item drift and success drift

| Criterion | Evidence, pinned | State |
|---|---|---|
| Every ledger row proven or retained with owner, receipt and return | `SV-002` §2.3.1 derived at `3488206` (`D-418`): 106 rows, **6 non-SM05 open**, 0 SM05 unreceived, 0 unlisted. Each open row has a named owner and return, listed below | Met for "retained", if the Judge accepts these six as retained (see the decision note) |
| Every scope dispositioned | §2 scopes and the §2.3.2 keyed ledger (158 transactions; child census `D-384`/`D-385`); `GOV-RES-001` `GR-001`–`GR-021` receipts | Draft: met, pending Lane B's re-read of §2 |
| Every success-drift dimension classified (§5) | **GAP: all six dimensions still read *at DoD*.** Proposed classifications below | **Not met** until §5 is classified |

**The six open rows, each with owner and return:**

| Row | Owner | Return / clearing act |
|---|---|---|
| `B-050` (O1) | Lane A, under the `D-418` F1 work order | F1→F2→F3 accepted, then B-050's own disposition |
| `B-136 (P15)` (O1) | The Judge | The `SV2-DOD-06` act |
| `B-077` (O4) | `GR-007`; Lane B as reviewer | B-050's disposition, then the final review (local commits, `SC8` query) |
| `B-150`, `B-153`, `B-154` (O0) | Independent actors and the Judge | Each parent's own disposition after its children, then GR-007 F |

**Proposed §5 classifications, for Lane B review** (vocabulary as in §4: Met / Not met, with the reason):

| Dimension | Proposed | Basis |
|---|---|---|
| Scope coverage | Met | §2 indexes the coverage scopes with exclusions; the `D-384`/`D-385` census is complete |
| Transfer completeness | Met, with the six retained rows above | `GR-001`–`GR-021` give each received residual an owner, hold, trigger and completion; tracker rows are each closed, received or retained |
| Evidence strength | **Not met** | `SV2-U01` is not independently reviewed (the GAP above); `SV2-U03` has no run |
| Blocker disposition | **Not met** | `U01` lacks its review and `U03` is unrun; `U02` (`D-362`) and `U04` (`D-289`) are met |
| Gate result | Met so far | `V1-SM05` stays `BLOCKED`; no selection or closure was made while items were unresolved |
| Discovery timing | Met so far | Gaps surfaced inside `SV-002` before any lift: the B-050 null write, the PC6 identity defect, and the DOD-01 review gap found here |

**Decision note.** "Retained with owner, receipt and return" is `SV-002`'s own wording for `DOD-02`. Whether open O0
parents and P15 itself count as "retained" for `DOD-02` is the Judge's reading at `SV2-DOD-06`. This draft does not
decide it.

**Requested of Lane B:**
- (1) the `SV2-U01` independent review (`10ec465`);
- (2) a review of this index and the proposed §5 classifications.

Applying the §5 classifications and checking any box are governed edits for a later act. `B-136` stays Open; P15 stays
open.

## Lane B independent U01 and P15 index review — 2026-10-05

**Read:** `6cb779ca18c11afb95bc28f70ecb5da2475f6415`; index `f88379a`; historical U01
`10ec465110c068257cfaf3781cd2e1810378cf1e`. Lane B raises this result; Lane A answers here.
No DoD checkbox, source header, ledger clearance or Judge acceptance is recorded by this review.

**U01 intended-status review: accepted.** Reviewed the 15-path historical diff against D-264 and
SV-002 §3 U01. Register supersession, Build Spec, Inventory, Modular_PRD §8.1 and S2–S4 notes
continue the setup root while preserving terminal children without DoD credit. B-130's commission
trigger returns it to Open. SM05 is a blocked, unselected packet; the historical DOR-R rows are
not an executed feature gate. The result-free template, retrospective SV-001, new SV-002 and
read-only U03 evaluation provide the intended artifacts. The new attempt's DoR/DoD rows were
unchecked; the diff changes no Phase Closure lane state, application code, workflow, schema,
feature construction, hosted mutation or deployment authority. Commissioning U02 and evaluating
U03 read-only are the explicit D-264 decisions, not implicit feature permission.

This supplies the independent intended-status review missing from the DOD-01 index. It does not
assert that every historical link/label was mechanically correct: later D-265 and other corrections
keep their own records. Current checks pass 19/19, not a retrospective claim that they ran at U01.
DOD-01 is still not ready to check: the D-418 graph candidate is held for the semantic correction
in B-050's F1-R1 review. Graph currency, independent release and source correctness remain distinct.

**Index finding P15-R1 — classification vocabulary.** The draft says Met/Not met is the §4
vocabulary. §4 uses Carried/Changed/New/Retired/Previously omitted for item drift; template v1 §6
requires Improved/Unchanged/Regressed/Newly visible/Not comparable for success drift. Met/Not met
describes criterion satisfaction and cannot substitute for the baseline comparison. Keep both
facts if useful; do not change the immutable template to fit the draft.

**Draft replacement for §5, not applied.** These are current comparisons, not a declaration of
successful attempt completion. Reassess each at the final pinned revision.

| Dimension | Comparison to SV-001 | Current success-criterion evidence / limit |
|---|---|---|
| Scope coverage | Improved | Six-scope index and D-384/D-385 census replace narrower readiness coverage; final per-scope proof must use the current keyed source ledger, not only a count |
| Transfer completeness | Improved | Individual received homes and triggers are recorded, including D-418 B-106 custody; final completeness remains conditional on each required open row's accepted disposition/receipt |
| Evidence strength | Newly visible | Loader D-362 and dependency D-289 proofs plus this U01 review expose the stronger required evidence contract; U03 remains unrun and graph release is held. Stronger requirements are not completed results |
| Blocker disposition | Newly visible | U01–U04 and residual rows are explicit; U03 and B-050 remain unresolved. No final success claim |
| Gate result | Improved | SM05 selection and setup closure continue to be refused while prerequisites are unresolved; this compares refusal behavior, not an accepted final gate |
| Discovery timing | Improved | B-050/PC6 and the missing U01 review surfaced within SV-002 before block lift/selection; later equivalent gaps require their own evidence |

**P15-R2 — open-row retention is not blanket clearance.** Naming an owner/return for six open
rows does not prove the accepted receipt or disposition required by D-364. B-050 remains a required
O1 proof, with rejected risk acceptance; B-077 still waits for it. O0 parent dispositions follow
their child evidence. P15 alone has an explicit D-382 route at the same DOD-06 act: the attempt
docket can receive its individual acceptance there, without inventing earlier clearance.
Do not infer the same concurrent exception for all six rows.

**Draft repair to the decision note:** "Retained means a named surviving obligation with its
own accepted destination/receipt/proof and return condition. It does not waive a required gate
proof or change a D-364 clearing rule. Index each row's controlling act separately. P15's own
reason is supplied at DOD-06 under D-382; other required dispositions must exist when that act
is assessed. Any proposed exception requires a precise Judge amendment naming the affected row,
remaining owner, evidence and dependency; none is granted by this draft."

Lane A replaces the completed U01 review gap with this receipt, keeps graph release pending,
corrects §5 vocabulary under its governed-act rules and supplies the per-row evidence. U03 stays
unselected; DOD-04 and DOD-06 stay unchecked. DOD-03/05 accepted evidence remains intact.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | U01 intended-status diff and index structure | Phase 1: record this bounded independent review in the DOD-01 evidence index |
| Approve-with-conditions | Revised success-drift comparisons and DOD-01/02 evidence | Phase 1: source-specific evidence, graph release, governed propagation and final revision reassessment |
| Defer | U03, DOD-01/02 checkoff, attempt acceptance and P15 clearance | Phase 1: their individual prerequisites and Judge DOD-06 act |
| Reject | Met/Not met as the success-drift vocabulary; blanket acceptance of six open rows as cleared | Phase 1: apply P15-R1/R2 draft corrections under separate authority |

## Lane A answer to the U01 and P15 index review — index revised, 2026-10-05

Read at `d944ff4`. Lane A receives Lane B's review (`7faf618`) and accepts it. Lane A's "Met/Not met as the §4
vocabulary" was wrong: §4 uses drift classes, and template v1 line 79 requires `Improved`/`Unchanged`/`Regressed`/
`Newly visible`/`Not comparable` for success drift. U03 stays unselected (the Judge, 2026-10-05). Nothing below
checks a box.

**DOD-01, revised:**

| Criterion | Evidence | State |
|---|---|---|
| `SV2-U01` committed | `10ec465` | Met |
| Checks pass | 19/19 at `1dc4b42` (current, not retrospective) | Met at the current revision |
| Graph current | `6e3adfa4…` at `1dc4b42`, **unreleased** pending Lane B | Pending release |
| Independent review of intended status only | **Lane B, `7faf618`**: the 15-path diff matches `D-264`/§3 U01, with no DoR/DoD, lane, code, workflow, schema or deployment authority moved | Met (bounded, not retrospective mechanical correctness) |

**§5 success drift: Lane B's comparison adopted, with criterion satisfaction kept in its own column.** Each is
reassessed at the final pinned revision.

| Dimension | Comparison to SV-001 | Criterion satisfaction now |
|---|---|---|
| Scope coverage | Improved | Pending final per-scope proof from the keyed ledger |
| Transfer completeness | Improved | Conditional on each required open row's accepted disposition or receipt |
| Evidence strength | Newly visible | Not complete: U03 is unrun; graph release is held |
| Blocker disposition | Newly visible | Not complete: U03 and B-050 are unresolved |
| Gate result | Improved | Refusal behavior is holding; this is not an accepted final gate |
| Discovery timing | Improved | Holding for the gaps found so far |

**Decision note, replaced with Lane B's text (P15-R2):** "Retained means a named surviving obligation with its own
accepted destination/receipt/proof and return condition. It does not waive a required gate proof or change a D-364
clearing rule. Index each row's controlling act separately. P15's own reason is supplied at DOD-06 under D-382; other
required dispositions must exist when that act is assessed. Any proposed exception requires a precise Judge amendment
naming the affected row, remaining owner, evidence and dependency; none is granted by this draft."

**Per-row disposition matrix** (the controlling act for each open row; none is cleared by naming an owner):

| Row | Controlling act that clears it | Evidence still required |
|---|---|---|
| `B-050` (O1) | Its own source disposition after F1→F2→F3 and the final proof (the risk reason was rejected) | Accepted F1 checkpoint (pending), then F2, F3 and independent end-to-end proof |
| `B-136 (P15)` (O1) | The Judge's individual reason at `SV2-DOD-06` (`D-382` item 6) | DOD-01–05 indexed and accepted, including U03 → DOD-04 |
| `B-077` (O4) | Lane B's final review under the `D-416` criteria, or an individual reason | B-050's disposition, the refreshed 17 targets, and a fresh SC8 query |
| `B-153` (O0) | An independent Verified of its correction unit, or an individual reason | Its own child evidence |
| `B-154` (O0) | The same, for its correction units | Its own child evidence |
| `B-150` (O0) | The audit parent's own disposition, after B-153/B-154 | Completed child evidence, then GR-007 F |

Applying these to `SV-002` §5/§7 is a governed edit for a later act. B-136 stays Open; P15 stays open.

## Lane B revised-P15 index review — 2026-10-05, read `5eff869`

**Accepted, bounded to `1e11009`:** U01's independent intended-status receipt is accurately indexed;
the six comparisons use template v1 §6 vocabulary with criterion satisfaction kept separate;
P15-R2's retained-row limit is adopted; all six open rows have a source-specific clearing route.
This resolves the draft defects P15-R1/P15-R2. It does not apply §5, check DOD-01/02, ratify a
row exception or accept the attempt. Lane B raises this receipt for Lane A's answer.

Graph release is still held on B-050 F1-R2's semantic review; DOD-01 therefore remains pending
that receipt. DOD-02 still needs actual row dispositions/receipts and current per-scope evidence.
U03 remains unselected by the Judge's recorded choice: DOD-04 has no selected proof, so an attempt
acceptance/P15 clearance request would fail its prerequisite today. This is a known dependency,
not permission to install/run a tool or waive the row. DOD-03/05 retain their accepted evidence.

**Lane A next:** retain the corrected draft and U01 receipt; record the F1-R2/graph hold beside
DOD-01; prepare the final per-scope and per-row index from actual accepted acts. Present §5
application and later U03 selection as separate Judge choices. P15's D-382 reason belongs at
DOD-06; parent dispositions follow their children, and GR-007 F remains after those dispositions.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | Revised index and resolution of P15-R1/R2 drafting defects | Phase 1: preserve receipt at 1e11009 |
| Approve-with-conditions | Governed §5 application and final DOD-01/02 evidence | Phase 1: exact current proofs, graph release and proper Judge act |
| Defer | U03, DoD checkoff, attempt acceptance and P15 clearance | Their separate Phase 1 prerequisites/acts |
| Reject | A corrected draft, named clearing route or green suite substituted for an actual clearing act | Phase 1: preserve the separate evidence gates |

## Lane A receipt of the revised-index review, 2026-10-05

Read at `b6c81ee`. Lane A receives Lane B's review (`dc8175c`): the revised index at `1e11009` is accepted, and
P15-R1/R2 are resolved. **Holds, annotated:**
- **DOD-01** waits only on graph release. The candidate is now `49a4b596…` (`D-419`, `4e03902`), pending Lane B's
  F1-R2 review.
- **DOD-02** waits on actual row dispositions and receipts, and current per-scope evidence.
- **DOD-04** has no selected proof, because the Judge keeps `SV2-U03` unselected (2026-10-05).

**A P15 clearance request today would fail its DOD-04 prerequisite.** None is made.

**The Judge, 2026-10-05:** apply `SV-002` §5 **later**, batched with the graph-release/DOD act (`D-419`). Nothing here
checks a box. B-136 stays Open; P15 stays open.

## Lane A — `SV-002` §5 applied under `D-423`, 2026-10-06

Read at `434129c`. **The Judge, 2026-10-06:** "Apply now" (`D-423` item 3).
- **§5 is applied (`8554511`):** the accepted comparisons in template v1 §6 vocabulary, a separate "Criterion
  satisfaction now" column, and evidence pointers.
- **The U03 evaluation §2 "Overlap" claim is corrected:** the graph holds generated code (434 at `693a6a7`). Measured
  graph coverage is not proven caller completeness. The U03 trial is unchanged.
- **No DoD box is checked.** `DOD-01`'s graph-currency proof now waits on this batch's own candidate (`9993bded…`,
  pending Lane B review) and its release; `DOD-01` can then be checked only by a later act citing it.
- DOD-02/04/06 and P15 are unchanged, and U03 stays unselected.

B-136 stays Open; P15 stays open.

## Lane A — current `DOD-01` graph pointer, 2026-10-06

Read at `50ade9a`. Under the Judge's approved plan (B-050, `855f618` step 4), after Lane B's exact-hash acceptance
(`1a374a6`):
- **Current released graph for `DOD-01`'s graph-currency evidence:** `35541b337b25d2a16ee237219ee4f3417e668e352c3d8da044a21208cc5b1edb`.
  - Analyzed at `40429f8`, with 583 state files.
  - Release recorded in B-050.
  - Sync evidence: `C:/CoWork/outputs/lane-a-d424c-sync-2026-10-06/MANIFEST.md`.
- **The entry above stays as history:** it named `9993bded…`, a D-423 candidate superseded without release.
- **No DoD box is checked.** `DOD-01` is checked only by a later act citing this pointer and its own criterion.
- DOD-02/04/06 and P15 are unchanged, and U03 stays unselected.

B-136 stays Open; P15 stays open.

## Lane A â€” O0 dispositions received; D-431 recorded and applied; push done, 2026-10-10

Received: Lane B's independent dispositions B-077 `Verified` (`fdf06dc`), B-154 `Verified` (`5690e20`) and B-150
`Verified` (`9df66a5`); B-153 stays `Verified` (`43495db`). **Judge, 2026-10-10**, in chat: "Judge Approved: Tracker
rebuild and guarded cycle, GR-007, Gate 2, B-136 P15, push of the new commits".

### What happened

| Step | Commit | Result |
|---|---|---|
| Push of the new commits | â€” | fetch first; `eb1ecde..9df66a5`, 10 handoff-only commits, fast-forward; origin `9df66a5` |
| `D-431` recorded | `1dbc64c` | Register Â§5.14e256, Build Spec, Inventory; `docs-drift` the sole failure afterwards (`D-428`) |
| `D-431` applied | `04ecb48` | `SV-002` Â§2.3.1 re-derived at `9df66a5` (B-050, B-153, B-077, B-154, B-150 closed under the Verified-header rule); Â§2.3.2 keys the five verifications (158 keyed rows = 162 entries less 4 turn reports); GR-007 assessed **not complete**; `frag121` B-077 description (one leaf, SHA-256 `13d86618â€¦`) |
| This receipt | this commit | B-136 only: B-154 became `Verified` (terminal) at `5690e20`, so this receipt is recorded here, P15's own entry |

`closure-readiness`: tracker at `9df66a5` **(current)**, 106 rows, **1 non-SM05 unclosed (`B-136 (P15)`)**, 0 SM05 not
received, 0 unlisted, 0 unreferenced, 0 invalid. Logs in `C:/CoWork/outputs/lane-a-d431-2026-10-10`.

### Gate 2 and P15, stated from the source

Gate 2 is **not** claimed, and a claim now would fail: `B-136 (P15)` is open, and it clears only at `SV2-DOD-06`
("Evidence index links `DOD-01`â€“`05` to exact revisions; the Judge accepts `SV-002`"). `SV2-DOD-03` and `-05` are
checked; `SV2-DOD-01` and `-02` have evidence and no checkoff; **`SV2-DOD-04` ("`SV2-U03` outcome recorded and
proven") has no outcome: `SV2-U03` stays unselected (`D-418`).** The Judge's approval of "Gate 2" and "B-136 P15" is
recorded as approval to assess them (`D-431` item 6), not as their acceptance.

### What you need

**Lane A next:** one guarded `prepare` from the commit containing this receipt, then Lane B's exact-byte and semantic
review (acceptance record in B-050, with the covering annotation pattern used for D-430), publication and health.
**Judge, separately:** how `SV2-DOD-04` is to be met (select and run `SV2-U03`, or record an individual reason), before
the `SV-002` acceptance that clears P15.

### What you did instead

No `SV2-DOD` checkoff, `SV-002` acceptance, `V1-SM05` unblock, work order or lane change.

## Lane A — D-431 candidate ready at `ba141e0`; review request, 2026-10-10

Under `D-431` item 5. Evidence: `C:/CoWork/outputs/lane-a-d431-2026-10-10` (work folder `work`, workId
`faf6f6ff-85af-49de-a169-3694b8fcc179`); each run in its own file.

### What happened

| Item | Value |
|---|---|
| Source HEAD (captured) | `ba141e02538074155025664603ca0ab92d777f3f`; delta since R1's source `3366244`: the `D-431` recording (`1dbc64c`) and application (`04ecb48`), and handoff files only; no code |
| Check at that HEAD | `docs-drift` the sole failure (`D-428`); `08-check-at-source.log` SHA-256 `0f04090b…` |
| Baseline | live R1, locus `28853be`, guard-treeDigest-v1 `55dba74c…`, 583 files |
| Run | `prepare` → pending (exit 3; 0 descriptions, 46 communities) → `prepare --resume --answers` → **ready** (exit 0) |
| Candidate | graph SHA-256 `4dd5029b413ecdfe9af9077b6e04f3d0bc226a86b9ea9a0b6926f5259790b3db`; manifest `971f956888fb2268f1a885e7a47000b9bddcd23d93d41d67435f72765497ded7`; 583 files; frozenAt 2026-10-09T17:05:29.294Z |
| Selection / D-429 packet | oracle `205a6967…`; final observation 2026-10-09T16:52:28.533Z; validated ignored count 698, AST cache 322, transient 1 |
| Answers | `answers.json` SHA-256 `549be3ff…`: 0 descriptions pending; **46 community names, all newly derived** and none equal to any R1 label: 8 code groups named by hand from their members, 38 commit-history groups named mechanically from their members' cited decision range and most-cited entries (`derive-names.mjs`; per-name evidence `02b-name-basis.json` SHA-256 `a024d2ec…`) |

**Lane A's read-only verification** (`11-candidate-verification.json` SHA-256 `099f88fc…`): manifest, graph hash, file
count and answers hash recomputed and equal; 2,524 nodes, 5,517 links, 139 communities, 0 undescribed; fragment parity
139/139 exact; name binding 0 findings; every name applied; 0 foreign-path hits; staged branch record analyzed
`ba141e0`, `stale: false`; **the B-077 node carries exactly `D-431` item 3's text** (SHA-256 `13d86618…`); live
unchanged, no journal, no lock.

### What you need

**Lane B: receipt 2 for D-431**: the exact bytes and meaning of graph `4dd5029b…` / manifest `971f9568…` from source
`ba141e0` and baseline `55dba74c…`, including the B-077 text and the 46 names (the 38 commit-group names are
mechanical; rename any you find misleading by a stated finding, not silently). Its typed acceptance record goes in
**B-050** by Lane B's own review commit, followed by Lane B's record-only Terminal annotation commit citing it, the same
pattern as D-430. Option A was granted for D-430's candidate only; this candidate's use of it rests on the Judge's
2026-10-10 approval of the "guarded cycle" (`D-431` item 5), not on precedent. The durable fix (the guard reading the
acceptance from a non-terminal entry) is a guard source change and belongs with the next governed guard change. After
acceptance: publication, full health, then the B-077 description is current.

### What you did instead

No publication, fetch or push since the prepare. No disposition, DoD checkoff or acceptance.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | D-431 candidate `4dd5029b…` prepared from `ba141e0`; B-077 text applied | Phase 1: Lane A's evidence |
| Approve-with-conditions | Receipt 2 for D-431 | Phase 1: Lane B's review commit in B-050 and its annotation |
| Defer | Publication and health; P15 (`SV2-DOD-04` needs `SV2-U03`); Gate 2 | Phase 1: in order |
| Reject | Treating the candidate as accepted; reading Option A as a standing precedent | Phase 1 |

## Lane A — D-432 recorded (route A2); answers to Lane B's F1–F6, 2026-10-10

Lane B's D-431 decision-impact review was received in chat. The Judge selected A2 ("Judge approved: A2 — Prepare
replacement"). Lane A recorded the act as `D-432` at `39bcd77` (Register §5.14e257, Build Spec, Inventory). Check
after that commit: 18/19, `docs-drift` the only failure (`D-428`).

### Answers

| Finding | Lane A answer | Where it is settled |
|---|---|---|
| F1 Register change after prepare invalidates the candidate | **Accepted.** Lane A's earlier draft fix (a Register addendum, then publish `4dd5029b…`) would fail `publicationSourceFindings`: only commits touching `docs/handoff/` alone may follow prepare. | `D-432` item 2: recording lands before the replacement prepare |
| F2 A1's later Register entry creates new drift | **Accepted**, and closed by the route. Under A2 the canonical record is in the analyzed source; no later recording or second sync is owed. | `D-432` item 2 |
| F3 A2 still needs the `terminal-return` exception | **Accepted.** Lane A's earlier comparison wrongly implied the replacement removes it. | `D-432` item 4: scoped to this unit, not to one hash; ends at publication |
| F4 A2 changes the bindings | **Accepted.** The replacement needs Lane B's new exact-byte and semantic acceptance. Old evidence stays as history. | `D-432` items 1 and 3 |
| F5 Review, acceptance, publication and closure were mixed | **Accepted.** Lane A wrote "not recorded" as "not passed". Lane B's review of `4dd5029b…` passed (empty `failures`, read revision `20c9347`); no acceptance record was committed. | `D-432` item 5 |
| F6 Decision alerts lacked complete rows | **Accepted.** The table below is the decision row format from now on. | This entry |

No finding is rejected.

### State, parents first

| Item | Review | Acceptance recorded | Published | Closed |
|---|---|---|---|---|
| Gate 2 / SV-002 | — | No | — | No (`D-431` item 6) |
| ↳ B-136 (P15) | — | No | — | No: `SV2-DOD-01`, `-02`, `-04` (needs `SV2-U03`), `-06` |
| ↳ GR-007 | Assessed | — | — | No: final conclusion after P15 |
| `4dd5029b…` | Passed (Lane B) | Never | Never — superseded | History |
| Replacement candidate | Pending | Pending (B-050, then annotation) | Pending (`D-431` approval) | Pending health |

### Decision row (route A2)

| Choice | Authority | Recording location | Source impact | Blocked step | Next owner |
|---|---|---|---|---|---|
| A2: replacement, unit-scoped exception | Judge, 2026-10-10 | Register `D-432` (`39bcd77`); this entry | New analyzed source ≥ this commit; `4dd5029b…` void | Receipt 2 on the replacement | Lane A prepares; Lane B reviews |

### What you need

Nothing yet. Lane A prepares the replacement from the final committed source and posts its bindings here. Then Lane B
reviews it and records receipt 2 in B-050, followed by its annotation.

### What you did instead

No prepare, publication, fetch or push yet. No disposition, DoD checkoff or acceptance.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | F1–F6, all accepted; `D-432` recorded | Phase 1: none |
| Approve-with-conditions | Replacement cycle | Phase 1: prepare, Lane B receipt 2 and annotation, publication, health |
| Defer | P15, `SV2-U03` selection, GR-007 conclusion, Gate 2 | Phase 1: evidence and Judge acts, in order |
| Reject | Publishing `4dd5029b…`; reading `D-432` item 4 as precedent | Phase 1 |

## Lane A — D-432 replacement candidate ready at `1940af8`; receipt-2 request, 2026-10-10

Under `D-432` item 3. Evidence: `C:/CoWork/outputs/lane-a-d432-2026-10-10` (work folder `work`, workId
`0cbe0599-f0ac-47d6-8dc5-7d0be9714ab7`); each run in its own file.

### What happened

| Item | Value |
|---|---|
| Source HEAD (captured) | `1940af888fff8193565c2c802c7d4e356513513e`; delta since `ba141e0`: `D-432` recording (`39bcd77`) and handoff files only; no code |
| Check at that HEAD | `docs-drift` the sole failure (`D-428`); `01-check-at-source.log` SHA-256 `7474a4b3…` |
| Baseline | live R1, locus `28853be`, guard-treeDigest-v1 `55dba74c…`, 583 files (unchanged) |
| Run | `prepare` → pending (exit 3; 0 descriptions, 5 communities) → `prepare --resume --answers` → **ready** (exit 0) |
| Candidate | graph SHA-256 `4bf7864a2521ab2393cb382a1574ed3224701ae444bde288ad8a32963f3e4cb1`; manifest `858ab980984e005f49a937a1cba82875d93eb58db7d89b92ca178abb48b2d240`; 583 files; frozenAt 2026-10-10T05:14:07.731Z |
| Selection | oracle `42e8ff24…` |
| Answers | `answers.json` SHA-256 `47712c16…`: 0 descriptions; **5 community names**, all commit-history groups, named by the same mechanical rule as `D-431` (`derive-names.mjs`; per-name evidence `04-name-basis.json` SHA-256 `0a211601…`; every member-set hash recomputed) |

The five names: `D-338–D-427 B-050/B-154 Commits` (97 members), `D-385–D-432 B-077/B-154 Commits` (17),
`D-420–D-424 B-050/B-154 Commits` (23), `D-416–D-430 B-050/B-154 Commits` (22), `D-405–D-409 B-106/B-154 Commits` (28).
The first spans a wide range because the group merged D-338-era and F3 commits; rename it by a stated finding if
misleading.

**Lane A's read-only verification** (`06-candidate-verification.json` SHA-256 `c7d5aa06…`): manifest, graph hash, file
count and answers hash recomputed and equal; 2,527 nodes, 5,523 links, 132 communities, 0 undescribed; fragment parity
139/139 exact; name binding 0 findings; every answer applied; 0 foreign-path hits; staged branch record analyzed
`1940af8`, `stale: false`; **the B-077 node carries exactly `D-431` item 3's text** (SHA-256 `13d86618…`); live
unchanged, no journal, no lock.

### What you need

**Lane B: receipt 2 for `D-432`'s replacement**: the exact bytes and meaning of graph `4bf7864a…` / manifest
`858ab980…` from source `1940af8` and baseline `55dba74c…`, including the B-077 text and the five names. Your earlier
review of `4dd5029b…` does not carry over (`F4`). Record the typed acceptance in **B-050** by your own review commit,
then your record-only Terminal annotation commit citing it (`D-432` item 4: only `terminal-return` and `docs-drift`
may fail between them). Commits after `1940af8` must touch `docs/handoff/` only. After acceptance: publication under
`D-431`'s approval, then full health.

### What you did instead

No publication, fetch or push since the prepare. No disposition, DoD checkoff or acceptance.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | Replacement `4bf7864a…` prepared from `1940af8` | Phase 1: Lane A's evidence |
| Approve-with-conditions | Receipt 2 on the replacement | Phase 1: Lane B's review commit in B-050 and its annotation |
| Defer | Publication and health; P15; Gate 2 | Phase 1: in order |
| Reject | Treating the candidate as accepted; carrying the `4dd5029b…` review over | Phase 1 |

## Lane A — D-432 replacement released with review `916d5cc`; health 19/19, 2026-10-10

Lane B's receipt 2 was received: acceptance `916d5cc`, covering annotation `16415d4` (B-050). Lane A compared its
bindings with the candidate: workId `0cbe0599…`, graph `4bf7864a…`, manifest `858ab980…`, 583 files, source
`1940af8`, baseline `55dba74c…` @ `28853be` — all equal. Evidence: `C:/CoWork/outputs/lane-a-d432-2026-10-10`.

### What happened

| Step | Result |
|---|---|
| Pre-publish check at `16415d4` | 18/19, `docs-drift` the only failure; `terminal-return` passes (`08-check-pre-publish.log`) |
| Source rule at `16415d4` | `ok`, 0 findings (handoff-only fast-forward from `1940af8`) |
| `publish --work … --review 916d5cc` | **released**, exit 0, "live equals the reviewed manifest"; run token `fcade7f7-f993-48c2-86b7-c44944ffe263` (`09-publish.log`) |
| Full health | **19/19**; `docs-drift` synced at `1940af8` (`10-health.log` SHA-256 `263ca345…`) |
| Live parity | live graph `4bf7864a…`, manifest `858ab980…`, 583 files, equal to the reviewed bytes; branch record analyzed `1940af8`, `stale: false`; no journal, no lock (`11-live-parity.json` SHA-256 `32320689…`) |

`D-431` item 5 and `D-432` items 3–4 are complete. The `D-432` recording exception has ended. The B-077 curated
description (`13d86618…`) is now live.

### State, parents first

| Item | Reviewed | Acceptance recorded | Published | Closed |
|---|---|---|---|---|
| Gate 2 / SV-002 | — | No | — | No (`D-431` item 6) |
| ↳ B-136 (P15) | — | No | — | No: `SV2-DOD-01`, `-02`, `-04` (needs `SV2-U03`), `-06` |
| ↳ GR-007 | Assessed | — | — | No: final conclusion after P15 |
| `4bf7864a…` | Passed (Lane B) | `916d5cc` + `16415d4` | Yes, run `fcade7f7…` | Health 19/19 |

### What you need

Nothing for this cycle. Next in order: the P15 evidence index (`SV2-DOD-01`, `-02`), the Judge's `SV2-U03` bounded-trial
selection for `SV2-DOD-04`, then `-06`, the GR-007 conclusion and Gate 2. No push is made by this record.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | Publication of `4bf7864a…` and health 19/19 | Phase 1: none |
| Defer | P15, `SV2-U03`, GR-007 conclusion, Gate 2; push | Phase 1: evidence and Judge acts, in order |
| Reject | Treating graph currency as P15, GR-007 or Gate 2 acceptance | Phase 1 |
