import * as React from "react";
import { cn } from "@/lib/utils";

const AVATAR_COLORS = [
  "bg-chart-1",
  "bg-chart-2",
  "bg-chart-3",
  "bg-chart-4",
  "bg-chart-5",
];

function getColorFromString(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  shape?: "circle" | "rounded";
  status?: "star" | "none";
  fallback?: string;
}

const sizeClasses = {
  xs: "h-6 w-6 text-[8px]",
  sm: "h-8 w-8 text-[10px]",
  md: "h-10 w-10 text-xs",
  lg: "h-12 w-12 text-sm",
  xl: "h-24 w-24 text-xl",
} as const;

const statusSizes = {
  xs: "h-2 w-2",
  sm: "h-2.5 w-2.5",
  md: "h-3 w-3",
  lg: "h-3.5 w-3.5",
  xl: "h-5 w-5",
} as const;

function Avatar({
  className,
  src,
  alt = "",
  size = "md",
  shape = "circle",
  status = "none",
  fallback,
  ...props
}: AvatarProps) {
  const colorClass = fallback ? getColorFromString(fallback) : "bg-muted";

  return (
    <div
      data-slot="avatar"
      data-size={size}
      data-shape={shape}
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center overflow-hidden ring-2 ring-background",
        sizeClasses[size],
        shape === "circle" ? "rounded-full" : "rounded-xl",
        className
      )}
      {...props}
    >
      {src ? (
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <div
          className={cn(
            "flex h-full w-full items-center justify-center font-semibold text-foreground",
            colorClass
          )}
        >
          {fallback?.slice(0, 2).toUpperCase()}
        </div>
      )}
      {status === "star" && (
        <div
          data-slot="avatar-status"
          className={cn(
            "absolute bottom-0 right-0 flex items-center justify-center rounded-full bg-chart-2",
            statusSizes[size]
          )}
        >
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-full w-full p-px text-background"
          >
            <path
              fillRule="evenodd"
              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}
    </div>
  );
}

export { Avatar };
