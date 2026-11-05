# Specifica ricostruita: modulo Progetti (Helaproject)

Ricavata il 2026-11-02 dal frontend pubblico `https://projects.helaglobe.com/main/` (build `062420c3-a0b0-4da9-a6f6-e247afd85e21`, ultima modifica 15/10/2026), senza login e senza chiamate API autenticate.
Sorgenti locali: `re/site/_nuxt/` (168 chunk), versioni leggibili in `re/pretty/`. Inventario rotte confermato da REA (evidence `ev_653956261ec9cec37e7383cb0f244d5bbad34b0c3ba1a5d49963e1793b0132b2`).

Legenda: **[O]** osservato nel codice frontend · **[I]** inferenza · **[?]** da verificare con dati live.

## Stack originale [O]

- Frontend: Nuxt 3 SPA (Vue 3 + Vuetify 3), servito sotto `/main/`, PWA "Helaproject".
- Auth: `@sidebase/nuxt-auth` provider `local`: `POST user/login` → token in `/data/user/token`, header `Authorization: Bearer`, cookie `auth.token` (48 h), sessione `GET user/me` (dati in `/data`), logout `GET user/logout`.
- Backend: Apache + API JSON sotto `/api/` (stile CakePHP: wrapper `{Project:{…}, Client:{…}, Projectuser:[…]}`) **[I]**.
- Errori: il body d'errore è `{errors:{title:"…"}}` **[O]**.
- Export Excel con SheetJS **[O]**.

## Sessione utente usata dal modulo [O]

Campi: `id`, `role` (`S` superadmin, `A` admin, altri), `hasprojects` (1 = può creare/duplicare progetti).

Permessi:
- "Crea progetto" e "Duplica": solo se `hasprojects == 1`.
- Modifica ed eliminazione: `role` S o A, oppure l'utente è tra i responsabili (`Projectuser`).
- Codice progetto modificabile in edit solo con `hasprojects == 1`.
- Stati selezionabili: ruolo S tutti; nuovo progetto `statiuser` (no A, che è disabilitato); progetto già A/C → solo A (disabilitato) / C.

## Pagina elenco `/projects` [O]

Dati: `POST project/completelist` con body
```json
{"client": 0, "status": ["I","C"], "openstatus": 0, "responsabile": null, "from": "YYYY-MM-DD"|null, "to": "YYYY-MM-DD"|null}
```
(0/null = nessun filtro). Risposta: array di `{Project, Client, Projectcolor, Projectuser[]}`.
Anagrafiche: `GET user/list` (id, firstname, lastname, activeuser), `GET client/list` (id, name).

Filtri (persistiti in localStorage): cliente, stato commerciale (multiplo), stato apertura (A/C), responsabile, intervallo data creazione con preset (oggi, mese corrente, mese precedente, anno corrente). Bottone "Cerca".

Tabella (Vuetify data-table, 25 righe/pagina, ricerca testuale, colonne scegliibili, ordinamento persistito):
ID, Colore (chip), Codice, Nome (+ badge "Interno", "Ammin." se type A, "Ferie" se type F), Nome a contratto, Descrizione, Cliente, Resp. (nomi di tutti i Projectuser), Creazione, Inizio, Fine, Totale (`newtotaleproposta` se ≠0 altrimenti `_totaleprogetto`, in €), % Succ. (solo se status I), Stato (lettera, rossa se D), Aperto (spunta verde se A), Note, Note Addendum, Azioni.
Default visibili: color, code, name, cliente, created, startdate, enddate, _totaleprogetto, successpercent, statuscoded, openstatus.

Ordinamento codice: `PR<numero><anno4>` ordinato per anno poi numero.
Alert arancione: status I o H e oltre 3 mesi dalla data inizio → "Progetto da attenzionare".
Azioni riga: Info (mostra note), Dettagli (`/tasks?id=<id>`), Duplica (se hasprojects), Elimina (se può modificare; `GET project/delete/<id>` con conferma).
Export XLS (`export-progetti.xlsx`) con 34 colonne, incluse economiche (totaleproposta, incremento, sconto, costi, split…).

## Form progetto (dialog nuovo / modifica / visualizza / duplica) [O]

Caricamento: `GET projectcolor/list` (Projectcolor id/name/color); in modifica `GET project/get/<id>` (**side effect: aggiorna `modified`**); per nuovo o duplica `GET project/getNewProjectName` → `data[0]` = codice proposto.

Campi: code* · name* · contractname · description · referent (testo) · cliente (combobox; testo libero = nuovo cliente, con conferma "Creazione nuovo cliente") · Owners (multi-select utenti attivi) · startdate · enddate · projectcolor_id · status · signaturedate (visibile se status A) · internalproject (switch) · openstatus (switch Aperto) · successpercent (0–99) · type (N normale, A amministrativo, F ferie/permessi/malattia) · splitpercent* + splityear*, splitpercent1* + splityear1* · noteaddendum · note · sponsors (righe: cliente sponsor, data firma contratto, note; aggiungi/duplica/rimuovi riga) · "Duplica anche i task" (solo duplica).

Validazioni: se status I, `splitpercent + splitpercent1 == 100`; sponsor deve essere cliente esistente.
Default split in caricamento: se entrambi 0 → 100% sull'anno di inizio (o anno corrente), anno successivo = +1.
Cambio stato su progetto esistente → dialog "Confermi il cambio stato progetto?".

