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

## Lane A response to the independent re-review (2026-09-03)

**All five findings confirmed against the repository and applied under a bounded Judge
authorization.** Nothing here promotes an entry to `Verified`.

| Finding | Verified how | Applied |
|---|---|---|
| `frag119` reports B-072 `Open` and B-071 Draft 9 | Read directly from the fragment | Upserted — B-072 reads `Answered, Resolution Applied`; the plan reads Draft 11 |
| `frag120` reintroduces the `R5` tally | `"one terminal gate remains"` present in the B-075 node | Replaced with *"the named terminal gate is…"*. No fragment now carries the phrase |
| Graphify semantically stale | `graphify check-update` reports `.graphify_describe_pending` and *"rebuilt by the fast git hook without descriptions/labels"* | Semantic `--update` run in this pass |
| B-072's anchor predates its latest correction | Anchor was `b537d66`; the `B076-R1` append landed at `a1ad545` | Re-pointed to this parity commit |
| B-077's whole-entry `Applied` contradicted its open children | Lane B corrected it in `3426aa7` | Accepted and retained — `Answered`, no `Resolution` |

**A distinction Lane A had not surfaced, and Lane B was right to separate.** `docs-drift` measures
**commit currency only** — `lastAnalyzedHead` against `HEAD`. It says nothing about whether node
descriptions and labels were regenerated. `graphify check-update` measures that separately, and the
fast hook-rebuild path leaves it pending by design. Earlier Lane A statements that "the graph is
current" were true about commit currency and **silent about semantics**; both are now reported.

**One premise corrected, for the second time.** This entry and its re-review both record the push as
not permitted, with the remote behind. `git ls-remote` showed `refs/heads/docs/journal-2026-08-16`
at `0bab8bd` on the first occasion and at `3426aa7` on the second — **both pushes had landed before
Lane A read the report.** A push reported as blocked is not evidence that it was; query the remote.

**Still open and unauthorized:** `B-077` Children 2–5 — legacy `Applied` reconciliation, `B-061`/
`B-070` successor disposition, `B-071` Draft 12 under the `D-171` hold, the Phase 3 deferral
boundary, and final independent review.

### Graphify semantic currency is a per-machine condition, not a repo fact (2026-09-03)

**The semantic `--update` was authorized and run. It did not close, and the reason is structural
rather than a missed step.**

`graphify update --fill-missing` does not compute descriptions here — with no API key it runs in
assistant mode and emits **16 batch files asking the host assistant to author descriptions for 622
nodes**, mostly git commits, branches and code symbols, from name and neighbour lists alone. Two
facts make authoring them the wrong answer:

1. **`.graphify/` is entirely gitignored** — `git check-ignore -v` resolves `.graphify/graph.json`
   and the batch files to `.gitignore:18`. Nothing written there reaches another agent, another
   machine, or CI.
2. **The next `hook-rebuild` discards them.** The fast hook path rebuilds topology without
   descriptions and re-writes `.graphify_describe_pending`, so the work would be lost on the next
   source commit.

**What this means for the finding.** *"Graphify is commit-current but tracked semantics are stale"*
is **true and unfixable by any Lane A commit.** Semantic currency is local state that each agent
holds separately; there is no shared copy to bring into parity. The check that reports it,
`check-update`, is diagnostic for the machine it runs on — and is deliberately **not** part of
`bun run check`'s seventeen.

**What IS durable, and is now at parity:** `docs/graph-fragments/*.json`, the curated layer. Those
are tracked, they reach Lane B, and `frag119`/`frag120` were corrected in this pass. **Curated
fragment content is the only graph artifact on which two lanes can meaningfully agree.**

**Corrective rule, for the pattern table above.** Report four graph facts separately and never let
one stand for another: **extraction currency** (`lastAnalyzedHead` vs `HEAD`, via `docs-drift`);
**curated coverage** (`graph-coverage`); **curated content parity** (the tracked fragments, and
`merge7 --all`); and **semantic description currency** (`check-update`, local-only). Lane A's
earlier "the graph is current" claims asserted the first and were silent about the fourth. **Only
the first three are repo facts.**

## Independent decision-tree review at `ca77cd1` (2026-09-06)

### Scope and normalized terms

The Judge authorized a decision-tree review and a handoff-only commit/push. Lane B reviewed the
`B-070`–`B-078` chain, its cited predecessors, the handoff lifecycle contract, the current
`B-071` corrective plan, Graphify evidence and the requested storyboard/UML/data-flow/Encyclopedia
surface. This section is the one consolidated tracking update; no `B-079` is raised.

| Term | Meaning used here |
|---|---|
| `Answered` | Lane A replied. It is not a terminal resolution and does not mean every child closed |
| no `Resolution` | The whole entry has no terminal disposition yet. The field is omitted; `None` is not a valid resolution value |
| historical storyboard | Existing journal panels and Mermaid diagrams; evidence of an earlier model, not the current behavior owner |
| deferred view | Work already assigned to a named follow-up tier; absence of a new artifact is not an unowned gap |
| graph current | Never one fact: extraction currency, curated coverage, curated content parity and local semantic-description currency are reported separately |

Current enumeration is **78 `B-*` entries plus one `C-*` entry: 79**, not 80. The count is an
observed review fact only and is not copied into a rule or closure criterion.

### Decision tree — parent before children

```text
P1  Is B-077 awaiting a Lane A reply?
    No -> keep Status: Answered.
    |
    Is the entire B-077 item terminally dispositioned?
    No -> omit Resolution and verification metadata.
          Do not write Resolution: None and do not relabel it Open.
    |
P2  Are the requested storyboard/UML/data-flow/report concerns unowned?
    No -> preserve the existing owners:
          R159 -> docs/specs/ux/
          R160 -> FN-AUDIT-VISIBILITY-07-08.md
          historical storyboard -> journal evidence, unchanged
          Encyclopedia -> known URL + local sync ledger; hosted content still requires reading
          Do not create B-079 or duplicate artifacts.
    |
P3  Which Graphify claims are proven at ca77cd1?
    extraction currency -> proven by HEAD = lastAnalyzedHead
    curated coverage -> proven by graph-coverage
    curated fragment parity -> proven by merge7.js --verify-only --all
    local semantic descriptions -> pending; defer and label local-only
    portability -> runtime warnings only; .graphify is gitignored and no path is tracked
    |
P4  Can the consolidated handoff be closed?
    No -> keep B-077 Answered/no Resolution while its originating children retain
          their own states and owners. B-071 remains the separate product-plan parent.
```

### Deduplicated findings and fixes

| ID | Finding and failure if accepted unchanged | Drafted correction | Success criterion |
|---|---|---|---|
| `B077-R7` | The proposed B-077 header edit treats `Answered` as if it meant terminally complete and proposes `Resolution: None`, which is outside the allowed resolution vocabulary. It would corrupt lifecycle semantics while claiming to repair them | Preserve `Status: Answered`; omit `Resolution`, `Verified-By` and `Verified-At-Commit` until one truthful whole-entry disposition exists | The header matches the already-established `B077-R1` rule and the handoff template; open children remain visible without inventing a value |
| `B077-R8` | The proposed B-079 assumes storyboard/story-panel/UML/data-flow work has no owner. Current sources already defer R159 to `docs/specs/ux/` and R160 to `FN-AUDIT-VISIBILITY-07-08.md`; the journal contains the historical Mermaid panels and the Encyclopedia URL is recorded. A new entry would duplicate settled routing | Do not create B-079. Preserve the current owners and boundaries. A future implementation UML may live in `specs/`; behavior stays in Fn_Specs and UI consequences in `specs/ux/`, under the existing D-34 mapping | One owner per concern; no duplicate handoff or diagram; historical panels remain historical and hosted Encyclopedia verification remains explicitly unproven |
| `B077-R9` | The pasted graph summary leaves curated parity and semantic descriptions unmeasured, then calls the graph resynchronized. A consumer may treat topology currency as semantic completion | Record the measured facts below separately. Defer only the local semantic queue; never use it as committed cross-lane evidence | Every graph claim names its check and boundary; no single “current” label substitutes for the four facts |
| `B077-R10` | The pasted inventory states 80 handoffs, while filesystem enumeration at this revision finds 79. A mutable tally copied into governance will immediately drift | Correct the review observation here and keep closure item-based, never count-based | Future closure reads each originating entry; no rule depends on this observed count |

### Graph evidence at the reviewed revision

| Fact | Evidence | Result / disposition |
|---|---|---|
| Extraction currency | `.graphify/branch.json.lastAnalyzedHead` compared with `git rev-parse HEAD` | **In sync at `ca77cd1`** |
| Curated coverage | canonical consistency runner's `graph-coverage` check at the settled revision | **Covered**; must be rerun after this handoff commit moves HEAD |
| Curated content parity | `node docs/graph-fragments/merge7.js --verify-only --all` | **Pass:** no conflicting node or edge fields across tracked fragments |
| Semantic description currency | `npx graphify check-update` | **Pending, local-only.** Do not claim semantic completion or require a commit for ignored runtime state |
| Portability | `npx graphify portable-check .graphify` plus `git check-ignore` / `git ls-files` | Absolute-path warnings occur only in ignored `.graphify/` runtime artifacts; no `.graphify` path is tracked. Observation, not a commit blocker |

The initial sandboxed consistency run could not spawn nested Git/Node processes, so its skipped/
failed result is environmental evidence, not repository failure. A full unrestricted rerun is the
verification gate before this handoff commit. After the commit, `docs-drift` is expected to become
red because the handoff moved HEAD; per the channel SOP, Active Lane A owns final Graphify
synchronization before a consuming approval. That expected post-commit lag is not called synced.

### Cross-lane consolidation and closure boundary

- `B-072`–`B-076` and `B-078` retain their originating lifecycle evidence; this review does not
  bulk-promote, reopen or duplicate them.
- `B-070` remains `Applied` while its explicitly named B-071 dependency remains open. That is a
  dependency state, not a new defect.
- `B-061`, `B-071` and `B-077` may legitimately lack terminal `Resolution` for different reasons;
  they are reviewed through their own content, not normalized to one label for tally convenience.
- B-071 remains the product/documentation plan parent. Its Units, D-189/AUTH-DOC and D-171 hold
  are not authorized by this process review.
- R159/R160 remain deferred to their already named owners. No implementation, UX artifact,
  report mapping or hosted Encyclopedia update is performed here.

### Approve / reject

| Decision | Tier / item | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | B-077 lifecycle | `Answered` with no `Resolution` is the truthful current whole-entry state | Preserve until originating children are dispositioned |
| **Approve** | Graph extraction, coverage and tracked-fragment parity at pre-commit `ca77cd1` | Separately evidenced; no conflict found | Active Lane A resynchronizes after this handoff commit before consuming approval |
| **Reject** | Proposed `Status: Open` plus `Resolution: None` edit | Contradicts D-101/template vocabulary and duplicates the correction already made under `B077-R1` | No edit to the header |
| **Reject** | Proposed B-079 / new UML-data-flow ownership question | R159/R160 already have distinct owners; storyboard and Encyclopedia references exist | Use existing B-071 follow-up tiers |
| **Defer** | Local Graphify semantic-description completion | Pending and non-durable; not shared repository evidence | Per-machine diagnostic when a semantic consuming claim needs it |
| **Defer** | B-071 product plan, legacy reconciliation, Phase 3 work and implementation | Separate existing parents/owners; no authority granted here | Their recorded handoff/decision paths |

### What Lane B did

Lane B performed the bounded decision review, appended this correction to the existing consolidated
handoff and prepared only that handoff for commit/push. No originating entry header, governed tier,
graph fragment, ignored Graphify runtime artifact, Product/Fn_Spec/SPECS file, checker, code or lane
state is changed. The unrelated `package-lock.json` remains untouched.

## R159/R160 redundancy review and Judge decision guide (2026-09-06)

**Request:** assess whether functional specifications make further technical/UX specifications
redundant, then present the parent-first accept/reject decision. Review baseline: `b35f9ed`.
`B-079` does not exist at this baseline. This review stays in the existing consolidation and
links to B-071 R159/R160; it creates neither a duplicate finding nor a new artifact mandate.

### Evidence: what is covered and what is missing

| Concern / source | Existing coverage | Missing detail before closure |
|---|---|---|
| R159 — FN-GATES §11.1; Product FR-04a/FR-05a; FN-AUDIT-VISIBILITY §4.2 | Reviewer evidence, deterministic bundle join, article state, and a state-grouped board are described | An exhaustive derivation for the proposed T5 progress labels, distinguishing missing/in-progress/ready/final-outcome cases from persisted article state; precedence when evidence is incomplete, invalidated or from an earlier attempt |
| R160 — FN-PUBLICATION §§4–5/§11; Product AC-14a; FN-AUDIT-VISIBILITY §§4–5 | Publication consumes an immutable disposition; audit records answer who/when/why; publication has separate target results | The explainable report's outcome/reason/evidence bindings, how a negative judgment is represented, preservation across manual re-trigger, and how approval is distinguished from actual publication |
| Current candidate filter — FN-AUDIT-VISIBILITY §9 | Already rejects redundant SPECS for defined record and board behavior; separately lists storage/enforcement/query candidates | A component-specific D-30 assessment for the new R159/R160 mapping work; old candidate lists alone do not settle this new scope |

The audit Fn_Spec still contains historical Q11-open/S1-window language and T6→T5 metrics.
Use current Register/approved parent anchors when preparing the affected replacement text;
do not treat those historical statements as new unanswered decisions or widen this review into
a general audit-spec rewrite. Existing source controls and implementation specs remain governed.

### Parent-first accept/reject table

| Order | Decision for Judge | Recommended verdict | Concrete Lane A deliverable / acceptance condition |
|---|---|---|---|
| P1 | Are existing functional specs already sufficient to close R159/R160? | **Reject** | Keep both residuals open: their exact progress/report mappings are expressly undrafted in corrective-plan §16.3 |
| P2, after P1 | Complete missing behavioral semantics in the owning functional tiers before deciding whether another artifact is needed? | **Approve** | Trace each requirement to Product FR/AC anchors. Draft progress derivation and report mapping in the existing behavior owners, with references between FN-GATES and FN-AUDIT-VISIBILITY; do not duplicate publication rules |
| P3, after P2 | Is a technical/UX document needed merely to repeat those mappings? | **Reject** | Apply D-30: omit a document that only repeats complete functional definitions. A diagram can be a view of the same contract; its notation does not create a new requirement owner |
| P4, after P2 | Do actual interface/implementation choices remain undetermined? | **Approve-with-conditions** | Name each remaining choice and why the completed Fn_Spec cannot determine it. Only those choices enter an existing SPECS/UX section, or justify a new artifact if no suitable owner exists; UI layout remains in SPECS/UX under D-34 |
| P5, after P3/P4 | May R159's blanket UX follow-up be narrowed? | **Approve-with-conditions** | Propose a clause-specific disposition in the existing plan: behavioral mapping completed in Fn_Specs; any genuine rendering/interaction residual retained in SPECS/UX. Record zero residual only with the mapping and tests supplied. Existing routing remains in force until the correction is authorized |
| P6, after the selected packet is applied | Close R159/R160 and propagate the result? | **Defer** | Independently verify the applied mappings, tests, source/view links and D-30 disposition. Register/Build Spec/Inventory impacts must be stated individually; closing a child does not authorize B-071 implementation |

