import React, { useEffect, useRef } from "react";
import "./scaffolding.scss";

export default function Scaffolding({ flow }) {
  const $nav = useRef(null);
  const $marker = useRef(null);
  if (flow !== "horizontal" && flow !== "vertical") {
    return <span>flow: horizontal 또는 vertical을 설정해주세요.</span>;
  }
  if (flow === "horizontal") {
    return (
      <div className={flow}>
        <nav
          ref={$nav}
          onMouseOver={(e) => {
            if (!e.target.matches("nav > a")) return;
            indicator(e);
          }}
        >
          <div id="marker" ref={$marker}></div>
          <a href="#" className="active">
            Home
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </a>
          <a href="#">
            About
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </a>

          <a href="#">
            Services
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </a>

          <a href="#">
            Portfolio
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </a>

          <a href="#">
            Team
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </a>

          <a href="#">
            Contact
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </a>
        </nav>
      </div>
    );
  }
  function indicator(e) {
    $marker.current.style.left = e.target.offsetLeft + "px";
    $marker.current.style.width = e.target.offsetWidth + "px";
  }
  return (
    <div>
      <p></p>
    </div>
  );
}
