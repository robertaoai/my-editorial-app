# BCP-1 current file map r2 — setup and SM05 build-control preparation (answers Lane B `9820c61` and `38b8ef2`), 2026-10-15

Status: **planning record for Lane B review.** r1 (`c6b3fb65…`) is kept as history. This map creates no file, issues no work
order, installs no tool and claims no readiness. A file's existence earns no readiness credit; a specified pass condition is not
an observed pass. Roles: Lane B raises and reviews; Lane A answers; the Judge (Chief Editor) decides. Path bases: `<REPO>` =
`C:/robertaoai/my-editorial-app` (paths without a base are repository-relative); `<UNIT>` = `C:/CoWork/outputs/lane-a-tr1-setup-2026-10-14`;
`<USER>` = `C:/Users/rober_24syk4j`. Revisions are the last commit touching each file at `9820c61`.

Actions: **Reuse**, **Change** (later governed edit), **Draft** (Lane A writes), **Lane B / Lane C** (that lane applies),
**Exclude**, **Scheduled** (built at a named trigger), **Pending** (blocked on a named decision). Tool status: **observed**,
**proposed**, **not adopted**, **unbound**.

Chain every row serves: frozen PRD/Charter/schema → Register decision → `Modular_PRD` group → FN behaviour → SPECS (only where
behaviour cannot decide) → issued work order and K-child → code/migration/test → measured evidence → independent disposition.
Tool output enters as a proposal or evidence; it never amends an upstream source silently.

## A. Production map (parent concerns first)

