import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import Contact from "../components/contact"
import Header from "../components/header"
import "../styles/about.scss"
import "../styles/index.scss"

const About = ( {data} ) => (
  <Layout>
    <Header siteTitle="About | Sherry Xie"/>
    <SEO title="about" />
    <div className="about">
      <h1>About me</h1>
      <div className="about-content">
        <div className="about-description">Sathiskumar
          <p>Born and raised in Tamilnadu, India, I’m a recent graduate from the Bachelor In Information at Coimbatore Institute of Technology (also known as CIT), in Coimbatore, Tamilnadu. I am a product designer, who loves crafting big ideas and is passionate about designing meaningful experiences that influence positive change and can help make the world a better place. 

Driven by the idea that people can be motivated to do good, I aim to use creative problem-solving and human-centred design approach to create efficient and dynamic digital experiences that are accessible and inclusive for everyone to enjoy. At my core, I believe that in order to craft a seamless user experience and bring innovative ideas to life, it is important to understand the intersection of design, business, technology and user.

I am a self-motivated designer who is always looking for new challenges and opportunities that can help me continue to develop and grow as a designer.
</p>
          <p>I spend time thinking critically about what/why/how we consume what we do — whether it's material goods, entertainment, news, or advertising. I'm concerned about how technology augments consumer culture, and the (often adverse) effects that has on our desires, identities, happiness, and environment. My goal — be it through my design work or otherwise — is to pursue projects that will improve public life for everyday people, and to help build more sustainable communities.</p>
          <p>I’m currently looking for full-time design roles after graduating in April 2021. </p>
          <div className="contact-about">
            <Contact
                email="satheshklpt@gmail.com"
                dribbble="https://dribbble.com/SathizhSK"
                linkedin="https://www.linkedin.com/in/sathiskumar-p-2ab07a1b1"
                Behance="https://www.behance.net/satheshkumar4"
                instagram="https://www.instagram.com/sathesh__"
              backgroundColor="contact-about"
            />
          </div>
        </div>
        <div className="headshot">
          <Img
            fluid={data.Headshot.childImageSharp.fluid}
            alt="headshot"
          />
        </div>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    Headshot: file(relativePath: { eq: "about-sk.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100, grayscale: false) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default About
