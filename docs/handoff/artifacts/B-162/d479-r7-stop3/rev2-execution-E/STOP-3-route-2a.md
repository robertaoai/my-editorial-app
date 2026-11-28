# Stop 3 — route 2a, fixtures (2026-11-13T13:53:44Z). Final stop.

Fixtures ran on S2A b77629c: 294/297. Three misses (snapshot/2a/fixtures.txt):
- line 208 gate2: suites.mjs mutates the first `BLOCKED —` in SM05_PATH (now V1-SM07.md); its Status paragraph still contains another BLOCKED, so no 'no longer reads BLOCKED' finding.
- lines 211, 215 tier-sweep: Register row 18701 (D-251) marks ✅ for docs/v1/work-packets/V1/V1-SM05.md; the new 2a V1-SM05.md does not contain D-251. tier-sweep would also fail bun run check, outside the permitted set.

These are defects in the bound 2a bytes, not in the harness. No source edit was made. No further step runs. Layer 9: evidence, seal, report.
