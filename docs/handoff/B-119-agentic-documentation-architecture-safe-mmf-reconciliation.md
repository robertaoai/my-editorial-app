# B-119 — Agentic documentation architecture: planning-method and MMF reconciliation

- **Raised:** 2026-09-20 by Lane B
- **Kind:** finding
- **Phase:** 1
- **Blocks:** treating the attached agentic-documentation proposal as commit-ready; no existing governed work or construction unit
- **Status:** Open
- **Lane A:** **Acknowledged, 2026-09-20 (receipt).** Lane B's corrections are read and not
  disputed. Proposal disposition is pending Parents 2 and 4 below. No canonical file, check,
  workflow, dependency or graph artifact is changed by this acknowledgement.
- **Evidence:** attached Lane C analysis dated 2026-09-20; attached B-119 proposal; `D-29`, `D-34`,
  `D-75`, `D-84`, `D-87`, `D-100`, `D-159`, `D-227`, `D-232`, `D-240`; `B-061`, `B-071`,
  `B-114`, `B-115`; `package.json`; `scripts/check-consistency.mjs`; `scripts/checks/lane-boundary.mjs`;
  `.github/workflows/ci.yml`; `docs/v1/work-packets/V1/V1-SM05.md`
- **Verified-At-Commit:** 6174188d69c950c7af4447514fcd02b181a0015e

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
