import React from "react"
import kebabCase from "lodash/kebabCase"
import _capitalize from "lodash/capitalize"

import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
  <Layout>
    <SEO title="All Tags" />
    <section>
      <div className="container my-6">
        <h1 className="text-4xl mb-4">All tags</h1>
      </div>
    </section>
    <section>
      <div className="container my-6">
        {group.map(tag => (
          <div className="inline-block mr-2">
            <Link to={`/tag/${kebabCase(tag.fieldValue)}/`}>
              <span className="inline-block bg-blue-200 rounded-l px-3 py-1 text-sm font-semibold text-gray-700">
                {_capitalize(tag.fieldValue)}
              </span>
              <span className="inline-block bg-gray-200 rounded-r px-3 py-1 text-sm font-semibold text-gray-700">
                {tag.totalCount}
              </span>
            </Link>
          </div>
        ))}
      </div>
    </section>

  </Layout>
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
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
