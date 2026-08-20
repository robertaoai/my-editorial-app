# V1 Artifact Inventory — What Must Exist

**Date:** 2026-08-18
**Status:** Planning only. No build authorized.
**Purpose:** Every file the v1 plan assumes will exist, its phase, and whether it exists today. Verified by direct filesystem check, not by reading the plan.
**Companions:** `V1-DECISION-REGISTER.md` (approvals), `V1-BUILD-SPEC.md` (sequence).

---

## 1. Verified current state

> **Propagation scope (`D-54`).** This document answers *"what must exist."* A decision reaches it **only when it creates or retires a file.** Register-governance findings — `G55` and `G56` (index and solve-sequence drift), `D-54` itself — change no artifact and are **recorded here as not affected**, not omitted by oversight. `G33b` reaches this document through `D-52`, which is cited on every `SPECS` row below.

| Artifact | Referenced by | Exists |
|---|---|---|
| `lib/config/build-config.ts` | S0 | ❌ |
| `lib/config/flags.ts` | S0 | ❌ |
| `docs/DECISION_LOG.md` | S0, and every provisional value's traceability | ❌ |
| `docs/CONFIG_LOG.md` | S0, `§10` config-vs-fixed rule | ❌ |
| `supabase/migrations/0002_*.sql` | S0 draft, S1 apply | ❌ |
| `docs/specs/SPECS-VERIFICATION-APPARATUS.md` | `D-56` — `R3` specification, Project Scope ⚙ | ✅ |
| Test runner + `__tests__/` | `R3`, `NFR-04` | ❌ **specified, not installed** (`D-56`) |
| `.github/workflows/` CI | `R3`, `TC6` | ❌ **specified, not installed** (`D-56`) |
| `bun.lockb` | `G59` — CI reproducibility | ❌ **needs bun to generate** |
| Concurrent-edit detection check | `C-14`/`G11` — `D-58`, ships with `R3` | ❌ **specified, not installed** — four proven checks, unbundled |
| BCP observability surface | `C-13`/`G60` — condition on `D-57`, S3 | ❌ **no `FR` yet** — candidate `FR-14`, lands in `Modular_PRD` §5 per `D-29` |
| P0-EVR project charter | `G7a`, T3 | ❌ |
| P0-EVR PRD | `G7`, T3 | ❌ |
| 14 manual PoC templates | Board proposal Phase EB-1 | ❌ |
| `supabase/migrations/0001_init.sql` | applied baseline | ✅ **never edit** |
| `lib/stripe/`, `lib/supabase/` | — | ✅ *(Stripe removed in S0 per `X8`)* |
| `docs/fn-specs/FN-GATES-01-05.md` | `G33a`, `FR-01`–`FR-05` | ✅ |
| `docs/fn-specs/FN-PUBLICATION-09-10-13.md` | `G33a`, `FR-09`/`FR-10`/`FR-13` | ✅ |
| `docs/fn-specs/FN-AUDIT-VISIBILITY-07-08.md` | `G33a`, `FR-07`/`FR-08` | ✅ |
| `docs/fn-specs/FN-EXCEPTIONS-06-11-12.md` | `G33a`, `FR-06`/`FR-11`/`FR-12` | ✅ |
| `docs/specs/SPECS-TRANSITION-ENFORCEMENT.md` | `D-52`/`D-53` — **S1 precondition** | ✅ |
| `docs/specs/SPECS-BOARD-QUERY.md` | `D-52`, S3 | ❌ |
| `docs/specs/SPECS-PUBLICATION.md` | `D-52`, S4 *(five components)* | ❌ |
| `docs/specs/SPECS-EXCEPTIONS.md` | `D-52`, S5 | ❌ |
| `docs/graph-fragments/` | `G51` — curated graph layer, rebuild source | ✅ |
| `X3` eight-row state backfill mapping | `G57` → `D-55`, S1 input | ✅ *(as data in `V1-DECISION-REGISTER.md` §5.14p — no separate file; a second copy would be a restatement, `D-54`)* |

**No broken internal document links** — the docs are self-consistent. The gaps are artifacts that were planned but never created, not references that dangle.

---

## 2. Gaps found

### `G25` — `docs/v1/` is orphaned

`docs/README.md` contains **no reference** to `docs/v1/`, and indexes no documents by link at all. Two operative documents now sit in a directory nothing points to.

