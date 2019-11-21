import React from "react"
import { Link } from "gatsby"
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <header className="mb-6">
      <nav className="flex items-center justify-between flex-wrap p-3 border-b">
        <div className="container mx-auto">
          <div className="flex items-center flex-shrink-0 text-white">
            <Link to={`/`}>
              <img src={logo} alt="logo" className="h-8"/>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar

