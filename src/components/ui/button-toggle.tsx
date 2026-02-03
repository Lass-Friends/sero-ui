import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { PlusIcon, CheckIcon, ClockIcon } from "@heroicons/react/16/solid";
import { cn } from "@/lib/utils";

type ToggleState = "attend" | "pending" | "attending";

const buttonToggleVariants = cva(
  "inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md text-sm font-semibold border border-[#0A0A0A] h-8 px-3 transition-colors",
  {
    variants: {
      state: {
        attend: "bg-neutral-50 text-neutral-900 hover:bg-neutral-100",
        pending: "bg-amber-400 text-neutral-900 hover:bg-amber-500",
        attending: "bg-lime-400 text-neutral-900 hover:bg-lime-500",
      },
    },
    defaultVariants: {
      state: "attend",
    },
  }
);

export interface ButtonToggleProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  state?: ToggleState;
  onStateChange?: (state: ToggleState) => void;
}

const stateOrder: ToggleState[] = ["attend", "pending", "attending"];

function ButtonToggle({
  className,
  state: controlledState,
  onStateChange,
  ...props
}: ButtonToggleProps) {
  const [internalState, setInternalState] = React.useState<ToggleState>(controlledState ?? "attend");

  const isControlled = controlledState !== undefined;
  const state = isControlled ? controlledState : internalState;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const currentIndex = stateOrder.indexOf(state);
    const nextState = stateOrder[(currentIndex + 1) % stateOrder.length];

    if (!isControlled) {
      setInternalState(nextState);
    }
    onStateChange?.(nextState);
    props.onClick?.(e);
  };

  const icons = {
    attend: <PlusIcon className="size-4" />,
    pending: <ClockIcon className="size-4" />,
    attending: <CheckIcon className="size-4" />,
  };

  const labels = {
    attend: "Attend",
    pending: "Pending",
    attending: "Attending",
  };

  const icon = icons[state];
  const label = labels[state];

  return (
    <button
      data-slot="button-toggle"
      data-state={state}
      className={cn(buttonToggleVariants({ state }), className)}
      onClick={handleClick}
      {...props}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

export { ButtonToggle, buttonToggleVariants };
