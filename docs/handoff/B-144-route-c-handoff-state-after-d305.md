# B-144 — Route C handoff state and stale build note after `D-305`

- **Raised:** 2026-09-28 by Lane B
- **Kind:** finding
- **Phase:** 1
- **Blocks:** a consistent Route C receipt history for independent review and Phase 1 closure; does not itself block the read-only Level 2 review
- **Status:** Open
- **Lane A:**
- **Verified-By:** — not yet dispositioned; raised by Lane B
- **Evidence:** `D-294`, `D-302`–`D-306`; `C-005`, `C-006`; `SV-002` §2.3/§3.1/§3.2/§3.4; `V1-PHASE-CLOSURE.md` §5; `Modular_PRD.md` `AIG-03`; storyboard Panel A11, `V1-SM05` `DOR-R5`, and `ENCYCLOPEDIA-SYNC.md` Entry 03 as screened by `D-306`; Graphify branch state and local consistency check at the commit below
- **Verified-At-Commit:** a986da3aff0b2009073286a7173e6f891e985458

## What happened

Lane B reviewed only the Route C / `C-006` boundary after Lane A's `D-305` answer and `D-306` cross-reference pass. The earlier proposed `B-144` review is **absent from this branch**; its draft-phase concerns do not need to be recreated. `C-006` is filed and `Answered/Applied` at `31859f1`. `D-305` establishes that Antigravity IDE 2.5.5 and service binary 2.17.0 were installed before both Route C runs, and `SV-002` §3.2 records that run-time build. `D-304` already establishes the R2 harness diagnostic: `AGENTS.md` was delivered through line 329 and cut after it; `graphify.md` and `CLAUDE.md` were not delivered. The per-file/shared budget and `graphify.md` cause remain unresolved until P4 re-measurement.

The remaining **tracking mismatch** is in `C-005`'s `Lane A:` answer: its operator-facts bullet still says the IDE `2.5.5` label is *“not confirmed from the installed files.”* That statement predates `D-305` and is now contradicted by the Register and `SV-002` run row. The original measurement narrative can remain as history; the current answer needs a dated correction or pointer. Under `D-58`, the Register decides the fact.

The dependencies are separate:

1. **Parent fact completed:** `D-305` answered the `C-006` build question and propagated it to `SV-002`. No new Product requirement or storyboard/data-flow diagram follows from that tool-loader fact.
2. **Receipt tracking open:** `C-005` and `C-006` are `Applied`, not independently `Verified`. The answering lane cannot self-promote either. Lane C, as raiser, may confirm Lane A's applied corrections under the handoff SOP; this is distinct from Lane B's Level 2 review.
3. **Route review open:** `SV-002` §3.1 still assigns Lane B the independent Level 2 review of Route C R2. That review has not been filed by this entry. Route A/B reviews and the combined report are dependencies of `SV2-DOD-03`, not extra children of the `C-006` reconciliation.

`D-306` has already checked the Product `US-15`/`FR-15`/`AC-23`–`AC-26` anchors, storyboard Panel A11's normal/revision sequence and data flow, the `V1-SM05` cross-reference, and Encyclopedia Entries 01/05/06. It corrected the reused `C-003` citation and flagged Entry 03 in the ledger only. Those are `V1-SM05` matters, not Route C loader requirements; no duplicate Product, storyboard, UML, data-flow or Encyclopedia edit is proposed here. `Modular_PRD` `AIG-03` points to `SV2-U02`/`SV2-DOD-03` and is unaffected by the build-version correction.

## What you need

1. **Lane A:** acknowledge this entry and correct its own `Lane A:` answer in `C-005`. Add the following dated text there, leaving the original measurement narrative intact: *“2026-09-28 (`D-305`): the earlier statement that IDE 2.5.5 was unconfirmed is superseded. Host creation and last-write evidence places `Antigravity IDE.exe` 2.5.5 and `Antigravity.exe` 2.17.0 on the host before R1 and R2; neither was rewritten before review. `SV-002` §3.2 records the run-time build. This does not complete Lane B's Level 2 review or independently verify this receipt.”*
2. **Lane C:** after the correction is applied by its proper owner, independently verify or dispute the applied facts in `C-005` and `C-006` as raiser, using the read commit and the SOP's `Verified` fields. Keep the Route C Level 2 review assigned to Lane B.
3. **Lane B:** perform the separate Route C Level 2 review against the pinned R2 evidence and harness record under `SV-002` §3.1. Record that receipt before the combined report treats Route C as reviewed.
4. **Lane A with the Judge:** keep the P4 budget/discovery alternatives open for the later remediation decision and re-measurement. Do not add a 23 KB CI limit, refactor rule files, check `SV2-DOD-03`, or release `V1-SM05` from this finding alone.

## What you did instead

Read the committed handoff and decision chain, checked the specific Product and visual cross-references, queried the current Graphify graph, and ran the consistency suite. At `a986da3`, `.graphify/branch.json` has `lastAnalyzedHead` equal to HEAD with `stale: false`; `docs-drift` passes. No graph rebuild or canonical-document edit is due from this read-only review. This entry reports the one new receipt mismatch; it does not change lane state or claim independent verification.

| Item | Verdict | Condition and follow-up phase |
|---|---|---|
| `D-305` / `C-006` build reconciliation | **Approve** | Recorded in the Register and `SV-002`; receipt remains `Applied` pending independent confirmation (Gate 1B, P1) |
| `C-005` stale IDE-build sentence | **Approve-with-conditions** | Lane A adds the dated `D-305` correction to its own answer; Lane C independently reviews it (Gate 1B, P1) |
| Route C Level 2 and receipt verification | **Defer** | Separate Lane B review and Lane C raiser-side verification, each with its own evidence (Gate 1B, P1) |
| New Product/storyboard/UML/data-flow/Encyclopedia edit for this loader fact | **Reject** | `D-306` covers the actual `V1-SM05` cross-reference changes; these tiers are unaffected by `C-006` (Gate 1B, P1) |
| P4 remediation or `SV2-DOD-03` / `V1-SM05` release now | **Reject** | Judge decision, re-measurement and remaining route evidence are outstanding (Gate 1B, P4 → Gate 2) |
