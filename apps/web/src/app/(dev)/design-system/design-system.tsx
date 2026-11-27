"use client";

import { Button } from "@foldo/ui/components/button";
import {
  ArrowRight,
  Check,
  Download,
  FileText,
  Moon,
  Plus,
  Sun,
  Trash2,
  Upload,
} from "lucide-react";
import { type ReactNode, useEffect, useRef, useState } from "react";
import { FeedbackPreview } from "./preview/feedback-preview";
import { FormControlsPreview } from "./preview/form-controls-preview";
import { OverlaysPreview } from "./preview/overlays-preview";
import { SelectionControlsPreview } from "./preview/selection-controls-preview";
import { SurfacesPreview } from "./preview/surfaces-preview";
import { NavigationMenuPreview } from "./preview/navigation-preview-menu";

const navigation = [
  {
    title: "Foundations",
    items: [
      { id: "overview", label: "Overview" },
      { id: "colors", label: "Colors" },
      { id: "typography", label: "Typography" },
      { id: "spacing", label: "Spacing" },
      { id: "radius", label: "Border radius" },
      { id: "shadows", label: "Shadows" },
      { id: "motion", label: "Motion" },
    ],
  },
  {
    title: "Components",
    items: [
      { id: "buttons", label: "Buttons" },
      { id: "form-controls", label: "Form controls" },
      { id: "selection-controls", label: "Selection controls" },
      { id: "surfaces", label: "Surfaces" },
      { id: "overlays", label: "Overlays" },
      { id: "feedback", label: "Feedback" },
      { id: "navigation", label: "Navigation" },
    ],
  },
];

const colorScales = [
  {
    name: "Coral",
    token: "coral",
    shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  },
  {
    name: "Neutral",
    token: "neutral",
    shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  },
];

const semanticColors = [
  { name: "Background", className: "bg-background" },
  { name: "Foreground", className: "bg-foreground" },
  { name: "Primary", className: "bg-primary" },
  { name: "Primary hover", className: "bg-primary-hover" },
  { name: "Secondary", className: "bg-secondary" },
  { name: "Muted", className: "bg-muted" },
  { name: "Accent", className: "bg-accent" },
  { name: "Card", className: "bg-card" },
  { name: "Border", className: "bg-border" },
  { name: "Destructive", className: "bg-destructive" },
  { name: "Ring", className: "bg-ring" },
];

const typography = [
  { name: "Display", className: "text-display", size: "56px" },
  { name: "Heading 1", className: "text-h1", size: "40px" },
  { name: "Heading 2", className: "text-h2", size: "32px" },
  { name: "Heading 3", className: "text-h3", size: "24px" },
  { name: "Heading 4", className: "text-h4", size: "20px" },
  { name: "Body large", className: "text-body-lg", size: "18px" },
  { name: "Body", className: "text-body", size: "16px" },
  { name: "Body small", className: "text-body-sm", size: "14px" },
  { name: "Caption", className: "text-caption", size: "12px" },
];

const spacing = [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96];

const radii = [
  { name: "xs", value: "4px", className: "rounded-xs" },
  { name: "sm", value: "6px", className: "rounded-sm" },
  { name: "md", value: "8px", className: "rounded-md" },
  { name: "lg", value: "12px", className: "rounded-lg" },
  { name: "xl", value: "16px", className: "rounded-xl" },
  { name: "2xl", value: "24px", className: "rounded-2xl" },
  { name: "3xl", value: "32px", className: "rounded-3xl" },
  { name: "full", value: "Full", className: "rounded-full" },
];

const shadows = [
  { name: "Level 0", className: "shadow-none" },
  { name: "Level 1", className: "shadow-elevation-1" },
  { name: "Level 2", className: "shadow-elevation-2" },
  { name: "Level 3", className: "shadow-elevation-3" },
];

const durations = [
  { name: "Instant", token: "--duration-instant", value: "80ms" },
  { name: "Fast", token: "--duration-fast", value: "120ms" },
  { name: "Normal", token: "--duration-normal", value: "200ms" },
  { name: "Slow", token: "--duration-slow", value: "350ms" },
  { name: "Deliberate", token: "--duration-deliberate", value: "500ms" },
];

