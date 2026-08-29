-- S1 editorial schema (D-112, D-114; Modular_PRD §6.3).
-- Drafted for application after DEP-05 is available. 0001_init.sql remains frozen.

create type article_state_v2 as enum (
  'Discovered',
  'Logged',
  'Validated',
  'Investigated',
  'Drafted',
  'Reviewed',
  'Approved',
  'Published',
  'Needs Revision',
  'Rejected'
);

create type actor_type_v2 as enum ('agent', 'human', 'system');
create type line_assignment as enum ('Line1', 'Line2', 'Line3');
create type line_separation_status as enum (
  'satisfied',
  'not_applicable',
  'override_not_four_eyes'
);
create type identity_assurance as enum ('self_asserted', 'authenticated');
create type audit_event_type as enum (
  'Created',
  'StateChange',
  'TagAssigned',
  'Published',
  'Returned',
  'Rejected',
  'EmergencyBypass',
  'HumanOverride',
  'Line3Audit'
);
create type article_kind as enum ('standard', 'retraction_notice');
create type risk_tier as enum ('standard', 'sensitive', 'high_sensitivity');
create type reliability_tier as enum (
  'Tier1-Official',
  'Tier2-Established',
  'Tier3-Social'
);
create type ingestion_method as enum ('RSS', 'API', 'Manual', 'Bookmarklet');
create type reviewer_confidence as enum ('High', 'Medium', 'Low');
create type publication_channel as enum (
  'wordpress',
  'linkedin',
  'facebook',
  'blog',
  'guest_post',
  'other'
);
create type publication_event_type as enum (
  'Pending',
  'Published',
  'Failed',
  'Scheduled',
  'Cancelled',
  'ManualReady',
  'MockPublished'
);
create type allowed_transition_kind as enum (
  'fixed',
  'wildcard_source',
  'dynamic_target',
  'non_transition'
);

-- Preserve D-55's total legacy-state mapping. There is deliberately no ELSE.
create function map_article_state_v1(value article_state)
returns article_state_v2
language sql
immutable
strict
as $$
  select case value
    when 'logged' then 'Discovered'::article_state_v2
    when 'reported' then 'Logged'::article_state_v2
    when 'investigated' then 'Investigated'::article_state_v2
    when 'journaled' then 'Drafted'::article_state_v2
    when 'senior_reviewed' then 'Reviewed'::article_state_v2
    when 'chief_approved' then 'Approved'::article_state_v2
    when 'published' then 'Published'::article_state_v2
    when 'rejected' then 'Rejected'::article_state_v2
  end
$$;

alter table articles
  add column workflow_state_v2 article_state_v2,
  add column revision_reason text,
  add column revision_target_state article_state_v2,
  add column return_count integer not null default 0 check (return_count >= 0),
  add column emergency_publish boolean not null default false,
  add column source_id uuid references sources(id) on delete restrict,
  add column source_author text,
  add column source_published_date timestamptz,
  add column editorial_angle text,
  add column editorial_adaptation text,
  add column tenant_id uuid,
  add column article_kind article_kind not null default 'standard',
  add column original_article_id uuid references articles(id) on delete restrict,
  add column risk_tier risk_tier not null default 'standard',
  add column risk_tier_assigned_by text,
  add column risk_tier_assigned_at timestamptz,
  add column risk_tier_reason text,
  add column risk_tier_ruleset_version text;

update articles
set workflow_state_v2 = map_article_state_v1(workflow_state);

alter table articles alter column workflow_state_v2 set not null;
alter table articles drop column workflow_state;
alter table articles rename column workflow_state_v2 to workflow_state;
alter table articles alter column workflow_state set default 'Discovered';

alter table articles
  add constraint articles_retraction_notice_link_ck check (
    (article_kind = 'standard' and original_article_id is null)
    or
    (article_kind = 'retraction_notice' and original_article_id is not null)
  ),
  add constraint articles_retraction_notice_not_self_ck check (
    original_article_id is null or original_article_id <> id
  ),
  add constraint articles_risk_provenance_ck check (
    (risk_tier_assigned_at is null and risk_tier_assigned_by is null and risk_tier_reason is null)
    or
    (risk_tier_assigned_at is not null and risk_tier_assigned_by is not null and risk_tier_reason is not null)
  );

alter table sources
  add column reliability_tier reliability_tier,
  add column ingestion_method ingestion_method;
create unique index sources_name_uidx on sources (name);

alter table topics
  add column evolves_from uuid references topics(id) on delete restrict,
  add column evolution_notes text,
  add column scope_boundary text;
alter table topics
  add constraint topics_not_self_evolving_ck check (evolves_from is null or evolves_from <> id);

alter table trend_signals
  add column evidence_url text,
  add column reviewer_confidence reviewer_confidence;

