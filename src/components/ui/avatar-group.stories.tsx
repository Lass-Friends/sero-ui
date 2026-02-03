import type { Meta, StoryObj } from "@storybook/react-vite";
import { AvatarGroup } from "./avatar-group";

const sampleAvatars = [
  { fallback: "John Doe" },
  { fallback: "Jane Smith" },
  { fallback: "Alex Brown" },
  { fallback: "Sam Wilson" },
  { fallback: "Chris Lee" },
  { fallback: "Pat Taylor" },
  { fallback: "Morgan White" },
];

const meta: Meta<typeof AvatarGroup> = {
  title: "UI/AvatarGroup",
  component: AvatarGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md"],
    },
    max: {
      control: "number",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <AvatarGroup avatars={sampleAvatars} max={4} />,
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <AvatarGroup avatars={sampleAvatars} max={4} size="xs" />
      <AvatarGroup avatars={sampleAvatars} max={4} size="sm" />
      <AvatarGroup avatars={sampleAvatars} max={4} size="md" />
    </div>
  ),
};

export const WithBadge: Story = {
  render: () => <AvatarGroup avatars={sampleAvatars} max={4} badge="Attending" />,
};

export const NoOverflow: Story = {
  render: () => <AvatarGroup avatars={sampleAvatars.slice(0, 3)} max={5} />,
};

export const WithImages: Story = {
  render: () => (
    <AvatarGroup
      avatars={[
        { src: "https://i.pravatar.cc/150?img=1", alt: "User 1" },
        { src: "https://i.pravatar.cc/150?img=2", alt: "User 2" },
        { src: "https://i.pravatar.cc/150?img=3", alt: "User 3" },
        { fallback: "More Users" },
        { fallback: "Even More" },
      ]}
      max={4}
      size="sm"
    />
  ),
};
