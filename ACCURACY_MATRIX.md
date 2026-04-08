# Accuracy Matrix

This matrix tracks high-impact claims in the `fhir-format` skill and how they are classified.

## Claim inventory

| Claim | Classification | Scope | Source | Action |
|---|---|---|---|---|
| Every FHIR resource instance must include `resourceType` | Normative | R4/R4B/R5 | https://hl7.org/fhir/R4/resource.html; https://hl7.org/fhir/R4B/resource.html; https://hl7.org/fhir/R5/resource.html | Keep |
| `Observation.status` is required in base definition | Normative | R4/R4B/R5 | https://hl7.org/fhir/R4/observation.html; https://hl7.org/fhir/R4B/observation.html; https://hl7.org/fhir/R5/observation.html | Keep |
| `Observation.code` is required in base definition | Normative | R4/R4B/R5 | https://hl7.org/fhir/R4/observation.html; https://hl7.org/fhir/R4B/observation.html; https://hl7.org/fhir/R5/observation.html | Keep |
| A field can be required in an IG even if optional in base spec | Profile-dependent | R4/R4B/R5 | https://hl7.org/fhir/profiling.html | Keep |
| Coded concepts should use explicit `coding.system` and `coding.code` when known | Implementation practice | Cross-version | https://hl7.org/fhir/R4/datatypes.html#CodeableConcept; https://hl7.org/fhir/R4B/datatypes.html#CodeableConcept; https://hl7.org/fhir/R5/datatypes.html#CodeableConcept | Keep (practice label) |
| Structural validation is not equivalent to full profile and terminology conformance | Implementation practice | Cross-version | https://confluence.hl7.org/display/FHIR/Using+the+FHIR+Validator | Keep |
| Terminology guidance must not guess codes | Implementation practice | Cross-version | https://hl7.org/fhir/terminologies.html | Keep |
| FHIR itself does not certify HIPAA/GDPR compliance | Implementation practice | Cross-version | https://hl7.org/fhir/ (scope of standard) | Keep |

## Removed or corrected assumptions

| Prior assumption | Reason changed | New handling |
|---|---|---|
| Treating profile-style requirements as universal base requirements | Inaccurate in many contexts | Label as `Profile-dependent` |
| Implicitly equating local validation with full conformance | Overstated capability | Explicit capability boundary language |
| Hardcoded repository-specific install path examples | Not portable and not publication-safe | Plugin and marketplace-oriented installation guidance |

## Ongoing maintenance rules

1. Any new normative claim must include at least one authoritative source URL.
2. Any version-sensitive claim must declare whether it is identical or divergent across R4/R4B/R5.
3. Any profile claim must be labeled `Profile-dependent` with IG context.
4. Any code recommendation must include source system and lookup path.
