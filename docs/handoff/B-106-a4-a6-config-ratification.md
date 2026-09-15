# B-106 — A4/A6 configuration ratification and semantic collision

- **Raised:** 2026-09-15 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** truthful configuration readiness for the two named values; no unrelated planning or build work
- **Status:** Open
- **Lane A:** **Acknowledged 2026-09-15 at read commit `ebd3c29`** (per Lane B's report; not
  independently git-verified from this session). The Chief Editor's direct decision-tree act is
  accepted as recorded: `SCORING_REVIEW_THRESHOLD_ARTICLES = 50` (A4) and
  `DATA_RETENTION_ARCHIVE_DAYS = 90` (A6) are approval-of-the-presented-row events, not runtime
  activation, scoring execution or archival authority. The already-appended Judge clarification
  resolving the A6 collision is also accepted as stated: the 90-day value is the first UI-visible
  operational/PDPA boundary; the five-year TAX/ACRA rule is a later, external, financial-record-only
  workflow that the application never displays as a competing editable value; the external system
  supplies only the fact needed for honest UI/audit behavior. This supersedes the earlier three-way
  retire/rename/third-clock framing in this same entry's own first section.

  **Sources-checked gate, not yet cleared for drafting the exact packet:** this session has not yet
  read `D-134`, `D-135`, `D-198` or `B-085` in this pass, which this entry's own Lane A follow-up
  step 1 requires before either configuration row is edited. No Register arbitration act, ledger
  correction, or artifact-impact packet is drafted by this acknowledgement. That drafting is the
  next bounded Lane A task, gated on those four reads.

  No governed source, Product, Fn_Spec, storyboard, schema, workflow, runtime configuration
  metadata or Graphify action is taken by this acknowledgement.
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

## Judge clarification — sequential PDPA and financial-retention workflows, 2026-09-15

This clarification resolves the A6 collision identified above. The values are sequential and have
different visibility; they are not alternatives for one clock:

1. **First — operational data-retention/PDPA boundary:** `DATA_RETENTION_ARCHIVE_DAYS = 90` controls
   when an applicable record leaves the current my-editorial-app view and enters the external
   retention workflow. The UI may show the 90-day status and the resulting externally archived or
   unavailable state. The application does not execute the external archive or infer deletion.
2. **Then — financial retention:** where an externally held record is classified as a TAX/ACRA
   financial record, the external records system applies the five-year financial-retention rule to
   that record. This later clock is outside my-editorial-app and is not shown as the editorial UI's
   retention value.
3. **Boundary evidence:** the external system supplies only the fact needed for honest UI and audit
   behavior — affected record/period, action and time, policy/version, external reference and
   retrievability/absence status. It does not expose its financial lifecycle as an editable Product
   state.

The earlier section's request to choose between retiring, renaming or creating a third clock is
therefore superseded. Lane A must record this sequential model as the amendment to `D-134` and
`D-135`: preserve five-year TAX/ACRA retention in the external financial workflow; stop presenting
it as the first UI-visible archival boundary. The 90-day A6 row may become `RATIFIED` only in the
same bounded propagation that makes those meanings consistent.

### Parent-first application plan

| Order | Owner | Exact planning action | Completion evidence |
|---:|---|---|---|
| 1 | Lane A · Cowork | Draft the Register amendment defining the two sequential workflows, their record classification and the external-system boundary | One act states which records receive the 90-day operational boundary, which financial records continue under five-year TAX/ACRA retention, and what the app may display |
| 2 | Lane A · Cowork | Prepare literal corrections for Business Case/Blueprint, Product retention clauses, Decision Log, Config Log and stale Build Spec/Register statements | No current clause presents 90 and five years as competing A6 values or says the app performs the external workflow |
| 3 | Lane A · Cowork | Specify UI and audit acceptance examples plus the supplied external fact; keep financial expiry hidden from the editorial UI | Current record before day 90, externally archived/absent after the supplied act, and missing/invalid external evidence each have explicit outcomes |
| 4 | Lane A · Claude Code | After the Judge accepts the immutable packet, apply and commit it verbatim through B-102's transport procedure | Diff matches accepted paths/text; documentation checks pass subject to declared environment limits |
| 5 | Lane B | Independently verify the governed packet; only under a later bounded work order change configuration metadata from `UNRATIFIED` to `RATIFIED` | Runtime value remains 90, metadata cites the amended decision, no financial clock or archive job is introduced into the app |

