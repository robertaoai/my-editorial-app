# Build Readiness Journal — Sprint Plan (2026-08-16)
**Date:** 2026-08-16
**Author:** Chief Editor (robertaoai), drafted with Claude
**Status:** Planning only. No code written, no migrations applied, no env vars pulled, no commits, no pushes authorized by this entry.
**Precedence for this entry:** Project Charter v1 > V1 Build Readiness Addendum v1.4 > Blueprint v1.3 > Business Case v2.2.
**Repo:** `robertaoai/my-editorial-app` @ `53ace36` (clean clone, `main`). Local git identity set to `robertanct@yahoo.com.sg` / `robertaoai` per instruction — see conflict **X9** below before the first commit.
**Supersedes:** None. First sprint plan for this build cycle. Sits below Entry 007 (Phase 0 approval, same date).
**Revision 2 (2026-08-16, same day):** the Project Charter v1 was supplied after revision 1 was written and is now committed at `docs/source/project-charter-v1.md`. Conflict X0 is closed. Reading the Charter directly opened two new conflicts, X11 and X12, and withdrew one provisional default this plan had set on revision 1. See §9.

---

## 1. Fact-check log (verified against source files and the cloned repo on 2026-08-16)

| Claim tested | Verdict | Evidence |
|---|---|---|
| Blueprint line 719 says development may proceed as a provisional assumption | **True, verbatim** | Blueprint v1.3 line 719: "A recommendation with 'Blocking: Yes' means the prototype cannot proceed to production without resolution, but it may proceed as a **provisional assumption** for development." |
| Addendum line 768 says Assumed defaults may proceed for prototype development | **True, verbatim** | Addendum v1.4 line 768 (closing paragraph): "OD1–OD3 are structurally resolved but remain unratified. All Assumed defaults may proceed as provisional assumptions for prototype development." |
| Entry 007's S7 EMS correction is accurate | **True, independently verified against the Addendum, not against the EMS file's own citation** | Addendum §6.4 line 435 covers the under-48h case (Line 1 continues, Approved jobs still publish); line 436 covers >48h (all Line 2 work stalls). S7's degraded-mode gap is genuinely narrower than Entry 004/006 stated. EMS file line 28 states the same correction; both now checked against the Addendum directly. |
| Precedence hierarchy is consistent across documents | **True** | Addendum v1.4 line 13, Blueprint v1.3 line 5, Business Case v2.2 line 5 — all state Charter > Addendum > Blueprint > Business Case. |
| OD3 has no agent headcount number in any of the four documents | **True** | Searched all supplied documents. Addendum §2.2 OD3 names four roles and says "combinable into fewer agents." Business Case v2.2 states explicitly: "Exact agent headcount and per-role distribution are **not specified** in any of the three source documents." No number found. **No number invented here.** |
| Project Charter v1 was available to read | **Initially FALSE, now TRUE — X0 closed on revision 2** | Not supplied on first pass; supplied later the same day and now committed at `docs/source/project-charter-v1.md`. Every Charter claim below is now first-hand. Reading it closed X0 and opened X11 and X12. |
| Charter holds OD1, OD2, OD3 as Open and blocking | **True, verbatim** | Charter, "Open — v1 (blocking, ordered)": all three rows `Status = Open`. Category definition: "*Open* = yours to decide, blocks sign-off until answered." The governing rule is confirmed at source, no longer by corroboration. |
| Charter names an OD2 negative resolution as a pre-launch blocker | **True, verbatim** | Charter, OD4 branch ②: "If OD2 resolves negatively, at any point, including before v1 ships: this is a pre-launch blocker, not a v2-conditional backlog item... must be resolved before shipping, not after." |
| Charter withholds the agent headcount | **True, verbatim** | Charter, "For:": "Headcount figure withheld pending OD3." Confirms at the highest level that no number exists. **Still none invented.** |
| Charter states "zero independence bypass" as an unconditional success criterion | **FALSE — the lower documents added that. See X11.** | Charter success criteria list one zero-bypass item: "Zero articles bypass a review *sequence* (independence of judgment, OD2, still open)." The Addendum, Blueprint, and Business Case all state a second, unconditional independence criterion. The Charter does not. |
| Charter permits one agent to hold several Line 1 gates | **FALSE — the Addendum added that. See X12.** | Charter, "The one workflow": gates are "each executed by a distinct agent or the Chief Editor." Addendum §2.2 and §3.4 permit the same agent across adjacent Line 1 gates. |
| A2 (prototype stack) is a Charter-level assumption | **False — it is Addendum-level** | The Charter's Assumed table contains exactly one row, A1 (five-gate linear pipeline). A2 through A7 originate in the Addendum §2.1. This lowers the stakes on X6: re-scoping the stack is an Addendum Ratification Log entry, not a Charter act. |
| The repo's `docs/` plan pack aligns with the four governing documents | **FALSE** | Six substantive conflicts found (X3–X8). The repo plan pack was generated from the app name and summary, not from the four documents. `CLAUDE.md` calls it "a complete, correct plan"; measured against the Addendum, it is not. |
| The committed seed data satisfies "zero articles bypass review independence" | **FALSE** | `supabase/migrations/0001_init.sql` line 131 seeds `journaled → senior_reviewed` with `gate_role='senior_journalist', actor_type='agent'`. T5 is the Line 2 gate and is human-primary in every governing document. The shipped seed encodes a four-eyes violation. See **X4**. |
| The committed seed data satisfies "zero articles bypass a review sequence" | **FALSE** | The repo state machine has no `Validated` state, so every seeded article skipped Addendum T2/T3 as separate gates. See **X3**. |
| Reverse-engineering safeguard applies anywhere in this plan | **No — one watch item only** | Nothing in the plan requires inspecting a third party's proprietary UI, code, or workflow. WordPress REST and LinkedIn are consumed through published APIs and documented scopes. One watch item logged in §7. |

**Uncertainty flag (cupcake):** the reverse-engineering safeguard remains an unsourced general engineering caveat, not a Charter/Addendum/Blueprint/Business Case requirement, exactly as Entry 006 §1 recorded it. It is applied here as build hygiene, cited as nothing more.

---

## 2. Plan confirmation (3 lines)

