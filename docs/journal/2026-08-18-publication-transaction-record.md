# Publication as a Transaction Record

**Date:** 2026-08-18
**Status:** Planning only. No code, no schema, no migration.
**Origin:** Chief Editor clarification — `pub_target` is what the business can **automate**; `platform_type` is the platform **involved**; non-automatable publishing is **manual**; both are recorded **transactionally in one place** for auditability, serving publication and the retraction phase so no GRC-required step is missed.
**Normalized against:** `TR-DM-03`, Addendum T10/T11, the applied `pub_target` and `platform_type` enums.

## 1. Correction to the prior entry

`2026-08-18-retraction-as-publication.md` §3.1 recorded an *"enum mismatch to settle"* between `pub_target` (`wordpress | linkedin | none`) and `platform_type` (`linkedin | facebook | blog | guest_post | other`), recommending reconciliation.

**That was wrong and is withdrawn.** The two are **orthogonal axes**, not competing representations:

| Enum | Axis | Question it answers |
|---|---|---|
| `pub_target` | **Automation capability** | Can the business publish here automatically? |
| `platform_type` | **Channel identity** | Which platform is involved? |

They should **not** be merged. Reconciling them would destroy the distinction that makes the manual path expressible at all. The prior recommendation is struck; no enum reconciliation is required.

## 2. The model

Every publication act writes a transaction record, regardless of how it was executed.

```
                    ┌─────────────────────────────┐
  Approved  ────▶   │  publication transaction    │
                    │  one row per article,       │
                    │  per target                 │
                    └─────────────────────────────┘
                        │                    │
            automatable │                    │ not automatable
                        ▼                    ▼
                  T7 System              T10 → ManualReady
                  publishes              T11 Chief Editor confirms
                        │                    │
                        └────────┬───────────┘
                                 ▼
                    one auditable record set
                    (both paths, same fidelity)
```

**The single auditable place is the point.** Automated and manual publication produce records of the same shape, so completeness can be checked without knowing which path was taken.

### 2.1 This is already specified — it just does not exist yet

| Element | Status |
|---|---|
| `publication_targets` and `publications`, per-article per-target, seven-value status, retry count, `published_url` | `TR-DM-03` — **Create in S1** |
| Automated path | `T7` — System |
| Manual fallback | `T10` — System sets `ManualReady`, generates post content |
| Manual confirmation | `T11` — Chief Editor enters `published_url`, Line 2, human |
| Generalization beyond one target | Addendum records *"T10/T11 generalized to all manual publication targets"* — **Fixed** |

So the design is present across the Addendum and `TR-DM-03`. What is absent is the **record itself**, which is S1 work, and the **stated purpose** below.

## 3. What the clarification adds

`TR-DM-03` was justified by `TC2` — a single enum cannot represent *"WordPress Published + LinkedIn ManualReady."* It now carries **three** independent justifications:

| # | Justification | Source |
|---|---|---|
| 1 | Represent partial multi-target status | `TC2` |
| 2 | **Mirror the spread** — a correction must reach every channel the original reached | Retraction-as-publication model |
| 3 | **GRC completeness evidence** — proof that no required publication or retraction step was missed | This clarification |

Justification 3 is new and changes what the record must satisfy. A record that merely *tracks* publication is enough for 1 and 2. A record that serves as **evidence to an external authority** must also be complete, immutable, and able to show absence — that a step was *not* performed, and when.

> **The retraction phase is where this pays.** Mirror scope is not a judgment call — it is a query: *every target row the original article holds.* Without the transaction record, "did we correct everywhere we published?" is answerable only from memory. With it, it is answerable from data, which is what an external reviewer needs.

## 4. Requirements this implies

Intent only. Field names, types, and storage remain Technical Requirements work.

| # | Requirement | Why |
|---|---|---|
| 1 | Manual publication acts are recorded with **the same fidelity** as automated ones — target, platform, status, URL, actor, timestamp | Otherwise mirror scope and GRC evidence have holes exactly where humans acted |
| 2 | A retraction or correction notice **inherits its target rows from the original's** | Mirror the spread becomes a query, not a recollection |
| 3 | The record must be able to show a step was **not** performed | Absence of evidence is the thing GRC asks about |
| 4 | Publication records follow the same **insert/read-only** discipline as the audit model | A publication record that can be edited cannot evidence completeness |
| 5 | `MockPublished` **never** satisfies `Published` | Already a fixed, non-configurable rule — restated because it is what stops demo data becoming false GRC evidence |

## 5. A boundary worth stating

The supplied guide says to mirror a correction to *"the exact social media accounts, threads, or channels that shared the original error."*

**The business can only act on channels it published to.** Third-party amplification — someone else resharing the article — is outside the publication record and outside the newsroom's control.

> **New gap — `G24`: mirror-the-spread scope has no stated boundary.** The obligation should be defined as *every channel the business published to*, evidenced by the transaction record, with third-party amplification explicitly outside it. Unstated, the rule reads as an unbounded duty to chase an error across the internet — which cannot be discharged, cannot be evidenced, and would fail an audit precisely because it was promised.

## 6. Gaps impacted

| Gap | Effect |
|---|---|
| **Enum mismatch** *(prior entry)* | **Withdrawn.** Orthogonal axes; no reconciliation needed — §1 |
| **`TR-DM-03`** | **Strengthened again.** Three justifications; now also a GRC evidence record, which raises its bar from tracking to completeness |
| **`G19`** | **Fix sharpened.** Mirror scope = the original's target rows. A query, not a judgment |
| **`G24`** *(new)* | Mirror-the-spread scope boundary unstated |
| **`GA2` / Step 5** | Publication records join the insert/read-only candidate list — decide in the same S1 pass |
| **T0** | **Unaffected.** No T0 item touches publication records |

## 7. Draft gap fixes

| # | Fix | Phase |
|---|---|---|
| `G24` | State the mirror boundary: every channel the business published to, per the transaction record; third-party amplification explicitly excluded. Lands in the media-SOP remedy ladder | **T1** *(documentation)* |
| `G19` | Unchanged in substance; mirror scope now specified as inheritance from the original's target rows | **T2** |
| `TR-DM-03` | Design to carry manual acts at full fidelity and to evidence non-performance — not only successful publication | **T2** |
| Step 5 | Add publication records to the insert/read-only decision | **T2** |
| Enum reconciliation | **Removed** from the T2 list — was based on a misreading | — |

## 8. Scope limits

Closes no Open Decision. Ratifies nothing. Amends no governing document. Adds no enum value and merges none. All requirements in §4 are intent statements for the Technical Requirements pass.
