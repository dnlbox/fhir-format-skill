# fhir-format plugin skill

`fhir-format` is an accuracy-first Claude plugin for FHIR JSON reasoning across R4, R4B, and R5.

It is optimized for one outcome: reduce confident-but-wrong FHIR guidance by forcing claim labeling, source-backed normative statements, and explicit boundaries between base spec, profiles, and local server policy.

## Quick install

```bash
claude plugin marketplace add .
claude plugin install fhir-format@fhir-format-marketplace
```

Run the skill:

```text
/fhir-format:fhir-format
```

Homepage: https://dnlbox.github.io/fhir-format-skill/

## What it does

- Labels claims as `Normative`, `Version-delta`, `Profile-dependent`, or `Implementation practice`
- Requires authoritative URLs for normative claims
- Prevents guessed terminology codes and made-up conformance claims
- Separates structural validation from full profile and terminology conformance
- Supports version-aware guidance for R4, R4B, and R5

## When to use

Use `fhir-format` for:

- Resource shape/cardinality clarification
- Version-difference checks (R4 vs R4B vs R5)
- Terminology/binding guidance with explicit evidence
- Practical integration guidance for TypeScript, Python, and AI-assisted pipelines

Avoid using `fhir-format` alone for:

- Final legal/compliance decisions (HIPAA/GDPR/legal counsel required)
- Full IG conformance sign-off without profile + terminology-capable validation
- Clinical coding decisions without official terminology lookup

## Trigger examples

Natural prompts that should trigger this skill:

- "Is `Observation.code` required in R4B?"
- "Format this Patient JSON and tell me what is base FHIR vs profile-specific"
- "Can I validate this bundle with `fhir-resource-diff` and call it US Core compliant?"
- "What is the safest way to represent units and coding in this Observation?"

## Core behavior guarantees

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

## CI checks

The repository includes publish-readiness checks in GitHub Actions:

- metadata consistency across plugin manifests and skill frontmatter
- frozen benchmark result schema validation

Workflow file: `.github/workflows/ci.yml`

## Repository layout

```text
fhir-format-skill/
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── pages.yml
├── .claude-plugin/
│   ├── plugin.json
│   └── marketplace.json
├── docs/
│   └── index.html
├── skills/
│   └── fhir-format/
│       └── SKILL.md
├── examples/
│   ├── patient.json
│   ├── observation.json
│   ├── bundle.json
│   └── common-errors.json
├── benchmark/
│   ├── QUERIES.md
│   ├── PROMPTS.md
│   ├── README.md
│   ├── validate_results.py
│   ├── cli/
│   │   ├── QUERIES.md
│   │   ├── PROMPTS.md
│   │   ├── README.md
│   │   └── results/
│   │       └── RESULT_TEMPLATE.md
│   └── results/
│       └── RESULT_TEMPLATE.md
├── scripts/
│   └── validate_metadata.py
├── ACCURACY_MATRIX.md
├── CONTRIBUTING.md
├── LICENSE.md
├── MARKETPLACE_BENCHMARK.md
├── MARKETPLACE_SUBMISSION.md
├── PUBLISHING_CHECKLIST.md
├── README.md
└── SKILL.md
```

## Reference links

- Plugins guide: https://code.claude.com/docs/en/plugins
- Plugin marketplaces guide: https://code.claude.com/docs/en/plugin-marketplaces
- Benchmark notes used for this plugin: `MARKETPLACE_BENCHMARK.md`
