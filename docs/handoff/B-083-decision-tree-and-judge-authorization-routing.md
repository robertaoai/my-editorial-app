# B-083 — Follow the decision tree within existing authority; ask at the next new decision

- **Raised:** 2026-09-08 by Lane B
- **Kind:** finding
- **Phase:** 1
- **Blocks:** nothing, reporting only; D-194 proposal preparation may continue
- **Status:** Answered
- **Lane A:** **Acknowledged and applied 2026-09-08. The finding is accepted, and it lands on Lane A's
  own behaviour rather than on a document.**
  **The action/authority pairing, stated once:** `D-196` supplies the routing; **`D-194` supplies
  authority to prepare this proposal**; `D-183`/`D-186` govern later adoption and application.
  **No approval to draft was sought this turn, because none is needed** — and the previous turn ended
  by saying exactly that and then stopping anyway. That was the defect. **The proposal is now
  prepared: `D-197`.**
  **The overstatement is corrected.** *"The only current `V1` readiness work available"* is replaced
  by *"the current manual-intake proposal"*. `D-196` routes work; **it never claimed an exhaustive
  inventory of what Lane A may do**, and independent authorized work continues alongside.
  **`D-197` contains what step 3 asked for:** both unresolved choices with their consequences —
  **Choice A**, the `T1` execution identity and Line authority, kept strictly separate from the
  ratified fact that a human *supplies* the data; and **Choice B**, source author/date handling,
  which `D-194` did not settle because those fields are not among the three intake inputs it named.
  Complete candidate `FR-01` behaviour is drafted: requiredness, producer and provenance, executor
  and Line, transition completion, ordering, duplicate intake and error behaviour. **A missing
  required value prevents `T1` completion, and no incomplete draft state is invented.**
  **One finding surfaced while drafting.** `AC-01` says two different things in two tiers:
  `Modular_PRD` reads *"≥1 topic tag"* while `FN-GATES` reads *"exactly one subject topic"*.
  `G39`/`D-38` established these are **two concepts** and corrected only the `Fn_Spec`, so the higher
  tier still carries the pre-`D-38` wording. **Proposed, not applied** — it sits inside the exact text
  the packet would touch, and correcting one side alone would leave the tiers disagreeing in the
  opposite direction.
  **The ask is bounded and singular**, per step 4: select Choice A and Choice B, and say whether the
  five named dependent edits may be applied. One response may do both. **If the choices are selected
  but application is not authorized, Lane A records the selection and stops.**
  **`B-082`'s independent verification at `de898e3` is preserved and transported** — it is not moved
  back to `Open` for this clarification. **A Lane B verdict is a reviewer recommendation, not an
  authorization**, and *"Judge Approved"* is not a required phrase: the identifiable action and scope
  are what determine what was authorized.
  **Unchanged:** `D-171`/`B-071`'s hold and owner, `PBL-11`'s future-backlog status, `Q9`, `FB-05`
  and `G105` all **open**, no build, no sprint, no lane transition, no push of the accumulated range.
- **Evidence:** Judge clarification in the 2026-09-08 review request; review at de898e3505b3b30e230688140572d87610b3aa0e; D-183 §5.14e8, D-186 §5.14e11, D-194 adopted approval statement, D-196; docs/README.md request-to-execution map; handoff README/TEMPLATE; B-082's independent verification

## What happened

**Clarified request:** independently verify B-082, then explain when Lane A should follow an
approved decision tree using existing authority and when a new Judge decision is required.
Provide a parent-first action table, concrete follow-up wording and acceptance criteria.
Keep this a documentation review and proposal. Do not build, apply governed changes, select
unresolved product options, lift a hold or publish an accumulated commit range.

**Finding:** the current rules already distinguish the acts. D-183 separates clarification,
drafting authority, approval of an artifact, checkpoint authority and push authority. D-186
explicitly rejects treating an analysis verdict as permission to apply it. D-196 correctly
says that it routes work and grants no new execution authority. The quoted response is
therefore not evidence that these sources now authorize a build. The practical gap is that
the decision tables do not consistently show **the next action and the existing authority
for it**, leaving readers to infer that every “Accept” means either “ask again” or “execute.”

I contributed to that ambiguity: B-082's table used “Accept” for both review routing and
later Judge decisions without an explicit authority column. This finding clarifies that
presentation. It does not propose another approval regime or reopen B-082's verified fixes.