1. **What gets built:** the Addendum §3.1 five-gate editorial pipeline (T1–T11) on the already-provisioned Next.js + Supabase repo — article intake, a server-enforced sequence guard, Line-assigned executor identity with four-eyes at the T5/T6 Line boundaries, a state/topic/category/Line-filterable board, an append-only who-when-why audit log, and WordPress auto-publish with LinkedIn ManualReady fallback.
2. **In what order:** S0 reconciliation and config spine → S1 data model and sequence guard → S2 Line assignment and four-eyes → S3 board, filters, audit log → S4 publication and fallback → S5 Line 3, degraded mode, and the Entry 007 S1–S9 rows → S6 auth and RLS lock-down (pre-production only).
3. **Which OD blocks which sprint:** no OD blocks S0, S1, or S3 from being called done for Phase 0; OD1 and OD2 gate S2 and S6 from being called done for **production**; **OD3 blocks three items** (the S1/S2 Line 1 executor roster, S4 agent-failure reassignment, S5 Line 3 executor independence) and all three stop and ask the Chief Editor rather than assume a number; S6 cannot be called done at all until OD1–OD3 are ratified at the Charter level.

---

## 3. Config block (every numeric target is a named variable — no inline literals)

Proposed location: `lib/config/build-config.ts`, read at runtime from env where an operator needs to change it without a redeploy. Every entry cites its source. Nothing here is a literal in business logic.

### 3.1 Success-scenario targets (Addendum §1, Blueprint §8, Business Case)

| Variable | Value | Source |
|---|---|---|
| `SUCCESS_ARTICLES_LOGGED_MIN` | 5 | Addendum §1, Blueprint line 593, Business Case line 58 |
| `SUCCESS_ARTICLES_PUBLISHED_MIN` | 2 | Addendum §1, Blueprint line 594, Business Case line 59 |
| `PIPELINE_GATE_COUNT` | 6 | T1–T6, the gates requiring an executor decision (Addendum §3.1) |
| `PIPELINE_TRANSITION_COUNT_TO_PUBLISHED` | 7 | T1–T7, including the system publish step |
| `PIPELINE_ACTIVE_STATES` | ordered list of 8 | Addendum §4.1 `article_states`, minus the two side states |
| `PIPELINE_SIDE_STATES` | `["Needs Revision", "Rejected"]` | Addendum §4.1 |
| `BOARD_FILTER_DIMENSIONS` | `["state","topic","category","line_assignment"]` | All three documents name exactly these four |
| `SEQUENCE_BYPASS_TOLERANCE` | 0 | "Zero articles bypass a review sequence" — unconditional at Charter level |
| `INDEPENDENCE_BYPASS_TOLERANCE` | 0 | **Provisional, not unconditional.** Enforced at 0, but the Charter marks independence as pending OD2, so this is reported as provisionally satisfied and never as ratified. See X11. |

### 3.2 Workflow and operational thresholds

| Variable | Value | Source |
|---|---|---|
| `RETURN_LIMIT_BEFORE_ESCALATION` | 3 | Addendum §3.3 |
| `PUBLISH_RETRY_MAX` | 3 | Addendum §7.2 |
| `PUBLISH_RETRY_BACKOFF_MINUTES` | 5 | Addendum §7.2 |
| `DATA_RETENTION_ARCHIVE_DAYS` | 90 | A6 (Assumed, unratified) |
| `SCORING_REVIEW_THRESHOLD_ARTICLES` | 50 | A4 (Assumed, unratified) |
| `CHIEF_EDITOR_ABSENCE_DEGRADED_HOURS` | 48 | Addendum §6.4 line 436; the boundary S7 was corrected to |
| `SLA_DWELL_HOURS` | map: Discovered 48, Logged 24, Validated 48, Investigated 72, Drafted 72, Reviewed 48, Approved 24 | Blueprint §6 lines 617–623 |

### 3.3 Scoring (Addendum §5, formula version pinned)

| Variable | Value | Source |
|---|---|---|
| `SCORE_FORMULA_VERSION` | `"v0"` | Addendum §5.4 |
| `TREND_WEIGHTS` | recency .35, source_tier .25, engagement .25, velocity .15 | Addendum §5.1 |
| `TREND_RECENCY_DECAY_HOURS` | 168 | Addendum §5.1 |
| `TREND_ENGAGEMENT_SATURATION` | 500 | Addendum §5.1 |
| `TREND_VELOCITY_SATURATION_PER_HOUR` | 10 | Addendum §5.1 |
| `SOURCE_TIER_WEIGHTS` | Tier1 1.0, Tier2 0.7, Tier3 0.4 | Addendum §5.1 |
| `EDITORIAL_PRIORITY_WEIGHTS` | lineage .30, confidence .25, authority .20, balance .15, evidence .10 | Addendum §5.2 |
| `REVIEWER_CONFIDENCE_WEIGHTS` | High 1.0, Medium 0.6, Low 0.3 | Addendum §5.2 |
| `PRIORITY_BANDS` | Low <0.4, Medium 0.4–0.7, High >0.7 | Addendum §5.2 |
| `DISPLAY_PRIORITY_MIX` | trend .5, editorial .5 | Addendum §5.3 |
| `CATEGORY_BALANCE_WINDOW_DAYS` / `_ARTICLE_THRESHOLD` | 7 / 3 | Addendum §5.2 |

### 3.4 OD-derived values — feature-flagged, never literals

