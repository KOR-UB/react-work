import React from "react";
import "./home.scss";
import Skill from "../components/Skill";
import About from "../components/About";
import SurFesta from "./SurFesta";

function Home() {
  return (
    <div className="home-body">
      <About />
      <Skill />
      <SurFesta />
    </div>
  );
}

export default Home;
