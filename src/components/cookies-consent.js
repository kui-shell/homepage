import React from "react"
import { useCookies } from "react-cookie"
import styles from "./cookies-consent.module.css"

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
      <div className={styles.cookiesConsent}>
        <div className={styles.cookiesMessage}>
          This site uses cookies to improve your experience :-)
        </div>
        <div className={styles.cookiesButtons}>
          <button
            type="button"
            className={styles.acceptCookies}
            onClick={event => setUserConsent("yes")}
          >
            Yeah, sure
          </button>
          <button
            type="button"
            className={styles.denyCookies}
            onClick={event => setUserConsent("no")}
          >
            No, please
          </button>
        </div>
      </div>
    )
  }

  return null
}
