# B-031 — Lane B takeover and completion guide

- **Raised:** 2026-08-24 by Lane B
- **Kind:** finding
- **Phase:** 2
- **Blocks:** nothing; this is the operating guide for Lane B's takeover
- **Status:** Answered
- **Lane A:** **Acknowledged `D-107` — sound, and superseded in its routing by a Judge ruling rather than by any defect in it.** The guide assumes two Lane B turns. **The Chief Editor has instead directed Lane A to take over and complete the stuck items**, so §§2–7 describe a sequence that is not being run. **§§3–6 are adopted as procedure and not discarded**: reconcile before staging, verify against the exact staged bytes, preserve the curated graph layer, and split implementation from evidence. **Lane A executed those steps on your behalf.** **§8 survives intact and is now the live plan** — the second takeover, gated on `B-029`'s decision window, is still how S1–S4 begin.
- **Resolution:**
- **Verified-By:**
- **Evidence:**
- **Verified-At-Commit:**

## Purpose

This guide turns the lane-state rules into an executable sequence. It separates **control of the
repository** from **readiness of the work** so that `Eligible` is not mistaken for permission to
commit concurrently.

The current practical route has two Lane B turns:

1. accept the offered handover, finish and commit **S0**, then return control to Lane A; and
2. after Lane A closes the S1 decision window, accept a second handover and complete **S1–S4**.

Lane B cannot complete all of Phase 2 in the first turn because `B-029` blocks migration `0002`
until the governed schema decisions are final.

## 1. Read the state correctly

| Recorded state | Operational meaning | Permitted action |
|---|---|---|
| Lane A `Active`, Lane B `Eligible` | Lane A has offered the handover to Lane B | Lane B may accept; no second selection is required |
| Lane B has accepted | Lane B is the sole execution holder | Lane B may change and commit only Lane B surfaces |
| Lane B reports its turn complete | Work is ready to return, but control has not silently moved | Chief Editor authorizes the return boundary |
| Lane A resumes `Active` | Lane A owns governance propagation and open decisions | Lane B stops committing |

`Active`, `Eligible`, `None`, and `Done` describe the repository lock. They do not replace work
conditions such as ready, blocked, verified, or complete.

## 2. Accept the first takeover for S0

Lane B records that it accepts the offered handover. From that point until the return boundary:

- Lane B is the only lane permitted to commit.
- Lane A may acknowledge handoff entries through the `docs/handoff/` carve-out, but does not make
  unrelated commits concurrently.
- Lane C remains inactive.
- Lane B changes only `app/`, `lib/`, `components/`, `supabase/`, `__tests__/`, and its permitted
  `docs/handoff/` records.

## 3. Stabilize the S0 packet before staging

1. Do not commit the current partial index; `B-030` explains why it contains stale and incomplete
   bytes.
2. Review staged, unstaged, and untracked files separately.
3. Confirm the S0 deliverables exactly:
   - `lib/config/build-config.ts` implements every required `CONFIG_LOG` value and citation;
   - `lib/config/flags.ts` implements the canonical flags and derived views;
   - Stripe scaffolding and Stripe environment examples are absent;
   - tests prove the configuration contract and derived behavior;
   - `supabase/migrations/0001_init.sql` is unchanged; and
   - no migration `0002` has been created.
4. Obtain Lane A acknowledgement for each open Lane B handoff. Acknowledgement proves receipt; it
   does not pretend that a decision has been made.
5. If a dependency or build-configuration change is needed, raise a new handoff and stop only the
   affected item. Lane B does not run `bun add` or edit Lane A build configuration.

## 4. Verify the exact S0 bytes

Run the checks after the intended packet is staged, not merely against a different working tree:

1. inspect the staged diff and confirm every intended artifact is present at its reviewed version;
2. confirm no intended artifact remains only unstaged or untracked;
3. run unit tests, typecheck, lint, the full consistency suite, and the whitespace/error check;
4. confirm the frozen migration is unchanged and Stripe scaffolding remains absent; and
5. resolve real failures before committing. Environment-only skips or process restrictions must be
   rerun in the normal local environment and recorded; they are not evidence of a passing gate.

