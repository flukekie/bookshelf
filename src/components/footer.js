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
    <footer className="bg-gray-100 mt-6 p-4">
      <nav className="container flex items-center justify-between flex-wrap text-gray-700 text-xl">
        <div className="flex items-center flex-shrink-0">
          <p className="text-sm">&copy; {new Date().getFullYear()} Flukekie</p>
          <a
            className="ml-2 hover:text-gray-900" 
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
          <p>

            <a
              className="ml-2 hover:text-gray-900"
              href="https://github.com/flukekie/flukekie.net"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              className="ml-2 hover:text-gray-900"
              href="https://www.facebook.com/flukekie.net"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              className="ml-2 hover:text-gray-900"
              href="https://medium.com/flukekie"
              target="_blank"
              rel="noopener noreferrer"
              title="Medium"
            >
              <FontAwesomeIcon icon={faMedium} />
            </a>
          </p>
        </div>
      </nav>
    </footer>
  )
}

export default Footer
