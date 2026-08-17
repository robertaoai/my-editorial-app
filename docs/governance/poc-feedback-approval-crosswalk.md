# PoC Evidence-to-Approval Crosswalk for Media SOP Feedback

**Status:** Draft implementation plan for Board review  
**Change class:** Governance analysis and approval planning only  
**Build authorization:** None  
**Governing-document amendment:** None  

## 1. Clarified prompt

> Review the proposed Professional Evidence Review Proof of Concept against §5, “Revised feedback-register dispositions,” of the Media-Industry SOP Fallback Implementation Plan. For every feedback item and unresolved operating decision, identify: (1) what evidence the PoC can produce; (2) what the Board, Chief Editor, or Charter owner may approve using that evidence; (3) what the PoC cannot establish; (4) the artifact required to close the gap; and (5) the no-build sequence for reaching a controlled decision. Preserve the original My-Editorial-App product and workflow. Do not treat PoC observations, customer payment, or operational convenience as authority to amend the PRD, Charter, requirements, traceability, or SOP.

## 2. Executive finding

The [Professional Evidence Review PoC proposal](board-proposal-professional-evidence-review-poc.md) is a useful **operating-validation lane** for the [Media-Industry SOP Fallback Implementation Plan](media-industry-sop-fallback-implementation-plan.md). It can make disputed requirements visible in real work, capture the consequences of current wording, and provide the Board with concrete examples instead of abstract assumptions.

It does **not** approve or close the feedback register by itself.

The governing distinction is:

```text
PoC case evidence
    → supports a documented decision
    → the authorized owner approves or rejects that decision
    → the approved change is made in the governing document
    → traceability and acceptance evidence are updated
    → only then may the corresponding gap be marked closed
```

Three propositions must therefore remain separate:

1. **Observed:** a PoC case demonstrated a behavior, cost, conflict, or failure mode.
2. **Approved:** the authorized owner accepted a disposition or policy response.
3. **Closed:** the approved text, trace, control, and verification artifact now exist.

The PoC most directly helps approve CR-06/CR-14 treatment, FR-14 wording, phase-gate evidence, and the practical Chief Editor/virtual Chief Journalist boundary. It can inform—but cannot settle by observation alone—OD1, OD2, OD3, Charter amendment, legal exposure, systemic halt thresholds, or SOP precedence.

## 3. Approval-readiness summary

| Approval class | Items | Board treatment |
|---|---|---|
| Ready for documentation decision now | FB-01, FB-03, FB-04, FB-08 | Approve the disposition and authorize controlled document work; PoC evidence is useful confirmation, not a prerequisite |
| Validate through PoC before final requirement wording | FB-05, FB-06 | Approve the direction provisionally; use case evidence to refine acceptance criteria before closing the gap |
| Requires authority decision plus PoC evidence | FB-02, FR-04, FR-05, OD1, OD2, judgment-rule governance | Approve a bounded interim rule before live cases; ratify or revise it after the PoC; amend the Charter or controlling requirement explicitly |
| Remains an open dependency or owned risk | FB-07, jurisdiction/contract/counsel coverage, OD3, rare systemic-failure calibration | Accept the proposed risk treatment without representing that the underlying gap is closed |

No feedback item should move directly from `Open` to `Closed` merely because the PoC proposal is approved.

## 4. What evidence the PoC should produce

The PoC already preserves the original trigger-to-publication workflow and adds the Editorial Briefcase as a manual evidence package. For this review, each case should produce a compact **governance evidence bundle**:

1. trigger, commissioning source, public-source URL, topic, intended audience, and provenance;
2. CR-06 newsworthiness profile and rationale, including a recorded manual fallback where automation is unavailable;
3. CR-14/FR-14 tagging inputs: topic, source, audience fit, and trend/newsworthiness signals;
4. gate-by-gate role, evidence considered, rule-set version, result, disagreement, exception, timestamp, and reason;
5. Chief Journalist recommendation clearly labeled as virtual/advisory;
6. Chief Editor `Publish`, `Hold`, or `Escalate` disposition and rationale;
7. any Board override or two-key high-liability treatment;
8. missing evidence, dissent, fair-response attempt, conflict, source-risk, contractual trigger, and originality result;
9. internal `MVP` versus client-facing `POC` folder-separation check;
10. effort, delay, rework, customer response, payment status, reuse, complaint, correction, or near miss; and
11. proposed feedback-register entry with an explicit statement that it has **no amending authority**.

