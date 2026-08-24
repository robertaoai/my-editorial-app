# B-008 — Classify the later POC payment, cart, account, and drain model

- **Raised:** 2026-08-22 by Lane B
- **Kind:** blocked-on-decision
- **Blocks:** Phase 1 resubmission and any automated POC implementation
- **Status:** Answered
- **Lane A:** **Answered by Judge ruling `D-96`, 2026-08-22 — option 1, deferred scope, with a correction to Lane A's framing.** Lane A said *"none of this vocabulary appears in any authoritative document"* and treated the model as possibly-invented. **That was wrong in an important way:** the POC commercial flow is **original project scope**, present from scaffolding — Stripe shipped in `package.json` from the start and `X8` removed it in S0. **`NG-03` is a simplification for the current stage, practical rather than permanent**, not evidence that the POC lies outside the project. **What the Judge decided about shape.** The MVP and the POC are **two flows of one editorial brief** — one engine, two exposures (`§7` invariant 1, `D-59`) — and the POC sells **exactly one item: publicly-expandable content with a report**, entering at the trigger and traversing **the same phase gates**. **Your elaborate model is not adopted**: no `cart_id`, no `DEFAULT_POC_PAYMENT_PROVIDER`, no `PAYMENT_EVENT_DRAIN` or `POC_OBLIGATION_DRAIN`, no asynchronous account claiming or delivery portal, no provider-ID/editorial-ID split. **The simplification of what is sold had not actually been done, and this is it.** **Deferred, not authorized.** No POC Charter, PRD, traceability, spec, UX, config row or migration authority is created. **No POC commercial field goes near `AP-01`'s `Q11`/`0002`.** Frozen `PRD`, Charter and `0001_init.sql` untouched. Recorded in `V1-BUILD-SPEC.md` §6. **If the Judge intended to authorize POC specification work rather than only classify it, say so — Lane A has read this as classification.** — Acknowledged and dispositioned — **Escalated `D-95`, 2026-08-22 — Lane A will not decide this, and stopping was right.** None of the named vocabulary appears in any authoritative document. **`NG-03` excludes monetization at Charter level and `X8` removed the Stripe scaffolding**, so your option 1 (record as deferred POC scope) is consistent with the frozen set, and option 2 (authorize POC scope) is a **Charter-level act** requiring a separate POC Charter and PRD before any traceability, specs, config rows or migration authority. **Put to the Chief Editor at the Alpha Portfolio parent level. No authority is inferred from conversation**, no POC commercial fields go near `AP-01`'s `Q11`/`0002`, and the frozen `PRD`, Charter and `0001_init.sql` are untouched. **Status stays `Open` until the Chief Editor rules** — this is a live decision request, not an answered one. — Acknowledged 2026-08-22. **This is not Lane A's to decide and will not be decided here.** None of the named vocabulary appears in any authoritative document, and `NG-03` excludes monetization at Charter level while `X8` removed the Stripe scaffolding — so option 1 is consistent with the frozen set and option 2 requires a Charter-level act. **Escalated to the Chief Editor at the Alpha Portfolio parent level.** No implementation or configuration authority is inferred.

## What happened

The omitted Judge packet required a parent Alpha Portfolio decision on the later POC model.
Current authoritative documents contain none of the later vocabulary:

- cart_id;
- DEFAULT_POC_PAYMENT_PROVIDER;
- FLAG_POC_SYSTEM_EXPOSURE;
- FLAG_POC_PAYMENT_ACCEPTANCE;
- PAYMENT_EVENT_DRAIN;
- POC_OBLIGATION_DRAIN;
- MVP_EDITORIAL_FLOW;
- asynchronous account claiming and delivery portal; or
- explicit provider-ID versus editorial-ID separation.

The current POC proposal remains manual, off-app paid, Chief Editor operated, with no customer
account or payment-feature build. Existing documents use a third-party transaction ID as the
trace. D-94 does not classify the newer model.

## What you need

The Chief Editor, acting at the Alpha Portfolio parent level, must choose one:

1. **Proposed future scope.** Record the later model as deferred POC scope. Existing AP-01 S0
   remains unaffected and no implementation/configuration authority is created.
2. **Newly authorized POC scope.** Create the separate POC Charter and Product Requirements,
   then requirements traceability, functional specifications, technical specifications, UX,
   configuration rows, and a later migration/build authorization.

Preserve the frozen AP-01 PRD, Charter, and 0001_init.sql. Do not infer authority from
conversation, and do not place POC commercial fields in AP-01's Q11/0002.

## What you did instead

Performed no POC payment, cart, account, schema, portal, or provider implementation.

---
