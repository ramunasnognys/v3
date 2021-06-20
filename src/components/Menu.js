import React, { useEffect, useRef } from "react";
import { Link } from "gatsby";
import Navbar from "./Navbar";
import gsap from "gsap";

import {
  Github,
  LinkedIn,
  Instagram,
  Facebook,
  Twitter,
  Close,
} from "../assets/svg/social-icons";

const Menu = ({ menuState, setMenuState }) => {
  // Create varibles of our dom nodes
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);

  useEffect(() => {
    if (menuState) {
      console.log("OPEN");
      gsap.to([revealMenu, revealMenuBackground], {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
        stagger: { amount: 0.07 },
      });

      gsap.to(menu, {
        duration: 1,
        css: { display: "none" },
      });
    } else if (!menuState) {
      console.log("CLOSED");
     
    }
  }, [menuState]);

  // OPEN MENU
  const staggerReveal = (node1, node2) => {
    gsap.from(
      [node1, node2],
      {
        duration: 0.8,
        height: 0,
        transformOrigin: "right top",
        skewY: 2,
        ease: "power3.inOut",
        stagger: {
          amount: 0.1,
        },
      },
      [menuState]
    );
  };

  return (
    <>
      {menuState && (
        <div ref={(el) => (menu = el)} className="hamburger-menu">
          <div
            ref={(el) => (revealMenuBackground = el)}
            className="menu-secondary-background-color"
          ></div>
          <div ref={(el) => (revealMenu = el)} className="menu-layer">
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
