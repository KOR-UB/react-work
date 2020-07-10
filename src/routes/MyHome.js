import React from "react";
// import {useDispatche, useSelector} from "react-redux";
import SkillContainer from "../components/SkillContainer";
import ProjectContainer from "../components/ProjectContainer";
import "./MyHome.css";

function MyHome() {
  return (
    <main>
      <SkillContainer />
      <ProjectContainer />
    </main>
  );
}
export default MyHome;
