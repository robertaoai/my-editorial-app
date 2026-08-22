# SPECS — Verification Apparatus (`R3`)

**Date:** 2026-08-20
**Tier:** `SPECS`-form document, **Project Scope ⚙** — build tooling, not a product feature.
**Status:** Draft. **Specification only, with one exception:** `G59` was executed on 2026-08-21 (`D-64`) — bun 1.1.30 installed and `bun.lockb` committed. **The runner, `__tests__/`, and CI remain uninstalled.**
**Authorized by:** `D-56`. **Not one of `D-52`'s four** — see §1.1.
**Closes:** `R3` as a *specification*. Installation remains gated on the standing build guardrail.
**Sprint:** T1 → precondition for S0.

---

## 0. Section origin — `D-36`

Living document; no build-version prefix, does not freeze. **All sections `[V1]`.**

**No Technical Stack section** (`D-30`) — the runner is already fixed by an existing declaration, which is a different thing from choosing a stack.

---

## 1. Executive summary `[V1]`

**Intent.** Give every sprint a verdict that is produced by machine rather than asserted by whoever closed it.

**Why it exists.** `V1-BUILD-SPEC` calls `R3` *"the precondition for every sprint having a verdict."* Today there is **no test runner, no `__tests__/`, and no CI**, and `next.config.ts` disables type and lint gates at build (`TC6`). Every sprint DoD written so far — S0's *"CI green on an empty suite"*, S1's *"trigger written and unit-tested"* — names an apparatus that does not exist. **Those DoDs are currently unfalsifiable.**

**Success criteria.**

| # | Criterion |
|---|---|
| SC-1 | `bun test` executes and exits 0 on a suite containing one passing test |
| SC-2 | CI runs on push and reports status |
| SC-3 | CI runs **typecheck and lint explicitly** — not via `next build` |
| SC-4 | A deliberately broken type fails CI |
| SC-5 | A sprint DoD can be evaluated without a human assertion |

**Limitations.** **bun 1.1.30 is now installed** (`D-64`, 2026-08-21), so `bun install` is verified locally. **`bun test` is still unverified** — not for want of a runtime, but because **no test exists yet.** SC-1 remains unproven until D-1 lands, and SC-2 through SC-4 need CI, so `R3` is still reported *"written, locally unverified"* — never *"done."* Same discipline as S1's `DEP-05` caveat.

### 1.1 Why this is not a fifth `D-52` document `[V1]`

`D-52` closed `G33b` by filtering **18 `SPECS` candidates named in the four `Fn_Specs`**, yielding four documents. **`R3` was never in that filter** — it is a T1 item, not a product feature, and no `Fn_Specs` names it.

Different provenance, so **no contradiction with `D-52`.** `D-52`'s four remain the complete answer to *"which product features need `SPECS`."* This document answers a different question: *"what apparatus lets a sprint be judged."* Classified **Project Scope ⚙** per `D-39`/`D-40`, alongside the graphify tooling record — it generates no `FR`, no `AC`, and no `SPECS` candidate.

> **Recorded explicitly because a later reader counting five documents in `docs/specs/` would otherwise read `D-52` as violated.** The count is not the rule; the provenance is.

## 2. Runner `[V1]`

**`bun test`.** Not a choice made here — `package.json` already declares `packageManager: bun@1.1.30`, and the T1 runbook names `bun test` on that basis. **This document ratifies an existing declaration rather than selecting a stack.**

**No new dependency for the runner.** Bun's test runner is built into the runtime. **Corrected 2026-08-21 (`D-70`):** its **type declarations** are a different matter — `@types/bun` **is** required, because both `import ... from "bun:test"` and bun's injected globals leave `tsc` unable to resolve the symbols, so typecheck fails and CI goes red. This section was written before anything typechecked `__tests__/`. Types-only, no runtime. Nothing else is added to `devDependencies`, which is why `R3` costs one config-free script entry rather than a toolchain.

```
"scripts": { "test": "bun test" }
```

