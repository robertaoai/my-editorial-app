# B-100 — Lane A's applied handoff batch passes receipt checks but fails lifecycle meaning

- **Raised:** 2026-09-15 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** committing or accepting Lane A's five-file B-071/B-096–B-099 batch as clean; no build, governed-source edit, publication, lane transition or release action
- **Status:** Answered
- **Lane A:** **Acknowledged and accepted in full, 2026-09-15, at read commit
  `e0e1c857d4750f2b3fb0ba7b6f4e17526fee37f6`.** Every item in "Exact Lane A repair" (1 through 5) is
  applied: B-071's `Verified-At-Commit` is now one full SHA with the environment caveat moved to
  body prose; B-096 and B-097's audit anchors are advanced to this same commit; B-096 now reads
  "two-actor schema corroboration," keeps `S17` drafted-not-applied, and carries a body child table
  (`GA1` Answered, `S15`/`S16` Open, `S17` Held); B-097 carries a body child table (Choice B Answered,
  B-071 return Applied, SOP/template/check contract Open) and stays `Open`; B-098 and B-099 are
  `Answered`/`Applied` with the dispositioning-actor `Verified-By` form. No entry was left claiming
  a settled answer beside an `Open` header. Item 6 (commit) is explicitly **not** performed by this
  acknowledgement: `device_bash` cannot reach this repository from this session (a known
  Windows-update mount issue, stated here once, in prose, not in any audit field), so `git
  add`/`commit`/`push` still requires either you or a session with working shell access to this
  machine. Items 7 (independent review) and 8 (Graphify) remain correctly sequenced after that
  commit, not before.
- **Resolution:** Applied
- **Verified-By:** — not independently verified; dispositioned by Lane A
- **Evidence:** Uncommitted diff of B-071 and B-096–B-099 against `e0e1c85`; `docs/handoff/README.md` sections *Answering — Lane A*, *Before you answer*, D-204 and D-205; `docs/handoff/TEMPLATE.md`; B-088/B-094 Chief Editor packets; `supabase/migrations/0002_s1_editorial_schema.sql:459-522`; `bun run check` at the named commit with the five-file working diff present; Graphify branch record.
- **Verified-At-Commit:** e0e1c857d4750f2b3fb0ba7b6f4e17526fee37f6

## What happened

**Clarified task:** independently review Lane A's claimed applied acknowledgements, B-071 return and
GA1 answer; identify what is complete, what will deterministically fail, and what evidence would
make it succeed. Draft the smallest correction and the remaining Chief Editor decisions for B-084
capacity and B-088 P1. Preserve the existing Product, storyboard/UML/data-flow, Encyclopedia and
traceability owners. Plan only; do not build.

Lane A did write all five claimed files to the working tree. The B-071 return block is present once,
and B-096 through B-099 now have nonblank Lane A fields. The repository suite consequently moves
`handoff-response` to green.

That green result proves receipt syntax only. The same diff contains answers, accepted decisions and
applied work inside records still labelled `Open`, plus an invalid audit field. The README explicitly
says the checks test form rather than substance; this is a demonstrated false-green boundary, not a
reason to reject the useful analysis.

## Parent-first review

| Order | Item | Review result | Required next state |
|---:|---|---|---|
| 1 | Existing sprint/version baseline and S2 hold | Preserved correctly | Keep unchanged |
| 2 | B-071 Choice B return | Correct return trigger and record appended; header changed to `Open` | Repair only its audit-field shape, then commit before adding further rounds |
| 3 | B-096 GA1 child | Physical evidence supports the bounded planning answer | Record it as an answered child; keep the whole entry open for S15/S16/S17 |
| 4 | B-097 return-protocol entry | B-071 application is one child; SOP/template/check recurrence controls remain undone | Keep whole entry open, with explicit child dispositions in its body |
| 5 | B-098 roadmap interpretation | Lane A accepted and fully applied the handoff-only correction | Whole entry becomes `Answered / Applied`, pending independent verification |
| 6 | B-099 analysis/application boundary | Lane A accepted it and applied its handoff corrections; later source work remains separately held | Whole entry becomes `Answered / Applied`, pending independent verification |
| 7 | B-084 A4 and B-088 P1 | Chief Editor inputs remain absent | Decide separately; neither blocks correcting this batch's lifecycle metadata |
| 8 | Graphify | Still analyzed at `f63d6eb`; tracked HEAD is `e0e1c85`, with a dirty handoff batch | Synchronize only after the final committed correction |

## Deterministic failures and success criteria

