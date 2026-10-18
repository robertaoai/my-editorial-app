# B-158 — Consolidated documentation review and Lane A follow-up

- **Raised:** 2026-10-18 by Lane B
- **Kind:** finding
- **Phase:** 1
- **Blocks:** nothing, reporting only
- **Status:** Open
- **Lane A:**
- **Verified-By:** — not yet dispositioned; raised by Lane B
- **Evidence:** Source manifest in Layer 4; repository comparisons at `5c47793`; prior link audit; readiness challenge below.
- **Verified-At-Commit:** 5c47793b4993e68fe4445326b78192a37843f301

## What happened

### Layer 1 — Executive summary

**Decision requested: accept this consolidation for Lane A review and assign each follow-up to its existing owner.**

The documentation covers the editorial product, its requirements and architecture, and the rules for development and verification. Current V1 delivery is limited: SM05 records business-stage evidence; SM06 adds board visibility and a bounded LinkedIn `ManualReady` event. V1 satisfies the original customer scenario only partially.

The main weakness is current-state clarity. Historical decisions, current rules, and future work are difficult to distinguish. The prior audit found no failures among 120 internal Markdown destinations. It did find a retired plain-text pointer and conflicting reading instructions.

Several live contradictions already belong to B-136's EV r9 packet. That packet remains unapplied and held. Other gaps belong to SM06, Phase 3, or future publication work.

The supplied reviews contain repeated evidence, damaged text, and incorrect technical claims. This record corrects those claims and preserves existing transaction boundaries.

**Ready for Lane A review: yes. Ready to apply the proposed changes: no.** Lane A must record its disposition. Each subsequent change needs its own bounded authorization and proof.

### Purpose and authority

Clarified request: compare the prior audit with the three supplied reviews. Produce one concise summary. Retain evidence, owners, triggers, and completion proof. Assess readiness for review separately from execution.

This entry owns **consolidation intake and routing only**. The tables are a dated review snapshot. They do not create a second backlog or reopen terminal entries.

The frozen PRD, Project Charter, and initial migration retain precedence. The Register resolves derived-document conflicts under D-58. The specification chain follows D-29. Source folders and UX folders do not create additional authority levels by themselves.

