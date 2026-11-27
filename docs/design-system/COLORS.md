# Foldo — Color System

Status: proposed, pending UI and accessibility validation. Companion to `docs/DESIGN.md`.

## Principles

Thoughtful Productivity: warm, contemporary, approachable, inspired by Airbnb without copying its identity. Preserve the approved coral and peach brand. Use neutral surfaces, restrained accents, and separate brand colors from semantic states. Approximate visual distribution: 70% neutral surfaces, 20% warm surfaces, 7% typography, 3% accents (not a strict rule).

## Brand colors

| Token | HEX | Purpose |
|---|---|---|
| brand-coral | `#FF5A5F` | Identity |
| brand-peach | `#FF927D` | Illustration |
| brand-soft-peach | `#FFE4DC` | Soft surfaces |
| brand-warm-white | `#FFF8F5` | Warm backgrounds |
| brand-ink | `#222222` | Text |

## Primitive scales

| Shade | Coral | Neutral |
|---|---|---|
| 50 | `#FFF1F0` | `#FAFAF9` |
| 100 | `#FFE4E2` | `#F5F5F4` |
| 200 | `#FFC9C6` | `#E7E5E4` |
| 300 | `#FFA29F` | `#D6D3D1` |
| 400 | `#FF7779` | `#A8A29E` |
| 500 | `#FF5A5F` | `#78716C` |
| 600 | `#DF3943` | `#57534E` |
| 700 | `#C52D3A` | `#44403C` |
| 800 | `#A12432` | `#292524` |
| 900 | `#851F2C` | `#222222` |
| 950 | `#490B14` | `#141312` |

## Semantic tokens

Components consume semantic roles, not raw colors. Light and dark values are defined below. Success, warning, error and information must also use text or icons; never rely on color alone.

## Implementation — Tailwind CSS v4

Proposed workspace layout (adjust the web path if your app uses `src/app`):

```text
packages/design-system/
  package.json
  src/colors.css
  src/theme.css
  src/index.css
apps/web/app/globals.css
```

### `packages/design-system/package.json`

```json
{
  "name": "@foldo/design-system",
  "version": "0.0.0",
  "private": true,
  "exports": { "./styles.css": "./src/index.css" }
}
```

### `src/colors.css`

```css
@theme {
  --color-coral-50: #FFF1F0;
  --color-coral-100: #FFE4E2;
  --color-coral-200: #FFC9C6;
  --color-coral-300: #FFA29F;
  --color-coral-400: #FF7779;
  --color-coral-500: #FF5A5F;
  --color-coral-600: #DF3943;
  --color-coral-700: #C52D3A;
  --color-coral-800: #A12432;
  --color-coral-900: #851F2C;
  --color-coral-950: #490B14;
  --color-neutral-50: #FAFAF9;
  --color-neutral-100: #F5F5F4;
  --color-neutral-200: #E7E5E4;
  --color-neutral-300: #D6D3D1;
  --color-neutral-400: #A8A29E;
  --color-neutral-500: #78716C;
  --color-neutral-600: #57534E;
  --color-neutral-700: #44403C;
  --color-neutral-800: #292524;
  --color-neutral-900: #222222;
  --color-neutral-950: #141312;
  --color-brand-coral: #FF5A5F;
  --color-brand-peach: #FF927D;
  --color-brand-soft-peach: #FFE4DC;
  --color-brand-warm-white: #FFF8F5;
  --color-brand-ink: #222222;
}
```

### `src/theme.css`

