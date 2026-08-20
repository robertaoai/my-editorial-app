# T1 Execution Runbook

**Date:** 2026-08-19
**Status:** Draft for execution. Planning only — no build authorized.
**Fulfils:** `D-21` / `G31` — T1's own first deliverable.
**Scope:** all 23 T1 items. **T0 is complete, 6/6 verified.**

---

## 0. Count correction

`V1-BUILD-SPEC.md` heads this phase *"(20 items)"*. The actual composition is **23**:

| Group | Items | Count |
|---|---|---|
| No dependency, start now | `R3`, `G5`/`QE`, `Q0`, `R2` | 4 |
| Gate later sprints | `Q2`, `Q3`, `Q4`, `Q5`, `Q6`, `Q12` | 6 |
| Governance placement | `QD`, `QC`, `Q8`/`R5`, `R4` | 4 |
| Wording fixes | `G23`, `G24` | 2 |
| Artifact decisions | `D-15`, `D-16`, `D-19`, `D-20`, `D-21` | 5 |
| Specs *(new, `D-29`)* | `G33a`, `G33b` | 2 |

The header was off by one **before** `G33a`/`G33b` were added — 21, stated as 20. Correct it when Step 9 runs.

## 1. Standing constraints

| Rule | Consequence |
|---|---|
| `docs/PRD.md`, the frozen Charter, `0001_init.sql` | **Never touched by this runbook** |
| Amend by annotation, never silent rewrite | Superseded text struck and dated |
| Governed documents carry version + changelog | Bump both, or the edit is invisible |
| **Apply proposed text in full** | `G32` occurred because a runbook's text was applied abbreviated, dropping operative content. **Do not summarise while executing** |

**Nothing here closes an Open Decision, ratifies anything, or authorizes a build.**

## 2. Execution order

```
Step 1  four-payload edit      CLAUDE.md + AGENTS.md      ← highest leverage, 4 days open
Step 2  R3 verification apparatus                         ← precondition for every later DoD
Step 3  Q0 → R2                ratification, close D4
Step 4  wording fixes          G23, G24
Step 5  D-16, D-19             citation + sprint DoD
Step 6  governance placement   QD, QC, Q8/R5, R4
Step 7  decision batch         Q2-Q6, Q12                 ← one Chief Editor sitting
Step 8  G33a  Fn_Specs                                    ← gates S1
Step 9  G33b  SPECS (conditional) + count correction
```

Steps 1 and 2 have no dependencies and may run in parallel. Step 8 is the largest and gates S0→S1.

---

## Step 1 — The four-payload edit *(`A7`, `G5`, `D-15`, `D-20`)*

**Files:** `CLAUDE.md` **and** `AGENTS.md`. Both carry the same defect from `62c8d8c`.

**Why first:** these are the first files any agent reads, three agents now read them, and they have misdirected for four days. `G32` — one agent silently dropping another's operative content — is the first observed harm from this class.

**Four payloads, one edit per file:**

1. **`A7`** — replace *"A complete, correct plan for this app is already committed in `/docs`"* and the plan-pack list. That pack is `D5`: **not in the precedence hierarchy at all.**
2. **`G5`** — apply identically to `AGENTS.md`. It is **not** a Codex addition; it is present in the initial commit and carries the same stale pointer.
3. **`D-15`** — name `docs/v1/` as operative.
4. **`D-20`** — state the output contract.

**Proposed replacement block** *(apply in full to both files)*:

