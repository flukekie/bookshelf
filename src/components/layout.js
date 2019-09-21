import React from "react"

import "../styles/main.scss"
import Navbar from "./navbar"
import Footer from "./footer"

class Layout extends React.Component {
  render() {
    const { children } = this.props

    //actual beans
    return (
      <div>
        <Navbar />
        {children}
        <Footer />
      </div>
    )
  }
}

export default Layout
