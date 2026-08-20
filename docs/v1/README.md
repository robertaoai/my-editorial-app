# `docs/v1/` — V1 Operative Set and Spec Tree

**V1 is the current build.** It covers every open gap; sprints S0–S5 are its execution phases.

## Structure

```
docs/v1/
├── V1-DECISION-REGISTER.md     ← operative · what is decided; tracks sprint per decision
├── V1-BUILD-SPEC.md            ← operative · sprint sequence S0–S5; the sprint index
├── V1-ARTIFACT-INVENTORY.md    ← operative · what must exist, per sprint DoD
├── fn-specs/                   ← behaviour, one doc per feature group
└── specs/                      ← technical, one doc per component
    └── ux/                     ← UI/UX per tech-stack, one doc per component × stack
```

**The three upper parents track the sprints.** Every spec below states its sprint in its header;
`V1-BUILD-SPEC.md` §5.1 carries the sprint→artifact index. Folders are organised **by tier, not by
sprint**, because a feature group routinely spans sprints — `FN-GATES-01-05` spans S1–S2,
`FN-PUBLICATION-09-10-13` spans S4–S5 — and `D-32` makes the group the indivisible unit.

## Tier mapping (`D-34`)

| `specs-creator` | This project | Role |
|---|---|---|
| `app-vision.md` | `docs/Modular_PRD.md` | Product vision — an app **is** a product |
| `prd.md` | `docs/v1/fn-specs/` | Feature behaviour, per group |
| `tech-specs.md` | `docs/v1/specs/` | Implementation **big picture** |
| `ux.md` | `docs/v1/specs/ux/` | UI/UX **per tech-stack** — e.g. Vue vs Angular for the same behaviour |

**Why the layering matters:** a tech-stack change lands in `specs/`, and a stack-specific UI
consequence lands in `specs/ux/`. Neither disturbs `fn-specs/`. Behaviour stays stable across a
stack pivot — which is `D-29`'s change localization actually paying off.
