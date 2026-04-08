# Marketplace Submission Draft

Use this in Anthropic Claude Marketplace submission.

## Plugin links

- Link to plugin: `https://github.com/dnlbox/fhir-format-skill`
- Plugin homepage: `https://dnlbox.github.io/fhir-format-skill/`
- Privacy policy URL: `https://dnlbox.github.io/fhir-format-skill/privacy/`

## Plugin details

- Plugin name: `fhir-format`
- Plugin description:

  `Accuracy-first FHIR R4/R4B/R5 skill for JSON formatting and reasoning. It labels claims as normative/version-delta/profile-dependent/practice, requires source-backed normative statements, avoids guessed terminology codes, and clearly separates structural validation from full profile conformance.`

- Example use cases:

  1. `Is Observation.code required in R4B? Show authoritative source links.`
  2. `Explain if this field is base-FHIR required or only profile-dependent.`
  3. `Validate this JSON structure and explain what structural checks do not prove for US Core conformance.`
  4. `Compare R4 and R5 behavior for a resource and list version-delta impacts.`

## Optional proof links

- Relevance benchmark docs: `benchmark/README.md`
- CLI benchmark docs: `benchmark/cli/README.md`
- Frozen benchmark artifacts: `benchmark/results/2026-04-08-evaluation.md`