Salvataggio `POST project/createedit`:
```json
{
  "Project": { "...tutti i campi...", "status": "S", "openstatus": "A|C", "internalproject": 0|1,
               "client_id": <id>|"<nome nuovo cliente>", "newcliente": 0|1,
               "startdate": "YYYY-MM-DD", "enddate": "...", "signaturedate": "...", "cloneid": 0|<id sorgente> },
  "Owners": [<user_id>, ...],
  "clonetask": 0|1,
  "creastorico": 1 nuovo/duplica | 2 cambio stato | 3 cambio responsabili | 0,
  "sponsors": [{"id": 0, "sponsor": <client_id>, "contractdate": "YYYY-MM-DD", "note": "..."}]
}
```
`Owners` è un array di ID utente **[O]** (in lettura `project/get` restituisce `owners` già in quel formato e `sponsors` come `[{Sponsor:{id,contractdate,note}, Client:{id,…}}]`).

## Pagina dettaglio `/tasks?id=<projectId>` [O]

Componenti: tasks, DialogInsModTask, DialogInsMultipleTask, DialogInsModValueProject (valori economici), DialogInsModValueHProject, DialogViewProjectHistory, DialogViewHistory, DialogViewHTask.
API: `project/get/`, `task/completelist`, `task/get/`, `task/createedit`, `task/createmultiple`, `task/delete/`, `task/deleteall`, `task/closeall`, `task/mergefp`, `task/updateordertask`, `task/tempooccupatoutente`, `hour/gettaskhours/`, `projecthistory/list|get|delete`, `project/salvaCampo` (`{id, field, value}` per incremento/sconto/tipi/newtotaleproposta), `changerequest/saveField`, `invoice/tranchelist/`, `userprofile/list`, `supplier/list`, `activity/list`, `holiday/isholidaydate`.

Task: shortname, description, type (macrovoce costi F fissi / V variabili / P personale **[I]**), status (A aperto, P completato, C chiuso), iscr (change request), esecutivo, interno (`internalactivity`), hours (= giorni budget × 8), nhours (ore lavorate), startdate, enddate, userprofile_id (profilo professionale), user_id (assegnatario), supplier_id (fornitore), price, cost, realcost.
Validazioni task interno: ore budget > 0; se assegnatario, profilo obbligatorio.
Salvataggio `POST task/createedit` con `{Task: {..., clone, project_id}}`.

## Economia del progetto

Campi restituiti dal backend: totaleproposta, totalepropostamodified, incrementoproposta + tipoincrementoproposta (V valore / P percentuale), scontoproposta + tiposcontoproposta, noteincremento, notesconto, costoproposta, costopropostareal, costopropostamodified, newtotaleproposta, _totaleprogetto **[O]**.
Formule **verificate sui dati reali** il 2026-11-02 (sola lettura con l'account bot: login, `project/completelist`, `task/completelist`, `user/list`, `userprofile/list`; 522 progetti; solo aggregati, nessun dato salvato in chiaro). Script: `re/tools/verify-live.mjs`, report in `re/live-verify-report.json`.

| Formula | Riscontro |
|---|---|
| `totaleproposta` = Σ `price` dei task non eliminati | 15/15 (campione) |
| `costoproposta` = Σ `cost` dei task non eliminati | 15/15 (campione) |
| `_totaleprogetto` = totaleproposta + incremento − sconto (V = valore, P = % ) | 522/522 |
| `_margineprogetto` = (`newtotaleproposta` se ≠ 0, altrimenti `_totaleprogetto`) − `costoproposta` | 522/522 |
| `_margineprogettoreal` = stesso ricavo − `costopropostareal` | 504/522 |
| `_margineprogettoorig` = totaleproposta − costoproposta | 483/522 |
| `realcost` task = `cost` ÷ `hours` × `nhours` | 37/59 task con ore **[parziale]** |
| `costopropostareal` = Σ `realcost` task | 7/15 **[parziale]** |

Note:
- Base dello sconto in %: nessun progetto reale combina incremento % e sconto %, quindi non è dimostrato se lo sconto % si applica al totale prima o dopo l'incremento. Il remake lo applica dopo **[I]**.
- I campi `totalepropostamodified`, `costopropostamodified`, `_totaleprogettomodified` valgono 0 se non ci sono modifiche (≠ 0 solo su 120 progetti, quasi tutti in stato A): sono legati alle change request, fuori perimetro. Il remake li restituisce a 0.
- Il costo reale per gli altri task usa probabilmente tariffe orarie per persona che l'API non espone (`user/list` non ha campi di costo; `userprofile/list` ha solo `id, profilename, code, status`, senza tariffe). Le tariffe profilo del remake sono una scelta di progetto, non replicano l'originale.

Campi reali non ancora replicati: `Project.technicalname`; Task: `macrovoice_id`, `parent_id`, `changerequest_id`, `checkcode`, `ordine`, `hashours`, `haspinvoice`, `ismodified`, `original*` (valori originali prima delle change request).

## Stati e codifiche [O]

Progetto `status`: A Approvato/Siglato `#157244`, C Confermato in attesa di contratto `#6bc498`, S Da sviluppare `orange`, I In discussione `#9eefea`, L Lead `#dddddd`, H On Hold `#994eb7`, R Rifiutato `red`, D Eliminato `darkred`.
`openstatus`: A Aperto, C Chiuso. `type`: N, A, F. Tipi incremento/sconto: V valore, altrimenti percentuale.

## Fuori dal perimetro "base"

Kanban progetti (`/kanprojects`), storico globale (`/histories`), fatture e tranche, ore, change request, dashboard.
