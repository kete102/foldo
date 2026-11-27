# Foldo --- Design Tokens

Status: proposed foundation; implementation and visual validation pending.

## Purpose

Foldo follows Thoughtful Productivity: warm, contemporary, natural and functional. Tokens ensure consistent interfaces without generic SaaS styling. Use native Tailwind CSS v4 values where suitable and semantic tokens where a design decision needs a name.

## Spacing

Use Tailwind's default 4px base (`--spacing: 0.25rem`). Preferred steps: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80 and 96px.

  Context              Size        Utility
  -------------------- ----------- ----------------
  Icon and text        8px         gap-2
  Related elements     12px        gap-3
  Form fields          16px        gap-4
  Card padding         24px        p-6
  Component groups     32px        gap-8
  Small sections       48px        py-12
  Main sections        64--96px    py-16 to py-24
  Marketing sections   96--128px   py-24 to py-32

No spacing.css is required unless custom spacing tokens become necessary.

## Radius

`packages/design-system/src/radius.css`:

``` css
@theme {
  --radius-xs: 0.25rem;
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-2xl: 1.5rem;
  --radius-3xl: 2rem;
}
```

  Component           Utility
  ------------------- --------------
  Checkbox            rounded-xs
  Tooltip             rounded-sm
  Input               rounded-md
  Button / dropdown   rounded-lg
  Tool card           rounded-xl
  Modal / dropzone    rounded-2xl
  Avatar              rounded-full

Avoid pill shapes for every control. Preserve these radius tokens when integrating shadcn/ui.

## Shadows and elevation

Prefer subtle borders on resting surfaces. Use elevation to communicate depth and interaction, not decoration. The following shadow values are initial implementation proposals.

`packages/design-system/src/shadows.css`:

``` css
@theme {
  --shadow-elevation-1: 0 1px 3px rgb(34 34 34 / 0.08);
  --shadow-elevation-2: 0 4px 12px rgb(34 34 34 / 0.12);
  --shadow-elevation-3: 0 12px 32px rgb(34 34 34 / 0.16);
}
```

Level 0: `shadow-none`; level 1: subtle elevation; level 2: hover and dropdowns; level 3: modals and floating UI. Validate dark-mode elevation separately; borders and surface contrast may work better than shadows.

## Motion

  Token        Duration   Usage
  ------------ ---------- ------------------------
  instant      80ms       Immediate feedback
  fast         120ms      Hover and buttons
  normal       200ms      Standard transitions
  slow         350ms      Modals and panels
  deliberate   500ms      Expressive transitions

`packages/design-system/src/motion.css`:

``` css
@theme {
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
  --ease-enter: cubic-bezier(0, 0, 0.2, 1);
  --ease-exit: cubic-bezier(0.4, 0, 1, 1);
  --ease-emphasized: cubic-bezier(0.2, 0.8, 0.2, 1);
}
:root {
  --duration-instant: 80ms;
  --duration-fast: 120ms;
  --duration-normal: 200ms;
  --duration-slow: 350ms;
  --duration-deliberate: 500ms;
}
```

Example: `transition-colors duration-(--duration-fast) ease-standard motion-reduce:transition-none`. Use CSS for simple interactions and Motion for complex sequences. Respect reduced-motion preferences in both CSS and JavaScript. Avoid gratuitous movement and layout shifts.

## Layout and component dimensions

`packages/design-system/src/layout.css`:

``` css
@theme {
  --container-reading: 45rem;
  --container-content: 60rem;
  --container-page: 80rem;
  --container-wide: 90rem;
  --spacing-control-sm: 2rem;
  --spacing-control-md: 2.5rem;
  --spacing-control-lg: 3rem;
  --spacing-control-xl: 3.5rem;
  --spacing-header: 4.5rem;
  --spacing-sidebar: 16rem;
  --spacing-icon-sm: 1rem;
  --spacing-icon-md: 1.25rem;
  --spacing-icon-lg: 1.5rem;
}
```

  Layout      Maximum width   Usage
  ----------- --------------- ---------------------------
  reading     720px           Articles and legal pages
  content     960px           Forms and settings
  page        1280px          Homepage and tool catalog
  wide        1440px          Complex tools
  workspace   Fluid           Full working area

Use `max-w-reading`, `max-w-content`, `max-w-page`, `max-w-wide` or `w-full` for fluid layouts. Keep native Tailwind breakpoints (sm 640px, md 768px, lg 1024px, xl 1280px, 2xl 1536px at default root size).

Controls: 32/40/48/56px; header: 72px; sidebar: 256px; icons: 16/20/24px. Aim for touch targets of at least 44px even when the visible control is smaller. Example: `h-control-lg`, `w-sidebar`, `size-icon-md`.

## Integration

Existing package: `@foldo/design-system`. Update `packages/design-system/src/index.css`:

``` css
@import "./colors.css";
@import "./typography.css";
@import "./radius.css";
@import "./shadows.css";
@import "./motion.css";
@import "./layout.css";
@import "./theme.css";
```

The existing `apps/web/src/app/globals.css` imports Tailwind and `@foldo/design-system/styles.css`. Keep that setup. No new Tailwind config is required.

Example:

``` tsx
<button className="h-control-lg rounded-lg bg-primary px-6 text-primary-foreground transition-colors duration-(--duration-fast) ease-standard hover:bg-primary-hover motion-reduce:transition-none">
  Select files
</button>
```

## Implementation checklist

-   [ ] Add CSS files and update index.css.
-   [ ] Verify utilities in the Next.js production build.
-   [ ] Check keyboard focus, touch targets, responsive layouts and reduced motion.
-   [ ] Validate shadows and component states in both themes.
-   [ ] Integrate shadcn/ui without overwriting Foldo tokens.

## Related documentation

-   [DESIGN.md](./DESIGN.md)
-   [COLORS.md](./COLORS.md)
-   TYPOGRAPHY.md (when available)

## Decisions and limitations

The spacing scale, radius scale, durations, layout widths and component dimensions follow the proposed Foldo design foundation. Shadow formulas and CSS utility naming are implementation proposals. The page container name avoids confusion with Tailwind's built-in container utility. Native spacing is retained instead of creating an empty spacing.css. These snippets have not been tested against the actual repository. Revisit them during component implementation and accessibility testing.
