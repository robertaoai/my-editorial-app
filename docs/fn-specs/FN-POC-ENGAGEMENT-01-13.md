# `FN-POC-ENGAGEMENT` — `M-POC` engagement behaviour · `PR-01`–`PR-13`

**Module:** `M-POC` (`Modular_PRD` §0.6.2) · **Anchored to:** `docs/modules/M-POC-REQUIREMENTS.md`
**Created:** 2026-08-22 (`D-99`) · **Tier:** `Fn_Specs` — behaviour only
**Scope mark:** `[V1]` throughout — no section here is `[V1→V2]` or `[V2]`

> **Feature group, not a prose description.** The input is `M-POC`'s §3–§5: invariance, the
> engagement, and folder separation. **These three cannot function without each other** — the
> invariance requirement is what makes the engagement comparable, and the folder separation is
> what makes the engagement sellable without giving away `M-MVP`'s output. Splitting them would
> produce three specs that each restate the other two.

## 1. Overview

**`M-POC` is a way of working, supported by the existing product — not a second product.** An
engagement is a commissioned evidence review that traverses the **unchanged** editorial pipeline
and yields two separated folders: a client package of explainable evidence, and the internal
publishable article.

**Strategic alignment.** It gathers commercial evidence before the build justifies itself
(`PO-01`) while proving the engine is unforked (`PO-04`).

**User value.** The commissioning professional receives reviewed evidence they can act on; the
Chief Editor gets PoC evidence directly comparable with ordinary output.

## 2. User stories

`PU-01` commissioning professional · `PU-02` Chief Editor · `PU-03` Board — as stated in
`M-POC-REQUIREMENTS.md` §6, not restated here.

## 3. Requirements

### 3.1 Functional

| # | Behaviour |
|---|---|
| **F1** | An engagement is created by resolving a trigger to a **URL**, then entering that URL at the existing application intake. **The intake boundary does not move** (`PR-04`) |
| **F2** | The engagement traverses `Reported → Investigated → Journaled → Senior Reviewed → Chief Approved` **using the same gates, the same sequence enforcement, and the same transition logging as any article** (`PR-01`) |
| **F3** | Exactly one sellable item is produced: **publicly-expandable content with a report** (`PR-05`) |
| **F4** | At `Chief Approved`, a human records **`Publish` \| `Hold` \| `Escalate`**, naming the decision-maker (`PR-07`) |
| **F5** | Two folders are produced under **one engagement identifier** (`PR-06`, `PR-11`) |
| **F6** | An **exclusivity window** is recorded with an explicit hold/release status (`PR-09`) |
| **F7** | An **originality / prior-publication search** record is retained with named sign-off (`PR-10`) |
| **F8** | The **payment trace is an external transaction identifier**, recorded against the engagement (`PR-08`) |

### 3.2 Non-functional

| # | Constraint |
|---|---|
| **N1** | **No new core record type.** No table, no column, no state (`PR-02`) |
| **N2** | **No application account** for a commissioning professional (`PR-03`) |
| **N3** | An engagement's transitions must be **structurally indistinguishable** from an ordinary article's (`PA-01`) |

### 3.3 Constraints and assumptions

**Constraint.** `PR-13` — **no engagement begins until all ten `B-P0-06` boundaries hold real
values.** All ten are currently unset.

**Assumption.** The Chief Editor performs trigger resolution manually. **This is not an
automation gap to be closed later** — `PX-04` forbids automated platform collection.

## 4. Behaviour

### 4.1 The engagement lifecycle

```
trigger (a lead)
   │  manual resolution — Chief Editor
   ▼
URL entered at the existing intake ──► Reported ──► Investigated ──► Journaled
                                                                        │
                                    Chief Approved ◄── Senior Reviewed ◄┘
                                          │
                        Publish / Hold / Escalate  (human, named)
                                          │
                      ┌───────────────────┴───────────────────┐
                      ▼                                       ▼
              POC folder (client)                     MVP folder (internal)
              explainable content                     publishable article
              + evidence ledger                       + separation record
                      └──────── one engagement identifier ────┘
```

### 4.2 Folder separation — the behaviour that carries the module

