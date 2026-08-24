# B-015 — C-18 has the wrong failure direction and no Lane C handoff

- **Raised:** 2026-08-24 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** Lane C `C-Q2` and a safe required-check rename
- **Status:** Open
- **Lane A:** **Answered `D-102`, 2026-08-24 — and your item 2 outranked everything else in the entry.** **Failure direction corrected:** an absent or misnamed required context never reports, stays **pending**, and **BLOCKS the merge**. The old text said the opposite and an intervening edit appended the correction to the same sentence, leaving `C-18` asserting **both directions for one mechanism**. Now stated once. **Your item 3 — no `C-NNN` handoff existed — is answered by `C-001`**, whose own defects are corrected in that file: raiser, Phase, and the **U+00B7 MIDDLE DOT** separators that the first version dropped from the very string `C-18` exists to protect. **Item 1 is where this got larger than you framed it.** `C-001`'s live-settings review reports the ruleset targeting **no branches** and carrying **no `required_status_checks` rule at all** — so `D-89`'s merge gate may not be in force, and **renaming a context inside a rule that gates nothing is a child task.** Recorded as **`C-25`** (the evidence is held outside the repository and is not reproducible) and **`C-24`** (the compatibility job is skipped rather than failed when the real job fails, so the new context can go green proving nothing). **Item 4's compatibility sequence is sound and unchanged** — it becomes executable once the rule targets `main` and the job mirrors the real result. **Stays `Open`: the settings act and the protected-PR test are the Chief Editor's and have not happened.**
- **Resolution:** —
- **Evidence:** —
- **Verified-At-Commit:** —

## What happened

The tracked workflow currently reports the job name `Typecheck · Lint · Test`; `C-Q2` proposes
`verify`. `C-18` correctly says the file rename and the repository protection setting are coupled,
and correctly assigns the setting to the Chief Editor rather than a build lane.

Its first failure direction is wrong. Current GitHub documentation says every required status
check must pass against the relevant latest commit before merge; a required check that never
reports stays pending and blocks merging. A mistyped or obsolete required context therefore fails
closed, not open. The document later describes the rename mismatch as fail-closed, which is the
correct mechanism, so the same section currently gives both directions for equivalent missing
contexts.

No `C-NNN` handoff exists yet. The work order says Lane C must raise one naming the exact old and
new strings before changing the workflow. The register alone is not that operational handshake.

Official sources reviewed 2026-08-24:

- https://docs.github.com/en/pull-requests/how-tos/merge-and-close-pull-requests/troubleshooting-required-status-checks
- https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches

## Guaranteed failure chains

- Rename the workflow job before changing protection: the old required context does not report and
  the PR remains blocked.
- Require `verify` before any run has produced it: the new required context does not report and PRs
  remain blocked.
- Change both by memory without reading the live setting: D-89 was asserted, never verified, so the
  act may replace a configuration different from the one the documents assume.

## Required repair, parent first

1. The Chief Editor first reads the live `main` protection/ruleset and records the exact required
   context and expected source. No change yet.
2. Correct C-18's failure semantics: an absent required check blocks merge. Preserve the business
   consequence—delivery stops—even though the direction is fail-closed.
3. When Lane C becomes Active, it raises the required `C-NNN` blocked-on-decision handoff naming
   old `Typecheck · Lint · Test` and new `verify`.
4. Use a compatibility transition instead of a blind rename:
   - temporarily make the workflow report both old and new job names;
   - merge that change while the old requirement still passes;
   - after `verify` has completed successfully, the Chief Editor adds `verify` as required while
     retaining the old requirement;
   - Lane C opens the removal change; once `verify` is green on that latest commit, the Chief
     Editor removes the old required context before merge; and
   - Lane C then removes the compatibility job.
5. Record the repository-settings act with date, actor, branch, exact old/new contexts, expected
   GitHub App source, and evidence from a protected test PR.

## Success evidence

- live repository settings show `verify` as the required context from the intended GitHub App;
- a current protected PR cannot merge while `verify` is pending or failing and can merge after it
  succeeds;
- the old middle-dot context is removed only after the new context has reported successfully;
- no interval exists in which zero CI contexts are required; and
- the Lane C handoff is terminal with the settings evidence attached.

## What Lane B did instead

Did not edit the workflow or repository settings. Those acts belong to Lane C and the Chief Editor
respectively.

---

> **Sprint boundary, 2026-08-24 (`D-103`): Lane B is now `Active` and Lane A is `Eligible`.** Lane A can still **write in `docs/handoff/`** — that carve-out exists so acknowledgement is never blocked — but it **cannot commit anywhere else**, so anything here needing a change outside `docs/handoff/` waits for Lane A's next `Active` turn. **A blocking entry stops that item, not the lane** (`D-101`).
