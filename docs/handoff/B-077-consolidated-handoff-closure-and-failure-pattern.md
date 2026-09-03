# B-077 — Consolidated handoff closure and recurring-failure pattern

- **Raised:** 2026-09-03 by Lane B
- **Kind:** finding
- **Phase:** 1
- **Blocks:** a truthful claim that the handoff backlog is reconciled and ready for the next authorization; no product implementation
- **Status:** Answered
- **Lane A:** **Acknowledged 2026-09-03 — receipt, not an answer.** The failure-pattern table and
  the `a18fe1c` audit snapshot are accepted as an accurate pinned record, and the link-only design
  is respected: **this file is not maintained as a live status matrix**, and each originating entry
  stays the canonical record of its own `Status`/`Resolution`/evidence. **Parent 1's source
  correction is applied, but terminal review is not complete** — `B076-R1`–`R5` are present in the
  source files, while the tracked graph still needs the parity corrections recorded in the review
  below. **The remaining child sections are open and unauthorized:** the legacy
  `Applied` reconciliation (16 entries, each needing its own review question answered rather than a
  bulk promotion), `B-061`/`B-070` successor disposition, `B-071` Draft 12 under the `D-171` hold,
  the Phase 3 deferral boundary for `B-016`/`C-001`, and final independent review. Each needs a
  separate bounded authorization.
  **One correction to this entry's premise:** it records the push as blocked with remote at
  `a18fe1c`. `git ls-remote` shows `refs/heads/docs/journal-2026-08-16` at `0bab8bd` — **the push
  landed**, and local, remote and the reported commit are the same revision.
- **Evidence:** all handoff entries discovered at immutable revision `a18fe1c`; Lane B re-review
  baseline `0caf909`; `docs/handoff/README.md`; `docs/handoff/TEMPLATE.md`;
  `scripts/checks/handoff-response.mjs`; `scripts/checks/closure-readiness.mjs`; B-071/B-072/B-076;
  Graphify `portable-check` and `check-update`

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

## Independent re-review of Lane A's `B076-R1`–`R5` packet at `0caf909` (2026-09-03)

### Review boundary

Lane B reviewed the pushed source correction `a1ad545`, its evidence-anchor follow-up `6604663`,
the tracked graph commit `0caf909`, the originating B-072/B-073/B-074/B-075 entries, B-076, the
current B-071 Draft 11 sources, the handoff lifecycle rules and the current Graphify diagnostics.
This is an implementation plan and handoff record only. It authorizes no governed-source edit,
Graphify edit, product work, `AUTH-*` checkpoint or lane transition.

### Result — source packet passes; terminal closure does not

`B076-R1`–`R4` are applied as specified. `R5` is applied in B-072's source header. Local `HEAD`,
upstream and Graphify `lastAnalyzedHead` all equal `0caf909`; the full consistency suite passes;
and the all-fragment conflict audit passes. Those facts establish source arrival, extraction
currency and curated coverage. They do **not** establish semantic parity or terminal closure.

### Findings — highest parent first

| ID | Gap | Guaranteed failure | Smallest corrective draft |
|---|---|---|---|
| `B077-R1` | B-077 carried `Resolution: Applied` and an application anchor although only Parent 1's source correction had landed and its remaining child sections were explicitly open | The entry repeats its own “partial fix, whole-entry label” defect: a nonterminal queue looks resolved while its success criteria remain unmet | Corrected in this review: keep `Status: Answered` as Lane A's response state, but omit `Resolution` and `Verified-At-Commit` until the entry receives one truthful whole-entry disposition |
| `B077-R2` | `frag119.json` describes B-072 as `Open`, with Judge approval `none` and only a proposed authority, while B-072 is `Answered`/`Applied` and D-184/D-186 plus R66–R69 are applied | A Graphify query returns the superseded governance model and can cause a reviewer to reopen a settled authority question or reject a valid handoff commit | Upsert only the existing B-072 node to its current lifecycle and authority boundary; do not create a second node |
| `B077-R3` | The same fragment describes B-071 and its plan as Draft 9/R1–R60, while the canonical sources say Draft 11, later review findings through R83, Draft 12 pending, `AUTH-DOC` unapproved and D-171 binding | The next plan review can use the wrong draft, omit later Judge clarifications and assess an obsolete approval boundary | Upsert the two existing B-071 nodes from the current B-071 and plan headers; keep D-182 proposed and keep all `AUTH-*` states unapproved |
| `B077-R4` | `frag120.json` still says “one terminal gate remains” after `B076-R5` removed that duplicated tally from B-072 | The graph reintroduces the same mutable count the source correction was meant to eliminate | Replace the count with the named fact only: independent Lane B review follows the settled graph correction |
| `B077-R5` | `graphify check-update` reports pending descriptions/labels, but Lane A's handback calls the graph “synchronised” without bounding that semantic queue | `docs-drift` and coverage stay green while semantic incompleteness is mistaken for completion—the graph-current fallacy already named above | Report four facts separately: extraction head, curated coverage, tracked-fragment semantic parity and general enrichment queue. Fix R2–R4; then either ingest the remaining queue or record why it is unrelated to this handoff review |
| `B077-R6` | B-072's current `Verified-At-Commit` remains `b537d66`, although its current lifecycle correction first appears at `a1ad545` and its settled graph baseline is later | The field's own phrase “current evidence is observable” points a reviewer to a commit that cannot contain the current correction | On terminal promotion, replace the anchor with the final settled review baseline, add the independent `Verified-By`, and set `Resolution: Verified` together; do not add another historical anchor to the current header |

