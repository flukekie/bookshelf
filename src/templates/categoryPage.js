import React from "react"

// Components
import { Link, graphql } from "gatsby"

const Categories = ({ pageContext, data }) => {
  const { cat } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const catHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } in "${cat}"`

  return (
    <div>
      <h1>{catHeader}</h1>
      <ul>
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title } = node.frontmatter
          return (
            <li key={slug}>
              <Link to={slug}>{title}</Link>
            </li>
          )
        })}
      </ul>
      <Link to="/categories">All categories</Link>
    </div>
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
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
