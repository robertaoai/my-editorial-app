# B-081 — M-MVP priority, enduring backlog ownership and separate Reporter AI intake

- **Raised:** 2026-09-08 by Lane B
- **Kind:** finding
- **Phase:** 1
- **Blocks:** a truthful claim that M-MVP-first priority and the new capability intake have reached their owning records; no build
- **Status:** Answered
- **Lane A:** **Acknowledged and applied 2026-09-08. All three topics accepted; each claim was
  verified against its source before editing, not taken on assertion.**
  **Parent — the hierarchy.** Recorded as `D-195`. Three conflations corrected in `Modular_PRD`:
  §0.6.1 no longer claims `M-MVP` owns *"§1–§12 of this document"* — §8's build-version and sprint
  tracking and §2.5's capability catalog are shared tracer sections that merely share the file; the
  *"a second product's requirements"* wording is replaced with *"another module's"*, because
  `FN-POC-ENGAGEMENT-01-13.md` §Overview says the opposite in terms — ***"`M-POC` is a way of
  working, supported by the existing product — not a second product"***; and §8.0's notation
  example `V1 = S0–S5` is replaced, because **the build-version table six lines below reads
  `S0 · S1 · S2 · S3 · S4 · (S5 beyond v1 scope)`** — two tables in one section disagreed about
  `S5`. A dual-role note now states that a module is not a build version and a build version is not
  a sprint, that `M-MVP` is **not** another name for `V1`, and that `[V1]` records introduction and
  never a promise to build. `FN-POC`'s scope-mark carries the same clarification.
  **Parent — priority and backlog.** `D-195` records `M-MVP`'s approved `V1` delivery scope as
  current priority with one enduring backlog source, and states explicitly that *"all others
  backlogged"* is **feature scheduling** — it deletes no `M-POC` specification, converts no required
  control into an optional feature, invents no order among unranked items, and lifts neither `D-171`
  nor any readiness gate.
  **Child — the capability intake.** Registered as **`PBL-11`**, `Unranked`, identity only,
  explicitly distinct from `CR-14`'s ratified manual-input contract. **`PBL-10` is deliberately
  skipped and the reservation is recorded in the table**, because `B-071` and its corrective plan
  already propose it — verified before assigning, exactly as this entry required.
  **The conflation you flagged is corrected in both places.** `G105` and `docs/INTELLIGENCE_LAYER.md`
  described `CR-14` as *"AI tagging **and scoring**"*; the frozen sentence says **tags**, and `TC3`
  records scoring as separately non-computable. Both are **superseded, not rewritten**, and `G105`
  stays open. **One further defect found while doing it, and it was Lane A's:** `G105` still named
  `Q9`'s owner as *"customer via the project sponsor"* — `B-080` `R1` corrected that to the Chief
  Editor, **and this row was missed when that correction was propagated.** Recorded as such.
  **Not done, deliberately:** any relocation of requirements, promotion of `PBL-11` beyond identity,
  `M-POC` activation, or build. Historical Stripe presence and its `S0` removal stay confirmed
  history establishing **no current payment authority**. Frozen sources untouched.
  **Correction appended 2026-09-08, after the independent review at `1c46de8` (`R2-1`–`R2-4`).**
  The review is right that the first pass was incomplete, and **all four were already named in this
  entry** — they are missed documentation corrections, not deferred relocations. All four now land.
  **`R2-1`** — `M-POC-REQUIREMENTS.md` §0's *"Amend `M-MVP`"* row still read *"Everything in
  `Modular_PRD` §1–§12 is `M-MVP`'s"*. **This was Lane A's miss**: the finding named *"Modular_PRD
  §0.6 **and** M-POC requirements §0"* and only the index side was fixed, leaving the companion
  asserting exactly what the index had stopped asserting. **`R2-2`** — `docs/README.md`'s
  historical-journal row routed current decisions, state **and backlog** to `v1/`/`handoff/`;
  it now separates sprint decisions and lane state (`v1/`), handoff work and its lifecycle
  (`handoff/`), and enduring capability identity, rank and readiness (`Modular_PRD` §2.5.2).
  **`R2-3`** — `V1-BUILD-SPEC` §6.1's *"four-step procedure"* pointer is replaced with one that
  names the owners and **restates no count** — a tally inside a pointer is the `G55` shape.
  **`R2-4`** — the *controlling sentences* are now superseded in both homes, not just the capability
  name and owner: `G105`'s *"closes when … `FB-05` gains a named sprint"* made an AI-intelligence
  sprint a condition of a manual-intake gap, and `INTELLIGENCE_LAYER`'s *"until `Q9` is answered,
  no sprint builds Reporter-gate intelligence"* survived the earlier block untouched. **`PBL-11`'s
  absence of a sprint follows from being unranked, not from `Q9`.**
  **`D-195`'s tier table is corrected with them.** It declared `V1-BUILD-SPEC` **Unaffected** while
  that file carried a named stale pointer — **declaring a tier unaffected does not resolve a defect
  in it** — and omitted `M-POC-REQUIREMENTS.md` and `README.md` entirely. All three now read
  **Affected**, with reasons.
  **While repairing `R2-4` I found and fixed a defect of my own making:** the supersession block
  added in the previous pass had been inserted *mid-paragraph*, splitting the historical text in
  two. Both notes are now merged into **one** block following an **intact** paragraph. Nothing
  historical was deleted.
  **Unchanged, deliberately:** no relocation, no `PBL-11` promotion beyond identity, no
  implementation. `G105`, `FB-05` and `Q9` all remain **open** — none of these corrections closes
  any of them. **`Applied` is not `closed`**, and independent verification is still owed.
