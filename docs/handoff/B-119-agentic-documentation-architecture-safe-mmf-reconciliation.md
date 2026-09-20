# B-119 — Agentic documentation architecture: planning-method and MMF reconciliation

- **Raised:** 2026-09-20 by Lane B
- **Kind:** finding
- **Phase:** 1
- **Blocks:** treating the attached agentic-documentation proposal as commit-ready; no existing governed work or construction unit
- **Status:** Open
- **Lane A:** **Acknowledged, 2026-09-20 (receipt).** Lane B's corrections are read and not
  disputed. Proposal disposition is pending Parents 2 and 4 below. No canonical file, check,
  workflow, dependency or graph artifact is changed by this acknowledgement.
  **Substantive answer appended 2026-09-21** (final section, "Lane A answer"): statement A applied and
  stopped for independent review; the header stays `Open` under the weakest-child rule.
- **Evidence:** attached Lane C analysis dated 2026-09-20; attached B-119 proposal; `D-29`, `D-34`,
  `D-75`, `D-84`, `D-87`, `D-100`, `D-159`, `D-227`, `D-232`, `D-240`; `B-061`, `B-071`,
  `B-114`, `B-115`; `package.json`; `scripts/check-consistency.mjs`; `scripts/checks/lane-boundary.mjs`;
  `.github/workflows/ci.yml`; `docs/v1/work-packets/V1/V1-SM05.md`
- **Verified-At-Commit:** d6a84770fccba0e54f8454df2c9f65182c06546b

## Review boundary

The Lane C document is independent analysis evidence, not a Judge act, Register decision,
verification record, or instruction to execute its draft code. Lane B compared every load-bearing
claim with the repository at the commit above. The proposal is useful as an options packet, but the
claim that it is defect-free and commit-ready is rejected.

No canonical document, application file, workflow, check, directory, dependency, database type, or
Graphify artifact is created by this entry.

## Facts independently confirmed

1. The current package declarations are Bun 1.1.30, TypeScript 5, Next 16.3.3, React 19, Tailwind 4,
   Supabase JS 2.45 and Supabase CLI 2.116.
2. The D-29 intent chain remains Project PRD → Product `Modular_PRD` → behaviour `fn-specs` →
   implementation `specs`; `specs/ux` is the stack-specific UI part of `SPECS` under D-34.
3. `V1-SM05` and `V1-SM06` are the approved qualified MMF slots, and the files on disk are
   `V1-SM05.md` and `V1-SM06.md`.
4. Lane A is Active and Lane B is Eligible; no Lane B construction unit is selected.
5. `docs/specs/ux/`, `docs/system_context.json`, and `lib/supabase/database.types.ts` do not exist.
6. `bun run check` currently registers 18 checks. The current local graph has 479 nodes and 867
   edges, but those counts are not health evidence: `graph-coverage` reports 61 governed Markdown
   files absent, including all five D-240 work packets.

## Corrections required before any first PR

| Proposal claim | Independent finding | Required correction |
|---|---|---|
| The repository operates a SAFe outer shell | D-100 says the operating model is Scrum. SAFe appears as editorial subject matter and one non-load-bearing journal reference, not as repository governance | Treat SAFe as an optional planning analogy unless the Judge explicitly adopts a defined subset; do not replace D-100 |
| Lane C is “independent assurance” | Lane C owns `.github/workflows/` only. Development lanes must not be cross-referenced to the Product Three Lines or Line 3 assurance | Call Lane C an independent reviewer for this analysis and a workflow owner in construction context |
| S5 is a Line 3 assurance milestone | D-57 records no independent assurance workflow in v1 | Preserve the actual S5/degraded-mode disposition and do not imply that assurance will be built |
| `V1-SM05` is the active sprint/MMF | It is `Not started; not selected`; Lane B has no authorized construction unit | Record it as the candidate/next qualified slot and set selected work packet to `null` |
| `docs/specs/ux/` is Tier 5 | D-34 maps it inside the technical `SPECS` tier, stack-specific UI/UX | Keep it as a `SPECS` sub-tier and create it only when an authorized feature group has a stack-specific UI consequence |
| Creating UX files closes B-061 and B-071 | B-061 has a narrower unresolved UX-scoping question; B-071 is a broad corrective thread with unrelated blockers | Link the exact residual affected; never promote either whole entry from directory creation alone |
| Work packets are `V1-SM05-PACKET.md` / `V1-SM06-PACKET.md` | Those files do not exist; D-240 created `V1-SM05.md` / `V1-SM06.md` | Extend the existing files by decision, never rename them silently |
| Strict TDD/MMF/human-push is already operative | B-114 is Deferred and B-115 remains Open; no first executable child is authorized | Finish the B-115 Intent/Build/DevOps separation and obtain a fresh bounded work order before construction |
| The consistency apparatus has 20 checks | The runner imports 18 | Never copy a tally into governance; cite the runner and let it print the count |
| 139 curated fragments prove Graphify health | The local fragment set and mergeability were not established by Lane C, and graph coverage is currently red | Repair extracted/curated parity and require coverage, fragment parity and analyzed-head evidence |
| `lane-boundary` can reject a “Lane B PR” | Attribution is unavailable under D-87; the current check classifies changed paths, not the actor or branch owner | Define a trusted lane/work-order token before proposing actor-specific PR enforcement |

## First PR — recommended bounded scope

The first PR should be a **Lane A documentation/control PR**. It should not combine UX design,
database linting, type generation and workflow policy.

### Parent 1 — settle vocabulary and authority

1. Record whether “SAFe” is merely an explanatory analogy or an adopted planning method. If adopted,
   name only the practices used and preserve D-100's Scrum operating model.
2. Apply B-115's Intent/Build/DevOps separation before referring to B-114's test-first method as
   executable.
3. Preserve D-232/D-240's existing MMF and work-packet identities. A methodology label creates no
   new lifecycle tier, freeze rule, lane authority, or sprint state.

### Parent 2 — evaluate a derived context manifest

Approve the system-context idea only as a **derived, validated projection**. A hand-maintained JSON
file that copies package versions, lane surfaces, active state, DoR checkboxes and the D-29 hierarchy
would create another authority and drift immediately.

If Lane A chooses to create it, the design must:

- use `package.json` as the stack source;
- use the shared D-75/D-227 lane map as the ownership source;
- use `V1-PHASE-CLOSURE.md` for live lane state;
- use the selected work packet for MMF state, with `selected_work_packet: null` today;
- contain source paths and a generating commit;
- be reproducible by one Lane A-owned generator/check; and
- fail when the projection differs from its sources.

Do not make `lane-boundary.mjs` consume the projection until generation and validation are proven;
otherwise the enforcement rule depends on a second copy of itself.

### Parent 3 — retain one work-packet owner

Do not embed an unactioned `agent_manifest.json` block or create a sidecar merely to save prompt
tokens. The existing work packet already owns dependencies, DoR/DoD, artifact paths and evidence.
When a real child unit is authorized, extend that packet with one bounded child table or create a
machine-readable sidecar only if a named consumer exists. Either path is a D-54 artifact decision.

Required child-unit fields are: authorization ID, Product feature-group anchor, included/excluded
behaviour, exact owned files, predecessor children, test/negative proof, relevant regression set,
completion evidence and stop/change conditions. Dynamic Status and Resolution remain in their
existing owners.

### Parent 4 — defer independent gates into separate units

1. **SQL naming:** useful candidate, but the supplied regex draft is not production-ready. It has no
   reliable “new migration” boundary, incomplete SQL grammar coverage and no positive/negative
   fixtures. Lane A owns the check; Lane B supplies migration cases.
2. **Type-generation drift:** deferred. The target type file does not exist, and the proposal does
   not decide whether CI generates from local migrations or a remote project, how secrets are
   excluded, or what deterministic CLI output is compared.
3. **PR authorization lint:** deferred until one canonical work-order token exists. Validate that
   token rather than prose titles, and state whether it governs only merges to `main` or working-
   branch commits too.
4. **Lane boundary:** improve the existing check rather than replacing its source map with
   `system_context.json`. PR-base diff support and actor authorization are separate problems.
5. **Workflow wiring:** checks imported by `scripts/check-consistency.mjs` already run through
   `bun run check`; Lane C changes `ci.yml` only when a workflow-specific change is actually needed.

### Parent 5 — repair Graphify before using the architecture as agent context

The manifest sees the governed documents while `graph.json` omits 61 of them. Lane A must diagnose
the extraction failure, rebuild first, re-merge every mergeable curated fragment in dependency
order, verify per-fragment parity, and rerun coverage. A context manifest must not advertise a graph
as authoritative while its own coverage gate is red.

## Failure-derived success criteria

| Failure | Passing evidence |
|---|---|
| SAFe analogy silently becomes governance | Register states adopted practices and confirms D-100's status, or labels SAFe non-operative |
| Context JSON becomes a second source of truth | Regeneration is deterministic and a negative fixture catches one changed source value |
| Candidate MMF is reported active | Live manifest says no packet selected until the Judge selects one |
| UX sub-tier changes Product behaviour | UX spec cites one authorized Modular_PRD feature group and existing Fn Spec behaviour |
| Manifest duplicates work-packet status | One work packet owns readiness; machine projection is derived or omitted |
| SQL regex gives ceremonial green | Valid/invalid fixtures cover schemas, quoted identifiers, comments, constraints, indexes and alterations |
| Typegen depends on hidden remote state | Reproducible local source, pinned tool and secret-free CI path are proved |
| PR linter accepts an invented token | Token resolves to an authorized work packet and selected lane |
| Lane check infers an actor from paths | Output remains path-shape evidence unless trusted actor metadata is supplied |
| Graph count is mistaken for completeness | `graph-coverage` has zero absent governed docs and curated parity passes |

## Cross-artifact impact

`Modular_PRD`, storyboard/story panels, UML, data flow and Encyclopedia are unaffected by this
review: no Product behaviour, user journey, state, route, event or UI interaction is decided. A
future authorized UX spec may cite those intent artifacts; this finding does not rewrite them.

## Verdict

| Verdict | Item | Follow-up phase |
|---|---|---|
| **Approve** | Current stack facts, D-29/D-34 hierarchy, D-240 work-packet identity | Retain as source-linked facts |
| **Approve-with-conditions** | Derived system-context projection | Lane A decision, generator/check and D-54 propagation |
| **Approve-with-conditions** | Future stack-specific UX specification | Only for an authorized feature group; `SPECS` sub-tier, not Tier 5 |
| **Approve-with-conditions** | B-114 test-first/atomic-child method | Apply B-115 separation and issue a fresh bounded work order first |
| **Defer** | Machine child manifest, SQL naming, typegen drift, PR linter and PR-base lane enforcement | Separate units with named consumers and meaningful fixtures |
| **Reject** | Lane C's “zero defects / commit-ready” conclusion | Correct the defects above before canonical adoption |
| **Reject** | SAFe as current repository authority, active `V1-SM05`, S5 assurance, renamed packet files, whole-entry B-061/B-071 closure | Contradicts current authoritative state |
| **Reject** | Calling Graphify synchronized from node/edge counts or `stale: false` | Coverage is currently red |

## What Lane B did instead

Fact-checked the two attachments, retained the useful machine-context and gate candidates as
conditional proposals, narrowed the first PR to Lane A documentation/control scope, and left all
construction and workflow changes unperformed.

## Lane B continuation — Lane C completion audit and “Lean MMF” / V2 analysis, 2026-09-20

### Evidence boundary

Reviewed the two external files `b117-b119-completion-audit.md` and
`scrum-mmf-v2-transition-analysis.md` as independent analysis evidence. Their headings, proposed
commands, status claims and future-V2 steps are not repository instructions, Judge acts, Register
records or construction authorization. This continuation corrects their load-bearing claims and
extends this existing entry rather than opening a duplicate handoff.

### Why the MMF selection stands — and what “Lean” may mean

The canonical decision is **D-100 Scrum with the two Judge-defined MMF slices recorded by D-232**:
`V1-SM05` (`MMF-V1-CORE`) and `V1-SM06` (`MMF-V1-USABLE`). “Lean MMF” is a useful explanatory
phrase for minimizing work-in-progress and delivering the smallest usable business outcome, but
**Lean is not currently a separately adopted repository operating method**. Lane A should retain
the exact canonical terms unless the Judge chooses to register a bounded Lean practice set.

MMF is selected here because it:

1. gives each increment one marketable business outcome rather than treating each test, component
   or commit as independently marketable;
2. keeps `V1-SM05` before `V1-SM06`, so the core editorial flow exists before board/publication
   usability depends on it;
3. gives each outcome one D-240 work packet for DoR, DoD, dependencies and evidence without adding
   another backlog or tracking file; and
4. fits D-100's continuous feedback cycle: new findings enter `docs/handoff/` without turning an
   MMF into a phase gate or stopping unrelated authorized work.

B-114 does not make a strict-TDD/human-final-push system fully operative. Its testing-method content
survives, but its whole-entry Resolution is `Deferred`; B-115 remains `Open` and its
Intent/Build/DevOps separation has not been propagated to the Register, `docs/README.md` or lane
instructions. Therefore the accurate current statement is: **MMF identity and ordering are
decided; the construction method remains conditional on B-115 propagation and a fresh bounded work
order.**

Lane C owns workflow files and may independently review a packet. It is not Product Line 3
independent assurance, does not define Product behaviour, and cannot infer an acting lane from a
path-only diff while D-87 attribution remains unavailable.

### Corrections to the Lane C audit

| Lane C claim | Repository finding | Required correction |
|---|---|---|
| B-119 was committed at `6174188` | `6174188` created the B-118 partition plan; B-119 was created by `fb3bd9c` | Cite `fb3bd9c`; retain `6174188` only as B-119's reviewed baseline |
| B-114/B-115 establish the operative “Lean MMF” engine | B-114 is Answered/Deferred and B-115 is Open/unapplied | Separate decided MMF identities from the deferred construction method |
| Lane C provides independent assurance | D-75 assigns workflow ownership; the shared rules prohibit conflation with Product Line 3 assurance | Say “independent reviewer for this packet” or “DevOps/workflow assistance” |
| Graphify should be repaired with `npx graphify build` | The repository distribution requires extracted rebuild via `npx graphify hook-rebuild`, followed by curated-fragment re-merge | Diagnose extraction first; rebuild, re-merge and verify coverage/parity in that order |
| Recursive handoff is already the current backlog shape | D-240 explicitly keeps `docs/handoff/` flat; B-118 only proposes a recursive successor design | Require a new Register act and recursive/rename-aware controls before any move |
| All flat-layout checks should pass before migration | Current expected state already has Graphify coverage red and B-119 unread | Establish a named baseline, then require only intended deltas plus targeted recursive fixtures |
| V1-SM06 DoD automatically opens V2 | D-203 makes completed children a prerequisite, while the freeze trigger is the separate act of opening V2 | Require an explicit V2-opening Judge act after child completion |
| Exact `D-300+`, `V2-SM01`/`V2-SM02` and promotion set are codified | V2 is `Not opened`; those identifiers and packets do not exist or have authorization | Treat them as examples only; assign no IDs or scope before the V2 boundary act |
| Deferred `PBL-*`/`NG-*` items promote automatically into V2 | D-148/D-188 preserve identities and return conditions; identity or lifted prohibition is not build authorization | Re-refine, rank and authorize each selected V2 capability |

Do not copy a check tally into governance. Cite `scripts/check-consistency.mjs` and let the runner
print its current set.

### Completion and cross-artifact ledger

- **Applied:** D-238/D-239/D-240; Panel A9's Pitch/Draft and T2a/T2b corrections; the five work
  packets; D-236's dissolution of the false Copy Edit precursor.
- **Open:** B-117 independent verification/residual closure; B-118 verification and recursive
  partition decision; B-119 Lane A acknowledgement and proposal disposition; B-115 propagation.
- **MMF readiness:** `V1-SM05` remains not selected with DOR-R2–R6 open; `V1-SM06` remains not
  selected and depends on `V1-SM05` DoD.
- **Modular PRD:** current tracking pointer already reaches the D-239 §6.3 model; no Product
  requirement changes from this review.
- **Storyboard/story panels:** Panel A9 is the current role-selection/branch overlay.
- **UML/data flow:** FN-GATES §4.1 keeps the storyboard Mermaid views as the single source; no
  standalone duplicate is required.
- **Encyclopedia:** Entries 01/05/06 remain flagged, not hosted-text-reviewed or republished.
- **V2:** high-level succession/freeze and living-spec rules exist; no V2 opening, exact packet set,
  sprint IDs or promoted scope is authorized by this review.

### Parent-first repair plan

1. **Acknowledge and disposition B-119.** Receipt clears the channel defect; an answer separately
   decides the proposals.
2. **Normalize the planning label.** Record either “Lean is descriptive only” or the exact adopted
   Lean practices, while retaining D-100 Scrum and D-232 MMF identities.
3. **Apply B-115 before claiming an executable construction method.** Put Intent/MMF, Lane B xDD
   choice and Lane C workflow assistance in their owning layers; then disposition B-114's deferred
   child and issue a fresh bounded work order.
4. **Repair Graphify completeness.** Diagnose why governed files are absent, run the required
   rebuild, re-merge every mergeable curated fragment, verify parity and require zero missing
   governed documents. This handoff-only continuation itself creates no new rebuild obligation.
5. **Decide recursive handoff architecture before migration.** Supersede only D-240's flat-layout
   clause; make readers, identity checks, D-184 and terminal history recursive/rename-aware; review
   a complete migration manifest; then move bounded cohorts.
6. **Finish existing V1-SM05 DoR owners.** Complete DOR-R2–R6 without creating another MMF,
   storyboard, UML/data-flow or Encyclopedia tracker.
7. **Defer V2 construction planning to the actual boundary.** After V1 children complete, the Judge
   decides whether to open V2, its exact tracking artifacts, identifiers, selected capabilities and
   first work packet. Nothing promotes automatically.

### Failure-derived success criteria

| Failure | Passing evidence |
|---|---|
| “Lean” silently becomes a second governance framework | Register either marks it descriptive or names the adopted practices and unaffected D-100 rule |
| MMF and technical child are conflated | One MMF has one business outcome and dependency-ordered children; children are not called marketable features |
| Deferred B-114/B-115 mechanics are treated as executable | Governed separation lands and a fresh work order names the selected MMF, child, lane and DoD |
| Lane C workflow evidence is reported as Line 3 assurance | Every reference says workflow assistance/review; independent assurance remains explicitly absent |
| Graph metadata hides missing documents | `graph-coverage` reports zero absent governed docs and curated parity passes |
| Handoff move hides entries or history | Recursive counts match, duplicate fixture fails, rename-history fixture passes and old-path citations are zero |
| `V1-SM05` is selected from file existence | All DoR evidence is complete and the Judge explicitly selects the packet |
| V2 opens or gains scope automatically | Separate boundary decision records the opening, IDs, selected capabilities and D-54 tier effects |

### Continuation verdict

| Verdict | Item | Follow-up phase |
|---|---|---|
| **Approve** | D-100 Scrum plus D-232/D-240 MMF identities and work-packet ownership | Retain as the canonical current model |
| **Approve-with-conditions** | “Lean MMF” as explanatory shorthand | Descriptive only unless the Register adopts named Lean practices |
| **Approve-with-conditions** | B-114 testing mechanics and B-115 layer separation | Canonical B-115 propagation plus fresh work order before execution |
| **Approve-with-conditions** | Lane C completion audit | Retain its measured completion ledger after the corrections above |
| **Defer** | Recursive handoff migration, Graphify-dependent agent context and V1-SM05 selection | Controls/coverage repair and DoR evidence first |
| **Defer** | Exact V2 files, decision IDs, sprint IDs and promoted capabilities | Explicit V2 boundary decision after V1 child completion |
| **Reject** | Enterprise-SAFe authority, Lane C as Product assurance, automatic V2 opening/promotion, or current executable strict-TDD method | Contradicts authoritative state |

## Lane B independent review — `D-241` application and remaining implementation plan, 2026-09-20

**Reviewed source:** `4a2519a47db0b90fd8ee267b0f9e9b8715fabdc6`. **Scope:** plan and
independent documentary review only. No canonical source, check, graph fragment, application file,
schema, workflow or work-packet state is changed by this review.

### Clarified request and completion boundary

Audit Lane A's B-119 acknowledgement and D-241 application; distinguish completed authority work
from open method, control, graph, MMF-readiness and terminal-closure work; verify the Product/story/
diagram/Encyclopedia impact; and draft one dependency-ordered implementation plan without building
it or opening duplicate gaps.

Lane A receipt is now recorded at `80e8fe8`, and D-241 landed at `4a2519a`. D-241 correctly keeps
D-100 Scrum and D-232/D-240 MMF identities, makes SAFe/Lean analogy-only, states every D-54 tier's
disposition, selects no work packet and authorizes no construction. That bounded authority decision
is complete as an application act; it is not evidence that B-119 as a whole is closed.

### Tracking defect — parent numbers are no longer stable

