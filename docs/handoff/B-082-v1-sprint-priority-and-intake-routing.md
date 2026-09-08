# B-082 — Route manual-intake readiness to current V1 work; keep PBL-11 in future backlog

- **Raised:** 2026-09-08 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** an accurate current-work recommendation for V1; no application build
- **Status:** Answered
- **Lane A:** **Acknowledged and applied 2026-09-08. Recorded as `D-196`; both stale pointers were
  verified against their sources before editing.**
  **The correction is accepted in full: these are not four equal-priority tasks.** Three are
  connected records about one piece of current `V1` readiness work and the fourth is future backlog.
  `Q9`'s options and `FB-05`'s behaviour are drafted **together**; only acceptance is ordered —
  `Q9` disposition → complete accepted specification and evidence → `G105` reconciliation from that
  evidence. **`PBL-11` stays registered, `Unranked`, identity only**, and must not displace or block
  the manual-intake work by name association.
  **The execution boundary is recorded first, because it governs the rest.** `V1` being `Active` is
  **not** evidence that a coding sprint is executable, and **a lane being `Active` is not a sprint
  status**. The next named `S2` packet is historical and **held** under `D-171`, extended by
  `D-172`/`D-175`/`D-177`, covering both the historical and the target order. **There is no currently
  executable Lane B code unit.** Documentation preparation proceeds under `D-194` regardless, and
  **completing this chain does not lift that hold** — `D-171`/`B-071` keeps its own owner and
  acceptance criteria.
  **Both stale pointers are corrected, and both were the same shape.** §8.0's `V1` narrative still
  read *"`S2` is the current blocker — open on `Q12` … and `Q1`"* although **`D-163` closed both
  Phase-0 decisions**; §8.1's `S2` cell still read *"Unit 1 authorized … not started"* although
  §7.4's `M2` row had recorded **that exact phrase as stale since `D-178`**. **Two tables in one
  document disagreed about whether `S2` Unit 1 is authorized** — the same defect shape as the
  `V1 = S0–S5` example corrected under `B-081`. Dated evidence preserved in both; no scheduling
  decision taken, and `B-061`/`B-071` retain ownership of overlapping status text.
  **The `before S1` timing phrase is clarified, not rewritten.** It is historical and is **not** an
  instruction to restart bounded `S1` work; the current requirement is to complete the manual-intake
  specification before authorizing or claiming readiness of the affected unit. **`T1` is overloaded**
  — product intake transition versus the Build Spec's pre-build decision stage — and is now required
  to be qualified; neither is a sprint assignment.
  **Not done, deliberately:** no build, no sprint assignment, no lane transition, no `PBL-11`
  promotion, no re-performance of `B-061`/`B-071`'s accepted `Q12`/`Q1` work. `Q9`, `FB-05` and
  `G105` all remain **open**. Frozen sources untouched.
- **Resolution:** Applied
- **Evidence:** review at cccfb6af1598d810393bbe0027e7575b4c09cbf8; Judge priority clarification; D-194/D-195 and G105; V1-BUILD-SPEC §4 S2/§8; LANE-B-WORK-ORDER §2.2d; V1-PHASE-CLOSURE §5; Modular_PRD §7.4/§8.0/§8.1/§10; FN-GATES §3.1/§6/§7; B-081's bounded verification record
- **Verified-At-Commit:** 30aedd20727a3407dc93b40982a922da90beab20

## What happened

**Clarified request:** troubleshoot why Lane A's next-step feedback lists Q9, FB-05, G105 and
PBL-11 together without distinguishing current V1 sprint readiness from future feature demand.
Identify the actual execution boundary first, then specify the decision/dependency order and
the source corrections that make it visible. Planning only; no code, sprint allocation or move.

**Root cause:** the prior feedback distinguished record meanings but omitted the current execution
context. I contributed to that by presenting the four records together without a sprint-facing
priority column. Q9/FB-05/G105 are not three independent feature tickets, and PBL-11 is not a
fourth item on the same current-sprint list. Two stale execution-tracer statements reinforce the
confusion. This handoff fixes the routing gap; it does not reopen B-081's verified correction.

### Highest parent — establish which V1 work may proceed

**Dated observation, not a new live-status tracker:** at the reviewed revision, Lane A is Active
and Lane B Eligible under Phase Closure §5. S0 and S1 have their existing bounded completion
claims. The next named S2 code packet is explicitly **historical and held**, not an executable
unit (work order §2.2d). Build Spec's D-171 hold covers both historical and target T5/T6 orders;
fresh contract selection and separate build authorization remain necessary. S3/S4 are not made
active by being listed in the version plan. V1 being Active is not evidence that a coding sprint
is currently executable, and a lane being Active is not a sprint status.

