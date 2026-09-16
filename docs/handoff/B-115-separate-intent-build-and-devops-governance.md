# B-115 — separate Intent governance, Build governance and DevOps assistance

- **Raised:** 2026-09-16 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** Lane A applying B-114 without assigning MMF and xDD responsibilities to the wrong layer; defining the first executable Lane B/C unit
- **Status:** Open
- **Lane A:** **Acknowledged, receipt only, 2026-09-16.** Not yet substantively answered — the
  B-097/B-112/B-113 terminal-return-protocol thread was Active this session and is now complete.
  This entry's Intent/Build/DevOps separation, and the correction it makes to `B-114`, are read but
  not yet applied to `docs/README.md`, the Register, or any lane instruction document. No
  construction, register act, or lane-instruction change made from this acknowledgement.
- **Verified-By:** — not independently verified; dispositioned by Lane A
- **Evidence:** Chief Editor/Judge clarification of 2026-09-16; B-114; B-103 P1/P2 and D-229/D-230; `docs/README.md` request-to-execution map; `docs/v1/V1-BUILD-SPEC.md` lane surfaces; `docs/LANE-B-WORK-ORDER.md`; `.github/WORKFLOWS-SPEC.md`; `docs/specs/SPECS-VERIFICATION-APPARATUS.md`; `docs/Modular_PRD.md`; storyboard/story panels, embedded data flow and requirements traceability map
- **Verified-At-Commit:** 2cb039fd787183a29ade0b34d500352ff0ec9f9e

## Judge clarification received

The Chief Editor/Judge separates three governance layers:

1. **Intent governance** — `Governance and docs` / Intent / MMF. Lane A owns the canonical intent
   artifacts and assists the user in translating business intent. Lane B and Lane C own refinement
   feedback raised through their handoff/backlog channel.
2. **Build governance** — Lane B owns the application-construction method, including selecting and
   applying TDD, BDD, ATDD and other fit-for-purpose xDD methods after intent is clear.
3. **DevOps/DevSecOps** — Lane C assists Lane B through delivery, workflow, monitoring and security
   automation, following the existing B↔C evidence contract.

B-114 mixed the first two layers by defining the MMF as the construction acceptance boundary and
placing the test method around it. The correction is not to discard MMF or test-first construction;
it is to put each fact in its owning layer:

```text
The user / Judge
        │ business intent and acceptance
        ▼
Lane A — Intent governance
Governance & docs → Intent → MMF definition and acceptance boundary
        │ accepted, bounded MMF packet
        ▼
Lane B / Lane C — handoff and backlog refinement
dependencies, questions, child candidates, evidence needs, risks
        │ construction-ready child backlog
        ▼
Lane B — Build governance
xDD selection → dependency order → tests/examples → app/schema/UI implementation
        │ allowlisted build and operational evidence
        ▼
Lane C — DevOps / DevSecOps assistance
CI/CD, workflow, monitoring, security and failure-recovery validation
        │ deficiencies and run evidence return through D-229/D-230
        └──────────────────────────────────────────────────────────► Lane B
```

## Ownership versus filesystem stewardship

“Lane B owns Build governance” is authority over the application construction method and its
execution evidence. It does not transfer Lane A's canonical files or build configuration surface.
The existing lane map still controls who edits what:

| Concern | Meaning owner | File/applicator | Boundary |
|---|---|---|---|
| Business intent and MMF | User/Judge, assisted and governed by Lane A | Lane A writes canonical Governance/docs and Register records | Lane A does not invent customer value or implement application behavior |
| Lane B/C backlog refinement | The lane that raises the item | Lane B/C writes its handoff/control record; Lane A answers and promotes accepted intent | A handoff is evidence/refinement, not canonical Product authority |
| Application Build governance | Lane B | Lane B edits `app/`, `lib/`, `components/`, `supabase/`, `__tests__/`; Lane A provisions dependencies/config and records canonical method decisions | Lane B selects xDD for the authorized unit but does not edit Lane A docs/config surfaces |
| DevOps/DevSecOps assistance | Lane C | Lane C edits `.github/workflows/` and produces delivery/security/monitoring evidence | Lane C assesses published contracts; it does not define editorial state or Product behavior |
| Cross-lane contract | Judge-approved D-229/D-230 | Lane A maintains canonical contract; B and C consume and report through handoffs | No secrets, raw content or inferred interface expansion |

