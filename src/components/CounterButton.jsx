import React from "react";
import { useCounter } from "../contexts/CounterContext";
const CounterButton = () => {
  const { sumFunction } = useCounter();
  return <button onClick={() => sumFunction(5)}>Add</button>;
};

export default CounterButton;
