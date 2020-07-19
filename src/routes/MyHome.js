import React from "react";
// import {useDispatche, useSelector} from "react-redux";
import SkillContainer from "../components/SkillContainer";
import ProjectContainer from "../components/ProjectContainer";
// import Hook from "../components/Hook";
import ReducerTest from "../components/ReducerTest";
import "./MyHome.css";

function MyHome() {
  return (
    <main>
      <ReducerTest />
      <SkillContainer />
      <ProjectContainer />
    </main>
  );
}
export default MyHome;
