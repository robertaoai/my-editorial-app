BEGIN TRANSACTION READ ONLY;

SELECT * FROM (
    SELECT
        'C01'::text AS candidate_id,
        'public'::text AS schema_name,
        'workflow_transitions'::text AS table_name,
        'actor_id'::text AS column_name,
        'text'::text AS storage_type,
        'Principal or actor identity'::text AS classification,
        'SCANNED'::text AS scan_status,
        count(*) FILTER (WHERE actor_id = 'ROLE-CHIEF-EDITOR')::bigint AS count_deprecated_exact,
        count(*) FILTER (WHERE actor_id = 'chief-editor')::bigint AS count_principal_lookalike,
        count(*) FILTER (WHERE actor_id = 'legacy:chief_editor')::bigint AS count_legacy_agent_lookalike,
        0::bigint AS count_legacy_enum_lookalike
    FROM public.workflow_transitions

    UNION ALL

    SELECT
        'C02'::text, 'public'::text, 'workflow_transitions'::text, 'agent_id'::text, 'text'::text,
        'Virtual-agent identity'::text, 'SCANNED'::text,
        count(*) FILTER (WHERE agent_id = 'ROLE-CHIEF-EDITOR')::bigint,
        count(*) FILTER (WHERE agent_id = 'chief-editor')::bigint,
        count(*) FILTER (WHERE agent_id = 'legacy:chief_editor')::bigint,
        0::bigint
    FROM public.workflow_transitions

    UNION ALL

    SELECT
        'C03'::text, 'public'::text, 'workflow_transitions'::text, 'agent_run_id'::text, 'text'::text,
        'Agent execution run identifier (negative control)'::text, 'SCANNED'::text,
        count(*) FILTER (WHERE agent_run_id = 'ROLE-CHIEF-EDITOR')::bigint,
        count(*) FILTER (WHERE agent_run_id = 'chief-editor')::bigint,
        count(*) FILTER (WHERE agent_run_id = 'legacy:chief_editor')::bigint,
        0::bigint
    FROM public.workflow_transitions

    UNION ALL

    SELECT
        'C04'::text, 'public'::text, 'workflow_transitions'::text, 'supervising_human_id'::text, 'text'::text,
        'Human supervising principal'::text, 'SCANNED'::text,
        count(*) FILTER (WHERE supervising_human_id = 'ROLE-CHIEF-EDITOR')::bigint,
        count(*) FILTER (WHERE supervising_human_id = 'chief-editor')::bigint,
        count(*) FILTER (WHERE supervising_human_id = 'legacy:chief_editor')::bigint,
        0::bigint
    FROM public.workflow_transitions

    UNION ALL

    SELECT
        'C05'::text, 'public'::text, 'workflow_transitions'::text, 'assisting_agent_id'::text, 'text'::text,
        'Assisting virtual-agent identity'::text, 'SCANNED'::text,
        count(*) FILTER (WHERE assisting_agent_id = 'ROLE-CHIEF-EDITOR')::bigint,
        count(*) FILTER (WHERE assisting_agent_id = 'chief-editor')::bigint,
        count(*) FILTER (WHERE assisting_agent_id = 'legacy:chief_editor')::bigint,
        0::bigint
    FROM public.workflow_transitions

    UNION ALL

    SELECT
        'C06'::text, 'public'::text, 'workflow_transitions'::text, 'gate_role'::text, 'gate_role'::text,
        'Legacy gate role enum look-alike'::text, 'SCANNED'::text,
        0::bigint,
        0::bigint,
        0::bigint,
        count(*) FILTER (WHERE gate_role = 'chief_editor')::bigint
    FROM public.workflow_transitions

    UNION ALL

    SELECT
        'C07'::text, 'public'::text, 'publications'::text, 'actor_id'::text, 'text'::text,
        'Publication-event actor identity'::text, 'SCANNED'::text,
        count(*) FILTER (WHERE actor_id = 'ROLE-CHIEF-EDITOR')::bigint,
        count(*) FILTER (WHERE actor_id = 'chief-editor')::bigint,
        count(*) FILTER (WHERE actor_id = 'legacy:chief_editor')::bigint,
        0::bigint
    FROM public.publications

    UNION ALL

    SELECT
        'C08'::text, 'public'::text, 'allowed_transitions'::text, 'required_role'::text, 'gate_role'::text,
        'Transition rule gate role enum look-alike'::text, 'SCANNED'::text,
        0::bigint,
        0::bigint,
        0::bigint,
        count(*) FILTER (WHERE required_role = 'chief_editor')::bigint
    FROM public.allowed_transitions

    UNION ALL

    SELECT
        'C09'::text, 'public'::text, 'articles'::text, 'risk_tier_assigned_by'::text, 'text'::text,
        'Risk tier assignment actor provenance'::text, 'SCANNED'::text,
        count(*) FILTER (WHERE risk_tier_assigned_by = 'ROLE-CHIEF-EDITOR')::bigint,
        count(*) FILTER (WHERE risk_tier_assigned_by = 'chief-editor')::bigint,
        count(*) FILTER (WHERE risk_tier_assigned_by = 'legacy:chief_editor')::bigint,
        0::bigint
    FROM public.articles
) candidates
ORDER BY candidate_id ASC;

SELECT
    e.exclusion_id,
    'public'::text AS schema_name,
    e.table_name::text,
    e.column_name::text,
    e.storage_type::text,
    e.exclusion_reason::text
FROM (VALUES
    ('E01', 'publication_targets', 'target', 'publication_channel', 'Channel destination enum, not an identity or actor field'),
    ('E02', 'workflow_transitions', 'user_id', 'uuid', 'UUID data type; structurally unable to contain text entitlement string'),
    ('E03', 'allowed_transitions', 'required_actor_type', 'actor_type_v2', 'Actor type discriminator enum (human/agent), not role entitlement'),
    ('E04', 'editorial_reports', 'snapshot', 'jsonb', 'Unindexed JSON payload; no governed JSON entitlement path established'),
    ('E05', 'articles', 'content', 'text', 'Unstructured editorial body prose; strictly excluded from identity assessment'),
    ('E06', 'articles', 'title', 'text', 'Editorial content title; strictly excluded from identity assessment'),
    ('E07', 'articles', 'url', 'text', 'Content URL string; strictly excluded from identity assessment'),
    ('E08', 'sources', 'name', 'text', 'External news source name; not an application identity field'),
    ('E09', 'topics', 'name', 'text', 'Editorial topic taxonomy; not an identity field')
) AS e(exclusion_id, table_name, column_name, storage_type, exclusion_reason)
ORDER BY e.exclusion_id ASC;

ROLLBACK;