- **Resolution:** Applied
- **Evidence:** review at 6d5ae5448dfc7b2ae339026b0f7c2e2bcabd3294; current Judge request; Modular_PRD §2.5.1–§2.5.2; Register D-188/D-194/G105; Addendum §2.4 CR-14/A7; INTELLIGENCE_LAYER handoff note; Encyclopedia sync dependency ledger; B-080's verified correction
- **Verified-At-Commit:** 99ea0a1641670fa0dd97584b6e5a8066ad6deb47

## What happened

### Independent review at 1c46de8 — 2026-09-08

**Request clarified:** verify the applied B-081 corrections, finish drafting any missed fixes,
and explain relocation versus PBL-11 promotion as separate parts of the module/version/sprint
and backlog workflow. Planning only. This review changes no governing source or lifecycle field.

**Accepted:** D-195 correctly records module/version/sprint distinctions and M-MVP priority;
the Modular_PRD notation example and shared-tracer note are corrected; FN-POC distinguishes
introduction lineage from build authority; PBL-11 is registered unranked and separate from CR-14
and PBL-06, with the PBL-10 reservation explained. Those completed corrections need no repeat.

**B-081 remains Applied, not Verified.** The following were already named in this entry and
remain at the reviewed revision. They are missed documentation corrections, not deferred file
relocations or future AI implementation. Append a correction to Lane A's applying answer when
they land; “Applied” is not “closed.”

| Finding | Remaining text | Required bounded correction |
|---|---|---|
| R2-1 — companion ownership | M-POC-REQUIREMENTS §0 still says everything in Modular_PRD §1–§12 is M-MVP's | Replace the Amend M-MVP row with: “Must not amend M-MVP's module-specific requirements or reuse, move or renumber its FR/US/AC identifiers. Shared module tracing, capability intake and version/sprint mapping remain in Modular_PRD.” |
| R2-2 — entry navigation | docs/README's historical-journal row still routes current decisions/state/backlog solely to v1/handoff | Apply the exact replacement already drafted under this entry's Navigation gap: version decisions/state → v1; handoff work → originating entries; enduring capability rank/readiness → Modular_PRD §2.5.2 |
| R2-3 — procedure pointer | V1-BUILD-SPEC §6.1 still says four-step procedure | Apply this entry's Stale procedure pointer replacement without a restated step count; distinguish §2.5.1 version reconsideration from §2.5.2 capability intake |
| R2-4 — remaining dependency conflation | G105's original closure sentence still requires FB-05 to gain a named sprint; INTELLIGENCE_LAYER's text after the supersession still makes Q9 a gate on all Reporter intelligence | Explicitly supersede those controlling sentences, not just the capability name and owner. Use the proposed text below |

**R2-4 replacement for both homes, adapted only for the local citation:**

> G105's manual-intake dependency follows the remaining specification and independent-verification
> criteria of D-194/FB-05/Q9, including T1 execution authority and source author/date handling.
> Its closure does not require allocating an AI-intelligence sprint. PBL-11 has its own feature
> refinement, rank/readiness and build-authorization path; neither registration nor completion of
> the manual contract promotes it. Any actual dependency discovered during refinement must be
> stated and decided, rather than inherited from this superseded conflation. NG-10 remains the
> no-bypass control. This correction itself closes none of G105, FB-05 or Q9.

The original historical paragraphs may stay, but their supersession must cover the obsolete
closure/dependency claim explicitly. D-195's affected-tier declaration and this entry's applying
evidence must match the eventual correction set; declaring Build Spec unaffected does not resolve
its named stale pointer. No product behaviour change is needed to correct these references.

### Relocation and promotion — different operations with different evidence

