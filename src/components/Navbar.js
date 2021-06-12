import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

export default function Navbar() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const { title } = data.site.siteMetadata;

  return (
    <nav className="navbar">
      {/* <h1>{title}</h1> */}
      <div className="navbar__links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contactMe">Contact Me</Link>
      </div>
    </nav>
  );
}
