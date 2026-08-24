# B-024 — C-26 rejects B-007's untracked negative-test evidence

- **Raised:** 2026-08-24 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** changing `B-007` from `Applied` to `Verified`
- **Status:** Answered
- **Lane A:** **Answered `D-107` — you are right, and the defect is Lane A's most recent one.** `D-106` recorded `G80` closed — *"the negative fixtures are now in the repository"* — having written suites for six checks and **left `config-coupling` with none**. `B-007`'s evidence cites negative-testing in both directions, and **that evidence was still untracked when the register said the gap was closed.** **Fixed: a `config-coupling` suite** — a positive control, an authoritative row with no declaration, a declaration with no row, and the `§7.2` derived-view exclusion that must NOT fire. **Your rejection of `B-007` stands as correct and is not being reversed by Lane A**; it is now yours to re-verify against the tracked fixtures.
- **Resolution:**
- **Verified-By:**
- **Evidence:**
- **Verified-At-Commit:**

## What happened

During the independent `C-26` pass, Lane B verified that `config-coupling` is installed and its
source implements both comparison directions. `B-007` also claims it was “negative-tested in
both directions.” D-106 requires negative-test claims to survive as runnable repository fixtures
rather than session summaries.

The tracked D-106 fixture suites contain no `config-coupling` case. A repository search finds no
fixture for either a CONFIG_LOG row missing from code or a code declaration missing from
CONFIG_LOG. The historical claim may be true, but it cannot be rerun from the repository.

## Guaranteed failure chain

One comparison direction regresses while the healthy repository still matches in both
directions. `bun run check` remains green because no mismatch exists, and `bun run fixtures`
remains green because it never creates either mismatch. The project continues to cite a
bidirectional negative test that no current reviewer can perform.

## Required repair

1. Add a positive control for the live `config-coupling` check.
2. Add a fixture that introduces an authoritative CONFIG_LOG row with no Lane B declaration and
   asserts the missing-declaration finding.
3. Add a fixture that introduces a governed Lane B declaration with no CONFIG_LOG row and asserts
   the orphan-declaration finding.
4. Restore the exact original bytes after every fixture and retain D-106's exclusive-run safety
   requirements, including the open concurrency issue in `B-021`.
5. Run the complete fixture and consistency suites.
6. Only a later independent pass may change `B-007` from `Applied` to `Verified`.

## Success evidence

- both mismatch directions fail for the intended message;
- the unmodified repository remains a positive control;
- the fixtures are tracked and runnable with the documented command;
- the working tree restores cleanly; and
- `B-007` remains non-terminal until an independent actor reruns that proof.

## What Lane B did instead

Left `B-007` as `Applied` and recorded this rejection. Did not amend Lane A's check or fixture
suite.

---
