-- Draft for Lane A review. Not approved for execution. No database access authorized.
-- SET LOCAL search_path is the sole permitted transaction-local configuration change. It writes no database row or schema object and is rolled back with the transaction.
-- Allowed-Functions: pg_catalog.count, pg_catalog.jsonb_path_exists
-- Allowed-Relations-Read: public.allowed_transitions, public.articles, public.editorial_reports, public.publications, public.workflow_transitions
-- Allowed-Operators: = (pg_catalog.text, pg_catalog.text) -> pg_catalog.bool; = (public.gate_role, public.gate_role) -> pg_catalog.bool
-- Allowed-Casts: unknown -> pg_catalog.text (I/O); unknown -> public.gate_role (I/O); pg_catalog.jsonpath -> pg_catalog.jsonpath (binary)

BEGIN TRANSACTION READ ONLY;
SET LOCAL search_path = pg_catalog, pg_temp;

WITH
-- BEGIN CATALOG
candidate_catalog(candidate_id, schema_name, relation_name, relation_kind, column_name, data_type, udt_schema, udt_name, array_element_type, field_classification, exclusion_reason) AS (
  VALUES
    ('C01','public','workflow_transitions','BASE TABLE','actor_id','text','pg_catalog','text',NULL,'principal_or_actor_identity',NULL),
    ('C02','public','workflow_transitions','BASE TABLE','agent_id','text','pg_catalog','text',NULL,'virtual_agent_identity',NULL),
    ('C03','public','workflow_transitions','BASE TABLE','agent_run_id','text','pg_catalog','text',NULL,'agent_run_negative_control',NULL),
    ('C04','public','workflow_transitions','BASE TABLE','supervising_human_id','text','pg_catalog','text',NULL,'supervising_human_identity',NULL),
    ('C05','public','workflow_transitions','BASE TABLE','assisting_agent_id','text','pg_catalog','text',NULL,'assisting_agent_identity',NULL),
    ('C06','public','workflow_transitions','BASE TABLE','gate_role','USER-DEFINED','public','gate_role',NULL,'legacy_gate_role_lookalike',NULL),
    ('C07','public','publications','BASE TABLE','actor_id','text','pg_catalog','text',NULL,'publication_actor_identity',NULL),
    ('C08','public','allowed_transitions','BASE TABLE','required_role','USER-DEFINED','public','gate_role',NULL,'transition_rule_role_lookalike',NULL),
    ('C09','public','articles','BASE TABLE','risk_tier_assigned_by','text','pg_catalog','text',NULL,'risk_assignment_actor_identity',NULL),
    ('C10','public','editorial_reports','BASE TABLE','snapshot','jsonb','pg_catalog','jsonb',NULL,'snapshot_exact_string_value',NULL)
),
-- END CATALOG
results(candidate_id,schema_name,relation_name,column_name,field_classification,schema_version,total_rows,count_deprecated_exact,count_principal_lookalike,count_legacy_agent_lookalike,count_legacy_enum_lookalike) AS (
  SELECT 'C01','public','workflow_transitions','actor_id','principal_or_actor_identity',NULL,count(*),count(*) FILTER(WHERE actor_id='ROLE-CHIEF-EDITOR'),count(*) FILTER(WHERE actor_id='chief-editor'),count(*) FILTER(WHERE actor_id='legacy:chief_editor'),0 FROM public.workflow_transitions
  UNION ALL SELECT 'C02','public','workflow_transitions','agent_id','virtual_agent_identity',NULL,count(*),count(*) FILTER(WHERE agent_id='ROLE-CHIEF-EDITOR'),count(*) FILTER(WHERE agent_id='chief-editor'),count(*) FILTER(WHERE agent_id='legacy:chief_editor'),0 FROM public.workflow_transitions
  UNION ALL SELECT 'C03','public','workflow_transitions','agent_run_id','agent_run_negative_control',NULL,count(*),count(*) FILTER(WHERE agent_run_id='ROLE-CHIEF-EDITOR'),count(*) FILTER(WHERE agent_run_id='chief-editor'),count(*) FILTER(WHERE agent_run_id='legacy:chief_editor'),0 FROM public.workflow_transitions
  UNION ALL SELECT 'C04','public','workflow_transitions','supervising_human_id','supervising_human_identity',NULL,count(*),count(*) FILTER(WHERE supervising_human_id='ROLE-CHIEF-EDITOR'),count(*) FILTER(WHERE supervising_human_id='chief-editor'),count(*) FILTER(WHERE supervising_human_id='legacy:chief_editor'),0 FROM public.workflow_transitions
  UNION ALL SELECT 'C05','public','workflow_transitions','assisting_agent_id','assisting_agent_identity',NULL,count(*),count(*) FILTER(WHERE assisting_agent_id='ROLE-CHIEF-EDITOR'),count(*) FILTER(WHERE assisting_agent_id='chief-editor'),count(*) FILTER(WHERE assisting_agent_id='legacy:chief_editor'),0 FROM public.workflow_transitions
  UNION ALL SELECT 'C06','public','workflow_transitions','gate_role','legacy_gate_role_lookalike',NULL,count(*),0,0,0,count(*) FILTER(WHERE gate_role='chief_editor'::public.gate_role) FROM public.workflow_transitions
  UNION ALL SELECT 'C07','public','publications','actor_id','publication_actor_identity',NULL,count(*),count(*) FILTER(WHERE actor_id='ROLE-CHIEF-EDITOR'),count(*) FILTER(WHERE actor_id='chief-editor'),count(*) FILTER(WHERE actor_id='legacy:chief_editor'),0 FROM public.publications
  UNION ALL SELECT 'C08','public','allowed_transitions','required_role','transition_rule_role_lookalike',NULL,count(*),0,0,0,count(*) FILTER(WHERE required_role='chief_editor'::public.gate_role) FROM public.allowed_transitions
  UNION ALL SELECT 'C09','public','articles','risk_tier_assigned_by','risk_assignment_actor_identity',NULL,count(*),count(*) FILTER(WHERE risk_tier_assigned_by='ROLE-CHIEF-EDITOR'),count(*) FILTER(WHERE risk_tier_assigned_by='chief-editor'),count(*) FILTER(WHERE risk_tier_assigned_by='legacy:chief_editor'),0 FROM public.articles
  UNION ALL SELECT 'C10','public','editorial_reports','snapshot','snapshot_exact_string_value',schema_version,count(*),
    count(*) FILTER(WHERE pg_catalog.jsonb_path_exists(snapshot,'$.** ? (@.type() == "string" && @ == "ROLE-CHIEF-EDITOR")'::pg_catalog.jsonpath)),
    count(*) FILTER(WHERE pg_catalog.jsonb_path_exists(snapshot,'$.** ? (@.type() == "string" && @ == "chief-editor")'::pg_catalog.jsonpath)),
    count(*) FILTER(WHERE pg_catalog.jsonb_path_exists(snapshot,'$.** ? (@.type() == "string" && @ == "legacy:chief_editor")'::pg_catalog.jsonpath)),0
    FROM public.editorial_reports GROUP BY schema_version
)
SELECT * FROM results ORDER BY candidate_id, schema_version NULLS FIRST;

ROLLBACK;
