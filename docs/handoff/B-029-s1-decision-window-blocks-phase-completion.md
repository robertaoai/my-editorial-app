# B-029 — S1 decision window blocks Phase 2 completion

- **Raised:** 2026-08-24 by Lane B
- **Kind:** blocked-on-decision
- **Phase:** 1
- **Blocks:** writing or applying migration `0002`, and therefore S1 through S4 and Phase 2 completion
- **Status:** Answered
- **Lane A:** **Answered `D-112`, 2026-08-25 — the window is closed and `0002` is AUTHORIZED.** You were right on both counts: these are business and governance decisions Lane B does not own, and guessing them would have permanently encoded unapproved semantics into an append-only audit schema. **Your repair sequence was followed exactly.** Step 1 — the window went to the Chief Editor as one schema decision pass, not seven. Step 2 — every item is decided: `Q11` is `line_separation_status` (`D-111`), the storage boundary and notice names ratified (`D-110`), the report record shape and its `articles.created_at` applicability anchor decided (`D-111`), the risk-tier domain decided (`D-112`), and `D-55`/`D-07` were never open. Step 3 — propagated in one pass: register, Build Spec, `Modular_PRD` (**all six `[Q11]` markers cleared**, `NFR-03` rewritten closing `C-16`), Artifact Inventory. Step 4 — **the final typed schema contract is `D-112` §'0002 authorized', and `0002` is marked authorized in the Build Spec.** Step 5 — graph rebuilt, consistency and fixture suites run. **Step 6 is yours: write a new `0002_*.sql`; `0001_init.sql` is frozen and is never edited.**
- **Resolution:** Verified
- **Verified-By:** Lane B (Codex), independent review 2026-08-29
- **Evidence:** S1 window closed by `D-110`/`D-111`/`D-112`; `0002` authorized in `V1-BUILD-SPEC.md`; all six `[Q11]` markers cleared in `Modular_PRD.md`
- **Verified-At-Commit:** 6283999

## What happened

The Judge clarified that Lane B may accept the `Eligible` handover and continue. Lane B completed
S0's code work and reached S1. `V1-BUILD-SPEC.md` then imposes a separate, explicit precondition:
every item in `V1-DECISION-REGISTER.md` §5.15 Stage 4 must be settled before migration `0002` is
written. The window remains open.

The open items alter the same append-only audit schema. They include Q11's field name, QA3's typed
columns versus versioned JSON, notice-as-article, risk tier, report-record shape and binding,
the approved state backfill data, and `on delete restrict`. Lane B owns the migration but does not
own those business and governance decisions.

## Guaranteed failure chain

If Lane B guesses the open decisions, migration `0002` permanently encodes unapproved field names,
report semantics and deletion behavior. S2–S4 then build on that schema, so correcting the guess
requires migrating an append-only audit trail after data exists. If Lane B skips S1 and builds the
later UI first, the UI targets the obsolete eight-state `0001` model and cannot enforce the accepted
ten-state workflow or four-eyes rules.

## Required repair, parent first

1. Lane A presents the Stage 4 decision window to the Chief Editor as one schema decision pass.
2. The Chief Editor decides every still-open item, including Q11's mechanism-accurate field name.
3. Lane A propagates the decisions through the register, Build Spec and Artifact Inventory in the
   same pass, and updates `Modular_PRD` only where its owning requirement text changes.
4. Lane A supplies Lane B the final typed schema contract and marks migration `0002` authorized.
5. Rebuild Graphify and run the consistency and fixture suites against the committed decision set.
6. Lane B then writes a new `0002_*.sql`; it never edits `0001_init.sql`.

## Success evidence

- no Stage 4 item remains Open or merely drafted;
- Q11's stored field name, values and derived boolean view are unambiguous;
- the report record, retention/deletion behavior and backfill mapping are fully typed;
- the governing tiers agree and Graphify is current at their commit; and
- Lane B can write `0002` without selecting any business meaning itself.

## What Lane B did instead

Completed and verified S0, reviewed the S1 enforcement specification and existing `0001` schema,
and stopped before creating migration `0002` or building S2–S4 against the obsolete schema.

---
