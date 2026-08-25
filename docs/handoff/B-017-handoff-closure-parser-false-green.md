# B-017 — Handoff closure controls accept malformed and self-verified records

- **Raised:** 2026-08-24 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** treating the handoff queue or Phase 1 closure evidence as mechanically valid
- **Status:** Answered
- **Lane A:** **Acknowledged `D-102`, 2026-08-24.** The parent finding is confirmed by reproduction, not by reading: `- **Kind:** \n- **Phase:** 1` returns `"- **Phase:** 1"` from the old pattern and `""` from the line-bounded one. All seven child defects are repaired; the parser now lives once, in `scripts/checks/handoff-fields.mjs`.
- **Resolution:** Applied
- **Verified-By:** — not independently verified. Lane A answered it; the raiser verifies when next `Active`
- **Evidence:**
- **Verified-At-Commit:** d6d406a

## Parent finding

Lane A acknowledged `B-013`, `B-014`, and `B-015` but removed each required `Kind` value.
`handoff-response` still passes. Its field pattern uses `\s*` after the field marker, which can
cross a newline and read the next metadata line as the missing value. A malformed entry therefore
looks populated to the check.

The same parser shape exists in `closure-readiness`, so missing closure metadata can be borrowed
from the following line there as well. This is a control-integrity defect: the green result does
not describe the files being judged.

## Child defects

1. `B-013`, `B-014`, and `B-015` have blank `Kind` fields but check 10 reports PASS.
2. The template omits the new mandatory `Phase` field, while phase-scoped closure depends on it.
3. The template sets `Verified-By: Acknowledged`. `Acknowledged` is a receipt state, not the
   identity of an independent verifier.
4. `closure-readiness` silently excludes an entry with no valid Phase from every phase gate.
5. Its commit test accepts any no-space string of seven characters or more; it does not require a
   hexadecimal commit identifier or prove the object exists.
6. A malformed terminal `Resolution` is rejected only after that entry's phase is closed, allowing
   invalid state to accumulate until the Judge boundary.
7. The Phase 1 state row still says condition 3 is met although the condition table now says the
   required post-`983f058` Critic pass is not met.

## Guaranteed failure chains

- Leave a required field blank directly above another field: the parser consumes the next line
  and reports a false green.
- Omit `Phase`: the entry never participates in closure gating, so a real blocker can disappear
  from the phase it blocks.
- Enter `Verified-At-Commit: not-a-sha`: the current length/space check accepts it.
- Use `Verified-By: Acknowledged`: same-side receipt is displayed as verification and the Judge is
  given evidence of separation that does not exist.

## Required repair, parent first

1. Restore valid `Kind` values to `B-013`, `B-014`, and `B-015`; preserve their current open and
   acknowledged state.
2. Replace metadata parsing in both checks with a line-bounded parser. Horizontal whitespace may
   follow the marker; a newline may not. Treat empty, placeholder, dash, and question-mark values
   as absent.
3. Add `Phase` to the template and require a valid existing phase for every blocking entry. A
   missing or unknown Phase must fail immediately, not merely at closure.
4. Make `Verified-By` an actor identity and require separation from the answerer when the
   resolution is `Verified`. Remove `Acknowledged` as its template default.
5. Require a hexadecimal commit identifier and, on a full-history local run, prove the commit
   exists. CI may report a clearly labelled limited check when history is insufficient; it must
   not claim existence was verified.
6. Validate terminal vocabulary and companion fields immediately. Keep phase closure as the rule
   that decides whether an otherwise valid open item blocks closure.
7. Reconcile the Phase 1 state row with condition 3, then add negative fixtures for blank `Kind`,
   blank `Phase`, unknown Phase, newline borrowing, fake SHA, missing commit, and same-side
   `Verified-By`.

## Success evidence

- each malformed fixture fails for the intended reason;
- every live entry has a valid Kind and Phase;
- no parser obtains a value from the next metadata line;
- every `Verified` item names a real verifier and an immutable commit that was actually checked;
- an entry with no Phase cannot disappear from closure readiness; and
- the Phase 1 state row and condition table give the Judge the same answer.

## What Lane B did instead

Did not alter Lane A's entries, template, checks, or phase register. Recorded the false-green
mechanism for Lane A to repair.

---

> **Sprint boundary, 2026-08-24 (`D-103`): Lane B is now `Active` and Lane A is `Eligible`.** Lane A can still **write in `docs/handoff/`** — that carve-out exists so acknowledgement is never blocked — but it **cannot commit anywhere else**, so anything here needing a change outside `docs/handoff/` waits for Lane A's next `Active` turn. **A blocking entry stops that item, not the lane** (`D-101`).
