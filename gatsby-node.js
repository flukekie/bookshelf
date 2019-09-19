const _ = require("lodash")
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`./src/templates/blogPost.js`)
  const tagPageTemplate = path.resolve(`./src/templates/tagPage.js`)
  const categoryPageTemplate = path.resolve(`./src/templates/categoryPage.js`)

  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                tags
                categories
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogPostTemplate,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })

  /* create Tags pages */
  // pulled directly from https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/#add-tags-to-your-markdown-files

  let tags = []

  // Iterate through each post, putting all found tags into `tags`
  _.each(posts, edge => {
    if (_.get(edge, "node.frontmatter.tags")) {
      tags = tags.concat(edge.node.frontmatter.tags)
    }
  })
  // Eliminate duplicate tags
  tags = _.uniq(tags)

  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tag/${_.kebabCase(tag)}/`,
      component: tagPageTemplate,
      context: { tag },
    })
  })

  // same thing but categories
  let categories = []

  // Iterate through each post, putting all found cats into `cats`
  _.each(posts, edge => {
    if (_.get(edge, "node.frontmatter.categories")) {
      categories = categories.concat(edge.node.frontmatter.categories)
    }
  })
  // Eliminate duplicate cats
  categories = _.uniq(categories)

  // Make cat pages
  categories.forEach(cat => {
    createPage({
      path: `/category/${_.kebabCase(cat)}/`,
      component: categoryPageTemplate,
      context: { cat },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
