
# D-251 manual-run receipt V5

Use one completed copy per environment. Do not include credentials, connection strings, row identifiers or row content.

## Execution identity

- **Operator:** Chief Editor
- **Environment:** local disposable | provisioned Supabase
- **Attempt:** A01
- **Non-secret database identifier:**
- **Executed at (UTC):**
- **Artifact acceptance commit:**
- **Assessed repository commit:**
- **PostgreSQL version:**
- **Applied migrations:**
- **Execution role:**
- **Preflight artifact:** `PREFLIGHT-D251-CANDIDATE-COLUMNS-V5.sql.md`
- **Preflight Lane-A-Accepted-Blob-SHA256:**
- **Preflight Executed-SHA256:**
- **Assessment artifact:** `QRY-D251-STORED-VALUE-ASSESSMENT-V7.sql.md`
- **Assessment Lane-A-Accepted-Blob-SHA256:**
- **Assessment Executed-SHA256:**
- **Receipt-Template-Accepted-Blob-SHA256:**
- **Local-Completed-Receipt-SHA256:** `NOT-APPLICABLE` | `<A01 digest recorded externally in B-119>`
- **Supabase-Completed-Receipt-SHA256:** `NOT-APPLICABLE` | `<A01 digest recorded externally in B-119>`

Exactly one completed-receipt field above is populated for this environment and attempt. The completed receipt never
contains its own digest; B-119 records it after the completed file is committed.

## Result-set manifest

| Result-set name | Expected row count | Returned row count | Count evaluation | Complete unchanged output attached below? |
|---|---:|---:|---|---|
| `CATALOG-VALIDATION` | 66 | | match / mismatch | yes / no |
| `RECONCILIATION` | 0 | | match / mismatch | yes / no |
| `VISIBILITY` | 9 | | match / mismatch | yes / no |
| `ASSESSMENT` | `9 + max(1, C10 distinct schema_version count)` | | match / mismatch / not run | yes / no / not run |

- **Observed distinct non-null `C10` schema versions:**
- **Calculated expected `ASSESSMENT` rows:**

Any missing or additional row is `unresolved`; blank output is never a passing zero.

## Preflight return — unchanged

Paste the complete result set here. Stop before assessment on any `ARTIFACT-INVALID`, `UNRECONCILED`,
`ENVIRONMENT-INACCESSIBLE`, `VISIBILITY-UNPROVEN`, missing expected row, database error or incomplete output.

## Reconciliation return — unchanged

Paste every `RECONCILIATION` row here. Passing evidence is zero rows and a recorded zero row count; blank or missing
output is unresolved, not clean.

## Assessment return — unchanged

Paste the complete `C01`–`C10` aggregate output. `C10` may contain one row per `schema_version`. If the preflight did
not pass, write `NOT RUN — PREFLIGHT STOP`.

## Candidate classification

| Candidate | Field classification | Total rows | Deprecated exact | Principal look-alike | Legacy-agent look-alike | Legacy-enum look-alike | Result classification | Required treatment |
|---|---|---:|---:|---:|---:|---:|---|---|

Overall precedence: `unresolved` → `living operational` → `historical only` → `no matches`.
A non-zero `C10` is `unresolved` under `LB-7` and blocks `V1-SM05` until a separately approved, content-free aggregate
can classify it.

## Failure record

- **State:** ARTIFACT-INVALID | UNRECONCILED | ENVIRONMENT-INACCESSIBLE | VISIBILITY-UNPROVEN | EXECUTION-FAILED | none
- **Source:** STATIC-REVIEW | PREFLIGHT-RESULT | CONNECTION | DATABASE | none
- **Result-set name:**
- **SQLSTATE:** value supplied by PostgreSQL | NOT-AVAILABLE
- **Sanitized summary:**
- **Owner:**
- **Return condition:**

## Operator attestations

- [ ] I used the Lane A-accepted committed SQL blobs without editing them.
- [ ] Each Executed-SHA256 equals its Lane-A-Accepted-Blob-SHA256.
- [ ] I ran the preflight before the assessment and stopped on any failure.
- [ ] Both scripts ran inside database-enforced read-only transactions.
- [ ] `SET LOCAL search_path` was the sole transaction-local configuration change and was rolled back.
- [ ] I returned metadata and aggregate counts only, with no row identifiers or row content.
- [ ] I performed no reset, migration, corrective write or schema change.

## Lane A review

- **Reviewer:**
- **Review date:**
- **Preflight disposition:** VERIFIED | UNRESOLVED
- **Overall result:** no matches | historical only | living operational | unresolved
- **Required follow-up:**

