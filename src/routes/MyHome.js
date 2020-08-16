import React from "react";
// import {useDispatche, useSelector} from "react-redux";
import SkillContainer from "../components/SkillContainer";
import ProjectContainer from "../components/ProjectContainer";
// import Hook from "../components/Hook";
import ReducerTest from "../components/ReducerTest";
import "./MyHome.css";
import Palette from "../components/Palette";
import Scaffolding from "../components/Scaffolding";

function MyHome() {
  return (
    <main>
      {/* <ReducerTest />
      <SkillContainer />
      <ProjectContainer /> */}
      <Scaffolding flow="horizontal" />
      <Palette />
    </main>
  );
}
export default MyHome;
