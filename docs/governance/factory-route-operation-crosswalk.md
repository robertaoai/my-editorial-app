# Factory Route/Operation Crosswalk

**Version:** v0.1 — **draft, route/operation masters verified; route-operation join blocked on a Chief Editor decision**
**Date:** 2026-08-31
**Origin:** `docs/handoff/B-068-*.md` `F4`, following `F3` (`raci-involvement-matrix.md` §8's role catalog)
**Status:** Reconciles, does not import, the two attached CSVs (`B-068` §0 guardrail — the CSVs are
business evidence, not an adopted RACI). SHA-256 hashes recorded in `B-068`'s Evidence line.

---

## 1. Route master (Sheet 1 — "Newsroom Workflow Stage Phase Gates")

Verified directly against the CSV: **every one of the seven rows carries exactly one `R` and one
`A`, no blank cells, and no ambiguity.** Unlike Sheet 2, Sheet 1 needed no disposition decisions.

| `route_id` | Source label | Route class | `R` | `A` | Other involvement |
|---|---|---|---|---|---|
| `ROUTE-PROD-1` | Tier 1: Low-Impact Daily News Production | Production, Tier 1 | `ROLE-REPORTER` | `ROLE-DESK-EDITOR` | `I`: Investigator, Journalist, Senior Journalist, Chief Journalist, Editor-in-Chief, GRC |
| `ROUTE-PROD-2` | Tier 2: Mid-Impact Enterprise & Feature Writing | Production, Tier 2 | `ROLE-JOURNALIST` | `ROLE-CHIEF-EDITORIAL-DESK` | `C`: Senior Journalist. `I`: Reporter, Investigator, Desk Editor, Editor-in-Chief, GRC |
| `ROUTE-PROD-3` | Tier 3: High-Impact Investigative Exploits | Production, Tier 3 | `ROLE-INVESTIGATOR` | `ROLE-CHIEF-EDITORIAL-DESK` | `C`: Senior Journalist. `I`: Reporter, Journalist, Desk Editor, Editor-in-Chief, GRC |
| `ROUTE-FALLOUT-1` | Tier 1 Fallout: Low-Risk Copy & Fact Editing | Fallout, Tier 1 | `ROLE-SENIOR-JOURNALIST` | `ROLE-CHIEF-EDITOR` | `C`: Desk Editor. `I`: Reporter, Investigator, Journalist, Chief Journalist, GRC |
| `ROUTE-FALLOUT-2` | Tier 2 Fallout: Mid-Risk Retractions & Corrections | Fallout, Tier 2 | `ROLE-CHIEF-EDITORIAL-DESK` | `ROLE-CHIEF-EDITOR` | `C`: Desk Editor. `I`: Reporter, Investigator, Journalist, Senior Journalist, GRC |
| `ROUTE-FALLOUT-3` | Tier 3 Fallout: High-Risk Legal & Defamation Crises | Fallout, Tier 3 | `ROLE-CHIEF-EDITORIAL-DESK` | `ROLE-EXTERNAL-GRC` | `C`: Editor-in-Chief. `I`: Reporter, Investigator, Journalist, Senior Journalist, Desk Editor |
| `ROUTE-GRC` | Regulatory GRC Compliance & Licensing | Regulatory | `ROLE-CHIEF-EDITOR` | `ROLE-EXTERNAL-GRC` | `C`: Desk Editor. `I`: Reporter, Investigator, Journalist, Senior Journalist, Chief Journalist |

**Evidence status: `VERIFIED`** for all seven rows — role names substituted 1:1 from
`raci-involvement-matrix.md` §8's catalog (`Chief Journalist` → `ROLE-CHIEF-EDITORIAL-DESK`,
`Editor-in-Chief` → `ROLE-CHIEF-EDITOR`), no cell inferred or altered.

## 2. Operation master (Sheet 2 — "Newsroom Workflow Task Operations")

