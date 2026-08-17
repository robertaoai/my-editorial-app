# Provisional Deviation Register
**Version:** v1.1
**Date opened:** 2026-08-16
**Owner:** Chief Editor (robertaoai)
**Status:** Live instrument. Updated by amendment, never rewritten.
**Precedence:** Project Charter v1 > V1 Build Readiness Addendum > Blueprint > Business Case. This register does not sit in that hierarchy — it records departures from it, it does not create authority.

---

## 1. Why this register exists

The Project Charter was approved first and authorized scaffolding. Every other governing document was written afterwards, to close gaps ahead of the build. Some of those documents moved ahead of the Charter on points the Charter still marks Open.

That is not a defect. The Addendum §15 already states it: *"the Charter is the baseline; the resolution is an evolution, not a contradiction. The charter's Open decisions are resolved by subsequent analysis, which is the charter's intended process."*

The problem is narrower, and it is a documentation problem rather than a decision problem. When a downstream document moves ahead of the Charter, two things can happen:

1. It records the move as **provisional**, dated, with a stated trigger to close. Legitimate. Reversible. Auditable.
2. It records the move as **settled** — dropping the qualifier — and the fact that a Charter-level question is still open becomes invisible to the next reader.

The second has now happened four times in this project's history: v1.1 (D1–D4 relabelled "Ratified"), v2.0 (OD3 "Resolved"), v2.1 (OD3 "Resolved" again), and the independence success criterion (**D1** below). The first three were caught because they touched decision *status* tables, which get reviewed. The fourth survived three review passes because it hid in a *success criterion*, which does not.

This register is the fix. It is a single place where every departure from Charter text is visible, so no future document has to carry that burden inside its own prose.

## 2. What this register is not

It is **not** a mechanism for closing OD1, OD2, or OD3. Those cannot be closed at scaffolding stage, and attempting it would be the chicken-and-egg failure: OD2 asks whether distinct agents produce distinct judgment, and that question is answerable only from logged data the build has not yet produced. OD3 asks for a headcount, which depends on how the pipeline actually loads once it runs. Demanding those answers before scaffolding would deadlock the project on evidence that only scaffolding can generate.

So each row below states **what closes it**, not what it should be. Where the closing evidence does not exist yet, the row says so plainly and the build proceeds under the deviation.

## 3. Rules for a row

| Rule | Statement |
|---|---|
| A deviation may stand | Only for the phase named in its Scope column, and only while its Status is `Open — provisional`. |
| A deviation is not a resolution | Nothing here becomes settled by remaining here. Age is not evidence. |
| A deviation is not a ratification | Closing a row does not ratify the underlying decision. Ratification is a separate, dated Chief Editor act in the Addendum §2.4 Ratification Log. |
| The Charter is never edited to close a row | If Charter text needs to change, that is a Charter-level act by the Chief Editor, recorded as a new Charter version — not as a register entry. |
| Every row names its closing evidence | A row with no stated closing trigger is malformed and must be fixed, not left. |
| Silence is not consent | A row that has been open a long time is not thereby accepted. Review each at phase transitions. |

---

## 4. Register

### D1 — Independence success criterion stated as unconditional

| Field | Content |
|---|---|
| **Charter text** | "Zero articles bypass a review *sequence* (independence of judgment, OD2, still open)" — the Charter lists **one** zero-bypass criterion and hedges it. |
| **Downstream text** | Addendum §1 line 91, Blueprint §6 line 597 and §8 line 753, Business Case line 63 each add a **second** criterion: "Zero articles bypass review **independence** (four-eyes at Line boundaries: **unconditional**…)". |
| **Which governs** | **Charter.** A criterion the Charter marks pending OD2 cannot be reported unconditional while OD2 is Open. |
| **Nature of deviation** | Wording, not mechanism. The enforcement is not in dispute. |
| **Scope** | Not permitted at any phase. **This one is corrected, not deviated.** |
| **Status** | **Closed 2026-08-16 by amendment.** Addendum v1.5, Blueprint v1.4, Business Case v2.3 restore the qualifier. |
| **What changed in the build** | Nothing. Four-eyes is still enforced at T5/T6 and `INDEPENDENCE_BYPASS_TOLERANCE` is still 0. Only the claim made about it changed: reported as *provisionally satisfied, pending OD2*, never as unconditional. |

