# Phase 03: Advanced Features and Polish

This phase adds advanced functionality including side-by-side comparison view, data persistence, user preferences, performance metrics visualization, and production-ready polish. The application will be feature-complete and ready for real-world use.

## Tasks

- [ ] Create side-by-side comparison view:
  - Create `src/components/SideBySideView/SideBySideView.tsx` component
  - Accept multiple LLMComparison objects as props
  - Display comparisons in a grid layout (2-3 columns)
  - Synchronize scroll between rendered results when possible
  - Create toggle button to switch between stacked (current) and side-by-side views
  - Style with `SideBySideView.module.css` for clean grid layout
  - Integrate this view option into all comparison pages

- [ ] Implement local storage for user preferences:
  - Create `src/utils/storage.ts` with functions to save/load preferences
  - Store user preferences: preferred view mode (stacked/side-by-side), active filters, theme preference
  - Create `src/hooks/useLocalStorage.ts` custom hook for reactive localStorage
  - Update FilterBar to persist filter selections
  - Update view mode toggle to persist preference
  - Load saved preferences on application mount

- [ ] Add visual performance metrics and charts:
  - Install chart library: `npm install recharts` (or similar lightweight option)
  - Create `src/components/TokenChart/TokenChart.tsx` component
  - Display bar chart comparing token counts across LLM providers
  - Add line chart showing token efficiency trends
  - Create `src/pages/AnalyticsPage.tsx` to display all performance charts
  - Add route and navigation link for Analytics page
  - Style charts to match application theme

- [ ] Implement comparison diff viewer:
  - Install diff library: `npm install react-diff-viewer-continued`
  - Create `src/components/CodeDiff/CodeDiff.tsx` component
  - Allow users to select two comparisons to diff their source code
  - Highlight additions, deletions, and changes between implementations
  - Add "Compare" button to CompCard component
  - Create modal or dedicated view for displaying diffs
  - Style for readability with syntax highlighting preserved

- [ ] Add export and sharing capabilities:
  - Create `src/utils/export.ts` with functions to export comparisons
  - Implement "Export as JSON" functionality for individual comparisons
  - Implement "Export All" to download complete comparison dataset
  - Add "Share" button that copies shareable URL with filter state
  - Create "Import JSON" feature to load custom comparison data
  - Add file upload UI for importing comparison data
  - Validate imported data against TypeScript types

- [ ] Implement dark mode theme toggle:
  - Create `src/styles/themes.css` with light and dark theme variables
  - Create `src/hooks/useTheme.ts` hook for theme management
  - Add theme toggle button to Header component
  - Use CSS custom properties to switch between themes
  - Persist theme preference in localStorage
  - Ensure all components respect theme variables
  - Test readability and contrast in both themes

- [ ] Add comprehensive error boundaries and loading states:
  - Create `src/components/ErrorBoundary/ErrorBoundary.tsx` component
  - Wrap main application sections with error boundaries
  - Create `src/components/Loading/LoadingSpinner.tsx` component
  - Add loading states for dynamic imports and future async operations
  - Create `src/components/EmptyState/EmptyState.tsx` for empty search results
  - Handle edge cases gracefully (no comparisons, failed imports, etc.)

- [ ] Production optimization and finalization:
  - Update `vite.config.ts` with production optimizations (minification, chunk splitting)
  - Add `src/components/Layout/Footer.tsx` with project info and GitHub link
  - Create `README.md` in project root with setup instructions, features list, and usage guide
  - Run production build: `npm run build`
  - Test production build locally: `npm run preview`
  - Verify all features work in production mode
  - Check bundle size and performance metrics
  - Fix any console errors or warnings

- [ ] Create example documentation for adding new comparisons:
  - Create `docs/` folder in project root
  - Create `docs/adding-comparisons.md` with step-by-step guide
  - Include example code snippets showing how to structure comparison data
  - Document the LLMComparison interface and best practices
  - Add examples of creating new comparison pages
  - Include tips for prompt engineering and token tracking
