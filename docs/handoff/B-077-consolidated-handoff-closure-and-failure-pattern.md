# B-077 — Consolidated handoff closure and recurring-failure pattern

- **Raised:** 2026-09-03 by Lane B
- **Kind:** finding
- **Phase:** 1
- **Blocks:** a truthful claim that the handoff backlog is reconciled and ready for the next authorization; no product implementation
- **Status:** Open
- **Lane A:**
- **Evidence:** all handoff entries discovered at immutable revision `a18fe1c`; `docs/handoff/README.md`; `docs/handoff/TEMPLATE.md`; `scripts/checks/handoff-response.mjs`; `scripts/checks/closure-readiness.mjs`; B-071/B-072/B-076; Graphify `portable-check` and `check-update`

## What happened

The handoff channel has accumulated repeated correction rounds in which a mechanically valid field
or green suite was treated as semantic closure. The recurring problem is not missing prose. It is
that five different facts were repeatedly collapsed:

1. the Judge authorized an action;
2. Lane A answered a handoff;
3. a correction exists at a commit;
4. an independent actor verified the correction; and
5. the current graph describes the settled source completely.

Those facts require different evidence and do not imply one another. Large append-only entries then
mixed historical statements with mutable header state, partial corrections received whole-entry
`Applied` labels, and later passes repaired the record rather than advancing the product plan.

This file is a **closure map and immutable audit snapshot**, not a second backlog. Each originating
handoff remains the only canonical record of its live `Status`, `Resolution`, evidence and owner.
Lane A must update those source entries; it must not maintain a changing status matrix here.

## Audit coverage — snapshot at `a18fe1c`

The following grouping records what was actually inspected. It is historical evidence pinned to
the revision above, not a live tally.

| Observed lifecycle class | Handoff IDs at the reviewed revision | Audit treatment |
|---|---|---|
| `Verified` | B-001, B-002, B-003, B-005, B-006, B-007, B-009, B-010, B-012, B-013, B-017, B-018, B-020, B-024, B-025, B-027, B-028, B-029, B-030, B-031, B-032, B-035, B-036, B-037, B-038, B-039, B-040, B-042, B-044, B-045, B-048, B-049, B-051, B-052, B-053, B-054, B-055, B-056, B-057, B-058, B-060, B-063, B-064, B-068, B-069 | Form is valid and no current source entry reopens them. Preserve; do not bulk rewrite historical prose |
| `Superseded` | B-004, B-008, B-019, B-023, B-034, B-043, B-046 | Named successor exists. Preserve unless its `Superseded-By` target is later found invalid |
| `Deferred` | B-016, C-001 | Phase 3 owns the live ruleset/compatibility work. Do not pull it into Phase 1 housekeeping |
| `turn-report` | B-022, B-026, B-047, B-059 | No resolution is required; preserve as historical run evidence |
| `Answered` without resolution | B-061 | Reconcile its remaining build-readiness questions with B-070/B-071; do not invent a terminal value |
| `Applied` | B-011, B-014, B-015, B-021, B-033, B-041, B-050, B-062, B-065, B-066, B-067, B-070, B-072, B-073, B-074, B-075 | Non-terminal by design; each needs the bounded disposition below |
| `Open` | B-071, B-076 | B-076 is the process parent. B-071 is the separate product-plan chain and remains under the D-171 hold |

## Recurring failure pattern

