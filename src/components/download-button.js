import React from "react"

const MAC = "MacOS";
const WINDOWS = "Windows";
const LINUX = "Linux";
const UNKNOWN = "Unknown";

const detectOS = () => {
  try {
    console.log('Detecting user agent');

    var userAgent = navigator.userAgent

    if (userAgent.match(/Macintosh/i)) {
      return MAC
    } else if (userAgent.match(/Windows/i)) {
      return WINDOWS
    } else if (userAgent.match(/Linux/i)) {
      return LINUX
    } else {
      return UNKNOWN
    }
  } catch (err) {
    return UNKNOWN
  }
}

const DownloadButton = () => {
  var currentOS = detectOS()

  return <div>this is a download button for {currentOS}</div>
}

export default DownloadButton
