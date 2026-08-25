# B-039 — C-32 business retention and archival policy decision packet

- **Raised:** 2026-08-25 by Lane B
- **Kind:** blocked-on-decision
- **Phase:** 1
- **Blocks:** a closable v1 retention story: `NFR-02`, `AC-12a`, `G40`, `G88`, and `G41`
- **Status:** Answered
- **Lane A:** Answered `D-117`, 2026-08-25 — **accepted in full as `C-32`'s packet, and routed unchanged.** Lane A adds nothing to its content and subtracts nothing: choosing the policy is the business's act, and a packet edited by the product tier on its way up is the product tier legislating upward in slower motion. **Three of your points are corrections Lane A had not made and they are adopted**: that the policy must not call editorial records *financial or accounting records* to borrow an existing five-year statement; that removing an item from a work queue is **not** archival unless the policy says it moves into the governed archive — which reconciles the Blueprint's shorter stale-intake rows that `D-115` and `D-116` both missed; and that **closing `C-32` does not automatically close all five parked items**, each of which must be re-evaluated on its own evidence. **Your §6 supplied-fact list is the `G88` contract** and is recorded as semantic, not as migration authority. **`C-32` is confirmed NOT a dependency of `0002`** — your last guaranteed-failure line names the exact error, and `D-116` had already stated it, so this is agreement rather than repair.
- **Resolution:**
- **Verified-By:** — not independently verified. Lane A answered it. **The packet's CONTENT is the Chief Editor's to rule; nothing here approves a policy**
- **Evidence:** `C-32`; `D-117` §5.14bx; the three named tiers are watched by `source-sweep` (`docs/source`, `docs/governance`)
- **Verified-At-Commit:**

## What happened

`D-116` correctly re-tiered retention and archival from Product Scope to Project Scope. The
business owns the policy because the obligation has no Customer Request anchor. Lane A must not
write the governing source on its own initiative, and Lane B must not encode the missing policy in
application or database behavior.

The product has one residual duty: when records are absent from the current set, show whether the
period was archived or disposed, why, when, and under which policy version. Migration `0002`
remains unconditional because archival and disposal are external operations and this packet adds no
schema requirement.

## Decisions the Chief Editor must make, parent first

### 1. Ratify ownership and authority

Approve a provisional house policy owned by the Chief Editor while the business has one natural
person. State that a future Board assumes policy approval and external counsel may amend legal
interpretation. Publicly available regulator guidance and mediation resources are the interim
fallback; the policy must not claim that an unnamed statute governs editorial data.

### 2. Define the record classes

At minimum classify:

1. current published editorial records and their correction/retraction evidence;
2. rejected, abandoned, and unpublished editorial work;
3. append-only transitions, reports, publication targets, and publication events;
4. sources and personal data contained in or supporting editorial work; and
5. commercial/payment-confirmation records, explicitly outside the v1 editorial migration and
   governed separately when the POC commercial flow is activated.

The policy must state which class each governing period applies to. It must not call editorial
records “financial or accounting records” merely to borrow an existing five-year statement.

### 3. Ratify or replace the 90-day archival boundary

Decide whether `DATA_RETENTION_ARCHIVE_DAYS = 90` is approved for rejected/unpublished work.
Define its start event and exclusions. Reconcile it with the Blueprint's shorter stale-intake
cleanup periods: removing an item from an active work queue is not archival unless the policy says
it is moved into the governed archive.

Published work remains in the current set while correction or retraction must remain possible,
unless the policy supplies a different current-set exit rule.

### 4. Define archival operationally

Archival means moved out of the current set but still retrievable; it is not deletion. State:

- the external archive owner and location class;
- retrieval authority and expected retrieval evidence;
- integrity and linkage requirements preserving the article, transition, report, and publication
  chain;
- whether an archived item can be restored to the current set and who authorizes restoration; and
- the policy version governing the move.

### 5. Set bounded retention and disposal rules

For each record class, set a definite minimum period, triggering event, review point, disposal
authority, and exception rule. If the Chief Editor adopts a five-year internal floor for an
editorial class, label it a **house-policy risk control**, not a statutory conclusion, until counsel
identifies the applicable law or contract.

Define legal/regulatory hold, active dispute, correction/retraction, whistleblower protection, and
contractual-warranty exceptions. No disposal occurs in v1, but the policy must define who may
authorize it later so `G40` is bounded rather than replaced by “keep forever.”

### 6. Define the supplied absence fact

When an external archival or disposal process acts, it supplies the product-facing record with at
least:

- affected record or period identifier;
- `archived` or `disposed` classification;
- effective timestamp;
- responsible actor and authority;
- reason;
- policy identifier and version;
- archive reference and retrievability status when archived; and
- disposal evidence reference when disposed.

This is a semantic interface, not authorization for a new migration in this pass.

### 7. Approve precedence and review

State that law, regulator orders, contracts, platform duties, active holds, and editorial
correction/retraction duties override the ordinary schedule. Record a fixed review event—such as
annual review, first counsel engagement, jurisdiction change, new customer contract, or POC
payment activation—without inventing a Board that does not yet exist.

## Required document placement after business approval

| Tier | Required content |
|---|---|
| Alpha Portfolio plan | The Project Scope obligation, accountable business owner, approval and review authority |
| `business-case.md` §Compliance & Governance Disclosures | Record classes, periods, triggers, archive/disposal definitions, holds, supplied facts, precedence and review |
| `blueprint.md` `A6` | Reconcile the 90-day recommendation and shorter cleanup rows with the approved policy |

Lane A may propagate the **approved business decision** after the Chief Editor supplies it. Lane A
must not choose the policy content itself.

## Five-item closure map

| Parked item | What C-32 must supply |
|---|---|
| `NFR-02` | The governing policy and bounded retention rule for append-only evidence |
| `AC-12a` | Archive/disposal classification, timestamp, reason, and policy version shown when current data is absent |
| `G40` | A retention qualifier bounding `NFR-08` reconstruction promises |
| `G88` | The external supplied-fact contract for archived or disposed periods |
| `G41` | The UI explanation distinguishing no activity from externally removed current data |

Closing `C-32` does not automatically close all five. Each consumer must be checked against the
approved policy and closed or refined on its own evidence.

## Guaranteed failure

- Lane A authors business policy upward from the product tier.
- A five-year financial-record rule is silently applied to editorial data without authority.
- “Archive” and “delete” are treated as synonyms, destroying audit retrieval.
- The 90-day recommendation is implemented without an approved trigger or record class.
- Empty screens cannot distinguish no activity from archived or disposed data.
- A policy is approved without a version, owner, exceptions, or review event and cannot be audited.
- `C-32` is incorrectly made a dependency of `0002`, stopping schema work that it does not affect.

## Success criteria

- the Chief Editor approves a versioned Project Scope policy or explicitly rejects and replaces
  the proposal;
- the three governing documents carry the approved fact at their proper tiers;
- every record class has a trigger, bounded period, owner, exception rule, and later disposal
  authority;
- archival is retrievable and distinct from disposal;
- the supplied absence fact is complete enough to support `AC-12a` and `G41`;
- all five parked items are independently re-evaluated; and
- migration `0002`, Lane B selection, and S1 execution remain independent of `C-32`.

## What Lane B did instead

Prepared the business decision packet and stopped. Lane B did not edit the Alpha Portfolio,
Business Case, Blueprint, product requirements, application code, or database schema.

---
