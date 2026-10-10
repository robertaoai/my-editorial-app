# Fn_Specs — Global Project Scope `AIG-01`–`AIG-06`: Multi-Lane AI Governance

**Date:** 2026-09-27
**Tier:** `Fn_Specs` — third tier of `D-29`, applied to a **global Project-scope** family by `D-271` (scoped application
of `D-29`/`D-33`). Not a Product feature group.
**Status:** Draft. Planning and measurement design only — no rule-file refactor, loader run or construction authorized.
**Source:** `Modular_PRD.md` §7.2a (`AIG-01`–`AIG-06`, the governed intent anchor for this family); decisions `D-56`,
`D-75`, `D-88`, `D-90`, `D-102`, `D-156`, `D-183`, `D-184`, `D-227`, `D-266`, `D-270`, `D-271`, `D-272`; the handoff SOP
(`docs/handoff/README.md`, `TEMPLATE.md`); attempt `SV-002` (`SV2-U02`–`SV2-U04`).
**Structure:** merged per `D-33`. Technical Stack omitted (`D-30`). Platform realization lives in
`docs/specs/SPECS-MULTI-LANE-AI-GOVERNANCE.md`; platform interaction in `docs/specs/ux/UX-MULTI-LANE-AI-GOVERNANCE.md`.

> **Why this is one group, and why it is not a Product feature.** The AI tools that build this codebase have no
> customer and no customer story (`D-271` item 1). They support development across every module, so they are **global
> Project scope**: no `US-*`, `FR-*` or `AC-*`, no module, no feature sprint entitlement. The six keys cannot function
> apart — measurement (`AIG-03`) is requested and received through the lanes (`AIG-01`) and the channel (`AIG-02`),
> judged by review (`AIG-05`), and only then permits the rule-file refactor (`AIG-06`).

**This file points to rules; it does not restate them.** The lane map lives in `CLAUDE.md`'s shared core, the handoff
lifecycle in `docs/handoff/README.md`, the field syntax in `TEMPLATE.md`, and every decision in the Register. A copy
here would drift from its owner (`G55`).

---

## 0. Section origin — `D-36`

Every section below is `[V1]`, introduced by `D-271` on 2026-09-27. A later change to a `[V1]` section must be marked
with the build version that makes it; an unmarked change is a defect.

## 1. Overview `[V1]`

Three development lanes build this project, each run by AI tools under one Judge (the user, `D-158`):

| Lane | Tools and roles (`D-266` item 1) | Owns (`D-75`, as amended) |
|---|---|---|
| **A** | Claude Code (governance and docs owner); Claude Cowork (handoff dialogue) | Orchestration surfaces — see `CLAUDE.md` |
| **B** | Codex (code and scripting); ChatGPT Chat/Work (raises handoffs, **Level 1** review) | Application surfaces — see `CLAUDE.md` |
| **C** | Antigravity IDE (DevOps); Antigravity chat (**Level 2** review) | `.github/workflows/` only |

This family specifies how those lanes **request and respond**, **exchange handoffs**, **measure what each tool
actually loads**, **navigate code**, **review and verify**, and **change their own rule files** — independent of which
vendor surface realizes it.

## 2. User stories `[V1]`

Project-actor stories, not customer stories; they carry `AIG` keys and never `US-*` IDs.

| Key | As … | I want … | So that … |
|---|---|---|---|
| `AIG-01` | the Judge | one lane to coordinate each request and the owning lane to respond with the work | ownership is never ambiguous, and a request never becomes an unowned edit |
| `AIG-02` | a raising lane | one channel with a lifecycle that cannot silently go false | nothing sent is lost, and nothing closed can quietly reopen |
| `AIG-03` | Lane A | a measured record of what each tool loads | rule-file changes rest on evidence, not on size targets or vendor claims |
| `AIG-04` | a lane that changes, reviews or runs code | a proven way to find the code a change touches, within a declared scope *(amended `[V1]`, `D-433`)* | construction and review do not start blind |
| `AIG-05` | the Judge | review and verification recorded as separate facts by separate actors | "applied" is never mistaken for "verified" |
| `AIG-06` | every lane | rule files that meet the size targets without losing a needed rule | context stays focused and nothing required disappears |

## 3. Requirements `[V1]`