| Pattern | Mechanism | Guaranteed failure | Corrective rule |
|---|---|---|---|
| Approval inheritance | “Draft,” “commit,” or “push” permission is expanded into authorization of the resulting packet | A lane becomes the only source proving the authority it claims | Apply D-183 literally: record object/revision, action, scope, exclusions and checkpoint before execution |
| Response treated as closure | `Status: Answered` or a long Lane A response is treated as proof | A defect can remain in the tree while the queue looks complete | `Answered` is receipt; `Applied` needs a commit; `Verified` needs a non-answering actor |
| Partial fix, whole-entry label | One child is repaired while the entry's unmet criteria remain | `Applied` hides residual work and no owner receives it | Split or explicitly defer the residual; never let prose say “stays Open” while metadata implies the whole correction landed |
| Historical/current collision | Append-only narrative contains old state while the header carries a different current state | Search and human readers can cite opposite answers from one file | Preserve history; keep one short current-valued header and append explicit supersession notices |
| Field-name ontology error | `Verified-At-Commit` is read as terminal verification even while `Resolution: Applied` | Removing it breaks re-checkability; retaining it is misread as self-verification | The field is an evidence anchor. Terminality comes from `Resolution: Verified` plus `Verified-By` |
| Wrong independence boundary | The raiser/drafter is barred instead of the answering/applying side | The designated Lane B reviewer cannot satisfy the criterion it wrote | Independence means the verifier did not answer or apply the correction |
| Green-form fallacy | A passing checker is treated as proof that prose is true | Contradictory status and evidence can pass because checks validate form, not substance | Pair the suite with an explicit semantic review at an immutable revision |
| Graph-current fallacy | `docs-drift`/coverage is treated as semantic completion | Extracted topology is current while `graphify check-update` still reports pending descriptions/labels | Report extraction currency, curated coverage, semantic update and portability separately |
| Mutable roll-up | A handoff or decision repeats current counts, Git tips, or every child state | The roll-up becomes false on the next commit or correction | Query live state; use this file only as a pinned audit and link-only closure order |
| Repair recursion | Every correction creates a new evidence-only follow-up and another graph/status pass | Governance work grows without reducing unresolved business decisions | Settle source semantics, make one final evidence pass, then independent review; no self-review loop |

## Parent-first closure map

### Parent 1 — resolve B-076 before any lifecycle promotion

Apply B076-R1–R5 as one bounded documentation-contract correction:

- correct B-072/B-075 so `Verified-At-Commit` is the required non-terminal anchor for `Applied`;
- correct B-073/B-075 so independence excludes Lane A, the answering/applying side, not Lane B as
  raiser;
- normalize B-073/B-074/B-075 current evidence wording;
- append the R67 scope correction under D-186; and
- remove B-072's redundant gate tally while retaining the named independent-review gate.

Do not modify `closure-readiness`; its current Applied/Verified distinction is the canonical one.

### Child 2 — reconcile legacy non-terminal entries by disposition, not bulk promotion

| Source entries | Required review question | Allowed result |
|---|---|---|
| B-011, B-033 | Do D-156/D-186 and the present shared core now satisfy the original lane-state/propagation defect, or did the later decisions replace its proposed model? | `Verified` with current evidence, or `Superseded` by the exact later decision |
| B-014 | Is the repository control the completed scope while the environment import cause remains outside repository authority? | Verify the bounded detector/removal scope and defer one named environment child, or defer the whole unresolved cause with an owner |
| B-015 | Did B-016/C-001 fully receive the remaining Phase 3 live-settings and compatibility work? | `Superseded` by those entries if the transfer is complete; otherwise keep Applied and name the missing transfer |
| B-021 | Was “serialize fixture execution” accepted as the final risk treatment, or is true concurrent-reader protection still required? | `Verified` only for an explicit accepted mitigation; otherwise `Deferred` to Lane A tooling with a return condition |
| B-041 | Does current Graphify evidence prove extraction, curated coverage and semantic completion separately? | Do not verify while `graphify check-update` reports pending updates; either ingest them or narrow/defer semantic enrichment explicitly |
| B-050 | Has the intermittent null/reset condition been reproduced and fixed, or is only `docs-drift` mitigation present? | `Verified` only with a reproducible fix; otherwise `Deferred` to Graphify tooling with the standing mitigation retained |
| B-062, B-065, B-066, B-067 | Does B-068's independent review at `335564e` cover each entry's full acceptance boundary, not merely cite it? | Promote individually only where coverage is explicit; otherwise record the one missing criterion—do not reopen the settled D-165–D-169 semantics |
| B-061, B-070 | Has every surviving build-readiness concern moved to B-071/D-171, and is the stale “next code unit” defect independently confirmed fixed? | Give B-061 one current successor/disposition; keep B-070 Applied until B-071's dependency is satisfied, or verify only a formally separated work-order-fix scope |
| B-072, B-073, B-074, B-075 | After Parent 1, do current metadata, evidence anchors, authorization, graph evidence and verifier identity agree? | Lane B may set `Verified` only after Lane A's correction is pushed and Graphify is resynchronized |

For every `Applied` entry, remove a blank or prose-valued `Verified-By` line until actual terminal
verification. Do not manufacture a verifier to make the checker green.

