# B-063 — D-164's S2 packet maps T6 to the wrong requirement and leaves blind review unowned

- **Raised:** 2026-08-31 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** verifying B-061 and claiming the authorized S2 Phase-0 packet has deterministic scope and completion evidence
- **Status:** Answered
- **Lane A:** **Acknowledged and corrected 2026-08-31 (`D-165`).** Confirmed against
`Modular_PRD.md` directly: `AC-07`/`AC-08` are `FR-05` (S2), `FR-06` is the T8 return feature
(S1). The authorized packet is renamed **S2 Unit 1**; **S2 Unit 2** (T6, `AC-07`/`AC-08`, the
`T6→T5` return event, blind-first-pass, remaining `NFR-03`) is named but not authorized here.
Blind review is excluded from Unit 1, not silently absorbed. `line_separation_status`'s shape/name
restated as decided (`D-97`/`D-111`); only computation/validation ownership is open.
`FN-GATES-01-05.md`'s stale `[Q11]` tags and "pending `Q11`" line removed. Each unit's exit and
the M2/production-done caveat are stated in `LANE-B-WORK-ORDER.md` §2.2d and `V1-BUILD-SPEC.md`
S2.
- **Resolution:** Applied
- **Verified-At-Commit:** ee9bbc722968f9a675ffd59181c5e35212bad9a9
- **Evidence:** `V1-DECISION-REGISTER.md` §5.14dq (`D-164`); `V1-BUILD-SPEC.md` S2; `LANE-B-WORK-ORDER.md` §2.2d; `Modular_PRD.md` FR-04/FR-05/FR-06 and M2; `FN-GATES-01-05.md` §§3.4–3.5, 5, 9–10; `V1-ARTIFACT-INVENTORY.md` `docs/specs/ux/` row

## What happened

`D-164` creates the missing verification-first code unit, but its exclusions say T6 is `FR-06`
and is already S1-scoped. The governed mapping says otherwise:

- T6's classification and override criteria are `AC-07`/`AC-08` under **`FR-05`, S2**;
- `FR-06`, S1, is the **T8 return-to-a-prior-state** feature; and
- the full S2 Build Spec still requires T6 validation and the distinct T6-to-T5 return event.

The packet may legitimately defer T6 to a later S2 unit, but it cannot justify that deferral with
the wrong requirement ID or imply T6 left S2.

Three related current-value gaps make the packet non-deterministic:

1. `FR-04` requires a blind first pass before the Line 1 recommendation is revealed. `D-164`'s
   route/action neither includes that behaviour nor explicitly excludes it. The inventory still
   says the stack-specific UX specification is undecided.
2. The work order says the `line_separation_status` *shape is undecided*. Its shape and name are
   already decided by `D-97`/`D-111`; only the computation/validation mechanism is undecided.
3. Living inputs still carry retired decision state: `FN-GATES-01-05.md` leaves `[Q11]` on
   `AC-07`/`AC-08` and says field names are pending Q11; the register's outstanding-decision list
   still names Q11; `DECISION_LOG.md`/`CONFIG_LOG.md` describe Q1 as the roster-shape answer rather
   than distinguishing the decided Phase-0 rule from OD3's production roster.

## What you need

1. Restate the packet as **S2 unit 1**, not the whole S2/M2 exit, and identify the later unit that
   owns T6, `AC-07`/`AC-08`, the T6-to-T5 return event, and full `NFR-03` behaviour.
2. Decide blind-review scope for unit 1: include disposition-before-reveal with its interaction
   states, or exclude it explicitly and name the later S2 unit. If UI behavior is built, create the
   stack-specific `docs/specs/ux/` artifact required by `D-30`/`D-34` and propagate the new artifact
   through all three v1 tracking files.
3. Replace *"shape is undecided"* with the real open question: who computes and validates the
   already-decided three-value classification.
4. Normalize the living Q11 and Q1 status statements. Preserve historical narratives as history;
   do not leave active markers or instructions pointing to closed decisions.
5. Give each S2 unit a falsifiable exit and state explicitly that neither unit alone earns M2 or
   production done.

## What I did instead

Stopped before accepting or activating the Lane B build packet. No implementation or governing
document was changed.

