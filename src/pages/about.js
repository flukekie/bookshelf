import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class AboutPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="About" />
        <section className="hero is-large is-primary">
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column">
                  <h1 className="title">This is about page</h1>
                  <h2 className="subtitle">Coming soon...</h2>
                  <hr />
                  <h3 className="subtitle">This blog but somewhere else</h3>
                  <div className="buttons">
                    <a
                      href="https://www.facebook.com/flukekienet"
                      className="button is-primary is-inverted is-outlined"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Facebook</span>
                    </a>
                    <a
                      href="https://medium.com/flukekie"
                      className="button is-primary is-inverted is-outlined"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Medium</span>
                    </a>
                    <a
                      href="https://github.com/flukekie/flukekie.net"
                      className="button is-primary is-inverted is-outlined"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>GitHub</span>
                    </a>
                  </div>
                  <h3 className="subtitle">Some other contacts</h3>
                  <div className="buttons">
                    <a
                      href="https://twitch.tv/flukekie"
                      className="button is-primary is-inverted is-outlined"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Twitch</span>
                    </a>
                    <a
                      href="https://www.reddit.com/user/flukekie"
                      className="button is-primary is-inverted is-outlined"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Reddit</span>
                    </a>
                    <a
                      href="https://keybase.io/flukekie"
                      className="button is-primary is-inverted is-outlined"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Keybase</span>
                    </a>
                    <a
                      href="https://github.com/flukekie"
                      className="button is-primary is-inverted is-outlined"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>GitHub</span>
                    </a>
                    <a
                      href="https://t.me/flukekie"
                      className="button is-primary is-inverted is-outlined"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Telegram</span>
                    </a>
                    <a
                      href="https://mastodon.social/@flukekie"
                      className="button is-primary is-inverted is-outlined"
                      target="_blank"
                      rel="me noopener noreferrer"
                    >
                      <span>Mastodon</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
