# F.L.E.G. ONE — Architecture Essentials

## Core Principles

1. Keep the application frontend-only.
2. Use React components.
3. Keep components reusable.
4. Keep mock data separate from UI.
5. Avoid unnecessary dependencies.
6. Avoid over-engineering.
7. Prioritize responsive design.
8. Prioritize accessibility.
9. Keep styling consistent.
10. Keep the code easy for another developer to understand.

---

## Component Rules

Reusable UI should become components.

Examples:

- Button
- EventCard
- PlayerCard
- RankingRow
- SectionHeader
- Navbar
- Footer

Do not duplicate identical UI.

---

## Data Rules

Do not hardcode repeated data directly inside JSX.

Use data files.

---

## Styling Rules

Use CSS variables for the design system.

Do not introduce random colors or typography values throughout the application.

---

## Dependency Rules

Do not install a library simply because it exists.

Only add a dependency when there is a clear reason.

---

## Performance Rules

- Optimize large images.
- Avoid unnecessary animations.
- Avoid unnecessary re-renders.
- Lazy-load gallery images where appropriate.

---

## Accessibility Rules

Every interactive element must be keyboard accessible.

Images must have meaningful alt text.

Use semantic HTML.