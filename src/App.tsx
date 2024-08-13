import React, { useState } from "react";
import "./App.css";
import { Accordion } from "./components/Accordion/Accordion";
import { Rating, RatingValueType } from "./components/Rating/Rating";
import { OnOff } from "./components/OnOff/OnOff";
import { UncontrolledRating } from "./components/Rating/UncontrolledRating";
import { UncontrolledOnOff } from "./components/OnOff/UncontrolledOnOff";
import { UncontrolledAccordion } from "./components/Accordion/UncontrolledAccordion";
import { Select } from "./components/Select/Select";

export function App() {
  const [ratingValue, setRatingValue] = useState<RatingValueType>(0);

  const [collapsedValue, setCollapsedValue] = useState(false);

  const [on, setOn] = useState(false);

  return (
    <div>
      {/*<PageTitle title={'This is APP component'}/>*/}
      {/*<PageTitle title={'My friends'}/>*/}
      {/*Article 1*/}
      {/*<Rating />*/}
      <Accordion
        title={"Controlled"}
        collapsed={collapsedValue}
        onChange={() => setCollapsedValue(!collapsedValue)}
        onClick={() => {}}
        items={[]}
      />
      <UncontrolledAccordion title={"Uncontrolled"} />
      {/*Article 2*/}
      <Rating onClick={setRatingValue} value={ratingValue} />
      {/*<UncontrolledRating />*/}
      {/*<Rating value={1}/>*/}
      {/*<Rating value={2}/>*/}
      {/*<Rating value={3}/>*/}
      {/*<Rating value={4}/>*/}
      {/*<Rating value={5}/>*/}
      <OnOff onChange={setOn} on={on} /> {on.toString()}
      {/*<UncontrolledOnOff defaultOn={on} />*/}
      {/*<Select*/}
      {/*  value={"work"}*/}
      {/*  onChange={() => {}}*/}
      {/*  items={[*/}
      {/*    { title: "Dimych", value: "1" },*/}
      {/*    { title: "Sveta", value: "2" },*/}
      {/*    { title: "Igor", value: "3" },*/}
      {/*    { title: "Viktor", value: "4" },*/}
      {/*  ]}*/}
      {/*/>*/}
      {/*<Clock />*/}
    </div>
  );
}

type PageTitlePropsType = {
  title: string;
};

function PageTitle(props: PageTitlePropsType) {
  return <h1>{props.title}</h1>;
}
