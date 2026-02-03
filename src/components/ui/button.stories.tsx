import type { Meta, StoryObj } from "@storybook/react-vite";
import { ArrowDownIcon, TrashIcon } from "@heroicons/react/16/solid";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "outline", "ghost", "destructive", "link"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon", "icon-xs", "icon-sm", "icon-lg"],
    },
    children: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    size: "default",
    children: "Button",
  },
};

export const Primary: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button variant="default" size="sm">Small</Button>
      <Button variant="default" size="default">Default</Button>
      <Button variant="default" size="lg">Large</Button>
      <Button variant="default" size="icon" aria-label="Add">
        <ArrowDownIcon />
      </Button>
    </div>
  ),
};

export const Secondary: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button variant="secondary" size="sm">Small</Button>
      <Button variant="secondary" size="default">Default</Button>
      <Button variant="secondary" size="lg">Large</Button>
      <Button variant="secondary" size="icon" aria-label="Add">
        <ArrowDownIcon />
      </Button>
    </div>
  ),
};

export const Outline: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button variant="outline" size="sm">Small</Button>
      <Button variant="outline" size="default">Default</Button>
      <Button variant="outline" size="lg">Large</Button>
      <Button variant="outline" size="icon" aria-label="Add">
        <ArrowDownIcon />
      </Button>
    </div>
  ),
};

export const Ghost: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button variant="ghost" size="sm">Small</Button>
      <Button variant="ghost" size="default">Default</Button>
      <Button variant="ghost" size="lg">Large</Button>
      <Button variant="ghost" size="icon" aria-label="Add">
        <ArrowDownIcon />
      </Button>
    </div>
  ),
};

export const Destructive: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button variant="destructive" size="sm">Small</Button>
      <Button variant="destructive" size="default">Default</Button>
      <Button variant="destructive" size="lg">Large</Button>
      <Button variant="destructive" size="icon" aria-label="Delete">
        <TrashIcon />
      </Button>
    </div>
  ),
};

export const AsChild: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button asChild>
        <a href="#">Link styled as button</a>
      </Button>
      <Button variant="outline" asChild>
        <a href="#">Outline link</a>
      </Button>
    </div>
  ),
};
