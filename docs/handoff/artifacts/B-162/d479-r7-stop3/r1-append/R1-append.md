
## 5.14e310 `D-487` — `D-479` Item 6 Routing of Twenty-One Dated Tier Claims to `V1-SM07.md`; Named `source-sweep` Provision for `D-479` Commit `2a`

**Decision authority.** The Judge approved, with conditions, the R1 routing rule, the six-run provision, the exact two-file prerequisite and the sole Gate 2 baseline allowance. The approval is in "Judge disposition — R1 and the D-479 21-claim prerequisite", in the [Claude transcript at line 1925](C:/Users/rober_24syk4j/.claude/projects/C--robertaoai-my-editorial-app/539c12be-a61a-402c-98fa-3516e9aca97f.jsonl:1925): record `f94f1e10-be55-4f9d-a08e-1f82b84372cc`, timestamp `2026-11-13T17:54:12.818Z`, 11,010 bytes including LF, SHA-256 `021f5b747cc77971d0d88ad8fb2232bbff93732c1dc6a17a96d1e5903fac3ca2`. It binds the reviewed base: D-486 `30db8d51140c0e46700f96bb9f018e6e40b93cbc`, tree `0b558d2a51f17eff755dfd7fba51bed37548f9ae`. It also binds the evidence manifest (`SHA256SUMS`, 3,557 bytes, SHA-256 `8e3efdd51da714c51fba4804da380769145a0a52f17dc7f677a555da4a2de6bb`) in `C:/CoWork/outputs/D-479-r7-prereq-drafts-21-30db8d51140c0e46700f96bb9f018e6e40b93cbc`.

**Recording authority.** This entry relies on the Judge's separate recording act, which binds this exact entry by SHA-256 and grants its number, section and placement. Retain the complete issued user record with the recording receipt.

**Number, section and ordinal check (`D-478` item 8).** At `30db8d51140c0e46700f96bb9f018e6e40b93cbc`, Lane A searched for `D-487`, `5.14e310`, `slot 46`, `forty-sixth` and `Forty-sixth`. It found zero tracked occurrences, including citations in `docs/`, and zero history matches across refs. Recheck before recording and retain the result.

### The decision

0. **Placement.** Item 0 of D-440 and D-441, as amended through D-482, by D-485 item 1 and by D-486 item 0, is further amended to permit this one intervening entry: `D-487`, §5.14e310, slot 46. It goes immediately after D-486 and before the separate TCA r3 (J3) and J-C A1 entries.
   - Slots 42 and 43 remain unfilled.
   - The stopped 10024 assignment of D-483 (§5.14e306, slot 42) and the D-484 hold are preserved.
   - J1 and J2 keep their identities, text and transfer holds.
   - This permission covers this placement only.

