# NileShop Design System

## Purpose

This document defines the design system guidelines for the NileShop project.

It serves as a shared reference for everyone working on the project by documenting the project's design tokens, usage rules, and naming conventions.

The goal is to maintain visual consistency, improve maintainability, and support scalability as the project grows.

---

# Design Tokens

Design tokens represent the core visual values of the project.

Instead of using raw values directly inside components, NileShop uses semantic tokens as the single source of truth.

Updating a token updates every component that depends on it.

---

## Colors

Color tokens ensure visual consistency across the application and prevent arbitrary color usage.

### Current Tokens

| Token                  | Purpose                              |
| ---------------------- | ------------------------------------ |
| `background`           | Default application background       |
| `foreground`           | Default text color                   |
| `primary`              | Primary brand color                  |
| `primary-foreground`   | Text displayed on primary surfaces   |
| `secondary`            | Secondary color                      |
| `secondary-foreground` | Text displayed on secondary surfaces |
| `muted`                | Muted backgrounds                    |
| `muted-foreground`     | Muted text                           |
| `accent`               | Accent color                         |
| `accent-foreground`    | Text displayed on accent surfaces    |
| `card`                 | Card background                      |
| `card-foreground`      | Card text color                      |
| `popover`              | Popover background                   |
| `popover-foreground`   | Popover text color                   |
| `border`               | Border color                         |
| `input`                | Input border color                   |
| `ring`                 | Focus ring color                     |
| `destructive`          | Destructive / error actions          |

---

## Radius

Radius tokens keep corner rounding consistent across the application.

### Current Tokens

| Token  | Purpose                        |
| ------ | ------------------------------ |
| `sm`   | Small radius                   |
| `md`   | Medium radius                  |
| `lg`   | Default project radius         |
| `xl`   | Large radius                   |
| `2xl`  | Extra large radius             |
| `3xl`  | Larger radius                  |
| `4xl`  | Largest predefined radius      |
| `card` | Semantic radius used for cards |

---

## Shadows

Shadow tokens define the project's elevation system.

### Current Tokens

| Token      | Purpose                                |
| ---------- | -------------------------------------- |
| `card`     | Default elevation used for cards       |
| `elevated` | Higher elevation for floating elements |

---

## Container

The application uses a shared container token to keep layouts aligned and consistent.

### Current Tokens

| Token | Purpose                               |
| ----- | ------------------------------------- |
| `app` | Default maximum content width (80rem) |

---

# Usage Rules

## General Rules

- Always prefer semantic design tokens over hard-coded values.
- Avoid arbitrary values unless there is a clear and justified reason.
- Keep components consistent with the project's design system.
- Design tokens are the single source of truth for reusable visual values.

---

## Spacing

- Follow the project's spacing scale.
- Avoid arbitrary spacing values whenever possible.
- Use consistent spacing patterns across similar layouts.

### Allowed Values

| Class  | Value | Typical Use                   |
| ------ | ----- | ----------------------------- |
| `p-2`  | 8px   | Tight spacing (icons, badges) |
| `p-4`  | 16px  | Default component padding     |
| `p-6`  | 24px  | Cards, form sections          |
| `p-8`  | 32px  | Section spacing               |
| `p-12` | 48px  | Large section spacing         |

**Not allowed** without a documented reason: `p-3`, `p-5`, `p-7`, `p-10`, or any arbitrary value like `p-[18px]`.

---

## Typography

- Follow the project's typography scale.
- Avoid random font sizes.
- Keep typography consistent between similar UI elements.

### Allowed Values

| Class       | Typical Use           |
| ----------- | --------------------- |
| `text-sm`   | Captions, helper text |
| `text-base` | Default body text     |
| `text-lg`   | Subheadings           |
| `text-xl`   | Section headings      |
| `text-2xl`  | Page headings         |

**Not allowed** yet: `text-3xl` and above, unless a Hero Section explicitly requires it (must be discussed first).

---

## Shadows

- Use `shadow-card` for regular surfaces.
- Use `shadow-elevated` only for elements that require a stronger elevation.
- Avoid introducing custom shadow values.

**Not allowed**: default Tailwind shadows (`shadow-sm`, `shadow-md`, `shadow-2xl`, etc.) — use the semantic tokens above instead.

---

## Radius

- Use semantic radius tokens whenever available.
- Avoid arbitrary border-radius values.

---

## Container

- Use the shared application container (`max-w-app`) for page layouts.
- Avoid defining page widths individually unless there is a justified exception.

---

## Colors

- Always use semantic color utilities.
- Avoid hard-coded colors inside components.
- Theme changes should work without modifying component code.

---

## Transitions

- Keep transition durations consistent.
- Avoid unnecessary animations.
- Animations should improve usability, not distract users.

### Allowed Values

| Class          | Typical Use                                     |
| -------------- | ----------------------------------------------- |
| `duration-200` | Fast interactions (button hover)                |
| `duration-300` | Slower interactions (drawer open, theme switch) |

**Not allowed** without justification: `duration-500` and above (except explicit page transitions).

---

# Naming Conventions

- Prefer semantic names over implementation-specific names.
- Name tokens by their purpose rather than their appearance.
- Keep naming predictable and consistent across the project.

### Good Examples

- `primary`
- `secondary`
- `card`
- `elevated`
- `app`

### Avoid

- `blue`
- `green`
- `shadow-large`
- `radius-12`

---

# Future Tokens

The following tokens may be introduced when the project requires them:

- Success colors
- Warning colors
- Information colors
- Typography tokens
- Additional elevation levels
- Additional semantic component tokens

---

# Philosophy

The Design System exists to make visual decisions predictable, reusable, and easy to maintain.

When introducing a new token, ask:

- Is this value reused?
- Does it represent a design decision rather than a one-off value?
- Will giving it a semantic name improve readability and maintainability?

If the answer is **yes**, it likely belongs in the Design System.
