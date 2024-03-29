import { StoryObj } from "@storybook/react";

import { Input } from "../components/Input/Input";

const meta = {
  title: "Design System/Input/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <Input {...args} />,
};
