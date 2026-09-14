# B-098 — sprint completion claims conflict with the Judge's setup-spike baseline

- **Raised:** 2026-09-14 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** closing the setup spike; treating S0/S1 as completed or frozen; authorizing any V1 sprint; using current sprint labels to drive construction or verification
- **Status:** Open
- **Lane A:** — awaiting Lane A acknowledgement
- **Verified-By:** — not yet dispositioned; raised by Lane B
- **Verified-At-Commit:** 42ae89fbb9f75c2c57e729d68f95f38bf8c32623
- **Evidence:** Chief Editor/Judge clarification in conversation, 2026-09-14; `V1-BUILD-SPEC.md` §§1–4; `V1-ARTIFACT-INVENTORY.md` §1; `V1-PHASE-CLOSURE.md` §§1.1 and 5; `V1-DECISION-REGISTER.md` decisions D-91/D-112/D-114/D-118/D-121/D-161/D-171/D-195/D-203; `LANE-B-WORK-ORDER.md`; `Modular_PRD.md` §§0.6.1, 2–5, 8 and 10; storyboard, traceability map and Encyclopedia ledger; Git history and Graphify query, with the stale-graph qualification below.

## Normalized request

Review Lane A's prior planning analysis against the Judge's clarified baseline: the present effort is
a project-setup spike to recover and align intent; no sprint, including S0 or S1, is accepted as
built. Preserve real scaffold and test evidence without treating it as sprint completion. Prepare a
parent-first decision packet for a four-sprint V1 direction in which S2 delivers the reusable working
software and S3/S4 address monetization and access restriction/login. Identify every affected
Product, tracking, storyboard/UML/data-flow, Encyclopedia and traceability artifact; define the
evidence Lane A must produce before Lane B receives any implementation work. Do not build or apply
the governed-source changes.

## What happened

The current repository records a materially different lifecycle:

- `V1-BUILD-SPEC.md` defines V1 as S0–S4, says S0 and S1 are completed and frozen, and holds S2;
- `V1-ARTIFACT-INVENTORY.md` marks the S0 config files and S1 migration as existing/completed;
- `V1-PHASE-CLOSURE.md` records completed Lane B runs and accepts a narrow local S1 claim;
- `LANE-B-WORK-ORDER.md` says S0 is history and the next code unit is S2;
- `Modular_PRD.md` maps core persistence and gates into S1, judgment controls into S2, the board into
  S3, publication into S4 and authentication into S6; and
- the frozen Project PRD explicitly excludes monetization and multi-team accounts from v1.

The Judge now clarifies a different current baseline:

1. the work so far is a setup spike for intent cleanup and scaffold alignment;
2. no sprint is accepted as built, including S0 and S1;
3. all implementation sprints remain on hold until the spike completes;
4. V1 is to be realigned as four sprints S1–S4;
5. S2 is the reusable working-software outcome; and
6. S3/S4 cover monetization and access restriction/login.

This is not a finding that the committed files or tests are imaginary. It changes what those facts
prove. A migration can exist and pass a local PostgreSQL test while the sprint that may eventually
consume or replace it remains unaccepted. Artifact completion, sprint acceptance, implementation
readiness and release readiness are separate facts.

## Highest parent — establish the current lifecycle before remapping scope

The parent decision is:

> **The current effort is a setup spike. No V1 sprint has opened or completed under the clarified
> baseline. Existing code, migration, configuration and tests are reusable scaffold evidence whose
> conformance must be assessed after the V1 sprint outcomes are accepted.**

This parent must land before any child sprint mapping. Otherwise Lane A will relabel requirements
while the live trackers still authorize readers to treat S0/S1 as completed and frozen.

### Parent-first decision table

