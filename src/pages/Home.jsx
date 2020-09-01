import React from "react";
import "./home.scss";
import Skill from "../components/Skill";
import About from "../components/About";

function Home() {
  return (
    <div className="home-body">
      <About />
      <Skill />
    </div>
  );
}

export default Home;
