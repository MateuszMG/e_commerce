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
