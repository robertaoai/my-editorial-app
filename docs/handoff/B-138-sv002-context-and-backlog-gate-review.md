# B-138 — Judge tool roles, ripwire setup and visible SV-002 backlog order

- **Raised:** 2026-09-25 by Lane B
- **Kind:** finding
- **Phase:** 1
- **Blocks:** the Lane A routing of the Judge's tool-role clarification, `ripwire` review/setup and visible Open-item tracking into their canonical owners. This entry's verification requires that routing, not completion of `SV2-U01`–`U04`; `V1-SM05` remains `BLOCKED` under `D-264`, with no construction or lane transition authorized
- **Status:** Open
- **Lane A:**
- **Verified-By:** — not yet dispositioned; raised by Lane B
- **Evidence:** Judge clarifications 1–3 supplied directly, 2026-09-25; repository comparison at the commit below against `D-75`, `D-227`, `D-264`, `SV-002.md` §§2–7, `SV2-U03-code-navigation-evaluation.md`, `B-130`, `B-136`, `B-137`, the Phase Closure lane table, the Open handoff headers and the cross-artifact sources below; Lane C's supplied reviews are supporting analysis, not Lane A receipt
- **Verified-At-Commit:** 79abda6b8bcc502ddfc666119c9f25dc2d2f1ad7

## What happened

The Judge has now clarified three points that supersede the caution in Lane B's uncommitted
first draft of this entry. **First**, the lanes should be optimized for conversational handoff
and execution: Claude Cowork handles Lane A handoff dialogue while Claude Code owns Lane A
sources; ChatGPT Chat/Work raises and reviews Lane B handoffs while ChatGPT Code/Codex owns
Lane B code; Antigravity Chat reviews handoffs while Antigravity IDE owns Lane C workflows.
These are roles **inside the existing three lanes**, not six independent owners, six commit
locks or new directory rights. `D-227`'s single Lane A canonical owner remains Claude Code.

**Second**, the Judge requests `ripwire` review **and setup for ChatGPT and Antigravity** because
of a stated 12,000-size constraint on skill files. That instruction changes the planned
`SV2-U03` work: Lane A should prepare a bounded setup for both consumers, not merely repeat
its prior waiver recommendation. The 12,000 skill-file constraint is the Judge's binding
design input; the loader run does not vote on whether to respect it. It does not yet
establish whether the number counts characters,
bytes or tokens, which loader enforces it, or whether it also limits whole prompts. `B-130`
records one reported Antigravity truncation; `SV2-U02` remains the empirical measurement of
the actual loaded text and failure mode. `ripwire` can reduce code-navigation output; it
cannot itself restore governance instructions that a loader failed to load. The first SM05
slice is SQL-heavy, and the current `SV2-U03` evaluation says `ripwire` does not parse SQL or
PL/pgSQL; setup therefore needs a documented SQL navigation fallback and a measured benefit.

**Third**, the Judge wants Lane A to stop compressing Open issues into a generic remainder or
speaking of lifting the SM05 block as the immediate next step. `D-264` requires four separate
`SV2-U*` returns, Judge acceptance of `SV-002`, and a **separate** block-lifting act. The
Open handoffs must remain visible with their own owners and return conditions. A priority
view is useful, but its status and count must come from the live handoff headers and `SV-002`,
not become a second authority that can drift.

**Read-state corrections to Lane C's proposal:** `B-137` is already `Verified` by Lane B in
`dbeaa49` against source commit `9735e47`, so it is not a pending top-five item. `79abda6`
also aligned the Build Spec §1 status table with `V1-SM05` `BLOCKED`. Lane C's proposed
`Lane A: Acknowledged` wording is a draft, not Lane A's receipt and is not entered above.
Its 500-byte–2-KB `ripwire` output and universal prompt-cap claims are targets to measure,
not repository-proven guarantees. This entry does not close `SV2-U01` from B-137 review.

### Lane C follow-on review and tier applicability

Lane C's later review concurs on the three Judge directions and the `B-137`/Build Spec read
state. Its draft `Lane A: Acknowledged` line remains **proposed answer text**; only Lane A can
record that receipt. Its suggestion to seek another Judge ratification before *reviewing and
setting up* `ripwire` would repeat the direct clarification above: Lane A needs to record and
bound that authorization, then apply it within the existing lane and setup gates. The exact
loader mechanism and tool benefit still require measurements. The phrase “other 10 Open
handoffs” is not a stable count or a substitute for the full live-header review.
Lane C's newest proposal calls the three lanes “fully aligned”, but Lane A has not yet
acknowledged this Open entry or recorded the Judge clarification in the Register; agreement
between the two review drafts is not a Lane A disposition. Its final runbook also groups
closing setup, lifting the SM05 block, issuing a State-2 work order and transferring the
commit lock into one step. `D-264` requires the unit proofs and Judge acceptance first,
then a **separate** block decision; selection, work order and lane transition retain their
own governing acts. The runner prints its check count (`G75`); a fixed “18/18” is not a
handoff acceptance condition.

### Lane C's readiness challenge — disposition before handoff

