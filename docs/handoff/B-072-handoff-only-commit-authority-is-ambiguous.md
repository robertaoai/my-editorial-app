# B-072 — Handoff-only commit authority is ambiguous outside the Active lane

- **Raised:** 2026-09-02 by Lane B
- **Kind:** blocked-on-decision
- **Phase:** 1
- **Blocks:** durable handoff tracking by an `Eligible` or running build lane without an ad hoc
  commit exception; no product implementation is blocked
- **Status:** Answered
- **Resolution:** Applied
- **Lane A:** Acknowledged 2026-09-02. **`D-184` (2026-09-03) records the Judge's decision on the
  last blocking policy variable** — standing `Eligible` handoff-only commit-and-push authority,
  narrow-path-restricted. `docs/handoff/README.md` §"Committing and pushing your own entry" is now
  the single canonical transaction SOP this applies; every earlier protocol block in this file's
  independent-review sections below is historical analysis, not a second operative copy
  (`B072-R8`/`R9`). Not yet done: link-only summaries in `V1-PHASE-CLOSURE.md` §5.1 and the shared
  rule files/work orders, hook/check enforcement (`B072-SC2`/`SC4`), and independent Lane B
  verification that this application matches `D-184`.
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

## Independent review under `D-183` — one decision, one SOP (2026-09-03)

- **Review baseline:** local `8cbb3b7`; remote `7797139`. `D-183` exists in the local Decision
  Register and governs this review under `D-58`, but its commit and this B-072 review are not yet
  shared remote evidence.
- **Review role:** Lane B, independent of Lane A's B-072 analysis.
- **Approval state:** the Judge has supplied lane-state semantics as a clarification input. B-072
  itself, its propagation packet, Eligible-lane push authority, and any implementation remain
  unapproved.
- **Result:** **approve the narrow work-lock/journal-permission distinction in principle; reject the
  repeated SOP shape.** One open Judge decision remains: whether Eligible handoff-only authority is
  local commit only or standing commit-and-push authority.

### What happened

B-072 correctly separates the Active lane's work-product lock from a narrow handoff-journal
permission. It then states substantially the same protocol in its original children, success
criteria, independent-review criteria, Judge-clarification table, and application plan, while also
proposing copies in the phase table, three rule files, and two work orders. That repetition would
make B-072 a second operating manual and make every shortened copy a future drift point.

`D-183` adds one more required distinction: **commit authority and push authority are separate
acts.** The Judge's prior clarification explicitly gives an Eligible Lane B/C actor handoff-only
commit authority, while its Active-lane clause explicitly says commit/push. B-072 currently expands
Eligible to “commit and push” without a separately explicit push instruction. The business reason
for standing Eligible push authority is strong—handoff evidence is not shared between lanes until
it reaches the remote—but that outcome must be approved, not inferred.

### Findings — parent first

| Finding | What is unclear or duplicated | Guaranteed failure if unchanged | Smallest fix |
|---|---|---|---|
| `B072-R6` — clarification is still worded as approval | The current section says “Judge ruling received” and its table says `Approve`, although the source instruction clarified `Eligible`/`Active` meanings and did not approve B-072's complete application packet | A semantic input becomes authorization to edit rule files, hooks and phase tracking—the same approval inheritance `D-183` rejects | Label the source “Judge clarification received.” State B-072 plan approval `none` until the Judge explicitly approves the exact decision scope |
| `B072-R7` — Eligible commit silently inherits push authority | The source wording grants Eligible handoff-only commit authority; B-072's target rule and tests say commit **and push**. Active explicitly carries both | An Eligible lane can make an external write that was never authorized, or Lane A can reject every remote handoff because the local/remote rule has no valid source | Ask one explicit Judge question: standing Eligible handoff-only commit+push, or local commit with separate per-push approval. Do not infer either from Active authority |
| `B072-R8` — B-072 repeats its own SOP | Safe staging, status separation, push/equality, Graphify handback and tests are restated in several sections | The copies will diverge on allowed paths, actor states or ordering; a later reader can select whichever copy permits the desired action | Preserve earlier sections as historical analysis. Add one forward notice saying the applied decision and canonical SOP supersede every operative copy in B-072 |
| `B072-R9` — propagation proposes many SOP owners | The Decision Register, phase table, shared rules and lane work orders are all told to carry procedure | A correction needs synchronized edits across unrelated documents, recreating the restatement drift prohibited by `D-54`/`G55`/`G56`/`G58` | Make `docs/handoff/README.md` the sole operative SOP. The register owns decision/rationale; phase closure owns the state/permission summary; shared rules and work orders carry one short boundary plus a link only |
| `B072-R10` — Graphify sequencing can be mistaken for handoff verification | A handoff commit necessarily moves HEAD; B-072 alternates between immediate local refresh and a green full-suite condition before consumption | The handoff author may imply `Verified` merely by rebuilding ignored graph state, or every valid journal commit appears invalid until Lane A can repair tracked graph content | The canonical SOP must say: commit/push records evidence, never verifies it; temporary `docs-drift` is disclosed; final consuming approval requires same-HEAD Graphify plus the full suite; tracked graph/tool corrections stay Lane A work |

