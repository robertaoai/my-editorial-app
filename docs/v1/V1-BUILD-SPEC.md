# V1 Build Specification

**Date:** 2026-08-18
**Status:** **Operative.** Sequenced plan for v1. Planning only — **no build is authorized by this document.**
**Companion:** `V1-DECISION-REGISTER.md` holds the approvals and the twelve conditions.
**Supersedes:** the thirteen `docs/journal/2026-08-18-*.md` analysis files, per that register's §6. The governing set is unaffected.

---

## 1. What v1 is

`CR-19`, the customer's own success scenario, unchanged:

> Chief Editor pastes a URL → article enters pipeline → passes all five gates with logged transitions → Chief Journalist approves → article publishes to WordPress (or is marked LinkedIn-ready). Board shows 5+ articles/week, 2+ published, every transition visible, **zero bypasses**.

**v1 = sprints S0 through S4.** S5 (Line 3, degraded mode) and S6 (auth lockdown) are beyond v1 and gated on `OD1`–`OD3`.

## 2. Sequence

```
T0 ──▶ T1 ──▶ S0 ──▶ S1 ──▶ S2 ──▶ S3 ──▶ S4
 │                    ▲
 └──▶ T3 (POC lane)   └── T2 decisions must ALL be settled before this migration
      runs parallel, no build dependency
```

**Build-lane phase sequence (`D-75`, binding).** The sprint sequence above is *what* gets built.
This is *who* builds it, and in what order:

```
Phase 1 — Lane A (Claude Code)  ──▶  Phase 2 — Lane B (Codex)  ──▶  Phase 3 — Lane C (Antigravity)
ORCHESTRATION                        THE APPLICATION               .github/workflows/ ONLY
docs/, scripts/, .claude/, .agents/, app/, lib/, components/,
.github/ except workflows/,          supabase/, __tests__/
rule files, build config
     └── handoff, not a commit ────────────┴── handoff, not a commit ────────────┘
```

