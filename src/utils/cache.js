import { differenceInSeconds } from "date-fns"

export const localCache = {
  isOutdated: cachedObject => {
    if (cachedObject && cachedObject.value && cachedObject.lastUpdate) {
      const elapsedSeconds = differenceInSeconds(
        cachedObject.lastUpdate,
        new Date()
      )
      return elapsedSeconds > 3600
    }

    return true
  },
  getItem: key => {
    const version = localStorage.getItem(key)
    return JSON.parse(version)
  },
  setItem: (key, value) => {
    const cachedValue = JSON.stringify({
      value: value,
      lastUpdate: new Date(),
    })
    localStorage.setItem(key, cachedValue)
  },
}
