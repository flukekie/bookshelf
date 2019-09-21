import React from "react"

import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Categories = ({ pageContext, data }) => {
  const { cat } = pageContext
  const { posts, totalCount } = data.allMarkdownRemark
  const catHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } in "${cat}"`

  return (

    <Layout>
    <SEO title={`Category: ${cat}`} />
    <div class="container">
        <h1 className="title">{catHeader}</h1>
        <button className="button">
          <Link to="/categories">All categories</Link>
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

export default Categories

export const pageQuery = graphql`
  query($cat: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { in: [$cat] } } }
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
