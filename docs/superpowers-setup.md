# Superpowers + OpenCode skills setup (this project)

## What's installed

1. **Project-local Superpowers plugin** — vendored at
   `.opencode/vendor/superpowers` and wired through the project config:

   ```jsonc
   // opencode.json (repo root)
   {
     "$schema": "https://opencode.ai/config.json",
     "plugin": ["/home/devansh/Documents/CurioWiki/.opencode/vendor/superpowers"]
   }
   ```

   Because `opencode.json` lives in the repo, anyone opening this project in
   OpenCode automatically gets the Superpowers skills (brainstorming,
   test-driven-development, writing/executing-plans, systematic-debugging,
   verification-before-completion, subagent workflows, …) plus its
   `executing-plans` ledger scripts at
   `.opencode/vendor/superpowers/skills/executing-plans/scripts/task-start|task-done`.

2. **Global install intentionally untouched** — a Superpowers install also
   exists at `~/.config/opencode/opencode.json`. It was left alone: the
   project plugin ensures this repo works even without global setup, and we
   did not want to mutate the user's global config. If both load, project
   skills simply take precedence locally; no conflict is expected.

3. **Project-specific skills** — `.opencode/skills/*/SKILL.md`:
   - `curiowiki-architecture` — codebase map and conventions
   - `experiment-content-safety` — content schema + safety rules
   - `symmetrical-ui-accessibility` — tokens, symmetry, a11y
   - `testing-qa` — test layout, smoke scripts, pre-commit gate
   - `stem-api-integrator`, `api-docs-researcher`, `api-reliability` —
     external API work (updated with verified Tavily/YouTube/PCS endpoints)

   Each file uses the standard frontmatter:

   ```markdown
   ---
   name: skill-name
   description: One sentence: what it does and when to use it.
   ---
   ```

## Verifying a skill loads

- OpenCode: skills appear in the skill list; the `skill` tool reads the
  frontmatter (name/description) and injects the body.
- Sanity check from the shell:

  ```bash
  grep -c '^name:' .opencode/skills/*/SKILL.md   # every skill: exactly 1
  ```

## Updating skills

Edit the SKILL.md, keep frontmatter valid, keep guidance concise and
actionable, and cite real commands/endpoints from `docs/api-research.md` —
never invent APIs. See the vendored `writing-skills` skill (if present in your
global install) for style guidance.