### Smallest drafting packet Lane A can prepare now

1. **Progress mapping (R159):** one table with current assessment/evidence condition, article
   state, derived progress value and reason, permitted user action, and expected result. Cover
   pre-join incompleteness, complete bundle, missing final-approval evidence, negative final
   result, positive final result and a manual fresh analysis. Use existing agreed labels or
   propose exact labels for review; never persist `None`/`WIP` as new article states by inference.
   Behavioral predicates belong upstream; widget choice, layout and stack-specific interaction
   remain UX only if they require specification.
2. **Report mapping (R160):** one table linking each final outcome to the source disposition,
   reasons and evidence, human/agent attribution as applicable, report statement, and separately
   recorded delivery result. Negative judgment cannot authorize publication or delete history;
   a later manual analysis must not inherit earlier approval. Do not infer that an audit row alone
   already defines the downloadable Public Explainable Content with report.
3. **Acceptance examples:** identical inputs derive identical progress; missing evidence never
   appears approved; a report agrees with the exact judgment/evidence it cites; a negative result
   authorizes no publication; `Approved` alone never proves `Published`; manual re-trigger
   preserves earlier outcomes. Reuse existing criteria where sufficient and draft only the missing
   elaborations, preserving Product ownership of requirement identifiers.
4. **D-30 residual table:** list each contemplated technical/UI choice, the functional clause that
   determines it (if any), existing technical owner (if any), and `omit as redundant` or
   `retain with reason`. No separate UML file, new UX file or technical spec is required by default.

### Cross-reference and handoff boundary

The journal storyboard contains Panels A5/A6 and Mermaid sequence/flow diagrams. Preserve them
as historical evidence; proposed current story panels, UML sequences and data flows must point
to the same functional mappings, showing evidence → readiness → human disposition → delivery.
Product owns the requirement; Fn_Specs elaborates behavior; SPECS/UX carries a demonstrable
remaining interface or implementation decision. This preserves the existing tier rule while
allowing R159's residual to shrink after functional completion.

The Encyclopedia exists at the URL in `ENCYCLOPEDIA-SYNC.md`; its hosted content was not read in
this pass. Record Entries 01/04/05 as impact-review candidates where appropriate, not as verified
or missing artifacts. Its later review does not require inventing a new local specification.

Graph extraction remains behind: `lastAnalyzedHead = ca77cd1`, reviewed HEAD `b35f9ed`.
The stale graph is not used to certify semantic coherence. Active Lane A handles synchronization
before a consuming graph/closure claim. This handoff records review and proposed corrections;
no functional, technical, UX, graph or application file is changed. Lane B independently reviews
later application; Lane C has no new CI work in this request.

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | D-30 redundancy principle | Repeated functional definitions do not justify another artifact | Lane A completes functional mappings, then the residual table |
| **Approve-with-conditions** | R159's proposed narrower routing | Behavioral semantics may leave no separate UX-spec requirement; this has not yet been demonstrated | P2–P5, authorized routing disposition |
| **Reject** | R159/R160 closure from current Fn_Specs | Required mappings and tests remain incomplete | Complete the existing owners' draft packet |
| **Defer** | Application, graph/Encyclopedia verification and B-071 closure | Review only; existing holds preserved | Authorized propagation and independent review |

## Review of the proposed progress/report tables (2026-09-06)

**Restated request:** verify Lane A's pasted R159/R160 tables against current authority and source,
and draft a parent-first correction suitable for Judge acceptance. Baseline `6324582`; the pasted
tables have not been applied. This continues existing B-071 R159/R160 and this review's D-30
decision guide. No B-079 or second feature tracker is required.

### Parent-first decision and corrective text

| Order | Evidence / gap | Recommended decision and correction | Success criterion |
|---|---|---|---|
| 1 — authority | The paste says T5-FINAL occurs only in B-071 and cites Round 27 to prohibit it. D-189 actually applied Unit 7 annotations containing T5-FINAL in Addendum, Blueprint and Business Case; D-190 preserves those annotations. Neither authorizes Units 1/2 | **Reject** the prohibition and missing-source claim. Cite T5-FINAL as the proposed target label disclosed by Unit 7; explicitly distinguish it from current/held operational names. Keep this packet aligned with the later clarified target under review | No old round silently reverses later scope; no proposal is presented as an implemented event. The migration constrains current storage, while the Register governs authorization |
| 2 — negative outcome | Proposed negative row sets Rejected / Needs Revision. The clarified target and corrective-plan §§15.3/16.5 keep a negative judgment Reviewed with reasons and no automatic return | **Reject** that row. Draft: negative final result → Reviewed, negative result/reasons recorded, publication not authorized; user may initiate a fresh whole-article analysis. Existing explicit human return/rejection actions retain their own triggers | Recording a negative judgment alone causes no automatic Rejected/Needs Revision transition |
| 3 — deterministic progress | “Not all sealed” overlaps “some sealed, at least one outstanding.” Missing final-approval evidence after join is omitted. A ready-for-join row implies a waiting phase although the source says the join occurs immediately | **Approve-with-conditions.** Make predicates disjoint and precedence explicit: zero valid sealed acts; some but fewer than all; all required acts sealed; joined but approval evidence incomplete; joined and awaiting human judgment; recorded negative; recorded positive. Treat ready-for-join as a transient computation only if needed, never a new user wait/action | Every covered input yields one result; incomplete approval evidence never renders ready for approval; prefixes alone are not proof of correct derivation |
| 4 — attempt versus history | “Fresh analysis ... prior state retained ... superseded” mixes the current analysis with the previous report. New attempt/evidence selection and invalidated evidence are unspecified | **Approve-with-conditions.** Progress derives from the selected current assessment and its applicable evidence. Earlier outcomes remain historical. Manual re-trigger starts the whole flow; do not label the new analysis superseded. Define selection and invalidation rules in logical behavior terms before claiming completeness | New analysis inherits neither a ready bundle nor approval; old outcomes remain retrievable; stale evidence cannot satisfy current readiness |
| 5 — report binding | as_at_transition_id is a required FK to an article's transition; it does not prove that transition represents a negative judgment that leaves state unchanged. snapshot is only constrained to a JSON object, not a declared evidence-ID schema | **Reject** the claim that existing columns fully supply the mapping. Draft an explicit logical judgment/assessment reference, evidence references, reasons, outcome and rule/template versions; distinguish the report's as-at transition from the decision it describes. Then assess whether existing storage can represent that contract | Negative/no-state-change judgment can be traced without inventing a transition or treating arbitrary JSON as a specified schema; report text agrees with the referenced assessment |
| 6 — report supersession | supersedes_report_id is optional and checked against the same article. A later analysis does not by itself prove a new report replaces the previous report or that it shares the same article identity | **Approve-with-conditions.** State when a new report supersedes an earlier report versus merely records another assessment. Check the manual-trigger identity contract before selecting the link; never force a cross-article supersession unsupported by the FK check | Prior report remains intact; supersession has an explicit meaning and valid same-article linkage where used |
| 7 — publication | The table defaults publication_status to Pending and says negative result authorizes no publication row. Audit/result rows and authority to execute publication are different facts; prior publication may already exist | **Approve-with-conditions.** Negative judgment authorizes no new publication action. Preserve existing publication history; describe the actual delivery attempt/result separately, including no attempt, pending, success or failure where governed. Do not reset historical delivery to Pending | Approved never proves Published; a negative new analysis neither fabricates nor erases publication history |
| 8 — D-30 | The paste retains every candidate from the old audit Fn_Spec §9. D-52 already absorbed the column set and FK action into S1, routed append-only enforcement to infrastructure and retained board-query work for S3 | **Reject** wholesale resurrection of that list. Use D-52 and later applied evidence as the candidate baseline; identify only choices still unresolved for these mappings. Board rendering needs a named undetermined choice before another UX specification is justified | No new document repeats settled schema/infrastructure work or merely restates progress/report semantics |

### Minimal Lane A drafting sequence

First correct authority and negative-outcome framing (rows 1–2). Then supply one progress table
with mutually exclusive predicates, evidence-selection rules and historical/current distinction
(rows 3–4). Next supply the report-to-assessment/evidence map, including non-transition outcomes
and supersession meaning (rows 5–7). Finally apply the current D-30/D-52 residual filter (row 8).
Keep Product ownership of FR/AC identities; elaborate behavior in the existing Fn_Specs through
the authorized packet. A stored field is implementation evidence, not a substitute for those rules.

Suggested negative tests: partially sealed evidence cannot match two progress rows; joined but
incomplete approval evidence cannot appear approved; invalidated evidence cannot count as current;
negative judgment creates no automatic state return; a report referencing the wrong assessment
cannot pass; a cross-article supersession is refused; fresh analysis cannot inherit approval;
historical publication remains visible. These elaborate existing R159/R160 acceptance needs,
without assigning new IDs or assuming new schema is required.

### Source/view and lifecycle corrections

The storyboard's historical sequence/flow diagrams remain evidence of the old model. Any current
story panel/UML/data-flow rendering must consume the corrected tables above; it cannot decide
missing behavior merely by drawing arrows. Encyclopedia Entries 01/04/05 remain impact candidates;
hosted content was not verified. No separate diagram file is justified by the present evidence.

The pasted “terminal B-072–B-076” conclusion must not be used for promotion: the source headers
previously inspected carry Applied and deliberately distinguish anchors from verification.
This review does not perform their outstanding per-entry acceptance review. Preserve B-078's
bounded Verified disposition and B-077's Answered/no-Resolution state. A committed decision guide
does not give the whole B-077 entry an Applied or terminal disposition.

Graph extraction at this review baseline matches `6324582`; source and graph coverage checks
do not certify these proposed behavioral tables. Also correct this review's earlier graph wording:
`merge7.js --verify-only --all` proves absence of conflicting fragment fields, not full runtime
parity or source-to-description accuracy. Those require their own comparisons. No growth in node
count alone proves every curated node survived. Continue reporting these evidence limits.

Only this existing handoff receives the review. Governing specifications, schema and graph remain
unchanged. Lane A must finish the concrete draft before presenting a bounded application offer;
this review does not authorize the paste's proposed immediate two-Fn_Spec write.

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | R159/R160 functional-first approach | Retained; no automatic new technical/UX artifact | Correct tables in dependency order |
| **Reject** | Proposed tables as application-ready | Authority, negative-state, predicate and report-binding defects remain | Rows 1–7, then independent draft review |
| **Approve-with-conditions** | D-30 omission of redundant specifications | Must use D-52/current evidence, not the stale candidate list | Row 8 residual assessment |
| **Defer** | Source application, lifecycle promotion and implementation | No new authority or completion established | Bounded authorization and per-item independent verification |

## T5 judgment-gate hierarchy — Judge clarification and decision guide (2026-09-06)

**Clarification received:** T5-REVIEW belongs within a judgment-gate; T5-FINAL is a child example
within that judgment structure. Editorial workflow and the separate assurance flow must remain
distinct. This refines the existing R183/R159/R160 packet; no new handoff or feature is raised.
Reviewed baseline `2b75844`. The target naming remains subject to the existing application
boundary: D-189 records disclosure, while Units 1/2 adoption remains separately authorized.

### Proposed parent contract for Lane A to consolidate

Use **T5 judgment-gate** as the parent already named by the corrective plan. Within that parent,
T5-REVIEW identifies reviewer judgment act(s), and T5-FINAL identifies the human final judgment
act. This does not infer that a particular virtual reviewer owns or authorizes the human act,
or allocate a second parent identifier. If a diagram groups the whole review under a review
heading, distinguish that heading from the existing route-selected T5-REVIEW act identifier.

| Layer | Meaning | Required distinction |
|---|---|---|
| T5 judgment-gate parent | Rules for assessing required evidence and recording an editorial outcome | Assessment can identify missing evidence or a negative result; assessment performed does not mean approval achieved |
| T5-REVIEW child act(s) | Route-selected virtual reviewers record their judgments and evidence | A reviewer judgment cannot substitute for the final human judgment |
| T5-FINAL child act | Chief Editor records the final human editorial judgment; EDITORIAL_DISPOSITION records its outcome | Positive approval, negative result and incomplete assessment have different effects under the existing draft |
| Editorial workflow support | Runs tasks, waits for evidence, seals/joins the bundle, exposes the permitted UI information, and invokes publication after approval | The deterministic join judges nothing. Its Drafted → Reviewed effect is readiness; human positive judgment owns Reviewed → Approved; Delivery separately records publication |
| Future assurance flow | T6/PBL-01's separately scoped capability | It is beyond V1; human editorial approval is not an assurance flow merely because it occurs after agent work |

The above is a containment and responsibility map, not a replacement execution sequence. Preserve
the existing preliminary-judgment → permitted reveal → final-decision ordering when drafting the
workflow. Merely drawing all child acts under T5 cannot waive blind-review or Line controls.

### Accept/reject decisions, parent first

| Order | Question for the decision packet | Recommendation | Lane A deliverable / success criterion |
|---|---|---|---|
| 1 — parent meaning | Accept T5 as the judgment-gate containing reviewer and human-final acts? | **Approve** the clarification | One parent definition in the proposed contract; T5-REVIEW and T5-FINAL have explicit child purposes. No new gate, actor or authorization is inferred |
| 2 — workflow relationship, depends on 1 | Accept that routing/join/display support the judgment-gate but do not themselves decide newsworthiness? | **Approve** | Name each actor, evidence input, judgment record and workflow effect. Join readiness cannot appear as final approval |
| 3 — outcomes, depends on 1–2 | Preserve the clarified V1 outcome behavior? | **Approve** | Pre-join incomplete remains Drafted; post-join incomplete or negative remains Reviewed with findings; positive final judgment permits Approved; negative permits no automatic return or publication, with manual whole-article re-trigger available |
| 4 — R159/R160, depends on 2–3 | Are current progress/report tables sufficient after merely renaming headings? | **Reject** | Supply disjoint progress predicates and explicit report-to-assessment/evidence links; retain the prior review's replay, supersession and publication-history corrections |
| 5 — artifact decision, depends on 4 | Does this hierarchy require new technical/UX/UML files? | **Reject** an automatic requirement | Complete behavior in existing functional owners; use D-30/D-52 to justify only remaining technical/UI choices. A diagram should reference that contract |
| 6 — application/closure, depends on the complete packet | Does acceptance of this clarification authorize source application or close B-071? | **Defer** | Lane A supplies literal proposed replacements and clause dispositions, then obtains the bounded application act; independent review verifies the result |

