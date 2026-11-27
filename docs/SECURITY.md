# Security and privacy

This document defines engineering requirements and planned controls. It is not a public privacy policy or a claim that all controls are implemented.

## Data handling

Prefer local processing. Local tools must not transmit document contents, filenames or derived sensitive data. Explain remote processing before upload. Collect only necessary metadata and define retention and deletion rules before enabling server processing or storage. Do not promise a specific retention period until it is implemented and verified.

## Untrusted documents

Treat all files as untrusted. Validate size, format and supported capabilities; do not rely solely on extensions or MIME headers. Bound memory, processing time and concurrency. Handle malformed, encrypted and unsupported files safely. Keep parsers updated. Remote processing must use isolated, least-privilege workers with restricted filesystem and network access.

## Access and storage (planned)

Enforce authorization server-side for every job and stored object. Use private storage, short-lived scoped access URLs, TLS and appropriate encryption at rest. Prevent cross-user access. Separate temporary processing artifacts from user-requested persistent storage. Verify deletion and lifecycle policies.

## Application security

Keep secrets server-side and outside Git. Validate external input. Apply appropriate security headers and CSRF protections for authenticated mutations. Rate-limit expensive operations. Verify billing webhook signatures and handle events idempotently before enabling payments. Avoid logging documents, filenames, tokens or personal information.

## Development and CI

Use lockfiles, least-privilege workflow permissions, reviewed dependencies and protected branches. Prefer pinned action revisions for stronger supply-chain integrity. Use synthetic fixtures and never upload sensitive test artifacts. Review dependency advisories and update vulnerable components.

## Incident readiness

Before public remote processing, establish a security reporting channel, incident triage, access revocation, containment and notification procedures. Do not publish an unverified contact address. Assess applicable privacy obligations with qualified support before launch.

## Verification

Test local tools for unintended network transmission, remote authorization boundaries, malformed inputs, resource limits and deletion behavior. Record known limitations and reassess this document whenever data flows change.
