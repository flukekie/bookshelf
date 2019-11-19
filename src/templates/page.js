import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class PageTemplate extends React.Component {
  render() {
    const page = this.props.data.markdownRemark

    return (
      <Layout>
        <SEO
          title={page.frontmatter.title}
          description={page.frontmatter.description || page.excerpt}
          pathname={this.props.location.pathname}
          isArticle={false}
        />

        <div className="container mx-auto max-w-4xl my-6">
          <div className="pb-8">
            <h1 className="font-bold text-4xl">{page.frontmatter.title}</h1>
            {page.frontmatter.description && (
              <h2 className="text-2xl">{page.frontmatter.description}</h2>
            )}
          </div>

          <article
            className="content leading-relaxed"
            dangerouslySetInnerHTML={{ __html: page.html }}
          />
        </div>
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        description
      }
    }
  }
`
