import React from "react";
import "./instagram.scss";
import Surfesta from "../img/Surfesta.mp4";

export default function SurFesta() {
  return (
    <div className="surfesta-body">
      <a href="https://surfesta.site" target="_blank">
        Surfesta! - 이벤트를 찾는 빠른 방법
      </a>
      <video src={Surfesta} autoPlay muted loop controls></video>
    </div>
  );
}
