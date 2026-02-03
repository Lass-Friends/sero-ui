import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md text-sm font-semibold disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-ring focus-visible:ring-[3px] focus-visible:ring-offset-0 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80 disabled:bg-foreground disabled:text-background",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 active:bg-destructive/80 focus-visible:ring-destructive/40",
        outline:
          "border border-border bg-background hover:bg-accent/50 active:bg-accent/70",
        secondary:
          "bg-[#FAFAFA] text-[#0F0F0F] border border-[#0A0A0A] hover:bg-[#FAFAFA]/80 active:bg-[#FAFAFA]/70 disabled:opacity-40",
        ghost:
          "bg-accent/20 hover:bg-accent/50 active:bg-accent/70 disabled:bg-transparent disabled:text-background",
        link: "text-foreground underline-offset-4 hover:underline active:text-primary/80 disabled:text-background disabled:no-underline hover:text-primary hover:bg-card",
      },
      size: {
        default: "h-8 px-3 py-2 has-[>svg]:px-3",
        sm: "h-7 px-3 py-2 has-[>svg]:px-2.5 text-xs",
        lg: "h-10 px-8 py-2 has-[>svg]:px-4",
        icon: "size-8",
        "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-7",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
