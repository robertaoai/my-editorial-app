
# D-251 manual-run receipt V5

Use one completed copy per environment. Do not include credentials, connection strings, row identifiers or row content.

## Execution identity

- **Operator:** Chief Editor
- **Environment:** provisioned Supabase
- **Attempt:** A01
- **Non-secret database identifier:** OPERATOR TO CONFIRM (non-secret Supabase project name/reference only)
- **Executed at (UTC):** OPERATOR TO CONFIRM
- **Artifact acceptance commit:** `d92887b5cd2041c4908686e9ab41cbec32821c4b`
- **Assessed repository commit:** OPERATOR TO CONFIRM (current evidence-anchor HEAD is `123bc34e3da49646e627e9250e9a9b2288129ce4`)
- **PostgreSQL version:** `17.6`
- **Applied migrations:** S0 | UNRESOLVED — preflight proves the accepted catalog is not present in this environment
- **Execution role:** `postgres`
- **Preflight artifact:** `PREFLIGHT-D251-CANDIDATE-COLUMNS-V5.sql.md`
- **Preflight Lane-A-Accepted-Blob-SHA256:** `0cc9c4e59e9139de84d5029729b72ab80558003e124ce4b46f3f1a0061aa7d1a`
- **Preflight Executed-SHA256:** `0CC9C4E59E9139DE84D5029729B72AB80558003E124CE4B46F3F1A0061AA7D1A`
- **Assessment artifact:** `QRY-D251-STORED-VALUE-ASSESSMENT-V7.sql.md`
- **Assessment Lane-A-Accepted-Blob-SHA256:** `6264ed7fc4f436202cc1d698ea8d49416a6f366db7425d4342b6ae0a40cda1ed`
- **Assessment Executed-SHA256:** `NOT RUN — PREFLIGHT STOP`
- **Receipt-Template-Accepted-Blob-SHA256:** `06bf8e8a7aca33c292cb80794fc2ddc9f39e3d67714cd99d5dc21e097f1bca60`
- **Local-Completed-Receipt-SHA256:** `NOT-APPLICABLE`
- **Supabase-Completed-Receipt-SHA256:** `<A01 digest recorded externally in B-119>`

Exactly one completed-receipt field above is populated for this environment and attempt. The completed receipt never
contains its own digest; B-119 records it after the completed file is committed.

## Result-set manifest

| Result-set name | Expected row count | Returned row count | Count evaluation | Complete unchanged output attached below? |
|---|---:|---:|---|---|
| `CATALOG-VALIDATION` | 66 | 66 | match count; failed status (47 `ARTIFACT-INVALID`) | yes |
| `RECONCILIATION` | 0 | 0 | match count; preflight still failed | yes |
| `VISIBILITY` | 9 | 5 | mismatch | yes |
| `ASSESSMENT` | `9 + max(1, C10 distinct schema_version count)` | 0 | not run | not run |

- **Observed distinct non-null `C10` schema versions:** NOT OBSERVED — PREFLIGHT STOP
- **Calculated expected `ASSESSMENT` rows:** NOT CALCULATED — PREFLIGHT STOP

Any missing or additional row is `unresolved`; blank output is never a passing zero.

## Preflight return — unchanged

Paste the complete result set here. Stop before assessment on any `ARTIFACT-INVALID`, `UNRECONCILED`,
`ENVIRONMENT-INACCESSIBLE`, `VISIBILITY-UNPROVEN`, missing expected row, database error or incomplete output.

