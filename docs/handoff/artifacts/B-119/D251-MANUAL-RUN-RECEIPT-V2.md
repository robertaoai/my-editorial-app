> **Draft for Lane A review. Not approved for execution. No database access authorized.**

# D-251 manual-run receipt V2

Use one completed copy per environment. Do not include credentials, connection strings, row identifiers or row content.

## Execution identity

- **Operator:** Chief Editor
- **Environment:** local disposable | provisioned Supabase
- **Attempt:** A01
- **Non-secret database identifier:**
- **Executed at (UTC):**
- **Assessed repository commit:**
- **Applied migrations:**
- **Execution role:**
- **Preflight artifact:** `PREFLIGHT-D251-CANDIDATE-COLUMNS-V2.sql.md`
- **Preflight Lane-A-Accepted-Blob-SHA256:**
- **Preflight Executed-SHA256:**
- **Assessment artifact:** `QRY-D251-STORED-VALUE-ASSESSMENT-V4.sql.md`
- **Assessment Lane-A-Accepted-Blob-SHA256:**
- **Assessment Executed-SHA256:**
- **Receipt-Template-Accepted-Blob-SHA256:**
- **Executed-SHA256:** `NOT-APPLICABLE`

## Preflight return

Paste the complete unchanged output. Every candidate and exclusion must be present. Stop on `ARTIFACT-INVALID`,
`ENVIRONMENT-INACCESSIBLE`, `VISIBILITY-UNPROVEN`, `EXECUTION-FAILED`, any missing row, or any `UNRECONCILED` row.

## Assessment return

Paste the complete unchanged `C01`–`C10` aggregate output. `C10` may contain one row per `schema_version`.

## Result classification

| Candidate | Count | Result classification | Required treatment | Owner | Return condition |
|---|---:|---|---|---|---|

Overall precedence: unresolved/inaccessible → living operational → historical only → no matches.
A non-zero `C10` is `unresolved` under `LB-7`.

## Failure record

- **State:** ARTIFACT-INVALID | ENVIRONMENT-INACCESSIBLE | VISIBILITY-UNPROVEN | EXECUTION-FAILED | none
- **Source:** STATIC-REVIEW | CONNECTION | DATABASE | none
- **SQLSTATE:** value supplied by PostgreSQL | NOT-AVAILABLE
- **Sanitized summary:**
- **Owner:**
- **Return condition:**

## Operator attestations

- [ ] I used the Lane A-accepted committed SQL blobs without editing them.
- [ ] Each Executed-SHA256 equals its Lane-A-Accepted-Blob-SHA256.
- [ ] I ran the preflight before the assessment and stopped on any failure.
- [ ] Both scripts ran inside database-enforced read-only transactions.
- [ ] `SET LOCAL search_path` was the sole transaction-local configuration change; it wrote no database row or schema object and was rolled back.
- [ ] I returned metadata and aggregate counts only, with no row identifiers or content.
- [ ] I performed no reset, migration, corrective write or schema change.

## Lane A review

- **Reviewer:**
- **Review date:**
- **Preflight disposition:** VERIFIED | UNRESOLVED
- **Overall result:** no matches | historical only | living operational | unresolved
- **Required follow-up:**
- **Completed-Receipt-SHA256:** recorded externally in B-119, never inside this completed receipt
