# B-156 — Setup Traceability Audit and Progressive Baseline Plan

- **Raised:** 2026-10-11 by Lane B
- **Kind:** finding
- **Phase:** 1
- **Blocks:** nothing, reporting only
- **Status:** Open
- **Lane A:** **Acknowledged 2026-10-11, receipt only.** Read in full as Lane B's uncommitted file on HEAD `1640ff7` (SHA-256 `751b4be7609e06d8e2c3e68c81d02a844a82fdb85958324ab65d2ca1d788f02f`, before this line). Lane A withdraws its blanket curated-JSON exclusion (graph-fragments README §1). F1–F6 are not answered by this receipt. **F1 answered 2026-10-11** in "Lane A — F1 answer" below (evidence `bab52d0`); **F1-R1–R4 answered 2026-10-11** in "Lane A — F1 revision 2" below (evidence `a77b321`). F2–F6 remain open. The entry stays Open.
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
| F1 — Inventory and scope reconciliation | Lane A | Answered (Lane A, 2026-10-11; revision 2 answers Lane B F1-R1–R4; awaits Lane B delta review) | None | Frozen lists, applicable/excluded decisions and complete reconciliation |
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

## Lane A — F1 answer: inventory and scope reconciliation, 2026-10-11

**Authority:** the Judge, in chat, 2026-10-11: "Lane A starts the B-156 work; Phase 1. Apply C1–C4 and add the Q2
note in the F1 answer." Lane A is `Active`. This answer is read-only measurement and classification. It changes no
governed source, fragment or graph. Read at `bab52d0`; measured at frozen revision `1640ff7`.

**Return scope (C1).** This answer returns F1 alone, for Lane B review. F2–F5 start from the inventory that Lane B
accepts. F6 follows F2–F5.

### F1.1 Evidence (C3)

The evidence is in `docs/handoff/artifacts/B-156/`, committed at `bab52d0`:

| File | SHA-256 | Content |
|---|---|---|
| `F1-inventory.mjs` | `79fe687cb30c5e27ba0b3e6797d7250f9c6dfa6bb4ae623fd39307646cf81fcc` | The reproducing script. It reads git objects only and uses no shell. |
| `F1-candidates-1640ff7.tsv` | `074982203b5d206ba942a306d0be883183760df37e5e028f21ea9f1b591b5255` | One row for each candidate (225 rows) |
| `F1-summary-1640ff7.json` | `bda79ca8f8dd85d3d9bbf480b47e96a88469d113f1cce6de1432952159527107` | Group counts and the reconciliation result |

Reproduce: `node docs/handoff/artifacts/B-156/F1-inventory.mjs <repo> 1640ff7 <out dir>`. The script uses
`git ls-tree -r --name-only` for the lists and `git grep -F -l` over `docs/` Markdown for mentions. It uses the
`classify` export of `scripts/checks/lane-boundary.mjs` for the lane, and backticked paths in
`docs/v1/V1-PHASE-CLOSURE.md` for phase-manifest membership.

### F1.2 Reconciliation

| Group | Count at `1640ff7` | Included | Excluded |
|---|---:|---:|---:|
| G1 — tracked paths outside `docs/` | 73 | 71 | 2 |
| G2 — executables in `docs/graph-fragments/` | 6 | 6 | 0 |
| G3 — curated JSON in `docs/graph-fragments/` | 142 | 142 | 0 |
| G4 — other JSON under `docs/` (Jev readiness receipt) | 1 | 1 | 0 |
| G5 — log and text under `docs/` | 3 | 3 | 0 |
| G6 — other non-Markdown under `docs/` | 0 | 0 | 0 |
| **Total** | **225** | **223** | **2** |

Each candidate occurs in exactly one row. No candidate is lost (`reconciled: true`). Governing Markdown is not a
candidate group; it is the source that F2 reads.

**Exclusions, with reasons.** These two paths stay in the inventory, but they are excluded from the semantic audit:

- `bun.lockb` — a derived lockfile. F2 audits it through `package.json` and the `D-86` provisioning path.
- `README.md` — template boilerplate, not authoritative (`AGENTS.md`, `D5`). It is recorded as metadata only.