B-119 now contains two numbered parent-first plans. The original plan calls the context manifest
“Parent 2,” independent controls “Parent 4,” and Graphify “Parent 5.” The later continuation calls
planning-label normalization “Parent 2,” B-115 propagation “Parent 3,” Graphify “Parent 4,” and
recursive handoff controls “Parent 5.” D-241 says it answers “Parent 2” and that “Parents 3–5”
remain, while B-119's acknowledgement says disposition is pending “Parents 2 and 4.” Those numbers
no longer identify one unique obligation.

Use the following **review aliases only** until Lane A records stable identifiers; these aliases do
not create a second backlog:

| Review alias | Existing owner | State at reviewed commit |
|---|---|---|
| `B119-AUTH` — Scrum/MMF and SAFe/Lean authority | D-241 | **Applied; independently reviewable** |
| `B119-METHOD` — B-114/B-115 Intent/Build/DevOps method | B-114/B-115 | **Open/Deferred; not executable** |
| `B119-CONTEXT` — derived system-context projection | B-119 original Parent 2 | **Conditional proposal; no named consumer accepted** |
| `B119-CONTROLS` — SQL/typegen/PR/lane checks | B-119 original Parent 4 | **Deferred as separate units** |
| `B119-GRAPH` — extraction/coverage correctness | B-119 original Parent 5 and later Parent 4 | **Open; current sole consistency failure** |
| `B119-HANDOFF` — recursive channel partition | B-118's existing partition plan | **Open under B-118; cross-reference only here** |
| `B119-MMF` — V1-SM05 readiness/selection | Existing V1-SM05 packet | **Not selected; DOR-R2–R6 open** |
| `B119-V2` — future boundary | D-36/D-203 and living backlog | **Deferred; V2 not opened** |

Lane A should replace numeric Parent references in B-119's acknowledgement/current-status note with
these owning topics or equivalent durable labels. Historical prose can remain unchanged.

### Drift, Graphify and the coverage-only boundary

At `4a2519a`, `.graphify/branch.json` records `lastAnalyzedHead` equal to HEAD and `stale: false`;
`docs-drift` passes. The full suite nevertheless fails `graph-coverage`: 61 governed Markdown files
are absent, including the Register itself, Fn Specs, governance maps and all five work packets.
Graphify query does not surface D-241 as a semantic document node. Metadata currency and a larger
node/edge count therefore do not prove usable coverage.

D-241 records that a separate Judge answer exists concerning **coverage-only** exclusions for the
journal and plan pack, but it deliberately does not record that answer. Do not implement an
unrecorded summary. When Lane A records the exact act, preserve this boundary:

- an intentional `graph-coverage` exclusion says a document need not be represented in the graph;
- it must not automatically exclude the same document from `docs-drift` or source governance; and
- authoritative Product, Fn Spec, governance, Register and work-packet sources remain coverage
  candidates unless the decision explicitly says otherwise.

Because `graph-coverage` and `docs-drift` currently share `governed-intent.mjs`, adding journal/plan-
pack paths to that shared matcher would silently weaken drift detection. The implementation plan
needs a coverage-specific classifier or an explicit mode, with fixtures proving the two policies do
not collapse back together.

### Cross-artifact review

| Artifact | Current disposition |
|---|---|
| `Modular_PRD.md` | Unaffected by D-241; no requirement, module, §8 status or MMF readiness changed |
| Storyboard and story panels | Unaffected; Panel A9 remains the D-239 role/branch overlay |
| UML/sequence and data flow | Unaffected; FN-GATES §4.1 still points to the storyboard Mermaid views as the single source |
| Encyclopedia | Unaffected by planning labels; Entries 01/05/06 remain flagged and not hosted-text-reviewed/republished |
| Work packets | Files exist, but existence is not selection; V1-SM05 remains not selected and V1-SM06 remains dependent |
| B-117/B-118 | Both remain Open; D-241 does not verify or close their broader residuals |
| B-119 | Acknowledged and partly answered by D-241; still Open with no terminal Resolution or independent verification |

### Parent-first implementation plan — do not build in this round

1. **Stabilize B-119 tracking.** Add one current-status crosswalk using durable topic labels; mark
   `B119-AUTH` Applied at D-241 and leave the other owners unchanged. Do not rewrite historical
   parent-number prose as if it never existed.
2. **Record the exact Graphify-scope Judge act.** State which journal/plan-pack classes are excluded
   from coverage, why, and which policies remain unaffected. Apply D-54 tier dispositions.
3. **Separate coverage policy from drift policy.** Add a coverage-specific classification path and
   negative fixtures proving a coverage-excluded changed document is still evaluated by
   `docs-drift` when governance requires it.
4. **Repair extraction for the remaining authoritative set.** Diagnose before rebuilding; then run
   `npx graphify hook-rebuild`, re-merge every mergeable curated fragment in dependency order,
   verify per-fragment parity and rerun the full suite. Do not hide canonical files merely to make
   the count green.
5. **Apply B-115 only as a separate governed unit.** Keep Judge/User plus Lane A on Intent/MMF,
   Lane B on per-child xDD choice, and Lane C on workflow/DevOps assistance. Then disposition the
   deferred B-114 ownership child. This still selects no MMF and issues no work order.
6. **Keep optional architecture proposals separate.** Evaluate `B119-CONTEXT` only with a named
   consumer and generated/validated sources. Keep SQL naming, typegen, PR authorization and actor-
   aware lane enforcement as independent units with meaningful fixtures.
7. **Execute B-118's recursive-channel plan only after its own decision and controls.** Do not move
   entries from this B-119 plan. Make readers, global IDs, D-184 and terminal history recursive and
   rename-aware first; then use a complete citation migration manifest.
8. **Complete V1-SM05 DoR in existing owners.** DOR-R2–R6 and independent review precede explicit
   Judge selection. V1-SM06 and V2 remain downstream; neither starts automatically.
9. **Close only by evidence.** Lane B reviews each committed bounded unit, the Judge accepts the
   relevant result, and the entry records terminal Resolution/Verified evidence. Closing B-119 does
   not automatically close B-117/B-118 or make an MMF ready.

### Guaranteed failures and observable success

There is no evidence of inevitable financial loss. The deterministic specification/control
failures are narrower and testable:

| If left unresolved | Guaranteed failure | Passing evidence |
|---|---|---|
| Reuse numbered Parent references | A future disposition can close the wrong proposal | Current crosswalk names one stable topic and one existing owner per obligation |
| Put coverage-only exclusions in the shared matcher | A document disappears from both coverage and drift checks | Fixtures prove coverage exclusion and drift inclusion can coexist |
| Treat `stale: false` as graph completeness | Agents query a current graph that omits authoritative sources | Zero unexplained authoritative omissions, parity pass and analyzed head equals final governed commit |
| Rebuild without diagnosis/re-merge | Curated knowledge is lost or omissions recur | Root cause recorded; extracted rebuild precedes complete curated re-merge; repeat run remains green |
| Treat D-241 as B-115 application | Construction starts without an executable ownership/method contract | Separate governed B-115 act plus fresh work order and selected lane |
| Treat a work-packet file as selection | Lane B starts five unresolved DoR conditions | Every DoR row has evidence and the Judge explicitly selects the packet |
| Let handoff closure imply MMF readiness | Transaction status substitutes for Product/build evidence | Handoff Resolution and work-packet DoR/DoD are evaluated and reported independently |
| Let V1-SM06 completion open V2 automatically | Unapproved IDs/scope appear in a new version | Separate V2 boundary act names status, artifacts, selected scope and D-54 effects |

### Review verdict

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | D-241 authority decision and its Register-only tier disposition | Independent review, then retain |
| **Approve** | B-119 acknowledgement at `80e8fe8` | Receipt complete; substantive residuals remain |
| **Approve-with-conditions** | Graph coverage-scope correction | Record exact Judge act; preserve drift coverage; repair remaining extraction |
| **Approve-with-conditions** | B-115 method separation | Separate governed unit; no MMF selection or construction authorization |
| **Defer** | Context manifest and independent control scripts | Named consumer, source contract and negative fixtures per unit |
| **Defer** | Recursive migration, V1-SM05 selection, V2 opening and B-117/B-118/B-119 closure | Existing owners and dependency evidence first |
| **Reject** | Numeric Parent references as closure identities, `stale: false` as semantic completion, or D-241 as an executable build method | Replace with stable topic/owner evidence |

## Lane B independent review — setup programme, qualified V1 MMFs and bare `S5`/`S6`, 2026-09-20

**Evidence boundary:** the supplied Lane C analysis is review input, not authority. This section
checks it against `Modular_PRD.md`, `V1-BUILD-SPEC.md`, `D-232`/`D-239`/`D-240`/`D-241` and the five
work packets. It changes no canonical source, work-packet state, graph policy, code, schema or lane
selection. It is a clarification under existing `B119-MMF`, not a new backlog item.

### Clearer task and completion boundary

Separate three similarly named planning families; identify which facts are settled and which claims
would create wrong scope or false authorization; review Product/story/diagram/Encyclopedia impact;
and provide a parent-first implementation plan. Do not select an MMF, issue a work order, retire a
packet, change Graphify policy or begin construction in this round.

### Corrected three-namespace crosswalk

| Namespace | Canonical meaning | Current state | What it does **not** prove |
|---|---|---|---|
| `SETUP-SPIKE-000/S0…S4` | Zero-to-one setup programme. `S0`/`S1` produced real config/schema artifacts preserved as completed setup evidence. `S2` is `HELD`; `S3`/`S4` are not started and contain planned line-control, board/audit and publication work. | Historical setup evidence plus three open planning packets | It does not make any `V1` MMF complete, ready, selected or authorized. It is also inaccurate to say this namespace contains no application or technical work. |
| `V1/V1-SM05` and `V1/V1-SM06` | Qualified identities for the two V1 functional increments: core before usable. They avoid colliding with the older bare sprint labels. | Both **Not started; not selected**. `V1-SM05` has open DoR items; `V1-SM06` depends on it. | File existence is not active construction, Judge selection, a work order, DoR or DoD. |
| Bare `S5` and `S6` | Pre-existing scaffold rows. `S5` covers Line 3/degraded-mode concerns; `S6` covers later authentication/access lockdown. They retain their historical meanings and are unrelated to the qualified V1 sequence. | Deferred/post-V1 historical scope; no `S5.md` or `S6.md` work packet exists in the approved structure | They are not shorthand for `V1-SM05`/`V1-SM06` and cannot authorize those increments. Historical citations to them remain valid. |

The safe wording is: **`V1-SM05` and `V1-SM06` are the only qualified V1 functional-increment
identities currently recorded; neither is active or selected.** Do not call them “Sprint 5/6,” and
do not call bare `S5`/`S6` current V1 build packets.

### Corrections to the supplied Lane C analysis

1. **“Setup does not build or deliver application functionality” is too absolute.** The completed
   `S0`/`S1` evidence is real config and schema work, and the open `S2`–`S4` packets describe real
   product/build scopes. The valid boundary is that setup evidence and setup-packet status do not
   count as V1-MMF completion or authorization.
2. **“The only active construction engine” is false.** The qualified V1 packet files are the proper
   candidate identities, but both explicitly say `Not started; not selected`; there is no active
   V1 construction work order.
3. **“V1-SM05 delivers the five-gate pipeline” overstates the current boundary.** `D-239` limits V1
   to newsworthiness-ranking, routing and UI assistance; it excludes workflow execution inferred
   from source RACI, Final Sign-Off enforcement, publication-state mutation, external GRC, `T6` and
   Line 3 assurance. The packet cites both “core end-to-end editorial flow” and `D-239`; that outcome
   needs one reconciled, testable meaning before DoR can close.
4. **A blanket ban on writing `S5`/`S6` would destroy valid provenance.** The enforceable rule is to
   prohibit using those bare labels as aliases for qualified V1 MMFs or as current authorization.
5. **The claimed SAFe “IP runway” causal history is unsupported.** `D-241` settles that SAFe/Lean
   are analogies only; it does not establish that this particular analogy caused the collision.

### What is still unclear

- **Disposition of setup `S2`–`S4`:** `D-232` says they are not presumed to map by number onto the
  two V1 MMFs. The corpus has not yet decided whether their unbuilt scope will be retained as setup
  history, explicitly superseded, or reconciled into qualified MMF children.
- **Meaning of “full PRD success scenario becomes usable”:** `CR-19` says the article passes five
  gates and publishes or becomes LinkedIn-ready, while `D-239` excludes workflow execution, Final
  Sign-Off enforcement and publication-state mutation from V1. `V1-SM06` cannot receive an honest
  DoD until the Judge chooses the bounded observable outcome or changes that scope boundary.
- **Graph coverage policy:** the exact coverage-only exclusion act still is not in the Register.
  Current graph metadata is fresh, but `graph-coverage` remains red, so Graphify cannot prove this
  namespace audit is complete.

### Guaranteed specification failures and success criteria

| Failure pattern | Guaranteed result | Passing evidence |
|---|---|---|
| Call `V1-SM05`/`V1-SM06` active because their files exist | Work begins without selection or work order | Packet remains candidate until DoR evidence is complete and the Judge explicitly selects it |
| Treat setup completion as V1-MMF completion | Readiness/DoD is credited to the wrong namespace | Status report keeps setup evidence and V1 DoR/DoD in separate rows with separate evidence |
| Auto-map setup `S2`–`S4` into two V1 MMFs | Duplicate or dropped requirements and contradictory sequencing | A Judge disposition lists each setup packet/scope as retain, supersede or map-to-named-child; no inference by number |
| Promise the full `CR-19` scenario while retaining all `D-239` exclusions | Acceptance cannot be demonstrated from permitted behaviour | One Register act defines the observable V1-SM05/06 outcomes and aligns packet DoD, Build Spec and traceability anchors |
| Replace historical bare `S5`/`S6` references | Provenance and deferred-scope meaning are lost | Historical rows remain; current work always uses fully qualified IDs |
| Use `stale: false` as namespace-completeness evidence | A current graph can still omit governing sources | Coverage policy is recorded, authoritative omissions are zero or explicitly decided, curated parity passes |

### Cross-artifact impact

| Artifact | Review result |
|---|---|
| `Modular_PRD.md` | Already states that `S0`–`S6` predate `D-232`, are not presumed to map by number, and the qualified MMFs are not selected. Edit only after the setup-packet disposition or V1 outcome is decided. |
| Storyboard/story panels | Namespace clarification alone changes no behaviour. Panel A9 remains the `D-239` overlay; review it only if the V1 outcome decision changes the user-visible boundary. |
| UML/sequence and data flow | No duplicate diagram is needed. `FN-GATES` §4.1 continues to point to the storyboard Mermaid views as the single source. |
| Encyclopedia | Namespace naming creates no hosted-artifact change. Entries 01/05/06 remain separate review/republish gaps and must not be marked complete by this audit. |
| Build Spec/work packets | Primary follow-up surface after a Judge decision: reconcile the V1 outcome, then update each existing packet rather than creating another MMF or sprint family. |
| B-117/B-118/B-119 | All remain Open. This clarification closes no terminal handoff state and supplies no independent verification of their other residuals. |

### Parent-first implementation plan — do not build in this round

1. **Keep the settled namespace rule.** Retain `SETUP-SPIKE-000`, qualified `V1-SM05`/`V1-SM06`
   and bare historical `S5`/`S6` as three distinct families. Use fully qualified IDs in every current
   status, selection and work-order field.
2. **Decide the setup-packet disposition.** For each of `S2`, `S3` and `S4`, record retain-as-history,
   supersede, or reconcile-to-a-named-V1-child. Preserve completed `S0`/`S1` evidence; do not infer a
   numerical mapping and do not rename historical rows in place.
3. **Resolve the V1 outcome boundary.** Reconcile “core end-to-end flow” and “full PRD success
   scenario usable” with `D-239`'s UI-assistance exclusions. State observable outcomes and exclusions
   separately for `V1-SM05` and `V1-SM06` before changing their DoR/DoD.
4. **Propagate that one decision through existing owners.** Register first; then Build Spec,
   Artifact Inventory and `Modular_PRD` §8 per `D-54`, plus affected traceability, Fn Spec and
   storyboard sections only where behaviour actually changes. State every unaffected tier.
5. **Complete the existing V1-SM05 DoR.** Finish failure/replay, refusal/retry, visual and
   Encyclopedia evidence in `DOR-R2`–`DOR-R6`; do not mint another packet or call the file selected.
6. **Repair Graphify as its own bounded control unit.** Record the coverage-only scope, separate it
   from drift policy, add negative fixtures, rebuild extracted content, re-merge curated fragments
   and require zero unexplained authoritative omissions. This handoff-only review needs no rebuild.
7. **Authorize construction last.** After independent review of the reconciled packet, the Judge may
   select `V1-SM05` and issue a bounded Lane B work order. `V1-SM06`, bare `S5`/`S6` and V2 do not
   start automatically.

### Namespace-review verdict

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | Three distinct families and fully qualified current labels | Retain in all status and work-order records |
| **Approve** | Setup evidence does not satisfy V1-MMF readiness or completion | Preserve separate evidence ledgers |
| **Approve-with-conditions** | `V1-SM05` core and `V1-SM06` usable ordering | Reconcile each outcome with `D-239`, complete DoR and obtain Judge selection |
| **Approve-with-conditions** | Bare `S5`/`S6` as deferred historical scope | Preserve provenance; never use as V1-MMF aliases or current authorization |
| **Defer** | Setup `S2`–`S4` retirement/mapping, Graphify repair, V1 work order and handoff closure | Judge disposition, control repair and evidence in dependency order |
| **Reject** | “No setup functionality,” “active V1 construction,” present V1 as an executable five-gate pipeline, unsupported SAFe causal history, or a blanket ban on historical `S5`/`S6` references | Replace with the corrected crosswalk above |

## Lane B independent review — bridge from setup packets to qualified V1 MMFs, 2026-09-20

**Evidence boundary:** the supplied Lane C bridge is analysis, not a Judge act or executable packet.
This review checks it against the frozen `CR-19`, `D-239`, the current schema, `B-114`/`B-115`, the
five work packets and the existing namespace review above. It remains plan-only under `B119-MMF`.
No canonical source, work-packet state, interface, schema, graph policy or lane state changes here.

### Clearer task

Identify the missing decision and decomposition steps between the setup programme and the two
qualified V1 MMFs; preserve the frozen customer outcome; disposition the useful parts of `S2`–`S4`
without assuming whole-file absorption; define behaviour-level child boundaries without inventing
implementation; and leave construction held until DoR, independent review, Judge selection and a
bounded Lane B work order are all evidenced.

### Completion audit

- **Complete:** D-241's planning-method authority; the three-namespace crosswalk; Lane A's B-119
  acknowledgement; Lane B's D-241 and namespace reviews; handoff-response and docs-drift checks.
- **Open:** the V1 observable outcome, per-scope disposition of setup `S2`–`S4`, `B-115`, the
  executable B-114 ownership/push boundary, V1-SM05 DoR, Graphify coverage and B-119 closure.
- **Not authorized:** packet retirement, MMF selection, child-unit implementation, an API, schema
  change, state mutation, strict-TDD execution, work order or V2 scope.

### Finding 1 — the proposed outcome does not resolve `CR-19` versus `D-239`

`CR-19` is the frozen customer success scenario: five sequential gates, logged transitions and
publication to WordPress or LinkedIn-ready. `D-239` is the later V1 boundary: ranking, provenance
display and routing assistance only; it explicitly excludes workflow execution inferred from source
RACI, Final Sign-Off enforcement, publication-state mutation, automated publication, `T6`, external
GRC and Line 3 assurance.

Calling the result “Assisted Route-1 + LinkedIn `ManualReady`” does not bridge those rules.
`ManualReady` is a publication status/event. Recording it inside the application is publication-
state mutation, which `D-239` excludes. A reminder that the user must act in an external tracking
system is within D-239; an internal `ManualReady` delivery record is not.

The Judge must choose one branch before packet decomposition:

| Branch | Consequence |
|---|---|
| **Retain D-239** | V1-SM05/06 become an assisted ranking/routing and visibility slice. They must stop claiming that the full `CR-19` scenario becomes usable; the frozen customer outcome remains explicitly unmet/deferred. No internal `ManualReady` or publication-state mutation is promised. |
| **Amend D-239** | A new Register act names exactly which state transitions and delivery event return to V1, including whether LinkedIn `ManualReady` may be persisted. It must define roles, evidence, failure/replay and exclusions before DoR. |

Neither branch silently edits `CR-19`, and neither automatically assigns excluded work to V2.

### Finding 2 — `S2`–`S4` need per-scope disposition, not blanket absorption

The setup packets are subordinate checklists pointing to the Build Spec; they are not equal or
competing authorities. Their unresolved status creates ambiguity, but “supersede all three files and
absorb them” would move incompatible scope into V1:

