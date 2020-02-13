import React from "react"
import { Link, graphql } from "gatsby"
import { kebabCase } from "lodash"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default class PostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const { previous, next } = this.props.pageContext

    return (
      <Layout>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          pathname={this.props.location.pathname}
          image={
            post.frontmatter.cover
              ? post.frontmatter.cover.childImageSharp.fluid
              : null
          }
          isArticle={true}
          created={post.frontmatter.created}
          updated={post.frontmatter.updated}
          tags={post.frontmatter.tags}
        />

        <section className="container max-w-4xl px-4 lg:px-0">
          {post.frontmatter.cover && (
            <Image fluid={post.frontmatter.cover.childImageSharp.fluid} />
          )}

          <main>
            <header className="mb-8">
              <h1 className="font-bold text-3xl lg:text-4xl">
                {post.frontmatter.title}
              </h1>
              {post.frontmatter.description && (
                <p className="text-xl lg:text-2xl">
                  {post.frontmatter.description}
                </p>
              )}
              <p className="text-lg">
                {post.frontmatter.date_created}
                {post.frontmatter.created !== post.frontmatter.updated && (
                  <p className="text-lg">
                    Updated: {post.frontmatter.date_updated}
                  </p>
                )}
              </p>
            </header>
            <section
              className="content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <nav className="flex flex-wrap justify-center">
              {post.frontmatter.tags && (
                <div className="tags">
                  {post.frontmatter.tags.map(tag => (
                    <Link
                      to={`/tag/${kebabCase(tag)}/`}
                      className="tag inline-block border-2 rounded-full px-3 py-1 text-sm font-semibold mx-1"
                      key={tag + `tag`}
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              )}
            </nav>
          </main>

          <nav className="flex flex-wrap justify-center -mx-2 mt-8 mb-4">
            {previous && (
              <div className="w-full md:w-1/2 p-2 lg:p-1">
                <Link to={previous.fields.slug} rel="prev">
                  <div className="button text-left rounded overflow-hidden border border-r-2 border-b-2 border-solid p-3">
                    ← {previous.frontmatter.title}
                  </div>
                </Link>
              </div>
            )}
            {next && (
              <div className="w-full md:w-1/2 p-2 lg:p-1">
                <Link to={next.fields.slug} rel="next">
                  <div className="button text-right rounded overflow-hidden border border-r-2 border-b-2 border-solid p-3">
                    {next.frontmatter.title} →
                  </div>
                </Link>
              </div>
            )}
          </nav>
        </section>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      tableOfContents
      frontmatter {
        title
        description
        date_created: created(formatString: "LL")
        date_updated: updated(formatString: "LL")
        created
        updated
        cover {
          childImageSharp {
            fluid(maxWidth: 960, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
              presentationWidth
              presentationHeight
            }
          }
        }
        tags
      }
    }
  }
`
