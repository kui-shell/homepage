import React from "react"
import axios from "axios"
import { localCache } from "../utils/cache"

function queryLastVersion(onLastVersion) {
  const lastVersion = localCache.getItem("kui.lastUpdate")
  if (localCache.isOutdated(lastVersion)) {
    axios
      .get(`https://api.github.com/repos/IBM/kui/releases/latest`)
      .then(response => {
        if (response.status === 200) {
          localCache.setItem("kui.lastUpdate", response.data.name)
          onLastVersion(response.data.name)
        }
      })
  } else {
    onLastVersion(lastVersion.value)
  }
}

export class ApplicationVersion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      version: props.defaultVersion,
    }
  }

  componentDidMount() {
    queryLastVersion(lastVersion => {
      if (lastVersion && lastVersion !== this.state.version) {
        this.setState({ version: lastVersion })
      }
    })
  }

  render() {
    return <span>Version {this.state.version}, Apache-2.0 License</span>
  }
}
