import {useState} from "react";


type OnOffPropsType = {
    on: boolean
    onClick: (value: boolean) => void
}

export const ControlledOnOff = (props: OnOffPropsType) => {


    const onStyle = {
        display: 'inline-block',
        backgroundColor: props.on ? 'green' : 'white',
        width: '30px',
        height: '20px',
        border: '1px solid black'
    }

    const offStyle = {
        display: 'inline-block',
        backgroundColor: props.on ? 'white' : 'red',
        width: '30px',
        height: '20px',
        border: '1px solid black'
    }

    const indicatorStyle = {
        display: 'inline-block',
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        marginLeft: '5px',
        backgroundColor: props.on ? 'green' : 'red'
    }

    return (
        <div>
            <div style={onStyle} onClick={() => {props.onClick(true)}}>On</div>
            <div style={offStyle} onClick={() => {props.onClick(false)}}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};
