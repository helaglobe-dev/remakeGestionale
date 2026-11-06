# Helaproject Remake

Remake autonomo del gestionale progetti di Helaglobe. Riunisce in un'unica applicazione la gestione di progetti, task, ore, carichi di lavoro, anagrafiche, fatture, budget, KPI e dashboard.

> [!IMPORTANT]
> Il progetto è un **prototipo avanzato**. Le funzioni principali sono implementate e testate, ma prima di un utilizzo in produzione sono ancora necessari hardening di sicurezza, migrazioni database versionate, invio email e verifica finale delle formule indicate come ipotesi nella documentazione tecnica.

Il remake usa backend e database propri e non si collega al gestionale reale durante il normale funzionamento.

## Stack

- Nuxt 4 e Vue 3
- Vuetify 4
- API Nitro
- Drizzle ORM con SQLite/libSQL
- Zod per la validazione
- ApexCharts ed ExcelJS
- `node:test` e Playwright per i test

## Avvio rapido

### Requisiti

- Node.js `22.22.3`, `24.15.0` o una versione `>= 26`
- npm

```bash
git clone https://github.com/helaglobe-dev/remakeGestionale.git
cd remakeGestionale
npm install
npm run db:push
npm run db:seed
npm run dev -- --port 3001
```

L'applicazione sarà disponibile su <http://localhost:3001>.

Il database predefinito viene creato in `data/helaproject.db`. I file database, i backup e i dati importati non sono versionati.

### Utenti demo

La password predefinita è `demo1234`:

| Ruolo | Email |
|---|---|
| Superadmin | `admin@demo.local` |
| Project manager | `pm@demo.local` |
| Dipendente | `giulia@demo.local` |
| Utente | `utente@demo.local` |

Per ricreare completamente i dati demo:

```bash
npm run db:reset:confirm
```

Il comando sostituisce tutti i dati nel database configurato. `npm run db:reset` è intenzionalmente bloccato per evitare reset accidentali.

## Configurazione

Copiare `.env.example` in `.env` quando servono valori diversi da quelli locali predefiniti.

| Variabile | Descrizione | Predefinito |
|---|---|---|
| `DATABASE_URL` | URL libSQL/SQLite | `file:./data/helaproject.db` |
| `APP_URL` | URL pubblico usato nei link di conferma e recupero | `http://localhost:3000` |
| `SEED_PASSWORD` | Password assegnata agli utenti demo | `demo1234` |
| `API_BASE` | Base URL dei test API | `http://localhost:3002/api/` |
| `HP_CRED` | File credenziali per gli strumenti di verifica in sola lettura | nessuno |

Non committare `.env`, database, dump o file di credenziali.

## Funzionalità

| Area | Funzioni principali |
|---|---|
| Dashboard | Indicatori economici, macchina commerciale, clienti prioritari, execution, performance e alert ore |
| Progetti | Progetti, responsabili, sponsor, task, valori economici, storici, tranche e fatture |
| Anagrafiche | Clienti, fornitori, utenti, profili, listini, costi orari, attività, macrovoci, colori e target |
| Ore e pianificazione | Calendario, rendicontazione, statistiche, carichi di lavoro e simulazione assegnazioni |
| Finanza | Fatture attive e passive, tranche, banche, scadenziari, KPI e budget |
| Accesso | Ruoli, permessi, sessioni, recupero password e impersonazione amministrativa |

Il menu e le API applicano i permessi definiti per superadmin, amministratori e utenti.

## Struttura del repository

```text
app/                 interfaccia Vue, pagine, componenti e composable
server/api/          endpoint Nitro
server/db/           schema Drizzle, seed e strumenti di importazione
server/utils/        regole di business e autorizzazione
tests/api/           test di integrazione delle API
tests/ui/            smoke test nel browser
docs/                guida e specifiche ricostruite
re/                  materiali e strumenti di verifica del comportamento originale
public/manuali/      manuali disponibili nell'applicazione
```

Le API restituiscono il formato `{ success, data }`. Le regole di business più importanti sono mantenute in `server/utils/`, lasciando gli endpoint il più possibile sottili.

## Comandi utili

| Comando | Descrizione |
|---|---|
| `npm run dev` | Avvia l'ambiente di sviluppo |
| `npm run typecheck` | Controlla i tipi TypeScript |
| `npm run build` | Crea la build di produzione |
| `npm run preview` | Avvia localmente la build |
| `npm run db:push` | Allinea il database allo schema Drizzle |
| `npm run db:seed` | Inserisce i dati demo |
| `npm run test:prepare` | Prepara il database isolato dei test |
| `npm run test:server` | Avvia la build di test sulla porta 3002 |
| `npm test` | Esegue i test API |
| `npm run test:ui` | Esegue gli smoke test UI |

### Test completi

I test usano `data/test.db`, separato dal database di lavoro:

```bash
npm run test:prepare
npm run test:server
```

Con il server di test attivo, in un secondo terminale:

```bash
npm test
npm run test:ui
```

## Importazione dati

L'importazione da un dump MySQL è disponibile per attività controllate di migrazione:

```bash
node server/db/import/parse-dump.mjs /percorso/dump.sql data/import
node server/db/import/import-production.ts data/import --user nome@helaglobe.com
```

L'operazione crea un backup, svuota le tabelle e mantiene gli ID originali. Le password storiche non vengono importate; per l'utente indicato viene generato un link temporaneo di impostazione password.

La cartella `data/import/` è privata e ignorata da Git. Prima di un'importazione leggere il codice e verificare esplicitamente `DATABASE_URL`.

## Documentazione e verifiche

- `docs/guida-gestionale.md`: guida funzionale sintetica.
- `docs/spec-*.md`: specifiche ricostruite. Le annotazioni `[O]`, `[I]` e `[?]` indicano rispettivamente comportamento osservato, ipotesi e punto da verificare.
- `re/tools/verify-*.mjs`: verifiche in sola lettura e con output aggregato.
- `re/manuals/`: manuali usati come riferimento durante la ricostruzione.

Le formule economiche verificate sono documentate nei sorgenti e in `docs/spec-fatture-finanza.md`. Le formule ancora marcate come ipotesi non devono essere considerate definitive.

## Differenze intenzionali rispetto al sistema precedente

- Le scritture usano `POST` e i permessi vengono controllati lato server.
- Sono presenti controlli aggiuntivi su ore sovrapposte, numeri fattura e tranche collegate a fatture.
- Il simulatore dei carichi usa sul server le stesse regole dei carichi effettivi.
- Non vengono replicati alcuni comportamenti legacy o bug noti.
- Email, sincronizzazione Fatture in Cloud, Gantt e alcune entità economiche legacy non sono ancora implementati.

## Stato e sicurezza

Il repository non contiene database di lavoro, dump importati o credenziali. Per segnalazioni di sicurezza seguire [SECURITY.md](SECURITY.md); per proporre modifiche vedere [CONTRIBUTING.md](CONTRIBUTING.md).

## Deploy self-hosted

Per condividere il mockup tramite un server fisico senza esporre porte pubbliche è disponibile una configurazione Docker Compose con Cloudflare Tunnel, Cloudflare Access, health check e backup SQLite. La procedura completa è in [docs/deployment-self-hosted.md](docs/deployment-self-hosted.md).