| ID | Requirement / source @ rev | Action | Exact path / section | Method | Depends on → first consumer | Applying owner → reviewer | Proof / stop | State | Next trigger |
|---|---|---|---|---|---|---|---|---|---|
| **1 Intent and authority (C1)** |||||||||
| F1 | AGENTS.md freeze rule; frozen PRD @ `53ace36` | Reuse | `docs/PRD.md` (SM05 anchors) | cite | — → work order | Lane A → Lane B | anchors resolve; never edited | exists | work-order drafting |
| F2 | AGENTS.md freeze rule; Charter @ `00d21cd` | Reuse | `docs/source/project-charter-v1.md` | cite | — → work order | Lane A → Lane B | never edited | exists | work-order drafting |
| F3 | `Modular_PRD` @ `b77d186` | Reuse | `docs/Modular_PRD.md`: `US-15`, `FR-15`, `AC-23`–`AC-26`, `CR-09`, partial `CR-19`, GATES group | cite | — → P13, P17 | Lane A → Lane B | anchors resolve | exists | SPECS drafting |
| F4 | FN-GATES @ `e905cf8` | Reuse; §9 Change later | `docs/fn-specs/FN-GATES-01-05.md` §3.0, §3.0a, §4.3, §4.5, §4.6, §9 | cite; §9 row by governed act (r10 Part 5.5) | — → P13 | Lane A → Lane B | §9 count sentence stays true | exists | P13 acceptance |
| F5 | Register `058518a`; Build Spec `058518a`; Inventory `2d7c9bc` | Reuse; Change at D-437 | `docs/v1/V1-DECISION-REGISTER.md`, `docs/v1/V1-BUILD-SPEC.md`, `docs/v1/V1-ARTIFACT-INVENTORY.md` | D-54 propagation | — → every act | Lane A → Lane B | all applicable checks pass (record command, revision, exit code, observed total); guarded sync | exists | next governed batch (D-437) |
| F6 | SM05 work packet @ `29bce67` | Reuse; refs Change later | `docs/v1/work-packets/V1/V1-SM05.md` DoR → DoD map | cite; refs by governed act | — → P17 | Lane A → Lane B | DoD rows resolve | exists | work-order issue |
| **2 Consumer entry points and controls** |||||||||
| F7 | `D-337` | Reuse | `AGENTS.md` @ `710b33c` (shared core), `CLAUDE.md` @ `042dfda`, `GEMINI.md` @ `b77d186` | one intent chain; no new intent file | — → every session | Lane A → Lane B | rule-budget check | exists | — |
| F8 | `D-156` | Reuse | `docs/v1/V1-PHASE-CLOSURE.md` §5 @ `d406145` | Judge act only | — → lane activation | Judge decides; Lane A records → Lane B | one Active lane | exists | SM05 activation act |
| F9a | `D-54`; Inventory row `D-80`, `D-94` | Reuse | `.claude/skills/sync-docs/SKILL.md` @ `91f949f` | procedure | — → every governed change | Lane A → Lane B | fresh run per use | exists | each governed batch |
| F9b | `C-14`, `D-70` (Inventory row) | Reuse | `scripts/check-consistency.mjs` @ `fd89ddc` | check runner | — → every commit | Lane A → Lane B | all applicable checks pass; record command, revision, exit code, observed total | exists | each commit |
| F9c | `D-324`, `D-337` | Reuse | `scripts/checks/rule-budget.mjs` @ `fd89ddc` | check | — → F7 | Lane A → Lane B | same | exists | each commit |
| F9d | `D-425`, `D-426` | Reuse | `scripts/graphify/guarded-rebuild.mjs` @ `d4d1181` | guarded route | — → T1 | Lane A → Lane B | guarded publication + health record | exists | each governed batch |
| F9e | `D-88`, `D-105`, `G79` | Reuse; **activation Pending** | `.githooks/commit-msg`, `scripts/lane-gate.mjs`; activation = `core.hooksPath` = `.githooks` (`bun run hooks:install`) | commit-msg gate | — → every commit | Lane A → Lane B | **observed 2026-10-15: `git config --get core.hooksPath` exit 1, `.git/hooks/commit-msg` absent** — files present, gate not effective by default. Per-commit `git -c core.hooksPath=.githooks commit` runs it | present, not activated | Lane A proposes the persistent setting; applied only with approval |
| **3 Build substrate** |||||||||
| F10 | `D-86` | Reuse | `package.json` @ `49c54d9`, `bun.lockb` @ `9e015b9`, `next.config.ts` @ `91bcc83`, `tsconfig.json` @ `62c8d8c`, `eslint.config.mjs` @ `d09563d` | Lane A only | — → Lane B construction | Lane A → Lane B | G108b (eslint-config-next pairing) stays a known gap | exists | work order |
| F11a | S0, `§10` config-vs-fixed rule, `D-91` (Inventory row) | Reuse | `docs/CONFIG_LOG.md` @ `e905cf8` | cite | — → F11b | Lane A → Lane B | config-coupling check | exists | work order |
| F11b | config code | Reuse | `lib/config/build-config.ts`, `lib/config/flags.ts` @ `ea84281` | Lane B surface | F11a → construction | Lane B → Lane A | config-coupling check | exists | work order |
| F12 | AGENTS.md freeze rule; `D-252` | Reuse | `supabase/migrations/0001_init.sql` @ `53ace36` (frozen), `0002_s1_editorial_schema.sql` @ `1cf6479` (candidate) | never edit `0001` | — → K1 | Lane B → Lane A | local PostgreSQL replay of `0002` (`D-383`) | exists | K1 |
| **4a TR-1 / I1 inputs** |||||||||
| F13 | r10 unit, Lane B `05ac2ba` | Reuse | `C:/CoWork/outputs/lane-a-sm05-selection-draft-2026-10-13/SM05-SELECTION-DRAFT-r10.md` `b6e523f0…`; `C:/CoWork/outputs/lane-a-r6d-2026-10-14/EXEC-MANIFEST-r10.json` `91ca62bb…`; `verify-exec-manifest-r9.mjs` `bd4c8ea6…` | accepted | — → I1 | Lane A → Lane B | hashes re-checked at use | exists | G2 |
| F14 | r11 design; Lane B `ef7fb9f`, `38b8ef2` | Draft (external) | `C:/CoWork/outputs/lane-a-r11-2026-10-15/R11-CONTRACT-PACKET-r6.md` | external draft, not a governed file | F13 → P1–P12 | Lane A → Lane B | source correction supported by Lane B `38b8ef2`; final binding recorded in B-136 | supported; recording now | Lane B review of the recorded binding |
| F15 | attempt-1 accepted tools | Reuse (history) | `<UNIT>/state/UNIT-ITEMS-MAP.json` `1ca9937f…`; `<UNIT>/tools/capture-state-r4.mjs` `4150f5f2…`, `compare-state-r6.mjs` `882bb2b4…`, `unit-receipt-r2.mjs` `bda05626…`; `<UNIT>/state/HANDOVER-E-to-S-T-r7.md` `c0313fb8…` | accepted | — → G0 | Lane A → Lane B | hashes | exists | G0 |
| **4b I1 planned outputs (names proposed; none created)** |||||||||
| P1 | r11 §4 | Draft | `<UNIT>/state/G0-MAP.json` | script from §4 rows | F15 → G0 | Lane A → Lane B | valid map / wrong phase, stale map | planned | Lane B accepts r6 |
| P2 | r11 §7, §3.1 | Draft | `<UNIT>/state/G4-MAP.json` (incl. sentinel and `ponytail-modes` effects) | script | P1 → G4 | Lane A → Lane B | same | planned | same |
| P3 | r11 §5 | Draft | `<UNIT>/state/EXEC-TARGETS-DC.json` | script | F13 → G2 | Lane A → Lane B | equal / changed, absent, extra | planned | same |
| P4 | r11 §3, §7 | Draft | `<UNIT>/tools/capture-state-r5.mjs` | Node, no shell | F15 → G0–G4 | Lane A → Lane B | credential file never read | planned | same |
| P5 | r11 §3, §7 | Draft | `<UNIT>/tools/compare-state-r8.mjs` | Node | P4 → G0–G4 | Lane A → Lane B | post-deletion close / pre-deletion P2' | planned | same |
| P6 | r11 §3 | Draft | `<UNIT>/tools/g1-probe.mjs` (value-only) | Node | P4 → G1 | Lane A → Lane B | `D_C` value / unset, other | planned | same |
| P7 | r11 §3.1 | Draft | `<UNIT>/tools/sentinel-check.mjs` (S1, S2 read-back, S4–S5) | Node | P2 → G3 | Lane A → Lane B | r11 §8 sentinel controls | planned | same |
| P8 | r11 §5 | Draft | `<UNIT>/tools/tp0-r11-check.mjs` | Node | P7 → G3 | Lane A → Lane B | env + 8 paths / unset, wrong root | planned | same |
| P9 | r11 §7 step 4 | Draft | `<UNIT>/tools/deletion-target-check.mjs` | Node | P2 → G4 | Lane A → Lane B | link, junction, outside `<UNIT>` refused | planned | same |
| P10 | r11 §7 | Draft | `<UNIT>/tools/transcript-scan.mjs` | Node | — → G4 | Lane A → Lane B | one fixture per class; value never printed | planned | same |
| P11 | r11 §8 "Hand-over r8" | Draft | `<UNIT>/state/HANDOVER-E-to-S-T-r8.md` (continues r1–r7) | prose | P1–P10 → person, O | Lane A → Lane B | session order | planned | same |
| P12a | r11 §8 | Draft | `C:/CoWork/outputs/lane-a-r11-candidates-<date>/controls-r11.mjs` (control source) | Node | P1–P10 → P12b | Lane A → Lane B | each control's positive and refusal case | planned | same |
| P12b | r11 §8 | Draft | same folder `controls-r11-run<N>.json` (one file per run; failed runs kept) | run output | P12a → Lane B review | Lane A → Lane B | bound to the P12a hash it ran | planned | same |
| **4c Config before G0** |||||||||
| F16 | r10 exclusion "no Codex registration" | Pending | `.codex/config.toml` (untracked, `fd3c37f5…`) | none by Lane A | owner statement → G0 | owner → Judge | bounded act | present, unexplained | owner statement |
| **5 C2 physical design** |||||||||
| P13 | r10 Part 5.1–5.2; FN-GATES §4.5, §9; `D-30`, `D-31` | Draft (outline) + Lane B proposes the physical contract | `docs/specs/SPECS-EDITORIAL-METADATA.md` (absent) | `spec-writing` from the GATES group; Lane B proposes through B-136; Lane A records the accepted text | F3, F4 → K1 | Lane A records → Lane B → Judge | C-ID … C-DUP, each with a failing-first test (`D-383`) | pending Lane B physical proposal | Lane B proposal |
| P14 | K1 | Lane B | `supabase/migrations/<next free number>_*.sql` (expected `0003_*`) | migration | P13 → K1 tests | Lane B → Lane A | local replay; never edit `0001` | scheduled | issued work order |
| **6 C3–C8 work-order content** |||||||||
| P15 | C3: r5 Part 4 C3 table (`c834e482…`, carried unchanged by r10) | Draft | P17 section "Security and operation controls" | carry the table | F3, F6 → P17 | Lane A → Lane B | each control maps to a DoD row | drafted (r5) | P17 drafting |
| P16 | C4: r5 Part 4 C4 | Draft | P17 sentence "SM05 has no AI layer" | carry | F3 → P17 | Lane A → Lane B | no AI dependency in the child list | drafted (r5) | same |
| P17 | C5: `D-242`; r10 Part 5.4 K1–K6 | Draft | **proposed location:** a new section "SM05 State-2 work order (`D-242`)" in `docs/LANE-B-WORK-ORDER.md` @ `e2f26d2` | prose from K1–K6 | P13, P15, P16 → Lane B | Lane A drafts → Lane B → Judge issues | issued by the Judge's act | location proposed; content pending P13 | Lane B review of the location |
| P18 | C6: `SPECS-VERIFICATION-APPARATUS` §1–§7 @ `b77d186`; H3 | Reuse + bind | P17 section "Verification binding" (one H3 row per K-child) | carry H3 | P17 → K1–K6 | Lane A → Lane B | each child bound | pending P17 | same |
| P19 | `SM05-IN1`–`IN4` (r10 Part 5.3) | Lane B | four fixture artifacts and four failing-first records; paths named by Lane B in P17 | per child | P17 → K2 | Lane B → Lane A | four distinct artifacts | pending | P17 |
| P20 | C7: `D-252`, `D-381`, `D-383` | Draft | P17 sentence "SM05 is local-only" | carry | — → P17 | Lane A → Lane B | stated | drafted (r3 C7) | same |
| P21 | C8: `D-242`; TR-1 | Lane B proposes; Lane A records | P17 per-child method rationale | Lane B proposal | P17 → construction | Lane A records → Lane B | rationale per child | pending | P17 |
| **7 Later acceptance and CI** |||||||||
| P22 | `D-259`; Inventory | Scheduled | `scripts/acceptance/` (absent by schedule) | Lane A after Lane B handover | construction → phase P14b | Lane A → Lane B | runs against the built slice | scheduled | Lane B handover |
| F17a | `D-92`, `D-84` (Inventory row) | Reuse | `.github/WORKFLOWS-SPEC.md` @ `b77d186` | cite | — → F17b | Lane A → Lane C | — | exists | — |
| F17b | `D-75` | Lane C | `.github/workflows/ci.yml` @ `d6d406a` | no change pre-build | F17a → CI | Lane C → Lane A | Lane C evidence | exists | Lane C, only with evidence |

