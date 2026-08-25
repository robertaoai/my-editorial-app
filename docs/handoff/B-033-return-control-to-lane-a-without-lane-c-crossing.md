# B-033 — Return control to Lane A without a Lane C crossing

- **Raised:** 2026-08-24 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** a truthful Lane B → Lane A return record and further Lane A processing against one exclusive lane lock
- **Status:** Answered
- **Lane A:** **Answered `D-108` — the contradiction is real, you reported it accurately, and the Judge has ruled.** You were right that §5 could not express the ruling truthfully and that `lane-state` preserved the contradiction rather than detecting it. **The ruling, in the Chief Editor's words: the rules kept not being applied, so only one lane is `Active`; while it runs the others are `Blocked`; on completion the others become `Eligible`.** **`D-107`'s `Eligible` is superseded** — it meant *offered, may begin without accepting*, and that is precisely the reading that let a turn be started, doubted and abandoned. **`Eligible` now means the lock is FREE and this lane may be selected.** **Your three checker gaps are closed**: a row now carries one lock state (`Blocked`/`Eligible` together was a work condition mixed into the lock column), an `Eligible` row beside an `Active` one fails, and a `Blocked` row with no `Active` run fails. **`B-028` is resolved by carve-out** — Lane A may edit §5's lane rows at a boundary regardless of who holds the lock, because a boundary only one lane can record must not require that lane to hold the lock to record it. **On the routing half: NOT adopted.** The Chief Editor's ruling is about exclusivity, not adjacency, and an A→B→C-only route would make Lane A answering `C-001` a violation while adding two crossings that change no evidence — **your own §'Lane C revalidation' argument, applied one step further.**
- **Resolution:** Applied
- **Verified-By:** — not independently verified. Lane A answered it; the raiser verifies when next `Active`
- **Evidence:** `docs/v1/V1-PHASE-CLOSURE.md` §5; `D-107`; `scripts/checks/lane-state.mjs`; `docs/handoff/C-001-rename-required-check.md`
- **Verified-At-Commit:** 59042a8

## What happened

The Chief Editor clarified the lane crossing as an exclusive execution lock:

- exactly one lane is `Active`;
- at most one different lane is `Eligible`, meaning a handover has been offered but not accepted;
- every other unfinished lane is `Blocked` on a named active run;
- accepting a handover makes the incoming lane `Active` and removes `Active` from the outgoing
  lane in the same state-record edit; and
- the permitted route is Lane A → Lane B → Lane C, with returns Lane C → Lane B and Lane B →
  Lane A. There is no direct Lane A ↔ Lane C crossing.

The current live record cannot express that ruling truthfully. `V1-PHASE-CLOSURE.md` §5 records
Lane A as `Active`, Lane B as `Eligible`, and Lane C as both `Blocked` and `Eligible`. The same
section says an `Eligible` lane may begin and commit without accepting the lock. `D-107` carries
that meaning, while the shared lane rules still say only the `Active` lane may commit.

The checker preserves the contradiction rather than detecting it. `lane-state.mjs` requires one
`Active` lane but permits one row to be both `Blocked` and `Eligible`; it does not enforce at most
one `Eligible` lane, adjacency, takeover acceptance, a named run, or the return path.

Lane B has completed this review and is returning the state-model correction and the open schema
packet in `B-032` to Lane A. Lane B made no application, schema, or workflow change in this turn.

## Lane C revalidation — no crossing on this return

Lane C is **not** part of this handoff:

1. this turn changed no `.github/workflows/` file and creates no workflow requirement;
2. Lane B has no Lane C result to consolidate;
3. the immediate predecessor of Lane A on the approved return route is Lane B; and
4. sending this packet B → C → B → A would add two crossings without changing its evidence or
   resolving its Lane A-owned defects.

This does **not** mean Lane C has no open backlog. `C-001` remains open, and `C-18`, `C-24`, and
`C-25` remain separate Phase 3/settings concerns. The current compatibility `verify` job still
cannot mirror failure safely, and the live ruleset evidence still requires the recorded external
settings act. Those items must remain open, but none is a dependency of this Lane B → Lane A
return. Therefore Lane C receives no `Eligible` state and no turn report is required for this
crossing.

## Required Lane A acceptance, parent first

### 1. Arbitrate the state semantics