Three areas need clearer language:

1. **Who decided what:** a Lane B review verdict is a recommendation. A Judge act is the
   user's adoption of a specific action or choice. The shared word “Approve” does not make
   those actors or objects interchangeable.
2. **What may proceed now:** a follow-up phase identifies the owner, timing and dependency.
   Existing authority can cover its next action. Reaching that phase does not grant authority
   for actions that were excluded, and it does not require repeating authority already given.
3. **What finishes the item:** source correction, independent handoff verification, product
   readiness, phase acceptance and remote publication require their own applicable evidence.
   B-082 is verified; Q9/FB-05/G105 remain open. Neither result implies the other.

The downloaded feedback guide and intake template were read as submitted research, not as
new instructions. Their stronger exclusion of the original submitter from verification and
their additional intake-ID machinery are not adopted here. The repository TEMPLATE and
D-102 remain controlling: the verifier must be independent of the answering/applying side.
B-077 stays separate; no new intake ledger or duplicate backlog is introduced.

## What you need

### Parent first — classify the act before following its children

Read the user's words with the explicitly referenced packet. D-183 requires an identifiable
object or immutable revision, action, scope/exclusions and applicable checkpoint; it does not
require a magic phrase. Putting “Judge Approved” above a review table does not authorize every possible
future child. If the action or object cannot be identified from that context, ask one focused
question about that missing choice after preparing the reviewable options. Continue useful
work that does not depend on the answer.

| Order / parent | Situation | Lane A action now | New Judge act? / completion evidence |
|---|---|---|---|
| 1 / none | Lane B says Approve, Approve-with-conditions, Defer or Reject | Treat it as the reviewer's recommendation and inspect the named condition and follow-up | **No authority is created.** Identify the applicable existing Judge act before any dependent execution |
| 2 / 1 | Judge approves the decision-tree direction, here “use the actual dependency chain” | Use Q9 + FB-05 as one current proposal, G105 as evidence reconciliation and PBL-11 as future backlog; cite D-196 | **No repeat approval for that routing.** It does not settle the remaining Q9 choices or expand D-194 |
| 3 / 2 | Prepare Q9 options and FB-05's manual-intake proposal | Draft the two together now; use the already ratified package, missing-input rule and module partition | **No new drafting approval. D-194 expressly authorizes this proposal.** Finish a reviewable packet with choices, proposed text, acceptance criteria and affected views |
| 4 / concrete options from 3 | Choose Reporter T1 execution identity/Line authority and source author/date handling | Submit the remaining alternatives and consequences to the Judge; identify any real dependency on B-071's contract | **Yes, these choices remain open.** Record the selected option or explicit deferral; never infer it from approval of the tree |
| 5 / 4 and complete proposed changes | Apply the completed governed specification and dependent views | Present a bounded application packet. The same Judge act may select the options and authorize the exact dependent edits if it explicitly covers both | **D-194's drafting permission alone is insufficient.** Reuse an act that already covers the exact edits; otherwise request that bounded authority once. Do not require separate permission for every file |
| 6 / applied source and criteria | Verify the correction and reconcile Q9/FB-05/G105 evidence | Independent reviewer checks the named revision; Lane A records each disposition against its criteria, with the verifier recording the handoff result | **No ceremonial approval for a factual check already in scope.** Judge-reserved acceptance, ratification or risk decisions still need their actual act. No automatic S2 or phase closure |
| Independent branch | B-071/D-171 work, future PBL-11 selection, a new code sprint, lane transition or push | Use each existing owner and applicable authority; continue independent authorized preparation | This tree supplies **none** of those acts. A material new scope/checkpoint needs its own authority, or a single explicit act covering the named scopes |

“Explicit” concerns the action and scope, not the literal words “Judge Approved.” Do not ask
the Judge to repeat a clear existing instruction. Materially changed drafts or a different
checkpoint are assessed under D-183, rather than inheriting the earlier approval.

An **Approve-with-conditions** row means do the authorized prerequisites and gate only the
dependent action on its conditions. A **Defer** recommendation retains an owner and follow-up;
it does not suspend all work. A previously satisfied condition must not be treated as still
pending: D-183's own deferred-registration example explicitly proceeds once its prerequisite
is met. A **Reject** recommendation does not silently become a Judge ruling or a handoff
`Resolution: Rejected` (that value is not in the repository vocabulary).

