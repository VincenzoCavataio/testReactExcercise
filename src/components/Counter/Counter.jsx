import React from "react";
import { useState } from "react";
import { styleBlaBla, styleBlaBla2 } from "./style";

export const Counter = ({ type }) => {
  const [count, setCount] = useState(0);

  return (
    <div style={type === "red" ? styleBlaBla2 : styleBlaBla}>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};
