import React from "react"
import Helmet from "react-helmet"

function scripts() {
  return (
    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono|IBM+Plex+Sans:300,400,700&display=swap" rel="stylesheet" />

      <link href="https://1.www.s81c.com/common/v18/css/www.css" rel="stylesheet" />
      <link href="https://1.www.s81c.com/common/v19a/css/www.css" rel="stylesheet" />

      <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>

      <script src="https://1.www.s81c.com/common/v18/js/www.js"></script>
      <script src="https://1.www.s81c.com/common/v19a/js/www.js"></script>
    </Helmet>
  )
}

export default scripts
