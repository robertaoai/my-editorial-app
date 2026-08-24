# Handoff — how a build lane talks back

`D-75` requires a handoff at every lane boundary — *"record what is done, what is
specified-not-applied, and what is open, then stop"* — and named **no location for it**.
This directory is that location (`D-90`).

## Why it exists

**Neither build lane owns anything in `docs/`.** Lane B's surface is `app/`, `lib/`,
`components/`, `supabase/`, `__tests__/`; Lane C's is `.github/workflows/` **and nothing else**.
Without this directory neither could report a spec defect or request a dependency without
editing `docs/` — a crossing that `.githooks/commit-msg` now blocks. **Neither lane could speak
without crossing.**

**Opened for Lane B by `D-90`, extended to Lane C by `D-92`.** The extension was not a widening
of scope: as first written the check's filename filter matched `B-` only, so a `C-NNN` entry was
**invisible** — the check would report *"no entries"* with Lane C's blocker sitting in the
directory. **A control scoped to one lane cannot fail for the others.**

## Ownership — deliberately none

`docs/handoff/` is **unmapped**: it belongs to no lane. Lane B and Lane C write entries; Lane A
writes responses; neither is a crossing.

That is not an oversight. Assigning it to a build lane would mean **Lane A's reply — which
normally lands with the doc update it triggers — became a crossing on every use**, and with two
raising lanes it could not be assigned to one of them anyway. The channel would
fight the gate on its own intended purpose. `G63` and `D-85` both settled the same principle:
**a genuinely joint surface should not be attributed to one owner.** `lane-boundary` reports
unmapped paths in its detail line, so nothing here is invisible.

## This directory stays writable when your lane is not `Active` — `D-103`

**Exactly one lane is `Active` at a time and only that lane may commit** (`D-101`; the live state
is `V1-PHASE-CLOSURE.md` §5). **This directory is the carve-out.** Raising, acknowledging and
answering are permitted **regardless of which lane is `Active`.**

**That is not a softening, it is what makes the channel work.** `handoff-response` fails on an
entry nobody has read. If `Active` barred the answering lane from writing here, the suite would
show a red **that no permitted act could clear** — and a check that is red in the normal case is a
check people stop reading (`D-83`).

**What is NOT carved out: a dependency.** `package.json`, the lockfiles and the build config are
Lane A's, so a dependency you need while Lane A is not `Active` **genuinely waits**. `D-86` says
Lane A provisions *ahead* precisely so this is rare. **The entry stops that item, not your lane** —
raise it and carry on with everything else.

## Raising an entry — Lane B and Lane C

Copy `TEMPLATE.md` to `B-NNN-<short-slug>.md` (Lane B) or `C-NNN-<short-slug>.md` (Lane C),
using the next free number **in your own series** — the two series are independent. **One file per
item** — not a shared log. A single append-only log would mix append-only entries with
current-value status fields, which is exactly the mixed-file trap `G63` recorded.

**Then stop and continue with other work if you can.** A blocked entry is a request, not a
negotiation. `D-86`: Lane A provisions, Lane B builds. `D-84` says the same of Lane C — **Lane A
writes every dependency before Lane C builds a workflow against it**, so a workflow that needs a
script, a config file or a permission Lane A has not written is a `dependency` entry, never an
improvisation inside the workflow.

### `Phase:` names the phase that owns the CORRECTION — `D-104`

**Not the phase you are working in, and not the phase your work is blocked on.** The field was
mandatory from `D-102` and undefined until `D-104`, which left three readings live at once.

**The reason this reading wins is structural: `Blocks:` already carries the blocking relation.**
A `Phase:` that meant *"what this blocks"* would be a second copy of `Blocks:`, and a duplicated
fact is the drift mechanism this corpus keeps recording. So `Phase:` carries the other half —
**whose artifacts are wrong, and therefore whose phase cannot close while this is open.**

| | |
|---|---|
| **1** | The correction lands in Lane A's orchestration: `docs/`, `scripts/`, the rule files, build config |
| **2** | The correction lands in Lane B's application code |
| **3** | The correction lands in Lane C's workflows — or in the repository settings that gate them |

**Worked example.** `B-002` reported missing values in `CONFIG_LOG.md`. It **blocks** Lane B's
`flags.ts`, which is Phase 2 work — and the file that was wrong is Lane A's, so it is filed
**`Phase: 1`**. `Blocks:` records the Phase 2 consequence; `Phase:` records who must fix it.

**When a correction genuinely spans phases**, file it against the phase that must act **first**,
and re-file it when that part is complete. `B-016` is the live example: its parent finding needed
a Lane A arbitration, which has happened, so the residual is Lane C's and it now reads `Phase: 3`.

**A turn report is the exception, and it has its own rule** (`D-106`). A report on your own turn is not a correction, so *"the phase that owns the correction"* has no value to give. **File it against your own lane's phase** — Lane B → `2`, Lane C → `3` — because anything it hands back belongs to that lane until someone re-files it.

**This matters because closure gating reads it.** `closure-readiness` fires only for entries filed
against the phase being closed — see below.

## When your entry needs work in a phase that already closed — `D-93`

**Phases run 1 → 2 → 3; findings do not.** A Phase 2 finding can require Lane A work in a phase
already declared closed. Add one line:

```
- **Reopens-Phase:** 1
```

Lane A marks that phase **Reopened** in `docs/v1/V1-PHASE-CLOSURE.md` §5, citing your entry.
**A reopened phase is not a failure** — it is the return path working. Before `D-93` the only
options were an undeclared reopening or a dropped finding.

