<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->

Implemnet Kafka + even-driven-architecture

<!--  -->

create 'payments' service in 'e_commerce\services\payments' based on 'users' service in 'e_commerce\services\users'.

Create dto, 1 endpoint + healthCheck. 
Use Nest Swagger, yup,

<!--  -->

Write a minimal Dockerfile per service.
Add a root docker-compose.yml for local dev (Postgres, services).

<!--  -->

use Nest Swagger, yup,
Implement the first service (JS/TS)
Example: users service with health + one endpoint.
Use Prisma for Postgres (or Drizzle). One DB per service to enforce loose coupling.

<!--  -->

Monorepo setup

Create a repo (use Turborepo ).

Example folder layout:

/infra/ # IaC scripts, env templates
/apps/frontend # Next.js (SWA)
/apps/gateway # custom gateway/BFF
/services/users # NestJS service
/services/orders # NestJS service
/services/payments # NestJS service
/services/notifications # NestJS service
/packages/shared # DTOs, schema validators, utilities (no runtime side‑effects)

Configure TS project references and a base tsconfig.json. Add ESLint + Prettier.

<!--  -->

craete setup of ecommerce app using Nest and Next. It should be monorepo, with services:
users products orders

<!--  -->

Jest tego kurwa za duzo XD
Nawet na 90 dni

https://chatgpt.com/s/t_68a9708ea7888191a4ac2e44f0b02de4
I am Senior Fullstack Developer (Node , TS, JS, React, NestJS, Next). I want to refreash all of my knowleadge about seniority lvl. Give me list of topics to repaeat.

🔹 1. Core JavaScript & TypeScript
🔹 2. Frontend (React / Next.js)
Reconciliation & Fiber
Virtual DOM, concurrent rendering
SEO strategies (sitemaps, metadata, structured data)
Code splitting, lazy loading, bundle analysis
Image optimization, caching headers, CDN usage
Lighthouse audits, Core Web Vitals

🔹 3. Backend (Node.js / NestJS)

Event loop phases, libuv, worker threads
Streams, buffers, clustering
Modules, Dependency Injection, Guards, Interceptors, Pipes
Microservices mode (gRPC, Kafka, RabbitMQ)
Middleware vs Interceptors vs Filters
REST vs GraphQL APIs (Apollo, Mercurius, federation)
RBAC vs ABAC
Event-driven architecture (pub/sub, CQRS)

🔹 4. Databases & Persistence
Indexing strategies, query plans, normalization/denormalization
Transactions, isolation levels, deadlocks
CAP theorem, partitioning, replication, sharding
When to use key-value vs document vs column
Search engines: Elasticsearch, Meilisearch basics
ORMs vs Query Builders: TypeORM, Prisma, Sequelize vs Knex
Caching strategies: write-through, write-behind, cache invalidation

🔹 5. System Design & Architecture
Monolith vs Microservices vs Modular monolith

Event-driven architecture, CQRS, Event Sourcing

API Gateway patterns, BFF (Backend-for-Frontend)

Polyglot persistence (SQL + NoSQL)

Deployment patterns: rolling, blue/green, canary, shadow, feature flags

Scaling:

Horizontal vs vertical scaling

Load balancing (Nginx, Envoy, HAProxy, cloud LBs)

CDN usage

Distributed systems basics:

Consistency models, leader election, consensus algorithms (Raft, Paxos)

Idempotency, retries, eventual consistency

🔹 6. DevOps & Cloud

Containers: Docker, multi-stage builds, health checks

Orchestration: Kubernetes (AKS/EKS/GKE), Helm/Kustomize

CI/CD pipelines (GitHub Actions, GitLab CI, Azure DevOps)

Monitoring & Observability:

Prometheus + Grafana

ELK stack (Elastic, Logstash, Kibana)

OpenTelemetry (tracing)

Secrets & config management:

Vault / Azure Key Vault

12-factor app principles

Cloud providers:

AWS/GCP/Azure basics: storage, queues, DBaaS, networking

Serverless (Lambda, Cloud Functions, Azure Functions)

🔹 7. Testing & Quality

Unit tests (Jest, Vitest, Mocha)

Integration tests (supertest, Pact contract testing)

E2E (Cypress, Playwright)

API contract testing (OpenAPI validation, Dredd)

Load/stress testing (k6, Artillery, Locust)

Mutation testing (StrykerJS)

Test doubles: mocks, stubs, spies, fakes

🔹 8. Security & Compliance

Secure coding practices (XSS, CSRF, SQL injection, NoSQL injection)

Helmet, rate limiting, sanitization libraries

Encryption at rest vs in transit

GDPR/CCPA compliance for user data

PCI DSS basics (since you’ll use PayPal)

Audit logging, monitoring anomalies

🔹 9. Soft Skills & Leadership

Code reviews: giving constructive feedback, enforcing standards

Mentorship: guiding mid/junior devs

System design interviews (draw diagrams, trade-off discussions)

Agile practices: story splitting, estimation, prioritization

Communication with stakeholders, writing technical RFCs/ADR docs

🔹 10. Advanced Topics for Senior Edge

Functional programming concepts in JS (immutability, monads, FRP basics)

Clean Architecture, SOLID, Hexagonal, DDD applied to JS/TS

Performance tuning:

Node.js profiling with clinic.js, flamegraphs

Frontend bundle analysis & tree shaking

Resilience patterns:

Circuit breaker, bulkhead, retry/backoff

API versioning & backward compatibility

Observability-driven development (metrics + traces from day one)

<!--  -->

create monorepo skelethon of e-commerce app using Next NEST + TS
It should have services: 'orders, payments, users, products'x
