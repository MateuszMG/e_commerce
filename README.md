# E-Commerce Monorepo

This repository hosts a set of microservices and applications for an e-commerce platform. It is managed as a [Turborepo](https://turbo.build/repo) monorepo using [pnpm](https://pnpm.io/).

## Prerequisites
- Node.js 18+
- pnpm 8+
- Docker and Docker Compose

## Setup
Install dependencies for all workspaces:

```bash
pnpm install
```

## Development
Start the database and all services:

```bash
docker compose up -d
pnpm dev
```

Each service will be available on its own port:
- Users service: http://localhost:3001
- Orders service: http://localhost:3002
- Payments service: http://localhost:3003
- Notifications service: http://localhost:3004

## Testing
Run the test suites for all packages:

```bash
pnpm test
```

## Production build
Build the project and start the services with Docker:

```bash
pnpm build
docker compose up --build
```
