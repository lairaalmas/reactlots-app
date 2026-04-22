# Development

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