-- D-114: a trend signal is evidence at a point in time, not a mutable score.
create function reject_append_only_change()
returns trigger
language plpgsql
as $$
begin
  raise exception '% is insert/read-only; write a superseding event instead', tg_table_name
    using errcode = '55000';
end;
$$;

create trigger trend_signals_append_only
before update or delete on trend_signals
for each row execute function reject_append_only_change();

revoke update, delete on table trend_signals from public, anon, authenticated, service_role;

-- Convert the legacy audit rows and correct the T5 seed executor under X4.
alter table workflow_transitions
  add column from_state_v2 article_state_v2,
  add column to_state_v2 article_state_v2,
  add column actor_type_v2 actor_type_v2,
  add column actor_id text,
  add column line_assignment line_assignment,
  add column line_separation_status line_separation_status,
  add column identity_assurance identity_assurance,
  add column event_type audit_event_type,
  add column agent_id text,
  add column agent_run_id text,
  add column supervising_human_id text,
  add column assisting_agent_id text;

update workflow_transitions
set
  from_state_v2 = map_article_state_v1(from_state),
  to_state_v2 = map_article_state_v1(to_state),
  actor_type_v2 = case
    when from_state = 'journaled' and to_state = 'senior_reviewed'
      then 'human'::actor_type_v2
    else actor_type::text::actor_type_v2
  end,
  actor_id = case
    when from_state = 'journaled' and to_state = 'senior_reviewed'
      then 'chief-editor'
    when actor_type = 'human' then 'chief-editor'
    else 'legacy:' || gate_role::text
  end,
  line_assignment = case
    when from_state = 'journaled' and to_state = 'senior_reviewed'
      then 'Line2'::line_assignment
    when gate_role = 'chief_editor'
      then 'Line2'::line_assignment
    else 'Line1'::line_assignment
  end,
  line_separation_status = case
    when from_state = 'journaled' and to_state = 'senior_reviewed'
      then 'satisfied'::line_separation_status
    when from_state = 'senior_reviewed' and to_state = 'chief_approved'
      then 'satisfied'::line_separation_status
    when gate_role = 'chief_editor'
      then 'override_not_four_eyes'::line_separation_status
    else 'not_applicable'::line_separation_status
  end,
  identity_assurance = 'self_asserted'::identity_assurance,
  event_type = case
    when from_state is null then 'Created'::audit_event_type
    when to_state = 'published' then 'Published'::audit_event_type
    when to_state = 'rejected' then 'Rejected'::audit_event_type
    else 'StateChange'::audit_event_type
  end,
  agent_id = case
    when from_state = 'journaled' and to_state = 'senior_reviewed'
      then null
    when actor_type = 'agent' then 'legacy:' || gate_role::text
    else null
  end,
  supervising_human_id = case
    when actor_type = 'agent' then 'chief-editor'
    else null
  end,
  assisting_agent_id = case
    when from_state = 'journaled' and to_state = 'senior_reviewed'
      then 'legacy:senior_journalist'
    else null
  end;

alter table workflow_transitions
  alter column to_state_v2 set not null,
  alter column actor_type_v2 set not null,
  alter column actor_id set not null,
  alter column line_separation_status set not null,
  alter column identity_assurance set not null,
  alter column event_type set not null;

alter table workflow_transitions drop constraint workflow_transitions_article_id_fkey;
alter table workflow_transitions
  add constraint workflow_transitions_article_id_fkey
  foreign key (article_id) references articles(id) on delete restrict;

alter table workflow_transitions
  drop column from_state,
  drop column to_state,
  drop column actor_type;
alter table workflow_transitions rename column from_state_v2 to from_state;
alter table workflow_transitions rename column to_state_v2 to to_state;
alter table workflow_transitions rename column actor_type_v2 to actor_type;

create trigger workflow_transitions_append_only
before update or delete on workflow_transitions
for each row execute function reject_append_only_change();

revoke update, delete on table workflow_transitions from public, anon, authenticated, service_role;

create table allowed_transitions (
  id uuid primary key default gen_random_uuid(),
  gate_id text not null,
  from_state article_state_v2,
  to_state article_state_v2,
  kind allowed_transition_kind not null,
  required_role gate_role,
  required_line line_assignment,
  required_actor_type actor_type_v2,
  human_only boolean not null default false,
  effective_from timestamptz not null,
  effective_to timestamptz,
  created_at timestamptz not null default now(),
  check (effective_to is null or effective_to > effective_from),
  check (
    (kind = 'fixed' and from_state is not null and to_state is not null)
    or (kind = 'wildcard_source' and from_state is null and to_state is not null)
    or (kind = 'dynamic_target' and from_state = 'Needs Revision' and to_state is null)
    or (kind = 'non_transition')
  )
);

create index allowed_transitions_effective_idx
  on allowed_transitions (gate_id, effective_from, effective_to);

