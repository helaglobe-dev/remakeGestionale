# Specifica ricostruita: Anagrafiche e Amministrazione (Helaproject)

Ricavata il 2026-11-03 dai chunk frontend leggibili in `re/pretty/` (stessa build della spec Progetti) e dai manuali in `re/manuals/`. Nessuna chiamata API eseguita.

Legenda: **[O]** osservato nel codice frontend · **[I]** inferenza · **[?]** da verificare con dati live / backend.

Convenzioni comuni [O]:
- Base API `apiBaseurl` = `https://projects.helaglobe.com/api/`. GET senza `method`; POST con `{method:"POST", body}`.
- Risposta `{success, data}`. Le pagine leggono `response._data.data`. Errori: `JSON.parse(e.data).errors.title` (alcune pagine `errors.detail` o `error.messages[0]`).
- Le chiamate `…/get/<id>` restituiscono sempre il record **piatto** in `data` (es. `data.name`, non `data.Client.name`).
- Le chiamate `…/list` sono di **due tipi**: piatte (`data[i].campo`) per client, supplier, user, userprofile, upprice, upcost, cost, holiday; **con wrapper CakePHP** (`data[i].Activity`, `.Projectcolor`, `.Yeartarget`, `.Macrovoice`) per activity, projectcolor, yeartarget, macrovoice.
- Salvataggio: `POST <entità>/createedit` con body `{<Modello>: {...}}` (eccezioni: `user/createedit` e `projectcolor/createedit` hanno body piatto; i costi/prezzi usano `…/savecost` con wrapper `Cost`). `id: 0` = nuovo record.
- Eliminazione: sempre `GET <entità>/delete/<id>` (GET, non DELETE). Hard o soft delete non visibile dal frontend; per client/supplier l'export mostra `status` A = "Attivo" / altro = "Eliminato" → **soft delete probabile** [I] (vedi CI_ha15j.js:1189). Altri: [?].
- Conferma eliminazione: componente `ConfirmDeleteDlg` (ClyIuovc.js): titolo di default "Conferma la cancellazione", testo di default "Vuoi veramente confermare l'eliminazione? Il processo non è reversibile.", bottoni "NO" / "Elimina" (ClyIuovc.js:39-42). Le pagine passano un testo specifico (riportato sotto).
- Tabelle: Vuoti `v-data-table` density compact, ricerca testuale ("Cerca" / "Cerca nei risultati"), opzioni righe 10/15/25/50/Tutti, testi "Elementi per pagina", "Nessun elemento disponibile", "{0}-{1} di {2}". Azioni riga in menu a tre puntini.
- Accesso alla pagina: controllo in `onMounted`; se non autorizzato `router.push("/")`.
- Campi numerici decimali (prezzi, costi, target): `VNumberInput` con `decimal-separator=","`, `precision=2`, il tasto "." viene convertito in "," (WvNnxfrV.js:113, DbUPreoC.js:128).

---

## 0. Layout, menu, notifiche, cambio password (CStWh58a.js)

### Menu laterale e condizioni di visibilità [O] (CStWh58a.js:1475-2420)

| Voce menu | Rotta | Condizione |
|---|---|---|
| Dashboard | `/` | sempre (contenuto dashboard solo se `viewdashboard==1`, BoNsS7pF.js:556) |
| **Amministrazione** (gruppo) | — | `role=="S"` o `cancreatemacro==1` |
| ↳ Definizione Attività | `/activities` | `role=="S"` |
| ↳ Definizione Macrovoci | `/macrovoices` | `role=="S"` o `cancreatemacro==1` |
| ↳ Definizione Colori | `/colors` | `role=="S"` |
| ↳ Gestione calendario | `/holidays` | `role=="S"` |
| ↳ Target annui | `/targets` | `role=="S"` |
| ↳ Profili professionali | `/userprofiles` | `role=="S"` (da lì: `/upprices`, `/upcosts`) |
| ↳ Utenti | `/users` | `role=="S"` |
| **Dipendenti** (gruppo) | — | `role` S o A |
| ↳ Costi Orari | `/costs` | `role=="S"` |
| ↳ Carichi di lavoro | `/works` | S o A |
| ↳ Imputazione ore | `/hours` | `role=="S"` |
| Progetti | `/projects` | sempre |
| Storici | `/histories` | sempre |
| Clienti | `/clients` | S o A |
| Fornitori | `/suppliers` | S o A |
| Calendario/To Do List | `/todolist` | sempre |
| **Valori Economici** (gruppo) | — | `hasinvoice==1` |
| ↳ Scad. Attivo / Scad. Fat. Pagate / Banche / Fatture Attive / Fatture Passive / Tranche pagamento | `/scadenziario`, `/scadenziariofattureattive`, `/banks`, `/adminactiveinvoices`, `/adminpassiveinvoices`, `/adminpaymenttranches` | `hasinvoice==1` |
| Kpi | `/kpi` | `viewkpi==1` |
| Budget | `/budget` | `viewbudget==1` |
| Manuale | apre PDF | per ruolo: S → `backEndurl + "Manuale-Helaproject.pdf"`, A → `…-Ruolo-Admin.pdf`, U → `…-Ruolo-Utente.pdf` (CStWh58a.js:1314-1330) |

Menu utente (avatar con iniziali, `_image` della sessione): "Il mio profilo" → `/profile`; "Cambia password" → `DialogResetPassword`; "Esci" → conferma "Sei sicuro di voler uscire?" (Annulla / ESCI) → `/login` + `signOut`.

### Notifiche (campanella) [O] (CStWh58a.js:1286-1360)
- `GET notification/getMyNotifications` → `data` = array di notifiche `{id, title, content (HTML), link, created, readon}`; polling ogni **90 s** (`setTimeout 9e4`); ricaricabile via evento iniettato `refreshNotifications`.
- Ordinamento: non lette prima, poi `created` decrescente. Badge rosso se esistono notifiche con `readon` falso. Titolo troncato a 50 caratteri; non lette in grassetto; data formattata it-IT con secondi.
- Click su notifica → dialog "Dettagli completi della notifica" con `content` (HTML, classe `ql-editor`) e bottone "VAI" se `link` (→ `router.push("/" + link)`); se non letta: `POST notification/markAsRead` body `{id}`.
- "Tutte lette": `POST notification/markAsRead {id}` per ciascuna non letta (una chiamata per notifica).
- "Centro notifiche" → `/notification-center` (fuori scope).
- Tipologie (manuale): mancato inserimento ore, assegnazione task, milestone in scadenza / nuova milestone (responsabili), modifica responsabile, completamento task (responsabili). Generate solo se `creanotifica=1`; anche via email se `sendnotificationemail=1`.

### Cambia password (utente corrente) — `DialogResetPassword` [O] (CStWh58a.js:116-260)
- Campi: "Password" (`H`), "Conferma la Password" (`p`), toggle visibilità, barra forza password (zxcvbn score 0-4 → rosso/arancio/giallo/verde/azzurro).
- Regola: obbligatoria + regex `^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?])([a-zA-Z0-9\W]{8,})$` → "La password deve contenere almeno 8 caratteri e almeno un numero, una lettera maiuscola, una minuscola e un carattere speciale tra i seguenti …"; conferma uguale ("Confirm Password is different from Password").
- `POST user/changePassword` body `{password, rpassword}` (nessun id → utente della sessione [I]). Successo: "Password modificata". Errore: `errors.detail` o `detail[0].msg`.

---

## 1. Clienti `/clients` (CI_ha15j.js)

Accesso: `role` S o A (CI_ha15j.js:1235).

API [O]:
| Azione | Chiamata | Note |
|---|---|---|
| Elenco | `GET client/list` | `data` = array piatto; campi letti: tutti quelli in export + `portafoglio`, `attivi`, `coda` (calcolati dal backend [I]) |
| Dettaglio | `GET client/get/<id>` | `data` piatto (CI_ha15j.js:251-285) |
| Salva | `POST client/createedit` body `{Client:{…}}` (CI_ha15j.js:221) | |
| Elimina | `GET client/delete/<id>` (CI_ha15j.js:1133) | testo: "Vuoi veramente eliminare il cliente <name>?" ; ok "Cliente eliminato" |

Tabella (15 righe/pagina): Rag. Sociale (`name`, tooltip id, icona scudo "Prioritario" se `prioritario==1`) · Piva (`piva`) · Email (`email`) · Portafoglio attivo (`portafoglio`, € it-IT) · Prog. attivi (`attivi`) · Prog. in coda (`coda`) · Azioni (Modifica, Elimina). Nessun ordinamento di default.
Manuale: portafoglio = preventivo dei progetti Approvati o Confermati; attivi = progetti Approvati/Confermati; in coda = progetti In discussione.

Export XLS "export-clienti.xlsx", foglio "Clienti", header in grassetto (CI_ha15j.js:1093-1231), colonne:
Id(`id`), Codice(`codcli`), Rag. Sociale(`name`), Piva(`piva`), CF(`cf`), SDI(`sdi`), PEC(`pec`), Indirizzo(`address`), CAP(`zip`), Città(`city`), Provincia(`province`), Stato(`state`), Telefono(`telephone`), Email(`email`), Email Aziendale(`companyemail`), Email fatture(`invoiceemail`), Sito web(`website`), Codice IBAN(`iban`), Note interne(`notes`), Stop service(`stopservice` 1→"Si" altrimenti "No"), Status(`status` "A"→"Attivo" altrimenti "Eliminato"), Contatto(`contactperson`), Prioritario(`prioritario` Si/No), Portafoglio attivo, Progetti attivi, Progetti in coda.

Dialog `DialogInsModClient` (props `idrec`, `clientNames`) — titoli "Nuovo cliente"/"Modifica cliente":
| Label | Campo | Tipo | Validazione / note |
|---|---|---|---|
| Codice cliente | `codcli` | testo | — |
| Ragione sociale* | `name` | combobox (items = nomi clienti esistenti) | obbligatorio; icona ✓ e classe `new-client` se il nome NON esiste già (anti-duplicato visivo) |
| Partita iva | `piva` | testo | — |
| Codice Fiscale* | `cf` | testo | obbligatorio |
| Indirizzo* | `address` | testo | obbligatorio |
| Cap* | `zip` | testo | obbligatorio |
| Città* | `city` | testo | obbligatorio |
| Provincia | `province` | autocomplete province italiane (code/name, 107 voci, CI_ha15j.js:92-200) | salvato come sigla (es. "MI") |
| Stato* | `state` | testo | obbligatorio; default nuovo = "Italia" |
| Telefono | `telephone` | testo | |
| Pec | `pec` | email | (regola email definita ma non applicata) |
| Email Aziendale | `companyemail` | email | |
| Email di fatturazione | `invoiceemail` | email | |
| Sito web | `website` | testo | |
| IBAN | `iban` | testo | |
| Stopservice | `stopservice` | checkbox → 1/0 | manuale: cliente sospeso |
| Cliente prioritario | `prioritario` | checkbox → 1/0 | manuale: appare nelle statistiche dashboard (sezione Clienti Prioritari) |
| Termini di pagamento | `paymenttype` | select | codici sotto |
| Persona di riferimento | `contactperson` | testo | |
| Note | `notes` | textarea | |