| Order | Judge decision | Accept effect | Reject / return condition | Recommendation |
|---:|---|---|---|---|
| 1 | All sprints are on hold; current work is the setup spike | Makes intent alignment the only current outcome and prevents historical scaffold work from authorizing construction | Reject only if the Judge intends the previous S0/S1 completion decisions to remain current | **Accept — explicit Judge clarification** |
| 2 | Existing S0/S1 outputs are preserved as scaffold evidence, not erased or called accepted sprint output | Retains migrations, tests and config evidence for reuse/conformance review | Reject deleting history, reverting evidence or pretending no technical work occurred | **Accept** |
| 3 | V1's operative implementation sequence becomes S1–S4, with no S0 sprint | Moves reconciliation/setup into the spike and removes it from the product sprint sequence | Return if S0 is intended to remain a formal V1 sprint despite being on hold | **Accept — subject to exact S1 definition** |
| 4 | S2 is the complete working editorial app and reusable engine | Gives the implementation phase one bounded end-to-end outcome, including normal and revision paths | Return if S2 means only a component or readiness milestone | **Accept — already clarified as both working app and reusable engine** |
| 5 | S3 is monetization; S4 is access restriction/login | Establishes the desired later outcomes | Cannot enter V1 operative scope until the frozen Project-level exclusions and M-POC commercial authority are reconciled | **Accept as intended direction; condition its V1 adoption on the demand-tier change** |
| 6 | S1's outcome and S4's account extent | Defines what S1 must finish before S2 and whether S4 is single-account lockdown or multi-account access | No estimates, DoD or implementation packet until both boundaries are explicit | **Judge choice still required** |

### The two remaining child choices

The Judge's clarification establishes the sequence but does not completely define these two scopes.
Lane A should present them separately:

| Choice | Accept option | Reject / change condition | Recommended starting point |
|---|---|---|---|
| **S1 outcome** | A bounded foundation slice: manual intake, canonical data contract, legal transition enforcement and one persisted Route-1 article path through the pre-judgment stages | Reject any S1 definition that claims the complete usable app already exists or that consists only of disconnected schema/config artifacts | Foundation vertical slice whose output S2 can extend, not another setup phase |
| **S4 access extent** | **A:** single Chief Editor authentication and data lockdown; **B:** multi-account/role access | Reject using “login,” “lockdown,” “access restriction” and “multi-account” as synonyms; they have different tenancy, ownership and recovery requirements | Decide A/B explicitly. Earlier discussion points toward multi-account access; the frozen PRD points toward a single account |

Quarterly goals, operator capacity and effort estimates remain unconfirmed. They are planning inputs
after the scope decisions, not evidence for selecting them.

## A frozen-demand conflict must be surfaced, not overwritten

The initial committed application scaffold contained Stripe files, but the first committed Project
PRD says v1 excludes monetization and multi-team accounts. The scaffold was generated from the app
name and is not scope authority (`D5`). Git therefore does **not** prove that monetization and
multi-account access were approved V1 requirements at the first commit.

The Judge's 2026-09-14 clarification is valid new direction with a known locus. It must not be
backdated as recovered Git history. Before S3/S4 become operative V1 scope, Lane A must choose and
record the demand-tier path:

| Path | Meaning | Consequence |
|---|---|---|
| **A — Project-level change/successor record** | The customer now changes the frozen v1 exclusions | Record the newer demand authority without editing the frozen PRD/Charter; then propagate the resulting V1 scope |
| **B — retain frozen v1 scope** | Monetization and expanded accounts remain later work | Keep S3/S4 outside V1 and choose different V1 outcomes |

Because the Judge explicitly placed monetization and access in V1, **Path A is the conforming
recommendation**. It still needs the exact Project-level record and commercial/account boundaries;
an entry in the Product tracker alone cannot overrule its frozen demand source.

## Status reconciliation — preserve evidence, withdraw completion inferences

| Current statement | Correct current treatment after the parent decision | Evidence retained |
|---|---|---|
| S0 completed and frozen | Superseded as a current lifecycle claim; reconciliation/config work belongs to the setup spike | `build-config.ts`, `flags.ts`, Stripe removal and config tests remain inspectable |
| S1 completed/frozen or its window closed | Superseded as sprint status; prior decisions and migration remain historical/scaffold inputs | `0002_s1_editorial_schema.sql`, contract tests and local PostgreSQL result remain evidence, not accepted DoD |
| S2 is current scope but held only by D-171 | All sprints are held by the spike parent; D-171 remains an additional S2 content hold | Existing T5/T6/route decisions remain unresolved dependencies |
| Completed Lane B runs prove sprint completion | Runs prove that bounded work occurred and was handed over | Commit, test and handoff evidence remain; their sprint-completion inference is withdrawn |
| Sprint freeze follows successor opening | Generic freeze rule remains; its application changes because no clarified-baseline sprint has opened | Historical decisions stay cited; no in-place rewriting of frozen historical text |

