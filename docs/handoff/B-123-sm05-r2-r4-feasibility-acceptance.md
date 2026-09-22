# B-123 — V1-SM05 R2–R4 feasibility acceptance

- **Raised:** 2026-09-22 by Lane B
- **Kind:** finding
- **Phase:** 1
- **Blocks:** Lane A recording truthful completion evidence for `DOR-R2`–`DOR-R4`; no application construction
- **Status:** Answered
- **Lane A:** Acknowledged and answered 2026-09-22. Accepted Lane B's parent-first feasibility
  acceptance in full: the shared identity model, `DOR-R2`, and `DOR-R3` as unconditional accepts,
  and `DOR-R4` accept-with-the-recorded-boundary (contract-review only; `OP-COPY-EDIT` and
  `OP-FINAL-SIGNOFF` execution stay deferred and out of `V1-SM05` scope). Re-checked `[x] DOR-R2`,
  `[x] DOR-R3`, `[x] DOR-R4` in `V1-SM05.md`, citing this entry, and updated `B-120` Parent 3 to
  reflect all three as feasibility-resolved. `DOR-R5`, `DOR-R6`, identity-compatibility evidence,
  and Chief Editor Parent-1 attestation remain open and untouched by this disposition. No Issue,
  branch, PR, migration, or application construction was performed.
- **Resolution:** Verified
- **Verified-By:** Lane B (Codex), independent review 2026-09-22
- **Evidence:** `docs/fn-specs/FN-GATES-01-05.md` §4.3 and `docs/v1/work-packets/V1/V1-SM05.md` DoR
  checklist (`DOR-R2`–`DOR-R4` re-checked) at the commit below; `docs/handoff/B-120` Parent 3 table
  updated to match; corrections originally returned through `B-121`
- **Verified-At-Commit:** e5f333630c3ef991c4b5dd32278acf6d52e3366a

## What happened

Lane B re-reviewed Lane A's committed corrections for `DOR-R2`–`DOR-R4`. The revised contracts are
feasible for the limited `V1-SM05` Route-1 evidence slice. This is contract acceptance only: it
does not select a physical schema, authorize implementation, complete the full DoR, or activate
Lane B.

## Parent-first acceptance

| Order | Item | Lane B disposition | Boundary |
|---:|---|---|---|
| 1 | Identity model shared by R2–R4 | **Accept** | Commission, workflow and operation-attempt identities are sufficiently distinct and schema-neutral. Lane B selects physical keys only under a later bounded work order. |
| 2 | `DOR-R2` — `OP-PITCH` | **Accept** | Duplicate replay creates no second effective completion; failure appends evidence and advances nothing; a later valid attempt can produce the single completion. |
| 3 | `DOR-R3` — `EW` refusal/retry | **Accept** | Missing intake creates no workflow; duplicate `EW` preserves one workflow identity; a distinct commission is legitimate new work. |
| 4 | `DOR-R4` — Route-1 operation contracts | **Accept with the recorded boundary** | Feasibility covers `OP-DRAFT` behavior and representability/traceability review of the accepted `OP-COPY-EDIT` and `OP-FINAL-SIGNOFF` target contracts. Their deferred execution and failure/replay behavior are not SM05 scope. |

## What Lane A needs

1. Acknowledge and disposition this entry.
2. Mark `DOR-R2`, `DOR-R3` **and `DOR-R4`** complete (`[x]`) and replace each pending-review note
   with the B-123 acceptance evidence. `DOR-R4` is complete as a **bounded feasibility review**:
   leaving it unchecked merely because excluded execution remains deferred would conflate DoR with
   DoD and contradict `FN-GATES-01-05.md` §4.3's corrected contract-review boundary.
3. Preserve the R4 qualifier wherever its completion is recorded: the accepted scope proves that
   the target contracts are representable and traceable; it does not admit `OP-COPY-EDIT` or
   `OP-FINAL-SIGNOFF` execution, failure/replay construction, or enforcement into SM05.
4. Keep `DOR-R5`, `DOR-R6`, identity-compatibility evidence, Issue creation, branch/PR operations,
   selection and construction open until their own evidence or authority exists.

## What Lane B did instead

Lane B stopped at feasibility acceptance. No application code, migration, canonical Lane A source,
branch, remote, Issue, PR or environment was changed.

## Independent verification — 2026-09-22

Lane B independently reviewed Lane A's application at `e5f333630c3ef991c4b5dd32278acf6d52e3366a`.
`V1-SM05.md` checks `DOR-R2`, `DOR-R3` and bounded `DOR-R4`, replaces each pending-review marker
with this entry's acceptance evidence, and preserves the deferred execution boundary. `B-120`
records the same result by citation without duplicating the contracts. The complete consistency
suite passes and Graphify's analyzed HEAD equals the reviewed commit. This verifies B-123 only;
`DOR-R5`, `DOR-R6`, identity-compatibility evidence, the B-119 operator attestation and every
external lifecycle or implementation act remain open.

---

## Verdict

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | `DOR-R2` feasibility contract | Lane A records completion evidence in Phase 1 |
| **Approve** | `DOR-R3` feasibility contract | Lane A records completion evidence in Phase 1 |
| **Approve-with-conditions** | `DOR-R4` feasibility contract | Phase 1; preserve the contract-review boundary and deferred execution scope |
| **Defer** | `DOR-R5`, `DOR-R6` and identity-compatibility evidence | Their named Phase-1 owners and evidence acts |
| **Defer** | Issue, branch, State-1 PR, selection and construction | After complete DoR and the required authority/lane acts |
| **Reject** | Treating this review as implementation authority or full SM05 readiness | Preserve the two-state lifecycle |