This compounds a known problem: `CLAUDE.md` and `AGENTS.md` both open by directing any agent to the **plan pack** as *"a complete, correct plan"* — which `D5` records as diverging from the governing set. `A7`/`G5` already schedules repointing them. **If that edit lands without naming `docs/v1/`, the newly operative documents stay invisible to the next agent**, and the first thing a fresh session reads will still be the stale pointer.

**Fix:** fold `docs/v1/` into the same `A7`/`G5` edit — `CLAUDE.md`, `AGENTS.md`, and `docs/README.md` all name `docs/v1/V1-DECISION-REGISTER.md` and `V1-BUILD-SPEC.md` as operative. **Phase: T1.**

> **Phase corrected 2026-08-18.** This was first recorded as **T0** *"joining the existing runbook Step for `G5`"*. Both halves were wrong, verified by direct check: the T0 runbook contains **no `G5`/`A7` step at all** — its seven steps cover `G4`, `G8`, `G14`, and audit Steps 1–3 only — and `G5`/`A7` is a **T1** item in the register, because it needs the `QE` decision *(extend `A7`, or open a separate register row)*. An item that joins a T1 edit cannot be a T0 item.

### `G26` — the EMS audit is cited as justification but not retained

`Modular_PRD.md` v1.1 and the sprint plan's `A20` both cite `EMS-Modular-PRD-Gap-Analysis.md` as the source of substantive changes — a corrected miscount, three new decision requests (`Q10`, `Q11`, `Q12`), and several routed findings. **That file is not in the repository.**

Under the audit model this is a live inconsistency: `Step 2` states an issued record is never superseded silently, and the whole CPA framing rests on an independent party being able to re-perform the work from retained evidence. A changelog entry justified by a document that does not exist is unverifiable — the reviewer must take the citation on trust, which is the thing an audit trail exists to remove.

**Fix:** either retain the audit report under `docs/governance/` as received evidence, or annotate both citations to record that it was an external artifact not retained and state what *is* retained in its place (the routed findings `A20`–`A28`, which are in the sprint plan). **Do not delete the citations.** **Phase: T1** *(documentation)*.

### `G27` — draft migration `0002` has no safe location

S0 says *"Draft `supabase/migrations/0002_three_lines.sql`. **Write it, do not apply it.**"*

`supabase/migrations/` is the directory Supabase tooling treats as the apply set. A file placed there is a file that can be applied by a routine command, a CI step, or another agent reading the folder's convention. The instruction "do not apply" is a note in a journal, not a property of the location.

Given `NFR-02` makes `workflow_transitions` append-only and the S1 window carries **eight irreversible decisions**, an accidentally applied draft is materially expensive — and this is precisely the class of risk the S1 one-pass rule exists to prevent.

**Fix:** hold the draft outside the apply path until every S1 window decision is settled (`V1-DECISION-REGISTER.md` §5.15 Stage 4 — count not restated, `D-54`) — e.g. `docs/v1/drafts/0002_three_lines.draft.sql` — and move it into `supabase/migrations/` only as the act of authorizing S1. **Phase: S0** *(location decision, no build)*.

### `G28` — the 14 manual templates are the real gate on the POC lane

`G7a` is recorded as *"charter the manual P0-EVR lane — no build dependency."* True, but incomplete: chartering authorizes the lane; it does not make it operable. The board proposal's Phase EB-1 names **14 templates** the lane cannot run without — Input Card, Claims Ledger, Evidence Map, Uncertainty Register, Counterargument Brief, Statement Classification, Explainable Draft, Client Decision Report, disposition record, publication-candidate record, two-folder manifest and exclusion checklist, originality-search record, exclusivity-window record, post-window decision record.

None exists. So the operational blocker on first revenue is not the charter — it is fourteen documents nobody has been assigned.

**Fix:** add template creation as an explicit T3 work item with an owner, sequenced *after* the charter and *before* the first engagement. It is documentation work, not a build. **Phase: T3**.

### `G29` — no file-creation ownership per sprint

`V1-BUILD-SPEC.md` states what each sprint *does* but never names the files each sprint *creates*. "S0 done" is therefore ambiguous — it can be argued from the prose without the artifacts existing.

**Fix:** attach §1's inventory rows to their sprint's Definition of Done, so a sprint is complete when its named artifacts exist and its tests pass, not when its description has been satisfied in prose. **Phase: T1** *(documentation)*.

