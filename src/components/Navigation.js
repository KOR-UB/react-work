import React, {useRef} from "react";
import { Link } from "react-router-dom";

function Navigation() {
  const navRef = useRef();
  const changeToggle = e => {
    if(!e.target.matches("nav > a")) return
    if(e.target.className === "active") return;
    navRef.current.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
  }
  return (
    <header>
      <div className="header-container">
        <nav ref={navRef} onClick={changeToggle}>
          <Link to="/" className="active">Home</Link>
          <Link to="/about">About Me</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}

export default  Navigation;