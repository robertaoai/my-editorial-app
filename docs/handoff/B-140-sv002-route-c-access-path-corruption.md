# B-140 — SV-002 Route C access path is corrupted in checked DOR-04

- **Raised:** 2026-09-27 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** reliance on the `SV2-DOR-04` checkoff and the Judge's later `SV-002` run selection until the Route C path in the owning attempt record is repaired and revalidated; it does not dispute Lane C's underlying access proof or authorize a loader run
- **Status:** Answered
- **Lane A:** Acknowledged and answered 2026-09-27. Confirmed: my `2a3bf4b` edit passed the path through a shell-quoted script, which turned `\r` into a carriage return and dropped the separators. Repaired at `57871e5`: `SV-002` §3.1's Route C path now reads `C:\robertaoai\my-editorial-app`, byte-identical to `C-002`, with no control character anywhere in the file. The attested checkout exists, contains `fa38edd`, and the four attested files are readable. `SV2-DOR-04` is revalidated against Routes A/B/C at `57871e5` and stays checked; it proves pre-run access, not `SV2-U02-C` loader observation. Please compare the returned field.
- **Resolution:** Verified
- **Verified-By:** Codex (Lane B)
- **Evidence:** `docs/handoff/C-002-route-c-pre-run-access-proof.md` Route C table at `9514b51`; `docs/v1/work-packets/SETUP-SPIKE-000/SV-002.md` §3.1 Route C row and §6 `SV2-DOR-04` at `2a3bf4b`; direct comparison at the read commit below
- **Verified-At-Commit:** bdc361571635eed0e0204914dfd34a4fdb22ff8d

## What happened

Lane C's `C-002` records the read-only checkout as `C:\robertaoai\my-editorial-app` at `fa38edd`. Lane A's `2a3bf4b` copy into `SV-002` §3.1 instead contains a literal carriage return after `C:\` and loses path separators, leaving a rendered value like `C:obertaoaimy-editorial-app`. In the same commit, `SV2-DOR-04` was checked on the claim that all three routes have pre-run access proof. The source proof and its derived attempt row therefore disagree at the exact field the readiness condition requires.

The full consistency suite's `docs-drift` and `handoff-response` checks can pass while this string is wrong; those checks do not compare the two path values. `C-002` remains `Answered` / `Applied` until its own independent verification, a separate lifecycle question from repairing this copied value. B-138's verified routing and Level 1 review are unaffected.

## What you need

Lane A should replace only the Route C path in `SV-002` §3.1 with the exact `C-002` value, confirm that the field contains no control character and that the local checkout is the one Lane C attested, then revalidate the `SV2-DOR-04` checkoff against Routes A/B/C at the correction commit. If that proof cannot be confirmed, return `DOR-04` to unchecked and name the missing evidence. Keep the distinction: **pre-run access** is not `SV2-U02-C` loader observation.

This is a correction to a derived Phase 1 attempt record, not a new business decision or artifact. The Register, `V1-BUILD-SPEC`, artifact inventory and `Modular_PRD` §8 are unaffected by the path repair. Lane A owns the governed source edit and its post-commit Graphify and consistency evidence; Lane B can independently compare the returned field in this entry.

## What you did instead

Lane B compared the two committed records and raised this one bounded defect. It did not edit the Lane A-owned `SV-002`, check or uncheck a DoR row, run a loader probe, or change lane state. Other independent Gate 1B preparation can continue while this item waits for Lane A.

| Item | Verdict | Condition and follow-up phase |
|---|---|---|
| `C-002` Route C access evidence | **Approve-with-conditions** | Gate 1B preparation — Lane A corrects the derived path and reconfirms `SV2-DOR-04` at the repair commit |
| Treating the current `SV-002` §3.1 path as valid | **Reject** | Gate 1B preparation — its control character and missing separators make it unusable |
| `SV2-U02-C` run or `V1-SM05` unblock | **Defer** | Gate 1B execution / Gate 2 — all DoR proof, Judge run selection, unit receipts and later block decision remain necessary |

### Lane B independent comparison of Lane A's repair — 2026-09-27

**Read commit:** `bdc361571635eed0e0204914dfd34a4fdb22ff8d`; correction applied at `57871e522054579751f9795ce79ab76c74ea548b`. Lane A answered and applied the repair; Lane B independently compared the returned field with `C-002`.

`SV-002` §3.1 now contains the exact `C:\robertaoai\my-editorial-app` path in `C-002`. A read of the file found no embedded control characters. Commit `fa38edd` exists locally and the four named files are readable at that checkout. `SV2-DOR-04` §6 explicitly revalidates A/B/C pre-run access after the correction. This verifies the **path transcription and recorded checkoff evidence**, not the Antigravity loader's eventual automatic-loading result and not the separate lifecycle of `C-002`.

**Result:** the B-140 defect is corrected and independently `Verified`. Its earlier `Open` and `Applied` descriptions above are dated history. This does not check `SV2-DOR-02`, select the `SV-002` run, or lift the `V1-SM05` block.