## Parent-first decision table

| Order | Decision | Accept path | Reject / stop condition | Completion evidence |
|---:|---|---|---|---|
| 1 | **Parent — is the Intent/MMF packet accepted?** | Lane A records the user's outcome, scope, acceptance examples, exclusions and change conditions | Build method or technical convenience defines the MMF | Judge act and canonical Intent/MMF artifact |
| 2 | **Child — is refinement complete?** | Lane B/C resolve dependencies, ownership, access, evidence and failure questions through their backlog/handoff records | Lane A assumes silence means build-ready, or handoff prose becomes Product authority | Construction-readiness table with no unresolved blocking dependency |
| 3 | **Child — does Lane B have a bounded build unit?** | Lane B maps MMF acceptance to dependency-ordered children and selects TDD/BDD/ATDD/xDD per child | MMF is treated as a test case, or one xDD method is forced on every artifact | Lane B build-governance packet and test strategy |
| 4 | **Child — does Lane C have a bounded assistance unit?** | After Lane B exposes accepted evidence, Lane C validates CI/CD, security, monitoring and failure recovery | Lane C starts from changing local state, invents telemetry, or builds editorial transitions | Exact Lane B artifact identity and Lane C positive/negative workflow proof |
| 5 | **Child — can evidence close the loop?** | C-series deficiency identifies the missing signal; Lane B implements it in a later authorized child; Lane C re-tests | Lane C works around a missing signal or Lane B broadens exposure without authorization | D-229/D-230 evidence packet and deficiency disposition |
| 6 | **Boundary — may the unit integrate/push?** | Build governance says children integrate locally; Judge/human performs the final authorized push after accepted evidence | Intent approval, a green child test or workflow success is treated as release authority | MMF acceptance, integration evidence, human push record and separate release evidence |

## Normalized lifecycle and language

| Layer | Input | Output | Success criterion | Failure owner |
|---|---|---|---|---|
| **Intent governance** | User/Judge business direction | Canonical Intent/MMF packet | Outcome, boundary, acceptance and change conditions are explicit | Lane A returns ambiguity to the user; it does not guess |
| **Backlog refinement** | Accepted MMF plus lane questions | Prioritized child/dependency backlog and handoff evidence | Each blocker, dependency and owner is named without duplication | Raising Lane B/C item stays open until Lane A answers/promotes it |
| **Build governance** | Construction-ready child | xDD method, test/example, implementation and atomic evidence | Child and relevant regressions pass; MMF integration proves the accepted outcome | Lane B stops or raises dependency/spec defect |
| **DevOps/DevSecOps assistance** | Immutable Lane B artifact/evidence | Workflow, security, monitoring and recovery proof | Positive path passes and deliberate failure turns red for the intended reason | Lane C raises one bounded deficiency to Lane B |
| **Release/deployment** | Accepted B/C evidence and human act | Remote/deployed state | Separate deployment and recovery evidence exists | Remains held; push alone is not release readiness |

## xDD selection owned by Lane B

The Judge's clarification does not require TDD for every artifact. Lane B selects the smallest
method that proves the authorized child:

| Method | Use when | Required first evidence |
|---|---|---|
| **TDD** | A deterministic function, domain rule, API/RPC, state transition or database constraint is being added | Test fails because the behavior is absent, then passes with the implementation |
| **BDD** | A user/role journey or collaboration behavior must be expressed in business language | Given/When/Then scenario tied to an existing acceptance example fails before the behavior exists |
| **ATDD** | The MMF acceptance boundary needs an executable end-to-end contract | Acceptance test derived from the Judge-approved Intent/MMF packet fails before integration |
| **Contract testing** | Lane B produces an interface Lane C or another component consumes | Consumer/producer contract fails on the missing or malformed field |
| **Security testing** | Authorization, secret exposure, RLS, dependency or abuse behavior is in scope | Negative attempt demonstrates the current missing/refused control |
| **Migration/database testing** | Schema, trigger, immutability or transaction semantics change | Disposable-database case fails before the migration/function correction |
| **Characterization/verification** | Behavior already exists and the task is to prove it rather than add it | Existing behavior is observed honestly; do not manufacture red evidence |

