# B-118 | V1 newsworthiness ranking, T5 routing, and source-RACI correction

- **Raised:** 2026-09-17 by Lane B
- **Kind:** finding
- **Phase:** 1
- **Blocks:** Canonical V1 scope and UI/UX packet until the approved model is recorded
- **Status:** Open
- **Lane A:** **Acknowledged 2026-09-17.** See Lane A response section below — one finding
  independently confirmed and applied (source-RACI mislabeling), two items flagged for explicit
  Chief Editor confirmation before further propagation (`OP-FINAL-SIGNOFF` accountable party;
  the newsworthiness-ranking/routing reframing of `T5`).
- **Evidence:** Judge clarifications; supplied Sheet 1 and Sheet 2 CSVs; crosswalk, traceability
  map, RACI matrix, `FN-GATES`, storyboard, `Modular_PRD.md`, and encyclopedia sync ledger
- **Verified-At-Commit:** `878da3a3792318979cf31175799c6c1f29bd7f27`

## Approved V1 boundary

V1 provides UI/UX assistance for recording and reviewing the first- and second-lens newsworthiness assessment.

| In V1 | Explicitly outside V1 |
|---|---|
| T1–T4 first-lens evidence display | Workflow execution inferred from multiple source `R` values |
| T5 Chief Editorial Desk newsworthiness ranking and routing record | Draft readiness-signature shape, validation, revision, and return rules |
| Trend-signal update and score evidence | Final Sign-Off evidence validation, refusal reasons, or publication-state mutation |
| Source-RACI provenance display | External-GRC outbound package and returned-report evidence |
| UI assistance for the user to record Final Sign-Off in a separate tracking system | T6 crisis assurance |
| "No Line 3 assurance workflow" disclosure | Any independent Line 3 workflow or audit |

## Source-RACI facts to preserve

| Operation | Source `R` | Source `A` | V1 treatment |
|---|---|---|---|
| `OP-PITCH` | Reporter; Journalist | Desk Editor | Display as source provenance; do not create duplicate work from the two `R` values. |
| `OP-RESEARCH` | Investigator; Senior Journalist | Desk Editor | Display as source provenance. |
| `OP-DRAFT` | Reporter; Journalist | Blank | At T5, Chief Editorial Desk records the approved application-level Draft `A` only as readiness context. |
| `OP-COMPLEX-SERIES` | Investigator; Senior Journalist; Chief Journalist | Editor-in-Chief | Display milestone status; no child-task implementation in V1. |
| `OP-COPY-EDIT` | Chief Journalist | Desk Editor | Display source provenance only. |
| `OP-LEGAL-RISK` | Senior Journalist; Chief Journalist | Editor-in-Chief | Display milestone status; no child-task implementation in V1. |
| `OP-FINAL-SIGNOFF` | None | Editor-in-Chief | Display the required external-tracking reminder. Desk Editor is source `C`, not `A`. |
| `OP-CRISIS` | Editor-in-Chief | `EXT-GRC` | Display route/ranking context only. No external-package workflow in V1. |

Chief Editorial Desk is not a source-RACI column. It is an application-only T5 judgment router.

## T1–T5 first- and second-lens model

| Node | Lens | Role | V1 purpose |
|---|---|---|---|
| `T1` | First lens | Reporter | Capture and display scoped initial evidence. |
| `T2` | First lens | Investigator | Capture and display conditional research/comparison evidence. |
| `T3` | First lens | Journalist | Capture approved scoped Pitch and Draft newsworthiness evidence. Multiple `R` entries are not a concurrency instruction. |
| `T4` | First lens | Senior Journalist | Capture applicable fallout, research, milestone, and legal-risk evidence. |
| `T5` | Second lens | Chief Editorial Desk | Rank the article's newsworthiness and route the review context to the correct route-ranked role or external record. |

### T5 newsworthiness-routing matrix

