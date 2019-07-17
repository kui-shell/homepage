import React from "react"
import axios from "axios"
import { localCache } from "../utils/cache"

const queryLastVersion = async () => {
  const lastVersion = localCache.getItem("kui.lastUpdate")
  if (!localCache.isOutdated(lastVersion)) {
    return lastVersion.value
  }

  const response = await axios.get(
    `https://api.github.com/repos/IBM/kui/releases/latest`
  )
  if (response.status === 200) {
    localCache.setItem("kui.lastUpdate", response.data.name)
    return response.data.name
  } else {
    throw new Error("Error trying to get the latest Github release")
  }
}

export const ApplicationVersion = ({ defaultVersion }) => {
  const [state, setState] = React.useState({
    version: defaultVersion,
  })

  React.useEffect(() => {
    async function launchQuery() {
      const lastVersion = await queryLastVersion()
      if (lastVersion && lastVersion !== state.version) {
        setState({ version: lastVersion })
      }
    }

    launchQuery()
  })

  return <span>Version {state.version}, Apache-2.0 License</span>
}
