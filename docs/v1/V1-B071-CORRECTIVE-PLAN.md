# V1-B071-CORRECTIVE-PLAN — T5/T6 Ontology Correction: Implementation Plan (DRAFT)

**Status: DRAFT 12 — carrying the `D-188` correction packet at its Draft 3 (§9 below). Plan
approval: none (`B071-R67`).** Draft 11 is superseded as a draft by Rounds 12–14
(`B071-R97`–`R117`). **Commit roles, kept distinct (`B071-R114`):** `411f834` is the Round 13
**review-input baseline**; `13da259` carries the Round 14 review. Neither is this draft's revision.
Draft 12's own commit, and any Judge acceptance of it, are separate later evidence recorded in
`docs/handoff/B-071-*.md` — never asserted inside the draft that precedes them. Draft 10 is reviewed and **superseded as a
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
- **Draft 12 — `D-188` correction packet, Draft 3 (input baselines: Round 13 review `411f834`,
  Round 14 review `13da259`; this draft's own commit is recorded in `B-071` once it exists,
  `B071-R114`):** adds §9, the `D-188` propagation correction, resolving `B071-R97`–`R117`. It
  records the Register correction as an **append-only notice** that leaves `D-188`'s body and tier
  row intact (`R101`, `R103`); keeps proposal state in this plan and out of final Register wording
  (`R104`, `R117`); replaces **both** legacy cross-version-readiness paragraphs rather than selected
  phrases (`R99`, `R105`); removes the automatic `NG-02` lapse (`R106`); exposes canonical `V1/NG-*`
  per row through a deterministic column transformation with no ellipsis (`R100`, `R107`, `R113`);
  **preserves `V1/NG-10`/`V1/NG-11` as versioned historical identities** whose targets are standing
  control and policy owners (`R110`); makes a version reconsideration condition **expire when its
  version freezes** (`R111`); carries no placeholder, ellipsis or self-referential SHA (`R112`);
  and orders the transaction commit → push → fetch-proof → rebuild → merge → relation-aware
  verification (`R109`, `R115`, `R116`).
- **§10 — proposed `D-189`, Draft 1 (new; independent of §1–§9; resolves `B071-R124`–`R136`):**
  drafts a new Register decision — not an edit to `D-188` — recording the V1 `T1`–`T5` editorial
  boundary (`V1/NG-12 → PBL-01`) and the sole human Chief Editor fallback. Identifies two structural
  facts Round 16/17 did not state: **`R135`** — `D-175`–`D-181`'s already-decided, human-only
  `T6` gate (S2 Unit 2) is a different object from the future digital-assurance capability `NG-12`
  excludes, and this draft's `NG-12` wording and every derived `T6` mention is corrected to name the
  excluded object precisely rather than the shared label; **`R136`** — the "no agent approves"
  guarantee is a property of the target order, held under `D-171`, not of the order currently
  authorized to build (`AC-07`'s live Chief Journalist-agent executor), and every derived statement
  of the guarantee is corrected to say so. Corrects `US-09` (no longer names an agent as the
  publish-triggering actor), discloses the `CR-12`/`CR-19` Chief Journalist→Chief Editor remap in
  traceability without editing frozen wording, and closes the already-tracked gap `B068-F7` via one
  target-order overlay note on `AC-05`–`AC-08` — renaming no decided gate ID, role, or transition.
  Sequenced behind §9: the `V1/NG-12` table row waits for `D-188` Draft 4's canonical-ID column.
- **§11 — proposed `D-189`, Draft 2 (supersedes §10 as the proposal under review; §10 preserved
  unedited as history; resolves `B071-R137`–`R144`):** Judge selected **Model A** — V1's editorial
  gate sequence is `T1`–`T5`; the human final act completes `T5` under a new label, `T5-FINAL`;
  `T6` becomes the sole name of the future `PBL-01` assurance capability. Adds a clause-level
  partial-supersession table naming exactly which `D-175`/`D-177`/`D-181` clauses this reopens
  (`D-176` unaffected in full; `D-180`'s own text already forwards to `D-181`, reused rather than
  duplicated). Adopts **`Acting Chief Editor`** — an already-existing `raci-involvement-matrix.md`
  §2 term — as the in-app executor name, resolving the Judge's naming clarification without
  inventing new vocabulary. Withdraws Draft 1's false premise that the historical gate order is
  presently build-authorized (`R138`; `V1-BUILD-SPEC.md` §S2 states both orders are held).
  Distinguishes the V1 editorial-*gate* boundary from the V1 *product* boundary — publication
  remains required after `T5-FINAL` (`R139`). Marks `CR-12`/`CR-19` a pending change request, not
  `Covered`, until the sponsor route returns (`R140`). Supplies the literal text Draft 1's write set
  named but never wrote for `FN-PUBLICATION-09-10-13.md` (`R141`). States every touched item as
  `Draft-addressed`, never `Closed`, with a four-state lifecycle table (`R142`). Names Inventory,
  `Modular_PRD` §8, Phase Closure and the Encyclopedia as explicitly unaffected (`R143`). Defines
  "fallback" as a requirements-interpretation mapping only, never runtime failover (`R144`).
- **§12 — proposed `D-189` Draft 3, Part 1 (extends §11; resolves `B071-R169`–`R181`; Part 2 —
  `R145`–`R168`'s T5-stage/occurrence-ledger work — explicitly not drafted this pass):** the narrow
  V1 authentication exception Round 23 selected (Chief Editor account + `T5-FINAL` only, no
  multi-team/S6/T6 scope), the atomic account-succession transaction, and Round 24's independent
  business-owner recovery flow, all as literal clause text. Adds a ninth/eighth identity object,
  the **business-owner control principal**, distinct from the application account it may replace so
  recovery is not circular. Adds new finding **`B071-R181`**, found during verification: the
  already-accepted `docs/journal/2026-08-16-entry007-decision-sheet.md` row `S5` — a **temporary,
  auto-reverting** board-approved LOA delegation for Chief Editor absence — is never reconciled
  against Round 24's **permanent** succession model, though both use "Acting Chief Editor"; flagged
  as an open Judge question, not resolved here. States three separate, non-overlapping
  authorization predicates (control-plane / `T5-FINAL` / agent) so no one identifier satisfies more
  than one. No physical schema, auth-provider configuration, or code is proposed — every field is a
  logical proposal, per Round 21–24's own repeated instruction.
- **§13 — proposed `D-189` Draft 4 (partially supersedes §11's gate model and §12's succession
  machinery; resolves `B071-R182`–`R186` as narrowed by Round 27):** the Judge removed multi-account
  succession as a V1 prerequisite entirely — V1 links **one** account to the sole Chief Editor;
  email management is external; succession/replacement machinery moves to a future `PBL-04`
  candidate, dependency-ordered but not ranked or authorized. Also corrects the gate model: `T5`
  completes via its own already-decided target mechanism (evidence acts + non-judgment bundle
  join), and the human's subsequent action is a **workflow step, not a sixth judgment gate** —
  proposes the literal name **`EDITORIAL_DISPOSITION`** for it, Lane A's drafting choice, flagged
  for review, replacing the withdrawn `T5-FINAL`. Corrects two errors in §12's own text, both
  caught by Round 25's independent review: `R182`'s unsupported claim about `S5`'s account/email
  mechanism (Entry 007 specifies neither), and `R186`'s citing `SC55`–`SC62` as continuing to apply
  when Round 23 had already superseded `SC62` as a positive criterion. Withdraws §11.4/§12.7's
  blanket "Encyclopedia: unaffected" claim — confirmed against `ENCYCLOPEDIA-SYNC.md` directly:
  Entries 01, 04 and 05 depend on files this correction touches and are marked impact-review
  candidates, not edited.
- **§14 — proposed `D-189` Draft 5 (scoped correction to §13; addresses `B071-R183`, `R185`,
  `R186`):** Round 29's Judge clarification makes `T5` editorial judgment **mandatory** — it always
  runs, because the assessment is what detects a gap, so it cannot be conditional on the gap already
  being known; "runs" is not "passes." Restores `T5-FINAL` as that mandatory human judgment
  completing `T5`, and re-scopes `EDITORIAL_DISPOSITION` from §13's separate post-`T5` approval into
  the **recorded outcome of that one judgment** — one decision, one disposition, no duplicate
  approval authority. Corrects three errors in §13 found by Round 28's independent review: the
  bundle join does **not** fully complete `T5`; `satisfied` is a value of
  `workflow_transitions.line_separation_status` (an independence metric), **not** a "`T6`-labelled
  state" whose control could be declared superseded — `G-02a` is amended in subject (`T5-FINAL` is
  now the one transition that may be `satisfied`) and retained in substance, because renaming a
  transition must not silently change the Line-classification result; and `SC71`/`SC72`/`SC75` test
  source accuracy, application completeness and truthful status, so retiring them by numeric range
  as "succession tests" was wrong. Reclassifies every criterion **by subject**. Adds the case table
  separating missing `A` from missing approval evidence — a live case, since
  `factory-route-operation-crosswalk.md` §2 records `OP-FINAL-SIGNOFF` with an accountable party and
  **no `R` in source at all**. Drafts the non-positive `T5-FINAL` path §13 never specified, leaving
  blocked-versus-negative-close as a named bounded question. Replaces §13.8's inherited execution
  steps with an explicit application-readiness condition: this packet is **not** application-ready.
- **§15 — proposed `D-189` Draft 6 (scoped correction to §14; addresses `B071-R183`, `R186`):**
  two scope narrowings and four error corrections. **Round 31's Judge clarification removes `R185`
  from V1 entirely** — *"since there is only one account there is no requirement to scope in V1"* —
  withdrawing the authentication prerequisite while **retaining** the `G-02a`/`SEC-01a` Line
  controls, which are a different subject. **Round 32 answers §14.4's open blocked-versus-negative
  question:** a negative judgment records its result and reasons, authorizes no publication, and
  triggers no automatic return, repair, resume or reschedule; the user may **manually re-trigger
  the entire article's analysis**, which carries its own evidence and inherits no approval.
  Corrects four errors found by Rounds 30–31: §14.3 inferred a live missing-approval incident from
  `OP-FINAL-SIGNOFF`'s blank source `R` (a blank `R` proves nothing about any article, and an
  A-only sign-off may legitimately approve prior `R`-work); §14.2 said agent acts supply "evidence,
  not judgment" when `FN-GATES-01-05.md` §11.1 states *"Each sealed act records its judgment"*;
  §14.4 said an incomplete package "remains `Reviewed`" when the same clause keeps it `Drafted`
  pre-join; and `SC79`'s one-judgment-per-article rule would have blocked the very remedy §14.1
  permits — replaced with one effective result **per assessment** and a non-duplicating replay rule.
  Adds the explicit scope disposition Round 32 requires for existing return/amendment clauses:
  **`FR-06` (P0/S1), `AC-09`/`AC-10`, `AC-08a`, `T8`/`T8a`/`T9` are all unaffected** — a blanket
  "defer negative-path handling" would have silently suspended a `P0` requirement. Deduplicates the
  deferred capability against all nine existing `PBL-*` rows, finds no fit, and proposes **`PBL-10`
  — automated negative-result handling**, identity only, unranked, no readiness implied.

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
`B071-R73`–`R76` were recorded. **The Judge authorized Lane A to prepare Draft 11 directly,
superseding Draft 10 in full** (not artifact-level approval of Draft 11 itself — see the
approval-provenance correction in `docs/handoff/B-071-*.md`), rather than patching it child-first.
This draft (11) was that response; Round 11 review subsequently found it not yet executable for
`AUTH-DOC` (`B071-R67`–`R83`).

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

---

## §9 — `D-188` propagation correction (Draft 3; resolves `B071-R97`–`R117`)

**Independent of §1–§8.** This section corrects `D-188`'s propagation into the Product and V1
tracking tiers. It opens no `AUTH-*` checkpoint, and `D-171` remains binding. Every block below is
**literal application text** — copied verbatim at application, with no placeholder, ellipsis or
self-referential SHA (`B071-R112`, `R113`, `NG-S6-SC17`).

### §9.0 — Normalized model this correction must preserve

| Layer | Durable identity | Lifecycle |
|---|---|---|
| V1 historical exclusion | `V1/NG-01`–`V1/NG-11` | Actionable while V1 scope is open; historical when V1 freezes |
| Standing rule an NG points to | Existing control/policy ID (`TC9`/`O-01`; legal/compliance policy) | Continues independently of V1; not a `PBL-*`, not the NG record |
| Future Product capability | `PBL-*` | Living identity and readiness; never authorized by NG absence or expiry |
| Security delivery scope | `S6`/`SEC-03` | Separately authorized sprint and requirement; not an instance of `PBL-04` |
| Build permission | Durable Judge act | Bounded write set and DoD; never inferred from any record above |

### §9.1 — Register parent · append-only notice in `V1-DECISION-REGISTER.md` §5.14e13

**`D-188`'s body and tier-applicability row are not edited.** Append after `### Scope limits`:

```markdown
### Correction notice — append-only (`B071-R101`, `R103`; reviewed in `B-071` Rounds 12–14)

**`D-188`'s body and tier-applicability row above are unchanged, including the claim this notice
withdraws.** That claim is the evidence explaining why this correction exists; erasing it would
remove the only trace of the defect.

**What is withdrawn.** The tier row reads `✅ §6 — excluded-object column and the D-04 paraphrase
correction`. Commit `129efab` corrected the `D-04` paraphrase in §6's monetization row and gave
that one row `V1/NG-03 — excludes PBL-02`. It added **no excluded-object column**, and it did not
touch the `NG-02`/`S6` row. **The excluded-object half is withdrawn as completion evidence; the
`D-04` paraphrase half stands**, verifiable at `V1-BUILD-SPEC.md` §6.

**The rule.** A versioned Non-Goal carries a canonical `(version_id, ng_id)` identity exposed as a
join key, points to exactly one excluded object, and states a version reconsideration condition
that is **actionable only while that version's scope is open**. When the version freezes (`D-36`)
the row and its condition become historical: a condition that later becomes true does not reopen
that version, alter its record, or authorize anything. `V1/NG-10` and `V1/NG-11` keep their
versioned historical identities and point to their standing control and policy owners; neither
takes a `PBL-*` (`D-188`). `S6`/`SEC-03` is a security sprint and requirement, not an instance of
`PBL-04`.

**Write set.** `V1-DECISION-REGISTER.md` §5.14e13 (this notice) · `Modular_PRD.md` §2.5 and
§2.5.1 · `V1-BUILD-SPEC.md` §6 (the multi-team row and the POC built-commercial row) and §6.1.
`PBL-04`'s §2.5.2 row and §6's `S6 — auth and scoped RLS` row are correct and unchanged. Frozen
`docs/PRD.md`, the Charter, `0001_init.sql`, the Artifact Inventory, the Fn/Data/UX specs and
Phase Closure are untouched.

**Superseded, narrowly.** Only the `D-147`/`D-148` clauses that treat `NG-02` and `S6` as one
future item. `D-147`'s `NG-03` tense correction and `D-148`'s condition mechanism otherwise stand.
No historical decision body is rewritten.

**Ontology unchanged** — direction, composite identity, three readiness meanings, the
standing-control split, and "not excluded is not included" all stand.
```

### §9.2 — Product `Modular_PRD.md` §2.5 · deterministic transformation

**Operation choice, made by Lane A per Round 14 (`B071-R113`).** A deterministic column
transformation, **not** a retyped eleven-row table: the rationale cells run to several thousand
characters, and retyping them risks the silent content loss `G32` records. The transformation below
is executable verbatim.

**A. Replace the `### 2.5 Non-Goals` heading through the table's delimiter row with exactly:**

```markdown
### 2.5 Non-Goals — V1 scope

**Canonical identity is `(version_id, ng_id)` (`D-188`).** The `Canonical ID` column is the join
key for every cross-document reference; `ID` remains the local display value. **A row records what
V1 excluded.** It is actionable while V1's scope is open and becomes historical when V1 freezes
(`D-36`); a later version records its own scope and runs its own decisions. **`V1/NG-10` and
`V1/NG-11` are V1 Non-Goal records whose targets are standing control and policy owners** that
continue independently of V1; neither takes a `PBL-*`.

| Canonical ID | ID | Non-Goal | Excludes (`D-188`) | Rationale | Source |
|---|---|---|---|---|---|
```

**B. For each of the eleven body rows, prepend one cell.** Replace the row's leading `| ` with
`| <canonical> | ` from the map below. Every other cell stays byte-identical.

