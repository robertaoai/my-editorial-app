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

**Propagation (`D-54`).** A decision that creates, sequences, or retires an artifact lands in
**all three** `docs/v1/` documents in the same pass — register (always), build spec (scope,
sequence, DoD), artifact inventory (files) — plus `Modular_PRD` §8 when a sprint closes or a
tier opens. State explicitly when a tier is unaffected. **An approve/reject row that names no
tier is not evidence of completion.** Propagate the *fact*, never the *count*: a restated tally
is the drift mechanism (`G55`, `G56`, `G58`).

**Apply proposed text in full.** When executing a runbook, do not summarise or abbreviate —
`G32` occurred because operative content was dropped that way.

**Terminology.** `docs/PRD.md` is the **Project** Requirements Document — all scopes, not only
product. `docs/Modular_PRD.md` is the **Product** Requirements Document. They are different
artifacts; do not treat the shared acronym as a collision.

**Spec tooling (`D-33`, amends `D-32`).** `spec-writing` is the standard. Use `specs-creator`'s
`templates/PRD.md` as **structural input only** — despite the filename it is a feature-spec
template, and its User Stories and Risks sections are worth keeping.

**Tier mapping (`D-34`) — the tool's chain is a labelling map, not a blocker:**

| `specs-creator` | This project |
|---|---|
| `app-vision.md` | `docs/Modular_PRD.md` — an app **is** a product |
| `prd.md` | `docs/fn-specs/` — behaviour, per feature group |
| `tech-specs.md` | `docs/specs/` — implementation big picture, incl. tech-stack |
| `ux.md` | `docs/specs/ux/` — UI/UX **per tech-stack** (Vue vs Angular, same behaviour) |

**Tracking versus specs (`D-36`).** `docs/v1/V1-*.md` are **tracking files** — they record what a
sprint decided and **freeze** at sprint close. Specs under `docs/fn-specs/` and `docs/specs/` carry
**no version prefix and never freeze**; later builds edit them. Each spec section is marked with the
build version that introduced it — `[V1]`, `[V1→V2]`, `[V2]`. **An unmarked change to a `[V1]`
section is a defect, not an update.**

A stack change lands in `specs/`; a stack-specific UI consequence lands in `specs/ux/`. **Neither
disturbs `fn-specs/`** — behaviour stays stable across a stack pivot.

**Before recording any incompatibility, check what the unfamiliar label maps to.** Three prior
"conflicts" (`D-31`, `D-33`, `pub_target`/`platform_type`) were all vocabulary, not structure.

Merged structure: Overview · User Stories · Requirements · Behaviour · Acceptance Criteria ·
Edge Cases · Dependencies · Risks · `SPECS` candidate filter.
**Reference example:** `docs/fn-specs/FN-PUBLICATION-09-10-13.md`.

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
1. **Read first:** `docs/v1/V1-BUILD-SPEC.md` and `docs/v1/V1-DECISION-REGISTER.md`, then the
   relevant `docs/fn-specs/` for the feature you are touching. **Not the plan pack** — see the
   header: `DATA_MODEL.md`, `ARCHITECTURE.md`, and `TASKS.md` are accurate about the substrate
   and wrong about governance (`D5`).
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

<!-- SHARED CORE — identical in CLAUDE.md, AGENTS.md, and .agents/rules/graphify.md.
     Change all three together or none. A rule added to one file reaches one agent only (G53). -->

This project has a graphify knowledge graph at `.graphify/`.

**Distribution — read this before "fixing" the install.** The installed tool is
`@sentropic/graphify` (npm), an **attributed downstream extension** of the upstream
`Graphify-Labs/graphify` (PyPI `graphifyy`). This is deliberate, not a mistake. Several rules
below name commands that exist **only** in this distribution. Do not swap distributions — see
`docs/graph-fragments/README.md` (`G50`, `G52`, `G54`).

**The graph has two layers.** The extracted layer rebuilds from `docs/`. The **curated layer does
not** — hand-authored nodes and edges rebuild only from `docs/graph-fragments/`. Never
rebuild the graph from scratch without re-merging those fragments, or the curated layer is
silently lost (`G51`).

