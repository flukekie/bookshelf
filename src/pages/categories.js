import React from "react"
import kebabCase from "lodash/kebabCase"
import _capitalize from "lodash/capitalize"

import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const CatsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
  <Layout>
    <SEO title="All Categories" />
    <section className="hero is-primary is-bold">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h1 className="title is-2">All Categories</h1>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="content">
              <div className="field is-grouped is-grouped-multiline">
                {group.map(cat => (
                  <div className="control">
                    <div className="tags are-medium has-addons">
                      <Link
                        to={`/category/${kebabCase(cat.fieldValue)}/`}
                        className="tag is-link is-rounded"
                      >
                        {_capitalize(cat.fieldValue)}
                      </Link>
                      <span className="tag is-rounded">{cat.totalCount}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default CatsPage

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
