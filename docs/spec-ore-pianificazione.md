# Specifica ricostruita: area "Ore e pianificazione" (Helaproject)

Ricavata il 2026-11-03 dai chunk frontend in `re/pretty/` (stessa build del modulo Progetti) e dai manuali in `re/manuals/`. Nessuna chiamata di rete.
Pagine: `/hours`, `/hourstab`, `/calendar`, `/todolist`, `/works`, `/worksgant`, `/notification-center`, più la campanella notifiche del layout.

Legenda: **[O]** osservato nel codice frontend · **[I]** inferenza · **[?]** da verificare con dati live.
Citazioni nel formato `chunk:riga` (righe dei file in `re/pretty/`). `$fetch` senza `method` = GET.

## Mappa chunk

| Rotta / componente | Chunk | Titolo pagina (`useHead`) |
|---|---|---|
| `/hours` | `BdGD5PQo.js` | "Imputazione Ore" |
| `/hourstab` | `B1T2WxqN.js` (contiene anche VTabs Vuetify, righe 1-870) | "Imputazione Ore" |
| `/calendar` | `BJJ9NupI.js` | "Calendario Attività" |
| `/todolist` | `CmzDPlax.js` (contiene anche `DialogClosetask` r.114, `DialogViewTask` r.231) | "To Do List" |
| `/works` | `DYcNDEbp.js` | "Carichi di lavoro" |
| `/worksgant` | `DESSO8LS.js` (+ JSGantt `BxhyeuW9.js`) | "Carichi di lavoro" |
| `/notification-center` | `VKyfNH6t.js` | "Centro Notifiche" |
| Layout (menu + campanella) | `CStWh58a.js` | — |
| `DialogInsModRapportino` (inserimento ore) | `z75WVF1S.js` r.67 (stesso chunk del componente calendario VCalendar) | — |
| `ConfirmDeleteDlg` | `ClyIuovc.js` | — |
| Datepicker (`@vuepic/vue-datepicker`) | `B_hTT4u_.js` (solo in `re/site/_nuxt/`, non prettificato) | — |

## Accesso e permessi [O]

Menu laterale (`CStWh58a.js`):

| Voce menu | Rotta | Condizione | Riga |
|---|---|---|---|
| Dipendenti › Carichi di lavoro | `/works` | `role == "S" \|\| role == "A"` | 1879-1883 |
| Dipendenti › Imputazione ore | `/hours` | `role == "S"` | 1921-1925 |
| Calendario/To Do List | `/todolist` | sempre (tutti i ruoli) | 2109 |
| (campanella) Centro notifiche | `/notification-center` | sempre | 1344 |

- `/hourstab`, `/calendar`, `/worksgant` **non sono nel menu**: raggiungibili solo per URL diretto (pagine legacy/sperimentali) **[I]**.
- Nessuna pagina dell'area ha middleware o controlli di ruolo propri: la protezione è solo nel menu. Chi conosce l'URL apre `/hours` o `/works` anche con ruolo U **[O]** (le API potrebbero filtrare lato server **[?]**).
- Controlli in pagina: `/calendar` mostra il bottone "Report mie ore" e la select "Visualizza report come utente" solo se `role == "S"` (`BJJ9NupI.js:213,259`). In `/todolist` i bottoni "+ ore" e "Completa" compaiono solo per task con `user_id == utente corrente` (`CmzDPlax.js:2669,2724`).
- Identità: tutte le chiamate usano il Bearer token; nessun `user_id` nei payload di inserimento ore. L'utente corrente arriva da `useAuth().data` (`id`, `role`).

---

## 1. `/hours` — Imputazione ore (consultazione admin) [O]

### Filtri

| Filtro | Componente | Default | Note |
|---|---|---|---|
| Dipendenti | autocomplete multiplo, clearable | **tutti gli utenti attivi** (`activeuser == 1`) selezionati all'avvio (`BdGD5PQo.js:690-696`) | label "Dipendenti" |
| Periodo | datepicker range, locale it | `[oggi − 1 mese, oggi]` (`:360-367`) | preset sotto |
| Progetto | autocomplete singolo, clearable | null | **filtro client-side** sulla tabella (`H`, `:89-91`); inviato solo a `getStatisticheDipendenti` |
| Bottone "Cerca" | | | rilancia `getuserhours` + `getStatisticheDipendenti` |

