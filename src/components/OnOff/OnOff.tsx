import {useState} from "react";


type OnOffPropsType = {
    onChange: (on: boolean) => void
}

export const OnOff = (props: OnOffPropsType) => {

    let [on, setOn] = useState(false)

    const onStyle = {
        display: 'inline-block',
        backgroundColor: on ? 'green' : 'white',
        width: '30px',
        height: '20px',
        border: '1px solid black'
    }

    const offStyle = {
        display: 'inline-block',
        backgroundColor: on ? 'white' : 'red',
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
        backgroundColor: on ? 'green' : 'red'
    }

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }

    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

