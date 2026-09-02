# V1-B071-CORRECTIVE-PLAN — T5/T6 Ontology Correction: Implementation Plan (DRAFT)

**Status: DRAFT.** Split per `B071-R23`: **the proposal content below (the `D-182` decision text,
ontology relabel, Final Sign-Off correction, propagation) is unapplied to any governed tier.** This
file's own *existence* is a real artifact fact, and that fact **is applied** — `V1-ARTIFACT-
INVENTORY.md` carries its row now; `V1-DECISION-REGISTER.md`/`V1-BUILD-SPEC.md` propagation of that
same fact is pending Gate A (§7). This file exists so the corrective packet
`docs/handoff/B-071-b070-options-and-desk-editor-ontology-require-correction.md` describes can be
reviewed as one connected plan before any of it is written into `V1-DECISION-REGISTER.md`,
`V1-BUILD-SPEC.md`, `V1-ARTIFACT-INVENTORY.md`, `Modular_PRD.md`, `FN-GATES-01-05.md`,
`FN-EXCEPTIONS-06-11-12.md`, `FN-PUBLICATION-09-10-13.md`, the RACI matrix, the crosswalk,
`B-070`, or `LANE-B-WORK-ORDER.md`. Nothing here is a decision. It becomes one only if the Judge
approves it after independent review (see §Approval Gate).

**Owner:** Lane A (drafting). **Independent reviewer:** Lane B (the entry that raised B-071).
**Approver:** Judge/Chief Editor — same person, `D-158`.

**Source:** `docs/handoff/B-071-*.md` in full, including both independent-review rounds
(`B071-R1`–`R21`) and the Chief Editor's direct clarification (`B071-R22`).

**Revision history:**
- Draft 1 (`80c8f38`): consolidated steps 1–9 from B-071's original findings.
- Draft 2 (`c6afdd0`): incorporated round-1 review `B071-R8`–`R14`.
- Draft 3 (`2147636`): incorporated round-2 review `B071-R15`–`R21` and the Chief Editor's
  `B071-R22` clarification that B-070's two options are not alternatives but two separate
  features — §5 retired the either/or framing; Gate B split into B1/B2.
- **Draft 4 (this revision):** incorporates round-3 review `B071-R23`–`R29`: splits "applied" into
  artifact-fact-applied vs. proposal-content-unapplied (`R23`); removes the external-acceptance
  contradiction from Final Sign-Off's refusal list (`R24`); states explicitly that Gate A
  verification does **not** lift `D-171` (`R25`); adds a third **Route Activation Gate** so Gate B2
  and route enablement stop being conflated (`R26`); narrows Gate B1 to a shared component + test
  matrix, never named-route authorization (`R27`); corrects the graph edge semantics in
  `frag119.json` (`R28`). `R29` (push/remote-equality) is a process condition on when round 3/Gate A
  can be marked `Verified`, not a content change — flagged in §Approval Gate, not fixed by editing
  this file.

**Artifact classification and propagation (`B071-R8`, `R16`):** this file is a `docs/v1/` tracking
artifact under `D-36`, the same class as `V1-PHASE-CLOSURE.md`. It is registered in
`V1-ARTIFACT-INVENTORY.md`. Its *content* is unapplied, but its *existence* is a real artifact fact
that must reach all three trackers (Register, Build Spec, Inventory) in the same `D-54` pass as
`D-182` — a row alone in the Inventory is not complete propagation. When `D-182` lands, this file
and its Inventory row are marked historical/superseded, **never deleted** — removing the row would
erase the artifact's own history.

**Graph representation (`B071-R15`):** `graph-coverage` failed on this file and `B-071` because
neither had a curated node, which meant round-2 review could not use Graphify to locate the draft
it was reviewing — a check staying red by design defeats its own purpose. Both are now represented
as lifecycle-status nodes (`docs/graph-fragments/frag119.json`, merged) — `Open`/`DRAFT`/`proposed`
labels only. This represents status, not approval; it does not assert the disputed ontology as
decided.

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
   role participated; every act carries a distinct workstream/purpose code.
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
   not `unknown`. External acceptance/mandate is a separate record at its own governed point
   (normally before Delivery), never satisfied by Final Sign-Off or by `T6`.

### Corrected dependency order (`B071-R17`)

```text
Applicable Sheet 2 work with R
  → completion evidence sealed
  → OP-FINAL-SIGNOFF by exactly one effective task A (R = not_applicable)
  → signed workstage package
  → T5 Editorial Review (one route-selected act)
     + T5 Assurance Preparation (Desk Editor act and Chief Journalist act, every route)
  → one non-judgment three-act join: Drafted → Reviewed
  → human-only T6 Chief Editor judgment
  → external acceptance/mandate at its governed point where required
  → Delivery
