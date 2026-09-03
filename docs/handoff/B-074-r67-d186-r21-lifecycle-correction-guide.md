# B-074 — R67 D-186 R21 lifecycle correction guide

- **Raised:** 2026-09-03 by Lane B
- **Kind:** blocked-on-decision
- **Phase:** 1
- **Blocks:** application and independent verification of `B072-R67`; no product implementation
- **Status:** Open
- **Lane A:**
- **Evidence:** `B-072` §`B072-R67`; `D-186` §Gaps and its 2026-09-03 correction; Graphify synchronization commit `56759ff`

## What happened

`D-186` says `B072-R21` is **Unchanged** and, in the same clause, says the Graphify
synchronization was **performed**. Those are mutually exclusive lifecycle claims. The later
append-only correction confirms that the synchronization occurred at `56759ff` and keeps `R67`
open, but it does not repair the earlier classification.

The historical sentence must remain intact because the Decision Register is append-only. The
current record must explicitly withdraw only the incorrect `Unchanged` label and establish the
effective state as `Closed`. This child handoff operationalizes `B072-R67`; it does not duplicate
or reopen B-072.

## What you need — parent first

### 1. Append one narrow correction to `D-186`

Use this meaning in the next authorized Register correction:

> **Correction — `B072-R21` lifecycle classification.** `D-186`'s original Gaps sentence placed
> `B072-R21` under **Unchanged** while also recording that its Graphify synchronization was
> performed. The `Unchanged` classification is withdrawn. The effective current state is
> **Closed**, evidenced by the completed synchronization at commit `56759ff`. The original sentence
> remains above as historical text and is superseded only for this lifecycle classification. The
> remaining `Unchanged` items begin with `B-061` and `B-071`/proposed `D-182`.

Do not rewrite the original Gaps paragraph, restate every closed item, or claim that the graph is
current at a later `HEAD`. Commit `56759ff` proves the historical `R21` completion; final graph
currency after `R66`–`R68` is a separate last-step obligation.

### 2. Keep historical completion separate from current graph currency

| Fact | Required state |
|---|---|
| `B072-R21` synchronization performed in the `D-186` application pass | `Closed`, evidenced at `56759ff` |
| Graph currency after later handoff/source commits | Not inferred from `R21`; check `.graphify/branch.json` against final `HEAD` |
| `B072-R67` correction | `Applied` only after the append-only Register correction lands |
| B-072 as a whole | Remains `Applied` until an independent reviewer promotes it |

### 3. Keep the future write set closed

| Target | Disposition |
|---|---|
| `V1-DECISION-REGISTER.md` | Append only the correction above and its bounded authorization record |
| B-072 and this entry | Record `Applied` evidence; do not add terminal verification metadata |
| Graphify | **Do not synchronize in the R67 source commit.** Synchronize once after R68 settles the final source `HEAD` |
| `docs/README.md` | Unaffected by R67; R66 owns its separate correction |
| Build Spec, Inventory, Phase Closure, `Modular_PRD`, `Fn_Specs`, `SPECS`, shared rules and work orders | Unaffected; no scope, sequence, artifact or product rule changes |
| `R66`, `R68`, B-061/B-071, hook/check build, `AUTH-DOC`, product work, lane transition and deployment | Excluded |

### 4. Execution sequence — one R67 commit after bounded Judge authorization

1. Confirm the R66 application commit is already pushed; do not absorb it into the R67 range.
2. Bind the authorized R67 paths and record the Judge act under `D-183`, naming this guide's
   immutable commit, action, scope and exclusions.
3. Append the correction to `D-186`; preserve the original sentence.
4. Record `Applied` evidence in B-072/B-074 and commit and push the authorized R67 paths as one
   source unit.
5. Stop before Graphify synchronization and proceed to the separately authorized R68 unit.

### Guaranteed failure and success criteria

The correction is guaranteed to fail review if it rewrites `D-186`; leaves `R21` both
`Unchanged` and performed; calls a historical synchronization proof evidence that the current graph
is synced; changes R66/R68 in the same source unit; or lets Lane A self-promote B-072 to `Verified`.

| ID | Given | When | Then |
|---|---|---|---|
| `B074-SC1` | The original Gaps sentence remains | Current lifecycle state is read | A later correction explicitly supersedes only its `Unchanged` classification |
| `B074-SC2` | Synchronization at `56759ff` is evidenced | R21 is classified | It is exactly `Closed`, not `Unchanged`, `Open` or current-graph proof |
| `B074-SC3` | The R67 diff is reviewed | Changed paths are compared with authorization | Only the Register correction and handoff evidence changed |
| `B074-SC4` | The R67 commit is pushed | Status is reported | Commit and push evidence are separate facts, and upstream contains the named commit |
| `B074-SC5` | R67 is applied | Closure is considered | B-072 remains `Applied`; R68, final graph sync and independent verification remain explicit |

## What you did instead

Lane B drafted this guide and stopped. It did not amend `D-186`, apply R67, modify B-072,
synchronize Graphify, authorize product work, or alter lane state.

## Approve / reject

| Decision | Tier | Status | Follow-up phase |
|---|---|---|---|
| **Approve** | `R67` problem definition | The contradiction is real and narrowly bounded | Preserve |
| **Approve-with-conditions** | B-074 guide | Append-only correction and tests are ready | Judge authorization naming this commit |
| **Reject** | Rewriting the original `D-186` paragraph | Breaks append-only provenance | Append correction instead |
| **Reject** | Treating `56759ff` as current Graphify proof | It proves historical R21 completion only | Final sync after R68 |
| **Defer** | R68, graph synchronization, product and tooling work | Outside this block | Separate packet, then final sync |
