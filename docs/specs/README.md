# `docs/specs/` — Technical Specifications

**Tier 4 of `D-29`:** `PRD` → `Modular_PRD` → `Fn_Specs` → **`SPECS`**.

**Living documents.** No spec carries a build-version prefix and none freezes. `V1-*.md` and later
`V2-*.md` are *tracking* files that freeze at sprint close; specs are edited by whichever build
version is active.

## What goes here

| Location | Content |
|---|---|
| `docs/specs/SPEC-*.md` | Implementation **big picture** per component — schema, contracts, trigger logic, tech-stack |
| `docs/specs/ux/UX-*.md` | UI/UX **per tech-stack** — e.g. Vue versus Angular for identical behaviour |

## The `D-30` redundancy rule

A `SPECS` document is written **only** where `Fn_Specs` cannot determine the implementation. If
behaviour is defined clearly enough upstream, the corresponding `SPECS` document is **redundant and
must not be written** — that is what stops this tier becoming a restatement layer.

Each `Fn_Specs` ends with a `SPECS` candidate filter naming which of its components qualify.
Both existing specs landed on five candidates each, which suggests the rule discriminates rather
than rubber-stamps.

## Section-origin marking (`D-36`)

Every section records the build version that introduced it, so a living document still shows what
each sprint delivered. See `docs/fn-specs/` for worked examples.
