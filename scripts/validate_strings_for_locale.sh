#!/bin/sh
set -e

array_contains() {
  local e match="$1"
  shift
  for e; do [[ "$e" == "$match" ]] && return 0; done
  return 1
}

handle_used_key() {
  USED=$1
  if [ "$HANDLE_UNUSED_STRINGS" = true ] && ! array_contains "$USED" "${USED_KEYS[@]}"; then
    USED_KEYS+=($USED)
  fi
}

# Match lines in all javascript files in directory
script_path="$(
  cd "$(dirname "$0")"
  pwd -P
)"

file_names=""

TIMESTAMP_FOLDER=".validate_strings"
TIMEOUT=0
HANDLE_UNUSED_STRINGS=true
for i in "$@"; do
  case $i in
  -f=* | --files=*)
    file_names="${i#*=}"
    ;;
  -t=* | --timeout=*)
    TIMEOUT="${i#*=}"
    ;;
  -u | --unused)
    HANDLE_UNUSED_STRINGS=true
    ;;
  *) ;;

  esac
done

# Timeout script calls
NOW=$(date '+%s')
SHOULD_SYNC=true
mkdir -p "$TIMESTAMP_FOLDER"
TIMESTAMP_FILE=$(echo "timestamp_$file_names" | sed 's/\//_/g')
TIMESTAMP_FILE="$TIMESTAMP_FOLDER/$TIMESTAMP_FILE"
echo "TIMESTAMP_FILE: $TIMESTAMP_FILE TIMEOUT: $TIMEOUT"

if [ -f $TIMESTAMP_FILE ]; then
  read -r LAST_SYNC <$TIMESTAMP_FILE
  if [ $(($NOW - $LAST_SYNC)) -gt $TIMEOUT ]; then
    SHOULD_SYNC=true
  else
    SHOULD_SYNC=false
  fi
  echo "timestamp found in $TIMESTAMP_FILE SHOULD_SYNC: $SHOULD_SYNC"
fi

if [ "$SHOULD_SYNC" = false ]; then
  exit 0
fi

IFS="
"

strings_files=()
stringdict_files=()

file_names=$(echo $file_names | xargs)
file_names=$(echo "$file_names" | sed 's/[[:space:]]*\,[[:space:]]*/,/g')
pretty_file_names=$(echo "$file_names" | sed 's/[[:space:]]*\,[[:space:]]*/, /g')

IFS=',' read -r -a files_array <<<"$file_names"

for file in "${files_array[@]}"; do
  if [ ! -f "${file}" ]; then
    echo "$script_path:$LINENO: error: File \"$file\" not found"
    echo "directory:"
    pwd
    exit 1
  fi

  if [[ $file == *.json ]]; then
    strings_files+=($file)
  else
    echo "$script_path:$LINENO: error: \"$file\" must be either .json"
    exit 1
  fi
done

strings_files_count=${#strings_files[@]}
stringdict_files_count=${#stringdict_files[@]}

if [[ $strings_files_count -eq 0 ]] && [[ $stringdict_files_count -eq 0 ]]; then
  echo "$script_path:$LINENO: error: -f flag with valid .json file paths is required to run $(basename $0)"
  exit 1
fi

ALL_KEYS=()
USED_KEYS=()

invalid_keys=()
invalid_key_infos=()
invalid_key_info_keys=()

echo "Parse .json file dependancies"

for strings_file in ${strings_files}; do
  file_keys=$(jq keys_unsorted[] -r $strings_file)
  for key in ${file_keys}; do

    if array_contains "$key" "${ALL_KEYS[@]}"; then
      echo "Duplicate key: $key found in strings"
      exit 1
    fi

    ALL_KEYS+=($key)
  done
done

echo "Start parsing invalid keys ${#ALL_KEYS}"
echo "Parse javascript sources"

SRCS=$(grep -nRE "(\".*\"|'.*').localized" ./src --include="*.js" --include="*.ts" --include="*.jsx" --include="*.tsx") || true

for line in ${SRCS}; do
  len=${#line}
  for ((i = 0; i < $len; i++)); do
    c="${line:$i:1}"
    # 11 = 2 offset + 9 `localized`.length
    max_offset=$(($i + 11))

    if [ ! "$c" = "\"" ] && [ ! "$c" = "'" ]; then
      continue
    fi

    quote="$c"

    if [[ $max_offset -le $len ]] && [ "${line:$i+2:9}" = "localized" ]; then
      start=0
      found=false
      for ((j = $i - 1; j >= 0; j--)); do
        if [ "${line:$j:1}" == $quote ]; then
          found=true
          start=$j
          break
        fi
      done
      if [ "$found" = true ]; then
        key_len=$(($i + 1 - $j - 2)) #offset char at i with value `"` of `'` by 1 to calculate proper length
        str_key="${line:$start+1:$key_len}"
        if ! array_contains "$str_key" "${ALL_KEYS[@]}"; then
          # string key not found
          if ! array_contains "$line" "${invalid_key_infos[@]}"; then
            invalid_key_infos+=($line)
            invalid_key_info_keys+=($str_key)
          fi

          if ! array_contains "$str_key" "${invalid_keys[@]}"; then
            invalid_keys+=($str_key)
          fi
        else
          handle_used_key $str_key
        fi
      fi
      ((i += 11))
    fi
  done
done

# Handle unused strings if needed
if [ "$HANDLE_UNUSED_STRINGS" = true ]; then
  ALL_KEY_COUNT=${#ALL_KEYS[@]}
  for ((i = 0; i < $ALL_KEY_COUNT; i++)); do
    KEY=${ALL_KEYS[i]}
    if ! array_contains "$KEY" "${USED_KEYS[@]}"; then
      echo "warning: Unused key: $KEY"
    fi
  done
fi

invalid_keys_count=${#invalid_keys[@]}
if [[ $invalid_keys_count -gt 0 ]]; then
  echo ""
  echo "ERROR: Found $invalid_keys_count invalid keys:"
  for invalid_key in "${invalid_keys[@]}"; do
    echo "$invalid_key"
  done
  echo ""
  echo "In files:"
  invalid_infos_count=${#invalid_key_infos[@]}
  for ((info_index = 0; info_index < $invalid_infos_count; info_index++)); do
    invalid_key_info=${invalid_key_infos[$info_index]}
    len=${#invalid_key_info}
    end=0
    found=false
    path="$(echo "$invalid_key_info" | grep -oE '^.*(.js|.jsx|.ts|.tsx):\d+:' | xargs)"
    if [ -z "$path" ]; then
      echo "$invalid_key_info"
    else
      invalid_key_info_key=${invalid_key_info_keys[$info_index]}
      error="error: String key $invalid_key_info_key not found in $path (files: \"$pretty_file_names\")"
      echo "$path $error"
    fi
  done
  exit 1
fi

echo "Save timestamp in $TIMESTAMP_FILE"
echo $NOW >$TIMESTAMP_FILE