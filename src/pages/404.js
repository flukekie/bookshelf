import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class NotFoundPage extends React.Component {
  render() {

    return (
      <Layout>
        <SEO title="Page Not Found" />
        
        <section class="hero is-large is-dark">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">Page Not Found</h1>
              <h2 class="subtitle">This is embarrasing...</h2>
            </div>
          </div>
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
