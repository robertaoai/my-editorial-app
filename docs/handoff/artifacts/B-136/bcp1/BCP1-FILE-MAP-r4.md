# BCP-1 file map r4 — delta (answers Lane B `cba4678`: R3-R1, R3-R2, R3-R3, push provenance), 2026-10-15

**Status:** final; recorded in B-136 (draft kept as `BCP1-FILE-MAP-r4-DELTA-DRAFT.md`). **Base:** r3 `347e621b…` on r2 `3d4d6100…`; both kept unchanged.
**Observed at:** `cba4678`. r4 = r3 with §3, §4 and §5 of r3 replaced by §1–§3 below. r3 §1 (BCP2-R1, BCP2-R2,
grading pointer; **Verified** by Lane B `cba4678`) and r3 §2 location table are retained unchanged.
**Pins used:** `FN-GATES-01-05.md` @ `e905cf8`; `Modular_PRD.md` @ `b77d186`; `V1-SM05.md` @ `29bce67` (r2 F6).

## 1. R3-R1 — complete row join (replaces r3 §3 row list)

Partitions (accepted categories): **I** Phase 1 intent · **S** setup/control · **TB** test baseline · **IP** implementation
packet · **C** construction · **R** results · **X** existing, out of SM05 scope. Grouped IDs are expanded. Every row has one
role and one trigger. "→" reads writer → reviewer. Triggers not restated here are the r2 row's own.

