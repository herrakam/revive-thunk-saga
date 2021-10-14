import React from "react";

function Counter({ number, onIncrease, onDecrease }) {
  return (
    <>
      <h1> {number}</h1>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </>
  );
}

export default Counter;
