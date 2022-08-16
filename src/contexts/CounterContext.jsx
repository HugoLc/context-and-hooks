import React from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";

const CounterContext = createContext();

export default function CounterProvider({ children }) {
  const [counter, setCounter] = useState(0);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
}

export function useCounter() {
  const context = useContext(CounterContext);
  console.log(context);
  const { counter, setCounter } = context;

  const sumFunction = (sumValue = 1) => {
    setCounter(counter + sumValue);
  };

  return { counter, sumFunction };
}
