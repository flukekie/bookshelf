import React from "react"
import { Link } from "gatsby"
import { kebabCase } from "lodash"

import Image from "gatsby-image"

export default ({ link, title, subtitle, body, image, tags, className }) => (
  <Link to={link}>
    <div className="card overflow-hidden h-full flex flex-col">
      {/* image header */}
      <div className="w-full">
        {image && image.fixed && <Image fixed={image.fixed} />}
        {image && image.fluid && <Image fluid={image.fluid} />}
      </div>

      {/* body */}
      <div className="px-3 md:px-4 pt-2 pb-1 h-full">
        <p className="text-sm pb-1">
          <Link
            to={`/tag/${kebabCase(tags[0])}/`}
            className="link text-sm"
          >
            {tags[0]}
          </Link>
        </p>

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

      {/* footer */}
      <div className="px-3 md:px-4 py-1">
        <p className="text-sm">{`${subtitle}`}</p>
      </div>
    </div>
  </Link>
)
