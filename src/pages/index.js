import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import kubectlExamples from "../images/kubectl-examples.jpg";

const IndexPage = () => (
  <Layout>
    <SEO title="Kui's home" keywords={[`kui`, `kubernetes`, `docker`, `openshift`]} />
    <h1>Kui</h1>
    <p>This is the Kui's landing page.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `600px`, marginBottom: `1.45rem` }}>
      <img src={kubectlExamples} alt="Kubectl examples"></img>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/page-3/">Go to page 3</Link>
  </Layout> 
)

export default IndexPage
