import React from "react"
import { Link, graphql } from "gatsby"
import { kebabCase } from "lodash"

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
        />

        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-2">{post.frontmatter.title}</h1>
              <h2 className="subtitle is-4">{post.frontmatter.date}</h2>
            </div>
          </div>
          <div className="hero-footer">
            <div className="container">
              <nav className="level">
                {/* Left side */}
                <div className="level-left">
                  <div className="level-item">
                    {post.frontmatter.tags ? (
                      <div className="tags">
                        {post.frontmatter.tags.map(tag => (
                          <span className="tag" key={tag + `tag`}>
                            <Link to={`/tag/${kebabCase(tag)}/`}>{tag}</Link>
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
                {/* Right side */}
                <div className="level-right">
                  <div className="level-item">
                    {post.frontmatter.categories ? (
                      <div className="tags">
                        {post.frontmatter.categories.map(cat => (
                          <span
                            className="tag is-rounded"
                            key={cat + `category`}
                            cat={cat}
                          >
                            <Link to={`/category/${kebabCase(cat)}/`}>
                              {cat}
                            </Link>
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </section>

        <section className="section">
          <div
            className="content container"
            dangerouslySetInnerHTML={{ __html: post.html }}
          ></div>
        </section>

        <section className="container">
          <div className="container">
            <nav className="level">
              {/* Left side */}
              <div className="level-left">
                <div className="level-item">
                  {previous && (
                    <Link
                      to={previous.fields.slug}
                      rel="prev"
                      className="button"
                    >
                      ← {previous.frontmatter.title}
                    </Link>
                  )}
                </div>
              </div>
              {/* Right side */}
              <div className="level-right">
                <div className="level-item">
                  {next && (
                    <Link to={next.fields.slug} rel="next" className="button">
                      {next.frontmatter.title} →
                    </Link>
                  )}
                </div>
              </div>
            </nav>
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
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      tableOfContents
      frontmatter {
        date(formatString: "LL")
        title
        subtitle
        description
        categories
        tags
      }
    }
  }
`
