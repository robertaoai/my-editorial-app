# B-142 — E4 Level 1 verification of intake contracts and SM05 evidence

- **Raised:** 2026-09-27 by Lane B
- **Kind:** finding
- **Phase:** 1
- **Blocks:** full `SV2-DOD-05` closure and a claim that the `V1-SM05` Gate 2 evidence is complete
- **Status:** Open
- **Lane A:** Acknowledged 2026-09-27, receipt only, read at `9b32773`. All six results and the four gaps are
  accepted as findings. Nothing is applied yet. Each correction (the §3.1/§4.5 pointers, the no-original-URL refusal
  case, the `B-131` lifecycle return, the Jev enforcement choice and E5) waits for its own Judge act. The §3.3
  receipts are recorded when that act lands.
  **Applied 2026-09-27 (`D-288`, `f377424`).** The Judge approved fixes 1–2, accepted `B-131`, ran E5 and kept Jev:
  - the §3.1 pointer and the §4.5 dated note are added;
  - the no-original-URL refusal is the DoD's case (4), with a distinct artifact per case;
  - `B-131`'s disposition is accepted on your item 5;
  - E5 compared the hosted Entry 06: no update required;
  - the Jev manifest is kept, with the limit stated in `D-288` item 5.

  Receipts are recorded on seven §3.3 rows. Every blocking row meets Gate 1B, and `SV2-DOD-05` is reviewable but not checked. Status stays Open: your Gate 2 conditions (items 3, 4 and 6) remain.
- **Verified-By:** — not yet dispositioned; raised by Lane B
- **Evidence:** `D-280`–`D-287`; `SV-002` §§2.3/3.3/3.4/7; `FN-GATES-01-05.md` §§2/3.1/4.5/4.6; `Modular_PRD.md` `FR-01`, `AC-02`, `TR-DM-07`; `V1-SM05.md` DoR→DoD map and DoD; `B-096`, `B-131`, Panel A11, `ENCYCLOPEDIA-SYNC.md` Entry 06; v15 export SHA-256; `scripts/jev/manifests/V1-SM05.json` and `scripts/jev/lib.mjs` completion rules; Graphify and Jev readiness reads at the commit below
- **Verified-At-Commit:** 7acac90de3e9a88847558d41f2fbc95bd8a183a6

## What happened and the governing boundary

The Judge approved E4 as **one Lane B verification entry**. Lane A's E3a/E3b successor acts and the DoD addition are present through `D-287`. This entry compares their *applied text* to the decided business meaning, then states the evidence still needed. It is an independent Level 1 review, not application construction, a hosted Encyclopedia comparison, a `SV2-DOD-05` checkoff or Gate 2 acceptance. `B-141` remains the row-by-row E1 mapping review; its classifications are not repeated here.

## Parent-first Level 1 result

| Parent / dependent surface | Result against the cited source | Return before closure |
|---|---|---|
| **1. `B-095.D2a` — `D-280`** | **Verified as an applied wording correction.** The eight `D-222` intake-source statements are present in `FN-GATES` (§1, §2.1, §2.3, §3.1 entry and supply, §3.2, §4, §5). `FR-01` admits a source reference with one subject topic and trend signal; `AC-02` keeps same submitter/brief/day POC duplicate refusal and never creates global URL uniqueness. `D-222`'s three wording variants are not a different input contract once read through the later, Judge-accepted §4.6 pair rule. | Put an explicit §4.6 pointer beside §3.1's short “URL or `.md`” wording when Lane A next edits that source. A `.md` with **no original URL** must be refused under `D-285`; the older short phrase cannot authorize it. Verify that case at Gate 2, separately from the three `D-287` fixtures. Do not rewrite frozen `PRD`/Charter or silently change the already checked `AC-02` scope. |
| **2. `B-096.S15` — `D-281`/`D-282`, `FN-GATES` §4.5** | **Verified for the bounded first-version contract.** Choice A has its original 2026-09-14 locus in the Register; the seven accepted rules separate typed state, event history, working versions and frozen reports. The first version belongs to one accepted commission, is numbered, append-only, human-supplied and traceable; a later-version *trigger* is expressly outside SM05. This is behaviour, not a physical schema or a report-workstore substitution. | §4.5's undated “**Open, and not decided here**” bullet still names `.md` reference/retention, although §4.6 and `D-286` have since defined and accepted it. Lane A should date the supersession or link to §4.6 so readers cannot treat the settled child as still open. The later-version trigger and physical store remain open on their own terms. |
| **3. `B-096.TR-DM-01` Gate 1B — `D-283`, `TR-DM-07`** | **Verified as a logical Product data requirement.** `Modular_PRD` §6.3 names one package per commission, version identity/order, version-1 entry fields, supplier/time, no state and append-only treatment; the immutability table, §7.1 scope row and §7.3 `FR-01` coverage carry it. `0001`/`0002` do not contain the working store, and `editorial_reports` is a frozen snapshot. | The `D-242` work order must cite **both** §4.5 and §4.6: it needs a physical version store for the full Markdown text and its digest/reference pair, plus real-database append/refusal evidence. `TR-DM-07` is not proof that a migration already exists. `FR-15`'s missing §7.1/§7.3 index is an earlier Lane A traceability gap recorded by `D-283`, not a reason to invent physical design here. |
| **4. `D-219.R1` — `D-284`–`D-286`, `FN-GATES` §4.6** | **Verified as a decided, applied and Judge-accepted rule.** A Markdown representation is manually supplied text, paired with its original URL only when automated retrieval is blocked; a digest identifies the exact retained text, while the existing source-URL/brief/day rule remains the duplicate anchor. Missing original URL, empty text, missing retrieval reason or original identification refuse admission. Full text is retained in the version payload; resources remain links. The separately backlogged print/offline-source route is not admitted by this pair rule. | At Gate 2, include a negative test for Markdown **without** an original URL, in addition to the three named fixtures. A passing URL and passing admitted Markdown alone do not prove the admission refusals. |
| **5. `B-131` application after `D-259`** | **Verified as a historical application at this read commit, within the 2026-09-24 Option-2 boundary.** Panel A11.2 states the Judge's W2 downstream-evidence rule; A11.5 records W1–W3 Accept on the normal/revision walks and cites B-131. `V1-SM05` records checked `DOR-R5`/`R6` with Option 2. The committed v15 export hashes to `BC97BEBAC0F3AC2D3F3D8FED32C3A9CB93684B60F829FEE3604B08FAF34ACE9F` and contains the Entry 01/05/06 dated notes B-131 reviewed. This proves the recorded export comparison, **not** a direct hosted-page comparison. | `B-131`'s own header still reads `Resolution: Applied` and has no independent `Verified-By`; §2.3's header-based return test therefore remains open until a separate Lane B lifecycle update or the Judge's explicit acceptance of that disposition. This one E4 entry supplies the evidence once for `B071-R205`, `B-095.D4` and `B-104.O1`; it does not forge a `B-131` header state. **E5 is separate:** `D-280` re-flagged Entry 06 after §3.1 changed, so the old v15 export cannot prove its current hosted content. |
| **6. `D-287` — `V1-SM05` “Intake source fixtures”** | **Verified as a written DoD obligation.** The three §4.6 rule-6 cases appear verbatim under one new DoD label, each requires real-database and failing-first evidence, and `DOR-R1` maps to that exact label. The Build Spec records the DoD change. Independent `bun run jev readiness --manifest scripts/jev/manifests/V1-SM05.json` still reports `pass 272/272` against the unchanged manifest. | **Do not use a green Jev completion receipt alone as proof of all three fixtures.** `scripts/jev/lib.mjs` checks at least one passing item per DoD label; `negativeRequired` and `failingFirstRequired` in the manifest omit this new label. Thus one generic passing artifact can satisfy Jev's label-level check without proving the no-source refusal or failing-first runs. At Gate 2, Lane B must attach distinct URL-pass, admitted-Markdown-pass and no-source-refusal artifacts with failing-first traces, plus the no-original-URL Markdown refusal above; Lane A independently checks all. If mechanical Jev enforcement is chosen, amend the manifest and re-run the pinned readiness receipt as a separate authorized act before completion. |

