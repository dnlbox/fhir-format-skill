# Reproducible Benchmark

This benchmark lets anyone validate three claims about `fhir-format`:

1. The skill activates only when relevant.
2. The skill improves response quality on FHIR questions.
3. The skill improves verifiability via explicit sources.

For command-execution benchmarking, use `benchmark/cli/README.md`.

## Files

- `benchmark/QUERIES.md`: mixed relevant and non-relevant query set.
- `benchmark/PROMPTS.md`: copy-paste prompts for baseline, skill, and evaluator runs.
- `benchmark/results/`: optional local output folder.
- `benchmark/results/RESULT_TEMPLATE.md`: optional summary template.
- `benchmark/validate_results.py`: schema checks for JSON outputs.

## How to run

1. Start baseline session (no plugin):

   ```bash
   claude
   ```

2. Run baseline prompt from `benchmark/PROMPTS.md` and save to `benchmark/results/baseline.json`.

3. Start skill-enabled session:

   ```bash
   claude --plugin-dir .
   ```

4. Run skill prompt from `benchmark/PROMPTS.md` and save to `benchmark/results/with-skill.json`.

5. Run evaluator prompt from `benchmark/PROMPTS.md` and save to `benchmark/results/evaluation.md`.

6. Validate result JSON files:

   ```bash
   python3 benchmark/validate_results.py benchmark/results/baseline.json benchmark/results/with-skill.json
   ```

Use separate sessions for each step to reduce cross-run leakage.

## Recommended execution settings

- Keep the same model family across both runs.
- Keep temperature and system instructions as similar as possible.
- Do not edit generated answers before evaluation.
- Re-run at least 3 times and compare median outcomes.

## Expected pattern

- Activation: near-perfect routing (R* activate, N* do not).
- Quality: with-skill should win most FHIR-relevant queries.
- Sources: with-skill should include authoritative references more often.

If your results differ, include raw outputs when reporting so others can inspect.

## Frozen reference run

- Baseline: `benchmark/results/2026-04-08-baseline.json`
- With skill: `benchmark/results/2026-04-08-with-skill.json`
- Evaluation: `benchmark/results/2026-04-08-evaluation.md`

## How to submit your benchmark run

1. Copy your outputs to `benchmark/results/` with a date prefix:
   - `YYYY-MM-DD-baseline.json`
   - `YYYY-MM-DD-with-skill.json`
   - `YYYY-MM-DD-evaluation.md`
2. Run validator:

   ```bash
   python3 benchmark/validate_results.py benchmark/results/YYYY-MM-DD-baseline.json benchmark/results/YYYY-MM-DD-with-skill.json
   ```

3. Fill `benchmark/results/RESULT_TEMPLATE.md` summary fields.
4. In your PR, include model, date, and links to all three files.