**Notes on included paths:**

- `supabase/migrations/0001_init.sql` is frozen authority. F2 audits agreement only. F3 proposes no repair to it.
- `.onlyaiapp` is a platform initialization marker. F1 found no governing intent for it.

### F1.3 Classification

Each class is assigned by purpose. The directory is only the first hint. The rules are in `classOf` in the script,
so a reviewer can challenge one rule, not 225 rows.

| Use case | Count | Classes |
|---|---:|---|
| Knowledgebase | 150 | 142 curated source data, 6 graph-fragment executables (one is a test), the guarded rebuild, the graphify agent workflow |
| Governance/docs | 38 | 24 controls (checks, gate, hook), 4 tooling tests, 4 agent instructions, 3 channel templates or specs, 3 retained evidence |
| Product codebase | 18 | 8 application implementation, 2 application configuration, 2 schema, 4 product tests, 2 Supabase configuration |
| Project setup | 14 | Root configuration and lockfile, `.env.example`, agent settings (`.claude/settings.json`, `.codex/hooks.json`), the CI workflow, `.onlyaiapp`, `README.md` |
| Product interface | 5 | The Jev manifest, 3 Jev tooling files, the SM05 readiness receipt |

Product-codebase rows are setup artifacts on a product surface. They earn no SM05 credit. F5 defines how SM05
baselines refer to them.

### F1.4 Findings from F1

1. **F1-a — The lane map has three gaps.** `scripts/checks/lane-boundary.mjs` maps no lane for `middleware.ts`
   (application implementation at the repository root), `.env.example` or `.onlyaiapp`. The three
   `docs/handoff/artifacts/` paths are unmapped by design (`D-90`), so they are not gaps. A change to the lane map is
   a Lane A source change, so F3 drafts it. F1 does not apply it.
2. **F1-b — A path mention cannot measure curated JSON.** 124 of the 142 fragments have no path mention, and 7 have
   only handoff mentions. The graph-fragments README §1 identifies fragments by directory, not by name. F2 assesses
   G3 through the README and the merge scripts, not by mentions.
3. **F1-c — One graph-fragment executable has no mention.** `docs/graph-fragments/merge6.js` has no mention in
   `docs/`. `merge7.js` has one. It stays in review order 3.
4. **F1-d — There are nine handoff-only mentions in total.** Two are in G1: `scripts/checks/terminal-return.mjs` and
   `supabase/tests/database/s1_transition_enforcement.test.sql`. Seven are in G3.
5. **F1-e — Mention totals.** Across all 225 candidates: 85 have a governing-doc mention, 9 have only handoff
   mentions and 131 have no mention. G1 repeats Lane B's measurement: 67 mentioned (65 governing, 2 handoff-only)
   and 6 not mentioned. A mention is not an agreement finding.

### F1.5 Conditions applied

- **C1:** F1 returns alone, as stated above.
- **C2 — self-assessment.** 201 of the 225 candidates are on Lane A surfaces. Lane A's F1 classes and any later
  "agrees" claim on those paths are **proposed** until Lane B reviews them. Lane A does not verify its own surface.
- **C3:** the evidence is in the repository, not only in `C:/CoWork/outputs`.
- **C4:** F1 changes no section that `D-434` changes. F3 drafts will name a revision and will flag any overlap with
  `D-434`.
- **Q2 — evidence access.** The header's `Evidence:` field cites "Judge's supplied Lane A/B/C worklogs". They are
  chat-supplied and not retained in the repository. A reviewer can verify the measurements in F1.1, not those
  worklogs. Lane A does not edit Lane B's header line.
- **Q3:** `closure-readiness` lists B-156 as one unlisted live entry. The next tracker re-derivation adds its row,
  before any Gate 2 claim. The owner is Lane A.

### F1.6 Next

Lane B reviews F1 at the commit that records this answer. When Lane B accepts the inventory or corrects it, Lane A
starts F2 in this order: the 6 unmentioned paths, the 2 G1 handoff-only paths, the 6 G2 executables, the remaining
included G1 paths, and then G3–G5.

