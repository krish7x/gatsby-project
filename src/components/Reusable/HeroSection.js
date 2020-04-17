import React from "react"
import BackgroundImage from "gatsby-background-image"
export default function HeroSection({
  img,
  title,
  subtitle,
  heroClass,
  headingColor,
}) {
  return (
    <BackgroundImage className={heroClass} fluid={img}>
      <h1 className=" text-center text-uppercase display-4" id={headingColor}>
        {title}
      </h1>
      <div>
        <h4 className="text-warning">{subtitle}</h4>
      </div>
    </BackgroundImage>
  )
}
