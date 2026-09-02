# B-070 — Lane B work order still names the superseded T5 packet as the next code unit

- **Raised:** 2026-09-02 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** any claim that `B-068`/`B-069` closing `Verified` lifts `D-171` or authorizes S2;
  Lane B beginning any T5/T6-sensitive work under either the historical or the target contract
- **Status:** Answered
- **Lane A:** Acknowledged and partially answered 2026-09-02. `B-068`/`B-069` are correctly
  `Verified` at `335564e` — that closure satisfies the independent-review prerequisite this
  handoff chain required, but it does not lift `D-171` or grant build authority
  (`V1-DECISION-REGISTER.md` §"S2 EXPLICIT HOLD", `V1-BUILD-SPEC.md` §"S2"). The live defect —
  `docs/LANE-B-WORK-ORDER.md` §2.2d still saying **"This is your next code unit"** against the
  historical, `D-171`-held D-164/D-165 packet — is corrected in this pass: a historical/held
  notice now sits above that section, the "next code unit" claim is removed, and the section
  points to this handoff and `V1-PHASE-CLOSURE.md` §5 rather than asserting authorization it does
  not have. **The second half of the ask — a fresh, bounded S2 authorization decision — is not
  applied.** The Chief Editor was asked to pick between the two scopes below and answered "draft
  plan for independent review": the two options are drafted here for Lane B's independent review,
  not yet selected or applied as a decision. Lane B remains `Eligible`, not `Active`
  (`V1-PHASE-CLOSURE.md` §5) — no lane-state transition is made by this handoff.
- **Resolution:** Applied
- **Verified-At-Commit:** 1f77cfc — the commit containing the work-order correction and this
  handoff; not a `Verified` claim (`Resolution` stays `Applied`), only the commit where this
  evidence is currently observable
- **Evidence:** `docs/LANE-B-WORK-ORDER.md` §2.2d (historical/held notice added); `D-171` in
  `V1-DECISION-REGISTER.md`; `V1-BUILD-SPEC.md` §"S2 — Line assignment and four-eyes"; `D-181` in
  `V1-DECISION-REGISTER.md` §5.14e7; `docs/handoff/B-068-*.md`/`B-069-*.md` (`Verified` status);
  `docs/governance/factory-route-operation-crosswalk.md` (six `UNVERIFIED` operation shapes,
  `OP-PITCH`/`OP-RESEARCH`/`OP-DRAFT`/`OP-COMPLEX-SERIES`/`OP-LEGAL-RISK`/`OP-FINAL-SIGNOFF`)

## What happened

Independent review confirmed `B-068`/`B-069` are correctly `Verified`, but found that closure had
created an operational hazard elsewhere: `docs/LANE-B-WORK-ORDER.md`'s §2.2d — the historical
human-`T5`/agent-`T6` packet `D-164`/`D-165` authorized and `D-171` later held pending the target
order — still told Lane B **"This is your next code unit."** Nothing in `B-068`/`B-069`'s closure
lifts that hold; verifying a handoff record is not the same act as authorizing a build. Left
uncorrected, a lane reading only the work order (as `D-86` says it may — governance reaches Lane B
as a flag, not a document) would build a contract five decisions (`D-171`, `D-175`, `D-178`,
`D-180`, `D-181`) have since superseded.

## What you need

**Applied now:** the stale instruction is corrected — §2.2d carries a historical/held notice, the
"next code unit" line is removed, and Lane B is pointed at this handoff and
`V1-PHASE-CLOSURE.md` §5 instead.

**Still open, and the Chief Editor's to decide:** whether a fresh S2 authorization should be
recorded now, and at what scope. Two drafted options, neither applied:

### Option A — bounded unit now (recommended by the independent review)

Lift `D-171` for exactly one narrow unit, drafted as:

- Adopts only the `D-181` target `T5`/`T6` contract (not the historical order).
- Seals `T5` evidence per required reviewer act; article state stays `Drafted` until the
  `T5_review_bundle_sealed` join performs the single `Drafted → Reviewed` transition.
