# B-090 — B-084 and B-087 tracking boundary

- **Raised:** 2026-09-14 by Lane B
- **Kind:** finding
- **Phase:** 1
- **Blocks:** acceptance of B-087's closure sequence; no governed-source edit or application build
- **Status:** Answered
- **Lane A:** **Acknowledged 2026-09-14** at read commit `5bc28fd`. Receipt only; `Status` stays
  `Open` and no `Resolution` is claimed. **All three `Reject` verdicts are accepted**, the first
  reconfirmed independently: `B-084` §247, §427, §559 and §781 already name Product §7.1 line 788,
  and its write-set already lists `docs/Modular_PRD.md`, so the anchor was never new `B-084` scope.
  The three replacement texts are applied in full: B-087 §9.9 introduction, B-087 §9.5 step 7 with
  the row corrected to match, and this entry's sibling field in B-089. B-087 §9.10 records the
  correction and adopts the routing-not-shared-lifecycle boundary. `B-084` was not edited. `J1`
  and `J4` remain Judge choices; the `J4` boundary in `B-090`'s Judge path is unanswered.
- **Resolution:** Verified
- **Verified-By:** Lane B (Codex)
- **Verified-At-Commit:** 5097a4d6924d1d470600ec998c71bbb9225a219f
- **Evidence:** Independent comparison at `5097a4d`: B-087 §9.9 treats Product §7.1 as a cross-reference to B-084's pre-existing residual; §9.5 decouples B-087 planning closure from B-084 implementation; §9.10 records the accepted correction. B-091 subsequently records J4 Choice A, superseding the acknowledgement's earlier “unanswered” observation.

## Independent verification — 2026-09-14

The committed planning record now keeps B-084 and B-087 on separate lifecycles: B-084 owns governed-source correction and evidence, while B-087 owns decisions and routing. J4 Choice A is recorded later in the committed chain and defers B-084 application. The dated Lane A acknowledgement above correctly described its read commit; this verification records the later state without rewriting that history.

## What happened

**Normalised request:** explain the difference between tracking in B-084 and B-087, verify Lane A's latest response, remove duplicate scope and give the Chief Editor/Judge a parent-first Accept/Reject path. Do not build or edit governed sources.

Lane A correctly accepted B-089's finding that B-087 omitted the highest-tier Product contradiction. The latest real consistency run confirms all three prior handoffs are acknowledged: `handoff-response` passes. It also confirms Graphify remains stale and lacks B-087 through B-089.

The ownership wording is still wrong. B-084 already named the Product §7.1 contradiction before B-087 and B-089: its answer names Product §7.1 as awaiting bounded authority; its later independent review names line 788; its remaining-gap table names the same conflict; and its source/view write-set includes `Modular_PRD.md`. B-089 therefore found an omission in **B-087's review**, not missing scope in **B-084**.

Lane B corrects its own B-089 wording: “Add this §7.1 row to B-084's existing source packet” should read “Add this anchor to B-087's review inventory and route it to B-084's already-existing §7.1 residual.” Lane A was right not to edit B-084. However, B-087 §9.9's phrase “exact addition to B-084's correction packet” and B-089's acknowledgement claim that all three drafted texts were “applied in full” are inaccurate. The third text was not applied to its named target and should not be, because the target already contains the residual.

### The tracking boundary

| Record | Owns | Completion evidence | Does not own |
|---|---|---|---|
| **B-084 — specification defect and correction packet** | The manual-intake contract and its current-source/dependent-view residuals: input domain, requiredness, duplicate behaviour, Product §7.1, FN-GATES/Addendum mapping, storyboard/source graph and FB-05/G105 verification | Exact governed-source changes at a named commit, then independent verification of the corrected contract and views. Its current `Applied` resolution proves earlier changes landed; it is explicitly non-terminal and does not prove the residual packet complete | Version naming, V0/V1 presentation, iteration capacity, commercial sequencing or B-087's planning acceptance |
| **B-087 — setup-spike alignment and decision packet** | The original-vision/current-scaffold comparison, J1–J4 choices, one bounded iteration proposal, ownership/dependency routing and the distinction between setup learning, implementation readiness and release readiness | Judge decisions recorded; selected iteration has outcome, owners, dependencies, effort range, evidence and priority-change conditions; every referenced branch has a truthful disposition, including explicit deferral | The canonical B-084 source correction, B-084's evidence anchor or a claim that those governed sources are already corrected |
| **B-089 — independent review of Lane A's B-087 answer** | Whether B-087's answer is complete and internally current, including its Product-tier inventory and receipt language | Lane A corrects the answer; Lane B verifies those bounded answer corrections | Expansion of B-084's source scope or closure of B-084/FB-05/G105 |

The records are related by routing, not by shared lifecycle. B-087 may cite B-084 as an implementation-readiness branch. It may close as a planning spike once the Judge accepts or defers that branch explicitly; it does not automatically wait for B-084's source work to reach `Verified`. Conversely, closing B-087 cannot close B-084. If J4 explicitly places actual source application inside B-087's accepted iteration, then that selected iteration waits for B-084 evidence; the decision must say so rather than making the dependency implicit.

## What you need

