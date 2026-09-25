# B-125 — SM05 Judge evidence and two-pass execution docket

- **Raised:** 2026-09-22 by Lane B
- **Kind:** blocked-on-decision
- **Phase:** 1
- **Blocks:** completion of V1-SM05 pre-start readiness, normal GitHub Issue creation, Pass-1 publication, the State-1 PR, selection and State-2 construction
- **Status:** Open
- **Lane A:** Acknowledged 2026-09-22. Applied Parent 1 only: recorded Judge Clarification 5.1 as
  `D-254` in `V1-DECISION-REGISTER.md` §5.14e79, and propagated it under `D-54` to `V1-BUILD-SPEC.md`,
  `V1-ARTIFACT-INVENTORY.md` and `V1-SM05.md`'s DoR-checklist preamble, stating `Modular_PRD.md` and
  `V1-PHASE-CLOSURE.md` unaffected. Parents 2–6 remain open: the five operator facts, `DOR-R5`,
  `DOR-R6`, the Pass-1 base push, feature-branch creation, the State-1 PR, and selection/construction
  all still require their own named inputs or authority, none of which this disposition supplies.
  `Status` stays `Open`.

  **Correction, 2026-09-23 (`docs/handoff/B-126`).** This entry's original Parent 4 assumed an
  existing V1-SM05 GitHub Issue that the Judge needed to identify for remediation. A user-supplied
  screenshot of the repository's Issues page (dated 2026-09-23) shows zero open and zero closed
  Issues; `gh` CLI is unavailable in this environment to query the API independently, so this
  correction rests on that screenshot as the available evidence, not on an independent API check.
  The phantom existing-Issue premise is removed below: `Blocks`, Parent 4 and the Verdict table are
  corrected to normal post-DoR Issue creation. `D-254`'s exceptional-remediation rule is preserved
  as a general rule and simply does not currently apply to `V1-SM05`. If a real Issue later turns up,
  return to the remediation path rather than creating a duplicate.

  **Progress note, 2026-09-24 (`D-256`), not an answer.** The `DOR-R5`/`DOR-R6` row of Parents 2–6 now has its evidence: Panel A11, and the hosted v15 comparison. Walkthrough and review acceptance are still owed. No Issue, branch, PR or selection act has occurred. `Status` stays `Open`.

  **Progress note, 2026-09-25 (`D-263`), not an answer.** The Pass-1 base, the Issue, the branch and the State-1 PR are complete (`D-259`–`D-262`). Selection, the work order and State-2 construction remain open. `Status` stays `Open`.
- **Verified-By:** — not yet dispositioned; raised by Lane B
- **Evidence:** `D-252`, `D-253`; `docs/handoff/B-119`–`B-124`; `docs/v1/V1-BUILD-SPEC.md`; `docs/v1/work-packets/V1/V1-SM05.md`; Judge Clarification 5.1 relayed 2026-09-22
- **Verified-At-Commit:** ef903b38989a9e0fc24806332ed9d86c1f6d27d3

## What happened

Lane B consolidated Lane C's revised proposal and the subsequent corrections into one parent-first
docket for Lane A. The two-pass architecture is coherent, but it is still a **review consensus
proposal**, not applied governance: Lane A has not yet recorded Judge Clarification 5.1 in the
Register or propagated it under `D-54`, and several factual inputs and later authorizations remain
outstanding.

The relevant handoff states at the observed commit are:

| Entry | Recorded state | Remaining work |
|---|---|---|
| `B-119` | `Open`; Lane A acknowledged | Supplemental operator attestation or explicit Judge exception |
| `B-120` | `Open`; Lane A acknowledged | Compatibility readiness, `DOR-R5`, `DOR-R6`, Issue lifecycle and selection |
| `B-121` | `Answered` / `Applied` | Do not relabel `Superseded`; independent verification is not recorded here |
| `B-122` | `Answered` / `Applied` | Controlling handoff citation for Squash and Merge; independent verification is not recorded |
| `B-123` | `Answered` / `Verified` | Closed feasibility verification for `DOR-R2`–`DOR-R4` within its recorded boundary |
| `B-124` | `Open`; Lane A acknowledged and partially dispositioned | Operator evidence or Judge exception, canonical compatibility edit, then lifecycle closure |

Repository and Graphify metadata agree at `ef903b3`; the working branch and its upstream were at
the same tip when this entry was raised, and `.graphify/branch.json` recorded that commit as
`lastAnalyzedHead` with `stale: false`. No new consistency-pass claim is made: Lane C's latest run
was stopped before completion.

## What you need

### Parent 1 — record the governing rule; no further input required to start

Lane A may immediately record Judge Clarification 5.1 and propagate it under `D-54` to the Register,
Build Spec, Artifact Inventory and V1-SM05 packet, explicitly stating unaffected tiers:

1. Accepted DoR precedes normal Issue and feature-branch creation.
2. DoD is defined and testable before construction, but satisfied only by implementation, review
   and verification evidence.
3. An early Issue or branch grants no readiness, selection, work-order, lane-transfer or construction
   authority.
4. Updating an Issue created out of order is an exceptional remediation path, not the normal path.

This parent does not depend on the operator facts or Issue identity.

### Parent 2 — complete pre-start readiness

The Judge / Chief Editor must supply or disposition the following:

