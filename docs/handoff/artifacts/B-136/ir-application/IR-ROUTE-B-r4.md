# IR route addendum B r4 — proposed timing amendment: the IR batch does not carry `D-437`, 2026-10-15

**r4 delta:** cross-references by role; versions bound by the package manifest (application act §K); slots
`{ACT_FILE}`, `{ACT_SHA}` added. r3 kept.

**Status:** conditional draft; applies only if the Judge **explicitly selects Route B** (D1). r1 (`a39409ba…`) kept.
**r2 delta:** the r1 fallback ("Route A applies") is removed (supplied Lane B audit, G1); slot values are frozen.

## 1. Composition of the `D-438` body under Route B

Body = the `D-438` body with these slot values, and no other change:

| Slot | Value |
|---|---|
| `{SEC}` | `5.14e262` |
| `{DATE}` | the recording date, `YYYY-MM-DD` |
| `{AUTH_QUOTE}`, `{D1_QUOTE}`, `{J1_QUOTE}`, `{J2_QUOTE}` | the Judge's chat words, verbatim, as given |
| `{ROUTE_B_ITEM_0}` | the block in §2, with `{AMEND_QUOTE}` = the Judge's verbatim selection of the amendment |
| `{ACT_FILE}`, `{ACT_SHA}` | from the package manifest |
| `{SETUP_CLAUSE}` | `none; D-437 is not recorded in this batch` |

## 2. `{ROUTE_B_ITEM_0}` block

> **0. Registration timing.** The Judge, {DATE}: **"{AMEND_QUOTE}"**. Clarification 2 of 2026-10-14 ("`D-437` is recorded
> with the next governed batch") is amended for this batch only: `D-437` is recorded with the next governed batch that
> changes setup or `V1-SM05` entry text (for example C2–C5 canonical application or the SM05 entry act; r10 Part 7).
> This documentation-repair batch does not carry it. `D-437` keeps its number, content (r10 Part 7), owner and
> transaction chain. The setup unit keeps running under `D-183` rule 2, "pending durable registration".

## 3. Successive states (Route B)

| After | Register | Build Spec | Five IR files |
|---|---|---|---|
| S0 (bound) | blob `b8fe07ff…` | blob `d8f09bac…` (not touched) | §C blobs of the application act |
| Act commit | `b8fe07ff…` bytes + "\n" + composed body, appended at end of file; expected blob computed at S0 | unchanged | unchanged |
| Applying commit | unchanged from the act commit | unchanged | the application act §E expected blobs |

## 4. Effect, risk and limit

- IR tier set as in the body; **Build Spec unaffected** with the accepted reason. `D-438` is recorded before `D-437`; no
  check requires ascending order.
- The setup authority stays "pending durable registration" for longer; its authority, credit rule and readiness state
  do not change.
- **If the Judge does not select Route B: stop. Neither route is selected. The existing `D-437` commitment stays as
  recorded.** Route A needs its own explicit selection.
