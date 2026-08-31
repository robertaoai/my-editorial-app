# B-067 — Consolidated D-168 propagation and control-owner gap analysis

- **Raised:** 2026-08-31 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** verifying `B-062`, `B-065`, or `B-066`; claiming `D-168` is fully propagated;
  or treating the OD2 failure signal as operationally owned in v1
- **Status:** Answered
- **Lane A:** **Acknowledged and corrected 2026-08-31 (`D-169`).** Verified each of the five
  sub-gaps against the actual files (not response prose) before fixing: confirmed the "hard
  requirement of the Three Lines Model" / structural-separation-proves-distinct-judgment wording
  in Addendum/Blueprint/Business Case (`B067-G1`); the Build Spec opening, `FN-EXCEPTIONS` §4.2,
  and `Modular_PRD`'s `Q12` closure text (`B067-G2`); `G-05`/`AS-02`/`RK-01`'s `Line 3` owner column
  and `Q4`'s `FR-11`/M5 dependency (`B067-G3`); and `DECISION_LOG`/`CONFIG_LOG`'s `Q1`-collapsed-
  into-`OD3` rows. Corrected all in the same pass per `B067-F1`–`F4`. `B-063`/`B-064` left
  `Verified`, not reopened. Encyclopedia Entry 05 (`B067-G4`) remains flagged, not republished —
  no change needed beyond the existing `D-168` flag. `G113` (`B067-G5`) left as Lane A backlog per
  `B067-F8`, not built. No Line 3 table, identity field, `OD4` engine, or S5 implementation created.
- **Resolution:** Applied
- **Verified-By:**
- **Evidence:** `D-163`–`D-169` in `V1-DECISION-REGISTER.md`; `B-062`–`B-067`;
  commits `b6128f1`, `938e049`, and `cb42cae`; frozen Charter OD2/OD4; current Build,
  Product, functional, source, log, RACI, Encyclopedia, and Graphify records cited below
- **Verified-At-Commit:**

## 1. Scope declaration

| Field | Populated scope |
|---|---|
| Reviewing | Lane A's `D-168` correction and its propagation, using Lane B's Q1/Q12 and OD4/Line 3 critic chain |
| Source docs | `docs/v1/V1-DECISION-REGISTER.md`; `docs/v1/V1-BUILD-SPEC.md`; `docs/Modular_PRD.md`; `docs/fn-specs/FN-GATES-01-05.md`; `docs/fn-specs/FN-EXCEPTIONS-06-11-12.md`; `docs/source/v1-build-readiness-addendum.md`; `docs/source/blueprint.md`; `docs/source/business-case.md`; `docs/governance/raci-involvement-matrix.md`; `docs/DECISION_LOG.md`; `docs/CONFIG_LOG.md`; `docs/ENCYCLOPEDIA-SYNC.md`; `docs/handoff/B-062-*.md` through `B-066-*.md` |
| Prior analysis | `B-062` (Q12/RACI), `B-063` (S2 units and T6 mapping), `B-064` (transaction boundary), `B-065` (SEC-06/GIAS), `B-066` (OD4/Line 3 category error), and `D-168`'s response |
| Closed means | Every current-value owning tier states the same parent relation; absent owners are explicit; compensating controls are not called independent assurance; stale publication is republished; targeted negative review passes; an independent reviewer verifies the files; Graphify and the consistency suite are current at the final commit |
| Downstream lanes | Lane B is blocked from treating these semantics as verified. Lane C is unaffected unless a separately authorized workflow change is later requested |
| Sync tool / record | Governing documents are the source of truth under `D-29`/`D-58`; Graphify is a derived navigation layer over `docs/`, not an authority and not a semantic verifier |

**Guardrail applied:** this is a plan and tracking update only. No governing document, product
requirement, code, schema, migration, workflow, lane state, or Graphify fragment is changed.

## 2. Terminology map

