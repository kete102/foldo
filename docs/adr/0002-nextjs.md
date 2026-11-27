# ADR-0002: Use Next.js for the web application

## Status

Accepted

## Context

Foldo needs indexable public tool pages alongside interactive browser-based document workflows. The project prioritizes SEO, performance and a TypeScript/React development experience.

## Decision

Use Next.js App Router with React and TypeScript. Prefer Server Components and static rendering for public content; use Client Components for interactive document workflows. Keep processing logic independent of the framework and load expensive browser dependencies on demand.

## Consequences

Next.js provides routing, metadata and rendering capabilities within one framework. It introduces server/client boundaries, framework-specific caching behavior and deployment considerations. SEO and performance still require deliberate implementation and measurement.

## Alternatives considered

- Astro: strong static content and islands model, but a different integration approach for the interactive application.
- React SPA with Vite: straightforward client development, but additional rendering and metadata infrastructure would be needed for SEO-oriented pages.
