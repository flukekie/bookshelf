import React from "react"
import { Link } from "gatsby"

import Image from "gatsby-image"

export default ({ link, title, subtitle, body, image, className }) => (
  <Link to={link}>
    <div className="card overflow-hidden h-full">
      {image && image.fixed && <Image className="w-full" fixed={image.fixed} />}
      {image && image.fluid && <Image className="w-full" fluid={image.fluid} />}

      <div className="p-3 md:p-4">
        <h1 className="font-bold text-xl">
          <Link to={link}>{title}</Link>
        </h1>
        <p className="text-sm">{subtitle}</p>
        <p
          className="text-base mt-2"
          dangerouslySetInnerHTML={{
            __html: body,
          }}
        ></p>
      </div>
    </div>
  </Link>
)
