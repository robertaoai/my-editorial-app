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
