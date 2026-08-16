# Project Charter — AI-Driven Trending Article Tracker
**Version:** v1, baseline
**Status:** Variant charter, agent-directed operating model. Coexists with Business Case v1.3, does not replace its compliance disclosures.

**Decision categories used below:** *Open* = yours to decide, blocks sign-off until answered. *Assumed* = a conservative default I've applied so the document has something to build against; stands unless you object. *Resolved* = already decided, with the decision and its trigger stated.

---

## Assumed (default, not decided by you, override if you disagree)

| # | Item | Default applied | Why this default |
|---|---|---|---|
| A1 | Architecture for v1 | Five-gate linear pipeline (not Proposer/Critics/Judge) | Ships the already-specified, already-sourced model (T1–T8a, Addendum §3) rather than an unproven redesign. This is a conservative default, not a coin-flip decision on your behalf, but it *is* still a choice, not a fact, so it's listed here rather than in Status. |

---

## Open — v1 (blocking, ordered)

| # | Decision | Why ordered here | Status |
|---|---|---|---|
| OD1 | Does Chief Editor = Chief Journalist, or does the human float across gates as needed? | First, OD2 can't be evaluated until it's known which gates the human touches. | Open |
| OD2 | Within the five-gate pipeline (A1), does a distinct agent provide distinct judgment sufficient to satisfy four-eyes? | Second, depends on OD1. Load-bearing: every "zero bypass" claim below is only as true as this answer. | Open |
| OD3 | What does the agent headcount figure count, and how does it distribute across the 4 agent-holdable roles? | Third, independent of OD1/OD2, still v1-scoped. | Open |

---

## Resolved

| # | Decision | Resolution | Trigger to revisit |
|---|---|---|---|
| OD4 | Adopt Proposer → Critics → Judge, replacing the linear pipeline | Rejected for v1 (consistent with A1). Deferred to v2, conditional. | **Two branches, not one:**  ① *If OD2 resolves affirmatively and the pipeline ships:* revisit only if logged data, once running, shows the independence mechanism failing to catch errors it should catch. ② *If OD2 resolves negatively, at any point, including before v1 ships:* this is a pre-launch blocker, not a v2-conditional backlog item. The five-gate pipeline would have no viable independence mechanism to launch with, and OD4 (or another fix) must be resolved before shipping, not after. If neither branch fires, OD4 stays backlogged forward into whichever version reconsiders it next; it does not default-adopt and does not expire. |

---

**Problem:** A four-eyes editorial approval system for trending-article curation. The team loses 3–5 hours a week manually hunting articles across LinkedIn, Facebook, blogs, and guest platforms, with nothing stopping an unchecked article from going live. This builds a five-stage review pipeline (Reporter → Investigator → Journalist → Senior Journalist → Chief Journalist) that every article must pass before publishing to WordPress, LinkedIn, or a guest platform.

**For:** One human Chief Editor directing virtual agents that execute the remaining roles, across five fixed roles: Reporter, Investigator, Journalist, Senior Journalist, Chief Journalist. Headcount figure withheld pending OD3.

**Core things to track:** Articles, trend signals, sources, topics, workflow state, publication targets, and an audit log of every review decision.

**The one workflow (must work v1):** A journalist logs an article by URL → it moves through four review gates, each executed by a distinct agent or the Chief Editor → Chief Journalist approves → it auto-publishes to WordPress, or is marked ready for manual LinkedIn publish. Every step is logged.

**Success in a week:**
- 5+ articles logged and moving through the pipeline
- 2+ published to WordPress, or marked ready for manual LinkedIn publish
- Team can see and filter a board by state, topic, category
- Every transition logged with who, when, and why
- Zero articles bypass a review *sequence* (independence of judgment, OD2, still open)

**Deliberately NOT in v1:**
- No mobile app, web only
- Tagging is agent-executed at the Reporter stage; the Chief Editor is the sole human reviewer, not the sole tagger
- No multi-team accounts, one 'Chief Editor' account
- No monetization features
- No automated Facebook publishing, manual only
- No real-time trend-detection algorithm, RSS intake only
- No multi-language support
- No bookmarklet, copy-paste URL form only
- No email or Slack notifications, in-app only
- No Proposer/Critics/Judge governance model (OD4, Resolved above, two-branch reopening condition)

**Who will actually use this:**
- One Chief Editor directing virtual agents across the five-role pipeline, distribution pending OD3
- Agile/DevOps/ITIL professionals reading the certification content it surfaces
- AI practitioners tracking discourse on agentic systems, guardrails, context engineering

**What it replaces or earns:**
- Replaces 3–5 hours/week of manual article hunting
- Removes the possibility of a publish happening without a review sequence, independence pending OD2
- Builds a searchable, provenance-tracked archive as a durable asset
