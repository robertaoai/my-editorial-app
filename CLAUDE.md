# my-editorial-app

AI-driven article tracker that logs URLs, runs a five-gate editorial pipeline with AI tagging, and publishes approved articles to WordPress or marks them LinkedIn-ready — with full audit logging of every gate transition.

## ⚠️ READ THIS BEFORE ANY WORK

Do **not** start from the project name, the summary above, or your own assumptions — those
lead to the wrong thing (e.g. a marketing landing page).

**Operative documents — `docs/v1/`:**
- `V1-DECISION-REGISTER.md` — what is decided, conditions, gap dispositions
- `V1-BUILD-SPEC.md` — what is built and in what order
- `V1-ARTIFACT-INVENTORY.md` — what must exist

**Governing set, in precedence order:** `docs/PRD.md` *(customer's frozen record)* →
`docs/source/project-charter-v1.md` *(frozen)* → `v1-build-readiness-addendum.md` →
`blueprint.md` → `business-case.md`. Then `docs/Modular_PRD.md` as the governed spec.

**Intent hierarchy (`D-29`):** `PRD` → `Modular_PRD` → `Fn_Specs` → `SPECS`. A change lands
in the tier that owns it, and only that document changes.

**The plan pack** — `ARCHITECTURE.md`, `DATA_MODEL.md`, `AGENTIC_LAYER.md`,
`INTELLIGENCE_LAYER.md`, `SECURITY.md`, `TASKS.md`, `TEST_PLAN.md` — was generated at
scaffolding from the app name. It is **accurate about the substrate and wrong about
governance** (`D5`). It is **not authoritative.**

**Output contract.** Every analysis response ends with an Approve / Approve-with-conditions /
Defer / Reject table in house vocabulary. Each condition names its follow-up phase.
Rationale stays in the linked document.

**Apply proposed text in full.** When executing a runbook, do not summarise or abbreviate —
`G32` occurred because operative content was dropped that way.

**Terminology.** `docs/PRD.md` is the **Project** Requirements Document — all scopes, not only
product. `docs/Modular_PRD.md` is the **Product** Requirements Document. They are different
artifacts; do not treat the shared acronym as a collision.

**Spec tooling (`D-33`, amends `D-32`).** `spec-writing` is the standard. Use `specs-creator`'s
`templates/PRD.md` as **structural input only** — despite the filename it is a feature-spec
template, and its User Stories and Risks sections are worth keeping.

**Do not execute `specs-creator`'s workflow.** It declares a dependency chain requiring an
`app-vision.md` that does not exist here, and mandates a `specs/` directory outside `D-29`'s
hierarchy. Its `ux.md` template is visual design and does not apply.

Merged structure: Overview · User Stories · Requirements · Behaviour · Acceptance Criteria ·
Edge Cases · Dependencies · Risks · `SPECS` candidate filter.
**Reference example:** `docs/v1/fn-specs/FN-PUBLICATION-09-10-13.md`.

Guardrails, all binding:
1. Input must be a **`Modular_PRD` feature group, never a prose description** — anchors travel
   with the input, and a description produces unanchored scope (`FB-04`).
2. A feature group is features that **cannot function without each other**. Resolve the group's
   internal dependencies before writing, or specs overlap and overlap is repetition.
3. Tech content is a **`SPECS` candidate list**, not a `SPECS` document. Apply `D-30`'s
   redundancy test; discard anything `Fn_Specs` already determines.
4. **UI stays in `SPECS`.** `Fn_Specs` remains behaviour-focused.
5. Omit Technical Stack — added only when the build starts (`D-30`).

**Never edit:** `docs/PRD.md`, `docs/source/project-charter-v1.md`,
`supabase/migrations/0001_init.sql`.

## Build rules (binding — follow in order)
1. **Read first:** open `docs/PRD.md`, `docs/DATA_MODEL.md`, `docs/ARCHITECTURE.md`, and
   `docs/TASKS.md` before writing a single line.
2. **Confirm the plan** back to me in 2–3 lines (the core objects + the one main workflow) BEFORE coding.
3. **Build the ONE core engine/verb FIRST, working end-to-end.** Every app has a main action —
   create a proposal, run the quote/simulation, log a change and act on it. Build THAT against the
   real database in Sprint 1, then breadth. Then build straight through the sprints until the app
   actually WORKS end-to-end. Do NOT stop after auth + an empty or "Connected" status dashboard, and
   do NOT ship read-only screens of seeded data — **every button and form must persist to the
   database and the UI must reflect it. NO dead buttons. Seeded rows are demo placeholders the user
   can also create/edit/delete.** Commit + push after each sprint; pause for review only once a real
   person can actually perform the core job.
4. **Database-first, but don't stop at the database:** lay the data model + core CRUD first (the
   core must work with the AI switched off), then build the real screens that make it usable.
