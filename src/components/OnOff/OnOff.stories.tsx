import { OnOff } from "./OnOff";
import { action } from "@storybook/addon-actions";
import { useState } from "react";

export default {
  title: "OnOff",
  component: OnOff,
};

const callBack = action("on or off clicked");

export const OnMode = () => <OnOff on={true} onChange={callBack} />;
export const OffMode = () => <OnOff on={false} onChange={callBack} />;

export const ModeChanging = () => {
  const [value, setValue] = useState<boolean>(true);
  return <OnOff on={value} onChange={setValue} />;
};
