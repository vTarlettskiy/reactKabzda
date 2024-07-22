import React, { useReducer } from "react";
import { reducer, TOGGLE_COLLAPSED } from "./reducer";

type AccordionPropsType = {
  title: string;
};

function UncontrolledAccordionSecret(props: AccordionPropsType) {
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

export const UncontrolledAccordion = React.memo(UncontrolledAccordionSecret);

type AccordionTitlePropsType = {
  title: string;
  onClick: () => void;
};

function AccordionTitleSecret(props: AccordionTitlePropsType) {
  return <h3 onClick={() => props.onClick()}>{props.title}</h3>;
}

const AccordionTitle = React.memo(AccordionTitleSecret);

function AccordionBodySecret() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
}

const AccordionBody = React.memo(AccordionBodySecret);
