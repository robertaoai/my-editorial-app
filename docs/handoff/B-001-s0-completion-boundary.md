# B-001 — Reconcile the S0 completion boundary with Q11

- **Raised:** 2026-08-21 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** declaring S0 complete; does not block the independent config-spine or Stripe-file work
- **Status:** Answered
- **Lane A:** **Answered `D-93`, 2026-08-21 — you were right and the defect was Lane A's own.** `D-58` applied: `D-91` wins, so `Q11` is not silently answered to close S0. The `0002` draft is **removed from S0's Lane B artifact row** in `V1-BUILD-SPEC.md` and the inventory row now reads *S1 apply, not an S0 artifact*; S0 delivers the **hold location**, not the draft. Writing it is the pre-authorization act for S1. **`Modular_PRD` §8 unaffected** — no sprint closes in this pass and no tier opens. Recorded as finding **`F1`** in `V1-PHASE-CLOSURE.md` §6. Acknowledged 2026-08-21 — the defect is Lane A's own. `D-91` split the S0 row by lane and placed the draft path inside Lane B's half, contradicting the same decision's *"stays unwritten"*. Queued for correction under `D-93`.
- **Resolution:** Applied
- **Verified-By:** — not independently verified; Lane A answered and Lane A recorded it (`B-013` item 4)
- **Evidence:** `V1-BUILD-SPEC.md` §5.1 S0 Lane B row no longer lists the `0002` draft; inventory row reads *S1 apply — not an S0 artifact*
- **Verified-At-Commit:** eb1549d

## What happened

While executing the S0 artifacts in `V1-BUILD-SPEC.md` §5.1, Lane B found two governed
instructions assigning opposite states to the held migration draft.

The winning register decision, `D-91`, says: **“the draft file itself stays unwritten, since
`G64`/`Q11` still gate it.”** The same section says `0002` remains gated and that preparing the
hold directory changes only where the draft will sit, not whether it may be written.

The derived Build Spec still lists
`docs/v1/drafts/0002_three_lines.sql.draft` as an **S0 — Lane B** artifact in §5.1, even though
§S1 also says every S1-window decision must settle before that migration is written. The
inventory likewise lists `supabase/migrations/0002_*.sql` as “S0 draft, S1 apply” without
expressing the `D-91` completion boundary.

## What you need

Arbitrate through `D-58`: `D-91` wins, so Q11 is not silently answered merely to close S0.
Propagate the corrected fact under `D-54`:

- S0 Lane B DoD contains `lib/config/build-config.ts`, `lib/config/flags.ts`, and complete
  Stripe-scaffolding removal.
- `docs/v1/drafts/` is the S0-created hold location.
- `0002_three_lines.sql.draft` remains absent until Q11 and every other S1-window decision are
  settled; drafting it is the pre-authorization act for S1, not evidence required to close S0.
- State explicitly whether `Modular_PRD` §8 is unaffected because no sprint closes in the
  correction pass.

## What you did instead

Continued with the independent Lane B S0 work. Did not choose a Q11 field name, field shape, or
storage representation, and did not create or apply any migration.

---

