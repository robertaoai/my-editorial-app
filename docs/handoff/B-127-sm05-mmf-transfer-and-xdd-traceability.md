# B-127 — SM05 MMF transfer and xDD traceability clarification

- **Raised:** 2026-09-23 by Lane B
- **Kind:** finding
- **Phase:** 1
- **Blocks:** unambiguous `V1-SM05` DoR-to-DoD traceability and a truthful pre-Issue readiness presentation; no application construction
- **Status:** Open
- **Lane A:** Acknowledged 2026-09-23. The Parent 1 transfer map is consistent with `D-244`/`D-248` and
  needs no canonical edit. **Correction (`D-255`, `docs/handoff/B-129`):** Parent 2's
  "identity-compatibility readiness" row is withdrawn — A01 is `SETUP-SPIKE-000/S2` baseline only, and
  `V1-SM05` readiness is exactly `DOR-R1`–`DOR-R6`, so pre-Issue readiness is `DOR-R5` and `DOR-R6`.
  Parent 3's single accepted-contract traceability DoD criterion is **not yet applied**: it is
  approve-with-conditions pending Judge review, and stays open here until that review.
- **Verified-By:** — not yet dispositioned; raised by Lane B
- **Evidence:** `docs/v1/V1-BUILD-SPEC.md` §§1/4; `docs/v1/work-packets/SETUP-SPIKE-000/S2.md`–`S4.md`; `docs/v1/work-packets/V1/V1-SM05.md`; `docs/v1/work-packets/V1/V1-SM06.md`; storyboard Panels A9/A10; `docs/ENCYCLOPEDIA-SYNC.md`; `D-244`, `D-245`, `D-248`, `D-254`; `docs/handoff/B-124`–`B-126`
- **Verified-At-Commit:** 967e685cbed78f9ee56a0f9f0f8861cde9f64a02

## What happened

Lane B reviewed the supplied Lane C scratch analysis against the canonical packets. The scratch
analysis is not authority: Lane C owns `.github/workflows/` only. Two useful questions nevertheless
remain for Lane A and the Judge:

1. how the setup MMFs transfer into the V1 MMFs; and
2. whether every accepted SM05 DoR contract has an explicit later verification surface.

The review confirms one narrow traceability gap and rejects two overstatements:

- `V1-SM05`'s DoD already verifies the R5 **display/provenance** boundary, but it does not explicitly
  say that the implemented normal/revision journey and matching data flow must conform to the
  authoritative R5 artifact accepted during DoR;
- R6 is documentation/ontology synchronization readiness, not a new application behavior. It needs
  a final currency/traceability check, not invented runtime construction; and
- `V1-SM06.md` already states that it cannot be selected before `V1-SM05` earns DoD. No SM06
  correction is required for that point.

## Parent 1 — canonical MMF transfer map and rank

The old setup packets remain historical/backlog tracking. Transfer does not complete them and earns
no V1 DoR or DoD credit.

| Rank | Source packet / MMF item | Destination | Current state | Effect on SM05 |
|---:|---|---|---|---|
| 1 | `SETUP-SPIKE-000/S0` — reconciliation/config spine | completed setup evidence only | Frozen/completed | No SM05 credit or gate |
| 2 | `SETUP-SPIKE-000/S1` — schema/sequence guard and candidate `0002` | candidate allocated to `V1-SM05` under `D-252` | Frozen/completed setup evidence; hosted migration deferred | Input artifact only; local SM05 construction and DoD must earn feature credit |
| 3 | `SETUP-SPIKE-000/S2` — Line/RACI and route-context display | `V1-SM05` (`MMF-V1-CORE`) | Display/provenance transferred; residual security-invoker/T6/blind-pass work remains `HELD` | In scope only as non-enforcing display/provenance |
| 4 | `SETUP-SPIKE-000/S3` — board/filter visibility | `V1-SM06` (`MMF-V1-USABLE`) | Not started; return-rate residual held outside V1 | No SM05 scope; depends on SM05 DoD |
| 5 | `SETUP-SPIKE-000/S4` — LinkedIn `ManualReady` | `V1-SM06` (`MMF-V1-USABLE`) | Not started; WordPress/retry/privileged path and live-URL confirmation remain future backlog | No SM05 scope; depends on SM05 DoD |
| 6 | `V1-SM05` — `MMF-V1-CORE` | first V1 functional increment | Not started; not selected | Current readiness target |
| 7 | `V1-SM06` — `MMF-V1-USABLE` | second V1 functional increment | Not started; not selected; structurally gated by SM05 DoD | Later packet; do not merge into SM05 |

