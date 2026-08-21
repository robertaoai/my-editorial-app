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

**Phase 1 is current.** Work outside the active lane is **specified, never applied** (`D-56`). **Lane A writes every dependency before Lane C builds a workflow against it (`D-84`)** — the original map put `scripts/` and `.gitattributes` in Lane C and was corrected. **The rule is unenforced (`D-82`)** — no `CODEOWNERS`, no path rule, no pre-commit hook, and CI runs after a commit lands; a crossing is stopped only by the agent choosing to stop.
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

**Stages A, B and C are installed — 2026-08-21 (`D-70`), executing the sequence `D-65` set out.** `eslint.config.mjs` created and the `lint` script repointed to `eslint .` (21 files, 0 findings); `R3` installed — `__tests__/smoke.test.ts`, `bun test`, and `.github/workflows/ci.yml` running typecheck, lint and test as separate steps; `C-14`'s detection checks installed at `scripts/check-consistency.mjs` and wired into CI. **Extended to seven by `D-72` and `D-73`** — `G66` adds a settings-cascade JSON parse check, `G65` a bidirectional decision-status cross-reference between the register and `Modular_PRD` §10, and `D-73` adds a docs drift check via `graphify`. **Extended to nine by `D-83` and `D-87`** — `G69` adds a lane-boundary check, `G70` a source-side sweep. **Six run in CI** — `graph-coverage` **and** `docs-drift` both read gitignored `.graphify/graph.json` and report SKIP, so a local `8/8` and a CI `6/6` are both correct (`D-76`, `D-83`). **CI is green on a real run.** **Stage D is not unblocked** (`D-79`): `0002` remains blocked on `Q11`'s deferred shape via `G64`, which must resolve before the `0002` draft is written (`G27`), and on the open S1 window. `Q10` is closed and contributes a tenancy column — nothing more.

*Superseded state, retained for the record:* `bun run lint` formerly **exited 1** — `next lint` is deprecated and **interactive**, and **an interactive prompt in CI hangs rather than fails**. *"CI green on the current commit"* is blocked solely on that file.

**`G59` closed 2026-08-21** (`D-64`) — `bun.lockb` is committed and `--frozen-lockfile` exits 0, so `R3` DoD **D-6** is satisfied and CI will judge the commit rather than the day. **The other five DoD conditions remain open.**

## 4. Build

### S0 — Reconciliation and config spine *(no feature code)*

**`X`-series sprint mapping (`D-63`, closes `G61`).** The eight divergences are indexed in `V1-DECISION-REGISTER.md` §5.1 and land as: **`X8` → S0** (Stripe scaffolding versus *"no monetization features"*) · **`X3`, `X4`, `X5` → S1**, all in `0002` · **`X7` → mitigated S2, closes S6.** `X1` and `X2` need no build work; `X6` is superseded by `D4`, which is not yet closable.

**Route constants land here (`D-59`, closes `G10`/`QC`).** `EDITORIAL_ROUTE` = `/editorial`, `POC_ROUTE` = `/request-brief`, `DOMAIN_APEX` = **`UNSET`** — no domain is recorded in the corpus and none is invented. **`C-15` (T3)** promotes both lanes to distinct origins before POC holds real client data; the route names are chosen so that promotion is mechanical.

Config registry with a `PROVISIONAL` marker on every OD-derived value · feature flags · `DECISION_LOG.md` and `CONFIG_LOG.md` · remove Stripe scaffolding (`X8`, `NG-03`) · **verification apparatus** · draft migration `0002` **without applying it**.

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
| 1 | `Q11` field rename → `line_boundary_crossed` + `identity_assurance`, reserve `judgment_independence` | Propagates to six documented locations |
| 2 | `QA3` typed columns versus versioned JSON payload | Enforcement and filtering only work on typed columns |
| 3 | Report record shape — identity, as-at, tenant, template + rule-set version, frozen snapshot | Audit Step 4 |
| 4 | Which tables become insert/read-only — **including publication records** | Audit Step 5, `C-11` |
| 5 | Retention floor and table classification | Audit Step 9 |
| 6 | Cascade behaviour — **`on delete restrict`** (`D-07`) | Audit Step 11, `GA9` |
| 7 | **`G19`** notice-as-article — notice type, notice→original reference, inherited targets, derived superseded status | `D-06` |
| 8 | **`G20`** risk-tier dimension on articles | `D-11` |

**Also in S1:** ten-state enum via `article_state_v2` · tenancy boundary (`D-01`) · `actor_id` (`TC4`) · `sources.reliability_tier`, `articles.source_id`, `topics.evolves_from`, trend-signal fields, unique index on `articles.url` (`TC3`, `TC5`) · `publication_targets` + `publications` (`TC2`, `D-08`) · revoke UPDATE and DELETE on `workflow_transitions` · correct the seed rows executing T5 with an agent (`X4`) · **sequence enforcement in Postgres, not application code** (`TC1`).

