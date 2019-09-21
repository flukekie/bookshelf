import React from "react"

import { Link, graphql } from "gatsby"
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
      <div class="container">
        <h1 className="title">{tagHeader}</h1>
        <button className="button">
          <Link to="/tags">All tags</Link>
        </button>
        {posts.map(({ node }) => {
          return (
            <div className="card" key={node.fields.slug}>
              <div className="card-content">
                <h1 className="title is-4">
                  <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                </h1>
                <h2 className="subtitle is-6">{node.frontmatter.date}</h2>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                ></p>
              </div>
            </div>
          )
        })}
      </div>
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
          }
        }
      }
    }
  }
`
