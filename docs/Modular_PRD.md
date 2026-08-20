# Modular Product Requirements Document — AI-Driven Trending Article Tracker

> **Relationship to `docs/PRD.md`.** This document does **not** supersede or replace `docs/PRD.md`. That file is the project's original requirement record, written at scaffolding time, and is retained unchanged.
>
> The two serve different purposes and are both kept:
>
> | Document | What it is | Status |
> |---|---|---|
> | `docs/PRD.md` | The original project requirement doc. Concise, substrate-accurate, written before the governing documents were available. The requirements the scaffolding was built from | **Retained, unchanged** |
> | `docs/Modular_PRD.md` *(this file)* | The governed requirement specification, derived from the full governing set and structured on the modular PRD template with end-to-end traceability | Active |
>
> **Neither governs the other — they sit on opposite sides of the customer/project boundary.** `docs/PRD.md` is the customer's statement of wants, derived from the Business Charter, and its approval authorised scaffolding. This document is the project team's specification drawn from it, per the PMI requirements flow: customer → project sponsor → project team, with feedback returning the same way.
>
> A difference between the two is therefore never resolved by precedence. It is one of exactly two things:
>
> - an **elaboration** — this document specifying *how* a customer want is met. Expected; record the `CR-xx` anchor and proceed.
> - a **change request** — this document departing from, exceeding, or omitting what the customer asked for. **Routes back to the customer through the sponsor.**
>
> Resolving a difference by document rank would mean the project team altering the customer's scope without telling them. The mapping in both directions, with content-hash anchors on every customer statement, is `docs/governance/requirements-traceability-map.md`. **Six items in this document currently have no customer origin — four functional requirements (FR-06, FR-11, FR-12, FR-13) and two non-goals (NG-10, NG-11)** — all justified by the Addendum or Entry 007, none yet disclosed to the customer. That is feedback item FB-04. *(Corrected from "five" — see v1.1 changelog; an external audit caught the same miscount this project's own §12 warns against.)*
>
> `docs/PRD.md` is not expected to carry Lines, state machines, or traceable ids. The customer is the subject-matter expert on their own business, not on SDLC; those are this document's job.

---

## 0. Document Control

| Field | Value |
|---|---|
| **Product / Feature Name** | AI-Driven Trending Article Tracker |
| **Document** | `docs/Modular_PRD.md` — the governed requirement specification. Complements `docs/PRD.md`, which is retained unchanged |
| **PRD Owner** | Chief Editor (robertaoai) — Line 2, Risk & Compliance |
| **Reviewers / Approvers** | Chief Editor is the sole human approver. **No Eng Lead, Design Lead, Data Lead, or Legal function exists on this project.** Not an omission — see §0.3 |
| **Status** | `Draft` — planning only. No application code, no migration applied, no env pulled, no push |
| **Version** | 1.8 — this document's own lineage; it does not continue `docs/PRD.md`'s version history, and it is **not** a build version — see §8.0 |
| **Last Updated** | 2026-08-16 |
| **Jira Project Key** | **Not provisioned.** Execution tracking is `docs/journal/2026-08-16-sprint-plan.md` §6 (S0–S6) — see §8 |
| **Confluence / Wiki Link** | **Not provisioned.** This repo's `docs/` is the wiki |
| **Design Figma Link** | **Not provisioned.** No design function on this project |
| **Analytics Dashboard** | **Not provisioned.** Blocks K-02 through K-05 measurement — see §3.5 |

> **On the empty fields above.** They are left empty deliberately. Populating them with plausible URLs or role names would be fabrication, and this project's standing rule — carried since Entry 001 — is that a citation is not verification. Where a tool or function does not exist, the PRD says so and names what that blocks.

### 0.1 Changelog

