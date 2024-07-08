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

export function Accordion(props: AccordionPropsType) {
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

type AccordionTitlePropsType = {
  title: string;
  onChange: () => void;
};

function AccordionTitle(props: AccordionTitlePropsType) {
  return <h3 onClick={(e) => props.onChange()}>{props.title}</h3>;
}

type AccordionBodyPropsType = {
  items: ItemPropsType[];
  onClick: (value: any) => void;
};

function AccordionBody(props: AccordionBodyPropsType) {
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
