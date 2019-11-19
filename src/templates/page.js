import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class PageTemplate extends React.Component {
  render() {
    const page = this.props.data.markdownRemark

    return (
      <Layout>
        <SEO
          title={page.frontmatter.title}
          description={page.frontmatter.description || page.excerpt}
          pathname={this.props.location.pathname}
          isArticle={false}
        />

        <section className="hero is-dark">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-3">{page.frontmatter.title}</h1>
              {page.frontmatter.description && (
                <h2 className="subtitle is-4">
                  {page.frontmatter.description}
                </h2>
              )}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-full-mobile is-8-desktop is-paddingless">
                <div className="card">
                  <div className="card-content">
                    <div
                      className="content"
                      dangerouslySetInnerHTML={{ __html: page.html }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        description
      }
    }
  }
`
