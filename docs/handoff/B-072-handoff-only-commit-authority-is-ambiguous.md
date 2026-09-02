# B-072 — Handoff-only commit authority is ambiguous outside the Active lane

- **Raised:** 2026-09-02 by Lane B
- **Kind:** blocked-on-decision
- **Phase:** 1
- **Blocks:** durable handoff tracking by an `Eligible` or running build lane without an ad hoc
  commit exception; no product implementation is blocked
- **Status:** Open
- **Lane A:** Acknowledged 2026-09-02. Queued pending the Judge's scope confirmation (Approve-with-
  conditions row below); no rule file, check, plan, or application code has been changed yet.
- **Evidence:** `docs/handoff/README.md` §"This directory stays writable when your lane is not
  Active"; `docs/v1/V1-PHASE-CLOSURE.md` §§5/5.1; `D-103`, `D-156`; the Chief Editor's direct
  clarification of 2026-09-02

## What happened

The Chief Editor asked that lanes other than Lane A be able to commit their handoff updates so
review and execution evidence cannot be lost between lane turns. The project already has most of
that rule: `D-103` says `docs/handoff/` remains writable regardless of which lane is `Active`, and
the directory is deliberately unmapped. The same documents also say only the `Active` lane may
commit. They do not state whether “writable” includes the **durable handoff-only commit**.

The missing distinction is between two permissions:

1. the exclusive **work-product commit lock**, held only by the `Active` lane; and
2. a narrow **handoff-journal commit permission**, which records findings, responses and evidence
   but cannot change application, governance, lane state or authorization.

“Run lane” is normalized here to the existing state **`Active`**. The requested extension covers
`Active` and `Eligible` Lane B/C actors. Whether a `Blocked` lane also receives this durable-commit
permission is not inferred; `D-103` currently permits it to write a draft, but the Chief Editor's
new wording named only running and eligible lanes.

## What is guaranteed to fail if this stays implicit

- A non-active reviewer can write a correct finding but cannot durably publish it before another
  lane edits or cleans the shared worktree.
- Treating “writable” as full commit authority lets an `Eligible` lane include code or governed
  documents and silently become a second implementation lane.
- A broad staged commit can sweep the `Active` lane's files into the handoff commit because all
  lanes share one index and one Git identity.
- Every handoff-only commit moves HEAD. Without an explicit Graphify obligation, `docs-drift`
  becomes red and a later reviewer can mistake durable tracking for verified/synced evidence.
- Allowing the author of a correction to mark its own handoff `Verified` destroys the independent
  review boundary even if the commit itself is path-correct.

## Draft parent-first fix

### Parent — clarify the lock; do not add a fifth lane state

Record one decision (ID assigned when applied) that keeps exactly one `Active` work-product lane
and adds no new state. It states:

> Lane B or Lane C may create a handoff-only commit while `Active` or `Eligible`. This permission
> does not make the lane `Active`, consume an `Eligible` nomination, authorize implementation, or
> permit any path outside its `docs/handoff/B-NNN-*.md` or `C-NNN-*.md` records. Lane A retains its
> existing acknowledgement/answer permission. All other commits remain exclusive to the `Active`
> lane.

`Blocked`-lane commit permission remains a separate Chief Editor decision; do not smuggle it into
the meaning of `Eligible`.

### Child 1 — define the safe commit protocol

1. Announce one short handoff-journal window; do not edit the same handoff file concurrently.
2. Confirm the staged set is empty before staging, or contains only the committer's intended
   handoff paths. Never use a broad add operation.
3. Stage only explicit `docs/handoff/B-NNN-*.md` or `C-NNN-*.md` paths and fail if any other path
   is staged.
4. The file itself names the raising/reviewing lane and evidence commit. Git authorship is not
   treated as lane attribution.
5. The correcting/answering actor may record `Applied`; only an independent reviewer may record
   `Verified` with `Verified-By` and an existing commit.
6. Push immediately and confirm local/remote equality before another lane treats the entry as its
   input.

### Child 2 — keep Graphify and completion claims honest

A handoff-only commit is durable reporting, not a green completion claim. It may temporarily make
`docs-drift` red, but the current `Active` Lane A must synchronize Graphify before the next
approval, phase-closure claim or non-handoff commit. The synchronized graph must include the new
or amended handoff, `lastAnalyzedHead = HEAD`, and the full local consistency suite must pass.

Do not exempt `docs/handoff/` from graph coverage and do not downgrade `docs-drift` to a warning;
either would hide the exact tracking updates this decision exists to preserve.

### Child 3 — propagation and enforcement

Apply in one Lane A pass after Judge approval:

- Decision Register: record the work-lock/journal-permission distinction and its relationship to
  `D-103`/`D-156`.
- `V1-PHASE-CLOSURE.md` §5.1 and `docs/handoff/README.md`: say **commit**, not only write.
- All three shared rule files: identical narrow exception; live lane state remains only in the
  phase register.
