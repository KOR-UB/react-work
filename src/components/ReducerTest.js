import React, {useRef, useMemo, useCallback, useReducer, createContext} from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function countActiveUsers(users) {
  return users.filter((user) => user.active).length;
}

const initialState = {
  inputs: {
    username: "",
    email: "",
  },
  users: [
    {
      id: 1,
      username: "ub",
      email: "ub@naver.com",
      active: true,
    },
    {
      id: 2,
      username: "ub2",
      email: "ub@google.com",
      active: false,
    },
    {
      id: 3,
      username: "ub3",
      email: "ub@daum.co.kr",
      active: false,
    },
  ],
};
function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value,
        },
      };
    case "CREATE_USER":
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user),
      };
    case "TOGGLE_USER":
      return {
        ...state,
        users: state.users.map((user) => (user.id === action.id ? {...user, active: !user.active} : user)),
      };
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };
    default:
      throw new Error("Unhandled action");
  }
}
export const UserDispatch = createContext(null);

function ReducerTest() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {users} = state;

  const count = useMemo(() => countActiveUsers(users, [users]));
  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser />
      <UserList users={users} />
      <div>활성 사용자 수: {count}</div>
    </UserDispatch.Provider>
  );
}

export default ReducerTest;
