import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { posts, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout>
      <SEO title={`Tag: ${tag}`} />

      <section className="hero is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column">
                <h1 className="title is-2">{tagHeader}</h1>
                <button className="button">
                  <Link to="/tags">All tags</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <div
                  className="column is-full-mobile is-half-tablet is-one-third-desktop"
                  key={node.fields.slug}
                >
                  <Link to={node.fields.slug}>
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

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      posts: edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "LL")
            title
            description
            tags
            cover {
              childImageSharp {
                sizes(maxHeight: 480) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`