**On reaching `Publish`, two folders are produced.** Their contents are enumerated in
`M-POC-REQUIREMENTS.md` §5 and are not restated here.

**The invariant, stated as behaviour:** *the publishable article must not be copied, linked,
embedded, or exported into the client-facing `POC` folder* (`PR-12`).

> **A spec that satisfies every other requirement and leaks the article has failed the module.**
> The client pays for evidence review and receives explainable content; the publishable article
> is `M-MVP`'s output and stays there.

### 4.3 What deliberately has no behaviour here

**`Hold` and `Escalate` terminate the engagement's `M-POC` behaviour without publication.** Their
downstream handling is **`M-MVP`'s existing exception behaviour** (`FN-EXCEPTIONS-06-11-12`) and
is not respecified — **an `M-POC` variant of an existing exception path would be a fork.**

## 5. Acceptance criteria

`PA-01`–`PA-06` as stated in `M-POC-REQUIREMENTS.md` §7. **Testable restatement, no new ids:**

| Given | When | Then |
|---|---|---|
| an engagement at `Chief Approved` | a human records `Publish` | both folders exist under one identifier, and **the publishable article is in exactly one of them** |
| an engagement in progress | its transitions are queried | they are structurally indistinguishable from an ordinary article's |
| any engagement | the application is inspected | **no account exists for the commissioning professional and no payment capability exists** |
| any of the ten `B-P0-06` boundaries unset | an engagement is attempted | **it does not begin** |

## 6. Edge cases

| Case | Behaviour |
|---|---|
| Trigger resolves to **no** suitable URL | **No engagement is created.** A lead that cannot become source material is not an engagement |
| The same URL is already an `M-MVP` article | The engagement attaches to the existing article; **no duplicate record is created** — `PR-02` forbids a parallel entity |
| Exclusivity window expires mid-engagement | The **hold/release status changes and is recorded**; the engagement continues. Expiry is a state, not a failure |
| Originality search finds prior publication | The finding is recorded and **routes to the `Publish`/`Hold`/`Escalate` decision**; it does not auto-terminate |
| Payment never arrives | An operating matter, **outside the application** (`PR-08`). No application behaviour depends on it |

## 7. Dependencies

| On | State |
|---|---|
| `M-MVP`'s pipeline — gates, sequence guard, transition log | **Exists in specification**; `FN-GATES-01-05` |
| `M-MVP`'s exception behaviour | `FN-EXCEPTIONS-06-11-12` |
| `G7a` — charter the manual lane | **Open**, T3 |
| `B-P0-06` — ten boundaries | **Open** — `PR-13` gates every engagement on them |
| `C-15` — distinct origins before real client data | **Open** |

## 8. Risks

| Risk | Consequence | Mitigation |
|---|---|---|
| **The pipeline is forked** to accommodate an engagement | The standing invariant fails and `PO-04`'s evidence is worthless | `N3` makes it observable in the transition log |
| **The article leaks into the client folder** | The module's core commercial boundary is gone and cannot be recalled | `PR-12` stated as an invariant; `PA-02` tests it |
| Engagements begin with boundaries unset | Unbounded spend, time and legal exposure | `PR-13`; all ten currently unset |
| `M-POC` fields drift into `AP-01`'s schema | `NG-03` and the frozen migration are breached | `N1`; `D-96` already forbids it explicitly |

## 9. `SPECS` candidate filter

**Applying `D-30`'s redundancy test, and the outcome is deliberately empty.**

| Candidate | Disposition |
|---|---|
| Folder storage mechanism, naming, retention | **Not a `SPECS` candidate yet.** The Judge ruled there is insufficient clarity for tech-spec |
| Engagement identifier format | Same |
| Exclusivity window representation | Same |
| External payment-trace storage | Same |
| UI for `Publish`/`Hold`/`Escalate` | **UI stays in `SPECS`** — and `SPECS` is not authorized |

**No Technical Stack section**, per the standing guardrail — added only when the build starts
(`D-30`).

**This spec stops here on purpose.** `Fn_Specs` is the tier the Judge authorized; **the next tier
is not blocked by an omission in this document but by a decision that has not been made.**
