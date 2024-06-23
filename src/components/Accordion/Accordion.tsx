import React, {useState} from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
    onClick: (value: boolean) => void
}

function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendered')

    return (
        <div>
            <AccordionTitle title={props.title} onClick={props.onClick} collapsed={props.collapsed}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    onClick: (value: boolean) => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={() => props.onClick(!props.collapsed)}>{props.title}</h3>
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion