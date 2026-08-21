# Handoff — how Lane B talks back

`D-75` requires a handoff at every lane boundary — *"record what is done, what is
specified-not-applied, and what is open, then stop"* — and named **no location for it**.
This directory is that location (`D-90`).

## Why it exists

Lane B's surface is `app/`, `lib/`, `components/`, `supabase/`, `__tests__/`. **Nothing in
`docs/`.** Before this directory existed, Lane B could not report a spec defect or request a
dependency without editing `docs/`, which is an A+B crossing that `.githooks/commit-msg` now
blocks. **Lane B could not speak without crossing.**

## Ownership — deliberately none

`docs/handoff/` is **unmapped**: it belongs to no lane. Lane B writes entries; Lane A writes
responses; neither is a crossing.

That is not an oversight. Assigning it to Lane B would mean **Lane A's reply — which normally
lands with the doc update it triggers — became a crossing on every use.** The channel would
fight the gate on its own intended purpose. `G63` and `D-85` both settled the same principle:
**a genuinely joint surface should not be attributed to one owner.** `lane-boundary` reports
unmapped paths in its detail line, so nothing here is invisible.

## Raising an entry — Lane B

Copy `TEMPLATE.md` to `B-NNN-<short-slug>.md`, using the next free number. **One file per
item** — not a shared log. A single append-only log would mix append-only entries with
current-value status fields, which is exactly the mixed-file trap `G63` recorded.

**Then stop and continue with other work if you can.** A blocked entry is a request, not a
negotiation. `D-86`: Lane A provisions, Lane B builds.

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
