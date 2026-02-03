import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 font-semibold backdrop-blur-[40px]",
  {
    variants: {
      variant: {
        default: "bg-card/80 text-card-foreground ring-2 ring-border",
        primary: "bg-primary text-primary-foreground",
        muted: "bg-muted/80 text-muted-foreground ring-1 ring-border",
      },
      size: {
        sm: "rounded-md px-2 py-0.5 text-[11px]",
        default: "rounded-lg px-2.5 py-1 text-xs",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "sm",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  icon?: React.ReactNode;
}

function Badge({
  className,
  variant = "default",
  size = "sm",
  icon,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      data-slot="badge"
      data-variant={variant}
      data-size={size}
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    >
      {icon && <span className="flex shrink-0 items-center">{icon}</span>}
      {children}
    </span>
  );
}

export { Badge, badgeVariants };
