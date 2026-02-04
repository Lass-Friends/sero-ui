import type { Meta } from "@storybook/react-vite";
import * as React from "react";
import { Calendar } from "./calendar";
import type { DateRange } from "react-day-picker";

const meta = {
  title: "UI/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Calendar>;

export default meta;

export const Default = {
  render: function DefaultCalendar() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-lg border border-border"
      />
    );
  },
};

export const Range = {
  render: function RangeCalendar() {
    const [range, setRange] = React.useState<DateRange | undefined>({
      from: new Date(),
      to: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });
    return (
      <Calendar
        mode="range"
        selected={range}
        onSelect={setRange}
        numberOfMonths={2}
        className="rounded-lg border border-border"
      />
    );
  },
};

export const Multiple = {
  render: function MultipleCalendar() {
    const [dates, setDates] = React.useState<Date[] | undefined>([new Date()]);
    return (
      <Calendar
        mode="multiple"
        selected={dates}
        onSelect={setDates}
        className="rounded-lg border border-border"
      />
    );
  },
};
