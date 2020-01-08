const serverUrl =
  process.env.KUI_COUNTLY_SERVER

const appKey =
  process.env.KUI_COUNTLY_KEY

const pixelUrl = `${serverUrl}/pixel.png?app_key=${appKey}&begin_session=1`

export const config = {
  countly: {
    serverUrl,
    appKey,
    pixelUrl,
  },
}
