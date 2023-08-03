import { StoryObj } from "@storybook/react";

import { TimePicker } from "../components/TimePicker/TimePicker";

const meta = {
  title: "Design System/Input/Time Picker",
  component: TimePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <TimePicker {...args} />,
};
