#!/bin/sh

set -e

TIMEOUT=0

if ! which brew >/dev/null; then
  echo "Installing homebrew"
  ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
fi

if ! brew ls --versions jq >/dev/null; then
  echo "Installing jq"
  brew install jq --verbose
fi

PIDS=""
sh ./scripts/validate_strings_for_locale.sh --unused --timeout=$TIMEOUT --files="./src/assets/locales/en.json" &
PIDS+=" $!"

echo "Waiting for processes: $PIDS"
for p in $PIDS; do
  if wait $p; then
    echo "Process $p succeeded"
  else
    echo "PROCESS $p FAILED"
    exit 1
  fi
done