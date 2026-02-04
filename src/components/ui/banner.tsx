import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { EllipsisHorizontalIcon } from "@heroicons/react/16/solid";
import { Avatar } from "./avatar";

// Subtle squircle mask (~10% corners, approx 24px on 240px image)
const squircleMask = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M 0,10 C 0,3 3,0 10,0 L 90,0 C 97,0 100,3 100,10 L 100,90 C 100,97 97,100 90,100 L 10,100 C 3,100 0,97 0,90 Z' fill='black'/%3E%3C/svg%3E")`;

const bannerVariants = cva("relative w-full overflow-hidden bg-background", {
  variants: {
    variant: {
      "flagship-mobile": "min-h-[480px]",
      "flagship-desktop": "h-[308px] flex items-center px-4 py-6",
      "profile-mobile": "px-4 pt-4",
      "profile-desktop": "max-w-[644px] px-4 pt-4",
      "manage-mobile": "min-h-[400px]",
      "manage-desktop": "h-[240px]",
    },
  },
  defaultVariants: {
    variant: "flagship-mobile",
  },
});

export interface BannerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof bannerVariants> {
  title: string;
  subtitle?: string;
  description?: string;
  avatarSrc?: string;
  backgroundSrc?: string;
  dominantColor?: string;
  imageSrc?: string;
  showStatus?: boolean;
  onBack?: () => void;
  onEdit?: () => void;
  onMore?: () => void;
  actions?: React.ReactNode;
  socialLinks?: React.ReactNode;
}