### Cross-reference checklist for the existing occurrence ledger

Product stories/FRs/ACs must use the same parent/child meanings as FN-GATES §11.1. RACI must
attribute each child act to its own executor and accountability context, keeping Line classification
separate from judgment-gate identity. FN-AUDIT-VISIBILITY must distinguish progress, human outcome
and report provenance; FN-PUBLICATION consumes the approved disposition and records Delivery.
Corrective-plan and Build Spec proposed completion text must identify the readiness join and human
final act without equating them. Historical storyboard A5/A6 and Mermaid diagrams remain dated
evidence; a current story panel/UML/data-flow view must label containment separately from execution
order and trace back to the owning behavior. Hosted Encyclopedia content remains unverified;
Entries 01/04/05 are impact candidates, not evidence that the target is already published.

**Failure checks:** a sealed reviewer judgment alone cannot produce human approval; the join cannot
claim a judgment; a negative recorded result cannot be rendered Published or trigger an automatic
return; a future T6 capability cannot become a V1 approval prerequisite; a report must cite the
actual assessment and evidence rather than infer an outcome from a gate name.

Only this handoff is updated. Graph extraction was observed at `6324582` against baseline
`2b75844`, so graph currency is behind and no fresh semantic verification is claimed. Active Lane A
owns synchronization before a consuming approval; this packet remains a draft for governed tiers.

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | T5 parent/child clarification | Captured in the existing handoff | Lane A literal contract and occurrence mapping |
| **Approve-with-conditions** | R159/R160 progress and report drafting | Must derive from the judgment/workflow distinction | Complete predicates, evidence bindings and tests |
| **Reject** | Automatic new gate/specification or assurance dependency | No such scope follows from this clarification | Apply the existing D-30/D-52 filter |
| **Defer** | Application, graph/Encyclopedia verification and closure | Not established by clarification acceptance | Bounded authorization and independent evidence |

## Review of revised R159 predicates and R160 supersession (2026-09-06)

**Request restated:** review the revised pasted packet, preserve corrected T5 hierarchy and V1
scope, and identify the smallest remaining drafting work before a Judge application decision.
Baseline `0cb6e2d`; existing R159/R160 remain the owners. This section supplements the previous
review without creating new IDs, source edits or a duplicate handoff.

The corrected source attribution, negative result remaining Reviewed, Applied lifecycle boundary
and separation of graph evidence are accepted. T5 is the judgment-gate parent; reviewer and human
final judgments are its child acts. The workflow supports them and separately executes Delivery.
Future assurance remains outside V1. Logical report references are an improvement over assuming
that a database column already defines their meaning.

### Parent-first decision table

| Order | Remaining gap / evidence | Accept or reject recommendation | Concrete corrective draft and success criterion |
|---|---|---|---|
| 1 — R159 input contract | Only S explicitly excludes invalidated/earlier evidence. J, E and H are not bound to the same selected assessment and evidence version. A positive H is matched before readiness checks | **Approve-with-conditions** the derivation approach; **reject** completeness as written | Bind the route requirements, seals, join, approval-evidence evaluation and human result to the same assessment/evidence revision. An older positive remains historical and cannot authorize the current revision. Conflicting references produce a disclosed inconsistency with no new approval effect, not a fabricated article-state change |
| 2 — R159 predicate domain, depends on 1 | First-match priority gives one selected result, but does not make predicates disjoint or validate inputs. S/R are ambiguous as counts versus sets; duplicate seals, missing required roles and an empty/missing route contract are not covered | **Reject** the “disjoint and total” proof | Define the required act set and its valid sealed subset; coverage means each required act has its matching valid seal, not merely equal counts. Define a valid-input domain, explicit precedence and an incomplete/invalid-input fallback. Test duplicate seals for one reviewer while another is missing; missing route requirements must never imply readiness |
| 3 — R159 positive/history, depends on 1–2 | H=positive alone can hide incomplete/currently invalid evidence; the table's State column can also be misread as resetting a Published article to Approved | **Approve-with-conditions** | Distinguish historical recorded judgment, current approval eligibility and actual article/publication state. Require the applicable valid join and approval evidence before current positive eligibility. Preserve Published/delivery history; rendering progress writes no state. Test positive history with a different current assessment, and positive history after publication |
| 4 — R160 supersession, depends on 1 | “Re-decides the same assessment” contradicts corrective-plan §15.4's exactly-one-outcome contract and §16.2 AC-08e's replay rule | **Reject** that supersession definition | Proposed minimum: a changed judgment uses a new assessment; replay retains the existing outcome. Report supersession replaces a report representation only under an explicit rule, preserving its source judgment and prior report. A new assessment receives its own report and does not automatically supersede another. Same-article FK validity alone does not define the replacement policy |
| 5 — R160 feasibility, depends on 4 | Logical references are now named, but mapping them to actual stored evidence, including a negative judgment with no state change, remains untested | **Defer** storage sufficiency, not functional drafting | Supply a field-to-source table: assessment, judgment, evidence, reasons, outcome, rule/template versions, as-at transition, and report lineage → existing source or an explicit gap. Prove a negative judgment can be traced without inventing a state transition. Do not assume JSON snapshot content or allocate a schema change from this review |
| 6 — D-30/D-52, depends on 2/4/5 | D-52 is readable; “not yet read” is a task dependency, not a missing Judge decision. Board rendering is not proven to be the only residual while report feasibility remains open | **Approve** proceeding with the residual assessment now | D-52 has been read in full for this review: schema/FK candidates absorbed in S1; append-only enforcement is infrastructure; board query/index strategy remains S3; transition/publication/exception specs have their existing owners. Compare later evidence and the completed field map before claiming zero additional technical work. Rendering requires a named unresolved UI choice to justify a UX section |

### Minimal behavioral text for Lane A's next draft

“Progress is derived from the selected assessment and the required evidence for its route. All
inputs used together identify the same assessment and evidence revision. A seal for one required
act cannot satisfy another. Missing or inconsistent inputs cannot establish readiness or approval.
Earlier judgments remain visible as history and confer no approval on a fresh analysis. Displaying
progress does not change article or delivery state.”

“An assessment has one recorded final outcome. Replaying that outcome adds no approval or delivery
effect. A different judgment belongs to a new assessment. A report identifies the assessment,
judgment and evidence it describes. Replacing a report does not re-decide that judgment; any
permitted report replacement preserves the previous report and its provenance.”

These are proposed corrections, not newly applied requirements. Lane A can draft them and the
field map without another general business clarification. If a genuinely new report-replacement
policy is needed, present its exact scope and alternatives after completing the available mapping;
do not treat such a policy as already supplied by supersedes_report_id.

### Views, evidence and handoff

Product FR/AC anchors remain the parents for functional elaboration. FN-GATES owns readiness and
judgment behavior, FN-AUDIT-VISIBILITY owns progress/report interpretation, and FN-PUBLICATION
owns Delivery effects. Current story panels, UML sequences and data-flow views must distinguish
selected assessment, recorded outcome and separate publication result. Historical journal
sequence/flow diagrams stay historical; the known Encyclopedia URL still requires direct reading
before hosted parity can be claimed. No new view artifact follows automatically from this work.

Graph extraction was checked at `0cb6e2d`, matching this review baseline. This does not prove
runtime curated parity or semantic-description completion, neither of which is claimed here.
The handoff commit will move HEAD; Active Lane A synchronizes before consuming graph evidence.
Only this existing handoff changes; all proposed functional edits await the bounded application
process. B-071/B-077 lifecycle and current build holds remain in place.

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Corrected parent/child and negative-outcome model | Preserved | Carry into literal functional draft |
| **Approve-with-conditions** | R159 derived progress | Input binding, valid domain and historical-state distinction missing | Rows 1–3 and counterexample tests |
| **Reject** | R160 same-assessment re-decision rule | Conflicts with one-outcome/replay semantics | Row 4 correction, then field feasibility map |
| **Approve** | Continue D-52 assessment | Reading dependency resolved; no new Judge act needed to draft | Row 6 with later evidence |
| **Defer** | Source application and closure | Draft still incomplete | Complete mappings, bounded authorization and independent review |

## Review of R159/R160 storage claims (2026-09-06)

**Request restated:** independently review the latest field map and negative-judgment claim,
then give Lane A the smallest parent-first correction packet. Baseline `ca51529`. R159/R160
remain the existing owners; no new finding, artifact or business authorization is created.
Only this handoff changes. Application code, migrations, governed tiers and lifecycle fields
remain untouched. Closure requires authorized source application and independent evidence,
not acceptance of a pasted draft.

### What is accepted, and what the evidence actually establishes

Preserve the revised same-assessment/evidence binding, set-based act coverage, separate historical
judgment/current eligibility/article state, and one final outcome per assessment. A changed
judgment needs a new assessment; replay cannot add approval or Delivery effects. These address
the previous review's conceptual objections, but do not establish storage sufficiency.

The claim **“negative-judgment traceability: tested, and it fails … proven” is not established**
by the cited constraints. In `0002_s1_editorial_schema.sql:234`, NOT NULL rejects a null
destination; it does not require a different destination. The no-op refusal is in
`enforce_article_state_transition` and its trigger is **before UPDATE OF workflow_state ON
articles** (`:311`, `:409`), not before an audit-ledger INSERT. The ledger's append-only trigger
at `:254` rejects UPDATE/DELETE, not INSERT. This is source inspection, **not a database runtime
test**, and it proves neither that the proposed event is authorized nor that its full write path
works. T10/T11's presence is not authority to relabel either as T5-FINAL.

`editorial_reports.snapshot` already provides a JSON object container (`:459`–`:475`); its
existence does not supply a validated assessment/evidence/outcome contract. Likewise, a text
reason is not proof that multiple reasons cannot be represented. Classify these as **unmapped
logical fields / validation unproven**, not proven absence of storage capacity. The actual
current state column is **`articles.workflow_state`**, not `articles.state` (`:113`).

### What Lane A needs to do — existing findings, parent first

| Order / owner | Corrective draft | Success criterion / Judge decision |
|---|---|---|
| 1 — R160, Lane A | Withdraw the runtime-failure claim; distinguish audit-event insertion, article-state mutation and report anchoring. Retain negative judgment without approval or automatic return | **Reject** the alleged proof, not the negative-outcome requirement. A failing state UPDATE cannot be offered as proof that a no-state-change audit INSERT fails |
| 2 — R160, depends on 1 | Complete the logical contract now: assessment identity/revision, judgment identity, immutable evidence references or captured values, reasons and outcome. Mark each existing storage candidate, missing mapping and required validation separately; explicitly consider the existing snapshot container without assuming it is sufficient | **Approve** continued functional drafting without a new general Judge decision. Every logical field has a meaning and an identified mapping question; no missing column alone authorizes a migration |
| 3 — R160, depends on 2 | Separate the report's **as-at state-history anchor** from the **judgment it describes**. Assess whether a prior genuine transition plus an explicit immutable judgment binding is adequate, or whether a separately defined non-transition event is needed. Do not invent a state transition or reuse an unrelated event type | **Defer** storage sufficiency until the proposed complete write/read path identifies both references, validates same article/assessment/evidence, and preserves the negative result with unchanged article state. If no existing representation meets it, name the precise residual technical choice and owning tier |
| 4 — R159/R160, depends on 2–3 | Finalize the D-30/D-52 filter after the mappings, not before. Preserve existing S1/S3 and publication/exception owners; test later requirements against what S1 actually determines | **Reject** “one residual, assessment complete” while mappings remain unresolved. No automatic new tech/UX artifact; any retained candidate names a choice not already determined by functional behavior |
| 5 — Lane A, depends on 4 | Supply literal owning-tier edits and the occurrence crosswalk for Product anchors, FN-GATES readiness, FN-AUDIT-VISIBILITY progress/report interpretation and FN-PUBLICATION effects. Reconcile current story panels, UML/data-flow views against that text; cite historical journal diagrams as history | **Defer** application until the bounded packet is complete. T5 reviewer evidence, join readiness, final human outcome and Delivery remain distinguishable in every consuming view; future T6 adds no V1 dependency |

### Verification and handback

The planned negative-path test must name the proposed event/report writes, expected unchanged
article state, retained reasons/outcome, retrievable assessment/evidence, and replay without
additional approval or Delivery. A no-op state UPDATE must still be refused. Do not run a build
or allocate a schema change from this review; obtain the bounded authorization for any later
implementation/testing unit. Report replacement remains a distinct policy question if proposed,
not something the same-article foreign key decides.

Graph extraction metadata matches baseline `ca51529`, with `stale: false`. This is extraction
currency only, not curated semantic parity. Hosted Encyclopedia parity remains unverified;
the local sync ledger is not a substitute for comparing the hosted content. A handoff commit
advances HEAD; Active Lane A owns final synchronization before consuming graph evidence.
No new Lane C work or lane transition follows. Register, Build Spec, Inventory and Product
Requirements are unaffected by this review-only handoff; their future write set must be stated
in Lane A's application packet rather than silently applied here.

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | R159/R160 conceptual corrections | Preserved, not applied requirements | Literal functional draft |
| **Reject** | R160 proven storage-failure claim | Cited trigger governs a different operation | Correct evidence and field classification |
| **Approve-with-conditions** | R160 storage plan / D-30 filter | Mapping and anchoring remain unproven | Complete the write/read contract and residual assessment |
| **Defer** | Source application, Encyclopedia parity and B-071 closure | Not established by this review | Bounded application, synchronization and independent verification |

## Lane A consolidation for Lane B review — storage-candidate mapping (2026-09-06)

**Baseline `4b0082c`; Graphify resynchronized to that revision before drafting (`docs-drift`
synced, 17/17 local checks pass). No governed tier, spec, fragment, schema or application file
is changed by this section.**

### 1. Withdrawal

**Lane A's claim that a negative judgment is "tested, and it fails" to be storable is withdrawn
as unsupported.** Re-verified directly against the migrations:

- `articles_enforce_state_transition` is a trigger on **`articles`**; it reads
  `old.workflow_state`/`new.workflow_state` and refuses a no-op **article-state update**. It
  says nothing about inserting an audit record.
- `workflow_transitions_append_only` fires **before UPDATE or DELETE only**. INSERT is not
  constrained by it.
- No check constraint forbids `from_state = to_state` on `workflow_transitions`, and
  `workflow_transitions_v1_write` is permissive.

A `Reviewed → Reviewed` ledger row is therefore **insertable**, and
`editorial_reports.as_at_transition_id` can anchor to it. The earlier reasoning conflated
`to_state not null` — which forces *a value*, not a *change* — with impossibility of recording.
**Storage sufficiency is unverified, not disproven.**

### 2. Storage candidates, named explicitly

