# Deploy del server fisico con Pangolin Cloud

Questa configurazione rende pubblico Helaproject Remake senza aprire porte in ingresso sul server fisico e senza spostare il DNS da Register.it. Pangolin Cloud gestisce il punto di accesso HTTPS e l'autenticazione; il container Pangolin Site mantiene un collegamento in uscita verso l'applicazione.

## Architettura

```text
Browser del collega
  → HTTPS e autenticazione Pangolin Cloud
  → relay Pangolin
  → tunnel Pangolin Site
  → container pangolin-site sul server fisico
  → container Nuxt/Nitro app:3000
  → SQLite su volume host ./data
```

Non serve un VPS aggiuntivo. Il container applicativo non pubblica porte sull'host e non riceve traffico direttamente da Internet.

## Prerequisiti

- account Pangolin Cloud e organizzazione dedicata al mockup;
- server Linux aggiornato con Docker Engine e Docker Compose;
- utente amministrativo con UID `1000`, oppure adeguamento del campo `user` del servizio `setup`;
- `git` e `sqlite3` per aggiornamenti e backup;
- accesso Internet in uscita dal server;
- accesso alla gestione DNS del dominio su Register.it soltanto se si vuole usare un hostname Helaglobe.

## 1. Creare il Site

Nel pannello `https://app.pangolin.net`:

1. creare o selezionare l'organizzazione del mockup;
2. creare un **Site**, per esempio `server-gestionale`;
3. scegliere Docker/Pangolin CLI come connettore;
4. copiare `PANGOLIN_ENDPOINT`, `SITE_ID` e `SITE_SECRET`;
5. conservare i valori come credenziali e non committarli.

Il progetto include questa struttura Compose:

```yaml
services:
  pangolin-site:
    image: fosrl/pangolin-cli:latest
    container_name: pangolin-site
    restart: unless-stopped
    environment:
      PANGOLIN_ENDPOINT: ${PANGOLIN_ENDPOINT}
      SITE_ID: ${SITE_ID}
      SITE_SECRET: ${SITE_SECRET}
```

`pangolin-site` condivide la rete Docker privata con `app`, quindi il target applicativo è raggiungibile come `http://app:3000`.

## 2. Scegliere l'hostname

### Avvio immediato

Per il primo test si può usare il dominio assegnato da Pangolin Cloud. Non occorre modificare Register.it. Inserire quel nome esatto in `PUBLIC_HOSTNAME`.

### Hostname Helaglobe su Register.it

In Pangolin aggiungere un dominio di tipo **CNAME** usando l'hostname completo, per esempio `gestionale.example.com`. Pangolin mostrerà il target CNAME e gli eventuali record di verifica.

Nel pannello DNS di Register.it creare esattamente i record indicati da Pangolin:

```text
CNAME  gestionale  → target mostrato da Pangolin
```

Se Pangolin richiede un record di verifica aggiuntivo, copiarlo senza modificarlo. Non occorre cambiare nameserver, delegare il dominio o creare record wildcard. Il nome scelto non deve avere già record `A`, `AAAA` o altri `CNAME` incompatibili.

Dopo la propagazione attendere che il dominio risulti **Verified** in Pangolin. Usare quindi lo stesso FQDN in `PUBLIC_HOSTNAME` e nella risorsa pubblica.

## 3. Preparare il server fisico

```bash
git clone https://github.com/helaglobe-dev/remakeGestionale.git
cd remakeGestionale
cp ops/deploy.env.example .env.deploy
chmod 600 .env.deploy
```

Compilare `.env.deploy` con i valori generati dal Site:

```dotenv
PUBLIC_HOSTNAME=gestionale.example.com
PANGOLIN_ENDPOINT=https://app.pangolin.net
SITE_ID=<id-generato-da-pangolin>
SITE_SECRET=<secret-generato-da-pangolin>
SEED_PASSWORD=<password-demo-casuale-di-almeno-16-caratteri>
TZ=Europe/Rome
BACKUP_RETENTION_DAYS=30
```

Non riutilizzare password reali e non caricare dati di produzione nel mockup.

## 4. Primo avvio

```bash
./ops/deploy.sh
```

Lo script valida la configurazione, costruisce l'immagine, applica lo schema, inserisce i dati demo soltanto sul database nuovo e avvia applicazione e Pangolin Site.

Controllare:

```bash
docker compose --env-file .env.deploy ps
docker compose --env-file .env.deploy logs --tail=100 app pangolin-site
```

Lo stato atteso è `app` healthy e `pangolin-site` running. Non aggiungere `ports:` al servizio `app`.

## 5. Creare e proteggere la risorsa

Nel pannello Pangolin creare una risorsa pubblica HTTP/HTTPS:

- nome: `Helaproject Mockup`;
- dominio: lo stesso valore di `PUBLIC_HOSTNAME`;
- Site: `server-gestionale`;
- metodo target: `http`;
- hostname target: `app`;
- porta target: `3000`.

Mantenere l'autenticazione Pangolin attiva. Creare utenti nominativi, raggrupparli in un ruolo dedicato e concedere a quel ruolo soltanto questa risorsa. Il login Helaproject resta una seconda barriera e continua a gestire i ruoli applicativi.

Verificare con due sessioni browser:

1. collega autorizzato → login Pangolin → login Helaproject;
2. utente privo del ruolo → risorsa non accessibile.

## Aggiornamento

```bash
./ops/backup.sh
git pull --ff-only
./ops/deploy.sh
docker compose --env-file .env.deploy pull pangolin-site
docker compose --env-file .env.deploy up -d pangolin-site
```

Se si rigenerano le credenziali del Site, aggiornare `.env.deploy` e ricreare `pangolin-site`. Il vecchio secret va considerato revocato.

## Backup SQLite

Installare `sqlite3` sul server fisico, poi provare manualmente:

```bash
./ops/backup.sh
gzip -t backups/helaproject-*.db.gz
```

Esempio cron giornaliero alle 02:15:

```cron
15 2 * * * cd /percorso/remakeGestionale && ./ops/backup.sh >> /var/log/helaproject-backup.log 2>&1
```

Sincronizzare `backups/` verso uno storage esterno cifrato. Una copia sullo stesso disco non protegge da guasto, furto o ransomware.

### Prova di ripristino

```bash
gunzip -c backups/helaproject-AAAAmmggTHHMMSSZ.db.gz > /tmp/helaproject-restore-test.db
sqlite3 /tmp/helaproject-restore-test.db 'PRAGMA integrity_check;'
```

Il risultato deve essere `ok`. Per sostituire il database effettivo, fermare prima `app` e `pangolin-site`, conservare una copia del file corrente e usare una procedura approvata.

## Controlli operativi e firewall

- mantenere MFA sull'account Pangolin amministrativo;
- monitorare stato del Site, spazio disco, backup e accessi;
- aggiornare sistema, Docker e Pangolin CLI;
- non pubblicare la porta `3000` né altre porte dell'applicazione;
- limitare SSH alle reti o agli amministratori autorizzati;
- consentire l'uscita HTTPS verso `app.pangolin.net` e verso i relay Pangolin;
- non inserire `SITE_SECRET` nei log, nei ticket o nel repository.

## Rollback applicativo

1. conservare il commit precedente al deploy;
2. eseguire un backup prima dell'aggiornamento;
3. tornare al commit precedente senza cancellare `data/`;
4. ricostruire e avviare con `./ops/deploy.sh`.

Il rollback del codice non annulla modifiche allo schema o ai dati: per quelle serve un backup verificato.
