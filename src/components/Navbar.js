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
        <div className="fade-in-text">
          <Link data-text="Home" className="fade-in-text__link" to="/">
            Home
          </Link>
        </div>
        <Link data-text="About" className="fade-in-text__link" to="/about/">
          About
        </Link>
        <Link
          data-text="Projects"
          className="fade-in-text__link"
          to="/projects"
        >
          Projects
        </Link>
        <Link
          data-text="Contact"
          className="fade-in-text__link"
          to="/contactMe"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
