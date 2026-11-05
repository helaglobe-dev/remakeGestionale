# Specifica ricostruita: area "Fatture e finanza" (Helaproject)

Ricavata il 2026-11-03 dai chunk frontend leggibili in `re/pretty/` (build già usata per `spec-modulo-progetti.md`) e dai manuali in `re/manuals/`. Nessuna chiamata di rete, nessun dato live.
Perimetro: fatture attive, fatture passive (con righe progetto/task), tranche di pagamento, costi passanti di progetto, costi aziendali (budget), scadenziari, banche, budget, riepilogo economics di progetto, KPI, dashboard superadmin, target annui (solo come dipendenza).

Legenda: **[O]** osservato nel codice frontend · **[I]** inferenza · **[?]** da verificare con dati live.
Riferimenti nel formato `chunk:riga` (righe del file in `re/pretty/`).

---

## 0. Convenzioni comuni [O]

| Tema | Comportamento |
|---|---|
| Client HTTP | `$fetch(apiBaseurl + path, opts)`. Senza `method` = **GET** (tutti i `get/`, `list`, `delete/`). Con `{method:"POST", body}` per liste filtrate e salvataggi. |
| Risposta | `{success, data}`. Le pagine leggono `response._data.data` (hook `onResponse`) oppure destrutturano `{data}` dal body. Le entità di quest'area arrivano **piatte** (non wrappate), salvo dove indicato (`Macrovoice`, `Task/Supplier/User/Userprofile/Changerequest`, `Passcost`+`[0]`, `Yeartarget`). |
| Errori | body `{errors:{title}}` mostrato in snackbar (`JSON.parse(e.data).errors.title`). |
| Date in invio | normalizzate in `YYYY-MM-DD` (date vuote → `null`). Filtri periodo: `toLocaleDateString("fr-CA")` → `YYYY-MM-DD`. |
| Date in lettura | stringhe `YYYY-MM-DD`; `"0000-00-00"` trattato come vuoto negli export. |
| Numeri | input `v-number-input` con `decimal-separator ","`, `precision 2`; il tasto "." viene convertito in "," (`se()`/`B()`/`oe()`). Valute `Intl.NumberFormat("it-IT",{style:"currency",currency:"EUR"})`. |
| Export | SheetJS (`json_to_sheet`/`aoa_to_sheet`), intestazioni in grassetto, date come celle data `dd/mm/yyyy`, importi `#,##0.00 €` dove indicato. |
| Tabelle | Vuetify data-table, `items-per-page -1` (Tutti), opzioni 10/15/25/50/Tutti, campo "Cerca" testuale client-side. |
| Filtro periodo | date-picker range con preset: Oggi · Mese corrente · Mese precedente · Anno corrente. Default se localStorage vuoto: **[oggi − 1 mese, oggi]**. |
| Permesso principale | campo sessione `hasinvoice` (1 = "Può gestire fatture e tranche di pagamento"). Con `hasinvoice == 0` i dialog sono **sola lettura** (`readonly`) e i bottoni Nuovo/Modifica/Elimina/Salva/Duplica spariscono (resta "Visualizza"). |
| Elimina | componente `ConfirmDeleteDlg` (`ClyIuovc.js`) con testo "Vuoi veramente eliminare la … selezionata?" → GET `…/delete/<id>`. |

### Pagine "di progetto" vs pagine "admin*" [O]

| Aspetto | Pagine di progetto (`activeinvoices`, `passiveinvoices`, `paymenttranches`, `passcosts`) | Pagine admin (`adminactiveinvoices`, `adminpassiveinvoices`, `adminpaymenttranches`, `adminpasscost`) |
|---|---|---|
| Ingresso | dal dettaglio progetto `/tasks?id=<pid>` → `/activeinvoices?id=<pid>` ecc. (`DBcCgyZq.js:18486-18492`). Senza `?id` → redirect `/` (solo activeinvoices, `CJwr7ITa.js:1541`). | menu laterale "Valori Economici" (solo `hasinvoice == 1`, `CStWh58a.js:2140-2339`) |
| Chi vede il bottone in dettaglio progetto | `role S` o `A`, oppure responsabile del progetto (`Projectuser`), oppure `hasinvoice == 1` (`DBcCgyZq.js:19820-19824`) | — |
| Chi può scrivere | solo `hasinvoice == 1` (gli altri vedono in sola lettura) | idem |
| Dati | GET `…list/<pid>` (solo il progetto) | POST `…list` con filtri (cliente/fornitore, progetto, periodo, stato pagamento) persistiti in localStorage |
| Dialog | `DialogInsModActInvoice`, `DialogInsModPayTranche`, `DialogInsModPasscost`; fatture passive usano lo stesso `DialogInsModAdminPasInvoice` | `DialogInsModAdminActInvoice` (con select Progetto), `DialogInsModAdminPasInvoice`, `DialogInsModAdminPayTranche` (con select Progetto), `DialogInsModAdminPasscost` |
| Deep link | `?trancheid=<id>` apre "nuova fattura" precompilata dalla tranche | `?id=<recId>` apre il dialog in modifica; `?trancheid=&projectid=` apre "nuova fattura" da tranche; `?sc=a|fa` al salvataggio/chiusura torna a `/scadenziario` o `/scadenziariofattureattive` |

---

## 1. Menu e accessi [O] (`CStWh58a.js`)

| Voce menu | Rotta | Condizione menu | Controllo in pagina |
|---|---|---|---|
| Valori Economici › Scad. Attivo | `/scadenziario` | `hasinvoice == 1` | nessuno |
| Valori Economici › Scad. Fat. Pagate | `/scadenziariofattureattive` | `hasinvoice == 1` | nessuno |
| Valori Economici › Banche | `/banks` | `hasinvoice == 1` | **solo `role == "S"`**, altrimenti redirect `/` (`BVvSDcUn.js:328`) |
| Valori Economici › Fatture Attive | `/adminactiveinvoices` | `hasinvoice == 1` | scrittura se `hasinvoice == 1` |
| Valori Economici › Fatture Passive | `/adminpassiveinvoices` | `hasinvoice == 1` | idem |
| Valori Economici › Tranche pagamento | `/adminpaymenttranches` | `hasinvoice == 1` | idem |
| Kpi | `/kpi` | `viewkpi == 1` | nessuno |
| Budget | `/budget` | `viewbudget == 1` | nessuno |
| Dashboard | `/` (index) | sempre | sezioni economiche solo se `viewdashboard == 1` (`BoNsS7pF.js:556`) |
| (dal progetto) Riepilogo economics | `/economics?id=<pid>` | bottone in dettaglio progetto (`DBcCgyZq.js:19110`) | tranche visibili a S/A/responsabile/`hasinvoice` |

Rotte esistenti ma **non collegate** a menu né al dettaglio progetto (solo URL diretto) [O]: `/passcosts`, `/adminpasscost`, `/scadenziariopassivo`, `/ficp`. Il remake può trattarle come funzioni secondarie **[I]**.

La protezione è solo lato UI: il backend deve applicare gli stessi controlli **[I]**.

---

## 2. Fatture attive

### 2.1 Codici [O]

| Campo | Valori |
|---|---|
| `payed` | `P` Pagata (chip verde) · `N` Non pagata (chip arancio) |
| `% Iva` (solo UI, non salvato) | `null` Personalizzata · 0 · 4 · 10 · 20 · 22 (default 22) |
| Tipo pagamento (solo UI) | `null` Personalizzata · `"0"` Data fattura · `"30"` · `"30fm"` · `"45"` · `"60"` · `"60fm"` · `"75"` · `"90"` · `"90fm"` · `"120"` (default `"30"`) |
| `anticipobancario` | 1/0 (switch "Anticipo Bancario: SI/NO") |
| Tranche `type` (etichette nelle select) | `A` Anticipo · `I` Intermedio · `S` Saldo |

### 2.2 Calcoli nel dialog [O] (`CJwr7ITa.js:157-312`)

