import { describe, expect, test } from "bun:test";

import {
  CONFIG_REGISTRY,
  UnsetConfigurationError,
  requireConfigured,
} from "@/lib/config/build-config";

describe("S0 build configuration", () => {
  test("every registered value carries a CONFIG_LOG citation", () => {
    for (const definition of Object.values(CONFIG_REGISTRY)) {
      expect(definition.citation).toContain("CONFIG_LOG");
    }
  });

  test("every provisional value names the open decision governing it", () => {
    for (const definition of Object.values(CONFIG_REGISTRY)) {
      if (definition.status === "PROVISIONAL") {
        expect(definition.decision).toMatch(/^OD[123]$/);
      }
    }
  });

  test("UNSET values fail loudly and route to the Chief Editor", () => {
    try {
      requireConfigured(
        "LINE3_EXECUTOR_IDENTITY",
        CONFIG_REGISTRY.LINE3_EXECUTOR_IDENTITY.value,
      );
      throw new Error("Expected an unset configuration failure");
    } catch (error) {
      expect(error).toBeInstanceOf(UnsetConfigurationError);
      expect((error as UnsetConfigurationError).routeTo).toBe("Chief Editor");
    }
  });
});
