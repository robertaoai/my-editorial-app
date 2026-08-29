create extension if not exists pgtap with schema extensions;
set search_path = public, extensions;

select plan(30);

select ok(
  not exists (
    select 1
    from pg_indexes
    where schemaname = 'public'
      and tablename = 'articles'
      and indexname = 'articles_url_uidx'
  ),
  'articles.url is not globally unique'
);

select lives_ok(
  $test$
    do $do$
    begin
      insert into articles (id, url, workflow_state) values
        ('10000000-0000-0000-0000-000000000010', 'https://example.test/reused-source', 'Logged'),
        ('10000000-0000-0000-0000-000000000011', 'https://example.test/reused-source', 'Logged');
    end
    $do$
  $test$,
  'two editorial commissions may reuse one source URL'
);

select is(
  (
    select count(*)
    from articles
    where url = 'https://example.test/reused-source'
  ),
  2::bigint,
  'both commissions are retained'
);

select lives_ok(
  $test$
    do $do$
    begin
      insert into articles (id, url, workflow_state)
      values ('10000000-0000-0000-0000-000000000001', 'https://example.test/valid', 'Logged');

      insert into workflow_transitions (
        id, article_id, from_state, to_state, gate_role, actor_type, actor_id,
        line_assignment, line_separation_status, identity_assurance, event_type,
        agent_id, supervising_human_id
      ) values (
        '20000000-0000-0000-0000-000000000001',
        '10000000-0000-0000-0000-000000000001',
        'Logged', 'Validated', 'investigator', 'agent', 'agent:investigator',
        'Line1', 'not_applicable', 'self_asserted', 'StateChange',
        'agent:investigator', 'chief-editor'
      );

      update articles
      set workflow_state = 'Validated'
      where id = '10000000-0000-0000-0000-000000000001';
    end
    $do$
  $test$,
  'Logged to Validated succeeds with one preceding transition in the transaction'
);

select is(
  (
    select workflow_state::text
    from articles
    where id = '10000000-0000-0000-0000-000000000001'
  ),
  'Validated',
  'the valid transition changes the article state'
);

select is(
  (
    select count(*)
    from workflow_transitions
    where article_id = '10000000-0000-0000-0000-000000000001'
      and from_state = 'Logged'
      and to_state = 'Validated'
  ),
  1::bigint,
  'the valid transition commits exactly one audit row'
);

select throws_ok(
  $test$
    do $do$
    begin
      insert into articles (id, url, workflow_state)
      values ('10000000-0000-0000-0000-000000000002', 'https://example.test/bypass', 'Logged');

      insert into workflow_transitions (
        id, article_id, from_state, to_state, gate_role, actor_type, actor_id,
        line_assignment, line_separation_status, identity_assurance, event_type,
        agent_id, supervising_human_id
      ) values (
        '20000000-0000-0000-0000-000000000002',
        '10000000-0000-0000-0000-000000000002',
        'Logged', 'Drafted', 'journalist', 'agent', 'agent:journalist',
        'Line1', 'not_applicable', 'self_asserted', 'StateChange',
        'agent:journalist', 'chief-editor'
      );

      update articles
      set workflow_state = 'Drafted'
      where id = '10000000-0000-0000-0000-000000000002';
    end
    $do$
  $test$,
  '23514',
  'illegal article transition: Logged -> Drafted',
  'PostgreSQL rejects the Logged to Drafted bypass'
);

select is(
  (
    select count(*)
    from workflow_transitions
    where id = '20000000-0000-0000-0000-000000000002'
  ),
  0::bigint,
  'the rejected bypass leaves no orphan transition'
);

insert into articles (id, url, workflow_state)
values ('10000000-0000-0000-0000-000000000003', 'https://example.test/no-audit', 'Logged');

