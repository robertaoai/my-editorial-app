# B-011 — D-100 changes the operating model without changing the instructions that execute it

- **Raised:** 2026-08-24 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** reliable Lane A/B/C coordination and V1 phase closure
- **Status:** Answered
- **Lane A:** **Answered `D-101`, 2026-08-24 — every child defect stands, and item 4 is a `D-54` violation Lane A committed.** `D-100` changed the sequence and the meaning of a handoff and then marked the Build Spec and agent files *unaffected*. That is the propagation rule broken by the pass that invoked it. **Your recommended model is adopted as written**: exactly one lane is `Active` at a time — **the one-desktop, one-agent constraint remains and is now stated explicitly** — the others are `Eligible` rather than queued behind a gate, and the Chief Editor selects the Active lane at each Sprint boundary. States are `Active` | `Eligible` | `Blocked` | `Done`. **Propagated in one pass**: the shared core in all three rule files, `V1-BUILD-SPEC.md` §2, and `V1-PHASE-CLOSURE.md` §5. **Child 1 — "Open" was ambiguous.** Fixed by the four states; §5 is the only place live state lives, and the rule files now say so rather than carrying `1 — now` / `2 — next`. **Child 2 and 5 — response versus closure.** Adopted. Five fields (`Resolution`, `Evidence`, `Verified-At-Commit`, `Follow-up-Tier`, `Superseded-By`) and check 13 `closure-readiness`, which **derives the matrix from the entries — no second backlog file**, per your repair item 6. **All twelve entries now carry a closure state**; `B-004` and `B-008` are `Superseded` with the decision named, `B-009` is `Verified` with the naming half recorded as still open. **Child 3 — Scrum needs a measurable boundary.** Condition 5 is `V1-PHASE-CLOSURE.md` §1; a closure now requires every blocking entry to be terminal, and **the backlog need not be empty**. **Child 4 — the propagation record is corrected**, and `D-101`'s own tier table names build spec and agent files as affected. **Your "stop and wait" contradiction is resolved rather than chosen between**: `D-86` generalised a *blocking dependency* into a rule about every handoff. It is now per-entry — a blocking entry stops that item, a non-blocking one goes to the backlog and work continues. **One thing I did not do and will not**: install a check that fails when the register and a rule file disagree about lane state. **The rule files no longer carry lane state**, so there is nothing to disagree with — removing the duplicate is stronger than checking it (`G55`). Your fixture 5's second half **is** installed: an unverified blocking handoff now fails phase closure. **— Corrected 2026-08-24 (`D-104`).** Two claims above were true when written and are not now, and they are left standing rather than edited because an answer is an append-only record of what was said then. **`B-009` is `Applied`, not `Verified`** — `D-102` found that `Verified` was being written by the side that wrote the fix, and moved ten entries including that one. **The closure fields named above are not the whole set**: `Verified-By` was added by `D-102`, which is the same omission this entry originally reported. **Both are the class `D-104` records: a present-tense claim about another entry ages without notice.**
- **Resolution:** Applied
- **Examined-By:** Lane B — **REJECTED**; `B-023` was superseded by `D-108`, and the 2026-08-29 review in `B-033` identifies the surviving propagation defect
- **Verified-By:** — not independently verified; Lane A answered and Lane A recorded it (`B-013` item 4)
- **Evidence:** Core hash re-synced across three rule files; `V1-BUILD-SPEC.md` §2 restated; `V1-PHASE-CLOSURE.md` §5 is the single source of lane state; check 13 installed and negative-tested
- **Verified-At-Commit:** 983f058

## Parent defect

`D-100` rules that the project operates as a continuous Scrum cycle, withdraws strict phase
serialization, and opens Phases 2 and 3. The documents and agent instructions that execute the
work still state the opposite:

- `AGENTS.md`, `CLAUDE.md`, and `.agents/rules/graphify.md` say the three agents work
  **sequentially, one at a time, in a fixed phase order**, with Lane A "1 — now" and Lane B
  "2 — next";
- `V1-BUILD-SPEC.md` §2 presents a strict A → B → C sequence and says **Phase 1 is current**;
- the same shared core says an out-of-lane dependency makes Lane B stop and wait, while
  `docs/handoff/README.md` now says feedback normally enters the backlog and work carries on; and
- `D-100` declares all of those tiers unaffected even though it changes the sequence and the
  meaning of a handoff.

The register wins under `D-58`, but Lane B's own instructions say governance reaches Lane B as a
flag and that Lane B is not expected to read the register. No updated instruction or flag carries
`D-100` to the executing agent. A human Judge can approve the operating model; that approval does
not alter the institutional mechanism until the mechanism's instructions change.

## Child defects produced by the parent

1. **"Open" is ambiguous.** It could mean eligible to take work, actively executing, or permitted
   to execute concurrently. Those meanings are operationally different when the same corpus still
   requires one desktop app and one lane at a time.
