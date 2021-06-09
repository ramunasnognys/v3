module.exports = {
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Source Code Pro`, `Poppins\:300,400,400i,700`],
        display: "swap",
      },
    },
  ],

  siteMetadata: {
    title: "My Gatsby Portfolio",
    description: "web dev portfolio",
    copyright: "This website is made by Ramunas Nognys",
    contact: "ramunas.nognys@gmail.com",
  },
};
