# SPECS — Multi-Lane AI Governance: Selected Platforms, Loader Surfaces and Measurement Channels

**Date:** 2026-09-27
**Tier:** `SPECS` — fourth tier of `D-29`, for the global Project-scope family `AIG-01`–`AIG-06` (`D-271`).
**Behaviour owner:** `docs/fn-specs/FN-MULTI-LANE-AI-GOVERNANCE.md` — this file adds only what that file cannot
determine (`D-30`): its §9 candidates *"which files each vendor tool loads"* and *"measurement channels per tool"*.
**Status:** Draft. Every loading claim below is **planned** or **unknown** until an `SV2-U02` run measures it.

**Claim marks.** **measured** — observed and recorded with its commit; **planned** — the intended route, not yet
observed; **unknown** — not known and not assumed. A vendor's documentation is recorded as **planned** until a run
confirms it in this repository.

---

## 0. Section origin — `D-36`

Every section is `[V1]`, introduced by `D-271` on 2026-09-27.

## 1. Selected platforms `[V1]`

The surfaces the Judge selected (`D-266` item 1). Replacing one is a `SPECS` change; the behaviour file is untouched.

| Lane | Surface | Role | Works in the repository? |
|---|---|---|---|
| A | Claude Code (desktop app, Code tab) | Governance and docs owner; runs `SV2-U02-A` | Yes — local checkout |
| A | Claude Cowork | Handoff dialogue; drafts Lane A answer text | **unknown** — repository access not measured |
| B | Codex | Code and scripting; runs `SV2-U02-B` | **planned** — local checkout |
| B | ChatGPT Chat/Work | Raises handoffs; Level 1 review | **unknown** — works from supplied context unless measured otherwise |
| C | Antigravity IDE | DevOps (`.github/workflows/`); runs `SV2-U02-C` | **planned** — local checkout |
| C | Antigravity chat | Level 2 review | **unknown** |

## 2. Loader surfaces `[V1]`

Sizes are **measured** at `21170aa` (characters counted as Unicode code points; bytes as UTF-8). Whether and how each
file loads is the `SV2-U02` question and stays **unknown** here. *Superseded for loading `[V1]`, `D-324`:* loading is now **measured and accepted** (`D-318`, `SV-002` §3.5):
- **Claude Code** delivers `CLAUDE.md` only, with HTML comments stripped.
- **ChatGPT Work (desktop app, on the Codex runtime)** delivers `AGENTS.md` only, byte-exact. *Corrected `[V1]`, `D-329`: this was earlier labelled "Codex". The Codex build surface is unmeasured.*
- **Antigravity (Gemini 3.8 Flash)** delivers `AGENTS.md` only, cut after line 329 (23,962 bytes).
- **No tool delivers `.agents/rules/graphify.md`.**

The "Loading" column below is kept as history.

| File | Characters / bytes / lines | Target (`D-266` item 3) | Intended consumer | Loading |
|---|---|---|---|---|
| `CLAUDE.md` | 29,449 / 29,709 / 402 | < 300 lines, inheriting `@AGENTS.md` | Claude Code | **planned**: loaded at session start. `@AGENTS.md` import: not present today |
| `AGENTS.md` | 31,649 / 31,920 / 451 | < 6,000 characters | Codex; any tool reading the cross-tool base | **planned** for Codex; **unknown** for Claude Code (native read, import, or neither) and Antigravity |
| `.agents/rules/graphify.md` | 21,593 / 21,750 / 296 | — (a root `GEMINI.md` does not exist; `D-266` item 3 assigns `GEMINI.md` to Gemini models in Antigravity as a design target; creating it is not authorized before the `SV2-U02` report) | Antigravity | **unknown** |
| `.claude/skills/sync-docs/SKILL.md` | 7,403 / 7,453 / 153 | < 12,000 characters | Claude Code, on demand | **planned**: loaded when the skill is invoked |
| `~/.gemini/config/skills/graphify/SKILL.md` (outside the repository) | 70,300 characters (`SV-002` §3.1) | < 12,000 characters | Antigravity | **unknown**; trimmed only after `SV2-U02-C` (`D-266` item 4) |

The shared core — the text between the `SHARED CORE` markers in the three rule files — is byte-identical by the
`shared-core-hash` check. That proves the files agree, not that any tool loads them.

## 3. Measurement channels `[V1]`

The method itself is fixed in `SV-002` §3.4; this table names the channel each tool offers for it.

| Tool | Loaded-file inventory | Token or context readout | Direct file or search access during the probe | Status |
|---|---|---|---|---|
| Claude Code | Session context listing | `/context` | Available — must be **withheld** during the automatic-loading probe | **planned** |
| Codex | **unknown** | **unknown** | Available — must be withheld | **planned** |
| Antigravity | **unknown** | **unknown** | Available — must be withheld | **planned** |

A channel marked **unknown** does not block a run: the probe falls back to sentinel quotation with controls, and a
result that cannot separate route from truncation is `inconclusive` (`AIG-03.R3`).