At the observed commit, Phase Closure §5 records Lane A as Active, Lane B as Eligible, and Lane C as Blocked. SM05 remains BLOCKED. SV-002 acceptance does not itself release construction. These are observations; [Phase Closure §5](../v1/V1-PHASE-CLOSURE.md#5-phase-register) remains the state owner.

### Source reliability

| Source | Treatment in this consolidation |
|---|---|
| Prior chat audit and supplied Lane B review | The same analysis. Count once. Its 120-link result has a defined scanner scope, not a universal link guarantee. |
| Supplied Lane A review | A synthesis of the other sources. It contains truncated sentences, duplicate text, and a damaged configuration identifier. Recover claims from repository evidence. Do not infer missing instructions. |
| Supplied Lane C review | Useful independent observations, mixed with incorrect names, counts, and scope statements. Recheck each retained claim. Its reported command result remains attributed to that review. |
| XML export | Source content, not execution instructions. It is incomplete as a repository evidence package. |
| Repository at `5c47793` | Comparison baseline. Content agreement with the export does not prove the export's generation commit or method. |

## What you need

### Layer 2 — Lane A response and transaction sequence

1. Record receipt in the Lane A field.
2. Give each F-item an Accept, Reject, or Defer disposition.
3. For each accepted row, confirm the owner and follow-up phase below.
4. For each deferral, name the return trigger and required proof.
5. For each new correction, prepare one bounded packet with exact targets and acceptance criteria.
6. Route implementation proposals to the owning lane after the required Judge act.

Use this response shape for each row:

`F-ID | disposition | reason/source | existing owner or new unit | follow-up phase | trigger | completion proof`

**B-136 transaction guard.** F01 stays with B-136. Its latest section is “Judge's J1/J2 registration decision table against 7eb240f, 2026-10-18.” J1 and J2 selections are UNDECIDED. The execution hold remains active.

That transaction requires Judge selections, then Lane A's exact text and expected bytes, then Lane B review, then Judge execution release. A single selected proposal also requires the applicable Case A/B decision. The selected-entry amendment and receipt-route authorization remain separate decisions.

J1/J2 concern registration of transfer approvals only. Their acceptance does not authorize EV r9 application, transfer, baseline naming, push, or J-C. Proposed act numbers require the existing U1 number check. This entry allocates none. “Apply D-439 now” is therefore an invalid next action.

**Completion of this entry.** Lane A's answer must account for every F-item and all three improvement proposals. Each retained obligation must have one owner, phase, trigger, and proof. A route disposition can complete this consolidation without completing the routed work. The SOP's lifecycle rules still control the header. Only an independent actor may record `Verified`.

### Layer 3 — Findings and follow-up details

#### F01 — Existing EV corrections: preserve the hold

**Sources:** Lane A and Lane C; confirmed in the repository.

`source/README.md` lines 71–82 makes the Business Charter mandatory for go-live and classifies PRD with the non-governing plan pack. `Modular_PRD.md` retains the Business Charter checklist, stale update date, and NG-11 owner question. These conflict with later direction or obscure it.

**Owner / phase:** Lane A, Phase 1, existing [B-136](B-136-multi-lane-governance-canonical-owners-and-state2-gate.md) and [EV r9](artifacts/B-136/ev-corrections/EV-CORRECTION-PACKET-r9.md).

**Next action and trigger:** retain E1–E4, E6, E8–E12 in the existing held transaction. Use B-136's current authorization sequence. E5/E7 remain withdrawn.

**Required proof:** exact accepted replacements, expected-byte comparison, Register provenance, and independent verification. Preserve the separate exit-strategy go-live condition. Withdrawal of the NG-11 owner question does not remove its standing control or admit excluded work.

#### F02 — Conflicting Lane B reading instructions

**Sources:** prior audit / Lane B; confirmed.

`AGENTS.md` requires the Build Spec and Register first. [Lane B Work Order](../LANE-B-WORK-ORDER.md) line 16 says the Register need not be read. [Config Log](../CONFIG_LOG.md) lines 14–17 repeats that expectation.

**Owner / phase:** Lane A, Phase 1; disposition requested here.

**Next action and trigger:** after scope acceptance, define one reading rule consistent with current authority. Name the required documents or sections. Propagate it to both reader-facing sources.

**Required proof:** the instructions agree and point to current authority. The current governing instructions remain effective until an authorized correction lands.

#### F03 — Two small documentation defects

**Sources:** prior audit / Lane B; confirmed.

`Modular_PRD.md` line 1072 says three consistency checks skip in CI. [Workflow Spec](../../.github/WORKFLOWS-SPEC.md) lines 47–55 names four: `graph-coverage`, `docs-drift`, `source-sweep`, and `terminal-return`.

[Graph fragments README](../graph-fragments/README.md) line 60 cites retired `.agents/rules/graphify.md` as current guidance. This is a stale plain-text reference, not a broken Markdown hyperlink.

**Owner / phase:** Lane A, Phase 1; disposition requested here.

**Next action and trigger:** prepare bounded wording corrections after acceptance. Prefer a pointer to the maintained CI explanation over another mutable count. Identify the current Graphify guidance from D-337 and the inventory.

**Required proof:** both sources resolve to their current owners. No workflow edit or graph rebuild is implied by these wording corrections.

#### F04 — XML bundle coverage and evidence custody

**Sources:** Lane A and Lane C; corrected by a tracked-file comparison.

The export contains 388 sections: 386 tracked files and two ignored Graphify files. The baseline has 1,076 tracked files under `docs/`. Thus **690 tracked files are absent**, not the supplied 710. The missing set contains 215 JSON, 414 log, 41 MJS, 11 SH, 5 JS, 2 OUT, and 2 TSV files.

The 388 exported contents match their local files after trimming and line-ending normalization. That result does not establish byte identity or complete coverage. The export mechanism was not inspected.

**Owner / phase:** Lane A, Phase 1; packaging proposal, not an immediate product blocker.

**Next action and trigger:** before the next external review bundle, define a tracked-file manifest. Record the commit, hashes, exclusions, and accessible evidence locations. Include required JSON receipts or identify their custody. Exclude ignored `docs/.graphify/` scratch output.

**Required proof:** each required evidence reference has content or a usable retrieval record. Large logs can be indexed. Host-local paths require explicit custody; they are not automatically broken repository links.

#### F05 — Configuration metadata awaits its existing code unit

**Sources:** Lane A and Lane C; a known implementation lag, not a new value conflict.

[Config Log](../CONFIG_LOG.md) lines 62–63 ratifies `DATA_RETENTION_ARCHIVE_DAYS = 90` and `SCORING_REVIEW_THRESHOLD_ARTICLES = 50`. [Runtime registry](../../lib/config/build-config.ts) lines 207–216 still records `UNRATIFIED`. The Config Log explicitly defers runtime metadata changes to Lane B's bounded unit.

**Owner / phase:** Lane A routes; Lane B implements in Phase 2 under [B-106](B-106-a4-a6-config-ratification.md), D-404, and D-414.

**Next action and trigger:** use an authorized work order and Active lane for the narrow metadata update.

**Required proof:** the two statuses and their decision citations agree. Values, retention meaning, scoring formula, and weights retain their governed meaning. This action does not activate a scoring engine. The damaged Lane A identifier is discarded.

#### F06 — SM06 contracts need completion before construction

**Sources:** all reviews; existing readiness obligations.

[SM06 DoR](../v1/work-packets/V1/V1-SM06.md#dor-checklist) already names unresolved board/filter scope and `ManualReady` revision identity, idempotency key, and effective-current query. Behavior requires an exact accepted snapshot. Changed content cannot inherit readiness.

**Owner / phase:** Lane A owns Phase 1 scope preparation; Lane B owns the mechanism before its Phase 2 work order.

**Next action and trigger:** resolve these questions at SM06 readiness, after its existing entry prerequisites. Assess whether a board-query or UX specification is necessary under D-30. Do not mandate new documents solely because a proposed filename is absent.

**Required proof:** deterministic reads and filters, explicit revision binding, authorization/refusal behavior, replay behavior, and acceptance cases. The outcome stays a LinkedIn target-level `ManualReady` event. It does not create article `Published` state.

#### F07 — Publication timing and recovery remain future work

**Sources:** all reviews; already routed by [B-078 Child 4](B-078-documentation-audit-follow-through.md).

[Publication Spec](../specs/SPECS-PUBLICATION.md) lines 58–64 does not establish an end-to-end duplicate-prevention contract. A local provider-event uniqueness constraint does not prove recovery when the provider succeeds before the local result is saved.

A five-minute backoff and five-minute polling cadence do not guarantee immediate dispatch. Failure at 12:00:01 becomes eligible at 12:05:01. The next tick can be 12:10. Outages and execution add further delay; ten minutes is not a guaranteed upper bound.

**Owner / phase:** Lane A, Phase 1 publication readiness; Lane B implementation only in separately authorized future V2 automated-publication scope. B-078's historical S4 label is not a current V1 allocation.

**Next action and trigger:** consume the existing Child 4 questions when that scope is selected. Specify concurrency, crash recovery, outbound idempotency, eventless targets, state promotion, credential isolation, and privileged access.

**Required proof:** observable failure/recovery scenarios and measurable timing bounds. `FOR UPDATE SKIP LOCKED`, leases, and outboxes are candidate mechanisms, not accepted requirements. B-078's routing acceptance is not implementation proof.

#### F08 — Hosted migration and CI use existing Phase 3 receipts

**Sources:** Lane A and Lane C; corrected and routed.

Local `0002` replay does not prove hosted Supabase behavior. The Publication Spec still marks `pg_cron` and `pg_net` as not enabled. The supplied claim that those extensions were locally verified is unsupported.

The primary CI job key is `verify`; its display name is `Typecheck · Lint · Test`. The accepted target name is `verify`. The supplied `check` key and alternative title are incorrect. An existing compatibility job does not prove the required-check transition complete.

**Owner / phase:** [SM06 Phase 3 receipts](../v1/work-packets/V1/V1-SM06.md#phase-3-receipts--ci-delivery-assurance-and-hosted-migration-d-381-2026-10-02). Lane A routes; Lane C owns workflows; Lane A/Judge owns settings evidence.

**Next action and trigger:** retain SM06-P3-01 through 06. Hosted migration follows accepted SM05 DoD and a separate accepted baseline-promotion PR. Pair the primary job rename with the settings act after compatibility proof and live-ruleset evidence. Full history enables both `source-sweep` and `terminal-return`.

**Required proof:** each receipt's own positive, negative, or hosted evidence, independently verified. Every construction row needs its own authorization. These future receipts do not become new SM05 execution prerequisites.

#### F09 — Encyclopedia and held features need precise labels

**Sources:** Lane A and Lane C; corrected.

The [Encyclopedia ledger](../ENCYCLOPEDIA-SYNC.md) identifies a **Claude Artifact**, not Confluence. Entries 01/05 have accepted comparisons under D-256/D-259. Entry 06 has a later D-288 comparison. Entry 04 remains deferred to SM06.

**Owner / phase:** Lane A with the Judge, Phase 1 SM06 readiness. Obtain the Entry 04 comparison or the explicitly permitted Judge disposition at its return trigger. Record source revision, hosted revision, differences, and disposition. This consolidation makes no fresh hosted-parity claim.

Trend-scoring and exception gaps remain in their existing held scopes. `CONFIG_LOG.md` §3 records missing `engagement_metrics` support and no engine consuming `TREND_WEIGHTS`. Exceptions distinguish FR-06 return/escalation, FR-11 Line 3, and FR-12 absence behavior. S7 is a configuration boundary, not a new V1 sprint. Reassess these items only when their governing scope is selected; do not create a new V1 blocker here.

### Claims removed from the supplied analysis

| Supplied claim | Corrected reading and evidence |
|---|---|
| SM05 implements T1–T4 plus EG-05–EG-07 while T5 is held | [SM05](../v1/work-packets/V1/V1-SM05.md) records `business:T1`–`business:T5` evidence. It does not implement `transition:T*`. |
| M-POC is a separate public intake product using `request_briefs` | [FN-POC](../fn-specs/FN-POC-ENGAGEMENT-01-13.md) §1 describes a way of working through the unchanged product pipeline, with client/internal folder separation. The separate-product claim is unsupported. |
| `FN-BOARD-06-07-08`, `FN-EXCEPTIONS-12-03-04`, and `FN-POC-BRIEF` are current files | Actual files are `FN-AUDIT-VISIBILITY-07-08.md`, `FN-EXCEPTIONS-06-11-12.md`, and `FN-POC-ENGAGEMENT-01-13.md`. |
| Jev receipt success proves product behavior | [Verification Apparatus](../specs/SPECS-VERIFICATION-APPARATUS.md) separates evidence evaluation from actual product execution. Metadata and structural checks alone prove no runtime outcome. |
| Every absent proposed spec is a broken link or an immediate build blocker | Evaluate each missing artifact against D-30, its owner, and its selected scope. Planned absence is not link failure. |
| Prior authority, SM05-reference, and UX-directory defects are still open | D-438 corrected those items. Preserve their history without reopening them. |

### Three improvements for Lane A to assess

| Proposal | Bounded change | Follow-up phase and acceptance proof |
|---|---|---|
| 1. Current-state navigation | Add a short pointer-only reading guide. Link authority, live lane state, current packets, configuration, and held work. Route EV corrections through F01. | Phase 1 after scope acceptance. A new reader can find the owner of each fact without reconciling historical prose. Mutable values remain with their owners. |
| 2. Architecture and terminology | Define business stages, transitions, evidence records, publication events, product Lines, and development lanes. Explain section-origin marks such as `[V1]`. | Phase 1, with F06/F07 at their existing readiness triggers. Examples match current scope. Missing contracts gain decision and acceptance criteria before implementation. |
| 3. Operational evidence | Define failure/recovery cases and evidence limits. Add the review-bundle manifest from F04. Link runtime-metadata follow-up through F05. | Phase 1 specification and packaging; later Phase 2/3 proof under existing work orders. Each claim states environment, revision, result, limits, and next owner. |

### Readiness challenge

| Question | Assessment |
|---|---|
| Can Lane A understand this without the earlier chat? | Yes. Scope, source treatment, corrections, owners, triggers, and proof are included. |
| Do three attached reviews provide three independent confirmations? | No. Lane B repeats the prior audit; Lane A synthesizes it with Lane C. |
| Does Active Lane A imply permission for all proposed work? | No. Each work unit still needs its governing authorization. B-136's hold remains active. |
| Is this a reviewed implementation packet? | No. This is a consolidated finding with a raiser's self-review. Lane A disposition and any required independent review remain outstanding. |
| Has Lane A received or accepted the handoff? | No receipt is claimed. Only Lane A can complete its answer field. |
| Can accepted routing close all underlying gaps? | No. Each owning record retains its own completion and return conditions. |

## What you did instead

### Layer 4 — Evidence and verification limits

Read the supplied reviews as source material. Used a read-only Graphify query and direct repository comparisons. Preserved the frozen sources and existing handoff records. Created this one consolidation entry. Applied no product, workflow, configuration, graph, or EV changes.

The prior audit checked 120 inline internal Markdown destinations outside code, including local paths and heading anchors. It found zero failures. That scope excludes a universal audit of plain-text references, HTML links, generated links, external links, and omitted bundle artifacts.

The prior audit ran the package's underlying command, `node scripts/check-consistency.mjs`, and observed 19/19 passes at `5c47793`. `bun run check` failed in that environment with `CouldntReadCurrentDirectory`. These are baseline observations, not evidence that the new handoff has been acknowledged or all prose is consistent.

**Post-draft validation, 2026-10-18:**

| Validation | Observed result | Limit or next action |
|---|---|---|
| Handoff links | All 18 internal destinations resolve, including heading anchors | The external STE reference is outside this local-path test. |
| Template and text | Required sections and audit fields present; `Open`; no Resolution; Lane A answer empty | Only Lane A can acknowledge. The raiser cannot supply its receipt. |
| Bundle counts and input hashes | Recomputed; match F04 and the manifest below | Counts describe the observed baseline, before this new entry. |
| `bun run check` | Failed before execution: `CouldntReadCurrentDirectory` | No Bun pass is claimed. |
| `node scripts/check-consistency.mjs` | Completed: 18 pass, 1 fail, 0 skips | Sole failure: `handoff-response`, because B-158 has no Lane A acknowledgement. |
| History and text integrity | `terminal-return` and `text-integrity` passed | No existing terminal record was changed. |

Run log: `C:/CoWork/outputs/gov_doscs_review/B-158-consistency-20261018.log`. The suite is **not green**. Lane A's receipt is the remaining channel action. These checks do not approve the proposed source changes or prove runtime behavior.

#### Input manifest

The names below are evidence labels, not authority claims. All files were read on 2026-10-18.

| Label | Absolute source path | SHA-256 |
|---|---|---|
| A | `C:/CoWork/outputs/gov_doscs_review/lane-a-analysis-docs_20261017_OCT.txt` | `0ed16cfe010e1b7e454520f77e483d2e47d2806b90864080ff21ab4941c669fc` |
| B | `C:/CoWork/outputs/gov_doscs_review/lane-b-analysis-docs_20261017_OCT.txt` | `31de1eacd413b303e38dd99bf3e6631d11dbff8a27807fb0916608fdd813ff74` |
| C | `C:/CoWork/outputs/gov_doscs_review/lane-c-analysis-docs_20261017_OCT.txt` | `1415b4d10f599c550f0cf538bb388810c87dadedfb63a4387e1100a2427ba398` |
| XML | `C:/git/github_evidence/docs_context_for_claude.txt` | `2eff45ee15d6b4e8cfda04a79186de697c2f00b2d8a45ccaf4287413a8272bb8` |

Prior scan receipt: `C:/CoWork/outputs/docs-review-2026-10-18/verified-links.json`. Host-local inputs remain retrievable on this workstation. Their hashes identify the reviewed bytes; this entry does not claim remote custody.

Writing approach: short sentences, active voice, one action per procedural step, and defined technical terms. These follow [ASD-STE100 principles](https://www.asd-ste100.org/STE_faq.html). The executive/detail layers serve this handoff. Full controlled-dictionary compliance has not been certified.

### Verdicts and follow-up phases

| Subject | Verdict | Condition and follow-up phase |
|---|---|---|
| Submit this consolidation for Lane A review | Approve | Phase 1: Lane A records receipt and row dispositions. This is a readiness opinion, not a receiver acknowledgement. |
| Use it to prepare bounded follow-up packets | Approve-with-conditions | Phase 1: confirm owners, source pins, exact scope, triggers, and proof. Preserve B-136's separate transaction. |
| Apply EV, code, CI, hosted, or future publication changes | Defer | Existing Phase 1/2/3 or future-version owners act only after their governing release and entry conditions. |
| Treat repeated reviews, unsupported claims, or review approval as execution authority | Reject | Phase 1: use the corrected evidence and transaction boundaries in this record. |
