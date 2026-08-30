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
— run `bun run check` before claiming a shared file is consistent. **The runner prints the
total; this file does not restate it** (`G75`, `D-92`) — a tally here is the drift mechanism
`G55`, `G56` and `G58` name, and it drifted twice before being removed.

**Three checks cannot run in CI, and the rule is what they read, not their number:**
`graph-coverage` and `docs-drift` read gitignored `.graphify/`, so a fresh checkout has no input;
`source-sweep` (`G70`) needs per-file history that a depth-1 checkout does not have. All three
report SKIP and must be run on a machine with the graph and full history. **Everything else runs
in both places.** A local total and a lower CI total are therefore **both correct** — they differ
by exactly those three, and neither is the other's failure.


**Build lanes (`D-75`, binding; lane state per `D-156`).** Three agents share this repo. **Exactly
one lane is `Active` at a time** — that constraint is physical, one desktop app at a time, and it
has not changed. **While that lane runs, every other lane is `Blocked`** unless one is
nominated `Eligible` as its successor (`D-156`, superseding `D-108`).
Each lane owns a surface; **work outside your lane is *specified, never applied* (`D-56`)** —
write the spec, hand off, stop.

| State | Means |
|---|---|
| **`Active`** | **This lane is RUNNING** and holds the commit lock. **Exactly one, always — never zero; Lane A by default.** The Chief Editor selects it at each Sprint boundary |
| **`Blocked`** | **Not selected** — another lane already holds `Active` or `Eligible` |
| **`Eligible`** | **The SELECTION step** — nominated as next holder, offered the lock, **not yet executing. At most ONE lane, or none** |
| **`Done`** | Its Definition of Done is met and the Judge has accepted it |

**Chief Editor and Judge are the same entity, "the user" (`D-158`).** The table above uses both
names without linking them; `D-158` decides they are the same natural person, role-contextual
not identity-based, for the duration of v1 — Chief Editor governs lane selection above, Judge
governs phase-`Done` acceptance elsewhere in this file.

**The handover sequence (`D-156`, correcting `D-108` — see `G110`).** **Exactly one lane is
`Active`, always** — never zero, and **Lane A holds it by default**, because orchestration and
governance cannot otherwise proceed. **`Eligible` is the SELECTION step: at most ONE lane**,
nominated as next holder and not yet executing — legal beside an `Active` lane, because that
pairing IS the offer. Approving it makes that lane `Active` and **every other lane `Blocked`**,
until it completes and the approved handover **names the next `Eligible` lane.**

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
this way (`D-64`). **No package count appears here** (`G75`, `C-21`, `D-95`): a dependency change moves it
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
`blocked-on-decision` | `finding` | `turn-report` (`G84`, `D-113` — a report carries no `Resolution`, and is
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
roughly ten source files across `app/` and `lib/`, plus `supabase/migrations/0002_s1_editorial_schema.sql`
— written, applied, and local-PostgreSQL-tested (`D-114`, `D-121`); live Supabase anon-key behaviour
remains unverified under `DEP-05`. Phase 1 (Lane A) is specs and governance, **not** code. Do not
read the sparse `app/` tree as evidence the build has fallen behind; `docs/v1/V1-BUILD-SPEC.md`
records where it actually stands.

**`README.md` is template boilerplate.** It opens `# vibe-stack-supabase` and describes a generic
Next.js + Supabase starter. It is **not descriptive of this project** and is precisely the kind of
source the warning at the top of this file exists to guard against. Treat it as stack notes only.
Gemini / Antigravity specifics:

**You are Lane C. Your work order is `.github/WORKFLOWS-SPEC.md`. Read it before editing a
workflow.**

**You own `.github/workflows/` and nothing else.** Not `scripts/`, not `package.json`, not
`.gitattributes` — `D-75`'s original map placed some of those here and **`D-84` corrected it.**
Everything above this line is the shared core, identical in all three agents' rule files.

**Phase 3 — last.** Lane A (orchestration) runs first, Lane B (application code) second. If
Lane B's sprint has not closed, **your phase has not opened**; check `docs/v1/V1-BUILD-SPEC.md`
rather than inferring from the state of `app/`.

**Two items are queued for you**, both specified in `.github/WORKFLOWS-SPEC.md` §4:
`fetch-depth: 0` so `source-sweep` runs in CI, and renaming the CI job to ASCII so the required
status check cannot silently fail to match. **The second cannot be completed by you alone** —
it needs a branch-protection change that is a repository-settings act, and doing half of it
blocks every pull request. Raise it, do not push it.

**Four rules that will otherwise cost you a rejected commit or a false green:**

- **Never add what a workflow calls.** Scripts, config files, tools and lockfile flags are
  Lane A's (`D-84`). Need one? Raise a `docs/handoff/C-NNN-<slug>.md` entry of kind
  `dependency` and stop. **Do not inline it in the workflow** — that produces a job which
  passes while calling something nobody else can run.
- **Never fix a SKIP by making a check pass vacuously.** `graph-coverage`, `docs-drift` and
  `source-sweep` skip in CI because of what they read, not because they are broken. **A CI
  total below the local total is correct.** A check that cannot fail is worse than no check.
- **`bun run build` is not a verification gate.** `TC6` disables the type and lint gates at
  build, so typecheck and lint stay **separate steps**.
- **Never assert how many checks there are.** `D-92` removed those tallies from four documents
  after they drifted; `bun run check` prints the total.

**Deployment is GitHub's, not yours.** Vercel deploys from `main` on push; **no agent deploys**,
and `main` lagging the working branch is expected until Phase 3 — not a defect to report.

**A real run, or it is not done.** A valid-looking YAML file is not evidence. `R3` required both
a green run *and* a deliberately broken type turning CI red — **the second is the test of the
tester.**

**Never edit:** `docs/PRD.md`, `docs/source/project-charter-v1.md`,
`supabase/migrations/0001_init.sql`. **Never put a secret in a workflow file** — use repository
secrets, and never echo one into a log.

Graphify, for this agent:
- The skill is installed at `~/.gemini/config/skills/graphify/SKILL.md`; the workflow trigger is `/graphify`
- **Graph currency.** `.graphify/needs_update` is written only by graphify's git hook, and **no git hook is installed in this repo**, so its absence is *no signal at all* — do not read it as "synced" (`D-87`, `D-91`). The reliable check is `.graphify/branch.json`: compare `lastAnalyzedHead` against `git rev-parse HEAD` and read the `stale` flag. If they differ, run `/graphify . --update` before relying on semantic results.
