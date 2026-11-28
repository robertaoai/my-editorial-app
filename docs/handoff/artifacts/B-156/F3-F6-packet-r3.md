# B-156 F3–F6 planning packet — revision 3: changed sections only (Lane A draft, for review)

- **Read at:** `7c2fdd7`. **Measured at:** `1640ff7bc1b7d1e70ab6a421ced8a054dafda993`.
- **Base:** revision 1 (`b9fce3f`) and revision 2 (`d00a8f5`) stay as history. PKT-R1 and PKT-R3 are accepted by
  Lane B at `d7eeb1b` and are **not** changed here. Every section that this file does not replace stands.
- **Answers:** Lane B's remaining PKT-R2 and PKT-R4 returns (`7c2fdd7`). Everything is still **proposed**.

---

## PKT-R2 remaining — use case, guard and read-only boundaries (replaces three statements in revision 2's F4.2)

### R2.a — Opening paragraph of F4.2

Old: "No task below adopts a tool, installs anything, changes configuration or runs a trial. Each task needs its own
bounded unit before execution."

New: "No task below adopts a tool, installs anything, changes configuration or runs a trial. **Existing read-only
queries and source review stay authorized and need no new unit or start question.** A new setup, trial, adoption,
configuration change or changed host needs its own bounded authority."

### R2.b — CODE-1, CODE-2 and CODE-3 "Use case" cells

Old (CODE-1): "Codebase (setup source now; product code later)".

New (all three): "**Codebase — target: the product codebase (future; proposed).** Instrument fixture: the existing
setup/control source named in the row (for example `requireConfigured` in `lib/config/build-config.ts`). A fixture
result shows only that the instrument behaves on that fixture. It does not show that a product codebase exists or
that any product increment passed, and it earns no product credit."

### R2.c — GOV-1 "Negative / refusal control" cell

Old: "A non-existent concept returns no governing node; a raw rebuild is refused by the guard".

New: "A non-existent concept returns no governing node. **A raw graph write is prohibited by procedure (`D-425`,
`D-426`); the guard does not prevent an external raw writer** (B-050 G-F3-4 at L2490 and L2528; `D-426` item 6 excludes it: "raw-writer exclusion … (not built and not claimed)", Register L27708). The guard refuses
only its own guarded invocations when their conditions fail (for example a moved ref, or a review commit that does not
match). A negative control names one of those supported guarded refusals; it never runs a raw writer."

---

## PKT-R4 remaining — preceding-cycle endpoint, selected-source binding, Option E, review boundary

### R4.a — Option A and Option C prerequisite (1), replaced

Old: "`D-434` issued and applied, its cycle 2 complete (published or stopped per its option)".

New: "**`D-434`'s reviewed candidate is published, and its separate health record is complete.** Under `D-434`'s
P-res, Option A and Option C wait for that later publication decision and its health record. A stop after receipt 2
keeps the cycle pending; it does **not** satisfy this prerequisite. Any route that abandons or replaces the pending
`D-434` cycle needs its own impact analysis and authority, and is not part of this packet."

### R4.b — Selected-source binding, replaced

Old: prerequisite (4) "`F3-oldvalues.mjs` at the final source matches all 26 bound values".

New:

> **Option A's own manifest.** `F3-optionA/F3-optionA-targets.json` holds the **23** targets that Option A applies
> (the 26 frozen targets minus `R26-R28`, `P1`, `P2`). Its values at `1640ff7` are in
> `F3-optionA/F3-oldvalues-1640ff7.json`, and each equals the frozen 26-target value. The two frozen 26-target
> files (`d00a8f5`) stay unchanged as history.
>
> **At application.** After `D-434`'s publication and health record, the applying unit: (1) locates each of the 23
> targets **by its semantic locus** (section, heading or node id, plus its anchor text) at the actual source, because
> `D-434` adds a Register entry and a Build Spec paragraph and can shift line numbers; (2) binds the full value with
> `F3-oldvalues.mjs` at that revision; (3) compares each SHA-256 with the frozen value.
>
> - **Equal at the same lines:** proceed.
> - **Equal but at other lines (relocation):** stop. Lane A records the new location, and Lane B reviews it before
>   prepare. A relocation is not silently rebound.
> - **Different value (changed meaning or text):** stop. Lane A reassesses the repair's old and new text against the
>   changed source, and Lane B reviews it before prepare.
>
> No unselected target (`R26-R28`, `P1`, `P2`) is a prerequisite for Option A.

