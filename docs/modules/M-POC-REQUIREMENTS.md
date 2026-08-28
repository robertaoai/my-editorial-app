# `M-POC` — P0-EVR Professional Evidence Review · Module Requirements

**Module:** `M-POC`, indexed at `docs/Modular_PRD.md` §0.6.2
**Created:** 2026-08-22 · **Authorized by:** Chief Editor, `D-99`
**Status:** Requirements written. **No `SPECS` tier, no UX** — the Judge ruled there is not enough
clarity for tech-spec or UX, and this document stops where that ruling stops.

## 0. What this document is, and what it may not do

**It is the feature-group anchor an `Fn_Spec` requires.** `Modular_PRD` §0.6.2 indexes `M-POC`
and is a **pointer**; a pointer is not a feature group, so `Fn_Specs` could not be drafted from
it. **This document is that missing tier.**

**It may not:**

| | |
|---|---|
| Amend `M-MVP` | Everything in `Modular_PRD` §1–§12 is `M-MVP`'s. **No `FR`/`US`/`AC` id is reused, moved, or renumbered** |
| Authorize a build | Requirements are not a sprint. **No sprint, migration, config row, or code is authorized here** |
| Create monetization capability | **`NG-03` holds.** Payment is an **operating activity performed outside the application** — see `PR-08` |
| Touch frozen documents | `docs/PRD.md`, the Charter, `0001_init.sql` |
| Put `M-POC` fields in `AP-01`'s schema | **No `M-POC` field goes near `Q11`/`0002`** |

**ID namespace — new, chosen to collide with nothing** (`Modular_PRD` §0.5): `PO-xx` objectives ·
`PR-xx` requirements · `PU-xx` user stories · `PA-xx` acceptance criteria · `PX-xx` exclusions ·
`PB-xx` boundaries.

## 1. Origin — why this module may exist while `NG-03` holds

**`M-POC` was chartered as a portfolio-level business-continuity measure, not as a product
feature.** That is the whole of its authority, and it is why it is not a `NG-03` violation.

| Source | Contributes |
|---|---|
| `docs/governance/board-proposal-professional-evidence-review-poc.md` | The P0-EVR manual lane, its offer, and its exclusions |
| `G7a` | Charter the manual lane — phase **T3** |
| `B-P0-06` | Ten boundaries that must carry real values before engagements |
| `D-59` | `/request-brief` — the POC path; `/editorial` is `M-MVP`'s |
| `D-96` | One engine, two exposures; **one sellable item** |

**The board proposal's own framing, preserved:** *"manual invoicing/payment is an operating
activity, not a product feature."* **`M-POC` is a way of working, supported by the existing
product — not a second product.**

## 2. Objectives

| ID | Objective |
|---|---|
| `PO-01` | Gather **commercial evidence** that professional evidence review is wanted and payable, **before** the build justifies itself |
| `PO-02` | Test whether the **Reporter gate's judgments are useful to a paying professional**, using the unchanged pipeline |
| `PO-03` | Produce a **client package that is explainable without exposing the publishable article** |
| `PO-04` | Keep the editorial engine **provably unforked** — every engagement traverses the same gates |

## 3. What does not change — the invariance requirement

