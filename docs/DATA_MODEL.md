# Data Model

## articles
- id: uuid (pk)
- url: text (not null)
- title: text
- summary: text (AI-generated — see below)
- summary_source: text
- summary_confidence: numeric
- summary_review_status: text default 'unreviewed'
- topic_id: uuid → topics.id
- category: text
- workflow_state: text not null default 'logged' — enum: logged, reported, investigated, journaled, senior_reviewed, chief_approved, published, rejected
- publication_target: text — enum: wordpress, linkedin, none
- published_url: text
- user_id: uuid (nullable, owner scoping later)
- created_at: timestamptz

## topics
- id: uuid (pk)
- name: text not null unique
- slug: text not null unique
- user_id: uuid (nullable)
- created_at: timestamptz

## sources
- id: uuid (pk)
- name: text not null
- platform: text — enum: linkedin, facebook, blog, guest_post, other
- user_id: uuid (nullable)
- created_at: timestamptz

## trend_signals
- id: uuid (pk)
- article_id: uuid → articles.id
- signal_type: text — enum: topic_tag, source_tag, relevance_score, trend_indicator
- signal_value: text
- source: text (AI model or manual)
- confidence: numeric
- review_status: text default 'unreviewed'
- user_id: uuid (nullable)
- created_at: timestamptz

## workflow_transitions
- id: uuid (pk)
- article_id: uuid → articles.id
- from_state: text
- to_state: text not null
- gate_role: text — enum: reporter, investigator, journalist, senior_journalist, chief_journalist, chief_editor
- actor_type: text — enum: agent, human
- reason: text
- user_id: uuid (nullable)
- created_at: timestamptz

## Relationships
- articles.topic_id → topics.id (many-to-one)
- trend_signals.article_id → articles.id (many-to-one)
- workflow_transitions.article_id → articles.id (many-to-one)

## RLS / Permissions
- v1: permissive read/write (demo-first, no login wall)
- Lock-down: `auth.uid() = user_id` on all tables
- Pipeline state transitions validated server-side in lib/pipeline/