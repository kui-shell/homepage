import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import kubectlExamples from "../images/kubectl-examples.jpg"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Kui's home"
      keywords={[`kui`, `kubernetes`, `docker`, `openshift`]}
    />

    <div id="top-section">
      <div>
        Kui is an open-source, supercharged terminal designed for dev-ops.
      </div>
      <div style={{ maxWidth: `600px`, marginBottom: `1.45rem` }}>
        <img src={kubectlExamples} alt="Kubectl examples" />
      </div>
    </div>

    <div id="middle-section">
      <div>
        Kui is an open-source, supercharged terminal designed for dev-ops.
      </div>
    </div>

    <div id="bottom-section">
      <div>Made for every cloud.</div>

      <div>
        <div>Hybrid cloud</div>
        <div>
          Choose from thousands of open source packages that add new features
          and functionality to KUI, or build a package from scratch and publish
          it for everyone else to use.
        </div>
      </div>

      <div>
        <div>Hybrid cloud</div>
        <div>
          Choose from thousands of open source packages that add new features
          and functionality to KUI, or build a package from scratch and publish
          it for everyone else to use.
        </div>
      </div>

      <div>
        <div>Hybrid cloud</div>
        <div>
          Choose from thousands of open source packages that add new features
          and functionality to KUI, or build a package from scratch and publish
          it for everyone else to use.
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
