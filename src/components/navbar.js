import React from "react"
import { Link } from "gatsby"
import logo from "../assets/logo.png"

const Navbar = () => {


  //actual beans
  return (
    <nav className="navbar is-light">
      <div className="navbar-brand">
        <Link to={`/`} className="navbar-item">
          <img src={logo} alt=""></img>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
