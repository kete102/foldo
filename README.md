# Foldo

Foldo is a privacy-first document productivity platform designed to make working with documents simple, fast, and accessible.

## Core principles

- Local-first document processing.
- Privacy by design.
- Simple and intuitive user experience.
- SEO-first architecture.
- Performance and accessibility.
- Modular and maintainable software architecture.

## Technology stack

- Next.js
- React
- TypeScript
- pnpm
- Turborepo
- Biome
- Vitest
- Playwright
- GitHub Actions

## Getting started

### Prerequisites

- Node.js 24+
- pnpm

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

The web application is available at http://localhost:3000.

## Available commands

| Command              | Description                       |
| -------------------- | --------------------------------- |
| `pnpm dev`           | Start development servers         |
| `pnpm build`         | Build the project                 |
| `pnpm check`         | Check code quality                |
| `pnpm check:fix`     | Fix supported code quality issues |
| `pnpm typecheck`     | Check TypeScript types            |
| `pnpm test`          | Run unit tests                    |
| `pnpm test:coverage` | Generate coverage reports         |
| `pnpm test:e2e`      | Run end-to-end tests              |
| `pnpm test:e2e:ui`   | Open Playwright UI                |

## Project structure

```text
apps/       Applications
packages/   Shared packages
services/   Backend services
docs/       Project documentation
```

## Documentation

- [Product vision](docs/PRODUCT.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Roadmap](docs/ROADMAP.md)
- [Security](docs/SECURITY.md)
- [Architecture Decision Records](docs/adr/README.md)
- [Contributing](CONTRIBUTING.md)

## License

All rights reserved.