| Failure | Why it will fail | Evidence of success |
|---|---|---|
| B-071 `Verified-At-Commit` contains a short SHA plus explanatory prose | D-205 requires the field to contain only one commit value; the full value is known | Field is exactly `e0e1c857d4750f2b3fb0ba7b6f4e17526fee37f6`; environment explanation stays in body or is removed |
| B-096–B-099 were rewritten while their audit anchors still name older trees | D-214 defines the anchor as the tree read while writing, not the earlier evidence snapshot | Every changed record's audit anchor advances to the full `e0e1c85…` commit read for this batch |
| B-098 says the correction is accepted and applied but remains `Open` | The header says undispositioned while the answer says resolved | `Status: Answered`, `Resolution: Applied`, dispositioning actor recorded; independent review later decides `Verified` |
| B-099 says “accepted in full” and lists applied changes while remaining `Open` | Same record carries incompatible lifecycle meanings | `Status: Answered`, `Resolution: Applied`, or narrow the Lane A text back to acknowledgement only; do not keep both meanings |
| B-097 reports B-071 application without stating its other children remain open | A later summary can call the whole return-protocol defect complete although prevention controls are absent | Body child table marks B-071 return Applied and SOP/template/history-aware checks Open; header remains `Open` |
| B-096 calls two reads independent, then says neither qualifies as independent | Method corroboration and lifecycle verification are conflated | Say “two-actor schema corroboration”; GA1 planning question Answered; no applied specification is `Verified` |
| B-096 says S17 correction “may proceed” while the same answer withholds governed-source authority | “Proceed” can be read as permission to edit Panel B7/§4 under a planning-only request | State “S17 wording may be drafted; application remains held for the exact authorized write set” |
| The device/mount limitation is embedded in durable audit fields | A temporary environment statement becomes stale and is not an audit value | Durable fields carry actor/SHA only; operational limitations stay in the turn report, not every lifecycle record |
| `handoff-response` is green | The check cannot detect any semantic contradiction above | Independent human review plus D-204/D-205 metadata checks pass; green receipt remains only receipt evidence |
| Graphify runs against the dirty or intermediate tree | Its extracted revision immediately differs from the final commit | Final handoff commit first; rebuild/remerge; coverage complete; analyzed HEAD equals final Git HEAD; full suite rerun |

## Normalized GA1 disposition

The schema gives strong physical evidence: `editorial_reports` is append-only, anchored to one
article and one workflow transition, and stores template, judgment-rule and schema versions plus a
JSONB snapshot. It has no typed client-artifact identity, artifact kind, delivery target or artifact
lifecycle.

The correct claim is:

> Two actors corroborated the schema reading. For planning, GA1 is answered: the v1 table models
> transition-anchored explainability snapshots and does not model the client-facing artifact set as
> governed deliverables. Panel B7/§4 must eventually distinguish those two meanings. No source
> correction has yet been applied or independently verified.

JSONB can technically contain arbitrary values, so the absence of an `artifact_kind` column is not
alone the business rule. Choice A in B-096 supplies that meaning; the schema corroborates it. This
keeps business authority in Product/Fn_Specs and physical enforcement in Lane B's later schema work.

## Exact Lane A repair

Lane A should amend its uncommitted batch before staging it:

1. **B-071:** retain `Status: Open` and the exact return record. Make `Verified-At-Commit` the full
   `e0e1c85…` SHA only. Move or remove the environment explanation. Add no new round before commit.
2. **B-096:** retain `Status: Open`. Replace “two independent reads” with “two-actor schema
   corroboration”; say S17 may be drafted but not applied. Add a body child table: GA1 Answered;
   S15/S16 drafting Open; S17 application Held. Advance the audit anchor to `e0e1c85…`.
3. **B-097:** retain `Status: Open`. Add a body child table: Choice B decision Answered; B-071 return
   Applied; SOP/template/check contract Open. Advance the audit anchor to `e0e1c85…`.
4. **B-098:** set `Status: Answered`, `Resolution: Applied`, and the dispositioning actor form. Keep
   the withdrawal of the earlier reset/remap proposal. Advance the audit anchor to `e0e1c85…`.
5. **B-099:** set `Status: Answered`, `Resolution: Applied`, and the dispositioning actor form. Keep
   implementation and governed sources explicitly held. Advance the audit anchor to `e0e1c85…`.
6. **Commit as Lane A's response batch.** Lane A is Active and owns this response. Lane B does not
   absorb or sign Lane A's five-file change. Run the full consistency suite against the corrected
   working tree before commit and again at the committed revision.
7. **Independent review follows the commit.** Lane B verifies only the applied B-098/B-099 whole
   entries and the B-071 return mechanics. B-096/B-097 stay open for their named children.
8. **Graphify last.** Lane A · Code operates the rebuild/merge after the final tracked change;
   Lane A · Cowork checks curated meaning. Any subsequent handoff edit invalidates that currency.

