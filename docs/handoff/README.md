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

## Committing and pushing your own entry — `D-183`, `D-184`

**Writable (above) and durable-commit are different permissions.** `D-103` says this directory stays
writable regardless of which lane is `Active`; it does not by itself say who may `git commit`/`push`
that edit. `D-184` closes that gap — this is the one canonical procedure; do not restate it
elsewhere.

**The exclusive work-product commit lock still belongs only to the `Active` lane** for every path
outside this directory. Within `docs/handoff/`, an **`Eligible`** or **`Active`** Lane B/C actor may
commit and push **only its own explicit `B-NNN-*.md` or `C-NNN-*.md` entry**:

1. **Before staging anything, bind your one exact intended path** (`B072-R44`) — decide and write
   down the single literal `docs/handoff/B-NNN-*.md` or `C-NNN-*.md` path you mean to commit. Matching
   the B/C filename *pattern* is not the same as it being *your* declared file — all actors share one
   Git identity, so the pattern alone cannot prove ownership. Do this before `git add`, not after.
2. Confirm the staged set is empty, then stage only that one bound path. Never use a broad add
   (`git add -A`/`git add .`). **Before committing, require the cached diff to equal exactly that one
   bound path:** `git diff --cached --name-only` must return exactly one line, byte-identical to the
   path you wrote down in step 1 — not merely a `B-NNN`/`C-NNN`-pattern match, and never a channel
   control file (`README.md`/`TEMPLATE.md`), another lane's entry, code, a governed doc, Graphify
   tooling, or an unrelated file (e.g. `package-lock.json`). Any zero, second, different, or
   merely-similarly-named path — **stop before committing.** A stuck local commit with the wrong
   path set is harder to recover from than refusing to create it.
3. Commit. **Re-confirm `HEAD`'s changed-path set still equals the one bound path**
   (`git diff-tree --no-commit-id --name-only -r HEAD` — same single-line, byte-identical check as
   step 2, now against the actual commit) before treating anything below as safe to proceed with.
4. **Before pushing, run this pre-push proof — a clean commit does not mean a clean push**
   (`B072-R28`/`R29`/`R32`/`R33`/`R37`/`R41`). `git push` advances the remote ref through every commit
   between it and yours, not only the file you changed, and a cached or stale remote-tracking ref is
   not evidence. **Quote `@{upstream}` in every command — unquoted, PowerShell parses `@{...}` as a
   hashtable literal and fails with `Missing '=' operator after key in hash literal` before Git ever
   runs; `'@{upstream}'` works in both PowerShell and POSIX shells:**
   - **Resolve your configured upstream:**
     `git rev-parse --abbrev-ref --symbolic-full-name '@{upstream}'`.
     No configured upstream — **stop**.
   - **Fetch it:** `git fetch`. Any fetch failure (network, auth, anything) — **stop**. Never fall
     back to a cached/stale remote-tracking ref after a failed fetch.
   - **Require the upstream tip to equal `HEAD^`** (your parent commit) — not merely an ancestor.
     `merge-base == upstream` alone is fast-forward evidence, not proof the outgoing range is one
     commit. If the upstream is behind `HEAD^`, or `git rev-list --count '@{upstream}..HEAD'` is
     anything but `1` — **stop**. Ask the `Active` lane to push its ancestor range first, or get the
     Judge to explicitly name and authorize the full accumulated range for you to push instead.
   - **Only once all of the above pass:** push. Then **fetch again** and require the upstream tip to
     now equal `HEAD` before reporting the entry as pushed — do not report "Pushed" from the local
     push command's exit code alone.
   This permission does not make the lane `Active`, consume an `Eligible` nomination, or grant
   implementation, lane-transition, or deployment authority.
5. You may record `Applied` on your own answer. Only an independent reviewer may record `Verified`
   with `Verified-By` and an existing commit — never self-promote.
6. A handoff-only commit necessarily moves `HEAD` and may temporarily make `docs-drift` red — that is
   disclosed evidence of durable tracking, not a completion or verification claim. The current
   `Active` Lane A synchronizes Graphify (tracked fragment + rebuild) before the next consuming
   approval or phase-closure claim; do not call a pushed handoff "verified" or "synced" from the
   commit alone.

