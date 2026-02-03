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
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <Avatar size="xs" fallback="XS" />
      <Avatar size="sm" fallback="SM" />
      <Avatar size="md" fallback="MD" />
      <Avatar size="lg" fallback="LG" />
      <Avatar size="xl" fallback="XL" />
    </div>
  ),
};

export const WithImage: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <Avatar size="sm" src="https://i.pravatar.cc/150?img=1" alt="User" />
      <Avatar size="md" src="https://i.pravatar.cc/150?img=2" alt="User" />
      <Avatar size="lg" src="https://i.pravatar.cc/150?img=3" alt="User" />
    </div>
  ),
};

export const WithFallback: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="md" fallback="John Doe" />
      <Avatar size="md" fallback="Jane Smith" />
      <Avatar size="md" fallback="Alex Brown" />
      <Avatar size="md" fallback="Sam Wilson" />
    </div>
  ),
};

export const Shapes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="lg" shape="circle" fallback="CI" />
      <Avatar size="lg" shape="rounded" fallback="RO" />
    </div>
  ),
};

export const WithStatus: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <Avatar size="sm" fallback="AB" status="star" />
      <Avatar size="md" fallback="CD" status="star" />
      <Avatar size="lg" fallback="EF" status="star" />
      <Avatar size="xl" src="https://i.pravatar.cc/150?img=5" status="star" />
    </div>
  ),
};