- Lane B/C work orders: explicit-path staging, push/equality and independent-verification duties.
- Commit hook and lane-boundary checks: accept a handoff-only commit only when every staged path
  matches the permitted handoff-entry pattern; negative-test one non-handoff path, one channel
  control file (`README.md`/`TEMPLATE.md`), and a mixed-lane staged set.
- Build Spec: record the reporting/synchronization sequence because it changes lane execution.
- Artifact Inventory and Product Requirements: explicitly unaffected; no artifact or product
  behavior is created by this process decision.

## Success criteria

1. An `Eligible` Lane B review can commit and push only its `B-NNN` evidence without changing lane
   state.
2. The same commit is refused if it includes code, governed specs, Graphify tooling, channel
   control files, another lane's entry, or the unrelated `package-lock.json`.
3. A handoff cannot self-promote from `Applied` to `Verified`.
4. The next consuming approval sees the pushed handoff in Graphify at the same HEAD and a green
   full local suite.
5. Exactly one lane remains `Active`; `Eligible` still means selected-next, not concurrent
   implementation authority.

## What I did instead

Kept this as a handoff-only governance packet. No rule file, check, plan, product specification,
lane state or application code was changed. B-071's independent Draft 8 review remains in B-071,
so this file does not duplicate the T5/T6 findings.

## Approve / Reject gate

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve-with-conditions** | Development-lane governance | Clarify a handoff-only commit permission for `Active` and `Eligible` Lane B/C without changing the work-product lock | Judge confirms scope; Lane A applies Parent then Children 1–3 |
| **Defer** | `Blocked`-lane handoff-only commits | Not included in the Chief Editor's stated `Active`/`Eligible` scope | Separate Judge decision only if needed |
| **Reject** | Broad non-active commit authority | Would create concurrent implementation authority and defeat `D-156` | Keep all non-handoff paths under the sole `Active` lane |
| **Reject** | Graph/check exemption for handoff commits | Would preserve the file while hiding it from the consuming review path | Lane A sync before the next completion or approval claim |

## Independent review of the proposed journal/changelog/BDD additions — 2026-09-03

**Judge approval: none.** The controlling request says plans are still pending review. The proposal
to add journal cross-references, a central/tier changelog and per-document BDD lines is therefore
reviewed as Lane A analysis, not as an approved extension of B-072.

### Findings — parent first

| Finding | What is unclear or duplicated | Guaranteed failure if unchanged | Draft fix |
|---|---|---|---|
| `B072-R1` — the proposal solves a different problem | B-072 concerns who may make a handoff-only commit while another lane holds the work-product lock. Journal cross-references, changelogs and per-document QA concern general documentation traceability | B-072 can never close cleanly because its smallest commit-authority fix becomes dependent on a repository-wide documentation regime | Keep B-072 bounded to handoff-only commit authority, staging, push/equality, independent verification and Graphify handback. Evaluate broader traceability separately only after evidence shows the current mechanisms cannot answer a concrete question |
| `B072-R2` — a new changelog re-derives existing evidence | The repository already has Git history, the Decision Register, per-document changelogs, D-54 propagation tables and handoff evidence. Mechanically copying the same write set into another changelog creates a new current-value copy | The central and source changelogs will disagree on the first partial edit or corrected decision, recreating the tally/restatement drift this repository repeatedly prohibits | Reject a new global/per-tier changelog for B-072. Prefer one decision ID in the commit message and the existing decision's authoritative propagation table; consumers follow links rather than copied rows |
| `B072-R3` — the proposed journal relation is underspecified and retroactive | `Refines`, `Retrospective on`, and `none` do not cover multiple decisions, a decision request without a D-ID, or an entry that both analyzes and executes. It is unclear whether all historical journals must be rewritten | Authors will choose different relations for the same entry, while `none` makes a formally valid but untraceable record; a bulk historical rewrite also changes evidence after the fact | If later justified, add one optional repeatable `Related:` list for **new or materially edited** journal entries only, with typed targets such as `decision:D-…` or `handoff:B-…`; never retrofit untouched history. This is not required to close B-072 |
| `B072-R4` — per-document BDD uses the wrong test unit | A document is an evidence carrier, not always a behavior. `bun run check` and a negative behavioral test may apply to a change packet or feature but not to every edited governance file | Writers invent meaningless Given/When/Then lines, duplicate the same test across files, or treat prose presence as behavioral verification | Keep BDD/negative tests at the requirement, feature, tool or decision-application packet that owns the behavior. A document edit cites that test; it does not clone it |
| `B072-R5` — Graphify handback assumes Lane A is always Active | B-072 permits an Active or Eligible Lane B/C handoff commit, but Child 2 assigns synchronization to “the current Active Lane A.” Lane A will not be Active in every legal case | A valid handoff-only commit can leave `docs-drift` red with no actor explicitly permitted and responsible for the local-only refresh | Define two cases: the handoff committer may refresh ignored `.graphify/` state using already-approved tooling and no tracked edit; any required fragment/tool/source change remains Lane A work and blocks approval until Lane A next holds or receives a narrow explicit exception |

