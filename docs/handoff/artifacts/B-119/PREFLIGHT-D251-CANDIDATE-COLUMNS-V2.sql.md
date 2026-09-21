-- Draft for Lane A review. Not approved for execution. No database access authorized.
-- SET LOCAL search_path is the sole permitted transaction-local configuration change. It writes no database row or schema object and is rolled back with the transaction.
-- Allowed-Functions: pg_catalog.coalesce, pg_catalog.count, pg_catalog.format_type, pg_catalog.has_table_privilege, pg_catalog.pg_get_userbyid
-- Allowed-Relations-Read: information_schema.columns, pg_catalog.pg_class, pg_catalog.pg_namespace, pg_catalog.pg_roles
-- Allowed-Operators: = (pg_catalog.name, pg_catalog.name) -> pg_catalog.bool; = (pg_catalog.text, pg_catalog.text) -> pg_catalog.bool; <> (pg_catalog."char", pg_catalog."char") -> pg_catalog.bool; OR (pg_catalog.bool, pg_catalog.bool) -> pg_catalog.bool
-- Allowed-Casts: information_schema.sql_identifier -> pg_catalog.text (I/O); information_schema.character_data -> pg_catalog.text (I/O); pg_catalog.name -> pg_catalog.text (binary); pg_catalog."char" -> pg_catalog.text (I/O)

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
relevant_columns AS (
  SELECT c.table_schema::text AS schema_name, c.table_name::text AS relation_name,
         c.column_name::text, c.data_type::text, c.udt_schema::text, c.udt_name::text,
         CASE WHEN c.data_type = 'ARRAY' THEN c.udt_name::text ELSE NULL END AS array_element_type
  FROM information_schema.columns c
  WHERE c.table_schema = 'public'
    AND (c.data_type IN ('text','character varying','character','USER-DEFINED','ARRAY','json','jsonb'))
),
relations AS (
  SELECT n.nspname::text AS schema_name, k.relname::text AS relation_name,
         CASE k.relkind WHEN 'r' THEN 'BASE TABLE' WHEN 'p' THEN 'PARTITIONED TABLE'
                        WHEN 'v' THEN 'VIEW' WHEN 'm' THEN 'MATERIALIZED VIEW' ELSE k.relkind::text END AS relation_kind,
         k.relrowsecurity, k.relforcerowsecurity, pg_get_userbyid(k.relowner)::text AS owner_name,
         has_table_privilege(current_user, k.oid, 'SELECT') AS has_select,
         r.rolsuper, r.rolbypassrls, (pg_get_userbyid(k.relowner) = current_user) AS is_owner
  FROM pg_catalog.pg_class k
  JOIN pg_catalog.pg_namespace n ON n.oid = k.relnamespace
  JOIN pg_catalog.pg_roles r ON r.rolname = current_user
  WHERE n.nspname = 'public' AND k.relkind IN ('r','p','v','m')
),
classified AS (
  SELECT rc.*, rel.relation_kind, rel.has_select, rel.rolsuper, rel.rolbypassrls, rel.is_owner,
         rel.relrowsecurity, rel.relforcerowsecurity, cc.candidate_id,
         CASE WHEN cc.candidate_id IS NOT NULL THEN 'CANDIDATE'
              ELSE 'EXCLUDED_NON_IDENTITY_FIELD' END AS mapping_status,
         CASE WHEN cc.candidate_id IS NULL
              THEN 'Not a governed identity field; retained in exhaustive reconciliation' ELSE NULL END AS exclusion_reason
  FROM relevant_columns rc
  JOIN relations rel USING (schema_name, relation_name)
  LEFT JOIN candidate_catalog cc
    ON cc.schema_name=rc.schema_name AND cc.relation_name=rc.relation_name AND cc.column_name=rc.column_name
)
SELECT
  coalesce(candidate_id, 'E-' || relation_name || '-' || column_name) AS catalog_id,
  schema_name, relation_name, relation_kind, column_name, data_type, udt_schema, udt_name,
  array_element_type, mapping_status, exclusion_reason,
  has_select,
  (rolsuper OR rolbypassrls OR NOT relrowsecurity OR (is_owner AND NOT relforcerowsecurity)) AS full_visibility,
  CASE
    WHEN NOT has_select THEN 'ENVIRONMENT-INACCESSIBLE'
    WHEN relation_kind IN ('VIEW','MATERIALIZED VIEW') THEN 'VISIBILITY-UNPROVEN'
    WHEN NOT (rolsuper OR rolbypassrls OR NOT relrowsecurity OR (is_owner AND NOT relforcerowsecurity)) THEN 'VISIBILITY-UNPROVEN'
    ELSE 'VERIFIED'
  END AS preflight_status
FROM classified
ORDER BY catalog_id, schema_name, relation_name, column_name;

ROLLBACK;