Lane A must add a new decision that supersedes the **current status effect** of the older decisions.
It must not edit old decision text to make the historical record appear to have always meant the new
baseline.

## Proposed V1 outcome map for Judge review

| Stage | Intended outcome | Readiness boundary | Completion evidence |
|---|---|---|---|
| **Setup spike — current** | Original intent reconciled with scaffold; authoritative route/gate, manual-input, data-authority and sprint maps agreed | No application construction; all contradictions have an owner and Judge disposition | Exact governed-document patch, dependency matrix, representative Route-1 example, independent review and final graph sync |
| **S1 — foundation** | One real persisted Route-1 foundation slice with manual input and enforced legal transitions, suitable for extension | S1 outcome/DoD and reuse treatment of existing migration accepted; hosted/local environment boundary known | User can create the representative article; allowed transition persists; illegal transition is rejected; audit evidence survives revision |
| **S2 — reusable working software** | Complete editorial app and reusable engine: full Route-1 normal/revision journeys, every required gate, board visibility and LinkedIn ManualReady | B-071/B-084/B-096 operation, intake, metadata/report and human-control contracts accepted | Chief Editor completes both journeys through the UI; every action persists; no dead controls; identity, refusal, audit and recovery tests pass |
| **S3 — monetization** | Bounded commercial capability attached to an authorized module and customer journey | New demand authority; commercial model, customer opportunity, ownership, payment/obligation failure handling and operating capacity accepted | One priced/manual or software-assisted commercial journey reconciles payment, obligation, cancellation/refund and delivery evidence |
| **S4 — access restriction/login** | Authenticated access with the Judge-selected single- or multi-account boundary and recovery controls | Account extent decided; tenancy, role assignment, credential recovery, data ownership and migration plan accepted | Unauthorized access refused; authorized roles see only permitted data/actions; owner succession and recovery preserve audit history |

This is a planning baseline. It supplies no quarterly commitment and authorizes no sprint.

## Cross-artifact write set for Lane A

| Artifact | Required reconciliation | Completion evidence |
|---|---|---|
| `V1-DECISION-REGISTER.md` | Record the Judge clarification with its 2026-09-14 locus; supersede current S0/S1 completion/freeze effects; choose the Project-level path for S3/S4; retain earlier decisions as history | One new decision owns status and scope; no old decision silently rewritten |
| `V1-BUILD-SPEC.md` | Replace the current-use S0–S4 map and freeze paragraph with the spike + S1–S4 outcome map; keep dated historical passages visibly historical | Sequence, holds, outcomes, dependencies and DoD all use the same four sprint identities |
| `V1-ARTIFACT-INVENTORY.md` | Reclassify existing S0/S1 rows as reusable spike/scaffold evidence pending sprint conformance; identify created/retired artifacts only after the new map is accepted | Existence and sprint acceptance appear in separate columns/facts |
| `V1-PHASE-CLOSURE.md` | Preserve completed runs; remove their current implication that S0/S1 sprints completed; reflect the spike hold without inventing a phase close | Live lane state remains authoritative; run evidence and sprint status no longer conflict |
| `LANE-B-WORK-ORDER.md` | Replace “S0 completed / S1 completed / next S2” with “no sprint authorized; await spike closure and fresh S1 work order” | Lane B has no executable unit until a bounded S1 authorization names scope and DoD |
| `Modular_PRD.md` | Update product-level tracker and sprint tags only after the demand-tier decision; move complete working-app acceptance into S2 and separate S3 commercial from S4 access outcomes | Every FR/US/AC has one accepted sprint and traces to an authorized demand source |
| Functional/technical specs | Preserve behaviour; retag sprint ownership only where the accepted outcome map changes it; assess existing migration against the new logical contract | No stack detail leaks into Fn_Spec; existing code is reused only after conformance evidence |
| Storyboard/story panels | Mark A/B as historical commercial paths; add a current spike pointer and target S1/S2 normal/revision path without claiming it is built | Panels distinguish planned, scaffold-evidenced and operational behavior |
| UML/data flow | Repair the existing embedded views rather than creating duplicates; show spike → S1 foundation → S2 full route and separate S3 commercial/S4 identity boundaries | Every state write, audit event, human control, payment/obligation event and auth decision has one authority and failure path |
| `ENCYCLOPEDIA-SYNC.md` | Impact-assess every entry that cites the old sprint map; mark hosted content stale until actually reviewed | Local dependency SHA is current; hosted parity is never inferred |
| Requirements traceability | Replace obsolete sprint tags only after the new demand and Product decisions; preserve immutable source citations | Demand → Product → Fn_Spec → sprint → acceptance/test remains traversable without a scope jump |

