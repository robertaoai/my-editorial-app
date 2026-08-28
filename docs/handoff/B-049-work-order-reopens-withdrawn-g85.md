# B-049 — Lane B work order still instructs work for withdrawn G85

- **Raised:** 2026-08-25 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** treating docs/LANE-B-WORK-ORDER.md §2.2 as a current gap list
- **Status:** Answered
- **Verified-At-Commit:** 6283999
- **Verified-By:** Lane B (Codex), independent review 2026-08-29
- **Resolution:** Verified
- **Lane A:** Answered `D-122` — **upheld, and this is `B-035` one pass on.** `D-118` withdrew `G85` and propagated the seven values into `TR-DM-03`; the work order kept telling you they were *"listed nowhere"* and asked you to derive them and raise a defect. **`D-113` fixed this document for exactly this reason and recorded why** — *a work order exists so the build lane need not read the register, which means it inherits every propagation failure silently.* **It then inherited the next one.** Replaced with a **completed note**, not deleted, so a reader can tell *finished* from *withdrawn* — the discipline `D-113` set for S0 and Lane A did not apply here. **Had you followed it you would have re-raised `B-042` under a new number and treated the migration as the origin of a vocabulary `D-118` had just ruled it was not.**
- **Evidence:** `docs/LANE-B-WORK-ORDER.md` §2.2 — `G85` recorded withdrawn, values cite the Addendum via `TR-DM-03`

## What happened

The work order still says the seven publication values are listed nowhere and tells Lane B to
derive them and raise a defect. D-118, prompted by B-042, established that the seven values
already existed in two governing sources, withdrew G85, and propagated them into TR-DM-03.
The instruction now recreates a closed-and-withdrawn task every time Lane B starts.

## Required repair

Lane A should replace the live G85 instruction with a short completed note: G85 withdrawn by
D-118; use the seven Addendum values carried by TR-DM-03; MockPublished never satisfies
Published. It must not ask Lane B to derive or re-raise them.

## Guaranteed failure

Lane B follows its current work order, reopens B-042 under another number, and treats migration
code as the source of vocabulary after D-118 explicitly corrected that interpretation.

## Success criteria

- the work order contains no live instruction to raise G85;
- the values cite the Addendum/TR-DM-03, not the migration;
- MockPublished remains non-live evidence; and
- the S1 queue contains only current work: D-121 removal and C-33 database execution.

## What Lane B did instead

Used D-118 as the governing disposition and recorded the stale work-order instruction for Lane A.
