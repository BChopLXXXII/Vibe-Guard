# Vibe Guard 🛡️

**Anti-spaghetti starter for vibe coders.**

Ship fast without the mess. This template gives you guardrails so your AI-assisted code stays clean.

## What's Included

- ✅ **TypeScript** (strict mode) — catch bugs before they happen
- ✅ **ESLint** — auto-fix common mistakes
- ✅ **Prettier** — consistent formatting, zero debates
- ✅ **Husky + lint-staged** — pre-commit hooks that save you from yourself
- ✅ **Vitest** — fast, modern testing
- ✅ **GitHub Actions CI** — lint, typecheck, format, test on every push
- ✅ **CLAUDE.md** — AI assistant guide for Claude Code, Cursor, etc.

## Quick Start

```bash
# Clone the template
git clone https://github.com/BChopLXXXII/Vibe-Guard.git my-project
cd my-project

# Install dependencies
npm install

# Run all checks
npm run check

# Start building
npm run dev
```

## Commands

| Command             | What it does          |
| ------------------- | --------------------- |
| `npm run dev`       | Start development     |
| `npm run build`     | Compile TypeScript    |
| `npm run lint`      | Check for lint errors |
| `npm run lint:fix`  | Fix lint errors       |
| `npm run format`    | Format all files      |
| `npm run typecheck` | Run type checking     |
| `npm run test`      | Run tests             |
| `npm run check`     | Run ALL checks        |

## Project Structure

```
src/
├── index.ts          # Entry point
├── lib/              # Utilities and helpers
├── types/            # TypeScript types
└── __tests__/        # Tests
```

## How the Guardrails Work

### Pre-commit Hooks

Every commit runs through `lint-staged`:

1. ESLint checks and fixes your code
2. Prettier formats everything
3. If anything fails, the commit is blocked

No more "I'll fix it later" commits.

### Strict TypeScript

The `tsconfig.json` has strict mode enabled:

- No implicit `any`
- No unused variables
- No missing return types (for public functions)

The compiler catches bugs before they become runtime errors.

### ESLint Rules

Custom rules that catch common AI-generated code issues:

- No empty functions
- No unreachable code
- No duplicate imports
- Consistent error handling

### CI Pipeline

GitHub Actions runs on every push:

1. Lint
2. Type check
3. Format check
4. Tests

If any step fails, the PR is blocked.

## For AI Assistants

See `CLAUDE.md` for project conventions and patterns. AI coding assistants should read this file to understand how to work with this codebase.

## Ship Checklist

See `SHIP_CHECKLIST.md` before deploying.

## License

MIT. Do whatever you want with these.

## About

Made by [@BChopLXXXII](https://x.com/BChopLXXXII)

Built for vibe coders who want to ship fast without the spaghetti.

Ship it. 🚀

---

If this helped, [star the repo](https://github.com/BChopLXXXII/Vibe-Guard) — it helps others find it.