Excluded: the historical `docs/ARCHITECTURE.md`, `DATA_MODEL.md`, `AGENTIC_LAYER.md`, `INTELLIGENCE_LAYER.md`, `SECURITY.md`,
`TASKS.md`, `TEST_PLAN.md` (`D5`; mapped to C1–C8, not reproduced); the broader `SPECS-GATES-01-05.md` proposal (replaced by P13);
the Gem Architect guide's "three intent documents" (one chain, F7).

## B. Tool crosswalk (joins to the rows above)

| ID | Tool / status | Source or installation (observed) | Project control and output | Consumer, proof, preservation |
|---|---|---|---|---|
| T1 | **Graphify — observed, adopted route** | launcher `<USER>/AppData/Roaming/npm/graphify.ps1`; guidance `<USER>/.gemini/config/skills/graphify/SKILL.md` | `.agents/workflows/graphify.md`, F9a, F9d; tracked inputs `docs/graph-fragments/`; derived local state `.graphify/graph.json`, `.graphify/branch.json` | Lane A owns the guarded route; Lane B reviews receipts. Graph = navigation aid, not intent. Preserve fragments (git) and publication/health records |
| T2 | **Ripwire — not adopted (`D-433`)** | retained evidence `C:/CoWork/outputs/lane-a-u03-trial-2026-10-10/evidence/03-results.json` | `docs/v1/work-packets/SETUP-SPIKE-000/SV2-U03-code-navigation-evaluation.md`; Register `D-433` | No installation action; existing code navigation stays. Keep the trial and cleanup evidence |
| T3 | **gstack — proposed advisory stage review; unbound** | no current pin, source or install path bound | proposal: `C:/CoWork/outputs/lane-a-sm05-selection-draft-2026-10-13/SM05-SELECTION-DRAFT-r3.md` Part G; B-136 EXT / `e43a25e`. Proposed paths (unbound until a revision is named): source `C:/CoWork/reference/gstack-<rev>/`; report `C:/CoWork/outputs/lane-a-gstack-review-<date>/report.md` | Report: criterion → project anchor → finding → remedy/owner → proof/limit; findings return through this hierarchy. Not retired by omission |
| T4 | **ECC — required (TR-1); readiness pending** | retained bundle `<UNIT>/acquire/ecc-tr1/`; attempt-1 host copy `<USER>/.claude/skills/ecc-tr1/` (to be removed at G0 C1); wrapper `C:/CoWork/outputs/lane-a-r6d-2026-10-14/recipe/ecc-tr1/.claude-plugin/plugin.json` | planned target `<UNIT>/claude-config/skills/ecc-tr1/` (absent, as expected before G2); joins F13, F15, P3 | Preserve the pinned bundle; acquired source, host copy and target are distinct; per-child proof decides use |
| T5 | **GitHub Spec Kit (`github/spec-kit`) — not adopted; unbound** | none in the project (no `.specify/`, no root `specs/`, no adoption record) | upstream conventions (`.specify/`, `specs/<feature>/spec.md`, `plan.md`, `tasks.md`) are **not** approved destinations here | Distinct from `spec-writing` (P13 method). Any proposal first maps each upstream artifact to this hierarchy at a named revision, with its own impact and authority |

