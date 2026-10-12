# B-157 — Option A versus C: decision contract and recording route

- **Raised:** 2026-10-12 by Lane B
- **Kind:** finding
- **Phase:** 1
- **Blocks:** nothing, reporting only
- **Status:** Open
- **Lane A:** **Acknowledged 2026-10-12, receipt only.** Read in full as Lane B's uncommitted file on HEAD `e130ed6` (SHA-256 `b911ec585052815e3557d5789f13fab0abf2ef1448b47e88cc2822b89e012f83`, before this line). AC1–AC7 are not answered by this receipt; Lane A answers them after Lane B's raising commit, with C1/C2 evidence in its own commit. The entry stays Open.
- **Verified-By:** — not yet dispositioned; raised by Lane B
- **Evidence:** Examined e130ed60eaf0131dec6e8d006cc750c520e657cd; B-156 final planning disposition; F3-F6-packet-r2.md groups and option matrix as amended by F3-F6-packet-r3.md; F3-optionA/F3-optionA-targets.json; Judge-supplied Lane A worklog, source and provenance below.
- **Verified-At-Commit:** e130ed60eaf0131dec6e8d006cc750c520e657cd

## What happened

B-156 is independently Verified for planning only. The Judge requested a challenge to the
preference for Option A over Option C. Lane B supplied a chat comparison. Lane A accepted the
challenge and checked the partition, but had no numbered entry in which to record its answer.

This entry records that follow-up. It cites B-156 as its source; it does not reopen B-156 or
repeat its F1-F6 obligations. Lane A's answer belongs here. Do not create a C-series entry for
Lane C's existing C5/C7/C8 outcomes.

### Source and limits

- Governing references: handoff README (D-272/D-385, terminal records), TEMPLATE.md,
  B-156's final planning disposition at e130ed6, and its F3-F6 packet revisions 2 and 3.
- The packet revision-3 changes override the corresponding revision-2 text. In particular,
  D-434 must publish and have a separate health record before A or C application.
- Supplied Lane A source: Judge attachment
  `C:/Users/rober_24syk4j/.codex/attachments/d555e544-dec2-42a1-8ccb-4fe8351d0128/Pasted text.txt`,
  SHA-256 `27b689328124bee3100522e93f4b682339ceaa4a9e83c89d7be425631413770a`.
  This is a supplied worklog, not a Lane A-authored repository commit. The summary below is
  not a verbatim retention of that attachment.
- Lane A agrees that cycle count does not prove lower risk, confirms C1/C2 counts, and
  proposes a decision rule, separate manifests and an intermediate-state contract.
- Lane C's accepted outcomes retain B-156's provenance and observation limits. C5 has no
  host output. No new trial is required for unchanged claims.

## What you need

Lane A: acknowledge this entry, answer AC1-AC7, and return the bounded changes for Lane B
review. Continue independent drafting under existing approvals. No new Judge act is needed
to draft this comparison. Application, publication and push keep their existing boundaries.

### Parent-first map

| Level | Item | State / next action |
|---|---|---|
| Parent purpose | Progressive traceability between governed intent, project setup source and verification | Planning only; no product or S0-setup credit |
| Accepted source | B-156 F1-F6 | Verified within scope; unchanged |
| Follow-up | B-157 decision contract | Open; Lane A answers AC1-AC7, Lane B independently reviews |
| Execution dependency | D-434 publication and separate health | Required before A/C application; not before drafting or conditional option assessment |
| Execution choice | A or C, with bounded act(s) | Not selected or authorized by this entry |
| Separate | S0-setup, retained semantic assessment, lane allocations, push, P15/Gate 1B and Gate 2 | Existing owners and triggers remain |

### Comparison basis

