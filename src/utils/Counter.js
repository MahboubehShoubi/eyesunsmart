"use client";

import React, { useEffect, useState } from "react";

const Counter = ({ max, time }) => {
  const [number, setNumber] = useState();

  let counter = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      counter++;
      setNumber(counter);
      if (counter >= max) {
        setNumber(max);
        clearInterval(interval);
      }
    }, time);
  }, []);

  return <span>{number}</span>;
};

export default Counter;