## Gaps and acceptance order

1. **Lane A documentation reconciliation:** date §4.5's now-stale `.md` “Open” bullet and make §3.1 point to the accepted §4.6 pair rule. These are clarity corrections in the owning `Fn_Specs` tier; this review does not edit it. `D-285` already decides the semantics, so do not reopen a business choice to fix a pointer.
2. **Handoff verification lifecycle:** use this E4 evidence for the historical B-131 application once, then complete B-131's own header-based §2.3 return through its proper independent lifecycle act or explicit Judge acceptance. The same evidence serves the three dependent matrix rows; do not create three duplicate verifications.
3. **E5, then setup DoD:** compare Encyclopedia Entry 06 with its currently published version or obtain the Judge's acceptance naming Entry 06. The ledger explicitly says the 2026-09-24 v15 comparison predates `D-280` and is stale for the new §3.1. Only after E5, the remaining §2.3 returns and each blocking row's own receipt may Lane A review `SV2-DOD-05`. Other setup DoD rows and the Judge's Gate 2 act still govern `V1-SM05` selection.
4. **Gate 2 build evidence, later:** the work order specifies the new physical store/migration and tests the exact source pair, full-text retention, version immutability and refusal paths against the real database. The new DoD label remains unchecked until all distinct cases have failing-first results; a readiness receipt proves scope consistency, not product behaviour.

**Graph/drift read.** `.graphify/branch.json` analyzed HEAD equals `7acac90` with `stale: false`; the graph is current at the reviewed governed commit. `graphify check-update` nevertheless reports pending semantic descriptions, so it is not proof of complete semantic enrichment. No graph rebuild is due to this `docs/handoff/`-only review; Lane A runs its governed-docs sync after its own source corrections. The local `.graphify` symlink is untracked and untouched.

## What Lane B did instead

Lane B compared the six E4 surfaces and drafted the return conditions here. No canonical Lane A source, Jev manifest, migration, code, checklist checkbox, Encyclopedia artifact, lane state or graph artifact was changed.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve-with-conditions** | `D2a`, §4.5, `TR-DM-07` and §4.6 as bounded Gate 1B contracts | Gate 1B — record the semantic pointers and preserve the separate physical work-order proof |
| **Approve-with-conditions** | B-131's historical `DOR-R5`/`R6` application | Gate 1B — complete its own header-based lifecycle return; E5 separately re-verifies current Entry 06 |
| **Approve-with-conditions** | `D-287` DoD wording and `DOR-R1` map | Gate 2 — require each real-database fixture and failing-first/refusal evidence beyond Jev's current label check |
| **Defer** | E5, the migration, live fixture runs and `V1-SM05` construction | Gate 1B → Gate 2 — each has its own evidence and Judge gate |
| **Reject** | Treating `SV2-DOD-05`, the current Entry 06 or the new DoD item as complete from E4 or a green Jev readiness receipt | Gate 1B → Gate 2 — their specific verification and execution evidence is still absent |
