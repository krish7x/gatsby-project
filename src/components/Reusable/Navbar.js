import React, { Component } from "react"
import { Link } from "gatsby"
import Logo from "../../images/logo.png"
import { FaCartArrowDown, FaHamburger } from "react-icons/fa"

export default class Navbar extends Component {
  state = {
    navbarState: false,
    navbarClass: "collapse navbar-collapse",
    menuItems: [
      {
        id: 1,
        text: "Home",
        url: "/",
      },
      {
        id: 2,
        text: "About",
        url: "/about",
      },
      {
        id: 3,
        text: "Services",
        url: "/services",
      },
      {
        id: 4,
        text: "Contact",
        url: "/contact",
      },
    ],
  }

  togglerMethod = () => {
    this.state.navbarState
      ? this.setState({
          navbarState: false,
          navbarClass: "collapse navbar-collapse show",
        })
      : this.setState({
          navbarState: true,
          navbarClass: "collapse navbar-collapse",
        })
  }
  render() {
    return (
      <nav className="navbar  navbar-expand-sm bg-theme text-white">
        <Link to="/" className="navbar-brand ml-5">
          <img src={Logo} alt="logo goes here" width="40px" />
        </Link>
        <button
          className="navbar-toggler"
          type="button mr-5"
          onClick={this.togglerMethod}
        >
          <FaHamburger className="text-white" style={{ fontSize: "2rem" }} />
        </button>

        <div className={this.state.navbarClass}>
          <ul className="navbar-nav ml-auto mr-5">
            {this.state.menuItems.map(menu => {
              return (
                <li key={menu.id} className="nav-item">
                  <Link to={menu.url} className="nav-link text-white">
                    {menu.text}
                  </Link>
                </li>
              )
            })}
            <li>
              <FaCartArrowDown className="cart-icon" />
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