```
| result_set_name    | catalog_id                    | schema_name | relation_name        | column_name               | field_classification           | exclusion_reason    | status           | detail                                             |
| ------------------ | ----------------------------- | ----------- | -------------------- | ------------------------- | ------------------------------ | ------------------- | ---------------- | -------------------------------------------------- |
| CATALOG-VALIDATION | C01                           | public      | workflow_transitions | actor_id                  | principal_or_actor_identity    | null                | ARTIFACT-INVALID | catalog row has no physical column                 |
| CATALOG-VALIDATION | C02                           | public      | workflow_transitions | agent_id                  | virtual_agent_identity         | null                | ARTIFACT-INVALID | catalog row has no physical column                 |
| CATALOG-VALIDATION | C03                           | public      | workflow_transitions | agent_run_id              | agent_run_negative_control     | null                | ARTIFACT-INVALID | catalog row has no physical column                 |
| CATALOG-VALIDATION | C04                           | public      | workflow_transitions | supervising_human_id      | supervising_human_identity     | null                | ARTIFACT-INVALID | catalog row has no physical column                 |
| CATALOG-VALIDATION | C05                           | public      | workflow_transitions | assisting_agent_id        | assisting_agent_identity       | null                | ARTIFACT-INVALID | catalog row has no physical column                 |
| CATALOG-VALIDATION | C06                           | public      | workflow_transitions | gate_role                 | legacy_gate_role_lookalike     | null                | VERIFIED         | null                                               |
| CATALOG-VALIDATION | C07                           | public      | publications         | actor_id                  | publication_actor_identity     | null                | ARTIFACT-INVALID | catalog row has no physical column                 |
| CATALOG-VALIDATION | C08                           | public      | allowed_transitions  | required_role             | transition_rule_role_lookalike | null                | ARTIFACT-INVALID | catalog row has no physical column                 |
| CATALOG-VALIDATION | C09                           | public      | articles             | risk_tier_assigned_by     | risk_assignment_actor_identity | null                | ARTIFACT-INVALID | catalog row has no physical column                 |
| CATALOG-VALIDATION | C10                           | public      | editorial_reports    | snapshot                  | snapshot_exact_string_value    | null                | ARTIFACT-INVALID | catalog row has no physical column                 |
| CATALOG-VALIDATION | E01                           | public      | topics               | name                      | excluded                       | label-or-taxonomy   | VERIFIED         | null                                               |
| CATALOG-VALIDATION | E02                           | public      | topics               | slug                      | excluded                       | label-or-taxonomy   | VERIFIED         | null                                               |
| CATALOG-VALIDATION | E03                           | public      | topics               | evolution_notes           | excluded                       | prose               | ARTIFACT-INVALID | catalog row has no physical column                 |
| CATALOG-VALIDATION | E04                           | public      | topics               | scope_boundary            | excluded                       | prose               | ARTIFACT-INVALID | catalog row has no physical column                 |
| CATALOG-VALIDATION | E05                           | public      | sources              | name                      | excluded                       | label-or-taxonomy   | VERIFIED         | null                                               |
| CATALOG-VALIDATION | E06                           | public      | sources              | platform                  | excluded                       | non-role-enum       | VERIFIED         | null                                               |
| CATALOG-VALIDATION | E07                           | public      | sources              | reliability_tier          | excluded                       | non-role-enum       | ARTIFACT-INVALID | catalog row has no physical column                 |
| CATALOG-VALIDATION | E08                           | public      | sources              | ingestion_method          | excluded                       | non-role-enum       | ARTIFACT-INVALID | catalog row has no physical column                 |
| CATALOG-VALIDATION | E09                           | public      | articles             | url                       | excluded                       | url                 | VERIFIED         | null                                               |
| CATALOG-VALIDATION | E10                           | public      | articles             | title                     | excluded                       | prose               | VERIFIED         | null                                               |
| CATALOG-VALIDATION | E11                           | public      | articles             | summary                   | excluded                       | prose               | VERIFIED         | null                                               |
| CATALOG-VALIDATION | E12                           | public      | articles             | summary_source            | excluded                       | version-or-id-token | VERIFIED         | null                                               |
| CATALOG-VALIDATION | E13                           | public      | articles             | summary_review_status     | excluded                       | label-or-taxonomy   | VERIFIED         | null                                               |
| CATALOG-VALIDATION | E14                           | public      | articles             | category                  | excluded                       | label-or-taxonomy   | VERIFIED         | null                                               |
| CATALOG-VALIDATION | E15                           | public      | articles             | workflow_state            | excluded                       | non-role-enum       | ARTIFACT-INVALID | catalog type identity differs from physical column |
| CATALOG-VALIDATION | E16                           | public      | articles             | publication_target        | excluded                       | non-role-enum       | VERIFIED         | null                                               |
| CATALOG-VALIDATION | E17                           | public      | articles             | published_url             | excluded                       | url                 | VERIFIED         | null                                               |
| CATALOG-VALIDATION | E18                           | public      | articles             | revision_reason           | excluded                       | prose               | ARTIFACT-INVALID | catalog row has no physical column                 |
| CATALOG-VALIDATION | E19                           | public      | articles             | revision_target_state     | excluded                       | non-role-enum       | ARTIFACT-INVALID | catalog row has no physical column                 |
| CATALOG-VALIDATION | E20                           | public      | articles             | source_author             | excluded                       | prose               | ARTIFACT-INVALID | catalog row has no physical column                 |
| CATALOG-VALIDATION | E21                           | public      | articles             | editorial_angle           | excluded                       | prose               | ARTIFACT-INVALID | catalog row has no physical column                 |
| CATALOG-VALIDATION | E22                           | public      | articles             | editorial_adaptation      | excluded                       | prose               | ARTIFACT-INVALID | catalog row has no physical column                 |
| CATALOG-VALIDATION | E23                           | public      | articles             | article_kind              | excluded                       | non-role-enum       | ARTIFACT-INVALID | catalog row has no physical column                 |
| CATALOG-VALIDATION | E24                           | public      | articles             | risk_tier                 | excluded                       | non-role-enum       | ARTIFACT-INVALID | catalog row has no physical column                 |
| CATALOG-VALIDATION | E25                           | public      | articles             | risk_tier_reason          | excluded                       | prose               | ARTIFACT-INVALID | catalog row has no physical column                 |
| CATALOG-VALIDATION | E26                           | public      | articles             | risk_tier_ruleset_version | excluded                       | version-or-id-token | ARTIFACT-INVALID | catalog row has no physical column                 |
| CATALOG-VALIDATION | E27                           | public      | trend_signals        | signal_type               | excluded                       | non-role-enum       | VERIFIED         | null                                               |
| CATALOG-VALIDATION | E28                           | public      | trend_signals        | signal_value              | excluded                       | label-or-taxonomy   | VERIFIED         | null                                               |
| CATALOG-VALIDATION | E29                           | public      | trend_signals        | source                    | excluded                       | version-or-id-token | VERIFIED         | null                                               |
| CATALOG-VALIDATION | E30                           | public      | trend_signals        | review_status             | excluded                       | label-or-taxonomy   | VERIFIED         | null                                               |
| CATALOG-VALIDATION | E31                           | public      | trend_signals        | evidence_url              | excluded                       | url                 | ARTIFACT-INVALID | catalog row has no physical column                 |
| CATALOG-VALIDATION | E32                           | public      | trend_signals        | reviewer_confidence       | excluded                       | non-role-enum       | ARTIFACT-INVALID | catalog row has no physical column                 |
| CATALOG-VALIDATION | E33                           | public      | workflow_transitions | from_state                | excluded                       | non-role-enum       | ARTIFACT-INVALID | catalog type identity differs from physical column |
| CATALOG-VALIDATION | E34                           | public      | workflow_transitions | to_state                  | excluded                       | non-role-enum       | ARTIFACT-INVALID | catalog type identity differs from physical column |
| CATALOG-VALIDATION | E35                           | public      | workflow_transitions | actor_type                | excluded                       | non-role-enum       | VERIFIED         | null                                               |
| CATALOG-VALIDATION | E36                           | public      | workflow_transitions | reason                    | excluded                       | prose               | VERIFIED         | null                                               |
| CATALOG-VALIDATION | E37                           | public      | workflow_transitions | line_assignment           | excluded                       | non-role-enum       | ARTIFACT-INVALID | catalog row has no physical column                 |
| CATALOG-VALIDATION | E38                           | public      | workflow_transitions | line_separation_status    | excluded                       | non-role-enum       | ARTIFACT-INVALID | catalog row has no physical column                 |
| CATALOG-VALIDATION | E39                           | public      | workflow_transitions | identity_assurance        | excluded                       | non-role-enum       | ARTIFACT-INVALID | catalog row has no physical column                 |
| CATALOG-VALIDATION | E40                           | public      | workflow_transitions | event_type                | excluded                       | non-role-enum       | ARTIFACT-INVALID | catalog row has no physical column                 |
| CATALOG-VALIDATION | E41                           | public      | allowed_transitions  | gate_id                   | excluded                       | version-or-id-token | ARTIFACT-INVALID | catalog row has no physical column                 |
| CATALOG-VALIDATION | E42                           | public      | allowed_transitions  | from_state                | excluded                       | non-role-enum       | ARTIFACT-INVALID | catalog row has no physical column                 |
| CATALOG-VALIDATION | E43                           | public      | allowed_transitions  | to_state                  | excluded                       | non-role-enum       | ARTIFACT-INVALID | catalog row has no physical column                 |
| CATALOG-VALIDATION | E44                           | public      | allowed_transitions  | kind                      | excluded                       | non-role-enum       | ARTIFACT-INVALID | catalog row has no physical column                 |
| CATALOG-VALIDATION | E45                           | public      | allowed_transitions  | required_line             | excluded                       | non-role-enum       | ARTIFACT-INVALID | catalog row has no physical column                 |
| CATALOG-VALIDATION | E46                           | public      | allowed_transitions  | required_actor_type       | excluded                       | non-role-enum       | ARTIFACT-INVALID | catalog row has no physical column                 |
| CATALOG-VALIDATION | E47                           | public      | publication_targets  | target                    | excluded                       | non-role-enum       | ARTIFACT-INVALID | catalog row has no physical column                 |
| CATALOG-VALIDATION | E48                           | public      | publications         | event_type                | excluded                       | non-role-enum       | ARTIFACT-INVALID | catalog row has no physical column                 |
| CATALOG-VALIDATION | E49                           | public      | publications         | published_url             | excluded                       | url                 | ARTIFACT-INVALID | catalog row has no physical column                 |
| CATALOG-VALIDATION | E50                           | public      | publications         | formatted_content         | excluded                       | prose               | ARTIFACT-INVALID | catalog row has no physical column                 |
| CATALOG-VALIDATION | E51                           | public      | publications         | provider_event_id         | excluded                       | version-or-id-token | ARTIFACT-INVALID | catalog row has no physical column                 |
| CATALOG-VALIDATION | E52                           | public      | publications         | reason                    | excluded                       | prose               | ARTIFACT-INVALID | catalog row has no physical column                 |
| CATALOG-VALIDATION | E53                           | public      | publications         | actor_type                | excluded                       | non-role-enum       | ARTIFACT-INVALID | catalog row has no physical column                 |
| CATALOG-VALIDATION | E54                           | public      | editorial_reports    | template_version          | excluded                       | version-or-id-token | ARTIFACT-INVALID | catalog row has no physical column                 |
| CATALOG-VALIDATION | E55                           | public      | editorial_reports    | judgment_rule_version     | excluded                       | version-or-id-token | ARTIFACT-INVALID | catalog row has no physical column                 |
| CATALOG-VALIDATION | E56                           | public      | editorial_reports    | schema_version            | excluded                       | version-or-id-token | ARTIFACT-INVALID | catalog row has no physical column                 |
| VISIBILITY         | V-public-articles             | public      | articles             | null                      | null                           | null                | VERIFIED         | null                                               |
| VISIBILITY         | V-public-sources              | public      | sources              | null                      | null                           | null                | VERIFIED         | null                                               |
| VISIBILITY         | V-public-topics               | public      | topics               | null                      | null                           | null                | VERIFIED         | null                                               |
| VISIBILITY         | V-public-trend_signals        | public      | trend_signals        | null                      | null                           | null                | VERIFIED         | null                                               |
| VISIBILITY         | V-public-workflow_transitions | public      | workflow_transitions | null                      | null                           | null                | VERIFIED         | null                                               |
```
## Reconciliation return — unchanged

