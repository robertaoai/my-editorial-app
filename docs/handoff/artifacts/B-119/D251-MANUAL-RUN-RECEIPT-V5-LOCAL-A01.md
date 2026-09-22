
# D-251 manual-run receipt V5

Use one completed copy per environment. Do not include credentials, connection strings, row identifiers or row content.

## Execution identity

- **Operator:** Chief Editor
- **Environment:** local disposable
- **Attempt:** A01
- **Non-secret database identifier:** `my-editorial-app` local Supabase
- **Executed at (UTC):** `2026-09-21T23:50:59Z`–`2026-09-21T23:53:46Z` (captured-output file timestamps; operator to confirm)
- **Artifact acceptance commit:** `d92887b5cd2041c4908686e9ab41cbec32821c4b`
- **Assessed repository commit:** OPERATOR TO CONFIRM (current evidence-anchor HEAD is `123bc34e3da49646e627e9250e9a9b2288129ce4`)
- **PostgreSQL version:** `17.6`
- **Applied migrations:** `S0,S1`
- **Execution role:** `postgres`
- **Preflight artifact:** `PREFLIGHT-D251-CANDIDATE-COLUMNS-V5.sql.md`
- **Preflight Lane-A-Accepted-Blob-SHA256:** `0cc9c4e59e9139de84d5029729b72ab80558003e124ce4b46f3f1a0061aa7d1a`
- **Preflight Executed-SHA256:** `0CC9C4E59E9139DE84D5029729B72AB80558003E124CE4B46F3F1A0061AA7D1A`
- **Assessment artifact:** `QRY-D251-STORED-VALUE-ASSESSMENT-V7.sql.md`
- **Assessment Lane-A-Accepted-Blob-SHA256:** `6264ed7fc4f436202cc1d698ea8d49416a6f366db7425d4342b6ae0a40cda1ed`
- **Assessment Executed-SHA256:** `6264ED7FC4F436202CC1D698EA8D49416A6F366DB7425D4342B6AE0A40CDA1ED`
- **Receipt-Template-Accepted-Blob-SHA256:** `06bf8e8a7aca33c292cb80794fc2ddc9f39e3d67714cd99d5dc21e097f1bca60`
- **Local-Completed-Receipt-SHA256:** `A01 digest recorded externally in B-119 after Lane A commits this receipt`
- **Supabase-Completed-Receipt-SHA256:** `NOT-APPLICABLE`

Exactly one completed-receipt field above is populated for this environment and attempt. The completed receipt never
contains its own digest; B-119 records it after the completed file is committed.

## Result-set manifest

| Result-set name | Expected row count | Returned row count | Count evaluation | Complete unchanged output attached below? |
|---|---:|---:|---|---|
| `CATALOG-VALIDATION` | 66 | 66 | match | yes |
| `RECONCILIATION` | 0 | 0 | match | yes |
| `VISIBILITY` | 9 | 9 | match | yes |
| `ASSESSMENT` | `9 + max(1, C10 distinct schema_version count)` | 10 | match | yes |

- **Observed distinct non-null `C10` schema versions:** 0
- **Calculated expected `ASSESSMENT` rows:** 10

Any missing or additional row is `unresolved`; blank output is never a passing zero.

## Preflight return — unchanged

Paste the complete result set here. Stop before assessment on any `ARTIFACT-INVALID`, `UNRECONCILED`,
`ENVIRONMENT-INACCESSIBLE`, `VISIBILITY-UNPROVEN`, missing expected row, database error or incomplete output.

