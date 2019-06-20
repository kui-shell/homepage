import React from "react"
import { useCookies } from "react-cookie"

export const CookiesConsent = () => {
  const [cookies, setCookie] = useCookies([
    "cookiesConsent",
    "cookiesDialogDismissed",
  ])
  const Countly = (window["Countly"] = window["Countly"] || {})
  Countly.q = Countly.q || []

  React.useEffect(() => {
    if (cookies.CookiesConsent) {
      console.log("User consented")
    } else {
      console.log("User didn't consent")
      if (cookies.cookiesDialogDismissed) {
        console.log("User selected")
      } else {
        console.log("The user didn't select before")
      }
    }
  }, [])

  function handleCookiesConsent(e) {
    if (e.target.value === "yes") {
      setCookie("cookiesConsent", true)
      Countly.opt_in()
      Countly.add_consent([
        "sessions",
        "events",
        "views",
        "scrolls",
        "clicks",
        "forms",
      ])
    } else {
      setCookie("cookieConsent", false)
      Countly.remove_consent([
        "sessions",
        "events",
        "views",
        "scrolls",
        "clicks",
        "forms",
      ])
    }
    setCookie("cookiesDialogDismissed", true)
  }

  if (!cookies.cookiesDialogDismissed) {
    return (
      <div>
        This is the Cookies Consent dialog
        <button type="button" value="yes" onClick={handleCookiesConsent}>
          Yes
        </button>
        <button type="button" value="no" onClick={handleCookiesConsent}>
          No, please
        </button>
      </div>
    )
  }

  return null
}
