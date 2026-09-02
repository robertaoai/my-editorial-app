# V1-B071-CORRECTIVE-PLAN — T5/T6 Ontology Correction: Implementation Plan (DRAFT)

**Status: DRAFT 11. Plan approval: none (`B071-R67`).** Draft 10 is reviewed and **superseded as a
draft** — it is not, and was never validly, Judge-approved; a prior revision of this file's own
header incorrectly asserted approval, which is corrected here rather than rewritten away (the false
claim is historical evidence of the defect `B071-R67` names, not authority). The numerous "Judge
clarification" and "Judge decision packet" sections in `docs/handoff/B-071-*.md` **are** direct
Judge rulings and are used as Draft 11's inputs; they are inputs to this plan, not a substitute for
approving this plan as a consolidated packet. Those two governance acts are different (per the
independent review at `docs/handoff/B-071-*.md` §"Independent review — Draft 10 and the
post-Draft-10 Judge clarifications").

Split per `B071-R23`: **the proposal content below (the `D-182` decision text,
ontology relabel, Final Sign-Off correction, propagation) is unapplied to any governed tier.** This
file's own *existence* is a real artifact fact, and that fact **is applied** — `V1-ARTIFACT-
INVENTORY.md` carries its row now; `V1-DECISION-REGISTER.md`/`V1-BUILD-SPEC.md` propagation of that
same fact is pending `AUTH-DOC` (§7). This file exists so the corrective packet
`docs/handoff/B-071-b070-options-and-desk-editor-ontology-require-correction.md` describes can be
reviewed as one connected plan before any of it is written into `V1-DECISION-REGISTER.md`,
`V1-BUILD-SPEC.md`, `V1-ARTIFACT-INVENTORY.md`, `Modular_PRD.md`, `FN-GATES-01-05.md`,
`FN-EXCEPTIONS-06-11-12.md`, `FN-PUBLICATION-09-10-13.md`, the RACI matrix, the crosswalk,
or `LANE-B-WORK-ORDER.md`. Nothing here is a decision. It becomes one only if the Judge
approves it after independent review (see §Approval Gate). `B-070` is not in this list — its
correction is already applied at `d3cadda`; this plan cites it and does not write to it again
(`B071-R33`, `B071-R42`).

**Owner:** Lane A (drafting). **Independent reviewer:** Lane B (the entry that raised B-071).
**Approver:** Judge/Chief Editor — same person, `D-158`.

**Source:** `docs/handoff/B-071-*.md` in full, including all completed independent-review rounds
(`B071-R1`–`R76`) and every named Judge clarification/decision-packet section: the Chief Editor's
`B071-R22` clarification; the four-identifier ruling; "Option A is an operational POC, not a
non-operative mock"; "`M-MVP` proof first, `M-POC` client proof later"; "the downloadable report is
an `M-MVP` artifact, gating `M-POC` start"; "editorial flow and route-gated GRC assurance"; "T5/T6
publication-workspace layering"; "editorial approval state and assurance-review status"; and
"POC-first Chief Editor UI scope". Each is a direct ruling used as an input here — none of them, nor
Draft 10, constitutes approval of this plan as a packet (`B071-R67`).

**Authorization vocabulary (`B071-R30`, scoped `B071-R39`):** this plan's four approval checkpoints
are named `AUTH-DOC`, `AUTH-F1`, `AUTH-F2`, `AUTH-ROUTE`. Every **operative** instruction in this
file — anything a reader would act on (§1–§8, the Approval Gate, the checklists' pass/fail
conditions) — uses these four IDs only, never "Gate A/B1/B2" or "Route Activation Gate". Development
**Lane A/B/C** (`CLAUDE.md`/`AGENTS.md` ownership) and the product's `T1`–`T6`/`EG*` gates are
separate vocabularies and are never abbreviated as "Gate" in operative text, removing the collision
`B071-R30` identified between "Gate B" and "Lane B." The **revision history and Independent Review
sections below are historical citations** of what earlier drafts and review rounds actually said,
including their original "Gate A/B1/B2" wording — that wording is retained there on purpose, as the
record of what was corrected, and is explicitly non-operative (`B071-R39`).

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
- **Draft 5 (`5bd9b90`):** incorporates round-4 review `B071-R30`–`R37`, reviewed at shared
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
- **Draft 6 (`2d3bd49`):** incorporates round-5 review `B071-R38`–`R44`, reviewing Draft 5 at
  `5bd9b90`: corrects the evidence-state inversion — Draft 5 was already pushed (local = remote =
  `5bd9b90`) while Graphify was stale at `d3cadda`, i.e. 16/17 checks, not 17/17 (`R38`); scopes the
  "never abbreviate as Gate" vocabulary rule to operative text only, leaving revision-history and
  review-history citations of the retired wording intact and explicitly non-operative (`R39`);
  separates *drafting/proposing* `AUTH-F1`/`AUTH-F2` (allowed now) from *approving/exercising* them
  (still requires `AUTH-DOC` `Verified` first), removing the plan's self-contradiction (`R40`);
  corrects `AUTH-ROUTE` to require one globally `Verified` Feature 1 result plus the named route's
  `Verified` Feature 2 contract, never route-specific Feature 1 approvals (`R41`); removes `B-070`
  from the future-write list in the opening paragraph and fixes §7's B-071-closure reference from
  the nonexistent "§1–§9" to the actual "§1–§8" (`R42`); updates `docs/graph-fragments/frag119.json`
  to describe `B-071` at `R1`–`R37`/Draft 5-independently-reviewed with `AUTH-*` vocabulary instead
  of the stale `R1`–`R22`/"Gate" description (`R43`); and fixes §8's commit/rebuild ordering so the
  source and curated fragment are committed together before any rebuild is attempted, never after
  (`R44`).
- **Draft 7 (`2d3bd49`+uncommitted):** incorporates round-6 review `B071-R45`–`R49`, reviewing
  Draft 6 at `2d3bd49`, plus the Judge's direct identifier-model clarification. Corrects §3/§4's
  executor language from undefined "executor IDs" to the ruled `executor_principal_key` contract,
  rejecting `self_asserted` values for that comparison (`R47`); names the missing sibling canonical
  node `NODE-CHIEF-JOURNALIST-REVIEW` → `ROLE-CHIEF-JOURNALIST` (`R48`); replaces every
  "person"/"whichever person" reference in Final Sign-Off text with "accountable principal",
  reserving "natural person" for `T6` alone (`R49`); records `docs/graph-fragments/merge7.js`'s
  non-reproducible upsert behavior as a required fix (`R46`). Round 7 review found this draft's own
  `B071-R45` fix incomplete (see Draft 8) and one invented open item (Article 50 external-reader
  token — see `R51` below).
- **Draft 8 (`d3898db`, committed and pushed):** incorporates round-7 review `B071-R50`–`R55`.
  Actually corrects B-071's live header/Source/revision-history metadata instead of only claiming
  it in Draft 7's own narrative (`R50`); removes the invented fifth Article-50 external-reader
  token — the governed direct interaction is the Chief Editor and the virtual agents, and
  publication-text labelling under Article 50(4) is a separate, later question (`R51`); adds
  `system_attested` to the target `identity_assurance` vocabulary next to `self_asserted` and
  `authenticated`, without editing the applied `0002` migration (`R52`); adds the four identifiers'
  Product/Fn_Spec/`SPECS`-candidate ownership to the §7 write set (`R53`); moves `merge7.js`'s
  upsert fix and semantic-equality check into §7/§8 step 1's committed write set, ahead of any
  rebuild (`R54`); and replaces "person"/"account" language describing virtual-agent execution with
  "executor principal"/`executor_principal_key` in §4, reserving natural-person/account language for
  the Chief Editor and `T6` (`R55`).
- **Draft 9 (`838baff`, committed and pushed):** incorporates round-8 review `B071-R56`–`R60`.
  Splits the single circular checklist into a plan-review checklist, an optional Graphify
  tooling/status precondition, and an applied-state verification checklist, so no item gates
  `AUTH-DOC` on work that §7/§8 gate on `AUTH-DOC` already being granted (`R56`); corrects this
  file's and B-071's lifecycle metadata to name pushed `d3898db` as Draft 8's evidence (`R57`);
  finishes the `R49`/`R55` language replacement in §3's refusal condition and §4's verification line
  (`R58`); names both proposed spec artifacts under their governed path conventions and adds the
  identity spec's `D-30` redundancy-test condition to Inventory (`R59`); and replaces the
  unqualified "rebuild now" instruction with the named tooling precondition (`R60`). The Judge
  separately authorized the Graphify tooling/status precondition in this same commit: `merge7.js`
  fixed to a deterministic upsert with a semantic-equality check, `frag119.json`'s B-071/plan nodes
  refreshed to status-only Draft-9/`R1`–`R60` text.
- **Draft 10 (this revision; its evidence is the commit containing this paragraph, following pushed
  Draft 9 `838baff`):** incorporates round-9 review `B071-R61`–`R66`. Adds a forward-notice/
  target-overlay write-set row for every affected non-frozen governing/derived file the propagation
  set previously omitted (`R61`); decides the `T6` pre-authentication trust boundary — `self_asserted`
  demo `T6` events cannot satisfy publication or `AUTH-ROUTE`, only `authenticated` `T6` can, per
  `CLAUDE.md`'s binding demo-first/no-login-wall v1 rule (`R62`); resolves the identity-spec `D-30`
  redundancy test explicitly (`SPECS-TRANSITION-ENFORCEMENT.md` excludes column/type ownership by
  its own stated scope) and fixes `docs/specs/README.md`'s naming convention to match the plural
  `SPECS-*` files that already exist (`R63`); replaces the last operative prose reference to "Chief
  Journalist review node" with `NODE-CHIEF-JOURNALIST-REVIEW` in proposed `D-182` (`R64`); corrects
  §7/§8 to describe the Graphify tooling/status precondition as completed at `838baff`, not
  future/conditional work (`R65`); and records `merge7.js`'s remaining verifier defects — mutates
  before verifying, drops dangling edges from its own check, no cross-fragment check, undefined
  fragment-owned-field scope — as required ordinary Lane A tooling work with four named negative
  tests, independent of the completed precondition (`R66`).
- **Draft 11 (this revision, `2467f2e` review baseline — supersedes Draft 10 in full per the Round
  10 closure audit, `B071-R67`–`R76`):** Draft 10 was found not approvable — none of `B071-R67`–`R72`
  was fully closed, and five post-Draft-10 Judge rulings materially changed the parent model. This
  draft: states plan approval as none and separates Judge clarifications (inputs) from plan approval
  (`R67`); retires the old circular pre-`AUTH-DOC` checklist as historical, keeping only the
  text-only plan-review checklist (`R68`); replaces the superseded "demo-only/non-operative"
  pre-authentication model with the Judge's corrected ruling — Option A is an **operational** POC:
  `self_asserted`/non-production identity, but real persisted state, real evidence, real generated
  artifacts (`R69`); rewrites the parent flow so **editorial approval** (a new, distinct event —
  `T5-EDITORIAL-APPROVAL`, `workflow_state: Reviewed → Approved`) is separate from **`T6` assurance
  judgment**, which is conditional on `ROUTE-FALLOUT-3`/`ROUTE-GRC` only; publication remains
  exclusively T7/T10/T11's (`R70`, `R73`); splits every affected governing/derived file into its own
  exact-path/anchor/treatment row instead of one combined catch-all (`R71`); specifies the Graphify
  verifier's remaining defects precisely — untouched-graph comparison, atomic write, tracked negative
  tests — as the bar for treating it as terminal evidence, without re-claiming it as already safe
  (`R72`); adds the approved POC-first UI/backlog split — current `M-MVP` editorial UI now, detailed
  `T6` assurance UI as a separate backlog feature, GRC-route Delivery hold preserved (`R74`); adds the
  `M-MVP`/`M-POC` maturity model, module-qualified terminology, and the `M-MVP` report as an
  *additive* `M-POC`-start gate beside existing `PR-13` (`R75`); and restores the Judge's exact
  phrase **"Minimum Markable Feature"**, quoted, `definition_pending` — the prior turn's unauthorized
  substitution to "Minimum Marketable Feature (MMF)" is corrected and is not used operatively (`R76`).

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
disputed ontology as decided. Through Draft 8, the tracked fragment's B-071/plan descriptions
lagged at `R1`–`R44`/Draft 6 — a known, explained gap, not completion evidence (`B071-R60`). The
Judge separately authorized a narrow **Graphify tooling/status precondition** (defined in the
Independent Review checklist section): `merge7.js` is repaired to a deterministic upsert with a
semantic-equality check, and this same commit brings `frag119.json`'s B-071/plan descriptions to
`R1`–`R60`/Draft 9, status-only — no `D-182` node, no `Applied`/`historical` transition. That
precondition does not gate plan-review approval and is not `AUTH-DOC` (`B071-R56`). Adding the
`D-182` decision node and transitioning these nodes to Applied/historical still requires `AUTH-DOC`,
because that is the point the disputed ontology becomes decided (§8).

---

## Read order

Sections are dependency-ordered. §2 cannot be reviewed correctly without §1; §4's completion unit
depends on both §2 (who) and §3 (Final Sign-Off's actual position in the sequence, corrected below
— it comes *before* T5, not after).

## §1 — Proposed decision (Lane A drafts; Judge originates/approves)

**Proposed register entry:** `D-182` — *T5/T6 corrective ruling: Desk Editor is one actor role,
Editorial Desk Review and Chief Journalist Review are separate nodes required on every route, T5 is
a universal three-act completion unit feeding a distinct editorial-approval event, and `T6` is a
conditional GRC-route-only assurance judgment. Final Sign-Off precedes T5 and carries no `R` of its
own.* Partially supersedes `D-175`–`D-181` at clause level (table below). Does **not** touch
`D-171`'s S2 hold, unaffected and not reopened, consistent with every decision in the `D-172`–`D-181`
chain.

**Parent-model rewrite notice (`B071-R73`):** points 1–3 below are unchanged from Draft 10 (the
three-act T5 unit survives intact — all seven routes still execute both preparation workstreams).
Points 4–6 are **rewritten**, not patched: Draft 10 treated `T6` as the universal Chief Editor
judgment that itself closed `Drafted → Reviewed → Published`. Five Judge rulings since Draft 10
(route-gated GRC assurance; T5/T6 publication-workspace layering; editorial-approval/assurance-status
state axes; Option A's operational semantics; POC-first UI scope) replace that with the model below.
Every downstream section (§2–§9) is regenerated from this rewritten parent, not patched independently
(`B071-R73`'s required fix).

### Proposed decision content (normalized draft derived from the Judge's clarifications, not verbatim register text — `B071-R10`)

1. `T5-EDITORIAL-REVIEW` is a single route-selected virtual review: Desk Editor for
   `ROUTE-PROD-1`; Chief Journalist for the other named routes. A fallback reviewer is an internal
   judgment preparer, never a replacement for the route's human or external RACI `A`.
2. `T5-ASSURANCE-PREPARATION` runs on **every** route, not only where Editorial Review selects
   Desk Editor (`B071-R18`): `NODE-EDITORIAL-DESK-REVIEW` (mapped to `ROLE-DESK-EDITOR`) and
   `NODE-CHIEF-JOURNALIST-REVIEW` (mapped to `ROLE-CHIEF-JOURNALIST`, `B071-R64`) each seal a
   separately attributable brief on every route. It is internal preparation, not independent Line 3
   assurance, and it produces no human judgment by itself.
3. Both T5 workstreams are held before the editorial-approval event (point 4). A report cannot
   satisfy both merely because the same role participated; every act carries a distinct
   workstream/purpose code, and the two Assurance Preparation acts additionally carry distinct,
   system-attested `executor_principal_key` values — one executor cannot satisfy both by
   relabeling, retrying, or asserting an unverified identity (`B071-R36`, `R47`).
4. **`T5-EDITORIAL-APPROVAL`** (new identifier — `B071-R70`, `R73`: this act was previously and
   incorrectly named `T6`) is the natural-person Chief Editor's editorial judgment, made in the
   publication workspace once both T5 workstreams are sealed. It is universal — every route requires
   it. It moves the article's **`workflow_state`** axis `Reviewed → Approved`. It is categorically
   human-only; agent attempts to record it are refused. It never itself publishes: T7/T10/T11 own
   all publication-target outcomes downstream (`B071-R70`).
5. **`T6-ASSURANCE-JUDGMENT`** is conditional: required only on `ROUTE-FALLOUT-3` and `ROUTE-GRC`,
   where external GRC is the route/stage `A` (`B071-R73`, per the route-gated GRC clarification). On
   the five other routes it does not occur — `assurance_status` remains `reviewed` (set once both
   T5 Assurance Preparation acts seal) and is never promoted to `approved` or `not_applicable`; no
   text may claim a human assurance decision occurred there. Where required, `T6-ASSURANCE-JUDGMENT`
   is the natural-person Chief Editor's internal assurance judgment over the sealed packet; Delivery
   remains held until both that internal judgment **and** the separately attributable, append-only
   external GRC acceptance/mandate evidence exist. Internal identity — an authenticated Chief Editor,
   an `executor_principal_key`, an agent badge — never substitutes for external GRC's acceptance
   (`B071-R73`, external-accountability rule). The exact resulting `assurance_status` enum value for
   a completed GRC-route `T6-ASSURANCE-JUDGMENT` is an **open Draft 12 specification detail**, not
   invented here — do not assume it becomes `approved`.
6. **Operational-POC semantics (`B071-R69`, Judge-corrected Option A):** neither `T5-EDITORIAL-
   APPROVAL` nor `T6-ASSURANCE-JUDGMENT` is disabled or non-operative before authentication exists.
   Both execute for real: they persist their state transition/judgment, survive reload, and appear
   in append-only evidence, using POC/seed data inside the declared demo boundary. Pre-authentication
   events are recorded as `identity_assurance: self_asserted` and are visibly labeled as such — that
   label describes identity **strength**, not workflow **permission**; it must never disable the
   approved flow, and it must never be presented as authenticated identity, live publication, or
   external GRC acceptance. No product runtime event of any kind — authenticated or not — has any
   effect on `AUTH-DOC`, `AUTH-F1`, `AUTH-F2`, or `AUTH-ROUTE`; those remain exclusively the governed
   Judge/phase development-authorization process (`B071-R69`'s category-error fix).
7. Sheet 1 `A` owns route/stage accountability. Sheet 2 `A` owns task accountability; where a task
   has no local `A`, the governed parent/milestone/stage `A` supplies the effective task `A`.
   Neither scope overwrites the other; each scope has exactly one effective `A`.
8. `OP-FINAL-SIGNOFF` is a task-level approval control that **precedes** T5, not a step after it
   (`B071-R17`): it signs completion evidence from prior applicable Sheet 2 `R` work. Its signer is
   the one effective task `A`, resolved to exactly one **accountable principal** — not automatically
   a natural person; human-only is a `T5-EDITORIAL-APPROVAL`/`T6-ASSURANCE-JUDGMENT`-specific rule
   and does not inherit to Final Sign-Off (`B071-R49`). `R = not_applicable` for the sign-off control
   itself, not `unknown`. The required external acceptance/mandate record is a separate, separately
   attributable, append-only record at its own governed point (normally before Delivery); when it
   is missing or invalid, only the governed pre-Delivery/Delivery transition is refused — never
   Final Sign-Off, `T5-EDITORIAL-APPROVAL`, or `T6-ASSURANCE-JUDGMENT` (`B071-R24`, restated `R37`).

### Corrected dependency order (`B071-R17`, route flow rewritten `B071-R70`/`R73`)

```text
Applicable Sheet 2 work with R
  → completion evidence sealed
  → OP-FINAL-SIGNOFF by exactly one effective task A (R = not_applicable)
  → signed workstage package
  → T5 Editorial Review (one route-selected act)
     + T5 Assurance Preparation (Desk Editor act and Chief Journalist act, every route,
       distinct system-attested executor_principal_key values required between the two acts —
       B071-R36, R47)
  → one non-judgment three-act join: workflow_state Drafted → Reviewed; assurance_status → reviewed
  → human-only T5-EDITORIAL-APPROVAL (Chief Editor): workflow_state Reviewed → Approved
  → route decision:
       non-GRC (5 routes): no further human judgment; assurance_status stays reviewed
       GRC (ROUTE-FALLOUT-3, ROUTE-GRC): human-only T6-ASSURANCE-JUDGMENT required, held
         pending separately attributable external GRC acceptance/mandate evidence
  → external acceptance/mandate at its governed point where required — its absence refuses only
    the governed pre-Delivery/Delivery transition, never Final Sign-Off, T5-EDITORIAL-APPROVAL, or
    T6-ASSURANCE-JUDGMENT (B071-R37)
  → Delivery (T7/T10/T11 — the only owners of any publication-target outcome, B071-R70)
```

Only `T5-EDITORIAL-APPROVAL` and `T6-ASSURANCE-JUDGMENT` are categorically human-only. Final
Sign-Off's signer is whichever accountable principal resolves as the one effective task `A`
(`B071-R49`); the same role/identity may perform the route-selected Editorial Review and its own
Assurance Preparation act, but these remain different evidence records and purposes — one executor
cannot satisfy both Assurance Preparation acts by relabeling, retrying, or self-asserting an
identity, and this is a stated, testable requirement, not a stylistic caution (`B071-R36`, `R47`).

### Clause-level lifecycle disposition (`B071-R19` — replaces the prior "caution, not yet
resolved" note with an actual per-clause table)

| Origin | Retain | Re-derive or supersede |
|---|---|---|
| `D-175` | Human Chief Editor judgment exists in the flow (now split: `T5-EDITORIAL-APPROVAL` universal, `T6-ASSURANCE-JUDGMENT` conditional — `B071-R70`/`R73`); one T5 stage; Senior Journalist EW trigger; route/stage `A`; `ENV-EXT`; Line placement | `ROLE-CHIEF-EDITORIAL-DESK`; route-family one/two-reviewer cardinality; any claim that node labels prove actor separation; universal `T6` as a single undifferentiated human judgment |
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
| Chief Journalist's Assurance Preparation node | — (previously prose only — `B071-R48`) | `NODE-CHIEF-JOURNALIST-REVIEW`, mapped only to `ROLE-CHIEF-JOURNALIST`. Both this node and `NODE-EDITORIAL-DESK-REVIEW` are child workcells of the one `EG4`/`T5` stage — naming the sibling node does not create a second gate or serial review (`B071-R48`) |
| Chief Journalist | — | Stays distinct; performs the route-selected Editorial Review act on non-`ROUTE-PROD-1` routes AND its own Assurance Preparation act (`NODE-CHIEF-JOURNALIST-REVIEW`) on every route |
| Display aliases | `Editorial Desk Editor`, `Desk Chief`, `Chief Editorial Desk` | `Chief Editorial Desk` is the node/workcell display label for `NODE-EDITORIAL-DESK-REVIEW`, not a dropped term (`B071-R14`). `Editorial Desk Editor`/`Desk Chief` remain optional actor display aliases for `ROLE-DESK-EDITOR` only if the Judge separately approves; none are new IDs |
| `T6` (event identifier) | Universal Chief Editor judgment closing `Drafted → Reviewed → Published` | Split in two (`B071-R70`, `R73`): `T5-EDITORIAL-APPROVAL` (universal, `workflow_state: Reviewed → Approved`) and `T6-ASSURANCE-JUDGMENT` (conditional, `ROUTE-FALLOUT-3`/`ROUTE-GRC` only, internal assurance decision). Neither reaches `Published` — T7/T10/T11 own that |

**T5/T6 layer contract (Judge clarification — "T5/T6 publication-workspace layering"):** T5 has
three sub-layers, all still named `T5-*`: `T5-EDITORIAL-REVIEW`, `T5-ASSURANCE-PREPARATION` (two
acts), and `T5-EDITORIAL-APPROVAL` (the Chief Editor's editorial judgment). `T6-ASSURANCE-JUDGMENT`
is a separate, conditional stage entered only after `T5-EDITORIAL-APPROVAL` on GRC-accountable
routes. The assurance section of the Chief Editor's `T5` publication workspace is **view-only**; it
never accepts edits or a decision at that layer.

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
- The effective task `A` resolves to zero or to more than one accountable principal (`B071-R58`).

A valid sign-off is append-only, records the accountable principal/authority scope/evidence-IDs/
timestamp/decision, and closes only its own workflow stage. Its signer is the resolved effective
task `A`, one accountable principal — not necessarily the natural-person Chief Editor; **only `T6`
is categorically human-only.** Final Sign-Off never depends on T5, T6, or external acceptance, and
never records or implies external GRC acceptance.

**External acceptance is a separate, protected record; only the downstream transition is refused
(`B071-R24`, restated `B071-R37`):** the earlier draft said "external acceptance/mandate is
refused," naming the record itself as the thing being refused or acted on — the wrong subject. The
required external acceptance/mandate record remains separately attributable and append-only, and no
implementation may reject or mutate it. When it is missing or invalid, only the route's governed
pre-Delivery/Delivery transition is refused — **never** Final Sign-Off and **never** `T6`. This also
removes the contradiction `B071-R17` flagged: the earlier draft both listed missing external
acceptance as a Final-Sign-Off refusal condition and separately said it wasn't one.

**Assurance Preparation executor separation is a testable requirement, not a caution
(`B071-R36`, corrected `B071-R47`):** the two `T5-ASSURANCE-PREPARATION` acts
(`NODE-EDITORIAL-DESK-REVIEW`, `NODE-CHIEF-JOURNALIST-REVIEW`) must carry distinct, system-attested
`executor_principal_key` values, distinct canonical roles/nodes, distinct evidence IDs and distinct
purpose codes. The same executor may perform the route-selected Editorial Review plus **that
executor's own** Assurance Preparation act, but never both Assurance Preparation acts under two
labels, two run attempts, or two self-asserted identities (`B071-R55` — "account" describes a
natural-person/login concept, not the ruled comparison object). Verification must include a
negative test: one `executor_principal_key` submitting under both the `ROLE-DESK-EDITOR` and Chief
Journalist labels attempts to submit both Assurance Preparation acts and the attempt fails on
`executor_principal_key` equality, independent of whether evidence IDs and purpose codes are
already distinct.

### Identifier model (Judge clarification, resolves `B071-R47`/`R48`)

Per the Judge's direct ruling recorded in `docs/handoff/B-071-*.md` §"Judge clarification —
executor identity and attempt-badge exposure": `executor_principal_key` is **not** an alias for
`agent_id` — they are four separate identifiers.

| Identifier | Meaning | Stability | Exposed to |
|---|---|---|---|
| `agent_id` | Stable internal technical identity of a virtual agent | Same across runs | Internal only |
| `agent_run_id` | One execution attempt | New per attempt | Internal only |
| `agent_attempt_badge_id` | Internal full attempt identifier, binds `agent_id` + `agent_run_id` | New per attempt | Internal to the agent/audit mechanism only — not the Chief Editor's normal UI |
| `executor_principal_key` | Separate, stable, system-attested identifier | Same across an executor's retries/attempts | Exposed in my-editorial-app to its natural-person user (Chief Editor) |
| `identity_assurance` | How the identity was established | Per event | Not displayed as an identity itself |

Every `agent_attempt_badge_id` links to exactly one `executor_principal_key`; one
`executor_principal_key` may have multiple attempt badges. Assurance Preparation executor
separation (`§3`, `§4`) is evaluated on `executor_principal_key` alone — never `agent_run_id` or
`agent_attempt_badge_id`, and never a `self_asserted` value. The Chief Editor's interface (§6)
displays AI identity, canonical role/node, and `executor_principal_key`; raw `agent_id`,
`agent_run_id` and `agent_attempt_badge_id` stay internal unless an authorized audit view requires
them.

**`identity_assurance` target vocabulary (`B071-R52`):** `self_asserted` (unverified — historical
values preserved, never satisfies executor comparison), `authenticated` (a verified natural-person
or account principal — used at the Chief Editor/`T6` layer), `system_attested` (a server-issued
virtual-agent principal — required for both `executor_principal_key` values compared in §3/§4). The
applied `0002` migration's enum currently has only `self_asserted`/`authenticated`; adding
`system_attested` is a schema change routed to a later authorized migration, not an edit to `0002`.

**Article 50 scope (`B071-R51`):** no fifth identifier or public-facing token is required. The
governed direct interaction is between the virtual agents and the Chief Editor — the natural person
who receives the AI label, role/node and `executor_principal_key` at first interaction. Whether
published article text needs its own AI-generation label under Article 50(4) is a separate
publication-feature question, assessed later; it does not gate `AUTH-DOC` or this identifier model.

**Data-contract ownership (`B071-R53`):** `agent_id`, `agent_run_id`, `agent_attempt_badge_id`, and
`executor_principal_key` — including one-principal-to-many-badges, server-only issuance, and
retry-continuity of the principal key — currently have no owning Product/Fn_Spec/`SPECS` record.
§7 adds the required write-set rows.

**Files to edit:** `docs/governance/factory-route-operation-crosswalk.md` (remove "missing `R`
unresolved" marking on `OP-FINAL-SIGNOFF`; reorder it before the T5 row; add refusal conditions
above), `docs/governance/raci-involvement-matrix.md` (Sheet1/Sheet2 `A` separation note).

**Verification:** crosswalk shows Final Sign-Off before T5, not after; `OP-FINAL-SIGNOFF`'s `R` is
no longer unresolved; each refusal condition above has a corresponding negative test; no test
asserts a human-only rule on Final Sign-Off's signer; the same-executor negative test above exists
and fails as specified.

## §4 — Three-act T5 completion unit (depends on §2, §3; corrected by `B071-R11`, `R18`, `R36`, `R47`, `R48`)

**Every route requires exactly three separately sealed acts, each with its own evidence ID and
workstream/purpose code, and each gated on a signed Final Sign-Off package (§3):**

1. One `T5-EDITORIAL-REVIEW` act — route-selected executor (Desk Editor for `ROUTE-PROD-1`, Chief
   Journalist otherwise).
2. One `T5-ASSURANCE-PREPARATION` act from `NODE-EDITORIAL-DESK-REVIEW` — **every route**, not
   only where Editorial Review selected Desk Editor.
3. One `T5-ASSURANCE-PREPARATION` act from `NODE-CHIEF-JOURNALIST-REVIEW` (`B071-R48`) — **every
   route**.

The same executor principal may hold the role behind two of these acts (e.g. Chief Journalist
performs both the route's Editorial Review and its own Assurance Preparation act) (`B071-R55` —
corrects "the same person", which describes a natural-person/account concept, not the ruled
`executor_principal_key` comparison object). **Role identity performing two acts never collapses
them into one, and never counts as independence-by-difference** — acts are distinguished by
workstream/purpose code and evidence ID, not by who performed them. Acts 2 and 3 additionally
require distinct, system-attested `executor_principal_key` values from each other in all cases — a
single executor principal may never hold both Assurance Preparation acts regardless of which
labels, run attempts, or self-asserted identities that executor carries (`B071-R36`, `R47`; see
§3's negative test and the identifier model above). Exactly one deterministic join reads all three
sealed acts and performs `Drafted → Reviewed`; it fires once and only once all three exist.

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
even when the same executor principal performed them (`B071-R58`); the two Assurance Preparation acts carry distinct,
system-attested `executor_principal_key` values on every route, verified by the negative test in
§3; a `self_asserted` value fails that test even when the other fields are already distinct.

### §4a — `T5-EDITORIAL-APPROVAL` and conditional `T6-ASSURANCE-JUDGMENT` (new — `B071-R70`, `R73`)

**`T5-EDITORIAL-APPROVAL`** fires once the three-act join above completes. It is a fourth, distinct
act — never counted toward or satisfied by the three-act join itself:

- Actor: natural-person Chief Editor only; agent attempts are refused.
- Effect: article `workflow_state: Reviewed → Approved`. Append-only event, cites the combined T5
  packet. Never writes any publication-target field.
- Operational semantics (`B071-R69`): executes and persists for real inside the POC/demo boundary;
  pre-authentication events carry `identity_assurance: self_asserted` and are visibly labeled as
  such, but the transition is not blocked, disabled, or reversed because of that label.
- Universal: required on all seven routes.

**`T6-ASSURANCE-JUDGMENT`** is conditional and, where required, follows `T5-EDITORIAL-APPROVAL`:

| Route | `T6-ASSURANCE-JUDGMENT` | Delivery holds on |
|---|:---:|---|
| `ROUTE-PROD-1/2/3`, `ROUTE-FALLOUT-1/2` | Not required | Existing T7/T10/T11 rules only |
| `ROUTE-FALLOUT-3`, `ROUTE-GRC` | **Required** | The internal judgment **and** separately attributable external GRC acceptance/mandate evidence |

Same actor/operational rules as `T5-EDITORIAL-APPROVAL` (natural-person-only, `self_asserted` when
pre-authentication, real persisted evidence). It never records external GRC's acceptance itself —
that remains a separate, externally-attributable record. Its exact `assurance_status` output value
is an open Draft 12 specification detail (§1, point 5) — this plan does not invent one.

**Files to edit:** `docs/Modular_PRD.md` (name the `T5-EDITORIAL-APPROVAL` event/transition and its
`AC`; state the `T6-ASSURANCE-JUDGMENT` route condition), `docs/fn-specs/FN-GATES-01-05.md` (route
branch logic, human-only refusal tests for both acts), `docs/governance/factory-route-operation-
crosswalk.md` (route matrix above).

**Verification:** `STATE-EDITORIAL-01`/`STATE-ASSURANCE-01`/`STATE-GRC-01`/`FLOW-GRC-01`–`05` (as
specified in the Judge clarifications) each have a corresponding acceptance test; no non-GRC route
can produce a `T6-ASSURANCE-JUDGMENT` event; no route reaches a publication-target outcome from
either act directly.

## §5 — Supersede the false either/or; define two feature units (depends on §4; replaces the prior
"redraft B-070's two options" — `B071-R22`, Chief Editor clarification)

**B-070's Option A and Option B are not alternatives.** They specify two different features; the
Judge is not choosing between them. Both are superseded *as options* while their valid functional
content is preserved as separate feature units:

| B-070 wording | Actual feature | Correct disposition |
|---|---|---|
| Option A — bounded unit now | **Feature 1 — T5/T6 judgment control:** three T5 acts, one join, universal `T5-EDITORIAL-APPROVAL`, conditional `T6-ASSURANCE-JUDGMENT`, audit evidence; no route enablement (`B071-R70` terminology) | Superseded as an option. Preserved as the corrected scope of the first bounded implementation unit (`AUTH-F1`) |
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
   completion join, blind/reveal order, universal `T5-EDITORIAL-APPROVAL`, and conditional
   `T6-ASSURANCE-JUDGMENT` for the two GRC-accountable routes' test coverage. Enables no production,
   fallout or GRC route.
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

## §6 — Chief Editor `M-MVP` editorial UI scope (depends on §4, §4a; scope-cut per `B071-R74`, POC-first UI ruling)

New file: `docs/specs/ux/UX-CHIEF-EDITOR-PUBLICATION-WORKSPACE.md` (`B071-R59` — corrects the prior
lower-case path). **Current scope is the `M-MVP` editorial flow only** (`B071-R74`) — the earlier
full assurance/`T6` workspace design is retired from this spec's current-scope section and moved to
one separate backlog feature (§6a names it). Must show, and the UI must enforce:

**Current (`M-MVP`) scope:**

- The main trigger details and the sealed T5 packet (both workstreams' evidence, read-only)
- `Publication status` — a human-facing projection of the article's `workflow_state`
  (`Reviewed`/`Approved`), never the publication-target status
- The `T5-EDITORIAL-APPROVAL` control: only a natural-person Chief Editor action satisfies it; a
  visible `self_asserted`/pre-authentication badge when applicable, per `B071-R69` **without**
  disabling the control — the action persists for real either way
- A read-only `Assurance status` field showing `reviewed` once both T5 Assurance Preparation acts
  are sealed — explicitly labeled as T5 preparation status, never implying a `T6` or external GRC
  decision occurred
- One clearly labeled downloadable URL for the `M-MVP` Public Explainable Content with report, shown
  only after successful generation, with article/decision provenance; a defined pending/failure
  state when the report doesn't yet exist (§6a names its owning artifact contract)
- The Chief-Editor-facing identity display (AI identity, role/node, `executor_principal_key` — never
  raw `agent_id`/`agent_run_id`/`agent_attempt_badge_id` outside an authorized audit view)
- On `ROUTE-FALLOUT-3`/`ROUTE-GRC`: Delivery stays refused while `T6-ASSURANCE-JUDGMENT` and its
  required external GRC evidence remain incomplete — the deferred `T6` UI (§6a) must never be read
  as removing this hold

**Deferred to the separate backlog feature named in §6a — not in this spec's current scope:**

- Detailed assurance evidence/brief views beyond the status summary
- The Chief Editor's `T6-ASSURANCE-JUDGMENT` UI controls
- External GRC acceptance/mandate evidence capture and provenance UI
- Assurance-specific refusal, amendment and retraction interactions
- The complete assurance audit view alongside the publication record

Marked `[V1]` per `D-36`'s spec versioning convention; new file, not an edit to an existing `[V1]`
section. **Represents** the actor/node/Final-Sign-Off/state-axis rules defined in §1–§4a; never
their origin (`B071-R14`).

**Files to edit:** `docs/Modular_PRD.md` (current-scope `AC`s only; do not describe the deferred
assurance UI as in-scope), `docs/specs/ux/UX-CHIEF-EDITOR-PUBLICATION-WORKSPACE.md` (new, as above).

**Verification:** `UX-POC-01`–`04`, `UX-ASSURANCE-01`–`02`, `BACKLOG-ASSURANCE-01` (as specified in
the POC-first UI Judge clarification) each have a corresponding acceptance test; no current-scope
screen requires the deferred assurance UI to function; the GRC-route hold is independently testable
without that deferred UI existing.

## §6a — `M-MVP`/`M-POC` maturity model and the report-gate precondition (new — `B071-R75`, `R76`)

**Maturity sequence (Judge clarification — "`M-MVP` proof first, `M-POC` client proof later"):**

```text
Operational demo condition
      ↓
M-MVP — Chief Editor proves the editorial workflow and its evidence
      ↓
M-POC — clients test the value of an evidence-review engagement (same engine, no forked pipeline)
      ↓
Production — additional identity, live-target and external-authority controls
```

`M-MVP` and `M-POC` are governed module identifiers, not generic "POC" language. Every operative
instruction in this plan and its downstream propagation must name `M-MVP` or `M-POC` where a module
boundary, output, or audience is meant; bare "POC" is used only where the text explicitly means the
generic validation purpose.

**Downloadable-report ownership and the `M-POC` start gate (Judge clarification — "the downloadable
report is an `M-MVP` artifact, gating `M-POC` start"):**

- The Public Explainable Content with report is an **`M-MVP`** common-engine artifact. Its current
  audience is the Chief Editor. No `M-POC` engagement field, client folder, `/request-brief` linkage,
  payment trace, or client-package data may attach to it or its generation record.
- `M-POC` engagement start requires **both** of the following — additive, neither replacing the
  other:
  1. The existing governed `PR-13` boundaries (`docs/fn-specs/FN-POC-ENGAGEMENT-01-13.md`) — all ten
     `B-P0-06` boundaries hold a real value.
  2. Successful, provenance-linked generation of the `M-MVP` report.
- **Terminology hold (`B071-R76`):** the Judge's ruling names this completion bar **"Minimum
  Markable Feature"** — quoted verbatim, `definition_pending`. A prior turn substituted "Minimum
  Marketable Feature (MMF)" and used it operatively without authority; that substitution is
  withdrawn here. Do not use "MMF" or "Marketable" in any operative criterion, file, or acceptance
  test until the Judge confirms the intended term or its measurement.

**Files to edit:** `docs/modules/M-POC-REQUIREMENTS.md` (add the `M-MVP` report as an additional,
additive start precondition beside `PR-13`; do not restate or replace `PR-13`'s ten boundaries),
`docs/fn-specs/FN-POC-ENGAGEMENT-01-13.md` (target overlay naming the new precondition and its
refusal behavior when the report is absent/failed), `docs/Modular_PRD.md` (owning `AC` for the
`M-MVP` report's generation/provenance contract, distinct from `M-POC`'s requirements).

**Verification:** `MATURITY-TERM-01`, `MATURITY-MVP-01`/`02`, `MATURITY-POC-01`/`02`,
`MATURITY-EVIDENCE-01`, `MATURITY-GATE-01`–`03` (as specified in the two maturity-model Judge
clarifications) each have a corresponding acceptance test; no test or requirement uses "Marketable"
or "MMF" operatively; `M-POC` start is refused if either the `PR-13` boundaries or the `M-MVP` report
precondition is unmet, independently of the other.

## §7 — Complete propagation write set (depends on §1–§6; replaces the prior partial list —
`B071-R20`, completed `B071-R33`)

Single-pass sweep per `D-54`, once §1–§6 are Judge-approved (`AUTH-DOC`):

| Tier | Action |
|---|---|
| `V1-DECISION-REGISTER.md` | Add `D-182`: decision content (§1), corrected dependency order, clause-level lifecycle table, this plan's own artifact-creation fact, UX artifact creation fact, explicit `D-171` hold preservation |
| `V1-BUILD-SPEC.md` | Three-act target DoD; Final-Sign-Off-before-T5 sequence; this plan's sequencing fact; UX artifact sequencing fact — no implementation authorization, hold stays |
| `V1-ARTIFACT-INVENTORY.md` | Add `docs/specs/ux/UX-CHIEF-EDITOR-PUBLICATION-WORKSPACE.md` and `docs/specs/SPECS-IDENTITY-ATTESTATION.md` (`B071-R59`/`R63` — the `D-30` redundancy test is resolved, not conditional; both files are created); mark this plan's own row historical/superseded (**never removed** — `B071-R16`) |
| `Modular_PRD.md` | Owning sections: `US-04a`/`US-05a`, `FR-04a`/`FR-05a`, `AC-05a`–`AC-08a`, `G-05a`, `SEC-01a`/`SEC-03a`, any T5 prerequisite in `AC-22`; **and** (`B071-R53`) `TR-DM-02`/the identity NFR for the four identifiers; **and** (`B071-R70`, `R73`) name the new `T5-EDITORIAL-APPROVAL` event/transition and its `AC`, state the `T6-ASSURANCE-JUDGMENT` route condition, and remove any `AC` implying `T6` itself reaches `Published`; **and** (`B071-R75`) the `M-MVP` report's generation/provenance `AC`, distinct from `M-POC`'s requirements. §8 separately records the UX tier/file opening and unchanged S2 hold — §8 does not own the User Story rows themselves (`B071-R20` corrects the prior draft's wrong mapping) |
| `FN-GATES-01-05.md` | §11: actor/node mapping, three acts (every route), join, blind order, consuming evidence; **and** (`B071-R53`) behavior/refusal rules for the four identifiers — comparison object, retry continuity, `self_asserted` rejection; **and** (`B071-R70`) route-branch logic distinguishing universal `T5-EDITORIAL-APPROVAL` from conditional `T6-ASSURANCE-JUDGMENT`, with negative tests for both (agent attempts refused; non-GRC routes cannot produce a `T6-ASSURANCE-JUDGMENT` event) |
| `docs/modules/M-POC-REQUIREMENTS.md` (`B071-R75`, new row) | Add the `M-MVP` report as an additional, additive `M-POC` engagement-start precondition beside the existing `PR-13` ten-boundary rule — do not restate or replace `PR-13` |
| `docs/fn-specs/FN-POC-ENGAGEMENT-01-13.md` (`B071-R75`, new row) | Target overlay at the `PR-13` constraint (L58) naming the new conjunctive precondition and its refusal behavior when the `M-MVP` report is absent or failed |
| `docs/source/v1-build-readiness-addendum.md` L30, L82, L141, L164–165 (`B071-R61`, `R71`) | These rows/blockquotes state T5=Line 2/human-primary (Senior Journalist), T6=Line 1/agent (Chief Journalist) — the opposite Line/actor pairing from `D-182`. `[V1→V2]` target overlay at each anchor: preserve as historical Three-Lines-Model text (OD1 remains "Open at Charter level" per L141 — this plan does not resolve OD1), add a target note pointing to `D-182`'s `T5-EDITORIAL-APPROVAL`/`T6-ASSURANCE-JUDGMENT` model. Negative search: no unmarked current-value row may assert T5 is exclusively Line-2/human or T6 is exclusively Line-1/agent without the target-overlay note beside it |
| `docs/source/blueprint.md` L84, L101–102, L109, L124 (`B071-R61`, `R71`) | Same Three-Lines T5/T6 Line-crossing model as the addendum. Same treatment: `[V1→V2]` target overlay at each anchor, OD1 left open, note pointing to `D-182` |
| `docs/source/business-case.md` L53, L107, L162, L188 (`B071-R61`, `R71`) | Same model, plus L188's "T6 executor approval" phrase in the guest-platform publication paragraph. Same treatment; L188 additionally needs a note that `D-182`'s `T5-EDITORIAL-APPROVAL`/`T6-ASSURANCE-JUDGMENT` never themselves write `Published` — T7/T10/T11 do |
| `docs/README.md` L43 (`B071-R61`, `R71`) | States "T5 is the Line 2 gate and is human-primary in every governing document" as a current-value claim. Target overlay noting `D-182` as the current T5/T6 model; do not delete the historical claim |
| `docs/specs/SPECS-TRANSITION-ENFORCEMENT.md` L73 (`B071-R61`, `R71`) | Table row "`T6 \| Reviewed \| Approved \| Fixed pair · Line 1`" is a current-value enforcement claim, not narrative — requires a `[V1→V2]` target-overlay row, not just a top-of-file notice, since this file's own state-machine table is what `bun run check`-style tooling would read |
| `docs/governance/media-industry-sop-fallback-implementation-plan.md` L124 (`B071-R61`, `R71`) | Already says the "T5 review is executed by a Line 2 human" wording should not be deleted until OD1 is resolved through the authorized downstream process — this plan **adds** the `D-182` target note beside it without deleting it, consistent with that file's own instruction |
| Frozen `docs/PRD.md`, the Charter | Excluded — never edited, per binding rule | — |
| `FN-EXCEPTIONS-06-11-12.md` | Three-act-aware invalidation/rerun; external-trigger vs. external-acceptance separation (`B071-R20` — omitted entirely from the prior draft) |
| `FN-PUBLICATION-09-10-13.md` | External acceptance at its governed pre-Delivery point and Delivery refusal, without moving that requirement into Final Sign-Off (`B071-R20` — omitted entirely from the prior draft) |
| `raci-involvement-matrix.md` | §§3.1/8: scoped `A` resolution, Final Sign-Off ordering, all-route Desk Review mapping, three T5 acts, one join |
| `factory-route-operation-crosswalk.md` | §§2–4: same content as above, crosswalk form |
| `docs/specs/SPECS-IDENTITY-ATTESTATION.md` (new, decided — `B071-R59`, `R63`) | (`B071-R53`) Physical storage, key constraints, and server-only issuance for the four identifiers; owning migration for adding `system_attested` to `identity_assurance` (`B071-R52`) — not `0002`. `D-30` redundancy test resolved, not deferred: `SPECS-TRANSITION-ENFORCEMENT.md` explicitly excludes "column sets, types, nullability" and "typed columns versus JSON payload" from its own scope, so it cannot own this content; no other existing `SPECS-*` file addresses identity storage. One new file is warranted |
| `docs/specs/README.md` (`B071-R63`) | Fix line 13's documented convention from singular `docs/specs/SPEC-*.md` to plural `docs/specs/SPECS-*.md`, matching the three files that already exist (`SPECS-PUBLICATION.md`, `SPECS-TRANSITION-ENFORCEMENT.md`, `SPECS-VERIFICATION-APPARATUS.md`) and the new `SPECS-IDENTITY-ATTESTATION.md` — the index was contradicting reality, not the other way around |
| `docs/graph-fragments/merge7.js` | (`B071-R54`) **Deterministic-upsert and semantic-equality-check foundation already completed and committed at `838baff`** (the Graphify tooling/status precondition). (`B071-R66`, remaining, ordinary Lane A work — not gated on `AUTH-DOC`): gate the write behind a true read-only `--verify-only` mode; fail closed on dangling fragment edges instead of dropping them from the check; add an all-fragment audit; explicitly enumerate which fields are fragment-owned versus Graphify-derived; add the four named negative tests (no-write verify-only, dangling-edge failure, same/cross-fragment conflict failure, update-in-place still works) |
| `B-070` | **Already applied at `d3cadda` — cite, do not edit again.** Its forward notice already records the options-superseded/feature-split correction; this pass only references it (`B071-R33`) |
| `LANE-B-WORK-ORDER.md` | Fix §1's stale `Eligible` definition (`B071-R7`) |
| `B-071` (this handoff's own record) | Lane A answer recorded; `Resolution: Applied` set once this plan's actual §1–§8 packet propagates at the named commit; **never self-`Verified`** — that mark is Lane B's independent review alone (`B071-R33`, corrected `B071-R42`) |
| `V1-B071-CORRECTIVE-PLAN.md` (this file) | Mark `DRAFT` retired with a forward link to `D-182`; file becomes executed/historical, not deleted — same non-deletion rule as its Inventory row (`B071-R33`, `B071-R16`) |

## §8 — Commit, graph sync, verification handback (depends on §7; ordering corrected `B071-R44`)

Strict order — do not interleave:

1. Edit all §7-approved source tiers and `docs/graph-fragments/frag119.json` (add the `D-182`
   decision node; transition the `B-071` and this-plan lifecycle-status nodes from
   `Open`/`DRAFT`/`proposed` to `Applied`/`historical` as §7 makes true; preserve the existing edge
   to `D-171`). `docs/graph-fragments/merge7.js`'s deterministic-upsert foundation is already
   committed (`838baff`, `B071-R65`) — if `B071-R66`'s remaining verifier fixes are not yet
   committed, they must land in this same edit set, not scheduled for after this commit.
2. Commit that complete packet — source and curated fragment together (plus `merge7.js` only if
   `R66`'s fixes are still pending), in one Lane A pass. Nothing in step 1 is left uncommitted.
3. `npx graphify hook-rebuild` against that commit; re-merge `docs/graph-fragments/` **every time**,
   not only if the curated node count drops (`B071-R35`, corrected `B071-R46`). The deterministic
   upsert (fixed at `838baff`) performs an update, not a skip, on existing IDs. A same-node-count
   rebuild is not sufficient evidence of a synced description; the semantic-equality check between
   every tracked fragment-owned field and `.graphify/graph.json` must pass in its corrected,
   non-mutating form (`B071-R66`), and a required direct edit of `.graphify/graph.json` after this
   step counts as this check failing, not as a workaround.
4. `bun run check` — full suite green, including `docs-drift` (`lastAnalyzedHead = HEAD`)
   (`B071-R15`: a red `graph-coverage` or `docs-drift` is never accepted as evidence of safety).
5. Run the semantic queries the review will need (e.g. `graphify query`/`explain` against `B-071`
   and `D-182`) to confirm they return the current lifecycle, not a stale one.
6. Make no further tracked edit before independent review. Return to Lane B for verification (Lane
   A marks its own work `Applied`; only the independent review may mark it `Verified`).

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

**Round 5 (Lane B, reviewing Draft 5 at `5bd9b90`) — completed:** `B071-R38`–`R44` incorporated
into this draft (6): corrected the evidence-state inversion — push equality was already satisfied
at `5bd9b90` while Graphify was stale at `d3cadda` (16/17, not 17/17) (`R38`); scoped the
"never abbreviate as Gate" rule to operative text, leaving historical citations intact (`R39`);
separated drafting/proposing `AUTH-F1`/`AUTH-F2` from approving/exercising them (`R40`); corrected
`AUTH-ROUTE` to a globally-`Verified` Feature 1 result plus a route-specific Feature 2 result,
never route-specific Feature 1 approvals (`R41`); removed `B-070` from the opening's future-write
list and fixed §7's B-071-closure reference from nonexistent "§1–§9" to actual "§1–§8" (`R42`);
scheduled the `frag119.json` description update to `R1`–`R37`/Draft 5/`AUTH-*` vocabulary as part
of §8 (`R43`); and fixed §8's commit-then-rebuild ordering (`R44`).

**Round 6 (Lane B, reviewing Draft 6 at `2d3bd49`) — completed:** `B071-R45`–`R49` incorporated
into this draft (7): the review-baseline metadata contradictions (`R45`) are corrected in the
handoff file itself; `merge7.js`'s non-reproducible upsert is recorded as a required §8 fix
(`R46`); the `executor_principal_key` identifier model — rejecting `agent_run_id`,
`agent_attempt_badge_id` and `self_asserted` values for executor comparison — replaces undefined
"executor IDs" throughout §1/§3/§4 (`R47`); the sibling canonical node
`NODE-CHIEF-JOURNALIST-REVIEW` → `ROLE-CHIEF-JOURNALIST` is named (`R48`); and "person"/"whichever
person" in Final Sign-Off text is replaced with "accountable principal", reserving "natural person"
for `T6` alone (`R49`).

**Round 7 (Lane B, reviewing the uncommitted Draft 7 worktree over `2d3bd49`) — completed:**
`B071-R50`–`R55` incorporated into this draft (8): B-071's live header/Source/revision-history
metadata is actually corrected, not just claimed (`R50`); the invented fifth Article-50
external-reader token is removed — direct-interaction disclosure is Chief-Editor-only, publication
labelling is a separate Article 50(4) question (`R51`); `system_attested` is added to the target
`identity_assurance` vocabulary without touching `0002` (`R52`); the four identifiers get
Product/Fn_Spec/`SPECS`-candidate ownership in §7 (`R53`); `merge7.js`'s fix moves into §7/§8 step
1's committed write set, ahead of any rebuild (`R54`); and "person"/"account" language describing
virtual-agent execution in §4 is replaced with "executor principal"/`executor_principal_key`
(`R55`).

**Round 8 (Lane B, reviewing committed/pushed Draft 8 at `d3898db`) — completed:** `B071-R56`–`R60`
incorporated into this draft (9). `R56`'s core correction restructures the review process itself:
the prior single "Round N checklist" mixed items reviewable from text alone with items that require
executing §7/§8, which §7/§8 explicitly gate on `AUTH-DOC` already being granted — a circular gate
that could never literally complete. This is fixed by splitting into three named things below: a
**plan-review checklist** (text-only, gates reaching the Judge for `AUTH-DOC`), an optional
**Graphify tooling/status precondition** (separately authorizable, may precede `AUTH-DOC`, applies
no disputed content), and an **applied-state verification checklist** (runs only after `AUTH-DOC` is
granted and Lane A executes §7/§8). `R57` corrects this file's and B-071's lifecycle metadata to
name pushed `d3898db` as Draft 8's evidence. `R58` finishes the `R49`/`R55` language replacement
(§3's refusal condition, §4's verification line). `R59` names both proposed spec paths under their
governed conventions. `R60` is addressed by the tooling precondition below, not by an unqualified
rebuild.

**Round 9 (Lane B, reviewing pushed Draft 9 + Graphify precondition at `838baff`) — completed:**
`B071-R61`–`R66` incorporated into this draft (10). Adds forward-notice write-set rows for the
editable governing/derived files the propagation set omitted (`R61`); decides the `T6`
pre-authentication trust boundary in favor of visible `self_asserted`/demo status, consistent with
this project's binding demo-first v1 rule (`R62`); resolves the identity-spec `D-30` redundancy test
and fixes `docs/specs/README.md`'s naming convention (`R63`); replaces the last operative prose node
reference with `NODE-CHIEF-JOURNALIST-REVIEW` (`R64`); corrects §7/§8 to describe the Graphify
precondition as completed, not pending (`R65`); and records `merge7.js`'s remaining verifier
defects as required tooling work with named negative tests (`R66`).

### Round 10, part 1 — historical, retired (`B071-R68`)

The checklist that previously stood here required governing/derived files to **carry** overlays, an
identity spec to **exist**, naming conventions to **match**, and tooling tests to **exist** — all §7/§8
application outcomes — as conditions for reaching the Judge for `AUTH-DOC`, while §7/§8 themselves
are gated on `AUTH-DOC` already being granted. That circularity (`B071-R68`) meant no literal
execution order could satisfy it. It is retired as historical evidence of the defect, not deleted;
its intent is preserved, correctly split, in the plan-review/applied-state checklists below.

### Round 10, part 2 — Draft 10 rejected as a packet; `B071-R67`–`R76` recorded

Independent review (`docs/handoff/B-071-*.md` §"Independent review — Draft 10 and the post-Draft-10
Judge clarifications") found Draft 10 **not approvable**: none of `B071-R67`–`R72` was fully closed,
and five further Judge rulings materially superseded its parent T5/T6 model. New findings
`B071-R73`–`R76` were recorded. **The Judge approved proceeding directly to Draft 11, superseding
Draft 10 in full**, rather than patching it child-first. This draft (11) is that response.

### Round 11 — outstanding, before this revision reaches the Judge for `AUTH-DOC`

- [ ] The plan-review checklist below contains no item requiring §7/§8 execution (re-verifying
      `B071-R68`'s fix survived this rewrite)
- [ ] `T5-EDITORIAL-APPROVAL` and `T6-ASSURANCE-JUDGMENT` are named consistently as two distinct
      events everywhere in §1/§2/§4a; no operative text uses bare `T6` for the universal editorial
      transition
- [ ] `T6-ASSURANCE-JUDGMENT` is stated as conditional on `ROUTE-FALLOUT-3`/`ROUTE-GRC` only, in
      every place the route matrix is restated (§1, §4a, §7)
- [ ] No text claims `T5-EDITORIAL-APPROVAL` or `T6-ASSURANCE-JUDGMENT` reaches `Published`;
      publication remains exclusively T7/T10/T11-owned
- [ ] Pre-authentication behavior is stated as operational/`self_asserted`/non-production, never as
      non-operative, disabled, or unable to persist state (`B071-R69`)
- [ ] Every §7 row for the six previously-combined governing/derived files names an exact file and
      anchor (line/section), not a combined catch-all (`B071-R71`)
- [ ] §6/§6a state the POC-first UI cut: current `M-MVP` editorial scope, detailed `T6` UI in a
      separately owned backlog feature, GRC-route Delivery hold explicitly preserved (`B071-R74`)
- [ ] `M-MVP`/`M-POC` are used as module identifiers wherever a module boundary is meant; no bare
      "POC" stands in for either (`B071-R75`)
- [ ] The `M-MVP` report gate is stated as additive to `PR-13`, never replacing it
- [ ] No text uses "Minimum Marketable Feature" or "MMF" operatively; the Judge's exact phrase
      "Minimum Markable Feature" is quoted, `definition_pending` (`B071-R76`)
- [ ] The Graphify verifier section states its remaining defects (untouched-graph comparison, atomic
      write, tracked negative tests) as not-yet-done, not as already-safe (`B071-R72`)
- [ ] This revision is pushed to `origin/docs/journal-2026-08-16` and confirmed identical before
      round 11 or `AUTH-DOC` is marked satisfied

### Plan-review checklist — gates reaching the Judge for `AUTH-DOC` (text-only; no §7/§8 execution required)

- [ ] No occurrence of "Gate A", "Gate B1", "Gate B2" or "Route Activation Gate" remains in
      operative text (§1–§8, Approval Gate, checklist pass/fail conditions); revision-history and
      review-history citations of that retired wording may remain, explicitly marked historical
- [ ] Every restatement of the `D-171` hold in this file is consistent with "`D-171` remains
      binding after `AUTH-DOC` is `Verified`; only an explicit `AUTH-F1`/`AUTH-F2` decision narrows
      it, for its own named unit only" — no sentence implies expiry on documentation verification
      alone
- [ ] §5's serialization statement and the Approval Gate table agree that `AUTH-F1`/`AUTH-F2` may
      be *drafted, reviewed and selected* independently but never *approved or exercised*
      concurrently, and that drafting/review may proceed before `AUTH-DOC` is `Verified` while
      approval/exercise may not
- [ ] The Approval Gate's `AUTH-ROUTE` row requires one globally `Verified` Feature 1 result plus
      the named route's `Verified` Feature 2 contract — never "Feature 1 Verified for that route"
- [ ] §7's write set closes B-071 and this plan's own lifecycle citing the actual §1–§8 packet,
      without scheduling a further B-070 edit, and without either file self-marking `Verified`
- [ ] §3/§4's executor separation requirement names `executor_principal_key` specifically (not a
      generic "executor ID"), is stated as testable (named negative test), covers both Assurance
      Preparation acts on every route, and the negative test explicitly fails two self-asserted
      identities in addition to two labels on one executor principal
- [ ] `NODE-CHIEF-JOURNALIST-REVIEW` is used consistently in §2/§4/§6 wherever the prior draft said
      "Chief Journalist review node" in prose only
- [ ] No "person"/"account"/"whichever person" language remains describing the Final Sign-Off
      signer or virtual-agent execution anywhere in §1/§3/§4; "accountable principal" covers Final
      Sign-Off, "executor principal"/`executor_principal_key` covers Assurance Preparation
      execution, and "natural person" appears only in the `T6` rule (`B071-R58`)
- [ ] §3's external-acceptance paragraph names the pre-Delivery/Delivery transition, not the
      external record, as the thing refused, and excludes Final Sign-Off and `T6` explicitly
- [ ] Both proposed spec artifacts have exact governed paths — `docs/specs/ux/UX-CHIEF-EDITOR-
      PUBLICATION-WORKSPACE.md` and (subject to the `D-30` redundancy test) `docs/specs/SPECS-
      IDENTITY-ATTESTATION.md` — and §7's Inventory row states the creation condition (`B071-R59`)
- [ ] No text states or implies a fifth Article-50 external-reader token is required; direct
      disclosure is scoped to the Chief Editor, and Article 50(4) publication labelling is recorded
      as a separate future question, not a blocker
- [ ] The four identifiers' Product/Fn_Spec/`SPECS` ownership rows exist in §7 and name issuance,
      stability, tenancy, uniqueness, linkage, retry continuity and retention
- [ ] `identity_assurance`'s target vocabulary (`self_asserted`/`authenticated`/`system_attested`)
      is stated without editing the applied `0002` migration
- [ ] Nothing in §1–§8 authorizes S2 implementation or moves Lane B from `Eligible`; `AUTH-DOC`,
      `AUTH-F1`, `AUTH-F2` and `AUTH-ROUTE` stay four separate approvals
- [ ] This revision is pushed to `origin/docs/journal-2026-08-16` and confirmed identical before
      this checklist or `AUTH-DOC` is marked satisfied
- [ ] This checklist itself contains no item that requires executing §7 or §8 (`B071-R56`) — a
      passing plan-review checklist is sufficient to bring `AUTH-DOC` to the Judge; graph currency
      is tracked separately below and is **not** a precondition of plan-review approval

### Graphify tooling/status precondition — completed at `838baff` (`B071-R56`, `R60`, closed by `R65`)

This was a distinct, narrower ask than `AUTH-DOC`, and the Judge granted it once. It is **done, not
pending** (`B071-R65` — this section previously described completed work as still conditional,
which risked either re-running finished tooling work or falsely calling the current graph stale).
At commit `838baff`, Lane A: fixed `merge7.js` to a deterministic upsert with a semantic-equality
check; updated `frag119.json`'s B-071/plan description to that round's status, without adding the
`D-182` decision node or any `Applied`/`historical` transition; rebuilt, re-merged, and confirmed
`docs-drift` cleared and the semantic-equality check passed at that commit. §7/§8 below cite this
completed tool rather than scheduling `merge7.js` as future `AUTH-DOC` work.

That said, `B071-R66` found the shipped verifier's guarantee narrower than its own success message
claimed, and `B071-R72`'s follow-up review found the fix applied for `R66` **still incomplete**: it
calls `buildCandidate(g, frag)` and then `verify(candidate, frag)` — so `--verify-only` compares the
fragment against a candidate it was just overlaid onto, not the untouched real graph, and a stale
real graph can pass. The write is a direct `writeFileSync`, not atomic (temp-write-then-rename), and
no tracked automated regression suite exists — the four "verified" cases in Draft 10's commit message
were manual, one-off runs, not a checked-in test file. **This section does not claim the verifier is
safe.** The precondition itself (status-only sync, no `D-182`) remains correctly bounded and does
not need re-authorization; the verifier's remaining defects — untouched-graph comparison, atomic
write, tracked negative tests — are ordinary Lane A tooling work, specified in the applied-state
checklist below, and must be done before the verifier is used as terminal semantic-parity evidence.

### Applied-state verification checklist — runs only after `AUTH-DOC` is granted and Lane A executes §7/§8

- [ ] (`B071-R72`) `merge7.js`'s `--verify-only` compares the fragment against the **untouched**
      graph read fresh from disk, never a candidate the same run just overlaid the fragment onto
- [ ] (`B071-R72`) `--all` validates global endpoint/dangling checks and field-level semantic parity
      against the real graph, not only whole-object equality between fragments
- [ ] (`B071-R72`) The write path is atomic (temp-file write, then rename, then re-read to confirm),
      not a direct `writeFileSync`; a failed write leaves the prior graph byte-identical
- [ ] (`B071-R72`) A tracked, automated test file (not a one-off manual run) exists covering: stale
      real-graph detection, no-write verification, dangling edges, same/cross-fragment overlap, and
      update-in-place — and passes
- [ ] §8's source-and-fragment edit (including `D-182`'s node and the `Applied`/`historical`
      transitions) is committed before any `graphify hook-rebuild`, never after, and `bun run
      check` — including `docs-drift` — is green at that commit
- [ ] `docs/graph-fragments/frag119.json`'s B-071 description states the final review round, the
      applied Draft number, `AUTH-*` vocabulary, and `AUTH-DOC: Verified` only once Lane B confirms
      it independently
- [ ] The semantic-equality check between every tracked fragment-owned field and
      `.graphify/graph.json` passes with no direct `.graphify/graph.json` hand-edit
- [ ] Every §7 write-set row is actually applied to its named file, not only described in this plan
- [ ] Lane A has marked its own work `Applied`; Lane B's independent review is the only path to
      `Verified`

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
| **`AUTH-ROUTE`** | One named route, requiring the shared `AUTH-F1` result `Verified` **once, globally** (`B071-R41` — never re-verified per route; route names in `AUTH-F1`'s test matrix are coverage, not per-route approval) **and** `AUTH-F2` `Verified` for that specific route's operation shapes and external-authority prerequisites | The Judge enabling exactly that one named route | Any other route; release; deployment; treating either feature authorization alone as sufficient |

**Drafting and approving are different acts (`B071-R40`):** `AUTH-F1` and `AUTH-F2` may be
*drafted and reviewed* (their scope, test matrix, exclusions and DoD written and independently
checked, as §5 and this table already do) at any time — that is planning work, not authorization.
What requires `AUTH-DOC` `Verified` first is *approving or exercising* either one: the Judge
narrowing `D-171` for it, and Lane B moving `Eligible → Active` to build it. This revision (the plan
itself, or its successor) must be pushed and confirmed identical on the remote branch before
`AUTH-DOC`'s `Verified` mark is recorded — a local-only pass is not shared evidence. `AUTH-F1` and
`AUTH-F2` may each be *selected* independently once `AUTH-DOC` is `Verified`, but only one may be
*exercised* — holding the development lock — at a time (`B071-R32`); only `AUTH-ROUTE` requires
both. No authorization's approval is unrestricted terminal authority — each names its unit,
exclusions, tests and DoD explicitly.
