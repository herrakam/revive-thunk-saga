import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Counter from "../components/Counter";
import { decreaseAsync, increaseAsync } from "../module/counter";

function CounterContainer() {
  const number = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increaseAsync());
  };
  const onDecrease = () => {
    dispatch(decreaseAsync());
  };
  return (
    <Counter
      number={number}
      onDecrease={onDecrease}
      onIncrease={onIncrease}
    ></Counter>
  );
}

export default CounterContainer;
