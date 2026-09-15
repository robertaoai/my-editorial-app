# B-106 — A4/A6 configuration ratification and semantic collision

- **Raised:** 2026-09-15 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** truthful configuration readiness for the two named values; no unrelated planning or build work
- **Status:** Open
- **Lane A:**
- **Verified-By:** — not yet dispositioned; raised by Lane B
- **Verified-At-Commit:** ae5548c4a6f51dc3b5b1df9343769fa47f33cc00
- **Evidence:** Chief Editor's 2026-09-15 direct act; `CONFIG_LOG.md` §2; `DECISION_LOG.md` §§1–3; `lib/config/build-config.ts`; Register `D-134`, `D-135`, `D-198`; `B-085` G-3 disposition.

## What happened

The Chief Editor supplied this decision-tree act:

| Configuration row | Approved value | Source label |
|---|---:|---|
| `DATA_RETENTION_ARCHIVE_DAYS` | 90 | `A6` |
| `SCORING_REVIEW_THRESHOLD_ARTICLES` | 50 | `A4` |

The two values already exist in `lib/config/build-config.ts`, but both entries carry
`status: "UNRATIFIED"`; `CONFIG_LOG.md` says **No — unratified**, and `DECISION_LOG.md` says they
were never put to the Chief Editor. The direct act therefore settles the previously missing
approval event for the rows as presented. It authorizes no implementation in this handoff pass.

The A6 row also exposes a pre-existing semantic collision that cannot be hidden by changing the
status flag. `D-134` and the current Product/source tiers define A6 editorial archival as **five
years** and keep it independent of `REUSE-WINDOW-90`. `D-198` and `B-085` already identify the old
90-day A6 ledger/code declaration as the inconsistency. The new act approves the presented row,
but does not expressly say that it supersedes `D-134`, merges the two clocks, or authorizes
deletion. Under `D-58`, Lane A must record an explicit Register arbitration before Lane B can treat
the old symbol as a ratified archival control.

## Parent-first decision table

| Order | Parent / child | Lane A treatment | Accept evidence | Reject condition |
|---:|---|---|---|---|
| 1 | **Parent — capture the Judge act** | Record the two supplied row/value approvals and their date in the Register; distinguish approval of the presented row from runtime activation | One canonical act quotes both exact symbols, numbers and source labels | The approval exists only in this handoff or is treated as build authorization |
| 2 | **A6 semantic arbitration** | Preserve `D-134` unless the Judge explicitly supersedes it. Decide whether the 90-day symbol is a legacy misname for `REUSE-WINDOW-90`, must be retired, or is a newly intended third clock. State that 90 is neither disposal authority nor an inferred five-year conversion | Register names one meaning, one clock owner and the affected symbol disposition | Marking `DATA_RETENTION_ARCHIVE_DAYS=90` ratified while A6 still means five-year archival |
| 3 | **A4 semantic boundary** | Record 50 as the review/reassessment threshold for the scoring proposal. Keep `TC3`/`CR-06`/`FB-06` and missing scoring implementation open | Threshold, trigger event, owner and resulting review action are explicit | Treating 50 articles as evidence that scoring works or allowing a score to auto-advance a gate |
| 4 | **Ledger propagation** | Reconcile `DECISION_LOG.md` and `CONFIG_LOG.md` to the Register act. Correct the Build Spec's stale ratification statement only after A6 arbitration | The three sources agree and preserve historical provenance | Overwriting history, duplicating policy values across tiers, or leaving contradictory current rows |
| 5 | **Lane B application packet** | If a runtime metadata change remains necessary, issue a separate bounded work order naming exact constants and tests | Values are unchanged unless arbitration explicitly says otherwise; metadata matches the governed meaning | Lane B renames/retypes a constant or changes behaviour from this handoff alone |

## Lane A follow-up

1. Read `D-134`, `D-135`, `D-198` and `B-085` before editing either row.
2. Append one Register act that records the A4 decision and arbitrates the A6 collision. Do not
   imply that the Chief Editor approved deletion, automatic archival, scoring execution or gate
   advancement.
3. Prepare the exact Cowork-authored source packet for `DECISION_LOG.md`, `CONFIG_LOG.md` and the
   stale current statements in the Build Spec/Register. Apply it through the B-102
   semantic-author/commit-applicator procedure after the Judge accepts the packet.
4. In the `docs/v1/` propagation record, state the Artifact Inventory is unaffected unless the act
   creates or retires a file. State `Modular_PRD` §8 is unaffected because no sprint closes and no
   tier opens. Product behaviour/storyboard/story panels/UML/data flow/Encyclopedia remain
   unaffected unless A6 arbitration changes the governed clock meaning.
5. Give Lane B a separate application unit only if configuration code metadata or naming must
   change. Its DoD must include the configuration-coupling checks and a direct assertion that no
   score advances an editorial gate.
6. Return the committed source result to this entry for independent Lane B review. Run Graphify
   only after the promoted governance intent is committed and independently verified.

## Guaranteed failures and completion evidence

| Guaranteed failure | Completion evidence |
|---|---|
| A source says A6 is five years while a `RATIFIED` runtime entry says A6 archive days is 90 | Register arbitration and every current consumer use one named meaning; independent review confirms the clocks remain separated |
| Ninety days is interpreted as disposal or automatic deletion | Governing text explicitly denies deletion authority and preserves the external retention/disposal boundary |
| Fifty articles is interpreted as a working score or an automatic gate | A4 states review/reassessment only; TC3 and implementation readiness retain their own open evidence |
| Configuration status changes without a decision event | Register and ratification ledger cite the direct Judge act before a Lane B code packet opens |
| This analysis is used as permission to build | No application source changes until a fresh bounded work order, DoD and active-lane authorization exist |

## What you need

Lane A must acknowledge the direct A4/A6 row approval, resolve the A6 label/value collision through
the Register, and return an exact governance propagation packet. No new numerical choice is needed
for A4. A6 needs semantic arbitration, not another unsupported assumption.

## What you did instead

Lane B changed no governance source or application code. It recorded the decision, the conflict,
the dependencies and the proof required for safe application.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | `SCORING_REVIEW_THRESHOLD_ARTICLES = 50` as the A4 review threshold | Phase 1 governance propagation; later bounded Lane B metadata unit if required |
| Approve-with-conditions | The Chief Editor's presented `DATA_RETENTION_ARCHIVE_DAYS = 90` row | Phase 1 Register arbitration against `D-134`; no deletion, clock merger or silent supersession |
| Approve | B-102 Cowork-author / Code-applicator route for the exact source patch | Phase 1 after Judge acceptance of the immutable packet |
| Defer | Runtime metadata/name changes and tests | Fresh build authorization after governed meaning is consistent |
| Defer | Graphify synchronization | Promoted intent committed and independently verified |
| Reject | Treating either numeric approval as scoring activation, archival execution, deletion, sprint selection or build authority | Remains outside this Judge act |
