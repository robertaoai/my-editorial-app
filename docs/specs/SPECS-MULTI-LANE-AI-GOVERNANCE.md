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
- **Codex** delivers `AGENTS.md` only, byte-exact.
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

## 4a. Selected rule-file design `[V1]` (`D-324`, the Judge's scope act on `SV-002` §3.6.6)

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
