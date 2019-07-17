import React from "react"
import axios from "axios"
import { differenceInSeconds } from "date-fns"

function isCacheOutdated(cachedObject) {
  if (cachedObject && cachedObject.value && cachedObject.lastUpdate) {
    const elapsedSeconds = differenceInSeconds(
      cachedObject.lastUpdate,
      new Date()
    )
    return elapsedSeconds > 3600
  }

  return true
}

function getCachedVersion() {
  const version = localStorage.getItem("kui.lastVersion")
  return JSON.parse(version)
}

function setCachedVersion(lastVersion) {
  const currentLastVersion = JSON.stringify({
    value: lastVersion,
    lastUpdate: new Date(),
  })
  localStorage.setItem("kui.lastVersion", currentLastVersion)
}

function queryLastVersion(onLastVersion) {
  const lastVersion = getCachedVersion()
  if (isCacheOutdated(lastVersion)) {
    axios
      .get(`https://api.github.com/repos/IBM/kui/releases/latest`)
      .then(response => {
        setCachedVersion(response.data.name)
        onLastVersion(response.data.name)
      })
  } else {
    onLastVersion(lastVersion.value)
  }
}

export const ApplicationVersion = ({ defaultVersion }) => {
  const [state, setState] = React.useState({
    version: defaultVersion,
  })

  queryLastVersion(lastVersion => {
    if (lastVersion && lastVersion !== state.version) {
      setState({ version: lastVersion })
    }
  })

  return <span>Version {state.version}, Apache-2.0 License</span>
}
