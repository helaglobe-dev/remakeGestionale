# Deploy self-hosted con Cloudflare Tunnel

Questa configurazione pubblica Helaproject Remake senza aprire porte in ingresso sul server. È pensata per un mockup condiviso con colleghi: Cloudflare Access limita chi può raggiungere l'applicazione e il login Helaproject mantiene i ruoli applicativi.

## Architettura

```text
Browser del collega
  → Cloudflare Access
  → Cloudflare Tunnel
  → container cloudflared
  → container Nuxt/Nitro
  → SQLite su volume host ./data
```

Il container applicativo non pubblica porte sull'host. `cloudflared` raggiunge `http://app:3000` sulla rete Docker privata.

## Prerequisiti del server

- Linux aggiornato, con Docker Engine e Docker Compose.
- Utente amministrativo con UID `1000`, oppure adeguamento del campo `user` del servizio `setup`.
- `git` e `sqlite3` installati.
- Uscita Internet consentita; nessuna porta HTTP/HTTPS in ingresso è necessaria.
- Una zona DNS nello stesso account Cloudflare del Tunnel.
- Alimentazione stabile, spazio disco monitorato e destinazione esterna per una seconda copia dei backup.

## 1. Preparare il server

```bash
git clone https://github.com/helaglobe-dev/remakeGestionale.git
cd remakeGestionale
cp ops/deploy.env.example .env.deploy
chmod 600 .env.deploy
```

Compilare `.env.deploy`:

- `PUBLIC_HOSTNAME`: per esempio `gestionale.example.com`;
- `CLOUDFLARE_TUNNEL_TOKEN`: token del tunnel remoto;
- `SEED_PASSWORD`: password robusta usata solo al primo seed;
- `BACKUP_RETENTION_DAYS`: conservazione locale dei backup.

Non riutilizzare password reali e non caricare dati di produzione nel mockup.

## 2. Creare il Tunnel

Nel pannello Cloudflare:

1. Creare un Tunnel remoto dedicato, per esempio `helaproject-mockup`.
2. Copiare il token mostrato per Docker in `.env.deploy`.
3. Aggiungere una route di tipo **Published application**.
4. Usare `PUBLIC_HOSTNAME` come hostname e `http://app:3000` come Service URL.

Il token consente di eseguire il tunnel: trattarlo come un segreto e ruotarlo se viene esposto.

## 3. Configurare Cloudflare Access

Creare un'applicazione Access self-hosted sullo stesso hostname. La policy deve essere default-deny e consentire esclusivamente:

- indirizzi email nominativi dei colleghi; oppure
- il dominio aziendale verificato tramite il provider di identità.

Non creare una policy `Allow` basata soltanto sul metodo di login **One-time PIN**: consentirebbe qualunque indirizzo email valido. Per un primo pilot è preferibile una lista esplicita di email e una durata sessione breve, per esempio 8 ore.

Verificare con due browser:

1. collega autorizzato → login Cloudflare Access → login Helaproject;
2. indirizzo non autorizzato → blocco Cloudflare prima di raggiungere l'app.

## 4. Primo avvio

```bash
./ops/deploy.sh
```

Lo script:

1. valida la configurazione;
2. costruisce le immagini;
3. applica lo schema Drizzle;
4. inserisce i dati demo solo se il database non esisteva;
5. avvia app e tunnel.

Controlli:

```bash
docker compose --env-file .env.deploy ps
docker compose --env-file .env.deploy logs --tail=100 app tunnel
```

Lo stato atteso è `app` healthy e `tunnel` running. Non aggiungere `ports:` al servizio `app`.

## Aggiornamento

Eseguire un backup, aggiornare il codice e rilanciare il deploy:

```bash
./ops/backup.sh
git pull --ff-only
./ops/deploy.sh
```

Lo script applica `db:push` anche su database esistenti, ma non esegue nuovamente il seed.

## Backup

Installare `sqlite3`, poi provare manualmente:

```bash
./ops/backup.sh
gzip -t backups/helaproject-*.db.gz
```

Esempio cron giornaliero alle 02:15:

```cron
15 2 * * * cd /percorso/remakeGestionale && ./ops/backup.sh >> /var/log/helaproject-backup.log 2>&1
```

La copia locale non protegge dal guasto del disco o dal furto del server. Sincronizzare `backups/` verso uno storage esterno cifrato e verificare periodicamente il ripristino.

### Prova di ripristino

Su una macchina di prova:

```bash
gunzip -c backups/helaproject-AAAAmmggTHHMMSSZ.db.gz > /tmp/helaproject-restore-test.db
sqlite3 /tmp/helaproject-restore-test.db 'PRAGMA integrity_check;'
```

Il risultato deve essere `ok`. Per sostituire il database effettivo, fermare prima `app` e `tunnel`, conservare una copia del file corrente e usare una procedura approvata: il ripristino è intenzionalmente manuale.

## Monitoraggio minimo

- `docker compose ps` e health check `/api/health` dalla rete interna;
- alert Cloudflare sullo stato del Tunnel;
- spazio libero su disco e dimensione di `data/` e `backups/`;
- esito del cron di backup;
- log di autenticazione Cloudflare Access;
- aggiornamenti mensili di sistema, Docker e immagine `cloudflared`.

## Firewall

- Bloccare le connessioni in ingresso non necessarie.
- Non pubblicare la porta `3000`.
- Limitare SSH alle reti amministrative o a un accesso separato protetto.
- Consentire a `cloudflared` le connessioni in uscita richieste da Cloudflare.

## Rollback applicativo

1. Conservare il commit Git precedente al deploy.
2. Eseguire un backup prima dell'aggiornamento.
3. In caso di errore, tornare al commit precedente senza cancellare `data/`.
4. Ricostruire e avviare con `./ops/deploy.sh`.

Il rollback del codice non annulla modifiche allo schema o ai dati: per quelle serve un backup verificato.
