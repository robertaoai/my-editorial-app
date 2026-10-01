# B-141 — Lane B Level 1 review of `SV2-U04` mapping at `3541550`

- **Raised:** 2026-09-27 by Lane B
- **Kind:** finding
- **Phase:** 1
- **Blocks:** `SV2-DOD-05` checkoff and any claim that the `V1-SM05` construction packet is unblocked
- **Status:** Answered
- **Lane A:** **Disposition recorded 2026-10-01 (`D-377`), read at `91cc511`: `Applied` for its Gate 1B scope, with the Gate 2
  part transferred.** The `B-150` ledger's `O1` batch (`91cc511`) found the header still `Open` after its answer.
  Each item the `D-280` answer left pending was later resolved:
  - `B-096.S15`: Choice A and the §4.5 contract (`D-281`), its text accepted (`D-282`);
  - `TR-DM-01`'s Gate 1B part: `Modular_PRD` `TR-DM-07` (`D-283`);
  - `D-219.R1`: FN-GATES §4.6, accepted (`D-286`);
  - `B-131`: accepted (`D-288`);
  - the review of the `D-280` corrections: `B-142` (`D-288`/`D-289`);
  - `SV2-DOD-05`: checked (`D-289`).

  **Transferred by receipt:** `TR-DM-01`'s Gate 2 part (the physical migration and its real-database proof) goes to
  the `D-242` work order (`SV-002` §2.2 `P13`/`P14`), as the `D-280` answer stated. A transfer is not completion.
  Lane B verifies this disposition, including Gap 2 against `FR-01`, `AC-02` and `D-222`, before the `O1` row
  closes (`D-364` item 4).
  *Earlier answer:* Acknowledged 2026-09-27, read at `6561440`. **Findings accepted; partly applied by `D-280` (`5c05865`).**
  - **Gap 1:** `B-096.TR-DM-01` is reclassified `blocking` with a split proof, and §3.4 is not amended. **Gate 1B:** a
    `Modular_PRD` `TR-DM` data requirement for the append-only editorial-metadata version store, parented to `S15`.
    **Gate 2:** the physical migration and its real-database proof, named in the `D-242` work order (`P13`/`P14`).
  - **Gap 2:** `B-095.D2a` is **applied**. It carries `D-222`'s complete text on all eight `FN-GATES` intake-source
    statements, not only §2/§3.1, because `D-219`–`D-222` had already enumerated them. Your verification is requested
    against `FR-01`, `AC-02` and `D-222`, including whether `D-222`'s own phrasing variance (recorded in `D-280`
    item 3) is material. `B-096.S15` is unchanged and awaits its own act.
  - **Gap 3:** the §2.3 `B-131` row now names `SV2-DOD-02` and `SV2-DOD-05`, so one verification serves all three rows.
  - **Gaps 4–5:** the work-order obligations are carried at `P13`/`P14`, and `SV2-DOD-05` stays unchecked.
  - **New, from applying your gap 2:** blocking row `D-219.R1`, covering how a `.md` source is referenced and
    retained. Encyclopedia Entry 06 is flagged again, which reopens `B-095.D4`.
  - **Status stays Open.** `S15`, the `TR-DM-01` Gate 1B proof, `D-219.R1`, `B-131` verification and your review of
    the `D-280` corrections are each still pending, and each needs its own act.
- **Resolution:** Applied
- **Verified-By:** — not independently verified; dispositioned by Lane A
- **Evidence:** `D-279` and `SV-002` §3.3/§3.4 at `3541550`; `V1-SM05.md` DoR/DoD and `SM05-*` scope; `B-071`, `B-095`, `B-096`, `B-104`, `B-118`, `B-123`, `B-131`, `B-137`; `FN-GATES-01-05.md` §§2/3.1/4.3/4.4; `Modular_PRD.md` `FR-01`/`AC-02`; delivered `0001`/`0002` migrations; §2.3 Lane A-resolved handoff screen
- **Verified-At-Commit:** 91cc511950f3e9a10eae2f68d202b1e2b8ea2e53

## What happened

The Judge approved E2, Lane B's review of Lane A's E1 classification. `D-279` classifies the 27 `SV-002` §3.3 children; the graph's analyzed HEAD matches `3541550`. This review tests whether each child is consumed by the bounded `V1-SM05` targets in §3.4. It does not accept the child's underlying correction merely because its mapping is plausible. In particular, `B-131` is `Answered/Applied`, not independently `Verified`, and Choice A is accepted in `B-096` but absent from the Register. The current matrix remains Lane A's mapping; its Lane B receipt cells are pending. One mapping, `B-096.TR-DM-01`, fails the stated §3.4 re-screen rule and needs correction before E1 can be accepted in full.

## Level 1 row review — parent mapping before child closure

`Accept` below accepts the **blocking classification and destination**, not a final `decided/applied/verified` lifecycle claim. `Condition` names the precise return needed before the row can support `SV2-DOD-05` or the later work order.

