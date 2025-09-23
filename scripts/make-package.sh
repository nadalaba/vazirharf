#!/bin/bash
set -euo pipefail

SCRIPT_DIR=$(dirname "$0")
REPO_DIR="${SCRIPT_DIR}"/..
VERSION="$(python3 ${SCRIPT_DIR}/get-version.py ${REPO_DIR}/fonts/ttf/Vazirharf-Regular.ttf)"

# Make the release package file (zip)
RELEASEFILEPATH="vazirharf-v$VERSION.zip"
rm -f "$RELEASEFILEPATH" || exit 1
zip -r "$RELEASEFILEPATH" -q -MM fonts misc Round-Dots Vazirharf-font-face.css Vazirharf-Variable-font-face.css CHANGELOG.md README.md OFL.txt OFL-FAQ.txt FONTLOG.txt AUTHORS.txt DOCS.txt || exit 1

echo "Created $RELEASEFILEPATH"
