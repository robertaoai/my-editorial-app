# B-124 — SM05 identity-compatibility readiness gate contradicts D-252 sequencing

- **Raised:** 2026-09-22 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** truthful completion of the V1-SM05 DoR, GitHub Issue creation and State-1 readiness presentation
- **Status:** Open
- **Lane A:**
- **Verified-By:** — not yet dispositioned; raised by Lane B
- **Evidence:** `V1-DECISION-REGISTER.md` §5.14e77 (`D-252`) items 4–6; `V1-BUILD-SPEC.md` stacked-PR boundary; `docs/v1/work-packets/V1/V1-SM05.md` identity-compatibility evidence row; `docs/handoff/B-119` A01 review and `docs/handoff/B-120` Parent 1
- **Verified-At-Commit:** 5c5236988f8d871f5dd0da432bb646f264163eb5

## What happened

Lane B reviewed Lane C's post-B-123 gap ledger and found a circular readiness gate that the review
listed but did not disposition.

`D-252` is the controlling Register decision. It says:

1. Local and Supabase A01 receipts establish **pre-selection readiness**.
2. They do not satisfy final `D-251` production classification.
3. Hosted `0002` migration and Supabase A02 occur only **after** accepted V1-SM05 development DoD
   and accepted baseline promotion.

The live `V1-SM05.md` checklist instead remains unchecked until the aggregate assessment produces a
reviewed result and says an unresolved match keeps the packet unselected. Supabase A01 is unresolved
because hosted `0002` has not been applied; the governed sequence forbids that migration and A02
until after SM05 DoD. Read literally, SM05 cannot be selected until evidence that cannot exist until
after SM05 is completed.

Under `D-58`, the Register wins. This is a work-packet propagation defect, not authority to migrate,
run A02 or presume its result.

## Parent-first correction for Lane A

1. Preserve `D-252`'s sequence: no hosted `0002` migration and no A02 before accepted SM05 DoD and
   baseline promotion.
2. Complete B-120 Parent 1's supplemental operator attestation without changing either hash-anchored
   A01 receipt.
3. Correct the `V1-SM05.md` identity-compatibility row so its **pre-selection** evidence is the two
   accepted A01 receipts plus the supplemental operator metadata. State explicitly that the open
   final `D-251` production classification and post-release A02 are not SM05 selection gates.
4. Update the packet's evidence table and B-120 remaining-gap summary by citation, without copying
   receipt contents.
5. If the Judge instead intends final D-251/A02 to gate SM05 selection, record a new decision that
   explicitly amends D-252 and resolves the resulting migration-before-DoD cycle. Do not infer that
   reversal from the stale checkbox.
6. After the canonical correction, run the governed Graphify workflow and complete consistency suite.

## What Lane B did instead

Lane B stopped at the specification defect. No receipt, canonical Lane A source, application code,
migration, database, Issue, branch, remote or PR was changed.

---

## Verdict

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | A01 receipts as pre-selection readiness evidence | Phase 1; complete supplemental operator metadata |
| **Approve** | Final D-251 classification remains open | Post-SM05 release verification under D-252 |
| **Defer** | Hosted `0002`, Supabase A02 and final production classification | After accepted SM05 DoD and baseline promotion |
| **Reject** | Unresolved Supabase A01/A02 as an SM05 selection blocker | Contradicts D-252 and creates a circular gate |
| **Reject** | Running hosted migration or A02 to clear this DoR row now | Outside the approved lifecycle |
