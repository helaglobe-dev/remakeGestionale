#!/bin/sh
set -eu

SCRIPT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
PROJECT_DIR=$(CDPATH= cd -- "$SCRIPT_DIR/.." && pwd)
DB_FILE=${DB_FILE:-"$PROJECT_DIR/data/helaproject.db"}
BACKUP_DIR=${BACKUP_DIR:-"$PROJECT_DIR/backups"}
RETENTION_DAYS=${BACKUP_RETENTION_DAYS:-30}

if ! command -v sqlite3 >/dev/null 2>&1; then
  echo "sqlite3 non è installato sul server." >&2
  exit 1
fi

if [ ! -f "$DB_FILE" ]; then
  echo "Database non trovato: $DB_FILE" >&2
  exit 1
fi

case "$BACKUP_DIR" in
  "$PROJECT_DIR"/*) ;;
  *)
    echo "BACKUP_DIR deve essere una sottocartella del progetto." >&2
    exit 1
    ;;
esac

case "$RETENTION_DAYS" in
  ''|*[!0-9]*)
    echo "BACKUP_RETENTION_DAYS deve essere un numero intero." >&2
    exit 1
    ;;
esac

umask 077
mkdir -p "$BACKUP_DIR"
stamp=$(date -u +%Y%m%dT%H%M%SZ)
target="$BACKUP_DIR/helaproject-$stamp.db"

sqlite3 "$DB_FILE" ".timeout 10000" ".backup '$target'"
gzip -9 "$target"

find "$BACKUP_DIR" -maxdepth 1 -type f -name 'helaproject-*.db.gz' -mtime "+$RETENTION_DAYS" -delete
echo "$target.gz"
