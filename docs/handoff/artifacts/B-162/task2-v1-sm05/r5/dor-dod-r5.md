# B-162 Task 2 - Lane A DoR and DoD r5: `V1-SM05` (`MMF-V1-PIPELINE`)

[J] = Judge decision due. [LB] = Lane B input due. Revision read: `30db8d51140c0e46700f96bb9f018e6e40b93cbc`. B-117 rows: blob `a0bdd83f635ec99a3277e442a7e4e3da6f526f79`, lines 240-277, unchanged since `4e54628` (the revision `D-479` item 2 cites).

## 1. Four separate things

| Thing | Task 2 (this answer) | Feature (`V1-SM05`) |
|---|---|---|
| Definition | Sections 2 and 3 of this file | Section 4 of this file; bound into the packet only after [J] accepts Task 2 |
| Actual proof | The committed files and their `SHA256SUMS` at the custody commit | None yet; produced at the reviewed implementation commit |
| Independent review | Lane B Level 1, then Lane C Level 2, on the exact committed files | Code: Lane C Level 1, then Lane A Level 2 (`D-478` item 2) |
| Judge acceptance | [J] accepts Task 2 | [J] accepts the unit against its DoD. Readiness acceptance, Gate 2 clearance, selection, work order and lane activation are five further separate acts |

## 2. Task 2 DoR

- **Bounded release:** B-162:3122 requests a proposal. No governed-source change, execution or filing follows from this answer.
- **Source revision:** `30db8d5`; assessment `279dbad754199fea069831ea751eff5ff52abe04`; B-162 blob `e18e3fb671a8438af79e160d49c52d0f1b02ae11`.
- **Inventory:** `answer-r5.md`, `trace-r5.md`, this file, `g10-map-r5.md` and `SHA256SUMS`.
- **Review route:** Lane B Level 1, then Lane C Level 2 (`D-478` items 2, 5).
- **Evidence access:** before custody delivery, only on the Lane A host; after delivery, `git show <commit>:<path>` on the delivered commit. A reviewer on another host has no access before delivery.

## 3. Task 2 DoD (B-117 DoD rows)

| B-117 row | Task 2 reading |
|---|---|
| Authorized scope built | Applies: answer files only; no protected or frozen record is edited |
| Required behavior works | N/A, no software behavior. Replaced by: every G row names a correction, source, owner, proof, [J] item and return condition |
| Persistence and audit | Applies: files committed with `SHA256SUMS`; commit hook evidence retained |
| User interface | N/A, no interface |
| Verification passes | N/A, no xDD test. Replaced by: two-way trace with 0 unmapped anchors and named gaps |
| Security and data boundary | Applies: no secret; no personal data beyond existing record locators |
| Cross-lane evidence | Applies: each Lane B input is named ([LB]) |
| Traceability | Applies: trace in both directions; gaps named |
| Independent review | Applies: Lane B Level 1, then Lane C Level 2, on the exact committed files |
| Judge acceptance | Applies: [J] accepts Task 2, separately from readiness acceptance |

## 4. Feature DoR and DoD (`V1-SM05`)

DoR, every B-117 row applies:
- **Intent and MMF anchor:** `MMF-V1-PIPELINE`; the pipeline part of the `D-479` item 3 outcome; 24 anchors (`trace-r5.md`); hypothesis G2.
- **User journey:** normal path brief, `EG1`-`EG4`, `EG5` preliminary seal, reveal, final decision; failure and revision paths AC-06a, AC-09, AC-10 and return (FR-06); channel the V1 web app with no login wall.
- **Scope boundary:** included the 24 anchors and any G4 item that [J] Q4 adds; excluded Delivery and board filters (`V1-SM06`), `FR-15` (`V1-SM07`), hosted work (`V1-SM08`), multi-reviewer routes, AC-05b, AC-07b and the current order of FN-GATES sections 1-10; smallest child U1.
- **Dependency order:** M (G6) before U3; GR-001 at selection; GR-016 and GR-017 [J]; AC-22 `F4` binding [J]; the pipeline Gate 2 trigger and fixture selected by Q11 (unit design proposed, not selected), verified before selection.
- **Ownership:** meaning Lane A and the Chief Editor; build Lane B; code review Lane C Level 1, then Lane A Level 2; return owner Lane B.
- **Data and state:** the G7 contract.
- **Verification design:** per anchor (`trace-r5.md`); failing example AC-12 (`G-06`).
- **DoD definition:** the list below, written before selection.
- **Estimate and capacity:** G9 [LB].
- **Priority-change condition:** move, split or defer on a GR trigger, an infeasible G6 or G7 mechanism, or Q6.

DoD at the reviewed implementation commit, every B-117 row applies:
- **Authorized scope built:** only the selected child; `0001` and `0002` unedited.
- **Required behavior works:** each anchor Then cell holds end to end.
- **Persistence and audit:** append-only transition rows with executor identity.
- **User interface:** board and gate actions with no dead action.
- **Verification passes:** fail-before and pass-after per anchor; regressions green.
- **Security and data boundary:** `EG5` human only; agent `T6` and direct anon writes refused at the database.
- **Cross-lane evidence:** Lane B builds; Lane C verifies only the delivery, security or monitoring the unit needs (none expected for local `V1-SM05`; hosted work is `V1-SM08`).
- **Traceability:** requirement, MMF, unit and test links current.
- **Independent review:** Lane C Level 1, then Lane A Level 2.
- **Judge acceptance:** against this DoD.
