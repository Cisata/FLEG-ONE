# F.L.E.G. ONE — Codex Instructions

## Project Context

F.L.E.G. ONE is a React frontend for a 1v1 football event brand based in
Dimapur, Nagaland.

Read the project documentation before implementing features.

---

## Priority Order

When making implementation decisions, prioritize:

1. PRD requirements
2. Architecture constraints
3. Specs
4. Existing project patterns
5. Visual consistency
6. Performance
7. Convenience

---

## Implementation Process

For each feature:

### Step 1
Understand the requirement.

### Step 2
Inspect existing components.

### Step 3
Determine whether an existing component can be reused.

### Step 4
Implement the smallest clean solution.

### Step 5
Test the implementation.

### Step 6
Fix errors.

### Step 7
Check responsive behavior.

### Step 8
Check accessibility.

---

## Code Style

Prefer:

- Small components
- Descriptive names
- Simple logic
- Reusable components
- Clear data structures

Avoid:

- Giant components
- Deep nesting
- Repeated code
- Magic numbers
- Unnecessary abstractions

---

## React Rules

Prefer functional components.

Use props for reusable components.

Use state only when necessary.

Do not introduce global state unless required.

---

## CSS Rules

Use the established design system.

Avoid arbitrary styles that conflict with existing components.

Use responsive CSS.

Avoid horizontal overflow.

---

## Git

Use meaningful commits.

Examples:

feat: create navigation
feat: build hero section
feat: add event cards
style: improve mobile layout
fix: leaderboard overflow