Rules:
- For codebase or architecture questions, when `.graphify/graph.json` exists, first run `graphify query "<question>"` (or `graphify path "<A>" "<B>"` / `graphify explain "<concept>"`); these return a scoped subgraph, usually much smaller than `GRAPH_REPORT.md` or raw grep output
- If .graphify/wiki/index.md exists, navigate it instead of reading raw files
- If the graphify MCP server is active, prefer graph tools like `query_graph`, `get_node`, and `shortest_path` for architecture navigation
- If .graphify/graph.json is missing but graphify-out/graph.json exists, run `graphify migrate-state --dry-run` first; if tracked legacy artifacts are reported, ask before using the recommended `git mv -f graphify-out .graphify` and commit message
- Before proposing or committing .graphify artifacts, run `graphify portable-check .graphify`; commit-safe graph artifacts must use repo-relative paths, and never commit .graphify/branch.json, .graphify/worktree.json, .graphify/needs_update, or .graphify/cache/. If a repo already tracks any of them, first add them to .gitignore, then propose `git rm --cached .graphify/branch.json .graphify/worktree.json .graphify/needs_update` and `git rm -r --cached .graphify/cache`; never mutate git state without asking
- Before deep graph traversal, prefer `graphify summary --graph .graphify/graph.json` for compact first-hop orientation
- For review impact on changed files, use `graphify review-delta --graph .graphify/graph.json` instead of generic traversal
- Adding curated concepts is a **merge**, not a build — `graphify build --fragment` cannot merge. Use `docs/graph-fragments/merge7.js` as the reference. `graph.json` stores relationships under `links`; fragments declare them under `edges`. Copying `edges` across unchanged produces degree-zero orphans that fail silently
- Read `.graphify/GRAPH_REPORT.md` only for broad architecture review or when `query` / `path` / `explain` do not surface enough context
- After modifying code files in this session, run `npx graphify hook-rebuild` to keep the graph current
**Arbitration (`D-58`, closes `G11`).** When edits conflict, **`docs/v1/V1-DECISION-REGISTER.md` wins.**
An edit to any derived tier that contradicts the register loses, no escalation needed — this follows
from `D-29` (tier precedence) and `D-54` (the register is always updated). If two derived tiers
conflict and the register is silent, **escalate**: the register has not decided it, and that absence
is itself the finding. Frozen documents — `docs/PRD.md`, the Charter, `0001_init.sql` — outrank
everything, unchanged.

**Why this needs saying.** Three agents edit this repo under **one git identity with zero merge
commits**, so a conflicting edit never appears as a merge conflict — it appears as a **silent
overwrite**. `G32` was exactly that. Git authorship carries no information here; `graphify
agent-stats` attributes from CLI transcripts instead. **Detection (`C-14`) is installed** (`D-70`)
— run `bun run check` before claiming a shared file is consistent. Three checks run in CI: the
shared-core hash across the three agent rule files, the `D-54` tier sweep, and the §5.1
duplicate-ID scan. Graph coverage is **local-only** — `.graphify/graph.json` is gitignored, so it
reports SKIP in CI and must be run on a machine that has the graph.


**Build lanes (`D-75`, binding).** Three agents work this repo **sequentially, one at a time**, in a
fixed phase order. Each lane owns a surface; **work outside your lane is *specified, never applied*
(`D-56`)** — write the spec, hand off, stop.

| Lane | Agent | Rule file | Phase | Owns |
|:---:|---|---|:---:|---|
| **A** | Claude Code | `CLAUDE.md` | 1 — now | `docs/`, register, specs, graph curation |
| **B** | Codex | `AGENTS.md` | 2 — next | `app/`, `lib/`, `components/`, `migrations/0002+` |
| **C** | Antigravity | `.agents/rules/graphify.md` | 3 — last | `.github/workflows/`, `scripts/checks/`, `.gitattributes`, deploy gate |

**Crossing a lane boundary requires a handoff, not a commit** — record what is done, what is
specified-not-applied, and what is open, then stop. This is the development analogue of the
four-eyes rule the governing set imposes at Line boundaries. **Deployment belongs to Lane C and to
GitHub; no agent deploys, and `main` lagging the working branch is expected until Phase 3 — not a
defect to report.**

**This is the development lane model — NOT the product's Three Lines** (`OD1`–`OD3`,
`line_assignment`, `AC-01`/`AC-05`/`AC-17`) and **NOT `OD4`** (Proposer → Critics → Judge). Same
source principle, **different subject**; lanes are lettered A/B/C so they cannot be confused with
the product's numbered Line 1/2/3. **Do not cross-reference the two vocabularies.**
Claude Code specifics:
- If .graphify/needs_update exists or .graphify/branch.json has stale=true, warn before relying on semantic results and run `/graphify . --update` when appropriate
