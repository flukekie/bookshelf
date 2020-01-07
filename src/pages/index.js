import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"

export default class Homepage extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout>
        <SEO />

        <section className="container">
          <div className="flex flex-wrap -mx-0 md:-mx-2">
            {posts.map(({ node }) => {
              return (
                <div className="w-full md:w-1/2 lg:w-1/3 px-4 md:px-2 pb-4">
                  <Card
                    link={node.fields.slug}
                    title={node.frontmatter.title}
                    subtitle={node.frontmatter.created}
                    body={
                      node.frontmatter.subtitle ||
                      node.frontmatter.description ||
                      node.excerpt
                    }
                    image={
                      node.frontmatter.cover &&
                      node.frontmatter.cover.childImageSharp
                    }
                  />
                </div>
              )
            })}
          </div>
        </section>
      </Layout>
    )
  }
}

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
