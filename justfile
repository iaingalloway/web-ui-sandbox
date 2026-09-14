set dotenv-load := true
set dotenv-filename := ".local.env"
set dotenv-required := false

default: check

# Run the application in development mode
dev:
  pnpm dev

# Run all CI checks (typecheck + format check)
check:
  pnpm -r --include-workspace-root run --if-present check

# Format all source files in place
format:
  pnpm -r --include-workspace-root run --if-present format

# Install new or changed dependencies
update:
  pnpm install

# Install all workspace dependencies
install: install-modules install-hooks

install-modules:
  pnpm install --frozen-lockfile

install-hooks:
  @p="$(git rev-parse --git-path hooks)/pre-commit"; printf '%s\n' '#!/usr/bin/env bash' 'set -euo pipefail' '' 'cd "$(git rev-parse --show-toplevel)"' 'exec just pre-commit' > "$p"; chmod +x "$p"

pre-commit: check
