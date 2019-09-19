import React from "react"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <div>
    <Helmet title={title} />
    <div>
      <h1>Categories</h1>
      <ul>
        {group.map(cat => (
          <li key={cat.fieldValue}>
            <Link to={`/category/${kebabCase(cat.fieldValue)}/`}>
              {cat.fieldValue} ({cat.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
)


export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___categories) {
        fieldValue
        totalCount
      }
    }
  }
`
