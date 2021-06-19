import React, { useEffect } from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import DarkMode from "../components/DarkMode";

import { Close } from "../assets/svg/social-icons";

//Icons
import moon from "../assets/svg/moon.svg";
import sun from "../assets/svg/sun.svg";

const Header = ({ setMenuState, menuState }) => {
  const location = useLocation();

  useEffect(() => {
    setMenuState(false);
  }, [location]);

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
              
              <DarkMode />
              <button
                onClick={() => setMenuState(!menuState)}
                className="header__menubtn"
              >
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
