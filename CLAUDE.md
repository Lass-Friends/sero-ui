# @sero/ui

## Commands
- `pnpm storybook` - Run Storybook on port 6006
- `pnpm build` - Build library to dist/

## Code Style
- **ALWAYS use design tokens** - This is a design system component library. NEVER hardcode values (colors, spacing, radii, line-heights, font sizes, etc.). Everything must use tokens so the system scales properly.
- Reference tokens from `src/styles/globals.css` (e.g., `text-foreground`, `bg-muted`, `rounded-md`)
- If a token doesn't exist, add it to globals.css first
- Always reuse existing components - never duplicate component logic (e.g., use Avatar instead of raw img tags)
- Icons: `@heroicons/react/16/solid` (mini) or `@heroicons/react/20/solid`
- Variants: Use CVA (class-variance-authority)
- IMPORTANT: Match Figma designs exactly

## New Components
1. Create `src/components/ui/<name>.tsx`
2. Create `src/components/ui/<name>.stories.tsx`
3. Add export to `package.json`

## Figma
Design file: https://www.figma.com/design/iKPi0H8aAaidmvEm2roF1e/

## Gotchas
- Dark mode is default theme
- Use `text-background` for text on colored backgrounds (dark mode)
