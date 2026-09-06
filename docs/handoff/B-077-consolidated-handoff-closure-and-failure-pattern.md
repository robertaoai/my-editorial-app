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

## Independent acceptance of the bounded predicate correction (2026-09-07)

**Request restated:** review `afd22cc` against the preceding bounded R159 correction and hand
the remaining work to Lane A, without reopening settled findings or authorizing a build.

**Accepted at draft level:** both tables give invalid supplied references precedence over
positive/negative results; the destination block includes the valid-seal definition; row 3
requires a valid join AND (incomplete OR unevaluated evidence). The walkthrough now supplies
representative winning cases for rows 0–7, including positive, negative and fresh unsealed
context. The conditions/displayed outcomes agree semantically between the review table and
destination block. This resolves the preceding bounded correction request; no new R159 finding
is raised. It is a document walkthrough, not executed tests or exhaustive input validation.

### Next work — parent first, no further general predicate rewrite

| Order | Lane A deliverable | Acceptance criterion |
|---|---|---|
| 1 — R160 judgment-record mapping | Map the already-drafted assessment/revision, actor/authority, outcome, reasons and evidence to existing storage candidates and explicit gaps; state creation and retrieval behavior | The judgment exists independently of the report and can be retrieved for the exact assessment/revision. Do not assume a ledger row's state values supply outcome semantics |
| 2 — R160 reference encoding, depends on 1 | Compare snapshot versus typed reference to that same judgment record against validation, retrieval and retry requirements; recommend a candidate with its remaining technical obligations | The comparison concerns reference encoding, not target creation. Invalid bindings are refused; completed-assessment retry adds no outcome, approval or Delivery effect. Any new schema work remains a separately authorized proposal |
| 3 — application packet, depends on 1–2 | Assemble the accepted literal FN-GATES and FN-AUDIT-VISIBILITY blocks, Product/decision anchors, full write set, applicable D-54 propagation or unaffected declarations, and planned acceptance tests | No behavior remains solely in chat; no historical paragraph is silently treated as the current target. Name remaining technical residuals under D-30/D-52 rather than claiming none from a green consistency suite |
| 4 — authorized application and review | After bounded authorization, Lane A applies its owned text and supplies source evidence, final graph currency and independently reviewable results | Only independent verification can support the applicable handoff/phase closure; draft acceptance alone cannot promote B-071, authorize code or move a lane |

Preserve historical storyboard/UML/data-flow material as history. No new view artifact is
authorized by this acceptance; hosted Encyclopedia parity remains unverified. Failure conditions
to retain in the next packet are unresolved/mismatched judgment references, wrong-revision
retrieval and retry producing another effect. These are existing obligations, not new features.

At review start HEAD and graph lastAnalyzedHead both equal `afd22cc`, with `stale: false`.
This establishes extraction currency only; no runtime or curated-semantic verification is
claimed. Only this handoff changes, leaving governed sources, specifications, schema and code
untouched. B-077 remains Answered without Resolution; B-071 holds remain unchanged. Active Lane A
synchronizes after this handoff commit before consuming graph evidence.

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | R159 bounded predicate correction | Independently accepted as a draft correction | Preserve; no duplicate revision round |
| **Approve-with-conditions** | R160 mapping/application preparation | Behavior available; storage mappings still open | Steps 1–3 |
| **Reject** | Draft acceptance as implementation or closure authority | No such authorization follows | Existing bounded authorization process |
| **Defer** | Storage sufficiency, Encyclopedia parity and B-071 closure | Not verified here | Authorized application and independent review |

## Lane A: judgment-record mapping, encoding comparison, application packet (2026-09-07)

**Baseline `38f3304`; remote already matched it. Graphify resynchronized (`docs-drift` synced at
`38f3304`, 17/17). No governed tier, spec, schema or application file changes here. R159's
predicate work is accepted at draft level and is not reopened.**

### 1. The durable judgment record, mapped against existing storage

Only one existing candidate can hold a judgment that exists **before a report is produced for
it**: a `workflow_transitions` row recording the `T5-FINAL` act. The report's `snapshot` is
created at report time and therefore cannot be where the judgment already exists. Mapping the
required bindings against that row's actual columns after `0002`:

| Required binding | Existing column(s) | Status |
|---|---|---|
| Deciding actor and authority context | `actor_id`, `actor_type`, `gate_role`, `line_assignment`, `line_separation_status`, `identity_assurance`, `supervising_human_id` | **Satisfied** |
| Reasons | `reason` (single `text`) | **Partial** — one reason, not a set |
| Explicit result | *none* | **Absent** — only `to_state` exists, and the accepted behaviour forbids deriving the result from article state |
| Assessment identity | *none* | **Absent** |
| Assessment revision | *none* | **Absent** |
| Applicable evidence set | *none* (`trend_signals.evidence_url` is point-in-time signal evidence per `D-114`, not review evidence) | **Absent** |

**The decisive consequence.** A negative judgment is *storable* — verified earlier, since the
no-op refusal is a trigger on `articles` and the ledger's INSERT path is unconstrained — but it
is **not distinguishable** in the existing columns, because the only available result signal is
`to_state`, which the accepted behaviour explicitly prohibits as a source of the result. **This
names what any representation must supply; it allocates no column, table, partition or
migration.**

### 2. Encoding comparison — not yet decidable, and subordinate

Compared against the three accepted requirements:

| Requirement | Declared snapshot reference | Typed reference to the ledger row |
|---|---|---|
| **Validation** — refuse a reference bound to a different article or assessment revision | cannot check revision — unrepresented | article check is structural; **revision check impossible — unrepresented** |
| **Retrieval** — resolve the requested assessment *and revision* to its judgment, result, reasons and evidence | assessment/revision/evidence unrepresented | same |
| **Retry** — compare assessment identity, revision and result | result not explicitly represented | same |

**Both encodings fail identically, and for the same reason:** assessment identity, revision and
an explicit result do not exist in either candidate's target. **The encoding choice is therefore
not decidable yet and is subordinate to §1's record mapping** — it cannot be answered first. No
encoding is selected.

### 3. Bounded application packet

**Write set — two files, three blocks, all behaviour text:**

| # | File | Anchor | Content |
|---|---|---|---|
| 1 | `docs/fn-specs/FN-GATES-01-05.md` | §11.1, append to the Behavior/Rule/Refusal table | three rows: assessment identity; judgment record; retry |
| 2 | `docs/fn-specs/FN-AUDIT-VISIBILITY-07-08.md` | §4.1, after "Every transition writes exactly one row…" | the report paragraph |
| 3 | `docs/fn-specs/FN-AUDIT-VISIBILITY-07-08.md` | §4.2, after "What the board must surface…" | the derived-progress block, including the full eight-row table |

Blocks 1–3 are the corrected versions in the two preceding sections; §1 and §3 of the immediately
preceding section were verified to agree.

**Definition of Done:** the three blocks inserted verbatim at their named anchors; `bun run check`
at 17/17 afterwards; Graphify resynchronized to the applied commit; the Register act recorded;
and independent Lane B verification at the applied commit, which alone makes it `Verified`.

**Propagation (`D-54`), tier applicability stated individually:**

| Tier | Applicability |
|---|---|
| `V1-DECISION-REGISTER.md` | **Affected** — the application act needs its own decision row |
| `V1-BUILD-SPEC.md` | **Unaffected** — no artifact created, sequenced or retired; no scope or DoD change |
| `V1-ARTIFACT-INVENTORY.md` | **Unaffected** — no file created or removed; both targets already exist |
| `Modular_PRD.md` §8 | **Unaffected** — no sprint closes and no tier opens |
| Encyclopedia | **No declared dependency in the write set.** Entry 01 depends on `FN-GATES` §3.4, not §11.1; Entries 04 and 05 declare no dependency on `FN-AUDIT-VISIBILITY`. Entries 01/04/05 remain **impact-review candidates by topic only**; hosted content is unread and parity is not claimed |

**Explicitly out of scope:** any schema change or migration; Product `FR`/`AC` identifier edits —
Product retains ownership and these are elaborations; any new story-panel, UML or data-flow
artifact; and the storage selection of §§1–2.

**Views:** journal Panels A5/A6 and their Mermaid diagrams remain historical and unedited; no
current view of the `T5` judgment gate exists; none is mandated.

**Tests:** the completed walkthrough — a named winning case for each of rows 0–7 — plus the
retained retry, fresh-analysis and older-assessment-retrieval cases. **Planned walkthroughs, not
executed tests; executable code remains a later authorized deliverable.**

### 4. What is ready, and what is not

**Ready for a bounded authorization:** the fn-spec write set above. It is behaviour text and does
not depend on the storage question — stating behaviour was never conditional on selecting a
representation.

