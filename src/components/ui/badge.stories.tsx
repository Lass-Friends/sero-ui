import type { Meta, StoryObj } from "@storybook/react-vite";
import { Check, Star } from "lucide-react";
import { Badge } from "./badge";

const meta: Meta<typeof Badge> = {
  title: "UI/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "primary", "muted"],
    },
    size: {
      control: "select",
      options: ["sm", "default"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Badge variant="default" size="sm">Small</Badge>
      <Badge variant="default" size="default">Default</Badge>
    </div>
  ),
};

export const Primary: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Badge variant="primary" size="sm">Small</Badge>
      <Badge variant="primary" size="default">Default</Badge>
    </div>
  ),
};

export const Muted: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Badge variant="muted" size="sm">Small</Badge>
      <Badge variant="muted" size="default">Default</Badge>
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Badge variant="default" icon={<Check className="size-3" />}>
        Attending
      </Badge>
      <Badge variant="primary" icon={<Star className="size-3" />}>
        Featured
      </Badge>
      <Badge variant="muted" icon={<Check className="size-3" />}>
        Verified
      </Badge>
    </div>
  ),
};
