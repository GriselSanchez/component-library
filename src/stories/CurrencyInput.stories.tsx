import { StoryObj } from "@storybook/react";

import { CurrencyInput } from "../components/CurrencyInput/CurrencyInput";

const meta = {
  title: "Design System/Input/Currency",
  component: CurrencyInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <CurrencyInput maxDecimals={2} {...args} />,
};
