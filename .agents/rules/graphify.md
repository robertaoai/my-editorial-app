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
overwrite**. `G32` was exactly that. Git authorship carries no information here, and **nothing
currently substitutes for it** — `graphify agent-stats` reports **0 facts**, because its transcript
filter demands a directory prefixed `<repoSlug>-` while Claude Code names the directory exactly
`<repoSlug>`, so every transcript is skipped (`D-87`). Treat agent attribution as **unavailable**,
not merely unread. **Detection (`C-14`) is installed** (`D-70`)
— run `bun run check` before claiming a shared file is consistent. It runs **nine** checks, of
which **six reach CI**: the shared-core hash across the three agent rule files, the `D-54` tier
sweep, the §5.1 duplicate-ID scan, the settings-cascade parse, the decision-status
cross-reference, and the `D-75` lane-boundary check (`D-83`). **Three cannot run in CI** —
`graph-coverage` and `docs-drift` read gitignored `.graphify/`, and `source-sweep` (`G70`) needs
per-file history that a depth-1 checkout does not have. All three report SKIP and must be run on a
machine with the graph and full history. **A local `9/9` and a CI `6/6` are both correct**; neither
is the other's failure.


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

**Lane A provisions ahead; Lane B responds to flags (`D-86`).** Lane A installs the toolchain and
**every dependency before Lane B needs it** — bun and its 413 pinned packages were provisioned this
way (`D-64`). `package.json`, `tsconfig.json`, `eslint.config.mjs`, `next.config.ts` and lockfiles
are Lane A's, so **Lane B does not run `bun add` at all**; it requests, Lane A provisions, Lane B
builds. **Governance reaches Lane B as a flag, not as a document** — when a check fires, fix the
code it names; you are not expected to read the register or decide scope.

**The cost is a blocking handoff, not a split commit (`D-86` correcting `D-85`).** If Lane B needs a
dependency mid-work it stops and waits. That lands on throughput, not on `git bisect`. `D-85`
originally said Lane B should split its commits — **that assumed Lane B edits build config, which
under this principle it never does.**

**Crossing a lane boundary requires a handoff, not a commit** — record what is done, what is
specified-not-applied, and what is open, then stop. This is the development analogue of the
four-eyes rule the governing set imposes at Line boundaries. **Deployment belongs to Lane C and to
GitHub; no agent deploys, and `main` lagging the working branch is expected until Phase 3 — not a
defect to report.**

**Lane B reports through `docs/handoff/` (`D-90`).** `D-75` required a handoff at every lane
boundary and named no place for it. That place is `docs/handoff/`: copy `TEMPLATE.md` to
`B-NNN-<slug>.md`, one file per item, kind `dependency` | `spec-defect` |
`blocked-on-decision` | `finding`. **The directory is unmapped on purpose** — Lane B raises
entries and Lane A answers them, so attributing it to either side would make the other a
crossing on every use. Lane A must mark every open entry `Acknowledged` at minimum;
`bun run check` fails on one left unread. **Acknowledging is not answering** — a queue is fine.

**A crossing must be declared (`D-88`).** `.githooks/commit-msg` blocks a multi-lane commit unless
its message carries a trailer saying why:

```
Lane-Crossing: <reason>
```

It **does not forbid** crossings — most recorded ones were legitimate — and `--no-verify` bypasses
it, after which `lane-boundary` reports the crossing anyway. Activate the hook once with
`bun run hooks:install`; `bun install` does it too.

**What is gated, and what is not — `D-82`, closed by `D-89`.** `main` requires a pull request and a passing status
check, so **CI now runs before a merge, not after it**. **The working branch is ungated** — every
commit lands directly with nothing but the local hook, and `--no-verify` bypasses that. The merge
gate also runs only **six of the nine** checks; `graph-coverage`, `docs-drift` and `source-sweep`
skip in CI, so a merge can pass while the graph is stale. **Local `bun run check` is the only place
all nine run.** Treat the lane rule as a duty, not a guardrail — if you notice you have crossed,
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
Gemini / Antigravity specifics:
- The skill is installed at `~/.gemini/config/skills/graphify/SKILL.md`; the workflow trigger is `/graphify`
- **Graph currency.** `.graphify/needs_update` is written only by graphify's git hook, and **no git hook is installed in this repo**, so its absence is *no signal at all* — do not read it as "synced" (`D-87`, `D-91`). The reliable check is `.graphify/branch.json`: compare `lastAnalyzedHead` against `git rev-parse HEAD` and read the `stale` flag. If they differ, run `/graphify . --update` before relying on semantic results.
