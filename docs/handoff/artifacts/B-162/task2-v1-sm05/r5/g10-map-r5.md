# B-162 Task 2 - Lane A G10 map r5: `V1-SM05` (`MMF-V1-PIPELINE`)

[J] = Judge decision due. [LB] = Lane B input due. Clearance is not claimed. Q11 and Q2 were selected on 2026-11-23 (Claude transcript `d39b55f9-a96c-4090-a72c-58db4e22d033.jsonl` line 800, 4,266 bytes including LF, SHA-256 `995ff539cbd9c3641b30c4f8574fe3ebc635ec4781c4d9313033b272a2b194cd`). Neither selection releases implementation or a tracker write.

`SV-002` section 2.3.1 at `30db8d51140c0e46700f96bb9f018e6e40b93cbc` (blob `3fd18a7d07e80e71bb32b7660146c01b5690b2bd`): derived at `e129915aff1c6074df36fdad68052f3244ac90a3`; claimed `no`; 107 rows. A row whose header reads independently Verified counts as closed without an edit. The Gate 2 mode of `closure-readiness` reports SM05 rows that are not `received` but does not fail on them, so a zero SM05 failure count is not receipt coverage.

| Order | Closed | Received | Rows reading `open` |
|---|---|---|---|
| O0 | 0 | 0 | `B-071`, `B-097`, `B-100`, `B-112`, `B-113`, `B-116`, `B-139`, `B-150`, `B-153`, `B-154` |
| O1 | 2 | 0 | `B-050`, `B-141`, `B-142`, `B-144`, `B-145`, `B-146`, `B-147`, `B-148`, `C-002`, `C-007`, `C-008`, `C-009` |
| O2 | 1 (`B-131`) | 19 | `B-151` |
| O3 | 0 | 3 (`B-120`, `B-125`, `B-136 (P14a/P14b)`) | `B-061`, `B-070`, `B-102`, `B-103`, `B-114`, `B-115` |
| O4 | 21 | 0 | `B-077` |
| O5 | 27 | 0 | `B-014`, `B-021`, `B-110`, `B-158` |

| Class | Child, exact key | Scope | Receipt or closure evidence | Owner | Proposed disposition | Return condition |
|---|---|---|---|---|---|---|
| Pipeline | Pipeline Gate 2 trigger and fixture | `V1-SM05` pipeline | None. At `30db8d5` the verifier reads `V1-SM05.md` (the `FR-15` content); after `2a` it reads `V1-SM07.md` | Lane A; Judge | Q11 selected a new pipeline trigger and fixture. Proposal, not selected: a separate Lane A script unit adds a pipeline mode to `closure-readiness.mjs` that reads the new `V1-SM05.md`, with its own fixture in `suites.mjs`, under its own release after verified `2b` | Design and placement ruled; unit verified before `V1-SM05` selection |
| Pipeline | G1 propagation: prerequisite, `2a`, `2b` | Live slot references | Reviewed exact commits, pending | Lane A | Apply under unit releases | `2b` verified; Level 1 and Level 2 filed |
| Pipeline | Task 2 G2-G9 | `V1-SM05` DoR | This answer, pending review | Lane A; [LB] | Review | [J] accepts Task 2 |
| Pipeline | `GR-001` (`B-104.O2`) | Fires at `V1-SM05` selection | None yet | `B-104` owner | Apply the propagation at selection | Independently verified |
| Pipeline | `GR-016` (`B071-R202`), `GR-017` (`B071-R203`) | `D-479` item 5 | None | Judge; `B-071` return | [J] rules whether item 5 meets each trigger | Ruled |
| Pipeline | G6 migration design | M | None | Lane B | [LB] design and feasibility | [J] accepts the design |
| Shared | `B-158` (O5, non-SM05, `open`) | Shared | None; header not Verified | Judge | One O5 act with its reason (`D-364` items 4, 9), or an independent `Verified-By` | Row reads closed |
| Shared | `B-162`, `B-163` (no rows); stale derivation | Tracker | `D-364` items 6, 7 | Lane A; Lane B review; Judge | Q2 selected a separate Judge act. That act must expressly cover the protected `SV-002` path (`D-479` item 6 lists `SETUP-SPIKE-000` packets as not edited) before any write. Proposed content: re-derive at a pinned revision, add both rows, keep claimed `no` | Act recorded; derivation not older than the newest disposition |
| Shared | 34 rows reading `open` (table above) | Shared | r2 counted 33 with independent Verified headers; not re-measured | Lane A | Set each value under the Q2 act | Value equals header state |
| Shared | Null-parent `ENC-03`, `D-219.R1` | `closure-readiness` | Carried from r2; not re-measured | Lane A | Script unit with its own release | Rule fires on its fixture |
| `FR-15` receipts (now `V1-SM07`) | 19 O2 `received`, `B-131`, and the 3 O3 `received` rows | Pre-`D-479` SM05 means the `FR-15` slice (`D-479` item 6) | The receipt in each Basis cell | Lane A | Keep as historical receipts; no edit | Read at the `V1-SM07` DoR |
| Unresolved | `B-151` (O2, SM05, `open`) | Cases `SM05-IN1`-`IN4` (FN-GATES:446-449) cite `AC-23`, `AC-26` and `T1` | Header `Verified-By` Lane B, planning reconciliation only (`17008c8`); database proof open with `V1-SM05-FV-001` | [LB]; Judge | CORE-only not shown: FR-01 intake (AC-01, AC-02) may use the same source-reference rules 2 and 6. No deferral now | [LB] shows whether FR-01 uses rules 2 and 6; then [J] defers to `V1-SM07` or receives it into the `V1-SM05` DoR |

