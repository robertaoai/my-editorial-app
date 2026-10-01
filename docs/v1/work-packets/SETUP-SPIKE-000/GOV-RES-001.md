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

**Next receipts** (proposed, not yet received). These are the other governance and documentation rows in the
`SV-002` §2.3.1 `O4` group, received one at a time with the same columns:
- the non-SM05 children of `B-071`, `B-095` and `B-118`;
- the `B-077`/`B-117` backlog reconciliation;
- `B-119`.

Held Product target rows are not received here, and neither is `B-106`. `B-106` is Product intake (`D-374`).
