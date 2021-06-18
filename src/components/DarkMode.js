import React, { Fragment, useState, useEffect } from "react";
import Helmet from "react-helmet";

import moon from "../assets/svg/moon.svg";
import sun from "../assets/svg/sun.svg";

// import "../styles/dark-mode-switch.scss";

const themeType = {
  dark: "dark",
  light: "light",
};

const DarkMode = () => {
  const [mode, setMode] = useState(() => {
    if (typeof window !== "undefined") {
      const val = localStorage.getItem("theme");
      // return val ? JSON.parse(val) : themeType.light;
    }
    return themeType.light;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", JSON.stringify(mode));
    }
  }, [mode]);

  const toggleMode = () => {
    setMode(mode === themeType.light ? themeType.dark : themeType.light);
  };

  return (
    <Fragment>
      <Helmet>
        <body className={mode} />
      </Helmet>
      <button
        className="theme-mode"
        onClick={toggleMode}
        role="button"
        tabIndex="0"
        onKeyDown={toggleMode}
      >
        {mode === themeType.light ? (
          <img src={moon} alt="dark mode" />
        ) : (
          <img src={sun} alt="light mode" />
        )}
      </button>
    </Fragment>
  );
};

export default DarkMode;