- **IVA**: se `% Iva` ≠ Personalizzata: `vat = taxable * perc / 100` (0 se imponibile vuoto/0). Campo Iva editabile solo con "Personalizzata". Ricalcolo a ogni modifica di imponibile o %.
- In apertura modifica: `perc = vat / taxable * 100`; se coincide con una voce della lista la seleziona, altrimenti "Personalizzata".
- **Scadenza** (`paymentduedate`) da data fattura + tipo pagamento:
  - `"N"` giorni: `invoicedate + N giorni`;
  - `"Nfm"` (fine mese): `mesi = N/30`; data → giorno 1, `setMonth(mese + mesi + 1)`, `setDate(0)` ⇒ **ultimo giorno del mese `invoicedate + mesi`** (es. 30fm dal 10/01 → 28-29/02);
  - Personalizzata: campo data editabile; altrimenti readonly.
  - In apertura il tipo viene **dedotto** provando ogni codice finché `invoicedate + codice == paymentduedate` (`ie()`), altrimenti Personalizzata.
- Selezionando una **Tranche** il tipo pagamento prende `tranche.paymenttype` e ricalcola la scadenza (`pe()`).
- **Anticipo bancario**: se SI mostra `percentualeanticipo` e "Mese-Anno" (`meseannoanticipo`, picker mese Gen…Dic + anno, salvato come `YYYY-MM`, visualizzato `MM-YYYY`). Se NO al salvataggio: `percentualeanticipo = 0`, `meseannoanticipo = null`.

### 2.3 Dialog `DialogInsModActInvoice` (di progetto, `CJwr7ITa.js:82`)

Props: `idrec`, `tranches` (`{label, value, paymenttype}`), `banks` (`{label,value}`), `pname`, `aryclients`.
Titolo: "Nuova fattura attiva del progetto …" / "Modifica fattura attiva del progetto …". Avviso rosso "Attenzione esiste già una fattura per questa tranche" se la tranche ha `hasinvoice == 1`.

| Label | Campo | Tipo | Obblig. | Note |
|---|---|---|---|---|
| Numero Fattura* | `invoicenumber` | testo | sì | |
| Data fattura* | `invoicedate` | data | sì | ricalcola scadenza |
| Imponibile | `taxable` | numero 2 dec | no | ricalcola IVA |
| % Iva* | (UI) | select | — | vedi 2.1 |
| Iva | `vat` | numero | no | readonly se % ≠ Personalizzata |
| Tranche | `payment_tranche_id` | select (tranche del progetto) | no | label "`<Tipo> <dd/mm/yyyy previewdate>[ - <sponsor>]`" |
| Banca | `bank_id` | select `bank/list` | no | |
| Tipo pagamento* | (UI) | select | — | |
| Data previsto pagamento* | `paymentduedate` | data | sì | readonly se tipo ≠ Personalizzata |
| Data effettiva pagamento | `payment_date` | data | no | |
| Pagata* | `payed` | select P/N | sì | default `N` |
| Anticipo Bancario | `anticipobancario` | switch | | |
| Percentuale Anticipo | `percentualeanticipo` | numero | | visibile se anticipo |
| Mese-Anno | `meseannoanticipo` | picker mese | | visibile se anticipo |
| Note | `note` | textarea | | |

Valori iniziali: `{id:0, payed:"N"}`. Caricamento: GET `invoice/activeget/<id>` → oggetto piatto. Con `?trancheid=` (nuova da tranche): GET `invoice/trancheget/<trancheid>` → precompila `project_id`, `payment_tranche_id`, `taxable = tranche.total`, `payed = tranche.payed`, `invoicedate = tranche.previewdate`, `paymentduedate = tranche.paymentdate`, flag `hasinvoice`, poi IVA al 22% (`CJwr7ITa.js:250-284`).

Salvataggio POST `invoice/activecreateedit` (`CJwr7ITa.js:217`):
```json
{"invoice": {"id": 0, "project_id": "<query.id>", "payment_tranche_id": 12, "bank_id": 3,
  "invoicenumber": "…", "invoicedate": "YYYY-MM-DD", "taxable": 1000, "vat": 220,
  "paymentduedate": "YYYY-MM-DD", "payment_date": "YYYY-MM-DD|null", "payed": "P|N",
  "anticipobancario": 0|1, "percentualeanticipo": 0, "meseannoanticipo": "YYYY-MM|null", "note": "…"}}
```
In modifica l'oggetto è quello ricevuto da `activeget` (con eventuali campi extra del server, es. `total`, `cliente`) **[O]**. `total` non viene calcolato dal client: è restituito dal server **[I: taxable + vat]** **[?]**.

### 2.4 Pagina `/activeinvoices?id=<pid>` (`CJwr7ITa.js:1167`)

Caricamento in ordine: `client/list/` (mappa id→name), `project/get/<pid>` (titolo `[code] name`), `bank/list/`, `invoice/tranchelist/<pid>`, `invoice/activelist/<pid>`. Con `?trancheid` apre subito il dialog nuovo.
Nota: `project/get` aggiorna `Project.modified` lato server (vedi spec progetti) **[O]**.

GET `invoice/activelist/<pid>` → array piatto; campi letti: `id, cliente (client_id), invoicenumber, invoicedate, taxable, vat, total, paymentduedate, payed, payment_date, bank_id, anticipobancario, payment_tranche_id, note`.

| Colonna | Campo | Render |
|---|---|---|
| Cliente | `cliente` | nome cliente (tooltip id fattura) |
| Numero F. | `invoicenumber` | |
| Data F. | `invoicedate` | dd/mm/yyyy |
| Totale | `total` | € |
| Data Scadenza | `paymentduedate` | dd/mm/yyyy |
| Pagamento | `payed` | chip "Pagata"/"Non pagata" |
| Banca | `bank_id` | nome banca |
| Anticipo Bancario | `anticipobancario` | spunta se 1 |
| Azioni | | Modifica / Visualizza (se `hasinvoice==0`) / Elimina |

Riga arancione (`row-orange-ai`): `payed == "N"` e `paymentduedate < oggi`.
Bottoni: "Registra Fattura" (se `hasinvoice`), "XLS", "Torna al progetto".
Export `export-fatture-attive-progetto-<[code] name>.xlsx`, foglio "Fatture Attive", colonne: Progetto, Cliente, Tranche (label tranche), Numero F., Data F., Imponibile, Iva, Totale, Data Scadenza, Pagata (Si/No), Data Pagamento, Banca, Anticipo Bancario (Si/No), Note.
Elimina: GET `invoice/activedelete/<id>`.

### 2.5 Dialog `DialogInsModAdminActInvoice` (`DjF9DnSE.js:64`)

Uguale al dialog di progetto, con in più **Progetto*** (`project_id`, select `[code] name`) in testa; cambiando progetto ricarica GET `invoice/tranchelist/<project_id>`. **Tranche** disabilitata finché non c'è un progetto ed è `clearable`; selezionandola fa GET `invoice/trancheget/<id>` e **sovrascrive** project_id, taxable, payed, invoicedate, paymentduedate e ricalcola tipo pagamento e IVA (`DjF9DnSE.js:318-344`).
Default `{id:0, project_id:null, payed:"N", anticipobancario:false}`. Payload identico (`{invoice}`), ma `project_id` dalla select (`DjF9DnSE.js:381`).
Chiusura: rimuove la query e, se `?sc=a` → `/scadenziario`, `?sc=fa` → `/scadenziariofattureattive`.

### 2.6 Pagina `/adminactiveinvoices` (`C-hLfB7I.js:66`)

Filtri (localStorage): Cliente `hgfiltroaicliente` (int|null), Progetto `hgfiltroaiproject` (int|null), Data `hgfiltroaidata` (range). Bottone "Cerca".
POST `invoice/activelist` body `{client: id|0, project: id|0, from: "YYYY-MM-DD", to: "YYYY-MM-DD"}` (`C-hLfB7I.js:320-335`). Il manuale dice "filtra per data scadenza" → periodo applicato a `paymentduedate` **[?]** (potrebbe essere `invoicedate`).
Anagrafiche: `invoice/tranchelist/` (senza id = tutte, per le label export), `project/list/` (label `[code] name`, `paymenttype`), `client/list/`, `bank/list/`.
Colonne: Cliente, Progetto (`project_id`→label), Numero F., Data F., Totale, Data Scadenza, Pagamento, Banca, Anticipo Bancario, Azioni. Stessa riga arancione. Export `export-fatture-attive.xlsx` (stesse colonne del progetto, Progetto valorizzato per riga).
Deep link: `?id=<invoiceId>` apre in modifica; `?trancheid&projectid` apre nuova precompilata.

