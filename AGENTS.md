# Foldo — Agent Instructions

## Project overview

Foldo is a privacy-first document productivity platform built around local-first processing, performance, accessibility, and SEO.

## General rules

- Prefer simple and maintainable solutions.
- Avoid premature abstractions.
- Do not introduce unnecessary dependencies.
- Follow existing project conventions.
- Keep changes focused on the requested scope.
- Do not modify unrelated files.
- Do not introduce breaking changes without approval.
- Explain significant architectural trade-offs.

## Architecture

- Respect monorepo package boundaries.
- Keep business logic independent from UI components.
- Prefer feature-based organization.
- Prefer Server Components in Next.js.
- Use Client Components only when client-side functionality is required.
- Keep document processing independent from the presentation layer.
- Prefer local document processing whenever feasible.

## TypeScript

- Use strict TypeScript.
- Avoid `any`.
- Prefer explicit types at public boundaries.
- Validate untrusted external inputs.
- Avoid unnecessary type assertions.

## Privacy and security

- Never expose server-side secrets to the client.
- Never log document contents or sensitive user information.
- Do not upload documents without an explicit processing requirement.
- Treat uploaded files as untrusted input.
- Validate file types, sizes, and processing limits.
- Minimize document retention.

## SEO and performance

- Prefer server-rendered or statically generated public content.
- Keep important content accessible without JavaScript.
- Preserve canonical URLs and metadata.
- Avoid unnecessary client-side JavaScript.
- Lazy-load heavy document processing dependencies.
- Preserve accessibility and semantic HTML.

## Testing

- Add tests for new business logic.
- Cover edge cases and failure scenarios.
- Use Vitest for unit and integration tests.
- Use Playwright for browser-based tests.
- Never remove or weaken tests to make a change pass.

## Validation

Run the relevant checks before completing a task:

```bash
pnpm check
pnpm typecheck
pnpm test
pnpm build
```

Run end-to-end tests when browser behavior is affected:

```bash
pnpm test:e2e
```

## Documentation

- Update documentation when architectural decisions change.
- Record significant decisions as ADRs.
- Keep documentation consistent with the implementation.
- Distinguish implemented functionality from planned functionality.

## Git

- Follow Conventional Commits.
- Keep commits focused.
- Do not commit secrets or generated artifacts.
- Do not commit or push changes unless explicitly requested.

## Definition of done

A task is complete when:

- Acceptance criteria are satisfied.
- Relevant tests pass.
- Type checking passes.
- Code quality checks pass.
- Security and privacy implications are considered.
- Relevant documentation is updated.
- Remaining limitations are communicated.
