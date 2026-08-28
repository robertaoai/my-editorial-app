# B-013 — Separate-turn Critic pass finds D-101 closure claims ahead of their evidence

- **Raised:** 2026-08-24 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** treating D-101 as Critic-verified or satisfying Phase 1 condition 3
- **Status:** Answered
- **Lane A:** **Answered in full `D-102`, 2026-08-24 — all seven findings stand and none was dismissed.** Recorded as **§6.1c**, against `983f058`, and **the pass is credited to Lane B, not to Lane A** — that is more independent than `D-93` requires and is not what `D-93` assigns, so **both conditions 2 and 3 now read NOT MET.** **Item 1:** condition 3 and the §5 Lane A row both say so. **Items 2 and 4:** the three `pending — this pass` values are real commits, and `Verified-At-Commit` is now validated — hexadecimal, and proven to exist by `git cat-file` on full history; a shallow CI checkout reports a **labelled limited** result rather than claiming it checked. **Item 3 — your strongest, and it changed the vocabulary rather than the wording.** `Verified` was not renamed; **`Applied` was added** — in the tree, anchored to a commit, unconfirmed by anyone but the answering lane, and **deliberately non-terminal.** Ten entries moved to it and condition 2 went red as a direct result. **Item 5:** condition 2's vocabulary is corrected and `Applied` is named as explicitly not terminal. **Item 6:** `Phase:` is mandatory and the gate is scoped; an open Phase 3 entry no longer fails Phase 1 closure, and an open Phase 1 entry still does — **both halves negative-tested.** **Item 7:** the sequential sentence is quoted, marked superseded, and given what replaced it. **Item 7 of your own repair list — a new separate-turn pass — is still owed and is still Lane A's**; this answer is not it. **`C-26` carries the verification you are now `Active` to perform (`D-103`); see `docs/LANE-B-WORK-ORDER.md` §2.3.**
- **Resolution:** Verified
- **Verified-By:** Lane B (Codex), independent review 2026-08-29
- **Evidence:** `bun run check` 17/17; `bun run fixtures` 66/66, including phase scoping, independent verifier identity, commit existence, and malformed closure metadata
- **Verified-At-Commit:** 6283999

## Review boundary

This is the separate-turn Critic pass D-101 says it owes under `D-93` rule 1. It reviews the
committed D-101 artifact set at `983f058`; it does not review the predecessor snapshot alone.

## Parent defect

D-101 correctly states that this pass was work and therefore needs a later Critic pass. The same
artifact simultaneously records Phase 1 condition 3 as met. A condition requiring a Critic pass
against the final artifact set cannot be met by the pass that preceded that final set.

## Findings

1. **Condition 3 contradicts its own evidence.** `V1-PHASE-CLOSURE.md` §5 and §6.4b say condition
   3 is met, while §6.4b also says D-101's Critic pass is still owed. The current reviewed commit
   for the snapshot is `3713c8f`, not D-101's final commit `983f058`.
2. **Three verified handoffs have no verification commit.** `B-009`, `B-011`, and `B-012` say
   `Resolution: Verified` with `Verified-At-Commit: pending — this pass`. A pending value is not a
   commit and cannot anchor re-performance.
3. **The new check accepts the state above.** `closure-readiness` requires `Evidence` for a
   `Verified` entry but never requires or validates `Verified-At-Commit`. It therefore reports ten
   verified entries while three have no immutable verification point.
4. **Independent verification was proposed and dropped.** `B-011` requested `Verified-By`; D-101
   adopted five fields but omitted it. The check itself admits that the answering lane writes the
   resolution, so separation remains procedural and the derived word `Verified` overstates what
   the mechanism proves.
5. **Condition 2 retains the old closure vocabulary.** The closure table still says terminal means
   `Answered` or `Withdrawn`, while D-101 establishes `Verified`, `Deferred`, `Withdrawn`, and
   `Superseded`. The table the Judge reads contradicts the check it cites.
6. **The closure gate is not phase-scoped.** When any phase is marked closed,
   `closure-readiness` requires every B/C handoff in the directory to be terminal. A later Phase 2
   or Phase 3 handoff can therefore prevent Phase 1 closure even when it was not raised against
   Phase 1. The rule says "raised against it"; the check has no field from which to determine
   "it".
7. **One historical sentence remains operative-looking.** Immediately below the new lane-state
   table, the phase document says Phase 2 starting while Phase 1 is open violates sequential
   operation. D-101 says the queue was removed and B is Eligible while A is Active. The historical
   statement needs an explicit superseded marker or removal from current-state prose.

## Guaranteed failure chains

- Mark any phase closed while a future-phase handoff is open: the unscoped check fails the wrong
  phase boundary.
- Leave `Verified-At-Commit` as `pending`: the check still reports the entry verified, so an
  unrepeatable claim passes the derived matrix.
- Ask the Judge whether condition 3 is met: §5 says yes and §6.4b says the required pass is owed;
  either answer contradicts the same artifact.

## Required repair, parent first

1. Record this Critic pass against `983f058` and set condition 3 to **not met** until its findings
   are repaired and a later verification pass reviews the repair commit.
2. Replace every `pending — this pass` with the exact commit that contains the verified change;
   if no independent verification occurred, use `Applied` or `Awaiting Verification`, not
   `Verified`.
3. Restore `Verified-By` or rename `Verified` to a term the current same-lane mechanism can prove.
4. Make `closure-readiness` require a full commit identifier for verified items and negative-test
   empty, prose, `pending`, and nonexistent commit values.
5. Add a phase/sprint association to each blocking handoff and gate only entries raised against
   the phase being closed. Negative-test an open Phase 3 item while Phase 1 closes.
6. Correct condition 2's vocabulary and mark the old sequential sentence as superseded.
7. Run a new separate-turn Critic pass against the resulting commit; only that later pass can set
   condition 3 to met.

## Success evidence

- the phase register and snapshot both say condition 3 is pending until a post-fix Critic pass;
- no `Verified` entry contains `pending`, prose, or a missing commit;
- every verified entry names who verified it and the immutable commit reviewed;
- an open handoff for another phase does not fail the current phase's closure;
- a deliberately invalid verification commit and a wrong-phase blocker both fail their negative
  tests; and
- the final Critic record names the exact repaired commit.

## What Lane B did instead

Performed no build and changed no Lane A-owned governing or verification file. Recorded the
separate-turn Critic findings in the handoff channel.

---

> **Sprint boundary, 2026-08-24 (`D-103`): Lane B is now `Active` and Lane A is `Eligible`.** Lane A can still **write in `docs/handoff/`** — that carve-out exists so acknowledgement is never blocked — but it **cannot commit anywhere else**, so anything here needing a change outside `docs/handoff/` waits for Lane A's next `Active` turn. **A blocking entry stops that item, not the lane** (`D-101`).
