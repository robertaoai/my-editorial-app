# PRD — AI-Driven Trending Article Tracker

## Problem
Manual article hunting across LinkedIn, Facebook, blogs, and guest platforms costs the Chief Editor 3–5 hours/week. No guardrail prevents live publishing without full review.

## Target User
One Chief Editor directing virtual agents through a five-gate editorial pipeline. Audience: Agile/DevOps/ITIL professionals and AI practitioners.

## Core Objects
- **Articles** — URL, title, summary, topic, category, workflow_state, publication_target
- **Topics** — tag taxonomy for filtering
- **Sources** — platform/origin of articles
- **Trend Signals** — AI-detected signals per article (tags, source, relevance)
- **Workflow Transitions** — who/when/why for every gate change
- **Publication Targets** — WordPress or LinkedIn-ready

## MVP (v1)
- [x] Log article by URL (paste, no bookmarklet)
- [x] Five-gate sequential pipeline: Reported → Investigated → Journaled → Senior Reviewed → Chief Approved
- [x] Every transition logged (gate, timestamp, agent/role, reason)
- [x] Chief Journalist approve → auto-publish to WordPress OR mark LinkedIn-ready
- [x] Board: all articles, filter by state / topic / category
- [x] AI tags topics, sources, trend signals at Reporter gate
- [x] Web only, single Chief Editor account, no notifications

## Non-goals (v1)
- Mobile app, multi-team accounts, monetization
- Automated Facebook/RSS detection, multi-language, bookmarklet
- Email/Slack notifications, Proposer/Critics/Judge governance

## Success Criteria
Chief Editor pastes a URL → article enters pipeline → passes all five gates with logged transitions → Chief Journalist approves → article publishes to WordPress (or marked LinkedIn-ready). Board shows 5+ articles/week, 2+ published, every transition visible, zero bypasses.