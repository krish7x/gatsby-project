import React from "react"
import Layout from "../components/layout"
import HeroSection from "../components/Reusable/HeroSection"
import { graphql } from "gatsby"
import InfoBlock from "../components/Reusable/InfoBlock"
import DualInfoBlock from "../components/Reusable/DualInfoBlock"
import CourseCart from "../components/Coursecart/CourseCart"

const IndexPage = ({ data }) => (
  <Layout>
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="I Write Code"
      subtitle="LearnCodeOnline.in"
      heroClass="hero-bg"
      headingColor="home-heading"
    />
    <InfoBlock heading="ABOUT US" />
    <CourseCart courses={data.mycourses} />
    <DualInfoBlock
      heading="OUR TEAM"
      src="https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "heromain.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    mycourses: allContentfulCourses {
      edges {
        node {
          id
          title
          price
          category
          description {
            description
          }
          image {
            fixed(width: 200, height: 120) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default IndexPage
