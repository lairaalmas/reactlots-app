# About this project

This project was created for portfolio and educational purpuses. This documentation is not only intended for understanding the project, but the decisions behind it, specially if you are interested in building similar web apps. ❤️

## Tech Stack

- React v19.2
- TypeScript
- Vite v8.1
- Bootstrap v5.3
- Node.js v24.14.1

## The innitial scaffolding of the project was built with [vite](https://vite.dev/)

- Vite

## Folder structure

```
src/
├── app
├── components
├── hooks
├── layouts
├── pages
├── services
├── types
├── utils

```

- `app`: global config, routes, providers
- `components`: reusable components
- `doc`: documentation
- `hooks`: reusable hooks
- `layouts`:
  - reusable page structures, eg RootLayout
  - (with header, )
- `pages`:
  - screens integrated with a route
  - full page
- `services`: API calls
- `types`: shared types
- `utils`: pure helpers

```
src/
├── app/
│   ├── routes.tsx
│   └── paths.ts
├── components/
│   ├── property-card/
│   │   └── PropertyCard.tsx
│   ├── property-filters/
│   │   └── PropertyFilters.tsx
│   └── states/
│       ├── LoadingState.tsx
│       ├── ErrorState.tsx
│       └── EmptyState.tsx
├── hooks/
│   ├── useFavorites.ts
│   ├── useProperties.ts
│   └── usePropertyDetails.ts
├── layouts/
│   └── RootLayout.tsx
├── pages/
│   ├── catalog/
│   │   └── CatalogPage.tsx
│   ├── favorites/
│   │   └── FavoritesPage.tsx
│   └── property-detail/
│       └── PropertyDetailPage.tsx
├── services/
│   ├── api.ts
│   └── propertiesService.ts
├── types/
│   └── async-state.ts
└── utils/
    ├── formatPrice.ts
    └── mapFiltersToQuery.ts
```
