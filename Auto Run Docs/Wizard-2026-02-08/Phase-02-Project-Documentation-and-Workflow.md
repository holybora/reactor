# Phase 02: Project Documentation and Workflow

This phase creates comprehensive project documentation including CLAUDE.md and guides.md files with best practices for Claude Code agents. These files establish commit-after-success policies and provide clear guidance for AI-assisted development following docs.runmaestro.ai recommendations.

## Tasks

- [ ] Create CLAUDE.md with Claude Code best practices and project context:
  - Add project overview section describing this as a React + TypeScript + Vite application
  - Include architecture section documenting: src/ structure, component patterns, state management approach
  - Add development workflow section with commit-after-success policy: "After every successful implementation, bug fix, or feature completion, create a git commit with a descriptive message"
  - Include code style guidelines: TypeScript strict mode, functional components, React hooks patterns
  - Add testing expectations section (even if tests aren't implemented yet, document the plan)
  - Include git workflow section: branch naming conventions (feature/, bugfix/, hotfix/), commit message format
  - Add PR guidelines: description requirements, review process, required checks
  - Document tools and commands: npm scripts (dev, build, lint, preview), vite config usage

- [ ] Create guides.md with operational instructions for AI agents:
  - Add "Commit After Success" section with explicit rules: "ALWAYS create a commit after: completing a task, fixing a bug, adding a feature, resolving an error"
  - Include commit message guidelines following Conventional Commits format: `type(scope): description` where type is feat/fix/docs/style/refactor/test/chore
  - Add pre-commit checklist: run lint, verify TypeScript compilation, test in browser if UI changes
  - Document multi-agent review workflow: explain sequential review process (lint → security → React engineer)
  - Include PR creation guidelines: when to create PRs, how to title them, what to include in description
  - Add troubleshooting section: common issues and solutions for this tech stack
  - Include links to external resources: React docs, TypeScript handbook, Vite documentation, docs.runmaestro.ai

- [ ] Commit the documentation files to Git:
  - Stage CLAUDE.md and guides.md: `git add CLAUDE.md guides.md`
  - Create commit: `git commit -m "docs: add CLAUDE.md and guides.md with workflow and best practices"`
  - Push to GitHub: `git push origin main`
