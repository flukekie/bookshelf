import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { Link } from "gatsby"

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query NavbarQuery {
      logo: file(absolutePath: { regex: "/logo.png/" }) {
        childImageSharp {
          fixed(height: 24) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `)

  //actual beans
  return (
    <nav className="navbar is-light">
      <div className="navbar-brand">
        <Link to={`/`} className="navbar-item">
          <Image fixed={data.logo.childImageSharp.fixed} />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