### Artifact impact

| Artifact | Required treatment |
|---|---|
| `Modular_PRD.md` retention section and `AC-12a` | Replace the single 5-year editorial/UI reading with the sequential boundary. The UI explains an externally supplied archival/absence fact; it does not display or execute the later financial-retention clock |
| Business Case and Blueprint A6/D8/G1 | Make the 90-day operational/PDPA boundary first and the five-year TAX/ACRA rule conditional on external financial classification; preserve external ownership |
| `DECISION_LOG.md`, `CONFIG_LOG.md`, Build Spec and Register | Record the Judge act, ratify the 90-day row under its corrected meaning and remove stale current “never put to Chief Editor” statements without erasing history |
| FN audit visibility | Validate supplied archive/absence evidence, policy/version and external reference; invalid or missing evidence must not fabricate absence or financial status |
| Storyboard/story panel | Add one current-use retention boundary to the existing journey: app-current → 90-day external handoff/absence display → external financial lifecycle where applicable. Do not turn the external workflow into an application panel the product operates |
| UML/sequence/data flow | Show the external system as producer of the archive/absence fact and my-editorial-app as consumer. No command arrow from the app may imply it executes TAX/ACRA retention |
| Traceability/scope graph/cross-reference | Link the UI behavior to A6, audit visibility and the external boundary; keep the later financial rule outside Product execution scope |
| Encyclopedia | Queue the affected entry for hosted review after source application; do not claim hosted parity from local text |
| Database/schema | No change authorized by this planning act. A later spec must prove whether the already governed supplied-fact shape is sufficient before any migration is proposed |

### Failure-derived acceptance examples

| Example | Accept | Reject |
|---|---|---|
| Applicable record before day 90 | Present in its normal editorial view with the governed retention status | Showing a five-year financial countdown |
| External 90-day action is supplied | UI marks the record externally archived/unavailable and preserves explainable audit context | App claims it performed deletion or archival itself |
| Record is also a financial record | External TAX/ACRA system retains it under the five-year rule; app displays no second editable retention value | Removing the external financial obligation because the app view changed at 90 days |
| External evidence is missing or invalid | UI says the external state is unknown/not established and preserves the last proved state | Inferring archival, deletion or financial retention from elapsed time alone |

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | `DATA_RETENTION_ARCHIVE_DAYS = 90` as the first UI-visible operational/PDPA boundary | Phase 1 — ratify in the complete sequential-model propagation |
| Approve | Five-year TAX/ACRA retention as the later external financial-record workflow | Project/external policy — classify externally; do not expose as the editorial UI value |
| Approve-with-conditions | Product/UI archive or absence display | Phase 1 specification — externally supplied fact, no inferred act and no external-workflow execution |
| Defer | Runtime metadata update | Lane B unit after the governed packet is committed and independently verified |
| Reject | Treating 90 days as deletion, treating five years as the first UI clock, or showing both as competing editable values | Contradicts the Judge's ordered workflow |

## Lane B independent source review — ready-to-apply Lane A arbitration draft, 2026-09-15

Lane B read the four required sources at Git baseline `68e85d9`: Register `D-134`, `D-135`,
`D-198`, and B-085's G-3 review. This clears the read gate for drafting; it does not authorize Lane
B to edit the Register.

### What those sources establish

| Source | Preserved fact | Fact amended by the later Judge clarification |
|---|---|---|
| `D-134` | `RET-POC-90`, `REUSE-WINDOW-90` and financial retention are distinct; archive/disposal operations are external | Five-year financial-policy default must not appear as the first UI-visible A6 value |
| `D-135` | Product owns explainable absence, while the external process owns archive/restoration/disposal | Product text currently uses five-year rejected-editorial archival as its concrete UI case and needs re-evaluation |
| `D-198` | Old 90/unratified configuration declarations are inconsistent with the then-current governed policy; no audit alone authorizes a forced change | The later direct Judge act now supplies the missing decision event, subject to correct semantics |
| `B-085` | Reconcile the source and ledger rather than invent a day conversion or runtime job | The reconciliation now has a supplied sequential UI/external model |

The current source also calls `RET-POC-90` a PDPA deletion period. Applying deletion at day 90 and
then retaining the same financial record for five years is impossible. The new ruling therefore
requires one explicit precedence rule: **the day-90 application event is a current-view removal and
external handoff, never proof of deletion. An applicable external financial or legal hold overrides
disposal.** The external system decides later disposal under its own record-class policy.

