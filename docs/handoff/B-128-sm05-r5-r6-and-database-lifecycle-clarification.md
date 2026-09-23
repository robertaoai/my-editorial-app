# B-128 — SM05 R5/R6 Judge guide and database-lifecycle clarification

- **Raised:** 2026-09-23 by Lane B
- **Kind:** finding
- **Phase:** 1
- **Blocks:** accurate closure instructions for `DOR-R5`, `DOR-R6` and identity-readiness evidence; no application construction
- **Status:** Open
- **Lane A:**
- **Verified-By:** — not yet dispositioned; raised by Lane B
- **Evidence:** `D-252`, `D-254`; `docs/handoff/B-119`, `B-124`, `B-127`; `docs/v1/V1-BUILD-SPEC.md` §1; `docs/v1/work-packets/V1/V1-SM05.md`; storyboard Panels A9/A10; `docs/fn-specs/FN-GATES-01-05.md` §4.1; `docs/ENCYCLOPEDIA-SYNC.md`
- **Verified-At-Commit:** f545e0633133fa1213b3c65f4cfb3f26fcfc4402

## What happened

The Judge asked for practical closure guides for R5 and R6, a two-step database guide, and exact
DoR-to-DoD alignment before the SM05 Issue is created. The supplied Lane C scratch analysis contains
three conflations that must not enter canonical sources:

1. walking Panels A9/A10 does not by itself close R5: A9 says it is only an overlay and expressly
   leaves the separate normal/revision artifact open; A10 owns SM06 `ManualReady`, not the whole SM05
   editorial journey;
2. the five operator facts are metadata for accepted A01 evidence already produced, not database
   setup or feature construction; and
3. every behavioral DoR contract needs xDD verification, but documentary/governance readiness such
   as R6 needs documentary currency evidence, not an invented runtime test.

## Parent 1 — Judge guide for `DOR-R5`

R5 remains open until the missing artifact exists and is reviewed. Follow this order:

1. **Author the single owner first.** Lane A creates one canonical SM05 normal/revision wireflow and
   matching data flow. It must not redraw A10 or treat A9's existing overlay as complete.
2. **Cover the normal path.** Show manual intake record → accepted `EW` → `OP-PITCH` classification →
   selected `OP-DRAFT` execution/evidence → `business:T1`–`T5` records → T5 ranking/routing handoff.
3. **Cover the revision path.** A return re-enters only the affected business node as a new scoped
   execution; sibling and prior evidence remains historical and is not overwritten or silently
   treated as current.
4. **Name every visible source.** For each UI fact, identify its authoritative record/event and mark
   display-only facts: source-RACI/Line provenance, copy-edit provenance and Final Sign-Off reminder.
   Do not show them as enforcement.
5. **Preserve exclusions.** No `transition:T*` execution claim, `T6`, Line 3 workflow,
   `OP-FINAL-SIGNOFF` enforcement, WordPress or `Published` state enters SM05.
6. **Chief Editor walkthrough.** Walk one normal example and one revision example. For each screen or
   step record `Accept`, `Correct`, or `Reject`, with the exact source mismatch when not accepted.
7. **Feasibility review.** Lane B/C review the accepted visual against the governing behavior and
   trace each visible fact to one source, as the current Build Spec requires. Any canonical edit is
   still Lane A's.
8. **Closure evidence.** Lane A records the artifact anchor, dated walkthrough result and review
   disposition in the R5 evidence row; only then check `DOR-R5`.

### Judge decision for R5

| Option | Meaning | Verdict |
|---|---|---|
| **A — create and walk the missing SM05 artifact** | Produces the required single owner and review evidence | **Recommend Accept** |
| **B — accept A9/A10 as sufficient** | Conflates an overlay and an SM06 publication-event flow with the missing SM05 journey | **Reject** |
| **C — defer R5** | Keeps SM05 unready; no Issue/branch/selection | **Accept only as a blocking deferral** |

## Parent 2 — Judge guide for `DOR-R6`

R6 is a controlled hosted-document comparison. It does not require application code.

1. Read the hosted Encyclopedia in full; do not rely on the sync-ledger summary.
2. Compare **Entry 01** against the current identity and four-eyes sources, especially
   `ACCESS-ROLE-CHIEF-EDITOR` versus virtual `ROLE-*` identities and the current Line boundary.
3. Compare **Entry 05** against the current assurance boundary: no Line 3 in V1, `business:T5` is
   newsworthiness ranking/routing rather than assurance, SM05 is display-only for Line/RACI context,
   and V1 only partially satisfies `CR-19`.
4. Compare **Entry 06** against the current pre-`T1` manual-intake/`EW`/route-classification sequence
   and the limited Route-1 SM05 boundary.
5. Record one verdict per entry: `Current`, `Update required`, or `Explicitly deferred by Judge`.
   A deferral must name the entry and return condition; silence is not a deferral.
