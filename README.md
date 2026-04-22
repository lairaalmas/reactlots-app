# ReactLots App

<!-- badges -->

[![License](https://img.shields.io/badge/license-MIT-green)](./LICENSE)
[![React](https://img.shields.io/badge/React-v19.2-61DAFB?logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-v5.9-3178C6?logo=typescript&logoColor=3178C6)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-v8.0-646CFF?logo=vite&logoColor=646CFF)](https://vite.dev/guide/)

<!-- discalimer + intro -->

⚠️ This is a fictional, fan-made project inspired by _The Sims 4_.

**Reactlots** is a diegetic real estate web application inspired by _The Sims 4_, where users can browse and explore lots as if they were part of the game world itself.

The application is designed to reflect how a character inside the game might experience a real estate platform. Because of that, real-world concepts are adapted to the game’s logic — for example, "cities" become "worlds", and neighborhoods follow the structure defined by the game.

Beyond its thematic layer, this project is also used as a **frontend architecture exercise**, focusing on production-like patterns such as data modeling, separation of concerns, and scalable data fetching.

**Author:** 🦖 [Laira Almas](https://github.com/lairaalmas) (2026)

## 🎯 What makes this project different

- Diegetic product design (UI and domain follow in-game logic)
- URL-driven search state using React Router loaders
- Backend-for-Frontend (BFF) layer inside the frontend
- Explicit DTO → Domain mapping (snake_case → camelCase)

<!-- current status -->

## 📌 Current Status ![Status](https://img.shields.io/badge/status-in%20progress-orange)

### Implemented

- Lot search with filters (world, neighborhood)
- URL-driven filtering via query params
- Lot detail page
- Backend integration (Reactlots API)
- BFF layer with DTO mapping

### In Progress

- Favorites feature
- Mobile responsiveness improvements

### Planned

- Advanced filters (bathrooms, bedrooms, price, etc.)
- Pagination
- i18n
- Error monitoring improvements

## ⚖️ Trade-offs and Decisions

- React Router loaders instead of React Query
- No generic API response wrapper
- BFF inside frontend for simplicity

## 🧩 Project Structure

This project is part of a multi-repository setup:

- [reactlots-api](https://github.com/lairaalmas/reactlots-api) → REST API (data source for the frontend)
- [reactlots-app](https://github.com/lairaalmas/reactlots-app) → Frontend application + BFF layer

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

More details? See [Project documentation](app/docs/README.md)

## 🔗 Useful links / references:

### The Sims 4 worlds

- **Oasis Springs:**
  - [The Sims Wiki - Oasis Springs](https://sims.fandom.com/wiki/Oasis_Springs)
  - [The Sims fan page - Oasis Springs](https://www.teoalida.com/thesims/Oasis-springs/)

- **Willow Creek:**
  - [The Sims Wiki - Willow Creek](https://sims.fandom.com/wiki/Willow_Creek)
  - [The Sims fan page - Willow Creek](https://www.teoalida.com/thesims/willow-creek/)

### Legal

- [About requesting permission to use EA games content](https://help.ea.com/za/help/faq/how-to-request-permission-for-ea-games-content/)

## ⚖️ Disclaimer

This is a fan-made, non-commercial project created for educational and portfolio purposes.

This project is not affiliated with, endorsed by, or sponsored by [Eletronic Arts](https://www.ea.com/ea-studios) or [Maxis](https://www.ea.com/ea-studios/maxis).

The Sims 4 and all related assets, including images and game data, are the property of Eletronic Arts Inc. and Maxis. Any use of such materials is for illustrative purposes only.

If you are a rights holder and would like any content to be removed, please contact me.

## 📄 License

This project is licensed under the MIT License.
