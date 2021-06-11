import React from "react";
import { Link } from "gatsby";
import Navbar from "./Navbar";

function Hamburger() {
  return (
    <button className="hamburger-menu">
      <div className="menu-secondary-background-color"></div>
      <div className="menu-layer">
        <div className="menu-city-background"></div>
        {/* <div className="container"> */}
        {/* <div className="wrapper"> */}
        <div className="menu-links">
          <Navbar />
          <div className="info">
            <h3>Our Promise</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
              labore recusandae provident fuga expedita dignissimos nihil quia
              enim quisquam in animi consequuntur, odit veritatis quod nostrum
              facere fugit iure quidem quasi iste corporis quo sapiente magnam!
              Non saepe odit facilis.
            </p>
          </div>
          <div className="social-icons">
            <a href="#">Icon 1</a>
            <a href="#">Icon 2</a>
            <a href="#">Icon 3</a>
            <a href="#">Icon 4</a>
          </div>
        </div>
        {/* </div> */}
        {/* </div> */}
      </div>
    </button>
  );
}

export default Hamburger;
