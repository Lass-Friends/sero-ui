# figma-to-code

Convert a Figma design to a React component.

## Usage
`/figma-to-code <figma-url-or-node-id>`

## Instructions

1. **Fetch Figma data** using the `mcp__figma__get_figma_data` tool:
   - Extract fileKey from URL (e.g., `figma.com/design/<fileKey>/...`)
   - Extract nodeId from URL if present (`node-id=<nodeId>`)

2. **Analyze the design**:
   - Identify colors and map to existing Tailwind tokens in `src/styles/globals.css`
   - Note spacing values (padding, margin, gap)
   - Identify typography (font size, weight, line height)
   - Check for icons (use Heroicons equivalents)

3. **Download images** if needed using `mcp__figma__download_figma_images`:
   - Save to `public/` directory
   - Use descriptive filenames

4. **Generate component**:
   - Use CVA for variants if the design shows multiple states
   - Match Figma dimensions and spacing exactly
   - Use Tailwind classes only (no hex values)
   - Map Figma colors to design tokens

## Color Mapping
When you see Figma colors, map them to these tokens:
- Primary brand color → `bg-primary`, `text-primary`
- Secondary/muted → `bg-secondary`, `text-secondary`
- Background → `bg-background`
- Foreground/text → `text-foreground`
- Muted text → `text-muted-foreground`
- Borders → `border-border`
- Destructive/error → `bg-destructive`, `text-destructive`

## Output
Create both the component file and stories file following the new-component skill patterns.
