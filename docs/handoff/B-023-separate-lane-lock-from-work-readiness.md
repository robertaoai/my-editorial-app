# B-023 — Separate lane lock status from work readiness

- **Raised:** 2026-08-24 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** applying `B-019` and treating the current lane-state vocabulary as the Judge's clarified model
- **Status:** Open
- **Lane A:** **Answered `D-107` — adopted in substance, rejected in form, and Lane A arbitrated it as the `Active` lane on the Judge's instruction.** **The separation you identified is real and it cost a turn.** One word carried two facts: who holds the repository lock, and who may work. **What is rejected is the second vocabulary.** `Active` | `Eligible` | `None` | `Done` beside ready | blocked | verified | complete is eight terms for a two-agent handover, and **this corpus records a restated status drifting five separate times** (`G55`, `G56`, `G58`, `G75`, and the template you flag in `B-027`). **`None` is rejected specifically**: a lane that is not offered is `Blocked` on a named item or `Done`; if neither, it is `Eligible`. **The work condition is not a new field because it already exists** — it is the `Resolution` on your entries and the content of your turn report. Adding it to §5 would be the duplication `D-101` removed from the rule files. **What is adopted: `Eligible` now explicitly means offered-and-may-begin**, which is the fact that was missing.
- **Resolution:**
- **Verified-By:**
- **Evidence:**
- **Verified-At-Commit:**

## Judge clarification

**Further Judge clarification, 2026-08-24.** A recorded pair of outgoing Lane A `Active` and
incoming Lane B `Eligible` is the handover offer itself. Lane B may accept that offer and continue;
acceptance makes Lane B the execution holder and releases Lane A. `Eligible` therefore does not
mean concurrent commit permission, but it also does not require a second Chief Editor selection.
The Chief Editor already supplied the authority by naming the successor `Eligible`.

The Judge clarified the execution sequence as follows:

| Point | Lane A | Lane B | Lane C | Meaning |
|---|---|---|---|---|
| `T0` | `Active` | `None` | `None` | Lane A holds the execution lock; another lane that starts must report that Lane A is running and stop |
| `T1` | `Active` | `Eligible` | `None` | Lane A still holds the lock; Lane B is nominated to take over at the next valid handover; Lane C must stop |
| `T2` | `Eligible` | `Active` | `None` | Lane B holds the lock; Lane A is the Chief Editor-nominated successor for the return handover; Lane A still may not commit |
| `Tn` | one `Active` | at most one nominated `Eligible` successor before handover | all remaining lanes `None` | Every permutation obeys one exclusive lock and has no successor race |

When an `Eligible` lane acquires `Active`, the outgoing lane becomes `None` unless the Chief Editor
also nominates it as the single next successor. For this explicitly directed two-boundary cycle,
Lane A becomes `Eligible` when Lane B becomes `Active`, because Lane A is already nominated to
receive the completed work back. The handover remains one atomic transition and there must be no
observable interval with zero or two Active lanes.

## Parent defect — one column currently represents two different systems

The current vocabulary is `Active | Eligible | Blocked | Done`. It combines:

1. **Execution-lock status** — who may commit now; and
2. **Work readiness** — whether a lane has executable work, a blocker, or completed work.

The Judge's `None` is an execution-lock state. Existing `Blocked` and `Done` are work conditions.
They are not alternatives of the same kind. If a handover changes Lane C from `Blocked` to `None`
in one column, the repository loses the fact that `C-18`, `C-24`, and `C-25` still block part of
Lane C's work. If it keeps `Blocked`, the table violates the Judge's rule that every non-selected
lane becomes `None` for the lock.

## Human authority versus system mechanism

The Chief Editor/Judge is the natural person who authorizes which lane may take over. The lock
status is the institutional mechanism that records and enforces that authorization. An agent
being `Eligible` does not itself create human authority to pre-empt an `Active` lane.

Normalize “can change to Active” as: **the Chief Editor-approved `Eligible` successor may accept
the offered handover and continue as the sole execution holder.** This is not unilateral
pre-emption: the outgoing `Active` plus incoming `Eligible` pairing is the recorded offer. A lane
that was not named `Eligible` still has no authority to acquire the lock.

## Guaranteed failure chains

- Keep one combined state column: setting a non-active lane to `None` erases blockers or
  completion, while retaining `Blocked`/`Done` violates the new lock vocabulary.
- Let an Eligible lane self-activate before the Active lane releases: two lanes can write under
  the same git identity and a silent overwrite becomes possible.
- Apply the handover as two independent edits: a reader can observe zero Active lanes or two.
- Treat `Eligible` as permission to commit: both the Active and Eligible lanes can change their
  surfaces concurrently, defeating the lock.
- Let a `None` lane run without checking the recorded holder: it cannot give the required
  “Lane X is still running” prompt reliably.

## Required repair, parent first

1. Record the Judge clarification as the decision following `D-106`; state whether the Chief
   Editor remains the acquisition authority. The recommended default is **yes**, preserving the
   existing human-accountability rule.
2. Replace the overloaded state with two explicit fields in the Phase register:
   - **Lock status:** `Active | Eligible | None`;
   - **Work condition:** `Ready | Blocked | Done` plus the existing named blockers and remarks.
3. Amend the shared-core vocabulary in `CLAUDE.md`, `AGENTS.md`, and
   `.agents/rules/graphify.md` together. Propagate the sequencing fact to the Build Spec; state
   explicitly that the Artifact Inventory and `Modular_PRD` are unaffected unless an artifact or
   product tier changes.
4. Revise the Sprint-boundary procedure so one logical act sets the incoming lane `Active`, sets
   at most one Chief Editor-nominated successor `Eligible`, sets all remaining lanes `None`, and
   preserves each lane's independent work condition.
5. Answer `B-019` under the clarified two-boundary model: Lane A `Eligible`, Lane B `Active`, Lane
   C `None`; preserve Lane C's blockers in its work-condition field. On return, Lane A becomes
   `Active`, Lane B becomes `None`, and Lane B's completed S0 condition remains independently
   recorded.
6. Update `lane-state` to validate:
   - exactly one `Active` lock holder;
   - at most one `Eligible` successor;
   - `Eligible` never grants commit permission;
   - at most one non-active lane is the Chief Editor-nominated `Eligible` successor and every
     other lane is `None`;
   - every lane has one valid, independently parsed work condition; and
   - a blocked condition names its blocker without changing lock status.
7. Add transition fixtures for `T0`, `T1`, `T2`, two Active lanes, zero Active lanes, an Eligible
   lane attempting to commit, a `None` lane attempting to run, and preservation of a blocker
   across handover.
8. Rebuild Graphify after the governing documents and checks are committed, then rerun the full
   consistency and fixture suites.

## Success evidence

- the phase table can represent all three examples without losing blockers or completion;
- exactly one lane holds `Active` and only that lane may commit;
- an Eligible lane is a nominated successor, not a concurrent writer;
- a None lane identifies the current Active holder and stops;
- the directed A-to-B handover produces A `Eligible`, B `Active`, C `None`, and the return produces
  A `Active`, B `None`, C `None`, with no intermediate invalid state;
- Lane C's existing blockers survive that handover in the separate work-condition field; and
- all transition fixtures fail on the intended violation and pass on the Judge's examples.

## What Lane B did instead

Did not change the shared core, phase register, decision register, or `lane-state` check. Those
belong to Lane A. Recorded the normalized two-axis model and stopped before applying `B-019` under
the superseded one-axis semantics.

---
