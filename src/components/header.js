import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import logo from "../assets/logo.png"
import logoDark from "../assets/logo_dark.png"

const Navbar = () => {
  return (
    <header className="header flex flex-wrap items-center px-4 lg:px-8 py-2 lg:py-0 mb-4 border-b">
      <div className="flex flex-1 items-center justify-between">
        <Link to={`/`}>
          <picture>
            <source srcSet={logoDark} media="(prefers-color-scheme: dark)" />
            <source
              srcSet={logo}
              media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
            />
            <img src={logo} alt="logo" className="h-8" />
          </picture>
        </Link>
      </div>

      <label htmlFor="menu-toggle" className="block lg:hidden cursor-pointer">
        <FontAwesomeIcon icon={faBars} className="text-2xl align-middle" />
      </label>
      <input className="hidden" type="checkbox" id="menu-toggle" />

      <div
        className="hidden lg:flex lg:items-center lg:w-auto w-full"
        id="menu"
      >
        <nav>
          <ul className="lg:flex items-center justify-between text-base pt-4 lg:pt-0">
            <li>
              <Link
                to={"/about"}
                className="-mx-4 lg:mx-0 lg:p-4 px-4 py-3 block "
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
