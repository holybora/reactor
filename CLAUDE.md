# CLAUDE.md - Project Guide for Claude Code Agents

This document provides comprehensive guidance for AI-assisted development on the Reactor project.

## Project Overview

**Reactor** is a React + TypeScript + Vite application designed to compare and visualize LLM-generated UI components. The application displays side-by-side comparisons of components created by different AI models (GPT-4, Claude, Gemini, etc.), showing prompts, rendered results, source code, and token usage metrics.

**Tech Stack:**
- **Frontend Framework:** React 19.2.0
- **Language:** TypeScript 5.9.3 with strict mode enabled
- **Build Tool:** Vite 7.2.4
- **Routing:** React Router DOM 7.13.0
- **Styling:** CSS Modules
- **Linting:** ESLint 9.39.1 with TypeScript ESLint

## Architecture

### Project Structure

```
reactor/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Layout/       # Layout components (Header, etc.)
│   │   └── CompCard/     # LLM comparison card component
│   ├── pages/            # Page-level components
│   │   └── HomePage.tsx  # Main landing page
│   ├── types/            # TypeScript type definitions
│   │   ├── comparison.ts # LLM comparison interfaces
│   │   └── index.ts      # Type exports
│   ├── data/             # Static data and mock data
│   ├── styles/           # Global styles
│   ├── assets/           # Static assets (images, fonts)
│   ├── App.tsx           # Root component with routing
│   └── main.tsx          # Application entry point
├── public/               # Static public assets
├── dist/                 # Production build output (generated)
├── node_modules/         # Dependencies (generated)
└── Auto Run Docs/        # Maestro automation documentation
```

### Component Patterns

**Functional Components:** All components are functional components using React Hooks.

**Example Component Structure:**
```typescript
import type { ReactNode } from 'react';
import styles from './Component.module.css';

interface ComponentProps {
  /** JSDoc description */
  prop: string;
  children?: ReactNode;
}

/**
 * Component description
 */
export function Component({ prop, children }: ComponentProps) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}
```

**Key Patterns:**
- Use named exports for components: `export function ComponentName() {}`
- Use CSS Modules for component-specific styling
- Define TypeScript interfaces for all component props
- Use JSDoc comments for interface properties
- Import types with `import type` syntax

### State Management Approach

Currently, the application uses **local component state** with React Hooks:
- `useState` for component-level state
- `useEffect` for side effects
- Props for parent-to-child data flow
- React Router for navigation state

**No global state management library** (Redux, Zustand, etc.) is currently implemented. If the application grows to require shared state across many components, consider adding a state management solution.

### Path Aliases

The project uses path aliases configured in `vite.config.ts` and `tsconfig.app.json`:
- `@/*` maps to `./src/*`
- Example: `import { Header } from '@/components/Layout';`

## Development Workflow

### Commit-After-Success Policy

**CRITICAL:** After every successful implementation, bug fix, or feature completion, create a git commit with a descriptive message.

**When to commit:**
- ✅ Successfully implemented a new feature
- ✅ Fixed a bug or error
- ✅ Completed a refactoring task
- ✅ Added or updated tests
- ✅ Updated documentation

**When NOT to commit:**
- ❌ Code doesn't compile or has TypeScript errors
- ❌ Linting errors are present
- ❌ Tests are failing (if tests exist)
- ❌ Work is incomplete or broken

### Commit Message Format

Follow the **Conventional Commits** format:

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, no logic change)
- `refactor`: Code refactoring (no feature change or bug fix)
- `test`: Adding or updating tests
- `chore`: Maintenance tasks (dependencies, build config)

**Examples:**
```
feat(CompCard): add collapsible source code view
fix(HomePage): resolve token count formatting issue
docs: update CLAUDE.md with TypeScript patterns
refactor(types): consolidate comparison interfaces
```

### Pre-Commit Checklist

