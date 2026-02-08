# Reactor

A React + TypeScript + Vite application for comparing and visualizing LLM-generated UI components. Reactor displays side-by-side comparisons of components created by different AI models (GPT-4, Claude, Gemini, etc.), showing prompts, rendered results, source code, and token usage metrics.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18.x or higher (20.x recommended)
- **npm**: Version 9.x or higher (comes with Node.js)

You can verify your installations by running:
```bash
node --version
npm --version
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd reactor
```

2. Install dependencies:
```bash
npm install
```

## Available Scripts

- **`npm run dev`** - Starts the development server with hot module replacement (HMR) at http://localhost:5173
- **`npm run build`** - Creates an optimized production build (runs TypeScript compilation followed by Vite build)
- **`npm run lint`** - Runs ESLint to check code quality and style
- **`npm run preview`** - Serves the production build locally for testing

## Project Structure

```
reactor/
├── src/                  # Source code
│   ├── components/       # Reusable UI components
│   ├── pages/            # Page-level components
│   ├── types/            # TypeScript type definitions
│   ├── data/             # Static data and mock data
│   ├── styles/           # Global styles
│   └── App.tsx           # Root component with routing
├── public/               # Static public assets
├── Auto Run Docs/        # Maestro automation documentation
├── CLAUDE.md             # AI agent development guidelines
└── guides.md             # Development workflow guide
```

## Development Guidelines

- **For AI Agents**: See [CLAUDE.md](./CLAUDE.md) for comprehensive project conventions, architecture patterns, and workflow expectations
- **For Developers**: See [guides.md](./guides.md) for operational instructions and best practices

## About the Stack

This project uses React + TypeScript + Vite for a modern, fast development experience.

### React Plugins

Two official Vite plugins are available for React:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

This project uses `@vitejs/plugin-react` for Fast Refresh.

### React Compiler

The React Compiler is not enabled in this project due to its impact on dev & build performance. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

### Expanding the ESLint Configuration

For production applications, you can update the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
