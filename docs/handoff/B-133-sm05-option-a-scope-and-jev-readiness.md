# B-133 — SM05 Option-A scope correction and Jev readiness coverage

- **Raised:** 2026-09-24 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** a valid passing `DOR-R7` receipt and the downstream Issue, branch and State-1 PR
- **Status:** Answered
- **Lane A:** Acknowledged and answered 2026-09-24 (`D-260`). Parent 1 kept (the first failing receipt stays in
  git history at `e805fb9`). Parent 2 recorded as `D-260`. Child 2A applied: `FR-04a`/`AC-05a`/`AC-06a` removed
  from the packet, manifest and traceability map §6.1 rows 6–7; row 7 routed to the `D-171` hold with no packet
  named. Two further consumers were found beyond this entry and fixed on Judge answers: `AC-11`/`AC-12`
  (transition-row audit) leave `V1-SM05` (row 8), and `AC-01` is pinned to `FN-GATES-01-05.md` §5's `[V1]` row
  because `Modular_PRD` §9's version claims a transition row. Child 2B applied: `FN-GATES-01-05.md` §4.4 numbers
  the accepted Panel A11 journey (`SM05-N1`–`N6`, `RV1`/`RV2`, `F1`, `X1`), and Jev's scope parity now covers
  every ID shape and wrapped DoD items. It caught one wording slip of Lane A's own during this pass. Child 2C:
  `DOR-R7` is checked on a passing receipt at a clean commit. **One correction to this entry:** gap 4's
  `repositorySha: null` — the receipt field is `evaluatedAt`, and the first receipt already named clean commit
  `b7992f5` (`treeClean: true`). `Verified` remains Lane B's to record.
- **Resolution:** Applied
- **Verified-By:** — not independently verified; dispositioned by Lane A (normalized 2026-09-24, `D-261`)
- **Evidence:** Judge Option-A ruling supplied 2026-09-24; `D-249`; `D-259`; `docs/Modular_PRD.md` §9; `docs/v1/work-packets/V1/V1-SM05.md`; `docs/governance/requirements-traceability-map.md` §6.1; `scripts/jev/manifests/V1-SM05.json`; `docs/v1/work-packets/V1/receipts/V1-SM05-jev-readiness.json`
- **Verified-At-Commit:** e805fb973c61796a6e2681633c3a4994e2114167

## What happened

Lane A applied `D-259`, built Jev System One and added required readiness row `DOR-R7`. The first
readiness receipt correctly fails because the manifest treats `AC-05a` and `AC-06a` as SM05 build
behavior even though both Product rows are `[decided_target_held]` under `D-171` and describe the
technical `T5` review bundle / `T6` gate that `D-249` excludes from this limited evidence slice.

The Judge has now selected **Option A**: `V1-SM05` is the evidence slice for `business:T1`–`T5`
stage/task records. Technical `transition:T5` review bundles and `transition:T6` approval gates remain
held for later delivery increments.

That decision resolves which side of the Jev finding wins, but Lane C's proposed two-file correction
is incomplete:

1. `V1-SM05.md` still cites `FR-04a`, `AC-05a` and `AC-06a` as packet anchors and executable database
   acceptance cases.
2. `requirements-traceability-map.md` §6.1 still assigns “Chief Editorial Desk executes T5” and
   “Chief Editor executes T6” to `V1-SM05`, directly contradicting its own §6.3 statement that SM05
   makes no `transition:T*` execution claim.
3. Simply deleting the two held IDs from the Jev manifest can produce a narrower green receipt without
   proving the packet's stated `business:T1`–`T5` normal/revision evidence journey. The remaining
   Product IDs `AC-01`/`AC-02` cover intake; the `DOR-R2`–`DOR-R4` rows cover trigger, pitch and bounded
   operation/refusal contracts. Lane A must identify the canonical scenario IDs that cover the
   remaining business-stage/evidence behavior, or add stable acceptance identifiers in the owning
   behavior tier before declaring scope parity.
4. The preserved failure receipt has `repositorySha: null`. That is acceptable as failure evidence,
   but a passing readiness receipt cannot be provenance-bearing unless it records the clean commit it
   evaluated.

The held Product rows remain valid future intent. Option A removes them from this packet; it does not
delete, rewrite or mark them completed, and it does not choose their exact later MMF beyond the
existing `D-171` held owner.

## What you need

Apply the following parent-first package. Do not assume the next Register identifier until Lane A
records it.

### Parent 1 — preserve the completed `D-259` baseline

Keep the Jev engine, negative self-test, Issue template, `DOR-R5`/`DOR-R6` evidence, truth layers,
DoR→DoD map and acceptance-harness contract. The failed receipt is useful control evidence: it found
a real scope contradiction rather than passing around it.

### Parent 2 — record the Judge's Option-A boundary

Record one Register act stating:

- SM05 builds and verifies `business:T1`–`T5` stage/task/evidence records only;
- technical `transition:T5` review-bundle execution and `transition:T6` approval-gate execution are
  outside SM05 and remain in the existing `D-171` held scope;
- `AC-05a` and `AC-06a` stay unchanged in `Modular_PRD.md` §9 as future held intent;
- no exact later packet is invented by this act; and
- the act grants no Issue, push, branch, PR, selection, lane-transfer or construction authority.

### Child 2A — remove the held execution contract from SM05 consumers

