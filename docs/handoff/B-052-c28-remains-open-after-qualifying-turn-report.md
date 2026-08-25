# B-052 — C-28 remains open after a qualifying Lane B turn report

- **Raised:** 2026-08-25 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** a truthful current account of the handover condition and Phase 2 closure readiness
- **Status:** Answered
- **Verified-By:** — not independently verified. Lane A answered it
- **Resolution:** Applied
- **Lane A:** Answered `D-123` — **upheld, and it is a real four-pass miss.** `C-28`'s own closure rule names its evidence exactly: `B-047` at the `D-118` boundary. **`C-28` is CLOSED, 2026-08-25, on `D-118`/`B-047`.** No `D-103` report is created retroactively — the absence stays the historical record at both places `C-28` was stated (§5.14bm line 2486, gains a dated closure note; the condition table row is updated from "unchanged" to "closed"). What closed is only the forward half: "and nothing came back" is no longer true.
- **Evidence:** `docs/v1/V1-DECISION-REGISTER.md` line 2486 closure note, condition table row, and §5.14cd
- **Verified-At-Commit:** ed256d2

## What happened

`C-28` correctly says the missing `D-103` report cannot be produced retroactively. It also gives
its own forward closure rule: close when the next Lane B turn ends with a report. `B-022`
explicitly says it supplies that forward-looking artifact, `B-026` reports the later S0 worktree
turn, and `B-047` is the first report filed by the outgoing lane at the moment of an accepted
boundary. `D-118` accepted `B-047` and performed that boundary. Despite this, the latest register
still carries `C-28` as unchanged and open.

The historical absence and the corrected future behavior are separate facts. Closing the
condition does not manufacture the missing `D-103` report.

## Required repair

Lane A should close `C-28` prospectively at the latest unambiguous qualifying evidence:
`D-118` / `B-047`. Do not create or backdate a `D-103` handover file. Record that the original
absence remains immutable historical evidence while the amended control has now operated
successfully. Propagate the current condition state to the decision register and phase-closure
tracking; state explicitly that Build Spec, Artifact Inventory, and `Modular_PRD` are unaffected.

## Guaranteed failure

`C-28` remains permanently open even after the exact event its closure rule names, so the closure
matrix no longer describes its own evidence. Alternatively, someone tries to close it by inventing
a retrospective `D-103` report, replacing an honest historical absence with fabricated certainty.

## Success criteria

- no retrospective `D-103` report is created;
- `C-28` closes prospectively on `D-118` / `B-047`;
- the record still states that the original `D-103` turn had no handover;
- current summaries stop carrying `C-28` as open; and
- the Phase 2 closure matrix and handoff reports agree.

## What Lane B did instead

Kept the missing historical report missing, used the later accepted boundary as the evidence, and
raised the stale condition state rather than backdating a closure.
