import { AnalogClock } from "./AnalogClock";

export default {
  title: "Clock",
  component: AnalogClock,
};

export const BaseAnalogExample = () => {
  return <AnalogClock mode="analog" />;
};

export const BaseDigitalExample = () => {
  return <AnalogClock mode="digital" />;
};