| ID | Requirement | Source |
|---|---|---|
| `AIG-01.R1` | Each lane writes only its owned surfaces; exactly one lane holds the commit lock (`Active`) at a time | `D-75`, `D-156` |
| `AIG-01.R2` | **Requester and responder are distinct roles.** Lane A coordinates a request; the owning lane responds with the work. The lock governs **writes to owned files** — a read-only response writes none, needs no lock and changes no lane state | `D-271` item 6 |
| `AIG-01.R3` | Work outside one's lane is specified, not applied, and crosses by handoff; a multi-lane commit declares the crossing | `D-56`, `D-88` |
| `AIG-02.R1` | Every cross-lane message is a handoff entry; Lane A acknowledges every open entry; an answer is append-only | `D-90`, handoff SOP |
| `AIG-02.R2` | A terminal entry changes only by a Return record (it reopens) or a Terminal annotation record (it does not) | `B-097`, `B-113` |
| `AIG-02.R3` | Each series is raised and committed by its owner **whatever its lane state**; the receiver answers and commits its answer — `B-` → Lane A; `C-` → Lane B, or Lane A when the dependency sits on a Lane A surface or answers a Lane A request. Every commit follows the one-entry procedure *(amended `[V1]`, `D-272`)* | `D-184`, `D-272` |
| `AIG-03.R1` | What a tool loads is a **measured** fact per tool; a design target is not a measurement | `D-266` items 2–3 |
| `AIG-03.R2` | Silence is diagnosed before removal: dead, discovery failure, wrong owner or wrong loading tier | `D-271` item 7; external review §3, advisory |
| `AIG-03.R3` | A probe that cannot separate loader route from truncation or response error reports `inconclusive` | `D-271` item 8 |
| `AIG-04.R1` | A navigation tool is adopted only on a trial against a baseline with a negative control, then a Judge outcome | `D-266` item 7, `D-270` |
| `AIG-04.R2` | Each selected surface (§1) has one row with: surface and host; bounded task; input access; **applicability** (*applicable*, *not required* or *waived*) with its rationale and status (*proposed* or *accepted*); **method**; **availability** (*available*, *unsupported* or *unknown*) with its claim mark; evidence revision; owner; and return condition. A *not required* or *waived* row also names its scope and the act that records it. Applicability and availability are separate facts: *unknown* or *unsupported* availability never proves that the task is unnecessary *(added `[V1]`, `D-433`)* | B-136 DOC-R1/R2 (`156ebac`); `D-433` |
| `AIG-04.R3` | A method counts as **available** on a surface only after a recorded call through that surface's own host. A direct protocol client, a file on disk or another surface's result is not that proof *(added `[V1]`, `D-433`)* | `5c91ef8`; `D-433` |
| `AIG-04.R4` | Before a call is classified, its scope is checked: the working directory is the intended repository, and each required root has at least one eligible file. A required root with no eligible file stops the search as **incomplete scope**; it is never removed to obtain a passing result. An optional root is excluded only with a reason recorded before the search, and the result makes no claim about it. The check applies to the task, the negative control and the SQL search. Only then is a call classified **success**, **no-match**, **error** or **inconclusive**, by rules taken from the method's own documentation before the call. Empty output over no eligible files is **incomplete scope**, never no-match and never a passing negative control. A refusal or error is never counted as an empty result *(added `[V1]`, `D-433`)* | B-136 P1 (`f9af228`), DOC-R4 (`156ebac`); `D-433` |
| `AIG-04.R5` | A unit removes only the objects it created and restores each pre-existing object it changed to its captured bytes or hash. It never deletes a pre-existing file or another actor's work. It compares the named locations before and after, explains each change, and keeps the raw evidence outside disposable locations. It states its limits and infers no global cleanup. A flag is not proof *(added `[V1]`, `D-433`)* | B-136 P2, DOC-R5 (`156ebac`); `5c91ef8`; `D-433` |
| `AIG-05.R1` | Review runs Level 1 then Level 2; `Verified` needs one independent actor; action and verification are separate facts | `D-266` item 1, `D-102` |
| `AIG-05.R2` | An `Approve` verdict is not permission to apply | `D-183` |
| `AIG-06.R1` | Targets bind: `AGENTS.md` < 6,000 characters; `CLAUDE.md` < 300 lines, inheriting `@AGENTS.md`; skills < 12,000 characters | `D-266` item 3 |
| `AIG-06.R2` | No edit to the three rule files or the parity check before the A/B/C loader runs; then one atomic refactor with the parity check | `D-266` item 2 |