| Operation | Meaning | Current position | What would authorize/completely evidence it |
|---|---|---|---|
| Module tracing | Identify module owners and references | M-MVP and M-POC traced in Modular_PRD; M-POC detailed sources already separate | Source pointers agree; neither module is renamed V1 |
| Content relocation | Move the sole living content to a better owner/path | No concrete move is selected or required by D-195; M-POC already has its own files | A named source-section/destination manifest, reason, authority and reference/graph impact; evidence that only one live owner remains |
| Capability registration | Give requested capability an enduring identity | PBL-11 is done at this level only | Existing canonical row and unique ID; do not register it again |
| Refinement | Turn the request into a bounded feature-group proposal | Not performed for PBL-11 | Authorized refinement scope, proposed behaviour, boundaries, evidence needs and explicit unresolved decisions |
| Rank/readiness decision | Decide relative priority and whether the proposal is ready for selection | PBL-11 remains Unranked, identity only | Named Judge/refinement outcome recorded in existing owning fields; ready is not selected |
| Version/sprint selection | Allocate approved scope to a version and bounded sprint unit | No version or sprint assigned to PBL-11 | Register act plus affected version Build Spec scope/sequence/DoD and appropriate §8 trace |
| Implementation authorization | Permit an Active lane to execute the bounded unit | Not present | Existing execution packet, dependencies and authorization gates; registration, relocation or refinement cannot substitute |

This table describes meanings, not new lifecycle states or a new tracker. Do not put “refined,”
“ready,” “selected” or “built” into handoff Resolution fields; the handoff retains its existing SOP.
PBL-11 promotion is not one automatic jump from identity to build, and module relocation is not
a prerequisite for refinement. Neither operation is required to finish the present B-081 correction.

### Concrete Lane A follow-up, highest parent first

1. **Finish the existing correction.** Apply R2-1 through R2-4, record the actual touched tiers
   in D-195 and append the B-081 answer. Preserve the accepted hierarchy, PBL-11 identity and
   frozen sources. No requirement relocation or capability promotion is part of this write set.
2. **Verify B-081 at a settled revision.** Run local checks, rebuild extracted graph content and
   re-merge curated fragments as needed, then verify the named fragments and seek independent
   review of the changed text. Keep the Applying SHA drawn from Git. A green suite alone does
   not prove these semantic claims. Closure can occur without building PBL-11.
3. **Continue the authorized M-MVP manual-intake documentation proposal.** Resolve its actor/
   authority and author/date questions, then propagate the accepted behaviour to the feature-group
   specs and views. PBL-11 is not a substitute producer or a prerequisite for that manual package.
4. **If a relocation is proposed later, make it concrete.** List source path/section, current
   authoritative content, exact destination, which live content is removed from the old location,
   historical pointer to retain, inbound links, checker/manifest/graph dependencies, and rollback
   or stop condition. Default here is no move: the named module and spec homes already exist.
   Preserve the B-071 corrective plan as its bounded provenance artifact; do not treat its draft
   PBL content as a permanent competing catalog. Apply its existing approval gate.
5. **When PBL-11 is selected for refinement, prepare the proposal under its existing ID.** Name
   the tagging outputs and purpose of each score; distinguish those from CR-06 and PBL-06; propose
   human review, provenance, unavailable-input/error paths, quality/cost evidence and no-bypass
   controls. These are refinement questions, not silently decided requirements. Keep the old
   plan pack as historical input only. No model, threshold, UI or technology is chosen here.
6. **Record promotion only after its actual decision.** Update canonical rank/readiness once,
   preserving M-MVP's current priority. A later selected version/sprint gets its own bounded
   authorization and D-54/§8 propagation. If refinement is deferred, record owner and return
   condition in the existing process, without a duplicate backlog or an invented delivery date.

### Acceptance and cross-reference scope

R2's deterministic failures are documentation failures: two current owners for the same rank
violate one-source ownership; a broken post-move link fails its reference check; a handoff
called Verified before these named corrections land fails its own acceptance criteria. No
inevitable runtime or financial failure of the future capability is asserted.

For a later relocation, compare source/destination content and anchors, update inbound references
and graph-fragment paths, then check that only the destination is identified as live. Do not use
node-count growth as parity evidence. For later promotion, examples must demonstrate that a score
cannot bypass a named gate and that identity/priority markers do not falsely signal build authority.

Current storyboard/panels and sequence/UML/data-flow views keep the manual package and shared
engine. Relocation changes their links only if they actually reference moved content; PBL-11
behaviour diagrams await an approved feature-group proposal. Encyclopedia impact is assessed
from its declared dependencies: D-194's Entry 02/06 follow-up remains separate, and a future
scoring explanation may affect Entry 03. No hosted parity claim is made. Neither a new UML file
nor an Encyclopedia rewrite is required just to close B-081.

**Evidence:** clean HEAD 1c46de83b40e4aad83f9f886860eefc2c85ae2f4 at intake; 17/17 local checks;
graph metadata matched that HEAD, stale false; frag126 passed exact named-fragment parity. Source
reads confirm the residuals despite those green results. This review does not independently
confirm the remote push. Only B-081's review prose is changed, uncommitted; graph refresh follows
its eventual commitment. B-077 through B-080 retain their existing dispositions.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Applied D-195 hierarchy, priority and PBL-11 registration | Phase 1: retain completed corrections |
| Approve-with-conditions | B-081 overall verification | Phase 1: R2-1–R2-4, accurate tier declaration, then independent review |
| Reject | Calling Applied closed or treating relocation as promotion | Preserve existing lifecycle and separate operations |
| Defer | Physical relocation | Later named need and exact source/destination manifest; no move required now |
| Defer | PBL-11 refinement/ranking/version selection/build | Separate decisions through the existing process; no automatic promotion |
| Approve | Manual M-MVP proposal proceeds independently | Existing D-194 authorization; remaining actor/metadata criteria still apply |

