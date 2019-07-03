const serverUrl =
  process.env.KUI_COUNTLY_SERVER ||
  "https://countly.etx-tools.us-south.containers.appdomain.cloud"

const appKey =
  process.env.KUI_COUNTLY_KEY || "fea3cdc6859e989a4780822d32cef6ab17444356"

const pixelUrl = `${serverUrl}/pixel.png?app_key=${appKey}&begin_session=1`

export const config = {
  countly: {
    serverUrl,
    appKey,
    pixelUrl,
  },
}
