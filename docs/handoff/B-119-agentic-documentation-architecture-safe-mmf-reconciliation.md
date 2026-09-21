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
  **Statement C applied 2026-09-21** (last section, "Lane A answer — Judge statement C"): `D-247`–`D-251`
  returned for Lane B and Lane C review; still `Open`.
- **Evidence:** attached Lane C analysis dated 2026-09-20; attached B-119 proposal; `D-29`, `D-34`,
  `D-75`, `D-84`, `D-87`, `D-100`, `D-159`, `D-227`, `D-232`, `D-240`; `B-061`, `B-071`,
  `B-114`, `B-115`; `package.json`; `scripts/check-consistency.mjs`; `scripts/checks/lane-boundary.mjs`;
  `.github/workflows/ci.yml`; `docs/v1/work-packets/V1/V1-SM05.md`
- **Verified-At-Commit:** 8701961cf030afd7f6d3b9ae7d2718cc708cdc5a

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

## Lane B return to Lane A — Judge accepts the five-part correction packet, 2026-09-21

### Authority and boundary

The Judge accepts the parent-first correction packet below and directs Lane A to apply it to the
canonical governance and documentation sources. This section completes Lane B's return to Lane A; it
does **not** itself amend a canonical source, select an MMF, make Lane B `Active`, issue a work order,
authorize construction, open V2, close `SETUP-SPIKE-000`, or close B-117, B-118, or B-119.

Lane C independently endorsed the role-taxonomy correction and the bounded execution sequence. Its
review is corroborating evidence, not the source of Judge authority. Lane B remains the raiser and Lane A
is the answering/applying side.

### Accepted decisions, parent first

| Order | Accepted Judge decision | Required canonical effect |
|---:|---|---|
| 1 | Current V1 consists of `V1-SM05` and `V1-SM06` and ends at the bounded LinkedIn target-level `ManualReady` outcome. | Automated WordPress, retry/scheduler behaviour, and `FR-10`/`T11` live-URL confirmation remain V2 targets under `D-243`. No destination is inferred for any other unsatisfied `CR-19` component. |
| 2 | Preserve `D-244` as historical transfer provenance and supersede only its closure implication. | `SETUP-SPIKE-000` remains open while `S2`–`S4` or their residual scopes are non-terminal. Transfer grants no DoD, terminal disposition, retirement, or closure credit. Derived tiers say `transfer mapped; closure pending`. |
| 3 | `V1-SM05` is a limited Route-1 evidence slice; `V1-SM06` adds board/audit visibility and bounded LinkedIn `ManualReady`. | SM05 records/displays accepted business-stage, role, task, and evidence facts without claiming `transition:T*` execution. SM06 creates neither `Published`, automated WordPress delivery, nor live-URL confirmation. Both disclose partial, not complete, `CR-19` satisfaction. |
| 4 | Adopt the five-dimensional `ManualReady` contract. | Eligibility requires an accepted final `business:T5` ranking/routing record; `ROLE-SENIOR-JOURNALIST` is the sole authorized virtual-agent requester by explicit Judge grant; readiness binds to the exact accepted formatted-content snapshot; invalid requests cause no readiness/article/publication mutation, though append-only refusal evidence may be recorded; identical replay creates no second effective outcome. Intake deduplication remains a separate rule. |
| 5 | Reserve `ROLE-*` for virtual-agent identities and correct the natural-person access entitlement to `ACCESS-ROLE-CHIEF-EDITOR`. | This is an identifier correction, not a transfer of editorial accountability, gate judgment, or publication-readiness authority. Preserve historical decision text, including `D-238`, and record a prospective correcting act. `EDITORIAL-ROLE-EDITOR-IN-CHIEF`, `USR-*`, and `AGENT-*` retain their distinct meanings. |

`ROLE-SENIOR-JOURNALIST` receives readiness-request authority only from the explicit Judge grant above.
Its intake position, T4 participation, or pipeline symmetry is rationale, not authority. The grant does
not authorize T5 impersonation, human Final Sign-Off, Route-1 accountability, WordPress publication,
`Published`, or a live-URL assertion.

### Required Lane A execution sequence

Lane A applies the decisions in this order:

1. Register the parent V1 boundary.
2. Register the `D-244` lifecycle correction without rewriting historical text.
3. Register the bounded SM05/SM06 outcomes and partial-`CR-19` disclosures.
4. Register the five-dimensional `ManualReady` contract.
5. Register the `ACCESS-ROLE-CHIEF-EDITOR` namespace correction.
6. Before renaming derived references, inventory every canonical, derived, Graphify, code, test, seed,
   and persisted-data occurrence of `ROLE-CHIEF-EDITOR`; classify each as access entitlement, human
   editorial identity, virtual agent, or historical text.
7. Apply `D-54` in one pass through `V1-DECISION-REGISTER.md`, `V1-BUILD-SPEC.md`, and
   `V1-ARTIFACT-INVENTORY.md`; update `Modular_PRD.md` §8 only where a sprint closes or a tier opens,
   and state unaffected tiers explicitly.
8. Update `V1-SM05.md` and `V1-SM06.md` with exact dependencies, exclusions, DoR, DoD, failure cases,
   evidence requirements, and identity references.
9. Complete the applicable `DOR-R2`–`DOR-R4` failure/replay contracts before changing visuals.
10. Make the storyboard the single visual owner for the normal, refusal, and replay sequence/UML/data
    flow; Fn Specs and packets cross-reference those views rather than duplicating them.
11. Normalize Fn Specs, traceability, data-flow/UML references, and Encyclopedia Entries 01, 04, 05,
    and 06, or record an explicit accepted deferral for each unfinished hosted comparison.
12. After the last canonical edit, execute the governed Graphify workflow: dated backup, extracted-layer
    rebuild, conditional docs-layer restore, all-fragment audit, per-fragment merge and verification,
    semantic-description refresh, targeted semantic queries, separate portability check, and
    `bun run check`.
13. Return the revised contracts through `docs/handoff/` for Lane B feasibility/evidence review and the
    applicable Lane C workflow review. Neither review selects a packet.
14. Compute B-117, B-118, and B-119 lifecycle headers from their own child ledgers. Only after SM05 is
    DoR-complete may a later Judge act select it, make Lane B `Active`, and issue one bounded work order.

### Construction and verification evidence required before a work order

The canonical pass must add the Artifact Inventory disposition and an identity-migration ledger. The
later Lane B verification matrix must prove all of the following:

1. `ROLE-SENIOR-JOURNALIST` succeeds only with completed `business:T5` evidence, LinkedIn target, and
   valid formatted content.
2. `ROLE-CHIEF-EDITORIAL-DESK`, `ROLE-DESK-EDITOR`, `ROLE-REPORTER`,
   `ACCESS-ROLE-CHIEF-EDITOR`, and an unauthenticated client are refused.
3. Refusal appends only permitted audit evidence and mutates no readiness, article, or publication state.
4. Identical replay creates no second effective readiness outcome.
5. A different-day intake is a distinct brief, not readiness replay.
6. Changed content cannot inherit an earlier snapshot's readiness.
7. `ManualReady` never implies `Published`, WordPress delivery, a live URL, or complete `CR-19`.
8. The access-role rename does not transfer source-RACI accountability or virtual-agent authority.

The physical revision/scope identity, idempotency key, effective-current query, compatibility treatment,
and any schema migration remain Lane B design questions for a later bounded work order. No existing
migration may be rewritten.

### Handoff disposition

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | Judge Decisions 1–5 and Lane B's return packet | Phase 1 — Lane A canonical registration and propagation |
| **Approve-with-conditions** | `ACCESS-ROLE-CHIEF-EDITOR` correction | Phase 1 — classify every occurrence before changing derived references; preserve historical acts |
| **Approve-with-conditions** | Fourteen-step Lane A sequence | Phase 1 — execute parent-first, with one-pass `D-54` propagation and post-source Graphify verification |
| **Defer** | Physical data contract, compatibility changes, schema/code/tests, MMF selection, work order, branch/PR, and construction | Phase 2 — only after revised packet review, complete DoR, lane activation, and a bounded work order |
| **Defer** | B-117/B-118/B-119 terminal closure and hosted Encyclopedia completion | Phase 1 — each child requires its own disposition and evidence |
| **Reject** | Natural-person entitlement `ROLE-CHIEF-EDITOR`, inferred requester authority, setup-root closure, full-PRD claims, or build authority from this handoff | Apply the accepted corrections; retain the two-checkpoint authorization boundary |

B-119 remains `Open` under the weakest-child rule until Lane A applies the accepted decisions and every
remaining child obtains its own required disposition and evidence.

## Lane A answer — Judge statement C applied, returned for Lane B and Lane C review, 2026-09-21

**Authority.** Judge statement C, approved verbatim in the Lane A conversation on 2026-09-21 and recorded in
`D-247` under `D-183`. It authorizes the five-part correction packet above, each decision under its own
Register ID, steps 6–13 of the fourteen-step sequence, and a stop for independent review. The decision
content is the packet Lane B recorded; the authority to apply it is the Judge's direct message, not this
handoff. Lane B's comparison of the recorded acts with that message is still owed and is **not** claimed.

### What landed

| Unit | Commit |
|---|---|
| `D-247` V1 boundary · `D-248` `D-244` lifecycle correction · `D-249` bounded SM05/SM06 outcomes · `D-250` the five-dimension `ManualReady` contract · `D-251` `ACCESS-ROLE-CHIEF-EDITOR`, with the identity-migration ledger — one `D-54` pass | `911a51498119b6ceed03363dfa67415acbaf8105` |
| Corrections to stale curated graph descriptions found by the semantic queries | `e8adc4d3167829ca833dc6ade920c43b93c1d762` |

Graphify was backed up, rebuilt once at `e8adc4d`, and every mergeable fragment re-merged. `docs-drift` is
synced, `graph-coverage` and the full local consistency run pass, and the negative fixtures pass on a clean
tree. The pending description fill (`graphify update --fill-missing`) needs an LLM backend and was **not**
run; it is recorded as deferred. Portability is reported **separately**: `portable-check` still reports
absolute-path findings in gitignored local studio and scene files, so the graph is **not** claimed portable.

### Where each decision now lives

| Decision | Canonical owner | Cross-referenced from |
|---|---|---|
| 1 — V1 boundary | Register `D-247` | Build Spec §1, `Modular_PRD` §8.1, both packets |
| 2 — `D-244` closure implication | Register `D-248` | Build Spec §1, `S2`/`S3`/`S4` packets, `Modular_PRD` §8.1, curated node text |
| 3 — bounded outcomes, partial `CR-19` | Register `D-249` | Build Spec table, traceability §6.1, both packets |
| 4 — `ManualReady` contract | Register `D-250` | `FN-PUBLICATION-09-10-13.md` §12, RACI catalog row, `V1-SM06` DoR/DoD, storyboard Panel A10 |
| 5 — identifier namespace | Register `D-251` | RACI catalog §8, crosswalk, `FN-GATES` `EG5`, traceability §6.4, Build Spec `DOR-R4`, ledger |

`FN-GATES-01-05.md` §4.3 now carries the `DOR-R2`–`DOR-R4` failure and replay contracts, each row labelled
business (`business:T*`), task (`EG*`) or technical (`transition:T*`) — and no `V1-SM05` row is technical.
Storyboard Panel A10 is the single visual owner of the `ManualReady` normal, refusal and replay sequence and
data flow; it is **not** B-117's whole normal/revision path, which stays open.

### Identity-migration ledger (from `D-251`)

The repository search found the old identifier only in documents. It appears in **none** of `app/`, `lib/`,
`components/`, `supabase/`, `__tests__/`, migrations, seeds or scripts. Living tiers were renamed;
the Register, `V1-B071-CORRECTIVE-PLAN`, this directory's entries and the D-236–D-238 narratives keep the old
name as history. **Persisted database rows cannot be checked from the repository.**

### Requests to Lane B and Lane C (review only; neither selects a packet)

**Lane B**
1. Compare `D-247`–`D-251` and their application with the Judge's direct message (`D-183` rule 6).
2. Confirm whether any **stored value** carries `ROLE-CHIEF-EDITOR`, and give the compatibility treatment
   if one does; no existing migration may be rewritten.
3. Feasibility and evidence-usability review of `V1-SM05` and `V1-SM06`, including `FN-GATES` §4.3 and the
   `D-250` verification matrix. Name the physical revision or scope identity, idempotency key and
   effective-current query the contract needs. That is **Lane B's design and is left open on purpose**.
4. The B-115 consumer read (construction usability and ownership).

**Lane C**
1. The B-115 consumer read (assistance scope, input allowlist, return path).
2. Review only a delivery or operability evidence contract that a packet actually names; none does yet.

### Not done, by design

No physical data contract, schema or migration, workflow, MMF selection, work order, Lane B activation,
branch, pull request, construction, V2 opening, packet retirement, earned DoD, deployment, hosted Encyclopedia
republish, or closing of B-117, B-118 or B-119. **Judge statement B was not sent or inferred.** The hosted
Encyclopedia comparison for Entries 01, 04, 05 and 06 is **explicitly deferred** in the sync ledger with an
owner and a follow-up; the ledger is not publication evidence. `V1-SM05` and `V1-SM06` are **not** DoR-complete:
`DOR-R5` (the single normal/revision visual), `DOR-R6`, the Entry 04 review and the revision mechanism remain.
Step 14 (per-entry lifecycle headers) was outside statement C: B-117, B-118 and B-119 keep their own child
ledgers, and this header stays `Open` under the weakest-child rule.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | `D-247`–`D-251` and their propagation, applied and locally green | Phase 1 — Lane B verification against the Judge's direct message |
| **Approve-with-conditions** | `ACCESS-ROLE-CHIEF-EDITOR` rename | Phase 1 — Lane B confirms persisted values; history preserved |
| **Approve-with-conditions** | `V1-SM05`/`V1-SM06` revised contracts | Phase 1 — Lane B feasibility review; Judge acceptance of the business outcome; DoR still incomplete |
| **Approve-with-conditions** | Graph sync | Phase 1 — coverage and curated descriptions checked; description fill deferred; portability reported separately |
| **Defer** | Physical data contract, MMF selection, work order, construction, hosted Encyclopedia comparison, B-117/B-118/B-119 closure | A later bounded Judge act, and each entry's own evidence |
| **Reject** | Build authority from this return, calling the setup programme closed, `transition:T*` claims for `V1-SM05`, full-`CR-19` claims, coverage PASS as semantic currency | Two-checkpoint model stands |

## Lane B consolidated review — Judge-authorized append after `D-247`–`D-251`, 2026-09-21

### Authority and boundary

The Judge authorized this consolidation to be appended to B-119 and requested an independent review of
`D-247`–`D-251`. This is a handoff-only Lane B review returned to Lane A. It does not amend those
decisions, assign the unallocated part of `CR-19`, create `V1-SM07`, select an MMF, activate Lane B,
authorize construction, close the setup root, or close B-117, B-118, or B-119.

### Parent-first decision ledger

| Order | Parent or child | Independent finding | Disposition / next act |
|---:|---|---|---|
| 1 | `D-247` — current V1 boundary | Applied correctly: current V1 contains `V1-SM05` and `V1-SM06` and ends at bounded LinkedIn `ManualReady`. Only automated WordPress, retry/scheduler, and `FR-10`/`T11` live-URL confirmation have an explicit V2 target. The remaining five-gate execution and Chief Journalist approval needed for complete `CR-19` are **unassigned**, not shifted to V2. | **Approve.** Preserve the distinction between *V2-targeted* and *unassigned*. A later roadmap act must place the unassigned outcome. |
| 2 | Why no `V1-SM07` | `D-247` accepted the bounded Choice A. Naming `V1-SM07` now would silently choose the rejected/deferred scope-expansion branch, invent an artifact before its business outcome, and contradict the rule that the parent outcome precedes child count, identity, and order. | **Defer.** If the Judge wants complete `CR-19` in V1, first amend `D-247` with the exact added business outcome and exclusions; only then may Lane A propose whether one or more new MMFs are needed. Do not assume the identifier `V1-SM07`. |
| 3 | `D-248` — setup lifecycle | Correctly supersedes only `D-244`'s closure implication. Transfer is mapped; closure remains pending while residual children are non-terminal. | **Approve.** No closure or packet-retirement credit. |
| 4 | `D-249` — bounded packet outcomes | SM05 is a Route-1 evidence slice; SM06 is board/audit plus bounded `ManualReady`; both disclose partial `CR-19`. Residual current-scope wording was corrected at `e60581e`. | **Approve.** Preserve the current-scope annotations and the single-owner cross-references. |
| 5 | `D-250` — `ManualReady` contract | Eligibility, explicit requester authority, snapshot binding, refusal and replay are decided at business-behaviour level. The physical revision identity, replay key and effective-current query remain correctly assigned to a later Lane B refinement. | **Approve with conditions.** DoR remains incomplete until the physical design is reviewable and testable. |
| 6 | `D-251` — identity namespace | Living documentation uses `ACCESS-ROLE-CHIEF-EDITOR`; virtual-agent identities retain `ROLE-*`; historical text is preserved. No repository code, migration, seed or test stores the old entitlement identifier. Provisioned data remains unexamined. | **Approve with conditions.** Perform a read-only stored-value check before construction and use a new migration if compatibility work is needed. |
| 7 | SM05 readiness | `DOR-R5`, `DOR-R6`, and Lane B feasibility evidence remain open. | **Defer selection.** Complete the authoritative normal/revision visual and Encyclopedia disposition first. |
| 8 | SM06 readiness | Entry 04 review and physical snapshot/idempotency design remain open. | **Defer selection.** Return a schema-neutral design to Lane B before any work order. |
| 9 | Statement B | Lane A is still `Active`; Lane B is only `Eligible`; neither packet is DoR-complete. | **Defer.** A later Judge act must name the immutable packet, lane transition, and bounded work order. |

### `CR-19`: what was and was not moved

The phrase *"the rest of `CR-19` moved to V2"* is rejected because it is not what `D-247` says.

| `CR-19` component | Current destination |
|---|---|
| Route-1 business-stage, role, task and evidence display | `V1-SM05` |
| Board/audit visibility and LinkedIn target-level `ManualReady` | `V1-SM06` |
| Automated WordPress delivery and retry/scheduler behavior | V2 target under `D-243`/`D-247` |
| `FR-10`/`T11` live-URL confirmation and promotion to `Published` | V2 target under `D-243`/`D-247` |
| Complete five-gate execution and Chief Journalist approval needed for the full frozen success scenario | **No destination assigned** |

The unassigned outcome remains traceable to its `[V1]` source. It is not deleted, satisfied, or silently
deferred to V2. There are three legitimate future Judge choices:

1. keep it unassigned until roadmap planning;
2. amend the current V1 boundary and define the additional business outcome before Lane A proposes MMFs;
3. assign it expressly to V2 or another named scope.

Only choice 2 could lead to another current-V1 packet, and even then the packet is not automatically
called `V1-SM07`: dependency and feature-group analysis determines the count and identity after the
outcome is accepted.

### Methodology and identity separation

The phrase *"Senior Journalist independence"* is withdrawn from current-language use. It conflates four
different models:

| Model | Subject | Current use here |
|---|---|---|
| Product Three Lines / IIA-inspired separation | Business risk, control and independent assurance | Numbered Lines 1/2/3. It does not assign development tools and does not make every reviewer a Line 2 assurance actor. |
| Source RACI | Responsibility and accountability for factory-route operations | `R`, `A`, `C`, `I` facts from the source crosswalk. RACI does not itself grant application authorization. |
| Product execution identities | Virtual agents, human access entitlements, human editorial identities and external actors | `ROLE-*`, `ACCESS-ROLE-*`, `EDITORIAL-ROLE-*`, `USR-*`, `AGENT-*`, and `EXT-*`; each prefix has a distinct meaning. |
| Development lanes | Repository ownership and commit sequencing | Lane A/B/C. These must never be cross-referenced to Product Lines 1/2/3. |

`ROLE-SENIOR-JOURNALIST` is currently a **virtual product agent**. It processes the pre-gate intake/EW
boundary, participates where separately mapped, and may request LinkedIn `ManualReady` solely because
`D-250` grants that request authority. It is **not** thereby:

- an IIA Line 2 independent-assurance function;
- the `business:T5` reviewer;
- a human Final Sign-Off actor;
- Route-1 accountable;
- a WordPress publisher;
- authorized to create `Published` or assert a live URL.

The storyboard's earlier description of Senior Journalist as a Line 2 reviewer is dated history and is
now explicitly marked superseded. The current requirement is **requester/reviewer separation**, not
"Senior Journalist independence": Chief Editorial Desk supplies the qualifying `business:T5` record;
Senior Journalist requests the bounded readiness event; the application performs the append; none gains
the other's authority.

### Critical artifacts and their construction/verification use

| Artifact | Construction input | Verification evidence |
|---|---|---|
| Register `D-247`–`D-251` | Scope, exclusions, behavior and identity authority | Proves implementation follows explicit decisions rather than inferred roles |
| `V1-SM05.md` | Route-1 evidence slice and namespace boundaries | DOR-R1–R6 and real-database acceptance/refusal cases |
| `V1-SM06.md` | Board/readiness behavior and prohibited outcomes | Authorization, snapshot, replay, refusal and never-`Published` matrix |
| `FN-GATES-01-05.md` §4.3 | Failure/replay behavior for SM05 operations | Positive, refusal and idempotency cases per operation |
| `FN-PUBLICATION-09-10-13.md` §12 | Sole `ManualReady` behavior owner | Current-effective event, stale refusal and audit-visible replay |
| Storyboard Panel A10 | `ManualReady` normal/refusal/replay visual and data flow | Confirms the implementation sequence matches the behavior owner |
| B-117 normal/revision visual, still owed | Complete SM05 journey and return path | Satisfies DOR-R5 without overloading Panel A10 |
| Encyclopedia ledger and hosted comparison | Vocabulary consumed by UI and documentation | Satisfies DOR-R6/Entry 04 only after hosted review or accepted deferral |
| `D-251` identity-migration ledger | Rename boundary and compatibility scope | Proves living identities changed while history and accountability did not |

### Lane A follow-up, in dependency order

1. Preserve `D-247`–`D-251`; do not create another decision packet for settled content.
2. Record this Lane B review as the independent response to Lane A's statement-C return.
3. Complete B-117's one normal/revision storyboard view and matching data flow; Panel A10 remains the
   separate `ManualReady` visual owner.
4. Review hosted Encyclopedia Entries 01/05/06 and 04, or obtain one explicit Judge deferral naming the
   affected packet and return condition.
5. Return SM05's DOR-R2–R4 contracts to Lane B for technical feasibility and evidence-usability review.
6. Ask Lane B to propose the schema-neutral SM06 physical contract: snapshot/scope identity, idempotency
   key, current-effective query, stale refusal and retained history.
7. Perform the read-only stored-value check for the former access entitlement before any compatibility
   design; never rewrite an existing migration.
8. Package the SM05/SM06 business outcomes for Judge accept/reject only after the Lane B review.
9. Rebuild Graphify once after the last governed edit, not after handoff-only entries; rerun semantic
   queries, portability separately, and the full consistency suite.
10. Compute B-117, B-118 and B-119 lifecycle independently from their child ledgers.
11. Ask for statement B only when one immutable packet is DoR-complete.

### Guaranteed failures and observable success

| Guaranteed failure | Observable success criterion |
|---|---|
| Say all remaining `CR-19` moved to V2 | The destination table distinguishes explicit V2 targets from the unassigned full-gate/Chief-Journalist outcome |
| Create `V1-SM07` from the requirement label alone | A prior Judge act defines the added V1 business outcome; feature-group analysis then determines packet count and identity |
| Call Senior Journalist an independent Line 2 reviewer | Current diagrams and role catalogs call it a virtual requester and point historical panels to the superseding model |
| Infer request authority from intake, T4, RACI or symmetry | Tests and documentation cite the explicit `D-250` grant |
| Select SM05 with DOR-R5/R6 open | One immutable packet has evidence for every DoR row and independent feasibility review |
| Build SM06 without revision identity | Design proves one effective readiness per article/target/snapshot, idempotent replay and stale refusal |
| Assume repository search proves live data has no old role value | A read-only provisioned-data result records the finding and compatibility treatment |
| Treat an Encyclopedia ledger flag as hosted review | Hosted comparison/republish evidence or an explicit Judge deferral exists |
| Close B-119 from green checks | Every child has a terminal disposition; the header follows the weakest child |
| Rebuild Graphify after this handoff-only append | `docs-drift` remains synced; rebuild occurs only after the next governed source change |