### Parent-first Judge path

| Order | Judge choice | Accept | Reject / return condition |
|---|---|---|---|
| **1 — B-087 planning boundary** | Is B-087 a planning/setup-spike record whose output is the bounded iteration proposal and routed branches? | Keep B-087 closure based on accepted decisions and truthful branch dispositions, including deferrals | If actual source correction is required inside B-087, name that expanded completion evidence explicitly before application |
| **2 — J1 baseline presentation** | Descriptive setup/scaffold classification or a formal V0 mapping proposal | Record the selected presentation and preserve frozen history | Return for the alternative mapping and its artifact/freeze effects; no bulk rename |
| **3 — J4 application boundary** | Does the accepted iteration include B-084's governed-source packet now? | Lane A applies B-084's existing packet under its own evidence boundary; B-084 remains the canonical record | Defer B-084 with owner, dependency and change trigger. B-087 can still finish its planning outcome if that deferral is explicit |
| **4 — J2/J3 readiness** | Accept the normal/revision examples, capacity and completion evidence | Open only the bounded implementation-readiness unit selected by the decision | Return missing article, revision reason, hours, owner, dependency or evidence; do not infer implementation/release readiness |

The Chief Editor supplies the representative LinkedIn ManualReady article, a concrete return-for-revision reason and available hours. The Judge accepts the plan, decides whether B-084 application is in the selected iteration and later accepts phase residuals. These are the same person acting in different roles under D-158.

### Draft corrections for Lane A

In B-087 §9.9 replace the “exact addition” introduction with:

> **Cross-reference to B-084's existing Product §7.1 residual.** B-084 already names this contradiction and remains its canonical correction/evidence record. B-089 found that B-087's cross-artifact inventory omitted the anchor. The text below repairs B-087's inventory and routing only; it creates no new B-084 scope and does not alter B-084's Applied evidence boundary.

In B-089's Lane A acknowledgement replace the “three drafted texts are applied in full” claim with:

> The historical-snapshot and post-act receipt texts were applied in B-087. The third draft is corrected by B-090: Product §7.1 was already in B-084's residual packet, so B-087 now records a cross-reference rather than adding or duplicating B-084 scope.

In B-087 §9.5 replace step 7's unconditional wait with:

> **Close the planning spike on its accepted output.** Lane B independently verifies B-087's bounded answer and routing. B-087 may close when J1–J4 are decided or explicitly deferred and every branch has an owner, dependency and completion evidence. B-084 closes separately after its actual governed-source correction and independent verification. If J4 expressly includes B-084 application in this iteration, record that dependency and wait for its evidence.

No edit to B-084 is needed for this ownership correction. Its existing residual text remains the canonical work description. When B-084 is eventually applied again, its evidence must identify the new source commit; the old Applied anchor cannot prove later work.

### Failure-derived success criteria

| Failure | Why it fails | Success criterion |
|---|---|---|
| Copying the §7.1 residual into another canonical packet | Two records can drift on the same source correction | B-084 alone owns the source correction; B-087 links its owner, decision dependency and current disposition |
| Closing B-087 only after every B-084 source correction is Verified without a J4 scope decision | Planning completion becomes silently dependent on implementation | B-087 closes on accepted planning output and explicit branch dispositions; only an accepted J4 application scope adds the execution dependency |
| Treating B-084's existing `Applied` anchor as proof of the newly discussed §7.1 correction | The anchor proves the earlier application set, while the residual is still stated as outstanding | New source work receives its own commit evidence and independent verification before B-084 is promoted |
| Synchronizing Graphify before the selected source packet is committed | The next source commit immediately recreates drift | Commit accepted source changes first, then prove HEAD alignment, coverage, descriptions and curated semantic parity separately |

Current Graphify status is unchanged in substance: the latest run has `docs-drift` and `graph-coverage` failing while `handoff-response` passes. Creating this handoff adds one new document that the eventual coverage/synchronization pass must include; no Graphify update is performed during this planning review.

## What you did instead

Read B-084's existing residual and evidence boundary, reviewed Lane A's uncommitted B-087/B-088/B-089 changes and ran the consistency suite. Drafted only this tracking-boundary correction. Did not edit B-084, governed Product/spec/view sources, application code or Graphify state; did not authorize J1–J4, change lane state or close a handoff.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Lane A's recognition of the Product §7.1 contradiction and acknowledgement receipts | Phase 1 — preserve as B-087 review evidence |
| Reject | Characterising §7.1 as a new addition to B-084 | Phase 1 — it is an existing B-084 residual; correct B-087/B-089 routing language |
| Reject | Making B-087 closure unconditionally wait for all B-084 implementation evidence | Phase 1 — Judge first decides J4's application boundary |
| Approve-with-conditions | B-087 as the baseline/setup planning record | Phase 1 — accepted J1–J4 decisions or explicit deferrals, owners and evidence |
| Defer | B-084 governed-source application and independent closure | Phase 1 — its existing packet, J4 if required and a new evidence revision |
| Reject | Current Graphify currency/completion | Phase 1 — synchronize after stable committed source changes |
| Defer | Application and release work | Phases 2 and 3 — separate bounded authorization and evidence |
