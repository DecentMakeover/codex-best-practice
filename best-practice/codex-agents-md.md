# AGENTS.md Best Practice

`AGENTS.md` is where durable repository guidance belongs.

Good content:

- how to run, build, lint, and test the repo
- important directories and ownership boundaries
- do-not rules and risk constraints
- what “done” means before a task is complete

Weak content:

- vague style opinions
- long architecture essays with no task relevance
- temporary task instructions that belong in the prompt
- rules the team does not actually enforce

Pattern:

- keep a short root `AGENTS.md`
- add nested overrides only where rules truly diverge
- move deterministic behavior into `config.toml`

Official reference:

- https://developers.openai.com/codex/guides/agents-md/