const buttonVariants = [
  "default",
  "secondary",
  "outline",
  "ghost",
  "destructive",
  "link",
] as const;

const buttonSizes = ["sm", "default", "lg", "xl"] as const;

function Section({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 space-y-6 border-b border-border pb-16"
    >
      <div className="space-y-2">
        <h2 className="text-h2">{title}</h2>
        <p className="text-body text-muted-foreground">{description}</p>
      </div>

      {children}
    </section>
  );
}

function Preview({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <div className="border-b border-border px-6 py-4">
        <h3 className="text-body font-semibold">{title}</h3>

        {description && (
          <p className="mt-1 text-body-sm text-muted-foreground">
            {description}
          </p>
        )}
      </div>

      <div className="p-6">{children}</div>
    </div>
  );
}

function TokenLabel({ children }: { children: ReactNode }) {
  return <code className="text-xs text-muted-foreground">{children}</code>;
}

export function DesignSystem() {
  const [dark, setDark] = useState(false);
  const [loading, setLoading] = useState(false);
  const [motionActive, setMotionActive] = useState(false);

  const loadingTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    const previousTheme = root.classList.contains("dark");

    root.classList.toggle("dark", dark);

    return () => {
      root.classList.toggle("dark", previousTheme);
    };
  }, [dark]);

  useEffect(() => {
    return () => {
      if (loadingTimeout.current !== null) {
        clearTimeout(loadingTimeout.current);
      }
    };
  }, []);

  function simulateLoading() {
    if (loadingTimeout.current !== null) return;

    setLoading(true);

    loadingTimeout.current = setTimeout(() => {
      setLoading(false);
      loadingTimeout.current = null;
    }, 2500);
  }

  return (
    <div>
      <div className="min-h-screen bg-background text-foreground">
        {/* Header */}

        <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
          <div className="mx-auto flex h-header max-w-wide items-center justify-between px-6 lg:px-10">
            <div className="flex items-center gap-4">
              <a href="#overview" className="text-h3 font-bold tracking-tight">
                foldo<span className="text-primary">.</span>
              </a>

              <div className="hidden h-6 w-px bg-border sm:block" />

              <span className="hidden text-body-sm text-muted-foreground sm:block">
                Design System
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span className="hidden text-caption text-muted-foreground sm:block">
                v0.1.0
              </span>

              <Button
                variant="outline"
                size="icon"
                aria-label="Toggle dark mode"
                aria-pressed={dark}
                onClick={() => setDark((current) => !current)}
              >
                {dark ? <Sun /> : <Moon />}
              </Button>
            </div>
          </div>
        </header>

        <div className="mx-auto flex max-w-wide">
          {/* Sidebar */}

          <aside className="hidden w-sidebar shrink-0 border-r border-border lg:block">
            <nav
              aria-label="Design system navigation"
              className="sticky top-[var(--spacing-header)] max-h-[calc(100dvh-var(--spacing-header))] space-y-8 overflow-y-auto px-6 py-10"
            >
              {navigation.map((group) => (
                <div key={group.title} className="space-y-3">
                  <p className="text-caption font-semibold uppercase tracking-widest text-muted-foreground">
                    {group.title}
                  </p>

                  <div className="flex flex-col gap-1">
                    {group.items.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="rounded-md px-3 py-2 text-body-sm transition-colors duration-(--duration-fast) ease-standard hover:bg-accent hover:text-accent-foreground focus-visible:outline-2 focus-visible:outline-ring"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </aside>

          {/* Main content */}

          <main className="min-w-0 flex-1 space-y-16 px-6 py-12 lg:px-12">
            {/* Overview */}
            <section id="overview" className="scroll-mt-28 space-y-6">
              <p className="text-caption font-semibold uppercase tracking-widest text-primary">
                Foldo / Foundations
              </p>

              <h1 className="text-h1 md:text-display">Thoughtful by design.</h1>

              <p className="max-w-reading text-body-lg text-muted-foreground">
                The visual language, foundations and reusable components that
                make Foldo feel consistent, approachable and carefully crafted.
              </p>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  {
                    title: "Foundations",
                    description: "Color, typography and design tokens.",
                  },
                  {
                    title: "Components",
                    description: "Reusable and accessible UI elements.",
                  },
                  {
                    title: "Motion",
                    description: "Subtle and purposeful interactions.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="space-y-2 rounded-xl border border-border p-6"
                  >
                    <h2 className="text-h4">{item.title}</h2>
                    <p className="text-body-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
            {/* Colors */}
            <Section
              id="colors"
              title="Colors"
              description="Our primitive color palette and semantic theme tokens."
            >
              {colorScales.map((scale) => (
                <Preview key={scale.name} title={scale.name}>
                  <div className="grid grid-cols-4 gap-4 sm:grid-cols-6 xl:grid-cols-11">
                    {scale.shades.map((shade) => (
                      <div key={shade} className="space-y-2">
                        <div
                          className="aspect-square rounded-lg border border-border bg-clip-padding"
                          style={{
                            backgroundColor: `var(--color-${scale.token}-${shade})`,
                          }}
                        />
                        <TokenLabel>{shade}</TokenLabel>
                      </div>
                    ))}
                  </div>
                </Preview>
              ))}

              <Preview
                title="Semantic colors"
                description="These colors adapt to the active theme."
              >
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 xl:grid-cols-4">
                  {semanticColors.map((color) => (
                    <div key={color.name} className="space-y-2">
                      <div
                        className={`h-20 rounded-lg border border-border ${color.className}`}
                      />
                      <p className="text-body-sm font-medium">{color.name}</p>
                      <TokenLabel>{color.className}</TokenLabel>
                    </div>
                  ))}
                </div>
              </Preview>
            </Section>
            {/* Typography */}
            <Section
              id="typography"
              title="Typography"
              description="Satoshi is the primary typeface of Foldo."
            >
              <Preview title="Type specimen">
                <div className="space-y-4">
                  <p className="text-7xl font-bold tracking-tight sm:text-8xl">
                    Aa Bb Cc
                  </p>

                  <p className="break-all text-body-lg">
                    ABCDEFGHIJKLMNOPQRSTUVWXYZ
                  </p>

                  <p className="break-all text-body-lg">
                    abcdefghijklmnopqrstuvwxyz
                  </p>

                  <p className="text-body-lg">0123456789 &amp;!?@#</p>
                </div>
              </Preview>

              <Preview title="Type scale">
                <div className="divide-y divide-border">
                  {typography.map((type) => (
                    <div
                      key={type.name}
                      className="grid gap-3 py-6 first:pt-0 last:pb-0 sm:grid-cols-[140px_1fr] sm:items-center"
                    >
                      <div className="space-y-1">
                        <p className="text-body-sm font-medium">{type.name}</p>

                        <TokenLabel>{type.size}</TokenLabel>

                        <div>
                          <TokenLabel>{type.className}</TokenLabel>
                        </div>
                      </div>

                      <p className={type.className}>
                        Your documents. Simply better.
                      </p>
                    </div>
                  ))}
                </div>
              </Preview>

              <Preview title="Font weights">
                <div className="space-y-4 text-h3">
                  <p className="font-light">Light — 300</p>
                  <p className="font-normal">Regular — 400</p>
                  <p className="font-medium">Medium — 500</p>
                  <p className="font-semibold">Semibold — 600</p>
                  <p className="font-bold">Bold — 700</p>
                  <p className="font-extrabold">Extra bold — 800</p>
                  <p className="font-black">Black — 900</p>
                </div>
              </Preview>
            </Section>
            {/* Spacing */}
            <Section
              id="spacing"
              title="Spacing"
              description="A consistent spacing system based on a 4px unit."
            >
              <Preview title="Spacing scale">
                <div className="space-y-4">
                  {spacing.map((value) => (
                    <div key={value} className="flex items-center gap-4">
                      <div className="w-16 shrink-0">
                        <TokenLabel>{value}px</TokenLabel>
                      </div>

                      <div
                        className="h-6 rounded-sm bg-primary/25"
                        style={{
                          width: `calc(var(--spacing) * ${value / 4} * 2)`,
                        }}
                      />

                      <TokenLabel>{value / 4}</TokenLabel>
                    </div>
                  ))}
                </div>
              </Preview>
            </Section>
            {/* Border radius */}
            <Section
              id="radius"
              title="Border radius"
              description="Soft and intentional shapes throughout the interface."
            >
              <Preview title="Radius scale">
                <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
                  {radii.map((radius) => (
                    <div
                      key={radius.name}
                      className="flex flex-col items-center gap-3"
                    >
                      <div
                        className={`size-20 border border-primary/30 bg-primary/10 ${radius.className}`}
                      />

                      <p className="text-body-sm font-medium">{radius.name}</p>

                      <TokenLabel>{radius.value}</TokenLabel>
                      <TokenLabel>{radius.className}</TokenLabel>
                    </div>
                  ))}
                </div>
              </Preview>
            </Section>
            {/* Shadows */}
            <Section
              id="shadows"
              title="Shadows"
              description="Subtle elevation to communicate depth and interaction."
            >
              <Preview title="Elevation levels">
                <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
                  {shadows.map((shadow) => (
                    <div key={shadow.name} className="space-y-4">
                      <div
                        className={`flex h-28 items-center justify-center rounded-xl border border-border bg-card ${shadow.className}`}
                      >
                        <p className="text-body-sm font-medium">
                          {shadow.name}
                        </p>
                      </div>

                      <TokenLabel>{shadow.className}</TokenLabel>
                    </div>
                  ))}
                </div>
              </Preview>
            </Section>
            {/* Motion */}
            <Section
              id="motion"
              title="Motion"
              description="Purposeful animations that make the interface feel responsive and natural."
            >
              <Preview
                title="Duration scale"
                description="Compare the different transition durations."
              >
                <div className="mb-8">
                  <Button
                    variant="outline"
                    aria-pressed={motionActive}
                    onClick={() => setMotionActive((current) => !current)}
                  >
                    Play animation
                  </Button>
                </div>

                <div className="space-y-6">
                  {durations.map((duration) => (
                    <div key={duration.name} className="space-y-2">
                      <div className="flex justify-between">
                        <p className="text-body-sm font-medium">
                          {duration.name}
                        </p>

                        <TokenLabel>{duration.value}</TokenLabel>
                      </div>

                      <div className="flex h-12 items-center overflow-hidden rounded-lg bg-muted px-2">
                        <div
                          className="h-8 w-1/4 rounded-md bg-primary transition-transform ease-standard motion-reduce:transition-none"
                          style={{
                            transitionDuration: `var(${duration.token})`,
                            transform: motionActive
                              ? "translateX(300%)"
                              : "translateX(0)",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Preview>

              <Preview
                title="Microinteractions"
                description="Hover over or press the document card."
              >
                <button
                  type="button"
                  className="flex w-48 flex-col items-center gap-4 rounded-xl border border-border bg-card p-8 transition-[translate,scale,box-shadow] duration-(--duration-normal) ease-emphasized hover:-translate-y-1 hover:shadow-elevation-2 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-ring motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100"
                >
                  <div className="flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <FileText className="size-7" />
                  </div>

                  <span className="text-body font-semibold">Merge PDF</span>
                </button>
              </Preview>
            </Section>
            {/* Buttons */}
            <Section
              id="buttons"
              title="Buttons"
              description="Interactive controls for actions and navigation."
            >
              <Preview title="Variants">
                <div className="flex flex-wrap items-center gap-4">
                  {buttonVariants.map((variant) => (
                    <Button key={variant} variant={variant}>
                      {variant.charAt(0).toUpperCase() + variant.slice(1)}
                    </Button>
                  ))}
                </div>
              </Preview>

              <Preview title="Sizes">
                <div className="flex flex-wrap items-end gap-6">
                  {buttonSizes.map((size) => (
                    <div
                      key={size}
                      className="flex flex-col items-center gap-3"
                    >
                      <Button size={size}>Get started</Button>
                      <TokenLabel>{size}</TokenLabel>
                    </div>
                  ))}
                </div>
              </Preview>

              <Preview title="Icon buttons">
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="icon-sm" aria-label="Add file">
                    <Plus />
                  </Button>

                  <Button size="icon" aria-label="Upload file">
                    <Upload />
                  </Button>

                  <Button size="icon-lg" aria-label="Download file">
                    <Download />
                  </Button>

                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="Add document"
                  >
                    <Plus />
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Remove document"
                  >
                    <Trash2 />
                  </Button>
                </div>
              </Preview>

              <Preview title="Buttons with icons">
                <div className="flex flex-wrap items-center gap-4">
                  <Button>
                    <Upload />
                    Upload files
                  </Button>

                  <Button variant="outline">
                    <Plus />
                    Add files
                  </Button>

                  <Button size="lg">
                    Convert PDF
                    <ArrowRight />
                  </Button>

                  <Button variant="destructive">
                    <Trash2 />
                    Delete file
                  </Button>
                </div>
              </Preview>

              <Preview title="Disabled states">
                <div className="flex flex-wrap items-center gap-4">
                  <Button disabled>Default</Button>
                  <Button variant="secondary" disabled>
                    Secondary
                  </Button>
                  <Button variant="outline" disabled>
                    Outline
                  </Button>
                  <Button variant="destructive" disabled>
                    Destructive
                  </Button>
                </div>
              </Preview>

              <Preview
                title="Loading states"
                description="Click the interactive button to simulate a document operation."
              >
                <div className="flex flex-wrap items-center gap-4">
                  <Button loading>Processing...</Button>

                  <Button variant="outline" loading>
                    Uploading...
                  </Button>

                  <Button loading={loading} onClick={simulateLoading} size="lg">
                    {loading ? "Converting..." : "Convert PDF"}
                  </Button>
                </div>

                <output className="mt-4 text-body-sm text-muted-foreground">
                  {loading ? "Processing document..." : "Ready"}
                </output>
              </Preview>

              <Preview title="Composition">
                <div className="flex flex-wrap items-center gap-4">
                  <Button asChild>
                    <a href="#overview">
                      Back to overview
                      <ArrowRight />
                    </a>
                  </Button>

                  <Button variant="secondary">
                    <Check />
                    Completed
                  </Button>
                </div>
              </Preview>

              <Preview
                title="Keyboard accessibility"
                description="Use Tab to navigate between buttons and Enter or Space to activate them."
              >
                <div className="flex flex-wrap items-center gap-4">
                  <Button>First action</Button>
                  <Button variant="outline">Second action</Button>
                  <Button disabled>Skipped action</Button>
                  <Button variant="ghost">Last action</Button>
                </div>
              </Preview>
            </Section>

            <Section
              id="form-controls"
              title="Form controls"
              description="Accessible and consistent controls for collecting user input."
            >
              <FormControlsPreview />
            </Section>

            <Section
              id="selection-controls"
              title="Selection controls"
              description="Consistent controls for selecting options and configuring preferences."
            >
              <SelectionControlsPreview />
            </Section>

            <Section
              id="surfaces"
              title="Surfaces"
              description="Structural components for organizing content, communicating status and creating visual hierarchy."
            >
              <SurfacesPreview />
            </Section>

            <Section
              id="overlays"
              title="Overlays"
              description="Accessible floating surfaces for contextual information, actions and focused interactions."
            >
              <OverlaysPreview />
            </Section>

            <Section
              id="feedback"
              title="Feedback"
              description="Components for communicating progress, loading states and operation results."
            >
              <FeedbackPreview />
            </Section>

            <Section
              id="navigation"
              title="Navigation"
              description="Components for navigation."
            >
              <NavigationMenuPreview />
            </Section>

            {/* Footer */}
            <footer className="flex flex-wrap items-center justify-between gap-4 pb-8 text-body-sm text-muted-foreground">
              <p>Foldo Design System — v0.1.0</p>
              <p>Built with intention.</p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
