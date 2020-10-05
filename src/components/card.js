import React from "react"
import { Link } from "gatsby"
import { kebabCase } from "lodash"

import Image from "gatsby-image"

export default ({
  link,
  title,
  datetext,
  datetime,
  body,
  image,
  tags,
  className,
}) => (
  <article className="card overflow-hidden h-full flex flex-col">
    {/* image header */}
    <Link to={link} className="w-full">

        {image && image.fixed && <Image fixed={image.fixed} />}
        {image && image.fluid && <Image fluid={image.fluid} />}

    </Link>

    {/* body */}
    <div className="px-3 md:px-4 pt-2 pb-1 h-full">
      <h1 className="font-bold text-xl">
        <Link to={link}>{title}</Link>
      </h1>
      <p
        className="text-base mt-2"
        dangerouslySetInnerHTML={{
          __html: body,
        }}
      ></p>
    </div>

    <footer className="px-3 md:px-4 py-1">
      <p className="text-sm">
        <time dateTime={datetime}>{`${datetext}`}</time>

        {tags && (
          <Link to={`/tag/${kebabCase(tags[0])}/`} className="link text-sm ml-2">
            {`${tags[0]}`}
          </Link>
        )}
      </p>
    </footer>
  </article>
)