Paste every `RECONCILIATION` row here. Passing evidence is zero rows and a recorded zero row count; blank or missing
output is unresolved, not clean.

Zero `RECONCILIATION` rows were returned in the pasted preflight result. This does not make the preflight pass because
47 catalog rows are `ARTIFACT-INVALID` and only 5 of 9 required visibility rows were returned.

## Assessment return — unchanged

Paste the complete `C01`–`C10` aggregate output. `C10` may contain one row per `schema_version`. If the preflight did
not pass, write `NOT RUN — PREFLIGHT STOP`.

```text
NOT RUN — PREFLIGHT STOP
```

## Candidate classification

| Candidate | Field classification | Total rows | Deprecated exact | Principal look-alike | Legacy-agent look-alike | Legacy-enum look-alike | Result classification | Required treatment |
|---|---|---:|---:|---:|---:|---:|---|---|

Overall precedence: `unresolved` → `living operational` → `historical only` → `no matches`.
A non-zero `C10` is `unresolved` under `LB-7` and blocks `V1-SM05` until a separately approved, content-free aggregate
can classify it.

## Failure record

- **State:** ARTIFACT-INVALID
- **Source:** PREFLIGHT-RESULT
- **Result-set name:** `CATALOG-VALIDATION`; `VISIBILITY`
- **SQLSTATE:** NOT-AVAILABLE
- **Sanitized summary:** The accepted preflight returned all 66 catalog rows, but 47 are `ARTIFACT-INVALID`; only 5 of the required 9 visibility rows were returned. The assessment was correctly not run.
- **Owner:** Lane A to determine the governed schema-deployment/reconciliation follow-up; Chief Editor performs a new attempt only after separate authorization.
- **Return condition:** Lane A establishes why the provisioned Supabase schema differs from the accepted catalog and records any separately authorized corrective deployment. Then rerun the unchanged accepted preflight as a new attempt; all 66 catalog rows and all 9 visibility rows must be `VERIFIED`, with zero `RECONCILIATION` rows, before assessment.