```

Only `T6` is categorically human-only. Final Sign-Off's signer is whichever person resolves as the
one effective task `A`; the same role/identity may perform the route-selected Editorial Review and
its own Assurance Preparation act, but these remain different evidence records and purposes — one
executor cannot satisfy both Assurance Preparation acts by relabeling.

### Clause-level lifecycle disposition (`B071-R19` — replaces the prior "caution, not yet
resolved" note with an actual per-clause table)

| Origin | Retain | Re-derive or supersede |
|---|---|---|
| `D-175` | Human Chief Editor at T6; one T5 stage; Senior Journalist EW trigger; route/stage `A`; `ENV-EXT`; T5 Line 1/T6 Line 2 placement | `ROLE-CHIEF-EDITORIAL-DESK`; route-family one/two-reviewer cardinality; any claim that node labels prove actor separation |
| `D-176` | The 43 applicability dispositions; blank external-source cells remaining `unknown`; undecomposed milestone holds; `ROUTE-PROD-1` route `A`; `ENV-EXT` | "No `A` inherits" becomes the governed local-task-else-parent rule; Final Sign-Off missing-`R` hold becomes `R = not_applicable`; Final Sign-Off sequence/evidence row is re-derived (now precedes T5) |
| `D-177`/`D-178` | Route-basis semantics; canonical reveal-event name; blind/reveal ordering; external-trigger versus external-acceptance separation; one non-judgment completion join; historical `[V1]` treatment | T5 event count/prerequisites/bundle membership; return/rerun scope; affected evidence overlay; T5 cardinality measure (now three acts); readiness row removing Final Sign-Off's missing-`R` hold |
| `D-179`/`D-180` | Historical/target marking method; human-only `AC-06a`; blind-order/disagreement intent; `AC-08a` ownership by `FR-06`; unaffected EW/Delivery/external-acceptance IDs; `SEC-03a` Line placement | `US-04a`/`US-05a`, `FR-04a`/`FR-05a`, `AC-05a`/`AC-05b` and bundle-dependent AC text; `G-05a`; `SEC-01a`; RACI T5 acts and successor proof |
| `D-181` | `AC-01b`; `G-02a`; consuming-evidence `AC-22` outside changed T5 prerequisites; join-only ownership of `Drafted → Reviewed` | `D-181` as current anchor (`D-182` becomes current); any route-dependent one/two-act prerequisite within `AC-22` or the join contract |

`D-171`'s explicit S2 hold is retained, unaffected, and not reopened by any row above.

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

**External acceptance lives elsewhere, only (`B071-R24`):** the earlier draft listed a missing
external-acceptance record as a Final-Sign-Off refusal condition, then separately said it wasn't a
Final-Sign-Off precondition — a direct contradiction that would recreate the circular dependency
`B071-R17` removed. External acceptance/mandate is refused, and blocks only, the route's governed
pre-Delivery/Delivery act — never Final Sign-Off.

**Files to edit:** `docs/governance/factory-route-operation-crosswalk.md` (remove "missing `R`
unresolved" marking on `OP-FINAL-SIGNOFF`; reorder it before the T5 row; add refusal conditions
above), `docs/governance/raci-involvement-matrix.md` (Sheet1/Sheet2 `A` separation note).

**Verification:** crosswalk shows Final Sign-Off before T5, not after; `OP-FINAL-SIGNOFF`'s `R` is
no longer unresolved; each refusal condition above has a corresponding negative test; no test
asserts a human-only rule on Final Sign-Off's signer.

## §4 — Three-act T5 completion unit (depends on §2, §3; corrected by `B071-R11`, `R18`)

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
are distinguished by workstream/purpose code and evidence ID, not by who performed them. Exactly
one deterministic join reads all three sealed acts and performs `Drafted → Reviewed`; it fires
once and only once all three exist.

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
even when the same person performed them.

## §5 — Supersede the false either/or; define two feature units (depends on §4; replaces the prior
"redraft B-070's two options" — `B071-R22`, Chief Editor clarification)

**B-070's Option A and Option B are not alternatives.** They specify two different features; the
Judge is not choosing between them. Both are superseded *as options* while their valid functional
content is preserved as separate feature units:

| B-070 wording | Actual feature | Correct disposition |
|---|---|---|
| Option A — bounded unit now | **Feature 1 — T5/T6 judgment control:** three T5 acts, one join, human-only T6, audit evidence; no route enablement | Superseded as an option. Preserved as the corrected scope of the first bounded implementation unit (Gate B1) |
| Option B — wait for all operation shapes | **Feature 2 — factory-route operations/readiness:** resolve each route's applicable task executor, accountability and atomic completion contract, then integrate/enable that route | Superseded as an option and as a global wait. Preserved as a separate feature unit (Gate B2); it neither replaces nor blocks Feature 1's specification |

B-070's already-`Applied` correction to the stale "next code unit" instruction is **not reopened**
— only its either/or framing is superseded. Lane A appends a forward notice to `B-070`; its
historical body and `Resolution: Applied` are not rewritten.

**Replacement parent-first work structure:**

1. **Parent — Gate A documentation correction** (this plan, §1–§8): the corrected `D-182` ontology,
   lifecycle table, Final-Sign-Off ordering, acceptance ownership, complete propagation set and
   Graphify representation. `D-171` stays in force until Gate A is independently `Verified`.
2. **Child — Gate B1, Feature 1 (T5/T6 judgment control):** after Gate A is `Verified`, a separate
   bounded authorization may build the three attributable T5 acts, the one non-judgment completion
   join, blind/reveal order and human-only T6. Enables no production, fallout or GRC route.
3. **Child — Gate B2, Feature 2 (factory-route operations/readiness):** resolve operation-shape
   holds and implement route-specific execution/readiness. Specification can proceed independently
   of Gate B1, but a route cannot be enabled until both its own operation contract (Gate B2) and
   the shared judgment-control dependency (Gate B1) are verified.
4. **Route activation** (neither Gate B1 nor B2 alone): authorize one named route at a time, with
   its required/conditional operations, external-authority prerequisites, tests, exclusions and
   DoD.

**Files to edit:** `docs/handoff/B-070-lane-b-work-order-stale-s2-instruction.md` — append a
correction section (append-only convention for handoff entries; does not rewrite the original body
or its `Resolution: Applied`).

## §6 — Chief Editor publication-workspace UX spec (depends on §4)

New file: `docs/specs/ux/chief-editor-publication-workspace.md`. Must show, and the UI must
enforce:

- Both T5 workstreams (Editorial Review, Assurance Preparation) and their separate attribution
- Authority provenance (task `A` vs. route/stage `A` vs. external authority)
- Required external evidence/acceptance records
- Unresolved disagreement between workstreams
- The human-only `T6` control — UI refuses submission of `T6`/publication disposition from an
  agent; only a natural-person Chief Editor action satisfies it

Marked `[V1]` per `D-36`'s spec versioning convention; new file, not an edit to an existing `[V1]`
section. **Represents** the actor/node/Final-Sign-Off rules defined in §1–§3; never their origin
(`B071-R14`).

## §7 — Complete propagation write set (depends on §1–§6; replaces the prior partial list —
`B071-R20`)

Single-pass sweep per `D-54`, once §1–§6 are Judge-approved (Gate A):

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
| `B-070` | Forward-notice correction appended (§5) — options superseded, feature split recorded, `Resolution: Applied` untouched |
| `LANE-B-WORK-ORDER.md` | Fix §1's stale `Eligible` definition (`B071-R7`) |

## §8 — Commit, graph sync, verification handback (depends on §7)

1. Commit the full source + curated-fragment packet in one Lane A pass.
2. `npx graphify hook-rebuild`; re-merge `docs/graph-fragments/` if curated node count drops.
3. `bun run check` — full suite green (`B071-R15`: a red `graph-coverage` is never accepted as
   evidence of safety; lifecycle-status nodes for this plan and `B-071` already resolve the current
   failure — see `docs/graph-fragments/frag119.json`).
4. Return to Lane B for independent verification (Lane A marks its own work `Applied`; only the
   independent review may mark it `Verified`).

---

## Independent Review (Lane B) — checklist

**Round 1 (`80c8f38`) — completed:** `B071-R8`–`R14` incorporated into draft 2.

**Round 2 (`c6afdd0`) — completed:** `B071-R15`–`R21` incorporated into this draft (3): graph
lifecycle nodes added, plan-artifact propagation completed across all three trackers, Final
Sign-Off reordered before T5 with signer/human-only corrected, Assurance Preparation required on
every route (not just `ROUTE-PROD-1`), clause-level lifecycle table replaces the caution note,
complete propagation write set (including the two previously-omitted Fn_Specs), and Gate B split
into B1/B2 with each one named and bounded.

**Chief Editor clarification (`B071-R22`) — incorporated:** §5 no longer redrafts B-070's options
as a choice; it retires the either/or framing and defines Feature 1 / Feature 2 as separately
scoped, separately authorized units.

**Round 3 (Lane B, `2147636`) — completed:** `B071-R23`–`R29` incorporated into this draft (4):
split applied-artifact-fact vs. unapplied-content status (`R23`), removed the Final-Sign-Off
external-acceptance contradiction (`R24`), made `D-171` non-expiry explicit (`R25`), separated
route activation into its own gate (`R26`), narrowed Gate B1 away from named routes (`R27`),
corrected the graph edge semantics (`R28`). `R29` (local HEAD `2147636` was not yet on
`origin/docs/journal-2026-08-16`) is a process condition tracked in the Approval Gate below, not a
content fix.

**Round 4 — outstanding, before this revision reaches the Judge for Gate A:**

- [ ] §1's corrected dependency order and three-act model match `B-071`'s round-3 findings with no
      drift introduced during consolidation
- [ ] The clause-level lifecycle table (§1) is independently checked against `D-175`–`D-181`'s
      actual text, not just this plan's restatement of it
- [ ] §5's Feature 1/Feature 2 split leaves no gap, and Gate B2 no longer implies route activation
- [ ] §7's write set is complete — no governed tier citing the old ontology, the old Final
      Sign-Off position, the old B-070 either/or framing, or the old three-gate (rather than
      four-gate) structure is missing
- [ ] Nothing in §1–§8 authorizes S2 implementation or moves Lane B from `Eligible`; Gate A, Gate
      B1, Gate B2 and the Route Activation Gate stay four separate approvals
- [ ] `docs/graph-fragments/frag119.json`'s two nodes and their edge represent status only, assert
      no disputed ontology content as decided, and no longer claim the plan "implements" B-071
- [ ] This revision is pushed to `origin/docs/journal-2026-08-16` and confirmed identical before
      round 4 or Gate A is marked `Verified` (`B071-R29`)

## Approval Gate — Gate A / Gate B1 / Gate B2 / Route Activation Gate (`B071-R10`, `R21`, `R22`,
restructured by `B071-R25`–`R27`)

```text
Gate A — documentation and Graphify only
  ↓ independently Verified — D-171 NOT lifted by this alone (B071-R25)