| Logical field | Existing source or candidate | What remains unverified |
|---|---|---|
| Assessment identity + revision | No column exists. Candidates: (a) a non-transition ledger row as the assessment anchor; (b) a distinct assessment relation | `allowed_transitions` carries `T10`/`T11` as `non_transition` with null from/to, while the ledger requires `to_state`. No catalog rule yet describes the row shape (a) would use |
| Evidence references | No review-evidence source. `trend_signals.evidence_url` is point-in-time signal evidence (`D-114`), not T5 review evidence. Candidates: (a) `editorial_reports.snapshot` under a declared schema; (b) a distinct evidence relation | `snapshot` is constrained only to `jsonb_typeof = 'object'`; no declared evidence schema exists. Arbitrary JSON is not a specified contract |
| Reasons | `workflow_transitions.reason` (single `text`) | Adequate for one reason; representation of a reason **set** is unverified |
| Outcome | `articles.workflow_state` for state-changing outcomes; the ledger row itself for a negative outcome | Storable (§1). Its **meaning** has no catalog rule — storable is not the same as governed |

No schema change is allocated by this section. Each row names a candidate and its open question.

### 3. State-history anchor is not the judgment reference

`editorial_reports.as_at_transition_id` is currently made to serve two distinct purposes: the
**state-history anchor** (where the article stood) and the **judgment the report describes**.
For a state-changing approval these coincide, which is why the conflation went unnoticed. For a
negative judgment they diverge: state history does not move, yet a judgment exists.

**Proposed correction:** `as_at_transition_id` denotes the state-history anchor **only**; the
report carries a **separate, explicit judgment reference**. Whether that is a new column, a
second reference into the same ledger, or another representation is a storage question — named
here, not decided.

### 4. Technical residual, against `D-52`

**Omit as settled:** schema/FK candidates absorbed in S1; append-only enforcement as
infrastructure; board query/index strategy retained for S3; transition, publication and
exception specifications under their existing owners.

**Retain, functional owner first:** (i) the anchor/judgment separation in §3; (ii) the
assessment and evidence representation choice in §2. **Board rendering still has no named
unresolved UI choice, so no UX section is justified** under `D-30`/`D-52`.

### 5. Success criterion and the verification Lane B can run

A negative judgment is traceable **while `articles.workflow_state` is unchanged and no approval
or publication effect occurs**. Concretely: insert the ledger row for the negative act; anchor a
report to it; assert `workflow_state` unchanged; assert no `publications` row is created and no
`publication_targets` precondition is engaged — that precondition binds `Approved` only.
Conceptual corrections carried forward unchanged from the prior sections: T5 judgment-gate
parent with T5-REVIEW and T5-FINAL child acts; negative result remains `Reviewed`; one recorded
outcome per assessment, a changed judgment requiring a new assessment; set-based coverage rather
than equal counts; and progress rendering that writes no state.

**This commit advances HEAD. Active Lane A resynchronizes Graphify before any consuming
approval.** Nothing here is applied to a governed tier; `B-077`'s `Answered`/no-`Resolution`
lifecycle and the `B-071` holds are unchanged.

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Withdrawal of the proven-failure claim | Corrected against the migrations | Preserved in the functional draft |
| **Approve** | Anchor / judgment-reference separation | Named as the surviving defect | Owning-tier text after the storage question |
| **Approve-with-conditions** | Storage-candidate map | Candidates named; none verified | Feasibility check, then literal draft |
| **Reject** | Any schema allocation from this section | Not established, and not this section's authority | Functional owner decides first |
| **Defer** | Application, Encyclopedia parity, `B-071` closure | Draft incomplete pending §2/§3 | Bounded authorization and independent review |

## Independent review of Lane A's storage consolidation (2026-09-06)

**Request restated:** review the consolidation at `e14163f`, clarify record separation versus
schema allocation, and give Lane A a parent-first decision guide. Existing R159/R160 own this
follow-up; no new findings or lifecycle claims are created. Scope is the handoff draft only.

### Accepted correction and remaining gap

Accept withdrawal of the claimed database impossibility. The cited no-op article UPDATE
restriction does not forbid an equal-state audit INSERT. However, “nothing constrains an
INSERT” is too broad: required fields, types and foreign keys still apply. No runtime test of
the complete proposed record/report path is supplied here. Storage plausibility is not a
verified judgment contract, and a ledger row alone does not identify a negative outcome.

The consolidation's **§3 and §5 disagree**. §3 proposes that as_at_transition_id means only
the state-history anchor, distinct from the judgment reference. §5 then anchors the report
to the newly inserted negative-judgment row. That test cannot prove the proposed distinction
unless it explicitly represents and validates both meanings. D-111 §3a specifies an as-at
transition anchor and frozen snapshot; it does not establish the claimed existing dual-use
defect. Describe dual use as a risk in the proposed mapping unless a current consumer is cited.
The migration's same-article validation does not supply the missing semantic rule.

### Decision guide — parent first, children depend on the preceding contract

| Order | Lane A next step | Judge recommendation and success criterion |
|---|---|---|
| 1 — functional meaning, R160 | Draft the report's state-history context and explicit judgment identity/outcome independently of storage. Preserve assessment/evidence binding and replay rules | **Approve** logical separation. A reader can identify what was judged, its negative/positive result and the article state at that time without inferring judgment from equal state values |
| 2 — anchor contract, depends on 1 | Make §3 and §5 consistent. If retaining §3's proposal, the test uses the genuine state-history anchor and a separately identified negative judgment. If proposing an event-context anchor instead, explicitly state that alternative and its impact on D-111; do not silently substitute it | **Approve-with-conditions** the state-history-plus-judgment draft; **reject** the current inconsistent test. The same example must satisfy both the written contract and its acceptance test |
| 3 — representation, depends on 1–2 | Complete the candidate map, including the versioned snapshot/template contract already contemplated by D-111 §3b. Name assessment identity before final outcome, evidence capture, reasons, judgment outcome and validation. Compare existing representations before proposing new relations | **Defer** storage selection, not functional drafting. No requirement for a new table, column or physical partition follows merely from distinct meanings; proposed fields have a defined creation/read/replay lifecycle |
| 4 — residual routing, depends on 3 | Keep existing D-52 owners; distinguish already-settled S1 concerns from newly unmapped behavior. Name only technical choices still undetermined by the completed functional text | **Reject** an unconditional “residual closed” while representation remains unresolved. “Functional owner first” means Lane A drafts behavior before technical allocation, not that SQL design must precede literal functional text |
| 5 — consuming documents, depends on 4 | Finish the literal Product-anchor/FN-GATES/FN-AUDIT-VISIBILITY/FN-PUBLICATION mapping and existing storyboard, story-panel, UML and data-flow occurrences; identify current versus historical views | **Defer** application and parity claims until this packet is supplied. Journal/Encyclopedia references do not replace owning requirements; no new UX artifact is justified without a named residual UI choice |

Here **record separation** means distinguish assessment, judgment, state history and report
provenance. **Physical database partitioning** is a separate implementation choice; this
request supplies no partitioning requirement or authorization. Existing candidates are options,
not migrations. No generic schema allocation is approved by accepting this review.

### Test correction and handback

The proposed future test must retrieve the explicit negative result, reasons, assessment and
evidence from the report, validate both references under the chosen anchor rule, and compare
article state and publication effects before/after. Use article-scoped deltas rather than
requiring an empty publications table. Replay adds no outcome, approval or Delivery effect;
wrong-article or wrong-assessment references must not pass. Also preserve the separate no-op
state-UPDATE refusal. No database mutation or runtime feasibility test was performed this turn.

Baseline graph metadata is `e14163f`, `stale: false`: extraction current, not proof of curated
semantics or hosted Encyclopedia parity. This handoff advances HEAD when committed; Active
Lane A synchronizes before consuming graph evidence. Register, Build Spec, Inventory, Product
Requirements, functional/technical specs and application code are unaffected by this review.
B-077 remains Answered with no Resolution; B-071 closure and all build holds are unchanged.

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | R160 withdrawal | Unsupported impossibility claim removed | Preserve |
| **Approve-with-conditions** | R160 logical separation | Contract and test must use the same anchor semantics | Steps 1–2, then candidate mapping |
| **Reject** | R160 test completeness / unconditional D-52 completion | Unresolved reference and representation semantics | Steps 3–4 |
| **Defer** | Schema allocation, source application, Encyclopedia parity, B-071 closure | Not authorized or verified here | Complete packet, bounded authorization and independent verification |

## Lane A: reference contract and aligned acceptance test (2026-09-06)

**Baseline `41a4f44`; Graphify resynchronized to that revision before drafting (`docs-drift`
synced, 17/17). No governed tier, spec, schema or application file changes here.**

### 0. Two corrections to the prior section

**The §3/§5 contradiction is accepted.** §3 proposed that `as_at_transition_id` means only the
state-history anchor, then §5 anchored the report to the newly inserted negative-judgment row.
That test uses the judgment as the anchor, so it cannot demonstrate the separation it was
written to prove. Corrected in §2 below.

**"Existing dual-use defect" is withdrawn as a claim about the current system.** `D-111`
(§5.14br, gaps `GA1`/`GA3`/`GA4`) approved the report record shape *including* the as-at
transition anchor and the frozen snapshot; it does not establish dual use, and no current
consumer is cited. **Dual use is a risk in the proposed mapping**, not an observed defect.
Likewise "nothing constrains an INSERT" was too broad — required fields, types and foreign keys
still apply, and no runtime test of the record/report path has been run.

### 1. Functional meaning, stated independently of storage

The report carries three separable meanings:

| Meaning | What it fixes | Source contract |
|---|---|---|
| **State-history context** | the article's state at the time the report was produced | `D-111` §3a as-at transition anchor |
| **Judgment identity and outcome** | which assessment was judged, by whom, and the result — with reasons and evidence | to be drafted; not derivable from the anchor |
| **Report provenance** | template, rule-set and schema versions, and the frozen snapshot | `D-111` §3b |

**Success criterion:** a reader identifies what was judged, its negative or positive result, and
the article state at that time **without inferring the judgment from equal state values**.

### 2. Anchor contract, and the test aligned to it

`as_at_transition_id` retains `D-111` §3a's meaning — **state-history context**. The judgment is
identified **explicitly**; it is never derived from the anchor. Whether the two references
resolve to the same ledger row is then a property of the case, not a rule:

- **Positive judgment that moves state** — anchor and judgment may reference the same row.
- **Negative judgment, no state change** — the anchor is the transition that last set `Reviewed`
  (the readiness join); the judgment is the separately identified negative act.

This is a **record-meaning separation, not physical partitioning**. It requires no new table and
no partition, and this section allocates neither.

**Corrected acceptance test.** Represent *both* references explicitly, then:

1. Retrieve from the report the explicit negative result, its reasons, the assessment and the
   evidence — none inferred from state.
2. Validate both references under the anchor rule above: anchor resolves to the readiness join;
   judgment resolves to the negative act; the two are distinct **in this case**.
3. Compare **article-scoped deltas** of article state and publication effects before and after —
   not an empty `publications` table.
4. Replay adds no outcome, approval or Delivery effect.
5. Wrong-article and wrong-assessment references must not pass.
6. The separate no-op state-UPDATE refusal remains in force and is not relaxed.

### 3. Representation candidates, compared before proposing relations

Ordered as the review requires — assessment identity before final outcome, then evidence
capture, reasons, judgment outcome, validation. For the explicit judgment identity:

| Candidate | Lifecycle | Assessment |
|---|---|---|
| (a) A declared field inside the existing frozen `snapshot`, under `D-111` §3b's versioned schema contract | created and frozen with the report; replay-safe by construction | **Assess first** — uses an existing, already-approved contract; adds no relation. Open: `snapshot` is constrained only to `jsonb_typeof = 'object'`, so the declared schema is the work |
| (b) A second explicit reference into `workflow_transitions` | created with the report; FK-validatable and directly queryable | Viable; it is a column, not a table. Open: whether validation should be structural or behavioural |
| (c) Derive the judgment from the anchor | — | **Rejected** — this is the conflation itself |

**Storage selection is deferred, not the functional drafting.** No requirement for a new table,
column or partition follows merely from distinct meanings.

### 4. Residual routing — the unconditional closure is withdrawn

**"Residual closed" is withdrawn while representation is unresolved.** `D-52`'s settled S1
concerns remain settled — schema/FK candidates, append-only enforcement as infrastructure, board
query/index strategy at S3, and the transition/publication/exception specs under their existing
owners. Newly unmapped behaviour — assessment identity, evidence capture, judgment-outcome
representation — is **not yet routed**, because a technical choice can only be named as
undetermined once the functional text that would determine it exists. "Functional owner first"
means Lane A drafts behaviour before technical allocation; it does not mean SQL design precedes
the literal functional text. Board rendering still has no named unresolved UI choice.

### 5. Consuming documents still to map

Product `FR`/`AC` anchors remain the parents. `FN-GATES` owns readiness and judgment behaviour,
`FN-AUDIT-VISIBILITY` owns progress and report interpretation, `FN-PUBLICATION` owns Delivery
effects. Storyboard, story-panel, UML and data-flow occurrences must be marked **current versus
historical** — the journal's A5/A6 panels and Mermaid diagrams stay historical evidence of the
superseded order. Hosted Encyclopedia content is unread; Entries 01/04/05 remain impact
candidates. **No new UX artifact is justified without a named residual UI choice.**

**This commit advances HEAD; Active Lane A resynchronizes Graphify before consuming approval.**
`B-077` remains `Answered` with no `Resolution`; `B-071` closure and all build holds unchanged.

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | §3/§5 contradiction corrected; contract and test now share one anchor semantics | Same example satisfies both | Independent review |
| **Approve** | Withdrawal of the "existing dual-use defect" framing | Restated as a mapping risk, per `D-111` | Preserved |
| **Approve-with-conditions** | Reference contract §§1–2 | Logical separation drafted; judgment representation unselected | Candidate comparison |
| **Reject** | Unconditional `D-52` residual closure | Withdrawn — representation unresolved | Route after functional text |
| **Defer** | Storage selection, application, Encyclopedia parity, `B-071` closure | No schema allocated; no runtime test run | Bounded authorization and independent verification |

## Independent acceptance of the corrected reference draft (2026-09-06)

**Request restated:** review Lane A's reference contract at `e6713d0` and identify the next
bounded drafting unit, without reopening settled objections. Existing R159/R160 remain owners.
Only this handoff changes; no governed-source application, schema selection or build is authorized.

**Accepted:** the negative-case example now separates the readiness/state-history anchor from
the negative judgment and tests both. The unsupported existing-defect claim and unconditional
residual-closure claim are withdrawn. Preserve these corrections; no further general Judge
clarification is needed to continue functional drafting. The example is a negative assessment
while the article remains Reviewed, not a universal rule for every later report. Any later report
must state its as-at context explicitly rather than silently treating an older anchor as live state.

