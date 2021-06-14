import React, { useState } from "react";
import { Link } from "gatsby";

import Hamburger from "./Hamburger";

//Icons
import moon from "../assets/svg/moon.svg";
import sun from "../assets/svg/sun.svg";
const Header = (props) => {
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu",
  });

  // State of our button
  const [disabled, setDisabled] = useState(false);
  const handleMode = () => {
    return props.mode === "light"
      ? props.setMode("dark")
      : props.setMode("light");
  };

  const handleModeMenu = () => {
    disableMenu();

    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close",
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      });
    }
  };

  //Determine if out menu button should be disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
    console.log("test");
  };

  return (
    <header className="header">
      <div className="container">
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
              <button
                disabled={disabled}
                onClick={handleModeMenu}
                className="header__menubtn"
              >
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Hamburger state={state} />
    </header>
  );
};

export default Header;