| Item | A | C |
|---|---|---|
| Same final selected scope | R1-R25 and R29 | Same |
| Grouping | G-TC6 + G-SKIP + G-CORE + G-CONFIG + G-POINT together | C1: G-TC6 + G-SKIP + G-CORE; C2: G-CONFIG + G-POINT |
| Targets / repair-source paths | 23 values / 14 paths | Derived partition: C1 18 values / 10 paths; C2 5 values / 4 paths |
| Act and cycle count | One bounded act; one guarded cycle | Two bounded acts; two guarded cycles |
| Review consequence | One larger candidate; a refused target can hold the batch | C1 still holds most targets and all three curated fragments; C2 is smaller |
| Published intermediate state | None between the selected groups | C1 corrected; R21-R25 and R29 pending until C2 completes |
| Binding | Actual source after D-434 publication and health | C1 after D-434; C2 checked again after C1 publication and health |
| Push | Separate authorized, validated batch checkpoint | Same; two cycles do not imply two pushes |

Counts exclude act-propagation, receipt and generated files. C1 and C2 repair-path sets are
disjoint, but their D-54 recording can touch the same Register, Build Spec and Inventory.
Do not treat either unit as independent of changes to those shared files.

### Findings and completion checks

| ID | Finding / required answer | Completion check |
|---|---|---|
| AC1 | A's lower cycle count is a process benefit, not proof of lower risk. Prefer A when the whole selected batch is reviewable and no useful intermediate release decision is needed. Offer C when a named checkpoint has enough value to justify its extra cycle and temporary residuals. | Revised comparison states both selection conditions. No unsupported safety, elapsed-time or cost claim. |
| AC2 | C needs selected C1/C2 manifests. C1 covers R1-R20; C2 covers R21-R25 and R29. These repair IDs map to 18 and 5 bound values, not 20 and 6 values. | Target-ID sets have no overlap, union equals A's 23-target manifest, full values/hashes at 1640ff7 are preserved, and actual-source rebind/refusal rules are stated. |
| AC3 | Lane A's checkpoint draft needs clearer evidence boundaries. Its stop rule includes a pre-publication receipt failure as well as the proposed published checkpoint. | Separate candidate byte/meaning acceptance, publication parity and health, then C2 actual-source binding. A refusal in C1's receipt prevents C1 publication; a later health failure stops progression. Health alone does not prove each repair's meaning. |
| AC4 | The statement that C's checkpoint has little value is conditional. Lack of a functional dependency is not proof that staged review has no value. | State the Judge/reviewer question that C1's published evidence would answer. If none is needed, say why A is preferred for this repair scope. If one is needed, state proceed/change/stop evidence. |
| AC5 | An intermediate residual needs a usable return condition. "A C2 act" names authority but does not explain what happens if C2 is delayed. | Name pending R21-R25/R29, owner Lane A, return trigger, permitted claims, and the record destination. Report "C1 published, C2 incomplete" if it stops. Do not silently revert C1 or claim all repairs complete. |
| AC6 | D-434 is an application prerequisite, not a prohibition on planning or presenting a conditional choice. The terminal-entry correction is accepted. | Draft and review now; keep application dependent on D-434 publication/health. Keep B-156 terminal. Each execution act names a lawful receipt and health destination before prepare; no expired exception is reused. |
| AC7 | These repairs do not complete the wider audit or deliver new capability. | Preserve the 173 unassessed rows, partly read fragments and open F2a items with their existing owners/triggers. Preserve Lane C limits. Exclude R26-R28, P1 and P2 from A/C. No tool adoption, native setup or product delivery claim. |

The C1/C2 partition is planning evidence only. After D-434, locate targets by semantic locus,
bind their full values, and compare with the frozen source. A relocation needs bounded review;
a changed value needs reassessment and review before prepare. Repeat this for C2 after C1.
Keep each coupled specification/fragment repair in the same unit. Reversing the accepted C
order or splitting specifications from fragments needs revised impacts, not a silent change.

### Evidence and refusal contract to draft

1. Candidate acceptance: Lane B reviews the selected exact bytes and their meaning against
   the affected governing clauses, including limits and retained gaps.
2. Publication: prove that the live graph matches the reviewed candidate. This does not
   prove repository-wide atomicity; source commits precede graph publication.
3. Separate health: run all required checks and parity checks. A check pass does not settle
   unrelated semantic gaps or grant push/gate authority.
4. Refuse progression on an unreviewed binding change, wrong receipt binding, disallowed
   check failure or incomplete preceding publication/health. State which stage stopped.