| ID | Object | Part. | Role | Trigger / disposition |
|---|---|---|---|---|
| F1 | `docs/PRD.md` (frozen) | I | none writes; Lane A cites | work-order drafting; raw-byte proof (r3 §1) |
| F2 | Charter (frozen) | I | none writes; Lane A cites | same |
| F3 | `Modular_PRD` anchors | I | Lane A → Lane B | SPECS drafting |
| F4 | FN-GATES §3.0–§4.6, §9 | I | Lane A → Lane B | P13 acceptance |
| F5 | Register, Build Spec, Inventory | I | Lane A → Lane B | next governed batch (D-437) |
| F6 | SM05 work packet | I + R | Lane A → Lane B | I: DoR/DoD definition; R: `V1-SM05-FV-001` tracking (existing destination) |
| F7 | `AGENTS.md`, `CLAUDE.md`, `GEMINI.md` | I | Lane A → Lane B | rule-budget check |
| F8 | `V1-PHASE-CLOSURE.md` §5 | I | Judge acts; Lane A records | SM05 activation act |
| F9a | sync-docs skill | S | Lane A → Lane B | each governed batch |
| F9b | check runner | S | Lane A → Lane B | each commit |
| F9c | rule-budget check | S | Lane A → Lane B | each commit |
| F9d | guarded rebuild | S | Lane A → Lane B | each governed batch |
| F9e | commit hook + `core.hooksPath` | S | Lane A → Lane B | persistent activation by approved setup step only |
| F10 | build config (`D-86`) | S | Lane A → Lane B | work order |
| F11a | `docs/CONFIG_LOG.md` | I | Lane A → Lane B | work order |
| F11b | `lib/config/*` | C | Lane B → Lane A | issued work order |
| **F12a** | `supabase/migrations/0001_init.sql` (frozen) | I | none writes; input to replay | raw-byte proof (r3 §1); never edited |
| **F12b** | `0002_s1_editorial_schema.sql` (candidate) | C | Lane B → Lane A | K1; local PostgreSQL replay (`D-383`) |
| F13 | r10 unit (external, accepted) | S | Lane A → Lane B | G2; hash at use |
| F14 | r11 packet (external draft) | S | Lane A → Lane B | Lane B review of design |
| F15 | attempt-1 tools (external) | S | Lane A → Lane B | G0; hash at use |
| F16 | `.codex/config.toml` | S | owner → Judge | owner statement before G0 |
| F17a | `.github/WORKFLOWS-SPEC.md` | I | Lane A → Lane C | cite only |
| **F17b** | `.github/workflows/ci.yml` | **X** | Lane C | outside SM05 construction; Phase 3 CI goes to `V1-SM06` (`D-381`; SM05 packet L66–68); no change pre-build |
| P1 | `<UNIT>/state/G0-MAP.json` | S | Lane A → Lane B | Lane B accepts r11 design; then its G0–G4 act |
| P2 | `<UNIT>/state/G4-MAP.json` | S | Lane A → Lane B | Lane B accepts r11 design; then its G0–G4 act |
| P3 | `<UNIT>/state/EXEC-TARGETS-DC.json` | S | Lane A → Lane B | Lane B accepts r11 design; then its G0–G4 act |
| P4 | `<UNIT>/tools/capture-state-r5.mjs` | S | Lane A → Lane B | Lane B accepts r11 design; then its G0–G4 act |
| P5 | `<UNIT>/tools/compare-state-r8.mjs` | S | Lane A → Lane B | Lane B accepts r11 design; then its G0–G4 act |
| P6 | `<UNIT>/tools/g1-probe.mjs` | S | Lane A → Lane B | Lane B accepts r11 design; then its G0–G4 act |
| P7 | `<UNIT>/tools/sentinel-check.mjs` | S | Lane A → Lane B | Lane B accepts r11 design; then its G0–G4 act |
| P8 | `<UNIT>/tools/tp0-r11-check.mjs` | S | Lane A → Lane B | Lane B accepts r11 design; then its G0–G4 act |
| P9 | `<UNIT>/tools/deletion-target-check.mjs` | S | Lane A → Lane B | Lane B accepts r11 design; then its G0–G4 act |
| P10 | `<UNIT>/tools/transcript-scan.mjs` | S | Lane A → Lane B | Lane B accepts r11 design; then its G0–G4 act |
| P11 | `<UNIT>/state/HANDOVER-E-to-S-T-r8.md` | S | Lane A → Lane B | Lane B accepts r11 design; then its G0–G4 act |
| P12a | controls source | S | Lane A → Lane B | same |
| P12b | control run results | S | Lane A → Lane B | per run; failures kept |
| P13 | `docs/specs/SPECS-EDITORIAL-METADATA.md` | I | Lane B proposes; Lane A records → Judge | Lane B physical proposal |
| P14 | next migration (`0003_*` expected) | C | Lane B → Lane A | issued work order |
| P15 | P17 "Security and operation controls" | I | Lane A → Lane B | P17 drafting |
| P16 | P17 "SM05 has no AI layer" | I | Lane A → Lane B | P17 drafting |
| P17 | `docs/LANE-B-WORK-ORDER.md` SM05 section | I | Lane A drafts → Lane B → Judge issues | content pending P13 |
| P18 | P17 "Verification binding" | I | Lane A → Lane B | pending P17 |
| P19 | `SM05-IN1`–`IN4` fixtures and failing-first records | TB | Lane B → Lane A | after entry (§2.4) |
| P20 | P17 "SM05 is local-only" | I | Lane A → Lane B | P17 drafting |
| P21 | P17 per-child method rationale, incl. UI method (GD-2) | I | Lane B proposes; Lane A records | P17 |
| **P22a** | `scripts/acceptance/` harness source | C | Lane A writes after Lane B handover (`D-259`) → Lane B | Lane B handover |
| **P22b** | acceptance-harness run results | R | Lane A runs → Judge | after P22a and the built slice; failures kept |
| T1 | Graphify (adopted route); derived `.graphify/` state | S | custody as r3 §1 (T2–T5) / r2 §C (T1) | unchanged |
| T2 | Ripwire retained evidence (not adopted, `D-433`) | S | custody as r3 §1 (T2–T5) / r2 §C (T1) | unchanged |
| T3 | gstack proposal (unbound) | S | custody as r3 §1 (T2–T5) / r2 §C (T1) | unchanged |
| T4 | ECC bundle, host copy, planned target | S | custody as r3 §1 (T2–T5) / r2 §C (T1) | unchanged |
| T5 | Spec Kit proposal (not adopted) | S | custody as r3 §1 (T2–T5) / r2 §C (T1) | unchanged |
| S1 | `.specify/memory/constitution.md` | S | Lane A → Lane B | bounded tool/control act |
| S2 | `.specify/` templates, scripts, integrations | S | Lane A → Lane B | same act |
| S3 | `specs/<id>-mmf-v1-core/` packet | IP | Lane B → Lane A (independent, `D-259`) | after TB1 recorded and allocation governed |
| TB1 | SM05 entry test baseline in `__tests__/` | TB | Lane B → Lane A | after entry (§2.4) |
| TL | later control and UI tests (§3) | C | Lane B → Lane A | per control, before its behaviour |

