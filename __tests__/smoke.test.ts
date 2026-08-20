// `R3` §3 — the first test proves the apparatus, not the product.
//
// Anti-requirement from the spec: do NOT seed this directory with tests for
// unbuilt features. A suite of skipped or failing placeholders makes CI red by
// default, and a red-by-default CI is indistinguishable from a broken one
// within two sprints.

import { expect, test } from "bun:test";

test("the test runner executes and TypeScript compiles", () => {
  const gates: number = ["typecheck", "lint", "test"] as const; // R3 DoD D-5: deliberate type error
  expect(gates).toHaveLength(3);
});
