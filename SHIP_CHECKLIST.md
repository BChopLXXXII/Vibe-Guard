# Ship Checklist 🚀

Before you deploy or merge, run through this list.

## Before Every Commit

- [ ] `npm run check` passes (lint + typecheck + format + test)
- [ ] No `console.log` statements left in production code
- [ ] No hardcoded secrets or API keys
- [ ] New code has tests (if applicable)

## Before Merging a PR

- [ ] PR description explains what and why
- [ ] CI is green
- [ ] Code reviewed (or self-reviewed carefully)
- [ ] No merge conflicts

## Before Deploying

- [ ] All tests pass locally AND in CI
- [ ] Environment variables set up in production
- [ ] Database migrations run (if applicable)
- [ ] Rollback plan exists (know how to revert)
- [ ] Monitoring/logs are accessible

## Common Gotchas

### "It works on my machine"

- Check Node version matches production
- Check environment variables are set
- Check file paths work on Linux (case-sensitive!)

### Performance

- Avoid N+1 queries
- Don't fetch more data than needed
- Use pagination for large lists

### Security

- Validate all user input
- Use parameterized queries (never string concat SQL)
- Don't expose stack traces to users
- HTTPS everywhere

---

_Skip steps at your own risk. Tech debt compounds._
