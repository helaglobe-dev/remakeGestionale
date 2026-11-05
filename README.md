# Helaproject – remake

Ricostruzione autonoma del gestionale Helaglobe (`projects.helaglobe.com`): backend e database propri,
nessuna connessione al gestionale reale.

Stack: Nuxt 4 (frontend + API in un solo progetto) · Vuetify 4 · Drizzle ORM + SQLite · Zod · ApexCharts.

## Avvio

```bash
npm install
npx drizzle-kit push          # crea/aggiorna lo schema del database (data/helaproject.db)
npm run dev -- --port 3001    # http://localhost:3001
```

### Dati di produzione

Il database di lavoro contiene i dati importati dal dump MySQL del gestionale originale:

```bash
node server/db/import/parse-dump.mjs /percorso/dump.sql data/import        # dump → JSON (cartella privata, non versionata)
node server/db/import/import-production.ts data/import --user nome@helaglobe.com
```

L'importazione fa un backup del database, svuota tutte le tabelle e reimporta mantenendo gli ID originali.
Le password **non** vengono importate (hash SHA1/MD5 dell'originale): con `--user` viene stampato il link per impostare
la password di quell'utente; per gli altri il superadmin usa "Forza la password" in Utenti.
Gli storici di progetto sono importati con la loro istantanea, tolti gli hash password e i codici degli utenti che contengono;
`node server/db/import/import-histories.ts data/import` reimporta solo quelli. Non importati: log, sincronizzazione
Fatture in Cloud, change request, record eliminati di fatture e tranche. `data/` è esclusa da git.

### Dati demo

`npm run db:reset:confirm` sostituisce **tutti** i dati con quelli fittizi (`npm run db:reset` si rifiuta apposta).
Accessi demo (password `demo1234`): `admin@demo.local`, `pm@demo.local`, `giulia@demo.local`, `utente@demo.local`.

## Aree

| Area | Pagine |
|---|---|
| Dashboard | `/` – alert ore mancanti; Economico, Macchina commerciale, Clienti prioritari, Execution, Performance |
| Progetti | `/projects`, `/projects/:id` (task, economia, storico, dettagli, tranche, fatture attive/passive, economics), `/histories` (storici) |
| Anagrafiche | clienti, fornitori, utenti (permessi, impersonazione, password), profili + listini annuali, costi orari dipendenti, attività, macrovoci, colori, calendario eventi, target annui, profilo |
| Ore e pianificazione | `/todolist` (calendario, report ore, assegnazioni), `/hours` (imputazione ore e statistiche), `/works` (carichi + simulatore), notifiche |
| Fatture e finanza | fatture attive/passive, tranche, banche, scadenziari, KPI, budget |

Il menu laterale e l'accesso alle pagine seguono gli stessi ruoli e permessi dell'originale (`app/utils/menu.ts`).

## Struttura

- `server/db/schema.ts` – tabelle (nomi dei campi come l'API originale); `server/db/seed.ts` – dati demo
- `server/api/**` – API con gli stessi percorsi e formato `{ success, data }` dell'originale; le scritture sono POST
- `server/utils/` – regole di business: `projects.ts`, `rates.ts` (listini e costi reali), `hours.ts` (calendario, carichi,
  statistiche), `finance.ts` (fatture e tranche), `analytics.ts` (scadenziari, KPI, budget, dashboard), `crud.ts` (anagrafiche)
- `app/pages`, `app/components` – interfaccia; `CrudPage.vue` per le anagrafiche semplici

## Documentazione e verifiche

- `docs/spec-*.md` – specifiche ricostruite dal frontend originale e dai manuali (`re/manuals/`): [O] osservato, [I] ipotesi, [?] da verificare
- Le formule economiche sono state verificate **in sola lettura** sui dati reali; i riscontri sono nelle intestazioni di
  `server/utils/rates.ts`, `server/utils/hours.ts` e nella sezione §19 di `docs/spec-fatture-finanza.md`
- `re/tools/verify-*.mjs` – script di verifica (solo endpoint di lettura, output aggregato; credenziali bot da file, mai stampate)

## Test

I test usano un database separato con i dati demo (`data/test.db`) e la build dell'app sulla porta 3002,
così non toccano i dati di produzione:

```bash
npm run test:prepare   # schema + dati demo nel database di test
npm run test:server    # build e avvio su http://localhost:3002 (in un altro terminale)
npm test               # test API (node:test)
npm run test:ui        # prova nel browser di tutte le pagine e dei flussi principali
```

`re/tools/verify-import.mjs` confronta i valori calcolati dal remake con quelli dell'originale (sola lettura):
totali dei 522 progetti, KPI e dashboard.

## Differenze volute rispetto all'originale

- Le scritture sono POST (l'originale usava GET per alcune eliminazioni) e i permessi sono controllati anche dal server.
- Controlli in più: sovrapposizione delle ore, numero fattura unico per anno, tranche eliminabile solo senza fattura.
- Bug dell'originale non replicati (es. slittamento UTC della data nelle ore, righe duplicate nelle fatture passive duplicate,
  0% verde nei carichi).
- Il simulatore dei carichi ricalcola lato server con la stessa regola dei carichi reali.
- Come l'originale, prezzo e costo dei task si calcolano sempre dai listini (anno di inizio del task) e i totali di progetto
  sono salvati e aggiornati al salvataggio di task e ore (`server/db/totals.ts`).
- Email (conferma utente, recupero password, notifiche) non ancora inviate: il link viene scritto nel log del server.
- Non replicati: change request, costi passanti di progetto e costi aziendali come entità separate (sostituiti da fatture
  passive su progetto o imputate a una voce di budget), sincronizzazione Fatture in Cloud, Gantt e calendari legacy.
