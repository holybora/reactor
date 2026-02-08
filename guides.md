# guides.md - Operational Instructions for AI Agents

This document provides step-by-step operational guidance for AI agents working on the Reactor project. For comprehensive project context, architecture, and coding standards, see [[CLAUDE.md]].

---

## Commit After Success

**CRITICAL RULE:** ALWAYS create a git commit after successfully completing work.

### When to Commit (Mandatory)

Create a commit immediately after:
- ✅ **Completing a task** - Any assigned task or subtask is finished and working
- ✅ **Fixing a bug** - Error is resolved and functionality is restored
- ✅ **Adding a feature** - New functionality is implemented and tested
- ✅ **Resolving an error** - Compilation, runtime, or test errors are fixed
- ✅ **Updating documentation** - Documentation changes are complete and accurate
- ✅ **Refactoring code** - Code improvements are complete without breaking changes

### When NOT to Commit

Do NOT commit if:
- ❌ Code doesn't compile or has TypeScript errors
- ❌ ESLint errors are present (run `npm run lint`)
- ❌ Tests are failing (if tests exist for the changed code)
- ❌ Work is incomplete or partially implemented
- ❌ UI changes haven't been visually verified in browser
- ❌ Breaking changes were introduced unintentionally

### Commit Workflow

```bash
# 1. Verify code quality (REQUIRED before commit)
npm run lint         # Must pass with no errors
npm run build        # Must compile successfully
npm run dev          # Verify UI changes work (if applicable)

# 2. Stage your changes
git add <files>      # Add specific files (preferred)
# OR
git add .            # Add all changes (use with caution)

# 3. Create commit with descriptive message
git commit -m "type(scope): description"

# 4. Push to remote (if in a GitHub repo)
git push origin <branch-name>
```

---

## Commit Message Guidelines

Follow the **Conventional Commits** specification for all commit messages.

### Format

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types

| Type | Use Case | Example |
|------|----------|---------|
| `feat` | New feature or functionality | `feat(CompCard): add collapsible source code view` |
| `fix` | Bug fix or error resolution | `fix(HomePage): resolve token count formatting issue` |
| `docs` | Documentation changes only | `docs: update guides.md with commit workflow` |
| `style` | Code formatting, no logic change | `style(Header): fix indentation and spacing` |
| `refactor` | Code restructuring, no behavior change | `refactor(types): consolidate comparison interfaces` |
| `test` | Adding or updating tests | `test(CompCard): add unit tests for render logic` |
| `chore` | Maintenance tasks, tooling, dependencies | `chore: update vite to v7.2.5` |

### Scope

The scope is optional but recommended. Use the component, module, or feature name:
- `(CompCard)` - LLM comparison card component
- `(HomePage)` - Home page component
- `(types)` - TypeScript type definitions
- `(Layout)` - Layout components
- `(build)` - Build configuration

### Description

- Use imperative mood: "add" not "added" or "adds"
- Keep under 72 characters
- Don't capitalize first letter
- Don't end with a period
- Be specific and descriptive

### Examples

**Good commit messages:**
```
feat(CompCard): add syntax highlighting to code display
fix(types): correct ModelType union to include Gemini
docs: add troubleshooting section to guides.md
refactor(HomePage): extract comparison logic to custom hook
test(Layout): add Header component snapshot tests
chore(deps): upgrade react-router-dom to v7.13.0
```

**Bad commit messages:**
```
fix: bug fix                    # Not descriptive enough
feat(CompCard): Added feature.  # Not imperative, has period
update                          # Missing type and description
WIP                             # Work in progress should not be committed
```

---

## Pre-Commit Checklist

Before creating ANY commit, complete this checklist:

### 1. Code Quality Checks

```bash
# Run ESLint (must pass with no errors)
npm run lint

# Auto-fix fixable issues if needed
npm run lint -- --fix

# Verify TypeScript compilation (must succeed)
npm run build
```

### 2. Functional Testing

- [ ] If UI changes: Start dev server (`npm run dev`) and manually test in browser
- [ ] Verify expected behavior works correctly
- [ ] Check browser console for errors or warnings
- [ ] Test responsive behavior on different screen sizes (if UI changes)
- [ ] Verify no broken functionality in related features

