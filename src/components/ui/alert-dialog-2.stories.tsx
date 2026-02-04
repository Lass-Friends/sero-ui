import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  AlertDialog2,
  AlertDialog2Action,
  AlertDialog2Cancel,
  AlertDialog2Content,
  AlertDialog2Description,
  AlertDialog2Footer,
  AlertDialog2Header,
  AlertDialog2Title,
  AlertDialog2Trigger,
} from "./alert-dialog-2";
import { Button } from "./button";

const meta: Meta<typeof AlertDialog2> = {
  title: "UI/AlertDialog2",
  component: AlertDialog2,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <AlertDialog2>
      <AlertDialog2Trigger asChild>
        <Button variant="outline">Open AlertDialog2</Button>
      </AlertDialog2Trigger>
      <AlertDialog2Content>
        <AlertDialog2Header>
          <AlertDialog2Title>Title text goes here</AlertDialog2Title>
          <AlertDialog2Description>
            This is an alert dialog description.
          </AlertDialog2Description>
        </AlertDialog2Header>
        <AlertDialog2Footer layout="stacked">
          <AlertDialog2Action>Continue</AlertDialog2Action>
          <AlertDialog2Cancel>Cancel</AlertDialog2Cancel>
        </AlertDialog2Footer>
      </AlertDialog2Content>
    </AlertDialog2>
  ),
};

export const Destructive: Story = {
  render: () => (
    <AlertDialog2>
      <AlertDialog2Trigger asChild>
        <Button variant="destructive">Delete Account</Button>
      </AlertDialog2Trigger>
      <AlertDialog2Content>
        <AlertDialog2Header>
          <AlertDialog2Title>Are you absolutely sure?</AlertDialog2Title>
          <AlertDialog2Description>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialog2Description>
        </AlertDialog2Header>
        <AlertDialog2Footer layout="inline">
          <AlertDialog2Cancel>Cancel</AlertDialog2Cancel>
          <AlertDialog2Action variant="destructive">Delete</AlertDialog2Action>
        </AlertDialog2Footer>
      </AlertDialog2Content>
    </AlertDialog2>
  ),
};