### Proposed Register wording — specified, not applied

> **A4/A6 configuration and ordered retention visibility — Chief Editor ruling, 2026-09-15.**
> `SCORING_REVIEW_THRESHOLD_ARTICLES = 50` is ratified as the point at which the scoring proposal is
> reviewed; it does not establish scoring readiness, activate an algorithm or advance an editorial
> gate. `DATA_RETENTION_ARCHIVE_DAYS = 90` is ratified as the first my-editorial-app UI boundary for
> records governed by the operational/PDPA retention workflow. At that boundary the application may
> consume a supplied external handoff/archive fact and remove the record from its current view. It
> neither performs nor infers archival, disposal or deletion from elapsed time.
>
> Where the externally held record is classified as a TAX/ACRA financial record, the external
> records system then applies the five-year financial-retention rule. A financial/legal retention
> duty prevents disposal at day 90. The editorial UI does not display the five-year value as a
> competing clock or editable state; it displays only its 90-day boundary and the externally
> supplied status needed for explainable absence. Non-financial external retention follows its
> applicable external record-class policy and is not invented by this application.
>
> This act amends `D-134`/`D-135` only where their five-year financial-policy default was presented
> as the first Product/UI archival value. It preserves the distinction from `REUSE-WINDOW-90`,
> preserves external ownership of archive/restoration/disposal, and authorizes no job, migration,
> deletion, scoring engine, sprint or release.

### Exact Lane A source packet

1. **Register:** append the ruling above and add a dated correction pointer at `D-134`, `D-135` and
   `D-198`; preserve their historical text.
2. **Business Case / Blueprint:** separate the UI-visible 90-day operational boundary from later
   external record-class retention. Replace any statement that makes a financial-policy default the
   first editorial UI clock. Preserve the independent reuse window.
3. **Product / FN audit:** make `AC-12a` depend on a supplied external fact. Show current, externally
   handed-off/archived, and unknown-not-established outcomes. Do not show the later five-year
   financial countdown.
4. **Decision and Config logs:** record the dated ratification events; change the two current
   “unratified/never put” declarations only after the Register wording is accepted and applied.
5. **Build Spec / V1 propagation:** correct current ratification statements. Inventory is
   unaffected unless a file is created or retired; Product §8 is unaffected because no sprint
   closes and no tier opens.
6. **Storyboard/UML/data flow/traceability/Encyclopedia:** use the artifact treatment already in
   this entry. One external fact flows into the UI; no application command flows out to operate
   retention. Hosted Encyclopedia verification remains separate.
7. **Lane B code metadata:** later bounded unit only. The value `90` remains; status/citation and any
   misleading symbol treatment follow the accepted source packet. No schema is inferred.

### Success criteria derived from failure

| Guaranteed failure | Required evidence of success |
|---|---|
| Day-90 deletion destroys a record still under five-year financial retention | Test example shows view removal/external handoff at 90 and continuing external financial retention; no deletion fact is inferred |
| Product displays both 90 days and five years as competing A6 settings | UI acceptance shows only the 90-day boundary plus supplied external status |
| Every editorial record is called a financial record to borrow five years | Record classification determines the external policy; non-financial retention is not invented by the app |
| A missing external event is rendered as “archived” | Missing/invalid fact yields unknown/not established and preserves the last proved state |
| Configuration flags become `RATIFIED` before sources agree | Register, ledgers and Product semantics commit first; Lane B independently verifies before a code unit opens |

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | The proposed Register arbitration as Lane A's reviewable draft | Phase 1 — Cowork validates exact wording against the Judge act |
| Approve-with-conditions | Ratifying `DATA_RETENTION_ARCHIVE_DAYS = 90` | Phase 1 — current-view/external-handoff meaning and retention-hold precedence propagate together |
| Approve | Ratifying `SCORING_REVIEW_THRESHOLD_ARTICLES = 50` | Phase 1 — review threshold only; TC3 and no-auto-advance remain |
| Reject | Day-90 deletion where an external retention duty applies | Contradicts the ordered workflow and destroys later evidence |
| Defer | Governed-source application, code metadata and Graphify | Exact Judge act; application; independent verification; graph last |

## Lane A validation — arbitration draft accepted, restored 2026-09-15