insert into allowed_transitions (
  gate_id, from_state, to_state, kind, required_role, required_line,
  required_actor_type, human_only, effective_from
) values
  ('T1', 'Discovered', 'Logged', 'fixed', 'reporter', 'Line1', 'agent', false, '-infinity'),
  ('T2', 'Logged', 'Validated', 'fixed', 'investigator', 'Line1', 'agent', false, '-infinity'),
  ('T3', 'Validated', 'Investigated', 'fixed', 'investigator', 'Line1', 'agent', false, '-infinity'),
  ('T4', 'Investigated', 'Drafted', 'fixed', 'journalist', 'Line1', 'agent', false, '-infinity'),
  ('T5', 'Drafted', 'Reviewed', 'fixed', 'senior_journalist', 'Line2', 'human', true, '-infinity'),
  ('T6', 'Reviewed', 'Approved', 'fixed', 'chief_journalist', 'Line1', 'agent', false, '-infinity'),
  ('T7', 'Approved', 'Published', 'fixed', null, null, 'system', false, '-infinity'),
  ('T8', null, 'Needs Revision', 'wildcard_source', null, null, null, false, '-infinity'),
  ('T8a', 'Needs Revision', null, 'dynamic_target', null, null, null, false, '-infinity'),
  ('T9', null, 'Rejected', 'wildcard_source', 'chief_journalist', 'Line1', 'agent', false, '-infinity'),
  ('T10', null, null, 'non_transition', null, null, 'system', false, '-infinity'),
  ('T11', null, null, 'non_transition', 'chief_editor', 'Line2', 'human', true, '-infinity'),
  ('T11', 'Approved', 'Published', 'fixed', 'chief_editor', 'Line2', 'human', true, '-infinity');

alter table allowed_transitions enable row level security;
create policy "allowed_transitions_v1_read" on allowed_transitions
  for select using (true);

-- Both guards from SPECS-TRANSITION-ENFORCEMENT run before the article update.
-- The row UPDATE already holds the required article-level lock. A matching audit
-- row must have been inserted by this PostgreSQL transaction; a prior row cannot
-- be replayed to authorize a later update.
create function enforce_article_state_transition()
returns trigger
language plpgsql
as $$
declare
  matching_transition_count integer;
begin
  if new.workflow_state is not distinct from old.workflow_state then
    raise exception 'workflow_state update must change state; no-op updates are refused'
      using errcode = '23514';
  end if;

  if not exists (
    select 1
    from allowed_transitions rule
    where rule.effective_from <= statement_timestamp()
      and (rule.effective_to is null or rule.effective_to > statement_timestamp())
      and (
        (rule.kind = 'fixed'
          and rule.from_state = old.workflow_state
          and rule.to_state = new.workflow_state)
        or
        (rule.kind = 'wildcard_source'
          and old.workflow_state not in ('Published', 'Rejected', 'Needs Revision')
          and rule.to_state = new.workflow_state)
        or
        (rule.kind = 'dynamic_target'
          and old.workflow_state = 'Needs Revision'
          and new.workflow_state = old.revision_target_state)
      )
  ) then
    raise exception 'illegal article transition: % -> %', old.workflow_state, new.workflow_state
      using errcode = '23514';
  end if;

  if new.workflow_state = 'Approved' and not exists (
    select 1 from publication_targets target
    where target.article_id = old.id
  ) then
    raise exception 'approval requires at least one eagerly recorded publication target'
      using errcode = '23514';
  end if;

  if new.workflow_state = 'Published' and not exists (
    select 1
    from publications event
    join publication_targets target on target.id = event.publication_target_id
    where target.article_id = old.id
      and event.event_type = 'Published'
      and event.published_url is not null
      -- A visible row whose creating transaction is still in progress is ours:
      -- MVCC hides rows from every other uncommitted transaction. This remains
      -- correct when the caller uses a savepoint and xmin holds a subtransaction ID.
      and pg_xact_status(event.xmin::text::xid8) = 'in progress'
  ) then
    raise exception 'Published requires a live publication event in the same transaction'
      using errcode = '23514';
  end if;

  select count(*) into matching_transition_count
  from workflow_transitions wt
  join allowed_transitions rule
    on rule.effective_from <= statement_timestamp()
   and (rule.effective_to is null or rule.effective_to > statement_timestamp())
   and (
     (rule.kind = 'fixed'
       and rule.from_state = wt.from_state
       and rule.to_state = wt.to_state)
     or
     (rule.kind = 'wildcard_source'
       and wt.from_state not in ('Published', 'Rejected', 'Needs Revision')
       and rule.to_state = wt.to_state)
     or
     (rule.kind = 'dynamic_target'
       and wt.from_state = 'Needs Revision'
       and wt.to_state = old.revision_target_state)
   )
   and (rule.required_role is null or rule.required_role = wt.gate_role)
   and (rule.required_line is null or rule.required_line = wt.line_assignment)
   and (rule.required_actor_type is null or rule.required_actor_type = wt.actor_type)
   and (not rule.human_only or wt.actor_type = 'human')
  where wt.article_id = old.id
    and wt.from_state = old.workflow_state
    and wt.to_state = new.workflow_state
    -- Do not compare xmin to txid_current(): a savepoint gives inserted rows a
    -- subtransaction ID while txid_current() returns the top-level ID. MVCC
    -- visibility plus an in-progress xmin identifies this transaction safely.
    and pg_xact_status(wt.xmin::text::xid8) = 'in progress';

  if matching_transition_count <> 1 then
    raise exception 'article transition requires exactly one preceding audit row in the same transaction; found %',
      matching_transition_count using errcode = '23514';
  end if;

  return new;
