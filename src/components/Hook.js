import React, {useReducer, useState} from "react";
import {useDispatch, useSelector, useStore} from "react-redux";

function reducer(__state, action) {
  switch (action.type) {
    case "INCREMENT":
      return __state + 1;
    case "DECREMENT":
      return __state - 1;
    case "GET_NUM":
      return makeNum(__state);
    default:
      return __state;
  }
}

function Hook() {
  const [count, setCount] = useState(0);
  const [_state, _dispatch] = useReducer(reducer, initState);
  return (
    <>
      {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

export default Hook;
