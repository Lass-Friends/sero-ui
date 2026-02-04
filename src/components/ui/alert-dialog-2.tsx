import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const AlertDialog2 = AlertDialogPrimitive.Root;

const AlertDialog2Trigger = AlertDialogPrimitive.Trigger;

const AlertDialog2Portal = AlertDialogPrimitive.Portal;

const overlay2Variants = cva(
  "fixed inset-0 z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
  {
    variants: {
      variant: {
        default: "bg-black/80",
        blur: "bg-black/50 backdrop-blur-sm",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface AlertDialog2OverlayProps
  extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>,
    VariantProps<typeof overlay2Variants> {}

function AlertDialog2Overlay({
  className,
  variant = "default",
  ...props
}: AlertDialog2OverlayProps) {
  return (
    <AlertDialogPrimitive.Overlay
      data-slot="alert-dialog-2-overlay"
      data-variant={variant}
      className={cn(overlay2Variants({ variant }), className)}
      {...props}
    />
  );
}

const content2Variants = cva(
  "fixed left-1/2 top-1/2 z-50 grid w-full max-w-md -translate-x-1/2 -translate-y-1/2 gap-4 rounded-2xl border border-border bg-popover p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
  {
    variants: {
      size: {
        sm: "max-w-sm",
        default: "max-w-md",
        lg: "max-w-lg",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

export interface AlertDialog2ContentProps
  extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>,
    VariantProps<typeof content2Variants> {
  overlayVariant?: AlertDialog2OverlayProps["variant"];
}

function AlertDialog2Content({
  className,
  size = "default",
  overlayVariant,
  children,
  ...props
}: AlertDialog2ContentProps) {
  return (
    <AlertDialog2Portal>
      <AlertDialog2Overlay variant={overlayVariant} />
      <AlertDialogPrimitive.Content
        data-slot="alert-dialog-2-content"
        data-size={size}
        className={cn(content2Variants({ size }), className)}
        {...props}
      >
        {children}
      </AlertDialogPrimitive.Content>
    </AlertDialog2Portal>
  );
}

function AlertDialog2Header({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="alert-dialog-2-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  );
}

const footer2Variants = cva("flex gap-2", {
  variants: {
    layout: {
      stacked: "flex-col",
      inline: "flex-row justify-end",
    },
  },
  defaultVariants: {
    layout: "stacked",
  },
});

export interface AlertDialog2FooterProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof footer2Variants> {}

function AlertDialog2Footer({
  className,
  layout = "stacked",
  ...props
}: AlertDialog2FooterProps) {
  return (
    <div
      data-slot="alert-dialog-2-footer"
      data-layout={layout}
      className={cn(footer2Variants({ layout }), className)}
      {...props}
    />
  );
}

function AlertDialog2Title({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>) {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-2-title"
      className={cn(
        "text-lg font-semibold tracking-[-0.03em] text-foreground",
        className
      )}
      {...props}
    />
  );
}

function AlertDialog2Description({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>) {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-2-description"
      className={cn(
        "text-sm font-medium tracking-[-0.03em] text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}

const action2Variants = cva(
  "inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-lg px-4 text-sm font-semibold outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40 [[data-layout=stacked]_&]:w-full",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-destructive/40",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface AlertDialog2ActionProps
  extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>,
    VariantProps<typeof action2Variants> {}

function AlertDialog2Action({
  className,
  variant = "default",
  ...props
}: AlertDialog2ActionProps) {
  return (
    <AlertDialogPrimitive.Action
      data-slot="alert-dialog-2-action"
      data-variant={variant}
      className={cn(action2Variants({ variant }), className)}
      {...props}
    />
  );
}

function AlertDialog2Cancel({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>) {
  return (
    <AlertDialogPrimitive.Cancel
      data-slot="alert-dialog-2-cancel"
      className={cn(
        "inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-border bg-transparent px-4 text-sm font-semibold text-foreground outline-none transition-colors hover:bg-accent/50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40 [[data-layout=stacked]_&]:w-full",
        className
      )}
      {...props}
    />
  );
}

export {
  AlertDialog2,
  AlertDialog2Portal,
  AlertDialog2Overlay,
  AlertDialog2Trigger,
  AlertDialog2Content,
  AlertDialog2Header,
  AlertDialog2Footer,
  AlertDialog2Title,
  AlertDialog2Description,
  AlertDialog2Action,
  AlertDialog2Cancel,
  overlay2Variants,
  content2Variants,
  footer2Variants,
  action2Variants,
};