```text
BEGIN
SET
  result_set_name   |          catalog_id           | schema_name |    relation_name     |        column_name        |      field_classification      |  exclusion_reason   |  status  | detail 
--------------------+-------------------------------+-------------+----------------------+---------------------------+--------------------------------+---------------------+----------+--------
 CATALOG-VALIDATION | C01                           | public      | workflow_transitions | actor_id                  | principal_or_actor_identity    |                     | VERIFIED | 
 CATALOG-VALIDATION | C02                           | public      | workflow_transitions | agent_id                  | virtual_agent_identity         |                     | VERIFIED | 
 CATALOG-VALIDATION | C03                           | public      | workflow_transitions | agent_run_id              | agent_run_negative_control     |                     | VERIFIED | 
 CATALOG-VALIDATION | C04                           | public      | workflow_transitions | supervising_human_id      | supervising_human_identity     |                     | VERIFIED | 
 CATALOG-VALIDATION | C05                           | public      | workflow_transitions | assisting_agent_id        | assisting_agent_identity       |                     | VERIFIED | 
 CATALOG-VALIDATION | C06                           | public      | workflow_transitions | gate_role                 | legacy_gate_role_lookalike     |                     | VERIFIED | 
 CATALOG-VALIDATION | C07                           | public      | publications         | actor_id                  | publication_actor_identity     |                     | VERIFIED | 
 CATALOG-VALIDATION | C08                           | public      | allowed_transitions  | required_role             | transition_rule_role_lookalike |                     | VERIFIED | 
 CATALOG-VALIDATION | C09                           | public      | articles             | risk_tier_assigned_by     | risk_assignment_actor_identity |                     | VERIFIED | 
 CATALOG-VALIDATION | C10                           | public      | editorial_reports    | snapshot                  | snapshot_exact_string_value    |                     | VERIFIED | 
 CATALOG-VALIDATION | E01                           | public      | topics               | name                      | excluded                       | label-or-taxonomy   | VERIFIED | 
 CATALOG-VALIDATION | E02                           | public      | topics               | slug                      | excluded                       | label-or-taxonomy   | VERIFIED | 
 CATALOG-VALIDATION | E03                           | public      | topics               | evolution_notes           | excluded                       | prose               | VERIFIED | 
 CATALOG-VALIDATION | E04                           | public      | topics               | scope_boundary            | excluded                       | prose               | VERIFIED | 
 CATALOG-VALIDATION | E05                           | public      | sources              | name                      | excluded                       | label-or-taxonomy   | VERIFIED | 
 CATALOG-VALIDATION | E06                           | public      | sources              | platform                  | excluded                       | non-role-enum       | VERIFIED | 
 CATALOG-VALIDATION | E07                           | public      | sources              | reliability_tier          | excluded                       | non-role-enum       | VERIFIED | 
 CATALOG-VALIDATION | E08                           | public      | sources              | ingestion_method          | excluded                       | non-role-enum       | VERIFIED | 
 CATALOG-VALIDATION | E09                           | public      | articles             | url                       | excluded                       | url                 | VERIFIED | 
 CATALOG-VALIDATION | E10                           | public      | articles             | title                     | excluded                       | prose               | VERIFIED | 
 CATALOG-VALIDATION | E11                           | public      | articles             | summary                   | excluded                       | prose               | VERIFIED | 
 CATALOG-VALIDATION | E12                           | public      | articles             | summary_source            | excluded                       | version-or-id-token | VERIFIED | 
 CATALOG-VALIDATION | E13                           | public      | articles             | summary_review_status     | excluded                       | label-or-taxonomy   | VERIFIED | 
 CATALOG-VALIDATION | E14                           | public      | articles             | category                  | excluded                       | label-or-taxonomy   | VERIFIED | 
 CATALOG-VALIDATION | E15                           | public      | articles             | workflow_state            | excluded                       | non-role-enum       | VERIFIED | 
 CATALOG-VALIDATION | E16                           | public      | articles             | publication_target        | excluded                       | non-role-enum       | VERIFIED | 
 CATALOG-VALIDATION | E17                           | public      | articles             | published_url             | excluded                       | url                 | VERIFIED | 
 CATALOG-VALIDATION | E18                           | public      | articles             | revision_reason           | excluded                       | prose               | VERIFIED | 
 CATALOG-VALIDATION | E19                           | public      | articles             | revision_target_state     | excluded                       | non-role-enum       | VERIFIED | 
 CATALOG-VALIDATION | E20                           | public      | articles             | source_author             | excluded                       | prose               | VERIFIED | 
 CATALOG-VALIDATION | E21                           | public      | articles             | editorial_angle           | excluded                       | prose               | VERIFIED | 
 CATALOG-VALIDATION | E22                           | public      | articles             | editorial_adaptation      | excluded                       | prose               | VERIFIED | 
 CATALOG-VALIDATION | E23                           | public      | articles             | article_kind              | excluded                       | non-role-enum       | VERIFIED | 
 CATALOG-VALIDATION | E24                           | public      | articles             | risk_tier                 | excluded                       | non-role-enum       | VERIFIED | 
 CATALOG-VALIDATION | E25                           | public      | articles             | risk_tier_reason          | excluded                       | prose               | VERIFIED | 
 CATALOG-VALIDATION | E26                           | public      | articles             | risk_tier_ruleset_version | excluded                       | version-or-id-token | VERIFIED | 
 CATALOG-VALIDATION | E27                           | public      | trend_signals        | signal_type               | excluded                       | non-role-enum       | VERIFIED | 
 CATALOG-VALIDATION | E28                           | public      | trend_signals        | signal_value              | excluded                       | label-or-taxonomy   | VERIFIED | 
 CATALOG-VALIDATION | E29                           | public      | trend_signals        | source                    | excluded                       | version-or-id-token | VERIFIED | 
 CATALOG-VALIDATION | E30                           | public      | trend_signals        | review_status             | excluded                       | label-or-taxonomy   | VERIFIED | 
 CATALOG-VALIDATION | E31                           | public      | trend_signals        | evidence_url              | excluded                       | url                 | VERIFIED | 
 CATALOG-VALIDATION | E32                           | public      | trend_signals        | reviewer_confidence       | excluded                       | non-role-enum       | VERIFIED | 
 CATALOG-VALIDATION | E33                           | public      | workflow_transitions | from_state                | excluded                       | non-role-enum       | VERIFIED | 
 CATALOG-VALIDATION | E34                           | public      | workflow_transitions | to_state                  | excluded                       | non-role-enum       | VERIFIED | 
 CATALOG-VALIDATION | E35                           | public      | workflow_transitions | actor_type                | excluded                       | non-role-enum       | VERIFIED | 
 CATALOG-VALIDATION | E36                           | public      | workflow_transitions | reason                    | excluded                       | prose               | VERIFIED | 
 CATALOG-VALIDATION | E37                           | public      | workflow_transitions | line_assignment           | excluded                       | non-role-enum       | VERIFIED | 
 CATALOG-VALIDATION | E38                           | public      | workflow_transitions | line_separation_status    | excluded                       | non-role-enum       | VERIFIED | 
 CATALOG-VALIDATION | E39                           | public      | workflow_transitions | identity_assurance        | excluded                       | non-role-enum       | VERIFIED | 
 CATALOG-VALIDATION | E40                           | public      | workflow_transitions | event_type                | excluded                       | non-role-enum       | VERIFIED | 
 CATALOG-VALIDATION | E41                           | public      | allowed_transitions  | gate_id                   | excluded                       | version-or-id-token | VERIFIED | 
 CATALOG-VALIDATION | E42                           | public      | allowed_transitions  | from_state                | excluded                       | non-role-enum       | VERIFIED | 
 CATALOG-VALIDATION | E43                           | public      | allowed_transitions  | to_state                  | excluded                       | non-role-enum       | VERIFIED | 
 CATALOG-VALIDATION | E44                           | public      | allowed_transitions  | kind                      | excluded                       | non-role-enum       | VERIFIED | 
 CATALOG-VALIDATION | E45                           | public      | allowed_transitions  | required_line             | excluded                       | non-role-enum       | VERIFIED | 
 CATALOG-VALIDATION | E46                           | public      | allowed_transitions  | required_actor_type       | excluded                       | non-role-enum       | VERIFIED | 
 CATALOG-VALIDATION | E47                           | public      | publication_targets  | target                    | excluded                       | non-role-enum       | VERIFIED | 
 CATALOG-VALIDATION | E48                           | public      | publications         | event_type                | excluded                       | non-role-enum       | VERIFIED | 
 CATALOG-VALIDATION | E49                           | public      | publications         | published_url             | excluded                       | url                 | VERIFIED | 
 CATALOG-VALIDATION | E50                           | public      | publications         | formatted_content         | excluded                       | prose               | VERIFIED | 
 CATALOG-VALIDATION | E51                           | public      | publications         | provider_event_id         | excluded                       | version-or-id-token | VERIFIED | 
 CATALOG-VALIDATION | E52                           | public      | publications         | reason                    | excluded                       | prose               | VERIFIED | 
 CATALOG-VALIDATION | E53                           | public      | publications         | actor_type                | excluded                       | non-role-enum       | VERIFIED | 
 CATALOG-VALIDATION | E54                           | public      | editorial_reports    | template_version          | excluded                       | version-or-id-token | VERIFIED | 
 CATALOG-VALIDATION | E55                           | public      | editorial_reports    | judgment_rule_version     | excluded                       | version-or-id-token | VERIFIED | 
 CATALOG-VALIDATION | E56                           | public      | editorial_reports    | schema_version            | excluded                       | version-or-id-token | VERIFIED | 
 VISIBILITY         | V-public-allowed_transitions  | public      | allowed_transitions  |                           |                                |                     | VERIFIED | 
 VISIBILITY         | V-public-articles             | public      | articles             |                           |                                |                     | VERIFIED | 
 VISIBILITY         | V-public-editorial_reports    | public      | editorial_reports    |                           |                                |                     | VERIFIED | 
 VISIBILITY         | V-public-publication_targets  | public      | publication_targets  |                           |                                |                     | VERIFIED | 
 VISIBILITY         | V-public-publications         | public      | publications         |                           |                                |                     | VERIFIED | 
 VISIBILITY         | V-public-sources              | public      | sources              |                           |                                |                     | VERIFIED | 
 VISIBILITY         | V-public-topics               | public      | topics               |                           |                                |                     | VERIFIED | 
 VISIBILITY         | V-public-trend_signals        | public      | trend_signals        |                           |                                |                     | VERIFIED | 
 VISIBILITY         | V-public-workflow_transitions | public      | workflow_transitions |                           |                                |                     | VERIFIED | 
(75 rows)

ROLLBACK

```

