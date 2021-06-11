import React from "react";
import { Link } from "gatsby";
// import Navbar from "./Navbar";
import Hamburger from "./Hamburger";
//Icons
import moon from "../assets/svg/moon.svg";
import sun from "../assets/svg/sun.svg";
import {
  Instagram,
  Facebook,
  Vimeo,
  Pink,
  Github,
} from "../assets/svg/social-icons";

const Header = (props) => {
  const handleMode = () => {
    return props.mode === "light"
      ? props.setMode("dark")
      : props.setMode("light");
  };

  return (
    <header className="header">
      {/* <div className="container"> */}
        <div className="header__wrapper">
          <div className="header__inner">
            <div className="header__logo">
              <Link to="/">
                ram<span></span>nog
              </Link>
            </div>
            <div className="header__menu">
              <a className="header__modebtn" onClick={handleMode}>
                {props.mode === "light" ? (
                  <img
                    className="header__modeicon"
                    src={moon}
                    alt="Light mode"
                  />
                ) : (
                  <img className="header__modeicon" src={sun} alt="Dark mode" />
                )}
              </a>
              <div className="header__menubtn">
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        {/* </div> */}
      </div>
      <Hamburger />
    </header>
  );
};

export default Header;
