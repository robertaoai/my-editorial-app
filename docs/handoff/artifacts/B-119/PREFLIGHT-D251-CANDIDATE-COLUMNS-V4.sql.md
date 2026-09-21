-- Draft for Lane A review. Not approved for execution. No database access authorized.
-- Allowed-Functions: pg_catalog.has_table_privilege, pg_catalog.pg_get_userbyid
-- Allowed-Relations-Read: pg_catalog.pg_attribute, pg_catalog.pg_class, pg_catalog.pg_namespace, pg_catalog.pg_roles, pg_catalog.pg_type
-- Advisory-Special-Forms: CASE, COLLATE, current_user, EXISTS, IN, IS NOT DISTINCT FROM, IS NOT NULL, IS NULL, NULLS FIRST
-- Advisory-Operators: = (pg_catalog.name, pg_catalog.name) -> pg_catalog.bool; = (pg_catalog.oid, pg_catalog.oid) -> pg_catalog.bool; = (pg_catalog.text, pg_catalog.text) -> pg_catalog.bool; <> (pg_catalog."char", pg_catalog."char") -> pg_catalog.bool; <> (pg_catalog.oid, pg_catalog.oid) -> pg_catalog.bool; > (pg_catalog.int2, pg_catalog.int2) -> pg_catalog.bool; AND (pg_catalog.bool, pg_catalog.bool) -> pg_catalog.bool; NOT (missing, pg_catalog.bool) -> pg_catalog.bool; OR (pg_catalog.bool, pg_catalog.bool) -> pg_catalog.bool; || (pg_catalog.text, pg_catalog.text) -> pg_catalog.text
-- Advisory-Casts: pg_catalog."char" -> pg_catalog.text (I/O); pg_catalog.name -> pg_catalog.text (binary)

BEGIN TRANSACTION READ ONLY;
SET LOCAL search_path = pg_catalog, pg_temp;