| Setup scope | Evidence-compatible candidate disposition |
|---|---|
| `S2` line assignment/four-eyes, T5/T6 RPC and return evidence | **Split.** The old `T6` and transition-enforcement work conflicts with D-239's V1 boundary and remains retained historical/deferred unless that boundary is amended. A display-only Line/RACI projection may become a V1 child if separately specified. Do not absorb the held RPC wholesale. |
| `S3` board and filters | **Candidate for V1-SM06.** Board/filter visibility aligns with `FR-08`/`CR-13`; the `T6→T5` return-rate audit does not, because D-239 excludes `T6`. Split the board from the historical return metric. |
| `S4` publication/fallback | **Conditional split.** External-action reminder may fit D-239. Internal `ManualReady`, WordPress automation, retry jobs and privileged credential paths require an explicit scope amendment; do not label them V1 or V2 by inference. |

The eventual decision should disposition each behaviour as `retain-history`, `map-to-named-child`,
`defer-to-named-backlog` or `retire-after-migration-evidence`. Packet status follows the behaviours;
file deletion or a single “absorbed” marker is not the decision.

### Finding 3 — the three proposed child units are not implementation-ready

| Proposal | Defect | Correct planning boundary |
|---|---|---|
| `SM05-U1: POST /api/articles`, state `Reported`, reject duplicates | Invents an endpoint; `Reported` is absent from `article_state_v2`; intake distinguishes record creation from the audit-before-`Logged` transition; blanket duplicate refusal was superseded and manual trigger creation must remain possible. | Specify valid manual intake package, supplier/executor separation, record-created evidence, accepted/refused outcomes and audit-before-state ordering. Lane B later chooses interface and storage mechanics. |
| `SM05-U2: OP-PITCH and route to Desk Editor` | Treats a business judgment/application-selection contract as a complete interface and invents a routing destination. Replay/failure detail is still an open DoR item. | Specify the Route-1 classification outcome, required input/evidence, executor/application context, refusal and idempotent replay. Do not prescribe endpoint, table or recipient without authority. |
| `SM05-U3: Chief Editor T5 review, valid attestation advances state` | Contradicts D-239. V1 T5 is the **Chief Editorial Desk** second-lens ranking/router; it does not perform Final Sign-Off, approve publication or advance article state. It also conflates business `T5` with technical `transition:T5`. | Specify ranking/routing record and UI projection only under retained D-239. Any state advance or attestation is a separate amendment branch. |

The proposed blanket use of `workflow_transitions` for business `T1`–`T5` ranking is also undecided.
That table currently carries technical state-transition evidence. The business-phase namespace is
separate; a storage/event projection must preserve that separation and cannot be inferred from a
shared `T` label. The existing database sequence trigger is already implemented and locally tested,
so future verification of it is a characterization/regression proof, not a manufactured fail-first
child.

### Finding 4 — B-114/B-115 do not yet authorize “strict TDD under Lane A's child design”

`B-114` is Answered with overall `Resolution: Deferred`: its test-first/atomic-commit method remains
live, while its build-ownership framing waits on B-115. `B-115` is still Open and says Lane A owns
Intent/MMF outcomes, Lane B owns per-child xDD selection after authorization, and Lane C assists the
accepted build through DevOps evidence. Therefore:

- Lane A may specify business outcome, included/excluded behaviour, dependencies, acceptance and DoD;
- Lane B refines implementation children and selects the applicable xDD proof once it has an Active,
  bounded work order; and
- no current plan may call strict TDD, atomic child commits or human-final-push rules executable
  until B-115 and the surviving B-114 method are applied to their owning governed sources.

### Failure-derived success criteria

| Guaranteed failure if accepted now | Passing evidence |
|---|---|
| `ManualReady` is promised while D-239 forbids publication-state mutation | Judge branch explicitly retains or amends D-239; MMF outcome uses the same boundary |
| Whole setup packets are absorbed | Every S2/S3/S4 behaviour has one named disposition and no excluded T6/publication work enters V1 silently |
| Business `T` judgments are written as technical transitions | Event/storage contract names the namespace and proves no state mutation or identifier conflation |
| U1 implements `Reported` and blanket duplicate refusal | Intake uses the current state model, audit-before-state order and the scoped same-brief reuse rule |
| U3 advances state from T5 | Under retained D-239, T5 evidence is ranking/routing only; amendment evidence is required for any state advance |
| Lane A fixes endpoints and strict TDD in the Intent packet | Intent stays behaviour-level; authorized Lane B build refinement owns interface/xDD choices |
| Packet files are treated as authorization | DoR evidence, independent review, explicit Judge selection, Active lane and work order all exist |

### Cross-artifact impact

| Artifact | Review result |
|---|---|
| `Modular_PRD.md` | Frozen requirements remain unchanged now. After the Judge branch, §8 records the qualified MMF outcome and setup-scope dispositions without rewriting `CR-19`. |
| Storyboard/story panels | Current Panel A9 reflects D-239. Retaining D-239 needs clarification only; amending it to state mutation or `ManualReady` requires a behavioural redraw and independent review. Historical superseded panels remain provenance, not implementation authority. |
| UML/sequence and data flow | Continue using the storyboard Mermaid views through `FN-GATES` §4.1. Add no duplicate diagram. Update only after event ordering, state mutation and namespace are decided. |
| Encyclopedia | Entries 01/05/06 remain flagged review/republish work. Packet absorption or a handoff plan cannot mark them complete. |
| Build Spec/work packets | Primary propagation surfaces after the Register decision. Reuse the existing two qualified MMF packets and add behaviour-level children only after scope reconciliation. |
| Graphify | Query still does not surface the authoritative namespace sources reliably; the known 61-file coverage gap remains. This handoff-only review creates no rebuild obligation. |

### Parent-first implementation plan — no build in this round

1. **Judge the V1 outcome branch.** Retain or amend D-239. Record the exact observable outcome for
   each qualified MMF, the relationship to frozen `CR-19`, included mutations and explicit deferrals.
2. **Disposition setup scope behaviour by behaviour.** Split S2 line-display from T6/RPC enforcement,
   S3 board/filter from T6-return analytics, and S4 reminder from publication mutation/automation.
   Do not retire a packet until every behaviour has a destination and citations are migrated.
3. **Apply B-115 and the surviving B-114 method.** Put business children/acceptance in Intent; leave
   endpoint, persistence design and per-child xDD with the authorized Lane B build refinement; keep
   Lane C on workflow evidence after an immutable Lane B artifact exists.
4. **Propagate the decision once.** Register first, then Build Spec and Artifact Inventory in the
   same D-54 pass, plus `Modular_PRD` §8 and only the affected traceability/Fn Spec/storyboard tiers.
   State unaffected tiers explicitly.
5. **Refine V1-SM05 at behaviour level.** Candidate order: accepted intake record; Route-1
   classification/ranking evidence; T5 second-lens ranking/routing projection. Each child names
   inputs, outputs, failure/replay, acceptance and exclusions without fixing endpoints or tables.
6. **Complete DoR and independent review.** Resolve DOR-R2–R6, review the target normal/revision
   visual and hosted Encyclopedia entries, and define the MMF DoD against the selected scope branch.
7. **Repair Graphify separately.** Record coverage-only policy, preserve docs-drift, add negative
   fixtures, rebuild extracted content, re-merge curated fragments and require zero unexplained
   authoritative omissions.
8. **Authorize last.** The Judge selects V1-SM05, Lane B becomes Active for one named child, and a
   fresh work order carries the accepted outcome and DoD. V1-SM06 and any future version remain
   downstream and do not open automatically.

### Bridge-review verdict

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | Need for an explicit setup-to-V1 bridge and behaviour-level decomposition | Judge scope decision, then existing-packet refinement |
| **Approve-with-conditions** | Reuse of S3 board/filter and selected S2/S4 behaviours | Per-behaviour disposition; preserve D-239 exclusions unless amended |
| **Approve-with-conditions** | B-114 test-first method | Apply B-115 ownership split and authorize a Lane B child before xDD execution |
| **Defer** | Child manifest, packet retirement, ManualReady, Graphify repair, MMF selection and construction | Governing decisions and DoR evidence first |
| **Reject** | Blanket S2–S4 absorption; “ManualReady delivery” under retained D-239; `Reported` intake; blanket duplicate rejection; Chief Editor attestation/state advance at business T5; hard-coded endpoint/table choices; strict TDD as current Lane A intent | Replace with the parent-first plan above |

## Lane B review — Judge-approved Option B amendment to D-239, 2026-09-20

**Authority received:** the Chief Editor/Judge selected **Option B**: amend D-239 so V1 may record a
LinkedIn `ManualReady` delivery outcome, keep automated WordPress outside V1, and map S4's
`ManualReady` behaviour to `V1-SM06`. This section preserves that decision while separating it from
extra claims in the supplied Lane C interpretation. At reviewed remote HEAD `5733311`, no canonical
Register entry containing this decision exists yet; Lane A must assign the Register ID and apply it.

This is still a handoff-only review. It changes no canonical source, work packet, schema, code,
Graphify policy, lane state or construction authorization.

### Normalized decision — what Option B does and does not decide

| Decided by the Judge | Correct repository meaning |
|---|---|
| Permit minimal publication-state mutation in V1 | `V1-SM06` may append a `ManualReady` event to `publications` for the article's **LinkedIn** `publication_targets` row. `ManualReady` is a `publication_event_type`; it is not an `article_state_v2` value and does not by itself change `articles.workflow_state`. |
| Trigger after Route-1 Gate T5 | Qualify this as completion of the `business:T5` Chief Editorial Desk ranking/routing record. It must not be recorded as, or inferred to be, technical `transition:T5`, Final Sign-Off or publication approval. Exact actor/authority and state preconditions remain child-contract work. |
| Keep WordPress automation excluded | Automated WordPress, credentials, retries and background scheduling remain outside V1. The Judge named V2 as the target backlog; this does **not** open V2, select a V2 MMF or authorize V2 construction. |
| Absorb S4 `ManualReady` behaviour | Map only the LinkedIn `ManualReady` behaviour to `V1-SM06`. Do not absorb the rest of S4, and do not retire `S4.md` until every remaining behaviour and citation has a destination. |

### Corrections to Lane C's interpretation

1. **`NG-04` is not the WordPress deferral.** `NG-04` says no automated **Facebook** publishing.
   The WordPress exclusion comes from D-239 as amended by this Judge act. If targeted to V2, record
   it as a V2 backlog target without treating NG-04 as its authority.
2. **Option B does not automatically restore the full state machine.** The approved wording carves
   out `ManualReady`; it does not expressly lift D-239's separate exclusion of workflow execution
   inferred from source RACI, article-state mutation, Final Sign-Off enforcement or `T6`. Calling
   this a “working end-to-end pipeline” remains premature until a further act names those mutations.
3. **Business T5 is still not technical T5.** The trigger context is the Chief Editorial Desk's
   second-lens ranking/routing completion. No Chief Editor attestation, Chief Journalist approval,
   technical gate transition or article-state advance is implied.
4. **S2 RPC absorption was not selected.** The Judge's quoted Option B mentions only S4
   `ManualReady`. S2's held security-invoker/T6 scope remains held/deferred; Lane C cannot attach it
   to V1-SM05 by implication.
5. **V2 remains unopened.** “Deferred to V2” is a target-scope record, not a new version, sprint,
   packet, work order or authorization. D-36/D-203 succession rules still apply.

### Child contract still required before DoR or construction

The parent boundary is decided. The following implementation-readiness facts remain open and must
be specified without inventing them in this handoff:

| Open child | Required evidence |
|---|---|
| Trigger and precondition | Exact `business:T5` completion evidence; applicable Route-1/revision; required formatted content; whether any article workflow state is required or changed |
| Acting authority | The role/human/system permitted to append `ManualReady`; supplier, approver and executor kept distinct; no role inferred from a similarly named T gate |
| Target/event ordering | Creation or selection of the LinkedIn `publication_targets` row, then append-only `publications(event_type='ManualReady')`; no mutable status column |
| Replay/idempotency | Scope key for article, LinkedIn target and revision; duplicate request produces no second effective readiness outcome while preserving audit evidence |
| Revision behaviour | Which content/routing revision invalidates readiness, how prior evidence remains visible, and what produces a fresh `ManualReady` event |
| Refusal/failure | Missing T5 evidence, wrong route/target, missing formatted content, stale revision and unauthorized actor yield named refusal evidence without mutation |
| Observable acceptance | Board/detail UI shows the current effective LinkedIn readiness and its evidence without calling the article `Published` or claiming WordPress delivery |

Until those children are decided, Option B resolves the parent fork but does not close V1-SM06 DoR
or prove full `CR-19`. In particular, `CR-19` also requires the five-gate path and Chief Journalist
approval; the new `ManualReady` event settles only its permitted delivery outcome.

### Behaviour disposition after Option B

| Existing setup behaviour | State after this Judge decision |
|---|---|
| S2 Line/RACI context display | Candidate V1-SM05 projection; unchanged by Option B |
| S2 T5/T6 security-invoker, EmergencyBypass and return evidence | Held/deferred; not absorbed |
| S3 board/filter visibility | Existing V1-SM06 candidate; unchanged by Option B |
| S3 T6→T5 return analytics | Deferred while T6 remains outside V1 |
| S4 LinkedIn `ManualReady` | **Judge-selected mapping to V1-SM06**, pending the child contract above |
| S4 WordPress, retries, privileged credentials and scheduler | Outside V1; target V2 backlog only, with no V2 opening or authorization |

### Cross-artifact impact for Lane A's application pass

| Artifact | Required disposition |
|---|---|
| Decision Register | Record the Option B parent act, exact amendment to D-239, retained exclusions, open child contract and every D-54 tier disposition. Lane A assigns the next ID; do not assume Lane C's proposed `D-242`. |
| `V1-BUILD-SPEC.md` / work packets | Replace the D-239 contradiction in V1-SM06 with the narrow `ManualReady` outcome; retain V1-SM05 and S2/S3 statuses unless separately decided; split S4 behaviour instead of marking the entire packet absorbed. |
| `V1-ARTIFACT-INVENTORY.md` | State whether existing publication artifacts cover the outcome and add only genuinely new evidence artifacts; do not infer new APIs or workers. |
| `Modular_PRD.md` | Keep frozen `CR-19`; update the V1 scope/§8 tracking and D-239 cross-reference. `FR-09`/K-02 already distinguish target-level `ManualReady`; remove no historical provenance. `NG-04` remains Facebook-only. |
| Fn Specs / traceability | Add the narrow V1-SM06 `ManualReady` behaviour, actor/precondition/refusal/revision evidence once decided. Keep business and technical T namespaces separate. |
| Storyboard/story panel | Panel A9 is affected: after `business:T5` ranking/routing, show the conditional LinkedIn readiness path. Do not show Final Sign-Off, article-state advance, WordPress or technical T5 unless separately authorized. |
| UML/data flow | Show `articles` → LinkedIn `publication_targets` → append-only `publications:ManualReady`; distinguish it from `articles.workflow_state` and `workflow_transitions`. Reuse the storyboard Mermaid single source rather than creating a duplicate diagram. |
| Encyclopedia | Entries 01/05/06 require review flags/citations as applicable; hosted review and republish remain a distinct opt-in act and cannot be claimed complete here. |
| Graphify | Rebuild only after Lane A's governed-source pass, then re-merge curated fragments. This handoff-only commit remains excluded under D-231. |

### Parent-first application plan — no construction in this round

1. **Record the Judge act.** Lane A assigns the Register ID, amends D-239 only for LinkedIn
   `ManualReady`, removes the false NG-04 citation and states that full workflow execution remains
   excluded unless separately decided.
2. **Propagate the fact once under D-54.** Register, Build Spec and Artifact Inventory in the same
   pass; `Modular_PRD` §8 and affected traceability/Fn Spec/storyboard tiers; explicit unaffected
   dispositions for everything else.
3. **Split S4 safely.** Map `ManualReady` to V1-SM06; retain/defer WordPress, retry, credentials and
   scheduling to a V2-target backlog without opening V2; migrate citations before any packet status
   changes.
4. **Specify the child contract.** Trigger, actor, target/event ordering, replay, revision, refusal
   and acceptance evidence. Do not select endpoints, components or query design in the Intent tier.
5. **Apply B-115 and surviving B-114 method.** Lane A owns outcome/acceptance; authorized Lane B
   refines persistence/interface and xDD; Lane C later consumes an immutable Lane B evidence packet.
6. **Complete V1-SM05/06 DoR and independent review.** Do not claim `CR-19` or the full pipeline
   complete merely because one `ManualReady` event is now in scope.
7. **Repair and resynchronize Graphify.** Apply the separately decided coverage policy, rebuild,
   re-merge curated fragments and require zero unexplained authoritative omissions.
8. **Authorize construction last.** Judge selection, Active lane and a bounded work order remain
   required. Option B is a scope decision, not a build authorization.

### Option-B review verdict

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | Judge Option B: LinkedIn `ManualReady` event in V1-SM06 and S4 behaviour mapping | Lane A Register/D-54 application |
| **Approve-with-conditions** | `ManualReady` persistence | Target-level append-only event; child trigger/actor/replay/revision/refusal contract before DoR |
| **Approve-with-conditions** | WordPress targeted to V2 | Backlog target only; no NG-04 citation, V2 opening or construction authority |
| **Defer** | Full state-machine restoration, S2 RPC, Chief Journalist approval path, packet retirement, MMF selection and construction | Separate decisions and evidence |
| **Reject** | Treating `ManualReady` as an article state; using business T5 as technical transition authority; citing NG-04 for WordPress; inferring full pipeline/S2 absorption; preassigning `D-242`; treating Option B as a work order | Apply the normalized boundary above |

## Lane B decision-ready clarification — publication boundary, Graphify scope, answer location and QA semantics, 2026-09-20

### Clarified task

Consolidate the existing B-119 evidence into three Judge choices without treating Lane C's
recommendations as decisions. Keep the work parent-first, identify the critical construction and
verification artifacts, normalize the behaviour/specification/testing vocabulary, and prepare a
Lane A follow-up plan. This section is analysis only: it changes no canonical source, Graphify
policy, work packet, lane state or construction authorization.

### Completion and authority ledger

| Stable topic | Current state | Meaning |
|---|---|---|
| `B119-AUTH` — planning labels | **Applied in D-241** | Scrum and MMF remain governing labels; SAFe and Lean remain explanatory analogies. |
| `B119-NS` — setup/delivery namespaces | **Reviewed in B-119** | `SETUP-SPIKE-000/S2–S4`, `V1-SM05/06`, and historical bare sprint labels remain distinct. |
| `B119-MANUALREADY` — Judge Option B | **Decided in conversation; not yet canonical** | V1-SM06 may append a LinkedIn target-level `ManualReady` event. Lane A must assign the Register ID and perform D-54 propagation. |
| `B119-URL` — `FR-10`/`T11` live-URL confirmation | **Open** | Option B does not decide the later transition from `ManualReady` to `Published`. |
| `B119-GRAPH-SCOPE` — coverage-only exclusions | **Open in the repository record** | D-241 says a separate Judge answer exists but does not preserve its exact path-level scope. It cannot be reconstructed as authority from Lane C's prose alone. |
| `B119-QA` — intent/build/CI and xDD split | **Open** | B-115 remains the governing handoff question; B-114 does not authorize a mandatory test method. |
| `B119-ANSWER` — this handoff lifecycle | **Open** | Lane A has acknowledged B-119. Canonical propagation, a substantive Lane A answer and independent verification remain outstanding. |

### Judge choices — parent first

No box below is selected by this review. A recommendation is not a Judge act.

#### `B119-URL` — V1 publication boundary

| Choice | Decision | Consequence |
|---|---|---|
| **A — Defer `FR-10`/`T11` (recommended)** | V1 ends at an effective LinkedIn `ManualReady` event. Live-URL confirmation and promotion to `Published` become a V2-target backlog item without opening V2. | Keeps the approved Option B carve-out narrow. `ManualReady` remains a `publication_event_type`; it does not change `articles.workflow_state`. |
| **B — Add a separate V1 amendment** | Retain manual live-URL confirmation in V1 through a distinct Register act and child contract. | Must define acting authority, target and article-state effects, accepted URL/evidence rules, revision handling, idempotency, refusal/failure and observable acceptance before DoR. |

Choice B does not automatically require live-page scraping, a regular-expression policy or a new
schema field. Those are later technical refinements unless the accepted behavioural contract makes
one necessary.

#### `B119-GRAPH-SCOPE` — coverage-only Judge answer

| Choice | Decision | Consequence |
|---|---|---|
| **A — Confirm an explicit reviewed manifest (recommended)** | Record the exact coverage-only exclusion paths. Candidate plan-pack files are `ARCHITECTURE.md`, `DATA_MODEL.md`, `AGENTIC_LAYER.md`, `INTELLIGENCE_LAYER.md`, `SECURITY.md`, `TASKS.md` and `TEST_PLAN.md`; historical journals qualify only when they are neither authoritative nor referenced by a live source. | Implement the exclusions only in graph coverage. Keep docs-drift unchanged. Add fixtures proving that an excluded file remains drift-visible and that every referenced/canonical file remains coverage-required. |
| **B — Exclude `docs/journal/2026-08-*` as a glob** | Treat every matching journal as historical. | **Reject.** It would exclude `2026-08-18-storyboard-business-and-digital-twin.md`, the canonical Mermaid source referenced by `FN-GATES-01-05.md` and recorded by D-232. |

