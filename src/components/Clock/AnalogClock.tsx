import React, { useEffect, useState } from "react";
import "./Clock.css";

type ClockPropsType = {
  mode?: "digital" | "analog";
};

export const AnalogClock = ({ mode }: ClockPropsType) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId); // Очистка таймера при размонтировании
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondHandStyle = {
    transform: `rotate(${seconds * 6}deg)`,
  };
  const minuteHandStyle = {
    transform: `rotate(${minutes * 6 + seconds / 10}deg)`,
  };
  const hourHandStyle = {
    transform: `rotate(${hours * 30 + minutes / 2}deg)`,
  };

  let view;

  switch (mode) {
    case "analog":
      view = (
        <div className="clock">
          <div className="hand hour" style={hourHandStyle}></div>
          <div className="hand minute" style={minuteHandStyle}></div>
          <div className="hand second" style={secondHandStyle}></div>
        </div>
      );
      break;
    case "digital":
    default:
      view = <DigitalClock />;
  }

  return <>{view}</>;
};

const DigitalClock = ({ mode }: ClockPropsType) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      let date = new Date();

      setTime(
        date.getHours().toString() +
          ":" +
          date.getMinutes().toString() +
          ":" +
          date.getSeconds().toString(),
      );
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <>Time: {time}</>;
};
