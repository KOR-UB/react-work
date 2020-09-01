import React, {createContext, useContext} from "react";

const MyContext = createContext("DefaultValue");

function Child() {
  const text = useContext(MyContext);
  return <div>안녕하세요 {text}</div>;
}
function Parent() {
  return <Child />;
}
function GrandParent() {
  return <Parent />;
}
function ContextSample() {
  return (
    <MyContext.Provider value="GOOD">
      <GrandParent />
    </MyContext.Provider>
  );
}
export default ContextSample;
const api_key = "AIzaSyAeYU_lTDahnUk51ZGyA-MZL3pb_K9Cx9Y"