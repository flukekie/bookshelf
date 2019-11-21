import React from "react"

const Footer = () => {
  return (
    <footer className="bg-gray-200 p-6">
      <div className="container mx-auto">
        <div className="text-gray-800 leading-relaxed">
          <p>
            &copy; {new Date().getFullYear()} Flukekie, Built with{" "}
            <a
              href="https://www.gatsbyjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gatsby
            </a>{" "}
            &amp;{" "}
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tailwind
            </a>
            <br />
            <a
              href="https://github.com/flukekie/flukekie.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source code
            </a>{" "}
            licensed{" "}
            <a
              href="http://opensource.org/licenses/mit-license.php"
              target="_blank"
              rel="noopener noreferrer"
            >
              MIT
            </a>
            <br />
            Website content licensed{" "}
            <a
              href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CC BY-NC-SA 4.0
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
