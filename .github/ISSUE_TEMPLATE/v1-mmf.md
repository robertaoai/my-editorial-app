---
name: V1 MMF — post-DoR intake
about: One Issue for ONE V1 MMF packet whose DoR is already complete (D-253, D-254, D-259)
title: "V1-SM0_: <bounded business outcome>"
labels: []
assignees: []
---

<!--
One Issue = ONE V1 MMF packet (`D-245`, `D-253`, `D-259`).

This template grants NO authority and selects NOTHING. The Issue is external tracking, not a
repository record (`D-253`): it RECORDS a DoR that is already complete — it can never be the
evidence that made an incomplete DoR complete (`D-254`). Opening it creates no selection, work
order, lane transfer or construction authority.

Cite, never copy: link each fact to the record that owns it. Do not paste Given/When/Then text,
check totals or a Jev receipt's contents into this Issue.
-->

## 1. Packet and outcome

- **Packet:** `docs/v1/work-packets/V1/V1-SM0_.md`
- **Bounded business outcome** (one sentence, from the packet's anchors):
- **Register acts that bound it:** `D-___`

## 2. DoR — complete before this Issue exists

- [ ] Every `DOR-R*` row of the packet is checked, or Judge-deferred with its decision ID, each linking
      to its evidence row in the packet
- [ ] **Jev readiness receipt** passes for this packet (`DOR-R7`, `D-259`): receipt path and the
      commit it evaluated: `___`

## 3. DoR → DoD and evidence classes

Link the packet's `| DoR row | DoD obligation | Evidence class |` table. Do not restate it here.

- Map: `docs/v1/work-packets/V1/V1-SM0_.md` §DoR→DoD map
- Canonical acceptance IDs in scope (IDs only — the rows live in `Modular_PRD.md` §9 and `docs/fn-specs/`):

## 4. Scope boundary

- Inclusions:
- Exclusions (from the packet):
- Dependencies and their status:
- Data boundary: construction is local-only (`D-252`); no hosted migration or deployment

## 5. Branch and pull request (`D-253`)

- [ ] Branch `features/feature-V1-SM0_` created by native Git from the verified pushed tip of the
      approved base — only after this Issue exists
- [ ] State-1 pull request is documentation-only and links this Issue

## 6. Planned construction (Lane B, after selection)

- Planned construction children — exact xDD method is Lane B's, recorded in the work order (`D-242`):
- Evidence manifest path Lane B fills for Jev completion mode:

## 7. Completion and acceptance route (`D-245`, `D-259`)

1. Lane B, while `Active`, runs Jev completion mode and the full consistency run, then hands back with
   the completion receipt attached to its turn report
2. Lane A, after the lock returns, re-runs Jev completion and runs the customer-acceptance harness —
   the non-builder independent verification
3. The Judge accepts the business outcome and the DoD
4. The pull request then follows its governed merge act. Merge is not DoD

## 8. Stop conditions

This Issue does not select the MMF, issue a work order, change lane state or authorize construction.
Refuse it if any DoR row is unchecked without a Judge deferral, the Jev readiness receipt is missing or
failing, or more than one packet is named.
