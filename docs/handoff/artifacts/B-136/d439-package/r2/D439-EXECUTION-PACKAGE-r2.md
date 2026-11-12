# D-439 execution package r2 — bound to EV correction packet r9 (answers Lane B's review of `eb0aa44`, F1–F4)

**Authority:** Judge, 2026-10-16: "Judge Approved: Lane A prepare D-439 package r2, fix F1–F3, run required controls in
disposable copies, and draft the F4 custody map. Return to Lane B for review."
**Status:** draft package; application acceptance pending. **Not recorded, not applied, not transferred.** r1 and its
evidence are kept unchanged (`../D439-EXECUTION-PACKAGE-r1.md`). The ten edit texts, the pins and EV r9 are unchanged.
Lane B's accepted results stay closed: the ten pairings, the expected-byte calculation and the r1 K2/K3 evidence.

## 1. Changes from r1

| Finding | r1 | r2 | Proof |
|---|---|---|---|
| **F1** ownership | Unlisted `D-439` lines under `docs/handoff/` passed when later commits touched handoffs only | **Exact state at the base.** Every line naming `D-439` must equal a manifest entry (path, line SHA-256) with the same count, and every entry must still exist. No path is exempt. The whole tree must be clean, untracked files included, because `git grep` does not read them | K5, K6 (new handoff line), K6b (copied reviewed line), K6c (changed line), K6d (untracked file), K6e (deleted line), K7: all refused |
| **F2** harness | Some K3 result lines could continue after a failed `tee`; exit-3 paths untested | Every result line goes through `rec()`, which stops the run with exit 3. `die()` writes without `tee`. `selftest-d439-r2.sh` makes clone, fixture-commit, evidence-copy and evidence-write steps fail on purpose | §4 |
| **F3** test switches | `EV_CONTROL`, `EV_TEST_SKIP`, `EV_TEST_INJECT` were honoured anywhere | `fixtureGate()` runs first. A switch is refused unless `EV_REPO` and `EV_OUT` are given; the target's top level and Git common directory differ from the governed checkout's; `EV_OUT` is outside it; and the fixture marker in the target's `.git` names that exact top level | K13a (no marker), K13c (marker names the governed path), K13b/K13d/K13e (each switch against the governed checkout): all refused; protected files, HEAD and status unchanged; no output folder created |
| **F4** custody | Hashes recorded; files only under `C:/CoWork/outputs/` | Custody map drafted: `CUSTODY-MAP-D439-r1.md` | §5 |

## 2. Files (this folder, `r2/`)

| File | SHA-256 | Role |
|---|---|---|
| `ev-apply-d439-r2.mjs` | `062427d2862b9b20206d49fba8d13a685be69970a0a2d70856dac87780cf009c` | Helper r2 (F1 exact ownership state; F3 fixture gate) |
| `ownership-eb0aa44.json` | `2f14888ceb92f1855e946ae2c6e2da18cb41c612d9e1aa26454e4b202c398228` | Control ownership manifest: 109 lines naming `D-439`, 11 files, at `eb0aa44`; pinned in the helper |
| `make-ownership-r2.mjs` | `8f5292526c1cf08003350e6c4696074cb242aa4087752a803d1abf1703b43a5e` | Builds the manifest from a clean checkout at its base; refuses to overwrite |
| `run-controls-d439-r2.sh` | `3a3fe7809cb3f6d3e93c697405990083a99fbea538bcb982da39ef7399159812` | Harness r2 (F2 fail-stop `rec()`; fixture marker; K6–K6e, K13a–K13e) |
| `selftest-d439-r2.sh` | `cf1961d57de9b240c4ad19b92cc8b82d1ceeae3058611b4786ebcdc2eae05618` | Failure-path self-test (9 deliberate failures) |
| `selftest-d439-r2.txt` | `373b90f328c1dca9500722d3620eca8fea15de365f2838bf8a498b595d2d5a56` | Self-test result: 9 tests, 0 wrong |
| `runs/20261016T094120Z-062427d2862b/results.txt` | `e60df16459dfca066bb8fbe0f7277e0305fb55788ad032b76bcc61d083998ccb` | Control run: 42 results, 0 wrong, harness exit 0 |
| `runs/20261016T094120Z-062427d2862b/K2-expected.json` | `08240c5870f64a161307e2ce4ea6ce385ee0d9527ef4eb2c74a957e07e4746b9` | Expected record, date `2026-10-16` |
| `runs/20261016T094120Z-062427d2862b/K13-governed-state-before.txt` | `3b4d67df333046ccd00e95e0383943d238522487be9311436267cdb4cb568686` | Governed checkout state before K13b/d/e |
| `runs/20261016T094120Z-062427d2862b/K13-governed-state-after.txt` | `3b4d67df333046ccd00e95e0383943d238522487be9311436267cdb4cb568686` | Same state after (identical) |
| `live/s0-eb0aa44/log-s0.txt` | `e5e11c8cd811429391c0ab202ef3a0d477ff7dac246d7f76a2db4921fb0d51d4` | Read-only S0 on the governed checkout at `eb0aa44`: exact state, 109 lines |
| `make-custody-map-d439.mjs` | `1a5db839f3ecf174d4d7f6b9cc065dbfd5a9386e8b34173dd3c2eb3bf6bfda5d` | Builds the F4 custody map; refuses to overwrite |
| `fill-index-r2.mjs` | `6599e442aab876906973677ffbe9c76e404c58d5e5fff7c68be123df401032c1` | Fills this index from measured hashes |