Ponytail and REA are required TR-1 tools; their rows are F13, F15 and P1–P12 (I1).

## C. Preservation contract (every row; replaces "immune to build wipes")

| Rows | Protected projection | Permitted writer / effect | Before / after check | Evidence retention | Recovery owner |
|---|---|---|---|---|---|
| F1, F2, F12 (`0001`) | exact bytes | none (AGENTS.md freeze rule) | `git hash-object <file>` equals the pinned blob (byte equality; observed equal by Lane B at `9820c61` and by Lane A at `38b8ef2`, 2026-10-15); the source-sweep check proves only existence and last-touch commit | git history | Lane A (report; never edit) |
| F3–F6 | governed text | Lane A under a Judge act, with D-54 and a guarded sync | all applicable checks pass (command, revision, exit, observed total); `docs-drift` | git + check logs | Lane A |
| F7, F9a–F9d | rule-file text; control-script bytes | Lane A under an act | rule-budget; check runner; tests at use | git | Lane A |
| F9e | hook files; `core.hooksPath` setting | files: Lane A; setting: only by an approved setup step | hook file hashes; `git config --get core.hooksPath` result recorded | git; command output | Lane A |
| F8 | lane table | Judge act; Lane A records | lane-state check | git | Lane A |
| F10, F11a, F17a | build config; docs | Lane A (`D-86`) | check runner; tests at use | git | Lane A |
| F11b, F12 (`0002`), P14, P19 | Lane B surfaces | Lane B under the issued work order | Lane B tests; Lane A review | git | Lane B |
| F17b | workflow file | Lane C | Lane C evidence | git | Lane C |
| F13, F15 | listed hashes | none | hash re-check at use | external folders | Lane A |
| F14 | external draft bytes | Lane A (new revision, old kept) | hash recorded in B-136 | `C:/CoWork/outputs/lane-a-r11-2026-10-15/` | Lane A |
| P1–P11 | planned outputs | Lane A per the act; append-only evidence | unit receipt / its successor; hash at use | `<UNIT>` | Lane A |
| P12a, P12b | control source; each run result | Lane A; runs append, failures kept | P12b bound to the P12a hash | candidates folder | Lane A |
| P13, P15–P18, P20, P21 (when governed) | governed text (SPECS; work-order sections) | Lane A records under a Judge act; Lane B proposes P13 and P21 content | all applicable checks; `docs-drift`; guarded sync | git | Lane A |
| P22 | acceptance harness | Lane A after Lane B handover | its own tests | git | Lane A |
| T1 derived state | `.graphify/` | guarded route only | guard receipts; health | local + guard backups | Lane A |
| T2–T5 external | retained evidence or proposals | owning lane | input hashes | output folders | owning lane |
| Real `~/.claude`, `~/.claude.json` | enumerated protected projection (capture r5 coverage) | only the G0 ledger rows; in attempt 2, nothing | comparator r8 per link | captures in `<UNIT>/state` | Lane A under the bounded act |
| F16 | file bytes | none until the owner's bounded disposition | hash `fd3c37f5…` re-check | B-136 | its owner |

No row claims protection from every future writer; each names its writer, check and owner. Credentials are excluded before reads.

## D. Changes from r1

P11 renamed to match r11 §8 "Hand-over r8"; P22 says "phase P14b"; F9 split into F9a–F9d with their own anchors; F9e added (commit
hook present, not activated); F11 and F17 split by applying lane; P13/P21 owner wording; P12 split into P12a/P12b; P17 location
proposed; fixed "19/19" replaced by "all applicable checks pass" with the observed total recorded; frozen proof = blob comparison;
F14 separated as an external draft; preservation rows for every ID; tool crosswalk T1–T5 added.
