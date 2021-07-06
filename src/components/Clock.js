import React, { useState, useEffect } from "react";

const Clock = () => {
  const formatedTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    const AmOrPm = hours >= 12 ? "PM" : "AM";
    const formatHour = hours % 12 || 12;
    const formatedMin = ("0" + min).slice(-2);
    const formatedSec = ("0" + sec).slice(-2);

    return `${formatHour}:${formatedMin}:${formatedSec} ${AmOrPm}`;
  };
  const [time, setTime] = useState(formatedTime());

  useEffect(() => {
    const intId = setInterval(() => {
      setTime(formatedTime());
    }, 1000);

    return () => {
      clearInterval(intId);
    };
  }, []);

  return (
    <>
      <span>{time}</span>
    </>
  );
};

export default Clock;
