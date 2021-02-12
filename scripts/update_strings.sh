#!/bin/sh

set -e

TIMEOUT=0

CWD=$(pwd)
STRING_GENERATOR_DIRECTORY=".string_generator"
mkdir -p $STRING_GENERATOR_DIRECTORY
cd $STRING_GENERATOR_DIRECTORY

# Setup string-resources-parser project repo
if [ ! -d .git ]; then

  if ! which brew >/dev/null; then
    echo "Installing homebrew"
    ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
  fi

  if ! brew ls --versions git >/dev/null; then
    echo "Installing git"
    brew install git --verbose
  fi

  if ! brew ls --versions node >/dev/null; then
    echo "Installing node"
    brew install node --verbose
  fi

  git clone https://github.com/ysavchenko/string-resourcer.git .
  npm install
fi

git pull origin master

cd $CWD

PIDS=""
sh ./scripts/update_strings_for_locale.sh --script_folder=$STRING_GENERATOR_DIRECTORY --timeout=$TIMEOUT --folder="src/assets/locales" --output_folder="en" --document_args="AIzaSyAFkTT9p-QAbzJ4KvnsPTowEWOgDkGGkpc,react,17IgsAH2R4q1OgUVezZ0Ob2dZJsCeyFne8tepeyan7Eo,D,en,E" &
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