### One-place ownership model

| Artifact | Owns | Must not repeat |
|---|---|---|
| Decision Register, next approved decision | Authority, scope, exclusions, affected prior decisions, tier applicability | Step-by-step staging/push SOP |
| `docs/handoff/README.md` | **The one canonical handoff transaction SOP:** permitted actors/paths, exact-path staging, commit/push rule, remote equality, status separation, Graphify handback, failure behavior | Decision rationale or copied history |
| `V1-PHASE-CLOSURE.md` §5.1 | Live lane state and a compact permission summary that links to the SOP | Staging commands, test cases, Graphify procedure |
| Three shared rule files | One byte-identical narrow exception and canonical SOP link | Full procedure |
| Lane B/C work orders | A short duty to follow the canonical SOP | A second lane-specific copy |
| Commit hook/checks | Executable enforcement and negative tests | Human-facing policy prose |
| B-072 | Historical problem, review findings, Judge decision request, and final resolution/forward link | A live SOP after the rule is applied |

### Parent-first corrective plan

1. **Judge decides the last policy variable:** whether Eligible Lane B/C receives standing authority
   to push its own handoff-only commit, or must obtain explicit per-push approval.
2. **Decision first:** Lane A records the approved work-lock/journal-permission rule in the next
   Decision Register entry, following `D-183` wording. It names the exact state, path pattern,
   commit permission, push permission, exclusions, and canonical SOP owner.
3. **One SOP:** update `docs/handoff/README.md` once with the complete transaction protocol. Use
   explicit paths; reject channel controls, another lane's handoff, code, governed docs, tooling,
   unrelated files, and mixed staged sets.
4. **References, not copies:** update Phase Closure, shared rules, and work orders only with their
   owned fact and a link to the canonical SOP.
5. **Enforce:** make the hook/check derive the permitted path/state rule from the decision; test one
   allowed Eligible journal transaction, one Active task-plus-handoff transaction, and refusals for
   every excluded path/mixed set.
6. **Evidence order:** a handoff transaction records `Applied`/review evidence only. Confirm remote
   equality if push is authorized. Before the next consuming approval, synchronize Graphify at the
   same HEAD, run the full suite, and obtain independent verification.
7. **Close without duplication:** append B-072's resolution and a forward link to the decision and
   canonical SOP. Mark every earlier protocol block historical/non-operative; do not rewrite or
   republish it elsewhere.

### Success criteria

| ID | Given | When | Then |
|---|---|---|---|
| `B072-SC1` | B-072 is reviewed | Approval provenance is inspected | Lane semantics are labeled `Judge clarification received`; no text treats them as approval of B-072 or its application packet |
| `B072-SC2` | An Eligible Lane B/C actor has changed only its own handoff entry | Commit and push permissions are evaluated | Commit is permitted; push follows the exact Judge-selected rule and is never inherited from Active authority |
| `B072-SC3` | Any actor needs the handoff transaction steps | The procedure is located | One canonical operative copy exists in `docs/handoff/README.md`; every other tier links to it and carries only its owned fact |
| `B072-SC4` | A staged set contains any non-owned handoff path, channel control, code, governed doc, tool, unrelated file or mixed set | Commit is attempted | The transaction fails before commit; broad staging never becomes compliant by message wording |
| `B072-SC5` | A handoff-only commit has moved HEAD | Completion is claimed | The entry may be durable/Applied, but not Verified; stale Graphify is disclosed and the next consuming approval waits for same-HEAD graph/full-suite evidence |
| `B072-SC6` | B-072 is closed | Its operative instructions are searched | Only the forward decision/SOP link is current; earlier repeated protocol blocks are explicitly historical and are not copied into new documents |

### Judge decision required — Eligible push only

**Recommended:** grant standing push authority with the same narrow path restriction. A local commit
protects the current machine; a pushed commit protects the lane-to-lane handoff. The permission still
does not confer implementation authority, another path, self-verification, or lane-state change.

