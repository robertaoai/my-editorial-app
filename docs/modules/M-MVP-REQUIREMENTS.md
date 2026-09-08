# `M-MVP` — Editorial Pipeline · Module Tracking

**Created 2026-09-08 (`D-203`), Judge-directed.** `M-POC` had a module file and `M-MVP` did not, so
the two modules could not be tracked or frozen by the same rule. **This file gives `M-MVP` the same
tracking surface `M-POC` has.**

## 0. What this document is, and what it deliberately is NOT

**It is the module's tracking record**: identity, status, freeze state, and **links** to where its
requirements actually live.

**It is NOT a copy of those requirements, and no prose was moved into it.** `M-MVP`'s `FR`/`US`/`AC`
and behaviour sections remain in `docs/Modular_PRD.md`, unchanged and in place.

**Why the restraint is deliberate, not laziness.** Four checks read `docs/Modular_PRD.md`, and
`decision-status` reads **§10** and **§5.1 by section number**. Relocating governed prose out of a
file that checks read positionally is a separate act with its own before/after measurement, and
**this is not that act**. `D-203` records it as owed, not done.

## 1. Identity

| | |
|---|---|
| **Module** | `M-MVP` |
| **Product** | Editorial pipeline — the five-gate tracker |
| **Status** | **Active** |
| **Freeze state** | **Not frozen.** A module freezes on **completion of its own scope**, not on a successor opening (`D-203`) |
| **Register row** | `docs/Modular_PRD.md` §0.6.1 |

## 2. Where the requirements live

| Tier | Location |
|---|---|
| **Product requirements** — `FR-01`–`FR-13`, `US`, `AC` | `docs/Modular_PRD.md`, its **module-specific sections** — §0.6.1's own wording, unchanged |
| **Functional behaviour** | `docs/fn-specs/FN-*` — four documents |
| **Implementation big picture** | `docs/specs/` |
| **Decision authority** | `docs/v1/V1-DECISION-REGISTER.md` (`D-58`) |

**`docs/Modular_PRD.md` is the product-level TRACKER, not this module** (`D-203`, Judge
clarification). It tracks `M-MVP`, `M-POC` and every module added later. Conflating the tracker with
one of the things it tracks is the error this file exists to end.

## 3. Freeze rule — the module level

**A module freezes when its own scope completes.** Modules are a **set**: concurrent, additive, and
**not a sequence**. `M-MVP` does not freeze because another module opens, and adding a third module
freezes neither existing one.

**This is structurally different from a version or sprint freeze** (`D-203`, Judge ruling), which
fires on **succession** — V1 freezes when V2 opens, S2 when S3 opens. One rule across all three
levels would make *"`M-POC` freezes when the next module opens"* true, and it is not.

**Authority for module status is `docs/Modular_PRD.md` §0.6.1's `Status` column.** Not this file —
this file cites it. A second place to read a status is a second place for it to drift (`G55`).

## 4. Boundaries

**Confers no build authority.** Creating this file changes no requirement, no sequence, no
Definition of Done, and no sprint scope. **The frozen set is untouched** — `docs/PRD.md`, the
Charter and `0001_init.sql` are unmodified and uncited as authority here.

**Owed, and not done here:** migrating `M-MVP`'s module-specific prose out of the tracker, if that
is ever wanted, with a before/after measurement on `decision-status`'s row counts (`D-203`).
