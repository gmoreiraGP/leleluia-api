# Leleluia Transportes

## Descrição

Leleluia é uma empresa de transportes focada no B2B.

## Instalação

```bash
$ npm install
```

## Subir a aplicação

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Testes

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Migrações do Banco de Dados

```bash
# generate a new migration synchronizing entities
$ npm run typeorm migration:generate --n Initial

# sync database running migrations
$ npm run typeorm migration:run

```