**Exactly one lane is `Active` at a time** — one desktop app, unchanged — and **while it runs the
other lanes are `Blocked`** unless one is nominated `Eligible` as its successor (`D-156`,
superseding `D-108` — `Eligible` is the selection step, at most one, and Lane A holds `Active`
by default). *This paragraph read "Phase 1 is current" and
presented a strict `A → B → C` gate — superseded by `D-100`'s continuous cycle, given precise
states by `D-101`, corrected to the exclusive lock by `D-108`, and corrected again by `D-156` —
`D-108` had made `Eligible` a post-release state for every lane at once, removing the nomination
step (`G110`). It also **named which lanes held
which state while claiming not to restate live state** — the naming is removed (`D-152`, raised in
`B-033`'s verification review).* **The live state is `V1-PHASE-CLOSURE.md` §5 and nowhere else**;
this document does not restate it.
Work outside the active lane is **specified, never applied** (`D-56`). **Lane A writes every dependency before Lane C builds a workflow against it (`D-84`)** — the original map put `scripts/` and `.gitattributes` in Lane C and was corrected. **The rule is unenforced (`D-82`)** — no `CODEOWNERS`, no path rule, no pre-commit hook, and CI runs after a commit lands; a crossing is stopped only by the agent choosing to stop.
Deployment is Lane C and GitHub — **`main` lagging this branch is expected until Phase 3 and is not
a defect.** The development lane model is **not** the product Three Lines (`OD1`–`OD3`) and **not**
`OD4`; `D-75` records why the vocabularies are kept apart.

## 3. Pre-build

### T0 — documentation, no decision required *(6 items)*

Executable now. Exact procedure, target text, and verification are in `docs/journal/2026-08-18-t0-execution-runbook.md`, which is **retained as the working procedure**.

`G4` `CR-15` scope note · `G8` exclusivity window is POC-only · `G14` `NG-02` v1 annotation · Step 1 register `PSK-10` · Step 2 report immutability rule · Step 3 assurance-gap disclosure.

**Output:** 4 files edited, `Modular_PRD` → v1.6, traceability map → v1.3, one commit.

### T1 — Chief Editor decisions before S0 *(23 items)*

> **T1's first deliverable is its own runbook (`D-21`/`G31`).** T0 has six items and a full procedure with exact text, version discipline, and verification. T1 carries twenty, touches governed documents, and touches the two files every agent reads first — with no procedure at all. Produce the runbook before executing the rest.

**Four items land in a single edit to `CLAUDE.md` and `AGENTS.md`** — repoint off the stale plan pack (`A7`), cover `AGENTS.md` (`G5`), name `docs/v1/` as operative (`D-15`), and state the output contract (`D-20`). One edit, four payloads.

Additional T1 items beyond the table below: `D-15` `docs/v1/` pointer · `D-16` EMS audit citation · `D-19` artifact inventory into each sprint DoD · `D-20` output contract · `D-21` T1 runbook.

| Group | Items | Gates |
|---|---|---|
| **No dependency, start now** | `R3` test runner + CI · `G5`/`QE` extend `A7` to `AGENTS.md` · `Q0` record `A2` ratification · `R2` close `D4` | Every later DoD |
| **Gate later sprints** | `Q2` Line 3 executor · `Q3` publish path · `Q4` OD2 trip-wire scope · `Q5` retry scheduler · `Q6` build gates · `Q12` Three Lines re-citation + `SEC-01` re-derivation | S2, S4, S5 |
| **Governance placement** | `QD` revenue rule home · `QC` domain assignment · `Q8`/`R5` route `FB-01`–`08` · `R4` propagate `PSK-01`–`10` | Scope disclosure |
| **Wording fixes** | `G23` `FR-13` bypasses deliberation not publication · `G24` mirror boundary is own channels only | Retraction correctness |

> `R3` is the precondition for every sprint having a verdict. **Installed 2026-08-21 (`D-70`)** — runner, `__tests__/` and CI all exist and CI is green on a real run. `next.config.ts` still disables type and lint gates at build (`TC6`), which is why CI runs them as **separate** steps; re-enabling the build gates is `Q6`, still open.
>
> **`C-14` travels with this item (`D-58`).** `G11`'s detection half — the shared-core hash, the `D-54` tier sweep, the §5.1 duplicate scan, and `missing.js` — is verification apparatus and waits on the same guardrail. **Precedence without detection is inert:** git here has one identity and zero merges, so a conflicting edit is a silent overwrite that nothing announces.

**Specified 2026-08-20 — `D-56`, `docs/specs/SPECS-VERIFICATION-APPARATUS.md`.** Runner, layout, CI steps and DoD are settled. *(Superseded 2026-08-21 by `D-70` — **all of it is now installed**; this sentence read "nothing is installed" until `D-71` corrected it.)* Two rules carry forward: CI must run **typecheck and lint as explicit steps**, because `TC6`'s flags make a `next build`-only job green on broken types; and `R3` is reported *"written, locally unverified"* until a real CI run — bun is not installed locally. **`G62`b decided (`D-66`).** Lint migrates to the **ESLint CLI** with a flat config extending `next/core-web-vitals`; `package.json`'s `lint` script repoints from `next lint` to `eslint .`. **Measured at 0 errors and 0 warnings across 21 files**, so Stage A carries **no lint remediation** — only the config file. Dropping lint was never available: `AC-NF-03` requires it to execute and pass.

**`G62`a closed (`D-67`).** `tsc --noEmit` **exits 0**, from exit 2. The ten implicit-`any` errors were **two overload-resolution causes**, not ten defects: `createServerClient` declares two cookie-API overloads and TypeScript will not contextually type an inline object literal across them. Fixed with `satisfies CookieMethodsServer` — **four lines across two files, no dependency, no runtime change.** Verified by a negative test rather than only by a green run.

**Stages A, B and C are installed — 2026-08-21 (`D-70`), executing the sequence `D-65` set out.** `eslint.config.mjs` created and the `lint` script repointed to `eslint .` (21 files, 0 findings); `R3` installed — `__tests__/smoke.test.ts`, `bun test`, and `.github/workflows/ci.yml` running typecheck, lint and test as separate steps; `C-14`'s detection checks installed at `scripts/check-consistency.mjs` and wired into CI. **Extended since** — `G66` a settings-cascade JSON parse check, `G65` a bidirectional decision-status cross-reference between the register and `Modular_PRD` §10, `D-73` a docs-drift check via `graphify` (`D-72`/`D-73`); `G69` a lane-boundary check and `G70` a source-side sweep (`D-83`/`D-87`); `D-90` a handoff-response check, extended to Lane C by `D-92`. **The running total is not recorded here** (`G75`, `D-92`) — this sentence carried `"nine"` and `"a local 8/8"` **simultaneously**, which is `G55`/`G56`/`G58`'s drift mechanism inside a single sentence. `bun run check` prints the total. **Three checks skip in CI** — `graph-coverage` and `docs-drift` read gitignored `.graphify/`, `source-sweep` needs full history — so a CI total below the local one is correct, not a regression. **CI is green on a real run.** **Stage D is not unblocked** (`D-79`): `0002` remains blocked on `Q11`'s deferred shape via `G64`, which must resolve before the `0002` draft is written (`G27`), and on the open S1 window. `Q10` is closed and contributes a tenancy column — nothing more.

> **Corrected 2026-08-30 (`D-161`, closing `B-061`) — this paragraph is 2026-08-21 history, not
> current state.** `Q11`'s shape and name are both decided (`D-97`, `D-111` — `line_separation_status`);
> `G64` closed (`D-112`); the S1 window closed with `0002`'s authorization unconditional (`D-114`).
> `0002_s1_editorial_schema.sql` is written, applied, and `C-33`'s PostgreSQL trigger test passes.
> **Stage D is unblocked on the S1 shape question and remains blocked only on `Q12`/`Q1` for S2.**

*Superseded state, retained for the record:* `bun run lint` formerly **exited 1** — `next lint` is deprecated and **interactive**, and **an interactive prompt in CI hangs rather than fails**. *"CI green on the current commit"* is blocked solely on that file.

**`G59` closed 2026-08-21** (`D-64`) — `bun.lockb` is committed and `--frozen-lockfile` exits 0, so `R3` DoD **D-6** is satisfied and CI will judge the commit rather than the day. **The other five DoD conditions remain open.**

## 4. Build

### S0 — Reconciliation and config spine *(no feature code)*

**`X`-series sprint mapping (`D-63`, closes `G61`).** The eight divergences are indexed in `V1-DECISION-REGISTER.md` §5.1 and land as: **`X8` → S0** (Stripe scaffolding versus *"no monetization features"*) · **`X3`, `X4`, `X5` → S1**, all in `0002` · **`X7` → mitigated S2, closes S6.** `X1` and `X2` need no build work; `X6` is superseded by `D4`, which is not yet closable.

**Route constants land here (`D-59`, closes `G10`/`QC`).** `EDITORIAL_ROUTE` = `/editorial`, `POC_ROUTE` = `/request-brief`, `DOMAIN_APEX` = **`UNSET`** — no domain is recorded in the corpus and none is invented. **`C-15` (T3)** promotes both lanes to distinct origins before POC holds real client data; the route names are chosen so that promotion is mechanical.

Config registry with a `PROVISIONAL` marker on every OD-derived value · feature flags · `DECISION_LOG.md` and `CONFIG_LOG.md` · remove Stripe scaffolding (`X8`, `NG-03`) · **verification apparatus** · **the `0002` hold location, not the draft** (corrected `D-95`; see below).

**The `0002` draft is NOT part of S0 — corrected 2026-08-22 (`D-95`, raised as `B-009`).** The
sentence above still listed *"draft migration `0002` without applying it"* among S0's contents
while §5.1's artifact row said the opposite. **S0 creates only the hold location**
(`docs/v1/drafts/`); **no `0002` draft exists before `Q11` and the whole S1 decision window
settle**, and moving the approved draft into the apply set **is** the S1 authorization act.
**`AP-01`'s migration carries editorial audit fields only — never POC commerce fields.**

> **✅ UNCONDITIONAL 2026-08-25 (`D-114`). `C-30` is closed and the S1 window is genuinely closed.**
> `D-112` had recorded it closed while **items 4 and 5 had never been put to the Judge** (`D-113`).
> Both are now disposed: **item 4 ruled in full**, and **item 5's classification ruled with its
> floor deferred to a named owner.** One sub-item, **5a**, is carried as `C-31` and **does not
> block** — `articles` is mutable and carries its own state, so its retention class is derivable at
> any later date, and **no append-only table in `0002` has status-varying retention.**
>
> **How the earlier failure happened, because it will otherwise recur:** the register's §5.15 Stage
> 4 window table is keyed by **gap** and this table is keyed by **numbered item**, and **neither
> cited the other**. `GA2` is a gap that §5.1 labels *"S1 window item 4"* and it was never a row in
> the gap-keyed table; `C-11` and `C-12` are conditions and could not be rows there at all. Both
> lists were internally consistent and disagreed about membership. `D-113` binds them item-to-gap.

> **AUTHORIZED 2026-08-25 (`D-112`), unconditional since `D-114`.** `D-17`'s hold is
> released. `0002_*.sql` may be created in `supabase/migrations/`;
> **`0001_init.sql`
> remains frozen and is never edited.** The typed schema contract is `D-112` — `Q11` closed as
> `line_separation_status` (`D-111`), the risk-tier domain closed (`D-112`, `C-29`), the report
> record and its template-applicability anchor closed (`D-111`), the notice discriminator and
> storage boundary ratified (`D-110`), the backfill map `D-55` and `ON DELETE RESTRICT` `D-07`.
>
> **Lane A does not write it.** `supabase/` is Lane B's surface; Lane A's obligation under
> `B-029` was the contract, and that obligation is discharged. **Authorization removes the block —
> it does not schedule S2–S4 and does not make `0002` correct.** `B-031` §8's gate still governs
> when Lane B takes the second turn.

**Phase boundaries govern this sequence — `D-93`, `D-94`, `D-95`.** `docs/v1/V1-PHASE-CLOSURE.md`
holds the phase-closure contract (§1), the Phase 1 artifact manifest (§5A) and the phase-start
rule (§5B). **A sprint's Definition of Done does not close a phase, and a phase boundary does not
close a sprint** — the two are different scopes, and `D-94` wrongly called this document
unaffected on that basis (`B-006` item 3). **The link is the propagation**: sequence lives here,
so a rule about when a lane may begin belongs in the reader's line of sight.

**S0 is a single-lane sprint as of `D-91`.** Its deliverable list previously mixed Lane A files (`docs/DECISION_LOG.md`, `docs/CONFIG_LOG.md`) with Lane B files in one sprint, so Lane B would have crossed a lane boundary on its first day. **Lane A has written both logs ahead of the sprint** — the `D-86` provisioning principle applied to governance content, not just to dependencies. Lane B implements `CONFIG_LOG.md`'s rows; it does not author them.

> **`D-17` — where the draft lives.** `supabase/migrations/` is the directory tooling treats as the apply set, so a draft placed there can be applied by a routine command, a CI step, or another agent following the folder's convention. Hold it outside that path — e.g. `docs/v1/drafts/` — and move it in **as the act of authorizing S1**, once **every S1 window decision** is settled (`V1-DECISION-REGISTER.md` §5.15 Stage 4 — the count is not restated here, per `D-54`).

*(The `CLAUDE.md`/`AGENTS.md` amendment moved to T1 — it needs the `QE` decision and now carries four payloads. See T1.)*

**DoD:** every number is a named variable with a citation · no success-scenario literal in business logic · `0001_init.sql` unmodified · CI green on an empty suite · no migration applied.
**OD gating:** none.

### S1 — Data model and sequence guard

**Every S1 window decision must be settled before this migration is written.** They alter the same append-only table and cannot be sequenced.

> **The window is listed in `V1-DECISION-REGISTER.md` §5.15 Stage 4 — read it there.** This line previously said *"all eight"*; the count had already changed twice by 2026-08-20 (`G42` in Step 0, `G57` the same day). **A count restated in a second document is the drift mechanism** (`G55`, `G56`, `D-54`).

**Precondition — `SPECS-TRANSITION-ENFORCEMENT` (`D-53`).** `G33b` closed 2026-08-20 (`D-52`): of 18 `SPECS` candidates, 7 absorb into this window, 9 require `SPECS` across 4 documents, 1 is infrastructure ⚙, 1 is blocked by `Q2`. **Exactly one is required before S1** — `docs/specs/SPECS-TRANSITION-ENFORCEMENT.md`, which settles trigger timing, allowed-transitions table shape, and lock behaviour. The other three are sprint-aligned (S3, S4, S5).

**`X4` and `X5` land in the same migration (`D-61`).** One seeded row executes **T5 with an agent**, and T5 is Line 2, human-primary. **Flipping `actor_type` to `human` alone makes the record worse** — it would assert a human executed T5 with no way to say which human, and would discard the fact that an agent assisted. `actor_id`, `assisting_agent_id`, and `line_assignment` are `X5`/`TC4` columns. **`X4` is not independently closable.**

**Backfill input — `G57` closed (`D-55`).** The eight-row `X3` mapping is specified as data in `V1-DECISION-REGISTER.md` §5.14p and is **role-keyed**: `logged`→`Discovered`, `reported`→`Logged`, then `investigated`/`journaled`/`senior_reviewed`/`chief_approved`/`published`/`rejected` to `Investigated`/`Drafted`/`Reviewed`/`Approved`/`Published`/`Rejected`.

**Two rules the migration must honour.** `Validated` and `Needs Revision` **backfill empty** — that is `X3`'s collapsed T2/T3 showing through, not a defect, and must not be repaired by inventing rows. And the mapping is **total: no `else` or `default` branch.** An unrecognised value must fail the migration loudly; a default silently misfiles it, permanently, in an append-only table.

| # | Decision | Source |
|---|---|---|
| 1 | `Q11` field **name** — the SHAPE is decided (`D-97`: three-value status). **`line_boundary_crossed` is the REJECTED boolean fallback and is not the work item**; `identity_assurance` remains separate executor-provenance data and a reserved `judgment_independence` stays null | Propagates to six documented locations. **Row corrected `D-109`** — it had survived `D-97` and been reported three times (`B-009`, `B-012`, `B-032`) |
| 2 | `QA3` typed columns versus versioned JSON payload | Enforcement and filtering only work on typed columns |
| 3 | Report record shape — identity, as-at, tenant, template + rule-set version, frozen snapshot | Audit Step 4 |
| 4 | ✅ **RULED `D-114`.** Insert/read-only: `workflow_transitions` (already `NFR-02`), **`publications`/`publication_targets`** and the **report record**. `articles` **cannot** be — it mutates by design, which is *why* reports carry frozen snapshots. **Enforced by `REVOKE UPDATE, DELETE` AND a `BEFORE UPDATE OR DELETE` trigger** — `REVOKE` alone does not bind the owner or `service_role`, and `TR-API-03` introduces exactly that connection at S4 | Audit Step 5; `C-11` and `GA2` closed |
| 5 | ✅ **DISPOSED `D-114`.** §5.3's **table-by-table classification is adopted** into `Modular_PRD` §6.3. The **floor is deferred with a named owner** and **`DATA_RETENTION_ARCHIVE_DAYS = 90` stays unratified** — because nobody has put it to the Chief Editor (`A6`), **not** because it is below the statutory floor. *(`D-114` said it was "twenty times below" that floor; **retracted by `D-115`** — the floor governs **disposal**, 90 days governs **archival**, and comparing them compares a move to a deletion.)* **5a is carried as `C-31`, now narrowed to one question, and does not block** — archival and disposal are **external** to this system. `C-12` closed: `publication_targets` rows are created **eagerly at approval**, so a non-attempt is a row with no events rather than an absence | Audit Step 9; `C-12` closed |
| 6 | Cascade behaviour — **`on delete restrict`** (`D-07`) | Audit Step 11, `GA9` |
| 7 | **`G19`** notice-as-article — notice type, notice→original reference, inherited targets, derived superseded status | `D-06` |
| 8 | **`G20`** risk-tier dimension on articles | `D-11` |

> ⛔ **`articles_url_uidx` is SPECIFIED FOR REMOVAL (`D-121`) and Lane A has not applied it** —
> `supabase/` is Lane B's surface (`D-56`). `0002` line 131 creates a unique index on the source
> reference. **The `articles` row is the editorial brief and the trigger** (`D-111`), one per
> commission or manual submission, so **two commissions on one source are two rows** and a unique
> index on the source forbids the second. **The duplicate guard is instead same submitter + same
> brief hash + same day, at the surface** — trigger creation is never blocked, and until **S6**
> executor identity is self-asserted, so the database is not a place this guard can honestly live.
> **Lane B removes the line and tests the guard's absence, not its presence.**

**Also in S1:** ten-state enum via `article_state_v2` · tenancy boundary (`D-01`) · `actor_id` (`TC4`) · `sources.reliability_tier`, `articles.source_id`, `topics.evolves_from`, trend-signal fields (`TC3`, `TC5`) — **and NO unique index on the source reference; see the block above** (`D-121`; the contradictory restatement here was removed by **`D-122`**, raised as `B-048`) · `publication_targets` + `publications` (`TC2`, `D-08`) · revoke UPDATE and DELETE on `workflow_transitions` · correct the seed rows executing T5 with an agent (`X4`) · **sequence enforcement in Postgres, not application code** (`TC1`).

**DoD:** trigger written and **unit-tested against a local or branch Postgres instance**; `Logged → Drafted` rejected at the database. **Live anon-key behaviour stays unverified until `DEP-05` is answered** — claim S1 done as *"trigger written and unit-tested; live-DB behaviour unverified,"* never as fully done.

> **The qualifier was missing here for three months (`G94`, `D-120`).** `A26a` corrected this DoD on
> 2026-08-17 — its own note calls the prior wording *"a live contradiction, not a deferral"* — and
> the correction reached `sprint-plan` §353 and `Modular_PRD` `M1` **and not this document, which is
> the one a build lane reads.** Every check passed throughout.

> **The runner (`D-120`).** `DEP-05` withholds *"Supabase credentials pulled to `.env.local`"* — **the
> hosted project, and nothing else.** The dev environment is **separate from `main`/production** and
> its database is **disposable**: `vercel dev` for the app, `supabase init` / `bun run db:start` for
> the database. The CLI is provisioned; **`supabase init` is Lane B's act** because `supabase/` is
> its surface.

> ⛔ **`C-33` — this DoD phrase is NOT yet earned (`D-118`, raised by Lane B as `B-044`).** `0002` is
> drafted at `d826b53` and its test **asserts on migration TEXT**: it never starts PostgreSQL,
> applies `0001` then `0002`, invokes the trigger, or observes a rollback. **A text assertion stays
> green while the SQL is syntactically invalid.** **Two unverified things are held apart**: `DEP-05`
> permits **live anon-key** behaviour to remain unverified; a **local PostgreSQL** unit test needs no
> credentials and is still required. `C-33` carries the eight-case contract.
**OD gating:** none. Sequence enforcement is a Charter-level invariant.

### S2 — Line assignment and four-eyes

Actor context on every action · four-eyes evaluator behind `FOUR_EYES_MODE` · **T5 is Line 2, human-executed** · **blind first pass at T5** — Line 2 records its disposition *before* the Line 1 recommendation is revealed, without which agreement cannot be distinguished from anchoring · T6 validates against T5's recorded fields, not a boolean · **T6→T5 return rate logged distinctly** · `EmergencyBypass` as `event_type` · hard block on one identity holding both Line 1 and Line 2 roles (`SEC-01`, subject to `Q12(b)`).

**OD gating:** `OD1`/`OD2` gate **production** done, not Phase 0 done. **A negative `OD2` voids this sprint's model entirely.**

### S3 — Board, filters, audit log

Filterable board (`FR-08`, `CR-13`) · audit view exposing the T6→T5 return rate · intent codes queryable (`D-12`).

### S4 — Publication and fallback

`publication_targets`/`publications` in use · WordPress publish or LinkedIn `ManualReady` · T10 auto-fallback · T11 Chief Editor manual confirm · bounded retry (`NFR-05`) · credentials server-side only (`NFR-07`, `SEC-02`) · **first genuine use of `SUPABASE_SERVICE_ROLE_KEY`** — the architecture's first privileged path (`TC1`).

**`Q3`/`Q5` ruled (`D-143`): Supabase Edge Function is the publish path; `pg_cron` is the retry scheduler.** `docs/specs/SPECS-PUBLICATION.md` specifies both. **Still open before S4 builds:** credential isolation design (`NFR-07`/`SEC-02`) and the `TC1` privileged-write-path amendment — `D-143` ruled the runtime, not these two.

**Note:** `FR-09` automates WordPress, but the recommended first channel is LinkedIn (`ManualReady`, no automation) — see `G9` before specifying S4.

## 5. Parallel track — T3, the POC lane

**No build dependency.** Charter the manual P0-EVR lane (`G7a`), settle `QB`, design auditor access (Step 7) and disposal authority (Step 10), and clear `B-P0-06`'s ten boundaries. Conditions `C-01`, `C-02`, `C-04`, `C-05`, `C-06`, `C-10` land here.

Deferring this behind S0/S1 would stall commercial evidence for no technical reason — the manual PoC exists precisely to gather that evidence before the build justifies itself.

## 5.1 Artifact Definition of Done — `D-19` / `G29`

**A sprint is done when its named artifacts exist, not when its description has been satisfied in prose.** Attach these to each sprint's DoD; they are checkable by `ls`, which is the point.

| Sprint | Artifacts that must exist |
|---|---|
**`Q11`'s SHAPE is decided: a three-value status (`D-97`).** `satisfied` | `not_applicable` |
`override_not_four_eyes`, as `FR-05` already states and `Modular_PRD` §10 now records.
**`G64` is answered, not merely specified.**

> **Corrected 2026-08-24 (`D-101`, raised as `B-012`).** This paragraph said `Q11` was *"deferred
> past S1"* and that the deferral *"selects the boolean shape by default"* — **the superseded state
> `B-009` was raised to remove, still sending a future `0002` author toward the boolean while the
> register sent them toward the status column.** Both cannot satisfy `G-02`.

**`D-68` deferred `Q11` past S1; `D-97` then decided the shape anyway**, because `G27` requires
`G64` resolved *before the `0002` draft*, which is earlier than S1. **The deferral was of the
naming half, and only that half survives it.**

**The NAME remains open, and the two questions were conflated here.** Whether the column is
renamed for mechanism-accuracy — plus `identity_assurance` and a reserved `judgment_independence`
— is a separate decision. **A deferral of the name is not a deferral of the shape**, and the
boolean fallback is no longer reachable by default.

**`0002` stays blocked** until the naming decision **and** the rest of the S1 decision window
settle. **S0 creates only the hold location** (`docs/v1/drafts/`).

**Why the boolean cannot work, retained because the reasoning is what makes the shape binding**
(`G64`, restated by `D-69`): `G-02`'s Data Source names **one** column, but its definition excludes logged overrides, which requires `not_applicable` and `override_not_four_eyes` to be distinguishable — and a boolean maps both to `false`. **`G-02` cannot be computed from its own declared Data Source.** *(As first opened, `G64` also claimed an `NFR-03` inference violation. **Withdrawn** — "inferred at read" is undefined across the corpus, and `NFR-03`'s measured target is "100% non-null", which a boolean meets. `C-16` carries the undefined term.)* **`G64` was *specified, not applied* until `D-97` chose between the two shapes; it is now applied.** *(This sentence read "specified, not applied … the choice belongs to `Q11`" for two days after `D-97` made that choice — `B-012`.)* **`0002` remains blocked — by `Q11`'s open NAMING half and the rest of the S1 window, not by its shape.** `Q10` is closed (`D-73`). *(Note: The final Q10 explanation document is pending lock-in at the Alpha Portfolio milestone).*

