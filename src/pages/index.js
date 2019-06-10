import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import copyIcon from "../ui/copy.svg"
import downloadIcon from "../ui/download.svg"
import pagelinkIcon from "../ui/pagelink.svg"

import video1 from "../videos/video1.mp4"
import video2 from "../videos/video2.mp4"
import video3 from "../videos/video3.mp4"
import video4 from "../videos/video4.mp4"

import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Kui"
      keywords={[`kui`, `kubernetes`, `docker`, `openshift`]}
    />

    <section class="kui-top">
      <div class="ibm-grid-container">
        <div class="ibm-grid-col-lg-16-1"></div>
        <div class="ibm-grid-col-lg-16-12 ibm-grid-col-md-8-6">
          <h2 class="kui-tagline">
            kui is an open-source,<br />
            graphical terminal<br />
            designed for dev-ops<br />
          </h2>
        </div>
        <div class="ibm-grid-col-lg-16-3"></div>
        <div class="ibm-grid-col-lg-16-1"></div>
        <div class="ibm-grid-col-lg-16-3 kui-version ibm-type-a">
          <div class="divider"></div>
          <span>Version 1.0.1, MIT License</span>
        </div>
      </div>
      <div class="ibm-grid-container">
        <div class="ibm-grid-col-lg-16-1"></div>
        <div class="ibm-grid-col-lg-16-14">
          <video muted autoplay controls loop class="kui-hero-video">
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
          </video>
        </div>
        <div class="ibm-grid-col-lg-16-1"></div>
      </div>
      <div class="ibm-grid-container">
        <div class="ibm-grid-col-lg-16-1"></div>
        <ul class="ibm-grid-col-lg-16-10 ibm-grid-col-md-8-4 kui-packages">
          <div class="kui-codepaste">
            <h3 class="ibm-type-a">Brew</h3>
            <button class="kui-codecopy">
              <span class="ibm-type-b ibm-type-mono kui-codecopy-content" data-cmd="cmd1">cmd1</span>
              <img src={copyIcon} />
            </button>
          </div>
          <div class="kui-codepaste">
            <h3 class="ibm-type-a">NPM</h3>
            <button class="kui-codecopy">
              <span class="ibm-type-b ibm-type-mono kui-codecopy-content" data-cmd="cmd2">cmd2</span>
              <img src={copyIcon} />
            </button>
          </div>
        </ul>
        <ul class="ibm-grid-col-lg-16-4 ibm-grid-col-md-8-4 kui-links">
          <h3 class="ibm-type-a">Resources</h3>
          <a href="#" class="kui-resources-link kui-download-link hidden" data-os="mac">
            <span>Download for macOS</span>
            <img src={downloadIcon} />
          </a>
          <a href="#" class="kui-resources-link kui-download-link hidden" data-os="win">
            <span>Download for Windows</span>
            <img src={downloadIcon} />
          </a>
          <a href="#" class="kui-resources-link kui-download-link hidden" data-os="lindeb">
            <span>Download for Linux .deb</span>
            <img src={downloadIcon} />
          </a>
          <a href="#" class="kui-resources-link kui-download-link hidden" data-os="linrpm">
            <span>Download for Linux .rpm</span>
            <img src={downloadIcon} />
          </a>
          <a href="#" class="kui-resources-link">
            <span>All Downloads</span>
            <img src={pagelinkIcon} />
          </a>
          <a href="#" class="kui-resources-link">
            <span>Usage</span>
            <img src={pagelinkIcon} />
          </a>
          <a href="#" class="kui-resources-link">
            <span>Examples</span>
            <img src={pagelinkIcon} />
          </a>
        </ul>
        <div class="ibm-grid-col-lg-16-1"></div>
      </div>
    </section>

    <div class="kui-examples-bg">
      <section class="ibm-grid-container kui-examples-container">
        <div class="ibm-grid-col-lg-16-1"></div>
        <div class="ibm-grid-col-lg-16-4 ibm-grid-col-md-8-4 ibm-grid-col-sm-4-3">
          <h2 class="ibm-type-e">With Kui, you can save up to 5x of your time by running a single command.</h2>
        </div>
        <div class="ibm-grid-col-lg-11"></div>
        <div class="ibm-grid-col-lg-16-1"></div>
        <div class="ibm-grid-col-lg-16-14 kui-examples-tabs">
          <div class="ibm-text-tabs">
            <ul role="tablist" class="ibm-tabs" aria-label="Tab navigation">
              <li class="ibm-tab" role="presentation">
                <a aria-selected="true" role="tab" href={video2} class="ibm-active" data-subtitle="Subtitle for video 1">Text tab num 1</a>
              </li>
              <li class="ibm-tab" role="presentation">
                <a role="tab" href={video3} data-subtitle="Subtitle for video 2">Text tab num 2</a>
              </li>
              <li class="ibm-tab" role="presentation">
                <a role="tab" href={video4} data-subtitle="Subtitle for video 3">Text tab num 3</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="ibm-grid-col-lg-16-1"></div>
        <div class="ibm-grid-col-lg-16-1"></div>
        <div class="ibm-grid-col-lg-16-14">
          <div class="kui-video-player">
            <video class="kui-tutorial-video active" muted controls>
            <source src={video2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p class="kui-video-subtitle">Subtitle for video 1</p>
        </div>
        <div class="ibm-grid-col-lg-16-1"></div>
        <div class="ibm-grid-col-lg-16-1"></div>
      </section>
    </div>

    <section class="kui-marketing-container">
      <div class="ibm-grid-container kui-marketing">
        <div class="ibm-grid-col-lg-16-4 ibm-grid-col-md-8-4 ">
          <h2 class="ibm-type-f">A Modern and Open Take on the Terminal</h2>
          <div class="divider divider-black"></div>
        </div>
        <div class="ibm-grid-col-lg-16-4 ibm-grid-col-md-8-4">
          <div class="ibm-type-b">
            <h3 class="ibm-type-b">Compatibility</h3>
            Kui is designed for the open cloud. Kui works with any Kubernetes or OpenWhisk provider.
          </div>
        </div>
        <div class="ibm-grid-col-lg-16-4 ibm-grid-col-md-8-4">
          <div>
            <h3 class="ibm-type-b">Our commitment</h3>
            <ol class="ibm-type-b">
              <li>Stability. Kui is coded on a solid Typescript foundation, covered by thousands of tests.</li>
              <li>Rapid evolution, in response to user's needs.</li>
              <li>A flexible and open extension mechanism.</li>
            </ol>
          </div>
        </div>
        <div class="ibm-grid-col-lg-16-4 ibm-grid-col-md-8-4">
          <div class="ibm-type-b">
            <h3 class="ibm-type-b">By DevOps, for DevOps</h3>
            Kui was created by and for developers and systems operators, based on decades of experience with terminals and consoles. We feel your pain.
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