### Review result and lifecycle

`D-247`–`D-251` match the Judge-approved five-part packet and the current derived tiers. The remaining
work is child evidence and technical refinement, not another parent decision. Documentation and Graphify
were synchronized at `e60581e` before this handoff-only append. B-119 remains `Open` under the
weakest-child rule.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | `D-247`–`D-251`, their propagation, and the corrected methodology separation | Preserve; use as the governing input |
| **Approve-with-conditions** | SM05/SM06 packets | Complete visual, Encyclopedia, feasibility, revision/idempotency and persisted-value evidence |
| **Defer** | Destination for complete five-gate execution and Chief Journalist approval | Later roadmap or explicit V1-amendment Judge act |
| **Defer** | `V1-SM07` or any additional MMF | Define and accept the parent business outcome first |
| **Defer** | Statement B, MMF selection, Lane B activation and construction | One packet must first be DoR-complete and independently reviewed |
| **Reject** | Claiming the whole remainder of `CR-19` is V2; calling Senior Journalist an IIA/Line-2 reviewer; inferring authority; bulk closure | Preserve explicit destinations, methodology boundaries and per-child lifecycle |

## Judge decision — stored-value assessment and first dependent MMF, 2026-09-21

### Accepted decisions

The Judge approves:

1. a **read-only, aggregate stored-value assessment** for the former natural-person entitlement identifier
   `ROLE-CHIEF-EDITOR`; and
2. **`V1-SM05` as the first dependent MMF** for that evidence.

This is a bounded evidence authorization. It does not authorize a database mutation, compatibility
migration, application construction, packet selection, Lane B activation, or a work order. The assessment
must not run until its scope, access path and evidence format are recorded and the necessary database-access
step is available to Lane B.

### Placement and dependency

The assessment is a cross-cutting `D-251` compatibility child owned in B-119, not a product feature and
not a new MMF.

| Consumer | Dependency treatment |
|---|---|
| `V1-SM05` | **First dependent packet.** Before its work order, the evidence must establish whether living or historical stored values still use the former access-entitlement identifier. SM05 is first because it records and displays role/gate evidence. |
| `V1-SM06` | References the same evidence; does not duplicate the query. Its authorization matrix must distinguish `ACCESS-ROLE-CHIEF-EDITOR` from the sole requester `ROLE-SENIOR-JOURNALIST`. |
| B-119 / `D-251` | Owns the result, classification, compatibility disposition and cross-references. |

Lane A should add one cross-cutting identity-compatibility evidence reference to SM05's DoR and point
SM06 to that same record. This does not check the DoR box by itself: the executed assessment and reviewed
result are the evidence.

### Assessment contract for Lane B to draft

The assessment follows discover → classify → decide → migrate-if-needed → verify:

1. restrict discovery to application-owned schemas and identity-capable text, enum, array and JSON/JSONB
   fields;
2. match the exact scalar or collection member `ROLE-CHIEF-EDITOR`, never an unrestricted substring scan;
3. return only schema, table/view, column, storage type, match category and aggregate count;
4. emit no row identifiers, row content, article text, personal data, secrets or credentials;
5. execute read-only and record that no mutation occurred;
6. classify each match as living operational entitlement, immutable historical/audit evidence, false
   positive, or unresolved;
7. preserve immutable history and interpret the former value through a documented historical alias;
8. if a living value requires correction, propose a **new** migration and regression evidence — never edit
   `0001_init.sql` or `0002_s1_editorial_schema.sql`;
9. record one result per applicable environment rather than inferring database state from repository search
   or from a different environment.

Human actor/principal values such as `chief-editor` are not automatically the deprecated entitlement
identifier and must be classified separately. Source-RACI identities, access entitlements, virtual-agent
identities and historical prose remain separate namespaces throughout.

### Evidence required to close this child

The result records:

- environment and non-secret database/schema identity;
- assessed repository commit and migration version;
- execution time and query version/digest;
- included and excluded schemas;
- matched schema/table/column/type and aggregate count;
- classification and required treatment for every match;
- reviewer;
- confirmation that no row content was emitted; and
- confirmation that no mutation occurred.

Closure branches:

| Result | Required disposition |
|---|---|
| No matches in every applicable environment | Record `no compatibility migration required`; retain the historical alias documentation |
| Historical/audit matches only | Preserve rows; record the legacy interpretation and prove living authorization ignores the old identifier |
| Living operational matches | Keep SM05 unselected; design a new migration, rollback/verification evidence and authorization regression tests |
| Unresolved classification or inaccessible environment | Keep the child and SM05 dependency open; name the owner and exact return condition |

### Lane A follow-up

1. Record this Judge act as the authority for the B-119 stored-value child.
2. Add one SM05 DoR evidence reference and one SM06 cross-reference in the next authorized canonical pass;
   do not copy the query into either packet.
3. Ask Lane B for the schema-neutral query and evidence format, not for construction.
4. Review scope and least-privilege access before execution.
5. After execution, record the result and compatibility branch in B-119/`D-251` evidence.
6. Reassess SM05 readiness; do not select it while a living or unresolved match lacks treatment.
7. Rebuild Graphify only if the canonical packet/reference edit lands; this handoff-only decision requires
   no rebuild.

### Failure and success criteria

| Guaranteed failure | Observable success criterion |
|---|---|
| Treat the assessment as an MMF | It remains B-119/`D-251` readiness evidence linked first to SM05 |
| Scan arbitrary content or use substring matching | Only identity-capable fields and exact values are aggregated |
| Return matching rows | Output contains metadata and counts only |
| Rewrite audit history | Historical rows remain immutable and use a documented interpretation rule |
| Treat `actor_id = chief-editor` as `ROLE-CHIEF-EDITOR` | Principal and entitlement identifiers are classified separately |
| Infer live data from repository search or one environment | Every applicable environment has its own recorded result |
| Duplicate the query in SM05 and SM06 | One evidence record is referenced by both packets |
| Edit an existing migration | Any compatibility correction is a new migration with regression evidence |
| Select SM05 before the result is classified | SM05 selection waits for a reviewed no-migration, historical-only, or completed living-value treatment |

### Verdict

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | Read-only aggregate stored-value assessment | Phase 1 — Lane B drafts; execute only after scope/access review |
| **Approve** | SM05 as first dependent MMF | Phase 1 — one cross-cutting DoR evidence reference |
| **Approve-with-conditions** | SM06 compatibility | Reuse the same evidence and verify authorization separation |
| **Defer** | Compatibility migration | Only if living matches exist |
| **Defer** | MMF selection, lane activation and construction | All SM05 DoR evidence and a later bounded Judge act |
| **Reject** | New MMF for the query, content-bearing output, historical rewrite, query duplication or existing-migration edit | Preserve the bounded evidence contract |

B-119 remains `Open`; this decision authorizes the evidence path but does not supply the assessment result.

## Lane A answer — Judge statement D recorded; scope and access reviewed; query not run, 2026-09-21

**Authority.** Judge statement D, approved directly in the Lane A conversation on 2026-09-21, recorded as a
completion addendum under `D-251` at commit `8701961cf030afd7f6d3b9ae7d2718cc708cdc5a` (`D-183`). It authorizes recording the read-only, aggregate
stored-value assessment of `ROLE-CHIEF-EDITOR` under `D-251`, one `V1-SM05` DoR evidence reference, one `V1-SM06`
cross-reference and a Lane A access-scope review. It excludes any mutation, migration, execution before scope and
access are recorded, MMF selection, Lane B activation, work order and construction.

### What landed

| Item | Where |
|---|---|
| The assessment as a `D-251` compatibility child owned in B-119; it supersedes only the ledger's "when its work order exists" timing | Register `D-251` completion addendum |
| One unchecked DoR evidence reference (first dependent packet) and one cross-reference; the query is not copied | `V1-SM05.md`, `V1-SM06.md` |
| `EXT-*` added to the prefixes; "requester/reviewer separation" stated; "Senior Journalist independence" retired | RACI catalog §8, `D-251` addendum |
| Encyclopedia deferral restated per packet with a return condition | `ENCYCLOPEDIA-SYNC.md` |

Graphify was rebuilt once after this canonical edit; `docs-drift` is synced and the full local suite passes.

### Access-scope review (Lane A)

Recorded in the addendum. In short: the applicable environments are the local disposable database and the one
provisioned Supabase project; `DEP-05` (credentials withheld) **is not lifted**; access is either a human running the
pinned aggregate query and supplying counts, or a Judge-granted time-boxed read-only role limited to metadata and
aggregates; **no agent holds a service-role or write-capable credential**; output is metadata and counts only.

### Requests to Lane B (draft only — do not execute)

1. The schema-neutral query and evidence format, following the nine-step contract in this entry, with the query
   digest.
2. A scope record: environments (confirm or correct the two named above), included and excluded schemas, identity-
   capable field types, the access path requested, and the reviewer.
3. Return both here for Lane A's scope and least-privilege review. **Nothing runs until that review is recorded.**

### Not done, by design

The query was **not** run and no result exists. No database mutation, migration, `DEP-05` change, MMF selection,
Lane B activation, work order or construction. `V1-SM05` stays unselected and its new DoR box unchecked. B-119 stays
`Open`. Also open: `DOR-R5`'s single normal/revision visual, the hosted Encyclopedia comparison, Lane B's feasibility
review, and Lane B/C's B-115 consumer reads.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | Recording the assessment as a `D-251` compatibility child, and the vocabulary corrections | Phase 1 — Lane B verifies against the Judge's direct message |
| **Approve-with-conditions** | Access path | Phase 1 — human-run or time-boxed read-only role; `DEP-05` intact; Lane A scope review before execution |
| **Defer** | Query execution, any compatibility migration, MMF selection, work order, construction | The recorded scope review, then a later bounded Judge act |
| **Reject** | Treating the query as an MMF, an agent-held credential, content-bearing output, historical rewrite or an edit to an existing migration | Preserve the bounded evidence contract |

## Lane A consolidation — Judge selects the human-run read-only path; gap ledger and drafted fixes, 2026-09-21

**Authority and boundary.** Judge selection, stated directly in the Lane A conversation on 2026-09-21: the
stored-value assessment uses a **read-only query** through a **read-only access path**, and the path is the
**human-run** one — a human runs the pinned aggregate query and supplies only counts. This is one of the two
paths already listed in the `D-251` access-scope table; it **selects** between them and does not widen either.
Read at commit `11e35712970c4e7672a10ec9be4600523f2a4a0f`. This is a Lane A handoff-only record. It executes no
query, lifts no `DEP-05`, edits no Register, packet or migration, selects no MMF, activates no Lane B and
authorizes no construction.

### Normalized wording (use these terms; retire the shorthand)

| Shorthand heard | Canonical term | Why |
|---|---|---|
| "Option A" | **human-run aggregate query** (access path) | `B-116` and this entry's "Option B amendment to `D-239`" already use A/B for unrelated choices; the `D-251` table labels no options, so a bare letter identifies nothing |
| "read-only query" | **read-only aggregate stored-value assessment** (Judge statement D wording) | Read-only describes the transaction; *aggregate, counts and metadata only* is the output rule |
| "read-only access path" | **human-run path**; the alternative is the **time-boxed read-only role**, not selected | Access path names who holds the credential, not what the query does |

### Gap ledger — parent first, children depend on the parent

| Order | Gap | Finding | Drafted fix (not applied) | Owner |
|---:|---|---|---|---|
| 1 | The path selection exists only in conversation | The Register's access-scope table lists two paths and records no choice; `D-183` needs the act recorded before it is relied on | One-line addendum under `D-251`'s access-scope table: "Selected path: human-run; time-boxed role not selected; revisit only by a new Judge act." Apply in the next authorized canonical pass with the `D-54` table below | Lane A |
| 2 | Lane B's scope record and query are still owed | Nothing has been returned; execution stays gated (`D-251` gate row) | Lane B returns: environments (confirm the local disposable database and the one provisioned Supabase project, or name others), included/excluded schemas, identity-capable field types, the pinned query with digest, the evidence format, reviewer | Lane B (draft only) |
| 3 | The human-run path needs a named executor and transport | With no agent credential, someone must run it and paste counts; the entry names neither | Scope record adds: named human executor, where each environment is queried, how counts return (pasted into this entry), and that the query digest the human ran equals the reviewed digest | Lane B drafts; Lane A reviews |
| 4 | "Read-only" must be enforced, not asserted | A pasted query can contain a write | Scope record requires the query to declare a read-only transaction, and the evidence to state that no mutation occurred (already a `D-250` evidence item); Lane A checks the text for any write statement before it is handed to the human | Lane B drafts; Lane A reviews |
| 5 | Classification of known look-alikes | Verified this turn: the code, migration, seed and test surfaces (`app/`, `lib/`, `supabase/`, `__tests__/`, `scripts/`) contain **no** `ROLE-CHIEF-EDITOR` and no `ACCESS-ROLE-CHIEF-EDITOR`. They do contain the principal value `'chief-editor'` (`0002_s1_editorial_schema.sql` lines 190, 191, 224; `s1-schema.test.ts:47`; the transition tests). Repository search proves nothing about provisioned data | Result form must list `'chief-editor'` as a separate, expected false-positive class, never a match. Live data remains unexamined until the human run returns | Lane B drafts the class; Lane A reviews |
| 6 | SM05's DoR box | Unchecked, correctly: the box needs the executed and reviewed result | No change. `V1-SM06` keeps its cross-reference and duplicates nothing | Lane A (on result) |

Independent open siblings, listed once and **not** duplicated here: `DOR-R5`'s single normal/revision storyboard
view (`B-117`), hosted Encyclopedia Entries 01/05/06 and 04 (deferral with a return condition in
`docs/ENCYCLOPEDIA-SYNC.md`), Lane B's feasibility review of `DOR-R2`–`DOR-R4`, and the physical `ManualReady`
snapshot/idempotency design for `V1-SM06`.

### Cross-artifact and drift check

| Artifact | Disposition |
|---|---|
| `Modular_PRD.md` | Unaffected: no requirement, status or module changes |
| Storyboard, story panels, UML/data flow | Unaffected: the path choice is an evidence procedure, not a user journey, state, route or event |
| Encyclopedia | Unaffected: no vocabulary change beyond what statement D recorded; Entries 01/05/06 and 04 remain deferred |
| Register, Build Spec, Artifact Inventory, packets | Register gets the gap-1 addendum in the next canonical pass; Build Spec and Inventory unaffected (no scope, sequence or file); packets unchanged |
| Graphify | `docs-drift` reads synced at `8701961`; HEAD `11e3571` advanced by an excluded-only (handoff) commit. This append is also handoff-only, so **no rebuild is owed**. Rebuild once after the gap-1 canonical edit lands, then rerun the suite |

### Success criteria for this child

| Failure | Passing evidence |
|---|---|
| The path is used before it is recorded | The Register addendum exists before the human runs anything |
| A write-capable statement reaches a human | Lane A's recorded text check plus the read-only declaration in the query |
| Counts are trusted from an unreviewed query | Executed digest equals the reviewed digest |
| `'chief-editor'` counted as the former entitlement | Result lists it as a separate class with zero effect on the match count |
| One environment stands in for the other | One recorded result per applicable environment |

### Result

Selection is accepted for recording; the child is **not** advanced by it. B-119 stays `Open` under the weakest-child
rule. Query not run; no result exists.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | Human-run aggregate query as the selected access path | Phase 1 — record in the `D-251` addendum (gap 1) |
| **Approve-with-conditions** | Lane B's scope record and query | Phase 1 — Lane B drafts; Lane A scope and least-privilege review before any run |
| **Defer** | Query execution, result classification, compatibility migration, `V1-SM05` selection, work order, construction | The recorded review, then a later bounded Judge act |
| **Reject** | Bare "Option A" as an identifier, an agent-held credential, a write-capable query, or counting `'chief-editor'` as the deprecated entitlement | Use the canonical terms above |

## Lane B submission — deterministic D-251 manual-run artifacts, 2026-09-21

**Authority and boundary.** The Judge approved Lane B generating the artifact. This submission answers Lane A's
request for the scope record, candidate preflight, aggregate assessment and evidence format. It does not approve
the text on Lane A's behalf and does not authorize execution. No database was accessed or changed; no credential,
reset, migration, MMF selection, work order or construction is included.

### Submitted byte-exact artifacts

The two `.sql.md` files contain SQL only. The compound suffix deliberately receives the repository's `*.md`
UTF-8/LF text treatment, so checkout line-ending conversion does not alter the reviewed bytes. Execute the file
contents, not a SQL block copied from conversation history.

| Artifact | SHA-256 of submitted bytes |
|---|---|
| `docs/handoff/artifacts/B-119/PREFLIGHT-D251-CANDIDATE-COLUMNS-V1.sql.md` | `d2021679f66e633c7aacc2c4385540eaceff6ae9417e7e822e56f102f9347bbe` |
| `docs/handoff/artifacts/B-119/QRY-D251-STORED-VALUE-ASSESSMENT-V3.sql.md` | `0e809a6899e41d3507510dba58c49d1438617705535dc3dcce18015d9d385cde` |

`docs/handoff/artifacts/B-119/D251-MANUAL-RUN-RECEIPT.md` is the return form. Use one copy per current
environment. It is not part of either executable digest.

### Scope record submitted for Lane A review

| Field | Submitted scope |
|---|---|
| Access path | Human-run aggregate query; `DEP-05` remains intact; no agent credential |
| Current environments | Existing local database and the one provisioned Supabase project; a newly created disposable local database is reproducibility evidence only and cannot replace either current-environment result |
| Included schema | Application-owned `public` schema |
| Excluded schemas | Supabase platform schemas, including `auth`, `storage`, `realtime` and `vault`; the result makes no claim about their metadata |
| Included fields | `C01`–`C09` in the preflight and assessment artifacts: actor/principal provenance, agent provenance, one run-ID negative control and two enum look-alike controls |
| Excluded fields | `E01`–`E09` in the assessment artifact; content-bearing, UUID, JSON-without-governed-path, channel and taxonomy fields remain outside the exact identity assessment |
| Match semantics | `ROLE-CHIEF-EDITOR` is the deprecated exact value; `chief-editor`, `legacy:chief_editor` and enum `chief_editor` are reported separately and are not exact matches |
| Output | Schema, table, column, classification and aggregate counts only; no matching row content |
| Mutation control | `BEGIN TRANSACTION READ ONLY`; `ROLLBACK` closes the transaction. No write statement, DDL or temporary object appears in either executable artifact |
| Executor | Lane A must name the Chief Editor or designated human operator before execution |
| Return path | Operator returns unchanged outputs and one receipt per environment to Lane A; Lane A alone records accepted evidence here |
| Reviewer | Lane A performs scope, least-privilege, exact-byte and digest review before handing either script to the operator |

### Determinism and failure contract

- Candidate rows carry stable IDs `C01`–`C09` and are ordered by `candidate_id`.
- Exclusion rows carry stable IDs `E01`–`E09` and are ordered by `exclusion_id`.
- The preflight is a bounded candidate-column check, not a full-schema fingerprint.
- A missing row, missing relation, type mismatch, permission denial, connection failure or partial result is
  `INACCESSIBLE/FAILED`, never a zero match.
- A current environment is assessed before any local reset. A separately authorized clean replay of `0001` then
  `0002` tests reproducibility and cannot replace current-environment evidence.
- The provisioned project is never reset or changed by ad-hoc object deletion; reviewed forward migrations are the
  only schema-change path.

### Lane A acceptance steps

1. Review the candidate and exclusion classifications against the applied schema.
2. Recompute both SHA-256 values from the submitted repository bytes and compare them with this submission.
3. Record acceptance or requested corrections; do not execute while either artifact is unaccepted.
4. Name the human operator and the non-secret local and provisioned Studio destinations.
5. Give the accepted repository artifacts and one receipt per environment to the operator.
6. Validate the returned preflight and aggregate outputs. Only complete, independently attributable zero exact-match
   results in both current environments satisfy the `D-251` child.
7. Keep B-119 `Open`; update the SM05 evidence reference only after the result is accepted. Do not infer MMF
   selection, Lane B activation or construction authority.

### Submission disposition

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | Lane B generation of the two deterministic SQL artifacts and manual-return form | Phase 1 — submitted for Lane A review |
| **Approve-with-conditions** | Scope, candidate and exclusion classifications | Phase 1 — Lane A exact-byte, schema and least-privilege review |
| **Defer** | Human execution and `D-251` result classification | After Lane A acceptance, named operator and destination confirmation |
| **Defer** | Compatibility migration, SM05 selection, work order and construction | Only through their separately governed gates |
| **Reject** | Execution from chat text, agent-held credentials, reset-before-assessment, partial output treated as zero, or whole-entry closure from this submission | Preserve the bounded evidence contract |

## Lane A consolidation — Judge decisions on Lane B's D-251 submission; corrections specified to Lane B, 2026-09-21

**Authority and boundary.** Judge decisions given directly in the Lane A conversation on 2026-09-21, read at commit
`6e0b85a8a8699de8331ea5efc24806eb3d3bb67e`. They answer the four decisions Lane A requested and approve fixing three
gaps. This entry **specifies** the corrections to Lane B's SQL (`D-56`: the artifacts are Lane B's authorship) and
records the decisions; it edits neither SQL file, runs no query, lifts no `DEP-05`, mutates no database, selects no MMF
and authorizes no construction. Lane B's `V3` assessment and `V1` preflight are **not accepted for execution** and are
superseded when Lane B returns the corrected version.

### Decisions recorded (normalized)

| # | Judge decision | Recorded meaning |
|--:|---|---|
| 1 | Gap 2: the `6e0b85a` Register row governs | The current local environment is **the local disposable database used by the migration tests**, plus the one provisioned Supabase project. Lane B's "existing local database" wording is **not adopted**; a clean replay of `0001` then `0002` into that database is the local environment's normal state, not a separate reproducibility-only class |
| 2 | Gap 4: `jsonb` exact member match, with version number | `editorial_reports.snapshot` is **in scope**: exact scalar or collection-member equality, never substring, key-name or prose matching. Results are reported **per `schema_version`**, and the assessment artifact's own version number increments (`V3` to `V4`), so both readings of "version number" are met |
| 3 | The operator is the Chief Editor (the user) | Named human operator for both environments. The Chief Editor and the Judge are the same person (`D-158`), so **independence rests on the digest match, unchanged pasted output and Lane A's review, not on a second person**. This limitation is recorded; the Judge confirms it by returning the receipt |
| 4 | Labelled "gap 4" in the message, but it answers **gap 7** | `docs/handoff/artifacts/<entry>/` holds **evidence attachments, not entries**; the attachments are listed in `V1-ARTIFACT-INVENTORY` under `D-54`. Checks already treat the directory correctly (`handoff-response` counts entries non-recursively; `graph-coverage` excludes `docs/handoff/`) |
| a | Fix gaps 3, 4 (`jsonb`) and 5 | Specified below for Lane B. Gaps 1, 6, 8 and 9 were not in the approval and stay open |

### Corrections specified to Lane B (return as `V4`; nothing runs until Lane A accepts)