### Minimal B-072 success criteria

1. An `Active` or `Eligible` Lane B/C actor can commit and push only its own explicit
   `docs/handoff/B-NNN-*.md` or `C-NNN-*.md` paths without gaining implementation authority.
2. The hook/check refuses channel control files, another lane's handoff, governed docs, code,
   tooling and mixed staged sets.
3. `Applied` and `Verified` remain different actors; Git authorship is not lane attribution.
4. Push/equality is confirmed before consumption. Local Graphify refresh may change ignored state
   only; tracked Graphify corrections return to Lane A and block the next approval claim.
5. No journal-header, duplicate-changelog or per-document BDD regime is required to close B-072.

### Independent-review approve/reject gate

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve-with-conditions** | Development-lane governance / B-072 core | The work-product-lock versus handoff-journal-permission distinction is the smallest valid fix | Judge confirms `Active` + `Eligible` scope; Lane A applies the original parent and safe-commit controls plus `B072-R5` |
| **Reject** | B-072 scope | Journal cross-reference, central/per-tier changelog and per-document BDD additions are unrelated and duplicative | Remove from B-072; raise separately only with a demonstrated traceability failure |
| **Defer** | `Blocked`-lane commit permission | Still outside the stated scope | Separate Judge ruling if later required |
| **Reject** | Any product/build authorization | B-072 changes reporting mechanics only | Keep lane state and product work unchanged |

## Judge clarification — `Eligible` and `Active` handoff commits (2026-09-03)

**Judge ruling received.** “Lane A selected” is normalized to the existing authority model:
the Chief Editor/Judge selects or nominates the lane; Lane A records that selection in the live
phase table. This preserves `D-158`/`D-156` and prevents the orchestration lane from becoming the
decision owner.

### Current target rule

| Lane state | Work-product authority | `docs/handoff/` authority | Required completion behavior |
|---|---|---|---|
| **`Eligible` Lane B/C** | None. Selection does not authorize execution or any owned code/workflow surface | May edit, commit and push **only its own explicit `B-NNN-*.md` or `C-NNN-*.md` entries** | Records review/clarification evidence without changing lane state; no broad staging and no mixed-path commit |
| **`Active` Lane B/C** | May execute and commit only the surface already owned by that lane | May update, commit and push its own handoff entries alongside the completed bounded task | On each bounded task completion, update the existing relevant handoff/turn report, then commit and push the task transaction; do not mint a duplicate entry merely to report the same task |
| **`Blocked` Lane B/C** | None | May still draft/raise under the existing writable-channel rule, but durable commit permission is not added by this ruling | Wait for `Eligible`/`Active`, or obtain a separate explicit exception |

### What this ruling does not change

- Exactly one lane remains `Active` and holds the work-product commit lock.
- `Eligible` remains one selected successor, never concurrent implementation authority.
- An `Eligible` commit containing code, governed docs, Graphify tooling, channel controls, another
  lane's entry or an unrelated file must fail.
- `Applied` remains the answering actor's status; only an independent actor may record `Verified`.
- Active-lane completion updates amend the relevant handoff or turn report; “one task completion”
  does not mean “one new handoff file.”

### Parent-first application plan for Lane A

1. Record the decision in the Decision Register, distinguishing the **Eligible handoff-only
   exception** from the **Active lane's existing work-product authority plus reporting duty**.
2. Update `V1-PHASE-CLOSURE.md` §5.1, `docs/handoff/README.md` and the three shared rule files with
   identical wording; the Chief Editor selects and Lane A records.
3. Update Lane B/C work orders with explicit-path staging, task-completion handoff update, immediate
   push and remote-equality checks.
4. Update the commit hook/check so the narrow Eligible exception accepts only the lane's own
   `B-NNN-*.md`/`C-NNN-*.md` paths and rejects mixed or broad staged sets.
5. Specify Graphify handback separately: ignored local graph refresh may follow a handoff commit;
   any tracked fragment/tool/source correction remains Lane A work before the next approval claim.
6. Independently test one allowed Eligible handoff-only commit, one allowed Active task-plus-handoff
   transaction, and refusals for code, channel controls, another lane's entry and a mixed staged set.

### Clarification approve/reject gate

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | Development-lane governance | Eligible Lane B/C may commit/push only its own handoff entries; no execution authority | Lane A applies steps 1–6, then independent review |
| **Approve** | Active-lane reporting | Active Lane B/C updates the relevant handoff at each bounded task completion and commits/pushes the task transaction | Lane A applies steps 1–6, then independent review |
| **Reject** | Selection semantics | Lane A does not independently choose the successor; the Chief Editor/Judge chooses and Lane A records | Preserve `D-156`/`D-158` authority |
| **Defer** | Blocked-lane durable commits | Not granted by this ruling | Separate Judge decision only if needed |
