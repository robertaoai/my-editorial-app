# POC/MVP Charter Separation and Revenue Model

**Date:** 2026-08-18
**Status:** Planning only. No code, no migration, no commit.
**Parties:** Board of Directors and Chief Editor.
**Normalized against:** `graphify` queries on the monetization boundary and publication targets, plus direct reads of `board-proposal-professional-evidence-review-poc.md` §4/§14, `entry006.md` §13, `Modular_PRD.md` §NG, and `requirements-traceability-map.md`.

## Part 1 — CR-15 resolved by separation, not interpretation

An earlier note proposed reading `CR-15` ("Web only, single Chief Editor account, no notifications", hash `0b8cff04`) broadly enough to permit a client-facing surface. That required an inference about what the clause meant.

**The Chief Editor's resolution is structurally cleaner and is adopted here:** `CR-15` governs the **anchor project (AP-01) / MVP** and remains satisfied unchanged — one Chief Editor account, one editorial tool. The client-facing POC is a **separate chartered project with its own charter and its own PRD**, and was therefore never inside `CR-15`'s scope.

Consequences:

- No change request against `CR-15`.
- No amendment to `PRD.md` or the frozen Charter.
- `NG-01`, `NG-02`, `NG-08` and `SEC-03` (which cover `CR-15`) stay intact.
- The question routed in the previous note is **withdrawn as unnecessary**, not answered.

## Part 2 — Two charters over one workflow

Normalized to the Alpha Portfolio vocabulary already in the documents: **P0-EVR** is chartered as a project in its own right, retaining its existing identifier rather than creating a new one. `APD-05`'s rule stands — a project comes into being only by a Board-approved charter.

| | **AP-01 — MVP** | **P0-EVR — POC** |
|---|---|---|
| Governing baseline | Frozen Project Charter v1 + `PRD.md` | **New charter + new PRD** (to be drafted) |
| Primary user | One Chief Editor | One paying client per engagement |
| Topic origin | Research first, then topic selected | Client commissions the topic |
| Exposure | `chief.my-editorial-app` — full pipeline | `my-editorial-app` — submit and receive only |
| Delivered artifact | **MVP Internal Folder** — Publishable Article Artifact | **POC Client-Facing Folder** — Explainable Draft + Client Decision Report |
| Revenue | None directly | Service revenue per engagement |
| `CR-15` | Applies, unchanged | Out of scope — different charter |

**Shared, and deliberately identical across both:** the five-gate editorial pipeline (`CR-10`), the Topic Brief (= **Input Card**) structure, the append-only audit record (`FR-07`, `NFR-02`), gate-sequence enforcement (`NFR-01`), Chief Editor final authority (`B-P0-08`, `MFB-04`), and the no-auto-advance rule (`NG-10`/`TC9`).

**The principle:** one editorial engine, two exposures. The charters differ in *intent, audience, and entitlement* — not in how an article is judged. A client-commissioned topic and a research-discovered topic pass through the same gates in the same order with the same logging.

## Part 3 — Repository structure principle

The two charters are governance artifacts, so most of the separation is documentary. The runtime separation is one shared core with two surfaces.

Separate per charter: charter, PRD, traceability, decision log, delivered package definition, and access surface.
Shared and never forked: the pipeline, the data model, the audit log, the gate rules, and the judgment-rule version.

**The rule that matters:** the workflow must never be duplicated. Two copies of the gate logic would produce two editorial standards, which defeats the reason the POC exists — to exercise *the same* design. Anything that would require forking the pipeline is a signal the separation is being drawn in the wrong place.

Actual directory layout, routing, and access mechanics are **Technical Requirements work**, to be drafted with developers when that phase is authorized. This document deliberately does not prescribe them.

## Part 4 — Monetization, streamlined

### 4.1 What the constraints actually say

| Constraint | Actual scope | Source |
|---|---|---|
| `NG-03` "No monetization features" | No payment features **built into the product**. Charter-level | `Modular_PRD.md` §NG; repo's Stripe scaffolding removed in S0 (X8) |
| `CR-16` non-goal: monetization | Customer excluded monetization from **v1 product scope** | `a551b302` |
| `NG-11` "No fundraising or solicitation tied to editorial events" | Narrower than it reads. Origin: soliciting funds off content **tied to an emergency-bypass event**, because it creates "conflict-of-interest between editorial judgment and financial incentive" | `entry006.md` §13 line 214; `entry007` S4 |

