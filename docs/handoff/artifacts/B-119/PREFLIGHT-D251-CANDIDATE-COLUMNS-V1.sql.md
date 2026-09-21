BEGIN TRANSACTION READ ONLY;

WITH expected_candidates AS (
    SELECT * FROM (VALUES
        ('C01', 'workflow_transitions', 'actor_id', 'text'),
        ('C02', 'workflow_transitions', 'agent_id', 'text'),
        ('C03', 'workflow_transitions', 'agent_run_id', 'text'),
        ('C04', 'workflow_transitions', 'supervising_human_id', 'text'),
        ('C05', 'workflow_transitions', 'assisting_agent_id', 'text'),
        ('C06', 'workflow_transitions', 'gate_role', 'USER-DEFINED'),
        ('C07', 'publications', 'actor_id', 'text'),
        ('C08', 'allowed_transitions', 'required_role', 'USER-DEFINED'),
        ('C09', 'articles', 'risk_tier_assigned_by', 'text')
    ) AS e(candidate_id, table_name, column_name, expected_type)
),
actual_columns AS (
    SELECT
        c.table_name::text,
        c.column_name::text,
        c.data_type::text
    FROM information_schema.columns c
    WHERE c.table_schema = 'public'
)
SELECT
    e.candidate_id,
    e.table_name,
    e.column_name,
    e.expected_type,
    COALESCE(a.data_type, 'MISSING') AS actual_type,
    CASE
        WHEN a.data_type IS NULL THEN 'INACCESSIBLE/FAILED: Column Missing'
        WHEN e.expected_type = 'USER-DEFINED' AND a.data_type = 'USER-DEFINED' THEN 'VERIFIED'
        WHEN e.expected_type = a.data_type THEN 'VERIFIED'
        ELSE 'INACCESSIBLE/FAILED: Type Mismatch'
    END AS preflight_status
FROM expected_candidates e
LEFT JOIN actual_columns a
       ON e.table_name = a.table_name
      AND e.column_name = a.column_name
ORDER BY e.candidate_id ASC;

ROLLBACK;