```css
:root {
  --background: #FFFFFF;
  --foreground: var(--color-brand-ink);
  --primary: var(--color-coral-700);
  --primary-foreground: #FFFFFF;
  --primary-hover: var(--color-coral-800);
  --secondary: var(--color-neutral-100);
  --secondary-foreground: var(--color-brand-ink);
  --muted: var(--color-neutral-100);
  --muted-foreground: #717171;
  --accent: var(--color-coral-50);
  --accent-foreground: var(--color-coral-800);
  --card: #FFFFFF;
  --card-foreground: var(--foreground);
  --popover: var(--card);
  --popover-foreground: var(--foreground);
  --border: var(--color-neutral-200);
  --input: #78716C;
  --ring: var(--primary);
  --destructive: #B91C1C;
  --destructive-foreground: #FFFFFF;
  --success: #15803D;
  --success-surface: #F0FDF4;
  --warning: #A16207;
  --warning-surface: #FFFBEB;
  --error: #B91C1C;
  --error-surface: #FEF2F2;
  --info: #1D4ED8;
  --info-surface: #EFF6FF;
}

.dark {
  --background: var(--color-neutral-950);
  --foreground: var(--color-neutral-50);
  --primary: var(--color-coral-400);
  --primary-foreground: var(--color-brand-ink);
  --primary-hover: var(--color-coral-300);
  --secondary: var(--color-neutral-800);
  --secondary-foreground: var(--color-neutral-50);
  --muted: var(--color-neutral-800);
  --muted-foreground: var(--color-neutral-400);
  --accent: var(--color-coral-950);
  --accent-foreground: var(--color-coral-200);
  --card: var(--color-brand-ink);
  --card-foreground: var(--foreground);
  --popover: var(--card);
  --popover-foreground: var(--foreground);
  --border: var(--color-neutral-700);
  --input: #A8A29E;
  --ring: var(--primary);
  --destructive: #F87171;
  --destructive-foreground: #222222;
  --success: #86EFAC;
  --success-surface: #14532D;
  --warning: #FDE68A;
  --warning-surface: #422006;
  --error: #FCA5A5;
  --error-surface: #450A0A;
  --info: #93C5FD;
  --info-surface: #172554;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-primary-hover: var(--primary-hover);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-success: var(--success);
  --color-success-surface: var(--success-surface);
  --color-warning: var(--warning);
  --color-warning-surface: var(--warning-surface);
  --color-error: var(--error);
  --color-error-surface: var(--error-surface);
  --color-info: var(--info);
  --color-info-surface: var(--info-surface);
}
```

### `src/index.css`

```css
@import "./colors.css";
@import "./theme.css";
```

### Application setup

From the repository root (assuming the app is at `apps/web`):

```sh
pnpm --filter ./apps/web add '@foldo/design-system@workspace:*'
```

Ensure `globals.css` is imported by the root layout. In `apps/web/app/globals.css`:

```css
@import "tailwindcss";
@import "@foldo/design-system/styles.css";

@custom-variant dark (&:where(.dark, .dark *));

@layer base {
  body {
    @apply bg-background text-foreground;
  }
}
```

Tailwind should already be configured through `@tailwindcss/postcss` in the Next.js app. Do not duplicate Tailwind imports in the shared package. If shared React components are added later, register their source path with `@source` if automatic discovery does not include them.

### Usage

```tsx
<button className="rounded-lg bg-primary px-4 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
  Select files
</button>
```

Use `bg-brand-warm-white` for explicitly branded surfaces, `bg-card` for adaptive surfaces and `text-muted-foreground` for secondary text. The `.dark` class on the root HTML element switches semantic colors; a theme provider and persistence are separate tasks. When installing shadcn/ui, merge its generated CSS with these tokens rather than replacing them. Keep its additional tokens as needed (radius, sidebar, charts, etc.).

## Accessibility

Target WCAG AA: 4.5:1 for normal text, 3:1 for large text and relevant non-text UI boundaries. White on coral-500 is about 3.05:1, insufficient for normal text; white on coral-700 is about 5.5:1. Decorative borders may be subtle, but essential input boundaries and focus indicators need sufficient contrast. Validate hover, focus, disabled and both themes in real components. No full audit has been performed.

## Decisions and open work

- Brand colors and direction retained from approved identity.
- Primitive scales and semantic mappings remain proposals.
- Added hover, input, popover and dark semantic status tokens to support implementation; validate before release.
- HEX is used for simplicity; OKLCH is optional, not required by Tailwind v4.
- Typography, spacing, radii, motion, theme provider and component library remain separate design-system tasks.
