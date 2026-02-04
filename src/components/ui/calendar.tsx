"use client";

import * as React from "react";
import {
  DayPicker,
  DayButton,
  getDefaultClassNames,
  type DayPickerProps,
  type DayButtonProps,
} from "react-day-picker";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./button";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: DayPickerProps) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        root: cn(defaultClassNames.root, "bg-background"),
        months: cn(defaultClassNames.months, "flex flex-col sm:flex-row gap-4"),
        month: cn(defaultClassNames.month, "flex flex-col gap-4"),
        month_caption: cn(
          defaultClassNames.month_caption,
          "flex justify-center pt-1 relative items-center w-full"
        ),
        caption_label: cn(
          defaultClassNames.caption_label,
          "font-sans text-sm font-semibold"
        ),
        nav: cn(
          defaultClassNames.nav,
          "flex items-center gap-1 absolute inset-x-0"
        ),
        button_previous: cn(
          defaultClassNames.button_previous,
          buttonVariants({ variant: "ghost" }),
          "absolute left-1 size-7 p-0"
        ),
        button_next: cn(
          defaultClassNames.button_next,
          buttonVariants({ variant: "ghost" }),
          "absolute right-1 size-7 p-0"
        ),
        weekdays: cn(defaultClassNames.weekdays, "flex"),
        weekday: cn(
          defaultClassNames.weekday,
          "text-muted-foreground w-8 font-sans text-xs font-medium"
        ),
        week: cn(defaultClassNames.week, "flex w-full mt-2"),
        day: cn(
          defaultClassNames.day,
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md"
        ),
        day_button: cn(
          defaultClassNames.day_button,
          buttonVariants({ variant: "ghost" }),
          "size-8 p-0 font-sans font-normal aria-selected:opacity-100"
        ),
        range_start: cn(defaultClassNames.range_start, "day-range-start"),
        range_end: cn(defaultClassNames.range_end, "day-range-end"),
        selected: cn(
          defaultClassNames.selected,
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground"
        ),
        today: cn(defaultClassNames.today, "bg-accent text-accent-foreground"),
        outside: cn(
          defaultClassNames.outside,
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30"
        ),
        disabled: cn(
          defaultClassNames.disabled,
          "text-muted-foreground opacity-50"
        ),
        range_middle: cn(
          defaultClassNames.range_middle,
          "aria-selected:bg-accent aria-selected:text-accent-foreground"
        ),
        hidden: cn(defaultClassNames.hidden, "invisible"),
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation }) => {
          const Icon =
            orientation === "left" ? ChevronLeftIcon : ChevronRightIcon;
          return <Icon className="size-4" />;
        },
        DayButton: CalendarDayButton,
      }}
      {...props}
    />
  );
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: DayButtonProps) {
  return (
    <DayButton
      day={day}
      modifiers={modifiers}
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "size-8 p-0 font-sans font-normal",
        modifiers.today && "bg-accent text-accent-foreground",
        modifiers.selected &&
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground",
        modifiers.outside && "text-muted-foreground opacity-50",
        modifiers.disabled && "text-muted-foreground opacity-50",
        modifiers.range_middle &&
          "bg-accent text-accent-foreground rounded-none",
        modifiers.range_start && "rounded-l-md",
        modifiers.range_end && "rounded-r-md",
        className
      )}
      {...props}
    />
  );
}

Calendar.displayName = "Calendar";

export { Calendar };
export type { DayPickerProps as CalendarProps };