| Row's existing `ID` cell | New leading cell |
|---|---|
| `NG-01` | `V1/NG-01` |
| `NG-02` | `V1/NG-02` |
| `NG-03` | `V1/NG-03` |
| `NG-04` | `V1/NG-04` |
| `NG-05` | `V1/NG-05` |
| `NG-06` | `V1/NG-06` |
| `NG-07` | `V1/NG-07` |
| `NG-08` | `V1/NG-08` |
| `NG-09` | `V1/NG-09` |
| `NG-10` | `V1/NG-10` |
| `NG-11` | `V1/NG-11` |

No `Excludes` value changes. `V1/NG-10` keeps its `TC9`/`O-01` control target and `V1/NG-11` keeps
its legal/compliance policy target (`B071-R110`).

**C. Replace the `V1/NG-02` row's `Rationale` cell — that cell only — with exactly:**

```markdown
**V1 exclusion.** "Operating model is one human" describes V1 and is part of V1's historical scope. A tenancy boundary exists in the data model to preserve the option; **no multi-team capability is built, and `V1/NG-02` stands.** Capability identity — including the `D-145` scoped read-only client-account variant for `M-POC` delivery — lives once under `PBL-04` (§2.5.2), not here. **Version reconsideration condition** (`D-148`), actionable only while V1's scope is open: `OD1`–`OD3` resolve, **or** the Charter's line 53 is amended directly — whichever comes first. **More people in the business may trigger reconsideration; they do not make this exclusion lapse.** Reconsideration permits re-examining V1's exclusion and nothing else — it is not feature readiness (`PBL-04`), not build authorization (a Register Judge act), and it says nothing about `S6`/`SEC-03`.
```

### §9.3 — Product `Modular_PRD.md` §2.5.1 · complete replacements

**A. Replace the paragraph beginning "Lives here, not in `docs/v1/`" with exactly:**

```markdown
**Lives here, not in `docs/v1/`, because the procedure must outlive any one version.** `D-36`
freezes every `docs/v1/V1-*.md` file at its sprint's close. **The procedure and the `PBL-*` catalog
survive; a version's exclusions do not.** `V1/NG-*` rows record what V1 excluded, are actionable
while V1's scope is open, and become historical when V1 freezes. A later version runs these same
steps to produce its own `V2/NG-*` rows. **This document carries no version prefix and never
freezes** — the correct place for the repeatable procedure, and for `PBL-*` capability identity,
which is genuinely version-independent.
```

**B. Replace step 5 of the five-step table with exactly:**

```markdown
| 5 | **State BOTH conditions where an item has two** — added `D-150`, closing `G106`. **A version reconsideration condition is not build authorization.** `V1/NG-02`/`V1/NG-03`'s own condition permits reconsidering that version's exclusion; **it does not authorize anyone to build the thing.** Where a separate charter, PRD, or approval is also required, name it alongside. **An item with one condition stated and the other unnamed reads ready when it is not** — the live instance was `B-008`'s POC commercial model, carried under the manual lane's condition alone |
```

**C. Replace the closing paragraph beginning "A version's own `V1-BUILD-SPEC.md` §6 cites this
table" with exactly:**

```markdown
**A version's own `V1-BUILD-SPEC.md` §6 cites this table; it does not restate it.** That document's
*"out of scope for v1"* list is a legitimate version-scoped snapshot, and it freezes with v1
(`D-36`).

**A reconsideration condition is scoped to its own version and expires with it.** While V1's scope
is open, resolving `V1/NG-02`'s condition permits reconsidering **V1's** exclusion. **Once V1
freezes, the row and its condition are historical: a condition that later becomes true does not
reopen V1, change V1's record, or authorize anything.** Future scope is decided by a later version's
own records and by `PBL-*` readiness, each with its own authorization. Refining a `PBL-*` capability
is a separate act under §2.5.2, continuously available and independent of any sprint.
```

### §9.4 — V1 tracking `V1-BUILD-SPEC.md` §6 and §6.1

**A. Replace the row beginning "Multi-team accounts, and `S6`" with exactly** (the
`S6 — auth and scoped RLS` row above it is unchanged):

```markdown
| Multi-team accounts | **`V1/NG-02`, Charter-level — excludes `PBL-04`** (`D-188`), standing per `D-79`. *Row corrected `D-188`/`B071-R97`: it previously read "Multi-team accounts, and `S6` — auth and scoped RLS (`SEC-03`)" and called `S6` the general case of which `D-145` was an instance. **They are different objects** — `S6`/`SEC-03` is the security sprint and requirement, owned by the row above; `PBL-04` is the capability.* **Rationale and version-reconsideration condition live in `Modular_PRD.md` §2.5 (`D-148`); capability identity lives in §2.5.2** — cited here, not restated |
```

**B. In the "POC built commercial model (`B-008`) — NOT adopted" row, replace the sentence
beginning "Ready when BOTH" through the end of that cell with exactly:**

```markdown
**Ready when BOTH** — a version reconsideration condition is not build authorization (`Modular_PRD.md` §2.5.1 step 5): ① `V1/NG-02` **and** `V1/NG-03`'s own reconsideration conditions resolve while V1's scope is open, cited from `Modular_PRD.md` §2.5 and not restated here; **and** ② a **separate POC Charter and Product Requirements** are authorized at Alpha Portfolio level — `B-008` option 2, a Charter-level act, not a sprint and not a version |
```

**C. Replace §6.1 in full with exactly:**

```markdown
### 6.1 Backlog path — moved to the living tier (`D-148`, corrects `D-147`)

**The version-exclusion procedure and each item's version reconsideration condition live in
`Modular_PRD.md` §2.5.1; capability identity lives in §2.5.2** — not here. `D-147` first named the
pattern in this document; `D-148` found the placement wrong: this file freezes at v1's sprint close
(`D-36`), and a repeatable procedure cannot be authored only in a document that will stop being
edited. **This section is kept as a pointer, not deleted**, so a reader who remembers it being here
finds where it went rather than a silent gap.

**The table above records what v1, specifically, excluded — accurately, and permanently, once
frozen.** That is the correct content for a tracking file: a dated snapshot. **V1's exclusions stay
V1's, and its reconsideration conditions expire with it.** A later version runs the same procedure
to produce its own `V*/NG-*` rows; nothing in this table confers feature readiness or build
authorization.
```

### §9.5 — Curated graph fragment and the relation-aware test (`B071-R109`, `R115`)