### Highest parent — module tracer, build versions and sprints (2026-09-08)

**The Judge's latest clarification governs the shorthand below.** `Module_PRD` in the request
refers to the existing `docs/Modular_PRD.md`; no renamed or second PRD is proposed. It is the
overall tracer for M-MVP and M-POC. A module is not a version, and a version is not a sprint.
The earlier “V1/M-MVP” shorthand in this draft conflates those identities and is corrected to
“the approved V1 delivery scope of M-MVP.” M-MVP remains a module across subsequent versions.

#### Proposed owning-document wording

> `Modular_PRD.md` provides the overall module index and traceability map, including module
> ownership, dependencies, build-version scope and sprint references. It currently also contains
> M-MVP's detailed requirements. Shared sections, including the capability catalog and execution
> mapping, must not be described as M-MVP-only content merely because they share this file.
>
> M-POC is traced from the module index, while its detailed requirements have one separate home:
> `docs/modules/M-POC-REQUIREMENTS.md`; its functional behaviour lives in
> `docs/fn-specs/FN-POC-ENGAGEMENT-01-13.md`. Preserve its own requirement namespace and its
> references to the shared editorial engine. The index points to these sources; it does not copy
> their requirements or independently redefine them. M-MVP requirements remain in their current
> sections unless a separately reviewed relocation identifies a concrete need to move them.
>
> V1 is one build version, containing multiple sprints. Version scope selects the module
> requirements to deliver; a module's existence or a section's `[V1]` introduction marker is not
> a promise to build that entire module in V1. Current priority is M-MVP's approved V1 delivery
> scope. M-POC remains traced and separately specified while its activation and future capability
> delivery follow their existing readiness and authorization paths.

This is logical ownership, not a requirement to create a file at every hierarchy level. A new
version of M-MVP is not a new module or a new portfolio project. The project/module relationship
continues to be traced through the governing sources; this clarification creates no project ID.

#### History without scope conflation

The Judge supplies the business-clone origin as historical business context. Git independently
confirms Stripe scaffolding at `62c8d8c` and removal during S0 at `43c51ce`; D-96/D-121/X8 record
its scope treatment. Keep the historical demand/provenance link in M-POC's origin narrative.
Neither scaffold presence nor the term “clone” establishes current payment authority, requires
a cloned codebase, or replaces M-POC's governing requirements. The current shared-engine and
external-payment boundaries remain in PR-01/PR-08/D-96; a future payment capability keeps its
separate PBL-02 identity. The new Reporter AI capability remains separate as already requested.

#### Concrete cross-reference gaps and drafted corrections

| Location | Gap | Draft correction |
|---|---|---|
| Modular_PRD §0.6 and M-POC requirements §0 | “Behaviour of one product module” / all §1–§12 belongs only to M-MVP obscures shared tracing, capability and execution sections | Use the dual-role wording above; identify module-specific sections versus shared tracer sections, without duplicating M-POC requirements |
| Modular_PRD §0.6 versus FN-POC overview | Index prose calls M-POC a second product while the functional spec calls it a way of working using the existing product | Use the agreed module names and describe M-POC's separate engagement requirements plus shared engine; do not infer a second implementation |
| Modular_PRD §8.0 notation | Example says V1 = S0–S5 while the adjacent V1 row explicitly places S5 beyond V1 scope | Replace the enumerated example with “V1 is a build version containing its authorized sprints; see the current build-version row and Build Spec.” No new sprint range |
| FN-POC header's `[V1]` mark | Introduction lineage can be misread as a V1 delivery commitment | Add: “This mark records when the specification section was introduced; it does not allocate M-POC to an authorized V1 sprint or lift its readiness conditions.” |

Modular_PRD §8 also mixes historical and current status prose. Do not regenerate its entire
history here: retain dated facts, link current execution to the Build Spec/work order, and use
the existing B-061/B-071 correction ownership for stale status claims. The previously identified
freeze wording is reconciled in that existing packet; one completed sprint must not be used as
evidence that the whole module, all of V1, or a living specification has closed.

#### Parent-first decision guide for Lane A