**Drift:** governed intent is synced at `93aa02f`. This answer and its evidence are handoff-only, so no graph sync
is needed.

## Lane B — F1 independent review, 2026-10-11

**Examined revision:** `3d8077b99b256b2f550f0decae57121bfcbe7141`. Lane B reviewed F1 only. Lane A remains
the answering actor. This review changes neither Lane A's answer nor its evidence. The whole entry stays Open;
F2–F6 have no independent disposition from this review.

### What happened

Lane B ran the retained inventory script against frozen revision `1640ff7bc1b7d1e70ab6a421ced8a054dafda993`,
writing the reproduced files outside the repository. The TSV and JSON hashes match F1.1 exactly:

- TSV: `074982203b5d206ba942a306d0be883183760df37e5e028f21ea9f1b591b5255`.
- JSON: `bda79ca8f8dd85d3d9bbf480b47e96a88469d113f1cce6de1432952159527107`.

The 225 candidate rows reconcile to G1–G5: 73 + 6 + 142 + 1 + 3. G6 is empty. The retained script hash also
matches F1.1. The lane-map file has no changes between the frozen revision and the examined revision. This
supports this run's numerical reproduction; it does not validate every classification or the script's handling
of future failures. In particular, 223 included / 2 excluded reproduces the script's rule, not an accepted scope.

The local upstream tracking ref matches `3d8077b`. The range `e1077bc..3d8077b` contains nine commits and touches
handoff paths only. Lane A reports the push succeeded. Lane B performed no fetch or push and makes no fresh
remote-state claim. `bab52d0` contains three evidence files; `3d8077b` is the one-file answer commit. Do not
describe the evidence commit as one path.

### What is needed: four bounded corrections before F2

| ID | Observed gap | Required correction by Lane A | Acceptance evidence |
|---|---|---|---|
| F1-R1 | `bun.lockb` is excluded because it is derived, with `package.json` offered as its substitute. D-64 / G59 gives the lockfile its own dependency-reproducibility obligation. The package manifest does not pin the same resolved dependency set. | Include the lockfile as a reproducibility control, cite D-64 / G59 and retain its frozen identity. Do not run an install for this correction. With only this exclusion change, the audit has 224 included paths and one excluded README; the candidate universe stays 225. | Revised row and totals include the lockfile. The row distinguishes historical D-64 evidence from any claim about present dependency resolution. |
| F1-R2 | `classOf` assigns use cases mainly from paths. All graph fragments and their tooling become `knowledgebase`; application-facing setup becomes `product codebase`. A non-handoff Markdown hit is labelled `governing-doc`, and a backticked hit anywhere in the phase document is labelled manifest membership. These measurements do not establish those semantic claims. | Separate artifact role, proposed use case and governing-source status. Identify the operative Graphify governance/docs projection without claiming formal knowledgebase retrieval. Identify existing product-facing setup source without product-delivery credit. Rename literal-hit fields to their measured meaning, or derive manifest membership from the actual §5A rows. Keep unknown authority explicit; F2 performs the semantic assessment. | Revised schema and summary preserve all paths, state which classifications remain proposed, and distinguish mentions from authority and §5A membership. No new retrieval scope or SM05 credit is implied. |
| F1-R3 | The script imports `scripts/checks/lane-boundary.mjs` from the working tree, not the frozen Git revision. Its claim to read Git objects only is therefore too broad. | Pin the classifier to the frozen blob, or verify the working-tree classifier against the frozen blob before importing and refuse a mismatch. Record the classifier identity and the reproducing-script identity. Make the output revision binding explicit. | Evidence shows the classifier used is the frozen classifier. A mismatch must stop measurement rather than silently change ownership results. The original run remains retained as history; its classifier was unchanged. |
| F1-R4 | `mentions()` catches every failed Git command and records an empty result. A Git error can therefore become a false `no mention` finding while reconciliation still reports true. | Treat only Git's no-match result as no match. Retain and report other errors, and stop without claiming a complete measurement. | The corrected method distinguishes a successful search, a no-match search and an execution error. An error cannot produce a successful inventory summary. |

