# `WORKFLOWS-SPEC.md` — Lane C's work order

**Written by Lane A, 2026-08-21 (`D-92`). This is the specification Lane C builds against.**

`D-84` is binding: **Lane A writes every dependency before Lane C builds a workflow against
it.** This file is where Lane A records what it has written, so that Lane C never has to read
the decision register to find out what CI is allowed to call.

**Why it sits here.** `.github/workflows/` is Lane C's surface; **`.github/` minus workflows is
Lane A's.** A spec one directory above the thing it specifies is a single-lane file for its
author and an obvious one for its reader.

---

## 1. What Lane C owns

**`.github/workflows/` and nothing else.** Not `scripts/`, not `package.json`, not
`.gitattributes` — `D-75`'s original map placed some of those here and **`D-84` corrected it**;
two commits it cited as Lane C crossings were never crossings at all.

**Deployment belongs to GitHub, not to you.** Vercel deploys from `main` on push. **No agent
deploys**, and `main` lagging the working branch is expected until Phase 3 — not a defect to
report.

## 2. What Lane A guarantees you can call

| Command | Runs |
|---|---|
| `bun run typecheck` | `tsc --noEmit` |
| `bun run lint` | `eslint .` |
| `bun test` | bun's built-in runner |
| `bun run check` | the `C-14` consistency apparatus |

**`bun run build` is not a verification gate.** `TC6` sets `ignoreBuildErrors` and
`ignoreDuringBuilds`, so a build stays green on broken types. **A CI job that runs only
`next build` would pass with broken types and unlinted code** — it did exactly that while ten
real type errors sat in `lib/supabase/`. Typecheck and lint stay **separate steps**.

**If a workflow needs something not in that table** — a script, a config file, a tool, a
lockfile flag — **raise a `docs/handoff/C-NNN-<slug>.md` entry of kind `dependency` and stop.**
Do not inline it in the workflow. An inlined step produces a job that passes while calling
something nobody else can run: green CI that checks something no local run reproduces.

## 3. The SKIP contract — read this before touching `bun run check`

**`graph-coverage`, `docs-drift` and `source-sweep` cannot run in a default CI checkout, and the reason is what they read, not their
number.**

| Check | Why it skips in CI |
|---|---|
| `graph-coverage` | reads `.graphify/`, which is **gitignored** — a fresh checkout has no input |
| `docs-drift` | same |
| `source-sweep` | needs **per-file history**; `actions/checkout@v4` clones at depth 1 |

**A CI total below the local total is correct, not a regression.** They differ by exactly these
three. **Do not "fix" a SKIP by making the check pass vacuously** — a check that cannot fail is
worse than no check, and this repository has a named failure mode for it
(`probe_that_cannot_fail`).

**No count of checks appears in this file, and none should be added.** `D-92` removed the
tallies from four documents after they drifted; `bun run check` prints the total.

## 4. Queued items

### `C-Q1` — `fetch-depth: 0`, so `source-sweep` runs in CI

**Change:** add `with: fetch-depth: 0` to the `Checkout` step in `ci.yml`.

**Why:** `source-sweep` (`G70`) compares each governing document's last-commit date against its
derived tiers. At depth 1 that history does not exist, so the check reports SKIP and the
source-side of `D-54` propagation is unverified on every merge.

**Cost, stated:** a full clone is slower. Accepted — the alternative is a governance check that
never runs on the only gate that blocks a merge.

**Prerequisite, and it is real:** this **changes how many checks run in CI**, and four documents
asserted that number as a literal. `D-92` removed those tallies first. **Had this landed before
that, the fix would have made four documents wrong** — including the two rule files every agent
reads.

### `C-Q2` — rename the CI job to ASCII

**Change:** rename the job's `name:` from `Typecheck · Lint · Test` to `verify`.

**Why:** those separators are **U+00B7 MIDDLE DOT**. GitHub matches a required status check by
that exact string. **If the protection rule was typed by hand with any other character,
protection is configured and never gates** — a guard that fails open, the `D-81` pattern.

> **⚠ This item cannot be completed by Lane C alone, and doing half of it breaks the merge
> gate.** Renaming the job while branch protection still requires `Typecheck · Lint · Test`
> means the required check never reports and **every pull request blocks indefinitely.**
>
> It fails **closed**, which is the safe direction — but it is still a stoppage.
>
> **The protection rule is a repository-settings act, not a file edit.** It is nobody's lane:
> no agent has it, and `D-89` set the current rule by hand. **Raise a `docs/handoff/` entry of
> kind `blocked-on-decision`, naming the exact old and new strings, and wait for the settings
> change to be confirmed before pushing the rename.**

## 5. Definition of done

A Lane C item is done when:

1. The workflow file change is committed **to `.github/workflows/` only** — a commit spanning
   two lanes needs a `Lane-Crossing: <reason>` trailer or `.githooks/commit-msg` rejects it
   (`D-88`).
2. **A real run is observed**, not merely a valid-looking YAML file. `R3`'s own DoD required
   `D-4` *"CI green on the current commit"* and `D-5` *"a deliberately broken type turned CI
   red, and was reverted."* **The second is the test of the tester.**
3. Nothing new is asserted about how many checks run.

## 6. How to raise anything

`docs/handoff/` — copy `TEMPLATE.md` to `C-NNN-<slug>.md`, kind `dependency` | `spec-defect` |
`blocked-on-decision` | `finding`, then stop. **The directory belongs to no lane**, so writing
there is not a crossing. Lane A must acknowledge every open entry; `bun run check` fails on one
left unread. **Acknowledging is not answering** — a queue is expected.

**Never edit:** `docs/PRD.md`, `docs/source/project-charter-v1.md`,
`supabase/migrations/0001_init.sql`. **Never put secrets in a workflow file** — use repository
secrets, and never echo one into a log.
