# B-151 — Reconcile SM05 initial behavior-test planning with DoR/DoD

- **Raised:** 2026-09-30 by Lane B
- **Kind:** dependency
- **Phase:** 1
- **Blocks:** declaring corrected SM05 build inputs complete or closing the reported omission solely on historical setup validation
- **Status:** Open
- **Lane A:** Acknowledged 2026-09-30, receipt only, read at `54a60d1` (received blob `60a2e0f`). The Judge
  names the historical finding in chat: the Jev manifest limit kept by `D-288` item 5 (from `B-142` item 6). Lane A's
  first reading at `54a60d1`: `scripts/jev/manifests/V1-SM05.json` has no `behaviours` row for the DoD label "Intake
  source fixtures", and the label is absent from `negativeRequired` and `failingFirstRequired`. The four cases are
  written in `V1-SM05.md` (`D-287`, `D-288`) but are not enforced by readiness tooling. Classification is pending the
  `B-150` S1 act; no manifest, packet or test changes.
  **P0c recorded 2026-09-30 (`D-364` item 10).** The Jev amendment supersedes `D-288` item 5. It is executed in unit
  `U3`, after `U1` and `U2`, and this entry's classification is recorded then. The entry stays `Open`.
- **Verified-By:** — not yet dispositioned; raised by Lane B
- **Evidence:** Judge clarifications, 2026-09-30; B-150 parent; D-242, D-264, D-276/D-277, D-287–D-289; linked coverage owners below
- **Verified-At-Commit:** 54a60d10b1ac8869bb46e9f992ac593266e13dfb

## What happened

The Judge reports omitted initial behavior-test obligations in historical validation. At original drafting the exact source was unidentified; Lane A's later receipt identifies D-288 item 5/B-142 item 6: an accepted Jev automation limit, not missing SM05 wording. Current [SM05](../v1/work-packets/V1/V1-SM05.md) already names acceptance cases, four intake cases, refusal/replay and database proof. Intake case 3 is no source reference; case 4 is Markdown without an original URL, not duplicate replay. Any tooling amendment requires explicit scope and case-level acceptance fixtures; planning readiness precedes selection, while actual behavior proof follows activation.

**Parent:** [B-150](B-150-premature-closure-audit-and-residual-transfer-plan.md) owns lifecycle/audit/transfer decisions and S1–S6. **This child's sole deliverable:** independently accepted reconciliation of SM05 behavior-planning coverage. It does not close B-130 or authorize test construction.

## What you need

Lane A validates the identified D-288 item 5/B-142 item 6 finding and classifies each alleged omission as **confirmed missing**, **already covered**, **scheduled at its authorized gate**, **outside SM05**, or **escalated**. Cite exact clauses/revisions; missing evidence stays unresolved. If another alleged omission has no source, ask the Judge for its validation row/revision while continuing the coverage comparison.

| Coverage to reconcile | Existing owner / proof boundary |
|---|---|
| Acceptance behavior and four intake cases | SM05 DoR→DoD/DoD: AC-02, SM05-N1–N6, RV1/RV2, F1/X1. Intake: (1) valid URL passes; (2) admitted Markdown with recorded original URL blocked from automated retrieval passes; (3) no source reference fails; (4) Markdown without original URL is refused. Each case keeps a distinct artifact; no multiple-source feature is inferred |
| Refusal, replay, persistence and display | DOR-R2–R4 and [Fn Specs](../fn-specs/FN-GATES-01-05.md) §4.3; DOR-R5 accepted display/record contract and SM05 persistence proof. Preserve admitted versus deferred execution scope |
| First child's inputs and method | [B-137.R1](B-137-b085-step3-packet-unapplied-residual-clauses.md); [SV-002](../v1/work-packets/SETUP-SPIKE-000/SV-002.md) §2.2/P13–P14, §3.3/§3.4 and re-screen boundary; [xDD guide](../LANE-B-WORK-ORDER.md) §7. Bind the actual child/method after its D-242 authorization |

**Required coverage row:** source child and old validation claim/revision → classification → governed behavior/requirement → DoR input → expected observable result → DoD proof → child dependency/definition trigger and consuming gate → canonical receiving anchor/receipt → execution owner and independent reviewer. Use existing keys and wording; justified many-to-many proof links are permitted. For a confirmed gap, name intended failing-first observation and planned artifact class/location; do not fabricate a not-yet-defined child or result.

**Follow-up order:** investigate now → present planning corrections under B-150's adopted contract → receive execution obligations into SM05/work order/future FV-001 → Lane B reviews feasibility/coverage → obtain Judge acceptance where the contract changes → independently verify this planning deliverable. Do not invent a new DoR row or reopen accepted rows without the controlling act.

**Acceptance:** every allegation classified with evidence or escalation; every applicable behavior has an explicit input/proof/gate; no SM05 prerequisite moved to SM06; independent review confirms actual coverage/receipts. This closes planning reconciliation, not software verification. New behavior gets genuine failing-first evidence during authorized construction; existing behavior permits honest characterization. Lane B chooses xDD under §7. Integration and business acceptance remain separate.

## What you did instead

Lane B condensed the coverage investigation and linked it to B-150. No tests, application, schema, canonical checklist or receiver answer changed. Actual test construction waits for Judge selection, bounded work order and Lane B Active; preserve the accepted partial-CR-19 boundary without inferred transition execution or publishing automation.

| Item | Verdict | Condition / follow-up phase |
|---|---|---|
| Coverage investigation for Lane A | Approve | Receipt, original findings and classified map. Phase 1 readiness |
| Planning-deliverable closure | Approve-with-conditions | Received obligations and independent Lane B coverage review; contract changes accepted by the Judge. Phase 1 |
| Initial test construction | Defer | Bounded authorization and Active lane; xDD evidence then precedes new production behavior. Gate 2 |
| Historical setup checks treated as behavior completion | Reject | Actual database/behavior/integration proof belongs to authorized implementation. Gate 2 |
