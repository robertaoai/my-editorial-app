# B-076 — R66–R68 independent review finds lifecycle-contract mismatches

- **Raised:** 2026-09-03 by Lane B
- **Kind:** finding
- **Phase:** 1
- **Blocks:** terminal verification of B-072 and B-073/B-074/B-075; no product implementation
- **Status:** Answered
- **Lane A:** **Acknowledged and applied 2026-09-03**, under the bounded Judge authorization to
  apply `B076-R1`–`R5` as one packet. All five findings are accepted as correct. `R1`: appended to
  `B-072` and `B-075` — while `Applied`, `Verified-At-Commit` is a REQUIRED non-terminal anchor and
  `Verified-By` is absent; `B072-R68-SC1` and `B075-SC1` are superseded, and `closure-readiness` is
  **not** changed. `R2`: appended to `B-073` `SC5` and `B-075` `SC6` — independence excludes the
  answering/applying side, so **Lane A is barred and Lane B is eligible** despite having raised and
  drafted. `R3`: current evidence wording in `B-073`/`B-074`/`B-075` now distinguishes the anchor
  from the absent `Verified-By`. `R4`: appended under `D-186` — the `R67` unit changed no other
  **governed tier**; `B-074` changed only to record handoff disposition. `R5`: the tally word is
  removed from `B-072`'s named terminal gate. **Lane A sets nothing to `Verified`.**
- **Resolution:** Applied
- **Verified-At-Commit:** `a1ad545` — the commit applying this correction. **An evidence anchor,
  REQUIRED while `Resolution` is `Applied`** (`B076-R1`); terminality needs `Verified` plus
  `Verified-By`, and only a non-answering actor may set them (`B076-R2`).
- **Evidence:** settled revision `7c0bb94`; application commits `bfb77f4`, `a2fbb21`, `b537d66`; `docs/handoff/README.md` lifecycle table; `scripts/checks/closure-readiness.mjs`; full local consistency suite

## What happened

Lane B independently reviewed the ordered R66–R68 application and final Graphify synchronization at
`7c0bb94`. Git confirms the guide, application and evidence-anchor commits are separate and ordered;
the final graph covers all three guides; and the full local suite passes. R66's frozen-source routing
and R67's append-only R21 classification are substantively correct.

R68 correctly re-pointed `Verified-At-Commit` rather than removing it. The canonical handoff
lifecycle says `Applied` means corrected at a **named commit**, and `closure-readiness` enforces that
anchor. Terminal verification arises only from `Resolution: Verified` plus an independent
`Verified-By`; it does not arise from the commit anchor alone. The applied files still contain
acceptance language that asserts the opposite, and their verifier-identity wording conflicts with
the explicitly designated independent Lane B review.

## Findings — parent first

| ID | Gap | Guaranteed failure | Smallest corrective draft |
|---|---|---|---|
| `B076-R1` | `B072-R68-SC1` and `B075-SC1` require `Verified-At-Commit` to be absent while `Applied`, contradicting the canonical channel lifecycle and installed check | Either a correct Applied entry fails the criterion, or the evidence anchor is removed and `closure-readiness` fails | Append a correction: while `Applied`, `Verified-At-Commit` is required as a non-terminal evidence anchor and `Verified-By` is absent; `Verified` requires both fields plus independent confirmation |
| `B076-R2` | B-073 `SC5` says the verifier did not author the guide; B-075 `SC6` says the reviewer is not the drafting actor, while B-072 explicitly assigns terminal review to Lane B, which drafted the guides | The named reviewer can never satisfy the acceptance criteria, so B-072 cannot close even after a valid independent review | Align to the canonical rule: the verifier must not be the **answering/applying side**. Lane A answered/applied; Lane B may verify. Do not require the raiser of a finding to be a different lane |
| `B076-R3` | B-073/B-074/B-075 evidence text says “No terminal verification field is set” although each has `Verified-At-Commit` | A reader cannot tell whether the named field is forbidden, present, or terminal | Replace only the current-valued wording: “Resolution remains Applied; Verified-At-Commit is the evidence anchor; Verified-By is absent, so no terminal verification is claimed” |
| `B076-R4` | `D-186`'s R67 scope says it “edits no other file,” but the same application commit updates B-074 | The scope statement is factually false even though the write set was legitimate | Append a narrow correction: no other **governed tier** changed; B-074 changed only to record handoff disposition/evidence |
| `B076-R5` | B-072 restates “Remaining terminal gate — one” | The count duplicates a fact and can drift independently of the named gate | Retain the named independent-review gate and remove only the tally word |

