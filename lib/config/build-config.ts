/**
 * S0 configuration spine.
 *
 * Values are exported directly for consumers and referenced—not copied—by the
 * registry below. The registry is the machine-readable citation and readiness
 * surface required by `docs/CONFIG_LOG.md`.
 */

export const UNSET = "UNSET" as const;

export type Unset = typeof UNSET;
export type OpenDecision = "OD1" | "OD2" | "OD3";
export type ConfigStatus =
  | "FIXED"
  | "RATIFIED"
  | "UNRATIFIED"
  | "PROVISIONAL"
  | "DECLARED_BLOCKED";

// Success-scenario targets — CONFIG_LOG §1.
export const SUCCESS_ARTICLES_LOGGED_MIN = 5;
export const SUCCESS_ARTICLES_PUBLISHED_MIN = 2;
export const REVIEW_GATE_ROLE_COUNT = 4;
export const PIPELINE_GATE_COUNT = 6;
export const PIPELINE_TRANSITION_COUNT_TO_PUBLISHED = 7;
export const PIPELINE_ACTIVE_STATES = [
  "Discovered",
  "Logged",
  "Validated",
  "Investigated",
  "Drafted",
  "Reviewed",
  "Approved",
  "Published",
] as const;
export const PIPELINE_SIDE_STATES = ["Needs Revision", "Rejected"] as const;
export const BOARD_FILTER_DIMENSIONS = [
  "state",
  "topic",
  "category",
  "line_assignment",
] as const;
export const SEQUENCE_BYPASS_TOLERANCE = 0;
export const INDEPENDENCE_BYPASS_TOLERANCE = 0;

// Workflow and operational thresholds — CONFIG_LOG §2.
export const RETURN_LIMIT_BEFORE_ESCALATION = 3;
export const PUBLISH_RETRY_MAX = 3;
export const PUBLISH_RETRY_BACKOFF_MINUTES = 5;
export const DATA_RETENTION_ARCHIVE_DAYS = 90;
export const SCORING_REVIEW_THRESHOLD_ARTICLES = 50;
export const CHIEF_EDITOR_ABSENCE_DEGRADED_HOURS = 48;
export const SLA_DWELL_HOURS = {
  Discovered: 48,
  Logged: 24,
  Validated: 48,
  Investigated: 72,
  Drafted: 72,
  Reviewed: 48,
  Approved: 24,
} as const;

// Scoring v0 — CONFIG_LOG §3. Declarable now; not computable before TC3/0002.
export const SCORE_FORMULA_VERSION = "v0" as const;
export const TREND_WEIGHTS = {
  recency: 0.35,
  sourceTier: 0.25,
  engagement: 0.25,
  shareVelocity: 0.15,
} as const;
export const TREND_RECENCY_DECAY_HOURS = 168;
export const TREND_ENGAGEMENT_SATURATION = 500;
export const TREND_VELOCITY_SATURATION_PER_HOUR = 10;
export const SOURCE_TIER_WEIGHTS = {
  "Tier1-Official": 1,
  "Tier2-Established": 0.7,
  "Tier3-Social": 0.4,
} as const;
export const EDITORIAL_PRIORITY_WEIGHTS = {
  topicLineageDepth: 0.3,
  reviewerConfidence: 0.25,
  sourceAuthorityMatch: 0.2,
  categoryBalance: 0.15,
  evidenceQuality: 0.1,
} as const;
export const REVIEWER_CONFIDENCE_WEIGHTS = {
  High: 1,
  Medium: 0.6,
  Low: 0.3,
} as const;
export const PRIORITY_BANDS = {
  lowUpperExclusive: 0.4,
  mediumLowerInclusive: 0.4,
  mediumUpperInclusive: 0.7,
  highLowerExclusive: 0.7,
} as const;
export const DISPLAY_PRIORITY_MIX = {
  trendScore: 0.5,
  editorialPriority: 0.5,
} as const;
export const CATEGORY_BALANCE_WINDOW_DAYS = 7;
export const CATEGORY_BALANCE_ARTICLE_THRESHOLD = 3;

