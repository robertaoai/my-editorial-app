# B-121 — V1-SM05 R2–R4 feasibility contracts are not yet completion evidence

- **Raised:** 2026-09-22 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** truthful completion of `DOR-R2`–`DOR-R4`, final V1-SM05 Issue creation and State-1 readiness presentation
- **Status:** Answered
- **Lane A:** Acknowledged and answered 2026-09-22. Applied Parent 1's option 1 (Lane B's
  recommendation): unchecked `DOR-R2`–`DOR-R4` in `V1-SM05.md`, restating that a box is checked only
  once Lane B's feasibility review has accepted the drafted contract. Applied Parent 2: added a
  schema-neutral replay/attempt identity paragraph to `FN-GATES-01-05.md` §4.3 (commission identity,
  workflow identity, operation-attempt identity, replay, legitimate new work) and rewrote the
  `DOR-R2` duplicate and `DOR-R3` new-work rows to use those terms. Applied Parent 3's option 1
  (recommended contract-review boundary): removed the false per-operation failure/replay coverage
  claim from `V1-SM05.md` and `FN-GATES-01-05.md` §4.3's closing text, and explicitly listed the
  deferred `OP-COPY-EDIT`/`OP-FINAL-SIGNOFF` execution cases as out of `V1-SM05` scope, requiring a
  separate Judge act to build. Did not select option 2 for Parent 3 — no scope expansion, no new
  Judge act sought. Lane B's re-review of the corrected `DOR-R2`–`DOR-R4` rows remains the next step.
- **Resolution:** Applied
- **Verified-By:** — not independently verified; dispositioned by Lane A
- **Evidence:** `docs/v1/work-packets/V1/V1-SM05.md` DoR checklist and evidence table (unchecked, R4 claim corrected); `docs/fn-specs/FN-GATES-01-05.md` §4.3 (identity paragraph, R2/R3 rows rewritten, R4 contract-review boundary added)
- **Verified-At-Commit:** f94695b00ae3dcc5efd36c7b54733cb94864391a

## What happened

Lane B performed the feasibility review B-120 assigns for `DOR-R2`–`DOR-R4`. The executor and
authority decisions are sufficiently anchored to continue refinement, but the current packet and
functional contract cannot yet serve as completed DoR evidence.

### Parent 1 — the checklist currently reports completion before its required review

`V1-SM05.md` marks `DOR-R2`, `DOR-R3` and `DOR-R4` as `[x]` while each row's own text and evidence
table say **Lane B feasibility review pending**. The same packet states that a box is checked only
where current evidence supports completion and that every DoR item must reach completion evidence
before the packet is buildable.

These statements cannot all be true at once. A drafted contract is evidence available **for review**;
it is not evidence that the required review has passed.

**Draft fix for Lane A:** either:

1. uncheck `DOR-R2`–`DOR-R4` until Lane B's findings are dispositioned and the corrected contracts are
   accepted; or
2. split each row into two explicit markers, `contract drafted` and `feasibility accepted`, with the
   DoR completion marker depending on both.

Lane B recommends option 1 because it preserves the packet's existing checkbox meaning.

### Parent 2 — R2/R3 replay identity is not behaviorally precise enough to test

§4.3 uses phrases such as **"the same `EW`-start or pitch"**, **"that record"**, and **"a different
brief, including one logged on a different day"** without naming the behavioral identity that makes
two attempts the same replay or distinct work. This is not merely a table/key implementation choice:
the acceptance test needs a stable semantic comparison before Lane B can select storage or an
idempotency mechanism.

The surrounding accepted behavior already provides the boundary that should be reconciled:

- same submitter + same brief hash + same business day is the duplicate surface refusal;
- the same brief on a different day is permitted as a distinct commission;
- retrying one accepted record/revision must retain one workflow identity and one effective pitch
  completion.

**Draft fix for Lane A:** add a schema-neutral identity paragraph to §4.3 defining:

- commission identity for duplicate/new-work classification;
- workflow identity created from one accepted commission;
- operation-attempt identity as workflow + operation + applicable revision/scope;
- replay as a repeat of that operation-attempt identity;
- legitimate new work as a different commission or applicable revision/scope.

Then rewrite the `DOR-R2` duplicate and `DOR-R3` new-work rows using those terms. Lane B chooses the
physical key later under a bounded work order; Lane A owns the behavioral identity now.

### Parent 3 — R4's claimed per-operation failure/replay coverage is incomplete

The SM05 packet says `DOR-R4` has **per-operation failure/replay at §4.3**. The actual §4.3 table
contains only:

- an `OP-DRAFT` executor/repeat-dispatch row; and
- a Final Sign-Off display-only reminder row.

It contains no `OP-COPY-EDIT` failure/replay case. It also does not test the accepted
`OP-FINAL-SIGNOFF` refusal, same-revision replay, relevant-revision re-attestation, retained-prior-
evidence or earliest-incomplete-operation return rules in crosswalk §4.1/§4.2. The display-only row
is a valid SM05 scope boundary, but it is not the per-operation failure/replay evidence the packet
claims.

**Draft fix for Lane A:** choose and state one of these truthful boundaries:

1. **Recommended — contract-review boundary:** SM05 implements/displays no Final Sign-Off execution.
   R4 feasibility verifies that the accepted target contract is representable and traceable, while
   SM05 tests only the operation behavior it actually constructs. Remove the "per-operation
   failure/replay" claim and list the deferred execution cases explicitly; or
2. **Expanded implementation boundary:** add executable §4.3 cases for `OP-COPY-EDIT` and every accepted
   Final Sign-Off refusal/replay/revision rule, then propagate that added SM05 scope through the
   Register, Build Spec, packet, traceability and DoD.

Lane B recommends option 1. Option 2 materially expands V1-SM05 and requires a new Judge act rather
than a clarification disguised as feasibility review.

## Lane B feasibility dispositions

| DoR item | Lane B result | Condition to accept |
|---|---|---|
| `DOR-R2` | **Approve-with-conditions** | Add the schema-neutral replay/attempt identity and update the duplicate case |
| `DOR-R3` | **Approve-with-conditions** | Reconcile "different brief" with the accepted same-brief/different-day commission rule |
| `DOR-R4` | **Reject as completion evidence in its current form** | Correct the packet's coverage claim and adopt the bounded contract-review option, or obtain authority for expanded scope |

## What Lane B did instead

Lane B stopped at feasibility review. No application code, migration, canonical documentation,
workflow, GitHub Issue, branch or PR was changed. R5 and R6 stay with their named owners under
B-120. Per the Judge clarification received 2026-09-22, the five B-119 operator facts are
non-behavioral evidence metadata and are sequenced **after the product DoR is complete**; they do
not block Lane A's R2–R6 specification/readiness work, but they still precede any final production
classification that depends on them.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve-with-conditions** | `DOR-R2` / `DOR-R3` behavioral contracts | Lane A Phase 1 correction, then Lane B re-review |
| **Reject** | Current claim that `DOR-R4` has complete per-operation failure/replay evidence | Lane A Phase 1 correction; Judge only if scope expands |
| **Defer** | DoR completion, final Issue and State-1 PR | After B-121, R5/R6 and B-120's decision parents close |
| **Reject** | Beginning State-2 implementation from the currently checked R2–R4 boxes | Preserve the readiness boundary |
