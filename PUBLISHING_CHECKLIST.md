# Publishing Checklist

Checklist for publishing the `fhir-format` plugin skill to a Claude plugin marketplace.

## Plugin packaging

- [ ] `.claude-plugin/plugin.json` exists and is valid JSON.
- [ ] Plugin `name` is `fhir-format` (kebab-case and stable namespace).
- [ ] Plugin `version` follows semantic versioning.
- [ ] `homepage` URL points to public plugin docs and `repository` points to source repo.
- [ ] `python3 scripts/validate_metadata.py` passes.
- [ ] `skills/fhir-format/SKILL.md` exists and has valid frontmatter.
- [ ] Skill can be invoked as `/fhir-format:fhir-format`.

## Accuracy and safety gates

- [ ] No fabricated normative claims.
- [ ] Normative claims include source URLs.
- [ ] Version-sensitive guidance is annotated for R4/R4B/R5.
- [ ] Profile-dependent claims are explicitly labeled.
- [ ] Terminology guidance does not guess codes.
- [ ] Validation boundaries are explicit (structural vs full conformance).
- [ ] Relevance benchmark rerun (`benchmark/`) and results archived.
- [ ] Benchmark JSON outputs pass `python3 benchmark/validate_results.py`.
- [ ] CLI benchmark rerun (`benchmark/cli/`) and results archived.

## Docs and distribution

- [ ] README avoids repo-coupled installation paths.
- [ ] README includes quick install and first invocation path.
- [ ] README includes local plugin test instructions (`--plugin-dir`).
- [ ] README includes trigger-style user prompt examples.
- [ ] README includes explicit non-goals/capability boundaries.
- [ ] README includes references to plugin and marketplace docs.
- [ ] Examples are clearly labeled as instructional, not universal conformance fixtures.
- [ ] `MARKETPLACE_BENCHMARK.md` is refreshed if positioning or scope changed.

## Validation commands

Run from the plugin root (`fhir-format-skill/`):

```bash
claude plugin validate .
```

Optional local runtime smoke test:

```bash
claude --plugin-dir .
```

Then run:

```text
/fhir-format:fhir-format
```

## Marketplace readiness

- [ ] Marketplace metadata (name/owner/plugins) is prepared in the hosting repository.
- [ ] Plugin source path or source type is stable (`github`, `git-subdir`, `npm`, or local relative path).
- [ ] Release version is incremented before publish.
- [ ] Changelog or release notes capture behavior/accuracy changes.
