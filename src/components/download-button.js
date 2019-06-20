import React from "react"

function currentOS() {
  const [os, setOs] = React.useState()
  React.useEffect(() => {
    var userAgent = navigator.userAgent
    if (userAgent.match(/Macintosh/i)) {
      setOs("macos")
    } else if (userAgent.match(/Windows/i)) {
      setOs("windows")
    } else if (userAgent.match(/Linux/i)) {
      setOs("linux")
    }
  }, [])
  return os
}

export const DownloadButton = () => {
  const os = currentOS()
  switch (os) {
    case "macos":
      return (
        <DownloadLink
          url="https://dmg.kui-shell.org"
          text="Download for macOS"
        />
      )
    case "windows":
      return (
        <DownloadLink
          url="https://win32-zip.kui-shell.org"
          text="Download for Windows"
        />
      )
    case "linux":
      return (
        <DownloadLink
          url="https://linux-zip.kui-shell.org"
          text="Download for Linux .zip"
        />
      )
    default:
      return null
  }
}

const DownloadLink = ({ url, text }) => {
  return (
    <a href={url} className="kui-resources-link kui-download-link">
      <span>{text}</span>
      <img src="./ui/download.svg" alt="download" />
    </a>
  )
}
