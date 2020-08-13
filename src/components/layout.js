import React, { Component } from "react"

import Header from "./header"
import Footer from "./footer"

export default class layout extends Component {
  render() {
    const { children } = this.props

    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        {children}
        <Footer />
      </div>
    )
  }
}