| Version | Date | Author | Change Summary |
|---|---|---|---|
| **1.0** | **2026-08-16** | Chief Editor, drafted with Claude | Created against the modular PRD template, consolidated from the complete governing set, the deviation register, and journal Entries 006/007 and the sprint plan. Adds the governing-context section (§0.4), the ID namespace register (§0.5), traceability from Charter down to acceptance criteria, and NFRs derived from the nine measured technical constraints. **Corrected same day:** originally written over `docs/PRD.md` in error. `docs/PRD.md` has been restored byte-identical from `53ace36` and is retained; this is a separate, complementary document |
| **1.1** | **2026-08-17** | Claude, from an external EMS gap-analysis audit (`EMS-Modular-PRD-Gap-Analysis.md` — **not retained in this repository**; what stands in its place is the routed findings `A20`–`A28` in `docs/journal/2026-08-16-sprint-plan.md` §3. Citation preserved, never deleted — `D-16`), Chief Editor reviewing | **Fixed a miscount (§12's own predicted failure mode, caught by the audit):** §0's prologue and `Q8` said "five requirements have no customer origin" while naming six (FR-06, FR-11, FR-12, FR-13, NG-10, NG-11). Corrected to "six items — four FRs, two non-goals" in both places. **Added Q10, Q11, Q12** from the audit's Phase 09 action framework — tool-vs-product scope, the `judgment_independence_status` naming/identity-provenance rename, and the stale Three Lines Model citation (independently verified: superseded 2026-07-08, five weeks before this PRD's date). All three are decisions or investigations, not resolved here. The audit's other findings (blind-first-pass at T5, reviewer fatigue, throughput model, paired north-star metric, M1's DB-dependency, guardrail renaming) are tracked in the sprint plan, not duplicated into this document |
| **1.2** | **2026-08-17** | Claude, from a second external review of v1.1's sprint-plan companion, Chief Editor reviewing | **`Q11` was under-costed.** Both mentions of it in the sprint plan called the rename "minutes — a naming confirmation, not a design task," but `NFR-03` ("never null, never inferred at read") directly forbids the null `judgment_independence` value the rename requires, and `AC-07`, `AC-08`, `G-02`, and `FR-05`'s own Outputs line all still assert the retired field name unqualified. Re-costed Q11's row to "minutes to decide, one pass to propagate," and **marked five downstream locations** rather than leaving them silently unqualified while claiming to be the governed spec sprints build against (§0.4). *(This entry's own count was wrong — the fix actually touched six locations, silently dropping `TR-DM-02` from this sentence; and the marker applied was an undefined `⚠⚠`, not the single `⚠` this entry claims. Both corrected in v1.3 — see below.)* **`M1`'s exit criterion corrected**, alongside the sprint plan's matching S1 DoD: it required a live database rejection test while `DEP-05` is deliberately withheld two rows below it in this same document — a live contradiction, not a deferral. Restated as "trigger written and unit-tested; live anon-key behaviour unverified until `DEP-05` is answered." No open decision closed, no Charter text touched, no number invented |
| **1.3** | **2026-08-17** | Claude, from a third external review, Chief Editor reviewing | **The v1.2 fix introduced an undefined marker and then miscounted its own scope describing it — a third live instance of the project's own named count-drift defect.** Six rows (`G-02`, FR-05's Outputs line, `TR-DM-02`, `NFR-03`, `AC-07`, `AC-08`) had been given a doubled `⚠⚠`, which §0.4 never defined — it defines exactly one marker, single `⚠`, tied explicitly to an OD. §12's ritual ("has its OD moved?") and countermeasure list had no answer for four of the six rows, which have no OD behind them, only `Q11`. Both changelog entries describing the fix said "five" — the sprint-plan entry named all six in its own parenthetical and miscounted anyway; this document's v1.2 entry named only five, silently dropping `TR-DM-02`. **Resolved, not just documented:** confirmed via the pre-existing "Three FRs are provisional… FR-05 (OD2)" note that `G-02` and FR-05's Outputs line carry a genuine second proviso independent of Q11, while the other four have no OD relationship in their own text. Replaced `⚠⚠` throughout with two distinct, defined markers: `⚠` stays OD-only; new `[Q11]` marks rows depending on the Q11 naming decision alone. `G-02` and FR-05's Outputs line now carry both; the other four carry `[Q11]` only. Defined `[Q11]` in §0.4, added a `[Q11]`-specific line to §12's ritual, and named `TR-DM-02`/`NFR-03` explicitly in §12's countermeasure list. Annotated, not rewrote, the v1.2 entry above. No open decision closed, no Charter text touched, no number invented |
| **1.4** | **2026-08-17** | Claude, from a fourth external review, Chief Editor reviewing | **v1.3's fix was accurate everywhere it touched — the six table rows — but didn't reach every place stating the same fact.** §10's own `Q11` decision-request row, the section a decision-maker reads to decide whether to answer Q11 at all, still said "propagates into five places," still omitted `TR-DM-02` despite naming it in the same row's own "Unblocks" column, and still described every affected row as "marked ⚠ pending Q11" — stale even against v1.3's own fix, since two of the four rows it named (`AC-07`, `AC-08`) had just been correctly changed to `[Q11]`-only. **Fourth live instance of the count-drift defect, this time in the section that decides whether the whole chain of fixes was worth reading.** Corrected: §10's `Q11` row now names all six locations, states the marker split explicitly (⚠ for `G-02`/FR-05's Outputs only, `[Q11]` for all six), and says "six marked rows." Also added a cross-reference to the sprint plan's newly-defined `[S1-IRREVERSIBLE]` marker (§0.4), since that plan's `A21`/`A22`/`Q10`/`Q11` rows had been using a bare, undefined `⚠` that directly contradicted this section's own "never interchangeable" rule the moment the rule was written — same glyph, two files, two meanings, same rows. See sprint plan register row A28. No open decision closed, no Charter text touched, no number invented |
| **1.5** | **2026-08-17** | Codex, Graphify-assisted requirement reconstruction | **Corrected the scope/type category error in §7.** Functional versus non-functional describes requirement behaviour; Product versus Project Scope describes provenance and purpose. Product Scope now contains customer-anchored functional, non-functional, security, and data requirements. Project Scope now contains unanchored functional requirements and delivery/governance enablers that support the Customer Request indirectly. Mixed rows retain a customer-derived outcome in Product Scope while their implementation mechanism is separated into Project Scope. Added the uncovered CR-14 and partial CR-06 gaps to the scope view; renamed §7.3 so it no longer implies every NFR is Project Scope. No requirement text or customer statement changed |
| **1.6** | **2026-08-19** | Antigravity | **Three decision-free disclosures, no scope change.** Added the report immutability rule to §6.3 under `PSK-10` — stating the rule the S1 report design must satisfy, explicitly *not* restating `NFR-02`'s `workflow_transitions` wording, which awaits counsel (T2/TX). Disclosed in §0.3 that independent assurance is an Absent function: the Chief Editor's disposition is a management assertion, not an audit opinion; substantive remedy is `Q2`. Annotated `NG-02` as a v1 exclusion so the S1 tenancy boundary does not read as a Charter breach — boundary preserved, no multi-team capability built. No open decision closed, no Charter text touched, no number invented |
| **1.7** | **2026-08-19** | Claude, T1 runbook Steps 4-5, Chief Editor reviewing | **Two wording corrections and one citation annotation; no scope change.** `G23`: `US-13`'s `regulatory_retraction_order` said it *"bypasses T8 entirely"*, which would skip publishing the retraction notice. Restated so a binding order bypasses **deliberation only** — whether to retract is not open when a court has ordered it — while the notice is still drafted, mirrored to every target the original reached, and logged. `D-16`: annotated the `EMS-Modular-PRD-Gap-Analysis.md` citation to record that the report is **not retained in this repository**, and named the routed findings `A20`–`A28` as what stands in its place; citation preserved, never deleted. Also carries the v1.6 repair recorded under `G32`, where three disclosures had been applied in abbreviated form that dropped the `Q2` remedy pointer, the `A23` warning, the correction-ladder link and the `NG-02` tenancy explanation — all restored without re-bumping, so v1.6 now contains what its own changelog claimed. No open decision closed, no Charter text touched, no number invented |
| **1.8** | **2026-08-19** | Claude, from Chief Editor direction on build-version tracking | **Added §8.0 build-version tracking (`D-35`). No requirement changed.** This document now tracks **sprints**; the Alpha Portfolio plan tracks **projects**. A sprint stays inside one project, so the two trackers do not overlap. Recorded a notation rule to prevent a collision this project has already had three times: `V1`/`V2` (capital V, no decimal) is a **build version**; `1.7`/`1.8` (decimal, no prefix) is **this document's revision lineage**. They are unrelated — `Modular_PRD` v1.8 has nothing to do with build `V1`. `D-22`, which separated two meanings of *cost baseline*, is the precedent. Also recorded the `V1`→`V2` freeze-integrity question as deliberately deferred: `V2` will modify files that frozen `V1` specs describe, leaving them frozen and inaccurate unless a supersession treatment is chosen. It costs nothing while `V2` does not exist and must be settled before `V2` opens. No open decision closed, no Charter text touched, no number invented |
| **1.9** | **2026-08-20** | Claude, under `D-54` propagation | **Tracking correction, no scope change.** §8 `V1` status row updated to record `G33a`/`G33b` closed and the `SPECS` tier opened. Landed under `D-54`, which requires an artifact-creating decision to reach every tier that owns a facet of it — this row had been stale since `D-52`. |
| **1.10** | **2026-08-20** | Claude, from Chief Editor direction on the `X3` reading | **Tracking correction, no scope change.** §8 `V1` row records `G57` closed by `D-55`; S1 no longer gated on the backfill mapping. |
| **1.11** | **2026-08-20** | Claude, from Chief Editor direction on `R3` scope | **Tracking correction, no scope change.** §8 `V1` row records `R3` specified by `D-56`; S0's gate is now installation, not design. |
| **1.12** | **2026-08-20** | Claude, from Chief Editor direction on `Q2` and the BCP layer | **Tracking correction plus one disclosed capability gap.** §8 `V1` row records `Q2` answered by `D-57`. A business-continuity observability surface is required as condition `C-13`; it has **no functional requirement** — candidate `FR-14`, recorded as `G60` and **not written here**, since a new capability needs a proper §5 pass (`D-29`). |
| **1.13** | **2026-08-20** | Claude, from Chief Editor direction on `G11` | **Tracking correction, no scope change.** §8 `V1` row records `G11` closed by `D-58` — the project's last unowned gap. Precedence codified from `D-29` and `D-54`; detection carried as `C-14`, specified but not installed. |
| **1.14** | **2026-08-20** | Claude, from Chief Editor direction on `QC` | **Tracking correction, no scope change.** §8 `V1` row records `G10` closed by `D-59` — lanes separated by path on one origin, apex `UNSET`. `C-15` carries promotion to distinct origins before POC holds real client data. |
| **1.15** | **2026-08-20** | Claude, `G54` source verification | **Tracking correction, no scope change.** §8 `V1` row records `G54` closed by `D-60`. Upstream command surface verified from source rather than by installing a toolchain; `D-51` stands on upgraded evidence. |
| **1.16** | **2026-08-20** | Claude, `X4` specification | **Tracking correction plus one disclosed index gap.** §8 `V1` row records `X4` specified by `D-61` and coupled to `X5`. `G61` opened: the `X3`/`X4`/`X5`/`X7`/`X8` series is absent from the §5.1 index and tracked only in a journal the governing set calls non-authoritative. |
| **1.17** | **2026-08-20** | Claude, from Chief Editor direction on the BCP layer | **One new capability, disclosed as Project Scope.** Adds `US-14`, `FR-14`, `AC-21`, a §7.2 Project Scope row, and NFR coverage for a business-continuity observability surface. Closes `G60` (`D-62`). **No Customer Request origin** — it is the compensating control `C-13` attaches to `D-57`, and it is disclosed rather than folded into an existing `CR`. |
| **1.18** | **2026-08-20** | Claude, `G61` backfill | **Tracking correction, no scope change.** §8 `V1` row records `G61` closed by `D-63`: all eight `X`-series divergences indexed in `V1-DECISION-REGISTER` §5.1. The gap statement had said five — that was the still-open `D5` subset, not the series. |
| **1.19** | **2026-08-21** | Claude, `G59` closed | **Tracking correction, no scope change.** §8 `V1` row records `G59` closed by `D-64`: `bun.lockb` generated and committed, 413 packages pinned. First executable artifact of the engagement. `R3` remains specified-not-installed. |
| **1.20** | **2026-08-21** | Claude, `R3` bundle challenge | **One disclosed prerequisite, no scope change.** §8 `V1` row records `G62` opened by `D-65`: `bun run typecheck` exits 2 with ten implicit-`any` errors and `bun run lint` exits 1 with no ESLint config, so `R3` DoD D-4 is unachievable until both are remediated. `0002` is confirmed gated on `Q11`, not on the build guardrail. |

### 0.2 Decision Log

> This PRD **does not maintain its own decision log.** Decisions live in instruments that already exist and carry authority this document does not:

| Instrument | Location | Holds |
|---|---|---|
| Ratification Log | Addendum §2.4 | The only place a decision becomes ratified. `Ratified?` = Yes requires a date and an approval artifact |
| Provisional Deviation Register | `docs/governance/provisional-deviation-register.md` | Departures from a higher document, with closing triggers — rows **D1–D5** |
| Build Readiness Journal | `docs/journal/` | Dated decision sheets, including Entry 007's Phase 0 approval |

**Rule:** a decision recorded only in this PRD is not a decision. Route it to the Ratification Log.

### 0.3 Team-shape adaptation

The template assumes an organisation: Eng Lead, Design Lead, Data Lead, Legal, QA Lead, Marketing/GTM, Support/Ops. This project is **one human Chief Editor directing virtual agents** (Charter, "For:"). Every Owner field would resolve to the same person or to an invention.

Owners are therefore assigned **by Line**, which is the project's real accountability structure under the Three Lines Model:

| Owner label | Means | Template role it replaces |
|---|---|---|
| **Line 1** | Operations — Reporter, Investigator, Journalist, Chief Journalist. Agent-primary | Engineering execution |
| **Line 2** | Risk & Compliance — the Chief Editor. Human-primary | Product, QA sign-off, approval |
| **Line 3** | Independent Assurance — triggered, not standing | Audit, independent review |
| **Absent** | No such function exists on this project | Design, Legal, GTM, Support/Ops, Data |

**Functions marked Absent are risks, not conveniences.** Legal absence is load-bearing: Entry 006 §13 row S4 requires pre-publication legal review for high-sensitivity content, and Entry 007 removed fundraising from scope pending independent legal review. Neither can be discharged internally.
**Independent Assurance is Absent.** The Chief Editor disposition is a management assertion, not an independent audit opinion. No independent opinion exists anywhere in the model, so the same party both performs the editorial work and attests to it. Presenting that disposition as independent assurance would misrepresent it. The substantive remedy is `Q2` — Line 3 external, or state plainly that v1 has none — and **not** the Chief Editor, since `A23` records that naming him collides Line 2 with Line 3. **This entry discloses the gap; it does not close it.**

### 0.4 Governing context — what this PRD may and may not do

This PRD sits **below** the governing set and inherits from it. It is an execution-layer document.

```
Project Charter v1            ← source of truth; frozen; OD1–OD3 Open
  └── V1 Build Readiness Addendum v1.5    ← build specifications
       └── Blueprint v1.4                  ← architecture, product meaning
            └── Business Case v2.3         ← rationale
                 └── Provisional Deviation Register   ← departures, D1–D5
                      └── Journal (Entry 007, Sprint Plan rev 5)
                           └── ** THIS PRD **
```

| This PRD **may** | This PRD **may not** |
|---|---|
| Restate governing requirements as FRs, TRs, and ACs | Create a requirement that contradicts a higher document |
| Add execution detail — personas, stories, metrics, instrumentation | Close OD1, OD2, or OD3, or record a ratification |
| Surface gaps and route them as open questions | Convert a provisional item into a settled one by restating it without its qualifier |
| Mark a requirement provisional and name the OD it depends on | Supply an agent headcount, or back-derive one |

> **The failure mode this section exists to prevent.** Five times in this project's history, an Open decision has been silently upgraded to settled by a downstream document restating it without its hedge — most recently in the deviation register itself (sprint plan §3, row A1). A PRD full of confident FRs is the most likely sixth. Every requirement below that depends on OD1, OD2, or OD3 carries a **⚠ Provisional** marker and names the OD.
>
> **A second, distinct marker: `[Q11]`.** Not every provisional row depends on a Charter-level Open Decision — some depend on an ordinary Chief Editor decision request, resolvable in R1, that just hasn't been answered yet. `judgment_independence_status` and its proposed rename touch six rows in this document (`G-02`, FR-05's Outputs line, `TR-DM-02`, `NFR-03`, `AC-07`, `AC-08`), and only two of them (`G-02`, FR-05's Outputs — both already ⚠-marked as OD2-provisional in their own right, per the "Three FRs are provisional" note above) have a genuine OD dependency alongside the naming question. The other four (`TR-DM-02`, `NFR-03`, `AC-07`, `AC-08`) depend on `Q11` alone — a naming decision, not an Open Decision — and carry `[Q11]` with no `⚠`. **A row may carry `⚠`, `[Q11]`, both, or neither; the two markers are never interchangeable and a doubled `⚠⚠` is not a valid third state.** *(This corrects a genuine defect from the 2026-08-17 Q11 pass: six rows briefly carried an undefined `⚠⚠`, §12's ritual and countermeasure list didn't cover four of them, and two changelog entries each miscounted the affected rows — one said "five" while naming six, the other said "five" while naming only five and silently dropping `TR-DM-02`. See register row A27.)*
>
> **A third marker exists, and it lives in the other document.** The sprint plan (`docs/journal/2026-08-16-sprint-plan.md`, §6 R1) uses `[S1-IRREVERSIBLE]` on `A21`, `A22`, `Q10`, `Q11` — a scheduling property (becomes far more expensive after S1 ships), unrelated to `⚠`'s OD-dependence meaning here. It briefly reused the bare `⚠` glyph for that instead, which directly contradicted this section's own "never interchangeable" rule the moment this section was written — same glyph, two governing files, two different meanings, describing the same `Q11`/`Q10` rows in both. Corrected the same day (A28b). If you're cross-referencing between documents: `⚠` here means OD-dependent; `[S1-IRREVERSIBLE]` there means schedule-critical; a row can be either, both, or neither, and the sprint plan's marker is never written as `⚠` here or there.

### 0.5 ID namespace register

> The project's existing ID spaces already collide. Recorded here so this PRD does not make it worse, and so a reader who sees a bare `D3` or `A2` knows which register to open.

| Prefix | Meaning | Owner document | Collides with |
|---|---|---|---|
| `OD1`–`OD4` | Open decisions | Charter | — |
| `A1`–`A7` | Assumed defaults | Charter (A1 only), Addendum §2.1 | **`A1`–`A8` sprint-plan actions** |
| `D1`–`D8` | Legacy build decisions | Blueprint §7 | **`D1`–`D5` deviation register** |
| `D1`–`D5` | Provisional deviations | Deviation register | **`D1`–`D8` Blueprint** |
| `S1`–`S9` | Surgical inversion rows | Entry 006 §13, Entry 007 | **`S0`–`S6` sprints** |
| `S0`–`S6` | Sprints | Sprint plan §6 | **`S1`–`S9` Entry 006** |
| `G1`–`G10` | Governance addendum items | Addendum §9 | `G-01`–`G-06` guardrails below |
| `T1`–`T11` | State transitions | Addendum §3.1 | — |
| `TC1`–`TC9` | Technical constraints | Sprint plan §4 | — *(renamed from T to avoid T1–T11)* |
| `AT-xxx` | Acceptance tests | Addendum §8, Blueprint §14.8 | — |
| `SC1`–`SC6` | Success criteria | Sprint plan §7 | — |
| `Q0`–`Q6` | Decision requests | Sprint plan §8 | `Q-01`… below — **this PRD uses `Q0`–`Q6` directly rather than minting new ids** |

**New in this PRD, chosen to avoid every prefix above:** `O-xx` objectives · `NG-xx` non-goals · `K-xx` KPIs · `G-0x` guardrails *(hyphenated, distinct from Addendum `G1`–`G10`)* · `US-xx` user stories · `FR-xx` functional requirements · `NFR-xx` non-functional requirements · `SEC-xx` security · `TR-DM-xx` data model · `AC-xx` acceptance criteria · `DEP-xx` dependencies · `AS-xx` assumptions · `RK-xx` risks · `XF-xx` cross-functional tasks.

---

## 1. Executive Summary

For a single Chief Editor curating trending articles across professional-certification and AI topics, finding and vetting material consumes 3–5 hours per week across LinkedIn, Facebook, blogs, and guest platforms — and, more consequentially, nothing structurally prevents an unreviewed article from going live. This PRD defines a five-gate editorial pipeline in which virtual agents execute operational work under the Three Lines Model, every state transition is logged with who, when, and why, and independence is enforced at the Line 1 / Line 2 boundary. The primary success signal is **zero articles reaching publication without passing every gate in sequence**, with the time saving as the secondary benefit.

The problem is a **compliance-absence problem, not a dashboard problem** (Business Case). A tool that surfaced trending articles faster but still permitted an unreviewed publish would fail this PRD entirely.

---

## 2. Product Vision & Objectives

### 2.1 Vision Statement

Every published article carries a complete, tamper-evident record of who reviewed it, when, and why — so editorial trust is demonstrable from the audit log rather than asserted.

### 2.2 Problem Statement

| Dimension | Detail |
|---|---|
| **Who** | One human Chief Editor (Line 2), directing Line 1 agents across five pipeline roles |
| **What** | Trending articles must be found, verified, adapted, and reviewed before publication. Discovery is manual and slow; review is unenforced, so compliance depends on diligence rather than structure |
| **When / How often** | Continuous. Discovery daily; review on every article; the failure mode fires whenever attention lapses |
| **Cost of inaction** | 3–5 hours/week of manual hunting *(the project's one measured baseline)*, plus an unbounded tail risk: a single unreviewed publish that is factually wrong, defamatory, or subject to a regulatory takedown |
| **Evidence** | Charter, "Problem" and "What it replaces or earns"; Business Case, "What do you want to build". **Note the asymmetry:** the time saving is measured, the compliance risk is not quantified anywhere in the governing set. No incident data exists — this is a greenfield system |

### 2.3 Target Users & Personas

> **Adaptation.** The template assumes human personas. Here the primary *executors* are agents, and the sole human is a reviewer, not an operator. Agent personas are included because they are who the system is designed around — an unusual shape that follows directly from the Charter's agent-directed operating model.

| Persona | Role / Context | Line | Primary Need | Current Pain |
|---|---|---|---|---|
| **Chief Editor** | Sole human operator. The only Line 2 executor | Line 2 | See pipeline state at a glance; review at T5 with enough context to judge; never be the bottleneck for work that doesn't need judgment | Single point of failure. Addendum §6.4 documents the risk and specifies no mitigation beyond stalling |
| **Reporter agent** | Origination — finds and logs articles, tags at intake | Line 1 | Log a URL with topic tags and a trend signal without human handoff | — *(new capability)* |
| **Investigator agent** | Verification — validates source, confirms trend evidence | Line 1 | Source metadata and reliability tier available to validate against | **Blocked: `sources.reliability_tier` does not exist** (TC3) |
| **Journalist agent** | Standards fit — drafts the editorial adaptation | Line 1 | Preserve the original's meaning while adapting it | — |
| **Chief Journalist agent** | Operational final approval at T6 | Line 1 | Confirm all prior gates before releasing to publication | — |
| **Line 3 assurance** | Independent audit, triggered by risk signal | Line 3 | Report independently, sharing no data path with Line 1 or Line 2 | **Blocked: executor identity unspecified** (OD3, Q2) |
| *Reader — Agile/DevOps/ITIL professional* | Consumes published output | — | Timely, verified certification content | Not a system user; no requirement in this release |
| *Reader — AI practitioner* | Consumes published output | — | Discourse on agentic systems, guardrails, context engineering | Not a system user; no requirement in this release |

### 2.4 Strategic Objectives

| ID | Objective | Type | Traces to | Success Indicator |
|---|---|---|---|---|
| `O-01` | No article reaches publication without passing every gate in sequence | Business | Charter success criteria; Blueprint §1 Meaning Invariance Lock | `SEQUENCE_BYPASS_TOLERANCE` holds at 0, verified at the database |
| `O-02` | Every review decision is attributable — who, when, why — and the record cannot be altered | Business | Charter, "Every step is logged" | 100% of transitions carry non-null executor, timestamp, reason; `workflow_transitions` rejects UPDATE and DELETE |
| `O-03` ⚠ | Review independence is structurally enforced, not merely intended | Business | Charter OD2 *(**Open**)* | `INDEPENDENCE_BYPASS_TOLERANCE` at 0. **Reported as provisionally satisfied pending OD2 — never as unconditional** (register D1) |
| `O-04` | Reduce manual article hunting | User | Charter, "What it replaces or earns" | 3–5 h/week → measurably lower. The only objective with a real baseline |
| `O-05` | The Chief Editor can see and steer the whole pipeline without opening the database | User | Charter success criteria | Board filterable on state, topic, category, and Line |

> ⚠ **O-03 is provisional.** It depends on OD2, which is Open at Charter level. If OD2 resolves negatively, O-03 has no valid mechanism and Charter OD4 branch ② applies: pre-launch blocker.

### 2.5 Non-Goals

| ID | Non-Goal | Rationale | Source |
|---|---|---|---|
| `NG-01` | No mobile app — web only | Single operator, desktop workflow | Charter |
| `NG-02` | No multi-team accounts — one Chief Editor account | **v1 exclusion only.** "Operating model is one human" describes v1 and lapses when the business has more people. A tenancy boundary exists in the data model to preserve the option; **no multi-team capability is built, and `NG-02` stands.** Nothing forecloses later accounts for multiple natural persons with roles mapped to virtual agents or phase gates | Charter |
| `NG-03` | **No monetization features** | Charter-level v1 exclusion. **The repo currently ships Stripe scaffolding against this** — S0 removes it (X8) | Charter |
| `NG-04` | No automated Facebook publishing — manual cross-posting only | Requires Meta Business verification | Charter |
| `NG-05` | No real-time trend-detection algorithm — RSS intake only | Unvalidated; scoring formula is v0 and unreviewed | Charter |
| `NG-06` | No multi-language support | — | Charter |
| `NG-07` | No bookmarklet — copy-paste URL form only | Deferred to Week 2–3 | Charter, A7 |
| `NG-08` | No email or Slack notifications — in-app only | Deferred to Week 4–6 | Charter, A5 |
| `NG-09` | No Proposer / Critics / Judge governance model | OD4, Resolved-rejected for v1, with a two-branch reopening condition | Charter |
| `NG-10` | **No auto-advance on confidence score** | `INTELLIGENCE_LAYER.md` specifies "0.6 minimum to auto-advance." Every gate has a named executor; auto-advancing past one is a gate bypass by definition and would violate O-01 | TC9 — **new non-goal, added to prevent a specified behaviour from being built** |
| `NG-11` | **No fundraising or solicitation tied to editorial events** | Removed from the workflow entirely; requires independent legal and compliance review before any tooling | Entry 006 §13, Entry 007 |

### 2.6 Strategy-to-Execution Traceability Ladder

> **Adaptation.** The template's ladder starts at a Company OKR. This project's starts at the Charter, and three of its decisions are Open — so the ladder gains a rung above the objectives and a provisional marker below them. There is no Jira; the execution rung is the sprint plan.

```
Project Charter v1  (OD1–OD3 Open — constrains, does not close)
  └── Strategic Objective (O-0x)
       └── Persona Need (§2.3)
            └── User Story (US-xx)
                 └── Functional Requirement (FR-xx)   [⚠ if OD-dependent]
                      └── Technical Requirement (NFR-xx / TR-DM-xx / SEC-xx)
                           └── Sprint (S0–S6, sprint plan §6)
                                └── Acceptance Criterion (AC-xx ← AT-xxx)
```

| Charter anchor | Objective | User Outcome | Functional Req. | Technical Req. | Sprint |
|---|---|---|---|---|---|
| "No article reaches publication without passing every gate in sequence" | `O-01` | Gate-skipping is impossible, not merely discouraged | `FR-01, FR-02, FR-03` | `NFR-01, TR-DM-01` | `S1` |
| "Every step is logged" | `O-02` | Any decision can be reconstructed months later | `FR-06, FR-07` | `NFR-02, TR-DM-02` | `S1, S3` |
| OD2 ⚠ | `O-03` | The reviewer is structurally not the author | `FR-04, FR-05` | `NFR-03, SEC-01` | `S2` |
| "Replaces 3–5 h/week" | `O-04` | Discovery and drafting stop consuming the human | `FR-01, FR-09` | `NFR-05` | `S1, S4` |
| "Team can see and filter a board" | `O-05` | Pipeline state is legible at a glance | `FR-08` | `NFR-06` | `S3` |

---

## 3. Success Metrics

> **Read §3.5 before using any target below.** This is a greenfield system with **one measured baseline**. The template's own warning applies with unusual force here: "Without a baseline, targets are guesses." Targets are recorded as specified by the governing documents; baselines are recorded as `N/A — greenfield` where none exists, rather than invented.
>
> Every numeric target is a **named config variable**, per the project's standing rule that no success-scenario number appears as a literal (sprint plan §5).

### 3.1 North-Star Metric

| Metric | Definition | Baseline | Target | Window | Data Source | Owner |
|---|---|---|---|---|---|---|
| **Gate-sequence compliance** | Articles reaching `Published` having passed every state in `PIPELINE_ACTIVE_STATES` in order ÷ all articles reaching `Published` | **0% — the shipped seed data fails this today** (X3: no `Validated` state, so every seeded article skipped a gate) | 100% (`SEQUENCE_BYPASS_TOLERANCE` = 0) | Continuous from S1 | `workflow_transitions` | Line 2 |

> The north star is a compliance measure, not an engagement measure. That follows from the Business Case's framing: this is a compliance-absence problem. A tool with high usage and one gate bypass has failed.

### 3.2 Primary KPIs

| ID | Metric | Definition | Baseline | Target | Config variable | Window | Data Source | Owner | Objective |
|---|---|---|---|---|---|---|---|---|---|
| `K-01` | Articles logged | Articles entering the pipeline | N/A — greenfield | ≥ 5 | `SUCCESS_ARTICLES_LOGGED_MIN` | Week 1 | `articles` | Line 1 | O-04 |
| `K-02` | Articles published or ManualReady | Reaching `Published`, or a target at `ManualReady` with formatted content generated | N/A — greenfield | ≥ 2 | `SUCCESS_ARTICLES_PUBLISHED_MIN` | Week 1 | `publications` | Line 1 | O-04 |
| `K-03` | Audit completeness | Transitions with non-null executor, Line, timestamp, and reason ÷ all transitions | **0% — no `actor_id` column exists** (TC4) | 100% | — *(invariant)* | Continuous | `workflow_transitions` | Line 2 | O-02 |
| `K-04` | Board filter coverage | Filter dimensions operational ÷ `BOARD_FILTER_DIMENSIONS` | 0 of 4 | 4 of 4 | `BOARD_FILTER_DIMENSIONS` | S3 exit | UI | Line 1 | O-05 |
| `K-05` | Time-in-pipeline (median) | `Discovered` → `Published`, P50 | N/A — greenfield | < 5 days | `SLA_DWELL_HOURS` | Month 1 | `workflow_transitions` | Line 2 | O-04 |
| `K-06` | Approval rate | Articles reaching `Approved` ÷ articles logged | N/A — greenfield | > 60% | — | Month 1 | `articles` | Line 2 | O-04 |
| `K-07` | Manual hunting time | Chief Editor self-reported hours/week | **3–5 h/week** *(the one real baseline)* | Measurably lower | — | Month 3 | Self-report | Line 2 | O-04 |

> `K-07` is self-reported, which is weak instrumentation for the project's headline benefit. Recorded as-is rather than upgraded, because no better source exists and inventing one would not make it true.

### 3.3 Guardrail Metrics

> Metrics that must not degrade while pursuing the KPIs. **`G-05` is the most consequential row in this PRD** — it is the detector for the one condition the Charter names as a pre-launch blocker.

| ID | Metric | Definition | Baseline | Threshold | Window | Source | Owner |
|---|---|---|---|---|---|---|---|
| `G-01` | Sequence bypasses | Transitions accepted between non-adjacent states | **Unknown — unmeasurable today** (TC1: enforcement is advisory) | 0, no exceptions | Continuous | DB trigger rejections | Line 2 |
| `G-02` ⚠ `[Q11]` | Independence bypasses | T5/T6 crossings without Line separation, excluding logged overrides | Unknown | 0. **Reported provisionally, pending OD2** | Continuous | `judgment_independence_status` **(pending Q11 — becomes `line_boundary_crossed` if the rename is confirmed)** | Line 2 |
| `G-03` | HumanOverride rate | `event_type = HumanOverride` ÷ all transitions | N/A | **No threshold set — deliberately.** A rising rate means the agent-directed model is not holding, but no governing document specifies an acceptable level. Instrument and observe; setting a threshold now would be inventing one | Rolling 7-day | `workflow_transitions` | Line 2 |
| `G-04` | Return-loop escalations | Articles hitting `RETURN_LIMIT_BEFORE_ESCALATION` | N/A | Observe | Rolling 30-day | `articles.return_count` | Line 2 |
| `G-05` ⚠ | **Line 1 / Line 2 judgment agreement rate** | Proportion of articles where the Line 2 review reaches the same conclusion the Line 1 draft implied | N/A | **An agreement rate approaching 100% is the OD2 failure signal**, not a success signal — it suggests Line separation is not producing distinct judgment. Threshold unset pending Q4 | Rolling 30-day | Derived | Line 3 |
| `G-06` | Audit mutability | Successful UPDATE or DELETE on `workflow_transitions` | **Currently permitted** — `0001` grants `for all using (true)` | 0 | Continuous | DB permissions | Line 2 |

> **Why `G-05` matters more than its position suggests.** Addendum §9 G9 defers Line-separation verification to "post-launch monitoring." But OD2 resolving negatively is a *pre-launch* blocker (Charter OD4 branch ②). A detector that only fires post-launch reports the blocker after the thing it was meant to block. Raised as **Q4**.

### 3.4 Instrumentation & Measurement Plan

| Metric | Instrumentation | Trigger | Storage | Status |
|---|---|---|---|---|
| `G-01`, `G-06` | Postgres trigger rejection count | Any attempted invalid write | DB log | **Planned — S1.** Cannot be instrumented before TC1's triggers exist |
| `K-03`, `G-02`, `G-03` | Row written before every state change | Every transition | `workflow_transitions` | **Planned — S1/S2.** Blocked on `actor_id` (TC4) |
| `K-01`, `K-02`, `K-04`, `K-06` | Direct query | On read | `articles`, `publications` | Planned — S3/S4 |
| `K-05`, `G-04` | Derived from transition timestamps | On read | `workflow_transitions` | Planned — S3 |
| `G-05` | Comparison of Line 1 draft disposition against Line 2 outcome | At T5 | Derived | **Blocked on Q4** |
| `K-07` | Self-report | Weekly | None | **No instrumentation. Accepted limitation** |

### 3.5 Measurement honesty statement

Five of seven KPIs have no baseline because the system does not exist yet. Three metrics are **currently unmeasurable**, not merely unmeasured: `G-01` and `G-06` because enforcement is advisory until TC1's triggers land, and `K-03` because no executor identity column exists (TC4).

This means **no KPI in §3.2 can be judged before S1 completes**, and the north-star metric currently reads 0% against the shipped seed data. That is the honest baseline. Recording it as "N/A — new system" would have concealed a real defect.

---

## 4. User Stories & Use Cases

| ID | Persona | Story | Priority | Linked FRs | Linked ACs | Depends on | Sprint | Edge cases / unhappy paths |
|---|---|---|---|---|---|---|---|---|
| `US-01` | Reporter agent | As a Reporter agent, I want to log an article by URL with topic tags and a trend signal, so that it enters the pipeline without human handoff | P0 | FR-01 | AC-01, AC-02 | — | S1 | Duplicate URL → blocked (**AC-02 cannot pass today — no unique index**, TC5). Metadata extraction fails → nullable fields flagged for the Investigator |
| `US-02` | Investigator agent | As an Investigator agent, I want to validate the source and confirm trend evidence, so that unverified material never reaches drafting | P0 | FR-02 | AC-03 | US-01 | S1 | **Blocked: `sources.reliability_tier` does not exist**, so T2's required fields cannot be satisfied (TC3) |
| `US-03` | Journalist agent | As a Journalist agent, I want to draft the editorial adaptation against a meaning-invariance checklist, so that adaptation does not distort the original | P0 | FR-03 | AC-04 | US-02 | S1 | Angle drifts from the one identified at T3 → `plan_deviation` flag (Entry 007 S2) |
| `US-04` | Chief Editor | As the Chief Editor, I want T5 review to be mine alone and recorded as mine, so that accountability is unambiguous | P0 | FR-04 | AC-05, AC-06 | US-03 | S2 | Agent assistance recorded as `assisting_agent_id`, never as executor. **The shipped seed violates this** (X4) |
| `US-05` ⚠ | Chief Editor | As the Chief Editor, I want the system to refuse to mark a transition independent when it isn't, so that compliance is never silently assumed | P0 | FR-05 | AC-07, AC-08 | US-04 | S2 | Chief Editor executes a Line 1 gate → `HumanOverride` + `override_not_four_eyes`, allowed but never counted as compliant. ⚠ OD2 |
| `US-06` | Chief Editor | As the Chief Editor, I want to return an article with a mandatory reason, so that the author knows what to fix and the reason is permanent | P0 | FR-06 | AC-09, AC-10 | US-03 | S1 | Return without reason → blocked. Third return to the same state → auto-escalate |
| `US-07` | Chief Editor | As the Chief Editor, I want an append-only log answering who, when, and why for every transition, so that trust is demonstrable rather than asserted | P0 | FR-07 | AC-11, AC-12 | US-01 | S1, S3 | **Log is currently mutable by anyone** (G-06). Revision reasons must be undeletable |
| `US-08` | Chief Editor | As the Chief Editor, I want to filter the board by state, topic, category, and Line, so that I can steer without opening the database | P0 | FR-08 | AC-13 | US-07 | S3 | Filter with no matches → explicit empty state, not a blank board |
| `US-09` | Chief Journalist agent | As a Chief Journalist agent, I want approval to trigger publication to WordPress or mark LinkedIn ready, so that approved work ships without manual re-entry | P0 | FR-09 | AC-14, AC-15 | US-05 | S4 | Credentials absent → `MockPublished`, which does **not** satisfy Published. Partial failure across targets → **not representable today** (TC2) |
| `US-10` | Chief Editor | As the Chief Editor, I want to confirm a manual LinkedIn publish by entering the live URL, so that manual targets are audited identically to automated ones | P1 | FR-10 | AC-16 | US-09 | S4 | First live URL flips the article to `Published`; subsequent targets do not |
| `US-11` | Line 3 assurance | As Line 3, I want to audit an article on a risk trigger and report without a data path back to Line 1 or Line 2, so that assurance is not a rubber stamp | P1 ⚠ | FR-11 | AC-17 | US-07 | S5 | **Blocked: executor identity unspecified** (OD3, Q2). If Line 3 shares an identity with Line 1, it is not Line 3 |
| `US-12` | Chief Editor | As the Chief Editor, I want Line 1 to keep working while I am unavailable, so that my absence delays review rather than halting the pipeline | P1 | FR-12 | AC-18 | US-04 | S5 | Under `CHIEF_EDITOR_ABSENCE_DEGRADED_HOURS` is already covered by Addendum §6.4. **Only the >48h case is new** (Entry 007 S7, EMS-corrected) |
| `US-13` | Chief Editor | As the Chief Editor, I want an external regulatory or court order to force retraction immediately, so that a binding order is not queued behind internal review | P1 | FR-13 | AC-19 | US-09 | S5 | `regulatory_retraction_order` = true bypasses T8 **deliberation only** — *whether* to retract is not open when a court has ordered it. It does **not** bypass publication mechanics: the retraction notice is still drafted, still mirrored to every target the original reached, and still logged (`G23`). Internal low-risk concerns stay in the normal revision path (Entry 007 S3) |
| `US-14` | Chief Editor | As the Chief Editor, I want the defined critical continuity conditions shown in one place, so that a condition **nobody is independently watching** is at least **continuously visible** | P1 | FR-14 | AC-21 | FR-06, FR-08, FR-09, FR-12, FR-13 | S3 | A condition that has never fired must render as **not observed**, never blank — an empty reading is indistinguishable from a healthy one |

**Priority discipline.** Ten of thirteen stories are P0. That would normally be P0 inflation — but the MoSCoW test is "if we cut this, does the feature still solve the core problem?" The core problem is compliance absence, so every story on the gate-sequence and audit path is genuinely must-have. The three P1s (US-11, US-12, US-13) are assurance and resilience: the pipeline solves the stated problem without them.

---

## 5. Functional Requirements

| ID | Requirement | Priority | Objective | User Story | AC | Owner | Sprint | Provisional? |
|---|---|---|---|---|---|---|---|---|
| `FR-01` | Log an article from a URL with ≥1 topic tag and a trend signal; article enters at the pipeline entry state | P0 | O-01, O-04 | US-01 | AC-01, AC-02 | Line 1 | S1 | — |
| `FR-02` | Validate source and confirm trend evidence as two distinct transitions (T2, T3), not one | P0 | O-01 | US-02 | AC-03 | Line 1 | S1 | — |
| `FR-03` | Draft the editorial adaptation with a completed meaning-invariance checklist and ≥1 publication target | P0 | O-01 | US-03 | AC-04 | Line 1 | S1 | — |
| `FR-04` ⚠ | T5 review is executed by a Line 2 human; agent contribution is metadata, never the executor | P0 | O-03 | US-04 | AC-05, AC-06 | Line 2 | S2 | **OD1** |
| `FR-05` ⚠ | Classify every transition's independence as `satisfied`, `not_applicable`, or `override_not_four_eyes`; never silently treat an override as compliant | P0 | O-03 | US-05 | AC-07, AC-08 | Line 2 | S2 | **OD2** |
| `FR-06` | Return an article to a prior state with a mandatory reason; auto-escalate at the return limit | P0 | O-01, O-02 | US-06 | AC-09, AC-10 | Line 1/2 | S1 | — |
| `FR-07` | Write an append-only transition record before every state change, carrying executor identity, Line, timestamp, and reason | P0 | O-02 | US-07 | AC-11, AC-12 | Line 1 | S1 | — |
| `FR-08` | Present a board grouped by state and filterable on every `BOARD_FILTER_DIMENSIONS` value | P0 | O-05 | US-08 | AC-13 | Line 1 | S3 | — |
| `FR-09` | On approval, publish to WordPress or mark a target ManualReady with formatted content; per-target status | P0 | O-04 | US-09 | AC-14, AC-15 | Line 1 | S4 | — |
| `FR-10` | Confirm a manual publish by entering a live URL; article becomes Published on the first live target | P1 | O-02, O-04 | US-10 | AC-16 | Line 2 | S4 | — |
| `FR-11` ⚠ | Trigger a Line 3 audit on defined risk conditions; Line 3 reports independently | P1 | O-03 | US-11 | AC-17 | Line 3 | S5 | **OD3** |
| `FR-12` | Operate in degraded mode when the Chief Editor is absent beyond the configured threshold | P1 | O-01 | US-12 | AC-18 | Line 1 | S5 | — |
| `FR-13` | Force immediate retraction on an external regulatory or court order, bypassing normal revision | P1 | O-01 | US-13 | AC-19 | Line 2 | S5 | — |
| `FR-14` | Present a business-continuity surface displaying the defined critical observations, each with its current value and when it was last evaluated | P1 | O-01 | US-14 | AC-21 | Line 2 | S3 | — |

> **Three FRs are provisional.** FR-04 (OD1), FR-05 (OD2), FR-11 (OD3). Each is buildable now under Entry 007's Phase 0 provisional acceptance, behind a config flag. **None may be reported as finally satisfied until its OD is ratified at Charter level.**

### FR-05 detail — independence classification

The most consequential requirement, and the one most at risk of being quietly overstated.

- **Behavior:** on every transition, evaluate the executor's Line against the target gate's Line. Crossing Line 1 ↔ Line 2 → `satisfied`. Within a Line → `not_applicable`. Executor outside the target Line → `override_not_four_eyes` and `event_type = HumanOverride`.
- **Inputs:** executor identity and Line assignment, source state, target state, gate Line.
- **Outputs** ⚠ `[Q11]`**:** a `judgment_independence_status` on the transition record. Never null, never inferred at read time. *(⚠ inherited from FR-05's own OD2-provisional status above, per the "Three FRs are provisional" note; `[Q11]` is the separate, non-OD field-rename question — if confirmed, this becomes two always-non-null outputs, `line_boundary_crossed` and `identity_assurance`, plus a separate `judgment_independence` output that is the opposite of this sentence: null until an instrument exists.)*
- **Edge cases:**
  - Same actor holds a Line 1 and a Line 2 role → **hard block.** Not a config value; a Three Lines Model requirement.
  - Emergency publish → bypasses the independence check only. Does not skip gates, required fields, audit logging, or publication confirmation. Logged as `EmergencyBypass` (enum) with the reason string carrying the lowercase `emergency_bypass` label — **two distinct fields**, a conflation two governing documents have each had to correct once.
  - Line 2 executes a Line 1 gate when no agent is available → allowed, logged as override, **not** counted toward `G-02`.
- **Out of scope:** deciding *whether* Line separation is sufficient independence. That is OD2, and it is not this PRD's to answer.

---

## 6. Technical Requirements

### 6.1 Architecture

| Aspect | Description | Linked FRs |
|---|---|---|
| **Pattern** | Next.js App Router monolith on Vercel; Supabase PostgreSQL. **Invariants enforced in the database, not the application layer** — see NFR-01 | All |
| **Stack** | Next.js 15 / React 19 / TypeScript / Tailwind v4 / Supabase (`@supabase/ssr`) / Bun / Vercel | All |
| **Ratification status** | A2 was re-scoped to this stack by the Chief Editor. **Recorded in the Addendum's `Resolved?` column, not `Ratified?`** — see Q0. Blueprint and Business Case still specify FastAPI | — |
| **Publish path** | Next.js route handler, **not** a Supabase Edge Function — no Edge Functions exist, and adding them means a second deploy pipeline and secret store against `CLAUDE.md`'s deploy-by-git rule (TC8, Q3) | FR-09 |
| **Deployment** | Git push to `main` → Vercel. Never `vercel deploy` | — |

### 6.2 API Contracts

| ID | Endpoint | Method | Purpose | Auth | FRs | Status |
|---|---|---|---|---|---|---|
| `TR-API-01` | `/api/articles` | POST | Log an article | None in Phase 0 ⚠ | FR-01 | Drafted |
| `TR-API-02` | `/api/articles/[id]/transition` | POST | Execute a gate transition with actor context | None in Phase 0 ⚠ | FR-02…FR-06 | Drafted |
| `TR-API-03` | `/api/publish/wordpress` | POST | WordPress REST publish. **The first genuine need for `SUPABASE_SERVICE_ROLE_KEY`**, declared in `.env.example` and used nowhere | Server-only credentials | FR-09 | Drafted |
| `TR-API-04` | `/api/publications/[id]/confirm` | POST | Confirm a manual publish | None in Phase 0 ⚠ | FR-10 | Drafted |

> ⚠ **No API authentication exists in Phase 0.** `CLAUDE.md` mandates demo-first with no login wall, so every endpoint is anonymous. Executor identity is therefore *self-asserted* until S6. This is a stated Phase 0 limitation (X7), not a satisfied requirement — and it is why NFR-01 puts enforcement in the database.

### 6.3 Data Model

| ID | Entity | Key fields | Status | FRs |
|---|---|---|---|---|
| `TR-DM-01` | `articles` | + `revision_reason`, `revision_target_state`, `return_count`, `emergency_publish`, `source_id`, `source_author`, `source_published_date`, `editorial_angle`, `editorial_adaptation`; **unique index on `url`**; ten-state enum | **Extend — S1.** Current enum omits `Discovered`, `Validated`, `Needs Revision` and collapses T2/T3 (X3) | FR-01…FR-06 |
| `TR-DM-02` `[Q11]` | `workflow_transitions` | + `actor_id`, `line_assignment`, `judgment_independence_status` **(`[Q11]` pending — do not write this field name; see sprint plan S1 migration note for the fallback fields. No OD dependency — this is a Chief Editor naming decision, not a Charter-level question, so it carries no ⚠.)**, `event_type`, `agent_id`, `agent_run_id`, `supervising_human_id`, `assisting_agent_id`; `actor_type` + `system` | **Extend — S1, blocked on Q11 for the field name.** No executor identity column exists at all (TC4) | FR-05, FR-07 |
| `TR-DM-03` | `publication_targets`, `publications` | Per-article, per-target status across the seven-value enum, retry count, `published_url` | **Create — S1.** A single `publication_target` enum cannot represent "WordPress Published + LinkedIn ManualReady" (TC2) | FR-09, FR-10 |
| `TR-DM-04` | `sources` | + `reliability_tier`, `ingestion_method`; unique on name | **Extend — S1.** Absence blocks T2's required fields and the trend-score tier weight (TC3) | FR-02 |
| `TR-DM-05` | `topics` | + `evolves_from`, `evolution_notes`, `scope_boundary` | **Extend — S1.** Absence blocks editorial-priority lineage depth (TC3) | FR-01 |
| `TR-DM-06` | `allowed_transitions` | from_state, to_state, gate_role, line | **Create — S1.** Backs the NFR-01 trigger; makes the sequence data-driven rather than hard-coded | FR-02, FR-06 |

**Retention:** rejected and archived after `DATA_RETENTION_ARCHIVE_DAYS`; published kept indefinitely; **`workflow_transitions` never deleted.**
**Report Immutability (PSK-10):** An issued report is never edited and never deleted; a superseded report is answered by issuing a new report citing the original. The correction ladder — Clarify → Correction → Retraction — is the editorial restatement mechanism. *This states the rule the design must satisfy; the report record itself is designed in S1 (`GA1`).* **Scope boundary:** this is the **report** rule and does not restate `NFR-02`'s `workflow_transitions` wording, which awaits counsel (T2/TX).
**PII:** articles sourced from individuals on social platforms may carry personal data. GDPR handling is deferred to Phase 2 (Addendum G2) — recorded as an accepted gap, not a solved problem.

### 6.4 Non-Functional Requirements

> Derived from the nine measured technical constraints in sprint plan §4, not from generic quality wishes.

| ID | Category | Requirement | Target | Measurement | FRs | Constraint |
|---|---|---|---|---|---|---|
| `NFR-01` | **Integrity** | Gate sequence enforced by a Postgres trigger, not application code | Invalid transition rejected **at the database**, including a direct anon-key write | Attempt the bypass with the Supabase JS client and assert rejection | FR-02, FR-06 | **TC1** |
| `NFR-02` | Auditability | `workflow_transitions` append-only; the transition row precedes the state change | UPDATE and DELETE revoked; 0 orphan state changes | Permission check + reconciliation query | FR-07 | TC1 |
| `NFR-03` `[Q11]` | Independence | Independence status computed on every transition, never null, never inferred at read | 100% non-null | Column constraint | FR-05 | **`[Q11]` pending, no ⚠ — targets `judgment_independence_status`, which Q11 retires; this is a naming decision, not an OD. If confirmed, split: `line_boundary_crossed`/`identity_assurance` stay never-null; `judgment_independence` is the opposite, null until an instrument exists** |
| `NFR-04` | Verifiability | Test runner and CI exist before any sprint claims a DoD | `bun test` and CI green | CI status | All | **TC6** |
| `NFR-05` | Resilience | Publication retries to `PUBLISH_RETRY_MAX`, then ManualReady | Retry honoured; **backoff interval is aspirational — no scheduler exists** | Job table inspection | FR-09 | **TC7** |
| `NFR-06` | Usability | Board renders and filters `SUCCESS_ARTICLES_LOGGED_MIN` articles without pagination | 4 of 4 dimensions operational | Manual + integration test | FR-08 | — |
| `NFR-07` | Secret handling | Publication credentials server-side only, never client-bundled | 0 secrets in the client bundle | Bundle inspection | FR-09 | — |
| `NFR-08` | Observability | Every transition reconstructable from the log alone | 100% carry who, when, why | Query | FR-07 | TC4 |

> **NFR-01 is the load-bearing one, and it is forced rather than chosen.** The anon key is public, RLS is permissive, `lib/supabase/server.ts` uses the anon key too, and Phase 0 has no auth — so no layer above the database holds more authority than a browser. Application-layer validation is advisory here. O-01 is only achievable in Postgres.

> **NFR-04 exists because none of the others are currently checkable.** There is no test runner, no CI, and `next.config.ts` disables type and lint gates at build. A project whose premise is enforced compliance gates has none in its own delivery pipeline.

### 6.5 Security & Compliance

| ID | Requirement | Standard | FRs | Owner | Status |
|---|---|---|---|---|---|
| `SEC-01` | Line 1 and Line 2 roles are never held by the same identity | Three Lines Model (IIA, 2020, updated 2024) | FR-04, FR-05 | Line 2 | Drafted — S2 |
| `SEC-02` | Publication credentials in server env only | OWASP A02 | FR-09 | Line 1 | Drafted — S4 |
| `SEC-03` | RLS replaced with owner- and role-scoped policies; only Line 2 executes T5 and T11 | — | All | Line 2 | **S6 — cannot be called done while OD1–OD3 are unratified** |
| `SEC-04` | GDPR Art. 17 erasure for personal data in sourced articles | GDPR Art. 17 | FR-01 | **Absent — no legal function** | **Deferred to Phase 2** (Addendum G2) |
| `SEC-05` | Pre-publication legal review for high-sensitivity content ahead of any emergency bypass | Investigative-journalism practice (Entry 006 §13, S4) | FR-13 | **Absent — no legal function** | **Cannot be discharged internally** |

> **SEC-04 and SEC-05 have no owner.** This project has no legal function (§0.3). Both are recorded as unownable rather than assigned to the Chief Editor, who is not qualified to discharge them. This is a real pre-production gap, not a documentation formality.

### 6.6 Compatibility & Migration

| Aspect | Detail |
|---|---|
| **Platforms** | Web only, desktop-first. WordPress REST; LinkedIn manual until OAuth review; Facebook manual in v1 |
| **Migration** | `0001_init.sql` is never edited. `0002_three_lines.sql` is additive: new state enum alongside the old, backfill, cut over, drop later. **Written but not applied under this plan** |
| **Backward compatibility** | Seed data must survive migration with corrected states. The seed rows encoding an agent-executed T5 are **corrected, not preserved** (X4) |
| **Rollback** | Git revert plus a down-migration per `0002` step. **Untested — no staging environment exists** |

---

## 7. Release Scope

### 7.1 Product Scope Matrix

> **Classification rule.** Requirement type and scope are independent dimensions. A functional requirement is not automatically Product Scope, and a non-functional requirement is not automatically Project Scope. An item belongs in Product Scope when it is anchored to, or is a necessary elaboration of, a Customer Request. Everything else belongs in Project Scope and supports the Customer Request indirectly.

| Requirement | Type | Product capability or quality | Customer anchor | Anchor status | Sprint |
|---|---|---|---|---|---|
| FR-01 | Functional | Log an article by URL | CR-09 | Full | S1 |
| FR-02 | Functional | Validate and investigate as distinct gates | CR-10 | Full | S1 |
| FR-03 | Functional | Draft with meaning-invariance checklist | CR-10 | Full | S1 |
| FR-04 ⚠ | Functional | Line 2 review at T5 | CR-10 | **Partial** — the gate is requested; human-only execution is team-added | S2 |
| FR-05 ⚠ | Functional | Prevent a bypass from being treated as compliant | CR-19 | **Partial** — zero bypasses is requested; the four-eyes mechanism is team-added | S2 |
| FR-07 | Functional | Preserve who, when, and why for every transition | CR-07, CR-11 | Full | S1 |
| FR-08 | Functional | Show and filter the editorial board | CR-13 | Full; Line filter is an elaboration | S3 |
| FR-09 | Functional | Publish to WordPress or mark LinkedIn ManualReady | CR-12 | Full | S4 |
| FR-10 | Functional | Confirm manual publication with a live URL | CR-12 | **Partial** — necessary elaboration of ManualReady | S4 |
| NFR-01 | Non-functional — integrity | Reject invalid gate transitions regardless of write path | CR-10, CR-19 | Derived quality; the Postgres-trigger mechanism is Project Scope | S1 |
| NFR-02 | Non-functional — auditability | Keep the transition history immutable and complete | CR-07, CR-11 | Derived quality | S1 |
| NFR-05 | Non-functional — resilience | Fail publication safely to ManualReady after bounded retries | CR-12 | Derived quality | S4 |
| NFR-06 | Non-functional — usability | Render and filter the requested board at the success-scenario volume | CR-13, CR-19 | Derived quality | S3 |
| NFR-08 | Non-functional — observability | Reconstruct every transition from the log alone | CR-07, CR-11 | Derived quality | S1 |
| SEC-03 | Non-functional — access control | Restrict the production system to the single Chief Editor account and scoped roles | CR-15 | Derived quality; deliberately deferred to S6 | S6 |
| TR-DM-01 | Data requirement | Represent articles and trend-signal inputs | CR-03, CR-06 | Direct; CR-06 remains partially implementable | S1 |
| TR-DM-02 | Data requirement | Represent who, when, why, and actor/Line context for transitions | CR-07, CR-11 | Direct | S1 |
| TR-DM-03 | Data requirement | Represent per-target WordPress and LinkedIn publication status | CR-08, CR-12 | Direct | S1 |
| TR-DM-04 | Data requirement | Represent article sources | CR-05 | Direct | S1 |
| TR-DM-05 | Data requirement | Represent topic taxonomy | CR-04 | Direct | S1 |
| TR-DM-06 | Data/integrity requirement | Represent the allowed sequential transitions | CR-10, CR-19 | Derived quality | S1 |

#### Product-scope gaps

| Customer request | Missing or incomplete Product Scope | Classification |
|---|---|---|
| CR-06 | Trend-signal scoring is not computable on the current schema | Partial non-functional/data requirement — FB-06 |
| CR-14 | No FR requires AI topic, source, and trend-signal tagging at the Reporter gate | **Missing functional requirement — FB-05** |

### 7.2 Project Scope Matrix

| Scope ID | Requirement type | Supporting item | Why it is Project Scope | Serves | Sprint |
|---|---|---|---|---|---|
| FR-06 | Functional | Return with mandatory reason and escalation | No Customer Request origin; Addendum-defined workflow support | CR-10, CR-11 indirectly | S1 |
| FR-11 ⚠ | Functional | Triggered Line 3 audit | No Customer Request origin; governance assurance | CR-19 indirectly | S5 |
| FR-12 | Functional | Degraded mode after prolonged Chief Editor absence | No Customer Request origin; operating resilience | CR-10 indirectly | S5 |
| FR-13 | Functional | Regulatory/court-order retraction | No Customer Request origin; external compliance response | CR-12 indirectly | S5 |
| FR-14 | Functional | Business-continuity observability surface | **No Customer Request origin.** Chief Editor direction, recorded as condition `C-13` on `D-57` — the compensating control for v1 having no independent assurance | CR-10 indirectly | S3 |
| NFR-03 | Non-functional — independence | Independence evaluator | Team-selected governance mechanism, not requested by the customer | FR-05 | S2 |
| NFR-04 | Non-functional — verifiability | Test runner and CI | Delivery assurance; does not change customer-visible product behaviour | All Product Scope | S0 |
| NFR-07 | Non-functional — secret handling | Server-only credentials | Delivery/security control not stated by the customer | FR-09 | S4 |
| NFR-01 / implementation clause | Technical enabler | Postgres transition trigger | The Product Scope outcome is rejection of invalid transitions; the database mechanism is a project choice | NFR-01 | S1 |
| SEC-01 | Security/governance | Line-exclusivity constraint | Team-selected Three Lines control | FR-04, FR-05 | S2 |
| SEC-02 | Security | Publication credential isolation | Internal implementation control | FR-09 | S4 |
| SEC-04 | Compliance | GDPR erasure handling | External compliance obligation, unrequested and deferred | TR-DM-01 | Phase 2 |
| SEC-05 | Compliance | Pre-publication legal review for high-sensitivity content | External assurance obligation with no internal owner | FR-13 | S5 |
| TR-API-01…04 | Technical | HTTP endpoint contracts | Implementation interface chosen by the project | FR-01…FR-10 | S1–S4 |
| SHARED-01 | Technical/config | `build-config.ts` and flags | Shared delivery infrastructure | All Product Scope | S0 |
| SHARED-02 | Governance | Decision and config logs | Shared governance infrastructure | All provisional Product Scope | S0 |
| NG-10 | Scope control | No confidence-score auto-advance | Team-added constraint preventing a bypass | CR-19 indirectly | S0 |
| NG-11 | Scope control | No fundraising tied to editorial events | Team-added legal/compliance boundary | Customer Request indirectly | S0 |

> Data contracts `TR-DM-01…06` remain in Product Scope because the Customer Request explicitly names the tracked objects and workflow semantics. Writing and applying migration `0002` is Project Scope execution work; it does not move those data requirements out of Product Scope.

### 7.3 Functional-to-Quality/Technical Cross-Reference

| Functional requirement | Served or constrained by | Coverage |
|---|---|---|
| FR-01 | NFR-04, NFR-08, TR-DM-01, TR-DM-05, SHARED-01 | Covered |
| FR-02 | **NFR-01**, NFR-04, TR-DM-04, TR-DM-06 | Covered |
| FR-03 | NFR-04, TR-DM-01 | Covered |
| FR-04 ⚠ | NFR-03, SEC-01, NFR-04 | Covered — **pending OD1** |
| FR-05 ⚠ | NFR-03, SEC-01, NFR-08, NFR-04 | Covered — **pending OD2** |
| FR-06 | NFR-01, NFR-02, TR-DM-01, TR-DM-06 | Covered |
| FR-07 | NFR-02, NFR-08, TR-DM-02 | Covered |
| FR-08 | NFR-06, NFR-04 | Covered |
| FR-09 | NFR-05, NFR-07, SEC-02, TR-DM-03 | Covered |
| FR-10 | NFR-02, TR-DM-03 | Covered |
| FR-11 ⚠ | NFR-08 | **⚠ Under-specified — executor identity unresolved (OD3, Q2). Cannot be estimated** |
| FR-12 | NFR-05 | Covered |
| FR-13 | NFR-02, **SEC-05 (unownable)** | **⚠ Under-specified — no legal function** |
| FR-14 | NFR-05, NFR-08 | Covered — **displays** existing observations; defines no new measurement |

#### Coverage Summary

| Status | Count | FRs |
|---|---|---|
| **Covered** | 11 | FR-01…FR-10, FR-12 |
| **Under-specified** | 2 | FR-11 (OD3), FR-13 (no legal owner) |
| **Uncovered** | 0 | — |

> Both under-specified FRs are P1 and land in S5. Neither blocks the MVP milestone. Both are blockers for their own estimation — they should not be sprint-planned until Q2 and SEC-05's ownership are resolved.

### 7.4 Release Milestones

> Milestones are the sprint plan's S0–S6. No dates: this is a one-person project with no committed delivery schedule, and inventing dates would make the milestone table fiction.

| Milestone | Scope | Dependencies | Exit Criteria | Status |
|---|---|---|---|---|
| **M0 — Foundation** (S0) | SHARED-01, SHARED-02, NFR-04 | Q0 | Config spine exists; **CI green**; no literals in logic; Stripe removed | Not started |
| **M1 — Core pipeline** (S1) | FR-01, FR-02, FR-03, FR-06, FR-07; TR-DM-01…06; NFR-01, NFR-02, NFR-08 | M0 | **Trigger written and unit-tested; live anon-key DB rejection unverified until `DEP-05` is answered (A26a — the exit criterion as originally written required a live database while `DEP-05` is deliberately withheld, which is a contradiction, not a deferral).** AC-01…AC-04, AC-09…AC-12 pass against the unit-tested trigger | Not started |
| **M2 — Independence** (S2) | FR-04, FR-05; NFR-03, SEC-01 | M1; Q1 | AC-05…AC-08 pass. **Phase 0 done only — production done needs OD1 and OD2 ratified** | Not started |
| **M3 — Visibility** (S3) | FR-08; NFR-06 | M1 | AC-13 passes; K-04 at 4 of 4 | Not started |
| **M4 — Publication** (S4) | FR-09, FR-10; NFR-05, NFR-07, SEC-02 | M1; Q3, Q5 | AC-14…AC-16 pass; K-02 met. **Done-with-exception: reassignment deferred to OD3** | Not started |
| **M5 — Assurance** (S5) | FR-11, FR-12, FR-13 | M2; Q2, Q4 | AC-17…AC-19 pass; every Entry 007 row flag-mapped | Not started |
| **M6 — Lock down** (S6) | SEC-03 | M1–M5; **OD1, OD2, OD3 ratified**; G10 | Anonymous cannot execute any gate. **Cannot be called done while any OD is unratified** | Blocked |

### 7.5 Dependencies

| ID | Dependency | Type | Owner | Blocking | Status |
|---|---|---|---|---|---|
| `DEP-01` | **OD1 ratified at Charter level** | Governance | Chief Editor | M2 production done; M6 | **Open** |
| `DEP-02` | **OD2 ratified at Charter level** | Governance | Chief Editor | M2 production done; M6. **Negative resolution = pre-launch stop** | **Open** |
| `DEP-03` | **OD3 — agent headcount and roster shape** | Governance | Chief Editor | FR-11, M4 reassignment, M6 | **Open — no number exists at any level** |
| `DEP-04` | Q0 — A2 ratification recorded in the Ratification Log, and Blueprint/Business Case amended off FastAPI | Governance | Chief Editor | Deviation register D4's closure | **Open — minutes to resolve** |
| `DEP-05` | Supabase credentials pulled to `.env.local` | Technical | Line 1 | M1 | **Deliberately withheld under the current plan** |
| `DEP-06` | WordPress application password | Technical | Line 2 | M4 real publish *(mock mode works without)* | Not started |
| `DEP-07` | LinkedIn OAuth app review | External | Line 2 | Automated LinkedIn publish *(ManualReady works without)* | Not started |
| `DEP-08` | **Legal function for SEC-04, SEC-05** | Compliance | **Absent** | Production go-live | **Unowned** |
| `DEP-09` | **Business Charter and exit strategy** | Governance | Chief Editor | Production go-live only — explicitly not Phase 0 | **Open** (Entry 006 §7, Entry 007 §3) |
| `DEP-10` | Git identity verified on the GitHub account | Technical | Chief Editor | First push | **Open** — `CLAUDE.md` pins a different address |

### 7.6 Assumptions & Risks

| ID | Type | Description | Impact | Likelihood | Mitigation | Owner |
|---|---|---|---|---|---|---|
| `AS-01` | Assumption | A1–A7 stand as provisional defaults for prototype development | If overridden, config changes; no code change | Low | Every default is a named config variable | Line 2 |
| `AS-02` | Assumption | Line separation produces genuinely distinct judgment | **If wrong, OD2 resolves negatively and production halts** | **Unknown — this is precisely what OD2 asks** | `G-05` as the detector; Q4 | Line 3 |
| `AS-03` | Assumption | One Line 1 identity across gates is acceptable for Phase 0 | If wrong, executor model reworked in S2 | Medium | Register D2; roster UNSET pending Q1 | Line 2 |
| `AS-04` | Assumption | Vercel + Supabase suffices without a queue | Retry granularity degrades | Medium | Q5 | Line 1 |
| `RK-01` | Risk | **Agents in different Lines produce identical judgments from shared training data** | **Pre-launch blocker. Charter OD4 branch ②** | Unknown | `G-05`; OD4 reopens if it fires | Line 3 |
| `RK-02` | Risk | Chief Editor unavailable — sole Line 2 executor | Pipeline stalls at T5 | Medium | Degraded mode (FR-12); Acting Chief Editor via board-approved LOA (Entry 007 S5) | Line 2 |
| `RK-03` | Risk | **A publish occurs that should not have** | The failure this system exists to prevent | Low once NFR-01 lands, **high today** | NFR-01 at the DB; FR-13 retraction | Line 2 |
| `RK-04` | Risk | The plan pack is built from instead of the governing set | Wrong product — no Lines, no return path, agent on the Line 2 gate | **Realised once already** — it is the committed schema | `docs/README.md`; `CLAUDE.md` amended in S0 | Line 2 |
| `RK-05` | Risk | Scoring formula v0 weights are unvalidated | Poor prioritisation | High | Review after `SCORING_REVIEW_THRESHOLD_ARTICLES`; deferred until TC3 schema exists | Line 2 |
| `RK-06` | Risk | No legal review capability for SEC-04/SEC-05 | Regulatory exposure on high-sensitivity content | Medium | **No internal mitigation. Requires external counsel** | **Absent** |

---

## 8. Execution Mapping

> **No Jira exists.** Rather than invent keys, execution maps to the sprint plan, which is the real tracker. The template's Epic → Feature → Story → Sub-task hierarchy maps as: **Sprint → FR → US → TR/NFR.**

### 8.0 Build-version tracking — `D-35`

**This document tracks sprints. The Alpha Portfolio tracks projects.** A sprint stays inside one project; a new project is a portfolio event. The two trackers do not overlap.

| Tracker | Scope | Changes when |
|---|---|---|
| **`Modular_PRD` §8** *(here)* | Build versions and their sprints — `V1`, `V2`, `V3`… | A sprint completes or a build version opens |
| **Alpha Portfolio plan** | Projects — `AP-01`, `AP-02`, `AP-OD4` | A project is chartered, closed, or transferred |

#### Notation, to prevent a collision this project has already had three times

| Form | Means | Example |
|---|---|---|
| **`V1`, `V2`** — capital V, no decimal | **Build version.** A body of work with its own sprints and its own frozen `V*-*.md` operative set | `V1` = S0–S5 |
| **`1.7`, `1.8`** — decimal, no prefix | **This document's own revision lineage.** Unrelated to build versions | `Modular_PRD` v1.8 |

`Modular_PRD` v1.8 has nothing to do with build `V1`. Writing "version 1" for a build, or "V1.8" for a document, is an error. The precedent for taking this seriously is `D-22`, where two meanings of *cost baseline* required a decision to separate.

#### Build-version status

| Build | Sprints | Operative set | Status |
|---|---|---|---|
| **`V1`** | S0 · S1 · S2 · S3 · S4 · *(S5 beyond v1 scope)* | `docs/v1/V1-*.md` | **Active.** T0 complete · T1 in progress · **planning tiers complete**: `G33a` closed (four `Fn_Specs`, `FR-01`–`FR-13` covered) and `G33b` closed (`D-52` — 18 candidates → 4 `SPECS` documents) · `SPECS` tier opened with `SPECS-TRANSITION-ENFORCEMENT` (`D-53`), the only one S1 requires · S0 not started — `R3` **specified** (`D-56`), installation gated on the build guardrail · `G62` **opened** (`D-65`) — both CI gates fail today, blocking `R3` DoD D-4 · `G59` **closed** (`D-64`) — `bun.lockb` committed, 413 packages pinned; `R3` still specified-not-installed · `G61` **closed** (`D-63`) — all eight `X`-rows indexed · `X4` **specified** (`D-61`) — closes with `X5` in `0002`; `G61` opened, the `X`-series is unindexed · `G54` **closed** (`D-60`) — upstream surface verified from source · `G10` **closed** (`D-59`) — one origin, two paths; apex `UNSET` · `G11` **closed** (`D-58`) — register precedence, Chief Editor owns; detection carried as `C-14` · `Q2` **answered** (`D-57`) — no independent assurance in v1, conditional on `C-13`'s BCP surface; `FR-11` not built in v1 · `G57` **closed** (`D-55` — `X3` mapping specified as data, role-keyed) · S1 now gated only on its own window decisions |
| `V2` | — | `docs/v2/V2-*.md` *(not created)* | Not opened |

**When `V2` opens:** `V1-*.md` freeze, `V2-*.md` becomes the active operative set, and this table records the handover. Both remain inside the same project unless the Alpha Portfolio charters a new one.

> **Open at the `V1`→`V2` boundary, not before.** `V2` is expected to modify files that frozen `V1` specs describe, which would leave those specs frozen *and* inaccurate with nothing marking them. The treatment — forward pointers, a supersession index, or reissue — is undecided. It costs nothing to defer while `V2` does not exist, and it must be settled before `V2` opens. Recorded so it is not discovered at the boundary.

### 8.1 Sprint → Requirement Mapping

| Sprint | Theme | Objective | FRs | TRs / NFRs | ACs | Priority | Status |
|---|---|---|---|---|---|---|---|
| S0 | Foundation and config spine | All | — | SHARED-01, SHARED-02, **NFR-04** | — | P0 | Not started |
| S1 | Data model and sequence guard | O-01, O-02 | FR-01, FR-02, FR-03, FR-06, FR-07 | TR-DM-01…06, NFR-01, NFR-02, NFR-08 | AC-01…AC-04, AC-09…AC-12 | P0 | Not started |
| S2 | Line assignment and independence | O-03 ⚠ | FR-04, FR-05 | NFR-03, SEC-01 | AC-05…AC-08 | P0 | Not started |
| S3 | Board, filters, audit view | O-05 | FR-08 | NFR-06 | AC-13 | P0 | Not started |
| S4 | Publication and fallback | O-04 | FR-09, FR-10 | NFR-05, NFR-07, SEC-02 | AC-14…AC-16 | P0 | Not started |
| S5 | Assurance and resilience | O-01, O-03 | FR-11 ⚠, FR-12, FR-13 | NFR-08, SEC-05 | AC-17…AC-19 | P1 | Not started |
| S6 | Lock down | O-02, O-03 | — | SEC-03 | AC-20 | P0 | **Blocked on DEP-01…03** |

### 8.2 Cross-Functional Task Tracking

| ID | Function | Task | Owner | Status | Depends on |
|---|---|---|---|---|---|
| `XF-01` | Governance | **Record A2's ratification in Addendum §2.4 — `Ratified?`, date, artifact** | Chief Editor | Not started | Q0 |
| `XF-02` | Governance | Amend Blueprint §2.2/§7/D1 and Business Case §A2 off FastAPI | Chief Editor | Not started | XF-01 |
| `XF-03` | Engineering | Amend `CLAUDE.md` — it directs agents to the plan pack as authoritative and carries a superseded git identity | Line 1 | Not started | — |
| `XF-04` | Engineering | Stand up test runner and CI | Line 1 | Not started | — |
| `XF-05` | Engineering | Write `0002_three_lines.sql`. **Do not apply** | Line 1 | Not started | XF-04 |
| `XF-06` | Governance | Answer Q1 and Q2, or state Line 3 is human/external for v1 | Chief Editor | Not started | OD3 |
| `XF-07` | Governance | Decide Q4 — G9 scope as the OD2 detector | Chief Editor | Not started | — |
| `XF-08` | Engineering | Decide Q3 and Q5 — publish path, retry scheduler | Line 1 | Not started | — |
| `XF-09` | **Legal — absent** | SEC-04 GDPR erasure; SEC-05 pre-publication review | **Unowned** | **Blocked** | DEP-08 |
| `XF-10` | Design | — | **Absent.** UI is functional-first; no design function | n/a | — |
| `XF-11` | GTM / Support | — | **Absent.** Single-operator internal tool; no launch or support motion | n/a | — |

---

## 9. Acceptance Criteria

> Derived from the acceptance tests already specified in Addendum §8 and Blueprint §14.8, restated in Given/When/Then. **AT-ids are the source; AC-ids are this PRD's handle on them.** Per NFR-04, none of these are executable until a test runner exists.

### 9.1 Functional

| ID | FR | AT source | Given | When | Then |
|---|---|---|---|---|---|
| `AC-01` | FR-01 | AT-001 | A Reporter agent is active | It logs a valid URL with ≥1 topic tag and a trend signal | The article is created at the entry state; a transition row records executor, `line_assignment = Line1`, agent id, and timestamp |
| `AC-02` | FR-01 | AT-004 | An article with URL X already exists | A second log of URL X is attempted | The write is rejected as a duplicate. **Fails today — no unique index on `articles.url`** (TC5) |
| `AC-03` | FR-02 | AT-010, AT-011 | An article is at `Logged` | The Investigator validates, then investigates | Two distinct transitions are recorded, each `not_applicable` for independence. **Blocked — `sources.reliability_tier` missing** (TC3) |
| `AC-04` | FR-03 | AT-012 | An article is at `Investigated` | A Journalist agent drafts | State becomes `Drafted` with a non-empty adaptation, ≥1 target, and a completed checklist |
| `AC-05` ⚠ | FR-04 | AT-016 | An article is at `Drafted` | The Chief Editor executes T5 | State becomes `Reviewed`; the record shows `executor_type = human`, `line_assignment = Line2`, independence `satisfied`; any assisting agent appears only as `assisting_agent_id` |
| `AC-06` ⚠ | FR-04 | AT-016 | An article is at `Drafted` | **An agent attempts T5** | **The transition is refused.** Line 2 is human-primary. *This is the case the committed seed data currently violates* (X4) |
| `AC-07` `[Q11]` | FR-05 | AT-017 | An article is at `Reviewed` | A Chief Journalist agent executes T6 | State becomes `Approved`; **`line_boundary_crossed = true` (`[Q11]` pending, no ⚠ — this row still reads `independence 'satisfied'`, the retired field's value, until Q11 confirms the rename)** at the Line 2 → Line 1 boundary |
| `AC-08` `[Q11]` | FR-05 | AT-018, AT-043 | An article is at `Reviewed` | The Chief Editor executes T6, a Line 1 gate | The transition is allowed but recorded `event_type = HumanOverride`; **`identity_assurance` and the override flag replace `independence 'override_not_four_eyes'` pending `[Q11]`'s confirmation.** It is never counted toward `G-02` |
| `AC-09` | FR-06 | AT-013 | An article is in any active state | A return is attempted with an empty reason | The write is rejected: reason is mandatory |
| `AC-10` | FR-06 | AT-014 | An article has been returned to the same state `RETURN_LIMIT_BEFORE_ESCALATION` times | A further return is attempted | It auto-escalates to the Chief Editor for a reject-or-keep decision |
| `AC-11` | FR-07 | AT-040 | Any transition occurs | It completes | Exactly one transition row precedes the state change, carrying article, executor, type, Line, from, to, decision, reason, timestamp, independence status — **no nulls** |
| `AC-12` | FR-07 | AT-041 | A transition row exists | UPDATE or DELETE is attempted, including with the anon key | The database refuses. **Fails today** (`G-06`) |
| `AC-13` | FR-08 | AT-050…AT-053 | `SUCCESS_ARTICLES_LOGGED_MIN` articles span states, topics, categories, and Lines | The Chief Editor filters on each dimension | Only matching articles show; a no-match filter shows an explicit empty state |
| `AC-14` | FR-09 | AT-020 | An article is `Approved` with a WordPress target | The publication job runs | The post is created; `published_url` is stored; the target is `Published`; the article becomes `Published` |
| `AC-15` | FR-09 | AT-021, AT-023 | An article has WordPress and LinkedIn targets and WordPress succeeds while LinkedIn does not | The job completes | WordPress is `Published`, LinkedIn is `Failed` or `ManualReady`, **both statuses held simultaneously**, article `Published`. **Not representable today** (TC2) |
| `AC-16` | FR-10 | AT-022 | A target is `ManualReady` | The Chief Editor enters a live `published_url` and confirms | That target becomes `Published`; if it is the first live target, the article becomes `Published`; the confirmation is audited identically to an automated publish |
| `AC-17` ⚠ | FR-11 | AT-044, AT-074 | A Line 3 trigger condition fires | Line 3 completes its audit | `event_type = Line3Audit`, `line_assignment = Line3`, finding and recommendation recorded, **reported with no shared data path to Line 1 or Line 2**. **Blocked — executor identity unresolved** (OD3) |
| `AC-18` | FR-12 | — | The Chief Editor has been unavailable beyond `CHIEF_EDITOR_ABSENCE_DEGRADED_HOURS` | Line 1 continues working | Line 1 gates still execute; articles queue at T5; **no publishing occurs**. *Under the threshold is already covered by Addendum §6.4 — only the over case is new* |
| `AC-19` | FR-13 | — | A published article receives an external regulatory or court order | `regulatory_retraction_order` is set true | Retraction is forced immediately, bypassing T8; the article reaches `Retracted`; the order's issuing authority and date are recorded |
| `AC-21` | FR-14 | — | The observations defined in `C-13` — `T6→T5` return rate, degraded-mode state, escalation backlog, agent stall, retraction clock, publication retry exhaustion | The business-continuity surface is opened | **Each** is displayed with its current value and its last-evaluated time. A condition never yet observed reads **not observed**, never blank |

### 9.2 Non-Functional

| ID | NFR | Given | When | Then |
|---|---|---|---|---|
| `AC-NF-01` | **NFR-01** | The app is running with permissive RLS and no auth | **A direct `update articles set workflow_state` is issued with the anon key, skipping the app entirely** | **The database rejects it.** This — not a UI-level check — is the test that O-01 holds |
| `AC-NF-02` | NFR-02 | A transition row exists | UPDATE or DELETE is attempted by any client | Refused at the database |
| `AC-NF-03` | NFR-04 | A change is pushed | CI runs | Typecheck, lint, and tests all execute and must pass |
| `AC-NF-04` | NFR-07 | The client bundle is built | It is inspected for secrets | No WordPress credential and no service-role key appear |
| `AC-NF-05` | NFR-08 | Any published article is selected | Its full transition history is queried | Every gate is reconstructable from the log alone, with no external context needed |

### 9.3 Security

| ID | SEC | Given | When | Then |
|---|---|---|---|---|
| `AC-SEC-01` | SEC-01 | An identity holds a Line 1 role | It is assigned a Line 2 role | The assignment is refused. A hard constraint, not a config value |
| `AC-20` | SEC-03 | Auth is enabled (S6) | An anonymous request attempts any gate transition | It is refused and the attempt is logged |

### 9.4 Release Readiness Checklist

**Phase 0 (proof of concept) exit:**
- [ ] All P0 acceptance criteria for M0–M4 pass, **with provisional ACs (⚠) reported as provisional**
- [ ] `G-01` and `G-06` at 0, verified by direct anon-key attempt
- [ ] `K-03` audit completeness at 100%
- [ ] CI green; NFR-04 satisfied
- [ ] Every provisional value traceable to its OD in the config log
- [ ] Deviation register reviewed; D2 and D5 still accurate

**Production go-live — additionally required, none currently met:**
- [ ] **OD1, OD2, OD3 ratified at Charter level** with dates and approval artifacts
- [ ] Addendum §9 G10 — Three Lines Model formally signed off
- [ ] **Business Charter supplied** (Entry 006 §7, Entry 007 §3)
- [ ] **Exit strategy supplied**
- [ ] **SEC-04 and SEC-05 reviewed by qualified counsel** — cannot be discharged internally
- [ ] SEC-03 complete; anonymous access impossible
- [ ] `G-05` reviewed — if Line separation is not producing distinct judgment, **stop: Charter OD4 branch ② applies**
- [ ] Rollback tested against a real environment

---

## 10. Open Questions

> Uses the sprint plan's `Q0`–`Q6` ids rather than minting a parallel set.

| ID | Question | Owner | Blocking | Blocks | Status |
|---|---|---|---|---|---|
| `Q0` | Record A2's ratification in Addendum §2.4's `Ratified?`, date, and artifact columns — the re-scoping currently sits in `Resolved?` — then amend Blueprint and Business Case off FastAPI | Chief Editor | Yes | D4's closure; §6.1's accuracy | **Open — minutes to resolve** |
| `Q1` | Line 1 roster shape: one agent per gate (Charter) or combinable (Addendum, D2)? | Chief Editor | Yes | FR-04, FR-05, M2 | Open — needs OD3 |
| `Q2` | Line 3 executor. Supply a headcount including a distinct instance, **or state that Line 3 is human or external for v1** | Chief Editor | Yes | FR-11, M5 | Open — **the second option is one sentence and unblocks M5 without touching the headcount** |
| `Q3` | Publish path: Next.js route handler (recommended, TC8) or Supabase Edge Function? | Line 1 | Yes | FR-09, M4 | Open — one config-log line |
| `Q4` | `G-05` / G9 scope: post-launch monitoring per Addendum §9, or in-product now as the OD2 detector? | Chief Editor | Yes | FR-11, `G-05` threshold, M5 | Open |
| `Q5` | Retry scheduler: pg_cron, Vercel Cron at coarser granularity, or drain on demand and drop the 5-minute promise? | Line 1 | No | NFR-05 fidelity | Open |
| `Q6` | Re-enable `typescript.ignoreBuildErrors` and `eslint.ignoreDuringBuilds` once CI exists? | Line 1 | No | NFR-04 strength | Open |
| `Q7` | **New.** Who discharges SEC-04 and SEC-05? No legal function exists on this project | Chief Editor | Yes — **production only** | Go-live | **Open — unowned** |
| `Q8` | **Restated.** An earlier draft asked which of the two PRDs "governs." That was the wrong question — they sit on opposite sides of the customer/project boundary and neither outranks the other. **The real question:** route the eight feedback items in `docs/governance/requirements-traceability-map.md` §7 to the customer via the sponsor. **FB-04 is the material one** — six items here (four FRs, two non-goals) have no customer origin and represent funded scope the customer did not request | Project sponsor | Yes | Customer acceptance of specified scope | **Open** |
| `Q10` | **New — from external EMS audit.** Is this an internal tool for one Chief Editor, or a product for editorial businesses generally? The brief that commissioned the audit said "product"; the Charter and every non-goal (single account, no monetization, no multi-tenancy) says "tool." Read the Charter, decide, route via the sponsor. If "product," a tenancy boundary belongs in `TR-DM-01`/`TR-DM-02` **before S1** — it is a column now and a migration of an append-only table later | Chief Editor | Yes | Whether S1's schema needs a tenancy column | **Open — see EMS audit Phase 03** |
| `Q11` | **New — from external EMS audit. Re-costed 2026-08-17. Corrected 2026-08-17 (A28a) — this row itself carried the count-and-marker defect A27 had just fixed six sections earlier.** `judgment_independence_status` names a cognitive fact (independence of judgment) but the code only ever writes a structural fact (whether a Line label was crossed). Once `NFR-02` makes `workflow_transitions` append-only, this becomes permanent. Rename before S1: `line_boundary_crossed` (mechanism, always knowable) + `identity_assurance` (`self_asserted` \| `authenticated`, so Phase-0 rows stay distinguishable from post-S6 rows forever) + reserve `judgment_independence` as null until an instrument exists. **Confirming "yes" propagates into six places in this document alone: `TR-DM-02` (the migration this rename targets), `NFR-03` (forbids the null value the rename requires and needs its own rewrite, not a passthrough), `AC-07`/`AC-08` (assert `satisfied`/`override_not_four_eyes`, both values of the old field), `G-02` (Data Source column names the old field literally), and `FR-05`'s Outputs line — all still assert the old field name. Marker split, not uniform: only `G-02` and FR-05's Outputs line carry `⚠` (they have an independent OD2 tie); `TR-DM-02`, `NFR-03`, `AC-07`, `AC-08` carry `[Q11]` alone, no `⚠` — see §0.4.** | Chief Editor | Yes | S1 schema (TR-DM-02), FR-05, NFR-03, G-02, AC-07/AC-08 | **Open — irreversible if deferred past S1. Decision: minutes. Propagation: one pass across the six marked rows** |
| `Q12` | **New — from external EMS audit.** The Three Lines Model citation throughout the governing set reads "(IIA, 2020, updated 2024)." Independently verified: the IIA published a replacement Statement of Position on 2026-07-08, five weeks before this PRD's date, targeting the board as primary audience with new independence tests for blended roles — exactly what SEC-01 governs. Re-anchoring the citation is a factual correction (queued, not yet done — see governing-set files). **Re-deriving SEC-01's actual rule against the new text is a judgment call this PRD cannot make un-read** — someone needs to read the 2026 Statement of Position and confirm SEC-01 still holds | Chief Editor / Line 2 | Yes | SEC-01, S2 | **Open — blocks S2's Line-exclusivity build** |
| `Q9` | **New.** `CR-14` — "AI tags topics, sources, trend signals at Reporter gate" — is a customer MVP checkbox with **no functional requirement in this document**. In or out of v1? | Customer, via sponsor | Yes | Whether an FR is added before S1 | **Open — FB-05** |

---

## 11. Appendices

| Category | Link | Description |
|---|---|---|
| **Project Charter v1** | `docs/source/project-charter-v1.md` | Source of truth. **Frozen — never amended in place** |
| V1 Build Readiness Addendum v1.5 | `docs/source/v1-build-readiness-addendum.md` | Build specifications, state-transition matrix, acceptance tests, Ratification Log |
| Blueprint v1.4 | `docs/source/blueprint.md` | Architecture, meaning-invariance lock, scoring formulas |
| Business Case v2.3 | `docs/source/business-case.md` | Rationale, Three Lines mapping |
| Precedence and reading order | `docs/source/README.md` | Which document wins, and how amendments work |
| **Provisional Deviation Register** | `docs/governance/provisional-deviation-register.md` | D1–D5, with closing triggers |
| Entry 006 | `docs/journal/2026-08-16-entry006.md` | Inversion cross-reference, SOP grounding for S1–S9 |
| Entry 007 | `docs/journal/2026-08-16-entry007-decision-sheet.md` | Phase 0 approval; ratifies nothing |
| **Sprint Plan rev 5** | `docs/journal/2026-08-16-sprint-plan.md` | S0–S6, TC1–TC9, gap register, OD gating, Q0–Q6 |
| **Original PRD** | `docs/PRD.md` | The project's original requirement record, retained unchanged. See the relationship note at the top of this file and Q8 |
| Repo plan pack | `docs/ARCHITECTURE.md`, `DATA_MODEL.md`, `AGENTIC_LAYER.md`, `INTELLIGENCE_LAYER.md`, `SECURITY.md`, `TASKS.md`, `TEST_PLAN.md` | **Not governing.** Accurate about the substrate, wrong about governance — see `docs/README.md` |
| Three Lines Model | IIA Statement of Position (2020, updated 2024) | The independence framework |
| ITIL 4 | "Start where you are", "keep it simple and practical" | Applied to the stack decision and to this PRD's scope |

---

## 12. How this PRD stays honest

**Living-document rituals:**

| Cadence | Ritual | Output |
|---|---|---|
| Per sprint | Update §8.1 status and §7.4 exit criteria | Current state visible |
| Per sprint | Re-check every ⚠ marker — has its OD moved? | No silent upgrade from provisional to settled |
| Per sprint | **Re-check every `[Q11]` marker separately — has `Q11` been answered?** These have no OD behind them; "has its OD moved" has no answer for a `[Q11]`-only row and will silently clear it if the ritual isn't run against both markers | No `[Q11]` row clears itself under the ⚠ ritual by accident |
| On any governing amendment | Re-read §0.4 and reconcile | PRD stays below the governing set |
| Per milestone | Run §9.4 | Go / no-go |
| Post-launch | Record actual against target in §3 | Real baselines replace `N/A — greenfield` |

**The specific anti-pattern this project is prone to.** The template warns about frozen PRDs, vague ACs, orphan requirements, and P0 inflation. This project's actual recurring failure is different and more subtle: **an Open decision gets restated without its qualifier and becomes settled by attrition.** It has happened five times. A PRD is the most likely place for a sixth, because FRs read as commitments and qualifiers look like clutter.

The countermeasures are the ⚠ markers on O-03, FR-04, FR-05, FR-11, `G-02`, `G-05`, and the affected ACs; the `[Q11]` markers on `G-02`, FR-05's Outputs line, `TR-DM-02`, `NFR-03`, `AC-07`, and `AC-08` — named explicitly here rather than folded into "the affected ACs," since `TR-DM-02` and `NFR-03` are neither ACs nor OD-dependent and a catch-all phrase cannot stretch to cover them; §0.4's explicit statement that this document cannot ratify; and §0.2's routing of all decisions to the Ratification Log.

**If you read one thing here:** the north-star metric currently reads **0%** against the shipped seed data, and three of the six guardrails are not merely unmeasured but **unmeasurable** until S1 lands. That is the honest starting position.
