# B-136 — Canonical governance owners and the gated `V1-SM05` State-2 boundary

- **Raised:** 2026-09-25 by Lane B
- **Kind:** finding
- **Phase:** 1
- **Blocks:** treating the review package as application authority; treating checked DoR, Issue #1, branch or draft PR #2 as construction authority; creating a duplicate governance ledger; or activating Lane B without a selected packet, bounded work order, complete propagation and verified boundary
- **Status:** Open
- **Lane A:** Acknowledged 2026-09-25, receipt only. Accepted as the Lane A review docket. Pass 1 needs an explicit Judge act and Pass 2 needs actual selection (`D-183`); neither is given by this acknowledgement.

  **Parent 2 (Pass 1) applied 2026-09-25 (`D-263`).** The State-1 record is repaired (see `B-135`). Hard stop: Parent 3 (selection, work order, lane change) awaits the Judge's selection act. `Status` stays `Open`.
- **Verified-By:** — not yet dispositioned; raised by Lane B
- **Evidence:** `D-29`; `D-54`; `D-58`; `D-75`; `D-90`; `D-123`; `D-156`; `D-158`; `D-183`; `D-184`; `D-186`; `D-227`; `D-240`; `D-242`; `D-244`; `D-248`; `D-253`; `D-254`; `D-258`; `D-261`; `D-262`; `docs/README.md` §"How a request becomes execution"; `docs/handoff/README.md`; `docs/handoff/TEMPLATE.md`; `docs/v1/V1-PHASE-CLOSURE.md` §5/§5.0a; `docs/LANE-B-WORK-ORDER.md` §§1, 6–7; `docs/v1/V1-BUILD-SPEC.md`; `docs/v1/V1-ARTIFACT-INVENTORY.md`; `docs/v1/work-packets/SETUP-SPIKE-000/`; `docs/v1/work-packets/V1/V1-SM05.md`; `docs/handoff/B-120`, `B-125`, `B-134`, `B-135`; current tree at the commit below
- **Verified-At-Commit:** 9dba71c6db4510e31a51ad7f5ae9dba99fcd0b56

## What happened

Lane C supplied several successive reviews of the State-1 handover. Lane B reconciled them against
the Register and current repository. The result is ready for **Lane A review**, but this handoff is
not application authority (`D-183`).

### Current facts

| Fact | Current state |
|---|---|
| Live lanes | Lane A `Active`; Lane B `Eligible`; Lane C `Blocked` |
| `V1-SM05` readiness | `DOR-R1`–`DOR-R7` checked; Issue #1, native feature branch and draft PR #2 exist |
| `V1-SM05` construction | Not started; the packet is not selected and no current bounded work order exists |
| State-1 tracking | `B-135` identifies stale `D-262` PR wording and a stale packet sentence; `B-135`/`B-136` await Lane A receipt |
| Graphify | Analyzes `9b2ddf3`, behind repository HEAD `9dba71c` |
| Setup | `SETUP-SPIKE-000` closed under `D-258`; S2–S4 were terminally deferred without DoD credit |

### Consolidated findings

1. **Readiness is not construction authority.** Checked DoR and the State-1 Git artifacts establish
   readiness and traceability. Construction still requires Judge selection, a bounded work order and
   Lane B `Active` in Phase Closure §5.
2. **Setup stays closed.** `D-258` is authoritative under `D-58`. Unchecked historical DoR/DoD rows
   record that no DoD credit was earned; they do not reopen the packet. Residuals stay with the owners
   and return conditions recorded by `D-244`, `D-248` and `D-258`.
3. **Open handoffs do not form a second architecture.** The Register owns decisions; Phase Closure
   owns lane state; shared rules own lane surfaces; `docs/README.md` owns the lifecycle map; the Build
   Spec and selected packet own scope and DoD; the work order owns the executable unit; the handoff
   channel owns transactions. A parent header follows its weakest child and does not prove canonical
   facts are missing.
4. **The proposed seven tiers are navigation only.** They are not a universal parent-child chain.
   Handoffs are lateral and intentionally unmapped; State-1 Git artifacts precede construction; the
   Register outranks the Build Spec; DoR and DoD may consume evidence from several lanes.
5. **Lane B's state has one value.** Lane B is `Eligible`, not `Eligible / Blocked`. It has no
   implementation lock, while `D-184` preserves its narrow own-handoff-only commit-and-push authority.
6. **xDD meaning and file stewardship remain separate.** Lane B chooses the child method under
   `D-242`, but cannot edit Lane A's `docs/LANE-B-WORK-ORDER.md`. The work order must name a Lane B
   writable evidence path or handoff route for the rationale.
7. **No duplicate handoff or ledger is needed.** Do not create `B-137`, `C-011`, a combined
   `C-011 / B-136` identity, a master tracking register or a standalone governance architecture.
   Lane C's reviews are evidence incorporated here; this entry remains Lane B-raised.

### Readiness challenge

| Question | Finding |
|---|---|
| Can Lane A understand the bounded issue without reconstructing the review history? | **Yes, from this consolidated entry.** |
| May Lane A acknowledge it now? | **Yes.** The handoff SOP requires prompt receipt. |
| May Lane A apply and commit Pass 1 solely because this verdict approves it? | **No.** `D-183` requires an explicit bounded Judge act. |
| May Lane A continue directly into selection and State 2? | **No.** Pass 1 ends at a hard Judge stop. |
| Is the State-2 boundary fully specified? | **Conditionally.** Pass 2 must include `D-54` propagation, a Lane B writable xDD route and complete post-commit verification. |

