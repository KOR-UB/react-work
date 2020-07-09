import React, {useEffect} from "react";
import htmlLogo from "../img/t/HTML5_Badge.svg";
import cssLogo from "../img/t/css.svg";
import jsLogo from "../img/t/js.svg";
import sassLogo from "../img/t/Sass_Logo_Color.svg";
import nodeLogo from "../img/t/node.svg";
import reactLogo from "../img/t/React-icon.svg";
import webpackLogo from "../img/t/webpack.png";
import babelLogo from "../img/t/babel.png";

function SkillContainer() {
  useEffect(() => {
    console.log("스킬 컴포넌트가 화면에 나타남");
    return () => {
      console.log("스킬 컴포넌트가 화면에서 사라짐");
    };
  }, []);
  const skillAry = [
    {id: 1, src: htmlLogo, alt: "HTML5 logo", caption: "HTML5"},
    {id: 2, src: cssLogo, alt: "CSS3 logo", caption: "CSS3"},
    {id: 3, src: jsLogo, alt: "JavaScript logo", caption: "JavaScript"},
    {id: 4, src: sassLogo, alt: "Sass logo", caption: "Sass"},
    {id: 5, src: nodeLogo, alt: "node logo", caption: "node.js"},
    {id: 6, src: reactLogo, alt: "React logo", caption: "React"},
    {id: 7, src: webpackLogo, alt: "WebPack logo", caption: "WebPack"},
    {id: 8, src: babelLogo, alt: "Babel logo", caption: "Babel"},
  ];

  return (
    <section className="skill-container">
      <h2 className="skill-title">Skill</h2>
      <div className="skill-content">
        {skillAry.map((item) => (
          <figure key={item.id}>
            <img src={item.src} alt={item.alt} />
            <figcaption>{item.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default SkillContainer;
