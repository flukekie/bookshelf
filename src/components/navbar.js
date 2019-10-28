import React from "react"
import { Link } from "gatsby"
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <nav className="navbar is-light">
      <div className="container">
        <div className="navbar-brand">
          <Link to={`/`} className="navbar-item">
            <img src={logo} alt="logo"></img>
          </Link>
        </div>
        <div class="navbar-menu">
          <div class="navbar-end">
            <Link to={`/about`} className="navbar-item">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
