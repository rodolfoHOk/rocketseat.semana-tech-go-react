# Go + React na Prática Server

> Semana Tech Go + React da RocketSeat

## Tecnologias

- Go lang
- Docker

### Bibliotecas adicionais

- github.com/joho/godotenv
-

### Ferramentas Go

- github.com/jackc/tern
- github.com/sqlc-dev/sqlc/cmd/sqlc

## Guia de comandos

- go mod init
- go install github.com/jackc/tern/v2@latest
- tern init ./internal/store/pgstore/migrations
- tern new --migrations ./internal/store/pgstore/migrations create_rooms_table
- tern new --migrations ./internal/store/pgstore/migrations create_messages_table
- go mod tidy
- go run ./cmd/tools/terndotenv/main.go
- go install github.com/sqlc-dev/sqlc/cmd/sqlc@latest
- sqlc generate -f ./internal/store/pgstore/sqlc.yaml
- go generate ./...
-

## Links úteis

- [Tern Github](https://github.com/jackc/tern)
- [Godotenv Github](https://github.com/joho/godotenv)
- [SQLC DEV](https://sqlc.dev/)