## 4. Request and response route per measurement `[V1]`

| Route | Requester | Responder (does the work) | Operator | Receipt path |
|---|---|---|---|---|
| A — `SV2-U02-A` | Lane A | Lane A (Claude Code) | The Judge opens a fresh session | `SV-002` §3.1, recorded by Lane A |
| B — `SV2-U02-B` | Lane A | Lane B (Codex) | The Judge opens a fresh session | Lane B's own `B-` entry (`D-184`) |
| C — `SV2-U02-C`, under a named `-B` run | Lane A | Lane C (Antigravity) | The Judge opens a fresh session | Lane C commits its own `C-` entry with `Receiver: Lane A` — Lane A requested the run *(amended `[V1]`, `D-272`)* |

All three are **read-only responses**: no owned file is written, so no lock is needed and no lane state changes
(`AIG-01.R2`, `D-271` item 6).

## 4a. Selected rule-file design `[V1]` (`D-324`, the Judge's scope act on `SV-002` §3.6.6) — **applied `D-337`**

- **Design: composition.**
  - One hand-maintained shared core in `AGENTS.md`: the invariants every agent needs, plus a section worded "if you
    are Codex (Lane B)".
  - `CLAUDE.md` = `@AGENTS.md` plus the Claude Code tail.
  - One Lane C file with **no copy of the core**: `GEMINI.md` for Gemini models, or `.agents/rules/*.md` with a
    proven key, whichever the preflight proves.
  - The demoted rules kept verbatim in `docs/governance/agent-rules-reference.md`.
- **Fallback:** generation, only through a `D-266` amendment, if Claude Code does not expand `@AGENTS.md`.
- **Sizes:**
  - `AGENTS.md`: under 6,000 characters (hard), with a **working ceiling of 5,400**; also under 24,000 bytes.
  - `CLAUDE.md`: under 300 lines.
  - Each file measured in both characters and bytes.
- **The check that replaces `shared-core-hash.mjs`** asserts both units per file, import integrity, a single copy of
  the core, and live lane state only in `V1-PHASE-CLOSURE.md` §5.
- **Proof:**
  - a preflight in a **local git worktree**, one variable at a time, with the model recorded (and a non-Gemini arm if
    Lane C may run one);
  - a ledger-backed measured draft;
  - the atomic change;
  - re-measurement of all three routes;
  - activation probes passing **at least 4 of 5 paraphrased prompts and 0 of 3 near-miss prompts** per class and tool;
  - adherence probes;
  - Level 1 and Level 2 review.

## 5. Implementation pointers `[V1]`

Already built; listed so this file does not restate them: `scripts/checks/shared-core-hash.mjs`, `lane-state.mjs`,
`lane-boundary.mjs`, `handoff-response.mjs`, `terminal-return.mjs`, `closure-readiness.mjs`; `.githooks/commit-msg`.

## 6. Code-navigation realization per surface `[V1]` *(added, `D-433`)*

Behaviour, applicability and availability: FN §4.4 (Tables A and B). Selected outcome: **existing path** (`D-433`).

### 6.1 Measured facts (2026-10-10, B-136)

| Fact | Mark | Record |
|---|---|---|
| `git grep -n -w requireConfigured -- lib app __tests__`: exit 0, 221 bytes | **measured** on Lane A, Lane B (Codex terminal) and Lane C (Antigravity IDE) | B-136 `5c91ef8`, `156ebac`; C-a at `1bf7d90` (Lane A) and `7d9ae68` (Lane C, record `6f0e9050…`) |
| Negative control `SV2_U03_NO_SUCH_SYMBOL_57da611` over the same roots: exit 1, 0/0 bytes | **measured** (A, B, C) | same |
| A nonexistent pathspec: exit 1, 0/0 bytes — the same as the negative control | **measured** (A, B) | B-136 `156ebac`; Lane A re-run at `156ebac` |
| Tracked-file inventory at `156ebac`: `lib` 5, `app` 4, `__tests__` 3, `supabase/migrations` 2, `.github/workflows` 1, `components` 0 | **measured** on Lane A; the same counts on Lane C at `7d9ae68` | B-136 `5c0ff8b`; C-a record |
| Default `git grep` searches tracked files only; `--untracked` and `--no-index` exist but are not measured | **measured** (help text, A and B) | B-136 `156ebac` |
| SQL fallback: `git grep -n -i enforce_article_state_transition -- supabase/migrations`: exit 0, 223 bytes | **measured** (A, B, C) | B-136 `90ce74f`, `156ebac`; C-a |
| Workflow dependency: `ci.yml` runs `bun run typecheck`, `lint` and `check` (168 bytes); `package.json` defines all three (155 bytes); `scripts/check-consistency.mjs` is tracked (30 bytes). Byte-identical on A and C | **measured** (A, C) | C-a at `1bf7d90` and `7d9ae68`; Lane B `f9af4d6` |
| Lane C ran `C:\Users\rober_24syk4j\AppData\Local\Programs\Git\cmd\git.exe`; Lane A ran `…\Git\mingw64\bin\git.exe`. Different paths and hashes, the same Git 2.54.0.windows.1 | **measured** | C-a records; Lane B `f9af4d6` |
| ripgrep is **not** on Lane A's `PATH`; ripgrep 13.0.0 exists inside the Antigravity IDE bundle | **measured** on Lane A | `lane-a-p15-u03-plan-2026-10-10/baseline-raw.json` |
| ripwire 0.6.3 CLI, `--uses=requireConfigured`: call site found; definition file not named; negative = exit 1 refusal; 1,077 bytes | **measured** (trial only; binary removed) | `lane-a-u03-trial-2026-10-10/evidence/03-results.json` |
| ripwire `--mcp` via a direct stdio client: same text; negative = JSON-RPC `-32602` | **measured** (protocol only) | B-136 `5c91ef8` |
| ripwire default cache: per-root TMPDIR; a cache file was written with `--no-cache` on the MCP path | **measured** (Lane B) | B-136 `5c91ef8` |
| ripwire registered and called natively inside any host | **unknown** | — |
| Antigravity skill route `skills/ripwire/SKILL.md` | **unsupported** — absent; the release ships 17 `ripwire-*` skill folders | B-136 `df873fe`; Lane C `1bf7d90` |

