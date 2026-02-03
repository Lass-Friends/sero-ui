import type { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonToggle } from "./button-toggle";

const meta: Meta<typeof ButtonToggle> = {
  title: "UI/ButtonToggle",
  component: ButtonToggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    state: {
      control: "select",
      options: ["attend", "pending", "attending"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <ButtonToggle />,
};

export const States: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <ButtonToggle state="attend" />
      <ButtonToggle state="pending" />
      <ButtonToggle state="attending" />
    </div>
  ),
};
