import type { Meta, StoryObj } from "@storybook/react-vite";
import { CursorArrowRaysIcon } from "@heroicons/react/20/solid";
import { Alert } from "./alert";
import { Button } from "./button";

const meta: Meta<typeof Alert> = {
  title: "UI/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
    },
    description: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[480px]">
      <Alert
        icon={<CursorArrowRaysIcon className="size-5 text-foreground" />}
        title="Alert Title"
        description="This is an alert description."
        action={<Button variant="outline">Action</Button>}
      />
    </div>
  ),
};