Evidence should be recorded using manual templates only. This plan does not authorize application, schema, agent, scraping, payment, account, or publication changes.

## 5. Feedback-register approval crosswalk

### FB-01 — five customer gates versus ten internal states

| Question | Review |
|---|---|
| What the PoC can show | Whether the Chief Editor can consistently translate internal states into the five user-facing phases; where operators or reviewers confuse phase names with transition states |
| What may be approved | One canonical internal state machine, a five-phase presentation map, and a controlled glossary |
| What it cannot prove | That the implemented user interface is understandable; the PoC uses manual records |
| Closure artifact | Approved state-to-phase map and glossary, followed later by tests showing all states and transitions are covered |
| Recommended status | **Disposition ready for approval now; closure after controlled document update** |

The PoC reduces ambiguity by producing real examples for the glossary. It is not necessary to wait for the PoC to approve the classification principle because the change does not alter Product Scope.

### FB-02 — zero bypass, independent judgment, and negative OD2 path

| Question | Review |
|---|---|
| What the PoC can show | Whether every case follows the sequence; where distinct challenge changes a disposition; how often items are returned, held, escalated, or overridden; whether unrelated work can continue safely |
| What may be approved | An interim compensating-control ladder, item isolation as the default, and a narrow list of systemic conditions that halt all publishing |
| What it cannot prove | That 5–10 cases establish reliable independence, catch rare failures, or determine every systemic halt threshold |
| Closure artifact | Explicit OD2 decision, approved Charter/requirement amendment, tested control cases, and a named owner for threshold revision |
| Recommended status | **Conditional authority decision; remain open until OD2 and its controlling text are approved** |

The PoC should distinguish:

- **sequence integrity:** no gate is skipped;
- **judgment independence:** the challenge is meaningfully different rather than a repeated model answer; and
- **system continuity:** an affected article is held without unnecessarily stopping unrelated work.

Because rare systemic failures are unlikely to occur in a small live cohort, the Board should review tabletop evidence for compromised credentials, corrupted audit integrity, a broken gate control, and a binding service-wide order.

### FB-03 — line filter without a customer request

| Question | Review |
|---|---|
| What the PoC can show | Whether an internal operational/assurance view is useful without exposing it as a client promise |
| What may be approved | Classification as Project Scope and retention as an administrative or audit capability |
| What it cannot prove | Customer demand or authority to promote the filter into Product Scope |
| Closure artifact | Approved Project Scope entry and updated traceability; a separate change request if product-visible cost, schedule, or behavior materially changes |
| Recommended status | **Disposition ready for approval now** |

Customer feedback may later create a new Customer Request, but it cannot retroactively convert the current unanchored item into one.

### FB-04 — six unanchored specifications

| Question | Review |
|---|---|
| What the PoC can show | Which Project Scope controls are exercised, their operating cost, and whether their product-visible effects should be disclosed |
| What may be approved | PSK-01 through PSK-06 as explicit Project Scope anchors, together with PSK-07 through PSK-09 introduced by the fallback plan |
| What it cannot prove | That any Project Scope item originated as a Customer Request |
| Closure artifact | Approved Project Scope key definitions and a revised backward-trace table with no specification labeled falsely as customer-originated |
| Recommended status | **Backward-trace disposition ready for approval; close only after traceability update** |

The repair closes an orphaned-specification problem. It does not manufacture customer provenance.

### FB-05 — CR-14 has no functional requirement

