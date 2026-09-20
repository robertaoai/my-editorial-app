<!--
One pull request = ONE selected V1 MMF packet (`D-245`).

This template grants NO authority and selects NOTHING. An empty or partly filled template authorizes
no work. A pull request is transport and review evidence: opening or merging it does not create DoR
and does not satisfy the MMF's DoD. If the packet cannot fit one reviewable pull request, stop:
Lane A splits and re-authorizes it before construction, and a child pull request is never reported
as the whole MMF's DoD.

Do not write check totals, omission counts, commit hashes of unrelated work, or a sprint ID copied
from another document. Cite the record that owns each fact.
-->

## 1. Authority — every item must already exist before this pull request

- [ ] **Register act:** decision ID that selected this MMF and authorized this run: `D-___`
- [ ] **Selected packet:** `docs/v1/work-packets/V1/V1-SM0_.md` — the ONE packet this PR builds
- [ ] **Active lane:** `docs/v1/V1-PHASE-CLOSURE.md` §5 names the executing lane `Active` (a lane that
      is only `Eligible` may not build)
- [ ] **Work order:** the bounded unit, named paths, exclusions, tests and stopping checkpoint: `___`
- [ ] **DoR evidence:** every DoR box of the packet is checked and links to current evidence

## 2. Scope

- Bounded scope statement (one paragraph):
- Explicit exclusions (copied from the packet and the work order):
- Paths changed — must be inside the executing lane's surface:

## 3. Definition of Done — agreed BEFORE construction

Link each DoD item of the packet to the evidence that satisfies it. An unlinked item is not met.

| DoD item (from the packet) | Evidence link |
|---|---|
| | |

## 4. Behaviour evidence for this MMF

- Acceptance cases and their method rationale (`docs/LANE-B-WORK-ORDER.md` §7), each with failing-first
  or honest characterization evidence:
- Refusal paths, each showing a named reason and no state change:
- Replay/idempotency, showing no second effective outcome and a visible audit trail:
- Persistence — every control writes to the database and the UI reflects it (no dead button):
- Exclusions shown absent:

## 5. Verification evidence

- [ ] Typecheck, lint and tests pass (output linked)
- [ ] The **full local** consistency run passes, including the checks CI skips — hosted CI does not
      replace it (`.github/WORKFLOWS-SPEC.md` §3). Output linked:
- [ ] Graphify: final local coverage, drift and source checks against the last governed commit, if any
      governed document changed. Not applicable otherwise (state which):

## 6. Data, safety and secrets

- Schema or migration impact, with rollback or safe-failure evidence:
- Secret-handling impact (no credential in frontend code or in logs):
- New dependencies (must have been provisioned by Lane A beforehand):

## 7. Lifecycle

- Handoff entries raised or closed by this work (each keeps its own record):
- Lane-crossing justification (`Lane-Crossing:` trailer), if any:
- **Still required after merge:** independent verification by an actor who did not build this, and the
  Judge's acceptance of the business outcome. Merge is not DoD.

## 8. Refuse this pull request if any of these is true

- No Register act, packet, Active lane or work order is named in section 1
- More than one MMF packet, or a packet that was split without re-authorization
- A DoD item has no evidence link, or "merged" is offered as evidence
- Only hosted CI is cited for the checks it skips
- Paths fall outside the executing lane's surface, or an excluded item is present
