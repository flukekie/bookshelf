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
                const title = node.frontmatter.title || node.fields.slug
                return (
                  <div className="column is-full-mobile is-half-tablet is-one-third-desktop" key={node.fields.slug}>
                    <div className="card">
                      <div className="card-image">
                        {node.frontmatter.cover && (
                          <Image
                            className="image"
                            fluid={node.frontmatter.cover.childImageSharp.sizes}
                          />
                        )}
                      </div>
                      <div className="card-content">
                        <h1 className="title is-4">
                          <Link to={node.fields.slug}>{title}</Link>
                        </h1>
                        <h2 className="subtitle is-6">
                          {node.frontmatter.date}
                        </h2>
                        <p
                          dangerouslySetInnerHTML={{
                            __html:
                              node.frontmatter.description || node.excerpt,
                          }}
                        ></p>
                      </div>
                    </div>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "LL")
            title
            description
            cover {
              childImageSharp {
                sizes(maxHeight: 480) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            tags
          }
        }
      }
    }
  }
`
