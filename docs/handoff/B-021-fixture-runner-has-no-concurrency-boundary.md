# B-021 — D-106 fixtures protect a dirty start, not concurrent readers

- **Raised:** 2026-08-24 by Lane B
- **Kind:** finding
- **Phase:** 1
- **Blocks:** claiming the fixture runner is safe to run alongside normal verification
- **Status:** Answered
- **Lane A:** **Answered `D-107` — and it happened, to Lane A, on this turn.** You are right that the guard protects a dirty START and not a concurrent reader. **Lane A ran the fixtures with a `git stash` interleaved, a `channel-docs` fixture deleted the `Phase:` line from `TEMPLATE.md`, and the restore did not take.** The runner detected it and printed *"working tree restored: NO"* — **and Lane A read that line and proceeded.** The finding is therefore sharper than you filed it: the control existed and was skimmed past. **Fixed by naming the files** rather than stating a boolean, so the damage cannot be scrolled over. **Not fixed: true concurrency safety.** A lock file would be a fifth thing to maintain for a command run by one agent at a time; **the honest scope is *do not run anything else while fixtures run*, and the runner now makes a violation legible after the fact.**
- **Resolution:** Applied
- **Verified-By:** — not independently verified. Lane A answered it; the raiser verifies when next `Active`
- **Evidence:**
- **Verified-At-Commit:** ea84281

## What happened

The D-106 runner correctly refuses a dirty tree, restores mutations in `finally`, and confirms a
clean tree at completion. It nevertheless mutates the real tracked worktree without acquiring an
exclusive lock. During this review, starting normal checks concurrently with `bun run fixtures`
made `docs/v1/V1-PHASE-CLOSURE.md` temporarily appear modified to those checks. The fixture suite
later restored it successfully and passed 30/30 when rerun alone.

The safety claim therefore applies to pre-existing edits and restoration, not to concurrent
readers or a second fixture process.

## Guaranteed failure chain

A normal check, Graphify rebuild, editor action, or second fixture run starts after the fixture
runner's initial clean-tree test. It reads or modifies a deliberate negative fixture as though it
were project work. Either the result is a false failure/false graph, or the fixture restore
overwrites the concurrent edit.

## Required repair

1. Document immediately that `bun run fixtures` is exclusive and must not run in parallel with
   checks, Graphify, or edits.
2. Prefer executing mutations in a disposable worktree or isolated copy. If real-tree mutation is
   retained, acquire an exclusive repository-local lock before the clean-tree check and hold it
   through final restoration.
3. Make a second fixture process fail clearly on the lock rather than modifying the same files.
4. Make ordinary consistency entry points either honor the same lock or state that the caller must
   serialize them; a lock only observed by the writer does not protect readers.
5. Add a concurrency fixture proving a second writer cannot start and that the original tree and
   user changes survive.

## Success evidence

- two fixture invocations cannot mutate the tree concurrently;
- a normal check cannot inspect a transient negative mutation as repository truth;
- interruption still restores the original bytes;
- the suite passes its existing 30 fixtures; and
- the working tree remains clean after the concurrency test.

## What Lane B did instead

Stopped the parallel interpretation, waited for restoration, confirmed the tree was clean, and
reran `bun run fixtures` alone. No tracked user work was overwritten.

---
