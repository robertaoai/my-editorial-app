# B-156 — Setup Traceability Audit and Progressive Baseline Plan

- **Raised:** 2026-10-11 by Lane B
- **Kind:** finding
- **Phase:** 1
- **Blocks:** nothing, reporting only
- **Status:** Open
- **Lane A:** **Acknowledged 2026-10-11, receipt only.** Read in full as Lane B's uncommitted file on HEAD `1640ff7` (SHA-256 `751b4be7609e06d8e2c3e68c81d02a844a82fdb85958324ab65d2ca1d788f02f`, before this line). Lane A withdraws its blanket curated-JSON exclusion (graph-fragments README §1). F1–F6 are not answered by this receipt.
- **Verified-By:** — not yet dispositioned; raised by Lane B
- **Evidence:** Judge's supplied Lane A/B/C worklogs and scope clarification; frozen tree at 1640ff7bc1b7d1e70ab6a421ced8a054dafda993; Build Spec §1; D-242, D-271, D-424 and D-433; graph-fragments README §1; SPECS-VERIFICATION-APPARATUS §18; B-136's D-434 revision-2 review; the inventory method and review requirements below
- **Verified-At-Commit:** 1640ff7bc1b7d1e70ab6a421ced8a054dafda993

## What happened

The Judge requested a retrospective audit of SETUP-SPIKE-000 implementation and a plan for progressive
comparisons between governed intent, requirements, specifications, implementation and verification.
The Judge distinguishes project source from the product codebase delivered under the V1 sequence.
Existing setup artifacts do not themselves earn SM05 completion credit (Build Spec §1, D-185/D-232).

Earlier chat reviews identified these errors and accepted their correction:

- The existence of source files was treated as an answer to a missing traceability concern.
- Ripwire planning was treated as adoption, although the Judge requested a proposed instrument plan.
- The audit was narrowed to file-path mentions, which do not prove semantic agreement.
- D-434 revision 2 was reported as awaiting Lane B review. That review already exists at 1640ff7.
- Read-only searches were deferred together with installation, trials and mutation.

Lane A's latest response raised P1-P3: the missing durable entry, executable files under docs/, and
tracking vocabulary. This Lane B entry supplies the record Lane A can answer. It does not write Lane A's
answer or record an independent acceptance of work not yet done.

### Parent scope and existing records

One project contains distinct governance/docs, codebase and knowledgebase use cases. A shared AIG
tooling family does not combine their requirements or acceptance conditions (D-271).

- **Setup audit:** this entry covers applicable SETUP-SPIKE-000/project artifacts and their traceability.
  Classify candidates by purpose and authority; neither their directory nor their extension decides scope.
- **Product:** B-127 and the SM05 packet/Jev manifest retain product DoR-to-DoD and scenario ownership.
  Reference them rather than copying their requirements. Define the interface for future product baselines
  here, without auditing an unbuilt SM05 increment or transferring setup evidence into product acceptance.
- **SV-002/P15:** B-136 remains its docket. D-434 revision 2 is accepted for Judge assessment and issuance;
  no further review of unchanged accepted text is required. This finding adds no P15 or SM05 gate.
- **Census:** B-153/B-154 retain their accepted handoff-obligation census. Do not repeat it as a file audit.
- **Knowledge retrieval:** B-154's 2026-10-06 retrieval packet proposes AIG-07. Its allocation is not approved;
  D-424 leaves refinement for later. Cite that proposal, but do not deliver or refine retrieval here.

### Corrections to the supplied P1-P3 proposal

**P1:** B-156 was unused in the current tree and local history when this entry was prepared. Lane B raises
this entry. Lane A can acknowledge and answer it under the handoff SOP. Preparing a draft was not barred
by the lack of an entry; a durable answer and canonical findings record did need a source entry.

**P2:** the six JavaScript/module files under docs/ are audit candidates. However, a blanket exclusion of
curated JSON as generated projection output is wrong. The graph-fragments README §1 identifies those
files as hand-authored source inputs that extraction cannot recreate. Assess their source, identity,
meaning, preservation and verification obligations. They are not Product requirements in their own right.

