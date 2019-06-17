import React from "react"

const Header = () => (
  <header className="kui-main-nav">
    <div className="ibm-grid-container">
      <div className="ibm-grid-col-lg-16-16 kui-nav-border"></div>
      <div className="ibm-grid-col-lg-16-1 ibm-grid-col-md-8-1 ibm-grid-col-sm-4-1">
        <h1>Kui</h1>
      </div>
      <div className="ibm-grid-col-lg-16-9 ibm-grid-col-md-8-2 ibm-grid-col-sm-4-0"></div>
      <div className="ibm-grid-col-lg-16-6 ibm-grid-col-md-8-5 ibm-grid-col-sm-4-3">
        <button className="icon-button mobile-menu">
          <img src={'ui/menu.svg'} alt="Menu" />
        </button>
        <nav>
          <ul className="kui-link-list">
            <li><a href="https://github.com/IBM/kui" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://github.com/IBM/kui/blob/master/docs/installation.md" target="_blank" rel="noopener noreferrer">Documentation</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
)

export default Header