```text
Judge Approved: An Eligible Lane B or Lane C actor may commit and push only its own explicit
docs/handoff/B-NNN-*.md or C-NNN-*.md entry. This standing handoff-journal permission authorizes no
other path, broad or mixed staging, implementation, lane transition, Applied→Verified promotion, or
deployment. The canonical transaction SOP is owned only by docs/handoff/README.md; other governed
tiers record their owned fact and link to it rather than repeating the SOP.
```

If standing push is rejected, use this instead:

```text
Judge Approved: An Eligible Lane B or Lane C actor may commit locally only its own explicit
docs/handoff/B-NNN-*.md or C-NNN-*.md entry. Each push requires a separate explicit Judge
authorization naming the commit. Active-lane commit/push authority remains unchanged.
```

### Independent-review approve/reject gate

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve-with-conditions** | Development-lane governance / B-072 core | The work-product-lock versus handoff-journal distinction is sound; Eligible push remains undecided | Judge selects one push rule, then Lane A records the decision |
| **Approve** | Handoff process ownership | `docs/handoff/README.md` is the single canonical SOP owner; all other tiers link and carry only their own fact | Lane A application after explicit approval |
| **Reject** | SOP duplication | B-072, Phase Closure, shared rules and work orders must not each reproduce the full protocol | Forward-link historical copies to the canonical SOP |
| **Reject** | Approval inheritance | A Judge clarification, Eligible commit authority, or Active push authority cannot approve B-072 or grant Eligible push implicitly | Apply `D-183` |
| **Defer** | B-072 application, hook/check changes and Graphify sync | The push variable and B-072 decision packet are not yet explicitly approved | After the Judge selects the exact Eligible push rule |
| **Defer** | Product implementation, lane transition and deployment | B-072 governs reporting mechanics only | Separate bounded authorization |

## Independent review addendum — request, refinement, and execution layers (2026-09-03)

- **Requested method:** the user named a `req-exection-box` skill. No skill with that name or the
  likely `req-execution-box` spelling exists in the available skill catalog or repository. This
  addendum therefore applies only the user-supplied **request-box / execution-box distinction** and
  the repository's existing rules; it does not claim undisclosed skill instructions as authority.
- **Scope:** improves how Lane A routes documentation and backlog refinement while completing
  `B072-R9`'s one-place ownership model. It does not add a second B-072 problem, a new folder, a new
  backlog, an `A-NNN` channel, or another SOP.
- **Approval state:** analysis only. The Eligible-push decision and B-072 application remain
  unapproved exactly as stated above.

### Primary goal

Make the boundary between **a request that may be refined** and **work authorized for execution**
visible in the existing documents. The project already has both mechanisms but spreads their meaning
across the handoff README, phase flow, Decision Register, Build Spec, work order, and journals. The
fix is a routing map and canonical links—not another container called a “box.”

### Existing structure, normalized

| Layer | Existing canonical artifact | What enters | What leaves | Authority |
|---|---|---|---|---|
| **Request intake** | The current conversation for Judge/customer input; `docs/handoff/B-NNN-*.md` or `C-NNN-*.md` for Lane B/C feedback | Clarification, finding, dependency, decision request, turn evidence | One classified request with owner, impact and evidence | Records input; does not authorize itself |
| **Backlog refinement** | The same handoff entry for Lane B/C-originated work; the relevant Decision Register gap/boundary section for Lane A/Judge-originated work | Open request and evidence | Answered, narrowed, proposed, deferred, withdrawn, superseded, or ready for decision | `docs/handoff/` is already the backlog; no second list |
| **Decision** | `V1-DECISION-REGISTER.md` | Explicit Judge approval satisfying `D-183`, or a governed disposition | Durable decision, scope, exclusions and affected tiers | Register wins among derived tiers under `D-58` |
| **Execution planning** | `V1-BUILD-SPEC.md`, Artifact Inventory when a file is created/retired, Phase Closure live state, and the selected lane's work order | Approved decision and bounded authorization | Named work unit, sequence, DoD, lane holder and exclusions | Planning does not itself grant another authorization |
| **Execution evidence** | Git commit, the originating handoff/turn report, checks and Graphify at the same HEAD | Completed bounded work | `Applied`, then independent `Verified` or another refinement request | Author cannot self-verify |
| **Journal/source memory** | `docs/journal/`, `docs/source/`, `docs/governance/` | Dated analysis, context, fact checks and historical rationale | Evidence cited by a handoff or decision | Input only; a journal never ratifies, queues, authorizes or reports live state |

### How the existing handoff template supplies the request layer

