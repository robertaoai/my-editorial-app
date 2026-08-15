# Agentic Layer

## Draftable Actions (low risk — auto)
- Tag topics and sources at Reporter gate
- Generate article summary at Journalist gate
- Detect trend signals (relevance score, trend indicator)
- Suggest category classification

## Executable-After-Approval Actions (medium risk — light approval)
- Advance article through Investigation gate (AI proposes, human confirms)
- Advance through Senior Journalist review gate
- Mark article as LinkedIn-ready

## Always-Approval Actions (high risk)
- Chief Journalist approval to publish
- Publish to WordPress (fires API call)
- Reject article at any gate

## Human-Only Actions (critical)
- Delete article
- Edit published_url after publish
- Modify audit log entries

## Named Tools
- `tag_article` — AI extracts topics/sources/signals (low)
- `draft_summary` — AI generates summary for review (low)
- `advance_gate` — moves article to next gate (medium)
- `publish_wordpress` — posts to WordPress API (high)
- `mark_linkedin_ready` — sets publication_target (medium)
- `reject_article` — stops pipeline (high)

## Audit Log Fields (workflow_transitions)
- article_id, from_state, to_state, gate_role, actor_type (agent/human), reason, created_at, user_id

## v1 vs Later
- v1: All five gates execute with AI at Reporter + Journalist gates; human approval at Chief Journalist gate
- Later: Configurable agent headcount per role, Proposer/Critics/Judge model, automated gate advancement