Lane C correctly identifies a closure risk if B-138 is treated as the work packet for every
setup unit. **B-138 is one routing transaction for the Judge's three clarifications.** Lane A
can answer it once it records the parent decision, places the loader protocol with `SV2-U02`,
the two-consumer tool setup with `SV2-U03`, and the item-level backlog review with `SV-002`
§§2/4. Lane B can verify that routing independently. The measurements, tool trial and
contract matrix remain open in their own units; B-138 need not wait for all of them to finish.
`Resolution: Applied` would record Lane A's routing but is **not terminal** until an independent
reviewer records `Verified` (`D-102`). Lane A should not mark it Verified for itself.

The provisioning concern is also valid as a specification requirement. The current Lane A
evaluation describes `ripwire` as a pre-1.0 native CLI with preview Windows support and no
npm package; `Get-Command ripwire` found no installed command on this host at the read state.
The Judge's setup direction therefore needs the pinned source, binary integrity check,
Windows execution path, removal path and SQL fallback in the `SV2-U03` packet **before**
Lane A installs it under `D-86`. The order below places `SV2-U02` measurement before physical
provisioning. A prepared specification is not a claim that the tool works or repairs the
instruction loader.

The dated top-five view below is a handoff snapshot for routing, not a maintained backlog.
`SV-002` owns live unit sequence and acceptance proof; individual handoff headers own their
status. The Open, blank-acknowledgement B-138 intentionally trips `handoff-response` until
Lane A records a real receipt. Filing an unread handoff is not a green suite claim, and
Lane B cannot fill Lane A's receipt to make the check pass.

Lane C's latest challenge identifies a missing DoR gate in the previous run order.
`SV-002` still reads `DoR open`; `SV2-DOR-01`–`06` must each pass on their own evidence
before a loader run or native-binary installation. Lane A can record the Judge's
direction, refine coverage, write the sentinel method and specify Windows provisioning
as readiness work. It cannot tick all six rows merely because B-138 was routed:
run access (`DOR-04`) and fixed methods (`DOR-05`) need their own proof. After DoR
passes, selected-lane `SV2-U02` measurements precede physical `ripwire` setup and
consumer trials under `SV2-U03`.

| Tier / view | Disposition for this handoff |
|---|---|
| Register, Build Spec, Inventory, `SV-002` and `SV2-U03` evaluation | Affected by the Judge's role, setup and tracking direction; Lane A determines the exact `D-54` changes and any setup artifact paths |
| `docs/Modular_PRD.md` | Product FR/AC/NFR behaviour unaffected; §8.1 already records setup continuation and SM05 `BLOCKED`. A later gate-state change follows its own rule |
| Storyboard and story panels | Behavioural views unaffected; the repository file is `docs/journal/2026-08-18-storyboard-business-and-digital-twin.md`, not the `docs/storyboards/` path in Lane C's proposal |
| `docs/fn-specs/FN-GATES-01-05.md` views and `docs/governance/requirements-traceability-map.md` | Customer behaviour and requirement anchors unaffected by developer tool setup |
| `docs/ENCYCLOPEDIA-SYNC.md` | No new developer-tool entry indicated; its existing Entry 03 `TC3` flag remains a separate, not-yet-hosted comparison (`D-265`) |
| Application code, migrations, workflows and frozen sources | Unaffected by this handoff; later selected-lane consumer runs or separately authorized edits follow their own owners |

## What you need

1. **Record the Judge's parent clarification and receive this entry.** Lane A acknowledges
   B-138 in its own field, then records the three tool-role descriptions and the bounded
   `ripwire` setup direction in the Register. Route each child concern to its existing
   `SV-002` owner and record the destination; this is the bounded B-138 return proof.
   Preserve one `Active` lane, existing surfaces,
   `D-227` single ownership and the live Phase Closure state. Apply `D-54`: Build Spec
   sequence/DoD and Inventory paths in the same pass if setup creates or changes artifacts;
   state unaffected tiers explicitly. The conversational tools may draft and review through
   `docs/handoff/`; they gain no canonical commit rights from this clarification.
2. **Complete setup readiness, then run the loader measurement (`SV2-U02`/`B-130`).** Lane A publishes the sentinel
   protocol and checks each `SV2-DOR-01`–`06` row only from its required evidence.
   `SV-002` DoR must pass before execution. Lane B's `SV2-U02-B` run and Lane C's child run record the tool, backend, loaded
   files, bytes/characters, visible start/middle/end text, truncation or error and reproducible
   steps. Distinguish skill-file limits from rule-file and total-context limits. Execute each
   run only in its selected lane turn or from authenticated Judge-supplied evidence; Lane C
   remains `Blocked` at the read commit.
3. **Specify `SV2-U03` during readiness; provision and test after the loader measurement.** Lane A updates the existing
   evaluation/attempt packet to reflect the Judge's review-and-setup direction before
   provisioning. Specify pinned version and source, Windows installation path, binary integrity check, security and
   removal procedure, exact commands, output-size measurement, and which results each
   consumer can obtain. Lane A provisions dependencies under `D-86`; Lane B and Lane C test
   their own use when selected. Compare one named first-child navigation task with `rg`/tests
   and one negative control; include the SQL path that `ripwire` cannot parse. Record what
   the setup improves and what loader problem, if any, remains. Permanent instruction
   redesign, root `GEMINI.md` or shared-core parity changes require their own governed proof.