These are documentation-contract defects, not failures of R66/R67 behaviour or R68's chosen
evidence-anchor mechanism.

## Corrective packet — no SOP duplication

### Parent 1 — settle the lifecycle meaning

Append one correction to B-072's existing R68 review and one correction to B-075 stating:

> For an `Applied` entry, `Verified-At-Commit` is a required, non-terminal evidence anchor.
> `Verified-By` remains absent. Terminal verification exists only when an independent actor changes
> `Resolution` to `Verified`, names itself in `Verified-By`, and anchors that review at an existing
> commit. This supersedes the literal absence requirements in `B072-R68-SC1` and `B075-SC1`.

Do not change `closure-readiness`; its current behaviour agrees with the canonical channel rule.

### Child 2 — settle who may verify

Append corrections to B-073 `SC5` and B-075 `SC6`:

> The verifier did not answer or apply the correction. Lane A was the answering/applying side;
> Lane B may independently verify the application even though Lane B raised the finding and drafted
> its guide.

This changes no lane state and grants no product authority.

### Child 3 — normalize current wording and the R67 scope

1. In B-073/B-074/B-075 current-valued evidence text, distinguish the non-terminal commit anchor
   from the absent `Verified-By` field.
2. Remove the redundant tally word from B-072's named terminal gate.
3. Append the R67 scope clarification under D-186; preserve the original wording as history.

### Child 4 — final evidence

Commit and push the source correction, update `frag120.json` by upsert so its B-075 node no longer
calls the lifecycle issue unresolved, rebuild Graphify, and rerun the full suite. Lane B then reviews
the new immutable revision. Do not mark any entry `Verified` in the correction authored by Lane A.

## Success criteria

| ID | Given | When | Then |
|---|---|---|---|
| `B076-SC1` | An entry is `Applied` | Its closure fields are read | It has an existing `Verified-At-Commit`, no `Verified-By`, and makes no terminal claim |
| `B076-SC2` | B-072 terminal review is assigned to Lane B | Independence is checked | Lane B is eligible because it did not answer or apply the corrections |
| `B076-SC3` | R66/R67/R68 are reviewed | Substantive results are compared with their guides | R66 and R67 pass; R68's re-pointed evidence anchor passes under the corrected criterion |
| `B076-SC4` | D-186's R67 scope is read | Its commit is inspected | B-074 is disclosed as handoff evidence and no other governed tier is claimed changed |
| `B076-SC5` | The correction is pushed | Graph and checks run | Graph source and description agree at the same revision, curated nodes survive, and the full suite passes |
| `B076-SC6` | Terminal promotion is attempted | Metadata is written | A non-answering actor sets `Verified`, `Verified-By`, and the review commit together |

## What you did instead

Lane B independently reviewed the settled revision and recorded these findings. It did not change
the canonical SOP or checker, rewrite the Decision Register, promote any entry to `Verified`, alter
Graphify, authorize product work, or move lane state.

## Approve / reject

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | R66 application | Frozen authority and writable refinement are separated | Preserve |
| **Approve** | R67 application | R21 is append-only corrected to Closed | Preserve, with R4 scope wording fix |
| **Approve-with-conditions** | R68 application | Re-pointing the evidence anchor is correct; acceptance wording is not | Apply R1–R3 |
| **Approve** | Graphify/check evidence at `7c0bb94` | Current and mechanically green | Resync after the correction |
| **Reject verification** | B-072 and child guides | R1–R5 prevent unambiguous terminal closure | Lane A correction, then Lane B re-review |
| **Defer** | Product, hook/check implementation and lane transition | Separate governed chains | Separate authorization |
