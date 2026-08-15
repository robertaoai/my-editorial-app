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