---

## 3. Fatture passive (con righe di ripartizione)

### 3.1 Codici [O] (`BHW_PPbD.js:79-110`)

| Campo | Valori |
|---|---|
| `documenttype` | `F` Fattura (verde) · `N` Notula (arancio) · `S` Scontrino (grigio) · `X` F24 (blu) · `A` Altro (viola) |
| `payed` | `P` Pagata · `N` Da Pagare. Le liste colorano anche `D` (`row-error-pi`, rosso) **[?]** codice non selezionabile in UI |
| `type` ("Tipo", priorità pagamento) | `null` (vuoto) · `B` Bloccato · `D` Differibile · `U` Urgente |
| `% Iva` per riga (UI) | come fatture attive |

Colori riga: `P` verde (`row-ok-pi`), `D` rosso, `N` grigio (`row-grey-pi`).

### 3.2 Dialog `DialogInsModAdminPasInvoice` (`BHW_PPbD.js:61`) — usato sia dal progetto sia da admin

Props: `idrec`, `clone` (1 = Duplica), `projects`, `suppliers` (`{label,value,iban}`), `banks`, `pname`. Emette `close` e `alertprice`.
Titoli: "Nuova fattura passiva" / "Modifica fattura passiva" / "Duplica fattura passiva".

Testata:

| Label | Campo | Tipo | Obblig. | Note |
|---|---|---|---|---|
| Tipo Documento* | `documenttype` | select | sì | |
| Fornitore* | `supplier_id` | select `supplier/list` | sì | al cambio copia `iban` dal fornitore |
| Numero* | `invoicenumber` | testo | sì | |
| Data* | `invoicedate` | data | sì | (nessun calcolo scadenza) |
| Data scadenza pagamento* | `paymentduedate` | data | sì | |
| Data effettiva pagamento | `payment_date` | data | no | |
| Banca | `bank_id` | select | no | `null`→0 al salvataggio |
| Pagata* | `payed` | select P/N | sì | default `N` |
| Iban | `iban` | testo | no | validazione: nessuno spazio; checksum IBAN mod-97 (`ue()`) |
| Tipo | `type` | select B/D/U | no | |
| Causale | `causale` | testo | no | |
| Note | `note` | textarea | no | |

"Righe documento" (array `rows`, almeno 1 riga vuota in creazione; bottoni Aggiungi Riga / Rimuovi Riga / Duplica Riga):

| Label | Campo riga | Note |
|---|---|---|
| Progetto* | `project_id` | select di tutti i progetti; al cambio carica i task |
| Task | `task_id` | select clearable, disabilitata senza progetto; opzioni da POST `task/completelist` `{project_id, alsodeleted:0, externaltask:1, esecutivi:1}` → `Task.shortname` + ` [Supplier.name]` o ` [Task.genericsupplier]` |
| Imponibile | `taxable` | |
| % Iva* | `ivapercent` | oggetto `{value,label}`; ricalcola |
| Iva | `vat` | readonly se % ≠ Personalizzata |
| Totale | `totale` | readonly = `taxable + vat` |

Riga nuova: `{project_id:null, task_id:null, totale:0, ivapercent:{value:22,label:"22%"}, vat:0, taxable:0}`.
Calcolo riga (`I()`): `vat = taxable * perc/100` (se % definita), `totale = taxable + vat`.

Salvataggio POST `invoice/passivecreateedit` (`BHW_PPbD.js:158-230`):
```json
{"invoice": {"id": 0, "documenttype": "F", "supplier_id": 5, "invoicenumber": "…",
   "invoicedate": "YYYY-MM-DD", "paymentduedate": "YYYY-MM-DD", "payment_date": "YYYY-MM-DD|null",
   "bank_id": 0, "payed": "N", "iban": "IT…", "type": "B|D|U|null", "causale": "…", "note": "…",
   "project_id": null, "task_id": 0,
   "taxable": <Σ rows.taxable>, "vat": <Σ rows.vat>},
 "rows": [{"id": <solo in modifica>, "project_id": 7, "task_id": 120, "taxable": 100, "vat": 22,
           "totale": 122, "ivapercent": {"value": 22, "label": "22%"}}]}
```
- Testata: `taxable` e `vat` = **somma delle righe**; `task_id` vuoto → 0; Duplica → `invoice.id = 0` (le righe mantengono il proprio `id` **[O]**, possibile bug: il remake deve azzerarli **[I]**).
- Risposta: se `data.flagprice == true` la pagina mostra "Attenzione — Il totale delle fatture per il task selezionato è diverso dal totale presente nel task. Se necessario controlla il task" (`CPmns6KN.js:1008-1019`). Regola server **[?]**: probabilmente Σ righe passive del task ≠ costo fornitore del task (`suppliercost`).
- Caricamento modifica: GET `invoice/passiveget/<id>` → testata piatta + `rows[] {id, project_id, task_id, taxable, vat}`; per ogni riga ricarica i task del progetto. `ivapercent` ricaricato come numero (`vat/taxable*100`) e non come oggetto **[O]** (bug: il campo Iva resta editabile).
- Campi legacy di testata: `project_id`, `task_id` (task singolo pre-righe) **[I]**.

### 3.3 Pagina `/passiveinvoices?id=<pid>` (`CPmns6KN.js:59`)

Caricamento: `supplier/list/` (`{label,value,iban}`), `project/get/<pid>`, `task/completelist` (task del progetto), `bank/list/`, GET `invoice/passivelist/<pid>`, `project/list/`.
Risposta lista: array piatto con `id, supplier_id, documenttype, invoicenumber, invoicedate, taxable, vat, total, paymentduedate, payed, payment_date, bank_id, iban, causale, type, note, tasks[] {project_id, task_id, taxable, vat}`.

| Colonna | Campo |
|---|---|
| Fornitore | `supplier_id` → nome |
| Documento | chip colorato |
| Numero F. | `invoicenumber` |
| Data F. | `invoicedate` |
| Totale | `total` € |
| Data Scadenza | `paymentduedate` |
| Pagamento | chip Pagata/Non pagata |
| Tipo | `type` (codice grezzo) |
| Azioni | Modifica · **Duplica** · Visualizza · Elimina |

Export `export-fatture-passive-progetto<[code] name>.xlsx`: Documento, Fornitore, Progetto, Task, Numero F., Data F., Imponibile, Iva, Totale, Data Scadenza, Banca, Iban, Causale, Tipo, Data Pagamento, Pagata, Note. Dopo ogni fattura una **sottoriga per ogni riga `tasks` del progetto corrente** (corsivo grigio, sfondo F2F2F2) con Progetto, Task, Imponibile, Iva, Totale = imponibile+iva. Importi formato `#,##0.00 "€"`.
Elimina: GET `invoice/passivedelete/<id>`.
Il "Totale" mostrato è quello dell'intera fattura, non della quota del progetto **[O]**.

### 3.4 Pagina `/adminpassiveinvoices` (`BEoo9yv2.js:65`)

Filtri (localStorage): Fornitore `hgfiltropisupplier`, Progetto `hgfiltropiproject`, Tipo pagamento `hgfiltropipay` (Tutte `null` / Pagate `P` / Da Pagare `N`), Data `hgfiltropidata`.
Bug [O]: `hgfiltropipay` viene riletto con `parseInt` ⇒ "P"/"N" diventano `NaN` al reload.
POST `invoice/passivelist` body `{supplier: id|0, project: id|0, from, to, filtropay: "P"|"N"|null}` (`BEoo9yv2.js:370-386`). Campo data filtrato: scadenza secondo manuale **[?]**.
Anagrafiche: `project/list/`, GET `task/list/` (mappa `id → shortname`, tutti i task), `supplier/list/`, `bank/list/`.
Colonne: Fornitore, Documento, **Progetti** (`projects`, stringa/valore fornito dal server **[?]**), Numero F., Data F., Totale, Data Scadenza, Pagamento, Tipo, Azioni.
Export `export-fatture-passive.xlsx` (colonne come sopra ma ordine Imponibile, Totale, Iva) con sottorighe per **tutte** le righe `tasks`.
`?id=<id>` apre la fattura in modifica.

