import React from "react";
import { NavLink, Redirect } from "react-router-dom";

function MyNav() {
  const clickHandle = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <header className="main-navigation">
        <div className="header-container">
          <nav>
            <NavLink to="/" exact onClick={clickHandle} title="Home">
              <i
                className="fas fa-user-circle"
                onClick={() => <Redirect to="./"></Redirect>}
              ></i>
            </NavLink>
            <NavLink
              to={{
                pathname: `/tada`,
              }}
              onClick={clickHandle}
              title="Tada"
            >
              <i className="fas fa-car"></i>
            </NavLink>
            <NavLink
              to={{
                pathname: `/line`,
              }}
              onClick={clickHandle}
              title="Line"
            >
              <i className="fab fa-line"></i>
            </NavLink>
            <NavLink
              to={{
                pathname: `/starbucks`,
              }}
              onClick={clickHandle}
              title="Starbucks"
            >
              <i className="fas fa-mug-hot"></i>
            </NavLink>
            <NavLink
              to={{
                pathname: `/jnews`,
              }}
              onClick={clickHandle}
              title="Jnews"
            >
              <i className="fas fa-newspaper"></i>
            </NavLink>
            <NavLink
              to={{
                pathname: `/weather`,
              }}
              onClick={clickHandle}
              title="Weather"
            >
              <i className="fas fa-sun"></i>
            </NavLink>
            <NavLink
              to={{
                pathname: `/todos`,
              }}
              onClick={clickHandle}
              title="TodoList"
            >
              <i className="fas fa-clipboard-list"></i>
            </NavLink>
            <NavLink
              to={{
                pathname: `/instagram`,
              }}
              onClick={clickHandle}
              title="Instagram"
            >
              <i className="fab fa-instagram-square"></i>
            </NavLink>
          </nav>
          <nav>
            <NavLink
              to={{
                pathname: `/hobby`,
              }}
              onClick={clickHandle}
              title="Hobby"
            >
              <i className="fab fa-codepen"></i>
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  );
}

export default MyNav;
