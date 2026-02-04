import * as React from "react";
import { cn } from "@/lib/utils";

// iOS-style squircle mask with 25% corners (scales proportionally to all sizes)
const squircleMask = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M 0,25 C 0,6 6,0 25,0 L 75,0 C 94,0 100,6 100,25 L 100,75 C 100,94 94,100 75,100 L 25,100 C 6,100 0,94 0,75 Z' fill='black'/%3E%3C/svg%3E")`;

// Rounder version for small badges (45% corners for more rounded look)
const badgeMask = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M 0,45 C 0,12 12,0 45,0 L 55,0 C 88,0 100,12 100,45 L 100,55 C 100,88 88,100 55,100 L 45,100 C 12,100 0,88 0,55 Z' fill='black'/%3E%3C/svg%3E")`;

const AVATAR_COLORS = [
  "bg-red-400",
  "bg-orange-400",
  "bg-amber-400",
  "bg-emerald-400",
  "bg-cyan-400",
  "bg-blue-400",
  "bg-violet-400",
  "bg-pink-400",
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
  lg: "h-24 w-24 text-lg",
  xl: "h-36 w-36 text-xl",
} as const;

const statusSizes = {
  xs: "h-2 w-2",
  sm: "h-2.5 w-2.5",
  md: "h-3 w-3",
  lg: "h-3.5 w-3.5",
  xl: "h-5 w-5",
} as const;

const statusPositions = {
  xs: "-bottom-0.5 -right-0.5",
  sm: "-bottom-0.5 -right-0.5",
  md: "-bottom-0.5 -right-0.5",
  lg: "-bottom-0.5 -right-0.5",
  xl: "-bottom-1 -right-1",
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
          "h-full w-full overflow-hidden",
          shape === "circle" && "rounded-full border-2 border-[#0A0A0A]"
        )}
        style={shape === "rounded" ? {
          maskImage: squircleMask,
          maskSize: "100% 100%"
        } : undefined}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            decoding="async"
            fetchPriority="high"
            className="h-full w-full object-cover"
          />
        ) : (
          <div
            className={cn(
              "flex h-full w-full items-center justify-center font-semibold text-background",
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
            "absolute",
            statusPositions[size],
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
              className="h-[60%] w-[60%] text-background"
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