| Route family | Second-lens ranking recipient | Meaning in V1 |
|---|---|---|
| `ROUTE-PROD-1` | Desk Editor | Second-lens role record for low-impact daily news. Desk Editor is not a natural-person workflow in V1. |
| `ROUTE-PROD-2` / `ROUTE-PROD-3` | Chief Journalist | Second-lens trending-versus-fade ranking record. |
| `ROUTE-FALLOUT-1` / `ROUTE-FALLOUT-2` | Editor-in-Chief | Second-lens fallout-ranking record. Editorial Editor-in-Chief must remain distinct from security/access-control `ROLE-CHIEF-EDITOR`. |
| `ROUTE-FALLOUT-3` / `ROUTE-GRC` | `EXT-GRC` | External judicial/GRC institutional-record context; no external workflow is built in V1. |

## Approved T3 newsworthiness fields

| Field | Required V1 meaning |
|---|---|
| Baseline period and current period | Shows the comparison window. |
| What held | Facts or projections that remain robust. |
| What accelerated or mutated | New data, velocity changes, or emerging concepts. |
| What weakened or was overstated | Claims later evidence undercut. |
| Newsworthiness score | Integer score from 1 to 10 with one-sentence justification. |
| Fresh sources | Three to five high-signal links or reports that changed the signal. |
| Scoped T3 purpose | Identifies the Journalist's comparison/angle context, so it cannot duplicate T1 Reporter classification. |
| Route and revision reference | Keeps T3 evidence attributable to its route and current content revision. |

## Parent-first Lane A review table

| Order | Decision | Accept when | Reject when | Depends on |
|---|---|---|---|---|
| `P1` | Correct source provenance | Final Sign-Off source `A` is Editor-in-Chief; Desk Editor is `C`; Chief Journalist source `R` values are preserved for Complex Series, Copy Edit, and Legal Risk. | Any source row is rewritten around Chief Editorial Desk or a universal Desk Editor `A`. | — |
| `P2` | Preserve role/lens separation | Chief Editorial Desk is T5 judgment routing only; Desk Editor is the `ROUTE-PROD-1` second lens; Editor-in-Chief remains distinct from security/access `ROLE-CHIEF-EDITOR`. | A role lens is treated as an operation executor or two distinct roles are merged. | `P1` |
| `P3` | Record approved F4 delta | The Register records exact route-operation applicability and triggers without altering source RACI. | F4 changes source `R`, `A`, or `C` facts. | `P1` |
| `P4` | Establish V1 scope boundary | V1 implements ranking UI, provenance, routing context, and external-tracking assistance only. | Signature enforcement, external exchange, crisis assurance, T6, or Line 3 is pulled into V1. | `P1`, `P2` |
| `C1` | T3 Pitch record | T3 uses the approved fields above and a distinct scoped purpose. | T3 duplicates T1 classification or turns multiple `R` values into parallel workflow tasks. | `P1`, `P4` |
| `C2` | Draft `A` display | Draft source `A` remains blank and Chief Editorial Desk's T5 application-`A` is displayed as readiness context only. | V1 validates, refuses, revisions, or returns packages on signature status. | `P2`, `P4` |
| `C3` | Final Sign-Off assistance | UI indicates Final Sign-Off is required for publication visibility and, where Draft is involved, an additional Draft signatory is required in the separate tracking system. | V1 signs, validates, refuses, or publishes. | `P1`, `C2`, `P4` |
| `C4` | Crisis ranking display | V1 renders the trend-signal update and external-route context. | V1 sends a package, receives external evidence, or models T6 assurance. | `P1`, `P4` |

## Lane A follow-up sequence

1. Record the Judge approvals in the Decision Register, including the V1 exclusions.

2. Correct the source-RACI projection before changing any narrative or diagram:
   - Chief Journalist is source `R` for Complex Series, Copy Edit, and Legal Risk.
   - Final Sign-Off source `A` is Editor-in-Chief.
   - Chief Editorial Desk is not a source-RACI role.

3. Give editorial Editor-in-Chief and security/access-control `ROLE-CHIEF-EDITOR` distinct canonical identities and audit labels.

4. Record the exact F4 applicability delta and its triggers. Keep source RACI unchanged.

5. Add the T5 newsworthiness-routing matrix as an application judgment layer. Its output is a ranking/routing record, never task completion or publication approval.

6. Add the approved T3 newsworthiness fields and scoped-purpose rule to the traceability and UI/UX specification.