Q10 proposals, pending (this map makes no deferral):

| Child | Source scope | Existing evidence | Proof still due | Owner | Q10 proposal | Return condition |
|---|---|---|---|---|---|---|
| B-162 `T-1` (B-162:78) | Add `FR-15` to the reverse map, anchored to CR-09 and partial CR-19 | None beyond the B-162 unit row | The row at a named commit; `bun run check` passes | Lane A | Defer, follow-up tier `V1-SM07` | `V1-SM07` DoR unblocked (`D-479` item 4 act and `D-434` lift) |
| B-162 `T-2` (B-162:79) | Add `FR-15` and `US-15` rows to Modular_PRD section 7.1 with `[V1]` marking | None beyond the B-162 unit row | Judge act; both rows and the marker; tier dispositions | Lane A; Judge | Defer, follow-up tier `V1-SM07` | Same |
| B-162 `U0a` (B-162:81) | Split `FV-001` preparation from execution; name a checked feature DoR as the lift criterion | None beyond the B-162 unit row | Register act; packet wording agrees; tier dispositions | Judge | Defer, follow-up tier `V1-SM07` | Same |
| B-162 `U0b` (B-162:82) | Create the `V1-SM05-FV-001` attempt record at `DoR open` after `U0a` | None beyond the B-162 unit row | Template ID, version and SHA-256; source commits; no run result | Lane A | Defer, follow-up tier `V1-SM07` | Same |
| B-162 `U0c` (B-162:83) | Check the feature DoR, then decide the lift under `U0a` | None beyond the B-162 unit row | Judge Register act; no inferred selection, work order or activation | Judge | Defer, follow-up tier `V1-SM07` | Same |
| `V1-SM05-FV-001` run; `FR-15` lift (`D-434`) | `FR-15` evidence run and block (`D-479` item 6) | Run ID retained; run not created | The run under its own selection and work order; the lift act | Judge | Defer, follow-up tier `V1-SM07` | Same |

CORE-only evidence for the B-162 rows: each names `FR-15`, `US-15` or `FV-001`, which `D-479` item 6 places in `V1-SM07`; B-162 is dated 2026-11-04, before `D-479`, so its `V1-SM05` means the `FR-15` slice.