| Question | Review |
|---|---|
| What the PoC can show | The actual tagging activity required to supply CR-06, the data captured, the manual/rules fallback, and where automation would save repeated effort |
| What may be approved | FR-14 as a Product Scope functional requirement linked directly to CR-14 and producing inputs for CR-06 |
| What it cannot prove | That an AI implementation is accurate, reliable, or necessary for every tagging step |
| Closure artifact | Approved atomic FR-14 text, CR-14 → FR-14 → CR-06 trace, acceptance criteria, and a fallback rule independent of AI availability |
| Recommended status | **Approve direction provisionally; refine through PoC; close after requirement and trace approval** |

The required capability is the production of reviewable inputs. AI is one executor, not the definition of the requirement.

### FB-06 — CR-06 treated as not deliverable in v1

| Question | Review |
|---|---|
| What the PoC can show | Whether audience fit, timeliness, impact, novelty, source authority, corroboration, and mission fit are necessary to decide whether an item deserves editorial effort |
| What may be approved | Minimum viable newsworthiness assessment as core Product Scope with a manual fallback and reviewable rationale |
| What it cannot prove | The optimum numerical weighting or that a score safely determines truth, legality, fairness, or publication |
| Closure artifact | Approved CR-06 acceptance criteria, newsworthiness profile, manual fallback, and explicit prohibition on score-driven gate advancement |
| Recommended status | **Approve direction provisionally; use every PoC case to validate the profile** |

Because every topic must be judged for audience/news value before scarce editorial effort is committed, the activity is core even when automated scoring is deferred.

### FB-07 — missing Business Charter

| Question | Review |
|---|---|
| What the PoC can show | Which jurisdiction, platform, contract, rights, house-policy, or external-review fields become necessary in real engagements; which unanswered field causes a hold or restricted scope |
| What may be approved | A separate jurisdiction/contract/house-policy dependency pack, use of `UNSET` for unknown authority, and a low-liability operating boundary |
| What it cannot prove | Applicable law, contract meaning, regulatory exposure, access to counsel, or the content of the missing Business Charter |
| Closure artifact | Board-ratified operating profile and resource register; contract-specific review; external counsel input where available; Business Charter if later supplied |
| Recommended status | **Approve the risk treatment while keeping the upstream gap open** |

The founder's use of public resources and mediation channels is a continuity measure, not a substitute for jurisdiction-specific advice. The PoC must hold or avoid work whose exposure cannot be bounded safely.

### FB-08 — compound requirement lines

| Question | Review |
|---|---|
| What the PoC can show | Real examples where one sentence produces several actors, actions, exceptions, or acceptance outcomes |
| What may be approved | Atomic drafting for all new and changed requirements and intentional re-anchoring during the approved change phase |
| What it cannot prove | That existing compounds have been safely split or that their current hashes may be discarded |
| Closure artifact | Approved atomic replacements, preserved change history, updated hashes, and explicit traces for each resulting requirement |
| Recommended status | **Drafting rule ready for approval; content gap closes only after controlled rewrite** |

## 6. Project Scope key validation

The PoC may exercise and describe these controls, but the Board—not the customer case—authorizes their Project Scope status.

| Key | PoC evidence | Approval use |
|---|---|---|
| PSK-01 correction/return/revision | Returned work, revision reasons, corrected artifacts | Define correction and return controls supporting CR-10/CR-11/CR-19 |
| PSK-02 independent assurance/high-risk escalation | Dissent, additional corroboration, expert referral | Set FR-05 compensating controls and high-risk boundary |
| PSK-03 continuity/delegation/absence | Tabletop Chief Editor absence and unfinished cases | Decide safe pause/delegation rules without assuming authority transfer |
| PSK-04 remedies/order response | Tabletop complaint, correction, retraction, or binding order | Separate pre-publication decisions from post-publication remedies |
| PSK-05 human accountability/no score bypass | Chief Editor decisions that differ from trend or agent recommendation | Preserve accountable disposition and prohibit automated gate bypass |
| PSK-06 editorial-commercial separation | Paid cases where client preference conflicts with evidence or mission | Define client-service boundaries without selling editorial judgment |
| PSK-07 contract/liquidated-damages control | Engagement terms, exclusivity dates, embargoes, warranties, exceptions | Identify needed contract register fields; no claim about enforceability |
| PSK-08 source/whistleblower protection | Redacted tabletop case, access decision, public-interest and harm review | Approve protected-source lane and escalation conditions |
| PSK-09 SOP/judgment-rule governance | Rule version, exception, override, correction, rollback proposal | Approve ownership, versioning, evaluation, and rollback process |

