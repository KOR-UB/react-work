import React from "react";
import "./MyHome.css";
import htmlLogo from "../img/t/HTML5_Badge.svg";
import cssLogo from "../img/t/css.svg";
import jsLogo from "../img/t/js.svg";
import sassLogo from "../img/t/Sass_Logo_Color.svg";
import nodeLogo from "../img/t/node.svg";
import reactLogo from "../img/t/React-icon.svg";
import webpackLogo from "../img/t/webpack.png"
import babelLogo from "../img/t/babel.png"

function MyHome() {
  return (
    <main>
      <section className="skill-container">
        <h2 className="skill-title">Skill</h2>
        <div className="skill-content">
          <figure>
            <img src={htmlLogo} alt="HTML5 logo" />
            <figcaption>HTML5</figcaption>
          </figure>
          <figure>
            <img src={cssLogo} alt="CSS3 logo" />
            <figcaption>CSS3</figcaption>
          </figure>
          <figure>
            <img src={jsLogo} alt="JavaScript logo" />
            <figcaption>JavaScript</figcaption>
          </figure>
          <figure>
            <img src={sassLogo} alt="Sass logo" />
            <figcaption>Sass</figcaption>
          </figure>
          <figure>
            <img src={nodeLogo} alt="node logo" />
            <figcaption>node.js</figcaption>
          </figure>
          <figure>
            <img src={reactLogo} alt="React logo" />
            <figcaption>React</figcaption>
          </figure>
          <figure>
            <img src={webpackLogo} alt="WebPack logo" />
            <figcaption>WebPack</figcaption>
          </figure>
          <figure>
            <img src={babelLogo} alt="babel logo" />
            <figcaption>Babel</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
export default MyHome;
