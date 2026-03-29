# Orchestration Workflow

The Claude reference repo uses a strong **Command → Agent → Skill** workflow.

For Codex, the closer equivalent is:

1. Start with a prompt or `/plan`
2. Let `AGENTS.md` provide durable repo guidance
3. Let `.codex/config.toml` provide model, safety, and tooling defaults
4. Use a subagent for bounded sidecar work
5. Use a skill for a repeated workflow
6. Run `/review` before commit

## Repo example

In this repo, a release-note drafting flow would look like:

```text
/plan Draft release notes for the last 15 commits.
Use the researcher role to gather context.
Use the release-notes skill to structure the output.
Review the final draft for breaking changes before returning it.
```

Files involved:

- [`AGENTS.md`](../AGENTS.md)
- [`.codex/config.toml`](../.codex/config.toml)
- [`.codex/agents/researcher.toml`](../.codex/agents/researcher.toml)
- [`.agents/skills/release-notes/SKILL.md`](../.agents/skills/release-notes/SKILL.md)

## Why this differs from the Claude repo

Codex’s extension model is centered on:

- built-in slash commands
- `AGENTS.md`
- `config.toml`
- skills
- subagents
- apps / MCP / automations

That means the Codex version of orchestration is less about repo-defined command files and more about composing the durable layers Codex already knows how to load.