### 6.2 Realization — *existing path* (selected, `D-433`)

| Surface | Method | Invocation (measured) | Scope | Writes | Failure handling |
|---|---|---|---|---|---|
| Claude Code (A) | `git grep` | Scope check, then `git grep -n -w <SYMBOL> -- <roots>`; SQL: `git grep -n -i <NAME> -- supabase/migrations` | Tracked files in the declared roots | None | See the rule below |
| Codex (B) | `git grep` | Same | Same | None | Same |
| Antigravity IDE (C) | `git grep` | Same; workflow dependency: `git grep -n -E "bun run [a-z]+" -- .github/workflows`, then the `package.json` definitions, then `git ls-files -- <entry>` | Same | None | Same |

**Scope check (before every search: task, negative control and SQL).** (1) `git rev-parse --show-toplevel` equals the
intended repository. (2) For each required root, `git ls-files -- <root>` lists at least one file. A required root
with no file stops the search as **incomplete scope**; it is never removed to obtain a pass. An optional root is
excluded only with a reason recorded before the search, and the result makes no claim about it. The frozen task roots
(`lib app __tests__`) and SQL root (`supabase/migrations`) are required roots.

**Classification (from the `git grep` documentation).** Scope check failed → **incomplete scope**. Exit 0 →
**success**. Exit 1 with empty stdout and empty stderr, after a passed scope check → **no-match**. Any other exit,
or any stderr → **error**. Retain the full outputs.

**Recorded limits.** The search returns text matches. Telling a call from an import or a definition needs source
reading. One symbol and one line never prove complete call-graph coverage. Untracked and ignored files are outside
the scope; a wider mode is a separate, declared and measured procedure. Entry-point existence is not CI execution.

### 6.3 Realization — *provision* (not selected by `D-433`; proposed and unexecuted)

Kept as the proposed procedure for any later provisioning act. Every row is **proposed** or **unknown**. Drafting it
does not authorize installation. Each unresolved value has a named discovery check and a stop point. Native
availability is claimed only after an authorized run through the selected host records its result (`AIG-04.R3`).

| Value per consuming host | Current mark | Discovery check before freezing | Stop point |
|---|---|---|---|
| Pinned release and hash | **unknown** | The publisher's release record and checksum for the pinned version | No published checksum → stop |
| Install location (Lane A-owned, outside the repository) | **proposed** | Path is outside every governed root and every other actor's profile | A path inside the repository or a shared profile → stop |
| CLI invocation and options | **measured** for 0.6.3 in the trial (`--uses`, `--mcp`) | Re-read the pinned version's own help; record its bytes | Help differs from the trial syntax → stop and re-draft |
| Host registration (Codex MCP; Claude Code MCP) | **unknown** | The selected host's supported interface for its installed version (its help or official documentation) | Syntax not found in that interface → stop; do not guess |
| Antigravity IDE route | **unsupported** | A scoped act naming the exact shipped file, hash, destination, trigger, invocation and restore | No such act → stays unsupported |
| Discovery | **unknown** | The host lists the tool after registration and restart | Not listed → protocol response only; stop |
| Cache location and redirection | **measured** default per-root TMPDIR; redirection **unknown** | The pinned help for a cache path option | No option → record the cache in the before/after inventory |
| Permitted writes | **proposed**: install location, host registration file, cache | Before/after inventory of the named locations (`AIG-04.R5`) | An unlisted write → error; restore and stop |
| Removal and restore | **proposed** | Created objects deleted; changed objects restored to captured bytes | Mismatch → stop; retain evidence |
