import * as React from "react";
import { cn } from "@/lib/cn";
import { Avatar, type AvatarProps } from "@/components/ui/avatar";

export interface AvatarData {
  src?: string;
  alt?: string;
  fallback?: string;
}

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  avatars: AvatarData[];
  max?: number;
  size?: AvatarProps["size"];
  shape?: AvatarProps["shape"];
  badge?: string;
}

function AvatarGroup({
  className,
  avatars,
  max = 5,
  size = "xs",
  shape = "circle",
  badge,
  ...props
}: AvatarGroupProps) {
  const visible = avatars.slice(0, max);
  const overflow = avatars.length - max;

  return (
    <div
      data-slot="avatar-group"
      data-size={size}
      className={cn("flex items-center", className)}
      {...props}
    >
      <div className="flex items-center -space-x-2">
        {visible.map((avatar, i) => (
          <Avatar
            key={i}
            src={avatar.src}
            alt={avatar.alt}
            fallback={avatar.fallback}
            size={size}
            shape={shape}
          />
        ))}
        {overflow > 0 && (
          <div
            data-slot="avatar-overflow"
            className={cn(
              "relative inline-flex shrink-0 items-center justify-center rounded-full bg-card text-[10px] font-medium text-muted-foreground ring-2 ring-background",
              size === "xs" && "h-6 w-6",
              size === "sm" && "h-8 w-8",
              size === "md" && "h-10 w-10"
            )}
          >
            +{overflow}
          </div>
        )}
      </div>
      {badge && (
        <span
          data-slot="avatar-group-badge"
          className="ml-2 inline-flex items-center gap-1 rounded-lg bg-card/80 px-2 py-0.5 text-xs font-semibold text-card-foreground backdrop-blur-[40px] ring-1 ring-border/80"
        >
          {badge}
        </span>
      )}
    </div>
  );
}

export { AvatarGroup };