These are corrections to the authorized F1 packet, not requests for a new scope act. Preserve the original
artifacts. Return one revised evidence set with full hashes, a change summary and a reconciliation. Do not change
the frozen input revision merely to obtain different mention totals. No install, new tool trial, lane-map repair,
governed edit, graph mutation or push is requested.

The three unmatched root paths are confirmed as **classifier gaps**, not yet proof that governed ownership is
absent. F2 reads the ownership sources; F3 may draft a justified map repair. Likewise, `no mention` means no
literal path hit under the measured rule; it does not mean no governing intent exists. The frozen migration
remains read-only. The existing README metadata exclusion is accepted within its stated limit.

### What Lane B did instead and what happens next

Lane B accepted the reproduced candidate union and retained hashes as measurement evidence. Lane B did not
accept F1's exclusions and semantic labels as the final C1 baseline. F1 remains Answered, with the four
corrections above awaiting Lane A; it is not independently Verified. Lane A returns the corrected F1 packet;
Lane B reviews that delta. F2 starts once the corrected inventory is accepted under C1. Existing read-only
source review remains permitted. F2–F6, the separate P15 / D-434 decisions and product construction retain
their existing boundaries.

The source of the repeated late findings is treating a path rule or successful reproduction as proof of
authority, purpose or complete failure handling. Before returning the corrected packet, apply the same checks
to every row: frozen inputs, measured label, governing-source status, inclusion reason and failure outcome.
Use this entry as the single findings record. Do not create a second backlog.

**Drift:** this review touches the handoff only. It requires no graph sync. Run the full consistency check
before committing the review and retain its log. Graph currency and a green check do not verify F1's semantics.

| Verdict | Item | Condition / follow-up phase |
|---|---|---|
| Approve | Reproduced 225-path candidate union, matching retained hashes and the stated README metadata exclusion | Phase 1: F1 measurement evidence only; no semantic acceptance |
| Approve-with-conditions | Corrected F1 inventory as the C1 baseline | Phase 1: Lane A answers F1-R1–R4; Lane B reviews the revised evidence before F2 |
| Defer | F2–F6 completion, lane-map repairs, tracker re-derivation and any governed application | Their existing order and authority; this review adds no gate or execution act |
| Reject | Package manifest as lockfile proof; mentions as authority; inferred retrieval or product delivery; search errors counted as no matches | Phase 1: apply the four bounded corrections above |

## Lane A — F1 revision 2: answers to F1-R1–R4, 2026-10-11

**Read at:** `a77b321` (Lane B review `085f4d3` plus the revision-2 evidence commit). **Measured at:** frozen
revision `1640ff7bc1b7d1e70ab6a421ced8a054dafda993`, unchanged. **Authority:** the existing B-156 drafting scope;
Lane B states that no new Judge decision is needed. Read-only. No install, lane-map repair, governed edit, graph
mutation or push.

Lane A accepts all four corrections. Lane B's correction to F1.1 is also accepted: `bab52d0` holds three evidence
files. The one-path commit is `3d8077b`, the answer.

### R2.1 Evidence

Revision-1 files stay unchanged as history (`bab52d0`). Revision 2 is in `docs/handoff/artifacts/B-156/`,
committed at `a77b321`. The hashes are of the committed bytes:

| File | SHA-256 |
|---|---|
| `F1-inventory-r2.mjs` | `d7873e0920d5e5f3b9cae7a1d21798b57d343ca6dff2977ee13aa22c57ee4397` |
| `F1-candidates-1640ff7-r2.tsv` | `dcb86641ef20f5a569a664dbb6493dd9c2db2dbb7a42a17689e2513b4e017769` |
| `F1-summary-1640ff7-r2.json` | `fc71c0a1405b5e88450dbaee8137e227882ff8aa3842dc7068013f90892da287` |

Reproduce: `node docs/handoff/artifacts/B-156/F1-inventory-r2.mjs <repo> 1640ff7 <out dir>`.

### R2.2 Answers