`Blocked`-lane commit authority is not granted by this section — a `Blocked` lane may still draft
under the writable-channel rule above, but durable commit/push requires `Eligible` or `Active`.

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

**And it now has its own `Kind` — `turn-report` (`G84`, raised as `B-037` item 3).** Filed as a
`finding` it was **mechanically indistinguishable from an unresolved defect**, and since it can
never carry a `Resolution` — there is nothing in a report to resolve — four of them sat permanently
in the "still carry NO resolution" figure. **A backlog number that includes items which can never
leave it has stopped measuring the backlog.**

> **Excluded from the unresolved count, never from the evidence.** `handoff-response` reports turn
> reports as their own number and `closure-readiness` gives them their own tally key, so a report
> neither inflates the defect backlog nor disappears from a boundary. `B-037` named both halves and
> only one of them is about tidiness.

**Do not use `turn-report` for anything you want answered.** If your turn found a defect, that is a
separate `spec-defect` entry — the report says a turn happened, the defect asks for a fix.

**A turn report names its run — `Run:` (`D-123`, raised as `B-053`).** `B-043` and `B-047` were
both filed for the same `LB-S1-01` run and, absent anything naming that, read as two turns instead
of one report and one superseded finding about it. Use a short stable identifier — lane letter,
phase, and an ordinal is enough (`LB-S1-01`). **A second live `turn-report` naming a `Run:` already
claimed by another is a channel-check failure** unless the earlier one carries
`Resolution: Superseded` or `Withdrawn`.

**You do not mint the identifier — Lane A assigns it** in `V1-PHASE-CLOSURE.md` §5.0a and you copy
it (`D-124`, raised as `B-055`). **Missing, blank, unregistered and duplicate all fail**; `D-123`
required the field in prose and implemented `if (run)`, so a report that simply omitted it passed
and never entered the uniqueness map at all. If your run has no row yet, raise it — **that is a
`dependency` entry, not a value to invent.**

**A turn report carries no closure field — omit the line, do not leave it blank.**
`Resolution`, `Verified-By`, and `Verified-At-Commit` do not apply to a report; write the entry
without those three lines rather than with them empty. **`handoff-response` rejects each of them
even when blank** (`D-124`, raised as `B-056`) — a blank marker is exactly the regression the
value parser cannot see. (Two early reports, `B-022` and `B-026`, were retroactively converted
from `finding` and kept the blank lines from that shape; `D-123` removed them — the shape was
stale, not the claim.)

> **`Evidence` is NOT one of them, and `D-123` got this wrong.** It listed `Evidence` alongside
> `Resolution`, `Verified-By` and `Verified-At-Commit` while designating `B-047` — which carries a
> filled `Evidence:` line — as the canonical report, so the rule condemned its own exemplar.
> **A report exists to say what the turn produced, and `Evidence` is where it says it.** Keep it,
> filled; a blank one fails.

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

## Feedback checklists — `D-192`

Two externally drafted guides — an intake template for Lane A and a sender guide for Lane B —
proposed a parallel feedback channel with its own `FB-*` identifiers, its own copied claims and its
own status roll-up. **`D-192` rejected the parallel channel and kept the discipline behind it.**
What follows is that discipline: not a second process, but the questions worth asking before an
entry is sent and before one is answered.

**Nothing below is new machinery** — no field, no lifecycle state, no file. Where an item names a
rule, the rule lives in the section it cites and not here. A checklist that restates its own source
is the drift `G55` names, arriving in the file that warns about it.

### Before you raise — Lane B and Lane C

- **One bounded concern per entry.** A systemic process defect **may cite several examples and ask
  for one shared correction** — that is not bulk closure, and it verifies or closes none of those
  examples. Split only when the correction's scope or ownership differs. Independently raised
  entries keep their own lifecycle and their links (`D-100`, `B-079`).
- **Choose `Kind`; do not default it.** A report on your own turn is a `turn-report` and carries
  `Run`. A defect you want fixed is a separate `spec-defect`. The report says a turn happened; the
  defect asks for a fix.