Before creating a commit, verify:
1. ✅ Run linter: `npm run lint` (no errors)
2. ✅ TypeScript compilation: `npm run build` (no type errors)
3. ✅ Test in browser: `npm run dev` and verify UI changes work
4. ✅ Review changed files for unintended modifications
5. ✅ Ensure no sensitive data (API keys, secrets) is included

## Code Style Guidelines

### TypeScript Configuration

**Strict Mode Enabled:**
- `strict: true` - All strict type-checking options enabled
- `noUnusedLocals: true` - Flag unused local variables
- `noUnusedParameters: true` - Flag unused function parameters
- `noFallthroughCasesInSwitch: true` - Ensure switch cases have break/return

**Best Practices:**
- Always define explicit types for function parameters and return values
- Use `interface` for object shapes, `type` for unions/intersections
- Prefer `const` over `let`, avoid `var`
- Use optional chaining (`?.`) and nullish coalescing (`??`) operators
- Avoid `any` type; use `unknown` if type is truly unknown

### React Patterns

**Component Patterns:**
- Use functional components exclusively
- Prefer named exports over default exports for components
- Use React Hooks for state and lifecycle management
- Destructure props in function parameters
- Use `ReactNode` type for children props

**Hooks Best Practices:**
```typescript
// Good: Destructure useState
const [count, setCount] = useState<number>(0);

// Good: useEffect with dependencies
useEffect(() => {
  // Side effect logic
}, [dependency]);

// Good: Custom hooks start with "use"
function useCustomHook() {
  // Hook logic
}
```

**Styling:**
- Use CSS Modules (`.module.css`) for component-specific styles
- Access styles via imported object: `className={styles.className}`
- Use semantic class names: `.header`, `.container`, `.button`

### File Naming Conventions

- **Components:** PascalCase - `ComponentName.tsx`, `ComponentName.module.css`
- **Utilities:** camelCase - `helperFunction.ts`
- **Types:** camelCase - `comparison.ts`, `userTypes.ts`
- **Constants:** camelCase file, UPPER_SNAKE_CASE exports - `apiConstants.ts`

## Testing Expectations

**Current State:** Tests are not yet implemented.

**Testing Plan:**
- **Unit Tests:** Component testing with React Testing Library
- **Integration Tests:** User flow testing with React Testing Library
- **E2E Tests:** End-to-end testing with Playwright or Cypress
- **Test Coverage:** Aim for >80% coverage on critical paths

**Test File Structure:**
```
src/
├── components/
│   ├── CompCard/
│   │   ├── CompCard.tsx
│   │   ├── CompCard.module.css
│   │   └── CompCard.test.tsx  (future)
```

**Testing Guidelines (when implemented):**
- Test files should be colocated with source files
- Use `.test.tsx` or `.spec.tsx` suffix
- Follow Arrange-Act-Assert pattern
- Test user-visible behavior, not implementation details
- Mock external dependencies and API calls

## Git Workflow

### Branch Naming Conventions

```
<type>/<short-description>
```

**Types:**
- `feature/` - New features or enhancements
- `bugfix/` - Bug fixes
- `hotfix/` - Urgent production fixes
- `refactor/` - Code refactoring
- `docs/` - Documentation updates
- `test/` - Test additions or updates

**Examples:**
```
feature/add-theme-switcher
bugfix/fix-token-count-display
hotfix/critical-rendering-error
refactor/simplify-comp-card-logic
docs/update-readme
test/add-homepage-tests
```

### Pull Request Guidelines

**PR Title Format:**
```
<type>(<scope>): <description>
```

**PR Description Requirements:**
1. **Summary:** Brief description of changes (2-3 sentences)
2. **Motivation:** Why this change is needed
3. **Changes:** Bullet list of specific changes made
4. **Testing:** How changes were tested
5. **Screenshots:** Visual changes should include before/after screenshots
6. **Breaking Changes:** List any breaking changes
7. **Related Issues:** Link to related issues or tickets