## Operator attestations

- [x] I used the Lane A-accepted committed SQL blobs without editing them.
- [x] Each Executed-SHA256 equals its Lane-A-Accepted-Blob-SHA256.
- [x] I ran the preflight before the assessment and stopped on any failure.
- [ ] Both scripts ran inside database-enforced read-only transactions.
- [ ] `SET LOCAL search_path` was the sole transaction-local configuration change and was rolled back.
- [x] I returned metadata and aggregate counts only, with no row identifiers or row content.
- [X] I performed no reset, migration, corrective write or schema change.

## Lane A review

- **Reviewer:** Lane A (Claude Code)
- **Review date:** 2026-09-22
- **Preflight disposition:** UNRESOLVED — 47 of 66 catalog rows `ARTIFACT-INVALID`; only 5 of 9 visibility rows returned;
  assessment correctly not run
- **Overall result:** unresolved
- **Required follow-up:** the `ARTIFACT-INVALID` pattern (columns and types from `0002_s1_editorial_schema.sql` absent or
  mismatched; every column native to `0001_init.sql` alone `VERIFIED`) shows the provisioned Supabase project has **not**
  had migration `0002` applied. This is a `DEP-05` finding, not a `D-251` defect: the artifacts correctly stopped before
  assessment and returned no false zero. `D-251` on this environment is deferred until `0002` is applied there through its
  own separately authorized, reviewed deployment step — never as a byproduct of this evidence procedure — and this
  unchanged accepted preflight is then rerun as attempt `A02`. `V1-SM05` stays unselected until both current environments
  return a classified result.
