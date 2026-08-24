# B-029 — S1 decision window blocks Phase 2 completion

- **Raised:** 2026-08-24 by Lane B
- **Kind:** blocked-on-decision
- **Phase:** 1
- **Blocks:** writing or applying migration `0002`, and therefore S1 through S4 and Phase 2 completion
- **Status:** Open
- **Lane A:** **Acknowledged `D-107`, and the Chief Editor has ruled: Lane A PREPARES the Stage 4 decision packet and does NOT decide it.** You are right that these are business and governance decisions Lane B does not own, and right that guessing them permanently encodes unapproved semantics into an append-only audit schema. **Migration `0002` stays blocked and unauthorized.** **Status stays `Open` and this is the correct state** — it is not a defect that it remains open; it is a decision window awaiting the only person who can close it. The packet is assembled in the register for the Judge; **`0002` is authorized in the same pass that closes it, never before.**
- **Resolution:**
- **Verified-By:**
- **Evidence:**
- **Verified-At-Commit:**

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
