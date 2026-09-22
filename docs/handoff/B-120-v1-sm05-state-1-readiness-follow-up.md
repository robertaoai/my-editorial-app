# B-120 — V1-SM05 State-1 readiness follow-up

- **Raised:** 2026-09-22 by Lane B
- **Kind:** blocked-on-decision
- **Phase:** 1
- **Blocks:** final V1-SM05 Issue creation, feature-branch creation, State-1 draft PR, Judge selection and State-2 construction
- **Status:** Open
- **Lane A:** Acknowledged 2026-09-22. Content verified against `D-252`/`D-253` and the current
  `V1-BUILD-SPEC.md`/`V1-ARTIFACT-INVENTORY.md`/`V1-SM05.md` state — accurate. Parent 2's
  feature-branch row is correctly closed by `D-253`; Parents 1, 2 (remaining four rows), 3, 4 and 5
  stay open, queued in the order stated. Not yet answered — each remaining parent needs an actor
  Lane A is not: Chief Editor attestation (Parent 1), Judge boundary decisions (Parent 2), Lane B
  feasibility evidence (Parent 3 `R2`–`R4`), and explicit push/Issue/branch authorization (Parent 4)
  precede any Lane A action there.
- **Verified-By:** — not yet dispositioned; raised by Lane B
- **Evidence:** `D-252`, `D-253`; `docs/handoff/B-119-agentic-documentation-architecture-safe-mmf-reconciliation.md`; `docs/v1/V1-BUILD-SPEC.md`; `docs/v1/V1-ARTIFACT-INVENTORY.md`; `docs/v1/work-packets/V1/V1-SM05.md`; Lane C independent review dated 2026-09-22
- **Verified-At-Commit:** a6368a36225504eadd24f391337de68e7b76f11f

## What happened

`D-253` completed the canonical governance boundary for the V1-SM05 State-1 lifecycle:

- Option A is approved: State 1 contains documentation/readiness only; DoD gates acceptance and merge.
- The approved feature branch is `features/feature-V1-SM05`.
- Its base and PR target are `docs/journal-2026-08-16`.
- Native Git branching from the verified pushed remote tip is required; ZIP-based initialization is rejected.
- The GitHub Issue precedes the feature branch and State-1 PR.
- State 1 is bounded by content, not by an arbitrary one-commit limit.

The setup namespace is **`SETUP-SPIKE-000`**, not `STEP-SPIKE-000`. It is separate from V1.
`supabase/migrations/0001_init.sql` remains frozen setup history. The existing
`0002_s1_editorial_schema.sql` candidate is allocated to V1-SM05 for local replay and later governed
hosted migration; setup work earns no V1 construction or DoD credit.

This completed governance boundary does **not** make V1-SM05 ready for selection or construction.
The remaining work is ordered parent-first below.

## What Lane A needs to answer

### Parent 1 — Chief Editor operator attestation

Preserve the committed, hash-anchored A01 receipt bytes. Record a supplemental attestation in B-119
for the five facts represented by its three `OPERATOR TO CONFIRM` field groups:

1. Local assessed repository commit.
2. Local execution UTC window/precision.
3. Supabase non-secret project identifier (`project ref`).
4. Supabase execution UTC timestamp.
5. Supabase assessed repository commit.

If a value cannot be recovered, record `UNRECOVERABLE — <reason>`; do not infer it and do not rewrite
either accepted receipt.

### Parent 2 — boundary docket

The docket has five rows, but one is already closed:

| Decision | State | Required Lane A / Judge action |
|---|---|---|
| Feature-branch name | **Closed by `D-253`** | Use `features/feature-V1-SM05`; do not reopen |
| Push authorization | **Open** | Authorize or reject pushing the verified `docs/journal-2026-08-16` range |
| Integration mode | **Open** | Select squash, rebase, or merge-commit integration |
| Dual-sign-off mandate | **Open** | Decide whether technical plus business sign-off is mandatory or advisory |
| Raw-capture disposition | **Open** | Retain outside Git, archive through a reviewed evidence artifact, or delete |

The raw captures are not a branch prerequisite. No deletion occurs without the Chief Editor's choice.

### Parent 3 — complete the V1-SM05 DoR

| DoR item | Owner | Required evidence |
|---|---|---|
| `DOR-R2` | Lane B raises; Lane A dispositions defects | Feasibility review of the `OP-PITCH` atomic, failure, replay and idempotency contract |
| `DOR-R3` | Lane B raises; Lane A dispositions defects | Feasibility review of the `EW` refusal/retry contract |
| `DOR-R4` | Lane B raises; Lane A dispositions defects | Feasibility review of the Route-1 operation contracts |
| `DOR-R5` | Lane A, with Chief Editor walkthrough and Lane B/C feedback | One canonical normal/revision wireflow and matching data flow |
| `DOR-R6` | Lane A review; Judge disposition | Encyclopedia Entries 01, 05 and 06 compared with hosted text, or explicitly deferred |

DoR means the work is sufficiently valuable, bounded, testable, feasible and sized **before** it is
selected. DoD is the quality contract used during and after construction; it is defined before work
starts but satisfied only when implementation, review and verification are complete.

### Parent 4 — external GitHub lifecycle, after Parents 1–3

1. Verify the exact outgoing base-to-tip range.
2. Push `docs/journal-2026-08-16` only under explicit authority.
3. Create the GitHub Issue from completed `R2`–`R6` evidence (an accepted R6 deferral counts as a disposition).
4. Propagate the Issue number and URL to the Register, Artifact Inventory and V1-SM05 packet.
5. Create `features/feature-V1-SM05` from the verified `origin/docs/journal-2026-08-16` tip.
6. Add documentation-only State-1 readiness commits.
7. Rebuild/re-merge Graphify and run the complete consistency suite.
8. Push the feature branch and open the State-1 draft PR targeting `docs/journal-2026-08-16`.

### Parent 5 — selection and construction, after State 1

1. Judge selects V1-SM05.
2. Lane A records selection, issues the bounded work order and updates Phase Closure.
3. Lane B becomes `Active` and begins State-2 local construction.
4. The packet-specific DoD must pass before PR acceptance and merge.

## Cross-artifact disposition

`Modular_PRD.md`, storyboard/story panels, UML/data flow, functional specifications, traceability and
the Encyclopedia are unaffected by `D-253`'s Git lifecycle facts. They remain inputs to R5/R6 but do
not gain branch names, Issue identities or PR mechanics. Any R5/R6 content correction is propagated
later under the decision that resolves that DoR item, not under this handoff entry.

## What Lane B did instead

Lane B stopped before implementation and before any remote Git/GitHub action. Lane B may perform the
bounded R2–R4 feasibility reviews and raise separate findings. It does not edit canonical Lane A
documents, create the Issue or branch, open the PR, migrate Supabase, or begin State-2 construction.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | `D-253` governance, branch/base and Issue-first boundary | Complete in Phase 1 |
| **Approve** | `SETUP-SPIKE-000` to V1-SM05 planning bridge | Complete; no V1 construction credit |
| **Approve-with-conditions** | Final GitHub Issue and State-1 PR | After operator attestation, four open boundary decisions and `R2`–`R6` disposition |
| **Defer** | Push, Issue, branch and PR operations | Explicit authority after DoR |
| **Defer** | V1-SM05 construction | After selection, work order and Lane B activation |
| **Reject** | ZIP-based branch initialization; rewriting anchored receipts; deleting raw captures without authority | Preserve native Git history and evidence boundaries |

