# B-002 — Complete authoritative rows for routes and feature flags

- **Raised:** 2026-08-21 by Lane B
- **Kind:** spec-defect
- **Blocks:** `lib/config/flags.ts` and the route-constant portion of `lib/config/build-config.ts`
- **Status:** Answered
- **Lane A:** **Answered `D-93`, 2026-08-21 — correct on both counts, and stopping was the right call.** `CONFIG_LOG.md` §6 now carries the route rows from `D-59`: `EDITORIAL_ROUTE=/editorial`, `POC_ROUTE=/request-brief`, `DOMAIN_APEX` **UNSET by decision** — neither lane holds the root — with `C-15` carried for promotion to distinct origins before the POC handles real client data. §7 arbitrates the flag naming: **the sprint plan's §7 semantic names win** over the §S0 `FLAG_S1`…`FLAG_S9` abbreviation, because §7 carries each flag's definition and enablement condition; the abbreviated form is not a second scheme and must not be implemented. On your third question — **`FLAG_FOUR_EYES_LINE_SEPARATION` and `FLAG_LINE2_HUMAN_PRIMARY` are derived views, not stored values**; storing them beside `FOUR_EYES_MODE` and `LINE2_EXECUTOR_TYPE` would create two sources of truth for one fact, so ratifying `OD1`/`OD2` moves one value, not two. All nine sprint flags are `false` and enable at `S5`, which is out of v1 scope. **Tiers unaffected: `Modular_PRD` §8, `V1-BUILD-SPEC.md`, `V1-ARTIFACT-INVENTORY.md`** — no sprint closed, no artifact created or retired, no sequence moved. Recorded as finding **`F2`** in `V1-PHASE-CLOSURE.md` §6. Acknowledged 2026-08-21 — correct on both counts. `CONFIG_LOG.md` shipped with no route rows and an abbreviated flag list. Routes are already decided (`D-59`); the flag naming needs one arbitration. Queued under `D-93`.
- **Resolution:** Verified
- **Evidence:** `CONFIG_LOG.md` §6 routes from `D-59`; §7 canonical flags with §7.2 derived views. `config-coupling` (check 12) now reads those rows in both directions
- **Verified-At-Commit:** 79bb2a6

## What happened

`CONFIG_LOG.md` says its rows are authoritative, Lane B implements them, and any needed value
without a row must be raised rather than invented. Two required S0 surfaces do not have a
complete authoritative row:

1. `V1-BUILD-SPEC.md` §S0 requires `EDITORIAL_ROUTE`, `POC_ROUTE`, and `DOMAIN_APEX`, but
   `CONFIG_LOG.md` contains no rows for them.
2. `CONFIG_LOG.md` §6 names `FLAG_S1` through `FLAG_S9` without Phase 0 values. The sprint plan
   §7 instead names semantic flags such as `FLAG_S1_CONFIDENCE_FLOOR` and
   `FLAG_S9_AUTO_PASS`. Only `FLAG_LINE3_ENABLED=false` and
   `FLAG_AGENT_ROSTER_MULTI=false` have explicit values. Implementing generic names, semantic
   names, or default-false values would each be a different undocumented choice.

## What you need

Lane A should complete `CONFIG_LOG.md` with:

- authoritative route rows carrying the already-decided values and citations from `D-59`;
- one canonical name for every feature flag;
- the Phase 0 value, source, decision dependency, and enablement condition for each flag; and
- an explicit statement whether the Line-separation and Line-2 flags are stored values or
  derived views of `FOUR_EYES_MODE` and `LINE2_EXECUTOR_TYPE`.

If the canonical flag set changes a governed artifact or sprint sequence, propagate the fact
through the three `docs/v1/` tracking files under `D-54`; otherwise state the unaffected tiers.

## What you did instead

Implemented every complete table row currently present in `CONFIG_LOG.md` and stopped before
inventing route or flag values. No placeholder `flags.ts` was created because file existence
would falsely imply that its required decisions had been implemented.

---

