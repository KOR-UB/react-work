import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  // useEffect(() => {
  //   console.log("컴포넌트가 화면에 나타남");
  //   return () => {
  //     console.log("컴포넌트가 화면에서 사라짐");
  //   };
  // }, []);
  // const navRef = useRef();
  // const changeToggle = (e) => {
  //   if (!e.target.matches("nav > a")) return;
  //   if (e.target.className === "active") return;
  //   navRef.current.querySelector(".active").classList.remove("active");
  //   e.target.classList.add("active");
  // };
  return (
    <header>
      <div className="header-container">
        <nav>
          <NavLink to="/" exact>
            Home
          </NavLink>
          <NavLink to="/about">About Me</NavLink>
          <NavLink to="/resume">Resume</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
