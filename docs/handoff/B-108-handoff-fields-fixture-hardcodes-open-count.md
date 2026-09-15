# B-108 — `handoffFields()` fixture hardcodes the live open-entry count

- **Raised:** 2026-09-15 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** a green complete fixture suite and terminal verification of B-107; does not block B-107's independently passing `phaseScope()` cases, Product planning, or later separately authorized application work
- **Status:** Answered
- **Lane A:** **Acknowledged; scoped repair applied, terminal verification pending the clean
  complete-suite run, 2026-09-15.** `handoffFields()` in
  `scripts/fixtures/suites.mjs` is repaired per this entry's exact five-point guide: a new
  `openBaseline()` helper counts live Open entries the same way `handoff-response.mjs` counts them
  (`^Open\b` against `Status`), called once to capture `baseOpen` before the fixture mutates `ENTRY`;
  `expectDetail: "1 open"` is replaced with `` `${baseOpen + 1} open` ``, and the existing
  `expect: "present but BLANK"` assertion is unchanged, so the case still proves both detection and
  counting. No literal `11`, `12` or `13` appears in the assertion. `handoff-response.mjs` is
  untouched — its `12`/`13`-open result under mutation was already correct. Isolated run of
  `handoffFields()` alone shows the target case passing (`detail reports "13 open"`); the full suite
  and byte-for-byte restoration are confirmed separately once this acknowledgement itself stops
  contributing an unread-entry finding to the other cases in the same group.
- **Resolution:** Verified
- **Verified-By:** Lane B
- **Evidence:** independent clean-tree `bun run check` 17/17 and `bun run fixtures` 95/95; `handoff metadata and closure fields` 37/37; working tree restored
- **Verified-At-Commit:** 2a6554284ccedd03b63ece89da38247f53bb129b

## What happened

Lane B independently reran the complete fixture suite after Lane A's B-107 repair. The repaired
`phaseScope()` group passes 3/3 and restores its files, but the suite finishes 86/87 because
`handoffFields()` still asserts `expectDetail: "1 open"`. The mutation correctly adds one unread
Open entry. The live channel already contains other Open entries, so the checker truthfully reports
the total changing from 11 to 12 and the fixture rejects that correct result.

This is the same failure class already documented beside `channelBaseline()` and `runFacts()`:
a fixture copied a mutable corpus tally instead of asserting the relationship caused by its own
mutation. The externally suggested task `task_cc895751` describes the issue, but an external task is
not a canonical handoff record and cannot be acknowledged, dispositioned, or verified by this
repository's controls.

## What you need

Lane A Code should repair only the `handoffFields()` fixture; no checker, Product document,
workflow, application file, or Graphify meaning changes unless the corrected fixture exposes a
separate defect.

1. Extend `channelBaseline()` to derive the live Open count using the same lifecycle distinction
   the handoff-response check applies, or obtain the baseline from the check's own unmutated detail
   output and parse its Open count.
2. Before mutation, record `baseOpen`.
3. Replace `expectDetail: "1 open"` with an assertion for `baseOpen + 1` Open entries.
4. Keep the existing `expect: "present but BLANK"` assertion so the case proves both detection and
   counting.
5. Run the isolated `handoffFields()` group if supported, then the complete fixture suite from a
   clean tree. Confirm the target case passes and the tree restores byte-for-byte.
6. Record the applied commit here. Lane B then performs the independent full-suite read needed to
   determine whether B-107 and B-108 can become `Verified`.

Do not hardcode the current value `11` or `12`; that would reproduce the defect at a later backlog
size. Do not change `handoff-response.mjs` merely to satisfy the fixture: its 12-open result under
the mutation is correct.

### Failure-derived completion evidence

- the same corpus that currently reports 11 Open entries produces an expected 12 under the fixture
  mutation without any literal `11` or `12` in the assertion;
- the unread-entry case still fails if the checker detects the blank Lane A field but does not add
  the entry to its Open count;
- all 87 fixtures behave as intended on a clean tree;
- the working tree is identical before and after the run; and
- B-107's `phaseScope()` group remains 3/3.

## What you did instead

Stopped at the planning and handoff boundary. No fixture, checker, governed Product source,
application code, workflow, graph fragment, or runtime graph was changed.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve-with-conditions | B-108 bounded fixture repair | Phase 1 — Lane A Code applies; Lane B independently verifies |
| Approve | B-107 scoped `phaseScope()` implementation evidence | Phase 1 — retain 3/3 evidence; terminal closure waits for the complete-suite condition |
| Reject | Hardcoding the present Open count | The fixture must assert `baseOpen + 1` |
| Reject | Changing `handoff-response.mjs` to make this fixture green | Its observed count is correct |
| Defer | Product, workflow, deployment, publication, and Graphify changes | No governed-intent or runtime meaning changed |

## Lane B independent verification — 2026-09-15

Lane B independently ran the complete suites at
`2a6554284ccedd03b63ece89da38247f53bb129b`. The unread-entry case derived the live baseline and
correctly reported one additional Open entry; its blank-Lane-A finding remained active. The
handoff group passed 37/37, the full fixture suite passed 95/95, every consistency check passed,
and the harness restored the working tree byte-for-byte.