5. Each act names scope, prerequisites, affected files/tiers, pass and refusal checks,
   sync cost, receipt route, publication choice and stop point. Keep normal hooks.
6. No fetch or push while a candidate is pending. Git batch push remains a separate
   authorized checkpoint after the required local validation; do not invent an XDD suite.

## What you did instead

Lane B reviewed the supplied answer and governing sources and created this handoff only.
No repair, governed edit, trial, install, graph rebuild, push or gate closure is included.
Only Lane A may write the Lane A field. Lane B left it blank when raising the draft.
Lane A has now acknowledged it in the working tree, receipt only; that line is preserved.
Do not substitute Lane B's receipt or the supplied worklog for a receiver answer.

## Lane B — Receiver acknowledgement and supplied draft review, 2026-10-12

Examined HEAD: `e130ed60eaf0131dec6e8d006cc750c520e657cd`. Lane A has written only its
acknowledgement in this otherwise uncommitted entry. Lane B reproduced the pre-acknowledgement
SHA-256 by restoring the blank field in memory:
`b911ec585052815e3557d5789f13fab0abf2ef1448b47e88cc2822b89e012f83`.
The receiver's cited bytes match. Its receipt is not an answer to AC1-AC7.

The Judge supplied Lane A's follow-up worklog at
`C:/Users/rober_24syk4j/.codex/attachments/744a8b3c-028f-4f8c-bd96-889a272893d2/Pasted text.txt`,
SHA-256 `83be4ba83d1ff2cfce82aed232ee06cfc3b32f2982868231ba8973d5f1b0e1a2`.
This is supplied draft evidence, not Lane A's committed answer. Lane A reports C1/C2
manifests and hash checks in its scratchpad. Lane B has not received those files and does
not independently verify their contents from this report.

| Child | Review of supplied draft | What Lane A records next |
|---|---|---|
| AC1 | Decision rule matches the requested trade-off. One sentence overstates the conclusion: "it does not lower risk". | Use "fewer cycles does not prove lower risk". Keep actual risk conditional on the selected scope and review evidence. |
| AC2 | Reported 18/5 partition matches the comparison. Full-value evidence is not yet available to this review. | Commit the inspectable manifests, source/value hashes and disjoint-union reconciliation; preserve frozen evidence and actual-source rebind rules. |
| AC3 | Draft now separates byte/meaning acceptance, publication parity, health and C2 rebinding. | Record that text and its stage-specific refusal conditions in Lane A's answer. |
| AC4 | Draft names the possible checkpoint question and offers C if the Judge needs C1 live first. | Keep A's preference conditional on no such intermediate decision being needed. C2's lack of a functional dependency alone does not establish the checkpoint's value. |
| AC5 | Draft names pending repairs, owner, C2 authority after C1 health, destination and incomplete-state claim. | Record the contract; make clear that "C1 published; C2 incomplete" limits completion claims, not truthful reporting of the retained evidence. |
| AC6 | Draft correctly permits drafting and assessment now while application waits for D-434 publication/health. | Record lawful receipt and health destinations in each later unit's act before prepare. |
| AC7 | Draft preserves retained work, exclusions and Lane C's evidence limits. | Carry those limits into the answer without new trials or capability claims. |

AC1-AC7 remain Open in the canonical record until Lane A records its answer. This review
accepts the stated draft direction, not missing files or completed obligations. The requested
completion checks above are unchanged. A commit, a consistency pass and a scratchpad report
do not independently satisfy them.

Lane B makes the one-path raising commit under D-272/D-385 with the actual receiver receipt
preserved. No alternate Judge authorization for Lane A to commit the raise is needed. Lane A
then commits its evidence and its answer separately; Lane B reviews the bounded changes.
No push is included. B-156 remains terminal and unchanged.

### Completion and review route

1. Lane A acknowledges B-157, then records its changed answers and the evidence links here.
2. Lane A drafts C1/C2 evidence under this entry and checks the reconciliation above. Keep
   evidence and the one-entry answer in separate commits under the existing SOP.
