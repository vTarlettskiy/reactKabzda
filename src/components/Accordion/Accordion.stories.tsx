import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Accordion from "./Accordion";
import React, { useState } from "react";

export default {
  title: "Accordion",
  component: Accordion,
};

// export default meta;

// type Story = StoryObj<typeof Accordion>;
//
// export const FirstStory: Story = {
//   args: {
//     title: "hellolo",
//     collapsed: true,
//     onClick: () => {},
//   },
// };

const callback = action("accordion mode change event fired");

export const MenuCollapsedMode = () => (
  <Accordion title={"Menu"} collapsed={true} onChange={callback} />
);

export const UsersUncollapsedMode = () => (
  <Accordion title={"Users"} collapsed={false} onChange={callback} />
);

export const ModeChanging = () => {
  const [value, setValue] = useState<boolean>(true);
  return (
    <Accordion
      title={"Users"}
      collapsed={value}
      onChange={() => setValue(!value)}
    />
  );
};
