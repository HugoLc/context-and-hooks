import React from "react";
import { useCounter } from "../contexts/CounterContext";

const CounterNumber = () => {
  const { counter } = useCounter();
  return <span>{counter}</span>;
};

export default CounterNumber;
