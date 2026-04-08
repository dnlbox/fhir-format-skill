# fhir-format examples

These files are teaching examples for the `fhir-format` skill.

They are useful for structure and workflow demonstrations, but they are not a substitute for profile-specific conformance validation.

## Files

- `patient.json`: base-structure patient example with common demographics and identifiers
- `observation.json`: blood pressure observation with LOINC and UCUM coding
- `bundle.json`: transaction bundle with intra-bundle references
- `common-errors.json`: common structural mistakes and corrected alternatives

## Scope and limits

- These examples target readability and common interoperability patterns.
- They do not claim conformance to a specific implementation guide (for example, US Core).
- Use profile validators and terminology services when you need production-grade conformance evidence.

## Validation commands

```bash
# Structural validation only
fhir-resource-diff validate examples/patient.json --fhir-version R4
fhir-resource-diff validate examples/observation.json --fhir-version R4B
fhir-resource-diff validate examples/bundle.json --fhir-version R5
```

## Fixture generation examples

```bash
fhir-test-data generate patient --locale us --seed 42
fhir-test-data generate bundle --locale uk --seed 1
```
