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
          <div className="container mx-auto">
            <div className="flex flex-wrap -mx-0 md:-mx-2">
              {posts.map(({ node }) => {
                return (
                  <Link
                    to={node.fields.slug}
                    className="w-full md:w-1/2 lg:w-1/3 px-4 md:px-2 pb-4" 
                    key={node.fields.slug}
                  >
                    <div className="rounded overflow-hidden border border-solid h-full">
                      {node.frontmatter.cover && (
                        <Image
                          className="w-full"
                          sizes={node.frontmatter.cover.childImageSharp.fluid}
                        />
                      )}

                      <div className="p-3 md:p-4">
                        <h1 className="font-bold text-xl">  
                          <Link to={node.fields.slug}>
                            {node.frontmatter.title || node.fields.slug}
                          </Link>
                        </h1>
                        <h2 className="text-sm">
                          {node.frontmatter.created}
                        </h2>
                        <p
                          className="text-gray-700 text-base mt-2"
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
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___created }
      filter: { fileAbsolutePath: { regex: "/(posts)/.*\\\\.md$/" } }
    ) {
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