The 61-file coverage failure also contains authoritative Register, governance, functional-spec and
work-packet sources. Excluding the candidate plan pack and some historical journals therefore does
not prove that the suite will pass. Success requires classifying every remaining omission as either
covered or explicitly, narrowly excluded; a target tally is not the policy.

#### `B119-ANSWER` — where the consolidated crosswalk belongs

| Choice | Decision | Consequence |
|---|---|---|
| **A — Answer in this B-119 file (recommended)** | Lane A appends its substantive response here and cites stable `B119-*` topics. | Avoids a duplicate handoff and respects the withdrawn `A-NNN` series. Keep `Status: Open` until the answer is complete, or use `Status: Answered` with the weakest unresolved child disposition. Use `Resolution: Verified` only after independent verification of applied canonical work. |
| **B — Create another handoff or use a turn report as the answer** | Move the crosswalk elsewhere. | **Reject.** A phase turn report may cite the result but does not replace the answer to the Lane B-raised item. |

`Resolution: Applied` would be premature while the Option B Register act, D-54 propagation,
coverage policy and DoR evidence remain open. The eventual B-119 disposition must follow its
weakest unresolved child under the existing handoff rules.

### Normalized documentation and QA semantics

| Tier | Owns | Verification relationship |
|---|---|---|
| `Modular_PRD.md` | Product outcomes, requirements and acceptance anchors | Supplies the business outcome and acceptance source. |
| `docs/fn-specs/` | Behaviour, actors, preconditions, outcomes, refusal and edge cases | BDD-style examples or Given/When/Then scenarios are suitable expressions, but the tier does not mandate one runner or test framework. |
| `docs/specs/` | Implementation contracts and technical-system boundaries | May yield unit, integration, contract, security and operational checks. |
| `docs/specs/ux/` | Stack-specific UI/UX implementation consequences | May yield component, accessibility, interaction and visual verification. It is not limited to unit tests. |
| Lane B child refinement | Construction design and test-first method for an authorized child | TDD or another xDD method is a build choice after scope, acceptance, lane and work-order authorization. |
| `SPECS-VERIFICATION-APPARATUS.md` | Reusable evidence and verification contracts | Connects technical evidence to the accepted behaviour without redefining product intent. |

This preserves D-29's tier ownership. It rejects a one-to-one rule that all functional-spec tests
are BDD or that all technical/UX checks are unit tests; those labels describe useful methods, not
exclusive document classes.

### Parent-first Lane A follow-up plan — no construction

1. **Obtain and record the three Judge choices.** Record `B119-URL`, the exact path-level
   `B119-GRAPH-SCOPE`, and `B119-ANSWER`; do not infer a selected option from this recommendation.
2. **Canonicalize the already-selected Option B.** Lane A assigns the next available Register ID
   at application time and records the narrow LinkedIn `ManualReady` carve-out, retained exclusions,
   open child contract and explicit tier dispositions. Do not reserve `D-242` in advance.
3. **Apply D-54 once.** Update the Register, Build Spec and Artifact Inventory in the same pass,
   then `Modular_PRD.md` §8 and only the affected traceability, functional-spec and storyboard
   sources. State every unaffected tier explicitly.
4. **Disposition setup behaviours individually.** Map only supported S2/S3/S4 behaviours to
   V1-SM05/06. Keep S2 RPC/T6, S3 return analytics, WordPress/retry/credential work and other
   unselected behaviour held or in a target backlog. Retire no packet until all citations move.
5. **Specify the behavioural children.** Complete the `ManualReady` trigger, actor, target/event
   ordering, replay, revision, refusal and observability contract. If `B119-URL` choice B is selected,
   specify its `Published` contract as a separate child.
6. **Resolve B-115 before prescribing construction method.** Lane A defines outcomes and
   acceptance; authorized Lane B refines interfaces, persistence and per-child xDD; Lane C consumes
   immutable build evidence for workflow verification.
7. **Repair Graphify as a separate control unit.** Apply the confirmed explicit manifest to the
   coverage-specific classifier, retain drift monitoring, test positive and negative cases, rebuild
   the extracted graph, then re-merge curated fragments.
8. **Complete DoR and independent review.** Review the normal/revision storyboard paths and
   applicable Encyclopedia entries, reconcile every authoritative graph omission, and run the full
   consistency suite.
9. **Answer B-119 in place and authorize last.** Record the substantive Lane A response here,
   apply the correct weakest-child Resolution after every child has a disposition, then let the Judge
   select one bounded V1-SM05 child and its Active lane through a fresh work order.

### Critical artifacts and success evidence

| Artifact | Required planning result | Success evidence before construction |
|---|---|---|
| Decision Register | Option B plus selected `B119-URL`, graph-scope and B-115 acts, each with stable identity | No conversational recommendation is used as authority; every affected tier has a disposition. |
| Build Spec and Artifact Inventory | Sequenced child units, DoR/DoD and evidence files | The same scope boundary appears in both tracking sources without duplicate counts. |
| `Modular_PRD.md` | V1 tracking and requirement links; frozen customer intent preserved | `FR-09`, `FR-10`, `CR-19` and V1 scope no longer imply contradictory completion. |
| Publication Fn Spec and traceability map | `ManualReady` behaviour and the selected `FR-10` disposition | Actor, trigger, revision, replay, refusal and acceptance are traceable without implementation design. |
| Storyboard Panel A9 and referenced Mermaid UML/data flow | One canonical normal/revision path | LinkedIn target event, article workflow state and later `Published` outcome are visually distinct; no duplicate diagram source. |
| Encyclopedia entries 01/05/06 | Review flags and citations where affected | Hosted review/republish is evidenced separately and never inferred from a local flag. |
| Graph coverage classifier and fixtures | Explicit manifest with referenced-file exceptions | No unexplained authoritative omissions; coverage exclusions remain visible to docs-drift. |
| V1 work packets and work order | One selected child with inputs, outputs, failures, tests and exclusions | DoR is independently reviewed before Lane B construction begins. |

### Deterministic failure and success criteria

| Failure condition | Why it fails | Required success criterion |
|---|---|---|
| Treat Option B as full `CR-19` or as construction authority | It authorizes one target-level event, not the complete editorial/publication journey or a lane handover. | Register scope, DoR, selected lane and bounded work order all exist. |
| Treat `ManualReady` as article `Published` state | It conflates a publication event with `articles.workflow_state` and silently absorbs `FR-10`. | Event and state semantics remain separate; `FR-10` has an explicit disposition. |
| Exclude every August journal from Graphify | It removes the live canonical storyboard from coverage. | Explicit reviewed exclusions preserve every referenced/canonical journal. |
| Claim coverage repair from a smaller missing-file count | A count cannot explain whether an authoritative source disappeared. | Every omission has a path-level classification and fixture; no unexplained authoritative source is absent. |
| Close B-119 after acknowledgement or canonical application alone | Answering, applying and independent verification are different lifecycle acts. | Substantive answer, weakest-child resolution and independent verification are recorded separately. |
| Mandate strict TDD or BDD from a documentation tier | It converts an ownership/tier map into an unauthorized construction method. | Behaviour examples and technical evidence are specified; Lane B selects the child-level method after authorization. |

There is no repository evidence that any one documentation defect by itself guarantees financial
loss. The useful high-stakes interpretation is deterministic: prevent unauthorized publication,
false completion, missing accountability, secret exposure and untraceable scope changes through
the acceptance and refusal evidence above.

### Decision-ready verdict

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | Existing Option B parent decision and the three-namespace separation | Lane A Register and D-54 application |
| **Approve-with-conditions** | `B119-URL` choice A, deferring `FR-10`/`T11` | Judge selection; V2-target backlog only, with no V2 opening |
| **Approve-with-conditions** | Explicit Graphify coverage manifest | Judge confirms exact paths; preserve canonical storyboard and docs-drift |
| **Approve-with-conditions** | Consolidated Lane A answer inside B-119 | Use stable topic aliases and lifecycle state governed by the weakest unresolved child |
| **Approve-with-conditions** | Behaviour/BDD and specs/UX technical-verification mapping | Treat methods as guidance; Lane B chooses per-child xDD after authorization |
| **Defer** | Canonical propagation, packet retirement, Graphify repair, B-119 closure, MMF selection and construction | Judge choices, D-54 pass, DoR and independent verification |
| **Reject** | Blanket journal exclusion; automatic 18/18 claim; preassigned Register ID; `ManualReady` as article state; new handoff as B-119 substitute; strict TDD/BDD mandate | Use the decision-ready boundaries and parent-first plan above |

## Lane B reconciliation — reported A/A/A choices and Lane C correction review, 2026-09-20

### Clarified task and authority boundary

Review the supplied Lane C reconciliation against the repository, preserve its valid corrections,
identify any remaining failure conditions, and give Lane A a parent-first application plan. The
supplied Lane A worklog reports that the Judge selected `B119-URL` A, `B119-GRAPH-SCOPE` A and
`B119-ANSWER` A. Lane B records those selections as received handoff evidence; Lane A remains the
owner that assigns Register identities and applies them to canonical sources.

This section is still planning and review only. It changes no canonical source, graph policy, work
packet, lane state or construction authority.

### Reconciliation findings

| Lane C proposition | Lane B disposition | Corrected repository meaning |
|---|---|---|
| The manifest alone cannot produce a clean graph-coverage result | **Accept** | Removing selected exclusions leaves a coverage-required remainder. Every remaining path must be extracted, represented by a valid curated fragment, or separately dispositioned. |
| The remainder is “44 authoritative files” | **Correct** | `44` is arithmetic, not a document class. The remainder includes governing sources and live specs, but also indexes, procedural documents and fragment documentation. Call it the **coverage-required remainder under the current policy** until every path is classified. |
| Seven plan-pack files and ten journals form the coverage-only manifest | **Accept with conditions** | Use exact paths, not a count or wildcard. The journal criterion is “no incoming filename citation from a non-journal live/canonical source,” not “zero references”: several candidates cite one another. A human authority review remains part of the fixture evidence. |
| Plain `hook-rebuild` plus `merge7.js` resolves the remainder | **Correct** | Those commands are required after governed changes, but success is the post-merge path evidence. The current graph was already rebuilt yet still omits the sources. Re-running commands is not proof that each path was extracted. |
| Mark `FR-10`/`AC-16` `[V1→V2]` now | **Reject** | D-178 expressly says `[V1→V2]` is invalid while no V2 build exists. Keep the existing `[V1]` origin and add a D-36-compliant, decision-cited V1 scope/target-backlog note. Change to `[V1→V2]` only when V2 exists and materially revises the section. |
| Remove a false canonical `NG-04` citation | **Withdrawn correctly** | No such canonical citation exists. Do not introduce one. WordPress exclusion comes from D-239 as amended. |
| Avoid preassigned Register IDs and physical replay keys | **Accept** | Lane A assigns the next ID at application. Functional intent states observable idempotency/replay; authorized Lane B later chooses persistence and key mechanics. |
| Add Encyclopedia Entry 04 to the impact ledger | **Accept** | Entry 04 directly owns article-state versus publication-status semantics and is not currently flagged for this new decision. Entries 01/05/06 remain separate impact checks. |
| Move B-119 to `Answered` after Lane A's substantive response | **Accept with conditions** | Use `Status: Answered` and compute the header from every child under D-204. `Applied` is provisional and weaker than terminal `Deferred`; `Verified` requires its distinct evidence. |

### Exact `B119-GRAPH-SCOPE` manifest received

The reported Judge choice is normalized as the following explicit coverage-only paths. This list
does not remove any file from docs-drift and does not delete or de-authorize its content.

**Non-authoritative plan-pack paths:**

- `docs/ARCHITECTURE.md`
- `docs/DATA_MODEL.md`
- `docs/AGENTIC_LAYER.md`
- `docs/INTELLIGENCE_LAYER.md`
- `docs/SECURITY.md`
- `docs/TASKS.md`
- `docs/TEST_PLAN.md`

**Historical-journal paths with no incoming exact-filename citation from a non-journal live or
canonical source in the reviewed tree:**

- `docs/journal/2026-08-18-audit-model-and-remediation-plan.md`
- `docs/journal/2026-08-18-board-packet-checklist.md`
- `docs/journal/2026-08-18-consolidated-gaps-and-open-questions.md`
- `docs/journal/2026-08-18-first-engagement-lock-in.md`
- `docs/journal/2026-08-18-poc-charter-separation-and-revenue-model.md`
- `docs/journal/2026-08-18-publication-transaction-record.md`
- `docs/journal/2026-08-18-retraction-as-publication.md`
- `docs/journal/2026-08-18-sprint-readiness-consolidated.md`
- `docs/journal/2026-08-18-transition-intent-vocabulary.md`
- `docs/journal/2026-08-19-t1-execution-runbook.md`

The seven missing journal paths that remain coverage-required are the three 2026-08-16 records,
`2026-08-18-board-decision-sheet.md`, `2026-08-18-raci-human-vs-digital-twin.md`,
`2026-08-18-storyboard-business-and-digital-twin.md` and
`2026-08-18-t0-execution-runbook.md`. Their exact filenames are cited from non-journal canonical or
live sources. The storyboard remains the canonical Mermaid source.

### Graph-control dependency that Lane C omitted

D-231 currently requires `graph-coverage` and `docs-drift` to share one exclusion matcher. A
coverage-only manifest deliberately gives those checks different policies. Lane A must therefore
record a bounded amendment to D-231 before changing the implementation. The safe design may retain
one base governed-intent classifier and add an explicit coverage-only layer, but fixtures must prove:

1. each manifest path is excluded from graph coverage;
2. the same path remains visible to docs-drift;
3. a referenced/canonical journal cannot enter the manifest through a broad glob;
4. a mixed governed/handoff commit still marks the graph stale;
5. every non-excluded missing path is reported; and
6. the coverage test validates a source/path relationship stronger than the current
   `graph.includes(path.basename(file))` substring check.

The last item matters because the current check can pass when a basename merely appears somewhere
in graph JSON; that does not prove the file was extracted into a useful semantic node.

### Parent-first Lane A application plan

1. **Apply the product-scope parent act now.** Assign the next Register ID and amend D-239 only for
   the LinkedIn target-level `ManualReady` outcome. Record the selected `B119-URL` A deferral,
   retained exclusions, setup-behaviour dispositions and all tier effects. Do not cite NG-04.
2. **Perform the D-54 pass atomically.** Update the Register, Build Spec and Artifact Inventory,
   then `Modular_PRD.md` §8, V1-SM06, the affected traceability/Fn Spec and storyboard Panel A9.
   Preserve the single storyboard/UML/data-flow source and flag Encyclopedia Entry 04 in addition
   to any still-applicable Entries 01/05/06.
3. **Express the `FR-10` deferral without claiming V2 exists.** Keep `[V1]`; add the current
   decision's V1 scope note and V2-target backlog destination across `FR-10`, `US-10`, `AC-16`,
   `AC-16a`, `TR-API-04` and the publication Fn Spec. Restate no aggregate counts.
4. **Keep behaviour above mechanism.** Specify actor, precondition, target-level outcome,
   no-duplicate observable replay, revision and refusal evidence. Leave table/query/key/interface
   choices to an authorized Lane B child refinement.
5. **Write Lane A's substantive answer in B-119.** Cite the canonical commit and stable `B119-*`
   topics, set `Status: Answered`, and compute the Resolution from all child dispositions under
   D-204. Do not claim independent verification in the applying commit.
6. **Apply B-115 as its own governed unit.** The Judge clarification already exists in B-115;
   Lane A still must propagate Intent/Build/DevOps ownership without prescribing Lane B's xDD.
7. **Amend D-231 and repair coverage in a separate unit.** Record the exact manifest paths and
   coverage-only semantics, strengthen path evidence, add fixtures, rebuild extracted content,
   re-merge curated fragments and classify every remaining omission by path.
8. **Authorize construction last.** Independent review, complete DoR and one bounded V1-SM05 child
   work order precede any Lane B application construction. V1-SM06 and V2 do not open by inference.

### Completion and closure tracking

| Topic | State after the reported Judge choices | Evidence still required |
|---|---|---|
| `B119-AUTH` | **Applied** | Retain D-241. |
| `B119-NS` | **Reviewed; canonical dispositions pending** | Product-scope Register/D-54 commit. |
| `B119-MANUALREADY` | **Judge-selected; unapplied** | Register, D-54 propagation and independent review. |
| `B119-URL` | **Judge-selected A; unapplied** | D-36-compliant V1 scope/backlog notes; no premature `[V1→V2]`. |
| `B119-GRAPH-SCOPE` | **Judge-selected A; unapplied** | D-231 amendment, explicit manifest, stronger coverage evidence and graph repair. |
| `B119-QA` | **Judge clarification exists in B-115; unapplied** | Separate canonical B-115 propagation. |
| `B119-ANSWER` | **Judge-selected A; unwritten by Lane A** | Substantive in-file answer, then `Status: Answered` with weakest-child Resolution. |

The current Lane B review does not itself change the B-119 header. After Lane A answers, the
correct intermediate shape is `Status: Answered` plus the D-204 weakest-child Resolution. If any
child is `Applied` and none is absent, the whole entry is `Applied`, because provisional is weaker
than terminal `Deferred`. `Deferred` is valid only when the computed weakest child is terminal and
requires `Follow-up-Tier`; `Verified` requires a later independent act. The answer alone supplies
none of those child facts.

### Reconciliation verdict

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | Reported Judge choices `B119-URL` A, `B119-GRAPH-SCOPE` A and `B119-ANSWER` A | Lane A canonical acts and substantive B-119 answer |
| **Approve** | Encyclopedia Entry 04 impact and withdrawal of the NG-04 claim | D-54 applicability and ledger flag |
| **Approve-with-conditions** | Exact coverage-only manifest | Amend D-231; use explicit paths; preserve docs-drift and referenced journals |
| **Approve-with-conditions** | Coverage-required remainder | Classify path by path; command completion or an arithmetic tally is not extraction evidence |
| **Approve-with-conditions** | B-119 `Answered` transition | Disposition every child, compute D-204 weakest-child Resolution, then obtain independent verification |
| **Defer** | B-115 propagation, graph repair, packet retirement, DoR, work order and construction | Separate governed units after the product-scope D-54 pass |
| **Reject** | Premature `[V1→V2]`; calling all remainder files authoritative; treating `hook-rebuild`/merge as proof; shared-matcher edit without D-231 amendment; physical replay keys in Fn Specs; `Applied`/`Verified` on Lane A's answer commit | Apply the corrected plan above |

## Lane B final planning delta — exact manifest confirmed, execution still deferred, 2026-09-20

### Authority and scope update

The supplied Lane A record now confirms that the Judge selected the exact manifest paths already
listed above. `B119-GRAPH-SCOPE` is therefore **Judge-confirmed but unapplied**, rather than awaiting
path confirmation. The current request remains planning-only: no Register, canonical document,
script, fixture, graph artifact, work packet, lane state or construction file is changed here.

The exact manifest is a fact; its changing numerical size is not the authority. Lane A should cite
the paths or the Register identity that owns them, not restate a tally in derived tiers.

### Final corrections to Lane A's draft

1. **Do not send every retained exclusion to V2.** The Judge selected a V2-target backlog for
   automated WordPress and `FR-10`/`T11`. D-239 keeps external GRC, `T6`, Line 3, full state-machine
   execution and related held scope outside V1, but that alone does not assign every item to V2.
   Preserve each existing held/deferred disposition unless a separate Judge act names its target.
2. **Keep `[V1]` and add a current-scope note.** `FR-10`, `US-10`, `AC-16`, `AC-16a`,
   `TR-API-04` and the publication Fn Spec retain their V1 origin. The new decision records that
   their runtime delivery behaviour is outside the selected V1 slice and targeted to a future V2;
   `[V1→V2]` remains unavailable until V2 exists and materially revises them.
3. **Add the reverse-reference fixture.** A manifest path later cited by a live or canonical source
   must cease qualifying for coverage exclusion. The test must fail closed and name the new incoming
   reference; silently retaining the exclusion would make the manifest a future blind spot.
4. **Treat the current remainder as provisional.** Replacing the basename-substring test with an
   exact normalized source-path relationship may reveal more missing sources. Classify the resulting
   paths after the stronger check runs; do not preserve the present remainder as a target count.
5. **Use local evidence for the graph controls.** CI intentionally skips graph coverage and
   docs-drift. Fixtures can run in CI, but only the full local graph plus full-history check proves
   the manifest, extraction and drift behavior together.
6. **Condition the one-rebuild optimization.** One final rebuild and curated re-merge is valid when
   the product act, B-115 propagation and D-231 amendment finish in one uninterrupted authorized
   Lane A run, as D-239's prior same-round propagation did. If work stops between turns, rebuild,
   re-merge and verify at that turn boundary; do not hand the next consumer a knowingly stale graph.
