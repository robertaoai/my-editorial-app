# Tasks

## Sprint 1 — Database + Core Engine
**Goal:** Pipeline state machine and article CRUD work end-to-end against DB.
- Create Supabase tables + RLS + seed data
- Build lib/data/ data-access layer (articles, transitions, topics)
- Build lib/pipeline/ state machine (logged → reported → investigated → journaled → senior_reviewed → chief_approved → published)
- Article create form (URL paste) → writes to articles table
- Gate transition: writes workflow_transitions row + updates article state
- Board page: list articles, filter by state
- Article detail page: show state, gate history, advance/reject buttons
- Seed 5 articles across different pipeline states
- **DoD:** Paste a URL → article appears on board → advance through all 5 gates → each transition logged → state updates in UI.

## Sprint 2 — AI Tagging + Publish
**Goal:** Reporter gate auto-tags; publish action fires.
- Build lib/ai/ tagger: extracts title, topic, source, signals from URL content
- Reporter gate runs AI tagger automatically on entry
- Journalist gate drafts AI summary (with source + confidence + review_status)
- WordPress publish server route (uses env credentials)
- LinkedIn-ready marking action
- Board filters: by topic, category in addition to state
- Topics page: view/create topics
- Audit Log page: full transition history
- **DoD:** Article enters Reporter gate → AI tags appear → passes all gates → Chief Journalist approves → publishes to WordPress (or LinkedIn-ready) → published_url populated.

## Sprint 3 — Lock It Down
**Goal:** Auth + per-user RLS + polish.
- Add Supabase Auth (login/signup)
- Replace permissive RLS with `auth.uid() = user_id` policies
- Owner-scoping on all queries
- Empty/loading/error states for every surface
- Responsive sidebar nav (hamburger on mobile)
- **DoD:** Anonymous user sees login; logged-in user sees only their articles; all CRUD works with RLS enforced.

## Sprint 4 — Refinement + Insights
**Goal:** Trend signals visible, pipeline smoother.
- Trend signal display on article detail
- Relevance scoring on board (sortable)
- Bulk gate advancement for multi-select
- Export audit log as CSV
- **DoD:** Board sorts by relevance; trend signals visible; audit log exportable.

## Gantt
```
S1: DB + Core Pipeline      [####]
S2: AI Tagging + Publish       [####]
S3: Auth + RLS Lock-down          [####]
S4: Refinement + Insights            [####]
```

**v1 functional milestone: end of Sprint 2** — success scenario fully usable.