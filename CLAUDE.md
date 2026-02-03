# Claude Instructions for @sero/ui

## Project Overview

This is a React UI component library built with Tailwind CSS v4, Storybook 10, and Heroicons.

## Tech Stack

- **React 18/19** - UI framework
- **Tailwind CSS v4** - Styling (using `@theme inline` for design tokens)
- **Heroicons** - Icons (use `@heroicons/react/16/solid` for mini, `@heroicons/react/20/solid` for standard)
- **Class Variance Authority (CVA)** - Component variants
- **Storybook 10** - Component documentation and development
- **tsup** - Build tool

## Design Tokens

Design tokens are defined in `src/styles/globals.css`:
- Colors use OKLCh color space
- Dark mode is the default theme
- Use Tailwind classes that reference tokens (e.g., `bg-primary`, `text-muted-foreground`)

## Component Guidelines

1. **Always use Tailwind classes** - Never use inline hex values, use Tailwind color classes
2. **Use heroicons** - Import from `@heroicons/react/16/solid` (mini) or `@heroicons/react/20/solid`
3. **CVA for variants** - Use class-variance-authority for component variants
4. **Stories required** - Every component needs a `.stories.tsx` file
5. **Match Figma exactly** - Reference Figma designs for exact styling

## File Structure

```
src/
  components/
    ui/
      button.tsx
      button.stories.tsx
      ...
  styles/
    globals.css
```

## Storybook

- Runs on port 6006
- Dark mode is default
- Docs pages use pure black (#000000) background

## Common Commands

```bash
pnpm storybook    # Run Storybook
pnpm build        # Build library
```

## Figma

Components are designed in Figma: https://www.figma.com/design/iKPi0H8aAaidmvEm2roF1e/