### 3. Code Review

- [ ] Review all changed files using `git diff`
- [ ] Remove any console.log statements used for debugging
- [ ] Ensure no commented-out code blocks remain
- [ ] Verify no unintended files are included (e.g., .env, IDE configs)
- [ ] Check that imports are organized and unused imports removed

### 4. Security Check

- [ ] No API keys, tokens, or secrets in code
- [ ] No sensitive data in comments or console logs
- [ ] No hardcoded credentials or internal URLs
- [ ] Environment variables used for configuration

### 5. Documentation

- [ ] Update component JSDoc comments if public API changed
- [ ] Update CLAUDE.md or guides.md if workflow changed
- [ ] Add inline comments for complex logic (sparingly)

---

## Multi-Agent Review Workflow

For complex features, critical bug fixes, or high-impact changes, use a sequential multi-agent review process.

### When to Use Multi-Agent Review

- **Complex Features:** New functionality affecting multiple components or modules
- **Critical Bug Fixes:** Fixes to authentication, data handling, or security issues
- **Performance Optimizations:** Changes affecting render performance or bundle size
- **API Changes:** Modifications to component props, type definitions, or public APIs
- **Refactoring:** Large-scale code restructuring

### Review Sequence

Conduct reviews in this order for comprehensive coverage:

#### 1. Lint Agent Review
**Purpose:** Verify code quality, style, and formatting consistency

**Tasks:**
- Run `npm run lint` and verify no errors
- Check for unused variables, imports, or parameters
- Verify consistent code formatting
- Ensure TypeScript strict mode compliance

**Output:** List of code quality issues to fix

---

#### 2. Security Agent Review
**Purpose:** Identify security vulnerabilities and potential exploits

**Tasks:**
- Check for XSS vulnerabilities in user input handling
- Verify no SQL injection risks (if database queries exist)
- Check for command injection risks in shell commands
- Ensure sensitive data isn't exposed in client-side code
- Verify proper error handling (no sensitive info in error messages)
- Check for insecure dependencies (`npm audit`)

**Output:** Security issues with severity levels and remediation steps

---

#### 3. React Engineer Agent Review
**Purpose:** Ensure React best practices and patterns

**Tasks:**
- Verify functional components follow established patterns
- Check proper use of React Hooks (order, dependencies)
- Ensure no memory leaks (event listeners, subscriptions cleaned up)
- Verify optimal render performance (unnecessary re-renders)
- Check proper TypeScript typing for props and state
- Ensure accessibility attributes are present (aria-*, role)

**Output:** React-specific improvements and optimizations

---

#### 4. Accessibility Agent Review (UI Changes Only)
**Purpose:** Ensure WCAG 2.1 compliance and inclusive design

**Tasks:**
- Verify semantic HTML elements used correctly
- Check keyboard navigation works for all interactive elements
- Ensure sufficient color contrast ratios (AA standard minimum)
- Verify screen reader compatibility (ARIA labels)
- Check focus indicators are visible
- Ensure form inputs have associated labels

**Output:** Accessibility issues with WCAG references

---

### Invoking Multi-Agent Reviews

**With Maestro Orchestration:**
```bash
# Define agents in Maestro workflow configuration
# Agents run sequentially, each receiving previous agent's output
```

**Manual Sequential Reviews:**
1. Complete implementation
2. Run each agent review in order
3. Address all issues found before proceeding to next agent
4. Create commit only after all reviews pass

---

## PR Creation Guidelines

### When to Create a Pull Request

Create a PR when:
- Feature is complete and tested locally
- All commits follow commit message guidelines
- Code passes all pre-commit checks
- Changes are ready for team review
- You're working on a feature branch (not main)

### PR Title Format

Use the same Conventional Commits format:
```
<type>(<scope>): <description>
```

**Examples:**
```
feat(CompCard): add collapsible source code sections
fix(HomePage): resolve infinite scroll pagination bug
refactor(types): consolidate model comparison interfaces
```

### PR Description Template

