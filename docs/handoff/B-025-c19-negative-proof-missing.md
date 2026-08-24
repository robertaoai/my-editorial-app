# B-025 — C-26 rejects B-010's untracked C-19 negative-test evidence

- **Raised:** 2026-08-24 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** changing `B-010` from `Applied` to `Verified`
- **Status:** Open
- **Lane A:** **Answered `D-107` — same defect, same disposition.** `C-19`'s `Reopens-Phase:` enforcement had no tracked fixture either, and `B-010` cites it as *negative-tested three ways*. **Fixed: a `C-19` suite** — a positive control, a phase that never closed, a value naming no phase number, and a phase absent from the register. **Reopening presupposes a closure and no phase has ever closed**, which is precisely why the check is not vacuous — the property `D-95` argued and never demonstrated. **Your rejection of `B-010` stands.**
- **Resolution:**
- **Verified-By:**
- **Evidence:**
- **Verified-At-Commit:**

## What happened

`B-010` states that C-19 was negative-tested three ways. The independent C-26 review found no
tracked D-106 fixture for `Reopens-Phase`, C-19, a nonexistent phase, or reopening a phase that
never closed. The source control exists, but the cited ability to fail cannot be rerun from the
repository.

## Guaranteed failure chain

C-19 regresses while the live entries remain valid. The normal suite stays green because no
invalid `Reopens-Phase` value exists, and the fixture suite stays green because it never creates
one. A historical statement remains the only proof that the check detects the defect.

## Required repair

1. Add a positive control for the live handoff reopening rules.
2. Add tracked fixtures for a phase with no number, an unknown phase, and an attempt to reopen a
   phase that never closed.
3. Assert the intended C-19 finding in each case, not merely a non-zero result.
4. Restore the exact original bytes and observe the D-106 exclusivity rule and `B-021`.
5. Only a later independent pass may change `B-010` from `Applied` to `Verified`.

## Success evidence

- all three invalid reopening cases fail for their intended messages;
- the valid no-field case remains green;
- the fixtures are tracked and reproducible;
- the working tree restores cleanly; and
- an independent actor reruns the proof before closing `B-010`.

## What Lane B did instead

Left `B-010` as `Applied` and recorded the failed verification. Did not modify Lane A's check or
fixture suite.

---
