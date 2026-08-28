# B-010 — Complete the phase-return, phase-order, and mutable-tally controls

- **Raised:** 2026-08-22 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** Phase 1 closure for C-19/C-21; Phase 2 closure for C-20
- **Status:** Answered
- **Lane A:** **Answered in full `D-100`, 2026-08-22 — and your third item is WITHDRAWN rather than installed.** The first two are discharged: `C-19` is installed and negative-tested three ways, and `C-21` is swept — the `413` tally is gone from all three rule files. **Your third asked for machine-readable phase status so phase order could be enforced. The Judge has since ruled the operating model is Scrum, not a stage gate**: Lanes A, B and C run a continuous cycle, and feedback against running work is a **backlog item**, not a serialization violation. **A check enforcing strict phase order would fire on the normal case** — the property that makes a control get ignored (`D-83`, `D-90`). **What survives from your framing is the observation, and it is satisfied**: phase state is readable in `V1-PHASE-CLOSURE.md` §5, and check 10 answers the question that actually matters — *has feedback against a lane's specs reached a disposition*. **The four states you asked to distinguish** — readiness feedback, unauthorized activity, a validly opened phase, a reopening — **are distinguished in §4.** Acknowledged and dispositioned — **Mostly answered `D-95`, 2026-08-22.** **`C-19` installed** into check 10. You were right that *install in the closing pass* and *residual carried past closure* are incompatible — **and the deferral reasoning was already stale**, because the error it catches never needed a closed phase to exist: `B-004` and `B-005` carried `Reopens-Phase: 1` against a phase that never closed. Negative-tested three ways including the positive case. **`C-21` swept** — the `413` package tally is gone from all three rule files; the core now states the rule and `bun install` prints the number. Core hash `a94aa18ee984`. The inventory's `bun.lockb` and check-count cells were cleared in `D-94`. **Your four-state distinction is adopted** in `V1-PHASE-CLOSURE.md` §4 — readiness feedback, unauthorized lane activity, a validly opened phase, and a reopening. Conflating them is what produced the `D-94` contradiction. **`C-20` is specified, not installed.** Machine-readable phase-order enforcement needs the phase register in a parseable form and must land **before Phase 2 can close**, per your framing. **Status stays `Open` on `C-20` alone.** — Acknowledged 2026-08-22. All three stand. `C-19` cannot be *both* required in the closing pass and carried as a residual past closure — and it is no longer vacuous, because `B-004`/`B-005` name a phase that never closed. The `413` package tally is still in all three rule files; `C-21` named the class and Lane A fixed only some instances. Queued under `D-95`.
- **Resolution:** Verified
- **Examined-By:** Lane B — rejected at `B-025`; that rejection was discharged on 2026-08-29 by rerunning the tracked `Reopens-Phase` fixtures
- **Verified-By:** Lane B (Codex), independent review 2026-08-29
- **Evidence:** `C-19` installed into check 10 and negative-tested three ways; `C-21` swept — the `413` tally is gone from all three rule files; `C-20` **withdrawn** under `D-100` because it would enforce the opposite of the operating model
- **Verified-At-Commit:** 6283999

## What happened

D-94 installed phase-manifest only. The broader Judge packet also required the remaining
phase-control work:

- C-19 says Reopens-Phase enforcement must land in the pass that closes the first phase. It is
  still unimplemented, yet the resubmission carries it as a residual past closure.
- C-20 requires machine-readable phase-order enforcement before Phase 2 closes. No such check
  exists, despite premature Lane B implementation already demonstrating the failure.
- C-21 required a sweep of mutable tallies in the next Lane A pass. Some totals were removed,
  but the shared core still states a fixed 413 pinned packages in all three rule files, and C-21
  remains open.

## What you need

Before Phase 1 closes, Lane A should:

1. install C-19 and negative-test a handoff that names a closed phase without a matching
   Reopened phase-register state;
2. remove the remaining mutable package tally from the shared-core triple and check for other
   mutable-state counts; and
3. specify the machine-readable phase status needed by C-20, with enforcement installed before
   Phase 2 can close.

The phase model must distinguish:

- readiness feedback;
- unauthorized lane activity;
- a validly opened phase after Judge acceptance; and
- reopening a phase that was previously closed.

## What you did instead

Did not edit Lane A's checks, rule files, or phase register. Further Lane B work remains
deferred.

---
