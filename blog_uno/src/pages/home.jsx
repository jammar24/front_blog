import React from "react";
import Register from "../components/Register";
import "./styles/home.css";
const home = () => {
  return (
    <div className="content__home">
      <div className="home">
        <div className="home__circle-1"></div>
        <div className="home__circle-2"></div>
        <div className="home__circle-3"></div>
      </div>
      <div className="home__container">
          <Register />
      </div>
    </div>
  );
};

export default home;