| Gap | Required change | Acceptance evidence |
|---|---|---|
| **3 — hand-picked lists** | Add a metadata-only **reconciliation** step to the preflight: every column in the `public` schema whose type is text, character, array, enum, `json` or `jsonb`, and that is in neither `C01`–`C09` nor `E01`–`E09`, is returned as `UNRECONCILED`. The expected result is **zero rows**. Every column found (about 25 free-text columns are known to be absent today, among them `summary`, `category`, `reason`, `formatted_content`, `source_author`, `risk_tier_reason`) is either added as a candidate or listed as an exclusion **with a stated reason**. The preflight also compares enum **type names**, not only "USER-DEFINED", and verifies that each `E` row's column exists with the stated type. It runs as the project owner role, because `information_schema` shows only columns the role may see | Reconciliation returns zero rows in both environments; a deliberately unlisted column makes it return one (negative test) |
| **4 — `snapshot` (`jsonb`)** | Remove `E04`. Add a candidate that tests member-value equality against `ROLE-CHIEF-EDITOR` anywhere in the document, reports the look-alike values separately, groups by `schema_version`, and returns counts only. No key name, value or fragment is returned | The candidate has stable ID `C10`; a fixture row containing the exact value counts once, one containing a substring or a key of that name counts zero |
| **5 — false zero** | Add `total_rows` to every candidate row (and per `schema_version` for `C10`) | A candidate with zero matches and zero total rows is distinguishable from one with zero matches over real rows; the operator confirms row counts are plausible against the environment |
| Receipt | Add: artifact commit SHA, operator (`Chief Editor`), environment (`local disposable` or `provisioned Supabase`), per-file digest **recomputed from the committed copy**, and the reconciliation return | One receipt per environment, all fields filled, digests equal to the reviewed ones |

### Gap ledger after these decisions

| Gap | State |
|--:|---|
| 1 acceptance and commit anchor | Acceptance withheld until `V4`; Lane B's `V3`/`V1` files and this record are committed as history only, marked not accepted for execution |
| 2 environment definition | **Decided** (decision 1); Register addendum applied |
| 3 reconciliation | **Specified to Lane B** |
| 4 `jsonb` | **Decided and specified** |
| 5 total rows | **Specified to Lane B** |
| 6 dry run | **Open**: Lane B dry-runs `V4` in the local disposable database and confirms every result set is visible before any human run. No agent holds a credential; the dry run is Lane B's, on a disposable database it may create |
| 7 attachments directory | **Decided** (decision 4); Inventory row applied |
| 8 four closure branches | **Open**: the acceptance steps must cite all four branches of the closure table above and map `INACCESSIBLE/FAILED` to "unresolved" |
| 9 operator independence | **Recorded as a limitation** (decision 3); Judge confirmation by returning the receipt |

### Cross-artifact review

| Artifact | Disposition |
|---|---|
| `Modular_PRD.md` | Unaffected: no requirement, status or module changes; the namespace rename it already carries stands |
| Storyboard, story panels, UML, data flow | Unaffected: this is an evidence procedure, not a journey, state, route or event |
| Encyclopedia | Unaffected: no vocabulary change beyond statement D; Entries 01/04/05/06 stay deferred with their return conditions |
| Register | Affected: addendum recording decisions 1–4 |
| `V1-ARTIFACT-INVENTORY.md` | Affected: one directory row |
| `V1-BUILD-SPEC.md`, work packets, Fn Specs, traceability | Unaffected: no scope, sequence or DoD moves; the `V1-SM05` evidence box stays unchecked |
| Graphify | Curated `D-251` node text extended; rebuild once after the canonical edit |

### Success criteria for the child

| Failure | Passing evidence |
|---|---|
| A column is never assessed | Reconciliation returns zero `UNRECONCILED` rows in both environments |
| An empty or invisible table reads as clean | Every result carries `total_rows` |
| `jsonb` content is matched loosely or leaked | Exact-member fixture passes, substring fixture counts zero, no content is returned |
| The wrong local database is assessed | Receipt names the local disposable database used by the migration tests and its applied migrations |
| Bytes differ from those reviewed | Digest recomputed from the committed copy equals the reviewed digest |
| Zero is reported for an unclassified match | Every non-zero row carries a classification from the four closure branches |

### Result

Decisions recorded; corrections specified; `V3` not accepted for execution. `D-251` is **not** satisfied, B-119 stays
`Open`, no result exists.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | Decisions 1–4 and the specified fixes for gaps 3, 4 and 5 | Phase 1 — Lane B returns `V4` |
| **Approve-with-conditions** | Lane B artifacts as history | Not accepted for execution; acceptance only after `V4`, the dry run and the digest recompute |
| **Defer** | Human run, result classification, `D-251` satisfaction, `V1-SM05` selection | `V4` accepted, both receipts returned and classified |
| **Reject** | Running `V3`, treating zero without `total_rows` as clean, a second local database class, `E04`'s exclusion of `snapshot` | Superseded by the corrections above |

## Lane A answer — Lane B's independent review of `004d717`; eleven refinements dispositioned, 2026-09-21

**Authority and boundary.** Lane B reviewed the state at `004d717` and returned eleven gaps; the review was given in
the Lane A conversation and had no repository record, so it is recorded here. Read at commit
`004d717` (`docs: D-251 addendum - record Judge decisions on Lane B's manual-run submission`). Handoff-only: this
answer changes no canonical source, runs no query, lifts no `DEP-05`, edits neither SQL file and authorizes no
construction. It **refines the `V4` specification already recorded above**; it adds no new Judge decision.

**Numbering.** Lane B's gaps collide with Lane A's earlier 1–9, so they are cited here as `LB-1`…`LB-11`. The earlier
Lane A gap numbers keep their meaning.

### Lane A's check of Lane B's factual claims

| Claim | Check |
|---|---|
| Lane B may commit only one exact `B-NNN` entry | Confirmed against `D-184`: the `Eligible` exception names `docs/handoff/B-NNN-*.md` only and authorizes no other path or mixed staging |
| Snapshot content can be prose | Confirmed: `editorial_reports.snapshot` is the accepted formatted-content snapshot (`FN-PUBLICATION-09-10-13.md`), so a match cannot be classified from counts alone |
| A root scalar cannot occur | Confirmed: the table carries `check (jsonb_typeof(snapshot) = 'object')`, so the root is always an object |
| Views may appear in reconciliation | Precautionary: the migrations create no view today, but the provisioned project may hold objects the migrations do not, so the rule is still needed |

### Disposition — parent first

| Order | Ref | Lane A disposition | Relation to earlier work |
|---:|---|---|---|
| 1 | `LB-1` return path | **Adopted; Judge confirmation requested** (below). `V4` is drafted by Lane B **without committing**; Active Lane A reviews and commits the exact attachment set with its B-119 acceptance, then recomputes every digest from that commit | Extends gap 1 |
| 2 | `LB-2` catalog parity | **Adopted.** Stable IDs in both files; acceptance compares the ID, relation, column and type catalogs of the preflight and assessment | New |
| 3 | `LB-3` relation scope | **Adopted.** Reconciliation reports relation kind; application-owned base tables and views are in scope; each governed storage source is scanned once and a derived view that duplicates a base table is excluded with its reason | Refines gap 3 |
| 4 | `LB-4` native type identity | **Adopted.** Compare `data_type`, `udt_schema`, `udt_name` and the array element type | Refines gap 3's enum-name check |
| 5 | `LB-5` `C10` shape | **Adopted.** Receipt supports `C01`–`C10`; `C10` is one row per `schema_version`; order by `candidate_id`, then `schema_version` | Follows from gap 4 |
| 6 | `LB-6` JSON semantics | **Adopted.** Target = any recursively nested JSON **string value** (object values and array elements); key names and substrings are excluded; each report row counts once (existence semantics). The root is always an object, so no root-scalar rule is needed | Refines gap 4 |
| 7 | `LB-7` non-zero `C10` | **Adopted; Judge confirmation requested** (below). Any non-zero `C10` is `unresolved` unless a separately approved, non-content-bearing aggregate can separate a governed identity path from prose | New consequence of gap 4 |
| 8 | `LB-8` visibility | **Adopted, with one addition.** The preflight records `current_user`, relation-level `SELECT` privilege, relation existence and whether the role bypasses row-level security; any missing item is `INACCESSIBLE/FAILED`, never zero. Lane A adds the bypass check because a privilege test alone does not show row filtering | Extends gap 5 |
| 9 | `LB-9` two classifications | **Adopted.** SQL keeps `field_classification`; the receipt gains a separate result table: candidate, count, result classification (one of the four closure branches), treatment, owner, return condition | Refines gap 8 |
| 10 | `LB-10` mixed outcomes | **Adopted.** Overall precedence: unresolved or inaccessible, then living operational, then historical only, then no matches. The stronger branch governs closure and keeps the weaker evidence | New |
| 11 | `LB-11` dry-run evidence | **Adopted.** Record database version, applied migrations, execution role, each result-set name and row count, the negative-fixture results and the file hashes. A syntax-only run is not success | Refines gap 6 |

### `V4` acceptance criteria — one consolidated list

`V4` is ready for Lane A review only when all of these hold; nothing else is required beyond the earlier rows above.

1. The committed-byte digests, recomputed from Lane A's commit, equal those in the receipt.
2. The preflight and assessment catalogs match by stable ID, relation, column and type.
3. Reconciliation returns zero unclassified columns and covers base tables and views once each.
4. Type checks include native enum and array identity.
5. `C10` orders deterministically per `schema_version`; the receipt supports `C01`–`C10`.
6. JSON fixtures prove exact nested-value match, substring rejection and key-name rejection.
7. Every candidate reports `total_rows`.
8. Missing visibility, privilege or row-level-security bypass is `INACCESSIBLE/FAILED`.
9. The receipt carries the field classification and the separate result classification, and states mixed-result
   precedence.
10. The local disposable database dry run returns every expected result set, in the recorded format.
11. One completed receipt is returned per current environment.

### Judge confirmation requested (two items)

| Item | Consequence to confirm |
|---|---|
| `LB-1` | Lane B cannot commit `V4`. Attachments enter the repository only through Active Lane A. That keeps `D-184` unchanged and means `V4` waits for a Lane A turn |
| `LB-7` | A non-zero `C10` blocks `V1-SM05` until a separately approved aggregate can classify it. A zero result is unaffected |

### Gap ledger and lifecycle

Earlier gaps 1, 6, 8 and 9 stay open and are now carried by `LB-1`, `LB-11`, `LB-9`/`LB-10` and the independence
limitation. Gaps 2–5 and 7 are decided and specified. B-119 remains the single tracking record; no new entry is opened.
B-119 stays `Open`, `D-251` is not satisfied, `V3` is history and must not run, and the `V1-SM05` evidence box stays
unchecked.

### Cross-artifact and drift

`Modular_PRD.md`, storyboard, story panels, UML, data flow, the Encyclopedia, Build Spec, Artifact Inventory, work
packets, Fn Specs and traceability are unaffected: this refines an evidence procedure. The Register is unaffected
because the two Judge confirmations are pending and `D-184` is unchanged. This append is handoff-only, so Graphify
needs no rebuild; `docs-drift` is checked after the commit.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | Lane B's `LB-2`–`LB-6` and `LB-8`–`LB-11` as `V4` refinements | Phase 1 — Lane B drafts `V4` uncommitted |
| **Approve-with-conditions** | `LB-1` return path and `LB-7` non-zero `C10` rule | Judge confirms both |
| **Defer** | Dry run, human run, `D-251` satisfaction, `V1-SM05` selection | Lane A accepts committed `V4`; both receipts classified |
| **Reject** | Running `V3`, treating zero as visibility, Lane B committing attachments under `D-184`, an unclassifiable non-zero `C10` closed as historical | Use the consolidated criteria above |

## Lane A answer — Lane B's `V4` plan consolidated: decision table, follow-up steps and what the Chief Editor must confirm, 2026-09-21

**Roles.** Lane B is the raiser; Lane A answers (`D-90`). This entry answers Lane B's review of `e6fdb3a` and the
Judge's request for a breakdown. Read at commit `e6fdb3a`. Handoff-only: it changes no canonical source, runs no query,
edits no SQL, lifts no `DEP-05` and authorizes no construction.

### What the record now supports

Lane B reports a Judge statement that Lane B drafts the `V4` package. That statement is **not** in the repository and
Lane A has not received it as a direct message (`D-183`), so it is recorded as **reported, pending direct confirmation**
below. Even if confirmed it authorizes **preparation only**: no commit of attachments, dry run, environment access,
human execution, acceptance, `D-251` closure, `V1-SM05` selection or construction.

### Normalized language

| Term | Meaning here |
|---|---|
| **`V4` package** | The bundle Lane B drafts. Each artifact keeps its own version: preflight `V2`, assessment `V4`, receipt `V2`. The submitted preflight `V1`, assessment `V3` and unversioned receipt stay as history |
| **`classification pending`** | The state of a non-zero `C10` result until `LB-7` is confirmed. Operationally it is `unresolved`; it is never called historical or living from counts alone |
| **Chief Editor / Judge / operator** | One person (`D-158`), three roles: the Judge decides, the Chief Editor confirms and accepts evidence, the operator runs the queries and returns unchanged output |
| **Raiser / answerer** | Lane B raises; Lane A answers in the same entry |

The `LB-1`–`LB-11` refinements, the consolidated 11-point `V4` acceptance list and the earlier gap numbers are recorded
above and are **cited, not repeated**, in what follows.

### Decision table — parent first, for the Judge's Accept/Reject

| Order | Decision | Depends on | Who decides | Lane A recommendation |
|---:|---|---|---|---|
| 1 | Authorization boundary: Lane B may **draft** `V4`; preparation only | none | Judge (direct message) | **Accept** |
| 2 | `LB-1`: Lane B drafts uncommitted; Active Lane A reviews and commits the exact attachment set | 1 | Judge | **Accept** |
| 3 | `LB-7`: a non-zero `C10` is `unresolved` and blocks `V1-SM05` until a separately approved aggregate can tell an identity path from prose | 1 | Judge | **Accept** |
| 4 | File versions: preflight `V2`, assessment `V4`, receipt `V2` | 1 | Lane A | **Adopt** (no Judge act needed) |
| 5 | Hash sequence: Lane B drafts, Lane A reviews bytes, Lane A commits, hashes are recomputed from the committed blobs, then the Chief Editor enters them in each receipt | 2 | Lane A | **Adopt** |
| 6 | Shared catalog, reconciliation, visibility, deterministic output, classification split and receipt content | 1 | Lane A | **Adopt as already dispositioned** (`LB-2`–`LB-6`, `LB-8`–`LB-11`) |
| 7 | Dry run, human execution, acceptance of results, `D-251` satisfaction, `V1-SM05` selection | 2–6 | Judge, each by a later bounded act | **Defer** |

### What the Chief Editor is asked to do

**`LB-1` — reply Accept or Reject to "Lane B cannot commit `V4`; attachments enter through Active Lane A".**

| If | Effect |
|---|---|
| **Accept** (recommended) | `D-184` stays as written (Lane B commits only its own `B-NNN` entry). Lane B prepares three files and returns them; Lane A commits them in one commit with its acceptance. `V4` is not in the repository until a Lane A turn |
| **Reject** | Nothing can be committed by Lane B. The alternative is a new Register act widening `D-184` to attachment paths for an `Eligible` lane. That changes a lane rule and needs its own decision; Lane A does not recommend it |

**`LB-7` — reply Accept or Reject to "a non-zero `C10` is `unresolved`".**

| If | Effect |
|---|---|
| **Accept** (recommended) | A zero result is unaffected. A non-zero result cannot be classified from counts, because the snapshot holds prose that could contain the exact text; it stays `unresolved` and blocks `V1-SM05` until a separately approved aggregate, returning no content, can separate a governed identity path from prose |
| **Reject** | The Chief Editor must say how a non-zero count is to be classified without reading content. Without that, the assessment can be closed only by dropping `C10`, which contradicts the earlier decision that `snapshot` is in scope |

**Later, and not asked now.** As operator the Chief Editor runs the preflight and the assessment in each current
environment, pastes the unchanged output, and returns one receipt each. The Chief Editor also confirms the recorded
independence limitation and accepts or rejects the final closure classification.

Suggested wording for one direct message (`D-183`: object, action, scope, exclusions):
"Accept `LB-1` and `LB-7` as recorded in `docs/handoff/B-119`. Lane B drafts the `D-251` `V4` package uncommitted.
This authorizes preparation only: no commit by Lane B, dry run, database access, execution, acceptance, closure,
`V1-SM05` selection or construction."

### Step-by-step for Lane A

1. **Record the Judge's answers** on `LB-1`, `LB-7` and the drafting boundary in B-119, quoting the direct message. If `LB-7`
   is accepted, add one line to the `D-251` addendum, because it changes closure semantics, and state every `D-54` tier.
2. **Wait for the uncommitted `V4` draft.** Do not stage Lane B's working-tree files mid-draft.
3. **Review the exact bytes** against the 11-point acceptance list; check for writes and DDL, catalog parity,
   deterministic ordering, JSON semantics, visibility checks and closure-branch handling.
4. **Return corrections in B-119** (raiser Lane B, answerer Lane A); repeat 3–4 until accepted.
5. **Commit once:** the exact attachment set plus B-119's acceptance, in one Lane A commit.
6. **Recompute each digest from the committed blobs** and record them in B-119 and the receipts.
7. **Dry run** in the local disposable database only after a separate Judge act names it, with the recorded evidence
   format; a syntax-only run is not success.
8. **Hand the accepted package to the operator**, one receipt per environment.
9. **Validate the returned receipts**, classify by the fixed precedence, and record the result in B-119 and the `D-251`
   ledger.
10. **Update the `V1-SM05` evidence box** only after an accepted result; touch `V1-SM06` only through its existing
    cross-reference.
11. **Graphify, once, last:** after the final canonical edit, run the rebuild, merge `frag138.json`, then complete the
    pending semantic descriptions, and run `bun run check`.
12. **Lifecycle:** compute B-119 from its children; it stays `Open` until each has a terminal disposition.

### Critical artifacts — what each drives

| Artifact | Drives construction | Drives verification |
|---|---|---|
| `D-251` addendum in the Register | Whether identity compatibility work exists at all | The authority every result is checked against |
| Preflight `V2` | — | Proves the environment matches the assumed schema and role |
| Assessment `V4` | — | The evidence of whether the deprecated value is stored |
| Receipt `V2` | — | The attributable record per environment |
| `V1-SM05.md` DoR evidence box | Gate: no work order until it is checked | Records that the assessment was executed and reviewed |
| `V1-SM06.md` cross-reference | Authorization matrix keeps `ACCESS-ROLE-CHIEF-EDITOR` apart from the sole requester | Regression cases for the separation |
| A new migration, only if living matches exist | The compatibility change itself | Authorization regression tests |

### Cross-artifact review

`Modular_PRD.md`, the storyboard and story panels, UML, data flow, the Encyclopedia, Build Spec, Artifact Inventory, Fn
Specs and traceability are unaffected: this is an evidence procedure with no journey, state, route, event or
persistence change. The Register is affected only if `LB-7` is confirmed (step 1). B-119 remains the single tracking
record.

### Drift and Graphify

`docs-drift` reads synced at `004d717`; HEAD is one handoff-only commit later and this append adds another, both
coverage-excluded, so no rebuild is owed now. The pending semantic descriptions are an older backlog and are completed
last in step 11.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | Drafting-only boundary, file versions and hash sequence | Phase 1 — Lane B drafts `V4` uncommitted |
| **Approve-with-conditions** | `LB-1` return path | Judge Accept/Reject |
| **Defer** | `LB-7` final rule; dry run, execution, `D-251` satisfaction, `V1-SM05` selection | Judge confirmation, then a later bounded act |
| **Reject** | Running `V3`, Lane B committing attachments, a non-zero `C10` closed as classified from counts, treating the reported Judge statement as a direct message | Use the table and steps above |

## Lane A answer — Judge approves `LB-1` and `LB-7`; drafting boundary confirmed; `V4` handed to Lane B, 2026-09-21

**Authority.** Judge direct message in the Lane A conversation, 2026-09-21: "Judge Approved: 1. LB-1 2. LB-7". Read at
commit `08d858d`. Object: `LB-1` and `LB-7` as worded in the two sections above. Scope: recorded below. Exclusions: no
commit by Lane B, dry run, database access, human execution, acceptance of any draft, `D-251` closure, `V1-SM05`
selection or construction (`D-183`). Lane B's review of `08d858d` reports the same drafting approval; `LB-1` as
approved is what defines drafting, so no separate act is left pending.

### What is now decided

| Item | Decision |
|---|---|
| Drafting boundary | Lane B drafts the `V4` package: preflight `V2`, assessment `V4`, receipt `V2`. **Preparation only** |
| `LB-1` | Lane B cannot commit attachments. Lane B returns the three files uncommitted; Active Lane A reviews the exact bytes, commits the accepted set, and recomputes each digest from the committed blobs. This is `D-184` applied as written, not an extension of Lane B's authority |
| `LB-7` | A non-zero `C10` is `unresolved` and blocks `V1-SM05` until a separately approved, non-content-bearing aggregate can classify it; a zero result is unaffected. Recorded in the Register (`D-251` addendum) |

### Language retired

"Reported, pending direct confirmation" (drafting boundary) and "classification pending" (non-zero `C10`) are both
superseded by the rows above. Historical text is unchanged.

### One addition to the `V4` acceptance list

Lane B proposed that each draft carry a banner. Adopted as item 12 of the consolidated list: **every file states "Draft
for Lane A review. Not approved for execution. No database access authorized."** Lane A removes it only in the commit
that accepts the file. Lane B's static review (parity, ordering, no write or DDL, no identifiers or content, all four
closure branches, variable `C10` rows, explicit failures instead of zero) is file review, **not** a dry run. The rest of
Lane B's plan restates `LB-2`–`LB-6` and `LB-8`–`LB-11` and is not repeated.

### What happens next — parent first

| Order | Act | Owner | State |
|---:|---|---|---|
| 1 | Record the Judge's answers (Lane A step 1) | Lane A | **Done** by this entry and the Register confirmation |
| 2 | Draft the three files with the banner; static review; return uncommitted | Lane B | **Next** |
| 3 | Review exact bytes against the 12-point list; corrections through B-119 | Lane A | After 2 |
| 4 | Commit the accepted set once; recompute digests from the blobs; record acceptance | Lane A | After 3 |
| 5 | Dry run in the local disposable database | Lane B | Needs its own Judge act |
| 6 | Human run and one receipt per environment | Chief Editor (operator) | After 4 and 5 |
| 7 | Classify by fixed precedence; update the `V1-SM05` box only on an accepted result | Lane A, Judge | After 6 |

The Chief Editor has nothing further to confirm until step 5. The remaining Judge acts are the dry-run authorization
and the final acceptance of the classified result.

### Cross-artifact and drift

Register affected (`LB-7` line, applied). `Modular_PRD.md`, storyboard, story panels, UML, data flow, the Encyclopedia,
Build Spec, Artifact Inventory, work packets, Fn Specs and traceability unaffected. B-119 stays the single tracking
record and stays `Open`; `D-251` is not satisfied; no `V4` file exists yet.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | `LB-1`, `LB-7` and the drafting boundary | Phase 1 — Lane B drafts `V4` uncommitted |
| **Approve** | Draft banner as acceptance item 12 | Phase 1 — Lane B includes it |
| **Defer** | Dry run, human run, `D-251` satisfaction, `V1-SM05` selection | Later bounded Judge acts |
| **Reject** | Running `V3`, executing any draft, Lane B committing attachments, classifying a non-zero `C10` from counts | Preserve the recorded boundary |

## Lane A answer — amended `V4` drafting and acceptance contract; Judge approves Lane B's full banner-free re-review, 2026-09-21

**Authority.** The Judge's answer, in the Lane A conversation on 2026-09-21, to Lane A's question on the banner workflow:
Lane B performs a **full independent review of the complete banner-free files before Lane A commits them**, in place of a
mechanical one-line diff alone (`D-183`: object = the acceptance sequence; scope = the `V4` package; exclusions = below).
Read at commit `a5bdcc7`. This section **replaces acceptance item 12 only**; items 1–11 of the consolidated list stand.
It folds in three rounds of Lane A and Lane B corrections that had not been recorded. It changes no canonical source,
writes no SQL, runs no query, edits no attachment, lifts no `DEP-05` and authorizes no dry run, human run, closure,
`V1-SM05` selection or construction. The Register is unaffected: no decision changes.

