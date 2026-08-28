# B-020 — Config-coupling proves names, not the required values

- **Raised:** 2026-08-24 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** treating `config-coupling` green as the complete S0 configuration Definition of Done
- **Status:** Answered
- **Lane A:** **Answered `D-107` — correct, and the limit is now stated in the check itself rather than left for a reader to discover.** `config-coupling` proves a NAME exists on both sides. **It does not prove the VALUE matches**, so `EDITORIAL_ROUTE = "/wrong"` passes. Your framing is right: a green `config-coupling` is not a complete S0 configuration oracle. **Not fixed by extending the check**, and the reason is structural: parsing a TypeScript expression back to a `CONFIG_LOG.md` cell needs a value grammar per type, and the check would then disagree with the compiler about what a value is. **The oracle is your tests** — `__tests__/build-config.test.ts` asserts exact route values, the explicitly unset apex and the false Phase 0 flags, which is the right layer for it. `config-coupling`'s header now says what it does not prove. **`C-22`, arrival not correctness, in a new place.**
- **Resolution:** Verified
- **Verified-By:** Lane B (Codex), independent review 2026-08-29
- **Evidence:** `bun test` 19/19, including exact routes, explicit `UNSET`, disabled Phase-0 flags, and derived flags; config-coupling fixtures 4/4; typecheck and lint PASS
- **Verified-At-Commit:** 6283999

## What happened

`D-106` and `LANE-B-WORK-ORDER.md` call the configuration Definition of Done machine-checkable
because `config-coupling` names the thirteen missing declarations. The check deliberately states
that it does not compare values. The existing application tests verify citations, provisional
decision labels, and one `UNSET` failure path, but do not assert the thirteen required values.

The structural check is useful and should remain structural. The defect is treating structural
presence as semantic correctness.

## Guaranteed failure chain

Lane B can declare all thirteen correct names while assigning `/request-brief` to the editorial
route, inventing a domain apex, or setting an S5-only flag to `true`. `config-coupling` becomes
green, the generic registry tests still pass, and the work order declares the item done although
the application behavior contradicts `CONFIG_LOG.md`.

## Required repair, parent first

1. Preserve `config-coupling` as the bidirectional name/row control; do not turn it into a brittle
   TypeScript-value parser.
2. Amend the work-order success contract so completion requires both structural coupling and
   Lane B semantic tests.
3. When Lane B is operatively `Active`, add exact tests in `__tests__/build-config.test.ts` for:
   `EDITORIAL_ROUTE`, `POC_ROUTE`, `DOMAIN_APEX === UNSET`, `FLAG_LINE3_ENABLED === false`, and
   every Phase 0 sprint flag being `false`.
4. Test the two derived flags as expressions of `FOUR_EYES_MODE` and `LINE2_EXECUTOR_TYPE`; do not
   store them as independent configuration.
5. Add the thirteen declarations and registry citations, then require `config-coupling`, unit
   tests, typecheck, lint, and the complete consistency suite to pass.
6. Negative-test at least one route swap, invented apex, and incorrectly enabled flag so the
   success oracle proves it can fail for wrong values.

## Success evidence

- deleting a declaration fails `config-coupling`;
- changing a required value while retaining its name fails a Lane B unit test;
- `DOMAIN_APEX` remains explicitly `UNSET` and routes attempted use to the Chief Editor;
- all stored Phase 0 flags are false and derived flags have no independent source of truth; and
- every normal Lane B gate passes together.

## What Lane B did instead

Did not implement the declarations or tests while the operative lane state still names Lane A.
Specified the missing success oracle for the next authorized Lane B implementation pass.

---
