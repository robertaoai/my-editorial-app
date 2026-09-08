# Intelligence Layer

> **Historical scaffold — not governing, and not an execution instruction.** This file
> describes the earlier scaffold proposal. Read `docs/README.md` for authority, and for current
> scope and evidence read `NG-10`, `CR-14` with `D-194`/`D-197`, `TC3`, and `PBL-11` — four distinct roles. **Auto-advance is prohibited; manual intake supply is settled; future AI tagging/scoring has its own selection path.** `TC3` still blocks trend *scoring*: `0002` adds source link, reliability tier, topic lineage, evidence URL and reviewer confidence, but **not** `trend_signals.engagement_metrics`, and no scoring implementation exists. Resolve that input contract under `CR-06`/`FB-06` before authorizing it.
> **Current sprint readiness belongs to the Build Spec and work order, with live lane state in
> `docs/v1/V1-PHASE-CLOSURE.md` §5. This notice authorizes no build.** *(Added 2026-09-08,
> `D-198`, raised as `B-085`. Historical content below is preserved, not deleted.)*

## Messy Inputs
- Raw URL paste (no metadata) → AI extracts title, topic, source platform, category
- Article body content → AI tags topics and detects trend signals
- No structured input required from Chief Editor

## Auto-Structure Schema (Reporter gate output)
```json
{
  "title": "Context Engineering for Agentic Systems",
  "summary": "Article discusses context window management...",
  "topic": "ai-practitioners",
  "category": "agentic-systems",
  "source_platform": "linkedin",
  "signals": [
    {"type": "topic_tag", "value": "context-engineering", "confidence": 0.92},
    {"type": "trend_indicator", "value": "rising", "confidence": 0.78},
    {"type": "relevance_score", "value": "0.88", "confidence": 0.90}
  ]
}
```

## Events to Track
- Article logged (manual)
- Reporter gate complete (AI)
- Each subsequent gate transition (AI or human)
- Publish action fired
- Rejection at any gate

## Scoring Rules (rule-based, v1)
- Relevance score: 0–1 based on keyword overlap with Agile/DevOps/ITIL/AI taxonomy
- Trend indicator: rising (>0.7 relevance + >2 signals) / stable / declining
- Gate confidence threshold: 0.6 minimum to auto-advance; below = flag for human review

## What Gets Ranked
- Board: articles sortable by relevance_score, created_at, workflow_state
- Default sort: newest first, published last

## v1 vs Later
- v1: AI tagging at Reporter gate, rule-based scoring, summary draft at Journalist gate
- Later: cross-article trend correlation, automated RSS detection, trend dashboards

## Change Log / Handoff / QA

**Changelog** — `G104` (`docs/v1/V1-DECISION-REGISTER.md` §5.1, closed `D-149`): the Scoring
Rules section's *"0.6 minimum to auto-advance"* line contradicts `NG-10` (`docs/Modular_PRD.md`
§2.5) — no confidence score may ever auto-advance a gate; every gate has a named executor, and
auto-advancing past one is a gate bypass by definition. **This is Lane A's own finding, not a
Product Scope decision** — it does not confirm a fix, and the line above is unchanged. This
plan pack is non-governing (`docs/README.md`).

**Corrected by `G105`** (§5.1): this entry first said *"reconciling it is Sprint 0 work."* That
is true of the plan pack **generally** and **not** of this line. The auto-advance line is
tracked as **`TC9`** (`docs/journal/2026-08-16-sprint-plan.md` §4.2), and unlike `X8` — Stripe
scaffolding, explicitly assigned `→ S0` because removal was a concrete action — **`TC9` was
never assigned a sprint**, because nothing here is built yet and the fix is passive: don't build
the forbidden behaviour when the real feature arrives.

**No sprint exists to name.** The feature this file describes is `CR-14` (AI tagging and scoring
at the Reporter gate), which **has no functional requirement** — gap `FB-05`, decision request
**`Q9`** (`Modular_PRD.md` §10, *"In or out of v1?"*, owned by the customer via the sponsor).
Until `Q9` is answered, no sprint builds Reporter-gate intelligence, and naming one — `S2`,
`V2`, or otherwise — would be an invented number. **`NG-10` needs no "Ready when" of its own**:
it is a permanent constraint on *how* such a feature must behave, not a deferred item awaiting
return like `NG-02`/`NG-03`.

> **SUPERSEDED FOR CURRENT USE — 2026-09-08 (`B-081`). The paragraph above is preserved as dated
> history; four of its claims no longer hold.**
>
> **1 — `CR-14` is tagging, not "tagging and scoring".** The frozen sentence reads *"AI **tags**
> topics, sources, trend signals at Reporter gate"*. Scoring is a separate capability, and `TC3`
> records trend-signal scoring as not computable on the current schema. **The feature this file
> describes is now held as `PBL-11`** — Reporter-gate AI tagging **and** scoring — a backlog
> identity distinct from `CR-14`.
>
> **2 — `CR-14`'s input contract has since been ratified, and it is manual.** `D-194` and Addendum
> §2.4 record the Chief Editor entering the trigger package by hand. **That closes nothing here**:
> `FB-05` and `Q9` remain open, and `PBL-11` remains unranked and unauthorized.
>
> **3 — `Q9`'s owner is the Chief Editor**, not the customer via the sponsor (`B-080` `R1`).
>
> **4 — `Q9` does not gate *all* Reporter intelligence** (`R2-4`). `Q9` and `FB-05` gate the
> **manual-input contract**, whose remaining criteria are `T1` execution authority and source
> author/date handling. **`PBL-11` has its own refinement, rank/readiness and build-authorization
> path** — neither registration nor completion of the manual contract promotes it, and its absence
> of a sprint follows from being **unranked**, not from `Q9`. Any real dependency found during
> refinement must be **stated and decided, never inherited** from this superseded conflation.
>
> **`NG-10` is unaffected throughout** — it constrains *how* any such feature must behave, whoever
> builds it, and remains the no-bypass control.

**Handoff** — none raised. This file is Lane A's own surface, and the finding above did not go
through `docs/handoff/`, which is closed to Lane A by design (`G102`, `D-138`).

**QA** — `bun run check` (`node scripts/check-consistency.mjs`) verifies the register entry
above stays internally consistent. It cannot and does not validate whether this file's content
is itself correct — this file is non-governing, so no check treats it as a source of truth.