> Recorded here rather than silently fixed because the pattern matters more than the instance. This is the fourth occurrence, and the first to survive three review passes by hiding outside a status table.

### D2 — One agent across Line 1 gates, where the Charter says distinct agent per gate

| Field | Content |
|---|---|
| **Charter text** | "it moves through four review gates, **each executed by a distinct agent** or the Chief Editor" |
| **Downstream text** | Addendum §2.2 (Line 1 roles "combinable into fewer agents"), §3.4 and §6.3 (same agent may execute adjacent Line 1 gates, "the standard rule, not an exception"); Blueprint §2.1 ("Same agent may hold multiple Line 1 roles"). |
| **Which governs** | **Charter**, on operating model, per Business Case v2.2's own precedence note. |
| **Nature of deviation** | Substantive. It changes who may execute what. |
| **Scope** | **Phase 0 only** (scaffolding and proof-of-concept). Not carried into production. |
| **Why it may stand for Phase 0** | The Charter withholds the headcount pending OD3. Requiring distinct agents per gate before a headcount exists would deadlock scaffolding on a number that only OD3 supplies — the chicken-and-egg this register exists to avoid. The Addendum's combinable reading is the pragmatic Phase 0 path and is the Charter's own intended evolution process (Addendum §15). |
| **Status** | **Open — provisional.** |
| **Build handling** | `LINE1_AGENT_ROSTER` is UNSET, not defaulted. Phase 0 may run a single Line 1 identity for demo purposes, and every transition it executes is logged with its `line_assignment` and `agent_id`, so the log shows exactly which gates shared an executor. The deviation is therefore visible in data, not just in this document. |
| **What closes it** | An OD3 answer that states the Line 1 roster shape. Either: (a) distinct agent per gate, matching Charter text, deviation closes as corrected; or (b) combinable, which requires a Charter-level amendment by the Chief Editor, not a register entry. |
| **What does not close it** | Time. Successful Phase 0 demos. The number four back-derived from "four review gates" — that is the headcount question OD3 asks and the Charter withholds. |

### D3 — OD3 recorded as Resolved in two documents, Open in two

| Field | Content |
|---|---|
| **Charter text** | OD3 `Status = Open`. "Headcount figure withheld pending OD3." |
| **Downstream text** | Addendum §2.4 and Blueprint §2.4 both record `Resolved? = Yes`. Business Case v2.2 records `Open — framework accepted, exact count deferred`, `Resolved? = No`. |
| **Which governs** | **Charter.** Note that strict precedence alone gives the wrong answer here: it would award this to the Addendum, which is the document that is factually overclaiming. The Addendum resolves a *framework*; OD3 asks for a *number*. The Business Case is also later — Addendum v1.4 was written against Business Case v2.**1**, before the v2.2 correction existed. |
| **Nature of deviation** | Status labelling. No build impact — unratified under every reading, config-driven, no number invented. |
| **Scope** | Not permitted. **Corrected, not deviated.** |
| **Status** | **Closed 2026-08-16 by amendment.** Addendum v1.5 §2.2 and §2.4 restate OD3 as framework-accepted, count-deferred, matching Business Case v2.2 and the Charter. Blueprint v1.4 follows. |

### D4 — Prototype stack A2 versus the provisioned repo

