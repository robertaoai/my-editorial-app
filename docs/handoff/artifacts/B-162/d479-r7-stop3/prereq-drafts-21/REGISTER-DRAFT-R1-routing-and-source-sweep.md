# DRAFT — NOT RECORDED — Register entry R1 (routing of the 21 dated tier claims; named `source-sweep` provision)

The Judge must grant the number, section, ordinal and placement before recording. `D-478` item 8 numbering checks apply. This text grants nothing until a separate Judge act adopts and records it.

## 5.14e`<NNN>` `D-<NNN>` — `D-479` Item 6 Routing of Twenty-One Dated Tier Claims to `V1-SM07.md`; Named `source-sweep` Provision for `D-479` Commit `2a`

**Authority:** `<Judge adoption act: record, UUID, timestamp, bytes, SHA-256>`.
**Prerequisite verifier authority (D-481 item 2):** `<Judge act authorizing the exact prerequisite diff, SHA-256>`.

### The decision

0. **Placement.** `<Judge grant: item 0 of D-440 and D-441, as amended through D-486, permits this one intervening entry, its slot and position>`. No further entry is permitted by implication.

1. **Routing under `D-479` item 6.** These tier claims were recorded when `docs/v1/work-packets/V1/V1-SM05.md` held the `FR-15` evidence slice, `MMF-V1-CORE`. That packet moved to `docs/v1/work-packets/V1/V1-SM07.md` (`D-479` items 6 and 12). Once the move is present in a candidate tree, the historical `V1-SM05.md` target of each claim below is read as `V1-SM07.md`:

   `D-251`, `D-253`, `D-254`, `D-255`, `D-256`, `D-259`, `D-260`, `D-261`, `D-262`, `D-263`, `D-264`, `D-269`, `D-287`, `D-288`, `D-289`, `D-306`, `D-373`, `D-379`, `D-380`, `D-381`, `D-383`.

   - The original Register rows, their wording and their historical meaning are preserved. No row is edited.
   - The row-level mapping and supporting passages are in `ROUTING-MAP.md` (`<SHA-256>`).
   - Other targets on the same rows (for example `V1-SM06.md` in `D-251`'s row) are unchanged.
   - Claims by any other decision on `V1-SM05.md` stay on that path. So do current claims on the new `MMF-V1-PIPELINE` packet.

2. **Current citations in the new packet.** The new `V1-SM05.md` cites `D-251`, `D-255` and `D-383` for its own current scope:
   - its `EG5` entitlement and evidence boundary;
   - the A01 boundary;
   - the local-validation rule.

   Those citations stay, and they earn no historical evidence credit. The dated claims of these decisions follow the moved packet under item 1. A citation in the new packet cannot satisfy them.

3. **Check behaviour.** `scripts/checks/tier-sweep.mjs` applies item 1 through the separately authorized prerequisite diff. The re-slot state is read from the two packets' first lines:
   - **before the move:** the claim is checked on the original `V1-SM05.md`;
   - **after the move:** the claim is checked on `V1-SM07.md`;
   - **any other state, including a missing `V1-SM07.md` after the new packet exists:** the check fails closed.

   **Order:** this entry, then the prerequisite unit, then `D-479` `2a`, then `2b`, then `T3`, then `T4`. The `T3` routing fixtures, `handoff-response.mjs` and the Jev manifest alias stay outside the prerequisite. `T4a` and `T4b` keep their existing routes.

4. **Named `source-sweep` provision.** `source-sweep` compares commit times. Commit `2a` changes `docs/governance/requirements-traceability-map.md` after the Register last moves, so every check run with `2a` committed reports:

   > `docs/governance/requirements-traceability-map.md (<%h>) changed after the register last moved — propagation unverified. Record a decision, even if the decision is that no tier is affected.`

   **How `<%h>` is fixed.** It is the exact abbreviation that `git log -1 --format=%h -- docs/governance/requirements-traceability-map.md` prints in the run's repository. It is not a fixed seven-character prefix. The execution release binds, for each run:
   - the full tested commit;
   - the full commit that `%h` names;
   - the printed `%h`.

   The finding is permitted only on these runs:

   | Run | Repository | Commit under test | Commit named by `<%h>` |
   |---|---|---|---|
   | S2A prediction check | isolated clone | S2A | S2A |
   | S2A negative-test check | isolated clone | S2A (mutated working tree) | S2A |
   | S2B prediction check | isolated clone | S2B | S2A |
   | S2B negative-test check | isolated clone | S2B (mutated working tree) | S2A |
   | `2b` source check 1 | source | C2A plus the uncommitted `2b` candidate | C2A |
   | `2b` source check 2 | source | C2A plus the uncommitted `2b` candidate | C2A |

   - Each permitted finding is reported as a failure.
   - Both `2a` source checks run before the `2a` commit, so they must report zero `source-sweep` findings.
   - Any other `source-sweep` finding, any skip, or the named finding on any other run stops the attempt.
   - Each negative test keeps the permitted finding in its baseline, requires exactly one added expected finding, and requires byte-exact restoration.
   - `D-428` and `D-480` keep their existing limits.

5. **End of the provision.** The provision ends when a separate Register entry, recorded after a verified `2b`, records that `D-479` propagation of `docs/governance/requirements-traceability-map.md` is complete (draft R2).

6. **Holds.** All holds are unchanged, including:
   - `2a`, `2b`, both execution snapshots, and r7 and r4 issuance and execution;
   - `T3`, `T4`, `T4a` and `T4b`;
   - Gate 2 `V1-SM05-FV-001`, the FR-15 lift, selection and construction;
   - row `1b` and any push;
   - graph work and `docs-drift` under `D-425`.

   B-136, B-158, B-162, B-163 and D-439 remain Open.

### Tier applicability (`D-54`)

| Tier | Disposition |
|---|---|
| **Register** | This entry |
| `scripts/checks/tier-sweep.mjs`, `scripts/fixtures/suites.mjs` (tier-sweep suite only) | Follow: applied by the separately authorized prerequisite unit |
| `docs/v1/work-packets/V1/V1-SM05.md`, `V1-SM07.md` | Follow: carried by the corrected `D-479` commit `2a` |
| `docs/governance/requirements-traceability-map.md` | Follow: `D-479` commit `2a`; the provision closes at R2 |
| Build Spec, Inventory, Modular_PRD, specs, rule files, Phase Closure | Unaffected: no scope, artifact, rule or lane-state change |
| Encyclopedia | Unaffected: no mapped concept changes |
| Graphify | Affected: governed drift remains under `D-425` |