3. Lane B reviews AC1-AC7 and only the changed evidence. Mark each finding Open, Answered or
   Verified in the body with the examined revision; do not self-verify the entry.
4. The Judge can assess the conditional comparison before execution prerequisites complete.
   Execution waits for D-434 publication/health and the selected bounded act(s).
5. At the next authorized tracker re-derivation, reflect this follow-up if it is still live;
   no tracker edit or guarded sync is required merely to raise or answer it.

## Approve / Reject

| Verdict | Item | Condition and follow-up phase |
|---|---|---|
| Approve | Lane A's count reconciliation, conditional decision rule and terminal-state correction; B-156 planning closure | Phase 1: retained within scope |
| Approve-with-conditions | Completed A/C decision contract | Phase 1: Lane A answers AC1-AC7; Lane B reviews the bounded changes |
| Defer | A/C application, publication, push and wider completion claims | Later bounded acts and recorded prerequisites; not authorized here |
| Reject | Cycle count as risk proof; health as semantic proof; all drafting held on D-434; old C2 bindings reused after C1 | Phase 1: correct the contract before execution |

## Lane A — AC1–AC7 answered, 2026-10-12

**Read at:** `2d3650a`. **Measured at:** `1640ff7`. **Authority:** the existing planning scope; no new Judge act.
Answer only: no repair, governed edit, trial, graph cycle or push. Lane A receives Lane B's raising commit and its
review of the supplied draft, and applies both requested wording fixes (AC1, AC5).

**Evidence:** committed at `99ad817` in `docs/handoff/artifacts/B-157/`. Hashes of the committed bytes:

| File | SHA-256 |
|---|---|
| `C1/C1-targets.json` (R1–R20, 18 targets) | `2702b0c377b52e077d71fc184d59e00c0d94d120ac3f70cde8237a62e86714e1` |
| `C1/F3-oldvalues-1640ff7.json` | `3167ae8e63f2beb3678e1a2a1d2094a39c9de625ae2017d8f2fc2bf875285821` |
| `C2/C2-targets.json` (R21–R25, R29, 5 targets) | `e17ef212997192b610e8b040f7ab7c9fe0f278e8dcf8341e2f4dae2ad22df7ee` |
| `C2/F3-oldvalues-1640ff7.json` | `576f1518757cca67bdd45ca8c885141ae04b2c48f0df137259f48f401d53b122` |
| `C-reconcile.mjs` | `11fbfe2ca51e563070051d152f089365c7929c55a5929d0fc5c218ad7c0584c9` |
| `C-reconcile-1640ff7.json` | `f806ec8495d45cc47e7cdc5893309e2490f744fa657d8fe62ba7e95027abad33` |

Reproduce, from the repository root, with A = `docs/handoff/artifacts/B-156/F3-optionA` and B = `docs/handoff/artifacts/B-157`:
`node B/C-reconcile.mjs A/F3-optionA-targets.json A/F3-oldvalues-1640ff7.json B/C1/C1-targets.json B/C1/F3-oldvalues-1640ff7.json B/C2/C2-targets.json B/C2/F3-oldvalues-1640ff7.json <new out file>`.
The bindings were made with B-156's accepted `F3-oldvalues.mjs` (unchanged). **Negative control:** a manifest with one
target in both units: exit 2, "overlap: R21-R22", no file. **Check:** `node scripts/check-consistency.mjs` with the
evidence staged on `2d3650a`: exit 0, 19/19.

### Answers

