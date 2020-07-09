import React, {useRef, useEffect} from "react";
import {Link} from "react-router-dom";

function Navigation() {
  useEffect(() => {
    console.log("컴포넌트가 화면에 나타남");
    return () => {
      console.log("컴포넌트가 화면에서 사라짐");
    };
  }, []);
  const navRef = useRef();
  const changeToggle = (e) => {
    if (!e.target.matches("nav > a")) return;
    if (e.target.className === "active") return;
    navRef.current.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
  };
  return (
    <header>
      <div className="header-container">
        <nav ref={navRef} onClick={changeToggle}>
          <Link to="/" className="active">
            Home
          </Link>
          <Link to="/about">About Me</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
