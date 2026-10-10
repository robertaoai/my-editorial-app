# UX — Multi-Lane AI Governance: Platform Interaction

**Date:** 2026-09-27
**Tier:** `SPECS` / `ux` — interaction per selected platform (`D-34`), for the global Project-scope family
`AIG-01`–`AIG-06` (`D-271`).
**Behaviour owner:** `docs/fn-specs/FN-MULTI-LANE-AI-GOVERNANCE.md`. **Platform owner:**
`docs/specs/SPECS-MULTI-LANE-AI-GOVERNANCE.md`. This file covers only where the selected surfaces **interact
differently**; it copies no rule.

**Canonical syntax lives elsewhere — link, do not copy:** handoff fields `docs/handoff/TEMPLATE.md`; lifecycle and
commit procedure `docs/handoff/README.md`; lane map and commands `CLAUDE.md` (shared core); decisions
`docs/v1/V1-DECISION-REGISTER.md`.

---

## 0. Section origin — `D-36`

Every section is `[V1]`, introduced by `D-271` on 2026-09-27. Claims about a surface's interaction are **planned**
until observed in use.

## 1. How a request reaches each surface `[V1]`

| Surface | Receives a request by | Returns its work by |
|---|---|---|
| Claude Code | The Judge's chat message in the Code tab; the repository files | Commits on the working branch; a turn report cited from the Register (`D-138`) |
| Claude Cowork | The Judge's conversation, with handoff text supplied | Draft Lane A answer text for Claude Code to commit (`D-227`) |
| ChatGPT Chat/Work | The Judge's conversation, with repository context supplied | A drafted `B-` entry or review text |
| Codex | The Judge's instruction in its session against the checkout | Code commits in Lane B's surfaces; its own `B-` entry (`D-184`) |
| Antigravity chat | The Judge's conversation | Level 2 review text |
| Antigravity IDE | The Judge's instruction against the checkout | Workflow changes in `.github/workflows/`; its own committed `C-` entry, naming its receiver *(amended `[V1]`, `D-272`)* |

**The Judge is the relay between surfaces.** No surface messages another directly; each request and each receipt
passes through the Judge or through a committed handoff entry.

## 2. Interaction differences that matter `[V1]`

| Situation | Claude Code | Codex | Antigravity |
|---|---|---|---|
| Opening a **fresh session** for an `SV2-U02` probe | New Code-tab session; no prior transcript | New session | New session |
| **Withholding file and search tools** during the automatic-loading probe | The operator asks before any tool call and rejects a tool request | **unknown** — measured by `SV2-U02-B` | **unknown** — measured by `SV2-U02-C` |
| Reading the context readout | `/context` | **unknown** | **unknown** |
| Where the receipt is typed | Lane A records it in `SV-002` | Lane B's `B-` entry | Lane C's own committed `C-` entry, `Receiver: Lane A` *(amended `[V1]`, `D-272`)* |

## 3. Review hand-offs `[V1]`

Level 1 (ChatGPT Chat/Work) reviews first, then Level 2 (Antigravity chat), in that order (`D-266` item 1). A review is
text returned to the Judge or appended to the existing handoff entry. It records a verdict; it never applies the fix
and never writes `Verified` for work its own lane answered (`AIG-05`).

## 4. Code navigation per surface `[V1]` *(added, `D-433`)*

### 4.1 Who uses which section

Applicability and owners: FN §4.4 Table A. Methods and availability: FN §4.4 Table B. Technical values: SPECS §6.
Selected outcome: **existing path** (`D-433`). Claude Code, Codex and the Antigravity IDE use §4.2. Cowork, ChatGPT
Chat/Work and Antigravity chat use §4.5.

### 4.2 *Existing path* (selected; read-only search; nothing to install)

1. **Preflight.** Run `git --version`. Run `git rev-parse --show-toplevel` and confirm the intended repository. Run
   `git status --porcelain` and record it.
2. **Check the scope.** Declare the required roots, and any optional root you exclude with its reason. For each
   required root, run `git ls-files -- <root>` and record the file count. If a required root has no eligible file,
   stop and record **incomplete scope**. Do not remove it to get a passing result. Do this check before the task, the
   negative control and the SQL search.
3. **Search.** Run `git grep -n -w <SYMBOL> -- <roots>`.
4. **Classify the result** by SPECS §6.2. Exit 1 with no output is no-match **only** because step 2 passed.
5. **Read each hit in its source context:** definition, import, call, test or other. Count only calls as callers. Do
   not claim complete call-graph coverage.
6. **SQL.** Check the scope of `supabase/migrations` by step 2. Run `git grep -n -i <NAME> -- supabase/migrations`.
   Read the function and its `create trigger` line.
7. **Untracked files.** The search covers tracked files only. If the change adds files, list them with
   `git status --porcelain` and read them directly.
8. **Compare the state.** Run `git status --porcelain` again and compare it with step 1. Explain each difference.
   There is no install, so there is no rollback.

**Antigravity IDE workflow task.** After step 2 for `.github/workflows`, `package.json` and `scripts`: find each
`bun run <name>` in the workflows, find its definition in `package.json`, and confirm the referenced entry with
`git ls-files -- <entry>`. This proves entry existence only, not CI execution.

### 4.3 *Provision* (not selected by `D-433`; proposed and unexecuted)

This procedure is proposed and has not been run. Drafting it does not authorize installation. Each step uses the
SPECS §6.3 discovery check and stops where that table says. Order of authority: this proposed plan → independent
review → a bounded setup and test act → native execution evidence → an accepted operational guide.

1. **Preflight.** Confirm the host and its version. Confirm the authorizing act and its listed locations.
2. **Capture the state.** Record the bytes or hash of each listed location, including any host profile.
3. **Set up.** Install the pinned release at the proposed location. Register it by the host's verified interface.
4. **Discover.** Restart the host. Confirm that the host lists the tool. If not, stop.
5. **Task, control and SQL.** Run the frozen task and the negative control through the host. Classify them by
   `AIG-04.R4`. Run the SQL fallback by §4.2 step 6.
6. **Inspect the cache.** Record each cache file and its location.
7. **Restore.** Delete only the objects this unit created. Restore each changed pre-existing object to its captured
   bytes. Compare the listed locations with step 2. Keep the evidence outside disposable locations.

### 4.4 *Waive* (not selected by `D-433`)

No setup or use steps are given for a waived route. A waiver act names the surface and Table A task whose proven
route is waived, its scope, risk, owner and return condition (FN §4.4 "Per outcome"). The waived route stays
undelivered. Surfaces with an available method still use §4.2.

### 4.5 Supplied-evidence review (Cowork, ChatGPT Chat/Work, Antigravity chat)

A reviewed packet carries, for each search: repository and revision, working directory, declared roots and their
file counts, the exact command, exit code, stdout and stderr byte counts, and the full outputs or a copy that the
reviewing surface can open. A retained path is valid only where that surface's access to it is proven. A reviewer
that needs a search the packet does not carry routes it to the named host (FN §4.4 Table A).