select throws_ok(
  $test$
    update articles
    set workflow_state = 'Validated'
    where id = '10000000-0000-0000-0000-000000000003'
  $test$,
  '23514',
  'article transition requires exactly one preceding audit row in the same transaction; found 0',
  'a state change without a transition is rejected'
);

select is(
  (
    select workflow_state::text
    from articles
    where id = '10000000-0000-0000-0000-000000000003'
  ),
  'Logged',
  'the article remains Logged after the unaudited attempt'
);

select throws_ok(
  $test$
    do $do$
    begin
      insert into articles (id, url, workflow_state)
      values ('10000000-0000-0000-0000-000000000004', 'https://example.test/agent-t5', 'Drafted');

      insert into workflow_transitions (
        id, article_id, from_state, to_state, gate_role, actor_type, actor_id,
        line_assignment, line_separation_status, identity_assurance, event_type,
        agent_id, supervising_human_id
      ) values (
        '20000000-0000-0000-0000-000000000004',
        '10000000-0000-0000-0000-000000000004',
        'Drafted', 'Reviewed', 'senior_journalist', 'agent', 'agent:reviewer',
        'Line2', 'satisfied', 'self_asserted', 'StateChange',
        'agent:reviewer', 'chief-editor'
      );

      update articles
      set workflow_state = 'Reviewed'
      where id = '10000000-0000-0000-0000-000000000004';
    end
    $do$
  $test$,
  '23514',
  'article transition requires exactly one preceding audit row in the same transaction; found 0',
  'T5 rejects an agent as the primary executor'
);

select is(
  (
    select count(*)
    from workflow_transitions
    where id = '20000000-0000-0000-0000-000000000004'
  ),
  0::bigint,
  'the rejected T5 attempt leaves no orphan transition'
);

select throws_ok(
  $test$
    do $do$
    begin
      insert into articles (id, url, workflow_state)
      values ('10000000-0000-0000-0000-000000000005', 'https://example.test/duplicate', 'Logged');

      insert into workflow_transitions (
        id, article_id, from_state, to_state, gate_role, actor_type, actor_id,
        line_assignment, line_separation_status, identity_assurance, event_type,
        agent_id, supervising_human_id
      ) values
        (
          '20000000-0000-0000-0000-000000000005',
          '10000000-0000-0000-0000-000000000005',
          'Logged', 'Validated', 'investigator', 'agent', 'agent:investigator',
          'Line1', 'not_applicable', 'self_asserted', 'StateChange',
          'agent:investigator', 'chief-editor'
        ),
        (
          '20000000-0000-0000-0000-000000000006',
          '10000000-0000-0000-0000-000000000005',
          'Logged', 'Validated', 'investigator', 'agent', 'agent:investigator',
          'Line1', 'not_applicable', 'self_asserted', 'StateChange',
          'agent:investigator', 'chief-editor'
        );

      update articles
      set workflow_state = 'Validated'
      where id = '10000000-0000-0000-0000-000000000005';
    end
    $do$
  $test$,
  '23514',
  'article transition requires exactly one preceding audit row in the same transaction; found 2',
  'a duplicate transition attempt is rejected'
);

select is(
  (
    select count(*)
    from workflow_transitions
    where article_id = '10000000-0000-0000-0000-000000000005'
  ),
  0::bigint,
  'the duplicate attempt rolls back both audit rows'
);

select throws_ok(
  $test$
    do $do$
    begin
      insert into articles (id, url, workflow_state)
      values ('10000000-0000-0000-0000-000000000006', 'https://example.test/no-op', 'Logged');

      insert into workflow_transitions (
        id, article_id, from_state, to_state, gate_role, actor_type, actor_id,
        line_assignment, line_separation_status, identity_assurance, event_type,
        agent_id, supervising_human_id
      ) values (
        '20000000-0000-0000-0000-000000000007',
        '10000000-0000-0000-0000-000000000006',
        'Logged', 'Validated', 'investigator', 'agent', 'agent:investigator',
        'Line1', 'not_applicable', 'self_asserted', 'StateChange',
        'agent:investigator', 'chief-editor'
      );

      update articles
      set workflow_state = 'Logged'
      where id = '10000000-0000-0000-0000-000000000006';
    end
    $do$
  $test$,
  '23514',
  'workflow_state update must change state; no-op updates are refused',
  'a no-op state update is rejected'
);

