#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$PROJECT_DIR"
PORT="${PORT:-3000}"
export PORT

run_timed() {
  local label="$1"
  shift
  printf '[timing] %s\n' "$label" >&2
  /usr/bin/time -p "$@"
}

run_timed 'npm ci' npm ci --no-audit --no-fund
run_timed 'npm run build' npm run build

DEPLOYMENT_DIR="${OPENCODE_WEB_DIR:-/home/runner/work/_temp/omgithub-web}"
run_timed 'write deployment metadata' node -e '
  const fs = require("node:fs");
  const path = require("node:path");
  const project = process.argv[1];
  const output = path.join(project, "dist");
  const file = process.argv[2];
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify({ project, directory: output }) + "\n");
' "$PROJECT_DIR" "$DEPLOYMENT_DIR/deployment-output.json"

run_timed 'validate built output' test -f "$PROJECT_DIR/dist/index.html"
printf '[timing] static server (foreground)\n' >&2
exec /usr/bin/time -p node "$PROJECT_DIR/scripts/serve-dist.mjs"
