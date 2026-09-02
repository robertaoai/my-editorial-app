# V1-B071-CORRECTIVE-PLAN — T5/T6 Ontology Correction: Implementation Plan (DRAFT)

**Status: DRAFT.** Split per `B071-R23`: **the proposal content below (the `D-182` decision text,
ontology relabel, Final Sign-Off correction, propagation) is unapplied to any governed tier.** This
file's own *existence* is a real artifact fact, and that fact **is applied** — `V1-ARTIFACT-
INVENTORY.md` carries its row now; `V1-DECISION-REGISTER.md`/`V1-BUILD-SPEC.md` propagation of that
same fact is pending `AUTH-DOC` (§7). This file exists so the corrective packet
`docs/handoff/B-071-b070-options-and-desk-editor-ontology-require-correction.md` describes can be
reviewed as one connected plan before any of it is written into `V1-DECISION-REGISTER.md`,
`V1-BUILD-SPEC.md`, `V1-ARTIFACT-INVENTORY.md`, `Modular_PRD.md`, `FN-GATES-01-05.md`,
`FN-EXCEPTIONS-06-11-12.md`, `FN-PUBLICATION-09-10-13.md`, the RACI matrix, the crosswalk,
`B-070`, or `LANE-B-WORK-ORDER.md`. Nothing here is a decision. It becomes one only if the Judge
approves it after independent review (see §Approval Gate).

**Owner:** Lane A (drafting). **Independent reviewer:** Lane B (the entry that raised B-071).
**Approver:** Judge/Chief Editor — same person, `D-158`.

**Source:** `docs/handoff/B-071-*.md` in full, including all completed independent-review rounds
(`B071-R1`–`R37`) and the Chief Editor's direct clarification (`B071-R22`).

**Authorization vocabulary (`B071-R30`):** this plan's four approval checkpoints are named
`AUTH-DOC`, `AUTH-F1`, `AUTH-F2`, `AUTH-ROUTE`. These names belong to this plan only. Development
**Lane A/B/C** (`CLAUDE.md`/`AGENTS.md` ownership) and the product's `T1`–`T6`/`EG*` gates are
separate vocabularies and are never abbreviated as "Gate" in this file, to remove the collision
`B071-R30` identified between "Gate B" and "Lane B."

**Revision history:**
- Draft 1 (`80c8f38`): consolidated steps 1–9 from B-071's original findings.
- Draft 2 (`c6afdd0`): incorporated round-1 review `B071-R8`–`R14`.
- Draft 3 (`2147636`): incorporated round-2 review `B071-R15`–`R21` and the Chief Editor's
  `B071-R22` clarification that B-070's two options are not alternatives but two separate
  features — §5 retired the either/or framing; Gate B split into B1/B2.
- Draft 4 (`6b9a78f`): incorporated round-3 review `B071-R23`–`R29`: splits "applied" into
  artifact-fact-applied vs. proposal-content-unapplied (`R23`); removes the external-acceptance
  contradiction from Final Sign-Off's refusal list (`R24`); states explicitly that Gate A
  verification does **not** lift `D-171` (`R25`); adds a third **Route Activation Gate** so Gate B2
  and route enablement stop being conflated (`R26`); narrows Gate B1 to a shared component + test
  matrix, never named-route authorization (`R27`); corrects the graph edge semantics in
  `frag119.json` (`R28`). `R29` (push/remote-equality) is a process condition on when round 3/Gate A
  can be marked `Verified`, not a content change.
- **Draft 5 (this revision):** incorporates round-4 review `B071-R30`–`R37`, reviewed at shared
  HEAD `d3cadda`: renames the four approval checkpoints `AUTH-DOC`/`AUTH-F1`/`AUTH-F2`/`AUTH-ROUTE`
  to remove the collision with development Lanes A/B/C and product `T1`–`T6`/`EG*` gates (`R30`);
  removes the residual sentence in §5 implying `D-171` expires once documentation verification
  completes, and restates non-expiry everywhere the hold is discussed (`R31`); makes explicit that
  `AUTH-F1`/`AUTH-F2` may be *selected* in either order but never *exercised concurrently* — one
  named authorization run at a time, with its exclusions and completion/handback recorded before
  the other is exercised (`R32`); completes the §7 write set with B-071's and this plan's own
  post-application lifecycle updates, and marks B-070 already-applied/cite-only instead of
  scheduling a second edit to it (`R33`); corrects review-round and commit metadata throughout, and
  replaces the mutable round/gate-count language with the four stable authorization IDs (`R34`);
  specifies what the `AUTH-DOC` documentation pass must do to `frag119.json` — add the `D-182` node,
  transition B-071/plan lifecycle labels, preserve the `D-171` edge (`R35`); requires distinct
  executor IDs, roles/nodes, evidence IDs and purpose codes between the two Assurance Preparation
  acts, with a same-executor negative test (`R36`); and restates the external-acceptance refusal
  condition so it names the governed pre-Delivery/Delivery transition as the thing refused, never
  the external record itself or `T6` (`R37`).

**Artifact classification and propagation (`B071-R8`, `R16`):** this file is a `docs/v1/` tracking
artifact under `D-36`, the same class as `V1-PHASE-CLOSURE.md`. It is registered in
`V1-ARTIFACT-INVENTORY.md`. Its *content* is unapplied, but its *existence* is a real artifact fact
that must reach all three trackers (Register, Build Spec, Inventory) in the same `D-54` pass as
`D-182` — a row alone in the Inventory is not complete propagation. When `D-182` lands, this file
and its Inventory row are marked historical/superseded, **never deleted** — removing the row would
erase the artifact's own history.

**Graph representation (`B071-R15`, refined `B071-R35`):** `graph-coverage` failed on this file and
`B-071` because neither had a curated node, which meant round-2 review could not use Graphify to
locate the draft it was reviewing — a check staying red by design defeats its own purpose. Both are
now represented as lifecycle-status nodes (`docs/graph-fragments/frag119.json`, merged) —
`Open`/`DRAFT`/`proposed` labels only. This represents status, not approval; it does not assert the
disputed ontology as decided. `frag119.json`'s B-071 node description currently stops at `R22` and
two review rounds; it is mechanically current (matches the committed source) but semantically behind
it — bringing it to `R1`–`R37`/Draft 5 is status-only text and does not require `AUTH-DOC`. Adding
the `D-182` decision node and transitioning these nodes to Applied/historical does require
`AUTH-DOC`, because that is the point the disputed ontology becomes decided (§8).

---

## Read order

Sections are dependency-ordered. §2 cannot be reviewed correctly without §1; §4's completion unit
depends on both §2 (who) and §3 (Final Sign-Off's actual position in the sequence, corrected below
— it comes *before* T5, not after).

## §1 — Proposed decision (Lane A drafts; Judge originates/approves)

**Proposed register entry:** `D-182` — *T5/T6 corrective ruling: Desk Editor is one actor role,
Editorial Desk Review is a separate node required on every route, T5 is a three-act completion
unit, Final Sign-Off precedes T5 and carries no `R` of its own.* Partially supersedes
`D-175`–`D-181` at clause level (table below). Does **not** touch `D-171`'s S2 hold, unaffected and
not reopened, consistent with every decision in the `D-172`–`D-181` chain.

### Proposed decision content (normalized draft derived from the Judge's clarifications, not verbatim register text — `B071-R10`)

1. `T5-EDITORIAL-REVIEW` is a single route-selected virtual review: Desk Editor for
   `ROUTE-PROD-1`; Chief Journalist for the other named routes. A fallback reviewer is an internal
   judgment preparer, never a replacement for the route's human or external RACI `A`.
2. `T5-ASSURANCE-PREPARATION` runs on **every** route, not only where Editorial Review selects
   Desk Editor (`B071-R18`): the Editorial Desk Review node (mapped to `ROLE-DESK-EDITOR`) and the
   Chief Journalist review node each seal a separately attributable brief on every route. It is
   internal preparation, not independent Line 3 assurance.
3. Both T5 workstreams are held before `T6`. A report cannot satisfy both merely because the same
   role participated; every act carries a distinct workstream/purpose code, and the two Assurance
   Preparation acts additionally carry distinct executor IDs — one executor cannot satisfy both by
   relabeling (`B071-R36`, and see §3/§4's testable requirement).
4. `T6` remains the natural-person Chief Editor's final judgment. Agent attempts to record the
   final `T6` disposition remain refused. The complete T5 packet supplies the judgment-rule inputs
   OD4 would require before any future automation; OD4 remains deferred and is not a pipeline
   stage.
5. Sheet 1 `A` owns route/stage accountability. Sheet 2 `A` owns task accountability; where a task
   has no local `A`, the governed parent/milestone/stage `A` supplies the effective task `A`.
   Neither scope overwrites the other; each scope has exactly one effective `A`.
6. `OP-FINAL-SIGNOFF` is a task-level approval control that **precedes** T5, not a step after it
   (`B071-R17`): it signs completion evidence from prior applicable Sheet 2 `R` work. Its signer is
   the one effective task `A` — not automatically human-only; human-only is a `T6`-specific rule
   and does not inherit to Final Sign-Off. `R = not_applicable` for the sign-off control itself,
   not `unknown`. The required external acceptance/mandate record is a separate, separately
   attributable, append-only record at its own governed point (normally before Delivery); when it
   is missing or invalid, only the governed pre-Delivery/Delivery transition is refused — never
   Final Sign-Off and never `T6` (`B071-R24`, restated `B071-R37`).

### Corrected dependency order (`B071-R17`)

```text
Applicable Sheet 2 work with R
  → completion evidence sealed
  → OP-FINAL-SIGNOFF by exactly one effective task A (R = not_applicable)
  → signed workstage package
  → T5 Editorial Review (one route-selected act)
     + T5 Assurance Preparation (Desk Editor act and Chief Journalist act, every route,
       distinct executor IDs required between the two acts — B071-R36)
  → one non-judgment three-act join: Drafted → Reviewed
  → human-only T6 Chief Editor judgment
  → external acceptance/mandate at its governed point where required — its absence refuses only
    the governed pre-Delivery/Delivery transition, never Final Sign-Off or T6 (B071-R37)
  → Delivery