| Variable | Phase 0 value | OD | Rule |
|---|---|---|---|
| `LINE2_EXECUTOR_TYPE` | `"human_primary"` | OD1 | Provisional per Entry 007. Flag, not a literal. |
| `LINE2_MAY_EXECUTE_LINE1_GATES` | `true` (via HumanOverride only) | OD1 | Every use writes `event_type=HumanOverride`, `judgment_independence_status=override_not_four_eyes`. |
| `FOUR_EYES_MODE` | `"line_separation"` | OD2 | Provisional per Entry 007. If OD2 resolves negatively this value has no valid replacement — see §6. |
| `JUDGMENT_INDEPENDENCE_STATUS_VALUES` | `["satisfied","not_applicable","override_not_four_eyes"]` | OD2 | Addendum §4.1. `contingent_on_OD2` and `blocked` stay retired. |
| `AGENT_HEADCOUNT` | **UNSET** | OD3 | **No number exists in any source document. Not defaulted. Not rounded. Any code path that dereferences this must fail loudly and route to the Chief Editor.** |
| `LINE1_AGENT_ROSTER` | **UNSET — see X12** | OD3 | Was `["line1-combined"]` on revision 1, justified by Addendum §2.2 "combinable into fewer agents." The Charter says the opposite: gates are "each executed by a distinct agent." Charter governs on operating model, so the combined default is withdrawn rather than defended. Roster shape is now a Chief Editor answer, not a build assumption. |
| `LINE3_EXECUTOR_IDENTITY` | **UNSET** | OD3 | Must not equal any Line 1 or Line 2 identity (Addendum §13). Blocked — see §6. |
| `FLAG_AGENT_ROSTER_MULTI` | `false` | OD3 | Cannot be turned on without a headcount. |

**Deliberately not set:** no sampling percentage for Line 3. Entry 004's "random 5 to 10 percent weekly" did **not** carry forward — Entry 007 accepted S9 as *automated 100% pass plus risk-triggered human review*. Implementing a percentage would re-introduce a rejected scope.

---

## 4. Sprint-by-sprint plan

### Sprint 0 — Reconciliation and config spine (no feature code)

**Goal:** make the governing documents, the repo, and the open decisions visible in one place before any behaviour is written. ITIL 4 "start where you are": measure the provisioned stack honestly before deciding whether to keep it.

- Add a precedence header to the repo `docs/` pack recording that the four governing documents outrank it, and that `CLAUDE.md`'s "complete, correct plan" claim does not survive comparison with the Addendum.
- Create `docs/DECISION_LOG.md` (dated decisions, owner, ratification status) and `docs/CONFIG_LOG.md` (every variable in §3, its source citation, and which OD it depends on).
- Create `lib/config/build-config.ts` with §3 in full, plus a `PROVISIONAL` registry marking every OD-derived value.
- Create `lib/config/flags.ts`: `FLAG_FOUR_EYES_LINE_SEPARATION`, `FLAG_LINE2_HUMAN_PRIMARY`, `FLAG_AGENT_ROSTER_MULTI`, `FLAG_LINE3_ENABLED`, `FLAG_S1..S9_*` (all default off except where Entry 007 accepted them for Phase 0).
- Remove the Stripe scaffolding (`app/api/stripe/*`, `lib/stripe/`, Stripe keys in `.env.example`) — see **X8**.
- Draft `supabase/migrations/0002_three_lines.sql`. **Write it, do not apply it.**

**Acceptance criteria:** every number in §3 exists as a named variable with a source citation; `grep` finds no success-scenario literal in business logic; every OD-derived value is registered as provisional; `0001_init.sql` unmodified; no migration applied; nothing committed.

**OD gating:** none. This is the sprint that makes the ODs config-visible rather than assumed.

---

### Sprint 1 — Data model and sequence guard (T1–T6, T8/T8a, T9)

**Goal:** the Addendum's state machine, enforced server-side, with the return path that the repo currently lacks.

- **Migration `0002_three_lines.sql`** (additive; `0001` is never edited, per `CLAUDE.md`):
  - New enum `article_state_v2` = the Addendum §4.1 ten states. Add `workflow_state_v2` column, backfill via the mapping in **X3**, cut reads/writes over, drop the old column in a later migration once nothing reads it.
  - `workflow_transitions`: add `line_assignment`, `judgment_independence_status`, `event_type`, `agent_id`, `agent_run_id`, `supervising_human_id`, `assisting_agent_id`. Extend `actor_type` with `system` (T7 and T10 are System executors in the Addendum; the current enum cannot represent them).
  - `articles`: add `revision_reason`, `revision_target_state`, `return_count`, `emergency_publish`, `source_author`, `source_published_date`, `editorial_angle`, `editorial_adaptation`.
  - Make `workflow_transitions` genuinely append-only: revoke UPDATE and DELETE. `SECURITY.md` already promises this; `0001` line 94 grants `for all using (true)` and breaks it.
  - Correct the seed rows that encode an agent-executed T5 (**X4**).
- `lib/pipeline/`: sequence guard driven by `PIPELINE_ACTIVE_STATES`; server-side rejection of any non-adjacent transition; `revision_reason` mandatory on T8; auto-escalation at `RETURN_LIMIT_BEFORE_ESCALATION`.
- Transition row is written **before** the state changes, per `SECURITY.md`.

**Acceptance criteria:** AT-010, AT-011, AT-012, AT-012a, AT-013, AT-014 pass. A transition from `Logged` straight to `Drafted` is rejected server-side, not just hidden in the UI. Every state change has exactly one preceding transition row. `SEQUENCE_BYPASS_TOLERANCE` holds at 0 against the corrected seed.

**OD gating:** **none.** Sequence enforcement is independent of all three ODs — it is the Charter-level invariant ("no article reaches publication without passing through every defined approval gate in sequence"), not a governance question. Sprint 1 can be called done while OD1–OD3 are open.

---

### Sprint 2 — Line assignment and four-eyes at boundaries (T5/T6)

**Goal:** executor identity carries a Line, and the T5/T6 boundary crossings are the independence mechanism.

- Actor context on every action: `{actor_id, actor_type, line_assignment, agent_id?, agent_run_id?, supervising_human_id?, assisting_agent_id?}`.
- Four-eyes evaluator implementing Addendum §6.3's pseudocode as written, behind `FOUR_EYES_MODE`. Same-Line → `not_applicable`; Line boundary → `satisfied`; out-of-Line executor → `override_not_four_eyes` + `HumanOverride`.
- **T5 is Line 2 and human-executed.** Agent assistance is recorded as `assisting_agent_id` metadata; the human is the signing executor. This corrects **X4**.
- T6 is Line 1 (Chief Journalist agent). Chief Editor executing T6 is an override, not a normal path.
- EmergencyBypass: `emergency_publish=true` with mandatory reason → `event_type=EmergencyBypass` (PascalCase enum) with the reason string carrying the lowercase `emergency_bypass` label. Distinct fields — the exact conflation the Business Case and Addendum have each had to fix once already.
- Hard block: the same actor identity may not hold both a Line 1 and a Line 2 role (Addendum §3.4, §6.1 — a hard requirement of the standard, not a config value).

