import React from "react"

import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          copyright
        }
      }
    }
  `)

  const { copyright } = data.site.siteMetadata
  return (
    <footer>
      <div className="container">
        <p className="bold">{copyright}</p>
      </div>
    </footer>
  )
}

export default Footer
