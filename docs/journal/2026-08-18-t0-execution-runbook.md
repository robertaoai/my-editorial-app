# T0 Execution Runbook — Do-Now Documentation Fixes

**Date:** 2026-08-18
**Status:** Planning only. Proposed text for review before execution. No code, no migration, no schema.
**Scope:** The six `T0` items in `2026-08-18-consolidated-gaps-and-open-questions.md` §3 — every one documentation-only, decision-free, and blocked by nothing.
**Estimated effort:** one sitting. Four files, seven edits, one commit.

## 0. Standing constraints that apply to every step

| Rule | Consequence here |
|---|---|
| `docs/PRD.md` is the customer's frozen record | **Never touched by this runbook** |
| `docs/source/project-charter-v1.md` is frozen | **Never touched by this runbook** |
| `supabase/migrations/0001_init.sql` is never edited | **Never touched by this runbook** |
| Amend by annotation, never silent rewrite | Superseded text is struck and dated, not deleted |
| Every governed document carries a version and changelog | Bump both, or the edit is invisible to the next reader |

**Nothing in this runbook closes an Open Decision, ratifies anything, or authorizes a build.**

## 1. Version drift found during preparation

`docs/governance/requirements-traceability-map.md` declares **`Version: v1.1`** in its header while its own changelog already contains a **`2026-08-17 v1.2`** entry (added by the Codex scope-normalization commit `e3fa9b7`, which bumped the changelog but not the header).

This is the same class of defect the project has repeatedly caught: a fact restated in two places, one updated and one not. **Step 5 corrects it** while that file is open, rather than opening it twice.

## 2. Execution order

Ordered so that a key exists before anything references it, and so each file is opened exactly once.

```
Step 1  media-industry-sop-fallback-implementation-plan.md   → register PSK-10
Steps 2-4  Modular_PRD.md                                    → one v1.6 bump covering three edits
Step 5  requirements-traceability-map.md                     → G4 + version-drift fix, v1.3
Step 6  board-proposal-professional-evidence-review-poc.md   → G8
Step 7  verification pass
```

---

## Step 1 — Register `PSK-10` *(closes `GA8`)*

**File:** `docs/governance/media-industry-sop-fallback-implementation-plan.md`, §8, the second table (the one beginning `| Key | Project Scope item | Purpose |`, currently holding `PSK-07`–`PSK-09`).

**Why first:** Steps 2 and 3 reference `PSK-10`. Registering it first means neither forward-references a key that does not exist.

**Action:** append one row.

```
| PSK-10 | Immutable audit reporting and report reproducibility | Report identity, as-at timestamp, template and rule-set versions, frozen data snapshot, insert/read-only retention, and an auditable disposal record |
```

**Then add, immediately below that table:**

> `PSK-10` added 2026-08-18 from the CPA-style audit model. No Customer Request asks for audit reporting; without a Project Scope key it would be undisclosed funded scope — the defect `FB-04` named.

**Version discipline:** this document carries no version or changelog (status-header style only), so no bump. The dated note above is the traceability record.

**Verify:** `grep -c "PSK-10" docs/governance/media-industry-sop-fallback-implementation-plan.md` returns 2.

---

## Step 2 — State the report immutability rule once *(closes the stated half of `GA2`)*

**File:** `docs/Modular_PRD.md`, §6.3, immediately after the existing `**Retention:**` and `**PII:**` lines.

**Current context** *(do not modify these two lines in this step)*:

> **Retention:** rejected and archived after `DATA_RETENTION_ARCHIVE_DAYS`; published kept indefinitely; **`workflow_transitions` never deleted.**
> **PII:** articles sourced from individuals on social platforms may carry personal data…

**Action:** insert a third line.

> **Report immutability (`PSK-10`):** an issued report is never edited and never deleted. A superseded report is answered by issuing a **new** report that cites the original. The correction ladder — Clarify → Correction → Retraction — is the editorial restatement mechanism. *This states the rule the design must satisfy; the report record itself is designed in S1 (`GA1`).*

