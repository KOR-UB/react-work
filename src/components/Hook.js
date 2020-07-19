import React, {useReducer, useState} from "react";
// import axios from "axios";
// import {useDispatch, useSelector, useStore} from "react-redux";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "GET_NUM":
      console.log(state)
      return state;
    case "DELETE":
      return state = 0;
    default:
      return state;
  }
}

function Hook() {
  const [count, setCount] = useState(0);
  const [number, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => {
    dispatch({
      type: "INCREMENT"
    })
  };
  const onDecrease = () => {
    dispatch({
      type: "DECREMENT"
    })
  };
  const onGet = () => {
    dispatch({
      type: "GET_NUM"
    })
  };
  const onDelete = () => {
    dispatch({
      type: "DELETE"
    })
  };
  return (
    <>
      {count}
      {number}
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <button onClick={onGet}>읽기</button>
      <button onClick={onDelete}>초기화</button>
    </>
  );
}

export default Hook;
