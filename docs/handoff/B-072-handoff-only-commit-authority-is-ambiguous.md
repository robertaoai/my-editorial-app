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
