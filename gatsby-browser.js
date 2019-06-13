/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const React = require("react")
const { Analytics } = require("./src/components/analytics")
const { Main } = require("./src/components/main")
const { config } = require("./src/config")

exports.wrapRootElement = ({ element }) => {
  return (
    <>
      {element}
      <Analytics />
      <Main />
      <noscript>
        <img
          alt="analytics"
          src={`${config.countly.pixelUrl}`}
        />
      </noscript>
    </>
  )
}

exports.onRouteUpdate = ({ location }) => {
  const Countly = window["Countly"]
  if (Countly) {
    window["Countly"].q.push(["track_pageview", location.pathname])
  }
}
