# B-066 — D-167 confuses OD4 with Line 3 and closes an incomplete propagation sweep

- **Raised:** 2026-08-31 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** verifying `B-062`/`B-065`, treating `D-166`/`D-167` as fully propagated,
  scheduling future `FR-11`, or claiming OD4 and Line 3 have normalized meanings
- **Status:** Answered
- **Lane A:** **Acknowledged and corrected 2026-08-31 (`D-168`).** Confirmed against the frozen
  Charter and `V1-DECISION-REGISTER.md`: `D-167` correctly closed `Q2`/`FR-11`'s not-built status
  but mis-sourced it to the Three Lines Model's `OD4` branch ② rather than directly to `D-57`.
  `D-168` adds the correcting decision and propagates it to `Modular_PRD.md` (`US-11`, `AC-17`,
  `FR-11` rows, traceability/coverage tables, Line 3 persona row), `V1-BUILD-SPEC.md` (S5 row,
  gate-later-sprints citation), `FN-EXCEPTIONS-06-11-12.md`, the Addendum/Blueprint/Business Case
  (evidence-access wording completing `D-166`'s correction), `CONFIG_LOG.md`/`DECISION_LOG.md`
  (`LINE3_EXECUTOR_IDENTITY` re-sourced from `OD3` to `D-57`), and `docs/ENCYCLOPEDIA-SYNC.md`
  (Entry 05 flagged affected, not yet republished). No Line 3 table, identity field, `OD4` engine,
  or S5 implementation created. `B-062`/`B-065` intentionally left at `Applied`, not `Verified` —
  this correction does not verify them.
- **Resolution:** Applied
- **Verified-By:**
- **Evidence:** frozen `docs/source/project-charter-v1.md` OD2/OD4 rows;
  `V1-DECISION-REGISTER.md` `D-57`, `D-165`, `D-166`, `D-167`, `D-168`, and tier map;
  `Modular_PRD.md` Line 3 persona, `US-11`, `FR-11`, `AC-17`, traceability/dependency rows;
  `V1-BUILD-SPEC.md` scope and S5 rows; `FN-EXCEPTIONS-06-11-12.md`;
  `CONFIG_LOG.md`; `DECISION_LOG.md`; Addendum, Blueprint, Business Case, RACI, Alpha Portfolio
  continuity plan, and Encyclopedia sync record
- **Verified-At-Commit:**

## Primary goal

Preserve four distinct business and system questions instead of letting the word “independence”
collapse them into one:

1. whether the five-gate pipeline produces distinct editorial judgment (`OD2`);
2. whether a separately authorized Proposer → Critics → Judge system should replace or augment how
   a node reaches a judgment (`OD4`);
3. whether the organization has an independently positioned assurance function (`SEC-06`); and
4. whether a future product feature performs a risk-triggered per-article audit (`FR-11`).

The current correction chain gets parts of this right, but `D-167` repairs the false `OD3`
dependency by substituting `OD4`. That is another category error.

## Parent finding — authority before propagation

The frozen Charter controls the meaning:

- `OD2` asks whether a distinct agent in the five-gate pipeline supplies sufficiently distinct
  judgment for four-eyes.
- `OD4` is **Proposer → Critics → Judge replacing the linear pipeline**, rejected for v1 and
  deferred. Its two branches say when that remedy decision must be reconsidered. Branch ② says
  that if `OD2` resolves negatively, `OD4` **or another fix** must be selected before launch.

Therefore, “OD4 branch ② still binds” means **the remedy decision reopens if the existing
independence mechanism fails**. It does not mean:

- OD4 is part of the IIA Three Lines Model;
- OD4 is Line 3;
- OD4 owns `SEC-06`;
- OD4 is the dependency that decides whether `FR-11` is built; or
- an OD4 trigger automatically authorizes the OD4 system.

`D-57` already owns `FR-11`'s current disposition directly: v1 has no independent assurance and
`FR-11` is not built. `OD3` remains the separate headcount/roster question. A future Line 3 or
`FR-11` would require its own authorization, executor, mandate, reporting path, safeguards, and
acceptance evidence. A future OD4 system would require its own selection and authorization. One
does not silently authorize the other.

## What the D-165/D-166/D-167 chain got right

| Decision | Sound part to preserve |
|---|---|
| `D-165` | `SEC-01` is successor-node separation, not `R ≠ A` inside T5; S2 Unit 1/Unit 2 scope is separated; the transactional RPC boundary is authorized |
| `D-166` | `SEC-06` uses the 2024 GIAS effective 2025; organizational assurance is distinct from `SEC-01` and `FR-11`; evidence access is not an independence violation |
| `D-167` | `Q2` was already answered by `D-57`; `FR-11` is not built in v1; `OD3` does not govern `FR-11`'s current build status |

These findings do not need to be rewritten. The fix should add a correcting decision and propagate
only its current-value meaning.

## What remains unclear or contradictory

1. **`D-167` says Line 3 assurance is “for OD4 under the Three Lines Model.”** The frozen Charter
   defines OD4 as Proposer → Critics → Judge, not a Three Lines role or assurance function.
2. **Trigger, remedy, and authorization are conflated.** An OD4 branch can require reconsidering a
   remedy; it does not select OD4, charter an OD4 project, or build Line 3.
3. **The Product Requirements Document still contains child text `D-166`/`D-167` claim to have
   closed.** `US-11` and `AC-17` retain “no shared data path”; `AC-17` still says executor identity
   is unresolved under `OD3`; several `FR-11` rows substitute `OD4` for the removed `OD3` link.
4. **The Build Spec still gates S5 on `OD3`** and describes S5 as a future Line 3 sprint, despite
   `D-57` deciding that `FR-11` is outside v1 and no replacement authorization existing.
5. **The functional spec repeats the new OD4 category error.** It correctly says `Q2` is answered
   but then calls OD4 branch ② the governor of `FR-11`/Line 3.
6. **The Addendum, Blueprint, and Business Case still carry current-value “no shared data path”
   language.** `D-166` corrected the Product Requirements persona row but did not complete the
   source-document normalization that `D-165` and `B-065` explicitly named.
7. **Configuration and decision logs still make Line 3 identity part of `OD3`.** Keeping a future
   placeholder `UNSET` is safe; sourcing it to the wrong open decision is not.
8. **The Encyclopedia republishes the error as settled knowledge.** Entry 05 says Line 3's build
   status is OD4 branch ②, so the synchronized graph makes the wrong relationship easier to find.
9. **Closure wording exceeds closure evidence.** `D-167` says every named location was corrected,
   while live rows contradict it. `B-062` and `B-065` remain `Applied`, appropriately, and cannot
   be promoted to `Verified` yet.

## Normalized semantic map

| Term | One meaning | Not this |
|---|---|---|
| `OD2` | Viability of distinct judgment in the existing five-gate pipeline | Line 3 organizational assurance |
| `OD4` | Deferred Proposer → Critics → Judge alternative/remedy, considered only after a Charter trigger and separately authorized | Line 3, `SEC-06`, or an automatic response to the trigger |
| `SEC-01` | Project-owned successor-node separation at editorial Line boundaries | Cognitive independence or IIA organizational assurance |
| `SEC-06` | GIAS-anchored organizational assurance function and its institutional independence | Per-article four-eyes or an OD4 judgment engine |
| `FR-11` | Proposed risk-triggered per-article audit feature | Proof that `SEC-06` exists |
| `Q2` / `D-57` | Direct v1 disposition: no independent assurance; `FR-11` not built | A temporary block waiting for `OD3` or OD4 |
| `OD3` | Agent headcount and roster shape | Line 3/`FR-11` build authorization |
| `C-13` / `FR-14` | Compensating observability that makes absent assurance visible | Line 3 or independent assurance |

## Guaranteed failure chains

| If the plan does this | Why it fails | Observable failure |
|---|---|---|
| Replace every `OD3` reference with `OD4` | It repairs a vocabulary error without re-deriving ownership from the Charter | OD4 becomes a silent dependency of Line 3 even though the Charter describes a different system |
| Treat an OD4 trigger as authorization | A trigger only forces a remedy decision | A separate system is built without a business case, charter, owner, budget, or acceptance boundary |
| Treat the OD4 Judge as Line 3 | A workflow label does not create institutional independence | The same system proposes, challenges, judges, and then calls its output independent assurance |
| Treat `FR-11` as satisfying `SEC-06` | Per-article execution cannot prove board reporting, mandate, scope autonomy, or protection from interference | Article tests pass while organizational assurance remains absent |
| Keep “no shared data path” | Assurance cannot inspect or coordinate over the evidence it must assess | It audits an unverifiable copy or an operational owner's filtered view |
| Keep stale OD3/Q2 blockers after `D-57` | A decided absence is represented as an unresolved dependency | A future team waits for the wrong decision or accidentally builds excluded v1 scope |
| Close from response prose or green checks alone | Existing checks validate structure and selected cross-references, not these semantic relationships | `bun run check` passes while contradictory current-value rows remain live |
| Republish before correcting the parent relation | Graphify and the Encyclopedia distribute the error consistently | The wrong dependency becomes the easiest answer for later agents to retrieve |

## Draft fix — highest parent first

### 1. Add one correcting register decision

Do not rewrite the historical text of `D-165`, `D-166`, or `D-167`. Add a new decision that
preserves their sound parts and corrects `D-167`'s parent relation:

> `FR-11`'s v1 disposition is governed directly by `D-57`/`Q2`: no independent assurance and not
> built in v1. `OD3` does not govern that disposition. `OD4` also does not govern `FR-11` or
> `SEC-06`; it remains the Charter's deferred Proposer → Critics → Judge remedy option. Its branch
> triggers reopen a remedy decision but neither select OD4 nor authorize Line 3. Any future OD4
> system and any future Line 3/`FR-11` capability require separate authorization and evidence.

This parent correction must land before child wording is edited, so every child has one stable
source.

### 2. Propagate the parent meaning once per owning tier

| Tier or artifact | Minimal correction |
|---|---|
| Decision Register | Add the correcting decision; change current summaries and applicability claims, not historical `D-167` prose |
| V1 Build Spec | Remove `OD3` and OD4 as S5/Line 3 gates; state `FR-11` is outside v1 under `D-57` and needs a fresh future authorization. Preserve historical rows only when clearly labelled historical |
| V1 Artifact Inventory | Unaffected now; add artifacts only if a future Line 3 or OD4 project is authorized |
| Modular PRD | Replace OD4-as-governor wording with direct `D-57`; repair `US-11`/`AC-17` evidence access and the stale OD3/Q2 status; retain OD4 only in its true trigger/remedy rows such as `NG-09` and the OD2 risk response |
| `FN-EXCEPTIONS-06-11-12` | Preserve `FR-11` behaviour as future specification, but remove OD4/OD3 ownership claims and state the direct `D-57` disposition |
| Addendum / Blueprint / Business Case | Replace current-value “no shared data path” with unrestricted evidence read access plus independent authority over scope, conclusions, and reporting; describe OD4 as a separately selected remedy, not Line 3. Do not edit the frozen Charter |
| RACI / Alpha Portfolio plan | Preserve their separation of intra-node OD4 from inter-node gates and institutional rule authority; normalize only text that still calls OD4 Line 3 |
| `CONFIG_LOG` / `DECISION_LOG` | Keep `LINE3_EXECUTOR_IDENTITY = UNSET`, but remove `OD3` as its source; cite `D-57` and require a fresh future authorization rather than inventing a replacement OD |
| Encyclopedia | Correct Entry 05 and its sync record after the governing tiers, then republish once |
| Handoff tracking | `B-063` and `B-064` are independently verified. Keep `B-062` and `B-065` Applied until the normalization sweep and negative checks pass |
| Phase closure | Unaffected unless the new decision changes a named phase condition; no lane-state change is needed for the correction itself |

### 3. Keep implementation out of this correction

Do not create Line 3 tables, identity fields, an OD4 engine, an assurance mandate, a new migration,
or S5 tasks. This is a source/semantics/propagation repair only. Later authorization must choose
whether OD4, Line 3, both, another remedy, or neither is needed; this pass must not choose for it.

## Success criteria derived from failure

Completion requires failure-oriented evidence, not only a clean prose read:

1. A current-value source search finds no statement that OD4 is “under the Three Lines Model,”
   governs `FR-11`/Line 3/`SEC-06`, or is automatically selected when a branch fires.
2. A proposed `FR-11` build fails authorization unless a new decision supplies scope, executor,
   mandate, reporting path, safeguards, phase, artifacts, and acceptance evidence.
3. A proposed OD4 build fails authorization unless its Charter trigger, remedy selection, separate
   project/business authorization, owner, budget boundary, and acceptance evidence are recorded.
4. A proposed OD4 Judge cannot pass as Line 3 merely because it is named “Judge” or uses a
   different agent identity.
5. A proposed assurance function fails if Lines 1/2 can set its scope, filter evidence, alter its
   conclusion, or suppress reporting; it does not fail merely because it reads shared evidence.
6. `US-11`, `FR-11`, `AC-17`, S5, the functional spec, and config/decision logs all state the
   direct `D-57` v1 disposition and carry neither an OD3 nor OD4 dependency for that status.
7. Historical records remain identifiable as historical; current summaries do not repeat their
   retired blockers or source errors.
8. `B-062`/`B-065` reach `Verified` only after Lane B or another independent reviewer checks the
   applied files against the correcting decision, not the Lane A response text.
9. The Encyclopedia is regenerated only after the owning documents agree; Graphify is rebuilt
   against that final commit and `lastAnalyzedHead` equals `HEAD`.
10. `bun run check` passes, and targeted negative source tests for the semantic errors above also
    fail on deliberately reintroduced bad phrases and dependencies.

## Current graph and drift state

Before this handoff was added, Graphify was synchronized at `c286c7c`, its branch record matched
`HEAD`, graph coverage included every Markdown file under `docs/`, and `bun run check` passed all
local checks. The graph faithfully contained the current corpus—including the incorrect D-167/OD4
relationship. That is a **semantic false green**, not graph staleness.

After this new handoff is committed by Lane A, Graphify must be rebuilt so the handoff and later
corrections enter the graph. Lane B must not update Lane A's graph artifacts while Lane A is the
Active lane.

## What I did instead

Performed a documentation-only independent review of the `D-165`/`D-166`/`D-167` chain, its
handoff closure evidence, the frozen Charter's OD meanings, current Product/Build/functional
specifications, source documents, logs, Encyclopedia, and Graphify state. Updated only handoff
tracking. No governing document, frozen source, application code, schema, migration, workflow,
build configuration, lane state, or graph artifact was changed.
