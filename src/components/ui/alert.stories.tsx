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

export const WithoutAction: Story = {
  render: () => (
    <div className="w-[480px]">
      <Alert
        icon={<CursorArrowRaysIcon className="size-5 text-foreground" />}
        title="Alert Title"
        description="This is an alert description without an action button."
      />
    </div>
  ),
};

export const WithoutIcon: Story = {
  render: () => (
    <div className="w-[480px]">
      <Alert
        title="Alert Title"
        description="This is an alert without an icon."
        action={<Button variant="outline">Action</Button>}
      />
    </div>
  ),
};

export const TitleOnly: Story = {
  render: () => (
    <div className="w-[480px]">
      <Alert
        icon={<CursorArrowRaysIcon className="size-5 text-foreground" />}
        title="Alert with title only"
      />
    </div>
  ),
};
