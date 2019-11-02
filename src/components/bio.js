/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(
    graphql`
      query BioQuery {
        site {
          siteMetadata {
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
      }
    `
  )

  const { author } = data.site.siteMetadata
  return (
    <div>
      <Image fixed={data.avatar.childImageSharp.fixed} alt={author} />
      <p>
        Written by <strong>{author}</strong>
      </p>
    </div>
  )
}

export default Bio
