# B-073 — R66 frozen-source intake correction guide

- **Raised:** 2026-09-03 by Lane B
- **Kind:** blocked-on-decision
- **Phase:** 1
- **Blocks:** application and independent verification of `B072-R66`; no product implementation
- **Status:** Open
- **Lane A:**
- **Evidence:** `B-072` §`B072-R66`; `docs/README.md` §"How a request becomes execution" Request row; `D-29`, `D-34`, `D-58`; frozen-source rules in `AGENTS.md`

## What happened

`docs/README.md` sends customer/business input to `PRD.md` “on the demand side” and
`Modular_PRD.md` “on the supply side.” That conflates a natural person's request, the frozen
institutional baseline, and writable derived specifications.

A request grants no authority. `docs/PRD.md` and the Charter are governing evidence and must never
be edited. An in-scope refinement lands only in the tier owning that fact under `D-29`/`D-34`.
This child handoff operationalizes `B072-R66`; it does not reopen or duplicate B-072.

## What you need — parent first

### 1. Classify the input before choosing a file

| Input condition | Canonical treatment | Stop condition |
|---|---|---|
| Judge approval/clarification | Use `D-183`; record approval in the Register or clarification once in its owning record | Never treat it as customer authority or infer another action |
| Customer input restates the frozen baseline | Cite the Project PRD/Charter; create no new requirement | Never rewrite the frozen source to record receipt |
| In-baseline product requirement | `docs/Modular_PRD.md` | Change no sibling tier |
| Behaviour for an existing feature group | Relevant `docs/fn-specs/`, anchored to the `Modular_PRD` feature group | Refuse prose-only, unanchored feature input (`FB-04`) |
| Stack, implementation or stack-specific UI | `docs/specs/` or `docs/specs/ux/` | Do not put UI in `Fn_Specs` or implementation in Product requirements |
| Governance/process input | Register plus the existing process document owning the fact | Do not put development-lane policy in `Modular_PRD` |
| Input adds to or contradicts the frozen baseline | One named Register gap/change request | No derived-tier edit until the Judge decides a governing successor |
| No tier clearly owns the fact | The missing owner is itself a Register gap | Do not choose a convenient file or create another ledger |

### 2. Replace only the affected Request-row clauses

> **Canonical record:** Lane B/C feedback: the originating `handoff/` entry. **Judge input:**
> transient until classified under `D-183` as approval or clarification and recorded in the owning
> governed record. **Customer or business input:** a request until classified against the frozen
> Project PRD and Charter. If it is within that baseline, refine only the single derived tier that
> owns the fact under `D-29`; if it would add to or contradict a frozen source, record a named
> Register gap/change request and stop until the Judge decides the governing successor. Frozen
> sources are cited as evidence and are never writable intake destinations.
>
> **Boundary:** Raising a request grants nothing. `D-183` applies only to Judge
> approval/clarification; customer input carries no authorization. Remove “demand side” and “supply
> side”—they are not governed tier names.

All other six-stage-map text remains unchanged.

### 3. Keep the future write set closed

| Target | Disposition |
|---|---|
| `V1-DECISION-REGISTER.md` | Append-only bounded authorization/correction record |
| `docs/README.md` | Replace only the Customer/business-input and boundary clauses above |
| B-072 and this entry | Record `Applied` evidence; no self-promotion to `Verified` |
| Graphify | Rebuild after the final source commit is pushed |
| Project PRD and Charter | **Unaffected; never edit** |
| Phase Closure/shared core | **Unaffected** if the map anchor and promotion rule do not change |
| Handoff SOP, work orders, Workflow Spec, Build Spec, Inventory, `Modular_PRD`, `Fn_Specs`, `SPECS` | **Unaffected by this routing correction**; some may receive later classified requests |
| `R67`, `R68`, B-061/B-071, hook/check build, `AUTH-DOC`, product work, lane transition, deployment | **Excluded** |

### 4. Execution sequence — only after bounded Judge authorization

1. Bind the write set and record the Judge act under `D-183`, naming this guide's immutable commit,
   action, scope and exclusions.
2. Apply the replacement in full; change no other map row.
3. Record `Applied` evidence in B-072/B-073, commit and push only authorized paths.
4. Synchronize Graphify at final source `HEAD`, run the full suite, and hand the revision to an
   independent reviewer.

### Guaranteed failure and success criteria

Reject any correction that edits a frozen source; treats customer input as authority or as a
requirement before classification; writes one fact to multiple tiers; retains the demand/supply
labels; or lets an out-of-baseline request reach a derived tier before a Register decision.

| ID | Given | When | Then |
|---|---|---|---|
| `B073-SC1` | Customer/business input arrives | It is classified | It remains non-authorizing and exactly one route above applies |
| `B073-SC2` | It is inside the frozen baseline | Its detail owner is known | Only the owning derived tier may later change; frozen sources are cited, not edited |
| `B073-SC3` | It would change the frozen baseline | Classification completes | One Register gap/change request is recorded and downstream drafting stops |
| `B073-SC4` | R66 is applied | The diff is reviewed | Only the Register correction, Request-row clauses and handoff evidence changed |
| `B073-SC5` | The correction is pushed | Final review runs | Local/upstream/Graphify heads match, checks pass, and the verifier did not author it |

## What you did instead

Lane B drafted this guide and stopped. It did not apply `R66`, alter frozen or derived
specifications, resolve `R67`/`R68`, synchronize Graphify, or authorize product work.

## Approve / reject

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | `R66` problem definition | Request, frozen authority and derived refinement are separated | Preserve |
| **Approve-with-conditions** | B-073 guide | Replacement, write set and tests are ready | Judge authorization naming this commit |
| **Reject** | Project PRD as writable intake | It is frozen governing evidence | Register gap for baseline change |
| **Reject** | Demand/supply tier vocabulary | It is not the `D-29` hierarchy | Use Project PRD / Product `Modular_PRD` / `Fn_Specs` / `SPECS` |
| **Defer** | `R67`, `R68`, product and tooling work | Outside this block | Separate packets |