### The contract, parent first

| Order | Rule | Detail |
|---:|---|---|
| 1 | **Manifest** | Exactly `docs/handoff/artifacts/B-119/PREFLIGHT-D251-CANDIDATE-COLUMNS-V2.sql.md`, `.../QRY-D251-STORED-VALUE-ASSESSMENT-V4.sql.md` and `.../D251-MANUAL-RUN-RECEIPT-V2.md`. No historical file is renamed or overwritten. Acceptance records these three literal paths |
| 2 | **Banner** | One leading line: `-- Draft for Lane A review. Not approved for execution. No database access authorized.` in each SQL file; the same sentence as a bold blockquote in the receipt. Removal deletes the first physical line and its LF and preserves every other byte; zero CR bytes before and after |
| 3 | **Static safety (Lane B, before return)** | Top-level statements limited to the comment, `BEGIN TRANSACTION READ ONLY`, `SELECT`/`WITH` (with `UNION ALL`, `VALUES`, ordering) and `ROLLBACK`. Functions limited to a named list (identity and privilege inspection, aggregates, JSON path existence and type, string and null handling, catalog reads). Banned: any DDL or DML, `SET`, `COPY`, `DO`, `FOR UPDATE`/`FOR SHARE`, and side-effecting functions such as `set_config`, `pg_sleep`, `nextval`, `setval`, advisory locks and large-object calls. This is a **safety check, not syntax proof**; syntax is first proven at the dry run |
| 4 | **Catalog parity** | The preflight owns the full catalog with complete type identity (`data_type`, `udt_schema`, `udt_name`, array element type). Two ordered sets are compared **separately**: `C` (ID, schema, relation, relation kind, column, type identity) and `E` (the same plus the exclusion reason). Both diffs must be empty. The assessment repeats the ID, schema, relation and column literally per candidate |
| 5 | **Visibility, per relation** | Full visibility passes only if the session is superuser, has `rolbypassrls`, is the relation owner with `FORCE ROW LEVEL SECURITY` off, or the relation has row security disabled; and holds `SELECT`. Owner-role **membership** is reported but is not a bypass. Any application-owned view fails closed as `VISIBILITY-UNPROVEN`, unless it is a stated duplicate of an assessed base table with its exclusion reason |
| 6 | **Failure states** | `ARTIFACT-INVALID`, `ENVIRONMENT-INACCESSIBLE`, `VISIBILITY-UNPROVEN`, `EXECUTION-FAILED`, each recorded with its SQLSTATE; all four map to the `unresolved` branch, never to zero. The earlier label "INACCESSIBLE/FAILED" maps onto these; historical text is unchanged |
| 7 | **Four hash fields** | `Lane-B-Draft-SHA256` (banner-bearing draft), `Lane-B-Banner-Free-Review-SHA256` (the final files Lane B re-reviewed), `Lane-A-Accepted-Blob-SHA256` (committed Git blob, read with `git show <commit>:<path>`) and `Executed-SHA256`. The draft hash differs by design. Required: review = accepted blob = executed, for each of the three files |
| 8 | **Two Lane B returns** | Durable sections in B-119, labelled `D251-V4-DRAFT-RETURN` and `D251-V4-FINAL-REVIEW-RETURN`. Neither is a new entry. Each Lane B commit changes **one path only**, B-119, staged by explicit path |
| 9 | **B-119 has one writer at a time** | Lane A leaves no uncommitted B-119 edit at the start of a Lane B turn; Lane B checks that its diff of B-119 is only its own section before staging that path; Lane A commits every append immediately. Both agents share one working tree, so a whole-file commit would otherwise sweep the other's lines |
| 10 | **Staging** | While unreviewed attachments are in the working tree, Lane A stages by explicit path only and reads `git status` before every commit. No `git add -A` |
| 11 | **Correction loop** | A defect at any review stops acceptance. The next version gets a new number and a new file; a reviewed version is never patched in place. The rejected uncommitted files are removed from the working tree once their hashes and the defect are recorded, so they cannot be staged or run. Review restarts from the draft review |

### Sequence — parent first, with the durable trace of each step

| Step | Owner | Act | Durable record |
|---:|---|---|---|
| 1 | Lane A | Record this contract | This section |
| 2 | Lane B | Draft the three files with banners; static review (rules 2–5); zero CR bytes | — |
| 3 | Lane B | Return the drafts | `D251-V4-DRAFT-RETURN` in B-119: paths, checklist result, `Lane-B-Draft-SHA256`, and the sentence "none of the three attachments was staged, committed or executed; this section is the only staged and committed path" |
| 4 | Lane A | Review the banner-bearing drafts against items 1–11 and the rules above; corrections return through B-119 | Lane A section in B-119 |
| 5 | Lane A | Remove exactly the banner line and its LF; prove the transformation; compute the banner-free hashes | Same Lane A section: the banner-free hashes, committed by explicit path before Lane B's review |
| 6 | Lane B | Full independent review of the complete banner-free files: manifest, both catalogs, ordering, visibility, read-only transaction, allowlist, no identifiers or content, `total_rows`, `C10` exact-value semantics, four closure branches, mixed-result precedence, receipt completeness, LF-only bytes. Lane B changes no file | — |
| 7 | Lane B | Return the review | `D251-V4-FINAL-REVIEW-RETURN`: paths, the banner-free hash of each, checklist result, verdict ready or returned |
| 8 | Lane A | Recompute each working-copy hash; each must equal Lane B's review hash and Lane A's own step-5 value; stage only the three literal paths and the B-119 acceptance; commit | Acceptance commit |
| 9 | Lane A | Hash each committed blob; each must equal Lane B's review hash | `Lane-A-Accepted-Blob-SHA256` recorded in B-119 and the receipts. A mismatch invalidates the commit: corrected new commit, new review |
| 10 | — | **Stop.** The dry run needs its own Judge act | — |

Lane B's step-6 review is of its own authored files, so it is an exact-byte and transformation check by the author;
independent judgement of the content is Lane A's step 4.

### Success criteria, derived from failure

| Failure | Passing evidence |
|---|---|
| Committed bytes differ from the bytes Lane B re-reviewed | Review hash = pre-stage hash = accepted-blob hash, for all three files |
| Banner breaks SQL or leaves a blank first line | The banner is a `--` comment and removal is the first line plus LF; zero CR bytes |
| A Lane B commit sweeps other content | Each Lane B return commit changes exactly one path, B-119 |
| A draft is run or staged early | Banner present until the acceptance commit; explicit-path staging; rejected files removed |
| A side-effecting function slips through | The function allowlist, not a keyword search |
| Parity is judged by eye | Both the `C` and `E` diffs are empty |
| A filtered or invisible table reads as clean | Per-relation visibility proven for the session, or `VISIBILITY-UNPROVEN` |
| A failure reads as zero | State plus SQLSTATE on every failure |
| A reviewed version is patched in place | New version number and restarted review |

### Cross-artifact and drift

`Modular_PRD.md`, storyboard, story panels, UML, data flow, the Encyclopedia, Build Spec, Artifact Inventory, Fn Specs,
work packets and traceability are unaffected: this is evidence-handling procedure. The Register is unaffected. B-119
remains the single tracking record and stays `Open`; `D-251` is not satisfied; no `V4` file exists yet.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | Rules 1–11 and the ten-step sequence | Phase 1 — Lane B drafts (step 2) |
| **Approve** | Lane B's full banner-free re-review, with the fourth hash | Phase 1 — steps 6 to 9 |
| **Defer** | Syntax proof, dry run, human run, `D-251` satisfaction, `V1-SM05` selection | Later bounded Judge acts |
| **Reject** | Mechanical-diff-only acceptance, committing bytes without Lane B's review hash, patching a reviewed version in place, `git add -A` while drafts exist, treating owner-role membership as an RLS bypass | Use the contract above |

## Lane A answer — Lane B's review of the recorded contract: five defects corrected, one already covered, 2026-09-21

**Authority and boundary.** Lane B's review of `dd118b1` (given in the Lane A conversation, unrecorded until now) found
impossible or unsafe requirements in the ten-step contract. Lane A checked each against the recorded text. Read at
commit `dd118b1`. Handoff-only: this amends rules 6, 7 and 11 and steps 9–10 of the section above and nothing else. No
SQL is written, no query run, no attachment touched, and the Register is unaffected. Step 2, Lane B drafting the three
banner-bearing files, was already authorized and is unchanged.

### Lane A's check of Lane B's six points

| # | Lane B point | Verdict against the record |
|--:|---|---|
| 1 | A receipt cannot contain its own accepted hash | **Real.** Step 9 says the hashes go "in B-119 and the receipts"; for the receipt itself that is a self-reference |
| 2 | The receipt is never executed, so rule 7's three-way equality cannot hold for it | **Real** |
| 3 | Not every failure has a SQLSTATE | **Real.** A static finding or a connection failure precedes any PostgreSQL reply |
| 4 | Deleting rejected drafts loses the evidence | **Real.** A hash cannot reconstruct a deleted file |
| 5 | The accepted-blob hashes exist only after the acceptance commit | **Real.** A second B-119 commit is unavoidable |
| 6 | The allowlist must work on statements, not words | **Already covered.** Rule 3 allows named top-level statements and a named function list, and the success table says "not a keyword search". No change |

### Amendments, parent first

| Order | Amends | Corrected rule |
|---:|---|---|
| 1 | Rule 7 (hash equality) | The equality applies **per artifact kind**. For each SQL file: `Lane-B-Banner-Free-Review-SHA256` = `Lane-A-Accepted-Blob-SHA256` = `Executed-SHA256`. For the receipt template: review hash = accepted-blob hash, and `Executed-SHA256` is `NOT-APPLICABLE` |
| 2 | Step 9 (receipt hashes) | The committed receipt template carries **blank** execution fields and **no hash of itself**. All three accepted-blob hashes are recorded only in B-119. The operator copies the two SQL hashes from B-119 into each completed receipt. A **completed** receipt is a later, separate attachment, outside the three-file manifest, one per environment, committed by Lane A and given its own `Completed-Receipt-SHA256`, recorded in B-119 and never inside itself |
| 3 | Rule 6 (failure states) | Each failure records: state; **source** (`STATIC-REVIEW`, `CONNECTION` or `DATABASE`); SQLSTATE when PostgreSQL supplied one, otherwise `SQLSTATE: NOT-AVAILABLE`; a **sanitized** error summary (no connection string, credential or row content); owner; return condition. All four states still map to `unresolved` |
| 4 | Rule 11 (rejected drafts) | Nothing is deleted. A rejected draft keeps its banner and its versioned path, its hashes and defect are recorded in a B-119 ledger row marked `REJECTED — not executable`, and Lane A commits it in a **separate** commit from any acceptance. Corrections use a new versioned filename. This matches how the historical `V1`/`V3` files are already held |
| 5 | Steps 9–10 | Split into three. **9** Lane A commits the acceptance commit: the three artifacts plus B-119's acceptance statement. **10** Lane A hashes each committed blob. **11** Lane A makes a **B-119-only evidence-anchor commit** recording the acceptance commit SHA and the accepted-blob hashes. The anchor commit changes no artifact. Step 11 is followed by the stop; the dry run still needs its own Judge act |

### Success criteria, derived from failure

| Failure | Passing evidence |
|---|---|
| The receipt claims its own hash | The committed template contains no hash of itself; every accepted hash is in B-119 |
| The receipt fails an equality it can never meet | `Executed-SHA256` is `NOT-APPLICABLE` for the receipt; the two SQL files meet the three-way equality |
| A failure invents a SQLSTATE | Every failure row carries a source and either a real SQLSTATE or `NOT-AVAILABLE` |
| A rejected draft cannot be reproduced | Its file is in the repository history with a `REJECTED` ledger row |
| The anchor commit alters bytes | It changes exactly one path, B-119, and the blob hashes are unchanged |
| A completed receipt is confused with the template | It is a separate file with its own recorded `Completed-Receipt-SHA256` |

### Cross-artifact and drift

`Modular_PRD.md`, storyboard, story panels, UML, data flow, the Encyclopedia, Build Spec, Artifact Inventory, Fn Specs,
work packets and traceability are unaffected; the Register is unaffected. B-119 remains the single tracking record and
stays `Open`; `D-251` is not satisfied; no `V4` file exists. `docs-drift` reads synced at `a5bdcc7`, HEAD is handoff-only
commits ahead of it, so no Graphify rebuild is owed.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | Amendments 1–5 and Lane B drafting (step 2) | Phase 1 — Lane B drafts uncommitted |
| **Approve** | Rule 3 as recorded | No change |
| **Defer** | Syntax proof, dry run, human run, `D-251` satisfaction, `V1-SM05` selection | Later bounded Judge acts |
| **Reject** | A receipt containing its own hash, an execution hash required of the receipt, an invented SQLSTATE, deleting the only copy of a rejected draft | Use the amended rules above |

## Lane A answer — Lane B's review of `0dd5e87`: five determinism defects corrected; contract freeze recommended, 2026-09-21

**Authority and boundary.** Lane B's review of `0dd5e87` (given in the Lane A conversation, unrecorded until now)
found five points that would stop two reviewers reaching the same verdict. Lane A checked each against the recorded text.
Read at commit `0dd5e87`. Handoff-only: this replaces rule 4 and adds to rule 3, rule 7 and the manifest note of the
contract above, and changes nothing else. No SQL is written, no query run, no attachment touched, and the Register is
unaffected. Step 2, Lane B drafting the three banner-bearing files, remains authorized and is the next act.

### Lane A's check

| # | Lane B point | Verdict against the record |
|--:|---|---|
| 1 | Rule 4 compares complete `C` and `E` tuples but the assessment repeats only four fields | **Real.** Two files cannot produce an equal complete-tuple comparison if one holds fewer fields |
| 2 | Rule 3's "named function allowlist" names no function | **Real.** Categories are not a list |
| 3 | Completed receipt filenames are undefined | **Real** |
| 4 | Rejection versioning is ambiguous | **Real** |
| 5 | Receipt hash fields can be confused | **Real** |

### Amendments, parent first

| Order | Amends | Corrected rule |
|---:|---|---|
| 1 | Rule 4 (catalog parity) | Both SQL files carry the **same complete catalog block**, delimited by `-- BEGIN CATALOG` and `-- END CATALOG`. `C` rows: ID, schema, relation, relation kind, column, `data_type`, `udt_schema`, `udt_name`, array element type, field classification. `E` rows: the same fields plus the exclusion reason. Parity is a **byte-identical block** in both files, extracted by the markers and diffed; both the `C` and `E` diffs must be empty. Each `C` ID has exactly one executable candidate query, checked by ID. The preflight verifies the block against the real database at run time; the assessment's block is a declaration, so a type it assumed wrongly fails closed as `ARTIFACT-INVALID` |
| 2 | Rule 3 (function safety) | Each SQL file carries a comment manifest `-- Allowed-Functions:` listing every called function by qualified name, and `-- Allowed-Relations-Read:` listing every relation read. Every called function and every read relation must appear; every manifest entry must be used; no user-defined function is permitted. The list is **produced from the actual draft**, not guessed in advance, and Lane A reviews each literal entry. Operators and casts are reviewed in the same pass |
| 3 | Manifest note (completed receipts) | Reserved names, not created now: `D251-MANUAL-RUN-RECEIPT-V2-LOCAL-A01.md` and `D251-MANUAL-RUN-RECEIPT-V2-SUPABASE-A01.md`. A rerun increments the attempt (`-A02`); an earlier attempt is never overwritten. A failed attempt is evidence and is kept |
| 4 | Rule 11 (versioning) | Versions are per artifact: a changed preflight, assessment or receipt template increments **its own** number. **Any** change to any artifact sends the complete three-file package back through both reviews. "`V4` package" stays shorthand for the assessment-led bundle and is not a shared version number. B-119 records the current manifest by literal path |
| 5 | Rule 7 (hash fields) | Three receipt-related fields replace any generic "receipt hash": `Receipt-Template-Accepted-Blob-SHA256`, `Local-Completed-Receipt-SHA256` and `Supabase-Completed-Receipt-SHA256`, each tied to its attempt number in the B-119 ledger |

### Recommendation: freeze the contract

Four rounds of Lane A and Lane B review have produced eleven rules and no draft file. Further changes should be
accepted only when a rule is **impossible or unsafe** as written; everything else is a refinement found in Lane A's
draft review (step 4), where it can be tested against real text. This is a Lane A recommendation for the Judge, not a
new rule.

### Success criteria, derived from failure

| Failure | Passing evidence |
|---|---|
| Parity is trivially true or always false | The delimited catalog blocks are byte-identical and both diffs are empty |
| Two reviewers read "identity inspection" differently | The manifest names each function and relation; every entry is used and reviewed |
| A result attempt overwrites an earlier one | Attempt-numbered filenames; earlier attempts unchanged |
| One artifact is revised and the others are not rechecked | The whole three-file package restarts both reviews |
| A template hash is mistaken for a result hash | Three distinctly named fields, tied to attempts |

### Cross-artifact and drift

`Modular_PRD.md`, storyboard, story panels, UML, data flow, the Encyclopedia, Build Spec, Artifact Inventory, Fn Specs,
work packets and traceability are unaffected; the Register is unaffected. B-119 stays `Open`, `D-251` is not
satisfied and no `V4` file exists. `docs-drift` reads synced at `a5bdcc7`; every later commit is handoff-only and
coverage-excluded, so no Graphify rebuild is owed.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | Amendments 1–5 and Lane B drafting (step 2) | Phase 1 — Lane B drafts uncommitted |
| **Approve-with-conditions** | Contract freeze | Judge accepts or rejects the recommendation |
| **Defer** | Syntax proof, dry run, human run, `D-251` satisfaction, `V1-SM05` selection | Later bounded Judge acts |
| **Reject** | Comparing partial catalogs, an unnamed function list, overwriting a result attempt, a generic "receipt hash" | Use the amended rules above |

## Lane A answer — Lane B's review of `d2054c0`: name-resolution safety adopted with one simplification, one point rejected as redundant, 2026-09-21

**Authority and boundary.** Lane B's review of `d2054c0` (given in the Lane A conversation, unrecorded until now)
raised six points about how names resolve. Lane A applied the freeze recommendation's test, "impossible or unsafe as
written", to each. Read at commit `d2054c0`. Handoff-only: this amends rule 3 and the manifest markers of the contract
above and nothing else. No SQL is written, no query run, no attachment touched, and the Register is unaffected. Lane B's
drafting (step 2) was already authorized and has still not started. The Judge has not yet answered the freeze
recommendation; it does not block drafting.

### Lane A's check

| # | Lane B point | Test | Disposition |
|--:|---|---|---|
| 1 | Unqualified functions resolve through `search_path` | Unsafe | **Adopt** |
| 2 | Operators and casts resolve indirectly | Unsafe | **Adopt, simplified** (below) |
| 3 | Relation names need schema qualification | Unsafe | **Adopt** |
| 4 | Catalog markers need structural checks | Impossible to compare reliably otherwise | **Adopt** |
| 5 | Manifest markers need the same structural rule | Same | **Adopt** |
| 6 | Runtime proof that every function, operator, cast and type resolves to a system namespace | Neither | **Reject as redundant** |

### Amendments, parent first

| Order | Amends | Corrected rule |
|---:|---|---|
| 1 | Rule 3 (allowed statements) | Each SQL file pins name resolution once: the second statement, directly after `BEGIN TRANSACTION READ ONLY`, is exactly `SET LOCAL search_path = pg_catalog, pg_temp;`. This is the **only** `SET` permitted. It lasts for the transaction only and writes nothing. Because operators are schema-scoped and cannot be qualified readably, one pinned path covers operators and replaces separate operator and cast manifests. A user-defined cast between built-in types cannot exist, because the source or target type must be owned by the creator. Operators and casts are still reviewed by Lane A in the same pass |
| 2 | Rule 3 (functions and relations) | Every callable function is schema-qualified (`pg_catalog.<name>`) and appears in `-- Allowed-Functions:` by its qualified name; no function is accepted by short name. SQL special forms such as `current_user` are listed separately as non-function expressions. Every relation is schema-qualified (`public.`, `information_schema.` or `pg_catalog.`) and listed in `-- Allowed-Relations-Read:`. No temporary relation and no relation resolved through `search_path` is allowed |
| 3 | Rule 4 and the manifests | Static review requires **exactly one** `-- BEGIN CATALOG`, **exactly one** `-- END CATALOG`, start before end, neither marker inside the extracted block, and equal SHA-256 of the two extracted blocks. Each manifest marker (`-- Allowed-Functions:`, `-- Allowed-Relations-Read:`) also appears exactly once, sorted, with no duplicate and no unused entry |

### Why point 6 is rejected

A function called as `pg_catalog.<name>` resolves in `pg_catalog` by construction, and a name that does not exist fails
when the script runs, so the failure surfaces as `ARTIFACT-INVALID`. A separate metadata query would restate what
execution already proves and would add code that itself needs review. Static review still does not claim runtime proof;
the first run proves syntax and resolution together at the authorized dry run.

### Success criteria, derived from failure

| Failure | Passing evidence |
|---|---|
| A shadowing object in `public` changes what a function or operator does | The pinned `search_path`, plus qualified functions and relations |
| Two reviewers extract different catalog blocks | One start marker, one end marker, correct order, equal block hashes |
| A hidden manifest entry approves an undeclared call | Each manifest marker appears once; entries sorted; none unused |
| `SET` becomes a general escape hatch | Exactly one `SET` form is allowed, and it is the pinned one |

### Cross-artifact and drift

`Modular_PRD.md`, storyboard, story panels, UML, data flow, the Encyclopedia, Build Spec, Artifact Inventory, Fn Specs,
work packets and traceability are unaffected; the Register is unaffected. B-119 stays `Open`, `D-251` is not satisfied
and no `V4` file exists. `docs-drift` reads synced at `a5bdcc7`; later commits are handoff-only and coverage-excluded, so
no Graphify rebuild is owed.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | Amendments 1–3 and Lane B drafting (step 2) | Phase 1 — Lane B drafts uncommitted |
| **Approve-with-conditions** | Pinned `search_path` in place of operator and cast manifests | Lane B confirms it is feasible in the drafts |
| **Defer** | Contract freeze; syntax and resolution proof, dry run, human run, `D-251` satisfaction, `V1-SM05` selection | Judge process decision; later bounded Judge acts |
| **Reject** | Unqualified callables or relations, repeated markers, a runtime resolution query that duplicates execution | Use the amended rules above |

## Lane A answer — Lane B's review of `0a900f5`: `pg_temp` retained, cast and operator inventories restored, threat model stated, 2026-09-21

**Authority and boundary.** Lane B's review of `0a900f5` (given in the Lane A conversation, unrecorded until now) raised
five points on the pinned `search_path`, casts and operators. Lane A checked each against the recorded text and, for
point 1, against the PostgreSQL documentation. Read at commit `0a900f5`. Handoff-only: this amends rule 3 and the
attestation wording and nothing else. No SQL is written, no query run, no attachment touched, and the Register is
unaffected. Lane B's drafting (step 2) is still authorized and has not started.

### Lane A's check

| # | Lane B point | Disposition |
|--:|---|---|
| 1 | Remove `pg_temp` from the pinned path | **Reject.** PostgreSQL's guidance on writing `SECURITY DEFINER` functions safely says the temporary schema is searched **first** by default and that `pg_temp` should be written as the **last** entry of `search_path`, because objects in it, including functions and operators, can mask intended ones. Omitting it therefore broadens what is trusted; listing it last narrows it. The pinned statement stays `SET LOCAL search_path = pg_catalog, pg_temp;` |
| 2 | The pinned path does not secure casts | **Adopt.** The earlier rationale overstated this. Cast selection uses the cast catalog for the source and target types, not name resolution |
| 3 | "A user-defined cast between built-in types cannot exist" is too absolute | **Adopt.** A sufficiently privileged role can create casts. The assertion is withdrawn |
| 4 | Operators need a usage inventory | **Adopt** |
| 5 | `SET LOCAL` needs a boundary statement | **Adopt** |

