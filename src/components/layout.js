import React, { useState, useEffect } from "react";

import "../styles/init.scss";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const initialMode =
    typeof window !== "undefined"
      ? localStorage === undefined
        ? "light"
        : localStorage.getItem("jlmode")
      : "light";
  const [mode, setMode] = useState(initialMode);

  useEffect(() => {
    if ((mode === null) | (mode === undefined)) {
      setMode("light");
      localStorage.setItem("jlmode", "light");
    }
    if (mode === "dark" && typeof window !== "undefined") {
      localStorage.setItem("jlmode", "dark");
      document.body.classList.remove("light");
      document.body.classList.add(mode);
    } else if (mode === "light" && typeof window !== "undefined") {
      localStorage.setItem("jlmode", "light");
      document.body.classList.remove("dark");
      document.body.classList.add(mode);
    }
  }, [mode]);

  return (
    <div>
      <Header mode={mode} setMode={setMode} />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
