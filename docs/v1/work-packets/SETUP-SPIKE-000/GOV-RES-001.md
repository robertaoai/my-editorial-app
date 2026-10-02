# Governance residual packet — `GOV-RES-001`

**Created:** 2026-10-01, at its first receipt (`D-374`; `D-364` item 8; home chosen by the Judge). **Owner:** Lane A.
**Lineage:** `SETUP-SPIKE-000`, beside `SV-002`.

**What this packet is.** The one bounded Lane A packet that receives **non-SM05 governance and documentation
residuals** from handoffs closed or screened under `B-150`. Each row records custody: what was received, from which
source child, who owns it, what holds it, when it returns, and what completes it.

**What it is not.**
- **Not clearance.** A receipt here does not close the source's tracker row in `SV-002` §2.3.1. That row closes only
  by an independent `Verified-By` on the transfer, or by the Judge's recorded acceptance with its reason (`D-364`
  item 4).
- **Not a Product backlog.** Genuine Product capabilities take a dated `docs/Modular_PRD.md` intake instead.
  Allocation to a sprint such as `V1-SM06` needs its own Judge act.
- **Not completion.** A received row can stay held for a long time. It completes only when its completion criterion
  is met and independently verified.

## Receipts

| Key | Source child | Received scope | Hold | Return condition | Completion criterion | Received |
|---|---|---|---|---|---|---|
| `GR-001` | `B-104.O2` (`SV-002` §3.3) | Record `ROUTE-PROD-1` as the primary target `A4` journey, propagating `D-181` into the `A4` journey records that `B-084` owns | Target scope held under `D-171`; not in `V1-SM05` (`SM05-X1`) | `B-104`'s own return, or the Judge selecting a packet that owns the target `A4` journey | The propagation is applied, then independently verified | 2026-10-01, `D-374` |
| `GR-002` | `B-104.O3` (`SV-002` §3.3) | Label the historical journey as provenance only, wherever it is still cited (`D-181`, `D-260`) | None: a documentation-labelling task | `B-104`'s own return | Each historical citation is labelled as provenance, then independently verified | 2026-10-01, `D-374` |
| `GR-003` | `B-104.O4` (`SV-002` §3.3) | Record fallout/GRC as a separate target variant, propagating `D-181`/`D-232` | Target scope held under `D-171`; outside `ROUTE-PROD-1` | `B-104`'s own return, or the Judge selecting a packet that owns the fallout/GRC variant | The propagation is applied, then independently verified. A genuinely new capability found later takes dated Product intake instead | 2026-10-01, `D-374` |
| `GR-004` | `B-095.D1` (`SV-002` §3.3) | Apply the decided correction to `Modular_PRD` §7.1, whose gap row still records `CR-14` as "Missing" while `D-194`/`D-197` decided it | None: a decided documentation correction | `B-095`'s own return | The §7.1 row agrees with `D-194`/`D-197`, then independently verified | 2026-10-02, `D-382` |
| `GR-005` | `B-095.D3` (`SV-002` §3.3) | Apply `B-080`'s decided supersession to the storyboard §4 roll-up, which it reached only at the panel | None: a decided documentation correction | `B-095`'s own return | The §4 roll-up agrees with the superseding panel, then independently verified | 2026-10-02, `D-382` |
| `GR-006` | `B-118.RH1`–`RH3` (`SV-002` §3.3), one unit | The proposed recursive handoff partition: one stable partition key (`RH1`), every control recursive before any entry moves (`RH2`), classify first and move second (`RH3`) | Optional governance backlog, undecided. `D-240`'s flat channel stands; no file moves before recursive controls and citation/history proof exist | A Judge act selecting the partition unit, or declining it. Declining leaves no execution residual; the `SV-002` §2.3.1 source rows (`B-118.RH1`–`RH3`) still need independent transfer verification or the Judge's individual reason (`D-383`) | If selected: controls recursive and tested, entries classified, then moved with history kept; independently verified | 2026-10-02, `D-382` |
| `GR-007` | `B-077` (legacy `Applied` reconciliation; `B-061`/`B-070` successor disposition); `B-117` (Phase 1 backlog closure and prioritization); `B-118.RH4` (its handoff-closure half), one unit | One reconciliation of the handoff backlog, executed in the existing canonical homes: the `SV-002` §2.3.2 keyed ledger and §2.3.1 tracker (`B-150`) | None. `B-071` Draft 12 keeps its own `D-171` hold and closure gate; the `B-016`/`C-001` Phase 3 boundary is `V1-SM06`'s (`SM06-P3-02`–`04`) | Continuous; no separate trigger | Every transaction keyed in §2.3.2; every §2.3.1 row closed or received; legacy `Applied` entries reconciled one at a time by their own raiser, never in bulk; final independent review by an actor who neither answered nor applied (`B-077` Follow-up-Tier) | 2026-10-02, `D-382` |
| `GR-008` | `B-088` (`C-39` `P1`, token termination) | The optional `leadingActor` token-termination repair. The defect is real and still present: `Lane B_test` reads as `lane b` | Optional and conditional: `B-088`'s conjunctive return condition, quoted in full in its Follow-up-Tier | All of `B-088`'s conditions together, including a separate durable Judge act naming `P1`, its files, tests, exclusions and DoD | That act's DoD met with labelled negative probes, then independently verified. Until then, never described as fixed | 2026-10-02, `D-382` |

**Next receipts** (proposed, not yet received): the non-SM05 children of `B-071` (`R202`, `R203`, `R206`–`R208`).
They wait for `B-071`'s own review.

**Not received here, by decision (`D-382`):**
- `B-095.D2b` and `B-095.S5` are undecided Product scope. They stay with `B-084`'s `A4` unit, under `D-171`.
- `B-096.GA1` and `B-096.S16` are report scope that `SM05-X1` excludes. They stay with `B-096`.
- `B-119`'s residuals already have owners: `V1-SM06`'s DoR boxes (the `ManualReady` revision child, Encyclopedia
  Entry 04) and `SM06-P3-01` (A02).

Held Product target rows are not received here, and neither is `B-106`. `B-106` is Product intake (`D-374`).