1. **Five operator facts:** local assessed commit; local execution UTC window; non-secret Supabase
   project reference; Supabase execution UTC timestamp; Supabase-side assessed commit. Preserve both
   hash-anchored receipt files. `UNRECOVERABLE — <reason>` records a gap, not readiness; checking the
   compatibility row then requires an explicit Judge exception.
2. **`DOR-R5`:** after Lane A creates the authoritative normal/revision wireflow and matching data
   flow, record the Chief Editor walkthrough and disposition Lane B/C feasibility feedback. A Panel
   A9 edit alone does not close R5.
3. **`DOR-R6`:** compare Encyclopedia Entries 01, 05 and 06 with hosted text, or record an explicit
   Judge opt-in deferral. An accepted deferral counts as the R6 disposition under `D-253`.

After those conditions are met, Lane A may correct the V1-SM05 compatibility row, update B-119 and
B-120 by citation, and answer B-124 as `Applied`. All DoR evidence must be accepted; the defined DoD
remains unchecked.

**Corrected 2026-09-23 (`D-255`, `docs/handoff/B-129`), not deleted.** Item 1 above is no longer a
`V1-SM05` input: the Judge scoped A01 and its five facts to `SETUP-SPIKE-000/S2` only, the compatibility
row was removed with no replacement, and B-124 closed as `Superseded`. **Parent 2 is now `DOR-R5` and
`DOR-R6` only.**

### Parent 3 — complete Pass 1 on the base branch

1. Commit the governing and readiness changes on `docs/journal-2026-08-16`.
2. Rebuild the extracted Graphify layer, re-merge curated fragments using the governed fragment
   procedure, and complete portable, conflict and connectivity verification.
3. Run the complete consistency suite to completion in the normal repository environment.
4. Obtain explicit Judge authority to push the Pass-1 range, push it, and verify the remote tip.

### Parent 4 — normal Issue creation (`docs/handoff/B-126`, 2026-09-23)

No existing V1-SM05 Issue was found (Issues page shows zero open, zero closed, 2026-09-23). Create
the Issue only after Parents 1–3 close, from the accepted DoR package and the defined-but-unchecked
DoD, scope and partial-`CR-19` disclosure, and test/migration boundaries. Record the exact number and
URL GitHub assigns — do not predict it. This is the normal path, not remediation; if independent
verification later finds a real prior Issue, stop and return to `D-254`'s exceptional-remediation
path instead of creating a duplicate.

### Parent 5 — create a non-empty State-1 branch

After Pass 1 is pushed and the Issue is created:

1. Create `features/feature-V1-SM05` from the verified pushed remote base tip.
2. On that branch, propagate the assigned Issue number/URL to the Register, Artifact Inventory and
   V1-SM05 packet and add the documentation-only State-1 readiness presentation.
3. Commit this Pass-2 delta, rebuild/re-merge Graphify, and run the complete consistency suite.
4. Obtain the required external authority, push the feature branch, and open the State-1 draft PR
   against `docs/journal-2026-08-16`.

Keeping Issue-identity propagation in Pass 2 provides the non-empty documentation delta required by
the State-1 PR. Moving it into Pass 1 would recreate the zero-difference branch deadlock.

### Parent 6 — selection and construction

After State-1 review, the Judge must explicitly select V1-SM05. Lane A then records selection,
issues the bounded work order and transfers the active lane. Only then may Lane B begin State-2
construction. Every applicable packet DoD criterion must pass before acceptance and Squash and
Merge; `B-122`, not `D-253`, is the controlling handoff citation for that integration mode.

## What Lane B did instead

Lane B consolidated the review into this handoff and stopped at the lane boundary. No canonical
Lane A document, receipt, application file, migration, database, Issue, branch, remote or PR was
changed. No Graphify rebuild was required for this handoff-only addition.

---

## Verdict

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | Two-pass base/feature architecture and immediate Parent-1 commencement | Lane A Pass 1 |
| **Approve-with-conditions** | Operator attestation and B-124 closure | Evidence supplied, or explicit Judge exception for each unrecoverable gap |
| **Approve-with-conditions** | `DOR-R5` and `DOR-R6` closure | Walkthrough/review evidence; hosted comparison or explicit deferral |
| **Defer** | Base push | Completed Pass 1, Graphify synchronization, suite pass and explicit authority |
| **Defer** | Normal V1-SM05 Issue creation | After accepted DoR (Parents 1–3); not a remediation |
| **Defer** | Feature branch, State-1 PR and State-2 construction | Complete the named parents in order and obtain their separate authorities |
| **Reject** | Treating `UNRECOVERABLE` as readiness evidence without a Judge exception | Preserve the evidence boundary |
| **Reject** | Relabelling B-121 as `Superseded` or B-122 as independently verified | Preserve recorded lifecycle states |
| **Reject** | Claiming a suite pass from Lane C's stopped run | Require completed normal-environment evidence |
| **Reject** | Requiring an existing-Issue URL on the present evidence, or predicting the future Issue number | Corrected 2026-09-23 (`B-126`) — use normal creation and GitHub's assigned identifier |
| **Reject** | Creating a duplicate Issue or moving Pass-2 identity propagation onto the base | Preserve one-Issue sequencing and a non-empty State-1 delta |
