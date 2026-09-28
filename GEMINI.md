# Antigravity — Lane C (DevOps): your rules

Antigravity loads this file with `AGENTS.md` (the shared rules), for every model (`D-325`, `D-328`, `D-331`).
It holds only Lane C's own rules; it never copies the shared core (`D-324`).

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