## What you need

Follow the parent gates in this order.

### Parent 1 — Receive and decide the review

1. Acknowledge `B-135` and this entry immediately.
2. Review the bounded Pass-1 correction set below.
3. Obtain an explicit Judge act authorizing its canonical edits and commit. This handoff's verdict is
   a recommendation, not that authority.

### Parent 2 — Pass 1: repair the State-1 record

After the Parent-1 authorization:

1. Correct `D-262` item 4 and its tier table to record draft PR #2 as open and already created.
2. Correct `V1-SM05.md`'s stale “DoR is defined, not complete” sentence to the current complete-DoR
   fact.
3. Append dated progress notes to `B-120` and `B-125`: DoR, Issue #1, branch and draft PR #2 are
   complete; selection, work order, activation and construction remain open.
4. Disposition `B-135` and `B-136` honestly. Include Lane B's `B-134` verification already present in
   the working tree. A single coherent commit is preferred, but no fixed commit count is required.
5. After the governed commit, run `npx graphify hook-rebuild`; confirm `lastAnalyzedHead` equals HEAD;
   run `graphify portable-check .graphify`; then run `bun run check`. Observed exit 0 is the success
   criterion, not a promised result.

**Hard stop:** report the verified State-1 baseline and present the SM05 selection docket to the
Chief Editor / Judge. Do not begin Parent 3 without an explicit selection and boundary authorization.

### Parent 3 — Pass 2: select and define the State-2 boundary

After the Judge selects `V1-SM05` and authorizes the boundary package:

1. Allocate the next free Register identity against the live application HEAD; do not preassign an ID
   or subsection in this handoff.
2. Apply `D-54` in one governed pass: record the selection in the Register; update the Build Spec's
   scope, sequence and DoD state; state the Artifact Inventory disposition; update the selected packet;
   and update `Modular_PRD.md` §8 because the increment opens. State unaffected tiers explicitly.
3. Add a clearly current `V1-SM05` child unit to `docs/LANE-B-WORK-ORDER.md`. Preserve held S2 history.
   Name the exact child, Lane B owned paths, exclusions, dependencies, stop conditions, completion
   evidence file and Lane B writable route for the xDD rationale. Lane A must not choose the method.
4. Update `V1-PHASE-CLOSURE.md` §5/§5.0a with the boundary decision and report: Lane B becomes
   `Active`; every other lane becomes `Blocked`.
5. Commit the authorized boundary. Run the Graphify rebuild, confirm analyzed HEAD, run
   `graphify portable-check .graphify` and run `bun run check`. Report the observed results before
   telling Lane B to begin construction.

### Parent 4 — Lane B construction

Only after Parent 3 is committed and verified, Lane B reads the current work order, records its xDD
rationale through the named writable route and constructs only the authorized child. Older Open
handoffs are audited separately by their own weakest child, owner and return condition; they do not
become SM05 blockers by aggregation.

## What you did instead

Lane B reviewed Lane C's full proposal against the Register, live lane state, work-packet history,
handoff SOP and current working tree. Lane B accepted the scorecard-versus-execution distinction,
two-pass Judge gates, historical work-order preservation and writable xDD route; corrected setup
parentage, authority, lane-state, propagation and verification claims; consolidated the accumulated
review into this one entry; and stopped at the Lane A review boundary. No canonical governance source,
application file, workflow, lane state, remote object or Graphify artifact was changed.

## Verdict

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | This consolidated `B-136` as the Lane A review docket | Phase 1 / Lane A acknowledgment and review |
| **Approve** | DoR/DoD scorecard versus physical execution distinction | Phase 1 / use as explanation; create no new architecture artifact |
| **Approve** | `D-258` setup closure | Phase 1 / preserve terminal deferral without DoD credit |
| **Approve-with-conditions** | Pass-1 correction package | Phase 1 / requires a bounded Judge act under `D-183`, then complete graph and consistency evidence |
| **Approve-with-conditions** | Pass-2 selection and work-order package | Phase 1 boundary / requires actual Judge selection, full `D-54` propagation, xDD evidence route and verified handover |
| **Approve-with-conditions** | Seven-tier picture | Phase 1 / navigation only; every edge must name its actual reference or evidence relationship |
| **Defer** | Setup residuals and older Open handoffs | Their existing owners and return conditions; audit individually |
| **Defer** | State-2 construction | Phase 2 / after the committed and verified Parent-3 boundary |
| **Reject** | Treating this review or its Approve rows as application authority | Contradicts `D-183` |
| **Reject** | DoR, Issue, branch or draft PR as construction authority | Selection, work order and `Active` state remain separate gates |
| **Reject** | Reopening setup from directory placement, unchecked history or thematic handoff links | `D-258` controls; parentage requires an explicit decision mapping |
| **Reject** | Duplicate ledger, architecture, `B-137`, `C-011` or replacement Lane C header | Canonical owners and this bounded handoff already exist |
| **Reject** | Lane B editing the work order or Lane A choosing Lane B's xDD method | Preserve `D-75`/`D-227` stewardship and `D-242` meaning ownership |
| **Reject** | Preallocated decision identity, mandatory commit count or promised clean checks | Allocate against live HEAD and rely on observed verification |
