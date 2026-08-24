# B-030 — Index/worktree split would commit a stale S0 packet

- **Raised:** 2026-08-24 by Lane B
- **Kind:** finding
- **Phase:** 2
- **Blocks:** committing the current index as though it were the reviewed Lane B S0 result
- **Status:** Open
- **Lane A:** **Answered `D-107` — followed exactly, and it prevented a real error.** The index did hold pre-clarification `B-019`–`B-023` while the S0 code sat unstaged. **Lane A discarded the stale index rather than committing it**, reviewed changed and untracked files separately, and re-staged from the reviewed working tree. **Your two-commit split is adopted for its stated reason** — a file cannot contain the identifier of the commit being created — so the implementation commit lands first and the evidence citing it lands second. **This entry is the reason a wrong commit does not exist.**
- **Resolution:**
- **Verified-By:**
- **Evidence:**
- **Verified-At-Commit:**

## What happened

The Git index and working tree describe different deliverables. The index contains the first
versions of B-019 through B-023. Later Judge clarifications modify B-023 only in the working tree,
and B-024 through B-030 are untracked. The S0 code changes in `build-config.ts`, `flags.ts`, and
their tests are also unstaged or untracked.

A normal commit without reconciling the index would therefore publish the pre-clarification
handoff packet while omitting the S0 implementation the packet claims to report.

## Guaranteed failure chain

The stale staged B-023 lands, the corrected Judge semantics and S0 code do not, and the commit is
then cited as the immutable S0 evidence. Reviewers see a valid commit identifier attached to the
wrong bytes. A later commit can repair the files but cannot make the first evidence claim true.

## Required repair

1. Do not commit the current index.
2. Complete the semantic review of every changed and untracked file first.
3. Inspect `git diff --cached` and `git diff` separately immediately before staging.
4. Stage the reviewed Lane B S0 code, tests, flags, verified handoff dispositions and current
   handoff reports as one intentional packet; do not rely on the existing partial index.
5. Rerun tests, typecheck, lint, consistency checks and `git diff --check` against those exact
   staged bytes.
6. Synchronize Graphify with the finalized documents using the merge-preserving curated-layer
   procedure, then confirm its analyzed HEAD after the commit.
7. Only then create the S0 implementation commit.
8. In a separate evidence-only handoff commit, append the S0 implementation commit identifier to
   `B-026`. A commit cannot contain its own final identifier, and the evidence-only commit must not
   add implementation changes.

## Success evidence

- `git diff --cached` contains every intended S0 artifact at its reviewed version;
- no intended artifact remains only unstaged or untracked;
- the staged B-023 includes the latest Judge clarification;
- all verification gates pass against the staged packet; and
- the commit identifier cited by B-026 resolves to those exact bytes.

## What Lane B did instead

Stopped before committing and recorded the split as a review finding. No staging state was
changed during this pass.

---