end;
$$;

create trigger articles_enforce_state_transition
before update of workflow_state on articles
for each row execute function enforce_article_state_transition();

create table publication_targets (
  id uuid primary key default gen_random_uuid(),
  article_id uuid not null references articles(id) on delete restrict,
  tenant_id uuid,
  target publication_channel not null,
  created_at timestamptz not null default now(),
  unique (article_id, target)
);

create table publications (
  id uuid primary key default gen_random_uuid(),
  publication_target_id uuid not null references publication_targets(id) on delete restrict,
  tenant_id uuid,
  event_type publication_event_type not null,
  retry_count integer not null default 0 check (retry_count >= 0),
  published_url text,
  formatted_content text,
  provider_event_id text,
  reason text,
  actor_id text,
  actor_type actor_type_v2 not null,
  created_at timestamptz not null default now(),
  check (event_type <> 'Published' or published_url is not null)
);

create unique index publications_provider_event_uidx
  on publications (publication_target_id, provider_event_id)
  where provider_event_id is not null;

create trigger publication_targets_append_only
before update or delete on publication_targets
for each row execute function reject_append_only_change();
create trigger publications_append_only
before update or delete on publications
for each row execute function reject_append_only_change();

revoke update, delete on table publication_targets from public, anon, authenticated, service_role;
revoke update, delete on table publications from public, anon, authenticated, service_role;

alter table publication_targets enable row level security;
alter table publications enable row level security;
create policy "publication_targets_v1_read" on publication_targets for select using (true);
create policy "publication_targets_v1_insert" on publication_targets for insert with check (true);
create policy "publications_v1_read" on publications for select using (true);
create policy "publications_v1_insert" on publications for insert with check (true);

create table editorial_reports (
  id uuid primary key default gen_random_uuid(),
  article_id uuid not null references articles(id) on delete restrict,
  as_at_transition_id uuid not null references workflow_transitions(id) on delete restrict,
  tenant_id uuid,
  template_version text not null,
  template_effective_from timestamptz not null,
  judgment_rule_version text not null,
  schema_version text not null,
  snapshot jsonb not null,
  supersedes_report_id uuid references editorial_reports(id) on delete restrict,
  created_at timestamptz not null default now(),
  check (jsonb_typeof(snapshot) = 'object'),
  check (supersedes_report_id is null or supersedes_report_id <> id)
);

create function validate_editorial_report_anchors()
returns trigger
language plpgsql
as $$
declare
  article_created_at timestamptz;
begin
  select created_at into article_created_at
  from articles
  where id = new.article_id;

  if new.template_effective_from > article_created_at then
    raise exception 'report template % was not applicable when article % was triggered',
      new.template_version, new.article_id using errcode = '23514';
  end if;

  if not exists (
    select 1 from workflow_transitions
    where id = new.as_at_transition_id and article_id = new.article_id
  ) then
    raise exception 'report as-at transition does not belong to its article'
      using errcode = '23503';
  end if;

  if new.supersedes_report_id is not null and not exists (
    select 1 from editorial_reports
    where id = new.supersedes_report_id and article_id = new.article_id
  ) then
    raise exception 'superseded report does not belong to its article'
      using errcode = '23503';
  end if;

  return new;
end;
$$;

create trigger editorial_reports_validate_anchors
before insert on editorial_reports
for each row execute function validate_editorial_report_anchors();
create trigger editorial_reports_append_only
before update or delete on editorial_reports
for each row execute function reject_append_only_change();

revoke update, delete on table editorial_reports from public, anon, authenticated, service_role;

alter table editorial_reports enable row level security;
create policy "editorial_reports_v1_read" on editorial_reports for select using (true);
create policy "editorial_reports_v1_insert" on editorial_reports for insert with check (true);

drop function map_article_state_v1(article_state);
drop type article_state;
drop type actor_type;
alter type actor_type_v2 rename to actor_type;
