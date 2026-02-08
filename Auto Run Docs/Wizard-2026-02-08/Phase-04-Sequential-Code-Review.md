# Phase 04: Sequential Code Review

This phase executes a multi-agent sequential review process on the pull request created in Phase 3. Three specialized reviewers will analyze the changes: a Lint Issues Reviewer, a Security Issues Reviewer, and a Seasoned React Engineer. Each reviewer adds their findings as PR comments, creating a comprehensive review record.

## Tasks

- [ ] Retrieve PR information and prepare for review:
  - Get the PR number from Phase 3 output (or find the latest open PR with `gh pr list`)
  - Fetch PR details: `gh pr view <PR_NUMBER> --json title,body,files`
  - Store PR number in a variable for subsequent review tasks

- [ ] Execute Lint Issues Review (First Sequential Review):
  - Create structured review document at `Auto Run Docs/Wizard-2026-02-08/Working/lint-review.md` with front matter (type: review, tags: [lint, code-quality])
  - Review all changed files in the PR for lint-related issues:
    - Check code formatting consistency
    - Verify ESLint rule compliance
    - Identify unused imports or variables
    - Check for console.log statements that should be removed
    - Verify proper TypeScript types (no implicit any)
    - Check for commented-out code
  - Create structured findings with severity levels (error, warning, suggestion)
  - Post review comment to PR using: `gh pr comment <PR_NUMBER> --body "## 🔍 Lint Issues Review\n\n[Paste lint findings from document]"`
  - Include "✅ Lint review complete" or "⚠️ Issues found" summary

- [ ] Execute Security Issues Review (Second Sequential Review):
  - Create structured review document at `Auto Run Docs/Wizard-2026-02-08/Working/security-review.md` with front matter (type: review, tags: [security, vulnerability])
  - Review all changed files for security concerns:
    - Check for exposed secrets, API keys, or credentials
    - Verify input validation and sanitization
    - Check for XSS vulnerabilities in React components (dangerouslySetInnerHTML usage)
    - Review dependencies for known vulnerabilities (if package.json changed)
    - Check for SQL injection risks (if database queries present)
    - Verify proper authentication and authorization patterns
    - Check for insecure random number generation
    - Review CORS configuration if present
  - Create structured findings with risk levels (critical, high, medium, low)
  - Post review comment to PR: `gh pr comment <PR_NUMBER> --body "## 🔒 Security Issues Review\n\n[Paste security findings from document]"`
  - Include "✅ No security issues found" or "⚠️ Security concerns identified" summary

- [ ] Execute Seasoned React Engineer Review (Third Sequential Review):
  - Create structured review document at `Auto Run Docs/Wizard-2026-02-08/Working/react-review.md` with front matter (type: review, tags: [react, architecture, best-practices])
  - Review from a senior React engineer perspective:
    - **Component Architecture**: Check component structure, single responsibility, proper composition
    - **React Best Practices**: Verify hooks usage (proper dependencies, no rules violations), proper key props in lists
    - **Performance**: Identify unnecessary re-renders, missing memoization opportunities, large bundle concerns
    - **State Management**: Evaluate state organization, prop drilling issues, context usage appropriateness
    - **TypeScript Integration**: Check type safety, proper interface definitions, generic usage
    - **Accessibility**: Verify semantic HTML, ARIA attributes if needed, keyboard navigation support
    - **Testing Considerations**: Note areas that need test coverage, testability concerns
    - **Code Quality**: Evaluate readability, maintainability, adherence to React patterns
  - Provide constructive feedback with specific suggestions and code examples where helpful
  - Post review comment to PR: `gh pr comment <PR_NUMBER> --body "## ⚛️ Senior React Engineer Review\n\n[Paste React findings from document]"`
  - Include overall assessment: "✅ Approved" / "🔄 Needs Changes" / "💬 Comments for consideration"

- [ ] Generate consolidated review summary:
  - Create `Auto Run Docs/Wizard-2026-02-08/Working/review-summary.md` with:
    - Front matter (type: report, tags: [review, summary])
    - Links to individual review documents using wiki-link syntax: [[lint-review]], [[security-review]], [[react-review]]
    - Overall status: total issues by severity/risk level
    - Actionable items prioritized by importance
    - Final recommendation: Approve / Request Changes / Needs Discussion
  - Post final summary comment to PR: `gh pr comment <PR_NUMBER> --body "## 📋 Consolidated Review Summary\n\n[Summary of all reviews with overall recommendation]"`
  - Output the PR URL for user to view all review comments
