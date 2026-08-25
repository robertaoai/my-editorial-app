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
overwrite**. `G32` was exactly that. Git authorship carries no information here, and **nothing
currently substitutes for it** — `graphify agent-stats` reports **0 facts**, because its transcript
filter demands a directory prefixed `<repoSlug>-` while Claude Code names the directory exactly
`<repoSlug>`, so every transcript is skipped (`D-87`). Treat agent attribution as **unavailable**,
not merely unread. **Detection (`C-14`) is installed** (`D-70`)
— run `bun run check` before claiming a shared file is consistent. **The runner prints the
total; this file does not restate it** (`G75`, `D-92`) — a tally here is the drift mechanism
`G55`, `G56` and `G58` name, and it drifted twice before being removed.

**Three checks cannot run in CI, and the rule is what they read, not their number:**
`graph-coverage` and `docs-drift` read gitignored `.graphify/`, so a fresh checkout has no input;
`source-sweep` (`G70`) needs per-file history that a depth-1 checkout does not have. All three
report SKIP and must be run on a machine with the graph and full history. **Everything else runs
in both places.** A local total and a lower CI total are therefore **both correct** — they differ
by exactly those three, and neither is the other's failure.


**Build lanes (`D-75`, binding; lane state per `D-101`).** Three agents share this repo. **Exactly
one lane is `Active` at a time** — that constraint is physical, one desktop app at a time, and it
has not changed. **What changed (`D-100`) is that the other lanes are `Eligible`, not queued
behind a gate.** Each lane owns a surface; **work outside your lane is *specified, never applied*
(`D-56`)** — write the spec, hand off, stop.

| State | Means |
|---|---|
| **`Active`** | The one lane currently permitted to commit. **The Chief Editor selects it at each Sprint boundary** |
| **`Eligible`** | Backlog open, work specified, **not currently committing.** Not "waiting for a phase to close" |
| **`Blocked`** | Waiting on a named item — a dependency, a decision, or an act no lane owns |
| **`Done`** | Its Definition of Done is met and the Judge has accepted it |

**The live lane state is `docs/v1/V1-PHASE-CLOSURE.md` §5 and nowhere else.** This table defines
the vocabulary; it does not record which lane is Active, because a status duplicated into a rule
file is the drift mechanism (`G55`).

| Lane | Agent | Rule file | Owns |
|:---:|---|---|---|
| **A** | Claude Code | `CLAUDE.md` | **Orchestration** — `docs/`, `scripts/`, `.claude/`, `.agents/`, `.codex/`, `.github/` *except* `workflows/`, the rule files, and build config incl. `.gitattributes` |
| **B** | Codex | `AGENTS.md` | `app/`, `lib/`, `components/`, `supabase/`, `__tests__/` |
| **C** | Antigravity | `.agents/rules/graphify.md` | **`.github/workflows/` only** |

**Lane A writes every dependency before Lane C builds a workflow against it (`D-84`).** CI calls
`bun run check`; Lane A writes what it calls. `D-75`'s original map put `scripts/` and
`.gitattributes` in Lane C — **corrected**, and two commits it cited as crossings were not.

**Lane A provisions ahead; Lane B responds to flags (`D-86`).** Lane A installs the toolchain and
**every dependency before Lane B needs it** — bun and its pinned dependency set were provisioned
this way (`D-64`). **No package count appears here** (`G75`, `C-21`): a dependency change moves it
and nothing detects that, and it had already drifted once. `bun install` prints the number. `package.json`, `tsconfig.json`, `eslint.config.mjs`, `next.config.ts` and lockfiles
are Lane A's, so **Lane B does not run `bun add` at all**; it requests, Lane A provisions, Lane B
builds. **Governance reaches Lane B as a flag, not as a document** — when a check fires, fix the
code it names; you are not expected to read the register or decide scope.

**The cost is a handoff, not a split commit (`D-86` correcting `D-85`; narrowed by `D-101`).** If
Lane B needs a dependency mid-work it raises a `docs/handoff/` entry. **Whether it then stops is a
question about that one item, not about the lane:**

| The entry | What the lane does |
|---|---|
| **Blocks the work in hand** | Stop *that item*, carry on with anything else in scope |
| **Does not block it** | **Carry on.** The entry goes to the top of the backlog and is refined later |

**`D-86` said "stops and waits" and `D-100` says feedback enters the backlog while work
continues. Both are right about different entries** — the earlier wording generalised a blocking
dependency into a rule about every handoff. `D-85` originally said Lane B should split its
commits — **that assumed Lane B edits build config, which under this principle it never does.**

**Crossing a lane boundary requires a handoff, not a commit** — record what is done, what is
specified-not-applied, and what is open, then stop. This is the development analogue of the
four-eyes rule the governing set imposes at Line boundaries. **Deployment belongs to Lane C and to
GitHub; no agent deploys, and `main` lagging the working branch is expected until Phase 3 — not a
defect to report.**

