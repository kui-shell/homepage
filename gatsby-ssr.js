/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require("react")
const { Analytics } = require("./src/components/analytics")
const { config } = require("./src/config")

exports.wrapRootElement = ({ element }) => {
  return (
    <>
      {element}
      <Analytics />
      <noscript>
        <img
          alt="analytics"
          src={`${config.countly.pixelUrl}`}
        />
      </noscript>
    </>
  )
}
