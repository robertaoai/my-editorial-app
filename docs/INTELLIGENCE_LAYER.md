# Intelligence Layer

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

**Handoff** — none raised. This file is Lane A's own surface, and the finding above did not go
through `docs/handoff/`, which is closed to Lane A by design (`G102`, `D-138`).

**QA** — `bun run check` (`node scripts/check-consistency.mjs`) verifies the register entry
above stays internally consistent. It cannot and does not validate whether this file's content
is itself correct — this file is non-governing, so no check treats it as a source of truth.