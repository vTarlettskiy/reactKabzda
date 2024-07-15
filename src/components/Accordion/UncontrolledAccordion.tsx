import React, { useReducer } from "react";
import { reducer, TOGGLE_COLLAPSED } from "./reducer";

type AccordionPropsType = {
  title: string;
};

export function UncontrolledAccordion(props: AccordionPropsType) {
  console.log("Accordion rendered");

  // const [collapsed, setCollapsed] = useState(true);
  let [state, dispatch] = useReducer(reducer, { collapsed: false });
  return (
    <div>
      {/*<AccordionTitle*/}
      {/*  title={props.title}*/}
      {/*  onClick={() => setCollapsed(!collapsed)}*/}
      {/*/>*/}
      <AccordionTitle
        title={props.title}
        onClick={() => dispatch({ type: TOGGLE_COLLAPSED })}
      />
      {!state.collapsed && <AccordionBody />}
    </div>
  );
}

type AccordionTitlePropsType = {
  title: string;
  onClick: () => void;
};

function AccordionTitle(props: AccordionTitlePropsType) {
  return <h3 onClick={() => props.onClick()}>{props.title}</h3>;
}

function AccordionBody() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
}
