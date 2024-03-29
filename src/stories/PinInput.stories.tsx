import { StoryObj } from "@storybook/react";

import { PinInput } from "../components/PinInput/PinInput";
// import notes from "./PinInput.mdx";

// TODO:
// [x] Disabled state
// [ ] Error state
// [ ] Controlled pin state

const meta = {
  title: "Design System/Input/Pin",
  component: PinInput,
  parameters: {
    layout: "centered",
    // docs: {
    //   description: {
    //     component: notes,
    //   },
    // },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <PinInput {...args} />,
};
