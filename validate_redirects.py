import sys
import re
from pathlib import Path

def is_valid_status(code):
    return code in {"200", "200!", "301", "302", "404", "410"}

def is_comment_or_blank(line):
    return not line.strip() or line.strip().startswith("#")

def validate_redirects(file_path):
    seen_sources = {}
    wildcard_detected = False
    line_count = 0
    error_found = False

    with open(file_path, "r") as f:
        for line in f:
            line_count += 1
            raw = line.strip()

            if is_comment_or_blank(raw):
                continue

            parts = re.split(r"\s+", raw)
            if len(parts) < 3:
                print(f"[Line {line_count}] ❌ Malformed: {raw}")
                error_found = True
                continue

            source, destination, status = parts[0], parts[1], parts[2]

            # Validate status
            if not is_valid_status(status):
                print(f"[Line {line_count}] ❌ Invalid status code '{status}'")
                error_found = True

            # Self-redirect
            if source == destination:
                print(f"[Line {line_count}] ❌ Self-redirect: {source} → {destination}")
                error_found = True

            # Duplicate detection
            if source in seen_sources:
                print(f"[Line {line_count}] ⚠️ Duplicate of line {seen_sources[source]}: {source}")
            seen_sources[source] = line_count

            # Infinite loop risk
            if "*" in source and destination.endswith(".html") and status.startswith("200"):
                print(f"[Line {line_count}] ⚠️ Risk of redirect loop: {source} → {destination} ({status})")

            # Wildcard performance tip
            if "*" in source and not wildcard_detected:
                print(f"[Line {line_count}] ⚠️ Wildcard rule detected. Place this at the bottom for performance.")
                wildcard_detected = True

    print("\n✅ Validation complete.")
    if error_found:
        sys.exit(1)

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python validate_redirects.py /path/to/_redirects")
        sys.exit(1)

    file_path = Path(sys.argv[1])
    if not file_path.is_file():
        print(f"Error: File not found: {file_path}")
        sys.exit(1)

    validate_redirects(file_path)