### Child 3 — keep B-071 as the product-plan chain, not housekeeping

B-071 remains the highest unresolved product/documentation plan. Its next unit is Draft 12 under the
existing D-171 hold. It must resolve the recorded R67–R83 plan findings and the later Judge
clarifications before `AUTH-DOC` can be considered. This consolidation grants no Draft 12,
`AUTH-DOC`, implementation, lane transition or route activation authority.

B-061/B-070 may point to B-071 as their successor, but their historical content must not be copied
into Draft 12. Draft 12 owns only the current product plan; the handoffs retain provenance.

### Child 4 — preserve the Phase 3 deferral boundary

B-016 and C-001 remain deferred to Lane C/Phase 3. Phase 1 may verify that the deferral has an owner
and return condition; it may not close the live GitHub ruleset or compatibility work by documentation
assertion.

### Child 5 — Graphify and final independent review

After all authorized source corrections settle:

1. add curated nodes for B-076 and B-077 and update `frag120.json` by upsert so it no longer calls
   the B075 lifecycle conflict unresolved;
2. rebuild and re-merge the curated layer;
3. run `graphify check-update` and either ingest pending semantic updates or state explicitly that
   only extraction/coverage currency is claimed;
4. run `portable-check` only as a commit-safety test for proposed tracked artifacts—gitignored
   runtime paths are observations, not automatic blockers;
5. run the full consistency suite; and
6. give the exact pushed revision to an actor who did not answer/apply the corrections.

The independent actor updates each originating handoff first. B-077 closes only after a fresh query
finds no unexplained `Open`, `Answered`-without-resolution, or `Applied` Phase 1 entry. Explicitly
deferred work, turn reports and B-071's separately governed product-plan hold are not disguised as
completed.

## Success criteria

| ID | Given | When | Then |
|---|---|---|---|
| `B077-SC1` | A handoff's current state is requested | Evidence is gathered | The originating entry is read; B-077 is never used as the live status source |
| `B077-SC2` | An `Applied` entry contains unmet acceptance criteria | Closure is proposed | The residual is split or explicitly deferred before any terminal promotion |
| `B077-SC3` | Terminal verification is proposed | Metadata is inspected | `Resolution: Verified`, an independent non-answering `Verified-By`, evidence and an existing review commit are present together |
| `B077-SC4` | B-011/B-033 or another historically overtaken entry is reviewed | Current governance is compared | The result names either current verifying evidence or one exact superseding decision, never both |
| `B077-SC5` | B-041/B-050 graph evidence is reviewed | “current” is claimed | Extraction, curated coverage, semantic update and portability scope are stated separately |
| `B077-SC6` | B-071 remains under D-171 | Process housekeeping completes | No wording implies Draft 12, AUTH-DOC, product work or lane activation was authorized |
| `B077-SC7` | Source corrections are pushed | Final graph work runs | Curated nodes survive; pending semantic work is resolved or bounded; source, graph and review revision are explicit |
| `B077-SC8` | Consolidated closure is claimed | The handoff directory is queried afresh | Every non-terminal Phase 1 entry has a named next action; no historical snapshot or tally substitutes for source state |

## What you did instead

Lane B inspected every handoff's lifecycle metadata, reviewed the substantive non-terminal groups,
ran the canonical checks and Graphify diagnostics, and recorded this one closure map. It did not
edit any originating handoff, Decision Register, product specification, checker, Graphify fragment,
lane state or implementation surface; did not self-promote any entry; and did not duplicate the
transaction SOP.

## Approve / reject

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Terminal/superseded/turn-report population | No current source entry reopened it in this audit | Preserve; spot-check only if a successor changes |
| **Approve-with-conditions** | Legacy Applied population | Each entry has one bounded disposition route above | Lane A classification, then independent review |
| **Reject verification** | B-072/B-073/B-074/B-075 | B-076 lifecycle-contract corrections remain open | Parent 1, then Lane B review |
| **Reject** | Bulk close or second live backlog | Would repeat the drift mechanism being repaired | Update originating entries only |
| **Defer** | B-071/Draft 12 and Phase 3 ruleset work | Separate governed chains with existing holds/owners | Separate authorization / Phase 3 |
| **Defer** | Product implementation and lane transition | Outside this audit | Fresh authorization after the applicable plan closes |
