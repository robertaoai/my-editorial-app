# B-028 — Boundary ownership prevents Lane B from returning Active to Lane A

- **Raised:** 2026-08-24 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** completing the Lane B-to-Lane A return boundary without an undeclared lane crossing
- **Status:** Answered
- **Lane A:** **Answered `D-107` — real, and it is dissolved rather than solved.** You cannot return `Active` to Lane A because §5 is Lane A's surface, so the boundary requires an act you are not permitted to perform. **The resolution is that you never needed to perform it.** A lane does not hand `Active` to anyone (`D-103`); **the Chief Editor authorizes the boundary and the `Active` lane records it.** What you owe at the end of a turn is the turn report, which lives in the unmapped channel you can always write. **`B-026` is that act.** The register now says so explicitly, because the previous wording left the return boundary looking like a lane's responsibility.
- **Resolution:** Verified
- **Verified-By:** Lane B (Codex), independent review 2026-08-29
- **Evidence:** `D-108` boundary-only Lane A carve-out; `V1-PHASE-CLOSURE.md` §5; `lane-state` PASS and 7/7 transition-state fixtures
- **Verified-At-Commit:** 6283999

## What happened

The current procedure says the handover commit must be made by the lane going out of `Active`
(`V1-PHASE-CLOSURE.md` §5.1). The same procedure requires the boundary to update §5 and the
decision register (§5.2). Those files belong to Lane A. Lane B is forbidden to apply work outside
its lane and may write in `docs/` only through the unmapped `docs/handoff/` channel.

The A-to-B boundary is possible because Lane A is both the outgoing Active lane and the owner of
the tracking files. The B-to-A return is not: Lane B would be Active but cannot edit or commit the
files that make Lane A Active. This is the exact asymmetry blocking the return handover.

Two derived documents also duplicate live state: `V1-BUILD-SPEC.md` states Lane A is Active, and
`LANE-B-WORK-ORDER.md` states Lane B is not Active, even though the phase register is declared the
only live source. They become stale at the next valid boundary. `V1-ARTIFACT-INVENTORY.md` still
correctly says `flags.ts` is absent at committed HEAD; it changes only after Lane B's S0 commit.

## Guaranteed failure chain

- Lane B follows lane ownership: it can report completion but cannot return the lock, so the cycle
  stops with Lane B Active.
- Lane B edits Lane A's tracking files: the return works only by violating the lane boundary, and
  the same shared git identity makes the crossing easy to misread as authorized orchestration.
- Lane A edits while Lane B remains Active: two lanes act under one lock state.
- Only the phase table changes: the decision register and derived instructions disagree, so the
  next lane acts from whichever document it happens to read.

## Required repair, parent first

1. Lane A records the Judge clarification that `Active + Eligible` is an offered handover and
   acceptance transfers execution authority, then defines **who may prepare and commit the audit
   update when the outgoing execution holder does not own the tracking files**.
2. Recommended rule: the outgoing lane raises its final report; the Chief Editor authorizes the
   incoming lane; the incoming Lane A performs one explicitly identified **boundary-only commit**
   before any other Lane A work. This narrow institutional act is not ordinary concurrent work.
   If the project instead chooses an outgoing-lane crossing, state that exception explicitly and
   require the `Lane-Crossing:` trailer.
3. Propagate the lock/work-condition separation from `B-023` into the decision register, phase
   table, shared-core rule files and `lane-state` fixtures in one Lane A pass.
4. Remove live-state restatements from `V1-BUILD-SPEC.md`, `LANE-B-WORK-ORDER.md`, and the handoff
   template. Replace them with timeless references to the phase register. State that the artifact
   inventory and `Modular_PRD` are unaffected by the boundary itself.
5. Record Lane B's accepted takeover without treating the later audit edit as a prerequisite to
   its already-authorized S0 work: Lane B is the execution holder, Lane A the single `Eligible`
   successor, and Lane C `None` in lock status; preserve work conditions separately.
6. After Lane B commits S0 and finalizes `B-026`, apply the return atomically: Lane A `Active`, Lane
   B `None`, Lane C `None` in lock status; retain Lane B's completed work condition and Lane C's
   blockers. Update the inventory for the now-committed `flags.ts` and configuration artifacts.
7. Run the complete consistency and fixture suites after each boundary, and require Graphify's
   analyzed HEAD to equal the boundary commit before the next lane acts.

## Success evidence

- the procedure identifies exactly one actor authorized to commit each direction of the boundary;
- no ordinary Lane A or Lane B work occurs while the other lane is Active;
- the takeover state is Lane B `Active`, Lane A `Eligible`, Lane C `None` in lock status;
- the return state is Lane A `Active`, Lane B `None`, Lane C `None` in lock status;
- each lane's readiness, blockers and completion survive independently of lock status;
- derived documents contain no copied live state;
- the S0 application commit and final turn report exist before the return boundary; and
- all checks, fixtures and Graphify currency checks pass at both committed boundaries.

## What Lane B did instead

Completed its S0 worktree changes and final report, normalized its own handoff language, and
stopped before editing Lane A's tracking files or creating an unauthorized commit.

---
