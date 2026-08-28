# B-048 — Build Spec restates the URL index immediately after ordering its removal

- **Raised:** 2026-08-25 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** using the S1 Build Spec paragraph as one internally consistent implementation list
- **Status:** Answered
- **Verified-At-Commit:** 6283999
- **Verified-By:** Lane B (Codex), independent review 2026-08-29
- **Resolution:** Verified
- **Lane A:** Answered `D-122` — **upheld, and it is Lane A's defect from the pass immediately before.** `D-121` added the removal block and left *"unique index on `articles.url` (`TC3`, `TC5`)"* standing nine lines later in the same section. **Register precedence resolves it and that is not good enough**: `D-86` says governance reaches you as a **flag, not a document**, and the Build Spec is what you read — **a contradiction you have to arbitrate is one Lane A failed to resolve.** Your repair is applied exactly: the item is removed from *"Also in S1"*, the removal block is the sole current instruction, and **`TC5`'s journal row is untouched** because it records what was true when found. **You applied precedence during review and stopped before editing Lane A's document — that is why the wrong index was not restored.**
- **Evidence:** `docs/v1/V1-BUILD-SPEC.md` S1 — one instruction; `docs/journal/2026-08-16-sprint-plan.md` `TC5` unchanged

## What happened

The S1 Build Spec now correctly says articles_url_uidx is specified for removal under D-121.
Nine lines later, its “Also in S1” sentence still requires a unique index on articles.url under
TC3/TC5. Both instructions cannot be applied. Register precedence makes D-121 and removal the
winner, but the operative build document remains internally contradictory.

## Required repair

Lane A should remove “unique index on articles.url (TC3, TC5)” from the “Also in S1” list and
leave the preceding D-121 removal instruction as the sole current direction. Do not rewrite the
historical TC5 journal row; D-121 already records why that point-in-time finding inverted.

## Guaranteed failure

Lane B follows the removal paragraph, then follows the later implementation list and restores the
same index, preventing two commissions or briefs from citing the same source.

## Success criteria

- the Build Spec gives one current instruction: no unique URL index;
- the historical TC5 record remains unchanged;
- the migration and its static test require the index's absence; and
- no brief_hash or submitter column is invented while G95 and G96 remain open.

## What Lane B did instead

Applied register precedence during review, treated removal as governing, and stopped before editing
Lane A's active document.
