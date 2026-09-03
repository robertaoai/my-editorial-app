# docs/ — what governs what

Read this before building from anything in this folder.

## Two different kinds of document live here

| Folder | What it is | Authority |
|---|---|---|
| `source/` | The **governing documents**: Project Charter, Addendum, Blueprint, Business Case | Binding, in that precedence order |
| `governance/` | The **provisional deviation register** — departures from the governing set, dated, with closing triggers | Records departures; creates no authority |
| `journal/` | Dated **build-readiness entries**: decision sheets, the sprint plan | Records dated source analysis and rationale; historical memory only. The Chief Editor ratifies, documents do not ratify themselves |
| `journal/2026-08-16-sprint-plan.md` §header | The branch's historical root — `SETUP-SPIKE-000` (`D-185`) | Historical lineage only; grants no current authority. Current operative decisions/state/backlog live in `v1/`/`handoff/`, not here |
| `v1/` | The **operative record**: `V1-DECISION-REGISTER.md` (decisions, gap dispositions, conditions), `V1-BUILD-SPEC.md` (scope and sequence), `V1-ARTIFACT-INVENTORY.md` (what must exist) | **Binding on build order and gap status.** When derived tiers conflict, the register wins (`D-58`); frozen documents still outrank it |
| this folder | `Modular_PRD.md` — the **governed requirement specification**, derived from the governing set with end-to-end traceability | Requirements layer; ratifies nothing |
| this folder | The **repo plan pack**: `PRD.md`, `ARCHITECTURE.md`, `DATA_MODEL.md`, `INTELLIGENCE_LAYER.md`, `AGENTIC_LAYER.md`, `SECURITY.md`, `TASKS.md`, `TEST_PLAN.md` | **Not governing.** See below. |

### The two PRDs — opposite sides of the customer boundary

Both are kept, and **neither governs the other:**

| File | Side | Author | Authoritative on |
|---|---|---|---|
| `PRD.md` | **Demand** | Customer, derived from the Business Charter | **What the customer wants.** Its approval authorised scaffolding |
| `Modular_PRD.md` | **Supply** | Project team | **How those wants are specified and built** |

Requirements flow customer → project sponsor → project team, and feedback returns the same way (PMI/PMBOK). So a difference between the two is never settled by precedence — it is either an **elaboration** (the team specifying how a want is met) or a **change request** (routed back to the customer through the sponsor).

`PRD.md` is not expected to carry Lines, state machines, or traceable ids. The customer is the subject-matter expert on their own business, not on SDLC.

The mapping in both directions, with a content hash on every customer statement so customer edits are detectable, is **`governance/requirements-traceability-map.md`**. It currently shows one uncovered customer requirement, one partially covered, and five specifications with no customer origin.

## About the plan pack

`CLAUDE.md` describes the plan pack as "a complete, correct plan… already committed in /docs."
It was generated at scaffolding time from the project name and summary, **before** the
governing documents were available, and it does not sit in the precedence hierarchy. Measured
against the Addendum, it diverges in ways that matter:

- The state machine omits `Validated` and `Needs Revision`, and collapses Addendum T2/T3. Under
  the Addendum's own "no article can skip a state" rule, the seeded articles have skipped a gate.
- `workflow_transitions` has no `line_assignment` and no `judgment_independence_status`, so
  four-eyes cannot be evaluated at all — the Addendum keys enforcement on Line, not on actor id.
- `ARCHITECTURE.md`, `AGENTIC_LAYER.md`, and `supabase/migrations/0001_init.sql:131` all execute
  T5 with an agent. T5 is the Line 2 gate and is human-primary in every governing document.
  **The committed seed data encodes a four-eyes violation today.**
- Stripe scaffolding ships in `app/api/stripe/` and `lib/stripe/`, against a Charter-level v1
  exclusion ("No monetization features").

Full list as X3, X4, X5, X7, X8 in `journal/2026-08-16-sprint-plan.md`; tracked as **D5** in the
deviation register.

**So:** the plan pack is useful as a build convenience for Phase 0 and is wrong where it
conflicts. Where it disagrees with `source/`, `source/` wins. Reconciling it is Sprint 0 work
plus migration `0002`, per the sprint plan — ordinary build work, not a governance decision.

## Order to read

1. `source/project-charter-v1.md` — source of truth, and the only frozen document
2. `source/v1-build-readiness-addendum.md` — build specifications
3. `source/blueprint.md` — architecture and product meaning
4. `source/business-case.md` — rationale
5. `governance/provisional-deviation-register.md` — what is running ahead of the Charter, and
   what closes each departure