| ID | Correction applied | Evidence in revision 2 |
|---|---|---|
| F1-R1 | `bun.lockb` is included as a **reproducibility control**. Its governing source is `D-64` / `G59`, recorded as historical evidence (bun 1.1.30, `--frozen-lockfile` exit 0). No claim is made about present dependency resolution. No install was run. Every row now carries its frozen Git blob id, so the lockfile identity is retained. | Row `bun.lockb`: `included`; summary `included: 224`, `excluded: 1` (`README.md`); `candidates: 225` |
| F1-R2 | The fields are separated. **Measured:** `lane`, `literalHitState`, `literalHitsOutsideHandoff`, `literalHitsHandoff`, `phaseManifestRow`, `blob`. **Proposed:** `proposedRole`, `proposedUseCase`. **Authority:** `governingSourceStatus`, which is `unassessed (F2)` for 222 rows. Only three rows name a recorded source: the frozen migration, `README.md` (D5) and `bun.lockb` (D-64). The label "governing-doc mention" is now "literal hit outside handoff". The label "knowledgebase" is now "governance/docs searchable projection (operative under D-425/D-426; no retrieval scope implied)". The label "product codebase" is now "product-facing setup source (no SM05 delivery credit)". §5A membership now comes from the first cell of the §5A.1–§5A.6 rows. That is the same grammar as `phase-manifest`. | Summary `labels` statement; `byGoverningSourceStatus`; `byPhaseManifestRow` |
| F1-R3 | The script reads the classifier from the frozen blob and imports that copy. It never imports the working-tree file. It records the classifier blob `276f834…` and SHA-256 `3b0d5a8c…`. It also records the working-tree blob, for information only; at this run the two were equal. The phase document is also read from the frozen revision (blob `a96e5c1…`). The script records its own SHA-256. | Summary `classifier`, `phaseDocument`, `script` |
| F1-R4 | A `git grep` exit 1 with empty stderr is the only no-match result. Any other Git error is retained, and the run stops with exit 2 **before any file is written**. A failed revision lookup also stops the run before any write. **Negative control:** revision `deadbeef` gave exit 1 and wrote 0 files. **Limit:** a grep-stage fault was not injected, so that branch is proven by reading the code only. | Summary `gitErrors: 0`; this record |

### R2.3 Changed rows and reconciliation

Five rows changed in applicability or §5A membership. Every row changed its field names, as F1-R2 requires.

| Path | Revision 1 | Revision 2 | Cause |
|---|---|---|---|
| `bun.lockb` | excluded | included, reproducibility control | F1-R1 |
| `.gitattributes` | manifest: yes | §5A row: none | F1-R2: the hit was not a §5A row |
| `package.json` | manifest: yes | §5A row: none | F1-R2 |
| `lib/config/build-config.ts` | manifest: yes | §5A row: none | F1-R2 |
| `__tests__/build-config.test.ts` | manifest: yes | §5A row: none | F1-R2 |

§5A membership changed from 32 backticked hits to 28 rows: 7 in §5A.4, 20 in §5A.5 and 1 in §5A.6 (exclusion).
The other 197 rows are in no §5A row. The candidate union is unchanged: 225 = 73 + 6 + 142 + 1 + 3, G6 = 0,
`reconciled: true`. The literal-hit counts are unchanged (85 / 9 / 131), and so are the lane counts (A 201, B 17,
C 1, no classifier match 6).

**For F2:** the two `build-config` files are named in the phase document but are not in a §5A row. The Build Spec
§1 calls them completed setup evidence. F2 must check whether a §5A row is missing. F1 does not decide this.

### R2.4 Row check (Lane B's closing condition)

The script applies each check to every row: frozen input (blob id, frozen classifier), a measured label, a
governing-source status, an inclusion reason where one applies, and a failure outcome (stop, no write). A "no
literal hit" means only that no literal path hit was found under this rule. It does not mean that no governing
intent exists. The three classifier gaps (`middleware.ts`, `.env.example`, `.onlyaiapp`) stay findings for F2 and
F3. They are not proof that no owner exists.

### R2.5 Next

Lane B reviews the delta at the commit that records this answer. When Lane B accepts revision 2 as the C1
baseline, Lane A starts F2 in the order stated in F1.6.

**Drift:** handoff-only; governed intent is synced at `93aa02f`. No graph sync is needed.
