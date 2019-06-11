import React from "react"

const Header = () => (
  <header class="kui-main-nav">
    <div class="ibm-grid-container">
      <div class="ibm-grid-col-lg-16-16 kui-nav-border"></div>
      <div class="ibm-grid-col-lg-16-1 ibm-grid-col-md-8-1 ibm-grid-col-sm-4-1">
        <h1>Kui</h1>
      </div>
      <div class="ibm-grid-col-lg-16-9 ibm-grid-col-md-8-2 ibm-grid-col-sm-4-0"></div>
      <div class="ibm-grid-col-lg-16-6 ibm-grid-col-md-8-5 ibm-grid-col-sm-4-3">
        <button class="icon-button mobile-menu">
          <img src="./ui/menu.svg" alt="Menu" />
        </button>
        <nav>
          <ul class="kui-link-list">
            <li><a href="#">GitHub</a></li>
            <li><a href="#">Documentation</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
)

export default Header