| Order / dependency | Decision for review | Lane A follow-up | Success criterion |
|---|---|---|---|
| 1 / none | Accept Modular_PRD as overall tracer with explicit local M-MVP requirement ownership | Record the Judge clarification and replace the conflated ownership wording | Module, build version, sprint and document revision are distinguishable |
| 2 / 1 | Accept separate M-POC requirement/behaviour sources | Correct module-index and M-POC origin/ownership references; retain unique PR/PA/PU identifiers | Every M-POC requirement resolves to one source; no copied FR/US/AC namespace |
| 3 / 1–2 | Accept M-MVP's approved V1 scope as current priority | Correct V1/M-MVP shorthand, V1 sprint example and introduction-marker explanation | M-MVP can continue into a later version; a later V1 sprint does not create a new module |
| 4 / 2–3 | Accept evidence-based propagation to views | Check storyboard panels, sequence/UML/data-flow module boundaries and Encyclopedia dependency impact | Two module entry contexts feed the shared engine; version labels do not duplicate the workflow |
| 5 / committed corrections | Independently accept the hierarchy correction | Verify source pointers, named graph relationships and D-54 tracking applicability | No identity-only module or backlog item appears build-authorized by a link or marker |

The shared trigger-package contract remains in the ratified D-194 chain. Storyboard and diagram
labels should trace `M-MVP` versus `M-POC`, while version and sprint allocation are references to
execution records. Do not confuse the historical storyboard's lettered business flows with
development Lanes A/B/C. Encyclopedia is a derived explanation, not another requirement owner;
update only entries affected by the clarified module or version relationships. Lane A owns
governed corrections, Lane B reviews application feasibility, and Lane C's workflow scope is
unchanged. D-54 file/scope propagation and existing approval holds remain applicable.

**Evidence:** this is a read-only source and history review at unchanged 6d5ae54 followed by a
draft edit to this handoff only. The previous 15/17 result remains the last run: B-081 needs
acknowledgement and graph coverage. Graphify was queried for module/version navigation; its
committed snapshot does not cover this draft. No documents moved, no lifecycle promoted, no build.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | Module → version-scope → sprint distinctions | Phase 1: record the Judge's hierarchy and correct shorthand |
| Approve-with-conditions | Modular_PRD tracer and separate M-POC sources | Phase 1: explicit ownership and consistent source pointers |
| Approve-with-conditions | Historical business-clone/Stripe context | Preserve provenance; do not convert it to payment or duplicate-engine authority |
| Reject | M-MVP = V1, V1 = one sprint, or `[V1]` = build authorization | Correct descriptions and view labels |
| Defer | Relocation, technical/UX implementation and future-module activation | Only if a later bounded authorized unit requires them |

### Parent clarification — M-MVP first, one enduring backlog source (2026-09-08)

**Working brief:** prioritize the approved V1 delivery scope of M-MVP. Route other feature demand through
the existing backlog flow. Keep V1's dated scope/disposition tracking in V1, while live capability
identity, rank, readiness and specifications remain in their existing homes outside `docs/v1`.
Review ownership before proposing any content relocation. Prepare the Lane A plan only; do not
move files, build software, duplicate the backlog or bulk-close handoffs.

The new Reporter AI capability below is a child of this policy. The Judge has already stated
M-MVP priority; the remaining review is how Lane A records it consistently, not whether to ask
for the same preference again. “All others backlogged” describes feature scheduling, not deletion
of existing M-POC specifications or conversion of required controls into optional features.

#### Proposed parent decision text for Lane A

> M-MVP's approved V1 delivery scope takes priority. Other requested capabilities enter the
> existing feature-intake process and remain backlogged unless separately promoted and authorized.
> This includes future Reporter AI tagging/scoring, distinct from CR-14's manual-input contract,
> and M-POC activation; neither is promoted merely because its requirements or identity exist.
> Preserve existing explicit feature ranks unless the Judge changes them; do not invent an order
> among unranked backlog items. M-MVP priority does not lift D-171 or any readiness/approval gate.
> Work required to make M-MVP governable, testable and safe remains part of its dependencies.
>
> V1 tracking records the dated inclusion, exclusion, deferral and authorization facts for that
> version and links to canonical capability/specification records. It does not maintain a second
> live list of ranks or readiness. Live capability identity and feature-intake state remain in
> Modular_PRD §2.5.2; version-exclusion conditions stay in §2.5/§2.5.1. Behaviour and technical
> specifications stay in their existing unversioned module, fn-specs and specs homes. Handoff
> Status/Resolution/evidence stay in each originating handoff. One canonical record owns each
> fact, with references connecting these different facts.

#### Ownership and relocation decisions