| Previously blurred wording | Canonical meaning | Controlling source |
|---|---|---|
| `OD2` / “independence” | Whether the existing five-gate pipeline yields sufficiently distinct editorial judgment | Frozen Charter; `G-05` is the hypothesis/detector, not proof |
| `OD4 branch fires` | A trigger reopens a remedy decision | Frozen Charter; it neither selects nor authorizes OD4 |
| `OD4` | Deferred Proposer → Critics → Judge remedy architecture | Separate from Line 3, `SEC-06`, and `FR-11` |
| Line 3 / `SEC-06` | Separately authorized organizational assurance with mandate, authority, safeguards, and independent reporting | `D-57`, `D-166`, GIAS-2024 anchor |
| `FR-11` | Future risk-triggered per-article audit feature, not built in v1 | Directly governed by `D-57`, not `OD3` or `OD4` |
| `SEC-01` / four-eyes | Project-owned successor-node executor separation: `R(prior task) != R(review task)` | RACI; not `R != A` inside T5 and not an IIA rule |
| Q1 Phase 0 | One instance may perform multiple Line 1 roles if each gate records role and executor | `D-163` |
| Q1 production / `OD3` | Production roster and headcount remain subject to Charter ratification | Distinct from the decided Phase-0 rule |
| `FR-14` / `C-13` | Line 2 compensating observation and escalation while independent assurance is absent | Never Line 3 or independent assurance |
| `Applied` | Lane A says the correction was made | Not independent evidence of correctness |
| `Verified` | An independent reviewer checked the applied files and failure-oriented criteria | Cannot be inferred from response prose, Graphify currency, or green structural checks |
| Graphify current | Derived graph matches the repository commit | Does not mean the repository's meanings are mutually consistent |

## 3. Drift table

| Document or section | Status | Evidence / reason |
|---|---|---|
| `D-168` parent decision | **IN SYNC** | Correctly restores `D-57` as `FR-11`'s direct v1 governor and separates OD4 from Line 3 authorization |
| `Modular_PRD` `SEC-01`, `SEC-06`, `FR-11`, Q1, S2 Unit 1/2 rows | **IN SYNC** | Preserves successor-node separation, the GIAS-2024 anchor, no v1 independent assurance, the Phase-0/production distinction, and the verified `B-063`/`B-064` planning outcomes |
| `V1-BUILD-SPEC.md` opening | **DRIFTED** | Still says S5 is gated on `OD1`–`OD3`, while its S5 row and `D-168` say `FR-11` is outside v1 under `D-57` |
| `FN-EXCEPTIONS-06-11-12.md` §4.2 | **DRIFTED** | Still says “the Three Lines Model's `OD4` branch,” preserving the category error `D-168` corrected |
| Addendum, Blueprint, Business Case OD4 rows | **DRIFTED** | Still pre-map Proposer/Critics/Judge to Lines 1/2/3, including default Judge = Line 3, despite separate-authorization semantics |
| Addendum, Blueprint, Business Case four-eyes explanations | **DRIFTED** | Still present the project's strict same-identity rule as an absolute IIA requirement and structural separation as guaranteed distinct judgment |
| `Modular_PRD` `G-05`, `AS-02`, `RK-01`, Q4 | **DRIFTED** | Current owner is absent Line 3; Q4 still links the detector to excluded `FR-11`/M5 scope instead of the v1 `FR-14`/Line 2 compensating path |
| `Modular_PRD` Q12 decision row | **DRIFTED** | Its current answer still says four-eyes is `R != A` at the boundary, contradicting the corrected RACI/T5 explanation in `SEC-01` and `D-165` |
| `DECISION_LOG.md` / `CONFIG_LOG.md` Q1 rows | **DRIFTED** | They still collapse Q1 into `OD3`/an unanswered roster shape instead of naming the decided Phase-0 rule and the separate production question |
| `ENCYCLOPEDIA-SYNC.md` Entry 05 | **DRIFTED, DISCLOSED** | Correctly flagged for republication, but the published v14 record still carries the retired OD4/Line 3 relationship |
| Graphify at `cb42cae` before this file | **IN SYNC FOR CURRENCY ONLY** | `lastAnalyzedHead` matched `HEAD`; it faithfully indexed the contradictory corpus. This is the semantic false green recorded as `G113` |

Any `DRIFTED` row above blocks verification. History and changelogs may retain superseded wording
when it is unmistakably historical; current requirements, summaries, decisions, and instructions may not.

## 4. Deduplicated gap list

The IDs below are local sub-gaps of `B-067`, not new Decision Register `G` numbers. Existing
handoffs remain the provenance; no duplicate handoff is opened.

| Gap ID | Description | Lane origin | Evidence | Parent dependency | Severity |
|---|---|---|---|---|---|
| `B067-G1` | Source semantics still pre-authorize Judge = Line 3, mis-source the identity rule, and treat structure as proof of distinct judgment | B, reviewing A | **VERIFIED** — Addendum, Blueprint, Business Case current-value rows | `D-168` parent meaning stands | Blocks handoff |
| `B067-G2` | Direct propagation remains stale in the Build Spec opening, functional spec, Q12 row, and Q1 logs | B, reviewing A | **VERIFIED** — exact living rows listed in the drift table | `B067-G1` terminology must be stable first | Blocks handoff |
| `B067-G3` | `G-05`, `AS-02`, and `RK-01` assign the OD2 detector to absent Line 3; Q4 reconnects excluded `FR-11`/M5 | B, reviewing A | **VERIFIED** — Product Requirements rows | `B067-G1`; preserve `D-57` and `FR-14` | Blocks handoff |
| `B067-G4` | Encyclopedia Entry 05 distributes the retired relation | B, reviewing A | **VERIFIED** — sync ledger says affected/not republished | `B067-G1`–`G3` corrected | Blocks verification, not drafting |
| `B067-G5` | Structural checks and a current graph do not test these ownership/source relations | A and B agree | **VERIFIED** — `G113`; green pre-handoff suite beside live contradictions | `B067-G1`–`G4`; tooling may follow separately | Degrades detection; not a build blocker |