```

Only `T6` is categorically human-only. Final Sign-Off's signer is whichever person resolves as the
one effective task `A`; the same role/identity may perform the route-selected Editorial Review and
its own Assurance Preparation act, but these remain different evidence records and purposes — one
executor cannot satisfy both Assurance Preparation acts by relabeling, and this is a stated,
testable requirement, not a stylistic caution (`B071-R36`).

### Clause-level lifecycle disposition (`B071-R19` — replaces the prior "caution, not yet
resolved" note with an actual per-clause table)

| Origin | Retain | Re-derive or supersede |
|---|---|---|
| `D-175` | Human Chief Editor at T6; one T5 stage; Senior Journalist EW trigger; route/stage `A`; `ENV-EXT`; T5 Line 1/T6 Line 2 placement | `ROLE-CHIEF-EDITORIAL-DESK`; route-family one/two-reviewer cardinality; any claim that node labels prove actor separation |
| `D-176` | The 43 applicability dispositions; blank external-source cells remaining `unknown`; undecomposed milestone holds; `ROUTE-PROD-1` route `A`; `ENV-EXT` | "No `A` inherits" becomes the governed local-task-else-parent rule; Final Sign-Off missing-`R` hold becomes `R = not_applicable`; Final Sign-Off sequence/evidence row is re-derived (now precedes T5) |
| `D-177`/`D-178` | Route-basis semantics; canonical reveal-event name; blind/reveal ordering; external-trigger versus external-acceptance separation; one non-judgment completion join; historical `[V1]` treatment | T5 event count/prerequisites/bundle membership; return/rerun scope; affected evidence overlay; T5 cardinality measure (now three acts); readiness row removing Final Sign-Off's missing-`R` hold |
| `D-179`/`D-180` | Historical/target marking method; human-only `AC-06a`; blind-order/disagreement intent; `AC-08a` ownership by `FR-06`; unaffected EW/Delivery/external-acceptance IDs; `SEC-03a` Line placement | `US-04a`/`US-05a`, `FR-04a`/`FR-05a`, `AC-05a`/`AC-05b` and bundle-dependent AC text; `G-05a`; `SEC-01a`; RACI T5 acts and successor proof |
| `D-181` | `AC-01b`; `G-02a`; consuming-evidence `AC-22` outside changed T5 prerequisites; join-only ownership of `Drafted → Reviewed` | `D-181` as current anchor (`D-182` becomes current); any route-dependent one/two-act prerequisite within `AC-22` or the join contract |

`D-171`'s explicit S2 hold is retained, unaffected, and not reopened by any row above. It is
narrowed only by an explicit `AUTH-F1` or `AUTH-F2` decision for one named unit; documentation
verification (`AUTH-DOC`) never narrows it (`B071-R25`, restated `B071-R31`).

---

## §2 — Ontology normalization (depends on §1)

| Item | From | To |
|---|---|---|
| Canonical actor role | — | `ROLE-DESK-EDITOR` (sole canonical Desk Editor actor; unchanged from CSVs) |
| Workcell/review node | `ROLE-CHIEF-EDITORIAL-DESK` (executor role) | `NODE-EDITORIAL-DESK-REVIEW` (virtual node, mapped to `ROLE-DESK-EDITOR`, **required on every route for Assurance Preparation** — `B071-R18`, not conditioned on which route Editorial Review selected) |
| Chief Journalist | — | Stays distinct; performs the route-selected Editorial Review act on non-`ROUTE-PROD-1` routes AND its own Assurance Preparation act on every route |
| Display aliases | `Editorial Desk Editor`, `Desk Chief`, `Chief Editorial Desk` | `Chief Editorial Desk` is the node/workcell display label for `NODE-EDITORIAL-DESK-REVIEW`, not a dropped term (`B071-R14`). `Editorial Desk Editor`/`Desk Chief` remain optional actor display aliases for `ROLE-DESK-EDITOR` only if the Judge separately approves; none are new IDs |

**Ownership of the actor/node distinction (`B071-R14`):** the rule that one actor role maps to one
review node is stated here and in §1/§3 — Product/Fn_Spec (`Modular_PRD.md`, `FN-GATES-01-05.md`)
is where it becomes governed functional behavior. The `docs/specs/ux/` file in §6 **represents**
that rule (labels, refusal states); it never originates it. If UX text and Fn_Spec text disagree
after §7's propagation, Fn_Spec wins and UX is corrected, not the reverse.

**Files to edit (not yet edited):** `docs/governance/raci-involvement-matrix.md` §§3.1/8,
`docs/governance/factory-route-operation-crosswalk.md` §§2–4, `docs/fn-specs/FN-GATES-01-05.md`
§11, any role catalog referencing `ROLE-CHIEF-EDITORIAL-DESK` as an executor.

**Verification:** grep for `ROLE-CHIEF-EDITORIAL-DESK` across `docs/` after edit — zero
executor-context hits should remain (historical citations may keep it as prose); every route row
shows both Assurance Preparation acts required, not just `ROUTE-PROD-1`.

## §3 — Accountability model and Final Sign-Off (depends on §1)

- Task `A` (Sheet 2) and route/stage `A` (Sheet 1) are separate scopes; parent/milestone/stage `A`
  fills a task with no local `A`; neither overwrites the other.
- `OP-FINAL-SIGNOFF` carries `R = not_applicable`, not `unknown`, and **precedes T5** in sequence
  (`B071-R17` — corrects the prior draft, which placed it after T5 and inherited T6's human-only
  rule onto it).

**Testable refusal conditions (`B071-R13`, corrected by `B071-R24`):** a `OP-FINAL-SIGNOFF` act is
refused, not merely deferred, when either of the following holds — **external acceptance is
deliberately not in this list** (see below):

- Required prior Sheet 2 `R` evidence is incomplete for the route.
- The effective task `A` resolves to zero or to more than one person.

A valid sign-off is append-only, records accountable actor/authority scope/evidence-IDs/timestamp/
decision, and closes only its own workflow stage. Its signer is the resolved effective task `A` —
not necessarily a natural person; **only `T6` is categorically human-only.** Final Sign-Off never
depends on T5, T6, or external acceptance, and never records or implies external GRC acceptance.

**External acceptance is a separate, protected record; only the downstream transition is refused
(`B071-R24`, restated `B071-R37`):** the earlier draft said "external acceptance/mandate is
refused," naming the record itself as the thing being refused or acted on — the wrong subject. The
required external acceptance/mandate record remains separately attributable and append-only, and no
implementation may reject or mutate it. When it is missing or invalid, only the route's governed
pre-Delivery/Delivery transition is refused — **never** Final Sign-Off and **never** `T6`. This also
removes the contradiction `B071-R17` flagged: the earlier draft both listed missing external
acceptance as a Final-Sign-Off refusal condition and separately said it wasn't one.

**Assurance Preparation executor separation is a testable requirement, not a caution
(`B071-R36`):** the two `T5-ASSURANCE-PREPARATION` acts (Editorial Desk Review node, Chief
Journalist review node) must carry distinct executor IDs, distinct canonical roles/nodes, distinct
evidence IDs and distinct purpose codes. The same executor may perform the route-selected Editorial
Review plus **that executor's own** Assurance Preparation act, but never both Assurance Preparation
acts under two labels. Verification must include a negative test: an account holding both the
`ROLE-DESK-EDITOR` and Chief Journalist labels attempts to submit both Assurance Preparation acts
and the attempt fails on executor-identity equality, independent of whether evidence IDs and purpose
codes are already distinct.

**Files to edit:** `docs/governance/factory-route-operation-crosswalk.md` (remove "missing `R`
unresolved" marking on `OP-FINAL-SIGNOFF`; reorder it before the T5 row; add refusal conditions
above), `docs/governance/raci-involvement-matrix.md` (Sheet1/Sheet2 `A` separation note).

**Verification:** crosswalk shows Final Sign-Off before T5, not after; `OP-FINAL-SIGNOFF`'s `R` is
no longer unresolved; each refusal condition above has a corresponding negative test; no test
asserts a human-only rule on Final Sign-Off's signer; the same-executor negative test above exists
and fails as specified.

## §4 — Three-act T5 completion unit (depends on §2, §3; corrected by `B071-R11`, `R18`, `R36`)

**Every route requires exactly three separately sealed acts, each with its own evidence ID and
workstream/purpose code, and each gated on a signed Final Sign-Off package (§3):**

1. One `T5-EDITORIAL-REVIEW` act — route-selected executor (Desk Editor for `ROUTE-PROD-1`, Chief
   Journalist otherwise).
2. One `T5-ASSURANCE-PREPARATION` act from the Editorial Desk Review node — **every route**, not
   only where Editorial Review selected Desk Editor.
3. One `T5-ASSURANCE-PREPARATION` act from the Chief Journalist review node — **every route**.

The same person may hold the role behind two of these acts (e.g. Chief Journalist performs both
the route's Editorial Review and its own Assurance Preparation act). **Role identity performing
two acts never collapses them into one, and never counts as independence-by-difference** — acts
are distinguished by workstream/purpose code and evidence ID, not by who performed them. Acts 2 and
3 additionally require distinct executor IDs from each other in all cases — a single executor may
never hold both Assurance Preparation acts regardless of which labels that executor carries
(`B071-R36`; see §3's negative test). Exactly one deterministic join reads all three sealed acts and
performs `Drafted → Reviewed`; it fires once and only once all three exist.

Re-derive against this three-act unit:

- Bundle membership (which artifacts satisfy `Drafted → Reviewed`)
- Return/rerun behavior
- Metrics (`G-05a` and related)
- Security rows (`SEC-01a`, `SEC-03a`)
- Acceptance criteria `AC-05a`–`AC-08a`

**Files to edit:** `docs/Modular_PRD.md` (`US-04a`/`US-05a`, `FR-04a`/`FR-05a`,
`AC-05a`–`AC-08a`), `docs/fn-specs/FN-GATES-01-05.md`, `docs/v1/V1-BUILD-SPEC.md` §"S2 — Line
assignment and four-eyes" (target DoD only — `D-171`'s hold means no S2 rewrite/authorization
here).

**Verification:** exactly one join performs `Drafted → Reviewed`, firing once per route; all three
acts carry distinct evidence IDs on every route; no evidence ID or purpose code satisfies two acts
even when the same person performed them; the two Assurance Preparation acts carry distinct
executor IDs on every route, verified by the negative test in §3.

## §5 — Supersede the false either/or; define two feature units (depends on §4; replaces the prior
"redraft B-070's two options" — `B071-R22`, Chief Editor clarification)

**B-070's Option A and Option B are not alternatives.** They specify two different features; the
Judge is not choosing between them. Both are superseded *as options* while their valid functional
content is preserved as separate feature units:

| B-070 wording | Actual feature | Correct disposition |
|---|---|---|
| Option A — bounded unit now | **Feature 1 — T5/T6 judgment control:** three T5 acts, one join, human-only T6, audit evidence; no route enablement | Superseded as an option. Preserved as the corrected scope of the first bounded implementation unit (`AUTH-F1`) |
| Option B — wait for all operation shapes | **Feature 2 — factory-route operations/readiness:** resolve each route's applicable task executor, accountability and atomic completion contract, then integrate/enable that route | Superseded as an option and as a global wait. Preserved as a separate feature unit (`AUTH-F2`); it neither replaces nor blocks Feature 1's specification |

B-070's already-`Applied` correction to the stale "next code unit" instruction is **not reopened**
— only its either/or framing is superseded, and that correction is itself already recorded in
B-070's forward notice (see §7 — no further edit to `B-070` is scheduled by this plan, `B071-R33`).

**Replacement parent-first work structure:**

1. **Parent — `AUTH-DOC` documentation correction** (this plan, §1–§8): the corrected `D-182`
   ontology, lifecycle table, Final-Sign-Off ordering, acceptance ownership, complete propagation
   set and Graphify representation. `D-171` remains binding after `AUTH-DOC` is independently
   `Verified`; only an explicit `AUTH-F1` or `AUTH-F2` decision narrows it, and only for the one
   unit each names — all unnamed scope stays held (`B071-R25`, restated `B071-R31`).
2. **Child — `AUTH-F1`, Feature 1 (T5/T6 judgment control):** after `AUTH-DOC` is `Verified`, a
   separate bounded authorization may build the three attributable T5 acts, the one non-judgment
   completion join, blind/reveal order and human-only T6. Enables no production, fallout or GRC
   route.
3. **Child — `AUTH-F2`, Feature 2 (factory-route operations/readiness):** resolve operation-shape
   holds and implement route-specific execution/readiness. Specification can proceed independently
   of `AUTH-F1`, but a route cannot be enabled until both its own operation contract (`AUTH-F2`) and
   the shared judgment-control dependency (`AUTH-F1`) are verified.
4. **`AUTH-ROUTE`** (neither `AUTH-F1` nor `AUTH-F2` alone): authorize one named route at a time,
   with its required/conditional operations, external-authority prerequisites, tests, exclusions
   and DoD.

**Authorization is serialized, never concurrent (`B071-R32`):** "independent" in steps 2–3 means
`AUTH-F1` and `AUTH-F2` have no feature dependency between them and either may be selected first —
it does **not** mean both may be exercised at once. Only one named implementation run may hold the
development lock (move Lane B `Eligible → Active`) at a time. Before the second authorization is
exercised, the first run's exclusions and completion/handback must be recorded, so it is always
possible to state which authorization a given change consumed.

**Files to edit:** none — `docs/handoff/B-070-lane-b-work-order-stale-s2-instruction.md` already
carries its correction section (append-only convention for handoff entries; applied at `d3cadda`).
This plan cites that section; it does not append to it again (`B071-R33`).

## §6 — Chief Editor publication-workspace UX spec (depends on §4)

New file: `docs/specs/ux/chief-editor-publication-workspace.md`. Must show, and the UI must
enforce:

- Both T5 workstreams (Editorial Review, Assurance Preparation) and their separate attribution,
  including the distinct-executor-ID requirement between the two Assurance Preparation acts
- Authority provenance (task `A` vs. route/stage `A` vs. external authority)
- Required external evidence/acceptance records, and that their absence blocks only the governed
  pre-Delivery/Delivery transition, never Final Sign-Off or `T6` (`B071-R37`)
- Unresolved disagreement between workstreams
- The human-only `T6` control — UI refuses submission of `T6`/publication disposition from an
  agent; only a natural-person Chief Editor action satisfies it

Marked `[V1]` per `D-36`'s spec versioning convention; new file, not an edit to an existing `[V1]`
section. **Represents** the actor/node/Final-Sign-Off rules defined in §1–§3; never their origin
(`B071-R14`).

## §7 — Complete propagation write set (depends on §1–§6; replaces the prior partial list —
`B071-R20`, completed `B071-R33`)

Single-pass sweep per `D-54`, once §1–§6 are Judge-approved (`AUTH-DOC`):

| Tier | Action |
|---|---|
| `V1-DECISION-REGISTER.md` | Add `D-182`: decision content (§1), corrected dependency order, clause-level lifecycle table, this plan's own artifact-creation fact, UX artifact creation fact, explicit `D-171` hold preservation |
| `V1-BUILD-SPEC.md` | Three-act target DoD; Final-Sign-Off-before-T5 sequence; this plan's sequencing fact; UX artifact sequencing fact — no implementation authorization, hold stays |
| `V1-ARTIFACT-INVENTORY.md` | Add `docs/specs/ux/chief-editor-publication-workspace.md`; mark this plan's own row historical/superseded (**never removed** — `B071-R16`) |
| `Modular_PRD.md` | Owning sections: `US-04a`/`US-05a`, `FR-04a`/`FR-05a`, `AC-05a`–`AC-08a`, `G-05a`, `SEC-01a`/`SEC-03a`, any T5 prerequisite in `AC-22`. §8 separately records the UX tier/file opening and unchanged S2 hold — §8 does not own the User Story rows themselves (`B071-R20` corrects the prior draft's wrong mapping) |
| `FN-GATES-01-05.md` | §11: actor/node mapping, three acts (every route), join, blind order, consuming evidence |
| `FN-EXCEPTIONS-06-11-12.md` | Three-act-aware invalidation/rerun; external-trigger vs. external-acceptance separation (`B071-R20` — omitted entirely from the prior draft) |
| `FN-PUBLICATION-09-10-13.md` | External acceptance at its governed pre-Delivery point and Delivery refusal, without moving that requirement into Final Sign-Off (`B071-R20` — omitted entirely from the prior draft) |
| `raci-involvement-matrix.md` | §§3.1/8: scoped `A` resolution, Final Sign-Off ordering, all-route Desk Review mapping, three T5 acts, one join |
| `factory-route-operation-crosswalk.md` | §§2–4: same content as above, crosswalk form |
| `B-070` | **Already applied at `d3cadda` — cite, do not edit again.** Its forward notice already records the options-superseded/feature-split correction; this pass only references it (`B071-R33`) |
| `LANE-B-WORK-ORDER.md` | Fix §1's stale `Eligible` definition (`B071-R7`) |
| `B-071` (this handoff's own record) | Lane A answer recorded; `Resolution: Applied` set once §1–§9 propagate; **never self-`Verified`** — that mark is Lane B's independent review alone (`B071-R33`) |
| `V1-B071-CORRECTIVE-PLAN.md` (this file) | Mark `DRAFT` retired with a forward link to `D-182`; file becomes executed/historical, not deleted — same non-deletion rule as its Inventory row (`B071-R33`, `B071-R16`) |

## §8 — Commit, graph sync, verification handback (depends on §7)

1. Commit the full source + curated-fragment packet in one Lane A pass.
2. `npx graphify hook-rebuild`. In this same pass: add the `D-182` decision node; transition the
   `B-071` and this-plan lifecycle-status nodes from `Open`/`DRAFT`/`proposed` to
   `Applied`/`historical` as §7 makes true; preserve the existing edge to `D-171`; re-merge
   `docs/graph-fragments/` if the curated node count drops (`B071-R35`).
3. `bun run check` — full suite green (`B071-R15`: a red `graph-coverage` is never accepted as
   evidence of safety; lifecycle-status nodes for this plan and `B-071` already resolve the current
   failure — see `docs/graph-fragments/frag119.json`).
4. Return to Lane B for independent verification (Lane A marks its own work `Applied`; only the
   independent review may mark it `Verified`).

---

## Independent Review (Lane B) — checklist

**Round 1 (`80c8f38`) — completed:** `B071-R8`–`R14` incorporated into draft 2.

**Round 2 (`c6afdd0`) — completed:** `B071-R15`–`R21` incorporated into draft 3: graph
lifecycle nodes added, plan-artifact propagation completed across all three trackers, Final
Sign-Off reordered before T5 with signer/human-only corrected, Assurance Preparation required on
every route (not just `ROUTE-PROD-1`), clause-level lifecycle table replaces the caution note,
complete propagation write set (including the two previously-omitted Fn_Specs), and Gate B split
into B1/B2 with each one named and bounded.

**Chief Editor clarification (`B071-R22`) — incorporated:** §5 no longer redrafts B-070's options
as a choice; it retires the either/or framing and defines Feature 1 / Feature 2 as separately
scoped, separately authorized units.

**Round 3 (Lane B, `2147636`) — completed:** `B071-R23`–`R29` incorporated into draft 4:
split applied-artifact-fact vs. unapplied-content status (`R23`), removed the Final-Sign-Off
external-acceptance contradiction (`R24`), made `D-171` non-expiry explicit (`R25`), separated
route activation into its own gate (`R26`), narrowed Gate B1 away from named routes (`R27`),
corrected the graph edge semantics (`R28`). `R29`'s push/remote-equality condition was satisfied at
`d3cadda` (confirmed identical local/`origin/docs/journal-2026-08-16`, Graphify
`lastAnalyzedHead = d3cadda`/`stale = false`, full consistency suite green).

**Round 4 (Lane B, reviewing Draft 4 at shared HEAD `d3cadda`) — completed:** `B071-R30`–`R37`
incorporated into this draft (5): renamed the approval vocabulary to
`AUTH-DOC`/`AUTH-F1`/`AUTH-F2`/`AUTH-ROUTE` (`R30`); removed the residual `D-171`-expiry sentence
(`R31`); made `AUTH-F1`/`AUTH-F2` serialization explicit (`R32`); completed the §7 write set with
B-071's and this plan's own lifecycle updates and stopped a second B-070 edit (`R33`); corrected
review-round and commit metadata (`R34`); specified the `frag119.json` update the `AUTH-DOC` pass
must perform (`R35`); added the executor-identity separation requirement and its negative test
(`R36`); restated the external-acceptance refusal subject (`R37`).

**Round 5 — outstanding, before this revision reaches the Judge for `AUTH-DOC`:**

- [ ] No occurrence of "Gate A", "Gate B1", "Gate B2" or "Route Activation Gate" remains in this
      file outside historical revision-history citations of prior drafts' wording
- [ ] Every restatement of the `D-171` hold in this file is consistent with "`D-171` remains
      binding after `AUTH-DOC` is `Verified`; only an explicit `AUTH-F1`/`AUTH-F2` decision narrows
      it, for its own named unit only" — no sentence implies expiry on documentation verification
      alone
- [ ] §5's serialization statement and the Approval Gate table agree that `AUTH-F1`/`AUTH-F2` may
      be *selected* in either order but never *exercised* concurrently
- [ ] §7's write set closes B-071 and this plan's own lifecycle without scheduling a further B-070
      edit, and without either file self-marking `Verified`
- [ ] §3/§4's executor-identity separation requirement is stated as testable (named negative test),
      not as prose caution, and covers both Assurance Preparation acts on every route
- [ ] §3's external-acceptance paragraph names the pre-Delivery/Delivery transition, not the
      external record, as the thing refused, and excludes Final Sign-Off and `T6` explicitly
- [ ] `docs/graph-fragments/frag119.json`'s B-071 description, once updated per §8, states the
      exact reviewed round and draft number reachable from the committed source, and the update
      does not itself assert `D-182` as decided ahead of `AUTH-DOC`
- [ ] Nothing in §1–§8 authorizes S2 implementation or moves Lane B from `Eligible`; `AUTH-DOC`,
      `AUTH-F1`, `AUTH-F2` and `AUTH-ROUTE` stay four separate approvals
- [ ] This revision is pushed to `origin/docs/journal-2026-08-16` and confirmed identical before
      round 5 or `AUTH-DOC` is marked `Verified`

## Approval Gate — `AUTH-DOC` / `AUTH-F1` / `AUTH-F2` / `AUTH-ROUTE` (`B071-R10`, `R21`, `R22`,
restructured by `B071-R25`–`R27`, renamed by `B071-R30`)

```text
AUTH-DOC — documentation and Graphify only
  ↓ independently Verified — D-171 NOT lifted by this alone (B071-R25, B071-R31)
