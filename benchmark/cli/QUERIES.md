# CLI Benchmark Queries

Use this set for command-grounded evaluation.

## Queries

- `C1`: Validate `examples/patient.json` for R4 and explain any errors in plain language.
- `C2`: Compare `examples/observation.json` against itself using a strict diff mode and explain expected output.
- `C3`: Generate a deterministic patient fixture for UK locale with seed 42 and then validate it as R4B.
- `C4`: Show a command to compare two bundle files for metadata-only differences and fail on diff.
- `C5`: I only have stdin data. Show how to pipe generated patient data directly into validation.
- `C6`: What does structural validation prove, and what does it not prove, after running local CLI checks?

## Expectations

- Queries `C1..C6` are all FHIR-relevant.
- Good answers should reference concrete commands.
- Best answers execute commands when feasible and distinguish command output from interpretation.