> **Corrected 2026-08-30 (`D-161`, closing `B-061`) — this and the two preceding paragraphs are
> history.** `Q11`'s NAME is decided (`D-111` — `line_separation_status`), the S1 window closed
> (`D-114`), and `0002` is no longer blocked. `0002_s1_editorial_schema.sql` exists, is applied,
> and `build-config.ts`'s field remains named `JUDGMENT_INDEPENDENCE_STATUS_VALUES` pending a
> separate symbol-rename pass — the stored column name (`line_separation_status`) and the config
> constant name are not required to match.

| **S0 — Lane A, provisioned ahead** | `docs/DECISION_LOG.md` · `docs/CONFIG_LOG.md` · `docs/v1/drafts/` *(the hold location, `G27` closed)* — **all three exist as of 2026-08-21 (`D-91`)** |
| **S0 — Lane B** | `lib/config/build-config.ts` · `lib/config/flags.ts` · Stripe scaffolding **removed** |

**The `0002` draft is NOT an S0 artifact — corrected 2026-08-21 (`D-93`, raised as `B-001`).** As
first written this row listed `docs/v1/drafts/0002_three_lines.sql.draft` among S0's Lane B
deliverables, while `D-91` — set in the same pass — says the draft *"stays unwritten, since
`G64`/`Q11` still gate it."* **A derived tier was made to contradict the register by the decision
that wrote the register's text.** `D-58` arbitrates: the register wins.