Supersede the part of `D-107` that allows an `Eligible` lane to execute. Record:

- `Active` = the sole lane holding the execution/commit lock;
- `Eligible` = the sole immediate successor offered the lock, not yet executing;
- `Blocked` = an unfinished non-holder waiting on a named active run or external act; and
- `Done` = the lane's Definition of Done has been independently accepted.

The work condition and evidence package remain separate from this lock state.

### 2. Record this return without inventing history

The repository already records Lane A as `Active`. Do not fabricate an intermediate Lane B
`Active` snapshot after the fact. Treat this entry as Lane B's explicit return report and correct
the live record atomically to the accepted post-return snapshot:

| Lane | Lock state after Lane A accepts this return | Blocked on |
|---|---|---|
| **A** | **`Active`** | — |
| **B** | **`Blocked`** until the Judge accepts or reopens its next work item | the named Lane A Judge/orchestration run |
| **C** | **`Blocked`** | its existing `C-001` / `C-18` / `C-24` / `C-25` Phase 3 dependency set; **not this return** |

Do not mark Lane B `Done` merely because control returned. `Done` requires independent Judge
acceptance. Do not mark Lane C `Eligible`; no Lane C work is being offered.

### 3. Propagate the correction on Lane A's surfaces

In one Lane A pass:

1. update the decision register first;
2. update `V1-PHASE-CLOSURE.md` §5 without giving one lane two states;
3. update the identical shared core in `CLAUDE.md`, `AGENTS.md`, and
   `.agents/rules/graphify.md` together;
4. extend `lane-state.mjs` to enforce exactly one `Active`, at most one different `Eligible`,
   exactly one state per lane, a separate named blocker, and only A↔B or B↔C adjacency;
5. add negative fixtures for A→B, B→C, C→B, consolidated B→A, two `Eligible` lanes, a dual-state
   row, and direct A↔C; and
6. preserve `C-001` as open Phase 3 work rather than treating “no Lane C crossing” as “Lane C has
   no gaps.”

If the state table cannot carry a blocker without the checker mistaking blocker prose for a
second state, add a separate `Blocked On` column. The `State` cell must contain only one canonical
state.

### 4. Accept and process the Lane B packet

After the state model is coherent, Lane A may process `B-032` and the genuine Stage 4 decision
residue. Migration `0002` remains unauthorized until that schema contract is ratified. This
handoff changes control only; it does not approve schema semantics or application code.

### 5. Synchronize evidence

Run the repository consistency suite and its negative fixtures against the corrected committed
state. Then update Graphify with the curated layer preserved and verify graph currency and
portable paths. Do not use a clean check result from the current permissive state checker as
evidence that the corrected transition matrix is enforced.

## What is guaranteed to fail if left unchanged

- Lane B and Lane C can both appear `Eligible`, so the next holder is ambiguous.
- Lane C can be both `Blocked` and `Eligible`, so one status row gives opposite instructions.
- `Eligible` can be read as both permission and non-permission to commit, repeating the lost-turn
  failure already recorded under `D-105`.
- A snapshot-only checker can approve an impossible A↔C crossing or a return with no predecessor
  evidence.
- Routing this return through Lane C would imply workflow work or a C result that does not exist.
- Declaring Lane C gap-free would silently close `C-001`, `C-18`, `C-24`, and `C-25` without the
  required settings evidence.
- Marking Lane B `Done` at handoff would replace Judge acceptance with self-certification.

## Success criteria

- Lane A accepts this return and remains the sole `Active` lane in one authoritative record.
- Lane B has exactly one non-active state tied to the named Lane A run until Judge disposition.
- Lane C is not `Eligible` and no B → C crossing is recorded for this turn.
- Existing Lane C Phase 3 gaps remain visible and unchanged.
- `Eligible` cannot execute until an explicit acceptance changes the lock holder.
- The checker and tracked fixtures reject multiple `Eligible` lanes, dual-state rows, half-applied
  takeovers, and direct A↔C crossings.
- `B-032` remains a separate open schema decision packet rather than being mistaken for completed
  application work.
- Graphify represents the committed corrected record without losing the curated layer.

## What Lane B did instead

Stopped after the review and this handoff. Lane B did not edit Lane A's governing files, Lane C's
workflow, application code, or migration `0002`, and did not claim that Lane C's independent
Phase 3 gaps were closed.

---
