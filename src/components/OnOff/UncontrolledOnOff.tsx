import React, { useState } from "react";

type OnOffPropsType = {
  onChange: (on: boolean) => void;
  defaultOn?: boolean;
};

const UncontrolledOnOffSecret = (props: OnOffPropsType) => {
  const [on, setOn] = useState(props.defaultOn ? props.defaultOn : false);

  const onStyle = {
    display: "inline-block",
    backgroundColor: on ? "green" : "white",
    width: "30px",
    height: "20px",
    border: "1px solid black",
  };

  const offStyle = {
    display: "inline-block",
    backgroundColor: on ? "white" : "red",
    width: "30px",
    height: "20px",
    border: "1px solid black",
  };

  const indicatorStyle = {
    display: "inline-block",
    width: "10px",
    height: "10px",
    borderRadius: "5px",
    border: "1px solid black",
    marginLeft: "5px",
    backgroundColor: on ? "green" : "red",
  };

  return (
    <div>
      <div
        style={onStyle}
        onClick={() => {
          setOn(true);
        }}
      >
        On
      </div>
      <div
        style={offStyle}
        onClick={() => {
          setOn(false);
        }}
      >
        Off
      </div>
      <div style={indicatorStyle}></div>
    </div>
  );
};

export const UncontrolledOnOff = React.memo(UncontrolledOnOffSecret);