**What S0 delivers is the hold location, not the draft.** `docs/v1/drafts/` exists; the file does
not. **Writing the draft is the pre-authorization act for S1** — irreversibility begins when a
field name is committed to text an executor will apply — **not evidence required to close S0.**
| **T1 / S0** | Test runner · `__tests__/` with one passing test · `.github/workflows/` CI *(`R3` — **installed 2026-08-21**, `D-70`; the precondition for every DoD below is met)* |
| **S1** | `supabase/migrations/0002_*.sql` **applied** · `publication_targets` and `publications` tables exist · `allowed_transitions` exists |
| **S2** | Blind-first-pass reveal ordering live at T5 · `T6→T5` return events distinctly queryable |
| **S3** | Board renders and filters on all four dimensions · audit view exposes the `T6→T5` return rate |
| **S4** | WordPress publish path · LinkedIn `ManualReady` path · T11 manual-confirm path · retry job table |

**Standing rule:** if a sprint's artifacts do not exist, the sprint is not done — regardless of what any narrative says. This exists because `G32` demonstrated that a status line can claim completion the files do not support.

## 6. Out of scope for v1

| Item | Why |
|---|---|
| S5 — Line 3, degraded mode | `OD3`; `Q1`. **`Q2` answered `D-57`** — v1 has no independent assurance, so **`FR-11` is not built in v1**. Condition `C-13` places a BCP observability surface in **S3**, not S5 — it must exist before the `OD2` evidence it displays matters. **`G60` closed 2026-08-20** (`D-62`) — `FR-14`, `US-14`, and `AC-21` now exist in `Modular_PRD`. **S3 is unblocked**; the surface displays observations existing requirements already define and introduces no new measurement or threshold |
| S6 — auth and scoped RLS | `SEC-03`, gated on `OD1`–`OD3`. **Cannot be called done while they are open** |
| `G7b` systematized POC exposure | Needs S2 identity, enforcement completes at S6 |
| Tier 3 Fallout — legal/defamation crises | Generating activities excluded: `NG-11` removes fundraising; PoC §8.2 excludes whistleblower publication without safe handling |
| Multi-team accounts, and `S6` — auth and scoped RLS (`SEC-03`) | **`NG-02`, Charter-level, standing per `D-79`.** `S6` is the general case; `M-POC`'s scoped client-account variant (`D-145`) is one instance of it, not a second item. **Rationale and "Ready when" condition live in `Modular_PRD.md` §2.5 (`D-148`)** — cited here, not restated, because this table freezes with v1 and that condition must still be checkable after it does |
| Monetization features | **`NG-03`, Charter-level.** Revenue is a business activity, never a product feature (`D-04`). `D-96`: the POC commercial flow is original project scope; Stripe scaffolding was removed by `X8` (`D-121`, verified `67706ca`). **Rationale and "Ready when" condition live in `Modular_PRD.md` §2.5 (`D-148`)** — cited here, not restated |
| **POC manual lane — deferred scope, shape now decided** | **One engine, two exposures** (`§7` invariant 1; `D-59` one origin, two paths). The **MVP** and **POC** are two flows of the same editorial brief, and the POC sells **exactly one item: publicly-expandable content with a report**, entering at the trigger and traversing **the same phase gates** — no separate pipeline, no second state machine. **Deferred, not authorized:** no charter, PRD, spec, config row, or migration authority is created here, and **no POC commercial field goes near `AP-01`'s `Q11`/`0002`**. **Ready when:** `G7a` charters the manual lane and `B-P0-06`'s ten boundaries carry real values — tracked at `§5` above, not restated here |
| **POC built commercial model (`B-008`) — NOT adopted** | *Split from the row above by `D-150`, closing `G106`: one row carried two deferred items under a single condition that fitted only the manual lane, so this half would have read ready the moment `G7a` and `B-P0-06` resolved.* **Not adopted** (`D-96`) — no `cart_id`, no payment-provider config, no payment or obligation drains, no asynchronous account claiming or delivery portal, no provider-ID/editorial-ID split. **Ready when BOTH** — a prohibition lifted is not scope authorized (`Modular_PRD.md` §2.5.1 step 5): ① `NG-02` **and** `NG-03`'s own conditions resolve, cited from `Modular_PRD.md` §2.5 and not restated here; **and** ② a **separate POC Charter and Product Requirements** are authorized at Alpha Portfolio level — `B-008` option 2, a Charter-level act, not a sprint and not a version |
| Auto-advance on confidence score | `NG-10`/`TC9`. Fixed, not configurable |

