# Contributing

Thanks for contributing to `fhir-format`.

## Scope

This plugin is accuracy-first. Contributions should improve one or more of:

- factual correctness for FHIR R4/R4B/R5
- clarity of base FHIR vs profile-dependent guidance
- verifiability (source-backed statements)
- benchmark reproducibility

## Rules

1. Do not invent FHIR semantics, cardinalities, or terminology codes.
2. Label profile-dependent guidance explicitly.
3. Distinguish structural validation from full conformance.
4. Keep examples minimal and safe (no PHI).

## Local checks

From repository root:

```bash
python3 scripts/validate_metadata.py
python3 benchmark/validate_results.py benchmark/results/2026-04-08-baseline.json benchmark/results/2026-04-08-with-skill.json
claude plugin validate .
```

## Benchmark updates

If your change affects behavior claims, rerun benchmarks:

- relevance benchmark: `benchmark/`
- CLI grounding benchmark: `benchmark/cli/`

Store artifacts under `benchmark/results/` or `benchmark/cli/results/` using `YYYY-MM-DD-*` names.

## Pull requests

- Keep PRs focused and explain why the change improves accuracy or usability.
- Include benchmark artifacts when behavior claims are changed.
- Update `PUBLISHING_CHECKLIST.md` if release readiness gates change.