### R4.c — Option E: **withheld (not offered yet)**

Option E (lane allocations R26–R28) is **not decision-ready**. Revision 2 left these parts incomplete:

| Missing part | What a complete E packet must state |
|---|---|
| Allocation choices | For each path, the proposed lane or the exact unmapped-by-reason text: `middleware.ts` (proposed Lane B); `.env.example` (proposed Lane B, with the limit that no decision names env templates); `.onlyaiapp` (proposed: unmapped by reason, with exact text, or a named lane) |
| Rule-file tier (**new gap found in this revision**) | A lane allocation changes the lane table in `AGENTS.md` (L31 lists Lane B's surfaces) and the Register's `D-84` lane record. `AGENTS.md` is a governed rule file under `rule-budget` (5,400-character ceiling); the exact new row and its size impact are needed |
| Fixtures | The expected result for every selected mapping: `middleware.ts` → B; `.env.example` → B or unmapped; `.onlyaiapp` → its choice; `next.config.ts` stays A; `docs/handoff/x.md` stays unmapped. A failing fixture refuses the change |
| D-54 map | Register (act and `D-84` lane record); `AGENTS.md` lane table; Inventory paragraph; Build Spec (changed or explicitly unaffected); `lane-boundary.mjs`; `suites.mjs`; Encyclopedia (check the ledger) |
| Receipt, publication, health | A standalone unit-scoped receipt route; a publish-or-stop choice; the health endpoint; the no-fetch/no-push interval. "Same as its carrier" applies only if Option A is selected as its carrier, and then the combined scope and bindings are frozen before the act |

**Disposition:** owner Lane A; destination: an E decision packet in B-156; return trigger: the Judge asks for the
allocation decision, or Lane B asks for E to be completed. Until then the three paths stay as F2a.5 left them:
`middleware.ts` and `.env.example` proposed Lane B, `.onlyaiapp` unknown. Option A does not depend on E.

### R4.d — Review boundary for C5–C8, replaced

| Claim | Needed for | What counts as a review outcome | If unavailable |
|---|---|---|---|
| C5 (four checks SKIP in a default CI checkout) | Option A (R13–R17) | Lane C agrees or disagrees with the source-based claim and wording | **Host output** may stay "not available" with no new CI run; that is a retained observation limit, not a review |
| C6 (`ci.yml` comment) | **Not** Option A (P1 is outside A) | Lane C's view on P1, for a later Judge authority | P1 stays a proposal; Option A is unaffected |
| C7 (`GEMINI.md` stale lines) | Option A (R10, R18, R19) | Lane C agrees or disagrees with R10, R18, R19 | Named gap. Option A is offered **only** with an explicit proposed residual acceptance for that gap, which the Judge accepts or rejects |
| C8 (`GEMINI.md` merge attribute) | Option A (R21) | Lane C agrees or disagrees with R21 | Same as C7 |

Recording "unavailable" never stands in for a review, and does not make an option decision-ready on its own.

### R4.e — Judge decision guide (new, short)

1. **Is the packet complete?** Lane B has accepted revision 3, and Lane C outcomes for C5, C7 and C8 are recorded
   (or each gap has an explicit residual acceptance to decide). If not: **no option choice yet.**
2. **Has `D-434` published with its health record?** If not: Options A and C wait. Option D is always available.
3. **Choose:** **A** (one unit, one guarded cycle, 23 targets) — recommended; **C** (two units, two cycles); or **D**
   (apply nothing now; every repair stays a known difference with its owner and trigger).
4. **Inside A or C, choose:** publish after Lane B's receipt (A-cond) or stop after the receipt (A-res).
5. **Separately:** ask for the Option E packet if you want the allocations decided.