## 5. Synchronize Graphify safely

Finalize the file bytes before synchronization. Preserve the curated layer while updating the
extracted layer, then run the portable-path check. Do not claim Graphify is synchronized until:

- the new Lane B code and handoffs are represented;
- curated fragments remain merged;
- portable-path validation passes for artifacts proposed for commit; and
- after the commit, the analyzed head matches the new commit and is not marked stale.

If the merge-preserving update or portable check fails, do not replace the graph from scratch.
Record the problem for Lane A and keep graph artifacts out of the S0 commit.

## 6. Commit S0 and attach immutable evidence

Use two explicit commits because a file cannot contain the identifier of the commit that is still
being created:

1. **S0 implementation commit:** commit the reviewed Lane B code, tests, flags, verified handoff
   dispositions, and current handoff reports. Do not include Lane A governing or tracking files.
2. **Evidence-only handoff commit:** update `B-026` with the S0 implementation commit identifier and
   final verification results, then commit that handoff evidence separately.

The evidence must cite the first commit as the immutable S0 implementation. The second commit is
only the audit attachment; it must not silently add implementation changes.

## 7. Return control to Lane A after S0

1. `B-026` states what is done, specified but not applied, and open.
2. The Chief Editor authorizes the return boundary.
3. Lane B stops committing. Its repository-lock status becomes `None`; its S0 work condition
   remains complete and verified.
4. Lane A becomes `Active` and records the accepted return in its governing tracking surfaces.
5. Lane A resolves the Stage 4 decision window identified by `B-029`, supplies the final typed
   schema contract, and explicitly authorizes migration `0002`.
6. Lane A runs its required consistency and Graphify synchronization work before offering the next
   handover.

## 8. Accept the second takeover for S1–S4

Lane B accepts the second handover only when all of these are true:

- every Stage 4 schema item is terminal rather than Open or draft;
- Q11's stored field, allowed values, and derived view are unambiguous;
- report binding, retention/deletion rules, risk fields, and backfill mappings are typed;
- migration `0002` is expressly authorized;
- the governing tiers agree; and
- the graph and consistency evidence refer to the committed decision set.

Lane B then proceeds parent first:

1. **S1:** create a new `0002_*.sql`, preserving `0001`, and prove the schema behavior.
2. **S2:** implement the editorial workflow and four-eyes enforcement against that schema.
3. **S3:** implement the board and audit behavior on the working S2 flow.
4. **S4:** implement publication, hold, escalation, and fallback behavior on the verified earlier
   stages.

Do not skip S1 and build later screens against the obsolete `0001` state model.

## 9. Close Lane B's full Phase 2 turn

Lane B may report Phase 2 complete only when:

- S1–S4 meet their Definitions of Done in order;
- all Lane B tests and repository checks pass against the committed bytes;
- every Lane B handoff is answered, accepted, or explicitly deferred to a named later phase;
- no Lane A or Lane C surface was changed without a declared handoff;
- Graphify is current for the completion commit; and
- the final turn report separates completed work, specified-not-applied work, and remaining open
  decisions.

The Chief Editor then authorizes the return to Lane A for Judge acceptance and tracking closure.

## Stop conditions

Lane B stops the affected work and raises or updates a handoff when any of these occurs:

- the staged packet differs from the reviewed working tree;
- a required handoff remains unacknowledged and the consistency gate fails;
- an S1 business or schema decision remains open;
- a dependency or Lane A build-config change is required;
- the frozen `0001` migration would need modification;
- a graph update would discard curated content or fail portability; or
- completion would require editing a Lane A or Lane C surface.

## Completion checklist

- [ ] First handover accepted; Lane B is sole execution holder.
- [ ] S0 packet reconciled, fully staged, and verified.
- [ ] S0 implementation commit created.
- [ ] `B-026` evidence-only follow-up commit cites the S0 commit.
- [ ] Control returned to Lane A.
- [ ] `B-029` decisions closed and migration `0002` authorized.
- [ ] Second handover accepted.
- [ ] S1, S2, S3, and S4 completed in order.
- [ ] Final verification and Graphify currency proven.
- [ ] Final Lane B report returned to Lane A for Judge acceptance.

---
