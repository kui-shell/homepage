import React from "react"
import {GitHubLink, DocumentationLink, HomeLink} from "./links";

const Footer = () => (
  <footer className="kui-footer">
    <div className="ibm-grid-container">
      <div className="ibm-grid-col-lg-16-12 ibm-grid-col-md-8-5">
        <ul className="kui-link-list">
          <li><HomeLink /></li>
          <li><GitHubLink /></li>
          <li><DocumentationLink /></li>
        </ul>
        <small className="copyright">2019</small>
      </div>
      <div className="ibm-grid-col-lg-16-4 ibm-grid-col-md-8-3 kui-madebyibm">Made for the world by IBM</div>
    </div>
  </footer>
)

export default Footer