### Amendments, parent first

| Order | Amends | Corrected rule |
|---:|---|---|
| 1 | Rule 3 (scope of the safety checks) | **Threat model.** These checks defend against accidental error and against masking by ordinary, non-privileged objects. They do not defend against a tampered system catalog or a superuser, and they do not need to: the operator is the Chief Editor running the scripts against the Chief Editor's own databases. Stating this bounds the contract; it is not a reason to skip a check |
| 2 | Rule 3 (operators and casts) | Restore two **usage inventories**, both review aids and neither a security boundary: `-- Allowed-Operators:` (each operator with its operand types, for example `= (pg_catalog.text, pg_catalog.text)`) and `-- Allowed-Casts:` (each cast with source type, target type and whether it is binary, function-based or I/O-based). Only reviewed casts are used; no cast is assumed safe because its types are built-in. The same single-occurrence, sorted, no-duplicate, no-unused rule as the other manifests applies |
| 3 | Rule 3 (`search_path`) | Unchanged: `SET LOCAL search_path = pg_catalog, pg_temp;`, directly after `BEGIN TRANSACTION READ ONLY`, is the only `SET` permitted |
| 4 | Attestations and the no-mutation wording | State once, in each SQL file's header comment and in the receipt: "`SET LOCAL search_path` is the sole permitted transaction-local configuration change. It writes no database row or schema object and is rolled back with the transaction." The no-mutation attestation means no data or schema change |

The runtime-resolution query stays rejected: the dry run proves existence, resolution and syntax together.

### Success criteria, derived from failure

| Failure | Passing evidence |
|---|---|
| A temporary object masks a built-in | `pg_temp` is listed last in the pinned path |
| An unreviewed cast or operator is used | Every cast and operator use appears in its inventory, and every entry is used |
| A reviewer reads `SET LOCAL` as a mutation | The boundary sentence appears in each SQL header and in the receipt |
| Hardening continues past its purpose | The threat model is recorded once |

### Freeze

With these amendments Lane A proposes that the contract freeze. The Judge has not answered. If accepted, further
changes are limited to rules that are impossible or unsafe as written; everything else is found in Lane A's draft review
(step 4). A freeze does not block drafting.

### Cross-artifact and drift

`Modular_PRD.md`, storyboard, story panels, UML, data flow, the Encyclopedia, Build Spec, Artifact Inventory, Fn Specs,
work packets and traceability are unaffected; the Register is unaffected. B-119 stays `Open`, `D-251` is not satisfied
and no `V4` file exists. `docs-drift` reads synced at `a5bdcc7`; later commits are handoff-only and coverage-excluded, so
no Graphify rebuild is owed.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | Points 2–5 and Lane B drafting (step 2) | Phase 1 — Lane B drafts uncommitted |
| **Approve-with-conditions** | Contract freeze | Judge accepts or rejects |
| **Defer** | Syntax and resolution proof, dry run, human run, `D-251` satisfaction, `V1-SM05` selection | Later bounded Judge acts |
| **Reject** | Removing `pg_temp` from the pinned path; claiming path pinning secures casts; claiming user-defined casts are impossible | Use the amended rules above |

## Lane A answer — Lane B's review of `f113a61`: `pg_temp` rationale corrected, object-class model recorded, contract provisionally frozen, 2026-09-21

**Authority and boundary.** Lane B's review of `f113a61` (given in the Lane A conversation, unrecorded until now)
verified the retained `pg_temp` against PostgreSQL semantics and raised four further points. Lane A checked them against
the PostgreSQL documentation for `search_path`. Read at commit `f113a61`. Handoff-only: this corrects one rationale and
amends rule 3; the pinned statement and everything else are unchanged. No SQL is written, no query run, no attachment
touched, and the Register is unaffected. Lane B's drafting (step 2) is still authorized and has not started.

### Correction to Lane A's own record

The `f113a61` section said temporary functions and operators in `pg_temp` can mask built-ins. **That was wrong.** The
PostgreSQL documentation for `search_path` says that if `pg_temp` is not listed it is searched first, even before
`pg_catalog`, but that the temporary schema is searched **only for relation and data-type names and never for function or
operator names**. The behavior Lane A kept is right and the reason was overstated. The corrected rationale, which
replaces the earlier one:

> `pg_temp` stays explicitly last in `SET LOCAL search_path = pg_catalog, pg_temp;` because PostgreSQL otherwise searches
> the temporary schema first for relation and data-type names. It is not searched for function or operator names.
> Functions and relations are separately schema-qualified; operator and cast usage is inventoried.

### Lane A's check

| # | Lane B point | Disposition |
|--:|---|---|
| 1 | Cast type names in the SQL must match the inventory | **Adopt, adjusted** (below) |
| 2 | Operator entries need exact identity | **Adopt** |
| 3 | The threat model should distinguish object classes | **Adopt** |
| 4 | The freeze is undecided | **Adopt as provisional** |

### Amendments, parent first

| Order | Amends | Corrected rule |
|---:|---|---|
| 1 | Threat model (rule 3) | One model by object class, replacing undifferentiated prose: **function** — schema-qualified and listed; **relation** — schema-qualified and listed; **operator** — `pg_catalog` first plus a typed usage inventory; **data type** — `pg_catalog` before `pg_temp`, and named in the cast inventory; **cast** — source and target inventory plus Lane A review; **temporary relation or type** — never referenced, `pg_temp` explicitly last |
| 2 | Operator inventory | Each entry records the symbol, left operand type, right operand type and result type, for example `= (pg_catalog.text, pg_catalog.text) -> pg_catalog.bool`. A unary operator records the missing side explicitly |
| 3 | Cast inventory | The source and target types a cast **resolves to** must equal its inventory entry. Because the pinned path resolves built-in names to `pg_catalog`, an unqualified `::text` or `::bigint` in the SQL is acceptable. If a type is written schema-qualified, it must use PostgreSQL's **internal** name (`pg_catalog.int8`, `pg_catalog.bool`, `pg_catalog.text`, `pg_catalog.name`), because the SQL keyword aliases such as `bigint` are not valid after a schema qualifier. Inventory entries use the internal names |
| 4 | Freeze | The contract is **provisionally frozen** for the pre-draft stage: Lane B drafts now; a pre-draft change is accepted only for a rule that is impossible or unsafe as written; ordinary refinements wait for Lane A's review of the real files. The Judge may confirm or lift this; no Judge act is needed to begin drafting |

### Success criteria, derived from failure

| Failure | Passing evidence |
|---|---|
| The record cites a behavior PostgreSQL does not have | The rationale states the object-specific semantics above |
| Two reviewers read an operator entry differently | Each entry carries operand and result types |
| A qualified type name is a syntax error at run time | Qualified names use internal type names |
| Review rounds continue with no file to review | The pre-draft freeze is in force; drafting is next |

### Cross-artifact and drift

`Modular_PRD.md`, storyboard, story panels, UML, data flow, the Encyclopedia, Build Spec, Artifact Inventory, Fn Specs,
work packets and traceability are unaffected; the Register is unaffected. B-119 stays `Open`, `D-251` is not satisfied
and no `V4` file exists. `docs-drift` reads synced at `a5bdcc7`; later commits are handoff-only and coverage-excluded, so
no Graphify rebuild is owed.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | Points 1–4 and Lane B drafting (step 2) | Phase 1 — Lane B drafts uncommitted |
| **Approve-with-conditions** | Provisional freeze | Judge confirms or lifts |
| **Defer** | Syntax and resolution proof, dry run, human run, `D-251` satisfaction, `V1-SM05` selection | Later bounded Judge acts |
| **Reject** | Claiming `pg_temp` is searched for functions or operators; operator entries without operand types; schema-qualified SQL keyword aliases | Use the corrected rules above |

## D251-V4-DRAFT-RETURN — Lane B static review return, 2026-09-21

**Authority and boundary.** The Judge authorized Lane B to draft the three banner-bearing files, perform static review,
and return them uncommitted through this durable section. Lane B created and reviewed the exact manifest below. No SQL
was executed, no database was accessed, and no attachment was staged or committed. Static review found blocking defects,
so the package is returned **not ready for Lane A acceptance or execution**. Under the versioning rule, these reviewed
files are not patched in place; corrections require preflight `V3`, assessment `V5` and receipt `V3` as one newly
reviewed package.

### Returned manifest and draft hashes

| Artifact | `Lane-B-Draft-SHA256` | Static result |
|---|---|---|
| `docs/handoff/artifacts/B-119/PREFLIGHT-D251-CANDIDATE-COLUMNS-V2.sql.md` | `4fc437982679b3fac83974ae8ce8c79145922b985da1867de9c6bd607f9dc43c` | Reject |
| `docs/handoff/artifacts/B-119/QRY-D251-STORED-VALUE-ASSESSMENT-V4.sql.md` | `b27f9f14febbf34a51abb1796b60be8acecc445e0e6a69f6f65beed4c95b61d4` | Reject |
| `docs/handoff/artifacts/B-119/D251-MANUAL-RUN-RECEIPT-V2.md` | `9f9ab79cb55a0d65b2d4754ce4876fcd0145047ee1278de6fc2c7e7bb714faa7` | Reject |

The two catalog blocks are byte-identical and hash to
`8a331b7c51ca57442d62b589c0898ebae2d0d422c0c8e10eab5f381143b2ff54`. Each SQL file has exactly one start marker,
one end marker and one of each manifest marker. All three files are LF-only with zero carriage-return bytes. The draft
banner, read-only transaction, pinned `search_path`, `ROLLBACK`, candidate `total_rows`, per-`schema_version` C10 output
and absence of write/DDL statements are present. These passing checks do not cure the defects below.

### Blocking gaps, parent first

| Order | Gap and guaranteed failure | Draft fix for the next package |
|---:|---|---|
| 1 | The supposedly complete catalog contains only `C01`–`C10` and no `E` rows. Catalog parity is therefore incomplete even though the two partial blocks match | Add every governed exclusion as a stable `E` row with full type identity and a specific exclusion reason; keep the complete block byte-identical in both SQL files |
| 2 | The preflight labels every uncatalogued relevant column `EXCLUDED_NON_IDENTITY_FIELD`. Its `UNRECONCILED` failure state is unreachable, so the reconciliation can falsely pass by silently inventing exclusions | Join the real schema to the fixed complete catalog. A schema column absent from that catalog returns `UNRECONCILED`; a catalog row absent or type-mismatched in the schema returns `ARTIFACT-INVALID`. Success requires neither state |
| 3 | The assessment's catalog CTE is unused. A wrong declared relation, column or type does not fail closed as required | Make every candidate query depend on its matching validated catalog row, or add an assessment guard that prevents results unless the declaration is validated |
| 4 | The preflight calls `pg_get_userbyid` and `has_table_privilege` without `pg_catalog.` qualification, lists unused `pg_catalog.count` and `pg_catalog.format_type`, and does not inventory `current_user` as a special form | Qualify both calls; regenerate the function manifest from actual calls; remove unused entries; add one sorted special-form inventory |
| 5 | Both operator and cast inventories are incomplete, so the required no-unused/no-undeclared review cannot pass | Regenerate sorted typed inventories from every expression and cast actually used, including boolean, null, membership, concatenation and ordering expressions where applicable |
| 6 | Receipt `V2` omits the required attempt-bound `Local-Completed-Receipt-SHA256` and `Supabase-Completed-Receipt-SHA256` fields and has no explicit reconciliation return field | Receipt `V3` adds both completed-receipt fields with attempt identifiers and a dedicated unchanged reconciliation-output section |

### Success criteria derived from these failures

The replacement package is ready for Lane A review only when the complete `C` and `E` catalog blocks match byte for
byte; an intentionally unlisted relevant column produces exactly one `UNRECONCILED` row; missing or mistyped catalog
rows produce `ARTIFACT-INVALID`; every declared callable, relation, special form, operator and cast is both used and
inventoried; each assessment candidate depends on the validated declaration; and the receipt can anchor both completed
environment receipts without self-hashing.

### Tracking, cross-artifact and drift

B-119 remains `Open`; this return completes only Lane B drafting step 2 and does not satisfy `D-251`. Lane A acceptance,
dry run, human execution, classification and `V1-SM05` selection remain deferred. `Modular_PRD.md`, storyboard, story
panels, UML, data flow, the Encyclopedia, Register, Build Spec, Artifact Inventory, Fn Specs, work packets and
traceability are unaffected because this is a rejected handoff draft, not accepted product or governance intent. The
handoff channel remains Graphify-excluded; no governed document changed, so no Graphify rebuild is owed.

None of the three attachments was staged, committed or executed; this section is the only staged and committed path.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | Lane B drafting step 2 and durable static-review return | Phase 1 — completed by this section |
| **Approve-with-conditions** | Byte hygiene, banner, transaction boundary, catalog-block parity and candidate aggregation shape | Lane A review — retain only as rejected-draft evidence |
| **Defer** | Replacement package, dry run, human run, `D-251` satisfaction and `V1-SM05` selection | New bounded authorization, then later Judge acts |
| **Reject** | Preflight `V2`, assessment `V4` and receipt `V2` for acceptance or execution | Replacement preflight `V3`, assessment `V5` and receipt `V3` |

## Lane A answer — draft review of `D251-V4-DRAFT-RETURN` (contract step 4): rejection confirmed, rejected drafts preserved, replacement requirements, 2026-09-21

**Authority and boundary.** This is Lane A's draft review of the banner-bearing package Lane B returned at `d4c56f6`.
Lane A read the three files themselves, not Lane B's summary. Read at commit `d4c56f6`. Handoff-only apart from
committing the rejected drafts as non-executable history, which the amended rule 11 requires. No SQL is written, no
query run, nothing accepted, the Register is unaffected, and `D-251` is not satisfied.

### What Lane A verified in the files

| Check | Result |
|---|---|
| The three working-copy hashes equal the returned `Lane-B-Draft-SHA256` values | **Confirmed** |
| LF-only bytes | **Confirmed**, zero CR bytes in all three |
| The two catalog blocks are byte-identical | **Confirmed**. Lane B's block hash reproduces only when the block is taken as the lines **strictly between** the markers, each with its LF. Including the marker lines gives a different value. See gap A1 |
| Lane B's six gaps | **All confirmed** against the text (below) |

### Rejected-draft ledger (rule 11)

| Path | `Lane-B-Draft-SHA256` | Status |
|---|---|---|
| `docs/handoff/artifacts/B-119/PREFLIGHT-D251-CANDIDATE-COLUMNS-V2.sql.md` | `4fc437982679b3fac83974ae8ce8c79145922b985da1867de9c6bd607f9dc43c` | **REJECTED — not executable** |
| `docs/handoff/artifacts/B-119/QRY-D251-STORED-VALUE-ASSESSMENT-V4.sql.md` | `b27f9f14febbf34a51abb1796b60be8acecc445e0e6a69f6f65beed4c95b61d4` | **REJECTED — not executable** |
| `docs/handoff/artifacts/B-119/D251-MANUAL-RUN-RECEIPT-V2.md` | `9f9ab79cb55a0d65b2d4754ce4876fcd0145047ee1278de6fc2c7e7bb714faa7` | **REJECTED — not executable** |

They keep their banner and versioned paths and are committed by Lane A by explicit path, in the commit that records this
section, so the only copies cannot be lost or swept into a later acceptance commit. The historical `V1`/`V3` files are
held the same way.

### Gaps, parent first

**Lane B's six, verified**

| Order | Gap | Evidence in the file | Fix for the replacement package |
|---:|---|---|---|
| 1 | The catalog has no `E` rows | Preflight and assessment catalogs hold `C01`–`C10` only | Add every governed exclusion as a stable `E` row with full type identity and a reason (see A5); keep the complete block byte-identical |
| 2 | `UNRECONCILED` is unreachable | Preflight `mapping_status` is only `CANDIDATE` or `EXCLUDED_NON_IDENTITY_FIELD`, with an invented reason; the catalog join ignores type | Join the real schema to the fixed catalog: schema column absent from the catalog gives `UNRECONCILED`; catalog row absent or type-mismatched gives `ARTIFACT-INVALID`; success needs neither |
| 3 | The assessment's catalog is unused | The `results` CTE never references `candidate_catalog` | Each candidate row takes its metadata from the validated catalog row, or a guard prevents results (see A6) |
| 4 | Function qualification and manifest | `pg_get_userbyid` and `has_table_privilege` unqualified; `pg_catalog.count` and `format_type` listed but unused; `current_user` not inventoried | Qualify both calls, regenerate the manifest from actual calls, add one sorted special-form inventory |
| 5 | Operator and cast inventories incomplete | Preflight uses `NOT`, `AND`, `IN` and `||`, none listed; assessment casts and comparisons are partly listed | Regenerate both inventories from every expression and cast actually used |
| 6 | Receipt omissions | No `Local-Completed-Receipt-SHA256` or `Supabase-Completed-Receipt-SHA256`, no reconciliation return field | Add both, attempt-bound, and a reconciliation-output section |

**Additional gaps found in Lane A's review**

| Order | Gap | Guaranteed failure | Fix |
|---:|---|---|---|
| A1 | The block-hash extraction is undefined | Two reviewers compute different block hashes from identical files | Define it: the lines **strictly between** `-- BEGIN CATALOG` and `-- END CATALOG`, each with its LF, marker lines excluded, then SHA-256 |
| A2 | Array element type is derived wrongly | For an array column `udt_name` is the array type name (for example `_text`), not the element type, so an array column can never match its catalog row. Latent today, since no array column exists in `public` | Derive the element type from the catalog (`pg_type.typelem`), or state that no array column exists and make its appearance a `UNRECONCILED` row |
| A3 | Ordering depends on collation | `ORDER BY catalog_id, ... column_name` sorts differently under different database collations, so the local and Supabase outputs are not comparable and "deterministic" is false | Order by the fixed catalog ID with `COLLATE "C"` on every text sort key |
| A4 | Receipt lacks fields the contract requires | No artifact commit SHA, PostgreSQL version, result-set names and row counts, or field-classification column | Add them to receipt `V3` |
| A5 | The `E` reasons are unbounded free text | Reviewers cannot compare reasons, and an invented reason can hide an identity-like column | A short fixed vocabulary, for example free-text prose, URL, label or taxonomy, version or id token, non-role enum, UUID. Lane B proposes a reason per column from it; Lane A reviews each; any identity-like column is a candidate, not an exclusion |
| A6 | A failed declaration could return an empty result | An empty result reads as clean | A declaration or validation failure appears as a visible row with `ARTIFACT-INVALID`, never as missing rows. This is proven only at the dry run, so the static requirement is that the row exists in the SQL |

### Replacement package — success criteria

The replacement is ready for Lane A review only when: the complete `C` and `E` blocks match under the A1 extraction; an
unlisted relevant column gives exactly one `UNRECONCILED` row and a missing or mistyped catalog row gives
`ARTIFACT-INVALID`; every function, relation, special form, operator and cast is used and listed; every candidate row
depends on its validated declaration; the ordering is collation-independent; the array rule is resolved; the receipt
carries every required field; and no file is patched in place. Versions are preflight `V3`, assessment `V5`, receipt `V3`.

### Decision needed from the Judge

Lane B reports the replacement package "requires new bounded authorization". Lane A's reading is that rule 11, the
correction loop the Judge already approved, covers a replacement drafted after a rejected package, so no per-iteration
act is needed. If the Judge wants an explicit act per iteration, that adds a round trip each time and Lane A does not
recommend it.

### Cross-artifact and drift

`Modular_PRD.md`, storyboard, story panels, UML, data flow, the Encyclopedia, Build Spec, Artifact Inventory, Fn Specs,
work packets and traceability are unaffected; the Register is unaffected. B-119 stays `Open`, `D-251` is not satisfied
and no accepted package exists. `docs-drift` reads synced at `a5bdcc7`; every later commit is handoff-only and
coverage-excluded, so no Graphify rebuild is owed.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | Lane B's static review and its rejection of its own package | Phase 1 — replacement `V3`/`V5`/`V3` |
| **Approve-with-conditions** | Replacement drafting | Judge confirms rule 11 covers it; gaps 1–6 and A1–A6 addressed |
| **Approve** | Byte hygiene, banner, transaction boundary, catalog-block parity and candidate aggregation shape | Retain in the replacement |
| **Defer** | Dry run, human run, `D-251` satisfaction, `V1-SM05` selection | Later bounded Judge acts |
| **Reject** | Preflight `V2`, assessment `V4` and receipt `V2` for acceptance or execution; free-text exclusion reasons; collation-dependent ordering | Replace as above |

## Lane B clarification packet — Judge authorizes replacement `V3`/`V5`/`V3` and gaps 1–11, 2026-09-21

**Raiser and boundary.** Lane B raises this clarification for Lane A to answer in this existing entry. The Judge has
approved (1) the replacement package — preflight `V3`, assessment `V5`, receipt `V3` — and (2) correction of gaps 1–11
as setup-phase work. This removes the earlier question whether rule 11 permits another iteration. This section creates
no SQL or application code, executes no query, accesses no database, accepts no artifact for execution and does not
satisfy `D-251`.

### Parent-first decision table for Lane A and the Judge

Lane A should answer each row **Accept** or **Reject** in order. A rejected parent stops its dependent rows; no child is
silently reinterpreted.

| Order | Decision object | Lane B recommendation | Depends on | Consequence if accepted | Consequence if rejected |
|---:|---|---|---|---|---|
| 1 | **Setup boundary.** The present act fixes the specification for gaps 1–11; it does not create the three replacement files | **Accept** | — | Lane A records one executable drafting contract without claiming construction | Stop: the Judge must redefine whether this act authorizes specification, drafting or execution |
| 2 | **Replacement manifest.** The next files are exactly preflight `V3`, assessment `V5`, receipt `V3`; rejected versions remain immutable history | **Accept** | 1 | One unambiguous package enters the correction loop | Stop: version identity remains ambiguous |
| 3 | **Preflight owns validation.** Schema/catalog/type/visibility failure is returned visibly by preflight and prevents assessment; assessment is not required to convert a PostgreSQL parse failure into a result row | **Accept** | 1–2 | Gap 3 and A6 become implementable without dynamic SQL or forbidden procedural statements | Stop: the current requirement is not safely implementable as written |
| 4 | **Complete fixed catalog.** Both SQL files carry one byte-identical complete `C`/`E` block; uncatalogued relevant columns are never auto-excluded | **Accept** | 3 | Gaps 1–2 obtain one authority and a reachable `UNRECONCILED` state | Stop: catalog parity remains capable of a false green |
| 5 | **Typed inventories and name resolution.** Every callable/relation is qualified and used; special forms, typed operators and casts are complete, sorted and used | **Accept** | 3–4 | Gaps 4–5 gain a reviewable static safety contract | Stop: static acceptance remains non-reproducible |
| 6 | **Deterministic evidence.** Catalog extraction, array identity, ordering, result-set naming and visible failures follow the rules below | **Accept** | 4–5 | A1–A3 and A6 become comparable across environments | Stop: local and Supabase evidence cannot be reliably compared |
| 7 | **Receipt contract.** Receipt `V3` carries all environment, artifact, reconciliation, result and classification evidence without self-hashing | **Accept** | 2–6 | Gap 6 and A4 obtain one complete evidence carrier | Stop: execution cannot produce reviewable evidence |
| 8 | **Exclusion vocabulary.** Every `E` row uses one fixed reason; an identity-like field must be a candidate | **Accept** | 4 | A5 cannot hide identity scope in prose | Stop: exclusion review remains subjective |
| 9 | **Future implementation dependency.** Accepted artifacts become inputs to construction readiness and verification, but do not themselves authorize construction | **Accept** | 1–8 | `V1-SM05` can later consume the reviewed D-251 result without confusing setup with build authorization | Stop: setup evidence risks being misread as a work order |
| 10 | **Return sequence.** Lane B drafts only after the live lane act permits it, performs static review, then returns all three uncommitted through B-119 | **Accept** | 1–9 | Existing lane and four-eyes controls remain intact | Stop: Lane A must supply a different lawful return path |
| 11 | **Execution stays separate.** Syntax proof, fixtures, dry run, human run, classification, `D-251` satisfaction and `V1-SM05` selection each remain later bounded acts | **Accept** | 1–10 | No setup decision is promoted into execution evidence | Stop: the Judge must explicitly name which later act is being combined now |