> **Do not substitute a different runner for local convenience.** bun's absence on one machine is an environment fact, not a reason to contradict a declared `packageManager`. Doing so would open a new divergence beside `X3`/`X4`/`X5` and buy nothing CI does not already provide.

## 3. Test layout `[V1]`

| Path | Contents |
|---|---|
| `__tests__/` | Repo root. Flat until a sprint needs otherwise |
| `__tests__/smoke.test.ts` | **One test.** Asserts the runner executes |

**The first test proves the apparatus, not the product.** S0 builds the config spine; until it exists there is nothing meaningful to assert. A smoke test that fails when the runner is misconfigured is the entire value at this stage.

**Anti-requirement:** do **not** seed `__tests__/` with tests for unbuilt features. A suite of skipped or failing placeholders makes CI red by default, and a red-by-default CI is indistinguishable from a broken one within two sprints.

## 4. CI `[V1]`

`.github/workflows/ci.yml`, triggered on push and pull request.

| Step | Command | Why |
|---|---|---|
| Checkout | — | — |
| Setup bun | pinned to **`1.1.30`** | Match `packageManager` exactly |
| Install | `bun install --frozen-lockfile` | See `G59` below. **Refined 2026-08-21 (`D-70`)** — `D-64` committed `bun.lockb` to pin the dependency set, and a plain install may resolve past the lockfile and quietly defeat that pin |
| **Typecheck** | `bun run typecheck` | `tsc --noEmit`. **Passes — exit 0 since `D-67`** |
| **Lint** | `bun run lint` → `eslint .` | **Decided `D-66`** — ESLint CLI, flat config extending `next/core-web-vitals`. **0 findings** measured. Config file is Stage A |
| Test | `bun test` | SC-1 |
| **Consistency checks** | `bun run check` | **Added 2026-08-21 (`D-70`)**, extended repeatedly since — by `D-72`, `D-73`, `D-83`, `D-87`, `D-90` and `D-92` — `C-14`'s detection checks, whose follow-up phase was always *"with `R3`'s installation."* **The count is deliberately absent** (`G75`, `D-92`): this cell said *"extended to six"* and *"three run here"* long after both were wrong. **What determines CI coverage is what a check reads**, not its number — `graph-coverage` and `docs-drift` need gitignored `.graphify/`, `source-sweep` needs full history; those three SKIP, the rest run. Runs last: it governs the documents, not the code |

> **Corrected 2026-08-21 (`D-65`) — `[V1]`.** This section listed both commands as if they worked. **Neither does.** The script names were taken from `package.json` and never executed — specified against a summary rather than the thing. `G62` carried the remediation. **Typecheck now passes (`D-67`)**; **DoD D-4 is unachievable until `eslint.config.mjs` exists (`D-66`, Stage A)** — one file, with no remediation behind it.

### 4.1 `TC6` — why typecheck and lint must be explicit CI steps `[V1]`

`next.config.ts` currently reads:

```ts
typescript: { ignoreBuildErrors: true },
eslint: { ignoreDuringBuilds: true },
```

**A CI job that only runs `next build` would pass with broken types and lint errors**, because the build has been told to ignore both. Green CI would then mean *"the bundler completed,"* not *"the code is sound."*

**Disposition — `TC6` is not resolved by this document.** The flags stay as they are; changing deployment behaviour is out of scope here. **CI compensates by running the gates itself**, so verification is restored without touching deploy.

> **`TC6` is not a hypothetical risk — it is an active concealment, and it now has a number.** `ignoreBuildErrors: true` had been hiding **ten real type errors** since scaffolding, in `lib/supabase/middleware.ts` and `lib/supabase/server.ts`. Nothing ever reported them (`G62`). **Fixed by `D-67`** — and the diagnosis changed the finding: they were **two overload-resolution causes**, not ten defects. The concealment was real; its contents were smaller and shallower than the count implied. `ignoreBuildErrors` now **conceals nothing**, which makes `Q6` cheap on the TypeScript side and untouched on the lint side.

