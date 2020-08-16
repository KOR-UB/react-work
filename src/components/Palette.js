import React from "react";
import "./palette.scss";

export default function Palette() {
  function PaintingCursor(e) {
    e.target.className = "painting-cursor";
  }
  return (
    <div className="palette-tool">
      <ul>
        <li className="tool-paint">
          <button onClick={PaintingCursor}>Paint</button>
        </li>
      </ul>
    </div>
  );
}
