import React from "react"
import { Link } from "gatsby"

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

      <label htmlFor="menu-toggle" className="block lg:hidden cursor-pointer border rounded p-1">
        <svg
          className="fill-current w-6 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </label>
      <input
        className="hidden"
        type="checkbox"
        aria-label="Menu Toggle"
        id="menu-toggle"
      />

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
