# Factory Route/Operation Crosswalk

**Version:** v0.3 — **route/operation applicability DECIDED (Chief Editor, 2026-09-01); operation-shape
specifics (multi-`R` rows, `OP-DRAFT`'s `A`, milestone decomposition) remain conservative placeholders
pending later decision**
**Date:** 2026-08-31, corrected 2026-08-31 (`D-174`), route join decided 2026-09-01 (`D-176`)
**Origin:** `docs/handoff/B-068-*.md` `F4`, following `F3` (`raci-involvement-matrix.md` §8's role catalog)
**Status:** Reconciles, does not import, the two attached CSVs (`B-068` §0 guardrail — the CSVs are
business evidence, not an adopted RACI). SHA-256 hashes recorded in `B-068`'s Evidence line.

> **Corrected 2026-08-31 (`D-174`).** v0.1's heading read "route/operation masters verified" and its
> §2 said only "six [operations] need a Chief Editor decision" — both overstated (`B068-R20`). All four
> `D-174` findings corrected in v0.2.
>
> **Decided 2026-09-01 (`D-176`, `B-068` §14.4/§17.4).** The Chief Editor approved §14.4's 8×7
> route-applicability matrix exactly as drafted, confirmed all four conservative authority defaults
> (§4), and authorized Lane A to draft the per-operation sequencing fields (§3.2). §3's join is no
> longer empty. Operation-shape specifics (§4's Child B1 items) are **not** individually decided —
> they remain the conservative placeholders §4 already named, which is itself now a confirmed,
> standing disposition rather than a proposal.

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

`ROUTE-PROD-1`'s `A` (`ROLE-DESK-EDITOR`) is **confirmed unaffected** by `T5`/`EG4`'s Chief Editorial
Desk review function (`D-175`, closing `B068-R22`, 2026-09-01) — route accountability and gate-review
function are separate fields; neither is inferred from the other.

## 2. Operation master (Sheet 2 — "Newsroom Workflow Task Operations")

`raci_scope = factory_operation` for every row below.

| `operation_id` | Source label | Shape | `R` (`party_id`) | `A` (`party_id`) | `verification_status` |
|---|---|---|---|---|---|
| `OP-PITCH` | Daily Story Pitch & Beat Tracking | `UNVERIFIED` | **Two `R`**: `ROLE-REPORTER`, `ROLE-JOURNALIST` | `ROLE-DESK-EDITOR` | `UNVERIFIED` — multiple `R`, no milestone marker in source |
| `OP-RESEARCH` | Deep Fact-Checking & OSINT Research | `UNVERIFIED` | **Two `R`**: `ROLE-INVESTIGATOR`, `ROLE-SENIOR-JOURNALIST` | `ROLE-DESK-EDITOR` | `UNVERIFIED` — multiple `R`, no milestone marker in source |
| `OP-DRAFT` | Drafting Standard News Copy | `UNVERIFIED` | **Two `R`**: `ROLE-REPORTER`, `ROLE-JOURNALIST` | **none** | `UNVERIFIED` — multiple `R` and no `A` at all in source |
| `OP-COMPLEX-SERIES` | Executing Complex Investigative Series | `milestone` (source-marked "Mult task R") | **Three `R`**: `ROLE-INVESTIGATOR`, `ROLE-SENIOR-JOURNALIST`, `ROLE-CHIEF-JOURNALIST` | `ROLE-CHIEF-EDITOR` | `UNVERIFIED` — milestone shape known, atomic children not yet decomposed |
| `OP-COPY-EDIT` | First-Line Copy Editing & Formatting | `atomic` | `ROLE-CHIEF-JOURNALIST` (one `R`) | `ROLE-DESK-EDITOR` | **`VERIFIED`** — single `R`, single `A`, no ambiguity |
| `OP-LEGAL-RISK` | Legal, Ethical & Risk Review | `milestone` (source-marked "Multi Task R") | **Two `R`**: `ROLE-SENIOR-JOURNALIST`, `ROLE-CHIEF-JOURNALIST` | `ROLE-CHIEF-EDITOR` | `UNVERIFIED` — milestone shape known, atomic children not yet decomposed |
| `OP-FINAL-SIGNOFF` | Final Publication Sign-Off | `control_point` (candidate) | **none** | `ROLE-DESK-EDITOR` | `UNVERIFIED` — no `R` in source at all |
| `OP-CRISIS` | Crisis Management & Retractions | `atomic` | `ROLE-CHIEF-EDITOR` (one `R`) | **`EXT-GRC`** (`involvement_code = EA`; `source_code = A`) | **`VERIFIED`** — single `R`, single `A`, no ambiguity |

Row-shape verification is unchanged by `D-176`: 2 of 8 (`OP-COPY-EDIT`, `OP-CRISIS`) `VERIFIED`; six
remain `UNVERIFIED` at the row-shape level. Row shape and route applicability are separate questions
(`D-174`, `B068-R20`) — §3 now answers applicability for all eight regardless of row-shape status.

> **Correction, 2026-09-17 (`D-236`, `docs/handoff/B-118`).** `OP-COMPLEX-SERIES`'s third `R`,
> `OP-COPY-EDIT`'s sole `R`, and `OP-LEGAL-RISK`'s second `R` previously read `ROLE-CHIEF-EDITORIAL-
> DESK`. **`ROLE-CHIEF-EDITORIAL-DESK` is not one of the eight source CSV columns** —
> `raci-involvement-matrix.md` §8 (`D-175`, predating this correction) already records the actual
> header row as *Reporter, Investigator, Journalist, Senior Journalist, **Chief Journalist**, Desk
> Editor, Editor-in-Chief, Gov Institution (GRC)*, with Chief Journalist its own row, never an alias
> of Chief Editorial Desk. The three cells above are corrected to `ROLE-CHIEF-JOURNALIST` accordingly.
> `ROLE-CHIEF-EDITORIAL-DESK` remains a real, distinct role — the `T5`/`EG4`/`T6` gate role §8
> describes — it was simply never a Sheet 2 source column, and should not have appeared as one here.
> **Consequence:** `B117-R47`'s "Chief Journalist Copy Edit precursor, no child operation" framing
> (§4.2 below) was chasing a phantom gap — Chief Journalist already **is** `OP-COPY-EDIT`'s source
> `R`; no precursor child-task contract is needed.

## 3. Route-operation join — DECIDED (`D-176`, 2026-09-01)

**§3.1 — Applicability, per `B-068` §14.4, approved exactly as drafted.** Trigger definitions are
listed once below the table, not repeated per row.

| `route_id` | `operation_id` | `applicability` | `trigger` | `provenance` |
|---|---|---|---|---|
| `ROUTE-PROD-1` | `OP-PITCH` | `required` | — | Chief Editor, `B-068` §14.4 |
| `ROUTE-PROD-1` | `OP-RESEARCH` | `conditional` | `C1` | Chief Editor, `B-068` §14.4 |
| `ROUTE-PROD-1` | `OP-DRAFT` | `required` | — | Chief Editor, `B-068` §14.4 |
| `ROUTE-PROD-1` | `OP-COPY-EDIT` | `required` | — | Chief Editor, `B-068` §14.4 |
| `ROUTE-PROD-1` | `OP-LEGAL-RISK` | `conditional` | `C5` | Chief Editor, `B-068` §14.4 |
| `ROUTE-PROD-1` | `OP-FINAL-SIGNOFF` | `required` | — | Chief Editor, `B-068` §14.4 |
| `ROUTE-PROD-2` | `OP-PITCH` | `required` | — | Chief Editor, `B-068` §14.4 |
| `ROUTE-PROD-2` | `OP-RESEARCH` | `required` | — | Chief Editor, `B-068` §14.4 |
| `ROUTE-PROD-2` | `OP-DRAFT` | `required` | — | Chief Editor, `B-068` §14.4 |
| `ROUTE-PROD-2` | `OP-COMPLEX-SERIES` | `conditional` | `C4` | Chief Editor, `B-068` §14.4 |
| `ROUTE-PROD-2` | `OP-COPY-EDIT` | `required` | — | Chief Editor, `B-068` §14.4 |
| `ROUTE-PROD-2` | `OP-LEGAL-RISK` | `conditional` | `C5` | Chief Editor, `B-068` §14.4 |
| `ROUTE-PROD-2` | `OP-FINAL-SIGNOFF` | `required` | — | Chief Editor, `B-068` §14.4 |
| `ROUTE-PROD-3` | `OP-PITCH` | `required` | — | Chief Editor, `B-068` §14.4 |
| `ROUTE-PROD-3` | `OP-RESEARCH` | `required` | — | Chief Editor, `B-068` §14.4 |
| `ROUTE-PROD-3` | `OP-DRAFT` | `required` | — | Chief Editor, `B-068` §14.4 |
| `ROUTE-PROD-3` | `OP-COMPLEX-SERIES` | `conditional` | `C4` | Chief Editor, `B-068` §14.4 |
| `ROUTE-PROD-3` | `OP-COPY-EDIT` | `required` | — | Chief Editor, `B-068` §14.4 |
| `ROUTE-PROD-3` | `OP-LEGAL-RISK` | `required` | — | Chief Editor, `B-068` §14.4 |
| `ROUTE-PROD-3` | `OP-FINAL-SIGNOFF` | `required` | — | Chief Editor, `B-068` §14.4 |
| `ROUTE-FALLOUT-1` | `OP-RESEARCH` | `conditional` | `C1` | Chief Editor, `B-068` §14.4 |
| `ROUTE-FALLOUT-1` | `OP-DRAFT` | `conditional` | `C2` | Chief Editor, `B-068` §14.4 |
| `ROUTE-FALLOUT-1` | `OP-COPY-EDIT` | `required` | — | Chief Editor, `B-068` §14.4 |
| `ROUTE-FALLOUT-1` | `OP-LEGAL-RISK` | `conditional` | `C5` | Chief Editor, `B-068` §14.4 |
| `ROUTE-FALLOUT-1` | `OP-FINAL-SIGNOFF` | `required` | — | Chief Editor, `B-068` §14.4 |
| `ROUTE-FALLOUT-2` | `OP-RESEARCH` | `required` | — | Chief Editor, `B-068` §14.4 |
| `ROUTE-FALLOUT-2` | `OP-DRAFT` | `required` | — | Chief Editor, `B-068` §14.4 |
| `ROUTE-FALLOUT-2` | `OP-COPY-EDIT` | `required` | — | Chief Editor, `B-068` §14.4 |
| `ROUTE-FALLOUT-2` | `OP-LEGAL-RISK` | `required` | — | Chief Editor, `B-068` §14.4 |
| `ROUTE-FALLOUT-2` | `OP-FINAL-SIGNOFF` | `required` | — | Chief Editor, `B-068` §14.4 |
| `ROUTE-FALLOUT-2` | `OP-CRISIS` | `required` | — | Chief Editor, `B-068` §14.4 |
| `ROUTE-FALLOUT-3` | `OP-RESEARCH` | `required` | — | Chief Editor, `B-068` §14.4 |
| `ROUTE-FALLOUT-3` | `OP-DRAFT` | `conditional` | `C2` | Chief Editor, `B-068` §14.4 |
| `ROUTE-FALLOUT-3` | `OP-COPY-EDIT` | `conditional` | `C2` | Chief Editor, `B-068` §14.4 |
| `ROUTE-FALLOUT-3` | `OP-LEGAL-RISK` | `required` | — | Chief Editor, `B-068` §14.4 |
| `ROUTE-FALLOUT-3` | `OP-FINAL-SIGNOFF` | `required` | — | Chief Editor, `B-068` §14.4 |
| `ROUTE-FALLOUT-3` | `OP-CRISIS` | `required` | — | Chief Editor, `B-068` §14.4 |
| `ROUTE-GRC` | `OP-RESEARCH` | `required` | — | Chief Editor, `B-068` §14.4 |
| `ROUTE-GRC` | `OP-DRAFT` | `conditional` | `C3` | Chief Editor, `B-068` §14.4 |
| `ROUTE-GRC` | `OP-COPY-EDIT` | `conditional` | `C3` | Chief Editor, `B-068` §14.4 |
| `ROUTE-GRC` | `OP-LEGAL-RISK` | `required` | — | Chief Editor, `B-068` §14.4 |
| `ROUTE-GRC` | `OP-FINAL-SIGNOFF` | `required` | — | Chief Editor, `B-068` §14.4 |
| `ROUTE-GRC` | `OP-CRISIS` | `conditional` | `C6` | Chief Editor, `B-068` §14.4 |

Every `route_id`/`operation_id` pair not listed above is `not_applicable`. `optional` is unused by
design (`B-068` §14.4: an untriggered optional station has no deterministic completion rule).

**Trigger definitions:**

| Trigger | Exact condition |
|---|---|
| `C1` | Material facts are disputed, source confidence is below the route threshold, or a downstream finding requires deep re-verification |
| `C2` | The route must issue or amend a public correction, retraction, legal response, or other external editorial artifact |
| `C3` | The GRC route requires a formal submission, licensing response, or public-facing compliance artifact |
| `C4` | The work order is explicitly classified as a multi-part enterprise/investigative series |
| `C5` | A documented legal, ethical, manipulation, money-laundering, corruption, or defamation-risk signal is present |
| `C6` | A regulatory breach, enforcement action, licensing incident, or regulator-directed retraction requires crisis handling |

**Production-route crisis handling.** A crisis signal on a production route does **not** execute
`OP-CRISIS` in place — it creates an append-only route-reclassification event (new route, prior route
preserved as history, trigger and decision-maker recorded), after which the new route's own join rows
apply (`B-068` §14.4). This is not expressed as a join row because it is a route change, not an
in-route operation.

### §3.2 — Per-operation sequencing (Lane A draft, authorized 2026-09-01; `B-068` §17.4 item 5)

Applies uniformly wherever an operation is `required`/`conditional` in §3.1 — sequencing is a property
of the operation, not of the route it runs in. **Drafted from already-established facts** (`B-068`
§14.2's workflow order, §14.4's triggers, Sheet 2's row order), not CSV fact — amendable like any other
Lane A draft.

| `operation_id` | `stage_order` | `repeatable` | `entry_trigger` | `completion_evidence` | `reroute_target` |
|---|---|---|---|---|---|
| `OP-PITCH` | 1 | `false` | Senior Journalist `EW`-start event (`D-175`) | Logged pitch: topic, trend signal, route classification | — (first stage) |
| `OP-RESEARCH` | 2 | `true` — may repeat under `C1` | `OP-PITCH` complete, or a later `C1` trigger | Verified facts/sources and reliability tier recorded | `OP-PITCH`, if the source itself is unusable |
| `OP-DRAFT` | 3 | `false` | `OP-RESEARCH` complete (or route-applicable skip when not required) | Draft copy produced | `OP-RESEARCH`, if facts are insufficient |
| `OP-COMPLEX-SERIES` | 3 (replaces `OP-DRAFT` under `C4`) | `true` — enumerated children may repeat | `C4` trigger | All enumerated children complete (children not yet enumerated — §4 Child B1) | `OP-RESEARCH` |
| `OP-COPY-EDIT` | 4 | `false` | `OP-DRAFT` or `OP-COMPLEX-SERIES` complete | Copy-edited draft ready for the `T5`/`EG4` review set | `OP-DRAFT`/`OP-COMPLEX-SERIES` |
| `OP-LEGAL-RISK` | 4.5 (after `OP-COPY-EDIT`, before `OP-FINAL-SIGNOFF`) | `true` — enumerated children may repeat | `C5` trigger | Risk-review disposition per identified issue (children not yet enumerated — §4 Child B1) | `OP-COPY-EDIT` or `OP-DRAFT` |
| `OP-FINAL-SIGNOFF` | 5 (last operation; immediately precedes the `T5` review set) | `false` | All required/triggered prior operations for the route complete | Signed-off package ready for `T5`/`EG4` review | The earliest incomplete required operation for the route |
| `OP-CRISIS` | not applicable to the normal sequence — reached only via reclassification | `true` | `C6` trigger, or a fallout/GRC route selected directly | Crisis disposition recorded; prior route preserved as history | Not a reroute — creates a new route-selection event (§3.1) |

## 4. Operation work-design and external-authority defaults — CONFIRMED (`D-176`, 2026-09-01)

**Child B1 — unresolved operation shapes.** The Chief Editor confirmed the conservative placeholder
approach rather than deciding each shape individually:

1. `OP-PITCH`, `OP-RESEARCH`: **not individually decided.** Conservative value stands: multiple `R`
   preserved as-is in §2, no single `R` chosen.
2. `OP-DRAFT`: **not individually decided.** `A = unknown` stands; no route-inherited `A` is applied
   even though §3.1 now names its applicable routes, because inheritance itself was never approved as
   automatic (see confirmation 2 below).
3. `OP-COMPLEX-SERIES`, `OP-LEGAL-RISK`: **not individually decided.** `milestone_pending_decomposition`
   stands; no atomic children are invented.
4. `OP-FINAL-SIGNOFF`: **not individually decided.** No `R` is named and no `R = A` exception is
   granted.

**Confirmed conservative defaults (`B-068` §5.B / §17.4 item 3), standing, not proposed:**

1. Blank Sheet 2 GRC cells → `unknown` (not `not_applicable`, not `I`). **Confirmed.**
2. No authority inherits silently — every `A` (including `OP-DRAFT`'s) must be named explicitly or
   inherited only through an explicit, separate decision. **Confirmed** — §3.1's routing decision does
   **not** itself authorize `OP-DRAFT`'s `A` inheritance; that remains a distinct, undecided item.
3. No `R = A` exception is granted without explicit Chief Editor approval (`OP-FINAL-SIGNOFF`).
   **Confirmed.**
4. `OP-COMPLEX-SERIES`/`OP-LEGAL-RISK` stay `milestone_pending_decomposition` until the Chief Editor
   enumerates their atomic children — no decomposition is guessed. **Confirmed.**

### 4.1 Application-selection rule and `OP-FINAL-SIGNOFF` contract (`D-233`, corrected 2026-09-17)

**These entries add a decided application-selection layer on top of §2's unchanged source R/A rows.
No Sheet 2 cell is edited by this section; §4's "not individually decided" items are qualified, not
reversed, below. Recorded under `D-233` — a distinct Register decision, not `D-232`, whose own
identity is the `V1-SM05`/`V1-SM06` slot assignment (`B117-R6`/similar correction, 2026-09-17).**

1. **Application-selection rule for `OP-PITCH`/`OP-DRAFT` (decided, not a §4 row-shape decision), corrected 2026-09-17.**
   The business judgment stage selects the contextual executor from Sheet 2's preserved multi-`R` set
   before dispatching that stage's applicable operations. **`V1-SM05`'s fixed route is `ROUTE-PROD-1`,
   whose Sheet 1 `R` is Reporter** — for Route-1, Reporter executes `OP-PITCH`/`OP-DRAFT` at business
   judgment stage 1. Journalist executing at business judgment stage 3 applies to `ROUTE-PROD-2`, a
   **different route**, not Route-1's DoR scope — an earlier pass here named Journalist for Route-1's
   `OP-DRAFT`, which was wrong and is corrected. See `requirements-traceability-map.md` §6.2 for the
   business/technical namespace map. This does **not** collapse the source multi-`R` row, and does
   **not** change §4 item 1's standing "not individually decided" row-shape note — it is a separate,
   decided selection rule that consumes that preserved shape, route by route.
2. **`OP-DRAFT` accountability (decided, source unchanged).** §4 item 2's `A = unknown` **stands as
   the source fact** — no automatic route inheritance. **Separately, the Chief Editor supplied
   `ROLE-CHIEF-EDITORIAL-DESK` as the application-level default `A`** for `OP-DRAFT` at business
   judgment stage 5. This is recorded as a distinct application decision, not a CSV fact and not a
   silent inheritance from route `A`.
3. **`OP-FINAL-SIGNOFF` — ACCEPTED execution contract, Chief Editor decision 2026-09-17.** §4 item
   4's "no `R` named, no `R = A` exception granted" is now **qualified by this accepted exception**:
   Desk Editor (the route/operation `A`) personally attests completion as an **A-only control**. Five
   accepted conditions:
   - Desk Editor performs the attestation; no synthetic `R` and no general `R = A` record is created
     for any other operation by this exception.
   - The attestation records the acting principal, the enumerated list of required/triggered prior
     operations checked complete, a timestamp, and produces the "signed-off package" event §3.2
     already defines. A missing required prior operation refuses the attestation and returns to the
     earliest incomplete one, per §3.2's existing `reroute_target`.
   - Replay is idempotent per revision and scope — replaying the same attestation for the same
     revision produces no second effective sign-off event.
   - A relevant revision requires a fresh attestation; prior attestation evidence is retained, not
     overwritten.
   - **Sign-Off only opens human publication review.** It does not itself approve, publish, mark
     `ManualReady`, or change article state.

### 4.2 `T1`–`T5` phase-gate overlay — scoped executions, `T5` RACI normalization, Final Sign-Off
`A`-coverage extension (`D-234`, propagated 2026-09-17, `B117-R44`/`R46`/`R47`/`R48`; source-RACI
corrected 2026-09-17, `D-236`, `B-118`)

**Relationship to §3.2.** §3.2's `stage_order` column is **not** a single global occurrence per
operation — it is the **default ordering inside one selected task bundle**. Each `business:T1`–`T5`
judgment stage (`requirements-traceability-map.md` §6.3) opens its own **scoped execution instance**
of the applicable §3.1 operations for that stage's selected role and route comparison; the same
`operation_id` (e.g. `OP-PITCH`, `OP-DRAFT`) recurs across stages as **distinct, immutable executions**,
never overwriting a prior stage's row. §3.2's `entry_trigger`/`completion_evidence`/`reroute_target`
columns still govern ordering *within* a bundle; they do not claim the operation runs only once across
the whole route. This corrects the earlier reading that produced `B117-R44`.

**`T5` RACI normalization** — four facts stay distinct and none overwrites another:

| Concern | Source fact (§2, unedited) | Application interpretation |
|---|---|---|
| Phase-level accountability | Not a Sheet 2 field | `business:T5` selects Chief Editorial Desk for the phase/accountability context only |
| `OP-PITCH` | `R`: Reporter + Journalist; `A`: Desk Editor | `T5` reviews/validates its evidence; Chief Editorial Desk does not replace the source `A` |
| `OP-RESEARCH` | `R`: Investigator + Senior Journalist; `A`: Desk Editor | `T5` reviews/validates its evidence; Chief Editorial Desk does not replace the source `A` |
| `OP-DRAFT` | `R`: Reporter + Journalist; source `A`: blank | §4.1 item 2's application overlay supplies Chief Editorial Desk as default `A`; source `A` remains blank |
| `OP-COPY-EDIT` | `R`: Chief Journalist; `A`: Desk Editor | Corrected 2026-09-17 (`D-236`, `B-118`) — source `R` was mislabeled Chief Editorial Desk; no missing `R` exists and no precursor child-task is needed (below) |
| `OP-FINAL-SIGNOFF` | source `R`: blank; `A`: Desk Editor (flagged, not yet corrected — see below) | Extended below with the `A`-coverage invariant. Does not backfill `A` and does not create a synthetic `R` |

**`OP-FINAL-SIGNOFF` — `A`-coverage extension (decided, extends §4.1 item 3, not a replacement).**
In addition to §4.1 item 3's five accepted conditions, the attestation also verifies that **every
applicable task-execution instance for the route has an explicit accountable party (`A`) and
completion evidence recorded** — a task instance with a blank `A` or missing completion evidence
**refuses the attestation and returns to that instance**, per §3.2's existing `reroute_target`
mechanics, rather than being backfilled or silently skipped. This closes `B117-R48`.

**`OP-FINAL-SIGNOFF`'s source `A` — flagged 2026-09-17 (`D-236`, `docs/handoff/B-118`), not yet
corrected.** `docs/handoff/B-118` asserts the correct source `A` is Editor-in-Chief
(`ROLE-CHIEF-EDITOR`), with Desk Editor as `C`, not `A` — but §2's row was always `UNVERIFIED` ("no
`R` in source at all"), and Lane A cannot independently confirm this specific cell without the
original CSV. **This table, and `§4.1`'s accepted contract above (Desk Editor attests), still read
Desk Editor as `A` pending explicit Chief Editor confirmation** — reassigning it reverses `D-233`,
so it is not applied silently. See `B-118`'s Lane A response section for the full flag.

**Chief Journalist Copy Edit precursor — RETIRED, not built (`B117-R47` dissolved, `D-236`,
2026-09-17).** The precursor question assumed `OP-COPY-EDIT`'s source `R` was missing or held by
Chief Editorial Desk. Corrected above: **Chief Journalist already is `OP-COPY-EDIT`'s source `R`.**
No precursor, no child-task contract, and no new role is needed — the operation this section
previously proposed a bounded draft contract for does not exist as a gap. `B117-R47` closes by
dissolution, not by construction.

## 5. `F4` status

**Route-operation applicability (§3.1) and per-operation sequencing (§3.2) are decided.** Operation
row-shape specifics (§4's four items) remain conservative placeholders by **confirmed, standing**
decision, not an open question — the Chief Editor chose the placeholder over deciding each shape now.
`F4`'s own success criteria (`B-068` §17.4): every route-operation relationship has one explicit
disposition and provenance (met, §3.1); every applicable atomic task has an effective internal `A` and
executable `R` (deferred by confirmed placeholder, §4); milestone children are named or remain visibly
held (met — visibly held, §4); external `EA` is never inherited as internal accountability (met, §0/§1);
a route change appends a new selection event rather than mutating history (met, §3.1's crisis-handling
note).

**`F4` is complete for Lane A propagation purposes.** `F6` (behavior/acceptance contract) and `F7`
(propagation, Graphify sync, independent verification, fresh build authorization) remain separate,
unstarted work — see `docs/handoff/B-068-*.md` §17.5/§17.6.