---

## 4. Tranche di pagamento (piano di fatturazione attiva)

### 4.1 Codici [O]

| Campo | Valori |
|---|---|
| `type` | `A` Anticipo · `I` Intermedio (export "Intermedia") · `S` Saldo |
| `payed` | `P`/`N` (default `N`; non editabile nel dialog, deriva dalla fattura **[I]**) |
| `paymenttype` | codici tipo pagamento di §2.1, preso da progetto/cliente sponsor |
| `emessa` | 1 se esiste fattura attiva collegata, 0 altrimenti (chip success/warning nel dettaglio progetto) |

### 4.2 Dialog `DialogInsModPayTranche` (progetto, `B54aF9YI.js:71`)

Caricamento: GET `project/gettotalproject/<pid>` → `{totalep, newtotaleproposta}` (riquadro "Totale Progetto:" = `newtotaleproposta` se ≠0 altrimenti `totalep`); GET `project/getsponsors/<pid>` → `[{id, client_id, paymenttype}]` (select Sponsor, label = nome cliente); in modifica GET `invoice/trancheget/<id>`.

| Label | Campo | Tipo | Obbl. | Note |
|---|---|---|---|---|
| Sponsor | `sponsor_id` | select return-object, disabilitata se nessuno sponsor | no | id **record sponsor del progetto** (non client_id). Cambio → tipo pagamento = `sponsor.paymenttype` (o quello del progetto se vuoto) |
| Tipo* | `type` | select A/I/S | sì | default `A` |
| Imponibile | `total` | numero | no | ricalcola IVA |
| % Iva* | UI | select | | default 22 |
| Iva | `vat` | numero | | readonly se % ≠ Personalizzata |
| Data prev. emissione fattura* | `previewdate` | data | sì | ricalcola pagamento |
| Tipo pagamento* | UI | select | | default = `project.paymenttype` (prop `ptype`) |
| Data prev. pagamento fattura* | `paymentdate` | data | sì | calcolata come §2.2 da `previewdate` |
| Milestone | `description` | testo | no | |
| Note | `note` | textarea | no | |

Default `{id:0, type:"A", percent:0, total:0, previewdate:"", paymentdate:"", payed:"N", description:"", note:""}`.
Salvataggio POST `invoice/tranchecreateedit` (`B54aF9YI.js:175-195`):
```json
{"tranche": {"id": 0, "project_id": "<query.id>", "sponsor_id": <id record sponsor>|0, "type": "A|I|S",
  "percent": 0, "total": 1000, "vat": 220, "previewdate": "YYYY-MM-DD", "paymentdate": "YYYY-MM-DD",
  "payed": "N", "description": "…", "note": "…"}}
```
Bottone **"GENERA FATTURA"** (solo in modifica e `hasinvoice`): apre in nuova scheda `/adminactiveinvoices?trancheid=<id>&projectid=<pid>`.

### 4.3 Pagina `/paymenttranches?id=<pid>` (`B54aF9YI.js:859`)

Caricamento: `client/list` (id→name), `project/get/<pid>` (titolo, `paymenttype` passato come `ptype`), GET `invoice/tranchelist/<pid>`.
Campi letti per riga: `id, project_id, client_id, sponsor (client_id dello sponsor), sponsor_id, type, description, previewdate, paymentdate, total, vat, note, payed, invoicedate (data fattura collegata), emessa, paymenttype`.

| Colonna | Campo / render |
|---|---|
| Cliente | `client_id` → nome |
| Sponsor | `sponsor` → nome cliente sponsor |
| Tipo | chip Anticipo/Intermedio/Saldo |
| Milestone | `description` |
| Data Prev. Emissione | `previewdate` |
| Emessa Fattura | `invoicedate` della fattura collegata (vuoto se non emessa) |
| Data Prev. Pagamento | `paymentdate` |
| Imponibile | `total` € |
| Azioni | Modifica / Visualizza / **Genera Fattura** (→ `/activeinvoices?trancheid=<id>&id=<pid>` nuova scheda) / Elimina |

**Riga totale** (tfoot): "Totale" = Σ `total` delle tranche (`B54aF9YI.js:872`).
Export `export-tranches-progetto-<…>.xlsx`, foglio "Tranches": Progetto, Cliente, Sponsor, Tipo, Milestone, Data Prev. Emissione, Data Prev. Pagamento, Emessa Fattura (Si/No da `emessa`), Data Emissione Fattura, Imponibile, IVA, Note. (Bug [O]: la colonna "Data Prev. Emissione " cercata con spazio finale ⇒ non viene convertita in data.)
Elimina: GET `invoice/tranchedelete/<id>`.

### 4.4 Dialog `DialogInsModAdminPayTranche` (`U2TsyINg.js:75`)

Props: `projects` (`{label, value, status, openstatus, client}`), `aryclients` (id→nome), `arysponsorptype` (client_id → `paymenttype` cliente).
- **Progetto*** in testa; in **creazione** la select mostra solo progetti con `status == "A"` e `openstatus == "A"` (`U2TsyINg.js:381-388`).
- Cambio progetto: GET `project/gettotalproject/<pid>` (imposta anche tipo pagamento = `data.paymenttype` del progetto) poi GET `project/getsponsors/<pid>`; lo sponsor viene azzerato in creazione.
- Sponsor: select a valore (`sponsor_id`), cambio → tipo pagamento = `arysponsorptype[client_id dello sponsor]`.
- Payload come §4.2 ma `sponsor_id` già numerico e `project_id` dalla select. In modifica GET `invoice/trancheget/<id>` (letto direttamente come oggetto `data`).
- "GENERA FATTURA" (modifica + `hasinvoice`): naviga a `/adminactiveinvoices?trancheid=<id>&projectid=<pid>&sc=<sc>`. Chiusura con `?sc=a|fa` torna allo scadenziario.

### 4.5 Pagina `/adminpaymenttranches` (`U2TsyINg.js:933`)

Filtri (localStorage): Progetto `hgfiltrotrproject`, Data `hgfiltrotrdata`. POST `invoice/tranchelist` body `{project: id|0, from, to}` (`U2TsyINg.js:1190-1207`); periodo applicato a `previewdate` **[?]** (manuale: "data scadenza").
Anagrafiche: `project/list/` (label `[code] contractname||name`, `status`, `openstatus`, `clientname`), `client/list` (→ nomi e `paymenttype` per cliente).
Colonne: Progetto, Cliente, Sponsor, Tipo, Milestone, Data Prev. Emissione, Emessa Fattura, Data Prev. Pagamento, Imponibile, Azioni (Modifica/Visualizza/Genera Fattura/Elimina). Nessuna riga totale. Export `export-tranches.xlsx` (Note = `description`, bug [O]). `?id=<id>` apre la tranche.

### 4.6 Relazioni tranche ↔ fattura ↔ progetto [O]/[I]

```
Project 1─* Paymenttranche (project_id; sponsor_id → Projectsponsor.id → client_id)
Paymenttranche 1─0..1 Activeinvoice (Activeinvoice.payment_tranche_id)
Activeinvoice *─1 Project (project_id) ; *─0..1 Bank (bank_id)
Passiveinvoice *─1 Supplier ; 1─* Passiveinvoicerow (project_id, task_id, taxable, vat)
Passcost *─1 Project, *─1 Supplier
```
- Il legame è sulla fattura (`payment_tranche_id`); la tranche espone `hasinvoice`/`emessa`/`invoicedate` calcolati dal server **[I]**.
- Più fatture sulla stessa tranche sono possibili ma segnalate ("esiste già una fattura") **[O]**.
- `payed` della tranche viene copiato sulla nuova fattura; probabilmente il server allinea `tranche.payed` al pagamento della fattura **[?]**.
- Cliente fattura (`cliente`) = cliente del progetto o sponsor della tranche **[?]** (la lista lo restituisce come id).

---

## 5. Costi passanti di progetto `/passcosts?id=<pid>` (`BV5Fn-Fy.js`)

