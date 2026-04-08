# Benchmark Prompts

Copy and run these prompts in separate sessions.

## 1) Baseline run (without skill contract)

```text
Run an experiment on the queries in benchmark/QUERIES.md.
You are a normal coding assistant with NO specialized FHIR skill contract.

For each query, return:
- query_id
- query_text
- should_activate_fhir_skill: yes/no (best estimate)
- answer (direct response)
- sources (URLs only; empty if none)

Keep answers concise but substantive.
Output JSON.
```

Save output to `benchmark/results/baseline.json`.

## 2) Skill run (with `fhir-format` behavior)

```text
Run an experiment on the queries in benchmark/QUERIES.md as if the `fhir-format` skill is installed.

For each query:
1) Decide whether the skill should activate.
2) If activate=yes, answer using this contract:
   - classify claims as Normative / Version-delta / Profile-dependent / Implementation practice where relevant
   - include authoritative source URLs for normative claims
   - do not guess terminology codes
   - distinguish structural validation vs full conformance
3) If activate=no, answer normally.

Return:
- query_id
- query_text
- should_activate_fhir_skill: yes/no
- answer
- sources (URLs)

Keep answers concise but substantive.
Output JSON.
```

Save output to `benchmark/results/with-skill.json`.

## 3) Evaluator run

```text
Evaluate two response sets (baseline vs with-skill) for benchmark/QUERIES.md.

Ground truth:
- Relevant queries: R1..R5 should activate skill.
- Non-relevant queries: N1..N5 should NOT activate skill.

Provide:
1. Activation precision/recall for relevant and non-relevant groups.
2. Per-query winner on usefulness.
3. Accuracy risk assessment.
4. Verifiable-source quality comparison.
5. Final verdict on whether skill improves outcomes.

Output markdown with a score table.
```

Save output to `benchmark/results/evaluation.md`.
