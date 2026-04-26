# Development

This section provides the necessary information to run, maintain, and evolve the project locally.

It includes setup instructions, tooling configuration, and guidelines for modifying the codebase.

## 🛠️ Tech Stack

| Technology                                                                   | Version | Info                                                     |
| ---------------------------------------------------------------------------- | ------- | -------------------------------------------------------- |
| [React](https://react.dev/)                                                  | 19.2.4  | JavaScript library for building user interfaces          |
| [React Router](https://reactrouter.com/)                                     | 7.13.2  | Client-side routing with loader based data fetching      |
| [TypeScript](https://www.typescriptlang.org/)                                | 5.9.3   | Adds type checking to JavaScript                         |
| [Vite](https://vite.dev/guide/)                                              | 8.0.1   | Fast building tool                                       |
| [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/) | 5.3.8   | CSS framework for responsive components using classNames |
| [Node.js](https://nodejs.org/en/blog/release/v24.14.1)                       | 24.14.1 | Runtime used for local development and tooling           |
| ESLint                                                                       | 9.39.4  | Code linting with typescript validation                  |
| Prettier                                                                     | 3.8.1   | Automated code formatting for consistency                |
| [Bootstrap Icons](https://icons.getbootstrap.com/)                           | 1.13.1  | Bootstrap icon library                                   |
| [Material Symbols](https://fonts.google.com/icons)                           | 0.44.0  | Google Material Design icons                             |

## ⚙️ Development Setup

### Install dependencies

```bash
npm i
```

### Configure environment variables

Create a `.env` file on the root of the project based on the `.env.example`.

```bash
VITE_API_BASE_URL= # insert the Reactlots API base URL here
```

### Run the application

```bash
npm run dev
```

### (Optional) Recommended VSCode configuration

Update local vscode config file to enforce lint/prettier:

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

The project enforces code quality with rules focused on:

- strict equality (`===`)
- TypeScript best practices
- React Hooks validation
- consistent imports and code organization

Run linting with:

```bash
npm run lint
```

### Available scripts

| Script            | Purpose                                             |
| ----------------- | --------------------------------------------------- |
| `npm run dev`     | Start Vite local server in `http://localhost:5173/` |
| `npm run build`   | TypeScript check + Production build                 |
| `npm run lint`    | Run ESLint on all files                             |
| `npm run preview` | Preview production build locally                    |

## ✏️ File Modification Guide

The following guidelines describe how to extend the project while keeping the current architecture consistent.

### Adding a new page

1. Create the page component in `app/pages/YourNewPage/index.tsx`
2. Define the loader in `app/utils/loaders.tsx` (if data is required)
3. Add the route in `router.tsx`
4. Ensure the page consumes **domain data**, not DTOs
5. (Optional) Add to header navigation

### Adding a new API endpoint

1. Create the DTO in `api/types/entityDTO.ts`
2. Create a request function in `api/requests/entity.ts`
3. Create the mapper in `api/mappers/entity.ts`
4. Use the request inside a loaders `app/utils/loaders.tsx`

### Modifying component styling

1. Global styles: `app/style.css`
2. Bootstrap utility classes in JSX

## 🧠 Development Principles

- Keep UI components focused on rendering, not data fetching
- Always map API responses (DTO) to domain models before use
- Centralize API calls inside the api/ layer
- Prefer loaders for data fetching instead of component-level effects