No new `Request-Box`, `Execution-Box`, `Ready`, or `Approval` field is required. The template already
separates the needed facts:

| Existing field/section | Request/refinement function | Must not be used as |
|---|---|---|
| `Kind` | Classifies the request or report | Authorization state |
| `Phase` | Names the phase owning the correction | Current lane state or execution order |
| `Blocks` | States the consequence if unresolved | A reason to halt unrelated work |
| `Status` / `Lane A` | Records receipt and response | Proof the fix was applied |
| `Resolution` / `Follow-up-Tier` / `Superseded-By` | Records lifecycle disposition | Judge approval or independent evidence by itself |
| `Evidence` / `Verified-At-Commit` / `Verified-By` | Connects execution back to the request and proves independent review | Permission to begin execution |
| `What happened` / `What you need` | Defines the problem and requested decision | A copied SOP or implementation runbook |
| `What you did instead` | Records bounded fallback or stop | A silent workaround |

### Findings — do not expand B-072's closure scope

| Finding | Gap | Guaranteed failure | Smallest documentation fix |
|---|---|---|---|
| `B072-R11` — request and execution are visually adjacent but semantically implicit | Phase Closure shows `backlog refinement → permission to proceed → work`, but the document map does not name which artifact owns each transition | A journal proposal or answered handoff can be mistaken for executable authority | Add one compact request→refinement→decision→execution→evidence routing map to `docs/README.md`, whose existing purpose is “what governs what”; link to canonical owners rather than copying their procedures |
| `B072-R12` — journals can be promoted into live tracking | `docs/README.md` correctly calls journals dated build-readiness entries, but older wording says they “record decisions”; no adjacent sentence says they cannot own current backlog, authorization or lane state | A dated analysis can be cited as though it granted permission, or must be continually edited to remain current—destroying its historical value | Clarify once in the document map: journals preserve source analysis/rationale; operative decisions live in the register, live backlog in handoffs, and execution state in Phase Closure/work orders. Do not bulk-edit historical journals |
| `B072-R13` — Lane A request routing could reopen a rejected channel | A generic “request box” can be read as authority to add `A-NNN` entries even though `D-138` rejected that shape | Lane A becomes both raiser and answerer in the same channel; channel checks ignore or misclassify the new series | Preserve the existing asymmetry: Lane B/C feedback uses handoffs; Lane A's own boundary/turn record uses the Decision Register; direct Judge input is classified under `D-183` and routed to the relevant existing item |
| `B072-R14` — adding box-state fields would duplicate lifecycle | The handoff template already carries type, owner, blocker, response, resolution and evidence. A new Request/Execution flag would overlap several fields | One row says “Execution” while `Status: Open`, no decision exists, or the lane is not Active; readers choose the permissive field | Change no template field for this model. Execution readiness is derived only from a recorded decision plus the required bounded authorization and live lane state |
| `B072-R15` — promotion from refined request to execution needs one explicit rule | The artifacts exist, but no single short statement says an answered/refined request is still non-executable until its governing approval and lane conditions exist | “Lane A answered” or “plan drafted” becomes permission to apply, repeating `R67` at the workflow level | In the canonical routing map state: refinement may draft a solution; execution begins only when the Decision Register records the applicable Judge act under `D-183`, the bounded authorization is satisfied, and Phase Closure names the executing lane state |

### Parent-first Lane A documentation refinement

This is a child of B-072's approved one-place model and **not** an additional B-072 closure gate:

1. **Decision:** the eventual B-072 register entry records only the handoff commit/push decision,
   scope and canonical-owner map. It cites `D-183`; it does not reproduce the transaction SOP.
2. **Structural map:** `docs/README.md` gains one compact request→refinement→decision→execution→
   evidence diagram/table and the journal non-authority clarification (`R11`–`R15`). This is document
   taxonomy, not the handoff transaction procedure.
3. **One SOP:** `docs/handoff/README.md` remains the sole owner of the detailed handoff transaction
   protocol and explains how its existing template fields support intake, refinement and evidence.
4. **Backlog:** `V1-PHASE-CLOSURE.md` keeps its existing feedback loop and “handoffs are the backlog”
   rule. Add at most a link to the structural map/SOP; create no second queue or copied procedure.
5. **Lane A/Judge route:** retain `D-138`: Lane A boundary reporting stays in the register; no
   `A-NNN`, refinement directory, or Lane A self-handoff is created.
6. **Journals:** make no retrospective/bulk edits. Future journal entries may be cited as `Evidence`
   or decision inputs, but never carry live status, approval, lane state, or duplicated backlog rows.