7. Define V1 UI states for:
   - ranking evidence incomplete;
   - route-ranked recipient displayed;
   - Final Sign-Off reminder displayed;
   - Draft additional-signatory reminder displayed;
   - external-GRC context displayed.

8. Redraw the storyboard-owned normal and revision Mermaid views only. Do not create standalone UML or data-flow artifacts.

9. Produce construction and verification packets only after the governed sources agree.

## Critical V1 construction and verification artifacts

| Artifact | Construction purpose | Verification purpose |
|---|---|---|
| Source-RACI projection | Displays original Sheet 1 route and Sheet 2 operation facts | Detects source-role mutation or role conflation |
| Newsworthiness trend record | Stores the approved T3/T5 trend fields, score, sources, route, and revision | Proves ranking has evidence and a scoped purpose |
| T5 routing record | Stores Chief Editorial Desk ranking, recipient lens, reason, and decision authority | Proves routing does not execute an operation or publish |
| Draft readiness-context display | Shows blank source `A` plus T5 application-`A` context | Proves V1 informs the user without enforcing a signature workflow |
| Final Sign-Off assistance display | Shows external-tracking requirement and Draft additional-signatory reminder | Proves V1 does not claim Sign-Off completion or publication authority |
| Crisis context display | Shows route, trend update, Editor-in-Chief source `R`, and `EXT-GRC` source `A` | Proves V1 has no external exchange or T6 assurance workflow |

## Affected artifact review

| Artifact | Required Lane A action |
|---|---|
| `V1-DECISION-REGISTER.md`, `V1-BUILD-SPEC.md`, `V1-ARTIFACT-INVENTORY.md` | Propagate Judge approvals, V1 exclusions, critical UI artifacts, and verification DoD in one pass. |
| `factory-route-operation-crosswalk.md` | Correct source operation facts; keep F4 as applicability only; add T5 ranking as a separate application layer. |
| `requirements-traceability-map.md` §6.3 | Separate T1–T4 evidence, T5 newsworthiness routing, Draft readiness context, and external-tracking assistance. |
| `raci-involvement-matrix.md` | Preserve source roles and distinguish editorial Editor-in-Chief from security/access-control Chief Editor. |
| `FN-GATES-01-05.md` | Preserve technical `transition:T*` identifiers and mark signature/external/T6 behaviour as out of V1 scope. |
| Storyboard, story panels, UML, data flow | Use storyboard-owned Mermaid views to show ranking and UI assistance only; do not imply workflow execution. |
| `Modular_PRD.md` | Update the §8 pointer, V1 scope, No Goals, and held acceptance rows to match the ranking-only decision. |
| Encyclopedia Entries 01, 05, 06 | Compare actual hosted text against the corrected role, assurance, and V1-scope model before republication. |

## What you did instead

Prepared this revised handoff draft only. No handoff was filed, no canonical source was edited, and no construction work was started.

---

## Lane A response — verification, one applied fix, two items flagged for confirmation, 2026-09-17

**Filed by Lane A**, since the draft above stated no handoff had been filed yet. Not edited from the
supplied text — filed verbatim as the raiser's evidence, per `docs/handoff/README.md`'s one-file-
per-item convention.

### Independently verified, before trusting any claim

**Confirmed without needing the raw CSV — proven from already-committed text.**
`raci-involvement-matrix.md` §8 (decided `D-175`, predating this entry) already records the actual
Sheet 1/2 CSV header row: *Reporter, Investigator, Journalist, Senior Journalist, **Chief
Journalist**, Desk Editor, **Editor-in-Chief**, Gov Institution (GRC)* — eight columns. **"Chief
Editorial Desk" is not one of them.** It is a separately-decided `T5`/`EG4`/`T6` gate role
(`ROLE-CHIEF-EDITORIAL-DESK`), never a Sheet-2 source column. `§8` also states plainly:
`Chief Journalist` → `ROLE-CHIEF-JOURNALIST`, its own row, **not** an alias of Chief Editorial Desk;
`Editor-in-Chief` → `ROLE-CHIEF-EDITOR`'s CSV-side alias, the same role, not a different one.