**PR Review Process:**
1. Self-review: Review your own code first
2. Automated checks: Ensure linting and build pass
3. Peer review: Request review from team member
4. Address feedback: Make requested changes
5. Approval: Obtain approval before merging
6. Merge: Squash and merge or merge commit (project preference)

**Required Checks:**
- ✅ ESLint passes (`npm run lint`)
- ✅ TypeScript compilation succeeds (`npm run build`)
- ✅ Manual testing in browser completed
- ✅ No console errors or warnings
- ✅ Responsive design verified (if UI changes)

## Tools and Commands

### NPM Scripts

```bash
# Development server with hot module replacement
npm run dev

# Production build (TypeScript compilation + Vite build)
npm run build

# Lint code with ESLint
npm run lint

# Preview production build locally
npm run preview
```

### Vite Configuration

**Key Features:**
- React plugin with Fast Refresh
- Path aliases (`@/` → `./src/`)
- Hot Module Replacement (HMR)
- Optimized production builds

**Configuration File:** `vite.config.ts`

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

### Development Server

**Local Development:**
```bash
npm run dev
# Server runs at: http://localhost:5173
```

**Network Access:**
The dev server is accessible on the local network by default.

### Build Output

**Production Build:**
```bash
npm run build
# Output: dist/ directory
```

**Preview Production Build:**
```bash
npm run preview
# Serves dist/ directory locally
```

## Multi-Agent Review Workflow

For complex features or critical changes, use a sequential review process:

1. **Lint Agent:** Verify code quality and style
2. **Security Agent:** Check for vulnerabilities and security issues
3. **React Engineer Agent:** Review React patterns and best practices
4. **Accessibility Agent:** Ensure WCAG compliance (for UI changes)

**Invoke with Maestro orchestration or manual sequential reviews.**

## Troubleshooting

### Common Issues

**TypeScript Errors:**
```bash
# Check for type errors
npm run build

# Common fixes:
# - Add explicit type annotations
# - Import types with "import type" syntax
# - Check tsconfig.json for strict mode settings
```

**ESLint Errors:**
```bash
# Run linter
npm run lint

# Auto-fix fixable issues
npm run lint -- --fix

# Common issues:
# - Unused variables (remove or prefix with underscore)
# - Missing dependencies in useEffect
# - Incorrect Hook usage order
```

**Vite/HMR Issues:**
```bash
# Clear Vite cache and restart
rm -rf node_modules/.vite
npm run dev

# If that doesn't work:
rm -rf node_modules dist
npm install
npm run dev
```

**Path Alias Issues:**
```bash
# Ensure both vite.config.ts and tsconfig.app.json have matching aliases
# Check that imports use @/ prefix correctly
```

### React-Specific Issues

**"Cannot read property of undefined":**
- Add optional chaining: `obj?.property`
- Add null checks: `if (obj) { obj.property }`
- Provide default values: `obj?.property ?? defaultValue`

**Infinite Re-render:**
- Check useEffect dependencies array
- Ensure setState isn't called during render
- Memoize callbacks with useCallback if passed as props

**State Not Updating:**
- Remember setState is asynchronous
- Use functional updates: `setState(prev => prev + 1)`
- Check if mutating state directly (always return new object/array)

## External Resources

### Official Documentation
- [React Documentation](https://react.dev/) - React 19 docs
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - TypeScript reference
- [Vite Documentation](https://vite.dev/) - Vite build tool docs
- [React Router Documentation](https://reactrouter.com/) - React Router v6+ docs

### Maestro Resources
- [Maestro Documentation](https://docs.runmaestro.ai/) - Maestro AI orchestration
- [Claude Code Best Practices](https://docs.runmaestro.ai/claude-code) - AI agent guidelines

### Code Quality Tools
- [ESLint Rules Reference](https://eslint.org/docs/latest/rules/) - Linting rules
- [TypeScript ESLint](https://typescript-eslint.io/) - TypeScript linting
- [React Testing Library](https://testing-library.com/react) - Testing guidance

---

**Last Updated:** 2026-02-08
**Maintained By:** Reactor Team + Claude Code Agents