Lane A can prepare the manual-intake documentation proposal under the already recorded D-194
authorization. That is current V1/M-MVP readiness work, **not a newly assigned S1 or S2 code unit**.
The existing B-071/F6/F7 correction and S2 hold remain independently tracked. Do not claim Q9 is
the only V1 blocker or that satisfying FB-05 releases the S2 hold. Independent documentation work
may proceed while that hold remains; any real dependency on the target Line/executor contract
must be cited explicitly rather than used to stop all preparation by default.

### The priority view Lane A should use

This order applies to the four records the Judge named, within the execution boundary above.
It does not invent a new numeric rank for existing PBL rows or reorder unrelated V1 work.

| Priority / relationship | Record | Current action | Relation to sprint execution |
|---|---|---|---|
| **Now — current V1 readiness, decision part** | Q9 | Prepare the remaining T1 execution identity/Line authority and author/date options for the Chief Editor; the manual-package direction is already ratified | Needed to finalize the affected intake behaviour; not a separate sprint or an AI build decision |
| **Now — same V1 readiness work, specification part** | FB-05 | Draft FR-01/manual-package behaviour alongside the Q9 options; finalize it against the recorded answers and independently verify it | Blocks a claim that manual intake is fully specified/ready; coding allocation still requires a bounded authorized unit |
| **Follow that same evidence — reconciliation** | G105 | Keep the governance gap aligned with the Q9 decision and FB-05 criteria; update its disposition from actual evidence | No separate feature rank or AI sprint prerequisite; closure does not lift D-171 |
| **Future backlog — outside the current delivery work** | PBL-11 | Retain the registered, unranked capability; refine or promote only when separately selected | No version/sprint allocation or build authority; must not displace or block the current manual-intake proposal by name association |

Q9 options and FB-05's proposed behaviour can be drafted together. Their final acceptance order
is Q9 disposition → complete accepted manual specification/evidence → G105 reconciliation.
That is one connected readiness chain. PBL-11 follows its own future selection path. The
instruction is not “finish four tickets”; it is “finish the current manual-intake proposal and
its decisions, while retaining the separate future capability.”

## What you need

### Proposed replacement for Lane A's next-step summary

> Current priority is the approved V1 delivery scope of M-MVP. For the manual-intake work already
> authorized for documentation, prepare one packet covering Q9's remaining decisions and FB-05's
> functional behaviour; reconcile G105 from the resulting evidence. PBL-11 remains future backlog
> and has no assigned version or sprint. S2's existing D-171/B-071 contract/build hold remains in
> force and is not resolved by this packet. No executable Lane B code unit is inferred from the
> V1 plan, the old S2 packet or an Active lane label.

Use that wording in the next response and record the governing priority/routing fact once in
the appropriate Register/Build Spec context. The current work order remains the source for an
executable unit and Phase Closure §5 remains the source for lane state. This handoff is a
transaction about an inaccurate view, not another permanent sprint-status matrix.

### Concrete stale-source corrections for Lane A

| Source | Problem confirmed at the reviewed revision | Draft correction |
|---|---|---|
| Modular_PRD §8.0 V1 status narrative | Still says Q12/Q1 are open S2 blockers, although D-163/work order §2.2d record them decided | Add an explicit current-status correction: “Q12/Q1's Phase-0 decisions are recorded under D-163; do not re-ask them. Current S2 build readiness follows the D-171 hold in V1-BUILD-SPEC §4 and the work order, not this historical narrative.” Preserve dated evidence |
| Modular_PRD §8.1 S2 Status cell | Still reports Unit 1 authorized/not started without its later hold | Replace current status with: “Held under D-171 for both historical and target orders. Earlier D-164/D-165 authorization is not executable; follow V1-BUILD-SPEC §4 and LANE-B-WORK-ORDER §2.2d for the current boundary. A fresh separate authorization is required.” |
| Q9 row and FN-GATES FB-05 timing | “Whether an FR is added before S1” / “must resolve before S1” can be mistaken for a new instruction to restart the already bounded S1 work | In the existing D-194 proposal, preserve the historical timing and state the current requirement: complete the manual-intake specification before authorizing/claiming readiness of the affected unit; assign any corrective code only through a named future work order |

Modular_PRD §7.4 already records the S2 hold while §8 gives the old authorization, so this is
source inconsistency, not a new scheduling decision. Use the existing B-061/B-071 correction
ownership for overlapping status text; reference this finding rather than copying a competing
corrective plan. Do not re-perform their accepted Q12/Q1 work or their historical verification.

