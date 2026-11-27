# Roadmap

Status reflects the project discussion, not an independent repository audit. No release dates are committed.

## Phase 1 — Foundation (in progress)

- [x] Initialize monorepo
- [x] Create Next.js application
- [x] Configure TypeScript
- [x] Configure Biome
- [x] Configure Turborepo
- [x] Configure Vitest
- [x] Configure Playwright
- [x] Configure GitHub Actions and branch protection (reported complete; verify latest workflow push and CI)
- [ ] Complete technical documentation
- [ ] Validate production build, Vercel deployment and domain

## Phase 2 — Design system

Define identity, typography, color tokens, spacing, accessibility, responsive layouts and reusable UI components. Establish tool-page and navigation patterns.

## Phase 3 — SEO foundation

Research Spanish search intent, define URL conventions and metadata, build public page templates, sitemap, robots rules and internal linking. Validate rendered content and performance; configure Search Console when the domain is live.

## Phase 4 — Tool registry

Define typed tool metadata, categories, capabilities, limits and processing mode. Connect registry entries to navigation and public pages without duplicating metadata.

## Phase 5 — Local processing engine

Evaluate PDF libraries, file validation, worker communication, progress, cancellation, error handling and memory limits. Build deterministic fixtures and integration tests.

## Phase 6 — First complete tool

Implement PDF merging end to end: select, reorder, process locally and download. Validate page count/order, browser compatibility, accessibility, error recovery and privacy behavior.

## Phase 7 — MVP tool suite

Expand to an initial six tools after validating feasibility and demand. Complete responsive and cross-browser testing, useful SEO content and operational monitoring. Release only tools that meet correctness and privacy criteria.

## Later phases (proposed)

Remote processing and quotas; authentication; Pro billing; cloud storage/history; OCR and batch workflows; internationalization. Prioritize using user feedback, technical feasibility and unit economics.
