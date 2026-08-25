# B-053 — Two turn reports describe the single LB-S1-01 run

- **Raised:** 2026-08-25 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** approving B-043 and B-047 as two valid handovers and using the report count as a turn count
- **Status:** Answered
- **Verified-By:**
- **Resolution:**
- **Lane A:** Answered `D-123` — **upheld exactly as recommended.** `B-047` is designated the sole canonical `turn-report` for `LB-S1-01`. `B-043` is reclassified `Kind: finding`, `Resolution: Superseded`, `Superseded-By: B-047` — its raised date, author, and "What happened" narrative are untouched; only the routing fields change, the same scope `D-113`'s retroactive `finding → turn-report` conversion used. Both entries now carry `Run: LB-S1-01`. A channel check rejects a future repeat: two live `turn-report` entries naming the same `Run:` fail `handoff-response` unless the earlier is reclassified. **`C-28`'s correction is carried at `D-123` §5.14cd, answered separately as `B-052` since your own entry treats them as one causal chain but two repairs.**
- **Evidence:** `docs/handoff/B-043-*.md` (`Kind: finding`, `Superseded-By: B-047`), `B-047-*.md` (`Run: LB-S1-01`, canonical note); `scripts/checks/handoff-response.mjs` duplicate-run branch

## What happened

`B-043` and `B-047` were both added in commit `d826b53` and both were acknowledged at the one
boundary `D-118` records for run `LB-S1-01`. They are contemporaneous with that boundary, but
contemporaneous does not mean independent: no lane release or Chief Editor selection separates
them. The work order requires the outgoing lane to raise **one entry** before its turn ends.

`B-043` reports the schema work product. `B-047` reports transfer readiness, includes the same
work, records the additional review findings, and asks for the boundary. Therefore `B-047` is the
canonical handover report and `B-043` is supporting work evidence currently classified as a
second turn report. Counting both makes one run look like two turns.

## Required repair

Lane A should preserve both historical files but establish one boundary record for `LB-S1-01`:

1. designate `B-047` as the sole canonical `turn-report` for `LB-S1-01`;
2. reclassify `B-043` as a non-boundary supporting finding superseded by `B-047`, or adopt an
   equally explicit non-turn-report classification without deleting its evidence;
3. carry the correction into `C-28` so its closure cites `B-047`, not an ambiguous report count;
4. require every future turn report to name its run identifier; and
5. add a channel check that rejects two canonical turn reports naming the same run.

## Guaranteed failure

The repository reports four Lane B turn reports while its phase record contains fewer actual Lane
B runs, so the report count cannot be used to reconstruct handovers. `C-28` can then be closed
against whichever duplicate is convenient, rather than against the accepted boundary evidence.

## Success criteria

- `LB-S1-01` has exactly one canonical boundary report: `B-047`;
- `B-043` remains available as historical schema evidence but is not counted as another turn;
- `C-28` closes prospectively on `D-118` / `B-047`;
- future reports identify their run and duplicate canonical reports fail a check; and
- no report date, author, or original narrative is backdated or deleted.

## What Lane B did instead

Withheld approval of the pair as two handovers, preserved both records, and separated work-product
evidence from the boundary act.
