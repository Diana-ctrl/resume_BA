import React from "react";
import "./header.css";
import Buttons from "./Buttons";
import Me from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm </h5>
        <h1>Diana</h1>
        <h1 className="text-light">Business Analyst</h1>
        <Buttons />
        <HeaderSocials />
        <div className="me">
          <img src={Me} alt="Me" />
        </div>
        <a href="#contact" className="scrooll_down">
          Scroll down
        </a>
      </div>
    </header>
  );
};

export default Header;
