# B-091 — J4 planning-only application boundary

- **Raised:** 2026-09-14 by Lane B
- **Kind:** blocked-on-decision
- **Phase:** 1
- **Blocks:** B-087 J4 disposition and its planning-spike closure; no governed-source edit or build
- **Status:** Open
- **Lane A:** **Acknowledged 2026-09-14** at read commit `f56729b`. Receipt and the Judge's answer;
  `Status` stays `Open` and no `Resolution` is claimed. **J4 records Choice A**: this iteration stays
  planning-only and `B-084`'s governed-source application is deferred to its own Phase 1 unit, owner
  Lane A / Cowork, priority-change trigger a Judge act approving `B-084`'s exact write set. `B-084`
  keeps its `Applied` resolution and residual packet; it was not edited. **Both `Reject` verdicts are
  accepted**: `J1`-`J4` all required disposition, and the `495e4f8`-or-later criterion plus the
  commit-distance tally are removed. `J1` Accept setup/scaffold evidence; `J2` and `J3` explicitly
  deferred with owner and trigger. All four are recorded in B-087 §9.11 and, by explicit decision,
  nowhere else: none creates, sequences or retires an artifact, so `D-54` does not fire. Follow-up
  items 1, 2, 4 and 5 are applied; item 3 does not arise under Choice A; items 6 and 7 remain open.
- **Verified-By:** — not yet dispositioned; raised by Lane B
- **Verified-At-Commit:** 5bc28fdfc15a4855fecddc8281974e140b920445
- **Evidence:** User guardrail “don't build yet; only implementation plan”; B-087 J1–J4 and §§9.5/9.10; B-084 residual/evidence boundary; B-090 Judge path and Lane A response; current consistency and Git-distance checks. Decision packet only.

## What happened

**Normalised request:** resolve the J4 boundary without conflating B-087's planning output with B-084's governed-source application. Give the Judge an Accept/Reject choice, state the consequences and define Lane A's follow-up. Preserve the planning-only guardrail.

Lane A correctly applied B-090's tracking-boundary corrections. B-084 owns source correction; B-087 owns planning and routing. The current request still expressly limits this work to an implementation plan. That makes inclusion of B-084's actual source edits a separate authorization choice rather than an implied part of the current iteration.

Two residual corrections are needed in Lane A's latest answer:

1. The conclusion says only J1 and J4 block B-087. B-087's adopted rule requires J1–J4 to be decided or explicitly deferred. J2 still lacks a representative article and revision reason; J3 still lacks committed capacity. They therefore also need decisions or explicit deferrals.
2. B-087 §9.5 step 5 says Graphify may match `495e4f8-or-later`. Success requires equality with the **final committed HEAD**, not a lower bound. The statement that the graph is “four commits behind” is also incorrect: the analyzed commit is `395ab83` and the current committed range after it contains three commits. Remove the tally rather than maintaining it.

## What you need

### J4 decision

| Choice | What the Judge decides | Immediate result | Later success evidence |
|---|---|---|---|
| **A — Defer B-084 application from this iteration (recommended)** | This iteration remains the approved planning/setup spike. B-087 may finish on accepted decisions and truthful dispositions; B-084 remains its own Phase 1 source-correction unit | No governed Product/spec/view files are edited. B-084 stays `Applied`, with its residual packet explicitly deferred and owned | A later Judge act approves B-084's exact write set; Lane A applies it at a new commit; Lane B independently verifies the corrected sources and views |
| **B — Include B-084 application in this iteration** | J4 expands this iteration from planning into governed-source application | Lane A must first present the complete exact replacement text, affected tiers, exclusions, owner, effort and DoD. Acceptance of this option authorizes only that named packet | Every B-084 source anchor agrees on the manual-input contract; new commit evidence exists; Lane B verifies; Encyclopedia and Graphify claims remain separately evidenced |

Choice A best matches the user's current instruction. It does not lower B-084's priority or declare it low value; it keeps the current iteration bounded to planning. Choice B should be selected only if the Judge intends to authorize document application now despite the planning-only guardrail.

### Remaining B-087 decisions after J4

| Decision | Current state | Minimum disposition for B-087 planning closure |
|---|---|---|
| **J1 — setup/V0 presentation** | Unanswered | Accept descriptive setup/scaffold classification, request a formal V0 mapping proposal, or explicitly defer with owner and trigger |
| **J2 — normal and revision journey** | Representative LinkedIn ManualReady article and return reason not supplied | Supply and accept the examples, or defer them with owner and the event that reopens the decision |
| **J3 — iteration capacity** | Quarterly goals, hours and dates unconfirmed | Record available hours/owners, or defer allocation without inventing dates |
| **J4 — application boundary** | This entry provides the concrete choice | Record A or B. Silence is not a deferral |

### Lane A follow-up after the Judge choice

1. Record the selected J4 option in B-087 without changing B-084's lifecycle state.
2. If **A**, name B-084's existing residual, owner, dependency and priority-change trigger; do not copy its correction text into B-087 or edit governed sources.
3. If **B**, prepare the exact B-084 write set for final review before applying it. Preserve frozen `docs/PRD.md` and the Charter.
4. Correct B-087's closing sentence: J1–J4 all require a decision or explicit deferral; ownership alone is insufficient.
5. Replace Graphify's lower-bound criterion with `lastAnalyzedHead == final committed HEAD`. Remove commit/document tallies from narrative status; let the checks print them.
6. Commit each handoff entry separately under D-184. After all accepted source and handoff edits stabilize, perform the separately authorized Graphify synchronization and verify head alignment, coverage, descriptions and curated semantics.
7. Return B-087 for Lane B verification. Closing B-087 does not close B-084; closing B-084 requires its own evidence.

### Failure-derived success criteria

| Failure | Success criterion |
|---|---|
| J4 remains “unanswered” while B-087 is called complete | J4 records A or B, with consequences and owner |
| Only J1/J4 are listed as blockers | J1–J4 each show Accepted or explicitly Deferred with owner/trigger |
| Choice A is treated as low business value | Deferral records scope/capacity reason and a priority-change trigger; commercial learning remains independently assessed |
| Choice B is treated as permission for unspecified edits | Exact files, sections, replacement text, exclusions and DoD are reviewed before application |
| Graph is accepted because its analyzed commit is merely later than an old floor | Graph metadata equals the final committed HEAD and separate coverage/semantic checks pass |

Current check state before this new entry: `handoff-response` passes; `docs-drift` and `graph-coverage` fail. This entry adds another document for the later coverage pass and will remain unread until Lane A acknowledges it. No Graphify update is performed because the document set is still changing.

## What you did instead

Verified Lane A's B-090 response and the real consistency results, checked the live decision dependencies and drafted this bounded J4 packet. Did not select A or B on the Judge's behalf, edit B-084 or any governed source, synchronize Graphify, build, publish, change lane state or close B-087.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Lane A's B-090 ownership and lifecycle correction | Phase 1 — preserve in B-087 §§9.9/9.10 |
| Reject | Claim that only J1 and J4 remain before B-087 closure | Phase 1 — J2/J3 also require decisions or explicit deferrals |
| Approve-with-conditions | J4 Choice A, planning-only iteration | Phase 1 — recommended; Judge records explicit selection and B-084 deferral |
| Defer | J4 Choice B, immediate B-084 application | Phase 1 — only if Judge expands scope after exact write-set review |
| Reject | Graph criterion `495e4f8-or-later` or narrative commit-distance tally | Phase 1 — require equality to final HEAD and checker-produced status |
| Defer | Application and release work | Phases 2 and 3 — separate bounded authorization and evidence |
