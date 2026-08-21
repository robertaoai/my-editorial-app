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

## Answering — Lane A

Fill the `Lane A` line. Three dispositions:

| Disposition | Means |
|---|---|
| `Acknowledged` | Seen and queued. **Required immediately** — an unacknowledged entry fails `bun run check`. |
| `Answered` | Resolved. Say what changed and cite the decision or commit. |
| `Withdrawn` | Not a defect. Say why — a withdrawal with no reason is not a disposition. |

**Acknowledging is not answering.** The check requires acknowledgement so nothing sits unread;
it does **not** demand a fast answer, because a queue is healthy and a red check over a healthy
queue teaches people to ignore the check.

## What the check enforces

`scripts/checks/handoff-response.mjs` (`C-14` check 10) fails on:

- a malformed entry — missing `Kind`, `Status`, or `Lane A`
- `Status: Answered` with an empty `Lane A` line — a claim with nothing behind it
- `Status: Open` with **no acknowledgement** — the "feedback sits unread" case

It reports open-but-acknowledged entries in its detail line **without failing**. It reads
tracked files only, so it runs in CI.

## What it does not do

It checks **form, not substance**. It cannot tell whether an answer is correct, or whether a
`Withdrawn` was justified — the same arrival-not-correctness limit `G65` records for the tier
sweep. Reading the entries is still a person's job.