> ## Read this before any work
>
> **Operative documents — `docs/v1/`:**
> - `V1-DECISION-REGISTER.md` — what is decided, conditions, gap dispositions
> - `V1-BUILD-SPEC.md` — what is built and in what order
> - `V1-ARTIFACT-INVENTORY.md` — what must exist
>
> **Governing set, in precedence order:** `docs/PRD.md` *(customer's frozen record)* → `docs/source/project-charter-v1.md` *(frozen)* → `v1-build-readiness-addendum.md` → `blueprint.md` → `business-case.md`. Then `docs/Modular_PRD.md` as the governed spec.
>
> **Intent hierarchy (`D-29`):** `PRD` → `Modular_PRD` → `Fn_Specs` → `SPECS`. A change lands in the tier that owns it, and only that document changes.
>
> **The plan pack** — `ARCHITECTURE.md`, `DATA_MODEL.md`, `AGENTIC_LAYER.md`, `INTELLIGENCE_LAYER.md`, `SECURITY.md`, `TASKS.md`, `TEST_PLAN.md` — was generated at scaffolding from the app name. It is **accurate about the substrate and wrong about governance** (`D5`). It is **not authoritative.**
>
> **Output contract.** Every analysis response ends with an Approve / Approve-with-conditions / Defer / Reject table in house vocabulary. Each condition names its follow-up phase. Rationale stays in the linked document.
>
> **Never edit:** `docs/PRD.md`, `docs/source/project-charter-v1.md`, `supabase/migrations/0001_init.sql`.

**Verify:** `grep -c "complete, correct plan" CLAUDE.md AGENTS.md` → `0` both. `grep -c "docs/v1" CLAUDE.md AGENTS.md` → `≥1` both.

---

## Step 2 — `R3` verification apparatus

No dependency. **Precondition for every later DoD** — until it exists, no sprint citing an AT-id is verifiable.

Add: a test runner (`bun test`, matching `packageManager: bun@1.1.30`), one passing test file, and a CI workflow running typecheck, lint, and tests. `TC6`'s disabled build gates are a **separate** decision — `Q6`, Step 7.

**Verify:** `bun test` exits 0; CI workflow present and green on an empty suite.

---

## Step 3 — `Q0` then `R2`

**`Q0`** — record `A2`'s ratification in Addendum §2.4: `Ratified? = Yes`, a date, an approval artifact. The re-scoping text currently sits in `Resolved?`. Sprint plan calls this *"highest value per minute."*

**`R2`** — depends on `Q0`. Close deviation `D4` properly: amend Blueprint §2.2/§7/D1 and Business Case §A2 off FastAPI, then rewrite `D4` as closed with its open-row fields removed.

---

## Step 4 — Wording fixes *(`G23`, `G24`)*

**`G23`** — `Modular_PRD.md` `US-13`/`FR-13`. Currently *"bypasses T8 entirely."* A binding order bypasses **deliberation**, never **publication**: the notice is still drafted, mirrored to every target, and logged.

**`G24`** — media-SOP remedy ladder. State the mirror boundary: **every channel the business published to**, evidenced by the publication transaction record. Third-party amplification explicitly outside.

---

## Step 5 — `D-16`, `D-19`

**`D-16`** — `EMS-Modular-PRD-Gap-Analysis.md` is cited in `Modular_PRD.md` v1.1 and sprint-plan `A20`, and **is not in the repo**. Either retain it under `docs/governance/`, or annotate both citations to record it as unretained and name what stands in its place (`A20`–`A28`). **Never delete the citations.**

**`D-19`** — attach `V1-ARTIFACT-INVENTORY.md` §1 rows to each sprint's DoD, so a sprint is done when its named files exist.

---

## Step 6 — Governance placement

| Item | Action |
|---|---|
| `QD` | Land the revenue rule in `PSK-06` or sprint-plan §11 so it governs. It currently lives only in a journal file |
| `QC` | Confirm or invert the domain assignment — public root for POC, `chief.` for the anchor |
| `Q8`/`R5` | Route `FB-01`–`FB-08` via the sponsor. Material before S1: `FB-04`, `FB-05`, `FB-02` |
| `R4` | Propagate `PSK-01`–`PSK-10` into traceability map §5 and `Modular_PRD` §7.2 |

---

## Step 7 — Decision batch *(one sitting)*

`Q2` Line 3 executor — external, or state v1 has none. **Not the Chief Editor** (`A23`) · `Q3` publish path — route handler recommended · `Q4` OD2 trip-wire scope · `Q5` retry scheduler · `Q6` re-enable build gates now CI exists · `Q12` (a) Three Lines re-citation, (b) `SEC-01` re-derivation, kept separate.

---

## Step 8 — `G33a`: write `Fn_Specs` *(gates S1)*

**The largest T1 item and the first artifact v1 actually needs.**

Breaks down `Modular_PRD` §5–§7 into feature-level behaviour: `FR-01`–`FR-13`, the NFR set, `AC-01`–`AC-20`. One document per feature or coherent feature group, under `docs/fn-specs/`.

**Per the `D-30` redundancy rule, `Fn_Specs` must be written to be sufficient wherever it can be** — every behaviour fully determined here is a `SPECS` document that never has to exist.

**Sequence within Step 8:** the five gate features first (`FR-01`–`FR-05`), since they carry the S1 window's eight decisions. Board, publication, and exception features follow.

---

## Step 9 — `G33b`: `SPECS`, conditional only

Write a `SPECS` document **only** where `Fn_Specs` cannot determine the implementation. Present candidates — all resolving into schema, none settleable by behavioural description:

- `TR-DM-01`–`06` data contracts
- `TR-API-01`–`04` interface contracts
- The eight S1-window decisions

Each opens with an executive summary: component intent, why it exists, success criteria, and limitations — hardware, libraries, infrastructure. **The tech-stack section is added when the build starts, not now.**

**Also in this step:** correct `V1-BUILD-SPEC.md`'s T1 header from *"20 items"* to **23**.

---

## Step 10 — Verification pass

| Check | Expected |
|---|---|
| `grep -c "complete, correct plan" CLAUDE.md AGENTS.md` | `0` both |
| `grep -c "docs/v1" CLAUDE.md AGENTS.md` | `≥1` both |
| `grep -ci "output contract" CLAUDE.md AGENTS.md` | `≥1` both |
| `bun test` | exits 0 |
| `ls .github/workflows` | CI present |
| `ls docs/fn-specs/` | non-empty |
| `grep -c "23 items" docs/v1/V1-BUILD-SPEC.md` | `1` |
| `git status --short` | `PRD.md`, Charter, `0001_init.sql` untouched |

**Then:** update `V1-DECISION-REGISTER.md` §5.1 dispositions for every gap this runbook closed.

## 11. Scope limits

Closes no Open Decision. Amends no governing document beyond the annotations named above. Authorizes no code, schema, migration, or deployment. `G33b` remains conditional — a `SPECS` document that duplicates `Fn_Specs` violates `D-30` and must not be written.
