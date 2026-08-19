# Retraction as Publication — Design Consolidation

**Date:** 2026-08-18
**Status:** Planning only. No code, no schema, no migration.
**Origin:** Chief Editor direction — *a retraction phase has a publication itself*; tie the retraction phase into publishing.
**Normalized against:** the media-SOP remedy ladder, `FR-13`/`US-13`, `TR-DM-03`, the applied `pub_target` and `platform_type` enums.

## 1. The reframing

A correction or retraction is not a state the original article moves into. **It is editorial content that must be verified and published in its own right.** It therefore re-enters the same five gates rather than requiring a separate post-publication lane.

This resolves the shape problem in `G19` and reuses the existing pipeline, which the storyboard's standing invariant requires — **the workflow must never be forked.**

| Old framing | Corrected framing |
|---|---|
| Article moves to a `Retracted` state | A **notice** is created, runs the gates, and is published |
| Post-publication is a separate phase | Post-publication re-enters publishing |
| The original is edited or flagged | **The original is never edited.** The notice cites it |

**This is the same rule already adopted in three other places**, which is the strongest argument for it:

- Audit model Step 2 — *"an issued report is never edited and never deleted; a superseded report is answered by issuing a new report that cites the original."*
- Financial restatement — prior statements are never rewritten; a restatement is issued.
- The supplied newsroom guide — *"Maintain the Record: avoid silently changing text without a documented correction log or editor's note."*

One rule, three domains: **never overwrite the record; supersede it with a new record that points back.**

## 2. Notice types

The existing ladder carries four rungs. The supplied guide adds a fifth that has **no representation anywhere in the document set**.

| Notice type | Meaning | Status |
|---|---|---|
| **Clarification / Update** | Context added, conclusions unchanged | ✅ In the ladder |
| **Correction** *(Erratum / Corrigendum)* | A bounded factual error fixed; core conclusions stand | ✅ In the ladder |
| **Expression of Concern** | **Temporary public warning while a serious claim is under active investigation and not yet resolved** | ❌ **Absent — new `G22`** |
| **Retraction** | The whole piece withdrawn — fabrication, ethical breach, wholesale unreliability | ✅ In the ladder |
| **ComplyWithOrder** | Response to a binding regulator or court order | ✅ In the ladder |

> **Why Expression of Concern matters structurally.** Pre-publication, the pipeline has `Hold` — *"we have a material unresolved concern about this item."* Post-publication it has nothing equivalent. Expression of Concern **is** the post-publication `Hold`: it lets the newsroom act promptly on a serious but unproven concern without either staying silent or over-committing to a retraction it cannot yet justify. Without it, the only honest options are premature retraction or silence.

## 3. What the model needs

Stated as intent. Field names, types, and storage are Technical Requirements work.

| # | Requirement | Rationale |
|---|---|---|
| **1** | A notice is an **ordinary article record** carrying a notice type and a reference to the article it addresses | Reuses the pipeline; no forked workflow |
| **2** | The notice runs the **same five gates** | A correction is a factual claim about a factual claim. It can itself be wrong |
| **3** | The notice's publication targets are **derived from the original's** | "Mirror the spread" — the correction must reach every platform the error reached |
| **4** | The original article is **never edited**; its superseded status is **derived** from the notices referencing it | Append-only discipline, and `NFR-02`'s own logic extended to article content |
| **5** | Prominence and specificity are **required fields** on the notice | The guide's "state what was wrong, what the true fact is, avoid evasive language" is a content requirement, not a style note |

### 3.1 "Mirror the spread" is already half-built

`TR-DM-03` specifies `publication_targets` and `publications` — one row per article per target, with a seven-value status enum. That is exactly the mechanism needed: **the notice inherits the original's target rows.** The requirement gains a second, independent justification it did not have before.

Note the enum mismatch to settle in the same pass: `pub_target` is `wordpress | linkedin | none`, while `platform_type` is `linkedin | facebook | blog | guest_post | other`. Mirroring the spread across social channels requires the publication side to represent the channels the source side already can.

### 3.2 "Never just delete" reinforces `GA9`

The guide states that silently deleting a viral post *"destroys audience trust and fuels speculation."* This is the editorial-practice statement of the same rule `GA9` names as a data defect — `on delete cascade` on `workflow_transitions` permits exactly the silent deletion both principles forbid. **Two independent arguments now converge on `on delete restrict`.**

## 4. `FR-13` needs reshaping, not replacing

`US-13` currently reads: *"`regulatory_retraction_order` = true **bypasses T8 entirely**."*

Under this model that is imprecise in a way that matters. A binding order should bypass **editorial deliberation** — *should we retract?* is not open when a court has ordered it — but it must **not** bypass **publication mechanics**. The retraction notice still has to be written, still has to reach every platform the original reached, and still has to be recorded.

| Bypassed | Not bypassed |
|---|---|
| The judgment gates deciding *whether* to retract | Drafting the notice |
| Queuing behind internal review | Publishing to all mirrored targets |
| | Logging the transition and the order |

The speed requirement is preserved; the record is not sacrificed to it.

## 5. Gaps impacted

| Gap | Effect |
|---|---|
| **`G19`** | **Reshaped and reduced.** No new article states needed. Needs: a notice type, a notice→original reference, target inheritance, and a derived superseded status. Reuses the existing pipeline |
| **`GA9`** | **Reinforced.** A second, editorial argument for `on delete restrict` |
| **`TR-DM-03`** | **Strengthened.** Now serves both multi-target publication *and* mirror-the-spread |
| **`G22`** *(new)* | **Expression of Concern has no representation.** The post-publication equivalent of `Hold` is missing from the ladder, the states, and the intent vocabulary |
| **`G23`** *(new)* | **`FR-13`'s bypass is scoped too broadly.** Bypassing T8 "entirely" would skip notice publication, not just deliberation |
| **Intent vocabulary** | Four proposed codes — `CLARIFY`, `CORRECTION`, `RETRACTION`, `COMPLY_WITH_ORDER` — need a fifth for Expression of Concern |
| **T0** | **Unaffected.** No T0 item touches notices, publication, or `FR-13` |

## 6. Draft gap fixes

| # | Fix | Phase |
|---|---|---|
| `G19` | Record the notice-as-article model: notice type, notice→original reference, inherited publication targets, derived superseded status. Design in the S1 pass — the reference lives on an append-only-adjacent record | **T2** |
| `G22` | Add Expression of Concern to the remedy ladder in the media-SOP plan, and a fifth intent code. **New scope — needs Board approval**, since it creates a public-facing editorial act that did not previously exist | **T3** |
| `G23` | Restate `US-13`/`FR-13` so the order bypasses deliberation, not publication. `FR-13` is Project Scope, unanchored, S5 — so this is a wording fix in `Modular_PRD.md`, not a scope change | **T1** *(documentation)* |
| `GA9` | Unchanged — `on delete restrict` in migration `0002`, now with two supporting arguments | **T2** |
| Enum mismatch | Reconcile `pub_target` against `platform_type` so mirroring can reach social channels | **T2** |

## 7. Scope limits

Closes no Open Decision. Ratifies nothing. Amends no governing document. Adds no `gate_role`, no state, and no enum value — all five requirements in §3 are intent statements for the Technical Requirements pass. Expression of Concern is **proposed, not adopted**.