2. **Backlog disposition is treated as completion.** Check 10 proves that Lane A looked at an
   entry; it does not prove the defect was corrected or verified. `D-100` nevertheless uses "all
   answered" as evidence that the backlog is clear and Phase 1 condition 2 is met.
3. **Phase 1 has no stable Scrum exit.** `D-99` says it closes when the feedback cycle is quiet;
   `D-100` says a full backlog is healthy and work is continuous. Without a timeboxed boundary and
   severity rule, "quiet" is neither observable nor compatible with Scrum.
4. **The propagation record defeats `D-54`.** A decision that changes sequence or retires a
   control must propagate through the register, Build Spec, inventory when artifacts change, and
   the executing rules. Marking the Build Spec and agent files "unaffected" leaves two operative
   models in force.
5. **There is no closure state for the handoff set.** The channel records `Open`, `Answered`, or
   `Withdrawn`, and check 10 deliberately tests only whether Lane A has seen an entry. It cannot
   distinguish an answer from an applied correction, a verified correction, a later superseding
   decision, or a reopened defect. The current twelve-file set demonstrates the gap: `B-008`'s
   `D-96` disposition was advanced by `D-99`, `B-009` still describes a proposal awaiting the
   Judge after `D-97` decided the shape, and `B-010` depends on `D-100`, which this entry disputes.

## Guaranteed failure chain

If Lane B follows `AGENTS.md`, it waits for the fixed Phase 1 → Phase 2 boundary. If it follows
`D-100`, it resumes S0. Either action violates an operative instruction. Lane C faces the same
choice. Because check 10 accepts an acknowledged or answered entry without verifying correction,
the repository can then report a clear backlog and approach phase closure while this contradiction
remains live. This is deterministic instruction conflict, not a probabilistic risk.

## Required repair, parent first

1. **Define one executable operating model.** Recommended minimal form: all three lane backlogs
   may be open, but only one lane is **Active** at a time; the Chief Editor selects the active lane
   at each Sprint boundary. Replace overloaded phase status with `Eligible`, `Active`, `Blocked`,
   and `Done`, or define equally precise alternatives.
2. **Propagate that model in one Lane A pass.** Update the shared core in all three rule files,
   `V1-BUILD-SPEC.md` §2, `V1-PHASE-CLOSURE.md`, and the `D-100` tier-applicability record. State
   explicitly whether the one-desktop/one-agent-at-a-time constraint remains.
3. **Separate feedback receipt from defect closure.** Handoff status must distinguish at least
   `Acknowledged`, `Answered`, and `Verified` (or an explicit `Deferred` with owner and follow-up
   sprint). Check 10 may continue to test receipt, but phase closure must test the closure state of
   every blocking item.
4. **Give Scrum a measurable V1 boundary.** At Sprint Review, Phase 1 may close only when the V1
   Definition of Done is met, no closure-blocking handoff remains unverified, every deferred item
   names its later sprint/tier, and the Judge records Accept / Reject / Defer. The backlog need not
   be empty.
5. **Negative-test the conflict.** A fixture where the register opens Lane B while an agent rule
   says Lane A is current must fail. A fixture where a blocking handoff is merely acknowledged or
   answered but not verified must also fail phase closure.
6. **Generate a closure view from the handoff files.** Do not create a second hand-maintained
   backlog. Extend the handoff schema with `Resolution`, `Evidence`, `Verified-By`,
   `Verified-At-Commit`, `Follow-up-Tier`, and `Superseded-By` as applicable, then make the check
   derive a current matrix from those fields. At a Judge boundary, pin the generated matrix and
   reviewed commit in `V1-PHASE-CLOSURE.md`; the individual handoff files remain the source of
   truth.

## Success evidence

- one operating model appears identically in the register, Build Spec, phase record, and three
  agent rule files;
- exactly one lane can be identified as Active without reading prose from multiple tiers;
- `bun run check` fails on contradictory lane state and on an unverified blocking handoff;
- the derived closure view classifies every handoff as `Verified`, `Deferred` with a named return
  path, `Withdrawn` with rationale, `Superseded`, or still `Open` — never merely `Answered`;
- the checks pass after the fixtures are repaired; and
- Graphify is rebuilt and reports the corrected model without both "strict fixed order" and
  "continuous concurrent phases" as current instructions.

## What Lane B did instead

Performed no implementation and changed no governing or build artifact. Recorded the conflict and
stopped at the implementation-plan boundary.

---

## Verification review — 2026-08-29

**Keep `Applied`.** The closure controls and single-active rule are present, but `D-108` did
not reach every derived instruction. The shared-core triple and `V1-BUILD-SPEC.md` §2 still say
non-active lanes are `Eligible` while another lane is `Active`; the register and phase record
say they are `Blocked` until the lock is free.

**Draft owner fix — Lane A, parent first:** amend `D-108`'s tier-applicability record, then update
`V1-BUILD-SPEC.md` §2 and the shared-core triple together. `V1-PHASE-CLOSURE.md` is already
correct. The Artifact Inventory and `Modular_PRD` are unaffected.