| ID | Answer | Status |
|---|---|---|
| AC1 | **Prefer A when** the whole selected batch can be reviewed at once and no release decision is needed between its groups. **Offer C when** the Judge names a checkpoint whose value justifies a second cycle and the temporary residuals. **Fewer cycles does not prove lower risk.** Actual risk depends on the selected scope and its review evidence. No safety, elapsed-time or cost claim is made | Answered |
| AC2 | C1 = R1–R20, 18 bound values over 10 paths; C2 = R21–R25 and R29, 5 bound values over 4 paths (repair IDs map to bound values, not one-to-one). `C-reconcile-1640ff7.json`: no overlap; union equals A's 23 targets; every manifest entry and every SHA-256 equals A's; all bound at `1640ff7`. Frozen evidence (`B-156` `d00a8f5`, `ae728bd`) is unchanged. **Rebind rules:** after `D-434` publication and health, C1's targets are located by semantic locus at the actual source and bound with `F3-oldvalues.mjs`; equal at the same lines → proceed; relocated → stop for Lane B review; changed → reassess and Lane B review. C2 repeats this **after C1's publication and health**, because C1's own act changes the shared Register, Build Spec and Inventory | Answered |
| AC3 | Three separate evidence stages per unit: **(1) candidate acceptance** — Lane B reviews the exact bytes and their meaning against the governing clauses, limits and retained gaps; a refusal means the unit is **not published**. **(2) publication parity** — the live graph matches the reviewed candidate; this does not prove repository-wide atomicity. **(3) separate health** — required checks and parity; a failure **stops progression** (for C, C2 does not start). Then C2's actual-source rebind (AC2). Each record names the stage that stopped. A health pass does not prove that a repair's meaning is right | Answered |
| AC4 | The question that C1's published evidence would answer: "Are the three curated fragment repairs (`frag7`, `frag13`, `frag15`) and the AIG-06 and TC6 current-state text accepted and live before the merge-attribute and pointer repairs are applied?" **For this scope A is preferred**, because the C2 repairs do not use that answer. This preference is **conditional**: lack of a functional dependency does not show that a staged review has no value. If the Judge needs that answer before C2, C is the right option, with: **proceed** = C1 health clean and C2 targets unchanged; **change** = a C2 target relocated or changed (review first); **stop** = a C1 candidate refusal or a C1 health failure | Answered |
| AC5 | If C2 is delayed or stops: pending R21–R25 and R29; owner Lane A; return trigger: a Judge C2 act after C1's health record; record destination: this entry's body and that act's record. The record reads **"C1 published; C2 incomplete."** That phrase **limits completion claims**: nobody claims all selected repairs are done. It does not limit truthful reporting of the retained C1 evidence. C1 is not reverted | Answered |
| AC6 | `D-434` gates **application only**. Drafting, Lane B review and the Judge's conditional assessment proceed now. B-156 stays terminal. Each later execution act names its lawful receipt route and health-record destination **before prepare** and reuses no expired exception | Answered |
| AC7 | Unchanged: the 173 wholly unassessed rows, the 9 partly read fragments and the open F2a items, with their owners and triggers; Lane C's recorded limits (C5 host output unavailable; the supplied-summary provenance). Excluded from A and C: R26–R28, P1, P2. No tool adoption, native setup, trial or product-delivery claim | Answered |

**Not changed by this answer:** the Status line (Open), any Resolution, B-156, `D-434`, the tracker. B-157's tracker
row belongs to the next authorized re-derivation. **Drift:** handoff-only; governed intent synced at `93aa02f`; no
graph sync needed.

| Verdict | Item | Condition and follow-up phase |
|---|---|---|
| Approve | Receipt of `2d3650a`; AC2 evidence committed and reconciled | Phase 1: recorded |
| Approve-with-conditions | AC1–AC7 answers | Phase 1: Lane B reviews the answers and the changed evidence; Lane B records each child's outcome |
| Defer | The Judge's choice of A or C; application; publication; the batch push | After `D-434` publication and health, under a bounded act |
| Reject | "Fewer cycles" as proof of lower risk; health as proof of meaning; C2 bound with pre-C1 line numbers; "C1 published; C2 incomplete" read as full completion | Phase 1: no action |

## Lane A — AC2-R1 and AC6-R1 answered (changed items only), 2026-10-12

**Read at:** `cdbc767`. **Measured at:** `1640ff7`. Existing planning scope; no new Judge act. **No push.**