function Banner({
  className,
  variant = "flagship-mobile",
  title,
  subtitle,
  description,
  avatarSrc,
  backgroundSrc,
  dominantColor,
  imageSrc,
  showStatus = false,
  onBack,
  onEdit,
  onMore,
  actions,
  socialLinks,
  children,
  ...props
}: BannerProps) {
  const isFlagshipMobile = variant === "flagship-mobile";
  const isFlagshipDesktop = variant === "flagship-desktop";
  const isProfileMobile = variant === "profile-mobile";
  const isProfileDesktop = variant === "profile-desktop";
  const isProfile = isProfileMobile || isProfileDesktop;
  const isManageMobile = variant === "manage-mobile";
  const isManageDesktop = variant === "manage-desktop";
  const isManage = isManageMobile || isManageDesktop;

  return (
    <div
      data-slot="banner"
      data-variant={variant}
      className={cn(bannerVariants({ variant, className }))}
      {...props}
    >
      {/* Background with gradient overlay - matching Figma structure */}
      <div
        className={cn(
          "absolute inset-0",
          isProfile && "h-[200px] overflow-hidden"
        )}
      >
        {/* Fill layer */}
        <div
          className="absolute inset-0 bg-muted"
          style={dominantColor ? { backgroundColor: dominantColor } : undefined}
        />
        {backgroundSrc && (
          <img
            src={backgroundSrc}
            alt=""
            className="absolute inset-0 size-full object-cover"
          />
        )}
        {/* Dark overlay - 50% opacity */}
        <div className="absolute inset-0 bg-[rgba(10,10,10,0.5)]" />
        {/* Gradient from transparent to solid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: (isFlagshipDesktop || isManageDesktop)
              ? "linear-gradient(165deg, rgba(10, 10, 10, 0) 0%, rgb(10, 10, 10) 55%)"
              : "linear-gradient(160deg, rgba(10, 10, 10, 0) 0%, rgb(10, 10, 10) 75%)",
          }}
        />
      </div>

      {/* Content */}
      <div
        className={cn(
          "relative z-10",
          isFlagshipMobile && "flex flex-col gap-6 px-4 pb-8 pt-4",
          isFlagshipDesktop && "flex w-full items-center justify-between gap-8",
          isProfile && "flex flex-col gap-6",
          isManageMobile && "flex flex-col gap-6 px-4 pb-8 pt-4",
          isManageDesktop && "h-full"
        )}
      >
        {/* Top buttons - Mobile */}
        {isFlagshipMobile && (
          <div className="flex items-center justify-between">
            {onBack ? (
              <BannerButton transparent onClick={onBack} aria-label="Go back">
                <ChevronLeftIcon className="size-4" />
              </BannerButton>
            ) : (
              <div />
            )}
            <div className="flex items-center gap-2">
              {actions}
              {onMore && (
                <BannerButton transparent onClick={onMore} aria-label="More options">
                  <EllipsisHorizontalIcon className="size-4" />
                </BannerButton>
              )}
            </div>
          </div>
        )}

        {/* Top buttons - Profile */}
        {isProfile && (
          <div className="flex items-center justify-between">
            {onBack ? (
              <BannerButton transparent onClick={onBack} aria-label="Go back">
                <ChevronLeftIcon className="size-4" />
              </BannerButton>
            ) : (
              <div />
            )}
            <div className="flex items-center gap-2">
              {actions}
              {onMore && (
                <BannerButton transparent onClick={onMore} aria-label="More options">
                  <EllipsisHorizontalIcon className="size-4" />
                </BannerButton>
              )}
            </div>
          </div>
        )}

        {/* Top buttons - Manage Mobile */}
        {isManageMobile && (
          <div className="flex items-center justify-between">
            {onBack ? (
              <BannerButton transparent onClick={onBack} aria-label="Go back">
                <ChevronLeftIcon className="size-4" />
              </BannerButton>
            ) : (
              <div />
            )}
            <div className="flex items-center gap-2">
              {onEdit && <BannerTextButton transparent onClick={onEdit}>Edit</BannerTextButton>}
              {onMore && (
                <BannerButton transparent onClick={onMore} aria-label="More options">
                  <EllipsisHorizontalIcon className="size-4" />
                </BannerButton>
              )}
            </div>
          </div>
        )}

        {/* Top buttons - Manage Desktop */}
        {isManageDesktop && (
          <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
            {onBack ? (
              <BannerButton transparent onClick={onBack} aria-label="Go back">
                <ChevronLeftIcon className="size-4" />
              </BannerButton>
            ) : (
              <div />
            )}
            <div className="flex items-center gap-2">
              {onEdit && <BannerTextButton transparent onClick={onEdit}>Edit</BannerTextButton>}
              {onMore && (
                <BannerButton transparent onClick={onMore} aria-label="More options">
                  <EllipsisHorizontalIcon className="size-4" />
                </BannerButton>
              )}
            </div>
          </div>
        )}

        {/* Avatar - Mobile variants & Profile */}
        {(isFlagshipMobile || isProfile || isManageMobile) && avatarSrc && (
          <Avatar
            src={avatarSrc}
            size="xl"
            shape="rounded"
            status={isProfile && showStatus ? "star" : "none"}
          />
        )}

        {/* Text content - Mobile, Desktop, Profile, Manage Mobile */}
        {(isFlagshipMobile || isFlagshipDesktop || isProfile || isManageMobile) && (
          <div
            className={cn(
              "flex flex-col gap-6",
              isFlagshipDesktop && "w-[464px]"
            )}
          >
            <div className="flex flex-col gap-4">
              <h1
                className={cn(
                  "font-bold tracking-[-0.04em] text-foreground",
                  (isFlagshipMobile || isProfileMobile || isManageMobile)
                    ? "text-[28px] leading-[32px]"
                    : "text-[40px] leading-[44px]"
                )}
              >
                {title}
              </h1>

              <div className="flex flex-col gap-2">
                {subtitle && (
                  <p className="whitespace-pre-wrap text-xs font-medium leading-5 tracking-tight text-foreground/60">
                    {subtitle}
                  </p>
                )}
                {description && !isManageMobile && (
                  <p
                    className={cn(
                      "text-xs font-medium leading-5 tracking-tight text-foreground/60",
                      isFlagshipDesktop && "max-w-[400px]"
                    )}
                  >
                    {description}
                  </p>
                )}
              </div>

              {socialLinks && !isManageMobile && (
                <div className="flex items-center gap-3 text-foreground">
                  {socialLinks}
                </div>
              )}
            </div>

            {children}
          </div>
        )}

        {/* Event image - Desktop */}
        {isFlagshipDesktop && (
          <div
            className="relative size-60 shrink-0"
            style={{
              maskImage: squircleMask,
              maskSize: "100% 100%",
            }}
          >
            <div className="absolute inset-0 bg-muted" />
            {imageSrc && (
              <img
                src={imageSrc}
                alt=""
                className="absolute inset-0 size-full object-cover"
              />
            )}
            {(actions || onMore) && (
              <div className="absolute right-2 top-2 flex items-center gap-1">
                {actions}
                {onMore && (
                  <BannerButton onClick={onMore} aria-label="More options">
                    <EllipsisHorizontalIcon className="size-4" />
                  </BannerButton>
                )}
              </div>
            )}
          </div>
        )}

        {/* Manage Desktop layout - Avatar + Text at bottom */}
        {isManageDesktop && (
          <div className="absolute bottom-6 left-4 right-4 flex items-end gap-6">
            {avatarSrc && (
              <Avatar src={avatarSrc} size="xl" shape="rounded" />
            )}
            <div className="flex max-w-[640px] flex-col gap-3 pb-2">
              <h1 className="text-[40px] font-bold leading-[44px] tracking-[-0.04em] text-foreground">
                {title}
              </h1>
              {subtitle && (
                <p className="whitespace-pre-wrap text-xs font-medium leading-5 tracking-tight text-foreground/60">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

interface BannerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  transparent?: boolean;
}

function BannerButton({
  className,
  transparent = false,
  children,
  ...props
}: BannerButtonProps) {
  return (
    <button
      className={cn(
        "flex size-8 items-center justify-center rounded-md text-foreground transition-colors",
        transparent
          ? "hover:bg-foreground/10"
          : "bg-[rgba(15,15,15,0.8)] backdrop-blur-xl hover:bg-[rgba(30,30,30,0.8)]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

interface BannerTextButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  transparent?: boolean;
}

function BannerTextButton({
  className,
  transparent = false,
  children,
  ...props
}: BannerTextButtonProps) {
  return (
    <button
      className={cn(
        "flex h-8 items-center justify-center rounded-md px-3 text-sm font-semibold text-foreground transition-colors",
        transparent
          ? "hover:bg-foreground/10"
          : "bg-[rgba(15,15,15,0.8)] backdrop-blur-xl hover:bg-[rgba(30,30,30,0.8)]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export { Banner, BannerButton, BannerTextButton, bannerVariants };