## 7. Open-decision crosswalk

### 7.1 Jurisdictions, regulators/platforms, contracts, and external counsel

The PoC should populate an operating-profile register for each engagement and record `UNSET` rather than infer unknown authority. It can reveal which missing facts block work. It cannot decide applicable law or replace counsel.

**Pre-PoC decision required:** Board-approved low-liability topic boundary, prohibited work, platform/resource list, contract-signing authority, and mandatory escalation triggers.

**Post-PoC decision:** refine the resource register and escalation boundary using observed holds and questions. Keep counsel availability and jurisdiction coverage open until actually established.

### 7.2 OD1 — Chief Editor and virtual Chief Journalist authority

The proposal's operating hypothesis is coherent:

- the virtual Chief Journalist supplies a recommendation and deterministic final-check package;
- the human Chief Editor has final operational authority for `Publish`, `Hold`, or `Escalate`; and
- the Board may override or require a second key for defined high-liability matters.

PoC cases can show workload, disagreement, override, and missing-evidence patterns. They cannot amend OD1.

**Pre-PoC decision required:** approve this boundary as an interim operating rule so live cases have an accountable decision maker.

**Closure condition:** amend the Charter and FR-04 explicitly, including which role reviews each gate, what “final” means, and how Board intervention is recorded without erasing Chief Editor accountability.

### 7.3 OD2 — compensating-control threshold and system-wide halt

Use PoC cases to record when distinct challenge changes the evidence or outcome. Supplement live work with tabletop tests because the cohort is too small for rare systemic events.

**Recommended interim threshold:** an item may not advance when a material claim lacks adequate provenance/corroboration, a fair-response duty is unresolved, a conflict or source risk is material, required rights are absent, or the independence mechanism produces no meaningful challenge. The item is returned, held, or escalated; unrelated items continue.

**Recommended systemic halt candidates:** compromised publishing credentials, corrupted audit integrity, a broken transition/control mechanism, inability to identify the accountable approver, or a binding order affecting the service as a whole.

These are proposed qualitative boundaries, not statistical thresholds. The Board/Charter owner must approve the final rule and name who may declare and lift a system-wide halt.

### 7.4 Judgment-rule governance and the OD4 collision

The current Charter's OD4 means **Proposer → Critics → Judge**, rejected for v1 and conditionally deferred. The fallback plan uses “OD4” for the broader **judgment-rule lifecycle**: proposal, critique, approval, versioning, evaluation, and rollback. These are related but not identical decisions.

Silently reusing OD4 would create a false resolution. The Board should choose one of two explicit paths:

1. **Preferred:** create a new decision, such as `BD-JRG-01`, for judgment-rule governance while preserving OD4's existing meaning; or
2. amend the Charter deliberately to redefine/split OD4, preserving its history and branch conditions.

The PoC can provide rule-version, exception, override, correction, and rollback evidence. It cannot authorize the new governance model.

**Recommended authority split:** Chief Editor owns editorial rule content and routine version approval inside a Board-approved risk envelope; the Board approves material changes to authority, liability boundary, rights, source protection, independence, systemic halt, and external-publication policy.

### 7.5 House SOP precedence

The PoC can log conflicts between customer instructions, evidence, contract terms, platform rules, editorial mission, and public resources. It cannot choose the legal or institutional hierarchy.

The Board should ratify a proposed precedence rule before live delivery:

1. binding law, regulator/court order, and enforceable contract within the applicable jurisdiction;
2. source-protection and rights commitments that remain binding;
3. Board-approved editorial independence, safety, and house SOP;
4. platform rules for the selected publication channel;
5. the commissioning customer's request and package terms; and
6. operational convenience or agent recommendation.

