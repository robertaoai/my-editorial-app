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

**No new dependency.** Bun's test runner is built into the runtime. Nothing is added to `devDependencies`, which is why `R3` costs one config-free script entry rather than a toolchain.

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
| Install | `bun install` | See `G59` below |
| **Typecheck** | `bun run typecheck` | **`tsc --noEmit`, already in `package.json`** |
| **Lint** | `bun run lint` | — |
| Test | `bun test` | SC-1 |

### 4.1 `TC6` — why typecheck and lint must be explicit CI steps `[V1]`

`next.config.ts` currently reads:

```ts
typescript: { ignoreBuildErrors: true },
eslint: { ignoreDuringBuilds: true },
```

**A CI job that only runs `next build` would pass with broken types and lint errors**, because the build has been told to ignore both. Green CI would then mean *"the bundler completed,"* not *"the code is sound."*

**Disposition — `TC6` is not resolved by this document.** The flags stay as they are; changing deployment behaviour is out of scope here. **CI compensates by running the gates itself**, so verification is restored without touching deploy.

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

**Report as *"written, locally unverified"* until D-4 observes a real CI run.** bun's absence locally makes any stronger claim unfounded — the same discipline S1 already carries for `DEP-05`.

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
