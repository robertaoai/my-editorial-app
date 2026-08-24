import { describe, expect, test } from "bun:test";

import {
  CONFIG_REGISTRY,
  DOMAIN_APEX,
  EDITORIAL_ROUTE,
  POC_ROUTE,
  UNSET,
  UnsetConfigurationError,
  requireConfigured,
} from "@/lib/config/build-config";
import {
  FLAG_AGENT_ROSTER_MULTI,
  FLAG_FOUR_EYES_LINE_SEPARATION,
  FLAG_LINE2_HUMAN_PRIMARY,
  FLAG_LINE3_ENABLED,
  FLAG_S1_CONFIDENCE_FLOOR,
  FLAG_S2_PLAN_DEVIATION,
  FLAG_S3_RETRACTION,
  FLAG_S4_PREPUB_LEGAL,
  FLAG_S5_ACTING_EDITOR,
  FLAG_S6_RISK_AT_INTAKE,
  FLAG_S7_DEGRADED_MODE,
  FLAG_S8_ATTESTATION,
  FLAG_S9_AUTO_PASS,
  flagRegistry,
} from "@/lib/config/flags";

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

  test("route assignments match CONFIG_LOG §6 exactly", () => {
    expect(EDITORIAL_ROUTE).toBe("/editorial");
    expect(POC_ROUTE).toBe("/request-brief");
    expect(DOMAIN_APEX).toBe(UNSET);
  });

  test("every stored Phase 0 flag is disabled", () => {
    expect([
      FLAG_AGENT_ROSTER_MULTI,
      FLAG_LINE3_ENABLED,
      FLAG_S1_CONFIDENCE_FLOOR,
      FLAG_S2_PLAN_DEVIATION,
      FLAG_S3_RETRACTION,
      FLAG_S4_PREPUB_LEGAL,
      FLAG_S5_ACTING_EDITOR,
      FLAG_S6_RISK_AT_INTAKE,
      FLAG_S7_DEGRADED_MODE,
      FLAG_S8_ATTESTATION,
      FLAG_S9_AUTO_PASS,
    ]).toEqual(Array(11).fill(false));
  });

  test("every newly implemented stored flag carries a CONFIG_LOG citation", () => {
    for (const definition of Object.values(flagRegistry)) {
      expect(definition.value).toBe(false);
      expect(definition.citation).toContain("CONFIG_LOG");
      expect(definition.enablement).toContain("outside v1");
    }
  });

  test("four-eyes flags are derived from their governing values", () => {
    expect(FLAG_FOUR_EYES_LINE_SEPARATION).toBe(
      CONFIG_REGISTRY.FOUR_EYES_MODE.value === "line_separation",
    );
    expect(FLAG_LINE2_HUMAN_PRIMARY).toBe(
      CONFIG_REGISTRY.LINE2_EXECUTOR_TYPE.value === "human_primary",
    );
  });
});
