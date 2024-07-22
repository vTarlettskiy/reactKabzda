import React, { useState } from "react";

type ItemPropsType = {
  title: string;
  value: any;
};

type AccordionPropsType = {
  title: string;
  collapsed: boolean;
  onChange: () => void;
  items: ItemPropsType[];
  onClick: (value: any) => void;
};

function AccordionSecret(props: AccordionPropsType) {
  console.log("Accordion rendered");

  return (
    <div>
      <AccordionTitle title={props.title} onChange={props.onChange} />
      {!props.collapsed && (
        <AccordionBody items={props.items} onClick={props.onClick} />
      )}
    </div>
  );
}

export const Accordion = React.memo(AccordionSecret);

type AccordionTitlePropsType = {
  title: string;
  onChange: () => void;
};

function AccordionTitleSecret(props: AccordionTitlePropsType) {
  return <h3 onClick={(e) => props.onChange()}>{props.title}</h3>;
}

const AccordionTitle = React.memo(AccordionTitleSecret);

type AccordionBodyPropsType = {
  items: ItemPropsType[];
  onClick: (value: any) => void;
};

function AccordionBodySecret(props: AccordionBodyPropsType) {
  return (
    <ul>
      {props.items.map((i, index) => (
        <li
          onClick={() => {
            props.onClick(i.value);
          }}
          key={index}
        >
          {i.title}
        </li>
      ))}
    </ul>
  );
}

const AccordionBody = React.memo(AccordionBodySecret);
