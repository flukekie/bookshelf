import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faGithub,
  faMedium,
  faCreativeCommons,
  faCreativeCommonsBy,
  faCreativeCommonsNc,
  faCreativeCommonsSa,
} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <footer className="footer mt-4 p-4 border-t">
      <nav className="container flex items-center justify-between flex-wrap">
        <div className="flex items-center flex-shrink-0">
          <small className="text-sm">
            &copy; {new Date().getFullYear()} Flukekie
          </small>
          <a
            className="icon"
            href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
            target="_blank"
            rel="noopener noreferrer"
            title="CC BY-NC-SA 4.0"
          >
            <FontAwesomeIcon icon={faCreativeCommons} />
            <FontAwesomeIcon icon={faCreativeCommonsBy} />
            <FontAwesomeIcon icon={faCreativeCommonsNc} />
            <FontAwesomeIcon icon={faCreativeCommonsSa} />
          </a>
        </div>
        <div className="flex items-center flex-shrink-0">
          <a
            className="icon"
            href="https://github.com/flukekie/flukekie.net"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            className="icon"
            href="https://www.facebook.com/flukekie.net"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            className="icon"
            href="https://medium.com/flukekie"
            target="_blank"
            rel="noopener noreferrer"
            title="Medium"
          >
            <FontAwesomeIcon icon={faMedium} />
          </a>
        </div>
      </nav>
    </footer>
  )
}

export default Footer
