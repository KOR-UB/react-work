import React from "react";
import "./instagram.scss";
import Figcaption from "../img/Figcaption.mp4";

export default function Instagram() {
  return (
    <div className="insta-body">
      <video src={Figcaption} autoPlay muted loop controls></video>
    </div>
  );
}
