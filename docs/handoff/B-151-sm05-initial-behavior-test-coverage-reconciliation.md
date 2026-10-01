# B-151 — Reconcile SM05 initial behavior-test planning with DoR/DoD

- **Raised:** 2026-09-30 by Lane B
- **Kind:** dependency
- **Phase:** 1
- **Blocks:** declaring corrected SM05 build inputs complete or closing the reported omission solely on historical setup validation
- **Status:** Answered
- **Lane A:** **Answered 2026-10-01 (`D-373`, applied at `31bcf3a`), read at `5a30b6c`.** `U2` was accepted at Level 1
  (Lane B, `773df96`) and Level 2 (Lane C, supplied by the Judge; recorded in `B-150`, `5a30b6c`), and `U3` then
  ran. The classification below covers the one finding the Judge named. Each intake case now has an explicit input,
  proof and gate:

  | Allegation | Classification | Evidence |
  |---|---|---|
  | The four intake cases were written in the SM05 DoD but not enforced by readiness tooling (`D-288` item 5) | **Confirmed missing in tooling; now corrected.** The written DoD already covered them (`D-287`, `D-288`) | FN-GATES §4.6 gains `SM05-IN1`–`IN4` as `[V1]` Given/When/Then rows: URL pass, admitted-Markdown pass, no-reference fail, no-URL Markdown refused. The rows are anchored to `FR-15` (`AC-23` for the pass cases, `AC-26` for the refusals), by the Judge's choice. The manifest pins all four under "Intake source fixtures", and the label is now in `failingFirstRequired` and `negativeRequired`. The `DOR-R7` receipt was re-issued as `pass`, 320/320, at clean `31bcf3a` |

  **Gate and owner.** No SM05 prerequisite moves to SM06. Each case still needs its own database artifact and
  failing-first evidence, built under the `D-242` work order after Gate 2 (Lane B). Readiness enforces that the
  obligation exists; it does not prove the behaviour. No test, application or schema changed. Disposition: `Applied`;
  Lane B, as raiser, verifies.
  *Earlier receipt:* Acknowledged 2026-09-30, receipt only, read at `54a60d1` (received blob `60a2e0f`). The Judge
  names the historical finding in chat: the Jev manifest limit kept by `D-288` item 5 (from `B-142` item 6). Lane A's
  first reading at `54a60d1`: `scripts/jev/manifests/V1-SM05.json` has no `behaviours` row for the DoD label "Intake
  source fixtures", and the label is absent from `negativeRequired` and `failingFirstRequired`. The four cases are
  written in `V1-SM05.md` (`D-287`, `D-288`) but are not enforced by readiness tooling. Classification is pending the
  `B-150` S1 act; no manifest, packet or test changes.
  **P0c recorded 2026-09-30 (`D-364` item 10).** The Jev amendment supersedes `D-288` item 5. It is executed in unit
  `U3`, after `U1` and `U2`, and this entry's classification is recorded then. The entry stays `Open`.
- **Resolution:** Verified
- **Verified-By:** Lane B (Codex), independent of Lane A's answer, 2026-10-01; planning reconciliation only
- **Evidence:** Level 1 read a825260: U3 at 31bcf3a has four exact pinned intake rows, FR-15/AC-23 or AC-26 anchors and both required labels. Independent current readiness passes 320/320; historical clean 31bcf3a receipt and source hashes verified. External review checks pass 20/20; Jev self-tests pass. Verification closes the named tooling/planning omission, not runtime behavior or Gate 2.
- **Verified-At-Commit:** a825260ec24aac0bd217ed03a630d85eb7ce596e

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

## Lane B independent verification — 2026-10-01

Judge-requested review read `a825260ec24aac0bd217ed03a630d85eb7ce596e`; applied U3 revision
`31bcf3a2038e29edf0d05c47f32fe60dceebacaf`, disposition/receipt recorded by D-373 at `4baafc8`.
The four rows transcribe existing §4.6 rules without introducing a feature: SM05-IN1 URL pass;
IN2 admitted Markdown pass with original URL/exact-text digest and no URL-live claim; IN3 missing
reference fails with named validation failure; IN4 Markdown without original URL is refused at admission.
Each has its own pin and FR-15 acceptance anchor; the intake label is in both required sets.

Independent read-only review `C:/CoWork/outputs/handoff-review-2026-10-01/review-u3-d374.mjs`:
20/20 checks pass, including source pins, acceptance anchors and the historical receipt/source hashes.
Results SHA-256 `c082e79d6e0858493e884ab21d8fd8378cd96f492ad883bde3f317a2325ccba9`.
Current readiness passes 320/320; the original receipt independently matches clean 31bcf3a and
320 successful rules. Jev self-tests all behave as named. These are planning/tooling checks, not
application/database tests; no runtime construction occurs. Lane A's answer is preserved.

The named reconciliation deliverable is independently Verified. Each case's real database artifact,
failing-first evidence and runtime acceptance remain in the authorized Phase 2 work order. Lane C's
Level 2 review of U3 is separate; this header does not represent its result or whole B-150 clearance.
Lane A includes this review in SV-002 §2.3.2 and checks/re-pins §2.3.1 after this new disposition commit.

| Decision | Verdict | Follow-up phase / condition |
|---|---|---|
| B-151 named planning/tooling reconciliation; U3 Level 1 scope | Approve | Phase 1 — independently Verified in this bounded scope |
| U3 Level 2 acceptance and tracking consumption | Approve-with-conditions | Phase 1 — current Lane C review; ledger record and derivation currency checked after verification |
| Intake runtime/database behavior and Gate 2 construction | Defer | Gate 2 → authorized Phase 2 — separate case artifacts and genuine failing-first/runtime proof |
