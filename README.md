# ReactLots App

<!-- badges -->

[![License](https://img.shields.io/badge/license-MIT-green)](./LICENSE)
[![React](https://img.shields.io/badge/React-v19.2-61DAFB?logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-v5.9-3178C6?logo=typescript&logoColor=3178C6)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-v8.0-646CFF?logo=vite&logoColor=646CFF)](https://vite.dev/guide/)

<!-- discalimer + intro -->

⚠️ This is a fictional, fan-made project inspired by _The Sims 4_.

**Reactlots** is a diegetic real estate web application inspired by _The Sims 4_, where users can browse and explore lots as if they were part of the game world itself.

The application is intentionally designed to reflect how a character inside the game might experience a real estate platform. Because of that, real-world concepts are adapted to the game’s logic — for example, "cities" become "worlds", and neighborhoods follow the structure defined by the game.

Beyond its thematic layer, the project is also built as a **frontend architecture exercise**, focusing on production-like patterns such as data modeling, separation of concerns, and scalable data fetching strategies.

This means the project combines:

- Product design decisions driven by a fictional universe
- Technical decisions aligned with real-world frontend applications

This approach helps explore how domain modeling and UI decisions change when the system is driven by narrative constraints instead of real-world conventions.

**Key features**

- Filter lots by world and neighborhood
- View individual lot detail pages

## 📌 Current Status ![Status](https://img.shields.io/badge/status-in%20progress-orange)

### ✅ Implemented

- Lot search with filters (world, neighborhood)
- Lot detail pegae
- URL-driven filtering via query params
- Backend integration with [reactlots-api](https://github.com/lairaalmas/reactlots-api)
- BFF layer with DTO mapping

### 🚧 In Progress

- Advanced filters (bathrooms, bedrooms, price, etc.)

### 🚀 Future improvements

- Add favorites feature
- Improve mobile responsiveness
- Add pagination strategy aligned with backend
- Add i18n
- Introduce error monitoring (metrics / logs)
- Introduce caching strategy
- Improve accessibility and keyboard navigation

## 🚀 Future Improvements

## 🧩 Project Structure

This project is part of a multi-repository setup:

- [reactlots-api](https://github.com/lairaalmas/reactlots-api) → data source
- [reactlots-app](https://github.com/lairaalmas/reactlots-app) → frontend + BFF

## ▶️ Getting Started

### Install dependencies

```bash
npm i
```

### Setup environment variables

Create a `.env` file on the root of the project based on the `.env.example`.

```bash
VITE_API_BASE_URL= # insert the react lots api base url here
```

### Run the app

```bash
npm run dev
```

## 📚 Documentation

See full documentation in: [app/docs/README.md](app/docs/README.md)

## 👤 Author

🦖 [Laira Almas](https://github.com/lairaalmas) (2026)

## ⚖️ Disclaimer

This is a fan-made, non-commercial project created for educational and portfolio purposes.

This project is not affiliated with, endorsed by, or sponsored by [Eletronic Arts](https://www.ea.com/ea-studios) or [Maxis](https://www.ea.com/ea-studios/maxis).

The Sims 4 and all related assets, including images and game data, are the property of Eletronic Arts Inc. and Maxis. Any use of such materials is for illustrative purposes only.

If you are a rights holder and would like any content to be removed, please contact me.

## 📄 License

This project is licensed under the MIT License.
