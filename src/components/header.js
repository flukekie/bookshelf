import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <header className="flex flex-wrap items-center px-4 lg:px-8 py-2 lg:py-0 mb-4 border-b">
      <div className="flex flex-1 items-center justify-between">
        <Link to={`/`}>
          <img src={logo} alt="logo" className="h-8" />
        </Link>
      </div>

      <label htmlFor="menu-toggle" className="block lg:hidden cursor-pointer">
        <FontAwesomeIcon
          icon={faBars}
          className="text-2xl align-middle text-gray-900"
        />
      </label>
      <input className="hidden" type="checkbox" id="menu-toggle" />

      <div
        className="hidden lg:flex lg:items-center lg:w-auto w-full"
        id="menu"
      >
        <nav>
          <ul className="lg:flex items-center justify-between text-base text-gray-800 pt-4 lg:pt-0">
            <li>
              <Link
                to={"/about"}
                className="-mx-4 lg:mx-0 lg:p-4 px-4 py-3 block hover:bg-gray-100 hover:text-blue-700"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