Codici `paymenttype` [O] (CI_ha15j.js:80-90): `null` Personalizzato · `"0"` Data fattura · `"30"` 30 gg · `"30fm"` 30 gg f.m. · `"45"` 45 gg · `"60"` 60 gg · `"60fm"` 60 gg f.m. · `"75"` 75 gg · `"90"` 90 gg · `"90fm"` 90 gg f.m. · `"120"` 120 gg.
Campi presenti in DB ma non nel form: `sdi`, `email`, `status` [O da export].
Payload: `{Client: {id, codcli, name, piva, cf, address, zip, city, province, state, telephone, pec, companyemail, invoiceemail, website, iban, stopservice:0|1, prioritario:0|1, paymenttype, contactperson, notes, …altri campi caricati}}` (in modifica si rispedisce l'intero record letto).
Messaggi: "Creazione cliente completata" / "Modifica cliente completata".

## 2. Fornitori `/suppliers` (H6XT-76y.js)

Accesso: `role` S o A (H6XT-76y.js:1184). Identico ai clienti salvo:
- API: `GET supplier/list`, `GET supplier/get/<id>`, `POST supplier/createedit` `{Supplier:{…}}` (H6XT-76y.js:212), `GET supplier/delete/<id>` (testo "Vuoi veramente eliminare il fornitore <name>?", ok "Fornitore eliminato").
- Codice: `codsup` ("Codice fornitore"). Combobox ragione sociale con classe `new-supplier`.
- Campo extra **Tipo di fornitore** `type` (select, default "A"): `A` Azienda · `P` Professionista · `C` Clinico (H6XT-76y.js:79-83).
- Niente `prioritario`, niente `paymenttype`.
- Tabella: Codice(`codsup`) · Rag. Sociale(`name`) · Tipo(`type` → descrizione) · Piva · Email · Azioni.
- Export "export-fornitori.xlsx", foglio "Fornitori": Id, Codice(`codsup`), Rag. Sociale, Tipo(`type` codice grezzo), Piva, CF, SDI, PEC, Indirizzo, CAP, Città, Provincia, Stato, Telefono, Email, Email Aziendale, Email fatture, Sito web, Codice IBAN, Note interne, Stop service (Si/No), Status (Attivo/Eliminato), Contatto.

## 3. Utenti `/users` (Dqdzh5Ra.js)

Accesso: solo `role=="S"` (Dqdzh5Ra.js:1047).

API [O]:
| Azione | Chiamata | Body / risposta |
|---|---|---|
| Elenco | `GET user/list` | `data` piatto: `id, firstname, lastname, acronym, email, descrole, userprofile_id, activeuser, …` |
| Profili (per select e colonna) | `GET userprofile/list` | `data[i].{id, profilename}` |
| Dettaglio | `GET user/get/<id>` | `data` piatto con tutti i flag (Dqdzh5Ra.js:173-225) |
| Salva | `POST user/createedit` | body **piatto** (vedi sotto) (Dqdzh5Ra.js:122-147) |
| Elimina | `GET user/delete/<id>` | testo "Vuoi veramente eliminare questo utente <email>?"; ok "Utente eliminato" |
| Impersona | `POST user/forceLogin/<id>` | risposta `{success, data:{user:{token}}}` → scrive cookie `auth.token`, `router.push("/")` + reload (Dqdzh5Ra.js:916-927) |
| Forza password | `POST user/changePassword` | `{id, password, rpassword}` (password ripetuta uguale) (Dqdzh5Ra.js:945) |

Tabella (25 righe/pagina): Nome(`firstname`, rosso se `activeuser==0`, tooltip id) · Cognome(`lastname`, rosso se inattivo) · Sigla(`acronym`) · Email · Ruolo(`descrole`, dal backend) · Profilo(`userprofile_id` → `profilename`) · Azioni: Modifica; **Impersona** e **Elimina** solo se la riga non è l'utente corrente (Dqdzh5Ra.js:1229,1326); "Forza la password". Nessun export.

Dialog impersona: "Sei sicuro di voler impersonare l'utente <firstname> <lastname> [ID <id>]?" — Chiudi / IMPERSONA. Manuale: effettua logout dell'utente corrente e login come utente selezionato.
Dialog forza password: titolo "Forza cambio password di <nome cognome>", campo "Nuova Password*", regola: obbligatoria + `^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9\W]{8,})$` ("…almeno 8 caratteri e almeno 1 numero, 1 lettera maiuscola, 1 lettera minuscola" — **senza** carattere speciale obbligatorio, a differenza degli altri form password). Bottoni Cambia Password / Annulla; ok "Password cambiata con successo".

Dialog `DialogInsModUser` (props `idrec`, `profiles`) — "Nuovo utente"/"Modifica utente":
| Label | Campo | Tipo | Regole / default |
|---|---|---|---|
| Nome | `firstname` | testo | obbligatorio |
| Cognome | `lastname` | testo | obbligatorio |
| Email | `email` | testo | regex `^[\w-\.]+@([\w-]+\.)+[\w-]{2,5}$` "Email non valida" |
| Sigla | `acronym` | testo | obbligatorio; in modifica se null = iniziale nome + iniziale cognome |
| Ruolo | `role` | select (return-object) | default U; **disabilitato se si modifica sé stessi** |
| Profilo utente | `userprofile_id` | select su `profiles` (`profilename`/`id`) | `required` ma senza rules [O] |
| Flag (liste con switch) | vedi tabella flag | boolean → 0/1 | |

Ruoli [O] (Dqdzh5Ra.js:93-97): `S` Super Amministratore · `A` Amministratore · `U` Utente.

**Flag utente** (gruppi e label del dialog Dqdzh5Ra.js:229-320; default nuovo utente Dqdzh5Ra.js:79-91; significati da manuale/codice):
| Gruppo | Campo | Label | Default nuovo | Effetto |
|---|---|---|---|---|
| Account | `activeuser` | Utente attivo | 1 | utente usabile nelle select (dashboard, assegnazione task, progetti, carichi di lavoro); in elenco nome rosso se 0 |
| Account | `usedindashboard` | Appare in dashboard | 1 | incluso nei widget/statistiche dashboard (filtrato con `activeuser==1 && usedindashboard==1`, BoNsS7pF.js:470) |
| Permessi | `viewdashboard` | Visualizza dashboard | 0 | vede le 5 sezioni della dashboard |
| Permessi | `hasprojects` | Può creare i progetti | 0 | crea/duplica progetti, modifica codice progetto |
| Permessi | `hasinvoice` | Può gestire fatture e tranches | 0 | menu "Valori Economici" + fatture/tranche nei progetti |
| Permessi | `cancreatemacro` | Creazione macrovoci | 0 | accesso a `/macrovoices` e gruppo Amministrazione |
| Permessi | `viewfic` | Visualizza Fatture in Cloud | 0 | nessun uso nel frontend oltre al form [?] |
| Visibilità dati | `viewkpi` | Visualizzazione KPI | 0 | menu `/kpi`, KPI nel dettaglio progetto (DBcCgyZq.js:20744) |
| Visibilità dati | `viewbudget` | Visualizzazione budget | 0 | menu `/budget` |
| Notifiche | `creanotifica` | Ricezione notifiche | 1 | generazione notifiche in-app per l'utente |
| Notifiche | `sendnotificationemail` | Notifiche via email | 0 | copia email delle notifiche |
| Notifiche | `sendpresenzealert` | Alert inserimento presenze via email | 0 | promemoria per ore/presenze mancanti |

Payload `POST user/createedit` [O]:
```json
{"id":0,"firstname":"","lastname":"","email":"","acronym":"","role":"S|A|U","userprofile_id":1,
 "hasprojects":0,"activeuser":1,"usedindashboard":1,"viewdashboard":0,"hasinvoice":0,"sendpresenzealert":0,
 "creanotifica":1,"viewkpi":0,"cancreatemacro":0,"viewbudget":0,"viewfic":0,"sendnotificationemail":0}
```
Nessuna password nel form: per un nuovo utente il backend invia l'email di conferma con link a `/confirmemailandsetpassword?code=…` [I, vedi §15].

## 4. Profili professionali `/userprofiles` (a8ean3FC.js)

Accesso: solo S (a8ean3FC.js:380). Pulsanti in testata: "Prezzi orari" → `/upprices`, "Costi orari" → `/upcosts`, "Crea profilo utente".
API: `GET userprofile/list` (piatto `{id, profilename, code, …}`), `GET userprofile/get/<id>`, `POST userprofile/createedit` `{Userprofile:{id, profilename, code}}` (a8ean3FC.js:70), `GET userprofile/delete/<id>` (testo "Vuoi veramente eliminare il profilo professionale <profilename>?"; ok "Profilo utente eliminato").
Tabella (15/pag.): Nome(`profilename`) · Codice(`code`) · Azioni. (Esiste uno slot `item.price` senza colonna: codice morto, suggerisce un vecchio campo `price` sul profilo [I].)
Dialog: "Nome profilo*" `profilename` (obbl.), "Codice profilo*" `code` (obbl.). Titoli "Nuovo/Modifica profilo utente".

## 5. Prezzi orari profili `/upprices` (WvNnxfrV.js) e Costi orari profili `/upcosts` (Bf3qC6Nx.js)

Le due pagine sono **identiche** salvo endpoint e testi (diff verificato). Accesso: solo S.

Chiave logica: **(profilo professionale, anno)** → un valore `hcost` (€/h). Un record per coppia [I: il frontend lo presume, indicizzando per `userprofile_id` dentro l'anno scelto].

API [O]:
| Azione | Prezzi | Costi | Body / risposta |
|---|---|---|---|
| Profili | `GET userprofile/list` | idem | righe tabella = profili |
| Elenco anno | `POST upprice/list` | `POST upcost/list` | body `{user_id: 0, year: <anno>}` (`user_id` sempre 0, nessun filtro profilo nell'UI); risposta `data[]` piatta `{id, userprofile_id, year, hcost}` (WvNnxfrV.js:405-420) |
| Dettaglio | `GET upprice/get/<id>` | `GET upcost/get/<id>` | `data.hcost` (parseFloat) |
| Salva | `POST upprice/savecost` | `POST upcost/savecost` | `{Cost: {id?, hcost, year, user_id: <userprofile_id>}}` — **attenzione: wrapper `Cost` e chiave `user_id` che contiene l'id del PROFILO**; `id` presente solo in modifica (WvNnxfrV.js:79-90) |
| Elimina | `GET upprice/delete/<id>` | `GET upcost/delete/<id>` | testo "Vuoi veramente eliminare questo prezzo orario?" / "…costo orario?"; snackbar (copiato) "Utente eliminato" |

UI: select "Anno" (2023 … anno corrente + 1, default anno corrente; cambio → ricarica). Tabella (15/pag.) con una riga per **profilo**: Profilo professionali(`name`=profilename) · Anno · Prezzo/Costo (€ it-IT) · Azioni: se valore esiste → matita (modifica) + elimina; altrimenti "+" (crea per anno selezionato). Pulsante "Torna ai profili".
Dialog: titolo "Nuovo|Modifica prezzo orario di <profilo> per l'anno <anno>" (risp. "costo orario"); unico campo "Prezzo orario*"/"Costo orario*" (VNumberInput, 2 decimali, obbligatorio). L'anno non è modificabile nel dialog (viene dalla select).

## 6. Costi orari dipendenti `/costs` (DszDwxb0.js) — menu "Dipendenti > Costi Orari"

Accesso: solo S (DszDwxb0.js:426). Stessa struttura di §5 ma per **utente**.
Chiave logica: **(utente, anno)** → `hcost`.
| Azione | Chiamata | Body / risposta |
|---|---|---|
| Utenti | `GET user/list` | tutti gli utenti (anche inattivi), riga = `{id, value: firstname+" "+lastname}` |
| Elenco anno | `POST cost/list` | `{user_id: 0, year}` → `data[]` `{id, user_id, year, hcost}` (DszDwxb0.js:398-410) |
| Dettaglio | `GET cost/get/<id>` | `data.hcost` |
| Salva | `POST cost/savecost` | `{Cost: {id?, hcost, year, user_id: <id utente>}}` (DszDwxb0.js:90-101) |
| Elimina | `GET cost/delete/<id>` | "Vuoi veramente eliminare questo costo orario?" |
Tabella: Utente(`value`) · Anno · Costo (€) · Azioni (+ / matita / elimina). Select anno 2023 … corrente+1. Dialog "Nuovo|Modifica costo orario di <utente> per l'anno <anno>", campo "Costo orario*".
Manuale: costo del personale usato per il calcolo dei costi di progetti/attività, con storicizzazione annuale.

## 7. Definizione Attività `/activities` (C0eSqum8.js)

Accesso: solo S (C0eSqum8.js:532). Sono le attività selezionabili nella rendicontazione ore (rapportino).
API: `GET activity/list` → `data[i].Activity` (wrapper), `GET activity/get/<id>` (piatto), `POST activity/createedit` `{Activity:{…, status:"A"}}` (C0eSqum8.js:80-85), `GET activity/delete/<id>`.
Tabella (15/pag.): Acronimo(`acronimo`) · Nome(`name`) · Descrizione(`description`) · Tipo(`type`: N→"Normale", F→"Ferie/Permessi") · Azioni (Modifica, Duplica, Elimina).
Testo eliminazione: "Vuoi veramente eliminare questa attività <name> [<code>]?" (`code` non esiste → bug, mostra "undefined").
Export CSV "exportattivita.csv" (valori tra virgolette, separatore virgola): ID, Acronimo, Nome, Descrizione, Tipo (codice), Note(`note` — **bug**: il campo è `notes`, colonna sempre vuota).
Dialog (titoli Nuova/Modifica/Duplica Attività; Duplica = get + `id=0`):
| Label | Campo | Regole |
|---|---|---|
| Nome attività* | `name` | obbl. |
| Acronimo* | `acronimo` | obbl. |
| Tipo* | `type` | obbl.; default `N` |
| Descrizione* | `description` | obbl. |
| Note | `notes` | — |
Default nuovo `{id:0, openstatus:true, type:"N"}`; al salvataggio `status="A"` (`openstatus` inviato ma senza UI [?]).
Codici `type` [O] (C0eSqum8.js:418-421): `N` Normale · `F` Ferie/Permessi (manuale: "Ferie / Permessi / Malattia"; proposta automaticamente quando nelle ore si sceglie un task di un progetto di tipo F).

## 8. Definizione Macrovoci `/macrovoices` (w3Y6QCQp.js)

Accesso: `role=="S"` **oppure** `cancreatemacro==1` (w3Y6QCQp.js:419). Usate come raggruppamento nei preventivi/export (economics, CptgHW8x.js) [O manuale].
API: `GET macrovoice/list` → `data[i].Macrovoice`, `GET macrovoice/get/<id>`, `POST macrovoice/createedit` `{Macrovoice:{id, name, description, status:"A"}}`, `GET macrovoice/delete/<id>` ("Vuoi veramente eliminare questa macrovoce <name>?").
Tabella: Nome(`name`) · Descrizione / criterio di aggregazione(`description`) · Azioni (Modifica, Duplica, Elimina).
Export CSV "exportmacrovoci.csv": ID, Nome, Descrizione / criterio di aggregazione.
Dialog (Nuova/Modifica/Duplica Macrovoce): "Nome macrovoce*" `name`, "Descrizione / criterio di aggregazione*" `description` (textarea), entrambi obbligatori. Default `{id:0, name:"", status:"A"}`.

## 9. Definizione Colori `/colors` (uxMSB7Yn.js)

Accesso: solo S (uxMSB7Yn.js:2018). Colori usati per progetti (`projectcolor_id`), scadenze task, eventi calendario.
API: `GET projectcolor/list` → `data[i].Projectcolor` `{id, name, color, status}`; `POST projectcolor/createedit` body **piatto** `{id, color, status:"A", name: name!="" ? name : color}` (uxMSB7Yn.js:1932-1945); `GET projectcolor/delete/<id>` ("Vuoi veramente eliminare questa colore <color>?"). Nessun `get` (modifica precompila dalla riga).
UI: menu a tendina "Crea colore" con color picker Vuetify (`hide-inputs`, default `#CCC`) + "Nome Colore"; Annulla / Salva. Tabella (15/pag.): Colore (chip) · Nome · Azioni (Modifica, Elimina). Snackbar sempre "Creazione colore completata". Titolo pagina "Definizione Colori Progetto". Nessun export.

## 10. Gestione calendario `/holidays` (HhJYB-4Z.js)

Accesso: solo S (HhJYB-4Z.js:662). Titolo "Eventi in calendario".
API [O]:
| Azione | Chiamata | Body / risposta |
|---|---|---|
| Elenco | `POST holiday/list` | `{year}` → `data[]` piatto `{id, day:"YYYY-MM-DD", description, type, color}`; ricorrenti con anno `0000` |
| Colori | `GET projectcolor/list` | select colore |
| Dettaglio | `GET holiday/get/<id>` | piatto |
| Salva | `POST holiday/createedit` | `{Holiday:{id?, color, type, ricorrente:0|1, giornomese, day, daya, description}}` (HhJYB-4Z.js:93-104) |
| Elimina | `GET holiday/delete/<id>` | "Vuoi veramente eliminare questa festività/chiusura?"; ok "Evento cancellato" |

Codici `type` [O] (HhJYB-4Z.js:75-80): `F` Festività · `C` Chiusura · `M` Meeting · `Z` Formazione. Default `F`.

Dialog "Nuovo evento"/"Modifica evento":
| Label | Campo payload | Visibilità / formato |
|---|---|---|
| Tipo | `type` | obbl. |
| Ricorrente | `ricorrente` 0/1 | checkbox |
| Giorno-Mese* | `giornomese` | solo se ricorrente; testo "GG-MM" |
| Da Giorno* (nuovo) / Giorno* (modifica) | `day` | solo se non ricorrente; testo "GG-MM-AAAA" |
| A Giorno (se più giorni) | `daya` | solo nuovo e non ricorrente; "GG-MM-AAAA", facoltativo → il backend crea un record per giorno dell'intervallo [I] |
| Descrizione* | `description` | obbl. |
| Colore | `color` | select su projectcolor (salva il codice esadecimale, non l'id); in modifica preselezionato per `color` |
Date inviate come stringhe testuali italiane, nessun date picker. In lettura: `day` con anno `0000` ⇒ ricorrente, `giornomese = DD-MM`; altrimenti `day = DD-MM-YYYY` (HhJYB-4Z.js:178-192). Bug: nuovo evento senza colore → `h.value.color` su null (errore JS) → colore di fatto obbligatorio.
Tabella (30/pag., sort default `day` asc): Giorno (`MM-DD` mostrato "DD/MM") · Anno (`-` se ricorrente) · Tipo (descrizione) · Colore (chip) · Descrizione · Azioni (Modifica, Elimina). Select "Anno" 2023 … corrente+5.
Uso: festività/chiusure escluse dai giorni lavorativi (carichi di lavoro, KPI, ciclo commerciale), mostrate nel calendario To Do; `holiday/isholidaydate` usato dal modulo task (fuori scope).

## 11. Target annui `/targets` (DbUPreoC.js)

Accesso: solo S (DbUPreoC.js:466).
API: `GET yeartarget/list` → `data[i].Yeartarget` `{id, year, value, soglia}`; `GET yeartarget/get/<id>`; `POST yeartarget/createedit` `{Yeartarget:{id, year, value, soglia}}`; `GET yeartarget/delete/<id>` ("Vuoi veramente eliminare questo target <value €> [<year>]?").
Tabella: Anno · Valore (€) · Soglia Margine (numero it-IT, senza %) · Azioni (Modifica, Duplica, Elimina).
Export CSV "exporttargetannui.csv": ID, Anno, Valore, Soglia Margine.
Dialog (Nuova/Modifica/Duplica Target): "Anno*" `year` (testo), "Valore*" `value` (numero 2 dec.), "Soglia Margine*" `soglia` (numero 2 dec.; percentuale [I]). Default `{id:0, value:0, soglia:0}`. Nota: la regola "obbligatorio" `!!v` rifiuta 0.
Uso (manuale): dashboard "Gap residuo puro = Target annuo − fatturato acquisito", "Gap coperto = Target − Forecast"; "Valore aggregato sotto soglia" = progetti con % margine sotto la soglia. Unicità per anno: [?] (non controllata dal frontend).

## 12. Il mio profilo `/profile` (DO5utKKb.js)

Tutti gli utenti. Precompila da sessione (`id, firstname, lastname, email`). Campi: Nome*, Cognome*, email (disabilitato). `POST user/profile` body `{id, firstname, lastname}` poi `getSession()`. Ok "Modifica profilo completata".

## 13. Recupero password `/lostpassword` (CWIvk0Yw.js)

Pubblica. Campo Email (required + regex email). `POST user/sendemailrecoverypassword` `{email}` → "Email di richiesta password inviata con successo"; errore `errors.detail`. Link "Privacy Policy", "Indietro" → `/login`.

## 14. Imposta nuova password `/resetpassword?code=…` (DKSpV2PK.js)

Pubblica. Password + Password di conferma (regex con carattere speciale, vedi §0; barra zxcvbn). `POST user/reset_password` `{password, password_confirmation, code}` → "Password Impostata corretamente" → `/login`.
`/reset-password?token=…` (CrI5EpAY.js): **versione legacy/rotta morta**: `POST <apiBaseurl>/reset_password` (doppio slash, senza `user/`) con `{password, password_confirmation, reset_password_token}`; usa variabili snackbar inesistenti. Non ricostruire [I].

## 15. Conferma email e imposta password `/confirmemailandsetpassword?code=…` (CucMWG0z.js)

Pubblica (link nell'email al nuovo utente [I]). Al mount `POST user/confirmuser` `{code}`; se ok mostra "Utente confermato / Scegli la tua password" e il form; altrimenti spinner + "Vai al login". Salvataggio `POST user/set_password` `{password, password_confirmation, code}` → `/login`.

---

## Elenco endpoint dell'area

| Metodo | Path | Body | Risposta letta |
|---|---|---|---|
| GET | `client/list` | — | `data[]` piatto |
| GET | `client/get/<id>` | — | `data` piatto |
| POST | `client/createedit` | `{Client}` | success |
| GET | `client/delete/<id>` | — | — |
| GET | `supplier/list` · `supplier/get/<id>` · `supplier/delete/<id>` | — | piatto |
| POST | `supplier/createedit` | `{Supplier}` | |
| GET | `user/list` · `user/get/<id>` · `user/delete/<id>` | — | piatto |
| POST | `user/createedit` | piatto (campi + 12 flag) | |
| POST | `user/forceLogin/<id>` | — | `data.user.token` |
| POST | `user/changePassword` | `{id?, password, rpassword}` (con `id` = admin, senza = sé stessi) | |
| POST | `user/profile` | `{id, firstname, lastname}` | |
| POST | `user/sendemailrecoverypassword` | `{email}` | |
| POST | `user/reset_password` | `{password, password_confirmation, code}` | |
| POST | `user/confirmuser` | `{code}` | |
| POST | `user/set_password` | `{password, password_confirmation, code}` | |
| GET | `userprofile/list` · `userprofile/get/<id>` · `userprofile/delete/<id>` | — | piatto |
| POST | `userprofile/createedit` | `{Userprofile:{id, profilename, code}}` | |
| POST | `upprice/list` · `upcost/list` | `{user_id:0, year}` | `data[]` `{id, userprofile_id, year, hcost}` |
| GET | `upprice/get/<id>` · `upcost/get/<id>` · `…/delete/<id>` | — | `data.hcost` |
| POST | `upprice/savecost` · `upcost/savecost` | `{Cost:{id?, hcost, year, user_id:<profilo>}}` | |
| POST | `cost/list` | `{user_id:0, year}` | `data[]` `{id, user_id, year, hcost}` |
| GET | `cost/get/<id>` · `cost/delete/<id>` | — | |
| POST | `cost/savecost` | `{Cost:{id?, hcost, year, user_id}}` | |
| GET | `activity/list` | — | `data[].Activity` |
| GET | `activity/get/<id>` · `activity/delete/<id>` | — | piatto |
| POST | `activity/createedit` | `{Activity:{id, name, acronimo, type, description, notes, status:"A", openstatus}}` | |
| GET | `macrovoice/list` | — | `data[].Macrovoice` |
| GET | `macrovoice/get/<id>` · `macrovoice/delete/<id>` | — | |
| POST | `macrovoice/createedit` | `{Macrovoice:{id, name, description, status}}` | |
| GET | `projectcolor/list` | — | `data[].Projectcolor` |
| POST | `projectcolor/createedit` | `{id, color, status:"A", name}` (piatto) | |
| GET | `projectcolor/delete/<id>` | — | |
| POST | `holiday/list` | `{year}` | `data[]` piatto |
| GET | `holiday/get/<id>` · `holiday/delete/<id>` | — | |
| POST | `holiday/createedit` | `{Holiday:{id?, color, type, ricorrente, giornomese, day, daya, description}}` | |
| GET | `yeartarget/list` | — | `data[].Yeartarget` |
| GET | `yeartarget/get/<id>` · `yeartarget/delete/<id>` | — | |
| POST | `yeartarget/createedit` | `{Yeartarget:{id, year, value, soglia}}` | |
| GET | `notification/getMyNotifications` | — | `data[]` `{id, title, content, link, created, readon}` |
| POST | `notification/markAsRead` | `{id}` | |

## Dipendenze con altre aree

| Dato | Usato da |
|---|---|
| Clienti (`client/list`) | progetti (cliente, sponsor, creazione cliente al volo), fatture attive, scadenziari, dashboard "Clienti Prioritari" (`prioritario`, portafoglio/attivi/coda) |
| Fornitori (`supplier/list`) | task (fornitore, `suppliercost`/`supplierprice`), fatture passive, economics |
| Utenti + flag | menu/permessi ovunque; select responsabili/assegnatari (`activeuser`); dashboard (`usedindashboard`, `viewdashboard`); KPI (`viewkpi`); fatture (`hasinvoice`); progetti (`hasprojects`); notifiche (`creanotifica`, `sendnotificationemail`, `sendpresenzealert`) |
| Profili professionali | utente (`userprofile_id`), task (`userprofile_id`, `originaluserprofile_id`), economics/preventivi |
| Prezzi orari profilo × anno (`upprice`) | prezzo dei task di personale / preventivi: il calcolo avviene **lato backend** (nessun chunk frontend legge `upprice` o `hcost` fuori da queste pagine) [I] |
| Costi orari profilo × anno (`upcost`) | costo pianificato dei task (marginalità prevista) [I, backend] |
| Costi orari dipendente × anno (`cost`) | costo effettivo da ore imputate (`realcost` dei task = ore × costo utente dell'anno) [I, backend] |
| Attività | rapportino/imputazione ore (`activity/list` in z75WVF1S.js, CmzDPlax.js, DBcCgyZq.js); tipo F per ferie |
| Macrovoci | raggruppamento voci nel preventivo/economics (CptgHW8x.js) |
| Colori | progetti (`projectcolor_id`), eventi calendario, scadenze task |
| Eventi calendario | giorni lavorativi in carichi di lavoro, KPI dashboard (ciclo commerciale, carico medio), calendario To Do, `holiday/isholidaydate` nei task |
| Target annui | dashboard sezione Economico (gap target) e "valore sotto soglia margine" |

## Domande aperte [?]

1. Unicità garantita lato DB per (profilo, anno) in `upprice`/`upcost`, (utente, anno) in `cost`, e per `year` in `yeartarget`? Il frontend assume un solo record.
2. Se manca il prezzo/costo per l'anno, il backend usa l'anno precedente o zero? Quale anno si usa per un task (data inizio task, anno ora imputata, anno progetto)?
3. Delete: soft (status → altro da "A") o hard per ciascuna entità? Cosa succede eliminando un profilo/utente/colore referenziato?
4. `holiday/createedit` con `daya`: crea un record per ogni giorno (inclusi weekend)? Formato `day` accettato solo "DD-MM-YYYY"?
5. `soglia` è una percentuale (es. 30 = 30%)?
6. `viewfic` (Fatture in Cloud) e `openstatus` delle attività: usati dal backend?
7. Creazione utente: il backend genera password e/o invia l'email con `code` per `/confirmemailandsetpassword`? `descrole` è calcolato dal backend.
8. `user/forceLogin` è riservato a S lato server?