1. **Routing under `D-479` item 6.** These tier claims were recorded when `docs/v1/work-packets/V1/V1-SM05.md` held the `FR-15` evidence slice, `MMF-V1-CORE`. That packet moved to `docs/v1/work-packets/V1/V1-SM07.md` (`D-479` items 6 and 12). Once the move is present in a candidate tree, the historical `V1-SM05.md` target of each claim below is read as `V1-SM07.md`:

   `D-251`, `D-253`, `D-254`, `D-255`, `D-256`, `D-259`, `D-260`, `D-261`, `D-262`, `D-263`, `D-264`, `D-269`, `D-287`, `D-288`, `D-289`, `D-306`, `D-373`, `D-379`, `D-380`, `D-381`, `D-383`.

   - The original Register rows, their wording and their historical meaning are preserved. No row is edited.
   - The row-level mapping and supporting passages are in the routing map: 8,014 bytes, SHA-256 `9468e4f2a8e54f5947d9ea480645d6dd645e1da66443934c7b9669f90856819c`.
   - Other targets on the same rows (for example `V1-SM06.md` in `D-251`'s row) are unchanged.
   - Claims by any other decision on `V1-SM05.md` stay on that path. So do current claims on the new `MMF-V1-PIPELINE` packet.

2. **Current citations in the new packet.** The new `V1-SM05.md` cites `D-251`, `D-255` and `D-383` for its own current scope:
   - its `EG5` entitlement and evidence boundary;
   - the A01 boundary;
   - the local-validation rule.

   Those citations stay, and they earn no historical evidence credit. The dated claims of these decisions follow the moved packet under item 1. A citation in the new packet cannot satisfy them.

3. **Check behaviour and prerequisite.** `scripts/checks/tier-sweep.mjs` applies item 1 through the separately authorized prerequisite diff: 8,473 bytes, SHA-256 `8521bd8ef288a71532dabb1df36ec730152294f2f96d27045c298287bb2bafb3`. It changes two files only:

   | File | Pre-image blob | Result blob |
   |---|---|---|
   | `scripts/checks/tier-sweep.mjs` | `6c6ee24e9cc2c288698a0cfce08370fe533be78b` | `011265631eccd98ab68457079cf6051c03710fee` |
   | `scripts/fixtures/suites.mjs` | `8326802a886a4dd90b867a2a4adb4e186d49ac97` | `266a1bc5acde7970518af3dfca00dee80da4a694` |

   - **Re-slot state.** It is read from the two packets' first lines.
     - **Before the move:** the claim is checked on the original `V1-SM05.md`.
     - **After the move:** the claim is checked on `V1-SM07.md`.
     - **Any other state, including a missing `V1-SM07.md` after the new packet exists:** the check fails closed.
   - **Fixtures.** The `suites.mjs` change is limited to nine named `tier-sweep` fixtures:
     - the D-255 and D-383 masking tests;
     - D-252 as the outside-list probe.
   - **Order:** this entry, then the prerequisite unit, then `D-479` `2a`, then `2b`, then `T3`, then `T4`. Each held unit has separate authority.
   - **Outside this unit:** the `T3` routing fixtures, `handoff-response.mjs` and the Jev manifest alias. `T4a` and `T4b` keep their existing routes.
   - **Reviews:** Lane B Level 1 and Lane C Level 2 follow `D-478` on the exact applicable bytes.

4. **Gate 2 baseline allowance for the prerequisite.** The prerequisite's own recording release may accept only this baseline-identical `bun run fixtures` miss, with exit `1` and every other fixture behaving as intended:

   `MISS  gate2: SM05 status no longer BLOCKED — counts as a claim and fails — no finding matching "no longer reads BLOCKED"`

   - D-486 produced 296/297. Scratch P `3e6017bb92e85373bb91851ae9cb18e5fe6cd284` produced 305/306, with the same sole miss.
   - The miss is recorded as a failure.
   - Any additional or changed miss, or any hook failure, stops recording.
   - The rebound `2a` and `2b` require a full fixture pass.
   - The full `bun run check` gate is separate: all 19 results with zero skips. The applicable `D-428` route and the expected `docs-drift` finding are bound against the actual base. Every other check passes for this entry and for the prerequisite.
   - Gate 2 `V1-SM05-FV-001` remains held.

5. **Named `source-sweep` provision.** `source-sweep` compares commit times. Commit `2a` changes `docs/governance/requirements-traceability-map.md` after the Register last moves, so every check run with `2a` committed reports:

   `docs/governance/requirements-traceability-map.md (<%h>) changed after the register last moved — propagation unverified. Record a decision, even if the decision is that no tier is affected.`

   **How `<%h>` is fixed.** It is the exact abbreviation that `git log -1 --format=%h -- docs/governance/requirements-traceability-map.md` prints in the run's repository. For each run, the execution release retains:
   - the full tested HEAD;
   - the full commit that `%h` names;
   - the printed `%h`.

   The finding is permitted only on these runs:

   | Run | State under test | Commit named by `<%h>` |
   |---|---|---|
   | S2A prediction | S2A | S2A |
   | S2A negative test | S2A with the test mutation | S2A |
   | S2B prediction | S2B | S2A |
   | S2B negative test | S2B with the test mutation | S2A |
   | `2b` source check 1 | C2A with `2b` uncommitted | C2A |
   | `2b` source check 2 | C2A with `2b` uncommitted | C2A |

   - **Scratch evidence for this table:** S2A `4f01166d6f6e8a5841322f0738cbdc3f0a75d4fb`, S2B `82b65358893aca4d2a300078a7149350d67eb3a1` and C2A `bb9dfdcaa5a13f72fed59717c802271a616fa049`, printing `4f01166` and `bb9dfdc`.
   - Each permitted finding is reported as a failure.
   - Both `2a` source checks run before the `2a` commit, so they must report zero `source-sweep` findings.
   - Each negative run keeps its baseline, adds exactly the expected `text-integrity` finding and restores the mutated bytes exactly.
   - Any extra or missing expected finding, the named finding on any other run, or a skipped check stops the attempt.
   - `D-428` and `D-480` keep their existing limits.

6. **End of the provision.** The provision ends when a separate Register entry, recorded after a verified `2b`, records that `D-479` propagation of `docs/governance/requirements-traceability-map.md` is complete.

7. **Holds.** All holds are unchanged, including:
   - `2a`, `2b`, both execution snapshots, and r7 and r4 issuance and execution;
   - `T3`, `T4`, `T4a` and `T4b`;
   - Gate 2 `V1-SM05-FV-001`, the FR-15 lift, selection and construction;
   - graph work and `docs-drift` under `D-425`;
   - all incorporated `D-478`, `D-481` and `D-482` holds;
   - row `1b`, the November 9 delivery authority, exact `e7e3c60` review coverage, and any outgoing range or push, on their separate Judge route;
   - the manual evidence backup, deferred to its separately released commit-and-push task.

   The full-manifest gate stays in force, receiver access remains open, and Unit 5b remains deferred. B-136, B-158, B-162, B-163 and D-439 remain Open.

### Tier applicability (`D-54`)

| Tier | Disposition |
|---|---|
| Register | This entry, Register only |
| `scripts/checks/tier-sweep.mjs`, `scripts/fixtures/suites.mjs` (tier-sweep suite only) | Follow: the separately authorized prerequisite unit |
| `docs/v1/work-packets/V1/V1-SM05.md`, `V1-SM07.md` | Follow: the corrected `D-479` commit `2a` |
| `docs/governance/requirements-traceability-map.md` | Follow: `D-479` commit `2a`; the provision ends at the later closure entry |
| Build Spec, Inventory, `Modular_PRD`, function and technical specs, rule files, Phase Closure | Unaffected: no scope, artifact, rule or lane-state change |
| Encyclopedia | Unaffected: no mapped concept changes |
| Graphify and graph fragments | Graphify is affected by governed drift. Any fragment work and guarded synchronization require a separate `D-425` release. |
