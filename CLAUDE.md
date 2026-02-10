# CLAUDE.md — AI Assistant Guide

This file helps AI coding assistants (Claude Code, Cursor, Codex, etc.) understand and work with this project.

## Project Overview

**Vibe Guard** is a TypeScript starter template designed to prevent "spaghetti code" when vibe coding with AI assistants.

## Tech Stack

- **Language:** TypeScript 5+ (strict mode)
- **Runtime:** Node.js (ES modules)
- **Linting:** ESLint 9 with TypeScript rules
- **Formatting:** Prettier
- **Testing:** Vitest
- **Git Hooks:** Husky + lint-staged

## Project Structure

```
src/
├── index.ts          # Main entry point
├── lib/              # Reusable utilities and helpers
├── types/            # TypeScript type definitions
└── __tests__/        # Test files (*.test.ts)
```

## Commands

```bash
npm run dev           # Start development
npm run build         # Compile TypeScript
npm run lint          # Check for lint errors
npm run lint:fix      # Fix lint errors automatically
npm run format        # Format all files
npm run format:check  # Check formatting
npm run typecheck     # Run TypeScript type checking
npm run test          # Run tests
npm run check         # Run ALL checks (lint + typecheck + format + test)
```

## Code Standards

### DO

- Use TypeScript for all source files
- Add explicit types for function parameters and return values
- Use `const` by default, `let` only when reassignment is needed
- Keep functions small and focused (single responsibility)
- Add JSDoc comments for public functions
- Write tests for new functionality
- Run `npm run check` before committing

### DON'T

- Use `any` type (use `unknown` if type is truly unknown)
- Use `var` (use `const` or `let`)
- Skip error handling (always handle errors explicitly)
- Create files outside the `src/` directory
- Disable ESLint rules without a comment explaining why
- Commit without running checks

## File Naming Conventions

- **Source files:** `kebab-case.ts` (e.g., `user-service.ts`)
- **Test files:** `*.test.ts` next to the file being tested
- **Type files:** `*.types.ts` or in `types/` directory
- **Constants:** `SCREAMING_SNAKE_CASE`

## Error Handling Pattern

```typescript
// ✅ Good - explicit error handling
function parseData(input: string): Result<Data, ParseError> {
  try {
    const data = JSON.parse(input);
    return { ok: true, value: data };
  } catch (error) {
    return { ok: false, error: new ParseError(error) };
  }
}

// ❌ Bad - swallowing errors
function parseData(input: string): Data | null {
  try {
    return JSON.parse(input);
  } catch {
    return null; // What went wrong? Who knows!
  }
}
```

## Adding New Features

1. Create the file in the appropriate `src/` subdirectory
2. Add types to `src/types/` if needed
3. Write tests in `src/__tests__/`
4. Run `npm run check` to verify everything passes
5. Commit with a descriptive message

## Common Gotchas

- **ESLint errors on save:** This is intentional. Fix the errors, don't disable the rules.
- **Pre-commit hook failing:** Run `npm run check` to see what's wrong.
- **Type errors:** TypeScript strict mode catches real bugs. Fix the types.

## When You're Stuck

1. Read the error message carefully
2. Check if there's a similar pattern elsewhere in the codebase
3. Ask the user for clarification if the requirement is ambiguous
4. Don't guess — it's better to ask than to ship broken code
