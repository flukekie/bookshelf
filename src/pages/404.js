import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Page Not Found" />
        <section className="container max-w-4xl">
          <header className="text-center">
            <h1 className="text-6xl">404</h1>
            <p>Page not found</p>
          </header>
        </section>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