**The proven defect is narrow: `D-188` semantics are not retrievable.** A full link scan at
`13da259` returns **0** relation edges collapsing `PBL-04` into `S6`/`SEC-03`, and `PBL-04` has
**0** nodes. The single `D-188` match is a git-commit node (`129efab`'s message), degree 2 — not a
decision node. Absence is not a false edge, and this plan claims only absence.

**The fragment adds positive identities and relations** — `V1/NG-02`, `PBL-04`, `S6`/`SEC-03`,
`D-188` — with `V1/NG-02 --excludes--> PBL-04` and `PBL-04 --distinct_from--> S6/SEC-03`.
Fragments declare relationships under `edges`; `graph.json` stores them under `links`, so the merge
is `docs/graph-fragments/merge7.js`, never `graphify build --fragment` (`G51`).

**The test asserts relations by node ID and relation value, never by label keyword** — a
label-matching test fails legitimate `excludes` / `references` / `distinct_from` edges and passes
an invalid relation whose labels happen to differ. Test script, in full:

    node -e '
    const g=JSON.parse(require("fs").readFileSync(".graphify/graph.json","utf8"));
    const N=g.nodes||[], L=g.links||[];
    const ids=(re)=>N.filter(n=>re.test(String(n.label||n.name||n.id))).map(n=>n.id);
    const ng=ids(/^V1\/NG-02\b/), pbl=ids(/^PBL-04\b/), s6=ids(/\bSEC-03\b|\bS6\b/);
    const rel=(l)=>String(l.type||l.relation||l.rel||"").toLowerCase();
    const COLLAPSE=new Set(["alias","instance_of","same_as","equivalent_to","is_a","duplicate_of"]);
    const pos=L.some(l=>ng.includes(l.source)&&pbl.includes(l.target)&&rel(l)==="excludes");
    const bad=L.filter(l=>((pbl.includes(l.source)&&s6.includes(l.target))||(s6.includes(l.source)&&pbl.includes(l.target)))&&COLLAPSE.has(rel(l)));
    console.log("nodes  V1/NG-02:",ng.length," PBL-04:",pbl.length," S6/SEC-03:",s6.length);
    console.log("positive excludes edge:",pos?"PASS":"FAIL");
    console.log("collapse relations:",bad.length===0?"PASS (0)":"FAIL ("+bad.length+")");
    process.exit(pos&&bad.length===0?0:1);'

**Fixtures the test must satisfy (`NG-S6-SC19`):** the required `excludes` edge passes; an injected
`alias`/`instance_of`/`same_as` edge between `PBL-04` and `S6`/`SEC-03` fails; an unrelated
`references` edge between them does **not** fail.

### §9.6 — Execution sequence

**Preparation is not application.** Steps 1–2 are done in this plan; step 3 is the Judge's.

| # | Step | Done when |
|---:|---|---|
| **1** | Draft 3 written into this §9 and `B-071` — no governed tier touched | This section exists; Register, `Modular_PRD` and Build Spec are unchanged |
| **2** | Commit and push this plan-only revision; report local, upstream and GitHub separately | Upstream tip equals local `HEAD`, proven by `git fetch` then `rev-parse` — not by the push command's exit code |
| **3** | **Judge bounded acceptance** of the exact pushed write set | A durable Judge act naming this revision and the §9.1 write set exists. Until then `AUTH-DOC` is unapproved and `D-171` binds |
| **4** | Apply §9.1 (Register parent) | The notice is appended; `D-188`'s body and tier row are byte-identical to before |
| **5** | Apply §9.2, §9.3, §9.4 (derived children), parent-first | Every changed row and paragraph was present verbatim in §9; nothing improvised (`NG-S6-SC13`) |
| **6** | Update `B-071` and this plan exactly as approved. Lane A records `Applied`, never `Verified` | `B-071` carries `Applied` with the application commit; no `Verified-By` is written by Lane A |
| **7** | Verify exact paths; commit source **plus** the tracked curated fragment; **push, then fetch and prove upstream equals local** (`B071-R116`) | `git rev-list --count '@{upstream}..HEAD'` is `0` at the source revision, after a successful fetch |
| **8** | **At that proven-upstream revision only:** `npx graphify hook-rebuild` **first**, then `merge7.js` across all fragments, then the §9.5 test and the full suite | Rebuild precedes merge (`G51`); positive edge passes; collapse test passes; `bun run check` is green including `docs-drift` |
| **9** | Hand Lane B the exact pushed and analyzed revision | Lane B alone evaluates `NG-S6-SC1`–`SC20` and alone decides `Verified` |

### §9.7 — What is unclear, and what fails without this

**Unclear — nothing requiring a Judge Product choice.** `D-188` already separates `V1/NG-02`,
`PBL-04` and `S6`/`SEC-03`. Two items are genuinely open and are **not** blockers here: `NG-11`'s
legal/compliance policy owner (`D-188` "Gaps: Opened"), and `B-077`'s lifecycle children — a
**sibling** chain that must not be absorbed into this packet.

**Guaranteed to fail if this is not applied.** `V1-BUILD-SPEC.md` §6 keeps one capability in two
rows under two owners, so resolving `OD1`–`OD3` reads as making multi-team accounts ready and
reconsidering `V1/NG-02` reads as authorizing `S6`. The `D-145` variant keeps two editable homes and
diverges on readiness, rank or definition. A cross-version `NG-02` lookup joins the wrong version's
exclusion to a feature. `D-188` continues to supply false completion evidence for a propagation that
did not occur, so the next reviewer trusts it. And a `V1/NG-*` query returns nothing, so
`NG-LINK-SC8` cannot be demonstrated.

**How the success criteria are derived from those failures.** Each criterion is the negation of one
named failure, checked at an immutable revision: `NG-S6-SC1`–`SC8` (Round 12) from the propagation
failures; `SC9`–`SC14` (Round 13) from the lifecycle and evidence failures; `SC15`–`SC20` (Round 14)
from the historical-versus-standing, post-freeze, literal-text, provenance, relation-aware and
upstream-proof failures. **A criterion nothing can fail is not a criterion** — each names the
artifact read, the query run, and the observation that would refute it.

---

## §10 — Proposed `D-189`: V1 editorial boundary and the Chief Editor fallback (Draft 1; resolves `B071-R124`–`R136`)

> **Superseded by §11 below (2026-09-03).** Round 18 independent review found Draft 1 combines two
> mutually exclusive models under one identifier and rejected it as executable text (`B071-R137`).
> The Judge selected **Model A** and required a clause-level partial-supersession table. **This
> section is preserved unedited as historical record of what was proposed and reviewed** — per this
> project's own append-only convention (`D-36`, `G32`) — and is not itself proposed for application.
> Read §11 for the current draft.

**Independent of §1–§9.** This section drafts a **new** Register decision, `D-189` — it does not
touch `D-188`, and it does not touch any tier until a Judge act names it. `D-189` is a proposed
decision; nothing below is committed to `V1-DECISION-REGISTER.md`. `AUTH-DOC` remains unapproved
and `D-171` remains binding, unchanged, in full.

**Sequencing (`B071-R129`, `R118`).** `D-189`'s `V1/NG-12` row needs the canonical-ID-column
table shape that `D-188` Draft 4 (§9, still open at `R118`–`R123`) will establish. §10.2 below
gives `V1/NG-12`'s complete row content now, but its insertion instruction explicitly waits for §9
to land first. This section may be reviewed and Judge-accepted on its own timeline; only the one
table edit is order-dependent.

### §10.0 — Two findings this correction is built on, not merely informed by

Verification against the currently governed text surfaced two structural facts Round 16/17 did not
state, and `D-189` cannot be written correctly without them.

**`B071-R135` — `T6` is one label carrying two different objects, and the human-only gate Round
16/17 wants is already decided.** `D-175`–`D-181` (`raci-involvement-matrix.md` §3.1; `FN-GATES-
01-05.md` `EG5`; `V1-BUILD-SPEC.md` §S2's "Target DoD") already specify, in full: route-dependent
parallel virtual evidence acts (`T5`/`T5a`/`T5b`, `ROLE-CHIEF-EDITORIAL-DESK`/`ROLE-CHIEF-
JOURNALIST`, Line 1) sealed by a non-judgment join (`Drafted → Reviewed`), followed by
**`T6`, human-only, refused for any agent attempt** (`ROLE-CHIEF-EDITOR`, Line 2,
`Reviewed → Approved`). `V1-BUILD-SPEC.md` §S2 scopes an entire not-yet-authorized build unit,
**S2 Unit 2**, around exactly this: "owns T6 (`FR-05`, `AC-07`/`AC-08`), blind first pass, the
`T6→T5` return-rate log, and `EmergencyBypass`." **None of that is digital assurance or `EXT-GRC`.**
It is V1's own human-judgment-preservation machinery, already decided, independently reviewed twice
(`B-062`, `B-068`, both `Verified`), held only by `D-171`'s **build-authorization** hold — not
excluded, not undecided, not post-V1. `V1/NG-12`'s literal wording — "no digital T6 assurance
capability... in V1" — would, read against this target model, appear to exclude S2 Unit 2 along
with the future capability it does not name. **`NG-12` must exclude only the future object; the
already-decided human-only gate is not touched, renamed, or reopened by this decision.**

**`B071-R136` — the guarantee Round 16/17 states is true of the target order, not of the order
currently authorized to build.** `raci-involvement-matrix.md` §3 (current, build-authorized) puts
`T6 | Chief Journalist agent` as `R` for `Reviewed → Approved`, and `FN-GATES-01-05.md`'s `AC-07`
confirms it: *"A Chief Journalist agent executes T6 → State becomes Approved."* **This is the
present, live, build-authorized behavior** — a virtual agent executing the state transition that
makes an article eligible for publication is exactly the failure `B071-R131`/`R133` name. The
target order fixes it (human-only `T6`), but the target order is **held**, not built. `D-189` must
say which order its guarantee describes, everywhere it states the guarantee, or a reader will
believe V1 already prevents agent-executed approval when the currently-authorized order does not.
**This finding does not ask to narrow or lift `D-171`'s hold — that is a build-authorization act,
explicitly outside a documentation packet, and is named below as a separate open item for the
Judge, not decided here.**

### §10.1 — Proposed `D-189` decision text (literal; not applied)

```markdown
## 5.14e14 `D-189` — V1 Editorial Boundary: T1–T5 Only, Sole Human Chief Editor Fallback

**Chief Editor decision, 2026-09-03, raised as `B071-R124`–`R136`.** Records two Judge
clarifications as one decision, per `D-183`: (1) V1's product proof is the editorial `T1`–`T5`
sequence; digital `T6` assurance and `EXT-GRC` integration are a distinct, undecided future
capability, `PBL-01`. (2) V1 has one interactive human principal, the Chief Editor, who performs
the final editorial approval; the current virtual Chief Journalist role supplies evidence and does
not approve. **Authorizes no build, lifts no hold, ranks nothing.**

### The V1 editorial boundary

> V1 ends at the human Chief Editor's final editorial approval. A digital `T6` assurance capability
> and `EXT-GRC` integration are not decided, not built, and not V1 scope — living identity `PBL-01`.

**This is a derived exclusion, not a frozen-source claim.** `docs/PRD.md` requires one five-gate
pipeline, logged transitions, Chief approval and publication, and names no assurance/`EXT-GRC`
capability — but silence is not a Non-Goal. **This decision, not the frozen PRD, is `V1/NG-12`'s
source.** The frozen PRD and Charter are unchanged.

### `V1/NG-12` does not touch the already-decided human-only gate (`B071-R135`)

**`D-175`–`D-181` already decided a target order** in which the human Chief Editor's final decision
is the gate labelled `T6` — human-only, refused for any agent, `Reviewed → Approved`
(`raci-involvement-matrix.md` §3.1; `FN-GATES-01-05.md` `EG5`; `V1-BUILD-SPEC.md` §S2's Target
DoD, S2 Unit 2). **That decision stands, untouched, including its `D-171` build hold.**
`V1/NG-12` excludes a *different* object: a digital assurance capability with `assurance_status`
storage, external-authority evidence capture and `EXT-GRC` integration — none of which the target
order specifies. **Wherever this decision or its children write "no `T6` in V1," the sentence must
name the excluded object precisely** (digital assurance / `EXT-GRC`), never the gate label alone,
because the label is shared with a gate this decision does not exclude.

### Which order the fallback guarantee describes (`B071-R136`)

**The fallback guarantee below — no agent records the final editorial approval — is a property of
the *target* order, held under `D-171`.** The order currently authorized to build has a virtual
Chief Journalist agent executing the Approved transition (`raci-involvement-matrix.md` §3;
`FN-GATES-01-05.md` `AC-07`). **This decision does not narrow, lift, or otherwise act on `D-171`'s
hold.** Every derived statement of the fallback guarantee (Product stories/ACs, RACI, Fn-Specs,
Build Spec prose) must say explicitly that it describes the target order and remains inactive while
`D-171` binds — not that V1 already behaves this way. Whether to request a bounded build
authorization narrowing `D-171` for the target order's human-only gate specifically is a **separate,
later act**, requiring its own Judge decision; it is named here as open, not decided.

### The actor model (`B071-R130`–`R134`)

| Object | V1 meaning | Explicitly not |
|---|---|---|
| `USR-CHIEF-EDITOR` | The sole interactive human principal; records the final editorial approval once the target order is authorized | A virtual node; proof that authentication (`S6`) exists |
| `ROLE-CHIEF-JOURNALIST` | A virtual role producing a separately attributable evidence act at `T5`/`T5b` | A second V1 human account; any approval executor; a `T6` digital-assurance principal |
| Chief Editor fallback | The V1 mapping used because no separate human Chief Journalist access role exists | Impersonation, or an audit record claiming the Chief Journalist account acted |
| Future Chief Journalist human access | A post-V1 capability | `PBL-01`; `S6` itself; present V1 scope |
| `S6`/`SEC-03` | Authentication and access enforcement, separately authorized | Proof a Chief Journalist account exists; ownership of role creation |
| `PBL-01` | Future digital assurance / `EXT-GRC` evidence, unranked, not refinement-ready | The already-decided human-only `T6` gate (`B071-R135`) |
| `PBL-04` | Future multi-user/access capability, unranked | `S6` itself; `PBL-01` |

**Audit truth rule.** A transition record identifies the principal that actually acted. The PRD's
*"Chief Journalist approve"* sentence is satisfied through this documented V1 fallback mapping,
never through a record naming an account that did not act.

**Pre-`S6` identity is unchanged by this decision.** The sole Chief Editor interaction remains
`self_asserted`; this decision creates no login, account provisioning, or role-based access.

### `V1/NG-12` — proposed row (inserted after `D-188` Draft 4 lands; content only, order deferred)

| Canonical ID | ID | Non-Goal | Excludes | Rationale |
|---|---|---|---|---|
| `V1/NG-12` | `NG-12` | No digital `T6` assurance capability or `EXT-GRC` integration in V1 | `PBL-01` | Derived from this decision's 2026-09-03 Judge clarification; **not a claim of `docs/PRD.md`**. Excludes `assurance_status` storage, external-authority evidence capture and `EXT-GRC` integration only — **the already-decided human-only final editorial gate (`D-175`–`D-181`, target order, `D-171`-held) is not excluded and is not this row's subject** (`B071-R135`). No V1 reconsideration condition: later scope is decided through `PBL-01`, that version's own positive scope, and a separate bounded authorization |

**Write set.** `V1-DECISION-REGISTER.md` (this decision, new) · `Modular_PRD.md` §2.5 (`V1/NG-12`
row, after `D-188` Draft 4), personas/stories named in §10.2 · `docs/governance/requirements-
traceability-map.md` (`CR-12`/`CR-19` disclosure) · `FN-GATES-01-05.md`, `FN-PUBLICATION-09-10-
13.md`, `raci-involvement-matrix.md`, `V1-BUILD-SPEC.md` (disambiguation prose only — **no gate ID,
transition, or role is renamed**). Frozen `docs/PRD.md`, the Charter, `0001_init.sql`, `PBL-01`'s
§2.5.2 row, and every `D-175`–`D-181`/`D-171` mechanic are explicitly unaffected.

### Gaps

**Closed:** the T6-label collision between decided human-gate and undecided future capability
(`R135`); the current-vs-target guarantee gap (`R136`); actor/principal/role/persona aliasing
(`R130`); the fallback audit-truth rule (`R131`); future-access ownership (`R132`); the
publish-trigger risk (`R133`); `R127`'s propagation (`R134`). **Opened:** whether to request a
bounded authorization narrowing `D-171` for the target order's human-only gate — separate, later,
not decided here. **Unchanged:** `D-171`, `D-175`–`D-181`, `D-188`, frozen sources, `B-071`'s own
open defects.

### Tier applicability (`D-54`)

| Item | Register | Build spec | Product | Traceability | Fn-Specs/RACI | Phase closure |
|---|---|---|---|---|---|---|
| V1 T1–T5 boundary; `V1/NG-12 → PBL-01`; Chief Editor fallback; `T6`-label disambiguation | ✅ §5.14e14 | prose disambiguation only, S2/S3 mechanics unchanged | ✅ §2.5 (after `D-188` Draft 4), personas/stories | ✅ `CR-12`/`CR-19` disclosure | prose disambiguation only, no ID/role/transition renamed | — unaffected: no lane state or closure condition changes |

**Encyclopedia:** unaffected — no entry depends on T5/T6 actor assignment.

### Scope limits

**Records a V1 scope boundary and an actor fallback mapping. Builds nothing, lifts no hold, renames
no decided gate.** Frozen `docs/PRD.md`, the Charter and `0001_init.sql` are untouched. `D-171`
binds exactly as before. `B-071` is not closed.
```

### §10.2 — Product `Modular_PRD.md` · persona and story corrections

**A. `USR-CHIEF-EDITOR` row** (currently: *"Present. Current `T5`/target `T6` contract both held
pending `D-171`'s hold"*) — append, do not replace:

```markdown
**`V1/NG-12` (`D-189`) excludes only a future digital-assurance capability; it does not touch this
row's current/target `T5`/`T6` contract or `D-171`'s hold** (`B071-R135`). The Chief Editor is V1's
sole interactive human principal under both orders.
```

**B. `US-09`** (currently: *"Chief Journalist agent | As a Chief Journalist agent, I want approval
to trigger publication... so that approved work ships without manual re-entry"*) — replace in full:

```markdown
| `US-09` | Chief Editor | As the Chief Editor, I want my final editorial approval — informed by the Chief Journalist role's evidence brief — to be what makes an article eligible for publication, so that no virtual recommendation ships work on its own | P0 | FR-09 | AC-14, AC-15 | US-05 | S4 | Credentials absent → `MockPublished`, which does **not** satisfy Published. Partial failure across targets → **not representable today** (TC2). **Guarantee is target-order-scoped (`B071-R136`): while `D-171` holds, the currently-authorized order executes this transition via a Chief Journalist agent — this story describes the target, not present live behavior** |
```

### §10.3 — `docs/governance/requirements-traceability-map.md` · `CR-12`/`CR-19` disclosure

**Replace the `CR-12` coverage cell** (currently `Covered`) with:

```markdown
| `CR-12` | FR-09, FR-10, AC-14…AC-16 | Covered — **actor remap disclosed (`D-189`, `B071-R127`,
`R134`).** The customer's sentence names "Chief Journalist approve." V1's implementation is the
sole human Chief Editor's final approval, informed by the virtual Chief Journalist role's evidence
brief; the Chief Journalist does not itself approve. Frozen wording unchanged; this is an elaboration,
not a contradiction. Not yet routed through the sponsor feedback mechanism |
```

**Replace the `CR-19` coverage cell** similarly, appending: *"Actor remap disclosed per `CR-12`
above; 'Chief Journalist approves' in the Success Criteria sentence reads through the same V1
fallback mapping."*

### §10.4 — `FN-GATES-01-05.md` · flow diagram and `AC-05`–`AC-08` (closes `B068-F7`)

**This closes the already-tracked gap `B068-F7`** ("`FR-04`/`FR-05`/`AC-05`–`AC-08` restatement"),
using the direction Round 16/17 supplies, rather than leaving it open beside a new thread.

**A. Replace the flow-diagram line** `→ T6 Chief Journalist approval ← Line 2→1` with:

```markdown
  → T6 human-only Chief Editor final decision (target order, `D-171`-held) ← Line 2, refused for any agent
```

**B. `AC-05`–`AC-08` carry a target-order overlay note**, added immediately after `AC-08`'s row,
not replacing the current-order rows (`D-36`/`G32`: preserve, do not silently rewrite):

```markdown
**Target-order overlay (`D-175`–`D-181`, `D-189`; inactive while `D-171` holds).** `AC-05`–`AC-08`
above describe the **current, build-authorized** order. Once a fresh authorization selects the
target order, `T5`/`T5a`/`T5b`'s route-dependent virtual evidence acts seal without changing state;
the `T5_review_bundle_sealed` join performs `Drafted → Reviewed`; and `T6` — human-only, refused
for any agent attempt — performs `Reviewed → Approved` (`raci-involvement-matrix.md` §3.1). Neither
order includes a digital-assurance or `EXT-GRC` capability; that remains undecided future scope,
`PBL-01` (`V1/NG-12`, `D-189`).
```

### §10.5 — `raci-involvement-matrix.md` and `V1-BUILD-SPEC.md` · disambiguation only

**No ID, role, or transition is renamed in either file.** Add one sentence to
`raci-involvement-matrix.md` §8's `ROLE-CHIEF-EDITOR` row's gate-eligibility cell and to
`V1-BUILD-SPEC.md` §S2's "Target DoD" paragraph:

```markdown
`V1/NG-12` (`D-189`) excludes a future digital-assurance/`EXT-GRC` capability only; it does not
exclude, rename, or reopen this already-decided human-only gate.
```

### §10.6 — Execution sequence

| # | Step | Done when |
|---:|---|---|
| **1** | Draft 1 written into this §10 and `B-071` — no governed tier touched | This section exists; Register, `Modular_PRD`, traceability map, Fn-Specs, RACI and Build Spec are unchanged |
| **2** | Commit and push this plan-only revision; prove local/upstream/GitHub identity | Fetch-proven, not push-exit-code-proven |
| **3** | Independent Lane B review of this draft | Findings folded into a Draft 2 if any survive |
| **4** | **Judge bounded acceptance**, naming this revision and the exact write set | Until then `D-189` does not exist in the Register and `AUTH-DOC` is unapproved |
| **5** | Apply `D-189` (new Register entry) — parent | Decision text lands byte-identical to the accepted draft |
| **6** | Apply §10.2–§10.5 children, parent-first, **after `D-188` Draft 4 (§9) has landed** for the `V1/NG-12` row insertion specifically | Every changed row/paragraph was present verbatim in this draft |
| **7** | Update `B-071`. Lane A records `Applied`, never `Verified` | — |
| **8** | Commit source, push, fetch-prove | `git rev-list --count '@{upstream}..HEAD'` = 0 |
| **9** | Graphify: rebuild extracted layer first, then merge curated fragments, then verify | Only after step 8, at that exact revision |
| **10** | Hand Lane B the pushed/analyzed revision | Lane B alone decides `Verified` |

### §10.7 — What is unclear, guaranteed to fail, and the criteria derived from that

**Unclear — named for the Judge, not resolved here.** Whether to request a bounded authorization
narrowing `D-171` specifically for the target order's human-only `T6` gate, separate from the full
S2 target build (`B071-R136`). Nothing else requires a Product decision: `D-175`–`D-181` already
settled the human-only mechanic; this draft only prevents `V1/NG-12` from being misread against it.

**Guaranteed to fail if this is not applied.** `V1/NG-12`, read literally against `T6`'s existing
use, appears to exclude S2 Unit 2's already-decided human-only gate along with the future capability
it does not name — a reader can conclude the target order's four-eyes machinery is out of scope.
Separately, every sentence that states "no agent records the final approval" without naming which
order it describes will be read as a claim about the live system, when the currently-authorized
order's `AC-07` has an agent executing exactly that transition — the false-audit-evidence failure
`B071-R131` names, reintroduced by the documentation itself. And `US-09` continues to name a
"Chief Journalist agent" as the actor whose approval "trigger[s] publication," which is the
publish-without-human-judgment failure `B071-R133` names, in the very story `FR-09` traces to.

**Derivation.** Each new criterion below negates one of those two failures, checked by reading the
named artifact, not by re-deriving it from prose: `T5-V1-SC15`/`SC16` from the label collision;
`SC17`/`SC18` from the current-vs-target gap; `SC9`–`SC14` (Round 17) continue to apply unchanged.

| ID | Given | When | Then |
|---|---|---|---|
| `T5-V1-SC15` | `V1/NG-12` is read next to `D-175`–`D-181`'s target order | Its excluded object is checked | It names digital assurance/`EXT-GRC` only; the human-only `T6` gate and S2 Unit 2 are unaffected and uncited as excluded |
| `T5-V1-SC16` | Any Build Spec/RACI/Fn-Spec text is searched for `T6` | Each occurrence is classified | Every occurrence is either the already-decided human-only gate or explicitly the future `PBL-01` capability — never both at once, never ambiguous |
| `T5-V1-SC17` | The Chief Editor fallback guarantee is stated anywhere | The order it describes is checked | The text names the target order explicitly and states `D-171` still holds it; no sentence implies the guarantee is presently live |
| `T5-V1-SC18` | `US-09`/`AC-07` are read together | The publish-triggering actor is compared | `US-09` no longer names an agent as the story's actor; `AC-07`'s current-order behavior is disclosed as target-inactive wherever `US-09` is cited |


---

## §11 — Proposed `D-189` Draft 2: Model A, clause-level supersession (resolves `B071-R137`–`R144`)

> **Partially superseded by §13 (2026-09-04).** Round 27's Judge clarification rejects this
> section's core completion model: `T5-FINAL` as a labelled sub-act that "completes T5" is exactly
> the "sixth judgment gate" framing Round 27 excludes. **§11.3's supersession table, §11.4's
> `T5-FINAL` clause, and §11.8–§11.10's `T5-FINAL` relabeling are superseded** — see §13.2. **What
> survives:** §11.1's Model A direction (T1–T5 editorial, `T6` reserved for future `PBL-01`
> assurance) and §11.2's `Acting Chief Editor` terminology are both still correct and are carried
> forward unedited. **This section is preserved unedited as historical record**, per this project's
> own append-only convention (`D-36`, `G32`). Read §13 for the current draft.

**Independent of §1–§9.** Supersedes §10 as the proposal under review; §10 stands, unedited, as
history. Nothing below is committed to any governed tier. `D-171` remains binding, unnarrowed, in
full. `AUTH-DOC` remains unapproved.

### §11.1 — Parent choice: Model A (Judge-selected, 2026-09-03)

**The Judge approved `B071-R137` and selected Model A**, with a direct clarification carried
verbatim into this draft: *"final assurance judgement is at T6; Final editorial judgement is at
T5;"* T6 is *"proposed to a future backlog feature"* — confirming `PBL-01` as sole owner of the
label going forward. The Judge also directed that *"Chief Editor"* not be used as the in-app
executor name, because it conflates the software's reference to a role with the real person's
manual-workflow persona (the frozen PRD's "the user" — the business's actual Chief Editor, who
also works outside this app).

**Model A, stated once:** V1's editorial gate sequence is `T1`–`T5`; the human final act completes
`T5`; `T6` is reserved exclusively for the undecided future digital-assurance capability, `PBL-01`.
This requires `D-189` to partially supersede the `D-175`–`D-181` clauses that assigned the human
final act to the label `T6`. §11.3 is that table.

### §11.2 — Terminology: `Acting Chief Editor` (resolves the Judge's naming clarification)

**Not a new term — an existing one, propagated correctly.** `raci-involvement-matrix.md` §2
already defines it: *"Exactly one natural person, for the whole business. Delegable only through
the board-approved LOA window"* — and it is already the `A`/executor value for every task in both
the current and target RACI tables, T1–T11. It is a **requirements/accountability-role concept**,
already distinct in the project's own vocabulary from the frozen PRD's bare "Chief Editor" persona.

**Three tiers, kept distinct going forward:**

| Tier | Term | Meaning | Source |
|---|---|---|---|
| Real-world persona | **Chief Editor** | The customer's business role; may act manually outside this app | Frozen `docs/PRD.md` `CR-15`; Charter — untouched |
| In-app accountable role | **Acting Chief Editor** (`ROLE-CHIEF-EDITOR`) | The principal the software's transition/audit record actually names; exactly one natural person, delegable only through the board-approved LOA window | `raci-involvement-matrix.md` §2, §8 — already existing, now consistently applied |
| Virtual evidence role | **`ROLE-CHIEF-JOURNALIST`** | Supplies a `T5` evidence brief; never approves | `D-175`, unchanged |

**Every place this draft's predecessor (§10) wrote "Chief Editor" as the in-app executor or wrote
"Chief Editor fallback," this draft writes "Acting Chief Editor."** The frozen PRD's own "Chief
Editor" wording is not edited — the correction is in derived text only.

### §11.3 — Clause-level partial-supersession table for `D-175`–`D-181`

**Read individually — the five decisions are not equally affected.** `D-176` is unaffected in
full. `D-180`'s own text already forwards its "current T5/T6 anchor" status to `D-181`
(`D-181`'s own heading: *"Current T5/T6 Anchor Moves From `D-180`"*) — this draft reuses that
existing forwarding convention rather than touching `D-180`'s body. Only `D-175` and `D-181` carry
the clause this decision supersedes; `D-177` carries one incidental phrase needing a terminology
touch-up, not a substantive change.

| Source | Exact clause | Disposition under Model A |
|---|---|---|
| `D-175` §"The error, and what corrects it" | *"`T6` was always the destination for the human Chief Editor's final in-system judgment — `D-170`'s direction (human moves to `T6`, an agent-eligible role reviews at `T5`) was correct and is unchanged and not reopened."* | **Superseded.** This is reopened by `D-189` (`D-183` permits a later bounded Judge act to supersede an earlier one). The human final act moves from the label `T6` to `T5-FINAL` (§11.8). Everything else in this sentence's surrounding section — the two-role, route-dependent `T5` cardinality table, `ROUTE-PROD-1`'s `ROLE-DESK-EDITOR` authority, the Senior Journalist trigger rule, `Lane D`/`ENV-EXT` terminology — **survives unedited.** |
| `D-175` §"`D-171`/`D-172` re-derived," point 4 | *"Human-only canary: unchanged — still anchored to `T6`/`EG5`, the only Line-crossing transition."* | **Superseded in label only.** The canary mechanism — human-only, the sole Line-crossing transition, `EG5`'s node identity — is **unchanged**. Only its name changes: anchored to `T5-FINAL`/`EG5`. |
| `D-176` (§5.14e2, in full) | — | **Unaffected.** Route-operation applicability contains no `T6`-as-human-gate content. |
| `D-177` (§5.14e3) | *"...a post-reveal disposition-only change appends a new reasoned `T6` record without..."* | **Terminology touch-up only.** Replace `T6` with `T5-FINAL` in this one phrase. The `F6` behavior/acceptance contract and build-readiness boundary this decision adopted are otherwise **unaffected.** |
| `D-180` (§5.14e6, in full) | — | **Unaffected as a decision.** Its corrections (`AC-08a` re-owning, four missing target ACs, `G-05a`/`SEC-01a`/`SEC-03a` rows, the `T5a`/`T5b` split, `B-069`'s anchor notice) govern the evidence-gathering acts, not the final gate's label. Its own text already forwards "current T5/T6 anchor" status to `D-181` — this draft does not duplicate that forwarding. |
| `D-181` §"`B068-R55` — target `G-02` semantics added" | *"`Modular_PRD.md` gains `G-02a` ... only `T6` may be `satisfied`; `T1`–`T5` and Delivery are `not_applicable`."* | **Superseded in label only.** The semantics — exactly one gate reaches `satisfied`, everything else `not_applicable` — are **unchanged**. That one gate is now named `T5-FINAL`, not `T6`. |
| `D-181` §"`B068-R56` — T5 state-transition contradiction corrected" (in full) | — | **Unaffected.** Governs `T5`/`T5a`/`T5b`'s seal-only behavior and the join's sole `Drafted → Reviewed` transition — upstream of the final act this draft relabels. |

**Nothing in `D-170`–`D-174`'s own rulings is touched.** `D-175`'s correction of `D-170`'s alias
error stands; only `D-175`'s own restatement of *where* the human act sits is superseded.

### §11.4 — Proposed `D-189` decision text (literal; supersedes §10.1 in full)

```markdown
## 5.14e14 `D-189` — V1 Editorial Boundary: T1–T5 Only; Future Assurance Renamed `T5-FINAL`→`T6`

**Chief Editor decision, 2026-09-03, raised as `B071-R124`–`R144`; Model A selected over Model B
by direct Judge instruction (`D-183`).** Records: (1) V1's editorial gate sequence is `T1`–`T5`;
the human final act completes `T5`, under the label `T5-FINAL`. (2) A digital assurance capability
and `EXT-GRC` integration are undecided future scope, sole owner of the label `T6` going forward —
living identity `PBL-01`. (3) V1 has one interactive human principal, the **Acting Chief Editor**
(§11.2); the virtual `ROLE-CHIEF-JOURNALIST` supplies `T5` evidence and does not approve.
**Authorizes no build, lifts no hold, ranks nothing.** Partially supersedes `D-175`, `D-177` and
`D-181` per the clause table at `docs/v1/V1-B071-CORRECTIVE-PLAN.md` §11.3, reproduced here:

[The §11.3 table above is reproduced verbatim in the applied Register entry — not restated as a
second copy in this literal block, to avoid the duplication `G55`/`G56` name. The Register entry
transcribes §11.3 exactly, at application time, from the pushed revision the Judge accepted.]

### The V1 editorial-gate boundary, and what it does not shrink

> V1's editorial *gate sequence* ends at `T5-FINAL`, the Acting Chief Editor's final editorial
> judgment. **This is a gate-sequence boundary, not the V1 product boundary** (`B071-R139`).
> Publication and LinkedIn-ready handling — `T7`/`T10`/`T11` — remain required V1 scope, consuming
> `T5-FINAL`'s immutable disposition. `V1/NG-12` excludes digital assurance/`EXT-GRC`; it does not
> exclude, shorten, or otherwise touch Delivery.

**Derived, not frozen-source.** `docs/PRD.md` names no assurance/`EXT-GRC` capability, but silence
is not a Non-Goal. This decision, not PRD silence, is `V1/NG-12`'s source. Frozen PRD and Charter
are unchanged.

### Both gate orders remain held (`B071-R138`, correcting this draft's own predecessor)

**Neither the historical order nor the target order is presently authorized to build.**
`V1-BUILD-SPEC.md` §S2 states it directly: *"`D-164`/`D-165`'s S2 Unit 1/Unit 2 authorization is
held for BOTH orders — the current order below is no longer safe to build once a different order
was decided as target."* §10 of this plan (superseded) incorrectly called the historical order
"currently/live/build-authorized" because `AC-07` documents it. **`AC-07` is historical
documentation of a once-authorized, now-held order — not present build permission.** Neither order
may be cited as evidence of what may be built today; a fresh, separate authorization selects one,
per `B-068`'s own "Defer" rule.

### The actor model (`B071-R130`–`R134`, `R144`; terms per §11.2)

| Object | V1 meaning | Explicitly not |
|---|---|---|
| **Acting Chief Editor** | The sole interactive human principal; records `T5-FINAL` once a build authorization selects an order | The real-world "Chief Editor" persona name used as the in-app executor label; a virtual node; proof `S6` authentication exists |
| `ROLE-CHIEF-JOURNALIST` | A virtual role producing a separately attributable `T5`/`T5b` evidence act | A second V1 human account; any transition's executor; a `T6` assurance principal |
| **Requirements-interpretation mapping** (`B071-R144`) | The documented V1 reading that satisfies the PRD's "Chief Journalist approve" sentence through the Acting Chief Editor's act | Runtime failover, an account-selection branch, or any implication a Chief Journalist account exists to fail over from |
| Future Chief Journalist human access | A post-V1 capability | `PBL-01`; `S6` itself; present V1 scope |
| `S6`/`SEC-03` | Authentication and access enforcement, separately authorized | Proof a Chief Journalist account exists; role-creation ownership |
| `PBL-01` | Future digital assurance/`EXT-GRC`, unranked, not refinement-ready | `T5-FINAL` — the already-decided human-only gate this draft relabels, not excludes |
| `PBL-04` | Future multi-user/access capability, unranked | `S6`; `PBL-01` |

**Audit truth rule, unchanged from §10.** A transition record identifies the principal that
actually acted. Pre-`S6` identity is unchanged: `self_asserted`; this decision creates no login,
provisioning, or role-based access.

### `V1/NG-12` — proposed row (content unchanged from §10; insertion still waits on `D-188` Draft 4)

| Canonical ID | ID | Non-Goal | Excludes | Rationale |
|---|---|---|---|---|
| `V1/NG-12` | `NG-12` | No digital `T6` assurance capability or `EXT-GRC` integration in V1 | `PBL-01` | Derived from this decision's 2026-09-03 Judge clarification; not a claim of `docs/PRD.md`. Excludes `assurance_status` storage, external-authority evidence capture and `EXT-GRC` integration only — the human-only final editorial gate, relabelled `T5-FINAL` by this same decision, is not excluded and is not this row's subject. No V1 reconsideration condition: later scope is decided through `PBL-01`, that version's own positive scope, and a separate bounded authorization |

### Lifecycle state of this decision and everything it touches (`B071-R142`)

**Nothing below is `Closed`.** Every item this decision addresses is `Draft-addressed`: proposed in
text, not yet Judge-authorized, not yet applied to any tier, not yet independently verified. The
four states are distinct and each requires its own evidence:

| State | Evidence | Who may declare it |
|---|---|---|
| `Draft-addressed` | This text exists in a pushed plan revision | Lane A, on drafting |
| `Judge-authorized` | A bounded Judge act names the exact revision and write set | The Judge only |
| `Applied` | A commit lands the authorized text in the governed tier | Lane A, after authorization |
| `Independently verified` | A non-answering actor confirms the applied text at an existing commit | Lane B only |

### Write set and unaffected tiers (`B071-R143`)

`V1-DECISION-REGISTER.md` (new entry) · `Modular_PRD.md` §2.5 (`V1/NG-12` row, after `D-188`
Draft 4), personas/stories (§11.6) · `docs/governance/requirements-traceability-map.md` (§11.7) ·
`FN-GATES-01-05.md`, `FN-PUBLICATION-09-10-13.md` (§11.8–§11.9, literal) ·
`raci-involvement-matrix.md`, `V1-BUILD-SPEC.md` (§11.10, label only). **Explicitly unaffected:**
`V1-ARTIFACT-INVENTORY.md` — no repository file is created or retired by this decision;
`Modular_PRD.md` §8 — no sprint status changes and no tier opens; `V1-PHASE-CLOSURE.md` — no lane
state or closure condition changes; the Editorial Pipeline Encyclopedia — no entry depends on
`T5`/`T6` gate-label assignment. Frozen `docs/PRD.md`, the Charter, `0001_init.sql`, `PBL-01`'s
§2.5.2 row, and every `D-175`–`D-181` clause not named in §11.3 are explicitly unaffected.

### Scope limits

**Records a V1 scope boundary, an actor terminology correction, and a gate-label supersession.
Builds nothing, lifts no hold.** `D-171` binds exactly as before, over whichever order a future
authorization selects. `B-071` is not closed.
```

### §11.5 — What Lane A cites in this draft: the Judge's live clarification, verbatim

Per `D-183`, a direct real-time Judge instruction is valid authority, durably registered in the
next Register entry. The Judge's instruction this round is transcribed above without paraphrase
where it is normative (§11.1) and is the source for §11.2's "Acting Chief Editor" resolution and
§11.4's `T5-FINAL` relabeling — Lane A's own drafting choice for the exact replacement string,
offered for the next independent review to confirm or correct, consistent with how `B071-R99`'s
departure was handled: stated plainly, not silently assumed.

### §11.6 — Product `Modular_PRD.md` · corrections (revises §10.2 in full)

**A. `USR-CHIEF-EDITOR` row** — append, do not replace:

```markdown
**In-app executor references use "Acting Chief Editor" (`raci-involvement-matrix.md` §2), not
"Chief Editor," to avoid conflating this row's real-world persona with the software's own
accountable-role concept** (`D-189`, Judge naming clarification, 2026-09-03). `V1/NG-12` (`D-189`)
excludes only a future digital-assurance capability; it does not touch this row's current/target
`T5`/`T5-FINAL` contract or `D-171`'s hold, which binds both orders equally (`B071-R135`, `R138`).
```

**B. `US-09`** — replace in full (revises §10.2.B, adds the scope-boundary and held-state
disclosures `B071-R139`/`R141` require):

```markdown
| `US-09` | Acting Chief Editor | As the Acting Chief Editor, I want my final editorial judgment at `T5-FINAL` — informed by the Chief Journalist role's evidence brief — to be what makes an article eligible for publication, so that no virtual recommendation ships work on its own | P0 | FR-09 | AC-14, AC-15 | US-05 | S4 | Credentials absent → `MockPublished`, which does **not** satisfy Published. Partial failure across targets → **not representable today** (TC2). **Both the historical and target gate orders remain held under `D-171`** (`B071-R138`) — this story describes neither as presently build-authorized. **Publication (`T7`/`T10`/`T11`) remains required V1 scope after `T5-FINAL`** (`B071-R139`) — this story's completion is not V1's product boundary |
```

### §11.7 — Traceability `requirements-traceability-map.md` · `CR-12`/`CR-19` (revises §10.3)

**Replace the `CR-12` coverage cell** — `Covered` is withdrawn; the customer-named actor has not
yet returned from the sponsor route (`B071-R140`):

```markdown
| `CR-12` | FR-09, FR-10, AC-14…AC-16 | **Change request pending sponsor/customer disposition**
(`D-189`, `B071-R127`, `R140`). The customer's sentence names "Chief Journalist approve." V1's
proposed implementation is the Acting Chief Editor's final judgment at `T5-FINAL`, informed by the
virtual Chief Journalist role's evidence brief; the Chief Journalist does not itself approve. This
is a **disclosed project-side elaboration, not yet customer-accepted** — frozen wording and this
row's content hash are unchanged; the actor difference is not routed through the sponsor feedback
mechanism yet. Do not read this row as `Covered` until that route returns |
```

**Replace the `CR-19` coverage cell**'s affected clause identically: the "Chief Journalist
approves" segment of the Success Criteria sentence carries the same pending-disposition note; the
"zero bypasses"/sequence-independence content this row already tracked (`FB-02`) is unaffected and
not restated here.

### §11.8 — `FN-GATES-01-05.md` · relabel and overlay (revises §10.4)

**A. Flow-diagram line** — replace `→ T6 Chief Journalist approval ← Line 2→1` with:

```markdown
  → T5-FINAL: Acting Chief Editor human-only final decision (target order, `D-171`-held) ← Line 2, refused for any agent
```

**B. `AC-05`–`AC-08` target-order overlay** — replace §10.4.B's overlay note in full (the historical
rows `AC-05`–`AC-08` are still not edited — `D-36`/`G32`):

```markdown
**Target-order overlay (`D-175`, `D-181` as partially superseded by `D-189`; inactive while
`D-171` holds either order).** `AC-05`–`AC-08` above describe the **historical, `D-171`-held**
order — neither historical nor target is presently build-authorized (`B071-R138`). Once a fresh
authorization selects the target order: `T5`/`T5a`/`T5b`'s route-dependent virtual evidence acts
seal without changing state; the `T5_review_bundle_sealed` join performs `Drafted → Reviewed`; and
**`T5-FINAL`** — human-only, refused for any agent attempt, `EG5`, Line 2 — performs
`Reviewed → Approved` (`raci-involvement-matrix.md` §3.1, relabelled per `D-189`). Neither order
includes a digital-assurance or `EXT-GRC` capability; that remains undecided future scope, `PBL-01`
(`V1/NG-12`, `D-189`).
```

**C. `EG5`'s "Transition mapping" cell** — replace `T6` with `T5-FINAL`; the "Target executor role"
cell (`ROLE-CHIEF-EDITOR`) and "Lifecycle" cell (`decided_target_held`) are unchanged.

### §11.9 — `FN-PUBLICATION-09-10-13.md` · literal corrections (closes `B071-R141`'s missing edits)

**A. `US-09`** (line 43) — same replacement as §11.6.B, reproduced here so this file's write-set
entry is itself literal and complete:

```markdown
| `US-09` | Acting Chief Editor | final editorial judgment at `T5-FINAL`, informed by the Chief Journalist role's evidence brief, to make an article eligible for publication | no virtual recommendation ships work on its own |
```

**B. The T11 exposure sentence** (line 94) — replace *"the approval it records already passed T5
and T6"* with:

```markdown
the approval it records already passed `T5` and `T5-FINAL`
```

**C. The Delivery-consumption rule** (line 180) — replace *"Delivery consumes the approved,
immutable `T6` disposition"* with:

```markdown
Delivery consumes the approved, immutable `T5-FINAL` disposition
```

### §11.10 — `raci-involvement-matrix.md` and `V1-BUILD-SPEC.md` · label only, no mechanic change

**§3.1's target table:** the `T6` row's `Task` cell becomes `T5-FINAL`; every other cell (executor,
Line, `R`/`A`) is unchanged. **§8's `ROLE-CHIEF-EDITOR` row:** "Gate eligibility" cell becomes
`Current T5/target T5-FINAL`. **`V1-BUILD-SPEC.md` §S2's Target DoD paragraph:** replace each
`T6` occurrence describing the human-only gate with `T5-FINAL`; the surrounding mechanics
(blind order, scoped return/rerun, `external_trigger_record` separation) are unchanged. **`D-177`'s
one incidental phrase** (§11.3): `T6` → `T5-FINAL`.

### §11.11 — Execution sequence

Unchanged in shape from §10.6, restated because §10 is superseded: (1) this draft written, no
governed tier touched; (2) commit, push, fetch-prove; (3) independent Lane B re-review; (4) Judge
bounded acceptance naming this exact revision and write set; (5) apply `D-189` parent; (6) apply
§11.6–§11.10 children, parent-first, `V1/NG-12`'s row insertion still waiting on `D-188` Draft 4;
(7) update `B-071`, Lane A records `Applied` only; (8) commit, push, fetch-prove the source
transaction; (9) rebuild Graphify's extracted layer, then merge curated fragments, then verify, at
that exact revision; (10) hand Lane B the revision — only Lane B may record `Verified`.

### §11.12 — What remains unclear, guaranteed failures, and derived criteria

**Unclear — for the next review to confirm, not decided unilaterally.** The exact replacement
string `T5-FINAL` is Lane A's drafting choice, not a Judge instruction — the Judge named the model
(human act at T5, T6 reserved for future assurance) and the naming principle (not "Chief Editor"),
not this specific gate label. An equally valid alternative exists (e.g. folding the act into the
existing `T5` join rather than keeping it a separate node) and is not foreclosed if review prefers
it. Also unresolved, and explicitly not decided here: whether to request a bounded authorization
narrowing `D-171` for `T5-FINAL` specifically, separate from the full S2 target build — this
question is unchanged by the Model A/B choice and remains open.

**Guaranteed to fail if this draft is not applied.** `NG-12` continues to read as excluding the
already-decided four-eyes machinery it does not mean to touch (`R135`, now with the added risk that
Model A's relabeling, if left undone, orphans every "T6" reference in five governed/governance
files simultaneously). `US-09`/`AC-07` continue to name an agent as the publish-triggering actor in
the very story `FR-09` traces to. `CR-12` stays marked `Covered` while its own evidence says
customer acceptance is pending — a claim the traceability map's own rule contradicts. And a reader
comparing `V1-BUILD-SPEC.md` §S2 against this plan's superseded §10 finds "the current order is
build-authorized" beside "`D-164`/`D-165`'s authorization is held for BOTH orders" — the exact
self-contradiction `B071-R138` caught.

**Derivation.** `T5-V1-SC26`–`SC29` negate those four; `T5-V1-SC19`–`SC25` (Round 18) continue to
apply unchanged; `T5-V1-SC15`–`SC18` (this plan's own Round-17 response) continue to apply, updated
only to read `T5-FINAL` wherever they previously read the ambiguous shared `T6`.

| ID | Given | When | Then |
|---|---|---|---|
| `T5-V1-SC26` | `V1/NG-12` and `T5-FINAL` are both traced | Their subjects are compared | `NG-12` names only digital assurance/`EXT-GRC`; `T5-FINAL` names only the already-decided human-only gate; no sentence uses bare `T6` for the latter |
| `T5-V1-SC27` | `US-09` and its tracing `AC-07` are read together | The publish-triggering actor is checked | `US-09` names the Acting Chief Editor at `T5-FINAL`; `AC-07`'s current-order agent behavior is disclosed as `D-171`-held, not live |
| `T5-V1-SC28` | `CR-12`/`CR-19` are queried for coverage status | The status value is read | Neither reads bare `Covered`; both read `Change request pending sponsor/customer disposition` until the sponsor route returns |
| `T5-V1-SC29` | Any two of `V1-BUILD-SPEC.md`, `raci-involvement-matrix.md`, `FN-GATES-01-05.md`, this plan, and `B-071` are compared for gate-order authority | Their authority claims are checked | All agree: both orders are `D-171`-held; none claims either is presently build-authorized |


---

## §12 — Proposed `D-189` Draft 3, Part 1: narrow authentication + recovery (resolves `B071-R169`–`R181`)

> **Partially superseded by §13 (2026-09-04).** Round 27's Judge clarification removes
> multi-account succession as a V1 prerequisite: *"This answers Round 26's scope concern
> sufficiently to stop treating multi-account succession as a V1 prerequisite."* **§12.4's atomic
> succession transaction, §12.1–§12.3's business-owner control principal/replacement-account
> machinery, and every `SC63`–`SC69`/`SC71`–`SC75` test scoped to succession are superseded** —
> moved to a future `PBL-04` candidate, see §13.4. **What survives:** the identity distinctions in
> §12.2 (`executor_principal_key` is agent-only; base role alone grants no authority) remain correct
> for a single-account V1 and are carried forward, narrowed. Round 25's independent-review findings
> (`R182`–`R186`) are correctly narrowed by Round 27 itself — see §13.3, not restated here.
> **This section is preserved unedited as historical record.** Read §13 for the current draft.

**Independent of §1–§9.** Extends §11 (Draft 2) rather than superseding it wholesale — see §12.0's
scope statement. Nothing below is committed to any governed tier. `D-171` remains binding,
unnarrowed. `AUTH-DOC` remains unapproved.

### §12.0 — Scope of this draft: Part 1 only

**Rounds 19–24 raised thirty-six findings, `B071-R145`–`R180`, across two genuinely separable
concerns.** Round 19's own Parent 2 already distinguished them: *"T5 stage completion"* (how many
acts complete the editorial gate, and their exact event/state contract) from the account/identity
layer this draft addresses. Verification confirms the separation holds: nothing in Rounds 22–24's
authentication and recovery content depends on resolving `T5-FINAL`'s internal stage mechanics —
the account layer governs **who may act**; the stage layer governs **what completes `T5`**.

**This draft (Part 1) resolves `B071-R169`–`R180`** (Round 22's authentication boundary, Round 23's
selected Model A, Round 24's recovery flow) **and adds one new finding, `B071-R181`**, found during
verification. **It does not resolve `B071-R145`–`R168`** (Round 19's nested-stage contract, complete
occurrence ledger, higher-precedence-source propagation, and Round 20–21's original identity-model
draft that Round 21 itself partly superseded). Writing both in one pass, given their combined size
and this project's own repeated finding that rushed drafts contain placeholders and improvised text
(`R141`, `R149`), would risk the same defect at twice the scale. **Part 2 remains open, separately,
for a later turn** — named here, not restated.

### §12.1 — New finding: the existing `S5`/LOA mechanism is never reconciled (`B071-R181`)

**`docs/journal/2026-08-16-entry007-decision-sheet.md` §2, row `S5`** — already `Accepted`, part of
the governing set — reads in full: *"Acting Chief Editor via board-approved LOA window, full Line 2
authority for that window, **auto-reverts**"* — *"Succession coverage for Chief Editor absence."*
`raci-involvement-matrix.md` §2 and `Modular_PRD.md`'s `RK-02` risk row both cite it as the existing
mitigation for *"Chief Editor unavailable."*

**This is a different mechanism from Round 24's recovery flow, addressing a different failure
mode, and Round 24 never says so:**

| | `S5`/LOA (existing, accepted) | Round 24's recovery flow (this draft) |
|---|---|---|
| Failure addressed | Temporary absence — the account and its holder are fine, just unavailable | Lost/compromised login — the account itself must be replaced |
| Duration | Windowed; **auto-reverts** when the window ends | Permanent; the former account is **permanently disabled**, never reactivated |
| Account/email | None created; same account, same email, delegated authority only | A genuinely new account with a different verified email |
| Authorizer | *"Board-approved"* — an unspecified governance act, per window | The `owner_control_principal_id` — a proposed, undefined identity |

**Both use the label "Acting Chief Editor."** Round 21–23 defined `Acting Chief Editor` as a
**singleton** time-bounded assignment held by exactly one account. If `S5`'s LOA-window delegate
also becomes "Acting Chief Editor" while the original account's assignment has not ended, two
questions are open that no round has asked: does invoking `S5` end the original assignment and open
a second, temporary one on a **different** account (satisfying the singleton rule), or does the
delegate act **through** the original account/assignment under a separately recorded permission
(preserving singleton by not creating a second assignment at all)? Either answer is coherent; Round
24's text is silent, and the two mechanisms' authorizer field — *"board-approved"* here, an
unspecified `owner_control_principal_id` there — is not shown to be the same actor.

**This is not decided in this draft.** §12.8 states it as an open item for the Judge, per this
project's own convention of flagging structural questions rather than inventing an answer to them.
Round 24's flow is drafted below exactly as specified — a **permanent** replacement path — with an
explicit note that it does not define, modify, or supersede `S5`.

### §12.2 — The identity model, current as of Round 24 (supersedes §11.4's actor table)

**Nine objects, not seven — Round 24 adds two.** This table is the corrected, complete replacement
for §11.4's actor-model table, folding in Round 21's `executor_principal_key` correction (`R163`)
and Round 24's control-principal addition:

| Object | Meaning | Used by | Must not substitute for |
|---|---|---|---|
| **Chief Editor** | Business persona/display label, frozen PRD | UI display only | Account ID, permission, or audit identity |
| **`ROLE-CHIEF-EDITOR`** | Base account role definition | Role catalog | Current authority — base role alone grants nothing (`R174`) |
| **Chief Editor application account** | V1 interactive account linked to `ROLE-CHIEF-EDITOR` | Human access, human-event attribution | Acting assignment, RACI `A`, `executor_principal_key`, or control authority |
| **Acting Chief Editor assignment** | Time-bounded, singleton accountability involvement naming the one current account | Resolves RACI `A`; enables `T5-FINAL` | A second permanent role, a person label, or an agent principal |
| **`executor_principal_key`** | Stable identity of the virtual agent executing an agent task | T1–T5 virtual-node evidence, agent-separation tests | Any human identity — account, control principal, or display name (`R163`) |
| **`agent_attempt_badge_id`** | One attempt/run, linked to one `executor_principal_key` | Attempt-level audit | Stable agent identity or any human identity |
| **Business-owner control principal** (`owner_control_principal_id`) | Stable authenticated identity in the account-control plane | Create a pending replacement account, bind its verified email, initiate atomic succession | `T5-FINAL`, evidence edits, agent impersonation, or history rewriting (`R178`) |
| **Control email** | Login/recovery locator for the control principal | Authenticates the control plane | Application identity or historical actor key |
| **Application login email** | Verified locator bound to one application account | Application sign-in only | Account identity — the account UUID, never the email, is what evidence cites (`R176`) |

**The same natural person may hold the control principal and an application account, but the two
identities must not share a credential** (`R175`) — a lost/disabled application login must not be
the thing recovery depends on, or recovery is circular in exactly the case it exists to handle.

### §12.3 — Proposed `D-189` clause text (literal; appends to §11.4's decision block)

```markdown
### V1 narrow Chief Editor authentication and recovery exception (`B071-R169`–`R181`)

**V1 shall authenticate the one currently enabled Chief Editor account for the Acting-Chief-Editor
assignment and shall require that authenticated account for the human `T5-FINAL` action.** A
replacement Chief Editor account may be created only as `pending_activation`; it cannot log in or
execute `T5-FINAL` until one atomic succession transaction permanently disables the former account,
ends the former Acting assignment, activates the replacement account and starts the replacement
Acting assignment. Exactly one account and one matching Acting assignment are operative at all
times. Historical records retain the original account and assignment references.

**This narrow exception does not authorize:** multi-team accounts, client accounts, general role
administration, full `S6`/scoped-RLS completion, authentication for virtual agents, or any `T6`
assurance feature.

**What it narrows, named explicitly:**
- the demo-first/no-login rule is retained for the public/read-only product surface (`CLAUDE.md`),
  and narrowed only for Chief Editor sign-in, account-succession controls, and the state-changing
  `T5-FINAL` action;
- `SEC-03`/`S6` remains the owner of general authentication and scoped access control; its smallest
  Chief-Editor/`T5-FINAL` slice moves into the V1 editorial proof;
- `NG-02` still excludes multi-team operation. Pending and permanently disabled succession records
  are not simultaneously operative accounts;
- the frozen PRD's "single Chief Editor account" is interpreted as one **enabled/operative**
  account; pending and disabled records exist solely for succession and history. This
  interpretation is recorded through the existing customer/frozen-source traceability route, not by
  editing the frozen text.

**Recovery: an independent business-owner control principal, separate from the application
account it recovers.** A `Chief Editor business owner` may authenticate to an independent
account-control plane, using credentials that do not depend on the application account it may need
to replace. That control principal may: create a replacement Chief Editor account in
`pending_activation`; bind a new, different verified email to it (never the disabled account's old
email); and initiate the same atomic succession transaction. The control principal **may not**
execute `T5-FINAL`, edit editorial evidence, impersonate an agent, or otherwise act as the
application account. The old account's email binding is retained, historical, and never reused or
transferred to the new account's evidence trail.

**Not defined or modified by this clause:** `docs/journal/2026-08-16-entry007-decision-sheet.md`
row `S5`'s existing board-approved LOA succession-coverage window remains as accepted, unedited by
this draft. Its relationship to the Acting-Chief-Editor singleton — whether an LOA-window delegate
opens a second temporary assignment on a different account or acts through the existing one — is an
open question (`B071-R181`), not decided here.

**Authorization ownership:** proposed `D-189` decides this scope; `AUTH-DOC` applies the accepted
documentation packet parent-first; `AUTH-F1` is the later authorization for the current T1–T5
editorial proof, of which this identity control is a prerequisite. No new `AUTH-*` checkpoint is
created. `D-171` continues to hold all implementation.
```

### §12.4 — Atomic succession transaction (literal; Round 21–24's contract, corrected)

```text
1. Business owner authenticates to the independent account-control plane
   (owner_control_principal_id — a credential distinct from any application account).
2. Business owner supplies a new, different verified email; the provider verifies it.
3. System creates a new Chief Editor account: status = pending_activation,
   base role = ROLE-CHIEF-EDITOR, no login or T5-FINAL authority.
4. System validates exactly one current Acting-Chief-Editor assignment exists.
5. Business owner records old/new account identities and a reason.
6. Atomic switch (all-or-nothing, rollback on any failure):
     - close the old Acting-Chief-Editor assignment
     - set the old account status = permanently_disabled
     - open the new Acting-Chief-Editor assignment
     - set the new account status = active
7. Append one control event: control principal, old/new account IDs, old/new assignment IDs,
   old/new verified-email references, timestamp, reason, outcome.

Postcondition, always: exactly one active Chief Editor account; exactly one current
Acting-Chief-Editor assignment; both identify the same account. A terminally disabled account is
never reactivated — a future return requires a new account and a new assignment.
```

**Historical attribution is unaffected.** Past `T5-FINAL` events retain the account, assignment,
and display-name/job-title snapshot that were effective when each event occurred; the current
holder is never substituted into a former holder's decision. `executor_principal_key` remains
agent-only throughout — no step above touches it.

### §12.5 — Three separate authorization predicates (literal)

```text
Control-plane action:
  authenticated owner_control_principal_id
  AND action ∈ {create_pending_account, bind_verified_email, initiate_atomic_succession}
  → all other actions refused, including T5-FINAL, evidence edit, agent-task execution

Human T5-FINAL:
  authenticated Chief Editor application account
  AND account.status = active
  AND account.id = current Acting-Chief-Editor assignment's account_id
  → base ROLE-CHIEF-EDITOR alone is insufficient; pending/disabled accounts are refused

Virtual-agent task:
  executor_principal_key + agent_attempt_badge_id + role/node
  → never satisfies either predicate above; never accepted as human identity
```

**No identifier or session satisfies more than one predicate.** The business owner cannot bypass
the application-account switch and execute `T5-FINAL` from the control plane (`R178`).

### §12.6 — Lifecycle state (unchanged rule from §11.4, restated for this content)

**Nothing in `R169`–`R181` is `Closed`.** Every item is `Draft-addressed`: the Judge supplied the
policy (Model A selection, former-account disposition, recovery-authority shape); Lane A has now
drafted literal text; neither is `Applied` (no commit exists) nor `Independently verified` (Lane B
has not confirmed an applied commit). The four-state table from §11.4 governs unchanged.

### §12.7 — Write set and unaffected tiers (extends §11.4's list)

**Added to the existing write set:** the account/security requirement rows this clause implies in
`Modular_PRD.md` (Product-level, not yet drafted — literal text is Part 2/a later pass, since it
depends on Part 2's occurrence-ledger method to avoid the exact improvisation `R141` found), and one
new customer-traceability row interpreting "one Chief Editor account" per §12.3's clause. **No
physical schema, auth-provider configuration, or application code is authorized or proposed by this
draft** — `owner_control_principal_id` and every field named above are **logical** field proposals
only, per Round 21–24's own repeated instruction. **Still explicitly unaffected:** frozen
`docs/PRD.md`, the Charter, `0001_init.sql`, `S5`'s Entry 007 row (§12.1), `PBL-01`, `V1-ARTIFACT-
INVENTORY.md` (no file created), `Modular_PRD.md` §8, `V1-PHASE-CLOSURE.md`, the Encyclopedia.

### §12.8 — What remains open, stated once

1. **`B071-R181`** — `S5`'s relationship to the Acting-Chief-Editor singleton: separate temporary
   assignment on a different account, or delegated action through the existing one. Not decided.
2. **`B071-R180`** — loss of the control principal itself, or a business-ownership transfer. Named
   by Round 24 as a separate, future business-continuity decision; not addressed here.
3. **`B071-R145`–`R168`** (Part 2) — the T5 nested-stage contract, complete occurrence ledger,
   higher-precedence-source propagation (Addendum/Blueprint/Business Case), and the corrected
   supersession table extending §11.3. Not drafted in this turn.
4. **The exact `T5-FINAL` identifier** (§11's own open item) — still Lane A's proposal, not a Judge
   instruction, unresolved by anything in this draft.

### §12.9 — Success criteria (Round 22–24's `SC55`–`SC69`, plus one for the new finding)

`T5-V1-SC55`–`SC62` (Round 22–23) and `SC63`–`SC69` (Round 24) continue to apply, restated nowhere
here to avoid the exact duplication this project's own `G55`/`G56` name — read them at their
originating rounds. One criterion is added for `B071-R181`:

| ID | Given | When | Then |
|---|---|---|---|
| `T5-V1-SC70` | An `S5` LOA-window delegation and a Round-24 permanent succession are both traced | Their effect on the Acting-Chief-Editor singleton is compared | Exactly one of two stated resolutions holds consistently across both mechanisms — a second temporary assignment on a different account, or action through the existing one — and this draft names which the Judge selected, not which Lane A assumed |

### §12.10 — Execution sequence

Unchanged in shape from §11.11: (1) this draft written, no governed tier touched; (2) commit, push,
fetch-prove; (3) independent Lane B re-review — of Part 1 only, since Part 2 does not yet exist to
review; (4) Judge bounded acceptance naming this exact revision and write set, including a ruling
on `B071-R181`; (5)–(10) unchanged from §11.11.


---

## §13 — Proposed `D-189` Draft 4: single-account V1, gate/workflow separation (resolves `B071-R182`–`R186` as narrowed by Round 27)

> **Partially superseded by §14 (2026-09-04); heading claim corrected.** Round 28 found this
> section **addresses** rather than resolves `R182`–`R186` — `R183` remains open — and this heading
> is corrected accordingly by §14.7 rather than edited here. **Three specific errors are corrected
> in §14, not rewritten here:** §13.2's claim that the bundle join *fully completes* `T5`
> (Round 29: it does not — `T5-FINAL` is the mandatory human judgment inside `T5`); §13.2's
> treatment of `satisfied` as a "`T6`-labelled state" whose control is superseded because there is
> no gate six (`satisfied` is a value of `workflow_transitions.line_separation_status`, an
> independence metric, not gate completion — `R183`); and §13.7's retirement of `SC71`–`SC75` as
> succession tests when `SC71`/`SC72`/`SC75` test source accuracy, application completeness and
> truthful status (`R186`). **What survives:** §13.1's single-account scope, §13.4's `PBL-04`
> candidate, §13.3's `R182` and Encyclopedia corrections. **Preserved unedited as historical
> record.** Read §14 for the current draft.

**Independent of §1–§9.** Supersedes §11's gate-completion model and §12's succession machinery —
see the notices at their headings. Preserves §11.1–§11.2 (Model A direction, `Acting Chief Editor`
terminology) unedited. Nothing below is committed to any governed tier. `D-171` remains binding,
unnarrowed. `AUTH-DOC` remains unapproved.

### §13.0 — What Round 27 decided, and what it left for drafting

**Decided, restated exactly:**
1. V1 links **one** email account to the sole Chief Editor/current authorized holder. Email
   management is external to my-editorial-app. Multi-account tracking and its progressive build
   are future backlog, not a V1 prerequisite.
2. `T1`–`T5` are editorial judgment gates. Virtual-node agents perform work within that flow; task
   execution is not a separate definition of the gate or evidence of human approval.
3. The editorial flow **completes at `T5`** and presents its output through the UI. The human's
   subsequent publication approval is a **workflow action, not an additional judgment gate**.
   Historical "`T6` approval" must not become a sixth gate or the deferred `T6` assurance feature.

**Left explicitly for Lane A drafting, not yet decided:** *"The exact name of the post-`T5`
approval event and its mapping to article/publication states remain Lane A drafting work for
review, not a reason to add a sixth judgment gate."* §13.2 proposes one; it is a drafting choice,
flagged for confirmation, exactly as `T5-FINAL` was flagged and is now withdrawn.

### §13.1 — What this narrows from §11/§12, named once

| Withdrawn from V1 scope | Moved to |
|---|---|
| `T5-FINAL` as a labelled sub-act that completes `T5` (§11.4, §11.8–§11.10) | Not renamed — removed. `T5` completes via its own existing (held target) mechanism; see §13.2 |
| Business-owner control principal, replacement-account machinery, atomic succession transaction (§12.1–§12.4) | Future `PBL-04` candidate increment (§13.4) |
| `owner_control_principal_id`, control-plane authorization predicate (§12.5) | Same — `PBL-04`, not V1 |
| Succession-specific success criteria `SC63`–`SC69`, `SC71`–`SC75` | Applicability review only — not deleted, not V1-operative (`B071-R186`) |

**What survives unedited:** §11.1's Model A direction (`T1`–`T5` editorial; `T6` reserved for
future `PBL-01`); §11.2's `Acting Chief Editor` terminology; §12.2's agent/human identity
distinction (`executor_principal_key` is agent-only) and §12.5's "base role alone is insufficient"
authorization principle — both still true for a single account, since even one account still needs
"is this the authorized account" checked, not merely "does a request carry the base role."

### §13.2 — The gate/workflow separation, drafted (proposed event name flagged)

**`T5`'s gate completion is unchanged from the already-decided target model** (`D-181`, `B068-R56`;
`raci-involvement-matrix.md` §3.1): route-dependent virtual evidence acts (`T5`/`T5a`/`T5b`) sealed
by the non-judgment `T5_review_bundle_sealed` join, which alone performs `Drafted → Reviewed`. This
is what "T1–T5 are editorial judgment gates... completes at T5" means — gate completion needs no
human act. `D-181`'s `G-02a` ("only `T6` may be `satisfied`") is **superseded in subject**: under
Round 27, no gate reaches a `T6`-labelled `satisfied` state at all, because there is no gate six.

**The human's action is a workflow step, structurally outside the `T`-gate numbering.** Proposed
literal name — **`EDITORIAL_DISPOSITION`** — Lane A's drafting choice, not a Judge instruction,
offered for the next review to confirm or correct:

```text
T1–T4 judgment gates (existing, unedited)
  -> T5 judgment gate
       T5-REVIEW act(s): route-dependent virtual evidence (T5/T5a/T5b)
       T5_review_bundle_sealed: non-judgment join
         workflow_state: Drafted -> Reviewed
       [T5 is now COMPLETE. Not a "sixth gate." No T5-FINAL, no T6.]

UI presentation (system)
  -> displays the completed T5 packet and publication controls
  -> rendering the screen approves nothing

EDITORIAL_DISPOSITION (workflow action, not a judgment gate)
  -> performer: the sole Chief Editor, via the one linked account
  -> approve: workflow_state Reviewed -> Approved
  -> do not approve: workflow_state Reviewed -> Rejected, or governed return
  -> records who/when/why/evidence-reference (FR-07/NFR-02/NFR-08, unchanged)

Publication/report outcome (existing, unedited)
  -> T7/T10/T11 consumes the immutable EDITORIAL_DISPOSITION result
  -> Approved is not Published or proof of delivery

Future T6 assurance
  -> PBL-01 only; absent, not applicable, not activated by this workflow
```

**Why this satisfies Round 27's own storyboard table (its five rows map onto the five blocks
above) without inventing a sixth `T`-numbered gate:** `EDITORIAL_DISPOSITION` carries no `EG*` node
ID, no Line-crossing four-eyes claim of its own, and no gate-count increment — it is a named
workflow event, the same class of thing `T7`/`T10`/`T11` already are (`raci-involvement-matrix.md`
§3 lists `T7`/`T10` as `System`-executed workflow steps, not gates in the `EG1`–`EG5` sense).

**What this does not decide.** Whether `EDITORIAL_DISPOSITION` needs its own RACI row, whether it
is Line 1 or Line 2, and whether it is the same event `AC-05`–`AC-08` describe under a new name or
a genuinely new event — these are Part 2 questions (`B071-R145`–`R168`'s occurrence ledger), not
answered here to avoid the exact improvisation this project's review has repeatedly caught.

### §13.3 — `B071-R182`–`R186`, narrowed per Round 25 and Round 27 together

| Finding | Round 25's correction | Round 27's further narrowing | This draft's disposition |
|---|---|---|---|
| `R182` | §12.1 invented Entry007/`S5`'s account/email mechanism — it specifies neither | §12.1–§12.4 also went beyond one linked account into succession/control-plane machinery that V1 no longer needs | Both corrected: §13's replacement text states `S5`'s mechanism as unspecified (not "same account, same email") and removes the succession machinery entirely, per §13.1 |
| `R183` | Drafting independence (Part 1/Part 2 split) is not application readiness | Product `US-04a`/`US-05a`/`US-09`, `FR-04a`/`FR-05a`, `SEC-03a`, and historical storyboard `A5`/`A6`/`B3`–`B6` carry differing human/agent `T5`/`T6` meanings; one owning contract must separate gate completion, agent evidence, human UI approval, and publication result | Not resolved here — this is Part 2's occurrence-ledger work (`R145`–`R168`), now with `EDITORIAL_DISPOSITION`'s literal text as its target, named explicitly rather than left implicit |
| `R183` — Encyclopedia extension | — | Blanket "unaffected" is unsupported: `ENCYCLOPEDIA-SYNC.md` maps Entry 01 to `FN-GATES-01-05.md` §3.4/`raci-involvement-matrix.md` §2,§4; Entry 04 to `FN-PUBLICATION-09-10-13.md` §3.3.2; Entry 05 to `raci-involvement-matrix.md` §2.1/§6.1 and `Modular_PRD.md` §4/§5/§6.5/§9/§10 | **Confirmed by direct read of `ENCYCLOPEDIA-SYNC.md`.** §11.4's and §12.7's "Encyclopedia: unaffected" claims are withdrawn. Entries 01, 04 and 05 are marked **impact-review candidates** in §13.6 — not edited; the external artifact is not fetched or republished here (`D-93`'s read-in-full rule; this is a distinct, later, opt-in act) |
| `R184` | Successful succession and its audit event were two non-atomic writes | The succession transaction itself is now out of V1 scope; `FR-07`/`NFR-02` still require attributable editorial transitions | Succession-specific atomicity tests move to `PBL-04` with §13.4. `EDITORIAL_DISPOSITION`'s own who/when/why/evidence write remains a single, existing, unedited requirement — no new transaction is invented |
| `R185` | Authorization predicates lacked explicit trust/revocation tests | One account removes the need for role switching, not the human/agent/label distinction | Single-account V1 needs exactly one predicate: authenticated linked account = the one Chief Editor account. `PBL-04`'s future increments (§13.4c) inherit `R185`'s trust/revocation tests when that scope is built |
| `R186` | Lifecycle references were inconsistent (all "`Draft-addressed`" while `R180`/`R181` were unresolved; `SC62` wrongly said to "continue to apply" though Round 23 superseded it as a positive criterion) | Several former succession criteria now have a different scope entirely, not merely an inconsistency to fix | **Both corrected.** `SC62` stays historical, never restated as operative (nowhere in §13 is it cited as applying). Every item below is `Draft-addressed`, explicitly, with `R181` and `R180` still separately open (§13.5) |

### §13.4 — Future `PBL-04` candidate, dependency order only (not ranked, not authorized)

**`PBL-04`'s canonical label remains "Multi-team accounts"** (`Modular_PRD.md` §2.5.2) — this
proposal is drafted as an **inclusion** within that existing identity, not a rename or a new
backlog ID, and not merged with `PBL-01`, `PBL-02`, or `PBL-09` (email/Slack notifications is not
mailbox management):

| Increment | Content | Depends on |
|---|---|---|
| **(a)** | User/account and permission boundaries | Nothing beyond current `PBL-04` scope |
| **(b)** | Controlled current-holder switching, with assignment history and session revocation | (a) |
| **(c)** | Temporary delegation/recovery edge cases — where §12's withdrawn control-principal/atomic-succession content, and `B071-R181`'s `S5`/LOA reconciliation, would resurface if this candidate is ever promoted | (a), (b) |

**This is dependency order, not an approved sprint schedule, numerical priority, or promotion
above any other backlog item.** V1's completion neither deletes nor authorizes this candidate.
`R184`/`R185`'s transaction-atomicity and trust/revocation tests are preserved here, not discarded,
for whenever this scope is actually built under its own separate authorization.

### §13.5 — What remains open, stated once (extends §12.8, corrected)

1. **`EDITORIAL_DISPOSITION`'s exact name and event shape** (§13.2) — Lane A's proposal, not a
   Judge instruction.
2. **`B071-R181`** — `S5`'s relationship to a future `PBL-04`-scoped succession model. Deferred
   further by this draft, since succession itself is no longer V1 scope; the question moves to
   §13.4(c) rather than being resolved now.
3. **`B071-R180`** — loss of a future control principal, or business-ownership transfer. Remains a
   separate, later business-continuity decision, now clearly attached to `PBL-04`'s scope rather
   than V1's.
4. **`B071-R145`–`R168`** (Part 2, unchanged from §12.0) — the complete occurrence ledger and
   higher-precedence-source propagation. Not drafted in this turn. `EDITORIAL_DISPOSITION` is its
   literal target once written.
5. **Encyclopedia Entries 01, 04, 05** — impact-review candidates (§13.3), not read or updated in
   this turn.

### §13.6 — Write set and unaffected tiers (supersedes §11.4/§12.7's lists)

**Unchanged tiers from §11.4:** `V1-DECISION-REGISTER.md` (new entry), `Modular_PRD.md` §2.5
(`V1/NG-12` row, still after `D-188` Draft 4), `requirements-traceability-map.md`,
`raci-involvement-matrix.md`, `V1-BUILD-SPEC.md` — **content narrowed per §13.1–§13.2, not
expanded.** **Removed from the write set:** any account/control-plane schema or security-behavior
row that existed only to support succession (§12.7's deferred Product/security rows are now
deferred to `PBL-04`'s own future authorization, not to "Part 2 of this packet"). **Encyclopedia:**
Entries 01, 04, 05 marked impact-review candidates in this handoff and the eventual Register tier
table — the external artifact itself is neither fetched nor edited by this draft. **Still
explicitly unaffected:** frozen `docs/PRD.md`, the Charter, `0001_init.sql`, `S5`'s Entry 007 row,
`PBL-01`, `V1-ARTIFACT-INVENTORY.md`, `Modular_PRD.md` §8, `V1-PHASE-CLOSURE.md`.

### §13.7 — Success criteria (Round 27's, plus applicability review of prior rounds')

Round 27's own criteria (scope/sequence/state-evidence/traceability/backlog, stated in full at its
own round) apply unchanged. **Applicability review of `SC55`–`SC69`, `SC71`–`SC75`:**

| Prior ID | Applicability under Draft 4 |
|---|---|
| `SC55`–`SC62` (Round 22–23, single-account/authentication) | **Applicable**, narrowed: test the one linked account, not a succession sequence. `SC62` stays historical, never operative |
| `SC63`–`SC69` (Round 24, recovery) | **Not V1-applicable.** Preserved verbatim at their origin as `PBL-04` candidate tests, per §13.4 |
| `SC71`–`SC75` (Round 25, transaction/security completeness) | **Not V1-applicable as written** — they test the succession transaction. Their underlying principle (atomicity, authority binding, accurate lifecycle claims) carries into `EDITORIAL_DISPOSITION`'s own single-write requirement and into `PBL-04`'s future tests, not restated twice |

One criterion added for this draft's own drafting choice:

| ID | Given | When | Then |
|---|---|---|---|
| `T5-V1-SC76` | `EDITORIAL_DISPOSITION` is read without prior conversation | Its gate status is evaluated | It carries no `EG*` node ID, adds no sixth entry to the `T1`–`T5` gate count, and is never described as completing `T5` a second time |

### §13.8 — Execution sequence

Unchanged in shape from §12.10: (1) this draft written, no governed tier touched; (2) commit, push,
fetch-prove; (3) independent Lane B review of Draft 4 specifically — Part 2 does not yet exist to
review; (4) Judge bounded acceptance, including confirming or correcting `EDITORIAL_DISPOSITION`'s
name; (5)–(10) unchanged from §11.11/§12.10.


---

## §14 — Proposed `D-189` Draft 5: mandatory `T5` assessment, one judgment and one recorded outcome (addresses `B071-R183`, `R185`, `R186`)

> **Partially superseded by §15 (2026-09-04).** Rounds 30–31 found four errors here, all confirmed
> against source and corrected in §15.0: §14.3's `OP-FINAL-SIGNOFF` "exactly case 3" claim (a blank
> source `R` does not prove a missing approval on any article); §14.2's "supplies evidence, not
> judgment" (`FN-GATES-01-05.md` §11.1: *"Each sealed act records its judgment"*); §14.4's
> "remains `Reviewed`" for pre-join incompleteness (the same source keeps it `Drafted`); and
> §14.2's "structurally impossible" used in place of a verifiable test, plus `SC79`'s
> article-lifetime one-judgment rule, which would block remedy. **Two scope narrowings also land:**
> Round 31 removes `R185`'s authentication work from V1 entirely, and Round 32 replaces §14.4's
> open blocked-versus-negative-close question with a manual whole-article re-trigger. **What
> survives:** §14.1's mandatory-assessment parent, §14.2's one-judgment/one-outcome shape, §14.5's
> retained Line control, §14.6's subject-based criterion mapping, §14.8's application refusal.
> **Preserved unedited as historical record.** Read §15 for the current draft.

**Independent of §1–§9.** A **scoped** correction to §13 — not a restoration of §§11–12, which
Round 29 explicitly forbids. §13's single-account scope, `PBL-04` candidate, `R182` correction and
Encyclopedia impact-review disposition all survive unedited and are not restated here. Nothing
below is committed to any governed tier. `D-171` remains binding. `AUTH-DOC` remains unapproved.

### §14.0 — Three errors in §13, corrected

Round 28's independent review found each of these in Draft 4; all three are confirmed against
source and are mine, not inherited:

| Error in §13 | What the source actually says | Correction |
|---|---|---|
| §13.2: the bundle join *fully completes* `T5` | Round 29's Judge clarification: *"T5 editorial stage … is part of the judgement-gate hence is always happening else can't judge what goes missing."* The join signals readiness; it supplies no judgment | §14.2 — `T5-FINAL`, the mandatory human editorial judgment, completes `T5`. The join keeps only `Drafted → Reviewed` |
| §13.2: `satisfied` is a "`T6`-labelled state," so `G-02a` is superseded "because there is no gate six" | `satisfied` is one of three values of `workflow_transitions.line_separation_status` (`Modular_PRD` `G-02a`, `FR-05`, `NFR-03`, `TR-DM-02`) — an **independence metric on a transition**, not gate completion and not article state | §14.5 — the control is **amended in subject, retained in substance**, drafted explicitly. Removing the label `T6` must not silently change the Line-classification result |
| §13.7: `SC71`–`SC75` retired as "all succession tests" | `SC71` tests source-citation accuracy, `SC72` application completeness, `SC75` truthful lifecycle claims. Conversely `SC55`/`SC56`/`SC59` — which §13.7 called applicable — do concern replacement, rollback and reactivation | §14.6 — every criterion classified **by subject**, never by numeric range |

**A fourth, about this plan's own claims:** §13's heading says it *resolves* `R182`–`R186` while
§13.3 leaves `R183` open. Corrected at §14.7; §13's heading carries a correction notice rather than
being edited, per this project's append-only convention.

### §14.1 — Parent: `T5` assessment is mandatory; remedies are conditional

**Proposed decision text, refined from Round 29's draft:**

> **`T5` editorial judgment is mandatory for every article reaching that stage.** It evaluates the
> required evidence and records what is sufficient or missing, **even when the package cannot
> pass** — the assessment is what detects a gap, so it cannot be conditional on the gap already
> being known. **"Runs" is not "passes."**
>
> **The existence of an accountable party is checked separately from evidence of that party's
> approval.** Missing accountability and missing approval-from-an-assigned-party are two
> distinguishable findings with different authorized remedies. No missing assignment or approval is
> silently fabricated, and no assignment is silently rewritten to resolve one.
>
> **A failed or incomplete assessment cannot produce the successful approval transition.** Any
> remedy follows its own governed workflow and is evidenced before a subsequent positive assessment
> can authorize progression.

**What this does not do:** it does not make every assessment pass, does not require a remedial
sign-off on every article, does not authorize `OD4`, does not make V1 depend on `OD4`, and does not
turn any post-`T5` action into `PBL-01`'s future `T6` assurance judgment.

### §14.2 — The reconciled `T5` model: one judgment, one recorded outcome

Round 29's recommended label reconciliation, adopted — this **restores `T5-FINAL`**, withdrawn in
§13.1, and **re-scopes `EDITORIAL_DISPOSITION`** from a separate post-`T5` approval into the
recorded outcome of that one judgment:

```text
T5 editorial judgment gate  (one gate; the count stays T1-T5)
  |
  ├─ T5-REVIEW act(s)          route-dependent virtual evidence (T5/T5a/T5b)
  │                            agent executor + attempt refs; supplies evidence, not judgment
  |
  ├─ T5_review_bundle_sealed   deterministic readiness join; no R, no A, no judgment
  │                            owns Drafted -> Reviewed  (D-181 target, PRESERVED)
  │                            "bundle ready" is not "T5 complete" and not "approved"
  |
  └─ T5-FINAL                  MANDATORY human editorial judgment; completes T5
                               performer: the sole Chief Editor via the one linked account
                               always runs; records sufficient-or-missing either way
                               |
                               └─ EDITORIAL_DISPOSITION
                                     the RECORDED OUTCOME of T5-FINAL - not a second
                                     approval, not an independent state-changing act.
                                     One decision, one disposition, traced together.

Workflow actions (not gates)
  remedy a finding, or act on the disposition (existing T7/T10/T11 publication path)

Future T6 assurance -> PBL-01 only; absent, not applicable, not activated here
```

**Why this satisfies Round 27 and Round 29 together.** Round 27 excluded a *sixth judgment gate*;
`T5-FINAL` adds none — it is the human act **inside** `T5`, and `T1`–`T5` remains five gates.
Round 29 requires the assessment to be mandatory and its outcome recorded once; `T5-FINAL` runs
always and `EDITORIAL_DISPOSITION` is its record, not a rival approval. **The duplicate-state
failure Round 29 names — "both `T5-FINAL` and `EDITORIAL_DISPOSITION` independently approve the
same package" — is structurally impossible under this shape**, because the disposition has no
approval authority of its own.

### §14.3 — Case table: what runs versus what it finds

Adopted from Round 29, with the owning evidence named. **All four cases run the assessment.**

| Case | `T5-FINAL` | Finding | Successful transition permitted? |
|---|---|---|---|
| Applicable `A` and required approval evidence both present | Runs | Assess remaining editorial rules; do **not** demand a duplicate missing-`A` sign-off | Only with a positive judgment **and** all required evidence |
| A required `A` cannot be resolved for its scope | Runs, identifies the gap | Record the gap and the Chief Editor fallback action; preserve why the fallback was needed | **No** — not from the missing assignment alone |
| `A` is known but required approval evidence is missing | Runs, distinguishes missing evidence from missing authority | Obtain the approval through its authorized workflow; do **not** automatically replace `A` | **No**, while required evidence is missing |
| Required review evidence incomplete, or judgment negative | Runs, records the incompleteness or negative result | Governed return/hold/rejection path — see §14.4 | **No** |

**This is a live case, not a hypothetical.** `factory-route-operation-crosswalk.md` §2 records
`OP-FINAL-SIGNOFF` with `A = ROLE-DESK-EDITOR` and **`UNVERIFIED` — "no `R` in source at all"**.
That is exactly case 3: an accountable party exists, the responsible executor does not. `T5`'s
judgment assesses whether that operation's evidence exists; it does not itself perform the
operation, and it does not rewrite the route's `A`.

**No new persisted status enum is introduced by this table.**

### §14.4 — Transition ownership, including the non-positive path §13 never specified

| Transition | Owner | Condition |
|---|---|---|
| `Drafted → Reviewed` | `T5_review_bundle_sealed` join | Every route-required `T5-REVIEW` act sealed. Unchanged from `D-181`'s held target — **not moved to the human act** |
| `Reviewed → Approved` | `T5-FINAL` | **Positive judgment AND all required evidence present.** Proposed as an amendment to the held target's owner; the effect itself is unchanged |
| Non-positive outcome | `T5-FINAL` | **Drafted here for the first time** — §13 specified no such path. Proposed: the governed return/rejection route already defined for `T8`/`T9`, with the disposition recording the finding class (missing `A`, missing approval evidence, incomplete evidence, negative judgment) |

**Open, and named rather than assumed:** whether a non-positive `T5-FINAL` leaves the stage
**blocked** (article remains `Reviewed`, awaiting remedy and re-assessment) or **closes negatively**
(a governed transition to `Rejected` or a return state). Round 29 requires Lane A to specify this;
both readings are coherent and the choice has real consequences for re-assessment, so it is drafted
as a bounded question for review, not silently decided. **"Assessment performed" and "approval
achieved" are never one flag** under either reading.

### §14.5 — The Line-classification control, drafted explicitly (`R183`)

**`G-02a` is amended in subject, not superseded.** Its substance — exactly one transition in the
editorial flow may carry `line_separation_status = 'satisfied'`; everything else is
`not_applicable`; logged overrides are `override_not_four_eyes` and excluded from the metric — is a
four-eyes independence control that survives this correction intact.

| Element | Held target (`D-181`, `G-02a`) | Proposed under Draft 5 |
|---|---|---|
| Which transition may be `satisfied` | `T6` | **`T5-FINAL`** — the human Line 2 act consuming Line 1 agent evidence |
| `T1`–`T5` review acts, join, Delivery | `not_applicable` | Unchanged |
| Logged override | `override_not_four_eyes`, excluded from `G-02`/`G-02a` | Unchanged |
| Metric target | 0 bypasses, no exceptions besides a logged override | Unchanged |

**The Line boundary itself is unchanged**: agent-executed `T5-REVIEW` acts sit in Line 1; the human
`T5-FINAL` judgment sits in Line 2; the crossing between them is what `satisfied` records.
**Renaming the transition must not change the independence result** — that is precisely the failure
`R183` names, and §13 would have caused it by declaring the control superseded.

**Not decided here:** whether `T5-FINAL` requires its own RACI row in
`raci-involvement-matrix.md` §3.1, and its exact `R`/`A` values given the existing `R = A` at the
human act. That is Part 2 occurrence-ledger work under `R183`, named rather than improvised.

### §14.6 — Criterion applicability, classified by subject (`R186`)

Replaces §13.7's range-based retirement, which was wrong in both directions.

| Criterion | Subject | Disposition |
|---|---|---|
| `SC55`, `SC56`, `SC59` | Replacement, rollback, reactivation | **Future `PBL-04` candidate.** Not V1 prerequisites |
| `SC57`, `SC58`, `SC60`, `SC61` | Single-account authorization; base-role-insufficiency; editorial attribution; unauthorized-approval refusal | **V1-applicable**, with replacement/assignment-history predicates removed. Re-link each to its surviving owning requirement |
| `SC62` | Non-selected Model B | **Historical only.** Never restated as operative — including here |
| `SC63`–`SC69` | Recovery/control-principal | **Future `PBL-04` candidate**, preserved verbatim at origin |
| `SC71`, `SC72`, `SC75` | Source-citation accuracy; application completeness; truthful lifecycle claims | **V1-applicable and retained.** §13.7 wrongly retired these |
| `SC73` | Atomicity | **Split.** Succession atomicity → `PBL-04`. Editorial decision/evidence atomicity → V1, applied to `T5-FINAL`'s single write |
| `SC74` | Identity/authority refusal | **Split.** Control-principal/former-session cases → `PBL-04`. Forged-identity and unauthorized-human-approval refusal → V1 |
| `SC76` | No-extra-gate test | **Retained**, and explicitly *not* a substitute for event/state, authority or evidence tests |

Added for this draft's own corrections:

| ID | Given | When | Then |
|---|---|---|---|
| `T5-V1-SC77` | An incomplete or gap-bearing package reaches `T5` | The stage runs | The assessment executes and records the finding; it is neither skipped for lack of a known gap nor marked bundle-ready or approved by having run |
| `T5-V1-SC78` | An assigned `A` exists for a scope | Approval is evaluated | Assignment alone never satisfies an approval criterion; missing `A` and missing approval evidence produce distinguishable findings |
| `T5-V1-SC79` | `T5-FINAL` and `EDITORIAL_DISPOSITION` are traced for one article | Approval authority is counted | Exactly one judgment and one recorded outcome exist; the disposition carries no independent approval effect |
| `T5-V1-SC80` | The `T6` label is removed from the editorial flow | `line_separation_status` outcomes are compared before and after | The independence classification is unchanged: exactly one transition may be `satisfied`, and the metric's target is unaffected by the rename |

### §14.7 — Status of `B071-R182`–`R186`, stated distinctly (`R186`)

**This section addresses; it does not resolve.** Per-finding, with no blanket label:

| Finding | Status |
|---|---|
| `R182` | **Draft-corrected** in §13.3 (unsupported `Entry007/S5` inference withdrawn). No further work |
| `R183` | **Partially addressed.** §14.2/§14.4/§14.5 supply the judgment model, transition ownership and Line control. **Still open:** the complete occurrence ledger, literal owning-tier text for `Modular_PRD` §§4–5, `FN-GATES` §11.1, `FN-PUBLICATION` §§4–5, RACI §3.1 and the crosswalk — Part 2 |
| `R184` | **Draft-corrected**, scoped: succession atomicity moved to `PBL-04`; `T5-FINAL`'s own decision/evidence atomicity retained in V1 (§14.6, `SC73`) |
| `R185` | **Partially addressed.** The single-account authorization predicate survives §13's narrowing; **still open:** the actual owning security rows (`SEC-01a`/`SEC-03a`) required by narrow single-account approval |
| `R186` | **Draft-corrected** by §14.6's subject-based mapping and this table. `SC62` remains historical |

### §14.8 — Application readiness, replacing inherited execution references (`R183`)

§13.8 inherited application steps from §§11–12, which Round 28 rejected. **Replaced with a
condition, not a step list:**

> This packet is **not application-ready**. Application may be offered for authorization only when
> **all** of the following exist: (1) the complete occurrence ledger (`R145`–`R168`, Part 2);
> (2) literal text for every owning-tier target named in §14.7's `R183` row; (3) the `SEC-01a`/
> `SEC-03a` security rows under `R185`; (4) a decided non-positive path (§14.4); and (5) the RACI
> `T5-FINAL` row disposition (§14.5). Until then, independent **draft** review remains possible and
> application is refused — missing text is named, never improvised during execution (`SC72`).

### §14.9 — What remains open

1. **The non-positive `T5-FINAL` path** — blocked versus negative close (§14.4).
2. **`T5-FINAL`'s RACI row and Line values** (§14.5) — Part 2.
3. **`R183`'s occurrence ledger and literal owning-tier text**; **`R185`'s security rows** (§14.7).
4. **`B071-R145`–`R168`** (Part 2) — unchanged, still not drafted.
5. **`B071-R180`/`R181`** — attached to the `PBL-04` candidate (§13.4), unchanged.
6. **Encyclopedia Entries 01, 04, 05** — impact-review candidates; external artifact still unread.

### §14.10 — Write set

**Unchanged from §13.6**, with these additions now named explicitly rather than omitted:
`FN-GATES-01-05.md` §11.1 and `FN-PUBLICATION-09-10-13.md` §§4–5 (readiness versus judgment versus
publication), `raci-involvement-matrix.md` §3.1, `factory-route-operation-crosswalk.md` §§2–4
(`OP-FINAL-SIGNOFF` scope versus `T5`'s judgment about it), and `Modular_PRD.md` `G-02a`/`SEC-01a`/
`SEC-03a`. **No literal text is supplied for these in this draft** — that is `R183`/`R185` Part 2
work, and §14.8 refuses application until it exists. **Still explicitly unaffected:** frozen
`docs/PRD.md`, the Charter, `0001_init.sql`, `PBL-01`, `V1-ARTIFACT-INVENTORY.md`,
`Modular_PRD.md` §8, `V1-PHASE-CLOSURE.md`.


---

## §15 — Proposed `D-189` Draft 6: manual re-trigger, `R185` out of V1 (addresses `B071-R183`, `R186`)

**Independent of §1–§9.** A scoped correction to §14; §14's mandatory-assessment parent,
one-judgment shape, retained Line control and application refusal all survive unedited. Nothing
below is committed to any governed tier. `D-171` remains binding. `AUTH-DOC` remains unapproved.

### §15.0 — Four errors in §14, corrected

All found by Rounds 30–31, all confirmed against source, all mine:

| Error in §14 | Source | Correction |
|---|---|---|
| §14.3 called `OP-FINAL-SIGNOFF` "exactly case 3" — an accountable party with missing approval evidence | `factory-route-operation-crosswalk.md` §2 records `A = ROLE-DESK-EDITOR` and a blank `R`. **A blank source `R` says nothing about whether an approval occurred on any article**, and an A-only sign-off may legitimately approve prior `R`-work | §15.3 — the example is withdrawn. Accountable actor and actual approval evidence are checked **separately**; no `R` is invented and no live missing-approval incident is inferred from a matrix cell |
| §14.2: agent acts "supply evidence, not judgment" | `FN-GATES-01-05.md` §11.1, verbatim: *"**Each sealed act records its judgment;** the article remains `Drafted`."* | §15.2 — sealed acts record **the reviewer's judgment**; only the deterministic join judges nothing; the human final judgment is what authorizes the disposition |
| §14.4: an incomplete package "remains `Reviewed`" | Same clause — pre-join, **the article remains `Drafted`**. The join is what performs `Drafted → Reviewed` | §15.3 — pre-join incompleteness and post-join negative judgment are separate cases with different states |
| §14.2's "structurally impossible"; `SC79`'s one-judgment-per-article rule | A drawing is not a verification, and an article-lifetime single-judgment rule forbids the remedy §14.1 permits | §15.4 — replaced with per-assessment identity and a non-duplicating replay rule, testable rather than asserted |

### §15.1 — Parent scope: `R185` leaves V1 (Round 31)

**Judge clarification, recorded:** *"since there is only one account there is no requirement to
scope in V1."* **Proposed decision text:**

> V1 does not add authentication, account succession or multi-account management through this
> packet. Existing identity-assurance limitations remain disclosed: a single account is not proof
> of authenticated identity, and no name, role label or sole-account condition may be treated as
> such. Later access-control work keeps its existing `SEC-03`/`S6` owner; multi-account work keeps
> `PBL-04`.

**This withdraws a prerequisite, not a control.** §14.5's `G-02a`/`SEC-01a` Line-classification
mapping is **retained in full** — removing `R185`'s authentication scope does not erase the
four-eyes independence control, and §14.6's source-accuracy, readiness and lifecycle criteria are
likewise untouched.

### §15.2 — Who judges what (corrected)

```text
T5-REVIEW act(s)      records the REVIEWER'S judgment + evidence + agent attempt refs
                      article remains Drafted            (FN-GATES §11.1)
T5_review_bundle_sealed
                      deterministic join; judges nothing; no R, no A
                      performs the single Drafted -> Reviewed transition
T5-FINAL              the human's FINAL editorial judgment; mandatory; completes T5
                      EDITORIAL_DISPOSITION records that same act's outcome
```

Three distinct judgment-bearing facts, not two: a reviewer's judgment, the absence of judgment in
the join, and the human's final judgment. §14's "agent evidence, not judgment" collapsed the first
into the second.

### §15.3 — The outcome contract, four cases (corrected states)

| Situation | State effect | Record | Approval permitted? |
|---|---|---|---|
| Required reviewer/operation evidence missing, **before** bundle readiness | **Stays `Drafted`** — no join, no fabricated readiness | Missing items recorded | No |
| Bundle sealed, but evidence needed for final approval incomplete | **Stays `Reviewed`** | Deficiencies recorded; remedy requested | No — ready is not approved |
| Ready evidence, **negative** human judgment | **Stays `Reviewed`** — see §15.5 | Negative judgment **and its reasons** recorded | No |
| Ready evidence, **positive** human judgment | `T5-FINAL` performs `Reviewed → Approved` | `EDITORIAL_DISPOSITION` records that act's outcome | Yes — one approval, one effective transition |

**On accountability evidence, replacing §14.3's withdrawn example:** the applicable accountable
actor and the actual approval evidence are checked **separately**. An A-only Final Sign-Off may
approve previously completed `R`-work and is not rejected merely for a blank source `R`; equally,
an assigned `A` with no approval record is never treated as approved. **No `R` is invented from a
source-matrix cell, and no live incident is inferred from one.**

Blind-review and Line controls apply unchanged to every case; the incomplete-input path does not
waive them.

### §15.4 — Reassessment and replay (replaces `SC79`'s lifetime rule)

> **Each assessment refers to the evidence it assessed and has exactly one recorded outcome.** A
> retry of the same completed act creates no additional approval or publication effect. A remedy
> may create a **new** assessment, linked to the earlier assessment and to the changed evidence;
> prior judgments remain append-only and are never overwritten. An earlier approval never
> authorizes a changed evidence set.

**One effective result per assessment — not one assessment per article.** §14's `SC79` said the
latter, which would have made the remedy §14.1 permits unreachable.

### §15.5 — Negative path: manual whole-article re-trigger (Round 32)

**Proposed literal behavior for the owning tier:**

> For V1, a negative editorial judgment records its result and reasons and does not authorize
> publication. The application does not automatically return, repair, resume or schedule a new
> analysis as a consequence of that result. The user may manually trigger the entire article's
> editorial analysis again. That later analysis uses its own evidence and may reach a different
> judgment; it does not overwrite the earlier result or inherit approval from it.

A fresh analysis still follows all applicable `T1`–`T5` requirements. **"Manual" means the user
initiates the existing editorial flow** — not that every analysis task becomes manual. No new
rejection state, scheduler, partial-resume engine or `T6`/assurance feature is implied.
Duplicate-effect protection within each attempt is retained; that safety rule is **not** the
deferred automated-reassessment feature.

**Existing return/amendment clauses — explicit scope disposition, as Round 32 requires.** These are
distinct mechanisms and none is deleted or deferred by the above:

| Clause | What it is | Disposition |
|---|---|---|
| `FR-06` (P0, S1), `AC-09`, `AC-10` | **Human-initiated** return to a prior state with a mandatory reason, auto-escalating at the return limit | **Unaffected and retained.** A deliberate human return is not an automatic consequence of a negative judgment |
| `AC-08a` `[decided_target_held]` (`D-180`) | Scoped rerun after a human return: single-reviewer defect reruns that reviewer; shared-evidence defect invalidates the bundle | **Unaffected**, and still target-held. Its trigger is a human return, not a negative-judgment consequence |
| `T8` / `T8a` (`any → Needs Revision`, and back) | Governed return transitions | **Unaffected and retained** |
| `T9` (`any → Rejected`) | Governed rejection transition | **Unaffected as a transition.** Round 32 defers only its *automatic selection as a consequence of a negative `T5` judgment*; whether a human may still reach it directly is existing behavior, not changed here |
| Automated return/remedy/resume/reschedule **as a consequence of a negative judgment** | Not currently specified anywhere | **Beyond V1** — §15.6 |

**The distinction that makes this safe:** a blanket "defer negative-path handling" would have
silently suspended `FR-06`, a `P0`/`S1` requirement. What Round 32 defers is *automatic consequence
routing*, not the existing human-initiated return machinery.

### §15.6 — Future capability: deduplication check and proposed identity

**Deduplication performed against `Modular_PRD.md` §2.5.2's nine rows** (`PBL-01` T6 assurance,
`PBL-02` monetization, `PBL-03` mobile, `PBL-04` multi-team accounts, `PBL-05` Facebook publishing,
`PBL-06` trend detection, `PBL-07` multi-language, `PBL-08` bookmarklet, `PBL-09` email/Slack
notifications). **None covers automated negative-result return, remedy or reassessment** — the
nearest neighbours are unrelated (`PBL-01` is assurance; `PBL-09` is notification delivery, not
workflow routing). No existing identity fits, so one is allocated through the normal owning-tier
process (`PBL-10` is unallocated — verified across `docs/`):

| ID | Capability | Rank | Feature readiness |
|---|---|---|---|
| `PBL-10` | **Automated negative-result handling** — automatic return, remedy, resume or reassessment triggered as a consequence of a negative editorial judgment | **Unranked** | Identity only. Source request: `B-071` `R183`, Round 32. Beyond V1 |

**Identity only, per `D-187`/`D-188`:** this row records a name and nothing else. No requirements,
acceptance criteria, demand, rank, readiness or authorization is implied, and creating it is not
refinement. **Open, and not decided here:** whether V1's exclusion of this capability also warrants
a `V1/NG-*` row pointing at `PBL-10` under `D-188`'s `V*/NG-* ──excludes──► PBL-*` model. Round 32
asked for a capability identity, not an exclusion record, and `D-188` is explicit that *absence
from a Non-Goal list never means a capability is included* — so omitting it is safe, but the
symmetry question is real and belongs to the Judge.

### §15.7 — Criterion corrections

`SC79` is **replaced** by §15.4's per-assessment rule; it is not retired silently. Added:

| ID | Given | When | Then |
|---|---|---|---|
| `T5-V1-SC81` | A required review act is missing | Assessment runs | The gap is recorded, the article stays `Drafted`, and no join, readiness event or `Reviewed` state is fabricated |
| `T5-V1-SC82` | A source RACI row shows an accountable party and a blank `R` | Approval status is evaluated | No approval is inferred as absent or present from the cell alone; actual approval evidence decides, and no `R` is invented |
| `T5-V1-SC83` | A negative judgment is recorded, then the user manually re-triggers the whole article | Both analyses are inspected | The earlier result and reasons are preserved append-only; the later analysis carries its own evidence and inherits no approval |
| `T5-V1-SC84` | The same completed `T5-FINAL` act is retried | Effects are counted | Exactly one approval and one publication effect exist; the retry adds neither |
| `T5-V1-SC85` | V1 is inspected for authentication scope | `R185`'s withdrawal is checked | No V1 authentication or succession prerequisite exists, **and** the `G-02a`/`SEC-01a` Line controls remain present and testable |

### §15.8 — Status per finding

| Finding | Status |
|---|---|
| `R182`, `R184`, `R186` | **Draft-corrected.** `R186`'s criterion mapping now also covers `SC79`'s replacement |
| `R183` | **Partially addressed.** §15.2–§15.5 supply the judgment, outcome, replay and return-scope contracts. **Still open:** the complete occurrence ledger (`R145`–`R168`) and literal owning-tier text for `Modular_PRD` §§4–5/9, `FN-GATES` §11.1, `FN-PUBLICATION` §§4–5, RACI §3.1, crosswalk §§2–4 |
| `R185` | **Withdrawn from V1 scope** by Round 31's Judge clarification — not "resolved," not "implemented." Later access control keeps its `SEC-03`/`S6` owner |

### §15.9 — Application readiness (updated)

§14.8's five conditions are reduced to **three**, since `R185`'s security rows and the negative-path
destination are both withdrawn:

> Not application-ready. Application may be offered only when: (1) the occurrence ledger
> (`R145`–`R168`) is complete; (2) literal text exists for every owning-tier target in §15.8's
> `R183` row; and (3) `PBL-10`'s allocation is confirmed through the owning-tier process. Until
> then, independent **draft** review remains possible and application is refused — missing text is
> named, never improvised (`SC72`).

### §15.10 — What remains open

1. **`R183`'s occurrence ledger and literal owning-tier text** (§15.8) — Part 2, unchanged.
2. **`PBL-10`'s allocation** — proposed here, requires the owning-tier process to confirm.
3. **Whether a `V1/NG-*` row should point at `PBL-10`** (§15.6) — symmetry question for the Judge.
4. **`B071-R145`–`R168`** (Part 2) — still not drafted.
5. **`R180`/`R181`** — attached to `PBL-04` (§13.4), unchanged.
6. **Encyclopedia Entries 01, 04, 05** — impact-review candidates; external artifact still unread.

**Write set:** unchanged from §14.10, **minus** the `SEC-01a`/`SEC-03a` security rows withdrawn by
§15.1, **plus** `Modular_PRD.md` §2.5.2 for `PBL-10`. Frozen `docs/PRD.md`, the Charter and
`0001_init.sql` remain untouched.

