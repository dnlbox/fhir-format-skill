# Marketplace Benchmark (Applied to `fhir-format`)

This note captures practical patterns observed from strong Claude plugin repositories and maps them to concrete changes for `fhir-format`.

## Repositories reviewed

- https://github.com/vercel/vercel-deploy-claude-code-plugin
- https://github.com/anthropics/claude-code/tree/main/plugins/frontend-design
- https://github.com/anthropics/claude-code/tree/main/plugins/code-review
- https://github.com/anthropics/claude-code/tree/main/plugins/pr-review-toolkit
- https://github.com/upstash/context7

## What successful plugins do well

1. Fast time-to-value in README
   - First screen explains outcome, install, and first command.
2. Explicit activation examples
   - They show natural phrases that trigger commands/skills.
3. Clear scope boundaries
   - They state what the plugin does and does not guarantee.
4. Operator-friendly workflows
   - They include practical command snippets for real workflows.
5. Strong metadata hygiene
   - `plugin.json` is minimal but complete and stable.
6. Structured outputs and high-signal bias
   - Especially in review plugins: confidence filtering and low-noise rules.

## Anti-patterns to avoid

1. Long abstract docs without a quick start.
2. Ambiguous invocation (user cannot tell how to run the plugin).
3. Capability over-claims (implying guarantees that tooling cannot provide).
4. Missing examples for real user phrasing.
5. Blurry line between normative truth vs recommendations.

## Changes applied to `fhir-format`

1. README restructured for practical onboarding
   - Added quick install, trigger examples, and "when to use / avoid" guidance.
2. Scope and safety positioning tightened
   - Added explicit non-goals (legal determinations, full conformance sign-off).
3. Metadata completeness improved
   - Added `skills` path in `.claude-plugin/plugin.json`.
4. Benchmark transparency
   - This file documents which external practices were adopted.

## Intentional decisions

- Keep one focused skill (`fhir-format`) instead of adding multiple narrow agents now.
- Favor evidence quality and predictable response contracts over broad automation.
- Preserve FHIR guardrails: no fabricated semantics, no guessed terminology, no fake compliance claims.
