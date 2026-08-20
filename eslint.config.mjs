// Flat ESLint config — `D-66` (closes `G62`b).
//
// Migrated off `next lint`, which is deprecated, is removed in Next.js 16, and
// is *interactive*: with no config present it opens a setup wizard, so in CI it
// hangs until the job times out rather than failing cleanly.
//
// Preset: `next/core-web-vitals`. Both presets were measured against this
// codebase before choosing — `next` and `next/core-web-vitals` each reported
// 21 files, 0 errors, 0 warnings — so the stricter one costs nothing today and
// catches more as the code grows.

import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({ baseDirectory: import.meta.dirname });

// Named rather than exported anonymously: once this file exists it is itself in
// the lint set, and `import/no-anonymous-default-export` warns on a bare array.
const config = [
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "docs/**",
      ".graphify/**",
      "next-env.d.ts",
    ],
  },
  ...compat.extends("next/core-web-vitals"),
];

export default config;