### Gaps 1–11 — normalized setup specification

| Gap | Required rule | Passing evidence at Lane A review |
|---:|---|---|
| 1 | The complete catalog contains stable `C` candidates and stable `E` exclusions with schema, relation kind, column, full type identity, field classification and controlled exclusion reason | No relevant known column is absent; both SQL blocks are byte-identical |
| 2 | A real relevant column absent from the fixed catalog returns `UNRECONCILED`; the query never invents an exclusion | A negative fixture later produces exactly one named `UNRECONCILED` row |
| 3 | Preflight validates catalog existence and type identity and is the mandatory gate. `ARTIFACT-INVALID` stops before assessment. Assessment rows take their identifiers and classifications from the declared catalog | Static review proves the dependency; later dry run proves the stop behavior |
| 4 | All functions and relations are schema-qualified; all callable manifest entries are used; `current_user` and any other SQL special form have a separate sorted inventory | No undeclared, duplicate or unused entry |
| 5 | Operator and cast inventories cover every actual usage with resolved operand/source, target and result types | No undeclared, duplicate or unused entry |
| 6 | Receipt `V3` has attempt-bound local and Supabase completed-receipt hashes plus an unchanged reconciliation-output section | Both environment attempts can be independently anchored |
| 7 | Catalog hashing uses only the LF-terminated lines strictly between the two markers; marker lines are excluded | Two independent extractions produce the same SHA-256 |
| 8 | Array element identity comes from PostgreSQL type metadata, not the array type name; if arrays remain unsupported, their appearance is `UNRECONCILED` | No `_text`-style array type is reported as an element type |
| 9 | Every textual sort key uses explicit `COLLATE "C"`; null placement is explicit | Identical fixture data yields byte-comparable ordering across both environments |
| 10 | Receipt `V3` records artifact commit, PostgreSQL version, applied migrations, execution role, result-set names and row counts, field classification and result classification | No execution fact needed for review is inferred from prose |
| 11 | Exclusion reasons use exactly: `prose`, `url`, `label-or-taxonomy`, `version-or-id-token`, `non-role-enum`, or `uuid`; identity-like fields are candidates. Every validation failure is a visible preflight row and cannot be represented by missing output | Every `E` row has one allowed reason; empty/missing output is never classified clean |

### Lane A follow-up guide

1. **Record the Judge act.** State that replacement `V3`/`V5`/`V3` and gaps 1–11 are approved for setup
   specification; retire the earlier pending-authorisation question.
2. **Answer the table in order.** Record Accept or Reject for rows 1–11. If row 3 is rejected, supply an alternative
   that does not require a query containing a missing static column reference to emit its own validation row.
3. **Normalize the contract.** Replace earlier conflicting phrases with the rules in the normalized table; retain the
   historical rejection ledger and hashes unchanged.
4. **Check propagation.** Because this act defines evidence mechanics but creates or retires no canonical artifact,
   record the Register, Build Spec, Inventory and `Modular_PRD.md` as unaffected now. Do not duplicate this table into
   those tiers.
5. **Record the future dependency.** State that an accepted package and later reviewed result are critical inputs to
   `V1-SM05` readiness and implementation verification, but are not construction authorization or DoD evidence by
   themselves.
6. **Set the lane step.** Preserve Lane A as active until its answer is committed. When drafting is next, perform the
   governed lane handover that permits Lane B to create the replacement files.
7. **Issue one bounded drafting instruction.** Name the three literal replacement paths, the normalized rules, the
   banner, the static-review checklist, the uncommitted return requirement and the prohibition on database access.
8. **Review the return independently.** Lane A reads the exact bytes, recomputes hashes and either rejects immutable
   versions or accepts them through the existing commit-and-evidence-anchor sequence.
9. **Stop before execution.** Dry run and human execution require their later Judge acts.

### Chief Editor requirements

For this setup act, the Chief Editor must:

- confirm Lane A's ordered Accept/Reject dispositions rather than approving an undifferentiated bundle;
- keep the replacement manifest fixed at preflight `V3`, assessment `V5`, receipt `V3`;
- select the lane transition before drafting starts; artifact authorization alone does not change live lane state;
- reject any claim that setup artifacts constitute construction authorization, successful execution or `D-251`
  satisfaction; and
- later make separate decisions for dry run, human execution, result classification and any movement of
  `V1-SM05`.

No additional product choice is required now if Lane A accepts rows 1–11 exactly as written.

### Cross-artifact review and Graphify

`Modular_PRD.md` already records the `D-251` boundary and leaves the sprint tracker unchanged. The storyboard and story
panels own user-visible journeys, UML/data flow owns product behavior and movement of product data, and the Encyclopedia
owns domain concepts; none owns this SQL evidence procedure. The Register owns the accepted `D-251` decision and the
`V1-SM05` work packet owns its unchecked evidence dependency. Build Spec, Artifact Inventory, Fn Specs and traceability
already point to those authorities. Therefore all named tiers are **unaffected by this setup clarification**. They are
revisited only if Lane A accepts a new canonical rule or a later result changes readiness. B-119 remains the sole owner
of the compatibility evidence and classification.

The governed graph remains synchronized at `a5bdcc7`; later changes are handoff-only and coverage-excluded. This section
does not change governed intent, so no Graphify rebuild is owed. A rebuild becomes due only after a canonical governed
edit, with curated fragments re-merged afterward.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | Judge authorization for replacement `V3`/`V5`/`V3` and setup correction of gaps 1–11 | Lane A answer — record and normalize |
| **Approve-with-conditions** | Replacement drafting | Setup phase — Lane A accepts rows 1–11 and completes the lane handover first |
| **Defer** | SQL creation, static return, syntax proof, dry run, human run, classification, `D-251` satisfaction and `V1-SM05` selection | Later bounded steps named above |
| **Reject** | Treating this clarification as code, execution evidence, construction authorization, lane activation or closure | Preserve the setup boundary |

## Lane A answer — Lane B's clarification packet: rows 1–11 dispositioned in order, one row replaced, drafting instruction issued, 2026-09-21

**Authority and boundary.** Lane A answers Lane B's packet (`fae5033`) row by row, as it asked. Lane B reports that the Judge
approved the replacement package and the correction of gaps 1–11; Lane A takes that as the Judge's answer to its question
on rule 11 and asks the Judge to confirm it by confirming the dispositions below, which then serve as the direct message
(`D-183`). Read at commit `fae5033`. Handoff-only: this creates no SQL, runs no query, accepts no artifact, changes no
canonical source, and leaves the Register, Build Spec, Artifact Inventory and `Modular_PRD.md` unaffected. `D-251` is not
satisfied.

### Ordered disposition of rows 1–11

| Row | Object | Lane A | Note |
|---:|---|---|---|
| 1 | Setup boundary: specification only, no files created by this act | **Accept** | |
| 2 | Manifest: preflight `V3`, assessment `V5`, receipt `V3`; rejected versions immutable | **Accept** | |
| 3 | Preflight owns validation and gates the assessment | **Accept with conditions** | (a) The gate is procedural: the receipt's attestations require the preflight to run first and to stop on any failure. (b) A missing column or type error in a script is a database error recorded as `EXECUTION-FAILED` with its SQLSTATE, never a row. This **replaces** the earlier "visible row" wording for that case only; catalog, type and visibility failures still return visible preflight rows. (c) Static review checks by ID that each candidate query's relation and column equal its catalog row, because the catalog cannot police a hard-coded query at run time |
| 4 | One byte-identical complete `C`/`E` block; no auto-exclusion | **Accept** | |
| 5 | Qualified callables and relations; complete typed inventories | **Accept** | |
| 6 | Deterministic evidence: extraction, arrays, ordering, naming, visible failures | **Accept** | |
| 7 | Receipt `V3` carries all evidence without self-hashing | **Accept** | |
| 8 | Fixed exclusion vocabulary; identity-like fields are candidates | **Accept** | Test for "identity-like": the column could hold a `ROLE-*`, actor or principal token. Lane A reviews every `E` row's reason |
| 9 | Accepted artifacts feed readiness and verification but grant no build authority | **Accept** | |
| 10 | Return sequence: Lane B drafts after "the live lane act permits it" | **Reject as written; replaced** | See below |
| 11 | Execution stays separate | **Accept** | |

Rows 1–2 are parents of everything else; no row was rejected, so no dependent was stopped.

### Row 10 replaced — no lane transition is needed

Lane B's packet, and its follow-up step 6, would have the Chief Editor select a lane transition before drafting. That
conflicts with two decisions already recorded:

1. **`LB-1`, approved by the Judge:** Lane B cannot commit attachments; **Active Lane A** reviews and commits them. If
   Lane B became `Active`, Lane A would become `Blocked` and could not commit them, and Lane B would hold the commit lock
   `LB-1` withholds from it.
2. **Precedent:** Lane B drafted `V2`/`V4`/`V2` as `Eligible` while Lane A stayed `Active`, and `lane-boundary` classed the
   attachments as unmapped `docs/handoff/` content (`D-90`). Creating files in the unmapped channel is not a lane-owned
   surface.

**Replacement row 10.** Lane A stays `Active` throughout. Lane B drafts the three files as `Eligible` under the approved
authorization, performs static review, returns them uncommitted through a B-119 return section, and commits only B-119.
No lane handover occurs. The Chief Editor requirement to "select the lane transition before drafting starts" is withdrawn.

### Gap 11 normalized

Lane B's gap 11 says every validation failure is a visible preflight row. Reconciled with row 3(b): a **catalog, type or
visibility** failure is a visible preflight row; a **syntax or missing-object** error is a database error recorded in the
receipt's failure record with its SQLSTATE. In both cases the result is `unresolved`, never clean.

### Drafting instruction for Lane B (one bounded instruction)

1. **Paths, literal:** `docs/handoff/artifacts/B-119/PREFLIGHT-D251-CANDIDATE-COLUMNS-V3.sql.md`,
   `.../QRY-D251-STORED-VALUE-ASSESSMENT-V5.sql.md`, `.../D251-MANUAL-RUN-RECEIPT-V3.md`. Nothing else; the rejected
   versions are untouched.
2. **Rules:** the contract sections above as amended, the normalized gap table in Lane B's packet (gaps 1–11), and the
   dispositions in this section. Where they differ, this section governs.
3. **Banner:** one leading line as defined in the contract.
4. **Static review before return:** the contract's structural checks, the static allowlist, catalog-block hash under the
   between-the-markers rule, the by-ID query-to-catalog check, both catalogs complete, manifests and inventories complete,
   sorted and used, and LF-only bytes.
5. **Return:** a B-119 section `D251-V5-DRAFT-RETURN` with the three literal paths, static result and
   `Lane-B-Draft-SHA256` for each, committed alone; the three files stay unstaged, uncommitted and unexecuted.
6. **Prohibited:** database access, SQL execution, staging or committing attachments, and any claim of execution readiness.

### Chief Editor requirements, restated

Confirm the dispositions above in one message; keep the manifest fixed at `V3`/`V5`/`V3`; reject any claim that these
artifacts are construction authority, execution evidence or `D-251` satisfaction; and later make separate decisions for
the dry run, human execution, result classification and any movement of `V1-SM05`. Nothing else is needed now.

### Cross-artifact and drift

`Modular_PRD.md`, storyboard, story panels, UML, data flow, the Encyclopedia, Build Spec, Artifact Inventory, Fn Specs,
work packets, traceability and the Register are unaffected: this defines evidence mechanics and creates or retires no
canonical artifact. B-119 stays `Open`. `docs-drift` reads synced at `a5bdcc7`; later commits are handoff-only and
coverage-excluded, so no Graphify rebuild is owed.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | Rows 1, 2, 4–9 and 11 | Recorded |
| **Approve-with-conditions** | Row 3 | Conditions (a)–(c) above |
| **Approve** | Replacement row 10: no lane transition; Lane A stays `Active` | Recorded; Lane B drafts now |
| **Defer** | SQL creation review, syntax proof, dry run, human run, classification, `D-251` satisfaction, `V1-SM05` selection | Later bounded acts |
| **Reject** | A lane transition before drafting, Lane B committing attachments, a validation failure represented by missing rows, treating this packet as construction authority | Use the replacement and instruction above |

## D251-V5-DRAFT-RETURN — Lane B replacement package static return, 2026-09-21

**Authority and boundary.** The Judge directly authorized Lane B to draft in the handoff channel under Lane A's bounded
instruction above, with no lane transition. Lane A remains `Active`; Lane B remains `Eligible`. Lane B created the three
literal replacement files, performed static review, and returns them uncommitted. No SQL was executed, no database was
accessed, and no syntax, resolution or runtime behavior is claimed by this return.

### Returned manifest and draft hashes

| Artifact | `Lane-B-Draft-SHA256` | Static result |
|---|---|---|
| `docs/handoff/artifacts/B-119/PREFLIGHT-D251-CANDIDATE-COLUMNS-V3.sql.md` | `e5ecbe9a905b41c9341ff50b1d3032bc9264d315f3dc36cfa86bb5c7101bbe29` | Pass — ready for Lane A byte review |
| `docs/handoff/artifacts/B-119/QRY-D251-STORED-VALUE-ASSESSMENT-V5.sql.md` | `6d15e052a62a608f2935543971f04b5ee6e8044048bdfd93fa6172c149685b99` | Pass — ready for Lane A byte review |
| `docs/handoff/artifacts/B-119/D251-MANUAL-RUN-RECEIPT-V3.md` | `c406e0418135eae90df843fd3d920cc2af776d126d3fd188885c95a7cf9b6dd8` | Pass — ready for Lane A byte review |

### Static review result

| Check | Result |
|---|---|
| Draft banner and literal paths | Pass |
| LF-only bytes | Pass — zero carriage-return bytes in all three files |
| Catalog markers and manifests | Pass — each SQL file contains exactly one of every required marker |
| Complete fixed catalog | Pass — ten `C` rows and fifty-six explicit `E` rows; no generated exclusion |
| Catalog parity | Pass — the lines strictly between the markers are byte-identical; SHA-256 `d7f526adbb5dccb6a0bf274cb2da1959d881dfef36d8102631fb3fbac73f9d0c` |
| Candidate-query mapping | Pass — exactly one assessment branch references each `C01`–`C10`; each branch takes identity and field classification from its catalog row |
| Empty-table evidence | Pass — every branch is driven from its catalog row and returns an explicit `total_rows = 0` aggregate when its table is empty |
| Reconciliation and validation | Pass statically — uncatalogued relevant physical columns become `UNRECONCILED`; missing or type-mismatched catalog declarations become visible `ARTIFACT-INVALID` rows |
| Arrays | Pass statically — element identity is derived from `pg_type.typelem`; an unlisted array becomes `UNRECONCILED` |
| Ordering | Pass — textual output keys use `COLLATE "C"` and nullable keys state null placement |
| Function, relation, special-form, operator and cast inventories | Pass static text review — one inventory of each class per SQL file, with qualified callables and relations and no unused function or relation entry found |
| Read-only boundary | Pass — banner, `BEGIN TRANSACTION READ ONLY`, the sole permitted `SET LOCAL`, one read query and `ROLLBACK`; no write or DDL statement found |
| `C10` | Pass statically — exact JSON string-value predicates, per-`schema_version` grouping, separate exact/look-alike counts; runtime fixtures remain deferred |
| Receipt | Pass — attempt-bound environment hashes, artifact commit, PostgreSQL version, migrations, execution role, named result sets, row counts, unchanged outputs, field/result classifications and SQLSTATE failure record |

During static review Lane B corrected one draft-only defect before this return: table-driven aggregate branches emitted no
row for an empty table. The returned assessment is catalog-driven instead, so every candidate produces an explicit zero
row. No previously returned or committed version was modified.

### Failure-derived acceptance boundary

Lane A should reject this package if its recomputed hashes differ; either catalog block differs; any relevant migration
column is absent from both `C` and `E`; a candidate ID has zero or multiple executable branches; a manifest entry is
undeclared or unused; an empty table can suppress its candidate row; or the receipt can represent missing output as
clean. Static success is not syntax proof. Syntax, JSON fixtures, visible failure behavior and result-set rendering are
proved only by the separately authorized disposable-database dry run.

### Tracking, cross-artifact and drift

This completes the authorized Lane B drafting return, not Lane A acceptance. B-119 remains `Open`; `D-251` remains
unsatisfied; and `V1-SM05` remains unselected with its evidence dependency unchecked. `Modular_PRD.md`, storyboard,
story panels, UML, data flow, the Encyclopedia, Register, Build Spec, Artifact Inventory, Fn Specs, work packets and
traceability remain unaffected because the package is still unaccepted handoff evidence. The handoff channel is
Graphify-excluded, so no rebuild is owed.

None of the three attachments was staged, committed or executed; this section is the only staged and committed path.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | Lane B replacement drafting and static return | Completed by this section |
| **Approve-with-conditions** | Preflight `V3`, assessment `V5`, receipt `V3` | Lane A independently reviews the exact bytes and hashes |
| **Defer** | Syntax proof, fixtures, dry run, human run, classification, `D-251` satisfaction and `V1-SM05` selection | Later bounded Judge acts |
| **Reject** | Executing, staging or committing the attachments from Lane B; treating static pass as execution readiness | Preserve the recorded boundary |

## Lane A answer — draft review of `D251-V5-DRAFT-RETURN` (contract step 4): package rejected again, five defects found in the files, replacement `V4`/`V6`/`V4`, 2026-09-21

**Authority and boundary.** Lane A's draft review of the banner-bearing replacement package Lane B returned at `ae6d7b2`.
Lane A read the three files and checked their declarations against `0001_init.sql` and `0002_s1_editorial_schema.sql`, not
against Lane B's summary. Read at commit `ae6d7b2`. Handoff-only apart from committing the rejected drafts as
non-executable history under the amended rule 11. No SQL is written, no query run, nothing accepted, the Register is
unaffected, and `D-251` is not satisfied.

### What Lane A verified

| Check | Result |
|---|---|
| Working-copy hashes equal the returned `Lane-B-Draft-SHA256` values; all files LF-only | **Confirmed** |
| The catalog blocks are byte-identical (`d7f526adbb5d…`, lines strictly between the markers) | **Confirmed**, 10 `C` and 56 `E` rows |
| Every relevant text, enum, array and `json`/`jsonb` column of the nine tables in the two migrations appears in the catalog | **Confirmed** by reading both migrations. The `E` list is complete |
| Every `count(<table>.id)` column used by the assessment exists | **Confirmed** (`id uuid` on all five tables read) |

### Rejected-draft ledger (rule 11)

| Path | `Lane-B-Draft-SHA256` | Status |
|---|---|---|
| `docs/handoff/artifacts/B-119/PREFLIGHT-D251-CANDIDATE-COLUMNS-V3.sql.md` | `e5ecbe9a905b41c9341ff50b1d3032bc9264d315f3dc36cfa86bb5c7101bbe29` | **REJECTED — not executable** |
| `docs/handoff/artifacts/B-119/QRY-D251-STORED-VALUE-ASSESSMENT-V5.sql.md` | `6d15e052a62a608f2935543971f04b5ee6e8044048bdfd93fa6172c149685b99` | **REJECTED — not executable** |
| `docs/handoff/artifacts/B-119/D251-MANUAL-RUN-RECEIPT-V3.md` | `c406e0418135eae90df843fd3d920cc2af776d126d3fd188885c95a7cf9b6dd8` | **REJECTED — not executable** |

Committed by explicit path with this section, so the only copies are preserved and cannot be swept into an acceptance
commit.

### Defects, parent first

| Order | Defect | Evidence | Guaranteed failure | Fix for `V4`/`V6`/`V4` |
|---:|---|---|---|---|
| 1 | Three catalog rows declare the wrong enum type | `E35` (`workflow_transitions.actor_type`), `E46` (`allowed_transitions.required_actor_type`) and `E53` (`publications.actor_type`) declare `udt_name = actor_type`. In `0002`, `workflow_transitions.actor_type` is dropped and `actor_type_v2` is renamed to it, and the other two are created as `actor_type_v2`. All three physical columns are `actor_type_v2` | On any real database the preflight returns `ARTIFACT-INVALID` for these rows, so the package can never pass its own gate | Correct all three to `actor_type_v2`; re-derive every `udt_name` from the final migration state, not from `0001` |
| 2 | Preflight `ORDER BY` uses `COLLATE "C"` on a `UNION ALL` result | The final `ORDER BY result_set_name COLLATE "C", …` follows three unioned selects. PostgreSQL documents that an `ORDER BY` on a `UNION` result may name only output columns or numbers, not expressions, and `COLLATE` is an expression | A syntax error at the first run | Move the union into a CTE and apply the collated `ORDER BY` to `SELECT * FROM <cte>`. The assessment's final query is not a union and is unaffected. Proof of the fix is the dry run |
| 3 | The assessment's end marker is not the required marker | Line 82 reads `-- END CATALOG,`, so an exact match for `-- END CATALOG` finds none, though the preflight's is exact | The contract's "exactly one end marker" check fails under an exact match | Both marker lines exact; no trailing characters |
| 4 | Operator and cast inventories are again wrong | Preflight: `<>` on `text` and `=` on `"char"` are used and not listed; `>` is listed as `(int2, int2)` but the literal makes it `(int2, int4)`; `<>("char","char")` is listed and unused; implicit `int4`→`oid` and literal coercions are not listed. Assessment: an enum `=` resolves to the built-in `anyenum` operator, not `(public.gate_role, public.gate_role)`; the implicit `int4`→`int8` in the `UNION ALL` is not listed. The special-form list covers different words in each file | Lane B's static "no undeclared or unused entry" is false in both files, which two consecutive packages have now shown | See the decision below |
| 5 | Receipt cannot judge "missing expected row" | The result-set manifest records returned counts with no expected counts | A short or padded output cannot be caught by review | Record expected counts: `CATALOG-VALIDATION` 66, `RECONCILIATION` 0, `VISIBILITY` 9 (the nine relations), `ASSESSMENT` 10 plus one row per additional `C10` `schema_version` |

Lane A found no other defect in the SQL.

### Two decisions for the Judge

