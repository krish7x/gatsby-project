import React from "react"
import Layout from "../components/layout"
import HeroSection from "../components/Reusable/HeroSection"
import { graphql } from "gatsby"
import InfoBlock from "../components/Reusable/InfoBlock"
import DualInfoBlock from "../components/Reusable/DualInfoBlock"
import PhotoBlock from "../components/About/dualphotoblock"

const AboutPage = ({ data }) => (
  <Layout>
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="About LCO"
      heroClass="about-bg"
      aboutid="about-bg"
      headingColor="about-heading"
    />

    <DualInfoBlock
      heading="Message From Us"
      src="https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    />

    <InfoBlock heading="Our Goals" />
    <PhotoBlock />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