| Key | Level 1 result | Source comparison and return |
|---|---|---|
| `B071-R202` | Accept non-blocking | `T5-FINAL`/`T6` transition rename is outside `SM05-X1`; B-071 keeps its own return. |
| `B071-R203` | Accept non-blocking | §11 node catalog `EG1`–`EG5` is distinct from §4.3's V1 task/evidence records; held `T6` does not enter this slice. |
| `B071-R204` | Accept blocking, bounded | `SM05-N2`/`N4` consume `OP-PITCH`/`OP-DRAFT`; `SM05-F1`/`X1` require the accepted `OP-FINAL-SIGNOFF` boundary. `B-123` verifies **contract feasibility only**, not execution of deferred operations. Retain that qualifier. |
| `B071-R205` | Accept blocking, conditional | `SM05-N1` and `N6` consume the Desk Editor/Chief Editorial Desk split. `B-131` accepted Panel A11 before Lane A applied it; verify that application through §2.3 before claiming this row complete. |
| `B071-R206` | Accept non-blocking | No SM05 acceptance target asserts “all virtual nodes”; B-071 keeps its terminology return. |
| `B071-R207` | Accept non-blocking | §4.4 scenarios use a manual trigger package rather than the named LinkedIn sample; re-screen only if an acceptance harness later adopts that sample. |
| `B071-R208` | Accept non-blocking | `D-241` makes MMF a planning label, not a lifecycle tier; the slice does not consume it as a tier. |
| `B-095.D1` | Accept non-blocking | §7.1's `CR-14` gap row is a separate correction; SM05's Product anchor is `FR-15`/`AC-23`–`AC-26`, with `FR-01` reached through `AC-02`. Keep A4's return. |
| `B-095.D2a` | Accept blocking, open | `FR-01` allows a URL **or another source reference**; `FN-GATES` §2 still says URL and §3.1 still requires/supplies `source_url`. Lane A must mark and apply the `[V1]` correction in all live §2/§3.1 claims, then Lane B verifies against `FR-01` and `AC-02`. |
| `B-095.D2b` | Accept non-blocking with scope bound | The wider A4 template requiredness remains its own decision. SM05 intake consumes the already stated source reference, one subject topic and trend-signal description; do not import `S2`/`S4`/`S6`–`S8` into its first write without a separate decision. |
| `B-095.D3` | Accept non-blocking | Storyboard §4 roll-up still needs its own supersession correction; Panel A11 owns this slice's visual contract. |
| `B-095.D4` | Accept blocking, conditional | Entry 06's v15 disposition reaches the DoD accepted-contract trace. `B-131` confirms a direct export read, but its Lane A application is still unverified; close §2.3's `B-131` row first. This is not a claim of hosted-page comparison. |
| `B-095.S5` | Accept non-blocking | SM05's normal/revision walk is `SM05-RV1`/`RV2`; S5 extends to publication, excluded by `SM05-X1`. |
| `B-096.GA1` | Accept non-blocking | GA1 concerns client-facing report artifacts; SM05 produces no report and `editorial_reports` is an explainability snapshot, not that artifact set. |
| `B-096.S15` | Accept blocking, open | `SM05-N1` writes the first working editorial-metadata version. `B-096` records the Chief Editor's 2026-09-14 Choice A, but the Register does not; S15's identity, ordering, append and immutability rules are not drafted. Record the existing parent act, then obtain Judge acceptance of the bounded S15 contract before Lane B verifies it. |
| `B-096.S16` | Accept non-blocking | An explainable report projection is not produced by the bounded intake/review slice; keep S16's own return. |
| `B-096.TR-DM-01` | **Reject the present non-blocking classification** | §3.4 includes a **data write** among current targets and permits later re-screen only when **only** the future first work-order child could consume a child. `SM05-N1` already consumes the first editorial-metadata version through its intake write, so the exception does not fit as written. Physical design belongs to Lane B and a new migration is later work: Lane A must either classify the consumed requirement as blocking and define an achievable setup-stage proof, or obtain a Judge amendment that expressly separates logical readiness from physical construction. `0001`'s `articles.url` and `0002`'s report table are not an append-only editorial-metadata version store. |
| `B-104.O1` | Accept blocking, conditional | `SM05-N6` consumes Chief Editorial Desk's `business:T5` ranking on `ROUTE-PROD-1`. Verify Lane A's Panel A11 application through §2.3 `B-131` before counting the row complete. |
| `B-104.O2` | Accept non-blocking | The full A4 journey is separate; Panel A11 owns SM05, whose `T6` half is excluded. |
| `B-104.O3` | Accept non-blocking | Historical-journey labelling is not a target of the SM05 packet; keep its own return. |
| `B-104.O4` | Accept non-blocking | Fallout/GRC is a different route variant; SM05 fixes `ROUTE-PROD-1`. |
| `B-118.RH1` | Accept non-blocking | Handoff partition key concerns the channel, not a Product acceptance or data-write target. |
| `B-118.RH2` | Accept non-blocking | Recursive controls for any future move concern the handoff channel; keep B-118's return. |
| `B-118.RH3` | Accept non-blocking | Classify-before-move is a channel migration rule; no SM05 target consumes it. |
| `B-118.RH4` | Accept non-blocking | Its historical DoR count is superseded; backlog closure is tracked through B-117, not treated as a new SM05 acceptance case. |
| `B-137.R1` | Accept blocking, bounded | The delivered `0002_s1_editorial_schema.sql` correction was Lane B-verified at `9735e47`. The not-yet-written first work-order child must be re-screened at `D-242`; the source correction alone does not prove a future child will read it. |
| `ENC-03` | Accept non-blocking | Entry 03 is outside `DOR-R6`'s 01/05/06 set. Its hosted comparison or named Judge acceptance remains an independent return, not silently waived. |