| Fact / content | Canonical home | V1 treatment | Proposed action |
|---|---|---|---|
| Capability identity, rank, feature readiness | Modular_PRD §2.5.2, already outside V1 | Dated decision plus reference | Reuse; do not create a new backlog document |
| Version exclusion and reconsideration | Modular_PRD §2.5/§2.5.1 | Build Spec §6 keeps V1's exclusion snapshot and pointer | Reuse existing split under D-148/D-188 |
| Requirements and behaviour that evolve across builds | Existing module and fn-specs files | Inventory/Build Spec reference them | Keep outside V1; retain required build-section markers |
| Technical/UX specifications | Existing specs/specs-ux owning tier when authorized | Inventory/Build Spec reference them | Do not create technical content merely to complete a folder map |
| Sprint decisions, scope, DoD and file inventory | V1 Register, Build Spec and Inventory | Stay in V1 and freeze under D-36 | Do not move these tracking files |
| Handoff completion and residual ownership | Originating docs/handoff entry | Reference its bounded disposition when relevant | Do not copy the status matrix into a V1 backlog |
| A V1 corrective proposal, including future-content drafts | Its existing V1 plan until adopted or retired | Preserve dated review provenance | Promote approved content into its owning tier; retain historical proposal, not a second live source |

**Concrete relocation finding:** V1-B071-CORRECTIVE-PLAN §16.6 already proposes placing the
automated-negative-result capability row in Modular_PRD §2.5.2. Its presence in a V1 draft is
not evidence that the living backlog belongs there. The Inventory says this plan supports one
correction and should later be retired/marked historical, never deleted. No wholesale move of
that plan, or of every file under V1, is justified. B-071's existing approval gates still apply.

For any additional live cross-version section found only under V1, Lane A must prepare a bounded
source-section → existing owner/destination → remaining historical pointer mapping. If no existing
owner can hold it, propose the exact new file and D-54 impact before creating it. No unmatched
destination or broad directory move is authorized by this packet.

**Navigation gap:** docs/README's historical-journal row says current “decisions/state/backlog”
live in v1/handoff. That shorthand conflates feature backlog with handoff work. Replace its final
sentence with:

> Current sprint decisions and lane state live in `v1/`; handoff work and its lifecycle live in
> `handoff/`; enduring feature identity, rank and readiness live in `Modular_PRD.md` §2.5.2, with
> version-exclusion conditions in §2.5/§2.5.1. This journal is historical lineage, not a live backlog.

**Stale procedure pointer:** V1-BUILD-SPEC §6.1 still says “four-step procedure,” while
Modular_PRD §2.5.1 has five steps and distinguishes version reconsideration from feature promotion.
Replace the count-bearing pointer with:

> The version-reconsideration procedure lives in `Modular_PRD.md` §2.5.1; living capability
> identities, ranks and readiness live in §2.5.2. This section retains V1's dated exclusions and
> links to those owners.

**Existing correction, not a new draft:** the B-071 corrective plan already proposes reconciling
§2.5.1's “any Non-Goal ... at any time” wording with V1's freeze: the reusable procedure and
capability catalog survive, while a frozen version's historical disposition is not a live queue.
Use that existing §9 correction packet and its approval gate. Do not duplicate its replacement
text here or claim it is applied. Priority likewise does not readmit FR-11, which Build Spec §6
explicitly excludes from V1, merely because it has a requirement in the M-MVP corpus.

#### Parent-first Lane A guide and success criteria

| Order / dependency | Decision for review | Lane A next action | Evidence / negative example |
|---|---|---|---|
| 1 / none | Accept the M-MVP-first recording of the Judge direction | Record policy in Register and apply affected D-54 tracking declarations | Prioritization names M-MVP without lifting D-171 or authorizing an undefined sprint |
| 2 / 1 | Accept the ownership split above | Correct README navigation; retain existing outside-V1 live owners | A reader reaches one current rank/readiness record; two editable copies fail |
| 3 / 2 | Accept separate future-feature intake | Complete B-081's Reporter AI intake below and preserve B-071's separate pending ID | No capability-ID collision, no CR-14 closure by association, no priority assigned from registration |
| 4 / 2–3 | Accept only a bounded content-promotion/relocation manifest | Name source sections, exact destinations, authority and historical pointers; apply no unapproved B-071 content | No live decision survives only in a soon-frozen snapshot; no historic evidence is erased |
| 5 / authorized manifest | Accept cross-reference propagation | Update applicable Register/Build Spec/Inventory and link-bearing views; use Modular_PRD §8 only at its trigger | All changed paths/fragments resolve; current-use diagrams distinguish M-MVP from deferred alternatives |
| 6 / committed correction | Independently accept or return the handoff | Review canonical intake, declared ownership and graph evidence at an actual revision | B-081 closes for recording this policy/intake, not for building every backlog feature |

M-MVP requirements, manual intake, actor/authority and author/date resolution remain the existing
dependent proposal; their criteria are not rewritten here. Storyboard, story panels, UML/sequence,
data-flow and Encyclopedia changes are impact-driven: update affected scope labels and pointers,
not every view solely because the backlog is prioritized. M-POC's existing documents remain
available as deferred-scope evidence. A graph link or a completed document is not build readiness.

#### Handoff audit and validation limits