Dialog `DialogInsModPasscost` (`:71`): Fornitore* (`supplier_id`), Totale* (`total`), Data previsto pagamento* (`paymentduedate`), Pagata* (`payed` P/N), Data pagamento (`payment_date`), Note. Default `{id:0, type:"A", percent:0, total:0, paymentduedate:"", payment_date:"", payed:"N", description:"", note:""}`.
POST `invoice/passcostcreateedit` body `{passcost: {...campi, project_id: query.id}}` (date sempre formattate: una data vuota diventa `NaN-NaN-NaN` **[O]** bug). GET `invoice/passcostget/<id>`, GET `invoice/passcostdelete/<id>`, GET `invoice/passcostlist/<pid>` (array piatto).
Colonne: ID, Fornitore, Data Prevista, Totale, Pagato, Data Pagamento, Azioni. Export `export-passcosts-progetto-<…>.xlsx`.
Uso: alimenta lo **scadenziario passivo** (wrapper `Passcost`) **[O]** e probabilmente "Costi passanti presunti/effettivi" di budget e KPI **[?]**.

---

## 6. Costi aziendali `/adminpasscost` (`BuvI2D8J.js`) — base del Budget

Codici `type`: `F` Fissi · `V` Variabili · `P` Personale (stessi gruppi del Budget).
Dialog `DialogInsModAdminPasscost` (`:76`): Tipo (`type`, default F), Tag (`tag`, **combobox**: valori esistenti da GET `passcost/listtag` → array di stringhe, o testo nuovo), Data (`payment_date`), Imponibile (`taxable`), % Iva* (UI, default 22), Iva (`vat`), Pagata* (`payed`), Descrizione (`description`), Note.
POST `passcost/createedit` body `{passcost: {...}}`; GET `passcost/get/<id>`; GET `passcost/delete/<id>`.
Lista: POST `passcost/list` body `{from, to, tag: "<tag>|''", type: ""|"F"|"V"|"P"}`; filtri Tipo (Tutti/Fissi/Variabili/Personale), Tag, Data (`hgfiltrocpdata`).
Colonne: Tipo, Descrizione, Tag, Imponibile, Pagato, Data Pagamento, Azioni. Export `export-costi.xlsx` (Tipo esteso Fisso/Variabile/Personale).
Nota: endpoint `passcost/*` diversi da `invoice/passcost*` (§5): sono entità/tabelle diverse **[?]**.

---

## 7. Banche `/banks` (`BVvSDcUn.js`)

Solo `role == "S"`. GET `bank/list` → `[{id, name}]`; colonne Nome, Azioni (Modifica/Elimina).
Dialog: "Nome*". Salvataggio POST `bank/createedit` body **`{id: <idrec>, bankname: "<nome>"}`** (non wrappato; nome campo `bankname` ≠ `name` in lettura). GET `bank/get/<id>` → `data.name`. GET `bank/delete/<id>`.

---

## 8. Scadenziari

### 8.1 Scadenziario attivo `/scadenziario` (`XMabtvJP.js`)

Filtri: Destinatario (cliente), Progetto, Da Anno, A Anno (anni da 2023 a anno corrente+2; default anno corrente). Non persistiti.
Colonne mese: `12/(da−1)`, tutti i mesi da gen(da) a dic(a), `01/(a+1)` (`le()`, `XMabtvJP.js:283-295`).
POST `invoice/scadenziario` body `{client: id|0, project: id|0, anno_da, anno_a}`.
Risposta: righe piatte `{client_id, sponsor_client_id, project_id, anno, mese, totale, colore, note}` (una per destinatario×progetto×mese, aggregata dal server **[I]**).
Pivot client: chiave `client_id_project_id`; se `sponsor_client_id` valorizzato il destinatario diventa lo sponsor e "Sponsor" = SI. Celle `[YYYY-MM] = totale`, `_colore`, `_note`.
Colonne fisse: Destinatario, Sponsor (SI/NO), Codice Progetto (ordinamento per anno = ultime 4 cifre, poi numero), Progetto (`contractname` o `name`, click → `/tasks?id=` nuova scheda).
Totali per mese **in cima e in fondo** = Σ celle della colonna.
Colore importo (`me()`): `#62be62` verde sempre; `#eb7c2a` arancio e `#ea261a` rosso **solo per mesi passati**; altrimenti nero. Manuale: verde = tranche con fattura emessa, nero = non emessa. Regola di `colore` calcolata dal server **[?]**.
Note (triangolino): HTML server con dettaglio tranche e link (a `/adminpaymenttranches?id=…&sc=a`, `/adminactiveinvoices?id=…&sc=a` **[I]**), mostrato in dialog `innerHTML`; in export diventa commento di cella (si estrae la parte dopo "| Tipo:").
Calcolo importo: Σ tranche previste nel mese per destinatario (manuale). Mese di riferimento = `paymentdate` o `previewdate` **[?]**; importo con o senza IVA **[?]**.
Export `scadenziario.xlsx` con riga "Totali", celle verdi colorate.

### 8.2 Scadenziario fatture pagate `/scadenziariofattureattive` (`B2VN-Wul.js`)

Stessi filtri/colonne. POST `invoice/scadenziariofa` body `{client, project, anno_da, anno_a, spostate: 1}`.
Risposta per riga: `{client_id, sponsor_client_id, project_id, anno, mese, totale_fattura, totale_tranche, vat_tranche, stati ("P,N,…"), scaduta (bool), note, tipo_importo}`.
Celle: valore fattura `[k] = totale_fattura`; valore tranche `[k_tranche] = totale_tranche + vat_tranche` (**IVA inclusa**) mostrato sotto in blu corsivo.
Colore (`B2VN-Wul.js:163-174`, `pe()`):

| Condizione | Colore |
|---|---|
| `scaduta == true` | rosso `#f54336` |
| tutti gli `stati` = P | verde `#62be62` |
| tutti = N | nero (ma **rosso se mese passato**) |
| misti con almeno un P | arancio `#eb7c2a` (rosso se mese passato) |

Totali colonna = Σ (`totale_fattura + tranche`). Mese della fattura = data pagamento se pagata, altrimenti previsto pagamento (manuale); `spostate:1` probabilmente sposta le tranche non fatturate al mese corrente/previsto **[?]**.
Export `ScadenziarioFattureAttive.xlsx`.

### 8.3 Scadenziario passivo `/scadenziariopassivo` (`CzFxS28G.js`, non in menu)

Filtri: Fornitore, Progetto, Anno. POST `invoice/scadenziariopassivo` body `{supplier, project, anno}`.
Risposta CakePHP aggregata: `[{Passcost:{supplier_id, project_id}, 0:{anno, gen_totale…dic_totale, dic_prev_totale, gen_next_totale, <mese>_colore, <mese>_note, dic_prev_*, gen_next_*}}]`.
Colonne: Fornitore, Progetto, Anno, Dic Prec., Gen…Dic, Gen Succ.; riga totali = Σ per mese. Export `export-scadenziario-passivo.xlsx`. Sorgente: costi passanti di progetto (§5) **[I]**.

---

## 9. Budget `/budget` (`PrTpu0yy.js`, `viewbudget == 1`)

Filtro Anno (2023…anno corrente+1, default corrente). POST `invoice/budget` body `{year}`.
Risposta (oggetto, non array): `{V: [voce], F: [voce], P: [voce], fatturato_acquisito, totalecostopreventivato, totalecostoeffettivo}` con voce `{nome, costo, costo_effettivo}`.
`costo` = valore a budget, `costo_effettivo` = consuntivo; sorgente presumibile: costi aziendali per tipo/tag (§6) **[?]**; dove sia definito il budget per voce non è visibile nel frontend **[?]**.

Formule client (`PrTpu0yy.js:142-170`):