**A. Operator and cast inventories (defect 4).** They were restored as review aids and cannot be verified exactly without
a parser: two packages, each passed by Lane B's static review, each carried errors. Safety does not depend on them:
resolution is pinned to `pg_catalog`, functions and relations are qualified and manifested, and statements are
allowlisted. Lane A recommends downgrading the operator, cast and special-form inventories to **advisory**, keeping one
blocking rule: no operator, function or cast may resolve outside `pg_catalog`. This meets the freeze test ("impossible
as written"), because an exact manual inventory has no way to be proved correct. If the Judge prefers to keep the
exhaustive rule, each future package needs a mechanically generated list.

**B. Syntax proof before acceptance.** Defects 1 and 2 are the kind static review cannot see. Three packages and three
review rounds have gone by without a run. Lane A recommends that the Judge authorize, as its own act, a **syntax-proof
run in a throwaway PostgreSQL** (Docker is installed) built from the two migrations with no application data and no
credential, executed by Lane B on the banner-free candidate bytes **before** the acceptance commit. It proves syntax and
resolution only. It is **not** an environment result, is not recorded as `D-251` evidence, and does not replace the dry run
that the local disposable database and the provisioned project each require. Without it, expect further loops.

### Success criteria for `V4`/`V6`/`V4`

The catalog types match the final migration state; both markers are exact; the preflight's collated ordering sits
outside the union; the receipt carries expected counts; and Lane B's return states the method it used for each mechanical
check (for example the extraction command), so Lane A can reproduce it. Versions are preflight `V4`, assessment `V6`,
receipt `V4`; no file is patched in place.

### Cross-artifact and drift

`Modular_PRD.md`, storyboard, story panels, UML, data flow, the Encyclopedia, Build Spec, Artifact Inventory, Fn Specs,
work packets and traceability are unaffected; the Register is unaffected. B-119 stays `Open`, `D-251` is not satisfied
and no accepted package exists. `docs-drift` reads synced at `a5bdcc7`; every later commit is handoff-only and
coverage-excluded, so no Graphify rebuild is owed.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | Lane B's drafting, its catalog completeness and its catalog-driven zero-row design | Retain |
| **Approve-with-conditions** | Replacement `V4`/`V6`/`V4` | Defects 1–5 fixed |
| **Approve-with-conditions** | Inventories advisory; early syntax-proof run | Judge decides A and B |
| **Defer** | Dry run in both environments, human run, classification, `D-251` satisfaction, `V1-SM05` selection | Later bounded Judge acts |
| **Reject** | Preflight `V3`, assessment `V5` and receipt `V3` for acceptance or execution; the three `actor_type` catalog rows; a collated `ORDER BY` on a `UNION` result | Replace as above |

## Lane A answer — Lane B's review of `0549023`: Lane A's defect 1 is withdrawn as wrong; defects 2–5 stand; advisory inventories ruled provisionally, 2026-09-21

**Authority and boundary.** Lane B's review of `0549023` (given in the Lane A conversation, unrecorded until now)
disputed one of Lane A's five defects. Lane A re-read `0002_s1_editorial_schema.sql` to its end rather than relying on
the part it had read. Read at commit `0549023`. Handoff-only: this corrects Lane A's own record and sets the contract
for the replacement. No SQL is written, no query run, nothing accepted, the Register is unaffected, and `D-251` is not
satisfied.

### Correction to Lane A's record

**Defect 1 of the `0549023` review is withdrawn. It was wrong, and Lane B is right.** Lane A had read only part of the
migration. At its end, `0002` runs `drop type actor_type;` and then `alter type actor_type_v2 rename to actor_type;`
(lines 526–527), so after `0002` the type behind `workflow_transitions.actor_type`, `allowed_transitions.required_actor_type`
and `publications.actor_type` is named `actor_type`. The catalog rows `E35`, `E46` and `E53` **are correct as Lane B wrote
them** and must not be changed. The same tail drops `article_state` but does **not** rename `article_state_v2`, so the
catalog rows that use `article_state_v2` are also correct. The catalog Lane B returned is therefore accurate against
the final migration state, and the "fix" Lane A specified would have made every real run return `ARTIFACT-INVALID`.

Rule going forward: the final type identity of a column is derived **after every statement in every migration**,
including `drop type` and `alter type … rename`, and a review record states which lines it read.

### Disposition of the five defects

| Defect | Status |
|---|---|
| 1 — `actor_type` rows | **Withdrawn.** Keep `actor_type`; keep `article_state_v2` |
| 2 — collated `ORDER BY` on a `UNION ALL` result | **Stands.** Wrap the union in an output CTE and order the outer select |
| 3 — end marker `-- END CATALOG,` | **Stands.** Exact marker; the separating comma belongs after the following CTE boundary or on the closing parenthesis line, never on the marker |
| 4 — inventories inexact | **Stands; ruled below** |
| 5 — receipt lacks expected counts | **Stands** |

### Inventory policy — Lane A ruling, provisional

Lane A adopts Lane B's split. This meets the freeze test ("impossible as written"): two packets have shown an exact
manual operator and cast inventory cannot be proved correct without a parser.

| Class | Rule |
|---|---|
| **Blocking** | Statement allowlist (`BEGIN TRANSACTION READ ONLY`, the one pinned `SET LOCAL search_path`, `SELECT`/`WITH`, `ROLLBACK`); every function call qualified; every relation read qualified; no callable or operator resolving outside `pg_catalog`; no write, DDL, locking, delay, sequence, advisory-lock or large-object operation |
| **Advisory** | Operator, cast and special-form inventories. Kept as review aids, best effort, **never represented as mechanically complete** |

The ruling is provisional: the Judge may reverse it and require mechanically generated inventories instead. It does not
wait for the Judge, because drafting the replacement is otherwise blocked.

### Replacement `V4`/`V6`/`V4` — requirements (deltas only)

| Artifact | Requirement |
|---|---|
| Preflight `V4` | Copy the complete catalog unchanged, including the three `actor_type` rows; wrap the three validation result sets in a final CTE and apply `COLLATE "C"` only in the outer select; keep the explicit `ARTIFACT-INVALID`, `UNRECONCILED` and visibility failures |
| Assessment `V6` | Exact catalog markers; one branch per `C01`–`C10`; catalog-driven zero-row output; deterministic `C10` grouping |
| Receipt `V4` | Expected row counts kept separate from returned counts: `CATALOG-VALIDATION` 66, `RECONCILIATION` 0, `VISIBILITY` 9, `ASSESSMENT` 10 when `C10` has zero or one distinct `schema_version`, plus one row for each additional distinct version. A missing or extra row is `unresolved` |
| Static review | The return records the exact method for each mechanical check: catalog extraction, marker counting, line-ending inspection, candidate-ID counting, hash calculation and prohibited-statement inspection. No syntax proof is claimed |
| Return | `D251-V6-DRAFT-RETURN` in B-119, committed alone; the three files stay unstaged, uncommitted and unexecuted |

### Decision still open for the Judge

**Syntax-proof run.** Lane B's point stands that "draft the replacement" does not authorize it. It would run the
banner-free candidate bytes in a throwaway PostgreSQL built from the two migrations, with no application data and no
credential, and prove syntax and resolution only. It is not a `D-251` environment result. Lane A still recommends it as
its own act before the acceptance commit, because the collation defect above is the kind static review cannot see.

### Cross-artifact and drift

`Modular_PRD.md`, storyboard, story panels, UML, data flow, the Encyclopedia, Build Spec, Artifact Inventory, Fn Specs,
work packets and traceability are unaffected; the Register is unaffected. B-119 stays `Open`, `D-251` is not satisfied
and no accepted package exists. `docs-drift` reads synced at `a5bdcc7`; every later commit is handoff-only and
coverage-excluded, so no Graphify rebuild is owed.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | Lane B's correction of defect 1; defects 2, 3 and 5 | Apply in `V4`/`V6`/`V4` |
| **Approve-with-conditions** | Advisory inventories | Lane A's provisional ruling; Judge may reverse |
| **Approve** | Lane B drafting `V4`/`V6`/`V4` under the requirements above | Phase 1 — draft uncommitted |
| **Defer** | Syntax-proof run, dry runs, human run, classification, `D-251` satisfaction, `V1-SM05` selection | Separate Judge acts |
| **Reject** | Changing `E35`, `E46` or `E53` to `actor_type_v2`; claiming an exhaustive operator or cast inventory | Retain `actor_type`; treat inventories as advisory |

## Lane B clarification packet — advisory inventories and syntax-proof decision, 2026-09-21

**Raiser and boundary.** Lane B raises this packet for Lane A to answer in B-119. It consolidates the two remaining
Judge choices before replacement `V4`/`V6`/`V4` is returned. It creates no SQL, performs no syntax proof or database
access, accepts no artifact and grants no construction authority. The resulting artifacts are nevertheless critical
inputs to later construction readiness and implementation verification: they determine whether the deprecated access
identifier exists in stored values and whether `V1-SM05` may pass its D-251 evidence dependency.

### Parent-first decision table for Lane A and the Judge

Lane A should record **Accept** or **Reject** for each parent before applying its children. A rejected parent stops the
dependent rows and requires Lane A to state the replacement rule.

| Order | Decision | Lane B recommendation | Depends on | If accepted | If rejected |
|---:|---|---|---|---|---|
| 1 | **Inventory policy:** operator, cast and special-form inventories are advisory review aids; statement, function, relation and prohibited-operation checks remain blocking | **Accept** | — | Drafting can proceed under checks that can be reproduced without a SQL parser | Lane A must name and provision the parser or generator that produces and verifies exhaustive typed inventories before drafting |
| 2 | **Static resolution claim:** static review proves the pinned `search_path`, qualified functions/relations and absence of explicit non-`pg_catalog` operator qualification; it does not claim PostgreSQL's resolved operator/cast identity | **Accept** | 1 | Static evidence is stated no more strongly than it can prove | Lane A must supply a mechanical resolver and its acceptance output |
| 3 | **Syntax-proof principle:** syntax and name resolution must be proved against throwaway PostgreSQL before Lane A accepts the package | **Accept** | 1–2 | The recurring parse/resolution gap is caught before accepted blobs exist | Acceptance continues on static review alone; syntax risk moves to the later dry run and another correction loop remains possible |
| 4 | **Syntax-proof authorization:** Lane B may execute only the banner-free candidate SQL bytes in throwaway PostgreSQL initialized from migrations `0001` and `0002`, with no credentials and no application data | **Accept** | 3 | A bounded syntax-proof run becomes authorized | Syntax proof is deferred; drafting and static return may continue, but Lane A cannot require the run before acceptance |
| 5 | **Byte identity:** Lane A prepares the banner-free candidate bytes, records their hashes, and gives those exact files to Lane B; after a passing syntax proof Lane A commits those bytes unchanged | **Accept** | 4 | The tested object and accepted object are the same bytes | The syntax proof cannot support acceptance because it tests a different object |
| 6 | **Evidence classification:** syntax-proof evidence records migration hashes, PostgreSQL version, SQL hashes, exit state, result-set names and row counts, but is not a D-251 environment receipt or result classification | **Accept** | 4–5 | Syntax proof cannot be mistaken for business evidence | The run risks falsely satisfying the environment gate |
| 7 | **Failure path:** any syntax, resolution, row-count or marker failure rejects that artifact version; corrections receive new per-artifact versions and restart static review | **Accept** | 3–6 | Failure is durable and cannot be patched silently | Lane A must define another immutable correction path |
| 8 | **Construction boundary:** accepted SQL and receipts are critical verification inputs, not a work order, implementation completion or permission to change application/database state | **Accept** | 1–7 | Later implementation can consume trustworthy evidence without collapsing setup into construction | Stop: the artifact lifecycle would conflict with the build authorization model |

### Recommended Judge selections

| Choice | Recommended answer | Reason |
|---|---|---|
| Advisory inventories | **Accept rows 1–2** | Two manual exhaustive inventories have already produced false passes. Blocking controls remain qualified and reproducible |
| Syntax-proof run | **Accept rows 3–8** | The run is isolated, credential-free and read-only, and catches syntax/resolution defects before acceptance without becoming D-251 environment evidence |

### Chief Editor decision form

The Chief Editor can answer in one message:

> **Accept rows 1–8.** Operator, cast and special-form inventories are advisory; the blocking safety controls remain as
> recorded. Authorize the bounded syntax-proof run against the exact banner-free candidate bytes in throwaway
> PostgreSQL initialized from migrations `0001` and `0002`, with no credentials or application data. The run proves
> syntax and resolution only and is not a D-251 environment result, construction authorization or closure evidence.

If the Chief Editor wants no execution yet, the alternative is:

> **Accept rows 1–3 and 8; defer rows 4–7.** Advisory inventories are confirmed, but the syntax-proof run is not
> authorized. Lane B may draft and statically return `V4`/`V6`/`V4`; Lane A must not require syntax-proof evidence before
> its next review unless a later Judge act authorizes it.

Rejecting rows 1–2 requires the Chief Editor to name a mechanically generated exhaustive-inventory method. Rejecting
row 5 while accepting the run is not coherent: a run against different bytes cannot support acceptance.

### Lane A follow-up guide

1. **Record the direct Judge answer** against rows 1–8, preserving their dependency order.
2. **Finalize the inventory rule.** If rows 1–2 are accepted, replace every claim of exhaustive completeness with
   `advisory, best effort`; retain the blocking controls unchanged. If rejected, name the parser/generator and its DoD.
3. **Issue the replacement drafting instruction** for the literal preflight `V4`, assessment `V6` and receipt `V4`
   paths, defects 2/3/5, the corrected final-type rule and the exact mechanical-check methods.
4. **Review Lane B's uncommitted return** by reading the exact bytes and independently reproducing its hashes and static
   checks. Reject immutable versions on any defect.
5. **If syntax proof is deferred, stop here.** Lane A records that acceptance still lacks syntax evidence and does not
   silently perform or require a run.
6. **If syntax proof is authorized, prepare the execution object.** Lane A removes only the draft banners, records the
   three banner-free hashes, and changes no other byte.
7. **Hand the exact candidate bytes to Lane B.** Lane B initializes throwaway PostgreSQL from the two migrations, uses
   no credential or application data, runs only the two SQL files and returns the bounded syntax-proof evidence.
8. **Reconcile the evidence.** Lane A verifies the tested hashes equal its candidate hashes, expected result-set counts
   match, and no D-251 result classification was made.
9. **Accept or reject.** A failure creates new per-artifact versions. A pass permits Lane A's existing acceptance and
   evidence-anchor sequence; it still does not authorize either environment run.
10. **Preserve downstream gates.** Dry runs, human execution, classification, D-251 satisfaction and `V1-SM05`
    selection remain separately authorized acts.

### Failure-derived success criteria

The decision is complete when every row has an explicit disposition; the inventory policy states what is blocking and
what is advisory; syntax proof is either expressly authorized or expressly deferred; an authorized run names the exact
bytes, isolation boundary, evidence fields and failure path; and no setup artifact is treated as construction or D-251
evidence.

### Cross-artifact review and Graphify

`Modular_PRD.md` already records the D-251 boundary and unchanged sprint tracker. Storyboard and story panels own the
user journey; UML and data flow own product behavior and product-data movement; the Encyclopedia owns domain meaning;
none owns this evidence procedure. The Register, Build Spec, Artifact Inventory, Fn Specs, work packets and traceability
already identify D-251 and the unchecked `V1-SM05` dependency. They are therefore unaffected until an accepted result
changes readiness or a new canonical artifact is created. B-119 remains the sole tracking owner for this decision and
its evidence.

The governed graph remains synchronized at `a5bdcc7`; later changes are handoff-only and coverage-excluded. No Graphify
rebuild is owed for this clarification. A canonical governed edit would require the normal source update, rebuild and
curated-fragment re-merge.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | Parent-first decision packet and corrected final-type semantics | Lane A answer |
| **Approve-with-conditions** | Advisory inventories | Chief Editor accepts rows 1–2 or names a mechanical alternative |
| **Approve-with-conditions** | Syntax-proof run | Chief Editor accepts rows 3–8; exact candidate bytes and isolation boundary required |
| **Defer** | Replacement drafting, syntax proof, environment runs, classification, D-251 satisfaction and `V1-SM05` selection | Follow the ordered acts above |
| **Reject** | Exhaustive-manifest claims without a generator; syntax proof against bytes other than the acceptance candidate; treating syntax proof as environment evidence | Use this packet's boundaries |

## Lane A answer — Lane B's advisory-inventory and syntax-proof packet: rows 1–8 reviewed, six amendments to the run, decision form finalized, 2026-09-21

**Authority and boundary.** Lane A answers Lane B's packet (`9ac9ad4`). The Judge has **not yet answered** rows 1–8, so
this section records Lane A's recommendations and amendments and prepares one decision message; it does not record a Judge
act. Read at commit `9ac9ad4`. Handoff-only: no SQL is written, no query or container is run, nothing is accepted, the
Register is unaffected, and `D-251` is not satisfied. Row 1 was already ruled provisionally by Lane A in the `6f52b5f`
section; the Judge's answer would confirm or reverse it.

### Lane A's check of the packet against the repository

| Packet claim | Finding |
|---|---|
| Throwaway PostgreSQL "initialized from migrations `0001` and `0002`" is runnable as described | **Not as written.** `0002` revokes privileges from `anon`, `authenticated` and `service_role` (lines 162, 258, 449, 450, 518). Those roles do not exist in a plain PostgreSQL and the migration stops at the first `revoke`. `supabase/config.toml` pins `major_version = 17` |
| "No application data" | **Inaccurate.** `0001` inserts seed rows into `articles`, `trend_signals` and `workflow_transitions`. The throwaway database holds migration seed data, which is not real data and not evidence |
| Lane B "runs only the two SQL files" | **Too narrow.** The approved acceptance criteria require fixtures that prove exact nested-value match, substring rejection and key-name rejection, and a negative fixture for an unlisted column. Those need inserts and one `alter table` in the throwaway database |
| Follow-up steps 6–9 | **Omit the banner-free full re-review** the Judge approved. The syntax-proof and the re-review use the same bytes and the same Lane B turn, and should be one step |
| Isolation | **Unstated risk.** The local Supabase stack's database is the "local disposable database used by the migration tests", a current `D-251` environment. A syntax proof run there could reset or alter it before it is assessed |

### Lane A recommendation on rows 1–8

| Row | Recommendation | Note |
|---:|---|---|
| 1 Advisory inventories | **Accept** | As ruled at `6f52b5f` |
| 2 Static resolution claim stated no stronger than it proves | **Accept** | |
| 3 Syntax proof before acceptance | **Accept** | |
| 4 Bounded run authorization | **Accept as amended** | Amendments A–D below |
| 5 Byte identity: the tested bytes are the committed bytes | **Accept** | Amendment E |
| 6 Evidence is not an environment result | **Accept as amended** | Amendment F |
| 7 Failure path: new per-artifact versions | **Accept** | Matches rule 11 |
| 8 Construction boundary | **Accept** | |

### Amendments to the syntax-proof run (rows 4–6)

| Ref | Amendment |
|---|---|
| A — isolation | The throwaway database is a **separate, named container or instance**, on its own port and never the local Supabase stack's database and never a current `D-251` environment. Nothing is run against either current environment |
| B — build | PostgreSQL **17** to match `config.toml`, image tag pinned and its digest recorded. Lane B first creates the three roles the migration expects (`anon`, `authenticated`, `service_role`, no login) and then applies `0001` and `0002` in order. The migration hashes are recorded. The database holds **migration seed data only** and its superuser password is throwaway and unrecorded; it is not a credential in the `DEP-05` sense |
| C — scope | Lane B may run the two banner-free SQL files **and** apply fixture statements to the throwaway database only: the `C10` exact-value, substring and key-name fixtures, and one unlisted-column fixture. Fixtures are separate files, never part of the artifacts, never run against anything else. Expected results: preflight `CATALOG-VALIDATION` 66 rows all `VERIFIED`, `RECONCILIATION` 0, `VISIBILITY` 9 rows, and after the unlisted-column fixture exactly one `UNRECONCILED` row; assessment 10 rows on unmodified seed data, and the `C10` fixtures counted as specified |
| D — why fixtures matter | A wrong `C10` predicate would return a **false zero on real data**, the failure this whole procedure exists to prevent. Without fixtures, that is first tested on a real environment |
| E — one step | The syntax proof is folded into Lane B's banner-free full re-review (`D251-…-FINAL-REVIEW-RETURN`): same bytes, same turn. Lane A removes the banners, records the banner-free hashes and hands them to Lane B; Lane B reviews, runs the proof, and returns both in one B-119 section. Lane A then verifies the tested hashes and commits those bytes unchanged |
| F — naming | The proof records its hashes as `Syntax-Proof-Tested-SHA256`, never `Executed-SHA256`, which stays reserved for the human run. The evidence also records PostgreSQL version and image digest, migration hashes, fixture file hashes, exit state, result-set names, row counts and fixture outcomes. It makes no `D-251` classification |

### Decision form for the Judge

Replaces Lane B's form. One message:

> **Accept rows 1–8 as amended by Lane A.** Operator, cast and special-form inventories are advisory; the blocking safety
> controls remain as recorded. Authorize Lane B to run the exact banner-free candidate SQL bytes and the fixture
> statements in a separate throwaway PostgreSQL 17 built from migrations `0001` and `0002` with the three Supabase roles
> created first, with no credential and no real data. The run proves syntax, resolution and the `C10` and reconciliation
> behavior only, and is not a `D-251` environment result, construction authorization or closure evidence.

Alternative, if no execution is wanted yet: **Accept rows 1–3 and 8; defer rows 4–7.** Lane B drafts and returns
`V4`/`V6`/`V4` statically; syntax and fixture behavior are first proved at the later dry run, and another correction loop
is possible.

### Cross-artifact and drift

`Modular_PRD.md`, storyboard, story panels, UML, data flow, the Encyclopedia, Build Spec, Artifact Inventory, Fn Specs,
work packets and traceability are unaffected; the Register is unaffected. B-119 stays `Open` and `D-251` is not
satisfied. `docs-drift` reads synced at `a5bdcc7`; later commits are handoff-only and coverage-excluded, so no Graphify
rebuild is owed.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | Rows 1–3, 5, 7 and 8 | Recorded |
| **Approve-with-conditions** | Rows 4 and 6 | Amendments A–D and F |
| **Approve** | Amendment E: one combined re-review and proof step | Recorded |
| **Defer** | The run itself, replacement drafting, environment runs, classification, `D-251` satisfaction, `V1-SM05` selection | Judge answers the decision form |
| **Reject** | Running the proof in the local Supabase stack database, describing the throwaway database as having no data, fixtures inside the artifacts, using `Executed-SHA256` for the proof | The amendments above |

## Lane A answer — Judge accepts rows 1–8 as amended; syntax proof authorized within bounds; final sequence to acceptance, 2026-09-21

**Authority (`D-183`).** The Judge's direct message in the Lane A conversation, 2026-09-21: "Accept rows 1–8 as amended by
Lane A." **Object:** rows 1–8 of Lane B's packet (`9ac9ad4`) as amended by amendments A–F in the `44d2403` section.
**Scope:** the advisory-inventory policy, and one bounded syntax-proof run of the exact banner-free candidate bytes and
the fixture statements in a separate throwaway PostgreSQL 17 built from migrations `0001` and `0002` with the three
Supabase roles created first. **Exclusions:** not a `D-251` environment result, not construction authorization, not
closure evidence; no credential, no real data; nothing run against either current environment. Read at commit
`44d2403`. This section is handoff-only: no SQL is written, no run has happened, nothing is accepted, the Register is
unaffected, and `D-251` is not satisfied.

### What is now decided

| Item | Decision |
|---|---|
| Rows 1–2 | Operator, cast and special-form inventories are **advisory**, best effort, never represented as mechanically complete. Blocking: statement allowlist, qualified functions and relations, nothing resolving outside `pg_catalog`, no write, DDL, locking, delay, sequence, advisory-lock or large-object operation. Lane A's provisional ruling at `6f52b5f` is confirmed |
| Rows 3–6 | The syntax proof precedes acceptance and is authorized as amended (A isolation, B build, C scope incl. fixtures, E one combined step, F naming). It proves syntax, resolution and the `C10` and reconciliation behavior only |
| Rows 7–8 | A failure rejects that artifact version and creates new per-artifact versions; accepted artifacts are verification inputs, never a work order |

### Final sequence to acceptance — parent first

This replaces the scattered step lists for the replacement package. The literal paths are preflight `V4`, assessment
`V6` and receipt `V4` (`docs/handoff/artifacts/B-119/PREFLIGHT-D251-CANDIDATE-COLUMNS-V4.sql.md`,
`.../QRY-D251-STORED-VALUE-ASSESSMENT-V6.sql.md`, `.../D251-MANUAL-RUN-RECEIPT-V4.md`).

| Step | Owner | Act | Durable record |
|---:|---|---|---|
| 1 | Lane B | Draft the three files with banners under the requirements recorded at `6f52b5f`; static review with the exact method of each mechanical check; no execution | `D251-V6-DRAFT-RETURN` in B-119, committed alone; the three files stay unstaged and uncommitted |
| 2 | Lane A | Draft review of the exact bytes; a defect rejects that version and restarts at step 1 with new per-artifact version numbers | Lane A section in B-119 |
| 3 | Lane A | Remove exactly the first banner line and its LF; record the three banner-free hashes | B-119 section, committed by explicit path; the files stay uncommitted |
| 4 | Lane B | One combined step: full banner-free review **and** the syntax proof, executed under amendments A–F, on the exact bytes whose hashes Lane A recorded | `D251-V6-FINAL-REVIEW-RETURN` in B-119, committed alone |
| 5 | Lane A | Verify `Syntax-Proof-Tested-SHA256` equals Lane A's banner-free hashes, expected counts and fixture outcomes match, and no `D-251` classification was made; stage the three files by explicit path with the B-119 acceptance and commit | Acceptance commit |
| 6 | Lane A | Hash each committed blob; make a B-119-only evidence-anchor commit | Anchor commit |
| 7 | — | **Stop.** The dry run in each current environment, human run, classification, `D-251` satisfaction and `V1-SM05` selection each need their own Judge act | — |

A failed proof, or any changed byte after step 3, restarts at step 1 under new version numbers; nothing is patched in
place.

### Bounded instruction for Lane B's run (step 4)

1. **Environment:** a separate named PostgreSQL 17 container on its own port, never the local Supabase stack's database;
   image tag pinned and digest recorded; `anon`, `authenticated` and `service_role` created first with no login; then `0001`
   and `0002` applied in order. It holds migration seed data only.
2. **What runs:** the two banner-free SQL files, and fixture statements applied to this throwaway database only. The
   fixtures are reproduced in the return section, with their hashes; they are not attachments and are never run elsewhere.
3. **Expected results:** preflight `CATALOG-VALIDATION` 66 rows all `VERIFIED`, `RECONCILIATION` 0 rows, `VISIBILITY` 9 rows;
   one unlisted-column fixture yields exactly one `UNRECONCILED` row; the assessment returns 10 rows on unmodified seed data;
   the `C10` fixtures show an exact nested value counted once and a substring or a key-name match counted zero.
4. **Evidence recorded:** PostgreSQL version and image digest, migration hashes, fixture hashes, `Syntax-Proof-Tested-SHA256`
   per SQL file, exit state, result-set names, returned row counts and fixture outcomes. No `D-251` classification.
5. **If the container cannot be built** (for example Docker is unavailable to Lane B), Lane B records a `dependency` finding
   and stops. It does not substitute another database and does not run anything against a current environment.

### Cross-artifact and drift

`Modular_PRD.md`, storyboard, story panels, UML, data flow, the Encyclopedia, Build Spec, Artifact Inventory, Fn Specs,
work packets and traceability are unaffected. The Register is unaffected: the run is an evidence procedure owned by B-119,
changes no closure semantics and produces no `D-251` evidence. B-119 stays `Open`. `docs-drift` reads synced at
`a5bdcc7`; later commits are handoff-only and coverage-excluded, so no Graphify rebuild is owed.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | Rows 1–8 as amended; the syntax proof within the recorded bounds | Step 1: Lane B drafts now |
| **Defer** | The proof itself (step 4), dry runs in both environments, human run, classification, `D-251` satisfaction, `V1-SM05` selection | Later steps and Judge acts |
| **Reject** | Treating the proof as a `D-251` result, running it in the local Supabase database or a current environment, fixtures inside the artifacts, any change to the tested bytes | Preserve the recorded bounds |

## D251-V6-DRAFT-RETURN — Lane B replacement package static return, 2026-09-22

**Authority and boundary.** Lane B completed step 1 of the final sequence authorized at `8a64cb2`. Lane A remains
`Active`; Lane B remains `Eligible` and uses only the handoff-channel exception. The three banner-bearing files were
created and statically reviewed. No banner was removed, no container or database was started, no SQL was executed, and
no syntax or runtime result is claimed.

### Returned manifest and draft hashes

| Artifact | `Lane-B-Draft-SHA256` | Static result |
|---|---|---|
| `docs/handoff/artifacts/B-119/PREFLIGHT-D251-CANDIDATE-COLUMNS-V4.sql.md` | `ae4cd498fd05dcdaa60ce0561ffe4c2141f782657678071f04933aabc8985695` | Pass — ready for Lane A byte review |
| `docs/handoff/artifacts/B-119/QRY-D251-STORED-VALUE-ASSESSMENT-V6.sql.md` | `ef69efe9de816030cdd571a6f4e424121445a37590e0a754ea1300e66f2661bc` | Pass — ready for Lane A byte review |
| `docs/handoff/artifacts/B-119/D251-MANUAL-RUN-RECEIPT-V4.md` | `521d8a58917bc8c6366a2c5f1dd64d4cb250008df3b7155c4102f018e10c795b` | Pass — ready for Lane A byte review |

### Approved deltas applied

| Requirement | Static finding |
|---|---|
| Final type identity | Catalog copied unchanged: `E35`, `E46` and `E53` remain `actor_type`; `article_state_v2` rows remain unchanged |
| Preflight ordering | The three result sets are wrapped in `output`; `COLLATE "C"` appears only on the outer `SELECT * FROM output` ordering |
| Exact markers | Each SQL file has exactly one line equal to `-- BEGIN CATALOG` and one equal to `-- END CATALOG`; no trailing punctuation |
| Inventory policy | Functions and relations remain blocking manifests; operator, cast and special-form lists are renamed `Advisory-*` and make no completeness claim |
| Expected counts | Receipt `V4` separates expected and returned counts: 66, 0, 9, and `9 + max(1, C10 distinct schema_version count)`; it records the observed version count and calculated assessment expectation |

### Reproducible mechanical-check methods and results

| Check | Method | Result |
|---|---|---|
| File hashes | PowerShell `Get-FileHash -Algorithm SHA256` on the three literal paths | Values in the manifest above |
| LF-only bytes | `[IO.File]::ReadAllBytes(...)`; count bytes equal to decimal `13` | Zero in all three files |
| Exact markers | PowerShell `Select-String -CaseSensitive` with `^-- BEGIN CATALOG$` and `^-- END CATALOG$` | One start and one end in each SQL file |
| Catalog extraction | Multiline, single-line regex: content after exact start-marker LF and before the exact end-marker line; UTF-8 encode and SHA-256 | Blocks byte-identical; `d7f526adbb5dccb6a0bf274cb2da1959d881dfef36d8102631fb3fbac73f9d0c` |
| Catalog cardinality | Regex counts of rows beginning `('Cdd'` and `('Edd'` inside the extracted block | 10 candidates; 56 exclusions |
| Candidate branches | Regex count of `k.catalog_id='Cdd'` in assessment `V6`, followed by ID-by-ID text review | 10; one each for `C01`–`C10` |
| Inventory markers | Exact text count of `Allowed-Functions`, `Allowed-Relations-Read`, `Advisory-Special-Forms`, `Advisory-Operators`, `Advisory-Casts` | One of each per SQL file |
| Prohibited operations | Case-insensitive line/term scan for write/DDL, `FOR UPDATE`/`FOR SHARE`, configuration functions, delays, sequences, advisory locks and large-object calls; then statement-boundary review | None found; only the approved `BEGIN`, `SET LOCAL`, `WITH`/`SELECT` and `ROLLBACK` boundary |
| Qualified reads | Text review of every `FROM`/`JOIN` and callable against the blocking manifests | External relations use `public.` or `pg_catalog.`; callables use `pg_catalog.`; CTE names are local |
| Expected-count fields | Exact receipt-table and field inspection | Present separately from returned counts; missing or additional rows are unresolved |

The catalog still contains all relevant columns from migrations `0001` and `0002`, as Lane A independently established
at `0549023`. The assessment retains catalog-driven aggregates, including explicit zero rows for empty tables. This
return intentionally does not repeat a false claim that advisory operator, cast or special-form inventories are
mechanically exhaustive.

### Failure-derived acceptance boundary

Lane A should reject this version if any recomputed draft hash differs; either catalog block or marker differs; the
outer-ordering structure differs; any candidate ID has zero or multiple branches; an advisory inventory is described as
complete; expected and returned counts are conflated; or a prohibited operation appears. Passing this static review is
not syntax proof. Step 4 remains authorized but cannot occur until Lane A completes steps 2 and 3 and supplies the exact
banner-free hashes.

### Tracking, cross-artifact and drift

This completes step 1 only. B-119 remains `Open`; `D-251` remains unsatisfied; and the `V1-SM05` evidence dependency
remains unchecked. `Modular_PRD.md`, storyboard, story panels, UML, data flow, the Encyclopedia, Register, Build Spec,
Artifact Inventory, Fn Specs, work packets and traceability remain unaffected because no package has been accepted and
no environment result exists. The handoff channel is Graphify-excluded, so no rebuild is owed.

None of the three attachments was staged, committed or executed; this section is the only staged and committed path.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | Lane B step-1 drafting and static return | Completed by this section |
| **Approve-with-conditions** | Preflight `V4`, assessment `V6`, receipt `V4` | Step 2 — Lane A independently reviews exact bytes and methods |
| **Defer** | Banner removal and hashes, final review, syntax proof, acceptance, current-environment runs, classification, D-251 satisfaction and `V1-SM05` selection | Steps 3–7 and later Judge acts |
| **Reject** | Running step 4 now, staging or committing attachments from Lane B, or treating static review as syntax/environment evidence | Preserve the final sequence |

## Lane A answer — step 2 draft review of `D251-V6-DRAFT-RETURN`: package rejected on one blocking byte defect; replacement `V5`/`V7`/`V5` is a delta review, 2026-09-22

**Authority and boundary.** Step 2 of the sequence recorded at `8a64cb2`: Lane A's independent review of the exact bytes
Lane B returned at `83eff52`. Lane A read all three files and reproduced the checks itself. Read at commit `83eff52`.
Handoff-only apart from committing the rejected drafts as non-executable history under rule 11. No SQL is written, no
container or query is run, nothing is accepted, the Register is unaffected, and `D-251` is not satisfied.

### What Lane A verified

| Check | Result |
|---|---|
| Working-copy hashes equal the returned `Lane-B-Draft-SHA256` values; zero CR bytes | **Confirmed** |
| Exactly one line equal to `-- BEGIN CATALOG` and one equal to `-- END CATALOG` in each SQL file | **Confirmed**; the `,` that broke the marker in `V5` is gone |
| The catalog blocks are byte-identical and equal to the `V3`/`V5` block (`d7f526adbb5d…`) | **Confirmed**, so the correct `actor_type` rows are unchanged |
| The collated `ORDER BY` now sits outside the union | **Confirmed** (`output` CTE, then `SELECT * FROM output ORDER BY …`) |
| Every assessment branch has the same eleven columns; one branch per `C01`–`C10` | **Confirmed** |
| Receipt expected counts (66, 0, 9, `9 + max(1, N)`) match the design | **Confirmed**; nine relations are catalogued |
| No write, DDL, locking, delay, sequence or large-object operation | **Confirmed** |

### Rejected-draft ledger (rule 11)

| Path | `Lane-B-Draft-SHA256` | Status |
|---|---|---|
| `docs/handoff/artifacts/B-119/PREFLIGHT-D251-CANDIDATE-COLUMNS-V4.sql.md` | `ae4cd498fd05dcdaa60ce0561ffe4c2141f782657678071f04933aabc8985695` | **REJECTED — not executable** |
| `docs/handoff/artifacts/B-119/QRY-D251-STORED-VALUE-ASSESSMENT-V6.sql.md` | `ef69efe9de816030cdd571a6f4e424121445a37590e0a754ea1300e66f2661bc` | **REJECTED — not executable** |
| `docs/handoff/artifacts/B-119/D251-MANUAL-RUN-RECEIPT-V4.md` | `521d8a58917bc8c6366a2c5f1dd64d4cb250008df3b7155c4102f018e10c795b` | **REJECTED — not executable** |

Committed by explicit path with this section.

### Defects

| Order | Defect | Evidence | Consequence | Fix |
|---:|---|---|---|---|
| 1 | **Blocking.** The banner is not the first physical line in two files | Assessment `V6` and receipt `V4` begin with an empty line and carry the banner on line 2; preflight `V4` is correct | The recorded removal rule is "delete the first physical line and its LF". Applied here it deletes the blank line and leaves the banner in the accepted bytes | Banner is byte 0 of the file in all three |
| 2 | Non-blocking, but fix now | The advisory inventories still carry the entries Lane A showed to be wrong at `0549023`: preflight lists `> (int2, int2)` where the literal makes it `(int2, int4)`, lists `<> ("char","char")` which is unused, and omits `<> (text, text)` and `= ("char","char")`; assessment lists the enum `=` as `(public.gate_role, public.gate_role)` where it resolves to the built-in `(anyenum, anyenum)` | Advisory does not mean knowingly wrong. A misleading review aid in accepted bytes | Correct the known entries (guidance below) |

Lane A found no other defect. **Bound:** from here Lane A rejects a version for an advisory-inventory entry only when it can
show that entry is wrong, never for an omission.

Guidance for defect 2, advisory and best effort. Preflight operators: `= (name,name)`, `= (oid,oid)`, `= (text,text)`,
`= ("char","char")`, `<> (text,text)`, `<> (oid,oid)` with the literal coerced to `oid`, `> (int2,int4)`, `AND`, `OR`, `NOT`,
`|| (text,text)`. Assessment operators: `= (text,text)`, and enum equality as `pg_catalog.=(anyenum,anyenum)`. Add one
note line in each file: unknown-typed literals are coerced to the compared type, and the `UNION ALL` widens `int4` to
`int8`.

### Replacement — a delta review

Versions are per artifact: preflight `V5`, assessment `V7`, receipt `V5`. To keep the loop short, the replacement must
differ from `V4`/`V6`/`V4` **only** in these places, and Lane B's return states it with the check used:

1. banner moved to byte 0 in assessment `V7` and receipt `V5` (the leading blank line removed);
2. the advisory comment lines in the two SQL files;
3. the version and artifact names inside the files and the receipt (`V4` to `V5`, `V6` to `V7`).

Lane A then reviews a diff, not three whole files, and the catalog hash `d7f526adbb5d…` must be unchanged. Anything else
that changes needs a stated reason.

### Cross-artifact and drift

`Modular_PRD.md`, storyboard, story panels, UML, data flow, the Encyclopedia, Build Spec, Artifact Inventory, Fn Specs,
work packets and traceability are unaffected; the Register is unaffected. B-119 stays `Open` and `D-251` is not satisfied.
`docs-drift` reads synced at `a5bdcc7`; later commits are handoff-only and coverage-excluded, so no Graphify rebuild is owed.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | Lane B step 1 and the fixes to markers, ordering, expected counts and catalog | Retained unchanged |
| **Approve-with-conditions** | Replacement preflight `V5`, assessment `V7`, receipt `V5` | Defects 1 and 2 only; delta review |
| **Defer** | Banner removal, syntax proof, acceptance, environment runs, classification, `D-251` satisfaction, `V1-SM05` selection | Steps 3–7 |
| **Reject** | Preflight `V4`, assessment `V6`, receipt `V4` for acceptance or execution; a banner that is not the first physical line | Replace as above |

## D251-V7-DRAFT-RETURN — Lane B delta replacement static return, 2026-09-22

**Authority and boundary.** Lane B repeated step 1 under Lane A's delta instruction at `891bc07`. The replacement is
limited to preflight `V5`, assessment `V7` and receipt `V5`. No banner was removed after drafting, no SQL was executed,
no container or database was started, and no syntax or runtime claim is made.

### Returned manifest and draft hashes

| Artifact | `Lane-B-Draft-SHA256` | Static result |
|---|---|---|
| `docs/handoff/artifacts/B-119/PREFLIGHT-D251-CANDIDATE-COLUMNS-V5.sql.md` | `cba38707ce9501b06546b40565be61f723870d3b787682eb4ac4898ebf41ee23` | Pass — delta only |
| `docs/handoff/artifacts/B-119/QRY-D251-STORED-VALUE-ASSESSMENT-V7.sql.md` | `8bc03517516de074dc2a49990e527e879e565c2d0ee7ef9e348f3d33ddfd9791` | Pass — delta only |
| `docs/handoff/artifacts/B-119/D251-MANUAL-RUN-RECEIPT-V5.md` | `8525bbb38d309785e52a122f7db6970ef99bf48cec8586da88d7e58439754ebf` | Pass — delta only |

### Delta proof

| Authorized difference | Check used | Result |
|---|---|---|
| Banner at byte 0 | `[IO.File]::ReadAllBytes` and inspect byte index 0; read the first physical line | All three begin at byte 0 with their draft banner; SQL first byte decimal `45`, receipt first byte decimal `62` |
| Leading blank removed | `git diff --no-index` from `V4`→`V5`, `V6`→`V7`, receipt `V4`→`V5` | One initial blank line removed from assessment and receipt; preflight had none |
| Known-wrong advisory entries corrected | Same three no-index diffs; compare the two SQL comment regions to Lane A's guidance | Preflight adds `=("char","char")`, `<>(text,text)`, corrects `>(int2,int4)`, removes unused `<>("char","char")`; assessment uses `pg_catalog.=(anyenum,anyenum)` |
| Coercion note | No-index diff and exact-line inspection | Each SQL file states unknown-literal coercion and `UNION ALL` widening from `int4` to `int8` |
| Version and artifact names | Receipt no-index diff | Receipt heading is `V5`; referenced SQL artifacts are preflight `V5` and assessment `V7` |
| No unauthorized SQL/body change | Review every no-index diff hunk outside the leading line and advisory comment region | None; SQL bodies are byte-identical to their rejected predecessors |
| Catalog unchanged | Extract lines strictly between exact catalog markers and SHA-256 the UTF-8 bytes | Both blocks remain byte-identical at `d7f526adbb5dccb6a0bf274cb2da1959d881dfef36d8102631fb3fbac73f9d0c` |
| Line endings | Count byte value decimal `13` in each file | Zero CR bytes in all three |

The advisory lists remain best effort and are not claimed mechanically complete. The blocking function, relation,
statement and prohibited-operation controls are unchanged from the package Lane A reviewed at `891bc07`.

### Failure-derived acceptance boundary

Lane A should reject the replacement if any hash differs; any file has a byte before its banner; either catalog hash
changes; any SQL-body diff appears outside the authorized comment region; or receipt changes extend beyond its leading
blank removal and version/artifact names. A passing delta review advances only to Lane A's banner-removal step; it does
not itself authorize Lane B to start the already-approved syntax proof before Lane A records the banner-free hashes.

### Tracking, cross-artifact and drift

This is the repeated step-1 return. B-119 remains `Open`; `D-251` remains unsatisfied; and `V1-SM05` remains unchecked.
`Modular_PRD.md`, storyboard, story panels, UML, data flow, the Encyclopedia, Register, Build Spec, Artifact Inventory,
Fn Specs, work packets and traceability remain unaffected. The handoff channel is Graphify-excluded, so no rebuild is
owed.

None of the three attachments was staged, committed or executed; this section is the only staged and committed path.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | Lane B delta drafting and static return | Completed by this section |
| **Approve-with-conditions** | Preflight `V5`, assessment `V7`, receipt `V5` | Lane A delta review, then banner removal and recorded hashes |
| **Defer** | Full banner-free review, syntax proof, acceptance, environment runs, classification, D-251 satisfaction and `V1-SM05` selection | Steps 3–7 and later Judge acts |
| **Reject** | Any change outside the authorized delta, running syntax proof before Lane A's hash handoff, or Lane B committing attachments | Preserve the sequence |

## Lane A answer — delta review of `D251-V7-DRAFT-RETURN` passed; banner removed; banner-free hashes recorded (steps 2–3), 2026-09-22

**Authority and boundary.** Steps 2 and 3 of the sequence recorded at `8a64cb2`, for the replacement preflight `V5`, assessment
`V7` and receipt `V5` returned at `579efb1`. Read at commit `579efb1`. This section is committed alone: the three files are
**not** staged or committed, and nothing is accepted. No SQL is written, no container or query is run, the Register is
unaffected, and `D-251` is not satisfied.

### Step 2 — delta review: passed

Lane A diffed each replacement against the rejected `V4`/`V6`/`V4` committed at `891bc07`.

| File | Differences from the rejected version | Authorized? |
|---|---|---|
| Preflight `V5` | The advisory-operator line corrected (`= ("char","char")` added, `<> (text,text)` added, `> (int2,int4)`, the unused `<> ("char","char")` removed); one added `Advisory-Coercion-Note` line | Yes — defect 2 |
| Assessment `V7` | The leading blank line removed, so the banner is byte 0; the advisory-operator line corrected (built-in `anyenum` equality); one added `Advisory-Coercion-Note` line | Yes — defects 1 and 2 |
| Receipt `V5` | The leading blank line removed, so the banner is byte 0; the three `V4`/`V6` names updated to `V5`/`V7` | Yes — defect 1 and version names |

No other line differs. The catalog blocks remain byte-identical at `d7f526adbb5d…`, both markers are exact, all three files
are LF-only, and the three returned `Lane-B-Draft-SHA256` values equal Lane A's recomputed values.

**Waiver.** The amended attestation wording asked for a boundary sentence about `SET LOCAL search_path` in each SQL header.
The drafts since `V3` carry it only in the receipt's attestations. Lane A **waives** the header comment: it is comment-only,
the receipt states it, and requiring it would cost another version for no safety gain.

### Step 3 — banner removed, banner-free hashes recorded

Lane A deleted exactly the first physical line and its LF from each file, after confirming that line was the exact banner
text, and changed no other byte. Proof: each resulting hash equals the hash of the draft minus its first line, computed
before the edit. Zero CR bytes and no remaining banner text in all three. Banner-bearing copies are preserved outside the
repository.

| Artifact | `Lane-B-Draft-SHA256` (banner-bearing) | **Banner-free SHA256** (the bytes for step 4 and acceptance) |
|---|---|---|
| `docs/handoff/artifacts/B-119/PREFLIGHT-D251-CANDIDATE-COLUMNS-V5.sql.md` | `cba38707ce9501b06546b40565be61f723870d3b787682eb4ac4898ebf41ee23` | `0cc9c4e59e9139de84d5029729b72ab80558003e124ce4b46f3f1a0061aa7d1a` |
| `docs/handoff/artifacts/B-119/QRY-D251-STORED-VALUE-ASSESSMENT-V7.sql.md` | `8bc03517516de074dc2a49990e527e879e565c2d0ee7ef9e348f3d33ddfd9791` | `6264ed7fc4f436202cc1d698ea8d49416a6f366db7425d4342b6ae0a40cda1ed` |
| `docs/handoff/artifacts/B-119/D251-MANUAL-RUN-RECEIPT-V5.md` | `8525bbb38d309785e52a122f7db6970ef99bf48cec8586da88d7e58439754ebf` | `06bf8e8a7aca33c292cb80794fc2ddc9f39e3d67714cd99d5dc21e097f1bca60` |

The SQL files now begin with the `-- Allowed-Functions:` line; the receipt now begins with a blank line, as the removal rule
produces.

### Step 4 — Lane B's next act

The working-tree files carry the banner-free bytes above. Lane B performs the combined step under the bounds recorded at
`8a64cb2` and returns `D251-V7-FINAL-REVIEW-RETURN`: recompute the three hashes and confirm they equal the table; do the
full banner-free review; run the syntax proof with `Syntax-Proof-Tested-SHA256` equal to the banner-free hashes for the two
SQL files. Any change to a byte after this section restarts at step 1 under new version numbers. Lane B commits B-119
alone and does not stage the attachments.

### Cross-artifact and drift

`Modular_PRD.md`, storyboard, story panels, UML, data flow, the Encyclopedia, Build Spec, Artifact Inventory, Fn Specs,
work packets and traceability are unaffected; the Register is unaffected. B-119 stays `Open`. `docs-drift` reads synced at
`a5bdcc7`; later commits are handoff-only and coverage-excluded, so no Graphify rebuild is owed.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | Delta review of `V5`/`V7`/`V5`; banner removal and recorded banner-free hashes | Step 4 — Lane B final review and syntax proof |
| **Approve** | Waiver of the SQL-header boundary sentence | Recorded |
| **Defer** | Syntax proof, acceptance commit, evidence anchor, environment runs, classification, `D-251` satisfaction, `V1-SM05` selection | Steps 4–7 |
| **Reject** | Any byte change after this section, running the proof on bytes other than those hashed above, staging or committing the attachments before step 5 | Restart at step 1 under new versions |
