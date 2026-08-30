# B-065 — SEC-06 needs the core GIAS anchor and D-165 is not yet verifiable

- **Raised:** 2026-08-31 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** claiming `SEC-06` is current, verifying `B-062`/`B-063`, or treating a
  risk-triggered per-article check as independent system-level assurance
- **Status:** Answered
- **Lane A:** **Acknowledged and corrected 2026-08-31 (`D-166`).** Confirmed against the attached
2024 GIAS PDF/Markdown and the IIA's own catalogue: no 2026 edition exists. `SEC-06`'s row
replaced with your proposed operative meaning and the correct 2024 GIAS citation; the "2026
Statement of Position" phrasing retired from every current-value location I could find (`SEC-06`
row, §6.5 footnote, §4 Line 3 persona row). The two residual `D-165` locations you named — the
§6.5 footnote's "R never equals A" restatement and the M2/S2 status rows still naming open
`Q12`/`Q1` — are both corrected. `SEC-01`/`SEC-06`/`FR-11` separation stated explicitly in the
footnote. `Q11`, S0, UUID, POC payment, and Lane C confirmed unaffected, not reopened, per your
own list. `B-062`/`B-063` stay `Resolution: Applied` — never `Verified` — so your item 9 was
already satisfied; recorded explicitly in `D-166` rather than left implicit.
- **Resolution:** Applied
- **Verified-By:**
- **Evidence:** `Modular_PRD.md` `SEC-06` row (§6.5), the §6.5 footnote, the §4 Line 3 persona
  row, §7.4 M2 row, §8.1 S2 row; `V1-DECISION-REGISTER.md` §5.14ds (`D-166`)
- **Verified-At-Commit:**

## Parent finding

The requested phrase **“2026 IIA re-anchor” is not a valid normative source label**. There is no
separate 2026 edition of the Global Internal Audit Standards in the supplied or current official
source set. The current core is the **2024 Global Internal Audit Standards**, issued 9 January
2024 and effective 9 January 2025.

`SEC-06` must therefore be anchored to that core document. Materials released or updated through
2026—including Statements of Position, Topical Requirements, practice guidance, tools, and other
supporting material—are not system requirements in this phase. They may inform a future scope
decision, but they must not enter the current requirement, dependency graph, Definition of Done,
or acceptance evidence unless the governing tier explicitly adopts them later.

This correction does not close `D-165`. Its underlying source and propagation sweep remains useful,
but its completion cannot be verified while current-value documents still carry conflicting
meanings and retired blockers.

## Source hierarchy for this phase

| Layer | Source | Treatment now |
|---|---|---|
| Core normative baseline | 2024 *Global Internal Audit Standards*, effective 2025-01-09 | Operative source for `SEC-06` |
| Supplementary professional material | Statements of Position, Topical Requirements, practice guidance, tools, and later rollout material | Excluded from system requirements in this phase; future reference only unless explicitly adopted |
| Project control | RACI, successor-node separation, `SEC-01`, and workflow decisions | Operative where decided, but project-owned; do not attribute these choices to the IIA |

## What the core Standards actually distinguish

| Concern | What it means | Correct source | System consequence |
|---|---|---|---|
| Editorial four-eyes | A successor reviews the preceding editorial judgment | Project RACI / `SEC-01` | Event-time workflow control; it is not an IIA conformance claim |
| Organizational independence | The internal audit function can carry out its responsibilities without interference | Standard 7.1 | Mandate, board-equivalent reporting, scope and communication freedom, evidence access, and safeguards must be evidenced |
| Individual objectivity | An internal auditor recognizes, avoids, and mitigates actual, potential, and perceived impairments, including self-review | Standard 2.2 | A Line label, identity difference, or database value cannot prove a mental state |
| Quality of the assurance function | An independent external assessment evaluates conformance and performance | Standard 8.4 | This is part of the core Standards but is not a `SEC-06` implementation requirement in the current system phase; track it separately if a later phase operationalizes an internal audit function and its conformance obligations |
| Coordination and reliance | Assurance providers coordinate, exchange relevant information, and document the basis for reliance while internal audit retains responsibility | Standard 9.5 | Independence is not isolation; assurance needs evidence access and may rely on, retest, or reject other providers' work |

## What is unclear today

1. **The project calls a risk-triggered per-article function “Line 3,” while `SEC-06` is
   system-level organizational assurance.** `FR-11` can be an additional article control, but its
   name or successful execution cannot discharge `SEC-06`.
2. **The board-equivalent, chief-audit role, mandate, and reporting path are absent.** The current
   text does not say who independently sets assurance scope, receives findings, protects evidence
   access, or prevents suppression of conclusions.
3. **“No shared data path” reverses the control objective.** Standards 7.1 and 9.5 require access
   and coordination. Operational ownership, authority over scope/conclusions, and write access to
   assurance results need separation; read access to underlying records does not.