| `operation_id` | Source label | `atomic`/`milestone`/`control_point` | `R` | `A` | Evidence status |
|---|---|---|---|---|---|
| `OP-PITCH` | Daily Story Pitch & Beat Tracking | `UNVERIFIED` | **Two `R`**: Reporter, Journalist | `ROLE-DESK-EDITOR` | `UNVERIFIED` — multiple `R`, no milestone marker in source |
| `OP-RESEARCH` | Deep Fact-Checking & OSINT Research | `UNVERIFIED` | **Two `R`**: Investigator, Senior Journalist | `ROLE-DESK-EDITOR` | `UNVERIFIED` — multiple `R`, no milestone marker in source |
| `OP-DRAFT` | Drafting Standard News Copy | `UNVERIFIED` | **Two `R`**: Reporter, Journalist | **none** | `UNVERIFIED` — multiple `R` and no `A` at all in source |
| `OP-COMPLEX-SERIES` | Executing Complex Investigative Series | `milestone` (source-marked "Mult task R") | **Three `R`**: Investigator, Senior Journalist, Chief Journalist | `ROLE-CHIEF-EDITOR` | Milestone shape known; atomic children not yet decomposed |
| `OP-COPY-EDIT` | First-Line Copy Editing & Formatting | `atomic` | `ROLE-CHIEF-EDITORIAL-DESK` (one `R`) | `ROLE-DESK-EDITOR` | `VERIFIED` — single `R`, single `A`, no ambiguity |
| `OP-LEGAL-RISK` | Legal, Ethical & Risk Review | `milestone` (source-marked "Multi Task R") | **Two `R`**: Senior Journalist, Chief Journalist | `ROLE-CHIEF-EDITOR` | Milestone shape known; atomic children not yet decomposed |
| `OP-FINAL-SIGNOFF` | Final Publication Sign-Off | `control_point` (candidate) | **none** | `ROLE-DESK-EDITOR` | `UNVERIFIED` — no `R` in source at all |
| `OP-CRISIS` | Crisis Management & Retractions | `atomic` | `ROLE-CHIEF-EDITOR` (one `R`) | `ROLE-EXTERNAL-GRC` | `VERIFIED` — single `R`, single `A`, no ambiguity |

**Two of eight operations (`OP-COPY-EDIT`, `OP-CRISIS`) are clean** — single `R`, single `A`, no
disposition needed. **Six need a Chief Editor decision before `F4` can close them** — see §4.

## 3. Route-operation join — genuinely blocked, not guessed

**No column in either CSV states which operations apply to which routes.** `B-068` §0's guardrail
("do not infer... without a governed rule") and §11.5's explicit instruction ("title matching is
prohibited") both forbid inferring this from the operation/route names, however suggestive —
"Legal, Ethical & Risk Review" *reading* like it belongs to `ROUTE-FALLOUT-3`/`ROUTE-GRC` is not
evidence, and asserting it as fact would be exactly the guessed parentage `F4` exists to prevent.

**This crosswalk's join table is intentionally empty pending the Chief Editor's routing decision**
(§4). Filling it with a plausible-looking guess would make `F4` *look* closed while smuggling an
unverified fact into a governed document — the same failure class `B-068`'s own guardrails were
written to block.

| `route_id` | `operation_id` | Applicability | Provenance |
|---|---|---|---|
| *(empty — see §4)* | | | |

## 4. Chief Editor decisions required to close `F4`

| # | Decision needed | Why it can't be derived |
|---|---|---|
| 1 | Which route(s) does each of the 8 operations apply to? (a many-to-many join, not one parent each) | No source column states it; route/operation titles are suggestive, not authoritative |
| 2 | `OP-PITCH`, `OP-RESEARCH`: correct each to one atomic `R`, or mark as an undocumented milestone and decompose? | Source has two `R` with no milestone marker — genuinely ambiguous, not a normalization the CSV settles |
| 3 | `OP-DRAFT`: supply an explicit local `A`, or authorize inheriting a route `A` once §3's join exists? | Source has no `A` at all; inheritance requires the join this table can't build without decision 1 |
| 4 | `OP-COMPLEX-SERIES`, `OP-LEGAL-RISK`: decompose into which atomic child operations? | Source marks them milestones but does not enumerate the child tasks |
| 5 | `OP-FINAL-SIGNOFF`: name its executor/preparer, or authorize a documented `R = A` exception? | Source has no `R` at all; this may be a deliberate control-point shape (system/process check, not a role), not a data gap |
| 6 | Blank `Gov Institution (GRC)` cells on Sheet 2 (every row except `OP-CRISIS`): `not_applicable`, `unknown`, or genuinely omitted? | `B-068` §11.5 forbids backfilling any blank as `I`; the source gives no convention |

Until these are answered, `F4`'s success criteria (`B-068` §11.5: "every operation has one canonical
definition, one or more explicit applicable routes... no unresolved cell presented as fact") are not
met. §1 and §2's masters may be relied on now — they are fully verified. §3 may not.
