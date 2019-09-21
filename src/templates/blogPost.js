import React from "react"
import { Link, graphql } from "gatsby"
import { kebabCase } from "lodash"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
          <header>
            <h1>{post.frontmatter.title}</h1>

            <h3>tags</h3>
            {post.frontmatter.tags ? (
              <div className="tags-container">
                {post.frontmatter.tags.map(tag => (
                  <p key={tag + `tag`}>
                    <Link to={`/tag/${kebabCase(tag)}/`}>{tag}</Link>
                  </p>
                ))}
              </div>
            ) : null}

            <h3>categories</h3>
            {post.frontmatter.categories ? (
              <div className="categories-container">
                {post.frontmatter.categories.map(cat => (
                  <p key={cat + `category`}>
                    <Link to={`/category/${kebabCase(cat)}/`}>{cat}</Link>
                  </p>
                ))}
              </div>
            ) : null}

            <p>{post.frontmatter.date}</p>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr

          />
          <footer>
            <Bio />
          </footer>
        </article>

        <nav>
          <ul>
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
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
      frontmatter {
        date(formatString: "LLL")
        title
        subtitle
        description
        categories
        tags
      }
    }
  }
`
