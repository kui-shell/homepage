import React from "react"

export const DownloadButton = () => {
  try {
    var userAgent = navigator.userAgent

    if (userAgent.match(/Macintosh/i)) {
      return (<DownloadLink url="https://dmg.kui-shell.org" text="macOS" />)
    } else if (userAgent.match(/Windows/i)) {
      return (<DownloadLink url="https://win32-zip.kui-shell.org" text="Windows" />)
    } else if (userAgent.match(/Linux/i)) {
      return (<DownloadLink url="https://linux-zip.kui-shell.org" text="Linux .zip" />)
    } 
  } catch (err) {
    console.warn('OS not detected');
  }

  return (<div></div>);
}

const DownloadLink = ({url, text}) => {
  return (
    <a href={url} class="kui-resources-link kui-download-link">
      <span>Download for {text}</span> <img src="./ui/download.svg" alt="download" />
    </a>
  );
}