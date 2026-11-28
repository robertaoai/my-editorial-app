# B-162 Task 2 - Lane A trace r5: `V1-SM05` (`MMF-V1-PIPELINE`), 24 anchors of `D-479` item 6

**Fields (B-162:3122).** Scope, value, authority, behavior, applicability, DoR, DoD, implementation unit, verification method, actual evidence and acceptance. Three fields hold one value on every row: scope = `MMF-V1-PIPELINE`; actual evidence = none (no implementation exists); acceptance = not given. Authority = `D-479` item 6 on every row; `i5` adds item 5 (`ROUTE-PROD-1` contract selected).

**Keys.** MP = `docs/Modular_PRD.md` at `30db8d51140c0e46700f96bb9f018e6e40b93cbc`; the behavior cell summarizes the MP row, and the MP Then cell controls. Value: G guardrail, C coordination, A audit. B-117 DoR: I intent, J journey, S scope, Dp dependency, O ownership, Da data and state, VD verification design. B-117 DoD: Bh behavior, PA persistence and audit, UI interface, Vf verification, Sec security and data. Security readiness is carried by Da (exposure limits) and VD (security test method); Sec is a DoD key only. Units: U1 intake and log; U2 `EG1`-`EG3`; U3 `EG4` and human `EG5`, blind order; U4 return and rerun; U5 transition log; U6 board state; U7 consuming-gate evidence; M Lane B migration (G6). Verify: BDD, CT (contract or database test), SEC (refusal test).

**Proof rule.** Each observable proof runs at the reviewed implementation commit. Its output is retained with the full ID of that commit.

**Acceptance conditions.** A0: Lane C Level 1 and Lane A Level 2 review of that commit pass, then the Judge accepts the anchor against the feature DoD. A1: A0 plus a retained failing-before result for the same test. A2: A0 plus the Q6 split (local proof in `V1-SM05`, hosted re-verification in `V1-SM08`) if the Judge so rules; without Q6 the anchor waits for `V1-SM08`. A3: A2 plus the G5 stage 2 `V1-SM06` publication record for the same article.