### Draft fix — Lane A's next response

> B-082's bounded status/routing correction has been independently verified at de898e3. I will
> now prepare the current manual-intake proposal under D-194: Q9's remaining actor/Line and
> author/date options together with FB-05's proposed behaviour. The package being manual is
> already ratified, so I will not ask you to decide it again. I will return the concrete open
> choices and the proposed dependent edits for one bounded Judge decision, stating separately
> which choices are being selected and which edits may be applied. G105 will follow their
> evidence. B-071/D-171 retains its separate hold and owner; PBL-11 remains future backlog.

Replace “the **only** current V1 readiness work available” with “the current manual-intake
proposal.” D-196 preserves independent B-071 work; it does not claim an exhaustive inventory
of everything Lane A may do. This is a response correction, not a reason to reopen B-082.

### Optional navigation clarification — proposed, not applied

If a persistent reminder is needed, use one short paragraph immediately after the promotion
rule in `docs/README.md`. Keep D-183/D-186 as the authority and the handoff README as the sole
transaction SOP. Do not copy this decision table into every tier or change the template fields.

> **Following a decision table.** A lane's verdict recommends; the Judge's instruction decides
> the named action. Read that action and its scope from the instruction and the referenced
> packet (`D-183`), not from “Approve” alone. The follow-up phase names ownership and sequence.
> Continue a next step already covered by existing authority without requesting it again; ask
> only for a remaining choice, material change or checkpoint that authority does not cover.
> Prepare the concrete proposal before requesting approval to apply it. Drafting permission
> does not approve the resulting draft (`D-186`).

This paragraph explains existing rules. Lane A can answer this finding by clarifying their
application and using the corrected response; it need not invent a new policy decision merely
to cite them. Any adoption into governed sources stays a separately bounded documentation
application, with the applicable Judge act identified rather than presumed from this review.

### Step-by-step Lane A follow-up

1. **Acknowledge this finding** in its existing header. Preserve B-082's independent verification
   and its named evidence; do not move that correction back to Open for the new clarification.
2. **State the action/authority pairing once:** D-196 supplies routing; D-194 supplies proposal
   preparation authority; D-183/D-186 govern later adoption/application. No request to re-approve
   that preparation is needed. Correct the “only work available” overstatement.
3. **Prepare one Q9/FB-05 proposal** with the two unresolved choices, their consequences and
   complete candidate FR-01 behaviour. Mark alternatives as proposed. Include requiredness,
   producer/provenance, executor/Line, transition completion and error behaviour. Keep human
   data supply separate from the unresolved identity of the transition executor.
4. **Ask at the real choice boundary:** offer the concrete options and exact dependent edits.
   A single response may select options and authorize bounded documentation application when
   it says both. Record the actual act under D-183; an approval of findings alone does not do so.
5. **Apply only the covered documentation and verify it.** Resolve real cross-reference impacts
   using the map below. Reconcile G105 from Q9/FB-05 evidence; preserve independent holds and
   PBL-11's status. Independent verification and phase acceptance remain distinct acts.
6. **Transport and refresh evidence through the existing SOP.** Name applying and verification
   revisions accurately. Lane A owns graph refresh after source commits. This review does not
   request or authorize publication of the locally accumulated ancestor range.

### Source and view impact — no copied policy in product specifications

