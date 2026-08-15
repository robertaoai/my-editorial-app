# Architecture

## Stack
Next.js (App Router) + Supabase (Postgres + RLS) + Vercel.

## Build Sequencing
- **Now:** Article CRUD, five-gate pipeline with transitions, board with filters, AI tagging at Reporter gate, WordPress publish / LinkedIn-ready marking.
- **Next:** Login + per-user RLS lock-down, agent headcount config, trend dashboard.
- **Later:** Bookmarklet, RSS auto-detection, Proposer/Critics/Judge governance, multi-team.

## Key User Action Flow
1. Chief Editor pastes URL on Board → creates article (state: `logged`)
2. Reporter agent runs → tags topics/sources/signals → state: `reported`
3. Investigator agent → enriches/validates → state: `investigated`
4. Journalist agent → drafts summary → state: `journaled`
5. Senior Journalist agent → reviews → state: `senior_reviewed`
6. Chief Journalist approves → state: `chief_approved` → publish action fires
7. Article publishes to WordPress or marked LinkedIn-ready → state: `published`
8. Every transition row written to `workflow_transitions`

## Nav Shell
Left sidebar (desktop) / hamburger (mobile). Sections: Board, Article Detail, Topics, Audit Log.

## Layer Plan
1. **Data layer** — Supabase tables, RLS, seed data
2. **App logic** — pipeline state machine, CRUD, filters
3. **Smart features** — AI tagging/signal detection at Reporter gate, AI summary drafting

Core pipeline state machine runs without AI — gates advance manually if AI is off.

## Repo Structure
```
lib/data/          # all DB reads/writes (articles, transitions, topics)
lib/ai/            # AI tagging, signal detection, summary drafting
lib/pipeline/      # state machine, gate validation
app/board/         # board page
app/articles/[id]/ # article detail + gate actions
app/topics/        # topic management
app/audit/         # audit log view
components/        # shared UI (sidebar, filters, cards)
__tests__/         # beside features
```

## Module Map
| Module | Responsibility | Owns | Build Order |
|--------|---------------|------|------------|
| data-access | All Supabase reads/writes | articles, topics, transitions, sources | 1 |
| pipeline | Gate state machine + validation | workflow_state transitions, gate rules | 2 |
| board-ui | Board list + filters | article cards, filter controls | 3 |
| article-detail | Single article view + gate actions | gate buttons, transition form | 4 |
| ai-tagger | AI topic/source/signal tagging | trend_signals, AI fields on articles | 5 |
| publish | WordPress API + LinkedIn-ready marking | publication_target, publish action | 6 |