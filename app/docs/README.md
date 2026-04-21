# Reactlots App - Project Documentation

This project was created for portfolio and educational purposes. This documentation is not only intended for understanding the project, but the decisions behind it, specially if you are interested in building similar web apps. ❤️

<!-- What is it? -->

## 🏠 Project overview

**Reactlots** is a real estate web application where users can browse and explore lots from _The Sims 4_ as if they were part of the game world. Users can filter properties by worlds and neighborhoods, view detailed property information, and save favorite lots.

**Key features**

- Filter lots by world and neighborhood
- View individual lot detail pages
- Favorites management (WIP 🚜)
- Mobile friendly responsive design (WIP 🚜)

<!-- How is it organized? -->

## 🧩 Architecture Overview

```
┌─────────────────────────────────────┐
│         React Components            │  ← User Interface Layer
│    (Components, Pages, Layouts)     │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│    Backend-for-Frontend (BFF)       │  ← Data transformation Layer
│ (Requests, Mappers, DTOs, Config)   │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│      External REST API              │  ← Backend Service
│  (Reactlots API - separate repo)    │
└─────────────────────────────────────┘
```

**Why this structure?**

- **Separation of Concerns:** UI logic, data transformation, and API communication are isolated
- **Type Safety:** DTOs (Data Transfer Objects) map API schemas to domain types
- **Reusability:** BFF layer can be shared across different frontends
- **Maintainability:** Changes to API schema only affect the mapper layer

**Backend service**