| Source / view reviewed | This approval clarification | Existing D-194 proposal follow-up |
|---|---|---|
| Register D-183/D-186/D-194/D-196; docs README | Existing rules agree. Optional navigation paragraph above only; no new authority claimed | Record the remaining Judge act in its owning Register entry |
| Modular_PRD §7.4/§8/§10 | B-082's two status pointers verified. Module/version/sprint tracer remains unchanged | Q9 and affected FR-01 requirements must reflect the adopted manual contract and the remaining answers |
| FN-GATES §3.1/§6/§7 | Existing agent/author-date and producer-gap wording is known dependent work, not newly resolved by D-196 | Supply complete behaviour; supersede obsolete producer/timing alternatives against the recorded answers |
| Storyboard panels A1/A2 and B1/B2; their sequence/data-flow views | Dated representations cannot decide T1 authority. “Lane A/B” in this historical business storyboard is not development lane ownership | Reconcile manual package supply and executor attribution; preserve module context and one shared editorial article. Mark historical panels or update the owning current view |
| M-POC requirements and requirements-traceability map | No change to the separate source of truth or shared tracer | Show direct M-MVP preparation versus M-POC manual extraction from the external-capture example. No integration or module activation inferred |
| Encyclopedia citation ledger | Local dependency assessment only; hosted content was not inspected | Entry 02 ratification and Entry 06 CR-14 remain in the existing intake follow-up. Record actual hosted review/update evidence before claiming parity |
| Build Spec, work order, artifact inventory, Phase Closure | Unaffected by this review: no sprint scope/DoD, work order, governed artifact lifecycle or live lane transition changes | Reassess applicability only when a later approved packet actually changes those facts; name unaffected tiers under D-54 |
| Application code, UI implementation, workflows and frozen sources | Unaffected | No application build or deployment authorized |

### Failure-derived acceptance criteria

These are documentation acceptance tests, not predictions of financial loss or unbuilt runtime
behaviour. A response fails review when the named evidence cannot support its claim.

| Failure to prevent | Success criterion |
|---|---|
| Lane B “Approve” is recorded as a Judge authorization | Every claimed act identifies the Judge's instruction, its adopted object/action and the relevant Register record; a reviewer verdict is labelled as such |
| “Judge Approved: decision tree” silently selects Q9 options or authorizes a build | Routing is accepted; unresolved actor/Line and author/date choices remain explicit; the held code unit remains held |
| Repeated approval requests delay already authorized preparation | Lane A produces the D-194 Q9/FB-05 proposal without another drafting-permission request |
| A follow-up phase is treated as either universal authority or a lane-wide stop | The response names the next action, its authority and only its real unmet dependency; independent authorized work continues |
| Partial evidence closes the whole chain | B-082 verification is bounded; Q9 decision, FB-05 specification/verification and G105 disposition each name their own evidence |
| A matching graph HEAD is claimed to cover new handoff drafts or hosted content | Graph evidence names the actual source revision and covered fragment; new working-tree text and hosted parity are excluded until checked |

**Closure target for this finding:** Lane A answers with the correct action/authority mapping
and uses the corrected next-step wording, or applies an explicitly authorized minimal navigation
clarification if needed. At a named committed revision, an independent reviewer checks that
response/source against the criteria above. This does not depend on completing Q9, implementing
manual intake, closing B-071 or building PBL-11. Keep existing handoff fields; no automatic
promotion from Acknowledged to Verified.

## What you did instead

Verified B-082's bounded source correction and wrote this separate finding using the repository
template. Changed only the two Lane B handoff files. No governed source, graph, application,
workflow, lane status or Git history was changed; no commit or push was performed.

At the reviewed HEAD, all 17 local consistency checks passed, graph metadata matched de898e3
with `stale: false`, and frag127's exact semantic comparison passed for its one node and four
edges. These observations precede the two handoff edits. Graph query was used for orientation;
the source review supplied the semantic conclusions. No corpus-wide or hosted parity claim.

**Final working-tree validation:** 15/17 local consistency checks pass. The two failures are
this new entry's missing Lane A acknowledgement and its absence from the curated graph.
B-082's independent verification fields pass the lifecycle check. The new local handoff link
resolves and the tracked diff has no whitespace errors. `docs-drift` still describes committed
de898e3, not the new handoff text. Lane A owns acknowledgement and graph coverage/refresh;
no self-acknowledgement or graph-complete claim is recorded here.

## Approve / reject

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | B-082 bounded source correction | Phase 1: preserve independent verification at de898e3 |
| Approve | Existing D-194 proposal authority and D-196 routing | Phase 1: prepare Q9/FB-05 now; no repeat drafting approval |
| Approve-with-conditions | This B-083 clarification and optional navigation text | Phase 1: Lane A answers; any governed application names its actual authority; independent verification at the resulting revision |
| Defer | Remaining Q9 choices and application of the resulting governed specification | Phase 1: Judge reviews the concrete options and bounded application packet |
| Reject | Review verdict as execution authority; automatic S2 release, phase closure or PBL-11 promotion | Preserve the existing Register, work-order and lifecycle boundaries |
