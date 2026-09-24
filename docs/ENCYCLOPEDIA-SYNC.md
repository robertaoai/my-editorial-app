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
| **01 · Four-eyes independence** (line separation) | `docs/Modular_PRD.md` §6.5 (`SEC-01`/`SEC-06`), §5 (`FR-05`); `docs/fn-specs/FN-GATES-01-05.md` §3.4; `docs/governance/raci-involvement-matrix.md` §2, §4, §8 (role catalog); `docs/source/blueprint.md` §2.3, §4.7; `docs/source/business-case.md` (Addendum §6.1 equivalent); `supabase/migrations/0002_s1_editorial_schema.sql` (`allowed_transitions`, `enforce_article_state_transition`, `workflow_transitions.line_separation_status`) | `D-97`, `D-111`, `D-112`, `D-163`, `D-164`, `D-165`, `D-166`, `D-232` follow-on, `D-238` | **Re-verified 2026-09-24 at `ec8164f` (`D-256`, v15):** hosted text read in full; `Update required` — the three-way Chief Editor identity split, `business:T5`/`transition:T5`, and the `DEP-05` overstatement in the "Now" box are annotated in a dated note. The flags below are history, closed by this pass. `556a9d5` — **flagged 2026-09-16: `D-232`'s Sheet 1 resolution adds a route-accountability (Desk Editor `A`) fact adjacent to this entry's role-separation topic, in `FN-GATES` §3.0 (new, next to the cited §3.4) — not yet reviewed against this entry's exact text. Flagged again 2026-09-17 (`D-238`): §8's role catalog now splits `ROLE-CHIEF-EDITOR` (access; renamed `ACCESS-ROLE-CHIEF-EDITOR`, `D-251`) from `EDITORIAL-ROLE-EDITOR-IN-CHIEF` (human editorial) and `AGENT-T5-EDITOR-IN-CHIEF` (virtual) — if this entry names "Chief Editor" as a Line 2/`T5`/`T6` actor anywhere, check which identity it now means** |
| **02 · Resolved vs. ratified** | `docs/source/v1-build-readiness-addendum.md` §11, §2.4 (Ratification Log); `docs/Modular_PRD.md` §0.2, §0.4, §12 | — (none landed since v12) | `f7b3aea` |
| **03 · Newsworthiness vs. trend score vs. editorial priority** | `docs/source/blueprint.md` §11.3; `docs/governance/media-industry-sop-fallback-implementation-plan.md` §6.1; `docs/Modular_PRD.md` (`NG-10`, `CR-06`/`FB-06` disposition, §2.5.1) | `D-148` | `f7b3aea` |
| **04 · Article state vs. publication status** | `docs/source/blueprint.md` §4.5; `docs/fn-specs/FN-PUBLICATION-09-10-13.md` §3.3.2; `docs/fn-specs/FN-POC-ENGAGEMENT-01-13.md` §4.4; `docs/specs/SPECS-PUBLICATION.md` §3 | `D-114`, `D-243` | `f7b3aea` — **flagged 2026-09-20 (`D-243`):** V1 adds a LinkedIn target-level `ManualReady` publication event that is explicitly *not* an article state, and defers `Published` promotion (`FR-10`/`T11`) to a V2 target. This entry's article-state versus publication-status topic is directly touched — **not yet reviewed against the hosted text, not republished** |
| **05 · The independent-assurance cluster** (successor review, Line 3, `OD4`) | `docs/governance/raci-involvement-matrix.md` §2.1, §6.1, changelog v1.1; `docs/governance/poc-feedback-approval-crosswalk.md` §7.4; `docs/Modular_PRD.md` §4 (Line 3 persona), §5 (`FR-11`), §6.5 (`SEC-06`), §9 (`US-11`), §10 (`AC-17`); `docs/governance/requirements-traceability-map.md` §6.3/§6.4 (`T1`–`T5` assurance-boundary reaffirmation, `T5` ranking reframe); `docs/journal/2026-08-18-storyboard-business-and-digital-twin.md` Panel A9 | `D-57`, `D-166`, `D-167`, `D-168`, `D-234`, `D-239` | **Re-verified 2026-09-24 at `ec8164f` (`D-256`, v15):** hosted text read in full; `Update required` — the `D-239` ranking reframe, the non-V1 `T6→T5` metric, and partial `CR-19` / non-enforcing display are annotated in a dated note; the no-Line-3 conclusion is unchanged. The flags below are history, closed by this pass. `556a9d5` — **stale: `D-168` affects this entry, not yet republished. Flagged again 2026-09-17 (`D-234`/`B117-R51`): the `T1`–`T5` overlay reaffirms the same no-Line-3 absence at two new locations. Flagged a third time 2026-09-17 (`D-239`): `T5` itself is reframed from "accountability/readiness judgment" to "newsworthiness ranking and routing" — if this entry describes `T5`'s function, that description is now stale even though the no-Line-3-assurance conclusion is unchanged. Flagged a fourth time 2026-09-20 (`D-244`): Entry 05 joins Entries 01/06 in `V1-SM05`'s review set; the display of Line/RACI context is non-enforcing — not yet reviewed against the hosted text** |
| **06 · `CR-14`** (Reporter-gate tagging) | `docs/PRD.md:23` (frozen); `docs/source/blueprint.md` §2.3; `docs/fn-specs/FN-GATES-01-05.md` §3.1, §6, §7; `docs/Modular_PRD.md` §2.5.1; `docs/governance/requirements-traceability-map.md` §4, §7 | `D-150` (`P1`–`P3` applied), `D-232` follow-on | **Re-verified 2026-09-24 at `ec8164f` (`D-256`, v15):** hosted text read in full; `Update required` — the `D-194`/`D-197` manual trigger package, the pre-`T1` sequence, and the `V1-SM05` slice boundary are annotated in a dated note. The flags below are history, closed by this pass. `f7b3aea` — **flagged 2026-09-16: `D-232`'s Sheet 1 resolution adds a new `FN-GATES` §3.0 precondition (manual record → `EW` → route classification, before this entry's cited §3.1 T1 intake) and a `requirements-traceability-map.md` §6.1 row-level journey (not the same §4/§7 sections cited here) — not yet reviewed against this entry's exact text. Noted 2026-09-17 (`D-238`/`D-239`): the source-RACI/role-identity/`T5`-ranking changes land in `FN-GATES` §3.0a/§4.2 and traceability §6.3/§6.4, not this entry's cited §3.1/§4/§7/§6 — lower relevance than Entries 01/05, listed for completeness** |

