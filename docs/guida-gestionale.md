# Gestionale Helaglobe: guida operativa (copia di riferimento)

Fonte: documento interno fornito da Nik il 2 novembre 2026 ("Gestionale Helaglobe: guida operativa per un altro bot").
Documento interno, non pubblico. Non contiene password o token.

Punti chiave per il remake del modulo Progetti (estratto; vedi il testo completo nella conversazione d'origine):

- Base: https://projects.helaglobe.com, API JSON sotto `/api`, login `POST user/login` → `data.user.token`, header `Authorization: Bearer <token>`.
- Risposte con wrapper: `{"success":true,"data":[{"Project":{...},"Projectuser":[...]}]}`.
- Endpoint progetti: `GET project/completelist` (inventario), `GET project/list/`, `POST project/createedit` (oggetto completo: `{Project, Owners, clonetask, creastorico, sponsors}`), `GET projecthistory/list/<id>`.
- **`GET project/get/<id>` aggiorna `Project.modified`: non usarlo per leggere.**
- Task: `GET task/list/todolist/16`, `GET task/get/<id>`, `POST task/createedit` con `{Task: oggettoCompleto}`; nome in `shortname`; status A (aperto) / P (completato) / C (chiuso).
- Anagrafiche: `GET user/list`, `GET client/list/`, `GET activity/list`.
- Progetto, due campi:
  - `openstatus`: A aperto, C chiuso (chiudere = `openstatus: "C"`).
  - `status` (commerciale): L lead, S da sviluppare, I in discussione, C confermato in attesa contratto, A approvato/siglato, R rifiutato, H on hold, D eliminato.
- Codice progetto `PR…YYYY`; anno di origine dal suffisso del codice.
- Responsabile principale: `Projectuser[0].user_id` (non `Project.referent`). In scrittura si usa `Owners` (formato non verificato).
- Marginalità: ricavo `newtotaleproposta` se ≠0 altrimenti `_totaleprogetto`; costo `costopropostamodified` se ≠0 altrimenti `costoproposta`.
- Tariffe fallback osservate: profilo interno `userprofile_id: 4` prezzo `hours*130`, costo `hours*40`; task esterno `supplierprice`/`suppliercost`.
- Win rate: `(A + C) / (A + C + R) * 100`, esclusi interni.

Non validati: creazione nuovo progetto, clonazione integrale, schema `Owners`/sponsor in scrittura, import bulk, allegati.
