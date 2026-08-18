# First Engagement — Minimum Intent Lock-In

**Date:** 2026-08-18
**Status:** Planning only. No code, no migration, no commit.
**Purpose:** The smallest set of decisions that lets one paying client, one topic, reach publication. Everything not on this list is deferred on purpose.
**Parties:** Board of Directors and Chief Editor. There is no contractor, no development team, and no external customer organization at this stage.

## 1. Role reality (correction to earlier advice)

Earlier notes recommended routing open questions "to the customer via the project sponsor." At zero-to-one that structure does not exist. `docs/PRD.md` is the Chief Editor's own original statement of intent, hash-anchored at `53ace36` so it cannot drift silently.

Therefore: **a customer-requirement question is resolved by a dated Chief Editor decision, recorded downstream.** Not by editing `PRD.md`, and not by waiting for an external party who is not there. The value of the frozen baseline is that it protects the original decision from later convenience — not that it requires another organization to unlock.

## 2. Two publication acts — do not conflate

| Act | Who does it | Platform decision needed? |
|---|---|---|
| Client publishes their own article, using the **POC Client-Facing Folder** they paid for | The client, on their own channel | **No.** Their business, their choice |
| My-Editorial-App publishes its own article | Chief Editor, after the Client-First Exclusivity Window and the materially-different-angle rule | Yes — but not due until the window expires |

For the first engagement, only the first act has to work. The **Publishable Article Artifact** stays in the **MVP Internal Folder** under hold regardless. The platform question is therefore **not a blocker for engagement one.**

## 3. The seven decisions

| # | Decision | Recommendation | Already covered by |
|---|---|---|---|
| 1 | Who the one client is | One named professional, inside the Agile/DevOps/ITIL/AI audience, low-liability topic only | `B-P0-06` boundary 1 |
| 2 | What the topic is | One Topic Brief (= **Input Card**, §17.1), same structure whether commissioned or researched | Addendum 2 |
| 3 | Price and when it is paid | A number, invoiced manually outside the application | `B-P0-06` boundaries 2, 4 |
| 4 | What the client receives — and does not | Receives the POC folder; does **not** receive the publishable article. Disclosed **before** payment | `B-P0-14` |
| 5 | Exclusivity window length | 30 days (14/60 as brackets), starting at POC folder delivery | `B-P0-17` |
| 6 | Who decides publish / hold / escalate | Chief Editor, with the virtual Chief Journalist advisory only | `B-P0-08`, `MFB-04` |
| 7 | The stop rule | If the topic turns high-liability mid-engagement, hold it. No publication without an escalation route | `B-P0-06` boundaries 1, 8, 9 |

Deferred on purpose: **where My-Editorial-App's own article publishes.** Not needed until ~30 days after first delivery. Deciding it later means deciding it with evidence.

## 4. Platform assessment

Normalized against `CR-08` (`0c46e25c`, "Publication Targets — WordPress or LinkedIn-ready") and `CR-12` (`171acaab`).

| Platform | Standing | Note |
|---|---|---|
| **LinkedIn** | **In approved scope** | `CR-08`/`CR-12`, delivered as `FR-09`'s ManualReady branch. Zero new scope, zero infrastructure, and the audience the documents already name |
| Ghost | Outside `CR-08` | Closest in kind to the WordPress target. A change request, not a free choice |
| Substack | Outside `CR-08` | Free tier is a publishing channel; paid tiers touch `NG-03`/`CR-16` |
| Beehiiv | Outside `CR-08` | Same treatment as Substack |
| **Patreon** | **Flagged** | Collides with `NG-03` "No monetization features" (Charter-level), `CR-16`'s monetization non-goal, and `NG-11` "no fundraising or solicitation tied to editorial events… requires independent legal and compliance review before any tooling." The repo is already removing Stripe scaffolding in S0 (X8) for this reason. Not recommended as the first channel |

**All five are manual posting.** The only automated target in the documents is WordPress (`FR-09`). So the choice among these does not change the build — it is an operating decision, not a product decision.

**Recommendation:** LinkedIn first. It is the only option requiring no scope change, no new infrastructure, and no new decision — and it is where a commissioning professional already is. Revisit an owned channel (Ghost or Substack) after the first engagements produce evidence.

## 5. CR-15 — decide it, do not route it

`CR-15` (`0b8cff04`) reads: *"Web only, single Chief Editor account, no notifications."* It bundles three separate asks, the drafting pattern `FB-08` already flagged.

Recommended dated decision, for the Chief Editor to record or reject:

> **CR-15 is about the editorial tool having one operator.** A client submitting a Topic Brief and receiving their own POC package is intake and delivery, not an editorial account: it grants no access to the pipeline, the board, other engagements, or any gate. The single-account rule is therefore unaffected. Recorded 2026-08-18; revisit if client-facing scope ever extends beyond own-submission and own-delivery.

This costs one line now. Leaving it ambiguous costs a rebuild later.

## 6. What this does not do

Closes no Open Decision (OD1–OD3 remain open). Ratifies nothing. Amends no governing document. Authorizes no code, schema, migration, or deployment. Sprint S0/S1 planning is unaffected.