7. **Make the B-119 answer describe the actual final state.** If B-115 has landed before Lane A
   writes the answer, do not call it open. Give every child a disposition and compute the header
   under D-204: absent is weaker than provisional, and provisional `Applied` is weaker than terminal
   `Deferred`. Do not preselect `Deferred`; it is terminal and requires `Follow-up-Tier`. A later
   independent act may establish `Verified` when all applicable evidence exists.

### Minimal parent-first implementation plan — for Lane A, not executed here

| Order | Governed unit | Completion evidence |
|---:|---|---|
| 1 | **Product-scope act and D-54 propagation** | Register ID assigned at application; D-239 amended only for LinkedIn `ManualReady`; `FR-10`/T11 and automated WordPress targeted to future V2; other exclusions retain their prior dispositions; Build Spec, Inventory, V1-SM06, Product Requirements Document tracking, publication Fn Spec, traceability, Panel A9 and Encyclopedia Entry 04 agree. |
| 2 | **B-115 Intent/Build/DevOps propagation** | Register and request-to-execution ownership sources agree; Lane B retains per-child xDD choice; no filesystem ownership or work order changes by implication. |
| 3 | **D-231 amendment and graph-control implementation** | One base governed-intent classifier plus exact coverage-only layer; normalized source-path evidence; manifest paths drift-visible; seven fixture obligations, including reverse reference, pass. |
| 4 | **Graph rebuild, curated re-merge and local verification** | Rebuild occurs after the last governed change in the run; curated fragments re-merge with no unexplained failure; every post-strengthening omission has a path-level disposition; docs-drift points to the final governed HEAD. |
| 5 | **Lane A answer in B-119** | Stable `B119-*` crosswalk, every child disposition, canonical commit evidence, `Status: Answered`, and the D-204 weakest-child Resolution; no self-verification claim. |
| 6 | **Independent review and authorization** | Reviewer verifies applied facts; DoR is complete; Judge selects one bounded V1-SM05 child and the Active lane through a fresh work order. |

### Guaranteed failure conditions and success tests

| Failure condition | Deterministic failure | Success test |
|---|---|---|
| Assign all D-239 exclusions to V2 | Creates target scope the Judge did not select | Only WordPress and `FR-10`/T11 carry the confirmed future-V2 target; every other item preserves its source disposition. |
| Static manifest with no reverse-reference guard | A newly authoritative journal remains invisible | Fixture inserts a live/canonical citation and proves the path returns to coverage. |
| Basename substring accepted as coverage | A mention can impersonate extraction | Coverage requires an exact normalized source-path relationship to a graph source/node. |
| Rely on CI for Graphify completion | CI has no graph/full-history inputs for the skipped checks | Full local suite runs against the rebuilt graph and complete history. |
| Delay one rebuild across separate turns | A later consumer reads stale governed intent | Rebuild at the final commit of one uninterrupted run or at every turn boundary. |
| Freeze a missing-file count in docs | Stronger detection immediately makes the record stale | Record classifications and paths; let the check print current totals. |
| Preselect `Deferred`, `Applied` or `Verified` before child disposition | Can close over provisional work or claim evidence that does not exist | Disposition every child, compute D-204's weakest state, and record independent verification separately. |

No repository evidence supports a literal claim that these documentation defects guarantee
bankruptcy. The operational high-stakes standard is narrower and testable: no unauthorized
publication, no fabricated scope target, no hidden graph source, no self-verification and no stale
intent handed to a construction lane.

### Final planning verdict

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | Exact coverage-only manifest and A/A/A Judge choices | Lane A Register application and in-file answer |
| **Approve** | Entry 04 impact, `[V1]` retention and NG-04 withdrawal | Product-scope D-54 pass |
| **Approve-with-conditions** | D-231 coverage-only layer | Exact source-path evidence, reverse-reference fixture and local verification |
| **Approve-with-conditions** | One final Graphify rebuild | Same uninterrupted Lane A run only; otherwise synchronize at each turn boundary |
| **Approve-with-conditions** | B-119 `Answered` transition | Disposition every child and compute D-204; do not preselect `Deferred` |
| **Defer** | All canonical edits, controls, graph rebuild, packet retirement, DoR, work order and construction | Lane A execution after this planning-only review |
| **Reject** | Sending all exclusions to V2; premature `[V1→V2]`; static manifest; basename-only proof; CI-only proof; stale graph across turns; fixed omission count; preselected or unearned Resolution | Use the minimal plan and success tests above |

## Lane B bridge plan — close setup by explicit transfer, then ready the V1 MMFs, 2026-09-20

### Clearer request

Decide how to close the `SETUP-SPIKE-000` planning namespace without claiming that unbuilt S2–S4
scope passed DoD; transfer every surviving behaviour to its one V1 or future owner; define and
complete V1-SM05/06 DoR and define their DoD before construction; disposition each handoff under
its own evidence; and state how branch/PR evidence relates to sprint completion. Keep Scrum plus MMF
as the governing vocabulary, with no construction in this round.

### Current evidence — what is and is not complete

| Scope | Repository state | Consequence |
|---|---|---|
| `SETUP-SPIKE-000/S0` and `/S1` | Completed and frozen with configuration/schema evidence | Retain as historical setup completion evidence. |
| `SETUP-SPIKE-000/S2` | `HELD` under D-171; fresh authorization absent | It has not met DoD and cannot be called completed. |
| `SETUP-SPIKE-000/S3` and `/S4` | Not started; open DoR/dependency items; no artifacts or tests | They have not met DoD and cannot be closed as implemented. |
| `V1-SM05` | Not selected; only DOR-R1 is checked; DOR-R2–R6 remain incomplete; implementation DoD is undefined | Build phase has not started for this MMF. |
| `V1-SM06` | Not selected; depends on V1-SM05 DoD; board/publication DoR open; implementation DoD undefined | It cannot start or be called ready. |
| Lane state | Lane A Active; Lane B Eligible | Lane B has no construction lock or work order. |
| Handoff channel | B-119 and other blocking entries remain Open | A namespace transition cannot bulk-close unrelated records. |

`D-240` already supplies the legal transition mechanism: a sprint closes when each committed MMF
passes DoD **or** receives an explicit Judge-approved removal/return. The second route can close the
setup namespace honestly, provided every unfinished behaviour has one named destination and no
implementation credit is transferred with it.

### Parent decision — how setup ends

| Choice | Decision | Result |
|---|---|---|
| **A — Close by behaviour-level transfer/removal (recommended)** | Preserve S0/S1 as completed; split S2–S4 behaviour into V1-SM05, V1-SM06 or a named held/future owner; Judge approves removal of the original unstarted/held packet scope; retire the setup packets only after every citation and behaviour has a destination. | `SETUP-SPIKE-000` can close as a setup programme. Nothing transferred is represented as built, tested or DoD-complete. |
| **B — Finish S2–S4 inside the setup namespace** | Keep S2 held and build S2, S3 and S4 before V1-SM05. | Delays the V1 MMFs and risks duplicating the same board/publication behaviours already selected for V1-SM06. Use only if the Judge wants the old scaffold sequence to remain executable. |
| **Reject — declare setup complete or close all handoffs in bulk** | Treat packet creation, deferral or movement as completed work. | Violates D-240 DoD/removal evidence and D-204 per-entry handoff disposition. |

### Normalized vocabulary

- **Programme Increment / PI:** not a governing repository object. D-241 retains Scrum and MMF;
  use **V1 release sequence**, **sprint/MMF work packet**, and **work order**. A future Judge act may
  adopt a defined PI concept, but analysis shorthand creates no new hierarchy.
- **DoR defined:** the checklist exists. **DoR complete:** every required row has current evidence.
  Only complete DoR permits Judge selection and a work order.
- **DoD defined:** completion and evidence criteria exist before build. **DoD complete:** the
  working behaviour, tests and required evidence satisfy those criteria after implementation.
- **PR/merge:** transport and review evidence. A pull request does not create DoR or DoD. If the
  release uses one final PR, each MMF still earns DoD on the working branch before its successor
  opens; the final merge proves release integration. If the Judge later selects MMF-sized PRs, each
  PR must meet the MMF's already-defined DoD before merge.
- **`[V1→V2]`:** a later-build revision marker, not a deferral or closure tool. V2 remains unopened.

### Behaviour transfer map for Choice A

| Setup behaviour | One destination | Required disposition |
|---|---|---|
| S2 Line/RACI and route context display needed by the core journey | V1-SM05 | Add to the existing packet's outcome, acceptance and evidence; do not import the held RPC/T6 implementation. |
| S2 security-invoker RPC, `T6`, blind pass, EmergencyBypass and return evidence | Existing held owner or a separately Judge-named future scope | Preserve `HELD`; do not infer V1-SM05, V1-SM06 or V2. |
| S3 board/filter visibility | V1-SM06 | Align with FR-08/CR-13 and the selected V1 boundary. |
| S3 `T6→T5` return analytics | Held with T6-dependent scope | Do not place in V1-SM06 while T6 remains outside V1. |
| S4 LinkedIn target-level `ManualReady` | V1-SM06 | Apply the Judge-selected carve-out and child behaviour contract. |
| S4 automated WordPress, retry, credentials and scheduler | Future V2-target backlog | Target only; no V2 opening, `[V1→V2]` marker, packet or construction authorization. |
| S4 `FR-10`/T11 live-URL confirm and `Published` promotion | Future V2-target backlog | Keep `[V1]` origin with a decision-cited current-scope note; no runtime inclusion in selected V1. |

No setup packet is retired until this map is canonical in the Register, Build Spec, Artifact
Inventory and affected work packets, with outgoing and incoming citations reconciled.

### Parent-first Lane A follow-up

1. **Record the transition act.** Select Choice A or B. For A, identify S0/S1 as completed,
   approve removal/transfer of each S2–S4 behaviour, preserve the held items, and state that transfer
   creates no implementation or DoD evidence.
2. **Apply the product-scope and D-54 pass.** Combine the already-selected LinkedIn `ManualReady`
   boundary and `FR-10` deferral with the setup transfer. Update Register, Build Spec and Artifact
   Inventory together; then Product Requirements Document tracking, V1 work packets, affected
   traceability/Fn Specs, Panel A9 and Encyclopedia Entry 04. Preserve the single Mermaid UML/data-
   flow source.
3. **Define the two MMF contracts without marking them ready.** Complete V1-SM05's outcome and DoD
   definition; finish DOR-R2–R6 evidence. Define V1-SM06's outcome, DoR and DoD now, while retaining
   its dependency on V1-SM05's completed DoD. Create no additional V1 sprint IDs unless a Judge act
   proves the two existing slots cannot contain the selected release scope.
4. **Apply B-115 separately.** Lane A owns intent, MMF and acceptance; Lane B owns authorized build
   refinement and xDD choice; Lane C owns delivery/workflow verification. Do not turn PI shorthand
   into a fourth governance layer.
5. **Disposition handoffs one by one.** Promote each surviving fact to its canonical owner, then
   apply the evidence-backed Resolution: `Applied` for canonical but independently unverified work;
   `Deferred` only for real future work with `Follow-up-Tier`; `Superseded` only when a named act
   overtakes it; `Withdrawn` only when the concern is false; `Verified` only after an independent
   actor confirms it. Compute multi-topic entries using D-204's weakest-child rule.
6. **Repair Graphify and verify locally.** Apply the confirmed manifest through the D-231 amendment,
   strengthen exact source-path evidence and the reverse-reference guard, rebuild after the final
   governed change in the run, re-merge curated fragments, and run the full local suite.
7. **Answer B-119 in place.** Cite the canonical commits and actual child dispositions, set
   `Status: Answered`, and compute its Resolution rather than preselecting one.
8. **Authorize construction last.** After independent review and complete V1-SM05 DoR, the Judge
   selects one bounded child, makes Lane B Active and issues a work order with defined DoD. The next
   MMF opens only after its predecessor meets DoD or receives a separate approved removal/return.

### Handoff closure layer

The move from setup planning into V1 work packets changes **where future scope is owned**; it does
not erase the transaction history. Open entries currently include unrelated verification,
configuration, audit and source-correction matters as well as B-115/B-117/B-118/B-119. Therefore:

1. build a per-entry child-disposition table from the existing files;
2. name the canonical promotion target and commit for each surviving fact;
3. name a `Follow-up-Tier` for each true deferral;
4. keep unrelated open findings outside the setup-transition act;
5. independently verify applied entries; and
6. archive or partition only after the existing entry reaches its evidence-backed disposition.

A work-packet link may own future build work, but it does not itself make the originating handoff
`Applied`, `Deferred` or `Verified`.

### Critical artifacts for construction and verification

| Artifact | Construction boundary | Verification boundary |
|---|---|---|
| Decision Register | Owns setup transfer, V1 scope and future-target decisions | Proves Judge authority and tier dispositions. |
| V1 Build Spec and Artifact Inventory | Own sequence, scope, files and defined DoD | Source-sweep and artifact/path review prove propagation. |
| S2–S4 and V1-SM05/06 work packets | Own per-MMF dependencies, DoR, DoD and evidence links | Checkbox evidence and terminal disposition prove readiness/completion; file existence does not. |
| Product Requirements Document and Fn Specs | Own outcome, behaviour, actors, refusal and acceptance | BDD-style examples and traceability show business intent without fixing implementation keys. |
| Technical Specs and UX Specs | Own technical and stack-specific UI contracts | Unit, integration, contract, accessibility and visual evidence derive here after authorization. |
| Storyboard Panel A9 / Mermaid UML and data flow | Own one visual source for normal, refusal and revision paths | Review proves `ManualReady`, article state and future `Published` remain distinct. |
| Encyclopedia sync ledger | Tracks affected conceptual entries, including Entry 04 | Hosted review/republish remains separate evidence. |
| Phase closure, work order and PR evidence | Own lane selection and bounded execution/promotion | Prove Active lane, accepted DoD and merge/release state separately. |

### Failure-to-success criteria

| Guaranteed failure | Why | Success criterion |
|---|---|---|
| Mark setup complete while S2–S4 stay held/not started with no removal act | Claims DoD without work or approved transfer | Every setup child is completed or explicitly removed/returned with one destination and evidence. |
| Mark all handoffs closed because build begins | Replaces per-entry facts with a phase narrative | Every entry carries its own D-204-compliant disposition and audit fields. |
| Move every loose end to V2 | Invents target scope and can hide V1 blockers | Only Judge-selected future items target V2; held/open items keep their actual owner. |
| Mark V1 packets DoR-complete because checklists exist | Confuses definition with evidence | Every DoR checkbox cites current completion evidence before selection. |
| Complete DoD on PR creation or merge alone | Git movement cannot prove working behaviour | DoD is defined before build and met by functionality, tests and evidence; PR/merge records review and promotion. |
| Open V1-SM06 before V1-SM05 DoD | Breaks the approved core-before-usable dependency | SM05 earns DoD or receives a separate approved removal/return first. |
| Use PI or `[V1→V2]` to force closure | Adds governance/version meaning without its creating act | Use existing Scrum/MMF packets and current-scope/future-target notes. |
| Rebuild Graphify before the last governed edit and hand off | The next lane consumes stale or incomplete intent | Final rebuild, curated re-merge, path-level coverage and local full-history checks precede handoff. |

### Setup-to-build verdict

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | Choice A: close setup through explicit behaviour transfer/removal | Judge transition act and D-54 propagation |
| **Approve** | S0/S1 retained as completed setup evidence | Register and Build Spec preservation |
| **Approve-with-conditions** | V1-SM05 then V1-SM06 | Complete/define DoR and DoD, independent review, selection and bounded work order |
| **Approve-with-conditions** | Handoff closure programme | Per-entry promotion, D-204 weakest-child computation and independent verification |
| **Approve-with-conditions** | PR as promotion evidence | DoD remains behaviour/test/evidence based and precedes successor opening |
| **Defer** | Construction, new V1 sprint IDs, V2 opening and packet retirement | Canonical transition, readiness evidence and Judge authorization |
| **Reject** | Bulk setup completion; bulk handoff closure; all exclusions to V2; premature `[V1→V2]`; checklist-as-DoR; PR-as-DoD; V1-SM06 before V1-SM05 | Use the transfer map and parent-first plan above |

## Lane B final review — first-PR setup for one selected MMF, 2026-09-20

### Clearer request

Prepare, without opening a branch or building software, the governed setup that will let a later
Judge-authorized pull request implement exactly one selected V1 MMF. Correct Lane A's setup-transfer
draft, identify the canonical and visual artifacts affected, define failure/success evidence, and
leave handoff closure dependent on per-entry disposition and independent verification.

### What is now settled

The supplied Lane A record reports Judge acceptance of Choice A and the six previously unmapped
destinations. Those acts are ready for canonical application by Lane A but remain unapplied in the
repository. S0/S1 remain completed evidence; S2 is held; S3/S4 and V1-SM05/06 have not earned DoD;
V1-SM05/06 are not selected; and no construction work order exists. This review therefore creates
no pull request, branch, work packet, template, canonical edit, Graphify change or implementation.

### Corrections required before Lane A applies the draft

| Gap in the supplied draft | Corrected planning rule | Success evidence |
|---|---|---|
| The publication entry says every retained exclusion is V2-target scope | Only automated WordPress and the Judge-selected `FR-10`/`T11` behaviour acquire the future-V2 target. External GRC, `T6`, Line 3 and full state-machine execution keep their current held/outside-V1 dispositions until a separate Judge act names a target. | The Register and every derived tier preserve one disposition per item; no blanket V2 sentence remains. |
| The S2 display destination names `FR-05` alone | Anchor V1-SM05's non-enforcing display to `FR-04`/`FR-05` plus `SEC-01` and the applicable RACI source. `FR-05` owns independence classification; `FR-04` owns accountable review. D-239 permits display/provenance only and does not reopen enforcement. | The packet, Product Requirements Document and traceability row distinguish display from enforcement and cite both behaviour owners. |
| The TC1 row says V1 uses no credentials or privileged write path | V1 `ManualReady` requires no external WordPress or LinkedIn channel credential. Do not pre-decide the application's database authorization/write mechanism. TC1, service-role isolation, `NFR-07` and `SEC-02` travel with the future automated publication path only to the extent their source scope does. | Fn/technical specs separate external-channel credentials from database authorization; the future build refines the latter without contradicting this decision. |
| The Edge Function/route-handler mismatch is called only a SPECS reconciliation item | The Register's D-143/D-146 ruling already selects the Supabase Edge Function. `SPECS-PUBLICATION.md` agrees. `Modular_PRD.md` still contains a route-handler recommendation alongside its corrected Q3 row, so Lane A must repair that internal Product PRD technical-candidate inconsistency. No new business decision is required. | The stale route-handler recommendation is corrected or marked historical; Product PRD and SPECS cite D-143/D-146 consistently. |
| Encyclopedia scope omits the actual review dependencies | Add Entry 05 to V1-SM05's review set with Entries 01/06, and Entry 04 to V1-SM06. The hosted artifact remains separately reviewed and republished. | Packet DoR cites 01/05/06 and 04 respectively; the sync ledger records affected status without claiming hosted publication. |
| Two decisions are drafted as one undifferentiated change | The publication boundary and setup transfer may land in one Lane A commit, but each needs its own Register identity, tier-applicability table and completion evidence. Boundary precedes transfer because several S4 destinations depend on it. | Source-sweep sees the Register update; reviewers can accept or reject either decision without changing the other's identity. |

### One-PR/one-MMF setup guide

No pull-request template exists today. The only `.github` documents are Lane A's workflow
specification and Lane C's CI workflow. The smallest reusable artifact is therefore a Lane A-owned
template at `.github/PULL_REQUEST_TEMPLATE/v1-mmf.md`. Creating that artifact is itself governed:
the Register, Build Spec and Artifact Inventory must create and sequence it in the same D-54 pass.

The template should require:

1. the selected MMF and work-packet ID, its Register authorization and current Active lane;
2. one bounded scope statement, explicit exclusions and affected paths;
3. links to every satisfied DoR item and the DoD agreed before construction;
4. acceptance, refusal, replay/idempotency and persistence evidence relevant to that MMF;
5. typecheck, lint, tests, consistency checks and any local-only Graphify evidence;
6. schema/migration impact, rollback or safe-failure evidence, and secret-handling impact;
7. handoff entries raised or closed, lane-crossing justification when applicable, and the
   independent reviewer/Judge acceptance still required after merge.

For this first setup, **one PR maps to one selected MMF packet**. If the packet cannot fit one
reviewable PR, Lane A must split and re-authorize it before construction; a child PR cannot be
reported as the whole MMF's DoD. The template must not hard-code check totals, omission counts,
commit hashes or a current sprint ID. CI already runs on pull requests, but its skipped local-only
checks mean a green hosted run does not replace the full local evidence contract.

An automated PR-body validator or workflow is a separate enhancement. It would require a defined
machine contract and Lane C work under `.github/workflows/`; the current setup should not imply that
automation exists. The first safe step is the governed reusable template and evidence checklist.

### Artifact and visual impact

