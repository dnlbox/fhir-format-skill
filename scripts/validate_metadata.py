#!/usr/bin/env python3
"""Validate plugin metadata consistency for publishing."""

from __future__ import annotations

import json
import re
from pathlib import Path


REPO_URL = "https://github.com/dnlbox/fhir-format-skill"
HOMEPAGE_URL = "https://dnlbox.github.io/fhir-format-skill/"
PLUGIN_NAME = "fhir-format"
MARKETPLACE_NAME = "fhir-format-marketplace"


def fail(message: str) -> None:
    raise ValueError(message)


def load_json(path: Path) -> dict:
    with path.open("r", encoding="utf-8") as file:
        return json.load(file)


def extract_frontmatter_name(path: Path) -> str:
    content = path.read_text(encoding="utf-8")
    match = re.search(r"^name:\s*([^\n]+)$", content, flags=re.MULTILINE)
    if not match:
        fail(f"{path}: missing frontmatter name")
    return match.group(1).strip()


def main() -> int:
    root = Path(__file__).resolve().parents[1]
    plugin_json = load_json(root / ".claude-plugin" / "plugin.json")
    marketplace_json = load_json(root / ".claude-plugin" / "marketplace.json")

    if plugin_json.get("name") != PLUGIN_NAME:
        fail("plugin.json name must be 'fhir-format'")

    if plugin_json.get("homepage") != HOMEPAGE_URL:
        fail("plugin.json homepage does not match expected docs URL")

    if plugin_json.get("repository") != REPO_URL:
        fail("plugin.json repository does not match repository URL")

    if plugin_json.get("skills") != "./skills/":
        fail("plugin.json skills must be './skills/'")

    if marketplace_json.get("name") != MARKETPLACE_NAME:
        fail("marketplace.json name must be 'fhir-format-marketplace'")

    plugins = marketplace_json.get("plugins", [])
    if len(plugins) != 1:
        fail("marketplace.json must define exactly one plugin entry")

    plugin_entry = plugins[0]
    if plugin_entry.get("name") != PLUGIN_NAME:
        fail("marketplace plugin name must be 'fhir-format'")

    if plugin_entry.get("source") != "./":
        fail("marketplace plugin source must be './'")

    if plugin_entry.get("repository") != REPO_URL:
        fail("marketplace plugin repository does not match repository URL")

    plugin_version = plugin_json.get("version")
    catalog_version = marketplace_json.get("metadata", {}).get("version")
    entry_version = plugin_entry.get("version")

    if plugin_version != catalog_version or plugin_version != entry_version:
        fail("version mismatch across plugin.json and marketplace.json")

    root_skill_name = extract_frontmatter_name(root / "SKILL.md")
    plugin_skill_name = extract_frontmatter_name(
        root / "skills" / "fhir-format" / "SKILL.md"
    )

    if root_skill_name != PLUGIN_NAME:
        fail("SKILL.md frontmatter name must be 'fhir-format'")

    if plugin_skill_name != PLUGIN_NAME:
        fail("skills/fhir-format/SKILL.md frontmatter name must be 'fhir-format'")

    print("OK: metadata is aligned for publishing")
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except ValueError as exc:
        print(f"ERROR: {exc}")
        raise SystemExit(1)