Gate B1 — Feature 1: shared T5/T6 judgment-control implementation
  ↘
    Route Activation Gate — one named route only, after both dependencies Verified
  ↗
Gate B2 — Feature 2: bounded factory-route capability implementation
```

**Four separate Judge approvals, never conflated:**

| Gate | Covers | Authorizes | Does NOT authorize |
|---|---|---|---|
| **Gate A** | §1's decision text, §2–§8 as one documentation/Graphify propagation pass | Lane A to write `D-182` and propagate it per §7 — all documentation, no product code | S2 implementation; any lane-state change; does **not** lift `D-171` for any scope (`B071-R25`) |
| **Gate B1** | One bounded Feature 1 (shared T5/T6 judgment control) implementation unit — its component scope, a seven-route *test* matrix, exclusions and DoD. **Never named routes for enablement** (`B071-R27` — route names in tests are coverage, not authorization) | The Judge narrowing `D-171` and moving Lane B `Eligible`→`Active` for that named unit only | Route activation; Feature 2 work; any route enablement |
| **Gate B2** | One bounded Feature 2 (factory-route operations/readiness) implementation unit — builds capability only, independent of Gate B1 to *start* (`B071-R26`) | The Judge narrowing `D-171` and authorizing that named capability-build unit only | Route activation on its own; production, fallout, GRC, release or deployment |
| **Route Activation Gate** | One named route, requiring Gate B1 **and** Gate B2 independently `Verified` for that route, its resolved operation shapes, and external-authority prerequisites | The Judge enabling exactly that one named route | Any other route; release; deployment; treating either feature gate alone as sufficient |

Gate A must reach `Verified` before any Gate B is proposed, and `2147636` (or its successor) must
be pushed and confirmed identical on the remote branch before that `Verified` mark is recorded
(`B071-R29`) — a local-only pass is not shared evidence. Gate B1 and Gate B2 may each proceed
independently once Gate A is `Verified`; only the Route Activation Gate requires both. No gate's
approval is unrestricted terminal authority — each names its unit, exclusions, tests and DoD
explicitly.