- `T6` remains human-only, natural-person Chief Editor judgment — never agent-executed.
- **Explicitly does not enable any production/fallout/GRC route.** The six `UNVERIFIED` operation
  shapes in `factory-route-operation-crosswalk.md` (including `OP-FINAL-SIGNOFF`, which has no `R`
  at all in source) stay blocked regardless of this unit's build state.
- Names its own exclusions the same way `LANE-B-WORK-ORDER.md` §2.2d's historical Unit 1 did:
  explicit "not this unit" list, not silent scope creep.

### Option B — wait for all six operation shapes

Hold any fresh S2 authorization until every required/triggered operation in the factory-route
crosswalk has a resolved executor, accountability, and atomic-completion rule. No target-order
code exists until the full route picture is settled; slower, but avoids authorizing a control unit
whose eventual route context is still undecided.

**Success criteria that apply to either option, if and when one is selected:**

- No operative document identifies the historical `T5` contract as the next build.
- The eventual decision names one target contract, one bounded unit, and explicit exclusions.
- Every `T5` act seals evidence without changing article state; exactly one bundle-completion
  event changes `Drafted → Reviewed`.
- `T6` remains the natural-person Chief Editor's decision.
- No route becomes enabled while a required operation lacks executor, accountability, or
  atomic-completion semantics.
- Lane B is formally moved `Eligible → Active` by the Chief Editor before any implementation
  begins — this handoff does not do that.
- Graphify and the full consistency suite pass at the final documentation HEAD.

## What you did instead

Corrected the immediate hazard (the stale "next code unit" instruction) since it was independently
confirmed dangerous regardless of which option is eventually chosen. Did not draft or apply a new
decision record, did not touch `V1-DECISION-REGISTER.md`/`V1-BUILD-SPEC.md`/`Modular_PRD.md` §8,
and did not move Lane B's lane state — all of that depends on which option above the Chief Editor
selects, which remains open. `D-171`'s hold stands, fully binding, until a fresh decision says
otherwise.

## Forward cross-reference — partial-answer boundary (2026-09-02)

This append-only notice is current. It preserves the historical body above while preventing
`Status: Answered` or `Resolution: Applied` from being read as approval of every requested act.

| B-070 part | Current disposition | Current record |
|---|---|---|
| Stale “next code unit” instruction in `LANE-B-WORK-ORDER.md` | **Applied.** This is the correction covered by B-070's `Resolution: Applied` and evidence commit `1f77cfc` | B-070 |
| Option A versus Option B choice | **Superseded as a choice.** The valid content describes two different features, not mutually exclusive alternatives | `B-071` `B071-R22` and later review rounds |
| Fresh S2 authorization | **Deferred.** No bounded implementation unit, route activation or lane transition is authorized by B-070 | `B-071` corrected Gate A → Gate B1/Gate B2 → Route Activation structure; `D-171` remains binding |
| Terminal independent verification of the replacement model | **Open.** It must assess the corrected, pushed documentation HEAD, not infer closure from this notice | `B-071` |

The two feature scopes retained from the historical options are:

1. **Feature 1 — shared T5/T6 judgment control:** three attributable T5 acts, one non-judgment
   completion join, blind reveal order and human-only T6; it enables no route.
2. **Feature 2 — factory-route operations/readiness:** route-specific operation, executor,
   accountability and atomic-completion contracts; it does not replace Feature 1.

A separate Route Activation Gate requires both applicable feature dependencies to be verified for
one named route. Completing either feature alone does not activate a route, release a build or lift
`D-171` globally.

### Failure and success boundary

- **Guaranteed failure:** selecting Option A or Option B, treating `Answered` as fresh build
  authorization, or using B-070's applied work-order correction as evidence that both features are
  complete.
- **Success:** active documents contain no A-or-B choice; each feature has its own scope,
  acceptance criteria, exclusions, Definition of Done and bounded authorization; `D-171` is
  narrowed only by an explicit later decision; the exact corrected HEAD is pushed, synchronized
  with Graphify and independently reviewed.

No `B-072` is required for this clarification. `B-071` is the sole current handoff record for the
replacement model and its remaining corrections.
