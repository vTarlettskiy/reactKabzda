import { UncontrolledRating, RatingValuePropsType } from "./UncontrolledRating";
import { useState } from "react";
import { action } from "@storybook/addon-actions";

export default {
  title: "UncontrolledRating",
  component: UncontrolledRating,
};

const callback = action("yo");

export const EmptyRating = () => (
  <UncontrolledRating defaultValue={0} onChange={callback} />
);
export const Rating1 = () => (
  <UncontrolledRating defaultValue={1} onChange={callback} />
);
export const Rating2 = () => (
  <UncontrolledRating defaultValue={2} onChange={callback} />
);
export const Rating3 = () => (
  <UncontrolledRating defaultValue={3} onChange={callback} />
);
export const Rating4 = () => (
  <UncontrolledRating defaultValue={4} onChange={callback} />
);
export const Rating5 = () => (
  <UncontrolledRating defaultValue={5} onChange={callback} />
);
