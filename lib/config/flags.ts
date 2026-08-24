/**
 * Phase 0 feature flags from `docs/CONFIG_LOG.md` §7.
 *
 * Stored flags are deliberately false. Their S5 behavior does not exist in
 * v1, so changing a flag here cannot be used to imply that behavior exists.
 */

import {
  FLAG_AGENT_ROSTER_MULTI,
  FOUR_EYES_MODE,
  LINE2_EXECUTOR_TYPE,
} from "./build-config";

export { FLAG_AGENT_ROSTER_MULTI };

export const FLAG_LINE3_ENABLED = false;

export const FLAG_S1_CONFIDENCE_FLOOR = false;
export const FLAG_S2_PLAN_DEVIATION = false;
export const FLAG_S3_RETRACTION = false;
export const FLAG_S4_PREPUB_LEGAL = false;
export const FLAG_S5_ACTING_EDITOR = false;
export const FLAG_S6_RISK_AT_INTAKE = false;
export const FLAG_S7_DEGRADED_MODE = false;
export const FLAG_S8_ATTESTATION = false;
export const FLAG_S9_AUTO_PASS = false;

// Derived views — CONFIG_LOG §7.2. Never store a second source of truth.
export const FLAG_FOUR_EYES_LINE_SEPARATION =
  FOUR_EYES_MODE === "line_separation";
export const FLAG_LINE2_HUMAN_PRIMARY =
  LINE2_EXECUTOR_TYPE === "human_primary";

type FlagDefinition = Readonly<{
  value: boolean;
  citation: string;
  enablement: string;
}>;

const flag = (definition: FlagDefinition): FlagDefinition =>
  Object.freeze(definition);

/** One entry per newly implemented stored flag in CONFIG_LOG §7. */
export const flagRegistry = Object.freeze({
  FLAG_LINE3_ENABLED: flag({
    value: FLAG_LINE3_ENABLED,
    citation: "CONFIG_LOG §7.1; Q2; D-57",
    enablement: "S5, outside v1",
  }),
  FLAG_S1_CONFIDENCE_FLOOR: flag({
    value: FLAG_S1_CONFIDENCE_FLOOR,
    citation: "CONFIG_LOG §7.3",
    enablement: "S5, outside v1",
  }),
  FLAG_S2_PLAN_DEVIATION: flag({
    value: FLAG_S2_PLAN_DEVIATION,
    citation: "CONFIG_LOG §7.3",
    enablement: "S5, outside v1",
  }),
  FLAG_S3_RETRACTION: flag({
    value: FLAG_S3_RETRACTION,
    citation: "CONFIG_LOG §7.3",
    enablement: "S5, outside v1",
  }),
  FLAG_S4_PREPUB_LEGAL: flag({
    value: FLAG_S4_PREPUB_LEGAL,
    citation: "CONFIG_LOG §7.3",
    enablement: "S5, outside v1",
  }),
  FLAG_S5_ACTING_EDITOR: flag({
    value: FLAG_S5_ACTING_EDITOR,
    citation: "CONFIG_LOG §7.3",
    enablement: "S5, outside v1",
  }),
  FLAG_S6_RISK_AT_INTAKE: flag({
    value: FLAG_S6_RISK_AT_INTAKE,
    citation: "CONFIG_LOG §7.3",
    enablement: "S5, outside v1",
  }),
  FLAG_S7_DEGRADED_MODE: flag({
    value: FLAG_S7_DEGRADED_MODE,
    citation: "CONFIG_LOG §7.3",
    enablement: "S5, outside v1",
  }),
  FLAG_S8_ATTESTATION: flag({
    value: FLAG_S8_ATTESTATION,
    citation: "CONFIG_LOG §7.3",
    enablement: "S5, outside v1",
  }),
  FLAG_S9_AUTO_PASS: flag({
    value: FLAG_S9_AUTO_PASS,
    citation: "CONFIG_LOG §7.3",
    enablement: "S5, outside v1",
  }),
} as const);

export type FlagKey = keyof typeof flagRegistry;
