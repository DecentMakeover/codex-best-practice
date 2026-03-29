# Codex Best Practice

Static GitHub Pages starter for a Codex-focused handbook site.

## What is included

- `index.html`: the landing page
- `assets/styles.css`: visual system and responsive layout
- `assets/site.js`: reveal animation and stack filtering
- `assets/favicon.svg`: site icon
- `.nojekyll`: disables Jekyll processing on GitHub Pages

## Publish on GitHub Pages

1. Create a GitHub repo and push this directory.
2. In GitHub, open `Settings` -> `Pages`.
3. Under `Build and deployment`, choose `Deploy from a branch`.
4. Select your default branch and `/ (root)`.
5. Save. GitHub Pages will publish `index.html` from the repo root.

If you prefer publishing from `/docs`, move the site files there and point Pages at `/docs`.

## Good next steps

- Replace the title, intro copy, and links with your own repo identity.
- Add a real `AGENTS.md` and `.codex/config.toml` so the page points to working examples.
- Create deeper topic pages only after the landing page structure feels right.
- Add screenshots or diagrams once you have real Codex workflows worth showing.

## Reference sources

The page content was shaped against current official Codex docs on March 29, 2026:

- [Codex overview](https://developers.openai.com/codex/overview)
- [Best practices](https://developers.openai.com/codex/learn/best-practices/)
- [AGENTS.md guide](https://developers.openai.com/codex/guides/agents-md/)
- [Configuration reference](https://developers.openai.com/codex/config-reference/)
- [Slash commands](https://developers.openai.com/codex/cli/slash-commands/)
- [Skills](https://developers.openai.com/codex/skills)
- [Multi-agent](https://developers.openai.com/codex/multi-agent/)
- [MCP](https://developers.openai.com/codex/mcp)
- [Plugins](https://developers.openai.com/codex/plugins)
- [Automations](https://developers.openai.com/codex/app/automations/)
