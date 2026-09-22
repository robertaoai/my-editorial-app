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

  **Dated correction, 2026-09-22 (`docs/handoff/B-122`), not a rewrite of the above.** The above was
  accurate when written; the repository state has since moved. `git rev-list --left-right --count`
  confirms `docs/journal-2026-08-16` and `origin/docs/journal-2026-08-16` resolve with no commits
  unique to either side — **baseline push is complete**, observed at commit `f94695b`. Push
  authorization is removed from Parent 4's later-operations list; Issue, branch and PR creation stay
  deferred there. Parent 2's docket is **fully closed**, not four open rows: integration mode is
  **Squash and Merge**; dual sign-off is **advisory**, because Chief Editor and Judge are the same
  user under `D-158` — no fictitious second natural-person approval is required; raw-capture
  disposition is **disposed after incorporation** — their relevant content was copied into the
  committed, hash-anchored `docs/handoff/artifacts/B-119/D251-MANUAL-RUN-RECEIPT-V5-LOCAL-A01.md` and
  `…-V5-SUPABASE-A01.md` receipts before the two root UTF-16 console exports were removed; the
  receipts and their hash anchors are the accepted evidence, and the absent raw files must not be
  recreated or committed. **There are now no open boundary decisions.** Parents 1, 3 and 5 are
  otherwise unchanged; completing the baseline push does not itself authorize Issue, branch or PR
  creation.
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

**Closed in full, 2026-09-22 (`docs/handoff/B-122`) — table corrected in place, original rows kept
in the annotation below for record.**

| Decision | State | Required Lane A / Judge action |
|---|---|---|
| Feature-branch name | **Closed by `D-253`** | Use `features/feature-V1-SM05`; do not reopen |
| Push authorization | **Closed — baseline push complete**, observed at `f94695b` | None; Issue/branch/PR creation stay separately gated |
| Integration mode | **Closed — Squash and Merge** | Use for the State-1 PR and later merges |
| Dual-sign-off mandate | **Closed — advisory**, not mandatory (`D-158`: Chief Editor and Judge are the same user) | Technical/business review evidence remains useful, not required |
| Raw-capture disposition | **Closed — disposed after incorporation** into the committed `docs/handoff/artifacts/B-119/…-V5-LOCAL-A01.md`/`…-V5-SUPABASE-A01.md` receipts | Do not recreate or commit the absent root files; the hash-anchored receipts are the accepted evidence |

*(Original raising text: all five rows read "Open" except the feature-branch name, which `D-253`
closed. Superseded by the closures above, not deleted — see `docs/handoff/B-122`.)*

### Parent 3 — complete the V1-SM05 DoR

**`R2`–`R4` closed 2026-09-22 (`docs/handoff/B-123`), corrected in place, not restated.** Lane B's
feasibility review accepted the identity model and `DOR-R2`/`DOR-R3` unconditionally, and `DOR-R4`
within the recorded contract-review boundary (`OP-COPY-EDIT`/`OP-FINAL-SIGNOFF` execution stays
deferred). Lane A re-checked all three in `V1-SM05.md`, citing `B-123`. `R5` and `R6` remain open
with their named owners.

**Identity-compatibility readiness — corrected 2026-09-22 (`docs/handoff/B-124`), not a new DoR row.**
The prior framing (`V1-SM05`'s evidence box stays unchecked until Supabase resolves — `B-119`) read
as a circular gate under `D-252`: Supabase `A02` cannot run before accepted `V1-SM05` DoD and baseline
promotion, so a gate that waits on it can never open before `V1-SM05` itself completes. `D-252`
separates **pre-selection readiness** (the two accepted A01 receipts — local `no matches`, Supabase
fail-closed-unresolved) from **final `D-251` production classification** (post-release, gated on hosted
`0002` and `A02`). Pre-selection readiness is not blocked by the open final classification. It still
requires B-120 Parent 1's supplemental operator metadata (the five `OPERATOR TO CONFIRM` facts,
currently unsupplied) before `V1-SM05.md`'s compatibility row can be marked complete — that dependency
is unchanged and is not satisfied by this correction alone.

| DoR item | Owner | Required evidence |
|---|---|---|
| `DOR-R2` | Lane B raised; Lane A dispositioned | **Closed** — feasibility accepted, `docs/handoff/B-123` |
| `DOR-R3` | Lane B raised; Lane A dispositioned | **Closed** — feasibility accepted, `docs/handoff/B-123` |
| `DOR-R4` | Lane B raised; Lane A dispositioned | **Closed, bounded** — contract-review scope accepted, `docs/handoff/B-123`; `OP-COPY-EDIT`/`OP-FINAL-SIGNOFF` execution stays out of `V1-SM05` |
| `DOR-R5` | Lane A, with Chief Editor walkthrough and Lane B/C feedback | Open — one canonical normal/revision wireflow and matching data flow |
| `DOR-R6` | Lane A review; Judge disposition | Open — Encyclopedia Entries 01, 05 and 06 compared with hosted text, or explicitly deferred |

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
| **Approve** | Baseline push | Complete, observed at `f94695b` (`docs/handoff/B-122`) |
| **Defer** | Issue, branch and PR operations | Explicit authority after DoR |
| **Defer** | V1-SM05 construction | After selection, work order and Lane B activation |
| **Reject** | ZIP-based branch initialization; rewriting anchored receipts; deleting raw captures without authority | Preserve native Git history and evidence boundaries |

