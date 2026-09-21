-- Allowed-Functions: pg_catalog.count, pg_catalog.jsonb_path_exists
-- Allowed-Relations-Read: public.allowed_transitions, public.articles, public.editorial_reports, public.publications, public.workflow_transitions
-- Advisory-Special-Forms: COLLATE, FILTER, GROUP BY, NULLS FIRST
-- Advisory-Operators: = (pg_catalog.text, pg_catalog.text) -> pg_catalog.bool; pg_catalog.= (pg_catalog.anyenum, pg_catalog.anyenum) -> pg_catalog.bool
-- Advisory-Casts: unknown -> pg_catalog.jsonpath (I/O); unknown -> pg_catalog.text (I/O); unknown -> public.gate_role (I/O)
-- Advisory-Coercion-Note: unknown-typed literals are coerced to the compared type; UNION ALL widens pg_catalog.int4 to pg_catalog.int8.

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
results(catalog_id,schema_name,relation_name,column_name,field_classification,schema_version,total_rows,count_deprecated_exact,count_principal_lookalike,count_legacy_agent_lookalike,count_legacy_enum_lookalike) AS (
  SELECT k.catalog_id,k.schema_name,k.relation_name,k.column_name,k.field_classification,NULL::text,pg_catalog.count(w.id),pg_catalog.count(*) FILTER(WHERE w.actor_id='ROLE-CHIEF-EDITOR'),pg_catalog.count(*) FILTER(WHERE w.actor_id='chief-editor'),pg_catalog.count(*) FILTER(WHERE w.actor_id='legacy:chief_editor'),0 FROM catalog k LEFT JOIN public.workflow_transitions w ON true WHERE k.catalog_id='C01' GROUP BY k.catalog_id,k.schema_name,k.relation_name,k.column_name,k.field_classification
  UNION ALL SELECT k.catalog_id,k.schema_name,k.relation_name,k.column_name,k.field_classification,NULL::text,pg_catalog.count(w.id),pg_catalog.count(*) FILTER(WHERE w.agent_id='ROLE-CHIEF-EDITOR'),pg_catalog.count(*) FILTER(WHERE w.agent_id='chief-editor'),pg_catalog.count(*) FILTER(WHERE w.agent_id='legacy:chief_editor'),0 FROM catalog k LEFT JOIN public.workflow_transitions w ON true WHERE k.catalog_id='C02' GROUP BY k.catalog_id,k.schema_name,k.relation_name,k.column_name,k.field_classification
  UNION ALL SELECT k.catalog_id,k.schema_name,k.relation_name,k.column_name,k.field_classification,NULL::text,pg_catalog.count(w.id),pg_catalog.count(*) FILTER(WHERE w.agent_run_id='ROLE-CHIEF-EDITOR'),pg_catalog.count(*) FILTER(WHERE w.agent_run_id='chief-editor'),pg_catalog.count(*) FILTER(WHERE w.agent_run_id='legacy:chief_editor'),0 FROM catalog k LEFT JOIN public.workflow_transitions w ON true WHERE k.catalog_id='C03' GROUP BY k.catalog_id,k.schema_name,k.relation_name,k.column_name,k.field_classification
  UNION ALL SELECT k.catalog_id,k.schema_name,k.relation_name,k.column_name,k.field_classification,NULL::text,pg_catalog.count(w.id),pg_catalog.count(*) FILTER(WHERE w.supervising_human_id='ROLE-CHIEF-EDITOR'),pg_catalog.count(*) FILTER(WHERE w.supervising_human_id='chief-editor'),pg_catalog.count(*) FILTER(WHERE w.supervising_human_id='legacy:chief_editor'),0 FROM catalog k LEFT JOIN public.workflow_transitions w ON true WHERE k.catalog_id='C04' GROUP BY k.catalog_id,k.schema_name,k.relation_name,k.column_name,k.field_classification
  UNION ALL SELECT k.catalog_id,k.schema_name,k.relation_name,k.column_name,k.field_classification,NULL::text,pg_catalog.count(w.id),pg_catalog.count(*) FILTER(WHERE w.assisting_agent_id='ROLE-CHIEF-EDITOR'),pg_catalog.count(*) FILTER(WHERE w.assisting_agent_id='chief-editor'),pg_catalog.count(*) FILTER(WHERE w.assisting_agent_id='legacy:chief_editor'),0 FROM catalog k LEFT JOIN public.workflow_transitions w ON true WHERE k.catalog_id='C05' GROUP BY k.catalog_id,k.schema_name,k.relation_name,k.column_name,k.field_classification
  UNION ALL SELECT k.catalog_id,k.schema_name,k.relation_name,k.column_name,k.field_classification,NULL::text,pg_catalog.count(w.id),0,0,0,pg_catalog.count(*) FILTER(WHERE w.gate_role='chief_editor'::public.gate_role) FROM catalog k LEFT JOIN public.workflow_transitions w ON true WHERE k.catalog_id='C06' GROUP BY k.catalog_id,k.schema_name,k.relation_name,k.column_name,k.field_classification
  UNION ALL SELECT k.catalog_id,k.schema_name,k.relation_name,k.column_name,k.field_classification,NULL::text,pg_catalog.count(p.id),pg_catalog.count(*) FILTER(WHERE p.actor_id='ROLE-CHIEF-EDITOR'),pg_catalog.count(*) FILTER(WHERE p.actor_id='chief-editor'),pg_catalog.count(*) FILTER(WHERE p.actor_id='legacy:chief_editor'),0 FROM catalog k LEFT JOIN public.publications p ON true WHERE k.catalog_id='C07' GROUP BY k.catalog_id,k.schema_name,k.relation_name,k.column_name,k.field_classification
  UNION ALL SELECT k.catalog_id,k.schema_name,k.relation_name,k.column_name,k.field_classification,NULL::text,pg_catalog.count(a.id),0,0,0,pg_catalog.count(*) FILTER(WHERE a.required_role='chief_editor'::public.gate_role) FROM catalog k LEFT JOIN public.allowed_transitions a ON true WHERE k.catalog_id='C08' GROUP BY k.catalog_id,k.schema_name,k.relation_name,k.column_name,k.field_classification
  UNION ALL SELECT k.catalog_id,k.schema_name,k.relation_name,k.column_name,k.field_classification,NULL::text,pg_catalog.count(a.id),pg_catalog.count(*) FILTER(WHERE a.risk_tier_assigned_by='ROLE-CHIEF-EDITOR'),pg_catalog.count(*) FILTER(WHERE a.risk_tier_assigned_by='chief-editor'),pg_catalog.count(*) FILTER(WHERE a.risk_tier_assigned_by='legacy:chief_editor'),0 FROM catalog k LEFT JOIN public.articles a ON true WHERE k.catalog_id='C09' GROUP BY k.catalog_id,k.schema_name,k.relation_name,k.column_name,k.field_classification
  UNION ALL SELECT k.catalog_id,k.schema_name,k.relation_name,k.column_name,k.field_classification,e.schema_version,pg_catalog.count(e.id),
    pg_catalog.count(*) FILTER(WHERE pg_catalog.jsonb_path_exists(e.snapshot,'$.** ? (@.type() == "string" && @ == "ROLE-CHIEF-EDITOR")'::pg_catalog.jsonpath)),
    pg_catalog.count(*) FILTER(WHERE pg_catalog.jsonb_path_exists(e.snapshot,'$.** ? (@.type() == "string" && @ == "chief-editor")'::pg_catalog.jsonpath)),
    pg_catalog.count(*) FILTER(WHERE pg_catalog.jsonb_path_exists(e.snapshot,'$.** ? (@.type() == "string" && @ == "legacy:chief_editor")'::pg_catalog.jsonpath)),0
    FROM catalog k LEFT JOIN public.editorial_reports e ON true WHERE k.catalog_id='C10'
    GROUP BY k.catalog_id,k.schema_name,k.relation_name,k.column_name,k.field_classification,e.schema_version
)
SELECT 'ASSESSMENT' AS result_set_name,* FROM results
ORDER BY catalog_id COLLATE "C",schema_version COLLATE "C" NULLS FIRST;

ROLLBACK;

