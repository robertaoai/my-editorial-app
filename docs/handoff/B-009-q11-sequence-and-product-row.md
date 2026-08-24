# B-009 — Resolve Q11 before the 0002 draft and repair its stale product row

- **Raised:** 2026-08-22 by Lane B
- **Kind:** blocked-on-decision
- **Phase:** 1
- **Blocks:** drafting or applying migration 0002
- **Status:** Answered
- **Lane A:** **Answered `D-96`, 2026-08-22 — the design direction you asked for, as a Lane A proposal awaiting the Judge's pick.** You were right to stop: the shape was genuinely undecided and coding against a guess is what `G64` exists to prevent. **Two shapes, and only one survives `G-02`'s arithmetic.** *Shape A* — rename to a boolean `line_boundary_crossed`, which is what the sprint plan's S1 migration line selects **by default if nobody decides**. *Shape B* — a three-value status column matching `FR-05`: `satisfied` | `not_applicable` | `override_not_four_eyes`. **Lane A recommends Shape B, and the reason is arithmetic rather than preference.** `G-02` is defined as *T5/T6 crossings without Line separation, **excluding logged overrides***. Excluding logged overrides requires telling `not_applicable` and `override_not_four_eyes` apart — **and a boolean maps both to `false`.** Under Shape A, `G-02` cannot be computed from its own declared Data Source and would need a second column that Data Source does not name. **Shape B needs no second column**; a crossing boolean, if any reader wants one, is a derived view over it — never a stored duplicate (`CONFIG_LOG.md` §7.2's rule). **On the sequence contradiction you identified — you were right, and it is now resolved in one direction.** *Deferred past S1* and *must resolve before the `0002` draft* cannot both govern: **the draft is the earlier event.** `V1-BUILD-SPEC.md` now says S0 creates **only** the hold location, no draft exists before `Q11` and the whole S1 window settle, and moving the approved draft into the apply set **is** the S1 authorization act. **`C-23` stays open by design.** The `Modular_PRD` `Q11` row is stale — withdrawn `NFR-03` limb, `Q10` still named as a blocker — and Lane A still will not edit it, because rewriting an open decision request is answering it by edit. **It is corrected in the same pass the Judge picks a shape.** — Acknowledged and dispositioned — **Partly answered `D-95`, 2026-08-22 — the two document defects are fixed; the decision is escalated.** `V1-BUILD-SPEC.md` line 91 no longer assigns drafting `0002` to S0: **S0 creates only the hold location**, no draft exists before `Q11` and the whole S1 window settle, moving the approved draft into the apply set **is** the S1 authorization act, and `AP-01`'s migration carries **editorial audit fields only, never POC commerce fields**. **The `Modular_PRD` `Q11` row is stale and Lane A is deliberately NOT fixing it** — it states a *decision request*, and rewriting what it says while the decision is open is **Lane A answering `Q11` by edit**. Recorded as **`C-23`**: visible, untouched, and corrected in the same pass as the decision. **The field shape is the Chief Editor's call** — or an explicit deferral of the whole `0002`/S1 window. You are right that *deferred past S1* and *must resolve before the draft* cannot both govern one sequence; only a decision resolves it. **Status stays `Open`.** — Acknowledged 2026-08-22. The two document defects are confirmed and are Lane A's to fix: `V1-BUILD-SPEC.md` line 91 still assigns drafting `0002` to S0 against its own artifact row, and the `Modular_PRD` `Q11` row is stale. **The field-shape decision itself is the Chief Editor's and is escalated, not assumed.** Queued under `D-95`.
- **Resolution:** Applied
- **Verified-By:** — not independently verified; Lane A answered and Lane A recorded it (`B-013` item 4)
- **Evidence:** `D-97` decided the three-value shape; `Modular_PRD` §10 corrected and `C-23` closed; `V1-BUILD-SPEC.md`'s superseded boolean-fallback paragraph replaced under `D-101` (raised again as `B-012`). **The naming half remains open and is recorded as open, not as answered**
- **Verified-At-Commit:** 983f058

## What happened

Q11 remains undecided. The register simultaneously says Q11 is deferred past S1 and that G64/Q11
must resolve before migration 0002 is drafted. Those statements cannot both govern the same
sequence because S1 cannot safely draft or apply the migration before the field shape is chosen.

V1-BUILD-SPEC.md line 91 still assigns drafting 0002 to S0, while its later S0 artifact section
says the draft is not an S0 artifact. The Product PRD Q11 row also retains the withdrawn
NFR-03 inference limb and still names Q10 as a blocker after Q10 was decided.

## What you need

The Chief Editor should select one Q11 field shape, or explicitly defer the whole 0002/S1 window
until that decision is made. Lane A then updates the owning Product Requirements row and
propagates the sequence:

- S0 creates only the migration hold location;
- no 0002 draft exists before Q11 and the complete S1 decision window settle;
- the approved draft moves into the apply set as the S1 authorization act; and
- AP-01's migration contains editorial audit fields only, never POC commerce fields.

Remove the contradictory S0 drafting sentence and correct the stale Q11 product row.

## What you did instead

Did not create a draft or migration and did not modify 0001_init.sql.

---