## 4. Behaviour `[V1]`

### 4.1 `AIG-01` — request and response

1. **Request.** Lane A records the request — what, why, the acceptance proof and the return condition — in the
   governed source that owns it (a Register act, a work packet unit, or an answer in an existing handoff).
2. **Response.** The owning lane does the work inside its own surface. If the work writes owned files, that lane must
   hold the lock. If it is **read-only** — a measurement, a review, a feasibility read — it writes no owned file and runs
   without the lock, whatever that lane's state (`Active`, `Eligible` or `Blocked`).
3. **Receipt.** The responder's result returns as a handoff entry in its own series, which it commits whatever its
   lane state, naming the requesting lane as receiver (`AIG-02.R3`). *(Amended `[V1]`, `D-272`: lane state no longer
   bars committing one's own entry.)*
4. **Failure.** A response that writes another lane's surface is a crossing: declare it (`D-88`) or withdraw it.

### 4.2 `AIG-02` — the handoff channel

The lifecycle, dispositions, resolutions and fields are owned by `docs/handoff/README.md` and `TEMPLATE.md`. This
family adds no field and no state. Behaviourally: an entry is raised by one lane, acknowledged and answered by its
receiver (`AIG-02.R3`; *amended `[V1]`, `D-272`* — it read "by Lane A"),
and verified by an actor who did not answer it; a terminal entry stays terminal unless a Return record names its one
trigger.

### 4.3 `AIG-03` — instruction loading and measurement

1. For each tool, a run records what that tool actually makes visible from each in-scope rule and skill file, by the
   method fixed in `SV-002` §3.4 before any result.
2. Each run's outcome is one of: **complete loading**, **discovery failure**, **per-file truncation**, **total-context
   truncation**, **duplicated loading**, or **inconclusive**.
3. **Silence diagnosis.** Before any rule is cut, moved or re-tiered, its absence of use is classified as **dead**,
   **discovery failure** (needed, but its trigger does not match real prompts), **wrong owner** (belongs to another
   lane's file) or **wrong tier** (belongs in an on-demand skill, not an always-loaded root file). Only **dead** permits
   removal. A size figure or a usage count alone never does.

### 4.4 `AIG-04` — code navigation

*(Amended `[V1]`, `D-433`.)*

A candidate tool is trialled on one named task against a baseline and a negative control, with the SQL fallback,
under `SV-002` §3.2/§3.4. The Judge records provision, existing path or waive, and accepts or changes the proposed
applicability below. Navigation proves how code is found. It never proves that product behaviour is correct.

**Selected outcome (`D-433`): existing path.** Ripwire is not adopted. The provision and waive rules below are not
selected; they stay as the rules for any later act.

**Table A — task and applicability per surface (the same for every outcome).** Status: **accepted** (`D-433`).

| Surface (host) | Bounded task | Input access | Applicability and rationale | Owner | Return condition |
|---|---|---|---|---|---|
| Claude Code (Lane A) | Find the touch-points of a governance or script change; Level 1 review of Lane B work and Level 2 review of Lane C work (§4.5); provisioning owner (`D-86`) | Local checkout, read | *Applicable* — Lane A changes `scripts/` and reviews code it does not own | Lane A | Host or checkout changes; the method changes |
| Codex (Lane B) | Find the definition, call sites, tests and SQL objects before an application-code change | Local checkout, read | *Applicable* — it builds application code | Lane B | Host changes; the method changes |
| Antigravity IDE (Lane C) | Read-only trace of a workflow to the scripts, configuration and tests it runs (`.github/workflows/` → `scripts/`, `package.json`, `__tests__/`) | Local checkout, read — confirmed by Lane C for its current session (B-136 `1bf7d90`); dated fact: an IDE session read the checkout at `fa38edd` (`SV-002` route C; `C-002` `9514b51`). Read access is not write permission (`D-75`, as amended) | *Applicable* — Lane C owns workflows, which call repository scripts and tools; it must confirm that referenced entry points exist (Lane C's recommendation, B-136 `1bf7d90`) | Lane C | A workflow references a new script or flag, or a workflow file changes |
| Claude Cowork | Draft Lane A's handoff answers from evidence that Claude Code supplies | Supplied context — **unknown** whether it can read the checkout | *Not required* — Claude Code runs every search and supplies the record. Evidence: the search record in the packet (UX §4.5) | Lane A | A draft claim about code location that has no supplied search record |
| ChatGPT Chat/Work | Level 1 review of Lane A and Lane C work | **Dated fact:** a ChatGPT Work desktop session on the Codex runtime read the checkout at `8515bc6` on 2026-09-27 (`SV-002` route B, as corrected by `D-329`). Not evidence for the Codex build surface or for every current Work session. ChatGPT Chat: **unknown** | *Not required* when the reviewed packet carries its full search record (UX §4.5). A new search is routed to Codex | Lane B | A Level 1 finding that needs a search the packet does not carry |
| Antigravity chat | Level 2 review of Lane A and Lane B work | Tool-assisted; a checkout read without a tool call is not guaranteed (Lane C, B-136 `1bf7d90`). Not established for every session | *Not required* on the same terms. A new search is routed to the Antigravity IDE | Lane C | A Level 2 finding that needs a search the packet does not carry |

**Table B — method and availability per *applicable* surface.** Only measured methods name a route.

| Surface | Method | Availability | Evidence revision |
|---|---|---|---|
| Claude Code | `git grep` 2.54.0 | **available** (measured) | B-136 `e2c1be0`; DOC-R4 inventory at `156ebac`; C-a baseline at `1bf7d90` |
| Claude Code | ripgrep on `PATH` | **unsupported** — not on `PATH` (measured) | `lane-a-p15-u03-plan-2026-10-10/baseline-raw.json` |
| Claude Code | Antigravity-bundled ripgrep 13.0.0 by full path | measured as the U03 criterion-4 instrument only; **not a route** | same |
| Codex | `git grep` 2.54.0 | **available** (measured, Codex terminal) | B-136 `5c91ef8`, `156ebac` |
| Codex | ripgrep | Binary **discovered** on the Codex `PATH` (`C:/Users/rober_24syk4j/AppData/Local/OpenAI/Codex/bin/9a7ba4b9ea0c44a3/rg.exe`); route **unknown** — no task, control or SQL measurement | B-136 `4320539` |
| Antigravity IDE | `git grep` 2.54.0 | **available** (measured) for the frozen task, negative control, SQL search and workflow-dependency probes in the reported session. Not CI execution or complete dependency coverage | C-a record `6f0e9050…` at `7d9ae68`; Lane B `f9af4d6` |
| Antigravity IDE | ripwire skill `skills/ripwire/SKILL.md` | **unsupported** — absent from the release | B-136 `df873fe` |
| Any | ripwire native host call | **unknown** — not measured; the trial binary is removed | B-136 `5c91ef8`, `df873fe` |

**Per outcome.**
- **Existing path (selected, `D-433`):** each *applicable* surface uses its *available* method from Table B. An
  applicable surface with no available method keeps an **unknown** row with owner and return condition as a
  **proposed residual; not accepted**. An unknown or unsupported method supplies no navigation proof. Before
  `SV2-DOD-04` / P15 credit, the Judge's outcome act either names a measured route for that surface or explicitly
  accepts the remaining gap, with its scope, risk, owner, return condition and the affected acceptance claim. At
  `D-433`, every applicable surface has a measured route.
- **Provision (not selected):** the provisioned tool becomes a method only after `AIG-04.R3` proof on that host. Until
  then, Table B stays as above.
- **Waive (not selected):** a waiver concerns delivery of a proven navigation route for a named surface and its
  Table A task. The act states its scope, risk, owner and return condition. `AIG-04.R1`'s adoption safeguard stays in
  force, and so do the proof requirements (`AIG-04.R3`, `R4`, `C3`) for every route claimed as available. The waived
  route stays undelivered. An *applicable* task with a waived route is not a *not required* task; Table A does not
  change.

### 4.5 `AIG-05` — review and verification

Level 1 (operational) review precedes Level 2 (architectural). Either may reject. A lane may record its own action as
`Applied`; only an independent actor records `Verified`, citing an existing commit. A green consistency suite supports
review; it never substitutes for it.

*Added `[V1]`, `D-324` (the Judge's review-chain rule):* **Level 1 is ChatGPT Chat/Work (Lane B)** for Lane A's and
Lane C's work. **Level 2 is Antigravity chat (Lane C)** for Lane A's and Lane B's work. **Lane A fills the two slots a
lane cannot fill for itself:** Level 1 for Lane B's work, and Level 2 for Lane C's work. Claude Cowork drafts Lane A's
handoff answers, and Claude Code owns and commits them (`D-227`).

### 4.6 `AIG-06` — rule-file refactor

After the `SV2-U02` report is accepted, the three rule files are refactored **atomically**, with the shared-core parity
check and its fixtures, toward the `AIG-06.R1` targets. Every rule leaving a root file is classified under `AIG-03`
first and lands in a named owner: a lane's file, a skill, or its governed source.

*Added `[V1]`, `D-324` (the Judge's platform clarification):* **Each platform gets the framework built for it.**
- `AGENTS.md` is the open, cross-tool base that every tool can read.
- `CLAUDE.md` inherits it through `@AGENTS.md` and keeps Claude-specific rules, using pointers to stay under its line
  target.
- `GEMINI.md` is for **Gemini models** in Antigravity (long-context review). **Other models in Antigravity read
  `AGENTS.md` only**, so every rule Lane C must always have reaches each model Lane C runs, not only Gemini.
  *Measured `[V1]`, `D-328`:* in the installed Antigravity IDE 2.5.5, a standalone `GEMINI.md` is **injected for a
  non-Gemini model too** (Claude Sonnet 4.6 received it, as Gemini 3.8 Flash did). "For Gemini models" is the
  intended **use**, not a loader restriction, so `GEMINI.md` alone delivers Lane C's rules to every model measured. The
  requirement above, that Lane C's always-needed rules reach each model Lane C runs, is met this way and re-measured
  after any Antigravity upgrade.
- A rule is proved by what the tool received (its harness record), never by the file existing (`D-294`, `D-318`).

## 5. Acceptance checks `[V1]`

Named `AIG-NN.Cn` (registered in `Modular_PRD.md` §0.5). They are Project governance checks, never Product `AC-*`.
**Status** says whether a mechanism exists today.

| Check | Passes when | Mechanism | Status |
|---|---|---|---|
| `AIG-01.C1` | Exactly one lane is `Active` | `lane-state` check | exists |
| `AIG-01.C2` | A multi-lane commit without a `Lane-Crossing:` trailer is blocked or reported | `.githooks/commit-msg`; `lane-boundary` check | exists |
| `AIG-01.C3` | A read-only response is recorded with its requester, responder and receipt, and changes no lane state | `SV-002` §3.1 schedule and receipts | planned |
| `AIG-02.C1` | No open entry is left unacknowledged | `handoff-response` check | exists |
| `AIG-02.C2` | Every commit inside a terminal episode is audit-only or covered by a record | `terminal-return` check | exists |
| `AIG-03.C1` | Each `SV2-U02` run receipt carries sentinel results, controls and an outcome from §4.3's list | `SV-002` §3.4; review | planned |
| `AIG-03.C2` | Every rule removed in `AIG-06` carries a **dead** diagnosis | refactor packet review | planned |
| `AIG-04.C1` | The trial record shows baseline, negative control, SQL fallback and the Judge's outcome | `SV-002` §3.2/§3.4 | planned |
| `AIG-04.C2` | Every selected surface has a complete `AIG-04.R2` row, and every *not required* or *waived* row names its scope and act *(added `[V1]`, `D-433`)* | Table A/B review | planned |
| `AIG-04.C3` | Every *applicable* surface with an *available* method has a recorded call through its own host (`AIG-04.R3`), with a scope check and an `AIG-04.R4` classification *(added `[V1]`, `D-433`)* | Per-surface receipt | planned |
| `AIG-04.C4` | Every unit that installs, caches or configures has an `AIG-04.R5` before/after record *(added `[V1]`, `D-433`)* | Cleanup record review | planned |
| `AIG-05.C1` | `Verified` carries an independent `Verified-By` and an existing commit | `closure-readiness` check | exists |
| `AIG-06.C1` | The three rule files keep a byte-identical shared core | `shared-core-hash` check | exists |
| `AIG-06.C2` | After the refactor, each file meets its `AIG-06.R1` target | size check at the refactor commit | planned |

## 6. Edge cases `[V1]`

| Case | Behaviour |
|---|---|
| A `Blocked` lane is asked for a read-only measurement | It responds; no lock is needed. It commits its receipt in its own series, naming the requesting lane as receiver *(amended `[V1]`, `D-272`)* |
| A tool quotes a sentinel correctly but the verifier cannot tell which loader supplied it | `inconclusive` — never counted as proof of a loading route |
| A rule is unused because its trigger never matches | Discovery failure: rewrite the trigger, keep the content |
| The same text loads twice (native plus import) | `duplicated loading`, recorded with both sources |
| A response writes into another lane's surface | Crossing: declared with a trailer, or withdrawn |
| A review is green but no independent actor signed | Stays `Applied`, never `Verified` |
| A required root has no eligible file (for example `components`, 0 tracked files at `156ebac`) | **incomplete scope** — stop. Do not remove the root to obtain a passing result; matches in the other roots do not pass the task. Never no-match (`AIG-04.R4`) *(added `[V1]`, `D-433`)* |
| An optional root is excluded | Its reason is recorded before the search; the result makes no claim about that root (`AIG-04.R4`) *(added `[V1]`, `D-433`)* |
| A search runs over a nonexistent pathspec | Exit 1 with empty output, the same as no-match. Only the scope check separates them (`AIG-04.R4`) *(added `[V1]`, `D-433`)* |
| A change adds untracked files | Default `git grep` searches tracked files only. List untracked files with `git status --porcelain` and read them directly, or run a separately measured wider mode *(added `[V1]`, `D-433`)* |
| A frozen setup path does not exist in the shipped release | **unsupported**; no substitute file is chosen without a scoped act naming file, hash, destination and restore *(added `[V1]`, `D-433`)* |
| A tool refuses an unknown symbol (non-zero exit, JSON-RPC error) | **error**, not empty; the negative control does not pass on it *(added `[V1]`, `D-433`)* |
| A tool writes a cache although a no-cache option was set | Recorded; the before/after record covers it (`AIG-04.R5`) *(added `[V1]`, `D-433`)* |
| A direct protocol call works but the host does not list the tool | Protocol response only; the surface is not **available** *(added `[V1]`, `D-433`)* |
| A supplied-evidence reviewer needs a search the packet does not carry | The return condition in Table A fires; the search is routed to the named host *(added `[V1]`, `D-433`)* |

## 7. Dependencies and assumptions `[V1]`

- **Depends on:** the lane map in `CLAUDE.md`; the handoff SOP; `SV-002` for every measurement and trial; the Judge for
  every selection, outcome and acceptance.
- **Assumes:** the Judge operates or relays each tool session; the vendor surfaces in the `SPECS` file stay available.
  Vendor loading behaviour is **unknown until measured**.

## 8. Risks and mitigation `[V1]`

| Risk | Mitigation |
|---|---|
| A size target is read as proof of what loads | `AIG-03.R1`; targets and measurements recorded separately |
| A needed rule is pruned because it looked unused | `AIG-03.R2` silence diagnosis; only **dead** permits removal |
| Requester and responder are conflated, so read-only work is blocked by the lock | `AIG-01.R2` |
| This file drifts into a copy of the SOP | It points; `G55` |

## 9. `SPECS` candidate filter — `D-30` `[V1]`

| Component | Does this file determine it? | `SPECS` candidate? |
|---|---|---|
| Which files each vendor tool loads, and how | No — vendor-specific and unmeasured | **Yes** → `SPECS-MULTI-LANE-AI-GOVERNANCE.md` |
| Measurement channels per tool (`/context`, sentinels, diagnostics) | No | **Yes** |
| How each vendor surface raises, reviews and receives handoffs | No — interaction differs by surface | **Yes** → `ux/UX-MULTI-LANE-AI-GOVERNANCE.md` |
| Check implementations (`scripts/checks/*.mjs`) | Already built and owned by Lane A | No — pointer only |
| Handoff fields and lifecycle | Yes — owned by the SOP | No |
| Code-navigation realization per surface: method, version or pin, invocation, scope check, host registration, discovery, permitted writes, failure handling *(added `[V1]`, `D-433`)* | No — surface-specific | **Yes** → `SPECS-MULTI-LANE-AI-GOVERNANCE.md` §6 |
| Setup, verify, use, diagnose and restore steps per surface *(added `[V1]`, `D-433`)* | No — interaction differs by surface | **Yes** → `ux/UX-MULTI-LANE-AI-GOVERNANCE.md` §4 |

## 10. Scope limits `[V1]`

No rule file, skill, template, check or application file changes under this file. It authorizes no loader run, trial,
refactor, lane transition or `V1-SM05` selection; those remain `SV-002` units and Judge acts.