| Grandezza | Formula |
|---|---|
| MOL voce | `costo − costo_effettivo` |
| % voce | `MOL / costo × 100` (null se costo 0) |
| Totali gruppo (V, P, F) | Σ costo, Σ costo_effettivo, MOL, % come sopra |
| Ricavi presunti `RP` | `fatturato_acquisito` |
| Costi passanti presunti `CPP` | `totalecostopreventivato` |
| Costi passanti effettivi `CPE` | `totalecostoeffettivo` |
| MDC netto | `RP − CPP − 0` (terzo termine sempre 0) |
| MDC % | `MDC / RP × 100` |
| Totale costi variabili (budget) | `CPP + ΣV.costo`; attuale `CPE + ΣV.costo_effettivo`; MOL e % idem |
| Totale costi variabili e fissi | `ΣF.costo + ΣP.costo + ΣV.costo + CPP` |
| Reddito operativo | `RP − Totale costi variabili e fissi` |
| Leva operativa | `MDC netto / Reddito operativo` (0 se reddito 0) |

Sezioni: RICAVI PRESUNTI / COSTI PASSANTI PRESUNTI / EFFETTIVI / MDC NETTO; COSTI VARIABILI DI GESTIONE (+ TOTALE COSTI VARIABILI DI PRODUZIONE / TOTALE COSTI VARIABILI); COSTI DEL PERSONALE; COSTI FISSI; TOTALE COSTI VARIABILI E FISSI; REDDITO OPERATIVO; LEVA OPERATIVA. Colonne gruppi: Voce, Valore Budget, Valore Attuale, MOL, %.
Export `budget_<anno>.xlsx` (aoa, intestazioni colorate `00506E`).

---

## 10. KPI `/kpi` (`DQoeslBu.js`, `viewkpi == 1`) — "Calcoli economici e KPI di Progetto"

Filtri (localStorage): Cliente `hgfiltrokpicliente`, Progetto `hgfiltrokpiprogetto`, Tipo Progetto `hgfiltrokpiopen` (0 Tutti, 1 Aperti — default, 2 Chiusi).
POST `invoice/kpi` body `{client: id|0, project: id|0, aperto: 0|1|2}`. **Tutti i valori sono calcolati dal server** [O].
Campi per riga: `project_id, project_code, client_name, project_name, ricavipresunti, ricavi, costipresunti, costi, primomarg, margprog, margcomm, margpercent`.

| Colonna | Campo | Significato [?] da verificare |
|---|---|---|
| Ricavi presunti | `ricavipresunti` | preventivo (`newtotaleproposta`/`_totaleprogetto`) **[?]** |
| Ricavi effettivi | `ricavi` | Σ imponibile fatture attive **[?]** |
| Costi presunti | `costipresunti` | costo fornitori task / costoproposta **[?]** |
| Costi passanti effettivi | `costi` | Σ fatture passive (righe del progetto) **[?]** |
| Primo Margine | `primomarg` | ricavi − costi passanti **[?]** |
| Margine di Progetto | `margprog` | **[?]** |
| Margine Commerciale | `margcomm` | **[?]** |
| % di Margine | `margpercent` | % (ordinamento default ascendente) |

Totali client = Σ di ogni colonna tranne %. Colore %: `≤ 30.99` rosso `#f76363`, `31–64.99` giallo `#fac314`, altrimenti verde `#72de72` (legenda: >65% in salute; 31–64% da monitorare; <30% in perdita). Export `kpi.xlsx` con stessi colori (soglie 0.31/0.65).

---

## 11. Riepilogo economics di progetto `/economics?id=<pid>` (`CptgHW8x.js`)

API: GET `macrovoice/list` (`[{Macrovoice:{id,name,description}}]`), `client/list`, `project/get/<pid>`, `userprofile/list`, `user/list`, `supplier/list`, POST `task/completelist` `{alsodeleted, project_id, statotask, users, userprofiles, changerequest}`, GET `invoice/tranchelist/<pid>` (riquadro "TRANCHES (n)", solo se S/A/responsabile/`hasinvoice`), POST `task/updatemacrovoice` body `{task: [{id, macrovoice_id}]}` (assegna/disassegna; 0 = "Non assegnato").
Calcoli client (`CptgHW8x.js:1412-1505`, solo task con `iscr == 0`, cioè non change request):
- per task si usano i valori **originali** se diversi: `hours = originalhours`, `cost = originalcost`, `price = originalprice` (se ≠0 e ≠ attuale);
- per macro-voce: `ntask`, `giornate = Σ hours/8`, `costo = Σ cost`, `prezzo = Σ price`, `margine = Σ(price − cost)`; % sul totale = margine voce / margine totale;
- totali: giornate, costo `_`, valore `L`, margine `Z`;
- header: giorni residui = giorni fino a `enddate` (0 se scaduto); avanzamento temporale = giorni trascorsi da `startdate` / durata × 100; margine stimato = `_totaleprogetto − costoproposta`; margine attuale = `_totaleprogetto − costopropostareal`.
- Export "Economics di sintesi": Valore base `totaleproposta`, Sconto `-scontoproposta`, Incremento `incrementoproposta`, Preventivo finale `_totaleprogetto`, Costo stimato `costoproposta`, Margine `_totaleprogetto − Σcost task`, Margine % = margine / `_totaleprogetto` × 100; riga "SCONTI/INCR." e "CORREZIONE IMPORT PREVENTIVO" se `totaleproposta ≠ Σprice`.
Sezioni export selezionabili: header, economics, riepilogo, dettaglio, mapping; valori: sconti, giornate, costo_interno, valore_ricavo, margine, percentuale. Macro-voci temporanee locali (id negativi, non salvate).

---

## 12. Dashboard superadmin `/` (`BoNsS7pF.js`)

Sempre: POST `user/getSuperAdminDashboardData` body `{}` → se `alerttask == 1` banner "ATTENZIONE: verifica l'inserimento delle tue ore nei giorni scorsi".
Sezioni economiche visibili solo con `viewdashboard == 1`. Bottone "Reset filtri" azzera le chiavi localStorage e ricarica.
Anagrafiche: `user/list` (utenti `activeuser==1 && usedindashboard==1`), `project/list` (nome, `openstatus`, `internalproject`).

### 12.1 Endpoint e campi [O]

| Sezione | Endpoint (POST) | Body | Campi risposta |
|---|---|---|---|
| Economico | `user/getSuperAdminDashboardDataEconomico` | `{from, to, onlyopenEconomico: "A"(Tutti)…, internalFilterEconomico: "ALL"|1|0}` | `fatturato_acquisito, fatturato_acquisito_corrente, pipeline, ndiscussione, fatturato_emesso, fatturato_emesso_pagato, winrate, targetannuo` |
| Macchina commerciale | `user/getSuperAdminDashboardDataMacchina` | `{frommacchina, tomacchina, onlyopenMacchina: "O", internalFilterMacchina: 0}` | `ninviate, tempomedioallaproposta, tempomedioaltro, targetannuo` |
| Clienti prioritari | `user/getSuperAdminDashboardDataClienti` | `{onlyopenClienti: "O", internalFilterClienti: 0}` | `arycliente{…: {client_name, valore_portafoglio, A_o_C, in_discussione, attivi, coda}}` |
| Execution progetti | `user/getSuperAdminDashboardDataProgetti` | `{fromprogetti, toprogetti, users: [{id,name}], onlyopenProgetti: "O", internalFilterProgetti: 0}` | `alerttask, percentule_avanzamento, targetannuo, caricomedio, caricoutenti[{id, usate, disponibili}], taskcompletati, tasktotali` |
| Performance economica | `user/getSuperAdminDashboardDataPerformance` | `{from, to, onlyopen: "O"|"C"|"A", internalFilter: "ALL"|1|0}` | `soglia, targetannuo, countprog, tot, aggregatopercentuale, aggregatovalore, arypercentuale{pid: %}, arymargini{pid: €}, elencoprogetti{pid: nome}` |

Filtri e persistenza: periodo Economico/Performance default **anno corrente 01/01–31/12, non persistito**; Macchina `hgdashfiltrodatamacchina` e Progetti `hgdashfiltrodataprogetti` default 01/01–oggi; utenti `hgdashfiltroutentiprogetti` (JSON). Select Aperti/Chiusi/Tutti (`O`/`C`/`A`) e Esterni/Interni/Tutti (`0`/`1`/`ALL`). Nota [O]: l'Economico manda `onlyopenEconomico` default `"A"` mentre gli altri default `"O"`; diversi filtri sono dichiarati ma non hanno controlli UI (valori fissi) **[?]**.

