# component-review

Review a component against @sero/ui standards.

## Usage
`/component-review <component-name-or-path>`

## Instructions

Read the component file and check against these criteria:

### 1. Tailwind Usage
- [ ] Uses Tailwind classes only (no inline hex values like `#fff`)
- [ ] Uses design tokens (`bg-primary`, not `bg-blue-500`)
- [ ] No inline styles

### 2. CVA Structure
- [ ] Uses class-variance-authority for variants
- [ ] Has proper TypeScript types with `VariantProps`
- [ ] Exports variant function if needed elsewhere

### 3. Component Quality
- [ ] Uses `forwardRef` for DOM element components
- [ ] Has `displayName` set
- [ ] Spreads remaining props
- [ ] Accepts `className` prop and merges with variants

### 4. Icons
- [ ] Uses `@heroicons/react/16/solid` (16px/mini) or `@heroicons/react/20/solid` (20px)
- [ ] Not using other icon libraries

### 5. Stories
- [ ] Has `.stories.tsx` file
- [ ] Has `autodocs` tag
- [ ] Has stories for each variant
- [ ] Has stories for edge cases (loading, disabled, etc.)

### 6. Figma Match (if design exists)
- [ ] Spacing matches Figma
- [ ] Colors match Figma
- [ ] Typography matches Figma

## Output Format

```
## Component Review: <Name>

### Passing
- ✓ Uses Tailwind classes
- ✓ Has CVA variants

### Issues
- ✗ Missing stories for disabled state
- ✗ Uses inline color #333

### Recommendations
1. Add disabled variant story
2. Replace #333 with text-muted-foreground
```
