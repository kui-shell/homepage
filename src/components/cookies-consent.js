import React from "react"
import { useCookies } from "react-cookie"

const defaultConsents = [
  "sessions",
  "events",
  "views",
  "scrolls",
  "clicks",
  "forms",
]

export const CookiesConsent = () => {
  const [cookies, setCookie] = useCookies([
    "cookiesConsent",
    "cookiesDialogDismissed",
  ])
  const [userConsent, setUserConsent] = React.useState()

  React.useEffect(() => {
    const Countly = (window["Countly"] = window["Countly"] || {})
    Countly.q = Countly.q || []

    if (userConsent === "yes") {
      setCookie("cookiesConsent", true)
      Countly.opt_in()
      Countly.add_consent(defaultConsents)
      setCookie("cookiesDialogDismissed", true)
    }
    if (userConsent === "no") {
      setCookie("cookieConsent", false)
      Countly.remove_consent(defaultConsents)
      Countly.opt_out()
      setCookie("cookiesDialogDismissed", true)
    }
  }, [userConsent])

  if (!cookies.cookiesDialogDismissed) {
    return (
      <div>
        This is the Cookies Consent dialog
        <button
          type="button"
          value="yes"
          onClick={event => setUserConsent(event.target.value)}
        >
          Yes
        </button>
        <button
          type="button"
          value="no"
          onClick={event => setUserConsent(event.target.value)}
        >
          No, please
        </button>
      </div>
    )
  }

  return null
}
