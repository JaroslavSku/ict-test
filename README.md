
<!-- [CR] chybi zavislosti, napr verze node -->
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm start
```

## Test

```bash
# unit tests
$ npm test
or
$ npx jest

```

## Endpoints

- import postman schema ICT.postman_collection.json <!-- [CR] postman kolekce je v pohode, ale lepsi by byl swagger nebo openapi -->
- /state = state of the app // stav aplikace nechráněný
- /cards/{{cardNumber}} = card validation // ověření platnosti karty chráněný

## Authorization

- Add Bearer token with value "token" // přidat Bearer token do postmana s hodnotou token
- Just the /cards endpoint is protected // pouze endpoint /cards je zabezpečený


<!--
- v package.json je mezi zavislostma "save-dev", to vypada na preklep pri instalaci nejakeho balicku

- spoustet aplikaci pomoci nodemonu neni moc produkcni

- chybi prikaz na build aplikace

- neslo mi aplikaci spustit, asi globalni zavislost
[nodemon] 2.0.22
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: ts,json
[nodemon] starting `ts-node index.ts`
sh: 1: ts-node: not found
[nodemon] failed to start process, "ts-node" exec not found
-->