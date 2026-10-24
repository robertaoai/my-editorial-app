# BCP-1 setup trace r1 — Project-scope chains, intent → custody (extends BCP-1 map r4; answers Lane B `35e1ecd`)

**Status:** draft for Lane B review. **Observed at:** `35e1ecd`. Extends `BCP1-FILE-MAP-r4.md` (`8ba9414b…`); it is not a
second ledger: rows reuse the existing scope IDs and BCP-1 row IDs (F/P/T/S). **Row set:** every declared Project-scope
row — Modular_PRD §7.2 (18 rows) and §7.2a (`AIG-01`–`AIG-06`) — plus TR-1, which the Judge's requirement adds.

**Completion rule (Lane B's draft, adopted):** a row is **complete** only for its named scope and stage, when the accepted
requirement, contract, artifact, run evidence, independent review and custody are all linked. A missing link stays
**open**. Registration, presence, successful use and readiness are separate states. **States used:** `complete (scope)`;
`control present — review link unverified`; `open`; `n/a (reason)`.

## 1. REA — the worked chain (TR-1 and the F16 Codex test)

| Link | Lane A (Claude Code, route D) | Codex REA test (F16) |
|---|---|---|
| Intent | TR-1, the Judge: "Require ECC, Ponytail and REA specifically before SM05." (B-136 L6997; Lane B `46c7417`) | Same intent; the Judge: "rea - .codex/config.toml was used to test the setup for REA in earlier steps" (`07737b4`) |
| Requirement | `AIG-03.R1` measured loading; `AIG-04.R3` proof through the claimed host; `AIG-04.R5` bounded effects and retained evidence | Same anchors — available, **not shown met** |
| Setup contract | r10 (`b6e523f0…`, accepted by Lane B `05ac2ba`): REA MCP in Docker, consumer Claude Code/Lane A; credit = load and planning only (Part 3.1) | **None.** r10 excludes Codex REA registration; r10's Stage B (Codex) covers ECC/Ponytail only |
| Delivered artifact | Stage A A-S0–A-S4 executed (B-136 `9e47e17`); pinned image and wrapper (BCP-1 T4, F13, F15) | `.codex/config.toml`, 704 bytes, `fd3c37f5…`, created 2026-10-14 15:49 UTC; writer **UNVERIFIED**; state: test-only, outside r10 |
| Verification | Readiness `partial`; pre-S-T run **stopped** (`ee411c6`); hook routing Open | **No run record, result or review found** (B-136 and the TR-1 output folders searched) → **UNVERIFIED** |
| Custody / next | Evidence under `C:/CoWork/outputs/lane-a-tr1-setup-2026-10-14/`, `lane-a-r6d-2026-10-14/`; next: `D-437` registration with the next setup/SM05 batch; owner Lane A; trigger that batch | Bytes retained (`C:/CoWork/outputs/lane-a-f16-custody-2026-10-15/`); removed from the checkout (Judge: "Remove, keep bytes"). Next: **none** unless Codex REA use is wanted — then Lane B proposes the exact scope that changes r10's exclusion; Lane A drafts; trigger: a Judge request |
| State | **open** (readiness partial) | **open — UNVERIFIED test; no credit** |

## 2. Other Project-scope rows

| Scope ID | Intent / requirement | Setup contract or control | Artifact (state) | Verification | State | Owner · trigger |
|---|---|---|---|---|---|---|
| `AIG-01` lanes, lock | §7.2a; `D-75`, `D-156`, `D-227`, `D-271` | rule files (F7), lane table (F8) | `AGENTS.md`, `V1-PHASE-CLOSURE.md` §5 (applied) | `lane-state`, `lane-boundary` pass at `35e1ecd` | control present — review link unverified | Lane A · next FN review |
| `AIG-02` handoffs | §7.2a; `D-90`, `D-184` | handoff SOP (`docs/handoff/README.md`) | SOP, template (applied) | `handoff-response`, `terminal-return` pass | control present — review link unverified | Lane A · same |
| `AIG-03` tool loading | §7.2a; `D-266`, `D-270` | `SV2-U02` (`SV2-DOD-03`) | `SV-002` accepted (`D-434`) | SV-002 acceptance record | complete (`SV-002` scope); TR-1 loading: see §1 | Lane A · `D-437` batch |
| `AIG-04` code navigation | §7.2a; `D-433` | existing navigation path; Ripwire **not adopted** (T2) | existing path (applied) | `D-433` trial evidence | complete (`D-433` scope) | — · none (reason: decided by `D-433`) |
| `AIG-05` review levels | §7.2a; `D-102`, `D-183` | `Verified-By` rules | SOP fields (applied) | `closure-readiness` passes | control present — review link unverified | Lane A · next FN review |
| `AIG-06` rule-file size | §7.2a; `D-266`, `D-337` | measured refactor | one shared core (applied, `D-337`) | `rule-budget` passes | complete (`D-337` scope) | — · none |
| `NFR-04` test runner, CI | §7.2, S0 | F17a spec; F17b `ci.yml` (Lane C) | `__tests__/`, `.github/workflows/ci.yml` (existing) | `bun test` runs locally; CI on push; Lane C review link **unverified** | control present — review link unverified | Lane C · CI evidence |
| `SHARED-01` build config | §7.2, S0 | F10/F11b | `lib/config/build-config.ts`, `flags.ts` (existing) | `config-coupling` passes | control present — review link unverified | Lane B · work order |
| `SHARED-02` decision/config logs | §7.2, S0 | F5/F11a | Register, `CONFIG_LOG.md` (existing) | `decision-status`, `config-coupling` pass | control present — review link unverified | Lane A · each act |
| `FR-06`, `NFR-01` clause, `TR-API-01…04` | §7.2, S1 | sprint delivery | not built | — | open (construction) | Lane B · S1 work order |
| `NFR-03`, `SEC-01` | §7.2, S2 | sprint delivery | not built | — | open (construction) | Lane B · S2 work order |
| `NFR-07`, `SEC-02` | §7.2, S4 | sprint delivery; secret rule (`AGENTS.md`) | not built | — | open (construction) | Lane B · S4 work order |
| `FR-11`, `FR-12`, `FR-13`, `FR-14`, `SEC-05` | §7.2, S5 | sprint delivery | not built | — | open (construction) | Lane B · S5 work order |
| `SEC-04` | §7.2, Phase 2 | deferred compliance | not built | — | open (deferred) | Chief Editor · Phase 2 |
| `NG-10`, `NG-11` | §7.2, S0 | scope constraints (Modular_PRD) | stated constraints (applied) | n/a — a constraint has no run | n/a (constraint, no setup file) | — · none |

**Not reviewed by this draft:** the "review link" for rows marked `control present` — each needs the independent
review record that accepted that control; this draft names the checks, not the reviews. Modular_PRD §0.6 (dependency
index) was not traced row by row.

## 3. Custody list (proposed, for Lane B review)

To repository custody **after `D-438`'s health record**: this trace (→ `docs/handoff/artifacts/B-136/bcp1/`), BCP-1 map r4,
EV packet r6, helper r4, ownership manifest, harness r5, its runs and self-tests, the recovered results file with its
provenance. **Not imported:** F16's retained config (sensitive host configuration; stays in its custody folder), graph
staging, superseded drafts. A governed edit (e.g. Inventory rows) goes through its own act under D-54.