5. **This is the real working app** — real forms, lists, detail views, and the end-to-end flow from
   the PRD's success scenario. Do **NOT** build a marketing/landing page, a front-end-only demo, or
   a connection-status dashboard.
6. **Demo-first — no login wall in v1.** The homepage IS the working app (with seed data), reachable by
   anyone — do NOT redirect to /login or gate the app behind auth yet. Login/signup + per-user lockdown
   is a LATER "Lock it down" sprint, before real users/data. (Keeps the app demoable + screenshot-able.)
7. Never put secrets in frontend code.

## Deploy & data (binding — this stack is already provisioned)
- **Deploy by git, never by CLI.** `git add -A && git commit -m "…" && git push` to `main`;
  Vercel auto-deploys from GitHub. Do NOT run `vercel deploy` / `vercel --prod` with local
  files — it desyncs git, and the next push silently overwrites your live app.
- **Commit + push every change.** Git is the source of truth; uncommitted work is lost on
  the next deploy.
- **The Supabase database is already provisioned** and its keys are in this project's Vercel
  env. Pull them locally: `vercel link` then `vercel env pull .env.local`. Don't invent new ones.
- **Your database is already set up.** The schema from your data model has been applied to
  this project's Supabase database and committed at `supabase/migrations/0001_init.sql`. Build on
  the existing tables — **do not recreate them**. To change the schema, add a NEW migration file
  (`supabase/migrations/0002_*.sql`) and apply it; never edit `0001`.
- **Commit as your GitHub identity, or Vercel will block the deploy.** Vercel verifies that
  every commit's author email belongs to your GitHub account. Your machine's default git email
  often isn't, so the very first local commit gets rejected. Pin this repo's identity once
  (already correct for your account) — before your first commit:
  ```
  git config user.email "241258103+robertaoai@users.noreply.github.com"
  git config user.name "robertaoai"
  ```

Kickoff prompt: "Read everything in /docs, confirm the plan in 3 lines, then build straight
through the sprints until the app actually works end-to-end — the PRD's success scenario, not
just auth + an empty dashboard. The schema is already applied, so pull env with vercel env pull
and build on the existing tables; commit + push after each sprint to deploy. Stop only when a
real user can do the core job."

## graphify

This project has a graphify knowledge graph at .graphify/.

Rules:
- For codebase or architecture questions, when `.graphify/graph.json` exists, first run `graphify query "<question>"` (or `graphify path "<A>" "<B>"` / `graphify explain "<concept>"`); these return a scoped subgraph, usually much smaller than `GRAPH_REPORT.md` or raw grep output
- If .graphify/wiki/index.md exists, navigate it instead of reading raw files
- If .graphify/graph.json is missing but graphify-out/graph.json exists, run `graphify migrate-state --dry-run` first; if tracked legacy artifacts are reported, ask before using the recommended `git mv -f graphify-out .graphify` and commit message
- If .graphify/needs_update exists or .graphify/branch.json has stale=true, warn before relying on semantic results and run /graphify . --update when appropriate
- Before proposing or committing .graphify artifacts, run `graphify portable-check .graphify`; commit-safe graph artifacts must use repo-relative paths, and never commit .graphify/branch.json, .graphify/worktree.json, .graphify/needs_update, or .graphify/cache/. If a repo already tracks any of them, first add them to .gitignore, then propose `git rm --cached .graphify/branch.json .graphify/worktree.json .graphify/needs_update` and `git rm -r --cached .graphify/cache`; never mutate git state without asking
- Before deep graph traversal, prefer `graphify summary --graph .graphify/graph.json` for compact first-hop orientation
- For review impact on changed files, use `graphify review-delta --graph .graphify/graph.json` instead of generic traversal
- Read `.graphify/GRAPH_REPORT.md` only for broad architecture review or when `query` / `path` / `explain` do not surface enough context
- After modifying code files in this session, run `npx graphify hook-rebuild` to keep the graph current
