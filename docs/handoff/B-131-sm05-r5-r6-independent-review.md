# B-131 — V1-SM05 R5/R6 independent review and W1–W3 Judge acceptance

- **Raised:** 2026-09-24 by Lane B
- **Kind:** finding
- **Phase:** 1
- **Blocks:** Lane A recording the accepted `DOR-R5` walkthrough/review result and Lane B's direct Option-2 `DOR-R6` confirmation; post-DoR Issue/branch/PR acts remain downstream
- **Status:** Answered
- **Lane A:** Acknowledged 2026-09-24, receipt only. Queued behind the Judge's `DOR-R6` evidence-standard choice (Option 1 or 2) and the explicit `W2` rule; nothing is recorded or checked by this acknowledgement.

  **Answered and applied 2026-09-24 (`D-259`).** `W1`–`W3` recorded in Panel A11.5 and the `W2` downstream-evidence
  rule written into Panel A11.2; `DOR-R5` checked. The Judge chose Option 2; Lane B's direct read of the v15 export
  satisfies it. Lane A stored the export at `docs/handoff/artifacts/B-131/System_Encyclopedia_V15.txt` and confirmed
  its SHA-256 matches the value recorded above; `DOR-R6` checked; the Encyclopedia ledger's older `Deferred` cells
  are reconciled. Reading note: the Verdict's `Reject` row refers to a direct read of the **hosted page**, which
  did not happen; the export review did, and is the Option 2 evidence. `Verified` remains Lane B's to record.
- **Resolution:** Applied
- **Verified-By:** — not independently verified; dispositioned by Lane A (normalized 2026-09-24, `D-261`)
- **Evidence:** Judge approval supplied 2026-09-24 (`W1 Accept`, `W2 Accept`, `W3 Accept`); commit `17523ceb70c742b13b05e7b05c366af0fd0b30be`; `D-256`; storyboard Panel A11; `V1-SM05.md`; `FN-GATES-01-05.md` §4.1–§4.3; `requirements-traceability-map.md` §6.3/§6.4; `factory-route-operation-crosswalk.md` §§3–4.2; `ENCYCLOPEDIA-SYNC.md`; user-supplied Lane C C-003 review; user-supplied Encyclopedia v15 export reviewed directly 2026-09-24, SHA-256 `BC97BEBAC0F3AC2D3F3D8FED32C3A9CB93684B60F829FEE3604B08FAF34ACE9F`; Graphify synchronized to the commit below
- **Verified-At-Commit:** 17523ceb70c742b13b05e7b05c366af0fd0b30be

## What happened

Lane A's `D-256` pass authored storyboard Panel A11 as the single `V1-SM05` normal/revision and data-flow owner, compared Encyclopedia Entries 01/05/06, recorded the v15 republication, and applied B-127's accepted-contract traceability criterion. Lane A correctly left `DOR-R5` and `DOR-R6` unchecked pending review.

Lane C supplied an external independent review. The Judge then explicitly accepted all three Panel A11 walkthrough questions: `W1 Accept`, `W2 Accept`, and `W3 Accept`. Lane B reviewed the repository sources at `17523ce` and records the following independent result.

## Parent 1 — `DOR-R5` feasibility review

**Accept Panel A11 for the bounded `V1-SM05` slice, subject only to Lane A recording the Judge's already-given answers and this review in the canonical evidence row.**

| Question / surface | Lane B result | Reason |
|---|---|---|
| Normal path, data flow and one-source table | **Accept** | Namespaces, recorded/display-only facts and exclusions agree with the current SM05 packet and `D-249`; no `transition:T*`, publication or signature control is implied |
| `W1` — candidate-route comparisons without reclassification | **Accept** | The delivery increment is fixed to `ROUTE-PROD-1`; comparison/applicability evidence does not itself execute the wider route-selection behavior |
| `W2` — a T3 revision leaves T4 evidence current | **Accept — Judge-decided semantic rule** | The Judge selected this behavior. Lane A must record it as the reason T5 may combine the new current T3 execution with the existing T4 evidence. The current explanatory phrase that a return does not rerun a "sibling or prior node" is insufficient by itself because T4 is downstream of T3, not a sibling or prior node; the explicit Judge answer supplies the missing rule |
| `W3` — T2/T4 judgment and applicability only | **Accept** | `OP-RESEARCH`, `OP-COMPLEX-SERIES` and `OP-LEGAL-RISK` execution is outside this limited evidence slice; the panel does not claim those operations completed |
| Revision/history behavior | **Accept** | New scoped T3 execution, retained history, current marker, return reason and replay distinction are explicit and append-only |

