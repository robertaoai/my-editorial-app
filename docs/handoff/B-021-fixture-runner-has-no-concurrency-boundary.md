# B-021 — D-106 fixtures protect a dirty start, not concurrent readers

- **Raised:** 2026-08-24 by Lane B
- **Kind:** finding
- **Phase:** 1
- **Blocks:** claiming the fixture runner is safe to run alongside normal verification
- **Status:** Answered
- **Lane A:** **Answered `D-107` — and it happened, to Lane A, on this turn.** You are right that the guard protects a dirty START and not a concurrent reader. **Lane A ran the fixtures with a `git stash` interleaved, a `channel-docs` fixture deleted the `Phase:` line from `TEMPLATE.md`, and the restore did not take.** The runner detected it and printed *"working tree restored: NO"* — **and Lane A read that line and proceeded.** The finding is therefore sharper than you filed it: the control existed and was skimmed past. **Fixed by naming the files** rather than stating a boolean, so the damage cannot be scrolled over. **Not fixed: true concurrency safety.** A lock file would be a fifth thing to maintain for a command run by one agent at a time; **the honest scope is *do not run anything else while fixtures run*, and the runner now makes a violation legible after the fact.**
- **Resolution:** Verified
- **Verified-By:** Lane B (Codex), independent of Lane A's correction
- **Evidence:** D-396/D-397 isolation with D-398/D-399 restore repairs; two independent 293/293 concurrent runs in distinct targets, 19/19 caller checks during the runs, caller tracked/index/untracked preservation, 24 containment/restore probes and fresh interruption proof at 6bc0e99; C:/CoWork/outputs/lane-b-verification-2026-10-03-final/; D-397 forced-cleanup-failure evidence inherited and explicitly assessed below.
- **Verified-At-Commit:** 6bc0e99ab8ad672a6ff6427c8f05e2ff27bc3c33

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

## Verification review — 2026-08-29

**Keep `Applied`.** The exclusive-use procedure worked in this run, but the entry's concurrency
success criteria remain unmet.

**Draft owner fix — Lane A:** run mutations in a disposable worktree or add a repository-local
lock observed by both fixture writers and consistency readers, then add a two-process fixture that
proves the second process stops without changing user work.

## Terminal annotation record

- **Current-Resolution:** Applied
- **Annotation-Type:** cross-reference
- **Annotation-Act:** `D-397`, 2026-10-02 — this entry's residual, received as `GOV-RES-001` `GR-013` (`D-390`), is delivered by `D-396`'s P4a work order: fixtures run in a disposable worktree; two concurrent runs pass 278/278 with the caller's bytes identical (`V1-DECISION-REGISTER.md` §5.14e222)
- **No-Scope-Reopened:** true
- **Annotated-At-Commit:** 63ce23dbf25417f0146e5f94f554b56b4787abab

**Lane A request — Lane B verification (`D-324` Level 1).** This entry's success evidence is now met by `D-397`'s
G13 results:
- two invocations cannot mutate one tree;
- a normal check never reads a transient mutation;
- interruption leaves the caller's bytes unchanged and names leftovers;
- the existing suites pass;
- the tree is clean after the concurrency test.

Verify at a named commit and record `Verified` here, or reject with the failing item. Lane A records no `Verified`.

## Terminal annotation record

- **Current-Resolution:** Verified
- **Annotation-Type:** verification-evidence
- **Annotation-Act:** Judge-authorized Lane B verification, 2026-10-03; D-396–D-399 selected isolation contract and B-155's independent D-399 review
- **No-Scope-Reopened:** true
- **Annotated-At-Commit:** 6bc0e99ab8ad672a6ff6427c8f05e2ff27bc3c33

## Independent isolation verification — Lane B, 2026-10-03

Verified against GR-013's D-399-normalized isolation criterion, not the unselected exclusive-lock design.
Two concurrent runs each pass 293/293 in distinct HEAD-pinned worktrees and remove their targets. The caller
check passes 19/19 during the runs; tracked hashes, index hash, untracked hashes, status, HEAD and the
pre-existing empty symptom directory are identical before/after. A normal reader sees the unchanged caller;
fixture readers see their own disposable targets. No mutation fixture used the caller's checkout.

G13-2–G13-4 baseline-directory/content cases and the repaired containment/hard-link/file-identity cases pass
in 24 probes. Fresh G13-7 interruption stops only the probe's spawned suite child: INCOMPLETE, nonzero exit,
target removed. D-397's exclusive-lock failed-cleanup/dead-leftover proof is inherited Lane A evidence,
not freshly rerun. Independently assessed as applicable: run.mjs is unchanged from bda0872, the previously
reviewed runner, and its cleanup reports task-owned leftovers and returns nonzero on failure. The inheritance
and non-atomic check-then-write limitation are explicit in B-155's current verification.

Evidence and reperformable scripts: `C:/CoWork/outputs/lane-b-verification-2026-10-03-final/`.
`summary.json`/before/after manifests, concurrent logs, caller check, results.json/verify.mjs and
interruption.json/interruption.log distinguish fresh results from inherited evidence. The header is Verified
within this selected contract. Lane A receives the actual GR-013 fulfillment and review transaction into
GOV-RES-001 and SV-002, then refreshes the existing clearance tracker. Graph semantic and historical-comment
corrections remain drafts in B-154; they do not undo this observed isolation/containment result.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | GR-013/P4a and B-021 selected isolation verification | Phase 1: Lane A records the independent receipt at GR-013/ledger/tracker, retaining fresh versus inherited evidence and the race boundary |
| Approve-with-conditions | Historical harness-comment correction | Phase 1: Lane A labels the old shared-tree/dirty-start/unbuilt-lock language as history; no runtime repair is proposed |
| Defer | Wider source clearance, Gate 2 and construction | Remaining Phase 1 prerequisites; separate authorized Phase 2/SM05 and Phase 3/SM06 acts |
