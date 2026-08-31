# Factory Route/Operation Crosswalk

**Version:** v0.2 — **draft. Route master source-verified; operation master captured with 2 of 8 rows
verified; the route-operation join is empty for all 8 operations, pending Chief Editor decisions**
**Date:** 2026-08-31, corrected 2026-08-31 (`D-174`, Lane B's `B068-R17`–`R20`)
**Origin:** `docs/handoff/B-068-*.md` `F4`, following `F3` (`raci-involvement-matrix.md` §8's role catalog)
**Status:** Reconciles, does not import, the two attached CSVs (`B-068` §0 guardrail — the CSVs are
business evidence, not an adopted RACI). SHA-256 hashes recorded in `B-068`'s Evidence line.

> **Corrected 2026-08-31 (`D-174`).** v0.1's heading read "route/operation masters verified" and its
> §2 said only "six [operations] need a Chief Editor decision" — both overstated (`B068-R20`): the
> operation master is mostly `UNVERIFIED`, and **all eight** operations still need a route disposition,
> not only the six with row-shape issues. v0.1 also asserted a `raci_scope` field this file didn't
> contain (`B068-R17`) and represented the external regulator as an internal `ROLE-EXTERNAL-GRC`,
> colliding with `Modular_PRD.md` §2.3.1's `EXT-GRC` (`B068-R18`). All four corrected below.

---

## 0. Assignment shape (`raci_scope`, Parent A — documentary normalization, not a business decision)

Every RACI fact in this document carries these fields, so `A`/`R`/`C`/`I` cannot be confused across
scopes or silently re-aliased:

| Field | Rule |
|---|---|
| `raci_scope` | `factory_route` (§1) or `factory_operation` (§2). `system_transition` (`T1`–`T11`) is governed elsewhere (`raci-involvement-matrix.md` §3) and never appears in this document |
| `subject_id` | The `ROUTE-*` or `OP-*` row this fact is about |
| `involvement_code` | `R`, `A`, `C`, `I`, or `EA`. `EA` is never stored as `A` |
| `party_id` | A canonical `ROLE-*` (`raci-involvement-matrix.md` §8) for an internal actor, or `EXT-GRC` (`Modular_PRD.md` §2.3.1) for the external regulator. Never a display name |
| `source_code` | The original CSV mark for that cell (`R`/`A`/`C`/`I`), retained for provenance — it does not change the normalized meaning above |
| `verification_status` | `VERIFIED` (unambiguous in source), `UNVERIFIED` (source is genuinely ambiguous — see §2), or `DECIDED` (Chief Editor supplied it) |

## 1. Route master (Sheet 1 — "Newsroom Workflow Stage Phase Gates")

`raci_scope = factory_route` for every row below. Verified directly against the CSV: **every one of
the seven rows carries exactly one `R` and one `A`, no blank cells, and no ambiguity.**

| `route_id` | Source label | Route class | `R` (`party_id`) | `A` (`party_id`) | `C` | `I` | `verification_status` |
|---|---|---|---|---|---|---|---|
| `ROUTE-PROD-1` | Tier 1: Low-Impact Daily News Production | Production, Tier 1 | `ROLE-REPORTER` | `ROLE-DESK-EDITOR` | — | `ROLE-INVESTIGATOR`, `ROLE-JOURNALIST`, `ROLE-SENIOR-JOURNALIST`, `ROLE-CHIEF-EDITORIAL-DESK`, `ROLE-CHIEF-EDITOR`, `EXT-GRC` | `VERIFIED` |
| `ROUTE-PROD-2` | Tier 2: Mid-Impact Enterprise & Feature Writing | Production, Tier 2 | `ROLE-JOURNALIST` | `ROLE-CHIEF-EDITORIAL-DESK` | `ROLE-SENIOR-JOURNALIST` | `ROLE-REPORTER`, `ROLE-INVESTIGATOR`, `ROLE-DESK-EDITOR`, `ROLE-CHIEF-EDITOR`, `EXT-GRC` | `VERIFIED` |
| `ROUTE-PROD-3` | Tier 3: High-Impact Investigative Exploits | Production, Tier 3 | `ROLE-INVESTIGATOR` | `ROLE-CHIEF-EDITORIAL-DESK` | `ROLE-SENIOR-JOURNALIST` | `ROLE-REPORTER`, `ROLE-JOURNALIST`, `ROLE-DESK-EDITOR`, `ROLE-CHIEF-EDITOR`, `EXT-GRC` | `VERIFIED` |
| `ROUTE-FALLOUT-1` | Tier 1 Fallout: Low-Risk Copy & Fact Editing | Fallout, Tier 1 | `ROLE-SENIOR-JOURNALIST` | `ROLE-CHIEF-EDITOR` | `ROLE-DESK-EDITOR` | `ROLE-REPORTER`, `ROLE-INVESTIGATOR`, `ROLE-JOURNALIST`, `ROLE-CHIEF-EDITORIAL-DESK`, `EXT-GRC` | `VERIFIED` |
| `ROUTE-FALLOUT-2` | Tier 2 Fallout: Mid-Risk Retractions & Corrections | Fallout, Tier 2 | `ROLE-CHIEF-EDITORIAL-DESK` | `ROLE-CHIEF-EDITOR` | `ROLE-DESK-EDITOR` | `ROLE-REPORTER`, `ROLE-INVESTIGATOR`, `ROLE-JOURNALIST`, `ROLE-SENIOR-JOURNALIST`, `EXT-GRC` | `VERIFIED` |
| `ROUTE-FALLOUT-3` | Tier 3 Fallout: High-Risk Legal & Defamation Crises | Fallout, Tier 3 | `ROLE-CHIEF-EDITORIAL-DESK` | **`EXT-GRC`** (`involvement_code = EA`; `source_code = A`) | `ROLE-CHIEF-EDITOR` | `ROLE-REPORTER`, `ROLE-INVESTIGATOR`, `ROLE-JOURNALIST`, `ROLE-SENIOR-JOURNALIST`, `ROLE-DESK-EDITOR` | `VERIFIED` |
| `ROUTE-GRC` | Regulatory GRC Compliance & Licensing | Regulatory | `ROLE-CHIEF-EDITOR` | **`EXT-GRC`** (`involvement_code = EA`; `source_code = A`) | `ROLE-DESK-EDITOR` | `ROLE-REPORTER`, `ROLE-INVESTIGATOR`, `ROLE-JOURNALIST`, `ROLE-SENIOR-JOURNALIST`, `ROLE-CHIEF-EDITORIAL-DESK` | `VERIFIED` |

**`ROUTE-FALLOUT-3` and `ROUTE-GRC`'s `A` is corrected from `ROLE-EXTERNAL-GRC` to `EXT-GRC` with
`involvement_code = EA`** (`D-174`, `B068-R18`) — the source CSV's `A` mark on the "Gov Institution
(GRC)" column is preserved as `source_code`, but its normalized meaning is external authority, never
an internal accountable role.

## 2. Operation master (Sheet 2 — "Newsroom Workflow Task Operations")

`raci_scope = factory_operation` for every row below.

| `operation_id` | Source label | Shape | `R` (`party_id`) | `A` (`party_id`) | `verification_status` |
|---|---|---|---|---|---|
| `OP-PITCH` | Daily Story Pitch & Beat Tracking | `UNVERIFIED` | **Two `R`**: `ROLE-REPORTER`, `ROLE-JOURNALIST` | `ROLE-DESK-EDITOR` | `UNVERIFIED` — multiple `R`, no milestone marker in source |
| `OP-RESEARCH` | Deep Fact-Checking & OSINT Research | `UNVERIFIED` | **Two `R`**: `ROLE-INVESTIGATOR`, `ROLE-SENIOR-JOURNALIST` | `ROLE-DESK-EDITOR` | `UNVERIFIED` — multiple `R`, no milestone marker in source |
| `OP-DRAFT` | Drafting Standard News Copy | `UNVERIFIED` | **Two `R`**: `ROLE-REPORTER`, `ROLE-JOURNALIST` | **none** | `UNVERIFIED` — multiple `R` and no `A` at all in source |
| `OP-COMPLEX-SERIES` | Executing Complex Investigative Series | `milestone` (source-marked "Mult task R") | **Three `R`**: `ROLE-INVESTIGATOR`, `ROLE-SENIOR-JOURNALIST`, `ROLE-CHIEF-EDITORIAL-DESK` | `ROLE-CHIEF-EDITOR` | `UNVERIFIED` — milestone shape known, atomic children not yet decomposed |
| `OP-COPY-EDIT` | First-Line Copy Editing & Formatting | `atomic` | `ROLE-CHIEF-EDITORIAL-DESK` (one `R`) | `ROLE-DESK-EDITOR` | **`VERIFIED`** — single `R`, single `A`, no ambiguity |
| `OP-LEGAL-RISK` | Legal, Ethical & Risk Review | `milestone` (source-marked "Multi Task R") | **Two `R`**: `ROLE-SENIOR-JOURNALIST`, `ROLE-CHIEF-EDITORIAL-DESK` | `ROLE-CHIEF-EDITOR` | `UNVERIFIED` — milestone shape known, atomic children not yet decomposed |
| `OP-FINAL-SIGNOFF` | Final Publication Sign-Off | `control_point` (candidate) | **none** | `ROLE-DESK-EDITOR` | `UNVERIFIED` — no `R` in source at all |
| `OP-CRISIS` | Crisis Management & Retractions | `atomic` | `ROLE-CHIEF-EDITOR` (one `R`) | **`EXT-GRC`** (`involvement_code = EA`; `source_code = A`) | **`VERIFIED`** — single `R`, single `A`, no ambiguity |

**Corrected framing (`D-174`, `B068-R20`): only `OP-COPY-EDIT` and `OP-CRISIS` (2 of 8) are
`VERIFIED`.** The other six are `UNVERIFIED` at the row-shape level (multiple `R`, missing `A`, or an
undecomposed milestone) — **but row shape and route applicability are two different questions.**
**All eight operations, including the two `VERIFIED` ones, still need an explicit route disposition**
(§3) before `F4` closes; being row-shape-clean does not exempt `OP-COPY-EDIT`/`OP-CRISIS` from that.

## 3. Route-operation join — genuinely blocked, not guessed

**No column in either CSV states which operations apply to which routes.** `B-068`'s own guardrail
("do not infer... without a governed rule") and its explicit instruction ("title matching is
prohibited") both forbid inferring this from operation/route names, however suggestive — "Legal,
Ethical & Risk Review" *reading* like it belongs to `ROUTE-FALLOUT-3`/`ROUTE-GRC` is not evidence.

**Requested shape (Parent B, replacing v0.1's binary "applies/doesn't"):** for each of the 8
operations, one disposition against each of the 7 routes — `required`, `optional`, `conditional`, or
`not_applicable`. A `conditional` entry must name its trigger. §5 is the blank template for this.

| `route_id` | `operation_id` | `applicability` | `trigger` (if `conditional`) | `provenance` |
|---|---|---|---|---|
| *(empty — see §5 for the template to fill in)* | | | | |

## 4. Operation work-design and external-authority defaults (Child B1/B2 — proposed, awaiting confirmation)

**Child B1 — unresolved operation shapes**, decided only after §3's routing exists (an operation's
`A` may turn out to be route-inherited, which requires knowing the route first):

1. `OP-PITCH`, `OP-RESEARCH`: name one atomic `R`, or confirm as undocumented milestones and enumerate children.
2. `OP-DRAFT`: name a local `A`, or explicitly inherit the applicable route's `A` once §3 exists.
3. `OP-COMPLEX-SERIES`, `OP-LEGAL-RISK`: enumerate atomic children and one `R` per child.
4. `OP-FINAL-SIGNOFF`: name its `R`, or approve a scoped `R = A` exception with a compensating
   successor/independent-review control.

**Until decided, this document uses conservative planning values — not silent choices:**
`milestone_pending_decomposition`, `A = unknown`, `R = unknown`. No source role is picked over
another, no authority is inherited, and no `R = A` exception is granted without explicit approval.

**Child B2 — blank Sheet 2 GRC cells.** Proposed default: `unknown`, not `not_applicable` and not
`I` — the source CSV supplies no blank-cell convention, and `unknown` preserves that rather than
asserting a fact. `OP-CRISIS` is the one exception with a populated GRC cell; it already carries
`EXT-GRC`/`EA` above, not a blank.

**These are proposed conservative defaults, not yet confirmed by the Chief Editor** — see §5.

## 5. Chief Editor input required to close `F4`

**A.** For each of the 8 operations below, mark its disposition against each of the 7 routes:
`required` / `optional` / `conditional` (name the trigger) / `not_applicable`.

| Operation | `ROUTE-PROD-1` | `ROUTE-PROD-2` | `ROUTE-PROD-3` | `ROUTE-FALLOUT-1` | `ROUTE-FALLOUT-2` | `ROUTE-FALLOUT-3` | `ROUTE-GRC` |
|---|---|---|---|---|---|---|---|
| `OP-PITCH` | | | | | | | |
| `OP-RESEARCH` | | | | | | | |
| `OP-DRAFT` | | | | | | | |
| `OP-COMPLEX-SERIES` | | | | | | | |
| `OP-COPY-EDIT` | | | | | | | |
| `OP-LEGAL-RISK` | | | | | | | |
| `OP-FINAL-SIGNOFF` | | | | | | | |
| `OP-CRISIS` | | | | | | | |

**B.** Confirm or amend §4's proposed conservative defaults:

1. Blank Sheet 2 GRC cells → `unknown` (not `not_applicable`, not `I`)?
2. No authority inherits silently — every `A` (including `OP-DRAFT`'s) is either named explicitly or
   inherited only through an explicit §3 join row?
3. No `R = A` exception is granted without your explicit approval (relevant to `OP-FINAL-SIGNOFF`)?
4. `OP-COMPLEX-SERIES`/`OP-LEGAL-RISK` stay `milestone_pending_decomposition` until you enumerate
   their atomic children — no decomposition is guessed?

Until §5 is answered, `F4`'s success criteria are not met. §0–§2's masters may be relied on now —
their `VERIFIED` rows are fully verified and their `UNVERIFIED` rows accurately say so. §3 may not.
