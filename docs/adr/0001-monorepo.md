# ADR-0001: Adopt a monorepo

## Status

Accepted

## Context

Foldo starts with a web application but expects shared document processing logic, configuration and potentially separate backend services. Consistent tooling and coordinated changes are important.

## Decision

Use a single repository with pnpm workspaces and Turborepo. Organize applications under apps, shared JavaScript/TypeScript packages under packages and future backend services under services. Centralize Biome and share TypeScript configuration. Extract packages when justified by reuse or clear boundaries.

## Consequences

Shared configuration, atomic cross-package changes and task caching simplify development. Workspace boundaries, dependency graphs and CI configuration require care. Non-JavaScript services may need separate tooling and pipelines.

## Alternatives considered

- Single application repository: simpler initially but less suited to anticipated shared libraries.
- Multiple repositories: stronger independent ownership but higher coordination overhead for the initial team.
