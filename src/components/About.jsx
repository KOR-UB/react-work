import React, {useEffect} from "react";
import gsap from "gsap/dist/gsap.min";
import ScrollTrigger from "gsap/ScrollTrigger";
import profile from "../img/YOONYUBI.jpg";
import "./about.scss";

export default function About() {
  useEffect(() => {
    const sec = gsap.utils.toArray(".about-sec");
    sec.forEach((sec, i) => {
      ScrollTrigger.create({
        trigger: sec,
        toggleClass: "active",
      });
    });
  }, []);
  return (
    <div className="about-body">
      <section className="about-sec">
        <h2 className="reveal">Web FrontEnd Developer</h2>
        <h2 className="reveal">JavaScript React</h2>
        <img src={profile} className="gsap-img" />
      </section>
    </div>
  );
}
