#!/usr/bin/env bash
# Static demo build for GitHub Pages. Usage: BASE_PATH=/repo-name scripts/build-demo.sh
set -euo pipefail
cd "$(dirname "$0")/.."
mv app/api .api-demo-skip
trap 'mv .api-demo-skip app/api' EXIT
rm -rf out
DEMO_EXPORT=1 NEXT_TELEMETRY_DISABLED=1 npx next build
touch out/.nojekyll