**DoD:** trigger written and unit-tested; `Logged → Drafted` rejected at the database. **Live anon-key behaviour stays unverified until `DEP-05` is answered** — claim S1 done as *"trigger written and unit-tested; live-DB behaviour unverified,"* never as fully done.
**OD gating:** none. Sequence enforcement is a Charter-level invariant.

### S2 — Line assignment and four-eyes

Actor context on every action · four-eyes evaluator behind `FOUR_EYES_MODE` · **T5 is Line 2, human-executed** · **blind first pass at T5** — Line 2 records its disposition *before* the Line 1 recommendation is revealed, without which agreement cannot be distinguished from anchoring · T6 validates against T5's recorded fields, not a boolean · **T6→T5 return rate logged distinctly** · `EmergencyBypass` as `event_type` · hard block on one identity holding both Line 1 and Line 2 roles (`SEC-01`, subject to `Q12(b)`).

**OD gating:** `OD1`/`OD2` gate **production** done, not Phase 0 done. **A negative `OD2` voids this sprint's model entirely.**

### S3 — Board, filters, audit log

Filterable board (`FR-08`, `CR-13`) · audit view exposing the T6→T5 return rate · intent codes queryable (`D-12`).

### S4 — Publication and fallback

`publication_targets`/`publications` in use · WordPress publish or LinkedIn `ManualReady` · T10 auto-fallback · T11 Chief Editor manual confirm · bounded retry (`NFR-05`) · credentials server-side only (`NFR-07`, `SEC-02`) · **first genuine use of `SUPABASE_SERVICE_ROLE_KEY`** — the architecture's first privileged path (`TC1`).

**Note:** `FR-09` automates WordPress, but the recommended first channel is LinkedIn (`ManualReady`, no automation) — see `G9` before specifying S4.

## 5. Parallel track — T3, the POC lane

**No build dependency.** Charter the manual P0-EVR lane (`G7a`), settle `QB`, design auditor access (Step 7) and disposal authority (Step 10), and clear `B-P0-06`'s ten boundaries. Conditions `C-01`, `C-02`, `C-04`, `C-05`, `C-06`, `C-10` land here.

Deferring this behind S0/S1 would stall commercial evidence for no technical reason — the manual PoC exists precisely to gather that evidence before the build justifies itself.

## 5.1 Artifact Definition of Done — `D-19` / `G29`

**A sprint is done when its named artifacts exist, not when its description has been satisfied in prose.** Attach these to each sprint's DoD; they are checkable by `ls`, which is the point.

| Sprint | Artifacts that must exist |
|---|---|
**`Q11` deferred past S1 (`D-68`), and the deferral is not neutral.** The sprint plan's S1 migration line already instructs the `line_boundary_crossed` fallback, so deferring selects the boolean shape by default. **`G64`** records why that shape is not safe, **restated by `D-69`**: `G-02`'s Data Source names **one** column, but its definition excludes logged overrides, which requires `not_applicable` and `override_not_four_eyes` to be distinguishable — and a boolean maps both to `false`. **`G-02` cannot be computed from its own declared Data Source.** *(As first opened, `G64` also claimed an `NFR-03` inference violation. **Withdrawn** — "inferred at read" is undefined across the corpus, and `NFR-03`'s measured target is "100% non-null", which a boolean meets. `C-16` carries the undefined term.)* **`G64` is specified, not applied** — two shapes are set out and the choice belongs to `Q11` (`D-68`). **`G64` must resolve before the `0002` draft is written (`G27`, S0)**, not merely before S1 applies it. `0002` remains blocked by `Q11`, but `Q10` is closed (`D-73`). *(Note: The final Q10 explanation document is pending lock-in at the Alpha Portfolio milestone).*

| **S0 — Lane A, provisioned ahead** | `docs/DECISION_LOG.md` · `docs/CONFIG_LOG.md` · `docs/v1/drafts/` *(the hold location, `G27` closed)* — **all three exist as of 2026-08-21 (`D-91`)** |
| **S0 — Lane B** | `lib/config/build-config.ts` · `lib/config/flags.ts` · draft `0002` **held outside** `supabase/migrations/` (`D-17`), at `docs/v1/drafts/0002_three_lines.sql.draft` · Stripe scaffolding **removed** |
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
| Multi-team accounts | `NG-02` v1 lock. Tenancy boundary exists; **no capability is built** |
| Monetization features | `NG-03`, Charter-level. Revenue is a business activity, never a product feature (`D-04`) |
| Auto-advance on confidence score | `NG-10`/`TC9`. Fixed, not configurable |

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