**Preservation additions (join to r2 §C; no second ledger).**

| Row | Allowed writes | Retained objects | Recovery |
|---|---|---|---|
| F12a | none | pinned blob `53ace36` | git history; raw-byte check at use |
| F12b, P14 | Lane B under the work order | git commits; replay logs | git history; new migration, never edit `0001` |
| F17b | Lane C only | git | git; Lane C evidence |
| S1, S2 | Lane A, only paths the bounded act lists | before: recorded absence or hash; customized files copied and hashed before any refresh; after: hash of each generated file | restore retained copies; remove only listed generated paths |
| S3 | Lane B, reviewed commits during authorized work | git; named acceptance commit | git history. After acceptance it is history; a later substantial change gets a new linked packet (Flow-Forward) |
| P22a | Lane A after handover | git | git history |
| P22b | append-only | each run bound to P22a commit and built-slice commit | none needed; failed runs kept |
| TB1, TL | Lane B | git; run records under `V1-SM05-FV-001` | git history |

## 2. R3-R2 — case-level coverage (replaces r3 §4 "one test per source ID")

### 2.1 Coverage key

**Key = pinned source path + section + full case label + AC + intended assertions.** Each admitted case maps to its own
test ID(s). One test may cover several cases only when it records each case and assertion separately. Lane B assigns
test IDs in P21/P17. GD-1 is closed as a precision item: the §4.3 row labels below are the case keys; no new scenario
ID is needed.

### 2.2 Case table