> **Guaranteed to fail:** adding CI that runs only `next build`, then reporting `R3` complete. The apparatus exists, reports green, and checks nothing — **worse than no CI**, because sprint DoDs would then cite a verdict that is structurally incapable of failing.
>
> **How to avoid it:** SC-4 is the test of the tester. **Break a type on purpose and confirm CI goes red before trusting any sprint verdict.**

## 5. `G59` — closed 2026-08-21 `[V1]`

**The defect, as found.** No `bun.lockb`, `package-lock.json`, `yarn.lock`, or `pnpm-lock.yaml` existed in the repository, so `bun install` in CI would have **resolved dependencies fresh on every run.** Two consequences, and they are why this mattered:

1. **CI is not reproducible.** The same commit can pass today and fail tomorrow because a transitive dependency published a release. A verdict that varies with wall-clock time is not a verdict.
2. **`R3`'s own guarantee is undermined at the root.** The apparatus meant to make sprints falsifiable would itself be non-deterministic.

**Fix as drafted:** commit `bun.lockb`, generated by `bun@1.1.30` to match the declared `packageManager`. *(At drafting this was blocked — bun was not installed.)*

**Resolved 2026-08-21 (`D-64`).** bun 1.1.30 was installed, `bun install` produced `bun.lockb` (171,092 bytes, 344 installs across 413 packages), and `bun install --frozen-lockfile` exits 0 — **proving the lockfile resolves completely**, which is the property this gap existed to establish. **DoD D-6 is satisfied.**

> **Environment note.** npm places `bun` on PATH as a POSIX `sh` shim, which **hangs under Git Bash**. Invoke `$env:APPDATA\npm\node_modules\bun\bin\bun.exe` directly instead.

## 6. Definition of done `[V1]`

| # | Condition |
|---|---|
| D-1 | `__tests__/smoke.test.ts` exists and passes |
| D-2 | `"test": "bun test"` present in `package.json` |
| D-3 | `.github/workflows/ci.yml` present, running typecheck, lint, and test as **separate** steps |
| D-4 | CI green on the current commit |
| D-5 | **SC-4 demonstrated** — a deliberately broken type turned CI red, and was reverted |
| D-6 | `G59` resolved or explicitly carried forward |

**All six satisfied 2026-08-21 (`D-70`).** D-4 observed green on a real run; D-5 demonstrated by a deliberate type error that turned CI red and was reverted. *(Superseded instruction, retained: report as "written, locally unverified" until D-4 observes a real CI run.)* bun's absence locally makes any stronger claim unfounded — the same discipline S1 already carries for `DEP-05`.

## 7. Dependencies `[V1]`

| Dependency | Nature | Status |
|---|---|---|
| Standing build guardrail | **Blocking installation** | In force for the runner, `__tests__/`, and CI. **Lifted once, for `G59` only** (`D-64`) |
| bun on a developer machine | Blocked local verification and `G59` | ✅ **1.1.30 installed** 2026-08-21. Invoke the `.exe` directly — the npm `sh` shim hangs under Git Bash |
| GitHub Actions enabled | Blocks D-4 | Assumed available |
| `packageManager: bun@1.1.30` | Fixes the runner | ✅ Already declared |

## 8. Risks `[V1]`

| Risk | Consequence | Mitigation |
|---|---|---|
| CI runs only `next build` | Green CI that cannot fail; every downstream DoD inherits a false verdict | Explicit typecheck and lint steps (§4.1) |
| Runner swapped for local convenience | New divergence beside `X3`/`X4`/`X5`; `packageManager` contradicted | §2 — ratify, do not re-choose |
| `__tests__/` seeded with placeholders | Red-by-default CI, then ignored CI | §3 anti-requirement |
| ~~No lockfile~~ | ~~Non-reproducible verdicts~~ | ✅ **Retired** — `G59` closed `D-64`; 413 packages pinned |
| `R3` reported done before a CI run | The precondition for every sprint verdict is itself unverified | D-4 + the *"locally unverified"* wording |

## 9. Scope limits `[V1]`

**Creates no file, installs no package, adds no script — except `bun.lockb`**, produced under `D-64` when the guardrail was lifted for `G59` alone. Authorizes no code, schema, or migration. Does not resolve `TC6` — it compensates for it in CI. `G59` is recorded, not resolved. Installation remains gated on the standing build guardrail being lifted for `R3`.

