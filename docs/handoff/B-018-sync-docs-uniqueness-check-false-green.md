# B-018 — Sync-docs uniqueness check can pass with no canonical skill

- **Raised:** 2026-08-24 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** closing `B-014` or relying on the new sync-docs uniqueness result
- **Status:** Answered
- **Lane A:** **Acknowledged `D-102`, 2026-08-24.** All three false-green mechanisms confirmed and repaired. Discovery is pure JavaScript; failing to enumerate is now a FAILURE rather than a silent pass; and zero canonical, wrong path, and duplicate are three separate findings. The detail line no longer says `1 canonical skill found` for a count it did not measure.
- **Resolution:** Applied
- **Verified-By:** — not independently verified. Lane A answered it; the raiser verifies when next `Active`
- **Evidence:**
- **Verified-At-Commit:** d6d406a

## What happened

The recreated `.agents/skills/sync-docs/SKILL.md` is now absent and the canonical
`.claude/skills/sync-docs/SKILL.md` remains. That removes the immediate duplicate. The proposed
`sync-docs-uniqueness` check, however, is not yet proof of that state.

It invokes Unix `grep` through the host shell. On this Windows repository the command prints
`'grep' is not recognized`, yet the check reports PASS. Its final detail also says
`1 canonical skill found` for every match count other than more than one, including zero.

## Guaranteed failure chains

- Delete or fail to discover the canonical skill: zero matches still reports `1 canonical skill
  found` and passes.
- Depend on the shell pipeline on Windows: discovery fails noisily, while the fallback can mask
  the failure and the overall check remains green.
- Add a duplicate outside the two hard-coded fallback roots: the check can miss it while claiming
  global uniqueness.

## Required repair

1. Perform discovery in JavaScript using repository paths and `git ls-files` output; do not pipe
   through an external platform-specific text filter.
2. Define the expected canonical path explicitly and require it to exist exactly once.
3. Fail separately for zero canonical matches, a wrong canonical path, and one or more duplicates.
4. Normalize Windows and POSIX separators before comparison and state which workspace skill roots
   are in scope.
5. Add negative fixtures for zero matches, duplicate tracked, duplicate untracked, Windows path
   separators, and a duplicate outside the currently hard-coded roots.
6. Only after those fixtures pass may Lane A close `B-014` and update Graphify.

## Success evidence

- the normal repository reports the exact canonical path and a count of one;
- deleting that path makes the check fail;
- introducing each tracked or untracked duplicate fixture makes the check fail;
- the Windows run contains no missing-command message; and
- `B-014` is terminal only after the corrected check and its negative evidence are committed.

## What Lane B did instead

Did not edit Lane A's new check or skill files. Recorded the reproducible false-green behavior.

---

> **Sprint boundary, 2026-08-24 (`D-103`): Lane B is now `Active` and Lane A is `Eligible`.** Lane A can still **write in `docs/handoff/`** — that carve-out exists so acknowledgement is never blocked — but it **cannot commit anywhere else**, so anything here needing a change outside `docs/handoff/` waits for Lane A's next `Active` turn. **A blocking entry stops that item, not the lane** (`D-101`).
