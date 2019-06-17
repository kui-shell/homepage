const addCountlyEvent = (options) => {
  const Countly = (window["Countly"] = window["Countly"] || {})
  Countly.q = Countly.q || []
  Countly.q.push(['add_event', options])
}

export default addCountlyEvent;