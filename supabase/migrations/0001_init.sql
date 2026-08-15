create type article_state as enum ('logged', 'reported', 'investigated', 'journaled', 'senior_reviewed', 'chief_approved', 'published', 'rejected');
create type pub_target as enum ('wordpress', 'linkedin', 'none');
create type platform_type as enum ('linkedin', 'facebook', 'blog', 'guest_post', 'other');
create type gate_role as enum ('reporter', 'investigator', 'journalist', 'senior_journalist', 'chief_journalist', 'chief_editor');
create type actor_type as enum ('agent', 'human');
create type signal_type as enum ('topic_tag', 'source_tag', 'relevance_score', 'trend_indicator');

create table if not exists topics (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  slug text not null unique,
  user_id uuid,
  created_at timestamptz not null default now()
);

create table if not exists sources (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  platform platform_type not null default 'blog',
  user_id uuid,
  created_at timestamptz not null default now()
);

create table if not exists articles (
  id uuid primary key default gen_random_uuid(),
  url text not null,
  title text,
  summary text,
  summary_source text,
  summary_confidence numeric,
  summary_review_status text default 'unreviewed',
  topic_id uuid references topics(id),
  category text,
  workflow_state article_state not null default 'logged',
  publication_target pub_target not null default 'none',
  published_url text,
  user_id uuid,
  created_at timestamptz not null default now()
);

create table if not exists trend_signals (
  id uuid primary key default gen_random_uuid(),
  article_id uuid not null references articles(id) on delete cascade,
  signal_type signal_type not null,
  signal_value text,
  source text,
  confidence numeric,
  review_status text default 'unreviewed',
  user_id uuid,
  created_at timestamptz not null default now()
);

create table if not exists workflow_transitions (
  id uuid primary key default gen_random_uuid(),
  article_id uuid not null references articles(id) on delete cascade,
  from_state article_state,
  to_state article_state not null,
  gate_role gate_role not null,
  actor_type actor_type not null default 'agent',
  reason text,
  user_id uuid,
  created_at timestamptz not null default now()
);

alter table topics enable row level security;
alter table sources enable row level security;
alter table articles enable row level security;
alter table trend_signals enable row level security;
alter table workflow_transitions enable row level security;

drop policy if exists "topics_v1_read" on topics;
create policy "topics_v1_read" on topics for select using (true);
drop policy if exists "topics_v1_write" on topics;
create policy "topics_v1_write" on topics for all using (true) with check (true);

drop policy if exists "sources_v1_read" on sources;
create policy "sources_v1_read" on sources for select using (true);
drop policy if exists "sources_v1_write" on sources;
create policy "sources_v1_write" on sources for all using (true) with check (true);

drop policy if exists "articles_v1_read" on articles;
create policy "articles_v1_read" on articles for select using (true);
drop policy if exists "articles_v1_write" on articles;
create policy "articles_v1_write" on articles for all using (true) with check (true);

drop policy if exists "trend_signals_v1_read" on trend_signals;
create policy "trend_signals_v1_read" on trend_signals for select using (true);
drop policy if exists "trend_signals_v1_write" on trend_signals;
create policy "trend_signals_v1_write" on trend_signals for all using (true) with check (true);

drop policy if exists "workflow_transitions_v1_read" on workflow_transitions;
create policy "workflow_transitions_v1_read" on workflow_transitions for select using (true);
drop policy if exists "workflow_transitions_v1_write" on workflow_transitions;
create policy "workflow_transitions_v1_write" on workflow_transitions for all using (true) with check (true);

insert into topics (name, slug) values
  ('AI Practitioners', 'ai-practitioners'),
  ('Agile', 'agile'),
  ('DevOps', 'devops'),
  ('ITIL', 'itil'),
  ('Agentic Systems', 'agentic-systems')
on conflict (slug) do nothing;

insert into sources (name, platform) values
  ('LinkedIn Blog', 'linkedin'),
 ('DevOps Weekly', 'blog'),
  ('ITIL Community', 'guest_post'),
  ('Facebook Group', 'facebook')
on conflict do nothing;

