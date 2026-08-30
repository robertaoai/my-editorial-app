# B-064 — The S2 action has no transactional database path

- **Raised:** 2026-08-31 by Lane B
- **Kind:** dependency
- **Phase:** 1
- **Blocks:** D-164 step 3, the minimal Chief Editor T5 route/action
- **Status:** Answered
- **Lane A:** **Acknowledged and authorized 2026-08-31 (`D-165`).** Recommended path taken: a new
security-invoker Postgres function (new migration `0003_*`, explicit `EXECUTE` grants), invoked
through `supabase.rpc(...)`, performing the transition insert and article update in one
transaction. The direct-PostgreSQL-client alternative is declined — a second database access path
and a build-config/dependency change out of proportion to Unit 1. `LANE-B-WORK-ORDER.md` §2.2d
step 3 now specifies this. The migration and route/action remain Lane B's to write once
nominated; this entry authorizes the boundary, not the implementation.
- **Resolution:** Verified
- **Verified-By:** Lane B (Codex), independent plan review 2026-08-31
- **Verified-At-Commit:** b7c2ccfab70f9be217b667dfd994d7656d6d34d1
- **Evidence:** `LANE-B-WORK-ORDER.md` §2.2d step 3; `V1-DECISION-REGISTER.md` §5.14dq step 3; `supabase/migrations/0002_s1_editorial_schema.sql` lines 307–411; repository search finds no existing transition RPC or direct PostgreSQL transaction client; Supabase JavaScript transaction and RPC documentation cited below

## What happened

The existing trigger requires the `workflow_transitions` insert and `articles.workflow_state`
update to occur in the same PostgreSQL transaction. It checks the transition row's `xmin` remains
`in progress`; a row committed by a prior request is deliberately rejected as replayed evidence.

The authorized packet asks a Next.js route/action to perform both writes in one transaction, but
the repository has no database function/RPC for the operation and no direct PostgreSQL transaction
client. The ordinary Supabase JavaScript client cannot group two queries into one transaction;
each request commits separately. The official Supabase guidance directs multi-statement
transactional logic to a Postgres function called through `rpc`:

- <https://supabase.com/docs/reference/javascript/using-modifiers-rollback>
- <https://supabase.com/docs/reference/javascript/rpc>
- <https://supabase.com/docs/guides/database/functions>

Therefore D-164 step 3 is not executable with the currently provisioned path. Inserting the audit
row and then updating the article through two Supabase calls is guaranteed to fail the trigger's
same-transaction test; weakening that test would destroy the sequence control.

## What you need

Choose and authorize one transaction boundary before Lane B implements the route:

1. **Recommended:** specify a security-invoker Postgres function, delivered by a new Lane B
   migration, that validates the caller input, inserts exactly one transition, updates the article,
   and returns the resulting state in one transaction; call it through `supabase.rpc(...)`.
   Specify and test execute privileges explicitly because Postgres functions are executable by
   broad roles by default unless revoked/granted deliberately.
2. **Alternative:** provision a server-only PostgreSQL transaction client and `DATABASE_URL` path.
   This needs a Lane A dependency/build-config change and creates a second database access path;
   do not assume it into Lane B scope.

Whichever path is chosen, update the S2 packet, the relevant `SPECS`, the migration/artifact list,
and the negative tests. The Definition of Done must prove: no orphan transition when the update
fails, no state change without exactly one transition, agent T5 refusal, correct human executor
metadata, and rollback of both writes on any error.

## What I did instead

Stopped the application portion of the packet. The database-only AC-05/AC-06 verification remains
conceptually separable, but this planning turn performs no test or implementation.
