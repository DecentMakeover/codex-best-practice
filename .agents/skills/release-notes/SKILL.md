---
name: "release-notes"
description: "Draft release notes from recent commits, merged pull requests, or changelog context when the user wants a release summary, weekly recap, or launch notes. Do not use for general documentation work."
---

# Release Notes

Use this skill when the task is to turn repository change history into a clean,
structured release summary.

## Inputs

- A git range, list of commits, or merged pull requests
- Optional version number or release name
- Optional audience: internal, customer-facing, or engineering

## Outputs

- A grouped release note draft with clear headings
- A short highlights section
- A separate risks / breaking changes section when needed

## Workflow

1. Gather the change set from commits or PRs.
2. Group items by user-facing impact, not by file.
3. Remove low-signal implementation detail unless the audience is engineering-only.
4. Call out risky migrations, breaking changes, and follow-up items explicitly.
5. Return a draft that can be pasted into GitHub releases, Slack, or docs.

## Gotchas

- Do not turn every commit into a bullet.
- Prefer “what changed for users or developers” over “which files were edited.”
- If the source history is noisy, say that the draft is inferred and list ambiguities.