**Acceptance criteria:** AT-016, AT-017, AT-018, AT-043, AT-070 through AT-073 pass. `INDEPENDENCE_BYPASS_TOLERANCE` holds at 0. No transition is ever silently marked compliant.

**OD gating:** **OD1 and OD2 both gate "done for production" here.** Sprint 2 can be called done *for Phase 0* with the flags at their Entry 007 provisional values. It cannot be called done for production until OD1 and OD2 are ratified at the Charter level (Addendum §9 G10). **If OD2 resolves negatively, this sprint's entire enforcement model is void — see §6.**

---

### Sprint 3 — Board, filters, audit log

**Goal:** the two success criteria the Chief Editor actually looks at.

- Board grouped by current state; filters on all four of `BOARD_FILTER_DIMENSIONS`. The Line-assignment filter is named in all three governing documents and is missing from the repo plan entirely.
- Card shows title, topic tags, trend_score, editorial_priority, executor_type, line_assignment.
- Audit log view: who (executor identity + Line), when (timestamp), why (reason), for every transition. Append-only, immutable, exportable. Revision reasons visible and undeletable (Addendum §3.3).

**Acceptance criteria:** AT-040, AT-041, AT-050 through AT-053 pass. `SUCCESS_ARTICLES_LOGGED_MIN` articles are visible and filterable on every dimension. Every transition in the log answers who/when/why with no blanks.

**OD gating:** **none blocks implementation.** OD2 determines whether the Line-assignment filter means anything about independence, but the filter ships either way. Sprint 3 can be called done for Phase 0.

---

### Sprint 4 — Publication and fallback (T7, T10, T11)

**Goal:** `SUCCESS_ARTICLES_PUBLISHED_MIN` reached, by real WordPress publish or by ManualReady + manual confirm.