### Guaranteed failure chains

| Failure | Why it is deterministic | Observable result |
|---|---|---|
| One OD4 authorization silently creates Line 3 | The stale default maps Judge directly to Line 3 | One decision authorizes two systems despite `D-168` |
| Absent Line 3 owns `G-05` | The assigned role does not exist in v1 | The pre-launch signal has no executable owner |
| `FR-14` is called independent assurance | Line 2 observes and reports its own operating evidence | Compensating visibility is misrepresented as independent opinion |
| Structural separation is treated as distinct judgment | Labels are substituted for a measured outcome | `line_separation_status = satisfied` while judgments remain materially identical |
| Q1 Phase 0 and production `OD3` remain collapsed | A decided operating rule appears unresolved | Lane B either waits unnecessarily or guesses the production roster |
| Green checks/Graphify are accepted as semantic verification | They test structure, selected references, and currency—not these meanings | Contradictory ownership passes mechanically |

## 5. Ordered fix list — parent before children

| Fix ID | Plan-only action | Owner | Depends on | Verification method |
|---|---|---|---|---|
| `B067-F1` | Add one correcting register decision after `D-168`: preserve `D-57`, `D-165`, `D-166`, and `D-168`; state OD4, Line 3/`FR-11`, and `SEC-06` require separate authorization; source strict successor-identity separation to the project; state structural separation does not prove distinct judgment; record absent independent owner plus `FR-14`/Line 2 compensating observation | Lane A | — | Register text contains the full parent relation and names unaffected tiers under `D-54` |
| `B067-F2` | Normalize Addendum, Blueprint, Business Case, and RACI current-value text; remove default Judge = Line 3, absolute-IIA identity claims, and guaranteed-cognitive-distinctness claims. Do not edit the frozen Charter or historical changelogs | Lane A | `B067-F1` | Current-value source search finds none of the three retired claims; historical occurrences are clearly labelled |
| `B067-F3` | Correct direct child rows: Build Spec opening; `FN-EXCEPTIONS` OD4 wording; Product Q12 answer; Q1 rows in `DECISION_LOG`/`CONFIG_LOG`. Preserve verified S2 Unit 1/2 and RPC planning from `B-063`/`B-064` | Lane A | `B067-F1`, `B067-F2` | Opening/S5 agree; functional spec says the Charter trigger reopens a remedy decision; Q12 uses successor-node separation; Q1 Phase 0 is distinct from production OD3 |
| `B067-F4` | Reassign current `G-05`/`AS-02`/`RK-01` ownership: independent owner absent in v1; observation/escalation by `FR-14`, Line 2/Chief Editor, explicitly compensating. Remove `FR-11`/M5 from Q4 unless a future decision reconnects them | Lane A | `B067-F1` | No absent role owns a current control; no row calls `FR-14` independent assurance; Q4 concerns detector timing/threshold only |
| `B067-F5` | Republish Encyclopedia Entry 05 from the corrected owning documents and record publication evidence | Lane A | `B067-F2`–`F4` | Published entry and sync ledger express the same parent relation and cite the correcting decision |
| `B067-F6` | Independently review the applied files against failure-oriented criteria; promote `B-062`, `B-065`, and `B-066` only from file evidence, not Lane A response prose | Lane B or another independent reviewer | `B067-F2`–`F5` | Deliberately reintroduced bad attribution/owner phrases are caught; handoff statuses have reviewer and commit evidence |
| `B067-F7` | At the final documentation commit: rebuild Graphify, merge curated coverage for `B-067`, complete semantic ingestion, confirm `lastAnalyzedHead = HEAD`, then run the full consistency suite | Lane A | `B067-F5`; documentation commit exists | Graph coverage includes every Markdown file, branch currency matches final HEAD, handoff is acknowledged, and the suite is green |
| `B067-F8` | Keep `G113` as a separate Lane A tooling backlog item; do not block this semantic repair on automating it and do not assign it to Lane C | Lane A | `B067-F1` identifies the invariant | A future check has a negative fixture; until then the manual targeted review remains mandatory |

