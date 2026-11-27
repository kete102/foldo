# Architecture

## Status

Foundation tooling has been configured according to the project discussion. Document processing, authentication, billing and backend infrastructure are planned, not verified implementations.

## Repository

```text
apps/web/                  Next.js application
packages/typescript-config/ Shared TypeScript configuration
packages/                  Future shared libraries
services/                  Future backend services
docs/                      Technical documentation
```

pnpm manages workspaces; Turborepo orchestrates build, typecheck and test tasks. Biome runs centrally. Vitest covers unit/integration tests and Playwright covers browser flows. GitHub Actions provides CI.

## Web application

Use Next.js App Router, React and strict TypeScript. Prefer Server Components for public content and Client Components for interactive tools. Tailwind CSS and shadcn/ui are proposed UI foundations. Organize features around document tools, keeping domain logic independent of React.

Public Spanish tool routes should be short and stable, e.g. `/unir-pdf`. Use static rendering where feasible, meaningful metadata, canonical URLs, internal links, sitemap and robots directives. Keep essential content available without JavaScript.

## Processing model (planned)

```text
Tool UI -> validation -> processing coordinator
                         |-> local engine / Web Worker -> result
                         |-> explicit remote operation -> result
```

Prefer local processing. Evaluate pdf-lib and PDF.js for manipulation and rendering, and Web Workers or WebAssembly where appropriate. Load heavy dependencies on demand. Handle cancellation, memory pressure, unsupported formats and invalid files. Never silently upload a document when local processing fails.

Potential shared packages include document-core, document-browser and ui. Extract them when actual reuse or isolation warrants it, rather than creating empty abstractions now.

## Remote processing (planned)

Evaluate Python/FastAPI containerized services for operations unsuitable for browsers. Candidate infrastructure: object storage (R2), Redis for rate limiting/job coordination, Supabase for identity and persistent metadata, Stripe for billing. These are proposals, not provisioned services. Define job contracts, authorization, retention, quotas and failure handling before implementation.

## Deployment

Vercel is the proposed web host, with local development, PR previews and production from main. Production domain: foldo.es. Deployment and DNS verification remain pending. Backend hosting will be selected separately based on resource and isolation requirements.

## Quality attributes

Privacy, correctness, accessibility, SEO, performance, maintainability and controlled infrastructure costs guide trade-offs. See SECURITY.md and the ADR index for related decisions.
