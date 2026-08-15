# Security

## Secret Handling
- WordPress API credentials stored in Supabase Edge Function env vars (server-side only)
- Never exposed in frontend; publish action runs via server-side API route
- Supabase service key in server env only, never client-bundled

## Permission Model
- v1: Permissive RLS (demo-first, no login wall) — all reads/writes open
- Lock-down sprint: `auth.uid() = user_id` on every table; only Chief Editor can publish/reject
- Agent inherits Chief Editor's permissions — cannot exceed owner scope

## Approved-Tools Rule
- Only named tools listed in Agentic Layer may execute
- No raw `run_any` or `send_any` — every agent action is a specific named function
- Publish to WordPress uses a dedicated server route, not a generic HTTP client

## Audit Principle
- Every gate transition writes a `workflow_transitions` row before state changes
- Transition rows are append-only (no UPDATE/DELETE on workflow_transitions)
- Every AI-generated field carries source + confidence + review_status
- Rejections and approvals both logged with reason text