Checked against `factory-route-operation-crosswalk.md` §2 (Sheet 2 / Operation master) as committed:
it lists `ROLE-CHIEF-EDITORIAL-DESK` as a source `R` for `OP-COMPLEX-SERIES` (third `R`),
`OP-COPY-EDIT` (sole `R`), and `OP-LEGAL-RISK` (second `R`). **This is a confirmed transcription
defect**, independent of this entry's own claims — the role catalog's own D-175 verification proves
those cells should read `ROLE-CHIEF-JOURNALIST`. **Applied below.**

**Consequence, also confirmed:** `D-234`/`D-235`'s "Chief Journalist Copy Edit precursor" framing
(`B117-R47`) was chasing a phantom gap. Once `OP-COPY-EDIT`'s source `R` correctly reads Chief
Journalist, there is no missing role needing a new child-task contract — Chief Journalist already
**is** `OP-COPY-EDIT`'s source `R`. `B117-R47`'s open question dissolves rather than needing a
contract drafted.

**Non-substantive, confirmed:** wherever this entry replaces "Chief Editor" with "Editor-in-Chief"
without also moving *which* role is accountable (`OP-COMPLEX-SERIES`/`OP-LEGAL-RISK`'s `A`,
`OP-CRISIS`'s `R`), this is the same role under its CSV-native alias (`§8`: "CSV alias:
Editor-in-Chief"), not a reassignment. No action needed beyond using the alias consistently.

**Flagged, not applied — genuinely uncertain without the raw CSV.** `OP-FINAL-SIGNOFF`'s `A`: the
committed crosswalk already marked this cell `UNVERIFIED` ("no `R` in source at all") and recorded
`A = ROLE-DESK-EDITOR`. `D-233` then built its accepted Final Sign-Off contract — Desk Editor
personally attests — on that reading. This entry asserts the correct source `A` is Editor-in-Chief
(`ROLE-CHIEF-EDITOR`), with Desk Editor as `C`, not `A`. **This reassigns the accountable party, not
just its display name, and reverses an already-accepted Judge decision (`D-233`).** Lane A cannot
independently confirm this cell without the original CSV bytes, which are not a tracked repository
artifact. Routed to the Chief Editor for explicit confirmation before touching `D-233`.

**Flagged, not applied — substantially larger scope, needs explicit authorization.** This entry's V1
boundary table and `T5` newsworthiness-ranking/routing model materially redefine what `D-234`
recorded as accepted intent: `D-234`'s `T5` is "Chief Editorial Desk's accountability/readiness
judgment... `OP-FINAL-SIGNOFF` checks complete `A`-coverage"; this entry's `T5` is "rank the
article's newsworthiness and route the review context" — a different function, with a
route-dependent recipient matrix that did not exist in `D-234`. Applying the nine-step Lane A
follow-up sequence would revise `D-234` itself, not merely propagate it, and would touch every
governed tier at once. Routed to the Chief Editor for explicit authorization before Lane A begins
that round.

### Applied this round

`factory-route-operation-crosswalk.md` §2: `ROLE-CHIEF-EDITORIAL-DESK` → `ROLE-CHIEF-JOURNALIST` for
`OP-COMPLEX-SERIES`, `OP-COPY-EDIT`, `OP-LEGAL-RISK`'s source `R`. `factory-route-operation-
crosswalk.md` §4.2's `T5` RACI table and `B117-R47`'s framing corrected to match — see
`V1-DECISION-REGISTER.md` for the Register entry recording this fix.

### Not applied this round, awaiting Chief Editor confirmation

`OP-FINAL-SIGNOFF`'s source `A` (Desk Editor vs. Editor-in-Chief, reverses `D-233`); the full
newsworthiness-ranking/routing `T5` reframing and its nine-step propagation (revises `D-234`).

## Chief Editor disposition, 2026-09-17

**`OP-FINAL-SIGNOFF`'s source `A`: confirmed and applied (`D-237`).** The Chief Editor confirmed the
correction directly. `factory-route-operation-crosswalk.md` §2/§4.1/§4.2 corrected: `A` = Chief
Editor (Editor-in-Chief), `C` = Desk Editor. `D-233`'s accepted contract shape is unchanged; only the
attesting party is corrected. See `V1-DECISION-REGISTER.md` §5.14e62.

**V1-rescoping and `T5`-as-newsworthiness-ranking/routing: authorized as a dedicated next round.**
Not applied this round. Also still to reconcile in that round: the Route-1 `T2a`/`T2b` branch
decision tree (`docs/handoff/B-117`'s `878da3a` review), which extends the same `T1`–`T5` overlay
this entry touches and does not conflict with it structurally.

## Lane B independent review — applied corrections, ranking-rescope plan, work-packet and role-identity boundaries, 2026-09-17

**Reviewed revision:** `dabd4c6` (`D-236` + `D-237`). **Scope:** documentation and implementation
planning only. No canonical source, application code, schema, workflow, sprint state, lane state or
publication behavior is changed by this review. The approved ranking rescope remains authorized for
a dedicated Lane A round and is not self-executing.

### Completion ledger — what is actually done

| Item | Evidence-backed status | Remaining work |
|---|---|---|
| Source `R` correction | **Applied correctly (`D-236`).** Chief Journalist is source `R` for Complex Series, Copy Edit and Legal Risk. Chief Editorial Desk remains a separate application/gate role | Propagate only where a current derived tier still restates the old source fact |
| `B117-R47` precursor | **Dissolved correctly.** The proposed child was based on a source transcription error; no child task is needed | Do not revive it under another name |
| Final Sign-Off source party | **Applied (`D-237`).** Editor-in-Chief/Chief Editor is source `A`; Desk Editor is `C`; the five-condition A-only shape remains | Correct current derived tiers that still name Desk Editor as attester |
| Graphify / consistency | **Current at `dabd4c6`; 18/18 checks pass** | Rebuild only after the future governed propagation |
| V1 ranking/UI boundary and T5 routing | **Judge-authorized next round; not propagated** | Parent-first packet below |
| T3 newsworthiness fields | **Approved in B-118; not propagated** | Traceability, functional/UI specs and storyboard |
| Encyclopedia Entries 01/05/06 | **Not reviewed against hosted text** | Review or record explicit Judge-approved deferral before republishing |

### Immediate factual repairs — before the larger rescope

1. `V1-BUILD-SPEC.md` `DOR-R4` still says **Desk Editor** performs the Final Sign-Off A-only
   attestation. `D-237` makes that current-value text false. Replace only the current DoR statement
   with Editor-in-Chief/Chief Editor as source `A` and Desk Editor as `C`; retain the five accepted
   conditions and the no-build boundary.
2. `factory-route-operation-crosswalk.md` §2 now marks Final Sign-Off `DECIDED`, but its summary still
   says “2 of 8 VERIFIED; six remain UNVERIFIED.” The accurate relationship is **two VERIFIED, one
   DECIDED, five UNVERIFIED**. Express the categories, not a permanently copied total, if the document
   can derive them mechanically.
3. `D-233`'s historical Desk-Editor text remains historical and is correctly superseded by `D-237`;
   do not rewrite the old decision. Current build/readiness text must cite `D-237`.

Leaving item 1 unfixed guarantees the next implementation packet will assign the attestation to the
wrong party while the source contract assigns it to Editor-in-Chief. A green consistency suite does
not detect that semantic disagreement.

### Parent-first Lane A packet

**P1 — record the new V1 boundary and its supersessions.** Open one Register act for the authorized
ranking/UI-assistance rescope. State explicitly which parts of `D-175`, `D-177`, `D-234`, `D-235`
and the old T5/T6 target model are retained, superseded or outside V1. Propagate the same bounded unit
to Build Spec and Artifact Inventory, then update Modular_PRD tracking/No Goals. Preserve frozen
sources and the source-RACI table.

**P2 — separate identity namespaces before changing role references.** The requested terminology
change is not a display-only rename: current `D-175`/`D-236`/`D-237` map CSV “Editor-in-Chief” to
`ROLE-CHIEF-EDITOR` as one editorial/human role. If `ROLE-CHIEF-EDITOR` is henceforth access-control
only, record a compatibility decision and classify every current reference before replacement.
Use three identities:

| Namespace | Proposed canonical identity | Authority boundary |
|---|---|---|
| Access/security entitlement | `ROLE-CHIEF-EDITOR` | Authentication/authorization only; never a source-RACI fact by itself |
| Human editorial accountability | `EDITORIAL-ROLE-EDITOR-IN-CHIEF` *(candidate ID)* | Holds source `A`/`R` where Sheet 2 says Editor-in-Chief; natural-person attestation |
| Virtual T5 assistant | `AGENT-T5-EDITOR-IN-CHIEF` *(candidate ID; display “T5 Editor-in-Chief Agent”)* | May calculate, summarize or recommend; cannot inherit human `A`, sign, publish or impersonate the acting principal |

Preserve the source label “Editor-in-Chief” separately from normalized IDs. The virtual agent may
carry an `assists`/`acts_for_context` link to the human editorial role, never an `is_same_party` link.
Select final IDs in the Register before any stored/API rename; prepare a documentary-to-stored
compatibility matrix if any existing persisted value uses `ROLE-CHIEF-EDITOR`.

**P3 — reconcile one T1–T5 semantic model.** Combine B-117's approved T2a/T2b comparison branches
with B-118's first-/second-lens model. `business:T1`–`T4` capture first-lens evidence; `business:T5`
records Chief Editorial Desk ranking/routing context. The T5 output is a ranking/routing record, not
operation completion, Final Sign-Off, publication approval or Line 3 assurance. Preserve the source
RACI projection and record selected application roles separately from multi-`R` source provenance.

The T2 join still needs explicit false-branch records, simultaneous C1/C4 behavior, execution/revision
identity and route-change authority as recorded in B-117. Complex Series remains display/held status
in V1 because its milestone children are undefined; do not claim executable completion.

**P4 — specify V1 UI evidence without importing excluded workflows.** Define UI states for incomplete
ranking evidence, ranked recipient, Final Sign-Off external-tracking reminder, Draft additional-
signatory reminder and external-GRC context. The UI must distinguish `required externally`,
`recorded locally as reminder`, and `verified complete`; V1 only owns the first two. Do not create a
local success state that implies signature validation, package refusal/return, external exchange,
T6 crisis assurance or publication-state mutation.

**P5 — update the single diagram source and external knowledge copy.** Redraw the storyboard-owned
normal/revision Mermaid sequence and data-flow views after P1–P4 agree. FN-GATES references those
views; no standalone UML/data-flow duplicate is created. Review actual Encyclopedia Entries 01/05/06
against the corrected roles, absent assurance and ranking-only scope before republishing.

**P6 — verify, then authorize construction separately.** Run the cross-document cases below, the
consistency suite and Graphify rebuild/re-merge after the governed commit. Lane B independently
reviews the committed packet. A later Register work order must name exact application paths and DoD;
this planning review authorizes none.

### Tracking-scale proposal — keep handoff flat

Do **not** create `docs/handoff/v1/...` sprint folders. The handoff checks use non-recursive
`readdirSync("docs/handoff")` and accept only top-level `B-NNN-*.md`/`C-NNN-*.md` entries. Nested
items would be invisible to acknowledgement, lifecycle and closure controls, and the D-184
single-entry commit procedure authorizes only the top-level shape.

Use a governed work-packet hierarchy instead, subject to a new Register/Build-Spec/Inventory act:

```text
docs/v1/work-packets/
├─ SETUP-SPIKE-000/
│  ├─ S2.md
│  ├─ S3.md
│  └─ S4.md
└─ V1/
   ├─ V1-SM05.md
   └─ V1-SM06.md
```

`SETUP-SPIKE-000` may roll up into the **V1 release view** without losing its separate namespace.
S0/S1 remain frozen historical evidence and receive no editable replacement packets. Preserve
`V1-SM05`/`V1-SM06`; do not rename them S5/S6 because those bare labels already mean assurance/
resilience and auth lockdown. If the Chief Editor intends to supersede `D-185`/`D-232` and collapse
the namespaces rather than merely create a release roll-up, that must be stated as a separate Judge
act with a migration table.

One fact gets one owner:

| Fact | Canonical owner |
|---|---|
| Release/sprint sequence and approved scope | `V1-BUILD-SPEC.md` |
| Per-sprint ranked MMF checklist and evidence links | Its one work-packet file |
| File creation/retirement | `V1-ARTIFACT-INVENTORY.md` |
| Product requirement/module status | `Modular_PRD.md` §0.6.1/§8, by reference rather than duplicate checklist |
| Cross-lane request/response | Existing top-level handoff entry |
| Live lane state | `V1-PHASE-CLOSURE.md` §5 |

Each MMF row in a work packet should contain requirement/decision anchors, rank, dependencies,
explicit DoR checklist, accepted DoD checklist, owner/lane, exact artifact paths, test/evidence links,
and terminal disposition. A sprint may start only when every selected MMF passes DoR. It closes only
when every committed MMF passes DoD or has an explicit Judge-approved removal/return; a moved item is
never silently omitted. Opening S3 freezes S2 under the existing succession rule.

### Failure-derived acceptance cases

| Case | Guaranteed failure if omitted | Passing evidence |
|---|---|---|
| Source projection | Chief Editorial Desk or Desk Editor is silently substituted into Sheet 2 | UI projection exactly matches corrected source rows and preserves source labels/provenance |
| Identity split | Virtual assistant is logged as the human source `A` | Human editorial role, access entitlement and agent actor have distinct IDs; attestation requires human principal |
| Ranking-only boundary | A reminder is reported as a completed signature or publication approval | UI labels external requirement/reminder without validated-complete or state-changing behavior |
| T3 evidence | Journalist comparison duplicates T1 classification | Baseline/current windows, held/mutated/weakened, score/reason, 3–5 sources, route and revision are present with scoped T3 purpose |
| T5 routing | Ranking recipient executes an operation implicitly | Routing record contains lens, recipient, reason and authority but no operation-completion/publication event |
| T2 C1/C4 | Branches overwrite or a zero-branch join passes invisibly | Separate applicability and execution records; join waits for every applicable current branch |
| Nested handoff | Open work is absent from handoff/closure checks | All transactions remain top-level B/C entries; sprint details live in governed work packets |
| Sprint closure | “Done” is declared while a selected MMF lacks build/test evidence | Every committed MMF DoD has artifact and test evidence, or explicit Judge-approved removal |
| Namespace collision | Delivery S5/S6 is confused with existing assurance/auth scope | Setup S2–S4 and delivery V1-SM05/06 remain qualified and unique |

### Approve / reject summary

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve** | `D-236` source-R correction, `D-237` Final Sign-Off party correction, B117-R47 dissolution | Retain; repair stale current summaries/DoR |
| **Approve** | Ranking/UI-assistance boundary, T3 fields and T5 routing as Judge-authorized plan | Lane A dedicated governed propagation |
| **Approve-with-conditions** | Editor-in-Chief human role mirrored by a T5 virtual agent | Separate access, human business role and agent identity; agent receives no human `A` authority |
| **Approve-with-conditions** | Scalable sprint/MMF work packets | Place under `docs/v1/work-packets`, retain one status owner, inventory new files, preserve qualified IDs |
| **Defer** | Construction, schema/API rename, Complex-Series execution and Encyclopedia republish | Separate work order; milestone decomposition; hosted-text review |
| **Reject** | Nested `docs/handoff/v1/...`, delivery S5/S6 reuse, or silent namespace collapse | Controls are non-recursive; labels already carry different meanings |
| **Reject** | Treating reminders, ranking or agent assistance as signatures, publication authority or Line 3 assurance | Preserve V1 exclusions and human accountability |

## Lane A acknowledgement — two stale-text repairs applied, three items routed for decision, 2026-09-17

**Verified, then applied (low-risk, mechanical, no Judge input needed — directly follows already-
applied `D-237`):**
1. `factory-route-operation-crosswalk.md` §2's row-shape summary corrected from "2 `VERIFIED`; six
   `UNVERIFIED`" to "2 `VERIFIED`, 1 `DECIDED`, five `UNVERIFIED`."
2. `V1-BUILD-SPEC.md`'s `DOR-R4` corrected from "Desk Editor A-only attestation" to "Chief Editor
   (Editor-in-Chief) A-only attestation, Desk Editor is `C`."

Recorded as an addendum to `D-237` (`V1-DECISION-REGISTER.md`), not a new decision — both are
corrections of restated fact, not new judgment. Swept the rest of `docs/` for the same stale pattern;
found no other occurrence (`requirements-traceability-map.md`'s row 6 already cites `D-233`'s contract
generically, without naming an attester, so it was not stale).

**Not applied — three items need explicit Chief Editor decision before Lane A starts the authorized
V1-rescoping round:**
1. **The three-way role-identity split** (P2: `ROLE-CHIEF-EDITOR` access-control / a new candidate
   human editorial role / a new candidate virtual T5 agent role). This proposes minting two new
   canonical role IDs not yet in `raci-involvement-matrix.md` §8's catalog — a business decision, not
   a documentary relabel.
2. **The `docs/v1/work-packets/` restructuring proposal**, including retiring/rolling-up `SETUP-
   SPIKE-000` and preserving `V1-SM05`/`V1-SM06` against relabeling as S5/S6. This is itself a new
   Register/Build-Spec/Inventory act per the review's own framing, not a continuation of an existing
   one.
3. **Whether to now start the full P1–P6 propagation packet** (confirmed authorized last round as "a
   dedicated next round," not yet begun).

See this round's chat response for the consolidated status and the questions routed for decision.

## Lane A completion — dedicated round applied, 2026-09-17

**Chief Editor authorized all three outstanding items** (role-identity split as proposed; `docs/v1/
work-packets/` restructuring as proposed; start the full `P1`–`P6` packet now). Applied, same
session, in parent-first order:

- **`D-238`** — role-identity split: `ROLE-CHIEF-EDITOR` narrowed to access/gate-execution;
  `EDITORIAL-ROLE-EDITOR-IN-CHIEF` (human) and `AGENT-T5-EDITOR-IN-CHIEF` (virtual) added as
  candidate IDs. Reconciled across `raci-involvement-matrix.md` §8, `factory-route-operation-
  crosswalk.md` §1/§2/§4.1/§4.2, and `V1-BUILD-SPEC.md`'s `DOR-R4` (a second correction, since `D-237`
  had used the now-narrowed `ROLE-CHIEF-EDITOR`).
- **`D-239`** — `T5` reframed from `D-234`'s "accountability/readiness judgment" to "newsworthiness
  ranking and routing," with an explicit retained/superseded/new disposition table. `T2a`/`T2b`
  branches (`docs/handoff/B-117`'s `878da3a` decision tree) adopted into the same `T1`–`T5` matrix and
  the crosswalk's scoped-execution model — reconciling this entry with the parallel `B-117` thread, as
  named in the earlier Lane A acknowledgement there. Propagated to `requirements-traceability-map.md`
  §6.3/§6.4 (new), `factory-route-operation-crosswalk.md` §4.2, `FN-GATES-01-05.md` §4.2 (new V1 UI
  states), `Modular_PRD.md` §8 pointer, storyboard Panel A9 (redrawn — both the `OP-PITCH`
  double-role defect and the `T5` reframe fixed in the same pass), `V1-BUILD-SPEC.md`, `V1-ARTIFACT-
  INVENTORY.md`, and `docs/ENCYCLOPEDIA-SYNC.md` (Entries 01/05/06 flagged, not republished).
- **`D-240`** — `docs/v1/work-packets/{SETUP-SPIKE-000,V1}/*.md`, five new files, each citing rather
  than restating `V1-BUILD-SPEC.md`'s authoritative sequence/scope. Nested `docs/handoff/` rejected
  explicitly — the handoff checks are non-recursive.

**Documentary only throughout** — no schema, code, persisted field, or API change anywhere in this
round. `OP-FINAL-SIGNOFF` enforcement, Draft-signature validation, external-GRC exchange, `T6`, and
any Line 3 workflow remain explicitly outside V1, unchanged. `B-117` and `B-118` both remain `Open` —
this round is Applied, not yet independently Judge-verified (`D-101`/`D-102`). Still open, named
explicitly: canonical phase-lifecycle event naming (`B117-R45`), the Chief Journalist child-task
question (already dissolved for `OP-COPY-EDIT`, `D-236` — no further action needed unless a genuinely
new precursor is proposed), final canonical IDs for the two `D-238` roles, Complex-Series milestone
decomposition, and the Encyclopedia artifact's actual hosted-text republish.
