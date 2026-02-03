import type { Meta, StoryObj } from "@storybook/react-vite";
import { AvatarGroup } from "./avatar-group";

const sampleAvatars = [
  { src: "https://i.pravatar.cc/150?img=1", alt: "John Doe" },
  { src: "https://i.pravatar.cc/150?img=2", alt: "Jane Smith" },
  { src: "https://i.pravatar.cc/150?img=3", alt: "Alex Brown" },
  { src: "https://i.pravatar.cc/150?img=4", alt: "Sam Wilson" },
  { src: "https://i.pravatar.cc/150?img=5", alt: "Chris Lee" },
];

const meta: Meta<typeof AvatarGroup> = {
  title: "UI/AvatarGroup",
  component: AvatarGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    count: {
      control: "number",
    },
    attending: {
      control: "number",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    avatars: sampleAvatars,
    count: 32,
    attending: 8,
  },
};