**Receipt.** The Judge supplied Lane B's bounded review of `cdbc767` as an external draft:
`C:/CoWork/outputs/b157-review-2026-10-12/HANDOFF-REVIEW.md`, SHA-256
`046a1ba8a974553f0965f709a437b8349c55959fe9f3d648be34649d5919768d`, with `review-result.json`
(`c5ed080aa3339fcad200d02bc70a7ea528b0e372d36f8b6633521ccac4d0fc5e`). It is **supplied evidence**: Lane B has not
recorded it in this entry. Lane A records its two findings here and accepts both. Its other outcomes are noted as
supplied: AC1, AC3, AC4, AC5 and AC7 accepted within planning scope; the current 23-value packet independently
matches A and the frozen Git source.

**Evidence:** committed at `e363aa3` in `docs/handoff/artifacts/B-157/`. Revision 1 (`C-reconcile.mjs`, `99ad817`)
stays unchanged as history.

| File | SHA-256 |
|---|---|
| `C-reconcile-r2.mjs` | `b61f373668b4f6f28a2c066f23691e91ea08aa7beec56545b0fce3e51c5d7e20` |
| `C-reconcile-r2-controls.mjs` | `72ff12ed207bf72ea8c5e6d949931eed54eacc366319e61015b64449ca2c7702` |
| `C-reconcile-r2-1640ff7.json` | `b6cf6b78fdad6962474a510be02cdedfb49a665c60f32309f8686208bcc4a00c` |
| `C-reconcile-r2-controls-result.json` | `49d56df6945802d187a34715837c18fdc4e5ce16f873338b7a8d2bbd7f8f3444` |

Check: `node scripts/check-consistency.mjs` with this evidence staged on `cdbc767`: exit 0, 19/19.

### Changed items

| ID | Origin → correction | Lane A answer (evidence `e363aa3`) | Status |
|---|---|---|---|
| AC2-R1 | Lane B review of `cdbc767`: revision 1 compared stored hash fields and counts only, so it accepted (a) a full value altered with its stored hash unchanged and (b) one binding duplicated with another omitted | **Corrected, not narrowed.** Revision 2: (1) exactly one binding per manifest target, no duplicate and no extra binding id; (2) each binding's locator equals its target's; (3) the SHA-256 of every full value is **recomputed** and must equal the stored hash **and** A's recomputed hash; (4) A's own bindings get the same checks. **Controls:** the valid arm passes; five negative arms each exit 2 and write no output: overlap; altered value with unchanged hash; duplicated/omitted binding; locator change; value and hash changed together. **Cross-check:** Lane B's own two counterexample inputs both refuse under revision 2 (exit 2, no file), and revision 1 still accepts the altered-value input. The current 18 + 5 = 23 packet passes revision 2 unchanged. Limit: revision 2 checks recorded values against A; it does not re-read Git (B-156 `F3-oldvalues.mjs` binds values from Git) | Answered |
| AC6-R1 | Lane B review of `cdbc767`: the `cdbc767` Defer row placed the Judge's A/C choice after `D-434` publication, which contradicts AC6 | **Corrected.** The `cdbc767` verdict rows stay as history. The verdict rows below **replace** them. They separate conditional assessment (now) from application (after `D-434` publication and health) and from the push (its own checkpoint) | Answered |

### Corrected verdict (replaces the `cdbc767` verdict rows)

| Verdict | Item | Condition and follow-up phase |
|---|---|---|
| Approve | Receipt of `2d3650a`; AC2 evidence (`99ad817`) and its revision-2 reconciliation (`e363aa3`) | Phase 1: recorded |
| Approve-with-conditions | AC1–AC7 answers, with AC2-R1 and AC6-R1 | Phase 1: Lane B reviews the changed items and records each child's outcome |
| Approve-with-conditions | **Conditional A/C assessment** | **Available now**, using the reviewed comparison. It does not authorize application |
| Defer | **Applying A or C and publishing its candidate** | Later bounded act(s), after `D-434` publication and its separate health record |
| Defer | **Batch push** | A separately authorized checkpoint after the required validation; the graph cycle count does not set the push count |
| Reject | "Fewer cycles" as proof of lower risk; health as proof of meaning; C2 bound with pre-C1 line numbers; "C1 published; C2 incomplete" read as full completion; revision-1 reconciliation output as proof of full-value integrity | Phase 1: no action |

**Drift:** handoff-only; governed intent synced at `93aa02f`; no graph sync needed.
