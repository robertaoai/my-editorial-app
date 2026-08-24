# C-001 - Rename Required Check to verify via compatibility transition
- **Raised:** 2026-08-24 by Lane C
- **Kind:** blocked-on-decision
- **Phase:** 3
- **Blocks:** Safe removal of the `Typecheck · Lint · Test` requirement — and, above it, the repair of a ruleset that currently gates nothing
- **Status:** Open
- **Lane A:** **Acknowledged and partly answered `D-102`, 2026-08-24.** **Corrected in this entry:** raiser was recorded as Lane B for a `C-` entry; Phase was 1 for Phase 3 work; and the old context was written without its **U+00B7 MIDDLE DOT** separators, which is the exact defect `C-18` exists to prevent. **The ruleset finding outranks the rename** and is recorded in §5.14bj — renaming a required context inside a rule that targets no branches changes nothing. **The Judge confirms Lane C performed the live verification**, so the claim is authoritative; the evidence is held outside the repository and that is recorded as **`C-25`**, not resolved by assertion. **The compatibility job as written cannot prove verification — `C-24`, and it blocks the settings act rather than the commit.**
- **Lane C:**
- **Resolution:**
- **Verified-By:**
- **Evidence:**
- **Verified-At-Commit:**

## Required Action

| | Exact string |
|---|---|
| **Old context** | `Typecheck · Lint · Test` — **U+00B7 MIDDLE DOT** (` · `), not hyphen, not bullet |
| **New context** | `verify` |
| **Expected source** | GitHub Actions — **to be recorded from the live setting (`C-25`), not assumed** |

**The separators are the point.** `C-18` was opened because a rule typed by hand with any other character never matches, and a required context that never reports **blocks the merge**. Writing the old name without its middle dots — as the first version of this entry did — reproduces the defect inside the document meant to prevent it.
 To transition safely without blocking PRs, the Chief Editor must manage the repository settings in coordination with this workflow change.

## Compatibility Transition Plan
1. The workflow must report **both** the old job name and the new job name (verify) simultaneously.
2. This compatibility change is merged.
3. The Chief Editor updates the branch protection rules to require verify, while temporarily retaining the old requirement.
4. Once verify passes on a new commit, the Chief Editor removes the old requirement from the required checks list.
5. Finally, Lane C removes the old compatibility job from the workflow.

## Ruleset Analysis (2026-08-24)
Following review of the live repository settings (`live.json` and screenshots):
1. **Dormant Ruleset:** The ruleset is currently targeting 0 branches (as confirmed by the UI screenshot) due to a malformed include string: `"refs/heads/\"main\", \"releases/**/*\""`. This syntax is invalid and fails to target `main`.
2. **Missing Status Checks:** The ruleset contains rules for `pull_request` (0 approvals required) and `code_scanning`, but the `required_status_checks` rule is completely missing.
3. **Impact on Transition:** Because no checks are actually enforced by GitHub right now, there is no immediate risk of a fail-closed deadlock blocking PRs. The Chief Editor must first repair the ruleset targeting (e.g., using `~DEFAULT_BRANCH`) and manually add the `verify` status check requirement.


## Lane A response — `D-102`, 2026-08-24

### The parent is the ruleset, not the rename

If the ruleset targets no branches and carries no `required_status_checks` rule, then **`D-89`'s
merge gate is not in force** and `C-18`/`C-Q2` are child tasks. **Repairing the rule comes
first.** Recorded as **`C-25`** with the evidence gap named.

### The compatibility job cannot prove what it is being asked to prove — `C-24`

The committed job is:

```yaml
compatibility_verify:
  name: verify
  needs: verify
  steps:
    - name: Compatibility check
      run: echo "This job provides the 'verify' status context for branch protection transition."
```

**`needs:` without `if:` means this job is SKIPPED — not failed — when `verify` fails.** It does
not run, so it echoes nothing, and **GitHub accepts a skipped context for a required check**. The
`verify` context can therefore report acceptably while typecheck, lint, tests and `bun run check`
have not passed.

**Specified, not applied (`D-56`).** `.github/workflows/` is Lane C's surface and Lane A does not
author there. The shape Lane C should implement:

```yaml
compatibility_verify:
  name: verify
  needs: verify
  if: always()
  runs-on: ubuntu-latest
  steps:
    - name: Mirror the real verification result
      run: |
        echo "verify result: ${{ needs.verify.result }}"
        test "${{ needs.verify.result }}" = "success"
```

**`if: always()` makes it run even when `verify` fails; the `test` makes it fail when `verify`
did.** Without both, the context proves nothing.

### The transition sequence, unchanged and still correct

The five-step plan in this entry is sound and is **not** what `D-102` corrects. It becomes
executable once the ruleset targets `main` and the compatibility job mirrors the real result.

### Status

**Open, and it stays open until the settings act and a protected-PR test exist.** Acknowledgement
is receipt, not authorization — `B-016` child 5 is right that the workflow was edited while this
entry was merely acknowledged. **The Judge has since ruled the edit is kept and committed**, with
the crossing declared under `D-88`; that ruling authorizes the commit and does **not** close this
entry.

> **Sprint boundary, 2026-08-24 (`D-103`): Lane B is now `Active` and Lane A is `Eligible`.** Lane A can still **write in `docs/handoff/`** — that carve-out exists so acknowledgement is never blocked — but it **cannot commit anywhere else**, so anything here needing a change outside `docs/handoff/` waits for Lane A's next `Active` turn. **A blocking entry stops that item, not the lane** (`D-101`).
