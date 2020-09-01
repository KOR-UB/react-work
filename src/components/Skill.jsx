import React, {useEffect} from "react";
import gsap from "gsap";
import htmlLogo from "../img/icons/HTML5_Badge.svg";
import jsLogo from "../img/icons/js.svg";
import sassLogo from "../img/icons/sassLogo.png";
import nodeLogo from "../img/icons/node.svg";
import reactLogo from "../img/icons/logo512.png";

export default function Skill() {
  useEffect(() => {
    gsap.to(".skill-container", {
      duration: 2,
      y: -100,
      backgroundColor: "#560563",
      borderRadius: "20px",
      padding: 60,
      border: "5px solid white",
      ease: "bounce",
    });
  }, []);
  const skillAry = [
    {
      id: 1,
      src: htmlLogo,
      alt: "HTML5 logo",
      caption: "HTML5",
    },
    {
      id: 2,
      src: jsLogo,
      alt: "JavaScript logo",
      caption: "JavaScript",
    },
    {
      id: 3,
      src: sassLogo,
      alt: "Sass logo",
      caption: "Sass(Scss)",
    },
    {
      id: 4,
      src: nodeLogo,
      alt: "node logo",
      caption: "node.js",
    },
    {
      id: 5,
      src: reactLogo,
      alt: "React logo",
      caption: "React",
    },
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
