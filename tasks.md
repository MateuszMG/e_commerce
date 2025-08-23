# What is TO DO ?

Create app micoroservices and check how it works for 100.000 users per day (if possible)
how to manage DB for such queries
how o manage deploy
CI/CD -> red/green ?
docker + k8s
elasticsearch ?
serverless checking

1. Load balancer
2. Testing PM2

ecommerce/
├─ package.json
├─ apps/
│ ├─ client/ # Next.js app
│ ├─ api-gateway/ # BFF/edge gateway
│ ├─ users/ # NestJS service
│ ├─ products/
│ ├─ orders/
│ ├─ payments/
│ └─ search/
├─ packages/
│ ├─ shared-types/ # TS types, zod schemas
│ ├─ shared-utils/ # logging, env, http client
│ ├─ openapi-client/ # generated REST client for Next.js
│ └─ eslint-config/ # repo-wide lint config
├─ tools/ # scripts (codegen, db, ci helpers)
└─ infra/
├─ k8s/ # Helm charts / Kustomize
├─ docker/ # Dockerfiles
└─ grafana-dashboards/

NestJS and Next + TypeScript
REST API + library to generate API types
Auth0
'Best approach: Polyglot persistence → SQL for transactions, NoSQL for catalog/search.'
Redis for (in-memory caching for sessions)
Elasticsearch
Microservices architecture (modular: users, products, orders, payments, search)
Docker + Kubernetes for container orchestration and scaling
load balancers
Azure
PayPal
Prometheus + Grafana (metrics, alerts)
ELK stack (Elasticsearch, Logstash, Kibana) for logs
Sentry for error tracking
Use async queues (RabbitMQ)
