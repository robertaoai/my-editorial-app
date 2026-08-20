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

> `R3` is the precondition for every sprint having a verdict. There is currently no test runner, no `__tests__/`, no CI, and `next.config.ts` disables type and lint gates at build (`TC6`).

## 4. Build

### S0 — Reconciliation and config spine *(no feature code)*

Config registry with a `PROVISIONAL` marker on every OD-derived value · feature flags · `DECISION_LOG.md` and `CONFIG_LOG.md` · remove Stripe scaffolding (`X8`, `NG-03`) · **verification apparatus** · draft migration `0002` **without applying it**.

> **`D-17` — where the draft lives.** `supabase/migrations/` is the directory tooling treats as the apply set, so a draft placed there can be applied by a routine command, a CI step, or another agent following the folder's convention. Hold it outside that path — e.g. `docs/v1/drafts/` — and move it in **as the act of authorizing S1**, once all eight T2 decisions are settled.

*(The `CLAUDE.md`/`AGENTS.md` amendment moved to T1 — it needs the `QE` decision and now carries four payloads. See T1.)*

**DoD:** every number is a named variable with a citation · no success-scenario literal in business logic · `0001_init.sql` unmodified · CI green on an empty suite · no migration applied.
**OD gating:** none.

### S1 — Data model and sequence guard

**All eight T2 decisions must be settled before this migration is written.** They alter the same append-only table and cannot be sequenced.

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
| **S0** | `lib/config/build-config.ts` · `lib/config/flags.ts` · `docs/DECISION_LOG.md` · `docs/CONFIG_LOG.md` · draft `0002` **held outside** `supabase/migrations/` (`D-17`) · Stripe scaffolding **removed** |
| **T1 / S0** | Test runner · `__tests__/` with one passing test · `.github/workflows/` CI *(`R3` — currently absent, and the precondition for every DoD below)* |
| **S1** | `supabase/migrations/0002_*.sql` **applied** · `publication_targets` and `publications` tables exist · `allowed_transitions` exists |
| **S2** | Blind-first-pass reveal ordering live at T5 · `T6→T5` return events distinctly queryable |
| **S3** | Board renders and filters on all four dimensions · audit view exposes the `T6→T5` return rate |
| **S4** | WordPress publish path · LinkedIn `ManualReady` path · T11 manual-confirm path · retry job table |

**Standing rule:** if a sprint's artifacts do not exist, the sprint is not done — regardless of what any narrative says. This exists because `G32` demonstrated that a status line can claim completion the files do not support.

## 6. Out of scope for v1

| Item | Why |
|---|---|
| S5 — Line 3, degraded mode | `OD3`; `Q1`, `Q2` |
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

## 8. Scope limits

Authorizes no code, schema, migration, or deployment. Every sprint above requires its own separate build authorization. Approval of a decision is not permission to implement it.

`D-22`–`D-28` are documentation and governance controls only. They add no product payment feature, financial-accounting feature, automated signature, new application role, or change to the editorial pipeline.