4. **The absolute same-actor prohibition is attributed to the IIA when it is a project choice.**
   The core Standards require identification and mitigation of impairments and safeguards for
   overlapping responsibilities. The project may impose a stricter successor-node rule, but must
   source it to its own RACI or decision.
5. **Structural separation and cognitive independence are rhetorically merged.** `Q11` correctly
   stopped the database from storing a cognitive claim, while current source documents still imply
   that different Lines create genuinely distinct judgment by design.
6. **`D-165` did not reach all cited live locations.** `Modular_PRD.md` §6.5 still says the
   Responsible party never equals the Accountable party at the boundary, contradicting its
   corrected `SEC-01` row and the T5 RACI. The M2 and S2 status rows still name `Q12` and `Q1` as
   open. `SEC-01` is still described elsewhere as an IIA Three Lines control rather than a
   project-RACI control.
7. **The phase boundary for supplementary material is not explicit.** Without an exclusion, a
   later guide can silently become a new build dependency even though this phase only adopted the
   core Standards.

## Guaranteed failure chains

| If the plan does this | It fails because | Observable failure |
|---|---|---|
| Cite “2026 Standards” or a 2026 Statement as the `SEC-06` core | Wrong edition and document type | A reviewer cannot find the claimed requirement in the operative Standards |
| Let later supplementary material enter the current DoD implicitly | Scope changes without a governing decision | A moving external publication can reopen a closed sprint or create an unowned dependency |
| Keep “no shared data path” | Assurance cannot inspect the evidence it must assess | Assurance audits an unverifiable copy or relies on an operational owner's filtered view |
| Treat a distinct identity or Line label as independence | Structure does not prove objectivity, scope autonomy, or freedom from influence | `line_separation_status = satisfied` while one owner controls prompt, evidence, scope, and conclusion |
| Let the Chief Editor own operations and the assurance conclusion | The entity with the problem attests that it solved the problem | Findings can be narrowed, suppressed, or accepted without independent escalation |
| Call an article-level `Line3Audit` system-level assurance | Scope mismatch | Triggered article tests pass while governance, access, model, and reporting controls remain unaudited |
| Keep an absolute IIA same-actor claim | The source requires impairment handling and safeguards, not the project's exact workflow rule | A project preference is misrepresented as external conformance law |
| Mark `B-062`/`B-063` Verified from their response text | The response overstates what reached the artifacts | Handoff closure says “verified” while the live Product Requirements Document still carries retired blockers and rationale |

## Draft fix — parent first

### 1. Correct the anchor before changing any child requirement

Retire the phrase **“2026 IIA re-anchor”** from current-value requirements. Preserve it only in
historical prose that explains why the source check was opened.

Use this source hierarchy sentence wherever the governing rationale is needed:

> `SEC-06` is anchored to the IIA *Global Internal Audit Standards* (IPPF 2024), issued
> 9 January 2024 and effective 9 January 2025. Supplementary IIA material released or updated
> through 2026 is not adopted as a system requirement in this phase.

### 2. Replace the `SEC-06` row

Proposed operative meaning, preserving the existing identifier:

> **Organizational assurance.** The internal audit/assurance function is positioned to perform
> its responsibilities without interference. Independence is evidenced by a documented mandate
> and board-equivalent reporting path; autonomy over scope, method, conclusions, escalation, and
> communication; unrestricted read access to relevant evidence; protection from undue influence;
> and disclosed safeguards for actual, potential, or perceived impairments, including self-review.
> Coordination and evidence access are required and do not by themselves impair independence.

Source column:

> IIA, *Global Internal Audit Standards* (IPPF 2024), issued 9 January 2024 and effective
> 9 January 2025, Standards 2.2, 7.1, and 9.5.

Status column:

> **Specified, not built; absent for v1.** The risk-triggered per-article `FR-11` function is an
> additional project control and is not, by itself, evidence that organizational assurance exists.
> No IIA-conformance or `SEC-06`-satisfied claim is permitted until the role, mandate, reporting
> path, safeguards, access, scope autonomy, and evidence exist. Supplementary IIA material is out
> of scope for this phase unless later adopted by a governing decision.

Standard 8.4 remains part of the core Standards, but keep its external quality assessment outside
this `SEC-06` system row in the current phase. If a later phase operationalizes an internal audit
function and its conformance obligations, add and sequence Standard 8.4 explicitly rather than
hiding it inside `SEC-06`.

### 3. Normalize current-value claims

Apply the same semantic replacements in the Addendum, Blueprint, Business Case, RACI, Modular PRD,
functional specs, and acceptance criteria. Historical changelog statements stay historical and
must be labelled as such.

