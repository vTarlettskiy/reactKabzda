import React, { useState } from "react";
import { UncontrolledAccordion } from "./UncontrolledAccordion";

export default {
  title: "UncontrolledAccordion",
  component: UncontrolledAccordion,
};

export const ModeChanging = () => {
  return <UncontrolledAccordion title={"Users"} />;
};