### 12.2 KPI e formule

| KPI | Calcolo | Dove |
|---|---|---|
| Fatturato acquisito | `fatturato_acquisito`: Σ imponibili tranche con scadenza nel periodo, progetti A o C | server |
| Pipeline ponderata attiva (anno corrente) | `pipeline`: Σ preventivi (con split anno) progetti I o C × `successpercent`; + `ndiscussione` "proposte in discussione" | server |
| Win Rate | `winrate`: (A+C)/(A+C+R)×100 con data cambio stato nel periodo | server |
| Fatturato emesso / pagato | `fatturato_emesso`, `fatturato_emesso_pagato`: Σ imponibile fatture con data fattura nel periodo (tutte / pagate) | server |
| Fatturato emesso pagato/emesso | `pagato / emesso × 100` (mostrato solo se emesso > 0) | **client** (`BoNsS7pF.js:1560`) |
| Fatturato acquisito anno corrente | `fatturato_acquisito_corrente` / `targetannuo`, barra `T×100/C`: <60 rosso, <90 arancio, altrimenti verde | client su dati server (`:1749-1769`) |
| Gap residuo puro | `targetannuo − fatturato_acquisito_corrente` | **client** (`:1817`) |
| Forecast | `fatturato_acquisito_corrente + pipeline` | **client** (`:1963`) |
| Gap coperto (incl. pipeline) | `targetannuo − (fatturato_acquisito_corrente + pipeline)` | **client** (`:2121`) |
| Proposte inviate nel periodo | `ninviate` (passaggi a I nel periodo) | server |
| Tempo medio alla proposta | `tempomedioallaproposta` gg lavorativi; ≤15 verde, >15 rosso | server + soglie client |
| Ciclo commerciale medio | `tempomedioaltro` gg lavorativi; ≤60 verde, 60–70 arancio, >70 rosso | server + soglie client |
| Portafoglio attivo per cliente | per cliente prioritario: `valore_portafoglio` (preventivi A/C), attivi `A_o_C`, in coda `in_discussione` | server |
| Carico medio del team | `caricomedio` %: <60 verde, <90 arancio, altrimenti rosso; dettaglio per utente `usate/disponibili×100` stesse soglie | server + client |
| Avanzamento fisico | `taskcompletati / tasktotali × 100` | **client** (`:3928`) |
| Avanzamento temporale | `percentule_avanzamento` | server |
| Margine portafoglio rolling | `aggregatovalore` (Σ margini attuali) e `aggregatopercentuale` (% su preventivato); barra <60 verde, <90 arancio, altrimenti rosso [O, soglie apparentemente invertite] | server |
| Dettaglio progetti | per pid: `arymargini[pid]` € e `arypercentuale[pid]` %; filtrati client per `openstatus` (O→A, C→C) e `internalproject`, ricerca per nome | client su dati server |
| Progetti sotto soglia margine | `countprog` progetti (A/C aperti) con % margine < `soglia` (da Target annui); elenco `elencoprogetti` con link `/tasks?id=` | server |
| Valore aggregato sotto soglia | `tot` | server |

Bug [O]: barra avanzamento fisico usa `x<60 ? verde : x ? arancio : rosso` (rosso solo se 0).

---

## 13. Target annui (dipendenza della dashboard) (`DbUPreoC.js`)

GET `yeartarget/list` → `[{Yeartarget:{id, year, value, soglia}}]`; GET `yeartarget/get/<id>`; GET `yeartarget/delete/<id>`; POST `yeartarget/createedit` body `{Yeartarget: {id, year, value, soglia}}`. `value` → `targetannuo`, `soglia` → soglia margine %.

---

## 14. Pagina `/ficp` (non in menu) (`BaK7Rp23.js`)

"Sincronizzazione fatture passive con Fatture in Cloud": POST `ficpassive/get_fic_fatture_passive` body `{from, to}` (filtro `hgfiltroaidata`, condiviso con fatture attive). La tabella riusa le colonne delle fatture attive (copia incompleta) **[O]**. Integrazione esterna fuori perimetro del remake **[I]**.

---

## 15. Riepilogo endpoint

| Metodo | Path | Body / parametri | Risposta letta | Pagine |
|---|---|---|---|---|
| GET | `invoice/activelist/<pid>` | — | `[{id, cliente, invoicenumber, invoicedate, taxable, vat, total, paymentduedate, payed, payment_date, bank_id, anticipobancario, payment_tranche_id, note}]` | activeinvoices |
| POST | `invoice/activelist` | `{client, project, from, to}` | idem + `project_id` | adminactiveinvoices |
| GET | `invoice/activeget/<id>` | — | fattura piatta | dialog attive |
| POST | `invoice/activecreateedit` | `{invoice:{…}}` | — | dialog attive |
| GET | `invoice/activedelete/<id>` | — | — | attive, ficp |
| GET | `invoice/passivelist/<pid>` | — | `[{…testata, tasks[]}]` | passiveinvoices |
| POST | `invoice/passivelist` | `{supplier, project, from, to, filtropay}` | idem + `projects` | adminpassiveinvoices |
| GET | `invoice/passiveget/<id>` | — | testata + `rows[]` | dialog passive |
| POST | `invoice/passivecreateedit` | `{invoice:{…}, rows:[…]}` | `{data:{flagprice}}` | dialog passive |
| GET | `invoice/passivedelete/<id>` | — | — | passive |
| GET | `invoice/tranchelist/<pid>` · `invoice/tranchelist/` | — | `[{id, project_id, client_id, sponsor, sponsor_id, type, description, previewdate, paymentdate, total, vat, note, payed, paymenttype, invoicedate, emessa}]` | tranche, attive, economics, dettaglio progetto |
| POST | `invoice/tranchelist` | `{project, from, to}` | idem | adminpaymenttranches |
| GET | `invoice/trancheget/<id>` | — | tranche + `hasinvoice` | dialog tranche e attive |
| POST | `invoice/tranchecreateedit` | `{tranche:{…}}` | — | dialog tranche |
| GET | `invoice/tranchedelete/<id>` | — | — | tranche |
| GET | `invoice/passcostlist/<pid>` · `passcostget/<id>` · `passcostdelete/<id>` | — | costi passanti progetto | passcosts |
| POST | `invoice/passcostcreateedit` | `{passcost:{…}}` | — | passcosts |
| POST | `passcost/list` | `{from, to, tag, type}` | `[{id, type, tag, description, taxable, vat, payed, payment_date, note}]` | adminpasscost |
| GET | `passcost/get/<id>` · `passcost/delete/<id>` · `passcost/listtag` | — | oggetto / — / `["tag",…]` | adminpasscost |
| POST | `passcost/createedit` | `{passcost:{…}}` | — | adminpasscost |
| POST | `invoice/scadenziario` | `{client, project, anno_da, anno_a}` | righe mese | scadenziario |
| POST | `invoice/scadenziariofa` | `{client, project, anno_da, anno_a, spostate:1}` | righe mese | scadenziariofattureattive |
| POST | `invoice/scadenziariopassivo` | `{supplier, project, anno}` | `[{Passcost, 0:{…}}]` | scadenziariopassivo |
| POST | `invoice/budget` | `{year}` | `{V,F,P,fatturato_acquisito,totalecostopreventivato,totalecostoeffettivo}` | budget |
| POST | `invoice/kpi` | `{client, project, aperto}` | righe KPI | kpi |
| GET | `bank/list` · `bank/get/<id>` · `bank/delete/<id>` | — | `[{id,name}]` | banche e select |
| POST | `bank/createedit` | `{id, bankname}` | — | banks |
| GET | `project/gettotalproject/<pid>` | — | `{totalep, newtotaleproposta, paymenttype}` | dialog tranche |
| GET | `project/getsponsors/<pid>` | — | `[{id, client_id, paymenttype}]` | dialog tranche |
| GET | `project/list/` · `client/list/` · `supplier/list/` · `task/list/` · `user/list` · `userprofile/list` · `macrovoice/list` | — | anagrafiche (client: `id,name,paymenttype`; supplier: `id,name,iban,codsup`; project: `id,code,name,contractname,status,openstatus,clientname,paymenttype,internalproject`) | varie |
| POST | `task/completelist` | `{project_id, alsodeleted, externaltask, esecutivi}` o filtri economics | `[{Task, Supplier, User, Userprofile, Changerequest}]` | passive, economics |
| POST | `task/updatemacrovoice` | `{task:[{id, macrovoice_id}]}` | — | economics |
| POST | `user/getSuperAdminDashboardData[Economico|Macchina|Clienti|Progetti|Performance]` | vedi §12 | vedi §12 | dashboard |
| GET/POST | `yeartarget/list|get|delete|createedit` | `{Yeartarget}` | `{Yeartarget}` | targets |
| POST | `ficpassive/get_fic_fatture_passive` | `{from, to}` | lista fatture | ficp |

