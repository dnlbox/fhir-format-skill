# Benchmark Evaluation (2026-04-08)

## Setup

- Query set: `benchmark/QUERIES.md`
- Baseline: `benchmark/results/2026-04-08-baseline.json`
- With skill: `benchmark/results/2026-04-08-with-skill.json`

## Activation Metrics

Ground truth:

- Relevant: `R1..R5` (should activate)
- Non-relevant: `N1..N5` (should not activate)

| Set | TP | FP | FN | TN | Precision | Recall |
|---|---:|---:|---:|---:|---:|---:|
| Baseline | 5 | 0 | 0 | 5 | 1.00 | 1.00 |
| With skill | 5 | 0 | 0 | 5 | 1.00 | 1.00 |

## Query-by-Query Winner

- `R1`: with-skill (adds classification + source-backed claim)
- `R2`: with-skill (better Quantity/UCUM nuance + sources)
- `R3`: with-skill (clear structural vs full conformance boundary + sources)
- `R4`: with-skill (clearer version-delta framing + sources)
- `R5`: with-skill (normative fix + sources)
- `N1`: tie
- `N2`: tie
- `N3`: tie
- `N4`: tie
- `N5`: tie

## Accuracy and Verifiability

- Baseline: medium risk on FHIR queries (few/no verifiable citations).
- With-skill: lower risk on FHIR queries (explicit claim labels + authoritative links).
- Source quality delta: strong improvement in with-skill run for relevant questions.

## Verdict

The skill keeps routing scope precise and improves FHIR response quality where it matters most: evidence-backed accuracy and verifiability.