## 3. Control run (base `eb0aa44`, date `2026-10-16`)

Run `20261016T094120Z-062427d2862b`: **42 results, 0 wrong**, harness exit 0, 34 raw logs. Verdict line: `--- cases: 42 wrong: 0`. Support arms: K1 (S0), K4 (act already in Register), K5–K7 and K6b–K6e (F1), K8 (tampered manifest), K9 (overwrite), K10 (act absent), K11 (E2b), K12 (unattributed byte), K13a–K13e (F3).

**Required cases.** **K2 complete: passed** (working tree and commit; committed blobs `93eb1e82…`, `0b250457…`,
`510fedf1…` = expected, the same values as r1 and Lane B's independent calculation). **K3 omitted E12: failed as
required**, exit 2, "E12 (docs/Modular_PRD.md: new 0/1, old 1/0)", working tree and commit, E12 only; expected record = K2's.

## 4. Failure-path self-test

| Test | Exit | Result lines | Verdict lines | Outcome | Stop reason |
|---|---|---|---|---|---|
| T1-clone-failure | exit 3 (want 3) | result lines 0 (want 0) | verdict lines 0 (want 0) | OK | SETUP FAILURE: clone/checkout failed: k1 |
| T2-fixture-commit-failure | exit 3 (want 3) | result lines 4 (want 4) | verdict lines 0 (want 0) | OK | SETUP FAILURE: fixture commit failed: K2 |
| T3-evidence-copy-failure | exit 3 (want 3) | result lines 5 (want 5) | verdict lines 0 (want 0) | OK | SETUP FAILURE: evidence copy failed: K2 |
| T4-1-evidence-write-failure | exit 3 (want 3) | result lines 0 (want 0) | verdict lines 0 (want 0) | OK | SETUP FAILURE: cannot write runs/20261016T094510Z-062427d2862b/results.txt |
| T4-9-evidence-write-failure | exit 3 (want 3) | result lines 8 (want 8) | verdict lines 0 (want 0) | OK | SETUP FAILURE: cannot write runs/20261016T094519Z-062427d2862b/results.txt |
| T4-10-evidence-write-failure | exit 3 (want 3) | result lines 9 (want 9) | verdict lines 0 (want 0) | OK | SETUP FAILURE: cannot write runs/20261016T094556Z-062427d2862b/results.txt |
| T4-12-evidence-write-failure | exit 3 (want 3) | result lines 11 (want 11) | verdict lines 0 (want 0) | OK | SETUP FAILURE: cannot write runs/20261016T094631Z-062427d2862b/results.txt |
| T4-13-evidence-write-failure | exit 3 (want 3) | result lines 12 (want 12) | verdict lines 0 (want 0) | OK | SETUP FAILURE: cannot write runs/20261016T094709Z-062427d2862b/results.txt |
| T4-43-evidence-write-failure | exit 3 (want 3) | result lines 42 (want 42) | verdict lines 0 (want 0) | OK | SETUP FAILURE: cannot write runs/20261016T094745Z-062427d2862b/results.txt |

Every deliberate failure stopped the run with exit 3 at the failing step, wrote no later result line and no verdict, and kept the run's logs and clones. T4-9 to T4-13 cover the four K3 result branches Lane B named.

## 5. Custody (F4)

`CUSTODY-MAP-D439-r1.md` lists every package file except disposable clones, with full SHA-256, proposed destination under
`docs/handoff/artifacts/B-136/d439-package/`, owner and status. **Order:** transfer (one commit, that folder only) → Lane B
verifies committed bytes → Lane A builds the final ownership manifest after that verification and any review records,
plus a pin-only helper successor → Lane B reviews manifest and diff → the Judge decides the `D-439` acts. The ownership
manifest at `eb0aa44` is therefore a **control manifest**: the record of this package adds `D-439` lines, so S0 on the
live checkout refuses until the final manifest is reviewed. That refusal is the F1 behaviour, not a defect.

## 6. Self-grade (Lane A; labelled; not independent review)

| ID | Finding | Disposition |
|---|---|---|
| SG2-1 | **Fixed before the final run:** the first r2 run did not exercise the "missing or changed" branch (a changed line is reported as an extra line first). K6e added; that run is kept as `runs/…-SUPERSEDED-preK6e` | Fixed |
| SG2-2 | The fixture gate trusts a marker the harness writes. A person can write the same marker in any other clone; the gate stops accidental use against the governed checkout, not a deliberate forgery | Limit; stated |
| SG2-3 | K13b/d/e run the helper against the governed checkout. The gate runs before any read or write; evidence: state files before/after are identical | Evidence retained |
| SG2-4 | A pin-only successor is still a new helper object; its diff must be one constant | Review step in §5 |
| SG2-5 | Disposable clones of the self-test runs stay under `runs/*/work/` after deliberate failures; they are excluded from custody | May be deleted after Lane B's review |
