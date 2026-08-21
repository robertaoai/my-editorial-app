---
description: graphify knowledge graph context
---

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
— run `bun run check` before claiming a shared file is consistent. It runs **eight** checks, of
which **six reach CI**: the shared-core hash across the three agent rule files, the `D-54` tier
sweep, the §5.1 duplicate-ID scan, the settings-cascade parse, the decision-status
cross-reference, and the `D-75` lane-boundary check (`D-83`). **Two cannot run in CI** —
`graph-coverage` and `docs-drift` both read `.graphify/graph.json`, which is gitignored, so they
report SKIP and must be run on a machine that has the graph. **A local `8/8` and a CI `6/6` are
both correct**; neither is the other's failure.


**Build lanes (`D-75`, binding).** Three agents work this repo **sequentially, one at a time**, in a
fixed phase order. Each lane owns a surface; **work outside your lane is *specified, never applied*
(`D-56`)** — write the spec, hand off, stop.

| Lane | Agent | Rule file | Phase | Owns |
|:---:|---|---|:---:|---|
| **A** | Claude Code | `CLAUDE.md` | 1 — now | **Orchestration** — `docs/`, `scripts/`, `.claude/`, `.agents/`, `.codex/`, `.github/` *except* `workflows/`, the rule files, and build config incl. `.gitattributes` |
| **B** | Codex | `AGENTS.md` | 2 — next | `app/`, `lib/`, `components/`, `supabase/`, `__tests__/` |
| **C** | Antigravity | `.agents/rules/graphify.md` | 3 — last | **`.github/workflows/` only** |

**Lane A writes every dependency before Lane C builds a workflow against it (`D-84`).** CI calls
`bun run check`; Lane A writes what it calls. `D-75`'s original map put `scripts/` and
`.gitattributes` in Lane C — **corrected**, and two commits it cited as crossings were not.

**Crossing a lane boundary requires a handoff, not a commit** — record what is done, what is
specified-not-applied, and what is open, then stop. This is the development analogue of the
four-eyes rule the governing set imposes at Line boundaries. **Deployment belongs to Lane C and to
GitHub; no agent deploys, and `main` lagging the working branch is expected until Phase 3 — not a
defect to report.**

**This rule is unenforced (`D-82`).** There is no `CODEOWNERS`, no path rule, no pre-commit hook,
and CI runs *after* a commit lands. The only thing that stops a crossing is the agent choosing to
stop — and four crossings by agents that had read this block are on record. **Treat it as a duty,
not a guardrail.** If you notice you have crossed, say so and withdraw rather than continuing.

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
Gemini / Antigravity specifics:
- The skill is installed at `~/.gemini/config/skills/graphify/SKILL.md`; the workflow trigger is `/graphify`
- If .graphify/needs_update exists or .graphify/branch.json has stale=true, warn before relying on semantic results and run `/graphify . --update` when appropriate