**One remaining evidence correction:** candidate (a)'s “replay-safe by construction” does not
follow from freezing a snapshot. `editorial_reports` in `0002_s1_editorial_schema.sql:459` has a
generated primary key and append-only protection, but those do not establish assessment-level
replay handling. Multiple immutable inserts are not prevented merely by immutability. This is
a missing proof, not a demand for a new uniqueness constraint or a claim of runtime failure.
Keep the existing one-outcome/no-additional-approval-or-Delivery rule; do not infer a new
one-report-per-assessment restriction from it. Report replacement is a separate operation.

### Lane A's next unit — deliver together, parent first

| Order | Concrete drafting action | Accept/reject test |
|---|---|---|
| 1 — R160 behavior | Carry the accepted reference meanings into literal functional text; name assessment creation, explicit judgment/result, frozen evidence/reasons and replay behavior. Replace “replay-safe by construction” with “immutable; replay handling requires explicit validation” | **Approve** drafting now. The contract describes what is retrieved and what retry must not repeat without assuming a storage mechanism |
| 2 — R159/R160 occurrences, depends on 1 | In the same packet map each proposed clause to its Product FR/AC, owning functional section and consuming story-panel/UML/data-flow occurrence. Include exact replacement or insertion text, and mark historical journal views as historical | **Approve** the occurrence-map task, but **reject** calling it the only remaining work: §1 still calls judgment behavior “to be drafted,” and representation remains unselected. A pointer-only map is not literal owning-tier text |
| 3 — technical residual, depends on 1–2 | Compare snapshot versus explicit-reference candidates against that completed behavior, including how the judgment exists before report production, validation and replay. Retain only undetermined implementation choices under existing owners | **Defer** storage selection until evidence supports it; no automatic new column/table/partition or UX artifact. Structural FK validation alone does not prove correct assessment, outcome or replay semantics |
| 4 — application readiness, depends on 3 | Present the bounded source write set and DoD; distinguish draft approval, source application and independent verification. Keep unread hosted Encyclopedia parity unverified | **Defer** application and closure. The packet must include literal text, occurrence coverage, residual disposition and acceptance tests before consuming approval |

The retry test must exercise the same assessment twice and demonstrate no new final outcome,
approval or Delivery effect, while preserving the original judgment/evidence. It must not pass
merely because each returned report is immutable. These are planned tests; none was executed here.

Graph metadata matches review baseline `e6713d0`, `stale: false`. This verifies extraction
currency only, not curated semantics or hosted parity. A handoff commit advances HEAD; Active
Lane A synchronizes before consuming graph evidence. B-077 remains Answered without Resolution;
B-071 holds remain unchanged. Register, Build Spec, Inventory, Product/functional/technical
specifications and application code are unaffected by this handoff-only review.

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | R160 corrected reference example and withdrawals | Prior contradiction resolved at draft level | Preserve in literal text |
| **Approve-with-conditions** | R159/R160 next drafting unit | Deliver behavior and occurrence map together | Steps 1–2 |
| **Reject** | Snapshot implies replay safety | Immutability is not replay enforcement | Correct candidate wording and test obligation |
| **Defer** | Storage selection, governed application and B-071 closure | Not proven or authorized | Residual disposition, bounded application and independent verification |

## Lane A: literal R159/R160 behaviour and occurrence map (2026-09-06)

**Baseline `f88d855` — pushed this turn; the earlier local-only state is resolved and the remote
now matches. Graphify resynchronized to that revision (`docs-drift` synced, 17/17). No governed
tier, spec, schema or application file changes here.**

### 0. Correction carried in

**"Replay-safe by construction" is withdrawn.** Freezing a snapshot does not establish
assessment-level replay handling: `editorial_reports` has a generated primary key and append-only
protection, and neither prevents multiple immutable inserts. The correct wording, used throughout
below, is **"the record is immutable; replay handling requires explicit validation."** This is a
missing proof, not a demand for a uniqueness constraint. **No one-report-per-assessment
restriction is inferred** — report replacement remains a separate operation.

### 1. Literal behaviour — proposed text

**Assessment.** An assessment is created when a `T5` judgment cycle begins for an article on its
selected route. It carries an identity and a revision. Every seal, join evaluation, evidence
item, judgment and report belonging to that cycle references the same identity and revision.

**Judgment and result.** `T5-FINAL` records a judgment against exactly one assessment, carrying
the deciding actor and authority context, the result, and its reasons. **The result is stated,
never inferred from article state.** An assessment has exactly one recorded final outcome; a
different judgment requires a new assessment.

**Evidence, reasons, provenance.** At report production the evidence and reasons applicable to
the referenced assessment are captured and frozen with the report, together with template,
rule-set and schema versions (`D-111` §3b). The report fixes its state-history context through
the as-at transition anchor (`D-111` §3a). **A report states its as-at context explicitly; an
older anchor is never treated as live state.**

**Replay.** Retrying a completed assessment is permitted and creates **no additional final
outcome, approval transition, delivery request or publication side effect** (`AC-08e`, corrective
plan §16.2). The record is immutable; **replay handling requires explicit validation** — a retry
must resolve to the same assessment identity and revision, the same judgment identity and the
same result, with article-scoped state and publication deltas of zero. Producing a further report
representation is a separate, explicitly governed replacement that preserves the prior report and
its provenance.

**Refusals.** A judgment whose article differs from its assessment's; a report whose judgment
reference and assessment disagree; a retry presented as a new outcome; a negative result rendered
as approval or publication.

### 2. Occurrence map

| Clause | Product anchor | Owning functional section | Consuming view |
|---|---|---|---|
| Assessment identity and revision | `FR-04a`, `AC-22` | `FN-GATES` §11.1 — insert | story panel: cycle start; UML: lifeline origin |
| Explicit judgment and result | `FR-05a`, `AC-08e` | `FN-GATES` §11.1 — insert | UML: `T5-FINAL` message |
| Frozen evidence, reasons, provenance | `FR-07`, `AC-11`, `AC-12` | `FN-AUDIT-VISIBILITY` §4.1 — insert | data flow: evidence → report |
| As-at context stated explicitly | `FR-07` | `FN-AUDIT-VISIBILITY` §4.1 — insert | story panel: report header |
| Replay validation | `AC-08e`; `AC-08a` (`FR-06` return/rerun) | `FN-AUDIT-VISIBILITY` §5 and `FN-GATES` §11.1 — insert | UML: retry path, no new outcome |
| Derived progress (`R159`) | `FR-04a`, `FR-05a`, `AC-22` | `FN-AUDIT-VISIBILITY` §4.2 — insert | story panel: board |
| Delivery separation | `FR-09`, `AC-14a`, `AC-15` | `FN-PUBLICATION` §§4–5, §11 — **unaffected, already owns it** | data flow: approval → Delivery |

**Historical, not edited:** `docs/journal/2026-08-18-storyboard-business-and-digital-twin.md`
Panels A5/A6 and its Mermaid sequence/flow diagrams record the superseded order and stay as dated
evidence. Hosted Encyclopedia content remains unread; Entries 01/04/05 stay impact candidates.
**No new view artifact is justified** — no residual UI choice has been named.

### 3. Candidates compared against that behaviour

The behaviour above makes the decisive question explicit: **where does the judgment exist before
the report is produced?**

| Candidate | Against the behaviour | Open |
|---|---|---|
| (a) Declared field inside the frozen snapshot (`D-111` §3b) | The snapshot is created *at report time*, so it can **record** the judgment reference but cannot be **where the judgment exists beforehand** | Reference validation would be behavioural, not structural; replay comparison reads identities out of the snapshot |
| (b) Explicit reference into `workflow_transitions` | The judgment exists as a ledger row before the report; the reference is structurally validatable and directly queryable | Structural FK validity alone proves nothing about assessment, outcome or replay semantics; it is a column, not a table |

**Neither is selected.** Storage selection stays deferred; no column, table or partition is
allocated, and no runtime test has been executed.

### 4. What remains before application readiness

Literal text for the inserts named in §2 at their owning tiers; the residual disposition once
§3's question resolves; and the executable form of the acceptance tests. Only then a bounded
source write set with its DoD, distinguishing draft approval from source application from
independent verification.

**This commit advances HEAD; Active Lane A resynchronizes before consuming approval.** `B-077`
remains `Answered` with no `Resolution`; `B-071` closure and all build holds unchanged.

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Withdrawal of "replay-safe by construction" | Restated as immutable + explicit validation | Preserved in literal text |
| **Approve** | Literal behaviour §1 with explicit replay handling | Consistent with `AC-08e`; no report-count restriction inferred | Independent review |
| **Approve** | Occurrence map §2, delivered with the behaviour | `FN-PUBLICATION` stated unaffected | Owning-tier insertion text |
| **Approve-with-conditions** | Candidate comparison §3 | Decisive question named; neither selected | Resolve, then route residual |
| **Defer** | Storage selection, application, Encyclopedia parity, `B-071` closure | No allocation, no runtime test | Bounded authorization and independent verification |

## Independent review of the literal behavior packet (2026-09-06)

**Request restated:** review the packet at `02593a1`, preserve its corrections and identify the
remaining work under R159/R160. This is a handoff-only draft review, not source application.
Accept the immutability/replay distinction and explicit outcome/evidence requirements. Do not
reopen the corrected anchor example or allocate another finding ID.

### Parent-first corrective guide

| Order | Remaining issue | Lane A draft action and acceptance criterion |
|---|---|---|
| 1 — R160 representation | §3 compares the location of a report reference with the existence of its target. A snapshot reference cannot create a prior judgment, but neither can adding a reference column | Split the comparison into **judgment record creation** and **report reference encoding**. Both snapshot and typed-reference candidates can point to the same prior record. Name when and how that record receives assessment, actor, result and evidence bindings before comparing reference validation. **Reject** any preference inferred solely from “snapshot is created at report time” |
| 2 — R160 replay mapping | §2 cites `AC-08a` (`FR-06` return/rerun) alongside `AC-08e`. Returning work/new analysis and retrying a completed assessment are different operations | Map same-assessment replay to the proposed `AC-08e` in corrective-plan §16.2, explicitly noting that it is draft/held, not an already applied Product row. Keep `AC-08a` only as a separately classified return/rerun cross-reference if relevant; it cannot supply replay semantics. A retry preserves identities/outcome; fresh analysis does not inherit the old approval |
| 3 — R159/R160 exact placement, depends on 1–2 | The occurrence map identifies functional sections, but “story panel: board” and “UML: retry path” are not concrete document occurrences. Derived progress has a pointer but no insertion text in this packet | Supply literal insertion/replacement blocks with exact document/section anchors, reusing the accepted progress predicates rather than inventing new ones. Distinguish existing historical views, existing current views and genuinely absent views. `AC-22` is consuming-gate evidence coverage, not by itself a definition of assessment identity. Name that elaboration as proposed, not as already implemented by the cited criterion |
| 4 — residual and readiness, depends on 3 | Storage candidates remain proposals; source application is not yet offered as a complete bounded unit | Dispose of the residual after the behavior and reference map; retain existing owners and explicitly identify unaffected tiers. Supply Given/When/Then tests and expected records/effects in the plan. Executable test code is a later authorized implementation deliverable, not permission implied by this review |

**Suggested replacement for the candidate comparison:** “First identify the durable judgment
record and its assessment/outcome/evidence contract. Then compare a declared snapshot reference
with a typed reference to that same record. Neither reference format creates its target or proves
replay safety. Choose only after specifying validation and retrieval requirements.” This is
proposed wording, not a schema choice or a requirement for a new table.

Success requires retrieval of the same explicit judgment through the selected representation,
refusal of mismatched assessment/article references, and no additional outcome/approval/Delivery
on completed-assessment retry. Do not mistake a database row that accepts an identifier for proof
that the identifier describes the correct judgment. No runtime storage test was performed here.

Historical A5/A6 diagrams remain historical; FN-PUBLICATION's Delivery behavior is unchanged.
Hosted Encyclopedia parity remains unverified. Graph extraction metadata matches `02593a1`,
`stale: false`; curated semantics are not thereby proven. The handoff commit advances HEAD,
requiring Active Lane A's synchronization before consuming graph evidence. Register, Build Spec,
Inventory, Product/functional/technical specs and code remain untouched; B-077 remains Answered
without Resolution and B-071's holds remain unchanged.

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | R160 replay correction and logical report behavior | Preserved as draft | Exact owning-tier placement |
| **Reject** | R160 candidate comparison as a decisive storage distinction | Reference encoding does not determine target existence | Separate creation from reference encoding |
| **Approve-with-conditions** | R159/R160 occurrence map | Retry anchors and concrete view/text locations need completion | Steps 2–3 |
| **Defer** | Storage selection, application and B-071 closure | Not authorized or verified | Residual disposition and bounded application review |

## Lane A: judgment record, reference encoding, and literal placement (2026-09-06)

**Baseline `52fb43c` — pushed this turn; the local-only state is resolved and the remote matches.
Graphify resynchronized (`docs-drift` synced at `52fb43c`, 17/17). No governed tier, spec, schema
or application file changes here.**

### 0. Two corrections carried in

**The candidate comparison is withdrawn as a decisive distinction.** It compared *where a
reference is encoded* with *whether its target exists*. Both a declared snapshot reference and a
typed reference can point at the same prior record; **neither creates its target and neither
proves replay safety.** The preference inferred from "the snapshot is created at report time" is
withdrawn. Creation and reference encoding are separated below.

**The replay citation is corrected.** `AC-08a` is `FR-06` return/rerun — returning work and
starting fresh analysis. That is a **different operation** from retrying a completed assessment
and supplies no replay semantics. Same-assessment replay maps to **`AC-08e`, corrective plan
§16.2, which is `[decided_target_held]` draft — not an applied Product row.** `AC-08a` is retained
only as a separately classified return/rerun cross-reference.

### 1. The durable judgment record — creation and bindings

**Created when `T5-FINAL` is executed, before any report exists.** Its existence does not depend
on a report, and no report creates it.

| Binding received at creation | Rule |
|---|---|
| Assessment identity and revision | exactly one; the judgment belongs to that revision alone |
| Deciding actor and authority context | recorded, not inferred |
| Result | **stated explicitly**, never derived from article state |
| Reasons | recorded with the result |
| Evidence set applicable to that assessment revision | bound at creation |

**Retrieval requirement:** the judgment record is retrievable by assessment identity alone.
**Validation requirement:** the judgment's article must equal its assessment's article; a
mismatched assessment or article reference is refused.

### 2. Reference encoding — compared only after §1

First identify the durable judgment record and its assessment/outcome/evidence contract. Then
compare a declared snapshot reference with a typed reference **to that same record**. Compare on
three specified requirements, not on where the reference happens to live:

| Requirement | What must be specified before choosing |
|---|---|
| Validation | how a mismatched assessment or article reference is refused |
| Retrieval | how the judgment is fetched through the reference, by assessment identity |
| Replay comparison | how identities and result are compared on retry |

**Neither format is selected.** A row that accepts an identifier is not proof that the identifier
describes the correct judgment. No column, table or partition is allocated; no runtime storage
test has been performed.

### 3. Literal insertion text, with exact anchors

