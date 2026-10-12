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