6. `journal/2026-08-16-sprint-plan.md` — the sprint plan, the full gap register, and the
   **pre-S0 remediation sequence (§R)** that must run before any sprint begins
7. `Modular_PRD.md` — requirements, traceability, acceptance criteria
8. `PRD.md` — the original requirement record, for context on what was originally scoped

## Standing constraints

**Open decisions stay open.** OD1, OD2, and OD3 are Open at Charter level and are not closable
at scaffolding stage — the evidence that answers them is what the build produces. Do not close
them in a lower document, and do not treat "resolved" as "ratified."

**No invented numbers.** `AGENT_HEADCOUNT` and `LINE1_AGENT_ROSTER` are UNSET because no source
document supplies them and the Charter withholds the figure pending OD3. Do not default them,
do not round them, and do not back-derive a count from the Charter's "four review gates."

**One hard stop.** If OD2 resolves negatively at any point, Charter OD4 branch ② applies:
pre-launch blocker, "must be resolved before shipping, not after."

## How a request becomes execution

Six stages. Each names **one canonical record per fact** — the artifact where that fact durably
lives. The actor performing a stage, and the sources it consults, are separate axes from that
record.

| Stage | Canonical record | Actor and evidence boundary |
|---|---|---|
| **Request** | Lane B/C feedback: the originating `handoff/` entry. **Judge input:** transient until classified under `D-183` as approval or clarification and recorded in the owning governed record. **Customer or business input:** a **request** until classified against the frozen Project PRD and Charter. Within that baseline, refine only the single derived tier that owns the fact under `D-29`. If it would add to or contradict a frozen source, record a named Register gap or change request and **stop** until the Judge decides the governing successor. **Frozen sources are cited as evidence and are never writable intake destinations** | Raising a request grants nothing. `D-183` applies to Judge approval and clarification **only**; customer input carries no authorization |
| **Refinement** | Lane B/C request: the same handoff entry — Lane A answers **inside** it. Lane A- or Judge-originated gap: the relevant `v1/V1-DECISION-REGISTER.md` gap or boundary section | May propose; cannot authorize |
| **Decision and authorization** | `v1/V1-DECISION-REGISTER.md` | Records the `D-183` Judge act: object, immutable revision, action, checkpoint, scope, exclusions |
| **Execution packet and readiness** | `v1/V1-BUILD-SPEC.md` owns **approved sprint scope, sequence and DoD**. The selected lane's work order owns the **current executable unit, exact paths and exclusions**, by reference to that Build Spec. `v1/V1-ARTIFACT-INVENTORY.md` owns **file lifecycle** — what is created or retired. `v1/V1-PHASE-CLOSURE.md` §5 owns **live lane state** | Each readiness subfact has exactly one canonical record. Planning grants no authority |
| **Execution** | The authorized work-product paths | Performed by the `Active` lane. **Exception:** `D-184` permits an `Eligible` Lane B/C actor to commit and push **only its own single handoff entry**, under the canonical SOP in `handoff/README.md` |
| **Evidence and lifecycle** | Lane B/C: the originating handoff entry or turn report. Lane A: its boundary decision section (`D-138`) | Git, the checks and Graphify are evidence **sources**, never the record. The author may record `Applied`; only an independent actor records `Verified` |

**Promotion rule.** Outside `D-184`'s handoff-only exception, work-product execution begins only
when the Register records the applicable Judge act, the execution packet identifies the exact
bounded unit and DoD, and Phase Closure names the executing lane `Active`. A request, an answer, a
proposed plan, an `Eligible` nomination, a commit, a push, or a passing check **cannot substitute
for any missing condition**, and an `Approve` verdict on an analysis is not permission to apply it.

**Capture before child.** Before drafting anything that depends on a material clarification given
in conversation, record that clarification once in its owning record above — its parent, the open
questions it leaves, and what it changes downstream. A child refined against a chat-only premise is
correctly reopened later.

**Lane A raises nothing in `handoff/`.** It is Lane B's and Lane C's channel; `D-138` rejected an
`A-NNN` series and `ENTRY_FILE` matches `[BC]` only, so such a file is silently ignored rather than
rejected. Lane A's own turn record is its Register boundary section, cited from
`v1/V1-PHASE-CLOSURE.md` §5.0a.

**Journals preserve analysis, not authority.** `journal/` entries are dated source rationale and
historical memory. Do not cite one as permission, and do not rewrite historical journals to keep
them current — that destroys their value as a record.