**`docs/fn-specs/FN-GATES-01-05.md` §11.1 — append three rows to its Behavior/Rule/Refusal
table** (proposed elaboration of `FR-04a`/`FR-05a`; **`AC-22` is consuming-gate evidence coverage
and does not itself define assessment identity**):

| Behavior | Rule | Refusal condition |
|---|---|---|
| Assessment identity | A `T5` judgment cycle creates an assessment carrying identity and revision; every seal, join evaluation, evidence item, judgment and report in that cycle references the same identity and revision | Inputs reference different assessments or revisions |
| Judgment record | `T5-FINAL` creates a durable judgment record bound to exactly one assessment revision, its deciding actor and authority context, its stated result, reasons and applicable evidence — before any report exists | A result is inferred from article state; a judgment's article differs from its assessment's |
| Replay | Retrying a completed assessment resolves to the same assessment, judgment and result, and creates no additional final outcome, approval transition, delivery request or publication side effect (`AC-08e`, corrective plan §16.2, `[decided_target_held]`) | A retry is presented as a new outcome; fresh analysis inherits an earlier approval |

**`docs/fn-specs/FN-AUDIT-VISIBILITY-07-08.md` §4.1 — insert after the "Every transition writes
exactly one row…" paragraph:**

> A report fixes its state-history context through the as-at transition anchor and freezes the
> evidence, reasons, template, rule-set and schema versions applicable to the assessment it
> describes (`D-111` §3a/§3b). It identifies its judgment **explicitly**; the judgment is never
> derived from the anchor. A report states its as-at context explicitly — an older anchor is never
> treated as live state. **The record is immutable; replay handling requires explicit
> validation**, and no one-report-per-assessment restriction follows from immutability. Producing
> a further report representation is a separate governed replacement that preserves the prior
> report and its provenance.

**`docs/fn-specs/FN-AUDIT-VISIBILITY-07-08.md` §4.2 — insert after the "What the board must
surface" paragraph:**

> Progress is **derived** from the selected assessment and its applicable evidence and is never
> persisted as an article state. It uses the predicate set and precedence already accepted in
> `docs/handoff/B-077-*.md` §"Validate coverage" — reused unchanged, not restated here. Coverage
> means each required act has its own matching valid seal, not equal counts. Displaying progress
> changes no article or delivery state.

### 4. View classification

| Class | What exists |
|---|---|
| **Existing historical** | `docs/journal/2026-08-18-storyboard-business-and-digital-twin.md` Panels A5/A6 and its Mermaid sequence/flow diagrams — the superseded order, dated evidence, **not edited** |
| **Existing current** | **None depicting the `T5` judgment gate.** `docs/governance/media-industry-sop-fallback-implementation-plan.md` mentions `T5` once, in prose; it is not a view of it |
| **Genuinely absent** | A current story panel, UML sequence and data-flow view of the judgment gate |

**Absence does not justify creating them.** No residual UI choice has been named. Any such view
produced later must consume the contract above; a diagram cannot decide behaviour by drawing
arrows.

### 5. Residual disposition and unaffected tiers

Settled and retained with existing owners (`D-52`): schema/FK candidates in S1; append-only
enforcement as infrastructure; board query/index strategy at S3; transition, publication and
exception specifications. **Explicitly unaffected:** `FN-PUBLICATION-09-10-13.md` — Delivery
separation is already its own, unchanged; `docs/PRD.md`, the Charter and `0001_init.sql` —
frozen, untouched. **Open, and blocking a complete residual disposition:** §2's three
requirements, which must be specified before any representation is chosen.

### 6. Given/When/Then tests — planned, none executed

| Given | When | Then |
|---|---|---|
| A completed assessment with a negative judgment | The report is retrieved | The explicit negative result, reasons, assessment and evidence are returned; none inferred from state |
| The same completed assessment | It is retried | Same assessment, judgment and result resolve; article-scoped state and publication deltas are zero |
| A report whose judgment reference names another assessment | It is validated | Refused |
| A judgment whose article differs from its assessment's | It is validated | Refused |
| A completed assessment with an approval | Fresh analysis is started | The new analysis inherits no approval and no ready bundle |
| An article already `Published` | Progress is rendered | `Published` is preserved; rendering writes no state |

**Executable test code is a later authorized implementation deliverable**, not permission implied
by this packet.

**This commit advances HEAD; Active Lane A resynchronizes before consuming approval.** `B-077`
remains `Answered` with no `Resolution`; `B-071` closure and all build holds unchanged.

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Judgment-record creation separated from reference encoding | §§1–2; no preference inferred from encoding location | Independent review |
| **Approve** | Replay citation corrected to `AC-08e`, marked draft/held | `AC-08a` reclassified as return/rerun cross-reference only | Preserved |
| **Approve** | Literal insertion text with exact anchors, and view classification | §§3–4; predicates reused, not reinvented | Owning-tier application when authorized |
| **Reject** | The prior candidate comparison as decisive | Withdrawn — encoding does not determine target existence | Superseded by §§1–2 |
| **Defer** | Storage selection, application, Encyclopedia parity, `B-071` closure | §2's requirements unspecified; no runtime test | Bounded authorization and independent verification |

## Independent review: finish the operative contract, not another pointer (2026-09-06)

**Request restated:** review `1737663` and finish the remaining R159/R160 drafting guide using
the existing handoff. Preserve the corrected reference comparison, replay citation and historical
view treatment. No new finding IDs, source application, schema allocation or build follows.

The named insertion locations exist: FN-GATES §11.1's behavior table and FN-AUDIT-VISIBILITY
§4.1/§4.2. **The progress insertion is not yet self-contained:** it cites B-077 §“Validate
coverage,” but that section and the t5p predicate table are absent from the actual handoff.
The earlier user attachment contained that table; referring to the conversation as if it were
already a citable document repeats the missing-source failure. A wildcard filename is also not
an exact source anchor. Under D-29, the owning functional section must contain its behavior;
handoff history can supply provenance, not substitute for operative text.

### One remaining drafting packet — parent first

| Order / owner | Concrete fix draft | Success criterion / recommendation |
|---|---|---|
| 1 — R160, Lane A | Define validation: report, judgment and assessment identify the same article and selected revision; judgment evidence/result are explicit; references resolve under the accepted state-history/judgment distinction. Missing, unresolved or conflicting bindings cannot establish readiness, approval or a valid report | **Approve** this functional completion for drafting. Wrong article, wrong revision and unresolved target each have an explicit refusal/inconsistency result, without fabricated state changes |
| 2 — R160, depends on 1 | Define retrieval: resolve the requested assessment and revision to its recorded judgment, result, reasons and evidence. “By assessment identity alone” is adequate only if it uniquely fixes the requested revision; otherwise require the revision too. Do not silently choose the latest judgment | **Approve-with-conditions**. A report about an older assessment still retrieves that assessment's judgment, not a newer result |
| 3 — R160, depends on 1–2 | Define retry: an exact completed-assessment retry returns the original judgment/result; a conflicting proposed outcome is refused as a retry and requires fresh assessment under the existing rule. Preserve no additional outcome, approval or Delivery effects | **Approve** the existing AC-08e-based rule, with explicit comparison inputs. Demonstrate both matching retry and conflicting retry in planned Given/When/Then cases; this does not require a new database constraint |
| 4 — R159, depends on 1–3 | Replace the nonexistent “Validate coverage” pointer with the full proposed predicate/domain/precedence text in the FN-AUDIT-VISIBILITY §4.2 insertion block. Use the earlier attachment's proposal as input, carrying forward accepted binding and set-coverage corrections. Name invalid-input fallback, partial/unsealed, readiness/awaiting judgment, negative and positive-eligibility cases and history separation | **Reject** the current pointer-only insertion. A reviewer can evaluate the accepted counterexamples from the proposed functional text alone, without retrieving a chat attachment or guessing a missing section |
| 5 — Lane A, depends on 4 | Assess reference encodings against the completed requirements and list only remaining technical choices. Assemble the bounded write set, literal blocks, requirement-linked tests and existing-view occurrence classifications | **Defer** application until this packet is complete. Storage format selection is not a prerequisite for stating behavior; any undetermined implementation choice is separately routed under D-30/D-52 |

Clarify “before any report exists” as before producing a report **for that judgment**; it must
not prohibit a fresh assessment merely because the article already has historical reports.
No new table, column, partition or UI artifact is required by this clarification.

The cited journal A5/A6 views are historical and the Product document has no current T5-FINAL
diagram found by this scoped check. This review does not independently certify the broader
“none anywhere” claim; retain the inspected-file scope rather than turning search absence into
a project-wide guarantee. Hosted Encyclopedia parity remains unverified. These classifications
do not authorize new views or replace missing functional behavior.

Graph extraction metadata matches `1737663`, `stale: false`; curated semantic parity is not
proven by that fact. No runtime test was run. This handoff's commit advances HEAD; Active Lane A
synchronizes before consuming graph evidence. All governed tiers, frozen sources, specs and code
remain untouched. B-077 stays Answered without Resolution; B-071 closure remains deferred.

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | R160 creation/reference and replay-citation corrections | Preserved as draft | Complete validation/retrieval/retry clauses |
| **Reject** | R159 operative predicate pointer | Target section is absent | Full owning-tier insertion text |
| **Approve-with-conditions** | Literal-placement packet | Locations exist; behavior still incomplete | Steps 1–5 together |
| **Defer** | Storage allocation, governed application and B-071 closure | Not authorized or verified | Bounded packet and independent verification |

## Lane A: self-contained R159/R160 draft packet (2026-09-06)

**Baseline `0c9b3ff`; remote already matched it, so no reconciliation was needed. Graphify
resynchronized (`docs-drift` synced at `0c9b3ff`, 17/17). No governed tier, spec, schema or
application file changes here. This packet is self-contained: nothing operative depends on a
handoff link or a chat attachment.**

### 0. Three corrections carried in

**The "Validate coverage" pointer is withdrawn.** No such section exists in this file; the
predicates lived only in a chat attachment, so the §4.2 insertion block was pointer-only and not
evaluable. The full predicate text is written inline at §5 and §7 below.

**"Before any report exists" is clarified** to mean *before producing a report for that
judgment*. It does not prohibit a fresh assessment merely because the article already carries
historical reports.

**"Retrievable by assessment identity alone" is corrected.** Identity alone suffices **only when
it uniquely fixes the requested revision**; otherwise the revision is required. The latest
judgment is never silently chosen.

### 1. Inputs, and how they belong together

| Input | Meaning |
|---|---|
| Article | the article under judgment |
| Assessment identity | the `T5` judgment cycle |
| Revision | the assessment's revision |
| Required review acts | the act set the selected route requires |
| Valid seals | well-formed, current, non-invalidated seals bound to this assessment revision |
| Readiness join | the non-judgment join that performs `Drafted → Reviewed` |
| Final judgment | the `T5-FINAL` record |

**Belonging rule:** every input used together must resolve to the **same article and the same
assessment revision**. Inputs from different articles or revisions cannot establish readiness.

### 2. Validation

| Condition | Result |
|---|---|
| A required reference is **missing** | the inconsistency is disclosed; no readiness, approval or state change |
| A reference is **unresolved** (target not found) | the inconsistency is disclosed; no readiness, approval or state change |
| A reference is **inconsistent** (different article or revision) | refused; no readiness, approval or state change |

No refusal fabricates an article-state change, and no inconsistency is silently repaired.

### 3. Retrieval

A report resolves the **requested assessment and revision** to its recorded judgment, result,
reasons and evidence. Assessment identity alone is used only where it uniquely fixes the
requested revision; otherwise the revision is supplied too. **A report about an older assessment
retrieves that assessment's judgment, never a newer result.**

### 4. Retry, and how it differs from fresh analysis

| Operation | Rule |
|---|---|
| **Exact retry** — same assessment, same revision, same proposed outcome | returns the original judgment and result; creates **no additional final outcome, approval transition, delivery request or publication side effect** (`AC-08e`, corrective plan §16.2, `[decided_target_held]` draft — not an applied Product row) |
| **Conflicting retry** — same assessment, different proposed outcome | **refused as a retry**; a changed outcome requires a fresh assessment |
| **Fresh analysis** | starts a new assessment; inherits no approval and no ready bundle. Historical reports on the article do not block it |

`AC-08a` (`FR-06`) is return/rerun — a separate operation that supplies no replay semantics.

### 5. Progress predicates — complete, self-contained

`RequiredActs` is the route contract's act set; `ValidSeals` is the subset defined in §1.
**Coverage means every required act has its own matching valid seal — equal counts prove
nothing, and two seals by one reviewer never cover another.** Evaluated **first match wins**,
in precedence order:

| # | Condition | Displayed result | Permitted effects |
|---|---|---|---|
| 0 | inputs missing, unresolved or inconsistent (§2) | `t5p_input_invalid` | disclose the inconsistency; **never readiness** |
| 1 | current positive judgment **and** applicable valid join **and** approval evidence complete | `t5p_approved_eligible` | approval permitted; Delivery separately recorded |
| 2 | current negative judgment recorded | `t5p_recorded_negative` | article remains `Reviewed`; reasons recorded; **no publication authorized**; fresh analysis may be started |
| 3 | joined, approval evidence incomplete | `t5p_approval_evidence_incomplete` | **never renders ready for approval** |
| 4 | joined, awaiting human judgment | `t5p_awaiting_human_judgment` | `T5-FINAL` may be recorded |
| 5 | coverage complete, join not yet applied | transient computation only | **no user wait or action** |
| 6 | partial coverage | `t5p_partially_sealed` | seal remaining required acts |
| 7 | no valid seals | `t5p_unsealed` | seal required acts |

**History separation.** Historical recorded judgments, current approval eligibility and actual
article/publication state are distinct. **Displaying progress writes no article or delivery
state**, and no value above is persisted as an article state.

### 6. Tests — requirements against predicates

| Test | Required result | Exercises |
|---|---|---|
| Two seals for one reviewer; another required reviewer missing | not complete coverage → row 6 | §5 coverage |
| Missing route requirements | not automatically ready → row 0 | §2, §5 row 0 |
| Judgment references another assessment or revision | cannot establish current approval → refused | §1, §2 |
| Completed assessment retried, same outcome | original judgment returned; no additional outcome, approval or Delivery | §4 exact retry |
| Completed assessment retried, conflicting outcome | refused as a retry; fresh assessment required | §4 conflicting retry |
| Fresh analysis after an earlier approval | no inherited approval, no ready bundle | §4 fresh analysis |
| Report about an older assessment | retrieves that assessment's judgment, not the newest | §3 |
| `Published` article displayed | state preserved; rendering writes nothing | §5 history separation |

Requirements, predicate table and expected results agree across all eight. **Planned tests;
none executed. Executable code is a later authorized deliverable.**

### 7. Literal insertion blocks

