# B-156 F3–F6 planning packet — revision 2: changed sections only (Lane A draft, for review)

- **Read at:** `55b84d6`. **Measured at:** `1640ff7bc1b7d1e70ab6a421ced8a054dafda993`.
- **Base:** `F3-F6-packet-r1.md` (`86e9e408…`, committed at `b9fce3f`) stays as history. Every section of revision 1
  that this file does not replace stands unchanged.
- **Answers:** Lane B's PKT-R1–PKT-R4 (`55b84d6`). Every repair, plan, baseline and option is still **proposed**.
- **Marks used below:** **measured** (a recorded observation at a named revision), **proposed** (a draft for review),
  **unknown** (no evidence; it has a discovery step and a stop point).

---

## PKT-R1 — F3 proof wording, R11, and exact old values

### Replaces revision 1's F3 "Quoted current text is machine-checked" paragraph

> **What the citation checks prove.** `F3-citations-1640ff7.json` checks one listed substring per locus (17 targets,
> 33 citations) at `1640ff7`. It proves those substrings are on those lines. It does **not** verify every full old value,
> and some citations name only a node id.
>
> **Full old values are bound separately.** `F3-oldvalue-targets.json` lists 26 targets: every replaced line range
> and every replaced fragment field (description, `source_file`, `source_location`). `F3-oldvalues.mjs` reads each
> full value at a named revision and records its SHA-256. At `1640ff7` and at `55b84d6` all 26 values are identical.
> **Before any application,** the applying unit re-runs `F3-oldvalues.mjs` at its final source revision and stops on
> any value whose SHA-256 differs from the bound value. Negative controls: an unknown node, exit 2, no file; an
> unreadable revision, exit 2, no file.

### Replaces R11's description sentence about `rule-budget`

Old (revision 1): "rule-budget checks the sizes, the import and that no core line is copied."

New: "rule-budget checks the sizes and the import, and detects copies of core lines that meet its 60-character
threshold; it does not prove that no shorter core text was copied."

F4's `rule-budget` row already states the same limit. The other R11 text is unchanged.

### Location correction (R21)

The `.gitattributes` current-value list is L34–L38 (it ends with `.agents/**/*.md merge=text`). R21 adds
`GEMINI.md            merge=text` inside that list; any position after L18 takes effect, because later rules win.

---

## PKT-R2 — F4: proposed instrument tasks by use case; AG-2: the gstack correspondence

### F4.2 Proposed instrument tasks (new section; F4's status table in revision 1 stays)

Three use cases share one project. **They do not share an acceptance test.** No task below adopts a tool, installs
anything, changes configuration or runs a trial. Each task needs its own bounded unit before execution.