WITH
-- BEGIN CATALOG
catalog(catalog_id,schema_name,relation_name,relation_kind,column_name,data_type,udt_schema,udt_name,array_element_type,field_classification,exclusion_reason) AS (
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
    ('C10','public','editorial_reports','BASE TABLE','snapshot','jsonb','pg_catalog','jsonb',NULL,'snapshot_exact_string_value',NULL),
    ('E01','public','topics','BASE TABLE','name','text','pg_catalog','text',NULL,'excluded','label-or-taxonomy'),
    ('E02','public','topics','BASE TABLE','slug','text','pg_catalog','text',NULL,'excluded','label-or-taxonomy'),
    ('E03','public','topics','BASE TABLE','evolution_notes','text','pg_catalog','text',NULL,'excluded','prose'),
    ('E04','public','topics','BASE TABLE','scope_boundary','text','pg_catalog','text',NULL,'excluded','prose'),
    ('E05','public','sources','BASE TABLE','name','text','pg_catalog','text',NULL,'excluded','label-or-taxonomy'),
    ('E06','public','sources','BASE TABLE','platform','USER-DEFINED','public','platform_type',NULL,'excluded','non-role-enum'),
    ('E07','public','sources','BASE TABLE','reliability_tier','USER-DEFINED','public','reliability_tier',NULL,'excluded','non-role-enum'),
    ('E08','public','sources','BASE TABLE','ingestion_method','USER-DEFINED','public','ingestion_method',NULL,'excluded','non-role-enum'),
    ('E09','public','articles','BASE TABLE','url','text','pg_catalog','text',NULL,'excluded','url'),
    ('E10','public','articles','BASE TABLE','title','text','pg_catalog','text',NULL,'excluded','prose'),
    ('E11','public','articles','BASE TABLE','summary','text','pg_catalog','text',NULL,'excluded','prose'),
    ('E12','public','articles','BASE TABLE','summary_source','text','pg_catalog','text',NULL,'excluded','version-or-id-token'),
    ('E13','public','articles','BASE TABLE','summary_review_status','text','pg_catalog','text',NULL,'excluded','label-or-taxonomy'),
    ('E14','public','articles','BASE TABLE','category','text','pg_catalog','text',NULL,'excluded','label-or-taxonomy'),
    ('E15','public','articles','BASE TABLE','workflow_state','USER-DEFINED','public','article_state_v2',NULL,'excluded','non-role-enum'),
    ('E16','public','articles','BASE TABLE','publication_target','USER-DEFINED','public','pub_target',NULL,'excluded','non-role-enum'),
    ('E17','public','articles','BASE TABLE','published_url','text','pg_catalog','text',NULL,'excluded','url'),
    ('E18','public','articles','BASE TABLE','revision_reason','text','pg_catalog','text',NULL,'excluded','prose'),
    ('E19','public','articles','BASE TABLE','revision_target_state','USER-DEFINED','public','article_state_v2',NULL,'excluded','non-role-enum'),
    ('E20','public','articles','BASE TABLE','source_author','text','pg_catalog','text',NULL,'excluded','prose'),
    ('E21','public','articles','BASE TABLE','editorial_angle','text','pg_catalog','text',NULL,'excluded','prose'),
    ('E22','public','articles','BASE TABLE','editorial_adaptation','text','pg_catalog','text',NULL,'excluded','prose'),
    ('E23','public','articles','BASE TABLE','article_kind','USER-DEFINED','public','article_kind',NULL,'excluded','non-role-enum'),
    ('E24','public','articles','BASE TABLE','risk_tier','USER-DEFINED','public','risk_tier',NULL,'excluded','non-role-enum'),
    ('E25','public','articles','BASE TABLE','risk_tier_reason','text','pg_catalog','text',NULL,'excluded','prose'),
    ('E26','public','articles','BASE TABLE','risk_tier_ruleset_version','text','pg_catalog','text',NULL,'excluded','version-or-id-token'),
    ('E27','public','trend_signals','BASE TABLE','signal_type','USER-DEFINED','public','signal_type',NULL,'excluded','non-role-enum'),
    ('E28','public','trend_signals','BASE TABLE','signal_value','text','pg_catalog','text',NULL,'excluded','label-or-taxonomy'),
    ('E29','public','trend_signals','BASE TABLE','source','text','pg_catalog','text',NULL,'excluded','version-or-id-token'),
    ('E30','public','trend_signals','BASE TABLE','review_status','text','pg_catalog','text',NULL,'excluded','label-or-taxonomy'),
    ('E31','public','trend_signals','BASE TABLE','evidence_url','text','pg_catalog','text',NULL,'excluded','url'),
    ('E32','public','trend_signals','BASE TABLE','reviewer_confidence','USER-DEFINED','public','reviewer_confidence',NULL,'excluded','non-role-enum'),
    ('E33','public','workflow_transitions','BASE TABLE','from_state','USER-DEFINED','public','article_state_v2',NULL,'excluded','non-role-enum'),
    ('E34','public','workflow_transitions','BASE TABLE','to_state','USER-DEFINED','public','article_state_v2',NULL,'excluded','non-role-enum'),
    ('E35','public','workflow_transitions','BASE TABLE','actor_type','USER-DEFINED','public','actor_type',NULL,'excluded','non-role-enum'),
    ('E36','public','workflow_transitions','BASE TABLE','reason','text','pg_catalog','text',NULL,'excluded','prose'),
    ('E37','public','workflow_transitions','BASE TABLE','line_assignment','USER-DEFINED','public','line_assignment',NULL,'excluded','non-role-enum'),
    ('E38','public','workflow_transitions','BASE TABLE','line_separation_status','USER-DEFINED','public','line_separation_status',NULL,'excluded','non-role-enum'),
    ('E39','public','workflow_transitions','BASE TABLE','identity_assurance','USER-DEFINED','public','identity_assurance',NULL,'excluded','non-role-enum'),
    ('E40','public','workflow_transitions','BASE TABLE','event_type','USER-DEFINED','public','audit_event_type',NULL,'excluded','non-role-enum'),
    ('E41','public','allowed_transitions','BASE TABLE','gate_id','text','pg_catalog','text',NULL,'excluded','version-or-id-token'),
    ('E42','public','allowed_transitions','BASE TABLE','from_state','USER-DEFINED','public','article_state_v2',NULL,'excluded','non-role-enum'),
    ('E43','public','allowed_transitions','BASE TABLE','to_state','USER-DEFINED','public','article_state_v2',NULL,'excluded','non-role-enum'),
    ('E44','public','allowed_transitions','BASE TABLE','kind','USER-DEFINED','public','allowed_transition_kind',NULL,'excluded','non-role-enum'),
    ('E45','public','allowed_transitions','BASE TABLE','required_line','USER-DEFINED','public','line_assignment',NULL,'excluded','non-role-enum'),
    ('E46','public','allowed_transitions','BASE TABLE','required_actor_type','USER-DEFINED','public','actor_type',NULL,'excluded','non-role-enum'),
    ('E47','public','publication_targets','BASE TABLE','target','USER-DEFINED','public','publication_channel',NULL,'excluded','non-role-enum'),
    ('E48','public','publications','BASE TABLE','event_type','USER-DEFINED','public','publication_event_type',NULL,'excluded','non-role-enum'),
    ('E49','public','publications','BASE TABLE','published_url','text','pg_catalog','text',NULL,'excluded','url'),
    ('E50','public','publications','BASE TABLE','formatted_content','text','pg_catalog','text',NULL,'excluded','prose'),
    ('E51','public','publications','BASE TABLE','provider_event_id','text','pg_catalog','text',NULL,'excluded','version-or-id-token'),
    ('E52','public','publications','BASE TABLE','reason','text','pg_catalog','text',NULL,'excluded','prose'),
    ('E53','public','publications','BASE TABLE','actor_type','USER-DEFINED','public','actor_type',NULL,'excluded','non-role-enum'),
    ('E54','public','editorial_reports','BASE TABLE','template_version','text','pg_catalog','text',NULL,'excluded','version-or-id-token'),
    ('E55','public','editorial_reports','BASE TABLE','judgment_rule_version','text','pg_catalog','text',NULL,'excluded','version-or-id-token'),
    ('E56','public','editorial_reports','BASE TABLE','schema_version','text','pg_catalog','text',NULL,'excluded','version-or-id-token')
),
-- END CATALOG
actual_columns AS (
  SELECT n.nspname::text AS schema_name, c.relname::text AS relation_name,
    CASE c.relkind WHEN 'r' THEN 'BASE TABLE' WHEN 'p' THEN 'PARTITIONED TABLE' WHEN 'v' THEN 'VIEW' WHEN 'm' THEN 'MATERIALIZED VIEW' ELSE c.relkind::text END AS relation_kind,
    a.attname::text AS column_name,
    CASE WHEN t.typtype = 'e' THEN 'USER-DEFINED' WHEN t.typcategory = 'A' THEN 'ARRAY' ELSE t.typname::text END AS data_type,
    tn.nspname::text AS udt_schema, t.typname::text AS udt_name,
    CASE WHEN t.typcategory = 'A' THEN en.nspname::text || '.' || et.typname::text ELSE NULL END AS array_element_type
  FROM pg_catalog.pg_attribute a
  JOIN pg_catalog.pg_class c ON c.oid = a.attrelid
  JOIN pg_catalog.pg_namespace n ON n.oid = c.relnamespace
  JOIN pg_catalog.pg_type t ON t.oid = a.atttypid
  JOIN pg_catalog.pg_namespace tn ON tn.oid = t.typnamespace
  LEFT JOIN pg_catalog.pg_type et ON et.oid = t.typelem AND t.typelem <> 0
  LEFT JOIN pg_catalog.pg_namespace en ON en.oid = et.typnamespace
  WHERE n.nspname = 'public' AND c.relkind IN ('r','p','v','m') AND a.attnum > 0 AND NOT a.attisdropped
    AND (t.typname IN ('text','varchar','bpchar','json','jsonb') OR t.typtype = 'e' OR t.typcategory = 'A')
),
catalog_validation AS (
  SELECT 'CATALOG-VALIDATION'::text AS result_set_name, k.catalog_id,
    k.schema_name, k.relation_name, k.column_name, k.field_classification, k.exclusion_reason,
    CASE WHEN a.column_name IS NULL THEN 'ARTIFACT-INVALID'
         WHEN k.relation_kind <> a.relation_kind OR k.data_type <> a.data_type OR k.udt_schema <> a.udt_schema OR k.udt_name <> a.udt_name
           OR NOT (k.array_element_type IS NOT DISTINCT FROM a.array_element_type) THEN 'ARTIFACT-INVALID'
         ELSE 'VERIFIED' END AS status,
    CASE WHEN a.column_name IS NULL THEN 'catalog row has no physical column'
         WHEN k.relation_kind <> a.relation_kind OR k.data_type <> a.data_type OR k.udt_schema <> a.udt_schema OR k.udt_name <> a.udt_name
           OR NOT (k.array_element_type IS NOT DISTINCT FROM a.array_element_type) THEN 'catalog type identity differs from physical column'
         ELSE NULL END AS detail
  FROM catalog k LEFT JOIN actual_columns a USING (schema_name,relation_name,column_name)
),
reconciliation AS (
  SELECT 'RECONCILIATION'::text AS result_set_name,
    'U-' || a.relation_name || '-' || a.column_name AS catalog_id,
    a.schema_name,a.relation_name,a.column_name,NULL::text AS field_classification,NULL::text AS exclusion_reason,
    'UNRECONCILED'::text AS status,'relevant physical column absent from fixed catalog'::text AS detail
  FROM actual_columns a
  WHERE NOT EXISTS (SELECT 1 FROM catalog k WHERE k.schema_name=a.schema_name AND k.relation_name=a.relation_name AND k.column_name=a.column_name)
),
visibility AS (
  SELECT 'VISIBILITY'::text AS result_set_name,'V-' || n.nspname::text || '-' || c.relname::text AS catalog_id,
    n.nspname::text AS schema_name,c.relname::text AS relation_name,NULL::text AS column_name,NULL::text AS field_classification,NULL::text AS exclusion_reason,
    CASE WHEN NOT pg_catalog.has_table_privilege(current_user,c.oid,'SELECT') THEN 'ENVIRONMENT-INACCESSIBLE'
         WHEN c.relkind IN ('v','m') THEN 'VISIBILITY-UNPROVEN'
         WHEN c.relrowsecurity AND NOT (r.rolsuper OR r.rolbypassrls OR (pg_catalog.pg_get_userbyid(c.relowner)=current_user AND NOT c.relforcerowsecurity)) THEN 'VISIBILITY-UNPROVEN'
         ELSE 'VERIFIED' END AS status,
    CASE WHEN NOT pg_catalog.has_table_privilege(current_user,c.oid,'SELECT') THEN 'execution role lacks SELECT'
         WHEN c.relkind IN ('v','m') THEN 'view visibility requires separate proof'
         WHEN c.relrowsecurity AND NOT (r.rolsuper OR r.rolbypassrls OR (pg_catalog.pg_get_userbyid(c.relowner)=current_user AND NOT c.relforcerowsecurity)) THEN 'full row visibility is not proven'
         ELSE NULL END AS detail
  FROM pg_catalog.pg_class c
  JOIN pg_catalog.pg_namespace n ON n.oid=c.relnamespace
  JOIN pg_catalog.pg_roles r ON r.rolname=current_user
  WHERE n.nspname='public' AND c.relkind IN ('r','p','v','m')
    AND EXISTS (SELECT 1 FROM catalog k WHERE k.schema_name=n.nspname::text AND k.relation_name=c.relname::text)
),
output AS (
  SELECT * FROM catalog_validation
  UNION ALL SELECT * FROM reconciliation
  UNION ALL SELECT * FROM visibility
)
SELECT * FROM output
ORDER BY result_set_name COLLATE "C", catalog_id COLLATE "C", schema_name COLLATE "C", relation_name COLLATE "C", column_name COLLATE "C" NULLS FIRST;

ROLLBACK;