**P3:** distinguish Status (Open or Answered) from Resolution (Applied, Verified, Deferred, Withdrawn or
Superseded, as applicable). Answered is a reply, not proof of correction. Verified requires an independent
actor and evidence at an existing commit. Not every finding must follow one linear route through all states.
Child outcomes go in the body; the header describes the whole entry and remains Open until Lane A answers.

## What you need

Lane A drafts one shared audit and repair packet. Read-only inspection and drafting proceed under the
carried-forward scope. No new drafting approval is requested by this entry.

### 1. Freeze the inventory and measurement method

Use immutable source revision **1640ff7bc1b7d1e70ab6a421ced8a054dafda993**. The following counts are dated
observations at that revision, not live requirements or permanent totals:

| Candidate group | Observation and treatment |
|---|---|
| Tracked paths outside docs/ | 73; classify implementation, control, configuration, metadata, evidence or exclusion with a reason |
| Executable source under docs/graph-fragments/ | 6; include in the candidate audit: merge6.js, merge7.js, missing.js, prune-stale-symbols.js, prune-stale-symbols.test.mjs, restore-docs-layer.js |
| Combined groups above | 79 candidates; this is not a completeness or gap claim |
| Curated JSON in docs/graph-fragments/ | 142; assess as source/control-data candidates, not blanket-excluded generated output |
| Other JSON under docs/ | 1: docs/v1/work-packets/V1/receipts/V1-SM05-jev-readiness.json; assess as retained evidence with its original limits |
| Log and text evidence under docs/ | 3; classify the paths listed below individually |
| Governing Markdown | Context and evidence sources for the audit; absence from the 79-path group is not exclusion from source reading |

The three log/text paths are:

- docs/handoff/artifacts/B-014/observation-2026-10-03.log
- docs/handoff/artifacts/B-115/lane-c-b154-review-with-b115-consumer-read-07d931e.txt
- docs/handoff/artifacts/B-131/System_Encyclopedia_V15.txt

Reproduce the candidate lists with `git ls-tree -r --name-only <frozen revision>`, using explicit path
and extension rules. Retain the full lists and exclusions. Do not infer scope from counts alone.

At the frozen revision, literal full-path searches in tracked docs/ found mentions for 67 of the original
73 paths. Six lacked a mention: .onlyaiapp, app/api/health/route.ts, app/globals.css, app/layout.tsx,
lib/supabase/client.ts and supabase/.gitignore. Two mentioned paths had hits only in handoffs:
scripts/checks/terminal-return.mjs and supabase/tests/database/s1_transition_enforcement.test.sql.

The reproducible search is `git grep -F -l -e <literal path> <frozen revision> -- docs` for each candidate.
Classify handoff-only hits separately. Use the frozen revision, since this entry itself adds mentions and
would contaminate a fresh mention count at its own commit. A mention is not an intent or agreement finding.

Review order: six unmentioned paths, two handoff-only paths, six newly included executables, then all
remaining applicable paths and source/control-data groups. Keep a reconciliation showing that no
candidate was silently lost. Multiple obligations may map to a file; an obligation may span several files.

### 2. Reuse existing sources and state their limits

Read the phase manifest, config-coupling declarations, lane map, existing packet evidence and Jev
manifest before proposing new records. An existence check does not prove inventory completeness;
ownership does not prove authorization; a hash does not prove semantic agreement.

Jev `pins` hashes canonical behaviour rows in a supplied manifest (scripts/jev/lib.mjs). Reuse it where
applicable. It is not an existing generic setup-artifact baseline. Specify additional needs before any
implementation; do not create a second requirements register or duplicate scenario corpus.

### 3. Produce the six packet outputs

1. **Scope inventory:** purpose, owner, governing source, exclusions and project/product relationship.
2. **Traceability assessment:** intent/decision, requirement/specification, implementation revision,
   verification evidence and semantic review. Separate supported agreement, difference, missing support,
   unknown and disputed findings; map the labels to existing terms without conflating truth layers,
   drift classes or handoff dispositions.
