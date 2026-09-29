# my-editorial-app — shared agent rules

Rules every agent must follow before its first action. Full text, rationale and history:
`docs/governance/agent-rules-reference.md`. For application-code or tooling lookups, do not read it.
**Before you answer or act on handoffs, specs, decisions, lanes, freeze or `[V1]` markers, read it in
full**, even when a README, skill or this file seems to cover the question.
Where anything conflicts, `docs/v1/V1-DECISION-REGISTER.md` decides (`D-58`).

## Before any work
- Start from the governed docs, never from the app name, `README.md` (template boilerplate) or
  the plan pack (`ARCHITECTURE.md`, `DATA_MODEL.md`, `TASKS.md` and siblings; not authoritative, `D5`).
- Authority: the frozen `docs/PRD.md`, Charter and `0001_init.sql`; then the Register; then
  `docs/Modular_PRD.md` → `docs/fn-specs/` → `docs/specs/` (`D-29`). Read `docs/v1/V1-BUILD-SPEC.md`
  and the Register first.
- An Approve verdict is not permission. Execution needs the Judge's Register act, a bounded unit
  and the `Active` lane (`D-183`, `D-186`). The Judge is the user (`D-158`).
- Every analysis ends with an Approve / Approve-with-conditions / Defer / Reject table that names
  each condition's follow-up phase.

## Never
- Edit `docs/PRD.md`, `docs/source/project-charter-v1.md` or `supabase/migrations/0001_init.sql`.
  Schema changes go in a new migration.
- Put secrets in frontend code or anywhere in the repository.
- Deploy with `vercel deploy` or `vercel --prod`. Deployment is by git push through GitHub.
- Skip the commit hook with `--no-verify`.
- Commit under another identity: `git config user.email "241258103+robertaoai@users.noreply.github.com"`.

## Lanes (development lanes, not the product's Three Lines or `OD4`; `D-75`)

| Lane | Owner surface | Other surfaces | Owns |
|---|---|---|---|
| A | Claude Code | Claude Cowork drafts handoff answers | `docs/`, `scripts/`, `.claude/`, `.agents/`, `.codex/`, `.github/` except `workflows/`, rule files, build config |
| B | Codex | ChatGPT Chat/Work raises handoffs, Level 1 review | `app/`, `lib/`, `components/`, `supabase/`, `__tests__/` |
| C | Antigravity IDE | Antigravity chat, Level 2 review | `.github/workflows/` only |

- Exactly one lane is `Active`. Live lane state is in `docs/v1/V1-PHASE-CLOSURE.md` §5 and nowhere
  else (`D-156`).
- Work outside your lane is specified, never applied (`D-56`): raise a handoff and stop that item.
- A commit touching two lanes needs a `Lane-Crossing: <reason>` trailer (`D-88`).
- Only Lane A adds dependencies or edits build config (`D-86`).

## Handoffs (`docs/handoff/`; SOP `docs/handoff/README.md`)
- Copy `TEMPLATE.md` to `B-NNN-<slug>.md` or `C-NNN-<slug>.md`. Never reuse a number (`D-306`).
- Only the receiver writes the answer field. Only an independent actor records `Verified`.
- Level 1 review is ChatGPT (Lane B) for Lane A and C work; Level 2 is Antigravity chat (Lane C)
  for Lane A and B work; Lane A covers the rest (`D-324`).

## Checks and graph
- Run `bun run check` before claiming consistency. `bun run build` is not a gate.
- Use `graphify query` first. Never rebuild the graph without re-merging `docs/graph-fragments/` (`G51`).

## If you are Codex (Lane B)
- Your job is application code in your lane. `docs/LANE-B-WORK-ORDER.md` says what to do next;
  no code runs without a Judge work order.
- Build the real app: data model and core CRUD first, every form persists, no dead buttons, no
  login wall in v1.
- Governance reaches you as a check flag: fix the code it names, or raise a handoff if the fix is
  outside your lane.
- Invoke graphify with `$graphify`.
