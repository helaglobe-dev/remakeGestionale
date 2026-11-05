# Contribuire

## Preparazione

1. Installare una versione di Node.js compatibile con `package.json`.
2. Eseguire `npm install`.
3. Creare il database locale con `npm run db:push` e `npm run db:seed`.
4. Non usare dump o database di produzione durante lo sviluppo ordinario.

## Prima di aprire una pull request

```bash
npm run typecheck
npm run build
```

Per modifiche alle API o alle regole di business eseguire anche la suite di integrazione descritta nel README.

Le pull request dovrebbero:

- avere uno scopo circoscritto e una descrizione verificabile;
- includere o aggiornare i test quando cambia il comportamento;
- aggiornare specifiche e guida quando cambia una regola funzionale;
- non contenere `.env`, database, dump, backup, screenshot con dati reali o credenziali;
- distinguere chiaramente formule verificate e ipotesi ancora da validare.

## Convenzioni

- Le route API restano sottili; la logica riutilizzabile va in `server/utils/`.
- Le risposte API mantengono il formato `{ success, data }`.
- Validare gli input con Zod e applicare autorizzazioni lato server.
- Preferire modifiche compatibili con TypeScript strict.
