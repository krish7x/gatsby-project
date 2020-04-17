import React from "react"
import PropTypes from "prop-types"
import Footer from "../components/Reusable/Footer"
import "./layout.css"
import "./bootstrap.min.css"
import Navbar from "./Reusable/Navbar"

const Layout = ({ children }) => (
  <>
    <Navbar />

    {children}

    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
