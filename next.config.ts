import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // AI-generated apps should deploy even if the template has strict type or
  // lint issues. Type errors are compile-time only and don't affect runtime,
  // so we don't let them block a deployment.
  typescript: { ignoreBuildErrors: true },
  // `eslint: { ignoreDuringBuilds: true }` removed for Next 16, which dropped
  // the property (B-058, D-154). This costs no lint coverage: `bun run lint`
  // invokes `eslint .` directly (D-66) and never runs through `next build`.
  // TC6 is narrowed, not resolved — ignoreBuildErrors above still suppresses
  // types at build time, and CI's separate typecheck step carries that gate
  // (SPECS-VERIFICATION-APPARATUS §4.1).
};

export default nextConfig;