**T1 terminology:** “Reporter T1” in this packet is the product intake transition. The Build Spec
also uses T1 for its pre-build decision stage. Always qualify the term when discussing scheduling;
neither label is a sprint assignment. A product gate, build-version, sprint, planning phase and
development lane are separate dimensions.

### Parent-first decision and follow-up guide

| Order / dependency | Judge decision / recommendation | Lane A follow-up | Completion evidence |
|---|---|---|---|
| 1 / none | Accept correction of the current-execution view | Reconcile the two Modular_PRD status pointers with the existing D-171/work-order boundary; preserve scope and lane state | No source offered as current execution instructions says the held S2 packet may run |
| 2 / 1 | Accept one current V1 manual-intake readiness packet, already supported by D-194 | Prepare Q9 choices and FR-01/FB-05 behaviour together; identify any actual dependency on the existing target actor/Line contract | A reviewable proposal with remaining decisions, owner, evidence and stopping conditions; not four parallel feature requests |
| 3 / proposed choices | Judge accepts or rejects the unresolved behaviour/authority choices | Record the act and finish the dependent specification; do not ask again whether the package is manual | Named Q9 decision, complete required-input/provenance/error behaviour, no fabricated actor attribution |
| 4 / accepted specification | Accept bounded cross-reference propagation and review | Update map and affected functional/module specs, current story panels/sequence/data-flow and Encyclopedia dependency assessment; reconcile G105 when its criteria are evidenced | One canonical answer and specification; dependent views agree; no automatic software/phase closure |
| Separate | Defer PBL-11 execution and any relocation | Retain canonical identity, rank/readiness and existing source homes | No new sprint, architecture, model, UI or priority invented for future AI work |
| Later, after all applicable gates | Review a concrete build unit if requested | Name exact version/sprint scope, DoD, work order and authorized lane through existing procedure | Actual execution authority, distinct from priority, proposal acceptance or handoff closure |

Priority-first does not require suspending every unrelated in-scope task. It requires that a
current V1 requirement and a future capability are never presented as equally ready or equally
blocking without a demonstrated dependency. B-071's hold-resolution work remains with its
existing owner and acceptance criteria; this packet neither moves it below future AI work nor
claims the manual-intake packet supersedes it.

### View and verification scope

Modular_PRD remains the overall module/version/sprint tracer; the Build Spec/work order own
execution. Storyboard/story panels and sequence/UML/data-flow views show the ratified manual
package at Reporter T1 and one shared engine; do not add an AI producer because PBL-11 has an ID.
The existing separate M-POC module requirements and manual external-package transfer remain
unchanged in priority. Keep Encyclopedia Entry 06's current manual-input impact and Entry 02's
ratification impact with the D-194 follow-up; future scoring impact belongs to PBL-11 refinement.
No hosted parity or comprehensive diagram audit is claimed.

Success tests for the routing correction: a reader asked “what may Lane B build now?” reaches
the held-work-order boundary; a reader asked “what should Lane A prepare now for manual intake?”
reaches the Q9/FB-05 packet; a reader asked “does G105 closure require AI delivery?” gets no;
a reader asked “which current sprint contains PBL-11?” finds no allocation. A contradicting
answer fails documentation acceptance even if all automated checks pass. No deterministic runtime
or financial-failure claim is made about an unbuilt feature.

## What you did instead

Reviewed sources at unchanged cccfb6a and drafted this separate routing finding. B-081's bounded
verification remains in its existing working-tree record and is not reopened. No governing
source, existing lifecycle, code, workflow or sprint allocation changed. No commit or push.
Graph metadata still names committed cccfb6a, not this new handoff or B-081's uncommitted review.
Lane A acknowledgement and graph coverage are required for this entry after its eventual commit.

**Final validation:** 15/17 local checks pass; only B-082's missing acknowledgement and graph
coverage fail. The existing B-081 verification fields pass closure-readiness. Graphify query was
used for scoped navigation; docs-drift still describes committed cccfb6a, not these working-tree
edits. Lane A owns acknowledgement and graph refresh; no self-acknowledgement is recorded.

## Approve / reject

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Current V1/manual-intake work separated from future PBL-11 | Phase 1: use the priority view and existing D-194 proposal authority |
| Approve-with-conditions | Modular_PRD current-sprint tracing | Phase 1: correct stale status pointers against D-171/work order |
| Approve-with-conditions | Q9 → FB-05 evidence → G105 reconciliation | Phase 1: named decisions and specification verification; no AI dependency presumed |
| Reject | Four equal-priority feature tickets, an invented active sprint, or automatic S2 release | Preserve the actual execution boundary |
| Defer | PBL-11 promotion/build and relocation | Existing separate selection and authorization process |
