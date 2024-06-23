import React, {useState} from "react";

type AccordionPropsType = {
    title: string
}

function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendered')

    const [collapsed, setCollapsed] = useState(true)

    return (
        <div>
            <AccordionTitle title={props.title}  onClick={() => setCollapsed(!collapsed)}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    // collapsed: boolean
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={() => props.onClick()}>{props.title}</h3>
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