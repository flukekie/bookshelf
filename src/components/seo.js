/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {Helmet} from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({
  lang,
  title,
  description,
  image,
  pathname,
  isArticle,
  created,
  updated,
  tags,
}) {
  const data = useStaticQuery(
    graphql`
      query BlogData {
        site {
          siteMetadata {
            title
            description
            siteUrl
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
              ...GatsbyImageSharpFluid
              src
              presentationWidth
              presentationHeight
            }
          }
        }
        defaultlogo: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
              src
              presentationWidth
              presentationHeight
            }
          }
        }
      }
    `
  )
  const site = data.site.siteMetadata
  const defaultcoverimage = data.defaultcover.childImageSharp.fluid
  const defaultlogo = data.defaultlogo.childImageSharp.fluid
  const siteTitle = title
    ? `${title} - ${site.title}`
    : `${site.title} - ${site.description}`

  const metaTitle = title ? title : site.title
  const metaDescription = description || site.description
  const metaImage = image ? image : defaultcoverimage
  const metaUrl = `${site.siteUrl}${pathname || `/`}`

  return (
    <Helmet title={siteTitle}>
      <html lang={lang} />
      <meta name="description" content={metaDescription} />

      <meta name="og:site_name" content={site.title} />
      <meta name="og:type" content={isArticle ? `article` : `website`} />
      <meta name="og:title" content={metaTitle} />
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
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {metaImage && (
        <meta
          name="twitter:image"
          content={`${site.siteUrl}${metaImage.src}`}
        />
      )}
      
      {created && <meta name="article:published_time" content={created} />}
      {updated && <meta name="article:modified_time" content={updated} />}

      <script type={`application/ld+json`}>{`
        {
          "@context": "https://schema.org/",
          "@type": "${isArticle ? `article` : `website`}",
          "author": {
            "@type": "Person",
            "name": "${site.author.name}"
          },
          "headline": "${metaTitle}",
          "url": "${metaUrl}",
          ${tags ? `"keywords": "${tags}",` : ``}
          ${created ? `"datePublished": "${created}",` : ``}
          ${updated ? `"dateModified": "${updated}",` : ``}
          ${
            metaImage
              ? `"image": {
            "@type": "ImageObject",
            "url": "${site.siteUrl}${metaImage.src}",
            "width": "${metaImage.presentationWidth}",
            "height": "${metaImage.presentationHeight}"
          },`
              : ``
          }
          "publisher": {
            "@type": "Organization",
            "name": "${site.title}",
            "logo": {
              "@type": "ImageObject",
              "url": "${site.siteUrl}${defaultlogo.src}"
            }
          },
          "description": "${metaDescription}",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "${site.siteUrl}"
          }
        }
      `}</script>
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