AUTH-F1 — Feature 1: shared T5/T6 judgment-control implementation
  ↘
    AUTH-ROUTE — one named route only, after both dependencies Verified
  ↗
AUTH-F2 — Feature 2: bounded factory-route capability implementation
```

**Four separate Judge approvals, never conflated, never concurrent within a feature pair
(`B071-R32`):**

| Checkpoint | Covers | Authorizes | Does NOT authorize |
|---|---|---|---|
| **`AUTH-DOC`** | §1's decision text, §2–§8 as one documentation/Graphify propagation pass | Lane A to write `D-182` and propagate it per §7 — all documentation, no product code | S2 implementation; any lane-state change; does **not** lift `D-171` for any scope (`B071-R25`, `B071-R31`) |
| **`AUTH-F1`** | One bounded Feature 1 (shared T5/T6 judgment control) implementation unit — its component scope, a seven-route *test* matrix, exclusions and DoD. **Never named routes for enablement** (`B071-R27` — route names in tests are coverage, not authorization) | The Judge narrowing `D-171` and moving Lane B `Eligible`→`Active` for that named unit only | Route activation; Feature 2 work; any route enablement; concurrent exercise alongside `AUTH-F2` (`B071-R32`) |
| **`AUTH-F2`** | One bounded Feature 2 (factory-route operations/readiness) implementation unit — builds capability only, independent of `AUTH-F1` to *select* (`B071-R26`), never to *run alongside* (`B071-R32`) | The Judge narrowing `D-171` and authorizing that named capability-build unit only | Route activation on its own; production, fallout, GRC, release or deployment; concurrent exercise alongside `AUTH-F1` |
| **`AUTH-ROUTE`** | One named route, requiring `AUTH-F1` **and** `AUTH-F2` independently `Verified` for that route, its resolved operation shapes, and external-authority prerequisites | The Judge enabling exactly that one named route | Any other route; release; deployment; treating either feature authorization alone as sufficient |

`AUTH-DOC` must reach `Verified` before `AUTH-F1` or `AUTH-F2` is proposed, and this revision (or
its successor) must be pushed and confirmed identical on the remote branch before that `Verified`
mark is recorded — a local-only pass is not shared evidence. `AUTH-F1` and `AUTH-F2` may each be
*selected* independently once `AUTH-DOC` is `Verified`, but only one may be *exercised* — holding
the development lock — at a time (`B071-R32`); only `AUTH-ROUTE` requires both. No authorization's
approval is unrestricted terminal authority — each names its unit, exclusions, tests and DoD
explicitly.
