# fhir-format plugin skill

A Claude plugin for sourced FHIR guidance. Not a FHIR development assistant —
a reasoning layer that keeps the agent honest about what the spec actually says.

Point it at any FHIR question: resource structure, cardinality rules, R4/R4B/R5
version differences, terminology bindings. The skill directs the agent to scope
every claim (base spec, profile constraint, or server policy), back normative
statements with citations, and flag uncertainty rather than fill gaps with
plausible-sounding answers.

What makes it different from other FHIR skills: it pairs with
[`fhir-test-data`](https://github.com/dnlbox/fhir-test-data) and
[`fhir-resource-diff`](https://github.com/dnlbox/fhir-resource-diff). Both tools
generate and validate FHIR resources deterministically — so when the agent reasons
about a resource, it works from a machine-verified artifact rather than recalled
spec knowledge alone.

## Quick install

```bash
claude plugin marketplace add .
claude plugin install fhir-format@fhir-format-marketplace
```

Run the skill:

```text
/fhir-format:fhir-format
```

You can also trigger it naturally with FHIR-focused prompts.

## What it does

- Classifies guidance by scope: base spec, version change, profile constraint, or implementation advice
- Adds authoritative source links for base-spec statements
- Avoids guessed terminology codes and unsupported certainty
- Distinguishes structural validation results from full profile/terminology conformance
- Keeps guidance version-aware across R4, R4B, and R5

## When to use

Use `fhir-format` for:

- Resource shape/cardinality clarification
- Version-difference checks (R4 vs R4B vs R5)
- Terminology/binding guidance with explicit evidence
- Practical integration guidance for TypeScript, Python, and AI-assisted pipelines

Avoid using `fhir-format` alone for:

- Final legal/compliance decisions (HIPAA/GDPR/legal counsel required)
- Full IG conformance (Implementation Guide profile conformance, e.g., US Core/IPS) sign-off without profile + terminology-capable validation
- Clinical coding decisions without official terminology lookup

## Trigger examples

Natural prompts that should trigger this skill:

- "Is `Observation.code` required in R4B?"
- "Format this Patient JSON and tell me what is base FHIR vs profile-specific"
- "Can I validate this bundle with `fhir-resource-diff` and call it US Core compliant?"
- "What is the safest way to represent units and coding in this Observation?"

## Core behavior guardrails

- No fabricated FHIR semantics
- No guessed terminology codes
- No profile constraints presented as universal base-FHIR truth
- No claim that structural checks imply full conformance
- Explicit uncertainty when source evidence is incomplete

## Local development usage

From the plugin repository root:

```bash
claude --plugin-dir .
```

Then run:

```text
/fhir-format:fhir-format
```

## Toolkit workflows

```bash
# Generate + validate loop
fhir-test-data generate patient --locale uk --seed 42 | fhir-resource-diff validate - --fhir-version R4

# Fixture regression checks
fhir-test-data generate bundle --locale us --seed 1 --output ./fixtures/
fhir-resource-diff compare ./fixtures/Bundle-001.json ./baseline/ --preset metadata --exit-on-diff

# AI-friendly envelope output
fhir-test-data generate bundle --locale us | fhir-resource-diff validate - --format json --envelope
```

## Reproducible relevance benchmark

You can independently validate whether this skill is useful and correctly scoped.

What the benchmark tests:

- Skill activation only when queries are FHIR-relevant
- Quality improvement on FHIR-focused prompts
- Better verifiability (claim labels and source-backed statements)

Runbook:

1. Use `benchmark/QUERIES.md` for the fixed query set.
2. Use `benchmark/PROMPTS.md` to run baseline and skill-enabled sessions.
3. Evaluate outputs with the evaluator prompt and store artifacts in `benchmark/results/`.
4. Validate JSON outputs with `benchmark/validate_results.py`.

See `benchmark/README.md` for full instructions.

Reference run artifacts are included in `benchmark/results/` (dated `2026-04-08-*`).

## CLI grounding benchmark

There is a second benchmark lane for command-grounded tasks using `fhir-test-data` and `fhir-resource-diff` patterns.

- Query set: `benchmark/cli/QUERIES.md`
- Prompts: `benchmark/cli/PROMPTS.md`
- Runbook: `benchmark/cli/README.md`
- Results template: `benchmark/cli/results/RESULT_TEMPLATE.md`

## Reference links

- Plugins guide: https://code.claude.com/docs/en/plugins
- Plugin marketplaces guide: https://code.claude.com/docs/en/plugin-marketplaces
- Privacy policy: https://dnlbox.github.io/fhir-format-skill/privacy/
