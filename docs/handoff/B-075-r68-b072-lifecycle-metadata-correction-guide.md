# B-075 — R68 B-072 lifecycle-metadata correction guide

- **Raised:** 2026-09-03 by Lane B
- **Kind:** blocked-on-decision
- **Phase:** 1
- **Blocks:** application and independent verification of `B072-R68`; no product implementation
- **Status:** Answered
- **Lane A:** **Acknowledged and applied 2026-09-03, with one recorded deviation.** Third of three
  units under the bounded Judge authorization *"approve one at a time commit: R66, R67, R68"*. §5
  steps 1–2 were satisfied first: `R66` pushed at `bfb77f4`, `R67` pushed at `a2fbb21`, neither
  absorbed into this range. B-072's current header now carries only current state — `R65`/`R69` via
  the `D-186` correction at `fab9952`, `R66`/`R67` at their own commits, enforcement recorded as
  **deferred hardening and not a closure gate**, and **one** terminal gate: independent Lane B
  review after final Graphify synchronization. `Verified-By` is absent.
  **Deviation from §2 / `B075-SC1`:** removing `Verified-At-Commit` while `Resolution: Applied` is
  not implementable — `closure-readiness` fails such an entry (*"an applied change that names no
  commit cannot be re-checked"*), confirmed empirically when `B-073` failed that way in this pass.
  On the Judge's direction the field was **re-pointed** from historical `8b0fa76` to this unit's
  application commit and labelled explicitly as an evidence anchor, not a `Verified` claim — the
  pattern `B-070`, `B-073` and `B-074` already use. `R68`'s stated concern is met; `B075-SC1` as
  literally worded is not. **Lane B to rule:** correct §2 to *re-point and label* rather than
  *remove*, or separately authorize a `closure-readiness` change. Lane A did not touch the check
  and recommends against changing it. Full reasoning in
  `V1-DECISION-REGISTER.md` §"Correction, added 2026-09-03 (`B072-R68`)".
- **Resolution:** Applied
- **Evidence:** `docs/handoff/B-072-*.md` current header; `docs/v1/V1-DECISION-REGISTER.md`
  §"Correction, added 2026-09-03 (`B072-R68`)"; prerequisites `bfb77f4` (`R66`) and `a2fbb21`
  (`R67`); `D-186` and its `R65`/`R69` correction at `fab9952`. **No terminal verification field is
  set** — only a non-drafting actor may promote this (`B075-SC6`)

## What happened

B-072's current-valued header says `Resolution: Applied` but also carries
`Verified-At-Commit: 8b0fa76`. That commit proves the historical `R54` correction, not independent
verification of the current B-072 packet. The same header still calls `R65`–`R69` closure gates
and says the relationship between enforcement and closure awaits `R69`, although the later
`D-186` correction already records the Judge's `R65` ratification and decides `R69`: enforcement
is deferred hardening, not a B-072 closure gate.

This is one mixed-lifecycle defect. Preserve the historical evidence in B-072's append-only body,
but make the current-valued header describe only the current state. This child handoff
operationalizes `B072-R68`; it does not duplicate or reopen B-072.

## What you need — parent first

### 1. Do not start R68 until R66 and R67 are applied

R68 is the consolidation child, not an opportunity to apply its parents implicitly. Before editing
B-072, confirm Git contains separately authorized and pushed application commits for:

1. `R66` — the frozen-source intake correction described by B-073.
2. `R67` — the append-only `D-186` lifecycle correction described by B-074.

The immutable B-073/B-074 guide commits are instructions, not proof that the corrections were
applied. Cite the actual later application commits in B-072's evidence.

### 2. Correct only B-072's current-valued metadata

Apply these rules to the header; preserve all append-only independent-review sections below it:

| Header fact | Required correction |
|---|---|
| `Status` | Keep `Answered` |
| `Resolution` | Keep `Applied` |
| `Verified-At-Commit` | Remove the field entirely while the resolution is not `Verified` |
| Historical `8b0fa76` evidence | Keep it in the append-only body as evidence for `R54`, never as current terminal metadata |
| `R65` | State that the Judge ratification is recorded by the `D-186` correction at `fab9952` |
| `R66`/`R67` | State their actual applied commits only after those commits exist and are upstream-observable |
| `R69` | State that enforcement is a deferred hardening follow-up, not a B-072 closure gate |
| Remaining terminal gate | Independent Lane B review of the settled R66–R68 packet after final Graphify synchronization |
| B-061/B-071 | Keep separate from B-072 closure |

Do not add `Verified-By` or a new `Verified-At-Commit`. Those fields appear together only when an
independent reviewer promotes the entire entry to `Verified` in a later, separately authorized
transaction.

### 3. Use one concise current-state block

Replace the stale closure-gates wording with this semantic shape, inserting only actual immutable
application commits where evidence is requested:

> **Resolution:** `Applied`. `R65` and `R69` are governed by the append-only `D-186` correction.
> `R66` and `R67` are applied at their separately pushed application commits, cited in `Evidence`.
> Hook/check enforcement is deferred hardening and is not a B-072 closure gate. After this `R68`
> metadata correction and final Graphify synchronization, independent Lane B review is the sole
> terminal gate. B-061 and B-071/proposed D-182 remain separate governed chains.

Do not recreate an exhaustive completed-work matrix, restate a count, embed a live local/remote
tip, or copy the transaction SOP into B-072.

### 4. Keep the future write set closed

| Target | Disposition |
|---|---|
| `V1-DECISION-REGISTER.md` | Append-only bounded authorization/application evidence for R68; do not rewrite D-186 |
| B-072 | Replace only its current-valued header fields and retain its historical body |
| This entry | Record `Applied` evidence; no self-verification |
| Graphify | Synchronize once, after the final R68 source commit; preserve and merge the curated layer |
| B-073/B-074 | Cite their later application evidence; do not rewrite the guides during R68 |
| Build Spec, Inventory, Phase Closure, `Modular_PRD`, `Fn_Specs`, `SPECS`, shared rules and work orders | Unaffected; no scope, sequence, artifact, lane-state or product change |
| B-061/B-071, hook/check build, `AUTH-DOC`, product work, lane transition and deployment | Excluded |

### 5. Execution sequence — one correction at a time

1. Verify R66's application commit is pushed; otherwise stop at R66.
2. Verify R67's later application commit is pushed; otherwise stop at R67.
3. Record bounded Judge authorization for R68 under `D-183`, naming this guide's immutable commit,
   actions, paths and exclusions.
4. Correct B-072's current-valued header and record R68 application evidence without adding
   terminal verification fields.
5. Commit and push the R68 source unit. Do not absorb R66 or R67 source edits into it.
6. At that settled source `HEAD`, rebuild Graphify, re-merge the curated fragments, run the full
   suite and record any required graph-sync artifact separately from the three source corrections.
7. Hand the exact final revision to Lane B or another non-drafting actor. Only that reviewer may
   promote B-072 from `Applied` to `Verified` if every criterion passes.

### Guaranteed failure and success criteria

The correction is guaranteed to fail review if a historical evidence commit remains in a current
`Verified-At-Commit` field; R66/R67 guide commits are presented as application commits; enforcement
remains a closure gate; the header claims `Verified` without an independent actor; Graphify is
synced before the source packet settles; or R66, R67 and R68 are collapsed into one corrective
commit.

| ID | Given | When | Then |
|---|---|---|---|
| `B075-SC1` | B-072 remains `Applied` | Its metadata is parsed | Neither `Verified-By` nor `Verified-At-Commit` is present |
| `B075-SC2` | Historical `8b0fa76` is searched | Its meaning is read | It is only R54 evidence in the historical body, not current terminal proof |
| `B075-SC3` | The current Lane A block is read | Remaining work is identified | R66/R67 are applied with real commits; R69 is decided; independent review is the sole terminal gate |
| `B075-SC4` | The R68 diff is reviewed | Changed paths are compared with authorization | Only the Register record, B-072 current header and B-075 evidence changed |
| `B075-SC5` | Final graph work runs after R68 | Currency and integrity are checked | `lastAnalyzedHead` matches settled `HEAD`, curated content survives, and the full suite passes |
| `B075-SC6` | Independent review runs | Lifecycle promotion is considered | The reviewer is not the drafting/applying actor and cites an existing, upstream-observable commit |

## What you did instead

Lane B drafted this guide and stopped. It did not apply R66, R67 or R68; edit B-072 or the
Decision Register; synchronize Graphify; claim verification; authorize product work; or alter lane
state.

## Approve / reject

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | `R68` problem definition | Current and historical lifecycle evidence are conflated | Preserve |
| **Approve-with-conditions** | B-075 guide | Header correction, dependencies and tests are ready | Apply R66, then R67; Judge authorizes R68 |
| **Reject** | Current `Verified-At-Commit: 8b0fa76` | It proves R54 only and contradicts `Resolution: Applied` | Preserve in historical body only |
| **Reject** | Enforcement as a B-072 closure gate | `R69` already classifies it as deferred hardening | Separate follow-up |
| **Defer** | Terminal `Verified`, product and tooling implementation | Requires independent review or separate authority | After final graph sync / separate chain |
