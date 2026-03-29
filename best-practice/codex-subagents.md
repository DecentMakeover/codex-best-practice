# Codex Subagents Best Practice

Subagents are useful when the work is bounded and parallelizable.

Good use cases:

- doc or code research
- diff review
- structured triage
- repeated work across many items

Bad use cases:

- delegating the entire critical path without a local plan
- spawning agents for tiny tasks that are faster to do inline
- overlapping write scopes without coordination

Default pattern:

- main thread owns the problem
- researcher role gathers context in read-only mode
- reviewer role checks changes in read-only mode

Official reference:

- https://developers.openai.com/codex/multi-agent/