This decision changes sprint sequence and artifact status, so `D-54` requires the three V1 tracking
files in one application pass and `Modular_PRD.md` §8 because the sprint mapping changes. Frozen
`docs/PRD.md` and the Charter are not edited. A new demand-level record carries the changed customer
direction if Path A is selected.

## Construction and verification consequences

| Failure that would otherwise occur | Required success criterion |
|---|---|
| Existing migration/config files automatically reopen S1/S2 as “mostly done” | Every reused artifact has an explicit conformance result against the newly accepted sprint requirement and DoD |
| S1 becomes another documentation/setup phase | S1 ends with one real persisted vertical slice and a user-observable transition/refusal result |
| S2 is called working software while only database or seeded read screens exist | Chief Editor performs normal and revision journeys through real UI; all controls persist and refresh correctly |
| Monetization is added because Stripe scaffolding once existed | S3 traces to the new demand authority and an accepted commercial journey, not scaffold provenance |
| Login is treated as multi-account authorization | S4 separately tests authentication, tenancy, role authority, access denial, recovery and ownership succession according to the selected extent |
| Historical evidence is rewritten to match the new baseline | Old decisions and runs remain; one later decision states exactly which current effects it supersedes |
| Graphify reports `stale: false` while hashes differ | After the final tracked edit, `lastAnalyzedHead == HEAD`, coverage includes B-094–B-098, curated fragments verify and the full local suite runs |

## Lane A follow-up — parent before children

1. Acknowledge B-096, B-097 and B-098; acknowledgement is receipt, not acceptance.
2. Record the setup-spike/no-sprint-complete parent with its 2026-09-14 locus.
3. Decide the demand-tier path for V1 S3/S4. Do not use Stripe scaffold as authority.
4. Present the exact S1 outcome and S4 account-extent choices to the Judge.
5. Draft one reviewable D-54 packet covering the V1 tracking trio and Product sprint mapping; preserve
   historical evidence and mark superseded current effects.
6. Reconcile the work order, story panels, embedded UML/data flow, Encyclopedia ledger and
   traceability against that packet. Create no duplicate diagram or roadmap.
7. Walk the representative Route-1 normal/revision examples as acceptance input, not proof of a
   built sprint.
8. Have Lane B independently review the applied documentation and the proposed reuse classification
   of existing code/migration evidence.
9. Only then prepare a fresh bounded S1 authorization with owners, dependencies, effort range and
   completion evidence. S2–S4 remain held.
10. Synchronize Graphify last. At review, `.graphify/branch.json` still names analyzed head `f63d6eb`
    while Git HEAD was `42ae89f`; Graphify query results are orientation, not current semantic proof.

## What you did instead

Recorded the conflict as a new sprint-baseline defect, preserved the technical evidence, supplied the
parent-first choices, proposed outcome map, cross-artifact write set and construction/verification
criteria. Did not change any sprint status, governed source, frozen requirement, work order, code,
schema, login, payment path, lane state or Graphify runtime.

| Verdict | Item | Follow-up phase |
|---|---|---|
| Approve | Setup spike as the only current iteration; all V1 sprints held and unaccepted | Phase 1 — new Register act with the 2026-09-14 Judge locus |
| Approve | Existing S0/S1 outputs retained as scaffold evidence, not accepted sprint completion | Phase 1 — inventory/status reconciliation and later conformance review |
| Approve | Four-sprint V1 planning direction, with S2 as reusable working software | Phase 1 — exact S1/S4 choices and D-54 packet |
| Approve-with-conditions | S3 monetization and S4 access restriction/login inside V1 | Demand-tier successor/change record; commercial and account boundaries accepted first |
| Reject | Current claims that S0/S1 are completed/frozen under the clarified baseline | Supersede their current status effects without rewriting history |
| Reject | Treating Stripe scaffold as V1 scope evidence or treating login as multi-account authorization | Trace to new demand authority and decide account extent explicitly |
| Defer | Sprint estimates, Lane B implementation, release actions and Graphify synchronization | Spike closure, independent review, fresh bounded S1 authorization, final graph sync |