**Omit the line entirely** when the work belongs to the current phase, which is the normal case.
**No phase has ever closed**, so today the line is always omitted — using it now fails the check,
deliberately: reopening presupposes a closure (`C-19`).

## This directory is the backlog — `D-100`

**The operating model is Scrum, not a stage gate** (`V1-PHASE-CLOSURE.md` §0). Three consequences
for how you use this channel:

1. **Feedback against running work does not halt it.** Raise the entry and **carry on** unless you
   are genuinely blocked. A spec that turns out to have a gap is **refined**, not invalidated.
2. **A new entry goes to the top of the backlog.** Feedback on work already running is the most
   perishable information in the cycle — it is worth more now than after the surrounding work has
   moved on.
3. **A full backlog is not a defect.** `bun run check` reports the queue depth and **does not fail
   on a healthy queue**. Only an entry nobody has looked at fails it.

**No separate backlog file exists, deliberately.** These entries **are** the backlog; a second
artifact listing them would be a restatement, and restatements drift.

## Response is not closure — `D-101`, hardened by `D-102`

**`Answered` proves Lane A replied. It does not prove the defect was corrected, and it never
did.** Check 10 tests **receipt**; that is deliberate and unchanged. What was missing is the other
half: a state that says *this is actually finished, and here is what proves it.*

| Status | Means | Enough to close a phase? |
|---|---|---|
| `Open` | Raised, not yet dispositioned | **No** |
| `Answered` | Lane A replied | **No** — a reply is not a fix |
| **`Applied`** | Corrected in the tree at a named commit, **and nobody independent has confirmed it** | **No — deliberately** |
| **`Verified`** | Confirmed by a **named actor who is not the answering side**, at a commit that **exists** | **Yes** |
| **`Deferred`** | Real, not now — **`Follow-up-Tier` required** | **Yes**, once the tier is named |
| **`Withdrawn`** | Not a defect, with the reason | **Yes** |
| **`Superseded`** | Overtaken by a later decision — **`Superseded-By` required** | **Yes** |

**`Applied` exists because `Verified` was being written by the side that wrote the fix** (`B-013`).
`D-101` derived the word from a field Lane A filled in for itself. **Recording an honest `Applied`
costs a red condition; recording an unearned `Verified` costs the meaning of the word.**

**The closure state lives in the entry**, carried by `Resolution`, `Evidence`, `Verified-By`,
`Verified-At-Commit`, `Follow-up-Tier` and `Superseded-By` — **not in a second document.**
`closure-readiness` (`C-14` check 13) reads those fields and reports the matrix. **There is no
second backlog file** — that would restate the entries, and restatements drift (`G55`).

**`Verified-At-Commit` must be a commit that exists.** Hexadecimal, and proven with `git cat-file`
on a full-history run; `pending` is not a commit. On a shallow CI checkout the check reports a
**clearly labelled limited** result rather than claiming it verified existence.

**The check is silent until a closure is claimed, and then it is PHASE-SCOPED.** It fires when the
phase register marks a phase closed, and fails on entries **filed against that phase** that are
merely `Open`, `Answered` or `Applied`. **An open entry filed against a different phase does not
fail this one** (`B-013`). A full backlog during a sprint is still healthy; an unverified blocker
at a Judge boundary is not.

## Answering — Lane A

Fill the `Lane A` line. The dispositions are `Acknowledged`, `Answered` and `Withdrawn`:

| Disposition | Means |
|---|---|
| `Acknowledged` | Seen and queued. **Required immediately** — an unacknowledged entry fails `bun run check`. |
| `Answered` | Resolved. Say what changed and cite the decision or commit. |
| `Withdrawn` | Not a defect. Say why — a withdrawal with no reason is not a disposition. |

**Acknowledging is not answering.** The check requires acknowledgement so nothing sits unread;
it does **not** demand a fast answer, because a queue is healthy and a red check over a healthy
queue teaches people to ignore the check.

**Write an answer so it does not silently go false.** An answer is an append-only record of what
was said *then*. Present-tense claims about other entries age badly — `B-011`'s answer said
*"`B-009` is `Verified`"* and stayed on the page after `D-102` made it `Applied`. **Date the claim
or name the decision, and append a correction rather than editing history.**

## What the checks enforce

`scripts/checks/handoff-response.mjs` (`C-14` check 10) fails on:

- a malformed entry — a missing **or blank** `Kind`, `Status`, `Lane A`, or `Phase`
- a `Phase` naming no row in the phase register
- `Status: Answered` with an empty `Lane A` line — a claim with nothing behind it
- `Status: Open` with **no acknowledgement** — the "feedback sits unread" case

`closure-readiness.mjs` (check 13) validates the closure fields on every run, and gates by phase
when a closure is claimed. `channel-docs.mjs` (check 16) couples **this file and the template** to
the checks above, in both directions — it exists because these two files were the only part of the
channel nothing read, and they drifted three decisions behind the entries they govern (`D-104`).

**A blank field is not an empty value.** The parser is line-bounded: horizontal whitespace may
follow the marker, a newline may not. It used to cross the line break and read the *next* field as
the missing one's value, so `B-013`, `B-014` and `B-015` shipped with blank `Kind` and the check reported PASS
(`B-017`). **The green did not describe the files being judged.**

## What it does not do

It checks **form, not substance**. It cannot tell whether an answer is correct, whether a
`Withdrawn` was justified, or whether the actor named in `Verified-By` did any reading — the same
arrival-not-correctness limit `G65` records for the tier sweep and `C-22` records for the manifest.
**Reading the entries is still a person's job.**
