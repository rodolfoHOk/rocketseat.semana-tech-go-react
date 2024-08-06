# Go + React na Prática Server

> Semana Tech Go + React da RocketSeat

## Tecnologias

- Go lang
- Docker

### Bibliotecas adicionais

- github.com/joho/godotenv
- github.com/google/uuid
- github.com/jackc/pgx/v5
- github.com/go-chi/chi/v5
- github.com/go-chi/cors
- github.com/gorilla/websocket

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
- go run ./cmd/wsrs/main.go

## Links úteis

- [Tern Github](https://github.com/jackc/tern)
- [Godotenv Github](https://github.com/joho/godotenv)
- [SQLC DEV](https://sqlc.dev/)
- [Go Chi cors Github](https://github.com/go-chi/cors)
- [Gorilla Websocket Github](https://github.com/gorilla/websocket)
