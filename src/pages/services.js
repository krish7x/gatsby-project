import React from "react"
import Layout from "../components/layout"
import HeroSection from "../components/Reusable/HeroSection"
import { graphql } from "gatsby"
import InfoBlock from "../components/Reusable/InfoBlock"
import ServiceBlock from "../components/Services/Services"
import Heading from "../components/Reusable/Heading"
//import DualInfoBlock from "../components/Reusable/DualInfoBlock"

const ServicePage = ({ data }) => (
  <Layout>
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="Our Services"
      heroClass="about-bg"
      headingColor="services-heading"
    />
    <Heading title="Our Team" id="our-team" />
    <ServiceBlock
      src1="https://scontent.fmaa2-2.fna.fbcdn.net/v/t31.0-8/p960x960/26756650_1219104388220719_8985566355408941896_o.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=8RDBHq2R40EAX_ejWFV&_nc_ht=scontent.fmaa2-2.fna&_nc_tp=6&oh=673548827a09fdcd9e43ec15f87d5f18&oe=5EA40B3A"
      title1="Hitesh"
      src2="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      title2="Krish"
      src3="https://images.pexels.com/photos/2625122/pexels-photo-2625122.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      title3="Samantha"
    />
    <ServiceBlock
      src1="https://images.pexels.com/photos/2287252/pexels-photo-2287252.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      title1="Andreson"
      src2="https://images.pexels.com/photos/938642/pexels-photo-938642.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      title2="Manoj"
      src3="https://images.pexels.com/photos/2556089/pexels-photo-2556089.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      title3="Claura"
    />
    <InfoBlock heading="Our Goals" />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "contact.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default ServicePage

// <DualInfoBlock
// heading="Message From Us"
// src="https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
// />
