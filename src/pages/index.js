import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/contact"
import Header from "../components/header"
import ProjectItem from "../components/projectItem"
import ProjectItemManager from "../components/projectItemManager"
import HoverThumbnail from "../components/HoverThumbnail"
import "../styles/index.scss"
import Emph1 from "../images/emph-1-alt.gif"
import Emph2 from "../images/emph-2.gif"
import Emph3 from "../images/emph-3.gif"
import { ThemeContext } from 'styled-components'
import styled from "styled-components"
import "animate.css"
import { defaultTheme } from '../components/theme';

const HomeIntro = styled.div`
  .name, h1 {
    	color: ${({ theme }) => theme.text};
      transition: color 0.2s linear;
  }

  .HoverThumbnail:hover {
    color: ${({ theme }) => theme.highlightColor};
  }
`

const ProjectsLabel = styled.div`
  h3 {
    color: ${({ theme }) => theme.text};
    transition: color 0.2s linear;
  }
`

const IndexPage = ( {data}, props ) => {
  return (
    <Layout>
      <ThemeContext.Consumer>
        {(theme = defaultTheme) => (
          <>
          <Header
          siteTitle="Sathiskumar"/>
          <div className="home animate__fadeIn animate__animated">
            <SEO title="index"/>
            <HomeIntro>
              <div className="home-intro">
                <h1><span className="name">Sathiskumar</span> is an experience designer from a Engineering Background who loves <HoverThumbnail sizeThumbnail={310} text="crafting elegant tools" thumbnail={Emph1}></HoverThumbnail>, <HoverThumbnail sizeThumbnail={230} text="visualizing data" thumbnail={Emph2}></HoverThumbnail>, and <HoverThumbnail sizeThumbnail={260} renderAbove={true} text="dreaming up sustainable futures" thumbnail={Emph3}></HoverThumbnail>.</h1>
              </div>
            </HomeIntro>
            <ProjectsLabel>
              <h3 className="projects-label">Selected Works</h3>
            </ProjectsLabel>
            <ProjectItemManager>
              <ProjectItem
                title="Spotify Redesign"
                skills="Redesign,Casestudy"
                description="A detailed case study on the redesign of the 'Group Session' feature on Spotify."
                link="/political-pages/"
                thumbnail={data.ThumbnailPolitical.childImageSharp.fluid}
                backgroundColor={theme.greenTile}
              />
              <ProjectItem
                title="Design Challenge"
                skills="Casestudy"
                description="Recycling and sustainability came in many forms, whether it is efficiency improvement, using renewable energy, materials reductions, or other carbon emission elimination tactics"
                link="/facebook-pages/"
                thumbnail={data.ThumbnailFacebook.childImageSharp.fluid}
                backgroundColor={theme.purpleTile}
              />
              <ProjectItem
                title="Play-ground"
                skills="Graphic design"
                description="Here you'll find me playing around and experimenting with the Raspberry Pi, modern web technologies, industrial, graphic and product design, photography and other areas I find interesting."
                link="https://dribbble.com/SathizhSK"
                thumbnail={data.ThumbnailVisier.childImageSharp.fluid}
                backgroundColor={theme.yellowTile}
              />
              <ProjectItem
                title="VR Tour"
                skills="Inworks"
                description="Designing and developing a Virtual Reality Environment for our College Campus"
                link="/ibm/"
                thumbnail={data.ThumbnailIBM.childImageSharp.fluid}
                backgroundColor={theme.orangeTile}
              />
              <ProjectItem
                title="Behance"
                skills="branding, ux/ui"
                description="Graphic Designs Poster Illustration UI Screens Wireframes Mockups..etc"
                link="https://medium.com/nwplusubc/designing-nwhacks-2018-86561c753451"
                thumbnail={data.ThumbnailNW.childImageSharp.fluid}
                backgroundColor={theme.blueTile}
              />
              <Contact
                email="satheshklpt@gmail.com"
                dribbble="https://dribbble.com/SathizhSK"
                linkedin="https://www.linkedin.com/in/sathiskumar-p-2ab07a1b1"
                Behance="https://www.behance.net/satheshkumar4"
                instagram="https://www.instagram.com/sathesh__"
                backgroundColor="contact-home"
              />
            </ProjectItemManager>
          </div>
          </>
        )}
      </ThemeContext.Consumer>
    </Layout>
  )
}

export const query = graphql`
  query {
    ThumbnailFacebook: file(relativePath: { eq: "thumbnail-facebook.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100, grayscale: false) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ThumbnailVisier: file(relativePath: { eq: "thumbnail-visier2.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100, grayscale: false) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ThumbnailPolitical: file(relativePath: { eq: "thumbnail-political.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100, grayscale: false) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ThumbnailIBM: file(relativePath: { eq: "thumbnail-ibm.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100, grayscale: false) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ThumbnailNW: file(relativePath: { eq: "thumbnail-nw.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100, grayscale: false) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
