/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ lang, meta, title, description, image, pathname, isArticle }) {
  const data = useStaticQuery(
    graphql`
      query BlogData {
        site {
          siteMetadata {
            title
            description
            siteUrl
            cover
            author {
              name
              description
              social {
                facebook
                github
                twitter
              }
            }
          }
        }
        defaultcover: file(relativePath: { eq: "cover.png" }) {
          childImageSharp {
            fluid {
              src
              ...GatsbyImageSharpFluid
              presentationHeight
              presentationWidth
            }
          }
        }
      }
    `
  )
  const site = data.site.siteMetadata
  const defaultcoverimage = data.defaultcover.childImageSharp.fluid

  const metaDescription = description || site.description
  const metaImage = image ? image : defaultcoverimage
  const metaUrl = `${site.siteUrl}${pathname || `/`}`

  return (
    <Helmet title={title} titleTemplate={`%s - ${site.title}`}>
      <html lang={lang} />
      <meta name="description" content={metaDescription} />

      <meta name="og:site_name" content={site.title} />
      <meta name="og:type" content={isArticle ? `article` : `website`} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:url" content={metaUrl} />

      {metaImage && (
        <meta name="og:image" content={`${site.siteUrl}${metaImage.src}`} />
      )}
      {metaImage.presentationWidth && (
        <meta name="og:image:width" content={metaImage.presentationWidth} />
      )}
      {metaImage.presentationHeight && (
        <meta name="og:image:height" content={metaImage.presentationHeight} />
      )}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {metaImage && (
        <meta
          name="twitter:image"
          content={`${site.siteUrl}${metaImage.src}`}
        />
      )}
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `th`,
  meta: [],
  description: ``,
  pathname: ``,
  image: ``,
  isArticle: false,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
