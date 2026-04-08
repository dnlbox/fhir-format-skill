# CLI Benchmark

This benchmark measures whether answers are better when the assistant uses real toolkit commands instead of only reasoning from memory.

It complements the main relevance benchmark in `benchmark/`.

## Goals

1. Verify the assistant proposes and executes the right CLI commands when needed.
2. Compare baseline vs skill-guided answers for command-grounded FHIR tasks.
3. Check whether responses clearly separate observed command output from interpretation.

## Files

- `benchmark/cli/QUERIES.md`: command-grounded query set.
- `benchmark/cli/PROMPTS.md`: copy/paste prompts for baseline, with-skill, and evaluator runs.
- `benchmark/cli/results/RESULT_TEMPLATE.md`: summary template.

## How to run

1. Start baseline session:

   ```bash
   claude
   ```

2. Run baseline prompt from `benchmark/cli/PROMPTS.md` and save:
   - `benchmark/cli/results/YYYY-MM-DD-baseline.md`

3. Start skill-enabled session:

   ```bash
   claude --plugin-dir .
   ```

4. Run skill prompt from `benchmark/cli/PROMPTS.md` and save:
   - `benchmark/cli/results/YYYY-MM-DD-with-skill.md`

5. Run evaluator prompt from `benchmark/cli/PROMPTS.md` and save:
   - `benchmark/cli/results/YYYY-MM-DD-evaluation.md`

## Suggested environment checks

- `fhir-resource-diff --version`
- `fhir-test-data --version`

If commands are unavailable, record that in results and score command-grounding as not testable for that run.
