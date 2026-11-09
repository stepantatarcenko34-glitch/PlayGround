#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$PROJECT_DIR"
: "${CAPTURE_URL:?Set CAPTURE_URL to the exact preview URL.}"
: "${CAPTURE_DIR:?Set CAPTURE_DIR outside the project source tree.}"

CAPTURE_DIR="$(realpath -m "$CAPTURE_DIR")"
case "$CAPTURE_DIR/" in
  "$PROJECT_DIR/"*)
    echo 'CAPTURE_DIR must be outside the project directory.' >&2
    exit 1
    ;;
esac
export CAPTURE_DIR
# Capture the rendered title screen by default; gameplay startup is optional and can
# race the animated/hidden start panel in this project.
export CAPTURE_AUTO_START="${CAPTURE_AUTO_START:-false}"
export CAPTURE_READY_SELECTOR="${CAPTURE_READY_SELECTOR:-#start}"
export CAPTURE_STRICT=1

printf '[timing] browser capture\n' >&2
exec /usr/bin/time -p node "${RUNTIME_DIR:?}/scripts/default-capture.mjs"