> ⚠ **Scope boundary — do not over-reach here.** This step states the **report** immutability rule. It must **not** restate `NFR-02`'s *"never deleted"* wording for `workflow_transitions` — that restatement (to *"retained for not less than the statutory period; disposal only under a documented, approved policy"*) is **T2 Step 9 / TX Step 6**, and depends on counsel input that does not exist yet. Two different rules, two different phases.

---

## Step 3 — Disclose the assurance gap *(closes `GA6` as disclosure only)*

**File:** `docs/Modular_PRD.md`, §0.3 "Team-shape adaptation", immediately after the existing paragraph beginning *"Functions marked Absent are risks, not conveniences."*

**Why here:** §0.3 is already the register of what this project does not have, and independent assurance is exactly an absent function. Keeping all "what we lack" disclosures in one place is why that section exists.

**Action:** insert a paragraph.

> **Independent assurance is also Absent.** The Chief Editor's `Publish` / `Hold` / `Escalate` disposition is a **management assertion**, not an independent audit opinion. No independent opinion exists anywhere in the model, so the same party both performs the editorial work and attests to it. Presenting that disposition as independent assurance would misrepresent it. The substantive remedy is `Q2` — Line 3 external, or state plainly that v1 has none — and **not** the Chief Editor, since `A23` records that naming him collides Line 2 with Line 3. This entry discloses the gap; it does not close it.

---

## Step 4 — Annotate `NG-02` with its v1 scoping *(completes `G14`)*

**File:** `docs/Modular_PRD.md`, non-goals table, `NG-02` row.

**Current row:**

```
| `NG-02` | No multi-team accounts — one Chief Editor account | Operating model is one human | Charter |
```

**Proposed replacement:**

```
| `NG-02` | No multi-team accounts — one Chief Editor account | **v1 exclusion.** "Operating model is one human" describes v1 and lapses when the business has more people. A tenancy boundary exists in the data model to preserve the option; **no multi-team capability is built, and `NG-02` stands.** Nothing forecloses later accounts for multiple natural persons with roles mapped to virtual agents or phase gates | Charter |
```

**Why this wording:** without it, a future reviewer finds a tenancy column against a Charter-level "no multi-team accounts" and reads a breach. The annotation makes the boundary-versus-feature distinction visible without re-deriving it. **No Charter act is required** — verified against the table's own framing, where `NG-03` is *"Charter-level **v1** exclusion"*, `NG-07`/`NG-08` are dated deferrals, and `NG-09` is *"rejected **for v1**, with a two-branch reopening condition."*

### Version discipline for Steps 2–4

All three edit `Modular_PRD.md`. Bump **once**: `| **Version** | 1.5 …` → `1.6`, and add one changelog row:

```
| **1.6** | **2026-08-18** | Claude, T0 documentation pass, Chief Editor reviewing | **Three decision-free disclosures, no scope change.** Added the report immutability rule to §6.3 under `PSK-10` — stating the rule the S1 report design must satisfy, explicitly *not* restating `NFR-02`'s `workflow_transitions` wording, which awaits counsel (T2/TX). Disclosed in §0.3 that independent assurance is an Absent function: the Chief Editor's disposition is a management assertion, not an audit opinion; substantive remedy is `Q2`. Annotated `NG-02` as a v1 exclusion so the S1 tenancy boundary does not read as a Charter breach — boundary preserved, no multi-team capability built. No open decision closed, no Charter text touched, no number invented |
```

---

## Step 5 — `CR-15` scope note + version-drift fix *(closes `G4`)*

**File:** `docs/governance/requirements-traceability-map.md`.

**5a — the `CR-15` row** (forward-coverage table):

Current:
```
| `CR-15` | NG-01, NG-02, NG-08; SEC-03 defers auth to S6 | Covered |
```

Proposed:
```
| `CR-15` | NG-01, NG-02, NG-08; SEC-03 defers auth to S6 | Covered — **coverage scoped to AP-01/MVP.** The separately chartered P0-EVR client surface sits outside this requirement's scope and does not breach it |
```