| Surface | Planned treatment |
|---|---|
| `Modular_PRD.md` | Update §8 tracking and affected scope notes; correct the stale route-handler recommendation under D-143/D-146; add the SM05 display anchors without enabling enforcement. |
| Storyboard / story panels | Keep Panel A9 as the single publication-flow Mermaid source. Annotate `ManualReady`, article state and future `Published`; do not redraw duplicate diagrams. |
| Fn Spec UML/data flow | Show the selected MMF's inputs, decisions, persistence, refusal and replay evidence. Keep physical keys and framework choices in SPECS. |
| Technical SPECS | Preserve Edge Function as the standing future automated-publication choice; refine database authorization only when that build is authorized. |
| Encyclopedia | Flag Entries 01/05/06 for SM05 and Entry 04 for SM06; hosted review/republish remains separate evidence. |
| Cross-references | Reconcile Register, Build Spec, Inventory, packets, traceability, Fn Specs, Panel A9 and the new PR template by identity rather than copied counts. |

### Parent-first implementation plan for Lane A — not executed here

| Order | Parent or dependent unit | Completion criterion |
|---:|---|---|
| 1 | **Publication-boundary Register act** | Applies the narrow `ManualReady`/future-WordPress decision, preserves existing dispositions for all other exclusions, and assigns its own Register ID. |
| 2 | **Setup-transfer Register act** | Transfers every S2-S4 behaviour to one named owner, uses the corrected FR-04/FR-05 and credential language, and assigns a separate Register ID. Depends on 1. |
| 3 | **D-54 propagation** | Register, Build Spec, Inventory, Product Requirements Document §8, packets, traceability, Fn Specs, Panel A9 and Encyclopedia ledger agree; frozen sources remain unchanged. Depends on 1-2. |
| 4 | **MMF readiness contracts** | V1-SM05/06 DoD is defined; SM05 DOR-R2-R6 carries current evidence; SM06 remains dependent on SM05 DoD; packet retirement uses D-240 rather than implied completion. Depends on 3. |
| 5 | **First-PR template decision and artifact** | D-54 records the new `.github/PULL_REQUEST_TEMPLATE/v1-mmf.md`; the template contains the evidence fields above and selects nothing by itself. Depends on 3-4. |
| 6 | **B-115 and D-231 units** | Intent/Build/DevOps ownership and exact graph-coverage controls are applied as their own governed units, including the reverse-reference fixture. Depends on the relevant canonical sources from 3. |
| 7 | **Graph synchronization** | After the last governed commit in the uninterrupted run, rebuild extracted Graphify content, re-merge curated fragments, classify every remaining path and run the full local suite. Depends on 3 and 6. |
| 8 | **Handoff lifecycle** | B-115/B-117/B-118/B-119 receive per-child D-204 dispositions and evidence; unrelated open entries remain outside this transition; B-119's header uses its computed weakest child. Depends on 3-7. |
| 9 | **Independent review and later execution selection** | A reviewer verifies the canonical facts; the Judge then selects exactly one ready MMF, makes the construction lane Active and issues its bounded work order. Only then may the first PR be opened. |

### Failure-to-success tests

| Guaranteed failure | Observable success criterion |
|---|---|
| A PR template silently becomes build authorization | Template names a pre-existing Register act, selected packet, Active lane and work order; an empty template authorizes nothing. |
| Merge is treated as MMF completion | DoD evidence proves behaviour, persistence, failure paths and tests; merge is recorded only as review/promotion evidence. |
| Every held item is relabelled V2 | Only explicitly selected WordPress and `FR-10`/`T11` scope carries that target; all other source dispositions remain visible. |
| V1 `ManualReady` is declared to need no privileged database mechanism | The plan excludes external channel credentials and leaves database authorization to technical refinement. |
| The Product PRD continues to recommend a route handler while the Register selects Edge Function | D-143/D-146 is reflected consistently in the Product PRD technical candidate and publication SPECS. |
| A child implementation is called the whole MMF | The selected packet fits one PR or is formally split before execution; each unit keeps its own DoD and status. |
| Hosted CI is treated as full Graphify proof | The PR links the final local graph-coverage, docs-drift and source-sweep evidence after the governed rebuild. |
| Handoffs are bulk-closed when setup closes | Each entry has its own promotion target, commit evidence, weakest-child Resolution and independent verification state. |

There is no repository evidence that these documentation defects literally guarantee personal
bankruptcy. The defensible high-stakes standard is deterministic: no unselected scope, no missing
behaviour destination, no false DoD, no stale technical recommendation, no hidden graph source and
no construction without a selected packet and evidence contract.

### Final verdict

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | Choice A, all six destination decisions, S0/S1 evidence and one-PR/one-MMF intent | Lane A canonical decision application |
| **Approve-with-conditions** | Publication and setup-transfer drafts | Narrow V2 scope; correct FR-04/FR-05, credentials and D-143/D-146 wording before D-54 propagation |
| **Approve-with-conditions** | First-PR setup guide | Create it as a governed Lane A template; it selects no MMF and proves no DoD |
| **Approve-with-conditions** | Storyboard/UML/data-flow/Encyclopedia propagation | Reuse Panel A9; update Entries 01/04/05/06; preserve Fn/SPECS separation |
| **Approve-with-conditions** | Handoff closure and Graphify synchronization | Per-entry D-204 evidence, independent review, then final rebuild/re-merge and full local checks |
| **Defer** | PR automation, branch creation, work order, construction, V2 opening and packet retirement | After canonical propagation, complete DoR/defined DoD and Judge selection |
| **Reject** | Blanket V2 assignment; no-privileged-write claim; SPECS-only handling of the route-handler conflict; PR-as-authorization; merge-as-DoD; bulk handoff closure | Apply the corrected parent-first plan |

## Lane B review of Lane A worklog — canonicalize accepted intent, preserve per-entry closure, 2026-09-20

### Clearer request

Review Lane A's no-edit audit as a delta to the existing B-119 plan. Confirm which findings are
correct, repair its handoff-lifecycle and authority wording, resolve questions already answered in
B-119, and leave Lane A one dependency-ordered implementation plan. Do not open a PR, select an MMF,
change canonical sources or rebuild Graphify in this review.

### Findings accepted, corrected or narrowed

| Lane A finding | Lane B disposition | Required wording or action |
|---|---|---|
| Publication-boundary and setup-transfer acts are absent from the Register | **Correct operational blocker, with one qualification.** The Judge acts exist as accepted conversation intent and are recorded in B-119; they are not yet canonical execution inputs. | Lane A assigns two Register identities, boundary first and transfer second, before derived propagation. Do not describe the Judge acts as nonexistent. |
| “Decision-tree decision” is ambiguous | **Correct.** | Name the `publication-boundary act` and `setup-transfer act`; do not reuse the B-083 routing label. |
| `Modular_PRD.md` contains conflicting route-handler and Edge Function statements | **Correct.** D-143/D-146 already decide Edge Function; SPECS already agrees. | Correct or mark the old route-handler recommendation historical in the Product PRD technical-candidate material. No new Judge choice is needed. |
| V1-SM05 anchors and Encyclopedia review set are incomplete | **Correct.** | Add `FR-04`/`FR-05`, `SEC-01` and the applicable RACI source for display/provenance only; add Entry 05 beside Entries 01/06. |
| SM05/SM06 DoD is not defined | **Correct.** | Define and review both DoD contracts before a work order. DoD need not be completed before the reusable PR template is created; it must be defined so the template can reference it. |
| The four handoffs close together or not at all | **Reject.** D-101/D-102/D-204 lifecycle is per entry. A programme view may expose dependencies but cannot become a second status owner. | Update each entry in place. B-115, B-117, B-118 and B-119 may reach terminal disposition independently when their own weakest child and verification evidence permit. |
| Every Lane A acknowledgement on the four entries is receipt-only | **Incorrect.** B-115 is receipt-only. B-117 contains several applied rounds. B-118 records D-236-D-240 as applied but not independently verified. B-119 has D-241 applied while its other parents remain open. | Preserve the child-level evidence; do not flatten all four entries to receipt-only or to Applied. |
| Lane B `Eligible` means it may build | **Correct failure risk.** | `Eligible` remains nomination only. Construction requires a DoR-complete selected MMF, defined DoD, Lane B Active and a bounded work order. |
| Graphify cannot answer operative-document questions | **Too broad.** It can answer covered portions, but the current semantic result is incomplete because operative sources are absent from coverage. | Treat graph queries as incomplete for this plan until D-231 is amended and local coverage passes; continue direct-source verification meanwhile. |

### Questions already answered — do not reopen

1. **PR-template order:** create the governed template after the MMF DoD contracts are **defined and
   reviewed**, and before any work order or construction. Waiting until DoD is completed would make
   the template arrive after the work it is meant to govern.
2. **Graph scope:** use the already Judge-confirmed `B119-GRAPH-SCOPE` exact manifest recorded in this
   entry. It remains unapplied and must be assigned a canonical Register identity; it does not need
   another content choice. Refer to the manifest by identity and paths rather than copying its
   changing count into derived documents.

### Corrected handoff dependency ledger

This is a commit-point planning view, not a second lifecycle record. Status and Resolution remain in
each originating entry.

| Entry | Evidence-backed state | Canonical promotion still required | Terminal condition |
|---|---|---|---|
| `B-115` | Open; Lane A receipt only | Register plus `docs/README.md` request-to-execution map; Build/work-order and Lane C assistance owners named in B-115; change shared lane instructions only where the accepted rule actually changes them | Substantive Lane A answer, applied commit evidence and independent verification or an explicit terminal deferral |
| `B-117` | Open; multiple D-232-D-235 propagation rounds applied, with named residuals | Resolve its remaining phase-event, normal/revision visual and hosted-Encyclopedia children in their actual owners | Every child has a D-204 disposition; header Resolution is the weakest child; independent verification is separate |
| `B-118` | Open; D-236-D-240 packet applied, not independently verified | Preserve applied ranking/RACI facts and disposition the entry's explicitly retained residuals | Independent review plus terminal disposition of each surviving child; “possibly Applied” is too weak and too vague |
| `B-119` | Open; D-241 closes only its planning-label parent | Canonical publication boundary, setup transfer, exact graph-scope act, B-115 relationship, MMF readiness and PR-template creation | Each B119 child is dispositioned; header uses the computed weakest child; a separate actor verifies applicable evidence |

### Parent-first Lane A plan — final delta, no execution here

| Order | Unit | Depends on / success evidence |
|---:|---|---|
| 1 | Canonicalize the publication-boundary act, then the setup-transfer act | Two Register IDs and separate D-54 tier tables; accepted Judge intent preserved exactly |
| 2 | Run the combined D-54 propagation | Build Spec, Inventory, Product PRD, packets, traceability, Fn Specs, Panel A9 and Encyclopedia ledger agree; stale route-handler text and SM05 anchors are corrected |
| 3 | Define SM05/SM06 DoD and complete the applicable SM05 DoR evidence | DoD is reviewable before work; SM06 remains dependent on SM05 DoD; checkboxes cite evidence rather than existence |
| 4 | Govern and create the one-MMF PR template | Created after DoD definition and before execution; template authorizes nothing and references one selected packet when instantiated |
| 5 | Apply B-115 as its own governance unit | Intent/MMF, backlog refinement, Build governance and Lane C assistance have one canonical owner each; no filesystem authority moves by implication |
| 6 | Canonicalize and implement the accepted D-231/B119 graph-scope unit | Exact normalized source-path relationship and reverse-reference fixture pass; no second scope question is raised |
| 7 | Synchronize Graphify after the final governed edit | Extracted rebuild, curated re-merge and full local checks; coverage has no unexplained operative-source omission |
| 8 | Disposition B-115/B-117/B-118/B-119 individually | Each entry's own child table and evidence determine its Resolution; unrelated open entries remain untouched |
| 9 | Independently review, then authorize one MMF | Judge selects one DoR-complete packet, makes Lane B Active and issues one bounded work order before the first PR opens |

### Drift and graph conclusion

The current graph metadata is intentionally at governed intent `4a2519a`; later HEAD changes are
handoff-only. `docs-drift` therefore remains synchronized and no rebuild is due for this review.
The semantic query surfaces handoff and commit history but not the missing operative sources, which
confirms the coverage limitation rather than proving architectural completeness. The first governed
Register edit will create drift; rebuild only after the final governed edit in that Lane A run.

### Final verdict

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | Lane A findings on missing canonical acts, decision naming, stale Product PRD text, MMF anchors/DoD and `Eligible` semantics | Lane A steps 1-4 |
| **Approve-with-conditions** | Handoff dependency ledger | Keep lifecycle fields in each entry; preserve already-applied B-117/B-118 evidence |
| **Approve-with-conditions** | Graphify limitation and repair | Use the accepted manifest; canonicalize D-231 scope; rebuild after the final governed edit |
| **Defer** | PR opening, MMF selection, construction, V2 opening and packet retirement | Independent review and bounded Judge work order |
| **Reject** | Saying all four acknowledgements are receipt-only; making them close together; reopening the settled manifest choice; treating graph query output as complete; waiting until DoD completion to create the template | Apply the corrected delta above |

## Lane B review — lifecycle audit anchors, DoD review authority and atomic sequencing, 2026-09-20

### Clearer request

Review Lane A's corrected completion ledger without repeating B-119. Decide the two proposed follow-
ups from existing governance, correct lifecycle metadata and atomic-commit mistakes, restore the
missing B-117 visual child, and leave a final parent-first plan. Planning only: no canonical source,
handoff status, PR template, graph control or construction artifact is applied here.

### Disposition of Lane A's six new gaps

| Proposed gap | Lane B review | Draft fix / success test |
|---|---|---|
| B-088's existing defer is not reflected in its header | **Confirmed.** B-117 already records the exact safe transition and says no new decision is required. | Lane A gives B-088 its own handoff-only commit: `Status: Answered`, `Resolution: Deferred`, the dispositioned-not-independently-verified actor form, and a `Follow-up-Tier` that requires Parents 1–2 complete, full residual capacity for C-39 P1 plus independent review, and separate Judge authorization. No Graphify rebuild follows a handoff-only normalization. |
| The unrelated open entries have no owner | **Rejected as stated.** B-117 already groups and sequences them, and each originating entry remains its lifecycle owner. They lack completed dispositions, not owners. | Schedule a later B-117 disposition sweep. Keep B-071/B-088/B-095/B-096/B-102/B-104/B-106/B-116 outside B-119 and update each only from its own evidence. |
| B-117 residuals need an explicit child view | **Confirmed, but Lane A's draft omitted the normal/revision visual child.** | Add the corrected child table below inside B-117 when Lane A answers it; do not make B-119 a second status owner. |
| `Verified-At-Commit` is stale on all four entries | **Rejected as a blanket claim.** D-214 says this field names the existing commit whose content was read when the record was written. It is historical audit evidence, not the disposition commit and not a pointer that follows HEAD. | Refresh it only when actually writing a new disposition or verification, to the then-existing commit that was read. Never cite the commit being authored; that commit is derived from history. Existing values remain valid for their recorded observations. |
| The DoD reviewer is unnamed | **Resolvable from B-115; no new governance choice is needed.** | Lane A translates and records the DoD from accepted intent; Lane B reviews build feasibility, testability and evidence usability as the independent construction consumer; the Judge accepts the business outcome and acceptance boundary. Lane C reviews only any named delivery/operability evidence contract. None of these reviews selects the MMF or authorizes construction. |
| Three Register acts should share one commit | **Reject the forced bundle.** Boundary and transfer are dependent Product/setup decisions; graph scope is an independent control unit touching D-231 and executable checks. | Boundary then transfer may share one D-54 commit while keeping separate IDs/tier tables. Land graph scope and its control implementation in a separate atomic commit. One Graphify rebuild may follow all governed commits only when they land in one uninterrupted Lane A run. |

### Corrected B-117 child table

The following belongs in B-117's own substantive answer. Child states shown here are planning
candidates and do not change its header.

| Child | Canonical owner / next action | Terminal evidence |
|---|---|---|
| `B117-R45` phase-event vocabulary | Register plus the crosswalk/Fn Spec/traceability owners that use the events | Canonical names propagated and independently checked against phase-selection behaviour |
| Two D-238 candidate role IDs | Register and the role/RACI/crosswalk catalogs; add stored/API compatibility only if implementation identifiers are affected | Final IDs selected, every current reference classified, no silent identity collapse |
| Complex-Series milestones | Build Spec/work packet after Judge acceptance; otherwise `Deferred` with its exact return tier | Milestone children and evidence defined, or terminal deferral with an owner and return condition |
| Normal/revision storyboard, UML and data flow | Existing storyboard Mermaid owner, with Fn Spec references rather than duplicate diagrams | Normal and revision paths show selection, task/evidence, refusal/replay and no unauthorized publication/state change |
| Hosted Encyclopedia comparison/republish | `ENCYCLOPEDIA-SYNC.md` ledger plus the separate hosted-artifact act | Entries 01/05/06 compared and republished, or explicitly deferred without claiming hosted sync |
| Applied D-232-D-235 propagation | Independent reviewer | Review names the exact commit and distinguishes applied facts from the residual children above |

B-118's D-236-D-240 application remains separately reviewable; do not restate it as merely
“possibly Applied.” B-110 is already `Answered / Applied` and belongs to B-117's later verification
sweep, not the B-119 setup transition.

### Answers to Lane A's questions

1. **DoD review:** Lane B reviews construction feasibility and evidence/testability; the Judge
   accepts the business outcome and acceptance boundary; Lane A records both. The PR template is
   created after these DoD reviews and before any work order. Lane C participates only for a named
   delivery or operational evidence contract.
2. **B-088 timing:** apply its already-decided header normalization early as its own handoff-only
   commit. Do not mix it into the first governed D-54 commit or wait for B-119 closure.

### Final parent-first plan — replaces only the affected ordering

| Order | Atomic unit | Success evidence |
|---:|---|---|
| 0 | B-088 lifecycle normalization, handoff-only | Exact Deferred return condition; valid audit actor/read-commit fields; no canonical or Graphify change |
| 1 | Publication boundary then setup transfer | Two Register IDs/tier tables; one dependency-ordered D-54 Product/setup pass |
| 2 | Product/setup propagation and MMF contracts | Product PRD route-handler correction, SM05 anchors, Entries 01/05/06 and 04, defined/reviewed DoD, evidence-backed DoR |
| 3 | One-MMF PR template | Governed artifact created after DoD review and before work-order selection; no authorization implied |
| 4 | B-115 governance unit | Intent, Build and DevOps responsibilities promoted to their existing canonical owners |
| 5 | D-231/B119 graph-scope control unit | Separate Register identity and atomic control/fixture change using the accepted manifest |
| 6 | Graphify synchronization | Rebuild and curated re-merge after the last governed commit; local coverage/drift/source checks run against complete history |
| 7 | Per-entry lifecycle sweep | B-117 child table applied in B-117; B-118 and B-110 independently reviewed; unrelated entries handled under B-117, not B-119 |
| 8 | MMF selection and execution | Independent readiness review, Judge selection, Lane B Active and one bounded work order before a PR opens |

### Drift and failure criteria

The graph remains synchronized to governed intent because all commits since its analyzed head are
handoff-only. This review does not trigger a rebuild. The first governed edit does.

| Guaranteed failure | Success criterion |
|---|---|
| `Verified-At-Commit` is rewritten to the commit currently being authored | It names the existing commit actually read; the editing commit remains derivable from history |
| B-088 is bundled into Product propagation | Its header-only lifecycle commit stands alone and changes no canonical tier |
| Three unrelated decisions share one inseparable commit | Product boundary/transfer and graph-control units are independently reviewable and revertible |
| B-117 closes without the normal/revision visual contract | Its child table includes storyboard/UML/data-flow evidence or an explicit terminal deferral |
| Lane B feasibility review is treated as business acceptance | Judge acceptance and Lane B feasibility are separately recorded; neither starts construction |
| Open entries are described as ownerless | B-117 provides the programme order while each entry remains the sole lifecycle record |

### Final verdict

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | Early B-088 Answered/Deferred normalization | Lane A handoff-only commit with exact return condition |
| **Approve** | DoD review split: Lane B feasibility, Judge acceptance, Lane A record | Before PR-template creation and work-order selection |
| **Approve-with-conditions** | B-117 child table | Restore visual/data-flow child; update B-117 itself; independent verification required |
| **Approve-with-conditions** | Register and Graphify sequence | Boundary/transfer first; D-231 graph control as a separate atomic unit; rebuild last |
| **Defer** | Other open-entry dispositions, template creation, PR, construction and V2 opening | Their named B-117/B-119 owners and later authorization |
| **Reject** | Blanket `Verified-At-Commit` refresh; ownerless-entry claim; three-ID forced commit; omitting the visual child; treating feasibility review as acceptance | Apply the corrected plan above |

## Lane B review — D-183 provenance, B-115 parent order and named graph acceptance, 2026-09-20

### Clearer request

