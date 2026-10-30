# Tailwind Migration Implementation Plan

**Goal:** Replace project-specific presentation classes with Tailwind v4 utilities across the portfolio and blog while preserving their current layout, content, responsive behavior, and interactions.

**Architecture:** Keep Tailwind's import, semantic color tokens with light and dark values, document defaults, and keyframes in `app/globals.css`. Move component-specific presentation into JSX utility classes, including responsive, hover, focus, selected, and open states. Remove CSS selectors that only styled the migrated components.

**Tech Stack:** Next.js App Router, React, TypeScript, Tailwind CSS v4.

**Spec:** User request in the active conversation: remove the custom styling classes and use Tailwind.

## Global Constraints

- Preserve Spanish copy, routes, anchors, accessibility attributes, and existing interactions.
- Preserve the current dark visual direction and the white/gray/green portfolio hero.
- Use semantic palette roles (`primary`, `secondary`, `background`, `surface`, `border`, `foreground`, and related roles) in utility classes; do not put literal color values in component markup.
- Provide light and dark token values while keeping the portfolio dark by default.
- Keep only global tokens, base styles, and shared keyframes in `app/globals.css`.
- Retain semantic classes only when required as runtime selectors; do not keep classes solely to carry visual styling.
- Do not add or run tests unless requested.

## Review Focus

- Desktop and mobile navbar open/closed states remain usable and keyboard accessible.
- Portfolio layout, editor, career timeline, project sections, and marquee keep their responsive structure.
- Blog index, sidebar/mobile menu, Markdown, and interactive project explorer remain readable and functional.
- Shared and feature colors come from semantic Tailwind theme tokens with light and dark values.
- The final global stylesheet contains no component-specific presentation rules.

## Tasks

1. Define shared Tailwind v4 color, font, and animation tokens; retain minimal global base styles.
2. Migrate shared navbar and portfolio components to utility classes.
3. Migrate blog layout, Markdown renderer, and interactive project explorer to utility classes.
4. Remove obsolete component rules from `app/globals.css` and run typecheck plus diff whitespace checks.