Lane B records why the method fits the child. Lane A may publish the canonical rule and provision
tools; it does not select the method for a specific Lane B implementation child. Lane C may request
missing signals or security evidence; it does not choose Lane B's application design.

## Step-by-step Lane A follow-up

1. **Acknowledge B-115 and hold B-114 propagation.** B-114's tests/atomic-commit content remains
   useful, but its MMF/build ownership language is superseded by this clarification.
2. **Record the Judge's separation.** Assign a Register decision defining Intent governance,
   backlog refinement, Build governance and DevOps/DevSecOps assistance. State the difference
   between meaning ownership and filesystem stewardship.
3. **Correct B-114 by reference, not duplication.** Its normalized meanings become:
   - MMF belongs to Intent governance and is the accepted input to construction;
   - child unit belongs to Lane B Build governance;
   - xDD selection is Lane B's per-child decision;
   - Lane C supplies DevOps/DevSecOps assistance after Lane B evidence exists; and
   - human final push remains a boundary after accepted build/integration evidence.
4. **Propagate artifact creation/sequence through all three V1 tracking files in one pass** if the
   decision creates the Intent/MMF packet, Build-governance packet or DevOps evidence packet:
   Register, Build Spec and Artifact Inventory. Update `Modular_PRD` §8 only if a sprint closes or a
   tier opens.
5. **Update the request-to-execution map.** `docs/README.md` should show Intent/MMF before backlog
   refinement, refinement before build authorization, Lane B construction before Lane C assistance,
   and evidence/lifecycle last.
6. **Keep one canonical destination for each layer:**
   - Governance/docs and Register: Intent/MMF;
   - `LANE-B-WORK-ORDER.md`: Build-governance execution and evidence;
   - `.github/WORKFLOWS-SPEC.md`: Lane C assistance and deficiencies;
   - `SPECS-VERIFICATION-APPARATUS.md`: reusable cross-lane positive/negative verification;
   - `docs/handoff/`: B/C refinement transactions, not a second canonical plan.
7. **Resolve push language by layer.** Lane B/C construction uses local atomic commits and the
   human-final-push boundary selected in B-114; Lane A's canonical intent/governance commits and
   the D-184 handoff exception remain distinct unless the Judge changes them explicitly.
8. **Add readiness checks that can fail meaningfully:** missing Intent/MMF outcome; build child with
   no MMF anchor; Lane C workflow with no accepted Lane B artifact; Lane C-invented signal outside
   D-229; Lane B unit with no xDD rationale/evidence; push record with no accepted integration tip.
9. **Synchronize Graphify after the final governed-source/control pass**, preserving curated
   fragments, then run the portable and consistency checks.
10. **Obtain independent consumer reads.** Lane B confirms construction usability and ownership;
    Lane C confirms assistance scope, input allowlist and return path. Neither read authorizes a
    build. A fresh Judge act must name the first executable MMF/build child and Active lane.

## Critical artifacts

| Artifact | Meaning owner | Consumer | Why it is critical |
|---|---|---|---|
| Intent/MMF packet | User/Judge with Lane A assistance | Lane B/C refinement | Carries business outcome and acceptance without letting implementation define value |
| Refined child/dependency backlog | Raising Lane B/C lane | Lane A promotion and executing lane | Names real blockers, access, evidence and sequencing before build |
| Lane B Build-governance packet | Lane B | Lane B implementation and Lane C evidence planning | Maps accepted intent to children, xDD method, tests, commits and integration proof |
| Application/schema/UI/test artifacts | Lane B | User and Lane C | Produce the working app behavior and stable machine-readable evidence |
| B→C evidence packet | Lane B under D-229/D-230 | Lane C | Exposes only artifact identity and sanitized results required for assurance |
| CI/CD, security, monitoring and recovery proof | Lane C | Lane B and Judge | Tests delivery and operational failure paths without redefining Product behavior |
| C→B deficiency record | Lane C | Lane B, with Lane A governance promotion if required | Prevents workflow workarounds and converts missing signals into bounded app work |
| Human push/release evidence | Human/Judge and later Lane C deployment gates | Project lifecycle | Separates transport, deployment and release readiness |