insert into articles (url, title, summary, summary_source, summary_confidence, summary_review_status, topic_id, category, workflow_state, publication_target, published_url, user_id) values
  ('https://linkedin.com/pulse/context-engineering-agentic-systems', 'Context Engineering for Agentic Systems', 'Explores context window management for multi-agent architectures.', 'openai-gpt-4o', 0.91, 'reviewed', (select id from topics where slug='ai-practitioners'), 'agentic-systems', 'published', 'wordpress', 'https://myblog.wordpress.com/2024/01/15/context-engineering', null),
  ('https://devopsweekly.com/ci-cd-pitfalls', '7 CI/CD Pitfalls Every DevOps Team Hits', 'Common CI/CD anti-patterns and how to avoid them.', 'openai-gpt-4o', 0.87, 'reviewed', (select id from topics where slug='devops'), 'devops', 'chief_approved', 'wordpress', null, null),
  ('https://example.com/itil-4-transition', 'ITIL 4 Transition Guide for Agile Teams', 'Bridging ITIL processes with Agile delivery.', null, null, 'unreviewed', (select id from topics where slug='itil'), 'itil', 'senior_reviewed', 'none', null, null),
  ('https://agilecoach.net/sprint-retrospective-ideas', '50 Sprint Retrospective Ideas', 'Fresh retrospective formats for stale teams.', null, null, 'unreviewed', (select id from topics where slug='agile'), 'agile', 'investigated', 'none', null, null),
  ('https://linkedin.com/pulse/ai-guardrails-production', 'Building Guardrails for Production AI Agents', 'Safety patterns for deploying AI agents in production.', 'openai-gpt-4o', 0.83, 'unreviewed', (select id from topics where slug='ai-practitioners'), 'agentic-systems', 'reported', 'linkedin', null, null)
on conflict do nothing;

insert into trend_signals (article_id, signal_type, signal_value, source, confidence, review_status, user_id) values
  ((select id from articles where url='https://linkedin.com/pulse/context-engineering-agentic-systems'), 'topic_tag', 'context-engineering', 'openai-gpt-4o', 0.92, 'reviewed', null),
  ((select id from articles where url='https://linkedin.com/pulse/context-engineering-agentic-systems'), 'trend_indicator', 'rising', 'openai-gpt-4o', 0.78, 'reviewed', null),
  ((select id from articles where url='https://linkedin.com/pulse/context-engineering-agentic-systems'), 'relevance_score', '0.88', 'rule-based', 0.90, 'reviewed', null),
  ((select id from articles where url='https://linkedin.com/pulse/ai-guardrails-production'), 'topic_tag', 'guardrails', 'openai-gpt-4o', 0.85, 'unreviewed', null),
  ((select id from articles where url='https://linkedin.com/pulse/ai-guardrails-production'), 'trend_indicator', 'rising', 'openai-gpt-4o', 0.71, 'unreviewed', null);

insert into workflow_transitions (article_id, from_state, to_state, gate_role, actor_type, reason, user_id) values
  ((select id from articles where url='https://linkedin.com/pulse/context-engineering-agentic-systems'), null, 'logged', 'chief_editor', 'human', 'Article logged by Chief Editor', null),
  ((select id from articles where url='https://linkedin.com/pulse/context-engineering-agentic-systems'), 'logged', 'reported', 'reporter', 'agent', 'AI tagging complete', null),
  ((select id from articles where url='https://linkedin.com/pulse/context-engineering-agentic-systems'), 'reported', 'investigated', 'investigator', 'agent', 'Source validated, enrichment complete', null),
  ((select id from articles where url='https://linkedin.com/pulse/context-engineering-agentic-systems'), 'investigated', 'journaled', 'journalist', 'agent', 'Summary drafted', null),
  ((select id from articles where url='https://linkedin.com/pulse/context-engineering-agentic-systems'), 'journaled', 'senior_reviewed', 'senior_journalist', 'agent', 'Quality check passed', null),
  ((select id from articles where url='https://linkedin.com/pulse/context-engineering-agentic-systems'), 'senior_reviewed', 'chief_approved', 'chief_journalist', 'agent', 'Final approval granted', null),
  ((select id from articles where url='https://linkedin.com/pulse/context-engineering-agentic-systems'), 'chief_approved', 'published', 'chief_journalist', 'agent', 'Published to WordPress', null),
  ((select id from articles where url='https://linkedin.com/pulse/ai-guardrails-production'), null, 'logged', 'chief_editor', 'human', 'Article logged by Chief Editor', null),
  ((select id from articles where url='https://linkedin.com/pulse/ai-guardrails-production'), 'logged', 'reported', 'reporter', 'agent', 'AI tagging complete', null);