| Retire | Replace with |
|---|---|
| “2026 Standards” or “2026 IIA re-anchor” as an operative source | “2024 Global Internal Audit Standards, effective 9 January 2025” |
| “The IIA requires the same person never to hold Line 1 and Line 2” | “This project imposes successor-node separation under its RACI/decision; the core Standards govern objectivity impairments and safeguards.” |
| “Different Lines provide genuinely distinct judgment” | “The system proves and records structural separation only. Judgment effectiveness requires outcome evidence and cannot be inferred from a label.” |
| “Line 3 must not share data/reporting lines” | “Assurance has unrestricted read access to relevant evidence and an independent reporting/authority path; Lines 1 and 2 cannot control its scope or conclusions.” |
| “Line 3 is a triggered function” as proof of `SEC-06` | “The article-level function is an additional project control. Organizational assurance requires separately evidenced governance and mandate.” |

Correct the remaining `D-165` live drift at the same time: the `Modular_PRD` §6.5 explanatory
sentence, its `SEC-01` scope classification, and the M2/S2 status rows. Preserve the decided
Phase-0 rule and the unratified production conditions; do not reopen `Q12` or `Q1`.

### 4. Propagate and track without inventing an artifact

- **Decision register:** record the core source, effective date, supplementary-material exclusion,
  corrected semantics, affected current-value documents, and separation of `SEC-01`, `SEC-06`,
  and `FR-11`.
- **Build spec:** state unaffected if the S2 Unit 1 sequence remains unchanged. Do not make this
  source correction a hidden blocker for an already-authorized unit.
- **Artifact inventory:** state unaffected unless the correction creates a new assurance charter,
  mandate, or evidence artifact. If one is created, add it here and to the Build Spec in the same
  pass.
- **Modular PRD:** update `SEC-06` and the current status/rationale rows. `Fn_Specs` change only
  where they currently attribute project behavior to the IIA; the behavior remains project-owned.
- **Phase closure:** unaffected unless the correction changes a named closure condition.

### 5. Keep unrelated boundaries closed

- **`Q11` is not reopened.** `workflow_transitions.line_separation_status` stores
  `satisfied | not_applicable | override_not_four_eyes`; `identity_assurance` stores executor
  provenance. No `judgment_independence` column exists until a real instrument is specified.
- **S0 is complete.** `Q11` was an S1 migration decision, not the last S0 field. Reclassifying it
  as “pre-S1 means S0” would undo `D-95` and the accepted S0/S1 history.
- **Every currently created table already has a generated UUID primary key.** Add a standing
  schema rule for future tables if desired; do not write a no-op migration or confuse row identity
  with business uniqueness.
- **POC payment remains manual and outside the application.** There is no payment feature to
  disable. The built commercial model stays excluded until `NG-02`/`NG-03` are lifted and a
  separate POC Charter plus Product Requirements authorize it. No payment field belongs in the
  editorial migration or in `Q11`.
- **Lane C remains separate.** `C-Q1` (`fetch-depth: 0`) and `C-Q2` (the exact middle-dot status
  context transition) stay Phase 3 work and do not enter this source correction.

## Success criteria derived from failure

The parent is complete only when every criterion below has a negative test and that test fails for
the intended reason:

1. The exact core title, issue date, and effective date are cited, and the citation opens the 2024
   *Global Internal Audit Standards* rather than a 2026 supplement.
2. A source sweep finds no current-value reference to a standalone “2026 Standards” edition and no
   supplementary IIA publication in the current requirement, dependency, DoD, or acceptance path.
3. A deliberate attempt to add supplementary material as a current dependency fails unless a new
   governing decision names its scope, owner, phase, propagation, and acceptance evidence.
4. `SEC-01` is testable as the project workflow control; `SEC-06` is testable as organizational
   assurance; `FR-11` cannot satisfy either merely by name.
5. A proposed assurance function fails readiness if operational owners can set its scope, filter
   its evidence, alter its conclusion, withhold escalation, or make it review work it operated
   without an independent safeguard.
6. A proposed assurance function does **not** fail merely because it reads shared evidence or
   coordinates with other assurance providers.
7. A source sweep finds no current-value claim that IIA absolutely forbids every role overlap,
   that data isolation defines independence, or that Line membership proves cognition.
8. The M2/S2 live status no longer names closed `Q12`/`Q1` blockers, while OD1/OD2/OD3 production
   provisionality remains visible.
9. `B-062` and `B-063` are verified only after the artifacts—not their response summaries—meet
   their own evidence claims.
10. Graphify is rebuilt against the final documentation commit, portable-check passes, and
    `bun run check` reports no drift other than a newly raised handoff awaiting Lane A receipt.

## What I did instead

Performed a documentation-only source, scope, and verification pass. Verified the attached 2024
PDF against its editable Markdown and the official IIA catalogue; separated the core normative
baseline from supplementary professional material and project-owned controls; inspected Graphify's
state and found it stale; and inspected the live Product Requirements Document, tracking tiers,
handoff tail, schema, work orders, and Lane C queue. No governing document, source document,
application code, migration, workflow, build configuration, frozen artifact, or lane state was
changed.