---

## 10. `C-14` check 8 — lane boundary `[V1]`

**Installed 2026-08-21 (`D-83`), closing `G69`.** `scripts/checks/lane-boundary.mjs`.

**Owning lane: C.** Built by **Lane A under explicit Chief Editor authorization** — `D-82` recorded that every mechanism able to enforce `D-75` sat on Lane C's surface. **`D-84` narrowed that** — `scripts/checks/`, pre-commit hooks and `CODEOWNERS` are all Lane A; only branch protection, a repository setting rather than a file, sits outside every lane. `D-82` named the Chief Editor as one of only two actors who could supply the first control. **Written by the lane it governs**, which a reader should know.

### Behaviour

Reads the **working tree when dirty** — a crossing is then actionable before it enters history — and **`HEAD` when clean**, which is what CI sees on a fresh checkout. It therefore **never skips**, unlike `graph-coverage` and `docs-drift`. Verified compatible with `actions/checkout@v4`'s shallow clone: `git show --name-only HEAD` resolves at depth 1.

Lane map, from `D-75` §5.14ak — **ownership, not authorship**:

| Lane | Surface |
|:---:|---|
| **A** | **Orchestration** — `docs/`, `scripts/`, `.claude/`, `.agents/`, `.codex/`, `.github/` *except* `workflows/`, rule files, build config, `.gitattributes` |
| **B** | `app/`, `lib/`, `components/`, `supabase/`, `__tests__/` |
| **C** | **`.github/workflows/` only** |

**Corrected by `D-84`:** the original map put `scripts/` and `.gitattributes` in Lane C. They are orchestration, therefore Lane A. **Nothing is "shared" any more** — every path maps to one lane or is reported as unmapped. Two commits this section cited as crossings, `24b39fb` and `0e3705c`, touched only Lane A surfaces and were never crossings.

### Why it reports rather than accuses

The rule was probed over **40 commits of real history before the check was written** — the discipline that rejected `G65`'s same-commit design. Four commits spanned lanes, all genuine, **zero false positives**; **three of the four were authorized at the time**. So the check detects the **shape** of a crossing and never the **permission** for one, and its message says *"split it, or record the authorization"* rather than reporting a violation. **A control that reads as an accusation gets suppressed rather than answered.**

### Limits `[V1]`

- Cannot say **which** agent crossed — attribution is unavailable (`D-77`: `agent-stats` returns 0 facts).
- Paths outside the lane map are **not lane-attributed**.
- **Detects; does not prevent.** *(As written. `D-88` added a commit-time gate and `D-89` a merge gate on `main`; **pushes to the working branch remain ungated**.)* `G69` is closed on **visibility**, narrower than its title, and said so rather than left to be discovered.

### Definition of done `[V1]`

1. A working-tree change spanning two lanes raises a finding naming both lanes and the files. **Met** — negative-tested, A+C.
2. A single-lane change passes. **Met.**
3. Runs in CI without skipping. **Met.**
4. Its own installing pass was split into two commits rather than exempted. **Met** — `2b8334e` (Lane C) precedes the register entry (Lane A).

---

## 11. Checks 1, 7, 8 repaired and check 9 added `[V1]`

**Installed 2026-08-21 (`D-87`)**, closing `G67`, `G68`, `G70` and `D-78`. **Owning lane: A** (`D-84` — `scripts/` is orchestration).

### Check 1 — `shared-core-hash`, preamble coverage `[V1]` (`G67`)

`CLAUDE.md` lines **1–138** were byte-identical to `AGENTS.md` but sat outside the `<!-- SHARED CORE` marker, so nothing compared them. That region holds *"build straight through the sprints until the app works end-to-end"* — the instruction behind every crossing `D-75` records.

Core and preamble now report as **separate hashes**. `.agents/rules/graphify.md` is **excluded by design**: a 6-line preamble that never carried the build rules, and including it would fail permanently.