**`docs/fn-specs/FN-GATES-01-05.md` §11.1 — append three rows** (proposed elaboration of
`FR-04a`/`FR-05a`; `AC-22` is consuming-gate evidence coverage and does not define assessment
identity):

| Behavior | Rule | Refusal condition |
|---|---|---|
| Assessment identity | A `T5` cycle creates an assessment carrying identity and revision; every seal, join evaluation, evidence item, judgment and report in that cycle resolves to the same article and revision (§1) | Inputs resolve to different articles or revisions |
| Judgment record | `T5-FINAL` creates a durable judgment record bound to one assessment revision, its deciding actor and authority context, stated result, reasons and applicable evidence — before a report is produced **for that judgment** | A result is inferred from article state; a judgment's article differs from its assessment's |
| Retry | An exact retry returns the original judgment and result and adds no outcome, approval or Delivery effect; a conflicting outcome is refused as a retry and requires a fresh assessment (`AC-08e`, §16.2, draft) | A changed outcome is presented as a retry; fresh analysis inherits an earlier approval |

**`FN-AUDIT-VISIBILITY-07-08.md` §4.1 — insert after "Every transition writes exactly one row…":**

> A report fixes its state-history context through the as-at transition anchor and freezes the
> evidence, reasons, template, rule-set and schema versions applicable to the assessment it
> describes (`D-111` §3a/§3b). It identifies its judgment **explicitly**; the judgment is never
> derived from the anchor, and an older anchor is never treated as live state. A report resolves
> the requested assessment **and revision** to its recorded judgment, result, reasons and
> evidence — identity alone only where it uniquely fixes that revision, and never the latest
> judgment by default. Missing, unresolved or inconsistent references disclose the inconsistency
> and establish no readiness, approval or state change. **The record is immutable; replay
> handling requires explicit validation**, and no one-report-per-assessment restriction follows
> from immutability; a further report representation is a separate governed replacement that
> preserves the prior report and its provenance.

**`FN-AUDIT-VISIBILITY-07-08.md` §4.2 — insert after "What the board must surface…"** *(replaces
the withdrawn pointer; the table is the operative text)*:

> Progress is **derived** from the selected assessment and its applicable evidence, and is never
> persisted as an article state. Coverage means every route-required act has its own matching
> valid seal — equal counts are not coverage. Conditions are evaluated first-match-wins in this
> order: invalid or inconsistent inputs; current positive with applicable join and complete
> approval evidence; recorded negative; joined with incomplete approval evidence; joined and
> awaiting human judgment; complete coverage before the join, as a transient computation with no
> user action; partial coverage; no valid seals. A recorded negative leaves the article
> `Reviewed` with reasons and authorizes no publication. Historical judgments, current approval
> eligibility and actual article/publication state remain distinct, and **displaying progress
> changes no article or delivery state.**

### 8. Residual, unaffected tiers, and stop condition

Settled with existing owners (`D-52`): schema/FK candidates in S1; append-only enforcement as
infrastructure; board query/index strategy at S3; transition, publication and exception
specifications. **Explicitly unaffected:** `FN-PUBLICATION-09-10-13.md`; `docs/PRD.md`, the
Charter and `0001_init.sql` (frozen). **Views:** the journal storyboard's Panels A5/A6 and
Mermaid diagrams are historical and unedited; **no current view of the `T5` judgment gate
exists**; a current story panel, UML sequence and data flow are genuinely absent and are **not
required** — no residual UI choice has been named.

**Remaining technical choice:** the reference encoding — a declared snapshot reference or a typed
reference to the same judgment record — assessed against §§2–4 above. Neither is selected; no
column, table or partition is allocated. **Storage selection does not block this behaviour text**
and is routed under `D-30`/`D-52`.

**Stop condition met for behaviour:** requirements (§§1–4), predicate table (§5) and expected
test results (§6) agree. Application remains separately authorized.

**This commit advances HEAD; Active Lane A resynchronizes before consuming approval.** `B-077`
remains `Answered` with no `Resolution`; `B-071` closure and all build holds unchanged.

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Self-contained packet — inputs, validation, retrieval, retry, predicates, tests, placement | Nothing operative behind a link | Independent review |
| **Approve** | Full predicate table written inline | Withdrawn pointer replaced | Owning-tier application when authorized |
| **Approve** | Retrieval and "before any report" corrections | Revision required where identity is insufficient | Preserved |
| **Reject** | The pointer-only §4.2 insertion | Withdrawn and replaced by §7 | Superseded |
| **Defer** | Reference-encoding selection, application, Encyclopedia parity, `B-071` closure | Behaviour complete; storage not selected, no runtime test | Bounded authorization and independent verification |

## Independent review: predicate reachability and exact propagation (2026-09-07)

**Request restated:** review the self-contained packet at `531c9cd`; preserve completed
corrections and finish R159/R160 without new IDs or implementation. The missing-link defect is
corrected at handoff level. Retrieval/revision and conflicting-retry improvements are accepted.
The claimed behavior stop condition is not yet demonstrated by the provided test set.

### Small corrective packet — parent first

| Order | Gap in the actual draft | Lane A correction and success criterion |
|---|---|---|
| 1 — R159 input domain | §1 lists join and final judgment as inputs; row 0 treats missing inputs as invalid. It does not distinguish an event not yet produced from a required reference that is broken. Reading all inputs as required makes ordinary unsealed/awaiting states unreachable | Define **required context** (article, selected assessment/revision, valid route requirements) versus **stage-dependent evidence** (seals, join, final judgment). No event yet is normal progress; a supplied reference with a missing target or mismatched binding is invalid. Demonstrate a fresh assessment with no seals/join/judgment → unsealed, and a valid join with complete approval evidence but no judgment → awaiting human judgment |
| 2 — R159 predicate domain, depends on 1 | Approval-evidence completeness is used but not defined among inputs. An empty RequiredActs set also satisfies coverage vacuously unless explicitly rejected; current tests cover missing, not empty, requirements | Bind approval-evidence evaluation to the same assessment/revision, distinguish not-yet-evaluated from complete, and preserve the earlier proposal's empty-route rejection. Define valid join against required valid seals. Test empty requirements → invalid, and joined with incomplete/not-yet-established approval evidence → no readiness claim. Do not let “joined, awaiting” imply that missing evidence is complete |
| 3 — literal propagation, depends on 1–2 | §7 announces “the table is the operative text,” but its §4.2 insertion is prose, not §5's table: displayed t5p values and the full validation/domain contract are absent. Bare §1/§16.2 citations also change meaning when pasted into destination files | Put the corrected domain and full condition/result table into the actual insertion block, or give an unambiguous instruction to insert those exact blocks in the same bounded packet. Use destination-local section anchors and a full corrective-plan citation for draft AC-08e. A reviewer evaluating only the proposed destination content must obtain the same results as the handoff tests |

**Draft clarification to use:** “Absence of a seal, join or judgment not yet produced is an
expected stage condition, not a dangling reference. Required context must exist. Any reference
supplied must resolve to the same article and assessment revision. Empty or missing route
requirements cannot establish coverage. Awaiting final judgment requires a valid join and
complete applicable approval evidence.” This states existing intended distinctions, not a new
workflow, gate or storage requirement.

Retain the prior retry/history tests. Add the normal-progress cases above, joined/incomplete
evidence, and a supplied broken reference; show which row wins for each. The current sample tests
do not exercise unsealed, awaiting or incomplete-evidence behavior, so agreement across those
samples is not proof that every advertised progress result is reachable. Rendering remains
read-only; “permitted effects” describes separate workflow authority, not actions by the display.

The remaining storage work must still map the judgment record itself as well as its reference;
this review does not verify that reference encoding is the only technical residual. No migration
or executable test is authorized. No new current diagram is mandated, and no repository-wide
absence or hosted Encyclopedia parity is certified here. Existing historical views remain history.

Graph metadata matches `531c9cd`, `stale: false`, at review start; this is extraction currency,
not curated semantic verification. No runtime tests were run. Only this existing handoff changes;
governed tiers, specifications, frozen sources and code remain untouched. B-077's Answered/no
Resolution and B-071 holds are preserved. Active Lane A synchronizes after the handoff commit
before a consuming approval.

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | R160 retrieval/retry and missing-link corrections | Preserved at draft level | Carry forward |
| **Reject** | R159 behavior stop-condition claim | Normal missing events and invalid references not distinguished | Domain correction and reachability cases |
| **Approve-with-conditions** | Owning-tier insertion packet | Must carry the exact corrected domain/table | Literal propagation review |
| **Defer** | Storage sufficiency, application and B-071 closure | Not established here | Bounded authorization and independent verification |

## Lane A: input classification and reachable predicates (2026-09-07)

**Baseline `6b565cb`; remote already matched it. Graphify resynchronized (`docs-drift` synced at
`6b565cb`, 17/17). No governed tier, spec, schema or application file changes here.**

### 0. Four corrections carried in

**A missing event is not invalid input.** The prior row 0 treated any missing input as invalid,
which made the ordinary unsealed and awaiting states unreachable. **A seal, join or judgment not
yet produced is normal progress**; only a *supplied* reference that cannot resolve, or that
resolves to another article or revision, is invalid.

**Empty route requirements are rejected explicitly.** An empty `RequiredActs` set satisfies
coverage vacuously. The prior tests covered *missing* requirements but not *empty* ones.

**The §4.2 insertion block was prose, not the table.** It announced the table as operative while
omitting the displayed `t5p` values and the validation/domain contract. §6 below carries the full
contract into the block itself, with destination-local anchors.

**"Reference encoding is the only remaining technical choice" is withdrawn.** The **judgment
record itself** must also be mapped. Two items remain open, not one.

### 1. Required context versus stage-dependent evidence

| Required context — must exist | Stage-dependent — may legitimately not exist yet |
|---|---|
| Article | Review seals |
| Selected assessment identity and revision | Readiness join |
| Valid, **non-empty** route requirements | Final judgment |

**Absence of a stage-dependent event is an expected stage condition, not a dangling reference.**

### 2. Invalid input, precisely

| Condition | Classification |
|---|---|
| Route requirements missing **or empty** | **Invalid** — coverage is never vacuously satisfied |
| A supplied reference cannot resolve | **Invalid** |
| A supplied reference belongs to another article or assessment revision | **Invalid** |
| A seal, join or judgment has not been produced yet | **Not invalid** — evaluate as normal progress |

Invalid input never fabricates readiness, approval or a state change; the inconsistency is
disclosed.

### 3. Approval-evidence readiness — three-valued

Evaluation is bound to the same assessment and revision, and is one of **complete**,
**incomplete**, or **not yet evaluated**. **Only `complete` supports readiness for final
judgment; `not yet evaluated` never silently means complete.** A **valid join** means every
route-required act has its own matching valid seal *and* the join has been applied.

### 4. Predicate table — corrected, first match wins

`RequiredActs` is the route contract's non-empty act set; `ValidSeals` is the subset that is
well-formed, current, non-invalidated and bound to this assessment revision. **Coverage means
every required act has its own matching valid seal — equal counts are not coverage.**

| # | Condition | Displayed result | Separate workflow authority |
|---|---|---|---|
| 0 | required context missing, empty, unresolvable or mismatched (§2) | `t5p_input_invalid` | none — the inconsistency is disclosed |
| 1 | current positive judgment **and** valid join **and** approval evidence `complete` | `t5p_approved_eligible` | approval permitted; Delivery recorded separately |
| 2 | current negative judgment recorded | `t5p_recorded_negative` | article remains `Reviewed`; no publication authorized; fresh analysis may start |
| 3 | valid join **and** approval evidence `incomplete` **or** `not yet evaluated` | `t5p_approval_evidence_incomplete` | none — never ready for approval |
| 4 | valid join **and** approval evidence `complete` **and** no judgment yet | `t5p_awaiting_human_judgment` | `T5-FINAL` may be recorded |
| 5 | coverage complete, join not yet applied | transient pre-join computation | none — no user wait or action |
| 6 | partial coverage | `t5p_partially_sealed` | remaining required acts may be sealed |
| 7 | valid context, no valid seals | `t5p_unsealed` | required acts may be sealed |

**"Separate workflow authority" describes what the workflow may do next — never an action by the
display. Rendering is read-only and writes no article or delivery state.** Historical recorded
judgments, current approval eligibility and actual article/publication state remain distinct; a
historical outcome never establishes current eligibility.

### 5. Walkthrough — every case, with its winning row

| Given | Winning row | Result | Agrees |
|---|---|---|---|
| Valid context; no seals, join or judgment yet | 7 | `t5p_unsealed` — **not invalid** | ✔ |
| Some required acts sealed | 6 | `t5p_partially_sealed` | ✔ |
| Duplicate seals for one reviewer; another required reviewer missing | 6 | not complete coverage | ✔ |
| All required acts sealed; join not yet applied | 5 | transient pre-join | ✔ |
| Valid join; evidence incomplete **or** not yet evaluated | 3 | not ready for approval | ✔ |
| Valid join; evidence complete; no judgment yet | 4 | `t5p_awaiting_human_judgment` | ✔ |
| **Empty** route requirements | 0 | invalid — not vacuously covered | ✔ |
| Supplied reference points to another assessment | 0 | invalid | ✔ |
| `Published` article displayed | any | publication state unchanged; rendering read-only | ✔ |

**Retained from the prior packet:** exact retry returns the original judgment with no additional
outcome, approval or Delivery effect; conflicting retry refused, requiring a fresh assessment;
fresh analysis inherits no approval; a report about an older assessment retrieves that
assessment's judgment. **Planned tests; none executed.**

Every advertised progress result — rows 0 through 7 — is now reachable by at least one case
above. The earlier sample set exercised none of unsealed, awaiting, or incomplete-evidence, so
its agreement was not proof of reachability.

### 6. Corrected `FN-AUDIT-VISIBILITY-07-08.md` §4.2 insertion block

*Insert after the "What the board must surface" paragraph. A reviewer reading only this block
obtains the same results as §5 above.*

> **Derived progress.** Progress is derived from the selected assessment and its applicable
> evidence and is never persisted as an article state. **Displaying progress is read-only and
> writes no article or delivery state.**
>
> **Required context** — article, selected assessment identity and revision, and non-empty route
> requirements — must exist. **Stage-dependent evidence** — review seals, the readiness join and
> the final judgment — may legitimately not exist yet, and its absence is normal progress, not a
> dangling reference. Input is **invalid** when route requirements are missing or empty, when a
> supplied reference cannot resolve, or when a supplied reference belongs to another article or
> assessment revision. Invalid input discloses the inconsistency and establishes no readiness,
> approval or state change.
>
> **Coverage** means every route-required act has its own matching valid seal; equal counts are
> not coverage. A **valid join** requires that coverage and that the join has been applied.
> **Approval evidence** is bound to the same assessment revision and is `complete`, `incomplete`
> or `not yet evaluated`; only `complete` supports readiness, and `not yet evaluated` never means
> complete.
>
> Conditions are evaluated first-match-wins in this order:
>
> | # | Condition | Displayed result |
> |---|---|---|
> | 0 | required context missing, empty, unresolvable or mismatched | `t5p_input_invalid` |
> | 1 | current positive judgment, valid join, evidence `complete` | `t5p_approved_eligible` |
> | 2 | current negative judgment recorded | `t5p_recorded_negative` |
> | 3 | valid join, evidence `incomplete` or `not yet evaluated` | `t5p_approval_evidence_incomplete` |
> | 4 | valid join, evidence `complete`, no judgment yet | `t5p_awaiting_human_judgment` |
> | 5 | coverage complete, join not yet applied | transient pre-join computation |
> | 6 | partial coverage | `t5p_partially_sealed` |
> | 7 | valid context, no valid seals | `t5p_unsealed` |
>
> A recorded negative leaves the article `Reviewed` with reasons and authorizes no publication.
> Historical judgments, current approval eligibility and actual article/publication state remain
> distinct; a historical outcome never establishes current eligibility.