### 6.1 Backlog path — moved to the living tier (`D-148`, corrects `D-147`)

**The four-step procedure and each item's "Ready when" condition now live in
`Modular_PRD.md` §2.5.1** — not here. `D-147` first named the pattern in this document; `D-148`
found the placement wrong: this file freezes at v1's sprint close (`D-36`), and a mechanism meant
to stay checkable across v2, v3, and beyond cannot be authored only in a document that will stop
being edited. **This section is kept as a pointer, not deleted**, so a reader who remembers it
being here finds where it went rather than a silent gap.

**This table above still records what v1, specifically, excluded — accurately, and permanently,
once frozen.** That is the correct kind of content for a tracking file: a dated snapshot. The
living condition for when an exclusion *stops* applying is a different kind of fact, and now has
the different kind of home it needs.

## 7. Standing invariants

1. **Never fork the pipeline.** One editorial engine, two exposures.
2. **Never edit `0001_init.sql`.** Schema changes are new migrations.
3. **Never edit `PRD.md` or the frozen Charter.**
4. **Charter-level invariants live in Postgres**, because the anon key is public and application checks are advisory (`TC1`).
5. **Never overwrite a record — supersede it.** Applies to reports, articles, and corrections alike.
6. **`MockPublished` never satisfies `Published`.**
7. **No invented numbers.** `AGENT_HEADCOUNT` and `LINE1_AGENT_ROSTER` stay `UNSET`.
8. **One hard stop:** a negative `OD2` resolution is a pre-launch blocker, at any point.
9. **Stay in your lane (`D-75`).** Specify work belonging to another lane; never apply it. Crossing a lane boundary requires a handoff, not a commit. **Enforced at commit time since `D-88`** — `.githooks/commit-msg` requires a `Lane-Crossing: <reason>` trailer on a multi-lane commit. It does not forbid crossings, and `--no-verify` bypasses it; `lane-boundary` still reports one afterwards.

## 8. Scope limits

Authorizes no code, schema, migration, or deployment. Every sprint above requires its own separate build authorization. Approval of a decision is not permission to implement it.

`D-22`–`D-28` are documentation and governance controls only. They add no product payment feature, financial-accounting feature, automated signature, new application role, or change to the editorial pipeline.