**Flags and accepted deferral — 2026-09-21 (Entries 01/05/06 discharged 2026-09-24 by `D-256`; Entry 04 still deferred) (`D-247`–`D-251`, Judge statement C).** The hosted artifact was **not**
read, compared or republished by this pass, and the ledger above is **not** publication evidence. Each affected
entry keeps its existing flag and gains the new trigger below; the unfinished hosted comparison is **explicitly
deferred**, entry by entry, rather than left implicit:

| Entry | New trigger | Hosted comparison |
|---|---|---|
| **01** | `D-251`: the natural-person access role is now `ACCESS-ROLE-CHIEF-EDITOR`; `ROLE-*` is reserved for virtual-agent identities. If the entry names "Chief Editor" as a Line 2/`T5`/`T6` actor, check which identity it means | **Deferred** — packet `V1-SM05` (`DOR-R6`); return condition: a hosted read and a recorded comparison, or the Judge's explicit acceptance naming this entry; owner Lane A with the Judge |
| **04** | `D-243`/`D-250`: `ManualReady` is a publication event, never an article state; `Published` promotion is a V2 target | **Deferred** — packet `V1-SM06` (Entry 04 DoR box); return condition and owner as Entry 01 |
| **05** | `D-247`/`D-249`: V1 satisfies `CR-19` only partially; `V1-SM05` claims no `transition:T*` execution | **Deferred** — packet `V1-SM05` (`DOR-R6`); return condition and owner as Entry 01 |
| **06** | `D-249`: `V1-SM05` is a limited evidence slice; its review set includes this entry | **Deferred** — packet `V1-SM05` (`DOR-R6`); return condition and owner as Entry 01 |

**Findings section (`AF-01`…`AF-11`) and the Judge decision guide are reviewed opportunistically**
alongside whichever entry they're attached to — they are not separately tracked here. `AF-01` was
resolved and reclassified in the same v13 pass that updated Entry 01, from the same trigger
(`D-164`'s discovery about `0002`'s trigger).

## Version history

| Encyclopedia rev | What changed | Verified at |
|---|---|---|
| v12 | Baseline — all 6 entries, `CR-14` ruled | `f7b3aea` |
| v13 | Entry 01 + `AF-01` updated against `D-163` (`SEC-01` re-sourced to RACI, `SEC-06` split out) and `D-164` (T5 trigger already built in `0002`) | `026ceee` |
| v14 | Judge-approved. Entry 01's rule bullet corrected (`D-165`) — the register's own re-sourcing rationale ("R never equals A at a Line boundary") contradicted its cited RACI source; restated as successor-node separation, `R(T4) ≠ R(T5)`, with `R = A` at `T5` itself the expected shape. `SEC-06` re-anchored to the 2024 GIAS, not a non-existent "2026 Statement of Position" (`D-166`). Entry 05 corrected: Line 3's build status is `OD4` branch ②, not `OD3`; `Q2` already answered by `D-57` — v1 has no independent assurance, `FR-11` not built (`D-167`) | `556a9d5` |
| v15 | `V1-SM05` `DOR-R6` review (`D-256`). Entries 01, 05 and 06 compared in full against current sources, each `Update required`; each gains one dated note and no v14 text is rewritten. Entries 02–04, findings and the Judge guide not compared this pass, unchanged. Entry 04 stays deferred to `V1-SM06` | `ec8164f` |
