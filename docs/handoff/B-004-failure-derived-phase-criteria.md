# B-004 — Make failure-derived success criteria part of Phase 1 closure

- **Raised:** 2026-08-22 by Lane B
- **Kind:** spec-defect
- **Blocks:** further Lane B implementation while the Judge's Phase 1 verdict is `DEFER`
- **Status:** Answered
- **Reopens-Phase:** 1
- **Lane A:** **Answered `D-94`, 2026-08-22.** All six points adopted. **§5B** sets the phase-start rule: *a phase starts at the first authorized change to that lane's owned surface after the preceding Judge boundary is accepted* — so readiness feedback does not start a phase and **`43c51ce` did**. `43c51ce` is **preserved as historical evidence and not rewritten**; the record now reads *readiness feedback came first, partial S0 implementation followed, feature development did not start, further Lane B work is deferred.* **§5B.1** adopts your proposal contract verbatim — outcome, deterministic failure condition, cause, preventive control, observable success criterion, proving evidence or negative test, owner, return path. **§5B.2** records point 6 as a standing limit: **an agent cannot acquire skin in the game or accept legal, financial, or editorial liability, and that is why the Judge is a person** — the fourth-agent option `D-93` rejected would have failed on this ground alone. The four-way status contradiction is reconciled in **§5**. **Tiers unaffected: `V1-BUILD-SPEC.md`, `V1-ARTIFACT-INVENTORY.md`, `Modular_PRD` §8** — no sprint closed, no sequence or DoD moved, no artifact created or retired by the contract itself. Recorded as the reconciliation in `V1-PHASE-CLOSURE.md` §5. Acknowledged 2026-08-22 — the four-way status contradiction is real and is Lane A's. `V1-PHASE-CLOSURE.md` asserted `Pending`, an empty Judge row, a blank Phase 1 Judge field, and a `DEFER` verdict simultaneously. **First use of `Reopens-Phase:`**, added by `D-93` one pass earlier. Queued under `D-94`.

## What happened

The Chief Editor/Judge clarified that read-only analysis and implementation-readiness feedback
must not be treated as application work. That prospective rule is sound: feedback from the lane
that must execute a proposal is evidence about what will deterministically fail, not permission
to start coding.

The current repository history must still be preserved. Commit `43c51ce` added
`lib/config/build-config.ts` and `__tests__/build-config.test.ts`, removed the inherited Stripe
handlers and library, and removed Stripe environment keys. Phase 2 therefore **did start early**
and completed part of non-feature S0. The accurate state is not "Lane B never started"; it is
"readiness feedback came first, partial S0 implementation followed, feature development did not
start, and further Lane B work is deferred."

`docs/v1/V1-PHASE-CLOSURE.md` now contains Robert Tan's `DEFER` row, but the same section still
says `Pending`, retains an empty Judge row, and the phase register leaves Phase 1's Judge field
blank. Those assertions cannot all describe the same current state.

## What you need

Lane A should propose and criticise one explicit phase-boundary contract before resubmission:

1. **Readiness feedback** is read-only analysis and does not start the next phase.
2. A phase starts with the first **authorized change to that lane's owned surface** after the
   preceding Judge boundary is accepted.
3. Every Lane A proposal states the intended outcome, deterministic failure condition, cause,
   preventive control, observable success criterion, proving evidence or negative test, owner,
   and return path.
4. Lane B implements only accepted semantics and raises missing authority instead of guessing.
5. Lane C automates the accepted evidence and proves a deliberate failure stops the gate.
6. The Judge accepts residual risk; an agent cannot acquire human "skin in the game" or accept
   legal, financial, or editorial liability.

Reconcile the Phase 1 register, `Pending` label, empty Judge row, and historical Phase 2 start.
Record the governing decision and propagate any sequence or Definition-of-Done effect under
`D-54`. Preserve commit `43c51ce` as historical evidence rather than rewriting it as feedback.

## What you did instead

Stopped before any further Lane B implementation. Recorded the finding without editing the
Lane A-owned phase document or changing the existing application artifacts.

---
