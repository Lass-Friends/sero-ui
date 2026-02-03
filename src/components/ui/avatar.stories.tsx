import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "./avatar";

const meta: Meta<typeof Avatar> = {
  title: "UI/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    shape: {
      control: "select",
      options: ["circle", "rounded"],
    },
    status: {
      control: "select",
      options: ["none", "star"],
    },
    fallback: {
      control: "text",
    },
    src: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "md",
    shape: "circle",
    status: "none",
    fallback: "JD",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-end gap-4">
        <Avatar size="xs" shape="circle" fallback="xs" />
        <Avatar size="sm" shape="circle" fallback="sm" />
        <Avatar size="md" shape="circle" fallback="md" />
      </div>
      <div className="flex items-end gap-4">
        <Avatar size="xs" shape="rounded" fallback="xs" />
        <Avatar size="sm" shape="rounded" fallback="sm" />
        <Avatar size="md" shape="rounded" fallback="md" />
        <Avatar size="lg" shape="rounded" fallback="lg" />
        <Avatar size="xl" shape="rounded" fallback="xl" />
      </div>
    </div>
  ),
};

export const WithFallback: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Avatar shape="circle" fallback="John Doe" />
        <Avatar shape="circle" fallback="Jane Smith" />
        <Avatar shape="circle" fallback="Alex Brown" />
        <Avatar shape="circle" fallback="Sam Wilson" />
      </div>
      <div className="flex items-center gap-4">
        <Avatar shape="rounded" fallback="John Doe" />
        <Avatar shape="rounded" fallback="Jane Smith" />
        <Avatar shape="rounded" fallback="Alex Brown" />
        <Avatar shape="rounded" fallback="Sam Wilson" />
      </div>
    </div>
  ),
};

export const WithStatus: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <Avatar size="md" shape="rounded" src="https://i.pravatar.cc/150?img=1" status="star" />
      <Avatar size="lg" shape="rounded" src="https://i.pravatar.cc/150?img=1" status="star" />
      <Avatar size="xl" shape="rounded" src="https://i.pravatar.cc/150?img=1" status="star" />
    </div>
  ),
};