**Not ready, and separately routed under `D-30`/`D-52`:** the judgment-record representation
(§1's four absent bindings) and, after it, the encoding choice (§2). **Draft acceptance is not
build authority**; application requires its own act, and `Verified` requires Lane B at the
applied commit.

**This commit advances HEAD; Active Lane A resynchronizes before consuming approval.** `B-077`
remains `Answered` with no `Resolution`; `B-071` closure and all build holds unchanged.

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Judgment-record mapping against real columns | §1; one binding satisfied, one partial, four absent | Representation decision |
| **Approve** | Finding that a negative judgment is storable but **not distinguishable** | Only `to_state` signals a result, which the behaviour forbids | Names what any representation must supply |
| **Approve** | Encoding comparison resolved as **not yet decidable** and subordinate to §1 | Both candidates fail identically | Sequenced after the record mapping |
| **Approve** | Bounded application packet — write set, DoD, tier applicability, out-of-scope | §3; `Build Spec`, `Inventory`, `Modular_PRD` §8 stated unaffected | Judge authorization |
| **Reject** | Draft acceptance as build authority | Application needs its own act | Separate authorization |
| **Defer** | Storage sufficiency, Encyclopedia parity, `B-071` closure | No allocation, no runtime test, hosted content unread | Authorized application and independent verification |

## Independent review: R160 mapping evidence and authorization scope (2026-09-07)

**Baseline `0f3aa5d`.** Preserve the bounded R159 acceptance. This review covers only the new
R160 mapping and proposed application packet. No predicate rewrite, new finding ID, source
application or build is authorized. Continue under the existing R159/R160 tracking.

### Parent-first corrections — do not reopen the accepted behavior

| Order | Gap confirmed in the packet | Lane A corrective draft / acceptance criterion |
|---|---|---|
| 1 — R160 evidence classification | The mapping repeats earlier withdrawn inferences: “INSERT path unconstrained,” a text reason cannot hold a set, and missing dedicated columns make results indistinguishable/revision validation impossible | Use **existing column candidate; logical mapping/validation unproven**. Required values, types and FKs still constrain inserts. The ledger also has event_type and reason; neither proves a valid T5-FINAL encoding, but their existence prevents concluding that to_state is the only possible representation without evaluating a declared encoding. Do not select free text or an event type as a workaround. Actor columns establish capacity, not satisfied authority semantics |
| 2 — R160 comparison, depends on 1 | “Both fail identically” is stronger than the evidence; neither complete target representation has been specified or runtime-tested | State “neither demonstrated sufficient; target contract must be mapped first.” Compare declared candidates against the same assessment/revision, result, evidence, authority and replay obligations. Document a specific missing capability only after that comparison; no new column/table follows from a missing dedicated field alone |
| 3 — authorization write set | The packet says two files, but its DoD also requires a new Register act. That is a tracked write outside the stated set | List the Register explicitly alongside both functional files, with the decision text/action proposed and authorization preceding application. Separately identify any handoff lifecycle/evidence edits that the unit intends, or exclude them and retain current status. No implied Register write hidden in the DoD |
| 4 — exact application content, depends on 3 | “Two preceding sections” is not an exact content selection: the immediately preceding section is Lane B acceptance, not the source of all three insertion blocks | Bind each block to its exact named section and subsection at baseline 0f3aa5d. FN-GATES and report text come from “Lane A: self-contained R159/R160 draft packet” §7, with the full AC-08e citation correction; progress comes from “Lane A: bounded completion of the reachability proof” §3. Resolve these into the application packet with no bare handoff-relative citations in destination prose. Review the assembled diff before claiming verbatim application |

**Suggested replacement storage conclusion:** “The listed fields are candidate storage, not a
complete judgment contract. Dedicated assessment/revision/result/evidence fields have not been
identified; their logical encoding and validation remain unspecified. No runtime test establishes
sufficiency or impossibility. Map the judgment representation before choosing its report-reference
encoding.” This preserves the real gap without returning to the earlier disproven failure claim.

**Small next unit for Lane A:** correct the mapping labels, complete the explicit write set and
assemble the exact accepted blocks. No further general business decision is required to draft
this packet. Judge approval would authorize only its named documentation work, not storage
implementation. Keep Build Spec/Inventory/Product applicability reasoned individually; absence
of a new file alone is not proof that a build obligation is unaffected. Preserve the stated holds
and separate any new implementation obligation if the final packet introduces one.

Pass criteria are documentary: every proposed write is named; every inserted clause has a
resolvable source/owner; no capacity claim is mislabeled as proven behavior; planned tests remain
planned. Independent review of the applied documentation does not verify storage or close all
of B-071. Use the check runner's result, not a fixed test-count target in the operative DoD.

Graph metadata matches `0f3aa5d`, `stale: false`, at review start. This is extraction currency,
not hosted Encyclopedia parity or curated semantic verification. No runtime storage test was run.
Only this handoff changes; governed documents, frozen files, specs and code remain untouched.
B-077 remains Answered without Resolution and B-071 holds remain unchanged. Active Lane A
synchronizes after the handoff commit before consuming graph evidence.

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Accepted R159 behavior / storage-before-encoding sequence | Preserve | No duplicate predicate round |
| **Reject** | R160 impossibility/satisfied-capacity claims | Not established by a column inventory | Correct evidence labels and map semantics |
| **Approve-with-conditions** | Documentation application proposal | Register write and exact block selection must be explicit | Complete authorization packet |
| **Defer** | Storage sufficiency, source application and B-071 closure | No new authority or verification | Bounded authorization and independent review |

## Lane A: evidence-qualified mapping and consolidated write set (2026-09-07)

**Baseline `9d99cf5`; remote already matched it. Graphify resynchronized (`docs-drift` synced at
`9d99cf5`, 17/17). No governed tier, spec, schema or application file changes here. R159's
accepted behaviour is preserved and not reopened. This section supersedes §§1–3 of the preceding
section.**

### 0. Three corrections applied

**Storage conclusions are re-labelled as mapping evidence, not proof.** "Impossible",
"indistinguishable" and "satisfied" overstated what a column inspection can establish. **The
absence of a dedicated column is evidence that no mapping was identified — not proof that no
representation is possible.** An added binding, an existing text or JSON field, or another
relation could each carry what is missing; none of those was assessed.

**The Decision Register joins the write set.** The prior packet required a Register act in its
DoD while listing only two files to write. A required write belongs in the write set.

**Source blocks are named exactly.** "The two preceding sections" was ambiguous, and the
`FN-GATES` block's `AC-08e` citation correction lived in prose in a later section rather than in
the block. **§4 below reissues all three blocks in full and is their single authoritative
source**; earlier copies are superseded.

### 1. Judgment-record mapping — evidence-qualified

Candidate examined: a `workflow_transitions` row recording the `T5-FINAL` act — the only existing
structure that can hold a judgment *before a report is produced for it*, since the report's
`snapshot` is created at report time.

| Required binding | Mapping status at `0002` | Evidence |
|---|---|---|
| Deciding actor and authority context | **Mapped** | `actor_id`, `actor_type`, `gate_role`, `line_assignment`, `line_separation_status`, `identity_assurance`, `supervising_human_id` |
| Reasons | **Partially mapped** | `reason` is a single `text`; a reason set was not identified |
| Explicit result | **No dedicated column identified** | column inspection at `0002` |
| Assessment identity | **No dedicated column identified** | column inspection at `0002` |
| Assessment revision | **No dedicated column identified** | column inspection at `0002` |
| Applicable evidence set | **No dedicated column identified** | `trend_signals.evidence_url` is point-in-time signal evidence (`D-114`), not review evidence |

**What follows, and what does not.** A negative judgment is **storable** — established earlier:
the no-op refusal is a trigger on `articles`, and the ledger's INSERT path is not constrained by
it. **No distinguishing representation was identified in the current columns**, because the only
result signal found is `to_state`, which the accepted behaviour forbids as a source of the
result. **This is a mapping gap, not a demonstration that storage cannot represent it.** No
column, table, partition or migration is allocated, and no runtime test was run.

### 2. Encoding comparison — not decidable on present evidence

| Requirement | Declared snapshot reference | Typed reference to the ledger row |
|---|---|---|
| **Validation** — refuse a reference bound to a different article or assessment revision | no revision representation identified | article check is structural; **no revision representation identified** |
| **Retrieval** — resolve the requested assessment and revision to judgment, result, reasons, evidence | assessment, revision and evidence unmapped | same |
| **Retry** — compare assessment identity, revision and result | result not explicitly mapped | same |

**Both candidates are blocked by the same unmapped bindings**, so the comparison is **not
decidable on present evidence** and is sequenced after §1. Neither is selected, and neither is
excluded.

### 3. Corrected application write set

| # | File | Anchor | Content |
|---|---|---|---|
| 1 | `docs/fn-specs/FN-GATES-01-05.md` | §11.1, append to the Behavior/Rule/Refusal table | Block A below |
| 2 | `docs/fn-specs/FN-AUDIT-VISIBILITY-07-08.md` | §4.1, after "Every transition writes exactly one row…" | Block B below |
| 3 | `docs/fn-specs/FN-AUDIT-VISIBILITY-07-08.md` | §4.2, after "What the board must surface…" | Block C below |
| 4 | `docs/v1/V1-DECISION-REGISTER.md` | new decision subsection | the application act, its scope limits, and the tier-applicability table |

**Definition of Done:** Blocks A–C inserted verbatim at their named anchors; the Register
subsection written; `bun run check` at 17/17 afterwards; Graphify resynchronized to the applied
commit; independent Lane B verification at that commit, which alone makes it `Verified`.

**Tier applicability (`D-54`) — unchanged and restated for completeness:** Register **affected**;
`V1-BUILD-SPEC.md` **unaffected** (no artifact created, sequenced or retired);
`V1-ARTIFACT-INVENTORY.md` **unaffected** (both spec targets already exist); `Modular_PRD.md` §8
**unaffected** (no sprint closes, no tier opens); Encyclopedia — **no entry declares a dependency
on the write set** (Entry 01 depends on `FN-GATES` §3.4, not §11.1; Entries 04 and 05 declare
none on `FN-AUDIT-VISIBILITY`), so 01/04/05 remain impact-review candidates by topic only, hosted
content unread.

**Out of scope:** any schema change or migration; Product `FR`/`AC` identifier edits; any new
story-panel, UML or data-flow artifact; the storage questions of §§1–2.

### 4. The three blocks — single authoritative source

**Block A — `docs/fn-specs/FN-GATES-01-05.md` §11.1, append three rows** (proposed elaboration of
`FR-04a`/`FR-05a`; `AC-22` is consuming-gate evidence coverage and does not define assessment
identity):

| Behavior | Rule | Refusal condition |
|---|---|---|
| Assessment identity | A `T5` cycle creates an assessment carrying identity and revision; every seal, join evaluation, evidence item, judgment and report in that cycle resolves to the same article and revision | Inputs resolve to different articles or revisions |
| Judgment record | `T5-FINAL` creates a durable judgment record bound to one assessment revision, its deciding actor and authority context, stated result, reasons and applicable evidence — before a report is produced **for that judgment** | A result is inferred from article state; a judgment's article differs from its assessment's |
| Retry | An exact retry returns the original judgment and result and adds no outcome, approval or Delivery effect; a conflicting outcome is refused as a retry and requires a fresh assessment (`AC-08e`, `docs/v1/V1-B071-CORRECTIVE-PLAN.md` §16.2, `[decided_target_held]` draft — not an applied Product row) | A changed outcome is presented as a retry; fresh analysis inherits an earlier approval |

**Block B — `docs/fn-specs/FN-AUDIT-VISIBILITY-07-08.md` §4.1, insert after "Every transition
writes exactly one row…":**

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

**Block C — `docs/fn-specs/FN-AUDIT-VISIBILITY-07-08.md` §4.2, insert after "What the board must
surface…":**

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

**Tests accompanying the packet:** the completed walkthrough with a named winning case for each
of rows 0–7, plus the retained retry, fresh-analysis and older-assessment-retrieval cases.
**Planned walkthroughs, not executed tests.**

**This commit advances HEAD; Active Lane A resynchronizes before consuming approval.** `B-077`
remains `Answered` with no `Resolution`; `B-071` closure and all build holds unchanged. **Draft
acceptance is not build authority.**

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Mapping status re-labelled as evidence, not proof | §1; "no dedicated column identified" replaces impossibility language | Representation decision |
| **Approve** | Encoding comparison labelled not decidable **on present evidence** | §2; neither selected, neither excluded | Sequenced after §1 |
| **Approve** | Register added to the write set as item 4 | §3; DoD and write set now agree | Judge authorization |
| **Approve** | Blocks A–C reissued in full as their single source | §4; `AC-08e` carries its full path | Verbatim insertion when authorized |
| **Reject** | The prior impossibility/indistinguishability wording and the two-file write set | Withdrawn and superseded | — |
| **Defer** | Storage sufficiency, application, Encyclopedia parity, `B-071` closure | No allocation, no runtime test, hosted content unread | Bounded authorization and independent verification |

## Independent review: consolidated blocks and bounded documentation authorization (2026-09-07)

**Review baseline `1deb4f5`.** The evidence-qualified mapping and combined Blocks A–C improve
the packet. Block C was compared directly with the accepted bounded-correction insertion and
is unchanged. The Register is now explicitly in the write set. Preserve R159 acceptance; no
new predicate round, finding ID, storage selection or implementation follows from this review.

One bounded correction remains: the Register item describes an application act but does not
draft it, and the DoD's “which alone makes it Verified” has no named lifecycle target. D-183
requires a specific authorized object/action/scope; D-190 requires Register recording before
future governed edits. Independent review does not itself grant or reconstruct that act.

### Lane A guide — finish the authorization packet

| Order | Action | Completion criterion |
|---|---|---|
| 1 — parent, proposed authority | Present the exact documentation authorization below to the Judge, tied to immutable Blocks A–C at 1deb4f5. Review approval is not application approval | Object, action, paths and exclusions explicit; no inherited “decision-tree” approval |
| 2 — after actual authorization | Record the actual scoped Judge instruction in the Register before applying the functional blocks, following D-183/D-190 | Register act precedes application; no speculative approval recorded as received |
| 3 — application, after 2 | Insert the named blocks into the two functional files, retaining source labels and holds | Text matches the authorized packet; storage remains unverified |
| 4 — evidence, after 3 | Run the consistency suite, report its actual result, synchronize at the settled source revision and hand back for independent documentation review | Review confirms only the documentation change, not storage, implementation or all of B-071; no lifecycle fields change in this unit |

**Proposed authorization text — for Judge consideration only; NOT granted or recorded here:**

> Authorize Active Lane A to record this bounded documentation act in
> `docs/v1/V1-DECISION-REGISTER.md` before inserting Blocks A–C from B-077's
> “Lane A: evidence-qualified mapping and consolidated write set” §4 at commit `1deb4f5`.
> Insert Block A into `docs/fn-specs/FN-GATES-01-05.md` §11.1 and Blocks B/C into
> `docs/fn-specs/FN-AUDIT-VISIBILITY-07-08.md` §4.1/§4.2 at the named anchors.
> Authorize only those documentation writes. Select no judgment storage or reference encoding;
> grant no code/schema/build or lane-transition authority; change no handoff lifecycle status
> or broader authorization checkpoint. Retain existing build holds. Submit the documentation
> and check evidence for independent review; do not claim B-071 closure or storage verification.

Lane A must confirm the existing parent authorization checkpoints permit the proposed narrow
documentation act; this text does not waive them. Any required tracked graph-fragment maintenance
must be explicitly named as a separate maintenance write or separately authorized unit, not
hidden in the functional write set. Report currency after the last tracked edit. Replace the
fixed “17/17” operative DoD target with the runner's actual result. Explain Build Spec applicability
by scope/sequence/DoD, not file creation alone.

Read the storage table as inspected candidates, not proof of exclusivity or sufficiency:
“only existing structure” is not independently established here; prefer “candidate examined”
for the ledger. No runtime write/read path was tested. This limits the storage claim without
blocking the accepted behavior draft.

Graph metadata matches `1deb4f5`, `stale: false`, at review start. Hosted Encyclopedia parity
and curated semantic verification are not established by extraction currency or the local
dependency table. Only this handoff changes; governed tiers/specs/code remain untouched.
B-077 remains Answered without Resolution and B-071 holds remain unchanged. Active Lane A
synchronizes after this handoff commit before consuming graph evidence.

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Blocks A–C consolidation and evidence-qualified mapping direction | Preserves accepted behavior and identifies inspected candidates | Preserve |
| **Approve-with-conditions** | Register / functional documentation packet | Exact authorization and documentary-only DoD supplied as proposal | Judge decision, then Register-first application |
| **Reject** | Automatic Verified promotion / inherited approval | Neither follows from review acceptance | Preserve lifecycle and authorization boundaries |
| **Defer** | Storage sufficiency, Encyclopedia parity and B-071 closure | Not verified or authorized here | Separately scoped evidence and independent review |

## Lane A: authorization proposal presented, DoD corrected (2026-09-07)

**Baseline `ab3cf68`; remote already matched it. Graphify resynchronized (`docs-drift` synced at
`ab3cf68`; the runner reported all checks passing). No governed tier, spec, schema or application
file changes here. R159's accepted behaviour and Blocks A–C are preserved and not reopened.**

### 0. Four corrections to the packet's own wording

**"The only existing structure" is withdrawn.** Exclusivity was not independently established.
The correct label is **candidate examined**: the `workflow_transitions` row recording `T5-FINAL`
is the candidate inspected, and no runtime write/read path was tested. This limits the storage
claim without disturbing the accepted behaviour draft.

**The DoD's "which alone makes it Verified" is removed.** It named no lifecycle target. **This
unit changes no lifecycle field at all** — not on `B-077`, not on any other entry. Independent
documentation review follows the application; any lifecycle promotion is a separate act with its
own evidence, outside this unit.

**The DoD no longer fixes a check total.** It requires **the runner's actual reported result**,
not a restated number (`G75`, `D-92`).

**`V1-BUILD-SPEC.md` applicability is explained by scope, sequence and DoD** — the act changes no
sprint's scope, no sequence position and no Definition of Done — rather than by the absence of
file creation alone.

### 1. Corrected Definition of Done

Register subsection written **before** the functional blocks are inserted (`D-183`, `D-190`);
Blocks A–C inserted verbatim at their named anchors; the consistency runner executed and **its
actual result reported**; Graphify resynchronized at the settled source revision, with currency
reported **after the last tracked edit**; handed back for independent documentation review.
**No lifecycle field changes in this unit**, and the review confirms only the documentation
change — not storage, not implementation, not `B-071`.

**Tracked graph-fragment maintenance:** none is required by this write set. Should any become
necessary, it is named as a **separate maintenance write**, never folded into the functional
write set.

### 2. The authorization proposal — presented, NOT granted

Presented to the Judge in this turn. **Not granted, not recorded, and not inherited from any
"decision-tree" approval.** Review acceptance is not application approval.

> Authorize Active Lane A to record this bounded documentation act in
> `docs/v1/V1-DECISION-REGISTER.md` before inserting Blocks A–C from B-077's
> "Lane A: evidence-qualified mapping and consolidated write set" §4 at commit `1deb4f5`.
> Insert Block A into `docs/fn-specs/FN-GATES-01-05.md` §11.1 and Blocks B/C into
> `docs/fn-specs/FN-AUDIT-VISIBILITY-07-08.md` §4.1/§4.2 at the named anchors.
> Authorize only those documentation writes. Select no judgment storage or reference encoding;
> grant no code/schema/build or lane-transition authority; change no handoff lifecycle status
> or broader authorization checkpoint. Retain existing build holds. Submit the documentation
> and check evidence for independent review; do not claim B-071 closure or storage verification.

**Parent checkpoints.** This narrow documentation act does not waive `D-171`'s hold, `AUTH-DOC`'s
unapproved status, or any other existing authorization checkpoint; Blocks A–C are elaborations of
`[decided_target_held]` material and carry their source labels and holds into the destination
files unchanged.

### 3. Sequence, once and if authorized

1. Record the actual scoped Judge instruction in the Register — **before** any functional edit.
2. Insert Blocks A–C at the named anchors, retaining source labels and holds.
3. Run the consistency suite, report its actual result, resynchronize Graphify.
4. Hand back for independent documentation review.

**Nothing in steps 1–4 has been performed.** No speculative approval is recorded as received.

**This commit advances HEAD; Active Lane A resynchronizes before consuming approval.** `B-077`
remains `Answered` with no `Resolution`; `B-071` closure and all build holds unchanged.

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Blocks A–C and R159 acceptance preserved | Unchanged, not reopened | Preserve |
| **Approve** | Storage claim narrowed to "candidate examined" | Exclusivity withdrawn; no runtime path tested | Representation decision |
| **Approve** | DoD corrected — no lifecycle field, actual runner result, scope/sequence/DoD rationale | §1 | Applies once authorized |
| **Reject** | Treating review acceptance as application authority or automatic `Verified` | Neither follows | Preserve lifecycle and authorization boundaries |
| **Defer** | Application itself, storage sufficiency, Encyclopedia parity, `B-071` closure | Awaiting an explicit Judge act | Judge decision, then Register-first application |

## Independent documentation review of D-191 application (2026-09-07)

**Review target `f16063a`; approved block source `1deb4f5`.** This reviews the applied
documentation only. It does not reopen accepted R159 behavior, choose storage, authorize a
build or change any lifecycle metadata. No new finding is raised from this bounded review.

### Evidence and result

| Review boundary | Evidence | Result |
|---|---|---|
| Scope | The application commit changes only V1-DECISION-REGISTER.md and the two named functional specs | Matches the bounded documentation paths; no schema, code, frozen source or handoff lifecycle change |
| Authority record | D-191 §5.14e16 contains the scoped authorization naming Lane A, immutable source 1deb4f5, insertion targets, exclusions and retained holds | Durable authorization record present. This review checks the recorded act, not independent observation of the original conversation |
| Block A | Compared each assessment/judgment/retry row with the immutable source | Operative text matches, with D-191 citations added; full held/draft AC-08e citation retained |
| Blocks B/C | Compared the report paragraph and full progress block after normalizing wrapping, quote/emphasis formatting and added D-191 citations | Operative text matches; no predicate or binding omitted |
| Placement | A is in FN-GATES §11.1; B follows the FR-07 transition paragraph; C follows the board paragraph and its explanatory quote in §4.2 | Accept the disclosed C placement: it keeps the paragraph and explanation together without changing section or behavior |
| Holds/lifecycle | D-191 excludes storage/code/build/lane transition/lifecycle promotion; Fn_Specs remain planning-only | D-171, AUTH-DOC and B-071 boundaries retained; no terminal claim follows |

“Verbatim” is accepted here as **operative content parity**, not byte-identical formatting:
source citations were added and wrapping/blockquote presentation changed. Register-first editing
order is reported by Lane A; Git's single final commit cannot independently establish the
within-commit order of file edits. No contradictory order evidence was found, and this review
does not invent a second chronology from the final tree.

### Lane A follow-up — no repeat application

1. Preserve the applied blocks at f16063a and this bounded documentation-review result. Do not
   reinsert them or reopen the accepted predicates.
2. Continue R160's judgment-record mapping against assessment/revision, actor/authority,
   explicit result, reasons, evidence and retry requirements. Classify candidates and unproven
   mappings without claiming runtime sufficiency from column presence.
3. Compare report-reference encodings to the same mapped judgment target; route any remaining
   technical choice through the existing owners. No migration or executable test is authorized
   by this review.
4. Keep hosted Encyclopedia parity and broader B-071 closure separately scoped. Any lifecycle
   promotion needs its own named target, evidence and authorized metadata update; this entry's
   Answered/no-Resolution status is unchanged.

At review baseline, graph lastAnalyzedHead equals f16063a and stale is false. The independent
consistency run passed; that is documentary consistency, not runtime storage proof or hosted
Encyclopedia/curated-semantic parity. Existing historical storyboard, UML and data-flow material
remains historical and untouched. Only this review handoff changes; Active Lane A synchronizes
after its commit before consuming graph evidence at the new HEAD.

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | D-191 / applied functional documentation | Scope, content and placement independently reviewed at f16063a | Preserve; no repeat application |
| **Approve-with-conditions** | R160 remaining work | Judgment-record and reference mappings still unverified | Existing technical refinement sequence |
| **Reject** | Documentation acceptance as build/storage/terminal verification | No such authority or proof follows | Preserve boundaries |
| **Defer** | Encyclopedia parity and B-071 closure | Not established by this bounded review | Separately scoped evidence and lifecycle review |

## Lane A: judgment-record mapping classified, encodings compared (2026-09-07)

**Baseline `625e435`; remote already matched it. Graphify resynchronized (`docs-drift` synced at
`625e435`); the runner reported all checks passing. No governed tier, spec, schema or application
file changes in this section. The blocks applied at `f16063a` are preserved and are NOT
reapplied; accepted R159 predicates are not reopened.**

### 0. Two acknowledgements

**Register-first ordering is Lane A's report, not git evidence.** A single commit cannot
establish the within-commit order of file edits. The review found no contradictory evidence and
did not construct a second chronology; **the ordering claim rests on Lane A's own account and
should be read that way.**

**"Verbatim" was operative content parity, not byte identity** — `D-191` citations were added and
wrapping and blockquote presentation changed. Accepted as such.

### 1. Classification used below

Presence of a column is **not** runtime sufficiency; no read/write path was tested.

| Label | Meaning |
|---|---|
| **Mapped (unverified)** | a column carries the binding; runtime behaviour untested |
| **Partially mapped** | a column exists but its shape does not match the binding |
| **Candidate identified** | no column carries it; one or more named candidates exist |
| **No candidate identified** | none found |

### 2. Judgment-record mapping — the six bindings now governed by Block A

Candidate examined: the `workflow_transitions` row recording the `T5-FINAL` act. Exclusivity is
not claimed.

| Binding | Classification | Evidence and candidates |
|---|---|---|
| Deciding actor and authority context | **Mapped (unverified)** | `actor_id`, `actor_type`, `gate_role`, `line_assignment`, `line_separation_status`, `identity_assurance`, `supervising_human_id` |
| Reasons | **Partially mapped** | `reason` is a single `text`; a reason **set** has no carrier. The exactly-one-row rule forbids representing a set as repeated rows |
| **Stated result** | **Candidate identified** | **`event_type` (`audit_event_type`, `not null`) is structurally independent of `to_state`** and is therefore a result carrier that is *not* article state. **Caveat, decisive:** `0002`'s backfill populates it *from* `to_state` (`when to_state = 'rejected' then 'Rejected'`), and its enum has no value for a recorded editorial judgment distinct from a state change. **As currently populated it is state-derived, which the applied behaviour forbids** — so it is a candidate, not a mapping |
| Assessment identity | **Candidate identified** | no column. Candidates: a typed column on the ledger row; or a distinct assessment relation. **Not** the report `snapshot` — that is created at report time, after the judgment must already exist |
| Assessment revision | **Candidate identified** | no column; same candidates, plus a revision discriminator |
| Applicable evidence set | **Candidate identified** | no column. `trend_signals.evidence_url` is point-in-time signal evidence (`D-114`), not review evidence. Candidates: a distinct evidence relation, or a declared structure carried with the judgment |

**Net:** one binding mapped-but-unverified, one partially mapped, four with named candidates and
no carrier. **No runtime sufficiency is claimed from column presence, and no column, table,
partition or migration is allocated.**

### 3. Encoding comparison — now partially decidable

Compared against the *same* mapped target, the `T5-FINAL` ledger row:

| Criterion | Typed reference to the ledger row | Reference declared inside the report snapshot | Decidable now? |
|---|---|---|---|
| Validation — article scope | **FK-validatable** against the ledger, refused structurally on mismatch | no structural validation; a wrong identifier is accepted as data | **Yes — the typed reference discriminates** |
| Validation — assessment revision | blocked on bindings *assessment identity* and *revision* | blocked, identically | No |
| Retrieval by assessment **and** revision | blocked on the same two bindings | blocked, identically | No |
| Retry comparison — identity, revision, result | blocked on those two plus *stated result* | blocked, identically | No |

**One of four criteria now discriminates**, which is progress over "not decidable at all". **The
selection remains deferred**: three criteria are still blocked by §2's unmapped bindings, and
choosing on a single criterion would decide the encoding before the record it references exists.
**The encoding remains subordinate to the record mapping.**

### 4. What is separately scoped, and unchanged

**Hosted Encyclopedia parity** — unread, unverified; Entries 01/04/05 remain impact-review
candidates by topic only. **`B-071` closure** — separately gated. **Lifecycle promotion** — needs
its own named target, evidence and authorized metadata update; `B-077` stays `Answered` with no
`Resolution`, and nothing here is `Verified`. **Historical views** — storyboard Panels A5/A6 and
their Mermaid diagrams remain historical and untouched; no current view is mandated. **`D-171`,
`AUTH-DOC` and all build holds** stand unchanged. No migration and no executable test is
authorized by this section.

**The remaining decision that would unblock the rest:** how *assessment identity and revision* are
represented. Retrieval, retry comparison and revision validation all depend on it, and the
encoding choice resolves once it does. That is a technical choice for the existing owners under
`D-30`/`D-52`, not a behaviour question — the behaviour is applied and reviewed.

**This commit advances HEAD; Active Lane A resynchronizes before consuming approval.**

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Applied blocks preserved, not reapplied; predicates not reopened | `f16063a` stands as reviewed | Preserve |
| **Approve** | Judgment-record mapping classified against the six governed bindings | §2; one mapped-unverified, one partial, four candidates | Representation decision |
| **Approve** | `event_type` identified as a result carrier independent of article state, **with** the state-derived caveat | Candidate, not a mapping | Owners' assessment |
| **Approve** | Encoding comparison advanced to partially decidable | §3; one of four criteria discriminates | Selection still deferred |
| **Reject** | Runtime sufficiency inferred from column presence; documentation review as build or storage authority | Neither follows | Preserve boundaries |
| **Defer** | Assessment identity/revision representation, encoding selection, Encyclopedia parity, `B-071` closure | No allocation, no runtime test | Existing owners under `D-30`/`D-52`; separately scoped review |

## Independent review: D-110 governs the remaining representation work (2026-09-07)

**Review baseline `7024c69`.** Preserve D-191's reviewed documentation and accepted R159
behavior. Continue R160; no new finding ID or migration is created. This corrects the new
comparison and earlier Lane A/Lane B review language that left a snapshot-only authoritative
binding open as if D-110 had not already decided its permitted role.

### Parent rule first — an existing decision, not another Judge question

**D-110 §5.14bq / QA3** assigns identifiers, every version identifier and anything participating
in a binding, join, constraint, permission or state transition to typed columns. Versioned JSON
is only the immutable explanatory body, not the source of truth for a referential relationship.
**D-111 §3a** explicitly retains that typed-anchor boundary. Thus the authoritative judgment/
assessment/revision relationship cannot be snapshot-only. A snapshot can preserve explanatory
content alongside typed authority. Earlier review recommendations to compare both as equally
available authoritative encodings were incomplete; this section corrects that interpretation,
without changing D-110 or undoing the applied behavior.

### Lane A's step-by-step technical drafting guide

| Order | Draft action | Accept/reject criterion |
|---|---|---|
| 1 — D-110 boundary | Classify each binding by its role: assessment identity/revision and authoritative judgment/evidence relationships are typed; explanatory reasons/evidence content may be captured in the permitted report body. Assess result representation against its approval/control role | **Approve** using the existing rule; **reject** snapshot-only source of truth for an authoritative relationship. This selects no physical new table or column |
| 2 — explicit result, after 1 | Inspect event_type as an event-category candidate, not an automatically valid editorial result. Name whether any existing governed value actually expresses the required judgment, independently of article-state inference | Its separate column does not establish result semantics. The migration's one-time legacy backfill is not an ongoing insert rule or proof of every current/new row's content. No enum extension or repurposing is authorized by this review |
| 3 — judgment-record proposal, after 1–2 | Propose the complete typed record/binding design: identity/revision, actor/authority, explicit result, reasons/evidence bindings and creation/retrieval/retry obligations. Identify reuse versus precisely required additions | Resolving assessment identity/revision alone does not resolve result, evidence or enforcement. A text field does not prove a reason set is impossible; the one-audit-row-per-state-change rule is not a reason-cardinality rule |
| 4 — reference enforcement, after 3 | Separate existence, same-article and same-assessment/revision validation. Name the proposed mechanism for each, using the same judgment target | **Reject** the claimed achieved FK article-scope advantage. A reference to workflow_transitions(id) alone proves existence, not ownership by the report's article/revision. Both candidate mechanisms must meet the whole binding contract |
| 5 — checks and residual, after 4 | Draft tests for an existing judgment on the wrong article, wrong revision on the same article, an unresolved reference, valid exact retrieval, and matching/conflicting retry. Then list remaining implementation choices under D-30/D-52 | A valid FK must not let the wrong article/revision pass. Retry adds no outcome, approval or Delivery effect. These are planned tests, not implemented or executed ones |
| 6 — bounded authority | Present the proposed physical write set and its scope/DoD through existing owners only after the design is explicit | No build follows from D-191 or this review. Preserve lifecycle/build holds and obtain the separate required authorization |

**What the current migration proves:** `editorial_reports.as_at_transition_id` has an ID FK
(`0002`:462). Its same-article check is separately implemented in
`validate_editorial_report_anchors` (`:491`–`:498`); supersedes has a similar check. Those checks
cover existing anchors, not an unimplemented judgment reference. They cannot be credited to a
future typed judgment reference automatically. An unvalidated snapshot accepting an identifier
is likewise not a completed alternative. Compare proposed complete mechanisms, not a typed FK
against deliberately unvalidated JSON.

**New source-evidence wording:** “The legacy backfill assigns event categories using old state
values. No explicit T5-FINAL outcome mapping has yet been demonstrated. D-110 fixes the typed
authority boundary; the physical judgment/reference design and its enforcement remain open.”
Do not say “the encoding resolves once identity/revision does”; they are prerequisites, not the
whole decision. This removes an unnecessary format-choice question while retaining real design work.

Graph metadata matches `7024c69`, `stale: false`, at review start. No runtime database test was
run, and no hosted Encyclopedia/curated-semantic parity is claimed. Historical storyboard/UML/
data-flow views remain untouched. Only this handoff changes; no governed spec, Register, schema
or code change is applied. B-077 stays Answered without Resolution, and B-071/implementation
holds remain. Active Lane A synchronizes after the handoff commit before consuming graph evidence.

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | D-191 application / D-110 typed authority boundary | Preserve; no repeated behavior work or new format ruling | Physical design drafting |
| **Reject** | FK-alone article validation, automatic event-type result semantics and identity-only completion claim | Stronger than available evidence and existing rules | Steps 2–5 |
| **Approve-with-conditions** | R160 representation plan | Use the complete typed binding and enforcement contract | Bounded technical proposal |
| **Defer** | Implementation, Encyclopedia parity and B-071 closure | No new authority or verification | Separately scoped authorization and evidence |

## Lane A: D-110 applied, typed judgment design drafted (2026-09-07)

**Baseline `d50f4c4`; remote already matched it. Graphify resynchronized (`docs-drift` synced at
`d50f4c4`); the runner reported all checks passing. No governed tier, spec, Register, schema or
code change in this section. `D-191`'s applied documentation and accepted R159 behaviour are
preserved and not reopened.**

### 0. Five corrections

**The FK article-scope advantage is withdrawn.** A reference to `workflow_transitions(id)` proves
**existence only**. The same-article guarantee that exists today belongs to
`validate_editorial_report_anchors` (`0002`:491–497), a trigger-body query
(`where id = new.as_at_transition_id and article_id = new.article_id`) covering the **as-at
anchor** — it cannot be credited to an unimplemented judgment reference.

**`event_type` result semantics are withdrawn as automatic.** A separate column does not
establish result semantics.

**"The encoding resolves once identity/revision does" is withdrawn.** Identity and revision are
**prerequisites, not the whole decision** — result, evidence and enforcement remain.

**The reason-set impossibility claim is withdrawn.** A single `text` field does not prove a
reason set cannot be represented, and the one-audit-row-per-state-change rule is **not** a
reason-cardinality rule.

**Comparing snapshot-declared and typed references as equally available authoritative options is
withdrawn** — `D-110` had already decided it, as §1 sets out. That was a format question that did
not need asking.

### 1. `D-110` applied — classification by role

`D-110` (§5.14bq, `QA3`, `G17`) assigns typed columns to identifiers, every version identifier,
and anything participating in a binding, join, constraint, permission or state transition;
versioned JSON is only the immutable explanatory body, and **JSON is never the source of truth
for a gate.** `D-111` §3a retains that boundary.

| Element | Role | `D-110` disposition |
|---|---|---|
| Assessment identity | binding and join key | **Typed** |
| Assessment revision | binding and constraint | **Typed** |
| Judgment reference from the report | authoritative referential relationship | **Typed** |
| Authoritative evidence binding | binding | **Typed** |
| Explicit result | participates in approval/control — a gate | **Typed** |
| Reasons, explanatory content | body | May sit in the permitted immutable body alongside typed authority |
| Evidence, explanatory content | body | Same |
| `schema_version` | version identifier | Typed — already is |

**A snapshot-only authoritative binding is excluded.** A snapshot may preserve explanatory
content *alongside* typed authority, never instead of it. **This selects no physical table or
column.**

### 2. Result representation

`audit_event_type` carries `Created`, `StateChange`, `TagAssigned`, `Published`, `Returned`,
`Rejected`, `EmergencyBypass`, `HumanOverride`, `Line3Audit`. **No existing governed value
expresses a `T5-FINAL` editorial judgment**: `Rejected` is an event *category* assigned by
`0002`'s one-time backfill from the old state value, and no positive counterpart exists at all.

**The legacy backfill assigns event categories using old state values. No explicit `T5-FINAL`
outcome mapping has yet been demonstrated.** A one-time backfill is not an ongoing insert rule
and proves nothing about any current or new row's content. **No enum extension or repurposing is
proposed or authorized here.** The result must be typed per §1; whether it reuses `event_type` or
requires a distinct typed element is an open design item.

### 3. Complete typed judgment-record proposal — reuse versus required addition

| Element | Reuse available | Precisely required |
|---|---|---|
| Actor and authority context | `actor_id`, `actor_type`, `gate_role`, `line_assignment`, `line_separation_status`, `identity_assurance`, `supervising_human_id` | none |
| Assessment identity | none | a typed identity |
| Assessment revision | none | a typed revision |
| Explicit result | none expresses the judgment (§2) | a typed result element |
| Reasons | `reason` carries one reason | a set representation, if the behaviour needs one — **open, not impossible** |
| Authoritative evidence binding | none | a typed binding |
| Explanatory reasons/evidence content | permitted immutable body | none |
| Creation, retrieval and retry obligations | behaviour applied at `f16063a` | enforcement mechanisms (§4) |

**Resolving identity and revision alone resolves neither result, evidence, nor enforcement.**

### 4. Reference enforcement — three separate checks

| Check | What it proves | Proposed mechanism | Status |
|---|---|---|---|
| **Existence** | the referenced row exists | a typed foreign key | This, and only this, is what an FK gives |
| **Same-article** | the judgment belongs to the report's article | a validation rule of the kind already used at `0002`:491–497 for the as-at anchor | **Not implemented for a judgment reference**; the existing rule covers the anchor only |
| **Same-assessment/revision** | the judgment belongs to the requested assessment revision | its own rule, once §3's typed identity and revision exist | No existing analogue |

**Both candidate mechanisms must meet the whole binding contract.** Comparing a typed FK against
deliberately unvalidated JSON is not a fair comparison — and under §1 the snapshot-only option is
excluded regardless.

### 5. Planned tests, and the residual

| Given | Expected |
|---|---|
| A judgment that exists but belongs to another article | **Refused** — a valid FK must not let it pass |
| A judgment on the same article but the wrong assessment revision | **Refused** |
| An unresolved reference | **Refused**; the inconsistency is disclosed |
| Valid exact retrieval | that assessment revision's judgment, result, reasons and evidence — never the latest by default |
| Matching retry | the original outcome; no additional outcome, approval or Delivery effect |
| Conflicting retry | refused as a retry; a fresh assessment is required |

**Planned tests — not implemented and not executed.** No runtime database test was run.

**Residual under `D-30`/`D-52`:** the physical design of the typed identity, revision, result and
evidence bindings, plus the three enforcement rules in §4. Settled owners are unchanged —
schema/FK candidates in S1, append-only enforcement as infrastructure, board query/index strategy
at S3, and the transition/publication/exception specifications.

### 6. Next step, not taken here

A bounded implementation authorization is requested **only after this design is independently
reviewed**. **No build follows from `D-191` or from any review.** Lifecycle and build holds are
preserved: `B-077` stays `Answered` with no `Resolution`, `D-171` and `AUTH-DOC` are unchanged,
`B-071` closure and hosted Encyclopedia parity remain separately scoped, and historical
storyboard, UML and data-flow views remain untouched.

**This commit advances HEAD; Active Lane A resynchronizes before consuming approval.**

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | `D-110` applied as the governing boundary | §1; the format question is closed, not reopened | Physical design |
| **Approve** | Result representation stated against real enum values | §2; no governed value expresses the judgment | Design item |
| **Approve** | Complete typed record proposal, reuse versus required addition | §3 | Independent review |
| **Approve** | Existence, same-article and same-revision separated with named mechanisms | §4 | Independent review |
| **Reject** | FK-alone article validation; automatic `event_type` result semantics; identity-only completion; reason-set impossibility; snapshot-as-equal-option | All five withdrawn | Superseded by §§1–4 |
| **Defer** | Implementation authorization, Encyclopedia parity, `B-071` closure | Design not yet reviewed; no runtime test | Separate authorization and evidence |

## Independent review: logical design accepted, physical contract still required (2026-09-07)

**Baseline `74ec7bd`.** Accept the D-110 typed boundary, separate event category/result,
one-time-backfill qualification and existence/article/revision distinction. The six planned
test scenarios cover the previously requested checks and are correctly labelled unexecuted.
Preserve D-191 and R159; no new finding IDs, behavior questions or schema changes are introduced.

The remaining gap is **design specificity**, not a new governance ruling. §3 is a logical
inventory, not a complete physical record proposal. “A typed identity” does not identify its
location or key. §3 sends creation/retrieval/retry to §4, but §4 only describes reference checks;
it contains no mechanism for those other obligations. The named tests state expected behavior,
not evidence that an enforcement path exists. Review acceptance cannot fill those omissions.

### Lane A — one bounded design packet, small steps in order

| Step | What to draft | Ready when |
|---|---|---|
| 1 — identity and lifetime | Identify the proposed assessment and judgment record locations, keys, revision meaning and ownership. Distinguish reused schema from proposed additions | An example article can have an old and a fresh assessment without ambiguous identity or inherited approval |
| 2 — field map, after 1 | For every governed binding, name the proposed typed field/relation, type, required/optional status, reference and allowed values; explain where reasons/evidence content is preserved before report production | Result and authoritative evidence bindings are explicit. Actor columns are **reuse candidates** until the deciding actor/authority mapping is shown; replace “needs nothing” with that narrower claim unless demonstrated |
| 3 — record operation, after 2 | Describe creation and completion ordering, the consistency boundary between judgment and any associated approval effect, and how interrupted work is retried | A failure cannot leave a falsely completed judgment or duplicate approval effect; the proposal shows what is recorded and what remains incomplete. Negative judgment does not fabricate a state change |
| 4 — enforcement, after 3 | Assign exact proposed mechanisms to existence, same article, same assessment/revision and exactly-one final outcome. Include matching retry, conflicting retry and immutable historical evidence | No obligation is satisfied merely by a placeholder “its own rule.” Mechanisms are design proposals, not installed controls; no new auth/multi-account feature is inferred |
| 5 — retrieval/report, after 4 | Show the read path from requested assessment/revision to judgment/result/reasons/evidence and from report to its distinct state-history and judgment references | Older-assessment retrieval returns the original evidence and result; reference validation never silently substitutes the newest record |
| 6 — planned verification, after 5 | Link each existing positive/refusal/retry case to the proposed write/read/enforcement path; include an interrupted operation or competing retry where relevant to the same one-outcome rule | Every expected result has a named enforcing mechanism and observable evidence. Tests remain plans; no test execution or code follows from this review |
| 7 — application proposal, after 6 | Route the design under the existing D-30/D-52 owners and supply its exact prospective schema/code/spec write set, migration/backfill impact or explicit none, and verification/DoD | Judge sees a bounded, implementable proposal rather than a new “typed element” placeholder. Required parent approvals and build holds are satisfied separately, not waived by review |

**Smallest correction to the current status:** call §3 “logical record requirements and reuse
candidates”; keep §4's validated separation; record the above physical packet as the remaining
R160 deliverable. Do not redo accepted format decisions or the R159 predicate walkthrough.
This is a guide to complete the design, not a selection of a particular table/column, a migration
allocation or an authorization to build.

Pass criterion: a reviewer can trace each governed requirement through a proposed stored field,
its operation, its enforcement and its planned test without choosing missing implementation
details on Lane A's behalf. New behavior or scope discovered during that drafting must be raised
explicitly; mere physical design work does not require re-asking the settled business rules.

Graph metadata matches `74ec7bd`, `stale: false`, at review start. No runtime tests or hosted
Encyclopedia/curated-semantic verification were performed. Historical views remain historical;
no new view artifact is mandated. Only this handoff changes, leaving governed docs/schema/code
untouched and B-077 Answered without Resolution. B-071/D-171/AUTH-DOC boundaries remain.
Active Lane A synchronizes after this review commit before consuming graph evidence.

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | R160 typed logical rules and validation distinctions | Corrected; preserve | Physical design drafting |
| **Approve-with-conditions** | Reuse and test plan | Existing obligations named, physical enforcement still unspecified | Steps 1–6 |
| **Reject** | Complete physical-design / implementation-readiness claim | Logical inventory and expected outcomes are not a finished mechanism | Bounded design packet |
| **Defer** | Implementation, Encyclopedia parity and B-071 closure | No authority or runtime proof established | Required authorizations and independent evidence |

## Lane A: R160 physical design packet (2026-09-07)

**Baseline `91cc671`; remote already matched it. Graphify resynchronized (`docs-drift` synced at
`91cc671`); the runner reported all checks passing. No governed tier, spec, Register, schema or
code change in this section. `D-191` and R159 are preserved and not reopened.**

**Lane boundary.** `supabase/` is **Lane B's surface**. Everything below is **specified, never
applied** (`D-56`). No migration file is written, and none is authorized by this packet.

**Status correction carried in:** the previous section's §3 is retitled **"logical record
requirements and reuse candidates"**. Its actor/authority row said "needs nothing"; the narrower
and correct claim is **reuse candidate, pending a demonstrated deciding-actor/authority mapping**.

### 1. Identity and lifetime

Two proposed relations, following the existing conventions (uuid PK, `gen_random_uuid()`,
`on delete restrict`, append-only trigger, RLS `_v1_read`/`_v1_insert`):

**`editorial_assessments`** — one row per `T5` judgment cycle.

| Column | Type | Notes |
|---|---|---|
| `id` | `uuid` PK | `default gen_random_uuid()` |
| `article_id` | `uuid not null` | → `articles(id) on delete restrict` |
| `revision` | `integer not null` | monotonic per article, first is `1` |
| `route_id` | `text not null` | the selected route contract |
| `created_at` | `timestamptz not null` | `default now()` |
| — | `unique (article_id, revision)` | the identity/revision key |

**`editorial_judgments`** — one row per `T5-FINAL` act.

| Column | Type | Notes |
|---|---|---|
| `id` | `uuid` PK | |
| `assessment_id` | `uuid not null` | → `editorial_assessments(id) on delete restrict` |
| `article_id` | `uuid not null` | → `articles(id) on delete restrict`; carried for the same-article check |
| `result` | `editorial_result not null` | new enum, §2 |
| `transition_id` | `uuid null` | → `workflow_transitions(id)`; **null for a negative judgment**, which changes no state |
| `reason_body` | `jsonb` | explanatory content only |
| `reason_schema_version` | `text not null` | typed version identifier (`D-110`) |
| actor/authority | seven columns, §2 | reuse candidates |
| `decided_at` | `timestamptz not null` | `default now()` |
| — | **`unique (assessment_id)`** | exactly one final outcome per assessment |

**Revision meaning.** A fresh whole-article analysis inserts a **new assessment row** at
`revision + 1`. The old assessment and its judgment remain retrievable by key and confer no
eligibility on the new one — an article can therefore hold an old and a fresh assessment with no
ambiguous identity and no inherited approval.

**Reused, not proposed:** `articles`, `workflow_transitions`, `allowed_transitions`,
`editorial_reports`, `reject_append_only_change()`, and the existing enums.

### 2. Field map

| Governed binding | Proposed field | Type | Required | Reference | Allowed values |
|---|---|---|---|---|---|
| Assessment identity | `editorial_assessments.id` | `uuid` | yes | PK | — |
| Assessment revision | `editorial_assessments.revision` | `integer` | yes | `unique(article_id, revision)` | ≥ 1 |
| Explicit result | `editorial_judgments.result` | `editorial_result` | yes | — | **`positive`, `negative`** — finer granularity is **not decided here**; it is a business question, not a physical one |
| Deciding actor and authority | `actor_id text`, `actor_type actor_type_v2`, `gate_role gate_role`, `line_assignment line_assignment`, `line_separation_status line_separation_status`, `identity_assurance identity_assurance`, `supervising_human_id text` | as named | mixed | — | existing enum domains |
| Authoritative evidence binding | `editorial_judgment_evidence(judgment_id, evidence_kind, evidence_ref)` | relation | yes per item | → `editorial_judgments(id)` | `unique (judgment_id, evidence_kind, evidence_ref)` |
| Reasons, explanatory | `reason_body jsonb` + `reason_schema_version text` | as named | version required | — | `D-110`-permitted body with typed version |

**Where reasons and evidence live before report production.** The judgment row is created at
`T5-FINAL`, before any report — so `reason_body` and the evidence relation hold that content from
the moment of judgment. The report later freezes its own copy; it is not the origin.

**Actor columns are reuse candidates**, mirroring the ledger's shape. Whether the deciding
actor/authority mapping is identical to a transition executor's is **not yet demonstrated** and
is an open item, not an assumption.

### 3. Creation, completion and interruption

**One database transaction**, in order:

1. The assessment row exists (created at cycle start).
2. Seals and the readiness join are recorded in the existing ledger.
3. **`editorial_judgments` INSERT — this is the completion point.**
4. **Positive result only:** the `Reviewed → Approved` article UPDATE, validated by the existing
   `articles_enforce_state_transition` trigger, with its ledger row; `transition_id` is set to it.

**Consistency boundary:** steps 3 and 4 commit together or not at all. A failure therefore leaves
**no judgment row and no approval effect** — never a falsely completed judgment, never a
duplicated approval. **A negative judgment performs no step 4 at all**, so it fabricates no state
change and `transition_id` stays null.

**Interrupted work** is retried by re-attempting the same transaction; §4's uniqueness decides
what happens if the first attempt actually committed.

### 4. Enforcement — a named mechanism per obligation

| Obligation | Proposed mechanism |
|---|---|
| **Existence** | FK `editorial_reports.judgment_id → editorial_judgments(id)` — existence, and only existence |
| **Same article** | a validator query in the style already used at `0002`:491–497: `where id = new.judgment_id and article_id = new.article_id` |
| **Same assessment/revision** | the report carries a typed `assessment_id`; the validator asserts `judgment.assessment_id = new.assessment_id` |
| **Exactly one final outcome** | **`unique (assessment_id)`** on `editorial_judgments` |
| **Matching retry** | the unique constraint refuses the second insert; the caller reads and returns the existing judgment — **no new outcome, approval or Delivery effect** |
| **Conflicting retry** | the same unique violation; because the result differs, the caller must open a **new assessment** at `revision + 1` rather than re-decide |
| **Competing concurrent retry** | the same unique constraint under the article-level lock the existing trigger comment already relies on — exactly one winner |
| **Immutable historical evidence** | `reject_append_only_change()` triggers plus `revoke update, delete` on both new relations, matching the existing convention |

These are **design proposals, not installed controls.** No new authentication or multi-account
capability is introduced or implied.

### 5. Retrieval and report references

**Read path:** requested `(article_id, revision)` → `editorial_assessments` via
`unique(article_id, revision)` → `editorial_judgments` via `assessment_id` → `result`,
`reason_body`, and evidence via `editorial_judgment_evidence`.

**Retrieval is by key, never by recency.** No `order by decided_at desc limit 1` appears anywhere
in the path — that construct is exactly the "silently substitute the newest record" failure, and
its absence is the falsifiable form of this requirement.

**The report's three distinct references:**

| Reference | Meaning |
|---|---|
| `as_at_transition_id` | state-history anchor — unchanged, `D-111` §3a |
| `judgment_id` | the judgment the report describes — new, typed |
| `assessment_id` | the assessment revision described — new, typed |

An older-assessment report therefore returns that assessment's original result and evidence.

### 6. Each planned test, and what enforces it

| Test | Enforcing mechanism | Observable evidence |
|---|---|---|
| Judgment exists but belongs to another article | same-article validator query | raised exception; row not written |
| Wrong revision on the same article | `judgment.assessment_id = new.assessment_id` | raised exception |
| Unresolved reference | FK | foreign-key violation |
| Valid exact retrieval | key-based read path (§5) | that revision's result and evidence returned |
| Matching retry | `unique (assessment_id)` | no second row; original returned; no approval or Delivery effect |
| Conflicting retry | `unique (assessment_id)` | refused; new assessment at `revision + 1` required |
| Interrupted operation | single-transaction boundary (§3) | neither judgment nor approval persists |
| Competing concurrent retry | uniqueness under the article-level lock | exactly one winner |

**Plans, not executions.** No test was written or run, and none follows from this packet.

### 7. Bounded implementation proposal

**Prospective write set — Lane B's surface, specified not applied:**

| Item | Content |
|---|---|
| `supabase/migrations/0003_*.sql` | `editorial_result` enum; `editorial_assessments`; `editorial_judgments`; `editorial_judgment_evidence`; `editorial_reports.judgment_id` and `.assessment_id`; the validator extension; unique constraints; append-only triggers; revokes; RLS `_v1_read`/`_v1_insert` policies |
| `docs/specs/` | implementation big picture, if the owners judge one is warranted; **`fn-specs/` is unaffected** — behaviour was applied at `f16063a` and does not change |
| Register | its own decision act, recorded before any edit (`D-183`, `D-190`) |

**Migration and backfill impact.** No existing row carries an assessment or judgment, so **no
data backfill is required.** **One open item, raised explicitly rather than assumed:** whether
`editorial_reports.judgment_id`/`.assessment_id` may be `not null` depends on whether that table
currently holds rows. That is a **runtime fact this packet has not checked**, and it must be
established before the migration is written — not guessed.

**Routing.** Under `D-30`/`D-52` the settled owners are unchanged; this is **new scope beyond
them** and needs its own routing decision. **`0001_init.sql` is never edited**; a new numbered
migration is the only mechanism.

**Verification and DoD, if authorized:** Register act recorded first; the migration written by
Lane B and applied; the eight §6 tests implemented and executed with their actual results
reported; the consistency runner's actual result reported; Graphify resynchronized after the last
tracked edit; independent review at the applied commit.

**New scope discovered while drafting, raised rather than assumed:** the nullability question
above, and the `editorial_result` value granularity in §2. Neither is settled here.

**No build follows from this packet.** `B-077` remains `Answered` with no `Resolution`; `D-171`,
`AUTH-DOC`, `B-071` closure and hosted Encyclopedia parity are unchanged and separately scoped;
historical storyboard, UML and data-flow views remain untouched.

**This commit advances HEAD; Active Lane A resynchronizes before consuming approval.**

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Physical identity, keys and lifetime | §1; `unique(article_id, revision)` and `unique(assessment_id)` are the two load-bearing keys | Independent review |
| **Approve** | Field map with types, requiredness and allowed values | §2; reasons/evidence have a home before report production | Independent review |
| **Approve** | Creation ordering and the single-transaction consistency boundary | §3; negative judgment performs no state change | Independent review |
| **Approve** | A named mechanism for every obligation, and a mechanism for every test | §§4, 6; no placeholder rules remain | Independent review |
| **Approve** | Key-based retrieval; three distinct report references | §5; no recency substitution anywhere in the path | Independent review |
| **Reject** | Treating this as implementation readiness or authority | Design proposal only; `supabase/` is Lane B's | Bounded authorization |
| **Defer** | Report-column nullability (runtime fact unchecked), `editorial_result` granularity, implementation, Encyclopedia parity, `B-071` closure | Raised explicitly, not assumed | Owners' routing, then separate authorization |

## Independent review: R160 physical-design corrections and Judge decision guide (2026-09-07)

### Scope and retained parent

**Rewritten task:** Review Lane A's physical proposal at `b38c992`; retain the accepted R159
behavior and D-191 documentation, identify concrete remaining R160 mechanisms, and supply a
parent-first drafting guide. This is a handoff review, not permission to write or apply a migration.
Use the existing R160 item; do not create another tracker or reopen the predicate table.

**Evidence baseline:** the physical packet above, `FN-GATES-01-05.md` §11.1,
`FN-AUDIT-VISIBILITY-07-08.md` §4.1/§4.2, D-110 QA3, D-191, and
`supabase/migrations/0002_s1_editorial_schema.sql`. The findings below are source-inspected
design gaps, **not database-executed failures**. No live database was queried.

**Retain:** explicit assessment identity/revision, explicit positive/negative result, separate
report references, no state change for a negative judgment, key-based historical retrieval,
and no inherited approval. `unique(assessment_id)` provides **at-most-one stored judgment**;
completion and retry handling must supply the rest of the exactly-one-final-outcome contract.
Design acceptance, application authorization, and runtime verification remain separate facts.

### What still fails or remains incomplete — one R160 correction per step

Follow the steps in order. Each next step consumes the preceding draft; none authorizes source
application. Lane A owns the drafting and routing; future Lane B execution remains separately held.

| Step / parent dependency | Source evidence and failure path | Small drafting action | Accept when / reject when |
|---|---|---|---|
| **1 — substrate and field map**; parent is retained D-191 behavior | Physical §2 uses `actor_type_v2`, but `0002`:527 renames that type to `actor_type`. Its actor/authority row still says `mixed` and reuse candidate. The reused `Reviewed → Approved` rule at `0002`:294 requires `chief_journalist` / `Line1` / `agent`, not the target human T5-FINAL actor. | Use the post-migration type names. Finish requiredness and deciding-actor/authority mapping, distinct from agent executor identity. Name the prospective target transition-rule change and its held authorization dependency; do not claim the unchanged rule validates the human path. Complete evidence-kind/reference types and the typed assessment/revision binding for seals and joins, rather than merely placing them in the existing ledger. | **Accept** a complete field/control map with reused versus proposed objects identified. **Reject** a nonexistent type, `mixed` requiredness presented as complete, or a human approval expected to pass an unchanged agent-only rule. Do not relax the existing check. |
| **2 — close the relationship chain**; after 1 | Physical §4 checks report → judgment article and report → judgment assessment, but never judgment → assessment article. Counterexample: assessment S belongs to article A; judgment J carries S and article B; report carries J/S/B and a valid B as-at anchor. The proposed independent FKs and named report checks do not exclude this combination. `evidence_ref` has no stated target-resolution or same-cycle validator. | Specify the judgment/assessment/article consistency constraint or validator, and the evidence reference's existence and same-cycle checks. Include result/transition consistency: negative has no transition; the positive reference identifies its matching approval effect, not merely any existing ledger row. Supply a typed route from each consumed seal/join/evidence record to the assessment revision. | **Accept** rejection of the S/A versus J/B counterexample and wrong-cycle evidence, even when every individual ID exists. **Reject** inferring transitive consistency from the report checks or a bare FK. |
| **3 — complete the immutable operation**; after 1–2 | Physical §3 inserts the judgment, then says its `transition_id` is set in step 4; §4 also proposes rejecting judgment UPDATE. `0002`:149–155 rejects such updates, including in the same transaction. Evidence insertion is absent from §3. Append-only membership rows alone still allow a late evidence INSERT, changing the completed set. | Replace §3 with an explicit finalization transaction; use the draft sequence below. Supply the positive transition reference at judgment INSERT, include all authoritative evidence, and name how later evidence additions are refused. Distinguish existing cycle/readiness records from this transaction and distinguish INSERT from committed completion. | **Accept** a positive completion with no judgment UPDATE, and an immutable completed evidence set. **Reject** post-insert filling of an append-only row, a completed judgment without its evidence, or late evidence that changes historical retrieval. |
| **4 — retries, concurrency and revision allocation**; after 3 | Physical §4 credits uniqueness with returning the original. An ordinary uniqueness error needs recovery before another query in that transaction. `0002`:307–309 attributes its article lock to the article UPDATE, which happens later and never on the negative path. `revision + 1` identifies an intended number, not a concurrent allocation procedure. | Name the transaction isolation/lock or equivalent serialization path, including negative completion and fresh-cycle allocation. Define the exact-retry comparison and read-existing branch; handle a uniqueness race without updating the original or leaving preceding effects committed. Refuse a conflicting result without automatically starting a new analysis. | **Accept** matching and conflicting concurrent cases, rollback and revision-allocation walkthroughs with named mechanisms. **Reject** returning the original from the constraint alone, crediting the later UPDATE with an earlier lock, or treating a failed retry as permission to start a new assessment. |
| **5 — legacy data and cutover**; after 1–4 | Physical §7 says no backfill is required because old rows have no new identity, then acknowledges that existing report rows were not checked. Missing historical bindings are a reason to assess compatibility, not proof that no data treatment is needed. Existing reports are append-only (`0002`:512–516). | Replace the no-backfill assertion with `UNVERIFIED pending target-environment inspection and legacy treatment`. Draft empty-table and existing-row branches. If old rows exist, name an evidence-preserving treatment and its authorization; do not invent judgments from old state or rewrite historical reports. State requiredness for new governed reports separately from any legacy accommodation. | **Accept** a documented preflight and cutover plan; before application, supply the actual target-environment evidence. **Reject** an unmeasured empty-table assumption, fabricated backfill, or nullable new references that silently bypass the new-report contract. |
| **6 — tests, owners and bounded handback**; after 1–5 | Physical §7 requires executed tests but lists no test-file destination; its table labelled Lane B's surface also includes `docs/specs/` and the Register. These are different owners. Calling all this new scope beyond the settled owners does not itself establish a new ownership decision. | Keep the D-30/D-52 owner map. Separate Lane A's prospective documentation/authorization unit from the future Lane B migration and named test files. Name any genuinely new ownership question, otherwise do not ask the Judge to reroute existing work. Give each test its input, enforced refusal/success, and observable persisted effects. | **Accept** an explicit per-owner write set, DoD and authority boundary. **Reject** omitted required test writes, a mixed-lane execution packet presented as Lane B-only, or draft approval used to waive D-171/AUTH-DOC. |

The actor/authority mapping was **already explicitly open** in physical §2; preserve it rather
than reporting only the nullability and granularity questions. Positive/negative is sufficient
for the accepted behavior under review. Additional result granularity is not a new prerequisite
to this bounded design; route any proposed expansion separately instead of delaying this packet.

### Draft operation sequence for step 3, completed by step 4

This is a proposed design sequence, not executable SQL or a new business ruling:

1. Resolve the requested article and assessment revision. The cycle and recorded readiness
   evidence are preconditions; do not hold one database transaction open across human review.
2. Begin finalization with the explicit serialization mechanism from step 4. Read an existing
   final judgment before new approval effects: return an exact retry; refuse a conflicting
   outcome. No retry substitutes a newer assessment or automatically creates one.
3. For a new outcome, validate the bound inputs, actor/authority and applicable outcome
   prerequisites. Freeze the exact evidence membership under that same consistency boundary.
4. For a positive outcome, create its approval audit row, then insert the judgment with that
   final reference and its evidence, then perform the article UPDATE. The audit row must precede
   the UPDATE (`0002`:398–402); the held target actor/rule mapping from step 1 must be resolved
   before this can be implemented. For a negative outcome, insert the judgment and its evidence
   with a null transition reference and no article UPDATE.
5. Commit the entire finalization or roll it all back. **Commit is durable completion.** No
   report needs to exist yet; subsequent report production uses the exact judgment/assessment.
   Refuse later mutation of the completed evidence membership, not only UPDATE/DELETE of rows.
   Retries add no approval or Delivery effect; Delivery remains its separately governed operation.

Lane A must name how each insertion path is guarded, including direct writes allowed by the
proposed policies. A suggested lock in prose is not installed enforcement. If using a handled
uniqueness conflict, specify the savepoint/rollback or conflict-safe branch and subsequent read;
do not use an UPDATE-based upsert to mutate the immutable judgment. Retain the unique constraint
as a database backstop even when a serialized procedure performs the normal read-before-insert.

**Technical basis:** PostgreSQL documents [uniqueness constraints](https://www.postgresql.org/docs/current/ddl-constraints.html#DDL-CONSTRAINTS-UNIQUE-CONSTRAINTS)
as duplicate-row protection, [INSERT conflict handling and RETURNING](https://www.postgresql.org/docs/current/sql-insert.html)
as separate mechanisms, and [row locks](https://www.postgresql.org/docs/current/explicit-locking.html#LOCKING-ROWS)
as acquired by named operations. These support the mechanism distinctions, not the project's
business authority or a claim that tests have run.

### Close the draft with evidence, not another completeness assertion

Keep the existing planned tests and extend their named cases only where the corrections above
need proof: actual post-0002 types; intended human versus legacy-agent approval mapping;
judgment/assessment article mismatch; unresolved/wrong-cycle evidence; positive completion with
append-only protection enabled; negative completion with unchanged article state; late evidence
insertion; matching and conflicting concurrent retries; failed-finalization rollback; concurrent
fresh revision allocation; and empty/existing legacy-report cutover. A future database test must
observe the stored rows and side effects, not only an exception or returned label. These remain
**planned cases** until separately authorized and executed.

### Document/view cross-reference and drift

| Surface | Review disposition at `b38c992` |
|---|---|
| `Modular_PRD.md` FR-04a/FR-05a/FR-07; owning Fn_Specs | D-191 names this requirement ownership; the applied assessment/judgment/retry and report/progress blocks remain the behavioral input. Do not rewrite them to fit a convenient schema or reopen R159. |
| Historical storyboard, story panels, UML/sequence and data-flow views | `docs/journal/2026-08-18-storyboard-business-and-digital-twin.md` Panels A5/A6 contain the historical human-review/agent-T6-approval model. They are historical evidence, not this physical design's authorization. The current packet must map assessment → review evidence/join → finalization → report/UI read by explicit key, keeping reviewer judgments, readiness and final human judgment distinct. No new diagram file is required solely to repeat that contract. |
| Encyclopedia | `docs/ENCYCLOPEDIA-SYNC.md` Entry 01 explicitly consumes transition-schema controls; Entries 04/05 are topical review candidates. Hosted content was not read in this pass: parity is **UNVERIFIED**, not inferred from the local ledger or graph. No publication is authorized here. |
| Graphify | Read-only query completed; `lastAnalyzedHead` equals `b38c992` and `stale` is false at review intake. Extraction currency is distinct from semantic correctness, coverage and hosted parity. A durable handoff commit advances HEAD again; Active Lane A performs the final synchronization before a consuming approval. |

Only this B-077 handoff is amended in this pass. Register, Build Spec, Inventory, Product and
functional specifications, historical journal/views, graph fragments, schema and code are
**unaffected by this review write**. A later authorizing act must separately state D-54 tier
impact, including created migration/test artifacts and changed build scope/DoD. No new finding ID,
SOP copy, authentication capability, T6 feature or lane transition is introduced.

### Judge Accept / Reject decision

Accepting the retained design direction authorizes neither schema execution nor application of
these proposed corrections to governed tiers. The immediate follow-up is Lane A's corrected
R160 draft in this same handoff, then independent review. B-077 remains `Answered` with no
`Resolution`; B-071 closure remains with its existing owner and gates.

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | D-191 / R159 behavioral documentation | Preserve accepted behavior and explicit typed identity/result direction | No repeated behavior application |
| **Approve-with-conditions** | R160 physical-design proposal | Concrete progress; steps 1–6 remain drafting corrections | Lane A corrected packet, then independent review |
| **Reject** | Complete mechanism / no-backfill / implementation-readiness claims | Current proposal does not establish these claims | Correct mechanisms and obtain target-environment evidence |
| **Defer** | Governed-source application, schema/code, B-071 closure and Encyclopedia parity | Not authorized or verified by this review | Bounded owner-specific authorization and independent evidence |

## Lane A: R160 physical design, corrected (2026-09-07)

**Baseline `35521af`; remote already matched it. Graphify resynchronized (`docs-drift` synced at
`35521af`); the runner reported all checks passing. No governed tier, spec, Register, schema or
code change here. `supabase/` and `__tests__/` are **Lane B's surface** — specified, never applied
(`D-56`). `D-191` and R159 are preserved and not reopened.**

### 0. Six corrections

**`actor_type_v2` does not exist post-migration.** `0002`:527 renames the type to `actor_type`.
Current type names are `actor_type`, `article_state_v2`, `gate_role`, `line_assignment`,
`line_separation_status`, `identity_assurance`, `audit_event_type`.

**Uniqueness was credited with a workflow guarantee.** `unique (assessment_id)` provides
**at-most-one stored judgment** and nothing else. It does not return the original, manage retry
effects, or allocate anything. Completion and retry handling must supply the rest.

**Setting `transition_id` after insert was an append-only UPDATE.** `reject_append_only_change()`
(`0002`:148–155) raises `55000` on any UPDATE, including within the same transaction. The
sequence is reordered in §3 so the reference is present **at INSERT**.

**"No backfill is required" is withdrawn** and replaced with **`UNVERIFIED pending
target-environment inspection`** (§5).

**The judgment → assessment article link was missing** (§2's counterexample).

**The write set mixed owners.** It labelled a table "Lane B's surface" while including
`docs/specs/` and the Register. Separated in §6. Calling work "new scope" does not create an
ownership decision, and none is requested.

### 1. Substrate, field map, and the actor problem

Corrected types, completed requiredness:

| Binding | Field | Type | Required |
|---|---|---|---|
| Assessment identity | `editorial_assessments.id` | `uuid` | yes (PK) |
| Assessment revision | `.revision` | `integer` | yes |
| Result | `editorial_judgments.result` | `editorial_result` (`positive` \| `negative`) | yes |
| Approval effect | `.transition_id` | `uuid` | **null iff negative** (§2) |
| Deciding actor | `.actor_id` | `text` | yes |
| Actor type | `.actor_type` | `actor_type` | yes |
| Deciding role | `.gate_role` | `gate_role` | yes |
| Line | `.line_assignment` | `line_assignment` | yes |
| Line separation | `.line_separation_status` | `line_separation_status` | yes |
| Identity assurance | `.identity_assurance` | `identity_assurance` | yes |
| Supervising human | `.supervising_human_id` | `text` | optional |
| Reasons body / version | `.reason_body` `jsonb`, `.reason_schema_version` `text` | — | version required |
| Evidence kind | `editorial_judgment_evidence.evidence_kind` | `evidence_kind` enum — `seal`, `readiness_join`, `trend_signal` | yes |
| Evidence reference | `.evidence_ref` | `uuid` | yes |

**The seals and joins themselves need a typed assessment binding** — `workflow_transitions` has
no `assessment_id`, so "they live in the existing ledger" is not a typed route from a consumed
record to its assessment revision. A typed `assessment_id` on those records is **a required
addition**, not reuse.

**The actor problem, stated exactly.** `allowed_transitions` records `required_role`,
`required_line`, `required_actor_type` and `human_only`; the seeded `Reviewed → Approved` rule
(`T6`) carries `chief_journalist` / `Line1` / **`agent`** / `human_only = false`.
`enforce_article_state_transition` **does not read those four columns** — it compares
`kind`/`from_state`/`to_state` only. So precisely:

- A human-written approval would **not be refused by the database today**; and
- it would **contradict the recorded governed rule**, which describes an agent executor.

**Therefore no design may claim the unchanged rule validates the human path.** The target order
requires a **prospective new `allowed_transitions` rule** with `required_actor_type = 'human'`
and `human_only = true`; **that change is held under `D-171` and is not proposed here.** The
existing check is not relaxed. **The deciding-actor/authority mapping — the human decider versus
a transition's agent executor identity — remains explicitly open**, as it was in the previous
packet.

### 2. Closing the relationship chain

**Counterexample to exclude:** assessment `S` belongs to article `A`; judgment `J` carries `S`
and article `B`; the report carries `J`, `S`, `B` and a valid `B` anchor. Every individual ID
exists, and the previous checks all pass.

| Constraint | Mechanism |
|---|---|
| Judgment's article = its assessment's article | `editorial_assessments unique (id, article_id)`; `editorial_judgments` composite FK `(assessment_id, article_id) → (id, article_id)` — **declarative, no trigger** |
| Evidence belongs to the judgment's cycle | `editorial_judgments unique (id, assessment_id)`; evidence composite FK `(judgment_id, assessment_id) → (id, assessment_id)` |
| Evidence reference resolves | per-`evidence_kind` validator: the referenced record exists **and** its typed `assessment_id` equals the evidence row's |
| Result / transition consistency | `check ((result = 'negative' and transition_id is null) or (result = 'positive' and transition_id is not null))` |
| The positive reference is its *matching* approval effect | validator: the referenced transition's `article_id` equals the judgment's, its `to_state = 'Approved'`, and it is the row created in this same transaction (§3) — not merely any existing ledger row |

### 3. Finalization, with no judgment UPDATE

Preconditions — cycle and readiness records — are resolved **before** the transaction; **no
database transaction is held open across human review.**

1. Acquire the serialization lock (§4) — on **both** the positive and negative paths.
2. **Read any existing final judgment first.** Exact retry → return it, insert nothing.
   Conflicting result → refuse; **do not** create a new assessment automatically.
3. New outcome: validate the §2 bindings, actor/authority and outcome prerequisites; determine
   the exact evidence membership.
4. **Positive:** insert the approval audit row **first** — `0002`:396–403 requires exactly one
   preceding audit row in the same transaction — then insert the judgment **with
   `transition_id` already populated**, then its evidence, then the article UPDATE.
   **Negative:** insert the judgment with `transition_id` null and its evidence; **no UPDATE.**
5. Commit everything or roll everything back. **Commit is durable completion**; INSERT alone is
   not. No report need exist yet.

**Late evidence is refused by mechanism, not convention.** Append-only rows block UPDATE/DELETE
but not a later INSERT, which would silently change a completed set. The validator admits an
evidence INSERT **only while its parent judgment row is still being written in the same
transaction**, using the in-progress-`xmin` test the existing code already relies on
(`0002`:396–400). After commit, the membership is closed.

### 4. Serialization, retries and revision allocation

**Lock:** `select … from articles where id = :article_id for update`, taken at step 1. The
existing lock the migration comments on belongs to the **later article UPDATE** — which happens
after the judgment and **never at all on the negative path** — so it cannot be credited here.

| Case | Mechanism | Result |
|---|---|---|
| Matching retry | read-before-insert under the lock | the stored judgment is returned; no insert; no approval or Delivery effect |
| Conflicting retry | same read | refused. **A refusal is not permission to start a new analysis** — a fresh cycle is a separate, deliberate act |
| Uniqueness race | the lock prevents it; `unique (assessment_id)` is **retained as a database backstop** | if a conflict still surfaces: savepoint, roll back to it, re-read, return the existing row. **Never an UPDATE-based upsert** |
| Failed finalization | the transaction boundary | nothing persists — no judgment, no evidence, no approval effect |
| Concurrent fresh revision | under the same article row lock: `revision = coalesce(max(revision), 0) + 1` | serialized allocation; `unique (article_id, revision)` is the backstop |

### 5. Legacy data and cutover

**Backfill status: `UNVERIFIED pending target-environment inspection`.** Missing historical
bindings are a reason to assess compatibility, not proof that no treatment is needed. **Preflight,
required before any migration is written:** count existing `editorial_reports` rows, and how many
would lack the new bindings.

| Branch | Treatment |
|---|---|
| **Table empty** | new report columns `not null` directly |
| **Rows exist** | reports are append-only (`0002`:512–518) and **must not be rewritten, nor judgments invented from old state**. Add the columns nullable, plus a validator requiring them for reports created under the new contract — carried by a typed contract/version discriminator, **not** by leaving them optional. Requiredness for new governed reports is stated separately from the legacy accommodation, and the accommodation needs its own authorization |

**Nullable new references must not silently bypass the new-report contract.**

### 6. Owners, tests and handback

| Owner | Prospective files |
|---|---|
| **Lane A** | `docs/v1/V1-DECISION-REGISTER.md` (its own act, recorded first); `docs/specs/` only if the owners judge one warranted |
| **Lane B** | `supabase/migrations/0003_*.sql`; test files under `__tests__/` |

`D-30`/`D-52`'s owner map is unchanged and **no reroute is requested**; no genuinely new
ownership question was found. `fn-specs/` is **unaffected** — behaviour was applied at `f16063a`.

**Tests — input, enforced refusal or success, observable persisted effect. Plans only; none
written or run:**

| Input | Enforced by | Observable effect |
|---|---|---|
| Post-`0002` type names used | migration compiles | objects created with `actor_type`, not `actor_type_v2` |
| Human approval against the seeded agent rule | §1 — recorded rule contradiction | documented as held under `D-171`; no relaxation of the existing check |
| Judgment on assessment `S`/article `A` carrying article `B` | composite FK (§2) | insert refused; no row |
| Evidence referencing another cycle | composite FK + per-kind validator | refused; membership unchanged |
| Positive completion, append-only enabled | §3 ordering | audit row, then judgment with `transition_id`, then evidence, then UPDATE — all committed; **no judgment UPDATE occurs** |
| Negative completion | §3 | judgment + evidence stored; **`workflow_state` unchanged**; no publication row |
| Late evidence INSERT after commit | in-progress-`xmin` validator | refused; stored membership identical |
| Matching concurrent retry | lock + read branch | one stored judgment; original returned |
| Conflicting concurrent retry | lock + read branch | refused; **no new assessment created** |
| Failed finalization | transaction rollback | no judgment, evidence or approval effect persists |
| Concurrent fresh revisions | lock + allocation | distinct revisions; no gap-free claim made |
| Empty vs existing legacy reports | §5 preflight | the actual counts recorded before the migration is drafted |

A future database test must observe **stored rows and side effects**, not only an exception or a
returned label.

**No build follows from this packet.** `B-077` remains `Answered` with no `Resolution`; `D-171`,
`AUTH-DOC`, `B-071` closure and hosted Encyclopedia parity are unchanged and separately scoped;
historical views remain untouched. **This commit advances HEAD; Active Lane A resynchronizes
before consuming approval.**

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Corrected types; actor problem stated exactly against source | §1; rule contradiction named, existing check not relaxed | Held under `D-171` |
| **Approve** | Relationship chain closed declaratively | §2; the `S`/`A` vs `J`/`B` counterexample is refused by composite FK |Independent review |
| **Approve** | Finalization with the reference present at INSERT; late evidence refused by in-progress-`xmin` | §3; no judgment UPDATE anywhere | Independent review |
| **Approve** | Explicit row lock; retry branches; serialized revision allocation | §4; uniqueness demoted to backstop | Independent review |
| **Reject** | "Uniqueness returns the original"; `actor_type_v2`; post-insert `transition_id`; "no backfill"; mixed-lane write set | All five withdrawn | Superseded |
| **Defer** | Target-environment preflight, actor/authority mapping, implementation, `B-071` closure | Evidence not yet gathered; no runtime test | Separate authorization and independent verification |

## Independent review: R160 source correction and remaining failure branches (2026-09-07)

### Scope, evidence and what stays accepted

**Rewritten task:** Review the corrected physical proposal at `921316e`, retain its valid
repairs, and give Lane A an ordered correction guide with explicit Accept/Reject criteria.
Continue **R160 in this B-077**, without new finding IDs, duplicated SOP, governed-spec edits or
implementation. D-191 and the accepted R159 behavior remain the parent contract.

**Accepted as design progress, not installed or runtime-verified controls:** corrected
`actor_type`; the assessment/article composite FK excluding the earlier S/A versus J/B case;
positive audit row before judgment INSERT with the final reference already populated; commit
as durable completion; explicit article lock on positive and negative paths; deliberate fresh
revision allocation; no automatic new assessment on refusal; withdrawal of the no-backfill
claim; and separation of Lane A/Lane B ownership. Do not redo these repairs.

The `xmin` proposal addresses **late insertion after commit**. It does not by itself prove that
the required evidence and approval effect were present **at** commit. Keep that narrower claim.
All findings below are source-inspected design findings. No migration or database test was run.

### 1. Parent — correct the actor-enforcement account before refining its tests

**Reject physical §1's precision correction.** It stops reading the function too early:

| Part of `enforce_article_state_transition()` in `0002_s1_editorial_schema.sql` | What it actually checks |
|---|---|
| First query, lines 323–339 | Whether a permitted state edge exists |
| Audit-row query, lines 370–398 | A preceding same-transaction row, including `required_role`, `required_line`, `required_actor_type` and `human_only` at **388–391** |
| Refusal, lines 400–402 | Rejects unless exactly one qualifying audit row is found |

**Replacement draft for the actor paragraph:**

> The trigger checks both the legal state edge and the declared audit-row role/Line/actor
> metadata. Against the seeded agent-only `Reviewed → Approved` rule, an audit row declaring
> `actor_type = 'human'` does not qualify; with no other qualifying row, the article UPDATE is
> refused with `23514` and `found 0`. This validates declared metadata, **not the authenticity
> of the person issuing SQL**. A human caller supplying agent-labelled metadata is a different
> question; no authenticated-caller guarantee follows. The intended human T5-FINAL mapping and
> its held rule change still require their existing authorization; do not weaken the check.

This also qualifies the previous review's shorthand “the human actor is rejected”: it means
an honestly human-labelled audit row against that agent-only rule, not authentication of the
SQL caller. `__tests__/s1-schema.test.ts`:94–97 checks the four predicates in the source;
`supabase/tests/database/s1_transition_enforcement.test.sql`:154–191 specifies rejection of an
agent-labelled row at the human-only T5 edge and rollback of its orphan ledger row. These test
sources corroborate the mechanism; **they were inspected, not executed in this review**, and
the T5 fixture is not a newly executed T6-human test.

**Lane A action:** correct physical §1, the corresponding test row and its approval row
together. Keep deciding-actor/authority mapping open. **Accept** when the full-function account
and proposed human-labelled negative test agree; **reject** both “the database ignores the four
columns” and “this check authenticates a person.” No new Judge policy choice is needed to
correct a demonstrably false source description.

### 2–5. Child work — complete one bounded draft step at a time

| Order / dependency | Remaining gap and concrete failure path | Lane A drafting action | Success criterion for Judge/reviewer |
|---|---|---|---|
| **2 — retry recovery**, after 1 | Physical §4's `Uniqueness race` branch rolls back, re-reads and returns the existing row **without** the normal exact/conflicting comparison. A conflicting stored result would be returned as though it were a matching retry. The savepoint is not placed before the attempted effects, and isolation is unnamed. | Route recovery through the **same** comparison branch as the normal path. Establish the savepoint before all attempted audit/judgment/evidence effects, retaining the article lock outside it. Handle the named assessment-uniqueness conflict only; unrelated errors do not become retry success. State the isolation and restart rules. | Exact recovery returns the original with no effects; conflicting recovery refuses with no new assessment. An injected conflict after a provisional audit INSERT leaves no orphan audit row. The post-conflict read can see the winner, or the whole transaction restarts rather than fabricating a result. |
| **3 — finish the reference map**, after 2 | Physical §2's positive-reference validator checks article, `to_state = Approved` and transaction, **not the assessment revision**. Two judgments for different assessments of one article can point at the same same-transaction approval row under those listed checks. Also, `trend_signal` is an evidence kind, but its resolver demands a target `assessment_id`; `trend_signals` has only article ownership (`0001`:41–50; `0002`:143–145). | Bind the positive reference to the same assessment revision and the exact eligible audit row consumed by approval, including its state-edge/actor semantics. Finish a per-kind resolver map naming actual or proposed target fields and requiredness. For a reusable trend signal, a typed cycle-association relation is a candidate; do not stamp an invented revision onto immutable historical signal rows. | Same-article/wrong-assessment approval references fail. Every admitted evidence kind has a resolvable, typed route to the selected cycle; the field map includes the binding columns used by the proposed composite FKs. Do not call all references “closed declaratively” when per-kind validation remains necessary. |
| **4 — enforce completion and legacy admission**, after 3 | The `xmin` guard rejects late evidence but does not run when a caller omits evidence entirely. With the proposed insert-policy convention, the listed controls do not exclude a positive judgment plus audit row being committed without its required evidence or article UPDATE. Separately, a typed legacy discriminator can bypass new-report requirements if a new caller can select the legacy value. | Name a database-enforced finalization boundary: for example, a guarded database routine with direct relevant writes unavailable, or completion constraints checked at commit. Keep the late-insert guard for its separate purpose. Tie legacy eligibility to existing-row provenance or another controlled cutover mechanism, not a caller-selected old label. No new authentication feature is implied. | Bypassing the normal procedure cannot commit an incomplete positive outcome. A successful positive finalization commits its exact evidence and matching effect; negative remains no-state-change. A new report cannot evade required references by claiming a legacy contract. Old reports remain unchanged. |
| **5 — close the draft packet**, after 4 | Owner separation is now correct; actor mapping and target-environment facts are still explicitly open. Directory/wildcard destinations are not yet the bounded execution packet. | Update the existing tests with the exceptional cases above; retain the accepted tests. Name the exact proposed migration/test paths and any warranted existing SPECS target before requesting execution. Carry the actor-rule hold and empty/existing-data preflight forward visibly. Use the existing D-30/D-52 owners and D-54 applicability process, not a new routing decision. | Judge receives a complete **proposal**, with each open prerequisite, file owner, scope and DoD explicit. Draft acceptance is not application or B-071 closure. Source edits/build still require their separate bounded authorization. |

**Small retry draft for step 2:** propose `READ COMMITTED` with a subsequent read after the
conflict has resolved, or explicitly describe the full-transaction restart required by a
stronger snapshot. A row lock alone does not refresh an old repeatable-read snapshot. The
comparison and refusal rule is identical on the normal and recovery paths. Never mutate the
existing judgment to obtain a retry response. PostgreSQL's [isolation documentation](https://www.postgresql.org/docs/current/transaction-iso.html)
and [savepoint documentation](https://www.postgresql.org/docs/current/sql-savepoint.html) support
these transaction distinctions; they do not decide editorial policy or authorize implementation.

### Cross-reference, drift and handback boundaries

Only B-077 changed between the preceding physical-review baseline `b38c992` and `921316e`.
The previous review's document/view crosswalk remains applicable, not a missing new artifact:

| Surface | Current review disposition |
|---|---|
| `Modular_PRD.md` / D-191 / owning Fn_Specs | Preserve requirement ownership and the applied assessment/judgment/retry/report/progress behavior. The corrected physical design must satisfy these inputs; no functional rewrite to accommodate a convenient storage path. |
| Storyboard, story panels, UML/sequence and data flow | Historical Panels A5/A6 in `docs/journal/2026-08-18-storyboard-business-and-digital-twin.md` remain historical, not authority for the target actor. The physical flow is evidence/readiness → finalization → exact-key report/UI read; no new diagram or duplicate UX specification is required solely to restate it. |
| Encyclopedia | Local citation map reviewed; Entry 01 names transition controls. Hosted parity remains **UNVERIFIED** and is not established by a graph rebuild or this review. No publication performed. |
| Graphify | Read-only query completed. At intake, `lastAnalyzedHead = 921316e`, matching HEAD, and `stale = false`. This is extraction currency, not correctness of the actor claim or proof of runtime integrity. A new handoff commit requires Active Lane A's final resynchronization before consuming approval. |

**What was done instead of implementation:** appended this bounded correction in the existing
handoff. No Register, Build Spec, Inventory, Product/Fn/SPECS, journal, graph fragment, schema,
test or application file is changed. B-077 stays `Answered` with no `Resolution`; D-171,
AUTH-DOC, lane state and B-071 closure remain unchanged. No new business clarification is
needed for the source correction; the already-open actor mapping and execution prerequisites
are not silently treated as decided.

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | R160 retained design repairs / D-191 behavior | Preserve corrected ordering, keys, normal locking, explicit preflight and ownership | No repeated repair |
| **Reject** | R160 actor-enforcement precision correction | Contradicted by the full trigger; declared metadata is checked, caller authenticity is not proven | Step 1 source/test-description correction |
| **Approve-with-conditions** | R160 recovery, binding and finalization design | Exceptional paths and write boundaries remain incomplete | Steps 2–5, then independent review |
| **Defer** | Governed-source application, implementation, hosted parity and B-071 closure | No authority or runtime verification established | Existing bounded authorization and evidence gates |

## Lane A: actor account corrected, remaining R160 branches closed (2026-09-07)

**Baseline `53a7b59`; remote already matched it. Graphify resynchronized (`docs-drift` synced at
`53a7b59`); the runner reported all checks passing. No governed tier, spec, Register, schema or
code change here. `supabase/` and `__tests__/` are **Lane B's surface** — specified, never applied
(`D-56`). `D-191` and R159 preserved; the accepted repairs are not redone.**

### 1. Parent — the actor-enforcement account, corrected

**Lane A's "precision correction" was wrong: it stopped reading the function too early.**
`enforce_article_state_transition()` has two queries, and the second one enforces the four
columns.

| Part of the function | What it checks |
|---|---|
| First query, `0002`:323–339 | whether a permitted state edge exists |
| Audit-row query, `0002`:370–398 | a preceding same-transaction row, **including `required_role`, `required_line`, `required_actor_type` and `human_only` at 388–391** |
| Refusal, `0002`:400–402 | rejects unless exactly one qualifying row is found |

**Corrected text, replacing physical §1's actor paragraph:**

> The trigger checks both the legal state edge and the declared audit-row role/Line/actor
> metadata. Against the seeded agent-only `Reviewed → Approved` rule, an audit row declaring
> `actor_type = 'human'` does not qualify; with no other qualifying row, the article UPDATE is
> refused with `23514` and `found 0`. This validates **declared metadata, not the authenticity of
> the person issuing SQL**. A human caller supplying agent-labelled metadata is a different
> question, and no authenticated-caller guarantee follows. The intended human `T5-FINAL` mapping
> and its held rule change still require their existing authorization; the check is not weakened.

Both of the wrong readings are rejected: "the database ignores the four columns" **and** "this
check authenticates a person". `__tests__/s1-schema.test.ts`:94–97 asserts the four predicates in
source, and `supabase/tests/database/s1_transition_enforcement.test.sql`:154–191 specifies
rejection of an agent-labelled row at the human-only `T5` edge with rollback of its orphan ledger
row — **inspected, not executed here**, and neither is a `T6`-human test. The
deciding-actor/authority mapping stays open.

**Narrowed claim carried forward:** the `xmin` guard addresses **late insertion after commit**; it
does not prove required evidence and the approval effect were present **at** commit. §4 supplies
that separately.

### 2. Retry recovery routed through the same comparison

Physical §4's recovery branch returned the existing row **without** the exact/conflicting
comparison, so a conflicting stored result would have been returned as though it matched.

| Element | Specification |
|---|---|
| Isolation | `READ COMMITTED`, with a re-read after the conflict resolves. Under a stronger snapshot a row lock does **not** refresh it — the whole transaction restarts instead |
| Savepoint | established **before** any attempted audit, judgment or evidence write; the article row lock is held **outside** it, so rollback keeps the lock |
| Error handling | only the **named assessment-uniqueness violation** is handled; every other error propagates. An unrelated failure never becomes retry success |
| After rollback | re-read, then run **the same comparison as the normal path**: matching → return the original with no effects; conflicting → refuse, and **no new assessment is created** |
| Orphan audit row | impossible — the savepoint precedes the provisional audit INSERT, so rollback removes it |

The existing judgment is **never mutated** to produce a retry response.

### 3. Reference map finished — per-kind, not "closed declaratively"

**Withdrawn:** calling the references closed declaratively. Composite FKs close the
judgment/assessment/evidence chain; **per-kind validation is still required.**

**Positive reference, bound to the revision.** Physical §2 checked article, `to_state = Approved`
and same-transaction — so two judgments for *different assessments of one article* could point at
the same approval row. Corrected: the approval audit row carries a typed `assessment_id`, and the
validator requires it to equal the judgment's, **and** that this is the exact row that qualified
under the applicable rule (its `gate_role`, `line_assignment` and `actor_type` are the ones the
rule matched), not merely any same-transaction `Approved` row.

| `evidence_kind` | Target | Binding column | Status |
|---|---|---|---|
| `seal` | `workflow_transitions` (`T5_review_sealed`) | `assessment_id` | **proposed addition** — the ledger has none today |
| `readiness_join` | `workflow_transitions` (bundle join) | `assessment_id` | **proposed addition** |
| `trend_signal` | `trend_signals` | **none exists** — `article_id` only (`0001`:41–50; `0002`:143–145), and the table is append-only | **candidate:** a typed cycle-association relation `assessment_trend_signals (assessment_id, trend_signal_id)`. **A revision is never stamped onto immutable historical signal rows** |

The binding columns above are the ones the composite FKs consume, so they belong in the field map.

### 4. Completion boundary, and legacy admission

**The gap:** the `xmin` guard never runs when a caller omits evidence **entirely**. Under the
proposed insert policies, a positive judgment plus its audit row could commit with no evidence and
no article UPDATE.

| Control | Mechanism |
|---|---|
| **Normal path** | a guarded `security definer` finalization routine. Direct INSERT on `editorial_judgments` and `editorial_judgment_evidence` is **not granted** to `anon`/`authenticated`, so the routine is the only write path |
| **Backstop** | a `constraint trigger … deferrable initially deferred` on `editorial_judgments`, evaluated **at commit**: required evidence rows exist, and a positive result has its matching approval row and article effect |
| **Late insertion** | the `xmin` guard, retained for that separate purpose |

This mirrors the pattern already used elsewhere — a normal guarded path plus a database backstop.
**No new authentication capability is introduced or implied.**

**Legacy admission tied to provenance, not a caller-selected label.** The cutover migration stamps
**existing** rows with the legacy contract value; the discriminator is **not caller-selectable**
thereafter — inserts default to the new contract and the legacy value is refused. **A new report
cannot evade the required references by claiming a legacy contract, and old reports are never
rewritten.**

### 5. The bounded packet — exact paths

| Owner | Exact path | Content |
|---|---|---|
| **Lane A** | `docs/v1/V1-DECISION-REGISTER.md` | its own decision act, recorded before any edit (`D-183`, `D-190`) |
| **Lane A** | `docs/specs/` — **no target named** | only if the owners judge one warranted; `fn-specs/` is **unaffected** (behaviour applied at `f16063a`) |
| **Lane B** | `supabase/migrations/0003_editorial_judgment.sql` | enums, three relations, the ledger `assessment_id` additions, composite FKs, constraint trigger, finalization routine, grants/revokes, RLS policies, report columns and validator |
| **Lane B** | `supabase/tests/database/s1_judgment_finalization.test.sql` | the database cases below |
| **Lane B** | `__tests__/s1-judgment-schema.test.ts` | source-level assertions, in the style of the existing `s1-schema.test.ts` |

**Open prerequisites, carried forward visibly:** the human `T5-FINAL` rule change is **held under
`D-171`**; the target-environment preflight is **`UNVERIFIED`**; the deciding-actor/authority
mapping is **open**. `D-30`/`D-52` owners and `D-54` applicability are used unchanged — **no new
routing decision is requested.**

**Tests — retained, plus the exceptional cases. Plans only; none written or run:**

| Input | Enforced by | Observable effect |
|---|---|---|
| Honestly human-labelled audit row at the agent-only `Reviewed → Approved` rule | `0002`:388–391 predicates | `23514`, `found 0`; UPDATE refused; **no claim about caller authenticity** |
| Conflicting outcome surfacing as a uniqueness conflict | §2 recovery comparison | refused; original unchanged; **no new assessment**; no orphan audit row |
| Matching outcome surfacing as a uniqueness conflict | §2 recovery comparison | original returned; no effects |
| Approval row from another assessment of the same article | §3 revision-bound validator | refused |
| `trend_signal` evidence with no cycle association | §3 per-kind resolver | refused; no revision written to the signal row |
| Positive finalization with evidence omitted | §4 deferred constraint trigger | refused **at commit**; nothing persists |
| Direct INSERT bypassing the routine | §4 revoked grants | refused |
| New report claiming the legacy contract | §4 provenance rule | refused; old reports unchanged |
| Negative finalization | §3–4 | judgment and evidence stored; `workflow_state` unchanged; no publication row |

**DoD, if authorized:** Register act first; migration and tests written by Lane B; the database
tests **executed with their actual results reported**; the consistency runner's actual result
reported; Graphify resynchronized after the last tracked edit; independent review at the applied
commit.

**No build follows from this packet.** `B-077` remains `Answered` with no `Resolution`; `D-171`,
`AUTH-DOC`, `B-071` closure and hosted Encyclopedia parity (**`UNVERIFIED`**) are unchanged.
Historical Panels A5/A6 remain historical and are not authority for the target actor; no new
diagram is required.

**This commit advances HEAD; Active Lane A resynchronizes before consuming approval.**

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Reject** | Lane A's actor "precision correction" | Withdrawn — the second query enforces the four columns | Corrected text in §1 |
| **Approve** | Corrected full-function account, with the metadata-not-authenticity limit | §1; both wrong readings excluded | Independent review |
| **Approve** | Retry recovery routed through the same comparison; savepoint before effects | §2 | Independent review |
| **Approve** | Revision-bound approval reference; per-kind resolver map | §3; `trend_signal` needs an association relation | Independent review |
| **Approve** | Finalization boundary — guarded routine plus deferred constraint backstop; provenance-based legacy admission | §4 | Independent review |
| **Approve** | Exact file paths, owners, tests and DoD | §5; open prerequisites carried visibly | Judge decision |
| **Defer** | Implementation, actor-rule change, target-environment preflight, `B-071` closure | Held or ungathered | Separate authorization and verification |

## Independent review: R160 repaired branches accepted; remaining boundary contract (2026-09-07)

### Scope and retained parent

**Rewritten task:** Review Lane A's packet at `1949f6f`, preserve the repaired actor/retry
account, and finish the remaining physical-design drafting under R160. Use this existing B-077
handoff; no new tracker, governing decision, schema, code or implementation authorization.
The parent remains D-191 and accepted R159 behavior. “Closed” here must not conflate an accepted
draft correction with an applied or independently verified implementation.

**Accept and preserve:** the full-function actor account and its metadata-not-authenticity limit;
shared normal/recovery comparison; savepoint before attempted effects; explicit isolation/lock
handling; revision-bound approval reference; separation of late-insert protection from
completion; provenance-based legacy admission as a requirement; and the named migration/test
paths. A guarded routine plus a deferred completion check is a reasonable design direction.
These repairs need no repeat application. The actor mapping, held target rule and environment
preflight remain explicitly open, as Lane A correctly records.

**Evidence qualification:** source-inspected proposal gaps below, not executed database failures.
The complete migration and effective target-environment grants were not inspected because no
new migration exists and no live database was queried. Do not promote “branches closed” to a
complete boundary or runtime guarantee.

### Parent-first Lane A guide — one bounded draft step at a time

| Order / dependency | Gap and source evidence at `1949f6f` | Draft fix | Accept / Reject criterion |
|---|---|---|---|
| **1 — settle the evidence record set**; after retained D-191 contract | Physical §3 calls `assessment_trend_signals` a **candidate**, while §5's test relies on it and the migration still names only the original “three relations.” An association of assessment S/article A with signal X/article B can satisfy separate FKs while violating the same-article contract. | Select and explicitly enumerate the association in the prospective migration contract if retaining `trend_signal` consumption. Name its keys, required fields, same-article validator/constraint and immutable cycle binding. Do not rewrite `trend_signals`. If leaving the association undecided, leave that resolver incomplete rather than claiming it closed; do not silently omit required evidence. | **Accept** a selected, write-set-listed association that rejects S/A → X/B and cannot later rebind historical evidence. **Reject** a required test against an unselected object or existence-only FKs credited with same-article proof. |
| **2 — cover both sides of approval finalization**; after 1 | Physical §4's deferred trigger is attached to `editorial_judgments`. If no judgment is inserted, it has no row event to check. Restricting INSERT on the new judgment/evidence tables does not itself restrict the existing audit-row + article UPDATE route. `0001`:84/94 describes permissive write policies; `0002`:370–402 checks matching audit metadata, not judgment presence. | For the new governed approval contract, add a named guard on the approval path itself, or explicitly restrict that path to the guarded routine. Require its exact same-assessment positive judgment and matching audit reference as part of that boundary. Retain the deferred check for complete evidence/effect consistency and the `xmin` check for late additions. | **Accept** a planned refusal case for an otherwise qualifying audit row + approval UPDATE with **no judgment at all**. **Reject** treating the judgment-only trigger or “direct judgment INSERT denied” test as proof of this inverse case. This is a coverage gap; permissive RLS alone does not prove effective SQL grants or a live exploit. |
| **3 — make the privileged routine contract explicit**; after 2 | “Guarded SECURITY DEFINER” and “not granted to anon/authenticated” do not identify its owner, signature, execution audience, trusted name resolution or effective privileges. PostgreSQL's normal function defaults include PUBLIC execution; inherited/default grants also matter. | Name the schema-qualified routine/signature, owner, fixed trusted `search_path`/qualified object references, intended execution roles, and effective table-write restrictions. Specify revokes and deliberate grants in the same migration transaction, including PUBLIC/inherited/default privilege effects and relevant alternate entry points. Preserve the existing demo access model; do not add a login wall or claim authenticated identity. | **Accept** an effective-privilege and safe-name-resolution test plan for the actual app-facing role, plus a working legitimate call path. **Reject** “only write path” derived solely from omitted grants or the SECURITY DEFINER keyword. Owner/admin powers are an explicit trust boundary, not ordinary client access. |
| **4 — specify the non-UPDATE legacy cutover**; after 1–3 | Physical §4 says the migration “stamps existing rows” while old reports are never rewritten. “Stamp” does not say whether it uses UPDATE, schema initialization or another mechanism. Ordinary UPDATE is refused by `0002`:514–518; this does **not** prove every possible cutover contradicts immutability. | Name an atomic, non-UPDATE cutover preserving existing report values and append-only protection. A candidate is a constant legacy default when adding the discriminator, then a new-contract INSERT default and a validator rejecting caller-supplied legacy values, all in one migration transaction. Verify that candidate against the target environment; do not disable the append-only trigger or manufacture old judgments. | **Accept** empty/existing-row walkthroughs with unchanged prior report values, correct historical classification and no window admitting a new legacy-labelled row. **Reject** an ordinary report UPDATE workaround, or a claim that the currently unspecified “stamp” has already proven those properties. |
| **5 — align objects, files, tests and authority**; after 4 | The migration/test paths are now named, but `docs/specs/ — no target named` is still inside the claimed exact set. The association/control changes above must be represented in that same proposal. | Enumerate objects rather than restating a relation count. Retain the existing exact code/test paths. Either choose the particular existing SPECS file/section whose unresolved implementation content warrants an edit under D-30/D-52, or explicitly exclude the optional SPECS row from this execution set. Supply D-54 applicability for the later authorizing act, including Build Spec/Inventory when scope or created artifacts change. | **Accept** one bounded per-owner proposal with matching writes and DoD. **Reject** a required but unlisted association/control, an unnamed optional directory treated as an exact edit, or review acceptance used to release D-171/AUTH-DOC. |

### Small replacement contract for step 2

> For an approval governed by the new T5-FINAL contract, every permitted route to the
> `Reviewed → Approved` effect must require its matching positive judgment for the selected
> assessment revision, referencing the exact audit row used for that effect. An otherwise
> valid audit row without that judgment cannot authorize the approval. The judgment-side
> completion check separately requires the applicable evidence and matching effect before
> commit. These are complementary checks: neither is inferred from the other. A negative
> judgment retains its no-state-change behavior, and no additional Delivery effect is added.

This is **proposed enforcement of the existing behavior**, not authorization to change the
current transition rule. The human actor mapping and target-rule hold must still be resolved
through their existing owners before implementation. Do not reopen the corrected actor-source
account to compensate for the remaining boundary gap.

The minimum new planned cases are those in the guide: cross-article association, immutable
association binding, approval attempted with no judgment, effective client privileges and
trusted name resolution, and atomic legacy cutover. Retain the already accepted positive,
negative, matching/conflicting retry and rollback cases. Run them only under a separately
authorized implementation unit and observe persisted records/effects, not labels alone.

**Technical references:** [PostgreSQL SECURITY DEFINER guidance](https://www.postgresql.org/docs/current/sql-createfunction.html#SQL-CREATEFUNCTION-SECURITY)
explains owner privileges, trusted name resolution and deliberate execution grants;
[constraint-trigger semantics](https://www.postgresql.org/docs/current/sql-createtrigger.html)
explain row-event coverage and deferred timing; [adding columns with constant defaults](https://www.postgresql.org/docs/current/ddl-alter.html)
supports a non-UPDATE cutover candidate. None establishes target-environment compatibility,
installed permissions, business authority or executed test results.

### Cross-reference and drift disposition

Only B-077 changed between `921316e` and `1949f6f`. The preceding review's document/view map
therefore remains applicable: `Modular_PRD.md` owns requirement identifiers; D-191's applied
Fn_Spec rows own assessment/judgment/retry/report behavior; the historical storyboard and
Panels A5/A6/UML/sequence/data-flow views do not authorize the target actor. No duplicate UX or
diagram artifact is required for these storage/enforcement corrections. The current data flow
remains selected assessment → evidence/readiness → finalization → exact-key report/UI read.

`docs/ENCYCLOPEDIA-SYNC.md` Entry 01 names transition controls. Its local dependency map was
reviewed; hosted content parity remains **UNVERIFIED**, not inferred from Graphify. At intake,
`lastAnalyzedHead = 1949f6f`, equal to HEAD, and `stale = false`; the read-only graph query
completed. Extraction currency is not proof that a physical mechanism is complete. A handoff
commit advances HEAD; Active Lane A performs final synchronization before consuming approval.

**This pass changes only B-077.** Register, Build Spec, Inventory, Product/Fn/SPECS, journal,
graph fragments, schema, tests and application code are unaffected by this review write.
B-077 remains `Answered` with no `Resolution`; no lane transition, new authentication feature,
T6 expansion, B-071 closure or build authorization follows. No new Judge clarification is
needed merely to finish this bounded technical draft; its existing approval/preflight gates
remain separate and visible.

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | R160 repaired actor/retry account and retained behavior | Source correction and shared retry comparison accepted | Preserve; no repeat repair |
| **Approve-with-conditions** | R160 association, finalization and cutover design | Suitable direction; boundary and migration contract incomplete | Steps 1–5, then independent review |
| **Reject** | Complete-boundary / fully closed physical-packet claim | Candidate association, alternate approval path and cutover mechanism still need specification | Correct the bounded proposal |
| **Defer** | Implementation, held actor rule, preflight, hosted parity and B-071 closure | Not authorized or runtime-verified here | Existing owner-specific authorization and evidence gates |

## Lane A: approval-path coverage and the boundary contract (2026-09-07)

**Baseline `957827f`; remote already matched it. Graphify resynchronized (`docs-drift` synced at
`957827f`); the runner reported all checks passing. No governed tier, spec, Register, schema or
code change here. `supabase/` and `__tests__/` are **Lane B's surface** — specified, never applied
(`D-56`). `D-191`, R159 and the accepted actor/retry repairs are preserved and not redone.**

### 0. The claim withdrawn

**"Branches closed" is withdrawn.** The deferred check was attached to `editorial_judgments`, so
**when no judgment is inserted it has no row event and never runs.** Restricting INSERT on the new
relations does not restrict the *existing* audit-row + article-UPDATE route, which `0001`:84/94
leaves permissively writable and `0002`:370–402 validates for audit metadata only — not for
judgment presence. §2 supplies the missing side.

### 1. The evidence association, selected

**`assessment_trend_signals` is selected**, not a candidate, and enters the migration contract.

| Column | Type | Notes |
|---|---|---|
| `assessment_id` | `uuid not null` | |
| `trend_signal_id` | `uuid not null` | |
| `article_id` | `uuid not null` | carried so both parents are checked against one article |
| — | primary key `(assessment_id, trend_signal_id)` | |
| — | FK `(assessment_id, article_id) → editorial_assessments (id, article_id)` | |
| — | FK `(trend_signal_id, article_id) → trend_signals (id, article_id)` | requires `unique (id, article_id)` on `trend_signals` — **a constraint addition only; no data or column of that table is rewritten** |

Assessment `S`/article `A` associated with signal `X`/article `B` is refused by the second
composite FK. **Immutability:** `reject_append_only_change()` trigger plus `revoke update, delete`,
so a cycle binding can never be rebound to different historical evidence.

### 2. Both sides of approval finalization

**Complementary guards; neither is inferred from the other.**

> For an approval governed by the new `T5-FINAL` contract, **every permitted route** to the
> `Approved` effect must require its matching positive judgment for the selected assessment
> revision, referencing the exact audit row used for that effect. An otherwise valid audit row
> **without that judgment cannot authorize the approval.** The judgment-side completion check
> separately requires the applicable evidence and matching effect before commit. A negative
> judgment retains its no-state-change behaviour, and no Delivery effect is added.

**Mechanism:** `create or replace function enforce_article_state_transition()` in `0003`, adding a
clause keyed on `new.workflow_state = 'Approved'` — **not on a particular edge**, so it covers
both routes: the fixed `T6` `Reviewed → Approved` edge **and** the `dynamic_target` route from
`Needs Revision` when `revision_target_state = 'Approved'`. The clause requires exactly one
`editorial_judgments` row with `result = 'positive'`, whose `assessment_id` matches the qualifying
audit row's and whose `transition_id` is that audit row, visible with an in-progress `xmin`.

**This strengthens the existing check and relaxes nothing.** It is **proposed enforcement of
already-applied behaviour**, not a change to the current transition rule; the human actor mapping
and the held target-rule change remain with their existing owners.

**One scoping choice, named rather than assumed:** the clause must apply to articles under the new
contract without breaking existing demo flows. **Recommended:** engage when the qualifying audit
row carries a non-null `assessment_id`. The alternative — engage whenever the article has any
assessment row — is stricter and is stated as the rejected option, not silently dropped.

Retained for their separate purposes: the deferred completion check (evidence and effect present
**at** commit) and the `xmin` guard (late insertion **after** commit).

### 3. The privileged routine, specified

| Property | Specification |
|---|---|
| Signature | `public.finalize_t5_judgment(p_article_id uuid, p_assessment_id uuid, p_result editorial_result, p_reason_body jsonb, p_reason_schema_version text, p_evidence jsonb) returns uuid` |
| Language / security | `plpgsql`, `security definer` |
| Trusted name resolution | `set search_path = pg_catalog, public`, with **every object reference schema-qualified** |
| Owner | a dedicated **non-superuser** role owning the editorial relations — owner/admin power is an explicit trust boundary, not ordinary client access |
| Execute privileges | `revoke all on function … from public;` — **PostgreSQL grants PUBLIC execute by default, so the revoke is mandatory** — then `grant execute … to anon, authenticated` |
| Table writes | `revoke insert on editorial_judgments, editorial_judgment_evidence, assessment_trend_signals from public, anon, authenticated`; their RLS insert policies are **not** permissive |
| Default privileges | `alter default privileges` effects and any inherited grants are stated in the same migration transaction |
| Demo model | preserved — **no login wall, no claim of authenticated identity** |

**"Only write path" is proven by tested effective privileges for the real app-facing role, never
by the `SECURITY DEFINER` keyword or by omitted grants.**

### 4. Atomic, non-UPDATE legacy cutover

**"Stamps existing rows" is withdrawn** — it did not say by what mechanism, and an ordinary UPDATE
is refused (`0002`:514–518). Selected mechanism, all in **one migration transaction**:

1. `add column judgment_id uuid`, `add column assessment_id uuid` — nullable.
2. `add column contract_version text not null default 'legacy'` — existing rows are classified by
   the **column default at DDL time**, with **no row UPDATE**, so append-only protection is
   untouched and no prior value changes.
3. `alter column contract_version set default 'v1_judgment'` — new inserts take the new contract.
4. A BEFORE INSERT validator: **refuse a caller-supplied `'legacy'`**, and require
   `judgment_id`/`assessment_id` non-null whenever `contract_version = 'v1_judgment'`.

**No window admits a new legacy-labelled row**, historical reports keep their values, the
append-only trigger is never disabled, and no judgments are manufactured from old state. *(An
equivalent without a discriminator is a `not valid` check constraint, which exempts existing rows
and enforces every insert; recorded as the alternative, not selected.)* **Both branches still
require target-environment verification before the migration is written.**

### 5. Objects, files, tests and authority

**Objects enumerated, not counted:** enums `editorial_result`, `evidence_kind`; relations
`editorial_assessments`, `editorial_judgments`, `editorial_judgment_evidence`,
`assessment_trend_signals`; column additions `workflow_transitions.assessment_id`,
`editorial_reports.judgment_id`/`.assessment_id`/`.contract_version`, `trend_signals` unique
constraint; routine `finalize_t5_judgment`; replaced function `enforce_article_state_transition`;
the deferred completion constraint trigger; the `xmin` late-insert validator; append-only triggers,
revokes, grants and RLS policies for the new relations.

| Owner | Exact path |
|---|---|
| **Lane A** | `docs/v1/V1-DECISION-REGISTER.md` — its own act, recorded first |
| **Lane B** | `supabase/migrations/0003_editorial_judgment.sql` |
| **Lane B** | `supabase/tests/database/s1_judgment_finalization.test.sql` |
| **Lane B** | `__tests__/s1-judgment-schema.test.ts` |

**`docs/specs/` is explicitly excluded from this execution set** — no existing file or section was
identified whose unresolved implementation content warrants an edit under `D-30`/`D-52`. It is
excluded, not left as an unnamed directory.

**`D-54` applicability for the later authorizing act — corrected:** Register **affected**;
**`V1-ARTIFACT-INVENTORY.md` affected** — three files are created, unlike the `D-191` act where
both targets already existed; `V1-BUILD-SPEC.md` **affected only if** the owners place this work in
a sprint scope or DoD, which this packet does not decide; `Modular_PRD.md` §8 **unaffected**;
`fn-specs/` **unaffected** — behaviour was applied at `f16063a`.

**New planned cases, added to the retained set. Plans only; none written or run:**

| Input | Expected |
|---|---|
| Association of assessment `S`/article `A` with signal `X`/article `B` | refused by composite FK |
| Attempt to rebind an existing association | refused; append-only |
| Qualifying audit row + `Approved` UPDATE with **no judgment at all** | **refused** — the §2 clause, not the judgment-side trigger |
| Same, via the `Needs Revision → Approved` dynamic-target route | refused identically |
| Effective privileges for `anon` | direct INSERT refused; the legitimate routine call succeeds |
| Trusted name resolution | the routine resolves objects under its fixed `search_path` |
| Caller-supplied `contract_version = 'legacy'` on a new report | refused |
| Existing reports after cutover | values unchanged; classified `legacy`; no UPDATE occurred |

**Open prerequisites, carried forward:** the human `T5-FINAL` rule change is **held under
`D-171`**; the target-environment preflight is **`UNVERIFIED`**; the deciding-actor/authority
mapping is **open**. Hosted Encyclopedia parity is **`UNVERIFIED`**. Draft acceptance releases
neither `D-171` nor `AUTH-DOC`, and is not `B-071` closure.

**This commit advances HEAD; Active Lane A resynchronizes before consuming approval.**

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Reject** | My "branches closed" / complete-finalization claim | Withdrawn — the judgment-side trigger cannot cover the no-judgment path | §2 |
| **Approve** | `assessment_trend_signals` selected, same-article by composite FK, immutable | §1; `trend_signals` gains a constraint only | Independent review |
| **Approve** | Approval-path guard keyed on the effect, covering both routes | §2; strengthens, relaxes nothing; scoping choice named | Independent review |
| **Approve** | Routine signature, owner, `search_path`, revokes and grants | §3; PUBLIC execute revoke is mandatory | Independent review |
| **Approve** | Atomic non-UPDATE cutover via DDL default | §4; alternative recorded, not selected | Target-environment verification |
| **Approve** | Objects enumerated; `docs/specs/` excluded; `D-54` applicability corrected — Inventory **affected** | §5 | Judge decision |
| **Defer** | Implementation, actor-rule change, preflight, Encyclopedia parity, `B-071` closure | Held or ungathered | Separate authorization and verification |

## Independent review: R160 scope must not be selected by missing evidence (2026-09-07)

### Scope, evidence and retained repairs

**Rewritten task:** review Lane A's boundary-contract draft at `263ab0d`, preserve accepted repairs,
and give Lane A a parent-first correction guide before any implementation authorization. This is
an append to the existing R160 handoff, not a new finding series, feature, SOP or build packet.
`B-077` remains `Answered`, with no `Resolution`. `D-191`'s applied behavior and R159 are unchanged.

**Accepted as design direction:** effect-based coverage of fixed and dynamic paths to `Approved`;
the selected immutable `assessment_trend_signals` association and composite same-article keys;
the routine's explicit privilege/trusted-name-resolution contract; the non-UPDATE legacy cutover;
and the explicit `docs/specs/` exclusion. Effective privileges, migration behavior and planned
database cases remain **unexecuted**, not verified by the consistency suite.

**Recurring failure pattern:** a control checks the good input but lets an omitted or unexpected
selector avoid that check. Applicability must be established independently of the evidence being
validated. A default value is not an allowed-value restriction: PostgreSQL supplies defaults when
values are omitted, while constraints enforce restrictions on supplied values
([defaults](https://www.postgresql.org/docs/current/ddl-default.html),
[constraints](https://www.postgresql.org/docs/current/ddl-constraints.html)).

### Gaps and exact next steps — parent first

These continue the existing approval-boundary, cutover and write-set obligations; do not duplicate
them under new R-numbers. Evidence below is **source-inspected**, not a live exploit or runtime test.

| Order / existing obligation | What fails in the draft | Lane A's smallest fix draft | Success criterion |
|---|---|---|---|
| **1 — Contract applicability, parent** | The latest §2 activates enforcement only when the submitted audit row has a non-null `assessment_id`. For an article subject to the new contract, an otherwise qualifying audit row can omit that field and skip judgment enforcement. With no judgment inserted, the judgment-side deferred trigger also does not run. `0002`:370–402 still checks the old edge/role/Line/actor/current-transaction metadata, not a judgment. This contradicts §2's invariant and §5's no-judgment refusal cases. | Name the trusted rule or controlled enrollment that establishes whether an approval is subject to the new contract, independently of the submitted audit binding. Once covered, require a non-null valid selected assessment and its matching positive judgment/exact audit row. A missing binding is a refusal, never an exemption. If legacy approvals remain permitted, define their trusted eligibility separately. Do not silently select “article has any assessment” or treat Lane A's rejection of that alternative as a Judge ruling. | Both fixed and dynamic covered approval attempts refuse an omitted binding and no judgment. A caller cannot change applicability by omitting or changing the reference. Any retained legacy case has an explicit, independently established exemption; otherwise exemption readiness is open. |
| **2 — New-report admission, child of the same applicability principle** | The latest §4 uses unrestricted `text`, rejects only `legacy`, and requires references only for `v1_judgment`. A supplied value such as `other` with null judgment/assessment references avoids both branches while satisfying the column's non-null condition. | Preserve the selected atomic DDL cutover. Require every new report INSERT to use exactly `v1_judgment`; reject every other value, including unknown/empty values and NULL. Then require and validate both references under the retained same-article/assessment contract. Existing DDL-classified legacy rows remain untouched. | A new `other` report is refused even with otherwise valid old report fields. Explicit `legacy` is refused. Omitted version receives the new default but cannot omit required references. A valid new report succeeds; historical reports retain their original values and provenance. |
| **3 — Closed authorization write set, depends on the corrected design** | The latest §5 says the Inventory is affected but omits its path from the exact Lane A write list. Build Spec applicability is still conditional. The packet is not yet an exact execution set. | Add `docs/v1/V1-ARTIFACT-INVENTORY.md` to the prospective Lane A unit alongside the Register. Before presenting an execution authorization, resolve `docs/v1/V1-BUILD-SPEC.md`: include it if sprint scope, sequence or DoD changes; otherwise state why it is unaffected. Preserve the named Lane B migration/test paths and the SPECS exclusion. | Every required write has one exact path and owner; the authorization, tier table and DoD agree. No file remains “affected” but absent from the bounded unit. |

**What “guaranteed to fail” means here:** implementing only the stated predicates does not establish
the promised refusal for the counterexamples above. It is not evidence that the deployed system
was exploited, nor that the still-unwritten migration was executed.

### Literal correction clauses for Lane A to carry into the draft

**Approval scope:** “Determine new-contract applicability from the named trusted rule/enrollment,
not from presence of an audit-row reference. For every covered transition to `Approved`, require
the selected assessment binding and matching positive judgment for that exact audit row. Missing,
unresolved or mismatched bindings refuse the transition. Legacy exemption requires its separately
defined trusted eligibility; NULL is not an exemption.” The **name and lifecycle of that trusted
scope source remain to be specified**, not invented by this review.

**Report admission:** “At cutover, existing reports receive the legacy classification without
row UPDATE. Every subsequent report INSERT must have `contract_version = 'v1_judgment'` and valid
judgment/assessment references. All other version values are refused. The new default supplies a
value; it does not waive validation. Historical reports and append-only protections are preserved.”

### Lane A follow-up guide and Judge decision

1. **Finish the parent scope proposal.** Show the trusted applicability source, who/what may set it,
   when it takes effect, and any retained legacy eligibility. The Judge can accept or reject that
   bounded scope; accepting this review does not select an undisclosed enrollment mechanism.
2. **Correct the predicates together.** Apply the scope clause to both approval routes in the
   draft, and replace the report blacklist with exact new-version admission. Retain all accepted
   judgment, retry, negative-outcome, evidence-association and immutability rules.
3. **Add counterexamples before claiming coverage.** Name planned cases for covered fixed and
   dynamic approvals with a null binding; non-null binding without a judgment; a valid matched
   positive outcome; an unknown report version; a valid new report; and unchanged historical
   reports. If a legacy approval exemption is proposed, add both its valid case and an attempted
   caller-forged exemption. Each case must name the deciding predicate and observable refusal or
   permitted effect. These are planned tests until separately authorized and run.
4. **Align the exact files and DoD.** Finish step 3 of the gap table, then submit the corrected
   packet for independent review. Only a later bounded Register authorization plus the applicable
   Active lane permits execution. Preserve the open actor/authority mapping and target-environment
   preflight; neither is answered by these predicate corrections.
5. **Finish evidence last.** Follow `docs/handoff/README.md` for the transaction; Active Lane A
   synchronizes the settled source revision before consuming approval. Do not duplicate that SOP.

### Owning-tier, view and drift cross-check

| Surface | Review result / next owner |
|---|---|
| `Modular_PRD.md` `FR-04a`/`FR-05a`/`FR-07`; `D-191` §5.14e16 | Existing ownership and held target labels preserved. These physical-design corrections add no Product requirement and release no actor-rule or build hold. Lane A owns any later authorization/propagation. |
| `FN-GATES-01-05.md` §11.1; `FN-AUDIT-VISIBILITY-07-08.md` §4.1/§4.2 | Applied assessment/judgment bindings, explicit report references and R159's read-only predicates remain the behavior contract. No new Fn_Spec edit is needed for these enforcement repairs. |
| Storyboard/story panels, UML/sequence and data-flow views | The historical `docs/journal/2026-08-18-storyboard-business-and-digital-twin.md` Panels A5/A6 and sequence diagrams are not new authorization. Preserve the established separation: evidence and judgment inputs → controlled effect/report → read-only display. These repairs do not create another T5/T6 UI feature or require a duplicate diagram. Broader B-071 reconciliation remains with its existing owner. |
| Encyclopedia | Entries 01/04/05 remain topic-impact candidates under `docs/ENCYCLOPEDIA-SYNC.md`; hosted content was not inspected. Parity is **UNVERIFIED**, not inferred from local graph success. |
| Graphify | At intake, `HEAD = lastAnalyzedHead = 263ab0d`, `stale = false`. The scoped query was used for navigation, not semantic proof. This handoff commit advances HEAD; Active Lane A performs final synchronization before consuming approval. Extraction currency, curated coverage/parity and hosted parity are separate facts. |

**Lane boundaries:** Lane A drafts and propagates the bounded contract; Lane B independently
reviews and later implements only under a fresh authorized Active unit. No Lane C workflow change
is identified. Only this B-077 append is written here; no governed tier, schema, application,
Graphify artifact, frozen source or lifecycle header changes. No new business clarification is
needed to record these defects; the remaining applicability choice is a Lane A proposal for the
Judge, not an assumption needed to finish this review.

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | R160 accepted association, routine boundary, effect-based coverage and cutover direction | Preserve as design, not executed proof | Lane A retains them in the corrected packet |
| **Reject** | R160 nullable-binding activation and unknown-version admission | Counterexamples defeat the claimed coverage | Lane A corrects applicability and predicates, then independent review |
| **Approve-with-conditions** | R160 prospective Register / Inventory / Build Spec write set | Inventory path missing; Build Spec disposition unresolved | Lane A completes bounded authorization packet |
| **Defer** | Migration/tests, actor-rule change, `AUTH-DOC`, B-071 closure and Encyclopedia parity | Existing holds and unverified prerequisites retained | Separate authorization, runtime evidence and independent verification |

## Lane A: applicability established independently of the evidence (2026-09-07)

**Baseline `734679d`; remote already matched it. Graphify resynchronized (`docs-drift` synced at
`734679d`); the runner reported all checks passing. No governed tier, spec, Register, schema or
code change here. `supabase/` and `__tests__/` are **Lane B's surface** — specified, never applied
(`D-56`). `D-191`, R159 and the accepted repairs are preserved and not redone.**

### 0. The failure pattern, in my own draft, twice

**A control that checks good input while letting an omitted or unexpected selector avoid the
check.** Both instances are withdrawn:

- **Approval coverage was caller-selectable.** Activating enforcement only when the audit row
  carries a non-null `assessment_id` means a caller **omits the field and is exempt** — and with
  no judgment inserted, the judgment-side deferred trigger does not run either.
- **Report admission had an unknown-value escape.** `contract_version text` rejecting only
  `'legacy'` and requiring references only for `'v1_judgment'` lets a supplied `'other'` with null
  references satisfy the column's `not null` and **avoid both branches**.

**A default is not an allowed-value restriction** — a default supplies a value when one is
omitted; only a constraint restricts a value that is supplied.

### 1. Trusted applicability — mechanism settled, scope is the Judge's

**Mechanism (not caller-supplied):** add `requires_judgment boolean not null default false` to
**`allowed_transitions`**. The trigger already selects the applicable rule by state edge, and the
caller cannot choose which rule applies — coverage therefore becomes **server-side catalog data**,
established independently of the binding being validated.

**Once a matched rule carries `requires_judgment = true`:**

> A covered approval requires a non-null, valid selected assessment and its matching positive
> judgment referencing the exact audit row used for that effect. **A missing binding is a refusal,
> never an exemption.** This holds identically on the fixed `Reviewed → Approved` edge and on the
> `Needs Revision → Approved` dynamic-target route.

**Scope is a Judge decision and is NOT taken here.** Which rules carry the flag, and whether
legacy approvals remain permitted on some separately established trusted basis, are open. The
"article has any assessment" alternative is **not selected**, and my earlier rejection of it is
**not** a ruling — it is presented below with the others. **Until the Judge decides, exemption
readiness is open**, and no coverage claim is made.

### 2. New-report admission closed

**Typed, per `D-110`, rather than unrestricted text:** `create type report_contract_version as
enum ('legacy', 'v1_judgment')` — an `'other'` value becomes impossible **at the type level**, not
merely refused by a predicate.

The atomic non-UPDATE cutover is retained and unchanged: `add column contract_version
report_contract_version not null default 'legacy'` classifies existing rows **by DDL default with
no row UPDATE**; then `set default 'v1_judgment'` for new inserts.

**Insert validator:** accept **exactly `'v1_judgment'`**; refuse every other value — explicit
`'legacy'` included — and require `judgment_id` and `assessment_id` non-null and valid under the
retained same-article/assessment contract. An omitted version takes the new default and **still
cannot omit the required references**. `not null` already excludes NULL, and the enum excludes
unknown values; the validator carries the rest.

Historical reports keep their original values and their `legacy` provenance, untouched.

### 3. The closed write set, with Build Spec settled

| Owner | Exact path | Why |
|---|---|---|
| **Lane A** | `docs/v1/V1-DECISION-REGISTER.md` | the authorizing act, recorded first |
| **Lane A** | `docs/v1/V1-ARTIFACT-INVENTORY.md` | three files are created — previously called "affected" but omitted from the list |
| **Lane A** | `docs/v1/V1-BUILD-SPEC.md` | **included, determination made:** the unit adds new relations and replaces the transition-enforcement function. That is **not inside S1's defined window**, whose scope is the eight listed decisions and `0002`, so a sprint's scope, sequence and DoD change. The Build Spec already carries specified-not-applied schema items this way — the `articles_url_uidx` removal under `D-121` is the precedent |
| **Lane B** | `supabase/migrations/0003_editorial_judgment.sql` | |
| **Lane B** | `supabase/tests/database/s1_judgment_finalization.test.sql` | |
| **Lane B** | `__tests__/s1-judgment-schema.test.ts` | |

**`docs/specs/` remains explicitly excluded.** No file is left "affected but absent": the
authorization, the tier table and the DoD now name the same set.

**`D-54` applicability for the later act:** Register **affected**; Artifact Inventory
**affected**; Build Spec **affected** (above); `Modular_PRD.md` §8 **unaffected**; `fn-specs/`
**unaffected** — behaviour applied at `f16063a`; Encyclopedia **unaffected by declared
dependency**, hosted parity **`UNVERIFIED`**.

### 4. Counterexample tests added

Retained cases stand; these are added. **Plans only; none written or run.**

| Input | Expected |
|---|---|
| Covered rule; qualifying audit row **omits** `assessment_id`; no judgment | **Refused** — omission is not exemption |
| Covered rule; audit row carries a binding but **no judgment exists** | Refused |
| Same two cases via the `Needs Revision → Approved` dynamic-target route | Refused identically |
| Caller changes or drops the reference to alter applicability | Applicability unchanged — it comes from the matched rule |
| New report with `contract_version` outside the enum | **Rejected by the type**, not by a predicate |
| New report supplying `'legacy'` | Refused |
| New report omitting the version, with null references | Refused — default supplied, references still required |
| Valid new report | Succeeds; both references validated |
| Existing reports after cutover | Values unchanged; classified `legacy`; no UPDATE occurred |

### 5. What remains open

The human `T5-FINAL` rule change is **held under `D-171`**; the target-environment preflight is
**`UNVERIFIED`**; the deciding-actor/authority mapping is **open**; hosted Encyclopedia parity is
**`UNVERIFIED`**. **The applicability scope in §1 is a Judge question and is presented, not
answered.** Effective privileges, migration behaviour and every planned database case remain
**unexecuted** — the consistency suite does not verify them. Draft acceptance releases neither
`D-171` nor `AUTH-DOC` and is not `B-071` closure.

**This commit advances HEAD; Active Lane A resynchronizes before consuming approval.**

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Reject** | Coverage gated on a caller-supplied `assessment_id` | Withdrawn — omission was exemption | §1 |
| **Reject** | `contract_version` as unrestricted text with two branches | Withdrawn — unknown values escaped both | §2 |
| **Approve** | Rule-level `requires_judgment` as the trusted, server-side applicability mechanism | §1; caller cannot influence it | Judge decides scope |
| **Approve** | Typed `report_contract_version` enum; whitelist-on-insert; cutover retained | §2 | Independent review |
| **Approve** | Write set closed — Inventory added, Build Spec included with its determination | §3; nothing "affected but absent" | Judge decision |
| **Approve** | Counterexample tests for both bypasses | §4 | Independent review |
| **Defer** | Applicability scope, implementation, actor-rule change, preflight, Encyclopedia parity, `B-071` closure | Presented or held | Judge decision, then separate authorization |

## Judge scope ruling on approval applicability (2026-09-07)

**Presented as the open question in the preceding section; answered directly by the Chief Editor
this turn. Recorded here as a scope ruling for the draft — it is not a Register act, and it
authorizes no implementation.**

### The ruling

| Question | Ruling |
|---|---|
| Which approval rules carry `requires_judgment = true`? | **The target human `T5-FINAL` rule only.** |
| Are legacy approvals permitted after cutover? | **No exemption** — a covered rule always requires its matching positive judgment. |

### What follows, stated plainly

**The enforcement ships inert, and that must not be misread.** The target human `T5-FINAL` rule is
**held under `D-171`**. Since it is the only rule that will carry the flag, **no rule carries it
today** — so on application, the migration installs the column, the guard clause and the routine,
and **no approval is covered until `D-171` releases that rule.** "Approval guard installed" must
never be reported as "approvals are guarded".

**Existing paths are unaffected.** The current agent `T6` `Reviewed → Approved` rule and the
`Needs Revision → Approved` dynamic-target route carry `requires_judgment = false`, so demo and
seeded flows continue to work unchanged. This was the narrowest of the three options and it
deliberately defers real enforcement to the held rule.

**No exemption, by construction.** Once a rule is flagged there is no legacy bypass and no
separately established eligibility path to draft. The exemption class is closed rather than
managed, so the "trusted legacy eligibility" drafting step is **withdrawn as unnecessary** — not
deferred.

### One test consequence, or the tests would be vacuous

Because no production rule carries the flag, the covered-approval counterexamples —
omitted binding, no judgment, and both the fixed and dynamic routes — **must run against a test
fixture rule seeded with `requires_judgment = true`.** Written against production catalog data
they would pass while exercising nothing: `a_check_that_cannot_fail` in a new place. The
uncovered-path cases run against the real rules and assert that those approvals still succeed
without a judgment.

**Nothing else changes.** The mechanism, the report-admission enum and whitelist, the write set
and the `D-54` applicability table are unchanged. `D-171`, `AUTH-DOC`, the target-environment
preflight (**`UNVERIFIED`**), the deciding-actor/authority mapping (**open**) and hosted
Encyclopedia parity (**`UNVERIFIED`**) are untouched. `B-077` remains `Answered` with no
`Resolution`; this ruling is not `B-071` closure and authorizes no build.

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Scope ruling recorded — human `T5-FINAL` rule only; no exemption | Judge decision received this turn | Carried into the design draft |
| **Approve** | Fixture-seeded covered rule for the counterexample tests | Prevents a vacuous test set | Independent review |
| **Reject** | Reading the installed guard as active coverage | Inert until `D-171` releases the rule | Stated in the packet |
| **Withdrawn** | The trusted legacy-eligibility drafting step | No exemption exists to define | — |
| **Defer** | Implementation, actor-rule change, preflight, Encyclopedia parity, `B-071` closure | Held or ungathered | Separate authorization and verification |
