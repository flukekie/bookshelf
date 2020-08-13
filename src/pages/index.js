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
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {posts.map(({ node }) => {
              return (
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
                  tags={node.frontmatter.tags && node.frontmatter.tags}
                />
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
