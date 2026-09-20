# B-119 — Agentic documentation architecture: planning-method and MMF reconciliation

- **Raised:** 2026-09-20 by Lane B
- **Kind:** finding
- **Phase:** 1
- **Blocks:** treating the attached agentic-documentation proposal as commit-ready; no existing governed work or construction unit
- **Status:** Open
- **Lane A:**
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
