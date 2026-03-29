# Codex Config Best Practice

Good Codex config is mostly about consistency.

Recommended baseline for trusted local repos:

- `approval_policy = "on-request"`
- `sandbox_mode = "workspace-write"`
- set a default model and reasoning level
- enable multi-agent only if you actually use it
- add MCP only when it removes real copy-paste work

Repo split:

- personal defaults in `~/.codex/config.toml`
- project-specific behavior in `.codex/config.toml`
- one-off exceptions via CLI flags

This repo’s sample config is intentionally conservative enough to copy, then trim.

Official reference:

- https://developers.openai.com/codex/config-reference/
