## API spec

[API spec](https://github.com/gothinkster/realworld/tree/main/api) - RealWorld API Spec


## Build and run postgres

### Build image
```bash
$ docker build -t postgres-mediumclone . 
```

### Run container
```bash
$ docker run -p 5431:5432 -d postgres-mediumclone 
```
**note:** running on port *5431*


## Running the app

```bash
# development watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Migrations

### Create Migration

```bash
$ npm run db:create src/migrations/<MigrationName>
```

### Migrate

```bash
$ npm run db:migrate
```
