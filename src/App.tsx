import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import {ControlledOnOff} from "./components/OnOff/UncontrolledOnOff";


function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    const [collapsedValue, setCollapsedValue] = useState(false)

    const [on, setOn] = useState(false)


    return (
        <div>
            {/*<PageTitle title={'This is APP component'}/>*/}
            {/*<PageTitle title={'My friends'}/>*/}
            {/*Article 1*/}
            {/*<Rating />*/}
            <Accordion title={'Controlled'} collapsed={collapsedValue} onClick={setCollapsedValue}/>
            <UncontrolledAccordion title={'Uncontrolled'}/>
            {/*Article 2*/}
            <Rating onClick={setRatingValue} value={ratingValue}/>
            <UncontrolledRating/>
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}

            <OnOff onChange={setOn}/> {on.toString()}
            <ControlledOnOff on={on} onClick={setOn}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;