**5b — the version drift** (§1 above): change the header `**Version:** v1.1` → `**Version:** v1.3`, and add a changelog row:

```
- **2026-08-18 v1.3:** Scoped `CR-15`'s coverage note to AP-01/MVP, so a future reader does not mistake the separately chartered P0-EVR client surface for a breach of the single-account requirement. Also corrected this document's own header, which still declared v1.1 while the changelog already carried a v1.2 entry — the header was not bumped when the Graphify scope normalization landed. Same defect class this file's §1 names as the project's recurring failure mode, this time in the version field itself. No customer statement changed, no content hash affected.
```

**Why the hashes are unaffected:** `CR-01`–`CR-19` are SHA-256-anchored to **customer text** at `53ace36`. This edit changes a project-team coverage note, not a customer statement, so no re-anchoring is required.

---

## Step 6 — Scope the exclusivity window to P0-EVR *(closes `G8`)*

**File:** `docs/governance/board-proposal-professional-evidence-review-poc.md`, §16.4, within the Client-First Exclusivity Window subsection.

**Action:** add a scope line.

> **Scope.** The Client-First Exclusivity Window is a **P0-EVR concept only.** It exists because a client commissioned and paid for the work. AP-01/MVP articles discovered through the Chief Editor's own research have no client and no window, and the concept does not enter the shared editorial core.

**Why it matters:** the two lanes share one editorial engine by design. Any concept that belongs to only one lane and is not marked as such will eventually be implemented in the core, where it does not belong.

**Version discipline:** this document carries no version or changelog; the section edit is self-dating via the commit.

---

## Step 7 — Verification pass

Run before committing:

| Check | Expected |
|---|---|
| `grep -c "PSK-10" docs/governance/media-industry-sop-fallback-implementation-plan.md` | `2` |
| `grep -c "Report immutability" docs/Modular_PRD.md` | `1` |
| `grep -c "Independent assurance is also Absent" docs/Modular_PRD.md` | `1` |
| `grep -n "Version.*1\.6" docs/Modular_PRD.md` | one match in the header |
| `grep -n "Version:.*v1\.3" docs/governance/requirements-traceability-map.md` | one match in the header |
| `grep -c "coverage scoped to AP-01" docs/governance/requirements-traceability-map.md` | `1` |
| `grep -c "P0-EVR concept only" docs/governance/board-proposal-professional-evidence-review-poc.md` | `1` |
| `git diff --stat` | exactly **4** files changed |
| `git status --short` | no change to `PRD.md`, `project-charter-v1.md`, or `0001_init.sql` |

**Then update the register:** mark `G4`, `G8`, `G14`, `GA8`, `GA2` (stated half), and `GA6` (disclosure half) as closed in `2026-08-18-consolidated-gaps-and-open-questions.md` §3, moving them to §10.

**Suggested commit message:**

```
docs: T0 documentation pass — PSK-10, immutability rule, assurance disclosure

Six decision-free gaps closed. No scope change, no open decision closed,
no Charter text touched.

- PSK-10 registered (GA8)
- Report immutability rule stated once in Modular_PRD 6.3 (GA2, stated half)
- Independent assurance disclosed as an Absent function (GA6, disclosure)
- NG-02 annotated as a v1 exclusion (G14)
- CR-15 coverage scoped to AP-01 (G4)
- Exclusivity window scoped to P0-EVR (G8)
- Fixed traceability-map header, stale at v1.1 against a v1.2 changelog

Modular_PRD 1.5 -> 1.6; traceability map v1.1 -> v1.3.
```

## 3. What this runbook deliberately does not do

- Does not restate `NFR-02`'s retention wording — that is T2 Step 9 / TX Step 6, pending counsel.
- Does not resolve `GA6` substantively — that is `Q2` in T1.
- Does not propagate `PSK-01`–`PSK-10` into the traceability map or `Modular_PRD` §7.2 — that is the `R4` follow-on in T1.
- Does not touch the frozen baselines or any applied migration.
