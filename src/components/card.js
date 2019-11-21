import React from "react"
import { Link } from "gatsby"

import Image from "gatsby-image"

export default ({ link, title, subtitle, body, image }) => (
  <div className="rounded overflow-hidden border border-solid h-full hover:border-blue-400">
    {image && image.fixed && <Image className="w-full" fixed={image.fixed} />}
    {image && image.fluid && <Image className="w-full" fluid={image.fluid} />}
    <div className="p-3 md:p-4">
      <h1 className="font-bold text-xl">
        <Link to={link}>{title}</Link>
      </h1>
      <h2 className="text-sm">{subtitle}</h2>
      <p
        className="text-gray-700 text-base mt-2"
        dangerouslySetInnerHTML={{
          __html: body,
        }}
      ></p>
    </div>
  </div>
)