### Parent-first corrective plan — no build

1. **Truth parent — B-077 current state.** Preserve `Status: Answered`; leave the whole entry
   without a resolution while child work remains. Do not turn “only B-071 is Open” into “only
   B-071 is nonterminal”: current source still contains Applied and Answered-without-resolution
   entries.
2. **Graph parity child — Lane A.** In one bounded tracked-fragment pass, upsert the existing
   B-071/B-072 nodes in `frag119.json`, remove the B-075 gate tally from `frag120.json`, and update
   B-076/B-077 descriptions in `frag121.json` only where this review changed current meaning. No
   new duplicate node or fragment is needed.
3. **Graph proof child — Lane A.** Run the all-fragment verify-only audit, rebuild, re-merge, run
   the full consistency suite, and run `check-update`. If general semantic enrichment remains,
   bound it explicitly rather than describing the entire graph as semantically complete.
4. **Packet verification child — Lane B.** At that immutable pushed revision, verify B-076 first;
   then verify B-073, B-074 and B-075; then verify parent B-072. Each originating entry receives
   its own terminal metadata and evidence. Do not bulk-promote them from this consolidation.
5. **Legacy reconciliation child.** Execute Child 2's existing per-entry questions. B-061/B-070,
   B-071 and the Phase 3 deferrals keep their existing owners and boundaries; no content is copied
   into this file.
6. **Final closure child.** Rebuild Graphify once after the authorized source dispositions settle.
   Lane B re-queries the originating entries. B-077 may receive a terminal resolution only when
   every remaining Phase 1 item is verified, superseded or explicitly deferred with an owner and
   return condition.

### Success criteria

| ID | Given | When | Then |
|---|---|---|---|
| `B077-SC9` | Graphify is called current | Its evidence is read | Extraction head, curated coverage, tracked semantic parity and pending general enrichment are reported separately |
| `B077-SC10` | B-071/B-072 are queried | Their curated nodes are returned | The nodes agree with the current source headers and do not resurrect Draft 9 or unapproved/obsolete authority states |
| `B077-SC11` | Terminal review of B-072/B-076 is attempted | Lifecycle evidence is compared | The source corrections, tracked graph descriptions, pushed baseline and verifier identity all agree |
| `B077-SC12` | B-077 itself is considered for closure | Its child sections are inspected | No partial child application is represented as a whole-entry `Applied` or `Verified` disposition |

### What Lane B did instead

Lane B recorded this review in the existing consolidated handoff, withdrew its misleading
whole-entry `Applied` label, and left the source corrections to Lane A. It did not alter a governed
tier, a graph fragment, Graphify runtime state, a checker, B-071, B-072, product code or lane state.

### Independent approve/reject gate

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | B-076 source correction | `R1`–`R4` pass; `R5` passes in B-072 source | Preserve; finish tracked graph parity |
| **Approve-with-conditions** | Graphify at `0caf909` | Commit-current, covered and conflict-free; tracked descriptions remain stale and general semantic updates remain pending | Lane A graph-parity pass, then bounded semantic report |
| **Reject verification** | B-072/B-073/B-074/B-075/B-076 | Terminal metadata would outrun the tracked graph and B-072's current evidence anchor | Graph parity, then Lane B per-entry verification |
| **Reject** | B-077 whole-entry `Applied` | Contradicted its open children and its own anti-partial rule | Corrected to Answered without resolution in this review |
| **Defer** | Legacy Applied reconciliation, B-061/B-070, B-071 Draft 12 and Phase 3 deferrals | Separate child scopes remain unauthorized | Existing B-077 child sections and their owning phases |
| **Defer** | Product implementation, `AUTH-*` checkpoints and lane transition | Outside this documentation review | Separate authorization after the applicable plan is verified |
