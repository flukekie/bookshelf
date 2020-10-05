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

        <main className="container max-w-2xl px-4 lg:px-0">
          <header className="mb-8">
            {/* mini primary tag */}
            {post.frontmatter.tags && (
              <p className="text-sm">
                <Link
                  to={`/tag/${kebabCase(post.frontmatter.tags[0])}/`}
                  className="link text-sm"
                >
                  {post.frontmatter.tags[0]}
                </Link>
              </p>
            )}

            {/* title */}
            <h1 className="font-bold text-3xl lg:text-4xl">
              {post.frontmatter.title}
            </h1>

            {/* description */}
            {post.frontmatter.description && (
              <p className="text-xl lg:text-2xl">
                {post.frontmatter.description}
              </p>
            )}

            {/* date stuff */}
            <time datetime={post.frontmatter.created}>
              <p className="text-base pt-1">
                {post.frontmatter.date_created}
                {post.frontmatter.created !== post.frontmatter.updated &&
                  ` (Updated: ${post.frontmatter.date_updated})`}
              </p>
            </time>
          </header>

          {/* cover image */}
          {post.frontmatter.cover && (
            <Image fluid={post.frontmatter.cover.childImageSharp.fluid} />
          )}

          {/* main content thing */}
          <section
            className="content mt-8"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </main>
        <aside className="container max-w-2xl px-4 lg:px-0">
          {/* content tags */}
          <nav className="flex flex-wrap justify-center">
            {post.frontmatter.tags && (
              <div className="tags">
                {post.frontmatter.tags.map((tag) => (
                  <Link
                    to={`/tag/${kebabCase(tag)}/`}
                    className="tag inline-block text-sm font-semibold"
                    key={tag + `tag`}
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            )}
          </nav>
          {/* previous and next page buttons */}
          <nav className="flex flex-wrap justify-center -mx-2 mt-8 mb-4">
            {previous && (
              <div className="w-full md:w-1/2 p-2 lg:p-1">
                <Link to={previous.fields.slug} rel="prev">
                  <div className="button text-left overflow-hidden h-full">
                    <div className="text-sm">← Previous</div>
                    <div className="pt-1 text-malachite-700">
                      {previous.frontmatter.title}
                    </div>
                  </div>
                </Link>
              </div>
            )}
            {next && (
              <div className="w-full md:w-1/2 p-2 lg:p-1">
                <Link to={next.fields.slug} rel="next">
                  <div className="button text-right overflow-hidden h-full">
                    <div className="text-sm">Next →</div>
                    <div className="pt-1 text-malachite-700">
                      {next.frontmatter.title}
                    </div>
                  </div>
                </Link>
              </div>
            )}
          </nav>
        </aside>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
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