```markdown
## Summary
[Brief 2-3 sentence description of what this PR does]

## Motivation
[Why is this change needed? What problem does it solve?]

## Changes
- [Specific change 1]
- [Specific change 2]
- [Specific change 3]

## Testing
- [ ] Ran ESLint with no errors (`npm run lint`)
- [ ] TypeScript compilation succeeds (`npm run build`)
- [ ] Manually tested in browser
- [ ] Tested edge cases: [describe any edge cases tested]
- [ ] Verified no console errors or warnings

## Screenshots
[If UI changes, include before/after screenshots]

**Before:**
[Screenshot or "N/A"]

**After:**
[Screenshot or "N/A"]

## Breaking Changes
[List any breaking changes or "None"]

## Related Issues
Closes #[issue-number]
Related to #[issue-number]
```

### PR Review Process

1. **Self-Review:** Review your own PR first using GitHub's file diff view
2. **Automated Checks:** Ensure CI/CD pipeline passes (if configured)
3. **Request Review:** Assign relevant team member(s) as reviewers
4. **Address Feedback:** Respond to comments and make requested changes
5. **Re-request Review:** After making changes, re-request review
6. **Approval:** Wait for approval from required reviewers
7. **Merge:** Use squash merge or merge commit based on project preference

### Required Checks Before Merging

- ✅ ESLint passes (`npm run lint`)
- ✅ TypeScript compilation succeeds (`npm run build`)
- ✅ Manual testing in browser completed successfully
- ✅ No console errors or warnings in browser
- ✅ Responsive design verified for UI changes
- ✅ At least one approval from code reviewer
- ✅ All conversation threads resolved
- ✅ Commit history is clean and follows conventions

---

## Troubleshooting

### TypeScript Errors

**Problem:** `npm run build` fails with type errors

**Solutions:**
```bash
# 1. Check for type mismatches
# Add explicit type annotations to fix inference issues

# 2. Verify imports use correct syntax
import type { TypeName } from './types'; // For types only
import { functionName } from './utils';  // For runtime values

# 3. Check tsconfig.json strict mode settings
# Ensure you're not disabling strict checks

# 4. Clear build cache and rebuild
rm -rf dist
npm run build
```

**Common Type Errors:**
- `Object is possibly 'null' or 'undefined'` → Use optional chaining (`obj?.property`) or null checks
- `Type 'X' is not assignable to type 'Y'` → Check type definitions match usage
- `Cannot find module` → Verify import path and file extension

---

### ESLint Errors

**Problem:** `npm run lint` reports errors

**Solutions:**
```bash
# 1. Auto-fix fixable issues
npm run lint -- --fix

# 2. Check for specific rule violations
npm run lint
```

**Common ESLint Issues:**

| Error | Fix |
|-------|-----|
| Unused variable | Remove variable or prefix with underscore: `_unusedVar` |
| Missing dependency in useEffect | Add missing dependency to array |
| Incorrect Hook usage order | Ensure Hooks are called in consistent order, not in conditionals |
| Prefer const over let | Change `let` to `const` if variable isn't reassigned |

---

### Vite / HMR Issues

**Problem:** Hot Module Replacement not working or dev server issues

**Solutions:**
```bash
# 1. Clear Vite cache
rm -rf node_modules/.vite
npm run dev

# 2. Restart dev server with clean slate
# Stop server (Ctrl+C)
npm run dev

# 3. Full rebuild if issues persist
rm -rf node_modules/.vite dist
npm install
npm run dev

# 4. Check for port conflicts
# Vite runs on port 5173 by default
# If port is in use, Vite will auto-increment to 5174, 5175, etc.
```

---

### React-Specific Issues

#### "Cannot read property of undefined"

**Cause:** Accessing properties on null/undefined objects

**Solutions:**
```typescript
// Option 1: Optional chaining
const value = obj?.property?.nestedProperty;

// Option 2: Null check
if (obj && obj.property) {
  const value = obj.property;
}

// Option 3: Default value with nullish coalescing
const value = obj?.property ?? defaultValue;
```

---

#### Infinite Re-render Loop

**Cause:** State updates triggering continuous re-renders

