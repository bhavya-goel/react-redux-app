import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCount } from "./slices";

const getCountState = state => state.count.count;

export default function CounterUsingRedux() {
  const count = useSelector(state => getCountState(state));
  const dispatch = useDispatch();

  return (
    <>
      <div>Counter: {count}</div>
      <button onClick={() => dispatch(updateCount())}>updateCount</button>
    </>
  );
}
