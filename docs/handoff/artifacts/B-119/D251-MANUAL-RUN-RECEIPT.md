# D-251 manual-run receipt

This form records one human-run execution. Use one copy per environment. Do not include credentials,
connection strings, row content or other secrets.

## Execution identity

- **Operator:**
- **Environment:** existing local | provisioned Supabase
- **Non-secret project/database identifier:**
- **Executed at (UTC):**
- **Assessed repository commit:**
- **Applied migration evidence:**
- **Preflight artifact:** `PREFLIGHT-D251-CANDIDATE-COLUMNS-V1`
- **Preflight SHA-256:**
- **Assessment artifact:** `QRY-D251-STORED-VALUE-ASSESSMENT-V3`
- **Assessment SHA-256:**

## Preflight return

Paste the complete, unchanged `C01`–`C09` result table here. If any row is missing or does not read
`VERIFIED`, stop: the assessment result is `INACCESSIBLE/FAILED`, never zero.

## Assessment return

Paste the complete, unchanged `C01`–`C09` aggregate result table here.

## Exclusion return

Paste the complete, unchanged `E01`–`E09` exclusion table here.

## Operator attestations

- [ ] I used the Lane A-approved artifacts identified by the digests above without editing them.
- [ ] I ran the preflight before the assessment.
- [ ] The assessment ran inside its database-enforced read-only transaction.
- [ ] I returned metadata and aggregate counts only; I returned no matching row content.
- [ ] I performed no reset, migration, corrective write or schema change.
- [ ] I understand that the result covers the application-owned `public` schema, not Supabase `auth` metadata.

## Lane A review

- **Reviewer:**
- **Review date:**
- **Preflight disposition:** VERIFIED | INACCESSIBLE/FAILED
- **Exact deprecated-token disposition:** zero | historical-only | living-operational | unresolved
- **Required follow-up:**