3. **Repair drafts:** exact section-level proposals at the owning tiers. If original intent is absent,
   label inferred intent as proposed. Do not present a document written now as historical authorization.
4. **Instrument plan:** Graphify is operative as searchable projection under D-425/D-426; new named uses
   remain proposed. Ripwire is not adopted under D-433; its requested proposed plan does not adopt it.
   Define tasks, expected results, language/SQL limits, host availability, configuration, evidence access,
   negative controls and cleanup. Identify the precise later authority required for execution.
5. **Baseline contract:** distinguish normative intent, implemented revision, deployed instance and
   searchable projection (§18.1). Define a retrospective setup snapshot and later change comparisons.
   Define the future product interface by reference to existing scenarios and verification contracts.
   Do not invent historical windows, assume zero reusable files, or compare graph-node and symbol counts
   as an acceptance score. Report missing, unknown and disputed evidence without turning it into passes.
6. **Impact and review packet:** authority, prerequisites, affected artifacts, pass/refusal conditions,
   sync cost and stop point for each option. Name unaffected tiers and any needed D-54 propagation.

### 4. Findings tracking and completion

The originating entry is the canonical backlog record (D-242). Supporting inventory and evidence files
may be linked; they do not become another register. Add rows here rather than inventing a second backlog.

| Finding | Owner answering | Status | Resolution | Required evidence |
|---|---|---|---|---|
| F1 — Inventory and scope reconciliation | Lane A | Open | None | Frozen lists, applicable/excluded decisions and complete reconciliation |
| F2 — Intent-to-implementation audit | Lane A | Open | None | Source references, implementation revision, evidence and review limits |
| F3 — Section-level repairs | Lane A | Open | None | Proposed patches, owning tiers and inferred-intent labels |
| F4 — Instrument plans | Lane A | Open | None | Existing/proposed boundary, host matrix, expected results, refusal and cleanup rules |
| F5 — Progressive baseline contract | Lane A | Open | None | Revision-pinned comparison and interface to existing product verification |
| F6 — Independent review and option impacts | Lane A | Open | None | Reviewer-accessible packet, findings outcomes and complete execution options |

Lane A records its answer and evidence revision. Lane B independently reviews the packet. Lane C supplies
scoped workflow/host facts and review; no unchanged capability needs a new trial merely for wording.
Each independent outcome names its actor and examined revision. Retained future work needs an owner,
destination and return condition. Acknowledgement, planning acceptance, application and verification
remain distinct. No one self-verifies an answer or closes the whole entry from a subset of child outcomes.

This unit is complete when the six planning outputs are available, the inventory is reconciled,
independent review outcomes are recorded, and remaining work has an explicit disposition. Completion
does not mean the proposed repairs or tools have been applied, or any Product behaviour has passed.

### Stop point and exclusions

Return the draft packet for review before execution. Existing read-only source searches and drafting
remain permitted. This entry grants no installation, new trial, mutating graph command, prepare,
publication, implementation, repository split, mandatory TLA+ gate, acceptance obligation, DoD checkoff,
SM05 unblock, lane activation, Gate 2 closure, fetch or push. D-434's separate Judge choices are unchanged.

## What you did instead

Lane B consolidated the supplied reviews, checked the frozen tree and existing sources, and raised this
finding in its own series. No Lane A answer, governed source, implementation, fragment or live graph is
changed. The source graph was current at 93aa02f with stale false; a handoff-only record needs no graph
sync. A green consistency result will not be presented as proof that the traceability audit is complete.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | Consolidated scope, source inventory correction and status/resolution distinction | Phase 1: planning review recorded; no implementation acceptance |
| Approve-with-conditions | Lane A audit and repair packet | Phase 1: answer F1-F6 and return the revision-pinned packet for independent review |
| Defer | Governed application, new trials, provisioning and acceptance changes | Later bounded acts after complete impact analysis; no new gate created here |
| Reject | Blanket exclusion of curated JSON; mentions as semantic agreement; setup credit as Product delivery; self-verification | Phase 1: preserve the stated evidence and scope boundaries |