The PoC proposal already resolved the apparent conflict, in four separate places: *"manual invoicing/payment is an operating activity, not a product feature"* (§4); *"Charge outside the app during the PoC"* (§14); *"manual payment versus monetization feature"* (§15); *"Payment — no in-application monetization feature; manual payment for the service outcome"* (§19).

### 4.2 The single consolidated rule

> **Revenue may attach to the business and to the service. Revenue must never attach to a specific editorial decision.**

This satisfies all three constraints at once. `NG-03` is satisfied by keeping payment outside the application. `NG-11` is satisfied by never tying a solicitation to a particular story, verdict, or bypass event. `CR-16` is satisfied because none of this becomes a v1 product feature.

The business is expected to earn money — the Alpha Portfolio plan calls itself "the continuing business and investment container" and lists "commercial evidence: actual payment/outcome evidence" as a closure dimension. Nothing in the governing set requires the business to be unfunded.

### 4.3 Revenue directions assessed against the rule

| Direction | Verdict | Reasoning |
|---|---|---|
| **Professional Evidence Review engagements** | ✅ **Primary lane — already approved** | Client pays for a delivered service, not an editorial outcome. Manual invoice, outside the app. `B-P0-06`, `B-P0-07`. Guarded by `PSK-06` editorial-commercial separation |
| **Flat subscription to the publication** (Ghost, Substack, Beehiiv paid tier) | ✅ **Recommended second lane** | Reader pays for ongoing access to a body of work, not for a specific piece or verdict. Monetization lives on the external platform, so `NG-03` is satisfied by construction — the app never contains a payment feature |
| **Licensing / syndication of finished articles** | ✅ Clean | B2B, post-publication. Cannot influence a decision already made and logged |
| **Selling the reusable publishing template / method training** | ✅ Clean | Already produced as a POC folder artifact. Zero editorial coupling |
| **Patreon or membership** | ⚠️ **Depends on shape** | *Flat membership* behaves like subscription and is acceptable. *Per-post solicitation* ("support this investigation") is precisely the `NG-11` conflict shape. The platform is not the problem; the solicitation pattern is |
| **Sponsorship / advertising** | ⚠️ Needs an explicit firewall | Highest coupling risk. Requires a stated separation between commercial and editorial before any approach |
| **Pay to publish, or pay to influence a verdict** | ❌ Excluded | Fails `PSK-06` and the premise of the product. Not a candidate |

**Correction on record:** the earlier note flagged Patreon as colliding with `NG-03`/`NG-11` broadly. That was overcautious. The accurate reading is that *per-event solicitation* collides, not membership revenue as such.

### 4.4 Practical sequence for zero-to-one

1. **Service revenue first.** It is already approved in principle, needs no build, and produces the customer evidence the portfolio plan asks for. One client, manual invoice.
2. **Then a flat subscription** on whichever external platform is chosen for publication. Keeps monetization outside the codebase permanently.
3. **Then licensing/template** revenue if the method proves reusable.
4. Revisit sponsorship only with a written editorial-commercial firewall.

## Part 5 — What this needs next

| # | Action | Owner |
|---|---|---|
| 1 | Record the `CR-15` resolution: it governs AP-01/MVP; P0-EVR is separately chartered | Chief Editor, dated |
| 2 | Charter P0-EVR as a project, with its own PRD | Board, per `APD-05` |
| 3 | Adopt the single revenue rule (§4.2) as a standing constraint | Board |
| 4 | Confirm the first revenue lane is service engagements, not platform subscription | Board |
| 5 | Add "revenue must not attach to an editorial decision" to the editorial-commercial separation key `PSK-06` | Documentation pass |

## Part 6 — What this does not do

Closes no Open Decision (OD1–OD3 remain open). Amends no governing document. Does not edit `PRD.md` or the frozen Charter. Authorizes no code, schema, migration, payment integration, or deployment. Sprint S0/S1 planning is unaffected. All identifiers remain proposals until the Board records a decision.