select is(
  (
    select count(*)
    from workflow_transitions
    where id = '20000000-0000-0000-0000-000000000007'
  ),
  0::bigint,
  'the no-op attempt leaves no orphan transition'
);

insert into articles (id, url, workflow_state)
values ('10000000-0000-0000-0000-000000000007', 'https://example.test/append-only', 'Logged');

insert into trend_signals (
  id, article_id, signal_type, signal_value, source, confidence, review_status
) values (
  '60000000-0000-0000-0000-000000000007',
  '10000000-0000-0000-0000-000000000007',
  'topic_tag', 'append-only', 'test', 1, 'reviewed'
);

insert into workflow_transitions (
  id, article_id, from_state, to_state, gate_role, actor_type, actor_id,
  line_assignment, line_separation_status, identity_assurance, event_type,
  agent_id, supervising_human_id
) values (
  '20000000-0000-0000-0000-000000000008',
  '10000000-0000-0000-0000-000000000007',
  'Logged', 'Validated', 'investigator', 'agent', 'agent:investigator',
  'Line1', 'not_applicable', 'self_asserted', 'StateChange',
  'agent:investigator', 'chief-editor'
);

insert into publication_targets (id, article_id, target)
values (
  '30000000-0000-0000-0000-000000000007',
  '10000000-0000-0000-0000-000000000007',
  'wordpress'
);

insert into publications (
  id, publication_target_id, event_type, actor_id, actor_type
) values (
  '40000000-0000-0000-0000-000000000007',
  '30000000-0000-0000-0000-000000000007',
  'Pending', 'system:test', 'system'
);

insert into editorial_reports (
  id, article_id, as_at_transition_id, template_version,
  template_effective_from, judgment_rule_version, schema_version, snapshot
) values (
  '50000000-0000-0000-0000-000000000007',
  '10000000-0000-0000-0000-000000000007',
  '20000000-0000-0000-0000-000000000008',
  'test-v1', '-infinity', 'test-v1', 'test-v1', '{}'::jsonb
);

select throws_ok(
  $$update trend_signals set review_status = 'changed' where id = '60000000-0000-0000-0000-000000000007'$$,
  '55000',
  'trend_signals is insert/read-only; write a superseding event instead',
  'trend_signals rejects UPDATE'
);
select throws_ok(
  $$delete from trend_signals where id = '60000000-0000-0000-0000-000000000007'$$,
  '55000',
  'trend_signals is insert/read-only; write a superseding event instead',
  'trend_signals rejects DELETE'
);
select throws_ok(
  $$update workflow_transitions set reason = 'changed' where id = '20000000-0000-0000-0000-000000000008'$$,
  '55000',
  'workflow_transitions is insert/read-only; write a superseding event instead',
  'workflow_transitions rejects UPDATE'
);
select throws_ok(
  $$delete from workflow_transitions where id = '20000000-0000-0000-0000-000000000008'$$,
  '55000',
  'workflow_transitions is insert/read-only; write a superseding event instead',
  'workflow_transitions rejects DELETE'
);
select throws_ok(
  $$update publication_targets set tenant_id = gen_random_uuid() where id = '30000000-0000-0000-0000-000000000007'$$,
  '55000',
  'publication_targets is insert/read-only; write a superseding event instead',
  'publication_targets rejects UPDATE'
);
select throws_ok(
  $$delete from publication_targets where id = '30000000-0000-0000-0000-000000000007'$$,
  '55000',
  'publication_targets is insert/read-only; write a superseding event instead',
  'publication_targets rejects DELETE'
);
select throws_ok(
  $$update publications set reason = 'changed' where id = '40000000-0000-0000-0000-000000000007'$$,
  '55000',
  'publications is insert/read-only; write a superseding event instead',
  'publications rejects UPDATE'
);
select throws_ok(
  $$delete from publications where id = '40000000-0000-0000-0000-000000000007'$$,
  '55000',
  'publications is insert/read-only; write a superseding event instead',
  'publications rejects DELETE'
);
select throws_ok(
  $$update editorial_reports set schema_version = 'changed' where id = '50000000-0000-0000-0000-000000000007'$$,
  '55000',
  'editorial_reports is insert/read-only; write a superseding event instead',
  'editorial_reports rejects UPDATE'
);
select throws_ok(
  $$delete from editorial_reports where id = '50000000-0000-0000-0000-000000000007'$$,
  '55000',
  'editorial_reports is insert/read-only; write a superseding event instead',
  'editorial_reports rejects DELETE'
);