4. **Keep an ordered, sourced work view while preserving every Open item.** At this read
   commit the **top five work groups** are: (1) B-138 receipt, Judge propagation and
   `SV2-U01` independent review; (2) `SV2-U02`/B-130 loader protocol and Lane B/C runs;
   (3) `SV2-U03` two-consumer `ripwire` review/setup; (4) `SV2-U04` matrix consuming
   B-071, B-095, B-104 and B-137 R1; (5) item-level transfer and remaining-backlog
   audit before any `SV-002` closure claim. This is a **dependency view at this read
   commit**, not a new fixed queue or permission for a `Blocked` lane to execute.

   | Remaining Open handoffs at the read commit | Existing route to keep visible |
   |---|---|
   | `B-138`, `B-136`, `B-130` | Parent setup docket and loader unit; dispositions in their own entries |
   | `B-071`, `B-095`, `B-104` | `SV2-U04` contract inputs; each child keeps its owner and proof |
   | `B-096`, `B-102`, `B-106` | Governance, metadata and A4/A6 dependencies; R6 stays with `B-106` |
   | `B-116`, `B-117`, `B-118`, `B-119` | Audit, backlog aging, ranking and agentic-documentation follow-ups; classify each against this attempt |
   | `B-120`, `B-125` | State-1/SM05 tracking; existing Issue and PR are history, not State-2 authority |

   Lane A should show each item's relevance or specific exclusion in the existing `SV-002`
   coverage/transfer record, with owner, acceptance proof and return condition where it
   intersects. A handoff being Open does not alone make it an `SV-002` blocker. Derive
   future ordering from current headers and dependencies; do not copy this snapshot into
   a second maintained backlog.
5. **Return the gate result in order.** Independently review `SV2-U01`; complete the
   measurement and setup/consumer evidence for `SV2-U02`/`U03`; complete `SV2-U04` and
   the transfer receipts. Only then submit `SV-002` for Judge acceptance. A later,
   separate Judge act decides whether to lift `V1-SM05` `BLOCKED`, select it and issue a
   work order. No DoR/DoD row or handoff closes from this proposal alone.

### Acceptance proof

- **For B-138 itself:** Lane A's governed parent decision and explicit destinations for
  roles, loader protocol, tool setup and backlog transfer are in the owning records;
  Lane B independently compares that routing at an existing commit. The downstream
  `SV2-U*` results are not prerequisites to verifying this handoff.
- The Register and affected tracking tiers state the Judge's operational roles and
  `ripwire` review/setup direction without multiplying lane owners or commit locks.
- The Judge's 12,000 skill-file constraint is recorded as a design input. `SV2-U02`
  measures its units, enforcement and affected loaders before any broader prompt-cap claim.
- `SV-002` DoR rows are checked individually from evidence before execution; the sentinel
  method and Windows setup specification may be prepared while DoR is open, but loader
  runs and physical tool setup cannot begin on readiness prose alone.
- `SV2-U03` has a bounded, reproducible ChatGPT and Antigravity setup receipt, a SQL
  fallback, output-size comparison, negative control and consumer feedback; any inability
  to run under current lane state is recorded as a return condition, not silently waived.
- The top-five work view and every remaining Open handoff above have a live source and a
  relevance or exclusion decision before transfer completeness is claimed.
- `V1-SM05` stays `BLOCKED` until all four unit returns, Judge acceptance of `SV-002`, and
  a separate unblocking act are recorded.

## What you did instead

Lane B reconciled the Judge's direct clarifications and Lane C's advisory analysis with
the current Register, setup packet and handoff headers. Lane B filed one handoff for Lane A;
it did not edit governed sources, provision a tool, run another lane's loader, change lane
state or claim a setup-unit result.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | Judge's tool roles within the existing Lane A/B/C ownership model and visible Open-item tracking | Phase 1 — Lane A records and propagates the bounded clarification |
| **Approve-with-conditions** | B-138 routing and `ripwire` review/setup direction for both consumers | Phase 1 — Lane A records the Judge act and routes the work; Lane B verifies that bounded handoff |
| **Defer** | Physical `ripwire` provisioning and consumer acceptance | Phase 1 — evidenced `SV-002` DoR, `SV2-U02` measurement, then pinned Windows setup and selected-lane tests under `SV2-U03` |
| **Defer** | `SV2-U01`–`U04` completion and `V1-SM05` unblock | Phase 1 — each unit's proof, Judge acceptance of `SV-002`, then a separate block decision |
| **Reject** | Treating `Applied` as terminal, extending the Judge's 12,000 skill-file constraint into an unmeasured universal prompt cap, using `ripwire` as a loader repair, executing units before DoR, making the snapshot a second backlog, or treating B-137 verification as setup closure | All phases — the owning evidence and gates remain necessary |
