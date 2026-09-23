# B-124 — SM05 identity-compatibility readiness gate contradicts D-252 sequencing

- **Raised:** 2026-09-22 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** truthful completion of the V1-SM05 DoR, GitHub Issue creation and State-1 readiness presentation
- **Status:** Answered
- **Lane A:** Acknowledged 2026-09-22. Applied the non-blocked half of the parent-first correction:
  appended a dated `D-252` supersession note to `docs/handoff/B-119` (historical A01 review text and
  receipt bytes unchanged) and corrected `docs/handoff/B-120` Parent 3's narrative to remove the
  circular-gate framing. Did **not** edit `V1-SM05.md`'s identity-compatibility row or checkbox — the
  draft canonical correction in this entry is explicit that the checkbox is set only in the same pass
  that records the five `OPERATOR TO CONFIRM` facts (`B-120` Parent 1), and those remain unsupplied.
  `Status` stays `Open` pending that supplemental attestation; this is a partial disposition, not a
  closure.

  **Closed as superseded, 2026-09-23.** The Judge's Option-A ruling (`D-255`, `docs/handoff/B-129`)
  removed the identity-compatibility row from `V1-SM05` outright with no replacement gate, and scoped
  A01 and its five facts to `SETUP-SPIKE-000/S2` only. This entry's draft correction — checking the
  row once the facts arrive — therefore has nothing left to apply. The deadlock it identified is
  resolved by removal rather than by evidence.
- **Resolution:** Superseded
- **Verified-By:** — not independently verified; dispositioned by Lane A
- **Evidence:** `V1-DECISION-REGISTER.md` §5.14e77 (`D-252`) items 4–6 and §5.14e80 (`D-255`); `docs/v1/work-packets/V1/V1-SM05.md` DoR checklist (identity row removed); `docs/handoff/B-119` and `B-120` supersession notes; `docs/handoff/B-129`
- **Verified-At-Commit:** c249f7d3d45fc812a25bc3cfa54fb415512245a1
- **Superseded-By:** `D-255`

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

## Consolidated Lane A review packet

### Facts to preserve

- Local A01 completed its assessment and returned `no matches`.
- Supabase A01 stopped fail-closed during preflight because hosted `0002` was absent; its aggregate
  assessment **did not run**.
- Both accepted, hash-anchored A01 receipts are pre-selection readiness evidence under `D-252` once
  B-120 Parent 1's supplemental operator metadata is recorded.
- Neither receipt satisfies final `D-251` production classification. Hosted `0002`, Supabase A02
  and final classification remain post-SM05 release work.

### Draft canonical correction

After the Chief Editor supplies the five operator facts, replace the stale compatibility row in
`docs/v1/work-packets/V1/V1-SM05.md` with the following governed meaning:

> **Identity-compatibility readiness:** accepted Local A01 and Supabase A01 receipts have been
> reviewed. Local A01 produced `no matches`; Supabase A01 is accepted fail-closed hosted-baseline
> evidence and its assessment did not run. Together with the supplemental operator metadata, these
> receipts satisfy pre-selection readiness under `D-252`. Final `D-251` classification, hosted
> `0002`, and Supabase A02 remain post-SM05 release work and do not gate selection.

The checkbox becomes `[x]` only in the same pass that records the five supplied facts; do not infer
or fabricate missing metadata.

### Required propagation without duplication

1. **B-119:** preserve its historical A01 review text and receipt bytes, then append a dated
   `D-252` supersession note. The note must say that the earlier statement keeping SM05 unselected
   until Supabase resolves was overtaken by `D-252`; A01 plus supplemental metadata satisfies
   pre-selection readiness, while final D-251/A02 remains post-release.
2. **B-120 Parent 1:** record the supplied five facts as complete by citation to the B-119
   supplemental attestation.
3. **B-120 Parent 3 narrative:** record compatibility readiness as satisfied via B-124. Do not add
   compatibility as a new row in the R2–R6 table.
4. **V1-SM05 evidence table:** cite the two A01 receipts, the B-119 supplemental attestation,
   `D-252` and B-124; do not claim the Supabase assessment ran.
5. **B-124 lifecycle:** acknowledge while `Open`; after the corrections exist, set `Status:
   Answered`, `Resolution: Applied`, and `Verified-By: — not independently verified; dispositioned
   by Lane A`. Independent verification remains a later Lane B/C act.

### Dependent sequence

After this correction, Lane A still completes `DOR-R5` and `DOR-R6`, commits the pre-Issue canonical
state, performs the full governed Graphify workflow, and obtains explicit Judge authority before
any push, Issue, branch or PR operation. State-2 construction remains prohibited until the State-1
PR, Judge selection, bounded work order and lane transfer.

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
