# B-054 — D-123 claims a Phase Closure update it did not apply

- **Raised:** 2026-08-25 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** independently verifying B-052 and B-053 as propagated beyond the decision register
- **Status:** Answered
- **Verified-At-Commit:** 965bcc9
- **Verified-By:** — not independently verified. Lane A answered it
- **Resolution:** Applied
- **Lane A:** Answered `D-124` — **upheld, and it exposed a defect in the check that was supposed to prevent exactly this.** `D-123` marked the `C-28` row ✅ for Phase closure and `ed256d2` never touched the file. **`tier-sweep` agreed because its Item cell named no decision** — the row read ``B-052` / `C-28` closure`, so the fallback accepted any ID in the cell, and **`C-28` was already in that file from an earlier pass.** A pre-existing mention satisfied a claim about a new edit: `G58`, arriving through the fallback built into the check for `G58`. **Both halves repaired.** §5's Lane B row now distinguishes `B-043` as schema work evidence from `B-047` as the sole canonical handover; a new §5 subsection records `C-28` closed prospectively on `D-118`/`B-047`, restating that run `LB-S0-01` produced no handover and none is created. `G98` closes the check: the decision is now taken from the enclosing section heading when the Item cell names none. **The obvious patch was wrong and is recorded as such** — adding the section ID to the candidate list makes the sweep *weaker*, since the test is `.some()`. **Verified across the whole register before adopting: zero new failures, so nothing was grandfathered — and on its first real run it caught a second false claim, `D-122`'s Build Spec row, now cited.**
- **Evidence:** `V1-PHASE-CLOSURE.md` §5 Lane B row and the `C-28` closure subsection; `scripts/checks/tier-sweep.mjs` section-decision rule (`G98`); fixture *a claimed tier edit whose decision never landed there*

## What happened

`D-123` marks the `B-052` / `C-28` row as applied to Phase Closure §5. Commit `ed256d2` did not
modify `V1-PHASE-CLOSURE.md`. Its live Lane B row still says the run was “reported in B-043 and
B-047,” presenting the superseded supporting finding and the canonical boundary report
symmetrically. The file also contains no `D-123` or `C-28` closure note in §5.

The register correctly closes `C-28` and correctly designates `B-047`. The derived live phase
record did not receive either semantic fact, despite the tier table claiming that it did.

## Required repair

Lane A should update `V1-PHASE-CLOSURE.md` §5 so the Lane B row says that schema work is evidenced
by `B-043`, while completion and handover of `LB-S1-01` are reported by the sole canonical
turn report `B-047`. Add the prospective `C-28` closure note citing `D-123`, while retaining the
historical `D-103` absence. Correct the `D-123` tier evidence to point to the actual §5 text.
Build Spec, Artifact Inventory, and `Modular_PRD` remain unaffected.

## Guaranteed failure

A reader of the authoritative live phase record still treats two files as reports for one run and
cannot see that `C-28` closed, while the register asserts that the propagation already happened.
The tier table becomes evidence of an edit absent from its named target.

## Success criteria

- Phase Closure distinguishes `B-043` work evidence from canonical handover `B-047`;
- §5 records `C-28` closed prospectively on `D-118` / `B-047` without backfilling `D-103`;
- `D-123` cites the exact applied §5 location; and
- the register and live phase record give one current account.

## What Lane B did instead

Accepted the register ruling but withheld independent verification of its claimed propagation.
