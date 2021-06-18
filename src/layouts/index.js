import React, { useEffect, useState } from "react";

import "../styles/init.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Menu from "../components/Menu";


const Layout = ({ children }) => {
  // State of our menu
  const [menuState, setMenuState] = useState(false);

  // Locking the body from scrolling when menu is opened
  useEffect(() => {
    menuState
      ? document.body.classList.add("body-lock")
      : document.body.classList.remove("body-lock");
  }, [menuState]);

  return (
    <div>
      <Header setMenuState={setMenuState} menuState={menuState} />
      <Menu menuState={menuState} setMenuState={setMenuState} />

      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