## Reconciliation return — unchanged

Paste every `RECONCILIATION` row here. Passing evidence is zero rows and a recorded zero row count; blank or missing
output is unresolved, not clean.

Zero `RECONCILIATION` rows were returned within the complete 75-row preflight output above.

## Assessment return — unchanged

Paste the complete `C01`–`C10` aggregate output. `C10` may contain one row per `schema_version`. If the preflight did
not pass, write `NOT RUN — PREFLIGHT STOP`.

```text
BEGIN
SET
 result_set_name | catalog_id | schema_name |    relation_name     |      column_name      |      field_classification      | schema_version | total_rows | count_deprecated_exact | count_principal_lookalike | count_legacy_agent_lookalike | count_legacy_enum_lookalike 
-----------------+------------+-------------+----------------------+-----------------------+--------------------------------+----------------+------------+------------------------+---------------------------+------------------------------+-----------------------------
 ASSESSMENT      | C01        | public      | workflow_transitions | actor_id              | principal_or_actor_identity    |                |          9 |                      0 |                         3 |                            0 |                           0
 ASSESSMENT      | C02        | public      | workflow_transitions | agent_id              | virtual_agent_identity         |                |          9 |                      0 |                         0 |                            0 |                           0
 ASSESSMENT      | C03        | public      | workflow_transitions | agent_run_id          | agent_run_negative_control     |                |          9 |                      0 |                         0 |                            0 |                           0
 ASSESSMENT      | C04        | public      | workflow_transitions | supervising_human_id  | supervising_human_identity     |                |          9 |                      0 |                         7 |                            0 |                           0
 ASSESSMENT      | C05        | public      | workflow_transitions | assisting_agent_id    | assisting_agent_identity       |                |          9 |                      0 |                         0 |                            0 |                           0
 ASSESSMENT      | C06        | public      | workflow_transitions | gate_role             | legacy_gate_role_lookalike     |                |          9 |                      0 |                         0 |                            0 |                           2
 ASSESSMENT      | C07        | public      | publications         | actor_id              | publication_actor_identity     |                |          0 |                      0 |                         0 |                            0 |                           0
 ASSESSMENT      | C08        | public      | allowed_transitions  | required_role         | transition_rule_role_lookalike |                |         13 |                      0 |                         0 |                            0 |                           2
 ASSESSMENT      | C09        | public      | articles             | risk_tier_assigned_by | risk_assignment_actor_identity |                |          5 |                      0 |                         0 |                            0 |                           0
 ASSESSMENT      | C10        | public      | editorial_reports    | snapshot              | snapshot_exact_string_value    |                |          0 |                      0 |                         0 |                            0 |                           0
(10 rows)

ROLLBACK

```