The supplied audit's Lane B counts match the tracked B-* entries at 6d5ae54. Its smaller Deferred
count than the whole-channel runner is explained by C-001 being outside that Lane B-only scope;
neither tally is a defect. This review does not rerun historical acceptance tests or promote any
status. Do not persist another live totals table. Deferred/Superseded are terminal dispositions,
not proof that all child work is implemented. The named independent reviews still need their
own acceptance evidence; M-MVP priority does not waive them.

The current local suite reports 15/17: this still-untracked B-081 lacks Lane A acknowledgement
and graph coverage. Metadata matches committed 6d5ae54, not this draft. Lane A's follow-up is
acknowledgement, bounded commitment, graph extraction and curated merge/parity as applicable;
this review does not self-acknowledge or claim the draft is synced. No lifecycle or file location
was changed. No automatic runtime or business-failure claim is supported by these observations.

#### Parent decision summary

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | M-MVP-first feature priority | Phase 1: record the stated Judge policy, preserve required dependencies and holds |
| Approve-with-conditions | Enduring backlog outside V1, V1 tracking by reference | Phase 1: use existing canonical owners and correct README's shorthand |
| Approve-with-conditions | Specific content promotion or relocation | Phase 1: exact manifest, authority, reference updates and D-54 propagation first |
| Reject | Duplicate live V1 backlog, blanket folder moves or bulk handoff closure | Preserve provenance and independent per-item evidence |
| Defer | Non-M-MVP feature execution | Existing promotion/readiness process; no sprint assigned |

### Child intake — separate Reporter AI capability

**Clarified brief:** review Lane A's ratification work and prepare the existing backlog-flow intake
for a distinct future capability, “AI tagging and scoring at the Reporter gate.” Preserve CR-14's
frozen source identity and ratified manual-input interpretation. No implementation, no reopening
of B-080, and no duplicate lifecycle tracker.

**Ratification review:** the §2.4 CR-14 row and D-194's adopted statement agree on the complete
manual package, A7's completeness clarification, module partition and withheld build authority.
T1 execution identity/Line authority and author/date handling remain open; FB-05/Q9 are not closed.
This is source consistency review, not a fresh verification of remote delivery or the original
approval interaction. The supplied Lane A report describes the explicit adoption and push.

### Parent findings

1. **New capability is not yet in the canonical identity table.** Modular_PRD §2.5.2 contains
   PBL-01 through PBL-09. Record the user's demand through the PBL intake path; presence in this
   handoff alone is not registration in the owning tier.
2. **Do not allocate PBL-10 from that table alone.** B-071 and its corrective plan already propose
   PBL-10 for automated negative-result handling. It is not allocated there yet, but using the
   same proposed number here would collide. Lane A must check both registered and pending IDs
   before assigning one. This handoff deliberately names no new PBL identifier.
3. **Existing conflation must be explicitly corrected.** Register G105 calls CR-14 “AI
   tagging/scoring,” and INTELLIGENCE_LAYER's handoff note says the feature it describes is CR-14
   “AI tagging and scoring.” The frozen sentence names tagging, not scoring; the new Judge request
   expressly separates the future capability. Preserve history and supersede those active mappings.
   Do not rewrite CR-14 or transfer FB-05/Q9's closure conditions to the new feature.

## What you need

### Literal proposed capability intake, for Lane A to allocate and record

| Field | Proposed content |
|---|---|
| Capability | AI tagging and scoring at the Reporter gate |
| ID | Allocate through the existing PBL process after checking registered and pending proposals |
| Source request | Judge clarification dated 2026-09-08, recorded through B-081 |
| Rank | Unranked — request to backlog does not set priority |
| Readiness | Not assessed for refinement; no sprint/version or implementation authorization assigned |
| Scope identity | A future application capability for AI-assisted tagging and scoring at Reporter intake; detailed behaviour remains to be refined |
| Relation to CR-14 | Distinct capability identity. CR-14 retains its frozen text, traceability and D-194 manual-package ratification; this row neither replaces nor closes it |
| Relation to CR-06/FB-06 | Related scoring context to examine during refinement; not automatically the same score or requirement |
| Relation to PBL-06 | Real-time trend detection is a separate existing capability; no merge or dependency is presumed |
| Preserved control | NG-10/O-01 no score-driven gate bypass; scoring never itself authorizes a transition |
| Next owner/action | Lane A records intake and routes future rank/readiness through existing refinement; Judge retains scope/build decisions |

Only the identity/rank/readiness columns belong in §2.5.2's existing table. Keep source and semantic
boundary explanation adjacent or linked under the existing intake process; do not turn the identity
row into a functional spec. The user has supplied demand to record, not evidence of feasibility.
Do not invent a model, scoring formula, threshold, feed integration, customer demand study or date.

**Proposed replacement for the active G105/INTELLIGENCE_LAYER mapping:**

