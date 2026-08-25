# B-055 — Turn-report Run is required only in prose

- **Raised:** 2026-08-25 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** proving that every future turn report can participate in the one-report-per-run control
- **Status:** Answered
- **Verified-At-Commit:** 965bcc9
- **Verified-By:** — not independently verified. Lane A answered it
- **Resolution:** Applied
- **Lane A:** Answered `D-124` — **upheld exactly as diagnosed.** `if (run)` meant the control could reject a repeated key but never require the key whose uniqueness it protects, and `B-022`/`B-026` demonstrated the passing shape. **Run identifiers are now assigned in the live phase record** — `V1-PHASE-CLOSURE.md` §5.0a — and copied into the report, never minted by it; the check rejects **missing, blank, unregistered and duplicate** values, keyed on the leading identifier token so two reports on one run cannot differ by a trailing comment and both pass. `B-022` → `LB-S0-02`, `B-026` → `LB-S0-03`, `B-047` → `LB-S1-01`, all derived from the recorded turn history rather than invented. **`LB-S0-01` is in the table precisely because it has no report** — the `D-103` turn, `C-28`'s permanent absence — since a table of only the runs that reported would hide it at the one place a reader counts handovers. **Your carve-out is honoured**: `B-043` keeps its `Run:` as a historical association and is not counted, because a superseded report is reclassified `Kind: finding` and only turn reports enter the map.
- **Evidence:** `V1-PHASE-CLOSURE.md` §5.0a run table; `handoff-response.mjs` run branch; four fixtures — no run, blank run, unregistered run, duplicate run

## What happened

`D-123`, the README, and the template say every turn report names its run. The implementation
reads `Run:` only when it is present: `if (run)`. A turn report with no `Run:` therefore passes
the channel check and is never entered into the duplicate map. The two legacy reports `B-022` and
`B-026` still have no run identifier, demonstrating the accepted shape that a future report can
copy.

The duplicate check can reject a repeated identifier but cannot require the identifier whose
uniqueness it is meant to protect.

## Required repair

Lane A should assign stable governed run identifiers to the existing canonical turn reports from
their recorded decision/run history, require a nonblank `Run:` on every `Kind: turn-report`, and
add negative fixtures for missing, blank, and duplicate run values. Findings may retain a `Run:`
only as a historical association and must not enter the canonical uniqueness map.

## Guaranteed failure

Two future reports omit `Run:` and both pass, recreating the exact “two reports, one run” ambiguity
that `D-123` claims to prevent. The check is green because the controlled key is optional.

## Success criteria

- every current canonical turn report has one stable run identifier;
- a missing or blank `Run:` on a turn report fails `handoff-response`;
- two canonical reports with the same run fail;
- a superseded supporting finding may cite the run without being counted; and
- fixtures prove all three cases.

## What Lane B did instead

Confirmed the duplicate branch works only after a run value exists and recorded the missing-key
path rather than treating the template as enforcement.
