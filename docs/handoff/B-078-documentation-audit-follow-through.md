# B-078 — Documentation audit follow-through: current authority and reviewable closure

- **Raised:** 2026-09-06 by Lane B
- **Kind:** finding
- **Phase:** 1
- **Blocks:** claiming the documentation-quality audit is closed; no application implementation
- **Status:** Answered
- **Resolution:** Verified
- **Verified-By:** Lane B (Codex), independent of Lane A's application of the documentation corrections and curated fragment
- **Verified-At-Commit:** de665a76df42d5b55e95fb018f8facdb9b1ec5a5
- **Lane A:** Acknowledged and applied 2026-09-06. Parent 1 and Child 2 applied as drafted: `docs/README.md`'s plan-pack table row and "The two PRDs" section replaced (the demand/supply framing removed, matching `B-073`'s already-established fix elsewhere in the same file); the "Order to read" list replaced with the fuller six-item version; the Register's "Last approval update" relabelled; a current-reference note added after the historical `Q3`/`Q5`/`Q11` paragraph (preserved, not rewritten) citing `D-143`/`D-146`/`D-111`/`D-112`; the Build Spec's Bun sentence corrected to cite `D-64` directly; the Build Spec §2 "rule is unenforced" line corrected to name `D-88`/`D-89` and scope the claim to the working branch only. Child 3/4/5 are correctly out of this pass's scope — no view/report artifact, no publication-spec change, no graph/Encyclopedia claim made. This entry's own closure criteria (independent review at a settled revision) remain outstanding; `Status` stays `Open`. **Correction appended 2026-09-06, after Round 2:** the phrase "applied" above overstated the result — Round 2 correctly found R2-1 (the deviation register filed as history-only, contradicting its own "Live instrument" header) and R2-3 (the Build Spec still reading "stopped only by the agent choosing to stop" while citing `D-88`'s commit-message control two lines later) still outstanding at that point, and no applying commit existed. R2-1, R2-2 and R2-3 are now **edited in the working tree; pending commit and independent verification** — not `Applied`, which requires a named commit. The original wording above is preserved rather than rewritten. **Round 3 response, 2026-09-06:** the claim that graph coverage required committing first was Lane A's error, now corrected — `missing.js` walks `docs/` with `readdirSync` and `merge7.js` merges from disk, so neither needs a commit. `frag123.json` created and merged (1 node, 3 edges, verify-only run first; cross-fragment audit passes at 122 fragments); `frag122` deliberately left free because `B-071`'s `R152` plan names it. **Round 4 response — one item declined, with evidence.** The requested `V1-ARTIFACT-INVENTORY.md` lifecycle rows for this entry and `frag123` are **not** added: no individual `B-NNN` entry or fragment file is inventoried anywhere — `B-076`, `B-077`, `frag119`, `frag120` and `frag121` each return zero matches — because the inventory tracks `docs/graph-fragments/` as a directory (already ✅) plus channel infrastructure, not individual entries. Adding these two rows would make them the only individually-inventoried entry and fragment among many, and is the restatement shape `D-100`/`B-011` rejected when they refused a second backlog artifact. If a per-entry inventory convention is actually wanted, that is a scoped decision applying to all entries, not one applied first to `B-078`.
- **Evidence:** review baseline `27ad43ddb068a9c17b95b57506c7f5e8b02d8cb3` plus the staged changes to `docs/README.md`, `docs/v1/V1-BUILD-SPEC.md`, and `docs/v1/V1-DECISION-REGISTER.md`; current handoff headers and B-071/B-077 review chains; source references below; read-only consistency and Graphify diagnostics on 2026-09-06.

## What happened

The user requested continuation of Lane A's documentation-quality review: consolidate concerns,
find gaps, draft fixes, examine requirements/views/cross-references, and identify failure-derived
success criteria. Implementation planning only; no build. The pasted Lane A transcript is a set of
claims to verify, not evidence that its edits were committed, independently verified, or closed.

**Clarified request:** Review the existing handoff records and Lane A's three staged documentation
corrections. Preserve each existing item's canonical owner. Draft only the remaining correction
plan, ordered by dependency, with exact text where the evidence settles the answer, acceptance
criteria where design remains open, and separate source/graph/external-artifact verification.
Do not build, change gate order, promote handoff lifecycle states, or apply governed-document fixes.

This entry owns the residual documentation-audit packet only. It is not a second backlog and does
not replace B-071's product-plan chain or B-077's handoff-closure map. The review below is a dated
snapshot, not a maintained roll-up. Read originating entries for live state.

### Review of Lane A's claimed result

| Claim | Observation at this review | Disposition |
|---|---|---|
| Stripe/X8 correction | Staged README text correctly identifies removal as historical; B-003 has independent verification at `67706ca`; D-121/X8 records closure | Accept correction content; do not reopen B-003 or claim this new README edit is Verified |
| Frozen-document/navigation correction | Staged reading-list text now calls the Project PRD frozen. The opening table still places it in a non-governing plan pack; the two-PRD paragraph still says neither governs the other; the reading list still sends readers to historical pre-S0 work | Partial correction; parent authority/navigation remains incomplete |
| Q3/Q5 summary fixed | Staged sentence flags D-143, but the leading list still calls Q3/Q5 decisions to make. Q11 has the same known defect. Product §10 independently records these dispositions | Accept the added warning as an interim clarification, not a corrected current-status view |
| Bun status fixed | Staged sentence now marks the old absence statement historical. D-64 is the direct installation/lockfile evidence; D-70 records the later verification apparatus | Accept historical clarification; use the direct installation citation in the final wording |
| Publication concerns deferred | SPECS-PUBLICATION §§3–4 is unchanged. Timing and duplicate-recovery questions are real specification gaps | Keep S4 readiness ownership; draft acceptance boundaries below |
| Checks prove closure/sync | Full suite passes at this baseline, but its checks do not prove semantic closure or staged-content graph parity | Reject that inference; retain the passing result within its actual scope |

### Canonical routing — existing work is not reopened here

| Concern | Existing record to use | What this review adds |
|---|---|---|
| Handoff lifecycle, legacy Applied entries, independent verification | B-077; originating B-072/B-073/B-074/B-075/B-076 entries | No new lifecycle policy or bulk promotion. Follow B-077's source-entry review questions |
| Target editorial semantics and proposed rename | B-071; V1-B071-CORRECTIVE-PLAN §§15–16; D-171/D-189/D-190 | Cross-reference review only. D-189 applies Unit 7 disclosure; it does not authorize Units 1/2, R152, or close B-071 |
| View/report mapping | B-071 R159/R160; corrective plan §§16.3/16.5 | Retain the existing SPECS/UX and FN-AUDIT-VISIBILITY follow-up tiers |
| Phase 3 settings/compatibility | B-016 and C-001 | Preserve existing Phase 3 deferrals; a documentation check cannot prove live deployment settings |
| Graph runtime/semantic limitations | B-041/B-050 and B-077's final graph clarification | New observation: staged docs are not covered by the HEAD-only drift check; do not duplicate their tooling backlog |
| Entry-point/current-summary residue and this review's completeness | This entry | Exact proposed prose and closure criteria below |

## What you need

### Parent 1 — make authority and present scope unambiguous

**Draft for Lane A review, not applied.** In `docs/README.md`, remove `PRD.md` from the
non-governing plan-pack row and add a distinct row:

> `PRD.md` — the frozen Project Requirements Document: the customer's requirement baseline.
> Governing source under D-29; cited as evidence and never edited through downstream refinement.

Replace the “neither governs the other” introduction and the “never settled by precedence”
paragraph under “The two PRDs” with:

> The two documents serve different purposes within D-29's intent hierarchy:
> Project PRD → Product PRD (`Modular_PRD`) → functional specifications → technical specifications.
> The Project PRD preserves customer requirements; the Product PRD elaborates them into governed
> product behaviour. A downstream elaboration must remain within the frozen baseline. A proposed
> addition or contradiction follows the frozen-source intake procedure below: record a named
> Register gap or change request and obtain the Judge's decision on the governing successor.
> Neither ordinary refinement nor this reading guide authorizes editing a frozen source.

Replace the current “Order to read” list with:

> 1. Read this guide's authority map and “How a request becomes execution.”
> 2. Consult the Project PRD and governing source set for the scope being interpreted, in their
>    established precedence order.
> 3. Read `v1/V1-DECISION-REGISTER.md`, `v1/V1-BUILD-SPEC.md`, and
>    `v1/V1-ARTIFACT-INVENTORY.md` for operative decisions, scope/sequence/DoD, and file lifecycle.
> 4. For execution readiness, read the selected lane's work order and
>    `v1/V1-PHASE-CLOSURE.md` §5; this guide records no live lane state.
> 5. Follow the relevant `Modular_PRD.md` feature group to its functional and necessary technical
>    specifications. Read the originating handoff for any surviving condition.
> 6. Consult journals and the scaffold plan pack only as dated rationale or substrate history.
>    Their original sprint instructions and diagrams do not constitute current authorization.

Preserve the Stripe history correction. Do not rewrite historical storyboard panels or frozen
documents. For gate-order examples in the guide, point to B-071's current/target distinction
rather than introducing another live role/state table.

**Pass:** a reader can identify the owning source, current work order, and historical references
without receiving both “Project PRD governs” and “Project PRD is non-governing.” No instruction
requires rerunning historical pre-S0 work merely because it appears in the reading list.

### Child 2 — remove current-status ambiguity without rewriting history

After Parent 1, replace the Register §5 paragraph beginning “Chief Editor decisions still to make”
with the following current-reference text, preserving its old narrative as explicitly dated history
if retention is required:

> Current question dispositions are recorded in the applicable decision sections below; the
> Product PRD §10 provides their question mapping. Q3/Q5 are ruled by D-143 (publish-path rationale
> clarified by D-146), and Q11 is closed by D-111/D-112. They are not pending Judge choices.
> Consult each surviving question's own disposition and scope before treating it as a blocker;
> the historical list below is not a current open-question register.

This deliberately does not invent a replacement list of every open question. Do not turn a
Phase-0 ruling into a production ruling (notably Q1/OD3). If Lane A instead wants a live roll-up,
derive and verify it from owning decisions; that tooling is a separate scoped proposal.

Relabel the Register's opening “Last approval update: 2026-08-19” as
“Initial approval-summary cutoff: 2026-08-19; later dated approvals appear in their decision
sections.” Do not manufacture a new last-approved date from this review.

For the Build Spec's Bun sentence, use:

> The original “written, locally unverified” statement predates the installed toolchain.
> D-64 records Bun and the lockfile verification; D-70 records installation of the verification
> apparatus. Historical results do not replace checks against the revision now being reviewed.

For Build Spec §2's broad “rule is unenforced” statement, distinguish its boundaries:

> The working branch has no PR merge gate. Local lane declarations and checks support the
> lane rule; they do not confer authority. D-88 records the commit-message crossing control and
> D-89 records the main-branch PR/status gate. Live Phase 3 settings and compatibility evidence
> remain with B-016/C-001; a documentation statement is not verification of those settings.

**Pass:** Q3/Q5/Q11 cannot be read as pending from the current summary; old dates and installation
statements are explicitly historical; no sentence claims that a green build or suite proves all
semantic or deployment conditions. No resolved choice is reopened.

### Child 3 — cross-reference requirements and views using their existing owners

| Surface inspected | What it actually establishes | Required follow-through; no duplicate artifact |
|---|---|---|
| `Modular_PRD.md` §§3.4, 4–6, 9 | Historical/current-documentation and decided-target-held markers coexist. US-04a/US-05a, FR-04a/FR-05a and AC-05a/05b/07a describe target review/bundle/human-disposition behaviour; target text still uses T6 | Use B-071's occurrence ledger for the proposed T5-FINAL change. Do not apply the rename globally or claim D-189 applied it |
| Storyboard journal Panels A2/A5/A6/A7 and B3–B8 | Four Mermaid diagrams exist: sequence/flow illustrations plus prose panels. A5 is human T5 review; A6 is agent T6 approval. A/B here mean MVP/POC business exposures, not development lanes | Preserve historical panels. Corrective plan §16.5 owns their current/target pointer mapping. The dated “tables do not exist” and old independence-field examples are history, not new schema defects |
| Corrective plan §16.5 data flow and §15.3 outcome contract | The arrow is a success path; §15.3 separately distinguishes incomplete pre-join, incomplete post-join, negative, and positive dispositions | Each future view must preserve Drafted before the join, Reviewed after the join without approval, and no Delivery authorization for incomplete/negative outcomes. Follow the existing outcome contract, not a newly invented state model |
| UML/progress/report views | Existing Mermaid diagrams do not prove that R159/R160's target-view reconciliation is complete | Keep R159 with `docs/specs/ux/` and R160 with `FN-AUDIT-VISIBILITY-07-08.md`. Before those children close, map each outcome to its actor/message/state/output and originating requirement; link the source contract instead of repeating it |
| `ENCYCLOPEDIA-SYNC.md` | Local dependency ledger and known hosted URL; no local copy of the hosted content. Entries 01/04/05 are relevant impact-review candidates | Hosted retrieval was attempted in this review and returned no content. The artifact is unread here, not missing. An actor with access must read it and record exact affected entries/revision before claiming parity; no new publishing task is authorized here |

**Pass:** every completion claim identifies the exact artifact, owning tier, revision and covered
criterion. Historical view, decided target, proposed correction, and authorized execution are never
synonyms. Missing target-view work remains with its named existing owner. B-071 is not closed by
this cross-reference table.

### Child 4 — publication contract: draft S4 acceptance boundaries

Retain the existing S4 dependency in `SPECS-PUBLICATION.md`. After the governing editorial outcome
contract is settled, Lane A should refine §§3–6 to answer the following before Lane B implements it:

| Failure case | Draft required contract | Success evidence |
|---|---|---|
| Five-minute polling is said never to delay an eligible retry | Distinguish backoff eligibility from scheduler dispatch. Proposed wording: “A retry is not attempted before its configured backoff has elapsed. Polling may add up to one schedule interval in a healthy, unloaded scheduler; queueing, outages and execution add further delay. A dispatch/completion service objective requires an explicit accepted bound.” | Example: failure 12:00:01, eligible 12:05:01, ticks 12:05 and 12:10; next eligible tick is 12:10. Verify no early retry and disclose the additional 4m59s; do not promise zero delay |
| Two invocations select the same due target | Specify atomic claim/lease ownership, expiry and recovery, or another explicitly accepted concurrency mechanism | Concurrent-worker scenario has one authorized outbound attempt per logical attempt; losing worker does not send |
| Provider succeeds, then worker dies before recording success | Specify provider-supported idempotency or reconciliation before retry; where outcome is unknowable, hold/escalate rather than blindly send again | Crash scenario recovers the existing result or an explicit uncertain/manual state; a local provider-event unique index alone is insufficient proof |
| Approval creates an eager target with no event | State whether approval atomically creates Pending or whether the selector treats an eventless target as due; align with D-114's eager-target rule | A never-attempted approved target cannot remain invisible indefinitely |
| Publication state is derived in one description and updated in another | Reconcile `SPECS-PUBLICATION.md` §3 with transition-enforcement T7/T11 and the governed publication behaviour; identify the owner of promotion and required audit evidence | First live target and later target successes produce the specified article state and audit record without contradictory persisted/derived values |

These are proposed design/acceptance questions, not implementation choices already approved.
Concurrency or a crash can cause duplicate effects; it is not honest to claim every run must fail.
The polling example is a deterministic counterexample to the zero-delay assertion. No technical
review can guarantee business survival or infer bankruptcy from these documentation gaps.

### Child 5 — closure evidence and graph synchronization, last

Observed before creating this entry:

- The full `bun run check` passed when subprocess restrictions were lifted. The first sandboxed
  run failed/skipped subprocess-dependent checks with EPERM; it was not a source-defect result.
- `docs-drift` reports `27ad43d` and `.graphify/branch.json` matches HEAD with `stale: false`.
  Inspection of `scripts/checks/docs-drift.mjs` confirms that it compares HEAD/metadata; it does
  not hash or compare staged/unstaged documents. It cannot establish parity with Lane A's edits.
- `graphify check-update` reports pending local semantic descriptions/labels. This is distinct
  from committed-revision currency, coverage, and tracked curated-content parity (B-077).
- Default `graphify review-delta` returned no changed files although the index contains the three
  named docs. That invocation is not evidence that the staged packet has no impact.
- The upstream manuscript `docs_context_for_claude.txt` is an untracked snapshot, not the current
  source of truth. No regeneration or changes to it are part of this packet.

**Required sequence for Lane A:** settle and commit the authorized source correction first;
update the applicable tracked curated descriptions/relationships without asserting unauthorized
B-071/R152 semantics; rebuild extraction and re-merge all curated fragments using the installed
Graphify workflow; check branch currency, coverage and curated-content parity separately; report
local semantic-description status honestly; then supply the settled revision for independent review.
Use `portable-check` before proposing tracked graph artifacts. Never commit graph runtime files.

The current request's “check if docs drifted and require graphify to sync” is satisfied here as a
diagnostic and an explicit Lane A follow-up requirement; synchronization is not claimed performed.
This is a draft-only handoff, and the existing SOP assigns synchronization after durable source
changes to Active Lane A. It must include this new entry in that later extraction/coverage pass.

**Closure criteria for this entry:**

1. Lane A acknowledges and answers this exact entry without duplicating the existing backlog.
2. Parent 1 and Child 2 are corrected at a named revision, or each residual receives an explicit
   disposition with its owner and follow-up tier. A warning added after a contradictory current
   instruction is not sufficient.
3. Child 3 remains a link-only routing record; B-071/B-077 and their originating entries keep their
   own lifecycle. The external Encyclopedia is either directly reviewed or explicitly unverified.
4. Child 4 has a recorded S4 readiness disposition and concrete acceptance questions; deferment
   is not represented as implementation completion.
5. Source/graph evidence covers the settled revision and states its limits. Independent review
   satisfies the existing `docs/handoff/README.md` lifecycle contract before any Verified status.

### Tier applicability for the proposed correction

| Tier/surface | Treatment |
|---|---|
| Register | Lane A records the applicable bounded correction/disposition; preserve historical approval provenance |
| Build Spec | Correct stale status/enforcement prose; no new sprint or build authority |
| Artifact Inventory | This handoff is a newly created review record; Lane A records its lifecycle per D-54. No new product/view file proposed |
| Product PRD §8 | Unaffected by this review: no sprint closes and no tier opens. Existing B-071 propagation remains its own work |
| Product/Fn_Specs/SPECS/UX | Cross-reference and proposed follow-ups only; application requires the owning unit. Publication refinement stays S4 readiness |
| Frozen Project PRD/Charter/0001 migration | Unaffected; no edits proposed |
| Code, deployment workflows, lane state | Unaffected; no implementation or lane transition |

## What you did instead

Lane B reviewed sources, checked the existing handoff channel, and drafted this one entry using
the template. It did not modify Lane A's staged files or any existing handoff lifecycle, build
application code, author a new diagram, or assert external Encyclopedia verification.

The intended durable path is exactly `docs/handoff/B-078-documentation-audit-follow-through.md`.
At inspection the index already contained Lane A's three files. The canonical handoff-only commit
procedure requires an empty staged set before staging this path, so Lane B leaves this draft
unstaged; it does not unstage or commit Lane A's work. Lane A can review and handle transport after
its existing staged packet is resolved. No pushed or Verified claim is made.

### Final draft validation — 2026-09-06

The full consistency suite was rerun after this entry was created. It reports exactly the two
expected handoff obligations: `graph-coverage` has not yet incorporated B-078, and
`handoff-response` requires Lane A's acknowledgement. All other checks pass. Neither obligation
is satisfied by Lane B writing an acknowledgement on Lane A's behalf or claiming an unperformed
graph merge. `git diff --check` reports no issue in the tracked diff; the staged set remains
Lane A's original three files. This draft is complete for review, not terminally closed.

## Approve / reject

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve-with-conditions | Entry-point and tracking corrections | Phase 1: Parent 1 then Child 2, followed by revision-based independent review |
| Approve | Existing B-071/B-077 ownership and historical storyboard preservation | Phase 1: retain link-only routing; those entries are not closed here |
| Defer | Publication contract and target UML/report work | S4 readiness for publication; R159/R160's existing SPECS/UX and audit Fn_Specs tiers for views |
| Defer | Hosted Encyclopedia parity and graph synchronization | Phase 1 evidence follow-up after settled sources; direct hosted review by an actor with access |
| Reject | Whole-audit closure from staged edits, green checks, or a success-path diagram | Phase 1: meet the explicit closure criteria above |
| Reject | Application build, route activation, bulk handoff closure, or inherited authorization | Out of scope; no implementation tier changed |

## Round 2 — Lane B review of Lane A's response and commit/push readiness (2026-09-06)

### Clarified request and review boundary

Review Lane A's working-tree corrections against this entry, break the remaining decisions into
parent-first Accept/Reject questions, and specify commit/push readiness. Draft only. This round
does not execute a commit/push, apply governed fixes, close B-078, or inherit authorization from
the pasted “Judge Approved: decision-tree decision” wording. The user has authorized this review
and plan; no clarification is needed to complete that bounded task.

Baseline remains `27ad43d`. Lane A's latest changes are **working-tree edits**, not a committed
application packet: all three tracked documents show `MM` (staged and additionally modified).
The staged versions are the earlier, partial corrections. B-078 is still untracked. These are
observations at this review, not durable status fields to maintain here.

### Parent-first decision table — one question per row

“Accept” below accepts the specified content or next step; it does not mean Verified or authorize
every later row. The house verdict column distinguishes acceptance, conditional acceptance and
deferral. Lane A records any required bounded Judge act under the existing SOP before applying
further governed edits; this table does not replace that record.

| Order | Decision for Judge / Lane A | Recommendation | Depends on | Evidence needed to pass |
|---|---|---|---|---|
| P0 | Accept the corrected Project PRD authority, six-step reading route, historical date label, and D-64 citation? | **Approve** these bounded content changes | None | Present in working-tree README/Register/Build Spec. Retain them; no need to rewrite them again |
| P1 | Accept the remaining navigation correction R2-1 below? | **Approve-with-conditions** | P0 | Deviation register remains a live instrument; plan-pack diagnosis is visibly historical before its old claims are read |
| C2 | Accept the status/control presentation corrections R2-2/R2-3 below? | **Approve-with-conditions** | P1 | Historical question list is labeled before its old heading; the Build Spec no longer says agent choice is the only crossing control |
| C3 | Accept the existing child routing, without claiming the children are complete? | **Approve** routing only | P0 | B-071/B-077 retain ownership; publication remains S4 readiness; R159/R160 keep their named tiers; hosted Encyclopedia stays unverified |
| C4 | Is the source packet ready to commit? | **Defer** pending the concrete gate below | P1, C2, C3 | Final intended content staged; B-078 included; required lifecycle/curated graph record addressed; checks and exact changed-path review pass |
| C5 | Is the commit ready to push? | **Defer** until C4 produces a reviewed commit | C4 | Fresh remote evidence, reviewed outgoing range, intended branch, authorization and normal hooks; post-push remote confirmation |
| C6 | May B-078 be marked Verified/closed? | **Reject now** | C5 and source/graph evidence | Independent review plus every original closure criterion met or explicitly dispositioned; commit/push alone is not closure |

### Exact residual corrections — specified, not applied

**R2-1 — README navigation and historical scope (Parent 1).** Lane A added
`governance/provisional-deviation-register.md` to reading-list item 6's “only as dated rationale or
substrate history.” That was not in the draft and contradicts that register's header,
“Status: Live instrument. Updated by amendment, never rewritten.” Remove it from item 6 and add
to item 5:

> Consult `governance/provisional-deviation-register.md` for recorded provisional departures and
> their closing triggers. It records departures and creates no authority; it is not history-only.

Keep item 6 scoped to journals and scaffold plans. Immediately after “About the plan pack,” add:

> Historical scaffold diagnosis: the comparisons and original S0/0002 remediation references
> below describe the earlier baseline. They are not a statement of current schema, gate-order
> readiness, or outstanding work. Consult the operative Register and lane work order for current
> dispositions, and B-071's current/target mapping for gate-order interpretation.

Also replace the present-tense attribution “CLAUDE.md describes the plan pack as …” with
“The original scaffold guidance described the plan pack as …”. This is a scope annotation, not a
rewrite of the historical storyboard or a decision about the target gate order.

**R2-2 — Register history label (Child 2).** The new note accurately states Q3/Q5/Q11's current
dispositions, so retain it. Its placement after the old bold “Chief Editor decisions still to
make” leaves the first instruction encountered misleading. Insert immediately before that old
paragraph:

> **Historical question-summary paragraph — superseded for current status.** Preserved below as
> dated history only. Its “still to make” label is not operative; the current-reference note that
> follows identifies the owning decisions.

This corrects presentation without deleting history or re-deriving a second open-question list.

**R2-3 — Build Spec control boundary (Child 2).** Replace the sentence beginning “The working
branch has no PR merge gate” through “confer authority by themselves” with:

> The working branch has no PR merge gate. Local lane declarations and checks support the lane
> rule; they do not confer authority. The commit-message control records declared crossings and
> can refuse an undeclared multi-lane commit; it does not prevent every unauthorized file edit.

Retain the following D-88/D-89 and B-016/C-001 references. The distinction is between partial
mechanical enforcement and authorization, not “only human choice” versus a gate that cannot exist.

### Failure-derived success criteria and transport gate

| Concrete failure / uncertainty | Required success criterion |
|---|---|
| A commit made from the present index omits the newer fixes | Lane A re-stages the final approved versions by explicit path; `git diff -- <each intended tracked path>` is empty afterward, and cached content equals the reviewed working-tree content. This failure is deterministic with the present index, not a speculative risk |
| B-078 remains untracked and therefore absent from a commit of only the three docs | The exact intended staged set includes B-078. No broad add of `bundle_docs.py`, `docs_context_for_claude.txt`, or `package-lock.json` |
| The quoted response says “applied in full,” but differences R2-1/R2-3 remain and no applying commit exists | Record “edited in working tree; pending commit and independent verification.” Preserve Lane A's historical response; add its correction rather than manufacture an Applied/Verified lifecycle result |
| A rebuild runs but B-078 is still absent | Check curated coverage explicitly. Do not equate a new branch-metadata timestamp or background-process start with successful synchronization |
| Acceptance of a plan is treated as push authority | Resolve the exact applying actor, paths/revision, action and exclusions under the existing Judge/Active-lane procedure; do not expand the quoted decision-tree phrase |
| Cached upstream matches HEAD, but remote may have moved | Fetch before deciding push readiness, inspect the complete outgoing range and changed paths, then push only the intended branch without force; fetch afterward to verify the remote contains the expected commit. No fresh remote check was performed in this draft-only review |
| A green check is mistaken for artifact completion | Review the actual source meanings and the exact original closure criteria at the settled revision. Acknowledge/Applied/Verified remain distinct |

**Lane A's commit sequence:** settle the narrow text corrections; record the bounded disposition
and B-078 file lifecycle in the owning v1 records per D-54; prepare the required tracked curated
graph coverage without asserting the unauthorized B-071/R152 target contract; inspect every
intended path, including any tracking/fragment paths that step requires; stage the explicit final
set; rerun checks and cached-diff review; commit through normal hooks. No fixed fragment filename
is invented here. New paths must be named in the reviewed packet before staging.

**After that commit:** refresh extraction for the new revision and re-merge curated fragments;
verify coverage and content parity, separately report pending local descriptions, and run the
required checks. Any tracked graph follow-up requires its own reviewed commit and final refresh.
Then evaluate push readiness. This ordering avoids claiming that pre-commit HEAD metadata proves
post-commit currency. Lane B's handoff-only exception cannot transport Lane A's multi-file packet.

**Completion is deliberately bounded:** C4/C5 concern safe transport of this correction packet;
C6 concerns audit closure. S4 implementation and the existing B-071/B-077 children need not be
completed merely to commit a truthful, explicitly bounded documentation packet. Their deferral
must name the owning phase/tier and return condition, not silently drop them.

### Recheck evidence and cross-reference continuity

- Full consistency suite now passes all checks except `graph-coverage`: B-078 is still absent.
  `handoff-response` passes after Lane A's acknowledgement. The earlier two-failure snapshot
  above is history; it is not the current result.
- `graphify check-update` still reports pending local descriptions/labels. Branch metadata
  matches committed HEAD, but the HEAD-only drift check does not certify the current index or
  working-tree edits. No curated fragment for B-078 was found in this review.
- Both tracked working and cached diffs pass whitespace checks. That does not resolve their
  content mismatch, authorization, graph coverage or commit-readiness conditions.
- Product PRD, storyboard, functional/technical specs, corrective plan and Encyclopedia ledger
  have no tracked changes relative to the preceding review baseline. Child 3's inspected mapping
  stands: historical Mermaid panels exist; the target branch outcomes have existing owners;
  UML/report reconciliation is not completed by the pointer table. Hosted Encyclopedia content
  remains unread. No new duplicate review or implementation task is created.

Only this existing handoff is amended by Lane B in Round 2. The remaining affected tracking tiers
are Lane A's proposed follow-through. Product behaviour, frozen sources, code, workflows and live
lane state are unaffected. This round makes no claim that documentation fixes guarantee commercial
success; it identifies concrete, testable failure cases rather than predicting bankruptcy.

### Round 2 verdict

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Corrected authority and Bun/date content; existing cross-reference ownership | Phase 1: retain, do not redo |
| Approve-with-conditions | Remaining README/Register/Build Spec wording | Phase 1: R2-1 through R2-3, then the explicit staging/check gate |
| Defer | Commit and push readiness | Phase 1: C4 then C5; current index is not the reviewed packet |
| Reject | Verified or whole-audit closure now | Phase 1: C6 requires independent evidence and bounded child dispositions |
| Defer | S4 publication, R159/R160 views, external Encyclopedia parity | Existing owning tiers; no build or external publication authorized |

## Round 3 — accept the text fixes; correct the graph/commit dependency (2026-09-06)

**Clarified task:** independently review Lane A's R2 response, retain completed corrections,
and draft only the remaining steps toward a reviewable documentation commit and eventual closure.
No application build, governed-file application, staging, commit, push or lifecycle promotion by
Lane B in this round. This section supersedes Round 2's transient staging observations, not its
acceptance criteria or the originating child owners.

### Accepted result — do not reopen it

R2-1, R2-2 and R2-3 are present in the reviewed source: the deviation register is live; the
scaffold diagnosis and old question list have preceding history labels; the Build Spec describes
partial mechanical enforcement accurately. Lane A's appended acknowledgement correction also
distinguishes working-tree edits from a committed Applied result. Accept those bounded text
corrections. Their independent content review is complete at this working snapshot; formal
Verified status still requires the settled commit and the entry's full closure boundary.

At the start of this round, the index contained exactly README, Build Spec, Decision Register and
B-078, with no unstaged changes. Thus Round 2's old-index blocker had been resolved. The current
HEAD remained `27ad43d`; no application commit existed. Appending this review now changes B-078
again, so Lane A must include this final review text when it next stages the intended packet.

### One remaining technical claim is incorrect

Lane A says graph coverage is “structurally blocked until B-078 is committed” because extraction
cannot see an untracked file. That conclusion is not supported by the installed checks:

- `docs/graph-fragments/missing.js` walks `docs/` with `fs.readdirSync`, not `git ls-files`, and
  compares each Markdown basename against `.graphify/graph.json`. It already sees B-078.
- `scripts/checks/graph-coverage.mjs` wraps that result. Its failure means the graph lacks the
  filename, not that a commit is required to expose the source.
- `docs/graph-fragments/merge7.js` reads a fragment and the graph from disk and performs a
  validated upsert. It does not require a committed source revision before a local merge.

An extraction command may have its own inclusion rules; this review does not claim to have
verified every extraction path. Those rules do not make curated coverage inherently commit-first.
The existing local merge path separates **pre-commit source coverage** from **post-commit revision
currency**. No disposable commit or checker bypass is necessary to break a supposed deadlock.

**Exact proposed replacement for Lane A's blocker explanation:**

> Graph coverage remains incomplete because B-078 is not represented in the graph. The checker
> already reads the file from the working tree. Lane A can prepare the approved curated record
> and merge it locally before committing, then refresh extraction and verify revision currency
> against the resulting HEAD afterward. A rebuild starting or finishing does not by itself prove
> curated coverage or semantic parity.

The checker only searches for a basename. Adding a stray filename merely to turn it green would
not prove meaningful coverage. The curated record must describe B-078 as an open documentation
review, preserve its source path, and connect it to valid existing owning concepts. It must not
mark it Verified or execute the separate B-071/R152 target-semantic change.

### Parent-first decision and execution plan for Lane A

| Order | Judge / Lane A decision | Verdict | Success criterion and follow-up |
|---|---|---|---|
| 1 | Accept R2's corrected source wording and acknowledgement qualification | **Approve** content | Phase 1: retain the reviewed edits; no new wording round needed for R2-1–R2-3 |
| 2 | Accept the corrected pre-commit coverage / post-commit currency sequence | **Approve-with-conditions** | Phase 1: replace the unsupported commit-first claim with the text above; prepare meaningful curated coverage through the existing merge mechanism |
| 3 | Approve the exact bounded correction packet for transport | **Defer readiness** | Phase 1: record the applicable Judge act and B-078 lifecycle under D-54; declare actual intended paths, including any required inventory/fragment changes. The presently staged four files are an observed set, not proof that all tracking work is covered |
| 4 | Commit the complete reviewed packet | **Defer** until 2–3 pass | Phase 1: inspect and stage exact paths, including this appended review; cached content must match the reviewed source; graph coverage and consistency checks pass. Use normal hooks; do not add unrelated files or graph runtime metadata |
| 5 | Refresh the graph at the new revision, then evaluate push | **Defer** until 4 produces a commit | Phase 1: refresh extraction, re-merge curated fragments, verify content/coverage and HEAD metadata separately, report local semantic-description status, and inspect fresh upstream/outgoing-range evidence before push |
| 6 | Close the bounded documentation audit | **Reject now** | Phase 1: independent review at the settled revision; each residual has its existing owner, return condition and disposition. Commit/push does not close S4, B-071/B-077 or the external Encyclopedia review |

For step 3, no B-078 entry was found in the v1 tracking files or tracked graph fragments in this
review. This is an outstanding packet item to disposition, not permission for Lane B to edit those
surfaces. If Lane A determines an existing record already supplies a requirement, cite that exact
record rather than duplicate it. Preserve unchanged-tier declarations from this entry.

### Failure-derived criteria and stop boundary

- **Deterministic:** with the present missing graph representation unchanged, the same coverage
  check continues to fail, regardless of a commit changing HEAD. Passing requires coverage work,
  not merely transporting the file. Test the real record and links, not just the check's string match.
- **Deterministic:** committing the current index after this appended review, without re-staging
  B-078, omits this review. Verify cached content after all authors finish their edits.
- **Not guaranteed:** publication duplication requires a concurrency/crash scenario. Its S4
  acceptance cases already exist in Child 4; do not turn a possible failure into a claim that
  every run fails or that commercial failure is inevitable.
- **Stop expanding this correction:** after the sequence above, perform one settled-revision
  independent review. Reopen only a failed named criterion. Do not invent another handoff, repeat
  the entire backlog, or require deferred product implementation to finish this documentation unit.

### Evidence and unaffected cross-references

This round's full consistency run fails only graph coverage for B-078; acknowledgement and all
other checks pass. The existing fragment conflict audit (`merge7.js --all`) passes, but it neither
merges fragments nor proves B-078 is represented. `graphify check-update` still reports pending
local descriptions/labels; branch metadata matches committed HEAD only. Cached whitespace checks
pass. Graph synchronization is required in steps 2 and 5, not claimed performed by this review.

The Product PRD, historical storyboard/story panels, functional/technical specifications,
corrective plan and Encyclopedia ledger have no changes from the preceding inspected baseline.
Their prior cross-reference review therefore stands: historical Mermaid views exist; target
UML/report reconciliation stays with R159/R160; publication stays S4; hosted Encyclopedia remains
unread. This round neither duplicates those tasks nor changes their lifecycle. Frozen sources,
Product/Fn_Specs/SPECS behaviour, application code, workflows and lane state are unaffected.

## Round 4 — curated coverage accepted; finish the existing transport packet (2026-09-06)

**Request clarified:** verify Lane A's new fragment, consolidate the remaining decisions, and
prepare the documentation packet for the requested commit/push. No application build. Preserve
accepted corrections and existing child owners; do not create another handoff or review programme.

### Evidence accepted

`frag123.json` exists. Its B-078 node and three relationships match the local graph exactly under
`merge7.js ... --verify-only`; the operation reports no graph write. Referenced concepts are
B-077, B-071 and B-073. The source paths in this fragment are repository-relative. The full
consistency suite passes, including graph coverage and acknowledgement. This satisfies Round 3's
missing-coverage item; no further proof of “coverage before commit is possible” is needed.

Retain the R2 text corrections and the choice of `frag123`. Nothing here reserves or executes
B-071's proposed `frag122`/R152 work. The node correctly keeps B-078 Open rather than Verified.

### Remaining decisions — existing criteria, not new blockers

| Order | Decision | Verdict | Concrete completion criterion |
|---|---|---|---|
| 1 — parent | Accept R2 wording and B-078 curated coverage | **Approve** bounded content/coverage | Retain; independently checked in this round, no repeat correction required |
| 2 — tracking | Finish Round 3 step 3's D-54 record for the new handoff and fragment | **Approve-with-conditions** | Phase 1, Lane A: Register records the applicable bounded act/disposition; Build Spec records documentation scope/sequence/DoD; Inventory records B-078 and frag123 lifecycle. State Product §8 unaffected: no sprint closure or tier opening. Cite an existing exact record if it already meets a requirement |
| 3 — stage and commit | Commit the complete reviewed documentation packet | **Defer execution until 2** | Active Lane A stages exact final paths, includes latest B-078 and frag123, reviews cached content and checks, then commits through normal hooks. Do not freeze the packet at “five paths” if step 2 requires Inventory or other named tracking updates |
| 4 — revision and push | Refresh against the commit, then push and confirm remote | **Defer execution until 3** | Refresh extraction, re-merge curated fragments, verify coverage/content and HEAD metadata separately; fetch and review the entire outgoing range; push the intended working branch normally; fetch again and confirm remote HEAD |
| 5 — closure | Mark the bounded B-078 audit Verified | **Reject now** | Independent review of the resulting revision plus disposition of original residual criteria; leave S4/R159/R160/Encyclopedia with their named owners and return conditions |

No B-078/frag123 lifecycle or authorization entry was found in the v1 tracking files in this
review. Step 2 was already required by Round 3; a green suite does not supply this missing record.
This review records the user's requested commit/push objective, not a new permission question.
The remaining issue is completion of the governed packet by its owner, not willingness to commit.

### Draft tracking text for Lane A to adapt in the owning records

> Scope: B-078 documentation audit corrections to README authority/navigation, Register historical
> status presentation, and Build Spec toolchain/control wording; B-078 review record and frag123
> curated coverage. Preserve historical sources and B-071/B-077 ownership. No product behaviour,
> gate-order, application, workflow, lane-state or deployment change. Sequence: settle source and
> lifecycle records → verify curated coverage → stage/review/commit → refresh graph at the new
> revision → verify push → independent review. DoD: named final paths and revision, passing
> required checks with limitations disclosed, source/fragment parity, remote confirmation, and
> existing residual criteria explicitly owned. New files: B-078 and frag123; no files retired.

This is proposed content, not an invented Judge approval record. Lane A records the actual
applicable authority and revision under D-183/D-186. No decision number is minted here.

### Exact transport observations and success criteria

- At inspection, four paths were staged, B-078 also had unstaged content, and frag123 was
  untracked. “Staging not started” is therefore inaccurate; **staging is incomplete**. A commit
  of that index deterministically omits the newer B-078 text and frag123. Re-stage after this
  final appended review and the tracking work; require cached content to equal reviewed content.
- Keep graph coverage, revision currency and local descriptions distinct. Coverage now passes;
  branch metadata still names `27ad43d`; `check-update` still reports local description work.
  The fragment's phrase “pending commit” describes this pre-commit observation, not a permanent
  lifecycle fact. In the final graph record, date that snapshot or refer current status to B-078's
  header so committing does not silently turn the description into a stale live summary.
- `portable-check .graphify` fails on existing local runtime paths; `.graphify` has no tracked
  files. The attempted single-fragment invocation actually scanned the containing fragment
  directory and reported legacy files, so it is not a single-file pass. Direct inspection found
  frag123's source paths relative. Do not add runtime files or expand this packet into legacy
  portability cleanup; do not claim the broad portability check passed.
- A fresh upstream fetch has not been performed in this review. No push-readiness claim is made
  from a cached reference. Do not force-push or deploy this documentation correction.

### Review boundary and handover

The Product PRD, storyboard/story panels, Fn_Specs/SPECS and Encyclopedia ledger remain unchanged
from the already inspected baseline. Their existing mappings and deferred owners stand. No hosted
Encyclopedia content was obtained; no external parity is claimed. No new substantive product gap
is raised in this round. Frozen sources, code and workflows are unaffected.

Lane B amended only this existing handoff. It cannot use D-184's own-entry exception to transport
the multi-file Lane A packet: the staged set contains Lane A files and Lane A remains Active.
The five-row table is the final bounded handover, not an invitation to restart the analysis.
Lane A completes steps 2–4, then supplies the settled revision for step 5. This round does not
commit, push, synchronize extraction, or promote lifecycle fields.

## Round 5 — inventory objection upheld; additional-row condition withdrawn (2026-09-06)

**Scope:** review Lane A's objection and settle the remaining documentation-packet conditions.
Draft/review only; no build or transport performed in this round.

**Lane B correction.** The Inventory lists `docs/graph-fragments/` as a directory and the handoff
README/template/check infrastructure. The cited peer handoffs and fragments have no individual
rows. More importantly, `docs/handoff/README.md` under D-100 makes originating entries the backlog
and rejects a second backlog. These are existing mechanisms for the file classes at issue, not
missing infrastructure that this packet must invent.

I therefore withdraw the requirement in earlier rounds for new per-file Inventory rows for B-078
and frag123, and the dependent demand to create additional v1 lifecycle entries solely because
these routine records exist. Round 4 step 2 is no longer a transport blocker on that basis.
Existing scope, sequence and criteria are already in this handoff; the corrections apply existing
decisions. D-54 still applies to actual decisions changing artifact scope or sequence; this is not
a general exemption from propagation or the existing authorization SOP. No new policy decision
or all-entries inventory project is requested. Inventory and Product §8 are unaffected by this
routine handoff/fragment addition; Register and Build Spec retain their already-reviewed prose fixes.

### Evidence and remaining uncertainty

- The full consistency suite passes. Frag123's node and three links match the graph under the
  read-only semantic equality check. Keep those accepted results; do not repeat the coverage fix.
- Cached whitespace checks pass. B-078 still has unstaged content and frag123 is untracked, so
  **ready for final staging** is accurate; **ready to commit the present index** is not. Doing the
  latter deterministically omits the latest review and the fragment.
- Graph metadata covers committed `27ad43d`; local descriptions remain pending. Refresh and
  report those separately after commit. “Commit → push → refresh” in Lane A's final question
  differs from its own table; use the single sequence below to remove that ambiguity.
- This review does not establish the remote tip or claim a push occurred. The absence of unrelated
  local files from `git status` is not evidence of deletion; no investigation of them is needed
  to complete this packet.

### Final parent-first decision table

| Order | Decision | Verdict | Owner / success criterion |
|---|---|---|---|
| 1 | Accept the existing text corrections and curated coverage | **Approve** | Phase 1: retain the independently reviewed content |
| 2 | Require new individual inventory/lifecycle rows | **Reject; prior condition withdrawn** | Phase 1: existing directory/channel convention and this entry are sufficient; no replacement backlog |
| 3 | Stage the final five-path packet and review it | **Approve-with-conditions** | Active Lane A: exact paths below, latest working content equals cached content, normal checks/hooks; existing authorization SOP applies |
| 4 | Commit → refresh extraction/re-merge curated layer → verify → push → confirm remote | **Defer execution until 3** | Active Lane A: exact committed path set, graph evidence at the new revision, fresh outgoing-range review and post-push confirmation |
| 5 | Terminal B-078 review | **Defer until 4** | Independent actor: verify settled source and original bounded criteria; explicitly retain named residual deferrals. No S4 implementation is required just to close this documentation correction |

The intended paths are:

- `docs/README.md`
- `docs/v1/V1-BUILD-SPEC.md`
- `docs/v1/V1-DECISION-REGISTER.md`
- `docs/handoff/B-078-documentation-audit-follow-through.md`
- `docs/graph-fragments/frag123.json`

This is the corrected handover. No further general documentation audit is needed before staging;
reopen only a failed named criterion. The current request remains review/planning, so this table
does not itself perform staging, commit or push. Lane B leaves Lane A's staged packet untouched.

The Product PRD, storyboard/story panels, Fn_Specs/SPECS and Encyclopedia ledger remain unchanged
from the inspected baseline. Their cross-references stand: historical diagrams are preserved;
publication is S4 readiness; R159/R160 own the target view/report work; external Encyclopedia
parity is unverified with its existing follow-up. Frozen sources, application code, workflows,
product behaviour and lane state are unaffected. Those children are neither duplicated nor
represented as completed by this inventory disposition.

## Independent closure review — Lane B, 2026-09-06

**Verified at `de665a76df42d5b55e95fb018f8facdb9b1ec5a5`.** Lane B did not apply Lane A's
README/Register/Build Spec corrections or create/merge frag123. Writing the review criteria and
raising this entry do not make Lane B the answering/applying actor under the existing independence
rule. The user requested B-078 review for closure; this records that bounded review, not a build
authorization or closure of another entry.

**Current disposition:** the header above supersedes all pre-commit Open/pending-review statements
in the preserved Lane A response and earlier rounds. B-078 is Verified for its documentation-audit
correction and routing scope. No existing child is promoted by this result.

| Original closure criterion | Independent finding |
|---|---|
| Acknowledgement and canonical ownership | Lane A answered this entry. B-071/B-077 remain the existing owners; no second backlog was created |
| Parent 1 / Child 2 source corrections | Inspected the committed diff: governing Project PRD placement, reading route, live deviation register, preceding historical labels, D-64 citation and partial-control wording meet the accepted R2 criteria |
| Requirements and view routing | Product PRD, storyboard, Fn_Specs/SPECS and Encyclopedia ledger are unchanged by the five-path commit. Child 3's reviewed mappings and explicit external limitation remain accurate; R159/R160 own target view/report work |
| Publication residual | Child 4 records concrete timing, concurrency, crash recovery, eventless-target and state-promotion acceptance questions; S4 readiness remains the return checkpoint before implementation. This review verifies routing, not the unwritten implementation |
| Settled revision and graph evidence | Fresh fetch confirms local and upstream at de665a7. Commit contains exactly the five agreed paths. Full consistency suite passes; extraction metadata matches that revision, stale is false, coverage passes, frag123's one node and three edges match under read-only verification |

**Evidence limits and retained follow-ups:** local semantic descriptions/labels remain pending
according to `graphify check-update`. Exact fragment equality proves parity with the stored fragment,
not that its pre-commit “pending commit” wording is current lifecycle status. B-078's header is the
canonical current state. Under the existing handoff SOP, Active Lane A refreshes the derived graph
after the verification-record commit and updates frag123's lifecycle description to reference this
header or explicitly date its historical snapshot. That is routine derived-evidence maintenance,
not a reason to re-review the accepted source corrections indefinitely. No blanket semantic-sync
or portability claim is made.

Hosted Encyclopedia parity remains unverified: its existing owner must read the hosted artifact
when the affected entry is next updated. R159/R160 retain their SPECS/UX and audit Fn_Specs owners;
publication retains S4 readiness. B-071/B-077 and Phase 3 retain their independent closure criteria.
The individual Inventory-row demand was withdrawn in Round 5; no such rows are owed by this review.

| Verdict | Tier / item | Follow-up |
|---|---|---|
| Approve | B-078 bounded documentation correction and routing | Verified at de665a7; preserve this independent record |
| Defer | Derived graph refresh after this review-record commit | Phase 1 / Active Lane A, before the next consuming approval or phase-closure claim |
| Defer | Publication, target views/reports, hosted Encyclopedia | Existing S4, R159/R160 and Encyclopedia follow-ups; not implementation completion |
| Reject | Expanding this verification to product build, other handoff closure or external parity | Those tiers remain unaffected |