Conflicts at levels 1–4 should route to `Hold` or `Escalate`, not be resolved by a trend score, customer payment, or virtual-agent confidence. This hierarchy remains a **proposal for Board/legal review**, not a statement that every listed source has identical authority in every jurisdiction.

### 7.6 OD3 — agent headcount and role distribution

The PoC can measure role touches, manual effort, delay, and repeated steps. It cannot establish the production headcount, prove that one agent safely fills multiple independent roles, or resolve Line 3 assurance ownership.

**Recommended decision:** defer OD3 until the PoC workload record and OD1/OD2 decisions are available. Do not let the deferment change the fixed five-role model or imply that role labels equal independent judgment.

## 8. Proposed Board approval packet

The following proposed resolutions are intentionally separate from the existing pending `B-P0-01` through `B-P0-18` PoC authorizations.

| Proposed ID | Resolution | Effect if approved |
|---|---|---|
| MFB-01 | Approve the canonical state-to-five-phase map and glossary direction | Accepts FB-01 disposition; authorizes documentation work only |
| MFB-02 | Approve the Project Scope classification and PSK-01 through PSK-09 definitions | Accepts FB-03/FB-04 disposition; does not create Customer Request provenance |
| MFB-03 | Approve FR-14 direction and CR-06/CR-14 as core Product Scope activities with manual fallback | Accepts FB-05/FB-06 direction; final wording remains controlled |
| MFB-04 | Approve the interim Chief Editor final-authority/virtual Chief Journalist advisory boundary and route OD1/FR-04 amendment | Enables accountable PoC operation; does not itself amend the Charter |
| MFB-05 | Approve a provisional OD2 compensating ladder, item isolation, and named systemic-halt conditions | Enables bounded testing; OD2 remains open until Charter decision and control evidence |
| MFB-06 | Create `BD-JRG-01` for judgment-rule governance, or explicitly amend/split OD4 | Prevents silent redefinition of existing OD4 |
| MFB-07 | Ratify the house-SOP precedence proposal subject to contract/jurisdiction review | Provides an interim conflict path; unknown legal authority remains `UNSET` |
| MFB-08 | Approve FB-07 risk treatment while leaving Business Charter, jurisdiction, contract, and counsel gaps open | Accepts an owned dependency; does not certify legal readiness |
| MFB-09 | Approve atomic drafting and controlled re-anchoring; defer OD3 pending workload evidence | Accepts FB-08 rule while preserving hashes/history; keeps OD3 explicit |
| MFB-10 | Authorize the documentation and evidence-collection phase only | No build, schema, scraping, autonomous publication, account, payment, or deployment authority |

The Board should record `Approve`, `Approve with conditions`, `Reject`, or `Defer` for each resolution, with owner, condition, due date, and linked evidence. A single blanket approval would obscure which risks remain open.

## 9. No-build evidence plan

### Phase A — Board bounds the experiment

1. Decide the existing `B-P0-01` through `B-P0-18` proposal items.
2. Decide or condition MFB-01 through MFB-10.
3. Set low-liability topic boundaries, spending, price/collection treatment, review date, and client-first exclusivity terms.
4. Approve the interim Chief Editor/Chief Journalist authority boundary.
5. Approve item-hold and system-halt rules, including who declares and lifts a halt.
6. Leave every unknown jurisdiction, contract, counsel, or rule parameter visibly `UNSET`.

### Phase B — prepare manual artifacts

1. Create no-code templates for the Editorial Briefcase and governance evidence bundle.
2. Create the state/phase glossary draft, newsworthiness profile, proposed FR-14 acceptance examples, rule-version record, and decision log.
3. Create a Project Scope key register and trace-change worksheet without changing the governed traceability map.
4. Prepare pre-payment disclosure, rights/publication authorization, originality-search record, and folder-separation checklist.

### Phase C — run bounded cases

1. Perform 5–10 low-liability cases manually through the unchanged workflow.
2. Record every gate, dissent, return, hold, escalation, override, and rule exception.
3. Ensure successful `Publish` creates the internal publishable article while the client receives only the authorized `POC` package.
4. Record payment and customer outcome as product-market evidence, not as editorial authority.
5. Do not use high-risk live cases to manufacture governance evidence.