**Lane B and Lane C report through `docs/handoff/` (`D-90`, widened by `G74`/`D-92`).** `D-75`
required a handoff at every lane boundary and named no place for it. That place is `docs/handoff/`: copy `TEMPLATE.md` to
`B-NNN-<slug>.md`, one file per item, kind `dependency` | `spec-defect` |
`blocked-on-decision` | `finding` | `turn-report` (`G84` — a report carries no `Resolution`, and is
counted separately rather than as an unresolved defect). **The directory is unmapped on purpose** — Lane B raises
entries and Lane A answers them, so attributing it to either side would make the other a
crossing on every use. Lane A must mark every open entry `Acknowledged` at minimum;
`bun run check` fails on one left unread. **Acknowledging is not answering** — a queue is fine.

**A crossing must be declared (`D-88`).** `.githooks/commit-msg` blocks a multi-lane commit unless
its message carries a trailer saying why:

```
Lane-Crossing: <reason>
```

It **does not forbid** crossings — most recorded ones were legitimate — and `--no-verify` bypasses
it, after which `lane-boundary` (`D-83`) reports the crossing anyway — it **reports** a crossing
rather than forbidding one, because most recorded crossings were legitimate. Activate the hook once with
`bun run hooks:install`; `bun install` does it too.

**What is gated, and what is not — `D-82`, closed by `D-89`.** `main` requires a pull request and a passing status
check, so **CI now runs before a merge, not after it**. **The working branch is ungated** — every
commit lands directly with nothing but the local hook, and `--no-verify` bypasses that. The merge
gate **skips `graph-coverage`, `docs-drift` and `source-sweep`**, so a merge can pass while the
graph is stale. **Local `bun run check` is the only place every check runs.** Treat the lane rule as a duty, not a guardrail — if you notice you have crossed,
say so and withdraw rather than continuing.

**This is the development lane model — NOT the product's Three Lines** (`OD1`–`OD3`,
`line_assignment`, `AC-01`/`AC-05`/`AC-17`) and **NOT `OD4`** (Proposer → Critics → Judge). Same
source principle, **different subject**; lanes are lettered A/B/C so they cannot be confused with
the product's numbered Line 1/2/3. **Do not cross-reference the two vocabularies.**

**Commands (`D-76`).**

| Command | What it does |
|---|---|
| `bun run dev` | `next dev --turbopack` |
| `bun run build` | `next build` — **not** a verification gate; `TC6` sets `ignoreBuildErrors` and `ignoreDuringBuilds`, so a build stays green on broken types |
| `bun run lint` | `eslint .` |
| `bun run typecheck` | `tsc --noEmit` |
| `bun test` | bun's built-in runner. One file: `bun test __tests__/smoke.test.ts` |
| `bun run check` | the `C-14` consistency apparatus — see above |

**What this repository currently is.** `docs/` is the artifact. The application is scaffolding —
roughly ten source files across `app/` and `lib/`, with `supabase/migrations/0002_*.sql` unwritten.
Phase 1 (Lane A) is specs and governance, **not** code. Do not read the sparse `app/` tree as
evidence the build has fallen behind; `docs/v1/V1-BUILD-SPEC.md` records where it actually stands.

**`README.md` is template boilerplate.** It opens `# vibe-stack-supabase` and describes a generic
Next.js + Supabase starter. It is **not descriptive of this project** and is precisely the kind of
source the warning at the top of this file exists to guard against. Treat it as stack notes only.
Claude Code specifics:
- **You are Lane A, and under `D-93` you are also the Critic — never in the same turn.** Once per
  phase, before asking the Judge to close it, run a critic pass against the phase's artifacts and
  record it in `docs/v1/V1-PHASE-CLOSURE.md` §6. Four rules: **a separate turn** from the work
  being criticised; **read the artifacts, not your own summary of them** (`summary_outlived_source`
  is the named failure and your closure narrative is exactly the wrong input); **zero findings is
  itself reported as a finding** — a critic pass that never rejects is `a_check_that_cannot_fail`
  in a different hat, and **the reject count, not the pass rate, is this mechanism's health
  metric**; and **findings already fixed still get recorded, with the fix** — a weakness deleted
  from the record leaves no evidence the critic worked.
- **You do not close a phase. The user judges, at boundaries only** (`D-93`, `P0`). Present the
  closure report; do not write the verdict row.
- **Graph currency — check at session start.** `.graphify/needs_update` is written only by graphify's git hook, and **no git hook is installed in this repo** (`.git/hooks/` is empty), so its absence is *no signal at all* — do not read it as "synced". The reliable check is `.graphify/branch.json`: compare its `lastAnalyzedHead` against `git rev-parse HEAD`, and read its `stale` flag. If they differ, run `npx graphify hook-rebuild` before relying on `query`/`path`/`explain`. The rebuild preserves the curated layer (verified 2026-08-21), but re-merge `docs/graph-fragments/` if the node count drops.
