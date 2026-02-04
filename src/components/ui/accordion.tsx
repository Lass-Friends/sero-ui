import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { cn } from "@/lib/utils";

type AccordionSingleProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> & {
  type: "single";
  collapsible?: boolean;
};

type AccordionMultipleProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> & {
  type: "multiple";
};

type AccordionProps = AccordionSingleProps | AccordionMultipleProps;

const Accordion = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Root>,
  AccordionProps
>(({ collapsible = true, ...props }, ref) => (
  <AccordionPrimitive.Root
    ref={ref}
    collapsible={props.type === "single" ? collapsible : undefined}
    {...props}
  />
));
Accordion.displayName = "Accordion";

const AccordionItem = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between rounded-lg p-4 font-sans text-sm font-semibold leading-5 tracking-tight text-foreground transition-all",
        "focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring",
        "active:opacity-60",
        "[&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDownIcon className="size-4 shrink-0 text-foreground transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("px-4 pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
