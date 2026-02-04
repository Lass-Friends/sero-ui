# @sero/ui

## Commands
- `pnpm storybook` - Run Storybook on port 6006
- `pnpm build` - Build library to dist/

## Code Style
- Use Tailwind classes, never inline hex values
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