- Clone the [reactlots-api](https://github.com/lairaalmas/reactlots-api) project to access the static data used in this application

<!-- What was it build with? -->

## 🛠️ Tech Stack

| Technology                                                                   | Version | Info                                                     |
| ---------------------------------------------------------------------------- | ------- | -------------------------------------------------------- |
| [React](https://react.dev/)                                                  | 19.2.4  | JavaScript library for building component-based UI       |
| [React Router](https://reactrouter.com/)                                     | 7.13.2  | Client-side routing with loader based data fetching      |
| [TypeScript](https://www.typescriptlang.org/)                                | 5.9.3   | Adds type checking to JavaScript                         |
| [Vite](https://vite.dev/guide/)                                              | 8.0.1   | Fast building tool                                       |
| [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/) | 5.3.8   | CSS framework for responsive components using classNames |
| [Node.js](https://nodejs.org/en/blog/release/v24.14.1)                       | 24.14.1 |
| ESLint                                                                       | 9.39.4  | Code linting with typescript validation                  |
| Prettier                                                                     | 3.8.1   | Automated code formatting for consistency                |
| [Bootstrap Icons](https://icons.getbootstrap.com/)                           | 1.13.1  | Bootstrap icon library                                   |
| [Material Symbols](https://fonts.google.com/icons)                           | 0.44.0  | Google Material Design icons                             |

<!-- Where is everything? -->

## 📁 Folder Structure

**Some references:**

- [React folder strucutre in 5 steps (2025)](https://www.robinwieruch.de/react-folder-structure/)
- [The Complete Guide to Folder Structures in React (2025 video)](https://www.youtube.com/watch?v=_bIJoOriBxA)
- [3 Folder Structures in React I’ve Used — And Why Feature-Based Is My Favorite (2025)](https://asrulkadir.medium.com/3-folder-structures-in-react-ive-used-and-why-feature-based-is-my-favorite-e1af7c8e91ec)

### 📦 Project root

```bash
.
├── .vscode/        # VSCode workspace settings (content is not being tracked)
├── app/            # Frontend application (see next sections)
├── api/            # Backend-for-Frontend layer (see next sections)
├── index.html          # HTML entry point for Vite
├── README.md           # Main project documentation
├── LICENSE             # Project license
├── .env                # Environment variables (not being tracked)
├── .env.example        # Environment variables template
├── .gitignore          # Files to be ignored by git
├── .nvmrc              # Node.js version specification
├── .prettierrc         # Prettier code formatting configuration
├── eslint.config.js    # ESLint configuration (flat config v9+)
├── package.json        # Project dependencies and npm scripts
├── package-lock.json   # Locked dependency versions
├── tsconfig.json       # TypeScript configuration (root reference)
├── tsconfig.app.json   # TypeScript config for app/ (client-side)
├── tsconfig.node.json  # TypeScript config for tooling (Node.js)
└── vite.config.ts      # Vite build tool configuration
```

### ⚛️ Frontend Layer

```bash
app/
├── pages/        # Route-specific components
├── components/   # Reusable UI components
├── layouts/      # Layout templates
├── types/        # TypeScript domain types
├── utils/        # Utility functions
├── assets/       # Static assets (images, icons, etc.)
├── docs/         # Project documentation
├── main.tsx         # React entry point
├── router.tsx       # Route definitions
└── style.css        # Global styles
```

<!-- ├── hooks/        # Custom React hooks (WIP 🚜) -->

- pages/

```bash
└── pages/
    ├── HomePage/       # Main page with search & results
    ├── LotPage/        # Individual lot detail page
    ├── ContactPage/    # Fictional contact information
    ├── FavoritesPage/  # Saved favorites (WIP 🚜)
    └── ErrorPage/      # Error boundary
```

- components/

```bash
└── components/
    ├── Header/         # Navigation bar
    ├── Footer/         # Footer with disclaimers
    ├── SearchForm/     # Filter dropdowns (World, Neighborhood)
    ├── SearchResults/  # List of lot cards
    ├── Card/           # Individual lot card
    ├── Banner/         # Banner with image
    ├── PageContent/    # Content wrapper with Suspense (for lazy loading)
    └── PageLoader/     # Loading indicator
```

- layouts/

```bash
└── layouts/
    └── RootLayout/     # Three-section layout (Header → Content → Footer)
```

- types/

```bash
└── types/
    ├── lot.ts          # Lot type
    ├── neighborhood.ts # Neighborhood type
    └── world.ts        # World/location type
```

<!-- - hooks/

```bash
└── hooks/
``` -->

- utils/

```bash
└── utils/
  ├── constants.ts   # App constants
  └── loaders.tsx    # React Router loaders for data fetching
```

### 🎲 Backend-for-frontend (BFF) Layer

```bash
api/
├── config/
├── types/        # DTOs (API response schemas)
├── requests/     # API call functions
└── mappers/      # DTO → Domain type transformers (snake_case → camelCase)
```

<!-- └── mocks/        # Mock data for development -->

- config/

```bash
└── config/
    └── env.ts   # Environment configuration (API_BASE_URL)
```

- types/

```bash
└── types/
    ├── lotDTO.ts
    ├── neighborhoodDTO.ts
    └── worldDTO.ts
```

- requests/

```bash
└── requests/
    ├── getLots.ts            # Fetch lots (with optional filters) or lot by id
    ├── getNeighborhoods.ts   # Fetch all neighborhoods
    └── getWorlds.ts          # Fetch all worlds
```

- mappers/

```bash
└── mappers/
    ├── lot.ts          # Maps LotDTO to Lot (snake_case → camelCase)
    ├── neighborhood.ts # Maps NeighborhoodDTO to Neighborhood
    └── world.ts        # Maps WorldDTO to World
```

<!-- - mocks/

```bash
└── mocks/
    ├── lot.ts
    ├── neighborhood.ts
    ├── world.ts
    └── utils.ts
``` -->

<!-- How does it work? -->

## 🔄 Data Flow

### Home page search flow

1. **User** navigates to homepage (`/`)
2. **React Router** triggers `homePageLoader`
3. **Loader** fetches data in parallel:
   - `getWorlds()` → API → Map `WorldDTO[]` → `World[]`
   - `getNeighborhoods()` → API → Map `NeighborhoodDTO[]` → `Neighborhood[]`
   - `getLots(filters?)` → API → Map `LotDTO[]` → `Lot[]`

4. **Loader** returns: `{ lots, worlds, neighborhoods, filters }`
5. `HomePage` receives data via `useLoaderData()` hook
6. **Components** render:
   - `SearchForm` populates dropdowns from worlds/neighborhoods
   - `SearchResults` displays `Lot[]` as `Card` components

7. **User** changes filters → `SearchForm` updates URL query params
8. **Router** re-runs loader with new params → Data refreshes

### Lot detail page flow

1. **User** clicks **lot card** or navigates to `/lots/:id`
2. **React Router** triggers `lotPageLoader` with params
3. **Loader** calls `getLotById(id)` → `API` → Map `LotDTO` → `Lot`
4. `LotPage` receives `Lot` via `useLoaderData()` hook
5. `LotPage` renders detailed property information

<!-- How it handles scenarios? -->

## ⏳ Loading & Error Handling

The application uses dedicated components to manage loading states and errors:

**Loading States**

- **PageLoader** (`app/components/PageLoader/`)
  - Displays a loading indicator while data is being fetched
  - Used as a **Suspense** fallback in `PageContent` component
  - Provides visual feedback during initial page load and data transitions
- **Suspense Integration** (`app/components/PageContent/`)
  - Wraps page content with React's Suspense boundary
  - Automatically shows `PageLoader` while lazy-loaded pages render
  - Improves perceived performance through code splitting

**Error Handling**

- **ErrorPage** (`app/pages/ErrorPage/`)
  - Acts as an error boundary to catch runtime errors
  - Displays error information and recovery options
  - Prevents the entire app from crashing due to component errors
  - Integrated into the router to handle route errors and data fetching failures

**Data Fetching Errors**

- React Router loaders (`app/utils/loaders.tsx`) handle API errors:
  - Failed requests throw errors that are caught by ErrorPage
  - Provides graceful fallback UI instead of blank screens
  - Includes navigation back to homepage or retry options

<!-- Why is it this way? -->

## 🎯 Key Design Patterns

- **Backend-for-Frontend (BFF) Pattern**
  - Dedicated `/api/` layer handles all API communication
  - Decouples frontend UI from backend API schema
  - Single source of truth for API integration

- **DTO Mapping Pattern**
  - API responses use **snake_case** (LotDTO type, lot_details, image_url)
  - Frontend domain types use **camelCase** (Lot type, lotDetails, imageUrl)
  - Mappers provide clean transformation layer

- **React Router Loaders**
  - Data fetching happens **before** component rendering
  - Avoids "loading then rendering" pattern
  - URL query params drive data fetching (e.g., `?world=willow-creek&neighborhood=foundry-cove`)

- **Code Splitting and Lazy Loading**
  - Pages are code-split with `React.lazy()`
  - PageContent component uses `Suspense` for loading fallback
  - Improves initial page load performance

<!-- Available endpoints -->

## 🔗 API Endpoints Reference

The BFF layer consumes the following endpoints from the Reactlots API. For detailed information, see the [reactlots-api](https://github.com/lairaalmas/reactlots-api) repository.

### Lots

- **GET `/lots`** - Fetch all lots with optional filters
  - Query params (optional): `?world=willow-creek&neighborhood=foundry-cove`
  - Returns: `LotDTO[]`
  - Used for: searching lots

- **GET `/lots/:id`** - Fetch a single lot by ID
  - Path param (required): `id` (lot identifier)
  - Returns: `LotDTO`
  - Used for: rendering lot detail page info

### Neighborhoods

- **GET `/neighborhoods`** - Fetch all neighborhoods
  - Returns: `NeighborhoodDTO[]`
  - Used for: setting dropdown options in neighborhood filter

### Worlds

- **GET `/worlds`** - Fetch all worlds
  - Returns: `WorldDTO[]`
  - Used for: setting dropdown options in world filter

<!-- How to get started? -->

## ⚙️ Development Setup

### Install project dependencies

```bash
npm i
```

### Setup environment variables

Create a `.env` file on the root of the project based on the `.env.example`.

```bash
VITE_API_BASE_URL= # insert the react lots api base url here
```

### (Optional) Update local vscode config file to enforce lint/prettier:

```
{
  "editor.formatOnSave": true,
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

### ESLint Configuration

The project enforces code quality with strict ESLint rules:

- **Strict Equality:** All comparisons use `===` instead of `==`
- **Type Safety:** TypeScript strict mode with `consistent-type-imports` and `no-explicit-any` warnings
- **React Hooks Validation:** Ensures hooks are used correctly via `eslint-plugin-react-hooks`
- **Code Organization:** No duplicate imports, no console statements in production code
- **React Refresh Support:** Hot module replacement compatibility

Run linting with `npm run lint` to check for violations.

### Available scripts

| Script            | Purpose                                             |
| ----------------- | --------------------------------------------------- |
| `npm run dev`     | Start Vite local server in `http://localhost:5173/` |
| `npm run build`   | TypeScript check + Production build                 |
| `npm run lint`    | Run ESLint on all files                             |
| `npm run preview` | Preview production build locally                    |

<!-- File modification guide -->

## ✏️ File Modification Guide

### Adding a new page

1. Create page component in `app/pages/YourNewPage/index.tsx`
2. Create a loader in `app/utils/loaders.tsx`
3. Add route in `router.tsx`
4. (Optional) import in header navigation links

### Adding a new API endpoint

1. Create DTO type in `api/types/entityDTO.ts`
2. Create request function in `api/requests/entity.ts`
3. Create mapper in `api/mappers/entity.ts`
4. Use in loaders via `app/utils/loaders.tsx`

### Modifying component styling

1. Global styles: `app/style.css`
2. Bootstrap utility classes in JSX
