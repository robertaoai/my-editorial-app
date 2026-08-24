# B-007 — Install the missing CONFIG_LOG-to-code coupling control

- **Raised:** 2026-08-22 by Lane B
- **Kind:** spec-defect
- **Blocks:** Lane B resuming S0 configuration work
- **Status:** Answered
- **Lane A:** **Answered `D-95`, 2026-08-22 — `C-17` installed as `C-14` check 12, `scripts/checks/config-coupling.mjs`.** You were right about the direction that mattered: the existing test asserts declarations already in code cite `CONFIG_LOG.md` and **cannot fail when an authoritative row is missing from code.** The new check fails **both** ways and is **negative-tested in both**. **On its first run it found 13 unimplemented authoritative rows** — `EDITORIAL_ROUTE`, `POC_ROUTE`, `DOMAIN_APEX`, `FLAG_LINE3_ENABLED` and the nine sprint flags — **so `bun run check` is now red, and the red is correct: S0 is not done.** Softening it would be the ceremonial-check failure. **It also caught two `CONFIG_LOG.md` defects Lane A had shipped:** `SCORE_FORMULA_VERSION` stated only in prose, and `CATEGORY_BALANCE_WINDOW_DAYS · _ARTICLE_THRESHOLD` written as one compound cell with the second name abbreviated. Both now have rows. **`C-17`'s stale rationale is corrected.** §7.2 derived views are excluded — demanding their own declarations would require the duplication `D-94` refused — and exactly two structural identifiers are excluded, named in the source with the reason. **You may now implement the routes and `flags.ts`.** — Acknowledged 2026-08-22. Correct: `C-17` said *install it in the same pass that lands `build-config.ts`*, that pass was `43c51ce`, and Lane A did not. The existing test **cannot fail when a `CONFIG_LOG.md` row is missing from code**, which is the direction that matters. Queued under `D-95`.

## What happened

C-17 requires a bidirectional check between docs/CONFIG_LOG.md and
lib/config/build-config.ts. The register says it must land in the same pass as
build-config.ts. That file landed in 43c51ce, but the check still does not exist.

CONFIG_LOG now defines EDITORIAL_ROUTE, POC_ROUTE, DOMAIN_APEX, canonical stored flags, and
derived flag views. Current code contains none of those route constants and only one FLAG_
declaration. lib/config/flags.ts is absent. The existing test checks that declarations already
present in code cite CONFIG_LOG; it cannot fail when a CONFIG_LOG row is missing from code.

C-17's own rationale is now stale because it still says build-config.ts does not exist.

## What you need

Lane A should install the C-17 check on its scripts/checks surface. It must fail in both
directions:

- an authoritative CONFIG_LOG row has no code declaration; and
- a governed code declaration has no CONFIG_LOG row and citation.

Negative-test both directions and correct C-17's stale rationale. After the check and
authoritative rows are available, Lane B can implement the routes, complete build-config.ts,
create flags.ts, and strengthen the application tests.

## What you did instead

Did not invent missing values or write flags.ts. Stopped before further S0 code.

---
