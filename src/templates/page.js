import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

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

        <section className="container max-w-4xl">
          {page.frontmatter.cover && (
            <Image fluid={page.frontmatter.cover.childImageSharp.fluid} />
          )}

          <main>
            <header className="pb-8">
              <h1 className="font-bold text-4xl">{page.frontmatter.title}</h1>
              {page.frontmatter.description && (
                <p className="text-2xl">{page.frontmatter.description}</p>
              )}
            </header>
            <section
              className="content"
              dangerouslySetInnerHTML={{ __html: page.html }}
            />
          </main>

          
        </section>
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
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