7. **Execution:** Build Spec, Inventory, Phase Closure and work orders receive only facts they own
   when an approved request affects them; none becomes another request ledger.
8. **Verification:** negative-check that a journal entry, `Status: Answered`, proposed plan, or
   `Eligible` nomination alone cannot satisfy an execution precondition.

### Success criteria

| ID | Given | When | Then |
|---|---|---|---|
| `B072-BOX-01` | Any new input arrives | Its route is selected | Judge/customer input follows `D-183`; Lane B/C feedback uses one existing handoff; Lane A's own boundary record uses the register; no duplicate request artifact is created |
| `B072-BOX-02` | A handoff is acknowledged or answered | Execution eligibility is evaluated | Receipt/refinement alone grants no application, commit outside the handoff exception, push, lane transition or build authority |
| `B072-BOX-03` | A journal entry contains a recommendation or historical decision discussion | Current authority is evaluated | The consumer follows its citation to the current Decision Register entry; the journal itself cannot satisfy the authority check |
| `B072-BOX-04` | A request is approved for execution | The execution packet is inspected | The register records the Judge act, the bounded authorization and live lane state are identifiable, and each execution/tracking artifact carries only its owned fact |
| `B072-BOX-05` | A reader needs the transaction procedure | Repository docs are searched | Exactly one operative SOP is found in `docs/handoff/README.md`; `docs/README.md` supplies only the structural routing map and other files link |
| `B072-BOX-06` | Work completes or fails review | Evidence returns | The originating handoff/decision is updated or a non-duplicate refinement is appended; `Applied` and independent `Verified` remain distinct |

### Addendum approve/reject gate

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve-with-conditions** | Lane A documentation architecture | Make request/refinement/decision/execution/evidence ownership explicit without creating new boxes or ledgers | Apply only with the approved B-072 documentation pass |
| **Approve** | Backlog refinement | Existing `docs/handoff/` entries remain the backlog for Lane B/C feedback; refine in place and avoid duplicate items | Canonical handoff SOP |
| **Approve** | Journal treatment | Journals remain dated source memory/evidence, never live backlog, authority or execution state | One clarification in `docs/README.md`; no historical rewrite |
| **Approve** | Template structure | Existing template fields already carry request classification, impact, lifecycle and evidence | No template-schema change required |
| **Reject** | New artifacts | No request-box folder, execution-box folder, central backlog, journal changelog, `A-NNN` channel or per-document BDD copy | Preserve `D-138`, `D-160` and B072-R1–R4 |
| **Defer** | Application of this addendum | It depends on the still-open B-072 Eligible-push decision and explicit approval of the B-072 packet | Judge decision, Lane A application, independent review |

## Closure — `D-184` resolves the last blocking question (2026-09-03)

**The Eligible-push decision above is resolved: `D-184` approves standing commit-and-push authority**
(the recommended text, verbatim). `docs/handoff/README.md` §"Committing and pushing your own entry"
is now the canonical SOP applying it — one operative copy, not a restatement of the protocol blocks
in the independent-review sections above. Those sections (the original problem statement, all
independent-review rounds, and the request/refinement/execution addendum) remain as historical
analysis and the record of how this was reasoned through; **they are not operative** now that
`D-184` and the canonical SOP exist.

**Still open, not resolved by this closure:**
- Link-only summaries in `V1-PHASE-CLOSURE.md` §5.1 and the shared rule files/work orders
  (`B072-R9`'s one-place ownership model — the canonical SOP exists; the short links pointing to it
  from other tiers do not yet).
- Hook/check enforcement deriving the permitted path/state rule from `D-184` (`B072-SC2`/`SC4`).
- The `docs/README.md` request→refinement→decision→execution→evidence routing map and journal
  non-authority clarification (`B072-R11`–`R15`), whose own approve/reject gate deferred application
  until this Eligible-push decision existed — it now does.
- Independent Lane B verification that `D-184`, the canonical SOP, and this closure note actually
  match the Judge's instruction (per `D-183` point 6 — this closure does not self-certify that).

### Closure approve/reject gate

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | `D-184` application | Standing Eligible commit+push authority, canonical SOP written | Independent Lane B verification |
| **Approve** | One-SOP model | `docs/handoff/README.md` is the sole operative transaction procedure | Link-only propagation to other tiers |
| **Defer** | Phase Closure / shared rules / work orders links | Not yet written | Lane A follow-up |
| **Defer** | Hook/check enforcement | Not yet written | Lane A follow-up |
| **Defer** | `docs/README.md` routing map addendum | Its own precondition (this decision) is now met | Lane A follow-up |
