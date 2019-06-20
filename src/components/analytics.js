import React from "react"
import { config } from "../config"

export function Analytics() {
  React.useEffect(() => {
    //some default pre init
    const Countly = (window["Countly"] = window["Countly"] || {})
    Countly.q = Countly.q || []

    //provide countly initialization parameters
    Countly.app_key = config.countly.appKey
    Countly.url = config.countly.serverUrl

    Countly.q.push(["track_sessions"])
    Countly.q.push(["track_pageview"])
    Countly.q.push(["track_clicks"])
    Countly.q.push(["track_scrolls"])
    Countly.q.push(["track_errors"])
    Countly.q.push(["track_links"])
    Countly.q.push(["track_forms"])

    var cly = document.createElement("script")
    cly.type = "text/javascript"
    cly.async = true
    //enter url of script here
    cly.src =
      "https://cdnjs.cloudflare.com/ajax/libs/countly-sdk-web/18.8.2/countly.min.js"
    cly.onload = function() {
      Countly.init()
    }
    var s = document.getElementsByTagName("script")[0]
    s.parentNode.insertBefore(cly, s)
  }, [])
  return null
}
