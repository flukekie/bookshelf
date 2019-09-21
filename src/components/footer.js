import React from "react"

class Footer extends React.Component {
  render() {
    //actual beans
    return (
      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            &copy; {new Date().getFullYear()} Flukekie, Built with{" "}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
            Source code licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
            Website content licensed{" "}
            <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
              CC BY NC SA 4.0
            </a>
            .
          </p>
        </div>
      </footer>
    )
  }
}

export default Footer