This review introduces no new feature and does not redraw Panels A9/A10. It confirms the authored contract after the Judge supplied the three answers Panel A11 deliberately left open.

## Parent 2 — `DOR-R6` evidence review

The repository-side evidence is internally consistent:

- `D-256` names the stale facts found in Entries 01/05/06 and their applied v15 notes;
- `ENCYCLOPEDIA-SYNC.md` records the same three dispositions and retains Entry 04 for `V1-SM06`;
- the version-history row describes a same-URL v15 republication without rewriting v14; and
- Lane C reports an independent comparison and accepts the result.

Lane B could not directly read the hosted Claude artifact: the artifact URL opened only to a sign-in page in the available browser session, and the repository correctly states that the hosted text cannot be diffed locally. Therefore Lane B confirms **repository-side consistency and the independent Lane C evidence chain**, but does not claim a direct byte/content comparison it could not perform.

Lane A should apply the existing checkbox rule according to the evidence standard it intended in `D-256`:

1. If Lane C's independent hosted comparison plus Lane B's repository-side confirmation satisfies "Lane B confirmation that hosted and local status agree," record that basis and check `DOR-R6`.
2. If the rule requires Lane B personally to read the hosted v15 text, leave `DOR-R6` unchecked until the Chief Editor provides authenticated read access or an export of v15. Do not substitute this handoff's repository-only review for that missing observation.

### Option 2 return condition satisfied by supplied v15 export

The Chief Editor has now supplied an export headed **“Revision v15 — Entries 01, 05, 06 compared for
V1-SM05 DOR-R6 and annotated (`D-256`)”.** Lane B read the export directly and compared the three
dated 2026-09-24 notes with `D-256`, `ENCYCLOPEDIA-SYNC.md` and the current SM05 boundaries:

- Entry 01 contains the three-way Chief Editor identity split, distinguishes `business:T5` from
  `transition:T5`, and corrects the hosted-anon overclaim by retaining `DEP-05`;
- Entry 05 records the `business:T5` ranking reframe, keeps the `T6→T5` metric outside V1, and
  discloses partial `CR-19`; and
- Entry 06 records the `D-194`/`D-197` human-supplied trigger package, the three pre-`T1` events and
  the limited `V1-SM05` evidence slice.

Entry 04 remains expressly deferred to `V1-SM06`, matching the ledger. This satisfies **Option 2's
Lane B direct-content confirmation**. `DOR-R6` is ready for Lane A to record and check in the same
governed pass that records the export/hash and reconciles the ledger's update-complete state with its
older “Deferred” cells. The checkbox is not changed by this handoff edit.

## Parent 3 — remaining sequence

After Lane A records the Judge's W1–W3 answers and this R5 review, `DOR-R5` has its required walkthrough and Lane B/C review evidence. `DOR-R6` follows Parent 2 above. Only when the complete DoR is accepted does the existing sequence continue: single GitHub Issue → `features/feature-V1-SM05` → documentation-only State-1 PR → Judge selection and work order → Lane B `Eligible` to `Active` → State-2 construction.

## What Lane B did instead

Lane B performed the feasibility and evidence review, recorded the Judge's supplied W1–W3 act, and stopped at the lane boundary. No Lane A document, checklist, storyboard, Encyclopedia, application file, Issue, branch, PR or lane state was changed.

## Verdict

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | Panel A11 normal/revision journey, data flow, source table and exclusions | Phase 1 / Lane A records walkthrough and review evidence |
| **Approve** | `W1`, `W2`, `W3` as Judge-decided behavior | Phase 1 / Lane A records the answers; make W2's downstream-evidence rule explicit |
| **Approve** | `DOR-R6` evidence under Option 2 | Phase 1 / direct v15 export review is complete; Lane A records the export/hash, reconciles the ledger wording and checks the row |
| **Defer** | Issue, feature branch, State-1 PR, selection, work order and Lane B activation | Post-DoR sequence under `D-253`/`D-254` |
| **Reject** | Claim that Lane B directly compared hosted v15 in this pass | The available browser reached a sign-in page only |
