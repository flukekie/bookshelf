import React from "react"

import Navbar from "./navbar"
import Footer from "./footer"

class Layout extends React.Component {
  render() {
    const { children } = this.props

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