Check Lane A's latest planning audit against D-183 and the existing B-119 evidence. Separate a vague
approval slogan from the explicit Judge choices already reported, put B-115 before the contracts
that depend on it, preserve atomic decision units, and make the graph and visual acceptance criteria
unambiguous. No canonical edit, lifecycle transition, graph rebuild, PR or construction occurs here.

### Review of the five proposed gaps

| Lane A claim | Lane B disposition | Corrected rule |
|---|---|---|
| The generic “Judge Approved: decision-tree decision” phrase satisfies D-183 | **Reject.** It names no object, action, scope, exclusions or checkpoint. | Never use that slogan as authority. Use the exact direct Judge option selections, if Lane A has them in its conversation, and record them in the Register immediately. |
| A fresh Judge confirmation is always required before the Register acts | **Conditional, not automatic.** D-183 expressly recognizes direct chat authority during the pending-registration interval. B-119 records reported selections for `B119-URL`, `B119-GRAPH-SCOPE`, `B119-ANSWER`, Choice A and the six destinations. | If Lane A can cite the direct messages that made those exact selections, no duplicate approval ceremony is required. If it possesses only Lane B's handoff report, it must ask the Judge because a handoff cannot be sole proof. |
| Independent Lane B verification must precede registration | **Incorrect sequence.** | Direct Judge act → Lane A Register record and propagation → independent Lane B verification that the record/application matches the act. Independent review cannot create authority retrospectively. |
| B-115 must precede DoD review and the PR template | **Approve.** It owns the Intent/Build/DevOps responsibility split those artifacts consume. | Apply B-115 before defining/reviewing DoD and before creating the template. Product boundary/transfer decisions may be captured independently, but no execution-readiness artifact should consume the unpromoted B-115 draft. |
| Drift and graph acceptance are missing | **Already partly present, but make the handover explicit.** B-119 already says the first governed edit creates drift and names the exact coverage manifest. | Permit red docs-drift only inside the uninterrupted governed run; handover requires final rebuild/re-merge and green drift. Storyboard and traceability remain coverage-required and must not enter the coverage-only manifest. |

### D-183 capture matrix for Lane A

This is a normalization aid, not a new Judge act. Lane A must populate it only from the direct Judge
messages it actually received; it must not infer approval from this handoff.

| Object | Authorized action to record | Scope | Exclusions | Checkpoint |
|---|---|---|---|---|
| V1 publication boundary | Record target-level LinkedIn `ManualReady` for V1-SM06 and the selected `FR-10`/`T11` future-target disposition | Event/state separation, actor/trigger/replay/revision/refusal evidence, D-54 propagation | No article `Published` state, automated WordPress, V2 opening, external GRC, T6, Line 3 or full state-machine expansion by implication | Durable Register entry before dependent propagation; independent Lane B review afterward |
| Setup transfer | Record Choice A and every accepted S2-S4 destination under D-240 | S0/S1 retain completed evidence; unfinished behaviour moves to its named held, SM05, SM06 or explicitly approved future target | No DoD credit, packet retirement, PR, branch, lane transition, work order or construction | Separate Register identity after/with boundary parent; packet statuses change only from evidence |
| Graph coverage scope | Amend D-231 with the exact B119-GRAPH-SCOPE path manifest and a coverage-only policy | Exact paths; docs-drift remains inclusive; referenced/canonical journals remain required; stronger normalized source-path evidence and reverse-reference fixture | No wildcard journal exclusion, deletion, de-authorization, basename-only proof or CI-only completion claim | Separate atomic control unit; rebuild after the last governed edit; independent review after application |
| B-119 answer location | Lane A answers substantively inside this existing entry | Stable B119 topic aliases and per-child dispositions | No new A-series or substitute handoff; no self-verification | Header changes only when D-204 evidence supports the computed state |

Until each direct message is durably recorded, the precise phrase is: **“Judge approval received in
the current conversation for [the specific action], pending durable registration.”** After the
Register commit, cite its decision ID and commit. Do not call the resulting artifact approved unless
that artifact or immutable revision was itself approved.

### Two additional corrections

1. **B-088's compound return condition is valid only as one conjunctive condition.** Lane A's draft
   sentence is acceptable if copied exactly into `Follow-up-Tier` and later quoted exactly in the
   Return record. `Verified-At-Commit` should use the full existing SHA Lane A actually read and only
   after confirming B-088 did not change since that read.
2. **Panel A9 treatment is scope-dependent.** The publication-boundary propagation may annotate the
   existing Panel A9. That does not discharge B-117's separate normal/revision storyboard, UML and
   data-flow completion child. “Annotation, not a redraw” must not be generalized into cancelling
   that residual.

### Corrected parent-first order

| Order | Unit | Success evidence |
|---:|---|---|
| 0 | B-088 handoff-only normalization | Exact conjunctive return condition, disposition audit fields, terminal-return check green |
| 1 | D-183 provenance check, then B-115 governance act | Direct Judge messages cited or one bounded clarification requested; Intent/Build/DevOps ownership promoted before readiness artifacts consume it |
| 2 | Publication boundary, then setup transfer | Separate Register IDs and tier tables; one dependency-ordered D-54 Product/setup pass |
| 3 | Product propagation and SM05/SM06 DoD | Route-handler conflict, SM05 anchors and Encyclopedia flags corrected; Lane B feasibility review and Judge acceptance recorded separately |
| 4 | One-MMF PR template | Created after B-115 and DoD review, before selection/work order; grants no authority |
| 5 | D-231/B119 graph-scope control | Separate Register/control commit using the exact accepted manifest and required fixtures |
| 6 | Final Graphify synchronization | Rebuild and curated re-merge after all governed edits; graph coverage, docs-drift and source-sweep pass locally; storyboard and traceability are represented |
| 7 | Per-entry lifecycle sweep | B-117 visual child retained; each entry updated from its own evidence; no bulk closure |
| 8 | Independent review and one-MMF authorization | Lane B verifies recorded acts, then Judge selects one DoR-complete MMF, makes Lane B Active and issues the work order |

### Failure-to-success criteria

| Guaranteed failure | Observable success |
|---|---|
| Generic “Judge Approved” text is cited as authority | Register cites an exact direct message satisfying all D-183 fields |
| Lane B review is required before Lane A can record the Judge act | Registration happens first; Lane B independently compares the committed record with the act afterward |
| DoD/template is authored against unpromoted B-115 ownership | B-115 is canonical before either readiness artifact is finalized |
| Graph manifest removes the storyboard or traceability map | Both paths remain coverage-required and graph-coverage proves their source/path representation |
| Mid-run red drift is handed to another consumer | Red exists only during one uninterrupted run; final handover has rebuilt/re-merged graph and green local drift |
| Panel annotation is claimed as the complete normal/revision visual | B-117 retains separate completion evidence or an explicit terminal deferral for that child |

### Final verdict

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | B-115 before DoD review and PR-template creation | Lane A first governed parent unit |
| **Approve** | B-088 conjunctive return condition | Early handoff-only normalization, exact wording preserved |
| **Approve-with-conditions** | Existing reported Judge choices | D-183 direct-message evidence, immediate durable registration, then Lane B verification |
| **Approve-with-conditions** | Graph acceptance | Exact manifest; storyboard and traceability coverage required; final local drift green |
| **Defer** | PR, work order, construction, V2 opening and packet retirement | Canonical acts, readiness evidence and Judge selection |
| **Reject** | Generic approval slogan; mandatory duplicate approval when direct evidence exists; pre-registration verification; template before B-115; treating Panel A9 annotation as full visual closure | Apply the corrected sequence above |

## Lane B review — decision content settled, application checkpoint still deferred, 2026-09-20

### Clearer request

Reconcile Lane A's report of fresh direct Judge messages with D-183 and the planning-only guardrail.
State whether another business choice is needed, distinguish decision content from permission to
apply it, and choose a Graphify sequence that does not claim one rebuild while depending on an
earlier usable graph. Do not apply any header, Register, control, graph or construction change.

### Authority conclusion

Lane A reports that it now holds the Judge's direct, specific messages for the publication boundary,
Choice-A setup transfer and exact graph-scope manifest. That resolves the **content/provenance
question** for the current Lane A session. No additional business choice is needed.

The same report states the checkpoint is **planning only** and that no Register/header/graph action
is authorized. Therefore it does not yet authorize canonical application. The correct distinction is:

| Fact | State now | Next evidence |
|---|---|---|
| Decision content | Judge-confirmed in Lane A's direct conversation | Preserve the exact messages and D-183 fields |
| Durable authority record | Absent; newest Register entry remains D-241 | A later explicit Lane A application instruction, then assigned Register IDs |
| Application | Not authorized by this planning-only round | D-54 commits and bounded control commit in an authorized Lane A run |
| Independent verification | Cannot exist before application | Lane B compares the committed record/application with the direct Judge messages afterward |

Merely pasting Lane B's summary into a later session is still second-hand evidence. A later Judge
message may either quote the exact decisions and authorize their application, or instruct Lane A to
apply the already-confirmed decisions from its retained conversation. Until then, use **“Judge
decision content confirmed in the current conversation; canonical application not yet authorized.”**

### Graph-order correction

Lane A's proposed order moves D-231 ahead of Product propagation so later steps can read a usable
graph, while retaining one rebuild at the end. Both cannot be true:

- amending the matcher/control does not populate missing semantic sources;
- storyboard and traceability become usable only after rebuild and curated re-merge; and
- later Product/packet edits make that early graph stale again.

Two coherent choices exist:

| Sequence | Cost and consequence |
|---|---|
| **One final rebuild — recommended** | Use direct authoritative sources during propagation. Apply B-115, boundary/transfer, Product/MMF/template work, then the separate D-231 unit; rebuild and re-merge once after the last governed edit. |
| **Semantic graph first** | Apply D-231, rebuild/re-merge/check immediately, use the repaired graph during later work, then rebuild/re-merge/check again after Product propagation. Two synchronization cycles are required. |

The current plan does not show a need that justifies the extra cycle. Direct source review remains
mandatory even after coverage passes, so the one-final-rebuild sequence is simpler and equally safe.
At any pause after a governed edit, synchronize before handover; that pause converts the work into a
new run boundary and ends the one-rebuild optimization.

### Corrections retained from Lane A

1. B-115 precedes DoD review and PR-template creation.
2. B-088's planned terminal condition remains one exact conjunctive sentence, but its header stays
   unchanged in this planning-only round.
3. Storyboard and traceability remain coverage-required; the coverage-only manifest does not contain
   them.
4. Panel A9 may receive the publication annotation, while B-117 retains its distinct full normal/
   revision storyboard, UML and data-flow child.
5. A later Lane A session must receive durable direct Judge text or an explicit apply instruction;
   B-119 cannot substitute for that provenance.

### Final parent-first plan for the next authorized Lane A run

| Order | Atomic unit | Success evidence |
|---:|---|---|
| 0 | Confirm the execution checkpoint | Judge explicitly authorizes Lane A to apply the already-settled decisions; exact D-183 source retained |
| 1 | B-088 normalization, handoff-only | Answered/Deferred header, exact return condition and valid read-commit audit anchor |
| 2 | B-115 governance act | Intent/Build/DevOps owners canonical before readiness artifacts consume them |
| 3 | Publication boundary then setup transfer | Two Register IDs/tier tables and one dependency-ordered D-54 Product/setup pass |
| 4 | Product/MMF propagation and DoD review | Product PRD, packets, traceability, storyboard and Encyclopedia agree; Lane B feasibility and Judge acceptance remain distinct |
| 5 | One-MMF PR template | Governed artifact created after B-115 and DoD review; no work authorization implied |
| 6 | D-231/B119 graph-scope unit | Separate atomic Register/control/fixture change using the exact manifest |
| 7 | Final graph synchronization | Rebuild, curated re-merge and full local checks after the last governed edit; coverage, drift and source evidence pass |
| 8 | Per-entry lifecycle and independent review | Each entry computes its own state; Lane B verifies application; only then may the Judge select one MMF and issue a work order |

### Failure-to-success criteria

| Guaranteed failure | Observable success |
|---|---|
| “Planning only” is treated as permission to mutate canonical files | A later message explicitly authorizes the Lane A application checkpoint |
| Decision content is sent back for another business choice | Existing direct Judge choices are retained; only execution authorization remains |
| D-231 moves early but graph rebuild remains late | Either keep D-231 late for one rebuild, or perform both required synchronization cycles |
| Early graph is handed over after later Product edits | Every run boundary has green drift against the last governed commit |
| Coverage PASS is treated as semantic correctness | Direct source review and independent verification remain required after path representation passes |

### Final verdict

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | Publication, transfer and graph-scope decision content | Preserve as settled Judge content; no new business choice |
| **Approve** | B-115 as readiness parent | First governed parent after execution authorization |
| **Approve-with-conditions** | D-183 application | Explicit future apply checkpoint, durable Register record, then Lane B verification |
| **Approve-with-conditions** | Graph repair | Keep D-231 late for one rebuild, or pay two complete sync cycles if moved early |
| **Defer** | B-088 header, Register acts, template, graph changes, PR, work order and construction | Planning-only guardrail; next authorized Lane A run |
| **Reject** | Treating planning confirmation as apply authority; asking the same business choices again; early graph scope with only a late rebuild | Use the coherent sequence above |

## Lane B decision packet — from setup completion to a first-MMF PR, 2026-09-20

### Clearer request

Give the Judge a parent-first Accept/Reject table and exact draft wording for the two acts that are
still needed: first, authorize Lane A to update governance, specifications, readiness artifacts and
Graphify controls; later, after independent review, select one MMF and authorize Lane B to construct
it through a pull request. Identify the artifacts that construction and verification will consume,
the lifecycle evidence needed to close each handoff, and the failure conditions. This section is a
plan only. It changes no canonical tier, header, graph, lane state, work order, branch or pull
request.

### Current completion boundary

| Topic | State | Consequence |
|---|---|---|
| Planning method and MMF identities | `D-241` is applied: Scrum and the existing MMF identities stand; SAFe/Lean remain explanatory analogies | No further methodology decision is needed |
| Publication, setup-transfer and graph-scope content | The Judge's direct choices are reported as settled in Lane A's current conversation | Do not ask the business questions again; preserve the direct messages for `D-183` registration |
| Canonical application | Not authorized by the planning-only checkpoint; the Register still ends at `D-241` | Lane A needs one explicit application instruction before editing the governed sources |
| Build readiness | `V1-SM05` and `V1-SM06` remain not selected; DoR/DoD evidence and independent review are incomplete | No branch, pull request, Lane B work order or construction is authorized |
| Handoff lifecycle | B-088, B-115, B-117, B-118 and B-119 remain independently governed records | Each closes or defers from its own evidence; no bulk closure |
| Graph | Governed intent remains analyzed at `4a2519a`; later commits are handoff-only | No rebuild is needed for this review; the first governed edit starts the synchronization duty |

The remaining uncertainty is therefore **authorization**, not business meaning. A generic
"Judge Approved" line is insufficient because it does not name the action, exclusions or stopping
checkpoint required by `D-183`.

### Judge decision table — parent first

| Order | Judge choice | Recommended disposition | What acceptance authorizes | What it does not authorize |
|---:|---|---|---|---|
| 1 | Apply the Lane A governance and documentation packet | **Accept** | B-088 normalization; B-115 promotion; durable registration of the settled publication, setup-transfer and graph-scope decisions; required `D-54` propagation | Application code, workflow code, a branch, pull request, work order, lane transition or build |
| 2 | Define and review the MMF readiness contracts and create the reusable one-MMF PR template | **Accept-with-conditions** | Define SM05/SM06 DoD, complete evidence-backed DoR fields, and create the governed template after B-115 is canonical | Claiming DoD, selecting an MMF, or treating the empty template as authority |
| 3 | Use the one-final-rebuild Graphify sequence | **Accept** | Apply the D-231/control unit after the Product/MMF updates, then rebuild, re-merge and run the full local checks once | Handing over stale governed docs; an interrupted run must synchronize before handover |
| 4 | Close the related handoffs | **Defer** | Per-entry disposition after the applicable commits and independent review | Bulk closure from this plan or from one green consistency run |
| 5 | Start the first construction PR | **Defer** | Nothing now; later select exactly one DoR-complete MMF, make Lane B Active and issue one bounded work order | Inferring build authority from setup completion, file existence, the PR template or Lane B eligibility |
| 6 | Move unfinished scope to V2 or retire the setup packets | **Reject** | — | V2 opening, `[V1→V2]` marking, packet retirement and unearned DoD remain outside this transition |

### Draft Judge statement A — authorize Lane A's documentation/control pass

The following text is a **draft for the Judge to send directly to Lane A**. Its presence in B-119 is
not itself authority.

> Judge authorizes Lane A to apply the already-settled B-119 governance and documentation packet.
> In parent-first order: (1) normalize B-088 as its own handoff-only lifecycle commit using the
> exact conjunctive return condition; (2) apply B-115's Intent/Build/DevOps responsibility split;
> (3) assign separate Register identities to the accepted publication boundary and Choice-A setup
> transfer, then propagate each fact through every affected `D-54` tier; (4) align the Product PRD,
> traceability, Fn Specs, storyboard/UML/data-flow references, Encyclopedia ledger, Build Spec,
> Artifact Inventory and existing SM05/SM06 work packets without duplicating authority; (5) define
> and review the SM05/SM06 DoD contracts, complete only DoR fields supported by evidence, and create
> the governed reusable one-MMF pull-request template; (6) apply the accepted D-231 graph-scope
> manifest as a separate control/fixture unit; and (7) after the final governed edit, rebuild
> Graphify, re-merge curated fragments and run the complete local consistency suite. Lane A may
> commit and push these bounded units and must stop for independent Lane B review.
>
> Exclusions: no change to `app/`, `lib/`, `components/`, `supabase/`, `__tests__/` or Lane C's
> workflow surface; no build branch, pull request, work order, Lane B activation, application
> construction, V2 opening, packet retirement, earned DoD, deployment, hosted Encyclopedia
> publication, or bulk handoff closure. The application checkpoint ends when the documentation and
> controls are committed, pushed, synchronized and presented for independent review.

If the Judge accepts that statement, Lane A may record it using `D-183`'s pending-registration
phrase and then replace that phrase with the resulting Register IDs and immutable commits. Lane B's
later comparison verifies the application; it does not grant the authority.

### Lane A follow-up sequence after statement A

| Step | Lane A action | Required success evidence |
|---:|---|---|
| 1 | Normalize B-088 separately | Header/audit fields match its exact deferred return condition; terminal-return check passes |
| 2 | Apply B-115 | Intent, Build and DevOps responsibilities exist in their canonical owners before DoD or template work consumes them |
| 3 | Register publication boundary and setup transfer | Independent Register IDs, complete affected/unaffected tier tables and dependency-ordered `D-54` propagation |
| 4 | Align critical Product/MMF artifacts | `Modular_PRD`, traceability, Fn Specs, storyboard/UML/data flow, Encyclopedia ledger, Build Spec, Inventory and work packets express one boundary by identity |
| 5 | Establish readiness contracts | SM05/SM06 DoD is defined and reviewed; each DoR claim links to current evidence; SM06 remains dependent on SM05 DoD |
| 6 | Create the one-MMF PR template | Template requires Register act, selected packet, Active lane, work order, DoR evidence, verification evidence and exclusions; it selects nothing itself |
| 7 | Apply graph-scope control and synchronize | Exact accepted manifest and fixtures land atomically; final rebuild/re-merge leaves coverage, drift and source checks green |
| 8 | Return evidence in B-119 | Commit identities, affected tiers and residuals are recorded here; B-117/B-118 retain their separate residual children |

### Critical artifacts for construction and verification

| Artifact family | Construction use | Verification use |
|---|---|---|
| Decision Register | Supplies the authorized outcome, exclusions and checkpoints | Proves the implemented packet did not inherit wider authority |
| Build Spec and Artifact Inventory | Give build order, DoD and required file identities | Prove required artifacts exist and were not silently renamed or retired |
| Product PRD, Fn Specs and traceability | Define observable behaviour and requirement anchors | Supply acceptance cases, refusal paths and source-to-evidence links |
| Storyboard, UML and data flow | Define actor order, transitions and information movement | Expose reversed roles, missing revision paths and unsupported state changes |
| Encyclopedia sync ledger | Records which knowledge views are affected | Prevents a local document edit being mistaken for hosted publication |
| SM05/SM06 work packets | Hold per-MMF dependencies, DoR, DoD and evidence | Make readiness and completion evidence-based rather than filename-based |
| PR template | Carries the selected packet's evidence into review | Refuses a PR that lacks authority, work order, tests, exclusions or local-only checks |
| Graph controls and Graphify output | Provide navigable context after sources are authoritative | Detect missing representation and drift; they do not replace direct source review |
| Phase Closure and Lane B work order | Select the executing lane and bounded implementation unit | Prove that a valid PR came from an authorized run |

### Guaranteed failure and observable success

