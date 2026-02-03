import * as React from "react";
import { cn } from "@/lib/utils";

// iOS-style squircle masks with smooth continuous corners
const squircleMask = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M 0,33 C 0,7 7,0 33,0 L 67,0 C 93,0 100,7 100,33 L 100,67 C 100,93 93,100 67,100 L 33,100 C 7,100 0,93 0,67 Z' fill='black'/%3E%3C/svg%3E")`;

// Rounder version for small badges
const badgeMask = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M 0,42 C 0,10 10,0 42,0 L 58,0 C 90,0 100,10 100,42 L 100,58 C 100,90 90,100 58,100 L 42,100 C 10,100 0,90 0,58 Z' fill='black'/%3E%3C/svg%3E")`;

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
  xl: "h-36 w-36 text-xl",
} as const;

const statusSizes = {
  xs: "h-2 w-2",
  sm: "h-2.5 w-2.5",
  md: "h-3 w-3",
  lg: "h-3.5 w-3.5",
  xl: "h-6 w-6",
} as const;

const avatarRadii = {
  xs: "rounded-md",
  sm: "rounded-lg",
  md: "rounded-xl",
  lg: "rounded-xl",
  xl: "rounded-[24px]",
} as const;

const badgeRadii = {
  xs: "rounded-sm",
  sm: "rounded-sm",
  md: "rounded",
  lg: "rounded",
  xl: "rounded-md",
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
        "relative inline-flex shrink-0 items-center justify-center",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "h-full w-full overflow-hidden border-2 border-[#0A0A0A]",
          shape === "circle" ? "rounded-full" : avatarRadii[size]
        )}
        style={shape === "rounded" ? { maskImage: squircleMask, maskSize: "100% 100%" } : undefined}
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
      </div>
      {status === "star" && (
        <div
          data-slot="avatar-status"
          className={cn(
            "absolute -bottom-0.5 -right-0.5",
            statusSizes[size]
          )}
        >
          <div
            className="absolute inset-[-2px] bg-background"
            style={{ maskImage: badgeMask, maskSize: "100% 100%" }}
          />
          <div
            className="relative flex h-full w-full items-center justify-center bg-chart-2"
            style={{ maskImage: badgeMask, maskSize: "100% 100%" }}
          >
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-3/4 w-3/4 text-background"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

export { Avatar };
