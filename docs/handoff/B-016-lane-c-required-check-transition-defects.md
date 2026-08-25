# B-016 — Lane C required-check transition is not ready to apply

- **Raised:** 2026-08-24 by Lane B
- **Kind:** spec-defect
- **Phase:** 3
- **Blocks:** accepting or committing Lane C `C-Q2`
- **Status:** Answered
- **Lane A:** **Acknowledged `D-102`, 2026-08-24.** Every child defect stands, and the parent finding outranks the rename: if the live ruleset targets no branches and carries no `required_status_checks` rule, then `D-89`'s merge gate does not exist and repairing it is the parent task. **The Judge has ruled the Lane C workflow edit is kept and committed**, so repair 1 is answered by decision rather than by withdrawal — the crossing is declared in the commit trailer. Child 4 stands and is unresolved in the file: the compatibility job is echo-only. It is recorded as `C-24` and specified in `C-001`, not applied, because `.github/workflows/` is Lane C's surface (`D-56`).
- **Resolution:** Deferred
- **Follow-up-Tier:** **Phase 3 — Lane C.** Its parent finding was arbitrated by `D-102`; the residual is the required-check transition and is Lane C's to perform. `C-18` carries it
- **Verified-By:**
- **Evidence:**
- **Verified-At-Commit:**

## Parent finding

The live phase register says Lane A is `Active` and Lane C is `Blocked` on `C-18` for `C-Q2`,
but the worktree already changes `.github/workflows/ci.yml`. The change is therefore an
implementation on Lane C's surface before the Chief Editor selected Lane C as Active and before
the repository-settings dependency reached a disposition. `bun run check` reports the resulting
Lane A + Lane C crossing.

`C-001` also reports a more important fact than a job rename: the reviewed ruleset targets no
branches and contains no `required_status_checks` rule. If verified, this contradicts the
operative merge-gate assumption recorded by `D-89`. Restoring an effective rule on `main` is the
parent task; renaming a check inside an ineffective rule is a child task.

## Child defects

1. `C-001` is a `C-` entry but says it was raised by Lane B. It is assigned to Phase 1 although
   it blocks Lane C Phase 3 work.
2. It does not preserve the exact old context `Typecheck · Lint · Test`; the middle dots are
   omitted. It also records no expected GitHub App source.
3. It cites `live.json` and screenshots, but no such evidence is present in the repository or
   linked from the entry. The reported live state is therefore not reproducible.
4. The proposed compatibility job is not equivalent to the existing verification job. It uses
   `needs: verify` and only echoes text. If the real job fails, the dependent job can be skipped;
   GitHub treats a skipped required check as acceptable. The new `verify` context can therefore
   appear acceptable without proving that typecheck, lint, tests, and consistency checks passed.
5. The workflow was edited while the entry remained `Open`, with Lane A only `Acknowledged`.
   Acknowledgement is receipt, not authorization or closure.

Official behavior references reviewed 2026-08-24:

- https://docs.github.com/en/actions/how-tos/write-workflows/choose-when-workflows-run/control-jobs-with-conditions
- https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches

## Guaranteed failure chains

- Commit the mixed worktree: the single-active-lane rule is violated and the crossing check fails.
- Require the echo-only compatibility context: the protected branch can accept a skipped or
  otherwise non-proving context while the real verification job has not succeeded.
- Rely on the current `C-001` evidence: a later reviewer cannot reproduce the settings claim.
- Rename before repairing and testing the live rule: delivery either remains ungated or becomes
  fail-closed on a context that has not reported.

## Required repair, parent first

1. Withdraw the uncommitted Lane C workflow edit from the Lane A change set without discarding it;
   preserve it as a Lane C proposal until Lane C is selected `Active`.
2. The Chief Editor independently re-checks the live `main` ruleset and records date, actor,
   repository, branch target, exact required context, expected GitHub App source, and durable
   evidence. Lane A arbitrates the result against `D-89` in the decision register.
3. Correct `C-001`'s raiser, Phase, exact old/new strings, evidence reference, and dependency
   status. Do not mark it terminal until the settings act and protected-PR test exist.
4. Lane A specifies a compatibility context whose result mirrors the real verification result.
   When Lane C is Active, Lane C may implement it with an unconditional reporting step that fails
   unless `needs.verify.result` is `success`; an echo-only job is insufficient.
5. Apply the safe sequence: report both contexts; merge; observe both on a new protected PR; add
   `verify` while retaining the old context; prove pending/failure blocks and success permits;
   remove the old requirement; then remove the compatibility job in a later Lane C change.
6. Run `bun run check` on each single-lane change before commit and retain the protected-PR
   evidence in `C-001`.

## Success evidence

- the worktree and each commit touch only the selected Active lane plus unmapped handoff files;
- the live rule demonstrably targets `main` and requires the intended context from the intended
  GitHub App;
- the compatibility context fails when the real job fails and succeeds only when it succeeds;
- a protected test PR cannot merge while `verify` is pending or failing and can merge after it
  succeeds; and
- `C-001` reaches a terminal disposition with reproducible settings and PR evidence.

## What Lane B did instead

Did not edit the workflow, repository settings, or Lane A governance files. Recorded the defects
and stopped at the lane boundary.

---

> **Sprint boundary, 2026-08-24 (`D-103`): Lane B is now `Active` and Lane A is `Eligible`.** Lane A can still **write in `docs/handoff/`** — that carve-out exists so acknowledgement is never blocked — but it **cannot commit anywhere else**, so anything here needing a change outside `docs/handoff/` waits for Lane A's next `Active` turn. **A blocking entry stops that item, not the lane** (`D-101`).