In the same governed pass:

1. Remove `FR-04a`, `AC-05a` and `AC-06a` from `V1-SM05.md`'s requirement anchors and database
   acceptance-case DoD row. Preserve the separate non-enforcing Line/RACI display obligation.
2. Remove `AC-05a` and `AC-06a` from the SM05 Jev manifest and regenerate its pinned scope from the
   corrected packet.
3. Correct `requirements-traceability-map.md` §6.1 rows 6–8 so they no longer claim technical T5/T6
   execution in `V1-SM05`. Retain only the business-record/display evidence actually authorized by
   `D-249`; route held execution to `D-171` without inventing a new delivery slot.
4. Sweep every other SM05 consumer for the same held-ID or technical-execution assignment. Do not edit
   the held Product or Fn_Spec rows merely to make Jev pass.

### Child 2B — prevent a green-but-under-scoped receipt

Before rerunning Jev, establish exact acceptance coverage for the authorized `business:T1`–`T5`
normal and revision evidence journeys, including the Panel A11 visible facts and absence of technical
transition execution. Reuse existing stable behavior IDs where they fully cover the obligation. If no
such IDs exist, add bounded scenario identifiers in the owning functional-specification tier and point
the packet/manifest to them. Do not duplicate Given/When/Then text into the manifest or Issue.

The scope-parity invariant is:

> every behavior promised by the SM05 DoD is pinned by the manifest, and every manifest behavior is
> authorized by the SM05 packet.

### Child 2C — regenerate and accept `DOR-R7`

Run Jev readiness only after Children 2A and 2B are complete. A valid passing receipt must:

- report `outcome: pass`;
- name the clean repository commit in `repositorySha`;
- contain no held or historical execution row without a Judge disposition;
- cover every SM05 DoD behavior exactly once through a canonical ID/evidence mapping; and
- retain the statement that the receipt is evidence only.

Only then may Lane A check `DOR-R7`. The Issue, push, branch and State-1 PR remain separately
authorized external acts in `D-253` order.

### Propagation

| Tier / artifact | Required disposition |
|---|---|
| Register | Record Option A and the no-authority boundary |
| `V1-BUILD-SPEC.md` | Replace the open Jev-finding status with the corrected scope and current R7 result |
| `V1-ARTIFACT-INVENTORY.md` | Update the receipt row from preserved failure to the new result; do not restate a mutable tally |
| `V1-SM05.md` | Correct anchors, DoD acceptance IDs, R7 evidence and scope-parity mapping |
| `requirements-traceability-map.md` | Remove the contradictory SM05 T5/T6 execution assignments |
| Jev manifest / receipt | Repin authorized behavior; produce a commit-bound result |
| `docs/fn-specs/` | Change only if Child 2B proves stable scenario IDs are missing |
| `Modular_PRD.md` §9 | Unaffected: held `FR-04a`/`FR-05a` and `AC-05a`/`AC-06a` remain future intent |
| Storyboard Panel A11 | Behavior unaffected; add identifiers only if selected as the canonical scenario owner |
| Live-lineage V2 receipt, Encyclopedia, rule files, migrations, application code | Unaffected |

## Handoff accounting correction

The supplied Lane C lifecycle summary is not the repository state at the commit above:

- `B-120` and `B-125` remain `Open`;
- `B-121`, `B-122` and `B-126` are `Applied`, which is non-terminal;
- `B-123` and `B-129` are `Verified`;
- `B-124` is `Superseded`;
- `B-127`, `B-128`, `B-131` and `B-132` are `Applied`, pending independent verification;
- `B-130` is `Deferred`; and
- the proposed external entry reuses `C-002`, an existing identifier. It is analysis, not a repository
  handoff or a source of `D-260` authority.

The full commit written in the supplied proposal (`e805fb97be58a0a9fa93298a0d42188fbfa18c0c`)
does not exist in this repository. The observed commit is
`e805fb973c61796a6e2681633c3a4994e2114167`.

## What you did instead

Lane B accepted the Judge's Option-A intent, inspected the applied `D-259` tree, traced the held IDs
through the packet, Jev manifest and requirements map, and filed this new entry rather than reopening
the already-applied `B-132`. No canonical Lane A source, Jev script, manifest, receipt, application
file, Issue, branch, PR or lane state was changed.

## Verdict

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | Judge Option A: SM05 is the `business:T1`–`T5` evidence slice | Phase 1 / record in the next Register act |
| **Approve** | Preserve `AC-05a`/`AC-06a` as held Product intent | Later increment / existing `D-171` owner; no exact future MMF invented |
| **Approve-with-conditions** | Remove held technical-execution IDs from SM05 and rerun Jev | Phase 1 / correct every consumer and prove scope parity first |
| **Approve-with-conditions** | Check `DOR-R7` | Phase 1 / passing commit-bound receipt with complete authorized behavior coverage |
| **Defer** | Issue, push, branch, State-1 PR and Lane B activation | Phase 1→2 / after R7, with each governed authorization |
| **Reject** | Delete two manifest rows and treat green as sufficient | It can conceal missing `business:T1`–`T5` acceptance coverage and leaves the traceability contradiction |
| **Reject** | Edit held Product/Fn_Spec behavior to fit SM05; assign it to a guessed later packet; cite proposed `D-260` as existing authority | Option A narrows this packet without rewriting future intent or creating unapproved scope |