**`PR-01` — One engine, two exposures.** An `M-POC` engagement enters at the same application
boundary (`M-MVP`'s URL intake), traverses **`Reported → Investigated → Journaled → Senior
Reviewed → Chief Approved` unchanged**, and is subject to the same gate-sequence enforcement and
transition logging. **No `M-POC` state, gate, or transition is added.**

> **This is the standing invariant *"never fork the pipeline"* stated as a module requirement**,
> so that a future `M-POC` spec cannot quietly introduce a parallel path.

**`PR-02` — No new core records.** Articles, topics, sources, trend signals, workflow transitions
and publication targets are unchanged. **`M-POC` adds no table and no column to `AP-01`'s schema.**

**`PR-03` — Single Chief Editor account boundary holds.** Commissioning professionals **do not
receive application accounts**. `NG-02` is untouched.

> **Backlogged, not built (`D-145`, 2026-08-28).** A scoped, read-only client account — limited to
> the commissioning professional's own engagement's client package — was raised and evaluated.
> **`NG-02` is Charter-level** (`Modular_PRD.md` §2.5), confirmed standing as recently as `D-79`,
> and outranks this document; `PR-03` cannot lift it. Recorded here as the next-available-sprint
> candidate `NG-02`'s own row already anticipates — *"nothing forecloses later accounts for
> multiple natural persons"* — not as a v1 requirement.

## 4. The engagement — behaviour requirements

| ID | Requirement |
|---|---|
| `PR-04` | A **trigger** is a lead, not evidence. **Topic-only triggers are resolved to a URL manually before application intake** — the intake boundary does not move |
| `PR-05` | Exactly **one sellable item**: **publicly-expandable content with a report** (`D-96`). No catalogue, no tiers, no bundles |
| `PR-06` | Every engagement produces **two separated folders** under one engagement identifier — see §5 |
| `PR-07` | The **Chief Editor records `Publish` / `Hold` / `Escalate`**; no autonomous publication and no unattended approval |
| `PR-08` | **Payment is an operating activity performed outside the application.** A third-party transaction identifier is the trace. **No in-app payment, cart, subscription, or account-claiming capability exists or is specified** |
| `PR-09` | A **Client-First Exclusivity Window** is recorded per engagement, with an explicit hold/release status |
| `PR-10` | An **originality / prior-publication search** is performed and its record retained, with named sign-off |
| `PR-14` | **Added `D-145`, 2026-08-28.** When an engagement reaches full pipeline completion — the same completion `PR-01`'s unforked engine already requires for an ordinary article — the Chief Editor's existing UI shows **both** folders together: the client package and the publishable article, under the one engagement identifier (`PA-02`). `PR-12`'s separation is unaffected — this is Chief-Editor **visibility** of both folders, not the article moving into the client-facing one |
| `PR-15` | **Added `D-145`, 2026-08-28.** `MockPublished` (`publication_event_type`, already fixed and non-configurable per `FN-PUBLICATION-09-10-13.md` §3.3.2) is reserved for a `M-POC`-engaged article, and fires **only once `PR-14`'s full-completion condition holds** — evidence sufficient to have drafted a genuinely publishable article, without the article being pushed to a real publish target |

## 5. Folder separation — the requirement most likely to be got wrong

**`PR-11` — The client package and the publishable article are separated, and the separation is
the deliverable.**

| `POC` folder — client package | `MVP` folder — internal |
|---|---|
| topic, intended audience, trigger provenance · trend/relevance assessment · structured material claims · **claim-to-evidence ledger** · source-quality and relevance review · counterarguments and alternative interpretations · uncertainty and missing-evidence assessment · originality search record · exclusivity window record · **explainable public content** · reusable publishing template · Chief Editor `Publish`/`Hold`/`Escalate` record | the **final publishable article** · the folder-separation / package-validation record · the exclusivity hold/release status |

**`PR-12` — The publishable article must not be copied, linked, embedded, or exported into the
client-facing `POC` folder.** Both folders carry the same engagement identifier.

> **`PR-12` is the module's sharpest constraint.** The client pays for evidence review and
> receives explainable content; **the publishable article is `M-MVP`'s output and stays there.**
> A spec that satisfies every other requirement and leaks the article has failed the module.

## 6. User stories

| ID | Story |
|---|---|
| `PU-01` | As a **commissioning professional**, I contribute a topic, context, experience and source knowledge, so that I receive an evidence-reviewed, explainable package I can act on |
| `PU-02` | As the **Chief Editor**, I run the engagement through the unchanged pipeline, so that PoC evidence is comparable with `M-MVP` output rather than a special case |
| `PU-03` | As the **Board**, I see risk boundaries and consequences, so that viability is judged on evidence rather than enthusiasm |

## 7. Acceptance criteria

| ID | Criterion |
|---|---|
| `PA-01` | An engagement's transitions appear in `workflow_transitions` **indistinguishable in structure** from an `M-MVP` article's |
| `PA-02` | Both folders exist under one engagement identifier, and **the publishable article appears in exactly one of them** |
| `PA-03` | The `Publish`/`Hold`/`Escalate` record names a human decision-maker |
| `PA-04` | The exclusivity window's hold/release status is recorded and current |
| `PA-05` | No application account exists for any commissioning professional |
| `PA-06` | **No payment capability exists in the application** — the payment trace is an external identifier |
| `PA-07` | **Added `D-145`.** At full pipeline completion, the Chief-Editor UI shows both folders for the engagement, under one identifier, without the publishable article entering the client-facing folder |
| `PA-08` | **Added `D-145`.** For a `M-POC`-engaged article, `MockPublished` is recorded if and only if `PA-07`'s full-completion condition holds |

## 8. Exclusions — carried verbatim in substance from the board proposal §8.2

`PX-01` autonomous publication or unattended approval · `PX-02` customer accounts or self-service
onboarding · `PX-03` in-app payment or subscription features · `PX-04` automated Reddit, Quora,
search-engine, LinkedIn or other platform collection · `PX-05` personalized legal, medical,
investment or other regulated advice · `PX-06` high-liability allegations without a viable
external-review route.

**Also excluded, by `D-96`:** `cart_id` · `DEFAULT_POC_PAYMENT_PROVIDER` · `PAYMENT_EVENT_DRAIN` ·
`POC_OBLIGATION_DRAIN` · asynchronous account claiming · delivery portal · provider-ID versus
editorial-ID separation. **`B-008`'s model is not adopted.**

**`delivery portal` re-evaluated and left excluded (`D-145`, 2026-08-28).** A scoped client
delivery view was raised; it is gated by `NG-02` (Charter, "one Chief Editor account"), not by
this list, and `NG-02` outranks it — see the `PR-03` note in §3. Left here unchanged because the
gate is Charter-level, not because this exclusion list was re-affirmed on its own terms.

## 9. Boundaries that must carry real values before any engagement — `B-P0-06`

**`PR-13` — No engagement begins until all ten hold a real value.** They are decisions and
numbers; **none requires a build.**

`PB-01` topic in/out list · `PB-02` spend cap · `PB-03` time stop-loss · `PB-04` payment mechanics
· `PB-05` cohort and WIP limit · `PB-06` originality-search sign-off · `PB-07` exclusivity window
default · `PB-08` named escalation contact · `PB-09` `Q7` legal placeholder · `PB-10` fixed review
date.

**All ten are currently unset.** That is not a defect in this document — it is `B-P0-06`'s open
state, and `PR-13` makes it a gate rather than an oversight.

## 10. Dependencies and open items

| Item | State |
|---|---|
| `G7a` — charter the manual lane | **Open**, phase T3 |
| `B-P0-06` — the ten boundaries | **Open** — `PR-13` gates on them |
| `Q7` — `SEC-04`/`SEC-05` ownership | **Open, no owner exists** — `PB-09` carries it |
| `C-15` — distinct origins before real client data | **Open** — path separation is a v1 arrangement, not the end state |
| Tech-spec and UX | **Deliberately absent.** Judge ruling: insufficient clarity |

## 11. What comes next

**One artifact: `M-POC`'s `Fn_Spec`**, drafted from §3–§5 as a feature group. **Nothing below the
`Fn_Specs` tier** — no `SPECS`, no `ux/`, no sprint, no migration — until the Judge says the
clarity exists.
