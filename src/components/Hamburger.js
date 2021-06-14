import React, { useEffect, useRef } from "react";
import { Link } from "gatsby";
import Navbar from "./Navbar";

import {
  Github,
  LinkedIn,
  Instagram,
  Facebook,
  Twitter,
  Download,
} from "../assets/svg/social-icons";

function Hamburger({ state }) {
  // const [isHidden, showNavigation] = useState(true);
  let menu = useRef(null);

  useEffect(() => {
    if (state.clicked === false) {
      // close our menu
      menu.style.display = "none";
      console.log("CLOSED OPENED");
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // open our menu
      console.log("MENU OPENED");
      menu.style.display = "block";
    }
  });

  return (
    <div ref={(el) => (menu = el)} className="hamburger-menu">
      <div className="menu-secondary-background-color"></div>
      <div className="menu-layer">
        <div className="menu-city-background"></div>
        <div className="container">
          <div className="wrapper">
            <span className="menu-text">Menu</span>
            <div className="menu-links">
              <Navbar />
            </div>
            <div className="menu-social-icons">
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
            </div>

            <button className="btn menu-resume">Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hamburger;