## Cross-artifact review

| Artifact | Impact |
|---|---|
| `docs/Modular_PRD.md` | Product behavior remains unchanged. It supplies feature-group anchors and acceptance outcomes to Intent/MMF governance; it does not own xDD or DevOps workflow mechanics. §8 changes only for sprint/tier lifecycle events. |
| Storyboard and story panels | Remain Intent/acceptance inputs. Lane B may derive BDD/ATDD scenarios from normal and revision paths, but build-method terminology must not be inserted into the editorial user journey. |
| UML and data flow | Remain Product/technical design inputs for Lane B. Lane C consumes published signals only; it cannot add an editorial state or data exposure by workflow inference. |
| Requirements traceability | Must preserve the chain: user intent → Product feature group/acceptance → MMF → Lane B build child/test → Lane C assurance evidence. The method is Project Scope and creates no Customer Request. |
| Encyclopedia | No content change. It may receive a link only if the external artifact later documents the governance model; Entry 05's D-168 staleness remains separate. |
| B-103 | Remains the B↔C interface owner. Its P1 wording should be read as Lane B application/Build governance, Lane C delivery-assurance assistance and Lane A Intent/interface governance. |
| B-114 | Remains the testing-method source, corrected by B-115 on ownership and layer order. Do not duplicate its test/commit details here in governed sources. |
| Graphify | Current graph remains stale from the earlier fixture-code change. Rebuild after Lane A applies the combined B-113/B-114/B-115 governed pass; this handoff-only entry adds no separate rebuild. |

## Guaranteed failures and success criteria

| Guaranteed failure if conflated | Success criterion |
|---|---|
| Lane A selects TDD details while translating user intent | Intent/MMF packet contains outcomes and acceptance; Lane B build packet contains xDD choice |
| Lane B edits canonical Intent governance because it owns Build governance | Lane B raises/refines through handoff; Lane A applies accepted intent to its files |
| Lane C defines application behavior because it owns DevOps workflows | Lane C consumes a named Lane B contract and raises deficiencies for missing signals |
| MMF becomes a technical child or test case | One Intent/MMF contains multiple Lane B construction children and one business outcome |
| Handoff becomes a second canonical plan | Handoff records the transaction; canonical facts are promoted once to their owning tier |
| Green CI is treated as Product acceptance or release readiness | MMF acceptance, build integration, workflow assurance, deployment and release remain separate evidence gates |
| Monitoring needs raw content or secrets | D-229 allowlist stays binding; missing evidence returns as a C-series deficiency |

## What you did instead

Separated Intent authority, backlog refinement, Build governance and DevOps/DevSecOps assistance;
preserved the existing lane surface map and B↔C evidence contract; and drafted Lane A's exact
propagation order. Did not modify canonical governance, start construction, select an xDD method for
an unnamed child, alter Product artifacts, expose data, build a workflow or deploy.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Intent/MMF governance owned by Lane A with user/Judge authority | Phase 1 — canonical Governance/docs and Register propagation |
| Approve | Lane B/C ownership of their handoff/backlog refinement | Existing D-90 transaction channel; Lane A answers/promotes accepted facts |
| Approve | Lane B ownership of application Build governance and per-child xDD selection | Phase 2 — after a fresh authorized MMF/build child exists |
| Approve | Lane C DevOps/DevSecOps assistance to Lane B | Phase 3 — after accepted Lane B artifact/evidence handoff |
| Reject | Treating meaning ownership as permission to edit another lane's file surface | Existing D-75/D-227 surface map remains binding |
| Reject | Lane C defining Product/editorial behavior or Lane A choosing implementation xDD | Keep each decision in its owning layer |
| Defer | First executable MMF/build child and Lane C unit | Fresh bounded Judge authorization and lane selection |
| Defer | Graphify synchronization | After Lane A's combined governed-source/control pass |
