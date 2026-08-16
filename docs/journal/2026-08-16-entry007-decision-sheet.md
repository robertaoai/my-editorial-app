# Build Readiness Journal — Entry 007: Decision Sheet
**Date:** 2026-08-16
**Author:** Chief Editor (robertaoai), drafted with Claude
**Status:** Phase 0 approval — scaffolding and proof-of-concept setup only. This entry authorizes project setup and PoC-artifact building from zero. It does not authorize production deployment, and it does not substitute for the separate, not-yet-supplied Business Charter (see Section 3).
**Precedence for this entry:** Project Charter v1 > V1 Build Readiness Addendum v1.4 > Blueprint v1.3 > Business Case v2.2.
**Supersedes:** None. Approves Entry 006's consolidated decision sheet, with S7 applied at its EMS-corrected scope.

---

## 1. Scope statement, read this before the table

This is a **Phase 0** approval: scaffolding, project setup, and proof-of-concept artifact building, starting from zero. It is not a production go-live decision. Two consequences follow directly from that, per the Blueprint and Addendum's own rules, not by inference:

- Development and prototyping may proceed under provisional assumptions (Blueprint line 719, Addendum line 768). Nothing below needs to be fully Ratified for scaffolding to begin.
- Only production is gated. The one explicit pre-launch stop remains OD2 resolving negatively (Charter, OD4 branch 2), which has not happened, OD2 has resolved affirmatively via the Three Lines Model, unratified.

Because this is Phase 0, OD1 and OD2 are recorded below as **Resolved, held provisional for PoC**, not Ratified. This is a deliberate choice for this entry, not a default that erases the distinction, if you want full Ratification now instead of provisional-for-PoC, that's a one-line change to this file, not a rebuild.

---

## 2. Approved decision table (Entry 006, consolidated, S7 corrected)

| # | Item | Decision | Basis |
|---|---|---|---|
| OD1 | Chief Editor = Line 2, Chief Journalist = Line 1, no float | **Accepted, held provisional for PoC** | Phase 0 scope; full Ratify deferred |
| OD2 | Four-eyes satisfied by Line separation (T5/T6 boundary crossings) | **Accepted, held provisional for PoC** | Phase 0 scope; full Ratify deferred |
| OD3 | Agent headcount | **Framework accepted. Headcount still not supplied, remains open.** | No number exists in any of the four source documents; not invented here |
| OD4 | Proposer/Critics/Judge | No action, already Resolved-rejected for v1 | Two-branch reopening condition unchanged |
| S1 | Low-confidence agent forces a Line 2 flag at T5 | **Accepted** | Interim, explicitly not OD4 |
| S2 | Angle drift logs `plan_deviation`, visible to Line 2 | **Accepted** | Escalation stays Line 2's call |
| S3 | Two-trigger retraction: internal low-risk stays in revision; external regulatory/court order forces immediate retraction | **Accepted** | New `Retracted` state, `regulatory_retraction_order` field |
| S4 | Redesigned: pre-publication legal review before emergency bypass; fundraising fully removed from this workflow | **Accepted, redesigned version only** | Original after-the-fact framing stays rejected |
| S5 | Acting Chief Editor via board-approved LOA window, full Line 2 authority for that window, auto-reverts | **Accepted** | Succession coverage for Chief Editor absence |
| S6 | Risk stratification computed at T1 intake, not T5 | **Accepted** | Signal thresholds remain adjustable |
| S7 | Degraded-mode gap | **Accepted at EMS-corrected scope: applies only to the over-48-hour case.** Addendum §6.4 already covers under-48h (Line 1 continues, approved jobs still publish). | Correction sourced from EMS Phase 00 audit against Addendum line 435–436, not from the original Entry 004/006 framing |
| S8 | T5/T6 requires positive readiness attestation, not just absence-of-problem | **Accepted** | Attestation wording left to build phase |
| S9 | Automated 100% pass feeds a knowledge base; Line 3 human review stays risk-triggered | **Accepted** | Unconditional human review explicitly rejected as a scope change |
| Fundraising | Removed from editorial workflow | No action, already out of scope | Requires its own separate legal/compliance review if pursued, not part of this project |
| Reverse-engineering safeguard | Unsourced engineering hygiene note | No action, not a governance decision | Kept as a build-time caveat only |

---

## 3. What is explicitly NOT covered by this approval