- **`Phase` names who must FIX it**, not who is blocked — `Blocks:` already carries that (`D-104`).
- **Say what your evidence proves, not that it passed.** A green suite proves the checks ran and
  saw nothing they are able to see. That is arrival, not correctness.
- **State the claim and the gap separately.** *This asserts X on the strength of Y; Y proves
  &lt;the narrower fact&gt;.* Naming the collapse is the finding — *"this seems wrong"* is not.
- **Name the bounded question or correction sought.** If answering it needs an investigation,
  identify the missing evidence, the responsible owner, and the next review or stop condition.
  **You do not need to know the final remedy to report a legitimate gap** — *"the decision or the
  evidence is missing"* is a finding, not an unfinished one. Keep the same entry while its scope is
  unchanged; create a child only for genuinely distinct scope (`B-079`).

### Before you answer — Lane A

- **Acknowledge on arrival.** Receipt is required immediately; a queue is healthy and an unread
  entry is not.
- **Answer in the raiser's words, and keep them.** Disagreement is appended, never written over
  what was raised — see *Answering* above.
- **Do not merge one lane's entry into another's.** If Lane B and Lane C raise the same item, both
  entries stand and cross-reference each other. Agreement reached from different surfaces is
  corroboration, and corroboration collapsed into a single entry stops being evidence.
- **Answering is not correcting, and correcting is not closing** — separate facts, separate
  evidence. See *Response is not closure* above.
- **Record the honest `Applied` and leave the red condition standing.** `Verified` is not yours to
  write on your own answer.
- **A terminal disposition keeps its owner or its reason.** `Deferred` names its `Follow-up-Tier`;
  `Superseded` names its `Superseded-By`; `Withdrawn` names why. One carrying none of those is a
  drop.
- **No roll-up file.** `closure-readiness` computes the matrix from the entries themselves, and a
  hand-maintained copy of it drifts.

### When `Resolution` is required, and what value an entry takes — `D-204`

**`Resolution` is REQUIRED on an entry whose `Status` is `Answered` and whose `Kind` is not
`turn-report`.** It was advisory until now: the check counted a missing one and passed, which is
how entries reached a state with no route out. **An `Open` entry needs none** — it has not been
answered yet, and a control that fires on the normal case is one people stop reading (`D-83`,
`D-90`).

**An entry with several children takes the WEAKEST of their dispositions**, and closes when the
weakest closes. The ordering is **absent < `PROVISIONAL` < `TERMINAL`**, and those two sets are
defined in `scripts/checks/closure-readiness.mjs` — **cited here, never restated.** A second
ordering written in prose is how a rule and its check diverge (`G55`).

**Child dispositions live in the entry body. Header fields describe the WHOLE entry only.**
`Superseded-By` and `Follow-up-Tier` are coupled to the entry-level `Resolution`, so a terminal
label belonging to one child, written as a header field, sits under a provisional resolution and
**no check sees the mismatch**. Record each child disposition in a table in the body, naming what
overtook it or who owns it, and leave the header fields to the entry as a whole.

### `Resolution` is the record state; `Verified-By` and `Verified-At-Commit` are AUDIT FIELDS — `D-205`

**Judge ruling, 2026-09-08.** Treating `Verified-By` as belonging to the `Verified` state was a
**conflation of audit fields with record state**, and it is why entries left them blank whenever the
state was anything else.

| Field | What it is |
|---|---|
| **`Resolution`** | the **record state** — `Applied`, `Verified`, `Deferred`, `Withdrawn`, `Superseded` |
| **`Verified-By`** | **audit** — who dispositioned this record |
| **`Verified-At-Commit`** | **audit** — the commit where that disposition is observable |

**The audit fields are never empty, in any state**, and they carry **only** their value: an actor, and
a commit that exists. **No explanation goes in either field** — that is what the body is for, and a
sentence in a metadata field is the same conflation one field over.

**Mandatory in every `Resolution` state — and that is a STATE rule, not a KIND rule (`D-206`).**
`Verified-By` and `Verified-At-Commit` are filled whatever the record state is, `Applied` included.
**A `Kind: turn-report` is excluded, and by a different axis:** it carries no `Resolution` at all, so
it has no state to be *regardless of*. `handoff-response` **fails** a turn report carrying either
field, even blank (`G84`, `D-123`). **State and kind are separate axes; reading the mandatory rule
onto kind would fail every turn report in the channel.**

