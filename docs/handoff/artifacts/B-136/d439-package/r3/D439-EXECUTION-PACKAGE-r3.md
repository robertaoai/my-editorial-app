# D-439 execution package r3 — bound to EV correction packet r9 (answers Lane B's review of `7d44bff`, R2-1 to R2-3)

**Authority:** Judge, 2026-10-16 (answer in session): "Authorize r3 (Recommended)" — Lane A fixes R2-1 in helper r3,
corrects the R2-2 successor contract and the R2-3 custody items, reruns K2/K3 and the new path refusals in disposable
copies, records in B-136 and returns to Lane B.
**Status:** draft package; application acceptance pending; **not recorded, not applied, not transferred.** r1, r2, EV r9,
the pins and the ten edit texts are unchanged. Lane B's closures stay: F1 exact ownership, F2 fail-stop harness,
the pairings, the expected bytes, the r1/r2 K2/K3 evidence and the 218 source hashes of map r1.

## 1. Changes from r2

| Finding | r3 answer | Proof (run `20261016T101116Z-0373ac41b9bf`) |
|---|---|---|
| **R2-1** output and injection containment | Paths are compared after resolution: `..` is resolved and links/junctions are followed on the longest existing prefix (`realpathSync.native`). A path equal to the protected root counts as inside. `EV_OUT` is refused at or inside the governed checkout on **every** run, with or without switches. With a switch, the fixture top level must not be, contain, or resolve to the governed checkout; `EV_TEST_INJECT` must be one of the three target files; each write target (three files and the Register) must resolve inside the fixture and outside the governed checkout | K14a (`EV_OUT` = governed root, no switch), K14b (`..` path), K14c (junction to the checkout), K14d (Register as injection target), K14e (`..` injection path), K14f (fixture `docs/source` is a junction into the checkout), K14g (fixture top level is a junction to the checkout): **all refused before any write**; governed state identical before and after; no output folder created |
| **R2-2** successor bindings | A successor may change **exactly two lines**: `const BASE = …` and `const OWNERSHIP_SHA256 = …`; both must change. `check-successor-d439.mjs` checks the diff, that the manifest names the new base and hashes to the new pin, that the repository is at that base, and then runs the successor's read-only S0 | K15 (new handoff line: reviewed helper refuses), **K15a** (two-binding successor with rebuilt manifest: accepted, S0 passes), K15b (a third line changed: refused), K15c (pin only, old base: checker refuses; its S0 refuses "ownership manifest base", which confirms Lane B's finding) |
| **R2-3** custody completeness | Map r1 unchanged. `CUSTODY-MAP-D439-ADDENDUM-r1.md` adds map r1 itself, every later package file (r3, the r2 check log) and a section B for artifacts made after the initial transfer (final manifest, successor, checker log, act-date expected record, application logs): approved external disposition until the application's health record, then one custody commit and Lane B verification, because these files name `D-439` and a manifest cannot list its own lines | Addendum generator refuses overwrite and any link or junction in the source tree |

**Required cases on r3:** K2 complete case **passed**; K3 omitted-E12 case **failed as required** and named E12 only.
All earlier support cases (K1, K4–K13e) kept their required outcome. **56 results, 0 wrong**, harness exit 0, 47 logs.
**Failure self-test against harness r3:** 9 tests, 0 wrong (clone, fixture commit, evidence copy, six evidence writes
including the four K3 branches and the verdict line).

## 2. Self-grade (Lane A; labelled; not independent review)

| ID | Finding | Disposition |
|---|---|---|
| SG3-1 | **Fixed before the final run:** the first r3 run stopped with exit 3 because the junction command was mangled by shell path conversion (`cmd //c mklink /J`). The stop worked as designed; the governed checkout was unchanged. Fixed with `MSYS_NO_PATHCONV=1 cmd /c`. Run kept as `…-SUPERSEDED-junction-cmd` | Fixed |
| SG3-2 | Junctions point into the governed checkout during K14c/f/g. They are listed and removed with `rmdir` (link only) on every exit, before any recursive delete; `find -type l` after all runs: 0 links | Evidence retained |
| SG3-3 | A clone that dies keeps its `work/` folder; `work/` is excluded from custody and holds no links after exit | May be deleted after Lane B's review |
| SG3-4 | The control manifest moves from `eb0aa44` to `7d44bff` (114 lines). This record adds lines again; the live S0 refusal that follows is the F1 behaviour | By design |
| SG3-5 | The marker gate still trusts a harness-written marker (SG2-2 limit stands) | Limit; stated |