### Success criteria derived from failure

1. An OD4 proposal fails authorization unless its trigger, remedy selection, owner, project/business
   authorization, budget boundary, artifacts, and acceptance evidence are explicit.
2. A Line 3/`FR-11` proposal fails authorization unless its separate executor, mandate, reporting
   path, safeguards, phase, artifacts, and acceptance evidence are explicit.
3. Naming an OD4 actor “Judge” or giving it a distinct agent identity cannot qualify it as Line 3.
4. A current assurance design fails if Lines 1/2 control scope, evidence filtering, conclusions,
   escalation, or reporting; shared read access alone is not a failure.
5. A current-value search finds no default Judge = Line 3 mapping, no absolute IIA source for the
   project's identity rule, and no claim that Line labels guarantee distinct judgment.
6. `G-05`, `AS-02`, `RK-01`, and Q4 state the absent independent owner and honest `FR-14`/Line 2
   compensating path.
7. Q12 states `R(prior task) != R(review task)` and acknowledges `R = A` at T5; Q1 states the
   decided Phase-0 rule separately from production `OD3`.
8. The Encyclopedia is republished only after the owning tiers agree; Graphify is rebuilt only
   after that final documentation commit.
9. No Line 3 table, OD4 engine, monitoring service, schema, migration, workflow, or application
   feature is created by this correction.

## 6. Cross-lane consolidation

| Perspective | Consolidated position |
|---|---|
| Lane A | `D-168`'s parent decision is correct and must remain. Lane A owns the governing/source/product/functional propagation, Encyclopedia, Graphify, and any future `G113` check |
| Lane B | `B-063` and `B-064` remain Verified; their S2 unit split and transactional RPC boundary are not reopened. `B-062`, `B-065`, and `B-066` remain Applied until the residual source and ownership sweep is independently verified |
| Lane C | No current work. GitHub workflow ownership is unaffected; `G113` would live under Lane A's `scripts/` surface if later authorized |
| Agreement | OD4, organizational Line 3 assurance, per-article `FR-11`, successor-node `SEC-01`, and compensating `FR-14` are distinct concepts |
| Remaining disagreement | Lane A's closure/propagation claim is broader than the applied current-value edits. B-067 rejects verification, not the parent decision |

## 7. Current graph/check state and scope limit

Before `B-067` was added, Graphify's `lastAnalyzedHead` matched `HEAD` at `cb42cae` and the full
consistency suite passed. That proved currency and structural consistency, not semantic correctness.
The graph contained the same contradictions identified above.

After this untracked handoff was added, the expected temporary failures are that Lane A has not
acknowledged it and the curated graph does not yet cover it. The unrelated untracked
`package-lock.json` remains untouched. Lane B does not repair Lane A's graph artifacts while Lane A
is Active.

No implementation is authorized here. Specifically: do not create Line 3, an OD4 engine, a new
monitoring service, schema, migration, workflow, or S5 task. This is one semantics/propagation
repair followed by publication, independent verification, and derived-graph synchronization.

## 8. Approve / reject summary

| Decision | Tier | Follow-up phase |
|---|---|---|
| **Approve** — preserve `D-168` and direct `D-57` governance of `FR-11`'s v1 absence | Decision Register | Phase 1 preservation |
| **Reject verification** — `D-168`/`B-066` propagation is incomplete | Handoff and tracking tier | Phase 1 through `B067-F1`–`F7` |
| **Reject** — default OD4 Judge = Line 3 mapping | Addendum, Blueprint, Business Case | Phase 1 semantic normalization |
| **Reject** — absent Line 3 as current `G-05`/OD2 risk owner | Product Requirements tier | Phase 1; record absent independent owner and `FR-14` compensating path |
| **Approve-with-conditions** — retain strict successor-identity separation as project-owned | RACI, `SEC-01`, Product Requirements | Phase 1 source correction and Q12 normalization |
| **Approve-with-conditions** — Q1 Phase-0 combinable instances | Decision/config tracking tier | Phase 1; separate the decided Phase-0 rule from production `OD3` |
| **Approve** — preserve verified S2 units and RPC transaction boundary | Build/Fn_Specs/SPECS planning tiers | Unaffected by this correction; no build in this pass |
| **Defer** — Encyclopedia republication until owning documents agree | Publication/knowledge tier | End of Phase 1 correction pass |
| **Defer** — Graphify rebuild until the final documentation commit | Derived graph tier | Immediately after correction and republication |
| **Approve** — no application, schema, migration, workflow, Line 3, or OD4 build | Implementation tier | Remains outside this planning pass |