**On a record that is not `Verified`, `Verified-By` reads exactly:**
`— not independently verified; dispositioned by Lane A`.
One form, so a reader can tell *not verified* from *forgotten* — the distinction that makes `Applied`
worth having at all.

**The field names are now a misnomer** and are kept deliberately: renaming them would move
`channel-docs`, `closure-readiness`, the fixture runner and every entry at once. **Recorded as
`C-40`**, not paid here.

### Who may record `Verified` — the boundary attaches to the ANSWERER

**The excluded actor is the one who answered or applied the correction.** Raising an entry does not
disqualify you from verifying someone else's fix to it, and the external draft that said otherwise
would have invalidated a closure this channel has already performed correctly: **`B-078` was raised
by Lane B, answered and applied by Lane A, then verified by Lane B** — as its own record states,
*writing the review criteria and raising this entry do not make Lane B the answering/applying actor.*

Inverting this is expensive in a specific way. Excluding the raiser unnecessarily removes an
otherwise eligible reviewer and **may leave no available independent reviewer at all**. It never
makes the answerer or the implementer eligible to verify their own correction — that remains the
self-verification `D-102` created `Applied` to prevent. And **eligibility alone does not prove that
verification was performed**: the table below says who *may* sign, never that anybody has.

| Actor | May answer | May record `Applied` | May record `Verified` |
|---|:---:|:---:|:---:|
| The raiser, who did not answer or apply | — | — | **yes** |
| The lane that answered or applied | **yes** | **yes** | **no** |
| Any other named actor | — | — | **yes** |

**A different method is not a different actor.** Re-running the same check by another route
strengthens the evidence and changes nothing about who is eligible to sign it.

### What graph evidence proves, in an `Evidence:` line

The rejected draft carried a single `Graph-complete` state. The graph has no such state, and
collapsing it is how a green run gets read as semantic parity:

| The claim | What proves it | What it does NOT prove |
|---|---|---|
| Extraction is current | `docs-drift` — `lastAnalyzedHead` equals `HEAD` | that any document is described correctly |
| Every document is represented | `graph-coverage` — no markdown under `docs/` is absent | that the node says anything true about it |
| A **named** fragment's curated content matches the graph | `merge7.js <that fragment> --verify-only` | that any *other* fragment matches |
| Descriptions are filled in | `graphify check-update` reports none pending | anything about the rows above |

Name the one you have, and name the fragment. **Two near-misses are worth stating outright, because
both were committed in the pass that wrote this section** (`B-079`): `merge7.js --all` audits
*conflicts between fragments* and is **not** parity with the graph; and a **rising total node count
does not prove curated survival** — a rebuild can add extracted nodes while dropping a curated one,
and the total still goes up. `docs-drift` reports `PASS synced` against a modified working tree and
always has — it compares revisions, never content.

### Worked scenarios

Each is a case the rejected draft would have got wrong.

| Scenario | Correct handling | Rule |
|---|---|---|
| The raiser wants to verify a fix someone else applied | Permitted. Record `Verified-By` naming them, and a `Verified-At-Commit` that exists | *Who may record `Verified`* |
| A real concern that will not be actioned this cycle | `Resolution: Deferred` with `Follow-up-Tier`. Terminal **without** an implementation — a deferral is a disposition, not a delay | *Response is not closure* |
| Lane B and Lane C send conflicting evidence about one item | Preserve both, and first test whether their scope or revision differs — separate-surface observations may both hold. For a genuine derived-tier conflict apply `D-58`: the Register decides, and **if the Register is silent, escalate — that silence is itself the finding.** Non-blocking status does not resolve a contradiction, though independent in-scope work carries on | `D-58` |
| The answer needs an investigation nobody has done | Keep the entry. Name the next question, its owner, the evidence that would settle it, and the condition to stop. A new entry only for genuinely new scope | *This directory is the backlog* |
| Every check is green and the claim is still unproven | Green is arrival, not correctness. Say what the run covered and what it could not see | *What it does not do* |

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
