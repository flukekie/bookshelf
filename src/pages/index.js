import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Homepage extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout>
        <SEO title="Homepage" />
        <section className="section">
          <div className="container">
            <div className="columns is-multiline">
              {posts.map(({ node }) => {
                return (
                  <div
                    className="column is-full-mobile is-half-tablet is-one-third-desktop"
                    key={node.fields.slug}
                  >
                    <Link to={node.fields.slug}>
                      <div className="card" style={{ height: "100%" }}>
                        <div className="card-image">
                          {node.frontmatter.cover && (
                            <Image
                              className="image"
                              sizes={
                                node.frontmatter.cover.childImageSharp.fluid
                              }
                            />
                          )}
                        </div>
                        <div className="card-content">
                          <h1 className="title is-4">
                            <Link to={node.fields.slug}>
                              {node.frontmatter.title || node.fields.slug}
                            </Link>
                          </h1>
                          <h2 className="subtitle is-6">
                            {node.frontmatter.created}
                          </h2>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                node.frontmatter.subtitle ||
                                node.frontmatter.description ||
                                node.excerpt,
                            }}
                          ></p>
                        </div>
                      </div>
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default Homepage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___created], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            created(formatString: "LL")
            title
            description
            tags
            cover {
              childImageSharp {
                fluid(maxHeight: 360, quality: 80, toFormat: WEBP) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