---

## 16. Entità proposte per il remake

| Entità | Campi (osservati) | Note |
|---|---|---|
| **ActiveInvoice** | id, project_id, payment_tranche_id (nullable), client_id (esposto come `cliente`), bank_id, invoicenumber, invoicedate, taxable, vat, total (derivato), paymentduedate, payment_date, payed (P/N), anticipobancario (0/1), percentualeanticipo, meseannoanticipo (YYYY-MM), note, created/modified **[I]** | `client_id` derivato da progetto o sponsor della tranche **[?]** |
| **PassiveInvoice** | id, documenttype (F/N/S/X/A), supplier_id, invoicenumber, invoicedate, paymentduedate, payment_date, bank_id, payed (P/N[/D?]), iban, type (B/D/U/null), causale, note, taxable (=Σ righe), vat (=Σ righe), total, project_id/task_id legacy | |
| **PassiveInvoiceRow** | id, passiveinvoice_id **[I]**, project_id, task_id (0 = nessuno), taxable, vat | esposta come `rows` (get) e `tasks` (list) |
| **PaymentTranche** | id, project_id, sponsor_id (→ ProjectSponsor.id, 0 = cliente progetto), type (A/I/S), percent (sempre 0), total (imponibile), vat, previewdate, paymentdate, payed, description (Milestone), note; derivati: client_id, sponsor (client_id), paymenttype, hasinvoice/emessa, invoicedate | |
| **ProjectPasscost** (`invoice/passcost*`) | id, project_id, supplier_id, total, paymentduedate, payment_date, payed, note, type/percent/description (inutilizzati) | |
| **CompanyCost** (`passcost/*`) | id, type (F/V/P), tag, description, payment_date, taxable, vat, payed, note | base Budget **[?]** |
| **Bank** | id, name (in scrittura `bankname`) | |
| **YearTarget** | id, year, value, soglia | dashboard |
| **Macrovoice** | id, name, description; Task.macrovoice_id | economics |
| Riferimenti esterni | Client.paymenttype, Project.paymenttype, Supplier.iban, ProjectSponsor{id, client_id, contractdate, note} | `paymenttype` usa i codici tipo pagamento §2.1 |

---

## 17. Dipendenze con altre aree

| Area | Uso |
|---|---|
| Progetti | `project/get` (titolo, paymenttype, valori economici), `project/list`, `gettotalproject`, `getsponsors`; stati A/C/I/R per KPI dashboard; `successpercent`, split anno per pipeline; `openstatus`, `internalproject` per filtri |
| Clienti | `client/list` (nome, `paymenttype`, flag prioritario per dashboard) |
| Fornitori | `supplier/list` (nome, `iban`, `codsup`) |
| Task | righe fatture passive (task esterni esecutivi), alert `flagprice`, economics (price/cost/hours originali, macro-voci), avanzamento fisico |
| Utenti/sessione | `role`, `hasinvoice`, `viewkpi`, `viewbudget`, `viewdashboard`, `usedindashboard`, `activeuser` |
| Ore/calendario | carico team, alert ore mancanti, giorni lavorativi (festività/chiusure) nei tempi commerciali |
| Storico progetto | date di cambio stato per win rate, tempi medi, proposte inviate **[I]** |
| Amministrazione | Target annui (target, soglia margine), Macrovoci |

---

## 18. Domande aperte da verificare su dati live [?]

1. `total` delle fatture = `taxable + vat`? Il cliente (`cliente`) della fattura attiva è quello del progetto o dello sponsor della tranche?
2. Su quale data si applica `from/to` di `activelist`, `passivelist`, `tranchelist` (scadenza, data fattura, previewdate)?
3. `tranche.payed` è aggiornato dal server quando la fattura collegata è pagata? Come sono derivati `emessa`/`hasinvoice`?
4. `flagprice`: confronto esatto (Σ righe passive per task vs `suppliercost`/`supplierprice` del task?).
5. Payed `D` nelle fatture passive: esiste nei dati?
6. Scadenziario attivo: mese da `paymentdate` o `previewdate`; importo con/senza IVA; regola di `colore` arancio/rosso.
7. Scadenziario fatture pagate: significato di `spostate`, `tipo_importo`, `scaduta`; `totale_fattura` con IVA?
8. Budget: origine di `costo` (budget per voce) e `costo_effettivo`; `totalecostopreventivato/effettivo` = Σ costi passanti di progetto o Σ fatture passive?
9. KPI: formule di `ricavipresunti`, `ricavi`, `costipresunti`, `costi`, `primomarg`, `margprog`, `margcomm`, `margpercent`.
10. Dashboard: confermare le formule server (fatturato acquisito su `paymentdate` delle tranche, pipeline con split, win rate, tempi in giorni lavorativi, carico medio, avanzamento temporale, margini rolling e soglia).
11. `invoice/passcost*` (progetto) vs `passcost/*` (aziendali): tabelle distinte?

---

## 19. Verifiche sui dati reali (sola lettura, 2026-11-05) — risposte al §18

Script: `re/tools/verify-finance*.mjs` (solo letture, output aggregato). Dati: 176 fatture attive, 929 passive, 254 tranche, 198 righe KPI.

| # | Domanda | Risultato |
|---|---|---|
| 1 | `total` | = `taxable + vat` (attive 176/176, passive 929/929) |
| 1 | cliente fattura attiva | cliente dello **sponsor della tranche** se presente (51), altrimenti cliente del progetto (127) |
| 2 | filtro periodo elenchi | attive e passive → **`paymentduedate`**; tranche → **`previewdate`** |
| 3 | tranche ↔ fattura | ogni fattura ha la tranche (176/176); `emessa` ⇔ esiste fattura (253/254); `tranche.payed` e `invoicedate` = quelli della fattura (176/176) |
| 5 | passive | `payed` solo P/N (nessun D); `type` sempre null; documenti F/N/A; testata `taxable` = Σ righe (929/929) |
| 6 | scadenziario attivo | mese = **`previewdate`**, importo **senza IVA** (137/153); colori solo verde/nero |
| 8 | budget | voci con `id, nome, costo, costo_effettivo, passive_invoices`; 35 voci nel 2026, 0 nel 2025, nessuna fattura collegata: consuntivo per voce non verificabile **[?]** |
| 9 | KPI | `ricavi` = Σ imponibile fatture attive; `costi` = Σ righe passive del progetto; `primomarg` = ricavi − costi; `margprog` = primomarg − `internalcost`; `margcomm` = primomarg − `internalprice`; `margpercent` = margprog / ricavi × 100 (tutti 198/198) |
| 9 | KPI presunti | `ricavipresunti` = `_totaleprogettomodified` se ≠ 0 altrimenti `_totaleprogetto` (198/198, ignora `newtotaleproposta`); `costipresunti` = Σ `cost` task esterni (40/40); `internalcost` = Σ costo reale task interni (40/40) |
| 9 | `internalprice` | non ricostruito (ore × prezzo profilo, prezzo/ore × ore lavorate: 1/12) **[?]** — nel remake: ore registrate × prezzo orario del profilo nell'anno del codice progetto **[I]** |
| 10 | dashboard | `fatturato_emesso` = Σ imponibile fatture con data fattura nel periodo; `fatturato_emesso_pagato` idem solo pagate; `fatturato_acquisito` = Σ imponibile tranche dei progetti A/C con **`previewdate`** nel periodo (verificati) |
