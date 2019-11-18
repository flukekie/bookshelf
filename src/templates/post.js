import React from "react"
import { Link, graphql } from "gatsby"
import { kebabCase } from "lodash"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogPostTemplate extends React.Component {
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
        />

        <section className="hero is-primary is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-3">{post.frontmatter.title}</h1>
              {post.frontmatter.description && (
                <h2 className="subtitle is-4">
                  {post.frontmatter.description}
                </h2>
              )}
              <p className="subtitle is-6">
                {post.frontmatter.date_created}
                {post.frontmatter.created !== post.frontmatter.updated && (
                  <p className="subtitle is-6">
                    Updated: {post.frontmatter.date_updated}
                  </p>
                )}
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-full-mobile is-8-desktop is-paddingless">
                <div className="card">
                  <div className="card-image">
                    {post.frontmatter.cover && (
                      <Image
                        className="image"
                        fluid={post.frontmatter.cover.childImageSharp.fluid}
                      />
                    )}
                  </div>
                  <div className="card-content">
                    <div
                      className="content"
                      dangerouslySetInnerHTML={{ __html: post.html }}
                    ></div>
                  </div>
                  <div className="card-footer">
                    {post.frontmatter.tags && (
                      <div className="card-footer-item tags">
                        {post.frontmatter.tags.map(tag => (
                          <span className="tag" key={tag + `tag`}>
                            <Link to={`/tag/${kebabCase(tag)}/`}>{tag}</Link>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="columns is-centered">
              {previous && (
                <div className="column is-full-mobile is-one-third-desktop">
                  <Link
                    to={previous.fields.slug}
                    rel="prev"
                    className="box has-text-left"
                  >
                    ← {previous.frontmatter.title}
                  </Link>
                </div>
              )}
              {next && (
                <div className="column is-full-mobile is-one-third-desktop">
                  <Link
                    to={next.fields.slug}
                    rel="next"
                    className="box has-text-right"
                  >
                    {next.frontmatter.title} →
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
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
