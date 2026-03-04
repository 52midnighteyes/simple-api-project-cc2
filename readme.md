# Express TypeScript API Boilerplate (Modules-Based)

Personal boilerplate for building REST APIs with **Express + TypeScript** using a **modules-based structure** (each feature lives in one folder: route/controller/service/repo/types).

## Stack

- Node.js + Express
- TypeScript
- ESM (`"type": "module"`)
- Nodemon + TSX (dev)
- ESLint + Prettier

## Why this repo exists

This repo is a reusable backend starter so future projects can start fast with:

- clean TS setup
- consistent lint + formatting
- predictable folder structure
- scalable modules pattern (easy to find files per feature)

## Folder Structure

express/
├─ src/
│ ├─ class/
│ │ └─ appError.ts
│ ├─ config/
│ │ └─ config.ts
│ ├─ middlewares/
│ │ └─ errorHandler.ts
│ ├─ modules/
│ │ └─ (feature modules live here)
│ │ ├─ user/
│ │ │ ├─ user.route.ts
│ │ │ ├─ user.controller.ts
│ │ │ ├─ user.service.ts
│ │ │ ├─ user.repository.ts
│ │ │ ├─ user.schema.ts
│ │ │ └─ user.types.ts
│ │ └─ ...
│ ├─ routes/
│ │ └─ app.ts
│ ├─ app.ts
│ └─ server.ts
├─ eslint.config.js
├─ nodemon.json
├─ tsconfig.json
├─ package.json
├─ package-lock.json
└─ .prettierrc

## Modules Pattern (how to use it)

Each feature goes into `src/modules/<feature>/` so everything related to that feature stays together.

Typical flow:
route -> controller -> service -> repository

### Responsibilities

- **route**: define endpoints + attach middlewares
- **controller**: HTTP layer (req/res), call service, return response
- **service**: business logic
- **repository**: database/data access (Prisma/SQL/in-memory)
- **schema**: request validation (if you use Zod/Yup)
- **types**: TS types/interfaces for the feature
