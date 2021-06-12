import React from "react";
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

function Hamburger() {
  return (
    <div className="hamburger-menu">
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
            <a href="#" className="menu-resume">
              <Download />
              <span>Resume</span>
            </a>
            <a href="#" className="menu-email">
              ramunas.nognys@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hamburger;
