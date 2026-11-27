# ADR-0004: Adopt layered automated testing

## Status

Accepted

## Context

Document operations must preserve correctness across valid, malformed and unsupported inputs. Browser behavior and compatibility are also central to local processing.

## Decision

Use Vitest for unit and integration tests, colocated with source where practical. Use Playwright for end-to-end tests in Chromium, Firefox and WebKit, with separate e2e directories. Run Biome, TypeScript, Vitest, production build and Playwright in CI. Use synthetic document fixtures and verify actual output properties, not merely successful execution.

Prioritize domain logic, file validation, document integrity, authorization and billing when implemented. Add browser tests for downloads, worker behavior and SEO content. Do not impose arbitrary coverage thresholds during foundation; review coverage against risk as the product grows.

## Consequences

Fast feedback and browser coverage reduce regressions. Fixtures, browser installation and CI execution require maintenance. WebKit tests do not fully replace real Safari device testing. Automated checks cannot guarantee security, accessibility or document correctness in every case.

## Alternatives considered

- Manual testing only: insufficient reproducibility and regression protection.
- E2E-only testing: slower feedback and weaker isolation of domain failures.
- Unit-only testing: insufficient coverage of browser workflows and integration behavior.
