import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ExternalScripts from "../components/external-scripts"
import CopyCode from "../components/copy-code"
import { KuiExamples, Tab} from "../components/kui-examples"
import { DownloadButton } from "../components/download-button"

import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Kui"
      keywords={[`kui`, `kubernetes`, `docker`, `openshift`]}
    />

    <ExternalScripts />

    <section className="kui-top">
      <div className="ibm-grid-container">
        <div className="ibm-grid-col-lg-16-1"></div>
        <div className="ibm-grid-col-lg-16-12 ibm-grid-col-md-8-6">
          <h2 className="kui-tagline">
            kui is a terminal<br />
            with visualizations<br />
            by and for developers<br />
          </h2>
        </div>
        <div className="ibm-grid-col-lg-16-3"></div>
        <div className="ibm-grid-col-lg-16-1"></div>
        <div className="ibm-grid-col-lg-16-3 kui-version ibm-type-a">
          <div className="divider"></div>
          <span>Version 1.0.1, Apache-2.0 License</span>
        </div>
      </div>
      <div className="ibm-grid-container">
        <div className="ibm-grid-col-lg-16-1"></div>
        <div className="ibm-grid-col-lg-16-14">
          <video muted autoPlay controls loop className="kui-hero-video">
          <source src={'videos/video1.mp4'} type="video/mp4" />
          Your browser does not support the video tag.
          </video>
        </div>
        <div className="ibm-grid-col-lg-16-1"></div>
      </div>
      <div className="ibm-grid-container">
        <div className="ibm-grid-col-lg-16-1"></div>
        <ul className="ibm-grid-col-lg-16-10 ibm-grid-col-md-8-4 kui-packages">
          <CopyCode title="Brew" command="brew command"/>
          <CopyCode title="NPM" command="npm command"/>
        </ul>
        <ul className="ibm-grid-col-lg-16-4 ibm-grid-col-md-8-4 kui-links">
          <h3 className="ibm-type-a">Resources</h3>
          <DownloadButton />
          <a href="https://github.com/IBM/kui/releases" className="kui-resources-link">
            <span>All Downloads</span>
            <img src={'ui/pagelink.svg'} alt="Link" />
          </a>
        </ul>
        <div className="ibm-grid-col-lg-16-1"></div>
      </div>
    </section>

    <KuiExamples>
        <Tab title="Nice output" reference="images/nice-tables.png" subtitle="Nicer output visualization to increase productivity" />
        <Tab title="Output details" reference="images/sidecar.png" subtitle="Fast access to the resources details" />
        <Tab title="K8s Contexts" reference="images/contexts.png" subtitle="Change your K8s context with 1 click" />
    </KuiExamples>

    <section className="kui-marketing-container">
      <div className="ibm-grid-container kui-marketing">
        <div className="ibm-grid-col-lg-16-4 ibm-grid-col-md-8-4 ">
          <h2 className="ibm-type-f">A Modern and Open Take on the Terminal</h2>
          <div className="divider divider-black"></div>
        </div>
        <div className="ibm-grid-col-lg-16-4 ibm-grid-col-md-8-4">
          <div className="ibm-type-b">
            <h3 className="ibm-type-b">Compatibility</h3>
            Kui is designed for the open cloud. Kui works with any Kubernetes or Apache OpenWhisk provider.
          </div>
        </div>
        <div className="ibm-grid-col-lg-16-4 ibm-grid-col-md-8-4">
          <div>
            <h3 className="ibm-type-b">Our commitment</h3>
            <ol className="ibm-type-b">
              <li>Stability. Kui is coded on a solid TypeScript foundation, covered by thousands of tests.</li>
              <li>Rapid evolution, in response to user's needs.</li>
              <li>A flexible and open extension mechanism.</li>
            </ol>
          </div>
        </div>
        <div className="ibm-grid-col-lg-16-4 ibm-grid-col-md-8-4">
          <div className="ibm-type-b">
            <h3 className="ibm-type-b">By DevOps, for DevOps</h3>
            Kui was created by and for developers and systems operators, based on decades of experience with terminals and consoles. We feel your pain.
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
