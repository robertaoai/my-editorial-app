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
— run `bun run check` before claiming a shared file is consistent. Three checks run in CI: the
shared-core hash across the three agent rule files, the `D-54` tier sweep, and the §5.1
duplicate-ID scan. Graph coverage is **local-only** — `.graphify/graph.json` is gitignored, so it
reports SKIP in CI and must be run on a machine that has the graph.

Gemini / Antigravity specifics:
- The skill is installed at `~/.gemini/config/skills/graphify/SKILL.md`; the workflow trigger is `/graphify`
- If .graphify/needs_update exists or .graphify/branch.json has stale=true, warn before relying on semantic results and run `/graphify . --update` when appropriate