| # | Anchor (MP line) | Applies | Value | Auth | Behavior | DoR | DoD | Unit | Verify | Observable proof | Accept |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | FR-01 (578) | V1 | C | i6 | Brief supplied by the Chief Editor is logged at the entry state | I, J | Bh, PA | U1 | BDD | One logged brief gives one article at the entry state and one transition row; both remain after reload | A0 |
| 2 | FR-02 (579) | V1 | C | i6 | Source validation and trend confirmation are two transitions | J | Bh | U2 | BDD | One article shows two distinct transition rows, one per gate | A0 |
| 3 | FR-03 (580) | V1 | C | i6 | Draft needs a completed checklist and at least one target | J | Bh | U2 | BDD | Draft with checklist and target reaches `Drafted`; draft without them is refused | A0 |
| 4 | FR-04a (583) | `ROUTE-PROD-1` | G | i5 | `EG4` review by `ROLE-CHIEF-EDITORIAL-DESK` alone; an agent never executes `T6` | S, O | Bh, Sec | U3+M | BDD+CT | One sealed review completes the join; a second reviewer is not required; an agent `T6` attempt is refused | A1 |
| 5 | FR-05a (584) | `ROUTE-PROD-1` | G | i5 | `T6` classed satisfied; agent refused; human preliminary sealed before reveal | S, Da | Sec | U3+M | CT+SEC | Agent `T6` refused at the database; reveal before the preliminary seal fails | A1 |
| 6 | FR-06 (585) | V1 | C | i6 | Return needs a reason; escalation at the return limit | J | Bh | U4 | BDD+CT | Return with reason moves the state back and stores the reason; the limit escalates to the Chief Editor | A1 |
| 7 | FR-07 (586) | V1 | A | i6 | Append-only transition record before every state change | Da | PA | U5 | CT | Every state change has exactly one earlier row with executor, Line, timestamp and reason | A0 |
| 8 | FR-08 state (587) | state only | C | i6 | Board grouped by state; filters stay in `V1-SM06` | S | UI | U6 | BDD | After reload each article shows under its current state | A0 |
| 9 | AC-01 (1091) | V1 | C | i6 | Logged URL creates the article; the row records the Reporter agent, `Line1` and the supplier as a separate fact | J | Bh | U1 | BDD | For one logged brief: the article is at the entry state; its transition row shows executor = the Reporter agent (`D-197` `A1`), `line_assignment = Line1`, an agent ID and a timestamp; the supplier (the Chief Editor) is stored in a field separate from the executor | A0 |
| 10 | AC-02 (1092) | V1 | C | i6 | Same brief, same submitter, same day is refused with a reason | Da | Bh | U1 | CT | Same-day duplicate refused with its reason; next-day brief accepted | A1 |
| 11 | AC-03 (1095) | V1 | A | i6 | Two transitions, each `not_applicable` for independence | Da | PA | U2 | CT | Two rows with independence `not_applicable` | A0 |
| 12 | AC-04 (1096) | V1 | C | i6 | `Drafted` with adaptation, target and checklist | J | Bh | U2 | BDD | After the draft and a reload: state is `Drafted`; the adaptation text is non-empty; at least one publication target is stored; the checklist is stored as complete | A0 |
| 13 | AC-05a (1101) | `ROUTE-PROD-1` | G | i5 | One `T5_review_sealed`; the bundle join needs no second reviewer | S | Bh | U3+M | CT | Both events recorded for one reviewer; join completes | A1 |
| 14 | AC-06a (1103) | `ROUTE-PROD-1` | G | i5 | Agent `T6` attempt refused | Da, VD | Sec | U3+M | SEC | Refusal at the database; no state change; no transition row | A1 |
| 15 | AC-07a (1104) | `ROUTE-PROD-1` | G | i5 | Preliminary disposition sealed before the bundle reveal | J | Bh | U3 | BDD+CT | Event order seal, reveal, decision; reversed order fails | A1 |
| 16 | AC-09 (1107) | V1 | C | i6 | Return with an empty reason is rejected | Da | Bh | U4 | CT | Rejected; no row; no state change | A1 |
| 17 | AC-10 (1108) | V1 | C | i6 | Auto-escalation at `RETURN_LIMIT_BEFORE_ESCALATION` | J | Bh | U4 | CT | Escalation record to the Chief Editor at the limit | A1 |
| 18 | AC-11 (1109) | V1 | A | i6 | Exactly one row precedes each change, no nulls | Da | PA | U5 | CT | Row count and null check per transition | A0 |
| 19 | AC-12 (1110) | V1; fails today (`G-06`) | A | i6 | Update or delete of a transition row refused, anon key included | Da, VD | PA | U5+M | CT | Refusal at the database; the retained failing-today result is the failing-before example | A1 |
| 20 | AC-13 state (1112) | state only | C | i6 | State dimension of the board filter | S | UI | U6 | BDD | Filter on state shows only matching articles and an explicit empty state | A0 |
| 21 | AC-22 (1122) | applies; `F4` per `EG` is a DoR binding | G | i6 | `EG1`-`EG5` complete only with the required `F4` evidence | Dp | Bh | U7 | CT | Completion without evidence is refused; with evidence it proceeds | A0 |
| 22 | AC-NF-01 (1132) | `V1-SM05` local; `V1-SM08` hosted | G | i6 | Direct anon `update articles set workflow_state` rejected | Da, Dp | Sec | U5+M | SEC | The database rejects the direct update | A2 |
| 23 | AC-NF-02 (1133) | `V1-SM05` local; `V1-SM08` hosted | A | i6 | Transition row update or delete refused for any client | Da, VD | PA | U5+M | CT | Refusal at the database | A2 |
| 24 | AC-NF-05 (1136) | G5 option B | A | i6 | Every gate of a published article reconstructs from the log alone | VD | Vf | U5+SM06 | CT+SM06 | G5 stage 1 and stage 2 records for one article | A3 |

**Reverse map.** U1: 1, 9, 10. U2: 2, 3, 11, 12. U3: 4, 5, 13, 14, 15. U4: 6, 16, 17. U5: 7, 18, 19, 22, 23, 24. U6: 8, 20. U7: 21. M: 4, 5, 13, 14, 19, 22, 23. `V1-SM06` (G5 stage 2, outside `V1-SM05`): 24. No unit lacks an anchor. No anchor lacks a unit. B-117 DoR rows without an anchor: DoD definition, estimate, priority change (packet level). B-117 DoD rows without an anchor: scope built, cross-lane, traceability, independent review, Judge acceptance (unit level).

**G4 items, not anchors.** AC-01b (MP:1093, FN-GATES:585) in U1 and AC-08a (MP:1106) in U4 enter only if [J] Q4 includes them. AC-08e (FN-GATES:591) is an unadopted draft ([J] Q5). See `answer-r5.md` G4.

**Open.** [J] Q4, Q5, Q6 and the AC-22 `F4` binding per `EG`.
