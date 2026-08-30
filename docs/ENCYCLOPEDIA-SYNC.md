# `docs/ENCYCLOPEDIA-SYNC.md` — sync ledger for the Editorial Pipeline Encyclopedia

**Written by Lane A, 2026-08-30.**

**The encyclopedia is not in this repository.** It is a Claude Artifact —
[Editorial Pipeline Encyclopedia](https://claude.ai/code/artifact/7a0ae2c6-24f6-494c-ba7f-52c4b5b37d4b),
6 entries + a contradiction audit + a Judge decision guide, extracted from `docs/` per the
`encyclopedia-extractor` skill. **Nothing in `bun run check` can read it or diff it against
`docs/`** — no tool here has access to Claude-hosted artifact content. This file exists to make
staleness *visible* despite that: what each entry depends on, and the commit it was last checked
against.

## How to use this file

1. **When closing a decision** (`D-xxx`), check its `Tier applicability` table against the
   "Depends on" columns below. If a cited file/section or decision changed, note it in that
   decision's own tier table — `Encyclopedia: Entry N affected` or `Encyclopedia: unaffected` —
   the same habit as every other `D-54` propagation row. No separate process; it rides the one
   that already runs on every decision.
2. **When actually updating the artifact**: read it in full first (never trust a summary of it —
   `D-93`'s rule applies here too), update only the flagged entries, bump its own colophon with a
   dated note of exactly what changed and what didn't, republish to the **same URL**, then update
   this ledger's `Last verified at` column to the new HEAD.
3. **A stale row here is not an emergency.** It means the entry hasn't been re-checked since that
   commit — not that it's wrong. Treat it as a queue, the same way `docs-drift` treats graph
   staleness: a signal to re-check, not a build blocker.

## Per-entry citation map

| Entry | Depends on (files/sections) | Depends on (decisions) | Last verified at |
|---|---|---|---|
| **01 · Four-eyes independence** (line separation) | `docs/Modular_PRD.md` §6.5 (`SEC-01`/`SEC-06`), §5 (`FR-05`); `docs/fn-specs/FN-GATES-01-05.md` §3.4; `docs/governance/raci-involvement-matrix.md` §4; `docs/source/blueprint.md` §2.3, §4.7; `docs/source/business-case.md` (Addendum §6.1 equivalent); `supabase/migrations/0002_s1_editorial_schema.sql` (`allowed_transitions`, `enforce_article_state_transition`, `workflow_transitions.line_separation_status`) | `D-97`, `D-111`, `D-112`, `D-163`, `D-164` | `026ceee` |
| **02 · Resolved vs. ratified** | `docs/source/v1-build-readiness-addendum.md` §11, §2.4 (Ratification Log); `docs/Modular_PRD.md` §0.2, §0.4, §12 | — (none landed since v12) | `f7b3aea` |
| **03 · Newsworthiness vs. trend score vs. editorial priority** | `docs/source/blueprint.md` §11.3; `docs/governance/media-industry-sop-fallback-implementation-plan.md` §6.1; `docs/Modular_PRD.md` (`NG-10`, `CR-06`/`FB-06` disposition, §2.5.1) | `D-148` | `f7b3aea` |
| **04 · Article state vs. publication status** | `docs/source/blueprint.md` §4.5; `docs/fn-specs/FN-PUBLICATION-09-10-13.md` §3.3.2; `docs/fn-specs/FN-POC-ENGAGEMENT-01-13.md` §4.4; `docs/specs/SPECS-PUBLICATION.md` §3 | `D-114` | `f7b3aea` |
| **05 · The independent-assurance cluster** (successor review, Line 3, `OD4`) | `docs/governance/raci-involvement-matrix.md` §2.1, §6.1, changelog v1.1; `docs/governance/poc-feedback-approval-crosswalk.md` §7.4 | — | `f7b3aea` |
| **06 · `CR-14`** (Reporter-gate tagging) | `docs/PRD.md:23` (frozen); `docs/source/blueprint.md` §2.3; `docs/fn-specs/FN-GATES-01-05.md` §3.1, §6, §7; `docs/Modular_PRD.md` §2.5.1; `docs/governance/requirements-traceability-map.md` §4, §7 | `D-150` (`P1`–`P3` applied) | `f7b3aea` |

**Findings section (`AF-01`…`AF-11`) and the Judge decision guide are reviewed opportunistically**
alongside whichever entry they're attached to — they are not separately tracked here. `AF-01` was
resolved and reclassified in the same v13 pass that updated Entry 01, from the same trigger
(`D-164`'s discovery about `0002`'s trigger).

## Version history

| Encyclopedia rev | What changed | Verified at |
|---|---|---|
| v12 | Baseline — all 6 entries, `CR-14` ruled | `f7b3aea` |
| v13 | Entry 01 + `AF-01` updated against `D-163` (`SEC-01` re-sourced to RACI, `SEC-06` split out) and `D-164` (T5 trigger already built in `0002`) | `026ceee` |
