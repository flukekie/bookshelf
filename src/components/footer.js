import React from "react"

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="columns">
            <div className="column is-6 ">
              <div className="content is-size-6">
                <p>
                  &copy; {new Date().getFullYear()} Flukekie, Built with{" "}
                  <a href="https://www.gatsbyjs.org">Gatsby</a> &amp;{" "}
                  <a href="https://bulma.io/">Bulma</a>
                  <br />
                  <a href="https://github.com/flukekie/flukekie.net">Source code</a> licensed{" "}
                  <a href="http://opensource.org/licenses/mit-license.php">
                    MIT
                  </a>
                  <br />
                  Website content licensed{" "}
                  <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                    CC BY-NC-SA 4.0
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
