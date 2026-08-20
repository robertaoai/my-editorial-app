# `docs/v1/` — V1 Sprint Tracking

**These are tracking files, not specifications.** They record what the `V1` build decided, sequenced, and required. **They freeze when `V1` closes.**

```
docs/v1/
├── V1-DECISION-REGISTER.md     ← what is decided · conditions · gap dispositions
├── V1-BUILD-SPEC.md            ← sprint sequence S0–S5 · artifact DoD per sprint
└── V1-ARTIFACT-INVENTORY.md    ← what must exist, verified against the filesystem
```

## Specifications live elsewhere — and do not freeze

| Location | Tier | Lifecycle |
|---|---|---|
| `docs/fn-specs/` | `Fn_Specs` — behaviour, per feature group | **Living** |
| `docs/specs/` | `SPECS` — implementation big picture | **Living** |
| `docs/specs/ux/` | UI/UX per tech-stack | **Living** |

Specs carry **no build-version prefix** because they are edited by whichever build is active. Freezing `V1-*.md` freezes *the record of a sprint*, never the specifications — which is why they sit outside this directory. Placing them inside a version-named folder would force a bad choice when `V2` opens: duplicate them, move them and orphan the tracking references, or leave living documents inside a frozen folder.

## Three tracking tiers

| Tier | Artifact | Lifecycle |
|---|---|---|
| **Sprint detail** | `docs/v1/V1-*.md`, later `docs/v2/V2-*.md` | Frozen at sprint close |
| **Cross-sprint index** | `docs/Modular_PRD.md` §8.0 | Living |
| **Project** | `docs/governance/alpha-portfolio-business-continuity-implementation-plan.md` | Living |

A sprint stays inside one project; a new project is a portfolio event (`D-35`).

## Notation

| Form | Means |
|---|---|
| `V1`, `V2` — capital V, no decimal | **Build version** |
| `1.7`, `1.8` — decimal, no prefix | **A document's own revision lineage** |

`Modular_PRD` v1.8 has nothing to do with build `V1`. `D-22` is the precedent for taking this separation seriously.

## Section origin (`D-36`)

Because specs are living, each section records the build version that introduced it — `[V1]`, `[V1→V2]`, `[V2]`. An unmarked change to a `[V1]` section is a defect, not an update. This is what makes per-section content hashing meaningful across builds.
