// import React from "react"
// import Img from "gatsby-image"
// import Layout from "../components/Layout"

// const ProjectDetails = ({ data }) => {
//   const { html } = data.markdownRemark
//   const { title, stack, featuredImg } = data.markdownRemark.frontmatter

//   return (
//     <Layout>
//       <div>
//         <h2>{title}</h2>
//         <h3>{stack}</h3>
//         <div>
//           <Img fluid={featuredImg.childImageSharp.fluid} />
//         </div>
//         <div dangerouslySetInnerHTML={{ __html: html }} />
//       </div>
//     </Layout>
//   )
// }

// export const query = graphql`
//   query ProjectDetails($slug: String) {
//     markdownRemark(frontmatter: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         stack
//         title
//         featuredImg {
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `

// export default ProjectDetails