6. If updating, edit and republish the same hosted artifact URL, then update only the corresponding
   ledger rows and verification anchor. If deferring, preserve each stale flag and record the Judge
   act without claiming hosted synchronization.
7. Check `DOR-R6` only when all three entries have either a completed comparison or an explicit
   entry-specific Judge deferral.

### Judge decision for R6

| Option | Meaning | Verdict |
|---|---|---|
| **A — compare and update/confirm Entries 01/05/06** | Produces direct hosted evidence | **Recommend Accept** |
| **B — explicit entry-specific deferral** | Counts as the governed completion disposition for Issue readiness while preserving the open hosted work | **Approve-with-conditions** |
| **C — infer completion from flags or local ledger text** | No hosted comparison occurred | **Reject** |

## Parent 3 — identity facts versus database work

The five operator facts are **DoR evidence metadata** for the accepted A01 receipts:

- local assessed commit SHA;
- local execution UTC window;
- non-secret Supabase project reference;
- Supabase execution UTC timestamp; and
- Supabase-side assessed commit SHA.

They describe what was already assessed. Recording them does not provision a database, apply a
migration, run A02 or earn SM05 DoD. If a fact is unavailable, record
`UNRECOVERABLE — <reason>`; readiness then needs an explicit Judge exception.

Database work is instead split by `D-252`:

### Step A — local build guide (`V1-SM05` State 2)

After State-1 readiness, Judge selection, work order and Lane B activation:

1. use a fresh disposable local PostgreSQL instance;
2. replay the ordered scripts, including the existing candidate `0002`;
3. build SM05 against real local persistence, with no dead controls;
4. run child-appropriate failing-first tests and the accepted DoD verification; and
5. record replay, test, safe-failure and secret-handling evidence.

This is local construction/mechanical replay, not hosted migration.

### Step B — hosted Supabase promotion guide (post-SM05 DoD)

Only after accepted SM05 development DoD **and** accepted baseline promotion:

1. separately review and authorize hosted application of `0002`;
2. apply it to the identified Supabase project through the governed deployment path;
3. rerun the unchanged accepted preflight and A02 assessment;
4. record the hosted result and complete final `D-251` production classification; and
5. retain failure evidence if preflight stops again—never report a false zero.

This hosted step is not an SM05 selection prerequisite and must not be pulled forward into DoR.

## Parent 4 — DoR-to-DoD alignment for the future Issue

The Issue guide should carry the accepted DoR evidence plus an unchecked DoD contract. Alignment is
by evidence type, not by forcing every readiness item into executable code:

| DoR input | Later DoD verification |
|---|---|
| R1 record/event contract | persisted records/events and namespace behavior match the accepted contract |
| R2 atomic `OP-PITCH` contract | positive, failure, replay and idempotency tests against real local persistence |
| R3 `EW` refusal/retry contract | refusal, retry, duplicate and legitimate-new-work tests |
| bounded R4 operation contracts | `OP-DRAFT` behavior verified; deferred copy-edit/final-signoff execution remains absent; display-only provenance is correct |
| R5 visual/data-flow contract | implemented normal/revision journey and every visible fact conform to the accepted artifact |
| R6 Encyclopedia disposition | final documentation-currency check; an accepted deferral stays labelled as deferred |
| identity-readiness evidence | accepted identifiers and evidence provenance remain correctly represented; final hosted classification remains in its later lifecycle |

No DoD box is checked when the Issue is created. The Issue carries these criteria so State-2 work
can be tested and reviewed against them.

## What Lane B did instead

Lane B stopped at this handoff. No canonical Lane A document, application code, database,
migration, Issue, branch, PR, remote, hosted artifact or Graphify state was changed.

---

## Verdict

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | R5 parent-first creation/walkthrough guide | Phase 1 DoR completion; Lane A authors, Chief Editor walks, required reviewers disposition |
| **Approve-with-conditions** | R6 hosted comparison or entry-specific deferral | Phase 1 DoR completion; Judge records each entry's result |
| **Approve** | Two-step database guide | State 2 local build, then post-DoD/post-promotion hosted deployment |
| **Approve-with-conditions** | DoR-to-DoD Issue alignment table | Phase 1: Lane A adopts after B-127/B-128 disposition; DoD remains unchecked at Issue creation |
| **Defer** | Five operator facts or explicit exception | Phase 1 pre-selection evidence, owned by Chief Editor/Judge |
| **Reject** | Treating Panels A9/A10 alone as completed R5 evidence | The required SM05 normal/revision artifact is still missing |
| **Reject** | Treating operator metadata as database setup, or hosted migration/A02 as pre-selection work | Preserve `D-252` sequence |
| **Reject** | Requiring runtime code for R6 or checking DoD at Issue creation | Use documentary verification; DoD is satisfied only after construction |