**Solutions:**
```typescript
// ❌ Bad: Object created on every render
useEffect(() => {
  // Effect runs infinitely
}, [{ key: 'value' }]);

// ✅ Good: Stable dependency
const config = useMemo(() => ({ key: 'value' }), []);
useEffect(() => {
  // Effect runs once
}, [config]);

// ❌ Bad: setState during render
function Component() {
  const [count, setCount] = useState(0);
  setCount(1); // Causes infinite loop
}

// ✅ Good: setState in effect or event handler
function Component() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(1); // Runs once on mount
  }, []);
}
```

---

#### State Not Updating

**Cause:** Mutating state directly or misunderstanding async nature

**Solutions:**
```typescript
// ❌ Bad: Direct mutation
const [items, setItems] = useState([1, 2, 3]);
items.push(4); // Mutates state directly
setItems(items); // React doesn't detect change

// ✅ Good: Return new array
setItems([...items, 4]);
// or
setItems(items.concat(4));

// ❌ Bad: Assuming immediate update
setCount(count + 1);
console.log(count); // Still shows old value

// ✅ Good: Use functional update
setCount(prevCount => {
  console.log(prevCount); // Current value
  return prevCount + 1;
});

// ✅ Good: Use useEffect to observe changes
useEffect(() => {
  console.log(count); // Runs after state updates
}, [count]);
```

---

### Path Alias Issues

**Problem:** Imports using `@/` alias not resolving

**Solutions:**

```bash
# 1. Verify vite.config.ts has alias configured
# Should include:
# resolve: {
#   alias: {
#     '@': path.resolve(__dirname, './src'),
#   },
# }

# 2. Verify tsconfig.app.json has paths configured
# Should include:
# "paths": {
#   "@/*": ["./src/*"]
# }

# 3. Restart dev server and TypeScript server
# Stop dev server (Ctrl+C)
# Restart: npm run dev
# In VS Code: Cmd+Shift+P → "TypeScript: Restart TS Server"
```

---

### Build / Production Issues

**Problem:** Production build fails or behaves differently than dev

**Solutions:**
```bash
# 1. Build production bundle
npm run build

# 2. Preview production build locally
npm run preview

# 3. Check for environment-specific code
# Ensure code doesn't rely on dev-only features

# 4. Verify all dependencies are in package.json
# Dev-only deps should be in devDependencies
# Runtime deps should be in dependencies

# 5. Check bundle size
# Large bundles may need code splitting or lazy loading
```

---

## External Resources

### Official Documentation

- **React:** [https://react.dev/](https://react.dev/) - React 19 documentation
- **TypeScript:** [https://www.typescriptlang.org/docs/](https://www.typescriptlang.org/docs/) - TypeScript handbook
- **Vite:** [https://vite.dev/](https://vite.dev/) - Vite documentation
- **React Router:** [https://reactrouter.com/](https://reactrouter.com/) - React Router v7+ docs

### Code Quality Tools

- **ESLint:** [https://eslint.org/docs/latest/rules/](https://eslint.org/docs/latest/rules/) - ESLint rules reference
- **TypeScript ESLint:** [https://typescript-eslint.io/](https://typescript-eslint.io/) - TypeScript-specific linting
- **React Testing Library:** [https://testing-library.com/react](https://testing-library.com/react) - Testing guidance

### Maestro Resources

- **Maestro Documentation:** [https://docs.runmaestro.ai/](https://docs.runmaestro.ai/) - Maestro AI orchestration
- **Claude Code Best Practices:** [https://docs.runmaestro.ai/claude-code](https://docs.runmaestro.ai/claude-code) - AI agent guidelines
- **Multi-Agent Workflows:** [https://docs.runmaestro.ai/workflows](https://docs.runmaestro.ai/workflows) - Orchestration patterns

### Learning Resources

- **React Patterns:** [https://reactpatterns.com/](https://reactpatterns.com/) - Common React patterns
- **TypeScript Deep Dive:** [https://basarat.gitbook.io/typescript/](https://basarat.gitbook.io/typescript/) - Advanced TypeScript
- **Conventional Commits:** [https://www.conventionalcommits.org/](https://www.conventionalcommits.org/) - Commit message spec

---

**Last Updated:** 2026-02-08
**Maintained By:** Reactor Team + Claude Code Agents

For project-specific architecture, coding standards, and patterns, see [[CLAUDE.md]].
