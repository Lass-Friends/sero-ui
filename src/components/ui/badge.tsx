import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 font-semibold tracking-[-0.03em] rounded-[8px]",
  {
    variants: {
      variant: {
        default: "bg-[#FAFAFA] text-[#0F0F0F] ring-2 ring-[#0A0A0A]",
        status: "bg-[#0A0A0A] text-[#FBBF24] ring-1 ring-[#1A1A1A]",
        attending: "bg-[#1A1A1A] text-foreground backdrop-blur-[40px] !pl-1 !pr-2",
        satellite: "bg-[#1A1A1A] text-foreground backdrop-blur-[40px] !h-7 !px-2",
        number: "bg-[#1A1A1A] text-[#22D3EE] !h-5 min-w-5 !px-1 justify-center !text-xs",
      },
      size: {
        sm: "h-5 px-2.5 text-xxs",
        default: "h-6 px-3 text-xs",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
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
  size = "default",
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
