# Codex MCP Best Practice

Use MCP when the important context lives outside the repo or changes frequently.

Good first servers:

- OpenAI Developer Docs
- browser tooling such as Playwright or Chrome DevTools
- issue trackers or incident systems your team already uses

Principles:

- add tools only when they unlock a repeated workflow
- prefer one or two high-signal servers over a giant tool pile
- document required auth and expected use cases in the repo

This repo includes `openaiDeveloperDocs` in `.codex/config.toml` because official docs are the source of truth for Codex feature claims.

Official reference:

- https://developers.openai.com/codex/mcp