| Field | Content |
|---|---|
| **Charter text** | Silent. The Charter's Assumed table contains exactly one row, A1 (five-gate linear pipeline). A2 through A7 originate in Addendum §2.1. |
| **Downstream text** | A2 / D1 / D2 assume React/Next.js + FastAPI (Python) + PostgreSQL self-hosted or separately provisioned + Supabase Auth for auth only + Redis/Celery. Blueprint line 710: "database is **not** Supabase-hosted by default." |
| **Actual repo** | Next.js on Supabase-hosted Postgres on Vercel. No Python service, no queue. Provisioned before these documents existed. |
| **Which governs** | **Addendum**, and A2 is an Assumed default that is explicitly overridable. No Charter text is involved, which makes this the cheapest row here to close. |
| **Scope** | Phase 0 and beyond, if re-scoped. |
| **Status** | **Closed 2026-08-16 by ratification in Addendum §2.4.** |
| **Why it may stand** | ITIL 4 "start where you are": the provisioned stack exists, works, and is what the scaffolding commit already bound. Rebuilding on FastAPI to satisfy an unratified assumption would discard working infrastructure to match a document written after it. |
| **What closes it** | A dated Chief Editor entry in Addendum §2.4 re-scoping A2 to the provisioned stack (proposed: Next.js route handlers and server actions on Supabase Postgres; publication retry via a database-backed job table and scheduled invocation in place of Redis/Celery). One line in the Ratification Log, no Charter act required. |
| **Risk if left open** | Low, and it decays: every sprint built on the provisioned stack raises the cost of honouring A2 literally. Worth closing early precisely because it is cheap now. |

### D5 — Repo `docs/` plan pack diverges from the governing set

| Field | Content |
|---|---|
| **Charter text** | The one workflow, five roles, gate sequence, no monetization. |
| **Downstream artifact** | The repo's own `docs/` plan pack (PRD, ARCHITECTURE, DATA_MODEL, AGENTIC_LAYER, INTELLIGENCE_LAYER, SECURITY, TASKS, TEST_PLAN), generated at scaffolding time from the app name and summary rather than from the governing documents. |
| **Which governs** | **The governing set.** The plan pack is not in the precedence hierarchy at all, despite `CLAUDE.md` calling it "a complete, correct plan." |
| **Scope** | Phase 0 only, and only as a build convenience. |
| **Status** | **Open — provisional.** |
| **Known divergences** | Logged as X3, X4, X5, X7, X8 in `docs/journal/2026-08-16-sprint-plan.md`. The load-bearing ones: the state machine omits `Validated` and `Needs Revision` and collapses Addendum T2/T3; `workflow_transitions` has no `line_assignment` or `judgment_independence_status`, so four-eyes cannot be evaluated at all; and the committed seed data at `supabase/migrations/0001_init.sql:131` executes T5 with an agent, where T5 is the Line 2 human gate. |
| **What closes it** | Sprint 0 reconciliation plus migration `0002`, per the sprint plan. Not a governance decision — ordinary build work. |
| **Note** | This is the one row where the deviation is actively wrong rather than merely ahead of the Charter. The seed data encodes a four-eyes violation today. |

---

## 5. Summary

| # | Deviation | Governs | Status | Closes on |
|---|---|---|---|---|
| D1 | Independence criterion stated unconditional | Charter | **Closed** 2026-08-16 | Amendment (done) |
| D2 | One agent across Line 1 gates | Charter | Open — provisional, Phase 0 | OD3 answer on roster shape |
| D3 | OD3 labelled Resolved in two documents | Charter | **Closed** 2026-08-16 | Amendment (done) |
| D4 | Stack A2 vs provisioned repo | Addendum | **Closed** 2026-08-16 | Ratification (done) |
| D5 | Repo `docs/` plan pack divergence | Governing set | Open — provisional, Phase 0 | Sprint 0 + migration 0002 |

**Open decisions remain open.** OD1, OD2, and OD3 are untouched by this register and are not closable at scaffolding stage. Nothing here changes the Charter, and nothing here ratifies anything.

**The one thing that is still a hard stop:** if OD2 resolves negatively at any point, the Charter's OD4 branch ② applies — pre-launch blocker, "must be resolved before shipping, not after." That is not a deviation and does not belong in this register. It is a Charter-level condition, recorded here only so no reader mistakes this register's permissiveness for permission to ship.

---

## 6. Changelog

- 2026-08-16 v1.0: Register opened. Five rows logged from the sprint plan's conflict list. D1 and D3 closed same-day by amendment to Addendum v1.5, Blueprint v1.4, and Business Case v2.3 — both were wording or status errors with no build impact, so correcting them cost nothing and closing them removes two standing inconsistencies. D2, D4, D5 left open as genuine provisional deviations with named closing triggers. No Charter text changed. No open decision closed.
- 2026-08-16 v1.1: D4 closed by Chief Editor ratification in Addendum §2.4, re-scoping A2 to the provisioned Vercel/Supabase stack.
