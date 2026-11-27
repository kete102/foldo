# Foldo — Brand Identity & Design Philosophy

Status: Concept approved; visual assets and design tokens pending refinement.

## 1. Vision

Foldo is a privacy-first document productivity platform. It should feel like a thoughtfully crafted product, not a generic SaaS template or an AI-generated interface. Every design decision should contribute to clarity, trust, usability or brand identity.

**Design direction:** Thoughtful Productivity — warm, approachable, contemporary, refined and functional.

**Brand promise:** Tus documentos, sin complicaciones.

## 2. Design references

- Airbnb (primary): human-centered design, warmth, visual hierarchy, thoughtful interactions and subtle motion.
- Apple: craftsmanship, attention to detail and clarity.
- Things 3: functional simplicity and refined microinteractions.
- Dropbox: distinctive document-oriented visual language.

These references inform design principles, not the reproduction of another brand's identity.

## 3. Brand identity

The visual name is **foldo**, always lowercase in the wordmark. Use Foldo in ordinary prose where appropriate.

The name evokes folding, transforming and organizing documents. The brand must remain relevant beyond PDF tools.

The approved conceptual direction uses overlapping sheets of paper with folded corners, soft geometry and a warm coral palette. The wordmark should feel approachable, contemporary and natural.

### Logo requirements

- Distinctive vector symbol and lowercase wordmark.
- Horizontal lockup, standalone symbol and favicon.
- Recognizable at small sizes, including 16 × 16 px.
- Monochrome, light and dark variants.
- Subtle motion inspired by paper folding or layering.
- Avoid generic AI sparkles and unnecessary decorative effects.

Final SVG geometry, wordmark customization, spacing and minimum sizes remain pending. The approved concept is not yet a production-ready logo.

## 4. Initial color palette

| Color | Hex | Intended role |
|---|---|---|
| Coral | `#FF5A5F` | Primary brand accent |
| Peach | `#FFE4DC` | Secondary brand color |
| Cream | `#FFF8F5` | Warm surface |
| Charcoal | `#222222` | Primary foreground |
| Gray | `#717171` | Muted foreground |
| Border | `#E5E5E5` | Subtle boundaries |

Exploratory illustration colors include `#FF927D` and `#FFF0EB`. The palette is provisional. Reserve coral for meaningful accents and primary actions rather than applying it everywhere.

Develop accessible color scales, semantic colors, interaction states and light/dark themes before finalizing tokens. White normal-sized text on `#FF5A5F` does not meet WCAG AA contrast; use an accessible alternative for buttons and text.

## 5. Typography

Satoshi is the preferred candidate, pending license review and visual validation. Start with one family for both the public website and workspace. Use a clear hierarchy, comfortable line heights and restrained weights. The wordmark may require custom letterforms. Final font sizes, weights and fallbacks are pending.

## 6. Interface principles

- Simplicity without generic minimalism; functionality before decoration.
- Generous whitespace, clear hierarchy, subtle borders and restrained shadows.
- Balanced corner radii (initial exploration: 8–12 px), rather than rounding every element.
- Use varied, intentional compositions instead of repetitive card grids.
- Avoid decorative gradients, glow effects, excessive glassmorphism and unnecessary badges.
- Customize shadcn/ui to reflect Foldo's identity; the component library is an implementation foundation, not the visual identity.
- Prioritize semantic HTML, keyboard navigation, visible focus and accessible contrast.
- Public website: expressive, approachable, SEO-oriented.
- Workspace: compact, focused and functional.
- Both areas share the same design tokens and interaction patterns.

## 7. Iconography

Create a distinctive family of document-tool icons inspired by paper, layers and transformation. Use consistent geometry, stroke weights and visual proportions. Core examples: merge, split, compress, convert PDF to JPG, organize and rotate.

Use Lucide for functional interface actions such as navigation, settings, closing dialogs and menus. Custom tool icons remain to be produced.

## 8. Motion design

Motion is part of the design system, not an afterthought. Animations should communicate state, provide feedback and preserve spatial continuity. Prefer subtle, natural, interruptible transitions over exaggerated movement.

| Interaction | Initial duration |
|---|---:|
| Button hover | 150 ms |
| Press feedback | 100 ms |
| Tool hover | 220 ms |
| Dropdown | 180 ms |
| Modal | 250 ms |
| State transition | 300 ms |
| Success feedback | 400–600 ms |

Use CSS for simple interactions and consider Motion for more complex transitions. Respect `prefers-reduced-motion`. Durations are starting points, not fixed requirements.

## 9. Brand voice

Use direct, friendly, human language. Avoid technical jargon and exaggerated marketing claims. The initial product language is Spanish.

| Avoid | Prefer |
|---|---|
| Ejecutar operación de concatenación | Unir PDF |
| Procesamiento finalizado exitosamente | Tu PDF está listo |
| Adquirir suscripción Premium | Mejorar a Pro |
| Error durante el procesamiento | No hemos podido procesar tu archivo |

Privacy claims must accurately reflect whether an operation runs locally or on a server.

## 10. Design roadmap

- [x] Visual direction
- [x] Brand identity concept
- [ ] Final logo assets and usage guidelines
- [ ] Accessible color palette and semantic scales
- [ ] Typography and license validation
- [ ] Design tokens (spacing, radius, shadows, motion)
- [ ] Tailwind CSS v4 implementation
- [ ] shadcn/ui customization
- [ ] Base components
- [ ] Application shell (header, footer, navigation and layouts)
- [ ] Homepage design and implementation

## 11. Quality standard

The interface should feel intentional, cohesive and carefully constructed at every level, from the overall layout to the smallest interaction. Review new components against this document and update it when design decisions change.
