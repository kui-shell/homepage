import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ExternalScripts from "../components/external-scripts"
import CopyCode from "../components/copy-code"
import { KuiExamples, Tab} from "../components/kui-examples"

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
            kui is an open-source,<br />
            graphical terminal<br />
            designed for dev-ops<br />
          </h2>
        </div>
        <div className="ibm-grid-col-lg-16-3"></div>
        <div className="ibm-grid-col-lg-16-1"></div>
        <div className="ibm-grid-col-lg-16-3 kui-version ibm-type-a">
          <div className="divider"></div>
          <span>Version 1.0.1, MIT License</span>
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
          <a href="#" className="kui-resources-link kui-download-link hidden" data-os="mac">
            <span>Download for macOS</span>
            <img src={'ui/download.svg'} alt="Download" />
          </a>
          <a href="#" className="kui-resources-link kui-download-link hidden" data-os="win">
            <span>Download for Windows</span>
            <img src={'ui/download.svg'} alt="Download" />
          </a>
          <a href="#" className="kui-resources-link kui-download-link hidden" data-os="lindeb">
            <span>Download for Linux .deb</span>
            <img src={'ui/download.svg'} alt="Download" />
          </a>
          <a href="#" className="kui-resources-link kui-download-link hidden" data-os="linrpm">
            <span>Download for Linux .rpm</span>
            <img src={'ui/download.svg'} alt="Download" />
          </a>
          <a href="#" className="kui-resources-link">
            <span>All Downloads</span>
            <img src={'ui/pagelink.svg'} alt="Link" />
          </a>
          <a href="#" className="kui-resources-link">
            <span>Usage</span>
            <img src={'ui/pagelink.svg'} alt="Link" />
          </a>
          <a href="#" className="kui-resources-link">
            <span>Examples</span>
            <img src={'ui/pagelink.svg'} alt="Link" />
          </a>
        </ul>
        <div className="ibm-grid-col-lg-16-1"></div>
      </div>
    </section>

    <KuiExamples>
        <Tab title="Text tab num 1" reference="videos/video2.mp4" subtitle="Subtitle for video 1" />
        <Tab title="Text tab num 2" reference="videos/video3.mp4" subtitle="Subtitle for video 2" />
        <Tab title="Text tab num 3" reference="videos/video4.mp4" subtitle="Subtitle for video 3" />
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
            Kui is designed for the open cloud. Kui works with any Kubernetes or OpenWhisk provider.
          </div>
        </div>
        <div className="ibm-grid-col-lg-16-4 ibm-grid-col-md-8-4">
          <div>
            <h3 className="ibm-type-b">Our commitment</h3>
            <ol className="ibm-type-b">
              <li>Stability. Kui is coded on a solid Typescript foundation, covered by thousands of tests.</li>
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