| Field | GOV-1 Graphify governance navigation | CODE-1 Ripwire symbol uses (TypeScript) | CODE-2 Ripwire SQL lookup | CODE-3 Graphify code-node navigation | KB-1 Knowledge retrieval (AIG-07) |
|---|---|---|---|---|---|
| Use case | Governance/docs | Codebase (setup source now; product code later) | Codebase | Codebase | Knowledgebase |
| Status | **Operative** (`D-425`, `D-426`) | **Not adopted** (`D-433`); trial evidence only | **Not adopted** | **Not selected** by `D-433` | **Proposed, unallocated** (`D-424`; B-154 retrieval packet) |
| Intended observation | Which governed sources discuss a concept, and their links | Every call site of one named symbol, and its definition | Every definition and use of one SQL function | Code symbols and their file edges in the projection | Answer a question from the corpus with cited sources |
| Expected result (positive control) | `graphify query` returns the governing nodes for a known decision (for example `D-337`) | `requireConfigured`: the call site at `__tests__/build-config.test.ts` (**measured** at trial) and the definition at `lib/config/build-config.ts:380` (**measured**: the trial did **not** name the definition file) | `enforce_article_state_transition` in `0002` at L311 and L411 | The symbols of `lib/config/build-config.ts` | — (no task defined until allocated) |
| Negative / refusal control | A non-existent concept returns no governing node; a raw rebuild is refused by the guard | `SV2_U03_NO_SUCH_SYMBOL_57da611`: exit 1 refusal (**measured**); MCP: JSON-RPC `-32602` (**measured**) | A non-existent SQL name | A non-existent symbol | — |
| Language / SQL limits | Markdown and curated fragments; meaning needs source reading | TypeScript/JavaScript call sites (**measured**); definitions not named (**measured** limit) | **Unknown**: no SQL measurement exists. The accepted fallback is `git grep -n -i <NAME> -- supabase/migrations` (`D-433`, SPECS-ML §6.2) | **Unknown**: which languages the extractor parses at the pinned version | — |
| Lane surfaces and access | A, B, C may query read-only; only Lane A runs the guarded rebuild | **Unknown** for native host registration on any surface (SPECS-ML §6.1); the Antigravity `skills/ripwire/SKILL.md` route is **unsupported** (absent) | Same as CODE-1 | A, B, C read-only | — |
| Availability evidence | The guard's pinned CLI; `branch.json` | ripwire 0.6.3 CLI ran in a trial and the binary was **removed** (**measured**); not installed now | None | The live graph `81ab5cd6…` holds code nodes (**measured** by F2c endpoint resolution) | None |
| Configuration discovery | None needed | Discovery step: on each surface, record whether a ripwire binary or registered tool exists **without installing** (`command -v ripwire`, the host's tool list). Stop point: report only | Same | None needed | Judge allocation first |
| Evidence access | Query output retained in the unit's output folder | Records under `C:/CoWork/outputs/lane-a-u03-trial-2026-10-10/` (local to Lane A) and B-136 `5c91ef8`; a unit copies its evidence into `docs/handoff/artifacts/` | Same | Query output retained | — |
| Cleanup proof | None (read-only) | Remove the binary and the per-root TMPDIR cache; the MCP path wrote a cache file even with `--no-cache` (**measured**, Lane B). An `AIG-04.R5` before/after record is required | Same | None (read-only) | — |
| Authority to execute | Existing (read-only query) | A new Register act naming the task, host, controls and cleanup | Same | A new act if it is ever to replace `git grep` | Judge allocation, then its own unit |
| Return condition | — | A named use case needs it **and** the Judge selects it | Same | Same | AIG-07 allocated |

**What no row claims:** a graph that is current is not semantically current (AG-1); a trial result is not adoption;
setup-source navigation is not a delivered product codebase; KB-1 is not delivered by Graphify currency.

### AG-2 / F5.2 — the six gstack activities mapped to current mechanisms (replaces the empty correspondence field)

The initial declaration (`62c8d8c` AGENTS.md L94–L102) and the Judge's clarification (`e7bdd29`) give **workflow
intent**. The correspondence below is **proposed**. It does not prove that gstack is installed, that its commands
ran, or that any command was superseded or retired. Customer requirements stay the parent (`D-29`); an activity may
serve several requirements.

| Activity (initial command) | Current intent / decision (read at `1640ff7`) | Requirement / specification | Implementation mechanism | Verification mechanism | Gap / unknown |
|---|---|---|---|---|---|
| Plan (`/office-hours` → `/autoplan`) | `D-29` intent hierarchy (Register §2.3); `D-100` Scrum, continuous refinement (§5.14bh); `D-242` intent/build separation (§5.14e67) | Modular_PRD feature groups → fn-specs → specs; work packets | Register acts, work packets, handoff entries | Lane B Level 1 review; Judge acts | gstack's planning commands: availability **unknown**; no transition act located |
| Review (`/review` before merging) | `D-324` J5 review chain (§5.14e149): Level 1 ChatGPT (Lane B) for A and C work; Level 2 Antigravity chat (Lane C) for A and B | Handoff SOP (`docs/handoff/README.md`) | Handoff entries with independent answers | `handoff-response`, `terminal-return`, `closure-readiness` checks | No PR-merge review gate is in use on this branch; **unknown** whether `/review` was ever run |
| Ship (`/ship`: version bump, PR) | `D-183` approval provenance (§5.14e8); `D-184` handoff-only commit-and-push authority (§5.14e9); B-114 push is transport only | PR template `.github/PULL_REQUEST_TEMPLATE/v1-mmf.md` (`D-245`) | Commits on the feature branch; the batch push at an authorized point | Range count and remote-tip equality at push | No version-bump mechanism located; PR opening not observed in this audit |
| Deploy (`/land-and-deploy` after merge) | Root AGENTS.md "Deployment is by git push through GitHub"; WORKFLOWS-SPEC §1 ("Vercel deploys from `main` on push"; no agent deploys) | — | GitHub → Vercel on `main` | Not assessed by this packet | Deployment not assessed; `main` lag is expected until Phase 3 (WORKFLOWS-SPEC §1) |
| QA (`/qa <preview-url>` on every deploy) | `R3` (Build Spec); accepted scenarios per packet; `D-259` Jev | NFR-04; acceptance criteria per feature | `bun test`, fixtures, CI steps (Inventory L63–L64), Jev | CI result per commit; Jev receipts | No preview-URL QA mechanism located; runtime behaviour evidence is per product increment |
| Security audit (`/cso` before public release) | `NFR-07` secret handling (Modular_PRD L771); `D-242` evidence contract | `AC-NF-04` (no service-role key in the client bundle) | AGENTS.md "never put secrets in the repository"; public-key-only client (`lib/supabase/client.ts`) | Bundle inspection for `AC-NF-04`: **not observed**; `settings-parse` checks parse only | No security-audit mechanism located; a rule or a check is not a completed audit |

**Discovery step for current availability (proposed; Lane C reviews its surface):** on each surface, record whether
the gstack commands are available (the host's skill or command list), **without installing or running them**. Stop
point: report only. A later mapping change that needs a tool, policy or command goes to F6 as a complete option.

---

## PKT-R3 — F5: how a later revision gets its own baseline

### Replaces revision 1's F5.4

> Each later baseline binds: its **predecessor** baseline and the **new revision**; a complete scoped inventory
> derived **at the new revision**; the identity (SHA-256) of every instrument and its configuration; the identities
> of the governing sources it reads; and any applicable instance or projection evidence.
>
> **Corpus.** The corpus is not fixed at 224. `F1-inventory-r2.mjs` already takes the revision as a parameter
> (**measured**: `node F1-inventory-r2.mjs <repo> <rev> <out>`). Added, removed and renamed paths come from
> `git diff --name-status -M <predecessor> <new>`; a rename keeps the row's history and gets a new path identity.
>
> **Instruments.** `F2b-measure.mjs` and `F2c-measure.mjs` hard-code `REV = 1640ff7` and a fixed F2a path list.
> Re-running them unchanged reads the old Git objects and **cannot** measure a later revision. A later baseline needs
> revision-parameterized versions (**proposed**; not built here) that derive slices by rule, not by a fixed list. The
> citation sets carry `frozenRevision`; a later baseline writes new citation sets bound to its own revision.
>
> **Reassessment triggers.** A row is reassessed when any of these changed since its accepted result: its blob; a
> cited source (a citation fails, or the cited file's blob differs); the governing decision or requirement; a
> dependency it relies on (for example `package.json` or `bun.lockb`); the instrument or its configuration; or the
> acceptance condition. An accepted result carries forward **only within its original proven scope**. An unassessed
> row carries forward as unassessed. Historical evidence is never overwritten.
>
> **Deployment is not assessed by this packet.** No deployed-instance claim is made for setup or product.

### Wording changes elsewhere in F5

- F5.1, "deployed instance (where one exists; none for setup today)" → "deployed instance (**not assessed by this
  packet**)".
- F5.3 S0-setup table: add a row "Deployed instance | Not assessed by this packet".
- F5.3: S0-setup remains **proposed** until an independent assessor accepts its evidence and its explicit retained
  scope. The 173 wholly unassessed rows, the 9 partial fragments and the F2a residuals stay three separate lists.

---

## PKT-R4 — F6: complete options, frozen scopes, receipt and publication

### F6.2 addition — semantic check against `D-434`

`D-434` will apply the `frag140` `fn_multi_lane_ai_governance` leaf with new value SHA-256 `c4283f75…`
(`C:/CoWork/outputs/lane-a-d433r-2026-10-11/leaves.json`, `a4abb1f8…`). That value keeps the phrase "the measured
rule-file refactor". R5–R7 say the refactor was applied by `D-337`. The leaf names the AIG-06 concern; it does not
say that the refactor is pending. **Assessment: no change of meaning; the leaf stays as `D-434` sets it.**
**Re-check at application:** the applying unit confirms that the leaf's live value hashes to `c4283f75…`. If it does
not, Lane A reassesses the leaf against R5–R7 before preparing, and Lane B reviews that reassessment.

### F6.3 replaced — options

**Frozen scopes.**

| Group | Repair IDs | Paths |
|---|---|---|
| **G-TC6** (coupled spec and fragment) | R1–R4, R20, R18–R19 | SPECS-VERIFICATION §4.1; `frag13`; WORKFLOWS-SPEC §2; `GEMINI.md` |
| **G-SKIP** | R13–R17 | WORKFLOWS-SPEC §3–§4; Inventory L69 |
| **G-CORE** (coupled spec and fragments) | R5–R12 | FN §4.6 and §5; Modular_PRD L883; SPECS-ML §5; `GEMINI.md` L13; `frag7`; `frag15` |
| **G-CONFIG** | R21–R22 | `.gitattributes` |
| **G-POINT** | R23–R25, R29 | Build Spec L531 and L660; Register §5.14by; graph-fragments README §4 |
| **G-MAP** (allocations) | R26–R28 | `scripts/checks/lane-boundary.mjs`; `scripts/fixtures/suites.mjs` |
| Other lanes (not Lane A edits) | P1 (Lane C), P2 (Lane B) | `.github/workflows/ci.yml`; `.env.example` |

All Lane A paths above are governed (`classifyChangedPaths`, `excludedOnly: false`), including `lane-boundary.mjs`
and `suites.mjs`.

| | **Option A (recommended)** | **Option C** | **Option E (allocations)** | **Option D** | **Option B** |
|---|---|---|---|---|---|
| Scope | G-TC6 + G-SKIP + G-CORE + G-CONFIG + G-POINT (R1–R25, R29) | Unit C1: G-TC6 + G-SKIP + G-CORE. Unit C2: G-CONFIG + G-POINT | G-MAP. The Judge decides: `middleware.ts` → B (yes/no); `.env.example` → B (yes/no); `.onlyaiapp` (a) allocate or (b) unmapped-by-reason | None applied | Fold into `D-434` |
| Retained (owner Lane A unless stated) | G-MAP → Option E; P1 → Lane C; P2 → Lane B | Same as A | — | Every repair: destination S0-setup "known differences"; return trigger: the next governed unit that touches the same file, or the Judge's request | — |
| Authority | A new Register act `D-NNN`; Lane A `Active` | Two acts | One act; may ride Option A's cycle if decided before A's act is recorded | None | Amend `D-434` |
| Prerequisites | (1) `D-434` issued and applied, its cycle 2 complete (published or stopped per its option); (2) Lane B accepts this packet; (3) Lane C outcomes for C5–C8 recorded, or recorded as unavailable; (4) `F3-oldvalues.mjs` at the final source matches all 26 bound values; (5) the `frag140` leaf re-check above | Same; C2 after C1 | Lane B review of the fixture design; for (b), the comment text | — | Reopen an accepted, frozen docket |
| Affected tiers (D-54) | Register ✅ `D-NNN` and R24; Build Spec ✅ `D-NNN` paragraph, R23, R25; Inventory ✅ `D-NNN` paragraph ("no file added or retired"), R17; Modular_PRD ✅ R8; FN ✅; SPECS-VERIFICATION ✅; SPECS-ML ✅; WORKFLOWS-SPEC ✅; `GEMINI.md` ✅; `.gitattributes` ✅; `frag7`, `frag13`, `frag15` ✅; graph-fragments README ✅. **Unaffected:** `AGENTS.md`, `CLAUDE.md`, Phase Closure, frozen sources, `lane-boundary.mjs`, `ci.yml`, application code. **Encyclopedia:** unaffected (no ledger entry depends on these sections) | Split as scoped | Register; Inventory paragraph; `lane-boundary.mjs`; `suites.mjs` | None | — |
| Pass evidence | All 26 old values match; `git check-attr merge -- GEMINI.md` = `text`, and a temporary non-rule `.md` path = `union`; full consistency check, with `docs-drift` the only failure inside the guarded pre-sync sequence (`D-428`); fixtures pass; Lane B byte **and** semantic receipt of the candidate, including the three node texts and SPECS §4.1 | Same, per unit | Fixtures: `middleware.ts` → B (if chosen), `next.config.ts` → A, `docs/handoff/x.md` unmapped | — | — |
| Refusal | Any old-value mismatch; the `frag140` leaf differs and its reassessment is not reviewed; any check failure other than `docs-drift` inside the sequence; a receipt from Lane A itself | Same | A fixture failure | — | — |
| Sync cost | **One** guarded cycle for the batch | **Two** guarded cycles | Zero extra if it rides A; else one | None | One |
| Receipt route | Named in the act **before** prepare: unit-scoped route A for this cycle only (Lane B's acceptance record and covering annotation, under a terminal-return exception scoped to this unit). No reuse of any earlier unit's exception | Same, per unit | Same as its carrier | — | — |
| Publication | The Judge selects inside the act: **A-cond** (publish after Lane B's receipt with unchanged bindings) or **A-res** (stop after the receipt; publication by a later decision) | Same choice per unit | Same as its carrier | — | — |
| Health and interval | After publication: separate health evidence (full check, parity) recorded in B-156. **No fetch or push** between prepare and publish | Same | Same | — | — |
| Stop point | A-cond: after the health record. A-res: after Lane B's receipt | After each unit | As its carrier | Now | — |
| Decision-ready? | **Yes**, after Lane B accepts this packet and C5–C8 are recorded | Yes, as A | Yes, as a separate choice | Yes | **No**: it reopens an accepted docket (`D-434` revision 2, accepted at B-136 `abc9218`). Not offered |

P1 and P2 stay proposals for their owning lanes. **An owning lane does not authorize its own execution:** each needs
its own bounded act and an `Active` lane.

### F6.1 addition — Lane C claim bindings (C5–C8)

| Claim | Exact claim | Source at `1640ff7` | Evidence a reviewer can open | What Lane C is asked to record | Limit |
|---|---|---|---|---|---|
| C5 | In a default `actions/checkout@v4` CI run, `terminal-return` reports SKIP, so four checks skip, not three | `terminal-return.mjs` L391–L402 (shallow branch); `ci.yml` L22 | The source lines; the F2b r2 rows | The `bun run check` output from an **existing** CI run at a named commit, showing the SKIP lines; or "host output not available" | Source reading is not a hosted-output observation. No new CI run is commissioned by this packet |
| C6 | The `ci.yml` comment L3–L5 names `ignoreDuringBuilds`, which `next.config.ts` no longer sets | `ci.yml` L3–L7; `next.config.ts` L8–L10 | Bound old value `P1` in `F3-oldvalues-1640ff7.json` | Agree or disagree with P1's proposed wording | P1 is Lane C's decision and Lane C's unit |
| C7 | `GEMINI.md` L13, L31–L32 and L34–L35 are stale | Bound old values `R10`, `R18-R19` | Same file | Agree or disagree with R10, R18, R19 | Lane A applies under Option A; Lane C reviews because the file holds its rules |
| C8 | `GEMINI.md` falls under `merge=union` | `.gitattributes` L27–L38 (bound `R21-R22`) | `git check-attr merge -- GEMINI.md` (work tree, read-only) | Agree or disagree with R21 | Configuration risk only; no bad merge observed |

If a Lane C outcome is unavailable when Option A is offered, the act records it as unavailable and keeps the claim
open; it does not treat silence as agreement.
