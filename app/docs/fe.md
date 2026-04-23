# Frontend

The frontend layer is responsible for rendering the UI and orchestrating user interactions.

It consumes domain models provided by the BFF layer and never interacts directly with raw API responses.

## 📂 Folder structure

The frontend is organized by responsibility, separating reusable components, pages, and layout structure.

```bash
app/
├── assets/
├── components/
│   ├── Header/         # Navigation bar
│   ├── Footer/         # Footer with disclaimers
│   ├── SearchForm/     # Filter dropdowns (World, Neighborhood)
│   ├── SearchResults/  # List of lot cards
│   ├── Card/           # Individual lot card
│   ├── Banner/         # Banner with image
│   ├── PageContent/    # Content wrapper with Suspense (for lazy loading)
│   └── PageLoader/     # Loading indicator
├── docs/
├── hooks/
├── layouts/
│   └── RootLayout/     # Three-section layout (Header → Content → Footer)
├── pages/
│   ├── HomePage/       # Main page with search & results
│   ├── LotPage/        # Individual lot detail page
│   ├── ContactPage/    # Fictional contact information
│   ├── FavoritesPage/  # Saved favorites
│   └── ErrorPage/      # Error boundary
├── types/
│   ├── lot.ts          # Lot type
│   ├── neighborhood.ts # Neighborhood type
│   └── world.ts        # World/location type
└── utils/
  ├── constants.ts   # App constants
  └── loaders.tsx    # React Router loaders for data fetching
```

## ⏳ Rendering, Loading & Error Handling

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

## 🧠 Key Principles

- UI components are focused on rendering, not data fetching
- All data is provided by route loaders
- Components consume domain models only
- Layout structure is centralized in `RootLayout`
