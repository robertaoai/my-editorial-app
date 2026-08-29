import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const migrationPath = join(
  process.cwd(),
  "supabase",
  "migrations",
  "0002_s1_editorial_schema.sql",
);
const migration = readFileSync(migrationPath, "utf8");

describe("S1 editorial schema migration", () => {
  test("uses the governed ten-state lifecycle and a total no-default backfill", () => {
    for (const state of [
      "Discovered",
      "Logged",
      "Validated",
      "Investigated",
      "Drafted",
      "Reviewed",
      "Approved",
      "Published",
      "Needs Revision",
      "Rejected",
    ]) {
      expect(migration).toContain(`'${state}'`);
    }

    expect(migration).not.toMatch(/when\s+others/i);
    expect(migration).not.toMatch(/else\s+'Discovered'/i);
    expect(migration).not.toMatch(/'Retracted'/);
  });

  test("stores Q11 and executor provenance as typed columns", () => {
    expect(migration).toContain("create type line_separation_status as enum");
    expect(migration).toContain("'satisfied'");
    expect(migration).toContain("'not_applicable'");
    expect(migration).toContain("'override_not_four_eyes'");
    expect(migration).toContain("add column identity_assurance identity_assurance");
    expect(migration).toContain("add column actor_id text");
    expect(migration).toContain("add column assisting_agent_id text");
  });

  test("corrects the legacy T5 seed to human-primary with agent assistance", () => {
    expect(migration).toContain("then 'human'::actor_type_v2");
    expect(migration).toContain("then 'chief-editor'");
    expect(migration).toContain("then 'legacy:senior_journalist'");
  });

  test("makes every governed evidence table insert/read-only twice", () => {
    for (const table of [
      "workflow_transitions",
      "trend_signals",
      "publication_targets",
      "publications",
      "editorial_reports",
    ]) {
      expect(migration).toContain(`before update or delete on ${table}`);
      expect(migration).toContain(`revoke update, delete on table ${table}`);
    }
  });

  test("models publication state as the seven governed append-only event types", () => {
    for (const event of [
      "Pending",
      "Published",
      "Failed",
      "Scheduled",
      "Cancelled",
      "ManualReady",
      "MockPublished",
    ]) {
      expect(migration).toContain(`'${event}'`);
    }

    expect(migration).toContain("event_type publication_event_type not null");
    expect(migration).not.toMatch(/publication_targets[\s\S]{0,500}status\s+/i);
  });

  test("keeps allowed transitions effective-dated and rejects default-allow logic", () => {
    expect(migration).toContain("effective_from timestamptz not null");
    expect(migration).toContain("effective_to timestamptz");
    expect(migration).toContain("raise exception 'illegal article transition");
    expect(migration).not.toMatch(/default[_ -]?allow/i);
  });

  test("requires one preceding same-transaction audit row", () => {
    expect(migration).toContain("matching_transition_count <> 1");
    expect(migration).toContain("wt.xmin::text::xid8");
    expect(migration).toContain("event.xmin::text::xid8");
    expect(migration).toContain("pg_xact_status");
    expect(migration).not.toContain("txid_current() % 4294967296");
    expect(migration).toContain("rule.required_role = wt.gate_role");
    expect(migration).toContain("rule.required_line = wt.line_assignment");
    expect(migration).toContain("rule.required_actor_type = wt.actor_type");
    expect(migration).toContain("wt.actor_type = 'human'");
    expect(migration).toContain("no-op updates are refused");
  });

  test("keeps automated T7 and human-confirmed T11 as distinct publish rules", () => {
    expect(migration).toContain(
      "('T7', 'Approved', 'Published', 'fixed', null, null, 'system'",
    );
    expect(migration).toContain(
      "('T11', 'Approved', 'Published', 'fixed', 'chief_editor', 'Line2', 'human'",
    );
    expect(migration).toContain(
      "approval requires at least one eagerly recorded publication target",
    );
    expect(migration).toContain(
      "Published requires a live publication event in the same transaction",
    );
  });

  test("rejects the specific bypass Logged to Drafted", () => {
    const allowedPairs = [...migration.matchAll(/\('(T\d+a?)',\s*'([^']+)',\s*'([^']+)',\s*'fixed'/g)]
      .map((match) => `${match[2]} -> ${match[3]}`);

    expect(allowedPairs).not.toContain("Logged -> Drafted");
    expect(allowedPairs).toContain("Logged -> Validated");
  });

  test("does not introduce the deferred articles retention class", () => {
    expect(migration).not.toContain("retention_class");
  });

  test("allows separate commissions to reuse the same source URL", () => {
    expect(migration).not.toContain("articles_url_uidx");
    expect(migration).not.toMatch(
      /create\s+unique\s+index[\s\S]{0,100}on\s+articles\s*\(\s*url\s*\)/i,
    );
  });

  test("does not modify or recreate the frozen baseline migration", () => {
    const baseline = readFileSync(
      join(process.cwd(), "supabase", "migrations", "0001_init.sql"),
      "utf8",
    );
    expect(baseline).toContain("create type article_state as enum");
    expect(migrationPath).not.toEndWith("0001_init.sql");
  });
});
