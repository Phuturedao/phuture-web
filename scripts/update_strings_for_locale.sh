#!/bin/sh
set -e

print_intro_information() {
  echo ""
  echo "******************** update_strings.sh ********************"
  echo "Starting string generator for $OUTPUT_FOLDER..."
  echo "DOCUMENT_ARGS: $DOCUMENT_ARGS"
  echo "OUTPUT_FOLDER: $OUTPUT_FOLDER"
  echo "TIMEOUT: $TIMEOUT"
  echo "***********************************************************"
  echo ""
}

echo "SCRIPT $(pwd)"

INITIAL_LAUNCH=false
DOCUMENT_ARGS=""

SCRIPT_PATH=$(pwd)
LOCALIZED_FOLDER=""
OUTPUT_FOLDER=""
STRING_GENERATOR_DIR=""
TIMEOUT=0

# Parse script arguments
for i in "$@"; do
  case $i in
  -o=* | --output_folder=*)
    OUTPUT_FOLDER="${i#*=}"
    ;;
  -d=* | --document_args=*)
    DOCUMENT_ARGS="${i#*=}"
    ;;
  -f=* | --folder=*)
    LOCALIZED_FOLDER="${i#*=}"
    ;;
  -s=* | --script_folder=*)
    STRING_GENERATOR_DIR="${i#*=}"
    ;;
  -t=* | --timeout=*)
    TIMEOUT="${i#*=}"
    ;;
  *) ;;

  esac
done

print_intro_information

OUTPUT_FOLDER=$(echo $OUTPUT_FOLDER | xargs)
TIMESTAMP_FILE=".timestamp_$OUTPUT_FOLDER"

if [ "$OUTPUT_FOLDER" = "" ]; then
  echo "Enter -o / --output_folder name"
  exit 1
fi

cd $STRING_GENERATOR_DIR
LOCALIZED_FOLDER_PATH="$SCRIPT_PATH/$LOCALIZED_FOLDER"
NOW=$(date '+%s')

# Timeout script calls
SHOULD_SYNC=true
if [ -f $TIMESTAMP_FILE ]; then
  read -r LAST_SYNC <$TIMESTAMP_FILE
  if [ $(($NOW - $LAST_SYNC)) -gt $TIMEOUT ]; then
    SHOULD_SYNC=true
  else
    SHOULD_SYNC=false
  fi
  echo "timestamp found SHOULD_SYNC: $SHOULD_SYNC"
fi

if [ "$SHOULD_SYNC" = false ]; then
  exit 0
fi

rm -rf $(find . -name "react/$OUTPUT_FOLDER.json")
mkdir -p $LOCALIZED_FOLDER_PATH
# Run string generator for file key
node index.js <<EOF
$DOCUMENT_ARGS
EOF
echo "OUTPUT_FOLDER: react/$OUTPUT_FOLDER.json"
echo "LOCALIZED_FOLDER_PATH: $LOCALIZED_FOLDER_PATH"
rsync -av "react/$OUTPUT_FOLDER.json" "$LOCALIZED_FOLDER_PATH"

echo "Save timestamp in $TIMESTAMP_FILE"
echo $NOW >$TIMESTAMP_FILE