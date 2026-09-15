# B-107 — `phaseScope` fixture borrows terminal handoffs and passes vacuously

- **Raised:** 2026-09-15 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** treating the complete fixture suite as trustworthy; does not block D-228's independently passing five targeted cases or P2 document review
- **Status:** Open
- **Lane A:** **Acknowledged and answered, 2026-09-15.** `phaseScope()` in `scripts/fixtures/suites.mjs`
  is rewritten per this entry's exact five-point guide: both real controls (`B-016`, `B-017`) are
  manufactured to a non-terminal state from their own saved bytes via a stripped `Resolution:` line,
  never read from live status; a third synthetic-only entry, `B-999-fixture-phase-scope-blocker.md`,
  is created and removed within the fixture to prove "the gate stays live for other Phase 1 entries"
  without depending on which real entries happen to be open; every assertion now names its target
  entry (`B-017` must be named when Phase 1 closes, `B-016` must not be, `B-999` must remain named
  after `B-017` turns `Withdrawn`) instead of a generic phrase any open Phase-1 entry could satisfy.
  Regression evidence: the prior version, run against this same repository state, reported exactly
  the failure this entry describes — case 2 `MISS`, "the gate did not fire at all" — confirmed before
  this rewrite (see `B-102`'s `laneBoundaryToolCrossing` closure note citing the same `bun run
  fixtures` run). All three `phaseScope` cases now pass on their own manufactured evidence; the tree
  restores byte-for-byte, verified by `git status --porcelain` returning empty immediately after an
  isolated run. `closure-readiness.mjs` is unchanged — the repaired fixture did not prove it wrong.
- **Verified-By:** — not yet dispositioned; raised by Lane B
- **Evidence:** `scripts/fixtures/suites.mjs` `phaseScope()`; B-016 and B-017 headers; independently reproduced `bun run fixtures` result 86/87 at read commit `0db245e09a9eedd9558480db434a423d5702b1b7`
- **Verified-At-Commit:** 0db245e09a9eedd9558480db434a423d5702b1b7

## What happened

The full fixture suite reports `phase-scoped closure gating (D-102) — 2/3`. Its middle case says the
gate did not fire and therefore cannot prove that an open Phase 3 entry is excluded from Phase 1.
This is the same residual already recorded in B-017's `Post-verification fixture gap` on 2026-08-29,
not a new discovery. It never received a separate lifecycle, so B-017 correctly retained its
verified parser repair while the fixture defect remained only narrative.

The live source hard-codes B-017 as “Phase 1, Open” and searches for B-016 as the Phase 3 control.
Both entries are now `Status: Answered` with terminal resolutions. Consequently:

1. the Phase 3 isolation case cannot create the finding it needs to distinguish correct scoping
   from a disabled gate and reports `MISS`;
2. the terminal-Phase-1 case can pass without demonstrating a transition because B-017 is terminal
   before the fixture mutates it; and
3. the suite depends on mutable backlog state despite its surrounding fixtures' derived/synthetic
   evidence discipline.

## What you need

Lane A Code should repair the existing `phaseScope()` fixture without changing
`closure-readiness.mjs` unless the corrected fixture proves an implementation defect.

1. Manufacture a non-terminal Phase 1 control from B-017's saved bytes, for example by setting its
   fixture copy to `Resolution: Applied`, before the first two assertions.
2. Manufacture a non-terminal Phase 3 control from B-016's saved bytes for the isolation assertion.
   Do not require a live Open Phase 3 backlog entry; none currently exists and backlog state changes.
3. Restore both files byte-for-byte in every exit path using the existing fixture harness.
4. Make each assertion name its target entry: B-017 must be named when Phase 1 is closed; B-016 must
   not be named at that boundary; after B-017 becomes terminal it must disappear while another
   manufactured Phase 1 blocker keeps the gate demonstrably live.
5. Add a regression condition that fails against the current hard-coded-live-state fixture before
   accepting the repair, then run the entire fixture suite.

### Completion evidence

- all `phaseScope` cases prove their named relationship rather than relying on another live entry;
- the former middle case changes from `MISS` to a positive scoped result;
- the complete fixture suite passes with the working tree restored;
- no B-016/B-017 lifecycle field remains changed after the run; and
- the existing B-017 parser verification remains intact and is not reopened.

## What you did instead

Reproduced the failure outside the sandbox so child Git operations and file restoration could run.
Kept D-228 and P2 review separate. Did not edit the fixture, checker, Product documents, application,
schema, workflows or Graphify.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | B-107 as the canonical lifecycle for B-017's previously recorded fixture residual | Phase 1 — Lane A Code fixture repair |
| Reject | A new external task as the only tracker | `docs/handoff/` is the canonical backlog; external task may link here |
| Reject | Deriving the test from a live Open Phase 3 entry | Mutable backlog state caused the defect |
| Defer | Any `closure-readiness.mjs` change | Only if the corrected fixture proves the checker itself wrong |

---