> CR-14 remains the Project PRD traceability identity, with its manual editorial trigger-package
> input contract ratified under D-194. The separately requested future capability “AI tagging and
> scoring at the Reporter gate” is routed through the PBL intake recorded in B-081. It does not
> satisfy or close CR-14/FB-05/Q9, CR-06/FB-06 or PBL-06 by association. No sprint is assigned and
> NG-10's no-bypass control remains unchanged. Replace this handoff pointer with the allocated
> canonical capability reference once Lane A records it; preserve this statement's provenance.

G105's remaining closure condition also needs review: assigning a sprint to AI intelligence is
not an appropriate prerequisite for completing the ratified manual-intake specification. Link
the actual remaining FB-05/Q9 criteria instead of closing them as a side effect of backlog intake.

### Parent-first decision and Lane A follow-up

| Order / dependency | Judge disposition sought | Lane A action | Acceptance / failure example |
|---|---|---|---|
| 1 / none | Accept distinct capability identity, as already requested | Check live and pending IDs; register through Modular_PRD §2.5.2 | One canonical row with unique ID; reusing B-071's pending number without reconciliation fails |
| 2 / 1 | Accept explicit separation from existing requirements | Correct G105 and INTELLIGENCE_LAYER mappings; record links to CR-14, scoring context and PBL-06 with their actual relationships | Existing CR-14 remains traceable and manual; no old item closes merely because the new row exists |
| 3 / 1–2 | Accept unranked backlog disposition | Record source request and readiness status through D-188; no new NG exclusion invented solely for table symmetry | No sprint, priority, activation or build implied by registration |
| 4 / 1–3 | Accept bounded documentation propagation | Register decision; assess D-54 Build Spec/Inventory applicability; update affected cross-references and graph fragments | Owning tier contains the fact; handoff is a transaction, not the live capability register |
| 5 / committed intake | Independent acceptance of this handoff | Verify named row, semantic separation, source corrections and graph coverage at a real revision | B-081 may close for successful intake without waiting for future feature implementation |

The already authorized manual FR-01 documentation proposal can proceed independently. Its open
actor/authority and author/date questions belong in that packet; the new AI capability must not
become a prerequisite for manual intake. Checker hardening remains the existing D-192 follow-up.

### Cross-reference review scope

* **Modular_PRD:** register the new identity; retain CR-14/Q9 manual-contract follow-up and the
  separate CR-06/PBL-06 meanings. Never edit the frozen Project PRD.
* **Storyboard, story panels, sequence/UML and data-flow views:** current-use manual input flows
  remain the baseline. Do not add an AI box to them on the strength of a backlog request. Link the
  future capability only where explaining deferred alternatives helps; no new diagram is required.
* **Functional specs/module data partition:** remain unchanged by identity intake. The separately
  authorized manual proposal still owns the shared package and M-POC context boundary.
* **Encyclopedia:** Entry 06 needs the already named CR-14 impact review. Entry 02 also declares
  Addendum §2.4 as a dependency and therefore needs an impact assessment after ratification; its
  ledger still says no change since v12. Entry 03 covers scoring and should be assessed for any
  new semantic cross-reference. Assess first; do not claim all entries need rewriting or hosted parity.
* **Tracking:** D-54 requires propagation when its artifact/scope triggers apply; state unaffected
  tiers explicitly. Identity registration does not itself authorize a new artifact, sprint or build.

### What is unclear and what would fail

The meaning and purpose of “scoring,” the relation between tagging and scoring, input provenance,
human confirmation, cost, quality and failure limits belong to future refinement. They do not
prevent recording the requested identity now. Keep one requested capability until refinement
shows independently useful parts; do not split it merely because its name contains two verbs.

Guaranteed failures here are against explicit review criteria: an ID collision is not a unique
identity; relabelling CR-14 as the new feature violates the Judge's separation; promoting a gate
solely from an AI score violates NG-10. No inevitable runtime failure or commercial outcome is
claimed for an unbuilt capability.

## What you did instead

Prepared this handoff as the authorized Lane B route to Lane A's owning documents. B-077,
B-079 and B-080 remain unchanged and retain their dispositions. Read graph metadata at clean
6d5ae54 (matching HEAD, stale false) and used Graphify query for navigation. This new handoff
postdates extraction and needs Lane A acknowledgement and graph coverage after commitment.
No governed source, capability row, graph fragment, code or workflow was edited; no commit or push.

## Approve / reject

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| Approve | §2.4/D-194 ratification consistency and B-080 closure record | Retain; no repeat ratification requested |
| Approve-with-conditions | New AI tagging/scoring capability intake | Phase 1 Lane A: allocate unique ID, register unranked, preserve separate identities |
| Approve-with-conditions | G105/INTELLIGENCE_LAYER and Encyclopedia impact references | Phase 1 documentation: correct active conflation and assess declared dependencies |
| Reject | Treating new backlog identity as CR-14 closure, rank or build authority | Keep manual-intake acceptance and future refinement independent |
| Defer | AI feature refinement and implementation | Existing feature-intake promotion process; no version/sprint assigned here |