## Parent 2 — SM05 readiness before Issue creation

`D-254` governs: accepted DoR precedes normal Issue and branch creation. The screenshot disposition
in `B-126` means there is currently no SM05 Issue to remediate; create one only after the complete
DoR is accepted. DoD must be defined and testable at that point, but remains unchecked until
construction, review and verification occur.

| SM05 readiness item | Classification | Status | Required closure |
|---|---|---|---|
| `DOR-R1` | DoR | Complete | Preserve evidence |
| `DOR-R2` | DoR | Complete | Preserve `B-123` feasibility evidence |
| `DOR-R3` | DoR | Complete | Preserve `B-123` feasibility evidence |
| bounded `DOR-R4` | DoR | Complete | Preserve contract-review-only boundary |
| `DOR-R5` | DoR | Open | Authoritative normal/revision wireflow plus matching data flow; Chief Editor walkthrough; Lane B/C feedback disposition |
| `DOR-R6` | DoR | Open | Hosted comparison for Encyclopedia Entries 01/05/06, or explicit Judge opt-in deferral |
| identity-compatibility readiness | DoR evidence | Open | Five operator facts, or recorded `UNRECOVERABLE` gap plus explicit Judge exception; then apply `B-124`'s governed text |
| SM05 DoD checklist | DoD definition | Defined, unchecked | Add the narrow traceability clarification below; satisfy only after State-2 construction |

The five operator facts, R5 and R6 are therefore **pre-Issue DoR evidence**, not DoD execution.

## Parent 3 — draft xDD traceability correction

Lane A should not invent standalone `DoD-R5`/`DoD-R6` features. Instead, add one explicit
DoR-to-DoD traceability criterion to `V1-SM05.md` after the existing display criterion:

> - [ ] **Accepted-contract traceability:** the implemented normal and revision journeys, visible
>   facts and matching data flow conform to the authoritative `DOR-R5` artifact accepted before
>   selection; every displayed fact traces to its governed record/event. The accepted `DOR-R6`
>   Encyclopedia disposition remains current at final verification, with no stale vocabulary in
>   user-facing or reviewer-facing descriptions. An accepted R6 deferral is verified as a deferral,
>   not represented as completed hosted synchronization.

This closes the real traceability ambiguity without converting governance synchronization into
application code or duplicating the R5/R6 DoR text.

## Parent 4 — construction and later packets

After Parent 2 closes: commit and verify the readiness base, create the single GitHub Issue, create
`features/feature-V1-SM05` from the verified remote base tip, open the documentation-only State-1
PR, obtain Judge selection and the bounded work order, then begin State-2 construction. Only State-2
implementation/review/verification can check the DoD boxes.

`V1-SM06` needs no correction for the alleged blockade: its packet already says both that SM05 DoD
is its first DoR dependency and that SM06 cannot be selected before that dependency is earned.

## What Lane B did instead

Lane B stopped at this handoff. No canonical Lane A source, application code, migration, Issue,
branch, PR, remote, environment or Graphify state was changed.

---

## Verdict

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | Setup-to-V1 MMF transfer map above | Phase 1 tracking; preserve `D-244`/`D-248` boundaries |
| **Approve-with-conditions** | SM05 DoD definition | Phase 1: Lane A adds the single accepted-contract traceability criterion; Judge reviews it before Issue creation |
| **Defer** | `DOR-R5`, `DOR-R6`, identity-compatibility readiness | Phase 1 pre-start readiness; named owners/evidence above |
| **Defer** | Issue, feature branch, State-1 PR, selection and construction | Their parent phases after complete accepted DoR |
| **Reject** | Claim that SM06 merely calls its dependency “unreviewed” | No correction: the packet already states the structural SM05-DoD gate |
| **Reject** | Inventing runtime `DoD-R6` behavior or treating setup transfer as V1 completion credit | Preserve governance/application and setup/V1 boundaries |

