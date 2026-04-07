# About this project

This project was created for portfolio and educational purpuses. This documentation is not only intended for understanding the project, but the decisions behind it, specially if you are interested in building similar web apps. ❤️

## Tech Stack

- [React](https://react.dev/) v19.2
- [TypeScript](https://www.typescriptlang.org/) v5.9
- [Vite](https://vite.dev/guide/) v8.0
- [Bootstrap v5.3.8](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- [Node.js v24.14.1](https://nodejs.org/en/blog/release/v24.14.1)

## Repositories

- [reactlots-app](https://github.com/lairaalmas/reactlots-app) → Frontend + BFF layer 
  - 📍 You are here!
- [reactlots-api](https://github.com/lairaalmas/reactlots-api) → Static data API 
  - ⚠️ WIP

## The innitial scaffolding of the project was built with [vite](https://vite.dev/)

`npm create vite@latest`

## Folder structure (Folder by type)

- About folder structures: 
  - [React folder strucutre in 5 steps (2025)](https://www.robinwieruch.de/react-folder-structure/)
  - [The Complete Guide to Folder Structures in React (2025 video)](https://www.youtube.com/watch?v=_bIJoOriBxA)
  - [3 Folder Structures in React I’ve Used — And Why Feature-Based Is My Favorite (2025)](https://asrulkadir.medium.com/3-folder-structures-in-react-ive-used-and-why-feature-based-is-my-favorite-e1af7c8e91ec)

```
src/
├── app
├── docs
├── components
├── hooks
├── layouts
├── pages
├── services
├── types
└── utils
```

- `app`: global config, routes, providers
- `components`: reusable components
  - (reusable components)
- `doc`: project documentation
- `hooks`: reusable hooks
- `layouts`:
  - reusable page structure (header + dynamic body + footer)
- `pages`:
  - full screen integrated with a route
- `services`: API calls
- `types`: shared types
- `utils`: pure helpers

```
src/
├── app/
│   ├── routes.tsx
│   └── paths.ts
├── components/
│   ├── Footer/index.tsx ✅
│   ├── Header/index.tsx ✅
│   ├── PageLoader/index.tsx ✅
│   └── states/
│       ├── LoadingState.tsx
│       ├── ErrorState.tsx
│       └── EmptyState.tsx
├── hooks/
│   ├── useFavorites.ts
│   ├── useProperties.ts
│   └── usePropertyDetails.ts
├── layouts/ ✅
│   └── RootLayout/index.tsx ✅
├── pages/
│   ├── AboutPage/index.tsx ✅
│   ├── ErrorPage/index.tsx ✅
│   ├── FavoritesPage/index.tsx ✅
│   ├── HomePage/index.tsx ✅
│   └── LotPage/index.tsx ✅
├── services/
│   ├── api.ts
│   └── propertiesService.ts
├── types/
│   └── async-state.ts
└── utils/
    ├── formatPrice.ts
    └── mapFiltersToQuery.ts
```