- WordPress REST publish via a dedicated server route; application password from server env only, never client-bundled (`SECURITY.md`). Mock mode when credentials are absent → `MockPublished`, which explicitly does **not** satisfy the Published rule (Addendum §4.4).
- LinkedIn → `ManualReady` with formatted post content generated (plain text, hashtags, 3000-char limit per the Addendum's own target config). T11: Chief Editor enters `published_url` and confirms.
- Publication status state machine: Pending / Published / Failed / Scheduled / Cancelled / ManualReady / MockPublished. Retry to `PUBLISH_RETRY_MAX` at `PUBLISH_RETRY_BACKOFF_MINUTES`, then ManualReady.
- `ARTICLE.current_state = Published` only when at least one target is Published with a live URL (Addendum §3.2). Partial-failure rules per §7.3.

**Acceptance criteria:** AT-015, AT-020, AT-021, AT-022, AT-023 pass. `SUCCESS_ARTICLES_PUBLISHED_MIN` reached by either route. **No env vars pulled or applied under this plan** — that is a separate, explicitly withheld authorization.

**OD gating:** **OD3 blocks one acceptance criterion.** Addendum §3.4 says that when a Line 1 agent fails, "if OD3 permits multiple agent instances, reassign to another Line 1 agent." With `AGENT_HEADCOUNT` unset, reassignment cannot be built or tested — only the HumanOverride fallback can. Sprint 4 is **done-with-exception**: the reassignment criterion is deferred to a Chief Editor answer, not satisfied by a guessed number. See §5 Q1.

---

### Sprint 5 — Line 3, degraded mode, and the Entry 007 accepted rows

**Goal:** the governance layer Entry 007 approved, built as config and flags rather than as literals.

- Line 3 trigger rules (Addendum §13): risk threshold crossed, novel/controversial topic, EmergencyBypass used, 3+ returns, HumanOverride used. Logged as `event_type=Line3Audit`, `line_assignment=Line3`. Pre-publication triggers hold T7; post-publication triggers do not block.
- **Line 3 must not share a data path or reporting line with Line 1 or Line 2** (Addendum §13). Enforced structurally, not by policy text.
- Entry 007 accepted rows, each behind its own flag: S1 low-confidence forces a Line 2 flag at T5 · S2 `plan_deviation` on angle drift · S3 `Retracted` state + `regulatory_retraction_order` (external order bypasses T8 entirely) · S4 pre-publication legal review step ahead of emergency bypass · S5 Acting Chief Editor (`chief_editor_acting_status`, `loa_start`, `loa_end`, `board_approval_ref`) with automatic reversion · S6 risk stratification computed at T1 · **S7 degraded mode for the >48h case only**, since Addendum §6.4 already covers under-48h · S8 `publication_readiness_attestation` at T5/T6 · S9 automated 100% pass feeding a knowledge base, human Line 3 review staying risk-triggered.
- **G9 as a live trip-wire, not a post-launch chore.** Addendum §9 defers Line-separation verification to "post-launch monitoring." That is too late: G9 is the detector for the one condition that is an explicit pre-launch stop. Build it as a measurable in-product check now — compare Line 1 and Line 2 judgments on the same article and surface agreement rate. Recommend the Chief Editor re-scope G9 accordingly; flagged, not decided here.

**Acceptance criteria:** AT-044, AT-074 pass. Every Entry 007 row maps to a named flag or config variable; none is hard-coded. S7's threshold reads from `CHIEF_EDITOR_ABSENCE_DEGRADED_HOURS`.

**OD gating:** **OD3 blocks Line 3 executor independence.** If Line 3 runs under the same identity as Line 1, it is not Line 3 — it is the rubber stamp the Addendum names explicitly. `LINE3_EXECUTOR_IDENTITY` is UNSET and cannot be defaulted. Needs either a headcount or an explicit Chief Editor statement that Line 3 is human or external for v1. See §5 Q2. **OD2 negative = full stop for this sprint.**

---

### Sprint 6 — Lock it down (pre-production only)

**Goal:** the state the four documents actually require before real data.

- Supabase Auth; permissive RLS replaced with owner-scoped and role-scoped policies; only the Line 2 identity may execute T5 and T11; append-only enforced at the database, not just in application code.

**Acceptance criteria:** anonymous users cannot execute any gate; every gate's executor is authenticated and Line-attributable; `workflow_transitions` rejects UPDATE and DELETE at the database level.

**OD gating:** **this sprint cannot be called done at all while OD1–OD3 are unratified.** It is additionally gated on Addendum §9 G10 (Three Lines ratification) and on the two Entry 007 §3 gaps — the missing Business Charter and the missing exit strategy — both of which Entry 007 defers to the production go-live decision and neither of which blocks Phase 0.

---

## 5. Questions that stop the build rather than get guessed

**Q1 (OD3, now blocks more than it did on revision 1):** how many Line 1 agent instances exist, and does each Line 1 gate need its own? The Charter's "For:" section states the headcount is "withheld pending OD3," so no number exists at any level. On revision 1 this plan defaulted `LINE1_AGENT_ROSTER` to a single combined Line 1 identity on the Addendum's "combinable" language. **That default is withdrawn** — the Charter says gates are "each executed by a distinct agent," and the Charter governs on operating model (X12). The roster is now UNSET. Note that answering "one distinct agent per gate" would imply at least four Line 1 agents, but that inference is not drawn here: it is exactly the headcount question OD3 asks and the Charter withholds. No number invented, no round number defaulted, and no number back-derived from the workflow description.

**Q2 (OD3, blocks Sprint 5's Line 3 independence):** who or what executes Line 3? It must not share an identity or data path with Line 1 or Line 2. Either supply a headcount that includes a distinct Line 3 instance, or state that Line 3 is human or external for v1.

**Q3 (A2, blocks nothing yet, but needs a dated decision before Sprint 4):** the provisioned stack is not the assumed stack. See **X6**. Recommend re-scoping A2 in the Ratification Log rather than either rebuilding on FastAPI or silently substituting.

---

## 6. Where OD1, OD2, or OD3 status affects whether a sprint can be called done

| # | Sprint | Item | OD | Effect on "done" |
|---|---|---|---|---|
| 1 | S1 | Sequence guard, return path, audit row ordering | — | **Not gated.** Charter-level invariant, independent of all three ODs. |
| 2 | S2 | T5 executor is human-primary | OD1 | Done for Phase 0 under the Entry 007 provisional value. **Not done for production** until OD1 is ratified at Charter level. |
| 3 | S2 | HumanOverride path and the Line 2 → Line 1 permission matrix | OD1 | Same. The matrix's shape is an OD1 answer; it ships flagged. |
| 4 | S2 | Four-eyes evaluator, `FOUR_EYES_MODE = line_separation` | OD2 | Done for Phase 0. **Not done for production** until OD2 is ratified. |
| 5 | S2 / S3 | "Zero articles bypass review independence" acceptance criterion | OD2 | Testable now, but the criterion only *means* independence if OD2 holds. **The Charter does not list it as an unconditional criterion at all (X11).** Recorded as provisionally satisfied, never as ratified, never as unconditional. |
| 6 | S3 | Line-assignment board filter | OD1, OD2 | Implementation not gated; the filter's governance meaning is. Ships either way. |
| 7 | S1 / S2 | Line 1 executor roster — one agent across gates, or one per gate | **OD3, raised in severity by X12** | **Now blocks earlier than revision 1 assumed.** Sprint 1 can seed and transition with a single identity for demo purposes, but Sprint 2 cannot fix the executor model without knowing whether distinct-agent-per-gate is required. See Q1. |
| 8 | S4 | Agent-failure reassignment to another Line 1 agent (Addendum §3.4) | **OD3** | **Blocked.** Cannot be built or tested without a real headcount. Sprint 4 is done-with-exception; see Q1. |
| 9 | S5 | Line 3 executor identity distinct from Line 1 and Line 2 | **OD3** | **Blocked.** See Q2. |
| 10 | S5 | `FLAG_AGENT_ROSTER_MULTI`, per-role agent distribution | **OD3** | Cannot be enabled. Stays off. |
| 11 | S5 | G9 Line-separation verification | OD2 | This is OD2's trip-wire. If it fires, item 12 applies. |
| 12 | S6 | Entire sprint | OD1, OD2, OD3 | **Cannot be called done at all** while any of the three is unratified. Plus G10, plus the Entry 007 §3 gaps. |
| 13 | All | Production go-live | OD1, OD2, OD3 | Gated. Phase 0 is not. Confirmed at source: the Charter defines Open as "blocks sign-off until answered." |

### The OD2 stop condition, stated once, precisely

Only one of the three ODs is a pre-launch stop, and only in one direction. If OD2 resolves **negatively** — Line separation fails to hold, e.g. agents in different Lines produce identical judgments from shared training data (Charter OD4 branch 2, as quoted in Addendum §2.3, Blueprint §2.2, and Business Case v2.2) — then:

- **Production halts.** This is a stop, not a backlog item.
- **Downstream planning halts** for: the four-eyes evaluator (S2), the "zero independence bypass" criterion (S2/S3), `judgment_independence_status` as an independence claim, the Line-assignment filter's governance meaning (S3), and Line 3's independence model (S5). None of these has a valid fallback, because the Addendum retired the `contingent_on_OD2` and `blocked` field values on the strength of OD2 resolving affirmatively.
- **OD4 reopens** — Proposer/Critics/Judge must be re-evaluated before shipping.
- **What does not halt:** the sequence guard, the data model, the audit log, the board, and publication. Those are gate-sequence and traceability invariants, independent of the independence question.

As of Entry 007 (2026-08-16), OD2 has **not** resolved negatively; it is resolved affirmatively and held provisional for Phase 0. Planning proceeds. The trip-wire is item 10.

---

## 7. Conflicts found

Ordered by build impact. Nothing here was silently resolved in favour of whichever reading was easier to build.

### X0 — The Project Charter was not supplied — **CLOSED on revision 2**

**Original finding (revision 1):** the Charter, named as source of truth and the first document to read, was not in the supplied file set, so every Charter-derived claim in this plan was second-hand — the exact "trust a citation because it has a line number" failure mode this project has forbidden since Entry 001.

**Closed 2026-08-16:** the Charter was supplied and is committed at `docs/source/project-charter-v1.md`. Reading it directly confirmed the governing rule at source rather than by corroboration: OD1, OD2, OD3 all `Status = Open`, under a category definition that reads "blocks sign-off until answered"; OD4 branch ② names an OD2 negative resolution as a pre-launch blocker "at any point, including before v1 ships"; and the headcount is "withheld pending OD3."

**What closing it cost:** two conflicts that were invisible while the top document was being read through the ones beneath it — **X11** and **X12** below. Both are cases where a lower document is more permissive than the Charter, and on both the Charter governs. This is the argument for keeping the governing set complete and in-repo rather than citing it by version.

### X11 — The lower documents made a Charter-level open question into an unconditional criterion (new, high severity)

The Charter lists exactly one zero-bypass success criterion, and hedges it explicitly:

> Zero articles bypass a review *sequence* (independence of judgment, OD2, still open)

The Addendum §1, Blueprint §8, and Business Case each state a **second** criterion the Charter does not contain: "Zero articles bypass review **independence** (four-eyes at Line boundaries: **unconditional** — satisfied by Line separation per Three Lines Model)."

So a question the Charter marks Open, and describes as "load-bearing: every 'zero bypass' claim below is only as true as this answer," was converted downstream into an unconditional, already-satisfied acceptance criterion. **The Charter governs.** Independence cannot be an unconditional criterion while OD2 is Open at Charter level.

This is the same overclaim pattern the project has now caught four times — v1.1 (D1–D4 labelled "Ratified"), v2.0 (OD3 "Resolved"), v2.1 (OD3 "Resolved" again), and now OD2's success criterion. The first three were caught on decision *status*; this one hid in a *success criterion*, which is why it survived three review passes.

**Build impact:** the enforcement code does not change — `INDEPENDENCE_BYPASS_TOLERANCE` stays 0 and four-eyes is still enforced at T5/T6. What changes is the claim made about it. No sprint may report "zero independence bypass" as satisfied without the pending-OD2 qualifier, and no acceptance test may be marked green on that criterion in an unqualified way.

### X12 — Charter says distinct agent per gate; Addendum permits one agent across gates (new, high severity)

Charter, "The one workflow (must work v1)":

> it moves through four review gates, **each executed by a distinct agent** or the Chief Editor

Addendum §2.2 says the four Line 1 roles are "combinable into fewer agents"; §3.4 and §6.3 say the same agent may execute adjacent Line 1 gates, and that this is the standard rule rather than an exception; Blueprint §2.1 says "Same agent may hold multiple Line 1 roles."

These do not agree. Business Case v2.2's own precedence note settles which kind of conflict this is: "Where the Charter and Addendum conflict on **operating model**, the Charter governs; where they conflict on **build mechanics**, the Addendum governs." Who executes which gate is operating model. **The Charter governs.**

**Build impact, and a correction to revision 1 of this plan:** revision 1 set `LINE1_AGENT_ROSTER` to a single combined Line 1 identity, citing the Addendum's "combinable" language. That default is **withdrawn**, not defended — it rested on a lower document contradicting a higher one, which is the thing this plan is supposed to catch. The roster is now UNSET and the question routes to the Chief Editor (Q1).

Note carefully what is *not* concluded here. "One distinct agent per gate" would imply at least four Line 1 agents. That inference is **not** drawn, because it is precisely the headcount question OD3 asks and the Charter explicitly withholds. A number derived from the workflow sentence would still be an invented number.

**Interaction with OD2:** this also sharpens OD2. The Charter's OD2 asks whether "a distinct agent provide[s] distinct judgment sufficient to satisfy four-eyes" — a question about *distinct agents*. The Addendum answered a different question, whether *Line separation* satisfies four-eyes, and then retired agent-instance distinctness as an enforcement mechanism entirely (§6.3, "Retired from v1.3"). That may well be the better answer, but it is a substitution of the question, made below the level at which the question was asked. Flagged for the Chief Editor; not resolved here.

### X1 — OD3 status: Addendum and Blueprint say Resolved; Business Case v2.2 and the governing rule say Open

Addendum §2.4 and Blueprint §2.4 both record OD3 as `Resolved? = Yes`. Business Case v2.2 reverted it to `Open — framework accepted, exact count deferred`, `Resolved? = No`, noting this is the **third** time the overclaim has been caught on this item.

Strict precedence (Addendum > Business Case) would award this to "Resolved." That is the wrong answer on the facts: the Addendum resolves a *framework*, and OD3 asks for a *number*. The Business Case is also the later document — Addendum v1.4 was written against Business Case v2.**1**, before the v2.2 correction existed. The governing rule holds OD3 Open.

**Build impact: none, either way** — unratified in all readings, config-driven, no number invented. **Flagged because precedence alone gives the wrong answer here**, and that is worth the Chief Editor knowing. Recommend correcting the Addendum §2.4 OD3 row to match Business Case v2.2's scope correction. Chief Editor's call, not made here.

### X2 — Pipeline sequencing: Business Case implies Chief Journalist before Line 2; Addendum puts Line 2 at T5

Business Case v2.2 line 50 describes "Line 1 gates (Investigator, Journalist, Chief Journalist) → the Line 2 accountability check → publish." Addendum §3.1 specifies T5 (Drafted → Reviewed, Line 2) **then** T6 (Reviewed → Approved, Line 1 Chief Journalist).

**Resolution: the Addendum governs** (higher precedence, and it flags this itself at line 172 and §15 as a known sync gap). Build T5 before T6. The repo's `ARCHITECTURE.md` flow happens to match the Addendum order — the one place the repo pack agrees with the governing documents on sequencing.

### X3 — Repo state machine omits three Addendum states and collapses two gates

`0001_init.sql` line 1 defines 8 states. The Addendum §4.1 defines 10.

| Repo state | Addendum equivalent |
|---|---|
| `logged` | `Discovered` |
| `reported` | `Logged` |
| — | **`Validated` — missing** |
| `investigated` | `Investigated` |
| `journaled` | `Drafted` |
| `senior_reviewed` | `Reviewed` |
| `chief_approved` | `Approved` |
| `published` | `Published` |
| `rejected` | `Rejected` |
| — | **`Needs Revision` — missing** |

Two consequences. First, the repo collapses Addendum T2 (Logged → Validated) and T3 (Validated → Investigated) into one transition — so under the Addendum's own "no article can skip a state" invariant, **every seeded article has skipped a gate.** Second, with no `Needs Revision` state there is no T8/T8a return path, no `revision_reason`, no `revision_target_state`, and no return-count escalation — an entire branch of the specified workflow is absent.

**Resolution: the Addendum governs.** Migration `0002` adds the full ten-state enum with the mapping above.

### X4 — The committed seed data encodes a four-eyes violation (highest build-impact conflict)

Three places in the repo make the Line 2 gate agent-executed:

- `docs/ARCHITECTURE.md`: "5. Senior Journalist agent → reviews → state: `senior_reviewed`"
- `docs/AGENTIC_LAYER.md`: "Advance through Senior Journalist review gate" listed under *Executable-After-Approval (medium risk — light approval)*
- `supabase/migrations/0001_init.sql` line 131: `'journaled' → 'senior_reviewed', 'senior_journalist', 'agent'`

Every governing document requires the opposite. Addendum §3.1 T5: Line 2, **Human-primary (Chief Editor)**, agent-assisted. Addendum §6.1, §6.3, Blueprint §2.3, Business Case line 106: Line 2 is human-primary, the agent is `assisting_agent_id` metadata, and the accountability decision rests with the human. Addendum §3.4: an actor holding both Line 1 and Line 2 roles is **forbidden** — a hard requirement of the Three Lines Model.

**This is live in a committed migration, not just in prose.** The "zero articles bypass review independence" criterion fails today against the shipped seed. Corrected in `0002` (Sprint 1) and enforced in code (Sprint 2). **Resolution: the Addendum governs.**

### X5 — Repo schema has none of the Line or independence fields

`workflow_transitions` has `gate_role`, `actor_type`, `reason`. It lacks `line_assignment`, `judgment_independence_status`, `event_type`, `agent_id`, `agent_run_id`, `supervising_human_id`, `assisting_agent_id`. `actor_type` has no `system` value, though the Addendum makes T7 and T10 System executors.

Without these: AT-040, AT-043, AT-044, AT-070 through AT-074 cannot pass; the Line-assignment board filter named in all three documents cannot be built; and four-eyes cannot be evaluated at all, since Addendum §6.3 keys enforcement on `line_assignment`, not on `actor_id`. **Resolution: the Addendum governs.** Added in `0002`.

### X6 — Assumed stack A2/D1/D2 versus the provisioned repo

A2, D1, and D2 assume React/Next.js + **FastAPI (Python)** + **PostgreSQL self-hosted or separately provisioned** + Supabase Auth **for auth only** + Redis/Celery for the publication queue. Blueprint line 710 is explicit: "database is **not** Supabase-hosted by default."

The provisioned repo is Next.js only, on Supabase-hosted Postgres, on Vercel — no Python service, no queue.

A2 is an **Assumed** default, unratified, and explicitly overridable; ITIL 4 "start where you are" argues for keeping what is already provisioned and working. But that is a decision, not an observation, and it belongs in the Ratification Log rather than in a silent substitution.

**Lowered in severity on revision 2:** now that the Charter is readable, its Assumed table contains exactly one row — A1, the five-gate pipeline. A2 through A7 originate in the Addendum §2.1, not the Charter. Re-scoping the stack is therefore an Addendum-level Ratification Log entry and touches no Charter text at all, which makes Q3 a smaller decision than it looked on revision 1.

**Recommendation (Chief Editor's call, Q3):** re-scope A2 to A2′ — Next.js route handlers and server actions on Supabase Postgres, publication retry via a database-backed job table plus scheduled invocation instead of Redis/Celery. Blocks nothing before Sprint 4; the data model and pipeline logic are stack-agnostic. **Do not** rebuild on FastAPI without a dated decision, and **do not** treat the provisioned stack as ratified because it happens to be what exists.

### X7 — Demo-first and permissive RLS versus unconditional independence

`CLAUDE.md` rule 6 mandates no login wall in v1; `0001_init.sql` lines 71–94 grant `for all using (true) with check (true)` on every table, `workflow_transitions` included. So today: any anonymous visitor can execute any gate, and the append-only audit promise in `SECURITY.md` is not enforced — UPDATE and DELETE are both permitted.

`CLAUDE.md` is a repo convention file. It is **not** in the precedence hierarchy; the four governing documents are. Nothing in those four requires a login wall in Week 1, so demo-first is not itself a conflict — but unauthenticated executors and a mutable audit log are, against "every transition logged with executor identity" and "zero articles bypass review independence," both unconditional.

**Resolution:** keep the demo-first UI. Add explicit actor context so every transition carries an identity and a Line (Sprint 2), revoke UPDATE/DELETE on `workflow_transitions` in `0002` (Sprint 1), and place Sprint 6's auth lock-down before any real, non-demo use. **Stated plainly rather than passed silently:** until Sprint 6, independence is *demonstrable but not enforceable* against an anonymous actor. That is a known and accepted Phase 0 limitation, not a satisfied criterion.

### X8 — Stripe scaffolding versus the v1 no-monetization scope

The repo ships `app/api/stripe/checkout`, `/portal`, `/webhooks`, `lib/stripe/`, and seven Stripe env keys. **"No monetization features" is a Charter-level v1 exclusion**, not just a Business Case one — confirmed on revision 2 in the Charter's "Deliberately NOT in v1" list. The Business Case and the repo's own `docs/PRD.md` non-goals agree. Adjacent but distinct: Entry 006 §13 removed fundraising from the editorial workflow entirely, pending separate legal and compliance review.

Template residue, not a governance decision. **Remove in Sprint 0**; do not wire, do not add the env keys.

### X9 — Git identity conflict (operational, no risk until the first commit)

The instruction sets `robertanct@yahoo.com.sg`. `CLAUDE.md` pins `241258103+robertaoai@users.noreply.github.com` and warns that Vercel verifies every commit author's email against the GitHub account and blocks the deploy otherwise. Entry 006's refined prompt also used the noreply address.

The instruction was applied as given — it is the Chief Editor's call. **If `robertanct@yahoo.com.sg` is not a verified email on the `robertaoai` GitHub account, the first push will be rejected at deploy.** Nothing is at risk this turn: no commit is being made. Worth confirming before Sprint 0's first commit.

### X10 — The Addendum's own Sync Gap Register is stale (housekeeping)

Addendum v1.4 §0 and §15 record Blueprint v1.2 as stale and list 15 required updates; the supplied Blueprint is v1.3 and has made them. The Addendum header also cites Business Case v2.1, while the supplied Business Case is v2.2. No build impact — logged so the next Addendum revision closes it.

### Reverse-engineering safeguard — one watch item, no violation

Nothing in this plan requires reverse-engineering a third party's proprietary UI, code, or workflow. WordPress REST and LinkedIn are consumed through published APIs and documented OAuth scopes.

**Watch item:** "formatted post content generated" for LinkedIn (Addendum T10, Blueprint §6) must be built from LinkedIn's *documented* constraints — plain text, hashtags, 3000-character limit, already captured in Addendum §4.4 — and verified against LinkedIn's developer documentation. It must **not** be built by inspecting or replicating LinkedIn's editor UI or its proprietary rendering behaviour. Forward-engineered alternative, if fidelity ever looks insufficient: build to the published API contract and accept the documented limits, rather than matching observed rendering.

---

## 8. Config-driven versus fixed by the Charter

### Fixed — not config, not a flag, not adjustable without a Charter-level act

These come from the Blueprint's Meaning Invariance Lock and the unconditional criteria that every governing document repeats. Making any of them adjustable would defeat the point of the system, which the Business Case describes as a compliance-absence problem rather than a dashboard problem.

- Gate-sequence enforcement — no article skips a state, ever
- Source traceability — original URL, author, date, platform; `source_url` immutable once logged
- Every transition logged with who, when, and why
- Audit log append-only; revision reasons cannot be deleted
- The same actor cannot hold both a Line 1 and a Line 2 role (Three Lines Model hard requirement)
- Topic taxonomy integrity — at least one topic per article
- Publishing readiness — all gates passed, tags assigned, at least one publication target
- `MockPublished` never satisfies the Published rule
- OD4 stays rejected for v1 — no Proposer/Critics/Judge built
- Fundraising stays out of the editorial workflow (Entry 006 §13, Entry 007)

### Config-driven — adjustable without a redeploy, changeable without a rebuild

- Every number in §3: success targets, gate count, scoring weights, saturation points, decay windows, priority bands, SLA dwell times, retry count and backoff, retention days, the 48-hour degraded-mode threshold
- OD1-derived: `LINE2_EXECUTOR_TYPE`, `LINE2_MAY_EXECUTE_LINE1_GATES`, the Chief Editor override rows of the permission matrix
- OD2-derived: `FOUR_EYES_MODE`, `JUDGMENT_INDEPENDENCE_STATUS_VALUES`, `FLAG_FOUR_EYES_LINE_SEPARATION`
- OD3-derived: `LINE1_AGENT_ROSTER`, `LINE3_EXECUTOR_IDENTITY`, `FLAG_AGENT_ROSTER_MULTI`, and `AGENT_HEADCOUNT` — which is **UNSET and must stay unset** until the Chief Editor supplies a number
- A1–A7 defaults, all unratified: pipeline shape, stack, publication targets, scoring formula, notification mechanism, retention, intake method
- Seed data: topics, sources, publication targets, reliability tiers
- Every Entry 007 S1–S9 row, each behind its own flag

### The distinction that matters

Config-driven does not mean uncommitted, and provisional does not mean unratified-forever. Every value in the second list carries an entry in `docs/CONFIG_LOG.md` naming its source and the OD it depends on, so that when a decision is ratified the change is a config edit plus a Ratification Log line — never a code change or a rebuild. That is the whole reason nothing tied to OD1, OD2, or OD3 is written as a literal.

---

## 9. Changelog

- 2026-08-16: Entry created. Cloned `robertaoai/my-editorial-app` at `53ace36`; set local git identity per instruction (see X9). Read the Addendum v1.4, Blueprint v1.3, and Business Case v2.2 in full and verified Blueprint line 719 and Addendum line 768 verbatim; independently re-verified Entry 007's S7 EMS correction against Addendum §6.4 lines 435–436 rather than against the EMS file's own citation. **Logged X0: the Project Charter, the highest-precedence document and the first one instructed to be read, was not supplied this turn — all Charter claims in this plan are second-hand.** Produced a seven-sprint plan (S0–S6) targeting the success scenario, with every numeric target extracted into a named config variable and every OD1/OD2/OD3-derived value behind a flag. Recorded twelve points where OD status affects sprint completion and stated the OD2 pre-launch stop condition and its downstream halt list. Logged eleven conflicts (X0–X10) between the governing documents, the repo, and the governing rule — including X4, a four-eyes violation already committed in `0001_init.sql` seed data, and X3, a state machine missing three Addendum states. `AGENT_HEADCOUNT` left UNSET: no number exists in any of the four documents, none invented, none defaulted to a round figure. No code written, no migration applied, no env pulled, no commit, no push.
- 2026-08-16 (revision 2, same day): Project Charter v1 supplied and committed to `docs/source/`. **X0 closed** — the governing rule, the OD2 pre-launch stop, and the withheld headcount are now confirmed at source rather than by corroboration through the three lower documents. Reading the Charter directly surfaced two conflicts that were invisible while it was only being quoted: **X11**, the lower documents converted the Charter's Open independence question into an unconditional success criterion (the same overclaim pattern caught three times before on decision status, this time hiding in a success criterion); and **X12**, the Charter requires a distinct agent per review gate where the Addendum permits one agent across adjacent Line 1 gates. On both, the Charter governs. **Withdrew revision 1's `LINE1_AGENT_ROSTER` default** of a single combined Line 1 identity — it rested on the Addendum contradicting the Charter, which is the thing this plan exists to catch — and set it UNSET pending Q1. Re-labelled `INDEPENDENCE_BYPASS_TOLERANCE` from unconditional to provisional; enforcement is unchanged, the claim made about it is not. Raised OD3 from blocking two items to three, adding the S1/S2 executor roster. Lowered X6's severity (A2 is Addendum-level, not Charter-level — the Charter's Assumed table has one row) and raised X8's (no-monetization is a Charter-level exclusion). Still no code written, no migration applied, no env pulled, no push.
