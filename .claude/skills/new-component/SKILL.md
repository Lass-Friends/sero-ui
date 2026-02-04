# new-component

Scaffold a new UI component for @sero/ui.

## Usage
`/new-component <ComponentName>`

## Instructions

1. **Create component file** at `src/components/ui/<name>.tsx`:
   - Use CVA for variants
   - Include proper TypeScript types
   - Use Tailwind classes only (no hex values)
   - Import icons from `@heroicons/react/16/solid` or `@heroicons/react/20/solid`

2. **Create stories file** at `src/components/ui/<name>.stories.tsx`:
   - Default story showing basic usage
   - Stories for each variant
   - Use autodocs

3. **Add export to `package.json`** in the `exports` field:
   ```json
   "./<name>": {
     "import": "./dist/<name>.js",
     "types": "./dist/<name>.d.ts"
   }
   ```

## Component Template

```tsx
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ComponentProps } from "react";

const <name>Variants = cva(
  "base-classes-here",
  {
    variants: {
      variant: {
        default: "",
      },
      size: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type <Name>Props = ComponentProps<"div"> & VariantProps<typeof <name>Variants>;

export const <Name> = forwardRef<HTMLDivElement, <Name>Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={<name>Variants({ variant, size, className })}
        {...props}
      />
    );
  }
);

<Name>.displayName = "<Name>";
```

## Stories Template

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import { <Name> } from "./<name>";

const meta: Meta<typeof <Name>> = {
  title: "Components/<Name>",
  component: <Name>,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof <Name>>;

export const Default: Story = {
  args: {},
};
```
