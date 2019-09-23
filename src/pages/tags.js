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
    <section className="hero is-primary is-bold">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h1 className="title is-2">All Tags</h1>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column ">
            <div className="content">
              <div className="field is-grouped is-grouped-multiline">
                {group.map(tag => (
                  <div className="control">
                    <div className="tags are-medium has-addons">
                      <Link
                        to={`/tag/${kebabCase(tag.fieldValue)}/`}
                        className="tag is-link"
                      >
                        {_capitalize(tag.fieldValue)}
                      </Link>
                      <span className="tag">{tag.totalCount}</span>
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