select throws_ok(
  $test$
    do $do$
    begin
      insert into articles (id, url, workflow_state)
      values ('10000000-0000-0000-0000-000000000008', 'https://example.test/no-target', 'Reviewed');

      insert into workflow_transitions (
        id, article_id, from_state, to_state, gate_role, actor_type, actor_id,
        line_assignment, line_separation_status, identity_assurance, event_type,
        agent_id, supervising_human_id
      ) values (
        '20000000-0000-0000-0000-000000000009',
        '10000000-0000-0000-0000-000000000008',
        'Reviewed', 'Approved', 'chief_journalist', 'agent', 'agent:chief-journalist',
        'Line1', 'satisfied', 'self_asserted', 'StateChange',
        'agent:chief-journalist', 'chief-editor'
      );

      update articles
      set workflow_state = 'Approved'
      where id = '10000000-0000-0000-0000-000000000008';
    end
    $do$
  $test$,
  '23514',
  'approval requires at least one eagerly recorded publication target',
  'approval without an eager publication target is rejected'
);

select is(
  (
    select count(*)
    from workflow_transitions
    where id = '20000000-0000-0000-0000-000000000009'
  ),
  0::bigint,
  'the rejected approval leaves no orphan transition'
);

insert into articles (id, url, workflow_state)
values ('10000000-0000-0000-0000-000000000009', 'https://example.test/stale-publish', 'Approved');

insert into publication_targets (id, article_id, target)
values (
  '30000000-0000-0000-0000-000000000009',
  '10000000-0000-0000-0000-000000000009',
  'wordpress'
);

insert into publications (
  id, publication_target_id, event_type, published_url, actor_id, actor_type
) values (
  '40000000-0000-0000-0000-000000000009',
  '30000000-0000-0000-0000-000000000009',
  'Published', 'https://published.example.test/stale', 'system:test', 'system'
);

select throws_ok(
  $test$
    do $do$
    begin
      insert into workflow_transitions (
        id, article_id, from_state, to_state, gate_role, actor_type, actor_id,
        line_assignment, line_separation_status, identity_assurance, event_type
      ) values (
        '20000000-0000-0000-0000-000000000010',
        '10000000-0000-0000-0000-000000000009',
        'Approved', 'Published', 'chief_journalist', 'system', 'system:publisher',
        null, 'not_applicable', 'self_asserted', 'Published'
      );

      update articles
      set workflow_state = 'Published'
      where id = '10000000-0000-0000-0000-000000000009';
    end
    $do$
  $test$,
  '23514',
  'Published requires a live publication event in the same transaction',
  'a prior live event cannot authorize a later Published transition'
);

select is(
  (
    select count(*)
    from workflow_transitions
    where id = '20000000-0000-0000-0000-000000000010'
  ),
  0::bigint,
  'the rejected publication leaves no orphan transition'
);

select * from finish();