### Check 2 — `tier-sweep`, Tier 1 mapped `[V1]` (`G68`)

`alpha-portfolio-business-continuity-implementation-plan.md` — **Tier 1 under `D-74`, above `Modular_PRD`** — was unmapped, so a column naming it was **rejected as unknown rather than verified**. Mapped; `D-79`'s dropped column restored.

### Check 7 — `docs-drift`, made able to fail `[V1]` (`D-78`)

It tested for `.graphify/needs_update`, which **nothing writes** — `.git/hooks/` is empty. It reported `PASS synced` against a modified document. Now compares `branch.json.lastAnalyzedHead` against `git rev-parse HEAD`, plus the `stale` flag.

**Red between a commit and the next `hook-rebuild`, by design** — the graph genuinely is stale in that window.

### Check 9 — `source-sweep` `[V1]` (`G70`)

The **inverse** of the tier sweep. `tier-sweep` verifies a *decision* reached a tier; nothing verified a governing *document* reached its derived tiers, and `docs/governance/` is living.

Two signals: **frozen documents pinned by SHA**, and **governing documents that changed after the register last moved**. The second is a heuristic whose remedy is to record a decision — *"no tier is affected"* being a valid one. Zero false positives at HEAD across 13 governing documents.

### Limits `[V1]`

- `source-sweep` compares **commit order, never content** — `G65`'s arrival-not-correctness limit again.
- `source-sweep` **skips on a shallow clone**. CI checks out at depth 1; making it run needs `fetch-depth: 0` in `.github/workflows/ci.yml`, which is **Lane C's** (`D-84`) — **specified, not applied.**
- **Three of nine skip in CI.** A local `9/9` and a CI `6/6` are both correct.

### Definition of done `[V1]`

1. Every repaired or added check **negative-tested**; each raised `FAIL` and was restored. **Met.**
2. The frozen-document signal tested **without editing a frozen file** — the pin was perturbed instead. **Met.**
3. `docs-drift` proven able to fail, then proven to catch a real staleness on its first live run. **Met.**

---

## 12. Check 6 extended, and the commit gate `[V1]`

**Installed 2026-08-21 (`D-88`)**, closing `G71` and giving `D-82` its prevention half. **Owning lane: A** (`D-84`).

### Check 6 — `decision-status`, direction D `[V1]` (`G71`)

Directions A–C covered the `Q`-series. **Gaps had no cross-check**, and the register contradicted itself for two days: `D-60` §5.14u closed `G54` while §5.1 still read *"Open — deferred by decision … Needs a Python toolchain."*

`D-60`'s tier table marked **Register ✅**, but `tier-sweep` maps `register` to `files: []` — *"true by construction"* — so the ✅ proved nothing about §5.1. **Index and section, one file, two answers, every check green.**

Direction D compares each `G`-row's §5.1 status against sections claiming to close it: a `## 5.14x` heading naming the gap with *"closed"*, or a scope-limits sentence opening *"Closes `GNN`"*. **Narrow on purpose** — prose that merely mentions a gap must not read as a closure claim.

**Built before the fix.** First run: `G54` and nothing else — one finding across **65 gap rows and 14 closure claims**.

### The lane-crossing gate `[V1]` (`D-82`, `D-88`)

`.githooks/commit-msg` → `scripts/lane-gate.mjs`. **Not a `C-14` check** — it runs at commit time, not under `bun run check`. The count stays nine.

It **requires a declaration rather than forbidding a crossing**:

```
Lane-Crossing: <reason>
```

| Choice | Reason |
|---|---|
| Tracked in `.githooks/`, not `.git/hooks/` | An uncommitted hook silently protects nobody — the `needs_update` (`D-78`) and `${TMPDIR}` (`D-81`) failure mode |
| Classifier imported from `lane-boundary.mjs` | A hook with its own copy of the lane map would drift from the check silently |
| `--no-verify` left open | A gate with no escape gets uninstalled; `lane-boundary` reports the crossing afterwards regardless |

**Activate:** `bun run hooks:install` (also wired to `prepare`). **Verify:** `git config core.hooksPath` → `.githooks`.

