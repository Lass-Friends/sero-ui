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
        root: cn(defaultClassNames.root, "bg-background relative"),
        months: cn(defaultClassNames.months, "flex flex-col sm:flex-row gap-4"),
        month: cn(defaultClassNames.month, "flex flex-col gap-4 w-fit"),
        month_caption: cn(
          defaultClassNames.month_caption,
          "relative flex justify-center items-center w-full h-8"
        ),
        caption_label: cn(
          defaultClassNames.caption_label,
          "font-sans text-sm font-medium leading-5"
        ),
        nav: cn(
          defaultClassNames.nav,
          "absolute top-3 left-3 right-3 h-8 flex justify-between items-center z-10"
        ),
        button_previous: cn(
          defaultClassNames.button_previous,
          "size-8 p-0 rounded-md bg-transparent hover:bg-accent/50 active:bg-accent/70 flex items-center justify-center"
        ),
        button_next: cn(
          defaultClassNames.button_next,
          "size-8 p-0 rounded-md bg-transparent hover:bg-accent/50 active:bg-accent/70 flex items-center justify-center"
        ),
        weekdays: cn(defaultClassNames.weekdays, "flex"),
        month_grid: cn(defaultClassNames.month_grid, ""),
        weekday: cn(
          defaultClassNames.weekday,
          "text-muted-foreground w-8 font-sans text-[11px] font-normal"
        ),
        week: cn(defaultClassNames.week, "flex w-full mt-2"),
        day: cn(
          defaultClassNames.day,
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20",
          props.mode === "range"
            ? "[&:has([aria-selected])]:bg-accent [&:has([aria-selected])]:rounded-none [&:has(>.day-range-start)]:rounded-l-md [&:has(>.day-range-end)]:rounded-r-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md"
        ),
        day_button: cn(
          defaultClassNames.day_button,
          "size-8 p-0 font-sans font-normal bg-transparent aria-selected:opacity-100"
        ),
        range_start: cn(defaultClassNames.range_start, "day-range-start"),
        range_end: cn(defaultClassNames.range_end, "day-range-end"),
        selected: cn(
          defaultClassNames.selected,
          "text-background hover:text-background focus:text-background"
        ),
        today: cn(defaultClassNames.today, "bg-accent text-accent-foreground rounded-md"),
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
          "rounded-none"
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
  const isRangeMiddle = modifiers.range_middle;
  const isRangeEndpoint = modifiers.range_start || modifiers.range_end;
  const isInRange = isRangeMiddle || isRangeEndpoint;

  // Get day of week: 0 = Sunday (first in row), 6 = Saturday (last in row)
  const dayOfWeek = day.date.getDay();
  const isFirstInRow = dayOfWeek === 0;
  const isLastInRow = dayOfWeek === 6;

  // Determine border radius - for range, round at row boundaries
  let borderRadius: React.CSSProperties = { borderRadius: "0.375rem" };

  if (isInRange) {
    // Start with no rounding for range cells
    borderRadius = { borderRadius: 0 };

    // Round left edge: range start OR first cell in row (Sunday)
    const shouldRoundLeft = modifiers.range_start || (isInRange && isFirstInRow);
    // Round right edge: range end OR last cell in row (Saturday)
    const shouldRoundRight = modifiers.range_end || (isInRange && isLastInRow);

    if (shouldRoundLeft) {
      borderRadius.borderTopLeftRadius = "0.375rem";
      borderRadius.borderBottomLeftRadius = "0.375rem";
    }
    if (shouldRoundRight) {
      borderRadius.borderTopRightRadius = "0.375rem";
      borderRadius.borderBottomRightRadius = "0.375rem";
    }
  }

  // Merge any incoming style with our border radius
  const { style: incomingStyle, ...restProps } = props;
  const mergedStyle = { ...incomingStyle, ...borderRadius };

  return (
    <DayButton
      day={day}
      modifiers={modifiers}
      {...restProps}
      style={mergedStyle}
      className={cn(
        "size-8 p-0 font-sans font-normal",
        // Base hover states (not for range middle)
        !isRangeMiddle && !isRangeEndpoint && "bg-transparent hover:bg-accent/50 active:bg-accent/70",
        // Range middle: accent fill for continuous bar
        isRangeMiddle && "bg-accent text-accent-foreground",
        modifiers.today &&
          !isRangeMiddle &&
          !isRangeEndpoint &&
          "bg-accent text-accent-foreground",
        modifiers.selected &&
          !isRangeMiddle &&
          !isRangeEndpoint &&
          "bg-foreground text-background hover:bg-foreground hover:text-background",
        // Range endpoints: foreground fill
        isRangeEndpoint &&
          "bg-foreground text-background hover:bg-foreground",
        modifiers.outside && "text-muted-foreground opacity-50",
        modifiers.disabled && "text-muted-foreground opacity-50"
      )}
    />
  );
}

Calendar.displayName = "Calendar";

export { Calendar };
export type { DayPickerProps as CalendarProps };