### Phase D — run tabletop control cases

Use synthetic or safely redacted scenarios for:

1. negative/uncertain OD2 with no meaningful independent challenge;
2. Chief Editor absence beyond the approved continuity period;
3. corrupted audit integrity or compromised publication credentials;
4. correction versus editorial retraction versus regulator/court order;
5. confidential source or whistleblower retaliation/identification risk;
6. contract, embargo, exclusivity-window, or liquidated-damages trigger;
7. AI or external service unavailable; and
8. originality search showing close prior publication or suspected plagiarism.

Tabletop results reveal policy gaps; they do not prove production reliability.

### Phase E — Board reviews evidence and authorizes controlled document changes

1. Compare observed evidence against each row in §§5–7.
2. Record dissent, sample limitations, unresolved exposure, and proposed rule changes.
3. Decide each feedback item and open decision separately.
4. Authorize only the approved PRD, Charter, requirement, traceability, SOP, and test-plan edits.
5. Recalculate traces and hashes under change control.
6. Mark a gap closed only when its closure artifact exists and has been reviewed.

### Phase F — separate build authorization

Only after the documentation/authority phase is complete should the Board decide whether a development sprint may implement any approved change. That later decision must identify scope, acceptance criteria, migration impact, security/privacy treatment, tests, budget, and rollback. This document does not provide that authorization.

## 10. Decision-evidence limitations

The Board review should preserve these limitations:

- **Small and selected cohort:** 5–10 cases can reveal usability and workflow patterns but cannot estimate rare-event or liability rates.
- **Manual-operation bias:** a founder-operated PoC may hide effort and judgment that automation cannot reproduce.
- **Circular confirmation:** following the proposed workflow demonstrates that it can be followed, not that every rule is correct.
- **Payment is not public-interest validation:** a paying customer's preference cannot override evidence, rights, source safety, independence, or editorial mission.
- **Absence of failure is not control assurance:** no complaint, retraction, or halt in the cohort does not prove that the controls prevent them.
- **Tabletop evidence is conditional:** synthetic cases test policy logic, not real platform, legal, security, or human behavior.
- **Public resources are not counsel:** they support cautious research and mediation but do not determine applicable obligations.
- **PoC feedback has no retroactive authority:** it may support a new change request; it cannot rewrite the origin of an existing requirement.

## 11. Recommended Board conclusion

Approve the PoC as a bounded evidence-gathering lane **only if** its preconditions establish an accountable Chief Editor, advisory virtual Chief Journalist, item-level hold default, narrow system-halt authority, low-liability boundary, rights/originality checks, and explicit no-build/no-auto-publication limits.

Approve FB-01, FB-03, FB-04, and FB-08 as documentation/control dispositions now. Approve the direction of FB-05 and FB-06 and use PoC evidence to refine their atomic acceptance criteria. Treat FB-02, FR-04, FR-05, OD1, OD2, and judgment-rule governance as explicit authority decisions. Accept FB-07 as an open dependency with bounded risk treatment, not as a closed legal/governance gap. Defer OD3 until role/workload evidence exists.

This approach keeps the business experiment simple and practical while preventing operational evidence from being mistaken for Charter, legal, customer, or Board authority.

## 12. Source documents and preservation rule

This review reads, but does not amend:

- [Board Proposal — Professional Evidence Review PoC](board-proposal-professional-evidence-review-poc.md)
- [Media-Industry SOP Fallback Implementation Plan](media-industry-sop-fallback-implementation-plan.md)
- [Requirements Traceability Map](requirements-traceability-map.md)
- [Modular PRD](../Modular_PRD.md)
- [Project Charter v1](../source/project-charter-v1.md)

If this crosswalk conflicts with an approved governing document, the approved governing document controls until its authorized owner records a change. Terms such as `MFB-*` and `BD-JRG-01` are proposed decision identifiers only and have no authority until adopted.