### Limits `[V1]`

- **The gate is local**, and `main` is gated by PR + a required status check (`D-89`) — **but the working branch is not**, and the merge gate runs only six of nine checks. `D-82`'s finding is now-answered, not closed.
- Direction D detects **contradiction, not correctness** — it cannot tell whether a closure claim is justified, only that two places disagree.

### Definition of done `[V1]`

1. Direction D built **before** `G54` was corrected, and found it unprompted. **Met.**
2. Gate tested four ways: single lane allowed; A+B crossing blocked with both lanes named; same crossing allowed once declared; and end-to-end through the real hook, where the commit was **refused and `HEAD` did not move**. **Met.**

---

## 13. Check 10 — the handoff channel `[V1]`

**Installed 2026-08-21 (`D-90`).** `scripts/checks/handoff-response.mjs`. **Owning lane: A.**

`D-75` required a handoff at every lane boundary and **named no location**. Lane B's surface holds nothing in `docs/`, so reporting a spec defect or a blocked dependency meant editing `docs/` — an A+B crossing that `.githooks/commit-msg` blocks. **Lane B could not speak without crossing.**

### Fails on

| Condition | Why |
|---|---|
| Malformed entry — no `Kind`, `Status`, or `Lane A` | Cannot be routed or tracked |
| `Answered` with an empty `Lane A` line | A claim with nothing behind it |
| **`Open` with no disposition** | The "feedback sits unread" case |

### Deliberately passes on

**An open entry that has been acknowledged.** A queue is healthy, and a check that is red in the normal case is one people stop reading — the reasoning `D-83` used to make `lane-boundary` report rather than forbid. **Acknowledging is not answering.**

### Limits `[V1]`

- **Form, not substance** — it cannot judge whether an answer is correct or a `Withdrawn` justified (`G65`'s limit again).
- **It cannot make Lane B write an entry.** A blocker never recorded stays invisible.
- Tracked files only, so it runs in CI — **seven of ten checks now reach CI.**

### Definition of done `[V1]`

1. Negative-tested three ways: open-with-no-disposition `FAIL`; **acknowledged-but-open PASS**; `Answered` with empty response `FAIL`. **Met.**
2. `docs/handoff/` unmapped in the lane map, so neither side crosses to use it. **Met.**

## 14. Check 11 — the phase artifact manifest `[V1]`

**Added by `D-94`, 2026-08-22, to answer a Judge deferral.** `V1-PHASE-CLOSURE.md` §1 condition 1
required an artifact list *"checkable by `ls`"* and **no list existed**, so the condition could
not fail — `a_check_that_cannot_fail` inside the document written one pass earlier to prevent
that shape. The Judge caught it; neither the raising lane nor the critic pass did.

**What it reads.** The `§5A` manifest sections of `V1-PHASE-CLOSURE.md`. Each table row whose
first cell is a backticked path is a manifest entry.

**What it fails on:**

- a manifest path that does not exist
- a manifest path that exists but is **untracked** — it cannot belong to a reproducible closure
  snapshot (`B-005`)
- a manifest section present with **no rows** — an empty list satisfies *"every path exists"*
  trivially
- an exclusion recorded **Removed** whose file is present and tracked

**What it deliberately does not do.**

- **It cannot check completeness**, and nothing can — completeness is a judgment about what a
  phase was chartered to produce. That is `C-22`, and **the control for it is the Judge.**
- It does not compare the manifest against `V1-ARTIFACT-INVENTORY.md`. The inventory is the
  **living** record and the manifest a **snapshot**; comparing them would report drift that is
  correct by design.

**Negative-tested four ways, all probes removed.** The instructive one is the third: **a scope
exclusion must not fire on presence.** The first implementation flagged `.github/workflows/ci.yml`
— correctly excluded as **Lane C's** artifact — because it conflated *"this was removed"* with
*"this belongs to another phase."* **A check that reports a disagreement true by design teaches
people to ignore it**, which is the `D-83` reasoning that made `lane-boundary` report rather than
forbid.

**Runs in CI** — tracked files only, no graph input, no history requirement.