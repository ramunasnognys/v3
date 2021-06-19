import React, { useEffect, useRef } from "react";
import { Link } from "gatsby";
import Navbar from "./Navbar";

import {
  Github,
  LinkedIn,
  Instagram,
  Facebook,
  Twitter,
  Close,
} from "../assets/svg/social-icons";

const Menu = ({ menuState, setMenuState }) => {
  useEffect(() => {});

  return (
    <>
      {menuState && (
        <div className="hamburger-menu">
          <div className="menu-secondary-background-color"></div>
          <div className="menu-layer">
            <div className="wrapper">
              <div className="container">
                <div onClick={() => setMenuState(!menuState)} className="close">
                  <Close />
                </div>
              </div>
              <div className="menu-city-background"></div>
              <span className="menu-text">Menu</span>
              <div className="menu-links">
                <Navbar />
              </div>
              <div className="menu-social-icons">
                <IconList />
              </div>

              <button className="btn menu-resume">Resume</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const IconList = () => {
  return (
    <li>
      <a className="icon social-icon" href="#">
        <Github />
      </a>
      <a className="icon social-icon" href="#">
        <Instagram />
      </a>
      <a className="icon social-icon" href="#">
        <LinkedIn />
      </a>
      <a className="icon social-icon" href="#">
        <Facebook />
      </a>
      <a className="icon social-icon" href="#">
        <Twitter />
      </a>
    </li>
  );
};

export default Menu;