## Candidate classification

| Candidate | Field classification | Total rows | Deprecated exact | Principal look-alike | Legacy-agent look-alike | Legacy-enum look-alike | Result classification | Required treatment |
|---|---|---:|---:|---:|---:|---:|---|---|
| C01 | principal_or_actor_identity | 9 | 0 | 3 | 0 | 0 | no matches | No deprecated-value correction; Lane A confirms |
| C02 | virtual_agent_identity | 9 | 0 | 0 | 0 | 0 | no matches | No correction; Lane A confirms |
| C03 | agent_run_negative_control | 9 | 0 | 0 | 0 | 0 | no matches | No correction; Lane A confirms |
| C04 | supervising_human_identity | 9 | 0 | 7 | 0 | 0 | no matches | No deprecated-value correction; Lane A confirms |
| C05 | assisting_agent_identity | 9 | 0 | 0 | 0 | 0 | no matches | No correction; Lane A confirms |
| C06 | legacy_gate_role_lookalike | 9 | 0 | 0 | 0 | 2 | no matches | Retain living enum look-alikes; Lane A confirms |
| C07 | publication_actor_identity | 0 | 0 | 0 | 0 | 0 | no matches | Empty candidate population recorded; Lane A confirms |
| C08 | transition_rule_role_lookalike | 13 | 0 | 0 | 0 | 2 | no matches | Retain living enum look-alikes; Lane A confirms |
| C09 | risk_assignment_actor_identity | 5 | 0 | 0 | 0 | 0 | no matches | No correction; Lane A confirms |
| C10 | snapshot_exact_string_value | 0 | 0 | 0 | 0 | 0 | no matches | Empty candidate population recorded; Lane A confirms |

