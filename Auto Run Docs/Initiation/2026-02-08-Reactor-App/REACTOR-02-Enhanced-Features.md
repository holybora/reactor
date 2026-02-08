# Phase 02: Enhanced Features and Multiple Comparisons

This phase expands the application with multiple comparison pages, improved UI with syntax highlighting, filtering capabilities, and a more polished user experience. You'll add the ability to navigate between different component comparisons and enhance the CompCard with better code display.

## Tasks

- [ ] Add syntax highlighting for code display:
  - Install `react-syntax-highlighter` and types: `npm install react-syntax-highlighter @types/react-syntax-highlighter`
  - Update CompCard component to use SyntaxHighlighter for the sourceCode section
  - Choose a clean theme (e.g., 'docco', 'github', or 'tomorrow')
  - Set language to 'typescript' or 'tsx'
  - Test that code is properly highlighted and readable

- [ ] Create additional comparison pages for different component types:
  - Create `src/pages/FormComparisonsPage.tsx` for form input comparisons
  - Create `src/pages/ModalComparisonsPage.tsx` for modal/dialog comparisons
  - Create `src/pages/CardComparisonsPage.tsx` for card component comparisons
  - Each page should have a descriptive header and introduction text
  - Use the same CompCard component structure as the home page

- [ ] Create sample data for new comparison pages:
  - Create `src/data/formComparisons.ts` with 2-3 form input examples (text input, search input, etc.)
  - Create `src/data/modalComparisons.ts` with 2-3 modal/dialog examples
  - Create `src/data/cardComparisons.ts` with 2-3 card component examples
  - Each dataset should follow the LLMComparison type with realistic prompts, code, and token counts
  - Include working React components that can be rendered in the CompCard children

- [ ] Enhance routing and navigation:
  - Update `src/App.tsx` to include routes for all new comparison pages
  - Update Header component to include navigation links to all pages
  - Add active link styling to show which page is currently selected
  - Ensure smooth navigation between all pages

- [ ] Add filtering and search capabilities:
  - Create `src/components/FilterBar/FilterBar.tsx` component
  - Add filter options: LLM provider dropdown (All, GPT-4, Claude, Gemini, etc.)
  - Add search input to filter comparisons by title or prompt text
  - Create `src/components/FilterBar/FilterBar.module.css` for styling
  - Integrate FilterBar into each comparison page
  - Implement filtering logic that updates displayed CompCards based on active filters

- [ ] Improve CompCard component with additional features:
  - Add a "Copy Code" button to the source code section
  - Implement copy-to-clipboard functionality using the Clipboard API
  - Add visual feedback when code is copied (toast notification or button text change)
  - Add optional "View Full Implementation" link/button for longer code samples
  - Add LLM provider badge/tag with color-coding (different color per provider)

- [ ] Add a comparison statistics summary component:
  - Create `src/components/ComparisonStats/ComparisonStats.tsx`
  - Display aggregate statistics: total comparisons shown, total tokens across all LLMs, average tokens per comparison
  - Show breakdown by LLM provider (count and total tokens per provider)
  - Add this component to the top of each comparison page
  - Style with `ComparisonStats.module.css` for a clean dashboard-like appearance

- [ ] Polish UI and ensure consistent styling:
  - Create `src/styles/variables.css` with CSS custom properties for colors, spacing, and typography
  - Update all component CSS modules to use these variables
  - Ensure consistent spacing, borders, and shadows across all components
  - Add responsive design considerations (basic mobile-friendly layout)
  - Test all pages for visual consistency and usability
