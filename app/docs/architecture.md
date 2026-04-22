# System Architecture

## 🌱 Overview

The application is structured into 3 logic layers:

- **Frontend layer**
  - Diegetic UI Layer
  - **Folder:** `app/` with pages, components, layouts
- **Backend-for-frontend layer**
  - Responsible for data transformation
  - **Folder:** `api/` with request, mappers, DTOs, configs
  - Consumes data from the **Reactlot API**
    - Clone the [reactlots-api](https://github.com/lairaalmas/reactlots-api) project to run the backend service that provides data for this application.

```mermaid
flowchart LR
  UI["Frontend<br/>(Diagetic UI Layer)"]
  BFF["Backend-for-Frontend (BFF)<br/>(Data transformation)"]
  API["External REST API<br/>(Data source)<!--<br/><hr/>Repo: reactlots-api-->"]

  UI --> BFF
  BFF --> API
```

## 🧭 How to read this project

If you're exploring the codebase for the first time, this is a recommended path:

- Start from `app/router.tsx` to understand how routes are defined
- **Loaders** (in `app/utils/loaders.tsx`) define data fetching
- The `api/` layer is responsible for:
  - calling the backend
  - mapping DTO → domain
- pages only consume **domain models**, never raw API responses
- The `RootLayout` defines the shared structure (Header → Content → Footer)

This structure ensures a clear separation between UI, data fetching, and data transformation.

## 📁 Folder Structure

```bash
.
├── app/          # Frontend layer 👈
│   ├── assets/         # Static assets (images, icons, etc.)
│   ├── components/     # Reusable UI components
│   ├── docs/           # Project documentation
│   ├── hooks/          # Custom React hooks
│   ├── layouts/        # Layout templates
│   ├── pages/          # Route-specific components
│   ├── types/          # TypeScript domain types
│   ├── utils/          # Utility functions
│   ├── main.tsx            # React entry point
│   ├── router.tsx          # Route definitions
│   └── style.css           # Global styles
├── api/          # Backend-for-Frontend layer 👈
│   ├── config/       # Environment config
│   ├── types/        # DTOs (API response schemas)
│   ├── requests/     # API call functions
│   ├── mappers/      # DTO → Domain type transformers (snake_case → camelCase)
│   └── mocks/        # Mocked data
├── index.html            # HTML entry point for Vite
├── README.md             # Main project documentation
├── LICENSE               # Project license
├── .env.example          # Environment variables template
├── .gitignore            # Files to be ignored by git
├── .nvmrc                # Node.js version specification
├── .prettierrc           # Prettier code formatting configuration
├── eslint.config.js      # ESLint configuration (flat config v9+)
├── package.json          # Project dependencies and npm scripts
├── package-lock.json     # Locked dependency versions
├── tsconfig.json         # TypeScript configuration (root reference)
├── tsconfig.app.json     # TypeScript config for app/ (client-side)
├── tsconfig.node.json    # TypeScript config for tooling (Node.js)
└── vite.config.ts        # Vite build tool configuration
```

## 🎯 Design Principles

- **Diegetic domain modeling** - concepts are adapted to the game universe instead of real-world conventions.
- **URL as source of truth** - search state is driven by query parameters, enabling predictable navigation.
- **Separation of concerns** - UI logic, data transformation and API communication are isolated into distinct layers (`app/` and `api/`). It helps with:
  - **Maintainability** - Changes to API schema only affect the mapper layer
  - **Reusability** - BFF layer can be shared across different frontends
- **Type Safety** - DTOs (Data Transfer Objects) map API schemas to domain types

  ```mermaid
  flowchart LR
    API["API Response<br/>(DTO)"]
    Mapper["Mapper"]
    Domain["Domain Model"]
    UI["UI"]

    API --> Mapper --> Domain --> UI
  ```

## 🎯 Key Design Patterns

- **Backend-for-Frontend (BFF) Pattern**
  - Dedicated `api/` layer handles all API communication
  - Decouples frontend UI from backend API schema
  - Single source of truth for API integration

- **DTO Mapping Pattern**
  - API responses use **snake_case** (`LotDTO type, lot_details, image_url`)
  - Frontend domain types use **camelCase** (`Lot type, lotDetails, imageUrl`)
  - Mappers provide clean transformation layer

- **Code Splitting and Lazy Loading**
  - Pages are code-split with `React.lazy()`
  - `PageContent` component uses `Suspense` for loading fallback
  - Improves initial page load performance

- **React Router Loaders**
  - Data fetching happens **before** component rendering
  - URL query params drive data fetching (e.g., `?world=willow-creek&neighborhood=foundry-cove`)

## 🔁 Routing and Data Loading

**React Router** is responsible for both routing and data fetching. Loaders ensure data is available before rendering.

```mermaid
sequenceDiagram
    participant User
    participant Router as Router<br/>app/router.tsx
    participant Loader as Loader<br/>app/utils/loaders.tsx
    participant API
    participant Mapper as Mapper<br/>api/mappers/
    participant UI as UI<br/>app/pages/

    User->>Router: Navigate
    Router->>Loader: Trigger loader
    Loader->>API: Fetch data
    API-->>Loader: Response
    Loader->>Mapper: Map to domain data
    Mapper-->>Loader: Domain data
    Loader-->>Router: Data
    Router->>UI: Render
```

## 🔁 Key user Flows

#### Home page search flow

```mermaid
sequenceDiagram
  participant User
  participant Router
  participant Loader
  participant API
  participant Mapper
  participant UI

  User->>Router: Navigate to "/"
  Router->>Loader: Trigger homePageLoader
  Loader->>API: getWorlds()
  Loader->>API: getNeighborhoods()
  Loader->>API: getLots(filters?)
  API-->>Loader: DTOs

  Loader->>Mapper: Map DTO → Domain
  Mapper-->>Loader: Domain data

  Loader->>UI: { lots, worlds, neighborhoods, filters }
  UI-->>User: Render page
  User->>Router: Update filters<br/>("?world=&neighborhood=")
  Router->>Loader: Re-run loader
```

#### Lot detail page flow

```mermaid
sequenceDiagram
  participant User
  participant Router as Router<br/>app/router.tsx
  participant Loader as Loader<br/>app/utils/loaders.tsx
  participant API
  participant Mapper as Mapper<br/>api/mappers/index.tsx
  participant UI as UI<br/>app/pages/LotPage/<br/>index.tsx

  User->>Router: Click lot card<br/>or navigate to "/lots/:id"
  Router->>Loader: Trigger lotPageLoader
  Loader->>API: getLotsById(id)
  API-->>Loader: LotDTO

  Loader->>Mapper: Map DTO → Domain
  Mapper-->>Loader: Lot

  Loader ->> UI: Lot data
  UI-->>User: Render page
```

## ⚖️ Trade-offs and Decisions

- **React Router loaders instead of React Query:** for simplicity and control
- **No generic API response wrapper:** simplifies early development
- **DTO vs Domain:** avoids leaking API structure into UI
- **Responsibility-based API structure:** improves scalability over domain-based grouping.
