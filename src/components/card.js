import React from "react"
import { Link } from "gatsby"

import Image from "gatsby-image"

export default ({ link, title, subtitle, body, image }) => (
  <Link to={link}>
    <div className="rounded overflow-hidden h-full border border-solid hover:border-blue-400 text-blue-700 hover:text-blue-500">
      <Link to={link}>
        {image && image.fixed && (
          <Image className="w-full" fixed={image.fixed} />
        )}
        {image && image.fluid && (
          <Image className="w-full" fluid={image.fluid} />
        )}
      </Link>

      <div className="p-3 md:p-4 ">
        <h1 className="font-bold text-xl">
          <Link to={link}>{title}</Link>
        </h1>
        <h2 className="text-sm text-gray-700">{subtitle}</h2>
        <p
          className="text-base text-gray-700 mt-2"
          dangerouslySetInnerHTML={{
            __html: body,
          }}
        ></p>
      </div>
    </div>
  </Link>
)
