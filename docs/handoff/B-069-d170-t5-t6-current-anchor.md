# B-069 — D-170 needs a current T5/T6 anchor and partial-supersession notice

- **Raised:** 2026-09-02 by Lane B
- **Kind:** spec-defect
- **Phase:** 1
- **Blocks:** B-068/F7 verification and any fresh T5/T6-sensitive S2 build authorization
- **Status:** Answered
- **Lane A:** Acknowledged and answered 2026-09-02 (`D-180`). Added the current-anchor/partial-
  supersession notice directly above `D-170`'s body (`V1-DECISION-REGISTER.md` §5.14dw) per this
  packet's Parent 2 lifecycle table, without editing `D-170`'s body or copying the full target
  contract. `D-180` also applies `B-068` §21's `R50`–`R52` corrections in the same pass (Parent 3).
  `D-171`'s hold is unaffected. Graphify sync and independent re-review remain separate, unstarted
  work (Parent 4). **Superseded 2026-09-02 (`D-181`):** independent re-review of `D-180` found the
  anchor notice itself needed four corrections (`B068-R53`–`R56`); `D-181` is now the current T5/T6
  anchor and appended its own "Anchor update" subsection below (`D-170`'s body remains unedited).
- **Resolution:** Applied
- **Verified-At-Commit:** 7cb7656 — the `B068-R57`–`R59` tracking-correction commit (`D-181` itself
  applied at `9006f4d`, superseded as the evidence anchor by `B068-R60`); not a `Verified` claim
  (`Resolution` stays `Applied`), only the commit where this evidence is currently observable
- **Evidence:** `V1-DECISION-REGISTER.md` `D-170`, `D-171`, `D-175`, `D-179`, `D-180`, `D-181`
  (§5.14e7); `B-068` §21 (`B068-R50`–`R52`), §22 (`B068-R53`–`R56`, `B068-R57`–`R60` at §22.9);
  local `docs-drift` result synced at HEAD `7cb7656`

## What happened

`D-170` is closed as a decision record, but “closed” does not say which of its clauses remain current.
Its body still directly states a single Chief Editorial Desk reviewer at `T5` and says the historical
`T5`/`T6` order remains build-authorized. Later decisions changed those facts:

- `D-171` supersedes the build stance and holds both the historical and target orders;
- `D-175` retains the human Chief Editor at `T6` but corrects `T5` to route-dependent Chief Editorial
  Desk, Chief Journalist, or both as distinct parallel reviewer acts;
- `D-179` propagates substantive target requirements while retaining the no-build hold; and
- `B-068` §21 finds the remaining Product ownership, metric/security, and RACI defects as
  `B068-R50`–`R52`.

A reader or search result that lands on `D-170` can therefore retrieve superseded T5 and build-status
claims without encountering the correcting decisions. Treating the whole decision as superseded is
also wrong: its `F1` axis separation and core `F5` `A`/`O`/`EA` authority contract remain valid.

### Why this requires Lane A

This is a decision-lifecycle and source-propagation defect in Lane A's documents, not an application
implementation task. The correction must distinguish four independent states:

- **closed** — deliberation ended;
- **current or superseded** — whether a clause still governs;
- **build-held or authorized** — whether Lane B may implement it; and
- **applied or verified** — whether propagation has been independently proven.

Collapsing those states is guaranteed to let a historical decision be cited as current, or to make a
decided target look build-authorized before F7 verification.

## What you need

### Parent 1 — issue one current correcting anchor

Record the next Lane A decision so it:

1. accepts the valid D-179 propagation without repeating it;
2. corrects only `B068-R50`–`R52` using `B-068` §21.3 as the detailed packet;
3. preserves `D-171`'s explicit no-build hold; and
4. becomes the sole current citation for the consolidated T5/T6 target after those corrections land.

The consolidated target is:

- `T5` is one logical stage containing route-required sibling review acts;
- each T5 review act has one attributable executor and exactly one scoped `R`;
- Chief Editorial Desk, Chief Journalist, or both execute those acts according to route;
- the T5 bundle join has no judgment, `R`, or `A` and cannot start T6 until every required report is
  sealed;
- `T6` is the natural-person Chief Editor's final in-system decision; and
- the target remains `decided_target_held` until a separate fresh build authorization.

### Parent 2 — add navigation at D-170, without rewriting history

Add a notice before `D-170`'s decision body that classifies its clauses:

| D-170 clause | Lifecycle |
|---|---|
| `F1` eight-axis separation | Retained |
| `F2` human Chief Editor at T6 | Retained and confirmed by D-175 |
| `F2` single Chief Editorial Desk role at T5 | Superseded by D-175 |
| `F5` core `A`/`O`/`EA` authority contract | Retained |
| `F5` return-metric interpretation | Re-derived by D-171 and the R51 correction |
| Scope statement leaving the historical order build-authorized | Superseded by D-171 |

The notice must say that D-170 is historical provenance, not a standalone T5/T6 implementation
anchor. New specifications, tests, build orders, metrics, and permission rules must cite the new
current anchor; D-170 may be cited only to explain provenance.

Do not delete or silently rewrite D-170's body. Do not copy the complete target contract into the
notice; either act would create another drift surface.

### Parent 3 — apply B-068 §21 once, under the new anchor

Use the existing packet rather than minting duplicate findings:

- `R50`: finish Product FR/AC ownership and make target story dependencies avoid historical rows;
- `R51`: align `G-02`, `G-05`, `SEC-01`, and `SEC-03` with T5 reviewer acts and human T6; and
- `R52`: replace the two-R T5 task with sibling one-R review acts and a non-judgment bundle join.

Propagate the facts to their owning tiers in the same pass under `D-54`. Preserve historical rows with
explicit lifecycle labels and do not renumber existing unsuffixed acceptance criteria.

### Parent 4 — synchronize and verify only after the source is final

The local consistency suite currently fails `docs-drift`: Graphify analyzed `73a205d`, while HEAD is
`a506db7`. Commit the corrected source and fragment set first; then rebuild Graphify, re-merge curated
fragments if required, and independently review that same final pushed commit.

Success requires:

1. direct T5/T6 queries resolve to the new current anchor, not D-170's superseded clauses;
2. target story and acceptance-criteria traces never traverse historical held rows;
3. `G-05` is evaluated at T6 after the sealed preliminary disposition and T5-bundle reveal;
4. `SEC-01` proves T4→each T5 act and each T5 act→T6 separation, with target `R=A` only at T6;
5. `SEC-03` assigns target T5 reviewers to Line 1 and T6/T11 execution to Line 2;
6. every T5 review act has exactly one `R`, while the bundle join has none;
7. `D-171`'s hold remains explicit and no implementation is authorized; and
8. Graphify's `lastAnalyzedHead` equals the final HEAD and all local consistency checks pass.

## What you did instead

Lane B consolidated the current/historical distinction and the parent-first correction order here,
while leaving `B-068` §21 as the authoritative detailed finding and failure-test packet. No Product
Requirement, Fn_Spec, RACI, decision-register, Graphify, configuration, schema, or application change
was applied. T5/T6-sensitive implementation remains stopped under `D-171`.

## Anchor update, 2026-09-02 (`D-181`)

`D-180` answered this item and named itself the current T5/T6 anchor. Independent re-review
(`B-068` §22) found four residual defects in `D-180`'s own correction; `D-181` corrects them
(`B068-R53`–`R56`) and is now the current T5/T6 anchor. `D-170`'s partial-supersession notice
(`V1-DECISION-REGISTER.md` §5.14dw) and `D-180`'s own forward notice (§5.14e6) both redirect to
`D-181`; neither historical body is rewritten. This entry is unedited above this section — the
anchor moves by notice, not by rewriting a prior answer.
