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
   apply the correct non-terminal disposition while any child remains open, then let the Judge
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
| Move B-119 to `Answered` after Lane A's substantive response | **Accept with conditions** | Use `Status: Answered` and a non-terminal weakest-child disposition such as `Resolution: Deferred`; `Applied` and `Verified` remain unavailable until their distinct evidence exists. |

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
   topics, set `Status: Answered`, and use the weakest unresolved child for a non-terminal
   Resolution. Do not claim independent verification in the applying commit.
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
correct intermediate shape is `Status: Answered` plus a non-terminal Resolution while graph scope,
B-115 or independent verification remains open. `Resolution: Applied` describes canonical
application, and `Resolution: Verified` requires a later independent act; neither is supplied by
the answer alone.

### Reconciliation verdict

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | Reported Judge choices `B119-URL` A, `B119-GRAPH-SCOPE` A and `B119-ANSWER` A | Lane A canonical acts and substantive B-119 answer |
| **Approve** | Encyclopedia Entry 04 impact and withdrawal of the NG-04 claim | D-54 applicability and ledger flag |
| **Approve-with-conditions** | Exact coverage-only manifest | Amend D-231; use explicit paths; preserve docs-drift and referenced journals |
| **Approve-with-conditions** | Coverage-required remainder | Classify path by path; command completion or an arithmetic tally is not extraction evidence |
| **Approve-with-conditions** | B-119 `Answered` transition | Weakest-child non-terminal Resolution; later independent verification |
| **Defer** | B-115 propagation, graph repair, packet retirement, DoR, work order and construction | Separate governed units after the product-scope D-54 pass |
| **Reject** | Premature `[V1→V2]`; calling all remainder files authoritative; treating `hook-rebuild`/merge as proof; shared-matcher edit without D-231 amendment; physical replay keys in Fn Specs; `Applied`/`Verified` on Lane A's answer commit | Apply the corrected plan above |