## Gaps, failure tests and parent-first implementation plan

1. **Correct the mapping rule conflict before completing the review receipt.** `B-096.TR-DM-01` cannot use §3.4's future-child re-screen exception while `SM05-N1`'s existing data write consumes its requirement. Lane A should return that row for a corrected classification and achievable proof, or seek a Judge amendment that distinguishes logical readiness from physical implementation without moving a hidden build dependency past the work order. Until then, “zero escalations” is unsupported as a final E1 result. The other rows may use this review as bounded feedback, but `SV2-DOD-05` stays unchecked. A Lane B receipt cannot replace decided, propagated, applied and independently verified evidence for blocking children.
2. **Fix the current logical blockers before the physical child.** For `B-095.D2a`, Lane A proposes the complete `[V1]` §2/§3.1 reference-language patch and an `AC-02` check for both URL and non-URL reference, with unchanged scoped duplicate behaviour. For `B-096.S15`, Lane A records Choice A with its actual 2026-09-14 locus, drafts the minimum accepted intake-version contract (package identity, first-version identity, ordering, append-only reassessment, no mutation of state or earlier versions), and seeks the Judge's bounded acceptance. These are separate Judge acts; E2 approval did not authorize E3a or E3b. A URL-only spec cannot satisfy the already decided `FR-01`, and an undrafted version contract cannot be implemented or verified merely from Choice A's label.
3. **Close the independent-verification dependency once, then reuse it.** §2.3 lists `B-131` as needed before `SV2-DOD-02`, while `D-279` uses it to close `B071-R205`, `B-095.D4` and `B-104.O1` for `SV2-DOD-05`. Lane A should show both dependent rows in §2.3 without creating three duplicate verification records. Lane B can verify the post-`B-131` application against Panel A11, the v15 export and the recorded Judge `W1`–`W3`/Option-2 decisions; hosted-page equality must not be asserted without that comparison. The other §2.3 entries keep their own `Needed before` points.
4. **Make the future work order executable before build.** Once the `TR-DM-01` mapping conflict is resolved, carry its physical design and `B-137.R1` into the actual first `D-242` child. A work order that omits the append-only metadata version store or cites an undelivered migration cannot pass the real-database intake/reassessment and persistence DoD. Specify the new migration and its acceptance tests there; do not edit frozen `0001`, treat `0002`'s `editorial_reports` as the working store, or start construction under this review.
5. **Use observable success criteria.** `SV2-DOD-05` becomes reviewable when every §3.3 key has a supported target/non-target explanation, all blocking rows have decision/application/independent-verification receipts, re-screen rows name their later work-order trigger, and Lane B's receipt is linked. `V1-SM05` remains blocked until the other `SV2-DOD-*` rows and the Judge's Gate 2 acceptance and selection also pass. A green consistency suite proves document structure, not those business outcomes.

**Graph and drift limit.** `.graphify/branch.json` reports analyzed HEAD `3541550`, equal to the reviewed commit, with `stale: false`. `graphify explain D-279` finds the extracted commit node but not a curated D-279 decision node; `graphify check-update` reports pending semantic descriptions. This is compatible with `D-276`'s open C4/C5 graph follow-ups. Lane A owns any governed-docs sync or fragment merge after its next canonical source change. This B-series handoff is excluded from governed-intent drift; graph currency alone cannot certify the row semantics above.

## What Lane B did instead

Lane B reviewed the 27 mappings and drafted bounded corrections here. It changed no canonical spec, Register decision, application code, migration, checklist row or lane state. E3a/E3b, independent `B-131` verification, the future work order and construction remain separate work.

| Verdict | Tier / item | Follow-up phase |
|---|---|---|
| **Approve-with-conditions** | The other 26 `SV-002` §3.3 blocking/non-blocking classifications as E1 mapping | Gate 1B — retain their separate decision, application and verification conditions |
| **Reject** | `B-096.TR-DM-01` as `non-blocking — re-screen` under the current §3.4 rule | Gate 1B — correct its classification/proof or obtain a Judge amendment before accepting E1 in full |
| **Approve-with-conditions** | `FN-GATES` `B-095.D2a` and governance `B-096.S15` draft fixes | Gate 1B — distinct Judge acts, marked `[V1]` correction and accepted logical contract, then Lane B verification |
| **Defer** | `B-096.TR-DM-01` physical design and `B-137.R1` first-child confirmation | Gate 2 / `D-242` — re-screen against the actual bounded work order before build |
| **Reject** | `SV2-DOD-05` checkoff, `V1-SM05` unblock or code construction from E1/E2 alone | Gate 1B → Gate 2 — missing independent and real-database proofs |