### `G30` — no output contract in `CLAUDE.md` or `AGENTS.md`

Both files carry binding build rules, deploy rules, and commit-identity rules. **Neither states an output contract.** So the decision-summary format — the thing that makes an analysis actionable rather than merely complete — depends entirely on the agent remembering it each turn. Nothing in the repository requires it.

An unenforced rule degrades predictably: it holds while attention is on it and lapses when attention moves to the next piece of analysis.

**This gap was identified, proposed as a fix, and then omitted from the first version of this very document** — one turn after being described. That is not an argument against the fix; it is the strongest available evidence for it. A rule that depends on memory failed in the document written to catalogue the failures.

**Proposed text**, to land in the same `A7`/`G5` edit as `G25`:

> **Output contract.** Every analysis response ends with an Approve / Approve-with-conditions / Defer / Reject table in the house vocabulary. Each condition names its follow-up phase. Rationale stays in the linked document, not the table.

**Why it belongs in the repo rather than a journal:** `CLAUDE.md` and `AGENTS.md` are the first files any agent reads, and **two** agents are editing this repository — Claude and Codex. A convention held in one session's memory does not reach the other. **Phase: T1** *(joins `G25` in the `A7`/`G5` edit)*.

### `G31` — T1 has no execution runbook

T0 has six items and a full runbook with exact text, version discipline, and a verification pass. **T1 now carries twenty items and has no procedure at all** — including four that touch governed documents (`G23`, `G24`, `G26`, `G29`) and two that touch the files every agent reads first (`G25`, `G30`).

The phase with the most items, the most files, and the widest blast radius is the one with the least procedure.

**Fix:** produce a T1 execution runbook on the same pattern as T0's — target file, current text, proposed text, version discipline, verification. **Phase: T1** *(and it is the first thing T1 should produce)*.

---

## 3. Draft fixes — consolidated

| # | Fix | Phase | Type |
|---|---|---|---|
| `G25` | Name `docs/v1/` in `CLAUDE.md`, `AGENTS.md`, `docs/README.md` — folds into the `A7`/`G5` edit | **T1** *(corrected from T0)* | Documentation |
| `G26` | Retain the EMS audit under `docs/governance/`, **or** annotate both citations to record it as unretained and name what stands in its place | **T1** | Documentation |
| `G27` | Hold draft `0002` outside `supabase/migrations/` until the S1 window decisions are settled | **S0** | Location decision |
| `G28` | Add the 14 PoC templates as a T3 work item with an owner, after the charter, before the first engagement | **T3** | Documentation |
| `G29` | Attach the artifact inventory to each sprint's DoD | **T1** | Documentation |
| `G30` | Add the output contract to `CLAUDE.md` and `AGENTS.md`, in the same edit as `G25` | **T1** | Documentation |
| `G31` | Produce a T1 execution runbook on the T0 pattern — **T1's first deliverable** | **T1** | Documentation |

**All seven are documentation or placement decisions. None requires code.**

## 4. Effect on existing phases

| Phase | Change |
|---|---|
| **T0** | unchanged — **6** *(`G25` moved out; it joins a T1 edit)* |
| **T1** | 16 → **20** (`G25`, `G26`, `G29`, `G30`, `G31`) |
| **T2** | unchanged — 8 |
| **T3** | 5 + Board packet → **6 + Board packet** (`G28`) |
| **S0** | gains `G27`'s location decision |

**T1 is now the heaviest phase and the only one without a runbook** — which is what `G31` exists to fix, and why it should be T1's first output rather than its last.

### 4.1 One `A7`/`G5` edit, four payloads

`G5`, `G25`, `G30`, and the existing `A7` correction all touch `CLAUDE.md` and `AGENTS.md`. They are **one edit with four payloads**, not four edits:

1. Repoint from the stale plan pack to the governing set *(`A7`, existing)*
2. Cover `AGENTS.md`, not only `CLAUDE.md` *(`G5`)*
3. Name `docs/v1/` as operative *(`G25`)*
4. State the output contract *(`G30`)*

Opening those two files four times is four chances to leave them inconsistent — the same reasoning that made the S1 migration a single design pass.

## 5. Scope limits

Closes no Open Decision. Amends no governing document. Authorizes no code, schema, migration, or deployment. `G26`'s resolution must not delete or rewrite the existing citations — annotation only, per this project's amendment discipline.
