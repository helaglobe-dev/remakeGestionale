#!/bin/sh
set -eu

SCRIPT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
PROJECT_DIR=$(CDPATH= cd -- "$SCRIPT_DIR/.." && pwd)
ENV_FILE=${1:-"$PROJECT_DIR/.env.deploy"}
COMPOSE_FILE="$PROJECT_DIR/compose.yaml"
DB_FILE="$PROJECT_DIR/data/helaproject.db"

if [ ! -f "$ENV_FILE" ]; then
  echo "File di configurazione mancante: $ENV_FILE" >&2
  echo "Copia ops/deploy.env.example in .env.deploy e compilalo." >&2
  exit 1
fi

set -a
# shellcheck disable=SC1090
. "$ENV_FILE"
set +a

if [ -z "${PUBLIC_HOSTNAME:-}" ] || [ -z "${CLOUDFLARE_TUNNEL_TOKEN:-}" ] || [ -z "${SEED_PASSWORD:-}" ]; then
  echo "Compila PUBLIC_HOSTNAME, CLOUDFLARE_TUNNEL_TOKEN e SEED_PASSWORD." >&2
  exit 1
fi

case "$PUBLIC_HOSTNAME" in
  *.*) ;;
  *)
    echo "PUBLIC_HOSTNAME deve essere un hostname completo, senza https://." >&2
    exit 1
    ;;
esac

case "$PUBLIC_HOSTNAME" in
  *://*|*/*|*' '*)
    echo "PUBLIC_HOSTNAME non è valido." >&2
    exit 1
    ;;
esac

if [ "${#SEED_PASSWORD}" -lt 16 ]; then
  echo "SEED_PASSWORD deve contenere almeno 16 caratteri." >&2
  exit 1
fi

case "$CLOUDFLARE_TUNNEL_TOKEN" in
  incolla-qui-*|replace-*|"")
    echo "CLOUDFLARE_TUNNEL_TOKEN contiene ancora il valore di esempio." >&2
    exit 1
    ;;
esac

umask 077
mkdir -p "$PROJECT_DIR/data" "$PROJECT_DIR/backups"

new_database=0
if [ ! -f "$DB_FILE" ]; then
  new_database=1
fi

cd "$PROJECT_DIR"
docker compose --env-file "$ENV_FILE" -f "$COMPOSE_FILE" build app setup
docker compose --env-file "$ENV_FILE" -f "$COMPOSE_FILE" --profile tools run --rm setup npm run db:push

if [ "$new_database" -eq 1 ]; then
  docker compose --env-file "$ENV_FILE" -f "$COMPOSE_FILE" --profile tools run --rm setup npm run db:seed
fi

docker compose --env-file "$ENV_FILE" -f "$COMPOSE_FILE" up -d app tunnel
docker compose --env-file "$ENV_FILE" -f "$COMPOSE_FILE" ps