| Source (pinned) | Case label | AC | Intended assertions | Stage |
|---|---|---|---|---|
| FN §4.3 | `DOR-R2` positive | `AC-23` | exactly one completed pitch and route classification | TB1 |
| FN §4.3 | `DOR-R2` duplicate | `AC-26` | no second completion; repeat visible in audit trail | TB1 |
| FN §4.3 | `DOR-R2` failure | `AC-26` | nothing advances; failure evidence appended; later valid attempt yields one completion | TB1 |
| FN §4.3 | `DOR-R3` missing intake | `AC-26` | refused with named reason; no gate, state or workflow identity | TB1 |
| FN §4.3 | `DOR-R3` duplicate `EW` | `AC-26` | no second workflow; identity stable | TB1 |
| FN §4.3 | `DOR-R3` new work | `AC-23` | distinct workflow identity; not a replay | TB1 |
| FN §4.3 | `DOR-R4` executor | `AC-23` | Reporter is executor; `A` = Chief Editorial Desk; repeat dispatch makes no second execution | TB1 |
| FN §4.3 | `DOR-R4` final sign-off | `AC-25` | reminder displayed; nothing enforced or executed | data: TB1 (no enforcement record); display: TL |
| FN §4.4 | `SM05-N1` | `AC-23` | intake, acceptance event, one `EW`, one workflow identity, `ROUTE-PROD-1` record; no gate advances | TB1 |
| FN §4.4 | `SM05-N2` | `AC-23` | `OP-PITCH` Route-1 judgment, `ROLE-REPORTER` selection, one scoped `OP-DRAFT` instance, task and RACI evidence, namespace labels; `business:T1` complete | TB1 |
| FN §4.4 | `SM05-N3` | `AC-23` | judgment, selected role, `T2a`/`T2b` applicability (false branch explicit), join disposition; route stays `ROUTE-PROD-1`; no research operation | TB1 |
| FN §4.4 | `SM05-N4` | `AC-23` | `OP-PITCH` judgment, newsworthiness fields (score 1–10, periods, fresh sources, revision reference), one `OP-DRAFT` instance; `business:T3` complete | TB1 |
| FN §4.4 | `SM05-N5` | `AC-23` | fallout-comparison judgment, selected role, applicable-task evidence; no legal-risk operation; `business:T4` complete | TB1 |
| FN §4.4 | `SM05-N6` | `AC-23` | one ranking/routing record to Desk Editor; nothing signed or published; article state unchanged | data: TB1; UI handoff: TL |
| FN §4.4 | `SM05-RV1` | `AC-24` | ranking blocked naming missing fields; return event scoped to `business:T3`; new `T3` execution with new attempt identity | TB1 |
| FN §4.4 | `SM05-RV2` | per FN row | prior `T3` kept not-current; `T1`/`T2` untouched; `T4` current; new ranking uses current `T3` + `T4` | data: TB1; UI: TL |
| FN §4.4 | `SM05-F1` | per FN row | each Panel A11.4 fact traces to one recorded source; display-only labels; article state read-only | trace: TB1; display: TL |
| FN §4.4 | `SM05-X1` | `AC-26` | no `transition:T*`, `T6`, article-state change, Line 3, `OP-FINAL-SIGNOFF` enforcement, `OP-COPY-EDIT`, WordPress, `ManualReady`, `Published` | TB1 |
| FN §4.6 | `SM05-IN1` | per FN row | valid URL passes source-reference validation; own artifact; failing-first required | TB1 (P19) |
| FN §4.6 | `SM05-IN2` | per FN row | admitted Markdown with recorded but unreachable original URL passes; own artifact; failing-first required | TB1 (P19) |
| FN §4.6 | `SM05-IN3` | per FN row | no source reference fails with §3.1 named validation failure; `T1` does not complete; own artifact; failing-first required | TB1 (P19) |
| FN §4.6 | `SM05-IN4` | per FN row | Markdown with no original URL refused at admission; own artifact; failing-first required | TB1 (P19) |
| `Modular_PRD` L1092 | `AC-02` | `AC-02` | same submitter, same brief hash, same day → refused | TB1 |

"Per FN row" means the Product column of that FN row at `e905cf8`; this draft does not restate it.
Characterization never waives the `SM05-IN1`–`IN4` failing-first rule (SM05 DoD intake row; `D-287`, `D-288`).
Final sign-off stays display-only; no deferred operation is executed.

### 2.3 Valid failure versus broken runner

A red result counts as missing behaviour only when all hold: the suite loads and the test is collected and counted;
the local PostgreSQL instance starts and `0001` plus `0002` replay without error; the fixtures load; and the failing
assertion names the expected behaviour from §2.2. An import, load, connection, migration or fixture error is
recorded as infrastructure. It is never counted as red.

### 2.4 TB1 boundary and entry

TB1 is the bounded **entry baseline for S3**, not full DoD coverage. It holds every case marked TB1 above, within the
authorized child scope. Entry refusal (r3 §5) is unchanged.

## 3. R3-R3 — staged tests (replaces r3 GD-2 and GD-3)

**GD-3 withdrawn.** The r3 claim "the control list exists only after `plan.md`" was not supported. The journeys and
observable effects already exist in `DOR-R5` (storyboard Panel A11, accepted `D-259`), FN §4.3/§4.4 and the SM05
Persistence row. `plan.md` refines the concrete control inventory from those sources.

