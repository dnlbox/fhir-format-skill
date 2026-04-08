# CLI Benchmark Prompts

Use separate sessions for baseline, skill, and evaluator runs.

## 1) Baseline run (no skill contract)

```text
Run the queries in benchmark/cli/QUERIES.md.
You are a normal coding assistant with no specialized FHIR skill contract.

For each query, return:
- query_id
- query_text
- commands_proposed (list)
- commands_executed (list)
- answer
- sources (URLs)
- notes_on_limits

Rules:
- Execute commands when feasible in this environment.
- If a command cannot run, state why.
- Keep command output summary concise and separate from interpretation.
```

Save to `benchmark/cli/results/YYYY-MM-DD-baseline.md`.

## 2) Skill run (`fhir-format` behavior)

```text
Run the queries in benchmark/cli/QUERIES.md as if the `fhir-format` skill is installed.

For each query, return:
- query_id
- query_text
- commands_proposed (list)
- commands_executed (list)
- answer
- claim_labels_used (Normative / Version-delta / Profile-dependent / Implementation practice)
- sources (URLs)
- notes_on_limits

Rules:
- Execute commands when feasible in this environment.
- Do not guess terminology codes.
- Distinguish structural validation from full conformance.
- Separate observed command output from interpretation.
```

Save to `benchmark/cli/results/YYYY-MM-DD-with-skill.md`.

## 3) Evaluator run

```text
Evaluate baseline vs with-skill outputs for benchmark/cli/QUERIES.md.

Score each query on:
1. Command grounding quality (0-5)
2. Accuracy and safety language (0-5)
3. Verifiable sources (0-5)
4. Practical usefulness (0-5)

Then provide:
- Per-query winner
- Total score by run
- Key failure modes
- Final verdict
```

Save to `benchmark/cli/results/YYYY-MM-DD-evaluation.md`.
