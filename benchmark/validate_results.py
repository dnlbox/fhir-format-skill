#!/usr/bin/env python3
"""Validate benchmark result JSON files.

Usage:
  python benchmark/validate_results.py \
    benchmark/results/2026-04-08-baseline.json \
    benchmark/results/2026-04-08-with-skill.json
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path
from typing import Any


EXPECTED_QUERY_IDS = {
    "R1",
    "R2",
    "R3",
    "R4",
    "R5",
    "N1",
    "N2",
    "N3",
    "N4",
    "N5",
}

URL_PATTERN = re.compile(r"^https?://")


def fail(message: str) -> None:
    raise ValueError(message)


def load_json(path: Path) -> Any:
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except json.JSONDecodeError as exc:
        fail(f"{path}: invalid JSON ({exc})")


def validate_entry(entry: dict[str, Any], index: int, path: Path) -> None:
    required_fields = {
        "query_id",
        "query_text",
        "should_activate_fhir_skill",
        "answer",
        "sources",
    }
    missing = required_fields.difference(entry.keys())
    if missing:
        fail(f"{path}[{index}]: missing fields: {sorted(missing)}")

    query_id = entry["query_id"]
    if query_id not in EXPECTED_QUERY_IDS:
        fail(f"{path}[{index}]: unexpected query_id '{query_id}'")

    activate = entry["should_activate_fhir_skill"]
    if activate not in {"yes", "no"}:
        fail(f"{path}[{index}]: should_activate_fhir_skill must be 'yes' or 'no'")

    if not isinstance(entry["query_text"], str) or not entry["query_text"].strip():
        fail(f"{path}[{index}]: query_text must be a non-empty string")

    if not isinstance(entry["answer"], str) or not entry["answer"].strip():
        fail(f"{path}[{index}]: answer must be a non-empty string")

    sources = entry["sources"]
    if not isinstance(sources, list):
        fail(f"{path}[{index}]: sources must be a list")

    for source in sources:
        if not isinstance(source, str) or not URL_PATTERN.match(source):
            fail(f"{path}[{index}]: invalid source URL '{source}'")


def validate_file(path: Path) -> None:
    data = load_json(path)
    if not isinstance(data, list):
        fail(f"{path}: top-level value must be an array")

    if len(data) != 10:
        fail(f"{path}: expected 10 entries, got {len(data)}")

    seen_ids: set[str] = set()
    for index, entry in enumerate(data):
        if not isinstance(entry, dict):
            fail(f"{path}[{index}]: each entry must be an object")
        validate_entry(entry, index, path)
        query_id = entry["query_id"]
        if query_id in seen_ids:
            fail(f"{path}: duplicate query_id '{query_id}'")
        seen_ids.add(query_id)

    if seen_ids != EXPECTED_QUERY_IDS:
        missing = sorted(EXPECTED_QUERY_IDS.difference(seen_ids))
        extra = sorted(seen_ids.difference(EXPECTED_QUERY_IDS))
        fail(f"{path}: query_id mismatch; missing={missing} extra={extra}")


def main() -> int:
    if len(sys.argv) < 2:
        print(
            "Usage: python benchmark/validate_results.py <result.json> [result2.json ...]"
        )
        return 2

    for arg in sys.argv[1:]:
        path = Path(arg)
        if not path.exists():
            fail(f"{path}: file not found")
        validate_file(path)
        print(f"OK: {path}")

    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except ValueError as exc:
        print(f"ERROR: {exc}")
        raise SystemExit(1)