**TL — later control and UI coverage (named obligation).**
1. `plan.md` lists each writable control or form and its source action from the sources above.
2. Each writable control gets: save → re-read from the database → visible result after reload. These assertions are
   written **before** the corresponding behaviour is implemented, or as an honest characterization where behaviour
   already exists and characterization is permitted.
3. Display-only and read-only facts (`SM05-F1` facts, source-RACI/Line context, final sign-off reminder, read-only
   article state) get display assertions and a no-write-path assertion. They get no save test.

**GD-2 = a pending Lane B method choice (`D-242`).** UI evidence is drafted as journey assertions linked to recorded facts
and post-save/reload results. Lane B chooses the framework and method in P21.

**DoD closure.** DoD closes only after all 11 DoD rows have their required results and the independent review
(`D-259`). Neither a completed app nor achieved DoD is a packet-entry condition. No test moves before its inputs.

## 4. Push provenance (qualifies `977603a` L12228)

Authority source: the Judge's chat instruction to Lane A, 2026-10-15, verbatim: "record the r3 answer in B-136 and
commit with push". It named the push. It named no range. Before the push, Lane A stated in the same session that the
branch was 57 commits ahead, all B-136 records, and that the push would publish them with the new commit. The pushed
range `9643f5f..977603a` (58 commits) has no separate range-level approval on record; that approval is **unverified
here**. Lane B's reproduction of range, B-136-only content and identity stands. This is history, not a request for
approval after the fact.

## 5. B-136 answer text

> ## Lane A — BCP-1 map r4: answers Lane B `cba4678` (R3-R1–R3, push provenance), 2026-10-15
>
> ### What happened
> **Receipt.** Lane A receives `cba4678`. BCP2-R1, BCP2-R2 and the grading pointer stay Verified and closed. S/C
> categories accepted. No new Lane C evidence.
>
> | Artifact | SHA-256 | Status |
> |---|---|---|
> | `C:/CoWork/outputs/lane-a-bcp1-filemap-2026-10-15/BCP1-FILE-MAP-r4.md` | recorded in B-136 (a file cannot hold its own hash) | final delta on r3 `347e621b…`; r3, r2 kept |
>
> **Changed clauses.** R3-R1: full row join with grouped IDs expanded; F12a frozen `0001` (I) apart from F12b `0002` (C);
> F17b `ci.yml` = X, Phase 3 CI to `V1-SM06` (`D-381`); P22a source (C) apart from P22b runs (R); S1–S3, TB1, TL joined to
> preservation. R3-R2: coverage key = source + section + case label + AC + assertions; 23 cases, including the eight
> FN §4.3 rows; four distinct intake artifacts with failing-first; valid-failure versus infrastructure rule. R3-R3: GD-3
> claim withdrawn; TL later control/UI obligation with tests before behaviour; GD-2 = Lane B method choice in P21.
> Push provenance: `977603a`'s "Judge directed push" is qualified — instruction quoted; range not separately approved.
>
> ### What you need
> **Lane B:** review the changed clauses only. No Judge decision is due.
>
> ### What you did instead
> Read-only: B-136 `cba4678`, FN-GATES §4.3/§4.4/§4.6, SM05 packet, `Modular_PRD` `AC-02`. `bun run check` result and
> log named at record. No graph sync (handoff-only). B-136 only. No fetch, no push.
>
> | Verdict | Item | Condition / follow-up phase |
> |---|---|---|
> | Approve | Verified r3 corrections; S/C categories | Phase 1: keep closed |
> | Approve-with-conditions | r4 row join, case coverage, TB1/TL staging | Phase 1: Lane B review of changed clauses |
> | Defer | S1–S3, TB1, TL, code, FV-001, P22, DoD, SM05, Gate 2, any push | Phase 2 entry or existing checkpoints |
> | Reject | Source ID as case coverage; characterization waiving intake evidence; push treated as authority | All phases |
