# Test Plan

## v1 Success Scenario
1. Open app (no login) → Board loads with 5 seeded articles across states
2. Click "Log Article" → paste URL `https://example.com/agile-post` → submit
3. New article appears on Board with state `logged`
4. Open article → click "Run Reporter Gate" → AI tags populate (topic, source, signals)
5. State changes to `reported` → transition row visible in history
6. Advance through Investigation → `investigated` (transition logged)
7. Advance through Journalism → `journaled` (AI summary appears with confidence)
8. Advance through Senior Review → `senior_reviewed`
9. Click "Chief Approve" → state `chief_approved`
10. Click "Publish to WordPress" → state `published`, published_url populated
11. Verify all 6 transitions logged in Audit Log page with timestamps + roles

## Empty / Error Cases
- **Board empty:** No articles → show "No articles yet. Log one to start."
- **Invalid URL:** Paste `not-a-url` → form shows validation error, no submission
- **AI tagger fails:** Reporter gate error → article stays `logged`, shows retry button
- **WordPress publish fails:** API error → state stays `chief_approved`, error toast shown, retry button
- **Gate out of order:** Try advancing from `logged` to `journaled` → blocked, error message
- **Filter no results:** Filter by topic with no matches → "No articles match this filter."
- **Article detail loading:** Skeleton spinner while fetching
- **Network error on board:** Error state with retry button