| Guaranteed failure | Why it fails | Observable success |
|---|---|---|
| Send only "Judge Approved" | `D-183` cannot identify object, action, exclusions or checkpoint | The direct message uses statement A or equivalent complete fields |
| Combine documentation authorization with build authorization | Construction can begin before readiness and independent review | Statement A stops at review; statement B below is a later act |
| Treat completed S0/S1 as completion of S2-S4 or V1 | Historical setup evidence cannot satisfy unfinished Product behaviour | S0/S1 remain evidence; every moved behaviour has one named destination and its own DoR/DoD |
| Create the template before B-115 and DoD definition | The template cannot name valid owners or completion evidence | B-115 and reviewed DoD precede template creation |
| Treat PR merge as DoD | Integration evidence cannot prove the Product outcome | Packet DoD is independently evaluated from acceptance and verification evidence |
| Close B-117/B-118/B-119 from one propagation commit | Their visual, RACI, lifecycle and review residuals are independent | Each entry has its own terminal disposition or explicit return condition |
| Amend graph scope without the final rebuild/re-merge | Controls and semantic graph disagree | Final analyzed governed head matches the last governed commit and local checks pass |
| Select SM05 while Lane A remains Active or no work order exists | Lane B has no commit authority or bounded unit | The later Judge act names the packet, immutable readiness commit, lane transition and work order |

### Draft Judge statement B — later construction checkpoint

This second statement is intentionally incomplete until the placeholders exist. It must not be sent
or inferred during the planning/application pass.

> Judge accepts the `V1-SM05` readiness packet at commit `<readiness-sha>`, including its defined
> DoD and independently reviewed DoR evidence. Judge selects `V1-SM05` as the one executable MMF,
> makes Lane B Active in the recorded phase boundary, and authorizes work order `<work-order-id>`
> with its named paths, exclusions, tests and stopping checkpoint. Lane B may create the named build
> branch and one pull request using the governed MMF template. This authorization does not include
> `V1-SM06`, V2, deployment, unrelated handoffs, new dependencies or changes outside Lane B's
> surface. Completion returns evidence for Judge acceptance; opening or merging the pull request
> does not itself satisfy the MMF DoD.

### Final verdict

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | Settled publication, setup-transfer and graph-scope content | Preserve direct Judge evidence; do not re-decide |
| **Approve** | Draft statement A and the parent-first Lane A sequence | Judge sends it directly in a future application checkpoint |
| **Approve-with-conditions** | Readiness contracts and one-MMF PR template | B-115 canonical, DoD reviewed, DoR evidence-linked; template grants no authority |
| **Approve-with-conditions** | One-final-rebuild Graphify plan | Uninterrupted run; synchronize at any earlier handover |
| **Defer** | Draft statement B, first PR and construction | Canonical application, green local checks, independent review and exact readiness commit |
| **Defer** | B-117/B-118/B-119 closure | Per-entry residual evidence and independent verification |
| **Reject** | Generic approval slogan, bulk closure, PR-as-DoD, setup completion as V1 completion, premature V2/packet retirement or implied build authority | Use the two-checkpoint model above |

## Lane A answer — Judge statement A applied, stopped for independent review, 2026-09-21

**Authority.** The Judge's 2026-09-20 instruction to apply the B-119 Lane A governance and documentation
packet (decision-table row 1, statement A), recorded in `D-242` under `D-183`. This session held B-119's
record of the settled publication, setup-transfer and graph-scope content, not the original direct
messages; the Judge directed that B-119's recorded content be used. Lane B's comparison of the recorded
acts with that content is still owed and is **not** claimed here.

### What landed, in parent-first order

| Order | Unit | Commit |
|---:|---|---|
| 0 | B-088 normalized to `Answered` / `Deferred`, handoff-only | `f511598545cdab55d60ca4f4344b0629aa9ed18e` |
| 1 | `D-242` — B-115's Intent/Build/DevOps split promoted to its canonical owners | `4eb469f3ac8e356059675ad38663632553ebddfb` |
| 2 | `D-243` publication boundary, then `D-244` setup transfer, with the `D-54` propagation | `92b871e8ab1a50b0cd185161b741ce73db562e5f` |
| 3 | `D-245` — SM05/SM06 DoD and DoR contracts defined; one-MMF PR template created | `1212fb3dd1ae4d8fba8f2112c9aafbd8467a6c35` |
| 4 | `D-246` — `D-231` amended: coverage-only manifest, exact source-path evidence, reverse-reference guard | `24e22df84c7e592362e9d931a9d711e44c6b1d1a` |
| 5 | Curated fragment, docs-layer restore tool, README and Register/Inventory record | `d6a84770fccba0e54f8454df2c9f65182c06546b` |
| 6 | B-115 answered `Applied` (handoff-only) | `6fa5ed0` |

Graphify was rebuilt once at `d6a8477`, after the last governed edit, then every mergeable fragment was
re-merged. `docs-drift` is synced at that head. The full local consistency run passes, and all negative
fixtures pass on a clean tree.

### Stable-topic dispositions

| Topic | Disposition | What remains |
|---|---|---|
| `B119-AUTH` | Applied (`D-241`) | — |
| `B119-NS` | Applied by `D-244`'s destination table | Independent verification |
| `B119-MANUALREADY` / publication boundary | Applied (`D-243`) | Independent verification; **three children open** — trigger and precondition, acting authority, revision behaviour — each needs a Judge-named fact before `V1-SM06` DoR |
| `B119-URL` | Applied (`D-243`, Choice A): `FR-10`/`T11` targeted to V2 with `[V1]` kept | Independent verification |
| `B119-GRAPH-SCOPE` | Applied (`D-246`) | Independent verification; coverage passing is path representation, not semantic currency |
| `B119-QA` | Applied (`D-242`; see B-115) | Lane B and Lane C consumer reads |
| `B119-ANSWER` | This section | — |

### The header stays `Open`, and why

Under the weakest-child rule (`D-204`) the header cannot be `Answered`: the three `ManualReady` children
above have no disposition, the independent verification of every applied topic is absent, and the hosted
Encyclopedia comparison is not done. **`Applied` on a whole entry with absent children would be a false
claim.**

### A finding this application surfaced

The graph had lost its docs layer at the 2026-09-17 rebuild (about 1800 nodes to about 480) and stayed
that way unnoticed, which is why `graph-coverage` showed a large backlog. It was restored **by id from the
2026-09-16 dated backup** with the new `docs/graph-fragments/restore-docs-layer.js`, not re-authored. The
restored descriptions are the backup's and may predate the documents. The pending semantic description fill
(`graphify update --fill-missing`) is unchanged and was not run: it needs an LLM backend and is not part
of statement A.

### Not done, by design

No branch, pull request, work order, Lane B activation, MMF selection, construction, V2 opening, packet
retirement, earned DoD, deployment or hosted Encyclopedia republish. **Judge statement B was not sent or
inferred.** `V1-SM05` and `V1-SM06` are not DoR-complete. B-117 (its normal/revision visual child, phase
events, role IDs, Complex-Series milestones, hosted Encyclopedia), B-118 and B-110 keep their own
lifecycle: their child tables and verification are **specified, not applied** here, and no entry was closed
in bulk. The unrelated open entries were not touched.

### Next, for the independent reviewer

1. Compare `D-242`–`D-246` and their application with the Judge's direct messages (`D-183` rule 6).
2. Give the DoD feasibility review (Lane B) for `V1-SM05` and `V1-SM06`; the Judge accepts the business
   outcome separately.
3. Read B-115's consumer questions (Lane B and Lane C).
4. Only then may the Judge, in a later act, select one DoR-complete MMF, make Lane B `Active` and issue a
   bounded work order.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | `D-242`–`D-246` and their propagation, applied and locally green | Phase 1 — independent Lane B verification against the Judge's direct messages |
| **Approve-with-conditions** | Readiness contracts and the PR template | Phase 1 — Lane B feasibility review and Judge acceptance; DoR still incomplete; template authorizes nothing |
| **Approve-with-conditions** | Graph coverage green | Phase 1 — path representation only; direct source review; semantic description fill remains pending |
| **Defer** | Three `ManualReady` children, hosted Encyclopedia review, B-117/B-118 child tables, MMF selection, Judge statement B, construction | Phase 1 — a Judge-named fact each, then per-entry evidence and a later bounded act |
| **Reject** | Closing B-119 or any sibling from this application; treating coverage PASS as semantic correctness; inferring build authority from the template or from Lane B `Eligible` | Keep per-entry lifecycle and the two-checkpoint model |

## Lane B independent review — Statement A is applied, but closure and MMF feasibility remain open, 2026-09-21

### Clearer request and boundary

Independently compare Lane A's `D-242`–`D-246` application with B-119, identify any fact that would
make setup closure or the first MMF fail, and give Lane A a parent-first correction plan with observable
success criteria. Review the Product PRD, Fn Specs, storyboard/UML/data-flow annotations, Encyclopedia
ledger, work packets and Graphify representation without authorizing construction. This section is that
planning-only review. It changes no canonical source, selects no MMF and grants no lane or build authority.

### Completion and lifecycle ledger

| Item | Independent finding | Lifecycle consequence |
|---|---|---|
| `D-242` / B-115 responsibility split | **Usable by Lane B.** Intent ownership, Build/xDD refinement and DevOps assistance are separated clearly enough for a future work order. | Lane B's consumer read is complete. B-115 remains `Applied`, not independently `Verified`, until its other required consumer review is recorded. |
| `D-243` publication boundary | **Applied as a narrow V1 amendment.** LinkedIn `ManualReady` is a target-level publication event; WordPress automation and `FR-10`/`T11` are only V2 targets. | The parent boundary is reviewable. Trigger/precondition, invoking authority and revision behaviour remain open and block `V1-SM06` DoR. |
| `D-244` destination table | **The behaviour destinations are explicit and avoid a blanket V2 move.** | The transfer map is usable, but the title's claim that `SETUP-SPIKE-000` “closes” is not accepted while `S2`–`S4` remain open/held and no packet is retired. |
| `D-245` readiness contracts | **The PR template is usable and grants no authority.** The DoR state is honestly incomplete. | The two DoD contracts are defined but not yet feasible as written; they require the boundary corrections below before Judge acceptance. |
| `D-246` graph scope/control | **Path representation is locally green.** The analyzed governed head is `d6a8477`, Graphify reports `stale: false`, and the repository consistency suite is green. | This proves source-path coverage, not semantic currency or portability. Those are separate open checks. |
| Product/Fn/traceability/storyboard cross-references | `Modular_PRD`, publication Fn Spec, traceability and Panel A9 carry the new boundary by reference or annotation. | B-117's one authoritative normal/revision visual and matching data flow remain open; an annotation is not that missing diagram contract. |
| Encyclopedia | The repository ledger flags the affected entries. | Hosted comparison and republish remain unperformed. The ledger is not publication evidence. |
| Handoff closure | B-088 is `Answered/Deferred`; B-115 is `Answered/Applied`; Statement A's canonical units exist. | B-117, B-118 and B-119 remain open under their own child conditions. One green run cannot close them in bulk. |

### Parent 1 — settle which V1 outcome is being promised

The frozen Project PRD/Charter success path requires the five-gate path, Chief Journalist approval and
then publication or LinkedIn readiness. `D-239` as amended by `D-243` permits the narrower
`ManualReady` event after a `business:T5` Chief Editorial Desk ranking/routing record and still excludes
workflow execution and Chief Journalist approval. Both statements can coexist only if the new event is
described as a limited V1 readiness outcome rather than the full frozen success scenario.

| Judge choice | Required wording and scope | Consequence | Lane B recommendation |
|---|---|---|---|
| **A — retain the accepted narrow V1 boundary** | `V1-SM05` records and displays the selected route, business-phase and operation evidence without claiming technical state-machine execution. `V1-SM06` adds board/audit visibility and the bounded LinkedIn `ManualReady` event. | `CR-19` and the full PRD success scenario remain only partially satisfied in V1; the work packets must say so. | **Accept.** It preserves `D-239`/`D-243`, avoids hidden scope growth and produces an honest first build. |
| **B — make V1 deliver the full frozen success scenario** | Amend `D-239`/`D-243` expressly to admit the five-gate execution and Chief Journalist approval needed before readiness. | Requires a larger workflow, evidence, schema, authorization and verification packet before either MMF can be selected. | **Defer.** Choose only by a new direct Judge act; Statement A does not authorize it. |

Until that choice is recorded, the phrases **“core end-to-end editorial flow”** in `V1-SM05` and
**“the full PRD success scenario becomes usable”** in `V1-SM06` are unsafe acceptance claims. Under
recommended Choice A, replace them with the bounded outcomes above; do not edit the frozen sources.

### Parent 2 — make setup transfer and setup closure say the same thing

`D-244` correctly says the transfer grants no DoD credit and retires no packet. Its title nevertheless
says the setup programme closes. `S2` stays `HELD`, `S3`/`S4` stay open/not started, and residual `T6`,
RPC, return-analytics and publication scope still has non-terminal ownership. A parent cannot close while
those children remain non-terminal.

| Judge choice | Required repair | Success criterion |
|---|---|---|
| **A — keep the setup root open while residual children remain** | Add a Register correction naming `D-244` a transfer map with closure pending; align its title, curated node and all closure statements. **Recommended.** | Every setup child remains visible with one current owner and disposition; no root or packet is called closed or retired. |
| **B — externalize every residual before closing the root** | Create one explicitly authorized future-scope owner for each held residual, then terminally defer/retire `S2`–`S4` without DoD credit before closing the root. | No behaviour or citation is ownerless; each child is terminal; the root closes only after those records land. |

Neither choice sends all exclusions to V2. Only the targets already named by `D-243`/`D-244` retain that
future target.

### Parent 3 — repair the SM05/SM06 readiness contracts before review

1. **Normalize namespaces.** The SM05 Behaviour DoD currently says work is recorded through `T1`–`T5`
   with append-only transitions. It must identify whether each item is a `business:T*` judgment record,
   a V1 `EG*` task/evidence record or a technical `transition:T*` state. Under Parent-1 Choice A it may
   display/record the former evidence; it may not silently promise technical transition execution.
2. **Limit the packet outcomes.** Replace SM05's end-to-end claim and SM06's full-success claim with the
   selected Parent-1 outcome. Keep SM06 dependent on SM05 DoD.
3. **Keep B-117 children visible.** The one normal/revision sequence, matching data flow, source-RACI
   separation and any Copy Edit precursor/accountability contract stay separate prerequisites. Panel A9's
   annotation does not discharge them.
4. **Add a data-feasibility refinement before a work order.** The existing append-only `publications`
   row has target, event, optional `provider_event_id`, content and actor fields, but no required content,
   routing or publication-scope revision identity. Its conditional provider-event key cannot by itself
   prove “one effective `ManualReady` per target and revision.” The revised DoR must require a named
   revision/scope identity, idempotency key, effective-event query and stale-revision refusal evidence.
5. **Review in the right order.** Judge accepts the bounded business outcome; Lane B reviews technical
   feasibility and evidence usability; Lane C reviews only a named delivery/operability contract. None of
   those reviews selects a packet.

### Parent 4 — draft answer for the three `ManualReady` children

The following is proposed decision text for Judge Accept/Reject. It is not a decision merely because it
appears here.

| Child | Proposed answer | Required evidence before DoR completes |
|---|---|---|
| Trigger and precondition | A qualifying request names the applicable route, current business/content revision, LinkedIn target and formatted content, and cites the completed `business:T5` Chief Editorial Desk ranking/routing record. No article-state transition or publication approval is inferred under Parent-1 Choice A. | Acceptance and refusal examples for missing/stale T5 evidence, wrong route/target, missing content and stale revision. |
| Acting authority | Keep the business source, human authorization and database executor separate. The application service performs the append; the Judge must name the product role allowed to request it. The T5 actor is not silently converted into publisher or approver. | Authorized and unauthorized actor cases, recorded actor provenance and least-privilege database path. |
| Revision behaviour | Retain every prior event. A relevant content, route, target or formatted-content revision makes the old event ineffective for the current revision; the new revision requires a new idempotent event. | Persistent revision/scope identity, uniqueness/idempotency proof, effective-current query and replay test. |

If the Judge instead requires Chief Journalist approval as a precondition, that is Parent-1 Choice B and
must amend `D-239`/`D-243`; it cannot be smuggled into a child row while the parent excludes it.

### Parent 5 — normalize Graphify semantics after the canonical repair

The graph is structurally synchronized for the governed commit, but restored descriptions still contain
older meanings. For example, the `FR-09` node still says approval triggers WordPress or `ManualReady`,
and `FR-10` still describes current live-URL promotion without the V2-target boundary. The curated
`D-243` node is current, so a query can return both old and new summaries.

Lane A should perform one bounded semantic refresh only after Parents 1–4 land. `--fill-missing` alone is
insufficient because the stale descriptions are populated. The refresh succeeds only when direct queries
show all of the following:

- `FR-09` distinguishes V1 LinkedIn `ManualReady` from future automated WordPress;
- `FR-10` says V2 target without opening V2 or changing its `[V1]` origin;
- the Build Spec result distinguishes business-phase, EG-task and technical-transition namespaces;
- `D-244` does not say the setup root is closed while a child is open or held.

The current portable-artifact check also fails on absolute paths and command-like labels. That does not
make the gitignored local graph stale, but it forbids a claim that the graph is portable/shareable.
Track local semantic currency and artifact portability as separate acceptance checks.

### Guaranteed failures and observable success

| Guaranteed failure | Why it fails | Observable success criterion |
|---|---|---|
| Close `SETUP-SPIKE-000` now | Non-terminal children and held residual scope contradict the parent closure rule. | Parent 2 choice is recorded and every child satisfies that choice. |
| Select SM05 from the current packet | DoR remains incomplete; its DoD overstates the accepted execution boundary; Lane B is not Active and has no work order. | Revised DoD is independently accepted, every DoR row has evidence, one immutable packet is selected, Lane B becomes Active and a bounded work order exists. |
| Treat business `T1`–`T5` records as technical transitions | It reintroduces the namespace conflation and promises excluded state-machine execution. | Every criterion names its namespace and storage/evidence meaning. |
| Claim SM06 completes the full PRD success scenario under Parent-1 Choice A | Chief Journalist approval and the full gate execution needed by `CR-19` remain excluded. | The packet says “limited V1 readiness outcome,” or a new Judge act selects Choice B and funds its prerequisites. |
| Implement replay/revision from the current publication row alone | No mandatory revision/scope identity establishes which event is current. | The data contract and tests prove current revision, idempotent replay, stale refusal and retained prior evidence. |
| Treat graph coverage as semantic verification | Current source paths coexist with stale restored descriptions. | The named Graphify queries return only the current boundary, and portability is reported separately. |
| Close B-119 from Statement A or a green consistency run | Three behaviour children, feasibility review, hosted Encyclopedia comparison and independent lifecycle evidence remain open. | Every child has a disposition and evidence; the weakest-child rule then permits a terminal header. |

### Lane A follow-up sequence

1. Present Parent-1 and Parent-2 choices to the Judge; do not infer either from this review.
2. Register the selected outcome and the `D-244` closure correction before editing derived tiers.
3. Propagate the selected facts once through the Build Spec, Artifact Inventory disposition, Product PRD
   tracker, affected Fn Specs, traceability, work packets, the single storyboard/UML/data-flow source and
   Encyclopedia ledger; state unaffected tiers explicitly.
4. Present the three Parent-4 `ManualReady` rows for Judge Accept/Reject, then update the behavioural
   contract without assigning the physical database design to the Judge.
5. Return the revised SM05/SM06 DoD and data contract to Lane B for feasibility review. Keep both packets
   unselected and keep Statement B unavailable until their DoR is complete.
6. Complete B-117's separate visuals/RACI children and the hosted Encyclopedia comparison, or give each
   an explicit accepted deferral; do not count an annotation or ledger flag as completion.
7. After the last canonical edit, rebuild and re-merge Graphify once, run the semantic query criteria and
   local checks, and report portability separately.
8. Apply lifecycle changes per handoff. B-119 closes only after its own weakest child is terminal;
   B-117/B-118 are not inherited closures.

### Final verdict

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | `D-242` Lane B consumer usability; `D-243` narrow event/V2-target separation; the one-MMF PR template; `D-246` path-coverage control | Preserve in the next canonical pass; obtain the remaining independent consumer/evidence reviews |
| **Approve-with-conditions** | `D-244` destination map | Parent 2 — correct the false closure implication and keep every residual under one named owner |
| **Approve-with-conditions** | SM05/SM06 readiness contracts | Parents 1, 3 and 4 — select the promised V1 outcome, repair namespaces/outcome claims, decide the three children and prove data feasibility |
| **Defer** | Statement B, MMF selection, work order, branch/PR, construction, hosted Encyclopedia publication and B-117/B-118/B-119 closure | Complete the documentation, evidence and independent-review prerequisites above |
| **Defer** | Graph semantic refresh and portability repair | Run after the final canonical correction; use separate semantic and portable acceptance checks |
| **Reject** | Current setup-root “closed” label; full-PRD/end-to-end claims under the narrow D-239/D-243 boundary; current publication schema as sufficient revision proof; coverage PASS as semantic currency | Use the parent-first repair plan and observable criteria above |