Overall precedence: `unresolved` → `living operational` → `historical only` → `no matches`.
A non-zero `C10` is `unresolved` under `LB-7` and blocks `V1-SM05` until a separately approved, content-free aggregate
can classify it.

## Failure record

- **State:** none
- **Source:** none
- **Result-set name:** NOT-APPLICABLE
- **SQLSTATE:** NOT-AVAILABLE
- **Sanitized summary:** Preflight and assessment completed without a reported database error.
- **Owner:** NOT-APPLICABLE
- **Return condition:** NOT-APPLICABLE

## Operator attestations

- [x] I used the Lane A-accepted committed SQL blobs without editing them.
- [x] Each Executed-SHA256 equals its Lane-A-Accepted-Blob-SHA256.
- [x] I ran the preflight before the assessment and stopped on any failure.
- [x] Both scripts ran inside database-enforced read-only transactions.
- [x] `SET LOCAL search_path` was the sole transaction-local configuration change and was rolled back.
- [x] I returned metadata and aggregate counts only, with no row identifiers or row content.
- [x] I performed no reset, migration, corrective write or schema change.

## Lane A review

- **Reviewer:** Lane A (Claude Code)
- **Review date:** 2026-09-22
- **Preflight disposition:** VERIFIED — all 66 catalog rows and all 9 visibility rows `VERIFIED`; 0 `RECONCILIATION` rows
- **Overall result:** no matches — every `count_deprecated_exact` is 0; the non-zero look-alike columns (`C01` 3, `C04` 7,
  `C06` 2, `C08` 2) match the values independently derived from the migration seed data at acceptance, so this is not an
  always-zero result
- **Required follow-up:** two required fields are unconfirmed by the operator — `Assessed repository commit` and the
  precision of `Executed at (UTC)`. This local-environment result alone does not satisfy `D-251`, which needs both current
  environments; see the Supabase receipt and the B-119 review recorded after both A01 attempts.
