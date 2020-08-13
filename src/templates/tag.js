import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { posts, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout>
      <SEO title={`Tag: ${tag}`} />

      <section>
        <div className="container mb-4 px-4 md:px-0">
          <h1 className="text-4xl mb-4">{tagHeader}</h1>
          <button class="button py-2 px-4 border rounded">
            <Link to="/tags">View all tags</Link>
          </button>
        </div>
      </section>

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

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___created], order: DESC }
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
