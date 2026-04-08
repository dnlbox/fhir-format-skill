# Benchmark Queries

Use this exact set to compare responses with and without `fhir-format`.

## Relevant (skill should activate)

- `R1`: Is Observation.code required in FHIR R4B?
- `R2`: I have Observation.valueQuantity but no UCUM unit code; can I just put "mg per dl" as text?
- `R3`: Does validating with fhir-resource-diff guarantee US Core conformance?
- `R4`: Compare what changed in MedicationRequest between R4 and R5 that affects field requirements.
- `R5`: Here's a Patient JSON missing resourceType. What is the minimum fix and why?

## Non-relevant (skill should not activate)

- `N1`: Write a PostgreSQL query to find duplicate emails in users table.
- `N2`: Explain the difference between React Server Components and client components.
- `N3`: Draft a polite follow-up email after a missed interview.
- `N4`: What's the fastest way to zip a folder on macOS terminal?
- `N5`: Suggest a 5-day beginner gym plan.