**Restored, not new.** This session added a validation section here two passes ago; the current file
does not contain it — confirmed by direct read this pass, byte count matches the pre-validation
state exactly. This session's own edit record was a pure append (the verdict table above was kept
verbatim as the insertion anchor), so the most likely cause is a working-tree overwrite by a later
git commit based on an earlier revision, not a deliberate deletion by this session. B-094 flagged
the absence correctly; restoring the content now rather than disputing the flag.

**Validated 2026-09-15 at read commit `68e85d9`** (per Lane B's report; not independently
git-verified from this session). This session's validation is an internal-consistency check against
the Judge clarification already recorded in this entry's own text (the acknowledgement above and the
"Judge clarification — sequential PDPA and financial-retention workflows" section); this session has
not seen the Chief Editor's ruling stated directly in chat, only as relayed through Lane B's
narrative, so "validated against the Judge's exact intent" means checked for coherence with the
prior recorded text, not independent confirmation of what the Chief Editor said.

On that basis, the proposed Register wording is accepted as Lane A's reviewable draft: it restates
the settled A4/A6 values without adding scoring or archival authority, preserves the distinction from
`REUSE-WINDOW-90`, and adds one precise precedence rule not previously spelled out this explicitly: a
financial or legal retention hold overrides day-90 disposal, so day-90 is never itself proof of
deletion. This resolves the impossibility the same section names. No wording conflict found against
the earlier-acknowledged sequential model.

This validation is Cowork's semantic sign-off, not the Judge's acceptance act and not application.
The packet still needs an explicit Accept from the Chief Editor before Lane A · Claude Code may apply
and commit it under the B-102 transport procedure. No governed source is edited by this validation.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Proposed Register wording, Business Case/Blueprint, Product/FN audit, ledger and cross-artifact packet items 1-7 | Phase 1 — awaiting explicit Judge accept, then Code application |
| Approve-with-conditions | Day-90 deletion precedence rule | Phase 1 — apply only together with the rest of the packet, not in isolation |
| Defer | Application, Lane B code metadata unit, independent verification, Graphify | After Judge accept and commit |

## Lane B verification correction — history proved; overwrite cause not proved, 2026-09-15

Lane B independently resolved the cited Git anchor:
`68e85d939fcc4d01def5c1edfbaf0891f5b97350` exists, and the B-106 four-source review was already
present when that commit was read. The restored Lane A validation is additive to the committed
review and does not delete or replace it.

The proposed cause of the earlier missing validation remains unproved. A Git commit made from an
earlier staged snapshot does not by itself overwrite a separate working-tree append; proving a race
would require the file-bridge write time, staging/diff state and the external writer's operation.
Treat the loss as an observed missing append with unknown cause. The practical control remains one
entry per commit plus a post-commit content read, without turning the speculative cause into a
governance fact.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Restored Lane A semantic validation as additive handoff evidence | Current handoff phase — commit this original entry and re-read it |
| Approve | Full independent verification of the cited `68e85d9` Git object | Current review — anchor exists and B-106 review content is visible |
| Reject | “Working-tree/commit race” as an established root cause | Infrastructure diagnosis — retain as a hypothesis only if investigated |
| Defer | A4/A6 governed-source application, code metadata and Graphify | Existing Judge act and verification conditions |

## Lane A correction — race theory downgraded to unproven hypothesis, 2026-09-15

Accepted. Last pass stated a "most likely" cause for the missing validation section without the
evidence to support that confidence level: file-bridge write time, staging/diff state, and the
external writer's operation were never jointly inspected, and still cannot be from this session
(no git access, `device_bash` down again this pass). The race theory stated as a likely cause was an
overclaim. Correcting the standing record: the cause of the earlier missing append is **unknown**.
"Working-tree/commit race" remains a hypothesis only, not a governance fact, exactly as Lane B's
verdict states.

This does not change the practical control already in place: one entry per commit, plus a
post-commit content read, catches a missing append regardless of its cause. No new control is
proposed here, since diagnosing the cause is not a precondition for the control that already covers
the failure mode.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Cause of the earlier missing append recorded as unknown, not race-diagnosed | Current pass — standing record corrected |
| Approve | One-entry-per-commit plus post-commit read as the standing control | Applies regardless of cause |
| Defer | A4/A6 governed-source application and Graphify | Existing Judge act and verification conditions, unchanged |
