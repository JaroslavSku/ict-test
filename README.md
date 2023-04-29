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

- import postman schema ICT.postman_collection.json
- /state = state of the app // stav aplikace nechráněný
- /cards/{{cardNumber}} = card validation // ověření platnosti karty chráněný

## Authorization

- Add Bearer token with value "token" // přidat Bearer token do postmana s hodnotou token
- Just the /cards endpoint is protected // pouze endpoint /cards je zabezpečený