| Item | Status | Why it doesn't block Phase 0 |
|---|---|---|
| **Business Charter** (separate document from the Project Charter, referenced but never supplied, first logged as a gap in Entry 006 §7) | **Not supplied. Remains an open gap.** | Phase 0 is scaffolding and proof-of-concept only, it does not require a formal business charter, exit strategy, or funding-runway documentation to begin. This gap must be closed before any production go-live decision, not before PoC work starts. |
| Exit strategy | Not supplied (Entry 006 §7) | Same reasoning, not a Phase 0 requirement |
| Full Ratification of OD1/OD2 | Deferred, see Section 1 | Provisional-for-PoC is sufficient for scaffolding under the Blueprint's own stated rule |
| OD3 headcount number | Not supplied by anyone, still absent from all four source documents | Framework alone is sufficient to begin building role-mapping logic as a config value; the number itself only becomes a blocker once a sprint's logic actually needs it, per the existing governing rule in Journal §2 |

---

## 4. Which documents this entry ratifies or changes, stated plainly

**Ratifies: nothing.** This entry ratifies zero documents and zero decisions. No `Ratified?` field in any document moves from No to Yes as a result of this entry. Phase 0 provisional acceptance is not ratification, and this entry does not act at the Charter level, which is the only level at which OD1, OD2, or OD3 can be closed.

| Document | Changed by this entry? | What changes |
|---|---|---|
| **Project Charter v1** | **No.** | Charter text is unaffected. OD1, OD2, OD3 remain formally **Open** at the Charter level. This entry operates one level below the Charter, recording Addendum-level provisional acceptance for Phase 0 build purposes, per precedence, only the Chief Editor acting at the Charter level (a separate, explicit act) changes Charter status. |
| **V1 Build Readiness Addendum v1.4** | **Yes, §2.4 Ratification Log and §9 Governance Addendum get new entries.** | §2.4: OD1 and OD2 rows updated from `Ratified? = No` (blank status) to `Ratified? = No, Provisional-for-PoC (Entry 007)`. §9: new G-rows added for S1, S2, S3, S4 (redesigned), S5, S6, S7 (corrected scope), S8, S9, each tagged `Accepted, Phase 0, config-driven, not hard-coded`. |
| **Blueprint v1.3** | **No.** | No content in the Blueprint is affected by this decision sheet; it remains the architecture reference, unchanged. |
| **Business Case v2.2** | **No.** | Already correctly states OD1/OD2 as resolved-unratified and OD3 as partially resolved; this entry doesn't change that document's content, only acts on it. |
| **This file** (`entry007-decision-sheet.md`) | **New.** | The dated record of this Phase 0 approval, the source of truth for what Addendum §2.4/§9 entries above should say. |

**Left untouched, for completeness:** Project Charter v1, Blueprint v1.3, Business Case v2.2, and every `Ratified?` field in every document. The repo's own `docs/` plan pack (PRD, ARCHITECTURE, DATA_MODEL, AGENTIC_LAYER, INTELLIGENCE_LAYER, SECURITY, TASKS, TEST_PLAN) is **not** a governing document and is neither ratified nor changed by this entry; where it conflicts with the four governing documents, the governing documents win. Those conflicts are logged separately in the sprint plan entry of the same date, not here.

**Net effect:** one new journal entry, two sections of the Addendum get provisional-status log entries, nothing else moves. The Charter stays exactly as it was, correctly, since nothing here rises to a Charter-level ratifying act.

---

## 5. Changelog (Entry 007)

- 2026-08-16: Created. Approved Entry 006's consolidated decision sheet in full, applying the EMS Phase 00 audit's correction to S7 (scope narrowed to the over-48-hour Chief Editor absence case, since Addendum §6.4 already covers under-48h). Recorded OD1/OD2 as Resolved, held provisional for Phase 0 PoC scaffolding, not fully Ratified, a deliberate scope choice for this entry, reversible without a rebuild. Logged the missing Business Charter and exit strategy as open gaps that do not block Phase 0, explicitly deferred to the production go-live decision. Confirmed no changes required to the Project Charter, Blueprint, or Business Case as a result of this entry, changes are scoped to the Addendum's §2.4 and §9 logs only. Added an explicit "Ratifies: nothing" statement to §4 and an explicit statement that the repo `docs/` plan pack is non-governing and untouched by this entry.