Preset periodo (settimana inizia lunedì): Oggi · Ieri · "Settimana precendente" (sic) · Settimana corrente · Mese corrente · Mese precedente · Anno corrente · Anno precedente (`:51-82`).
Nessuna persistenza in localStorage (nessuna occorrenza in tutta l'area) **[O]**.

### API

| Chiamata | Body | Risposta letta |
|---|---|---|
| `GET user/list` | — | `data[]`: `id, firstname, lastname, acronym, activeuser` |
| `GET project/list/` | — | `data[]`: `id, code, name` → etichetta `"[code] - name"` |
| `POST hour/getuserhours` (`:618`) | `{from:"YYYY-MM-DD", to:"YYYY-MM-DD", user_id:[id,…], project_id:0}` | `[{Hour:{id, user_id, startdate, enddate, _ore}, Task:{project_id, shortname}}]` |
| `POST hour/getStatisticheDipendenti` (`:584`) | `{from, to, user_id:[id,…], project_id: id\|null}` | `[{name, lavorativi, lavorati, ferie, straordinari, mancanze}]` (valori in **giorni**) |

Date dei filtri serializzate con `toLocaleDateString("fr-CA")` → `YYYY-MM-DD` locale.
Le statistiche (giorni lavorativi/lavorati/ferie/straordinari/mancanze) sono **calcolate interamente lato server** **[O]**; il frontend le mostra soltanto.

### Tabella

| Colonna | key | Valore | Ordinabile |
|---|---|---|---|
| Nome | user | `firstname lastname` da `Hour.user_id` | sì |
| Progetto | project | `"[code] - name"` da `Task.project_id` | no |
| Task | task_id | `Task.shortname` | sì |
| Data/Ora | date | `Hour.startdate`, formato `dateStyle/timeStyle short` it-IT | sì (numerico) |
| Durata | duration | `enddate − startdate` → `"{h}H {m}m"` (`:632-640`) | sì (stringa) |

50 righe/pagina (10/15/25/50/Tutti), ordinamento multiplo in memoria (non persistito).

### Grafici (ApexCharts)

1. **"Ore giornaliere"** – "Ore registrate dai dipendenti rispetto alle 8 ore giornaliere": linea per ogni dipendente selezionato, asse X = ogni giorno del periodo, Y = Σ `Hour._ore` per giorno (data = `startdate[0..10]`), Y max 12, linea di riferimento a 8 h "8h giornaliere" (`:400-488`).
2. **"Giorni lavorativi vs Giorni lavorati"**: colonne impilate Giorni lavorati / Ferie / Straordinari / Mancanze + linea Giorni lavorativi; X = iniziali del dipendente; tooltip "N gg" (`:186-330`). Chip per dipendente per nasconderlo dal grafico (click su chip o etichetta asse); "Mostra tutti" ripristina.

### Export

Bottone export → `export-imputazione-ore.xlsx`, foglio "Imputazione Ore", colonne Nome, Progetto, Task, Data/Ora (`gg/mm/aaaa, hh:mm:ss`), Durata; larghezze 30/60/60/20/20; intestazione in grassetto; righe filtrate per progetto e nell'ordine della tabella (`:657-683`).

## 2. `/hourstab` [O]

Copia di `/hours` (stesse API, filtri, tabella, export) in cui i grafici sono in due tab: "Ore giornaliere" (`grafico1`) e "Giorni lavorativi vs lavorati" (`grafico2`, due grafici affiancati alti 350) (`B1T2WxqN.js:1525-1640`). Non nel menu. Per il remake: **non replicare** come pagina separata **[I]**.

## 3. `/calendar` — Calendario attività (legacy) [O]

- VCalendar (`z75WVF1S.js`), locale it, settimana lun→dom, vista default **Settimana**; selettore Giorno/Settimana/Mese; bottoni Oggi/‹/›.
- Dati: `POST hour/list` body `{user_id: <utente selezionato o corrente>}` → array piatto `[{id, description, color, startdate, enddate}]` → evento `{name: description, color, start, end, id}` (`BJJ9NupI.js:124-140`).
- Ruolo S: select "Visualizza report come utente" (tutti gli utenti, `user/list`), al cambio ricarica; bottone "Report mie ore" apre `DialogInsModRapportino` vuoto.
- Click su evento → `DialogInsModRapportino` in modifica (`attivita = evento`), per qualsiasi ruolo. Click su "altri" → vista giorno.
- Non nel menu; la funzione è assorbita da `/todolist` **[I]**.

---

## 4. `/todolist` — Calendario / To Do List (tutti gli utenti) [O]

Layout: colonna sinistra (md 6) calendario con switch; colonna destra (md 6) "Assegnazioni" (lista task). Bottone verde in alto "+ ⏱ Report mie ore" (`CmzDPlax.js:2430-2480`) → `DialogInsModRapportino` senza task preimpostato.

### Caricamento iniziale (`:1727-1737`)
`user/list`, `userprofile/list`, `supplier/list`, `activity/list`, `POST project/activelist` (body `{}` → `[{id, code, name, status}]`), `task/getmytasks`, `hour/list`.

### Switch calendario (`:1800-1810`)
Toggle `on-label` "Scadenze Task" / `off-label` "Calendario Attività svolte". Default **off** = Attività svolte. Entrambi i calendari: lun→dom, locale it, vista default **Mese**, selettore Giorno/Settimana/Mese.

#### A) Calendario Attività svolte (rendicontazione)
- Al cambio intervallo visibile: `POST hour/list` body `{project_id: <filtro progetto>|null, start:"YYYY-MM-DD", end:"YYYY-MM-DD"}` (`:1480-1485`). Utente = token.
- Risposta (array piatto): `{id, task_name, color, startdate, enddate, nomeover, _ore, acttype}` **[O]** (`acttype` = tipo attività, `F` = ferie/permessi/malattia).
- Eventi:
  - festività/eventi calendario (da `holiday/isholidaydate/0`): `{name, color, start=end=date}`, id stringa `"FCS…"`, non cliccabili;
  - ore: `{name: task_name, color, start: startdate, end: enddate, id, nomeover, clickable: true}`;
  - per ogni giorno con ore > 0 un evento riepilogo **"TOT ORE: x.xx"** colorato **rosso < 8, verde = 8, arancione > 8** (`:1505-1529`).
- Click su un giorno → nuovo report ore con `seldate` = giorno cliccato. Click su un evento ore → `DialogInsModRapportino` in modifica.
- Grafico sopra il calendario "Ore totali per giorno" (visibile solo in questa modalità) — vedi algoritmo sotto. Se è attivo il filtro progetto il grafico usa una seconda `hour/list` **senza** `project_id` (tutte le ore dell'utente) (`:1530-1559`).

**Algoritmo grafico "Ore totali per giorno"** (`Je`, `:1252-1316`), per ogni giorno del range visibile:

| Serie | Colore | Calcolo |
|---|---|---|
| Ferie/Permessi/Malattia | `#9e9e9e` | B = Σ `_ore` con `acttype == "F"` |
| Ore normali | `#43a047` | weekend o festività → 0; altrimenti `min(oe, max(0, 8 − B))` dove oe = Σ `_ore` non-F |
| Straordinario | `#fb8c00` | weekend o festività → oe; altrimenti `max(0, oe − max(0, 8 − B))` |
| Mancanti | `#ff0000` | se giorno feriale, non festivo, non futuro e `B + oe < 8` → `8 − B − normali`; altrimenti 0 |

Colonne impilate, linea di riferimento "8 ore", legenda con totale ore della serie. Testo "Ore lavorabili nel periodo: N h" = (giorni del range non sab/dom e non presenti nella lista festività) × 8 (`:1179-1188`).
Nota: la lista festività usata qui è quella di `isholidaydate/0` (tutti i tipi, inclusi Meeting/Formazione **[?]**). Date costruite con `toISOString()` (UTC) → possibile sfasamento di un giorno **[O]**.

#### B) Scadenze Task
- Al cambio intervallo: `POST task/getscadenze` body `{start, end, onlymytask: bool}`; in vista mese il range viene esteso di −1/+1 mese (`:1388-1398`). Il filtro progetto **non** è inviato.
- Risposta `[{Task:{id, shortname, color, enddate}, Project:{code, name}}]` → evento il giorno `enddate`, tooltip `"[code] name - shortname"`. Più festività (id `"FCE…"`).
- Click su evento task → `DialogViewTask` (dettaglio, sola lettura).

Festività: `POST holiday/isholidaydate/0` body `{start:"2000-01-01", end:"2075-12-31"}` caricato una sola volta → `[{date:"YYYY-MM-DD", name, color}]` (`:1314-1336`).

### Lista "Assegnazioni" (colonna destra)

| Filtro | Default | Effetto |
|---|---|---|
| Progetto (autocomplete da `project/activelist`, chip con nome stato commerciale) | null | ricarica task e calendario ore |
| "Solo i miei task" (checkbox) | **true** | ricarica task (e scadenze al prossimo cambio range) |

`POST task/getmytasks` body `{project_id: id|null, onlymytask: bool}` (`:1436-1475`) → `[{Task:{id, shortname, description, hours, rhours, project_id, enddate, status}, Project:{code, name, color, client_id}, User:{id, firstname, lastname}}]`.

Ogni voce mostra:
- icona cartella col colore progetto (`mdi-folder-account` se assegnato all'utente corrente, altrimenti `mdi-folder`);
- titolo `"[code] name - shortname"`, descrizione;
- testo `"{hours/8} giornate allocate/{(hours − rhours)/8} residue"` (**`rhours` = ore già rendicontate [I]**);
- "Assegnato: Nome Cognome";
- "Scadenza": rosso se `enddate <= oggi`, arancione se entro 10 giorni, altrimenti normale;
- "Stato" (A Aperto / C Chiuso / P Completato): blu se P, arancione altrimenti; riga con opacità 0.5 se P.

Azioni riga:

| Bottone | Condizione | Azione |
|---|---|---|
| verde "+ ⏱" | `status != "P"` e task mio | `DialogInsModRapportino` con `task_id` preimpostato (e `client_id`, `project_id`) |
| blu "✓" | `status == "A"` e task mio | `DialogClosetask` |
| "i" (Dettagli task) | sempre | `DialogViewTask` |

### `DialogClosetask` — completamento task (`CmzDPlax.js:114-200`)
Titolo "Completamento Task", testo "Confermi il completamento del task?", bottoni Annulla / Completa.
`POST task/completetask` body `{task_id}` → snackbar "Task completato"; errore: `errors.title`.
Regola di business (manuale): il task passa a **P (Completato)** e viene inviata una notifica ai responsabili di progetto (se hanno le notifiche attive), che potranno confermare e **chiudere (C)** il task dal dettaglio progetto. Cambio stato e notifica sono **server-side** **[O/I]**.

### `DialogViewTask` — dettaglio task (sola lettura) (`CmzDPlax.js:231-1110`)
- `GET task/get/<id>` → `{Task:{…}, Project:{name, code, ownersname:[…]}}`; header "Progetto: name [code]", "Responsabile/i di progetto: …".
- Campi readonly: Nome, Descrizione, Esecutivo, Inizio, Fine, Giornate a budget (`hours/8`), Stato, Task Interno; se interno: Profilo Professionale, Assegnatario; se esterno: Fornitore, Fornitore generico, Costo fornitore, Prezzo fornitore al cliente; Tipo (Costi Fissi F / Variabili V / Personale P); Note.
- "Ore eseguite": `GET hour/gettaskhours/<id>` → `[{Hour:{id, startdate, enddate, description}, User:{firstname, lastname}, Activity:{name}|null}]`. Colonne: ID, Utente, N.Ore (decimali), Inzio (sic), Fine (`dd-mm-yyyy hh:mm:ss`), Descrizione, Attività.
- Piede: "Totale ore" e "Totale giorni" = ore/8 "/ budget gg"; colore **rosso** se `budget − usati <= 0`, **arancione** se `<= 1`, **verde** altrimenti.

---

## 5. `DialogInsModRapportino` — inserimento/modifica ore [O]

Props: `dialoginsmod, attivita (evento da modificare | null), client_id, project_id, task_id, seldate ("YYYY-MM-DD")`. Titolo "Report Ore". Dialog persistente, max 90%.

### Caricamento (`z75WVF1S.js:328-337`)

| Chiamata | Risposta letta | Uso |
|---|---|---|
| `GET task/listall` | `[{Task:{id, shortname}, Project:{code, name, client_id, type}, Userprofile:{id, code}}]` | elenco task selezionabili. Per manuale: **solo task assegnati all'utente corrente** (filtro server **[?]**) |
| `GET activity/list` | `[{Activity:{id, name, type, acronimo}}]` | elenco attività; `type` `N` normale / `F` ferie-permessi |
| `GET client/list` | `[{id, name}]` | nome cliente nell'etichetta task |
| `GET hour/get/<id>` (solo modifica) | `data` **piatto**: `{startdate, enddate, task_id, activity_id, name}` | popola una riga |

Etichetta task: `"{Project.code} - {cliente} - {Project.name} - {Task.shortname} [{Userprofile.code}]"` (cliente e profilo omessi se assenti) (`:157-182`). In modifica, se il task non è nell'elenco (non più assegnato) viene aggiunto come `"{name} [NON ASSEGNATO]"` (`:274-278`).

### Righe (multi-riga)

Ogni riga ha: **Data** (datepicker solo data, formato `dd/MM/yyyy`) · **Ora Inizio** · **Ora Fine** (time-picker `HH:mm`, step 15 min) · **Task\*** (obbligatorio, "Campo obbligatorio") · **Nome attività** (facoltativa; le attività di tipo F sono mostrate in verde grassetto).
Solo in inserimento (`attivita == null`): bottoni per riga "Rimuovi Riga" e "Duplica Riga" (copia superficiale `{...riga}`), bottone "+" "Aggiungi Riga". In modifica c'è **una sola riga** e l'icona elimina (ConfirmDeleteDlg "Vuoi veramente eliminare questo report ore?").

Valori di default di una nuova riga (`:94-104`):

| Campo | Default |
|---|---|
| `datei` | `new Date(seldate)` se arriva dal click su un giorno, altrimenti `new Date()` (ora corrente) |
| `datefi` | ora attuale − 1 h, arrotondata al quarto d'ora: `{hours:"HH", minutes:"MM"}` (**stringhe, senza seconds**) |
| `dateff` | ora attuale arrotondata al quarto d'ora: `{hours:"HH", minutes:"MM"}` |
| `task_id` | prop `task_id` o null |
| `activity_id` | null (poi auto-proposta, vedi sotto) |

Arrotondamento (`u()`, `:284-294`): `round(min/15)*15`; se 60 → ora successiva :00.

### Serializzazione e salvataggio

`POST hour/createedit` (`:110-145`) con body:
```json
{
  "id": 0,
  "tasks": [
    {
      "datei": "2026-11-03T09:12:44.123Z",
      "datefi": {"hours": 9, "minutes": 0, "seconds": 0},
      "dateff": {"hours": 13, "minutes": 0, "seconds": 0},
      "task_id": 1234,
      "activity_id": 5
    }
  ]
}
```
- `id` = `attivita.id` in modifica, 0 in inserimento; in modifica `tasks` ha un solo elemento.
- `datei`: oggetto `Date` serializzato da JSON → **ISO 8601 UTC con `Z`** e millisecondi. Contiene anche l'ora (corrente, o 00:00 UTC se viene da `seldate`, o l'ora inizio originale in modifica). Il server deve usare solo la **data** e ricombinarla con `datefi`/`dateff` **[I]**. Rischio: nuovo inserimento tra 00:00 e 01:00/02:00 locali → la data UTC è il giorno prima **[?]**.
- `datefi`/`dateff`: formato del time-picker vue-datepicker `{hours, minutes, seconds:0}` (numeri) dopo una modifica dell'utente; se non toccati restano `{hours:"09", minutes:"15"}` (stringhe, senza `seconds`). In modifica sono numeri senza `seconds` (`getHours()/getMinutes()`). Il backend deve accettare tutte e tre le varianti **[O]**.
- In riga possono comparire anche chiavi extra (`error: ""` in modifica) **[O]**.
- Risposta: solo `success`; messaggio sempre "Modifica report ore completato" (il codice testa `s.idrec`, prop inesistente → ramo "Creazione…" mai eseguito) **[O]**. Errore: `errors.title` del body.
- Il salvataggio crea record `Hour` con `startdate`/`enddate` `YYYY-MM-DD HH:mm:ss` e `user_id` dal token **[I]**, uno per riga **[I]**.

Eliminazione: `GET hour/delete/<id>` (`:204-232`), errore "Errore cancellazione report ore".

### Validazioni client (watch profondo sulle righe, `:338-380`)

| Regola | Messaggio (sotto la riga, rosso) |
|---|---|
| fine < inizio (minuti; **fine == inizio è ammesso**) | "Ora fine minore di ora inizio" |
| attività di tipo F e durata riga > 480 min | "Per questa attività non è possibile registrare più di 8 ore" |
| Σ durate righe con attività F nella stessa data (`datei.toISOString()[0..10]`) > 480 min | "Per questa data il totale delle ore dell'attività supera 8 ore" (su tutte le righe coinvolte) |
| Task obbligatorio | "Campo obbligatorio" |

"Salva" disabilitato se il form non è valido o c'è almeno un errore. **Nessun controllo client** su sovrapposizioni con ore esistenti, su massimo ore giornaliere per attività normali, su weekend/festività o date future: eventuali controlli sono **server-side** e tornano in `errors.title` **[?]**.

### Auto-proposta attività Ferie/Permessi/Malattia (`D()`, `:320-326`)
Alla scelta del task (e all'apertura con `task_id` preimpostato): se `Project.type == "F"` (progetto Ferie/Permessi/Malattia) → `activity_id` = **prima attività con `type == "F"`** nell'ordine di `activity/list`. Non viene azzerata se poi si sceglie un task normale.

---

## 6. `/works` — Carichi di lavoro (ruoli S, A) [O]

### Filtri

| Filtro | Valori | Default |
|---|---|---|
| Dipendenti\* | utenti attivi, multiplo, chips, `return-object` | vuoto |
| Stato progetto\* | `1` "Approvato" · `2` "Approvato/Confermato/In discussione" | 1 |
| Periodo\* | datepicker range; preset Oggi, Mese corrente, Mese precedente, Anno corrente | vuoto |
| Tipologia\* | `1` Giorno · `2` Settimana · `3` Mese | 1 |
| Bottone "Aggiorna" | | |

Senza periodo o dipendenti la pagina non carica nulla. Nessuna persistenza.

### API

| Chiamata | Body | Risposta |
|---|---|---|
| `GET user/list` | — | `id, firstname, lastname, acronym, activeuser` |
| `GET userprofile/list` | — | `id, code` |
| `POST holiday/isholidaydate/1` (`:338-356`) | `{start, end}` (`YYYY-MM-DD`) | `[{date}]` – giorni festivi/chiusure da escludere dalle colonne (solo vista Giorno) |
| `POST task/getcarico` (`:690-720`) | `{stato: 1\|2, user: [{id, name}, …], from, to, periodo: 1\|2\|3}` | `{presenze, holiday, tasks}` (vedi sotto) |
| `POST task/listsimulation` (solo stato 2) (`:612-680`) | `{from, to}` | `[{Task:{id, user_id, userprofile_id, shortname, startdate, enddate, hours, carico}, Project:{code, name}}]` |
| `POST task/changeassegnatario` (`:141-168`) | `{task_id, user_id}` | `success` |

Nota: `user` è un array di **oggetti** `{id, name}` (non di id) **[O]**.

Struttura risposta `getcarico` **[O per l'uso, I per la semantica]**:
- `presenze[userId][chiave] = ore di carico` (numero). Chiave: `"YYYY-MM-DD"` (periodo 1) oppure `"YYYY-MM-DD -> YYYY-MM-DD"` (periodo 2 = settimana lun→dom, periodo 3 = mese 01→ultimo giorno). Le colonne settimana/mese sono **ricavate dalle chiavi restituite**.
- `holiday[userId]["YYYY-MM-DD"] = minuti di assenza` del dipendente in quel giorno (480 = giornata intera: ferie, festività o chiusura) **[I]**. Il frontend lo usa per ridurre la disponibilità; il manuale dice che considera festività, chiusure e ferie/assenze programmate.
- `tasks[userId] = [{Task:{id, shortname, startdate, enddate, hours, carico:{data: ore/giorno}}, Project:{code, name}}]` – task che contribuiscono al calcolo.

### Calcolo della percentuale

Il **carico in ore** (quanto di ogni task cade in ciascun giorno) è calcolato **server-side** (`presenze`, `Task.carico`). Il frontend calcola solo la percentuale:

| Vista | Colonne | Disponibilità (ore) | % mostrata | Riga |
|---|---|---|---|---|
| Giorno | giorni lun–ven del periodo, escluse le date di `isholidaydate/1`; intestazione `"Lun 03/11"` | `(480 − holiday[u][d]) / 60` | `presenze[u][d] / disp × 100`, `toFixed(0)`; se `holiday[u][d] == 480` la cella mostra "-" | `ue` 313, `Je` 323 |
| Settimana | una per chiave `"da -> a"`, titolo `"dd/mm-dd/mm"` | Σ sui giorni lun–ven della chiave di `(480 − (holiday[u][d] ?? 0)) / 60` | `valore / disp × 100` + "%", "-" se disp ≤ 0 | `ae` 324 |
| Mese | una per chiave, titolo "nov 2026" | come settimana, sull'intero mese | idem | `ae` |

Nelle viste Settimana/Mese le festività pubbliche riducono la disponibilità **solo se il server le include in `holiday`** (le date di `isholidaydate/1` non sono usate) **[O]**.

Ipotesi per il remake (da verificare): `Task.carico[giorno] = Task.hours / n. giorni lavorativi (lun–ven, esclusi festività/chiusure e assenze dell'assegnatario) tra startdate ed enddate`, e `presenze[u][d] = Σ carico` dei task del dipendente in progetti con `status = A` (stato 1) o `A, C, I` (stato 2) **[?]**. Nella modale task la colonna "Carico" mostra `Object.values(Task.carico)[0]` cioè il carico del primo giorno, coerente con un carico giornaliero costante **[I]**.

### Colori della cella (soglie)

| % | Colore testo |
|---|---|
| 0 o non numerico | grigio |
| < 50 | verde |
| 50–80 (incluso 80) | arancione |
| > 80 | rosso |

Anomalie da non replicare **[O]**: in vista Giorno (`Se`, r.492) il valore è una stringa e `t === 0` non scatta mai, quindi lo **0% è verde** invece che grigio; in vista Mese (`Qe`, r.470) il colore è calcolato senza il dipendente (disponibilità piena), il testo invece con le sue assenze.

### Modale "Lista dei task che contribuiscono al calcolo"
Click sul nome del dipendente (solo fuori simulazione) → tabella da `tasks[userId]`: Progetto `[code] name`, Nome Task, Data Inizio, Data Fine, Ore (`Task.hours`), Carico (`Object.values(Task.carico)[0]`). Bottone "Chiudi".

### Simulatore (solo stato 2 "Approvato/Confermato/In discussione")

Sezione "Simulatore" con: select **Task** (da `listsimulation`; etichetta `"{code} - {name} - {shortname} [{profilo|No profilo}]  [{acronimo assegnatario|Non assegnato}] || gg/mm/aaaa - gg/mm/aaaa || {hours}h"`) e select **Dipendenti** (nuovo assegnatario, singolo). Bottone **Simula**; durante la simulazione **Cancella** / **Accetta**.

Algoritmo "Simula" (`Be` r.205, `re` r.183), tutto client-side:
1. Salva copia di `presenze` e `holiday`; entra in modalità simulazione (select disabilitate, nomi non cliccabili).
2. Ore totali del task `p = Σ carico[d]` per d da `startdate` a `enddate`.
3. Giorni utili del nuovo assegnatario `w` = giorni nell'intervallo con `holiday[nuovo][d] < 480` (un giorno **assente dalla mappa non conta** → il server deve restituire tutte le date **[I]**).
4. Nuovo carico giornaliero = `p / w` sui giorni utili, 0 sugli altri.
5. Applicazione (solo se il nuovo assegnatario è diverso dall'attuale):
   - task non assegnato (`user_id == 0`): somma il nuovo carico al nuovo assegnatario;
   - altrimenti: sottrae all'attuale il carico (vista Giorno: `carico` originale del giorno; viste Settimana/Mese: il nuovo carico aggregato, approssimazione) e somma al nuovo.
   Aggregazione per settimana (`je`, lun→dom) o mese (`Me`).
6. Le celle mostrano le % ricalcolate (`we`/`ge`).

"Cancella" ripristina la copia. "Accetta" → conferma "Confermi il cambio dell'assegnazione del task?" (Annulla/Accetta) → `POST task/changeassegnatario {task_id, user_id}` → "Task assegnato con successo", ricarica `getcarico` e `listsimulation`. È l'unica scrittura della pagina.

## 7. `/worksgant` — Gantt carichi (legacy) [O]

- Filtri: Dipendente (select inizializzata con il primo utente, attributo `multiple` → valore id o array **[?]**), periodo (default ultimo mese, preset come `/works`), "Cerca".
- `POST task/tempooccupatoutente` body `{user, from, to}` → `[{id, hours, status, note, user_id, startdate, enddate, nomevisualizzato}]` (`DESSO8LS.js:104-140`). Stesso endpoint usato dal dettaglio progetto.
- Gantt JSGantt: una barra per task, colonna extra "Gg a Budget" (`hours/8`), classe colore: C verde, P blu, altri arancione. Calendario festività italiane calcolato client-side (Pasqua, Pasquetta, 25/4, 1/5, 2/6, ecc.) ma non usato per i calcoli **[I]**. Non nel menu.

---

## 8. Notifiche [O]

### Campanella nel layout (`CStWh58a.js:1283-1367`, template ~2490-3065)
- `GET notification/getMyNotifications` all'avvio e poi **polling ogni 90 s** (`setTimeout 9e4`). Esposto via `provide("refreshNotifications")`.
- Risposta: `[{id, title, content (HTML), created, readon, link}]`.
- Indicatore rosso se esistono non lette (`!readon`).
- Menu: prime **10** notifiche, ordinate non lette prima, poi `created` decrescente; titolo troncato a 50 caratteri + "…", grassetto se non letta, data `gg/mm/aaaa hh:mm:ss`.
- Click → modale dettaglio (titolo, data, `content` in HTML `ql-editor`, bottone "VAI" se `link` → `router.push("/" + link)`, "Chiudi"); se non letta `POST notification/markAsRead {id}` e ricarica.
- "Tutte lette": una `POST notification/markAsRead {id}` **per ogni** non letta, poi ricarica.
- "Centro notifiche" → `/notification-center`.

### `/notification-center` (`VKyfNH6t.js`)
Titolo "Notifiche". Desktop: tabella Testo (grassetto se non letta) · Data e ora · Azioni (icona `mdi-read`, **verde se letta, rossa se non letta**, "Visualizza"). Mobile (≤ 960 px): card. Click → stessa modale e stessa `markAsRead`.

### Tipologie (manuale; generate server-side, nessun campo `type` nel frontend **[?]**)
Mancato inserimento delle ore · Assegnazione di un task · Milestone in scadenza (responsabili) · Creazione nuova milestone (responsabili) · Modifica del responsabile · Completamento di un task (responsabili). Generate solo se l'utente ha le notifiche abilitate nel profilo; con "Riceve notifiche via e-mail" anche e-mail; "Invio alert inserimento presenze via e-mail" per i promemoria ore. Alert in dashboard se mancano le presenze del giorno lavorativo precedente.

---

## Tabelle codici (verbatim) [O]

| Tabella | Valori |
|---|---|
| Stato task | `A` Aperto · `C` Chiuso · `P` Completato |
| Tipo task (macrovoce) | `F` Costi Fissi · `V` Costi Variabili · `P` Costi Personale |
| Stato progetto (chip in `/todolist`) | `A` Approvato / Siglato · `C` Confermato – in attesa di contratto · `S` Da sviluppare · `I` In discussione · `L` Lead · `H` On Hold · `R` Rifiutato |
| Tipo progetto | `N` normale · `A` amministrativo · `F` Ferie/Permessi/Malattia |
| Tipo attività (`activity`) | `N` Normale · `F` Ferie/Permessi |
| Tipo evento calendario (`holiday`) | `F` Festività · `C` Chiusura · `M` Meeting · `Z` Formazione |
| Stato progetto per carichi (`stato`) | `1` Approvato · `2` Approvato/Confermato/In discussione |
| Tipologia carichi (`periodo`) | `1` Giorno · `2` Settimana · `3` Mese |
| Viste calendario | `month` Mese · `week` Settimana · `day` Giorno (`4day` definito ma non usato) |
| Colore TOT ORE giorno | < 8 rosso · = 8 verde · > 8 arancione |
| Colore % carico | 0 grigio · < 50 verde · ≤ 80 arancione · > 80 rosso |
| Colore giornate task (DialogViewTask) | residuo ≤ 0 rosso · ≤ 1 arancione · altrimenti verde |
| Colore scadenza task | ≤ oggi rosso · ≤ oggi + 10 gg arancione |
| Gantt | `C` verde (`gtaskgreen`) · `P` blu (`gtaskblue`) · altri arancione |

## Riepilogo endpoint

| Metodo | Path | Body | Risposta (campi letti) | Pagine |
|---|---|---|---|---|
| POST | `hour/createedit` | `{id, tasks:[{datei, datefi, dateff, task_id, activity_id}]}` | success | Rapportino |
| GET | `hour/get/<id>` | — | `{startdate, enddate, task_id, activity_id, name}` | Rapportino |
| GET | `hour/delete/<id>` | — | success | Rapportino |
| POST | `hour/list` | `{project_id, start, end}` (todolist) · `{user_id}` (calendar) | `[{id, startdate, enddate, color, task_name, description, nomeover, _ore, acttype}]` | todolist, calendar |
| POST | `hour/getuserhours` | `{from, to, user_id:[], project_id:0}` | `[{Hour:{id,user_id,startdate,enddate,_ore}, Task:{project_id, shortname}}]` | hours, hourstab |
| POST | `hour/getStatisticheDipendenti` | `{from, to, user_id:[], project_id}` | `[{name, lavorativi, lavorati, ferie, straordinari, mancanze}]` | hours, hourstab |
| GET | `hour/gettaskhours/<taskId>` | — | `[{Hour:{id,startdate,enddate,description}, User:{firstname,lastname}, Activity:{name}}]` | DialogViewTask (anche DialogViewHTask nel dettaglio progetto) |
| GET | `task/listall` | — | `[{Task:{id,shortname}, Project:{code,name,client_id,type}, Userprofile:{id,code}}]` | Rapportino |
| POST | `task/getmytasks` | `{project_id, onlymytask}` | `[{Task:{id,shortname,description,hours,rhours,project_id,enddate,status}, Project:{code,name,color,client_id}, User:{id,firstname,lastname}}]` | todolist |
| POST | `task/getscadenze` | `{start, end, onlymytask}` | `[{Task:{id,shortname,color,enddate}, Project:{code,name}}]` | todolist |
| POST | `task/completetask` | `{task_id}` | success | DialogClosetask |
| GET | `task/get/<id>` | — | `{Task:{…}, Project:{name, code, ownersname[]}}` | DialogViewTask |
| POST | `task/getcarico` | `{stato, user:[{id,name}], from, to, periodo}` | `{presenze, holiday, tasks}` | works |
| POST | `task/listsimulation` | `{from, to}` | `[{Task:{id,user_id,userprofile_id,shortname,startdate,enddate,hours,carico}, Project:{code,name}}]` | works |
| POST | `task/changeassegnatario` | `{task_id, user_id}` | success | works |
| POST | `task/tempooccupatoutente` | `{user, from, to}` | `[{id,hours,status,note,user_id,startdate,enddate,nomevisualizzato}]` | worksgant |
| POST | `holiday/isholidaydate/0` | `{start, end}` | `[{date, name, color}]` | todolist |
| POST | `holiday/isholidaydate/1` | `{start, end}` | `[{date}]` | works |
| POST | `project/activelist` | `{}` | `[{id, code, name, status}]` | todolist |
| GET | `project/list/` | — | `[{id, code, name}]` | hours |
| GET | `activity/list` | — | `[{Activity:{id, name, type, acronimo}}]` | Rapportino, todolist |
| GET | `user/list`, `userprofile/list`, `supplier/list`, `client/list` | — | anagrafiche | varie |
| GET | `notification/getMyNotifications` | — | `[{id, title, content, created, readon, link}]` | layout, notification-center |
| POST | `notification/markAsRead` | `{id}` | success | layout, notification-center |

Errori: body `{errors:{title}}` mostrato in snackbar rossa.

## Dipendenze con altre aree

| Area | Cosa serve a "Ore e pianificazione" |
|---|---|
| Utenti (`user/list`) | `id, firstname, lastname, acronym, activeuser`; flag profilo per notifiche (in-app, e-mail, alert presenze); ruolo S/A/U per il menu |
| Attività (`/activities`, `activity/list`) | `type` N/F decide auto-proposta, limite 8 h e serie "Ferie/Permessi/Malattia" (`acttype`) |
| Calendario aziendale (`/holidays`, `holiday/*`) | eventi F/C/M/Z con data, ricorrenza (giorno-mese), intervallo `day`–`daya`, colore; usati come eventi in calendario, per i giorni lavorabili e per la disponibilità nei carichi. Differenza `/0` vs `/1` probabilmente "tutti i tipi" vs "solo festività+chiusure" **[?]** |
| Task (modulo Progetti) | `hours` (budget = giorni × 8), `startdate`, `enddate`, `user_id`, `userprofile_id`, `status` A/P/C, `rhours` (ore rendicontate), `carico` server-side; completamento P → chiusura C dal dettaglio progetto |
| Progetti | `type` F per auto-proposta attività; `status` (A / A+C+I) per i carichi; `color`, `code`, `name`, `client_id`; responsabili (`Projectuser`) destinatari delle notifiche |
| Profili professionali / costi | `userprofile.code` nelle etichette; il costo reale del task deriva dalle ore imputate (vedi spec Progetti) |
| Dashboard | "Carico medio del team" (stessa logica dei carichi, fuori da questa spec) e alert mancato inserimento presenze |

## Domande aperte da verificare con dati live

1. `hour/createedit`: come il server combina `datei` (ISO UTC) con `datefi`/`dateff`; prende la data UTC o locale? Una riga = un record `Hour`? Accetta ore come stringhe?
2. Controlli server su ore: sovrapposizioni, max giornaliero, weekend/festività, date future, task non assegnato o chiuso (testi `errors.title`).
3. Semantica di `Hour._ore`, `acttype`, `nomeover`, e di `Task.rhours` (ore rendicontate?).
4. `task/getcarico`: formula di `carico` (hours ÷ giorni lavorativi tra start ed end? esclude ferie dell'assegnatario? tronca al periodo?), stati inclusi per `stato` 1/2, contenuto di `holiday` (minuti di assenza? include festività/chiusure? tutte le date presenti con 0?).
5. `hour/getStatisticheDipendenti`: definizione di lavorativi, lavorati, ferie, straordinari, mancanze (in giorni).
6. `holiday/isholidaydate/0` vs `/1`: quali tipi di evento restituiscono.
7. `task/listall` e `task/getmytasks`: filtri server (solo task assegnati? solo aperti? solo progetti aperti/approvati?).
8. `task/completetask`: stato risultante (P) e notifica ai responsabili; `changeassegnatario` genera notifica "Assegnazione task"?
9. Notifiche: esiste un campo tipo? Formato di `link`; chi genera "mancato inserimento ore" e quando.
10. Accesso API per ruolo U a `hour/getuserhours`, `task/getcarico` (la pagina non ha protezione propria).