## Chief Editor decision 1 — B-084 A4 capacity

The Chief Editor does not need to estimate implementation or quarterly delivery. Supply four bounded
capacity values for the next documentation iteration:

| Capacity input | Chief Editor supplies | What Lane A does with it |
|---|---|---|
| Operator drafting | Available person-hours and dates for Cowork to prepare the A4 field matrix, exact clauses and same-article example | Fits or splits the selected packet without dropping required evidence |
| Chief Editor review | Available person-hours and review window | Limits the number of accept/reject decisions presented at once |
| Independent review | Available person-hours and eligible reviewer | Determines whether the iteration can end at Applied or can reach Verified |
| Contingency | Maximum additional hours if the first-intake trend example exposes another contradiction | Defines the stop condition instead of silently expanding scope |

**If capacity is not supplied:** Lane A may finish a reviewable A4 draft and effort range, but must
not promise a completion date, quarterly goal or `Verified` outcome.

**A4 success evidence:** one exact mandatory/optional field matrix; exactly one subject topic; a
first-intake trend form; one article's normal and revision paths through LinkedIn `ManualReady`;
source assertions, editorial judgments, hypotheses and verified evidence remain distinct; exact
Product/Fn_Spec/storyboard/traceability/Encyclopedia write set accepted before application.

## Chief Editor decision 2 — B-088 P1 authorization

This is a separate bounded governance-tooling decision. It does not authorize Product or application
construction.

| Choice | Accept/Reject effect | Success or stop evidence |
|---|---|---|
| **Approve P1** | Authorize Lane A · Code to repair only token termination and add labelled negative boundary probes | `Lane B_fake`, `Codex_unknown`, `Judge_unknown` reject; settled actors and valid prose/Markdown delimiters keep their expected results; intended error branch is asserted; full fixtures/checks run with tree restoration |
| **Defer P1** | Keep the known C-39 defect open while B-084 A4 remains first | Do not use C-39 as complete closure evidence and do not start C-35 through that prerequisite |
| **Reject P1 scope** | Reject only if the boundary contract itself is wrong, with a cited governing alternative | Existing allowlist remains unchanged; no silent widening and no implementation by inference |

Existing planning range: P1 **1–3 person-hours**, followed by **1–2 person-hours** of independent
verification. P2 audit-field/anchor coverage remains a later separate decision unless the Chief
Editor expressly combines it; P1 alone does not close C-39.

## Cross-artifact and lane effect

| Surface | Result of this review |
|---|---|
| `Modular_PRD.md` and Fn_Specs | Unchanged. B-084 A4 and B-096 logical contracts remain the owners of future behavior changes |
| Storyboard/story panels/UML/data flow | One existing storyboard owns these views. GA1 wording is draftable, not authorized for application |
| Encyclopedia and cross-reference map | Entries 03/06 and existing traceability owners remain in B-095's A4 packet; no duplicate ledger |
| Lane A · Cowork | Correct lifecycle meanings; prepare A4 and governed-source packet after Chief Editor capacity input |
| Lane A · Code | B-088 P1 only if authorized; Graphify operation last |
| Lane B | Review this batch after commit; later physical design only under a fresh work order |
| Lane C | No current action; future workflow checks consume Lane A-written controls and do not decide business meaning |

## What you did instead

Read the five-file working diff and the source lifecycle rules, reproduced the suite with Lane A's
changes present, checked B-071 history and the migration evidence, and raised this separate failed-
verification record. Did not change Lane A's five files, stage or commit their work, build, edit
governed sources, run Graphify, publish or change lane state.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve-with-conditions | B-071 Choice B return application | Phase 1 — correct audit-field shape and commit before another round |
| Approve-with-conditions | B-096 GA1 planning answer | Phase 1 — normalize corroboration, child state and draft/application boundary |
| Approve | B-098/B-099 substantive answers | Phase 1 — record them honestly as `Answered / Applied`, then independently review |
| Reject | Lane A's five-file batch as clean in its current form | D-204/D-205 lifecycle and audit corrections above |
| Reject | Green `handoff-response` as proof of semantic correctness | It checks receipt/form and cannot see these contradictions |
| Approve-with-conditions | B-084 A4 as the selected business packet | Chief Editor supplies bounded operator/reviewer capacity; Lane A prepares exact acceptance artifacts |
| Approve-with-conditions | B-088 P1 | Chief Editor explicitly authorizes the named 1–3 hour token-boundary unit and 1–2 hour independent review |
| Defer | Product/source application, implementation, publication and release | Separate bounded authorization and completed dependencies |
| Defer | Graphify synchronization | Corrected committed batch first; final rebuild/remerge/coverage/full checks |
