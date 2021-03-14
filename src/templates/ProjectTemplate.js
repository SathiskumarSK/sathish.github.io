import React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/header"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Contact from "../components/contact"
import "../styles/ProjectTemplate.scss"
import "animate.css"

const ProjectTemplate = (props) => {
  const title = props.data.markdownRemark.frontmatter.title;
  const date = props.data.markdownRemark.frontmatter.date;
  const html = props.data.markdownRemark.html;
  return (
    <Layout>
      <Header siteTitle="Sathiskumar"/>
      <SEO title= {title + " | Sathiskumar"}/>
      <div className="project-container animate__animated animate__fadeIn"
        dangerouslySetInnerHTML={{__html: html}}
        />
      <div className="project-contact">
        <Contact
          email="satheshklpt@gmail.com"
          dribbble="https://dribbble.com/SathizhSK"
          linkedin="https://www.linkedin.com/in/sathiskumar-p-2ab07a1b1"
          Behance="https://www.behance.net/satheshkumar4"
          instagram="https://www.instagram.com/sathesh__"
          backgroundColor="contact-project"
        />
      </div>
      <div className="backToHome">
        <h3><Link to={`/`}>← Back to Index</Link></h3>
      </div>
    </Layout>
  )
}

export default ProjectTemplate;

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: {path: {eq: $pathSlug} }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