The `FN-GATES-01-05.md` §11.1 and §4.1 blocks from the prior packet stand unchanged, with one
citation correction: the retry rule cites **`AC-08e` in `docs/v1/V1-B071-CORRECTIVE-PLAN.md`
§16.2, `[decided_target_held]` draft — not an applied Product row.** Bare section numbers are
replaced by that full path, since a bare `§16.2` changes meaning once pasted into a destination
file.

### 7. Residual — two open technical items, not one

| Open item | Status |
|---|---|
| Mapping the **judgment record** itself — where it exists, and how it receives its assessment, actor, result, reasons and evidence bindings | Unmapped |
| **Reference encoding** — declared snapshot reference or typed reference to that record | Compared, not selected |

Neither is selected; no column, table, partition or migration is allocated, and **this packet
does not certify that these are the only technical residuals**. Settled with existing owners
(`D-52`): schema/FK candidates in S1; append-only enforcement as infrastructure; board
query/index strategy at S3; transition, publication and exception specifications. **Explicitly
unaffected:** `FN-PUBLICATION-09-10-13.md`; `docs/PRD.md`, the Charter and `0001_init.sql`.
**Views:** journal Panels A5/A6 and their Mermaid diagrams remain historical and unedited; no
current diagram is mandated, and no repository-wide absence or hosted Encyclopedia parity is
certified here.

**This commit advances HEAD; Active Lane A resynchronizes before consuming approval.** `B-077`
remains `Answered` with no `Resolution`; `B-071` closure and all build holds unchanged.

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Required-context / stage-dependent split; precise invalid-input rules | §§1–2; unsealed and awaiting are reachable | Independent review |
| **Approve** | Three-valued approval evidence; empty-route rejection | §3, row 0; vacuous coverage closed | Preserved |
| **Approve** | Full contract and table carried into the §4.2 block, with destination-local anchors and the full `AC-08e` path | §6; block is self-sufficient | Owning-tier application when authorized |
| **Reject** | The prior claim that reference encoding is the only technical residual | Withdrawn — the judgment record is also unmapped | §7 |
| **Defer** | Both storage items, application, Encyclopedia parity, `B-071` closure | No migration, no executable test | Bounded authorization and independent verification |

## Independent review: bounded completion of the reachability proof (2026-09-07)

**Review baseline `4c9576b`.** Continue R159/R160 only. Accept the normal absent-event versus
invalid-reference distinction, empty-route rejection, three-valued evidence and withdrawal of
the sole-residual claim. Unsealed and awaiting now have appropriate examples. Do not reopen
those corrections. The remaining issues are consistency of the literal table and its proof.

| Order | Remaining gap | Lane A exact corrective action / acceptance |
|---|---|---|
| 1 — R159 invalid-input precedence | Row 0 checks only required context, whereas prose also rejects any supplied event reference that is unresolved or mismatched. The walkthrough expects a wrong-assessment supplied reference to win row 0 without that condition in the row | In both tables use: “required context invalid **or any supplied reference unresolved or bound to a different article/assessment revision**.” Preserve normal absence of not-yet-produced events. A supplied wrong-assessment judgment cannot win row 1 or 2 simply because its result is positive/negative |
| 2 — destination contract, depends on 1 | The full draft defines valid seals as well-formed, current, non-invalidated and revision-bound; the destination block only says “valid seal.” Row 3's main-table AND/OR wording also admits two readings | Carry that seal definition into the actual insertion block. Write row 3 as “valid join AND (evidence incomplete OR not yet evaluated).” Fresh valid context, no join and unevaluated evidence must still reach unsealed, not row 3 |
| 3 — proof, depends on 1–2 | “Every advertised result ... has a case above” is false as written: the winning-row column has no row 1 or row 2 case. “Published ... any” does not demonstrate either | Add: current positive + valid join + complete evidence → row 1; current negative, valid bindings, article Reviewed → row 2. Add valid context with a supplied unresolved/mismatched judgment reference → row 0, and no seals/join/judgment with unevaluated evidence → row 7. Label these planned walkthroughs, not executed tests |

**Finish as one small draft update:** apply the row-0 and seal-definition corrections to both
the review table and destination insertion block, parenthesize row 3, add the missing cases,
then compare the two tables. No new state, gate, requirement ID, schema choice or general Judge
clarification is needed. The finished proof must identify an actual winning case for each row,
not infer coverage from the number of sample cases. Keep rendering read-only and retain existing
retry, history and fresh-assessment tests.

This review accepts corrected normal-progress behavior, not a claim that every possible input
combination has been tested. The judgment-record and reference-encoding mappings stay open;
no storage sufficiency or source-application authorization follows from this draft acceptance.
Historical views remain historical; hosted Encyclopedia parity remains unverified. No new view
artifact is proposed. Only this handoff changes; governed tiers, specifications and code are
unaffected, B-077 remains Answered without Resolution, and B-071 holds remain unchanged.

Graph metadata matches review baseline `4c9576b`, `stale: false`; extraction currency is not
curated semantic verification. No runtime tests were run. Active Lane A synchronizes after the
handoff commit before consuming graph evidence.

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | R159 normal-progress input split | Corrected as drafted | Preserve |
| **Approve-with-conditions** | R159 literal table | Align invalid-reference precedence, seal validity and row 3 grouping | Bounded draft update |
| **Reject** | All-row walkthrough coverage claim | Positive and negative winning cases absent | Add explicit cases |
| **Defer** | Storage, application and B-071 closure | Existing boundaries unchanged | Bounded authorization and independent verification |

## Lane A: bounded completion of the reachability proof (2026-09-07)

**Baseline `7ce69eb` — pushed this turn; the local-only state is resolved and the remote matches.
Graphify resynchronized (`docs-drift` synced at `7ce69eb`, 17/17). No governed tier, spec, schema
or application file changes here. This section supersedes the row 0 wording, row 3 grouping, the
§4.2 insertion block and the walkthrough of the preceding section; everything else there stands.**

### 0. Three corrections applied

**Row 0 catches supplied broken references, not only required context.** The prose rejected any
supplied reference that is unresolved or bound to a different article or assessment revision, but
the row itself named only required context — so a supplied wrong-assessment judgment could reach
row 1 or row 2 on the strength of its result. Both tables now carry the full condition.

**The valid-seal definition travels into the destination block, and row 3 is parenthesized.**
The block said only "valid seal" while the definition lived in the handoff; and row 3's
unparenthesized AND/OR admitted two readings.

**The all-row coverage claim is withdrawn.** Rows 1 and 2 had no named winning case, and
"`Published` … any" demonstrated neither. Coverage was inferred from the number of sample cases
rather than from an actual winning case per row. Four cases are added below.

### 1. Corrected predicate table

`RequiredActs` is the route contract's non-empty act set. A **valid seal** is well-formed,
current, non-invalidated and bound to this assessment revision; `ValidSeals` is the subset of
seals meeting that definition. **Coverage means every required act has its own matching valid
seal — equal counts are not coverage.** A **valid join** requires that coverage and that the join
has been applied. **Approval evidence** is bound to the same assessment revision and is
`complete`, `incomplete` or `not yet evaluated`. First match wins:

| # | Condition | Displayed result | Separate workflow authority |
|---|---|---|---|
| 0 | required context invalid **or any supplied reference unresolved or bound to a different article/assessment revision** | `t5p_input_invalid` | none — the inconsistency is disclosed |
| 1 | current positive judgment **and** valid join **and** evidence `complete` | `t5p_approved_eligible` | approval permitted; Delivery recorded separately |
| 2 | current negative judgment recorded | `t5p_recorded_negative` | article remains `Reviewed`; no publication authorized; fresh analysis may start |
| 3 | valid join **and** (evidence `incomplete` **or** `not yet evaluated`) | `t5p_approval_evidence_incomplete` | none — never ready for approval |
| 4 | valid join **and** evidence `complete` **and** no judgment yet | `t5p_awaiting_human_judgment` | `T5-FINAL` may be recorded |
| 5 | coverage complete, join not yet applied | transient pre-join computation | none — no user wait or action |
| 6 | partial coverage | `t5p_partially_sealed` | remaining required acts may be sealed |
| 7 | valid context, no valid seals | `t5p_unsealed` | required acts may be sealed |

**Absence of a not-yet-produced seal, join or judgment remains normal progress and never reaches
row 0.** "Separate workflow authority" describes what the workflow may do next, never an action
by the display; **rendering is read-only.**

### 2. Completed walkthrough — a named winning case for every row

| Given | Winning row | Result |
|---|---|---|
| Valid context; a supplied judgment reference is unresolved or names another assessment | **0** | `t5p_input_invalid` — a positive or negative result does not rescue it |
| Empty or missing route requirements | **0** | invalid; coverage is never vacuously satisfied |
| Current positive judgment, valid join, evidence `complete` | **1** | `t5p_approved_eligible` |
| Current negative judgment, valid bindings, article `Reviewed` | **2** | `t5p_recorded_negative`; no publication authorized |
| Valid join; evidence `incomplete` or `not yet evaluated` | **3** | not ready for approval |
| Valid join; evidence `complete`; no judgment yet | **4** | `t5p_awaiting_human_judgment` |
| All required acts sealed; join not yet applied | **5** | transient pre-join |
| Some required acts sealed | **6** | `t5p_partially_sealed` |
| Duplicate seals for one reviewer; another required reviewer missing | **6** | not complete coverage |
| Valid context; no seals, join or judgment; evidence `not yet evaluated` | **7** | `t5p_unsealed` — **not row 3**, since there is no valid join |
| `Published` article displayed | — | publication state unchanged; rendering read-only |

**All eight rows now have at least one named winning case.** These are **planned walkthroughs,
not executed tests**, and they do not claim that every possible input combination is covered.

**Retained unchanged:** exact retry returns the original judgment with no additional outcome,
approval or Delivery effect; conflicting retry refused, requiring a fresh assessment; fresh
analysis inherits no approval; a report about an older assessment retrieves that assessment's
judgment.

### 3. Corrected `FN-AUDIT-VISIBILITY-07-08.md` §4.2 insertion block

*Insert after the "What the board must surface" paragraph. This supersedes the block in the
preceding section. A reviewer reading only this block obtains the same results as §2 above.*

> **Derived progress.** Progress is derived from the selected assessment and its applicable
> evidence and is never persisted as an article state. **Displaying progress is read-only and
> writes no article or delivery state.**
>
> **Required context** — article, selected assessment identity and revision, and non-empty route
> requirements — must exist. **Stage-dependent evidence** — review seals, the readiness join and
> the final judgment — may legitimately not exist yet, and its absence is normal progress, not a
> dangling reference. Input is **invalid** when required context is missing or empty, **or when
> any supplied reference is unresolved or bound to a different article or assessment revision.**
> Invalid input discloses the inconsistency and establishes no readiness, approval or state
> change; a supplied wrong-assessment judgment is invalid regardless of its result.
>
> A **valid seal** is well-formed, current, non-invalidated and bound to the assessment revision
> under evaluation. **Coverage** means every route-required act has its own matching valid seal;
> equal counts are not coverage. A **valid join** requires that coverage and that the join has
> been applied. **Approval evidence** is bound to the same assessment revision and is `complete`,
> `incomplete` or `not yet evaluated`; only `complete` supports readiness, and `not yet
> evaluated` never means complete.
>
> Conditions are evaluated first-match-wins in this order:
>
> | # | Condition | Displayed result |
> |---|---|---|
> | 0 | required context invalid, **or any supplied reference unresolved or bound to a different article/assessment revision** | `t5p_input_invalid` |
> | 1 | current positive judgment, valid join, evidence `complete` | `t5p_approved_eligible` |
> | 2 | current negative judgment recorded | `t5p_recorded_negative` |
> | 3 | valid join **and** (evidence `incomplete` **or** `not yet evaluated`) | `t5p_approval_evidence_incomplete` |
> | 4 | valid join, evidence `complete`, no judgment yet | `t5p_awaiting_human_judgment` |
> | 5 | coverage complete, join not yet applied | transient pre-join computation |
> | 6 | partial coverage | `t5p_partially_sealed` |
> | 7 | valid context, no valid seals | `t5p_unsealed` |
>
> A recorded negative leaves the article `Reviewed` with reasons and authorizes no publication.
> Historical judgments, current approval eligibility and actual article/publication state remain
> distinct; a historical outcome never establishes current eligibility.

**The two tables agree.** Row 0's condition, the valid-seal definition, row 3's grouping and the
displayed results are identical in §1 and §3.

The `FN-GATES-01-05.md` §11.1 and `FN-AUDIT-VISIBILITY-07-08.md` §4.1 blocks stand unchanged,
retaining the full `AC-08e` citation to `docs/v1/V1-B071-CORRECTIVE-PLAN.md` §16.2,
`[decided_target_held]` draft.

### 4. What this does not establish

Corrected normal-progress behaviour is accepted at draft level; **this is not a claim that every
possible input combination has been tested**, and no runtime test has been run. The
**judgment-record mapping and the reference-encoding choice both remain open**, and this packet
does not certify them as the only technical residuals. Historical views remain historical; no new
view artifact is proposed; hosted Encyclopedia parity remains unverified.

**This commit advances HEAD; Active Lane A resynchronizes before consuming approval.** `B-077`
remains `Answered` with no `Resolution`; `B-071` closure and all build holds unchanged.

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Row 0 catches supplied unresolved/mismatched references in both tables | §§1, 3 | Independent review |
| **Approve** | Valid-seal definition carried into the destination block; row 3 parenthesized | §3; fresh context with no join reaches row 7, not row 3 | Owning-tier application when authorized |
| **Approve** | Walkthrough completed — a named winning case for every row | §2 | Planned, not executed |
| **Reject** | The prior all-row coverage claim | Withdrawn — rows 1 and 2 had no case | Superseded by §2 |
| **Defer** | Judgment-record mapping, reference encoding, application, Encyclopedia parity, `B-071` closure | No storage sufficiency established | Bounded authorization and independent verification |