// OD-derived Phase 0 values — CONFIG_LOG §4. Each is PROVISIONAL below.
export const LINE2_EXECUTOR_TYPE = "human_primary" as const;
export const LINE2_MAY_EXECUTE_LINE1_GATES = true;
export const FOUR_EYES_MODE = "line_separation" as const;
export const JUDGMENT_INDEPENDENCE_STATUS_VALUES = [
  "satisfied",
  "not_applicable",
  "override_not_four_eyes",
] as const;
export const AGENT_HEADCOUNT = UNSET;
export const LINE1_AGENT_ROSTER = UNSET;
export const LINE3_EXECUTOR_IDENTITY = UNSET;
export const FLAG_AGENT_ROSTER_MULTI = false;

type ConfigEntry<T> = Readonly<{
  value: T;
  citation: string;
  status: ConfigStatus;
  decision?: OpenDecision;
  limitation?: string;
}>;

const entry = <T>(definition: ConfigEntry<T>): ConfigEntry<T> =>
  Object.freeze(definition);

/**
 * One entry per CONFIG_LOG table row. Composite values remain one row; the
 * category-balance row is split because it declares two named variables.
 */
export const CONFIG_REGISTRY = Object.freeze({
  SUCCESS_ARTICLES_LOGGED_MIN: entry({
    value: SUCCESS_ARTICLES_LOGGED_MIN,
    citation: "CONFIG_LOG §1; Charter; Addendum §1; Blueprint §8; Business Case",
    status: "FIXED",
  }),
  SUCCESS_ARTICLES_PUBLISHED_MIN: entry({
    value: SUCCESS_ARTICLES_PUBLISHED_MIN,
    citation: "CONFIG_LOG §1; Charter; Addendum §1; Blueprint §8; Business Case",
    status: "FIXED",
  }),
  REVIEW_GATE_ROLE_COUNT: entry({
    value: REVIEW_GATE_ROLE_COUNT,
    citation: "CONFIG_LOG §1; Charter A4",
    status: "FIXED",
  }),
  PIPELINE_GATE_COUNT: entry({
    value: PIPELINE_GATE_COUNT,
    citation: "CONFIG_LOG §1; Addendum §3.1 T1–T6",
    status: "FIXED",
  }),
  PIPELINE_TRANSITION_COUNT_TO_PUBLISHED: entry({
    value: PIPELINE_TRANSITION_COUNT_TO_PUBLISHED,
    citation: "CONFIG_LOG §1; Addendum §3.1 T1–T7",
    status: "FIXED",
  }),
  PIPELINE_ACTIVE_STATES: entry({
    value: PIPELINE_ACTIVE_STATES,
    citation: "CONFIG_LOG §1; Addendum §4.1",
    status: "FIXED",
  }),
  PIPELINE_SIDE_STATES: entry({
    value: PIPELINE_SIDE_STATES,
    citation: "CONFIG_LOG §1; Addendum §4.1",
    status: "FIXED",
  }),
  BOARD_FILTER_DIMENSIONS: entry({
    value: BOARD_FILTER_DIMENSIONS,
    citation: "CONFIG_LOG §1; Charter; Addendum; Blueprint; Business Case",
    status: "FIXED",
  }),
  SEQUENCE_BYPASS_TOLERANCE: entry({
    value: SEQUENCE_BYPASS_TOLERANCE,
    citation: "CONFIG_LOG §1; Charter",
    status: "FIXED",
  }),
  INDEPENDENCE_BYPASS_TOLERANCE: entry({
    value: INDEPENDENCE_BYPASS_TOLERANCE,
    citation: "CONFIG_LOG §1; D1",
    status: "PROVISIONAL",
    decision: "OD2",
    limitation: "Reporting only pending OD2 ratification",
  }),
  RETURN_LIMIT_BEFORE_ESCALATION: entry({
    value: RETURN_LIMIT_BEFORE_ESCALATION,
    citation: "CONFIG_LOG §2; Addendum §3.3",
    status: "RATIFIED",
  }),
  PUBLISH_RETRY_MAX: entry({
    value: PUBLISH_RETRY_MAX,
    citation: "CONFIG_LOG §2; Addendum §7.2",
    status: "RATIFIED",
  }),
  PUBLISH_RETRY_BACKOFF_MINUTES: entry({
    value: PUBLISH_RETRY_BACKOFF_MINUTES,
    citation: "CONFIG_LOG §2; Addendum §7.2",
    status: "DECLARED_BLOCKED",
    limitation: "TC7/Q5: no scheduler exists to fire the retry",
  }),
  DATA_RETENTION_ARCHIVE_DAYS: entry({
    value: DATA_RETENTION_ARCHIVE_DAYS,
    citation: "CONFIG_LOG §2; A6",
    status: "UNRATIFIED",
  }),
  SCORING_REVIEW_THRESHOLD_ARTICLES: entry({
    value: SCORING_REVIEW_THRESHOLD_ARTICLES,
    citation: "CONFIG_LOG §2; A4",
    status: "UNRATIFIED",
  }),
  CHIEF_EDITOR_ABSENCE_DEGRADED_HOURS: entry({
    value: CHIEF_EDITOR_ABSENCE_DEGRADED_HOURS,
    citation: "CONFIG_LOG §2; Addendum §6.4",
    status: "RATIFIED",
  }),
  SLA_DWELL_HOURS: entry({
    value: SLA_DWELL_HOURS,
    citation: "CONFIG_LOG §2; Blueprint §6",
    status: "RATIFIED",
  }),
  SCORE_FORMULA_VERSION: entry({
    value: SCORE_FORMULA_VERSION,
    citation: "CONFIG_LOG §3; Addendum §5.4",
    status: "DECLARED_BLOCKED",
    limitation: "TC3: scoring inputs do not exist before 0002",
  }),
  TREND_WEIGHTS: entry({
    value: TREND_WEIGHTS,
    citation: "CONFIG_LOG §3; Addendum §5.1",
    status: "DECLARED_BLOCKED",
    limitation: "TC3: scoring inputs do not exist before 0002",
  }),
  TREND_RECENCY_DECAY_HOURS: entry({
    value: TREND_RECENCY_DECAY_HOURS,
    citation: "CONFIG_LOG §3; Addendum §5.1",
    status: "DECLARED_BLOCKED",
    limitation: "TC3: scoring inputs do not exist before 0002",
  }),
  TREND_ENGAGEMENT_SATURATION: entry({
    value: TREND_ENGAGEMENT_SATURATION,
    citation: "CONFIG_LOG §3; Addendum §5.1",
    status: "DECLARED_BLOCKED",
    limitation: "TC3: scoring inputs do not exist before 0002",
  }),
  TREND_VELOCITY_SATURATION_PER_HOUR: entry({
    value: TREND_VELOCITY_SATURATION_PER_HOUR,
    citation: "CONFIG_LOG §3; Addendum §5.1",
    status: "DECLARED_BLOCKED",
    limitation: "TC3: scoring inputs do not exist before 0002",
  }),
  SOURCE_TIER_WEIGHTS: entry({
    value: SOURCE_TIER_WEIGHTS,
    citation: "CONFIG_LOG §3; Addendum §5.1",
    status: "DECLARED_BLOCKED",
    limitation: "TC3: scoring inputs do not exist before 0002",
  }),
  EDITORIAL_PRIORITY_WEIGHTS: entry({
    value: EDITORIAL_PRIORITY_WEIGHTS,
    citation: "CONFIG_LOG §3; Addendum §5.2",
    status: "DECLARED_BLOCKED",
    limitation: "TC3: scoring inputs do not exist before 0002",
  }),
  REVIEWER_CONFIDENCE_WEIGHTS: entry({
    value: REVIEWER_CONFIDENCE_WEIGHTS,
    citation: "CONFIG_LOG §3; Addendum §5.2",
    status: "DECLARED_BLOCKED",
    limitation: "TC3: scoring inputs do not exist before 0002",
  }),
  PRIORITY_BANDS: entry({
    value: PRIORITY_BANDS,
    citation: "CONFIG_LOG §3; Addendum §5.2",
    status: "DECLARED_BLOCKED",
    limitation: "TC3: scoring inputs do not exist before 0002",
  }),
  DISPLAY_PRIORITY_MIX: entry({
    value: DISPLAY_PRIORITY_MIX,
    citation: "CONFIG_LOG §3; Addendum §5.3",
    status: "DECLARED_BLOCKED",
    limitation: "TC3: scoring inputs do not exist before 0002",
  }),
  CATEGORY_BALANCE_WINDOW_DAYS: entry({
    value: CATEGORY_BALANCE_WINDOW_DAYS,
    citation: "CONFIG_LOG §3; Addendum §5.2",
    status: "DECLARED_BLOCKED",
    limitation: "TC3: scoring inputs do not exist before 0002",
  }),
  CATEGORY_BALANCE_ARTICLE_THRESHOLD: entry({
    value: CATEGORY_BALANCE_ARTICLE_THRESHOLD,
    citation: "CONFIG_LOG §3; Addendum §5.2",
    status: "DECLARED_BLOCKED",
    limitation: "TC3: scoring inputs do not exist before 0002",
  }),
  LINE2_EXECUTOR_TYPE: entry({
    value: LINE2_EXECUTOR_TYPE,
    citation: "CONFIG_LOG §4; Entry 007",
    status: "PROVISIONAL",
    decision: "OD1",
  }),
  LINE2_MAY_EXECUTE_LINE1_GATES: entry({
    value: LINE2_MAY_EXECUTE_LINE1_GATES,
    citation: "CONFIG_LOG §4; Addendum §6.2 HumanOverride",
    status: "PROVISIONAL",
    decision: "OD1",
  }),
  FOUR_EYES_MODE: entry({
    value: FOUR_EYES_MODE,
    citation: "CONFIG_LOG §4; Entry 007",
    status: "PROVISIONAL",
    decision: "OD2",
  }),
  JUDGMENT_INDEPENDENCE_STATUS_VALUES: entry({
    value: JUDGMENT_INDEPENDENCE_STATUS_VALUES,
    citation: "CONFIG_LOG §4; Addendum §4.1",
    status: "PROVISIONAL",
    decision: "OD2",
    limitation: "G64/Q11 govern storage shape; this does not choose a field",
  }),
  AGENT_HEADCOUNT: entry({
    value: AGENT_HEADCOUNT,
    citation: "CONFIG_LOG §4; OD3",
    status: "PROVISIONAL",
    decision: "OD3",
    limitation: "UNSET: route any attempted use to the Chief Editor",
  }),
  LINE1_AGENT_ROSTER: entry({
    value: LINE1_AGENT_ROSTER,
    citation: "CONFIG_LOG §4; Register D2; Q1",
    status: "PROVISIONAL",
    decision: "OD3",
    limitation: "UNSET: route any attempted use to the Chief Editor",
  }),
  LINE3_EXECUTOR_IDENTITY: entry({
    value: LINE3_EXECUTOR_IDENTITY,
    citation: "CONFIG_LOG §4; Addendum §13; D-57",
    status: "PROVISIONAL",
    decision: "OD3",
    limitation: "UNSET and disabled in v1",
  }),
  FLAG_AGENT_ROSTER_MULTI: entry({
    value: FLAG_AGENT_ROSTER_MULTI,
    citation: "CONFIG_LOG §4; OD3",
    status: "PROVISIONAL",
    decision: "OD3",
  }),
} as const);

export type ConfigKey = keyof typeof CONFIG_REGISTRY;

export class UnsetConfigurationError extends Error {
  readonly routeTo = "Chief Editor" as const;

  constructor(key: ConfigKey) {
    super(`${key} is UNSET; route this decision to the Chief Editor.`);
    this.name = "UnsetConfigurationError";
  }
}

export function requireConfigured<T>(key: ConfigKey, value: T | Unset): T {
  if (value === UNSET) {
    throw new UnsetConfigurationError(key);
  }

  return value as T;
}
